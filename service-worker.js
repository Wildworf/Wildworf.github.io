if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return r[e]||(i=new Promise((async i=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},i=(i,r)=>{Promise.all(i.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(i)};self.define=(i,s,d)=>{r[i]||(r[i]=Promise.resolve().then((()=>{let r={};const c={uri:location.origin+i.slice(1)};return Promise.all(s.map((i=>{switch(i){case"exports":return r;case"module":return c;default:return e(i)}}))).then((e=>{const i=d(...e);return r.default||(r.default=i),r}))})))}}define("./service-worker.js",["./workbox-f7715658"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2021/06/18/First/index.html",revision:"e30ac71b03cf3b53ad970cf3b86f2d49"},{url:"about/index.html",revision:"e08b79c3c47e7baafd34bc6eed3c849b"},{url:"archives/2021/06/index.html",revision:"c42e960d235e2f95a5509df959813c42"},{url:"archives/2021/index.html",revision:"88c3a9339ca0655d01355e80eae9de45"},{url:"archives/index.html",revision:"2a39600fa053b2f2344ed5a69cf80f12"},{url:"categories/index.html",revision:"1c8eb85806825df29bf6e0931b18b629"},{url:"css/index.css",revision:"985d7803c1a6cc41e0f1578ad6463a19"},{url:"css/mycss.css",revision:"f43754214addb4b8d1e7ed01110c678a"},{url:"css/prism-tomorrow.css",revision:"f46d7519e3b65a6912814727b47a57ff"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"friends/index.html",revision:"6df88059ff18f8727868414aeb64bb65"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/ava.jpg",revision:"ddef49f50fb94e0a672a349cdd6321b4"},{url:"img/background1.png",revision:"93d06213e280c91d73da3b189860bd0d"},{url:"img/Desktop2.jpg",revision:"43f5765bc214e3b8e5f5ab406210aad2"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/top.png",revision:"83dc7d0919446093439674dfd61adab2"},{url:"index.html",revision:"25d487aee35da91e74dba33267298922"},{url:"js/Lete.js",revision:"1fbb6208ebc88ed08c428ed2ff2f33ba"},{url:"js/main.js",revision:"f468f3bc967338f2dd7a6e06c2eef692"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"acb62dcdf7e90930da3f6bf07349fc21"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"4cfc631de0e5f6ff12b2833cac848f27"},{url:"live2dw/assets/moc/hibiki.2048/texture_00.png",revision:"730252369524e7a1c21308cb84acd465"},{url:"live2dw/lib/L2Dwidget.0.min.js",revision:"32973883fcac0a9ae6cc79c0ea25fda2"},{url:"live2dw/lib/L2Dwidget.min.js",revision:"094cbace49a39548bed64abff5988b05"},{url:"messageboard/index.html",revision:"7065b03241141aaf9414146141e7e636"},{url:"tags/index.html",revision:"a651c0b5876661aaf16d313055be7891"},{url:"tags/Markdown/index.html",revision:"7dae34cdf7227973c2e6ba0723cbe2cf"},{url:"timeline/index.html",revision:"73cff6d0ae60b410422c9fc82104d7db"}],{})}));
//# sourceMappingURL=service-worker.js.map