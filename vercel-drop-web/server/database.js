import {neon} from '@neondatabase/serverless';
// The existing Worker uses D1's prepared-statement shape. Preserve parameterized
// queries while running them against Neon Postgres on Vercel.
export function postgresQuery(query){let index=0;return query.replace(/\?/g,()=>`$${++index}`);}
export function createDatabase(url){
  const sql=neon(url);
  return createSqlAdapter(sql);
}
export function createSqlAdapter(sql){
  const db={provider:'Neon Postgres',prepare(query){let values=[];const statement={query:postgresQuery(query),get values(){return values},bind(...args){values=args;return statement},async first(){return(await sql.query(statement.query,values))[0]||null},async all(){return{results:await sql.query(statement.query,values)}},async run(){await sql.query(statement.query,values);return{success:true}}};return statement},async batch(statements){return sql.transaction(statements.map(s=>sql.query(s.query,s.values)));}};
  return db;
}
// Resume originals stay private in the same database. This avoids an additional
// storage credential for a career-fair deployment; each file is capped at 3 MB.
export function databaseUploads(db){return{provider:'Private Postgres documents',async put(key,data,options={}){await db.prepare('INSERT INTO resume_files(key,content_base64,content_type) VALUES(?,?,?) ON CONFLICT(key) DO UPDATE SET content_base64=excluded.content_base64,content_type=excluded.content_type').bind(key,Buffer.from(data).toString('base64'),options.httpMetadata?.contentType||'application/octet-stream').run()},async get(key){const r=await db.prepare('SELECT content_base64,content_type FROM resume_files WHERE key=?').bind(key).first();return r?{body:Buffer.from(r.content_base64,'base64'),contentType:r.content_type}:null},async delete(key){await db.prepare('DELETE FROM resume_files WHERE key=?').bind(key).run()}};}
