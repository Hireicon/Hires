"use strict";(self.webpackChunkhireicon=self.webpackChunkhireicon||[]).push([[685],{1685:(Q,b,a)=>{a.r(b),a.d(b,{SearchjobsModule:()=>z});var i=a(9808),C=a(9201),l=a(4100),n=a(5e3),p=a(8966),_=a(547),d=a(6349),M=a(9010),P=a(7282),O=a(8453),h=a(8351),x=a(9868);function m(e,r){if(1&e&&(n.TgZ(0,"div"),n._uU(1),n.qZA()),2&e){const t=n.oxw(3);n.xp6(1),n.AsE("",t.skillName," - ",t.totalItems," jobs found")}}function u(e,r){if(1&e&&(n.TgZ(0,"div"),n._uU(1),n.qZA()),2&e){const t=n.oxw(3);n.xp6(1),n.hij("",t.totalItems," jobs found")}}function y(e,r){if(1&e&&(n.ynx(0),n.YNc(1,m,2,2,"div",12),n.YNc(2,u,2,1,"div",12),n.BQk()),2&e){const t=n.oxw(2);n.xp6(1),n.Q6J("ngIf",""!=t.skillName),n.xp6(1),n.Q6J("ngIf",""==t.skillName)}}function j(e,r){1&e&&(n.ynx(0),n._uU(1,"No jobs found"),n.BQk())}function w(e,r){1&e&&(n.ynx(0),n._uU(1,"Search Jobs based on Skill and Location"),n.BQk())}function v(e,r){if(1&e&&(n.TgZ(0,"h4",11),n.YNc(1,y,3,2,"ng-container",12),n.YNc(2,j,2,0,"ng-container",12),n.YNc(3,w,2,0,"ng-container",12),n.qZA()),2&e){const t=n.oxw();n.xp6(1),n.Q6J("ngIf",t.isJobAvailable&&t.isParamsAvailable),n.xp6(1),n.Q6J("ngIf",!t.isJobAvailable&&t.isParamsAvailable),n.xp6(1),n.Q6J("ngIf",!t.isJobAvailable&&!t.isParamsAvailable)}}function k(e,r){if(1&e){const t=n.EpF();n.TgZ(0,"app-filter-box",13),n.NdJ("outputParams",function(s){return n.CHM(t),n.oxw().getFilterParams(s)}),n.qZA()}2&e&&n.Q6J("isDatePosted","yes")("isExperience","yes")("isVisa","yes")}function I(e,r){1&e&&(n.TgZ(0,"div",14),n._UZ(1,"div",15),n.qZA())}function J(e,r){1&e&&(n.TgZ(0,"span"),n._uU(1,", \xa0"),n.qZA())}function S(e,r){if(1&e&&(n.TgZ(0,"span"),n._uU(1),n.YNc(2,J,2,0,"span",12),n.qZA()),2&e){const t=r.$implicit,o=r.last;n.xp6(1),n.Oqu(t),n.xp6(1),n.Q6J("ngIf",!o)}}function N(e,r){if(1&e){const t=n.EpF();n.ynx(0),n.TgZ(1,"li",22),n.NdJ("click",function(){const c=n.CHM(t).$implicit;return n.oxw(2).showJobDescription(c)}),n.TgZ(2,"h5"),n._uU(3),n.qZA(),n.TgZ(4,"p"),n._uU(5),n.qZA(),n.TgZ(6,"p"),n.YNc(7,S,3,2,"span",19),n.qZA()(),n.BQk()}if(2&e){const t=r.$implicit,o=n.oxw(2);n.xp6(1),n.Q6J("ngClass",o.isSelected(t.id)),n.xp6(2),n.Oqu(t.jobOpeningName),n.xp6(2),n.Oqu(t.companyName),n.xp6(2),n.Q6J("ngForOf",t.locations)}}function A(e,r){if(1&e&&(n.TgZ(0,"div",23)(1,"div",24),n._UZ(2,"app-job-detail-sheet",25),n.qZA()()),2&e){const t=n.oxw(2);n.xp6(2),n.Q6J("selectedJobDetails",t.selectedJobDetails)("isJobName",t.isJobName)}}function T(e,r){if(1&e){const t=n.EpF();n.TgZ(0,"div",16)(1,"div",3)(2,"div",17)(3,"div",18),n.YNc(4,N,8,4,"ng-container",19),n.ALo(5,"slice"),n.qZA()(),n.YNc(6,A,3,2,"div",20),n.qZA(),n.TgZ(7,"app-pagination-box",21),n.NdJ("outputParams",function(s){return n.CHM(t),n.oxw().getIndexParams(s)}),n.qZA()()}if(2&e){const t=n.oxw();n.xp6(4),n.Q6J("ngForOf",n.Dn7(5,6,t.jobData,t.ItemStartIndex,t.ItemEndIndex)),n.xp6(2),n.Q6J("ngIf",!t.isMobile),n.xp6(1),n.Q6J("totalItems",t.totalItems)("ItemStartIndex",t.ItemStartIndex)("ItemEndIndex",t.ItemEndIndex)("itemLimit",t.itemLimit)}}const Z=[{path:"",component:(()=>{class e{constructor(t,o,s,c,f){this.router=t,this.route=o,this.dialog=s,this.jobOpeningService=c,this.sharedService=f,this.isLoaded=!1,this.isJobAvailable=!1,this.isParamsAvailable=!1,this.skillName="",this.locationName="",this.skillList=[],this.locationList=[],this.jobData=[],this.selectedJobId=-1,this.ItemStartIndex=0,this.ItemEndIndex=9,this.itemLimit=10,this.isMobile=!1,this.isJobName=!0,this.jobDetailsChanged=new n.vpe,t.events.subscribe(L=>{L instanceof l.m2&&this.route.queryParams.subscribe(g=>{Object.keys(g).length>0?(this.isParamsAvailable=!0,this.isLoaded=!1,this.skillName=g.skill,this.locationName=g.location,this.skillId=g.skillId,this.locationId=g.locationId,this.handleJobOpenings(this.skillName)):this.isParamsAvailable=!1})})}handleJobOpenings(t){this.jobOpeningService.apiJobOpeningSearchJobOpeningsGet([t]).subscribe({next:s=>{console.log(s),this.isLoaded=!0,this.isJobAvailable=!0,this.jobData=s,this.totalItems=this.jobData.length},error:s=>{this.isLoaded=!0,this.isJobAvailable=!0}})}showJobsData(t){var o=this;if(this.isLoaded=!1,t){var s=t.split("&");this.skillName=s[0],this.locationName=s[1],""!=this.skillName&&""==this.locationName&&d.S6(this.skillList,function(c){c.name==o.skillName&&(o.skillId=c.id)}),""!=this.locationName&&""==this.skillName&&d.S6(this.locationList,function(c){c.city==o.locationName&&(o.locationId=c.id)}),""!=this.skillName&&""!=this.locationName&&(d.S6(this.skillList,function(c){c.name==o.skillName&&(o.skillId=c.id)}),d.S6(this.locationList,function(c){c.city==o.locationName&&(o.locationId=c.id)})),""==this.skillName&&""==this.locationName&&(this.isJobAvailable=!1,this.isLoaded=!0),this.fetchJobData()}else this.isJobAvailable=!1,this.isLoaded=!0,this.isParamsAvailable=!1}fetchJobData(){}getIndexParams(t){this.ItemStartIndex=t.ItemStartIndex,this.ItemEndIndex=t.ItemEndIndex,this.isMobile||(this.selectedJobId=this.jobData[this.ItemStartIndex].id,this.selectedJobDetails=this.jobData[this.ItemStartIndex])}getFilterParams(t){this.filterParam=t}isSelected(t){return this.selectedJobId==t?"selected":""}showJobDescription(t){this.selectedJobId=t.id,this.selectedJobDetails=t,this.jobDetailsChanged.emit(this.selectedJobDetails)}showJobDetaislModal(){this.dialog.open(_.N,{panelClass:"material",disableClose:!0,data:this.selectedJobDetails})}onResize(t){this.isMobile=t.target.innerWidth<=991}ngOnInit(){this.isMobile=window.innerWidth<=991,this.jobDetailsChanged.subscribe(t=>{this.isMobile&&this.showJobDetaislModal()})}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(l.F0),n.Y36(l.gz),n.Y36(p.uw),n.Y36(M.U),n.Y36(P.F))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-searchjobs"]],hostBindings:function(t,o){1&t&&n.NdJ("resize",function(c){return o.onResize(c)},!1,n.Jf7)},features:[n._Bn([{provide:p.so,useValue:{}}])],decls:12,vars:6,consts:[[1,"searchjob-wrapper"],[1,"content-block"],[1,"container"],[1,"row"],[1,"col-sm-12"],["class","results",4,"ngIf"],[3,"jobSkillName","jobLocationName"],[3,"isDatePosted","isExperience","isVisa","outputParams",4,"ngIf"],["class","loader-wrapper",4,"ngIf"],[1,"col-12"],["class","search-results-wrapper",4,"ngIf"],[1,"results"],[4,"ngIf"],[3,"isDatePosted","isExperience","isVisa","outputParams"],[1,"loader-wrapper"],[1,"pre-loader"],[1,"search-results-wrapper"],[1,"col-sm-12","col-md-12","col-lg-4"],[1,"left-section"],[4,"ngFor","ngForOf"],["class","col-sm-12 col-md-12 col-lg-8",4,"ngIf"],[3,"totalItems","ItemStartIndex","ItemEndIndex","itemLimit","outputParams"],[1,"list-group-item",3,"ngClass","click"],[1,"col-sm-12","col-md-12","col-lg-8"],[1,"right-section"],[3,"selectedJobDetails","isJobName"]],template:function(t,o){1&t&&(n.TgZ(0,"div",0)(1,"section",1)(2,"div",2)(3,"div",3)(4,"div",4),n.YNc(5,v,4,3,"h4",5),n._UZ(6,"search-jobs-fields",6),n.YNc(7,k,1,3,"app-filter-box",7),n.YNc(8,I,2,0,"div",8),n.qZA()(),n.TgZ(9,"div",3)(10,"div",9),n.YNc(11,T,8,10,"div",10),n.qZA()()()()()),2&t&&(n.xp6(5),n.Q6J("ngIf",o.isLoaded),n.xp6(1),n.Q6J("jobSkillName",o.skillName)("jobLocationName",o.locationName),n.xp6(1),n.Q6J("ngIf",o.isLoaded&&o.isJobAvailable),n.xp6(1),n.Q6J("ngIf",!o.isLoaded),n.xp6(3),n.Q6J("ngIf",o.isLoaded&&o.isJobAvailable))},directives:[i.O5,O.j,h.T,i.sg,i.mk,_.N,x.s],pipes:[i.OU],styles:['@font-face{font-family:Metropolis;src:url(Metropolis-Light.654d5d8c13ebad60.otf) format("truetype");font-weight:300}@font-face{font-family:Metropolis;src:url(Metropolis-Regular.95a97a83c412227e.otf) format("truetype");font-weight:400}@font-face{font-family:Metropolis;src:url(Metropolis-Medium.79ed5294bd2208db.otf) format("truetype");font-weight:500}@font-face{font-family:Metropolis;src:url(Metropolis-SemiBold.8460ced3d816b784.otf) format("truetype");font-weight:600}@font-face{font-family:Metropolis;src:url(Metropolis-Thin.c5f83234f4472dfc.otf) format("truetype");font-weight:100}@font-face{font-family:Metropolis;src:url(Metropolis-Bold.d7799d863e25a3ff.otf) format("truetype");font-weight:700}.shadow[_ngcontent-%COMP%]{box-shadow:0 1px 3px #0000001a,0 1px 2px #0000000f!important}.rounded[_ngcontent-%COMP%]{border-radius:6px!important}.rounded-md[_ngcontent-%COMP%]{border-radius:8px!important}.rounded-lg[_ngcontent-%COMP%]{border-radius:10px!important}.rounded-xl[_ngcontent-%COMP%]{border-radius:15px!important}.op-50[_ngcontent-%COMP%]{opacity:.5}.text-xs[_ngcontent-%COMP%]{font-size:12px}.text-smr[_ngcontent-%COMP%]{font-size:13px}.text-sm[_ngcontent-%COMP%]{font-size:14px}.text-base[_ngcontent-%COMP%]{font-size:18px}.text-normal[_ngcontent-%COMP%]{font-size:16px}h6[_ngcontent-%COMP%], .text-h6[_ngcontent-%COMP%]{font-size:20px}h5[_ngcontent-%COMP%], .text-h5[_ngcontent-%COMP%]{font-size:22px}h4[_ngcontent-%COMP%], .text-h4[_ngcontent-%COMP%]{font-size:24px}h3[_ngcontent-%COMP%], .text-h3[_ngcontent-%COMP%]{font-size:30px}h2[_ngcontent-%COMP%], .text-h2[_ngcontent-%COMP%]{font-size:34px}h1[_ngcontent-%COMP%], .text-h1[_ngcontent-%COMP%]{font-size:36px}.text-huge[_ngcontent-%COMP%]{font-size:50px}.text-big[_ngcontent-%COMP%]{font-size:38px}.ft-head[_ngcontent-%COMP%], .searchjob-wrapper[_ngcontent-%COMP%]   .search-results-wrapper[_ngcontent-%COMP%]   .left-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .searchjob-wrapper[_ngcontent-%COMP%]   h4.results[_ngcontent-%COMP%]{font-family:Metropolis,sans-serif}.ft-default[_ngcontent-%COMP%], .searchjob-wrapper[_ngcontent-%COMP%]   .search-results-wrapper[_ngcontent-%COMP%]   .left-section[_ngcontent-%COMP%]   .details-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;font-weight:400}.ft-sp[_ngcontent-%COMP%], .searchjob-wrapper[_ngcontent-%COMP%]   .search-results-wrapper[_ngcontent-%COMP%]   .left-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:Catamaran,sans-serif}.text-gray-50[_ngcontent-%COMP%]{color:#f9fafb}.bg-gray-50[_ngcontent-%COMP%]{background-color:#f9fafb}.border-gray-50[_ngcontent-%COMP%]{border:1px solid #f9fafb}.text-gray-100[_ngcontent-%COMP%]{color:#f3f4f6}.bg-gray-100[_ngcontent-%COMP%]{background-color:#f3f4f6}.border-gray-100[_ngcontent-%COMP%]{border:1px solid #f3f4f6}.text-gray-200[_ngcontent-%COMP%]{color:#e5e7eb}.bg-gray-200[_ngcontent-%COMP%]{background-color:#e5e7eb}.border-gray-200[_ngcontent-%COMP%]{border:1px solid #e5e7eb}.text-gray-300[_ngcontent-%COMP%]{color:#d1d5db}.bg-gray-300[_ngcontent-%COMP%]{background-color:#d1d5db}.border-gray-300[_ngcontent-%COMP%]{border:1px solid #d1d5db}.text-gray-400[_ngcontent-%COMP%]{color:#9ca3af}.bg-gray-400[_ngcontent-%COMP%]{background-color:#9ca3af}.border-gray-400[_ngcontent-%COMP%]{border:1px solid #9ca3af}.text-gray-500[_ngcontent-%COMP%]{color:#6b7280}.bg-gray-500[_ngcontent-%COMP%]{background-color:#6b7280}.border-gray-500[_ngcontent-%COMP%]{border:1px solid #6b7280}.text-gray-600[_ngcontent-%COMP%]{color:#4b5563}.bg-gray-600[_ngcontent-%COMP%]{background-color:#4b5563}.border-gray-600[_ngcontent-%COMP%]{border:1px solid #4b5563}.text-gray-700[_ngcontent-%COMP%]{color:#374151}.bg-gray-700[_ngcontent-%COMP%]{background-color:#374151}.border-gray-700[_ngcontent-%COMP%]{border:1px solid #374151}.text-gray-800[_ngcontent-%COMP%]{color:#1f2937}.bg-gray-800[_ngcontent-%COMP%]{background-color:#1f2937}.border-gray-800[_ngcontent-%COMP%]{border:1px solid #1f2937}.text-gray-900[_ngcontent-%COMP%]{color:#111827}.bg-gray-900[_ngcontent-%COMP%]{background-color:#111827}.border-gray-900[_ngcontent-%COMP%]{border:1px solid #111827}.text-cyan-50[_ngcontent-%COMP%]{color:#ecfeff}.bg-cyan-50[_ngcontent-%COMP%]{background-color:#ecfeff}.border-cyan-50[_ngcontent-%COMP%]{border:1px solid #ecfeff}.text-cyan-100[_ngcontent-%COMP%]{color:#cffafe}.bg-cyan-100[_ngcontent-%COMP%]{background-color:#cffafe}.border-cyan-100[_ngcontent-%COMP%]{border:1px solid #cffafe}.text-cyan-200[_ngcontent-%COMP%]{color:#a5f3fc}.bg-cyan-200[_ngcontent-%COMP%]{background-color:#a5f3fc}.border-cyan-200[_ngcontent-%COMP%]{border:1px solid #a5f3fc}.text-cyan-300[_ngcontent-%COMP%]{color:#67e8f9}.bg-cyan-300[_ngcontent-%COMP%]{background-color:#67e8f9}.border-cyan-300[_ngcontent-%COMP%]{border:1px solid #67e8f9}.text-cyan-400[_ngcontent-%COMP%]{color:#22d3ee}.bg-cyan-400[_ngcontent-%COMP%]{background-color:#22d3ee}.border-cyan-400[_ngcontent-%COMP%]{border:1px solid #22d3ee}.text-cyan-500[_ngcontent-%COMP%]{color:#06b6d4}.bg-cyan-500[_ngcontent-%COMP%]{background-color:#06b6d4}.border-cyan-500[_ngcontent-%COMP%]{border:1px solid #06b6d4}.text-cyan-600[_ngcontent-%COMP%]{color:#0891b2}.bg-cyan-600[_ngcontent-%COMP%]{background-color:#0891b2}.border-cyan-600[_ngcontent-%COMP%]{border:1px solid #0891b2}.text-cyan-700[_ngcontent-%COMP%]{color:#0e7490}.bg-cyan-700[_ngcontent-%COMP%]{background-color:#0e7490}.border-cyan-700[_ngcontent-%COMP%]{border:1px solid #0e7490}.text-cyan-800[_ngcontent-%COMP%]{color:#155e75}.bg-cyan-800[_ngcontent-%COMP%]{background-color:#155e75}.border-cyan-800[_ngcontent-%COMP%]{border:1px solid #155e75}.text-cyan-900[_ngcontent-%COMP%]{color:#164e63}.bg-cyan-900[_ngcontent-%COMP%]{background-color:#164e63}.border-cyan-900[_ngcontent-%COMP%]{border:1px solid #164e63}.text-green-50[_ngcontent-%COMP%]{color:#eef6f0}.bg-green-50[_ngcontent-%COMP%]{background-color:#eef6f0}.border-green-50[_ngcontent-%COMP%]{border:1px solid #eef6f0}.text-green-100[_ngcontent-%COMP%]{color:#bbf7d8}.bg-green-100[_ngcontent-%COMP%]{background-color:#bbf7d8}.border-green-100[_ngcontent-%COMP%]{border:1px solid #bbf7d8}.text-green-200[_ngcontent-%COMP%]{color:#8df1be}.bg-green-200[_ngcontent-%COMP%]{background-color:#8df1be}.border-green-200[_ngcontent-%COMP%]{border:1px solid #8df1be}.text-green-300[_ngcontent-%COMP%]{color:#63c694}.bg-green-300[_ngcontent-%COMP%]{background-color:#63c694}.border-green-300[_ngcontent-%COMP%]{border:1px solid #63c694}.text-green-400[_ngcontent-%COMP%]{color:#29c26f}.bg-green-400[_ngcontent-%COMP%]{background-color:#29c26f}.border-green-400[_ngcontent-%COMP%]{border:1px solid #29c26f}.text-green-500[_ngcontent-%COMP%]{color:#18c36c}.bg-green-500[_ngcontent-%COMP%]{background-color:#18c36c}.border-green-500[_ngcontent-%COMP%]{border:1px solid #18c36c}.text-green-600[_ngcontent-%COMP%]{color:#39a26d}.bg-green-600[_ngcontent-%COMP%]{background-color:#39a26d}.border-green-600[_ngcontent-%COMP%]{border:1px solid #39a26d}.text-green-700[_ngcontent-%COMP%]{color:#0e723f}.bg-green-700[_ngcontent-%COMP%]{background-color:#0e723f}.border-green-700[_ngcontent-%COMP%]{border:1px solid #0e723f}.text-green-800[_ngcontent-%COMP%]{color:#2b5535}.bg-green-800[_ngcontent-%COMP%]{background-color:#2b5535}.border-green-800[_ngcontent-%COMP%]{border:1px solid #2b5535}.text-green-900[_ngcontent-%COMP%]{color:#03170d}.bg-green-900[_ngcontent-%COMP%]{background-color:#03170d}.border-green-900[_ngcontent-%COMP%]{border:1px solid #03170d}.text-red-50[_ngcontent-%COMP%]{color:#fef2f2}.bg-red-50[_ngcontent-%COMP%]{background-color:#fef2f2}.border-red-50[_ngcontent-%COMP%]{border:1px solid #fef2f2}.text-red-100[_ngcontent-%COMP%]{color:#fee2e2}.bg-red-100[_ngcontent-%COMP%]{background-color:#fee2e2}.border-red-100[_ngcontent-%COMP%]{border:1px solid #fee2e2}.text-red-200[_ngcontent-%COMP%]{color:#fecaca}.bg-red-200[_ngcontent-%COMP%]{background-color:#fecaca}.border-red-200[_ngcontent-%COMP%]{border:1px solid #fecaca}.text-red-300[_ngcontent-%COMP%]{color:#fca5a5}.bg-red-300[_ngcontent-%COMP%]{background-color:#fca5a5}.border-red-300[_ngcontent-%COMP%]{border:1px solid #fca5a5}.text-red-400[_ngcontent-%COMP%]{color:#f87171}.bg-red-400[_ngcontent-%COMP%]{background-color:#f87171}.border-red-400[_ngcontent-%COMP%]{border:1px solid #f87171}.text-red-500[_ngcontent-%COMP%]{color:#ef4444}.bg-red-500[_ngcontent-%COMP%]{background-color:#ef4444}.border-red-500[_ngcontent-%COMP%]{border:1px solid #ef4444}.text-red-600[_ngcontent-%COMP%]{color:#dc2626}.bg-red-600[_ngcontent-%COMP%]{background-color:#dc2626}.border-red-600[_ngcontent-%COMP%]{border:1px solid #dc2626}.text-red-700[_ngcontent-%COMP%]{color:#b91c1c}.bg-red-700[_ngcontent-%COMP%]{background-color:#b91c1c}.border-red-700[_ngcontent-%COMP%]{border:1px solid #b91c1c}.text-red-800[_ngcontent-%COMP%]{color:#991b1b}.bg-red-800[_ngcontent-%COMP%]{background-color:#991b1b}.border-red-800[_ngcontent-%COMP%]{border:1px solid #991b1b}.text-red-900[_ngcontent-%COMP%]{color:#7f1d1d}.bg-red-900[_ngcontent-%COMP%]{background-color:#7f1d1d}.border-red-900[_ngcontent-%COMP%]{border:1px solid #7f1d1d}.fw-light[_ngcontent-%COMP%]{font-weight:300}.fw-regular[_ngcontent-%COMP%]{font-weight:400}.fw-medium[_ngcontent-%COMP%]{font-weight:500}.fw-semibold[_ngcontent-%COMP%]{font-weight:600}.fw-bold[_ngcontent-%COMP%]{font-weight:700}.ls--2[_ngcontent-%COMP%]{letter-spacing:.2px}.ls--25[_ngcontent-%COMP%]{letter-spacing:.25px}.ls--4[_ngcontent-%COMP%]{letter-spacing:.4px}.ls--15[_ngcontent-%COMP%]{letter-spacing:1.5px}.lh-14[_ngcontent-%COMP%]{line-height:14px}.searchjob-wrapper[_ngcontent-%COMP%]   h4.results[_ngcontent-%COMP%]{font-size:20px;color:#111827;margin:0 0 10px}.searchjob-wrapper[_ngcontent-%COMP%]   .search-results-wrapper[_ngcontent-%COMP%]{margin:30px 0 0}.searchjob-wrapper[_ngcontent-%COMP%]   .search-results-wrapper[_ngcontent-%COMP%]   .left-section[_ngcontent-%COMP%]{overflow:auto}.searchjob-wrapper[_ngcontent-%COMP%]   .search-results-wrapper[_ngcontent-%COMP%]   .left-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{border-radius:0!important;border:none;border-bottom:1px solid #9ca3af;background-color:#fff;padding:12px 20px;margin:0;cursor:pointer}.searchjob-wrapper[_ngcontent-%COMP%]   .search-results-wrapper[_ngcontent-%COMP%]   .left-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child{border-bottom:none}.searchjob-wrapper[_ngcontent-%COMP%]   .search-results-wrapper[_ngcontent-%COMP%]   .left-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background-color:#d1d5db;transition:all .15s ease}.searchjob-wrapper[_ngcontent-%COMP%]   .search-results-wrapper[_ngcontent-%COMP%]   .left-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:16px;margin:0 0 10px;color:#1f2937}.searchjob-wrapper[_ngcontent-%COMP%]   .search-results-wrapper[_ngcontent-%COMP%]   .left-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;color:#4b5563;margin:0;padding:0}.searchjob-wrapper[_ngcontent-%COMP%]   .search-results-wrapper[_ngcontent-%COMP%]   .left-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(:last-child){margin:0 0 6px}.searchjob-wrapper[_ngcontent-%COMP%]   .search-results-wrapper[_ngcontent-%COMP%]   .left-section[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%]{box-shadow:inset 0 -2px #18c36c;-moz-box-shadow:inset 0 -2px 0px 0 #18c36c;-webkit-box-shadow:inset 0 -2px 0px 0 #18c36c;border-bottom:1px solid #18c36c;background-color:#d1d5db;transition:all .15s ease}.searchjob-wrapper[_ngcontent-%COMP%]   .search-results-wrapper[_ngcontent-%COMP%]   .left-section[_ngcontent-%COMP%]   .details-tab[_ngcontent-%COMP%]{background-color:#fff;border-bottom:1px solid #9ca3af}.searchjob-wrapper[_ngcontent-%COMP%]   .search-results-wrapper[_ngcontent-%COMP%]   .left-section[_ngcontent-%COMP%]   .details-tab[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{display:none}.searchjob-wrapper[_ngcontent-%COMP%]   .search-results-wrapper[_ngcontent-%COMP%]   .left-section[_ngcontent-%COMP%]   .details-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%}.searchjob-wrapper[_ngcontent-%COMP%]   .search-results-wrapper[_ngcontent-%COMP%]   .left-section[_ngcontent-%COMP%]   .details-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px}.searchjob-wrapper[_ngcontent-%COMP%]   .search-results-wrapper[_ngcontent-%COMP%]   .left-section[_ngcontent-%COMP%], .searchjob-wrapper[_ngcontent-%COMP%]   .search-results-wrapper[_ngcontent-%COMP%]   .right-section[_ngcontent-%COMP%]{border:1px solid #9ca3af;border-radius:4px!important}.searchjob-wrapper[_ngcontent-%COMP%]   .search-results-wrapper[_ngcontent-%COMP%]   .right-section[_ngcontent-%COMP%]{background-color:#fff;overflow:hidden}.searchjob-wrapper[_ngcontent-%COMP%]   .loader-wrapper[_ngcontent-%COMP%]{position:relative;float:left;margin:50px 0;width:100%}']}),e})()}];let D=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[l.Bz.forChild(Z)],l.Bz]}),e})(),z=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[i.ez,C.m.forRoot(),D]]}),e})()}}]);