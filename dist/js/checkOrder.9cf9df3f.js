(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["checkOrder"],{"4a23":function(e,a,r){"use strict";var s=r("5244"),t=r.n(s);t.a},5244:function(e,a,r){},"9d3b":function(e,a,r){"use strict";r.r(a);var s=function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("form",{staticClass:"info"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"useremail"}},[e._v("Email")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.user.email,expression:"form.user.email"},{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"}],staticClass:"form-control",class:{"is-invalid":e.errors.has("email")},attrs:{type:"email",name:"email",id:"useremail",placeholder:"請輸入 Email"},domProps:{value:e.form.user.email},on:{input:function(a){a.target.composing||e.$set(e.form.user,"email",a.target.value)}}}),e.errors.has("email")?r("h5",{staticClass:"text-danger"},[e._v(e._s(e.errors.first("email")))]):e._e()]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"username"}},[e._v("收件人姓名")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.user.name,expression:"form.user.name"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":e.errors.has("name")},attrs:{type:"text",name:"name",id:"username",placeholder:"輸入姓名"},domProps:{value:e.form.user.name},on:{input:function(a){a.target.composing||e.$set(e.form.user,"name",a.target.value)}}}),e.errors.has("name")?r("h5",{staticClass:"text-danger"},[e._v("必須輸入姓名")]):e._e()]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"usertel"}},[e._v("收件人電話")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.user.tel,expression:"form.user.tel"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":e.errors.has("tel")},attrs:{type:"tel",id:"usertel",name:"tel",placeholder:"請輸入電話"},domProps:{value:e.form.user.tel},on:{input:function(a){a.target.composing||e.$set(e.form.user,"tel",a.target.value)}}}),e.errors.has("tel")?r("h5",{staticClass:"text-danger"},[e._v("必須輸入電話")]):e._e()]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"useraddress"}},[e._v("收件人地址")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.user.address,expression:"form.user.address"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],staticClass:"form-control",class:{"is-invalid":e.errors.has("address")},attrs:{type:"text",name:"address",id:"useraddress",placeholder:"請輸入地址"},domProps:{value:e.form.user.address},on:{input:function(a){a.target.composing||e.$set(e.form.user,"address",a.target.value)}}}),e.errors.has("address")?r("h5",{staticClass:"text-danger"},[e._v("必須輸入地址")]):e._e()]),r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"comment"}},[e._v("留言")]),r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.form.message,expression:"form.message"}],staticClass:"form-control",attrs:{name:"",id:"comment",cols:"30",rows:"10"},domProps:{value:e.form.message},on:{input:function(a){a.target.composing||e.$set(e.form,"message",a.target.value)}}})]),r("button",{staticClass:"send",attrs:{type:"button"},on:{click:e.createOrder}},[e._v("送出訂單")])])},t=[],o={data:function(){return{form:{user:{address:"",email:"",name:"",tel:""}}}},methods:{createOrder:function(){var e=this;this.$store.dispatch("updateLoading",!0);var a="".concat("https://vue-course-api.hexschool.io","/api/adam/order");this.$validator.validate().then(function(r){r?e.$http.post(a,{data:e.form}).then(function(a){a.data.success&&(console.log("訂單已建立",a),e.$router.push("/check-out/check-pay/".concat(a.data.orderId)))}):console.log("欄位不完整"),e.$store.dispatch("updateLoading",!1)})}},created:function(){this.$bus.$emit("progress",1)}},i=o,l=(r("4a23"),r("2877")),n=Object(l["a"])(i,s,t,!1,null,"167f2f22",null);a["default"]=n.exports}}]);
//# sourceMappingURL=checkOrder.9cf9df3f.js.map