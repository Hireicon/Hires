"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[592],{2870:(T,_,c)=>{c.d(_,{b:()=>o});var e=c(5879),m=c(6223),f=c(6814),u=c(674);const g=["multiInputElem"],x=["badgeListElem"];function C(t,l){1&t&&(e.TgZ(0,"span",12),e._uU(1,"*"),e.qZA())}function I(t,l){if(1&t){const a=e.EpF();e.ynx(0),e.TgZ(1,"li",16),e.NdJ("click",function(){const s=e.CHM(a).$implicit,p=e.oxw(2);return e.KtG(p.handleSelectedItem(s))}),e._uU(2),e.qZA(),e.BQk()}if(2&t){const a=l.$implicit,n=e.oxw(2);e.xp6(2),e.Oqu(n.getItemData(a))}}function d(t,l){if(1&t&&(e.TgZ(0,"div",13)(1,"div",14),e.YNc(2,I,3,1,"ng-container",15),e.qZA()()),2&t){const a=e.oxw();e.xp6(2),e.Q6J("ngForOf",a.fieldList)}}function h(t,l){if(1&t){const a=e.EpF();e.TgZ(0,"li",17)(1,"span"),e._uU(2),e.qZA(),e.TgZ(3,"i",18),e.NdJ("click",function(){const s=e.CHM(a).$implicit,p=e.oxw();return e.KtG(p.removeBadge(s))}),e.qZA()()}if(2&t){const a=l.$implicit,n=e.oxw();e.xp6(2),e.Oqu(n.getSelectedItemData(a,n.fieldType))}}const r=function(t,l,a){return{"padding-left.px":t,"padding-top.px":l,"text-indent.px":a}};let o=(()=>{var t;class l{constructor(n){this.cdRef=n,this.fieldItemMinLimit=0,this.fieldItemMaxLimit=5,this.selectedItem=[],this.isExpanded=!1,this.leftPadding=10,this.topPadding=4,this.forceRequired="",this.queryChange=new e.vpe,this.inputChange=new e.vpe}isFieldRequired(){return this.fieldRequired}getItemData(n){let i=this.fieldType.split(","),s="";return i.forEach((p,M)=>{s=`${s+n[p]}${M!==i.length-1?", ":""}`}),s}handleModelChange(){this.fieldModel.length>1?(this.isExpanded=!0,this.queryChange.emit(this.fieldModel)):this.isExpanded=!1}compareObj(n,i){return JSON.stringify(n)===JSON.stringify(i)}pushObj(n,i){n.some(s=>this.compareObj(s,i))||n.push(i)}handleInputHeight(){let n=this.multiInputElem.nativeElement,i=this.badgeListElem.nativeElement;n.style.height=`${i.clientHeight+10}px`;const p=i.children[0].children,M=p[p.length-1];if(M){const S=M.offsetTop+2;this.leftPadding=M.offsetLeft+M.clientWidth+12,this.topPadding=S}else this.leftPadding=10,this.topPadding=4;n.focus()}handleSelectedItem(n){this.selectedItem.length<this.fieldItemMaxLimit&&(this.pushObj(this.selectedItem,n),this.inputChange.emit(this.selectedItem),console.log(this.selectedItem),this.fieldModel="",this.isExpanded=!1,setTimeout(()=>{this.handleInputHeight()},100)),this.selectedItem.length==this.fieldItemMaxLimit&&setTimeout(()=>{this.fieldModel="",this.multiInputElem.nativeElement.blur()},100)}handleTextIndent(){return this.selectedItem.length==this.fieldItemMaxLimit?-2e3:0}getSelectedItemData(n,i){let s=i.split(","),p="";return s.forEach((M,E)=>{p=`${p+n[M]}${E!==s.length-1?", ":""}`}),p}removeBadge(n){this.fieldModel="",this.selectedItem=this.selectedItem.filter((i,s)=>i[this.fieldType]!==n[this.fieldType]),this.inputChange.emit(this.selectedItem),setTimeout(()=>{this.handleInputHeight()},100)}clearModel(){this.fieldModel="",this.checkRequired()}checkRequired(){return!(this.selectedItem.length>=this.fieldItemMinLimit)}ngOnInit(){}ngOnChanges(n){this.isEdit&&this.editValue&&!this.fieldModel&&this.editValue.forEach(i=>{this.handleSelectedItem(i)})}}return(t=l).\u0275fac=function(n){return new(n||t)(e.Y36(e.sBO))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-multi-search-field"]],viewQuery:function(n,i){if(1&n&&(e.Gf(g,5),e.Gf(x,5)),2&n){let s;e.iGM(s=e.CRH())&&(i.multiInputElem=s.first),e.iGM(s=e.CRH())&&(i.badgeListElem=s.first)}},inputs:{fieldName:"fieldName",fieldText:"fieldText",fieldPlaceholder:"fieldPlaceholder",fieldModel:"fieldModel",fieldRequired:"fieldRequired",fieldList:"fieldList",fieldType:"fieldType",fieldItemMinLimit:"fieldItemMinLimit",fieldItemMaxLimit:"fieldItemMaxLimit",isEdit:"isEdit",editValue:"editValue"},outputs:{queryChange:"queryChange",inputChange:"inputChange"},features:[e._Bn([],[{provide:m.gN,useExisting:m.F}]),e.TTD],decls:13,vars:14,consts:[[1,"form-group"],[3,"for"],["class","ms-2 font-medium",4,"ngIf"],["type","text","autocomplete","off",1,"form-control","search","multi-search",3,"placeholder","name","ngModel","required","ngStyle","ngModelChange","blur"],["multiInputElem",""],[1,"search-control"],["aria-hidden","true",1,"fa","fa-search"],["class","dropdown-wrapper show",4,"ngIf"],[1,"badge-list"],["badgeListElem",""],[1,"list-inline"],["class","list-inline-item",4,"ngFor","ngForOf"],[1,"ms-2","font-medium"],[1,"dropdown-wrapper","show"],[1,"list-group","dropdown"],[4,"ngFor","ngForOf"],[1,"list-group-item",3,"click"],[1,"list-inline-item"],["aria-hidden","true",1,"fa","fa-times","pointer",3,"click"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0)(1,"label",1),e._uU(2),e.YNc(3,C,2,0,"span",2),e.qZA(),e.TgZ(4,"input",3,4),e.NdJ("ngModelChange",function(p){return i.fieldModel=p})("ngModelChange",function(){return i.handleModelChange()})("blur",function(){return i.clearModel()}),e.qZA(),e.TgZ(6,"span",5),e._UZ(7,"i",6),e.qZA(),e.YNc(8,d,3,1,"div",7),e.TgZ(9,"div",8,9)(11,"ul",10),e.YNc(12,h,4,1,"li",11),e.qZA()()()),2&n&&(e.xp6(1),e.s9C("for",i.fieldName),e.xp6(1),e.Oqu(i.fieldText),e.xp6(1),e.Q6J("ngIf",i.isFieldRequired()),e.xp6(1),e.s9C("placeholder",i.fieldPlaceholder),e.s9C("name",i.fieldName),e.Q6J("ngModel",i.fieldModel)("required",i.checkRequired())("ngStyle",e.kEZ(10,r,i.leftPadding,i.topPadding,i.handleTextIndent())),e.xp6(4),e.Q6J("ngIf",i.isExpanded),e.xp6(4),e.Q6J("ngForOf",i.selectedItem))},dependencies:[f.sg,f.O5,f.PC,m.Fj,m.JJ,m.Q7,m.On,u.Co]}),l})()},1735:(T,_,c)=>{c.d(_,{s:()=>I});var e=c(5879),m=c(6814);function f(d,h){if(1&d){const r=e.EpF();e.TgZ(0,"li",9)(1,"a",10),e.NdJ("click",function(){e.CHM(r);const t=e.oxw();return e.KtG(t.gotoPageNum(t.itemPageIndex-1))}),e._UZ(2,"i",11),e.qZA()()}}function u(d,h){if(1&d){const r=e.EpF();e.TgZ(0,"li",9)(1,"a",12),e.NdJ("click",function(){e.CHM(r);const t=e.oxw().$implicit,l=e.oxw();return e.KtG(l.gotoPageNum(t))}),e._uU(2),e.qZA()()}if(2&d){const r=e.oxw().$implicit,o=e.oxw();e.xp6(1),e.Q6J("ngClass",o.isPageNumActive(r)),e.xp6(1),e.Oqu(r)}}function g(d,h){1&d&&(e.TgZ(0,"li",9)(1,"a",13),e._uU(2,"..."),e.qZA()())}function x(d,h){if(1&d&&(e.ynx(0),e.YNc(1,u,3,2,"li",7),e.YNc(2,g,3,0,"li",7),e.BQk()),2&d){const r=h.$implicit;e.xp6(1),e.Q6J("ngIf",0!=r),e.xp6(1),e.Q6J("ngIf",0==r)}}function C(d,h){if(1&d){const r=e.EpF();e.TgZ(0,"li",9)(1,"a",14),e.NdJ("click",function(){e.CHM(r);const t=e.oxw();return e.KtG(t.gotoPageNum(t.itemPageIndex+1))}),e._UZ(2,"i",15),e.qZA()()}}let I=(()=>{var d;class h{constructor(o,t){this.element=o,this.renderer=t,this.itemPageIndex=1,this.visiblePageNum=7,this.isPageRowSelected=!1,this.outputParams=new e.vpe}isPageNumActive(o){return this.itemPageIndex==o?"active":""}getPageList(o,t,l){var a=l<9?1:2,n=l-2*a-3>>1,i=l-2*a-2>>1;return o<=l?this.range(1,o):t<=l-a-1-i?this.range(1,l-a-1).concat([0]).concat(this.range(o-a+1,o)):t>=o-a-1-i?this.range(1,a).concat([0]).concat(this.range(o-a-1-i-n,o)):this.range(1,a).concat([0]).concat(this.range(t-n,t+i)).concat([0]).concat(this.range(o-a+1,o))}range(o,t){return Array.from(Array(t-o+1),(l,a)=>a+o)}gotoPageNum(o){this.itemPageIndex=o,this.ItemStartIndex=o>1?this.itemLimit*o-this.itemLimit:0,this.ItemEndIndex=this.itemLimit*o,this.ItemEndIndex>this.totalItems&&(this.ItemEndIndex=this.totalItems),this.outputParams.emit({ItemStartIndex:this.ItemStartIndex,ItemEndIndex:this.ItemEndIndex,itemLimit:this.itemLimit})}showPageList(){this.isPageRowSelected=!0}selectPageItem(o){this.itemLimit=parseInt(o),this.isPageRowSelected=!1,this.gotoPageNum(1)}isSelected(o){return this.itemLimit==parseInt(o)?"selected":""}ngOnInit(){this.pageRowsDataList=[{id:1,name:"10"},{id:2,name:"20"},{id:3,name:"30"},{id:4,name:"40"},{id:4,name:"50"}]}onDocumentClick(o){this.element.nativeElement.querySelector(".page-select-wrapper").contains(o.target)||(this.isPageRowSelected=!1)}ngOnChanges(o){this.ItemStartIndex=this.itemPageIndex>1?this.itemLimit*this.itemPageIndex-this.itemLimit:0,this.totalItems<this.itemLimit?(this.totalPages=1,this.ItemStartIndex=0,this.ItemEndIndex=this.totalItems):(this.totalPages=Math.floor(this.totalItems/this.itemLimit),this.totalItems%this.itemLimit>0&&(this.totalPages=this.totalPages+1),this.totalPages<this.itemPageIndex&&(this.itemPageIndex=this.totalPages,this.gotoPageNum(this.itemPageIndex))),this.pageItemArray=this.getPageList(this.totalPages,this.itemPageIndex,this.visiblePageNum)}}return(d=h).\u0275fac=function(o){return new(o||d)(e.Y36(e.SBq),e.Y36(e.Qsj))},d.\u0275cmp=e.Xpm({type:d,selectors:[["app-pagination-box"]],hostBindings:function(o,t){1&o&&e.NdJ("click",function(a){return t.onDocumentClick(a)},!1,e.evT)},inputs:{ItemStartIndex:"ItemStartIndex",ItemEndIndex:"ItemEndIndex",itemLimit:"itemLimit",totalItems:"totalItems"},outputs:{outputParams:"outputParams"},features:[e.TTD],decls:13,vars:6,consts:[[1,"pagination-wrapper"],[1,"pagination","shadow","d-flex"],[1,"left","d-none","d-md-flex","flex-shrink-0"],[1,"page-select-wrapper"],[1,"page-item-select",3,"click"],[1,"ms-auto","page-numbers"],[1,"list-inline","float-right"],["class","list-inline-item",4,"ngIf"],[4,"ngFor","ngForOf"],[1,"list-inline-item"],["href","javascript:void(0)",1,"prev",3,"click"],["aria-hidden","true",1,"fa","fa-angle-left"],["href","javascript:void(0)",3,"ngClass","click"],["href","javascript:void(0)",1,"holder"],["href","javascript:void(0)",1,"next",3,"click"],["aria-hidden","true",1,"fa","fa-angle-right"]],template:function(o,t){1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._uU(3," Showing\xa0\xa0 "),e.TgZ(4,"div",3)(5,"div",4),e.NdJ("click",function(){return t.showPageList()}),e._uU(6),e.qZA()(),e._uU(7),e.qZA(),e.TgZ(8,"div",5)(9,"ul",6),e.YNc(10,f,3,0,"li",7),e.YNc(11,x,3,2,"ng-container",8),e.YNc(12,C,3,0,"li",7),e.qZA()()()()),2&o&&(e.xp6(6),e.AsE("",t.ItemStartIndex+1," to ",t.ItemEndIndex,""),e.xp6(1),e.hij(" \xa0of\xa0",t.totalItems," results "),e.xp6(3),e.Q6J("ngIf",1!=t.itemPageIndex),e.xp6(1),e.Q6J("ngForOf",t.pageItemArray),e.xp6(1),e.Q6J("ngIf",t.itemPageIndex!=t.totalPages))},dependencies:[m.mk,m.sg,m.O5],styles:[".text-xs{font-size:12px}.text-smr{font-size:13px}.text-sm{font-size:14px}.text-base{font-size:18px}.text-normal{font-size:16px}.text-regular{font-size:15px}h6,.text-h6{font-size:20px}h5,.text-h5{font-size:22px}h4,.text-h4{font-size:24px}h3,.text-h3{font-size:30px}h2,.text-h2{font-size:34px}h1,.text-h1{font-size:36px}.text-huge{font-size:50px}.text-big{font-size:38px}.ft-head,.pagination-wrapper .pagination{font-family:Metropolis,sans-serif;letter-spacing:.5px}.ft-default{font-family:Open Sans,sans-serif;font-weight:400;letter-spacing:.4px}.ft-sp{font-family:Catamaran,sans-serif}.fw-light{font-weight:300}.fw-normal{font-weight:400}.fw-medium{font-weight:500}.fw-semibold{font-weight:600}.fw-bold{font-weight:700}.ls--2{letter-spacing:.2px}.ls--25{letter-spacing:.25px}.ls--4{letter-spacing:.4px}.ls--15{letter-spacing:1.5px}.lh-14{line-height:14px}.pagination-wrapper .pagination{display:inline-block;width:100%;font-size:14px;margin:20px 0 0!important;background-color:#fff;border-radius:4px!important;overflow:hidden}.pagination-wrapper .pagination .left{color:#4b5563;padding:12px 16px;position:relative;top:2px}.pagination-wrapper .pagination .left .num{color:#4b5563}@media (max-width: 767px){.pagination-wrapper .pagination .left{padding:0 0 20px}}@media (max-width: 767px){.pagination-wrapper .pagination .page-numbers{width:100%;display:flex;justify-content:center}}.pagination-wrapper .pagination .page-numbers h5,.pagination-wrapper .pagination .page-numbers a{color:#4b5563}.pagination-wrapper .pagination .page-numbers h5{margin:0 10px 0 0;font-size:14px}.pagination-wrapper .pagination .page-numbers li{margin-right:0}.pagination-wrapper .pagination .page-numbers li a{display:block;padding:12px 18px;transition:all .15s ease;color:#1f2937;border-right:1px solid #d1d5db}.pagination-wrapper .pagination .page-numbers li a:hover,.pagination-wrapper .pagination .page-numbers li a.active{color:#fff;background-color:#9ca3af;transition:all .15s ease;border-right:1px solid #d1d5db}.pagination-wrapper .pagination .page-numbers li a.prev,.pagination-wrapper .pagination .page-numbers li a.next{color:#9ca3af;padding:6px 18px;border:none;font-size:18px}.pagination-wrapper .pagination .page-numbers li a.prev:hover,.pagination-wrapper .pagination .page-numbers li a.next:hover{color:#4b5563;background-color:transparent}.pagination-wrapper .pagination .page-numbers li:last-child a{border-right:none}.pagination-wrapper .pagination .page-numbers li:last-child a:hover,.pagination-wrapper .pagination .page-numbers li:last-child a.active{border-right:none}\n"],encapsulation:2}),h})()},8473:(T,_,c)=>{c.d(_,{r:()=>h});var e=c(5879),m=c(6223),f=c(6814),u=c(674);function g(r,o){1&r&&(e.TgZ(0,"span",8),e._uU(1,"*"),e.qZA())}function x(r,o){1&r&&e._UZ(0,"i",9)}function C(r,o){1&r&&e._UZ(0,"i",10)}function I(r,o){if(1&r){const t=e.EpF();e.ynx(0),e.TgZ(1,"li",14),e.NdJ("click",function(){const n=e.CHM(t).$implicit,i=e.oxw(2);return e.KtG(i.getSelectedItem(n))}),e._uU(2),e.qZA(),e.BQk()}if(2&r){const t=o.$implicit,l=e.oxw(2);e.xp6(2),e.Oqu(l.getItemData(t))}}function d(r,o){if(1&r&&(e.TgZ(0,"div",11)(1,"div",12),e.YNc(2,I,3,1,"ng-container",13),e.qZA()()),2&r){const t=e.oxw();e.xp6(2),e.Q6J("ngForOf",t.fieldList)}}let h=(()=>{var r;class o{constructor(l){this.element=l,this.selectedItem=null,this.isItemSelected=!1,this.isExpanded=!1,this.queryChange=new e.vpe,this.inputChange=new e.vpe}isFieldRequired(){return this.fieldRequired}getItemData(l){let a=this.fieldType.split(","),n="";return a.forEach((i,s)=>{n=`${n+l[i]}${s!==a.length-1?", ":""}`}),n}getSelectedItem(l){let a=this.fieldType.split(","),n="";a.forEach((i,s)=>{n=`${n+l[i]}${s!==a.length-1?", ":""}`}),this.fieldModel=n,this.inputChange.emit(l),this.selectedItem=l}clearList(){this.fieldModel="",this.selectedItem=null}handleModelChange(){this.fieldModel.length>1?(this.isExpanded=!0,this.queryChange.emit(this.fieldModel)):this.isExpanded=!1}ngOnInit(){}ngOnChanges(l){if(this.isEdit&&this.editValue&&!this.fieldModel){let a=this.fieldType.split(","),n="";a.forEach((i,s)=>{n=`${n+this.editValue[i]}${s!==a.length-1?", ":""}`}),this.fieldModel=n,this.inputChange.emit(this.editValue)}}}return(r=o).\u0275fac=function(l){return new(l||r)(e.Y36(e.SBq))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-search-field"]],inputs:{fieldName:"fieldName",fieldText:"fieldText",fieldPlaceholder:"fieldPlaceholder",fieldModel:"fieldModel",fieldRequired:"fieldRequired",fieldList:"fieldList",fieldType:"fieldType",isEdit:"isEdit",editValue:"editValue"},outputs:{queryChange:"queryChange",inputChange:"inputChange"},features:[e._Bn([],[{provide:m.gN,useExisting:m.F}]),e.TTD],decls:9,vars:10,consts:[[1,"form-group"],[3,"for"],["class","ms-2 font-medium",4,"ngIf"],["type","text","autocomplete","off",1,"form-control","search",3,"placeholder","name","ngModel","required","ngModelChange"],[1,"search-control",3,"click"],["class","fa fa-search","aria-hidden","true",4,"ngIf"],["class","fa fa-times pointer","aria-hidden","true",4,"ngIf"],["class","dropdown-wrapper show",4,"ngIf"],[1,"ms-2","font-medium"],["aria-hidden","true",1,"fa","fa-search"],["aria-hidden","true",1,"fa","fa-times","pointer"],[1,"dropdown-wrapper","show"],[1,"list-group","dropdown"],[4,"ngFor","ngForOf"],[1,"list-group-item",3,"click"]],template:function(l,a){1&l&&(e.TgZ(0,"div",0)(1,"label",1),e._uU(2),e.YNc(3,g,2,0,"span",2),e.qZA(),e.TgZ(4,"input",3),e.NdJ("ngModelChange",function(i){return a.fieldModel=i})("ngModelChange",function(){return a.handleModelChange()}),e.qZA(),e.TgZ(5,"span",4),e.NdJ("click",function(){return a.clearList()}),e.YNc(6,x,1,0,"i",5),e.YNc(7,C,1,0,"i",6),e.qZA(),e.YNc(8,d,3,1,"div",7),e.qZA()),2&l&&(e.xp6(1),e.s9C("for",a.fieldName),e.xp6(1),e.Oqu(a.fieldText),e.xp6(1),e.Q6J("ngIf",a.isFieldRequired()),e.xp6(1),e.s9C("placeholder",a.fieldPlaceholder),e.s9C("name",a.fieldName),e.Q6J("ngModel",a.fieldModel)("required",a.fieldRequired),e.xp6(2),e.Q6J("ngIf",!a.selectedItem),e.xp6(1),e.Q6J("ngIf",a.selectedItem),e.xp6(1),e.Q6J("ngIf",a.isExpanded))},dependencies:[f.sg,f.O5,m.Fj,m.JJ,m.Q7,m.On,u.Co]}),o})()},8464:(T,_,c)=>{c.d(_,{j:()=>o});var e=c(5879),m=c(773),f=c(1331),u=c(6814),g=c(6223),x=c(3760);const C=["searchJobSkill"],I=["searchJobLocation"],d=["searchJobsForm"];function h(t,l){if(1&t){const a=e.EpF();e.ynx(0,20),e.TgZ(1,"li",21),e.NdJ("click",function(){const s=e.CHM(a).$implicit,p=e.oxw();return e.KtG(p.getSkill(s.name,s.id))}),e._uU(2),e.qZA(),e.BQk()}if(2&t){const a=l.$implicit;e.xp6(2),e.Oqu(a.name)}}function r(t,l){if(1&t){const a=e.EpF();e.ynx(0,20),e.TgZ(1,"li",21),e.NdJ("click",function(){const s=e.CHM(a).$implicit,p=e.oxw();return e.KtG(p.getLocation(s.city1,s.stateName,s.countryName,s.id))}),e._uU(2),e.qZA(),e.BQk()}if(2&t){const a=l.$implicit;e.xp6(2),e.lnq("",a.city1,", ",a.stateName,", ",a.countryName,"")}}let o=(()=>{var t;class l{constructor(n,i,s,p){this.commonService=n,this.router=i,this.element=s,this.renderer=p,this.jobSkillName="",this.jobLocationName="",this.skillList=[],this.locationList=[],this.charLength=2}submitJobsForm(){this.router.navigate(["/jobsearch"],{queryParams:{skill:this.jobSkillName,sid:this.skillId,location:this.jobLocationName,lid:this.locationId}})}onDocumentClick(n){const i=this.jobSearchDropdown.classList.contains("show");this.jobElement.contains(n.target)||i&&this.renderer.removeClass(this.jobSearchDropdown,"show");const s=this.locationSearchDropdown.classList.contains("show");this.locationElement.contains(n.target)||s&&this.renderer.removeClass(this.locationSearchDropdown,"show")}getSkill(n,i){this.jobSkillName=n,this.skillId=i}getLocation(n,i,s,p){this.jobLocationName=n+" ,"+i+" ,"+s,this.locationId=p}handleSearchJobSkill(){this.jobSkillName.length>this.charLength?(this.renderer.addClass(this.jobSearchDropdown,"show"),this.commonService.apiCommonSkillsGet(this.jobSkillName).subscribe({next:n=>{this.skillList=n.value},error:n=>{}})):(this.renderer.removeClass(this.jobSearchDropdown,"show"),this.skillList=[])}handleSearchJobLocation(){this.jobLocationName.length>this.charLength?(this.renderer.addClass(this.locationSearchDropdown,"show"),this.commonService.apiCommonCityGet(this.jobLocationName).subscribe({next:n=>{this.locationList=n.value},error:n=>{}})):(this.renderer.removeClass(this.locationSearchDropdown,"show"),this.locationList=[])}ngOnInit(){this.jobElement=this.jobInputElement.nativeElement,this.jobSearchDropdown=this.jobElement.nextSibling.nextSibling,this.locationElement=this.locationInputElement.nativeElement,this.locationSearchDropdown=this.locationElement.nextSibling.nextSibling}}return(t=l).\u0275fac=function(n){return new(n||t)(e.Y36(m.v),e.Y36(f.F0),e.Y36(e.SBq),e.Y36(e.Qsj))},t.\u0275cmp=e.Xpm({type:t,selectors:[["search-jobs-fields"]],viewQuery:function(n,i){if(1&n&&(e.Gf(C,7),e.Gf(I,7),e.Gf(d,5)),2&n){let s;e.iGM(s=e.CRH())&&(i.jobInputElement=s.first),e.iGM(s=e.CRH())&&(i.locationInputElement=s.first),e.iGM(s=e.CRH())&&(i.searchJobsForm=s.first)}},hostBindings:function(n,i){1&n&&e.NdJ("click",function(p){return i.onDocumentClick(p)},!1,e.evT)},inputs:{jobSkillName:"jobSkillName",jobLocationName:"jobLocationName"},decls:27,vars:12,consts:[[1,"search-jobs-field-wrapper"],["novalidate","",3,"ngSubmit"],["searchJobsForm","ngForm"],[1,"list-inline","search-box"],[1,"list-inline-item","skill"],[1,"form-group","rel"],["type","text","name","searchJobSkill","placeholder","Skillset","autocomplete","off",1,"form-control","search-list",3,"ngModel","ngModelChange"],["searchJobSkill",""],["aria-hidden","true",1,"fa-solid","fa-lightbulb","icon"],[1,"dropdown-wrapper"],[1,"list-group","dropdown"],["class","list-group",4,"ngFor","ngForOf"],[1,"list-inline-item","location"],["type","text","name","searchJobLocation","placeholder","Location","autocomplete","off",1,"form-control","location-search",3,"ngModel","ngModelChange"],["searchJobLocation",""],["aria-hidden","true",1,"fas","fa-map-marker-alt","icon"],[1,"list-inline-item","go"],["type","submit",1,"btn","submit-btn"],["aria-hidden","true",1,"fa","fa-search","d-none","d-md-block","d-lg-block"],[1,"d-md-none","d-lg-none","d-xs-block"],[1,"list-group"],[1,"list-group-item",3,"click"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0)(1,"form",1,2),e.NdJ("ngSubmit",function(){return i.submitJobsForm()}),e.TgZ(3,"ul",3)(4,"li",4)(5,"div",5)(6,"input",6,7),e.NdJ("ngModelChange",function(p){return i.jobSkillName=p})("ngModelChange",function(){return i.handleSearchJobSkill()}),e.qZA(),e._UZ(8,"i",8),e.TgZ(9,"div",9)(10,"div",10),e.YNc(11,h,3,1,"ng-container",11),e.ALo(12,"simpleSearch"),e.qZA()()()(),e.TgZ(13,"li",12)(14,"div",5)(15,"input",13,14),e.NdJ("ngModelChange",function(p){return i.jobLocationName=p})("ngModelChange",function(){return i.handleSearchJobLocation()}),e.qZA(),e._UZ(17,"i",15),e.TgZ(18,"div",9)(19,"div",10),e.YNc(20,r,3,3,"ng-container",11),e.ALo(21,"simpleSearch"),e.qZA()()()(),e.TgZ(22,"li",16)(23,"button",17),e._UZ(24,"i",18),e.TgZ(25,"span",19),e._uU(26,"Search Jobs"),e.qZA()()()()()()),2&n&&(e.xp6(6),e.Q6J("ngModel",i.jobSkillName),e.xp6(5),e.Q6J("ngForOf",e.Dn7(12,4,i.skillList,i.jobSkillName,"name")),e.xp6(4),e.Q6J("ngModel",i.jobLocationName),e.xp6(5),e.Q6J("ngForOf",e.Dn7(21,8,i.locationList,i.jobLocationName,"city1")))},dependencies:[u.sg,g._Y,g.Fj,g.JJ,g.JL,g.On,g.F,x.Hk]}),l})()},1967:(T,_,c)=>{c.d(_,{l:()=>I});var e=c(5879),m=c(6223),f=c(1670),u=c(6814);function g(d,h){1&d&&(e.TgZ(0,"span",7),e._uU(1,"*"),e.qZA())}function x(d,h){if(1&d){const r=e.EpF();e.ynx(0),e.TgZ(1,"li",11),e.NdJ("click",function(){const l=e.CHM(r).$implicit,a=e.oxw(2);return e.KtG(a.getSelectedItem(l))}),e._uU(2),e.qZA(),e.BQk()}if(2&d){const r=h.$implicit,o=e.oxw(2);e.xp6(1),e.Q6J("ngClass",o.isSelectedItem(r,o.fieldModel)),e.xp6(1),e.Oqu(r[o.fieldType])}}function C(d,h){if(1&d&&(e.TgZ(0,"div",8)(1,"div",9),e.YNc(2,x,3,2,"ng-container",10),e.qZA()()),2&d){const r=e.oxw();e.xp6(2),e.Q6J("ngForOf",r.fieldList)}}let I=(()=>{var d;class h{constructor(o){this.element=o,this.inputChange=new e.vpe,this.isExpanded=!1}showFieldItems(){this.isExpanded=!0}isFieldRequired(){return this.fieldRequired}getSelectedItem(o){this.fieldModel=o[this.fieldType],this.inputChange.emit(o)}isSelectedItem(o,t){return o==t?"selected":""}onDocumentClick(o){o.stopPropagation();var t=this.element.nativeElement.querySelector(".select"),l=this.element.nativeElement.querySelector(".select-arrow");!t.contains(o.target)&&!l.contains(o.target)&&(this.isExpanded=!1)}ngOnInit(){}ngOnChanges(o){if(this.isEdit&&this.editValue&&!f.xb(this.fieldList)){let t=this.fieldList?.filter(l=>l.id==this.editValue);this.fieldModel=t[0][this.fieldType],this.inputChange.emit(t[0])}}ngDoCheck(){("null"==this.fieldModel||"undefined"==this.fieldModel||0==this.fieldModel)&&(this.fieldModel=null)}}return(d=h).\u0275fac=function(o){return new(o||d)(e.Y36(e.SBq))},d.\u0275cmp=e.Xpm({type:d,selectors:[["app-select-field"]],hostBindings:function(o,t){1&o&&e.NdJ("click",function(a){return t.onDocumentClick(a)},!1,e.evT)},inputs:{fieldName:"fieldName",fieldText:"fieldText",fieldPlaceholder:"fieldPlaceholder",fieldModel:"fieldModel",fieldRequired:"fieldRequired",fieldList:"fieldList",fieldType:"fieldType",isEdit:"isEdit",editValue:"editValue"},outputs:{inputChange:"inputChange"},features:[e._Bn([],[{provide:m.gN,useExisting:m.F}]),e.TTD],decls:8,vars:9,consts:[[1,"form-group"],[3,"for"],["class","ms-2 font-medium",4,"ngIf"],[1,"select-wrapper",3,"click"],["type","text","autocomplete","off","readonly","",1,"form-control","select",3,"placeholder","name","ngModel","required","ngModelChange"],[1,"select-arrow",3,"ngClass"],["class","dropdown-wrapper show",4,"ngIf"],[1,"ms-2","font-medium"],[1,"dropdown-wrapper","show"],[1,"list-group","dropdown"],[4,"ngFor","ngForOf"],[1,"list-group-item",3,"ngClass","click"]],template:function(o,t){1&o&&(e.TgZ(0,"div",0)(1,"label",1),e._uU(2),e.YNc(3,g,2,0,"span",2),e.qZA(),e.TgZ(4,"div",3),e.NdJ("click",function(){return t.showFieldItems()}),e.TgZ(5,"input",4),e.NdJ("ngModelChange",function(a){return t.fieldModel=a}),e.qZA(),e._UZ(6,"span",5),e.YNc(7,C,3,1,"div",6),e.qZA()()),2&o&&(e.xp6(1),e.s9C("for",t.fieldName),e.xp6(1),e.Oqu(t.fieldText),e.xp6(1),e.Q6J("ngIf",t.isFieldRequired()),e.xp6(2),e.s9C("placeholder",t.fieldPlaceholder),e.s9C("name",t.fieldName),e.Q6J("ngModel",t.fieldModel)("required",t.fieldRequired),e.xp6(1),e.Q6J("ngClass",t.isExpanded?"up":"down"),e.xp6(1),e.Q6J("ngIf",t.isExpanded))},dependencies:[u.mk,u.sg,u.O5,m.Fj,m.JJ,m.Q7,m.On]}),h})()}}]);