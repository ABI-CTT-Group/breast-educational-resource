(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{325:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var o=n(519),r=n(2),c=Object(r.f)("v-card__actions"),f=Object(r.f)("v-card__subtitle"),d=Object(r.f)("v-card__text"),l=Object(r.f)("v-card__title");o.a},548:function(t,e,n){var content=n(574);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(30).default)("b9e89aa8",content,!0,{sourceMap:!1})},573:function(t,e,n){"use strict";n(548)},574:function(t,e,n){var o=n(29)((function(i){return i[1]}));o.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Inria+Sans:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap);"]),o.push([t.i,".navigate[data-v-e64faaf8]{align-items:center;padding-bottom:2rem;padding-top:4rem;row-gap:1.5rem}.navigate .button[data-v-e64faaf8]{border-radius:1.25rem;max-width:16rem;padding:1.2rem;text-align:center;width:80%}.navigate .button span[data-v-e64faaf8]{font-size:1.3rem;font-weight:600}.navigate .button.--active[data-v-e64faaf8]{background-color:rgba(150,30,150,.6);color:#fff}.navigate .button.--inactive[data-v-e64faaf8]{background-color:hsla(0,0%,100%,.2);color:#afafaf}.contributor[data-v-e64faaf8]{background-color:rgba(150,30,150,.3)}.about-panel[data-v-e64faaf8]{display:flex;flex-direction:column;height:75vh;justify-content:space-around}.feedback[data-v-e64faaf8]{line-height:2rem;padding:1rem}.feedback a[data-v-e64faaf8]{color:#ff0}.select[data-v-e64faaf8]{width:127px}.v-input__slot[data-v-e64faaf8]{background:#fff}.theme--dark.v-list[data-v-e64faaf8]{background:rgba(150,30,150,.5)}",""]),o.locals={},t.exports=o},590:function(t,e,n){"use strict";n.r(e);var o=n(520),r=n(325),c={name:"AboutUs",data:function(){return{teamSelected:!0,researchSelected:!1,select:"",items:["latest","version 2.0","version 1.0"]}},methods:{toggleNavigation:function(t){this.teamSelected=!this.teamSelected,this.researchSelected=!this.researchSelected,$nuxt.$emit("about-navigation",t)}}},f=(n(573),n(34)),component=Object(f.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"pa-2"},[e("h1",{staticClass:"pt-2 main-heading"},[t._v("About Us")]),t._v(" "),e("div",{staticClass:"about-panel"},[e("div",{staticClass:"navigate flexbox --vertical lg:-mt-10"},[e("div",{staticClass:"button",class:t.teamSelected?"button --active":"button --inactive"},[e(o.a,{attrs:{plain:""},on:{click:function(e){return t.toggleNavigation("team")}}},[t._v(" Our Team ")])],1)]),t._v(" "),t._m(0),t._v(" "),e("div",[e("div",{staticClass:"mx-auto contributor",attrs:{"max-width":"344"}},[e(r.a)],1)])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"feedback font-weight-medium text--primary"},[t._v("\n      Visit our\n      "),e("a",{attrs:{href:"https://docs.google.com/forms/d/e/1FAIpQLScsab93B7uPg389gxCNfCSgG4sMNIFk_mxDFTFF_-UC2TcSJQ/viewform?usp=sf_link",target:"view_window"}},[t._v("Online form")]),t._v("\n      to give us your valuable feedback about this app.\n    ")])}],!1,null,"e64faaf8",null);e.default=component.exports}}]);