if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return r[e]||(i=new Promise((async i=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},i=(i,r)=>{Promise.all(i.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(i)};self.define=(i,s,d)=>{r[i]||(r[i]=Promise.resolve().then((()=>{let r={};const c={uri:location.origin+i.slice(1)};return Promise.all(s.map((i=>{switch(i){case"exports":return r;case"module":return c;default:return e(i)}}))).then((e=>{const i=d(...e);return r.default||(r.default=i),r}))})))}}define("./service-worker.js",["./workbox-f7715658"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2021/06/18/First/index.html",revision:"411ff32831292067b4b7e6dc689c6589"},{url:"about/index.html",revision:"efdfac521795af65720897a42974c36f"},{url:"archives/2021/06/index.html",revision:"74bf22403a8a2493c92b597138227346"},{url:"archives/2021/index.html",revision:"d0431b345fe579575f29501cf3d2e49e"},{url:"archives/index.html",revision:"cb6f3fd23f06c52bfd5a248c10e7671c"},{url:"categories/index.html",revision:"c0fb01d39b704a059b34279d48c6efac"},{url:"comments/index.html",revision:"ceaa584aa19a424df7800b506d46977c"},{url:"css/index.css",revision:"5b3c99bdfd3d25b4912a614f487a5d41"},{url:"css/mycss.css",revision:"d52fa6cc7ea7bbf4653255f49cc6062c"},{url:"css/prism-tomorrow.css",revision:"f46d7519e3b65a6912814727b47a57ff"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"dist/APlayer.min.css",revision:"fbe994054426fadb2dff69d824c5c67a"},{url:"dist/APlayer.min.js",revision:"8f1017e7a73737e631ff95fa51e4e7d7"},{url:"dist/music.js",revision:"9a4b4d8a1a6e2c24e0636bfa76f4996e"},{url:"friends/index.html",revision:"d2499511bfd251efdc98a94179323e5a"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/ava.jpg",revision:"ddef49f50fb94e0a672a349cdd6321b4"},{url:"img/background1.png",revision:"93d06213e280c91d73da3b189860bd0d"},{url:"img/Desktop2.jpg",revision:"43f5765bc214e3b8e5f5ab406210aad2"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/top.png",revision:"83dc7d0919446093439674dfd61adab2"},{url:"index.html",revision:"b8901868d670df611863b0398b3d88fe"},{url:"js/Lete.js",revision:"1fbb6208ebc88ed08c428ed2ff2f33ba"},{url:"js/main.js",revision:"f468f3bc967338f2dd7a6e06c2eef692"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"acb62dcdf7e90930da3f6bf07349fc21"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"4cfc631de0e5f6ff12b2833cac848f27"},{url:"live2dw/assets/moc/hibiki.2048/texture_00.png",revision:"730252369524e7a1c21308cb84acd465"},{url:"live2dw/lib/L2Dwidget.0.min.js",revision:"32973883fcac0a9ae6cc79c0ea25fda2"},{url:"live2dw/lib/L2Dwidget.min.js",revision:"094cbace49a39548bed64abff5988b05"},{url:"messageboard/index.html",revision:"55f37970b95a696740da9142888e7ffe"},{url:"tags/index.html",revision:"66e9681093504ff84f7043a4754a26d8"},{url:"tags/Markdown/index.html",revision:"dc07712ee23e86065608618f6912c8e0"},{url:"timeline/index.html",revision:"1f356d40f26c27e6a331618b99e09a54"}],{})}));
//# sourceMappingURL=service-worker.js.map
