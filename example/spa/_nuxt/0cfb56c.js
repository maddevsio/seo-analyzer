(window.webpackJsonp=window.webpackJsonp||[]).push([[265,133,153,165,192,211,215,218,232,252],{1022:function(t,e,o){var content=o(1301);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(12).default)("300c0628",content,!0,{sourceMap:!1})},1300:function(t,e,o){"use strict";o(1022)},1301:function(t,e,o){var n=o(11)(!1);n.push([t.i,".case_cards-container[data-v-4f6e3ee6]{display:grid;grid-template-columns:repeat(2,1fr);grid-template-rows:auto;grid-column-gap:25px;grid-row-gap:0}@media screen and (max-width:880px){.case_cards-container[data-v-4f6e3ee6]{display:grid;grid-template-columns:repeat(1,1fr);grid-template-rows:auto;grid-column-gap:0;grid-row-gap:10px}}.case_bold[data-v-4f6e3ee6]{font-weight:700}[data-v-4f6e3ee6] .list-item_dot{margin-bottom:0}",""]),t.exports=n},1510:function(t,e,o){"use strict";o.r(e);var n=o(610),r=o(618),c=o(659),l=o(637),d={name:"PhaseElasticsearch",components:{TextParagraph:n.default,Card:r.default,ListItemDot:c.default,List:l.default}},f=(o(1300),o(3)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"container_regular m-66_bottom media-m-48_bottom"},[o("h2",{staticClass:"case_title_h2 m-12_bottom"},[t._v("\n    Phase 3: Elasticsearch\n  ")]),t._v(" "),o("TextParagraph",{staticClass:"m-24_bottom"},[t._v("\n    Elasticsearch is crucial in the way users experience the Veeqo platform: the dashboard and the entire interface rely on Elasticsearch. Even if everything else functions flawlessly, delays in the search engine alone cause problems for user experience.\n  ")]),t._v(" "),o("div",{staticClass:"case_cards-container m-96_bottom media-m-48_bottom"},[o("Card",{staticClass:"background-color-silver"},[o("h3",{staticClass:"case_title_h4 m-8_bottom"},[t._v("\n        Challenge\n      ")]),t._v(" "),o("TextParagraph",[t._v("\n        Elasticsearch didn’t cope with the load due to its outdated version and non-optimized configurations.\n      ")])],1),t._v(" "),o("Card",{staticClass:"background-color-blue-light"},[o("h3",{staticClass:"case_title_h4 m-8_bottom"},[t._v("\n        Effect on users\n      ")]),t._v(" "),o("TextParagraph",[t._v("\n        The users were often unable to access search results. Elasticsearch would expose them to delays of up to 30 seconds.\n      ")])],1)],1),t._v(" "),o("h3",{staticClass:"case_title_h4 m-8_bottom"},[t._v("\n    Solution\n  ")]),t._v(" "),o("TextParagraph",{staticClass:"m-24_bottom media-m-12_bottom"},[t._v("\n    There are two main ways to improve performance: Increase compute resources, Optimize the use of resources\n  ")]),t._v(" "),o("TextParagraph",{staticClass:"m-34_bottom media-m-24_bottom"},[t._v("\n    At any given moment DevOps specialists calculate and evaluate cost factors of different solutions. We applied both types of solutions as we started with enhancing the cluster and later optimized indexing to make searching as convenient for users as possible.\n  ")]),t._v(" "),o("div",{staticClass:"case_cards-container"},[o("Card",{staticClass:"background-color-silver",attrs:{padding:"24px"}},[o("h4",{staticClass:"case_title_h4 m-8_bottom"},[t._v("\n        New cluster\n      ")]),t._v(" "),o("TextParagraph",{staticClass:"m-32_bottom"},[t._v("\n        We implemented a new Elasticsearch cluster as a self-hosted solution on EC2 instances.\n      ")]),t._v(" "),o("TextParagraph",{staticClass:"case_bold"},[t._v("\n        Three reasons:\n      ")]),t._v(" "),o("List",[o("ListItemDot",[t._v("Control over the security of our Elasticsearch")]),t._v(" "),o("ListItemDot",[t._v("Immediate response in case of incidents")]),t._v(" "),o("ListItemDot",[t._v("Independent monitoring and investigation of Elasticsearch performance")])],1)],1),t._v(" "),o("Card",{staticClass:"background-color-silver",attrs:{padding:"24px"}},[o("h4",{staticClass:"case_title_h4 m-8_bottom"},[t._v("\n        Indexing and performance\n      ")]),t._v(" "),o("TextParagraph",{staticClass:"m-32_bottom"},[t._v("\n        The indices featured too much unnecessary information and non-optimized mapping.\n      ")]),t._v(" "),o("TextParagraph",{staticClass:"case_bold"},[t._v("\n        What we did:\n      ")]),t._v(" "),o("List",[o("ListItemDot",[t._v("Refactored them to make them concise")]),t._v(" "),o("ListItemDot",[t._v("Used the replication and sharding mechanisms to distribute the indices among five nodes")])],1)],1)],1)],1)}),[],!1,null,"4f6e3ee6",null);e.default=component.exports},610:function(t,e,o){"use strict";o.r(e);var n={name:"TextParagraph",props:{color:{type:String,default:""}},computed:{textColor:function(){return this.color?"color: ".concat(this.color):null}}},r=(o(612),o(3)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("p",{staticClass:"case_paragraph",style:t.textColor},[t._t("default")],2)}),[],!1,null,"2f242354",null);e.default=component.exports},611:function(t,e,o){var content=o(613);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(12).default)("986b89ae",content,!0,{sourceMap:!1})},612:function(t,e,o){"use strict";o(611)},613:function(t,e,o){var n=o(11)(!1);n.push([t.i,'.case_paragraph[data-v-2f242354]{font-family:"Inter",sans-serif;font-size:17px;font-weight:400;color:#101113;font-style:normal;line-height:166%;letter-spacing:-.035em}@media screen and (max-width:768px){.case_paragraph[data-v-2f242354]{font-family:"Inter",sans-serif;font-size:16px;font-weight:400;color:#101113;font-style:normal;line-height:150%;letter-spacing:-.02em}}.case_paragraph--bold[data-v-2f242354]{font-weight:700}',""]),t.exports=n},618:function(t,e,o){"use strict";o.r(e);var n={name:"Card",props:{padding:{type:String,default:""}}},r=(o(623),o(3)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"case_card",style:"padding: "+t.padding},[t._t("default")],2)}),[],!1,null,"d64da47e",null);e.default=component.exports},619:function(t,e,o){var content=o(624);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(12).default)("5bb4142e",content,!0,{sourceMap:!1})},623:function(t,e,o){"use strict";o(619)},624:function(t,e,o){var n=o(11)(!1);n.push([t.i,".case_card[data-v-d64da47e]{position:relative;overflow:hidden;width:auto;height:auto;padding:32px;border-radius:8px}@media screen and (max-width:768px){.case_card[data-v-d64da47e]{width:auto;height:auto;padding:20px;border-radius:8px}}",""]),t.exports=n},631:function(t,e,o){var content=o(658);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(12).default)("3f55ffcc",content,!0,{sourceMap:!1})},637:function(t,e,o){"use strict";o.r(e);var n={name:"List"},r=(o(657),o(3)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("ul",{staticClass:"case_list"},[t._t("default")],2)}),[],!1,null,"125038f8",null);e.default=component.exports},644:function(t,e,o){var content=o(677);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(12).default)("38a56301",content,!0,{sourceMap:!1})},657:function(t,e,o){"use strict";o(631)},658:function(t,e,o){var n=o(11)(!1);n.push([t.i,".case_list[data-v-125038f8]{display:flex;flex-direction:column}",""]),t.exports=n},659:function(t,e,o){"use strict";o.r(e);var n={name:"ListItemDot"},r=(o(676),o(3)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("li",{staticClass:"list-item_dot"},[t._t("default")],2)}),[],!1,null,"b02099ce",null);e.default=component.exports},676:function(t,e,o){"use strict";o(644)},677:function(t,e,o){var n=o(11)(!1);n.push([t.i,'.list-item_dot[data-v-b02099ce]{position:relative;margin-bottom:14px;padding-left:25px;font-family:"Inter",sans-serif;font-size:17px;font-weight:400;color:#101113;font-style:normal;line-height:166%;letter-spacing:-.035em}.list-item_dot[data-v-b02099ce]:last-child{margin-bottom:0}.list-item_dot[data-v-b02099ce]:before{content:"\\2022";position:absolute;left:0}@media screen and (max-width:768px){.list-item_dot[data-v-b02099ce]{font-family:"Inter",sans-serif;font-size:16px;font-weight:400;color:#101113;font-style:normal;line-height:150%;letter-spacing:-.02em}}',""]),t.exports=n}}]);