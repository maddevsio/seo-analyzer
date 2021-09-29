(window.webpackJsonp=window.webpackJsonp||[]).push([[238,133,153,165,192,215,218,232,236,252,264],{1503:function(t,e,o){"use strict";o.r(e);var n=o(610),l=o(622),r=o(637),c=o(659),m={name:"AutomatedTesting",components:{TextParagraph:n.default,TextQuoteBox:l.default,List:r.default,ListItemDot:c.default}},f=o(3),component=Object(f.a)(m,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"container_regular"},[o("h2",{staticClass:"case_title_h2 m-24_bottom media-m-12_bottom"},[t._v("\n    Automated testing the MMIT Brain via custom emulators\n  ")]),t._v(" "),o("TextParagraph",{staticClass:"m-6_bottom"},[t._v("\n    Auto-testing of the MMIT Brain can be sorted into two categories:\n  ")]),t._v(" "),o("List",{staticClass:"m-32_bottom"},[o("ListItemDot",[t._v("The synchronisation of two internal information systems.")]),t._v(" "),o("ListItemDot",[t._v("\n      End to end testing to ensure seamless user experience for thousands of SJMC visitors.\n    ")])],1),t._v(" "),o("TextParagraph",{staticClass:"m-72_bottom media-m-48_bottom"},[t._v("\n    Testing the accuracy of new content and feature deployment is a challenge due to the 5000 km distance that\n    separate Mad Devs’ office and the SJMC. Thus, our back-end developers developed two types of emulation\n    software that enables Mad Devs to test the MMIT Brain without accumulating additional travel expenses.\n  ")]),t._v(" "),o("h3",{staticClass:"case_title_h3 m-12_bottom"},[t._v("\n    1. Internal information systems synchronization\n  ")]),t._v(" "),o("TextParagraph",[t._v("\n    The emulator code tests the interaction of two independent information systems that control multimedia\n    software and intelligent infrastructure integrations.\n  ")]),t._v(" "),o("TextQuoteBox",{staticClass:"m-auto m-48_top m-48_bottom media-m-24_top media-m-24_bottom"},[t._v("\n    The internal information systems synchronisation emulator makes the infrastructure control system believe that\n    emulated hardware is real.\n  ")]),t._v(" "),o("TextParagraph",{staticClass:"m-24_bottom media-m-12_bottom"},[t._v("\n    For example, in case of an emergency like a water leakage, a smart building control system that controls\n    electricity has to communicate the emergency to multimedia software through the MMIT Brain and turn off all\n    multimedia computers to avoid closure.\n  ")]),t._v(" "),o("TextParagraph",{staticClass:"m-72_bottom media-m-48_bottom"},[t._v("\n    Without such an emulator, Mad Devs’ developers would not be able to look at the MMIT Brain code and understand\n    whether the Brain has transferred the command from one system to another. Without such an emulator, the team\n    would be clueless regarding whether the command had been successfully executed or not.\n  ")]),t._v(" "),o("h3",{staticClass:"case_title_h3"},[t._v("\n    2. End to end tests using emulators of mobile applications\n  ")]),t._v(" "),o("TextQuoteBox",{staticClass:"m-auto m-48_top m-48_bottom media-m-24_top media-m-24_bottom"},[t._v("\n    A mobile applications emulator enables the SJMC to run all possible user experiences on all possible virtual\n    multimedia sites.\n  ")]),t._v(" "),o("TextParagraph",{staticClass:"m-96_bottom media-m-48_bottom"},[t._v("\n    All possible interactions with WATCHOUT site multimedia computers including touch screens, multiple users\n    watching simultaneously, and switching audio and subtitle languages usually last a minimum of 6 hours. The\n    emulator for end to end testing accomplishes the tests in just 20 minutes.\n  ")])],1)}),[],!1,null,null,null);e.default=component.exports},610:function(t,e,o){"use strict";o.r(e);var n={name:"TextParagraph",props:{color:{type:String,default:""}},computed:{textColor:function(){return this.color?"color: ".concat(this.color):null}}},l=(o(612),o(3)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("p",{staticClass:"case_paragraph",style:t.textColor},[t._t("default")],2)}),[],!1,null,"2f242354",null);e.default=component.exports},611:function(t,e,o){var content=o(613);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(12).default)("986b89ae",content,!0,{sourceMap:!1})},612:function(t,e,o){"use strict";o(611)},613:function(t,e,o){var n=o(11)(!1);n.push([t.i,'.case_paragraph[data-v-2f242354]{font-family:"Inter",sans-serif;font-size:17px;font-weight:400;color:#101113;font-style:normal;line-height:166%;letter-spacing:-.035em}@media screen and (max-width:768px){.case_paragraph[data-v-2f242354]{font-family:"Inter",sans-serif;font-size:16px;font-weight:400;color:#101113;font-style:normal;line-height:150%;letter-spacing:-.02em}}.case_paragraph--bold[data-v-2f242354]{font-weight:700}',""]),t.exports=n},621:function(t,e,o){var content=o(635);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(12).default)("1f0d3d2b",content,!0,{sourceMap:!1})},622:function(t,e,o){"use strict";o.r(e);var n={name:"TextQuoteBox",props:{author:{type:String,default:""}}},l=(o(634),o(3)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"case_quote-wrap"},[o("blockquote",{staticClass:"case_blockquote-box m-auto"},[t._t("default")],2),t._v(" "),t.author?o("p",{staticClass:"case_quote-author"},[t._v("\n    "+t._s(t.author)+"\n  ")]):t._e()])}),[],!1,null,"3090f682",null);e.default=component.exports},631:function(t,e,o){var content=o(658);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(12).default)("3f55ffcc",content,!0,{sourceMap:!1})},634:function(t,e,o){"use strict";o(621)},635:function(t,e,o){var n=o(11)(!1);n.push([t.i,'.case_blockquote-box[data-v-3090f682],.case_quote-author[data-v-3090f682]{padding-left:35px}.case_blockquote-box[data-v-3090f682]{border-left:2px solid #ec1c24;font-family:"Inter",sans-serif;font-size:17px;font-weight:400;color:#404143;font-style:italic;line-height:166%;letter-spacing:-.035em}.case_blockquote-box_text-modificator[data-v-3090f682]{color:#ec1c24}.case_quote-author[data-v-3090f682]{font-family:"Inter",sans-serif;font-size:16px;font-weight:400;color:#a0a0a1;font-style:italic;line-height:166%;letter-spacing:-.035em}@media screen and (max-width:768px){.case_blockquote-box[data-v-3090f682],.case_quote-author[data-v-3090f682]{padding-left:24px}.case_blockquote-box[data-v-3090f682]{font-family:"Inter",sans-serif;font-size:17px;font-weight:400;color:#404143;font-style:italic;line-height:153%;letter-spacing:-.035em}}',""]),t.exports=n},637:function(t,e,o){"use strict";o.r(e);var n={name:"List"},l=(o(657),o(3)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("ul",{staticClass:"case_list"},[t._t("default")],2)}),[],!1,null,"125038f8",null);e.default=component.exports},644:function(t,e,o){var content=o(677);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(12).default)("38a56301",content,!0,{sourceMap:!1})},657:function(t,e,o){"use strict";o(631)},658:function(t,e,o){var n=o(11)(!1);n.push([t.i,".case_list[data-v-125038f8]{display:flex;flex-direction:column}",""]),t.exports=n},659:function(t,e,o){"use strict";o.r(e);var n={name:"ListItemDot"},l=(o(676),o(3)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("li",{staticClass:"list-item_dot"},[t._t("default")],2)}),[],!1,null,"b02099ce",null);e.default=component.exports},676:function(t,e,o){"use strict";o(644)},677:function(t,e,o){var n=o(11)(!1);n.push([t.i,'.list-item_dot[data-v-b02099ce]{position:relative;margin-bottom:14px;padding-left:25px;font-family:"Inter",sans-serif;font-size:17px;font-weight:400;color:#101113;font-style:normal;line-height:166%;letter-spacing:-.035em}.list-item_dot[data-v-b02099ce]:last-child{margin-bottom:0}.list-item_dot[data-v-b02099ce]:before{content:"\\2022";position:absolute;left:0}@media screen and (max-width:768px){.list-item_dot[data-v-b02099ce]{font-family:"Inter",sans-serif;font-size:16px;font-weight:400;color:#101113;font-style:normal;line-height:150%;letter-spacing:-.02em}}',""]),t.exports=n}}]);