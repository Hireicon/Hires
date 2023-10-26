"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[188],{3760:(D,b,r)=>{r.d(b,{Hk:()=>w,MM:()=>T,Tv:()=>g});var u=r(5879),Z=r(6593);let w=(()=>{var c;class h{transform(d,_,C){return null!=_&&0!=_.length&&" "!=_&&(_=_.toString().toLowerCase(),C&&""!=C&&null!=d)?d.filter(function(y){return(y=y[C]).toLowerCase().indexOf(_)>-1}):d}}return(c=h).\u0275fac=function(d){return new(d||c)},c.\u0275pipe=u.Yjl({name:"simpleSearch",type:c,pure:!0}),h})(),g=(()=>{var c;class h{transform(d,_){return d.substring(0,_).toUpperCase()}}return(c=h).\u0275fac=function(d){return new(d||c)},c.\u0275pipe=u.Yjl({name:"subStr",type:c,pure:!0}),h})(),T=(()=>{var c;class h{constructor(d){this.sanitizer=d}transform(d){return this.sanitizer.bypassSecurityTrustHtml(d)}}return(c=h).\u0275fac=function(d){return new(d||c)(u.Y36(Z.H7,16))},c.\u0275pipe=u.Yjl({name:"keepHtml",type:c,pure:!1}),h})()},188:(D,b,r)=>{r.r(b),r.d(b,{MyhotlistModule:()=>K});var u=r(6814),Z=r(4574),w=r(414),p=r(1331),t=r(5879),m=r(7700),g=r(1670),T=r(2296),c=r(3760);function h(n,o){if(1&n){const a=t.EpF();t.TgZ(0,"button",13)(1,"i",14),t.NdJ("click",function(){t.CHM(a);const i=t.oxw();return t.KtG(i.dialogClose())}),t.qZA()()}}let f=(()=>{var n;class o{constructor(e,i,s,l){this.modalCandidateDetails=e,this.dialog=i,this.candidateDialogRef=s,this.route=l,this.isMobile=!1}isModal(){return null!=this.modalCandidateDetails}dialogClose(){g.xb(this.candidateDialogRef)||this.candidateDialogRef.close()}getVisaDetails(e){return null!=e?e.split(","):[]}ngOnInit(){null!=this.modalCandidateDetails&&(this.selectedCandidateDetails=this.modalCandidateDetails),this.isMobile=window.innerWidth<=991}}return(n=o).\u0275fac=function(e){return new(e||n)(t.Y36(m.WI,8),t.Y36(m.uw),t.Y36(m.so),t.Y36(p.gz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-candidate-detail-sheet"]],inputs:{selectedCandidateDetails:"selectedCandidateDetails"},decls:23,vars:7,consts:[[1,"candidate-details-wrapper"],["class","close-icon","mat-button","","mat-dialog-close","",4,"ngIf"],[1,"candidate-head"],[1,"float-left"],["aria-hidden","true",1,"fa","fa-map-marker","icon","mr-2"],[1,"float-right","text-right"],[1,"list-inline","social"],[1,"list-inline-item"],["href","javascript:void(0)"],["aria-hidden","true",1,"fa","fa-share-alt","mr-2"],[1,"d-none","d-md-inline-block"],["aria-hidden","true",1,"fa","fa-envelope-o","mr-2"],[1,"candidate-details-container",3,"innerHTML"],["mat-button","","mat-dialog-close","",1,"close-icon"],["aria-hidden","true",1,"fa","fa-times",3,"click"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t.YNc(1,h,2,0,"button",1),t.TgZ(2,"div",2)(3,"div",3)(4,"h4"),t._uU(5),t.qZA(),t.TgZ(6,"h5"),t._UZ(7,"i",4),t._uU(8),t.qZA()(),t.TgZ(9,"div",5)(10,"ul",6)(11,"li",7)(12,"a",8),t._UZ(13,"i",9),t.TgZ(14,"span",10),t._uU(15,"Share"),t.qZA()()(),t.TgZ(16,"li",7)(17,"a",8),t._UZ(18,"i",11),t.TgZ(19,"span",10),t._uU(20,"Email"),t.qZA()()()()()(),t._UZ(21,"div",12),t.ALo(22,"keepHtml"),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngIf",i.isModal()),t.xp6(4),t.Oqu(i.selectedCandidateDetails.candidateName),t.xp6(3),t.AsE(" ",i.selectedCandidateDetails.city,", ",i.selectedCandidateDetails.state,""),t.xp6(13),t.Q6J("innerHTML",t.lcZ(22,5,i.selectedCandidateDetails.resume),t.oJD))},dependencies:[u.O5,T.lW,m.ZT,c.MM],styles:[".text-xs{font-size:12px}.text-smr{font-size:13px}.text-sm{font-size:14px}.text-base{font-size:18px}.text-normal{font-size:16px}.text-regular{font-size:15px}h6,.text-h6{font-size:20px}h5,.text-h5{font-size:22px}h4,.text-h4{font-size:24px}h3,.text-h3{font-size:30px}h2,.text-h2{font-size:34px}h1,.text-h1{font-size:36px}.text-huge{font-size:50px}.text-big{font-size:38px}.ft-head,.candidate-details-wrapper .candidate-head h4{font-family:Metropolis,sans-serif;letter-spacing:.5px}.ft-default,.candidate-details-wrapper table td p,.candidate-details-wrapper .candidate-details-container{font-family:Open Sans,sans-serif;font-weight:400;letter-spacing:.2px}.ft-sp,.candidate-details-wrapper .candidate-head p,.candidate-details-wrapper .candidate-head h5{font-family:Catamaran,sans-serif}.fw-light{font-weight:300}.fw-normal{font-weight:400}.fw-medium{font-weight:500}.fw-semibold{font-weight:600}.fw-bold{font-weight:700}.ls--2{letter-spacing:.2px}.ls--25{letter-spacing:.25px}.ls--4{letter-spacing:.4px}.ls--15{letter-spacing:1.5px}.lh-14{line-height:14px}.lh-18{line-height:18px}.candidate-details-wrapper .candidate-head{padding:18px 20px 14px;border-bottom:1px solid #f9fafb;background-color:#d1d5db;overflow:hidden;clear:both}@media (max-width: 991px){.candidate-details-wrapper .candidate-head{background-color:transparent}}.candidate-details-wrapper .candidate-head h4{font-size:20px;color:#111827;padding:0 0 8px}@media (min-width: 0) and (max-width: 575px){.candidate-details-wrapper .candidate-head h4{font-size:18px}}.candidate-details-wrapper .candidate-head h5{font-size:16px}.candidate-details-wrapper .candidate-head h5 .icon{font-size:18px;color:#1f2937}.candidate-details-wrapper .candidate-head p{padding:6px 0 0;color:#4b5563;margin:0;font-size:14px}.candidate-details-wrapper .candidate-head .apply-btn{font-size:16px;text-shadow:0 1px 0 rgba(0,0,0,.2);-moz-text-shadow:0 1px 0 rgba(0,0,0,.2);-webkit-text-shadow:0 1px 0 rgba(0,0,0,.2)}@media (max-width: 991px){.candidate-details-wrapper .candidate-head .apply-btn{padding:4px 14px!important}}.candidate-details-wrapper .candidate-head .social{margin:12px 0 0!important;display:flex;justify-content:flex-end}.candidate-details-wrapper .candidate-head .social li{background-color:transparent;border:none;padding:0}.candidate-details-wrapper .candidate-head .social li:not(:last-child){margin:0 15px 0 0}@media (max-width: 991px){.candidate-details-wrapper .candidate-head .social li:not(:last-child){margin:0 8px 0 0}}.candidate-details-wrapper .candidate-head .social li a{color:#1f2937;font-size:14px}@media (max-width: 991px){.candidate-details-wrapper .candidate-head .social li a{font-size:13px}}.candidate-details-wrapper .candidate-head .social li a:hover{color:#1f2937}.candidate-details-wrapper .candidate-head .social li a i{font-size:16px}.candidate-details-wrapper .visa-box{padding:14px 20px 6px!important;border-bottom:1px solid #f9fafb}.candidate-details-wrapper .visa-box li{background-color:#4b5563;padding:6px 14px;border-radius:2px!important;font-size:12px;margin-bottom:8px}.candidate-details-wrapper .visa-box li:not(:last-child){margin-right:8px}.candidate-details-wrapper .candidate-details-container{overflow:auto;padding:20px;font-size:16px}@media (max-width: 991px){.candidate-details-wrapper .candidate-details-container{height:300px}}.candidate-details-wrapper .candidate-details-container>p{display:none}.candidate-details-wrapper table{width:100%}.candidate-details-wrapper table td p{font-size:14px}\n"],encapsulation:2}),o})(),d=(()=>{var n;class o{constructor(e){this.statusId=e}ngOnInit(){}}return(n=o).\u0275fac=function(e){return new(e||n)(t.Y36(m.WI,8))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-hotlist-switch-confirmation-modal"]],decls:9,vars:3,consts:[[1,"modal-wrapper","p-5"],[1,"content","text-center"],[1,"ft-head"],[1,"mt-4"],["mat-button","",1,"btn","btn-primary","text-normal","me-4",3,"mat-dialog-close"],["mat-button","",1,"btn","btn-secondary","text-normal",3,"mat-dialog-close"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h6",2),t._uU(3),t.qZA(),t.TgZ(4,"div",3)(5,"div",4),t._uU(6,"Yes"),t.qZA(),t.TgZ(7,"div",5),t._uU(8,"No"),t.qZA()()()()),2&e&&(t.xp6(3),t.hij("Do you want to ",2==i.statusId?"start":"stop"," marketing this resume? Please confirm"),t.xp6(2),t.Q6J("mat-dialog-close",!0),t.xp6(2),t.Q6J("mat-dialog-close",!1))},dependencies:[m.ZT]}),o})(),_=(()=>{var n;class o{constructor(){}ngOnInit(){}}return(n=o).\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-hotlist-delete-confirmation-modal"]],decls:9,vars:2,consts:[[1,"modal-wrapper","p-5"],[1,"content","text-center"],[1,"ft-head"],[1,"mt-4"],["mat-button","",1,"btn","btn-primary","text-normal","me-4",3,"mat-dialog-close"],["mat-button","",1,"btn","btn-secondary","text-normal",3,"mat-dialog-close"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h6",2),t._uU(3,"Do you want to delete the candidate? Please confirm"),t.qZA(),t.TgZ(4,"div",3)(5,"div",4),t._uU(6,"Yes"),t.qZA(),t.TgZ(7,"div",5),t._uU(8,"No"),t.qZA()()()()),2&e&&(t.xp6(5),t.Q6J("mat-dialog-close",!0),t.xp6(2),t.Q6J("mat-dialog-close",!1))},dependencies:[m.ZT]}),o})();var C=r(9945),y=r(930),M=r(3782),S=r(9229),v=r(6223);function U(n,o){if(1&n&&(t.TgZ(0,"span",39),t._uU(1),t.qZA()),2&n){const a=o.$implicit;t.xp6(1),t.Oqu(a.name)}}function P(n,o){if(1&n&&(t.TgZ(0,"div",37),t.YNc(1,U,2,1,"span",38),t.qZA()),2&n){const a=t.oxw().$implicit;t.xp6(1),t.Q6J("ngForOf",a.candidateProfileSkills)}}function q(n,o){1&n&&(t.TgZ(0,"div",37)(1,"span",40),t._uU(2,"No Skills Avaialble"),t.qZA()())}function H(n,o){if(1&n){const a=t.EpF();t.ynx(0),t.TgZ(1,"li",2)(2,"div",3)(3,"div",4)(4,"div",5)(5,"div",6)(6,"div",7)(7,"h6",8),t._uU(8),t.qZA(),t.TgZ(9,"p",9),t._uU(10),t.qZA()(),t.TgZ(11,"div",10)(12,"div",11)(13,"span",12),t._uU(14,"trip"),t.qZA(),t.TgZ(15,"p",13),t._uU(16),t.qZA()(),t.TgZ(17,"div",11)(18,"span",12),t._uU(19,"airplane_ticket"),t.qZA(),t.TgZ(20,"p",13),t._uU(21),t.qZA()(),t.TgZ(22,"div",11)(23,"span",14),t._uU(24,"location_on"),t.qZA(),t.TgZ(25,"p",13),t._uU(26),t.qZA()(),t.TgZ(27,"div",11)(28,"span",14),t._uU(29,"attach_money"),t.qZA(),t.TgZ(30,"p",13),t._uU(31),t.qZA()(),t._UZ(32,"div"),t.qZA(),t.TgZ(33,"div",15)(34,"p",16),t._uU(35,"Availability"),t.qZA(),t.TgZ(36,"p",17),t._uU(37),t.qZA()(),t.TgZ(38,"div",18)(39,"p",16),t._uU(40,"Relocation"),t.qZA(),t.TgZ(41,"p",17),t._uU(42),t.qZA()()()(),t.TgZ(43,"div",19)(44,"label",20)(45,"input",21),t.NdJ("ngModelChange",function(i){const l=t.CHM(a).$implicit;return t.KtG(l.status=i)})("click",function(i){const l=t.CHM(a).$implicit,x=t.oxw();return t.KtG(x.onStatusChange(i,l))}),t.qZA(),t._UZ(46,"span",22),t.qZA(),t.TgZ(47,"div",23)(48,"div",24),t.NdJ("click",function(){const s=t.CHM(a).$implicit,l=t.oxw();return t.KtG(l.editCandidate(s.id))}),t.TgZ(49,"span",25),t._uU(50,"edit"),t.qZA()(),t.TgZ(51,"div",26),t.NdJ("click",function(){const s=t.CHM(a).$implicit,l=t.oxw();return t.KtG(l.deleteCandidate(s))}),t.TgZ(52,"span",25),t._uU(53,"close"),t.qZA()()()()(),t.TgZ(54,"div",4)(55,"div",27),t.YNc(56,P,2,1,"div",28),t.YNc(57,q,3,0,"div",28),t.qZA(),t.TgZ(58,"div",29)(59,"div",30)(60,"div",31),t._uU(61," Update"),t.TgZ(62,"span",32),t._uU(63," expand_more "),t.qZA()(),t.TgZ(64,"div",33)(65,"div",34),t.NdJ("click",function(){const s=t.CHM(a).$implicit,l=t.oxw();return t.KtG(l.editCandidate(s.id))}),t.TgZ(66,"span",35),t._uU(67,"edit"),t.qZA(),t.TgZ(68,"h6",36),t._uU(69,"Edit"),t.qZA()(),t.TgZ(70,"div",34),t.NdJ("click",function(){const s=t.CHM(a).$implicit,l=t.oxw();return t.KtG(l.deleteCandidate(s))}),t.TgZ(71,"span",35),t._uU(72,"close"),t.qZA(),t.TgZ(73,"h6",36),t._uU(74,"Delete"),t.qZA()()()()()()()(),t.BQk()}if(2&n){const a=o.$implicit,e=t.oxw();t.xp6(8),t.hij(" ",a.candidateName," "),t.xp6(2),t.hij(" ",a.title," "),t.xp6(6),t.hij(" ",a.totalExp," years "),t.xp6(5),t.hij(" ",e.getVisa(a.visaId)," "),t.xp6(5),t.AsE(" ",null==a.city?null:a.city.city1,", ",null==a.city?null:a.city.stateCode," "),t.xp6(5),t.AsE(" ",a.fromAmt," - ",a.toAmt," "),t.xp6(6),t.hij(" ",e.getAvailability(a.availability)," "),t.xp6(5),t.hij(" ",e.getRelocation(a)," "),t.xp6(3),t.s9C("value",a.statusId),t.Q6J("ngModel",a.status),t.xp6(11),t.Q6J("ngIf",e.isSkills(a.candidateProfileSkills)),t.xp6(1),t.Q6J("ngIf",!e.isSkills(a.candidateProfileSkills))}}let J=(()=>{var n;class o{constructor(e,i){this.router=e,this.route=i,this.list=[],this.handleDeleteCandidate=new t.vpe,this.handleStatusChange=new t.vpe}getVisa(e){var i;return g.ZP.some(this.visaList,s=>{s.id==e&&(i=s.name)}),i}getAvailability(e){return e?`${this.availabilityList.filter(s=>s.id==e)[0].name}`:"Not Available"}getRelocation(e){let i=e.candidatePrefLocations,s=[];return g.ZP.isEmpty(i)?e.anyLocation?"Open to relocate to any location":e.remoteOnly?"Looking only remote project":"NA":(i.forEach(l=>{let x=l.cityName.split("-");s.push(x[0])}),s.join(", "))}isSkills(e){return!g.ZP.isEmpty(e)}onStatusChange(e,i){e.preventDefault();const l=2==JSON.parse(e.target.value)?3:2;this.handleStatusChange.emit({statusId:l,item:i})}editCandidate(e){this.router.navigate(["/editcandidate",e])}deleteCandidate(e){this.handleDeleteCandidate.emit(e)}ngOnInit(){}}return(n=o).\u0275fac=function(e){return new(e||n)(t.Y36(p.F0),t.Y36(p.gz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["myhotlist-listview"]],inputs:{list:["filteredHotListData","list"],visaList:"visaList",availabilityList:"availabilityList"},outputs:{handleDeleteCandidate:"handleDeleteCandidate",handleStatusChange:"handleStatusChange"},decls:2,vars:1,consts:[[1,"hotlist-box","list-box"],[4,"ngFor","ngForOf"],[1,"list-group-item","shadow"],[1,"content-area"],[1,"row"],[1,"col-9","col-md-8","top"],[1,"left"],[1,"mb-1","d-md-flex","align-items-center"],[1,"ft-head","text-secondary-600","text-uppercase","text-normal","fw-medium","me-4","name"],[1,"ft-head","text-gray-500","fw-semibold","text-capitalize","text-normal"],[1,"d-md-flex","additional","align-items-center"],[1,"item","d-flex","align-items-center"],[1,"material-symbols-outlined","text-base","text-gray-500","me-2"],[1,"text-sm","fw-semibold","text-gray-700"],[1,"material-symbols-outlined","text-base","text-gray-500","me-1"],[1,"mb-2","d-md-flex"],[1,"me-3","text-sm","text-gray-400"],[1,"text-sm","text-gray-700"],[1,"d-md-flex"],[1,"col-3","col-md-4","d-flex","flex-column","flex-md-row","justify-md-content-end"],[1,"switch","flex-shrink-0"],["type","checkbox",3,"ngModel","value","ngModelChange","click"],[1,"slider","round"],[1,"d-flex","d-md-none","options"],[1,"pointer","me-2","d-flex","text-primary-500",3,"click"],[1,"material-symbols-outlined","text-base"],[1,"pointer","d-flex","text-red-400",3,"click"],[1,"col-sm-12","col-md-8"],["class","skills mt-4",4,"ngIf"],[1,"col-5","col-md-4","d-none","d-md-flex","justify-content-end"],[1,"d-flex","options","mt-2"],["id","optionsBtn","data-bs-toggle","dropdown","aria-expanded","false",1,"btn","btn-secondary","btn-sm","px-3","d-inline-flex","align-items-center"],[1,"material-symbols-outlined","ms-1"],["aria-labelledby","optionsBtn",1,"dropdown-menu"],[1,"px-3","py-2","d-flex","align-items-center","pointer",3,"click"],[1,"material-symbols-outlined","text-base","me-1"],[1,"ms-1","text-sm","fw-medium"],[1,"skills","mt-4"],["class","item text-primary-800 bg-primary-50 text-smr fw-medium",4,"ngFor","ngForOf"],[1,"item","text-primary-800","bg-primary-50","text-smr","fw-medium"],[1,"item","text-red-800","bg-red-50","text-smr","fw-medium"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t.YNc(1,H,75,14,"ng-container",1),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngForOf",i.list))},dependencies:[u.sg,u.O5,v.Wl,v.JJ,v.On]}),o})();function k(n,o){if(1&n){const a=t.EpF();t.TgZ(0,"tr")(1,"td",3),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td")(12,"span",4),t._uU(13),t.qZA()(),t.TgZ(14,"td",5)(15,"div",6)(16,"div",7),t.NdJ("click",function(){const s=t.CHM(a).$implicit,l=t.oxw();return t.KtG(l.editCandidate(s.id))}),t.TgZ(17,"span",8),t._uU(18,"edit"),t.qZA()(),t.TgZ(19,"div",9),t.NdJ("click",function(){const s=t.CHM(a).$implicit,l=t.oxw();return t.KtG(l.deleteCandidate(s))}),t.TgZ(20,"span",8),t._uU(21,"close"),t.qZA()()()()()}if(2&n){const a=o.$implicit,e=t.oxw();t.xp6(2),t.Oqu(a.candidateName),t.xp6(2),t.Oqu(a.title),t.xp6(2),t.hij("",a.totalExp," years"),t.xp6(2),t.Oqu(e.getVisa(a.visaId)),t.xp6(2),t.Oqu(null==a.city?null:a.city.stateCode),t.xp6(3),t.hij(" ",e.getRelocation(a),"")}}let O=(()=>{var n;class o{constructor(e,i){this.router=e,this.route=i,this.list=[],this.handleDeleteCandidate=new t.vpe,this.handleStatusChange=new t.vpe}getVisa(e){var i;return g.ZP.some(this.visaList,s=>{s.id==e&&(i=s.name)}),i}getAvailability(e){return e?`${this.availabilityList.filter(s=>s.id==e)[0].name}`:"Not Available"}getRelocation(e){let i=e.candidatePrefLocations,s=[];return g.ZP.isEmpty(i)?e.anyLocation?"Open to relocate to any location":e.remoteOnly?"Looking only remote project":"NA":(i.forEach(l=>{let x=l.cityName.split("-");s.push(x[0])}),s.join(", "))}isSkills(e){return!g.ZP.isEmpty(e)}onStatusChange(e,i){e.preventDefault();const l=2==JSON.parse(e.target.value)?3:2;this.handleStatusChange.emit({statusId:l,item:i})}editCandidate(e){this.router.navigate(["/editcandidate",e])}deleteCandidate(e){this.handleDeleteCandidate.emit(e)}}return(n=o).\u0275fac=function(e){return new(e||n)(t.Y36(p.F0),t.Y36(p.gz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["myhotlist-tableview"]],inputs:{list:["filteredHotListData","list"],visaList:"visaList",availabilityList:"availabilityList"},outputs:{handleDeleteCandidate:"handleDeleteCandidate",handleStatusChange:"handleStatusChange"},decls:20,vars:1,consts:[[1,"hotlist-box","table-box"],[1,"table","table-bordered"],[4,"ngFor","ngForOf"],[1,"fw-semibold"],[1,"overflow"],[1,"text-center"],[1,"d-inline-block"],[1,"pointer","mt-2","me-2","d-inline-flex","text-primary-500",3,"click"],[1,"material-symbols-outlined","text-base"],[1,"pointer","mt-2","d-inline-flex","text-red-400",3,"click"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"table",1)(2,"thead")(3,"tr")(4,"th"),t._uU(5,"Name"),t.qZA(),t.TgZ(6,"th"),t._uU(7,"Technology"),t.qZA(),t.TgZ(8,"th"),t._uU(9,"Years"),t.qZA(),t.TgZ(10,"th"),t._uU(11,"Visa"),t.qZA(),t.TgZ(12,"th"),t._uU(13,"Location"),t.qZA(),t.TgZ(14,"th"),t._uU(15,"Preference"),t.qZA(),t.TgZ(16,"th"),t._uU(17,"Actions"),t.qZA()()(),t.TgZ(18,"tbody"),t.YNc(19,k,22,6,"tr",2),t.qZA()()()),2&e&&(t.xp6(19),t.Q6J("ngForOf",i.list))},dependencies:[u.sg]}),o})();function E(n,o){1&n&&(t.ynx(0),t.TgZ(1,"div",5),t._UZ(2,"div",6),t.qZA(),t.BQk())}function F(n,o){if(1&n&&(t.TgZ(0,"div"),t._uU(1),t.qZA()),2&n){const a=t.oxw(2);t.xp6(1),t.hij(" You have ",a.totalItems," candidates in your Hotlist ")}}function N(n,o){1&n&&(t.TgZ(0,"div"),t._uU(1,"No candidates Available"),t.qZA())}function z(n,o){if(1&n){const a=t.EpF();t.TgZ(0,"myhotlist-listview",24),t.NdJ("handleDeleteCandidate",function(i){t.CHM(a);const s=t.oxw(2);return t.KtG(s.deleteCandidate(i))})("handleStatusChange",function(i){t.CHM(a);const s=t.oxw(2);return t.KtG(s.onStatusChange(i))}),t.qZA()}if(2&n){const a=t.oxw(2);t.Q6J("filteredHotListData",a.filteredHotListData)("visaList",a.visaList)("availabilityList",a.selectAvailabilityList)}}function I(n,o){if(1&n){const a=t.EpF();t.TgZ(0,"myhotlist-tableview",24),t.NdJ("handleDeleteCandidate",function(i){t.CHM(a);const s=t.oxw(2);return t.KtG(s.deleteCandidate(i))})("handleStatusChange",function(i){t.CHM(a);const s=t.oxw(2);return t.KtG(s.onStatusChange(i))}),t.qZA()}if(2&n){const a=t.oxw(2);t.Q6J("filteredHotListData",a.filteredHotListData)("visaList",a.visaList)("availabilityList",a.selectAvailabilityList)}}const Y=function(){return{exact:!0}};function j(n,o){if(1&n){const a=t.EpF();t.ynx(0),t.TgZ(1,"div",7)(2,"h5",8),t.YNc(3,F,2,1,"div",4),t.YNc(4,N,2,0,"div",4),t.qZA(),t.TgZ(5,"div",9)(6,"a",10)(7,"span",11),t._uU(8," add_circle "),t.qZA(),t._uU(9,"Add Candidate"),t.qZA()()(),t.TgZ(10,"div",12)(11,"div",13)(12,"form")(13,"div",14)(14,"div",15)(15,"div",16)(16,"input",17),t.NdJ("ngModelChange",function(i){t.CHM(a);const s=t.oxw();return t.KtG(s.searchData=i)})("input",function(){t.CHM(a);const i=t.oxw();return t.KtG(i.onSearchData())}),t.qZA(),t.TgZ(17,"span",18),t._UZ(18,"i",19),t.qZA()()()()()(),t.TgZ(19,"div",20)(20,"div",21),t.NdJ("click",function(){t.CHM(a);const i=t.oxw();return t.KtG(i.handleViewType("table"))}),t.TgZ(21,"span",22),t._uU(22,"table_chart"),t.qZA(),t._uU(23,"View table "),t.qZA(),t.TgZ(24,"div",21),t.NdJ("click",function(){t.CHM(a);const i=t.oxw();return t.KtG(i.handleViewType("list"))}),t.TgZ(25,"span",22),t._uU(26,"data_table"),t.qZA(),t._uU(27,"Detailed List "),t.qZA()()(),t.YNc(28,z,1,3,"myhotlist-listview",23),t.YNc(29,I,1,3,"myhotlist-tableview",23),t.BQk()}if(2&n){const a=t.oxw();t.xp6(3),t.Q6J("ngIf",a.isJobAvailable),t.xp6(1),t.Q6J("ngIf",!a.isJobAvailable),t.xp6(2),t.Q6J("routerLinkActiveOptions",t.DdM(8,Y)),t.xp6(10),t.Q6J("ngModel",a.searchData),t.xp6(4),t.Q6J("ngClass",a.isTableView?"btn-secondary no-pointer":"btn-outline-secondary text-secondary-500"),t.xp6(4),t.Q6J("ngClass",a.isListView?"btn-secondary no-pointer":"btn-outline-secondary text-secondary-500"),t.xp6(4),t.Q6J("ngIf",a.isListView),t.xp6(1),t.Q6J("ngIf",a.isTableView)}}function Q(n,o){if(1&n&&(t.ynx(0),t.TgZ(1,"div",25),t._uU(2),t.qZA(),t.BQk()),2&n){const a=t.oxw();t.xp6(2),t.hij(" ",a.error," ")}}const R=[{path:"",component:(()=>{var n;class o{constructor(e,i,s,l,x,A,B){this.router=e,this.route=i,this.dialog=s,this.commonService=l,this.sessionService=x,this.candidateProfileService=A,this.toastr=B,this.isJobLoaded=!1,this.isJobAvailable=!1,this.isError=!1,this.error="",this.initialHotListData=[],this.filteredHotListData=[],this.isMobile=!1,this.selectedCandidateId=-1,this.selectAvailabilityList=[],this.searchData="",this.isListView=!1,this.isTableView=!1,this.candidateDetailsChanged=new t.vpe,e.events.subscribe(G=>{if(G instanceof p.m2){const L=this.route.snapshot.queryParams;g.o8(L.view)?(this.router.navigate([],{queryParamsHandling:"merge",queryParams:{view:"list"}}),this.isListView=!0,this.isTableView=!1):"table"==L.view?(this.isListView=!1,this.isTableView=!0):(this.isListView=!0,this.isTableView=!1)}})}getParams(e){this.isActiveCandidate=e.active,this.totalExp=e.experience}onSearchData(){this.filteredHotListData=this.initialHotListData.filter(e=>this.isMatch(e,this.searchData))}isMatch(e,i){return i=i.toLowerCase(),e.candidateName.toLowerCase().includes(i)||e.title.toLowerCase().includes(i)||e.candidateProfileSkills.some(s=>s.name.toLowerCase().includes(i))}showCandidateDetaislModal(){this.dialog.open(f,{panelClass:"material",disableClose:!0,data:this.selectedCandidateDetails})}onResize(e){e.target.innerWidth<=991?(this.isMobile=!0,this.router.navigate([],{queryParamsHandling:"merge",queryParams:{view:"list"}})):this.isMobile=!1}isSelected(e){return this.selectedCandidateId==e?"selected":""}showCandidateDescription(e){this.selectedCandidateId=e.id,this.selectedCandidateDetails=e,this.candidateDetailsChanged.emit(this.selectedCandidateDetails)}onStatusChange({statusId:e,item:i}){this.switchConfirmation(e,i)}switchConfirmation(e,i){this.dialog.open(d,{panelClass:"material",disableClose:!0,data:e}).afterClosed().subscribe(l=>{l&&this.candidateProfileService.apiCandidateProfileActivateOrDeActivatePut(i.id,!0,e).subscribe({next:x=>{x.value&&(this.filteredHotListData.map(A=>(A.id==i.id&&(i.statusId=e,i.status=2==i.statusId),i)),setTimeout(()=>{this.toastr.success(`Marketing ${2==e?"activated":"deactivated"} successfully`,"",{timeOut:5e3,positionClass:"toast-top-center"})},200))},error:x=>{this.toastr.error("Some error occured","",{timeOut:5e3,positionClass:"toast-top-center"})}})})}handleViewType(e){this.router.navigate([],{queryParamsHandling:"merge",queryParams:{view:e}})}deleteCandidate(e){this.dialog.open(_,{panelClass:"material",disableClose:!0}).afterClosed().subscribe(s=>{s&&this.candidateProfileService.apiCandidateProfileActivateOrDeActivatePut(e.id,!1,e.statusId).subscribe({next:l=>{l.value&&(this.filteredHotListData=this.filteredHotListData.filter(x=>x.id!=e.id),this.toastr.success("Candidate deleted successfully","",{timeOut:5e3,positionClass:"toast-top-center"}))},error:l=>{this.toastr.error("Some error occured","",{timeOut:5e3,positionClass:"toast-top-center"})}})})}ngOnInit(){this.isMobile=window.innerWidth<=991,this.candidateProfileService.apiCandidateProfileGetByConsultancyUserGet(this.sessionService.consultancyId).subscribe({next:e=>{this.initialHotListData=e.value.filter(i=>i.active),this.initialHotListData.map(i=>{i.status=2==i.statusId}),this.filteredHotListData=this.initialHotListData,this.filteredHotListData.length>0?(this.isJobAvailable=!0,this.isJobLoaded=!0):(this.isJobAvailable=!1,this.isJobLoaded=!0)},error:e=>{this.isJobLoaded=!0,this.isJobLoaded=!0,this.isError=!0,this.error="Some error occurred"}}),this.candidateDetailsChanged.subscribe(e=>{this.isMobile&&this.showCandidateDetaislModal()}),this.commonService.apiCommonVisaGet().subscribe({next:e=>{this.visaList=e.value},error:e=>{}}),this.commonService.apiCommonCandidateAvailabilityGet().subscribe({next:e=>{this.selectAvailabilityList=e.value},error:e=>{}})}}return(n=o).\u0275fac=function(e){return new(e||n)(t.Y36(p.F0),t.Y36(p.gz),t.Y36(m.uw),t.Y36(C.v_),t.Y36(y.m),t.Y36(M.M),t.Y36(S._W))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-myhotlist"]],hostBindings:function(e,i){1&e&&t.NdJ("resize",function(l){return i.onResize(l)},!1,t.Jf7)},features:[t._Bn([{provide:m.so,useValue:{}}])],decls:7,vars:3,consts:[[1,"my-hotlist-wrapper"],[1,"container"],[1,"row"],[1,"col-sm-12"],[4,"ngIf"],[1,"loader-wrapper"],[1,"pre-loader"],[1,"title-box"],[1,"title"],[1,"btn-wrapper","ms-auto"],["routerLink","/addcandidate","routerLinkActive","active",1,"btn","add-candidate-btn","shadow","align-items-center","justify-content-center","d-flex",3,"routerLinkActiveOptions"],[1,"material-symbols-outlined","me-1"],[1,"options-wrapper"],[1,"search-results"],[1,"input-box","mb-0"],[1,"form-group","mb-0"],[1,"input-group"],["type","text","id","searchData","name","searchData","placeholder","Search by name, skills, job title",1,"form-control",3,"ngModel","ngModelChange","input"],[1,"input-group-text"],[1,"fa","fa-search"],[1,"options","d-none","d-lg-block"],[1,"btn","view-btn","d-inline-flex","align-items-center",3,"ngClass","click"],[1,"material-symbols-outlined","me-2"],[3,"filteredHotListData","visaList","availabilityList","handleDeleteCandidate","handleStatusChange",4,"ngIf"],[3,"filteredHotListData","visaList","availabilityList","handleDeleteCandidate","handleStatusChange"],[1,"mt-2","alert","alert-danger"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t.YNc(4,E,3,0,"ng-container",4),t.YNc(5,j,30,9,"ng-container",4),t.YNc(6,Q,3,1,"ng-container",4),t.qZA()()()()),2&e&&(t.xp6(4),t.Q6J("ngIf",!i.isJobLoaded),t.xp6(1),t.Q6J("ngIf",i.isJobLoaded&&!i.isError),t.xp6(1),t.Q6J("ngIf",i.isError))},dependencies:[u.mk,u.O5,v._Y,v.Fj,v.JJ,v.JL,v.On,v.F,p.rH,p.Od,J,O]}),o})()}];let V=(()=>{var n;class o{}return(n=o).\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[p.Bz.forChild(R),p.Bz]}),o})(),K=(()=>{var n;class o{}return(n=o).\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[u.ez,Z.m.forRoot(),w.w,V]}),o})()},414:(D,b,r)=>{r.d(b,{w:()=>p});var u=r(6814),Z=r(4574),w=r(5879);let p=(()=>{var t;class m{}return(t=m).\u0275fac=function(T){return new(T||t)},t.\u0275mod=w.oAB({type:t}),t.\u0275inj=w.cJS({imports:[u.ez,Z.m.forRoot()]}),m})()}}]);