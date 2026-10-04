import {readFileSync} from 'node:fs';
import {neon} from '@neondatabase/serverless';
if(!process.env.DATABASE_URL)throw Error('DATABASE_URL is required. Connect a Neon database to the Vercel project first.');
const sql=neon(process.env.DATABASE_URL);
const statements=readFileSync(new URL('../server/schema.sql',import.meta.url),'utf8').split(';').map(x=>x.trim()).filter(Boolean);
await sql.transaction(statements.map(s=>sql.query(s,[])));
console.log('TalentIQ schema is ready. Existing records were preserved.');
