(window.webpackJsonp=window.webpackJsonp||[]).push([[246,133,153,165,192,227,232,236,264],{1494:function(e,t,o){"use strict";o.r(t);var n=o(610),r=o(622),l=o(614),c={name:"Partnership",components:{TextParagraph:n.default,TextQuoteBox:r.default,Picture:l.default}},d=o(3),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",[o("section",{staticClass:"container_regular"},[o("h2",{staticClass:"case_title_h2 m-12_bottom"},[e._v("\n      The SJMC and Mad Devs partnership\n    ")]),e._v(" "),o("TextParagraph",{staticClass:"m-24_bottom media-m-12_bottom"},[e._v("\n      The SJMC opened to the public on April 16th, 2018. The entire centre, including its half-sunken building and\n      cutting-edge new technology, was developed and deployed by an Australian-based IT vendor. The SJMC and Mad\n      Devs partnership has therefore been based on enhancements and preventative maintenance contracts.\n    ")]),e._v(" "),o("TextParagraph",[e._v("\n      After conducting an\n      "),o("NuxtLink",{staticClass:"case_link",attrs:{to:"/services/#it-consulting"}},[e._v("\n        independent audit\n      ")]),e._v(" of a previous IT\n      vendor, a list of technical debt was formed.\n    ")],1),e._v(" "),o("TextQuoteBox",{staticClass:"m-auto m-48_top m-48_bottom media-m-24_top"},[e._v("\n      The Mad Devs team has successfully accomplished code refactoring as well as closing the technical debt. After\n      that, system monitoring, new feature development, and maintenance was placed on Mad Devs shoulders.\n    ")])],1),e._v(" "),o("section",{staticClass:"container_full case_full-screen-img"},[o("Picture",{attrs:{width:1440,height:869,folder:"sjmc",file:"sjmc-team",extension:"jpg",alt:"The Mad Devs team in Sir John Monash Centre."}})],1)])}),[],!1,null,null,null);t.default=component.exports},610:function(e,t,o){"use strict";o.r(t);var n={name:"TextParagraph",props:{color:{type:String,default:""}},computed:{textColor:function(){return this.color?"color: ".concat(this.color):null}}},r=(o(612),o(3)),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("p",{staticClass:"case_paragraph",style:e.textColor},[e._t("default")],2)}),[],!1,null,"2f242354",null);t.default=component.exports},611:function(e,t,o){var content=o(613);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(12).default)("986b89ae",content,!0,{sourceMap:!1})},612:function(e,t,o){"use strict";o(611)},613:function(e,t,o){var n=o(11)(!1);n.push([e.i,'.case_paragraph[data-v-2f242354]{font-family:"Inter",sans-serif;font-size:17px;font-weight:400;color:#101113;font-style:normal;line-height:166%;letter-spacing:-.035em}@media screen and (max-width:768px){.case_paragraph[data-v-2f242354]{font-family:"Inter",sans-serif;font-size:16px;font-weight:400;color:#101113;font-style:normal;line-height:150%;letter-spacing:-.02em}}.case_paragraph--bold[data-v-2f242354]{font-weight:700}',""]),e.exports=n},614:function(e,t,o){"use strict";o.r(t);o(164);var n={name:"Picture",props:{folder:{type:String,default:""},file:{type:String,default:""},extension:{type:String,default:""},alt:{type:String,default:""},lazy:{type:Boolean,default:!0},shadow:{type:Boolean,default:!1},radius:{type:Boolean,default:!1},width:{type:Number,default:0},height:{type:Number,default:0},background:{type:Boolean,default:!1}},methods:{onImageLoad:function(e){e.target.classList.contains("grey-background")&&e.target.classList.remove("grey-background")}}},r=(o(616),o(3)),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("picture",[o("source",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],staticClass:"image",class:{"box-shadow":e.shadow,"border-radius":e.radius,"grey-background":e.background},attrs:{"data-srcset":[e.$getMediaFromS3("/images/Cases/"+e.folder+"/webp/"+e.file+".webp")+" ",e.$getMediaFromS3("/images/Cases/"+e.folder+"/webp/"+e.file+"@2x.webp 2x")],type:"image/webp"}}),e._v(" "),o("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],staticClass:"image",class:{"box-shadow":e.shadow,"border-radius":e.radius,"grey-background":e.background},attrs:{"data-src":[e.$getMediaFromS3("/images/Cases/"+e.folder+"/"+e.extension+"/"+e.file+"."+e.extension)],"data-srcset":[e.$getMediaFromS3("/images/Cases/"+e.folder+"/"+e.extension+"/"+e.file+"."+e.extension)],alt:e.alt||"Image",width:e.width,height:e.height,"data-testid":"test-picture-img"},on:{load:function(t){return e.onImageLoad(t)}}})])}),[],!1,null,"3558d3dd",null);t.default=component.exports},615:function(e,t,o){var content=o(617);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(12).default)("7b389b72",content,!0,{sourceMap:!1})},616:function(e,t,o){"use strict";o(615)},617:function(e,t,o){var n=o(11)(!1);n.push([e.i,".image[data-v-3558d3dd]{width:100%;height:auto;display:block}.grey-background[data-v-3558d3dd]{background-color:#f4f4f4}.box-shadow[data-v-3558d3dd]{box-shadow:0 2px 7px rgba(0,0,0,.05),0 5.47001px 41.35px rgba(0,0,0,.1)}.border-radius[data-v-3558d3dd]{border-radius:3px}",""]),e.exports=n},621:function(e,t,o){var content=o(635);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(12).default)("1f0d3d2b",content,!0,{sourceMap:!1})},622:function(e,t,o){"use strict";o.r(t);var n={name:"TextQuoteBox",props:{author:{type:String,default:""}}},r=(o(634),o(3)),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"case_quote-wrap"},[o("blockquote",{staticClass:"case_blockquote-box m-auto"},[e._t("default")],2),e._v(" "),e.author?o("p",{staticClass:"case_quote-author"},[e._v("\n    "+e._s(e.author)+"\n  ")]):e._e()])}),[],!1,null,"3090f682",null);t.default=component.exports},634:function(e,t,o){"use strict";o(621)},635:function(e,t,o){var n=o(11)(!1);n.push([e.i,'.case_blockquote-box[data-v-3090f682],.case_quote-author[data-v-3090f682]{padding-left:35px}.case_blockquote-box[data-v-3090f682]{border-left:2px solid #ec1c24;font-family:"Inter",sans-serif;font-size:17px;font-weight:400;color:#404143;font-style:italic;line-height:166%;letter-spacing:-.035em}.case_blockquote-box_text-modificator[data-v-3090f682]{color:#ec1c24}.case_quote-author[data-v-3090f682]{font-family:"Inter",sans-serif;font-size:16px;font-weight:400;color:#a0a0a1;font-style:italic;line-height:166%;letter-spacing:-.035em}@media screen and (max-width:768px){.case_blockquote-box[data-v-3090f682],.case_quote-author[data-v-3090f682]{padding-left:24px}.case_blockquote-box[data-v-3090f682]{font-family:"Inter",sans-serif;font-size:17px;font-weight:400;color:#404143;font-style:italic;line-height:153%;letter-spacing:-.035em}}',""]),e.exports=n}}]);