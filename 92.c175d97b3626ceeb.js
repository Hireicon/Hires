"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[92],{3760:(S,P,a)=>{a.d(P,{Hk:()=>m,MM:()=>v});var p=a(5879),C=a(6593);let m=(()=>{var o;class d{transform(s,g,x){return null!=g&&0!=g.length&&" "!=g&&(g=g.toString().toLowerCase(),x&&""!=x&&null!=s)?s.filter(function(u){return(u=u[x]).toLowerCase().indexOf(g)>-1}):s}}return(o=d).\u0275fac=function(s){return new(s||o)},o.\u0275pipe=p.Yjl({name:"simpleSearch",type:o,pure:!0}),d})(),v=(()=>{var o;class d{constructor(s){this.sanitizer=s}transform(s){return this.sanitizer.bypassSecurityTrustHtml(s)}}return(o=d).\u0275fac=function(s){return new(s||o)(p.Y36(C.H7,16))},o.\u0275pipe=p.Yjl({name:"keepHtml",type:o,pure:!1}),d})()},2742:(S,P,a)=>{a.d(P,{F:()=>t});var p=a(5619),C=a(9862),m=a(5879);new C.WM({"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"});let t=(()=>{var _;class M{constructor(o){this.http=o,this.passwordreset=new p.X(!1),this.passwordresetcast=this.passwordreset.asObservable(),this.skillSetData=new p.X(null),this.skillsetdatacast=this.skillSetData.asObservable(),this.locationSetData=new p.X(null),this.locationsetdatacast=this.locationSetData.asObservable()}isResetPassword(o){this.passwordreset.next(o)}getJsonData(){return this.http.get("assets/json/data.json")}setSkillData(o){this.skillSetData.next(o)}setLocationData(o){this.locationSetData.next(o)}}return(_=M).\u0275fac=function(o){return new(o||_)(m.LFG(C.eN))},_.\u0275prov=m.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"}),M})()},3657:(S,P,a)=>{a.r(P),a.d(P,{SearchHotlistModule:()=>U});var p=a(6814),C=a(4574),m=a(1331),h=a(1670),t=a(5879),_=a(7700),M=a(9945),v=a(3782),o=a(2742),d=a(1735),c=a(2780);function s(e,r){1&e&&(t.ynx(0),t.TgZ(1,"div",5),t._UZ(2,"div",6),t.qZA(),t.BQk())}function g(e,r){if(1&e&&(t.TgZ(0,"div"),t._uU(1),t.qZA()),2&e){const n=t.oxw(2);t.xp6(1),t.hij(" ",n.totalItems," hotlist(s) found ")}}function x(e,r){1&e&&(t.TgZ(0,"div"),t._uU(1,"No hotlists Available"),t.qZA())}function u(e,r){if(1&e&&(t.TgZ(0,"span",45),t._uU(1),t.qZA()),2&e){const n=r.$implicit;t.xp6(1),t.Oqu(n)}}function w(e,r){if(1&e&&(t.TgZ(0,"div",43),t.YNc(1,u,2,1,"span",44),t.qZA()),2&e){const n=t.oxw().$implicit;t.xp6(1),t.Q6J("ngForOf",n.skills)}}function y(e,r){1&e&&(t.TgZ(0,"div",43)(1,"span",46),t._uU(2,"No Skills Avaialble"),t.qZA()())}function Z(e,r){if(1&e&&(t.ynx(0),t.TgZ(1,"li",15)(2,"div",16)(3,"div",2)(4,"div",17)(5,"div",18)(6,"div",19)(7,"h6",20),t._uU(8),t.qZA(),t.TgZ(9,"p",21),t._uU(10),t.qZA()(),t.TgZ(11,"div",22)(12,"div",23),t._UZ(13,"i",24),t.TgZ(14,"p",25),t._uU(15),t.qZA()(),t.TgZ(16,"div",23),t._UZ(17,"i",26),t.TgZ(18,"p",25),t._uU(19),t.qZA()(),t.TgZ(20,"div",23),t._UZ(21,"i",27),t.TgZ(22,"p",25),t._uU(23),t.qZA()(),t._UZ(24,"div"),t.qZA(),t.TgZ(25,"div",28)(26,"p",29),t._uU(27,"Availability"),t.qZA(),t.TgZ(28,"p",30),t._uU(29),t.qZA()(),t.TgZ(30,"div",31)(31,"p",29),t._uU(32," Preferred location "),t.qZA(),t.TgZ(33,"p",30),t._uU(34),t.qZA()(),t.YNc(35,w,2,1,"div",32),t.YNc(36,y,3,0,"div",32),t.qZA()(),t.TgZ(37,"div",33)(38,"div",34)(39,"div",35),t._uU(40),t.qZA(),t.TgZ(41,"div",36)(42,"div",37),t._UZ(43,"img",38),t.qZA(),t.TgZ(44,"div",39)(45,"p",40),t._uU(46),t.qZA(),t.TgZ(47,"p",41),t._uU(48),t.qZA(),t.TgZ(49,"p",42),t._uU(50," Contact "),t.qZA()()()()()()()(),t.BQk()),2&e){const n=r.$implicit,i=t.oxw(3);t.xp6(8),t.hij(" ",n.candidateName," "),t.xp6(2),t.hij(" ",n.title," "),t.xp6(5),t.hij(" ",n.totalExp," years "),t.xp6(4),t.hij(" ",i.getVisa(n.visaId)," "),t.xp6(4),t.AsE(" ",n.currentLocationCity,", ",n.currentLocationState," "),t.xp6(6),t.hij(" ",n.candidateAvailability," "),t.xp6(5),t.hij(" ",i.getRelocation(n.locations)," "),t.xp6(1),t.Q6J("ngIf",i.isSkills(n.skills)),t.xp6(1),t.Q6J("ngIf",!i.isSkills(n.skills)),t.xp6(4),t.hij(" ",n.jobTypeName," "),t.xp6(6),t.AsE(" ",n.consultancyUserFName," ",n.consultancyUserLName," "),t.xp6(2),t.hij(" ",n.consultancyName," ")}}function A(e,r){if(1&e&&(t.TgZ(0,"div",13),t.YNc(1,Z,51,14,"ng-container",14),t.ALo(2,"slice"),t.qZA()),2&e){const n=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",t.Dn7(2,1,n.filteredHotListData,n.ItemStartIndex,n.ItemEndIndex))}}function T(e,r){if(1&e){const n=t.EpF();t.TgZ(0,"app-pagination-box",47),t.NdJ("outputParams",function(l){t.CHM(n);const f=t.oxw(2);return t.KtG(f.getIndexParams(l))}),t.qZA()}if(2&e){const n=t.oxw(2);t.Q6J("totalItems",n.totalItems)("ItemStartIndex",n.ItemStartIndex)("ItemEndIndex",n.ItemEndIndex)("itemLimit",n.itemLimit)}}function H(e,r){if(1&e&&(t.ynx(0),t.TgZ(1,"div",7)(2,"h4",8),t.YNc(3,g,2,1,"div",4),t.YNc(4,x,2,0,"div",4),t.qZA()(),t.TgZ(5,"div",9),t._UZ(6,"search-skill-location",10),t.qZA(),t.YNc(7,A,3,5,"div",11),t.YNc(8,T,1,4,"app-pagination-box",12),t.BQk()),2&e){const n=t.oxw();t.xp6(3),t.Q6J("ngIf",n.isJobAvailable),t.xp6(1),t.Q6J("ngIf",!n.isJobAvailable),t.xp6(3),t.Q6J("ngIf",n.isJobAvailable),t.xp6(1),t.Q6J("ngIf",n.isJobLoaded&&n.isJobAvailable)}}function L(e,r){if(1&e&&(t.ynx(0),t.TgZ(1,"div",48),t._uU(2),t.qZA(),t.BQk()),2&e){const n=t.oxw();t.xp6(2),t.hij(" ",n.error," ")}}const E=[{path:"",component:(()=>{var e;class r{constructor(i,l,f,I,b,k){this.router=i,this.route=l,this.dialog=f,this.commonService=I,this.candidateProfileService=b,this.sharedService=k,this.isJobLoaded=!1,this.isJobAvailable=!1,this.isError=!1,this.error="",this.ItemStartIndex=0,this.ItemEndIndex=9,this.itemLimit=10,this.initialHotListData=[],this.filteredHotListData=[],this.selectAvailabilityList=[],this.visaList=[],this.isHotListLoaded=!1,this.isHotListAvailable=!1,this.isParamsAvailable=!1,i.events.subscribe(J=>{J instanceof m.m2&&this.route.queryParams.subscribe(O=>{!h.o8(O.skill)&&!h.xb(O.skill)||!h.o8(O.cid)&&!h.xb(O.cid)||!h.o8(O.stid)&&!h.xb(O.stid)||(this.skill="SAP"),this.handleHotlistSearch(this.skill,void 0,this.cityId,this.stateId)})})}getIndexParams(i){this.ItemStartIndex=i.ItemStartIndex,this.ItemEndIndex=i.ItemEndIndex,this.itemLimit=i.itemLimit}getSkills(i){return i.split(",")}getParams(i){this.isActiveCandidate=i.active,this.totalExp=i.experience}getVisa(i){var l;return h.G(this.visaList,f=>{f.id==i&&(l=f.name)}),l}getRelocation(i){return i.join(", ")}isSkills(i){return!h.xb(i)}handleHotlistSearch(i,l,f,I){this.candidateProfileService.apiCandidateProfileSearchCandidateProfilesGet(i,l,l,l).subscribe({next:b=>{this.initialHotListData=b,this.filteredHotListData=this.initialHotListData,this.filteredHotListData.length>0?(this.isJobAvailable=!0,this.isJobLoaded=!0,this.totalItems=this.filteredHotListData.length):(this.isJobAvailable=!1,this.isJobLoaded=!0,this.totalItems=0),this.ItemEndIndex=this.totalItems>this.itemLimit?this.itemLimit:this.totalItems},error:b=>{}})}ngOnInit(){this.commonService.apiCommonVisaGet().subscribe({next:i=>{this.visaList=i.value},error:i=>{}}),this.commonService.apiCommonCandidateAvailabilityGet().subscribe({next:i=>{this.selectAvailabilityList=i.value},error:i=>{}})}}return(e=r).\u0275fac=function(i){return new(i||e)(t.Y36(m.F0),t.Y36(m.gz),t.Y36(_.uw),t.Y36(M.v_),t.Y36(v.M),t.Y36(o.F))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-search-hotlist"]],decls:7,vars:3,consts:[[1,"search-hotlist-wrapper"],[1,"container"],[1,"row"],[1,"col-12"],[4,"ngIf"],[1,"loader-wrapper"],[1,"pre-loader"],[1,"title-box"],[1,"title"],[1,"mt-4"],["type","hotlist"],["class","hotlist-box",4,"ngIf"],[3,"totalItems","ItemStartIndex","ItemEndIndex","itemLimit","outputParams",4,"ngIf"],[1,"hotlist-box"],[4,"ngFor","ngForOf"],[1,"list-group-item","shadow"],[1,"content"],[1,"col-sm-12","col-lg-8","top"],[1,"left"],[1,"mb-1","d-md-flex","align-items-center"],[1,"ft-head","text-cyan-600","text-uppercase","text-normal","name","fw-medium","me-4"],[1,"ft-head","text-gray-500","fw-semibold","text-capitalize","text-normal"],[1,"d-md-flex","additional","align-items-center"],[1,"item","d-flex","align-items-center"],["aria-hidden","true",1,"fa","fa-suitcase","text-gray-400","me-2"],[1,"text-sm","fw-semibold","text-gray-700"],["aria-hidden","true",1,"fa","fa-ticket","text-gray-400","me-2"],["aria-hidden","true",1,"fa","fa-map-marker","text-gray-400","me-2"],[1,"mb-2","d-md-flex"],[1,"me-3","text-sm","text-gray-400"],[1,"fw-semibold","text-sm","text-gray-700"],[1,"d-md-flex"],["class","skills mt-4",4,"ngIf"],[1,"col-sm-12","col-lg-4","right"],[1,"info-wrapper"],[1,"type","ft-head","fw-semibold","mb-2","text-yellow-600","text-sm","pb-3","mb-3","lh-18"],[1,"d-flex"],[1,"img-box","flex-shrink-0"],["src","https://randomuser.me/api/portraits/men/44.jpg"],[1,"desp","ms-3"],[1,"text-normal","ft-head","fw-medium","text-gray-600"],[1,"fw-medium","text-sm","text-gray-400"],[1,"contact","bg-green-400","text-white","text-smr","fw-medium"],[1,"skills","mt-4"],["class","item text-green-800 bg-green-50 text-smr fw-medium",4,"ngFor","ngForOf"],[1,"item","text-green-800","bg-green-50","text-smr","fw-medium"],[1,"item","text-red-800","bg-red-50","text-smr","fw-medium"],[3,"totalItems","ItemStartIndex","ItemEndIndex","itemLimit","outputParams"],[1,"mt-2","alert","alert-danger"]],template:function(i,l){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t.YNc(4,s,3,0,"ng-container",4),t.YNc(5,H,9,4,"ng-container",4),t.YNc(6,L,3,1,"ng-container",4),t.qZA()()()()),2&i&&(t.xp6(4),t.Q6J("ngIf",!l.isJobLoaded),t.xp6(1),t.Q6J("ngIf",l.isJobLoaded&&!l.isError),t.xp6(1),t.Q6J("ngIf",l.isError))},dependencies:[p.sg,p.O5,d.s,c.y,p.OU],styles:[".text-xs[_ngcontent-%COMP%]{font-size:12px}.text-smr[_ngcontent-%COMP%]{font-size:13px}.text-sm[_ngcontent-%COMP%]{font-size:14px}.text-base[_ngcontent-%COMP%]{font-size:18px}.text-normal[_ngcontent-%COMP%]{font-size:16px}.text-regular[_ngcontent-%COMP%]{font-size:15px}h6[_ngcontent-%COMP%], .text-h6[_ngcontent-%COMP%]{font-size:20px}h5[_ngcontent-%COMP%], .text-h5[_ngcontent-%COMP%]{font-size:22px}h4[_ngcontent-%COMP%], .text-h4[_ngcontent-%COMP%]{font-size:24px}h3[_ngcontent-%COMP%], .text-h3[_ngcontent-%COMP%]{font-size:30px}h2[_ngcontent-%COMP%], .text-h2[_ngcontent-%COMP%]{font-size:34px}h1[_ngcontent-%COMP%], .text-h1[_ngcontent-%COMP%]{font-size:36px}.text-huge[_ngcontent-%COMP%]{font-size:50px}.text-big[_ngcontent-%COMP%]{font-size:38px}.ft-head[_ngcontent-%COMP%]{font-family:Metropolis,sans-serif;letter-spacing:.5px}.ft-default[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400;letter-spacing:.4px}.ft-sp[_ngcontent-%COMP%]{font-family:Catamaran,sans-serif}.fw-light[_ngcontent-%COMP%]{font-weight:300}.fw-normal[_ngcontent-%COMP%]{font-weight:400}.fw-medium[_ngcontent-%COMP%]{font-weight:500}.fw-semibold[_ngcontent-%COMP%]{font-weight:600}.fw-bold[_ngcontent-%COMP%]{font-weight:700}.ls--2[_ngcontent-%COMP%]{letter-spacing:.2px}.ls--25[_ngcontent-%COMP%]{letter-spacing:.25px}.ls--4[_ngcontent-%COMP%]{letter-spacing:.4px}.ls--15[_ngcontent-%COMP%]{letter-spacing:1.5px}.lh-14[_ngcontent-%COMP%]{line-height:14px}.lh-18[_ngcontent-%COMP%]{line-height:18px}.search-hotlist-wrapper[_ngcontent-%COMP%]   .title-box[_ngcontent-%COMP%]{display:flex;align-items:center}.search-hotlist-wrapper[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]{margin:20px 0 0}.search-hotlist-wrapper[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%]{cursor:auto;background-color:#e5e7eb}.search-hotlist-wrapper[_ngcontent-%COMP%]   .hotlist-box[_ngcontent-%COMP%]{margin:20px 0 0}.search-hotlist-wrapper[_ngcontent-%COMP%]   .hotlist-box[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]{padding:24px;border:none;border-radius:4px!important;background-color:#fff}.search-hotlist-wrapper[_ngcontent-%COMP%]   .hotlist-box[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]:not(:last-child){margin:0 0 20px}@media (min-width: 0) and (max-width: 575px){.search-hotlist-wrapper[_ngcontent-%COMP%]   .hotlist-box[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{margin:0 0 4px}}.search-hotlist-wrapper[_ngcontent-%COMP%]   .hotlist-box[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .switch[_ngcontent-%COMP%]{margin-left:auto}.search-hotlist-wrapper[_ngcontent-%COMP%]   .hotlist-box[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .skills[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{padding:4px 10px;display:inline-block}.search-hotlist-wrapper[_ngcontent-%COMP%]   .hotlist-box[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .skills[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:not(:last-child){margin:0 8px 10px 0}.search-hotlist-wrapper[_ngcontent-%COMP%]   .hotlist-box[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .additional[_ngcontent-%COMP%]{margin:0 0 20px}@media (min-width: 576px) and (max-width: 767px){.search-hotlist-wrapper[_ngcontent-%COMP%]   .hotlist-box[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .additional[_ngcontent-%COMP%]{margin:14px 0 20px}}@media (min-width: 0) and (max-width: 575px){.search-hotlist-wrapper[_ngcontent-%COMP%]   .hotlist-box[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .additional[_ngcontent-%COMP%]{margin:20px 0}}.search-hotlist-wrapper[_ngcontent-%COMP%]   .hotlist-box[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .additional[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:not(:last-child){margin:0 14px 0 0}@media (max-width: 767px){.search-hotlist-wrapper[_ngcontent-%COMP%]   .hotlist-box[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .additional[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:not(:last-child){margin:0 0 10px}}@media (max-width: 991px){.search-hotlist-wrapper[_ngcontent-%COMP%]   .hotlist-box[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{margin:16px 0 0}}.search-hotlist-wrapper[_ngcontent-%COMP%]   .hotlist-box[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .type[_ngcontent-%COMP%]{text-transform:uppercase;text-align:center;border-bottom:1px solid #d1d5db}.search-hotlist-wrapper[_ngcontent-%COMP%]   .hotlist-box[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]{border-radius:8px!important;padding:16px;background-color:#f6f7f8}.search-hotlist-wrapper[_ngcontent-%COMP%]   .hotlist-box[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%]{width:50px;height:50px;display:flex;justify-content:center;align-items:center;border-radius:50px!important;overflow:hidden}.search-hotlist-wrapper[_ngcontent-%COMP%]   .hotlist-box[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.search-hotlist-wrapper[_ngcontent-%COMP%]   .hotlist-box[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]{display:inline-block;cursor:pointer;padding:4px 14px;border-radius:30px!important;margin:8px 0 0}"]}),r})()}];let F=(()=>{var e;class r{}return(e=r).\u0275fac=function(i){return new(i||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[m.Bz.forChild(E),m.Bz]}),r})(),U=(()=>{var e;class r{}return(e=r).\u0275fac=function(i){return new(i||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[p.ez,C.m.forRoot(),F]}),r})()}}]);