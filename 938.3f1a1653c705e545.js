"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[938],{2578:(A,v,c)=>{c.d(v,{B:()=>y});var _=c(9862),u=c(5907),t=c(9398),e=c(4593),M=c(5879);let y=(()=>{var w;class O{constructor(s,o,i){this.httpClient=s,this.basePath="https://hiresapi.azurewebsites.net",this.defaultHeaders=new _.WM,this.configuration=new e.V,i&&(this.configuration=i),"string"!=typeof this.configuration.basePath&&(Array.isArray(o)&&o.length>0&&(o=o[0]),"string"!=typeof o&&(o=this.basePath),this.configuration.basePath=o),this.encoder=this.configuration.encoder||new u.H}addToHttpParams(s,o,i){return"object"!=typeof o||o instanceof Date?this.addToHttpParamsRecursive(s,o,i):this.addToHttpParamsRecursive(s,o)}addToHttpParamsRecursive(s,o,i){if(null==o)return s;if("object"==typeof o)if(Array.isArray(o))o.forEach(r=>s=this.addToHttpParamsRecursive(s,r,i));else if(o instanceof Date){if(null==i)throw Error("key may not be null if value is Date");s=s.append(i,o.toISOString().substring(0,10))}else Object.keys(o).forEach(r=>s=this.addToHttpParamsRecursive(s,o[r],null!=i?`${i}.${r}`:r));else{if(null==i)throw Error("key may not be null if value is not object or array");s=s.append(i,o)}return s}apiTokenFunctionsGet(s="body",o=!1,i){let d,r=this.defaultHeaders;d=this.configuration.lookupCredential("Bearer"),d&&(r=r.set("Authorization",d));let a=i&&i.httpHeaderAccept;void 0===a&&(a=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==a&&(r=r.set("Accept",a));let p=i&&i.context;void 0===p&&(p=new _.qT);let f="json";return a&&(f=a.startsWith("text")?"text":this.configuration.isJsonMime(a)?"json":"blob"),this.httpClient.request("get",`${this.configuration.basePath}/api/Token/Functions`,{context:p,responseType:f,withCredentials:this.configuration.withCredentials,headers:r,observe:s,reportProgress:o})}apiTokenPost(s,o="body",i=!1,r){let a,d=this.defaultHeaders;a=this.configuration.lookupCredential("Bearer"),a&&(d=d.set("Authorization",a));let p=r&&r.httpHeaderAccept;void 0===p&&(p=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==p&&(d=d.set("Accept",p));let f=r&&r.context;void 0===f&&(f=new _.qT);const x=this.configuration.selectHeaderContentType(["application/json","text/json","application/*+json"]);void 0!==x&&(d=d.set("Content-Type",x));let P="json";return p&&(P=p.startsWith("text")?"text":this.configuration.isJsonMime(p)?"json":"blob"),this.httpClient.request("post",`${this.configuration.basePath}/api/Token`,{context:f,body:s,responseType:P,withCredentials:this.configuration.withCredentials,headers:d,observe:o,reportProgress:i})}apiTokenRefreshGet(s="body",o=!1,i){let d,r=this.defaultHeaders;d=this.configuration.lookupCredential("Bearer"),d&&(r=r.set("Authorization",d));let a=i&&i.httpHeaderAccept;void 0===a&&(a=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==a&&(r=r.set("Accept",a));let p=i&&i.context;void 0===p&&(p=new _.qT);let f="json";return a&&(f=a.startsWith("text")?"text":this.configuration.isJsonMime(a)?"json":"blob"),this.httpClient.request("get",`${this.configuration.basePath}/api/Token/Refresh`,{context:p,responseType:f,withCredentials:this.configuration.withCredentials,headers:r,observe:s,reportProgress:o})}apiTokenValidateGet(s="body",o=!1,i){let d,r=this.defaultHeaders;d=this.configuration.lookupCredential("Bearer"),d&&(r=r.set("Authorization",d));let a=i&&i.httpHeaderAccept;void 0===a&&(a=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==a&&(r=r.set("Accept",a));let p=i&&i.context;void 0===p&&(p=new _.qT);let f="json";return a&&(f=a.startsWith("text")?"text":this.configuration.isJsonMime(a)?"json":"blob"),this.httpClient.request("get",`${this.configuration.basePath}/api/Token/Validate`,{context:p,responseType:f,withCredentials:this.configuration.withCredentials,headers:r,observe:s,reportProgress:o})}}return(w=O).\u0275fac=function(s){return new(s||w)(M.LFG(_.eN),M.LFG(t.G,8),M.LFG(e.V,8))},w.\u0275prov=M.Yz7({token:w,factory:w.\u0275fac,providedIn:"root"}),O})()},4593:(A,v,c)=>{c.d(v,{V:()=>_});class _{constructor(t={}){this.apiKeys=t.apiKeys,this.username=t.username,this.password=t.password,this.accessToken=t.accessToken,this.basePath=t.basePath,this.withCredentials=t.withCredentials,this.encoder=t.encoder,this.encodeParam=t.encodeParam?t.encodeParam:e=>this.defaultEncodeParam(e),this.credentials=t.credentials?t.credentials:{},this.credentials.Bearer||(this.credentials.Bearer=()=>{if(null!=this.apiKeys)return this.apiKeys.Bearer||this.apiKeys.Authorization})}selectHeaderContentType(t){if(0===t.length)return;const e=t.find(M=>this.isJsonMime(M));return void 0===e?t[0]:e}selectHeaderAccept(t){if(0===t.length)return;const e=t.find(M=>this.isJsonMime(M));return void 0===e?t[0]:e}isJsonMime(t){const e=new RegExp("^(application/json|[^;/ \t]+/[^;/ \t]+[+]json)[ \t]*(;.*)?$","i");return null!==t&&(e.test(t)||"application/json-patch+json"===t.toLowerCase())}lookupCredential(t){const e=this.credentials[t];return"function"==typeof e?e():e}defaultEncodeParam(t){const e="date-time"===t.dataFormat&&t.value instanceof Date?t.value.toISOString():t.value;return encodeURIComponent(String(e))}}},5907:(A,v,c)=>{c.d(v,{H:()=>_});class _{encodeKey(t){return encodeURIComponent(t)}encodeValue(t){return encodeURIComponent(t)}decodeKey(t){return decodeURIComponent(t)}decodeValue(t){return decodeURIComponent(t)}}},9398:(A,v,c)=>{c.d(v,{G:()=>u});const u=new(c(5879).OlP)("basePath")},4938:(A,v,c)=>{c.r(v),c.d(v,{LoginModule:()=>P});var _=c(6814),u=c(6223),t=c(1331),e=c(5879),M=c(4855),y=c(2578),w=c(930);const O=["loginForm"];function H(n,m){if(1&n&&(e.TgZ(0,"div",26),e._uU(1),e.qZA()),2&n){const g=e.oxw();e.xp6(1),e.hij(" ",g.error," ")}}function s(n,m){1&n&&(e.TgZ(0,"div",29),e._uU(1," Email is required "),e.qZA())}function o(n,m){1&n&&(e.TgZ(0,"div",29),e._uU(1," Invalid email format "),e.qZA())}function i(n,m){if(1&n&&(e.TgZ(0,"div",27),e.YNc(1,s,2,0,"div",28),e.YNc(2,o,2,0,"div",28),e.qZA()),2&n){e.oxw();const g=e.MAs(8);e.xp6(1),e.Q6J("ngIf",null==g.controls.email.errors?null:g.controls.email.errors.required),e.xp6(1),e.Q6J("ngIf",null==g.controls.email.errors?null:g.controls.email.errors.email)}}function r(n,m){1&n&&(e.TgZ(0,"div",29),e._uU(1," Password is required. "),e.qZA())}function d(n,m){1&n&&(e.TgZ(0,"div",29),e._uU(1," Password must be at least 6 characters long "),e.qZA())}function a(n,m){if(1&n&&(e.TgZ(0,"div",27),e.YNc(1,r,2,0,"div",28),e.YNc(2,d,2,0,"div",28),e.qZA()),2&n){e.oxw();const g=e.MAs(8);e.xp6(1),e.Q6J("ngIf",null==g.controls.password.errors?null:g.controls.password.errors.required),e.xp6(1),e.Q6J("ngIf",null==g.controls.password.errors?null:g.controls.password.errors.minlength)}}const p=function(){return{exact:!0}},T=[{path:"",component:(()=>{var n;class m{constructor(l,h,C,b){this.router=l,this.authService=h,this.tokenService=C,this.sessionService=b,this.formData={email:"",password:"",rememberMe:!1},this.showPassword=!1,this.isFormSubmitted=!1,this.error="",this.loginData={},this.formData.rememberMe=!1;let L=this.sessionService.getRememberedUseremail();L&&(this.formData.email=L,this.formData.rememberMe=!0)}handleTogglePassword(){this.showPassword=!this.showPassword}login(){this.loginForm.valid&&(this.isFormSubmitted=!0,this.error="",this.loginData={eMail:this.formData.email,pwd:this.formData.password},this.tokenService.apiTokenPost(this.loginData).subscribe({next:l=>{console.log(l),this.isFormSubmitted=!1,this.formData.rememberMe?this.sessionService.setRememberedUseremail(this.formData.email):localStorage.removeItem("rememberedUseremail"),this.authService.login({userEmail:this.formData.email,userId:l.value.userId,token:l.value.token,userTypeName:l.value.userTypeName,userTypeId:l.value.userTypeId,consultancyId:l.value.consultancyId,consultancyUserId:l.value.consultancyUserId})},error:l=>{console.log(l),this.isFormSubmitted=!1,422==l.status?this.error=l.error?.errors[0].message:0==l.status&&(this.error="Network Error")}}))}ngOnInit(){}}return(n=m).\u0275fac=function(l){return new(l||n)(e.Y36(t.F0),e.Y36(M.e),e.Y36(y.B),e.Y36(w.m))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-login"]],viewQuery:function(l,h){if(1&l&&e.Gf(O,5),2&l){let C;e.iGM(C=e.CRH())&&(h.loginForm=C.first)}},decls:38,vars:11,consts:[[1,"container-fluid","login-wrapper"],[1,"row","login-box"],[1,"col-md-6","col-sm-12","offset-md-3"],[1,"email-login","card","shadow","rounded"],[1,"card-body","p-5"],[1,"mb-5","text-center"],[3,"ngSubmit"],["loginForm","ngForm"],["class","mt-2 mb-4 alert alert-danger d-flex align-items-center",4,"ngIf"],[1,"input-box"],[1,"form-group"],["for","loginFormEmail"],["type","email","id","email","name","email","placeholder","Email","pattern","[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}$","required","","email","",1,"form-control",3,"ngModel","ngModelChange"],["class","mt-2",4,"ngIf"],["for","password"],[1,"input-group"],["id","password","name","password","placeholder","Password","required","","minlength","6",1,"form-control",3,"type","ngModel","ngModelChange"],["id","basic-addon2",1,"input-group-text",3,"click"],[1,"far",3,"ngClass"],[1,"form-check"],["type","checkbox","id","rememberMe","name","rememberMe",1,"form-check-input",3,"ngModel","ngModelChange"],["for","rememberMe",1,"form-check-label"],[1,"submit-box"],["type","submit",1,"btn","btn-primary","text-uppercase",3,"ngClass"],[1,"text-center"],["href","javascript:void(0)","routerLink","/signup","routerLinkActive","active",1,"ms-2",3,"routerLinkActiveOptions"],[1,"mt-2","mb-4","alert","alert-danger","d-flex","align-items-center"],[1,"mt-2"],["class","input-field-message",4,"ngIf"],[1,"input-field-message"]],template:function(l,h){if(1&l&&(e.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h3",5),e._uU(6,"Log In"),e.qZA(),e.TgZ(7,"form",6,7),e.NdJ("ngSubmit",function(){return h.login()}),e.YNc(9,H,2,1,"div",8),e.TgZ(10,"div",9)(11,"div",10)(12,"label",11),e._uU(13,"Email"),e.qZA(),e.TgZ(14,"input",12),e.NdJ("ngModelChange",function(b){return h.formData.email=b}),e.qZA(),e.YNc(15,i,3,2,"div",13),e.qZA()(),e.TgZ(16,"div",9)(17,"div",10)(18,"label",14),e._uU(19,"Password (6+ Characters)"),e.qZA(),e.TgZ(20,"div",15)(21,"input",16),e.NdJ("ngModelChange",function(b){return h.formData.password=b}),e.qZA(),e.TgZ(22,"span",17),e.NdJ("click",function(){return h.handleTogglePassword()}),e._UZ(23,"i",18),e.qZA()(),e.YNc(24,a,3,2,"div",13),e.qZA()(),e.TgZ(25,"div",9)(26,"div",10)(27,"div",19)(28,"input",20),e.NdJ("ngModelChange",function(b){return h.formData.rememberMe=b}),e.qZA(),e.TgZ(29,"label",21),e._uU(30,"Remember me"),e.qZA()()()(),e.TgZ(31,"div",22)(32,"button",23),e._uU(33," Log in "),e.qZA()(),e.TgZ(34,"div",24),e._uU(35," Don\u2019t have an account ? "),e.TgZ(36,"a",25),e._uU(37,"Sign Up"),e.qZA()()()()()()()()),2&l){const C=e.MAs(8);e.xp6(9),e.Q6J("ngIf",h.error),e.xp6(5),e.Q6J("ngModel",h.formData.email),e.xp6(1),e.Q6J("ngIf",C.submitted&&C.controls.email.invalid),e.xp6(6),e.Q6J("type",h.showPassword?"text":"password")("ngModel",h.formData.password),e.xp6(2),e.Q6J("ngClass",h.showPassword?"fa-eye-slash":"fa-eye"),e.xp6(1),e.Q6J("ngIf",C.submitted&&C.controls.password.invalid),e.xp6(4),e.Q6J("ngModel",h.formData.rememberMe),e.xp6(4),e.Q6J("ngClass",h.isFormSubmitted?"loading":""),e.xp6(4),e.Q6J("routerLinkActiveOptions",e.DdM(10,p))}},dependencies:[_.mk,_.O5,u._Y,u.Fj,u.Wl,u.JJ,u.JL,u.Q7,u.wO,u.c5,u.on,u.On,u.F,t.rH,t.Od],styles:[".text-xs[_ngcontent-%COMP%]{font-size:12px}.text-smr[_ngcontent-%COMP%]{font-size:13px}.text-sm[_ngcontent-%COMP%]{font-size:14px}.text-base[_ngcontent-%COMP%]{font-size:18px}.text-normal[_ngcontent-%COMP%]{font-size:16px}.text-regular[_ngcontent-%COMP%]{font-size:15px}h6[_ngcontent-%COMP%], .text-h6[_ngcontent-%COMP%]{font-size:20px}h5[_ngcontent-%COMP%], .text-h5[_ngcontent-%COMP%]{font-size:22px}h4[_ngcontent-%COMP%], .text-h4[_ngcontent-%COMP%]{font-size:24px}h3[_ngcontent-%COMP%], .text-h3[_ngcontent-%COMP%]{font-size:30px}h2[_ngcontent-%COMP%], .text-h2[_ngcontent-%COMP%]{font-size:34px}h1[_ngcontent-%COMP%], .text-h1[_ngcontent-%COMP%]{font-size:36px}.text-huge[_ngcontent-%COMP%]{font-size:50px}.text-big[_ngcontent-%COMP%]{font-size:38px}.ft-head[_ngcontent-%COMP%]{font-family:Metropolis,sans-serif;letter-spacing:.5px}.ft-default[_ngcontent-%COMP%], .login-wrapper[_ngcontent-%COMP%]   .email-login[_ngcontent-%COMP%]   .forgot-password[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400;letter-spacing:.2px}.ft-sp[_ngcontent-%COMP%]{font-family:Catamaran,sans-serif}.fw-light[_ngcontent-%COMP%]{font-weight:300}.fw-normal[_ngcontent-%COMP%]{font-weight:400}.fw-medium[_ngcontent-%COMP%]{font-weight:500}.fw-semibold[_ngcontent-%COMP%]{font-weight:600}.fw-bold[_ngcontent-%COMP%]{font-weight:700}.ls--2[_ngcontent-%COMP%]{letter-spacing:.2px}.ls--25[_ngcontent-%COMP%]{letter-spacing:.25px}.ls--4[_ngcontent-%COMP%]{letter-spacing:.4px}.ls--15[_ngcontent-%COMP%]{letter-spacing:1.5px}.lh-14[_ngcontent-%COMP%]{line-height:14px}.lh-18[_ngcontent-%COMP%]{line-height:18px}.login-wrapper[_ngcontent-%COMP%]   .email-login[_ngcontent-%COMP%]   .forgot-password[_ngcontent-%COMP%]{font-size:14px}"]}),m})()}];let x=(()=>{var n;class m{}return(n=m).\u0275fac=function(l){return new(l||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[t.Bz.forChild(T),t.Bz]}),m})(),P=(()=>{var n;class m{}return(n=m).\u0275fac=function(l){return new(l||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[_.ez,u.u5,u.UX,x]}),m})()}}]);