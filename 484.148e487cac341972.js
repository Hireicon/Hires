"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[484],{1735:(M,_,p)=>{p.d(_,{s:()=>w});var e=p(5879),u=p(6814);function P(g,h){if(1&g){const m=e.EpF();e.TgZ(0,"div",8)(1,"a",9),e.NdJ("click",function(){e.CHM(m);const s=e.oxw();return e.KtG(s.gotoPageNum(s.itemPageIndex-1))}),e._UZ(2,"i",10),e.qZA()()}}function I(g,h){if(1&g){const m=e.EpF();e.TgZ(0,"div",8)(1,"a",11),e.NdJ("click",function(){e.CHM(m);const s=e.oxw().$implicit,d=e.oxw();return e.KtG(d.gotoPageNum(s))}),e._uU(2),e.qZA()()}if(2&g){const m=e.oxw().$implicit,i=e.oxw();e.xp6(1),e.Q6J("ngClass",i.isPageNumActive(m)),e.xp6(1),e.Oqu(m)}}function t(g,h){1&g&&(e.TgZ(0,"div",8)(1,"a",12),e._uU(2,"..."),e.qZA()())}function v(g,h){if(1&g&&(e.ynx(0),e.YNc(1,I,3,2,"div",6),e.YNc(2,t,3,0,"div",6),e.BQk()),2&g){const m=h.$implicit;e.xp6(1),e.Q6J("ngIf",0!=m),e.xp6(1),e.Q6J("ngIf",0==m)}}function y(g,h){if(1&g){const m=e.EpF();e.TgZ(0,"div",8)(1,"a",13),e.NdJ("click",function(){e.CHM(m);const s=e.oxw();return e.KtG(s.gotoPageNum(s.itemPageIndex+1))}),e._UZ(2,"i",14),e.qZA()()}}let w=(()=>{var g;class h{constructor(i,s){this.element=i,this.renderer=s,this.itemPageIndex=1,this.visiblePageNum=7,this.isPageRowSelected=!1,this.outputParams=new e.vpe}isPageNumActive(i){return this.itemPageIndex==i?"active":""}getPageList(i,s,d){var c=d<9?1:2,C=d-2*c-3>>1,f=d-2*c-2>>1;return i<=d?this.range(1,i):s<=d-c-1-f?this.range(1,d-c-1).concat([0]).concat(this.range(i-c+1,i)):s>=i-c-1-f?this.range(1,c).concat([0]).concat(this.range(i-c-1-f-C,i)):this.range(1,c).concat([0]).concat(this.range(s-C,s+f)).concat([0]).concat(this.range(i-c+1,i))}range(i,s){return Array.from(Array(s-i+1),(d,c)=>c+i)}gotoPageNum(i){this.itemPageIndex=i,this.ItemStartIndex=i>1?this.itemLimit*i-this.itemLimit:0,this.ItemEndIndex=this.itemLimit*i,this.ItemEndIndex>this.totalItems&&(this.ItemEndIndex=this.totalItems),this.outputParams.emit({ItemStartIndex:this.ItemStartIndex,ItemEndIndex:this.ItemEndIndex,itemLimit:this.itemLimit})}showPageList(){this.isPageRowSelected=!0}selectPageItem(i){this.itemLimit=parseInt(i),this.isPageRowSelected=!1,this.gotoPageNum(1)}isSelected(i){return this.itemLimit==parseInt(i)?"selected":""}ngOnInit(){this.pageRowsDataList=[{id:1,name:"10"},{id:2,name:"20"},{id:3,name:"30"},{id:4,name:"40"},{id:4,name:"50"}]}onDocumentClick(i){this.element.nativeElement.querySelector(".page-select-wrapper").contains(i.target)||(this.isPageRowSelected=!1)}ngOnChanges(i){this.ItemStartIndex=this.itemPageIndex>1?this.itemLimit*this.itemPageIndex-this.itemLimit:0,this.totalItems<this.itemLimit?(this.totalPages=1,this.ItemStartIndex=0,this.ItemEndIndex=this.totalItems):(this.totalPages=Math.floor(this.totalItems/this.itemLimit),this.totalItems%this.itemLimit>0&&(this.totalPages=this.totalPages+1),this.totalPages<this.itemPageIndex&&(this.itemPageIndex=this.totalPages,this.gotoPageNum(this.itemPageIndex))),this.pageItemArray=this.getPageList(this.totalPages,this.itemPageIndex,this.visiblePageNum)}}return(g=h).\u0275fac=function(i){return new(i||g)(e.Y36(e.SBq),e.Y36(e.Qsj))},g.\u0275cmp=e.Xpm({type:g,selectors:[["app-pagination-box"]],hostBindings:function(i,s){1&i&&e.NdJ("click",function(c){return s.onDocumentClick(c)},!1,e.evT)},inputs:{ItemStartIndex:"ItemStartIndex",ItemEndIndex:"ItemEndIndex",itemLimit:"itemLimit",totalItems:"totalItems"},outputs:{outputParams:"outputParams"},features:[e.TTD],decls:11,vars:6,consts:[[1,"pagination-wrapper"],[1,"pagination","shadow","d-flex"],[1,"left","d-none","d-md-flex","flex-shrink-0"],[1,"page-select-wrapper"],[1,"page-item-select",3,"click"],[1,"ms-auto","page-numbers","d-flex","align-items-center"],["class","item",4,"ngIf"],[4,"ngFor","ngForOf"],[1,"item"],["href","javascript:void(0)",1,"prev",3,"click"],["aria-hidden","true",1,"fa","fa-angle-left"],["href","javascript:void(0)",3,"ngClass","click"],["href","javascript:void(0)",1,"holder"],["href","javascript:void(0)",1,"next",3,"click"],["aria-hidden","true",1,"fa","fa-angle-right"]],template:function(i,s){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),e.NdJ("click",function(){return s.showPageList()}),e._uU(5),e.qZA()(),e._uU(6),e.qZA(),e.TgZ(7,"div",5),e.YNc(8,P,3,0,"div",6),e.YNc(9,v,3,2,"ng-container",7),e.YNc(10,y,3,0,"div",6),e.qZA()()()),2&i&&(e.xp6(5),e.AsE(" ",s.ItemStartIndex+1," to ",s.ItemEndIndex," "),e.xp6(1),e.hij(" \xa0of\xa0",s.totalItems," results "),e.xp6(2),e.Q6J("ngIf",1!=s.itemPageIndex),e.xp6(1),e.Q6J("ngForOf",s.pageItemArray),e.xp6(1),e.Q6J("ngIf",s.itemPageIndex!=s.totalPages))},dependencies:[u.mk,u.sg,u.O5],styles:[".text-nano{font-size:10px}.text-xs{font-size:12px}.text-smr{font-size:13px}.text-sm{font-size:14px}.text-base{font-size:18px}.text-normal{font-size:16px}.text-regular{font-size:15px}h6,.text-h6{font-size:20px}h5,.text-h5{font-size:22px}h4,.text-h4{font-size:24px}h3,.text-h3{font-size:30px}h2,.text-h2{font-size:34px}h1,.text-h1{font-size:36px}.text-huge{font-size:50px}.text-big{font-size:38px}.ft-head,.pagination-wrapper .pagination{font-family:Metropolis,sans-serif;letter-spacing:.5px}.ft-default{font-family:Albert Sans,sans-serif;font-weight:400;letter-spacing:.2px}.ft-sp{font-family:Catamaran,sans-serif}.fw-light{font-weight:300}.fw-normal{font-weight:400}.fw-medium{font-weight:500}.fw-semibold{font-weight:600}.fw-bold{font-weight:700}.ls--2{letter-spacing:.2px}.ls--25{letter-spacing:.25px}.ls--4{letter-spacing:.4px}.ls--15{letter-spacing:1.5px}.lh-14{line-height:14px}.lh-18{line-height:18px}.pagination-wrapper .pagination{display:inline-block;width:100%;font-size:14px;margin:20px 0 0;background-color:#fff;border-radius:4px!important;overflow:hidden}.pagination-wrapper .pagination .left{color:#6b7280;padding:12px 16px;position:relative;top:2px}.pagination-wrapper .pagination .left .num{color:#6b7280}@media (max-width: 767px){.pagination-wrapper .pagination .left{padding:0 0 20px}}@media (max-width: 767px){.pagination-wrapper .pagination .page-numbers{width:100%;display:flex;justify-content:center}}.pagination-wrapper .pagination .page-numbers a{color:#6b7280}.pagination-wrapper .pagination .page-numbers .item{margin-right:0}.pagination-wrapper .pagination .page-numbers .item a{display:block;padding:12px 18px;transition:all .15s ease;border-right:1px solid #d1d5db}.pagination-wrapper .pagination .page-numbers .item a:hover,.pagination-wrapper .pagination .page-numbers .item a.active{color:#fff;background-color:#9ca3af;transition:all .15s ease;border-right:1px solid #d1d5db}.pagination-wrapper .pagination .page-numbers .item a.prev,.pagination-wrapper .pagination .page-numbers .item a.next{color:#6b7280;padding:6px 18px;border:none;font-size:18px}.pagination-wrapper .pagination .page-numbers .item a.prev:hover,.pagination-wrapper .pagination .page-numbers .item a.next:hover{color:#6b7280;background-color:transparent}.pagination-wrapper .pagination .page-numbers .item:last-child a{border-right:none}.pagination-wrapper .pagination .page-numbers .item:last-child a:hover,.pagination-wrapper .pagination .page-numbers .item:last-child a.active{border-right:none}\n"],encapsulation:2}),h})()},4484:(M,_,p)=>{p.r(_),p.d(_,{PostingHistoryModule:()=>D});var e=p(6814),u=p(5950),P=p(1331),I=p(1670),t=p(5879),v=p(9945),y=p(930),w=p(1735),g=p(2582),h=p(9716),m=p(6676),i=p(9229),s=p(3290);let d=(()=>{var o;class l{constructor(n,a){this.jobOpeningService=n,this.toastr=a,this.deleteParams=new t.vpe}getRelocation(n){if(I.xb(n))return"";{let a=[];return n.forEach(x=>{let O=x.city;a.push(O.city1+"-"+O.stateCode)}),a.join(", ")}}getDate(n){return m(n).format("MMMM D, YYYY")}deletePost(n){this.jobOpeningService.apiJobOpeningDeleteJobOpeningDelete(n.id).subscribe({next:a=>{this.deleteParams.emit(!0),this.toastr.success("Job deleted successfully","",{timeOut:3e3,positionClass:"toast-top-center"})},error:a=>{this.toastr.error("Some error occured","",{timeOut:3e3,positionClass:"toast-top-center"})}})}}return(o=l).\u0275fac=function(n){return new(n||o)(t.Y36(v.UK),t.Y36(i._W))},o.\u0275cmp=t.Xpm({type:o,selectors:[["posting-history-list"]],inputs:{item:"item"},outputs:{deleteParams:"deleteParams"},decls:25,vars:5,consts:[[1,"posting-history-list-wrapper"],[1,"list-group-item","shadow"],[1,"top"],[1,"text-secondary-800","text-normal","desp","fw-medium"],[1,"text-dark-600","text-sm","desp","fw-medium","d-none","d-md-block"],[1,"desp"],[3,"data"],[1,"bottom"],[1,"text-dark-600","text-sm","desp","fw-medium","d-md-none"],[1,"text-dark-400","text-sm","desp"],[1,"mt-3","d-flex","align-items-center"],[1,"d-flex","align-items-center","pointer","me-3"],[1,"material-symbols-outlined","text-sm","me-2"],[1,"text-sm"],[1,"d-flex","align-items-center","text-danger","pointer","me-3",3,"click"]],template:function(n,a){1&n&&(t.TgZ(0,"div",0)(1,"li",1)(2,"div",2)(3,"p",3),t._uU(4),t.qZA(),t.TgZ(5,"p",4),t._uU(6),t.qZA(),t.TgZ(7,"div",5),t._UZ(8,"slider-classic",6),t.qZA()(),t.TgZ(9,"div",7)(10,"p",8),t._uU(11),t.qZA(),t.TgZ(12,"p",9),t._uU(13),t.qZA(),t.TgZ(14,"div",10)(15,"div",11)(16,"span",12),t._uU(17,"edit"),t.qZA(),t.TgZ(18,"p",13),t._uU(19,"Edit"),t.qZA()(),t.TgZ(20,"div",14),t.NdJ("click",function(){return a.deletePost(a.item)}),t.TgZ(21,"span",12),t._uU(22,"delete"),t.qZA(),t.TgZ(23,"p",13),t._uU(24,"Delete"),t.qZA()()()()()()),2&n&&(t.xp6(4),t.hij(" ",a.item.name," "),t.xp6(2),t.hij(" ",a.getRelocation(null==a.item?null:a.item.jobOpeningLocations)," "),t.xp6(2),t.Q6J("data",a.item),t.xp6(3),t.hij(" ",a.getRelocation(null==a.item?null:a.item.jobOpeningLocations)," "),t.xp6(2),t.hij(" posted on ",a.getDate(a.item.postedDate)," "))},dependencies:[s.h],styles:[".text-nano[_ngcontent-%COMP%]{font-size:10px}.text-xs[_ngcontent-%COMP%]{font-size:12px}.text-smr[_ngcontent-%COMP%]{font-size:13px}.text-sm[_ngcontent-%COMP%]{font-size:14px}.text-base[_ngcontent-%COMP%]{font-size:18px}.text-normal[_ngcontent-%COMP%]{font-size:16px}.text-regular[_ngcontent-%COMP%]{font-size:15px}h6[_ngcontent-%COMP%], .text-h6[_ngcontent-%COMP%]{font-size:20px}h5[_ngcontent-%COMP%], .text-h5[_ngcontent-%COMP%]{font-size:22px}h4[_ngcontent-%COMP%], .text-h4[_ngcontent-%COMP%]{font-size:24px}h3[_ngcontent-%COMP%], .text-h3[_ngcontent-%COMP%]{font-size:30px}h2[_ngcontent-%COMP%], .text-h2[_ngcontent-%COMP%]{font-size:34px}h1[_ngcontent-%COMP%], .text-h1[_ngcontent-%COMP%]{font-size:36px}.text-huge[_ngcontent-%COMP%]{font-size:50px}.text-big[_ngcontent-%COMP%]{font-size:38px}.ft-head[_ngcontent-%COMP%]{font-family:Metropolis,sans-serif;letter-spacing:.5px}.ft-default[_ngcontent-%COMP%]{font-family:Albert Sans,sans-serif;font-weight:400;letter-spacing:.2px}.ft-sp[_ngcontent-%COMP%]{font-family:Catamaran,sans-serif}.fw-light[_ngcontent-%COMP%]{font-weight:300}.fw-normal[_ngcontent-%COMP%]{font-weight:400}.fw-medium[_ngcontent-%COMP%]{font-weight:500}.fw-semibold[_ngcontent-%COMP%]{font-weight:600}.fw-bold[_ngcontent-%COMP%]{font-weight:700}.ls--2[_ngcontent-%COMP%]{letter-spacing:.2px}.ls--25[_ngcontent-%COMP%]{letter-spacing:.25px}.ls--4[_ngcontent-%COMP%]{letter-spacing:.4px}.ls--15[_ngcontent-%COMP%]{letter-spacing:1.5px}.lh-14[_ngcontent-%COMP%]{line-height:14px}.lh-18[_ngcontent-%COMP%]{line-height:18px}.posting-history-list-wrapper[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]{padding:14px 24px;border:none;border-radius:4px!important;background-color:#fff;margin:0 0 20px}.posting-history-list-wrapper[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]{display:flex;align-items:center}@media (max-width: 767px){.posting-history-list-wrapper[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]{margin:0 0 4px}}.posting-history-list-wrapper[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   .desp[_ngcontent-%COMP%]{margin:0 12px 2px 0}"]}),l})();function c(o,l){1&o&&t._UZ(0,"loader")}function C(o,l){if(1&o){const r=t.EpF();t.TgZ(0,"posting-history-list",14),t.NdJ("deleteParams",function(a){t.CHM(r);const x=t.oxw(3);return t.KtG(x.onDeletePost(a))}),t.qZA()}2&o&&t.Q6J("item",l.$implicit)}function f(o,l){if(1&o){const r=t.EpF();t.ynx(0),t.TgZ(1,"div",2)(2,"div",8)(3,"page-search",9),t.NdJ("outputData",function(a){t.CHM(r);const x=t.oxw(2);return t.KtG(x.handleSearch(a))}),t.qZA()()(),t.TgZ(4,"div",10)(5,"h6"),t._uU(6),t.qZA()(),t.TgZ(7,"div",11),t.YNc(8,C,1,1,"posting-history-list",12),t.ALo(9,"slice"),t.qZA(),t.TgZ(10,"app-pagination-box",13),t.NdJ("outputParams",function(a){t.CHM(r);const x=t.oxw(2);return t.KtG(x.getIndexParams(a))}),t.qZA(),t.BQk()}if(2&o){const r=t.oxw(2);t.xp6(6),t.hij("",r.totalItems," results available "),t.xp6(2),t.Q6J("ngForOf",t.Dn7(9,6,r.filteredDataList,r.ItemStartIndex,r.ItemEndIndex)),t.xp6(2),t.Q6J("totalItems",r.totalItems)("ItemStartIndex",r.ItemStartIndex)("ItemEndIndex",r.ItemEndIndex)("itemLimit",r.itemLimit)}}function b(o,l){1&o&&(t.TgZ(0,"h6",15),t._uU(1,"No results found"),t.qZA())}function Z(o,l){if(1&o&&(t.TgZ(0,"div",16),t._uU(1),t.qZA()),2&o){const r=t.oxw(2);t.xp6(1),t.Oqu(r.error)}}function L(o,l){if(1&o&&(t.ynx(0),t.YNc(1,f,11,10,"ng-container",4),t.YNc(2,b,2,0,"h6",5),t.TgZ(3,"div",2)(4,"div",6),t.YNc(5,Z,2,1,"div",7),t.qZA()(),t.BQk()),2&o){const r=t.oxw();t.xp6(1),t.Q6J("ngIf",r.isDataAvailable),t.xp6(1),t.Q6J("ngIf",!r.isDataAvailable),t.xp6(3),t.Q6J("ngIf",r.isError)}}const T=[{path:"",component:(()=>{var o;class l{constructor(n,a){this.jobOpeningService=n,this.sessionService=a,this.isLoaded=!1,this.isDataAvailable=!1,this.isError=!0,this.searchData="",this.ItemStartIndex=0,this.ItemEndIndex=9,this.itemLimit=10,this.initialDataList=[],this.filteredDataList=[],this.error=""}handleSearch(n){this.searchData=n,this.filterData()}filterData(){this.filteredDataList=this.initialDataList.filter(n=>this.isMatch(n,this.searchData)),this.totalItems=this.filteredDataList.length}isMatch(n,a){return a=a.toLowerCase(),n.name?.toLowerCase().includes(a)||n.jobLocation?.toLowerCase().includes(a)}getIndexParams(n){this.ItemStartIndex=n.ItemStartIndex,this.ItemEndIndex=n.ItemEndIndex,this.itemLimit=n.itemLimit}onDeletePost(n){this.fetchData()}fetchData(){this.jobOpeningService.apiJobOpeningJobOpeningsByConsultancyUserIDGet(this.sessionService.consultancyUserId).subscribe({next:n=>{this.isLoaded=!0,this.isError=!1,I.xb(n)?this.isDataAvailable=!1:(this.initialDataList=n.value,this.filteredDataList=this.initialDataList,this.totalItems=this.filteredDataList.length,this.ItemEndIndex=this.totalItems>this.itemLimit?this.itemLimit:this.totalItems,this.isDataAvailable=!0,console.log(this.filteredDataList))},error:n=>{this.isError=!0,this.isLoaded=!0,this.isDataAvailable=!1,this.error="Some error occured"}})}ngOnInit(){this.fetchData()}}return(o=l).\u0275fac=function(n){return new(n||o)(t.Y36(v.UK),t.Y36(y.m))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-posting-history"]],decls:6,vars:2,consts:[[1,"posting-history-wrapper"],[1,"container"],[1,"row"],[1,"col-sm-12"],[4,"ngIf"],["class","mb-4",4,"ngIf"],[1,"col-lg-8"],["class","alert alert-danger",4,"ngIf"],[1,"col-md-6"],[3,"outputData"],[1,"options-box"],[1,"list-container"],[3,"item","deleteParams",4,"ngFor","ngForOf"],[3,"totalItems","ItemStartIndex","ItemEndIndex","itemLimit","outputParams"],[3,"item","deleteParams"],[1,"mb-4"],[1,"alert","alert-danger"]],template:function(n,a){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t.YNc(4,c,1,0,"loader",4),t.YNc(5,L,6,3,"ng-container",4),t.qZA()()()()),2&n&&(t.xp6(4),t.Q6J("ngIf",!a.isLoaded),t.xp6(1),t.Q6J("ngIf",a.isLoaded))},dependencies:[e.sg,e.O5,w.s,g.R,h.k,d,e.OU],styles:[".posting-history-wrapper[_ngcontent-%COMP%]   .options-box[_ngcontent-%COMP%]{margin:24px 0 0}.posting-history-wrapper[_ngcontent-%COMP%]   .list-container[_ngcontent-%COMP%]{margin:20px 0 0}"]}),l})()}];let A=(()=>{var o;class l{}return(o=l).\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[P.Bz.forChild(T),P.Bz]}),l})(),D=(()=>{var o;class l{}return(o=l).\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[e.ez,u.m.forRoot(),A]}),l})()}}]);