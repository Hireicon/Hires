"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[188],{2582:(T,w,r)=>{r.d(w,{R:()=>C});var m=r(5879);let C=(()=>{var x;class p{}return(x=p).\u0275fac=function(u){return new(u||x)},x.\u0275cmp=m.Xpm({type:x,selectors:[["loader"]],decls:3,vars:0,consts:[[1,"loader-wrapper"],[1,"loader-area"],[1,"pre-loader"]],template:function(u,g){1&u&&(m.TgZ(0,"div",0)(1,"div",1),m._UZ(2,"div",2),m.qZA()())},styles:['.loader-wrapper[_ngcontent-%COMP%]{margin:50px 0}.loader-wrapper[_ngcontent-%COMP%]   .loader-area[_ngcontent-%COMP%]{position:relative;display:flex;padding:50px 0}.loader-wrapper[_ngcontent-%COMP%]   .loader-area[_ngcontent-%COMP%]   .pre-loader[_ngcontent-%COMP%]{position:absolute;inset:0;width:60px;height:60px;margin:auto}.loader-wrapper[_ngcontent-%COMP%]   .loader-area[_ngcontent-%COMP%]   .pre-loader[_ngcontent-%COMP%]:before, .loader-wrapper[_ngcontent-%COMP%]   .loader-area[_ngcontent-%COMP%]   .pre-loader[_ngcontent-%COMP%]:after{content:"";position:absolute;inset:0;border-width:5px;border-style:solid;border-color:#1259a4;border-radius:100%}.loader-wrapper[_ngcontent-%COMP%]   .loader-area[_ngcontent-%COMP%]   .pre-loader[_ngcontent-%COMP%]:before{opacity:.5}.loader-wrapper[_ngcontent-%COMP%]   .loader-area[_ngcontent-%COMP%]   .pre-loader[_ngcontent-%COMP%]:after{border-color:#1259a4 transparent transparent;animation:_ngcontent-%COMP%_spin .5s linear infinite}@keyframes _ngcontent-%COMP%_spin{to{transform:rotate(360deg)}}@keyframes _ngcontent-%COMP%_blob-bottom{25%,50%,75%{top:50%;left:100%}to{top:0;left:50%}}@keyframes _ngcontent-%COMP%_blob-left{25%{top:50%;left:0}50%,to{top:100%;left:50%}}@keyframes _ngcontent-%COMP%_blob-top{50%{top:0;left:50%}75%,to{top:50%;left:0}}@keyframes _ngcontent-%COMP%_blob-spinner-mover{0%,to{top:0;left:50%}25%{top:50%;left:100%}50%{top:100%;left:50%}75%{top:50%;left:0}}']}),p})()},3760:(T,w,r)=>{r.d(w,{Hk:()=>p,I5:()=>D,MM:()=>A,Tv:()=>M});var m=r(1670),C=r(5879),x=r(6593);let p=(()=>{var d;class f{transform(c,_,y){return null!=_&&0!=_.length&&" "!=_&&(_=_.toString().toLowerCase(),y&&""!=y&&null!=c)?c.filter(function(Z){return(Z=Z[y]).toLowerCase().indexOf(_)>-1}):c}}return(d=f).\u0275fac=function(c){return new(c||d)},d.\u0275pipe=C.Yjl({name:"simpleSearch",type:d,pure:!0}),f})(),M=(()=>{var d;class f{transform(c,_){return c.substring(0,_).toUpperCase()}}return(d=f).\u0275fac=function(c){return new(c||d)},d.\u0275pipe=C.Yjl({name:"subStr",type:d,pure:!0}),f})(),A=(()=>{var d;class f{constructor(c){this.sanitizer=c}transform(c){return this.sanitizer.bypassSecurityTrustHtml(c)}}return(d=f).\u0275fac=function(c){return new(c||d)(C.Y36(x.H7,16))},d.\u0275pipe=C.Yjl({name:"keepHtml",type:d,pure:!1}),f})(),D=(()=>{var d;class f{transform(c){if(m.xb(c))return"";{let y=c[0].city;return y.city1+", "+y.stateCode}}}return(d=f).\u0275fac=function(c){return new(c||d)},d.\u0275pipe=C.Yjl({name:"jobLocation",type:d,pure:!0}),f})()},7231:(T,w,r)=>{r.d(w,{w:()=>p});var m=r(6814),C=r(5950),x=r(5879);let p=(()=>{var t;class u{}return(t=u).\u0275fac=function(M){return new(M||t)},t.\u0275mod=x.oAB({type:t}),t.\u0275inj=x.cJS({imports:[m.ez,C.m.forRoot()]}),u})()},188:(T,w,r)=>{r.r(w),r.d(w,{MyhotlistModule:()=>et});var m=r(6814),C=r(5950),x=r(7231),p=r(1331),t=r(5879),u=r(7700),g=r(1670),M=r(2296),A=r(3760);function D(n,s){if(1&n){const i=t.EpF();t.TgZ(0,"button",13)(1,"i",14),t.NdJ("click",function(){t.CHM(i);const a=t.oxw();return t.KtG(a.dialogClose())}),t.qZA()()}}let d=(()=>{var n;class s{constructor(e,a,o,l){this.modalCandidateDetails=e,this.dialog=a,this.candidateDialogRef=o,this.route=l,this.isMobile=!1}isModal(){return null!=this.modalCandidateDetails}dialogClose(){g.xb(this.candidateDialogRef)||this.candidateDialogRef.close()}getVisaDetails(e){return null!=e?e.split(","):[]}ngOnInit(){null!=this.modalCandidateDetails&&(this.selectedCandidateDetails=this.modalCandidateDetails),this.isMobile=window.innerWidth<=991}}return(n=s).\u0275fac=function(e){return new(e||n)(t.Y36(u.WI,8),t.Y36(u.uw),t.Y36(u.so),t.Y36(p.gz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-candidate-detail-sheet"]],inputs:{selectedCandidateDetails:"selectedCandidateDetails"},decls:23,vars:7,consts:[[1,"candidate-details-wrapper"],["class","close-icon","mat-button","","mat-dialog-close","",4,"ngIf"],[1,"candidate-head"],[1,"float-left"],["aria-hidden","true",1,"fa","fa-map-marker","icon","mr-2"],[1,"float-right","text-right"],[1,"list-inline","social"],[1,"list-inline-item"],["href","javascript:void(0)"],["aria-hidden","true",1,"fa","fa-share-alt","mr-2"],[1,"d-none","d-md-inline-block"],["aria-hidden","true",1,"fa","fa-envelope-o","mr-2"],[1,"candidate-details-container",3,"innerHTML"],["mat-button","","mat-dialog-close","",1,"close-icon"],["aria-hidden","true",1,"fa","fa-times",3,"click"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0),t.YNc(1,D,2,0,"button",1),t.TgZ(2,"div",2)(3,"div",3)(4,"h4"),t._uU(5),t.qZA(),t.TgZ(6,"h5"),t._UZ(7,"i",4),t._uU(8),t.qZA()(),t.TgZ(9,"div",5)(10,"ul",6)(11,"li",7)(12,"a",8),t._UZ(13,"i",9),t.TgZ(14,"span",10),t._uU(15,"Share"),t.qZA()()(),t.TgZ(16,"li",7)(17,"a",8),t._UZ(18,"i",11),t.TgZ(19,"span",10),t._uU(20,"Email"),t.qZA()()()()()(),t._UZ(21,"div",12),t.ALo(22,"keepHtml"),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngIf",a.isModal()),t.xp6(4),t.Oqu(a.selectedCandidateDetails.candidateName),t.xp6(3),t.AsE(" ",a.selectedCandidateDetails.city,", ",a.selectedCandidateDetails.state,""),t.xp6(13),t.Q6J("innerHTML",t.lcZ(22,5,a.selectedCandidateDetails.resume),t.oJD))},dependencies:[m.O5,M.lW,u.ZT,A.MM],styles:[".text-nano{font-size:10px}.text-xs{font-size:12px}.text-smr{font-size:13px}.text-sm{font-size:14px}.text-base{font-size:18px}.text-normal{font-size:16px}.text-regular{font-size:15px}h6,.text-h6{font-size:20px}h5,.text-h5{font-size:22px}h4,.text-h4{font-size:24px}h3,.text-h3{font-size:30px}h2,.text-h2{font-size:34px}h1,.text-h1{font-size:36px}.text-huge{font-size:50px}.text-big{font-size:38px}.ft-head,.candidate-details-wrapper .candidate-head h4{font-family:Metropolis,sans-serif;letter-spacing:.5px}.ft-default,.candidate-details-wrapper table td p,.candidate-details-wrapper .candidate-details-container{font-family:Albert Sans,sans-serif;font-weight:400;letter-spacing:.2px}.ft-sp,.candidate-details-wrapper .candidate-head p,.candidate-details-wrapper .candidate-head h5{font-family:Catamaran,sans-serif}.fw-light{font-weight:300}.fw-normal{font-weight:400}.fw-medium{font-weight:500}.fw-semibold{font-weight:600}.fw-bold{font-weight:700}.ls--2{letter-spacing:.2px}.ls--25{letter-spacing:.25px}.ls--4{letter-spacing:.4px}.ls--15{letter-spacing:1.5px}.lh-14{line-height:14px}.lh-18{line-height:18px}.candidate-details-wrapper .candidate-head{padding:18px 20px 14px;border-bottom:1px solid #f9fafb;background-color:#d1d5db;overflow:hidden;clear:both}@media (max-width: 991px){.candidate-details-wrapper .candidate-head{background-color:transparent}}.candidate-details-wrapper .candidate-head h4{font-size:20px;padding:0 0 8px}@media (min-width: 0) and (max-width: 575px){.candidate-details-wrapper .candidate-head h4{font-size:18px}}.candidate-details-wrapper .candidate-head h5{font-size:16px}.candidate-details-wrapper .candidate-head h5 .icon{font-size:18px}.candidate-details-wrapper .candidate-head p{padding:6px 0 0;color:#6b7280;margin:0;font-size:14px}.candidate-details-wrapper .candidate-head .apply-btn{font-size:16px;text-shadow:0 1px 0 rgba(0,0,0,.2);-moz-text-shadow:0 1px 0 rgba(0,0,0,.2);-webkit-text-shadow:0 1px 0 rgba(0,0,0,.2)}@media (max-width: 991px){.candidate-details-wrapper .candidate-head .apply-btn{padding:4px 14px!important}}.candidate-details-wrapper .candidate-head .social{margin:12px 0 0!important;display:flex;justify-content:flex-end}.candidate-details-wrapper .candidate-head .social li{background-color:transparent;border:none;padding:0}.candidate-details-wrapper .candidate-head .social li:not(:last-child){margin:0 15px 0 0}@media (max-width: 991px){.candidate-details-wrapper .candidate-head .social li:not(:last-child){margin:0 8px 0 0}}.candidate-details-wrapper .candidate-head .social li a{font-size:14px}@media (max-width: 991px){.candidate-details-wrapper .candidate-head .social li a{font-size:13px}}.candidate-details-wrapper .candidate-head .social li a i{font-size:16px}.candidate-details-wrapper .visa-box{padding:14px 20px 6px!important;border-bottom:1px solid #f9fafb}.candidate-details-wrapper .visa-box li{background-color:#6b7280;padding:6px 14px;border-radius:2px!important;font-size:12px;margin-bottom:8px}.candidate-details-wrapper .visa-box li:not(:last-child){margin-right:8px}.candidate-details-wrapper .candidate-details-container{overflow:auto;padding:20px;font-size:16px}@media (max-width: 991px){.candidate-details-wrapper .candidate-details-container{height:300px}}.candidate-details-wrapper .candidate-details-container>p{display:none}.candidate-details-wrapper table{width:100%}.candidate-details-wrapper table td p{font-size:14px}\n"],encapsulation:2}),s})(),f=(()=>{var n;class s{constructor(e){this.statusId=e}ngOnInit(){}}return(n=s).\u0275fac=function(e){return new(e||n)(t.Y36(u.WI,8))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-hotlist-switch-confirmation-modal"]],decls:9,vars:3,consts:[[1,"modal-wrapper","p-5"],[1,"content","text-center"],[1,"ft-head"],[1,"mt-4"],["mat-button","",1,"btn","btn-primary","text-normal","me-4",3,"mat-dialog-close"],["mat-button","",1,"btn","btn-secondary","text-normal",3,"mat-dialog-close"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h6",2),t._uU(3),t.qZA(),t.TgZ(4,"div",3)(5,"div",4),t._uU(6,"Yes"),t.qZA(),t.TgZ(7,"div",5),t._uU(8,"No"),t.qZA()()()()),2&e&&(t.xp6(3),t.hij("Do you want to ",2==a.statusId?"start":"stop"," marketing this resume? Please confirm"),t.xp6(2),t.Q6J("mat-dialog-close",!0),t.xp6(2),t.Q6J("mat-dialog-close",!1))},dependencies:[u.ZT]}),s})(),h=(()=>{var n;class s{constructor(){}ngOnInit(){}}return(n=s).\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-hotlist-delete-confirmation-modal"]],decls:9,vars:2,consts:[[1,"modal-wrapper","p-5"],[1,"content","text-center"],[1,"ft-head"],[1,"mt-4"],["mat-button","",1,"btn","btn-primary","btn-sm","text-normal","me-4",3,"mat-dialog-close"],["mat-button","",1,"btn","btn-secondary","btn-sm","text-normal",3,"mat-dialog-close"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h6",2),t._uU(3,"Do you want to delete the candidate? Please confirm"),t.qZA(),t.TgZ(4,"div",3)(5,"div",4),t._uU(6," Yes "),t.qZA(),t.TgZ(7,"div",5),t._uU(8," No "),t.qZA()()()()),2&e&&(t.xp6(5),t.Q6J("mat-dialog-close",!0),t.xp6(2),t.Q6J("mat-dialog-close",!1))},dependencies:[u.ZT]}),s})();var c=r(9945),_=r(930),y=r(3782),Z=r(9229),b=r(6223),U=r(2582),O=r(4647),S=r(266);function J(n,s){if(1&n&&(t.TgZ(0,"span",43),t._uU(1),t.qZA()),2&n){const i=s.$implicit;t.xp6(1),t.Oqu(i.name)}}function q(n,s){if(1&n&&(t.TgZ(0,"div",41),t.YNc(1,J,2,1,"span",42),t.qZA()),2&n){const i=t.oxw().$implicit;t.xp6(1),t.Q6J("ngForOf",i.candidateProfileSkills)}}function H(n,s){1&n&&(t.TgZ(0,"div",41)(1,"span",44),t._uU(2,"No Skills Avaialble"),t.qZA()())}function k(n,s){if(1&n&&t._UZ(0,"resume-viewer",45),2&n){const i=t.oxw().$implicit;t.Q6J("doc",null==i||null==i.candidateDocuments[0]?null:i.candidateDocuments[0].doc)}}function E(n,s){if(1&n&&t._UZ(0,"download-resume",45),2&n){const i=t.oxw().$implicit;t.Q6J("doc",null==i||null==i.candidateDocuments[0]?null:i.candidateDocuments[0].doc)}}function F(n,s){if(1&n){const i=t.EpF();t.ynx(0),t.TgZ(1,"li",2)(2,"div",3)(3,"div",4)(4,"div",5)(5,"div",6)(6,"div",7)(7,"h6",8),t._uU(8),t.qZA(),t.TgZ(9,"p",9),t._uU(10),t.qZA()(),t.TgZ(11,"div",10)(12,"div",11)(13,"span",12),t._uU(14,"trip"),t.qZA(),t.TgZ(15,"p",13),t._uU(16),t.qZA()(),t.TgZ(17,"div",11)(18,"span",12),t._uU(19,"airplane_ticket"),t.qZA(),t.TgZ(20,"p",13),t._uU(21),t.qZA()(),t.TgZ(22,"div",11)(23,"span",14),t._uU(24,"location_on"),t.qZA(),t.TgZ(25,"p",13),t._uU(26),t.qZA()(),t.TgZ(27,"div",11)(28,"span",14),t._uU(29,"attach_money"),t.qZA(),t.TgZ(30,"p",13),t._uU(31),t.qZA()(),t._UZ(32,"div"),t.qZA(),t.TgZ(33,"div",15)(34,"p",16),t._uU(35,"Availability"),t.qZA(),t.TgZ(36,"p",17),t._uU(37),t.qZA()(),t.TgZ(38,"div",15)(39,"p",16),t._uU(40,"Relocation"),t.qZA(),t.TgZ(41,"p",17),t._uU(42),t.qZA()()()(),t.TgZ(43,"div",18)(44,"label",19)(45,"input",20),t.NdJ("ngModelChange",function(a){const l=t.CHM(i).$implicit;return t.KtG(l.status=a)})("click",function(a){const l=t.CHM(i).$implicit,v=t.oxw();return t.KtG(v.onStatusChange(a,l))}),t.qZA(),t._UZ(46,"span",21),t.qZA(),t.TgZ(47,"div",22)(48,"div",23),t.NdJ("click",function(){const o=t.CHM(i).$implicit,l=t.oxw();return t.KtG(l.editCandidate(o.id))}),t.TgZ(49,"span",24),t._uU(50,"edit"),t.qZA()(),t.TgZ(51,"div",25),t.NdJ("click",function(){const o=t.CHM(i).$implicit,l=t.oxw();return t.KtG(l.deleteCandidate(o))}),t.TgZ(52,"span",24),t._uU(53,"delete"),t.qZA()()()()(),t.TgZ(54,"div",4)(55,"div",26),t.YNc(56,q,2,1,"div",27),t.YNc(57,H,3,0,"div",27),t.qZA(),t.TgZ(58,"div",28)(59,"div",29)(60,"div",30),t._uU(61," Update"),t.TgZ(62,"span",31),t._uU(63," expand_more "),t.qZA()(),t.TgZ(64,"div",32)(65,"div",33),t.NdJ("click",function(){const o=t.CHM(i).$implicit,l=t.oxw();return t.KtG(l.editCandidate(o.id))}),t.TgZ(66,"span",34),t._uU(67,"edit"),t.qZA(),t.TgZ(68,"h6",35),t._uU(69,"Edit"),t.qZA()(),t.TgZ(70,"div",33),t.NdJ("click",function(){const o=t.CHM(i).$implicit,l=t.oxw();return t.KtG(l.deleteCandidate(o))}),t.TgZ(71,"span",36),t._uU(72,"delete"),t.qZA(),t.TgZ(73,"h6",37),t._uU(74,"Delete"),t.qZA()()()()()(),t.TgZ(75,"div",4)(76,"div",38)(77,"div",39),t.YNc(78,k,1,1,"resume-viewer",40),t.YNc(79,E,1,1,"download-resume",40),t.qZA()()()()(),t.BQk()}if(2&n){const i=s.$implicit,e=t.oxw();t.xp6(8),t.hij(" ",i.candidateName," "),t.xp6(2),t.hij(" ",i.title," "),t.xp6(6),t.hij("",i.totalExp," years"),t.xp6(5),t.hij(" ",e.getVisa(i.visaId)," "),t.xp6(5),t.AsE(" ",null==i.city?null:i.city.city1,", ",null==i.city?null:i.city.stateCode," "),t.xp6(5),t.AsE(" ",i.fromAmt," - ",i.toAmt," "),t.xp6(6),t.hij(" ",e.getAvailability(i.availability)," "),t.xp6(5),t.hij(" ",e.getRelocation(i)," "),t.xp6(3),t.s9C("value",i.statusId),t.Q6J("ngModel",i.status),t.xp6(11),t.Q6J("ngIf",e.isSkills(i.candidateProfileSkills)),t.xp6(1),t.Q6J("ngIf",!e.isSkills(i.candidateProfileSkills)),t.xp6(21),t.Q6J("ngIf",0!=(null==i?null:i.candidateDocuments.length)),t.xp6(1),t.Q6J("ngIf",0!=(null==i?null:i.candidateDocuments.length))}}let I=(()=>{var n;class s{constructor(e,a){this.router=e,this.route=a,this.list=[],this.handleDeleteCandidate=new t.vpe,this.handleStatusChange=new t.vpe}getVisa(e){var a;return g.ZP.some(this.visaList,o=>{o.id==e&&(a=o.name)}),a}getAvailability(e){if(e){let a=this.availabilityList.filter(o=>o.id==e);return g.ZP.isEmpty(a)?"":`${a[0].name}`}return"Not Available"}getRelocation(e){let a=e.candidatePrefLocations,o=[];return g.ZP.isEmpty(a)?e.anyLocation?"Open to relocate to any location":e.remoteOnly?"Looking only remote project":"NA":(a.forEach(l=>{let v=l.cityName.split("-");o.push(v[0])}),o.join(", "))}isSkills(e){return!g.ZP.isEmpty(e)}onStatusChange(e,a){e.preventDefault();const l=2==JSON.parse(e.target.value)?3:2;this.handleStatusChange.emit({statusId:l,item:a})}editCandidate(e){this.router.navigate(["/editcandidate",e])}deleteCandidate(e){this.handleDeleteCandidate.emit(e)}ngOnInit(){console.log(this.list)}}return(n=s).\u0275fac=function(e){return new(e||n)(t.Y36(p.F0),t.Y36(p.gz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["myhotlist-listview"]],inputs:{list:["filteredHotListData","list"],visaList:"visaList",availabilityList:"availabilityList"},outputs:{handleDeleteCandidate:"handleDeleteCandidate",handleStatusChange:"handleStatusChange"},decls:2,vars:1,consts:[[1,"hotlist-box","list-box"],[4,"ngFor","ngForOf"],[1,"list-group-item","shadow"],[1,"content-area"],[1,"row"],[1,"col-9","col-md-8","top"],[1,"left"],[1,"mb-1","d-md-flex","align-items-center"],[1,"text-secondary-600","text-uppercase","text-normal","fw-medium","me-3","name"],[1,"ft-head","text-dark-500","fw-semibold","text-capitalize","text-normal"],[1,"d-md-flex","additional","align-items-center"],[1,"item","d-flex","align-items-center"],[1,"material-symbols-outlined","text-base","text-dark-500","me-2"],[1,"text-sm","fw-medium"],[1,"material-symbols-outlined","text-base","text-dark-500","me-1"],[1,"others","d-md-flex"],[1,"me-3","text-sm","text-dark-500","left"],[1,"text-sm"],[1,"col-3","col-md-4","d-flex","flex-column","justify-md-content-end"],[1,"switch","flex-shrink-0"],["type","checkbox",3,"ngModel","value","ngModelChange","click"],[1,"slider","round"],[1,"d-flex","d-md-none","options"],[1,"pointer","me-2","d-flex","text-primary-500",3,"click"],[1,"material-symbols-outlined","text-base"],[1,"pointer","d-flex","text-danger-500",3,"click"],[1,"col-sm-12","col-md-8"],["class","skills mt-4",4,"ngIf"],[1,"col-5","col-md-4","d-none","d-md-flex","justify-content-end"],[1,"d-flex","options","mt-2"],["id","optionsBtn","data-bs-toggle","dropdown","aria-expanded","false",1,"btn","btn-secondary","btn-sm","px-3","d-inline-flex","align-items-center"],[1,"material-symbols-outlined","ms-1"],["aria-labelledby","optionsBtn",1,"dropdown-menu"],[1,"px-3","py-2","d-flex","align-items-center","pointer",3,"click"],[1,"material-symbols-outlined","text-base","text-dark-600","me-1"],[1,"ms-1","text-sm","text-dark-600"],[1,"material-symbols-outlined","text-base","text-danger","me-1"],[1,"ms-1","text-sm","text-danger"],[1,"col-sm-12"],[1,"bottom-box","my-2","d-flex"],[3,"doc",4,"ngIf"],[1,"skills","mt-4"],["class","item text-primary-800 bg-primary-50 text-smr fw-medium",4,"ngFor","ngForOf"],[1,"item","text-primary-800","bg-primary-50","text-smr","fw-medium"],[1,"item","text-danger-800","bg-danger-50","text-smr","fw-medium"],[3,"doc"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0),t.YNc(1,F,80,16,"ng-container",1),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngForOf",a.list))},dependencies:[m.sg,m.O5,b.Wl,b.JJ,b.On,O.D,S.L]}),s})();function N(n,s){if(1&n){const i=t.EpF();t.TgZ(0,"tr")(1,"td",3),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td")(12,"span",4),t._uU(13),t.qZA()(),t.TgZ(14,"td",5)(15,"div",6)(16,"div",7),t.NdJ("click",function(){const o=t.CHM(i).$implicit,l=t.oxw();return t.KtG(l.editCandidate(o.id))}),t.TgZ(17,"span",8),t._uU(18,"edit"),t.qZA()(),t.TgZ(19,"div",9),t.NdJ("click",function(){const o=t.CHM(i).$implicit,l=t.oxw();return t.KtG(l.deleteCandidate(o))}),t.TgZ(20,"span",8),t._uU(21,"delete"),t.qZA()()()()()}if(2&n){const i=s.$implicit,e=t.oxw();t.xp6(2),t.Oqu(i.candidateName),t.xp6(2),t.Oqu(i.title),t.xp6(2),t.hij("",i.totalExp," years"),t.xp6(2),t.Oqu(e.getVisa(i.visaId)),t.xp6(2),t.Oqu(null==i.city?null:i.city.stateCode),t.xp6(3),t.hij(" ",e.getRelocation(i),"")}}let z=(()=>{var n;class s{constructor(e,a){this.router=e,this.route=a,this.list=[],this.handleDeleteCandidate=new t.vpe,this.handleStatusChange=new t.vpe}getVisa(e){var a;return g.ZP.some(this.visaList,o=>{o.id==e&&(a=o.name)}),a}getAvailability(e){return e?`${this.availabilityList.filter(o=>o.id==e)[0].name}`:"Not Available"}getRelocation(e){let a=e.candidatePrefLocations,o=[];return g.ZP.isEmpty(a)?e.anyLocation?"Open to relocate to any location":e.remoteOnly?"Looking only remote project":"NA":(a.forEach(l=>{let v=l.cityName.split("-");o.push(v[0])}),o.join(", "))}isSkills(e){return!g.ZP.isEmpty(e)}onStatusChange(e,a){e.preventDefault();const l=2==JSON.parse(e.target.value)?3:2;this.handleStatusChange.emit({statusId:l,item:a})}editCandidate(e){this.router.navigate(["/editcandidate",e])}deleteCandidate(e){this.handleDeleteCandidate.emit(e)}}return(n=s).\u0275fac=function(e){return new(e||n)(t.Y36(p.F0),t.Y36(p.gz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["myhotlist-tableview"]],inputs:{list:["filteredHotListData","list"],visaList:"visaList",availabilityList:"availabilityList"},outputs:{handleDeleteCandidate:"handleDeleteCandidate",handleStatusChange:"handleStatusChange"},decls:20,vars:1,consts:[[1,"hotlist-box","table-box"],[1,"table","table-bordered"],[4,"ngFor","ngForOf"],[1,"fw-semibold"],[1,"overflow"],[1,"text-center"],[1,"d-inline-block"],[1,"pointer","mt-2","me-2","d-inline-flex","text-primary-500",3,"click"],[1,"material-symbols-outlined","text-base"],[1,"pointer","mt-2","d-inline-flex","text-danger-500",3,"click"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0)(1,"table",1)(2,"thead")(3,"tr")(4,"th"),t._uU(5,"Name"),t.qZA(),t.TgZ(6,"th"),t._uU(7,"Technology"),t.qZA(),t.TgZ(8,"th"),t._uU(9,"Years"),t.qZA(),t.TgZ(10,"th"),t._uU(11,"Visa"),t.qZA(),t.TgZ(12,"th"),t._uU(13,"Location"),t.qZA(),t.TgZ(14,"th"),t._uU(15,"Preference"),t.qZA(),t.TgZ(16,"th"),t._uU(17,"Actions"),t.qZA()()(),t.TgZ(18,"tbody"),t.YNc(19,N,22,6,"tr",2),t.qZA()()()),2&e&&(t.xp6(19),t.Q6J("ngForOf",a.list))},dependencies:[m.sg]}),s})();function Y(n,s){1&n&&t._UZ(0,"loader")}function j(n,s){if(1&n&&(t.TgZ(0,"div"),t._uU(1),t.qZA()),2&n){const i=t.oxw(2);t.xp6(1),t.hij(" You have ",i.totalItems," candidates in your Hotlist ")}}function Q(n,s){1&n&&(t.TgZ(0,"div"),t._uU(1,"No candidates Available"),t.qZA())}function R(n,s){if(1&n){const i=t.EpF();t.TgZ(0,"div",21)(1,"div",22),t.NdJ("click",function(){t.CHM(i);const a=t.oxw(3);return t.KtG(a.handleViewType("table"))}),t.TgZ(2,"span",23),t._uU(3,"table_chart"),t.qZA(),t._uU(4,"View table "),t.qZA(),t.TgZ(5,"div",22),t.NdJ("click",function(){t.CHM(i);const a=t.oxw(3);return t.KtG(a.handleViewType("list"))}),t.TgZ(6,"span",23),t._uU(7,"data_table"),t.qZA(),t._uU(8,"Detailed List "),t.qZA()()}if(2&n){const i=t.oxw(3);t.xp6(1),t.Q6J("ngClass",i.isTableView?"btn-secondary no-pointer":"btn-outline-secondary text-secondary-500"),t.xp6(4),t.Q6J("ngClass",i.isListView?"btn-secondary no-pointer":"btn-outline-secondary text-secondary-500")}}function K(n,s){if(1&n){const i=t.EpF();t.TgZ(0,"div",12)(1,"div",13)(2,"form")(3,"div",14)(4,"div",15)(5,"div",16)(6,"input",17),t.NdJ("ngModelChange",function(a){t.CHM(i);const o=t.oxw(2);return t.KtG(o.searchData=a)})("input",function(){t.CHM(i);const a=t.oxw(2);return t.KtG(a.onSearchData())}),t.qZA(),t.TgZ(7,"span",18),t._UZ(8,"i",19),t.qZA()()()()()(),t.YNc(9,R,9,2,"div",20),t.qZA()}if(2&n){const i=t.oxw(2);t.xp6(6),t.Q6J("ngModel",i.searchData),t.xp6(3),t.Q6J("ngIf",i.isJobAvailable)}}function V(n,s){if(1&n){const i=t.EpF();t.TgZ(0,"myhotlist-listview",24),t.NdJ("handleDeleteCandidate",function(a){t.CHM(i);const o=t.oxw(2);return t.KtG(o.deleteCandidate(a))})("handleStatusChange",function(a){t.CHM(i);const o=t.oxw(2);return t.KtG(o.onStatusChange(a))}),t.qZA()}if(2&n){const i=t.oxw(2);t.Q6J("filteredHotListData",i.filteredHotListData)("visaList",i.visaList)("availabilityList",i.selectAvailabilityList)}}function B(n,s){if(1&n){const i=t.EpF();t.TgZ(0,"myhotlist-tableview",24),t.NdJ("handleDeleteCandidate",function(a){t.CHM(i);const o=t.oxw(2);return t.KtG(o.deleteCandidate(a))})("handleStatusChange",function(a){t.CHM(i);const o=t.oxw(2);return t.KtG(o.onStatusChange(a))}),t.qZA()}if(2&n){const i=t.oxw(2);t.Q6J("filteredHotListData",i.filteredHotListData)("visaList",i.visaList)("availabilityList",i.selectAvailabilityList)}}const G=function(){return{exact:!0}};function $(n,s){if(1&n&&(t.ynx(0),t.TgZ(1,"div",5)(2,"h5",6),t.YNc(3,j,2,1,"div",4),t.YNc(4,Q,2,0,"div",4),t.qZA(),t.TgZ(5,"div",7)(6,"a",8)(7,"span",9),t._uU(8," add_circle "),t.qZA(),t._uU(9,"Add Candidate"),t.qZA()()(),t.YNc(10,K,10,2,"div",10),t.YNc(11,V,1,3,"myhotlist-listview",11),t.YNc(12,B,1,3,"myhotlist-tableview",11),t.BQk()),2&n){const i=t.oxw();t.xp6(3),t.Q6J("ngIf",i.isJobAvailable),t.xp6(1),t.Q6J("ngIf",!i.isJobAvailable),t.xp6(2),t.Q6J("routerLinkActiveOptions",t.DdM(6,G)),t.xp6(4),t.Q6J("ngIf",i.isJobAvailable),t.xp6(1),t.Q6J("ngIf",i.isListView),t.xp6(1),t.Q6J("ngIf",i.isTableView)}}function W(n,s){if(1&n&&(t.ynx(0),t.TgZ(1,"div",25),t._uU(2),t.qZA(),t.BQk()),2&n){const i=t.oxw();t.xp6(2),t.hij(" ",i.error," ")}}const X=[{path:"",component:(()=>{var n;class s{constructor(e,a,o,l,v,L,it){this.router=e,this.route=a,this.dialog=o,this.commonService=l,this.sessionService=v,this.candidateProfileService=L,this.toastr=it,this.isJobLoaded=!1,this.isJobAvailable=!1,this.isError=!1,this.error="",this.initialHotListData=[],this.filteredHotListData=[],this.isMobile=!1,this.selectedCandidateId=-1,this.selectAvailabilityList=[],this.searchData="",this.isListView=!1,this.isTableView=!1,this.candidateDetailsChanged=new t.vpe,e.events.subscribe(at=>{if(at instanceof p.m2){const P=this.route.snapshot.queryParams;g.o8(P.view)?(this.router.navigate([],{queryParamsHandling:"merge",queryParams:{view:"list"}}),this.isListView=!0,this.isTableView=!1):"table"==P.view?(this.isListView=!1,this.isTableView=!0):(this.isListView=!0,this.isTableView=!1)}})}getParams(e){this.isActiveCandidate=e.active,this.totalExp=e.experience}onSearchData(){this.filteredHotListData=this.initialHotListData.filter(e=>this.isMatch(e,this.searchData))}isMatch(e,a){return a=a.toLowerCase(),e.candidateName.toLowerCase().includes(a)||e.title.toLowerCase().includes(a)||e.candidateProfileSkills.some(o=>o.name.toLowerCase().includes(a))}showCandidateDetaislModal(){this.dialog.open(d,{panelClass:"material",disableClose:!0,data:this.selectedCandidateDetails})}onResize(e){e.target.innerWidth<=991?(this.isMobile=!0,this.router.navigate([],{queryParamsHandling:"merge",queryParams:{view:"list"}})):this.isMobile=!1}isSelected(e){return this.selectedCandidateId==e?"selected":""}showCandidateDescription(e){this.selectedCandidateId=e.id,this.selectedCandidateDetails=e,this.candidateDetailsChanged.emit(this.selectedCandidateDetails)}onStatusChange({statusId:e,item:a}){this.switchConfirmation(e,a)}switchConfirmation(e,a){this.dialog.open(f,{panelClass:"material",disableClose:!0,data:e}).afterClosed().subscribe(l=>{l&&this.candidateProfileService.apiCandidateProfileActivateOrDeActivatePut(a.id,!0,e).subscribe({next:v=>{v.value&&(this.filteredHotListData.map(L=>(L.id==a.id&&(a.statusId=e,a.status=2==a.statusId),a)),setTimeout(()=>{this.toastr.success(`Marketing ${2==e?"activated":"deactivated"} successfully`,"",{timeOut:5e3,positionClass:"toast-top-center"})},200))},error:v=>{this.toastr.error("Some error occured","",{timeOut:5e3,positionClass:"toast-top-center"})}})})}handleViewType(e){this.router.navigate([],{queryParamsHandling:"merge",queryParams:{view:e}})}deleteCandidate(e){this.dialog.open(h,{panelClass:"material",disableClose:!0}).afterClosed().subscribe(o=>{o&&this.candidateProfileService.apiCandidateProfileActivateOrDeActivatePut(e.id,!1,e.statusId).subscribe({next:l=>{l.value&&(this.filteredHotListData=this.filteredHotListData.filter(v=>v.id!=e.id),this.toastr.success("Candidate deleted successfully","",{timeOut:5e3,positionClass:"toast-top-center"}))},error:l=>{this.toastr.error("Some error occured","",{timeOut:5e3,positionClass:"toast-top-center"})}})})}ngOnInit(){this.isMobile=window.innerWidth<=991,this.candidateProfileService.apiCandidateProfileGetByConsultancyUserGet(this.sessionService.consultancyUserId).subscribe({next:e=>{this.initialHotListData=e.value.filter(a=>a.active),this.initialHotListData.map(a=>{a.status=2==a.statusId}),this.filteredHotListData=this.initialHotListData,this.filteredHotListData.length>0?(this.isJobAvailable=!0,this.isJobLoaded=!0):(this.isJobAvailable=!1,this.isJobLoaded=!0)},error:e=>{this.isJobLoaded=!0,this.isJobLoaded=!0,this.isError=!0,this.error="Some error occurred"}}),this.candidateDetailsChanged.subscribe(e=>{this.isMobile&&this.showCandidateDetaislModal()}),this.commonService.apiCommonVisaGet().subscribe({next:e=>{this.visaList=e.value},error:e=>{}}),this.commonService.apiCommonCandidateAvailabilityGet().subscribe({next:e=>{this.selectAvailabilityList=e.value},error:e=>{}})}}return(n=s).\u0275fac=function(e){return new(e||n)(t.Y36(p.F0),t.Y36(p.gz),t.Y36(u.uw),t.Y36(c.v_),t.Y36(_.m),t.Y36(y.M),t.Y36(Z._W))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-myhotlist"]],hostBindings:function(e,a){1&e&&t.NdJ("resize",function(l){return a.onResize(l)},!1,t.Jf7)},features:[t._Bn([{provide:u.so,useValue:{}}])],decls:7,vars:3,consts:[[1,"my-hotlist-wrapper"],[1,"container"],[1,"row"],[1,"col-sm-12"],[4,"ngIf"],[1,"title-box"],[1,"title"],[1,"btn-wrapper","ms-auto"],["routerLink","/addcandidate","routerLinkActive","active",1,"btn","add-candidate-btn","shadow","align-items-center","justify-content-center","d-flex",3,"routerLinkActiveOptions"],[1,"material-symbols-outlined","me-1"],["class","options-wrapper",4,"ngIf"],[3,"filteredHotListData","visaList","availabilityList","handleDeleteCandidate","handleStatusChange",4,"ngIf"],[1,"options-wrapper"],[1,"search-results"],[1,"input-box","mb-0"],[1,"form-group","mb-0"],[1,"input-group"],["type","text","id","searchData","name","searchData","placeholder","Search by name, skills, job title",1,"form-control",3,"ngModel","ngModelChange","input"],[1,"input-group-text"],[1,"fa","fa-search"],["class","options d-none d-lg-block",4,"ngIf"],[1,"options","d-none","d-lg-block"],[1,"btn","view-btn","d-inline-flex","align-items-center",3,"ngClass","click"],[1,"material-symbols-outlined","me-2"],[3,"filteredHotListData","visaList","availabilityList","handleDeleteCandidate","handleStatusChange"],[1,"mt-2","alert","alert-danger"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t.YNc(4,Y,1,0,"loader",4),t.YNc(5,$,13,7,"ng-container",4),t.YNc(6,W,3,1,"ng-container",4),t.qZA()()()()),2&e&&(t.xp6(4),t.Q6J("ngIf",!a.isJobLoaded),t.xp6(1),t.Q6J("ngIf",a.isJobLoaded&&!a.isError),t.xp6(1),t.Q6J("ngIf",a.isError))},dependencies:[m.mk,m.O5,b._Y,b.Fj,b.JJ,b.JL,b.On,b.F,U.R,p.rH,p.Od,I,z]}),s})()}];let tt=(()=>{var n;class s{}return(n=s).\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[p.Bz.forChild(X),p.Bz]}),s})(),et=(()=>{var n;class s{}return(n=s).\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[m.ez,C.m.forRoot(),x.w,tt]}),s})()}}]);