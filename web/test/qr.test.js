import test from 'node:test';
import assert from 'node:assert/strict';
import QRCode from 'qrcode';
import jsQR from 'jsqr';
import {createRequire} from 'node:module';
const {PNG}=createRequire(import.meta.url)('pngjs');
test('booth QR code decodes to the production origin and memorable event code',async()=>{
 const url='https://talentiq-web-six.vercel.app/?event=12345#intake';
 const bytes=await QRCode.toBuffer(url,{width:440,margin:2,errorCorrectionLevel:'M',color:{dark:'#263020',light:'#ffffff'}});
 const png=PNG.sync.read(bytes);const result=jsQR(new Uint8ClampedArray(png.data),png.width,png.height,{inversionAttempts:'attemptBoth'});
 assert.equal(result.data,url);assert.equal(new URL(result.data).searchParams.get('event'),'12345');
});
