"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[685],{3760:(I,b,d)=>{d.d(b,{Hk:()=>_,MM:()=>w});var u=d(5879),P=d(6593);let _=(()=>{var c;class g{transform(r,m,x){return null!=m&&0!=m.length&&" "!=m&&(m=m.toString().toLowerCase(),console.log(m),x&&""!=x&&null!=r)?r.filter(function(C){return(C=C[x]).toLowerCase().indexOf(m)>-1}):r}}return(c=g).\u0275fac=function(r){return new(r||c)},c.\u0275pipe=u.Yjl({name:"simpleSearch",type:c,pure:!0}),g})(),w=(()=>{var c;class g{constructor(r){this.sanitizer=r}transform(r){return this.sanitizer.bypassSecurityTrustHtml(r)}}return(c=g).\u0275fac=function(r){return new(r||c)(u.Y36(P.H7,16))},c.\u0275pipe=u.Yjl({name:"keepHtml",type:c,pure:!1}),g})()},3685:(I,b,d)=>{d.r(b),d.d(b,{MyhotlistModule:()=>R});var u=d(6814),P=d(4574),_=d(1331),t=d(5879),f=d(7700),v=d(1670),Z=d(2296),w=d(3760);function c(n,s){if(1&n){const i=t.EpF();t.TgZ(0,"button",13)(1,"i",14),t.NdJ("click",function(){t.CHM(i);const a=t.oxw();return t.KtG(a.dialogClose())}),t.qZA()()}}let g=(()=>{var n;class s{constructor(e,a,o,l){this.modalCandidateDetails=e,this.dialog=a,this.candidateDialogRef=o,this.route=l,this.isMobile=!1}isModal(){return null!=this.modalCandidateDetails}dialogClose(){v.xb(this.candidateDialogRef)||this.candidateDialogRef.close()}getVisaDetails(e){return null!=e?e.split(","):[]}ngOnInit(){null!=this.modalCandidateDetails&&(this.selectedCandidateDetails=this.modalCandidateDetails),this.isMobile=window.innerWidth<=991}}return(n=s).\u0275fac=function(e){return new(e||n)(t.Y36(f.WI,8),t.Y36(f.uw),t.Y36(f.so),t.Y36(_.gz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-candidate-detail-sheet"]],inputs:{selectedCandidateDetails:"selectedCandidateDetails"},decls:23,vars:7,consts:[[1,"candidate-details-wrapper"],["class","close-icon","mat-button","","mat-dialog-close","",4,"ngIf"],[1,"candidate-head"],[1,"float-left"],["aria-hidden","true",1,"fa","fa-map-marker","icon","mr-2"],[1,"float-right","text-right"],[1,"list-inline","social"],[1,"list-inline-item"],["href","javascript:void(0)"],["aria-hidden","true",1,"fa","fa-share-alt","mr-2"],[1,"d-none","d-md-inline-block"],["aria-hidden","true",1,"fa","fa-envelope-o","mr-2"],[1,"candidate-details-container",3,"innerHTML"],["mat-button","","mat-dialog-close","",1,"close-icon"],["aria-hidden","true",1,"fa","fa-times",3,"click"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0),t.YNc(1,c,2,0,"button",1),t.TgZ(2,"div",2)(3,"div",3)(4,"h4"),t._uU(5),t.qZA(),t.TgZ(6,"h5"),t._UZ(7,"i",4),t._uU(8),t.qZA()(),t.TgZ(9,"div",5)(10,"ul",6)(11,"li",7)(12,"a",8),t._UZ(13,"i",9),t.TgZ(14,"span",10),t._uU(15,"Share"),t.qZA()()(),t.TgZ(16,"li",7)(17,"a",8),t._UZ(18,"i",11),t.TgZ(19,"span",10),t._uU(20,"Email"),t.qZA()()()()()(),t._UZ(21,"div",12),t.ALo(22,"keepHtml"),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngIf",a.isModal()),t.xp6(4),t.Oqu(a.selectedCandidateDetails.candidateName),t.xp6(3),t.AsE(" ",a.selectedCandidateDetails.city,", ",a.selectedCandidateDetails.state,""),t.xp6(13),t.Q6J("innerHTML",t.lcZ(22,5,a.selectedCandidateDetails.resume),t.oJD))},dependencies:[u.O5,Z.lW,f.ZT,w.MM],styles:[".text-xs{font-size:12px}.text-smr{font-size:13px}.text-sm{font-size:14px}.text-base{font-size:18px}.text-normal{font-size:16px}.text-regular{font-size:15px}h6,.text-h6{font-size:20px}h5,.text-h5{font-size:22px}h4,.text-h4{font-size:24px}h3,.text-h3{font-size:30px}h2,.text-h2{font-size:34px}h1,.text-h1{font-size:36px}.text-huge{font-size:50px}.text-big{font-size:38px}.ft-head,.candidate-details-wrapper .candidate-head h4{font-family:Metropolis,sans-serif;letter-spacing:.5px}.ft-default,.candidate-details-wrapper table td p,.candidate-details-wrapper .candidate-details-container{font-family:Open Sans,sans-serif;font-weight:400;letter-spacing:.4px}.ft-sp,.candidate-details-wrapper .candidate-head p,.candidate-details-wrapper .candidate-head h5{font-family:Catamaran,sans-serif}.fw-light{font-weight:300}.fw-normal{font-weight:400}.fw-medium{font-weight:500}.fw-semibold{font-weight:600}.fw-bold{font-weight:700}.ls--2{letter-spacing:.2px}.ls--25{letter-spacing:.25px}.ls--4{letter-spacing:.4px}.ls--15{letter-spacing:1.5px}.lh-14{line-height:14px}.lh-18{line-height:18px}.candidate-details-wrapper .candidate-head{padding:18px 20px 14px;border-bottom:1px solid #f9fafb;background-color:#d1d5db;overflow:hidden;clear:both}@media (max-width: 991px){.candidate-details-wrapper .candidate-head{background-color:transparent}}.candidate-details-wrapper .candidate-head h4{font-size:20px;color:#111827;padding:0 0 8px}@media (min-width: 0) and (max-width: 575px){.candidate-details-wrapper .candidate-head h4{font-size:18px}}.candidate-details-wrapper .candidate-head h5{font-size:16px}.candidate-details-wrapper .candidate-head h5 .icon{font-size:18px;color:#1f2937}.candidate-details-wrapper .candidate-head p{padding:6px 0 0;color:#4b5563;margin:0;font-size:14px}.candidate-details-wrapper .candidate-head .apply-btn{font-size:16px;text-shadow:0 1px 0 rgba(0,0,0,.2);-moz-text-shadow:0 1px 0 rgba(0,0,0,.2);-webkit-text-shadow:0 1px 0 rgba(0,0,0,.2)}@media (max-width: 991px){.candidate-details-wrapper .candidate-head .apply-btn{padding:4px 14px!important}}.candidate-details-wrapper .candidate-head .social{margin:12px 0 0!important;display:flex;justify-content:flex-end}.candidate-details-wrapper .candidate-head .social li{background-color:transparent;border:none;padding:0}.candidate-details-wrapper .candidate-head .social li:not(:last-child){margin:0 15px 0 0}@media (max-width: 991px){.candidate-details-wrapper .candidate-head .social li:not(:last-child){margin:0 8px 0 0}}.candidate-details-wrapper .candidate-head .social li a{color:#1f2937;font-size:14px}@media (max-width: 991px){.candidate-details-wrapper .candidate-head .social li a{font-size:13px}}.candidate-details-wrapper .candidate-head .social li a:hover{color:#1f2937}.candidate-details-wrapper .candidate-head .social li a i{font-size:16px}.candidate-details-wrapper .visa-box{padding:14px 20px 6px!important;border-bottom:1px solid #f9fafb}.candidate-details-wrapper .visa-box li{background-color:#4b5563;padding:6px 14px;border-radius:2px!important;font-size:12px;margin-bottom:8px}.candidate-details-wrapper .visa-box li:not(:last-child){margin-right:8px}.candidate-details-wrapper .candidate-details-container{overflow:auto;padding:20px;font-size:16px}@media (max-width: 991px){.candidate-details-wrapper .candidate-details-container{height:300px}}.candidate-details-wrapper .candidate-details-container>p{display:none}.candidate-details-wrapper table{width:100%}.candidate-details-wrapper table td p{font-size:14px}\n"],encapsulation:2}),s})(),p=(()=>{var n;class s{constructor(e){this.statusId=e}ngOnInit(){}}return(n=s).\u0275fac=function(e){return new(e||n)(t.Y36(f.WI,8))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-hotlist-switch-confirmation-modal"]],decls:9,vars:3,consts:[[1,"modal-wrapper","p-5"],[1,"content","text-center"],[1,"ft-head"],[1,"mt-4"],["mat-button","",1,"btn","btn-primary","text-normal","me-4",3,"mat-dialog-close"],["mat-button","",1,"btn","btn-secondary","text-normal",3,"mat-dialog-close"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h6",2),t._uU(3),t.qZA(),t.TgZ(4,"div",3)(5,"div",4),t._uU(6,"Yes"),t.qZA(),t.TgZ(7,"div",5),t._uU(8,"No"),t.qZA()()()()),2&e&&(t.xp6(3),t.hij("Do you want to ",2==a.statusId?"start":"stop"," marketing this resume? Please confirm"),t.xp6(2),t.Q6J("mat-dialog-close",!0),t.xp6(2),t.Q6J("mat-dialog-close",!1))},dependencies:[f.ZT]}),s})(),r=(()=>{var n;class s{constructor(){}ngOnInit(){}}return(n=s).\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-hotlist-delete-confirmation-modal"]],decls:9,vars:2,consts:[[1,"modal-wrapper","p-5"],[1,"content","text-center"],[1,"ft-head"],[1,"mt-4"],["mat-button","",1,"btn","btn-primary","text-normal","me-4",3,"mat-dialog-close"],["mat-button","",1,"btn","btn-secondary","text-normal",3,"mat-dialog-close"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h6",2),t._uU(3,"Do you want to delete the candidate? Please confirm"),t.qZA(),t.TgZ(4,"div",3)(5,"div",4),t._uU(6,"Yes"),t.qZA(),t.TgZ(7,"div",5),t._uU(8,"No"),t.qZA()()()()),2&e&&(t.xp6(5),t.Q6J("mat-dialog-close",!0),t.xp6(2),t.Q6J("mat-dialog-close",!1))},dependencies:[f.ZT]}),s})();var m=d(9945),x=d(930),C=d(3782),O=d(9229),M=d(6223),T=d(1735);function A(n,s){1&n&&(t.ynx(0),t.TgZ(1,"div",5),t._UZ(2,"div",6),t.qZA(),t.BQk())}function D(n,s){if(1&n&&(t.TgZ(0,"div"),t._uU(1),t.qZA()),2&n){const i=t.oxw(2);t.xp6(1),t.hij("You have ",i.totalItems," candidates in your Hotlist")}}function S(n,s){1&n&&(t.TgZ(0,"div"),t._uU(1,"No candidates Available"),t.qZA())}function L(n,s){if(1&n){const i=t.EpF();t.TgZ(0,"div",2)(1,"div",15)(2,"div",16)(3,"form")(4,"div",17)(5,"div",18)(6,"div",19)(7,"input",20),t.NdJ("ngModelChange",function(a){t.CHM(i);const o=t.oxw(2);return t.KtG(o.searchData=a)})("input",function(){t.CHM(i);const a=t.oxw(2);return t.KtG(a.onSearchData())}),t.qZA(),t.TgZ(8,"span",21),t._UZ(9,"i",22),t.qZA()()()()()()()()}if(2&n){const i=t.oxw(2);t.xp6(7),t.Q6J("ngModel",i.searchData)}}function z(n,s){if(1&n&&(t.TgZ(0,"span",61),t._uU(1),t.qZA()),2&n){const i=s.$implicit;t.xp6(1),t.Oqu(i.name)}}function J(n,s){if(1&n&&(t.TgZ(0,"div",59),t.YNc(1,z,2,1,"span",60),t.qZA()),2&n){const i=t.oxw().$implicit;t.xp6(1),t.Q6J("ngForOf",i.candidateProfileSkills)}}function k(n,s){1&n&&(t.TgZ(0,"div",59)(1,"span",62),t._uU(2,"No Skills Avaialble"),t.qZA()())}function H(n,s){if(1&n){const i=t.EpF();t.ynx(0),t.TgZ(1,"li",25)(2,"div",26)(3,"div",2)(4,"div",27)(5,"div",28)(6,"div",29)(7,"h6",30),t._uU(8),t.qZA(),t.TgZ(9,"p",31),t._uU(10),t.qZA()(),t.TgZ(11,"div",32)(12,"div",33),t._UZ(13,"i",34),t.TgZ(14,"p",35),t._uU(15),t.qZA()(),t.TgZ(16,"div",33),t._UZ(17,"i",36),t.TgZ(18,"p",35),t._uU(19),t.qZA()(),t.TgZ(20,"div",33),t._UZ(21,"i",37),t.TgZ(22,"p",35),t._uU(23),t.qZA()(),t.TgZ(24,"div",33),t._UZ(25,"i",38),t.TgZ(26,"p",35),t._uU(27),t.qZA()(),t._UZ(28,"div"),t.qZA(),t.TgZ(29,"div",39)(30,"p",40),t._uU(31,"Availability"),t.qZA(),t.TgZ(32,"p",41),t._uU(33),t.qZA()(),t.TgZ(34,"div",42)(35,"p",40),t._uU(36,"Relocation"),t.qZA(),t.TgZ(37,"p",41),t._uU(38),t.qZA()()()(),t.TgZ(39,"div",43)(40,"label",44)(41,"input",45),t.NdJ("ngModelChange",function(a){const l=t.CHM(i).$implicit;return t.KtG(l.status=a)})("click",function(a){const l=t.CHM(i).$implicit,h=t.oxw(3);return t.KtG(h.onStatusChange(a,l))}),t.qZA(),t._UZ(42,"span",46),t.qZA(),t.TgZ(43,"div",47)(44,"div",48),t.NdJ("click",function(){const o=t.CHM(i).$implicit,l=t.oxw(3);return t.KtG(l.editCandidate(o.id))}),t._UZ(45,"i",49),t.qZA(),t.TgZ(46,"div",50),t.NdJ("click",function(){const o=t.CHM(i).$implicit,l=t.oxw(3);return t.KtG(l.deleteCandidate(o))}),t._UZ(47,"i",51),t.qZA()()()(),t.TgZ(48,"div",2)(49,"div",52),t.YNc(50,J,2,1,"div",53),t.YNc(51,k,3,0,"div",53),t.qZA(),t.TgZ(52,"div",54)(53,"div",55)(54,"div",48),t.NdJ("click",function(){const o=t.CHM(i).$implicit,l=t.oxw(3);return t.KtG(l.editCandidate(o.id))}),t._UZ(55,"i",56),t.TgZ(56,"h6",57),t._uU(57,"Edit"),t.qZA()(),t.TgZ(58,"div",50),t.NdJ("click",function(){const o=t.CHM(i).$implicit,l=t.oxw(3);return t.KtG(l.deleteCandidate(o))}),t._UZ(59,"i",58),t.TgZ(60,"h6",57),t._uU(61,"Delete"),t.qZA()()()()()()(),t.BQk()}if(2&n){const i=s.$implicit,e=t.oxw(3);t.xp6(8),t.Oqu(i.candidateName),t.xp6(2),t.Oqu(i.title),t.xp6(5),t.hij("",i.totalExp," years"),t.xp6(4),t.Oqu(e.getVisa(i.visaId)),t.xp6(4),t.AsE("",null==i.city?null:i.city.city1,", ",null==i.city?null:i.city.stateCode," "),t.xp6(4),t.AsE("",i.fromAmt," - ",i.toAmt,""),t.xp6(6),t.Oqu(e.getAvailability(i.availability)),t.xp6(5),t.Oqu(e.getRelocation(i)),t.xp6(3),t.s9C("value",i.statusId),t.Q6J("ngModel",i.status),t.xp6(9),t.Q6J("ngIf",e.isSkills(i.candidateProfileSkills)),t.xp6(1),t.Q6J("ngIf",!e.isSkills(i.candidateProfileSkills))}}function U(n,s){if(1&n&&(t.TgZ(0,"div",23),t.YNc(1,H,62,14,"ng-container",24),t.ALo(2,"slice"),t.qZA()),2&n){const i=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",t.Dn7(2,1,i.filteredHotListData,i.ItemStartIndex,i.ItemEndIndex))}}function E(n,s){if(1&n){const i=t.EpF();t.TgZ(0,"app-pagination-box",63),t.NdJ("outputParams",function(a){t.CHM(i);const o=t.oxw(2);return t.KtG(o.getIndexParams(a))}),t.qZA()}if(2&n){const i=t.oxw(2);t.Q6J("totalItems",i.totalItems)("ItemStartIndex",i.ItemStartIndex)("ItemEndIndex",i.ItemEndIndex)("itemLimit",i.itemLimit)}}const F=function(){return{exact:!0}};function q(n,s){if(1&n&&(t.ynx(0),t.TgZ(1,"div",7)(2,"h4",8),t.YNc(3,D,2,1,"div",4),t.YNc(4,S,2,0,"div",4),t.qZA(),t.TgZ(5,"div",9)(6,"a",10),t._UZ(7,"i",11),t._uU(8,"Add Candidate"),t.qZA()()(),t.YNc(9,L,10,1,"div",12),t.YNc(10,U,3,5,"div",13),t.YNc(11,E,1,4,"app-pagination-box",14),t.BQk()),2&n){const i=t.oxw();t.xp6(3),t.Q6J("ngIf",i.isJobAvailable),t.xp6(1),t.Q6J("ngIf",!i.isJobAvailable),t.xp6(2),t.Q6J("routerLinkActiveOptions",t.DdM(6,F)),t.xp6(3),t.Q6J("ngIf",i.isJobAvailable),t.xp6(1),t.Q6J("ngIf",i.isJobAvailable),t.xp6(1),t.Q6J("ngIf",i.isJobLoaded&&i.isJobAvailable)}}function N(n,s){if(1&n&&(t.ynx(0),t.TgZ(1,"div",64),t._uU(2),t.qZA(),t.BQk()),2&n){const i=t.oxw();t.xp6(2),t.hij(" ",i.error," ")}}const Y=[{path:"",component:(()=>{var n;class s{constructor(e,a,o,l,h,y){this.router=e,this.dialog=a,this.commonService=o,this.sessionService=l,this.candidateProfileService=h,this.toastr=y,this.isJobLoaded=!1,this.isJobAvailable=!1,this.isError=!1,this.error="",this.ItemStartIndex=0,this.ItemEndIndex=9,this.itemLimit=10,this.initialHotListData=[],this.filteredHotListData=[],this.isMobile=!1,this.selectedCandidateId=-1,this.selectAvailabilityList=[],this.searchData="",this.candidateDetailsChanged=new t.vpe}getIndexParams(e){this.ItemStartIndex=e.ItemStartIndex,this.ItemEndIndex=e.ItemEndIndex}getSkills(e){null!=this.skillSetData&&this.skillSetData.find(a=>{if(a.id==e&&null!=a)return 1})}getParams(e){this.isActiveCandidate=e.active,this.totalExp=e.experience}onSearchData(){this.filteredHotListData=this.initialHotListData.filter(e=>this.isMatch(e,this.searchData)),this.totalItems=this.filteredHotListData.length>0?this.filteredHotListData.length:0,this.ItemEndIndex=this.totalItems>this.itemLimit?this.itemLimit:this.totalItems}isMatch(e,a){return a=a.toLowerCase(),e.candidateName.toLowerCase().includes(a)||e.title.toLowerCase().includes(a)||e.candidateProfileSkills.some(o=>o.name.toLowerCase().includes(a))}showCandidateDetaislModal(){this.dialog.open(g,{panelClass:"material",disableClose:!0,data:this.selectedCandidateDetails})}onResize(e){this.isMobile=e.target.innerWidth<=991}isSelected(e){return this.selectedCandidateId==e?"selected":""}showCandidateDescription(e){this.selectedCandidateId=e.id,this.selectedCandidateDetails=e,this.candidateDetailsChanged.emit(this.selectedCandidateDetails)}getAvailability(e){return e?`${this.selectAvailabilityList.filter(o=>o.id==e)[0].name}`:"Not Available"}getVisa(e){var a;return v.G(this.visaList,o=>{o.id==e&&(a=o.name)}),a}getRelocation(e){let a=e.candidatePrefLocations,o=[];return v.xb(a)?e.anyLocation?"Open to relocate to any location":e.remoteOnly?"Looking only remote project":"NA":(a.forEach(l=>{let h=l.cityName.split("-");o.push(h[0])}),o.join(", "))}isSkills(e){return!v.xb(e)}getStatus(e){return 2==e}onStatusChange(e,a){e.preventDefault();const l=2==JSON.parse(e.target.value)?3:2;this.switchConfirmation(l,a)}switchConfirmation(e,a){this.dialog.open(p,{panelClass:"material",disableClose:!0,data:e}).afterClosed().subscribe(l=>{l&&this.candidateProfileService.apiCandidateProfileActivateOrDeActivatePut(a.id,!0,e).subscribe({next:h=>{h.value&&(this.filteredHotListData.map(y=>(y.id==a.id&&(a.statusId=e,a.status=2==a.statusId),a)),setTimeout(()=>{this.toastr.success(`Marketing ${2==e?"activated":"deactivated"} successfully`,"",{timeOut:5e3,positionClass:"toast-top-center"})},200))},error:h=>{this.toastr.error("Some error occured","",{timeOut:5e3,positionClass:"toast-top-center"})}})})}editCandidate(e){this.router.navigate(["/editcandidate",e])}deleteCandidate(e){this.dialog.open(r,{panelClass:"material",disableClose:!0}).afterClosed().subscribe(o=>{o&&this.candidateProfileService.apiCandidateProfileActivateOrDeActivatePut(e.id,!1,e.statusId).subscribe({next:l=>{l.value&&(this.filteredHotListData=this.filteredHotListData.filter(h=>h.id!=e.id),this.toastr.success("Candidate deleted successfully","",{timeOut:5e3,positionClass:"toast-top-center"}))},error:l=>{this.toastr.error("Some error occured","",{timeOut:5e3,positionClass:"toast-top-center"})}})})}ngOnInit(){this.isMobile=window.innerWidth<=991,this.candidateProfileService.apiCandidateProfileGetByConsultancyUserGet(this.sessionService.consultancyId).subscribe({next:e=>{this.initialHotListData=e.value.filter(a=>a.active),this.initialHotListData.map(a=>{a.status=2==a.statusId}),this.filteredHotListData=this.initialHotListData,this.filteredHotListData.length>0?(this.isJobAvailable=!0,this.isJobLoaded=!0,this.totalItems=this.filteredHotListData.length):(this.isJobAvailable=!1,this.isJobLoaded=!0,this.totalItems=0),this.ItemEndIndex=this.totalItems>this.itemLimit?this.itemLimit:this.totalItems},error:e=>{this.isJobLoaded=!0,this.isJobLoaded=!0,this.isError=!0,this.error="Some error occurred"}}),this.candidateDetailsChanged.subscribe(e=>{this.isMobile&&this.showCandidateDetaislModal()}),this.commonService.apiCommonVisaGet().subscribe({next:e=>{this.visaList=e.value},error:e=>{}}),this.commonService.apiCommonCandidateAvailabilityGet().subscribe({next:e=>{this.selectAvailabilityList=e.value},error:e=>{}})}}return(n=s).\u0275fac=function(e){return new(e||n)(t.Y36(_.F0),t.Y36(f.uw),t.Y36(m.v_),t.Y36(x.m),t.Y36(C.M),t.Y36(O._W))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-myhotlist"]],hostBindings:function(e,a){1&e&&t.NdJ("resize",function(l){return a.onResize(l)},!1,t.Jf7)},features:[t._Bn([{provide:f.so,useValue:{}}])],decls:7,vars:3,consts:[[1,"my-hotlist-wrapper"],[1,"container"],[1,"row"],[1,"col-sm-12"],[4,"ngIf"],[1,"loader-wrapper"],[1,"pre-loader"],[1,"title-box"],[1,"title"],[1,"btn-wrapper","ms-auto"],["routerLink","/addcandidate","routerLinkActive","active",1,"btn","add-candidate-btn","shadow",3,"routerLinkActiveOptions"],["aria-hidden","true",1,"fa","fa-plus-circle","icon","me-2"],["class","row",4,"ngIf"],["class","hotlist-box",4,"ngIf"],[3,"totalItems","ItemStartIndex","ItemEndIndex","itemLimit","outputParams",4,"ngIf"],[1,"col-sm-12","col-md-6","col-lg-5"],[1,"search-results"],[1,"input-box","mb-0"],[1,"form-group","mb-0"],[1,"input-group"],["type","text","id","searchData","name","searchData","placeholder","Search by name, skills, job title",1,"form-control",3,"ngModel","ngModelChange","input"],[1,"input-group-text"],[1,"fa","fa-search"],[1,"hotlist-box"],[4,"ngFor","ngForOf"],[1,"list-group-item","shadow"],[1,"content"],[1,"col-9","col-md-8","top"],[1,"left"],[1,"mb-1","d-md-flex","align-items-center"],[1,"ft-head","text-cyan-600","text-uppercase","text-normal","fw-medium","me-4","name"],[1,"ft-head","text-gray-500","fw-semibold","text-capitalize","text-normal"],[1,"d-md-flex","additional","align-items-center"],[1,"item","d-flex","align-items-center"],["aria-hidden","true",1,"fa","fa-suitcase","text-gray-400","me-2"],[1,"text-sm","fw-semibold","text-gray-700"],["aria-hidden","true",1,"fa","fa-ticket","text-gray-400","me-2"],["aria-hidden","true",1,"fa","fa-map-marker","text-gray-400","me-2"],["aria-hidden","true",1,"fa","fa-usd","text-gray-400","me-2"],[1,"mb-2","d-md-flex"],[1,"me-3","text-sm","text-gray-400"],[1,"fw-semibold","text-sm","text-gray-700"],[1,"d-md-flex"],[1,"col-3","col-md-4","d-flex","flex-column","flex-md-row","justify-md-content-end"],[1,"switch","flex-shrink-0"],["type","checkbox",3,"ngModel","value","ngModelChange","click"],[1,"slider","round"],[1,"d-flex","d-md-none","options"],[1,"pointer","me-3","d-flex","text-green-500",3,"click"],["aria-hidden","true",1,"fa","fa-pencil","text-base"],[1,"pointer","d-flex","text-red-400",3,"click"],["aria-hidden","true",1,"fa","fa-times","text-base"],[1,"col-sm-12","col-md-8"],["class","skills mt-4",4,"ngIf"],[1,"col-5","col-md-4","d-none","d-md-flex","justify-content-end"],[1,"d-flex","options"],["aria-hidden","true",1,"fa","fa-pencil"],[1,"ms-1","text-sm","fw-medium"],["aria-hidden","true",1,"fa","fa-times"],[1,"skills","mt-4"],["class","item text-green-800 bg-green-50 text-smr fw-medium",4,"ngFor","ngForOf"],[1,"item","text-green-800","bg-green-50","text-smr","fw-medium"],[1,"item","text-red-800","bg-red-50","text-smr","fw-medium"],[3,"totalItems","ItemStartIndex","ItemEndIndex","itemLimit","outputParams"],[1,"mt-2","alert","alert-danger"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t.YNc(4,A,3,0,"ng-container",4),t.YNc(5,q,12,7,"ng-container",4),t.YNc(6,N,3,1,"ng-container",4),t.qZA()()()()),2&e&&(t.xp6(4),t.Q6J("ngIf",!a.isJobLoaded),t.xp6(1),t.Q6J("ngIf",a.isJobLoaded&&!a.isError),t.xp6(1),t.Q6J("ngIf",a.isError))},dependencies:[u.sg,u.O5,M._Y,M.Fj,M.Wl,M.JJ,M.JL,M.On,M.F,T.s,_.rH,_.Od,u.OU],styles:[".text-xs[_ngcontent-%COMP%]{font-size:12px}.text-smr[_ngcontent-%COMP%]{font-size:13px}.text-sm[_ngcontent-%COMP%]{font-size:14px}.text-base[_ngcontent-%COMP%]{font-size:18px}.text-normal[_ngcontent-%COMP%]{font-size:16px}.text-regular[_ngcontent-%COMP%]{font-size:15px}h6[_ngcontent-%COMP%], .text-h6[_ngcontent-%COMP%]{font-size:20px}h5[_ngcontent-%COMP%], .text-h5[_ngcontent-%COMP%]{font-size:22px}h4[_ngcontent-%COMP%], .text-h4[_ngcontent-%COMP%]{font-size:24px}h3[_ngcontent-%COMP%], .text-h3[_ngcontent-%COMP%]{font-size:30px}h2[_ngcontent-%COMP%], .text-h2[_ngcontent-%COMP%]{font-size:34px}h1[_ngcontent-%COMP%], .text-h1[_ngcontent-%COMP%]{font-size:36px}.text-huge[_ngcontent-%COMP%]{font-size:50px}.text-big[_ngcontent-%COMP%]{font-size:38px}.ft-head[_ngcontent-%COMP%]{font-family:Metropolis,sans-serif;letter-spacing:.5px}.ft-default[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400;letter-spacing:.4px}.ft-sp[_ngcontent-%COMP%]{font-family:Catamaran,sans-serif}.fw-light[_ngcontent-%COMP%]{font-weight:300}.fw-normal[_ngcontent-%COMP%]{font-weight:400}.fw-medium[_ngcontent-%COMP%]{font-weight:500}.fw-semibold[_ngcontent-%COMP%]{font-weight:600}.fw-bold[_ngcontent-%COMP%]{font-weight:700}.ls--2[_ngcontent-%COMP%]{letter-spacing:.2px}.ls--25[_ngcontent-%COMP%]{letter-spacing:.25px}.ls--4[_ngcontent-%COMP%]{letter-spacing:.4px}.ls--15[_ngcontent-%COMP%]{letter-spacing:1.5px}.lh-14[_ngcontent-%COMP%]{line-height:14px}.lh-18[_ngcontent-%COMP%]{line-height:18px}.my-hotlist-wrapper[_ngcontent-%COMP%]   .title-box[_ngcontent-%COMP%]{display:flex;align-items:center}.my-hotlist-wrapper[_ngcontent-%COMP%]   .title-box[_ngcontent-%COMP%]   .add-candidate-btn[_ngcontent-%COMP%]{background-color:#fff;color:#18c36c;padding:8px 20px!important;font-size:16px}.my-hotlist-wrapper[_ngcontent-%COMP%]   .title-box[_ngcontent-%COMP%]   .add-candidate-btn[_ngcontent-%COMP%]:hover{box-shadow:0 3px 5px #0000004d;-moz-box-shadow:0 3px 5px rgba(0,0,0,.3);-webkit-box-shadow:0 3px 5px rgba(0,0,0,.3);transition:all .15s ease}.my-hotlist-wrapper[_ngcontent-%COMP%]   .title-box[_ngcontent-%COMP%]   .add-candidate-btn[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{position:relative;top:3px;font-size:24px;color:#18c36c}@media (min-width: 0) and (max-width: 575px){.my-hotlist-wrapper[_ngcontent-%COMP%]   .title-box[_ngcontent-%COMP%]   .add-candidate-btn[_ngcontent-%COMP%]{float:none!important;margin:20px 0 0}}@media (max-width: 767px){.my-hotlist-wrapper[_ngcontent-%COMP%]   .title-box[_ngcontent-%COMP%]{display:block}.my-hotlist-wrapper[_ngcontent-%COMP%]   .title-box[_ngcontent-%COMP%]   .btn-wrapper[_ngcontent-%COMP%]{text-align:center}.my-hotlist-wrapper[_ngcontent-%COMP%]   .title-box[_ngcontent-%COMP%]   .btn-wrapper[_ngcontent-%COMP%]   .add-candidate-btn[_ngcontent-%COMP%]{margin:20px 0 0}}.my-hotlist-wrapper[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]{margin:20px 0 0}.my-hotlist-wrapper[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%]{cursor:auto;background-color:#e5e7eb}.my-hotlist-wrapper[_ngcontent-%COMP%]   .hotlist-box[_ngcontent-%COMP%]{margin:20px 0 0}.my-hotlist-wrapper[_ngcontent-%COMP%]   .hotlist-box[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]{padding:24px;border:none;border-radius:4px!important;background-color:#fff}.my-hotlist-wrapper[_ngcontent-%COMP%]   .hotlist-box[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]:not(:last-child){margin:0 0 20px}@media (min-width: 0) and (max-width: 575px){.my-hotlist-wrapper[_ngcontent-%COMP%]   .hotlist-box[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{margin:0 0 4px}}.my-hotlist-wrapper[_ngcontent-%COMP%]   .hotlist-box[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .switch[_ngcontent-%COMP%]{margin-left:auto}.my-hotlist-wrapper[_ngcontent-%COMP%]   .hotlist-box[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .skills[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{padding:4px 10px;display:inline-block}.my-hotlist-wrapper[_ngcontent-%COMP%]   .hotlist-box[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .skills[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:not(:last-child){margin:0 8px 10px 0}.my-hotlist-wrapper[_ngcontent-%COMP%]   .hotlist-box[_ngcontent-%COMP%]   .additional[_ngcontent-%COMP%]{margin:0 0 20px}@media (min-width: 576px) and (max-width: 767px){.my-hotlist-wrapper[_ngcontent-%COMP%]   .hotlist-box[_ngcontent-%COMP%]   .additional[_ngcontent-%COMP%]{margin:14px 0 20px}}@media (min-width: 0) and (max-width: 575px){.my-hotlist-wrapper[_ngcontent-%COMP%]   .hotlist-box[_ngcontent-%COMP%]   .additional[_ngcontent-%COMP%]{margin:20px 0}}.my-hotlist-wrapper[_ngcontent-%COMP%]   .hotlist-box[_ngcontent-%COMP%]   .additional[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:not(:last-child){margin:0 14px 0 0}@media (max-width: 767px){.my-hotlist-wrapper[_ngcontent-%COMP%]   .hotlist-box[_ngcontent-%COMP%]   .additional[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:not(:last-child){margin:0 0 10px}}.my-hotlist-wrapper[_ngcontent-%COMP%]   .hotlist-box[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]{height:-moz-fit-content;height:fit-content;margin:32px 0 0 auto}@media (max-width: 767px){.my-hotlist-wrapper[_ngcontent-%COMP%]   .hotlist-box[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]{margin:40px 0 0 auto}}"]}),s})()}];let Q=(()=>{var n;class s{}return(n=s).\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[_.Bz.forChild(Y),_.Bz]}),s})(),R=(()=>{var n;class s{}return(n=s).\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[u.ez,P.m.forRoot(),Q]}),s})()}}]);