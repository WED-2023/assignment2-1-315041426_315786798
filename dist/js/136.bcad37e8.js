"use strict";(self["webpackChunkassignment_2_1"]=self["webpackChunkassignment_2_1"]||[]).push([[136],{2136:(e,r,a)=>{a.r(r),a.d(r,{default:()=>p});var t=function(){var e=this,r=e._self._c;return r("div",{staticClass:"container"},[r("h1",{staticClass:"title"},[e._v("Register")]),r("b-form",{on:{submit:function(r){return r.preventDefault(),e.onRegister.apply(null,arguments)},reset:function(r){return r.preventDefault(),e.onReset.apply(null,arguments)}}},[r("b-form-group",{attrs:{id:"input-group-username","label-cols-sm":"3",label:"Username:","label-for":"username"}},[r("b-form-input",{attrs:{id:"username",type:"text",state:e.validateState("username")},model:{value:e.$v.form.username.$model,callback:function(r){e.$set(e.$v.form.username,"$model",r)},expression:"$v.form.username.$model"}}),e.$v.form.username.required?e.$v.form.username.length?e._e():r("b-form-invalid-feedback",[e._v("Username length should be between 3-8 characters long")]):r("b-form-invalid-feedback",[e._v("Username is required")]),e.$v.form.username.alpha?e._e():r("b-form-invalid-feedback",[e._v("Username must contain only alphabetic characters")]),e.usernameExists?r("b-form-invalid-feedback",[e._v("Username already exists")]):e._e()],1),r("b-form-group",{attrs:{id:"input-group-firstname","label-cols-sm":"3",label:"First Name:","label-for":"firstname"}},[r("b-form-input",{attrs:{id:"firstname",type:"text",state:e.validateState("firstName")},model:{value:e.$v.form.firstName.$model,callback:function(r){e.$set(e.$v.form.firstName,"$model",r)},expression:"$v.form.firstName.$model"}}),e.$v.form.firstName.required?e._e():r("b-form-invalid-feedback",[e._v("First name is required")])],1),r("b-form-group",{attrs:{id:"input-group-lastname","label-cols-sm":"3",label:"Last Name:","label-for":"lastname"}},[r("b-form-input",{attrs:{id:"lastname",type:"text",state:e.validateState("lastName")},model:{value:e.$v.form.lastName.$model,callback:function(r){e.$set(e.$v.form.lastName,"$model",r)},expression:"$v.form.lastName.$model"}}),e.$v.form.lastName.required?e._e():r("b-form-invalid-feedback",[e._v("Last name is required")])],1),r("b-form-group",{attrs:{id:"input-group-email","label-cols-sm":"3",label:"Email:","label-for":"email"}},[r("b-form-input",{attrs:{id:"email",type:"email",state:e.validateState("email")},model:{value:e.$v.form.email.$model,callback:function(r){e.$set(e.$v.form.email,"$model",r)},expression:"$v.form.email.$model"}}),e.$v.form.email.required?e._e():r("b-form-invalid-feedback",[e._v("Email is required")]),e.$v.form.email.email?e._e():r("b-form-invalid-feedback",[e._v("Invalid email format")])],1),r("b-form-group",{attrs:{id:"input-group-country","label-cols-sm":"3",label:"Country:","label-for":"country"}},[r("b-form-select",{attrs:{id:"country",options:e.countries,state:e.validateState("country")},model:{value:e.$v.form.country.$model,callback:function(r){e.$set(e.$v.form.country,"$model",r)},expression:"$v.form.country.$model"}}),r("b-form-invalid-feedback",[e._v("Country is required")])],1),r("b-form-group",{attrs:{id:"input-group-password","label-cols-sm":"3",label:"Password:","label-for":"password"}},[r("b-form-input",{attrs:{id:"password",type:"password",state:e.validateState("password")},model:{value:e.$v.form.password.$model,callback:function(r){e.$set(e.$v.form.password,"$model",r)},expression:"$v.form.password.$model"}}),e.$v.form.password.required?e._e():r("b-form-invalid-feedback",[e._v("Password is required")]),e.$v.form.password.passwordComplexity?e._e():r("b-form-invalid-feedback",[e._v("Password must contain at least one number and one special character")]),e.$v.form.password.length?e._e():r("b-form-invalid-feedback",[e._v("Password must be between 5-10 characters long")])],1),r("b-form-group",{attrs:{id:"input-group-confirmedPassword","label-cols-sm":"3",label:"Confirm Password:","label-for":"confirmedPassword"}},[r("b-form-input",{attrs:{id:"confirmedPassword",type:"password",state:e.validateState("confirmedPassword")},model:{value:e.$v.form.confirmedPassword.$model,callback:function(r){e.$set(e.$v.form.confirmedPassword,"$model",r)},expression:"$v.form.confirmedPassword.$model"}}),e.$v.form.confirmedPassword.required?e._e():r("b-form-invalid-feedback",[e._v("Password confirmation is required")]),e.$v.form.confirmedPassword.sameAsPassword?e._e():r("b-form-invalid-feedback",[e._v("The confirmed password is not equal to the original password")])],1),r("b-button",{attrs:{type:"reset",variant:"danger"}},[e._v("Reset")]),r("b-button",{staticClass:"ml-5 w-75",staticStyle:{width:"250px"},attrs:{type:"submit",variant:"primary"}},[e._v("Register")]),r("div",{staticClass:"mt-2"},[e._v(" You have an account already? "),r("router-link",{attrs:{to:"login"}},[e._v(" Log in here")])],1)],1),e.form.submitError?r("b-alert",{staticClass:"mt-2",attrs:{variant:"warning",dismissible:"",show:""}},[e._v("Register failed: "+e._s(e.form.submitError))]):e._e()],1)},s=[],o=a(459),i=a(388),n=(a(2062),a(4114),a(2010),a(7495),a(906),a(2505)),m=a.n(n),l=a(3278),u=a(3484);const d={name:"Register",data:function(){return{form:{username:"",firstName:"",lastName:"",email:"",country:null,password:"",confirmedPassword:"",submitError:void 0},countries:[{value:null,text:"",disabled:!0}],usernameExists:!1}},validations:{form:{username:{required:l.mw,length:function(e){return(0,l.Bp)(3)(e)&&(0,l.Ru)(8)(e)},alpha:l.X4},firstName:{required:l.mw},lastName:{required:l.mw},email:{required:l.mw,email:l.Rp},country:{required:l.mw},password:{required:l.mw,length:function(e){return(0,l.Bp)(5)(e)&&(0,l.Ru)(10)(e)},passwordComplexity:function(e){return/[0-9]/.test(e)&&/[!@#$%^&*]/.test(e)}},confirmedPassword:{required:l.mw,sameAsPassword:(0,l.f4)("password")}}},mounted:function(){this.fetchCountries()},methods:{fetchCountries:function(){var e=this;return(0,i.A)((0,o.A)().mark((function r(){var a;return(0,o.A)().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,m().get("https://restcountries.com/v3.1/all");case 3:a=r.sent,e.countries=a.data.map((function(e){return{value:e.cca2,text:e.name.common}})),r.next=10;break;case 7:r.prev=7,r.t0=r["catch"](0),console.error("Error fetching countries:",r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})))()},validateState:function(e){var r=this.$v.form[e],a=r.$dirty,t=r.$error;return a?!t:null},Register:function(){var e=this;return(0,i.A)((0,o.A)().mark((function r(){var a,t;return(0,o.A)().wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(r.prev=0,e.usernameExists=!1,a={username:e.form.username,firstName:e.form.firstName,lastName:e.form.lastName,email:e.form.email,country:e.form.country,password:e.form.password},t=(0,u.t0)(e.form.username),!t){r.next=7;break}return e.usernameExists=!0,r.abrupt("return");case 7:(0,u._z)(a),e.$router.push("/login"),r.next=15;break;case 11:r.prev=11,r.t0=r["catch"](0),console.log(r.t0.response),e.form.submitError=r.t0.response.data.message;case 15:case"end":return r.stop()}}),r,null,[[0,11]])})))()},onRegister:function(){this.$v.form.$touch(),this.$v.form.$anyError||this.Register()},onReset:function(){var e=this;this.form={username:"",firstName:"",lastName:"",email:"",country:null,password:"",confirmedPassword:""},this.$nextTick((function(){e.$v.$reset()}))}}},f=d;var c=a(1656),v=(0,c.A)(f,t,s,!1,null,"394a3abf",null);const p=v.exports},2062:(e,r,a)=>{var t=a(6518),s=a(9213).map,o=a(597),i=o("map");t({target:"Array",proto:!0,forced:!i},{map:function(e){return s(this,e,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=136.bcad37e8.js.map