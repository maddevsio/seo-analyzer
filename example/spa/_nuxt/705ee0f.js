(window.webpackJsonp=window.webpackJsonp||[]).push([[396],{2294:function(e,t,r){"use strict";r.r(t);r(29),r(19),r(18),r(39),r(23),r(40);var n=r(9),c=r(0),o=(r(13),r(33)),O=r(1846),l=r(678),f=r(681);function h(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var j={components:{SliceZone:O.a},mixins:[Object(f.a)(".start-screen-slice")],asyncData:function(e){return Object(c.a)(regeneratorRuntime.mark((function t(){var r,n,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.store,t.next=3,r.dispatch("getCustomPage","about");case 3:return n=null==r?void 0:r.getters,c=n.customPage,r.dispatch("showFooter",c.showFooter),t.abrupt("return",{customPage:c,openGraphUrl:"".concat("https://maddevs.co","/")});case 6:case"end":return t.stop()}}),t)})))()},head:function(){return Object(l.a)({url:this.openGraphUrl,title:this.customPage.metaTitle||"",description:this.customPage.metaDescription||"",jsonLd:this.customPage.schemaOrgSnippet})},methods:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},Object(o.b)(["showFooter"]))},d=j,m=r(3),component=Object(m.a)(d,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("SliceZone",{attrs:{type:"page",slices:e.customPage.slices}})}),[],!1,null,null,null);t.default=component.exports},681:function(e,t,r){"use strict";r(29),r(19),r(18),r(39),r(23),r(40);var n=r(9),c=r(33);function o(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function O(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=function(e){return{created:function(){this.setHeaderTransparentArea(e),this.setHeaderTransparent(!0)},destroyed:function(){this.setHeaderTransparentArea(null),this.setHeaderTransparent(!1)},methods:O({},Object(c.b)(["setHeaderTransparentArea","setHeaderTransparent"]))}}}}]);