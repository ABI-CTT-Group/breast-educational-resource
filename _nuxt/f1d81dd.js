(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{323:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var o=n(517),r=n(2),c=Object(r.f)("v-card__actions"),l=Object(r.f)("v-card__subtitle"),d=Object(r.f)("v-card__text"),v=Object(r.f)("v-card__title");o.a},546:function(t,e,n){var content=n(568);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(30).default)("193fab11",content,!0,{sourceMap:!1})},567:function(t,e,n){"use strict";n(546)},568:function(t,e,n){var o=n(29)((function(i){return i[1]}));o.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Inria+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap);"]),o.push([t.i,".navigate[data-v-45249990]{align-items:center;padding-bottom:2rem;padding-top:4rem;row-gap:1.5rem}.navigate .button[data-v-45249990]{border-radius:1.25rem;max-width:16rem;padding:1.2rem;text-align:center;width:80%}.navigate .button span[data-v-45249990]{font-size:1.3rem;font-weight:600}.navigate .button.--active[data-v-45249990]{background-color:rgba(150,30,150,.6);color:#fff}.navigate .button.--inactive[data-v-45249990]{background-color:hsla(0,0%,100%,.2);color:#afafaf}.contributor[data-v-45249990]{background-color:rgba(150,30,150,.3)}.about-panel[data-v-45249990]{display:flex;flex-direction:column;height:75vh;justify-content:space-around}.feedback[data-v-45249990]{line-height:2rem;padding:1rem}.feedback a[data-v-45249990]{color:#ff0}.select[data-v-45249990]{width:127px}.v-input__slot[data-v-45249990]{background:#fff}.theme--dark.v-list[data-v-45249990]{background:rgba(150,30,150,.5)}",""]),o.locals={},t.exports=o},583:function(t,e,n){"use strict";n.r(e);var o=n(518),r=n(323),c={name:"AboutUs",data:function(){return{teamSelected:!1,researchSelected:!0,select:"",items:["latest","version 2.0","version 1.0"]}},methods:{toggleNavigation:function(t){this.teamSelected=!this.teamSelected,this.researchSelected=!this.researchSelected,$nuxt.$emit("about-navigation",t)}}},l=(n(567),n(34)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"pa-2"},[e("h1",{staticClass:"pt-2 main-heading"},[t._v("About Us")]),t._v(" "),e("div",{staticClass:"about-panel"},[e("div",{staticClass:"navigate flexbox --vertical lg:-mt-10"},[e("div",{staticClass:"button",class:t.researchSelected?"button --active":"button --inactive"},[e(o.a,{attrs:{plain:""},on:{click:function(e){return t.toggleNavigation("research")}}},[t._v("\n          Our Research\n        ")])],1),t._v(" "),e("div",{staticClass:"button",class:t.teamSelected?"button --active":"button --inactive"},[e(o.a,{attrs:{plain:""},on:{click:function(e){return t.toggleNavigation("team")}}},[t._v(" Our Team ")])],1)]),t._v(" "),t._m(0),t._v(" "),e("div",[e("div",{staticClass:"mx-auto contributor",attrs:{"max-width":"344"}},[e(r.a,[e("div",{staticClass:"text-h6 text--darken-6"},[t._v("Website Developers")]),t._v(" "),e("div",{staticClass:"text--darken-4 pl-6"},[t._v("Members Here "),e("br")])])],1)])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"feedback font-weight-medium text--primary"},[t._v("\n      Visit our\n      "),e("a",{attrs:{href:"https://docs.google.com/forms/d/e/1FAIpQLScsab93B7uPg389gxCNfCSgG4sMNIFk_mxDFTFF_-UC2TcSJQ/viewform?usp=sf_link",target:"view_window"}},[t._v("Online form")]),t._v("\n      to give us your valuable feedback about this app.\n    ")])}],!1,null,"45249990",null);e.default=component.exports}}]);