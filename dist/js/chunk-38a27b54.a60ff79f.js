(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-38a27b54"],{5687:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("dir",{staticClass:"datum",class:{active:t.active}},[s("div",{staticClass:"bricka"},[s("div",{staticClass:"text"},[t.f0?s("strong",{domProps:{innerHTML:t._s(t.f0)}}):t._e(),t.f0&&t.f1?s("span",[t._v(", ")]):t._e(),t.f1?s("span",{domProps:{innerHTML:t._s(t.f1)}}):t._e()])])])},i=[],n=(s("d81d"),s("53ca")),o=s("c51a"),c={data:function(){return{comp:"EFS_Datum",f0:"Uppsala",f1:"13 maj 2019",active:!1}},methods:{play:function(){this.active=!0,console.log("Datum")},stop:function(){this.active=!1},next:function(){console.log(this)},update:function(t){var e=this;if("object"==Object(n["a"])(t))t.f0&&(this.f0=t.f0),t.f1&&(this.f1=t.f1),t.f2&&(this.f2=t.f2);else{var s=o.xml2js(t);s.elements[0].elements.map((function(t){"f0"==t.attributes.id&&(e.f0=t.elements[0].attributes.value),"f1"==t.attributes.id&&(e.f1=t.elements[0].attributes.value),"f2"==t.attributes.id&&(e.f2=t.elements[0].attributes.value)}))}}},created:function(){window.play=this.play,window.stop=this.stop,window.next=this.next,window.update=this.update},sockets:{data:function(t){var e=t.event,s=t.data;e==this.comp+"_play"&&this.play(),e==this.comp+"_stop"&&this.stop(),e==this.comp+"_next"&&this.next(),e==this.comp+"_update"&&this.update(s)}}},f=c,u=(s("8869"),s("2877")),p=Object(u["a"])(f,a,i,!1,null,"ab01e8f8",null);e["default"]=p.exports},8869:function(t,e,s){"use strict";var a=s("d202"),i=s.n(a);i.a},d202:function(t,e,s){}}]);
//# sourceMappingURL=chunk-38a27b54.a60ff79f.js.map