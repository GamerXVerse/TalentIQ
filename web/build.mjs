import {readFileSync,writeFileSync,mkdirSync} from "node:fs";
const root=new URL(".",import.meta.url), read=p=>readFileSync(new URL(p,root),"utf8");
const html=read("dist/client/index.html"), assets={"/":{type:"text/html; charset=utf-8",body:html},"/index.html":{type:"text/html; charset=utf-8",body:html},"/styles.css":{type:"text/css; charset=utf-8",body:read("dist/client/styles.css")},"/app.js":{type:"text/javascript; charset=utf-8",body:read("dist/client/app.js")}};
const source=read("src/worker.js").replace("/*__STATIC_ASSETS__*/",`const STATIC=${JSON.stringify(assets)};`);
mkdirSync(new URL("dist/server/",root),{recursive:true});writeFileSync(new URL("dist/server/index.js",root),source);console.log(`Built Worker with ${Object.keys(assets).length} embedded routes.`);
