(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-63a4645f"],{"021e":function(t,e,s){},"04b6":function(t,e,s){"use strict";var n=s("b010"),c=s.n(n);c.a},"4bc1":function(t,e,s){t.exports=s.p+"img/moon.5082c432.png"},"5ced":function(t,e,s){},b010:function(t,e,s){},b45c:function(t,e,s){"use strict";var n=s("021e"),c=s.n(n);c.a},bb51:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("div",{staticClass:"container-fluid space"},[s("header",{staticClass:"h-25"},[s("div",{staticClass:"row p-5"},[s("div",{staticClass:"col-3"},[s("h2",{staticClass:"text-light"},[t._v("Inventory")]),s("inventory")],1),t._m(0),s("div",{staticClass:"col-3"},[s("score")],1)])]),s("div",{staticClass:"container"},[s("main",[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 m-auto text-center"},[s("moon")],1)]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 m-auto text-center"},[s("upgrade",{staticClass:"pt-"})],1)])])])])])},c=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-6 text-light"},[s("h1",[t._v("Moon Miner")])])}],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("h1",{staticClass:"text-light"},[t._v(t._s(t.cheeseCount))]),n("h3",{staticClass:"text-light"},[t._v("Pieces of Cheese")])]),n("div",{staticClass:"pb-2 moon-container"},[n("img",{staticClass:"moon",attrs:{src:s("4bc1"),alt:""},on:{click:t.mine}})])])},a=[],o={name:"Moon",methods:{mine:function(){this.$store.dispatch("collectCheese")}},computed:{cheeseCount:function(){return this.$store.state.cheeseCount}}},r=o,l=(s("04b6"),s("2877")),u=Object(l["a"])(r,i,a,!1,null,null,null),h=u.exports,d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"d-flex justify-content-around"},t._l(t.upgrades,(function(e){return s("div",{key:e.id},[s("img",{attrs:{src:e.img,height:"100"},on:{click:function(s){return t.buy(e)}}}),s("p",{staticClass:"pt-4 text-light h"},[t._v(" Cost: "),s("b",[t._v(t._s(e.price))])]),t._m(0,!0)])})),0)},v=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"text-light m-auto"},[s("b",[t._v("Pieces of Cheese")])])}],p={name:"Upgrade",props:{upgrade:{type:Object}},methods:{buy:function(t){this.$store.dispatch("buy",t)}},computed:{upgrades:function(){return this.$store.state.upgrades},cheeseCount:function(){return this.$store.state.cheeseCount}}},m=p,f=(s("b45c"),Object(l["a"])(m,d,v,!1,null,null,null)),C=f.exports,_=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",t._l(t.upgrades,(function(e){return s("div",{key:e.id},[s("img",{attrs:{src:e.img,height:"30"}}),s("p",{staticClass:"text-light"},[t._v(" Quantity: "),s("b",[t._v(t._s(e.quantity))])]),s("p",{staticClass:"text-light"},[s("b",[t._v("+"+t._s(e.multiplier))]),t._v(" per click ")])])})),0)},b=[],g={name:"Inventory",computed:{upgrades:function(){return this.$store.state.upgrades}}},x=g,$=Object(l["a"])(x,_,b,!1,null,null,null),y=$.exports,w=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._m(0),s("h1",{staticClass:"text-light h-5"},[t._v(t._s(t.totalCount))])])},k=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h2",{staticClass:"text-light"},[s("b",[t._v("Total Cheese Collected")])])}],E={computed:{totalCount:function(){return this.$store.state.totalCount}}},j=E,O=Object(l["a"])(j,w,k,!1,null,null,null),M=O.exports,I={name:"Home",components:{Moon:h,Upgrade:C,Score:M,Inventory:y},methods:{},computed:{cheeseCount:function(){return this.$store.state.cheeseCount}}},J=I,P=(s("cccb"),Object(l["a"])(J,n,c,!1,null,null,null));e["default"]=P.exports},cccb:function(t,e,s){"use strict";var n=s("5ced"),c=s.n(n);c.a}}]);
//# sourceMappingURL=chunk-63a4645f.8fc7bc9d.js.map