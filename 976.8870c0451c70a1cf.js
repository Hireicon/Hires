"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[976],{1976:(y,g,p)=>{p.r(g),p.d(g,{ProfileModule:()=>Z});var c=p(6814),d=p(4574),a=p(3403),n=p(5879),P=p(7700),_=p(9945),O=p(930),M=p(2742),f=p(361);const x=function(){return{exact:!0}};function m(e,i){1&e&&(n.TgZ(0,"a",38),n._UZ(1,"i",39),n.qZA()),2&e&&n.Q6J("routerLinkActiveOptions",n.DdM(1,x))}function h(e,i){if(1&e&&n._UZ(0,"app-job-detail-sheet",46),2&e){const o=n.oxw(2);n.Q6J("selectedJobDetails",o.selectedJobDetails)("isJobName",o.isJobName)}}function u(e,i){if(1&e){const o=n.EpF();n.ynx(0),n.TgZ(1,"li",40),n.NdJ("click",function(){const l=n.CHM(o).$implicit,s=n.oxw();return n.KtG(s.showJobDescription(l))}),n.TgZ(2,"div",41)(3,"h5"),n._uU(4),n.qZA(),n.TgZ(5,"div",42),n._uU(6,"5 days ago"),n.qZA()(),n.TgZ(7,"p",43),n._UZ(8,"i",44),n._uU(9),n.qZA()(),n.YNc(10,h,1,2,"app-job-detail-sheet",45),n.BQk()}if(2&e){const o=i.$implicit,t=n.oxw();n.xp6(1),n.Q6J("ngClass",t.isSelected(o.id)),n.xp6(3),n.Oqu(o.name),n.xp6(5),n.AsE("",o.city,", ",o.state,""),n.xp6(1),n.Q6J("ngIf",t.selectedJobId==o.id)}}function b(e,i){if(1&e&&(n.ynx(0),n.TgZ(1,"li",47)(2,"h5"),n._uU(3),n.qZA(),n.TgZ(4,"p",43),n._UZ(5,"i",44),n._uU(6),n.qZA()(),n.BQk()),2&e){const o=i.$implicit;n.xp6(3),n.Oqu(o.name),n.xp6(3),n.AsE("",o.city,", ",o.state,"")}}let C=(()=>{var e;class i{constructor(t,r,l,s){this.userService=t,this.consultancyService=r,this.sessionService=l,this.sharedService=s,this.user={},this.company={},this.selectedJobId=-1,this.isJobName=!1,this.jobDetailsChanged=new n.vpe}isSelected(t){return this.selectedJobId==t?"selected":""}showJobDescription(t){this.selectedJobId=this.selectedJobId!=t.id?t.id:-1,this.selectedJobDetails=t,this.jobDetailsChanged.emit(this.selectedJobDetails)}ngOnInit(){this.profileLink=window.location.href,this.userService.apiUserGetUserByUserNameGet(this.sessionService.userEmail).subscribe({next:t=>{this.user=t.value[0]},error:t=>{console.log(t)}}),this.consultancyService.apiConsultancyConsultancyByIdGet(this.sessionService.consultancyId).subscribe({next:t=>{this.company=t.value,console.log(t.value)},error:t=>{console.log(t)}}),this.sharedService.getJsonData().subscribe({next:t=>{this.myJobs=t.myJobs,this.myHotlist=t.myHotList},error:t=>{console.log(t)}})}}return(e=i).\u0275fac=function(t){return new(t||e)(n.Y36(_.KD),n.Y36(_.pp),n.Y36(O.m),n.Y36(M.F))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-profile"]],features:[n._Bn([{provide:P.so,useValue:{}}])],decls:64,vars:8,consts:[[1,"profile-wrapper"],[1,"content-block"],[1,"container"],[1,"row"],[1,"col-md-12","col-lg-5"],[1,"panel","panel-white","profile-panel"],[1,"profile-pic"],["src","https://randomuser.me/api/portraits/men/44.jpg"],[1,"desp"],[1,"d-flex","align-items-center","name"],[1,"ft-head","text-base","fw-medium"],["class","ms-auto","routerLink","/myaccount","routerLinkActive","active",3,"routerLinkActiveOptions",4,"ngIf"],[1,"types"],[1,"list-inline-item","select","text-sm","px-2","py-1"],[1,"list-inline-item","text-sm","px-2","py-1"],[1,"other-info"],[1,"item","mb-3"],[1,"text-sm","fw-medium"],[1,"text-sm","fw-medium","text-gray-500","mt-1"],[1,"item"],[1,"col-md-12","col-lg-7"],[1,"panel","panel-white","right-panel"],["role","tablist",1,"nav","nav-tabs"],[1,"nav-item"],["href","#profile-recruiters","role","tab","data-bs-toggle","tab",1,"nav-link","active"],["href","#profile-benchsales","role","tab","data-bs-toggle","tab",1,"nav-link"],[1,"tab-content"],["role","tabpanel","id","profile-recruiters",1,"tab-pane","fade","show","active"],[1,"details-box"],[1,"d-flex","justify-content-between"],[1,"float-left"],["aria-hidden","true",1,"fa","fa-briefcase","me-3"],[1,"float-right","note"],[1,"list","recruit"],[4,"ngFor","ngForOf"],["role","tabpanel","id","profile-benchsales",1,"tab-pane","fade"],["aria-hidden","true",1,"fa","fa-user","me-3"],[1,"list"],["routerLink","/myaccount","routerLinkActive","active",1,"ms-auto",3,"routerLinkActiveOptions"],[1,"fa-solid","fa-pencil"],[1,"list-group-item",3,"ngClass","click"],[1,"d-flex"],[1,"flex-shrink-1","date","ms-auto"],[1,"place"],["aria-hidden","true",1,"fas","fa-map-marker-alt","icon","me-2"],[3,"selectedJobDetails","isJobName",4,"ngIf"],[3,"selectedJobDetails","isJobName"],[1,"list-group-item"]],template:function(t,r){1&t&&(n.TgZ(0,"div",0)(1,"section",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6),n._UZ(7,"img",7),n.qZA(),n.TgZ(8,"div",8)(9,"div",9)(10,"div",10),n._uU(11),n.qZA(),n.YNc(12,m,2,2,"a",11),n.qZA(),n.TgZ(13,"div",12)(14,"p",13),n._uU(15,"Recruiter"),n.qZA(),n.TgZ(16,"p",14),n._uU(17,"Bench Sales Manager"),n.qZA()(),n.TgZ(18,"div",15)(19,"div",16)(20,"p",17),n._uU(21,"Company Name"),n.qZA(),n.TgZ(22,"p",18),n._uU(23),n.qZA()(),n.TgZ(24,"div",16)(25,"p",17),n._uU(26,"Company URL"),n.qZA(),n.TgZ(27,"p",18),n._uU(28),n.qZA()(),n.TgZ(29,"div",19)(30,"p",17),n._uU(31,"Profile Link"),n.qZA(),n.TgZ(32,"p",18),n._uU(33),n.qZA()()()()()(),n.TgZ(34,"div",20)(35,"div",21)(36,"ul",22)(37,"li",23)(38,"a",24),n._uU(39,"I am recruiting"),n.qZA()(),n.TgZ(40,"li",23)(41,"a",25),n._uU(42,"My available resources"),n.qZA()()(),n.TgZ(43,"div",26)(44,"div",27)(45,"div",28)(46,"div",29)(47,"h4",30),n._UZ(48,"i",31),n._uU(49,"Jobs Posted"),n.qZA(),n.TgZ(50,"div",32),n._uU(51,"From last month"),n.qZA()(),n.TgZ(52,"div",33),n.YNc(53,u,11,5,"ng-container",34),n.qZA()()(),n.TgZ(54,"div",35)(55,"div",28)(56,"div",29)(57,"h4",30),n._UZ(58,"i",36),n._uU(59,"Hotlists"),n.qZA(),n.TgZ(60,"div",32),n._uU(61,"From last month"),n.qZA()(),n.TgZ(62,"div",37),n.YNc(63,b,7,3,"ng-container",34),n.qZA()()()()()()()()()()),2&t&&(n.xp6(11),n.AsE("",r.user.fname," ",r.user.lname,""),n.xp6(1),n.Q6J("ngIf",r.user),n.xp6(11),n.Oqu(r.company.name),n.xp6(5),n.Oqu(r.company.email),n.xp6(5),n.Oqu(r.user.linkedin?r.user.linkedin:"NA"),n.xp6(20),n.Q6J("ngForOf",r.myJobs),n.xp6(10),n.Q6J("ngForOf",r.myHotlist))},dependencies:[c.mk,c.sg,c.O5,f.N,a.rH,a.Od],styles:['.text-xs[_ngcontent-%COMP%]{font-size:12px}.text-smr[_ngcontent-%COMP%]{font-size:13px}.text-sm[_ngcontent-%COMP%]{font-size:14px}.text-base[_ngcontent-%COMP%]{font-size:18px}.text-normal[_ngcontent-%COMP%]{font-size:16px}h6[_ngcontent-%COMP%], .text-h6[_ngcontent-%COMP%]{font-size:20px}h5[_ngcontent-%COMP%], .text-h5[_ngcontent-%COMP%]{font-size:22px}h4[_ngcontent-%COMP%], .text-h4[_ngcontent-%COMP%]{font-size:24px}h3[_ngcontent-%COMP%], .text-h3[_ngcontent-%COMP%]{font-size:30px}h2[_ngcontent-%COMP%], .text-h2[_ngcontent-%COMP%]{font-size:34px}h1[_ngcontent-%COMP%], .text-h1[_ngcontent-%COMP%]{font-size:36px}.text-huge[_ngcontent-%COMP%]{font-size:50px}.text-big[_ngcontent-%COMP%]{font-size:38px}.ft-head[_ngcontent-%COMP%], .profile-wrapper[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .details-box[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .profile-wrapper[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .details-box[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%], .profile-wrapper[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .details-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .profile-wrapper[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{font-family:Metropolis,sans-serif;letter-spacing:.5px}.ft-default[_ngcontent-%COMP%], .profile-wrapper[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .details-box[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%], .profile-wrapper[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .details-box[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%], .profile-wrapper[_ngcontent-%COMP%]   .profile-panel[_ngcontent-%COMP%]   .desp[_ngcontent-%COMP%]   .types[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400;letter-spacing:.4px}.ft-sp[_ngcontent-%COMP%]{font-family:Catamaran,sans-serif}.fw-light[_ngcontent-%COMP%]{font-weight:300}.fw-normal[_ngcontent-%COMP%]{font-weight:400}.fw-medium[_ngcontent-%COMP%]{font-weight:500}.fw-semibold[_ngcontent-%COMP%]{font-weight:600}.fw-bold[_ngcontent-%COMP%]{font-weight:700}.ls--2[_ngcontent-%COMP%]{letter-spacing:.2px}.ls--25[_ngcontent-%COMP%]{letter-spacing:.25px}.ls--4[_ngcontent-%COMP%]{letter-spacing:.4px}.ls--15[_ngcontent-%COMP%]{letter-spacing:1.5px}.lh-14[_ngcontent-%COMP%]{line-height:14px}.profile-wrapper[_ngcontent-%COMP%]   .profile-panel[_ngcontent-%COMP%]{position:relative;top:80px;padding-bottom:0}.profile-wrapper[_ngcontent-%COMP%]   .profile-panel[_ngcontent-%COMP%]   .profile-pic[_ngcontent-%COMP%]{position:absolute;top:-80px;left:calc(50% - 65px);width:130px}.profile-wrapper[_ngcontent-%COMP%]   .profile-panel[_ngcontent-%COMP%]   .profile-pic[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:50%!important;border:4px solid white;box-shadow:0 2px 10px #00000026;-moz-box-shadow:0 2px 10px 0 rgba(0,0,0,.15);-webkit-box-shadow:0 2px 10px 0 rgba(0,0,0,.15);width:100%;height:100%;object-fit:cover}.profile-wrapper[_ngcontent-%COMP%]   .profile-panel[_ngcontent-%COMP%]   .desp[_ngcontent-%COMP%]{margin:70px 0 0}.profile-wrapper[_ngcontent-%COMP%]   .profile-panel[_ngcontent-%COMP%]   .desp[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin:0 0 0 6px;font-size:12px;border:2px solid #18c36c;width:30px;height:30px;display:flex;background-color:#fff;color:#18c36c;border-radius:30px!important;position:relative;align-items:center;justify-content:center}.profile-wrapper[_ngcontent-%COMP%]   .profile-panel[_ngcontent-%COMP%]   .desp[_ngcontent-%COMP%]   .types[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:2px 8px 0 0;padding:2px 4px;color:#4b5563;border-radius:2px!important;border:1px solid #4b5563;letter-spacing:.4px;pointer-events:none;background-color:transparent}.profile-wrapper[_ngcontent-%COMP%]   .profile-panel[_ngcontent-%COMP%]   .desp[_ngcontent-%COMP%]   .types[_ngcontent-%COMP%]   p.select[_ngcontent-%COMP%]{background-color:#facc15;border:1px solid #facc15;color:#fff;cursor:pointer;pointer-events:auto;text-shadow:0 1px 1px rgba(0,0,0,.15);-moz-text-shadow:0 1px 1px rgba(0,0,0,.15);-webkit-text-shadow:0 1px 1px rgba(0,0,0,.15)}.profile-wrapper[_ngcontent-%COMP%]   .profile-panel[_ngcontent-%COMP%]   .desp[_ngcontent-%COMP%]   .types[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child{margin-right:0}.profile-wrapper[_ngcontent-%COMP%]   .profile-panel[_ngcontent-%COMP%]   .desp[_ngcontent-%COMP%]   .other-info[_ngcontent-%COMP%]{border:1px solid #d1d5db;border-left:none;border-right:none;margin:20px 0 0;width:calc(100% + 60px);position:relative;left:-30px;background-color:#f9fafb;padding:20px 30px}@media (max-width: 991px){.profile-wrapper[_ngcontent-%COMP%]   .profile-panel[_ngcontent-%COMP%]   .desp[_ngcontent-%COMP%]   .other-info[_ngcontent-%COMP%]{width:calc(100% + 30px);left:-15px}}.profile-wrapper[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]{padding:15px 0 0!important;overflow:auto}@media (max-width: 991px){.profile-wrapper[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]{margin:100px 0 0}}.profile-wrapper[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]{border-bottom:1px solid #d1d5db!important;margin:0 0 20px!important}.profile-wrapper[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{border:none;color:#111827;font-size:18px;padding:5px 25px}.profile-wrapper[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]{border-bottom:3px solid #18c36c;color:#18c36c}.profile-wrapper[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .details-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{padding:20px 0 15px 20px;font-size:16px}.profile-wrapper[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .details-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:14px}.profile-wrapper[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .details-box[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%]{padding:20px 20px 15px;font-size:14px;color:#1f2937}.profile-wrapper[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .details-box[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]{clear:both}.profile-wrapper[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .details-box[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]{border:none;border-top:1px solid #d1d5db;padding:15px 20px}.profile-wrapper[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .details-box[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:16px;margin-bottom:4px}.profile-wrapper[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .details-box[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]{color:#f9fafb;font-size:12px}.profile-wrapper[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .details-box[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;margin-bottom:6px}.profile-wrapper[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .details-box[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child{margin-bottom:0}.profile-wrapper[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .details-box[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   p.place[_ngcontent-%COMP%]{color:#1f2937}.profile-wrapper[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .details-box[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   p.place[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:14px}.profile-wrapper[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .details-box[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{font-size:16px;color:#477fec;margin:0 2px 0 0}.profile-wrapper[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .details-box[_ngcontent-%COMP%]   .list.recruit[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]{cursor:pointer}.profile-wrapper[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .details-box[_ngcontent-%COMP%]   .list.recruit[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]:after{content:"\\f107";font-family:FontAwesome;position:absolute;right:20px;top:36px;color:#4b5563;font-size:18px}.profile-wrapper[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .details-box[_ngcontent-%COMP%]   .list.recruit[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]:hover{background-color:#f3f4f6;transition:all .15s ease}.profile-wrapper[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .details-box[_ngcontent-%COMP%]   .list.recruit[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]:hover:after{color:#18c36c;transition:all .15s ease}.profile-wrapper[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .details-box[_ngcontent-%COMP%]   .list.recruit[_ngcontent-%COMP%]   .list-group-item.selected[_ngcontent-%COMP%]:after{content:"\\f106"}']}),i})();const v=[{path:"",component:C},{path:":id",component:C}];let w=(()=>{var e;class i{}return(e=i).\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[a.Bz.forChild(v),a.Bz]}),i})(),Z=(()=>{var e;class i{}return(e=i).\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[c.ez,d.m.forRoot(),w]}),i})()}}]);