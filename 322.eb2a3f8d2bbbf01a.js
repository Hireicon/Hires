"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[322],{8473:(q,b,c)=>{c.d(b,{r:()=>S});var o=c(5879),v=c(6223),e=c(1670),y=c(6814),I=c(674);function T(f,_){1&f&&(o.TgZ(0,"span",6),o._uU(1,"*"),o.qZA())}function D(f,_){1&f&&o._UZ(0,"i",10)}function P(f,_){1&f&&o._UZ(0,"i",11)}function w(f,_){if(1&f){const p=o.EpF();o.TgZ(0,"span",7),o.NdJ("click",function(){o.CHM(p);const l=o.oxw();return o.KtG(l.clearList())}),o.YNc(1,D,1,0,"i",8),o.YNc(2,P,1,0,"i",9),o.qZA()}if(2&f){const p=o.oxw();o.xp6(1),o.Q6J("ngIf",!p.selectedItem),o.xp6(1),o.Q6J("ngIf",p.selectedItem)}}function E(f,_){if(1&f){const p=o.EpF();o.ynx(0),o.TgZ(1,"li",15),o.NdJ("click",function(){const h=o.CHM(p).$implicit,g=o.oxw(2);return o.KtG(g.getSelectedItem(h))}),o._uU(2),o.qZA(),o.BQk()}if(2&f){const p=_.$implicit,u=o.oxw(2);o.xp6(2),o.Oqu(u.getItemData(p))}}function R(f,_){if(1&f&&(o.TgZ(0,"div",12)(1,"div",13),o.YNc(2,E,3,1,"ng-container",14),o.qZA()()),2&f){const p=o.oxw();o.xp6(2),o.Q6J("ngForOf",p.fieldList)}}let S=(()=>{var f;class _{constructor(u){this.element=u,this.fieldDisabled=!1,this.selectedItem=null,this.isItemSelected=!1,this.isExpanded=!1,this.queryChange=new o.vpe,this.inputChange=new o.vpe}isFieldRequired(){return this.fieldRequired}getItemData(u){let l=this.fieldType.split(","),h="";return l.forEach((g,x)=>{h=`${h+u[g]}${x!==l.length-1?", ":""}`}),h}getSelectedItem(u){let l=this.fieldType.split(","),h="";l.forEach((g,x)=>{h=`${h+u[g]}${x!==l.length-1?", ":""}`}),this.fieldModel=h,this.inputChange.emit(u),this.selectedItem=u,this.isExpanded=!1}clearList(){this.fieldModel="",this.selectedItem=null}handleModelChange(){this.fieldModel.length>1?(this.isExpanded=!0,this.queryChange.emit(this.fieldModel)):this.isExpanded=!1}ngOnInit(){}ngOnChanges(u){if(!e.ZP.isEmpty(this.editValue)&&this.isEdit&&!this.fieldModel&&e.ZP.isEmpty(this.selectedItem)){let l=this.fieldType.split(","),h="";l.forEach((g,x)=>{h=`${h+this.editValue[g]}${x!==l.length-1?", ":""}`}),this.fieldModel=h,this.inputChange.emit(this.editValue)}}}return(f=_).\u0275fac=function(u){return new(u||f)(o.Y36(o.SBq))},f.\u0275cmp=o.Xpm({type:f,selectors:[["app-search-field"]],inputs:{fieldName:"fieldName",fieldText:"fieldText",fieldPlaceholder:"fieldPlaceholder",fieldModel:"fieldModel",fieldRequired:"fieldRequired",fieldList:"fieldList",fieldType:"fieldType",isEdit:"isEdit",editValue:"editValue",fieldDisabled:"fieldDisabled"},outputs:{queryChange:"queryChange",inputChange:"inputChange"},features:[o._Bn([],[{provide:v.gN,useExisting:v.F}]),o.TTD],decls:7,vars:10,consts:[[1,"form-group"],[3,"for"],["class","ms-2 font-medium",4,"ngIf"],["type","text","autocomplete","off",1,"form-control","search",3,"placeholder","name","ngModel","required","disabled","ngModelChange"],["class","search-control",3,"click",4,"ngIf"],["class","dropdown-wrapper show",4,"ngIf"],[1,"ms-2","font-medium"],[1,"search-control",3,"click"],["class","fa fa-search","aria-hidden","true",4,"ngIf"],["class","fa fa-times pointer","aria-hidden","true",4,"ngIf"],["aria-hidden","true",1,"fa","fa-search"],["aria-hidden","true",1,"fa","fa-times","pointer"],[1,"dropdown-wrapper","show"],[1,"list-group","dropdown"],[4,"ngFor","ngForOf"],[1,"list-group-item",3,"click"]],template:function(u,l){1&u&&(o.TgZ(0,"div",0)(1,"label",1),o._uU(2),o.YNc(3,T,2,0,"span",2),o.qZA(),o.TgZ(4,"input",3),o.NdJ("ngModelChange",function(g){return l.fieldModel=g})("ngModelChange",function(){return l.handleModelChange()}),o.qZA(),o.YNc(5,w,3,2,"span",4),o.YNc(6,R,3,1,"div",5),o.qZA()),2&u&&(o.xp6(1),o.s9C("for",l.fieldName),o.xp6(1),o.Oqu(l.fieldText),o.xp6(1),o.Q6J("ngIf",l.isFieldRequired()),o.xp6(1),o.s9C("placeholder",l.fieldPlaceholder),o.s9C("name",l.fieldName),o.Q6J("ngModel",l.fieldModel)("required",l.fieldRequired)("disabled",l.fieldDisabled),o.xp6(1),o.Q6J("ngIf",!l.fieldDisabled),o.xp6(1),o.Q6J("ngIf",l.isExpanded))},dependencies:[y.sg,y.O5,v.Fj,v.JJ,v.Q7,v.On,I.Co]}),_})()},4322:(q,b,c)=>{c.r(b),c.d(b,{AddCandidateModule:()=>_e});var o=c(6814),v=c(8524),e=c(5879),y=c(2096),I=c(5619);const T=new e.OlP("recaptcha-language"),D=new e.OlP("recaptcha-base-url"),P=new e.OlP("recaptcha-nonce-tag"),E=(new e.OlP("recaptcha-settings"),new e.OlP("recaptcha-v3-site-key")),S_loadScript=function R(n,d,a,t,i){window.ng2recaptchaloaded=()=>{d(grecaptcha)};const s=document.createElement("script");s.innerHTML="",s.src=`${t||"https://www.google.com/recaptcha/api.js"}?render=${n}&onload=ng2recaptchaloaded${a}`,i&&s.setAttribute("nonce",i),s.async=!0,s.defer=!0,document.head.appendChild(s)};let f=(()=>{var n;class d{constructor(t,i,s,r,m){this.platformId=t,this.language=i,this.baseUrl=s,this.nonce=r,this.v3SiteKey=m,this.init(),this.ready=(0,o.NF)(this.platformId)?d.ready.asObservable():(0,y.of)()}init(){if(!d.ready&&(0,o.NF)(this.platformId)){const t=new I.X(null);d.ready=t,S_loadScript(this.v3SiteKey||"explicit",r=>t.next(r),this.language?"&hl="+this.language:"",this.baseUrl,this.nonce)}}}return(n=d).ready=null,n.\u0275fac=function(t){return new(t||n)(e.LFG(e.Lbi),e.LFG(T,8),e.LFG(D,8),e.LFG(P,8),e.LFG(E,8))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac}),d})(),u=(()=>{var n;class d{}return(n=d).\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({}),d})(),l=(()=>{var n;class d{}return(n=d).\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[f],imports:[u]}),d})();var N=c(1114),A=c(1331),M=c(1670),F=c(930),k=c(3782),J=c(9945),U=c(9229),C=c(6223),j=c(8473),Q=c(1967),V=c(2870),G=c(1027),z=c(4890);const B=["addCandidateForm"];function H(n,d){1&n&&(e.TgZ(0,"div",50),e._uU(1," Candidate name is required "),e.qZA())}function K(n,d){if(1&n&&(e.TgZ(0,"div",48),e.YNc(1,H,2,0,"div",49),e.qZA()),2&n){e.oxw();const a=e.MAs(6);e.xp6(1),e.Q6J("ngIf",null==a.controls.candidateName.errors?null:a.controls.candidateName.errors.required)}}function Y(n,d){1&n&&(e.TgZ(0,"div",50),e._uU(1," Candidate Title is required "),e.qZA())}function $(n,d){if(1&n&&(e.TgZ(0,"div",48),e.YNc(1,Y,2,0,"div",49),e.qZA()),2&n){e.oxw();const a=e.MAs(6);e.xp6(1),e.Q6J("ngIf",null==a.controls.title.errors?null:a.controls.title.errors.required)}}function W(n,d){1&n&&(e.TgZ(0,"div",50),e._uU(1," Total Experience is required "),e.qZA())}function X(n,d){if(1&n&&(e.TgZ(0,"div",48),e.YNc(1,W,2,0,"div",49),e.qZA()),2&n){e.oxw();const a=e.MAs(6);e.xp6(1),e.Q6J("ngIf",null==a.controls.totalExp.errors?null:a.controls.totalExp.errors.required)}}function ee(n,d){1&n&&(e.TgZ(0,"div",50),e._uU(1," Visa Status is required "),e.qZA())}function te(n,d){if(1&n&&(e.TgZ(0,"div",51),e.YNc(1,ee,2,0,"div",49),e.qZA()),2&n){e.oxw();const a=e.MAs(6);e.xp6(1),e.Q6J("ngIf",null==a.controls.visaId.errors?null:a.controls.visaId.errors.required)}}function ie(n,d){1&n&&(e.TgZ(0,"div",50),e._uU(1," Current Location is required "),e.qZA())}function ne(n,d){if(1&n&&(e.TgZ(0,"div",51),e.YNc(1,ie,2,0,"div",49),e.qZA()),2&n){e.oxw();const a=e.MAs(6);e.xp6(1),e.Q6J("ngIf",null==a.controls.cityId.errors?null:a.controls.cityId.errors.required)}}function ae(n,d){if(1&n){const a=e.EpF();e.TgZ(0,"div",52)(1,"input",53),e.NdJ("ngModelChange",function(i){e.CHM(a);const s=e.oxw(2);return e.KtG(s.selectRemoteLocation=i)})("change",function(){const s=e.CHM(a).$implicit,r=e.oxw(2);return e.KtG(r.onRemoteChange(s.value))}),e.qZA(),e.TgZ(2,"label",54),e._uU(3),e.qZA()()}if(2&n){const a=d.$implicit,t=e.oxw(2);e.xp6(1),e.Q6J("id",a.id)("value",a.value)("ngModel",t.selectRemoteLocation),e.xp6(1),e.Q6J("for",a.id),e.xp6(1),e.hij(" ",a.label," ")}}function oe(n,d){1&n&&(e.TgZ(0,"div",50),e._uU(1," Location preference required "),e.qZA())}function se(n,d){if(1&n&&(e.TgZ(0,"div",55),e.YNc(1,oe,2,0,"div",49),e.qZA()),2&n){e.oxw();const a=e.MAs(6);e.xp6(1),e.Q6J("ngIf",null==a.controls.locationPrefOption.errors?null:a.controls.locationPrefOption.errors.required)}}function de(n,d){1&n&&(e.TgZ(0,"div",50),e._uU(1," Relocation is required "),e.qZA())}function re(n,d){if(1&n&&(e.TgZ(0,"div",51),e.YNc(1,de,2,0,"div",49),e.qZA()),2&n){e.oxw();const a=e.MAs(6);e.xp6(1),e.Q6J("ngIf",null==a.controls.stateId.errors?null:a.controls.stateId.errors.required)}}function ce(n,d){if(1&n){const a=e.EpF();e.TgZ(0,"div",56)(1,"span"),e._uU(2),e.qZA(),e.TgZ(3,"span",57),e.NdJ("click",function(){e.CHM(a);const i=e.oxw(2);return e.KtG(i.deleteFile())}),e._uU(4," close "),e.qZA()()}if(2&n){const a=e.oxw(2);e.xp6(2),e.Oqu(a.selectedFile.name)}}function le(n,d){if(1&n&&e._UZ(0,"view-resume",60),2&n){const a=e.oxw(3);e.Q6J("doc",a.candidateDocuments[0].doc)}}function fe(n,d){if(1&n&&(e.TgZ(0,"div",58),e.YNc(1,le,1,1,"view-resume",59),e.qZA()),2&n){const a=e.oxw(2);e.xp6(1),e.Q6J("ngIf",a.candidateDocuments.length>0)}}function ue(n,d){if(1&n){const a=e.EpF();e.ynx(0),e.TgZ(1,"h5",8),e._uU(2,"Please fill in your candidate information"),e.qZA(),e.TgZ(3,"div",2)(4,"div",3)(5,"form",9,10),e.NdJ("ngSubmit",function(){e.CHM(a);const i=e.oxw();return e.KtG(i.addCandidate())}),e.TgZ(7,"div",11)(8,"div",2)(9,"div",12)(10,"div",13)(11,"div",14)(12,"label",15),e._uU(13,"Candidate Name "),e.TgZ(14,"span",16),e._uU(15,"*"),e.qZA()(),e.TgZ(16,"input",17),e.NdJ("ngModelChange",function(i){e.CHM(a);const s=e.oxw();return e.KtG(s.formData.candidateName=i)}),e.qZA(),e.YNc(17,K,2,1,"div",18),e.qZA()()(),e.TgZ(18,"div",12)(19,"div",13)(20,"div",14)(21,"label",19),e._uU(22,"Candidate Position/Current Title "),e.TgZ(23,"span",16),e._uU(24,"*"),e.qZA()(),e.TgZ(25,"input",20),e.NdJ("ngModelChange",function(i){e.CHM(a);const s=e.oxw();return e.KtG(s.formData.title=i)}),e.qZA(),e.YNc(26,$,2,1,"div",18),e.qZA()()(),e.TgZ(27,"div",12)(28,"div",13)(29,"div",14)(30,"label",21),e._uU(31,"IT Experience Total "),e.TgZ(32,"span",16),e._uU(33,"*"),e.qZA()(),e.TgZ(34,"input",22),e.NdJ("ngModelChange",function(i){e.CHM(a);const s=e.oxw();return e.KtG(s.formData.totalExp=i)}),e.qZA(),e.YNc(35,X,2,1,"div",18),e.qZA()()(),e.TgZ(36,"div",23)(37,"div",24)(38,"app-select-field",25),e.NdJ("inputChange",function(i){e.CHM(a);const s=e.oxw();return e.KtG(s.onBillingListChange(i))}),e.qZA()()(),e.TgZ(39,"div",12)(40,"div",24)(41,"app-select-field",26),e.NdJ("inputChange",function(i){e.CHM(a);const s=e.oxw();return e.KtG(s.onVisaChange(i))}),e.qZA(),e.YNc(42,te,2,1,"div",27),e.qZA()(),e.TgZ(43,"div",12)(44,"div",28)(45,"app-search-field",29),e.NdJ("queryChange",function(i){e.CHM(a);const s=e.oxw();return e.KtG(s.onLocationQuery(i))})("inputChange",function(i){e.CHM(a);const s=e.oxw();return e.KtG(s.onLocationChange(i))}),e.qZA(),e.YNc(46,ne,2,1,"div",27),e.qZA()()()(),e.TgZ(47,"h5",30),e._uU(48," Location Preference "),e.qZA(),e.TgZ(49,"div",2)(50,"div",12)(51,"div",31),e.YNc(52,ae,4,5,"div",32),e.YNc(53,se,2,1,"div",33),e.qZA()()(),e.TgZ(54,"div",2)(55,"div",34)(56,"div",28)(57,"app-multi-search-field",35),e.NdJ("queryChange",function(i){e.CHM(a);const s=e.oxw();return e.KtG(s.onReLocationQuery(i))})("inputChange",function(i){e.CHM(a);const s=e.oxw();return e.KtG(s.onSelectedLocations(i))}),e.qZA(),e.YNc(58,re,2,1,"div",27),e.qZA()(),e.TgZ(59,"div",23)(60,"div",28)(61,"app-multi-search-field",36),e.NdJ("queryChange",function(i){e.CHM(a);const s=e.oxw();return e.KtG(s.onSkillQuery(i))})("inputChange",function(i){e.CHM(a);const s=e.oxw();return e.KtG(s.onSelectedSkills(i))}),e.qZA()()(),e.TgZ(62,"div",12)(63,"div",24)(64,"app-select-field",37),e.NdJ("inputChange",function(i){e.CHM(a);const s=e.oxw();return e.KtG(s.onAvailabilityChange(i))}),e.qZA()()()(),e.TgZ(65,"div",2)(66,"div",23)(67,"div",13)(68,"div",14)(69,"label",38),e._uU(70,"LinkedIn Profile URL (Optional)"),e.qZA(),e.TgZ(71,"input",39),e.NdJ("ngModelChange",function(i){e.CHM(a);const s=e.oxw();return e.KtG(s.formData.linkedIn=i)}),e.qZA()()()()(),e.TgZ(72,"div",40)(73,"div",41)(74,"div",42),e._uU(75," Attach resume "),e.qZA(),e.TgZ(76,"input",43),e.NdJ("change",function(i){e.CHM(a);const s=e.oxw();return e.KtG(s.attachResume(i))}),e.qZA()()(),e.YNc(77,ce,5,1,"div",44),e.YNc(78,fe,2,1,"div",45),e.TgZ(79,"div",46),e._UZ(80,"submit-btn",47),e.qZA()()()(),e.BQk()}if(2&n){const a=e.MAs(6),t=e.oxw();e.xp6(16),e.Q6J("ngModel",t.formData.candidateName),e.xp6(1),e.Q6J("ngIf",a.submitted&&a.controls.candidateName.invalid),e.xp6(8),e.Q6J("ngModel",t.formData.title),e.xp6(1),e.Q6J("ngIf",a.submitted&&a.controls.title.invalid),e.xp6(8),e.Q6J("ngModel",t.formData.totalExp),e.xp6(1),e.Q6J("ngIf",a.submitted&&a.controls.totalExp.invalid),e.xp6(3),e.Q6J("fieldRequired",!1)("fieldList",t.selectBillingList)("isEdit",t.isEdit)("editValue",t.formData.billingRangeId),e.xp6(3),e.Q6J("fieldRequired",!0)("fieldList",t.selectVisaList)("isEdit",t.isEdit)("editValue",t.formData.visaId),e.xp6(1),e.Q6J("ngIf",a.submitted&&a.controls.visaId.invalid),e.xp6(3),e.Q6J("fieldRequired",!0)("fieldList",t.selectLocationList)("isEdit",t.isEdit)("editValue",t.formData.city),e.xp6(1),e.Q6J("ngIf",a.submitted&&a.controls.cityId.invalid),e.xp6(6),e.Q6J("ngForOf",t.locationPrefList),e.xp6(1),e.Q6J("ngIf",a.submitted&&a.controls.locationPrefOption.invalid),e.xp6(2),e.Q6J("hidden","3"!==t.selectRemoteLocation),e.xp6(2),e.Q6J("fieldRequired","3"===t.selectRemoteLocation)("fieldList",t.selectReLocationList)("isEdit",t.isEdit)("editValue",t.formData.candidatePrefLocations),e.xp6(1),e.Q6J("ngIf",(null==a?null:a.submitted)&&a.controls.stateId.invalid),e.xp6(3),e.Q6J("fieldRequired",!1)("fieldList",t.selectSkillList)("isEdit",t.isEdit)("editValue",t.formData.candidateProfileSkills),e.xp6(3),e.Q6J("fieldRequired",!1)("fieldList",t.selectAvailabilityList)("isEdit",t.isEdit)("editValue",t.formData.availability),e.xp6(7),e.Q6J("ngModel",t.formData.linkedIn),e.xp6(5),e.Q6J("ngClass",t.selectedFile?"disabled":""),e.xp6(1),e.Q6J("ngIf",t.selectedFile),e.xp6(1),e.Q6J("ngIf",t.candidateDocuments.length>0&&!t.selectedFile),e.xp6(2),e.Q6J("isSubmit",t.isFormSubmitted)}}function he(n,d){if(1&n){const a=e.EpF();e.TgZ(0,"div",61)(1,"h5",62)(2,"div",63)(3,"span",64),e._uU(4,"done"),e.qZA()(),e._uU(5," Candidate has been added to your Hotlist. "),e.qZA(),e.TgZ(6,"div",65)(7,"div",66)(8,"a",67),e.NdJ("click",function(){e.CHM(a);const i=e.oxw();return e.KtG(i.isCandidatePosted=!i.isCandidatePosted)}),e._uU(9,"Add another Candidate"),e.qZA()(),e.TgZ(10,"div",66)(11,"a",68),e._uU(12,"View my Candidates (Hotlist)"),e.qZA()(),e.TgZ(13,"div",66)(14,"a",69),e._uU(15,"Search jobs and Apply"),e.qZA()()()()}}const pe=[{path:"",component:(()=>{var n;class d{constructor(t,i,s,r,m,O){this.router=t,this.route=i,this.sessionService=s,this.candidateProfileService=r,this.commonService=m,this.toastr=O,this.formData={candidateName:"",title:"",totalExp:null,billingRangeId:"",fromAmt:0,toAmt:0,linkedIn:"",visaId:null,cityId:null,skillId:"null",availability:null,stateId:null,candidateProfileSkills:[],candidatePrefLocations:[]},this.selectRemoteLocation="",this.selectBillingList=[{id:1,range:"Less than 50"},{id:2,range:"50-60"},{id:3,range:"60-70"},{id:4,range:"70-80"},{id:5,range:"80-90"},{id:6,range:"90-100"},{id:7,range:"100+"}],this.locationPrefList=[{label:"Remote Only",value:"1",id:"locationRemoteProject"},{label:"Open to relocate anywhere",value:"2",id:"locationRelocateAnywhere"},{label:"Open to relocate specific states",value:"3",id:"locationRelocateSpecific"}],this.candidate={},this.isEdit=!1,this.candidateId=null,this.selectedFile=null,this.candidateDocuments=[],this.isFormSubmitted=!1,this.isCandidatePosted=!1,t.events.subscribe(L=>{L instanceof A.m2&&this.route.params.subscribe(Z=>{Z.id?(this.candidateId=Z.id,this.isEdit=!0,this.editForm()):this.isEdit=!1})})}editForm(){this.candidateProfileService.apiCandidateProfileGetGet(this.candidateId).subscribe({next:t=>{let i=t.value;if(this.formData={id:i.id,userId:i.userId,active:i.active,consultingRoleId:i.consultingRoleId,postedDate:i.postedDate,statusId:i.statusId,consultancyUserId:i.consultancyUserId,backgroundchecked:!0,comment:"",email:"",employerInfo:"",passportno:"",phone:"",resume:"",visaExpiryDate:i.visaExpiryDate,firstArrivalDate:i.firstArrivalDate,candidateName:i.candidateName,title:i.title,totalExp:i.totalExp,fromAmt:i.fromAmt,toAmt:i.toAmt,linkedIn:i.linkedIn,visaId:i.visaId,city:i.city,cityId:i.cityId,skillId:null,availability:i.availability,candidateProfileSkills:[],candidatePrefLocations:[]},0==i.fromAmt&&0==i.toAmt||0==i.fromAmt&&50==i.toAmt)this.formData.billingRangeId=1;else{const s=i.fromAmt.toString()+"-"+i.toAmt.toString(),r=this.selectBillingList.filter(m=>m.range==s);this.formData.billingRangeId=r[0].id}if(i.canRelocate?(this.selectRemoteLocation="3",this.formData.stateId=null):i.remoteOnly?(this.selectRemoteLocation="1",this.formData.stateId=1):i.anyLocation&&(this.selectRemoteLocation="2",this.formData.stateId=2),!M.ZP.isEmpty(i.candidateProfileSkills)){let s=[];i.candidateProfileSkills.forEach(r=>{s.push({skillId:r.skillId,name:r.name})}),this.formData.candidateProfileSkills=s}if(!M.ZP.isEmpty(i.candidatePrefLocations)){let s=[];i.candidatePrefLocations.forEach(r=>{s.push({cityId:r.cityId,city1:r.stateCode+"-"+r.stateName,cityName:r.cityName,stateName:r.stateName,stateCode:r.stateCode})}),this.formData.candidatePrefLocations=s}this.candidateDocuments=i.candidateDocuments},error:t=>{}})}scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})}onBillingListChange(t){let s=t.range.split("-");1!=s.length?(this.formData.fromAmt=s[0],this.formData.toAmt=s[1]):(this.formData.fromAmt=0,this.formData.toAmt=50)}onVisaChange(t){this.formData.visaId=t.id}onAvailabilityChange(t){this.formData.availability=t.id}onLocationQuery(t){this.commonService.apiCommonCityGet(t,void 0,!1).subscribe({next:i=>{this.selectLocationList=i.value},error:i=>{}})}onLocationChange(t){this.formData.cityId=t.id}onSkillQuery(t){this.commonService.apiCommonSkillsGet(t).subscribe({next:i=>{this.selectSkillList=i.value},error:i=>{}})}onRemoteChange(t){this.selectRemoteLocation=t,this.formData.stateId="3"!=t?parseInt(t):null}onReLocationQuery(t){this.commonService.apiCommonCityGet(t,void 0,!0).subscribe({next:i=>{this.selectReLocationList=i.value},error:i=>{}})}getRelocationRequired(){return"3"==this.selectRemoteLocation}onSelectedSkills(t){let i=[];M.ZP.isEmpty(t)?(this.formData.candidateProfileSkills=[],this.formData.skillId=null):(t.forEach((s,r)=>{i.push({id:r,candidateProfileid:this.formData.id,skillId:s.skillId||s.id,active:!0,proficiencyLevel:0,yearsOfExp:0})}),this.formData.candidateProfileSkills=i,this.formData.skillId=t[0].id)}onSelectedLocations(t){let i=[];M.ZP.isEmpty(t)?(this.formData.candidatePrefLocations=[],this.formData.stateId=null):(t.forEach((s,r)=>{i.push({id:r,candidateId:this.formData.id,cityId:s.id||s.cityId})}),this.formData.candidatePrefLocations=i,this.formData.stateId=t[0].id)}attachResume(t){this.selectedFile=t.target.files[0]}deleteFile(){this.selectedFile=null}uploadResume(t){this.candidateProfileService.apiCandidateProfileUpdateDocumentPost(t,1,this.selectedFile).subscribe({next:i=>{this.successToast()},error:i=>{this.errorToast()}})}successToast(){this.toastr.success(`Candidate ${this.isEdit?"updated":"added"} successfully`,"",{timeOut:3e3,positionClass:"toast-top-center"}),this.scrollToTop()}errorToast(){this.toastr.error("Some error occured","",{timeOut:3e3,positionClass:"toast-top-center"}),this.scrollToTop()}addCandidate(){this.isFormSubmitted=!0;for(const t in this.addCandidateForm.controls)this.addCandidateForm.controls.hasOwnProperty(t)&&this.addCandidateForm.controls[t].invalid&&console.log(`Invalid field: ${t}`);this.addCandidateForm.valid?this.isEdit?(this.candidate={id:this.formData.id,userId:this.formData.userId,consultancyUserId:this.formData.consultancyUserId,postedDate:this.formData.postedDate,statusId:this.formData.statusId,backgroundchecked:this.formData.backgroundchecked,comment:this.formData.comment,email:this.formData.email,employerInfo:this.formData.employerInfo,passportno:this.formData.passportno,phone:this.formData.phone,resume:this.formData.resume,visaExpiryDate:this.formData.visaExpiryDate,firstArrivalDate:this.formData.firstArrivalDate,candidateName:this.formData.candidateName,title:this.formData.title,active:this.formData.active,canRelocate:"3"===this.selectRemoteLocation,totalExp:this.formData.totalExp,linkedIn:this.formData.linkedIn,availability:this.formData.availability,visaId:this.formData.visaId,cityId:this.formData.cityId,remoteOnly:"1"===this.selectRemoteLocation,anyLocation:"2"===this.selectRemoteLocation,fromAmt:this.formData.fromAmt,toAmt:this.formData.toAmt,consultingRoleId:this.formData.consultingRoleId,candidateProfileSkills:this.formData.candidateProfileSkills,candidatePrefLocations:this.formData.candidatePrefLocations},this.candidateProfileService.apiCandidateProfileUpdatePut(this.candidate).subscribe({next:t=>{this.isFormSubmitted=!1,this.isCandidatePosted=!0,this.addCandidateForm.resetForm(),this.selectedFile?this.uploadResume(t.value.id):this.successToast()},error:t=>{this.isFormSubmitted=!1,this.isCandidatePosted=!0,this.errorToast()}})):(this.candidate={userId:this.sessionService.userId,consultancyUserId:this.sessionService.consultancyUserId,candidateName:this.formData.candidateName,title:this.formData.title,active:!0,postedDate:(new Date).toISOString(),canRelocate:"3"===this.selectRemoteLocation,totalExp:this.formData.totalExp,statusId:2,linkedIn:this.formData.linkedIn,availability:this.formData.availability,visaId:this.formData.visaId,cityId:this.formData.cityId,remoteOnly:"1"===this.selectRemoteLocation,anyLocation:"2"===this.selectRemoteLocation,fromAmt:this.formData.fromAmt,toAmt:this.formData.toAmt,consultingRoleId:1,candidateProfileSkills:this.formData.candidateProfileSkills,candidatePrefLocations:this.formData.candidatePrefLocations},this.candidateProfileService.apiCandidateProfileAddPost(this.candidate).subscribe({next:t=>{this.isFormSubmitted=!1,this.isCandidatePosted=!0,this.addCandidateForm.resetForm(),this.selectedFile?this.uploadResume(t.value.id):this.successToast()},error:t=>{this.errorToast(),this.isFormSubmitted=!1,this.isCandidatePosted=!0}})):(this.scrollToTop(),this.isFormSubmitted=!1)}ngOnInit(){this.commonService.apiCommonVisaGet().subscribe({next:t=>{this.selectVisaList=t.value},error:t=>{}}),this.commonService.apiCommonCandidateAvailabilityGet().subscribe({next:t=>{this.selectAvailabilityList=t.value},error:t=>{}})}}return(n=d).\u0275fac=function(t){return new(t||n)(e.Y36(A.F0),e.Y36(A.gz),e.Y36(F.m),e.Y36(k.M),e.Y36(J.v_),e.Y36(U._W))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-add-candidate"]],viewQuery:function(t,i){if(1&t&&e.Gf(B,5),2&t){let s;e.iGM(s=e.CRH())&&(i.addCandidateForm=s.first)}},decls:8,vars:2,consts:[[1,"add-candidate-wrapper"],[1,"container"],[1,"row"],[1,"col-sm-12"],[1,"card","p-4"],[1,"card-body"],[4,"ngIf"],["class","success-message",4,"ngIf"],[1,"title","mb-3"],["enctype","multipart/form-data",3,"ngSubmit"],["addCandidateForm","ngForm"],[1,"form-box"],[1,"col-md-6"],[1,"input-box"],[1,"form-group"],["for","candidateName"],[1,"req"],["type","text","placeholder","Name","name","candidateName","required","","autocomplete","off",1,"form-control",3,"ngModel","ngModelChange"],["class","mt-2",4,"ngIf"],["for","title"],["type","text","placeholder","Name","name","title","required","","autocomplete","off",1,"form-control",3,"ngModel","ngModelChange"],["for","totalExp"],["type","number","placeholder","in Yrs","name","totalExp","required","","autocomplete","off",1,"form-control",3,"ngModel","ngModelChange"],[1,"col-sm-6"],[1,"input-box","select-box"],["fieldName","billingRangeId","fieldText","Billing Range Expected","fieldType","range","fieldPlaceholder","Market",3,"fieldRequired","fieldList","isEdit","editValue","inputChange"],["fieldName","visaId","fieldText","Visa Status","fieldType","name","fieldPlaceholder","Select",3,"fieldRequired","fieldList","isEdit","editValue","inputChange"],["class","mb-3",4,"ngIf"],[1,"input-box","search-box"],["fieldName","cityId","fieldText","Current Location","fieldType","city1,stateName,countryName","fieldPlaceholder","Enter first few characters of the city",3,"fieldRequired","fieldList","isEdit","editValue","queryChange","inputChange"],[1,"my-3","border-bottom","pb-2"],[1,"form-group","mb-4"],["class","form-check",4,"ngFor","ngForOf"],["class","mt-1",4,"ngIf"],[1,"col-sm-6",3,"hidden"],["fieldName","stateId","fieldText","Select Specific States below","fieldType","city1","fieldPlaceholder","Enter first few characters of the state","fieldItemMinLimit","1","fieldItemMaxLimit","10",3,"fieldRequired","fieldList","isEdit","editValue","queryChange","inputChange"],["fieldName","skillId","fieldText","Skills ( Add maximum 5 skills)","fieldType","name","fieldPlaceholder","Skill","fieldItemMaxLimit","5",3,"fieldRequired","fieldList","isEdit","editValue","queryChange","inputChange"],["fieldName","availability","fieldText","Availability","fieldType","name","fieldPlaceholder","Select",3,"fieldRequired","fieldList","isEdit","editValue","inputChange"],["for","candidateExperience"],["type","text","placeholder","Link","name","linkedInProfile",1,"form-control",3,"ngModel","ngModelChange"],[1,"attach-resume"],[1,"icon-box"],[1,"btn","btn-sm","btn-outline-secondary"],["type","file","accept",".doc, .docx, .pdf, .xls, .xlsx",3,"ngClass","change"],["class","file-box text-xs mt-1",4,"ngIf"],["class","d-flex mt-1",4,"ngIf"],[1,"submit-box"],["defaultText","Submit","defaultActionText","Submitting...","editText","Update","editActionText","Updating...",3,"isSubmit"],[1,"mt-2"],["class","input-field-message",4,"ngIf"],[1,"input-field-message"],[1,"mb-3"],[1,"form-check"],["type","radio","name","locationPrefOption","required","",1,"form-check-input",3,"id","value","ngModel","ngModelChange","change"],[1,"form-check-label",3,"for"],[1,"mt-1"],[1,"file-box","text-xs","mt-1"],[1,"material-symbols-outlined","text-sm","ms-1","pointer",3,"click"],[1,"d-flex","mt-1"],[3,"doc",4,"ngIf"],[3,"doc"],[1,"success-message"],[1,"title","d-flex","align-items-center"],[1,"tick","d-flex","align-items-center","justify-content-center"],[1,"material-symbols-outlined","text-h4","text-white"],[1,"actions","d-flex","align-items-center"],[1,"action-item"],["href","javascript:void(0)",1,"action-link","text-secondary",3,"click"],["href","javascript:void(0)","routerLink","/myhotlist",1,"action-link","text-secondary"],["href","javascript:void(0)","routerLink","/search-jobs",1,"action-link","text-secondary"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),e.YNc(6,ue,81,41,"ng-container",6),e.YNc(7,he,16,0,"div",7),e.qZA()()()()()()),2&t&&(e.xp6(6),e.Q6J("ngIf",!i.isCandidatePosted),e.xp6(1),e.Q6J("ngIf",i.isCandidatePosted))},dependencies:[o.mk,o.sg,o.O5,C._Y,C.Fj,C.wV,C._,C.JJ,C.JL,C.Q7,C.On,C.F,j.r,Q.l,V.b,G.p,z.H,A.rH],styles:[".text-nano[_ngcontent-%COMP%]{font-size:10px}.text-xs[_ngcontent-%COMP%]{font-size:12px}.text-smr[_ngcontent-%COMP%]{font-size:13px}.text-sm[_ngcontent-%COMP%]{font-size:14px}.text-base[_ngcontent-%COMP%]{font-size:18px}.text-normal[_ngcontent-%COMP%]{font-size:16px}.text-regular[_ngcontent-%COMP%]{font-size:15px}h6[_ngcontent-%COMP%], .text-h6[_ngcontent-%COMP%]{font-size:20px}h5[_ngcontent-%COMP%], .text-h5[_ngcontent-%COMP%]{font-size:22px}h4[_ngcontent-%COMP%], .text-h4[_ngcontent-%COMP%]{font-size:24px}h3[_ngcontent-%COMP%], .text-h3[_ngcontent-%COMP%]{font-size:30px}h2[_ngcontent-%COMP%], .text-h2[_ngcontent-%COMP%]{font-size:34px}h1[_ngcontent-%COMP%], .text-h1[_ngcontent-%COMP%]{font-size:36px}.text-huge[_ngcontent-%COMP%]{font-size:50px}.text-big[_ngcontent-%COMP%]{font-size:38px}.ft-head[_ngcontent-%COMP%]{font-family:Metropolis,sans-serif;letter-spacing:.5px}.ft-default[_ngcontent-%COMP%]{font-family:Albert Sans,sans-serif;font-weight:400;letter-spacing:.2px}.ft-sp[_ngcontent-%COMP%]{font-family:Catamaran,sans-serif}.fw-light[_ngcontent-%COMP%]{font-weight:300}.fw-normal[_ngcontent-%COMP%]{font-weight:400}.fw-medium[_ngcontent-%COMP%]{font-weight:500}.fw-semibold[_ngcontent-%COMP%]{font-weight:600}.fw-bold[_ngcontent-%COMP%]{font-weight:700}.ls--2[_ngcontent-%COMP%]{letter-spacing:.2px}.ls--25[_ngcontent-%COMP%]{letter-spacing:.25px}.ls--4[_ngcontent-%COMP%]{letter-spacing:.4px}.ls--15[_ngcontent-%COMP%]{letter-spacing:1.5px}.lh-14[_ngcontent-%COMP%]{line-height:14px}.lh-18[_ngcontent-%COMP%]{line-height:18px}.add-candidate-wrapper[_ngcontent-%COMP%]   .attach-resume[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%]{position:relative;display:inline-block;overflow:hidden}.add-candidate-wrapper[_ngcontent-%COMP%]   .attach-resume[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{opacity:0;position:absolute;left:0;width:100%;height:100%;transform:scale(3,4);z-index:1000}.add-candidate-wrapper[_ngcontent-%COMP%]   .attach-resume[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%]   input.disabled[_ngcontent-%COMP%]{pointer-events:none}.add-candidate-wrapper[_ngcontent-%COMP%]   .attach-resume[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-file-upload-button{cursor:pointer}.add-candidate-wrapper[_ngcontent-%COMP%]   .file-box[_ngcontent-%COMP%]{display:inline-flex;align-items:center;margin:0 0 10px;padding:4px 8px;background-color:#fefce8;border:1px solid #facc15;color:#854d0e;border-radius:4px!important}.add-candidate-wrapper[_ngcontent-%COMP%]   .submit-box[_ngcontent-%COMP%]{margin:20px 0 30px}"]}),d})()}];let me=(()=>{var n;class d{}return(n=d).\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[A.Bz.forChild(pe),A.Bz]}),d})(),_e=(()=>{var n;class d{}return(n=d).\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[o.ez,v.m.forRoot(),N.Q,l,me]}),d})()}}]);