(window.webpackJsonp=window.webpackJsonp||[]).push([[118,114,115],{1197:function(t,e,o){"use strict";o(989)},1198:function(t,e,o){var n=o(11)(!1);n.push([t.i,'[data-v-20578a6f] .position-tags__item{color:#707072;font-size:14px;line-height:18px}.positions-grid__item[data-v-20578a6f]{display:block;margin-left:-1px;margin-top:-1px;border:1px solid #cfcfd0;transition:all .4s}.positions-grid__item *[data-v-20578a6f]{transition:all .2s}.positions-grid__item[data-v-20578a6f]:hover{background-color:#101113;border-color:#101113}.positions-grid__item:hover .positions-grid__item-link[data-v-20578a6f]{color:#fff}.positions-grid__item:hover .positions-grid__item-subtitle[data-v-20578a6f]{color:#f4f4f4}.positions-grid__item[data-v-20578a6f]:hover .position-labels__item{color:#fff}.positions-grid__item[data-v-20578a6f]:hover .position-labels__item:first-child{background-color:#137bce}.positions-grid__item[data-v-20578a6f]:hover .position-labels__item:last-child{background-color:#0a8f37}.positions-grid__item-link[data-v-20578a6f]{box-sizing:border-box;width:100%;height:100%;display:block;padding:40px 40px 46.5px;color:#101113}.positions-grid__item-labels[data-v-20578a6f]{margin-bottom:20px}.positions-grid__item-title[data-v-20578a6f]{font-family:"Inter",sans-serif;font-size:32px;font-weight:700;letter-spacing:-.03em;line-height:35px}.positions-grid__item-divider[data-v-20578a6f]{width:75px;height:1px;margin:20px 0;border:none;background:#ec1c24}.positions-grid__item-subtitle[data-v-20578a6f]{line-height:22px;letter-spacing:-.013em;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}.positions-grid__item-tags[data-v-20578a6f]{margin-top:23.5px}@media screen and (max-width:1250px){.positions-grid__item-link[data-v-20578a6f]{padding:30px 30px 36.5px}}@media screen and (max-width:1190px){.positions-grid__item-link[data-v-20578a6f]{padding:25px 25px 30.5px}.positions-grid__item-title[data-v-20578a6f]{font-size:26px;letter-spacing:-.03em;line-height:31px}}@media screen and (max-width:1024px){.positions-grid__item-link[data-v-20578a6f]{padding:22px 22px 28px}.positions-grid__item-title[data-v-20578a6f]{font-size:26px}}',""]),t.exports=n},1435:function(t,e,o){"use strict";o.r(e);var n=o(912),l=o(913),r={name:"PositionsGridItem",components:{PositionLabels:n.default,PositionTags:l.default},props:{uid:{type:String,default:""},position:{type:String,default:""},subtitle:{type:String,default:""},slices:{type:Array,default:function(){return[]}},labels:{type:Object,default:function(){return{}}},tags:{type:Array,default:function(){return[]}}},computed:{link:function(){return"сopywriter"===this.uid?"/about/careers/".concat(this.uid,"/"):"/ru/about/careers/".concat(this.uid,"/")}}},d=(o(1197),o(3)),component=Object(d.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("li",{staticClass:"positions-grid__item"},[o("router-link",{staticClass:"positions-grid__item-link",attrs:{to:t.link}},[o("div",{staticClass:"positions-grid__item-labels",attrs:{"v-if":t.labels.remote||t.labels.relocation}},[o("PositionLabels",{attrs:{variant:"outlined",labels:t.labels}})],1),t._v(" "),o("h3",{staticClass:"positions-grid__item-title",attrs:{title:t.position}},[t._v("\n      "+t._s(t.position)+"\n    ")]),t._v(" "),o("hr",{staticClass:"positions-grid__item-divider"}),t._v(" "),o("p",{staticClass:"positions-grid__item-subtitle",attrs:{title:t.subtitle}},[t._v("\n      "+t._s(t.subtitle)+"\n    ")]),t._v(" "),t.tags.length?o("div",{staticClass:"positions-grid__item-tags"},[o("PositionTags",{attrs:{divider:"comma",tags:t.tags}})],1):t._e()])],1)}),[],!1,null,"20578a6f",null);e.default=component.exports},742:function(t,e,o){var content=o(841);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(12).default)("070437c3",content,!0,{sourceMap:!1})},743:function(t,e,o){var content=o(843);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(12).default)("3a059dac",content,!0,{sourceMap:!1})},840:function(t,e,o){"use strict";o(742)},841:function(t,e,o){var n=o(11)(!1);n.push([t.i,".position-labels[data-v-5722ef8e]{display:flex}.position-labels__item[data-v-5722ef8e]{margin-right:8px;padding:2px 10px;font-size:9px;line-height:15px;text-transform:uppercase;border-radius:2px;border:1px solid;transition:all .4s}.position-labels__item[data-v-5722ef8e]:first-child{border-color:#5159f6}.position-labels__item[data-v-5722ef8e]:last-child{border-color:#0a8f37;margin-right:0}.position-labels__item--filled[data-v-5722ef8e]{color:#fff}.position-labels__item--filled[data-v-5722ef8e]:first-child{background-color:#137bce}.position-labels__item--filled[data-v-5722ef8e]:last-child{background-color:#0a8f37}.position-labels__item--outlined[data-v-5722ef8e]:first-child{color:#5159f6}.position-labels__item--outlined[data-v-5722ef8e]:last-child{color:#0a8f37}",""]),t.exports=n},842:function(t,e,o){"use strict";o(743)},843:function(t,e,o){var n=o(11)(!1);n.push([t.i,'.position-tags[data-v-021b627c]{display:flex;flex-flow:row wrap;align-items:center}.position-tags__item[data-v-021b627c]{font-size:15px;line-height:25px;letter-spacing:-.009em;display:flex;align-items:center;color:#a0a0a1}.position-tags__item--point-divider[data-v-021b627c]:after{content:"";display:block;width:5px;height:5px;border-radius:50%;background:#a0a0a1;margin:2px 8.5px 0}.position-tags__item--point-divider[data-v-021b627c]:last-child:after{display:none}.position-tags__item--comma-divider[data-v-021b627c]:after{content:",\\a0";display:inline}.position-tags__item--comma-divider[data-v-021b627c]:last-child:after{display:none}',""]),t.exports=n},912:function(t,e,o){"use strict";o.r(e);var n={name:"PositionLabels",props:{labels:{type:Object,default:function(){return{}}},variant:{type:String,default:"filled"}}},l=(o(840),o(3)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.labels.remote||t.labels.relocation?o("div",{staticClass:"position-labels"},[t.labels.remote?o("div",{staticClass:"position-labels__item",class:"position-labels__item--"+t.variant},[t._v("\n    Remote\n  ")]):t._e(),t._v(" "),t.labels.relocation?o("div",{staticClass:"position-labels__item",class:"position-labels__item--"+t.variant},[t._v("\n    Open for relocation\n  ")]):t._e()]):t._e()}),[],!1,null,"5722ef8e",null);e.default=component.exports},913:function(t,e,o){"use strict";o.r(e);var n={name:"PositionTags",props:{tags:{type:Array,default:function(){return[]}},divider:{type:String,default:"point"}}},l=(o(842),o(3)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.tags.length?o("div",{staticClass:"position-tags"},t._l(t.tags,(function(e){return o("span",{key:e,staticClass:"position-tags__item",class:"position-tags__item--"+t.divider+"-divider"},[t._v("\n    "+t._s(e)+"\n  ")])})),0):t._e()}),[],!1,null,"021b627c",null);e.default=component.exports},989:function(t,e,o){var content=o(1198);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(12).default)("8914fecc",content,!0,{sourceMap:!1})}}]);