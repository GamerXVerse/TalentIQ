import {passwordHash,sha,equalHex,hex,emailOf,requireSameOrigin} from './auth.js';
const COOKIE='__Host-talentiq_candidate';
const json=(data,status=200,headers={})=>new Response(JSON.stringify(data),{status,headers:{'content-type':'application/json','cache-control':'no-store',...headers}});
const token=req=>(req.headers.get('cookie')||'').match(/(?:^|;\s*)__Host-talentiq_candidate=([0-9a-f]{64})(?:;|$)/)?.[1];
export async function candidateSession(req,env){const t=token(req);if(!t)return null;const row=await env.DB.prepare('SELECT email,expires_at FROM candidate_sessions WHERE token_hash=?').bind(await sha(t)).first();return row&&Number(row.expires_at)>Date.now()?{email:row.email}:null;}
export async function rateLimit(req,env,scope,limit=10){
  const identity=req.headers.get('x-vercel-forwarded-for')?.split(',')[0]||req.headers.get('cf-connecting-ip')||'local';
  const bucket=`${scope}:${await sha(identity)}:${Math.floor(Date.now()/900000)}`;
  const result=await env.DB.prepare('INSERT INTO rate_limits(bucket,hits,expires_at) VALUES(?,1,?) ON CONFLICT(bucket) DO UPDATE SET hits=rate_limits.hits+1 RETURNING hits').bind(bucket,Date.now()+1800000).first();
  return Number(result?.hits||0)<=limit;
}
async function issue(env,email){const t=hex(crypto.getRandomValues(new Uint8Array(32)));await env.DB.prepare('DELETE FROM candidate_sessions WHERE expires_at<?').bind(Date.now()).run();await env.DB.prepare('INSERT INTO candidate_sessions(token_hash,email,expires_at,created_at) VALUES(?,?,?,?)').bind(await sha(t),email,Date.now()+86400000,new Date().toISOString()).run();return json({authorized:true,email},200,{'set-cookie':`${COOKIE}=${t}; Path=/; Max-Age=86400; HttpOnly; Secure; SameSite=Lax`});}
export async function candidateAuth(req,env,action){
  if(action==='session'){const s=await candidateSession(req,env);return json({authorized:Boolean(s),email:s?.email||null});}
  const blocked=requireSameOrigin(req);if(blocked)return blocked;
  if(action==='logout'){const t=token(req);if(t)await env.DB.prepare('DELETE FROM candidate_sessions WHERE token_hash=?').bind(await sha(t)).run();return json({authorized:false},200,{'set-cookie':`${COOKIE}=; Path=/; Max-Age=0; HttpOnly; Secure; SameSite=Lax`});}
  if(!await rateLimit(req,env,'candidate-auth',15))return json({error:'Too many attempts. Try again in 15 minutes.'},429);
  const x=await req.json(),email=emailOf(x.email),password=x.password;
  if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)||typeof password!=='string'||password.length<12||password.length>128)return json({error:'Use a valid email and a password of 12–128 characters.'},400);
  if(action==='register'){
    if(String(x.eventCode)!=='12345')return json({error:'Enter the event code 12345.'},400);
    const salt=hex(crypto.getRandomValues(new Uint8Array(16))),hash=await passwordHash(password,salt);
    const row=await env.DB.prepare('INSERT INTO candidate_accounts(email,password_salt,password_hash,iterations,created_at) VALUES(?,?,?,?,?) ON CONFLICT(email) DO NOTHING RETURNING email').bind(email,salt,hash,210000,new Date().toISOString()).first();
    if(!row)return json({error:'An account already exists for this email. Choose Sign in to continue.'},409);
  }else{
    const row=await env.DB.prepare('SELECT password_salt,password_hash,iterations FROM candidate_accounts WHERE email=?').bind(email).first();
    const hash=await passwordHash(password,row?.password_salt||'00000000000000000000000000000000',Number(row?.iterations)||210000);
    if(!row||!equalHex(hash,row.password_hash))return json({error:'Email or password is incorrect.'},401);
  }
  return issue(env,email);
}
