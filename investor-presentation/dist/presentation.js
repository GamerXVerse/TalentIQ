(()=>{var Jo=0,Ua=1,Zo=2;var Fa=1,nr=2,je=3,hn=0,Se=1,$e=2,pn=0,Vn=1,Ba=2,Oa=3,za=4,Qo=5,En=100,Ko=101,jo=102,$o=103,tc=104,ec=200,nc=201,ic=202,sc=203,Ls=204,Ds=205,rc=206,ac=207,oc=208,cc=209,lc=210,hc=211,uc=212,dc=213,fc=214,ir=0,sr=1,rr=2,Hn=3,ar=4,or=5,cr=6,lr=7,ka=0,pc=1,mc=2,mn=0,gc=1,Ac=2,_c=3,hr=4,xc=5,vc=6,yc=7;var Va=300,Xn=301,Yn=302,ur=303,dr=304,is=306,Ns=1e3,bn=1001,Us=1002,Fe=1003,Mc=1004;var ss=1005;var He=1006,fr=1007;var Pn=1008;var Xe=1009,Ha=1010,Ga=1011,yi=1012,pr=1013,Ln=1014,tn=1015,Mi=1016,mr=1017,gr=1018,Si=1020,Wa=35902,Xa=35899,Ya=1021,qa=1022,Be=1023,di=1026,bi=1027,Ja=1028,Ar=1029,Za=1030,_r=1031;var xr=1033,rs=33776,as=33777,os=33778,cs=33779,vr=35840,yr=35841,Mr=35842,Sr=35843,br=36196,Er=37492,Tr=37496,wr=37808,Cr=37809,Rr=37810,Ir=37811,Pr=37812,Lr=37813,Dr=37814,Nr=37815,Ur=37816,Fr=37817,Br=37818,Or=37819,zr=37820,kr=37821,Vr=36492,Hr=36494,Gr=36495,Wr=36283,Xr=36284,Yr=36285,qr=36286;var Fi=2300,Fs=2301,Ps=2302,wa=2400,Ca=2401,Ra=2402;var Sc=3200,bc=3201;var Qa=0,Ec=1,gn="",Ae="srgb",Gn="srgb-linear",Bi="linear",Jt="srgb";var kn=7680;var Ia=519,Tc=512,wc=513,Cc=514,Ka=515,Rc=516,Ic=517,Pc=518,Lc=519,Pa=35044;var ja="300 es",Ve=2e3,Oi=2001;var un=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},me=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ia=Math.PI/180,Bs=180/Math.PI;function ls(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(me[i&255]+me[i>>8&255]+me[i>>16&255]+me[i>>24&255]+"-"+me[t&255]+me[t>>8&255]+"-"+me[t>>16&15|64]+me[t>>24&255]+"-"+me[e&63|128]+me[e>>8&255]+"-"+me[e>>16&255]+me[e>>24&255]+me[n&255]+me[n>>8&255]+me[n>>16&255]+me[n>>24&255]).toLowerCase()}function Vt(i,t,e){return Math.max(t,Math.min(e,i))}function vl(i,t){return(i%t+t)%t}function sa(i,t,e){return(1-e)*i+e*t}function Pi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ee(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Wt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Vt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},dn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3],f=r[a+0],p=r[a+1],A=r[a+2],v=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d;return}if(o===1){t[e+0]=f,t[e+1]=p,t[e+2]=A,t[e+3]=v;return}if(d!==v||l!==f||c!==p||u!==A){let m=1-o,h=l*f+c*p+u*A+d*v,w=h>=0?1:-1,b=1-h*h;if(b>Number.EPSILON){let C=Math.sqrt(b),T=Math.atan2(C,h*w);m=Math.sin(m*T)/C,o=Math.sin(o*T)/C}let M=o*w;if(l=l*m+f*M,c=c*m+p*M,u=u*m+A*M,d=d*m+v*M,m===1-o){let C=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=C,c*=C,u*=C,d*=C}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=r[a],f=r[a+1],p=r[a+2],A=r[a+3];return t[e]=o*A+u*d+l*p-c*f,t[e+1]=l*A+u*f+c*d-o*p,t[e+2]=c*A+u*p+o*f-l*d,t[e+3]=u*A-o*d-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),d=o(r/2),f=l(n/2),p=l(s/2),A=l(r/2);switch(a){case"XYZ":this._x=f*u*d+c*p*A,this._y=c*p*d-f*u*A,this._z=c*u*A+f*p*d,this._w=c*u*d-f*p*A;break;case"YXZ":this._x=f*u*d+c*p*A,this._y=c*p*d-f*u*A,this._z=c*u*A-f*p*d,this._w=c*u*d+f*p*A;break;case"ZXY":this._x=f*u*d-c*p*A,this._y=c*p*d+f*u*A,this._z=c*u*A+f*p*d,this._w=c*u*d-f*p*A;break;case"ZYX":this._x=f*u*d-c*p*A,this._y=c*p*d+f*u*A,this._z=c*u*A-f*p*d,this._w=c*u*d+f*p*A;break;case"YZX":this._x=f*u*d+c*p*A,this._y=c*p*d+f*u*A,this._z=c*u*A-f*p*d,this._w=c*u*d-f*p*A;break;case"XZY":this._x=f*u*d-c*p*A,this._y=c*p*d-f*u*A,this._z=c*u*A+f*p*d,this._w=c*u*d+f*p*A;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],d=e[10],f=n+o+d;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>d){let p=2*Math.sqrt(1+n-o-d);this._w=(u-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>d){let p=2*Math.sqrt(1+o-n-d);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+u)/p}else{let p=2*Math.sqrt(1+d-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Vt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=a*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ro.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ro.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),u=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*u,this.y=n+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this.z=Vt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this.z=Vt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ra.copy(this).projectOnVector(t),this.sub(ra)}reflect(t){return this.sub(ra.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Vt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ra=new O,Ro=new dn,Nt=class i{constructor(t,e,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],f=n[2],p=n[5],A=n[8],v=s[0],m=s[3],h=s[6],w=s[1],b=s[4],M=s[7],C=s[2],T=s[5],P=s[8];return r[0]=a*v+o*w+l*C,r[3]=a*m+o*b+l*T,r[6]=a*h+o*M+l*P,r[1]=c*v+u*w+d*C,r[4]=c*m+u*b+d*T,r[7]=c*h+u*M+d*P,r[2]=f*v+p*w+A*C,r[5]=f*m+p*b+A*T,r[8]=f*h+p*M+A*P,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=u*a-o*c,f=o*l-u*r,p=c*r-a*l,A=e*d+n*f+s*p;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/A;return t[0]=d*v,t[1]=(s*c-u*n)*v,t[2]=(o*n-s*a)*v,t[3]=f*v,t[4]=(u*e-s*l)*v,t[5]=(s*r-o*e)*v,t[6]=p*v,t[7]=(n*l-c*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(aa.makeScale(t,e)),this}rotate(t){return this.premultiply(aa.makeRotation(-t)),this}translate(t,e){return this.premultiply(aa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},aa=new Nt;function $a(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function zi(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Dc(){let i=zi("canvas");return i.style.display="block",i}var Io={};function fi(i){i in Io||(Io[i]=!0,console.warn(i))}function Nc(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Po=new Nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lo=new Nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function yl(){let i={enabled:!0,workingColorSpace:Gn,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Jt&&(s.r=ln(s.r),s.g=ln(s.g),s.b=ln(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Jt&&(s.r=ui(s.r),s.g=ui(s.g),s.b=ui(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===gn?Bi:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return fi("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return fi("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Gn]:{primaries:t,whitePoint:n,transfer:Bi,toXYZ:Po,fromXYZ:Lo,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ae},outputColorSpaceConfig:{drawingBufferColorSpace:Ae}},[Ae]:{primaries:t,whitePoint:n,transfer:Jt,toXYZ:Po,fromXYZ:Lo,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ae}}}),i}var Gt=yl();function ln(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ui(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var $n,Os=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{$n===void 0&&($n=zi("canvas")),$n.width=t.width,$n.height=t.height;let s=$n.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=$n}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=zi("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ln(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ln(e[n]/255)*255):e[n]=ln(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Ml=0,pi=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ml++}),this.uuid=ls(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(oa(s[a].image)):r.push(oa(s[a]))}else r=oa(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function oa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Os.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Sl=0,ca=new O,Te=class i extends un{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=bn,s=bn,r=He,a=Pn,o=Be,l=Xe,c=i.DEFAULT_ANISOTROPY,u=gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sl++}),this.uuid=ls(),this.name="",this.source=new pi(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Wt(0,0),this.repeat=new Wt(1,1),this.center=new Wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ca).x}get height(){return this.source.getSize(ca).y}get depth(){return this.source.getSize(ca).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Va)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ns:t.x=t.x-Math.floor(t.x);break;case bn:t.x=t.x<0?0:1;break;case Us:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ns:t.y=t.y-Math.floor(t.y);break;case bn:t.y=t.y<0?0:1;break;case Us:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Te.DEFAULT_IMAGE=null;Te.DEFAULT_MAPPING=Va;Te.DEFAULT_ANISOTROPY=1;var se=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],u=l[4],d=l[8],f=l[1],p=l[5],A=l[9],v=l[2],m=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-v)<.01&&Math.abs(A-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+v)<.1&&Math.abs(A+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(c+1)/2,M=(p+1)/2,C=(h+1)/2,T=(u+f)/4,P=(d+v)/4,U=(A+m)/4;return b>M&&b>C?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=T/n,r=P/n):M>C?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=T/s,r=U/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=P/r,s=U/r),this.set(n,s,r,e),this}let w=Math.sqrt((m-A)*(m-A)+(d-v)*(d-v)+(f-u)*(f-u));return Math.abs(w)<.001&&(w=1),this.x=(m-A)/w,this.y=(d-v)/w,this.z=(f-u)/w,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this.z=Vt(this.z,t.z,e.z),this.w=Vt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this.z=Vt(this.z,t,e),this.w=Vt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},zs=class extends un{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:He,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new se(0,0,t,e),this.scissorTest=!1,this.viewport=new se(0,0,t,e);let s={width:t,height:e,depth:n.depth},r=new Te(s);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:He,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new pi(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qe=class extends zs{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ki=class extends Te{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ks=class extends Te{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Tn=class{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Oe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Oe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Oe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Oe):Oe.fromBufferAttribute(r,a),Oe.applyMatrix4(t.matrixWorld),this.expandByPoint(Oe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),fs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),fs.copy(n.boundingBox)),fs.applyMatrix4(t.matrixWorld),this.union(fs)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Oe),Oe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Li),ps.subVectors(this.max,Li),ti.subVectors(t.a,Li),ei.subVectors(t.b,Li),ni.subVectors(t.c,Li),An.subVectors(ei,ti),_n.subVectors(ni,ei),Fn.subVectors(ti,ni);let e=[0,-An.z,An.y,0,-_n.z,_n.y,0,-Fn.z,Fn.y,An.z,0,-An.x,_n.z,0,-_n.x,Fn.z,0,-Fn.x,-An.y,An.x,0,-_n.y,_n.x,0,-Fn.y,Fn.x,0];return!la(e,ti,ei,ni,ps)||(e=[1,0,0,0,1,0,0,0,1],!la(e,ti,ei,ni,ps))?!1:(ms.crossVectors(An,_n),e=[ms.x,ms.y,ms.z],la(e,ti,ei,ni,ps))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Oe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Oe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(sn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},sn=[new O,new O,new O,new O,new O,new O,new O,new O],Oe=new O,fs=new Tn,ti=new O,ei=new O,ni=new O,An=new O,_n=new O,Fn=new O,Li=new O,ps=new O,ms=new O,Bn=new O;function la(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Bn.fromArray(i,r);let o=s.x*Math.abs(Bn.x)+s.y*Math.abs(Bn.y)+s.z*Math.abs(Bn.z),l=t.dot(Bn),c=e.dot(Bn),u=n.dot(Bn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var bl=new Tn,Di=new O,ha=new O,mi=class{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):bl.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Di.subVectors(t,this.center);let e=Di.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Di,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ha.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Di.copy(t.center).add(ha)),this.expandByPoint(Di.copy(t.center).sub(ha))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},rn=new O,ua=new O,gs=new O,xn=new O,da=new O,As=new O,fa=new O,Vs=class{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,rn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=rn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(rn.copy(this.origin).addScaledVector(this.direction,e),rn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ua.copy(t).add(e).multiplyScalar(.5),gs.copy(e).sub(t).normalize(),xn.copy(this.origin).sub(ua);let r=t.distanceTo(e)*.5,a=-this.direction.dot(gs),o=xn.dot(this.direction),l=-xn.dot(gs),c=xn.lengthSq(),u=Math.abs(1-a*a),d,f,p,A;if(u>0)if(d=a*l-o,f=a*o-l,A=r*u,d>=0)if(f>=-A)if(f<=A){let v=1/u;d*=v,f*=v,p=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;else f<=-A?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c):f<=A?(d=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+f*(f+2*l)+c);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ua).addScaledVector(gs,f),p}intersectSphere(t,e){rn.subVectors(t.center,this.origin);let n=rn.dot(this.direction),s=rn.dot(rn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(o=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,rn)!==null}intersectTriangle(t,e,n,s,r){da.subVectors(e,t),As.subVectors(n,t),fa.crossVectors(da,As);let a=this.direction.dot(fa),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;xn.subVectors(this.origin,t);let l=o*this.direction.dot(As.crossVectors(xn,As));if(l<0)return null;let c=o*this.direction.dot(da.cross(xn));if(c<0||l+c>a)return null;let u=-o*xn.dot(fa);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},oe=class i{constructor(t,e,n,s,r,a,o,l,c,u,d,f,p,A,v,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,u,d,f,p,A,v,m)}set(t,e,n,s,r,a,o,l,c,u,d,f,p,A,v,m){let h=this.elements;return h[0]=t,h[4]=e,h[8]=n,h[12]=s,h[1]=r,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=p,h[7]=A,h[11]=v,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/ii.setFromMatrixColumn(t,0).length(),r=1/ii.setFromMatrixColumn(t,1).length(),a=1/ii.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let f=a*u,p=a*d,A=o*u,v=o*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=p+A*c,e[5]=f-v*c,e[9]=-o*l,e[2]=v-f*c,e[6]=A+p*c,e[10]=a*l}else if(t.order==="YXZ"){let f=l*u,p=l*d,A=c*u,v=c*d;e[0]=f+v*o,e[4]=A*o-p,e[8]=a*c,e[1]=a*d,e[5]=a*u,e[9]=-o,e[2]=p*o-A,e[6]=v+f*o,e[10]=a*l}else if(t.order==="ZXY"){let f=l*u,p=l*d,A=c*u,v=c*d;e[0]=f-v*o,e[4]=-a*d,e[8]=A+p*o,e[1]=p+A*o,e[5]=a*u,e[9]=v-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let f=a*u,p=a*d,A=o*u,v=o*d;e[0]=l*u,e[4]=A*c-p,e[8]=f*c+v,e[1]=l*d,e[5]=v*c+f,e[9]=p*c-A,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let f=a*l,p=a*c,A=o*l,v=o*c;e[0]=l*u,e[4]=v-f*d,e[8]=A*d+p,e[1]=d,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=p*d+A,e[10]=f-v*d}else if(t.order==="XZY"){let f=a*l,p=a*c,A=o*l,v=o*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=f*d+v,e[5]=a*u,e[9]=p*d-A,e[2]=A*d-p,e[6]=o*u,e[10]=v*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(El,t,Tl)}lookAt(t,e,n){let s=this.elements;return Re.subVectors(t,e),Re.lengthSq()===0&&(Re.z=1),Re.normalize(),vn.crossVectors(n,Re),vn.lengthSq()===0&&(Math.abs(n.z)===1?Re.x+=1e-4:Re.z+=1e-4,Re.normalize(),vn.crossVectors(n,Re)),vn.normalize(),_s.crossVectors(Re,vn),s[0]=vn.x,s[4]=_s.x,s[8]=Re.x,s[1]=vn.y,s[5]=_s.y,s[9]=Re.y,s[2]=vn.z,s[6]=_s.z,s[10]=Re.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],f=n[9],p=n[13],A=n[2],v=n[6],m=n[10],h=n[14],w=n[3],b=n[7],M=n[11],C=n[15],T=s[0],P=s[4],U=s[8],y=s[12],x=s[1],R=s[5],B=s[9],G=s[13],W=s[2],Q=s[6],X=s[10],k=s[14],D=s[3],z=s[7],Z=s[11],at=s[15];return r[0]=a*T+o*x+l*W+c*D,r[4]=a*P+o*R+l*Q+c*z,r[8]=a*U+o*B+l*X+c*Z,r[12]=a*y+o*G+l*k+c*at,r[1]=u*T+d*x+f*W+p*D,r[5]=u*P+d*R+f*Q+p*z,r[9]=u*U+d*B+f*X+p*Z,r[13]=u*y+d*G+f*k+p*at,r[2]=A*T+v*x+m*W+h*D,r[6]=A*P+v*R+m*Q+h*z,r[10]=A*U+v*B+m*X+h*Z,r[14]=A*y+v*G+m*k+h*at,r[3]=w*T+b*x+M*W+C*D,r[7]=w*P+b*R+M*Q+C*z,r[11]=w*U+b*B+M*X+C*Z,r[15]=w*y+b*G+M*k+C*at,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],d=t[6],f=t[10],p=t[14],A=t[3],v=t[7],m=t[11],h=t[15];return A*(+r*l*d-s*c*d-r*o*f+n*c*f+s*o*p-n*l*p)+v*(+e*l*p-e*c*f+r*a*f-s*a*p+s*c*u-r*l*u)+m*(+e*c*d-e*o*p-r*a*d+n*a*p+r*o*u-n*c*u)+h*(-s*o*u-e*l*d+e*o*f+s*a*d-n*a*f+n*l*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=t[9],f=t[10],p=t[11],A=t[12],v=t[13],m=t[14],h=t[15],w=d*m*c-v*f*c+v*l*p-o*m*p-d*l*h+o*f*h,b=A*f*c-u*m*c-A*l*p+a*m*p+u*l*h-a*f*h,M=u*v*c-A*d*c+A*o*p-a*v*p-u*o*h+a*d*h,C=A*d*l-u*v*l-A*o*f+a*v*f+u*o*m-a*d*m,T=e*w+n*b+s*M+r*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/T;return t[0]=w*P,t[1]=(v*f*r-d*m*r-v*s*p+n*m*p+d*s*h-n*f*h)*P,t[2]=(o*m*r-v*l*r+v*s*c-n*m*c-o*s*h+n*l*h)*P,t[3]=(d*l*r-o*f*r-d*s*c+n*f*c+o*s*p-n*l*p)*P,t[4]=b*P,t[5]=(u*m*r-A*f*r+A*s*p-e*m*p-u*s*h+e*f*h)*P,t[6]=(A*l*r-a*m*r-A*s*c+e*m*c+a*s*h-e*l*h)*P,t[7]=(a*f*r-u*l*r+u*s*c-e*f*c-a*s*p+e*l*p)*P,t[8]=M*P,t[9]=(A*d*r-u*v*r-A*n*p+e*v*p+u*n*h-e*d*h)*P,t[10]=(a*v*r-A*o*r+A*n*c-e*v*c-a*n*h+e*o*h)*P,t[11]=(u*o*r-a*d*r-u*n*c+e*d*c+a*n*p-e*o*p)*P,t[12]=C*P,t[13]=(u*v*s-A*d*s+A*n*f-e*v*f-u*n*m+e*d*m)*P,t[14]=(A*o*s-a*v*s-A*n*l+e*v*l+a*n*m-e*o*m)*P,t[15]=(a*d*s-u*o*s+u*n*l-e*d*l-a*n*f+e*o*f)*P,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,d=o+o,f=r*c,p=r*u,A=r*d,v=a*u,m=a*d,h=o*d,w=l*c,b=l*u,M=l*d,C=n.x,T=n.y,P=n.z;return s[0]=(1-(v+h))*C,s[1]=(p+M)*C,s[2]=(A-b)*C,s[3]=0,s[4]=(p-M)*T,s[5]=(1-(f+h))*T,s[6]=(m+w)*T,s[7]=0,s[8]=(A+b)*P,s[9]=(m-w)*P,s[10]=(1-(f+v))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=ii.set(s[0],s[1],s[2]).length(),a=ii.set(s[4],s[5],s[6]).length(),o=ii.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],ze.copy(this);let c=1/r,u=1/a,d=1/o;return ze.elements[0]*=c,ze.elements[1]*=c,ze.elements[2]*=c,ze.elements[4]*=u,ze.elements[5]*=u,ze.elements[6]*=u,ze.elements[8]*=d,ze.elements[9]*=d,ze.elements[10]*=d,e.setFromRotationMatrix(ze),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Ve,l=!1){let c=this.elements,u=2*r/(e-t),d=2*r/(n-s),f=(e+t)/(e-t),p=(n+s)/(n-s),A,v;if(l)A=r/(a-r),v=a*r/(a-r);else if(o===Ve)A=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Oi)A=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=A,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Ve,l=!1){let c=this.elements,u=2/(e-t),d=2/(n-s),f=-(e+t)/(e-t),p=-(n+s)/(n-s),A,v;if(l)A=1/(a-r),v=a/(a-r);else if(o===Ve)A=-2/(a-r),v=-(a+r)/(a-r);else if(o===Oi)A=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=A,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ii=new O,ze=new oe,El=new O(0,0,0),Tl=new O(1,1,1),vn=new O,_s=new O,Re=new O,Do=new oe,No=new dn,Ge=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Vt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Do.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Do,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return No.setFromEuler(this),this.setFromQuaternion(No,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ge.DEFAULT_ORDER="XYZ";var Vi=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},wl=0,Uo=new O,si=new dn,an=new oe,xs=new O,Ni=new O,Cl=new O,Rl=new dn,Fo=new O(1,0,0),Bo=new O(0,1,0),Oo=new O(0,0,1),zo={type:"added"},Il={type:"removed"},ri={type:"childadded",child:null},pa={type:"childremoved",child:null},ve=class i extends un{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wl++}),this.uuid=ls(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new O,e=new Ge,n=new dn,s=new O(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new oe},normalMatrix:{value:new Nt}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vi,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return si.setFromAxisAngle(t,e),this.quaternion.multiply(si),this}rotateOnWorldAxis(t,e){return si.setFromAxisAngle(t,e),this.quaternion.premultiply(si),this}rotateX(t){return this.rotateOnAxis(Fo,t)}rotateY(t){return this.rotateOnAxis(Bo,t)}rotateZ(t){return this.rotateOnAxis(Oo,t)}translateOnAxis(t,e){return Uo.copy(t).applyQuaternion(this.quaternion),this.position.add(Uo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Fo,t)}translateY(t){return this.translateOnAxis(Bo,t)}translateZ(t){return this.translateOnAxis(Oo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(an.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?xs.copy(t):xs.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ni.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?an.lookAt(Ni,xs,this.up):an.lookAt(xs,Ni,this.up),this.quaternion.setFromRotationMatrix(an),s&&(an.extractRotation(s.matrixWorld),si.setFromRotationMatrix(an),this.quaternion.premultiply(si.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(zo),ri.child=t,this.dispatchEvent(ri),ri.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Il),pa.child=t,this.dispatchEvent(pa),pa.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),an.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),an.multiply(t.parent.matrixWorld)),t.applyMatrix4(an),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(zo),ri.child=t,this.dispatchEvent(ri),ri.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ni,t,Cl),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ni,Rl,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),d=a(t.shapes),f=a(t.skeletons),p=a(t.animations),A=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),A.length>0&&(n.nodes=A)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};ve.DEFAULT_UP=new O(0,1,0);ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ke=new O,on=new O,ma=new O,cn=new O,ai=new O,oi=new O,ko=new O,ga=new O,Aa=new O,_a=new O,xa=new se,va=new se,ya=new se,Sn=class i{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),ke.subVectors(t,e),s.cross(ke);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){ke.subVectors(s,e),on.subVectors(n,e),ma.subVectors(t,e);let a=ke.dot(ke),o=ke.dot(on),l=ke.dot(ma),c=on.dot(on),u=on.dot(ma),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let f=1/d,p=(c*l-o*u)*f,A=(a*u-o*l)*f;return r.set(1-p-A,A,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,cn)===null?!1:cn.x>=0&&cn.y>=0&&cn.x+cn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,cn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,cn.x),l.addScaledVector(a,cn.y),l.addScaledVector(o,cn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return xa.setScalar(0),va.setScalar(0),ya.setScalar(0),xa.fromBufferAttribute(t,e),va.fromBufferAttribute(t,n),ya.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(xa,r.x),a.addScaledVector(va,r.y),a.addScaledVector(ya,r.z),a}static isFrontFacing(t,e,n,s){return ke.subVectors(n,e),on.subVectors(t,e),ke.cross(on).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ke.subVectors(this.c,this.b),on.subVectors(this.a,this.b),ke.cross(on).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;ai.subVectors(s,n),oi.subVectors(r,n),ga.subVectors(t,n);let l=ai.dot(ga),c=oi.dot(ga);if(l<=0&&c<=0)return e.copy(n);Aa.subVectors(t,s);let u=ai.dot(Aa),d=oi.dot(Aa);if(u>=0&&d<=u)return e.copy(s);let f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(ai,a);_a.subVectors(t,r);let p=ai.dot(_a),A=oi.dot(_a);if(A>=0&&p<=A)return e.copy(r);let v=p*c-l*A;if(v<=0&&c>=0&&A<=0)return o=c/(c-A),e.copy(n).addScaledVector(oi,o);let m=u*A-p*d;if(m<=0&&d-u>=0&&p-A>=0)return ko.subVectors(r,s),o=(d-u)/(d-u+(p-A)),e.copy(s).addScaledVector(ko,o);let h=1/(m+v+f);return a=v*h,o=f*h,e.copy(n).addScaledVector(ai,a).addScaledVector(oi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Uc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yn={h:0,s:0,l:0},vs={h:0,s:0,l:0};function Ma(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var kt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ae){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Gt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Gt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Gt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Gt.workingColorSpace){if(t=vl(t,1),e=Vt(e,0,1),n=Vt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ma(a,r,t+1/3),this.g=Ma(a,r,t),this.b=Ma(a,r,t-1/3)}return Gt.colorSpaceToWorking(this,s),this}setStyle(t,e=Ae){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ae){let n=Uc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ln(t.r),this.g=ln(t.g),this.b=ln(t.b),this}copyLinearToSRGB(t){return this.r=ui(t.r),this.g=ui(t.g),this.b=ui(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ae){return Gt.workingToColorSpace(ge.copy(this),t),Math.round(Vt(ge.r*255,0,255))*65536+Math.round(Vt(ge.g*255,0,255))*256+Math.round(Vt(ge.b*255,0,255))}getHexString(t=Ae){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Gt.workingColorSpace){Gt.workingToColorSpace(ge.copy(this),e);let n=ge.r,s=ge.g,r=ge.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Gt.workingColorSpace){return Gt.workingToColorSpace(ge.copy(this),e),t.r=ge.r,t.g=ge.g,t.b=ge.b,t}getStyle(t=Ae){Gt.workingToColorSpace(ge.copy(this),t);let e=ge.r,n=ge.g,s=ge.b;return t!==Ae?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(yn),this.setHSL(yn.h+t,yn.s+e,yn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(yn),t.getHSL(vs);let n=sa(yn.h,vs.h,e),s=sa(yn.s,vs.s,e),r=sa(yn.l,vs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ge=new kt;kt.NAMES=Uc;var Pl=0,fn=class extends un{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pl++}),this.uuid=ls(),this.name="",this.type="Material",this.blending=Vn,this.side=hn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ls,this.blendDst=Ds,this.blendEquation=En,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=Hn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ia,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=kn,this.stencilZFail=kn,this.stencilZPass=kn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Vn&&(n.blending=this.blending),this.side!==hn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ls&&(n.blendSrc=this.blendSrc),this.blendDst!==Ds&&(n.blendDst=this.blendDst),this.blendEquation!==En&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Hn&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ia&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==kn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==kn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==kn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Hi=class extends fn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ge,this.combine=ka,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ce=new O,ys=new Wt,Ll=0,Pe=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ll++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Pa,this.updateRanges=[],this.gpuType=tn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ys.fromBufferAttribute(this,e),ys.applyMatrix3(t),this.setXY(e,ys.x,ys.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.applyMatrix3(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.applyMatrix4(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.applyNormalMatrix(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ce.fromBufferAttribute(this,e),ce.transformDirection(t),this.setXYZ(e,ce.x,ce.y,ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Pi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ee(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Pi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Pi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Pi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Pi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),s=Ee(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),s=Ee(s,this.array),r=Ee(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Pa&&(t.usage=this.usage),t}};var Gi=class extends Pe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Wi=class extends Pe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var xe=class extends Pe{constructor(t,e,n){super(new Float32Array(t),e,n)}},Dl=0,Ue=new oe,Sa=new ve,ci=new O,Ie=new Tn,Ui=new Tn,fe=new O,Ke=class i extends un{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dl++}),this.uuid=ls(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new($a(t)?Wi:Gi)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Nt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ue.makeRotationFromQuaternion(t),this.applyMatrix4(Ue),this}rotateX(t){return Ue.makeRotationX(t),this.applyMatrix4(Ue),this}rotateY(t){return Ue.makeRotationY(t),this.applyMatrix4(Ue),this}rotateZ(t){return Ue.makeRotationZ(t),this.applyMatrix4(Ue),this}translate(t,e,n){return Ue.makeTranslation(t,e,n),this.applyMatrix4(Ue),this}scale(t,e,n){return Ue.makeScale(t,e,n),this.applyMatrix4(Ue),this}lookAt(t){return Sa.lookAt(t),Sa.updateMatrix(),this.applyMatrix4(Sa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ci).negate(),this.translate(ci.x,ci.y,ci.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new xe(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Ie.setFromBufferAttribute(r),this.morphTargetsRelative?(fe.addVectors(this.boundingBox.min,Ie.min),this.boundingBox.expandByPoint(fe),fe.addVectors(this.boundingBox.max,Ie.max),this.boundingBox.expandByPoint(fe)):(this.boundingBox.expandByPoint(Ie.min),this.boundingBox.expandByPoint(Ie.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){let n=this.boundingSphere.center;if(Ie.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Ui.setFromBufferAttribute(o),this.morphTargetsRelative?(fe.addVectors(Ie.min,Ui.min),Ie.expandByPoint(fe),fe.addVectors(Ie.max,Ui.max),Ie.expandByPoint(fe)):(Ie.expandByPoint(Ui.min),Ie.expandByPoint(Ui.max))}Ie.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)fe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(fe));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)fe.fromBufferAttribute(o,c),l&&(ci.fromBufferAttribute(t,c),fe.add(ci)),s=Math.max(s,n.distanceToSquared(fe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pe(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<n.count;U++)o[U]=new O,l[U]=new O;let c=new O,u=new O,d=new O,f=new Wt,p=new Wt,A=new Wt,v=new O,m=new O;function h(U,y,x){c.fromBufferAttribute(n,U),u.fromBufferAttribute(n,y),d.fromBufferAttribute(n,x),f.fromBufferAttribute(r,U),p.fromBufferAttribute(r,y),A.fromBufferAttribute(r,x),u.sub(c),d.sub(c),p.sub(f),A.sub(f);let R=1/(p.x*A.y-A.x*p.y);isFinite(R)&&(v.copy(u).multiplyScalar(A.y).addScaledVector(d,-p.y).multiplyScalar(R),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-A.x).multiplyScalar(R),o[U].add(v),o[y].add(v),o[x].add(v),l[U].add(m),l[y].add(m),l[x].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let U=0,y=w.length;U<y;++U){let x=w[U],R=x.start,B=x.count;for(let G=R,W=R+B;G<W;G+=3)h(t.getX(G+0),t.getX(G+1),t.getX(G+2))}let b=new O,M=new O,C=new O,T=new O;function P(U){C.fromBufferAttribute(s,U),T.copy(C);let y=o[U];b.copy(y),b.sub(C.multiplyScalar(C.dot(y))).normalize(),M.crossVectors(T,y);let R=M.dot(l[U])<0?-1:1;a.setXYZW(U,b.x,b.y,b.z,R)}for(let U=0,y=w.length;U<y;++U){let x=w[U],R=x.start,B=x.count;for(let G=R,W=R+B;G<W;G+=3)P(t.getX(G+0)),P(t.getX(G+1)),P(t.getX(G+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Pe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new O,r=new O,a=new O,o=new O,l=new O,c=new O,u=new O,d=new O;if(t)for(let f=0,p=t.count;f<p;f+=3){let A=t.getX(f+0),v=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,A),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(n,A),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(A,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)fe.fromBufferAttribute(t,e),fe.normalize(),t.setXYZ(e,fe.x,fe.y,fe.z)}toNonIndexed(){function t(o,l){let c=o.array,u=o.itemSize,d=o.normalized,f=new c.constructor(l.length*u),p=0,A=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*u;for(let h=0;h<u;h++)f[A++]=c[p++]}return new Pe(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){let f=c[u],p=t(f,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){let p=c[d];u.push(p.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],d=r[c];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,u=a.length;c<u;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Vo=new oe,On=new Vs,Ms=new mi,Ho=new O,Ss=new O,bs=new O,Es=new O,ba=new O,Ts=new O,Go=new O,ws=new O,le=class extends ve{constructor(t=new Ke,e=new Hi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Ts.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],d=r[l];u!==0&&(ba.fromBufferAttribute(d,t),a?Ts.addScaledVector(ba,u):Ts.addScaledVector(ba.sub(e),u))}e.add(Ts)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ms.copy(n.boundingSphere),Ms.applyMatrix4(r),On.copy(t.ray).recast(t.near),!(Ms.containsPoint(On.origin)===!1&&(On.intersectSphere(Ms,Ho)===null||On.origin.distanceToSquared(Ho)>(t.far-t.near)**2))&&(Vo.copy(r).invert(),On.copy(t.ray).applyMatrix4(Vo),!(n.boundingBox!==null&&On.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,On)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let A=0,v=f.length;A<v;A++){let m=f[A],h=a[m.materialIndex],w=Math.max(m.start,p.start),b=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let M=w,C=b;M<C;M+=3){let T=o.getX(M),P=o.getX(M+1),U=o.getX(M+2);s=Cs(this,h,t,n,c,u,d,T,P,U),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let A=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=A,h=v;m<h;m+=3){let w=o.getX(m),b=o.getX(m+1),M=o.getX(m+2);s=Cs(this,a,t,n,c,u,d,w,b,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let A=0,v=f.length;A<v;A++){let m=f[A],h=a[m.materialIndex],w=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=w,C=b;M<C;M+=3){let T=M,P=M+1,U=M+2;s=Cs(this,h,t,n,c,u,d,T,P,U),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let A=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=A,h=v;m<h;m+=3){let w=m,b=m+1,M=m+2;s=Cs(this,a,t,n,c,u,d,w,b,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Nl(i,t,e,n,s,r,a,o){let l;if(t.side===Se?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===hn,o),l===null)return null;ws.copy(o),ws.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(ws);return c<e.near||c>e.far?null:{distance:c,point:ws.clone(),object:i}}function Cs(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Ss),i.getVertexPosition(l,bs),i.getVertexPosition(c,Es);let u=Nl(i,t,e,n,Ss,bs,Es,Go);if(u){let d=new O;Sn.getBarycoord(Go,Ss,bs,Es,d),s&&(u.uv=Sn.getInterpolatedAttribute(s,o,l,c,d,new Wt)),r&&(u.uv1=Sn.getInterpolatedAttribute(r,o,l,c,d,new Wt)),a&&(u.normal=Sn.getInterpolatedAttribute(a,o,l,c,d,new O),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new O,materialIndex:0};Sn.getNormal(Ss,bs,Es,f.normal),u.face=f,u.barycoord=d}return u}var wn=class i extends Ke{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],d=[],f=0,p=0;A("z","y","x",-1,-1,n,e,t,a,r,0),A("z","y","x",1,-1,n,e,-t,a,r,1),A("x","z","y",1,1,t,n,e,s,a,2),A("x","z","y",1,-1,t,n,-e,s,a,3),A("x","y","z",1,-1,t,e,n,s,r,4),A("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new xe(c,3)),this.setAttribute("normal",new xe(u,3)),this.setAttribute("uv",new xe(d,2));function A(v,m,h,w,b,M,C,T,P,U,y){let x=M/P,R=C/U,B=M/2,G=C/2,W=T/2,Q=P+1,X=U+1,k=0,D=0,z=new O;for(let Z=0;Z<X;Z++){let at=Z*R-G;for(let St=0;St<Q;St++){let Ot=St*x-B;z[v]=Ot*w,z[m]=at*b,z[h]=W,c.push(z.x,z.y,z.z),z[v]=0,z[m]=0,z[h]=T>0?1:-1,u.push(z.x,z.y,z.z),d.push(St/P),d.push(1-Z/U),k+=1}}for(let Z=0;Z<U;Z++)for(let at=0;at<P;at++){let St=f+at+Q*Z,Ot=f+at+Q*(Z+1),Yt=f+(at+1)+Q*(Z+1),It=f+(at+1)+Q*Z;l.push(St,Ot,It),l.push(Ot,Yt,It),D+=6}o.addGroup(p,D,y),p+=D,f+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function qn(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function ye(i){let t={};for(let e=0;e<i.length;e++){let n=qn(i[e]);for(let s in n)t[s]=n[s]}return t}function Ul(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function to(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Gt.workingColorSpace}var Fc={clone:qn,merge:ye},Fl=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bl=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,We=class extends fn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fl,this.fragmentShader=Bl,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=qn(t.uniforms),this.uniformsGroups=Ul(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Xi=class extends ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=Ve,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Mn=new O,Wo=new Wt,Xo=new Wt,_e=class extends Xi{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Bs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ia*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Bs*2*Math.atan(Math.tan(ia*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Mn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Mn.x,Mn.y).multiplyScalar(-t/Mn.z),Mn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mn.x,Mn.y).multiplyScalar(-t/Mn.z)}getViewSize(t,e){return this.getViewBounds(t,Wo,Xo),e.subVectors(Xo,Wo)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ia*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},li=-90,hi=1,Hs=class extends ve{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new _e(li,hi,t,e);s.layers=this.layers,this.add(s);let r=new _e(li,hi,t,e);r.layers=this.layers,this.add(r);let a=new _e(li,hi,t,e);a.layers=this.layers,this.add(a);let o=new _e(li,hi,t,e);o.layers=this.layers,this.add(o);let l=new _e(li,hi,t,e);l.layers=this.layers,this.add(l);let c=new _e(li,hi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Ve)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Oi)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),A=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(d,f,p),t.xr.enabled=A,n.texture.needsPMREMUpdate=!0}},Yi=class extends Te{constructor(t=[],e=Xn,n,s,r,a,o,l,c,u){super(t,e,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Gs=class extends Qe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Yi(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new wn(5,5,5),r=new We({name:"CubemapFromEquirect",uniforms:qn(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Se,blending:pn});r.uniforms.tEquirect.value=e;let a=new le(s,r),o=e.minFilter;return e.minFilter===Pn&&(e.minFilter=He),new Hs(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Ze=class extends ve{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ol={type:"move"},gi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ze,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ze,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ze,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let v of t.hand.values()){let m=e.getJointPose(v,n),h=this._getHandJoint(c,v);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,A=.005;c.inputState.pinching&&f>p+A?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-A&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ol)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ze;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}};var qi=class extends ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ge,this.environmentIntensity=1,this.environmentRotation=new Ge,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Ea=new O,zl=new O,kl=new Nt,Je=class{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Ea.subVectors(n,e).cross(zl.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Ea),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||kl.getNormalMatrix(t),s=this.coplanarPoint(Ea).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},zn=new mi,Vl=new Wt(.5,.5),Rs=new O,Ai=class{constructor(t=new Je,e=new Je,n=new Je,s=new Je,r=new Je,a=new Je){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ve,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],d=r[5],f=r[6],p=r[7],A=r[8],v=r[9],m=r[10],h=r[11],w=r[12],b=r[13],M=r[14],C=r[15];if(s[0].setComponents(c-a,p-u,h-A,C-w).normalize(),s[1].setComponents(c+a,p+u,h+A,C+w).normalize(),s[2].setComponents(c+o,p+d,h+v,C+b).normalize(),s[3].setComponents(c-o,p-d,h-v,C-b).normalize(),n)s[4].setComponents(l,f,m,M).normalize(),s[5].setComponents(c-l,p-f,h-m,C-M).normalize();else if(s[4].setComponents(c-l,p-f,h-m,C-M).normalize(),e===Ve)s[5].setComponents(c+l,p+f,h+m,C+M).normalize();else if(e===Oi)s[5].setComponents(l,f,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),zn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),zn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(zn)}intersectsSprite(t){zn.center.set(0,0,0);let e=Vl.distanceTo(t.center);return zn.radius=.7071067811865476+e,zn.applyMatrix4(t.matrixWorld),this.intersectsSphere(zn)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Rs.x=s.normal.x>0?t.max.x:t.min.x,Rs.y=s.normal.y>0?t.max.y:t.min.y,Rs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Rs)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ji=class extends Te{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Zi=class extends Te{constructor(t,e,n=Ln,s,r,a,o=Fe,l=Fe,c,u=di,d=1){if(u!==di&&u!==bi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:d};super(f,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new pi(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Qi=class extends Te{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var _i=class i extends Ke{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],f=[],p=[],A=0,v=[],m=n/2,h=0;w(),a===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new xe(d,3)),this.setAttribute("normal",new xe(f,3)),this.setAttribute("uv",new xe(p,2));function w(){let M=new O,C=new O,T=0,P=(e-t)/n;for(let U=0;U<=r;U++){let y=[],x=U/r,R=x*(e-t)+t;for(let B=0;B<=s;B++){let G=B/s,W=G*l+o,Q=Math.sin(W),X=Math.cos(W);C.x=R*Q,C.y=-x*n+m,C.z=R*X,d.push(C.x,C.y,C.z),M.set(Q,P,X).normalize(),f.push(M.x,M.y,M.z),p.push(G,1-x),y.push(A++)}v.push(y)}for(let U=0;U<s;U++)for(let y=0;y<r;y++){let x=v[y][U],R=v[y+1][U],B=v[y+1][U+1],G=v[y][U+1];(t>0||y!==0)&&(u.push(x,R,G),T+=3),(e>0||y!==r-1)&&(u.push(R,B,G),T+=3)}c.addGroup(h,T,0),h+=T}function b(M){let C=A,T=new Wt,P=new O,U=0,y=M===!0?t:e,x=M===!0?1:-1;for(let B=1;B<=s;B++)d.push(0,m*x,0),f.push(0,x,0),p.push(.5,.5),A++;let R=A;for(let B=0;B<=s;B++){let W=B/s*l+o,Q=Math.cos(W),X=Math.sin(W);P.x=y*X,P.y=m*x,P.z=y*Q,d.push(P.x,P.y,P.z),f.push(0,x,0),T.x=Q*.5+.5,T.y=X*.5*x+.5,p.push(T.x,T.y),A++}for(let B=0;B<s;B++){let G=C+B,W=R+B;M===!0?u.push(W,W+1,G):u.push(W+1,W,G),U+=3}c.addGroup(h,U,M===!0?1:2),h+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Cn=class i extends Ke{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,d=t/o,f=e/l,p=[],A=[],v=[],m=[];for(let h=0;h<u;h++){let w=h*f-a;for(let b=0;b<c;b++){let M=b*d-r;A.push(M,-w,0),v.push(0,0,1),m.push(b/o),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let w=0;w<o;w++){let b=w+c*h,M=w+c*(h+1),C=w+1+c*(h+1),T=w+1+c*h;p.push(b,M,T),p.push(M,C,T)}this.setIndex(p),this.setAttribute("position",new xe(A,3)),this.setAttribute("normal",new xe(v,3)),this.setAttribute("uv",new xe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Ki=class i extends Ke{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],d=new O,f=new O,p=[],A=[],v=[],m=[];for(let h=0;h<=n;h++){let w=[],b=h/n,M=0;h===0&&a===0?M=.5/e:h===n&&l===Math.PI&&(M=-.5/e);for(let C=0;C<=e;C++){let T=C/e;d.x=-t*Math.cos(s+T*r)*Math.sin(a+b*o),d.y=t*Math.cos(a+b*o),d.z=t*Math.sin(s+T*r)*Math.sin(a+b*o),A.push(d.x,d.y,d.z),f.copy(d).normalize(),v.push(f.x,f.y,f.z),m.push(T+M,1-b),w.push(c++)}u.push(w)}for(let h=0;h<n;h++)for(let w=0;w<e;w++){let b=u[h][w+1],M=u[h][w],C=u[h+1][w],T=u[h+1][w+1];(h!==0||a>0)&&p.push(b,M,T),(h!==n-1||l<Math.PI)&&p.push(M,C,T)}this.setIndex(p),this.setAttribute("position",new xe(A,3)),this.setAttribute("normal",new xe(v,3)),this.setAttribute("uv",new xe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ji=class extends fn{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new kt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};var xi=class extends fn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qa,this.normalScale=new Wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ge,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Ws=class extends fn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Xs=class extends fn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Is(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Hl(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Wn=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ys=class extends Wn{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wa,endingEnd:wa}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ca:r=t,o=2*e-n;break;case Ra:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ca:a=t,l=2*n-e;break;case Ra:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,A=(n-e)/(s-e),v=A*A,m=v*A,h=-f*m+2*f*v-f*A,w=(1+f)*m+(-1.5-2*f)*v+(-.5+f)*A+1,b=(-1-p)*m+(1.5+p)*v+.5*A,M=p*m-p*v;for(let C=0;C!==o;++C)r[C]=h*a[u+C]+w*a[c+C]+b*a[l+C]+M*a[d+C];return r}},qs=class extends Wn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(n-e)/(s-e),d=1-u;for(let f=0;f!==o;++f)r[f]=a[c+f]*d+a[l+f]*u;return r}},Js=class extends Wn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Le=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Is(e,this.TimeBufferType),this.values=Is(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Is(t.times,Array),values:Is(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Js(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new qs(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ys(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Fi:e=this.InterpolantFactoryMethodDiscrete;break;case Fs:e=this.InterpolantFactoryMethodLinear;break;case Ps:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fi;case this.InterpolantFactoryMethodLinear:return Fs;case this.InterpolantFactoryMethodSmooth:return Ps}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Hl(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ps,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*n,f=d-n,p=d+n;for(let A=0;A!==n;++A){let v=e[d+A];if(v!==e[f+A]||v!==e[p+A]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*n,f=a*n;for(let p=0;p!==n;++p)e[f+p]=e[d+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Le.prototype.ValueTypeName="";Le.prototype.TimeBufferType=Float32Array;Le.prototype.ValueBufferType=Float32Array;Le.prototype.DefaultInterpolation=Fs;var Rn=class extends Le{constructor(t,e,n){super(t,e,n)}};Rn.prototype.ValueTypeName="bool";Rn.prototype.ValueBufferType=Array;Rn.prototype.DefaultInterpolation=Fi;Rn.prototype.InterpolantFactoryMethodLinear=void 0;Rn.prototype.InterpolantFactoryMethodSmooth=void 0;var Zs=class extends Le{constructor(t,e,n,s){super(t,e,n,s)}};Zs.prototype.ValueTypeName="color";var Qs=class extends Le{constructor(t,e,n,s){super(t,e,n,s)}};Qs.prototype.ValueTypeName="number";var Ks=class extends Wn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let u=c+o;c!==u;c+=4)dn.slerpFlat(r,0,a,c-o,a,c,l);return r}},$i=class extends Le{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Ks(this.times,this.values,this.getValueSize(),t)}};$i.prototype.ValueTypeName="quaternion";$i.prototype.InterpolantFactoryMethodSmooth=void 0;var In=class extends Le{constructor(t,e,n){super(t,e,n)}};In.prototype.ValueTypeName="string";In.prototype.ValueBufferType=Array;In.prototype.DefaultInterpolation=Fi;In.prototype.InterpolantFactoryMethodLinear=void 0;In.prototype.InterpolantFactoryMethodSmooth=void 0;var js=class extends Le{constructor(t,e,n,s){super(t,e,n,s)}};js.prototype.ValueTypeName="vector";var $s=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,f=c.length;d<f;d+=2){let p=c[d],A=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return A}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Bc=new $s,tr=class{constructor(t){this.manager=t!==void 0?t:Bc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};tr.DEFAULT_MATERIAL_NAME="__DEFAULT";var ts=class extends ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},es=class extends ts{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.groundColor=new kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Ta=new oe,Yo=new O,qo=new O,La=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Wt(512,512),this.mapType=Xe,this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ai,this._frameExtents=new Wt(1,1),this._viewportCount=1,this._viewports=[new se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Yo.setFromMatrixPosition(t.matrixWorld),e.position.copy(Yo),qo.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(qo),e.updateMatrixWorld(),Ta.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ta,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ta)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var ns=class extends Xi{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Da=class extends La{constructor(){super(new ns(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},vi=class extends ts{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.target=new ve,this.shadow=new Da}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var er=class extends _e{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var eo="\\[\\]\\.:\\/",Gl=new RegExp("["+eo+"]","g"),no="[^"+eo+"]",Wl="[^"+eo.replace("\\.","")+"]",Xl=/((?:WC+[\/:])*)/.source.replace("WC",no),Yl=/(WCOD+)?/.source.replace("WCOD",Wl),ql=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",no),Jl=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",no),Zl=new RegExp("^"+Xl+Yl+ql+Jl+"$"),Ql=["material","materials","bones","map"],Na=class{constructor(t,e,n){let s=n||$t.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},$t=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Gl,"")}static parseTrackName(t){let e=Zl.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Ql.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};$t.Composite=Na;$t.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};$t.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};$t.prototype.GetterByBindingType=[$t.prototype._getValue_direct,$t.prototype._getValue_array,$t.prototype._getValue_arrayElement,$t.prototype._getValue_toArray];$t.prototype.SetterByBindingTypeAndVersioning=[[$t.prototype._setValue_direct,$t.prototype._setValue_direct_setNeedsUpdate,$t.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[$t.prototype._setValue_array,$t.prototype._setValue_array_setNeedsUpdate,$t.prototype._setValue_array_setMatrixWorldNeedsUpdate],[$t.prototype._setValue_arrayElement,$t.prototype._setValue_arrayElement_setNeedsUpdate,$t.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[$t.prototype._setValue_fromArray,$t.prototype._setValue_fromArray_setNeedsUpdate,$t.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Lp=new Float32Array(1);function io(i,t,e,n){let s=Kl(n);switch(e){case Ya:return i*t;case Ja:return i*t/s.components*s.byteLength;case Ar:return i*t/s.components*s.byteLength;case Za:return i*t*2/s.components*s.byteLength;case _r:return i*t*2/s.components*s.byteLength;case qa:return i*t*3/s.components*s.byteLength;case Be:return i*t*4/s.components*s.byteLength;case xr:return i*t*4/s.components*s.byteLength;case rs:case as:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case os:case cs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case yr:case Sr:return Math.max(i,16)*Math.max(t,8)/4;case vr:case Mr:return Math.max(i,8)*Math.max(t,8)/2;case br:case Er:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Tr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case wr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Cr:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Rr:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ir:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Pr:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Lr:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Dr:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Nr:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ur:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Fr:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Br:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Or:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case zr:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case kr:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Vr:case Hr:case Gr:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Wr:case Xr:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Yr:case qr:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Kl(i){switch(i){case Xe:case Ha:return{byteLength:1,components:1};case yi:case Ga:case Mi:return{byteLength:2,components:1};case mr:case gr:return{byteLength:2,components:4};case Ln:case pr:case tn:return{byteLength:4,components:1};case Wa:case Xa:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function ol(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function $l(i){let t=new WeakMap;function e(o,l){let c=o.array,u=o.usage,d=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let u=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,u);else{d.sort((p,A)=>p.start-A.start);let f=0;for(let p=1;p<d.length;p++){let A=d[f],v=d[p];v.start<=A.start+A.count+1?A.count=Math.max(A.count,v.start+v.count-A.start):(++f,d[f]=v)}d.length=f+1;for(let p=0,A=d.length;p<A;p++){let v=d[p];i.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var th=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,eh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,nh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ih=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ah=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,oh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ch=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,lh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,fh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ph=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,mh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,gh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ah=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_h=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Mh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Sh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,bh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Eh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Th=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ch=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ih="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ph=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Lh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Dh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Nh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Uh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Bh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Oh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Hh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Yh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,qh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,jh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$h=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,tu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,eu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,iu=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,su=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ru=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,au=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ou=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,lu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,du=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mu=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,gu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Au=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,_u=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,xu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Mu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Su=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Eu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ru=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Iu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Du=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Uu=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Fu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Bu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ou=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,zu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ku=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Vu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Hu=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Gu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,qu=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ju=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Zu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Qu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ku=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ju=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,$u=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,td=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ed=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,id=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ad=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,od=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,cd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ld=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ud=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,pd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,md=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ad=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,_d=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,vd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,yd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Md=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,bd=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ed=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Td=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Cd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Rd=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Id=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Pd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ld=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Bt={alphahash_fragment:th,alphahash_pars_fragment:eh,alphamap_fragment:nh,alphamap_pars_fragment:ih,alphatest_fragment:sh,alphatest_pars_fragment:rh,aomap_fragment:ah,aomap_pars_fragment:oh,batching_pars_vertex:ch,batching_vertex:lh,begin_vertex:hh,beginnormal_vertex:uh,bsdfs:dh,iridescence_fragment:fh,bumpmap_pars_fragment:ph,clipping_planes_fragment:mh,clipping_planes_pars_fragment:gh,clipping_planes_pars_vertex:Ah,clipping_planes_vertex:_h,color_fragment:xh,color_pars_fragment:vh,color_pars_vertex:yh,color_vertex:Mh,common:Sh,cube_uv_reflection_fragment:bh,defaultnormal_vertex:Eh,displacementmap_pars_vertex:Th,displacementmap_vertex:wh,emissivemap_fragment:Ch,emissivemap_pars_fragment:Rh,colorspace_fragment:Ih,colorspace_pars_fragment:Ph,envmap_fragment:Lh,envmap_common_pars_fragment:Dh,envmap_pars_fragment:Nh,envmap_pars_vertex:Uh,envmap_physical_pars_fragment:Yh,envmap_vertex:Fh,fog_vertex:Bh,fog_pars_vertex:Oh,fog_fragment:zh,fog_pars_fragment:kh,gradientmap_pars_fragment:Vh,lightmap_pars_fragment:Hh,lights_lambert_fragment:Gh,lights_lambert_pars_fragment:Wh,lights_pars_begin:Xh,lights_toon_fragment:qh,lights_toon_pars_fragment:Jh,lights_phong_fragment:Zh,lights_phong_pars_fragment:Qh,lights_physical_fragment:Kh,lights_physical_pars_fragment:jh,lights_fragment_begin:$h,lights_fragment_maps:tu,lights_fragment_end:eu,logdepthbuf_fragment:nu,logdepthbuf_pars_fragment:iu,logdepthbuf_pars_vertex:su,logdepthbuf_vertex:ru,map_fragment:au,map_pars_fragment:ou,map_particle_fragment:cu,map_particle_pars_fragment:lu,metalnessmap_fragment:hu,metalnessmap_pars_fragment:uu,morphinstance_vertex:du,morphcolor_vertex:fu,morphnormal_vertex:pu,morphtarget_pars_vertex:mu,morphtarget_vertex:gu,normal_fragment_begin:Au,normal_fragment_maps:_u,normal_pars_fragment:xu,normal_pars_vertex:vu,normal_vertex:yu,normalmap_pars_fragment:Mu,clearcoat_normal_fragment_begin:Su,clearcoat_normal_fragment_maps:bu,clearcoat_pars_fragment:Eu,iridescence_pars_fragment:Tu,opaque_fragment:wu,packing:Cu,premultiplied_alpha_fragment:Ru,project_vertex:Iu,dithering_fragment:Pu,dithering_pars_fragment:Lu,roughnessmap_fragment:Du,roughnessmap_pars_fragment:Nu,shadowmap_pars_fragment:Uu,shadowmap_pars_vertex:Fu,shadowmap_vertex:Bu,shadowmask_pars_fragment:Ou,skinbase_vertex:zu,skinning_pars_vertex:ku,skinning_vertex:Vu,skinnormal_vertex:Hu,specularmap_fragment:Gu,specularmap_pars_fragment:Wu,tonemapping_fragment:Xu,tonemapping_pars_fragment:Yu,transmission_fragment:qu,transmission_pars_fragment:Ju,uv_pars_fragment:Zu,uv_pars_vertex:Qu,uv_vertex:Ku,worldpos_vertex:ju,background_vert:$u,background_frag:td,backgroundCube_vert:ed,backgroundCube_frag:nd,cube_vert:id,cube_frag:sd,depth_vert:rd,depth_frag:ad,distanceRGBA_vert:od,distanceRGBA_frag:cd,equirect_vert:ld,equirect_frag:hd,linedashed_vert:ud,linedashed_frag:dd,meshbasic_vert:fd,meshbasic_frag:pd,meshlambert_vert:md,meshlambert_frag:gd,meshmatcap_vert:Ad,meshmatcap_frag:_d,meshnormal_vert:xd,meshnormal_frag:vd,meshphong_vert:yd,meshphong_frag:Md,meshphysical_vert:Sd,meshphysical_frag:bd,meshtoon_vert:Ed,meshtoon_frag:Td,points_vert:wd,points_frag:Cd,shadow_vert:Rd,shadow_frag:Id,sprite_vert:Pd,sprite_frag:Ld},ot={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Nt}},envmap:{envMap:{value:null},envMapRotation:{value:new Nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Nt},normalScale:{value:new Wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0},uvTransform:{value:new Nt}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new Wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Nt},alphaMap:{value:null},alphaMapTransform:{value:new Nt},alphaTest:{value:0}}},en={basic:{uniforms:ye([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:ye([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new kt(0)}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:ye([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:ye([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:ye([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new kt(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:ye([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:ye([ot.points,ot.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:ye([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:ye([ot.common,ot.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:ye([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:ye([ot.sprite,ot.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new Nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Nt}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distanceRGBA:{uniforms:ye([ot.common,ot.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distanceRGBA_vert,fragmentShader:Bt.distanceRGBA_frag},shadow:{uniforms:ye([ot.lights,ot.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};en.physical={uniforms:ye([en.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Nt},clearcoatNormalScale:{value:new Wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Nt},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Nt},transmissionSamplerSize:{value:new Wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Nt},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Nt},anisotropyVector:{value:new Wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Nt}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};var Jr={r:0,b:0,g:0},Jn=new Ge,Dd=new oe;function Nd(i,t,e,n,s,r,a){let o=new kt(0),l=r===!0?0:1,c,u,d=null,f=0,p=null;function A(b){let M=b.isScene===!0?b.background:null;return M&&M.isTexture&&(M=(b.backgroundBlurriness>0?e:t).get(M)),M}function v(b){let M=!1,C=A(b);C===null?h(o,l):C&&C.isColor&&(h(C,1),M=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(b,M){let C=A(M);C&&(C.isCubeTexture||C.mapping===is)?(u===void 0&&(u=new le(new wn(1,1,1),new We({name:"BackgroundCubeMaterial",uniforms:qn(en.backgroundCube.uniforms),vertexShader:en.backgroundCube.vertexShader,fragmentShader:en.backgroundCube.fragmentShader,side:Se,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,P,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Jn.copy(M.backgroundRotation),Jn.x*=-1,Jn.y*=-1,Jn.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Jn.y*=-1,Jn.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Dd.makeRotationFromEuler(Jn)),u.material.toneMapped=Gt.getTransfer(C.colorSpace)!==Jt,(d!==C||f!==C.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,d=C,f=C.version,p=i.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new le(new Cn(2,2),new We({name:"BackgroundMaterial",uniforms:qn(en.background.uniforms),vertexShader:en.background.vertexShader,fragmentShader:en.background.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Gt.getTransfer(C.colorSpace)!==Jt,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(d!==C||f!==C.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,d=C,f=C.version,p=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function h(b,M){b.getRGB(Jr,to(i)),n.buffers.color.setClear(Jr.r,Jr.g,Jr.b,M,a)}function w(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,M=1){o.set(b),l=M,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,h(o,l)},render:v,addToRenderList:m,dispose:w}}function Ud(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(x,R,B,G,W){let Q=!1,X=d(G,B,R);r!==X&&(r=X,c(r.object)),Q=p(x,G,B,W),Q&&A(x,G,B,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(Q||a)&&(a=!1,M(x,R,B,G),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function u(x){return i.deleteVertexArray(x)}function d(x,R,B){let G=B.wireframe===!0,W=n[x.id];W===void 0&&(W={},n[x.id]=W);let Q=W[R.id];Q===void 0&&(Q={},W[R.id]=Q);let X=Q[G];return X===void 0&&(X=f(l()),Q[G]=X),X}function f(x){let R=[],B=[],G=[];for(let W=0;W<e;W++)R[W]=0,B[W]=0,G[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:B,attributeDivisors:G,object:x,attributes:{},index:null}}function p(x,R,B,G){let W=r.attributes,Q=R.attributes,X=0,k=B.getAttributes();for(let D in k)if(k[D].location>=0){let Z=W[D],at=Q[D];if(at===void 0&&(D==="instanceMatrix"&&x.instanceMatrix&&(at=x.instanceMatrix),D==="instanceColor"&&x.instanceColor&&(at=x.instanceColor)),Z===void 0||Z.attribute!==at||at&&Z.data!==at.data)return!0;X++}return r.attributesNum!==X||r.index!==G}function A(x,R,B,G){let W={},Q=R.attributes,X=0,k=B.getAttributes();for(let D in k)if(k[D].location>=0){let Z=Q[D];Z===void 0&&(D==="instanceMatrix"&&x.instanceMatrix&&(Z=x.instanceMatrix),D==="instanceColor"&&x.instanceColor&&(Z=x.instanceColor));let at={};at.attribute=Z,Z&&Z.data&&(at.data=Z.data),W[D]=at,X++}r.attributes=W,r.attributesNum=X,r.index=G}function v(){let x=r.newAttributes;for(let R=0,B=x.length;R<B;R++)x[R]=0}function m(x){h(x,0)}function h(x,R){let B=r.newAttributes,G=r.enabledAttributes,W=r.attributeDivisors;B[x]=1,G[x]===0&&(i.enableVertexAttribArray(x),G[x]=1),W[x]!==R&&(i.vertexAttribDivisor(x,R),W[x]=R)}function w(){let x=r.newAttributes,R=r.enabledAttributes;for(let B=0,G=R.length;B<G;B++)R[B]!==x[B]&&(i.disableVertexAttribArray(B),R[B]=0)}function b(x,R,B,G,W,Q,X){X===!0?i.vertexAttribIPointer(x,R,B,W,Q):i.vertexAttribPointer(x,R,B,G,W,Q)}function M(x,R,B,G){v();let W=G.attributes,Q=B.getAttributes(),X=R.defaultAttributeValues;for(let k in Q){let D=Q[k];if(D.location>=0){let z=W[k];if(z===void 0&&(k==="instanceMatrix"&&x.instanceMatrix&&(z=x.instanceMatrix),k==="instanceColor"&&x.instanceColor&&(z=x.instanceColor)),z!==void 0){let Z=z.normalized,at=z.itemSize,St=t.get(z);if(St===void 0)continue;let Ot=St.buffer,Yt=St.type,It=St.bytesPerElement,J=Yt===i.INT||Yt===i.UNSIGNED_INT||z.gpuType===pr;if(z.isInterleavedBufferAttribute){let $=z.data,ft=$.stride,Pt=z.offset;if($.isInstancedInterleavedBuffer){for(let Mt=0;Mt<D.locationSize;Mt++)h(D.location+Mt,$.meshPerAttribute);x.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let Mt=0;Mt<D.locationSize;Mt++)m(D.location+Mt);i.bindBuffer(i.ARRAY_BUFFER,Ot);for(let Mt=0;Mt<D.locationSize;Mt++)b(D.location+Mt,at/D.locationSize,Yt,Z,ft*It,(Pt+at/D.locationSize*Mt)*It,J)}else{if(z.isInstancedBufferAttribute){for(let $=0;$<D.locationSize;$++)h(D.location+$,z.meshPerAttribute);x.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let $=0;$<D.locationSize;$++)m(D.location+$);i.bindBuffer(i.ARRAY_BUFFER,Ot);for(let $=0;$<D.locationSize;$++)b(D.location+$,at/D.locationSize,Yt,Z,at*It,at/D.locationSize*$*It,J)}}else if(X!==void 0){let Z=X[k];if(Z!==void 0)switch(Z.length){case 2:i.vertexAttrib2fv(D.location,Z);break;case 3:i.vertexAttrib3fv(D.location,Z);break;case 4:i.vertexAttrib4fv(D.location,Z);break;default:i.vertexAttrib1fv(D.location,Z)}}}}w()}function C(){U();for(let x in n){let R=n[x];for(let B in R){let G=R[B];for(let W in G)u(G[W].object),delete G[W];delete R[B]}delete n[x]}}function T(x){if(n[x.id]===void 0)return;let R=n[x.id];for(let B in R){let G=R[B];for(let W in G)u(G[W].object),delete G[W];delete R[B]}delete n[x.id]}function P(x){for(let R in n){let B=n[R];if(B[x.id]===void 0)continue;let G=B[x.id];for(let W in G)u(G[W].object),delete G[W];delete B[x.id]}}function U(){y(),a=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:y,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:m,disableUnusedAttributes:w}}function Fd(i,t,e){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function a(c,u,d){d!==0&&(i.drawArraysInstanced(n,c,u,d),e.update(u,n,d))}function o(c,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let p=0;for(let A=0;A<d;A++)p+=u[A];e.update(p,n,1)}function l(c,u,d,f){if(d===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let A=0;A<c.length;A++)a(c[A],u[A],f[A]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,d);let A=0;for(let v=0;v<d;v++)A+=u[v]*f[v];e.update(A,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Bd(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let P=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==Be&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){let U=P===Mi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==Xe&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==tn&&!U)}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),A=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=A>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:A,maxTextureSize:v,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:w,maxVaryings:b,maxFragmentUniforms:M,vertexTextures:C,maxSamples:T}}function Od(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Je,o=new Nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let p=d.length!==0||f||n!==0||s;return s=f,n=d.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=u(d,f,0)},this.setState=function(d,f,p){let A=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,h=i.get(d);if(!s||A===null||A.length===0||r&&!m)r?u(null):c();else{let w=r?0:n,b=w*4,M=h.clippingState||null;l.value=M,M=u(A,f,b,p);for(let C=0;C!==b;++C)M[C]=e[C];h.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,f,p,A){let v=d!==null?d.length:0,m=null;if(v!==0){if(m=l.value,A!==!0||m===null){let h=p+v*4,w=f.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<h)&&(m=new Float32Array(h));for(let b=0,M=p;b!==v;++b,M+=4)a.copy(d[b]).applyMatrix4(w,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function zd(i){let t=new WeakMap;function e(a,o){return o===ur?a.mapping=Xn:o===dr&&(a.mapping=Yn),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===ur||o===dr)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Gs(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ti=4,Oc=[.125,.215,.35,.446,.526,.582],Kn=20,so=new ns,zc=new kt,ro=null,ao=0,oo=0,co=!1,Qn=(1+Math.sqrt(5))/2,Ei=1/Qn,kc=[new O(-Qn,Ei,0),new O(Qn,Ei,0),new O(-Ei,0,Qn),new O(Ei,0,Qn),new O(0,Qn,-Ei),new O(0,Qn,Ei),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)],kd=new O,Kr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=kd}=r;ro=this._renderer.getRenderTarget(),ao=this._renderer.getActiveCubeFace(),oo=this._renderer.getActiveMipmapLevel(),co=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ro,ao,oo),this._renderer.xr.enabled=co,t.scissorTest=!1,Zr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Xn||t.mapping===Yn?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ro=this._renderer.getRenderTarget(),ao=this._renderer.getActiveCubeFace(),oo=this._renderer.getActiveMipmapLevel(),co=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:He,minFilter:He,generateMipmaps:!1,type:Mi,format:Be,colorSpace:Gn,depthBuffer:!1},s=Vc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vc(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Vd(r)),this._blurMaterial=Hd(r,t,e)}return s}_compileMaterial(t){let e=new le(this._lodPlanes[0],t);this._renderer.compile(e,so)}_sceneToCubeUV(t,e,n,s,r){let l=new _e(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(zc),d.toneMapping=mn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));let v=new Hi({name:"PMREM.Background",side:Se,depthWrite:!1,depthTest:!1}),m=new le(new wn,v),h=!1,w=t.background;w?w.isColor&&(v.color.copy(w),t.background=null,h=!0):(v.color.copy(zc),h=!0);for(let b=0;b<6;b++){let M=b%3;M===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[b],r.y,r.z)):M===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[b]));let C=this._cubeSize;Zr(s,M*C,b>2?C:0,C,C),d.setRenderTarget(s),h&&d.render(m,l),d.render(t,l)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=p,d.autoClear=f,t.background=w}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Xn||t.mapping===Yn;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hc());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new le(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Zr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,so)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=kc[(s-r-1)%kc.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new le(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[n]-1,A=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Kn-1),v=r/A,m=isFinite(r)?1+Math.floor(u*v):Kn;m>Kn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Kn}`);let h=[],w=0;for(let P=0;P<Kn;++P){let U=P/v,y=Math.exp(-U*U/2);h.push(y),P===0?w+=y:P<m&&(w+=2*y)}for(let P=0;P<h.length;P++)h[P]=h[P]/w;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:b}=this;f.dTheta.value=A,f.mipInt.value=b-n;let M=this._sizeLods[s],C=3*M*(s>b-Ti?s-b+Ti:0),T=4*(this._cubeSize-M);Zr(e,C,T,3*M,2*M),l.setRenderTarget(e),l.render(d,so)}};function Vd(i){let t=[],e=[],n=[],s=i,r=i-Ti+1+Oc.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-Ti?l=Oc[a-i+Ti-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,A=6,v=3,m=2,h=1,w=new Float32Array(v*A*p),b=new Float32Array(m*A*p),M=new Float32Array(h*A*p);for(let T=0;T<p;T++){let P=T%3*2/3-1,U=T>2?0:-1,y=[P,U,0,P+2/3,U,0,P+2/3,U+1,0,P,U,0,P+2/3,U+1,0,P,U+1,0];w.set(y,v*A*T),b.set(f,m*A*T);let x=[T,T,T,T,T,T];M.set(x,h*A*T)}let C=new Ke;C.setAttribute("position",new Pe(w,v)),C.setAttribute("uv",new Pe(b,m)),C.setAttribute("faceIndex",new Pe(M,h)),t.push(C),s>Ti&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Vc(i,t,e){let n=new Qe(i,t,e);return n.texture.mapping=is,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Zr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Hd(i,t,e){let n=new Float32Array(Kn),s=new O(0,1,0);return new We({name:"SphericalGaussianBlur",defines:{n:Kn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:xo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function Hc(){return new We({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function Gc(){return new We({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pn,depthTest:!1,depthWrite:!1})}function xo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Gd(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===ur||l===dr,u=l===Xn||l===Yn;if(c||u){let d=t.get(o),f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new Kr(i)),d=c?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{let p=o.image;return c&&p&&p.height>0||u&&p&&s(p)?(e===null&&(e=new Kr(i)),d=c?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let l=0,c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Wd(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&fi("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Xd(i,t,e,n){let s={},r=new WeakMap;function a(d){let f=d.target;f.index!==null&&t.remove(f.index);for(let A in f.attributes)t.remove(f.attributes[A]);f.removeEventListener("dispose",a),delete s[f.id];let p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(d,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(d){let f=d.attributes;for(let p in f)t.update(f[p],i.ARRAY_BUFFER)}function c(d){let f=[],p=d.index,A=d.attributes.position,v=0;if(p!==null){let w=p.array;v=p.version;for(let b=0,M=w.length;b<M;b+=3){let C=w[b+0],T=w[b+1],P=w[b+2];f.push(C,T,T,P,P,C)}}else if(A!==void 0){let w=A.array;v=A.version;for(let b=0,M=w.length/3-1;b<M;b+=3){let C=b+0,T=b+1,P=b+2;f.push(C,T,T,P,P,C)}}else return;let m=new($a(f)?Wi:Gi)(f,1);m.version=v;let h=r.get(d);h&&t.remove(h),r.set(d,m)}function u(d){let f=r.get(d);if(f){let p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function Yd(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,p){i.drawElements(n,p,r,f*a),e.update(p,n,1)}function c(f,p,A){A!==0&&(i.drawElementsInstanced(n,p,r,f*a,A),e.update(p,n,A))}function u(f,p,A){if(A===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,A);let m=0;for(let h=0;h<A;h++)m+=p[h];e.update(m,n,1)}function d(f,p,A,v){if(A===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<f.length;h++)c(f[h]/a,p[h],v[h]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,v,0,A);let h=0;for(let w=0;w<A;w++)h+=p[w]*v[w];e.update(h,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function qd(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Jd(i,t,e){let n=new WeakMap,s=new se;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,f=n.get(o);if(f===void 0||f.count!==d){let y=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",y)};f!==void 0&&f.texture.dispose();let p=o.morphAttributes.position!==void 0,A=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],w=o.morphAttributes.color||[],b=0;p===!0&&(b=1),A===!0&&(b=2),v===!0&&(b=3);let M=o.attributes.position.count*b,C=1;M>t.maxTextureSize&&(C=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let T=new Float32Array(M*C*4*d),P=new ki(T,M,C,d);P.type=tn,P.needsUpdate=!0;let U=b*4;for(let x=0;x<d;x++){let R=m[x],B=h[x],G=w[x],W=M*C*4*x;for(let Q=0;Q<R.count;Q++){let X=Q*U;p===!0&&(s.fromBufferAttribute(R,Q),T[W+X+0]=s.x,T[W+X+1]=s.y,T[W+X+2]=s.z,T[W+X+3]=0),A===!0&&(s.fromBufferAttribute(B,Q),T[W+X+4]=s.x,T[W+X+5]=s.y,T[W+X+6]=s.z,T[W+X+7]=0),v===!0&&(s.fromBufferAttribute(G,Q),T[W+X+8]=s.x,T[W+X+9]=s.y,T[W+X+10]=s.z,T[W+X+11]=G.itemSize===4?s.w:1)}}f={count:d,texture:P,size:new Wt(M,C)},n.set(o,f),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let v=0;v<c.length;v++)p+=c[v];let A=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",A),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Zd(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,d=t.get(l,u);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var cl=new Te,Wc=new Zi(1,1),ll=new ki,hl=new ks,ul=new Yi,Xc=[],Yc=[],qc=new Float32Array(16),Jc=new Float32Array(9),Zc=new Float32Array(4);function Ci(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Xc[s];if(r===void 0&&(r=new Float32Array(s),Xc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function he(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ue(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function $r(i,t){let e=Yc[t];e===void 0&&(e=new Int32Array(t),Yc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Qd(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Kd(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;i.uniform2fv(this.addr,t),ue(e,t)}}function jd(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(he(e,t))return;i.uniform3fv(this.addr,t),ue(e,t)}}function $d(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;i.uniform4fv(this.addr,t),ue(e,t)}}function tf(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(he(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ue(e,t)}else{if(he(e,n))return;Zc.set(n),i.uniformMatrix2fv(this.addr,!1,Zc),ue(e,n)}}function ef(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(he(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ue(e,t)}else{if(he(e,n))return;Jc.set(n),i.uniformMatrix3fv(this.addr,!1,Jc),ue(e,n)}}function nf(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(he(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ue(e,t)}else{if(he(e,n))return;qc.set(n),i.uniformMatrix4fv(this.addr,!1,qc),ue(e,n)}}function sf(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function rf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;i.uniform2iv(this.addr,t),ue(e,t)}}function af(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(he(e,t))return;i.uniform3iv(this.addr,t),ue(e,t)}}function of(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;i.uniform4iv(this.addr,t),ue(e,t)}}function cf(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function lf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(he(e,t))return;i.uniform2uiv(this.addr,t),ue(e,t)}}function hf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(he(e,t))return;i.uniform3uiv(this.addr,t),ue(e,t)}}function uf(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(he(e,t))return;i.uniform4uiv(this.addr,t),ue(e,t)}}function df(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Wc.compareFunction=Ka,r=Wc):r=cl,e.setTexture2D(t||r,s)}function ff(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||hl,s)}function pf(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||ul,s)}function mf(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||ll,s)}function gf(i){switch(i){case 5126:return Qd;case 35664:return Kd;case 35665:return jd;case 35666:return $d;case 35674:return tf;case 35675:return ef;case 35676:return nf;case 5124:case 35670:return sf;case 35667:case 35671:return rf;case 35668:case 35672:return af;case 35669:case 35673:return of;case 5125:return cf;case 36294:return lf;case 36295:return hf;case 36296:return uf;case 35678:case 36198:case 36298:case 36306:case 35682:return df;case 35679:case 36299:case 36307:return ff;case 35680:case 36300:case 36308:case 36293:return pf;case 36289:case 36303:case 36311:case 36292:return mf}}function Af(i,t){i.uniform1fv(this.addr,t)}function _f(i,t){let e=Ci(t,this.size,2);i.uniform2fv(this.addr,e)}function xf(i,t){let e=Ci(t,this.size,3);i.uniform3fv(this.addr,e)}function vf(i,t){let e=Ci(t,this.size,4);i.uniform4fv(this.addr,e)}function yf(i,t){let e=Ci(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Mf(i,t){let e=Ci(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Sf(i,t){let e=Ci(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function bf(i,t){i.uniform1iv(this.addr,t)}function Ef(i,t){i.uniform2iv(this.addr,t)}function Tf(i,t){i.uniform3iv(this.addr,t)}function wf(i,t){i.uniform4iv(this.addr,t)}function Cf(i,t){i.uniform1uiv(this.addr,t)}function Rf(i,t){i.uniform2uiv(this.addr,t)}function If(i,t){i.uniform3uiv(this.addr,t)}function Pf(i,t){i.uniform4uiv(this.addr,t)}function Lf(i,t,e){let n=this.cache,s=t.length,r=$r(e,s);he(n,r)||(i.uniform1iv(this.addr,r),ue(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||cl,r[a])}function Df(i,t,e){let n=this.cache,s=t.length,r=$r(e,s);he(n,r)||(i.uniform1iv(this.addr,r),ue(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||hl,r[a])}function Nf(i,t,e){let n=this.cache,s=t.length,r=$r(e,s);he(n,r)||(i.uniform1iv(this.addr,r),ue(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||ul,r[a])}function Uf(i,t,e){let n=this.cache,s=t.length,r=$r(e,s);he(n,r)||(i.uniform1iv(this.addr,r),ue(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||ll,r[a])}function Ff(i){switch(i){case 5126:return Af;case 35664:return _f;case 35665:return xf;case 35666:return vf;case 35674:return yf;case 35675:return Mf;case 35676:return Sf;case 5124:case 35670:return bf;case 35667:case 35671:return Ef;case 35668:case 35672:return Tf;case 35669:case 35673:return wf;case 5125:return Cf;case 36294:return Rf;case 36295:return If;case 36296:return Pf;case 35678:case 36198:case 36298:case 36306:case 35682:return Lf;case 35679:case 36299:case 36307:return Df;case 35680:case 36300:case 36308:case 36293:return Nf;case 36289:case 36303:case 36311:case 36292:return Uf}}var ho=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=gf(e.type)}},uo=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ff(e.type)}},fo=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},lo=/(\w+)(\])?(\[|\.)?/g;function Qc(i,t){i.seq.push(t),i.map[t.id]=t}function Bf(i,t,e){let n=i.name,s=n.length;for(lo.lastIndex=0;;){let r=lo.exec(n),a=lo.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Qc(e,c===void 0?new ho(o,i,t):new uo(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new fo(o),Qc(e,d)),e=d}}}var wi=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Bf(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Kc(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Of=37297,zf=0;function kf(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var jc=new Nt;function Vf(i){Gt._getMatrix(jc,Gt.workingColorSpace,i);let t=`mat3( ${jc.elements.map(e=>e.toFixed(4))} )`;switch(Gt.getTransfer(i)){case Bi:return[t,"LinearTransferOETF"];case Jt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function $c(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+kf(i.getShaderSource(t),o)}else return r}function Hf(i,t){let e=Vf(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Gf(i,t){let e;switch(t){case gc:e="Linear";break;case Ac:e="Reinhard";break;case _c:e="Cineon";break;case hr:e="ACESFilmic";break;case vc:e="AgX";break;case yc:e="Neutral";break;case xc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Qr=new O;function Wf(){Gt.getLuminanceCoefficients(Qr);let i=Qr.x.toFixed(4),t=Qr.y.toFixed(4),e=Qr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Xf(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hs).join(`
`)}function Yf(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function qf(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function hs(i){return i!==""}function tl(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function el(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Jf=/^[ \t]*#include +<([\w\d./]+)>/gm;function po(i){return i.replace(Jf,Qf)}var Zf=new Map;function Qf(i,t){let e=Bt[t];if(e===void 0){let n=Zf.get(t);if(n!==void 0)e=Bt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return po(e)}var Kf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nl(i){return i.replace(Kf,jf)}function jf(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function il(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function $f(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Fa?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===nr?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===je&&(t="SHADOWMAP_TYPE_VSM"),t}function tp(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Xn:case Yn:t="ENVMAP_TYPE_CUBE";break;case is:t="ENVMAP_TYPE_CUBE_UV";break}return t}function ep(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Yn:t="ENVMAP_MODE_REFRACTION";break}return t}function np(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ka:t="ENVMAP_BLENDING_MULTIPLY";break;case pc:t="ENVMAP_BLENDING_MIX";break;case mc:t="ENVMAP_BLENDING_ADD";break}return t}function ip(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function sp(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=$f(e),c=tp(e),u=ep(e),d=np(e),f=ip(e),p=Xf(e),A=Yf(r),v=s.createProgram(),m,h,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,A].filter(hs).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,A].filter(hs).join(`
`),h.length>0&&(h+=`
`)):(m=[il(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,A,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hs).join(`
`),h=[il(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,A,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==mn?"#define TONE_MAPPING":"",e.toneMapping!==mn?Bt.tonemapping_pars_fragment:"",e.toneMapping!==mn?Gf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,Hf("linearToOutputTexel",e.outputColorSpace),Wf(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(hs).join(`
`)),a=po(a),a=tl(a,e),a=el(a,e),o=po(o),o=tl(o,e),o=el(o,e),a=nl(a),o=nl(o),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",e.glslVersion===ja?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ja?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);let b=w+m+a,M=w+h+o,C=Kc(s,s.VERTEX_SHADER,b),T=Kc(s,s.FRAGMENT_SHADER,M);s.attachShader(v,C),s.attachShader(v,T),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function P(R){if(i.debug.checkShaderErrors){let B=s.getProgramInfoLog(v)||"",G=s.getShaderInfoLog(C)||"",W=s.getShaderInfoLog(T)||"",Q=B.trim(),X=G.trim(),k=W.trim(),D=!0,z=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(D=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,C,T);else{let Z=$c(s,C,"vertex"),at=$c(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+Q+`
`+Z+`
`+at)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(X===""||k==="")&&(z=!1);z&&(R.diagnostics={runnable:D,programLog:Q,vertexShader:{log:X,prefix:m},fragmentShader:{log:k,prefix:h}})}s.deleteShader(C),s.deleteShader(T),U=new wi(s,v),y=qf(s,v)}let U;this.getUniforms=function(){return U===void 0&&P(this),U};let y;this.getAttributes=function(){return y===void 0&&P(this),y};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(v,Of)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=zf++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=T,this}var rp=0,mo=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new go(t),e.set(t,n)),n}},go=class{constructor(t){this.id=rp++,this.code=t,this.usedTimes=0}};function ap(i,t,e,n,s,r,a){let o=new Vi,l=new mo,c=new Set,u=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,x,R,B,G){let W=B.fog,Q=G.geometry,X=y.isMeshStandardMaterial?B.environment:null,k=(y.isMeshStandardMaterial?e:t).get(y.envMap||X),D=k&&k.mapping===is?k.image.height:null,z=A[y.type];y.precision!==null&&(p=s.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));let Z=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,at=Z!==void 0?Z.length:0,St=0;Q.morphAttributes.position!==void 0&&(St=1),Q.morphAttributes.normal!==void 0&&(St=2),Q.morphAttributes.color!==void 0&&(St=3);let Ot,Yt,It,J;if(z){let qt=en[z];Ot=qt.vertexShader,Yt=qt.fragmentShader}else Ot=y.vertexShader,Yt=y.fragmentShader,l.update(y),It=l.getVertexShaderID(y),J=l.getFragmentShaderID(y);let $=i.getRenderTarget(),ft=i.state.buffers.depth.getReversed(),Pt=G.isInstancedMesh===!0,Mt=G.isBatchedMesh===!0,Ht=!!y.map,pe=!!y.matcap,E=!!k,te=!!y.aoMap,Dt=!!y.lightMap,Ct=!!y.bumpMap,gt=!!y.normalMap,ee=!!y.displacementMap,At=!!y.emissiveMap,Ft=!!y.metalnessMap,de=!!y.roughnessMap,ae=y.anisotropy>0,S=y.clearcoat>0,g=y.dispersion>0,F=y.iridescence>0,q=y.sheen>0,j=y.transmission>0,Y=ae&&!!y.anisotropyMap,yt=S&&!!y.clearcoatMap,st=S&&!!y.clearcoatNormalMap,_t=S&&!!y.clearcoatRoughnessMap,xt=F&&!!y.iridescenceMap,nt=F&&!!y.iridescenceThicknessMap,ht=q&&!!y.sheenColorMap,wt=q&&!!y.sheenRoughnessMap,vt=!!y.specularMap,ct=!!y.specularColorMap,Ut=!!y.specularIntensityMap,I=j&&!!y.transmissionMap,it=j&&!!y.thicknessMap,rt=!!y.gradientMap,dt=!!y.alphaMap,tt=y.alphaTest>0,K=!!y.alphaHash,mt=!!y.extensions,Lt=mn;y.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Lt=i.toneMapping);let Kt={shaderID:z,shaderType:y.type,shaderName:y.name,vertexShader:Ot,fragmentShader:Yt,defines:y.defines,customVertexShaderID:It,customFragmentShaderID:J,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:Mt,batchingColor:Mt&&G._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&G.instanceColor!==null,instancingMorph:Pt&&G.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:$===null?i.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Gn,alphaToCoverage:!!y.alphaToCoverage,map:Ht,matcap:pe,envMap:E,envMapMode:E&&k.mapping,envMapCubeUVHeight:D,aoMap:te,lightMap:Dt,bumpMap:Ct,normalMap:gt,displacementMap:f&&ee,emissiveMap:At,normalMapObjectSpace:gt&&y.normalMapType===Ec,normalMapTangentSpace:gt&&y.normalMapType===Qa,metalnessMap:Ft,roughnessMap:de,anisotropy:ae,anisotropyMap:Y,clearcoat:S,clearcoatMap:yt,clearcoatNormalMap:st,clearcoatRoughnessMap:_t,dispersion:g,iridescence:F,iridescenceMap:xt,iridescenceThicknessMap:nt,sheen:q,sheenColorMap:ht,sheenRoughnessMap:wt,specularMap:vt,specularColorMap:ct,specularIntensityMap:Ut,transmission:j,transmissionMap:I,thicknessMap:it,gradientMap:rt,opaque:y.transparent===!1&&y.blending===Vn&&y.alphaToCoverage===!1,alphaMap:dt,alphaTest:tt,alphaHash:K,combine:y.combine,mapUv:Ht&&v(y.map.channel),aoMapUv:te&&v(y.aoMap.channel),lightMapUv:Dt&&v(y.lightMap.channel),bumpMapUv:Ct&&v(y.bumpMap.channel),normalMapUv:gt&&v(y.normalMap.channel),displacementMapUv:ee&&v(y.displacementMap.channel),emissiveMapUv:At&&v(y.emissiveMap.channel),metalnessMapUv:Ft&&v(y.metalnessMap.channel),roughnessMapUv:de&&v(y.roughnessMap.channel),anisotropyMapUv:Y&&v(y.anisotropyMap.channel),clearcoatMapUv:yt&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:st&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_t&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:nt&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:ht&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:wt&&v(y.sheenRoughnessMap.channel),specularMapUv:vt&&v(y.specularMap.channel),specularColorMapUv:ct&&v(y.specularColorMap.channel),specularIntensityMapUv:Ut&&v(y.specularIntensityMap.channel),transmissionMapUv:I&&v(y.transmissionMap.channel),thicknessMapUv:it&&v(y.thicknessMap.channel),alphaMapUv:dt&&v(y.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(gt||ae),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!Q.attributes.uv&&(Ht||dt),fog:!!W,useFog:y.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ft,skinning:G.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:at,morphTextureStride:St,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Lt,decodeVideoTexture:Ht&&y.map.isVideoTexture===!0&&Gt.getTransfer(y.map.colorSpace)===Jt,decodeVideoTextureEmissive:At&&y.emissiveMap.isVideoTexture===!0&&Gt.getTransfer(y.emissiveMap.colorSpace)===Jt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===$e,flipSided:y.side===Se,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:mt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(mt&&y.extensions.multiDraw===!0||Mt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Kt.vertexUv1s=c.has(1),Kt.vertexUv2s=c.has(2),Kt.vertexUv3s=c.has(3),c.clear(),Kt}function h(y){let x=[];if(y.shaderID?x.push(y.shaderID):(x.push(y.customVertexShaderID),x.push(y.customFragmentShaderID)),y.defines!==void 0)for(let R in y.defines)x.push(R),x.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(w(x,y),b(x,y),x.push(i.outputColorSpace)),x.push(y.customProgramCacheKey),x.join()}function w(y,x){y.push(x.precision),y.push(x.outputColorSpace),y.push(x.envMapMode),y.push(x.envMapCubeUVHeight),y.push(x.mapUv),y.push(x.alphaMapUv),y.push(x.lightMapUv),y.push(x.aoMapUv),y.push(x.bumpMapUv),y.push(x.normalMapUv),y.push(x.displacementMapUv),y.push(x.emissiveMapUv),y.push(x.metalnessMapUv),y.push(x.roughnessMapUv),y.push(x.anisotropyMapUv),y.push(x.clearcoatMapUv),y.push(x.clearcoatNormalMapUv),y.push(x.clearcoatRoughnessMapUv),y.push(x.iridescenceMapUv),y.push(x.iridescenceThicknessMapUv),y.push(x.sheenColorMapUv),y.push(x.sheenRoughnessMapUv),y.push(x.specularMapUv),y.push(x.specularColorMapUv),y.push(x.specularIntensityMapUv),y.push(x.transmissionMapUv),y.push(x.thicknessMapUv),y.push(x.combine),y.push(x.fogExp2),y.push(x.sizeAttenuation),y.push(x.morphTargetsCount),y.push(x.morphAttributeCount),y.push(x.numDirLights),y.push(x.numPointLights),y.push(x.numSpotLights),y.push(x.numSpotLightMaps),y.push(x.numHemiLights),y.push(x.numRectAreaLights),y.push(x.numDirLightShadows),y.push(x.numPointLightShadows),y.push(x.numSpotLightShadows),y.push(x.numSpotLightShadowsWithMaps),y.push(x.numLightProbes),y.push(x.shadowMapType),y.push(x.toneMapping),y.push(x.numClippingPlanes),y.push(x.numClipIntersection),y.push(x.depthPacking)}function b(y,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),x.gradientMap&&o.enable(22),y.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reversedDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),y.push(o.mask)}function M(y){let x=A[y.type],R;if(x){let B=en[x];R=Fc.clone(B.uniforms)}else R=y.uniforms;return R}function C(y,x){let R;for(let B=0,G=u.length;B<G;B++){let W=u[B];if(W.cacheKey===x){R=W,++R.usedTimes;break}}return R===void 0&&(R=new sp(i,x,y,r),u.push(R)),R}function T(y){if(--y.usedTimes===0){let x=u.indexOf(y);u[x]=u[u.length-1],u.pop(),y.destroy()}}function P(y){l.remove(y)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:M,acquireProgram:C,releaseProgram:T,releaseShaderCache:P,programs:u,dispose:U}}function op(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function cp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function sl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function rl(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d,f,p,A,v,m){let h=i[t];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:A,renderOrder:d.renderOrder,z:v,group:m},i[t]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=A,h.renderOrder=d.renderOrder,h.z=v,h.group=m),t++,h}function o(d,f,p,A,v,m){let h=a(d,f,p,A,v,m);p.transmission>0?n.push(h):p.transparent===!0?s.push(h):e.push(h)}function l(d,f,p,A,v,m){let h=a(d,f,p,A,v,m);p.transmission>0?n.unshift(h):p.transparent===!0?s.unshift(h):e.unshift(h)}function c(d,f){e.length>1&&e.sort(d||cp),n.length>1&&n.sort(f||sl),s.length>1&&s.sort(f||sl)}function u(){for(let d=t,f=i.length;d<f;d++){let p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function lp(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new rl,i.set(n,[a])):s>=r.length?(a=new rl,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function hp(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new O,color:new kt};break;case"SpotLight":e={position:new O,direction:new O,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new O,halfWidth:new O,halfHeight:new O};break}return i[t.id]=e,e}}}function up(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var dp=0;function fp(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function pp(i){let t=new hp,e=up(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);let s=new O,r=new oe,a=new oe;function o(c){let u=0,d=0,f=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let p=0,A=0,v=0,m=0,h=0,w=0,b=0,M=0,C=0,T=0,P=0;c.sort(fp);for(let y=0,x=c.length;y<x;y++){let R=c[y],B=R.color,G=R.intensity,W=R.distance,Q=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=B.r*G,d+=B.g*G,f+=B.b*G;else if(R.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(R.sh.coefficients[X],G);P++}else if(R.isDirectionalLight){let X=t.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let k=R.shadow,D=e.get(R);D.shadowIntensity=k.intensity,D.shadowBias=k.bias,D.shadowNormalBias=k.normalBias,D.shadowRadius=k.radius,D.shadowMapSize=k.mapSize,n.directionalShadow[p]=D,n.directionalShadowMap[p]=Q,n.directionalShadowMatrix[p]=R.shadow.matrix,w++}n.directional[p]=X,p++}else if(R.isSpotLight){let X=t.get(R);X.position.setFromMatrixPosition(R.matrixWorld),X.color.copy(B).multiplyScalar(G),X.distance=W,X.coneCos=Math.cos(R.angle),X.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),X.decay=R.decay,n.spot[v]=X;let k=R.shadow;if(R.map&&(n.spotLightMap[C]=R.map,C++,k.updateMatrices(R),R.castShadow&&T++),n.spotLightMatrix[v]=k.matrix,R.castShadow){let D=e.get(R);D.shadowIntensity=k.intensity,D.shadowBias=k.bias,D.shadowNormalBias=k.normalBias,D.shadowRadius=k.radius,D.shadowMapSize=k.mapSize,n.spotShadow[v]=D,n.spotShadowMap[v]=Q,M++}v++}else if(R.isRectAreaLight){let X=t.get(R);X.color.copy(B).multiplyScalar(G),X.halfWidth.set(R.width*.5,0,0),X.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=X,m++}else if(R.isPointLight){let X=t.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),X.distance=R.distance,X.decay=R.decay,R.castShadow){let k=R.shadow,D=e.get(R);D.shadowIntensity=k.intensity,D.shadowBias=k.bias,D.shadowNormalBias=k.normalBias,D.shadowRadius=k.radius,D.shadowMapSize=k.mapSize,D.shadowCameraNear=k.camera.near,D.shadowCameraFar=k.camera.far,n.pointShadow[A]=D,n.pointShadowMap[A]=Q,n.pointShadowMatrix[A]=R.shadow.matrix,b++}n.point[A]=X,A++}else if(R.isHemisphereLight){let X=t.get(R);X.skyColor.copy(R.color).multiplyScalar(G),X.groundColor.copy(R.groundColor).multiplyScalar(G),n.hemi[h]=X,h++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ot.LTC_FLOAT_1,n.rectAreaLTC2=ot.LTC_FLOAT_2):(n.rectAreaLTC1=ot.LTC_HALF_1,n.rectAreaLTC2=ot.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;let U=n.hash;(U.directionalLength!==p||U.pointLength!==A||U.spotLength!==v||U.rectAreaLength!==m||U.hemiLength!==h||U.numDirectionalShadows!==w||U.numPointShadows!==b||U.numSpotShadows!==M||U.numSpotMaps!==C||U.numLightProbes!==P)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=A,n.hemi.length=h,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=M+C-T,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=P,U.directionalLength=p,U.pointLength=A,U.spotLength=v,U.rectAreaLength=m,U.hemiLength=h,U.numDirectionalShadows=w,U.numPointShadows=b,U.numSpotShadows=M,U.numSpotMaps=C,U.numLightProbes=P,n.version=dp++)}function l(c,u){let d=0,f=0,p=0,A=0,v=0,m=u.matrixWorldInverse;for(let h=0,w=c.length;h<w;h++){let b=c[h];if(b.isDirectionalLight){let M=n.directional[d];M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),d++}else if(b.isSpotLight){let M=n.spot[p];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),p++}else if(b.isRectAreaLight){let M=n.rectArea[A];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),A++}else if(b.isPointLight){let M=n.point[f];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){let M=n.hemi[v];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:n}}function al(i){let t=new pp(i),e=[],n=[];function s(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function mp(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new al(i),t.set(s,[o])):r>=a.length?(o=new al(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var gp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ap=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function _p(i,t,e){let n=new Ai,s=new Wt,r=new Wt,a=new se,o=new Ws({depthPacking:bc}),l=new Xs,c={},u=e.maxTextureSize,d={[hn]:Se,[Se]:hn,[$e]:$e},f=new We({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Wt},radius:{value:4}},vertexShader:gp,fragmentShader:Ap}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let A=new Ke;A.setAttribute("position",new Pe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new le(A,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fa;let h=this.type;this.render=function(T,P,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let y=i.getRenderTarget(),x=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),B=i.state;B.setBlending(pn),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let G=h!==je&&this.type===je,W=h===je&&this.type!==je;for(let Q=0,X=T.length;Q<X;Q++){let k=T[Q],D=k.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",k,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;s.copy(D.mapSize);let z=D.getFrameExtents();if(s.multiply(z),r.copy(D.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/z.x),s.x=r.x*z.x,D.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/z.y),s.y=r.y*z.y,D.mapSize.y=r.y)),D.map===null||G===!0||W===!0){let at=this.type!==je?{minFilter:Fe,magFilter:Fe}:{};D.map!==null&&D.map.dispose(),D.map=new Qe(s.x,s.y,at),D.map.texture.name=k.name+".shadowMap",D.camera.updateProjectionMatrix()}i.setRenderTarget(D.map),i.clear();let Z=D.getViewportCount();for(let at=0;at<Z;at++){let St=D.getViewport(at);a.set(r.x*St.x,r.y*St.y,r.x*St.z,r.y*St.w),B.viewport(a),D.updateMatrices(k,at),n=D.getFrustum(),M(P,U,D.camera,k,this.type)}D.isPointLightShadow!==!0&&this.type===je&&w(D,U),D.needsUpdate=!1}h=this.type,m.needsUpdate=!1,i.setRenderTarget(y,x,R)};function w(T,P){let U=t.update(v);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Qe(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(P,null,U,f,v,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(P,null,U,p,v,null)}function b(T,P,U,y){let x=null,R=U.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)x=R;else if(x=U.isPointLight===!0?l:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let B=x.uuid,G=P.uuid,W=c[B];W===void 0&&(W={},c[B]=W);let Q=W[G];Q===void 0&&(Q=x.clone(),W[G]=Q,P.addEventListener("dispose",C)),x=Q}if(x.visible=P.visible,x.wireframe=P.wireframe,y===je?x.side=P.shadowSide!==null?P.shadowSide:P.side:x.side=P.shadowSide!==null?P.shadowSide:d[P.side],x.alphaMap=P.alphaMap,x.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,x.map=P.map,x.clipShadows=P.clipShadows,x.clippingPlanes=P.clippingPlanes,x.clipIntersection=P.clipIntersection,x.displacementMap=P.displacementMap,x.displacementScale=P.displacementScale,x.displacementBias=P.displacementBias,x.wireframeLinewidth=P.wireframeLinewidth,x.linewidth=P.linewidth,U.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let B=i.properties.get(x);B.light=U}return x}function M(T,P,U,y,x){if(T.visible===!1)return;if(T.layers.test(P.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&x===je)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,T.matrixWorld);let G=t.update(T),W=T.material;if(Array.isArray(W)){let Q=G.groups;for(let X=0,k=Q.length;X<k;X++){let D=Q[X],z=W[D.materialIndex];if(z&&z.visible){let Z=b(T,z,y,x);T.onBeforeShadow(i,T,P,U,G,Z,D),i.renderBufferDirect(U,null,G,Z,T,D),T.onAfterShadow(i,T,P,U,G,Z,D)}}}else if(W.visible){let Q=b(T,W,y,x);T.onBeforeShadow(i,T,P,U,G,Q,null),i.renderBufferDirect(U,null,G,Q,T,null),T.onAfterShadow(i,T,P,U,G,Q,null)}}let B=T.children;for(let G=0,W=B.length;G<W;G++)M(B[G],P,U,y,x)}function C(T){T.target.removeEventListener("dispose",C);for(let U in c){let y=c[U],x=T.target.uuid;x in y&&(y[x].dispose(),delete y[x])}}}var xp={[ir]:sr,[rr]:cr,[ar]:lr,[Hn]:or,[sr]:ir,[cr]:rr,[lr]:ar,[or]:Hn};function vp(i,t){function e(){let I=!1,it=new se,rt=null,dt=new se(0,0,0,0);return{setMask:function(tt){rt!==tt&&!I&&(i.colorMask(tt,tt,tt,tt),rt=tt)},setLocked:function(tt){I=tt},setClear:function(tt,K,mt,Lt,Kt){Kt===!0&&(tt*=Lt,K*=Lt,mt*=Lt),it.set(tt,K,mt,Lt),dt.equals(it)===!1&&(i.clearColor(tt,K,mt,Lt),dt.copy(it))},reset:function(){I=!1,rt=null,dt.set(-1,0,0,0)}}}function n(){let I=!1,it=!1,rt=null,dt=null,tt=null;return{setReversed:function(K){if(it!==K){let mt=t.get("EXT_clip_control");K?mt.clipControlEXT(mt.LOWER_LEFT_EXT,mt.ZERO_TO_ONE_EXT):mt.clipControlEXT(mt.LOWER_LEFT_EXT,mt.NEGATIVE_ONE_TO_ONE_EXT),it=K;let Lt=tt;tt=null,this.setClear(Lt)}},getReversed:function(){return it},setTest:function(K){K?$(i.DEPTH_TEST):ft(i.DEPTH_TEST)},setMask:function(K){rt!==K&&!I&&(i.depthMask(K),rt=K)},setFunc:function(K){if(it&&(K=xp[K]),dt!==K){switch(K){case ir:i.depthFunc(i.NEVER);break;case sr:i.depthFunc(i.ALWAYS);break;case rr:i.depthFunc(i.LESS);break;case Hn:i.depthFunc(i.LEQUAL);break;case ar:i.depthFunc(i.EQUAL);break;case or:i.depthFunc(i.GEQUAL);break;case cr:i.depthFunc(i.GREATER);break;case lr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}dt=K}},setLocked:function(K){I=K},setClear:function(K){tt!==K&&(it&&(K=1-K),i.clearDepth(K),tt=K)},reset:function(){I=!1,rt=null,dt=null,tt=null,it=!1}}}function s(){let I=!1,it=null,rt=null,dt=null,tt=null,K=null,mt=null,Lt=null,Kt=null;return{setTest:function(qt){I||(qt?$(i.STENCIL_TEST):ft(i.STENCIL_TEST))},setMask:function(qt){it!==qt&&!I&&(i.stencilMask(qt),it=qt)},setFunc:function(qt,nn,qe){(rt!==qt||dt!==nn||tt!==qe)&&(i.stencilFunc(qt,nn,qe),rt=qt,dt=nn,tt=qe)},setOp:function(qt,nn,qe){(K!==qt||mt!==nn||Lt!==qe)&&(i.stencilOp(qt,nn,qe),K=qt,mt=nn,Lt=qe)},setLocked:function(qt){I=qt},setClear:function(qt){Kt!==qt&&(i.clearStencil(qt),Kt=qt)},reset:function(){I=!1,it=null,rt=null,dt=null,tt=null,K=null,mt=null,Lt=null,Kt=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,u={},d={},f=new WeakMap,p=[],A=null,v=!1,m=null,h=null,w=null,b=null,M=null,C=null,T=null,P=new kt(0,0,0),U=0,y=!1,x=null,R=null,B=null,G=null,W=null,Q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,k=0,D=i.getParameter(i.VERSION);D.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(D)[1]),X=k>=1):D.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),X=k>=2);let z=null,Z={},at=i.getParameter(i.SCISSOR_BOX),St=i.getParameter(i.VIEWPORT),Ot=new se().fromArray(at),Yt=new se().fromArray(St);function It(I,it,rt,dt){let tt=new Uint8Array(4),K=i.createTexture();i.bindTexture(I,K),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let mt=0;mt<rt;mt++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(it,0,i.RGBA,1,1,dt,0,i.RGBA,i.UNSIGNED_BYTE,tt):i.texImage2D(it+mt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,tt);return K}let J={};J[i.TEXTURE_2D]=It(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=It(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=It(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=It(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),$(i.DEPTH_TEST),a.setFunc(Hn),Ct(!1),gt(Ua),$(i.CULL_FACE),te(pn);function $(I){u[I]!==!0&&(i.enable(I),u[I]=!0)}function ft(I){u[I]!==!1&&(i.disable(I),u[I]=!1)}function Pt(I,it){return d[I]!==it?(i.bindFramebuffer(I,it),d[I]=it,I===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=it),I===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=it),!0):!1}function Mt(I,it){let rt=p,dt=!1;if(I){rt=f.get(it),rt===void 0&&(rt=[],f.set(it,rt));let tt=I.textures;if(rt.length!==tt.length||rt[0]!==i.COLOR_ATTACHMENT0){for(let K=0,mt=tt.length;K<mt;K++)rt[K]=i.COLOR_ATTACHMENT0+K;rt.length=tt.length,dt=!0}}else rt[0]!==i.BACK&&(rt[0]=i.BACK,dt=!0);dt&&i.drawBuffers(rt)}function Ht(I){return A!==I?(i.useProgram(I),A=I,!0):!1}let pe={[En]:i.FUNC_ADD,[Ko]:i.FUNC_SUBTRACT,[jo]:i.FUNC_REVERSE_SUBTRACT};pe[$o]=i.MIN,pe[tc]=i.MAX;let E={[ec]:i.ZERO,[nc]:i.ONE,[ic]:i.SRC_COLOR,[Ls]:i.SRC_ALPHA,[lc]:i.SRC_ALPHA_SATURATE,[oc]:i.DST_COLOR,[rc]:i.DST_ALPHA,[sc]:i.ONE_MINUS_SRC_COLOR,[Ds]:i.ONE_MINUS_SRC_ALPHA,[cc]:i.ONE_MINUS_DST_COLOR,[ac]:i.ONE_MINUS_DST_ALPHA,[hc]:i.CONSTANT_COLOR,[uc]:i.ONE_MINUS_CONSTANT_COLOR,[dc]:i.CONSTANT_ALPHA,[fc]:i.ONE_MINUS_CONSTANT_ALPHA};function te(I,it,rt,dt,tt,K,mt,Lt,Kt,qt){if(I===pn){v===!0&&(ft(i.BLEND),v=!1);return}if(v===!1&&($(i.BLEND),v=!0),I!==Qo){if(I!==m||qt!==y){if((h!==En||M!==En)&&(i.blendEquation(i.FUNC_ADD),h=En,M=En),qt)switch(I){case Vn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ba:i.blendFunc(i.ONE,i.ONE);break;case Oa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case za:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Vn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ba:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Oa:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case za:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}w=null,b=null,C=null,T=null,P.set(0,0,0),U=0,m=I,y=qt}return}tt=tt||it,K=K||rt,mt=mt||dt,(it!==h||tt!==M)&&(i.blendEquationSeparate(pe[it],pe[tt]),h=it,M=tt),(rt!==w||dt!==b||K!==C||mt!==T)&&(i.blendFuncSeparate(E[rt],E[dt],E[K],E[mt]),w=rt,b=dt,C=K,T=mt),(Lt.equals(P)===!1||Kt!==U)&&(i.blendColor(Lt.r,Lt.g,Lt.b,Kt),P.copy(Lt),U=Kt),m=I,y=!1}function Dt(I,it){I.side===$e?ft(i.CULL_FACE):$(i.CULL_FACE);let rt=I.side===Se;it&&(rt=!rt),Ct(rt),I.blending===Vn&&I.transparent===!1?te(pn):te(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);let dt=I.stencilWrite;o.setTest(dt),dt&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),At(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?$(i.SAMPLE_ALPHA_TO_COVERAGE):ft(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ct(I){x!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),x=I)}function gt(I){I!==Jo?($(i.CULL_FACE),I!==R&&(I===Ua?i.cullFace(i.BACK):I===Zo?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ft(i.CULL_FACE),R=I}function ee(I){I!==B&&(X&&i.lineWidth(I),B=I)}function At(I,it,rt){I?($(i.POLYGON_OFFSET_FILL),(G!==it||W!==rt)&&(i.polygonOffset(it,rt),G=it,W=rt)):ft(i.POLYGON_OFFSET_FILL)}function Ft(I){I?$(i.SCISSOR_TEST):ft(i.SCISSOR_TEST)}function de(I){I===void 0&&(I=i.TEXTURE0+Q-1),z!==I&&(i.activeTexture(I),z=I)}function ae(I,it,rt){rt===void 0&&(z===null?rt=i.TEXTURE0+Q-1:rt=z);let dt=Z[rt];dt===void 0&&(dt={type:void 0,texture:void 0},Z[rt]=dt),(dt.type!==I||dt.texture!==it)&&(z!==rt&&(i.activeTexture(rt),z=rt),i.bindTexture(I,it||J[I]),dt.type=I,dt.texture=it)}function S(){let I=Z[z];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function g(){try{i.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function q(){try{i.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{i.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function yt(){try{i.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function st(){try{i.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _t(){try{i.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xt(){try{i.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function nt(){try{i.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ht(I){Ot.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),Ot.copy(I))}function wt(I){Yt.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),Yt.copy(I))}function vt(I,it){let rt=c.get(it);rt===void 0&&(rt=new WeakMap,c.set(it,rt));let dt=rt.get(I);dt===void 0&&(dt=i.getUniformBlockIndex(it,I.name),rt.set(I,dt))}function ct(I,it){let dt=c.get(it).get(I);l.get(it)!==dt&&(i.uniformBlockBinding(it,dt,I.__bindingPointIndex),l.set(it,dt))}function Ut(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},z=null,Z={},d={},f=new WeakMap,p=[],A=null,v=!1,m=null,h=null,w=null,b=null,M=null,C=null,T=null,P=new kt(0,0,0),U=0,y=!1,x=null,R=null,B=null,G=null,W=null,Ot.set(0,0,i.canvas.width,i.canvas.height),Yt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:$,disable:ft,bindFramebuffer:Pt,drawBuffers:Mt,useProgram:Ht,setBlending:te,setMaterial:Dt,setFlipSided:Ct,setCullFace:gt,setLineWidth:ee,setPolygonOffset:At,setScissorTest:Ft,activeTexture:de,bindTexture:ae,unbindTexture:S,compressedTexImage2D:g,compressedTexImage3D:F,texImage2D:xt,texImage3D:nt,updateUBOMapping:vt,uniformBlockBinding:ct,texStorage2D:st,texStorage3D:_t,texSubImage2D:q,texSubImage3D:j,compressedTexSubImage2D:Y,compressedTexSubImage3D:yt,scissor:ht,viewport:wt,reset:Ut}}function yp(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Wt,u=new WeakMap,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(S,g){return p?new OffscreenCanvas(S,g):zi("canvas")}function v(S,g,F){let q=1,j=ae(S);if((j.width>F||j.height>F)&&(q=F/Math.max(j.width,j.height)),q<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){let Y=Math.floor(q*j.width),yt=Math.floor(q*j.height);d===void 0&&(d=A(Y,yt));let st=g?A(Y,yt):d;return st.width=Y,st.height=yt,st.getContext("2d").drawImage(S,0,0,Y,yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+Y+"x"+yt+")."),st}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),S;return S}function m(S){return S.generateMipmaps}function h(S){i.generateMipmap(S)}function w(S){return S.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?i.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(S,g,F,q,j=!1){if(S!==null){if(i[S]!==void 0)return i[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let Y=g;if(g===i.RED&&(F===i.FLOAT&&(Y=i.R32F),F===i.HALF_FLOAT&&(Y=i.R16F),F===i.UNSIGNED_BYTE&&(Y=i.R8)),g===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.R8UI),F===i.UNSIGNED_SHORT&&(Y=i.R16UI),F===i.UNSIGNED_INT&&(Y=i.R32UI),F===i.BYTE&&(Y=i.R8I),F===i.SHORT&&(Y=i.R16I),F===i.INT&&(Y=i.R32I)),g===i.RG&&(F===i.FLOAT&&(Y=i.RG32F),F===i.HALF_FLOAT&&(Y=i.RG16F),F===i.UNSIGNED_BYTE&&(Y=i.RG8)),g===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.RG8UI),F===i.UNSIGNED_SHORT&&(Y=i.RG16UI),F===i.UNSIGNED_INT&&(Y=i.RG32UI),F===i.BYTE&&(Y=i.RG8I),F===i.SHORT&&(Y=i.RG16I),F===i.INT&&(Y=i.RG32I)),g===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),F===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),F===i.UNSIGNED_INT&&(Y=i.RGB32UI),F===i.BYTE&&(Y=i.RGB8I),F===i.SHORT&&(Y=i.RGB16I),F===i.INT&&(Y=i.RGB32I)),g===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),F===i.UNSIGNED_INT&&(Y=i.RGBA32UI),F===i.BYTE&&(Y=i.RGBA8I),F===i.SHORT&&(Y=i.RGBA16I),F===i.INT&&(Y=i.RGBA32I)),g===i.RGB&&(F===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),g===i.RGBA){let yt=j?Bi:Gt.getTransfer(q);F===i.FLOAT&&(Y=i.RGBA32F),F===i.HALF_FLOAT&&(Y=i.RGBA16F),F===i.UNSIGNED_BYTE&&(Y=yt===Jt?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function M(S,g){let F;return S?g===null||g===Ln||g===Si?F=i.DEPTH24_STENCIL8:g===tn?F=i.DEPTH32F_STENCIL8:g===yi&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Ln||g===Si?F=i.DEPTH_COMPONENT24:g===tn?F=i.DEPTH_COMPONENT32F:g===yi&&(F=i.DEPTH_COMPONENT16),F}function C(S,g){return m(S)===!0||S.isFramebufferTexture&&S.minFilter!==Fe&&S.minFilter!==He?Math.log2(Math.max(g.width,g.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?g.mipmaps.length:1}function T(S){let g=S.target;g.removeEventListener("dispose",T),U(g),g.isVideoTexture&&u.delete(g)}function P(S){let g=S.target;g.removeEventListener("dispose",P),x(g)}function U(S){let g=n.get(S);if(g.__webglInit===void 0)return;let F=S.source,q=f.get(F);if(q){let j=q[g.__cacheKey];j.usedTimes--,j.usedTimes===0&&y(S),Object.keys(q).length===0&&f.delete(F)}n.remove(S)}function y(S){let g=n.get(S);i.deleteTexture(g.__webglTexture);let F=S.source,q=f.get(F);delete q[g.__cacheKey],a.memory.textures--}function x(S){let g=n.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),n.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(g.__webglFramebuffer[q]))for(let j=0;j<g.__webglFramebuffer[q].length;j++)i.deleteFramebuffer(g.__webglFramebuffer[q][j]);else i.deleteFramebuffer(g.__webglFramebuffer[q]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[q])}else{if(Array.isArray(g.__webglFramebuffer))for(let q=0;q<g.__webglFramebuffer.length;q++)i.deleteFramebuffer(g.__webglFramebuffer[q]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let q=0;q<g.__webglColorRenderbuffer.length;q++)g.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[q]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let F=S.textures;for(let q=0,j=F.length;q<j;q++){let Y=n.get(F[q]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(F[q])}n.remove(S)}let R=0;function B(){R=0}function G(){let S=R;return S>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),R+=1,S}function W(S){let g=[];return g.push(S.wrapS),g.push(S.wrapT),g.push(S.wrapR||0),g.push(S.magFilter),g.push(S.minFilter),g.push(S.anisotropy),g.push(S.internalFormat),g.push(S.format),g.push(S.type),g.push(S.generateMipmaps),g.push(S.premultiplyAlpha),g.push(S.flipY),g.push(S.unpackAlignment),g.push(S.colorSpace),g.join()}function Q(S,g){let F=n.get(S);if(S.isVideoTexture&&Ft(S),S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&F.__version!==S.version){let q=S.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(F,S,g);return}}else S.isExternalTexture&&(F.__webglTexture=S.sourceTexture?S.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+g)}function X(S,g){let F=n.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&F.__version!==S.version){J(F,S,g);return}e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+g)}function k(S,g){let F=n.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&F.__version!==S.version){J(F,S,g);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+g)}function D(S,g){let F=n.get(S);if(S.version>0&&F.__version!==S.version){$(F,S,g);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+g)}let z={[Ns]:i.REPEAT,[bn]:i.CLAMP_TO_EDGE,[Us]:i.MIRRORED_REPEAT},Z={[Fe]:i.NEAREST,[Mc]:i.NEAREST_MIPMAP_NEAREST,[ss]:i.NEAREST_MIPMAP_LINEAR,[He]:i.LINEAR,[fr]:i.LINEAR_MIPMAP_NEAREST,[Pn]:i.LINEAR_MIPMAP_LINEAR},at={[Tc]:i.NEVER,[Lc]:i.ALWAYS,[wc]:i.LESS,[Ka]:i.LEQUAL,[Cc]:i.EQUAL,[Pc]:i.GEQUAL,[Rc]:i.GREATER,[Ic]:i.NOTEQUAL};function St(S,g){if(g.type===tn&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===He||g.magFilter===fr||g.magFilter===ss||g.magFilter===Pn||g.minFilter===He||g.minFilter===fr||g.minFilter===ss||g.minFilter===Pn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(S,i.TEXTURE_WRAP_S,z[g.wrapS]),i.texParameteri(S,i.TEXTURE_WRAP_T,z[g.wrapT]),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,z[g.wrapR]),i.texParameteri(S,i.TEXTURE_MAG_FILTER,Z[g.magFilter]),i.texParameteri(S,i.TEXTURE_MIN_FILTER,Z[g.minFilter]),g.compareFunction&&(i.texParameteri(S,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(S,i.TEXTURE_COMPARE_FUNC,at[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Fe||g.minFilter!==ss&&g.minFilter!==Pn||g.type===tn&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){let F=t.get("EXT_texture_filter_anisotropic");i.texParameterf(S,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function Ot(S,g){let F=!1;S.__webglInit===void 0&&(S.__webglInit=!0,g.addEventListener("dispose",T));let q=g.source,j=f.get(q);j===void 0&&(j={},f.set(q,j));let Y=W(g);if(Y!==S.__cacheKey){j[Y]===void 0&&(j[Y]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),j[Y].usedTimes++;let yt=j[S.__cacheKey];yt!==void 0&&(j[S.__cacheKey].usedTimes--,yt.usedTimes===0&&y(g)),S.__cacheKey=Y,S.__webglTexture=j[Y].texture}return F}function Yt(S,g,F){return Math.floor(Math.floor(S/F)/g)}function It(S,g,F,q){let Y=S.updateRanges;if(Y.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,F,q,g.data);else{Y.sort((nt,ht)=>nt.start-ht.start);let yt=0;for(let nt=1;nt<Y.length;nt++){let ht=Y[yt],wt=Y[nt],vt=ht.start+ht.count,ct=Yt(wt.start,g.width,4),Ut=Yt(ht.start,g.width,4);wt.start<=vt+1&&ct===Ut&&Yt(wt.start+wt.count-1,g.width,4)===ct?ht.count=Math.max(ht.count,wt.start+wt.count-ht.start):(++yt,Y[yt]=wt)}Y.length=yt+1;let st=i.getParameter(i.UNPACK_ROW_LENGTH),_t=i.getParameter(i.UNPACK_SKIP_PIXELS),xt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let nt=0,ht=Y.length;nt<ht;nt++){let wt=Y[nt],vt=Math.floor(wt.start/4),ct=Math.ceil(wt.count/4),Ut=vt%g.width,I=Math.floor(vt/g.width),it=ct,rt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ut),i.pixelStorei(i.UNPACK_SKIP_ROWS,I),e.texSubImage2D(i.TEXTURE_2D,0,Ut,I,it,rt,F,q,g.data)}S.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,st),i.pixelStorei(i.UNPACK_SKIP_PIXELS,_t),i.pixelStorei(i.UNPACK_SKIP_ROWS,xt)}}function J(S,g,F){let q=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(q=i.TEXTURE_3D);let j=Ot(S,g),Y=g.source;e.bindTexture(q,S.__webglTexture,i.TEXTURE0+F);let yt=n.get(Y);if(Y.version!==yt.__version||j===!0){e.activeTexture(i.TEXTURE0+F);let st=Gt.getPrimaries(Gt.workingColorSpace),_t=g.colorSpace===gn?null:Gt.getPrimaries(g.colorSpace),xt=g.colorSpace===gn||st===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);let nt=v(g.image,!1,s.maxTextureSize);nt=de(g,nt);let ht=r.convert(g.format,g.colorSpace),wt=r.convert(g.type),vt=b(g.internalFormat,ht,wt,g.colorSpace,g.isVideoTexture);St(q,g);let ct,Ut=g.mipmaps,I=g.isVideoTexture!==!0,it=yt.__version===void 0||j===!0,rt=Y.dataReady,dt=C(g,nt);if(g.isDepthTexture)vt=M(g.format===bi,g.type),it&&(I?e.texStorage2D(i.TEXTURE_2D,1,vt,nt.width,nt.height):e.texImage2D(i.TEXTURE_2D,0,vt,nt.width,nt.height,0,ht,wt,null));else if(g.isDataTexture)if(Ut.length>0){I&&it&&e.texStorage2D(i.TEXTURE_2D,dt,vt,Ut[0].width,Ut[0].height);for(let tt=0,K=Ut.length;tt<K;tt++)ct=Ut[tt],I?rt&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,ct.width,ct.height,ht,wt,ct.data):e.texImage2D(i.TEXTURE_2D,tt,vt,ct.width,ct.height,0,ht,wt,ct.data);g.generateMipmaps=!1}else I?(it&&e.texStorage2D(i.TEXTURE_2D,dt,vt,nt.width,nt.height),rt&&It(g,nt,ht,wt)):e.texImage2D(i.TEXTURE_2D,0,vt,nt.width,nt.height,0,ht,wt,nt.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){I&&it&&e.texStorage3D(i.TEXTURE_2D_ARRAY,dt,vt,Ut[0].width,Ut[0].height,nt.depth);for(let tt=0,K=Ut.length;tt<K;tt++)if(ct=Ut[tt],g.format!==Be)if(ht!==null)if(I){if(rt)if(g.layerUpdates.size>0){let mt=io(ct.width,ct.height,g.format,g.type);for(let Lt of g.layerUpdates){let Kt=ct.data.subarray(Lt*mt/ct.data.BYTES_PER_ELEMENT,(Lt+1)*mt/ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,Lt,ct.width,ct.height,1,ht,Kt)}g.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,ct.width,ct.height,nt.depth,ht,ct.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,tt,vt,ct.width,ct.height,nt.depth,0,ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?rt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,ct.width,ct.height,nt.depth,ht,wt,ct.data):e.texImage3D(i.TEXTURE_2D_ARRAY,tt,vt,ct.width,ct.height,nt.depth,0,ht,wt,ct.data)}else{I&&it&&e.texStorage2D(i.TEXTURE_2D,dt,vt,Ut[0].width,Ut[0].height);for(let tt=0,K=Ut.length;tt<K;tt++)ct=Ut[tt],g.format!==Be?ht!==null?I?rt&&e.compressedTexSubImage2D(i.TEXTURE_2D,tt,0,0,ct.width,ct.height,ht,ct.data):e.compressedTexImage2D(i.TEXTURE_2D,tt,vt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?rt&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,ct.width,ct.height,ht,wt,ct.data):e.texImage2D(i.TEXTURE_2D,tt,vt,ct.width,ct.height,0,ht,wt,ct.data)}else if(g.isDataArrayTexture)if(I){if(it&&e.texStorage3D(i.TEXTURE_2D_ARRAY,dt,vt,nt.width,nt.height,nt.depth),rt)if(g.layerUpdates.size>0){let tt=io(nt.width,nt.height,g.format,g.type);for(let K of g.layerUpdates){let mt=nt.data.subarray(K*tt/nt.data.BYTES_PER_ELEMENT,(K+1)*tt/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,nt.width,nt.height,1,ht,wt,mt)}g.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,ht,wt,nt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,vt,nt.width,nt.height,nt.depth,0,ht,wt,nt.data);else if(g.isData3DTexture)I?(it&&e.texStorage3D(i.TEXTURE_3D,dt,vt,nt.width,nt.height,nt.depth),rt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,ht,wt,nt.data)):e.texImage3D(i.TEXTURE_3D,0,vt,nt.width,nt.height,nt.depth,0,ht,wt,nt.data);else if(g.isFramebufferTexture){if(it)if(I)e.texStorage2D(i.TEXTURE_2D,dt,vt,nt.width,nt.height);else{let tt=nt.width,K=nt.height;for(let mt=0;mt<dt;mt++)e.texImage2D(i.TEXTURE_2D,mt,vt,tt,K,0,ht,wt,null),tt>>=1,K>>=1}}else if(Ut.length>0){if(I&&it){let tt=ae(Ut[0]);e.texStorage2D(i.TEXTURE_2D,dt,vt,tt.width,tt.height)}for(let tt=0,K=Ut.length;tt<K;tt++)ct=Ut[tt],I?rt&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,ht,wt,ct):e.texImage2D(i.TEXTURE_2D,tt,vt,ht,wt,ct);g.generateMipmaps=!1}else if(I){if(it){let tt=ae(nt);e.texStorage2D(i.TEXTURE_2D,dt,vt,tt.width,tt.height)}rt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ht,wt,nt)}else e.texImage2D(i.TEXTURE_2D,0,vt,ht,wt,nt);m(g)&&h(q),yt.__version=Y.version,g.onUpdate&&g.onUpdate(g)}S.__version=g.version}function $(S,g,F){if(g.image.length!==6)return;let q=Ot(S,g),j=g.source;e.bindTexture(i.TEXTURE_CUBE_MAP,S.__webglTexture,i.TEXTURE0+F);let Y=n.get(j);if(j.version!==Y.__version||q===!0){e.activeTexture(i.TEXTURE0+F);let yt=Gt.getPrimaries(Gt.workingColorSpace),st=g.colorSpace===gn?null:Gt.getPrimaries(g.colorSpace),_t=g.colorSpace===gn||yt===st?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);let xt=g.isCompressedTexture||g.image[0].isCompressedTexture,nt=g.image[0]&&g.image[0].isDataTexture,ht=[];for(let K=0;K<6;K++)!xt&&!nt?ht[K]=v(g.image[K],!0,s.maxCubemapSize):ht[K]=nt?g.image[K].image:g.image[K],ht[K]=de(g,ht[K]);let wt=ht[0],vt=r.convert(g.format,g.colorSpace),ct=r.convert(g.type),Ut=b(g.internalFormat,vt,ct,g.colorSpace),I=g.isVideoTexture!==!0,it=Y.__version===void 0||q===!0,rt=j.dataReady,dt=C(g,wt);St(i.TEXTURE_CUBE_MAP,g);let tt;if(xt){I&&it&&e.texStorage2D(i.TEXTURE_CUBE_MAP,dt,Ut,wt.width,wt.height);for(let K=0;K<6;K++){tt=ht[K].mipmaps;for(let mt=0;mt<tt.length;mt++){let Lt=tt[mt];g.format!==Be?vt!==null?I?rt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,mt,0,0,Lt.width,Lt.height,vt,Lt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,mt,Ut,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,mt,0,0,Lt.width,Lt.height,vt,ct,Lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,mt,Ut,Lt.width,Lt.height,0,vt,ct,Lt.data)}}}else{if(tt=g.mipmaps,I&&it){tt.length>0&&dt++;let K=ae(ht[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,dt,Ut,K.width,K.height)}for(let K=0;K<6;K++)if(nt){I?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ht[K].width,ht[K].height,vt,ct,ht[K].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ut,ht[K].width,ht[K].height,0,vt,ct,ht[K].data);for(let mt=0;mt<tt.length;mt++){let Kt=tt[mt].image[K].image;I?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,mt+1,0,0,Kt.width,Kt.height,vt,ct,Kt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,mt+1,Ut,Kt.width,Kt.height,0,vt,ct,Kt.data)}}else{I?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,vt,ct,ht[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ut,vt,ct,ht[K]);for(let mt=0;mt<tt.length;mt++){let Lt=tt[mt];I?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,mt+1,0,0,vt,ct,Lt.image[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,mt+1,Ut,vt,ct,Lt.image[K])}}}m(g)&&h(i.TEXTURE_CUBE_MAP),Y.__version=j.version,g.onUpdate&&g.onUpdate(g)}S.__version=g.version}function ft(S,g,F,q,j,Y){let yt=r.convert(F.format,F.colorSpace),st=r.convert(F.type),_t=b(F.internalFormat,yt,st,F.colorSpace),xt=n.get(g),nt=n.get(F);if(nt.__renderTarget=g,!xt.__hasExternalTextures){let ht=Math.max(1,g.width>>Y),wt=Math.max(1,g.height>>Y);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,Y,_t,ht,wt,g.depth,0,yt,st,null):e.texImage2D(j,Y,_t,ht,wt,0,yt,st,null)}e.bindFramebuffer(i.FRAMEBUFFER,S),At(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,j,nt.__webglTexture,0,ee(g)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,j,nt.__webglTexture,Y),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Pt(S,g,F){if(i.bindRenderbuffer(i.RENDERBUFFER,S),g.depthBuffer){let q=g.depthTexture,j=q&&q.isDepthTexture?q.type:null,Y=M(g.stencilBuffer,j),yt=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=ee(g);At(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,st,Y,g.width,g.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,st,Y,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,Y,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,yt,i.RENDERBUFFER,S)}else{let q=g.textures;for(let j=0;j<q.length;j++){let Y=q[j],yt=r.convert(Y.format,Y.colorSpace),st=r.convert(Y.type),_t=b(Y.internalFormat,yt,st,Y.colorSpace),xt=ee(g);F&&At(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,xt,_t,g.width,g.height):At(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xt,_t,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,_t,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Mt(S,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,S),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let q=n.get(g.depthTexture);q.__renderTarget=g,(!q.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),Q(g.depthTexture,0);let j=q.__webglTexture,Y=ee(g);if(g.depthTexture.format===di)At(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0);else if(g.depthTexture.format===bi)At(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Ht(S){let g=n.get(S),F=S.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==S.depthTexture){let q=S.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),q){let j=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,q.removeEventListener("dispose",j)};q.addEventListener("dispose",j),g.__depthDisposeCallback=j}g.__boundDepthTexture=q}if(S.depthTexture&&!g.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");let q=S.texture.mipmaps;q&&q.length>0?Mt(g.__webglFramebuffer[0],S):Mt(g.__webglFramebuffer,S)}else if(F){g.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[q]),g.__webglDepthbuffer[q]===void 0)g.__webglDepthbuffer[q]=i.createRenderbuffer(),Pt(g.__webglDepthbuffer[q],S,!1);else{let j=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=g.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,Y)}}else{let q=S.texture.mipmaps;if(q&&q.length>0?e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),Pt(g.__webglDepthbuffer,S,!1);else{let j=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,Y)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function pe(S,g,F){let q=n.get(S);g!==void 0&&ft(q.__webglFramebuffer,S,S.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&Ht(S)}function E(S){let g=S.texture,F=n.get(S),q=n.get(g);S.addEventListener("dispose",P);let j=S.textures,Y=S.isWebGLCubeRenderTarget===!0,yt=j.length>1;if(yt||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=g.version,a.memory.textures++),Y){F.__webglFramebuffer=[];for(let st=0;st<6;st++)if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer[st]=[];for(let _t=0;_t<g.mipmaps.length;_t++)F.__webglFramebuffer[st][_t]=i.createFramebuffer()}else F.__webglFramebuffer[st]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer=[];for(let st=0;st<g.mipmaps.length;st++)F.__webglFramebuffer[st]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(yt)for(let st=0,_t=j.length;st<_t;st++){let xt=n.get(j[st]);xt.__webglTexture===void 0&&(xt.__webglTexture=i.createTexture(),a.memory.textures++)}if(S.samples>0&&At(S)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let st=0;st<j.length;st++){let _t=j[st];F.__webglColorRenderbuffer[st]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[st]);let xt=r.convert(_t.format,_t.colorSpace),nt=r.convert(_t.type),ht=b(_t.internalFormat,xt,nt,_t.colorSpace,S.isXRRenderTarget===!0),wt=ee(S);i.renderbufferStorageMultisample(i.RENDERBUFFER,wt,ht,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+st,i.RENDERBUFFER,F.__webglColorRenderbuffer[st])}i.bindRenderbuffer(i.RENDERBUFFER,null),S.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Pt(F.__webglDepthRenderbuffer,S,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),St(i.TEXTURE_CUBE_MAP,g);for(let st=0;st<6;st++)if(g.mipmaps&&g.mipmaps.length>0)for(let _t=0;_t<g.mipmaps.length;_t++)ft(F.__webglFramebuffer[st][_t],S,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,_t);else ft(F.__webglFramebuffer[st],S,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);m(g)&&h(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(yt){for(let st=0,_t=j.length;st<_t;st++){let xt=j[st],nt=n.get(xt),ht=i.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(ht=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ht,nt.__webglTexture),St(ht,xt),ft(F.__webglFramebuffer,S,xt,i.COLOR_ATTACHMENT0+st,ht,0),m(xt)&&h(ht)}e.unbindTexture()}else{let st=i.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(st=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(st,q.__webglTexture),St(st,g),g.mipmaps&&g.mipmaps.length>0)for(let _t=0;_t<g.mipmaps.length;_t++)ft(F.__webglFramebuffer[_t],S,g,i.COLOR_ATTACHMENT0,st,_t);else ft(F.__webglFramebuffer,S,g,i.COLOR_ATTACHMENT0,st,0);m(g)&&h(st),e.unbindTexture()}S.depthBuffer&&Ht(S)}function te(S){let g=S.textures;for(let F=0,q=g.length;F<q;F++){let j=g[F];if(m(j)){let Y=w(S),yt=n.get(j).__webglTexture;e.bindTexture(Y,yt),h(Y),e.unbindTexture()}}}let Dt=[],Ct=[];function gt(S){if(S.samples>0){if(At(S)===!1){let g=S.textures,F=S.width,q=S.height,j=i.COLOR_BUFFER_BIT,Y=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=n.get(S),st=g.length>1;if(st)for(let xt=0;xt<g.length;xt++)e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer);let _t=S.texture.mipmaps;_t&&_t.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let xt=0;xt<g.length;xt++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),st){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,yt.__webglColorRenderbuffer[xt]);let nt=n.get(g[xt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,nt,0)}i.blitFramebuffer(0,0,F,q,0,0,F,q,j,i.NEAREST),l===!0&&(Dt.length=0,Ct.length=0,Dt.push(i.COLOR_ATTACHMENT0+xt),S.depthBuffer&&S.resolveDepthBuffer===!1&&(Dt.push(Y),Ct.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ct)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Dt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),st)for(let xt=0;xt<g.length;xt++){e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,yt.__webglColorRenderbuffer[xt]);let nt=n.get(g[xt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,nt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){let g=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function ee(S){return Math.min(s.maxSamples,S.samples)}function At(S){let g=n.get(S);return S.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Ft(S){let g=a.render.frame;u.get(S)!==g&&(u.set(S,g),S.update())}function de(S,g){let F=S.colorSpace,q=S.format,j=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||F!==Gn&&F!==gn&&(Gt.getTransfer(F)===Jt?(q!==Be||j!==Xe)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),g}function ae(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=B,this.setTexture2D=Q,this.setTexture2DArray=X,this.setTexture3D=k,this.setTextureCube=D,this.rebindTextures=pe,this.setupRenderTarget=E,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=Ht,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=At}function Mp(i,t){function e(n,s=gn){let r,a=Gt.getTransfer(s);if(n===Xe)return i.UNSIGNED_BYTE;if(n===mr)return i.UNSIGNED_SHORT_4_4_4_4;if(n===gr)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Wa)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Xa)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ha)return i.BYTE;if(n===Ga)return i.SHORT;if(n===yi)return i.UNSIGNED_SHORT;if(n===pr)return i.INT;if(n===Ln)return i.UNSIGNED_INT;if(n===tn)return i.FLOAT;if(n===Mi)return i.HALF_FLOAT;if(n===Ya)return i.ALPHA;if(n===qa)return i.RGB;if(n===Be)return i.RGBA;if(n===di)return i.DEPTH_COMPONENT;if(n===bi)return i.DEPTH_STENCIL;if(n===Ja)return i.RED;if(n===Ar)return i.RED_INTEGER;if(n===Za)return i.RG;if(n===_r)return i.RG_INTEGER;if(n===xr)return i.RGBA_INTEGER;if(n===rs||n===as||n===os||n===cs)if(a===Jt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===rs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===as)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===os)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===cs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===rs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===as)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===os)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===cs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===vr||n===yr||n===Mr||n===Sr)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===vr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===yr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Mr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Sr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===br||n===Er||n===Tr)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===br||n===Er)return a===Jt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Tr)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===wr||n===Cr||n===Rr||n===Ir||n===Pr||n===Lr||n===Dr||n===Nr||n===Ur||n===Fr||n===Br||n===Or||n===zr||n===kr)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===wr)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Cr)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Rr)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ir)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Pr)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Lr)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Dr)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Nr)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ur)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Fr)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Br)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Or)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===zr)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===kr)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Vr||n===Hr||n===Gr)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Vr)return a===Jt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Hr)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Gr)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Wr||n===Xr||n===Yr||n===qr)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Wr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Xr)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Yr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===qr)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Si?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Sp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Ao=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Qi(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new We({vertexShader:Sp,fragmentShader:bp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new le(new Cn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},_o=class extends un{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,f=null,p=null,A=null,v=typeof XRWebGLBinding<"u",m=new Ao,h={},w=e.getContextAttributes(),b=null,M=null,C=[],T=[],P=new Wt,U=null,y=new _e;y.viewport=new se;let x=new _e;x.viewport=new se;let R=[y,x],B=new er,G=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let $=C[J];return $===void 0&&($=new gi,C[J]=$),$.getTargetRaySpace()},this.getControllerGrip=function(J){let $=C[J];return $===void 0&&($=new gi,C[J]=$),$.getGripSpace()},this.getHand=function(J){let $=C[J];return $===void 0&&($=new gi,C[J]=$),$.getHandSpace()};function Q(J){let $=T.indexOf(J.inputSource);if($===-1)return;let ft=C[$];ft!==void 0&&(ft.update(J.inputSource,J.frame,c||a),ft.dispatchEvent({type:J.type,data:J.inputSource}))}function X(){s.removeEventListener("select",Q),s.removeEventListener("selectstart",Q),s.removeEventListener("selectend",Q),s.removeEventListener("squeeze",Q),s.removeEventListener("squeezestart",Q),s.removeEventListener("squeezeend",Q),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",k);for(let J=0;J<C.length;J++){let $=T[J];$!==null&&(T[J]=null,C[J].disconnect($))}G=null,W=null,m.reset();for(let J in h)delete h[J];t.setRenderTarget(b),p=null,f=null,d=null,s=null,M=null,It.stop(),n.isPresenting=!1,t.setPixelRatio(U),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return A},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(b=t.getRenderTarget(),s.addEventListener("select",Q),s.addEventListener("selectstart",Q),s.addEventListener("selectend",Q),s.addEventListener("squeeze",Q),s.addEventListener("squeezestart",Q),s.addEventListener("squeezeend",Q),s.addEventListener("end",X),s.addEventListener("inputsourceschange",k),w.xrCompatible!==!0&&await e.makeXRCompatible(),U=t.getPixelRatio(),t.getSize(P),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ft=null,Pt=null,Mt=null;w.depth&&(Mt=w.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ft=w.stencil?bi:di,Pt=w.stencil?Si:Ln);let Ht={colorFormat:e.RGBA8,depthFormat:Mt,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(Ht),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new Qe(f.textureWidth,f.textureHeight,{format:Be,type:Xe,depthTexture:new Zi(f.textureWidth,f.textureHeight,Pt,void 0,void 0,void 0,void 0,void 0,void 0,ft),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let ft={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,ft),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new Qe(p.framebufferWidth,p.framebufferHeight,{format:Be,type:Xe,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),It.setContext(s),It.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function k(J){for(let $=0;$<J.removed.length;$++){let ft=J.removed[$],Pt=T.indexOf(ft);Pt>=0&&(T[Pt]=null,C[Pt].disconnect(ft))}for(let $=0;$<J.added.length;$++){let ft=J.added[$],Pt=T.indexOf(ft);if(Pt===-1){for(let Ht=0;Ht<C.length;Ht++)if(Ht>=T.length){T.push(ft),Pt=Ht;break}else if(T[Ht]===null){T[Ht]=ft,Pt=Ht;break}if(Pt===-1)break}let Mt=C[Pt];Mt&&Mt.connect(ft)}}let D=new O,z=new O;function Z(J,$,ft){D.setFromMatrixPosition($.matrixWorld),z.setFromMatrixPosition(ft.matrixWorld);let Pt=D.distanceTo(z),Mt=$.projectionMatrix.elements,Ht=ft.projectionMatrix.elements,pe=Mt[14]/(Mt[10]-1),E=Mt[14]/(Mt[10]+1),te=(Mt[9]+1)/Mt[5],Dt=(Mt[9]-1)/Mt[5],Ct=(Mt[8]-1)/Mt[0],gt=(Ht[8]+1)/Ht[0],ee=pe*Ct,At=pe*gt,Ft=Pt/(-Ct+gt),de=Ft*-Ct;if($.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(de),J.translateZ(Ft),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Mt[10]===-1)J.projectionMatrix.copy($.projectionMatrix),J.projectionMatrixInverse.copy($.projectionMatrixInverse);else{let ae=pe+Ft,S=E+Ft,g=ee-de,F=At+(Pt-de),q=te*E/S*ae,j=Dt*E/S*ae;J.projectionMatrix.makePerspective(g,F,q,j,ae,S),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function at(J,$){$===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices($.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let $=J.near,ft=J.far;m.texture!==null&&(m.depthNear>0&&($=m.depthNear),m.depthFar>0&&(ft=m.depthFar)),B.near=x.near=y.near=$,B.far=x.far=y.far=ft,(G!==B.near||W!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),G=B.near,W=B.far),B.layers.mask=J.layers.mask|6,y.layers.mask=B.layers.mask&3,x.layers.mask=B.layers.mask&5;let Pt=J.parent,Mt=B.cameras;at(B,Pt);for(let Ht=0;Ht<Mt.length;Ht++)at(Mt[Ht],Pt);Mt.length===2?Z(B,y,x):B.projectionMatrix.copy(y.projectionMatrix),St(J,B,Pt)};function St(J,$,ft){ft===null?J.matrix.copy($.matrixWorld):(J.matrix.copy(ft.matrixWorld),J.matrix.invert(),J.matrix.multiply($.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy($.projectionMatrix),J.projectionMatrixInverse.copy($.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Bs*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(J){l=J,f!==null&&(f.fixedFoveation=J),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(J){return h[J]};let Ot=null;function Yt(J,$){if(u=$.getViewerPose(c||a),A=$,u!==null){let ft=u.views;p!==null&&(t.setRenderTargetFramebuffer(M,p.framebuffer),t.setRenderTarget(M));let Pt=!1;ft.length!==B.cameras.length&&(B.cameras.length=0,Pt=!0);for(let E=0;E<ft.length;E++){let te=ft[E],Dt=null;if(p!==null)Dt=p.getViewport(te);else{let gt=d.getViewSubImage(f,te);Dt=gt.viewport,E===0&&(t.setRenderTargetTextures(M,gt.colorTexture,gt.depthStencilTexture),t.setRenderTarget(M))}let Ct=R[E];Ct===void 0&&(Ct=new _e,Ct.layers.enable(E),Ct.viewport=new se,R[E]=Ct),Ct.matrix.fromArray(te.transform.matrix),Ct.matrix.decompose(Ct.position,Ct.quaternion,Ct.scale),Ct.projectionMatrix.fromArray(te.projectionMatrix),Ct.projectionMatrixInverse.copy(Ct.projectionMatrix).invert(),Ct.viewport.set(Dt.x,Dt.y,Dt.width,Dt.height),E===0&&(B.matrix.copy(Ct.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Pt===!0&&B.cameras.push(Ct)}let Mt=s.enabledFeatures;if(Mt&&Mt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){d=n.getBinding();let E=d.getDepthInformation(ft[0]);E&&E.isValid&&E.texture&&m.init(E,s.renderState)}if(Mt&&Mt.includes("camera-access")&&v){t.state.unbindTexture(),d=n.getBinding();for(let E=0;E<ft.length;E++){let te=ft[E].camera;if(te){let Dt=h[te];Dt||(Dt=new Qi,h[te]=Dt);let Ct=d.getCameraImage(te);Dt.sourceTexture=Ct}}}}for(let ft=0;ft<C.length;ft++){let Pt=T[ft],Mt=C[ft];Pt!==null&&Mt!==void 0&&Mt.update(Pt,$,c||a)}Ot&&Ot(J,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),A=null}let It=new ol;It.setAnimationLoop(Yt),this.setAnimationLoop=function(J){Ot=J},this.dispose=function(){}}},Zn=new Ge,Ep=new oe;function Tp(i,t){function e(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function n(m,h){h.color.getRGB(m.fogColor.value,to(i)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function s(m,h,w,b,M){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(m,h):h.isMeshToonMaterial?(r(m,h),d(m,h)):h.isMeshPhongMaterial?(r(m,h),u(m,h)):h.isMeshStandardMaterial?(r(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,M)):h.isMeshMatcapMaterial?(r(m,h),A(m,h)):h.isMeshDepthMaterial?r(m,h):h.isMeshDistanceMaterial?(r(m,h),v(m,h)):h.isMeshNormalMaterial?r(m,h):h.isLineBasicMaterial?(a(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?l(m,h,w,b):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,e(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,e(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===Se&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,e(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===Se&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,e(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,e(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);let w=t.get(h),b=w.envMap,M=w.envMapRotation;b&&(m.envMap.value=b,Zn.copy(M),Zn.x*=-1,Zn.y*=-1,Zn.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Zn.y*=-1,Zn.z*=-1),m.envMapRotation.value.setFromMatrix4(Ep.makeRotationFromEuler(Zn)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,e(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,m.aoMapTransform))}function a(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,e(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,w,b){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*w,m.scale.value=b*.5,h.map&&(m.map.value=h.map,e(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,e(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,e(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,w){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Se&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,m.specularIntensityMapTransform))}function A(m,h){h.matcap&&(m.matcap.value=h.matcap)}function v(m,h){let w=t.get(h).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function wp(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,b){let M=b.program;n.uniformBlockBinding(w,M)}function c(w,b){let M=s[w.id];M===void 0&&(A(w),M=u(w),s[w.id]=M,w.addEventListener("dispose",m));let C=b.program;n.updateUBOMapping(w,C);let T=t.render.frame;r[w.id]!==T&&(f(w),r[w.id]=T)}function u(w){let b=d();w.__bindingPointIndex=b;let M=i.createBuffer(),C=w.__size,T=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,C,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,M),M}function d(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){let b=s[w.id],M=w.uniforms,C=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let T=0,P=M.length;T<P;T++){let U=Array.isArray(M[T])?M[T]:[M[T]];for(let y=0,x=U.length;y<x;y++){let R=U[y];if(p(R,T,y,C)===!0){let B=R.__offset,G=Array.isArray(R.value)?R.value:[R.value],W=0;for(let Q=0;Q<G.length;Q++){let X=G[Q],k=v(X);typeof X=="number"||typeof X=="boolean"?(R.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,B+W,R.__data)):X.isMatrix3?(R.__data[0]=X.elements[0],R.__data[1]=X.elements[1],R.__data[2]=X.elements[2],R.__data[3]=0,R.__data[4]=X.elements[3],R.__data[5]=X.elements[4],R.__data[6]=X.elements[5],R.__data[7]=0,R.__data[8]=X.elements[6],R.__data[9]=X.elements[7],R.__data[10]=X.elements[8],R.__data[11]=0):(X.toArray(R.__data,W),W+=k.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(w,b,M,C){let T=w.value,P=b+"_"+M;if(C[P]===void 0)return typeof T=="number"||typeof T=="boolean"?C[P]=T:C[P]=T.clone(),!0;{let U=C[P];if(typeof T=="number"||typeof T=="boolean"){if(U!==T)return C[P]=T,!0}else if(U.equals(T)===!1)return U.copy(T),!0}return!1}function A(w){let b=w.uniforms,M=0,C=16;for(let P=0,U=b.length;P<U;P++){let y=Array.isArray(b[P])?b[P]:[b[P]];for(let x=0,R=y.length;x<R;x++){let B=y[x],G=Array.isArray(B.value)?B.value:[B.value];for(let W=0,Q=G.length;W<Q;W++){let X=G[W],k=v(X),D=M%C,z=D%k.boundary,Z=D+z;M+=z,Z!==0&&C-Z<k.storage&&(M+=C-Z),B.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=M,M+=k.storage}}}let T=M%C;return T>0&&(M+=C-T),w.__size=M,w.__cache={},this}function v(w){let b={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(b.boundary=4,b.storage=4):w.isVector2?(b.boundary=8,b.storage=8):w.isVector3||w.isColor?(b.boundary=16,b.storage=12):w.isVector4?(b.boundary=16,b.storage=16):w.isMatrix3?(b.boundary=48,b.storage=48):w.isMatrix4?(b.boundary=64,b.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),b}function m(w){let b=w.target;b.removeEventListener("dispose",m);let M=a.indexOf(b.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function h(){for(let w in s)i.deleteBuffer(s[w]);a=[],s={},r={}}return{bind:l,update:c,dispose:h}}var jr=class{constructor(t={}){let{canvas:e=Dc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let A=new Uint32Array(4),v=new Int32Array(4),m=null,h=null,w=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let M=this,C=!1;this._outputColorSpace=Ae;let T=0,P=0,U=null,y=-1,x=null,R=new se,B=new se,G=null,W=new kt(0),Q=0,X=e.width,k=e.height,D=1,z=null,Z=null,at=new se(0,0,X,k),St=new se(0,0,X,k),Ot=!1,Yt=new Ai,It=!1,J=!1,$=new oe,ft=new O,Pt=new se,Mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ht=!1;function pe(){return U===null?D:1}let E=n;function te(_,L){return e.getContext(_,L)}try{let _={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",rt,!1),e.addEventListener("webglcontextrestored",dt,!1),e.addEventListener("webglcontextcreationerror",tt,!1),E===null){let L="webgl2";if(E=te(L,_),E===null)throw te(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(_){throw console.error("THREE.WebGLRenderer: "+_.message),_}let Dt,Ct,gt,ee,At,Ft,de,ae,S,g,F,q,j,Y,yt,st,_t,xt,nt,ht,wt,vt,ct,Ut;function I(){Dt=new Wd(E),Dt.init(),vt=new Mp(E,Dt),Ct=new Bd(E,Dt,t,vt),gt=new vp(E,Dt),Ct.reversedDepthBuffer&&f&&gt.buffers.depth.setReversed(!0),ee=new qd(E),At=new op,Ft=new yp(E,Dt,gt,At,Ct,vt,ee),de=new zd(M),ae=new Gd(M),S=new $l(E),ct=new Ud(E,S),g=new Xd(E,S,ee,ct),F=new Zd(E,g,S,ee),nt=new Jd(E,Ct,Ft),st=new Od(At),q=new ap(M,de,ae,Dt,Ct,ct,st),j=new Tp(M,At),Y=new lp,yt=new mp(Dt),xt=new Nd(M,de,ae,gt,F,p,l),_t=new _p(M,F,Ct),Ut=new wp(E,ee,Ct,gt),ht=new Fd(E,Dt,ee),wt=new Yd(E,Dt,ee),ee.programs=q.programs,M.capabilities=Ct,M.extensions=Dt,M.properties=At,M.renderLists=Y,M.shadowMap=_t,M.state=gt,M.info=ee}I();let it=new _o(M,E);this.xr=it,this.getContext=function(){return E},this.getContextAttributes=function(){return E.getContextAttributes()},this.forceContextLoss=function(){let _=Dt.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){let _=Dt.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(_){_!==void 0&&(D=_,this.setSize(X,k,!1))},this.getSize=function(_){return _.set(X,k)},this.setSize=function(_,L,V=!0){if(it.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=_,k=L,e.width=Math.floor(_*D),e.height=Math.floor(L*D),V===!0&&(e.style.width=_+"px",e.style.height=L+"px"),this.setViewport(0,0,_,L)},this.getDrawingBufferSize=function(_){return _.set(X*D,k*D).floor()},this.setDrawingBufferSize=function(_,L,V){X=_,k=L,D=V,e.width=Math.floor(_*V),e.height=Math.floor(L*V),this.setViewport(0,0,_,L)},this.getCurrentViewport=function(_){return _.copy(R)},this.getViewport=function(_){return _.copy(at)},this.setViewport=function(_,L,V,H){_.isVector4?at.set(_.x,_.y,_.z,_.w):at.set(_,L,V,H),gt.viewport(R.copy(at).multiplyScalar(D).round())},this.getScissor=function(_){return _.copy(St)},this.setScissor=function(_,L,V,H){_.isVector4?St.set(_.x,_.y,_.z,_.w):St.set(_,L,V,H),gt.scissor(B.copy(St).multiplyScalar(D).round())},this.getScissorTest=function(){return Ot},this.setScissorTest=function(_){gt.setScissorTest(Ot=_)},this.setOpaqueSort=function(_){z=_},this.setTransparentSort=function(_){Z=_},this.getClearColor=function(_){return _.copy(xt.getClearColor())},this.setClearColor=function(){xt.setClearColor(...arguments)},this.getClearAlpha=function(){return xt.getClearAlpha()},this.setClearAlpha=function(){xt.setClearAlpha(...arguments)},this.clear=function(_=!0,L=!0,V=!0){let H=0;if(_){let N=!1;if(U!==null){let et=U.texture.format;N=et===xr||et===_r||et===Ar}if(N){let et=U.texture.type,lt=et===Xe||et===Ln||et===yi||et===Si||et===mr||et===gr,pt=xt.getClearColor(),ut=xt.getClearAlpha(),Tt=pt.r,Rt=pt.g,bt=pt.b;lt?(A[0]=Tt,A[1]=Rt,A[2]=bt,A[3]=ut,E.clearBufferuiv(E.COLOR,0,A)):(v[0]=Tt,v[1]=Rt,v[2]=bt,v[3]=ut,E.clearBufferiv(E.COLOR,0,v))}else H|=E.COLOR_BUFFER_BIT}L&&(H|=E.DEPTH_BUFFER_BIT),V&&(H|=E.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),E.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",rt,!1),e.removeEventListener("webglcontextrestored",dt,!1),e.removeEventListener("webglcontextcreationerror",tt,!1),xt.dispose(),Y.dispose(),yt.dispose(),At.dispose(),de.dispose(),ae.dispose(),F.dispose(),ct.dispose(),Ut.dispose(),q.dispose(),it.dispose(),it.removeEventListener("sessionstart",qe),it.removeEventListener("sessionend",So),Nn.stop()};function rt(_){_.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function dt(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let _=ee.autoReset,L=_t.enabled,V=_t.autoUpdate,H=_t.needsUpdate,N=_t.type;I(),ee.autoReset=_,_t.enabled=L,_t.autoUpdate=V,_t.needsUpdate=H,_t.type=N}function tt(_){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function K(_){let L=_.target;L.removeEventListener("dispose",K),mt(L)}function mt(_){Lt(_),At.remove(_)}function Lt(_){let L=At.get(_).programs;L!==void 0&&(L.forEach(function(V){q.releaseProgram(V)}),_.isShaderMaterial&&q.releaseShaderCache(_))}this.renderBufferDirect=function(_,L,V,H,N,et){L===null&&(L=Mt);let lt=N.isMesh&&N.matrixWorld.determinant()<0,pt=pl(_,L,V,H,N);gt.setMaterial(H,lt);let ut=V.index,Tt=1;if(H.wireframe===!0){if(ut=g.getWireframeAttribute(V),ut===void 0)return;Tt=2}let Rt=V.drawRange,bt=V.attributes.position,zt=Rt.start*Tt,Zt=(Rt.start+Rt.count)*Tt;et!==null&&(zt=Math.max(zt,et.start*Tt),Zt=Math.min(Zt,(et.start+et.count)*Tt)),ut!==null?(zt=Math.max(zt,0),Zt=Math.min(Zt,ut.count)):bt!=null&&(zt=Math.max(zt,0),Zt=Math.min(Zt,bt.count));let re=Zt-zt;if(re<0||re===1/0)return;ct.setup(N,H,pt,V,ut);let jt,Qt=ht;if(ut!==null&&(jt=S.get(ut),Qt=wt,Qt.setIndex(jt)),N.isMesh)H.wireframe===!0?(gt.setLineWidth(H.wireframeLinewidth*pe()),Qt.setMode(E.LINES)):Qt.setMode(E.TRIANGLES);else if(N.isLine){let Et=H.linewidth;Et===void 0&&(Et=1),gt.setLineWidth(Et*pe()),N.isLineSegments?Qt.setMode(E.LINES):N.isLineLoop?Qt.setMode(E.LINE_LOOP):Qt.setMode(E.LINE_STRIP)}else N.isPoints?Qt.setMode(E.POINTS):N.isSprite&&Qt.setMode(E.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)fi("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Qt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Dt.get("WEBGL_multi_draw"))Qt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{let Et=N._multiDrawStarts,ne=N._multiDrawCounts,Xt=N._multiDrawCount,we=ut?S.get(ut).bytesPerElement:1,jn=At.get(H).currentProgram.getUniforms();for(let Ce=0;Ce<Xt;Ce++)jn.setValue(E,"_gl_DrawID",Ce),Qt.render(Et[Ce]/we,ne[Ce])}else if(N.isInstancedMesh)Qt.renderInstances(zt,re,N.count);else if(V.isInstancedBufferGeometry){let Et=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,ne=Math.min(V.instanceCount,Et);Qt.renderInstances(zt,re,ne)}else Qt.render(zt,re)};function Kt(_,L,V){_.transparent===!0&&_.side===$e&&_.forceSinglePass===!1?(_.side=Se,_.needsUpdate=!0,ds(_,L,V),_.side=hn,_.needsUpdate=!0,ds(_,L,V),_.side=$e):ds(_,L,V)}this.compile=function(_,L,V=null){V===null&&(V=_),h=yt.get(V),h.init(L),b.push(h),V.traverseVisible(function(N){N.isLight&&N.layers.test(L.layers)&&(h.pushLight(N),N.castShadow&&h.pushShadow(N))}),_!==V&&_.traverseVisible(function(N){N.isLight&&N.layers.test(L.layers)&&(h.pushLight(N),N.castShadow&&h.pushShadow(N))}),h.setupLights();let H=new Set;return _.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;let et=N.material;if(et)if(Array.isArray(et))for(let lt=0;lt<et.length;lt++){let pt=et[lt];Kt(pt,V,N),H.add(pt)}else Kt(et,V,N),H.add(et)}),h=b.pop(),H},this.compileAsync=function(_,L,V=null){let H=this.compile(_,L,V);return new Promise(N=>{function et(){if(H.forEach(function(lt){At.get(lt).currentProgram.isReady()&&H.delete(lt)}),H.size===0){N(_);return}setTimeout(et,10)}Dt.get("KHR_parallel_shader_compile")!==null?et():setTimeout(et,10)})};let qt=null;function nn(_){qt&&qt(_)}function qe(){Nn.stop()}function So(){Nn.start()}let Nn=new ol;Nn.setAnimationLoop(nn),typeof self<"u"&&Nn.setContext(self),this.setAnimationLoop=function(_){qt=_,it.setAnimationLoop(_),_===null?Nn.stop():Nn.start()},it.addEventListener("sessionstart",qe),it.addEventListener("sessionend",So),this.render=function(_,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(it.cameraAutoUpdate===!0&&it.updateCamera(L),L=it.getCamera()),_.isScene===!0&&_.onBeforeRender(M,_,L,U),h=yt.get(_,b.length),h.init(L),b.push(h),$.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Yt.setFromProjectionMatrix($,Ve,L.reversedDepth),J=this.localClippingEnabled,It=st.init(this.clippingPlanes,J),m=Y.get(_,w.length),m.init(),w.push(m),it.enabled===!0&&it.isPresenting===!0){let et=M.xr.getDepthSensingMesh();et!==null&&ea(et,L,-1/0,M.sortObjects)}ea(_,L,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(z,Z),Ht=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,Ht&&xt.addToRenderList(m,_),this.info.render.frame++,It===!0&&st.beginShadows();let V=h.state.shadowsArray;_t.render(V,_,L),It===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();let H=m.opaque,N=m.transmissive;if(h.setupLights(),L.isArrayCamera){let et=L.cameras;if(N.length>0)for(let lt=0,pt=et.length;lt<pt;lt++){let ut=et[lt];Eo(H,N,_,ut)}Ht&&xt.render(_);for(let lt=0,pt=et.length;lt<pt;lt++){let ut=et[lt];bo(m,_,ut,ut.viewport)}}else N.length>0&&Eo(H,N,_,L),Ht&&xt.render(_),bo(m,_,L);U!==null&&P===0&&(Ft.updateMultisampleRenderTarget(U),Ft.updateRenderTargetMipmap(U)),_.isScene===!0&&_.onAfterRender(M,_,L),ct.resetDefaultState(),y=-1,x=null,b.pop(),b.length>0?(h=b[b.length-1],It===!0&&st.setGlobalState(M.clippingPlanes,h.state.camera)):h=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function ea(_,L,V,H){if(_.visible===!1)return;if(_.layers.test(L.layers)){if(_.isGroup)V=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(L);else if(_.isLight)h.pushLight(_),_.castShadow&&h.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||Yt.intersectsSprite(_)){H&&Pt.setFromMatrixPosition(_.matrixWorld).applyMatrix4($);let lt=F.update(_),pt=_.material;pt.visible&&m.push(_,lt,pt,V,Pt.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||Yt.intersectsObject(_))){let lt=F.update(_),pt=_.material;if(H&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),Pt.copy(_.boundingSphere.center)):(lt.boundingSphere===null&&lt.computeBoundingSphere(),Pt.copy(lt.boundingSphere.center)),Pt.applyMatrix4(_.matrixWorld).applyMatrix4($)),Array.isArray(pt)){let ut=lt.groups;for(let Tt=0,Rt=ut.length;Tt<Rt;Tt++){let bt=ut[Tt],zt=pt[bt.materialIndex];zt&&zt.visible&&m.push(_,lt,zt,V,Pt.z,bt)}}else pt.visible&&m.push(_,lt,pt,V,Pt.z,null)}}let et=_.children;for(let lt=0,pt=et.length;lt<pt;lt++)ea(et[lt],L,V,H)}function bo(_,L,V,H){let N=_.opaque,et=_.transmissive,lt=_.transparent;h.setupLightsView(V),It===!0&&st.setGlobalState(M.clippingPlanes,V),H&&gt.viewport(R.copy(H)),N.length>0&&us(N,L,V),et.length>0&&us(et,L,V),lt.length>0&&us(lt,L,V),gt.buffers.depth.setTest(!0),gt.buffers.depth.setMask(!0),gt.buffers.color.setMask(!0),gt.setPolygonOffset(!1)}function Eo(_,L,V,H){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[H.id]===void 0&&(h.state.transmissionRenderTarget[H.id]=new Qe(1,1,{generateMipmaps:!0,type:Dt.has("EXT_color_buffer_half_float")||Dt.has("EXT_color_buffer_float")?Mi:Xe,minFilter:Pn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Gt.workingColorSpace}));let et=h.state.transmissionRenderTarget[H.id],lt=H.viewport||R;et.setSize(lt.z*M.transmissionResolutionScale,lt.w*M.transmissionResolutionScale);let pt=M.getRenderTarget(),ut=M.getActiveCubeFace(),Tt=M.getActiveMipmapLevel();M.setRenderTarget(et),M.getClearColor(W),Q=M.getClearAlpha(),Q<1&&M.setClearColor(16777215,.5),M.clear(),Ht&&xt.render(V);let Rt=M.toneMapping;M.toneMapping=mn;let bt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),h.setupLightsView(H),It===!0&&st.setGlobalState(M.clippingPlanes,H),us(_,V,H),Ft.updateMultisampleRenderTarget(et),Ft.updateRenderTargetMipmap(et),Dt.has("WEBGL_multisampled_render_to_texture")===!1){let zt=!1;for(let Zt=0,re=L.length;Zt<re;Zt++){let jt=L[Zt],Qt=jt.object,Et=jt.geometry,ne=jt.material,Xt=jt.group;if(ne.side===$e&&Qt.layers.test(H.layers)){let we=ne.side;ne.side=Se,ne.needsUpdate=!0,To(Qt,V,H,Et,ne,Xt),ne.side=we,ne.needsUpdate=!0,zt=!0}}zt===!0&&(Ft.updateMultisampleRenderTarget(et),Ft.updateRenderTargetMipmap(et))}M.setRenderTarget(pt,ut,Tt),M.setClearColor(W,Q),bt!==void 0&&(H.viewport=bt),M.toneMapping=Rt}function us(_,L,V){let H=L.isScene===!0?L.overrideMaterial:null;for(let N=0,et=_.length;N<et;N++){let lt=_[N],pt=lt.object,ut=lt.geometry,Tt=lt.group,Rt=lt.material;Rt.allowOverride===!0&&H!==null&&(Rt=H),pt.layers.test(V.layers)&&To(pt,L,V,ut,Rt,Tt)}}function To(_,L,V,H,N,et){_.onBeforeRender(M,L,V,H,N,et),_.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),N.onBeforeRender(M,L,V,H,_,et),N.transparent===!0&&N.side===$e&&N.forceSinglePass===!1?(N.side=Se,N.needsUpdate=!0,M.renderBufferDirect(V,L,H,N,_,et),N.side=hn,N.needsUpdate=!0,M.renderBufferDirect(V,L,H,N,_,et),N.side=$e):M.renderBufferDirect(V,L,H,N,_,et),_.onAfterRender(M,L,V,H,N,et)}function ds(_,L,V){L.isScene!==!0&&(L=Mt);let H=At.get(_),N=h.state.lights,et=h.state.shadowsArray,lt=N.state.version,pt=q.getParameters(_,N.state,et,L,V),ut=q.getProgramCacheKey(pt),Tt=H.programs;H.environment=_.isMeshStandardMaterial?L.environment:null,H.fog=L.fog,H.envMap=(_.isMeshStandardMaterial?ae:de).get(_.envMap||H.environment),H.envMapRotation=H.environment!==null&&_.envMap===null?L.environmentRotation:_.envMapRotation,Tt===void 0&&(_.addEventListener("dispose",K),Tt=new Map,H.programs=Tt);let Rt=Tt.get(ut);if(Rt!==void 0){if(H.currentProgram===Rt&&H.lightsStateVersion===lt)return Co(_,pt),Rt}else pt.uniforms=q.getUniforms(_),_.onBeforeCompile(pt,M),Rt=q.acquireProgram(pt,ut),Tt.set(ut,Rt),H.uniforms=pt.uniforms;let bt=H.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(bt.clippingPlanes=st.uniform),Co(_,pt),H.needsLights=gl(_),H.lightsStateVersion=lt,H.needsLights&&(bt.ambientLightColor.value=N.state.ambient,bt.lightProbe.value=N.state.probe,bt.directionalLights.value=N.state.directional,bt.directionalLightShadows.value=N.state.directionalShadow,bt.spotLights.value=N.state.spot,bt.spotLightShadows.value=N.state.spotShadow,bt.rectAreaLights.value=N.state.rectArea,bt.ltc_1.value=N.state.rectAreaLTC1,bt.ltc_2.value=N.state.rectAreaLTC2,bt.pointLights.value=N.state.point,bt.pointLightShadows.value=N.state.pointShadow,bt.hemisphereLights.value=N.state.hemi,bt.directionalShadowMap.value=N.state.directionalShadowMap,bt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,bt.spotShadowMap.value=N.state.spotShadowMap,bt.spotLightMatrix.value=N.state.spotLightMatrix,bt.spotLightMap.value=N.state.spotLightMap,bt.pointShadowMap.value=N.state.pointShadowMap,bt.pointShadowMatrix.value=N.state.pointShadowMatrix),H.currentProgram=Rt,H.uniformsList=null,Rt}function wo(_){if(_.uniformsList===null){let L=_.currentProgram.getUniforms();_.uniformsList=wi.seqWithValue(L.seq,_.uniforms)}return _.uniformsList}function Co(_,L){let V=At.get(_);V.outputColorSpace=L.outputColorSpace,V.batching=L.batching,V.batchingColor=L.batchingColor,V.instancing=L.instancing,V.instancingColor=L.instancingColor,V.instancingMorph=L.instancingMorph,V.skinning=L.skinning,V.morphTargets=L.morphTargets,V.morphNormals=L.morphNormals,V.morphColors=L.morphColors,V.morphTargetsCount=L.morphTargetsCount,V.numClippingPlanes=L.numClippingPlanes,V.numIntersection=L.numClipIntersection,V.vertexAlphas=L.vertexAlphas,V.vertexTangents=L.vertexTangents,V.toneMapping=L.toneMapping}function pl(_,L,V,H,N){L.isScene!==!0&&(L=Mt),Ft.resetTextureUnits();let et=L.fog,lt=H.isMeshStandardMaterial?L.environment:null,pt=U===null?M.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Gn,ut=(H.isMeshStandardMaterial?ae:de).get(H.envMap||lt),Tt=H.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Rt=!!V.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),bt=!!V.morphAttributes.position,zt=!!V.morphAttributes.normal,Zt=!!V.morphAttributes.color,re=mn;H.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(re=M.toneMapping);let jt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Qt=jt!==void 0?jt.length:0,Et=At.get(H),ne=h.state.lights;if(It===!0&&(J===!0||_!==x)){let Me=_===x&&H.id===y;st.setState(H,_,Me)}let Xt=!1;H.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==ne.state.version||Et.outputColorSpace!==pt||N.isBatchedMesh&&Et.batching===!1||!N.isBatchedMesh&&Et.batching===!0||N.isBatchedMesh&&Et.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Et.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Et.instancing===!1||!N.isInstancedMesh&&Et.instancing===!0||N.isSkinnedMesh&&Et.skinning===!1||!N.isSkinnedMesh&&Et.skinning===!0||N.isInstancedMesh&&Et.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Et.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Et.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Et.instancingMorph===!1&&N.morphTexture!==null||Et.envMap!==ut||H.fog===!0&&Et.fog!==et||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==st.numPlanes||Et.numIntersection!==st.numIntersection)||Et.vertexAlphas!==Tt||Et.vertexTangents!==Rt||Et.morphTargets!==bt||Et.morphNormals!==zt||Et.morphColors!==Zt||Et.toneMapping!==re||Et.morphTargetsCount!==Qt)&&(Xt=!0):(Xt=!0,Et.__version=H.version);let we=Et.currentProgram;Xt===!0&&(we=ds(H,L,N));let jn=!1,Ce=!1,Ii=!1,ie=we.getUniforms(),De=Et.uniforms;if(gt.useProgram(we.program)&&(jn=!0,Ce=!0,Ii=!0),H.id!==y&&(y=H.id,Ce=!0),jn||x!==_){gt.buffers.depth.getReversed()&&_.reversedDepth!==!0&&(_._reversedDepth=!0,_.updateProjectionMatrix()),ie.setValue(E,"projectionMatrix",_.projectionMatrix),ie.setValue(E,"viewMatrix",_.matrixWorldInverse);let be=ie.map.cameraPosition;be!==void 0&&be.setValue(E,ft.setFromMatrixPosition(_.matrixWorld)),Ct.logarithmicDepthBuffer&&ie.setValue(E,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ie.setValue(E,"isOrthographic",_.isOrthographicCamera===!0),x!==_&&(x=_,Ce=!0,Ii=!0)}if(N.isSkinnedMesh){ie.setOptional(E,N,"bindMatrix"),ie.setOptional(E,N,"bindMatrixInverse");let Me=N.skeleton;Me&&(Me.boneTexture===null&&Me.computeBoneTexture(),ie.setValue(E,"boneTexture",Me.boneTexture,Ft))}N.isBatchedMesh&&(ie.setOptional(E,N,"batchingTexture"),ie.setValue(E,"batchingTexture",N._matricesTexture,Ft),ie.setOptional(E,N,"batchingIdTexture"),ie.setValue(E,"batchingIdTexture",N._indirectTexture,Ft),ie.setOptional(E,N,"batchingColorTexture"),N._colorsTexture!==null&&ie.setValue(E,"batchingColorTexture",N._colorsTexture,Ft));let Ne=V.morphAttributes;if((Ne.position!==void 0||Ne.normal!==void 0||Ne.color!==void 0)&&nt.update(N,V,we),(Ce||Et.receiveShadow!==N.receiveShadow)&&(Et.receiveShadow=N.receiveShadow,ie.setValue(E,"receiveShadow",N.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(De.envMap.value=ut,De.flipEnvMap.value=ut.isCubeTexture&&ut.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&L.environment!==null&&(De.envMapIntensity.value=L.environmentIntensity),Ce&&(ie.setValue(E,"toneMappingExposure",M.toneMappingExposure),Et.needsLights&&ml(De,Ii),et&&H.fog===!0&&j.refreshFogUniforms(De,et),j.refreshMaterialUniforms(De,H,D,k,h.state.transmissionRenderTarget[_.id]),wi.upload(E,wo(Et),De,Ft)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(wi.upload(E,wo(Et),De,Ft),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ie.setValue(E,"center",N.center),ie.setValue(E,"modelViewMatrix",N.modelViewMatrix),ie.setValue(E,"normalMatrix",N.normalMatrix),ie.setValue(E,"modelMatrix",N.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){let Me=H.uniformsGroups;for(let be=0,na=Me.length;be<na;be++){let Un=Me[be];Ut.update(Un,we),Ut.bind(Un,we)}}return we}function ml(_,L){_.ambientLightColor.needsUpdate=L,_.lightProbe.needsUpdate=L,_.directionalLights.needsUpdate=L,_.directionalLightShadows.needsUpdate=L,_.pointLights.needsUpdate=L,_.pointLightShadows.needsUpdate=L,_.spotLights.needsUpdate=L,_.spotLightShadows.needsUpdate=L,_.rectAreaLights.needsUpdate=L,_.hemisphereLights.needsUpdate=L}function gl(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(_,L,V){let H=At.get(_);H.__autoAllocateDepthBuffer=_.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),At.get(_.texture).__webglTexture=L,At.get(_.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:V,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(_,L){let V=At.get(_);V.__webglFramebuffer=L,V.__useDefaultFramebuffer=L===void 0};let Al=E.createFramebuffer();this.setRenderTarget=function(_,L=0,V=0){U=_,T=L,P=V;let H=!0,N=null,et=!1,lt=!1;if(_){let ut=At.get(_);if(ut.__useDefaultFramebuffer!==void 0)gt.bindFramebuffer(E.FRAMEBUFFER,null),H=!1;else if(ut.__webglFramebuffer===void 0)Ft.setupRenderTarget(_);else if(ut.__hasExternalTextures)Ft.rebindTextures(_,At.get(_.texture).__webglTexture,At.get(_.depthTexture).__webglTexture);else if(_.depthBuffer){let bt=_.depthTexture;if(ut.__boundDepthTexture!==bt){if(bt!==null&&At.has(bt)&&(_.width!==bt.image.width||_.height!==bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ft.setupDepthRenderbuffer(_)}}let Tt=_.texture;(Tt.isData3DTexture||Tt.isDataArrayTexture||Tt.isCompressedArrayTexture)&&(lt=!0);let Rt=At.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(Rt[L])?N=Rt[L][V]:N=Rt[L],et=!0):_.samples>0&&Ft.useMultisampledRTT(_)===!1?N=At.get(_).__webglMultisampledFramebuffer:Array.isArray(Rt)?N=Rt[V]:N=Rt,R.copy(_.viewport),B.copy(_.scissor),G=_.scissorTest}else R.copy(at).multiplyScalar(D).floor(),B.copy(St).multiplyScalar(D).floor(),G=Ot;if(V!==0&&(N=Al),gt.bindFramebuffer(E.FRAMEBUFFER,N)&&H&&gt.drawBuffers(_,N),gt.viewport(R),gt.scissor(B),gt.setScissorTest(G),et){let ut=At.get(_.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_CUBE_MAP_POSITIVE_X+L,ut.__webglTexture,V)}else if(lt){let ut=L;for(let Tt=0;Tt<_.textures.length;Tt++){let Rt=At.get(_.textures[Tt]);E.framebufferTextureLayer(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0+Tt,Rt.__webglTexture,V,ut)}}else if(_!==null&&V!==0){let ut=At.get(_.texture);E.framebufferTexture2D(E.FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,ut.__webglTexture,V)}y=-1},this.readRenderTargetPixels=function(_,L,V,H,N,et,lt,pt=0){if(!(_&&_.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ut=At.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&lt!==void 0&&(ut=ut[lt]),ut){gt.bindFramebuffer(E.FRAMEBUFFER,ut);try{let Tt=_.textures[pt],Rt=Tt.format,bt=Tt.type;if(!Ct.textureFormatReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ct.textureTypeReadable(bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=_.width-H&&V>=0&&V<=_.height-N&&(_.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+pt),E.readPixels(L,V,H,N,vt.convert(Rt),vt.convert(bt),et))}finally{let Tt=U!==null?At.get(U).__webglFramebuffer:null;gt.bindFramebuffer(E.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(_,L,V,H,N,et,lt,pt=0){if(!(_&&_.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ut=At.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&lt!==void 0&&(ut=ut[lt]),ut)if(L>=0&&L<=_.width-H&&V>=0&&V<=_.height-N){gt.bindFramebuffer(E.FRAMEBUFFER,ut);let Tt=_.textures[pt],Rt=Tt.format,bt=Tt.type;if(!Ct.textureFormatReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ct.textureTypeReadable(bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let zt=E.createBuffer();E.bindBuffer(E.PIXEL_PACK_BUFFER,zt),E.bufferData(E.PIXEL_PACK_BUFFER,et.byteLength,E.STREAM_READ),_.textures.length>1&&E.readBuffer(E.COLOR_ATTACHMENT0+pt),E.readPixels(L,V,H,N,vt.convert(Rt),vt.convert(bt),0);let Zt=U!==null?At.get(U).__webglFramebuffer:null;gt.bindFramebuffer(E.FRAMEBUFFER,Zt);let re=E.fenceSync(E.SYNC_GPU_COMMANDS_COMPLETE,0);return E.flush(),await Nc(E,re,4),E.bindBuffer(E.PIXEL_PACK_BUFFER,zt),E.getBufferSubData(E.PIXEL_PACK_BUFFER,0,et),E.deleteBuffer(zt),E.deleteSync(re),et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(_,L=null,V=0){let H=Math.pow(2,-V),N=Math.floor(_.image.width*H),et=Math.floor(_.image.height*H),lt=L!==null?L.x:0,pt=L!==null?L.y:0;Ft.setTexture2D(_,0),E.copyTexSubImage2D(E.TEXTURE_2D,V,0,0,lt,pt,N,et),gt.unbindTexture()};let _l=E.createFramebuffer(),xl=E.createFramebuffer();this.copyTextureToTexture=function(_,L,V=null,H=null,N=0,et=null){et===null&&(N!==0?(fi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),et=N,N=0):et=0);let lt,pt,ut,Tt,Rt,bt,zt,Zt,re,jt=_.isCompressedTexture?_.mipmaps[et]:_.image;if(V!==null)lt=V.max.x-V.min.x,pt=V.max.y-V.min.y,ut=V.isBox3?V.max.z-V.min.z:1,Tt=V.min.x,Rt=V.min.y,bt=V.isBox3?V.min.z:0;else{let Ne=Math.pow(2,-N);lt=Math.floor(jt.width*Ne),pt=Math.floor(jt.height*Ne),_.isDataArrayTexture?ut=jt.depth:_.isData3DTexture?ut=Math.floor(jt.depth*Ne):ut=1,Tt=0,Rt=0,bt=0}H!==null?(zt=H.x,Zt=H.y,re=H.z):(zt=0,Zt=0,re=0);let Qt=vt.convert(L.format),Et=vt.convert(L.type),ne;L.isData3DTexture?(Ft.setTexture3D(L,0),ne=E.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(Ft.setTexture2DArray(L,0),ne=E.TEXTURE_2D_ARRAY):(Ft.setTexture2D(L,0),ne=E.TEXTURE_2D),E.pixelStorei(E.UNPACK_FLIP_Y_WEBGL,L.flipY),E.pixelStorei(E.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),E.pixelStorei(E.UNPACK_ALIGNMENT,L.unpackAlignment);let Xt=E.getParameter(E.UNPACK_ROW_LENGTH),we=E.getParameter(E.UNPACK_IMAGE_HEIGHT),jn=E.getParameter(E.UNPACK_SKIP_PIXELS),Ce=E.getParameter(E.UNPACK_SKIP_ROWS),Ii=E.getParameter(E.UNPACK_SKIP_IMAGES);E.pixelStorei(E.UNPACK_ROW_LENGTH,jt.width),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,jt.height),E.pixelStorei(E.UNPACK_SKIP_PIXELS,Tt),E.pixelStorei(E.UNPACK_SKIP_ROWS,Rt),E.pixelStorei(E.UNPACK_SKIP_IMAGES,bt);let ie=_.isDataArrayTexture||_.isData3DTexture,De=L.isDataArrayTexture||L.isData3DTexture;if(_.isDepthTexture){let Ne=At.get(_),Me=At.get(L),be=At.get(Ne.__renderTarget),na=At.get(Me.__renderTarget);gt.bindFramebuffer(E.READ_FRAMEBUFFER,be.__webglFramebuffer),gt.bindFramebuffer(E.DRAW_FRAMEBUFFER,na.__webglFramebuffer);for(let Un=0;Un<ut;Un++)ie&&(E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,At.get(_).__webglTexture,N,bt+Un),E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,At.get(L).__webglTexture,et,re+Un)),E.blitFramebuffer(Tt,Rt,lt,pt,zt,Zt,lt,pt,E.DEPTH_BUFFER_BIT,E.NEAREST);gt.bindFramebuffer(E.READ_FRAMEBUFFER,null),gt.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else if(N!==0||_.isRenderTargetTexture||At.has(_)){let Ne=At.get(_),Me=At.get(L);gt.bindFramebuffer(E.READ_FRAMEBUFFER,_l),gt.bindFramebuffer(E.DRAW_FRAMEBUFFER,xl);for(let be=0;be<ut;be++)ie?E.framebufferTextureLayer(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,Ne.__webglTexture,N,bt+be):E.framebufferTexture2D(E.READ_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Ne.__webglTexture,N),De?E.framebufferTextureLayer(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,Me.__webglTexture,et,re+be):E.framebufferTexture2D(E.DRAW_FRAMEBUFFER,E.COLOR_ATTACHMENT0,E.TEXTURE_2D,Me.__webglTexture,et),N!==0?E.blitFramebuffer(Tt,Rt,lt,pt,zt,Zt,lt,pt,E.COLOR_BUFFER_BIT,E.NEAREST):De?E.copyTexSubImage3D(ne,et,zt,Zt,re+be,Tt,Rt,lt,pt):E.copyTexSubImage2D(ne,et,zt,Zt,Tt,Rt,lt,pt);gt.bindFramebuffer(E.READ_FRAMEBUFFER,null),gt.bindFramebuffer(E.DRAW_FRAMEBUFFER,null)}else De?_.isDataTexture||_.isData3DTexture?E.texSubImage3D(ne,et,zt,Zt,re,lt,pt,ut,Qt,Et,jt.data):L.isCompressedArrayTexture?E.compressedTexSubImage3D(ne,et,zt,Zt,re,lt,pt,ut,Qt,jt.data):E.texSubImage3D(ne,et,zt,Zt,re,lt,pt,ut,Qt,Et,jt):_.isDataTexture?E.texSubImage2D(E.TEXTURE_2D,et,zt,Zt,lt,pt,Qt,Et,jt.data):_.isCompressedTexture?E.compressedTexSubImage2D(E.TEXTURE_2D,et,zt,Zt,jt.width,jt.height,Qt,jt.data):E.texSubImage2D(E.TEXTURE_2D,et,zt,Zt,lt,pt,Qt,Et,jt);E.pixelStorei(E.UNPACK_ROW_LENGTH,Xt),E.pixelStorei(E.UNPACK_IMAGE_HEIGHT,we),E.pixelStorei(E.UNPACK_SKIP_PIXELS,jn),E.pixelStorei(E.UNPACK_SKIP_ROWS,Ce),E.pixelStorei(E.UNPACK_SKIP_IMAGES,Ii),et===0&&L.generateMipmaps&&E.generateMipmap(ne),gt.unbindTexture()},this.initRenderTarget=function(_){At.get(_).__webglFramebuffer===void 0&&Ft.setupRenderTarget(_)},this.initTexture=function(_){_.isCubeTexture?Ft.setTextureCube(_,0):_.isData3DTexture?Ft.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?Ft.setTexture2DArray(_,0):Ft.setTexture2D(_,0),gt.unbindTexture()},this.resetState=function(){T=0,P=0,U=null,gt.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ve}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Gt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Gt._getUnpackColorSpace()}};var dl="data:image/png;base64,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SMXBBVP/1/pXggPW+ux9znaB1K+n33weua5tc3dxQgAkABIA/x7/7DhoX4xwLCEAEgAJgFENgHauU71quPND79Na9OdVfz2n0/sSAHMtANoX7H268TlcWJ2aovMey+5rKhAACYAEQCAj/OM10R6HcHJCACQAEgATYyc/NkL4mbtFv1/GZyoBkABIAIxmALQReicf5+brC+sxbN6zyWP/ek4WqwiABEC4CDjnUY7pIAASAAmAQNrZbdF9e3ByQgAkABIAE1ezumjXjqIzJrEICAGQAEgAjF4A/HNRgmtFjzk8vFGA9t89/EA3XYw9p/uuJQASALFF691F503huA4CIAGQAAik3ftz4zt526WRaKf2uePk40U/mEcAJAASAGOpWtnNEfTrGj5XCYAEQAJgtALg03eJvj5FtPIO4T1OxfKiz95DAMzVAPjDctHR5+TWOfK+bUSrVPL7+7VsFrzXZ3JsBwGQAEgABNJuwdOi7Vv5ve477CW67EX2GQGQAEgA3PatdtdfkN0L5xAACYAEwMwKgDZf6b1Xu8c69ohw98PRh4j+uJwAmIsBMFdNv1+0sefCIN06u7uP2G8gABIACYBAmi2c6r+yV8d2osums88IgARAAuC2DR+YnBBDAAQBkABYXCXz3cgse6y1s0UrVQzvscqVFZ31oOiDNxIACYC549WH3R1CPn/HwzuJrnuFfQYCIAGQAAik3eJnRevX9nv9t9k9u2+NJQASAAmAiStfTvS680U3r+M9RgAkABIAoxMAzYjB4e6LNsFzmf80AZAAmFuev1e0RlW/v+URB4p+9Ab7DARAAiABEEi72Q+KNqob+/WfV0K092EM5ScAEgAJgNtWt6boXFb+IwASAAmAEQuA62a7lUnD3B+n9SUAEgBzy2/rRCdd7xcB7T15ziDuFAABkABIAAQicQC3kGET+vscwPsFF1zfLGG/EQAJgATAv+vcQXTTat5nBEACIAEwfQEwPzhXueT0vx7vxxUuPtj/Pcz5UAmABMBc8+tad+yyeTdj/T1LlXSjcV+4Dz5envzX/zxzkuji50TXznLHvD828NojABIACYBAMfy8UnTi9aLlyvidWJ9yvOjGVew3AiABkAjz988HuxjgvUYAJAASANMVAEuUEB3Q638f851n/OcsiyoCIKLIVkO+6RK/CF6ypBsxiNjsroot/7ONYN59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";var Ri=document.querySelector("#truck-scene"),ta=document.querySelector("#motion-toggle"),fl=[...document.querySelectorAll(".chapter")],Rp=[...document.querySelectorAll(".chapter-track a")],Ip=document.querySelector("#truck-type"),Pp=["INTERMODAL / CONNECTED INTAKE","DEDICATED / RECRUITER WORKSPACE","FINAL MILE / VERIFIED FOLLOW-UP"],vo=matchMedia("(prefers-reduced-motion: reduce)"),Dn=vo.matches,Ye=0;function yo(){ta.setAttribute("aria-pressed",String(Dn)),ta.innerHTML=Dn?"Resume motion <span>\u25B6</span>":"Pause motion <span>\u2161</span>",document.documentElement.style.scrollBehavior=Dn?"auto":""}ta.addEventListener("click",()=>{Dn=!Dn,yo()});vo.addEventListener("change",()=>{Dn=vo.matches,yo()});yo();function Mo(){let i=innerWidth<=650?innerHeight*.78:innerHeight*.56,t=0,e=1/0;fl.forEach((s,r)=>{let a=s.getBoundingClientRect(),o=Math.abs(a.top+a.height/2-i);o<e&&(e=o,t=r)}),t!==Ye&&(Ye=t,Rp.forEach((s,r)=>{s.classList.toggle("active",r===Ye),r===Ye?s.setAttribute("aria-current","step"):s.removeAttribute("aria-current")}),Ip.textContent=Pp[Ye],Ri.setAttribute("aria-label",`Illustrative J.B. Hunt ${["intermodal tractor trailer","dedicated dry van tractor trailer","final mile box truck"][Ye]} with ${["Capture","Review","Validate"][Ye]} messaging on the trailer.`));let n=fl[Ye].getBoundingClientRect();return Math.max(-1,Math.min(1,(i-n.top-n.height/2)/n.height))}addEventListener("scroll",Mo,{passive:!0});Mo();try{let p=function(k,D,z,Z,at,St,Ot,Yt){let It=new le(new wn(D,z,Z),Yt);return It.position.set(at,St,Ot),It.castShadow=!0,It.receiveShadow=!0,k.add(It),It},h=function(k,D,z){let Z=new le(new _i(.53,.53,.34,24),f);Z.rotation.x=Math.PI/2,Z.position.set(D,.53,z),Z.castShadow=!0,k.add(Z);let at=new le(new _i(.29,.29,.36,20),u);at.rotation.x=Math.PI/2,at.position.copy(Z.position),k.add(at),m.push(Z);for(let St=0;St<6;St++){let Ot=St*Math.PI/3,Yt=new le(new Ki(.038,6,4),l);Yt.position.set(D+Math.sin(Ot)*.19,.53+Math.cos(Ot)*.19,z+(z>0?.19:-.19)),k.add(Yt)}},w=function(k,D){let z=D?-4.1:-5.2;p(k,D?2.1:2.2,1.65,2.18,z,1.7,0,o),p(k,1.65,.85,2.05,z-.15,2.65,0,o),D||(p(k,1.25,2.7,2.2,z+1.25,2.25,0,o),p(k,2,.45,2.12,z+.1,3.3,0,o)),p(k,1.6,.5,1.98,z-.72,1.65,0,o),p(k,.025,.73,1.57,z-1.11,2.67,0,d);for(let Z of[-1,1])p(k,.88,.72,.026,z+.03,2.67,Z*1.104,d),p(k,.95,.58,.03,z+.04,1.97,Z*1.104,o),p(k,.48,.2,.035,z+.05,1.96,Z*1.125,c),p(k,.26,.045,.05,z+.29,2.18,Z*1.13,l),p(k,.14,.45,.17,z-.53,2.52,Z*1.3,l),p(k,.7,.14,.34,z+.3,.87,Z*1.12,u),p(k,1.03,.4,.36,z+1.36,.85,Z*.88,u);p(k,.1,.65,1.15,z-1.17,1.4,0,l);for(let Z=1.17;Z<1.73;Z+=.1)p(k,.115,.025,1.13,z-1.19,Z,0,u);p(k,.17,.23,.36,z-1.18,1.54,.79,a(16445631)),p(k,.17,.23,.36,z-1.18,1.54,-.79,a(16445631)),p(k,.22,.25,2.25,z-1.19,.98,0,u);for(let Z=z-.5;Z<=z+.51;Z+=.25)p(k,.06,.06,.07,Z,3.12,1.03,c);h(k,z-.22,-1.08),h(k,z-.22,1.08)},M=function(k){let D=document.createElement("canvas");D.width=2048,D.height=640,b.push(D);let z=D.getContext("2d");if(z.fillStyle=k===1?"#ffd000":"#f8f8f3",z.fillRect(0,0,2048,640),z.fillStyle="#d1d1c9",k===0)for(let at=0;at<2048;at+=35)z.fillRect(at,0,3,640);let Z=new Ji(D);return Z.colorSpace=Ae,Z.anisotropy=i.capabilities.getMaxAnisotropy(),Z},P=function(){b.forEach((k,D)=>{let z=k.getContext("2d");if(z.fillStyle=D===1?"#ffd000":"#f8f8f3",z.fillRect(0,0,2048,640),D===0){z.fillStyle="#deded5";for(let Z=0;Z<2048;Z+=35)z.fillRect(Z,0,2,640)}z.drawImage(T,115,95,535,136),z.fillStyle="#191919",z.font="700 45px Arial",z.fillText(["INTERMODAL","DEDICATED","FINAL MILE"][D],118,305),z.fillStyle="#191919",z.fillRect(720,90,3,440),z.font="700 135px Arial",z.fillText(["Capture.","Review.","Validate."][D],810,260),z.font="44px Arial",z.fillText(["One scan. One shared record.","One connected workspace.","AI drafts. People decide."][D],815,348),z.font="700 32px Arial",z.fillText("TALENT IQ",815,480),C[D].needsUpdate=!0})},U=function(k){let D=new Ze,z=k===2,Z=z?6.2:9.2,at=z?.4:1.2,St=z?2.65:2.9,Ot=z?2.7:3.05;p(D,z?10:14,.28,1.4,z?-1:-.4,.9,0,l),w(D,z),p(D,Z,Ot,2.48,at,St,0,k===1?c:o),p(D,Z,.16,2.55,at,St+Ot/2,0,u),p(D,Z,.13,2.55,at,St-Ot/2,0,u);for(let It of[-1,1]){let J=new le(new Cn(Z-.12,Ot-.13),new xi({map:C[k],roughness:.75}));J.position.set(at,St,It*1.249),It===-1&&(J.rotation.y=Math.PI),D.add(J),p(D,Z,.04,.02,at,St-Ot/2+.14,It*1.265,c)}p(D,.08,Ot,2.42,at+Z/2+.03,St,0,u),p(D,.14,.14,2.5,at+Z/2,.72,0,u);let Yt=z?[2.25]:[-2.65,-1.5,4.05,5.2];for(let It of Yt)for(let J of[-1.15,1.15])h(D,It,J);for(let It of[-1,1])p(D,z?1.8:2,.3,.15,at+Z/2-.8,.5,It*1.27,l),p(D,.1,.14,.26,at+Z/2+.11,1.13,It,a(12331047));return t.add(D),D.visible=k===0,D},W=function(){let{width:k,height:D}=Ri.getBoundingClientRect();i.setSize(k,D,!1),e.aspect=k/D,e.zoom=1.18,e.position.set(-11,7.5,18);let z=e.aspect<1.25?26:22;e.position.multiplyScalar(z/22),e.lookAt(0,1.6,0),e.updateProjectionMatrix()},X=function(k){requestAnimationFrame(X);let D=Math.min((k-B)/1e3,.05);if(B=k,!Q||document.hidden)return;let z=Mo();x!==Ye&&(x=Ye,R=k,y.forEach((at,St)=>at.visible=St===x));let Z=y[x];if(Dn)Z.position.set(0,0,0),Z.rotation.y=-.12,A.position.x=0;else{G+=D;let at=Math.max(0,1-(k-R)/750);Z.position.x=at*3.5+z*.7,Z.rotation.y=-.12+z*.26,Z.position.y=Math.sin(G*1.5)*.018,m.forEach(St=>{St.rotation.y-=D*.9}),A.position.x=-(G*.8)%3}i.render(t,e),window.__talentIQScene={ready:!0,chapter:Ye,paused:Dn,truckCount:y.length,canvasWidth:i.domElement.width}},i=new jr({antialias:!0,alpha:!0});i.setPixelRatio(Math.min(devicePixelRatio,2)),i.shadowMap.enabled=!0,i.shadowMap.type=nr,i.setClearColor(15987695,1),i.outputColorSpace=Ae,i.toneMapping=hr,i.toneMappingExposure=1.15,Ri.append(i.domElement);let t=new qi,e=new _e(33,1,.1,130),n=new es(16777215,7631977,1.8);t.add(n);let s=new vi(16777215,2.3);s.position.set(-5,12,9),s.castShadow=!0,s.shadow.mapSize.set(2048,2048),Object.assign(s.shadow.camera,{left:-14,right:14,top:12,bottom:-12}),s.shadow.bias=-4e-4,t.add(s);let r=new vi(16777215,1.4);r.position.set(8,4,-7),t.add(r);let a=(k,D=.6,z=.1)=>new xi({color:k,roughness:D,metalness:z}),o=a(16316661),l=a(1513754,.7),c=a(16764672),u=a(10133151,.3,.85),d=a(2835793,.18,.65),f=a(1447705,.9),A=new Ze;t.add(A),p(A,34,.12,6,0,-.1,0,a(15000797,.95,0));for(let k=-17;k<18;k+=3)p(A,1.6,.014,.075,k,-.028,2.3,c);let v=new le(new Cn(100,100),new ji({opacity:.17}));v.rotation.x=-Math.PI/2,v.position.y=-.17,v.receiveShadow=!0,t.add(v);let m=[],b=[],C=[0,1,2].map(M),T=new Image;T.src=dl,T.onload=P,T.complete&&T.naturalWidth&&P();let y=[0,1,2].map(U),x=0,R=0,B=performance.now(),G=0;new ResizeObserver(W).observe(Ri),W();let Q=!0;new IntersectionObserver(k=>{Q=k[0].isIntersecting},{rootMargin:"150px"}).observe(document.querySelector(".journey")),requestAnimationFrame(X),i.domElement.addEventListener("webglcontextlost",k=>{k.preventDefault(),Ri.hidden=!0,document.querySelector("#fallback").hidden=!1})}catch(i){Ri.hidden=!0,document.querySelector("#fallback").hidden=!1,ta.hidden=!0,console.warn("3D is unavailable; the readable presentation is retained.",i)}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
