import test from 'node:test';
import assert from 'node:assert/strict';
import {mountInterviews,interviewBusy} from '../client/interviews.js';
const drain=async()=>{for(let i=0;i<12;i++)await new Promise(resolve=>setImmediate(resolve));};
test('recorder rotates complete audio files, retains failed uploads and summarizes only after final audio saves',async()=>{
 const names=['document','navigator','window','MediaRecorder','FileReader','setTimeout','clearTimeout','setInterval','clearInterval'],before=Object.fromEntries(names.map(n=>[n,Object.getOwnPropertyDescriptor(globalThis,n)]));
 const nodes=new Map(),timers=new Map(),recorders=[],requests=[];let timerId=0,stoppedTracks=0,failUpload=true;
 const node=key=>{if(!nodes.has(key)){const classes=new Set();nodes.set(key,{textContent:'',innerHTML:'',value:'',checked:true,disabled:false,classList:{add:x=>classes.add(x),remove:x=>classes.delete(x),contains:x=>classes.has(x)}});}return nodes.get(key)};
 const root={isConnected:true,querySelector:node,querySelectorAll:()=>[]};
 class Recorder{
  static isTypeSupported(){return true}
  constructor(stream,options){this.state='inactive';this.mimeType=options.mimeType;recorders.push(this)}
  start(){this.state='recording'}
  stop(){this.state='inactive';queueMicrotask(()=>{this.ondataavailable({data:new Blob([new Uint8Array(200)],{type:'audio/webm'})});this.onstop()})}
 }
 class Reader{readAsDataURL(blob){blob.arrayBuffer().then(data=>{this.result='data:audio/webm;base64,'+Buffer.from(data).toString('base64');this.onload()})}}
 const values={document:{querySelector:()=>root},navigator:{mediaDevices:{getUserMedia:async()=>({getTracks:()=>[{stop:()=>stoppedTracks++}]})}},window:{MediaRecorder:Recorder},MediaRecorder:Recorder,FileReader:Reader,setTimeout:(fn,delay)=>{const id=++timerId;timers.set(id,{fn,delay});return id},clearTimeout:id=>timers.delete(id),setInterval:(fn,delay)=>{const id=++timerId;timers.set(id,{fn,delay});return id},clearInterval:id=>timers.delete(id)};
 for(const [name,value]of Object.entries(values))Object.defineProperty(globalThis,name,{value,configurable:true,writable:true});
 try{
  mountInterviews({id:'candidate',aiConsent:true},{api:async()=>({interviews:[],viewerEmail:'interviewer@example.test'}),post:async(path,data)=>{requests.push({path,data});if(path.endsWith('/segments')){if(failUpload)throw Error('Temporary network failure');return{transcript:`Transcript ${data.sequence}`};}return{}},esc:String,toast:()=>{},onAddNotes:()=>{}});
  await node('#start-interview').onclick();assert.equal(interviewBusy(),true);assert.equal(recorders.length,1);
  const rotation=[...timers.values()].find(t=>t.delay===45000);rotation.fn();await drain();
  assert.equal(recorders.length,2);assert.equal(recorders[1].state,'recording');assert.match(node('#interview-status').textContent,/Temporary network failure/);
  assert.equal(requests.some(r=>r.path.endsWith('/finish')),false);
  node('#stop-interview').onclick();await node('#discard-interview').onclick();
  assert.match(node('#interview-status').textContent,/Wait for the final audio segment/);
  await drain();assert.equal(stoppedTracks,1);assert.equal(interviewBusy(),true);
  assert.equal(requests.some(r=>r.path.endsWith('/finish')),false);
  failUpload=false;node('#retry-interview').onclick();await drain();
  const finish=requests.find(r=>r.path.endsWith('/finish'));assert.equal(finish.data.segmentCount,2);
  const saved=requests.filter(r=>r.path.endsWith('/segments')).slice(1);assert.deepEqual(saved.map(r=>r.data.sequence),[1,2]);
  assert.ok(saved.every(r=>r.data.mime==='audio/webm'&&r.data.base64.length>100));
  assert.match(node('#current-transcript').value,/Transcript 1/);assert.match(node('#current-transcript').value,/Transcript 2/);
  assert.equal(interviewBusy(),false);assert.match(node('#interview-status').textContent,/highlights are saved to the candidate synopsis/);
 }finally{for(const name of names){if(before[name])Object.defineProperty(globalThis,name,before[name]);else delete globalThis[name];}}
});
