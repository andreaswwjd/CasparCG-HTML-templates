(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0880b30e"],{"3a62":function(t,i,s){"use strict";var e=s("5c38"),a=s.n(e);a.a},"3e8f":function(t,i){},"4b2d":function(t,i,s){"use strict";s.r(i);var e=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"title",class:{active:t.active}},[s("svg",{attrs:{width:"100%",height:"100%",viewBox:"0 0 1920 1080"}},[s("defs",[s("mask",{attrs:{id:"mask",width:"1920",height:"1080"}},[s("g",{staticClass:"transition_up",attrs:{x:"0",y:"0"}},[s("rect",{staticClass:"curtain",attrs:{fill:"white",y:"55",x:"55",width:"1810"}}),s("path",{attrs:{d:"m1865,55 -55,0 55,55z"}})])]),s("mask",{attrs:{id:"titlemask"}},[s("rect",{attrs:{fill:"white",y:"55",x:"55",width:"1810",height:"970"}}),t._l(t.tspans,(function(i,e){return s("g",{key:i,attrs:{transform:"translate(0,"+(540-110*t.nrOfSplits/2+110+110*e)+")"}},[s("text",{staticClass:"titlebox",style:{transitionDelay:(t.active?300+200*e:250)+"ms"},attrs:{x:"50%",width:"1000"}},[t._v("\n            "+t._s(i)+"\n          ")]),s("rect",{attrs:{fill:"white",width:"1810",height:"110",x:"55",y:"30"}})])}))],2),s("mask",{attrs:{id:"titlemaskInverted"}},[s("rect",{attrs:{fill:"white",y:"55",x:"55",width:"1810",height:"970"}}),s("rect",{attrs:{fill:"black",y:"55",x:"55",width:"1810",height:"970",mask:"url(#mask)"}}),s("rect",{attrs:{fill:"black",y:"55",x:"55",width:"1810",height:"970",mask:"url(#titlemask)"}})])]),s("rect",{staticClass:"invertedtext",attrs:{fill:"white",y:"55",x:"55",width:"1810",height:"970",mask:"url(#titlemaskInverted)"}}),s("g",{attrs:{mask:"url(#mask)",x:"0",y:"0",width:"1920",height:"1080"}},[s("rect",{attrs:{mask:"url(#titlemask)",fill:"white",width:"1920",height:"1080"}}),s("g",{staticClass:"transition_up",attrs:{x:"0",y:"0"}},[s("path",{attrs:{d:"m1810,55 0,55 55,0z",fill:"#EAE1CA"}})]),s("text",{staticClass:"fadein",staticStyle:{"font-size":"50px"},attrs:{x:"50%",y:540-110*t.nrOfSplits/2-35+"px",fill:"#D04F3D"}},[t._v(t._s(t.f1))]),s("foreignObject",{staticClass:"fadein",staticStyle:{"font-size":"35px","text-align":"center"},attrs:{x:"0",y:540+110*t.nrOfSplits/2+50+"px",width:"100%",height:"300"}},[s("div",{staticClass:"textbox",attrs:{xmlns:"http://www.w3.org/1999/xhtml"}},t._l(t.f2.split("\n"),(function(i){return s("span",{key:i,attrs:{x:"50%",dy:"35"},domProps:{innerHTML:t._s(i+"<br>")}})})),0)])],1)])])},a=[],n=(s("3e8f"),{data:function(){return{comp:"title",f0:"Titel",f1:"",f2:"",defaultSplitIndex:26,maxSplitIndex:28,active:!1}},computed:{scale:function(){return screen.availWidth/1920},nrOfSplits:function(){return Math.ceil(this.f0.length/this.defaultSplitIndex)},tspans:function(){var t=this.f0,i=[t];if(this.nrOfSplits>1){for(var s=Math.ceil(t.length/this.nrOfSplits),e=0;e<this.nrOfSplits;e++){var a=s-t.substr(0,s).lastIndexOf(" "),n=t.substr(s,this.maxSplitIndex-s).indexOf(" "),l=void 0;l=a===s+1?-1===n?s:s+n:-1===n?s-a:a<n?s-a:s+n,i[e]=t.substr(0,l),t=t.substr(l),""!=t&&a==s+1&&-1==n&&(i[e]+="-")}i[i.length-1]+=t}return i}},methods:{play:function(){this.active=!0,console.log("Title")},stop:function(){this.active=!1},next:function(){console.log(this)},update:function(t){this.f0=t.f0,this.f1=t.f1,this.f2=t.f2,t.defaultSplitIndex&&(this.defaultSplitIndex=t.defaultSplitIndex),t.maxSplitIndex&&(this.maxSplitIndex=t.maxSplitIndex)}},mounted:function(){console.log(this),window.play=this.play,window.stop=this.stop,window.next=this.next,window.update=this.update},sockets:{data:function(t){var i=t.event,s=t.data;i==this.comp+"_play"&&this.play(),i==this.comp+"_stop"&&this.stop(),i==this.comp+"_next"&&this.next(),i==this.comp+"_update"&&this.update(s)}}}),l=n,r=(s("3a62"),s("2877")),h=Object(r["a"])(l,e,a,!1,null,"662b1663",null);i["default"]=h.exports},"5c38":function(t,i,s){}}]);
//# sourceMappingURL=chunk-0880b30e.2e233e88.js.map