import test from "node:test";
import assert from "node:assert/strict";
import {session,sessionStatus,setup,login,logout} from "../src/auth.js";

function makeEnv(){
  const accounts=new Map(),sessions=new Map();
  const DB={prepare(sql){let args=[];return{bind(...values){args=values;return this},async first(){
    if(sql.startsWith("SELECT COUNT(*)"))return{count:accounts.size};
    if(sql.startsWith("SELECT email,expires_at"))return sessions.get(args[0])||null;
    if(sql.startsWith("SELECT email,password_salt"))return accounts.get(args[0])||null;
    throw Error(`Unexpected query: ${sql}`);
  },async run(){
    if(sql.startsWith("INSERT INTO recruiter_accounts")){accounts.set(args[0],{email:args[0],password_salt:args[1],password_hash:args[2],iterations:args[3],failed_attempts:0,locked_until:0});return{}}
    if(sql.startsWith("DELETE FROM recruiter_sessions WHERE expires_at")){for(const [key,value] of sessions)if(value.expires_at<args[0])sessions.delete(key);return{}}
    if(sql.startsWith("INSERT INTO recruiter_sessions")){sessions.set(args[0],{email:args[1],expires_at:args[2]});return{}}
    if(sql.startsWith("UPDATE recruiter_accounts SET failed_attempts=?")){Object.assign(accounts.get(args[2]),{failed_attempts:args[0],locked_until:args[1]});return{}}
    if(sql.startsWith("UPDATE recruiter_accounts SET failed_attempts=0")){Object.assign(accounts.get(args[0]),{failed_attempts:0,locked_until:0});return{}}
    if(sql.startsWith("DELETE FROM recruiter_sessions")){sessions.delete(args[0]);return{}}
    throw Error(`Unexpected query: ${sql}`);
  }}}};
  return{RECRUITER_EMAILS:"owner@example.org",DB,accounts,sessions};
}
const request=(path,method="GET",body,headers={})=>new Request(`https://example.org${path}`,{method,headers:{...(body?{"content-type":"application/json",origin:"https://example.org"}:{}),...headers},body:body?JSON.stringify(body):undefined});
const owner={"oai-authenticated-user-email":"owner@example.org"};

test("owner sets a password once, then email/password sessions replace ChatGPT access",async()=>{
  const env=makeEnv();
  assert.deepEqual(await (await sessionStatus(request("/api/recruiter-session"),env)).json(),{authorized:false,email:null,setupRequired:false,setupAvailable:true});
  const unverified=await setup(request("/api/auth/setup","POST",{password:"an excellent long password"}),env);
  assert.equal(unverified.status,403);
  const forgedOrigin=await setup(request("/api/auth/setup","POST",{password:"an excellent long password"},{...owner,origin:"https://evil.example"}),env);
  assert.equal(forgedOrigin.status,403);
  const created=await setup(request("/api/auth/setup","POST",{password:"an excellent long password"},owner),env);
  assert.equal(created.status,200);
  assert.equal(env.accounts.size,1);
  assert.notEqual(env.accounts.get("owner@example.org").password_hash,"an excellent long password");
  const cookie=created.headers.get("set-cookie").split(";")[0];
  assert.match(created.headers.get("set-cookie"),/HttpOnly; Secure; SameSite=Lax/);
  assert.equal((await session(request("/api/candidates","GET",null,{cookie}),env)).email,"owner@example.org");
  assert.equal(await session(request("/api/candidates","GET",null,owner),env),null);
  const duplicate=await setup(request("/api/auth/setup","POST",{password:"another excellent password"},owner),env);
  assert.equal(duplicate.status,403);
  const bad=await login(request("/api/auth/login","POST",{email:"owner@example.org",password:"wrong"}),env);
  assert.equal(bad.status,401);
  const good=await login(request("/api/auth/login","POST",{email:"owner@example.org",password:"an excellent long password"}),env);
  assert.equal(good.status,200);
  const signedOut=await logout(request("/api/auth/logout","POST",{}, {cookie}),env);
  assert.equal(signedOut.status,200);
  assert.equal(await session(request("/api/candidates","GET",null,{cookie}),env),null);
});

test("repeated wrong passwords lock an account",async()=>{
  const env=makeEnv();
  await setup(request("/api/auth/setup","POST",{password:"an excellent long password"},owner),env);
  for(let i=0;i<5;i++)assert.equal((await login(request("/api/auth/login","POST",{email:"owner@example.org",password:"wrong"}),env)).status,401);
  assert.equal((await login(request("/api/auth/login","POST",{email:"owner@example.org",password:"an excellent long password"}),env)).status,429);
});
