(window.webpackJsonp=window.webpackJsonp||[]).push([[45,329,332,350],{1059:function(t,e,n){"use strict";n(846)},1060:function(t,e,n){var o=n(11)(!1);o.push([t.i,".featured-projects-list__item[data-v-027d0d4c]{position:relative;display:block;border-radius:4px;background-color:#1d1d1f}.featured-projects-list__item:hover .featured-projects-list__item-button[data-v-027d0d4c]{background-color:#fff;color:#101113}.featured-projects-list__item-link[data-v-027d0d4c]{box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;width:100%;height:100%;padding:67px 60px 45px}.featured-projects-list__item-info h3[data-v-027d0d4c]{margin-top:27px;font-size:28px;font-weight:600;line-height:32px;letter-spacing:-.013em;color:#fff}.featured-projects-list__item-info p[data-v-027d0d4c]{margin-top:21px;font-size:17px;line-height:25px;letter-spacing:-.013em;color:#f4f4f4}",""]),t.exports=o},1147:function(t,e,n){"use strict";n.r(e);var o={name:"FeaturedProjectsListItem",components:{UIArrowButton:n(701).default},props:{logo:{type:Object,default:function(){return{}}},name:{type:String,default:""},title:{type:String,default:""},description:{type:String,default:""},link:{type:String,default:""}}},r=(n(1059),n(3)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"featured-projects-list__item"},[n("a",{staticClass:"featured-projects-list__item-link",attrs:{href:t.link,target:"_blank"}},[n("div",{staticClass:"featured-projects-list__item-info"},[n("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":t.$getMediaFromS3("/images/OpenSource/svg/"+t.logo.name+".svg"),width:"62",height:"62",alt:t.logo.alt||"Image"}}),t._v(" "),n("h3",[t._v(t._s(t.title))]),t._v(" "),n("p",[t._v(t._s(t.description))])]),t._v(" "),n("UIArrowButton",{staticClass:"featured-projects-list__item-button"})],1)])}),[],!1,null,"027d0d4c",null);e.default=component.exports},1229:function(t,e,n){var content=n(1600);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("7a37fa52",content,!0,{sourceMap:!1})},1230:function(t,e,n){var content=n(1602);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("f9b69320",content,!0,{sourceMap:!1})},1231:function(t,e,n){"use strict";n(994)},1232:function(t,e,n){var o=n(11)(!1);o.push([t.i,".featured-projects-list[data-v-7880adf6]{display:grid;grid-template-columns:repeat(3,1fr);grid-gap:30px}.featured-projects-list__see-more[data-v-7880adf6]{display:block;max-width:393px;margin:50px auto 0}.featured-projects-list__see-more[data-v-7880adf6] .ui-button{display:block;width:100%;height:52px;font-weight:400}@media screen and (max-width:1260px){.featured-projects-list[data-v-7880adf6]{grid-template-columns:repeat(2,1fr)}}@media screen and (max-width:768px){.featured-projects-list[data-v-7880adf6]{grid-template-columns:1fr}}",""]),t.exports=o},1233:function(t,e,n){var content=n(1604);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("1f5ac2cf",content,!0,{sourceMap:!1})},1237:function(t,e,n){var content=n(1608);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("7fe829d3",content,!0,{sourceMap:!1})},1422:function(t,e,n){"use strict";n.r(e);var o=n(127),r=n(1147),c=[{id:"location",logo:{name:"location",alt:"Location"},title:"Mad Location Manager",description:'A library for GPS and Accelerometer data "fusion" with Kalman filter.',link:"https://github.com/maddevsio/mad-location-manager/"},{id:"comedian",logo:{name:"comedian",alt:"Comedian"},title:"Comedian",description:"A team-management system leveraging Slack and Telegram bot functionalities to enable remote standups and track daily performance.",link:"https://github.com/maddevsio/comedian/"},{id:"ariadna",logo:{name:"ariadna",alt:"Ariadna"},title:"Ariadna",description:"An open-source geocoder, built on top of ElasticSearch, for fast geocoding and better search for CIS countries.",link:"https://github.com/maddevsio/ariadna/"},{id:"maddevs",logo:{name:"maddevs",alt:"Mad Devs"},title:"Mad Devs website",description:"Open source website code with coverage tests to make websites like maddevs.io",link:"https://github.com/maddevsio/maddevs/"},{id:"idmatch",logo:{name:"idmatch",alt:"IDMatch"},title:"IDMatch",description:"An open source tool enabling ID cards recognition to ensure security on your premises.",link:"https://github.com/maddevsio/idmatch/"},{id:"yourcast",logo:{name:"yourcast",alt:"YourcastTV"},title:"YourcastTV",description:"A solution to create lists of YouTube videos and stream them online in just a few seconds.",link:"https://github.com/maddevsio/yourcast.tv/"}],d={name:"FeaturedProjectsList",components:{FeaturedProjectsListItem:r.default,UIButton:o.default},data:function(){return{featuredProjectsList:c}}},l=(n(1231),n(3)),component=Object(l.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("ul",{staticClass:"featured-projects-list"},t._l(t.featuredProjectsList,(function(e){return n("FeaturedProjectsListItem",t._b({key:e.id},"FeaturedProjectsListItem",e,!1))})),1),t._v(" "),n("a",{staticClass:"featured-projects-list__see-more",attrs:{href:"https://github.com/maddevsio/",target:"_blank"}},[n("UIButton",[t._v("70+ Open source projects on GitHub")])],1)])}),[],!1,null,"7880adf6",null);e.default=component.exports},1599:function(t,e,n){"use strict";n(1229)},1600:function(t,e,n){var o=n(11)(!1);o.push([t.i,".open-source-banner[data-v-c8850c12]{position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;padding-top:62px;height:100vh;min-height:568px;background:linear-gradient(180deg,rgba(17,18,19,0) 75%,#111213);overflow:hidden}.open-source-banner__image[data-v-c8850c12]{display:block;z-index:-1;position:absolute;top:-2px;left:-2px;width:calc(100% + 4px);height:calc(100% + 4px);-o-object-fit:cover;object-fit:cover;-o-object-position:top;object-position:top}.open-source-banner__content[data-v-c8850c12]{z-index:2;display:block;margin:0 auto;max-width:1028px;text-align:center}.open-source-banner__title[data-v-c8850c12]{color:#f5f7f9;font-size:100px;line-height:96px;letter-spacing:-.04em}.open-source-banner__subtitle[data-v-c8850c12]{margin-top:64px;font-size:32px;letter-spacing:-.013em;line-height:44px;color:#f4f4f4}@media screen and (max-width:1024px){.open-source-banner[data-v-c8850c12]{height:85vh}.open-source-banner__title[data-v-c8850c12]{font-size:80px;line-height:88px}.open-source-banner__subtitle[data-v-c8850c12]{margin-top:62px;font-size:24px;line-height:34px}}@media screen and (max-width:768px){.open-source-banner__title[data-v-c8850c12]{font-size:52px;line-height:57px}.open-source-banner__subtitle[data-v-c8850c12]{margin-top:21px;font-size:21px;line-height:30px}}",""]),t.exports=o},1601:function(t,e,n){"use strict";n(1230)},1602:function(t,e,n){var o=n(11)(!1);o.push([t.i,".paragraph-section[data-v-38478443]{padding-top:134px;padding-bottom:196px}.paragraph-section__text[data-v-38478443]{margin:0 auto;width:100%;max-width:1028px;font-size:64px;font-weight:700;line-height:77px;letter-spacing:-.013em;color:#f4f4f4;text-align:center}.paragraph-section__text span[data-v-38478443]{color:#00c05b}@media screen and (max-width:1024px){.paragraph-section[data-v-38478443]{padding-top:72px;padding-bottom:124px}.paragraph-section__text[data-v-38478443]{font-size:32px;line-height:40px}}@media screen and (max-width:768px){.paragraph-section[data-v-38478443]{padding-top:52px;padding-bottom:73px}.paragraph-section__text[data-v-38478443]{font-size:28px;line-height:40px;margin-bottom:40px}}",""]),t.exports=o},1603:function(t,e,n){"use strict";n(1233)},1604:function(t,e,n){var o=n(11)(!1);o.push([t.i,".featured-projects[data-v-a2c99624]{padding-bottom:150px}.featured-projects__head[data-v-a2c99624]{margin-bottom:85px}@media screen and (max-width:1024px){.featured-projects[data-v-a2c99624]{padding-bottom:137px}.featured-projects__head[data-v-a2c99624]{margin-bottom:83px}}@media screen and (max-width:768px){.featured-projects[data-v-a2c99624]{padding-bottom:94px}.featured-projects__head[data-v-a2c99624]{margin-bottom:50px}}",""]),t.exports=o},1607:function(t,e,n){"use strict";n(1237)},1608:function(t,e,n){var o=n(11)(!1);o.push([t.i,".open-source-cta[data-v-2846aafb]{padding-bottom:107px}.open-source-cta__head[data-v-2846aafb]{margin-bottom:55px}.open-source-cta[data-v-2846aafb] .cta-banner{min-height:543px}.open-source-cta[data-v-2846aafb] .cta-banner__image{right:0;height:87%}.open-source-cta[data-v-2846aafb] .ui-button{width:220px;height:52px;font-weight:400;font-size:18px;letter-spacing:-.02em}@media screen and (max-width:900px){.open-source-cta[data-v-2846aafb] .ui-button{font-size:16px}}@media screen and (max-width:1380px){.open-source-cta[data-v-2846aafb] .cta-banner{min-height:auto}}@media screen and (max-width:1090px){.open-source-cta[data-v-2846aafb] .cta-banner{align-items:center;justify-content:space-between;padding:40px 32px 0}.open-source-cta[data-v-2846aafb] .cta-banner__info{text-align:center;align-items:center}.open-source-cta[data-v-2846aafb] .cta-banner__image{margin-top:70px;position:static;width:85%;height:auto}}@media screen and (max-width:768px){.open-source-cta[data-v-2846aafb]{padding-bottom:27px}.open-source-cta__head[data-v-2846aafb]{margin-bottom:25px}.open-source-cta[data-v-2846aafb] .cta-banner__image{width:calc(100% + 48px)}}",""]),t.exports=o},1774:function(t,e,n){var content=n(2110);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("7da70b44",content,!0,{sourceMap:!1})},1885:function(t,e,n){"use strict";n.r(e);var o=n(648),r={name:"Banner",mixins:[Object(o.a)("sectionText")]},c=(n(1599),n(3)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"open-source-banner",attrs:{id:"transparent-header-area"}},[n("picture",[n("source",{staticClass:"open-source-banner__image",attrs:{srcset:[t.$getMediaFromS3("/images/OpenSource/webp/programmer.webp")+" ",t.$getMediaFromS3("/images/OpenSource/webp/programmer@2x.webp")+" 2x"],type:"image/webp"}}),t._v(" "),n("img",{staticClass:"open-source-banner__image",attrs:{src:t.$getMediaFromS3("/images/OpenSource/png/programmer.png"),srcset:t.$getMediaFromS3("/images/OpenSource/png/programmer@2x.png")+" 2x",width:"1680",height:"969",alt:"Programmer"}})]),t._v(" "),n("div",{staticClass:"container"},[n("div",{ref:"sectionText",staticClass:"open-source-banner__content",style:{opacity:t.sectionTextOpacity}},[t._m(0),t._v(" "),n("p",{staticClass:"open-source-banner__subtitle"},[t._v("\n        While we love writing code, nothing excites us more than collaborating with other members of the tech community.\n        We love building with new and emerging technologies here at Mad Devs. Making the world a better place, one line of code at a time.\n      ")])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",{staticClass:"open-source-banner__title"},[t._v("\n        The power "),n("br"),t._v(" of open source\n      ")])}],!1,null,"c8850c12",null);e.default=component.exports},1886:function(t,e,n){"use strict";n.r(e);var o={name:"ParagraphSection"},r=(n(1601),n(3)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"paragraph-section",attrs:{"data-aos":"fade-up"}},[n("div",{staticClass:"container"},[n("p",{staticClass:"paragraph-section__text"},[n("span",[t._v("70+")]),t._v(" of Mad Devs' "),n("span",[t._v("open source projects")]),t._v(" have been shared with the community via "),n("span",[t._v("GitHub.")])])])])}],!1,null,"38478443",null);e.default=component.exports},1887:function(t,e,n){"use strict";n.r(e);var o=n(1047),r=n(1422),c={name:"FeaturedProjects",components:{TitleDesc:o.default,FeaturedProjectsList:r.default}},d=(n(1603),n(3)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"featured-projects",attrs:{"data-aos":"fade-up"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"featured-projects__head"},[n("TitleDesc",{attrs:{"text-color":"white",title:"Featured projects",description:"A few listed projects to show the diversity of our community participant roster and some of the promising concepts that are emerging in development technologies."}})],1),t._v(" "),n("FeaturedProjectsList")],1)])}),[],!1,null,"a2c99624",null);e.default=component.exports},1888:function(t,e,n){"use strict";n.r(e);var o=n(1047),r=n(700),c=n(127),d={name:"CTABanner",components:{TitleDesc:o.default,UIBanner:r.default,UIButton:c.default}},l=(n(1607),n(3)),component=Object(l.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"open-source-cta",attrs:{"data-aos":"fade-up"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"open-source-cta__head"},[n("TitleDesc",{attrs:{title:"Contribute <br /> to open source"}})],1),t._v(" "),n("UIBanner",{attrs:{title:"Develop with <br /> Mad Devs",text:"Showcase your work, give feedback <br /> to others, and learn from each other.",image:t.$getMediaFromS3("/images/CTABanner/team.png"),"image-alt-text":"Team"}},[n("a",{attrs:{href:"https://github.com/maddevsio",target:"_blank"}},[n("UIButton",[t._v("\n          Contribute\n        ")])],1)])],1)])}),[],!1,null,"2846aafb",null);e.default=component.exports},2109:function(t,e,n){"use strict";n(1774)},2110:function(t,e,n){var o=n(11)(!1);o.push([t.i,".open-source[data-v-1bb1cd1c]{color:#fff}.open-source--bg-white[data-v-1bb1cd1c]{background-color:#fff;color:#101113}",""]),t.exports=o},2279:function(t,e,n){"use strict";n.r(e);var o=n(1885),r=n(1886),c=n(1887),d=n(2280),l=n(1888),m={name:"Main",components:{Banner:o.default,ParagraphSection:r.default,FeaturedProjects:c.default,Boilerplates:d.default,CTABanner:l.default}},f=(n(2109),n(3)),component=Object(f.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"open-source"},[n("Banner"),t._v(" "),n("ParagraphSection"),t._v(" "),n("FeaturedProjects"),t._v(" "),n("div",{staticClass:"open-source--bg-white"},[n("Boilerplates"),t._v(" "),n("CTABanner")],1)],1)}),[],!1,null,"1bb1cd1c",null);e.default=component.exports},648:function(t,e,n){"use strict";e.a=function(t){return{data:function(){return{sectionTextOpacity:1}},methods:{onScroll:function(){var e=this.$refs[t];if(e){var n=e.clientHeight,o=window.scrollY,r=(n-o)/n+.2;r>0&&r<=1&&(this.sectionTextOpacity=(n-o)/n+.2),0===o&&(this.sectionTextOpacity=1)}}},mounted:function(){window.addEventListener("scroll",this.onScroll)},destroyed:function(){window.removeEventListener("scroll",this.onScroll)}}}},667:function(t,e,n){var content=n(694);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("79967fe8",content,!0,{sourceMap:!1})},693:function(t,e,n){"use strict";n(667)},694:function(t,e,n){var o=n(11)(!1);o.push([t.i,'.cta-banner[data-v-7c7e8326]{box-sizing:border-box;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;position:relative;background-color:#f4f4f4;padding:85px 105px}@media screen and (max-width:1280px){.cta-banner[data-v-7c7e8326]{padding:85px 40px}}@media screen and (max-width:992px){.cta-banner[data-v-7c7e8326]{padding:40px}}@media screen and (max-width:768px){.cta-banner[data-v-7c7e8326]{align-items:center;justify-content:space-between;padding:40px 32px 0}}.cta-banner h2[data-v-7c7e8326]{font-family:"Inter",sans-serif;font-size:60px;font-weight:900;max-width:590px;line-height:65px;letter-spacing:-.04em;margin-bottom:21px}@media screen and (max-width:1280px){.cta-banner h2[data-v-7c7e8326]{max-width:500px;font-size:48px;max-width:450px;font-size:42px;line-height:100%}}@media screen and (max-width:900px){.cta-banner h2[data-v-7c7e8326]{max-width:395px;font-size:36px}}@media screen and (max-width:768px){.cta-banner h2[data-v-7c7e8326]{max-width:100%;text-align:center;font-size:40px;letter-spacing:-.05em;margin-bottom:24px}}@media screen and (max-width:370px){.cta-banner h2[data-v-7c7e8326]{font-size:34px}}.cta-banner p[data-v-7c7e8326]{font-weight:400;font-size:20px;line-height:29px;letter-spacing:-.013em;margin-bottom:40px;max-width:420px}@media screen and (max-width:1280px){.cta-banner p[data-v-7c7e8326]{font-size:18px}}@media screen and (max-width:992px){.cta-banner p[data-v-7c7e8326]{max-width:350px}}@media screen and (max-width:900px){.cta-banner p[data-v-7c7e8326]{max-width:320px}}@media screen and (max-width:768px){.cta-banner p[data-v-7c7e8326]{max-width:100%;font-size:16px;line-height:21px;margin-bottom:24px;text-align:center}}.cta-banner__info[data-v-7c7e8326]{display:flex;flex-direction:column;align-items:flex-start}@media screen and (max-width:768px){.cta-banner__info[data-v-7c7e8326]{align-items:center}}.cta-banner__image[data-v-7c7e8326]{width:auto;height:100%;position:absolute;bottom:0;right:106px;-ms-interpolation-mode:nearest-neighbor;image-rendering:-moz-crisp-edges;image-rendering:pixelated}@media screen and (max-width:1280px){.cta-banner__image[data-v-7c7e8326]{right:90px}}@media screen and (max-width:1180px){.cta-banner__image[data-v-7c7e8326]{height:85%}}@media screen and (max-width:900px){.cta-banner__image[data-v-7c7e8326]{right:0}}@media screen and (max-width:768px){.cta-banner__image[data-v-7c7e8326]{width:90%;height:auto;position:static}}@media screen and (max-width:375px){.cta-banner__image[data-v-7c7e8326]{width:calc(100% + 50px);margin:auto -25px 0}}.cta-banner__man[data-v-7c7e8326]{min-width:158px;position:absolute;top:188px;right:61px;font-weight:400;font-size:14px;line-height:18px;color:#101113}@media screen and (max-width:1280px){.cta-banner__man[data-v-7c7e8326]{right:20px}}@media screen and (max-width:1180px){.cta-banner__man[data-v-7c7e8326]{right:5px;top:215px}}@media screen and (max-width:992px){.cta-banner__man[data-v-7c7e8326]{top:190px}}@media screen and (max-width:900px){.cta-banner__man[data-v-7c7e8326]{top:auto;bottom:0;right:0;background-color:#f4f4f4;padding:5px}}.cta-banner__man span[data-v-7c7e8326]{display:block;font-weight:700;margin-top:4px}@media screen and (max-width:768px){.cta-banner__man span[data-v-7c7e8326]{margin-top:0}}',""]),t.exports=o},700:function(t,e,n){"use strict";n.r(e);var o={name:"UIBanner",props:{title:{type:String,default:"Title"},text:{type:String,default:""},image:{type:String,default:""},imageAltText:{type:String,default:""},manName:{type:String,default:""},manPosition:{type:String,default:""}}},r=(n(693),n(3)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"cta-banner"},[n("div",{staticClass:"cta-banner__info"},[n("h2",{domProps:{innerHTML:t._s(t.title)}}),t._v(" "),n("p",{domProps:{innerHTML:t._s(t.text)}}),t._v(" "),t._t("default")],2),t._v(" "),n("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],staticClass:"cta-banner__image",attrs:{width:"395",height:"490","data-src":t.image,alt:t.imageAltText||"Image"}}),t._v(" "),n("div",{staticClass:"cta-banner__man"},[t._v("\n    "+t._s(t.manName)+"\n    "),n("span",{domProps:{innerHTML:t._s(t.manPosition)}})])])}),[],!1,null,"7c7e8326",null);e.default=component.exports},846:function(t,e,n){var content=n(1060);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("565f9b2f",content,!0,{sourceMap:!1})},994:function(t,e,n){var content=n(1232);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("1e61e02e",content,!0,{sourceMap:!1})}}]);