(function(e){function t(t){for(var r,o,s=t[0],c=t[1],u=t[2],p=0,d=[];p<s.length;p++)o=s[p],a[o]&&d.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},i=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("41f5")},1:function(e,t){},2:function(e,t){},"213a":function(e,t,n){},3:function(e,t){},4:function(e,t){},"41f5":function(e,t,n){"use strict";n.r(t);n("5ebc"),n("dc41"),n("79b8"),n("f741");var r=n("54e1"),a=n("c478"),i=n("3700"),o=n("08a0"),s=n.n(o),c=(n("046b"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("loading",{attrs:{active:e.loading,"is-full-page":!0},on:{"update:active":function(t){e.loading=t}}}),e.loadingFailMessage?n("div",[e._v("Loading failed ("+e._s(e.loadingFailMessage)+"). Please "),n("button",{attrs:{onclick:"location.reload();"}},[e._v("refresh")])]):e._e(),n("router-view")],1)}),u=[],l=(n("3efa"),n("dccd")),p=n("8cf6"),d=new p["a"](!1),h=new p["a"]("");function m(){d.next(!0),console.log("load started")}function f(e){throw h.next(""+e),e}function v(){d.next(!1)}var g={load:m,loadDone:v,loadFailed:f};function w(e,t,n){var r=n.value;n.value=Object(l["a"])(regeneratorRuntime.mark(function e(){var t=arguments;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return g.load(),e.prev=1,e.next=4,r.apply(this,t);case 4:return e.abrupt("return",e.sent);case 7:throw e.prev=7,e.t0=e["catch"](1),g.loadFailed(e.t0),e.t0;case 11:return e.prev=11,g.loadDone(),e.finish(11);case 14:case"end":return e.stop()}},e,this,[[1,7,11,14]])}))}var b={components:{Loading:s.a},subscriptions:{loading:d,loadingFailMessage:h},data:function(){return{}}},x=b,k=(n("e5cd"),n("6691")),y=Object(k["a"])(x,c,u,!1,null,null,null),_=y.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.content?e._e():n("div",[e._v("\nNot found"),n("br")]),n("div",{staticClass:"menu-bar"},[n("router-link",{staticClass:"item",attrs:{to:{name:"home"}}},[e._v("Home")]),n("create-link"),n("router-link",{staticClass:"item",attrs:{to:{name:"edit",params:{page:e.wiki.name}}}},[e.content?n("span",[e._v("Edit")]):n("span",[e._v("Create")]),e._v(" "+e._s(e.wiki.name))]),n("router-link",{staticClass:"item",attrs:{to:{name:"history",params:{page:e.wiki.name}}}},[e._v("History")]),n("a",{staticClass:"item",attrs:{target:"_blank",href:"https://whatsonchain.com/tx/"+e.wiki.tx.tx.h}},[e._v("View Tx")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.showMd,expression:"showMd"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.showMd)?e._i(e.showMd,null)>-1:e.showMd},on:{change:function(t){var n=e.showMd,r=t.target,a=!!r.checked;if(Array.isArray(n)){var i=null,o=e._i(n,i);r.checked?o<0&&(e.showMd=n.concat([i])):o>-1&&(e.showMd=n.slice(0,o).concat(n.slice(o+1)))}else e.showMd=a}}}),n("a",{attrs:{href:"#",onclick:"return false"},on:{click:function(t){e.showMd=!e.showMd}}},[e._v("Markdown Text")])],1),n("hr"),e.showMd?n("textarea",{attrs:{readonly:"true",rows:"30",cols:"80"}},[e._v(e._s(e.wiki.content)+"\n")]):e._e(),e.content?n("div",[n("div",{domProps:{innerHTML:e._s(e.content)}})]):e._e()])},j=[],R=n("cec6"),M=(n("cb80"),n("5337"),n("5c38a"),n("c0f8"),n("e52a"),n("8bab")),P=n("9a2a"),C=(n("43fd"),n("7653"),n("2909")),$=new C.Renderer;function H(e){return e.replace(/&<"/g,function(e){return"&"===e?"&amp;":"<"===e?"&lt;":"&quot;"})}function V(e){var t="wiki:";if(e.substring(0,t.length)==t){var n=e.substring(t.length);return"#/wiki/".concat(n)}var r=/b:\/\/(.*)$/.exec(e);return r&&r[1]?"https://lol.bitdb.network/assets/1BvPxwDoz6DR9qedZrKJjWio6Gm7UCPGXU/raw/"+r[1]:e}$.image=function(e,t,n){var r=/=\s*(\d*)\s*x\s*(\d*)\s*$/.exec(t),a='<img src="'+V(H(e))+'" alt="'+H(n);return r&&r[1]&&(a+='" height="'+r[1]),r&&r[2]&&(a+='" width="'+r[2]),a+'">'};var S=$.link;$.link=function(e,t,n){return S.apply(this,[V(e),t,n])},C.setOptions({breaks:!0,link:function(e){return{href:"wiki:"+e[1],title:null}},renderer:$});var Q,B,D,E,F=function(){function e(){Object(M["a"])(this,e)}return Object(P["a"])(e,[{key:"recentPages",value:function(){var e=Object(l["a"])(regeneratorRuntime.mark(function e(t){var n,r,a,i,o,s,c,u=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:n=t.limit,r=void 0===n?20:n,a=[],i=[];case 3:return o={nameFilter:{$exists:!0,$ne:"|"},limit:20},i.length>0&&i[i.length-1].tx.blk&&(o.beforeBlock=i[i.length-1].tx.blk.i),e.next=7,this.loadWikis(o);case 7:if(s=e.sent,c=s.u.concat(s.c).map(function(e){return u.toContent(e)}),i=c,c.forEach(function(e){a.find(function(t){return t.name==e.name})||a.push(e)}),!(0==c.length||a.length>=r)){e.next=14;break}return a.length=Math.min(a.length,r),e.abrupt("return",a);case 14:if(c.length>0&&a.length<r){e.next=3;break}case 15:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"recentChanges",value:function(){var e=Object(l["a"])(regeneratorRuntime.mark(function e(t){var n,r,a,i,o,s=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.name,r=t.limit,a=void 0===r?20:r,e.next=3,this.loadWikis({nameFilter:{$in:[n,n+".md"]},limit:a});case 3:return i=e.sent,o=i.u.concat(i.c).map(function(e){return s.toContent(e)}),e.abrupt("return",o);case 6:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"loadWikis",value:function(){var e=Object(l["a"])(regeneratorRuntime.mark(function e(t){var n,r,a,i,o,s,c,u,l,p,d;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.nameFilter,r=t.limit,a=void 0===r?2:r,i=t.find,o=t.beforeBlock,s={v:3,q:{find:{out:{$elemMatch:{$or:[{s1:"19HxigV4QyBv3tHpQVcUEQyq1pzZVdoAut",s3:"text/markdown",s5:n},{s2:"19HxigV4QyBv3tHpQVcUEQyq1pzZVdoAut",s4:"text/markdown",s6:n}]}}},project:{"out.ls2":1,"out.s2":1,"out.s5":1,"out.s3":1,"out.ls3":1,"tx.h":1,blk:1,"out.s6":1},sort:{"blk.i":-1,i:-1},limit:a}},o&&(s.q.find["blk.i"]={$lt:o}),i&&(s.q.find=i),console.log(JSON.stringify(s)),c=JSON.stringify(s),u=btoa(unescape(encodeURIComponent(c))),l="https://neongenesis.bitdb.network/q/1HcBPzWoKDL2FhCMbocQmLuFTYsiD73u1j/"+u,p={headers:{key:"18doZeakgc7BeKs2L1ZWKMnoJnRQmoJy2i"}},e.next=11,fetch(l,p);case 11:return e.next=13,e.sent.json();case 13:return d=e.sent,e.abrupt("return",d);case 15:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"load",value:function(){var e=Object(l["a"])(regeneratorRuntime.mark(function e(t){var n,r,a,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.page,r={nameFilter:{$in:[n,n+".md"]},limit:2},"tx"==t.type&&(r.find={"tx.h":t.page}),e.next=5,this.loadWikis(r);case 5:return a=e.sent,i=a.u[0]||a.c[0],e.abrupt("return",this.toContent(i));case 8:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"toContent",value:function(e){if(!e)return e;var t="19HxigV4QyBv3tHpQVcUEQyq1pzZVdoAut"!=e.out[0].s2,n=t?e.out[0].s2||e.out[0].ls2:e.out[0].s3||e.out[0].ls3,r={content:n,tx:e,name:t?e.out[0].s5:e.out[0].s6};return".md"==r.name.substring(r.name.length-3)&&(r.name=r.name.substring(0,r.name.length-3)),r}},{key:"marked",value:function(e){return C(e)}}]),e}(),q=new F,A={watch:{$route:function(e,t){console.log(e,t),this.display(e.params)}},data:function(){return{showMd:!1,wiki:{tx:{tx:{}}},content:"",loaded:!1}},methods:(Q={display:function(){var e=Object(l["a"])(regeneratorRuntime.mark(function e(t){var n,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,q.load(t);case 2:n=e.sent,n||(n={tx:{tx:{}},blk:{},content:"",name:t.page}),r=n?n.content:"",this.loaded=!0,console.log(n),this.wiki=n,this.content=q.marked(r);case 9:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},Object(R["a"])(Q,"display",[w],Object.getOwnPropertyDescriptor(Q,"display"),Q),Q),mounted:function(){var e=Object(l["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.display(this.$route.params);case 1:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},L=A,T=Object(k["a"])(L,O,j,!1,null,null,null),U=T.exports,z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("router-link",{staticClass:"item",attrs:{to:{name:"page",params:{page:"index"}}}},[e._v("Index Page")]),n("create-link"),n("br"),n("h1",[e._v("Recent Pages")]),n("hr"),e._l(e.recentPages,function(t){return n("div",[n("router-link",{attrs:{to:{name:"page",params:{page:t.name}}}},[e._v(e._s(t.name))]),e._v(" \n @ "+e._s(e._f("moment")((t.tx.blk||{}).t,"from","now"))+"\n")],1)}),n("hr"),n("div",{domProps:{innerHTML:e._s(e.content)}})],2)},J=[],N={data:function(){return{content:"",recentPages:[]}},methods:(B={display:function(){var e=Object(l["a"])(regeneratorRuntime.mark(function e(t){var n,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,q.load({page:"index"});case 2:return n=e.sent,this.content=q.marked(n.content),e.next=6,q.recentPages(t);case 6:r=e.sent,this.recentPages=r;case 8:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},Object(R["a"])(B,"display",[w],Object.getOwnPropertyDescriptor(B,"display"),B),B),mounted:function(){var e=Object(l["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.display(this.$route.params);case 1:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},W=N,Z=Object(k["a"])(W,z,J,!1,null,null,null),K=Z.exports,G=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{display:"flex"}},[n("div",[n("h1",[e._v("Recent Changes")]),n("hr"),e._l(e.recentChanges,function(t){return n("div",[n("a",{attrs:{href:"#",onclick:"return false;"},on:{click:function(n){return e.show(t.tx.tx.h)}}},[n("span",{attrs:{title:t.tx.tx.h}},[e._v(e._s(e._f("truncate")(t.tx.tx.h,6,"..")))]),e._v(" @ "+e._s(e._f("moment")((t.tx.blk||{}).t,"from","now"))+"\n")]),n("router-link",{staticClass:"item",attrs:{to:{name:"page",params:{type:"tx",page:t.tx.tx.h}}}},[e._v("View")]),n("router-link",{staticClass:"item",attrs:{to:{name:"edit",params:{type:"tx",page:t.tx.tx.h}}}},[e._v("Restore")])],1)})],2),e.preview?n("div",[n("hr"),n("h1",[e._v("Verion Preview")]),n("hr"),n("div",{domProps:{innerHTML:e._s(e.preview)}})]):e._e()])},I=[],X={watch:{$route:function(e,t){this.display(e.params)}},data:function(){return{preview:"",recentChanges:[]}},methods:(D={display:function(){var e=Object(l["a"])(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,q.recentChanges({name:t.page});case 2:n=e.sent,this.recentChanges=n,console.log(n);case 5:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),show:function(){var e=Object(l["a"])(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,q.load({page:t,type:"tx"});case 2:n=e.sent,this.preview=q.marked(n.content);case 4:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},Object(R["a"])(D,"display",[w],Object.getOwnPropertyDescriptor(D,"display"),D),Object(R["a"])(D,"show",[w],Object.getOwnPropertyDescriptor(D,"show"),D),D),mounted:function(){var e=Object(l["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.display(this.$route.params);case 1:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},Y=X,ee=(n("90b5"),Object(k["a"])(Y,G,I,!1,null,null,null)),te=ee.exports,ne=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("router-link",{staticClass:"item",attrs:{to:{name:"home"}}},[e._v("Home")]),n("a",{staticClass:"item",attrs:{target:"_blank",href:"https://www.markdownguide.org/basic-syntax/"}},[e._v("Markdown Ref.")]),n("hr"),n("div",{staticStyle:{display:"flex"}},[n("div",[e._v("\n  Page\n  Name:"),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",size:"50",disabled:e.loaded},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),n("br"),e._v("\n  Markdown Content:"),n("br"),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.content,expression:"content"}],attrs:{rows:"30",cols:"80"},domProps:{value:e.content},on:{input:function(t){t.target.composing||(e.content=t.target.value)}}}),n("br"),n("MoneyButton",{attrs:{label:"Create/Update",devMode:!1,successMessage:"update done.",outputs:e.outputs}})],1),n("div",{staticStyle:{padding:"10px"}},[n("h1",[e._v("Preview")]),n("div",{domProps:{innerHTML:e._s(e.marked_content)}})])])],1)},re=[],ae=n("14cb"),ie=n.n(ae),oe=n("034f"),se=n.n(oe),ce={components:{MoneyButton:ie.a},data:function(){return{loaded:!1,name:"",content:""}},watch:{$route:function(e,t){this.load(e.params)}},computed:{marked_content:function(){return q.marked(this.content)},outputs:function(){var e=this.opReturn;return[{script:e,amount:"0",currency:"BSV"}]},opReturn:function(){var e=se.a.Script.buildSafeDataOut(["19HxigV4QyBv3tHpQVcUEQyq1pzZVdoAut",this.content,"text/markdown","utf8",this.name+".md"]);return console.log(e.toASM()),e.toASM()}},methods:(E={load:function(){var e=Object(l["a"])(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.loaded=!1,this.name=this.content="",e.next=4,q.load(t);case 4:n=e.sent,n?(this.loaded=!0,this.name=n.name,this.content=n.content):this.name="<new>"==t.page?"":t.page;case 6:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},Object(R["a"])(E,"load",[w],Object.getOwnPropertyDescriptor(E,"load"),E),E),mounted:function(){var e=Object(l["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.load(this.$route.params);case 2:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},ue=ce,le=Object(k["a"])(ue,ne,re,!1,null,null,null),pe=le.exports,de=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-link",{staticClass:"item",attrs:{to:{name:"edit",params:{page:"<new>"}}}},[e._v("Create Page")])},he=[],me={},fe=me,ve=Object(k["a"])(fe,de,he,!1,null,null,null),ge=ve.exports,we=n("c133");r["a"].use(we),r["a"].use(i["a"]),r["a"].use(a["a"]),r["a"].use(s.a),r["a"].use(n("e12b")),r["a"].component("create-link",ge);var be=[{path:"/history/:page",name:"history",component:te},{path:"/edit/:page/:type?",name:"edit",component:pe},{path:"/",name:"home",component:K},{path:"/wiki/:page/:type?",name:"page",component:U},{path:"*",redirect:"/"}],xe=new a["a"]({routes:be});_.router=xe,new r["a"](_).$mount("#app")},5:function(e,t){},6:function(e,t){},7175:function(e,t,n){},"90b5":function(e,t,n){"use strict";var r=n("7175"),a=n.n(r);a.a},e5cd:function(e,t,n){"use strict";var r=n("213a"),a=n.n(r);a.a}});
//# sourceMappingURL=app.29f2a134.js.map