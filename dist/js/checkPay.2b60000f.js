(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["checkPay"],{"0d7b":function(t,s,e){},"38fb":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container all"},[e("div",{staticClass:"goods"},[e("div",{staticClass:"goods-title"},[t._v("商品資訊")]),e("table",{staticClass:"table goods-table"},[t._m(0),e("tbody",t._l(t.order.products,function(s){return e("tr",{key:s.id},[e("td",[t._v(t._s(s.product.title))]),e("td",[t._v(t._s(s.qty)+"/"+t._s(s.product.unit))]),e("td",[t._v(t._s(t._f("currency")(s.final_total)))])])}),0),e("tfoot",[e("tr",[e("td",{staticClass:"goods-table-sum",attrs:{colspan:"3"}},[t._v("總計"+t._s(t._f("currency")(t.order.total)))])])])])]),e("div",{staticClass:"info"},[e("div",{staticClass:"info-title"},[t._v("聯絡人資訊")]),e("table",{staticClass:"table info-table"},[e("tbody",[e("tr",[e("th",[t._v("Email")]),e("td",[t._v(t._s(t.order.user.email))])]),e("tr",[e("th",[t._v("姓名")]),e("td",[t._v(t._s(t.order.user.name))])]),e("tr",[e("th",[t._v("收件人電話")]),e("td",[t._v(t._s(t.order.user.tel))])]),e("tr",[e("th",[t._v("收件人地址")]),e("td",[t._v(t._s(t.order.user.address))])]),e("tr",[e("th",[t._v("付款狀態")]),e("td",[t.order.is_paid?e("span",{staticClass:"pay"},[t._v("付款完成")]):e("span",{staticClass:"not"},[t._v("尚未付款")])])])])])]),!1===t.order.is_paid?e("div",{staticClass:"route"},[e("router-link",{staticClass:"route-home",attrs:{to:"/"}},[t._v("繼續購物")]),e("div",{staticClass:"route-pay",on:{click:t.payOrder}},[t._v("確認付款")])],1):t._e()])},r=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("thead",[e("th",[t._v("品名")]),e("th",[t._v("數量")]),e("th",[t._v("單價")])])}],i=e("d588"),o={data:function(){return{isLoading:!1,orderId:"",order:{user:{}}}},methods:{getOrder:function(){var t=this;this.$store.dispatch("updateLoading",!0),this.$http.get("".concat("https://vue-course-api.hexschool.io","/api/adam/order/").concat(this.orderId)).then(function(s){console.log(s),t.order=s.data.order,t.$store.dispatch("updateLoading",!1)})},payOrder:function(){var t=this;this.$http.post("".concat("https://vue-course-api.hexschool.io","/api/adam/pay/").concat(this.orderId)).then(function(s){console.log(s),s.data.success&&(t.getOrder(),t.$router.push("/check-out/check-ok"))})}},created:function(){this.orderId=this.$route.params.orderId,this.getOrder(),this.$bus.$emit("progress",2),this.$bus.$emit("show")},components:{progresses:i["a"]}},c=o,n=(e("b726"),e("2877")),d=Object(n["a"])(c,a,r,!1,null,"43f9021b",null);s["default"]=d.exports},b726:function(t,s,e){"use strict";var a=e("f363"),r=e.n(a);r.a},d588:function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"prog container"},[e("div",{ref:"prog-item1",staticClass:"prog-item phase"},[e("div",{staticClass:"prog-item-num"},[t._v("1")]),e("div",{staticClass:"prog-item-name"},[t._v("輸入訂單資料")]),e("i",{staticClass:"fas fa-angle-right prog-item-arrow"})]),e("div",{ref:"prog-item2",staticClass:"prog-item"},[e("div",{staticClass:"prog-item-num"},[t._v("2")]),e("div",{staticClass:"prog-item-name"},[t._v("確認付款")]),e("i",{staticClass:"fas fa-angle-right prog-item-arrow"})]),e("div",{ref:"prog-item3",staticClass:"prog-item"},[e("div",{staticClass:"prog-item-num center"},[t._v("3")]),e("div",{staticClass:"prog-item-name center2"},[t._v("完成")])])])},r=[],i={created:function(){var t=this;this.$bus.$on("progress",function(s){var e=[1,2,3];e.forEach(function(e){e===s?t.$refs["prog-item".concat(s)].classList.add("phase"):t.$refs["prog-item".concat(e)].classList.remove("phase")})})}},o=i,c=(e("fc58"),e("2877")),n=Object(c["a"])(o,a,r,!1,null,"723fec5f",null);s["a"]=n.exports},f363:function(t,s,e){},fc58:function(t,s,e){"use strict";var a=e("0d7b"),r=e.n(a);r.a}}]);
//# sourceMappingURL=checkPay.2b60000f.js.map