(window.webpackJsonp=window.webpackJsonp||[]).push([[292],{1929:function(t,e,n){"use strict";n.r(e);n(29),n(19),n(18),n(39),n(23),n(40);var r=n(9),o=n(229),c=n(231);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l={name:"ContactMeForm",components:{BaseForm:o.default},mixins:[Object(c.a)(303792,"Contact Me")],props:{formLocation:{type:String,default:"Unknown"}},methods:{handleSubmit:function(t){var e=m(m({},t),{},{formLocation:this.formLocation});this.submitLead(e)},reset:function(){this.$refs.baseForm.reset()}}},O=n(3),component=Object(O.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("BaseForm",{ref:"baseForm",attrs:{id:"contact-me-form","button-label":"Сontact Me","button-class-name":"ui-button--transparent-bgc ui-button_submit-button-footer","use-company":!0},on:{submit:t.handleSubmit}})}),[],!1,null,null,null);e.default=component.exports}}]);