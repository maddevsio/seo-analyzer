(window.webpackJsonp=window.webpackJsonp||[]).push([[244,133,153,165,192,227,231,232],{1500:function(e,t,n){"use strict";n.r(t);var o=n(610),r=n(680),l=n(698),d={name:"Office",components:{TextParagraph:o.default,Swiper:r.default},data:function(){return{swiperOfficeTeam:l.d}}},c=n(3),component=Object(c.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",[n("section",{staticClass:"container_regular"},[n("h3",{staticClass:"case_title_h3 m-12_bottom"},[e._v("\n      Custom small-scale version of the SJMC in Mad Devs’ office\n    ")]),e._v(" "),n("TextParagraph",{staticClass:"m-24_bottom media-m-12_bottom"},[e._v("\n      As thousands of kilometres separate the SJMC and Mad Devs’ office, a unique approach to the engineering\n      partnership was required.\n    ")]),e._v(" "),n("TextParagraph",{staticClass:"m-48_bottom media-m-24_bottom"},[e._v("\n      After purchasing the required equipment and reading code and documentation, in one month after understanding\n      the complexity of the SJMC, Mad Devs’ DevOps and back-end engineers built a custom small-scale version of the\n      SJMC complex multimedia environment. Thus, testing and deploying new content and changes in the Brain was made\n      possible even kilometres away from the real SJMC.\n    ")])],1),e._v(" "),n("section",{staticClass:"container_full case_full-screen-slider"},[n("Swiper",{attrs:{components:e.swiperOfficeTeam,"safari-top-bar":!1,"box-shadow":!1}})],1)])}),[],!1,null,null,null);t.default=component.exports},610:function(e,t,n){"use strict";n.r(t);var o={name:"TextParagraph",props:{color:{type:String,default:""}},computed:{textColor:function(){return this.color?"color: ".concat(this.color):null}}},r=(n(612),n(3)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("p",{staticClass:"case_paragraph",style:e.textColor},[e._t("default")],2)}),[],!1,null,"2f242354",null);t.default=component.exports},611:function(e,t,n){var content=n(613);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(12).default)("986b89ae",content,!0,{sourceMap:!1})},612:function(e,t,n){"use strict";n(611)},613:function(e,t,n){var o=n(11)(!1);o.push([e.i,'.case_paragraph[data-v-2f242354]{font-family:"Inter",sans-serif;font-size:17px;font-weight:400;color:#101113;font-style:normal;line-height:166%;letter-spacing:-.035em}@media screen and (max-width:768px){.case_paragraph[data-v-2f242354]{font-family:"Inter",sans-serif;font-size:16px;font-weight:400;color:#101113;font-style:normal;line-height:150%;letter-spacing:-.02em}}.case_paragraph--bold[data-v-2f242354]{font-weight:700}',""]),e.exports=o},614:function(e,t,n){"use strict";n.r(t);n(164);var o={name:"Picture",props:{folder:{type:String,default:""},file:{type:String,default:""},extension:{type:String,default:""},alt:{type:String,default:""},lazy:{type:Boolean,default:!0},shadow:{type:Boolean,default:!1},radius:{type:Boolean,default:!1},width:{type:Number,default:0},height:{type:Number,default:0},background:{type:Boolean,default:!1}},methods:{onImageLoad:function(e){e.target.classList.contains("grey-background")&&e.target.classList.remove("grey-background")}}},r=(n(616),n(3)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("picture",[n("source",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],staticClass:"image",class:{"box-shadow":e.shadow,"border-radius":e.radius,"grey-background":e.background},attrs:{"data-srcset":[e.$getMediaFromS3("/images/Cases/"+e.folder+"/webp/"+e.file+".webp")+" ",e.$getMediaFromS3("/images/Cases/"+e.folder+"/webp/"+e.file+"@2x.webp 2x")],type:"image/webp"}}),e._v(" "),n("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],staticClass:"image",class:{"box-shadow":e.shadow,"border-radius":e.radius,"grey-background":e.background},attrs:{"data-src":[e.$getMediaFromS3("/images/Cases/"+e.folder+"/"+e.extension+"/"+e.file+"."+e.extension)],"data-srcset":[e.$getMediaFromS3("/images/Cases/"+e.folder+"/"+e.extension+"/"+e.file+"."+e.extension)],alt:e.alt||"Image",width:e.width,height:e.height,"data-testid":"test-picture-img"},on:{load:function(t){return e.onImageLoad(t)}}})])}),[],!1,null,"3558d3dd",null);t.default=component.exports},615:function(e,t,n){var content=n(617);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(12).default)("7b389b72",content,!0,{sourceMap:!1})},616:function(e,t,n){"use strict";n(615)},617:function(e,t,n){var o=n(11)(!1);o.push([e.i,".image[data-v-3558d3dd]{width:100%;height:auto;display:block}.grey-background[data-v-3558d3dd]{background-color:#f4f4f4}.box-shadow[data-v-3558d3dd]{box-shadow:0 2px 7px rgba(0,0,0,.05),0 5.47001px 41.35px rgba(0,0,0,.1)}.border-radius[data-v-3558d3dd]{border-radius:3px}",""]),e.exports=o},661:function(e,t,n){var content=n(688);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(12).default)("18ebbe32",content,!0,{sourceMap:!1})},680:function(e,t,n){"use strict";n.r(t);var o=n(691),r=(n(692),n(614)),l={name:"SwiperExampleDefault",title:"Swiper",components:{Swiper:o.Swiper,SwiperSlide:o.SwiperSlide,Picture:r.default},props:{components:{type:Array,required:!0},boxShadow:{type:Boolean,default:!1},sliderDescription:{type:String,default:""},safariTopBar:{type:Boolean,default:!1},safariTopBarImage:{type:String,default:""},safariTopBarAlt:{type:String,default:""}},data:function(){return{lazy:!0,swiperOptionTop:{loop:!1,loopedSlides:0,spaceBetween:10,grabCursor:!0},swiperOptionThumbs:{loop:!1,loopedSlides:0,spaceBetween:8,centeredSlides:!0,slidesPerView:"auto",touchRatio:.1,slideToClickedSlide:!0}}},mounted:function(){this.setConfig()},methods:{removeLazy:function(){this.lazy=!1},setConfig:function(){var e=this;this.$nextTick((function(){var t,n,o,r;if(null!==(t=e.$refs)&&void 0!==t&&null!==(n=t.swiperTop)&&void 0!==n&&n.$swiper&&null!==(o=e.$refs)&&void 0!==o&&null!==(r=o.swiperThumbs)&&void 0!==r&&r.$swiper){var l=e.$refs.swiperTop.$swiper,d=e.$refs.swiperThumbs.$swiper;l.controller.control=d,d.controller.control=l}}))}}},d=(n(687),n(3)),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"slider-content"},[n("div",{staticClass:"swiper-container thumb-example",class:{"box-shadow":e.boxShadow}},[e.safariTopBar?n("Picture",{attrs:{file:e.safariTopBarImage,alt:e.safariTopBarAlt||"Image",folder:"common",extension:"jpg"}}):e._e(),e._v(" "),n("swiper",{ref:"swiperTop",staticClass:"swiper gallery-top",attrs:{options:e.swiperOptionTop},on:{slideChangeTransitionEnd:e.removeLazy}},e._l(e.components,(function(element){return n("swiper-slide",{key:element.fileName},[n("Picture",{attrs:{width:1026,height:490,folder:element.pictureFolder,file:element.fileName,extension:element.fileExtension,alt:element.alt||"Image",lazy:!1}}),e._v(" "),element.title?n("p",{staticClass:"slide-description"},[e._v("\n          "+e._s(element.title)+"\n        ")]):e._e()],1)})),1)],1),e._v(" "),""!==e.sliderDescription?n("p",{staticClass:"slider-description"},[e._v("\n    "+e._s(e.sliderDescription)+"\n  ")]):e._e(),e._v(" "),n("swiper",{ref:"swiperThumbs",staticClass:"swiper gallery-thumbs",attrs:{options:e.swiperOptionThumbs}},e._l(e.components,(function(element){return n("swiper-slide",{key:element.fileName},[n("Picture",{attrs:{folder:element.pictureFolder,file:element.fileName,extension:element.fileExtension,alt:element.alt||"Image"}})],1)})),1)],1)}),[],!1,null,null,null);t.default=component.exports},687:function(e,t,n){"use strict";n(661)},688:function(e,t,n){var o=n(11)(!1);o.push([e.i,'.thumb-example img{display:block}.box-shadow{box-shadow:0 2px 7px rgba(0,0,0,.05),0 5.47001px 41.35px rgba(0,0,0,.1)}.swiper.gallery-thumbs{box-sizing:border-box;padding:8px 0}.swiper.gallery-thumbs .swiper-slide{width:73px;height:44px;opacity:.2;cursor:pointer}.swiper.gallery-thumbs .swiper-slide-active{opacity:1}.slider-description{margin:9px 0;padding:0 24px;font-weight:400;color:#a4a8b4}.slide-description,.slider-description{text-align:center;font-family:"Inter",sans-serif;font-size:13px;font-style:normal;line-height:21.58px;letter-spacing:-.02em}.slide-description{margin:0;padding:10px 0 8px;font-weight:700;color:#000}@media screen and (max-width:576px){.slide-description{font-size:12px}}',""]),e.exports=o},698:function(e,t,n){"use strict";n.d(t,"g",(function(){return o})),n.d(t,"a",(function(){return r})),n.d(t,"f",(function(){return l})),n.d(t,"d",(function(){return d})),n.d(t,"b",(function(){return c})),n.d(t,"e",(function(){return m})),n.d(t,"c",(function(){return f}));var o=["The 100MB of documentation and 1M+ lines of code, which required months of onboarding.","The unique nature of the software in a one-of-a-kind technologically advanced centre.","The 450 units of hardware connected to operate as a coherent solution that delivers content to SJMC visitors in a personalised manner.","The 5000 km distance between the SJMC and Mad Devs’ office.","The lockdown caused by the Covid19 pandemic, which made it difficult to check the deploy updates.","Orchestrating a seamless experience for 110K visitors annually.","Cooperating and communicating with numerous vendors working at SJMC."],r=["Understanding the complexity of the MMIT Brain software","Building a small-scale version of the SJMC experience in 1 month","Finishing technical debt conducted by an independent auditor","Covering the code with unit and integration tests","Building a framework for automating E2E tests","Deploying technical debt changes and improvements on site","Developing a reporting system","Testing the deployment of new content","Setting up system monitoring"],l=[{alt:"Go",name:"go"},{alt:"Swift",name:"swift"},{alt:"Java for Android",name:"java"},{alt:"Unity",name:"unity"},{alt:"AWS",name:"aws"},{alt:"CodeCommit",name:"codecommit"},{alt:"Windows 10",name:"windows"},{alt:"iOS",name:"apple-black"},{alt:"Android",name:"android-black-text"},{alt:"Ubuntu",name:"ubuntu"},{alt:"Ansible",name:"ansible"},{alt:"Sentry",name:"sentry-black"},{alt:"Elasticsearch",name:"elastic"},{alt:"Logstash",name:"logstash"},{alt:"Kibana",name:"kibana"},{alt:"Prometheus",name:"prometheus"}],d=[{fileName:"office-team-first-slide_v1",pictureFolder:"sjmc",fileExtension:"jpg",alt:"Creating a Custom Small-Scale Version of the SJMC Complex Multimedia Environment."},{fileName:"office-team-second-slide_v1",pictureFolder:"sjmc",fileExtension:"jpg",alt:"Creating a Custom Small-Scale Version of the SJMC Complex Multimedia Environment."},{fileName:"office-team-third-slide_v1",pictureFolder:"sjmc",fileExtension:"jpg",alt:"Creating a Custom Small-Scale Version of the SJMC Complex Multimedia Environment."},{fileName:"office-team-fourth-slide_v1",pictureFolder:"sjmc",fileExtension:"jpg",alt:"Creating a Custom Small-Scale Version of the SJMC Complex Multimedia Environment."},{fileName:"office-team-fifth-slide_v1",pictureFolder:"sjmc",fileExtension:"jpg",alt:"Creating a Custom Small-Scale Version of the SJMC Complex Multimedia Environment."}],c=[{fileName:"grafana-prometheus-first-slide",pictureFolder:"sjmc",fileExtension:"jpg",alt:"SJMC System Monitoring."},{fileName:"grafana-prometheus-second-slide",pictureFolder:"sjmc",fileExtension:"jpg",alt:"SJMC System Monitoring."}],m=[{name:"Kirill Zinchenko",position:"Project Manager",image:{file:"zinchenko"}},{name:"Vlad Andreev",position:"DevOps Engineer",image:{file:"vlad-andreev"}},{name:"Aleksandr Zhitov",position:"QA Manager",image:{file:"zhitov"}},{name:"Sergey Boyko",position:"QA Tester",image:{file:"boyko"}},{name:"Andrew Minkin",position:"Back-end Developer",image:{file:"andrew-minkin"}},{name:"Dmitri Khalezin",position:"DevOps Engineer",image:{file:"dmitrii-khalezin"}},{name:"Kirill Avdeev",position:"Back-end Developer",image:{file:"avdeev"}},{name:"Stanislav Shcherbinin",position:"Back-end Developer",image:{file:"stanislav-shcherbinin"}},{name:"Aleksandr Astashov",position:"Back-end Developer",image:{file:"astashov"}},{name:"Ruslan Kasymov",position:"Logistics Manager",image:{file:"kasymov"}},{name:"Pavel Pushkarev",position:"Mobile App Developer",image:{file:"pushkarev"}},{name:"Rustom Kulbatyrov",position:"Mobile App Developer",image:{file:"kulbatyrov"}}],f=[{fileName:"mad-devs-trip-first-slide",pictureFolder:"sjmc",fileExtension:"jpg",alt:"Mad Devs’ Team Trip to the SJMC."},{fileName:"mad-devs-trip-second-slide",pictureFolder:"sjmc",fileExtension:"jpg",alt:"Mad Devs’ Team Trip to the SJMC."},{fileName:"mad-devs-trip-third-slide",pictureFolder:"sjmc",fileExtension:"jpg",alt:"Mad Devs’ Team Trip to the SJMC."},{fileName:"mad-devs-trip-fourth-slide",pictureFolder:"sjmc",fileExtension:"jpg",alt:"Mad Devs’ Team Trip to the SJMC."},{fileName:"mad-devs-trip-fifth-slide",pictureFolder:"sjmc",fileExtension:"jpg",alt:"Mad Devs’ Team Trip to the SJMC."}]}}]);