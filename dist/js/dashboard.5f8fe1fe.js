(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["dashboard"],{"09ec":function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("navbar"),s("Alert"),s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},[s("sidebar"),s("main",{staticClass:"col-md-9 ml-sm-auto col-lg-10 px-4",attrs:{role:"main"}},[s("router-view")],1)],1)])],1)},n=[],i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("nav",{staticClass:"navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow"},[s("router-link",{staticClass:"navbar-brand col-sm-3 col-md-2 mr-0 text-center",attrs:{to:"/"}},[t._v("\n    首頁\n    "),s("i",{staticClass:"fas fa-home"})]),s("input",{staticClass:"form-control form-control-dark w-100",attrs:{type:"text",placeholder:"Search","aria-label":"Search"}}),s("ul",{staticClass:"navbar-nav px-3"},[s("li",{staticClass:"nav-item text-nowrap"},[s("a",{staticClass:"nav-link",attrs:{href:"#"},on:{click:t.signout}},[t._v("Sign out")])])])],1)},l=[],r={methods:{signout:function(){var t=this,a="".concat("https://vue-course-api.hexschool.io","/logout");this.$http.post(a).then(function(a){console.log(a.data),a.data.success&&t.$router.push("/login")})}}},c=r,o=s("2877"),u=Object(o["a"])(c,i,l,!1,null,null,null),m=u.exports,d=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("nav",{staticClass:"col-md-2 d-none d-md-block bg-light sidebar"},[s("div",{staticClass:"sidebar-sticky"},[t._m(0),s("ul",{staticClass:"nav flex-column mb-2"},[s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/admin"}},[s("i",{staticClass:"fas fa-box-open"}),t._v("\n          產品列表\n        ")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/admin/orders"}},[s("i",{staticClass:"far fa-list-alt"}),t._v("\n          訂單列表\n        ")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/admin/coupon"}},[s("i",{staticClass:"far fa-money-bill-alt"}),t._v("\n          優惠券\n        ")])],1)])])])},f=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("h6",{staticClass:"sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted"},[s("span",[t._v("管理員")]),s("a",{staticClass:"d-flex align-items-center text-muted",attrs:{href:"#"}},[s("span",{attrs:{"data-feather":"plus-circle"}})])])}],v={},h=Object(o["a"])(v,d,f,!1,null,null,null),p=h.exports,b=s("56a6"),g={components:{navbar:m,sidebar:p,Alert:b["a"]}},C=g,_=Object(o["a"])(C,e,n,!1,null,null,null);a["default"]=_.exports},"4a2f":function(t,a,s){"use strict";var e=s("dfbe"),n=s.n(e);n.a},"56a6":function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"message-alert"},t._l(t.messages,function(a,e){return s("div",{key:e,staticClass:"alert alert-dismissible",class:"alert-"+a.status},[t._v("\n    "+t._s(a.message)+"\n    "),s("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:function(a){return t.removeMessage(e)}}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}),0)},n=[],i=(s("ac6a"),{data:function(){return{messages:[]}},methods:{updateMessage:function(t,a){var s=Math.floor(new Date/1e3);this.messages.push({message:t,status:a,timestamp:s}),this.removeMessageWithTiming(s)},removeMessage:function(t){this.messages.splice(t,1)},removeMessageWithTiming:function(t){var a=this;setTimeout(function(){a.messages.forEach(function(s,e){s.timestamp===t&&a.messages.splice(e,1)})},5e3)}},created:function(){var t=this;t.$bus.$on("push",function(a){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"warning";t.updateMessage(a,s)})}}),l=i,r=(s("4a2f"),s("2877")),c=Object(r["a"])(l,e,n,!1,null,null,null);a["a"]=c.exports},dfbe:function(t,a,s){}}]);
//# sourceMappingURL=dashboard.5f8fe1fe.js.map