"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[657],{3657:(E,_,r)=>{r.r(_),r.d(_,{SearchHotlistModule:()=>N});var d=r(6814),x=r(4574),g=r(1331),f=r(2181),l=r(1670),t=r(5879),C=r(7700),P=r(9945),u=r(3782),O=r(2742),M=r(1735),v=r(2780);function b(n,o){1&n&&(t.ynx(0),t.TgZ(1,"div",7),t._UZ(2,"div",8),t.qZA(),t.BQk())}function I(n,o){if(1&n&&(t.ynx(0),t.TgZ(1,"div",9),t._uU(2),t.qZA(),t.BQk()),2&n){const e=t.oxw();t.xp6(2),t.hij(" ",e.error," ")}}function w(n,o){if(1&n&&(t.TgZ(0,"div"),t._uU(1),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.hij("",e.totalItems," hotlist(s) found")}}function Z(n,o){1&n&&(t.TgZ(0,"div"),t._uU(1,"No jobs Available"),t.qZA())}function y(n,o){if(1&n&&(t.TgZ(0,"span",46),t._uU(1),t.qZA()),2&n){const e=o.$implicit;t.xp6(1),t.Oqu(e)}}function S(n,o){if(1&n&&(t.TgZ(0,"div",44),t.YNc(1,y,2,1,"span",45),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.Q6J("ngForOf",e.skills)}}function L(n,o){1&n&&(t.TgZ(0,"div",44)(1,"span",47),t._uU(2,"No Skills Avaialble"),t.qZA()())}function A(n,o){if(1&n&&(t.ynx(0),t.TgZ(1,"li",16)(2,"div",17)(3,"div",2)(4,"div",18)(5,"div",19)(6,"div",20)(7,"h6",21),t._uU(8),t.qZA(),t.TgZ(9,"p",22),t._uU(10),t.qZA()(),t.TgZ(11,"div",23)(12,"div",24),t._UZ(13,"i",25),t.TgZ(14,"p",26),t._uU(15),t.qZA()(),t.TgZ(16,"div",24),t._UZ(17,"i",27),t.TgZ(18,"p",26),t._uU(19),t.qZA()(),t.TgZ(20,"div",24),t._UZ(21,"i",28),t.TgZ(22,"p",26),t._uU(23),t.qZA()(),t._UZ(24,"div"),t.qZA(),t.TgZ(25,"div",29)(26,"p",30),t._uU(27,"Availability"),t.qZA(),t.TgZ(28,"p",31),t._uU(29),t.qZA()(),t.TgZ(30,"div",32)(31,"p",30),t._uU(32," Preferred location "),t.qZA(),t.TgZ(33,"p",31),t._uU(34),t.qZA()(),t.YNc(35,S,2,1,"div",33),t.YNc(36,L,3,0,"div",33),t.qZA()(),t.TgZ(37,"div",34)(38,"div",35)(39,"div",36),t._uU(40),t.qZA(),t.TgZ(41,"div",37)(42,"div",38),t._UZ(43,"img",39),t.qZA(),t.TgZ(44,"div",40)(45,"p",41),t._uU(46),t.qZA(),t.TgZ(47,"p",42),t._uU(48),t.qZA(),t.TgZ(49,"p",43),t._uU(50," Contact "),t.qZA()()()()()()()(),t.BQk()),2&n){const e=o.$implicit,i=t.oxw(3);t.xp6(8),t.hij(" ",e.candidateName," "),t.xp6(2),t.hij(" ",e.title," "),t.xp6(5),t.hij(" ",e.totalExp," years "),t.xp6(4),t.hij(" ",i.getVisa(e.visaId)," "),t.xp6(4),t.AsE(" ",e.currentLocationCity,", ",e.currentLocationState," "),t.xp6(6),t.hij(" ",e.candidateAvailability," "),t.xp6(5),t.hij(" ",i.getRelocation(e.locations)," "),t.xp6(1),t.Q6J("ngIf",i.isSkills(e.skills)),t.xp6(1),t.Q6J("ngIf",!i.isSkills(e.skills)),t.xp6(4),t.hij(" ",e.jobTypeName," "),t.xp6(6),t.AsE(" ",e.consultancyUserFName," ",e.consultancyUserLName," "),t.xp6(2),t.hij(" ",e.consultancyName," ")}}function T(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"app-pagination-box",48),t.NdJ("outputParams",function(s){t.CHM(e);const c=t.oxw(3);return t.KtG(c.getIndexParams(s))}),t.qZA()}if(2&n){const e=t.oxw(3);t.Q6J("totalItems",e.totalItems)("ItemStartIndex",e.ItemStartIndex)("ItemEndIndex",e.ItemEndIndex)("itemLimit",e.itemLimit)}}function H(n,o){if(1&n&&(t.TgZ(0,"div",13),t.YNc(1,A,51,14,"ng-container",14),t.ALo(2,"slice"),t.YNc(3,T,1,4,"app-pagination-box",15),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",t.Dn7(2,2,e.filteredHotListData,e.ItemStartIndex,e.ItemEndIndex)),t.xp6(2),t.Q6J("ngIf",e.isLoaded&&e.isJobsLoaded)}}function U(n,o){if(1&n&&(t.ynx(0),t.TgZ(1,"div",10)(2,"h4",11),t.YNc(3,w,2,1,"div",6),t.YNc(4,Z,2,0,"div",6),t.qZA()(),t.YNc(5,H,4,6,"div",12),t.BQk()),2&n){const e=t.oxw();t.xp6(3),t.Q6J("ngIf",e.isJobsLoaded),t.xp6(1),t.Q6J("ngIf",!e.isJobsLoaded),t.xp6(1),t.Q6J("ngIf",e.filteredHotListData.length>0)}}const k=[{path:"",component:(()=>{var n;class o{constructor(i,s,c,p,m,h){this.router=i,this.route=s,this.dialog=c,this.commonService=p,this.candidateProfileService=m,this.sharedService=h,this.isLoaded=!0,this.isJobsLoaded=!1,this.isError=!1,this.error="",this.ItemStartIndex=0,this.ItemEndIndex=9,this.itemLimit=10,this.initialHotListData=[],this.filteredHotListData=[],this.selectAvailabilityList=[],this.visaList=[],this.skill="",this.location="",this.previousQueryParams={},this.isHotListLoaded=!1,this.isHotListAvailable=!1,this.isParamsAvailable=!1,this.router.events.pipe((0,f.h)(a=>a instanceof g.m2)).subscribe(()=>{const a=this.route.snapshot.queryParams;JSON.stringify(a)!==JSON.stringify(this.previousQueryParams)&&(this.previousQueryParams=a,(!l.o8(a.skill)||!l.o8(a.location)||!l.o8(a.cid)||!l.o8(a.stid))&&(this.skill=a.skill,this.location=a.location,this.cityId=a.cid,this.stateId=a.stid,this.handleHotlistSearch(a.skill,void 0,[a.cid],a.stid)))})}getIndexParams(i){this.ItemStartIndex=i.ItemStartIndex,this.ItemEndIndex=i.ItemEndIndex,this.itemLimit=i.itemLimit}getSkills(i){return i.split(",")}getParams(i){this.isActiveCandidate=i.active,this.totalExp=i.experience}getVisa(i){var s;return l.G(this.visaList,c=>{c.id==i&&(s=c.name)}),s}getRelocation(i){return i.join(", ")}isSkills(i){return!l.xb(i)}handleHotlistSearch(i,s,c,p){const m=[c],h=[p];this.isLoaded=!1,this.candidateProfileService.apiCandidateProfileSearchCandidateProfilesGet(i,s,m,h,s).subscribe({next:a=>{this.isLoaded=!0,this.isJobsLoaded=!0,this.isError=!1,this.initialHotListData=a,this.filteredHotListData=this.initialHotListData,this.totalItems=this.filteredHotListData.length,this.ItemEndIndex=this.totalItems>this.itemLimit?this.itemLimit:this.totalItems},error:a=>{this.isError=!0,this.isLoaded=!0,this.isJobsLoaded=!0,this.error="Some error occured"}})}ngOnInit(){this.commonService.apiCommonVisaGet().subscribe({next:i=>{this.visaList=i.value},error:i=>{}}),this.commonService.apiCommonCandidateAvailabilityGet().subscribe({next:i=>{this.selectAvailabilityList=i.value},error:i=>{}})}}return(n=o).\u0275fac=function(i){return new(i||n)(t.Y36(g.F0),t.Y36(g.gz),t.Y36(C.uw),t.Y36(P.v_),t.Y36(u.M),t.Y36(O.F))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-search-hotlist"]],decls:9,vars:7,consts:[[1,"search-hotlist-wrapper"],[1,"container"],[1,"row"],[1,"col-sm-12"],[1,"my-4"],["type","hotlist",3,"skill","location","cityId","stateId"],[4,"ngIf"],[1,"loader-wrapper"],[1,"pre-loader"],[1,"mt-2","alert","alert-danger"],[1,"title-box"],[1,"title"],["class","hotlist-box",4,"ngIf"],[1,"hotlist-box"],[4,"ngFor","ngForOf"],[3,"totalItems","ItemStartIndex","ItemEndIndex","itemLimit","outputParams",4,"ngIf"],[1,"list-group-item","shadow"],[1,"content"],[1,"col-sm-12","col-lg-8","top"],[1,"left"],[1,"mb-1","d-md-flex","align-items-center"],[1,"ft-head","text-cyan-600","text-uppercase","text-normal","name","fw-medium","me-4"],[1,"ft-head","text-gray-500","fw-semibold","text-capitalize","text-normal"],[1,"d-md-flex","additional","align-items-center"],[1,"item","d-flex","align-items-center"],["aria-hidden","true",1,"fa","fa-suitcase","text-gray-400","me-2"],[1,"text-sm","fw-semibold","text-gray-700"],["aria-hidden","true",1,"fa","fa-ticket","text-gray-400","me-2"],["aria-hidden","true",1,"fa","fa-map-marker","text-gray-400","me-2"],[1,"mb-2","d-md-flex"],[1,"me-3","text-sm","text-gray-400"],[1,"fw-semibold","text-sm","text-gray-700"],[1,"d-md-flex"],["class","skills mt-4",4,"ngIf"],[1,"col-sm-12","col-lg-4","right"],[1,"info-wrapper"],[1,"type","ft-head","fw-semibold","mb-2","text-yellow-600","text-sm","pb-3","mb-3","lh-18"],[1,"d-flex"],[1,"img-box","flex-shrink-0"],["src","https://randomuser.me/api/portraits/men/44.jpg"],[1,"desp","ms-3"],[1,"text-normal","ft-head","fw-medium","text-gray-600"],[1,"fw-medium","text-sm","text-gray-400"],[1,"contact","bg-green-400","text-white","text-smr","fw-medium"],[1,"skills","mt-4"],["class","item text-green-800 bg-green-50 text-smr fw-medium",4,"ngFor","ngForOf"],[1,"item","text-green-800","bg-green-50","text-smr","fw-medium"],[1,"item","text-red-800","bg-red-50","text-smr","fw-medium"],[3,"totalItems","ItemStartIndex","ItemEndIndex","itemLimit","outputParams"]],template:function(i,s){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),t._UZ(5,"search-skill-location",5),t.qZA()(),t.YNc(6,b,3,0,"ng-container",6),t.YNc(7,I,3,1,"ng-container",6),t.YNc(8,U,6,3,"ng-container",6),t.qZA()()()),2&i&&(t.xp6(5),t.Q6J("skill",s.skill)("location",s.location)("cityId",s.cityId)("stateId",s.stateId),t.xp6(1),t.Q6J("ngIf",!s.isLoaded),t.xp6(1),t.Q6J("ngIf",s.isLoaded&&s.isError),t.xp6(1),t.Q6J("ngIf",s.isLoaded&&s.isJobsLoaded&&!s.isError))},dependencies:[d.sg,d.O5,M.s,v.y,d.OU],styles:[".text-xs[_ngcontent-%COMP%]{font-size:12px}.text-smr[_ngcontent-%COMP%]{font-size:13px}.text-sm[_ngcontent-%COMP%]{font-size:14px}.text-base[_ngcontent-%COMP%]{font-size:18px}.text-normal[_ngcontent-%COMP%]{font-size:16px}.text-regular[_ngcontent-%COMP%]{font-size:15px}h6[_ngcontent-%COMP%], .text-h6[_ngcontent-%COMP%]{font-size:20px}h5[_ngcontent-%COMP%], .text-h5[_ngcontent-%COMP%]{font-size:22px}h4[_ngcontent-%COMP%], .text-h4[_ngcontent-%COMP%]{font-size:24px}h3[_ngcontent-%COMP%], .text-h3[_ngcontent-%COMP%]{font-size:30px}h2[_ngcontent-%COMP%], .text-h2[_ngcontent-%COMP%]{font-size:34px}h1[_ngcontent-%COMP%], .text-h1[_ngcontent-%COMP%]{font-size:36px}.text-huge[_ngcontent-%COMP%]{font-size:50px}.text-big[_ngcontent-%COMP%]{font-size:38px}.ft-head[_ngcontent-%COMP%]{font-family:Metropolis,sans-serif;letter-spacing:.5px}.ft-default[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400;letter-spacing:.4px}.ft-sp[_ngcontent-%COMP%]{font-family:Catamaran,sans-serif}.fw-light[_ngcontent-%COMP%]{font-weight:300}.fw-normal[_ngcontent-%COMP%]{font-weight:400}.fw-medium[_ngcontent-%COMP%]{font-weight:500}.fw-semibold[_ngcontent-%COMP%]{font-weight:600}.fw-bold[_ngcontent-%COMP%]{font-weight:700}.ls--2[_ngcontent-%COMP%]{letter-spacing:.2px}.ls--25[_ngcontent-%COMP%]{letter-spacing:.25px}.ls--4[_ngcontent-%COMP%]{letter-spacing:.4px}.ls--15[_ngcontent-%COMP%]{letter-spacing:1.5px}.lh-14[_ngcontent-%COMP%]{line-height:14px}.lh-18[_ngcontent-%COMP%]{line-height:18px}.search-hotlist-wrapper[_ngcontent-%COMP%]   .title-box[_ngcontent-%COMP%]{display:flex;align-items:center}.search-hotlist-wrapper[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]{margin:20px 0 0}.search-hotlist-wrapper[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%]{cursor:auto;background-color:#e5e7eb}.search-hotlist-wrapper[_ngcontent-%COMP%]   .hotlist-box[_ngcontent-%COMP%]{margin:20px 0 0}.search-hotlist-wrapper[_ngcontent-%COMP%]   .hotlist-box[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]{padding:24px;border:none;border-radius:4px!important;background-color:#fff}.search-hotlist-wrapper[_ngcontent-%COMP%]   .hotlist-box[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]:not(:last-child){margin:0 0 20px}@media (min-width: 0) and (max-width: 575px){.search-hotlist-wrapper[_ngcontent-%COMP%]   .hotlist-box[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{margin:0 0 4px}}.search-hotlist-wrapper[_ngcontent-%COMP%]   .hotlist-box[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .switch[_ngcontent-%COMP%]{margin-left:auto}.search-hotlist-wrapper[_ngcontent-%COMP%]   .hotlist-box[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .skills[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{padding:4px 10px;display:inline-block}.search-hotlist-wrapper[_ngcontent-%COMP%]   .hotlist-box[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .skills[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:not(:last-child){margin:0 8px 10px 0}.search-hotlist-wrapper[_ngcontent-%COMP%]   .hotlist-box[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .additional[_ngcontent-%COMP%]{margin:0 0 20px}@media (min-width: 576px) and (max-width: 767px){.search-hotlist-wrapper[_ngcontent-%COMP%]   .hotlist-box[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .additional[_ngcontent-%COMP%]{margin:14px 0 20px}}@media (min-width: 0) and (max-width: 575px){.search-hotlist-wrapper[_ngcontent-%COMP%]   .hotlist-box[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .additional[_ngcontent-%COMP%]{margin:20px 0}}.search-hotlist-wrapper[_ngcontent-%COMP%]   .hotlist-box[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .additional[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:not(:last-child){margin:0 14px 0 0}@media (max-width: 767px){.search-hotlist-wrapper[_ngcontent-%COMP%]   .hotlist-box[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .additional[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:not(:last-child){margin:0 0 10px}}@media (max-width: 991px){.search-hotlist-wrapper[_ngcontent-%COMP%]   .hotlist-box[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{margin:16px 0 0}}.search-hotlist-wrapper[_ngcontent-%COMP%]   .hotlist-box[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .type[_ngcontent-%COMP%]{text-transform:uppercase;text-align:center;border-bottom:1px solid #d1d5db}.search-hotlist-wrapper[_ngcontent-%COMP%]   .hotlist-box[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]{border-radius:8px!important;padding:16px;background-color:#f6f7f8}.search-hotlist-wrapper[_ngcontent-%COMP%]   .hotlist-box[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%]{width:50px;height:50px;display:flex;justify-content:center;align-items:center;border-radius:50px!important;overflow:hidden}.search-hotlist-wrapper[_ngcontent-%COMP%]   .hotlist-box[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.search-hotlist-wrapper[_ngcontent-%COMP%]   .hotlist-box[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]{display:inline-block;cursor:pointer;padding:4px 14px;border-radius:30px!important;margin:8px 0 0}"]}),o})()}];let J=(()=>{var n;class o{}return(n=o).\u0275fac=function(i){return new(i||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[g.Bz.forChild(k),g.Bz]}),o})(),N=(()=>{var n;class o{}return(n=o).\u0275fac=function(i){return new(i||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[d.ez,x.m.forRoot(),J]}),o})()}}]);