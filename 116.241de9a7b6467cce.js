"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[116],{2116:(z,C,c)=>{c.r(C),c.d(C,{ProfileModule:()=>y});var s=c(6814),M=c(4574),l=c(1331),n=c(5879),d=c(7700),g=c(9945),f=c(930),x=c(2742),_=c(9900),P=c(6223);let h=(()=>{var e;class r{constructor(t,o){this._userService=t,this._sessionService=o,this.selectedFile=null,this.user={},this.profilePicUrl=""}uploadFile(t){this.selectedFile=t.target.files[0],this._userService.apiUserUploadProfilePicPut(this._sessionService.userEmail,this.selectedFile).subscribe({next:o=>{this._sessionService.refreshUser()},error:o=>{}})}ngOnInit(){this._sessionService.userdetailscast.subscribe(t=>{this.user=t,this.profilePicUrl=this.user&&this.user?.profilePic?`${_.x}${this.user?.profilePic}`:_.O})}}return(e=r).\u0275fac=function(t){return new(t||e)(n.Y36(g.KD),n.Y36(f.m))},e.\u0275cmp=n.Xpm({type:e,selectors:[["profile-pic"]],decls:9,vars:1,consts:[[1,"profile-pic-box"],[1,"pic-area"],[3,"src"],[1,"edit-area"],["enctype","multipart/form-data"],[1,"icon-box"],[1,"material-symbols-outlined","icon"],["type","file",3,"change"]],template:function(t,o){1&t&&(n.TgZ(0,"div",0)(1,"div",1),n._UZ(2,"img",2),n.qZA(),n.TgZ(3,"div",3)(4,"form",4)(5,"div",5)(6,"span",6),n._uU(7,"edit"),n.qZA(),n.TgZ(8,"input",7),n.NdJ("change",function(p){return o.uploadFile(p)}),n.qZA()()()()()),2&t&&(n.xp6(2),n.s9C("src",o.profilePicUrl,n.LSH))},dependencies:[P._Y,P.JL,P.F],styles:[".text-nano[_ngcontent-%COMP%]{font-size:10px}.text-xs[_ngcontent-%COMP%]{font-size:12px}.text-smr[_ngcontent-%COMP%]{font-size:13px}.text-sm[_ngcontent-%COMP%]{font-size:14px}.text-base[_ngcontent-%COMP%], .profile-pic-box[_ngcontent-%COMP%]   .edit-area[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{font-size:18px}.text-normal[_ngcontent-%COMP%]{font-size:16px}.text-regular[_ngcontent-%COMP%]{font-size:15px}h6[_ngcontent-%COMP%], .text-h6[_ngcontent-%COMP%]{font-size:20px}h5[_ngcontent-%COMP%], .text-h5[_ngcontent-%COMP%]{font-size:22px}h4[_ngcontent-%COMP%], .text-h4[_ngcontent-%COMP%]{font-size:24px}h3[_ngcontent-%COMP%], .text-h3[_ngcontent-%COMP%]{font-size:30px}h2[_ngcontent-%COMP%], .text-h2[_ngcontent-%COMP%]{font-size:34px}h1[_ngcontent-%COMP%], .text-h1[_ngcontent-%COMP%]{font-size:36px}.text-huge[_ngcontent-%COMP%]{font-size:50px}.text-big[_ngcontent-%COMP%]{font-size:38px}.ft-head[_ngcontent-%COMP%]{font-family:Metropolis,sans-serif;letter-spacing:.5px}.ft-default[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400;letter-spacing:.2px}.ft-sp[_ngcontent-%COMP%]{font-family:Catamaran,sans-serif}.fw-light[_ngcontent-%COMP%]{font-weight:300}.fw-normal[_ngcontent-%COMP%]{font-weight:400}.fw-medium[_ngcontent-%COMP%]{font-weight:500}.fw-semibold[_ngcontent-%COMP%]{font-weight:600}.fw-bold[_ngcontent-%COMP%]{font-weight:700}.ls--2[_ngcontent-%COMP%]{letter-spacing:.2px}.ls--25[_ngcontent-%COMP%]{letter-spacing:.25px}.ls--4[_ngcontent-%COMP%]{letter-spacing:.4px}.ls--15[_ngcontent-%COMP%]{letter-spacing:1.5px}.lh-14[_ngcontent-%COMP%]{line-height:14px}.lh-18[_ngcontent-%COMP%]{line-height:18px}.profile-pic-box[_ngcontent-%COMP%]{position:absolute;top:-80px;left:calc(50% - 65px);width:130px}.profile-pic-box[_ngcontent-%COMP%]   .pic-area[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:50%!important;border:4px solid white;box-shadow:0 2px 10px #00000026;-moz-box-shadow:0 2px 10px 0 rgba(0,0,0,.15);-webkit-box-shadow:0 2px 10px 0 rgba(0,0,0,.15);width:100%;height:100%;object-fit:cover}.profile-pic-box[_ngcontent-%COMP%]   .edit-area[_ngcontent-%COMP%]{position:absolute;bottom:14px;left:calc(50% - 16px)}.profile-pic-box[_ngcontent-%COMP%]   .edit-area[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%]{position:relative;width:32px;height:32px;display:flex;justify-content:center;align-items:center;background-color:#fff;color:#18c36c;border-radius:32px!important;border:1px solid #18c36c;overflow:hidden;cursor:pointer}.profile-pic-box[_ngcontent-%COMP%]   .edit-area[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{opacity:0;position:absolute;width:100%}.profile-pic-box[_ngcontent-%COMP%]   .edit-area[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .icon-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-file-upload-button{cursor:pointer}"]}),r})();const u=function(){return{exact:!0}};function m(e,r){1&e&&(n.TgZ(0,"a",35),n._UZ(1,"i",36),n.qZA()),2&e&&n.Q6J("routerLinkActiveOptions",n.DdM(1,u))}function b(e,r){if(1&e){const i=n.EpF();n.ynx(0),n.TgZ(1,"li",37),n.NdJ("click",function(){const a=n.CHM(i).$implicit,p=n.oxw();return n.KtG(p.showJobDescription(a))}),n.TgZ(2,"div",38)(3,"h5"),n._uU(4),n.qZA(),n.TgZ(5,"div",39),n._uU(6,"5 days ago"),n.qZA()(),n.TgZ(7,"p",40),n._UZ(8,"i",41),n._uU(9),n.qZA()(),n.BQk()}if(2&e){const i=r.$implicit,t=n.oxw();n.xp6(1),n.Q6J("ngClass",t.isSelected(i.id)),n.xp6(3),n.Oqu(i.name),n.xp6(5),n.AsE("",i.city,", ",i.state," ")}}function v(e,r){if(1&e&&(n.ynx(0),n.TgZ(1,"li",42)(2,"h5"),n._uU(3),n.qZA(),n.TgZ(4,"p",40),n._UZ(5,"i",41),n._uU(6),n.qZA()(),n.BQk()),2&e){const i=r.$implicit;n.xp6(3),n.Oqu(i.name),n.xp6(3),n.AsE("",i.city,", ",i.state," ")}}let O=(()=>{var e;class r{constructor(t,o,a,p){this.userService=t,this.consultancyService=o,this.sessionService=a,this.sharedService=p,this.user={},this.company={},this.selectedJobId=-1,this.isJobName=!1,this.jobDetailsChanged=new n.vpe}isSelected(t){return this.selectedJobId==t?"selected":""}showJobDescription(t){this.selectedJobId=this.selectedJobId!=t.id?t.id:-1,this.selectedJob=t,this.jobDetailsChanged.emit(this.selectedJob)}ngOnInit(){this.profileLink=window.location.href,this.sessionService.userdetailscast.subscribe(t=>{this.user=t}),this.consultancyService.apiConsultancyConsultancyByIdGet(this.sessionService.consultancyId).subscribe({next:t=>{this.company=t.value},error:t=>{console.log(t)}}),this.sharedService.getJsonData().subscribe({next:t=>{this.myJobs=t.myJobs,this.myHotlist=t.myHotList},error:t=>{console.log(t)}})}}return(e=r).\u0275fac=function(t){return new(t||e)(n.Y36(g.KD),n.Y36(g.pp),n.Y36(f.m),n.Y36(x.F))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-profile"]],features:[n._Bn([{provide:d.so,useValue:{}}])],decls:62,vars:8,consts:[[1,"profile-wrapper"],[1,"container"],[1,"row"],[1,"col-md-12","col-lg-5"],[1,"panel","panel-white","profile-panel"],[1,"desp"],[1,"d-flex","align-items-center","name"],[1,"ft-head","text-base","fw-medium"],["class","ms-auto","routerLink","/myaccount","routerLinkActive","active",3,"routerLinkActiveOptions",4,"ngIf"],[1,"types"],[1,"list-inline-item","select","text-sm","px-2","py-1"],[1,"list-inline-item","text-sm","px-2","py-1"],[1,"other-info"],[1,"item","mb-3"],[1,"text-sm","fw-medium"],[1,"text-sm","fw-medium","text-dark-500","mt-1"],[1,"item"],[1,"col-md-12","col-lg-7"],[1,"panel","panel-white","right-panel"],["role","tablist",1,"nav","nav-tabs"],[1,"nav-item"],["href","#profile-recruiters","role","tab","data-bs-toggle","tab",1,"nav-link","active"],["href","#profile-benchsales","role","tab","data-bs-toggle","tab",1,"nav-link"],[1,"tab-content"],["role","tabpanel","id","profile-recruiters",1,"tab-pane","fade","show","active"],[1,"details-box"],[1,"d-flex","justify-content-between"],[1,"float-left"],["aria-hidden","true",1,"fa","fa-briefcase","me-3"],[1,"float-right","note"],[1,"list","recruit"],[4,"ngFor","ngForOf"],["role","tabpanel","id","profile-benchsales",1,"tab-pane","fade"],["aria-hidden","true",1,"fa","fa-user","me-3"],[1,"list"],["routerLink","/myaccount","routerLinkActive","active",1,"ms-auto",3,"routerLinkActiveOptions"],[1,"fa-solid","fa-pencil"],[1,"list-group-item",3,"ngClass","click"],[1,"d-flex"],[1,"flex-shrink-1","date","ms-auto"],[1,"place"],["aria-hidden","true",1,"fas","fa-map-marker-alt","icon","me-2"],[1,"list-group-item"]],template:function(t,o){1&t&&(n.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),n._UZ(5,"profile-pic"),n.TgZ(6,"div",5)(7,"div",6)(8,"div",7),n._uU(9),n.qZA(),n.YNc(10,m,2,2,"a",8),n.qZA(),n.TgZ(11,"div",9)(12,"p",10),n._uU(13,"Recruiter"),n.qZA(),n.TgZ(14,"p",11),n._uU(15," Bench Sales Manager "),n.qZA()(),n.TgZ(16,"div",12)(17,"div",13)(18,"p",14),n._uU(19,"Company Name"),n.qZA(),n.TgZ(20,"p",15),n._uU(21),n.qZA()(),n.TgZ(22,"div",13)(23,"p",14),n._uU(24,"Company URL"),n.qZA(),n.TgZ(25,"p",15),n._uU(26),n.qZA()(),n.TgZ(27,"div",16)(28,"p",14),n._uU(29,"Profile Link"),n.qZA(),n.TgZ(30,"p",15),n._uU(31),n.qZA()()()()()(),n.TgZ(32,"div",17)(33,"div",18)(34,"ul",19)(35,"li",20)(36,"a",21),n._uU(37,"I am recruiting"),n.qZA()(),n.TgZ(38,"li",20)(39,"a",22),n._uU(40,"My available resources"),n.qZA()()(),n.TgZ(41,"div",23)(42,"div",24)(43,"div",25)(44,"div",26)(45,"h4",27),n._UZ(46,"i",28),n._uU(47,"Jobs Posted "),n.qZA(),n.TgZ(48,"div",29),n._uU(49,"From last month"),n.qZA()(),n.TgZ(50,"div",30),n.YNc(51,b,10,4,"ng-container",31),n.qZA()()(),n.TgZ(52,"div",32)(53,"div",25)(54,"div",26)(55,"h4",27),n._UZ(56,"i",33),n._uU(57,"Hotlists "),n.qZA(),n.TgZ(58,"div",29),n._uU(59,"From last month"),n.qZA()(),n.TgZ(60,"div",34),n.YNc(61,v,7,3,"ng-container",31),n.qZA()()()()()()()()()),2&t&&(n.xp6(9),n.AsE(" ",null==o.user?null:o.user.fname," ",null==o.user?null:o.user.lname," "),n.xp6(1),n.Q6J("ngIf",o.user),n.xp6(11),n.hij(" ",o.company.name," "),n.xp6(5),n.hij(" ",o.company.email," "),n.xp6(5),n.hij(" ",null!=o.user&&o.user.linkedin?o.user.linkedin:"NA"," "),n.xp6(20),n.Q6J("ngForOf",o.myJobs),n.xp6(10),n.Q6J("ngForOf",o.myHotlist))},dependencies:[s.mk,s.sg,s.O5,l.rH,l.Od,h],styles:['.text-nano[_ngcontent-%COMP%]{font-size:10px}.text-xs[_ngcontent-%COMP%]{font-size:12px}.text-smr[_ngcontent-%COMP%]{font-size:13px}.text-sm[_ngcontent-%COMP%]{font-size:14px}.text-base[_ngcontent-%COMP%]{font-size:18px}.text-normal[_ngcontent-%COMP%]{font-size:16px}.text-regular[_ngcontent-%COMP%]{font-size:15px}h6[_ngcontent-%COMP%], .text-h6[_ngcontent-%COMP%]{font-size:20px}h5[_ngcontent-%COMP%], .text-h5[_ngcontent-%COMP%]{font-size:22px}h4[_ngcontent-%COMP%], .text-h4[_ngcontent-%COMP%]{font-size:24px}h3[_ngcontent-%COMP%], .text-h3[_ngcontent-%COMP%]{font-size:30px}h2[_ngcontent-%COMP%], .text-h2[_ngcontent-%COMP%]{font-size:34px}h1[_ngcontent-%COMP%], .text-h1[_ngcontent-%COMP%]{font-size:36px}.text-huge[_ngcontent-%COMP%]{font-size:50px}.text-big[_ngcontent-%COMP%]{font-size:38px}.ft-head[_ngcontent-%COMP%], .profile-wrapper[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .details-box[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .profile-wrapper[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .details-box[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%], .profile-wrapper[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .details-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .profile-wrapper[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{font-family:Metropolis,sans-serif;letter-spacing:.5px}.ft-default[_ngcontent-%COMP%], .profile-wrapper[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .details-box[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%], .profile-wrapper[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .details-box[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%], .profile-wrapper[_ngcontent-%COMP%]   .profile-panel[_ngcontent-%COMP%]   .desp[_ngcontent-%COMP%]   .types[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400;letter-spacing:.2px}.ft-sp[_ngcontent-%COMP%]{font-family:Catamaran,sans-serif}.fw-light[_ngcontent-%COMP%]{font-weight:300}.fw-normal[_ngcontent-%COMP%]{font-weight:400}.fw-medium[_ngcontent-%COMP%]{font-weight:500}.fw-semibold[_ngcontent-%COMP%]{font-weight:600}.fw-bold[_ngcontent-%COMP%]{font-weight:700}.ls--2[_ngcontent-%COMP%]{letter-spacing:.2px}.ls--25[_ngcontent-%COMP%]{letter-spacing:.25px}.ls--4[_ngcontent-%COMP%]{letter-spacing:.4px}.ls--15[_ngcontent-%COMP%]{letter-spacing:1.5px}.lh-14[_ngcontent-%COMP%]{line-height:14px}.lh-18[_ngcontent-%COMP%]{line-height:18px}.profile-wrapper[_ngcontent-%COMP%]   .profile-panel[_ngcontent-%COMP%]{position:relative;top:80px;padding:20px 20px 0}.profile-wrapper[_ngcontent-%COMP%]   .profile-panel[_ngcontent-%COMP%]   .desp[_ngcontent-%COMP%]{margin:70px 0 0}.profile-wrapper[_ngcontent-%COMP%]   .profile-panel[_ngcontent-%COMP%]   .desp[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin:0 0 0 6px;font-size:12px;border:2px solid #18c36c;width:30px;height:30px;display:flex;background-color:#fff;color:#18c36c;border-radius:30px!important;position:relative;align-items:center;justify-content:center}.profile-wrapper[_ngcontent-%COMP%]   .profile-panel[_ngcontent-%COMP%]   .desp[_ngcontent-%COMP%]   .types[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:2px 8px 0 0;padding:2px 4px;color:#6b7280;border-radius:2px!important;border:1px solid #d1d5db;letter-spacing:.4px;pointer-events:none;background-color:transparent}.profile-wrapper[_ngcontent-%COMP%]   .profile-panel[_ngcontent-%COMP%]   .desp[_ngcontent-%COMP%]   .types[_ngcontent-%COMP%]   p.select[_ngcontent-%COMP%]{background-color:#1259a4;border:1px solid #1259a4;color:#fff;cursor:pointer;pointer-events:auto;text-shadow:0 1px 1px rgba(0,0,0,.15);-moz-text-shadow:0 1px 1px rgba(0,0,0,.15);-webkit-text-shadow:0 1px 1px rgba(0,0,0,.15)}.profile-wrapper[_ngcontent-%COMP%]   .profile-panel[_ngcontent-%COMP%]   .desp[_ngcontent-%COMP%]   .types[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child{margin-right:0}.profile-wrapper[_ngcontent-%COMP%]   .profile-panel[_ngcontent-%COMP%]   .desp[_ngcontent-%COMP%]   .other-info[_ngcontent-%COMP%]{border:1px solid #d1d5db;border-left:none;border-right:none;margin:20px 0 0;width:calc(100% + 40px);position:relative;left:-20px;background-color:#f9fafb;padding:20px}@media (max-width: 991px){.profile-wrapper[_ngcontent-%COMP%]   .profile-panel[_ngcontent-%COMP%]   .desp[_ngcontent-%COMP%]   .other-info[_ngcontent-%COMP%]{width:calc(100% + 40px);left:-20px}}.profile-wrapper[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]{padding:15px 0 0!important;overflow:auto}@media (max-width: 991px){.profile-wrapper[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]{margin:100px 0 0}}.profile-wrapper[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]{border-bottom:1px solid #d1d5db!important;margin:0 0 20px!important}.profile-wrapper[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{border:none;font-size:18px;padding:5px 25px}.profile-wrapper[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]{border-bottom:3px solid #18c36c;color:#18c36c}.profile-wrapper[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .details-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{padding:20px 0 15px 20px;font-size:16px}.profile-wrapper[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .details-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:14px}.profile-wrapper[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .details-box[_ngcontent-%COMP%]   .note[_ngcontent-%COMP%]{padding:20px 20px 15px;font-size:14px}.profile-wrapper[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .details-box[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]{clear:both}.profile-wrapper[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .details-box[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]{border:none;border-top:1px solid #d1d5db;padding:15px 20px}.profile-wrapper[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .details-box[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:16px;margin-bottom:4px}.profile-wrapper[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .details-box[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]{color:#f9fafb;font-size:12px}.profile-wrapper[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .details-box[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;margin-bottom:6px}.profile-wrapper[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .details-box[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child{margin-bottom:0}.profile-wrapper[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .details-box[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   p.place[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:14px}.profile-wrapper[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .details-box[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{font-size:16px;color:#4d87cc;margin:0 2px 0 0}.profile-wrapper[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .details-box[_ngcontent-%COMP%]   .list.recruit[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]{cursor:pointer}.profile-wrapper[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .details-box[_ngcontent-%COMP%]   .list.recruit[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]:after{content:"\\f107";font-family:FontAwesome;position:absolute;right:20px;top:36px;color:#6b7280;font-size:18px}.profile-wrapper[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .details-box[_ngcontent-%COMP%]   .list.recruit[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]:hover{background-color:#f3f4f6;transition:all .15s ease}.profile-wrapper[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .details-box[_ngcontent-%COMP%]   .list.recruit[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]:hover:after{color:#18c36c;transition:all .15s ease}.profile-wrapper[_ngcontent-%COMP%]   .right-panel[_ngcontent-%COMP%]   .details-box[_ngcontent-%COMP%]   .list.recruit[_ngcontent-%COMP%]   .list-group-item.selected[_ngcontent-%COMP%]:after{content:"\\f106"}']}),r})();const w=[{path:"",component:O},{path:":id",component:O}];let Z=(()=>{var e;class r{}return(e=r).\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[l.Bz.forChild(w),l.Bz]}),r})(),y=(()=>{var e;class r{}return(e=r).\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[s.ez,M.m.forRoot(),Z]}),r})()}}]);