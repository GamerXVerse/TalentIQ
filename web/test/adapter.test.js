import test from 'node:test';
import assert from 'node:assert/strict';
import {makeHandler} from '../server/handler.js';
const response=()=>({headers:{},setHeader(k,v){this.headers[k]=v},end(v){this.body=v}});
test('Vercel adapter handles already parsed JSON without waiting on an ended stream',async()=>{
 const req={method:'POST',url:'/api/candidates',body:{email:'a@example.test',eventCode:'12345'},headers:{host:'talentiq.test',origin:'https://talentiq.test','x-forwarded-proto':'https'}};
 const res=response();await makeHandler(()=>({}))(req,res);assert.equal(res.statusCode,503);assert.match(JSON.parse(res.body).error,/DATABASE_URL/);
});
test('Vercel adapter rejects oversized requests before parsing or database calls',async()=>{
 let called=false;const req={method:'POST',url:'/api/candidates',headers:{host:'talentiq.test','content-length':'5000000'}};const res=response();await makeHandler(()=>{called=true;return{}})(req,res);assert.equal(res.statusCode,413);assert.equal(called,false);
});
