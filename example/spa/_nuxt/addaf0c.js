(window.webpackJsonp=window.webpackJsonp||[]).push([[204,133,153,165,192,211,227,232],{1012:function(e,t,o){var content=o(1275);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(12).default)("33460982",content,!0,{sourceMap:!1})},1274:function(e,t,o){"use strict";o(1012)},1275:function(e,t,o){var r=o(11)(!1);r.push([e.i,".case_cards[data-v-53d90056]{grid-template-columns:repeat(1,1fr);grid-column-gap:0;grid-row-gap:24px}.case_cards[data-v-53d90056],.case_cards-group[data-v-53d90056]{display:grid;grid-template-rows:auto}.case_cards-group[data-v-53d90056]{grid-template-columns:repeat(2,1fr);grid-column-gap:24px;grid-row-gap:0}.case_card-title[data-v-53d90056]{color:#f5f7f9}.case_card-img[data-v-53d90056]{min-width:396px;margin:-32px 0 0;position:relative;left:50%;transform:translateX(-50%)}@media screen and (max-width:768px){.case_card-img[data-v-53d90056]{margin:-20px 0 0}}@media screen and (min-width:470px) and (max-width:720px){.case_card-img[data-v-53d90056]{min-width:550px}}@media screen and (max-width:720px){.case_cards-group[data-v-53d90056]{display:grid;grid-template-columns:repeat(1,1fr);grid-template-rows:auto;grid-column-gap:0;grid-row-gap:24px}}",""]),e.exports=r},1486:function(e,t,o){"use strict";o.r(t);var r=o(610),n=o(614),l=o(618),d=o(711),c={name:"BenefitsFromPekloTool",components:{TextParagraph:r.default,Card:l.default,Picture:n.default},data:function(){return{benefitsCards:d.a}}},m=(o(1274),o(3)),component=Object(m.a)(c,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",{staticClass:"container_regular",attrs:{"data-aos":"fade-up","data-aos-anchor-placement":"bottom"}},[o("h2",{staticClass:"case_title_h2 m-24_bottom"},[e._v("\n    Who benefits from Peklo Tool\n  ")]),e._v(" "),o("div",{staticClass:"case_cards"},[o("div",{staticClass:"case_cards-group"},e._l(e.benefitsCards,(function(t){return o("Card",{key:t.title,class:"background-color-"+t.color},[o("div",{staticClass:"case_card-img"},[o("Picture",{attrs:{width:396,height:200,file:t.img,alt:t.title||"Image",folder:"peklo",extension:"png"}})],1),e._v(" "),o("h3",{staticClass:"case_title_h4 case_card-title m-24_top m-8_bottom"},[e._v("\n          "+e._s(t.title)+"\n        ")]),e._v(" "),o("TextParagraph",{attrs:{color:"#ffffff"}},[e._v("\n          "+e._s(t.description)+"\n        ")])],1)})),1),e._v(" "),o("Card",{staticClass:"background-color-yellow m-96_bottom media-m-48_bottom"},[o("h3",{staticClass:"case_title_h4 m-8_bottom"},[e._v("\n        Entrepreneurs\n      ")]),e._v(" "),o("TextParagraph",[e._v("\n        Subscription to Peklo Tool pays off after a single contextual advertising campaign. The money saved by automation can significantly exceed the service’s price.\n      ")])],1)],1)])}),[],!1,null,"53d90056",null);t.default=component.exports},610:function(e,t,o){"use strict";o.r(t);var r={name:"TextParagraph",props:{color:{type:String,default:""}},computed:{textColor:function(){return this.color?"color: ".concat(this.color):null}}},n=(o(612),o(3)),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("p",{staticClass:"case_paragraph",style:e.textColor},[e._t("default")],2)}),[],!1,null,"2f242354",null);t.default=component.exports},611:function(e,t,o){var content=o(613);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(12).default)("986b89ae",content,!0,{sourceMap:!1})},612:function(e,t,o){"use strict";o(611)},613:function(e,t,o){var r=o(11)(!1);r.push([e.i,'.case_paragraph[data-v-2f242354]{font-family:"Inter",sans-serif;font-size:17px;font-weight:400;color:#101113;font-style:normal;line-height:166%;letter-spacing:-.035em}@media screen and (max-width:768px){.case_paragraph[data-v-2f242354]{font-family:"Inter",sans-serif;font-size:16px;font-weight:400;color:#101113;font-style:normal;line-height:150%;letter-spacing:-.02em}}.case_paragraph--bold[data-v-2f242354]{font-weight:700}',""]),e.exports=r},614:function(e,t,o){"use strict";o.r(t);o(164);var r={name:"Picture",props:{folder:{type:String,default:""},file:{type:String,default:""},extension:{type:String,default:""},alt:{type:String,default:""},lazy:{type:Boolean,default:!0},shadow:{type:Boolean,default:!1},radius:{type:Boolean,default:!1},width:{type:Number,default:0},height:{type:Number,default:0},background:{type:Boolean,default:!1}},methods:{onImageLoad:function(e){e.target.classList.contains("grey-background")&&e.target.classList.remove("grey-background")}}},n=(o(616),o(3)),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("picture",[o("source",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],staticClass:"image",class:{"box-shadow":e.shadow,"border-radius":e.radius,"grey-background":e.background},attrs:{"data-srcset":[e.$getMediaFromS3("/images/Cases/"+e.folder+"/webp/"+e.file+".webp")+" ",e.$getMediaFromS3("/images/Cases/"+e.folder+"/webp/"+e.file+"@2x.webp 2x")],type:"image/webp"}}),e._v(" "),o("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],staticClass:"image",class:{"box-shadow":e.shadow,"border-radius":e.radius,"grey-background":e.background},attrs:{"data-src":[e.$getMediaFromS3("/images/Cases/"+e.folder+"/"+e.extension+"/"+e.file+"."+e.extension)],"data-srcset":[e.$getMediaFromS3("/images/Cases/"+e.folder+"/"+e.extension+"/"+e.file+"."+e.extension)],alt:e.alt||"Image",width:e.width,height:e.height,"data-testid":"test-picture-img"},on:{load:function(t){return e.onImageLoad(t)}}})])}),[],!1,null,"3558d3dd",null);t.default=component.exports},615:function(e,t,o){var content=o(617);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(12).default)("7b389b72",content,!0,{sourceMap:!1})},616:function(e,t,o){"use strict";o(615)},617:function(e,t,o){var r=o(11)(!1);r.push([e.i,".image[data-v-3558d3dd]{width:100%;height:auto;display:block}.grey-background[data-v-3558d3dd]{background-color:#f4f4f4}.box-shadow[data-v-3558d3dd]{box-shadow:0 2px 7px rgba(0,0,0,.05),0 5.47001px 41.35px rgba(0,0,0,.1)}.border-radius[data-v-3558d3dd]{border-radius:3px}",""]),e.exports=r},618:function(e,t,o){"use strict";o.r(t);var r={name:"Card",props:{padding:{type:String,default:""}}},n=(o(623),o(3)),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"case_card",style:"padding: "+e.padding},[e._t("default")],2)}),[],!1,null,"d64da47e",null);t.default=component.exports},619:function(e,t,o){var content=o(624);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(12).default)("5bb4142e",content,!0,{sourceMap:!1})},623:function(e,t,o){"use strict";o(619)},624:function(e,t,o){var r=o(11)(!1);r.push([e.i,".case_card[data-v-d64da47e]{position:relative;overflow:hidden;width:auto;height:auto;padding:32px;border-radius:8px}@media screen and (max-width:768px){.case_card[data-v-d64da47e]{width:auto;height:auto;padding:20px;border-radius:8px}}",""]),e.exports=r},711:function(e,t,o){"use strict";o.d(t,"a",(function(){return r})),o.d(t,"b",(function(){return n})),o.d(t,"d",(function(){return l})),o.d(t,"c",(function(){return d})),o.d(t,"f",(function(){return c})),o.d(t,"e",(function(){return m}));var r=[{title:"Digital marketing specialists",description:"Automation allows launching contextual ads 2-3 times faster. The saved time can be spent on strategic and creative work that humans are good at, like KPI analysis and media planning.",color:"black",img:"laptop"},{title:"Promotion agencies",description:"Resources (in specialists’ time) needed to start a contextual ad campaign decrease by 50-80%. It makes delivering the results the customer needs more achievable.",color:"gray",img:"team-communication"}],n=[{title:"Algorithm",description:"A unique algorithm (dictionary parsing + brute-force clasterisation) bundles keywords into logical groups, thus creating a structure for the future contextual advertising campaigns.",color:"silver",icon:"algorithm",iconWidth:"133.39",iconHeight:"123.85"},{title:"Semantics",description:"Structured semantics allows Peklo Tool to generate more specific, targeted, and relevant texts for the ads.",color:"gray-darken",icon:"semantics",iconWidth:"127.79",iconHeight:"127.79"},{title:"Texts",description:"Narrower, more appealing texts ensure a higher click-through rate (CTR) and a lower cost per click (CPC).",color:"silver",icon:"texts",iconWidth:"150.93",iconHeight:"121.25"}],l=[{fileName:"peklo-first-slide",pictureFolder:"peklo",fileExtension:"png",alt:"Clusterisation algorithm"},{fileName:"peklo-second-slide",pictureFolder:"peklo",fileExtension:"png",alt:"Clusterisation algorithm"}],d=[{title:"Go Service for campaign generation",description:"Go puts dictionaries in RAM, ensuring high speed of keyword processing",icon:"go",iconWidth:"221",iconHeight:"112"},{title:"Ruby on Rails for backend",description:"it deals with business logic, data management, and admin functionality",icon:"ruby",iconWidth:"133",iconHeight:"133"},{title:"Vue.js <br> for frontend",description:"it provides the user interface for the service’s <br> clients",icon:"vue",iconWidth:"211",iconHeight:"110"}],c=[{name:"go",alt:"Golang",imgAlt:"Golang"},{name:"postgresql",alt:"PostgreSQL",imgAlt:"PostgreSQL"},{name:"docker",alt:"Docker",imgAlt:"Docker"},{name:"gitlab",alt:"Gitlab",imgAlt:"Gitlab"},{name:"ruby",alt:"Ruby",imgAlt:"Ruby"},{name:"vue",alt:"Vue.js",imgAlt:"Vue.js"}],m=[{name:"Oleg Katkov",position:"Software Engineer",image:{file:"oleg-katkov"}},{name:"Pavel Kalashnikov",position:"Full-Stack Developer",image:{file:"pavel-kalashnikov"}},{name:"Meder Akkozov",position:"Backend Developer",image:{file:"meder-akkozov"}},{name:"Alisa Manakova",position:"Frontend Developer",image:{file:"alisa-manakova"}},{name:"Denis Grushkin",position:"Frontend Developer",image:{file:"denis-grushkin"}},{name:"Anton Grushkin",position:"Frontend Developer",image:{file:"anton-grushkin"}},{name:"Dmitrii Khalezin",position:"DevOps Engineer",image:{file:"dmitrii-khalezin"}},{name:"Vladimir Shebarshov",position:"Frontend Developer",image:{file:"vladimir-shebarshov"}}]}}]);