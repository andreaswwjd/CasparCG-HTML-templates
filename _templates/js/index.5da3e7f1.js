(function(e){function n(n){for(var r,c,a=n[0],i=n[1],d=n[2],l=0,f=[];l<a.length;l++)c=a[l],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&f.push(o[c][0]),o[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);s&&s(n);while(f.length)f.shift()();return u.push.apply(u,d||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],r=!0,c=1;c<t.length;c++){var a=t[c];0!==o[a]&&(r=!1)}r&&(u.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},c={index:0},o={index:0},u=[];function a(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-5f44ce34":"4d91615e","chunk-7d1d8b7b":"59407490","chunk-6b202d4c":"2040bef0","chunk-75a5019c":"a559588b","chunk-37cdb89c":"b359f4f8","chunk-663f1dde":"a734eaa4","chunk-6e795bc9":"12ccc25a"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-5f44ce34":1,"chunk-6b202d4c":1,"chunk-75a5019c":1,"chunk-37cdb89c":1,"chunk-663f1dde":1,"chunk-6e795bc9":1};c[e]?n.push(c[e]):0!==c[e]&&t[e]&&n.push(c[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-5f44ce34":"421a4db6","chunk-7d1d8b7b":"31d6cfe0","chunk-6b202d4c":"41abe901","chunk-75a5019c":"a13b6faf","chunk-37cdb89c":"75c49acb","chunk-663f1dde":"8c0c8539","chunk-6e795bc9":"49c2d6ba"}[e]+".css",o=i.p+r,u=document.getElementsByTagName("link"),a=0;a<u.length;a++){var d=u[a],l=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(l===r||l===o))return n()}var f=document.getElementsByTagName("style");for(a=0;a<f.length;a++){d=f[a],l=d.getAttribute("data-href");if(l===r||l===o)return n()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=n,s.onerror=function(n){var r=n&&n.target&&n.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete c[e],s.parentNode.removeChild(s),t(u)},s.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(s)})).then((function(){c[e]=0})));var r=o[e];if(0!==r)if(r)n.push(r[2]);else{var u=new Promise((function(n,t){r=o[e]=[n,t]}));n.push(r[2]=u);var d,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=a(e);var f=new Error;d=function(n){l.onerror=l.onload=null,clearTimeout(s);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",f.name="ChunkLoadError",f.type=r,f.request=c,t[1](f)}o[e]=void 0}};var s=setTimeout((function(){d({type:"timeout",target:l})}),12e4);l.onerror=l.onload=d,document.head.appendChild(l)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=n,d=d.slice();for(var f=0;f<d.length;f++)n(d[f]);var s=l;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("30b9")},"034f":function(e,n,t){"use strict";var r=t("64a9"),c=t.n(r);c.a},"30b9":function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("f751"),t("097d");var r=t("2b0e"),c=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("div",{staticClass:"container"},[t("router-view")],1)])},o=[],u=(t("034f"),t("2877")),a={},i=Object(u["a"])(a,c,o,!1,null,null,null),d=i.exports,l=t("8c4f");r["a"].use(l["a"]);var f=new l["a"]({mode:"history",base:"",routes:[{path:"/",name:"index",component:function(){return t.e("chunk-5f44ce34").then(t.bind(null,"d504"))}},{path:"/screen",name:"screen",component:function(){return Promise.all([t.e("chunk-7d1d8b7b"),t.e("chunk-75a5019c"),t.e("chunk-37cdb89c")]).then(t.bind(null,"b30e"))}},{path:"/green",name:"green",component:function(){return Promise.all([t.e("chunk-7d1d8b7b"),t.e("chunk-75a5019c"),t.e("chunk-6e795bc9")]).then(t.bind(null,"48e8"))}},{path:"/control",name:"control",component:function(){return Promise.all([t.e("chunk-7d1d8b7b"),t.e("chunk-75a5019c"),t.e("chunk-663f1dde")]).then(t.bind(null,"0616"))}},{path:"/songs",name:"songs",component:function(){return Promise.all([t.e("chunk-7d1d8b7b"),t.e("chunk-6b202d4c")]).then(t.bind(null,"82d2"))}}]}),s=t("5132"),h=t.n(s);r["a"].config.productionTip=!1,r["a"].use(new h.a({debug:!0,connection:window.location.origin})),new r["a"]({router:f,render:function(e){return e(d)}}).$mount("#app")},"64a9":function(e,n,t){}});
//# sourceMappingURL=index.5da3e7f1.js.map