if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return r[e]||(i=new Promise((async i=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},i=(i,r)=>{Promise.all(i.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(i)};self.define=(i,s,c)=>{r[i]||(r[i]=Promise.resolve().then((()=>{let r={};const d={uri:location.origin+i.slice(1)};return Promise.all(s.map((i=>{switch(i){case"exports":return r;case"module":return d;default:return e(i)}}))).then((e=>{const i=c(...e);return r.default||(r.default=i),r}))})))}}define("./service-worker.js",["./workbox-f7715658"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2021/06/18/First/index.html",revision:"764b4411cf2d32e0081c605ac7d846fc"},{url:"about/index.html",revision:"21aa5a2fff008d01f3551f4fa7026d6a"},{url:"archives/2021/06/index.html",revision:"4b7829a1ca37882e9cae54741788fe12"},{url:"archives/2021/index.html",revision:"64ba7d07587c84babcde47fb6ee4a788"},{url:"archives/index.html",revision:"a18792c39fc379179821d37e3dd24d51"},{url:"categories/index.html",revision:"00122b209fa6d66715223e51188c4336"},{url:"css/index.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"css/mycss.css",revision:"d52fa6cc7ea7bbf4653255f49cc6062c"},{url:"css/prism-tomorrow.css",revision:"f46d7519e3b65a6912814727b47a57ff"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"friends/index.html",revision:"f9ec2c727effbdcc80bc6f0ef2ac542d"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/ava.jpg",revision:"ddef49f50fb94e0a672a349cdd6321b4"},{url:"img/background1.png",revision:"93d06213e280c91d73da3b189860bd0d"},{url:"img/Desktop2.jpg",revision:"43f5765bc214e3b8e5f5ab406210aad2"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/top.png",revision:"83dc7d0919446093439674dfd61adab2"},{url:"index.html",revision:"c856d7c9b9d4ba2ff02268157504af65"},{url:"js/Lete.js",revision:"1fbb6208ebc88ed08c428ed2ff2f33ba"},{url:"js/main.js",revision:"f468f3bc967338f2dd7a6e06c2eef692"},{url:"js/search/algolia.js",revision:"533d980c0d50a0d0d7fe34c41a3e2100"},{url:"js/search/local-search.js",revision:"acb62dcdf7e90930da3f6bf07349fc21"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"4cfc631de0e5f6ff12b2833cac848f27"},{url:"live2dw/assets/moc/hibiki.2048/texture_00.png",revision:"730252369524e7a1c21308cb84acd465"},{url:"live2dw/lib/L2Dwidget.0.min.js",revision:"32973883fcac0a9ae6cc79c0ea25fda2"},{url:"live2dw/lib/L2Dwidget.min.js",revision:"094cbace49a39548bed64abff5988b05"},{url:"messageboard/index.html",revision:"ac0f3ca70c71cf21f453e26566249073"},{url:"tags/index.html",revision:"810e0866fd43db4da54a2ee6498e5cea"},{url:"tags/Markdown/index.html",revision:"abcc10c69c654fdb5f3661fb85574a09"},{url:"timeline/index.html",revision:"f97390a961c9af050cdb0d2e40b7def6"}],{})}));
//# sourceMappingURL=service-worker.js.map
