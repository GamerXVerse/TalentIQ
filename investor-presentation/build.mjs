import { build } from 'esbuild';
import { readFileSync, writeFileSync } from 'node:fs';
const logo = readFileSync('dist/assets/jbhunt-logo.png').toString('base64');
writeFileSync('src/logo-data.js', `export default "data:image/png;base64,${logo}";\n`);
await build({entryPoints:['src/presentation.js'],bundle:true,minify:true,format:'iife',target:'es2020',outfile:'dist/presentation.js',legalComments:'eof'});
console.log('Built self-contained presentation bundle.');
