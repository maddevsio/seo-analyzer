(window.webpackJsonp=window.webpackJsonp||[]).push([[329],{1229:function(e,t,n){var content=n(1600);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(12).default)("7a37fa52",content,!0,{sourceMap:!1})},1599:function(e,t,n){"use strict";n(1229)},1600:function(e,t,n){var o=n(11)(!1);o.push([e.i,".open-source-banner[data-v-c8850c12]{position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;padding-top:62px;height:100vh;min-height:568px;background:linear-gradient(180deg,rgba(17,18,19,0) 75%,#111213);overflow:hidden}.open-source-banner__image[data-v-c8850c12]{display:block;z-index:-1;position:absolute;top:-2px;left:-2px;width:calc(100% + 4px);height:calc(100% + 4px);-o-object-fit:cover;object-fit:cover;-o-object-position:top;object-position:top}.open-source-banner__content[data-v-c8850c12]{z-index:2;display:block;margin:0 auto;max-width:1028px;text-align:center}.open-source-banner__title[data-v-c8850c12]{color:#f5f7f9;font-size:100px;line-height:96px;letter-spacing:-.04em}.open-source-banner__subtitle[data-v-c8850c12]{margin-top:64px;font-size:32px;letter-spacing:-.013em;line-height:44px;color:#f4f4f4}@media screen and (max-width:1024px){.open-source-banner[data-v-c8850c12]{height:85vh}.open-source-banner__title[data-v-c8850c12]{font-size:80px;line-height:88px}.open-source-banner__subtitle[data-v-c8850c12]{margin-top:62px;font-size:24px;line-height:34px}}@media screen and (max-width:768px){.open-source-banner__title[data-v-c8850c12]{font-size:52px;line-height:57px}.open-source-banner__subtitle[data-v-c8850c12]{margin-top:21px;font-size:21px;line-height:30px}}",""]),e.exports=o},1885:function(e,t,n){"use strict";n.r(t);var o=n(648),r={name:"Banner",mixins:[Object(o.a)("sectionText")]},c=(n(1599),n(3)),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"open-source-banner",attrs:{id:"transparent-header-area"}},[n("picture",[n("source",{staticClass:"open-source-banner__image",attrs:{srcset:[e.$getMediaFromS3("/images/OpenSource/webp/programmer.webp")+" ",e.$getMediaFromS3("/images/OpenSource/webp/programmer@2x.webp")+" 2x"],type:"image/webp"}}),e._v(" "),n("img",{staticClass:"open-source-banner__image",attrs:{src:e.$getMediaFromS3("/images/OpenSource/png/programmer.png"),srcset:e.$getMediaFromS3("/images/OpenSource/png/programmer@2x.png")+" 2x",width:"1680",height:"969",alt:"Programmer"}})]),e._v(" "),n("div",{staticClass:"container"},[n("div",{ref:"sectionText",staticClass:"open-source-banner__content",style:{opacity:e.sectionTextOpacity}},[e._m(0),e._v(" "),n("p",{staticClass:"open-source-banner__subtitle"},[e._v("\n        While we love writing code, nothing excites us more than collaborating with other members of the tech community.\n        We love building with new and emerging technologies here at Mad Devs. Making the world a better place, one line of code at a time.\n      ")])])])])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",{staticClass:"open-source-banner__title"},[e._v("\n        The power "),n("br"),e._v(" of open source\n      ")])}],!1,null,"c8850c12",null);t.default=component.exports},648:function(e,t,n){"use strict";t.a=function(e){return{data:function(){return{sectionTextOpacity:1}},methods:{onScroll:function(){var t=this.$refs[e];if(t){var n=t.clientHeight,o=window.scrollY,r=(n-o)/n+.2;r>0&&r<=1&&(this.sectionTextOpacity=(n-o)/n+.2),0===o&&(this.sectionTextOpacity=1)}}},mounted:function(){window.addEventListener("scroll",this.onScroll)},destroyed:function(){window.removeEventListener("scroll",this.onScroll)}}}}}]);