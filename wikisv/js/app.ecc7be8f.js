(function(e){function t(t){for(var r,i,u=t[0],s=t[1],c=t[2],p=0,d=[];p<u.length;p++)i=u[p],a[i]&&d.push(a[i][0]),a[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(d.length)d.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,u=1;u<n.length;u++){var s=n[u];0!==a[s]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var l=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("41f5")},1:function(e,t){},2:function(e,t){},3:function(e,t){},4:function(e,t){},"41f5":function(e,t,n){"use strict";n.r(t);n("5ebc"),n("dc41"),n("79b8"),n("f741");var r=n("54e1"),a=n("c478"),o=n("08a0"),i=n.n(o),u=(n("046b"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("router-view")],1)}),s=[],c={},l=c,p=n("6691"),d=Object(p["a"])(l,u,s,!1,null,null,null),f=d.exports,h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("loading",{attrs:{active:e.isLoading,"is-full-page":!0},on:{"update:active":function(t){e.isLoading=t}}}),e.loadingFailMessage?n("div",[e._v("Loading failed ("+e._s(e.loadingFailMessage)+"). Please "),n("button",{attrs:{onclick:"location.reload();"}},[e._v("refresh")])]):e._e(),e.content?n("div",[n("div",{domProps:{innerHTML:e._s(e.content)}})]):n("div",[e._v("\nNot found"),n("br"),n("router-link",{attrs:{to:{name:"edit",params:{page:e.$route.params.name}}}},[e._v("Create "+e._s(e.$route.params.name))])],1)],1)},m=[],v=(n("3efa"),n("dccd")),g=(n("43fd"),n("cb80"),n("8bab")),b=n("9a2a"),w=function(){function e(){Object(g["a"])(this,e)}return Object(b["a"])(e,[{key:"load",value:function(){var e=Object(v["a"])(regeneratorRuntime.mark(function e(t){var n,r,a,o,i,u,s,c;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.name,r={v:3,q:{find:{out:{$elemMatch:{s1:"19HxigV4QyBv3tHpQVcUEQyq1pzZVdoAut",s3:"text/markdown",s5:{$in:[n,n+".md"]}}}},project:{"out.b2":1,"out.s2":1,"out.s5":1},sort:{"blk.i":-1,i:-1},limit:2}},t.txid&&(r.q.find={"tx.h":t.txid}),a=btoa(JSON.stringify(r)),o="https://neongenesis.bitdb.network/q/1HcBPzWoKDL2FhCMbocQmLuFTYsiD73u1j/"+a,i={headers:{key:"18doZeakgc7BeKs2L1ZWKMnoJnRQmoJy2i"}},e.next=8,fetch(o,i);case 8:return e.next=10,e.sent.json();case 10:if(u=e.sent,s=u.u[0]||u.c[0],s){e.next=14;break}return e.abrupt("return",s);case 14:return c=s.out[0].s2,e.abrupt("return",{content:c,tx:s});case 16:case"end":return e.stop()}},e)}));function t(t){return e.apply(this,arguments)}return t}()}]),e}(),y=new w,x=n("2909"),k=new x.Renderer,O=k.link;k.link=function(e,t,n){Array.prototype.slice.call(arguments);var r="wiki:";if(e.substring(0,r.length)==r){var a=e.substring(r.length),o=t?' title="'.concat(t,'"'):"";return'<a href="#/wiki/'.concat(a,'" ').concat(o,">").concat(n,"</a>")}return O.apply(this,[e,t,n])},x.setOptions({breaks:!0,link:function(e){return{href:"wiki:"+e[1],title:null}},renderer:k});var j={components:{Loading:i.a},watch:{$route:function(e,t){console.log(e,t),this.display(e.params)}},data:function(){return{content:"",loadingFailMessage:"",isLoading:!1,loaded:!1}},methods:{display:function(){var e=Object(v["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.loadingFailMessage="",this.isLoading=!0,e.prev=2,e.next=5,this.display1(t);case 5:return e.abrupt("return",e.sent);case 8:throw e.prev=8,e.t0=e["catch"](2),this.loadingFailMessage=""+e.t0,e.t0;case 12:return e.prev=12,this.isLoading=!1,e.finish(12);case 15:case"end":return e.stop()}},e,this,[[2,8,12,15]])}));function t(t){return e.apply(this,arguments)}return t}(),display1:function(){var e=Object(v["a"])(regeneratorRuntime.mark(function e(t){var n,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,y.load(t);case 2:n=e.sent,r=n?n.content:"",this.loaded=!0,console.log(n),this.content=x(r);case 7:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},mounted:function(){var e=Object(v["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.display(this.$route.params);case 1:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},_=j,M=Object(p["a"])(_,h,m,!1,null,null,null),R=M.exports,$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v("\n  Page\n  Name:"),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",size:"50",disabled:e.loaded},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),n("br"),e._v("\n  Markdown Content:"),n("br"),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.content,expression:"content"}],attrs:{rows:"30",cols:"80"},domProps:{value:e.content},on:{input:function(t){t.target.composing||(e.content=t.target.value)}}}),n("br"),n("MoneyButton",{attrs:{label:"Create/Update",devMode:0,to:'1570',amount:0.001,currency:"USD",successMessage:"update done.",opReturn:e.opReturn,}})],1)},P=[],L=n("14cb"),S=n.n(L),Q=n("034f"),B=n.n(Q),F={components:{MoneyButton:S.a},data:function(){return{loaded:!1,name:"",content:""}},watch:{$route:function(e,t){this.load(e.params)}},computed:{opReturn:function(){var e=B.a.Script.buildSafeDataOut(["19HxigV4QyBv3tHpQVcUEQyq1pzZVdoAut",this.content,"text/markdown","utf8",this.name+".md"]);return console.log(e.toASM()),e.toASM()}},methods:{load:function(){var e=Object(v["a"])(regeneratorRuntime.mark(function e(t){var n,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.loaded=!1,this.name=this.content="",n=this.$loading.show(),e.prev=3,e.next=6,y.load({name:t.page});case 6:r=e.sent,r&&(this.loaded=!0,this.name=t.page,this.content=r.content);case 8:return e.prev=8,n.hide(),e.finish(8);case 11:case"end":return e.stop()}},e,this,[[3,,8,11]])}));function t(t){return e.apply(this,arguments)}return t}()},mounted:function(){var e=Object(v["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.load(this.$route.params);case 2:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},V=F,E=Object(p["a"])(V,$,P,!1,null,null,null),H=E.exports;r["a"].use(a["a"]),r["a"].use(i.a);var q=document.createElement("div");document.body.appendChild(q);var A=[{path:"/edit/:page",name:"edit",component:H},{path:"/tx/:txid",component:R},{path:"/wiki/:name",component:R}],C=new a["a"]({routes:A});f.router=C,new r["a"](f).$mount(q)},5:function(e,t){},6:function(e,t){}});
//# sourceMappingURL=app.ecc7be8f.js.map
