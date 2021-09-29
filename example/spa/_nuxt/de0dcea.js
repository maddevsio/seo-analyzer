(window.webpackJsonp=window.webpackJsonp||[]).push([[331,335,336,337,349],{1047:function(t,e,o){"use strict";o.r(e);var r={name:"TitleDesc",props:{title:{type:String,default:""},description:{type:String,default:""},textColor:{type:String,default:"black"}},computed:{colorClass:function(){return"title-desc--".concat(this.textColor,"-text")}}},n=(o(1057),o(3)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"title-desc",class:t.colorClass},[o("h2",{domProps:{innerHTML:t._s(t.title)}}),t._v(" "),t.description?o("p",{domProps:{innerHTML:t._s(t.description)}}):t._e()])}),[],!1,null,"3b09eca0",null);e.default=component.exports},1057:function(t,e,o){"use strict";o(845)},1058:function(t,e,o){var r=o(11)(!1);r.push([t.i,".title-desc[data-v-3b09eca0]{display:block;max-width:1028px;margin:0 auto;text-align:center}.title-desc--white-text[data-v-3b09eca0]{color:#fff}.title-desc--black-text[data-v-3b09eca0]{color:#101113}.title-desc h2[data-v-3b09eca0]{font-size:80px;font-weight:700;line-height:67px;letter-spacing:-.013em}.title-desc p[data-v-3b09eca0]{margin-top:50px;font-size:32px;font-weight:600;line-height:44px;letter-spacing:-.013em}@media screen and (max-width:1024px){.title-desc h2[data-v-3b09eca0]{font-size:60px;line-height:60px}.title-desc p[data-v-3b09eca0]{margin-top:29px;font-size:24px;line-height:35px}}@media screen and (max-width:768px){.title-desc h2[data-v-3b09eca0]{font-size:40px;line-height:40px}.title-desc p[data-v-3b09eca0]{margin-top:21px;font-size:21px;line-height:30px}}@media screen and (max-width:485px){.title-desc[data-v-3b09eca0] p br{display:none}}",""]),t.exports=r},1059:function(t,e,o){"use strict";o(846)},1060:function(t,e,o){var r=o(11)(!1);r.push([t.i,".featured-projects-list__item[data-v-027d0d4c]{position:relative;display:block;border-radius:4px;background-color:#1d1d1f}.featured-projects-list__item:hover .featured-projects-list__item-button[data-v-027d0d4c]{background-color:#fff;color:#101113}.featured-projects-list__item-link[data-v-027d0d4c]{box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between;width:100%;height:100%;padding:67px 60px 45px}.featured-projects-list__item-info h3[data-v-027d0d4c]{margin-top:27px;font-size:28px;font-weight:600;line-height:32px;letter-spacing:-.013em;color:#fff}.featured-projects-list__item-info p[data-v-027d0d4c]{margin-top:21px;font-size:17px;line-height:25px;letter-spacing:-.013em;color:#f4f4f4}",""]),t.exports=r},1147:function(t,e,o){"use strict";o.r(e);var r={name:"FeaturedProjectsListItem",components:{UIArrowButton:o(701).default},props:{logo:{type:Object,default:function(){return{}}},name:{type:String,default:""},title:{type:String,default:""},description:{type:String,default:""},link:{type:String,default:""}}},n=(o(1059),o(3)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("li",{staticClass:"featured-projects-list__item"},[o("a",{staticClass:"featured-projects-list__item-link",attrs:{href:t.link,target:"_blank"}},[o("div",{staticClass:"featured-projects-list__item-info"},[o("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":t.$getMediaFromS3("/images/OpenSource/svg/"+t.logo.name+".svg"),width:"62",height:"62",alt:t.logo.alt||"Image"}}),t._v(" "),o("h3",[t._v(t._s(t.title))]),t._v(" "),o("p",[t._v(t._s(t.description))])]),t._v(" "),o("UIArrowButton",{staticClass:"featured-projects-list__item-button"})],1)])}),[],!1,null,"027d0d4c",null);e.default=component.exports},1231:function(t,e,o){"use strict";o(994)},1232:function(t,e,o){var r=o(11)(!1);r.push([t.i,".featured-projects-list[data-v-7880adf6]{display:grid;grid-template-columns:repeat(3,1fr);grid-gap:30px}.featured-projects-list__see-more[data-v-7880adf6]{display:block;max-width:393px;margin:50px auto 0}.featured-projects-list__see-more[data-v-7880adf6] .ui-button{display:block;width:100%;height:52px;font-weight:400}@media screen and (max-width:1260px){.featured-projects-list[data-v-7880adf6]{grid-template-columns:repeat(2,1fr)}}@media screen and (max-width:768px){.featured-projects-list[data-v-7880adf6]{grid-template-columns:1fr}}",""]),t.exports=r},1233:function(t,e,o){var content=o(1604);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(12).default)("1f5ac2cf",content,!0,{sourceMap:!1})},1422:function(t,e,o){"use strict";o.r(e);var r=o(127),n=o(1147),d=[{id:"location",logo:{name:"location",alt:"Location"},title:"Mad Location Manager",description:'A library for GPS and Accelerometer data "fusion" with Kalman filter.',link:"https://github.com/maddevsio/mad-location-manager/"},{id:"comedian",logo:{name:"comedian",alt:"Comedian"},title:"Comedian",description:"A team-management system leveraging Slack and Telegram bot functionalities to enable remote standups and track daily performance.",link:"https://github.com/maddevsio/comedian/"},{id:"ariadna",logo:{name:"ariadna",alt:"Ariadna"},title:"Ariadna",description:"An open-source geocoder, built on top of ElasticSearch, for fast geocoding and better search for CIS countries.",link:"https://github.com/maddevsio/ariadna/"},{id:"maddevs",logo:{name:"maddevs",alt:"Mad Devs"},title:"Mad Devs website",description:"Open source website code with coverage tests to make websites like maddevs.io",link:"https://github.com/maddevsio/maddevs/"},{id:"idmatch",logo:{name:"idmatch",alt:"IDMatch"},title:"IDMatch",description:"An open source tool enabling ID cards recognition to ensure security on your premises.",link:"https://github.com/maddevsio/idmatch/"},{id:"yourcast",logo:{name:"yourcast",alt:"YourcastTV"},title:"YourcastTV",description:"A solution to create lists of YouTube videos and stream them online in just a few seconds.",link:"https://github.com/maddevsio/yourcast.tv/"}],c={name:"FeaturedProjectsList",components:{FeaturedProjectsListItem:n.default,UIButton:r.default},data:function(){return{featuredProjectsList:d}}},l=(o(1231),o(3)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",[o("ul",{staticClass:"featured-projects-list"},t._l(t.featuredProjectsList,(function(e){return o("FeaturedProjectsListItem",t._b({key:e.id},"FeaturedProjectsListItem",e,!1))})),1),t._v(" "),o("a",{staticClass:"featured-projects-list__see-more",attrs:{href:"https://github.com/maddevsio/",target:"_blank"}},[o("UIButton",[t._v("70+ Open source projects on GitHub")])],1)])}),[],!1,null,"7880adf6",null);e.default=component.exports},1603:function(t,e,o){"use strict";o(1233)},1604:function(t,e,o){var r=o(11)(!1);r.push([t.i,".featured-projects[data-v-a2c99624]{padding-bottom:150px}.featured-projects__head[data-v-a2c99624]{margin-bottom:85px}@media screen and (max-width:1024px){.featured-projects[data-v-a2c99624]{padding-bottom:137px}.featured-projects__head[data-v-a2c99624]{margin-bottom:83px}}@media screen and (max-width:768px){.featured-projects[data-v-a2c99624]{padding-bottom:94px}.featured-projects__head[data-v-a2c99624]{margin-bottom:50px}}",""]),t.exports=r},1887:function(t,e,o){"use strict";o.r(e);var r=o(1047),n=o(1422),d={name:"FeaturedProjects",components:{TitleDesc:r.default,FeaturedProjectsList:n.default}},c=(o(1603),o(3)),component=Object(c.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"featured-projects",attrs:{"data-aos":"fade-up"}},[o("div",{staticClass:"container"},[o("div",{staticClass:"featured-projects__head"},[o("TitleDesc",{attrs:{"text-color":"white",title:"Featured projects",description:"A few listed projects to show the diversity of our community participant roster and some of the promising concepts that are emerging in development technologies."}})],1),t._v(" "),o("FeaturedProjectsList")],1)])}),[],!1,null,"a2c99624",null);e.default=component.exports},672:function(t,e,o){var content=o(704);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(12).default)("6a726c16",content,!0,{sourceMap:!1})},701:function(t,e,o){"use strict";o.r(e);var r={name:"UIArrowButton",props:{color:{type:String,default:"white"}},computed:{colorClass:function(){return"ui-arrow-button--".concat(this.color)}}},n=(o(703),o(3)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("button",{staticClass:"ui-arrow-button",class:t.colorClass,attrs:{type:"button"}},[o("span",[t._v("↓")])])}),[],!1,null,"7887d6e9",null);e.default=component.exports},703:function(t,e,o){"use strict";o(672)},704:function(t,e,o){var r=o(11)(!1);r.push([t.i,'.ui-arrow-button[data-v-7887d6e9]{font-family:"Inter",sans-serif;font-size:16px;font-weight:400;padding:0;line-height:1;margin-top:56px;cursor:pointer;background:transparent;display:flex;align-items:center;justify-content:center;width:48px;min-width:48px;height:48px;border-radius:50%;transition:all .3s ease}.ui-arrow-button--black[data-v-7887d6e9]{border:1px solid #101113;color:#101113}.ui-arrow-button--black--active[data-v-7887d6e9],.ui-arrow-button--black[data-v-7887d6e9]:hover{background-color:#101113;color:#fff}.ui-arrow-button--white[data-v-7887d6e9]{border:1px solid #fff;color:#fff}.ui-arrow-button--white--active[data-v-7887d6e9],.ui-arrow-button--white[data-v-7887d6e9]:hover{background-color:#fff;color:#101113}.ui-arrow-button span[data-v-7887d6e9]{transform:rotate(-90deg)}',""]),t.exports=r},845:function(t,e,o){var content=o(1058);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(12).default)("69c6c3ec",content,!0,{sourceMap:!1})},846:function(t,e,o){var content=o(1060);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(12).default)("565f9b2f",content,!0,{sourceMap:!1})},994:function(t,e,o){var content=o(1232);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(12).default)("1e61e02e",content,!0,{sourceMap:!1})}}]);