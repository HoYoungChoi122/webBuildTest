(function(t){function e(e){for(var n,s,i=e[0],u=e[1],c=e[2],l=0,f=[];l<i.length;l++)s=i[l],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&f.push(a[s][0]),a[s]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);p&&p(e);while(f.length)f.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,s=1;s<r.length;s++){var u=r[s];0!==a[u]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=r[0]))}return t}var n={},a={app:0},o=[];function s(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"1858d37b"}[t]+".js"}function i(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(t){var e=[],r=a[t];if(0!==r)if(r)e.push(r[2]);else{var n=new Promise((function(e,n){r=a[t]=[e,n]}));e.push(r[2]=n);var o,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=s(t);var c=new Error;o=function(e){u.onerror=u.onload=null,clearTimeout(l);var r=a[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",c.name="ChunkLoadError",c.type=n,c.request=o,r[1](c)}a[t]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:u})}),12e4);u.onerror=u.onload=o,document.head.appendChild(u)}return Promise.all(e)},i.m=t,i.c=n,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var p=c;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";r("85ec")},"4fef":function(t,e,r){"use strict";r("e999")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("nav-bar"),r("router-view"),r("br"),r("intro")],1)},o=[],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-navbar",{attrs:{variant:"faded",type:"light"}},[r("b-navbar-brand",{attrs:{to:"/"}},[r("img",{staticClass:"d-inline-block align-top",attrs:{src:"https://placekitten.com/g/30/30",alt:"Kitten"}}),t._v(" CREATE ")]),r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[t._v("INPUT PROFILE")]),t._v(" | "),r("router-link",{attrs:{to:"/about"}},[t._v("OUT")]),t._v(" | ")],1)],1)],1)},i=[],u={name:"navBar"},c=u,l=r("2877"),p=Object(l["a"])(c,s,i,!1,null,"46e64952",null),f=p.exports,b=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-jumbotron",{attrs:{"bg-variant":"info","text-variant":"white"},scopedSlots:t._u([{key:"lead",fn:function(){return[t._v(" SELECT TEMPLATE ")]},proxy:!0}])},[r("hr",{staticClass:"my-5"}),r("b-card-group",{attrs:{deck:""}},[r("b-card",{attrs:{header:"featured","header-tag":"header","footer-tag":"footer","text-variant":"dark"},scopedSlots:t._u([{key:"header",fn:function(){return[r("h2",{staticClass:"mb-0"},[t._v("TEMPLATE 1")])]},proxy:!0},{key:"footer",fn:function(){return[r("b-button",{attrs:{href:"#",variant:"primary"}},[t._v("SELECT")])]},proxy:!0}])},[r("b-card-img",{staticStyle:{width:"100px",height:"300px"},attrs:{src:"https://picsum.photos/400/400/?image=20",alt:"이미지1"}})],1),r("b-card",{attrs:{"header-tag":"header","footer-tag":"footer","text-variant":"dark"},scopedSlots:t._u([{key:"header",fn:function(){return[r("h2",{staticClass:"mb-0"},[t._v("TEMPLATE 2")])]},proxy:!0},{key:"footer",fn:function(){return[r("b-button",{attrs:{href:"#",variant:"primary"}},[t._v("SELECT")])]},proxy:!0}])},[r("b-card-img",{staticStyle:{width:"100px",height:"300px"},attrs:{src:"https://picsum.photos/250/250/?image=54",alt:"이미지1"}})],1),r("b-card",{attrs:{"header-tag":"header","footer-tag":"footer","text-variant":"dark"},scopedSlots:t._u([{key:"header",fn:function(){return[r("h2",{staticClass:"mb-0"},[t._v("TEMPLATE 3")])]},proxy:!0},{key:"footer",fn:function(){return[r("b-button",{attrs:{href:"#",variant:"primary"}},[t._v("SELECT")])]},proxy:!0}])},[r("b-card-img",{staticStyle:{width:"100px",height:"300px"},attrs:{src:"https://picsum.photos/250/250/?image=58",alt:"이미지1"}})],1)],1)],1)},d=[],v={name:"intro"},m=v,h=Object(l["a"])(m,b,d,!1,null,"0a4dc321",null),y=h.exports,_={components:{Intro:y,NavBar:f}},g=_,x=(r("034f"),Object(l["a"])(g,a,o,!1,null,null,null)),w=x.exports,k=(r("d3b7"),r("3ca3"),r("ddb0"),r("8c4f")),E=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("b-container",[r("b-row",{staticClass:"mt-3 mb-1"},[r("b-col",{attrs:{cols:"12"}},[r("b-card-text",{staticClass:"input_label_title"},[t._v("이름")])],1)],1),r("b-row",[r("b-col",{attrs:{cols:"12"}},[r("b-input-group",{attrs:{size:"sm"},scopedSlots:t._u([{key:"append",fn:function(){return[r("b-button",[t._v("비공개")])]},proxy:!0}])},[r("b-form-input",{attrs:{max:"8"}})],1)],1)],1),r("b-row",{staticClass:"mt-3 mb-1"},[r("b-col",{attrs:{cols:"12"}},[r("b-card-text",{staticClass:"input_label_title"},[t._v("회사")])],1)],1),r("b-row",[r("b-col",{attrs:{cols:"12"}},[r("b-input-group",{attrs:{size:"sm"},scopedSlots:t._u([{key:"append",fn:function(){return[r("b-button",[t._v("비공개")])]},proxy:!0}])},[r("b-form-input",{attrs:{max:"8"}})],1)],1)],1),r("b-row",{staticClass:"mt-3 mb-1"},[r("b-col",{attrs:{cols:"12"}},[r("b-card-text",{staticClass:"input_label_title"},[t._v("부서")])],1)],1),r("b-row",[r("b-col",{attrs:{cols:"12"}},[r("b-input-group",{attrs:{size:"sm"},scopedSlots:t._u([{key:"append",fn:function(){return[r("b-button",[t._v("비공개")])]},proxy:!0}])},[r("b-form-input",{attrs:{max:"8"}})],1)],1)],1),r("b-row",{staticClass:"mt-3 mb-1"},[r("b-col",{attrs:{cols:"12"}},[r("b-card-text",{staticClass:"input_label_title"},[t._v("취미")])],1)],1),r("b-row",[r("b-col",{attrs:{cols:"12"}},[r("b-form-group",{staticClass:"text-left",scopedSlots:t._u([{key:"default",fn:function(e){var n=e.ariaDescribedby;return[r("b-form-checkbox-group",{attrs:{options:t.options,"aria-describedby":n,switches:""},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})]}}])})],1)],1)],1)],1)},C=[],S={name:"InputProfile",components:{},data:function(){return{selected:[],options:[{text:"등산",value:"red"},{text:"게임",value:"green"},{text:"음악",value:"yellow"},{text:"영화감상",value:"blue"}]}}},T=S,O=(r("4fef"),Object(l["a"])(T,E,C,!1,null,"51b844ec",null)),P=O.exports;n["default"].use(k["a"]);var j=[{path:"/",name:"inputProfile",component:P},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],L=new k["a"]({mode:"history",base:"/webBuildTest",routes:j}),M=L,A=r("2f62");n["default"].use(A["a"]);var $=new A["a"].Store({state:{},mutations:{},actions:{},modules:{}}),I=r("5f5b"),z=r("b1e0");r("f9e3"),r("2dd8");n["default"].config.productionTip=!1,n["default"].use(I["a"]),n["default"].use(z["a"]),new n["default"]({router:M,store:$,render:function(t){return t(w)}}).$mount("#app")},"85ec":function(t,e,r){},e999:function(t,e,r){}});
//# sourceMappingURL=app.468aa07e.js.map