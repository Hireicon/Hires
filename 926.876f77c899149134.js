"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[926],{1926:(K,u,c)=>{c.r(u),c.d(u,{InboxModule:()=>B});var p=c(6814),b=c(5950),l=c(1331),C=c(6676),v=c(1670),h=c(9900),t=c(5879),w=c(930),_=c(2742),M=c(9945),g=c(6223);function T(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"li",7),t.NdJ("click",function(){const s=t.CHM(e).$implicit,r=t.oxw(2);return t.KtG(r.handleSelectedItem(s))}),t._uU(1),t.qZA()}if(2&i){const e=a.$implicit,n=t.oxw(2);t.Q6J("ngClass",n.isSelectedItem(e)),t.xp6(1),t.hij(" ",e[n.fieldType]," ")}}function y(i,a){if(1&i&&(t.TgZ(0,"div",5),t.YNc(1,T,2,2,"li",6),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.fieldList)}}let O=(()=>{var i;class a{constructor(n){this.element=n,this.isExpanded=!1,this.selectedItem={},this.changeData=new t.vpe}onDocumentClick(n){n.stopPropagation();var o=this.element.nativeElement.querySelector(".dropdown-btn"),s=this.element.nativeElement.querySelector(".dropdown-list");!o?.contains(n.target)&&!s?.contains(n.target)&&(this.isExpanded=!1)}handleSelectedItem(n){this.selectedItem=n,this.changeData.emit({data:n,id:this.fieldRefId})}isSelectedItem(n){return n[this.fieldType]==this.selectedItem[this.fieldType]?"selected":""}ngOnInit(){}ngOnChanges(){if(this.editValue){let n=this.fieldList.filter(o=>o[this.fieldName]==this.editValue);this.selectedItem=void 0===n||0==n.length?{}:n[0]}else this.selectedItem=this.fieldList[0]}}return(i=a).\u0275fac=function(n){return new(n||i)(t.Y36(t.SBq))},i.\u0275cmp=t.Xpm({type:i,selectors:[["dropdown-classic"]],hostBindings:function(n,o){1&n&&t.NdJ("click",function(r){return o.onDocumentClick(r)},!1,t.evT)},inputs:{fieldName:"fieldName",fieldList:"fieldList",fieldType:"fieldType",fieldRefId:"fieldRefId",editValue:"editValue"},outputs:{changeData:"changeData"},features:[t.TTD],decls:7,vars:3,consts:[[1,"dropdown-classic-wrapper"],[1,"dropdown-btn","fw-medium",3,"click"],[1,"text-sm"],[1,"material-symbols-outlined","text-h6","ms-1"],["class","dropdown-list shadow",4,"ngIf"],[1,"dropdown-list","shadow"],["class","list-group-item text-sm",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"list-group-item","text-sm",3,"ngClass","click"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0)(1,"div",1),t.NdJ("click",function(){return o.isExpanded=!o.isExpanded}),t.TgZ(2,"span",2),t._uU(3),t.qZA(),t.TgZ(4,"span",3),t._uU(5),t.qZA()(),t.YNc(6,y,2,1,"div",4),t.qZA()),2&n&&(t.xp6(3),t.Oqu(o.selectedItem[o.fieldType]),t.xp6(2),t.Oqu(o.isExpanded?"expand_less":"expand_more"),t.xp6(1),t.Q6J("ngIf",o.isExpanded))},dependencies:[p.mk,p.sg,p.O5],styles:['.text-nano[_ngcontent-%COMP%]{font-size:10px}.text-xs[_ngcontent-%COMP%]{font-size:12px}.text-smr[_ngcontent-%COMP%]{font-size:13px}.text-sm[_ngcontent-%COMP%]{font-size:14px}.text-base[_ngcontent-%COMP%]{font-size:18px}.text-normal[_ngcontent-%COMP%]{font-size:16px}.text-regular[_ngcontent-%COMP%]{font-size:15px}h6[_ngcontent-%COMP%], .text-h6[_ngcontent-%COMP%]{font-size:20px}h5[_ngcontent-%COMP%], .text-h5[_ngcontent-%COMP%]{font-size:22px}h4[_ngcontent-%COMP%], .text-h4[_ngcontent-%COMP%]{font-size:24px}h3[_ngcontent-%COMP%], .text-h3[_ngcontent-%COMP%]{font-size:30px}h2[_ngcontent-%COMP%], .text-h2[_ngcontent-%COMP%]{font-size:34px}h1[_ngcontent-%COMP%], .text-h1[_ngcontent-%COMP%]{font-size:36px}.text-huge[_ngcontent-%COMP%]{font-size:50px}.text-big[_ngcontent-%COMP%]{font-size:38px}.ft-head[_ngcontent-%COMP%]{font-family:Metropolis,sans-serif;letter-spacing:.5px}.ft-default[_ngcontent-%COMP%]{font-family:Albert Sans,sans-serif;font-weight:400;letter-spacing:.2px}.ft-sp[_ngcontent-%COMP%]{font-family:Catamaran,sans-serif}.fw-light[_ngcontent-%COMP%]{font-weight:300}.fw-normal[_ngcontent-%COMP%]{font-weight:400}.fw-medium[_ngcontent-%COMP%]{font-weight:500}.fw-semibold[_ngcontent-%COMP%]{font-weight:600}.fw-bold[_ngcontent-%COMP%]{font-weight:700}.ls--2[_ngcontent-%COMP%]{letter-spacing:.2px}.ls--25[_ngcontent-%COMP%]{letter-spacing:.25px}.ls--4[_ngcontent-%COMP%]{letter-spacing:.4px}.ls--15[_ngcontent-%COMP%]{letter-spacing:1.5px}.lh-14[_ngcontent-%COMP%]{line-height:14px}.lh-18[_ngcontent-%COMP%]{line-height:18px}.dropdown-classic-wrapper[_ngcontent-%COMP%]{position:relative}.dropdown-classic-wrapper[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]{display:inline-flex;cursor:pointer;align-items:center;padding:4px 6px;border-radius:4px!important}.dropdown-classic-wrapper[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]:hover{background-color:#e5e7eb}.dropdown-classic-wrapper[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]{position:absolute;top:30px;min-width:180px;border-radius:4px!important;background-color:#fff;padding:10px 0;z-index:1}.dropdown-classic-wrapper[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]{padding:6px 10px;color:#374151;margin:0 10px;cursor:pointer;border-radius:4px!important}.dropdown-classic-wrapper[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]:hover{background-color:#f3f4f6}.dropdown-classic-wrapper[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]   .list-group-item.selected[_ngcontent-%COMP%]{position:relative}.dropdown-classic-wrapper[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]   .list-group-item.selected[_ngcontent-%COMP%]:after{z-index:1;content:"\\e876";top:4px;right:8px;font-family:Material Symbols Outlined;position:absolute;color:#6b7280;font-size:18px}']}),a})();var m=c(674);const I=["sideNav"];function Z(i,a){1&i&&(t.ynx(0),t.TgZ(1,"div",5),t._UZ(2,"div",6),t.qZA(),t.BQk())}function D(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"div",47)(1,"div",48),t.NdJ("click",function(){const s=t.CHM(e).$implicit,r=t.oxw().$implicit,d=t.oxw(4);return t.KtG(d.handleResumeType(r,s.candidateProfileMappingStatusId))}),t.TgZ(2,"p",49),t._uU(3),t.qZA(),t.TgZ(4,"p",50),t._uU(5),t.qZA()()()}if(2&i){const e=a.$implicit;t.xp6(2),t.Q6J("profileMapColor",e.candidateProfileMappingStatusId),t.xp6(1),t.Oqu(e.count),t.xp6(1),t.Q6J("profileMapColor",e.candidateProfileMappingStatusId),t.xp6(1),t.Oqu(e.candidateProfileMappingStatusName)}}function J(i,a){if(1&i){const e=t.EpF();t.ynx(0),t.TgZ(1,"li",32)(2,"div",33)(3,"div",34)(4,"p",35),t._uU(5),t.qZA(),t.TgZ(6,"p",36),t._uU(7),t.qZA(),t.TgZ(8,"p",37),t._uU(9),t.qZA(),t.TgZ(10,"div",38)(11,"label",39)(12,"input",40),t.NdJ("ngModelChange",function(o){const r=t.CHM(e).$implicit;return t.KtG(r.active=o)}),t.qZA(),t._UZ(13,"span",19),t.qZA()()(),t.TgZ(14,"div",41)(15,"div",42)(16,"label",39)(17,"input",40),t.NdJ("ngModelChange",function(o){const r=t.CHM(e).$implicit;return t.KtG(r.active=o)}),t.qZA(),t._UZ(18,"span",19),t.qZA()()()(),t.TgZ(19,"div",43)(20,"p",44),t.NdJ("click",function(){const s=t.CHM(e).$implicit,r=t.oxw(4);return t.KtG(r.handleJob(s))}),t._uU(21,"Job Details"),t.qZA()(),t.TgZ(22,"div",45)(23,"div",2),t.YNc(24,D,6,4,"div",46),t.qZA()()(),t.BQk()}if(2&i){const e=a.$implicit,n=t.oxw(4);t.xp6(5),t.hij(" ",e.name," "),t.xp6(2),t.hij(" ",e.jobLocation," "),t.xp6(2),t.hij(" posted on ",n.getDate(e.postDate)," "),t.xp6(3),t.Q6J("ngModel",e.active),t.xp6(5),t.Q6J("ngModel",e.active),t.xp6(7),t.Q6J("ngForOf",e.profileCountSummary)}}function S(i,a){if(1&i&&(t.TgZ(0,"div",30),t.YNc(1,J,25,6,"ng-container",31),t.qZA()),2&i){const e=t.oxw(3);t.xp6(1),t.Q6J("ngForOf",e.filteredData)}}function A(i,a){if(1&i&&(t.ynx(0),t.TgZ(1,"div",21)(2,"div",2)(3,"div",22)(4,"h6"),t._uU(5),t.qZA()(),t.TgZ(6,"div",23)(7,"div",24)(8,"div",25)(9,"p",26),t._uU(10,"Sort By:"),t.qZA(),t._UZ(11,"dropdown-classic",27),t.qZA(),t.TgZ(12,"div",28)(13,"p",26),t._uU(14,"Order By:"),t.qZA(),t._UZ(15,"dropdown-classic",27),t.qZA()()()()(),t.YNc(16,S,2,1,"div",29),t.BQk()),2&i){const e=t.oxw(2);t.xp6(5),t.hij("",e.totalItems," results available "),t.xp6(6),t.Q6J("fieldList",e.sortList),t.xp6(4),t.Q6J("fieldList",e.orderList),t.xp6(1),t.Q6J("ngIf",e.filteredData.length>0)}}function z(i,a){if(1&i){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",2)(2,"div",7)(3,"div",8)(4,"form")(5,"div",9)(6,"div",10)(7,"div",11)(8,"input",12),t.NdJ("ngModelChange",function(o){t.CHM(e);const s=t.oxw();return t.KtG(s.searchData=o)})("input",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.onSearchData())}),t.qZA(),t.TgZ(9,"span",13),t._UZ(10,"i",14),t.qZA()()()()()()(),t.TgZ(11,"div",15)(12,"div",16)(13,"label",17)(14,"input",18),t.NdJ("ngModelChange",function(o){t.CHM(e);const s=t.oxw();return t.KtG(s.isActive=o)})("change",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.handleActive())}),t.qZA(),t._UZ(15,"span",19),t.qZA(),t.TgZ(16,"div",20),t._uU(17,"Active"),t.qZA()()()(),t.YNc(18,A,17,4,"ng-container",4),t.BQk()}if(2&i){const e=t.oxw();t.xp6(8),t.Q6J("ngModel",e.searchData),t.xp6(6),t.Q6J("ngModel",e.isActive),t.xp6(4),t.Q6J("ngIf",e.isDataAvailable)}}let j=(()=>{var i;class a{constructor(n,o,s,r,d){this.router=n,this.route=o,this.sessionService=s,this.sharedService=r,this.jobOpeningService=d,this.isLoaded=!1,this.isDataAvailable=!1,this.isError=!0,this.searchData="",this.isTrue=!1,this.sortList=[],this.orderList=[],this.initialData=[],this.filteredData=[],this.profileInitialCountSummary=h.Vf,this.error="",this.isActive=!0,this.isOpened=!1,this.selectedJob=null,this.isJobDescriptionSelected=!1,this.isResumeTypeSelected=!1,n.events.subscribe(f=>{f instanceof l.m2&&this.fetchProfiles()})}getDate(n){return C(n).format("MMMM D, YYYY")}onSearchData(){this.filterData()}handleActive(){this.filterData()}filterData(){this.filteredData=this.initialData.filter(n=>this.isMatch(n,this.searchData)),this.filteredData=this.filteredData.filter(n=>n.active==this.isActive),this.totalItems=this.filteredData.length}isMatch(n,o){return o=o.toLowerCase(),n.name.toLowerCase().includes(o)||n.jobLocation?.toLowerCase().includes(o)}handleResumeType(n,o){this.sharedService.setSideNavData(n),this.router.navigate(["resumes",n.jobOpeningId,o],{relativeTo:this.route})}handleJob(n){this.sharedService.setSideNavData(n),this.router.navigate(["jobdetails",n.jobOpeningId],{relativeTo:this.route})}fetchProfiles(){this.jobOpeningService.apiJobOpeningGetJobOpeningProfileMapSummaryGet(this.sessionService.consultancyUserId).subscribe({next:n=>{this.isLoaded=!0,this.isError=!1,v.xb(n)?this.isDataAvailable=!1:(this.initialData=n,this.initialData.forEach(o=>{let s=[],r=o.profileCountSummary;this.profileInitialCountSummary.forEach(d=>{let f=r.find(H=>H.candidateProfileMappingStatusId===d.candidateProfileMappingStatusId);s.push(f||d)}),o.profileCountSummary=s}),this.filteredData=this.initialData.filter(o=>o.active==this.isActive),this.totalItems=this.filteredData.length,this.isDataAvailable=!0)},error:n=>{this.isError=!0,this.isLoaded=!0,this.isDataAvailable=!0,this.error="Some error occured"}})}ngOnInit(){this.sortList=[{id:1,name:"Posted Date"},{id:2,name:"Title"}],this.orderList=[{id:1,name:"Ascending"},{id:2,name:"Descending"}]}}return(i=a).\u0275fac=function(n){return new(n||i)(t.Y36(l.F0),t.Y36(l.gz),t.Y36(w.m),t.Y36(_.F),t.Y36(M.UK))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-inbox"]],viewQuery:function(n,o){if(1&n&&t.Gf(I,5),2&n){let s;t.iGM(s=t.CRH())&&(o.sideNav=s.first)}},decls:7,vars:2,consts:[[1,"inbox-wrapper"],[1,"container"],[1,"row"],[1,"col-sm-12"],[4,"ngIf"],[1,"loader-wrapper"],[1,"pre-loader"],[1,"col-9","col-md-8","col-lg-6"],[1,"search-results"],[1,"input-box","mb-0"],[1,"form-group","mb-0"],[1,"input-group"],["type","text","id","searchData","name","searchData","placeholder","Search by job, location",1,"form-control",3,"ngModel","ngModelChange","input"],[1,"input-group-text"],[1,"fa","fa-search"],[1,"col-3","col-md-4","col-lg-6"],[1,"active-box"],[1,"switch-classic"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"slider","round"],[1,"ms-2","text-dark-700","fw-medium"],[1,"options-box"],[1,"col-md-4","col-lg-3"],[1,"col-md-8","col-lg-9"],[1,"options-area"],[1,"option","d-flex","align-items-center"],[1,"label","me-1","text-sm"],["fieldType","name",3,"fieldList"],[1,"d-flex","align-items-center"],["class","inbox-container",4,"ngIf"],[1,"inbox-container"],[4,"ngFor","ngForOf"],[1,"list-group-item","shadow"],[1,"top"],[1,"top-left"],[1,"text-secondary-800","text-normal","desp","fw-medium","me-3"],[1,"text-dark-600","text-sm","desp","fw-medium","me-3"],[1,"text-dark-400","text-sm","desp","me-3"],[1,"active-box","d-none","d-md-flex"],[1,"switch-classic","small"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"top-right"],[1,"active-box","me-2","d-md-none"],[1,"middle"],[1,"text-sm","fw-medium","text-tertiary-700","underline","pointer","mt-2","d-inline-block",3,"click"],[1,"bottom"],["class","col-6 col-md-3 col-lg-2",4,"ngFor","ngForOf"],[1,"col-6","col-md-3","col-lg-2"],[1,"box",3,"click"],[1,"text-base","fw-medium",3,"profileMapColor"],[1,"text-sm","fw-medium",3,"profileMapColor"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t.YNc(4,Z,3,0,"ng-container",4),t.YNc(5,z,19,3,"ng-container",4),t.qZA()()(),t._UZ(6,"router-outlet"),t.qZA()),2&n&&(t.xp6(4),t.Q6J("ngIf",!o.isLoaded),t.xp6(1),t.Q6J("ngIf",o.isLoaded))},dependencies:[p.sg,p.O5,g._Y,g.Fj,g.Wl,g.JJ,g.JL,g.On,g.F,O,m._F,l.lC],styles:[".text-nano[_ngcontent-%COMP%]{font-size:10px}.text-xs[_ngcontent-%COMP%]{font-size:12px}.text-smr[_ngcontent-%COMP%]{font-size:13px}.text-sm[_ngcontent-%COMP%]{font-size:14px}.text-base[_ngcontent-%COMP%]{font-size:18px}.text-normal[_ngcontent-%COMP%]{font-size:16px}.text-regular[_ngcontent-%COMP%]{font-size:15px}h6[_ngcontent-%COMP%], .text-h6[_ngcontent-%COMP%]{font-size:20px}h5[_ngcontent-%COMP%], .text-h5[_ngcontent-%COMP%]{font-size:22px}h4[_ngcontent-%COMP%], .text-h4[_ngcontent-%COMP%]{font-size:24px}h3[_ngcontent-%COMP%], .text-h3[_ngcontent-%COMP%]{font-size:30px}h2[_ngcontent-%COMP%], .text-h2[_ngcontent-%COMP%]{font-size:34px}h1[_ngcontent-%COMP%], .text-h1[_ngcontent-%COMP%]{font-size:36px}.text-huge[_ngcontent-%COMP%]{font-size:50px}.text-big[_ngcontent-%COMP%]{font-size:38px}.ft-head[_ngcontent-%COMP%], .inbox-wrapper[_ngcontent-%COMP%]   .options-box[_ngcontent-%COMP%]   .options-area[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-family:Metropolis,sans-serif;letter-spacing:.5px}.ft-default[_ngcontent-%COMP%]{font-family:Albert Sans,sans-serif;font-weight:400;letter-spacing:.2px}.ft-sp[_ngcontent-%COMP%]{font-family:Catamaran,sans-serif}.fw-light[_ngcontent-%COMP%]{font-weight:300}.fw-normal[_ngcontent-%COMP%]{font-weight:400}.fw-medium[_ngcontent-%COMP%]{font-weight:500}.fw-semibold[_ngcontent-%COMP%]{font-weight:600}.fw-bold[_ngcontent-%COMP%]{font-weight:700}.ls--2[_ngcontent-%COMP%]{letter-spacing:.2px}.ls--25[_ngcontent-%COMP%]{letter-spacing:.25px}.ls--4[_ngcontent-%COMP%]{letter-spacing:.4px}.ls--15[_ngcontent-%COMP%]{letter-spacing:1.5px}.lh-14[_ngcontent-%COMP%]{line-height:14px}.lh-18[_ngcontent-%COMP%]{line-height:18px}.inbox-wrapper[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%]{cursor:auto;background-color:#d1d5db}.inbox-wrapper[_ngcontent-%COMP%]   .active-box[_ngcontent-%COMP%]{display:flex;align-items:center;height:100%}.inbox-wrapper[_ngcontent-%COMP%]   .options-box[_ngcontent-%COMP%]{margin:24px 0 0}.inbox-wrapper[_ngcontent-%COMP%]   .options-box[_ngcontent-%COMP%]   .options-area[_ngcontent-%COMP%]{display:flex;align-items:center}@media (max-width: 767px){.inbox-wrapper[_ngcontent-%COMP%]   .options-box[_ngcontent-%COMP%]   .options-area[_ngcontent-%COMP%]{margin:16px 0 0}}.inbox-wrapper[_ngcontent-%COMP%]   .options-box[_ngcontent-%COMP%]   .options-area[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{color:#374151}.inbox-wrapper[_ngcontent-%COMP%]   .options-box[_ngcontent-%COMP%]   .options-area[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%]:not(:last-child){margin:0 20px 0 0}.inbox-wrapper[_ngcontent-%COMP%]   .inbox-container[_ngcontent-%COMP%]{margin:20px 0 0}.inbox-wrapper[_ngcontent-%COMP%]   .inbox-container[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]{padding:14px 24px;border:none;border-radius:4px!important;background-color:#fff}.inbox-wrapper[_ngcontent-%COMP%]   .inbox-container[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]:not(:last-child){margin:0 0 20px}.inbox-wrapper[_ngcontent-%COMP%]   .inbox-container[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.inbox-wrapper[_ngcontent-%COMP%]   .inbox-container[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .top-left[_ngcontent-%COMP%], .inbox-wrapper[_ngcontent-%COMP%]   .inbox-container[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .top-right[_ngcontent-%COMP%]{display:flex;align-items:center}.inbox-wrapper[_ngcontent-%COMP%]   .inbox-container[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .top-right[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]{margin:6px 0 0}@media (max-width: 767px){.inbox-wrapper[_ngcontent-%COMP%]   .inbox-container[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   .top-left[_ngcontent-%COMP%]{display:block}}.inbox-wrapper[_ngcontent-%COMP%]   .inbox-container[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]{margin:10px 0 0}@media (max-width: 767px){.inbox-wrapper[_ngcontent-%COMP%]   .inbox-container[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]{margin:20px 0 0}}.inbox-wrapper[_ngcontent-%COMP%]   .inbox-container[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]{cursor:pointer;width:100%;border:1px solid #e5e7eb;background-color:#f9fafb;border-radius:4px;padding:10px;height:100%;display:flex;flex-direction:column;justify-content:center}.inbox-wrapper[_ngcontent-%COMP%]   .inbox-container[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]:hover{background-color:#e5e7eb}@media (max-width: 991px){.inbox-wrapper[_ngcontent-%COMP%]   .inbox-container[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .box[_ngcontent-%COMP%]{height:auto;margin:0 0 10px}}"]}),a})();var x=c(2651);let q=(()=>{var i;class a{constructor(n,o){this.router=n,this.sharedService=o,this.isOpened=!1}onSidenavClose(){this.sharedService.setSideNavData(null),this.router.navigate(["/inbox"])}ngOnInit(){this.sharedService.sidenavdatacast.subscribe(n=>{setTimeout(n?()=>{this.isOpened=!0,this.selectedJob=n}:()=>{this.isOpened=!1,this.selectedJob=null})})}}return(i=a).\u0275fac=function(n){return new(n||i)(t.Y36(l.F0),t.Y36(_.F))},i.\u0275cmp=t.Xpm({type:i,selectors:[["inbox-job-details"]],decls:10,vars:5,consts:[["position","end",3,"opened","sidenav","openedChange","closed"],[1,"inbox-job-details-wrapper"],[1,"top"],[1,"text-secondary-800","desp","fw-medium","me-3"],[1,"text-dark-400","desp","fw-medium"],[1,"mt-3"]],template:function(n,o){1&n&&(t.TgZ(0,"mat-sidenav-container")(1,"mat-sidenav",0),t.NdJ("openedChange",function(r){return o.isOpened=r})("closed",function(){return o.onSidenavClose()}),t.TgZ(2,"div",1)(3,"div",2)(4,"p",3),t._uU(5),t.qZA(),t.TgZ(6,"p",4),t._uU(7),t.qZA(),t.TgZ(8,"p",5),t._uU(9),t.qZA()()()()()),2&n&&(t.xp6(1),t.Q6J("opened",o.isOpened)("sidenav",o.isOpened),t.xp6(4),t.hij(" ",null==o.selectedJob?null:o.selectedJob.name," "),t.xp6(2),t.hij(" Location: ",null==o.selectedJob?null:o.selectedJob.jobLocation," "),t.xp6(2),t.Oqu(null==o.selectedJob?null:o.selectedJob.description))},dependencies:[x.JX,x.TM,m.xh],styles:[".text-nano[_ngcontent-%COMP%]{font-size:10px}.text-xs[_ngcontent-%COMP%]{font-size:12px}.text-smr[_ngcontent-%COMP%]{font-size:13px}.text-sm[_ngcontent-%COMP%]{font-size:14px}.text-base[_ngcontent-%COMP%]{font-size:18px}.text-normal[_ngcontent-%COMP%]{font-size:16px}.text-regular[_ngcontent-%COMP%]{font-size:15px}h6[_ngcontent-%COMP%], .text-h6[_ngcontent-%COMP%]{font-size:20px}h5[_ngcontent-%COMP%], .text-h5[_ngcontent-%COMP%]{font-size:22px}h4[_ngcontent-%COMP%], .text-h4[_ngcontent-%COMP%]{font-size:24px}h3[_ngcontent-%COMP%], .text-h3[_ngcontent-%COMP%]{font-size:30px}h2[_ngcontent-%COMP%], .text-h2[_ngcontent-%COMP%]{font-size:34px}h1[_ngcontent-%COMP%], .text-h1[_ngcontent-%COMP%]{font-size:36px}.text-huge[_ngcontent-%COMP%]{font-size:50px}.text-big[_ngcontent-%COMP%]{font-size:38px}.ft-head[_ngcontent-%COMP%]{font-family:Metropolis,sans-serif;letter-spacing:.5px}.ft-default[_ngcontent-%COMP%]{font-family:Albert Sans,sans-serif;font-weight:400;letter-spacing:.2px}.ft-sp[_ngcontent-%COMP%]{font-family:Catamaran,sans-serif}.fw-light[_ngcontent-%COMP%]{font-weight:300}.fw-normal[_ngcontent-%COMP%]{font-weight:400}.fw-medium[_ngcontent-%COMP%]{font-weight:500}.fw-semibold[_ngcontent-%COMP%]{font-weight:600}.fw-bold[_ngcontent-%COMP%]{font-weight:700}.ls--2[_ngcontent-%COMP%]{letter-spacing:.2px}.ls--25[_ngcontent-%COMP%]{letter-spacing:.25px}.ls--4[_ngcontent-%COMP%]{letter-spacing:.4px}.ls--15[_ngcontent-%COMP%]{letter-spacing:1.5px}.lh-14[_ngcontent-%COMP%]{line-height:14px}.lh-18[_ngcontent-%COMP%]{line-height:18px}.inbox-job-details-wrapper[_ngcontent-%COMP%]{padding:30px 24px}"]}),a})();var N=c(9229),U=c(266);function k(i,a){if(1&i&&t._UZ(0,"download-resume",26),2&i){const e=t.oxw().$implicit;t.Q6J("doc",null==e?null:e.doc)}}function L(i,a){if(1&i){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",14)(2,"div",15)(3,"div",4)(4,"p",16),t._uU(5),t.qZA(),t.TgZ(6,"dropdown-classic",17),t.NdJ("changeData",function(o){t.CHM(e);const s=t.oxw(2);return t.KtG(s.handleChangeStatus(o))}),t.qZA()(),t._UZ(7,"div",18),t.qZA(),t.TgZ(8,"div",19)(9,"div",20),t.YNc(10,k,1,1,"download-resume",21),t.qZA(),t.TgZ(11,"div",20)(12,"div",22)(13,"div",23),t.NdJ("click",function(){const s=t.CHM(e).$implicit,r=t.oxw(2);return t.KtG(r.handleComments(s))}),t.TgZ(14,"span",24),t._uU(15," chat "),t.qZA(),t.TgZ(16,"span",25),t._uU(17,"add comments"),t.qZA()()()()()(),t.BQk()}if(2&i){const e=a.$implicit,n=t.oxw(2);t.xp6(5),t.Oqu(null==e?null:e.candidateProfile.candidateName),t.xp6(1),t.Q6J("fieldList",n.statusTypeDataList)("fieldRefId",e.id)("editValue",e.candidateProfileMappingStatusId)("profileMapColor",e.candidateProfileMappingStatusId),t.xp6(4),t.Q6J("ngIf",null==e?null:e.doc)}}function F(i,a){1&i&&(t.ynx(0),t.TgZ(1,"p"),t._uU(2,"No data available"),t.qZA(),t.BQk())}function R(i,a){if(1&i){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",3)(2,"div",4)(3,"div",5)(4,"p",6),t._uU(5),t.qZA(),t.TgZ(6,"p",7),t._uU(7),t.qZA()(),t.TgZ(8,"div",8),t._uU(9),t.qZA()(),t.TgZ(10,"div",9),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.showAll())}),t.TgZ(11,"p",10),t._uU(12),t.qZA(),t.TgZ(13,"span",11),t._uU(14),t.qZA()()(),t.TgZ(15,"div",12),t.YNc(16,L,18,6,"ng-container",13),t.ALo(17,"slice"),t.YNc(18,F,3,0,"ng-container",2),t.qZA(),t.BQk()}if(2&i){const e=t.oxw();t.xp6(5),t.hij(" ",null==e.selectedJob?null:e.selectedJob.name," "),t.xp6(2),t.hij(" ",null==e.selectedJob?null:e.selectedJob.jobLocation," "),t.xp6(2),t.hij(" posted on ",e.getDate(null==e.selectedJob?null:e.selectedJob.postDate)," "),t.xp6(3),t.hij("",e.isExpanded?"Show Less":"Show All"," "),t.xp6(2),t.Oqu(e.isExpanded?"expand_less":"expand_more"),t.xp6(2),t.Q6J("ngForOf",t.Dn7(17,7,e.jobDetails,e.itemStartIndex,e.itemEndIndex)),t.xp6(2),t.Q6J("ngIf",0==(null==e.jobDetails?null:e.jobDetails.length))}}function Q(i,a){if(1&i){const e=t.EpF();t.ynx(0),t.TgZ(1,"div",27)(2,"span",28),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.hideComments())}),t._uU(3,"chevron_left"),t.qZA(),t.TgZ(4,"p"),t._uU(5,"Comments"),t.qZA()(),t.TgZ(6,"div",29)(7,"p",16),t._uU(8),t.qZA(),t.TgZ(9,"p",30),t._uU(10),t.qZA()(),t.TgZ(11,"div",12)(12,"div",14)(13,"p"),t._uU(14),t.qZA()()(),t.BQk()}if(2&i){const e=t.oxw();t.xp6(8),t.Oqu(null==e.jobComment?null:e.jobComment.candidateProfile.candidateName),t.xp6(1),t.Q6J("profileMapColor",e.jobComment.candidateProfileMappingStatusId),t.xp6(1),t.Oqu(null==e.jobComment?null:e.jobComment.candidateProfileMappingStatusName),t.xp6(4),t.Oqu(e.jobComment.comment)}}let Y=(()=>{var i;class a{constructor(n,o,s,r,d){this.router=n,this.route=o,this.jobOpeningService=s,this.sharedService=r,this.toastr=d,this.isExpanded=!1,this.itemStartIndex=0,this.itemEndIndex=5,this.itemLimit=10,this.isOpened=!1,this.jobComment=null,this.statusTypeDataList=h.Vf}getDate(n){return C(n).format("MMMM D, YYYY")}showAll(){this.isExpanded=!this.isExpanded,this.itemLimit=this.isExpanded?this.totalItems:10}onSidenavClose(){this.sharedService.setSideNavData(null),this.router.navigate(["/inbox"])}handleComments(n){console.log(n),this.jobComment=n}hideComments(){this.jobComment=null}handleChangeStatus(n){this.jobOpeningService.apiJobOpeningChangeCandidateProfileMappingStatusIdPut(n.id,n.data.candidateProfileMappingStatusId).subscribe({next:r=>{this.fetchResumes(),this.toastr.success("Resume status updated successfully","",{timeOut:3e3,positionClass:"toast-top-center"}),this.router.navigate(["/inbox"])},error:r=>{this.toastr.error("Some error occured","",{timeOut:3e3,positionClass:"toast-top-center"})}})}fetchResumes(){this.jobOpeningService.apiJobOpeningGetAllResumeReceivedByJobIdGet(this.selectedJob.jobOpeningId).subscribe({next:n=>{this.jobDetails=n.value;const o=this.route.snapshot.params.typeid;this.jobDetails=this.jobDetails.filter(s=>s.candidateProfileMappingStatusId==o),this.totalItems=this.jobDetails.length,this.itemEndIndex=this.totalItems>this.itemLimit?this.itemLimit:this.totalItems},error:n=>{}})}ngOnInit(){this.sharedService.sidenavdatacast.subscribe(n=>{n?setTimeout(()=>{this.isOpened=!0,this.selectedJob=n,this.fetchResumes()}):(this.isOpened=!1,this.selectedJob=null)})}}return(i=a).\u0275fac=function(n){return new(n||i)(t.Y36(l.F0),t.Y36(l.gz),t.Y36(M.UK),t.Y36(_.F),t.Y36(N._W))},i.\u0275cmp=t.Xpm({type:i,selectors:[["inbox-resume-types"]],decls:5,vars:4,consts:[["position","end",3,"opened","sidenav","openedChange","closed"],[1,"inbox-resume-details-wrapper"],[4,"ngIf"],[1,"top"],[1,"left"],[1,"d-flex","left","align-items-center"],[1,"text-secondary-800","desp","fw-medium","me-3"],[1,"text-dark-600","desp","fw-medium"],[1,"text-dark-400","text-sm"],[1,"right","ms-auto","pointer","d-flex","align-items-center",3,"click"],[1,"text-secondary-800","text-sm"],[1,"material-symbols-outlined","text-h4","text-secondary-800","ms-1"],[1,"resumes-box"],[4,"ngFor","ngForOf"],[1,"list-group-item"],[1,"resume-content"],[1,"fw-medium"],["fieldName","candidateProfileMappingStatusId","fieldType","candidateProfileMappingStatusName",3,"fieldList","fieldRefId","editValue","profileMapColor","changeData"],[1,"right"],[1,"bottom"],[1,"item"],[3,"doc",4,"ngIf"],[1,"view-comments-box"],[1,"inner","d-flex","align-items-center",3,"click"],[1,"material-symbols-outlined","icon","text-base","me-1"],[1,"text-sm"],[3,"doc"],[1,"d-flex","align-items-center"],[1,"material-symbols-outlined","text-h3","text-secondary-800","me-2","pointer",3,"click"],[1,"mt-4"],[1,"text-sm","fw-medium","text-primary-600",3,"profileMapColor"]],template:function(n,o){1&n&&(t.TgZ(0,"mat-sidenav-container")(1,"mat-sidenav",0),t.NdJ("openedChange",function(r){return o.isOpened=r})("closed",function(){return o.onSidenavClose()}),t.TgZ(2,"div",1),t.YNc(3,R,19,11,"ng-container",2),t.YNc(4,Q,15,4,"ng-container",2),t.qZA()()()),2&n&&(t.xp6(1),t.Q6J("opened",o.isOpened)("sidenav",o.isOpened),t.xp6(2),t.Q6J("ngIf",!o.jobComment),t.xp6(1),t.Q6J("ngIf",o.jobComment))},dependencies:[p.sg,p.O5,x.JX,x.TM,U.L,O,m.xh,m._F,p.OU],styles:[".text-nano[_ngcontent-%COMP%]{font-size:10px}.text-xs[_ngcontent-%COMP%]{font-size:12px}.text-smr[_ngcontent-%COMP%]{font-size:13px}.text-sm[_ngcontent-%COMP%]{font-size:14px}.text-base[_ngcontent-%COMP%]{font-size:18px}.text-normal[_ngcontent-%COMP%]{font-size:16px}.text-regular[_ngcontent-%COMP%]{font-size:15px}h6[_ngcontent-%COMP%], .text-h6[_ngcontent-%COMP%]{font-size:20px}h5[_ngcontent-%COMP%], .text-h5[_ngcontent-%COMP%]{font-size:22px}h4[_ngcontent-%COMP%], .text-h4[_ngcontent-%COMP%]{font-size:24px}h3[_ngcontent-%COMP%], .text-h3[_ngcontent-%COMP%]{font-size:30px}h2[_ngcontent-%COMP%], .text-h2[_ngcontent-%COMP%]{font-size:34px}h1[_ngcontent-%COMP%], .text-h1[_ngcontent-%COMP%]{font-size:36px}.text-huge[_ngcontent-%COMP%]{font-size:50px}.text-big[_ngcontent-%COMP%]{font-size:38px}.ft-head[_ngcontent-%COMP%]{font-family:Metropolis,sans-serif;letter-spacing:.5px}.ft-default[_ngcontent-%COMP%]{font-family:Albert Sans,sans-serif;font-weight:400;letter-spacing:.2px}.ft-sp[_ngcontent-%COMP%]{font-family:Catamaran,sans-serif}.fw-light[_ngcontent-%COMP%]{font-weight:300}.fw-normal[_ngcontent-%COMP%]{font-weight:400}.fw-medium[_ngcontent-%COMP%]{font-weight:500}.fw-semibold[_ngcontent-%COMP%]{font-weight:600}.fw-bold[_ngcontent-%COMP%]{font-weight:700}.ls--2[_ngcontent-%COMP%]{letter-spacing:.2px}.ls--25[_ngcontent-%COMP%]{letter-spacing:.25px}.ls--4[_ngcontent-%COMP%]{letter-spacing:.4px}.ls--15[_ngcontent-%COMP%]{letter-spacing:1.5px}.lh-14[_ngcontent-%COMP%]{line-height:14px}.lh-18[_ngcontent-%COMP%]{line-height:18px}.inbox-resume-details-wrapper[_ngcontent-%COMP%]{padding:30px 24px}.inbox-resume-details-wrapper[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.inbox-resume-details-wrapper[_ngcontent-%COMP%]   .resumes-box[_ngcontent-%COMP%]{margin:30px 0 0}.inbox-resume-details-wrapper[_ngcontent-%COMP%]   .resumes-box[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]{padding:14px 24px;border-radius:4px!important;background-color:#f9fafb;border:1px solid #d1d5db}.inbox-resume-details-wrapper[_ngcontent-%COMP%]   .resumes-box[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]:not(:last-child){margin:0 0 20px}.inbox-resume-details-wrapper[_ngcontent-%COMP%]   .resumes-box[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .resume-content[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.inbox-resume-details-wrapper[_ngcontent-%COMP%]   .resumes-box[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]{display:flex;margin:20px 0 0}.inbox-resume-details-wrapper[_ngcontent-%COMP%]   .resumes-box[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{display:flex;align-items:center;cursor:pointer}.inbox-resume-details-wrapper[_ngcontent-%COMP%]   .resumes-box[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:not(:last-child){margin:0 8px 0 0}.inbox-resume-details-wrapper[_ngcontent-%COMP%]   .resumes-box[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .view-comments-box[_ngcontent-%COMP%]{cursor:pointer;padding:4px 8px;background-color:#e8f0f9;border:1px solid #a5c3e7;color:#093e74;border-radius:4px!important}.inbox-resume-details-wrapper[_ngcontent-%COMP%]   .resumes-box[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .view-comments-box[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{font-size:inherit}"]}),a})(),P=(()=>{var i;class a{constructor(n,o){this.router=n,this.sharedService=o}resolve(n,o){null==this.sharedService.getSideNavData()&&this.router.navigateByUrl("/inbox")}}return(i=a).\u0275fac=function(n){return new(n||i)(t.LFG(l.F0),t.LFG(_.F))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),a})();const E=[{path:"",component:j,children:[{path:"jobdetails/:id",component:q,resolve:{inboxResolver:P}},{path:"resumes/:jobid/:typeid",component:Y,resolve:{inboxResolver:P}}]}];let G=(()=>{var i;class a{}return(i=a).\u0275fac=function(n){return new(n||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[l.Bz.forChild(E),l.Bz]}),a})(),B=(()=>{var i;class a{}return(i=a).\u0275fac=function(n){return new(n||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[p.ez,b.m.forRoot(),G]}),a})()}}]);