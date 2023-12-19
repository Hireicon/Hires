"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[938],{4938:(A,d,l)=>{l.r(d),l.d(d,{LoginModule:()=>L});var c=l(6814),a=l(6223),m=l(1331),e=l(5879),u=l(4855),f=l(2578),h=l(930);const _=["loginForm"];function v(n,s){if(1&n&&(e.TgZ(0,"div",25),e._uU(1),e.qZA()),2&n){const o=e.oxw();e.xp6(1),e.hij(" ",o.error," ")}}function M(n,s){1&n&&(e.TgZ(0,"div",28),e._uU(1," Email is required "),e.qZA())}function C(n,s){1&n&&(e.TgZ(0,"div",28),e._uU(1," Invalid email format "),e.qZA())}function x(n,s){if(1&n&&(e.TgZ(0,"div",26),e.YNc(1,M,2,0,"div",27),e.YNc(2,C,2,0,"div",27),e.qZA()),2&n){e.oxw();const o=e.MAs(8);e.xp6(1),e.Q6J("ngIf",null==o.controls.email.errors?null:o.controls.email.errors.required),e.xp6(1),e.Q6J("ngIf",null==o.controls.email.errors?null:o.controls.email.errors.email)}}function P(n,s){1&n&&(e.TgZ(0,"div",28),e._uU(1," Password is required. "),e.qZA())}function w(n,s){1&n&&(e.TgZ(0,"div",28),e._uU(1," Password must be at least 6 characters long "),e.qZA())}function O(n,s){if(1&n&&(e.TgZ(0,"div",26),e.YNc(1,P,2,0,"div",27),e.YNc(2,w,2,0,"div",27),e.qZA()),2&n){e.oxw();const o=e.MAs(8);e.xp6(1),e.Q6J("ngIf",null==o.controls.password.errors?null:o.controls.password.errors.required),e.xp6(1),e.Q6J("ngIf",null==o.controls.password.errors?null:o.controls.password.errors.minlength)}}const b=function(){return{exact:!0}},Z=[{path:"",component:(()=>{var n;class s{constructor(t,i,r,g){this.router=t,this.authService=i,this.tokenService=r,this.sessionService=g,this.formData={email:"",password:"",rememberMe:!1},this.showPassword=!1,this.isFormSubmitted=!1,this.error="",this.loginData={},this.formData.rememberMe=!1;let p=this.sessionService.getRememberedUseremail();p&&(this.formData.email=p,this.formData.rememberMe=!0)}handleTogglePassword(){this.showPassword=!this.showPassword}login(){this.loginForm.valid&&(this.isFormSubmitted=!0,this.error="",this.loginData={eMail:this.formData.email,pwd:this.formData.password},this.tokenService.apiTokenPost(this.loginData).subscribe({next:t=>{this.isFormSubmitted=!1,this.formData.rememberMe?this.sessionService.setRememberedUseremail(this.formData.email):localStorage.removeItem("ch_remembered_useremail"),this.authService.login({userEmail:this.formData.email,userId:t.value.userId,token:t.value.token,userTypeName:t.value.userTypeName,userTypeId:t.value.userTypeId,consultancyId:t.value.consultancyId,consultancyUserId:t.value.consultancyUserId})},error:t=>{console.log(t),this.isFormSubmitted=!1,422==t.status?this.error=t.error?.errors[0].message:0==t.status&&(this.error="Network Error")}}))}ngOnInit(){}}return(n=s).\u0275fac=function(t){return new(t||n)(e.Y36(m.F0),e.Y36(u.e),e.Y36(f.B),e.Y36(h.m))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-login"]],viewQuery:function(t,i){if(1&t&&e.Gf(_,5),2&t){let r;e.iGM(r=e.CRH())&&(i.loginForm=r.first)}},decls:38,vars:11,consts:[[1,"container-fluid","login-wrapper"],[1,"row","login-box"],[1,"col-md-6","col-sm-12","offset-md-3"],[1,"email-login","card","shadow","rounded"],[1,"card-body","p-5"],[1,"mb-5","text-center"],[3,"ngSubmit"],["loginForm","ngForm"],["class","mt-2 mb-4 alert alert-danger d-flex align-items-center",4,"ngIf"],[1,"input-box"],[1,"form-group"],["for","loginFormEmail"],["type","email","id","email","name","email","placeholder","Email","pattern","[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}$","required","","email","",1,"form-control",3,"ngModel","ngModelChange"],["class","mt-2",4,"ngIf"],["for","password"],[1,"input-group"],["id","password","name","password","placeholder","Password","required","","minlength","6",1,"form-control",3,"type","ngModel","ngModelChange"],["id","basic-addon2",1,"material-symbols-outlined","input-group-text","text-h6","text-dark-500",3,"click"],[1,"form-check"],["type","checkbox","id","rememberMe","name","rememberMe",1,"form-check-input",3,"ngModel","ngModelChange"],["for","rememberMe",1,"form-check-label"],[1,"submit-box"],["type","submit",1,"btn","btn-primary","text-uppercase",3,"ngClass"],[1,"text-center"],["href","javascript:void(0)","routerLink","/signup","routerLinkActive","active",1,"ms-2",3,"routerLinkActiveOptions"],[1,"mt-2","mb-4","alert","alert-danger","d-flex","align-items-center"],[1,"mt-2"],["class","input-field-message",4,"ngIf"],[1,"input-field-message"]],template:function(t,i){if(1&t&&(e.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h4",5),e._uU(6,"Log In"),e.qZA(),e.TgZ(7,"form",6,7),e.NdJ("ngSubmit",function(){return i.login()}),e.YNc(9,v,2,1,"div",8),e.TgZ(10,"div",9)(11,"div",10)(12,"label",11),e._uU(13,"Email"),e.qZA(),e.TgZ(14,"input",12),e.NdJ("ngModelChange",function(g){return i.formData.email=g}),e.qZA(),e.YNc(15,x,3,2,"div",13),e.qZA()(),e.TgZ(16,"div",9)(17,"div",10)(18,"label",14),e._uU(19,"Password (6+ Characters)"),e.qZA(),e.TgZ(20,"div",15)(21,"input",16),e.NdJ("ngModelChange",function(g){return i.formData.password=g}),e.qZA(),e.TgZ(22,"span",17),e.NdJ("click",function(){return i.handleTogglePassword()}),e._uU(23),e.qZA()(),e.YNc(24,O,3,2,"div",13),e.qZA()(),e.TgZ(25,"div",9)(26,"div",10)(27,"div",18)(28,"input",19),e.NdJ("ngModelChange",function(g){return i.formData.rememberMe=g}),e.qZA(),e.TgZ(29,"label",20),e._uU(30,"Remember me"),e.qZA()()()(),e.TgZ(31,"div",21)(32,"button",22),e._uU(33," Log in "),e.qZA()(),e.TgZ(34,"div",23),e._uU(35," Don\u2019t have an account ? "),e.TgZ(36,"a",24),e._uU(37,"Sign Up"),e.qZA()()()()()()()()),2&t){const r=e.MAs(8);e.xp6(9),e.Q6J("ngIf",i.error),e.xp6(5),e.Q6J("ngModel",i.formData.email),e.xp6(1),e.Q6J("ngIf",r.submitted&&r.controls.email.invalid),e.xp6(6),e.Q6J("type",i.showPassword?"text":"password")("ngModel",i.formData.password),e.xp6(2),e.hij(" ",i.showPassword?"visibility_off":"visibility"," "),e.xp6(1),e.Q6J("ngIf",r.submitted&&r.controls.password.invalid),e.xp6(4),e.Q6J("ngModel",i.formData.rememberMe),e.xp6(4),e.Q6J("ngClass",i.isFormSubmitted?"loading":""),e.xp6(4),e.Q6J("routerLinkActiveOptions",e.DdM(10,b))}},dependencies:[c.mk,c.O5,a._Y,a.Fj,a.Wl,a.JJ,a.JL,a.Q7,a.wO,a.c5,a.on,a.On,a.F,m.rH,m.Od],styles:[".text-nano[_ngcontent-%COMP%]{font-size:10px}.text-xs[_ngcontent-%COMP%]{font-size:12px}.text-smr[_ngcontent-%COMP%]{font-size:13px}.text-sm[_ngcontent-%COMP%]{font-size:14px}.text-base[_ngcontent-%COMP%]{font-size:18px}.text-normal[_ngcontent-%COMP%]{font-size:16px}.text-regular[_ngcontent-%COMP%]{font-size:15px}h6[_ngcontent-%COMP%], .text-h6[_ngcontent-%COMP%]{font-size:20px}h5[_ngcontent-%COMP%], .text-h5[_ngcontent-%COMP%]{font-size:22px}h4[_ngcontent-%COMP%], .text-h4[_ngcontent-%COMP%]{font-size:24px}h3[_ngcontent-%COMP%], .text-h3[_ngcontent-%COMP%]{font-size:30px}h2[_ngcontent-%COMP%], .text-h2[_ngcontent-%COMP%]{font-size:34px}h1[_ngcontent-%COMP%], .text-h1[_ngcontent-%COMP%]{font-size:36px}.text-huge[_ngcontent-%COMP%]{font-size:50px}.text-big[_ngcontent-%COMP%]{font-size:38px}.ft-head[_ngcontent-%COMP%]{font-family:Metropolis,sans-serif;letter-spacing:.5px}.ft-default[_ngcontent-%COMP%], .login-wrapper[_ngcontent-%COMP%]   .email-login[_ngcontent-%COMP%]   .forgot-password[_ngcontent-%COMP%]{font-family:Albert Sans,sans-serif;font-weight:400;letter-spacing:.2px}.ft-sp[_ngcontent-%COMP%]{font-family:Catamaran,sans-serif}.fw-light[_ngcontent-%COMP%]{font-weight:300}.fw-normal[_ngcontent-%COMP%]{font-weight:400}.fw-medium[_ngcontent-%COMP%]{font-weight:500}.fw-semibold[_ngcontent-%COMP%]{font-weight:600}.fw-bold[_ngcontent-%COMP%]{font-weight:700}.ls--2[_ngcontent-%COMP%]{letter-spacing:.2px}.ls--25[_ngcontent-%COMP%]{letter-spacing:.25px}.ls--4[_ngcontent-%COMP%]{letter-spacing:.4px}.ls--15[_ngcontent-%COMP%]{letter-spacing:1.5px}.lh-14[_ngcontent-%COMP%]{line-height:14px}.lh-18[_ngcontent-%COMP%]{line-height:18px}.login-wrapper[_ngcontent-%COMP%]   .email-login[_ngcontent-%COMP%]   .forgot-password[_ngcontent-%COMP%]{font-size:14px}"]}),s})()}];let T=(()=>{var n;class s{}return(n=s).\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[m.Bz.forChild(Z),m.Bz]}),s})(),L=(()=>{var n;class s{}return(n=s).\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[c.ez,a.u5,a.UX,T]}),s})()}}]);