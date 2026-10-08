import test from 'node:test';
import assert from 'node:assert/strict';
import worker from '../dist/server/index.js';
import {localDatabase} from '../server/local-database.js';
import {passwordHash} from '../src/auth.js';
import {validateInterviewSummary,interviewNotesFormat} from '../src/interviews.js';
const origin='https://talentiq.test';
const req=(path,method='GET',body,cookie='',extra={})=>new Request(origin+path,{method,headers:{origin,'content-type':'application/json',cookie,...extra},body:body===undefined?undefined:JSON.stringify(body)});
test('interviews persist ordered transcripts, recover from Groq failures and protect private notes',async()=>{
 const {pg,DB,UPLOADS}=await localDatabase(),env={DB,UPLOADS,VERCEL_RUNTIME:true,RECRUITER_EMAILS:'first@example.test,second@example.test',RECRUITER_SETUP_TOKEN:'private-test-token',GROQ_API_KEY:'test-key'};
 const previous=globalThis.fetch;let calls=0,failAudio=false,failNotes=true,silentAudio=false;
 globalThis.fetch=async(url,options)=>{
  calls++;
  if(url.includes('/audio/transcriptions')){
   if(failAudio)return new Response('{}',{status:503});
   return new Response(JSON.stringify({text:silentAudio?'':'I built a Python route planner. I tested it with 200 sample routes.'}));
  }
  assert.match(JSON.parse(options.body).messages[0].content,/Speaker identity is not verified/);
  assert.equal(JSON.parse(options.body).response_format.json_schema.name,'interview_notes');
  assert.equal(JSON.parse(options.body).response_format.json_schema.strict,true);
  if(failNotes)return new Response('{}',{status:503});
  return new Response(JSON.stringify({choices:[{message:{content:JSON.stringify({quickNotes:[{text:'Discussed a Python route planner.',evidence:'I built a Python route planner.',segmentSequence:1}],highlights:[{text:'Used 200 sample routes to test the planner.',evidence:'I tested it with 200 sample routes.',segmentSequence:2}],followUpQuestions:[{text:'How were the sample routes selected?',evidence:'200 sample routes',segmentSequence:2}]})}}]}));
 };
 try{
  await DB.prepare("INSERT INTO candidates(id,first_name,last_name,email,university,degree_program,major,graduation_date,desired_function,event_code,ai_consent,created_at,updated_at) VALUES('candidate','Demo','Person','demo@example.test','School','BS','CS','2027-05','Software','12345',1,'time','time')").run();
  await DB.prepare("INSERT INTO recruiter_observations(candidate_id,conversation_notes,updated_at) VALUES('candidate','Existing handwritten notes.','time')").run();
  let r=await worker.fetch(req('/api/auth/setup','POST',{email:'first@example.test',password:'Long-test-password',setupToken:'private-test-token'}),env);const owner=r.headers.get('set-cookie').split(';')[0];
  const salt='00'.repeat(16);await DB.prepare('INSERT INTO recruiter_accounts(email,password_salt,password_hash,iterations,created_at,updated_at) VALUES(?,?,?,?,?,?)').bind('second@example.test',salt,await passwordHash('Long-test-password',salt),210000,'time','time').run();
  r=await worker.fetch(req('/api/auth/login','POST',{email:'second@example.test',password:'Long-test-password'}),env);const other=r.headers.get('set-cookie').split(';')[0];
  const id=crypto.randomUUID(),start={id,consent:true},path='/api/candidates/candidate/interviews';
  assert.equal((await worker.fetch(req(path),env)).status,403);
  assert.equal((await worker.fetch(req(path,'POST',start),env)).status,403);
  assert.equal((await worker.fetch(req(path,'POST',{...start,consent:false},owner),env)).status,403);
  assert.equal((await worker.fetch(req(path,'POST',start,owner,{origin:'https://evil.test'}),env)).status,403);
  r=await worker.fetch(req(path,'POST',start,owner),env);assert.equal(r.status,201);
  assert.equal((await worker.fetch(req(path,'POST',start,owner),env)).status,200);
  assert.equal((await DB.prepare('SELECT COUNT(*) AS count FROM interviews').first()).count,1);
  const chunk={consent:true,sequence:1,durationMs:45000,mime:'audio/webm',base64:Buffer.alloc(200).toString('base64')};
  assert.equal((await worker.fetch(req(`/api/interviews/${id}/segments`,'POST',chunk,other),env)).status,403);
  assert.equal((await worker.fetch(req(`/api/interviews/${id}/segments`,'POST',{...chunk,consent:false},owner),env)).status,403);
  failAudio=true;r=await worker.fetch(req(`/api/interviews/${id}/segments`,'POST',chunk,owner),env);assert.equal(r.status,503);assert.equal((await DB.prepare('SELECT COUNT(*) AS count FROM interview_segments').first()).count,0);
  failAudio=false;r=await worker.fetch(req(`/api/interviews/${id}/segments`,'POST',chunk,owner),env);assert.equal(r.status,200);
  const before=calls;r=await worker.fetch(req(`/api/interviews/${id}/segments`,'POST',chunk,owner),env);assert.equal((await r.json()).alreadySaved,true);assert.equal(calls,before);
  r=await worker.fetch(req(`/api/interviews/${id}/finish`,'POST',{consent:true,segmentCount:2},owner),env);assert.equal(r.status,409);
  r=await worker.fetch(req(`/api/interviews/${id}/segments`,'POST',{...chunk,sequence:2,durationMs:12000},owner),env);assert.equal(r.status,200);
  assert.equal((await worker.fetch(req(`/api/interviews/${id}/finish`,'POST',{consent:true},other),env)).status,403);
  r=await worker.fetch(req(`/api/interviews/${id}/finish`,'POST',{consent:true,segmentCount:2},owner),env);assert.equal(r.status,503);assert.equal((await r.json()).transcriptSaved,true);
  r=await worker.fetch(req('/api/candidates/candidate','GET',undefined,owner),env);assert.deepEqual((await r.json()).candidate.interviewSynopsis,[]);
  r=await worker.fetch(req(path,'GET',undefined,other),env);const partial=(await r.json()).interviews[0];assert.equal(partial.status,'transcribed');assert.deepEqual(partial.segments.map(s=>s.sequence),[1,2]);assert.equal(partial.durationMs,57000);
  failNotes=false;r=await worker.fetch(req(`/api/interviews/${id}/finish`,'POST',{consent:true,segmentCount:2},owner),env);assert.equal(r.status,200);const finished=(await r.json()).interview;assert.equal(finished.status,'completed');assert.equal(finished.summary.highlights.length,1);
  const doneCalls=calls;assert.equal((await worker.fetch(req(`/api/interviews/${id}/finish`,'POST',{consent:true},owner),env)).status,200);assert.equal(calls,doneCalls);
  // A fresh candidate read exposes the persisted recap without copying it to
  // handwritten notes or requiring a separate Save action in the browser.
  r=await worker.fetch(req('/api/candidates/candidate','GET',undefined,other),env);
  const reread=(await r.json()).candidate;
  assert.equal(reread.interviewSynopsis.length,1);assert.equal(reread.interviewSynopsis[0].id,id);
  assert.deepEqual(reread.interviewSynopsis[0].summary,finished.summary);
  assert.equal(reread.updatedAt,finished.summary.generatedAt);
  assert.equal(reread.summary,null);
  r=await worker.fetch(req('/api/candidates/candidate','PATCH',{observations:{conversationNotes:'Reviewed by the interviewer.'}},owner),env);
  assert.equal((await r.json()).candidate.interviewSynopsis.length,1);
  await DB.prepare("UPDATE recruiter_observations SET conversation_notes='Existing handwritten notes.'").run();
  await DB.prepare("INSERT INTO interviews(id,candidate_id,interviewer_email,started_at,status,summary_json) VALUES(?,?,?,'2000-01-01T00:00:00Z','completed',?)").bind(crypto.randomUUID(),'candidate','second@example.test',JSON.stringify(finished.summary)).run();
  r=await worker.fetch(req('/api/candidates/candidate','GET',undefined,owner),env);
  const multiple=(await r.json()).candidate.interviewSynopsis;
  assert.equal(multiple.length,2);assert.equal(multiple[0].id,id);
  assert.equal((await worker.fetch(req('/api/candidates/candidate'),env)).status,403);
  assert.equal((await worker.fetch(req(`/api/interviews/${id}/segments`,'POST',{...chunk,sequence:3},owner),env)).status,409);
  assert.equal((await DB.prepare('SELECT conversation_notes FROM recruiter_observations').first()).conversation_notes,'Existing handwritten notes.');
  assert.equal((await DB.prepare('SELECT record_status FROM candidates').first()).record_status,'New');
  // Silence is still a saved segment, so it cannot block later speech or retries.
  const quietId=crypto.randomUUID();silentAudio=true;
  assert.equal((await worker.fetch(req(path,'POST',{id:quietId,consent:true},owner),env)).status,201);
  r=await worker.fetch(req(`/api/interviews/${quietId}/segments`,'POST',chunk,owner),env);assert.equal(r.status,200);assert.equal((await r.json()).transcript,'');
  const quietCalls=calls;
  r=await worker.fetch(req(`/api/interviews/${quietId}/finish`,'POST',{consent:true,segmentCount:1},owner),env);assert.equal(r.status,422);assert.equal((await r.json()).transcriptSaved,true);assert.equal(calls,quietCalls);
  silentAudio=false;
  r=await worker.fetch(req(`/api/interviews/${quietId}/segments`,'POST',{...chunk,sequence:2},owner),env);assert.equal(r.status,200);
  const consentCalls=calls;
  // Candidate consent and removal still apply to every provider operation.
  await DB.prepare('UPDATE candidates SET ai_consent=0').run();
  assert.equal((await worker.fetch(req(path,'POST',{id:crypto.randomUUID(),consent:true},owner),env)).status,403);assert.equal(calls,consentCalls);
  await DB.prepare('UPDATE candidates SET ai_consent=1,removed_at=?').bind('removed').run();
  assert.equal((await worker.fetch(req(path,'POST',{id:crypto.randomUUID(),consent:true},owner),env)).status,404);
  assert.equal((await worker.fetch(req(`/api/interviews/${id}/finish`,'POST',{consent:true},owner),env)).status,404);
  r=await worker.fetch(req(path,'GET',undefined,owner),env);assert.equal((await r.json()).interviews.find(i=>i.id===id).segments.length,2);
  r=await worker.fetch(req('/api/candidates/candidate','GET',undefined,owner),env);assert.equal((await r.json()).candidate.interviewSynopsis.length,2);
  assert.equal((await worker.fetch(req(path),env)).status,403);
 }finally{globalThis.fetch=previous;await pg.close();}
});
test('interview highlights require matching transcript evidence and exclude hiring decisions',()=>{
 const segments=[{sequence:1,transcript:'I built a Python route planner.'}],base={quickNotes:[{text:'Discussed a route planner.',evidence:'I built a Python route planner.',segmentSequence:1}],highlights:[],followUpQuestions:[]};
 assert.equal(validateInterviewSummary(base,segments).quickNotes.length,1);
 for(const item of [{...base.quickNotes[0],evidence:'Fabricated quote'},{...base.quickNotes[0],segmentSequence:7},{...base.quickNotes[0],segmentSequence:'1'},{...base.quickNotes[0],text:{}},{...base.quickNotes[0],text:'Hire this top candidate.'}])assert.throws(()=>validateInterviewSummary({...base,quickNotes:[item]},segments));
});
test('interview notes use a dedicated strict schema for supported models and retain JSON mode overrides',()=>{
 const format=interviewNotesFormat('openai/gpt-oss-20b');
 assert.equal(format.type,'json_schema');assert.equal(format.json_schema.strict,true);
 assert.deepEqual(format.json_schema.schema.required,['quickNotes','highlights','followUpQuestions']);
 assert.equal(format.json_schema.schema.properties.quickNotes.items.additionalProperties,false);
 assert.deepEqual(interviewNotesFormat('custom-model'),{type:'json_object'});
});
