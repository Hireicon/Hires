"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[657],{3657:(E,h,a)=>{a.r(h),a.d(h,{SearchHotlistModule:()=>U});var d=a(6814),x=a(4574),g=a(1331),c=a(1670),t=a(5879),_=a(7700),f=a(9945),C=a(3782),P=a(2742),u=a(1735),M=a(2780);function O(n,o){1&n&&(t.ynx(0),t.TgZ(1,"div",5),t._UZ(2,"div",6),t.qZA(),t.BQk())}function v(n,o){if(1&n&&(t.TgZ(0,"div"),t._uU(1),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.hij(" ",e.totalItems," hotlist(s) found ")}}function b(n,o){1&n&&(t.TgZ(0,"div"),t._uU(1,"No hotlists Available"),t.qZA())}function w(n,o){if(1&n&&(t.TgZ(0,"span",45),t._uU(1),t.qZA()),2&n){const e=o.$implicit;t.xp6(1),t.Oqu(e)}}function Z(n,o){if(1&n&&(t.TgZ(0,"div",43),t.YNc(1,w,2,1,"span",44),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.Q6J("ngForOf",e.skills)}}function I(n,o){1&n&&(t.TgZ(0,"div",43)(1,"span",46),t._uU(2,"No Skills Avaialble"),t.qZA()())}function S(n,o){if(1&n&&(t.ynx(0),t.TgZ(1,"li",15)(2,"div",16)(3,"div",2)(4,"div",17)(5,"div",18)(6,"div",19)(7,"h6",20),t._uU(8),t.qZA(),t.TgZ(9,"p",21),t._uU(10),t.qZA()(),t.TgZ(11,"div",22)(12,"div",23),t._UZ(13,"i",24),t.TgZ(14,"p",25),t._uU(15),t.qZA()(),t.TgZ(16,"div",23),t._UZ(17,"i",26),t.TgZ(18,"p",25),t._uU(19),t.qZA()(),t.TgZ(20,"div",23),t._UZ(21,"i",27),t.TgZ(22,"p",25),t._uU(23),t.qZA()(),t._UZ(24,"div"),t.qZA(),t.TgZ(25,"div",28)(26,"p",29),t._uU(27,"Availability"),t.qZA(),t.TgZ(28,"p",30),t._uU(29),t.qZA()(),t.TgZ(30,"div",31)(31,"p",29),t._uU(32," Preferred location "),t.qZA(),t.TgZ(33,"p",30),t._uU(34),t.qZA()(),t.YNc(35,Z,2,1,"div",32),t.YNc(36,I,3,0,"div",32),t.qZA()(),t.TgZ(37,"div",33)(38,"div",34)(39,"div",35),t._uU(40),t.qZA(),t.TgZ(41,"div",36)(42,"div",37),t._UZ(43,"img",38),t.qZA(),t.TgZ(44,"div",39)(45,"p",40),t._uU(46),t.qZA(),t.TgZ(47,"p",41),t._uU(48),t.qZA(),t.TgZ(49,"p",42),t._uU(50," Contact "),t.qZA()()()()()()()(),t.BQk()),2&n){const e=o.$implicit,i=t.oxw(3);t.xp6(8),t.hij(" ",e.candidateName," "),t.xp6(2),t.hij(" ",e.title," "),t.xp6(5),t.hij(" ",e.totalExp," years "),t.xp6(4),t.hij(" ",i.getVisa(e.visaId)," "),t.xp6(4),t.AsE(" ",e.currentLocationCity,", ",e.currentLocationState," "),t.xp6(6),t.hij(" ",e.candidateAvailability," "),t.xp6(5),t.hij(" ",i.getRelocation(e.locations)," "),t.xp6(1),t.Q6J("ngIf",i.isSkills(e.skills)),t.xp6(1),t.Q6J("ngIf",!i.isSkills(e.skills)),t.xp6(4),t.hij(" ",e.jobTypeName," "),t.xp6(6),t.AsE(" ",e.consultancyUserFName," ",e.consultancyUserLName," "),t.xp6(2),t.hij(" ",e.consultancyName," ")}}function A(n,o){if(1&n&&(t.TgZ(0,"div",13),t.YNc(1,S,51,14,"ng-container",14),t.ALo(2,"slice"),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",t.Dn7(2,1,e.filteredHotListData,e.ItemStartIndex,e.ItemEndIndex))}}function y(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"app-pagination-box",47),t.NdJ("outputParams",function(s){t.CHM(e);const l=t.oxw(2);return t.KtG(l.getIndexParams(s))}),t.qZA()}if(2&n){const e=t.oxw(2);t.Q6J("totalItems",e.totalItems)("ItemStartIndex",e.ItemStartIndex)("ItemEndIndex",e.ItemEndIndex)("itemLimit",e.itemLimit)}}function T(n,o){if(1&n&&(t.ynx(0),t.TgZ(1,"div",7)(2,"h4",8),t.YNc(3,v,2,1,"div",4),t.YNc(4,b,2,0,"div",4),t.qZA()(),t.TgZ(5,"div",9),t._UZ(6,"search-skill-location",10),t.qZA(),t.YNc(7,A,3,5,"div",11),t.YNc(8,y,1,4,"app-pagination-box",12),t.BQk()),2&n){const e=t.oxw();t.xp6(3),t.Q6J("ngIf",e.isJobAvailable),t.xp6(1),t.Q6J("ngIf",!e.isJobAvailable),t.xp6(2),t.Q6J("skill",e.skill)("location",e.location),t.xp6(1),t.Q6J("ngIf",e.isJobAvailable),t.xp6(1),t.Q6J("ngIf",e.isLoaded&&e.isJobAvailable)}}function H(n,o){if(1&n&&(t.ynx(0),t.TgZ(1,"div",48),t._uU(2),t.qZA(),t.BQk()),2&n){const e=t.oxw();t.xp6(2),t.hij(" ",e.error," ")}}const L=[{path:"",component:(()=>{var n;class o{constructor(i,s,l,m,p,J){this.router=i,this.route=s,this.dialog=l,this.commonService=m,this.candidateProfileService=p,this.sharedService=J,this.isLoaded=!1,this.isJobAvailable=!1,this.isError=!1,this.error="",this.ItemStartIndex=0,this.ItemEndIndex=9,this.itemLimit=10,this.initialHotListData=[],this.filteredHotListData=[],this.selectAvailabilityList=[],this.visaList=[],this.skill="SAP",this.location="",this.isHotListLoaded=!1,this.isHotListAvailable=!1,this.isParamsAvailable=!1,i.events.subscribe(z=>{z instanceof g.m2&&this.route.queryParams.subscribe(r=>{!c.o8(r.skill)&&!c.xb(r.skill)||!c.o8(r.cid)&&!c.xb(r.cid)||!c.o8(r.stid)&&!c.xb(r.stid)?(console.log(r.skill),console.log(r.cid),console.log(r.stid),this.handleHotlistSearch(this.skill,void 0,[r.cid],[r.stid])):this.handleHotlistSearch(this.skill,void 0,void 0,void 0)})})}getIndexParams(i){this.ItemStartIndex=i.ItemStartIndex,this.ItemEndIndex=i.ItemEndIndex,this.itemLimit=i.itemLimit}getSkills(i){return i.split(",")}getParams(i){this.isActiveCandidate=i.active,this.totalExp=i.experience}getVisa(i){var s;return c.G(this.visaList,l=>{l.id==i&&(s=l.name)}),s}getRelocation(i){return i.join(", ")}isSkills(i){return!c.xb(i)}handleHotlistSearch(i,s,l,m){this.candidateProfileService.apiCandidateProfileSearchCandidateProfilesGet(i,s,l,m,s).subscribe({next:p=>{this.initialHotListData=p,this.filteredHotListData=this.initialHotListData,this.filteredHotListData.length>0?(this.isJobAvailable=!0,this.isLoaded=!0,this.totalItems=this.filteredHotListData.length):(this.isJobAvailable=!1,this.isLoaded=!0,this.totalItems=0),this.ItemEndIndex=this.totalItems>this.itemLimit?this.itemLimit:this.totalItems},error:p=>{this.isLoaded=!0,this.isError=!0,this.error="Some error occured"}})}ngOnInit(){this.commonService.apiCommonVisaGet().subscribe({next:i=>{this.visaList=i.value},error:i=>{}}),this.commonService.apiCommonCandidateAvailabilityGet().subscribe({next:i=>{this.selectAvailabilityList=i.value},error:i=>{}})}}return(n=o).\u0275fac=function(i){return new(i||n)(t.Y36(g.F0),t.Y36(g.gz),t.Y36(_.uw),t.Y36(f.v_),t.Y36(C.M),t.Y36(P.F))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-search-hotlist"]],decls:7,vars:3,consts:[[1,"search-hotlist-wrapper"],[1,"container"],[1,"row"],[1,"col-12"],[4,"ngIf"],[1,"loader-wrapper"],[1,"pre-loader"],[1,"title-box"],[1,"title"],[1,"mt-4"],["type","hotlist",3,"skill","location"],["class","hotlist-box",4,"ngIf"],[3,"totalItems","ItemStartIndex","ItemEndIndex","itemLimit","outputParams",4,"ngIf"],[1,"hotlist-box"],[4,"ngFor","ngForOf"],[1,"list-group-item","shadow"],[1,"content"],[1,"col-sm-12","col-lg-8","top"],[1,"left"],[1,"mb-1","d-md-flex","align-items-center"],[1,"ft-head","text-cyan-600","text-uppercase","text-normal","name","fw-medium","me-4"],[1,"ft-head","text-gray-500","fw-semibold","text-capitalize","text-normal"],[1,"d-md-flex","additional","align-items-center"],[1,"item","d-flex","align-items-center"],["aria-hidden","true",1,"fa","fa-suitcase","text-gray-400","me-2"],[1,"text-sm","fw-semibold","text-gray-700"],["aria-hidden","true",1,"fa","fa-ticket","text-gray-400","me-2"],["aria-hidden","true",1,"fa","fa-map-marker","text-gray-400","me-2"],[1,"mb-2","d-md-flex"],[1,"me-3","text-sm","text-gray-400"],[1,"fw-semibold","text-sm","text-gray-700"],[1,"d-md-flex"],["class","skills mt-4",4,"ngIf"],[1,"col-sm-12","col-lg-4","right"],[1,"info-wrapper"],[1,"type","ft-head","fw-semibold","mb-2","text-yellow-600","text-sm","pb-3","mb-3","lh-18"],[1,"d-flex"],[1,"img-box","flex-shrink-0"],["src","https://randomuser.me/api/portraits/men/44.jpg"],[1,"desp","ms-3"],[1,"text-normal","ft-head","fw-medium","text-gray-600"],[1,"fw-medium","text-sm","text-gray-400"],[1,"contact","bg-green-400","text-white","text-smr","fw-medium"],[1,"skills","mt-4"],["class","item text-green-800 bg-green-50 text-smr fw-medium",4,"ngFor","ngForOf"],[1,"item","text-green-800","bg-green-50","text-smr","fw-medium"],[1,"item","text-red-800","bg-red-50","text-smr","fw-medium"],[3,"totalItems","ItemStartIndex","ItemEndIndex","itemLimit","outputParams"],[1,"mt-2","alert","alert-danger"]],template:function(i,s){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t.YNc(4,O,3,0,"ng-container",4),t.YNc(5,T,9,6,"ng-container",4),t.YNc(6,H,3,1,"ng-container",4),t.qZA()()()()),2&i&&(t.xp6(4),t.Q6J("ngIf",!s.isLoaded),t.xp6(1),t.Q6J("ngIf",s.isLoaded&&!s.isError),t.xp6(1),t.Q6J("ngIf",s.isError))},dependencies:[d.sg,d.O5,u.s,M.y,d.OU],styles:[".text-xs[_ngcontent-%COMP%]{font-size:12px}.text-smr[_ngcontent-%COMP%]{font-size:13px}.text-sm[_ngcontent-%COMP%]{font-size:14px}.text-base[_ngcontent-%COMP%]{font-size:18px}.text-normal[_ngcontent-%COMP%]{font-size:16px}.text-regular[_ngcontent-%COMP%]{font-size:15px}h6[_ngcontent-%COMP%], .text-h6[_ngcontent-%COMP%]{font-size:20px}h5[_ngcontent-%COMP%], .text-h5[_ngcontent-%COMP%]{font-size:22px}h4[_ngcontent-%COMP%], .text-h4[_ngcontent-%COMP%]{font-size:24px}h3[_ngcontent-%COMP%], .text-h3[_ngcontent-%COMP%]{font-size:30px}h2[_ngcontent-%COMP%], .text-h2[_ngcontent-%COMP%]{font-size:34px}h1[_ngcontent-%COMP%], .text-h1[_ngcontent-%COMP%]{font-size:36px}.text-huge[_ngcontent-%COMP%]{font-size:50px}.text-big[_ngcontent-%COMP%]{font-size:38px}.ft-head[_ngcontent-%COMP%]{font-family:Metropolis,sans-serif;letter-spacing:.5px}.ft-default[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400;letter-spacing:.4px}.ft-sp[_ngcontent-%COMP%]{font-family:Catamaran,sans-serif}.fw-light[_ngcontent-%COMP%]{font-weight:300}.fw-normal[_ngcontent-%COMP%]{font-weight:400}.fw-medium[_ngcontent-%COMP%]{font-weight:500}.fw-semibold[_ngcontent-%COMP%]{font-weight:600}.fw-bold[_ngcontent-%COMP%]{font-weight:700}.ls--2[_ngcontent-%COMP%]{letter-spacing:.2px}.ls--25[_ngcontent-%COMP%]{letter-spacing:.25px}.ls--4[_ngcontent-%COMP%]{letter-spacing:.4px}.ls--15[_ngcontent-%COMP%]{letter-spacing:1.5px}.lh-14[_ngcontent-%COMP%]{line-height:14px}.lh-18[_ngcontent-%COMP%]{line-height:18px}.search-hotlist-wrapper[_ngcontent-%COMP%]   .title-box[_ngcontent-%COMP%]{display:flex;align-items:center}.search-hotlist-wrapper[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]{margin:20px 0 0}.search-hotlist-wrapper[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%]{cursor:auto;background-color:#e5e7eb}.search-hotlist-wrapper[_ngcontent-%COMP%]   .hotlist-box[_ngcontent-%COMP%]{margin:20px 0 0}.search-hotlist-wrapper[_ngcontent-%COMP%]   .hotlist-box[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]{padding:24px;border:none;border-radius:4px!important;background-color:#fff}.search-hotlist-wrapper[_ngcontent-%COMP%]   .hotlist-box[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]:not(:last-child){margin:0 0 20px}@media (min-width: 0) and (max-width: 575px){.search-hotlist-wrapper[_ngcontent-%COMP%]   .hotlist-box[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{margin:0 0 4px}}.search-hotlist-wrapper[_ngcontent-%COMP%]   .hotlist-box[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .switch[_ngcontent-%COMP%]{margin-left:auto}.search-hotlist-wrapper[_ngcontent-%COMP%]   .hotlist-box[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .skills[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{padding:4px 10px;display:inline-block}.search-hotlist-wrapper[_ngcontent-%COMP%]   .hotlist-box[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .skills[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:not(:last-child){margin:0 8px 10px 0}.search-hotlist-wrapper[_ngcontent-%COMP%]   .hotlist-box[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .additional[_ngcontent-%COMP%]{margin:0 0 20px}@media (min-width: 576px) and (max-width: 767px){.search-hotlist-wrapper[_ngcontent-%COMP%]   .hotlist-box[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .additional[_ngcontent-%COMP%]{margin:14px 0 20px}}@media (min-width: 0) and (max-width: 575px){.search-hotlist-wrapper[_ngcontent-%COMP%]   .hotlist-box[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .additional[_ngcontent-%COMP%]{margin:20px 0}}.search-hotlist-wrapper[_ngcontent-%COMP%]   .hotlist-box[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .additional[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:not(:last-child){margin:0 14px 0 0}@media (max-width: 767px){.search-hotlist-wrapper[_ngcontent-%COMP%]   .hotlist-box[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .additional[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:not(:last-child){margin:0 0 10px}}@media (max-width: 991px){.search-hotlist-wrapper[_ngcontent-%COMP%]   .hotlist-box[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{margin:16px 0 0}}.search-hotlist-wrapper[_ngcontent-%COMP%]   .hotlist-box[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .type[_ngcontent-%COMP%]{text-transform:uppercase;text-align:center;border-bottom:1px solid #d1d5db}.search-hotlist-wrapper[_ngcontent-%COMP%]   .hotlist-box[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]{border-radius:8px!important;padding:16px;background-color:#f6f7f8}.search-hotlist-wrapper[_ngcontent-%COMP%]   .hotlist-box[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%]{width:50px;height:50px;display:flex;justify-content:center;align-items:center;border-radius:50px!important;overflow:hidden}.search-hotlist-wrapper[_ngcontent-%COMP%]   .hotlist-box[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .info-wrapper[_ngcontent-%COMP%]   .img-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.search-hotlist-wrapper[_ngcontent-%COMP%]   .hotlist-box[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]{display:inline-block;cursor:pointer;padding:4px 14px;border-radius:30px!important;margin:8px 0 0}"]}),o})()}];let k=(()=>{var n;class o{}return(n=o).\u0275fac=function(i){return new(i||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[g.Bz.forChild(L),g.Bz]}),o})(),U=(()=>{var n;class o{}return(n=o).\u0275fac=function(i){return new(i||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[d.ez,x.m.forRoot(),k]}),o})()}}]);