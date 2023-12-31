"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[592],{266:(h,f,n)=>{n.d(f,{L:()=>m});var e=n(5879),l=n(6593),g=n(9945),p=n(480);let m=(()=>{var o;class r{constructor(i,t,_,c){this.sanitizer=i,this.changeDetection=t,this.fileService=_,this.fileDownloadService=c}handleDownload(i){this.fileDownloadService.downloadFile(this.doc,"1","resumes").subscribe(t=>{URL.createObjectURL(t.body),this.fileUrl=this.sanitizer.bypassSecurityTrustUrl(`https://hiresblob.blob.core.windows.net/resumes/${this.doc}`),this.changeDetection.detectChanges(),i.click()})}ngOnInit(){}}return(o=r).\u0275fac=function(i){return new(i||o)(e.Y36(l.H7),e.Y36(e.sBO),e.Y36(g.Ip),e.Y36(p._))},o.\u0275cmp=e.Xpm({type:o,selectors:[["download-resume"]],inputs:{doc:"doc"},decls:8,vars:1,consts:[[1,"download-box"],["target","_blank",1,"d-none",3,"href"],["anchor",""],[1,"inner","d-flex","align-items-center",3,"click"],[1,"material-symbols-outlined","icon","text-base","me-1"],[1,"text-sm"]],template:function(i,t){if(1&i){const _=e.EpF();e.TgZ(0,"div",0),e._UZ(1,"a",1,2),e.TgZ(3,"div",3),e.NdJ("click",function(){e.CHM(_);const a=e.MAs(2);return e.KtG(t.handleDownload(a))}),e.TgZ(4,"span",4),e._uU(5," download "),e.qZA(),e.TgZ(6,"span",5),e._uU(7,"download resume"),e.qZA()()()}2&i&&(e.xp6(1),e.Q6J("href",t.fileUrl,e.LSH))},styles:[".text-nano[_ngcontent-%COMP%]{font-size:10px}.text-xs[_ngcontent-%COMP%]{font-size:12px}.text-smr[_ngcontent-%COMP%]{font-size:13px}.text-sm[_ngcontent-%COMP%]{font-size:14px}.text-base[_ngcontent-%COMP%]{font-size:18px}.text-normal[_ngcontent-%COMP%]{font-size:16px}.text-regular[_ngcontent-%COMP%]{font-size:15px}h6[_ngcontent-%COMP%], .text-h6[_ngcontent-%COMP%]{font-size:20px}h5[_ngcontent-%COMP%], .text-h5[_ngcontent-%COMP%]{font-size:22px}h4[_ngcontent-%COMP%], .text-h4[_ngcontent-%COMP%]{font-size:24px}h3[_ngcontent-%COMP%], .text-h3[_ngcontent-%COMP%]{font-size:30px}h2[_ngcontent-%COMP%], .text-h2[_ngcontent-%COMP%]{font-size:34px}h1[_ngcontent-%COMP%], .text-h1[_ngcontent-%COMP%]{font-size:36px}.text-huge[_ngcontent-%COMP%]{font-size:50px}.text-big[_ngcontent-%COMP%]{font-size:38px}.ft-head[_ngcontent-%COMP%]{font-family:Metropolis,sans-serif;letter-spacing:.5px}.ft-default[_ngcontent-%COMP%]{font-family:Albert Sans,sans-serif;font-weight:400;letter-spacing:.2px}.ft-sp[_ngcontent-%COMP%]{font-family:Catamaran,sans-serif}.fw-light[_ngcontent-%COMP%]{font-weight:300}.fw-normal[_ngcontent-%COMP%]{font-weight:400}.fw-medium[_ngcontent-%COMP%]{font-weight:500}.fw-semibold[_ngcontent-%COMP%]{font-weight:600}.fw-bold[_ngcontent-%COMP%]{font-weight:700}.ls--2[_ngcontent-%COMP%]{letter-spacing:.2px}.ls--25[_ngcontent-%COMP%]{letter-spacing:.25px}.ls--4[_ngcontent-%COMP%]{letter-spacing:.4px}.ls--15[_ngcontent-%COMP%]{letter-spacing:1.5px}.lh-14[_ngcontent-%COMP%]{line-height:14px}.lh-18[_ngcontent-%COMP%]{line-height:18px}.download-box[_ngcontent-%COMP%]{cursor:pointer;padding:4px 8px;background-color:#fefce8;border:1px solid #facc15;color:#854d0e;border-radius:4px!important}.download-box[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{font-size:inherit}"]}),r})()},9716:(h,f,n)=>{n.d(f,{k:()=>g});var e=n(5879),l=n(6223);let g=(()=>{var p;class m{constructor(){this.searchData="",this.outputData=new e.vpe}onSearchData(){this.outputData.emit(this.searchData)}}return(p=m).\u0275fac=function(r){return new(r||p)},p.\u0275cmp=e.Xpm({type:p,selectors:[["page-search"]],outputs:{outputData:"outputData"},decls:8,vars:1,consts:[[1,"page-search-wrapper"],[1,"input-box","mb-0"],[1,"form-group","mb-0"],[1,"input-group"],["type","text","id","searchData","name","searchData","placeholder","Search by job, location",1,"form-control",3,"ngModel","ngModelChange","input"],[1,"input-group-text"],[1,"fa","fa-search"]],template:function(r,s){1&r&&(e.TgZ(0,"div",0)(1,"form")(2,"div",1)(3,"div",2)(4,"div",3)(5,"input",4),e.NdJ("ngModelChange",function(t){return s.searchData=t})("input",function(){return s.onSearchData()}),e.qZA(),e.TgZ(6,"span",5),e._UZ(7,"i",6),e.qZA()()()()()()),2&r&&(e.xp6(5),e.Q6J("ngModel",s.searchData))},dependencies:[l._Y,l.Fj,l.JJ,l.JL,l.On,l.F],styles:[".text-nano[_ngcontent-%COMP%]{font-size:10px}.text-xs[_ngcontent-%COMP%]{font-size:12px}.text-smr[_ngcontent-%COMP%]{font-size:13px}.text-sm[_ngcontent-%COMP%]{font-size:14px}.text-base[_ngcontent-%COMP%]{font-size:18px}.text-normal[_ngcontent-%COMP%]{font-size:16px}.text-regular[_ngcontent-%COMP%]{font-size:15px}h6[_ngcontent-%COMP%], .text-h6[_ngcontent-%COMP%]{font-size:20px}h5[_ngcontent-%COMP%], .text-h5[_ngcontent-%COMP%]{font-size:22px}h4[_ngcontent-%COMP%], .text-h4[_ngcontent-%COMP%]{font-size:24px}h3[_ngcontent-%COMP%], .text-h3[_ngcontent-%COMP%]{font-size:30px}h2[_ngcontent-%COMP%], .text-h2[_ngcontent-%COMP%]{font-size:34px}h1[_ngcontent-%COMP%], .text-h1[_ngcontent-%COMP%]{font-size:36px}.text-huge[_ngcontent-%COMP%]{font-size:50px}.text-big[_ngcontent-%COMP%]{font-size:38px}.ft-head[_ngcontent-%COMP%]{font-family:Metropolis,sans-serif;letter-spacing:.5px}.ft-default[_ngcontent-%COMP%]{font-family:Albert Sans,sans-serif;font-weight:400;letter-spacing:.2px}.ft-sp[_ngcontent-%COMP%]{font-family:Catamaran,sans-serif}.fw-light[_ngcontent-%COMP%]{font-weight:300}.fw-normal[_ngcontent-%COMP%]{font-weight:400}.fw-medium[_ngcontent-%COMP%]{font-weight:500}.fw-semibold[_ngcontent-%COMP%]{font-weight:600}.fw-bold[_ngcontent-%COMP%]{font-weight:700}.ls--2[_ngcontent-%COMP%]{letter-spacing:.2px}.ls--25[_ngcontent-%COMP%]{letter-spacing:.25px}.ls--4[_ngcontent-%COMP%]{letter-spacing:.4px}.ls--15[_ngcontent-%COMP%]{letter-spacing:1.5px}.lh-14[_ngcontent-%COMP%]{line-height:14px}.lh-18[_ngcontent-%COMP%]{line-height:18px}.page-search-wrapper[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%]{cursor:auto;background-color:#e5e7eb}"]}),m})()},4647:(h,f,n)=>{n.d(f,{D:()=>i});var e=n(5879),l=n(6814),g=n(2651),p=n(9234),m=n(674);const o=["viewResumeImgElem"];function r(t,_){if(1&t&&(e.ynx(0),e._UZ(1,"ngx-doc-viewer",9),e.BQk()),2&t){const c=e.oxw();e.xp6(1),e.Q6J("url",c.fileUrl)("viewer","pdf"!=c.fileType?"office":"google")}}function s(t,_){if(1&t&&(e.ynx(0),e.TgZ(1,"div",10),e._UZ(2,"img",11),e.qZA(),e.BQk()),2&t){const c=e.oxw();e.xp6(2),e.Q6J("src",c.fileUrl,e.LSH)}}let i=(()=>{var t;class _{constructor(){this.fileType="",this.fileUrl="",this.isViewer=!1,this.defaultFileTypes=["ppt","pptx","doc","docx","xls","xlsx","pdf"]}handleResume(){this.isViewer=!this.isViewer}isDoc(){return this.defaultFileTypes.some(a=>a===this.fileType)}closeViewer(){this.isViewer=!1}ngOnInit(){const a=this.doc.split(".");this.fileType=a[1].toLowerCase(),this.fileUrl=`https://hiresblob.blob.core.windows.net/resumes/${this.doc}`}}return(t=_).\u0275fac=function(a){return new(a||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["resume-viewer"]],viewQuery:function(a,d){if(1&a&&e.Gf(o,5),2&a){let u;e.iGM(u=e.CRH())&&(d.viewResumeImgElem=u.first)}},inputs:{doc:"doc"},decls:14,vars:4,consts:[[1,"resume-box","me-3","align-items-center",3,"click"],[1,"material-symbols-outlined","icon","text-base","me-1"],[1,"text-sm"],["position","end",3,"opened","sidenav","openedChange"],[1,"resume-viewer-wrapper"],[1,"right","mt-3","me-3","d-flex","justify-content-end"],[1,"material-symbols-outlined","text-h4","d-inline-block","pointer",3,"click"],[1,"viewer-content"],[4,"ngIf"],[2,"width","100%","height","80vh",3,"url","viewer"],[1,"img-box"],[1,"view-resume-img",3,"src"]],template:function(a,d){1&a&&(e.TgZ(0,"div",0),e.NdJ("click",function(){return d.handleResume()}),e.TgZ(1,"span",1),e._uU(2," visibility "),e.qZA(),e.TgZ(3,"span",2),e._uU(4,"view resume"),e.qZA()(),e.TgZ(5,"mat-sidenav-container")(6,"mat-sidenav",3),e.NdJ("openedChange",function(C){return d.isViewer=C}),e.TgZ(7,"div",4)(8,"div",5)(9,"div",6),e.NdJ("click",function(){return d.closeViewer()}),e._uU(10," close "),e.qZA()(),e.TgZ(11,"div",7),e.YNc(12,r,2,2,"ng-container",8),e.YNc(13,s,3,1,"ng-container",8),e.qZA()()()()),2&a&&(e.xp6(6),e.Q6J("opened",d.isViewer)("sidenav",d.isViewer),e.xp6(6),e.Q6J("ngIf",d.isDoc()),e.xp6(1),e.Q6J("ngIf",!d.isDoc()))},dependencies:[l.O5,g.JX,g.TM,p.zr,m.xh]}),_})()},3290:(h,f,n)=>{n.d(f,{h:()=>m});var e=n(5879),l=n(6814),g=n(6223);function p(o,r){if(1&o&&(e.TgZ(0,"span",5),e._uU(1),e.qZA()),2&o){const s=e.oxw();e.xp6(1),e.Oqu(s.data?s.activeText:s.inActiveText)}}let m=(()=>{var o;class r{constructor(){this.inActiveText="",this.outputparams=new e.vpe}onSliderChange(i){this.outputparams.emit({item:this.selectedItem,status:i})}}return(o=r).\u0275fac=function(i){return new(i||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["slider-classic"]],inputs:{data:"data",selectedItem:"selectedItem",activeText:"activeText",inActiveText:"inActiveText"},outputs:{outputparams:"outputparams"},decls:5,vars:2,consts:[[1,"slider-classic-wrapper","d-flex","align-items-center"],["class","text me-2 text-dark-600",4,"ngIf"],[1,"switch-classic","small"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"slider","round"],[1,"text","me-2","text-dark-600"]],template:function(i,t){1&i&&(e.TgZ(0,"div",0),e.YNc(1,p,2,1,"span",1),e.TgZ(2,"label",2)(3,"input",3),e.NdJ("ngModelChange",function(c){return t.data=c})("change",function(){return t.onSliderChange(t.data)}),e.qZA(),e._UZ(4,"span",4),e.qZA()()),2&i&&(e.xp6(1),e.Q6J("ngIf",t.activeText&&t.inActiveText),e.xp6(2),e.Q6J("ngModel",t.data))},dependencies:[l.O5,g.Wl,g.JJ,g.On]}),r})()}}]);