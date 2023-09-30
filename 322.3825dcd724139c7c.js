"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[322],{4322:(X,p,r)=>{r.r(p),r.d(p,{AddCandidateModule:()=>W});var h=r(6814),C=r(4574),e=r(5879),_=r(2096),A=r(5619);const y=new e.OlP("recaptcha-language"),b=new e.OlP("recaptcha-base-url"),I=new e.OlP("recaptcha-nonce-tag"),R=(new e.OlP("recaptcha-settings"),new e.OlP("recaptcha-v3-site-key")),T_loadScript=function D(a,d,s,i,t){window.ng2recaptchaloaded=()=>{d(grecaptcha)};const n=document.createElement("script");n.innerHTML="",n.src=`${i||"https://www.google.com/recaptcha/api.js"}?render=${a}&onload=ng2recaptchaloaded${s}`,t&&n.setAttribute("nonce",t),n.async=!0,n.defer=!0,document.head.appendChild(n)};let E=(()=>{var a;class d{constructor(i,t,n,o,l){this.platformId=i,this.language=t,this.baseUrl=n,this.nonce=o,this.v3SiteKey=l,this.init(),this.ready=(0,h.NF)(this.platformId)?d.ready.asObservable():(0,_.of)()}init(){if(!d.ready&&(0,h.NF)(this.platformId)){const i=new A.X(null);d.ready=i,T_loadScript(this.v3SiteKey||"explicit",o=>i.next(o),this.language?"&hl="+this.language:"",this.baseUrl,this.nonce)}}}return(a=d).ready=null,a.\u0275fac=function(i){return new(i||a)(e.LFG(e.Lbi),e.LFG(y,8),e.LFG(b,8),e.LFG(I,8),e.LFG(R,8))},a.\u0275prov=e.Yz7({token:a,factory:a.\u0275fac}),d})(),x=(()=>{var a;class d{}return(a=d).\u0275fac=function(i){return new(i||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({}),d})(),L=(()=>{var a;class d{}return(a=d).\u0275fac=function(i){return new(i||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({providers:[E],imports:[x]}),d})();var u=r(1331),f=r(1670),S=r(930),M=r(3782),Z=r(9945),N=r(9229),c=r(6223),q=r(8473),P=r(1967),k=r(2870);const w=["addCandidateForm"];function j(a,d){1&a&&(e.TgZ(0,"div",47),e._uU(1,"Candidate name is required"),e.qZA())}function J(a,d){if(1&a&&(e.TgZ(0,"div",45),e.YNc(1,j,2,0,"div",46),e.qZA()),2&a){e.oxw();const s=e.MAs(11);e.xp6(1),e.Q6J("ngIf",null==s.controls.candidateName.errors?null:s.controls.candidateName.errors.required)}}function O(a,d){1&a&&(e.TgZ(0,"div",47),e._uU(1," Candidate Title is required "),e.qZA())}function V(a,d){if(1&a&&(e.TgZ(0,"div",45),e.YNc(1,O,2,0,"div",46),e.qZA()),2&a){e.oxw();const s=e.MAs(11);e.xp6(1),e.Q6J("ngIf",null==s.controls.title.errors?null:s.controls.title.errors.required)}}function F(a,d){1&a&&(e.TgZ(0,"div",47),e._uU(1," Total Experience is required"),e.qZA())}function U(a,d){if(1&a&&(e.TgZ(0,"div",45),e.YNc(1,F,2,0,"div",46),e.qZA()),2&a){e.oxw();const s=e.MAs(11);e.xp6(1),e.Q6J("ngIf",null==s.controls.totalExp.errors?null:s.controls.totalExp.errors.required)}}function Q(a,d){1&a&&(e.TgZ(0,"div",47),e._uU(1,"Visa Status is required"),e.qZA())}function B(a,d){if(1&a&&(e.TgZ(0,"div",48),e.YNc(1,Q,2,0,"div",46),e.qZA()),2&a){e.oxw();const s=e.MAs(11);e.xp6(1),e.Q6J("ngIf",null==s.controls.visaId.errors?null:s.controls.visaId.errors.required)}}function z(a,d){1&a&&(e.TgZ(0,"div",47),e._uU(1," Current Location is required "),e.qZA())}function Y(a,d){if(1&a&&(e.TgZ(0,"div",48),e.YNc(1,z,2,0,"div",46),e.qZA()),2&a){e.oxw();const s=e.MAs(11);e.xp6(1),e.Q6J("ngIf",null==s.controls.cityId.errors?null:s.controls.cityId.errors.required)}}function G(a,d){1&a&&(e.TgZ(0,"div",47),e._uU(1," Relocation is required "),e.qZA())}function H(a,d){if(1&a&&(e.TgZ(0,"div",48),e.YNc(1,G,2,0,"div",46),e.qZA()),2&a){e.oxw();const s=e.MAs(11);e.xp6(1),e.Q6J("ngIf",null==s.controls.stateId.errors?null:s.controls.stateId.errors.required)}}const K=[{path:"",component:(()=>{var a;class d{constructor(i,t,n,o,l,g){this.router=i,this.route=t,this.sessionService=n,this.candidateProfileService=o,this.commonService=l,this.toastr=g,this.formData={candidateName:"",title:"",totalExp:null,billingRangeId:"",fromAmt:0,toAmt:0,linkedIn:"",visaId:null,cityId:null,skillId:"null",availability:null,stateId:null,candidateProfileSkills:[],candidatePrefLocations:[]},this.selectRemoteLocation="",this.selectBillingList=[{id:1,range:"Less than 50"},{id:2,range:"50-60"},{id:3,range:"60-70"},{id:4,range:"70-80"},{id:5,range:"80-90"},{id:6,range:"90-100"},{id:7,range:"100+"}],this.candidate={},this.isEdit=!1,this.candidateId=null,i.events.subscribe(v=>{v instanceof u.m2&&this.route.params.subscribe(m=>{m.id?(this.candidateId=m.id,this.isEdit=!0,this.editForm()):this.isEdit=!1})})}editForm(){this.candidateProfileService.apiCandidateProfileGetGet(this.candidateId).subscribe({next:i=>{let t=i.value;if(console.log(t),this.formData={id:t.id,userId:t.userId,active:t.active,consultingRoleId:t.consultingRoleId,postedDate:t.postedDate,statusId:t.statusId,consultancyUserId:t.consultancyUserId,backgroundchecked:!0,comment:"",email:"",employerInfo:"",passportno:"",phone:"",resume:"",visaExpiryDate:t.visaExpiryDate,firstArrivalDate:t.firstArrivalDate,candidateName:t.candidateName,title:t.title,totalExp:t.totalExp,fromAmt:t.fromAmt,toAmt:t.toAmt,linkedIn:t.linkedIn,visaId:t.visaId,city:t.city,cityId:t.cityId,skillId:null,availability:t.availability,candidateProfileSkills:[],candidatePrefLocations:[]},0==t.fromAmt&&0==t.toAmt||0==t.fromAmt&&50==t.toAmt)this.formData.billingRangeId=1;else{const n=t.fromAmt.toString()+"-"+t.toAmt.toString(),o=this.selectBillingList.filter(l=>l.range==n);this.formData.billingRangeId=o[0].id}if(t.canRelocate?(this.selectRemoteLocation="3",this.formData.stateId=null):t.remoteOnly?(this.selectRemoteLocation="1",this.formData.stateId=1):t.anyLocation&&(this.selectRemoteLocation="2",this.formData.stateId=2),!f.xb(t.candidateProfileSkills)){let n=[];t.candidateProfileSkills.forEach(o=>{n.push({skillId:o.skillId,name:o.name})}),this.formData.candidateProfileSkills=n}if(!f.xb(t.candidatePrefLocations)){let n=[];t.candidatePrefLocations.forEach(o=>{n.push({cityId:o.cityId,city1:o.stateCode+"-"+o.stateName,cityName:o.cityName,stateName:o.stateName,stateCode:o.stateCode})}),this.formData.candidatePrefLocations=n}},error:i=>{}})}scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})}onBillingListChange(i){let n=i.range.split("-");1!=n.length?(this.formData.fromAmt=n[0],this.formData.toAmt=n[1]):(this.formData.fromAmt=0,this.formData.toAmt=50)}onVisaChange(i){this.formData.visaId=i.id}onAvailabilityChange(i){this.formData.availability=i.id}onLocationQuery(i){this.commonService.apiCommonCityGet(i,void 0,!1).subscribe({next:t=>{this.selectLocationList=t.value},error:t=>{}})}onLocationChange(i){this.formData.cityId=i.id}onSkillQuery(i){this.commonService.apiCommonSkillsGet(i).subscribe({next:t=>{this.selectSkillList=t.value},error:t=>{}})}onRemoteChange(i){const t=i.target;this.selectRemoteLocation=t.value,console.log(t.value),this.formData.stateId="3"!=t.value?parseInt(t.value):null,console.log(this.formData.stateId)}onReLocationQuery(i){this.commonService.apiCommonCityGet(i,void 0,!0).subscribe({next:t=>{this.selectReLocationList=t.value},error:t=>{}})}getRelocationRequired(){return"3"==this.selectRemoteLocation}onSelectedSkills(i){let t=[];f.xb(i)?(this.formData.candidateProfileSkills=[],this.formData.skillId=null):(i.forEach((n,o)=>{t.push({id:o,candidateProfileid:this.formData.id,skillId:n.skillId||n.id,active:!0,proficiencyLevel:0,yearsOfExp:0})}),this.formData.candidateProfileSkills=t,this.formData.skillId=i[0].id)}onSelectedLocations(i){let t=[];f.xb(i)?(this.formData.candidatePrefLocations=[],this.formData.stateId=null):(i.forEach((n,o)=>{t.push({id:o,candidateId:this.formData.id,cityId:n.id||n.cityId})}),this.formData.candidatePrefLocations=t,this.formData.stateId=i[0].id)}addCandidate(){for(const i in this.addCandidateForm.controls)this.addCandidateForm.controls.hasOwnProperty(i)&&this.addCandidateForm.controls[i].invalid&&console.log(`Invalid field: ${i}`);this.addCandidateForm.valid?this.isEdit?(this.candidate={id:this.formData.id,userId:this.formData.userId,consultancyUserId:this.formData.consultancyUserId,postedDate:this.formData.postedDate,statusId:this.formData.statusId,backgroundchecked:this.formData.backgroundchecked,comment:this.formData.comment,email:this.formData.email,employerInfo:this.formData.employerInfo,passportno:this.formData.passportno,phone:this.formData.phone,resume:this.formData.resume,visaExpiryDate:this.formData.visaExpiryDate,firstArrivalDate:this.formData.firstArrivalDate,candidateName:this.formData.candidateName,title:this.formData.title,active:this.formData.active,canRelocate:"3"===this.selectRemoteLocation,totalExp:this.formData.totalExp,linkedIn:this.formData.linkedIn,availability:this.formData.availability,visaId:this.formData.visaId,cityId:this.formData.cityId,remoteOnly:"1"===this.selectRemoteLocation,anyLocation:"2"===this.selectRemoteLocation,fromAmt:this.formData.fromAmt,toAmt:this.formData.toAmt,consultingRoleId:this.formData.consultingRoleId,candidateProfileSkills:this.formData.candidateProfileSkills,candidatePrefLocations:this.formData.candidatePrefLocations},this.candidateProfileService.apiCandidateProfileUpdatePut(this.candidate).subscribe({next:i=>{this.toastr.success("Candidate updated successfully","",{timeOut:3e3,positionClass:"toast-top-center"}),this.scrollToTop()},error:i=>{this.toastr.error("Some error occured","",{timeOut:3e3,positionClass:"toast-top-center"}),this.scrollToTop()}})):(this.candidate={userId:this.sessionService.userId,consultancyUserId:this.sessionService.consultancyId,candidateName:this.formData.candidateName,title:this.formData.title,active:!0,postedDate:(new Date).toISOString(),canRelocate:"3"===this.selectRemoteLocation,totalExp:this.formData.totalExp,statusId:2,linkedIn:this.formData.linkedIn,availability:this.formData.availability,visaId:this.formData.visaId,cityId:this.formData.cityId,remoteOnly:"1"===this.selectRemoteLocation,anyLocation:"2"===this.selectRemoteLocation,fromAmt:this.formData.fromAmt,toAmt:this.formData.toAmt,consultingRoleId:1,candidateProfileSkills:this.formData.candidateProfileSkills,candidatePrefLocations:this.formData.candidatePrefLocations},this.candidateProfileService.apiCandidateProfileAddPost(this.candidate).subscribe({next:i=>{this.toastr.success("Candidate added successfully","",{timeOut:3e3,positionClass:"toast-top-center"}),this.scrollToTop()},error:i=>{this.toastr.error("Some error occured","",{timeOut:3e3,positionClass:"toast-top-center"}),this.scrollToTop()}})):this.scrollToTop()}ngOnInit(){this.commonService.apiCommonVisaGet().subscribe({next:i=>{this.selectVisaList=i.value},error:i=>{}}),this.commonService.apiCommonCandidateAvailabilityGet().subscribe({next:i=>{this.selectAvailabilityList=i.value},error:i=>{}})}}return(a=d).\u0275fac=function(i){return new(i||a)(e.Y36(u.F0),e.Y36(u.gz),e.Y36(S.m),e.Y36(M.M),e.Y36(Z.v_),e.Y36(N._W))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-add-candidate"]],viewQuery:function(i,t){if(1&i&&e.Gf(w,5),2&i){let n;e.iGM(n=e.CRH())&&(t.addCandidateForm=n.first)}},decls:91,vars:39,consts:[[1,"add-candidate-wrapper"],[1,"container"],[1,"row"],[1,"col-sm-12"],[1,"card","p-4"],[1,"card-body"],[1,"title","mb-3"],[3,"ngSubmit"],["addCandidateForm","ngForm"],[1,"form-box"],[1,"col-md-6"],[1,"input-box"],[1,"form-group"],["for","candidateName"],[1,"req"],["type","text","placeholder","Name","name","candidateName","required","","autocomplete","off",1,"form-control",3,"ngModel","ngModelChange"],["class","mt-2",4,"ngIf"],["for","title"],["type","text","placeholder","Name","name","title","required","","autocomplete","off",1,"form-control",3,"ngModel","ngModelChange"],["for","totalExp"],["type","number","placeholder","in Yrs","name","totalExp","required","","autocomplete","off",1,"form-control",3,"ngModel","ngModelChange"],[1,"col-sm-6"],[1,"input-box","select-box"],["fieldName","billingRangeId","fieldText","Billing Range Expected","fieldType","range","fieldPlaceholder","Market",3,"fieldRequired","fieldList","isEdit","editValue","inputChange"],["fieldName","visaId","fieldText","Visa Status","fieldType","name","fieldPlaceholder","Select",3,"fieldRequired","fieldList","isEdit","editValue","inputChange"],["class","mb-3",4,"ngIf"],[1,"input-box","search-box"],["fieldName","cityId","fieldText","Current Location","fieldType","city1,stateName,countryName","fieldPlaceholder","Enter",3,"fieldRequired","fieldList","isEdit","editValue","queryChange","inputChange"],["fieldName","skillId","fieldText","Skills ( Add maximum 5 skills)","fieldType","name","fieldPlaceholder","Skill","fieldItemMaxLimit","5",3,"fieldRequired","fieldList","isEdit","editValue","queryChange","inputChange"],["fieldName","availability","fieldText","Availability","fieldType","name","fieldPlaceholder","Select",3,"fieldRequired","fieldList","isEdit","editValue","inputChange"],[1,"my-3","border-bottom","pb-2","ft-sp"],[1,"form-group","mb-4"],[1,"form-check"],["type","radio","name","options","id","remoteProject","value","1",1,"form-check-input",3,"ngModel","ngModelChange","change"],["for","remoteProject",1,"form-check-label"],["type","radio","name","options","id","remoteRelocate","value","2",1,"form-check-input",3,"ngModel","ngModelChange","change"],["for","remoteRelocate",1,"form-check-label"],["type","radio","name","options","id","remoteRelocateSpecificLocation","value","3",1,"form-check-input",3,"ngModel","ngModelChange","change"],["for","remoteRelocateSpecificLocation",1,"form-check-label"],[3,"hidden"],["fieldName","stateId","fieldText","Select Specific States below","fieldType","city1","fieldPlaceholder","Select state","fieldItemMinLimit","1","fieldItemMaxLimit","10",3,"fieldRequired","fieldList","isEdit","editValue","queryChange","inputChange"],["for","candidateExperience"],["type","text","placeholder","Link","name","linkedInProfile",1,"form-control",3,"ngModel","ngModelChange"],[1,"submit-box"],["type","submit",1,"btn","green"],[1,"mt-2"],["class","input-field-message",4,"ngIf"],[1,"input-field-message"],[1,"mb-3"]],template:function(i,t){if(1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h4",6),e._uU(7,"Please fill in your Information"),e.qZA(),e.TgZ(8,"div",2)(9,"div",3)(10,"form",7,8),e.NdJ("ngSubmit",function(){return t.addCandidate()}),e.TgZ(12,"div",9)(13,"div",2)(14,"div",10)(15,"div",11)(16,"div",12)(17,"label",13),e._uU(18,"Candidate Name "),e.TgZ(19,"span",14),e._uU(20,"*"),e.qZA()(),e.TgZ(21,"input",15),e.NdJ("ngModelChange",function(o){return t.formData.candidateName=o}),e.qZA(),e.YNc(22,J,2,1,"div",16),e.qZA()()(),e.TgZ(23,"div",10)(24,"div",11)(25,"div",12)(26,"label",17),e._uU(27,"Candidate Position/Current Title "),e.TgZ(28,"span",14),e._uU(29,"*"),e.qZA()(),e.TgZ(30,"input",18),e.NdJ("ngModelChange",function(o){return t.formData.title=o}),e.qZA(),e.YNc(31,V,2,1,"div",16),e.qZA()()(),e.TgZ(32,"div",10)(33,"div",11)(34,"div",12)(35,"label",19),e._uU(36,"IT Experience Total "),e.TgZ(37,"span",14),e._uU(38,"*"),e.qZA()(),e.TgZ(39,"input",20),e.NdJ("ngModelChange",function(o){return t.formData.totalExp=o}),e.qZA(),e.YNc(40,U,2,1,"div",16),e.qZA()()(),e.TgZ(41,"div",21)(42,"div",22)(43,"app-select-field",23),e.NdJ("inputChange",function(o){return t.onBillingListChange(o)}),e.qZA()()(),e.TgZ(44,"div",10)(45,"div",22)(46,"app-select-field",24),e.NdJ("inputChange",function(o){return t.onVisaChange(o)}),e.qZA(),e.YNc(47,B,2,1,"div",25),e.qZA()(),e.TgZ(48,"div",10)(49,"div",26)(50,"app-search-field",27),e.NdJ("queryChange",function(o){return t.onLocationQuery(o)})("inputChange",function(o){return t.onLocationChange(o)}),e.qZA(),e.YNc(51,Y,2,1,"div",25),e.qZA()(),e.TgZ(52,"div",21)(53,"div",26)(54,"app-multi-search-field",28),e.NdJ("queryChange",function(o){return t.onSkillQuery(o)})("inputChange",function(o){return t.onSelectedSkills(o)}),e.qZA()()(),e.TgZ(55,"div",10)(56,"div",22)(57,"app-select-field",29),e.NdJ("inputChange",function(o){return t.onAvailabilityChange(o)}),e.qZA()()()()(),e.TgZ(58,"h5",30),e._uU(59,"Location Preference"),e.qZA(),e.TgZ(60,"div",2)(61,"div",10)(62,"div",31)(63,"div",32)(64,"input",33),e.NdJ("ngModelChange",function(o){return t.selectRemoteLocation=o})("change",function(o){return t.onRemoteChange(o)}),e.qZA(),e.TgZ(65,"label",34),e._uU(66," Looking only remote projects "),e.qZA()(),e.TgZ(67,"div",32)(68,"input",35),e.NdJ("ngModelChange",function(o){return t.selectRemoteLocation=o})("change",function(o){return t.onRemoteChange(o)}),e.qZA(),e.TgZ(69,"label",36),e._uU(70," Open to relocate anywhere "),e.qZA()(),e.TgZ(71,"div",32)(72,"input",37),e.NdJ("ngModelChange",function(o){return t.selectRemoteLocation=o})("change",function(o){return t.onRemoteChange(o)}),e.qZA(),e.TgZ(73,"label",38),e._uU(74," Open to relocate specific locations "),e.qZA()()()()(),e.TgZ(75,"div",39)(76,"div",2)(77,"div",21)(78,"div",26)(79,"app-multi-search-field",40),e.NdJ("queryChange",function(o){return t.onReLocationQuery(o)})("inputChange",function(o){return t.onSelectedLocations(o)}),e.qZA(),e.YNc(80,H,2,1,"div",25),e.qZA()()()(),e.TgZ(81,"div",2)(82,"div",21)(83,"div",11)(84,"div",12)(85,"label",41),e._uU(86,"LinkedIn Profile URL (Optional)"),e.qZA(),e.TgZ(87,"input",42),e.NdJ("ngModelChange",function(o){return t.formData.linkedIn=o}),e.qZA()()()()(),e.TgZ(88,"div",43)(89,"button",44),e._uU(90),e.qZA()()()()()()()()()()()),2&i){const n=e.MAs(11);e.xp6(21),e.Q6J("ngModel",t.formData.candidateName),e.xp6(1),e.Q6J("ngIf",n.submitted&&n.controls.candidateName.invalid),e.xp6(8),e.Q6J("ngModel",t.formData.title),e.xp6(1),e.Q6J("ngIf",n.submitted&&n.controls.title.invalid),e.xp6(8),e.Q6J("ngModel",t.formData.totalExp),e.xp6(1),e.Q6J("ngIf",n.submitted&&n.controls.totalExp.invalid),e.xp6(3),e.Q6J("fieldRequired",!1)("fieldList",t.selectBillingList)("isEdit",t.isEdit)("editValue",t.formData.billingRangeId),e.xp6(3),e.Q6J("fieldRequired",!0)("fieldList",t.selectVisaList)("isEdit",t.isEdit)("editValue",t.formData.visaId),e.xp6(1),e.Q6J("ngIf",n.submitted&&n.controls.visaId.invalid),e.xp6(3),e.Q6J("fieldRequired",!0)("fieldList",t.selectLocationList)("isEdit",t.isEdit)("editValue",t.formData.city),e.xp6(1),e.Q6J("ngIf",n.submitted&&n.controls.cityId.invalid),e.xp6(3),e.Q6J("fieldRequired",!1)("fieldList",t.selectSkillList)("isEdit",t.isEdit)("editValue",t.formData.candidateProfileSkills),e.xp6(3),e.Q6J("fieldRequired",!1)("fieldList",t.selectAvailabilityList)("isEdit",t.isEdit)("editValue",t.formData.availability),e.xp6(7),e.Q6J("ngModel",t.selectRemoteLocation),e.xp6(4),e.Q6J("ngModel",t.selectRemoteLocation),e.xp6(4),e.Q6J("ngModel",t.selectRemoteLocation),e.xp6(3),e.Q6J("hidden","3"!==t.selectRemoteLocation),e.xp6(4),e.Q6J("fieldRequired","3"===t.selectRemoteLocation)("fieldList",t.selectReLocationList)("isEdit",t.isEdit)("editValue",t.formData.candidatePrefLocations),e.xp6(1),e.Q6J("ngIf",(null==n?null:n.submitted)&&n.controls.stateId.invalid),e.xp6(7),e.Q6J("ngModel",t.formData.linkedIn),e.xp6(3),e.Oqu(t.isEdit?"Update":"Submit")}},dependencies:[h.O5,c._Y,c.Fj,c.wV,c._,c.JJ,c.JL,c.Q7,c.On,c.F,q.r,P.l,k.b],styles:[".add-candidate-wrapper[_ngcontent-%COMP%]   .submit-box[_ngcontent-%COMP%]{margin:20px 0 30px}"]}),d})()}];let $=(()=>{var a;class d{}return(a=d).\u0275fac=function(i){return new(i||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[u.Bz.forChild(K),u.Bz]}),d})(),W=(()=>{var a;class d{}return(a=d).\u0275fac=function(i){return new(i||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[h.ez,C.m.forRoot(),L,$]}),d})()}}]);