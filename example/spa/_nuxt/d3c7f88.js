(window.webpackJsonp=window.webpackJsonp||[]).push([[328],{682:function(e,t,r){var content=r(731);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(12).default)("3f2fec5f",content,!0,{sourceMap:!1})},730:function(e,t,r){"use strict";r(682)},731:function(e,t,r){var n=r(11)(!1);n.push([e.i,'.read-form__fields[data-v-8b8ec610]{width:100%;display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start}.read-form__fields[data-v-8b8ec610] .field-item{width:100%;margin-bottom:16px}.read-form__fields[data-v-8b8ec610] .field-item input{width:100%;padding:12px 15px;font-family:"Inter",sans-serif;font-size:16px;font-weight:400;color:#707072;border-radius:4px;border:1px solid #707072;background-color:transparent;box-sizing:border-box}.read-form__fields[data-v-8b8ec610] .field-item .v-placeholder-asterisk{left:17px!important;top:50%!important;transform:translateY(-50%);color:#707072}.read-form__button[data-v-8b8ec610]{width:auto;padding:12px 15px;font-family:"Inter",sans-serif;font-size:16px;font-weight:600;line-height:20px;letter-spacing:-.4px;color:#a0a0a1;border-radius:4px;border:1px solid #707072;background-color:transparent;margin-bottom:16px;box-sizing:border-box;opacity:.7}.read-form__button--always-fullsized[data-v-8b8ec610]{width:100%}.read-form__button--active[data-v-8b8ec610]{background-color:#ec1c24;border-color:#ec1c24;color:#fff;opacity:1;cursor:pointer}.read-form__button--active[data-v-8b8ec610]:hover{background-color:#d41e24}.read-form__button--active[data-v-8b8ec610]:active{background-color:#c21c22}.read-form__caption[data-v-8b8ec610]{font-family:"Inter",sans-serif;font-size:14px;font-weight:400;letter-spacing:-.4px;color:#a0a0a1;line-height:18px}',""]),e.exports=n},732:function(e,t,r){"use strict";r.r(t);var n=r(0),o=(r(13),r(20),r(76)),l=r(233),c=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(t,r){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new FormData).append("base64",r.base64),n.append("payload",JSON.stringify(r.body)),e.prev=3,e.next=6,t.post("api/send-email",n,{headers:{"Content-Type":"multipart/form-data"}});case 6:return o=e.sent,e.abrupt("return",o);case 10:return e.prev=10,e.t0=e.catch(3),e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t,r){return e.apply(this,arguments)}}(),d=function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.post("api/get-link-with-life-time",r);case 3:return n=e.sent,e.abrupt("return",n);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,r){return e.apply(this,arguments)}}(),m={name:"ReadForm",components:{BaseInput:l.default},props:{fullsizeButton:{type:Boolean,default:!1}},data:function(){return{name:"",email:""}},validations:{email:{required:o.required,email:o.email},name:{required:o.required,maxLength:Object(o.maxLength)(100)},validationGroup:["email","name"]},computed:{isValid:function(){return!this.$v.validationGroup.$invalid}},methods:{submit:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,o,l,m;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.isValid){t.next=2;break}return t.abrupt("return");case 2:return r={region:"eu-west-1",bucket:"maddevsio",file:"pdf/custom-software-development-pricing-strategies-ebook.pdf",expiresIn:86400},t.next=5,d(e.$axios,r);case 5:n=t.sent,o=n.data,l={body:{email:{templateId:348595,variables:{subject:"Your Pricing Strategies Ebook by Mad Devs",emailTo:e.email,pdfUrl:o},attachment:null}},base64:null},m={body:{email:{templateId:624246,variables:{subject:"Request a PDF file from the Ebook page",senderName:e.name,emailTo:"denisoed@gmail.com",page:window.location.href},attachment:null}},base64:""},c(e.$axios,l),c(e.$axios,m),e.$emit("form-sended",{email:e.email,name:e.name}),e.resetForm();case 13:case"end":return t.stop()}}),t)})))()},resetForm:function(){this.$v.$reset(),this.name="",this.email=""}}},f=(r(730),r(3)),component=Object(f.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"read-form"},[r("div",{staticClass:"read-form__fields"},[r("BaseInput",{attrs:{name:"name","show-label":!1,required:!0,placeholder:"Your name",validation:e.$v.name},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),e._v(" "),r("BaseInput",{attrs:{name:"email","show-label":!1,placeholder:"Email",required:!0,validation:e.$v.email},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),e._v(" "),r("button",{staticClass:"read-form__button",class:{"read-form__button--active":e.isValid,"read-form__button--always-fullsized":e.fullsizeButton},on:{click:e.submit}},[e._v("\n      Send me the ebook\n    ")])],1),e._v(" "),r("p",{staticClass:"read-form__caption"},[e._v("\n    By providing your email address, you agree to our Privacy Policy. We will not send you any spam – only link for downloading the ebook and some more useful resources in the future.\n  ")])])}),[],!1,null,"8b8ec610",null);t.default=component.exports}}]);