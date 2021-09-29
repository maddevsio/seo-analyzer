(window.webpackJsonp=window.webpackJsonp||[]).push([[285,133,153,165,192,223,224,227,232,235],{1530:function(e,t,o){"use strict";o.r(t);var n=o(666),r=o(655),l=o(651),d=o(712),c={name:"MeetTheTeam",components:{ListTeam:n.default,ListTeamItem:r.default,TextQuoteAuthor:l.default},data:function(){return{team:d.d}}},m=o(3),component=Object(m.a)(c,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",{staticClass:"container_regular"},[o("h3",{staticClass:"case_title_h2 m-48_bottom media-m-38_bottom"},[e._v("\n    Meet the team\n  ")]),e._v(" "),o("ListTeam",{staticClass:"m-72_bottom media-m-48_bottom"},e._l(e.team,(function(t){return o("ListTeamItem",e._b({key:t.name},"ListTeamItem",t,!1))})),1),e._v(" "),o("TextQuoteAuthor",{staticClass:"case_text-align-center m-72_bottom p-48_top media-m-48_bottom",attrs:{author:"Andrew Minkin",position:"CTO, Mad Devs",file:"andrew-minkin",extension:"png",alt:"Andrew Minkin",folder:"common"}},[e._v("\n    While working on this project, we acquired extensive hands-on experience in building modern livestreaming and VoD\n    services. We were amazed by the abundance of open-source tools available for building great OTT platforms and\n    online movies. Yourcast.TV was the beginning; however, we now see that this internal project could become a\n    cornerstone for many enterprise-level solutions.\n  ")])],1)}),[],!1,null,null,null);t.default=component.exports},610:function(e,t,o){"use strict";o.r(t);var n={name:"TextParagraph",props:{color:{type:String,default:""}},computed:{textColor:function(){return this.color?"color: ".concat(this.color):null}}},r=(o(612),o(3)),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("p",{staticClass:"case_paragraph",style:e.textColor},[e._t("default")],2)}),[],!1,null,"2f242354",null);t.default=component.exports},611:function(e,t,o){var content=o(613);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(12).default)("986b89ae",content,!0,{sourceMap:!1})},612:function(e,t,o){"use strict";o(611)},613:function(e,t,o){var n=o(11)(!1);n.push([e.i,'.case_paragraph[data-v-2f242354]{font-family:"Inter",sans-serif;font-size:17px;font-weight:400;color:#101113;font-style:normal;line-height:166%;letter-spacing:-.035em}@media screen and (max-width:768px){.case_paragraph[data-v-2f242354]{font-family:"Inter",sans-serif;font-size:16px;font-weight:400;color:#101113;font-style:normal;line-height:150%;letter-spacing:-.02em}}.case_paragraph--bold[data-v-2f242354]{font-weight:700}',""]),e.exports=n},614:function(e,t,o){"use strict";o.r(t);o(164);var n={name:"Picture",props:{folder:{type:String,default:""},file:{type:String,default:""},extension:{type:String,default:""},alt:{type:String,default:""},lazy:{type:Boolean,default:!0},shadow:{type:Boolean,default:!1},radius:{type:Boolean,default:!1},width:{type:Number,default:0},height:{type:Number,default:0},background:{type:Boolean,default:!1}},methods:{onImageLoad:function(e){e.target.classList.contains("grey-background")&&e.target.classList.remove("grey-background")}}},r=(o(616),o(3)),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("picture",[o("source",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],staticClass:"image",class:{"box-shadow":e.shadow,"border-radius":e.radius,"grey-background":e.background},attrs:{"data-srcset":[e.$getMediaFromS3("/images/Cases/"+e.folder+"/webp/"+e.file+".webp")+" ",e.$getMediaFromS3("/images/Cases/"+e.folder+"/webp/"+e.file+"@2x.webp 2x")],type:"image/webp"}}),e._v(" "),o("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],staticClass:"image",class:{"box-shadow":e.shadow,"border-radius":e.radius,"grey-background":e.background},attrs:{"data-src":[e.$getMediaFromS3("/images/Cases/"+e.folder+"/"+e.extension+"/"+e.file+"."+e.extension)],"data-srcset":[e.$getMediaFromS3("/images/Cases/"+e.folder+"/"+e.extension+"/"+e.file+"."+e.extension)],alt:e.alt||"Image",width:e.width,height:e.height,"data-testid":"test-picture-img"},on:{load:function(t){return e.onImageLoad(t)}}})])}),[],!1,null,"3558d3dd",null);t.default=component.exports},615:function(e,t,o){var content=o(617);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(12).default)("7b389b72",content,!0,{sourceMap:!1})},616:function(e,t,o){"use strict";o(615)},617:function(e,t,o){var n=o(11)(!1);n.push([e.i,".image[data-v-3558d3dd]{width:100%;height:auto;display:block}.grey-background[data-v-3558d3dd]{background-color:#f4f4f4}.box-shadow[data-v-3558d3dd]{box-shadow:0 2px 7px rgba(0,0,0,.05),0 5.47001px 41.35px rgba(0,0,0,.1)}.border-radius[data-v-3558d3dd]{border-radius:3px}",""]),e.exports=n},629:function(e,t,o){var content=o(650);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(12).default)("99dc4270",content,!0,{sourceMap:!1})},630:function(e,t,o){var content=o(653);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(12).default)("c7290690",content,!0,{sourceMap:!1})},636:function(e,t,o){var content=o(663);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(12).default)("280dd3ef",content,!0,{sourceMap:!1})},649:function(e,t,o){"use strict";o(629)},650:function(e,t,o){var n=o(11)(!1);n.push([e.i,'.case_blockquote-author[data-v-0639129a]{display:flex;flex-direction:column;align-items:center;position:relative;font-family:"Inter",sans-serif;font-size:30px;font-weight:400;color:#101113;font-style:italic;line-height:166%;letter-spacing:-.02em}.case_blockquote-author[data-v-0639129a]:before{content:"";width:408px;height:1px;position:absolute;top:0;background-color:#cfcfd0}.case_blockquote-author__photo[data-v-0639129a]{width:71px;height:70px;margin-bottom:4px;border-radius:100%;overflow:hidden;background-color:#f4f4f4}.case_blockquote-author__position[data-v-0639129a]{font-family:"Inter",sans-serif;font-size:13px;font-weight:400;color:#a0a0a1;font-style:normal;line-height:21.58px;letter-spacing:-2%}@media screen and (max-width:768px){.case_blockquote-author[data-v-0639129a]{font-family:"Inter",sans-serif;font-size:21px;font-weight:400;color:#101113;font-style:italic;line-height:150%;letter-spacing:-.02em}.case_blockquote-author[data-v-0639129a]:before{width:327px}}@media screen and (max-width:370px){.case_blockquote-author[data-v-0639129a]:before{width:100%}}',""]),e.exports=n},651:function(e,t,o){"use strict";o.r(t);var n=o(614),r=o(610),l={name:"TextQuoteAuthor",components:{Picture:n.default,TextParagraph:r.default},props:{author:{type:String,default:""},position:{type:String,default:""},folder:{type:String,default:""},file:{type:String,default:""},extension:{type:String,default:""}}},d=(o(649),o(3)),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("blockquote",{staticClass:"case_blockquote-author m-auto"},[e._t("default"),e._v(" "),o("div",{staticClass:"case_blockquote-author__author-info m-24_top"},[o("div",{staticClass:"case_blockquote-author__photo m-auto"},[o("Picture",{attrs:{folder:e.folder,file:e.file,extension:e.extension,alt:e.author||"Image",width:71,height:71}})],1),e._v(" "),o("TextParagraph",{staticClass:"case_blockquote-author__name"},[e._v("\n      "+e._s(e.author)+"\n    ")]),e._v(" "),o("p",{staticClass:"case_blockquote-author__position"},[e._v("\n      "+e._s(e.position)+"\n    ")])],1)],2)}),[],!1,null,"0639129a",null);t.default=component.exports},652:function(e,t,o){"use strict";o(630)},653:function(e,t,o){var n=o(11)(!1);n.push([e.i,'.case_team-item[data-v-0d501f3d]{display:flex;align-items:center}.case_team-item__info[data-v-0d501f3d]{margin-top:4px}.case_team-item__name[data-v-0d501f3d]{font-size:18px;font-weight:600;color:#101113;line-height:22px;letter-spacing:-.035em}.case_team-item__name[data-v-0d501f3d],.case_team-item__position[data-v-0d501f3d]{font-family:"Inter",sans-serif;font-style:normal}.case_team-item__position[data-v-0d501f3d]{font-size:13px;font-weight:400;color:#a0a0a1;line-height:20px;letter-spacing:-.02em}.case_team-item__image[data-v-0d501f3d]{width:53px;height:53px;border-radius:6px;overflow:hidden;margin-right:7.5px}@media screen and (max-width:768px){.case_team-item[data-v-0d501f3d]{flex-direction:column;align-items:flex-start}.case_team-item__info[data-v-0d501f3d]{margin-top:7px}.case_team-item__name[data-v-0d501f3d]{font-family:"Inter",sans-serif;font-size:14px;font-weight:600;color:#101113;font-style:normal;line-height:16px;letter-spacing:-.035em}.case_team-item__position[data-v-0d501f3d]{line-height:14px}.case_team-item__image[data-v-0d501f3d]{width:50px;height:49px}}@media screen and (max-width:360px){.case_team-item__info[data-v-0d501f3d]{margin-top:5px}.case_team-item__name[data-v-0d501f3d]{font-size:12px}.case_team-item__position[data-v-0d501f3d]{font-size:11px}.case_team-item__image[data-v-0d501f3d]{width:48px;height:47px}}',""]),e.exports=n},655:function(e,t,o){"use strict";o.r(t);var n={name:"ListTeamItem",components:{Picture:o(614).default},props:{name:{type:String,default:""},position:{type:String,default:""},image:{type:Object,required:!0,folder:{type:String,default:""},file:{type:String,default:""},extension:{type:String,default:""}}}},r=(o(652),o(3)),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("li",{staticClass:"case_team-item"},[o("Picture",{staticClass:"case_team-item__image",attrs:{folder:e.image.folder||"common",file:e.image.file,extension:e.image.extension||"png",alt:e.name||"Image",width:50,height:50,background:!0}}),e._v(" "),o("div",{staticClass:"case_team-item__info"},[o("p",{staticClass:"case_team-item__name"},[e._v("\n      "+e._s(e.name)+"\n    ")]),e._v(" "),o("p",{staticClass:"case_team-item__position"},[e._v("\n      "+e._s(e.position)+"\n    ")])])],1)}),[],!1,null,"0d501f3d",null);t.default=component.exports},662:function(e,t,o){"use strict";o(636)},663:function(e,t,o){var n=o(11)(!1);n.push([e.i,".case_list-team[data-v-0ffc57ad]{display:grid;grid-template-columns:repeat(3,1fr);grid-template-rows:auto;grid-column-gap:21px;grid-row-gap:69px}@media screen and (max-width:935px){.case_list-team[data-v-0ffc57ad]{grid-template-columns:repeat(2,1fr)}}@media screen and (max-width:768px){.case_list-team[data-v-0ffc57ad]{grid-row-gap:19px}}",""]),e.exports=n},666:function(e,t,o){"use strict";o.r(t);var n={name:"ListTeam"},r=(o(662),o(3)),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("ul",{staticClass:"case_list-team"},[e._t("default")],2)}),[],!1,null,"0ffc57ad",null);t.default=component.exports},712:function(e,t,o){"use strict";o.d(t,"c",(function(){return n})),o.d(t,"a",(function(){return r})),o.d(t,"e",(function(){return l})),o.d(t,"d",(function(){return d})),o.d(t,"b",(function(){return c}));var n=[{title:"Laptops",width:735,height:449,file:"macbook-pro",alt:"OTT-like Online Video Streaming Platform on MacBook Pro Laptop.",color:"purple-medium"},{title:"Smartphones",width:312,height:627,file:"iphonex",alt:"OTT-like Online Video Streaming Platform on IPhone X Smartphone.",color:"black-primary-bg"},{title:"Tablets",width:518,height:374,file:"ipad-pro",alt:"OTT-like Online Video Streaming Platform on IPad Tablet.",color:"purple-dark"}],r=[{title:"2016",description:"A database of movies with descriptions transformed into online cinema with a basic content management functionality.",background:"purple-light"},{title:"2017",description:"Live video streaming of popular TV channels became available.",background:"purple-primary"},{title:"2018",description:"The project was redesigned to optimise resource consumption.",background:"purple-medium"},{lottieFileName:"",title:"2019",description:"Added Video on Demand functionality.",background:"purple-dark"},{title:"2020",description:"User authorisation ensured a more personalised experience for each user. Custom filters, such as ‘favourites’, ‘already watched’ and ‘search’, made the service more viewer-friendly.",background:"black-primary-bg"}],l=[{name:"go",alt:"Golang"},{name:"django",alt:"Django"},{name:"postgresql",alt:"PostgreSQL"},{name:"nimble",alt:"Nimble Streamer"},{name:"plex",alt:"Plex Media Server"},{name:"jquery",alt:"jQuery"},{name:"video-js",alt:"Video.js"},{name:"nginx-txt",alt:"Nginx"}],d=[{name:"Rinat Shcherba",position:"Backend Developer",image:{file:"rinat-shcherba"}},{name:"Daniyar Chambylov",position:"Backend Developer",image:{file:"daniyar-chambylov"}},{name:"Vladimir Shebarshov",position:"Frontend Developer",image:{file:"vladimir-shebarshov"}},{name:"Andrew Minkin",position:"CTO",image:{file:"andrew-minkin"}},{name:"Erik Sultanaliev",position:"Backend Developer",image:{file:"erik-sultanaliev"}}],c=[{title:"EL APOSTOLADO",href:"https://commons.wikimedia.org/wiki/File:EL_APOSTOLADO_POSTER-04_copia.tif"},{title:"Gasman,",href:"https://commons.wikimedia.org/wiki/File:Gasmann_-_Plakat_.jpg"},{title:"Help,",href:"https://commons.wikimedia.org/wiki/File:Help2021_poster.jpg"},{title:"Genesis 2.0,",href:"https://commons.wikimedia.org/wiki/File:GENESIS_2.0.jpg"},{title:"Elephants Dream",href:"https://commons.wikimedia.org/wiki/Category:Film_posters#/media/File:Elephants_Dream_-_Final_Poster_Source.png"},{title:"Black Ruby,",href:"https://commons.wikimedia.org/wiki/File:Black_Ruby_Poster.jpg"},{title:"Creditors Film,",href:"hhttps://commons.wikimedia.org/wiki/File:Creditors_Film_Poster.png"},{title:"FINAL LEGIONARIO",href:"https://commons.wikimedia.org/wiki/File:FINAL_LEGIONARIOsmall.jpg"}]}}]);