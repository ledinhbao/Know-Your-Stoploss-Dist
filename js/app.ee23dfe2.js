(function(t){function e(e){for(var s,i,l=e[0],r=e[1],c=e[2],p=0,f=[];p<l.length;p++)i=l[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s]);u&&u(e);while(f.length)f.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,l=1;l<a.length;l++){var r=a[l];0!==o[r]&&(s=!1)}s&&(n.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},o={app:0},n=[];function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=r;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("cd49")},"034f":function(t,e,a){"use strict";var s=a("85ec"),o=a.n(s);o.a},"301d":function(t,e,a){"use strict";var s=a("d2b1"),o=a.n(s);o.a},"30a9":function(t,e,a){},"574d":function(t,e,a){"use strict";var s=a("9dc9"),o=a.n(s);o.a},"69c2":function(t,e,a){},"85ec":function(t,e,a){},"9d64":function(t,e,a){"use strict";var s=a("30a9"),o=a.n(s);o.a},"9dc9":function(t,e,a){},b640:function(t,e,a){t.exports=a.p+"img/logo.88491b85.jpg"},cd49:function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container",attrs:{id:"app"}},[t._m(0),a("div",{staticClass:"columns is-centered"},[a("div",{staticClass:"column is-one-third-desktop is-two-thirds-tablet"},[a("Calculator")],1)]),t._m(1)])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-centered"},[s("figure",{staticClass:"image is-128x128 has-image-centered"},[s("img",{attrs:{src:a("b640"),alt:""}})])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"columns is-centered"},[a("div",{staticClass:"column is-one-third-desktop is-two-thirds-tablet"},[a("p",{staticClass:"is-italic"},[t._v(" Nếu công cụ này hữu ích cho anh/chị, hãy mua cho tác giả "),a("a",{attrs:{href:"https://drive.google.com/open?id=1ccoCFxrVrpxT_M2go-6TvfUj5KnW9_lo",target:"_blank"}},[t._v(" một ly cafe ")]),t._v(" để tác giả tỉnh ngủ và đưa ra nhiều tính năng mới nhé. ")]),a("br"),a("p",{staticClass:"is-italic"},[t._v(" Số liệu tính theo sàn FXPrimus, chỉ đảm bảo chính xác 95%. Đăng ký giao dịch với FXPrimus bằng "),a("a",{attrs:{href:"https://bit.ly/baobao18-fxprimus",target:"_blank"}},[t._v(" link này ")]),t._v(" để được miễn phí qua đêm (Swap). ")]),a("p",[t._v(" 2020 © Team Kiếm Cơm, by "),a("a",{staticClass:"is-primary",attrs:{href:"https://www.facebook.com/baobao18.runner",target:"_blank"}},[t._v(" baobao18 ")])])])])}],i=a("d4ec"),l=a("262e"),r=a("2caf"),c=a("9ab4"),u=a("60a3"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("EntryStoplossCalculator",{attrs:{title:t.types[1],pairs:t.pairs},on:{calculated:t.resultCalculated}}),a("Result",{attrs:{value:t.lossResult},on:{"update:value":function(e){t.lossResult=e}}})],1)},f=[],d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"message is-primary"},[a("p",{staticClass:"message-header"},[t._v(" "+t._s(t.title)+" "),a("button",{staticClass:"button is-small question is-link is-light",attrs:{"aria-label":"help"}},[a("span",[a("font-awesome-icon",{attrs:{icon:"question"}})],1)])]),a("div",{staticClass:"message-body"},[a("div",{staticClass:"field"},[a("div",{staticClass:"control"},[a("label",{attrs:{for:"point"}},[t._v("Số points trong MT4")]),a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.point,expression:"point",modifiers:{number:!0}}],staticClass:"input",attrs:{name:"point",type:"number",autocomplete:"off"},domProps:{value:t.point},on:{focus:function(t){return t.target.select()},input:function(e){e.target.composing||(t.point=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})])]),a("div",{staticClass:"field"},[a("div",{staticClass:"control"},[a("label",{attrs:{for:"point"}},[t._v("Khối lượng")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.volume,expression:"volume"}],staticClass:"input",attrs:{name:"point",type:"text",autocomplete:"off"},domProps:{value:t.volume},on:{focus:function(t){return t.target.select()},keydown:t.volumeKeyPressed,input:function(e){e.target.composing||(t.volume=e.target.value)}}}),a("p",{staticClass:"input-note"},[t._v(" Dùng phím mũi tên lên/xuống để tăng/giảm 0.01. ")])])]),a("div",{staticClass:"field"},[t._m(0),a("div",{staticClass:"control has-icons-left"},[a("div",{staticClass:"select is-fullwidth"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.pairIndex,expression:"pairIndex"}],staticClass:"is-fullwidth",attrs:{name:"pair",id:"pair"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.pairIndex=e.target.multiple?a:a[0]}}},t._l(t.pairs,(function(e,s){return a("option",{key:e.index,domProps:{value:s}},[t._v(" "+t._s(e.name)+" ")])})),0)]),a("span",{staticClass:"icon is-left"},[a("font-awesome-icon",{attrs:{icon:"coins"}})],1)])])])])},m=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"control"},[a("label",{attrs:{for:"pair"}},[t._v("Cặp tiền tệ")])])}],v={props:["title","pairs"],data:function(){return{message:"Hello",point:1e3,volume:.01,pairIndex:0,bufferResult:.01*this.pairs[0].value}},methods:{calculate:function(){var t=this.pairs[this.pairIndex].value;this.bufferResult=this.volume*t*this.point/1e3,this.$emit("calculated",this.bufferResult)},volumeKeyPressed:function(t){if(38==t.keyCode)this.volume=(Math.round(100*this.volume)+1)/100;else if(40==t.keyCode){var e=Math.round(100*this.volume);e>0&&(this.volume=(e-1)/100)}},pointKeyMonitor:function(t){38==t.keyCode?this.point+=1:40==t.keyCode&&this.point>0&&(this.point-=1)}},watch:{volume:function(t){localStorage.volume=t,this.calculate()},point:function(t){localStorage.point=t,this.calculate()},pairIndex:function(t){localStorage.pairIndex=t,this.calculate()}},computed:{},mounted:function(){localStorage.volume&&(this.volume=localStorage.volume),localStorage.point&&(this.point=localStorage.point),localStorage.pairIndex&&(this.pairIndex=localStorage.pairIndex)}},h=v,g=(a("9d64"),a("2877")),b=Object(g["a"])(h,d,m,!1,null,"2c0af4de",null),y=(b.exports,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"message is-primary"},[a("p",{staticClass:"message-header"},[t._v(" "+t._s(t.title)+" "),a("button",{staticClass:"button is-small question is-link is-light",attrs:{"aria-label":"help"}},[a("span",[a("font-awesome-icon",{attrs:{icon:"question"}})],1)])]),a("div",{staticClass:"message-body"},[a("div",{staticClass:"field"},[a("div",{staticClass:"control"},[a("label",{attrs:{for:"point"}},[t._v("Điểm vào lệnh")]),a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.entry,expression:"entry",modifiers:{number:!0}}],staticClass:"input",attrs:{name:"point",autocomplete:"off"},domProps:{value:t.entry},on:{focus:function(t){return t.target.select()},input:function(e){e.target.composing||(t.entry=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})])]),a("div",{staticClass:"field"},[a("div",{staticClass:"control"},[a("label",{attrs:{for:"point"}},[t._v("Điểm stoploss")]),a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.stoploss,expression:"stoploss",modifiers:{number:!0}}],staticClass:"input",attrs:{name:"point",autocomplete:"off"},domProps:{value:t.stoploss},on:{focus:function(t){return t.target.select()},input:function(e){e.target.composing||(t.stoploss=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})])]),a("div",{staticClass:"field"},[a("div",{staticClass:"control"},[a("label",{attrs:{for:"point"}},[t._v("Khối lượng")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.volume,expression:"volume"}],staticClass:"input",attrs:{name:"point",type:"text",autocomplete:"off"},domProps:{value:t.volume},on:{focus:function(t){return t.target.select()},keydown:t.volumeKeyPressed,input:function(e){e.target.composing||(t.volume=e.target.value)}}}),a("p",{staticClass:"input-note"},[t._v(" Dùng phím mũi tên lên/xuống để tăng/giảm 0.01. ")])])]),a("div",{staticClass:"field"},[t._m(0),a("div",{staticClass:"control has-icons-left"},[a("div",{staticClass:"select is-fullwidth"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.pairIndex,expression:"pairIndex"}],staticClass:"is-fullwidth",attrs:{name:"pair",id:"pair"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.pairIndex=e.target.multiple?a:a[0]}}},t._l(t.pairs,(function(e,s){return a("option",{key:e.index,domProps:{value:s}},[t._v(" "+t._s(e.name)+" ")])})),0)]),a("span",{staticClass:"icon is-left"},[a("font-awesome-icon",{attrs:{icon:"coins"}})],1)])])])])}),C=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"control"},[a("label",{attrs:{for:"pair"}},[t._v("Cặp tiền tệ")])])}],_={props:["title","pairs"],data:function(){return{message:"Hello",point:1e3,entry:1234.56,stoploss:1234.67,float:100,volume:.01,pairIndex:0,bufferResult:.01*this.pairs[0].value}},methods:{calculate:function(){var t=this.pairs[this.pairIndex].value,e=Math.abs(this.entry-this.stoploss)*this.float;this.bufferResult=this.volume*t*e/1e3,this.$emit("calculated",this.bufferResult)},volumeKeyPressed:function(t){if(38==t.keyCode)this.volume=(Math.round(100*this.volume)+1)/100;else if(40==t.keyCode){var e=Math.round(100*this.volume);e>0&&(this.volume=(e-1)/100)}},pointKeyMonitor:function(t){38==t.keyCode?this.point+=1:40==t.keyCode&&this.point>0&&(this.point-=1)}},watch:{volume:function(t){localStorage.volume=t,this.calculate()},point:function(t){localStorage.point=t,this.calculate()},pairIndex:function(t){localStorage.pairIndex=t,localStorage.pairFloat=this.pairs[t].float,this.entry=this.entry*this.float/this.pairs[t].float,this.stoploss=this.stoploss*this.float/this.pairs[t].float,this.float=this.pairs[t].float,this.calculate()},entry:function(t){localStorage.entry=t,this.calculate()},stoploss:function(t){localStorage.stoploss=t,this.calculate()}},computed:{},mounted:function(){localStorage.volume&&(this.volume=localStorage.volume),localStorage.point&&(this.point=localStorage.point),localStorage.pairIndex&&(this.pairIndex=localStorage.pairIndex,this.float=localStorage.pairFloat),localStorage.entry&&(this.entry=localStorage.entry),localStorage.stoploss&&(this.stoploss=localStorage.stoploss)}},x=_,S=(a("301d"),Object(g["a"])(x,y,C,!1,null,"1a901826",null)),w=S.exports,k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"message is-primary"},[a("p",{staticClass:"message-header"},[t._v("Ước lượng số tiền lỗ")]),a("p",{staticClass:"lossResult"},[t._v("- $"+t._s(Number((1*t.value).toFixed(2))))])])},P=[],j={props:["value"]},I=j,O=(a("574d"),Object(g["a"])(I,k,P,!1,null,"7d7e55c7",null)),$=O.exports,U={data:function(){return{title:"Welcome",volume:.01,point:488,type:-1,lossResult:10,types:["Tính stoploss theo points","Nhập giá vào lệnh & stoploss"],pairIndex:0,pairs:[{name:"XAU/USD (Vàng)",value:1e3,float:100},{name:"USD/CAD",value:710.51,float:1e5},{name:"USD/JPY",value:930.57,float:1e5},{name:"USD/SGD",value:701.5,float:1e5},{name:"AUD/USD",value:1e3,float:1e5},{name:"EUR/USD",value:1e3,float:1e5},{name:"GBP/USD",value:1e3,float:1e5},{name:"NZD/USD",value:1e3,float:1e5}]}},methods:{resultCalculated:function(t){this.lossResult=t}},components:{EntryStoplossCalculator:w,Result:$},computed:{}},D=U,R=Object(g["a"])(D,p,f,!1,null,null,null),M=R.exports,E=function(t){Object(l["a"])(a,t);var e=Object(r["a"])(a);function a(){return Object(i["a"])(this,a),e.apply(this,arguments)}return a}(u["b"]);E=Object(c["a"])([Object(u["a"])({components:{Calculator:M}})],E);var N=E,K=N,T=(a("034f"),Object(g["a"])(K,o,n,!1,null,null,null)),F=T.exports,q=a("2f62");s["a"].use(q["a"]);var A=new q["a"].Store({state:{},mutations:{},actions:{},modules:{}}),J=(a("92c6"),a("ecee")),X=a("c074"),G=a("ad3d");J["c"].add(X["a"]),J["c"].add(X["b"]),J["c"].add(X["c"]),s["a"].component("font-awesome-icon",G["a"]),s["a"].config.productionTip=!1,a("69c2"),new s["a"]({store:A,render:function(t){return t(F)}}).$mount("#app")},d2b1:function(t,e,a){}});
//# sourceMappingURL=app.ee23dfe2.js.map