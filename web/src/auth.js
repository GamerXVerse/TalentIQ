const COOKIE="__Host-talentiq_session";
const ITERATIONS=210000;
const SESSION_HOURS=12;
const encoder=new TextEncoder();
const hex=bytes=>[...bytes].map(byte=>byte.toString(16).padStart(2,"0")).join("");
const bytes=value=>Uint8Array.from(value.match(/.{2}/g)||[],part=>parseInt(part,16));
const emailOf=value=>String(value||"").trim().toLowerCase().slice(0,200);
const allowed=(email,env)=>String(env.RECRUITER_EMAILS||"").split(",").map(emailOf).includes(email);
const response=(data,status=200,headers={})=>new Response(JSON.stringify(data),{status,headers:{"content-type":"application/json; charset=utf-8","cache-control":"no-store",...headers}});
const wrong=()=>response({error:"Email or password is incorrect."},401);
const cookie=(token,maxAge)=>`${COOKIE}=${token}; Path=/; Max-Age=${maxAge}; HttpOnly; Secure; SameSite=Lax`;
const tokenFrom=req=>{const match=(req.headers.get("cookie")||"").match(/(?:^|;\s*)__Host-talentiq_session=([0-9a-f]{64})(?:;|$)/);return match?.[1]||null};
async function sha(value){return hex(new Uint8Array(await crypto.subtle.digest("SHA-256",encoder.encode(value))))}
async function passwordHash(password,salt,iterations=ITERATIONS){const key=await crypto.subtle.importKey("raw",encoder.encode(password),"PBKDF2",false,["deriveBits"]);return hex(new Uint8Array(await crypto.subtle.deriveBits({name:"PBKDF2",salt:bytes(salt),iterations,hash:"SHA-256"},key,256)))}
function equalHex(a,b){if(a.length!==b.length)return false;const x=bytes(a),y=bytes(b);let diff=0;for(let i=0;i<x.length;i++)diff|=x[i]^y[i];return diff===0}
async function accountCount(env){const row=await env.DB.prepare("SELECT COUNT(*) AS count FROM recruiter_accounts").first();return Number(row?.count||0)}
export async function session(req,env){
  const token=tokenFrom(req);
  if(token){const row=await env.DB.prepare("SELECT email,expires_at FROM recruiter_sessions WHERE token_hash=?").bind(await sha(token)).first();if(row&&row.expires_at>Date.now()&&allowed(row.email,env))return{email:row.email,legacy:false}}
  // Keep the existing owner access only until the first password account is created.
  const platformEmail=emailOf(req.headers.get("oai-authenticated-user-email"));
  if(platformEmail&&allowed(platformEmail,env)&&await accountCount(env)===0)return{email:platformEmail,legacy:true};
  return null;
}
export async function sessionStatus(req,env){const user=await session(req,env);return response({authorized:Boolean(user),email:user?.email||null,setupRequired:Boolean(user?.legacy),setupAvailable:!user&&await accountCount(env)===0})}
function sameOrigin(req){return req.headers.get("origin")===new URL(req.url).origin}
export function requireSameOrigin(req){return sameOrigin(req)?null:response({error:"Request origin could not be verified."},403)}
async function issueSession(env,email){const token=hex(crypto.getRandomValues(new Uint8Array(32)));await env.DB.prepare("DELETE FROM recruiter_sessions WHERE expires_at<?").bind(Date.now()).run();await env.DB.prepare("INSERT INTO recruiter_sessions(token_hash,email,expires_at,created_at) VALUES(?,?,?,?)").bind(await sha(token),email,Date.now()+SESSION_HOURS*3600000,new Date().toISOString()).run();return response({authorized:true,email},200,{"set-cookie":cookie(token,SESSION_HOURS*3600)})}
export async function setup(req,env){
  const blocked=requireSameOrigin(req);if(blocked)return blocked;
  if(Number(req.headers.get("content-length")||0)>4096)return response({error:"Request is too large."},413);
  const email=emailOf(req.headers.get("oai-authenticated-user-email"));
  if(!email||!allowed(email,env)||await accountCount(env)!==0)return response({error:"Owner verification is required for initial setup."},403);
  const {password}=await req.json();
  if(typeof password!=="string"||password.length<12||password.length>128)return response({error:"Choose a password between 12 and 128 characters."},400);
  const salt=hex(crypto.getRandomValues(new Uint8Array(16))),hash=await passwordHash(password,salt),time=new Date().toISOString();
  await env.DB.prepare("INSERT INTO recruiter_accounts(email,password_salt,password_hash,iterations,failed_attempts,locked_until,created_at,updated_at) VALUES(?,?,?,?,0,0,?,?)").bind(email,salt,hash,ITERATIONS,time,time).run();
  return issueSession(env,email);
}
export async function login(req,env){
  const blocked=requireSameOrigin(req);if(blocked)return blocked;
  if(Number(req.headers.get("content-length")||0)>4096)return response({error:"Request is too large."},413);
  const body=await req.json(),email=emailOf(body.email),password=body.password;
  if(!email||typeof password!=="string"||password.length>128||!allowed(email,env))return wrong();
  const row=await env.DB.prepare("SELECT email,password_salt,password_hash,iterations,failed_attempts,locked_until FROM recruiter_accounts WHERE email=?").bind(email).first();
  if(!row)return wrong();
  if(Number(row.locked_until||0)>Date.now())return response({error:"Too many attempts. Try again in 15 minutes."},429);
  const match=equalHex(await passwordHash(password,row.password_salt,Number(row.iterations)),row.password_hash);
  if(!match){const failures=Number(row.failed_attempts||0)+1;await env.DB.prepare("UPDATE recruiter_accounts SET failed_attempts=?,locked_until=? WHERE email=?").bind(failures>=5?0:failures,failures>=5?Date.now()+15*60000:0,email).run();return wrong()}
  await env.DB.prepare("UPDATE recruiter_accounts SET failed_attempts=0,locked_until=0 WHERE email=?").bind(email).run();
  return issueSession(env,email);
}
export async function logout(req,env){const blocked=requireSameOrigin(req);if(blocked)return blocked;const token=tokenFrom(req);if(token)await env.DB.prepare("DELETE FROM recruiter_sessions WHERE token_hash=?").bind(await sha(token)).run();return response({authorized:false},200,{"set-cookie":cookie("",0)})}
