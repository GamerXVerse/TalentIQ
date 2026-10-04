import {PGlite} from '@electric-sql/pglite';
import {readFileSync} from 'node:fs';
import {createSqlAdapter,databaseUploads} from './database.js';
export async function localDatabase(directory){
 const pg=new PGlite(directory);
 await pg.exec(readFileSync(new URL('schema.sql',import.meta.url),'utf8'));
 const sql={query:(q,args)=>({then(resolve,reject){return pg.query(q,args).then(r=>r.rows).then(resolve,reject)},q,args}),transaction:queries=>pg.transaction(async tx=>{const rows=[];for(const q of queries)rows.push((await tx.query(q.q,q.args)).rows);return rows;})};
 const DB=createSqlAdapter(sql);DB.provider='Local Postgres (development only)';
 return{pg,DB,UPLOADS:databaseUploads(DB)};
}
