(function(t){function e(e){for(var r,a,c=e[0],i=e[1],s=e[2],f=0,p=[];f<c.length;f++)a=c[f],o[a]&&p.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);l&&l(e);while(p.length)p.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],r=!0,c=1;c<n.length;c++){var i=n[c];0!==o[i]&&(r=!1)}r&&(u.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},o={app:0},u=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var l=i;u.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"034f":function(t,e,n){"use strict";var r=n("64a9"),o=n.n(r);o.a},"64a9":function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("HelloWorld")],1)},u=[],a=n("d225"),c=n("308d"),i=n("6bb5"),s=n("4e2b"),l=n("9ab4"),f=n("60a3"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[t.loading?n("div",[t._v("loading...")]):t._e(),t._l(t.memos,function(e){return n("div",[t._v("\n"+t._s(t._f("moment")(e.t,"YYYY-MM-DD HH:mm"))+"\n"),n("hr"),n("div",{domProps:{innerHTML:t._s(e.html)}}),n("a",{attrs:{href:"https://www.bitpaste.app/tx/"+e.tx}},[t._v("...")])])})],2)},d=[],b=n("f499"),h=n.n(b),v=(n("ac6a"),n("96cf"),n("3b8d")),m=n("b0b4"),g=n("7186"),y=g,x=new y,j=function(t){function e(){var t;return Object(a["a"])(this,e),t=Object(c["a"])(this,Object(i["a"])(e).apply(this,arguments)),t.memo={},t.memos=[],t.loading=!1,t}return Object(s["a"])(e,t),Object(m["a"])(e,[{key:"mounted",value:function(){var t=Object(v["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=location.hash.substring(1),this.loading=!0,t.next=4,this.getPosts(e);case 4:this.memos=t.sent,this.memos.filter(function(t){return t.content}).forEach(function(t){console.log(t.content),t.html=x.render(t.content)}),this.loading=!1;case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()},{key:"getPosts",value:function(){var t=Object(v["a"])(regeneratorRuntime.mark(function t(e){var n,r,o,u,a,c,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n={v:3,q:{find:{"out.s1":"19HxigV4QyBv3tHpQVcUEQyq1pzZVdoAut","out.s7":"15PciHG22SNLQJXMoSUaWVi7WSqc7hCfva","out.s9":e},limit:10},r:{f:"[.[] | { content: .out[0].ls2, content1: .out[0].s2, s1: .out[0].s1, s3: .out[0].s3, tx:.tx.h, t: .blk.t} ]"}},r=btoa(h()(n)),o="https://genesis.bitdb.network/q/1FnauZ9aUH2Bex6JzdcV4eNX7oLSSEbxtN/"+r,u={headers:{key:"174MzsMvzRZymoojUPq5UqPxrpdwZhHBy9"}},console.log(h()(n)),t.next=7,fetch(o,u);case 7:return t.next=9,t.sent.json();case 9:return a=t.sent,c=a.u.concat(a.c),i=["text/markdown"],c=c.filter(function(t){return i.indexOf(t.s3)>=0}).filter(function(t){return t.content||t.content1}),t.abrupt("return",c.map(function(t){return{tx:t.tx,content:t.content||t.content1,t:t.t}}));case 14:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}()}]),e}(f["b"]);j=l["a"]([f["a"]],j);var O=j,w=O,_=n("2877"),P=Object(_["a"])(w,p,d,!1,null,"40ddfc8a",null),k=P.exports,H=function(t){function e(){return Object(a["a"])(this,e),Object(c["a"])(this,Object(i["a"])(e).apply(this,arguments))}return Object(s["a"])(e,t),e}(f["b"]);H=l["a"]([Object(f["a"])({components:{HelloWorld:k}})],H);var M=H,S=M,q=(n("034f"),Object(_["a"])(S,o,u,!1,null,null,null)),E=q.exports;r["default"].config.productionTip=!1,r["default"].use(n("e12b")),new r["default"]({render:function(t){return t(E)}}).$mount("#app")}});
//# sourceMappingURL=app.6672ac05.js.map