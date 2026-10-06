import worker from '../worker.js';
import {createDatabase,databaseUploads} from './database.js';
const MAX_BODY=4200000;
export function environment(values=process.env){
  const url=values.DATABASE_URL||values.POSTGRES_URL;
  const DB=url?createDatabase(url):undefined;
  return{DB,UPLOADS:DB?databaseUploads(DB):undefined,VERCEL_RUNTIME:true,GROQ_API_KEY:values.GROQ_API_KEY,GROQ_MODEL:values.GROQ_MODEL,GROQ_VISION_MODEL:values.GROQ_VISION_MODEL,GROQ_AUDIO_MODEL:values.GROQ_AUDIO_MODEL,RECRUITER_EMAILS:values.RECRUITER_EMAILS,RECRUITER_SETUP_TOKEN:values.RECRUITER_SETUP_TOKEN};
}
async function readBody(req){
  if(Number(req.headers['content-length']||0)>MAX_BODY)throw Object.assign(Error('Request is too large. Resume and audio files must be under 3 MB.'),{status:413});
  // Vercel may already parse application/json; do not wait for an ended stream.
  if(req.body!==undefined){const buffer=Buffer.isBuffer(req.body)?req.body:Buffer.from(typeof req.body==='string'?req.body:JSON.stringify(req.body));if(buffer.length>MAX_BODY)throw Object.assign(Error('Request is too large.'),{status:413});return buffer;}
  const chunks=[];let size=0;for await(const chunk of req){size+=chunk.length;if(size>MAX_BODY)throw Object.assign(Error('Request is too large.'),{status:413});chunks.push(chunk);}return chunks.length?Buffer.concat(chunks):undefined;
}
export function makeHandler(getEnvironment=()=>environment()){
 return async function handler(req,res){
  try{
    const protocol=req.headers['x-forwarded-proto']||(req.socket?.encrypted?'https':'http'),host=req.headers.host||'localhost';
    const headers=new Headers();for(const [name,value]of Object.entries(req.headers)){if(value!==undefined&&!name.startsWith('oai-'))headers.set(name,Array.isArray(value)?value.join(', '):value);}
    const body=['GET','HEAD'].includes(req.method)?undefined:await readBody(req);
    const request=new Request(`${protocol}://${host}${req.url}`,{method:req.method,headers,body});
    const response=await worker.fetch(request,await getEnvironment());res.statusCode=response.status;
    response.headers.forEach((value,key)=>res.setHeader(key,value));res.end(Buffer.from(await response.arrayBuffer()));
  }catch(e){console.error('TalentIQ adapter error',e.name);res.statusCode=e.status||503;res.setHeader('content-type','application/json');res.setHeader('cache-control','no-store');res.end(JSON.stringify({error:e.status?e.message:'TalentIQ could not connect to its database. Contact the event organizer.'}));}
 };
}
export default makeHandler();
