"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[719],{3719:(L,x,r)=>{r.d(x,{N:()=>M});var e=r(5879),b=r(7700),c=r(9900),g=r(2544),h=r(6676),m=r(1670),f=r(1331),_=r(9144),w=r(4855),v=r(2755),j=r(2742),C=r(930),u=r(6814),y=r(3838),Z=r(3760);function U(o,l){if(1&o&&(e.ynx(0),e.TgZ(1,"span",50),e._uU(2),e.qZA(),e.BQk()),2&o){const p=l.$implicit;e.xp6(2),e.Oqu(p)}}function D(o,l){if(1&o&&(e.TgZ(0,"div",51),e._uU(1),e.qZA()),2&o){const p=l.$implicit;e.xp6(1),e.hij(" ",p," ")}}function J(o,l){if(1&o&&(e.TgZ(0,"div",51),e._uU(1),e.qZA()),2&o){const p=l.$implicit;e.xp6(1),e.hij(" ",p," ")}}function T(o,l){if(1&o&&(e.TgZ(0,"div",51),e._uU(1),e.qZA()),2&o){const p=l.$implicit;e.xp6(1),e.hij(" ",p," ")}}const A=function(o){return{id:o}};let M=(()=>{var o;class l{constructor(i,t,n,a,s,d,P,E,O){this.modalJobDetails=i,this.dialog=t,this.jobDialogRef=n,this._router=a,this.userService=s,this.authService=d,this.talkService=P,this.sharedService=E,this.sessionService=O,this.isMobile=!1,this.profilePicUrl="",this.outParam=new e.vpe,this.isUserOnline=!1}handleJobSheet(){this.outParam.emit(!1)}isModal(){return null!=this.modalJobDetails}isChatDisabled(){return this.selectedJob.userId==this.sessionService.userId}copyURL(){const n=`${window.location.href.replace("/search-jobs","jobs")}&id=${this.generateJobId(this.selectedJob.jobOpeningId)}`;navigator.clipboard.writeText(n)}getPostedDays(i){const t=h(i).toDate(),n=new Date,a=h(n).diff(t,"days");return a>30?`${h(n).diff(t,"months")} months `:1===a?`${h(n).diff(t,"hours")} hours `:`${a} days`}dialogClose(){m.ZP.isEmpty(this.jobDialogRef)||this.jobDialogRef.close()}handleApplyJobConfirmModal(){this.authService.isLoggedIn()?this.dialog.open(g.Q,{panelClass:"material",disableClose:!0,data:this.selectedJob}):(this.sharedService.setPageToRetain({page:this._router.url,job:this.selectedJob}),this._router.navigate(["/login"]))}getVisaDetails(i){return m.ZP.isEmpty(i)?"":i.join(",")}getProfilePic(i){return i?`${c.xY}${i}`:c.Ov}generateJobId(i){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let a="";for(let s=0;s<3;s++){for(let d=0;d<4;d++)a+=t.charAt(Math.floor(62*Math.random()));a+="-"}a+=t.charAt(Math.floor(62*Math.random()))+i+t.charAt(Math.floor(62*Math.random()))+"-";for(let s=0;s<6;s++)a+=t.charAt(Math.floor(62*Math.random()));for(let s=0;s<4;s++){for(let d=0;d<4;d++)a+=t.charAt(Math.floor(62*Math.random()));3!==s&&(a+="-")}return a}onResize(i){this.isMobile=i.target.innerWidth<=991,this.isMobile||this.dialogClose()}ngOnInit(){null!=this.modalJobDetails&&(this.selectedJob=this.modalJobDetails),this.isMobile=window.innerWidth<=991}ngOnChanges(){console.log(this.selectedJob),this.selectedJob&&this.userService.apiUserGetUserByUserNameGet(this.selectedJob.userName).subscribe({next:i=>{const n=i.value[0]?.consultancyUsers[0].publicProfileUserName;this.chatUser=this.selectedJob,this.chatUser.profileUserName=n,this.talkService.fetchTalkUserPresence(this.chatUser.userId).subscribe(a=>{this.isUserOnline="online"===a.data[this.chatUser.userId]?.status})},error:i=>{}})}}return(o=l).\u0275fac=function(i){return new(i||o)(e.Y36(b.WI,8),e.Y36(b.uw),e.Y36(b.so),e.Y36(f.F0),e.Y36(_.K),e.Y36(w.e),e.Y36(v._),e.Y36(j.F),e.Y36(C.m))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-job-detail-sheet"]],hostBindings:function(i,t){1&i&&e.NdJ("resize",function(a){return t.onResize(a)},!1,e.Jf7)},inputs:{selectedJob:"selectedJob"},outputs:{outParam:"outParam"},features:[e.TTD],decls:85,vars:23,consts:[[1,"job-details-wrapper"],[1,"d-block","d-md-none","material-symbols-outlined","pointer","text-h5","mt-2","mb-4",3,"click"],[1,"job-head"],[1,"left"],[1,"fw-medium","mb-2"],[1,"info"],[1,"text-dark-500","sub-title"],[1,"text-dark-500","text-sm","sub-title"],[1,"text-secondary-500","fw-medium","text-sm","mt-1"],[1,"apply-box"],[1,"inner"],[1,"btn","btn-secondary","text-normal","apply-btn",3,"click"],["href","javascript:void(0)","target","_blank","routerLink","/jobs","queryParamsHandling","merge",1,"ext-link-btn",3,"queryParams"],["xmlns","http://www.w3.org/2000/svg","x","0px","y","0px","width","100","height","100","viewBox","0 0 24 24"],["d","M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z"],[1,"share","dropdown"],["type","button","id","otherShareBtn","data-bs-toggle","dropdown","aria-expanded","false"],["src","assets/images/share-arrow-icon.png","alt",""],["aria-labelledby","otherShareBtn",1,"dropdown-menu"],[1,"dropdown-content"],[1,"title","fw-medium"],[1,"list"],["href","javascript:void(0)",1,"dropdown-item"],[1,"material-symbols-outlined","text-base","me-2"],["href","javascript:void(0)",1,"dropdown-item",3,"click"],[1,"material-symbols-outlined","me-2","copy"],[1,"others"],[1,"visa-box"],[4,"ngFor","ngForOf"],[1,"list-wrapper","job-list-wrapper","mt-2"],[1,"lists"],["class","item text-sm",4,"ngFor","ngForOf"],[1,"list-wrapper","skill-list-wrapper","mt-2"],[1,"list-wrapper","visa-list-wrapper","mt-2"],[1,"btn","btn-primary","btn-sm","apply-btn","text-normal","mt-4","d-lg-none",3,"click"],[1,"recruiter-box"],[1,"text-base","mb-2","fw-medium"],[1,"info-wrapper"],[1,"holder"],["alt","",3,"src"],[1,"desp"],[1,"fw-semibold","text-secondary-500"],[1,"text-dark-600"],[1,"right"],[1,"btn","chat-btn","fw-medium",3,"ngClass","chatUser"],["width","20","height","20","viewBox","0 0 30 30","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M23.8373 6.16265C21.7863 4.09828 19.0793 2.81417 16.1831 2.5317C13.2868 2.24924 10.3827 2.98612 7.97151 4.61531C5.56031 6.24451 3.79308 8.66391 2.97449 11.4564C2.1559 14.2489 2.33725 17.2395 3.48728 19.9127C3.60714 20.1611 3.64647 20.4408 3.59978 20.7127L2.49978 26.0001C2.4574 26.2029 2.46606 26.4129 2.52497 26.6115C2.58388 26.81 2.6912 26.9908 2.83728 27.1376C2.95704 27.2565 3.09962 27.3499 3.25645 27.4122C3.41327 27.4745 3.58109 27.5044 3.74978 27.5002H3.99978L9.34978 26.4251C9.62169 26.3925 9.89743 26.4312 10.1498 26.5377C12.8229 27.6877 15.8135 27.869 18.606 27.0504C21.3985 26.2319 23.8179 24.4646 25.4471 22.0534C27.0763 19.6422 27.8132 16.7381 27.5307 13.8419C27.2483 10.9456 25.9642 8.23863 23.8998 6.18765L23.8373 6.16265ZM9.99978 16.2502C9.75255 16.2502 9.51088 16.1768 9.30532 16.0395C9.09976 15.9021 8.93954 15.7069 8.84493 15.4785C8.75032 15.2501 8.72557 14.9988 8.7738 14.7563C8.82203 14.5138 8.94108 14.2911 9.1159 14.1163C9.29071 13.9415 9.51344 13.8224 9.75592 13.7742C9.99839 13.7259 10.2497 13.7507 10.4781 13.8453C10.7065 13.9399 10.9018 14.1001 11.0391 14.3057C11.1765 14.5112 11.2498 14.7529 11.2498 15.0002C11.2498 15.3317 11.1181 15.6496 10.8837 15.884C10.6492 16.1185 10.3313 16.2502 9.99978 16.2502ZM14.9998 16.2502C14.7526 16.2502 14.5109 16.1768 14.3053 16.0395C14.0998 15.9021 13.9395 15.7069 13.8449 15.4785C13.7503 15.2501 13.7256 14.9988 13.7738 14.7563C13.822 14.5138 13.9411 14.2911 14.1159 14.1163C14.2907 13.9415 14.5134 13.8224 14.7559 13.7742C14.9984 13.7259 15.2497 13.7507 15.4781 13.8453C15.7065 13.9399 15.9018 14.1001 16.0391 14.3057C16.1765 14.5112 16.2498 14.7529 16.2498 15.0002C16.2498 15.3317 16.1181 15.6496 15.8837 15.884C15.6492 16.1185 15.3313 16.2502 14.9998 16.2502ZM19.9998 16.2502C19.7526 16.2502 19.5109 16.1768 19.3053 16.0395C19.0998 15.9021 18.9395 15.7069 18.8449 15.4785C18.7503 15.2501 18.7256 14.9988 18.7738 14.7563C18.822 14.5138 18.9411 14.2911 19.1159 14.1163C19.2907 13.9415 19.5134 13.8224 19.7559 13.7742C19.9984 13.7259 20.2497 13.7507 20.4781 13.8453C20.7065 13.9399 20.9018 14.1001 21.0391 14.3057C21.1765 14.5112 21.2498 14.7529 21.2498 15.0002C21.2498 15.3317 21.1181 15.6496 20.8837 15.884C20.6492 16.1185 20.3313 16.2502 19.9998 16.2502Z"],[1,"ms-1"],[1,"job-details-container"],[1,"desp",3,"innerHTML"],[1,"item","text-primary-900","bg-primary-50","text-smr","fw-medium"],[1,"item","text-sm"]],template:function(i,t){1&i&&(e.TgZ(0,"div",0)(1,"div",1),e.NdJ("click",function(){return t.handleJobSheet()}),e._uU(2," arrow_back "),e.qZA(),e.TgZ(3,"div",2)(4,"div",3)(5,"h6",4),e._uU(6),e.qZA(),e.TgZ(7,"div",5)(8,"div",6),e._uU(9),e.qZA(),e.TgZ(10,"div",7),e._uU(11),e.qZA()(),e.TgZ(12,"div",8),e._uU(13),e.qZA()(),e.TgZ(14,"div",9)(15,"div",10)(16,"div",11),e.NdJ("click",function(){return t.handleApplyJobConfirmModal()}),e._uU(17," Apply "),e.qZA(),e.TgZ(18,"a",12),e.O4$(),e.TgZ(19,"svg",13),e._UZ(20,"path",14),e.qZA()(),e.kcU(),e.TgZ(21,"div",15)(22,"button",16),e._UZ(23,"img",17),e.qZA(),e.TgZ(24,"div",18)(25,"div",19)(26,"div",20),e._uU(27,"Share on LinkedIn"),e.qZA(),e.TgZ(28,"div",21)(29,"a",22)(30,"span",23),e._uU(31,"edit"),e.qZA(),e._uU(32,"Repost to feed"),e.qZA(),e.TgZ(33,"a",22)(34,"span",23),e._uU(35,"send"),e.qZA(),e._uU(36,"Send in message"),e.qZA(),e.TgZ(37,"a",24),e.NdJ("click",function(){return t.copyURL()}),e.TgZ(38,"span",25),e._uU(39,"content_copy"),e.qZA(),e._uU(40,"Copy URL"),e.qZA()()()()()()()(),e.TgZ(41,"div",26)(42,"div",27),e.YNc(43,U,3,1,"ng-container",28),e.qZA()(),e.TgZ(44,"div",29)(45,"span",23),e._uU(46,"trip"),e.qZA(),e.TgZ(47,"div",30),e.YNc(48,D,2,1,"div",31),e.qZA()(),e.TgZ(49,"div",32)(50,"span",23),e._uU(51,"airplane_ticket"),e.qZA(),e.TgZ(52,"div",30),e.YNc(53,J,2,1,"div",31),e.qZA()(),e.TgZ(54,"div",33)(55,"span",23),e._uU(56,"location_on"),e.qZA(),e.TgZ(57,"div",30),e.YNc(58,T,2,1,"div",31),e.qZA()(),e.TgZ(59,"div",34),e.NdJ("click",function(){return t.handleApplyJobConfirmModal()}),e._uU(60," Apply "),e.qZA(),e.TgZ(61,"div",35)(62,"p",36),e._uU(63,"Chat with a recruiter"),e.qZA(),e.TgZ(64,"div",37)(65,"div",5)(66,"div",38),e._UZ(67,"img",39),e.qZA(),e.TgZ(68,"div",40)(69,"p",41),e._uU(70),e._UZ(71,"span"),e.qZA(),e.TgZ(72,"p",42),e._uU(73,"IT recruiter"),e.qZA()()(),e.TgZ(74,"div",43)(75,"div",44),e.O4$(),e.TgZ(76,"svg",45),e._UZ(77,"path",46),e.qZA(),e.kcU(),e.TgZ(78,"span",47),e._uU(79,"Chat"),e.qZA()()()()(),e.TgZ(80,"div",48)(81,"p",36),e._uU(82,"About the job"),e.qZA(),e._UZ(83,"div",49),e.ALo(84,"keepHtml"),e.qZA()()),2&i&&(e.xp6(6),e.Oqu(t.selectedJob.jobOpeningName),e.xp6(3),e.hij(" ",t.selectedJob.companyName," "),e.xp6(2),e.AsE(" ",t.selectedJob.locations[0],", ",t.selectedJob.locations[1]," "),e.xp6(2),e.hij(" Posted ",t.getPostedDays(t.selectedJob.postedDate)," ago "),e.xp6(5),e.Q6J("queryParams",e.VKq(21,A,t.generateJobId(t.selectedJob.jobOpeningId))),e.xp6(25),e.Q6J("ngForOf",null==t.selectedJob?null:t.selectedJob.jobTypes),e.xp6(5),e.Q6J("ngForOf",null==t.selectedJob?null:t.selectedJob.employmentTypes),e.xp6(5),e.Q6J("ngForOf",null==t.selectedJob?null:t.selectedJob.visas),e.xp6(5),e.Q6J("ngForOf",null==t.selectedJob?null:t.selectedJob.skills),e.xp6(9),e.s9C("src",t.getProfilePic(t.selectedJob.profilePic),e.LSH),e.xp6(3),e.AsE(" ",t.selectedJob.userFName," ",t.selectedJob.userLName," "),e.xp6(1),e.Gre("ms-1 status-indicator ",t.isUserOnline?"active":"",""),e.xp6(4),e.Q6J("ngClass",t.isChatDisabled()?"disabled":"")("chatUser",t.chatUser),e.xp6(8),e.Q6J("innerHTML",e.lcZ(84,19,t.selectedJob.jobDescription),e.oJD))},dependencies:[u.mk,u.sg,f.rH,y.N,Z.MM],styles:['.shadow{box-shadow:0 1px 3px #0000001a,0 1px 2px #0000000f!important}.rounded{border-radius:6px!important}.rounded-md{border-radius:8px!important}.rounded-lg{border-radius:10px!important}.rounded-xl{border-radius:15px!important}.op-50{opacity:.5}.text-nano{font-size:10px}.text-xs{font-size:12px}.text-smr{font-size:13px}.text-sm{font-size:14px}.text-base{font-size:18px}.text-normal{font-size:16px}.text-regular,.job-details-wrapper .job-head .apply-box .inner .share.dropdown .dropdown-menu .dropdown-content .title,.job-details-wrapper .job-head .apply-box .inner .share.dropdown .dropdown-menu .dropdown-content .dropdown-item{font-size:15px}h6,.text-h6{font-size:20px}h5,.text-h5{font-size:22px}h4,.text-h4{font-size:24px}h3,.text-h3{font-size:30px}h2,.text-h2{font-size:34px}h1,.text-h1{font-size:36px}.text-huge{font-size:50px}.text-big{font-size:38px}.ft-head{font-family:Metropolis,sans-serif;letter-spacing:.5px}.ft-default{font-family:Albert Sans,sans-serif;font-weight:400;letter-spacing:.2px}.ft-sp{font-family:Catamaran,sans-serif}.fw-light{font-weight:300}.fw-normal{font-weight:400}.fw-medium{font-weight:500}.fw-semibold{font-weight:600}.fw-bold{font-weight:700}.ls--2{letter-spacing:.2px}.ls--25{letter-spacing:.25px}.ls--4{letter-spacing:.4px}.ls--15{letter-spacing:1.5px}.lh-14{line-height:14px}.lh-18{line-height:18px}.job-details-wrapper{padding:28px 32px}@media (min-width: 768px) and (max-width: 991px){.job-details-wrapper{padding:20px}}.job-details-wrapper .job-head{display:flex}.job-details-wrapper .job-head .left .info{display:flex;align-items:center}@media (min-width: 768px) and (max-width: 991px){.job-details-wrapper .job-head .left .info{display:block}}.job-details-wrapper .job-head .left .info .sub-title:not(:last-child){padding-right:8px}.job-details-wrapper .job-head .left .info .sub-title:not(:last-child):after{position:relative;content:"-";right:-2px}@media (min-width: 768px) and (max-width: 991px){.job-details-wrapper .job-head .left .info .sub-title:not(:last-child):after{content:""}}@media (min-width: 0) and (max-width: 575px){.job-details-wrapper .job-head .left .info{display:block}.job-details-wrapper .job-head .left .info .sub-title{margin:0 0 6px}.job-details-wrapper .job-head .left .info .sub-title:not(:last-child){padding-right:0}.job-details-wrapper .job-head .left .info .sub-title:not(:last-child):after{content:none}}.job-details-wrapper .job-head .apply-box{margin-left:auto}@media (max-width: 991px){.job-details-wrapper .job-head .apply-box{display:none}}.job-details-wrapper .job-head .apply-box .inner{display:flex}.job-details-wrapper .job-head .apply-box .inner .ext-link-btn{margin:4px 0 0 14px;cursor:pointer}.job-details-wrapper .job-head .apply-box .inner .ext-link-btn svg{width:22px;height:22px}.job-details-wrapper .job-head .apply-box .inner .share{margin:4px 0 0 14px;cursor:pointer}.job-details-wrapper .job-head .apply-box .inner .share.dropdown button{background:none;border:0;margin:0;padding:0}@media (max-width: 991px){.job-details-wrapper .job-head .apply-box .inner .share.dropdown img{max-width:initial}}.job-details-wrapper .job-head .apply-box .inner .share.dropdown .dropdown-menu{width:200px;top:14px!important;border:0;padding:0;box-shadow:0 0 4px #2121214d;-moz-box-shadow:0 0 4px 0 rgba(33,33,33,.3);-webkit-box-shadow:0 0 4px 0 rgba(33,33,33,.3)}.job-details-wrapper .job-head .apply-box .inner .share.dropdown .dropdown-menu .dropdown-content{margin:0 0 6px}.job-details-wrapper .job-head .apply-box .inner .share.dropdown .dropdown-menu .dropdown-content .title{margin:14px 18px 10px;cursor:auto}.job-details-wrapper .job-head .apply-box .inner .share.dropdown .dropdown-menu .dropdown-content .dropdown-item{display:flex;padding:6px 16px;color:#6b7280}.job-details-wrapper .job-head .apply-box .inner .share.dropdown .dropdown-menu .dropdown-content .dropdown-item:hover{background-color:#f3f4f6}.job-details-wrapper .others{display:flex;margin:20px 0 0;align-items:center}.job-details-wrapper .others .visa-box .item{display:inline-block;padding:4px 10px;margin:0 8px 10px 0}.job-details-wrapper .list-wrapper{display:flex;align-items:center}.job-details-wrapper .list-wrapper .lists{display:flex}.job-details-wrapper .list-wrapper .lists .item{position:relative}.job-details-wrapper .list-wrapper .lists .item:not(:last-child){margin-right:14px}.job-details-wrapper .list-wrapper .lists .item:not(:last-child):after{position:absolute;content:"-";right:-9px}.job-details-wrapper .recruiter-box{margin:30px 0 0;padding:20px 16px;border:1px solid #d1d5db;border-radius:6px!important}.job-details-wrapper .recruiter-box .info-wrapper{display:flex}@media (min-width: 768px) and (max-width: 991px){.job-details-wrapper .recruiter-box .info-wrapper{flex-direction:column;display:block}}.job-details-wrapper .recruiter-box .info-wrapper .info{display:flex;align-items:flex-start}.job-details-wrapper .recruiter-box .info-wrapper .info .holder{width:60px;height:60px;border:2px solid #18c36c;margin:0 16px 0 0;overflow:hidden;flex-shrink:0}.job-details-wrapper .recruiter-box .info-wrapper .info .holder img{width:100%;height:100%;object-fit:contain}.job-details-wrapper .recruiter-box .info-wrapper .info .status-indicator{width:12px;height:12px;display:flex;justify-content:center;align-items:center;border-radius:12px!important;background-color:#fff;box-shadow:inset 0 0 0 1px #32323266;display:inline-flex;position:relative;top:1px}.job-details-wrapper .recruiter-box .info-wrapper .info .status-indicator.active{background-color:#18c36c;box-shadow:none}.job-details-wrapper .recruiter-box .info-wrapper .right{margin-left:auto;margin-right:20px}.job-details-wrapper .recruiter-box .info-wrapper .right .icon{margin:0 6px 0 0}@media (min-width: 768px) and (max-width: 991px){.job-details-wrapper .recruiter-box .info-wrapper .right{margin:0}.job-details-wrapper .recruiter-box .info-wrapper .right .chat-btn{margin:20px 0 0;justify-content:center}}@media (max-width: 767px){.job-details-wrapper .recruiter-box .info-wrapper .right{margin-right:0}}.job-details-wrapper .job-details-container{margin:30px 0 20px}\n'],encapsulation:2}),l})()}}]);