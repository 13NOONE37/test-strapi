(()=>{"use strict";var h={},g={};function a(e){var r=g[e];if(r!==void 0)return r.exports;var f=g[e]={id:e,loaded:!1,exports:{}};return h[e].call(f.exports,f,f.exports,a),f.loaded=!0,f.exports}a.m=h,(()=>{var e=[];a.O=(r,f,c,b)=>{if(f){b=b||0;for(var t=e.length;t>0&&e[t-1][2]>b;t--)e[t]=e[t-1];e[t]=[f,c,b];return}for(var d=1/0,t=0;t<e.length;t++){for(var[f,c,b]=e[t],s=!0,n=0;n<f.length;n++)(b&!1||d>=b)&&Object.keys(a.O).every(p=>a.O[p](f[n]))?f.splice(n--,1):(s=!1,b<d&&(d=b));if(s){e.splice(t--,1);var o=c();o!==void 0&&(r=o)}}return r}})(),a.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return a.d(r,{a:r}),r},(()=>{var e=Object.getPrototypeOf?f=>Object.getPrototypeOf(f):f=>f.__proto__,r;a.t=function(f,c){if(c&1&&(f=this(f)),c&8||typeof f=="object"&&f&&(c&4&&f.__esModule||c&16&&typeof f.then=="function"))return f;var b=Object.create(null);a.r(b);var t={};r=r||[null,e({}),e([]),e(e)];for(var d=c&2&&f;typeof d=="object"&&!~r.indexOf(d);d=e(d))Object.getOwnPropertyNames(d).forEach(s=>t[s]=()=>f[s]);return t.default=()=>f,a.d(b,t),b}})(),a.d=(e,r)=>{for(var f in r)a.o(r,f)&&!a.o(e,f)&&Object.defineProperty(e,f,{enumerable:!0,get:r[f]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce((r,f)=>(a.f[f](e,r),r),[])),a.u=e=>""+e+"."+{25:"8705ba4f",157:"26ce1532",159:"9502e4fb",196:"71c67991",228:"757070c8",277:"e686877f",352:"a0229147",431:"211f46b6",464:"9c1c0014",474:"e8a21e64",545:"12278fd6",857:"59a51589",995:"0442ac57",998:"78f07aa3",1041:"b4177513",1047:"167095ed",1067:"b42b989c",1089:"a68cbea3",1184:"7b5e6e38",1189:"739a6c40",1191:"3ed7ab23",1226:"6d352131",1248:"2055be68",1289:"ed296a14",1339:"a71b9fd2",1540:"6bf2287d",1547:"726b0def",1556:"734477ab",1636:"a92c377f",1802:"21c8955f",1833:"acecfb91",1840:"0bdc66d9",1888:"1d742a80",1957:"fd0b8e7d",2008:"bcba5410",2037:"ec365519",2227:"82bbdf67",2266:"e7b4cf37",2282:"c2e3bd46",2301:"aa225e22",2389:"6e2b4265",2406:"f38a21fc",2585:"0c9c0f6b",2613:"3c5e6ac6",2687:"80351953",2709:"6729ab62",2752:"35f1c6cd",2759:"01608f6d",2772:"3cb27367",2856:"15ff5133",2927:"8019bb8b",2947:"0ed6f7ad",2948:"3075c796",2967:"4321914e",3042:"1d925500",3106:"726de3b3",3151:"778b1df1",3200:"e66ba9c0",3220:"e2d37188",3255:"ba4b4d7e",3265:"05c92a5c",3277:"64fc5f6f",3282:"918af3e3",3328:"81f133f8",3379:"24c2d123",3471:"51120004",3544:"f02b4e06",3667:"e4488adc",3801:"4a35f45e",3829:"383c4a7d",3882:"bb2c31bf",3938:"48eb7966",4011:"f1015fc0",4014:"a3cd735d",4041:"0f623b3d",4051:"8b71c21f",4110:"6b91d479",4259:"d2de9a80",4302:"09acc622",4306:"5ac5bf5c",4338:"b1aa4586",4342:"aaac07a4",4347:"a46a05cc",4384:"4ad25cca",4407:"3531d0db",4418:"469f9dbd",4475:"1e481723",4483:"45495dee",4495:"d3fabadf",4513:"332945d6",4550:"49b1d4b8",4675:"6dff40f6",4678:"0784d290",4799:"907146db",4857:"af252d5d",4878:"378bbeaf",4911:"25de8360",4972:"741ce78e",4998:"3da9ff87",5029:"473886c4",5089:"4a71f5ac",5097:"6eea8d4b",5174:"58eb0d08",5199:"05fb49c9",5275:"b5d731a9",5313:"6eb0957a",5411:"d8e5a595",5413:"28febbac",5445:"4c1d2cda",5480:"f5d7b251",5506:"9d631815",5517:"c5a8617e",5533:"662b8e05",5549:"422c5c6f",5608:"4e32c3fe",5706:"a3268be0",5707:"a12d3634",5730:"4b145ad6",5736:"74a999a5",5904:"e15ce4fc",5946:"d47e2152",6079:"b71b54fa",6081:"07b1dfe5",6085:"4c966c93",6103:"4bc1be17",6126:"dd477821",6309:"f425f561",6323:"444b782a",6349:"fd02f7a1",6354:"717c2316",6460:"12c05fab",6488:"0a4d59d0",6511:"ec72071b",6582:"aff1344d",6588:"9d858292",6624:"3579660f",6789:"1b68b6c9",6876:"d8137a12",6888:"01e1eff1",6889:"b523e526",7009:"d602ab29",7127:"5ef576f8",7171:"ac70b457",7225:"8c9be911",7311:"45166fd3",7320:"8bfead01",7396:"37cb68a3",7407:"622666c7",7410:"cf8639dd",7412:"7bf3af64",7461:"6d54b2d3",7539:"c366b5af",7542:"84bb44c3",7550:"e621cb12",7570:"08af7dbc",7665:"f43d2a1b",7690:"2061ba85",7702:"8d7e5ea8",7719:"740f97fe",7808:"36bacdb2",7838:"d2b165b1",7904:"73687722",7970:"537a8f1a",7983:"7cdb7798",8055:"22df9db3",8112:"6076423c",8227:"a13ece96",8267:"2e6da098",8283:"c234ff5e",8366:"c825f5ef",8428:"20aeed90",8441:"4db1136a",8460:"5cd870f0",8597:"39d0d456",8624:"a0892ef7",8657:"40b7a055",8690:"0f1f6b2b",8705:"bb4853bb",8739:"2fe39736",8786:"c69bc7c2",8793:"089d2e8d",8848:"589217f2",9015:"220147cd",9055:"c1b64628",9095:"54ce1dd5",9127:"3052f78a",9133:"c210607a",9281:"4c7a66fd",9473:"f3545e60",9500:"b1a7407a",9509:"4b9a16c2",9589:"7f02dcd5",9633:"a73463ca",9705:"edf21d22",9732:"1aa292c8",9770:"529120b5",9781:"4b5d6dea",9785:"e7a4fca3",9823:"353b7836",9916:"108073a1",9953:"8fb6d3b7",9958:"cc1a0d1a",9966:"5d031034",9969:"5c4425f9",9971:"073e060b"}[e]+".chunk.js",a.miniCssF=e=>{},a.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),a.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={},r="teststrapi:";a.l=(f,c,b,t)=>{if(e[f]){e[f].push(c);return}var d,s;if(b!==void 0)for(var n=document.getElementsByTagName("script"),o=0;o<n.length;o++){var i=n[o];if(i.getAttribute("src")==f||i.getAttribute("data-webpack")==r+b){d=i;break}}d||(s=!0,d=document.createElement("script"),d.charset="utf-8",d.timeout=120,a.nc&&d.setAttribute("nonce",a.nc),d.setAttribute("data-webpack",r+b),d.src=f),e[f]=[c];var l=(v,p)=>{d.onerror=d.onload=null,clearTimeout(u);var _=e[f];if(delete e[f],d.parentNode&&d.parentNode.removeChild(d),_&&_.forEach(m=>m(p)),v)return v(p)},u=setTimeout(l.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=l.bind(null,d.onerror),d.onload=l.bind(null,d.onload),s&&document.head.appendChild(d)}})(),a.r=e=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),a.p="/admin/",(()=>{a.b=document.baseURI||self.location.href;var e={5354:0};a.f.j=(c,b)=>{var t=a.o(e,c)?e[c]:void 0;if(t!==0)if(t)b.push(t[2]);else if(c!=5354){var d=new Promise((i,l)=>t=e[c]=[i,l]);b.push(t[2]=d);var s=a.p+a.u(c),n=new Error,o=i=>{if(a.o(e,c)&&(t=e[c],t!==0&&(e[c]=void 0),t)){var l=i&&(i.type==="load"?"missing":i.type),u=i&&i.target&&i.target.src;n.message="Loading chunk "+c+` failed.
(`+l+": "+u+")",n.name="ChunkLoadError",n.type=l,n.request=u,t[1](n)}};a.l(s,o,"chunk-"+c,c)}else e[c]=0},a.O.j=c=>e[c]===0;var r=(c,b)=>{var[t,d,s]=b,n,o,i=0;if(t.some(u=>e[u]!==0)){for(n in d)a.o(d,n)&&(a.m[n]=d[n]);if(s)var l=s(a)}for(c&&c(b);i<t.length;i++)o=t[i],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(l)},f=self.webpackChunkteststrapi=self.webpackChunkteststrapi||[];f.forEach(r.bind(null,0)),f.push=r.bind(null,f.push.bind(f))})(),a.nc=void 0})();
