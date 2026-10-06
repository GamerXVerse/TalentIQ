import {sha} from './auth.js';
export async function rateLimit(req,env,scope,limit=10){
  const identity=req.headers.get('x-vercel-forwarded-for')?.split(',')[0]||req.headers.get('cf-connecting-ip')||'local';
  const bucket=`${scope}:${await sha(identity)}:${Math.floor(Date.now()/900000)}`;
  const result=await env.DB.prepare('INSERT INTO rate_limits(bucket,hits,expires_at) VALUES(?,1,?) ON CONFLICT(bucket) DO UPDATE SET hits=rate_limits.hits+1 RETURNING hits').bind(bucket,Date.now()+1800000).first();
  return Number(result?.hits||0)<=limit;
}
