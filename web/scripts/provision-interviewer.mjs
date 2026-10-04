import {createDatabase} from '../server/database.js';
import {passwordHash,hex} from '../src/auth.js';
const email=String(process.env.INTERVIEWER_EMAIL||'').trim().toLowerCase(),password=process.env.INTERVIEWER_PASSWORD;
if(!process.env.DATABASE_URL||!email||!password||password.length<12)throw Error('Set DATABASE_URL, INTERVIEWER_EMAIL and INTERVIEWER_PASSWORD (12+ characters) in a private environment file.');
const allowed=String(process.env.RECRUITER_EMAILS||'').split(',').map(x=>x.trim().toLowerCase());
if(!allowed.includes(email))throw Error('Add this email to RECRUITER_EMAILS in both Vercel and the local environment first.');
const DB=createDatabase(process.env.DATABASE_URL),salt=hex(crypto.getRandomValues(new Uint8Array(16))),hash=await passwordHash(password,salt),time=new Date().toISOString();
const row=await DB.prepare('INSERT INTO recruiter_accounts(email,password_salt,password_hash,iterations,created_at,updated_at) VALUES(?,?,?,?,?,?) ON CONFLICT(email) DO NOTHING RETURNING email').bind(email,salt,hash,210000,time,time).first();
console.log(row?'Interviewer account created.':'Account already exists; its password was preserved.');
