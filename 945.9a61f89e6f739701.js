"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[945],{3782:(M,$,b)=>{b.d($,{M:()=>J});var u=b(9862),S=b(5907),T=b(9398),w=b(4593),j=b(5879);let J=(()=>{var P;class E{constructor(r,c,f){this.httpClient=r,this.basePath="https://hiresapi.azurewebsites.net",this.defaultHeaders=new u.WM,this.configuration=new w.V,f&&(this.configuration=f),"string"!=typeof this.configuration.basePath&&(Array.isArray(c)&&c.length>0&&(c=c[0]),"string"!=typeof c&&(c=this.basePath),this.configuration.basePath=c),this.encoder=this.configuration.encoder||new S.H}addToHttpParams(r,c,f){return"object"!=typeof c||c instanceof Date?this.addToHttpParamsRecursive(r,c,f):this.addToHttpParamsRecursive(r,c)}addToHttpParamsRecursive(r,c,f){if(null==c)return r;if("object"==typeof c)if(Array.isArray(c))c.forEach(o=>r=this.addToHttpParamsRecursive(r,o,f));else if(c instanceof Date){if(null==f)throw Error("key may not be null if value is Date");r=r.append(f,c.toISOString().substring(0,10))}else Object.keys(c).forEach(o=>r=this.addToHttpParamsRecursive(r,c[o],null!=f?`${f}.${o}`:o));else{if(null==f)throw Error("key may not be null if value is not object or array");r=r.append(f,c)}return r}apiCandidateProfileActivateOrDeActivatePut(r,c,f,o="body",s=!1,a){let n=new u.LE({encoder:this.encoder});null!=r&&(n=this.addToHttpParams(n,r,"CandidateProfileId")),null!=c&&(n=this.addToHttpParams(n,c,"Active")),null!=f&&(n=this.addToHttpParams(n,f,"StatusId"));let i,e=this.defaultHeaders;i=this.configuration.lookupCredential("Bearer"),i&&(e=e.set("Authorization",i));let t=a&&a.httpHeaderAccept;void 0===t&&(t=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==t&&(e=e.set("Accept",t));let l=a&&a.context;void 0===l&&(l=new u.qT);let d="json";return t&&(d=t.startsWith("text")?"text":this.configuration.isJsonMime(t)?"json":"blob"),this.httpClient.request("put",`${this.configuration.basePath}/api/CandidateProfile/ActivateOrDeActivate`,{context:l,params:n,responseType:d,withCredentials:this.configuration.withCredentials,headers:e,observe:o,reportProgress:s})}apiCandidateProfileAddPost(r,c="body",f=!1,o){let a,s=this.defaultHeaders;a=this.configuration.lookupCredential("Bearer"),a&&(s=s.set("Authorization",a));let n=o&&o.httpHeaderAccept;void 0===n&&(n=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==n&&(s=s.set("Accept",n));let e=o&&o.context;void 0===e&&(e=new u.qT);const t=this.configuration.selectHeaderContentType(["application/json","text/json","application/*+json"]);void 0!==t&&(s=s.set("Content-Type",t));let l="json";return n&&(l=n.startsWith("text")?"text":this.configuration.isJsonMime(n)?"json":"blob"),this.httpClient.request("post",`${this.configuration.basePath}/api/CandidateProfile/Add`,{context:e,body:r,responseType:l,withCredentials:this.configuration.withCredentials,headers:s,observe:c,reportProgress:f})}apiCandidateProfileCandidatePrefJobTypeDelete(r,c="body",f=!1,o){let s=new u.LE({encoder:this.encoder});null!=r&&(s=this.addToHttpParams(s,r,"Id"));let n,a=this.defaultHeaders;n=this.configuration.lookupCredential("Bearer"),n&&(a=a.set("Authorization",n));let e=o&&o.httpHeaderAccept;void 0===e&&(e=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==e&&(a=a.set("Accept",e));let i=o&&o.context;void 0===i&&(i=new u.qT);let t="json";return e&&(t=e.startsWith("text")?"text":this.configuration.isJsonMime(e)?"json":"blob"),this.httpClient.request("delete",`${this.configuration.basePath}/api/CandidateProfile/CandidatePrefJobType`,{context:i,params:s,responseType:t,withCredentials:this.configuration.withCredentials,headers:a,observe:c,reportProgress:f})}apiCandidateProfileCandidatePrefLocationDelete(r,c="body",f=!1,o){let s=new u.LE({encoder:this.encoder});null!=r&&(s=this.addToHttpParams(s,r,"Id"));let n,a=this.defaultHeaders;n=this.configuration.lookupCredential("Bearer"),n&&(a=a.set("Authorization",n));let e=o&&o.httpHeaderAccept;void 0===e&&(e=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==e&&(a=a.set("Accept",e));let i=o&&o.context;void 0===i&&(i=new u.qT);let t="json";return e&&(t=e.startsWith("text")?"text":this.configuration.isJsonMime(e)?"json":"blob"),this.httpClient.request("delete",`${this.configuration.basePath}/api/CandidateProfile/CandidatePrefLocation`,{context:i,params:s,responseType:t,withCredentials:this.configuration.withCredentials,headers:a,observe:c,reportProgress:f})}apiCandidateProfileCandidateProfileDomainDelete(r,c="body",f=!1,o){let s=new u.LE({encoder:this.encoder});null!=r&&(s=this.addToHttpParams(s,r,"Id"));let n,a=this.defaultHeaders;n=this.configuration.lookupCredential("Bearer"),n&&(a=a.set("Authorization",n));let e=o&&o.httpHeaderAccept;void 0===e&&(e=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==e&&(a=a.set("Accept",e));let i=o&&o.context;void 0===i&&(i=new u.qT);let t="json";return e&&(t=e.startsWith("text")?"text":this.configuration.isJsonMime(e)?"json":"blob"),this.httpClient.request("delete",`${this.configuration.basePath}/api/CandidateProfile/CandidateProfileDomain`,{context:i,params:s,responseType:t,withCredentials:this.configuration.withCredentials,headers:a,observe:c,reportProgress:f})}apiCandidateProfileCandidateProfileEmploymentTypeDelete(r,c="body",f=!1,o){let s=new u.LE({encoder:this.encoder});null!=r&&(s=this.addToHttpParams(s,r,"Id"));let n,a=this.defaultHeaders;n=this.configuration.lookupCredential("Bearer"),n&&(a=a.set("Authorization",n));let e=o&&o.httpHeaderAccept;void 0===e&&(e=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==e&&(a=a.set("Accept",e));let i=o&&o.context;void 0===i&&(i=new u.qT);let t="json";return e&&(t=e.startsWith("text")?"text":this.configuration.isJsonMime(e)?"json":"blob"),this.httpClient.request("delete",`${this.configuration.basePath}/api/CandidateProfile/CandidateProfileEmploymentType`,{context:i,params:s,responseType:t,withCredentials:this.configuration.withCredentials,headers:a,observe:c,reportProgress:f})}apiCandidateProfileCandidateProfileSkillsDelete(r,c="body",f=!1,o){let s=new u.LE({encoder:this.encoder});null!=r&&(s=this.addToHttpParams(s,r,"Id"));let n,a=this.defaultHeaders;n=this.configuration.lookupCredential("Bearer"),n&&(a=a.set("Authorization",n));let e=o&&o.httpHeaderAccept;void 0===e&&(e=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==e&&(a=a.set("Accept",e));let i=o&&o.context;void 0===i&&(i=new u.qT);let t="json";return e&&(t=e.startsWith("text")?"text":this.configuration.isJsonMime(e)?"json":"blob"),this.httpClient.request("delete",`${this.configuration.basePath}/api/CandidateProfile/CandidateProfileSkills`,{context:i,params:s,responseType:t,withCredentials:this.configuration.withCredentials,headers:a,observe:c,reportProgress:f})}apiCandidateProfileDeleteCandidateProfileDelete(r,c="body",f=!1,o){let s=new u.LE({encoder:this.encoder});null!=r&&(s=this.addToHttpParams(s,r,"Id"));let n,a=this.defaultHeaders;n=this.configuration.lookupCredential("Bearer"),n&&(a=a.set("Authorization",n));let e=o&&o.httpHeaderAccept;void 0===e&&(e=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==e&&(a=a.set("Accept",e));let i=o&&o.context;void 0===i&&(i=new u.qT);let t="json";return e&&(t=e.startsWith("text")?"text":this.configuration.isJsonMime(e)?"json":"blob"),this.httpClient.request("delete",`${this.configuration.basePath}/api/CandidateProfile/DeleteCandidateProfile`,{context:i,params:s,responseType:t,withCredentials:this.configuration.withCredentials,headers:a,observe:c,reportProgress:f})}apiCandidateProfileGetByConsultancyUserGet(r,c="body",f=!1,o){let s=new u.LE({encoder:this.encoder});null!=r&&(s=this.addToHttpParams(s,r,"consultancyUserId"));let n,a=this.defaultHeaders;n=this.configuration.lookupCredential("Bearer"),n&&(a=a.set("Authorization",n));let e=o&&o.httpHeaderAccept;void 0===e&&(e=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==e&&(a=a.set("Accept",e));let i=o&&o.context;void 0===i&&(i=new u.qT);let t="json";return e&&(t=e.startsWith("text")?"text":this.configuration.isJsonMime(e)?"json":"blob"),this.httpClient.request("get",`${this.configuration.basePath}/api/CandidateProfile/GetByConsultancyUser`,{context:i,params:s,responseType:t,withCredentials:this.configuration.withCredentials,headers:a,observe:c,reportProgress:f})}apiCandidateProfileGetByConsultancyUserSimplelistGet(r,c,f,o="body",s=!1,a){let n=new u.LE({encoder:this.encoder});null!=r&&(n=this.addToHttpParams(n,r,"consultancyUserId")),null!=c&&(n=this.addToHttpParams(n,c,"isActive")),null!=f&&(n=this.addToHttpParams(n,f,"statusId"));let i,e=this.defaultHeaders;i=this.configuration.lookupCredential("Bearer"),i&&(e=e.set("Authorization",i));let t=a&&a.httpHeaderAccept;void 0===t&&(t=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==t&&(e=e.set("Accept",t));let l=a&&a.context;void 0===l&&(l=new u.qT);let d="json";return t&&(d=t.startsWith("text")?"text":this.configuration.isJsonMime(t)?"json":"blob"),this.httpClient.request("get",`${this.configuration.basePath}/api/CandidateProfile/GetByConsultancyUserSimplelist`,{context:l,params:n,responseType:d,withCredentials:this.configuration.withCredentials,headers:e,observe:o,reportProgress:s})}apiCandidateProfileGetByUserGet(r,c,f="body",o=!1,s){let a=new u.LE({encoder:this.encoder});null!=r&&(a=this.addToHttpParams(a,r,"userId")),null!=c&&(a=this.addToHttpParams(a,c,"id"));let e,n=this.defaultHeaders;e=this.configuration.lookupCredential("Bearer"),e&&(n=n.set("Authorization",e));let i=s&&s.httpHeaderAccept;void 0===i&&(i=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==i&&(n=n.set("Accept",i));let t=s&&s.context;void 0===t&&(t=new u.qT);let l="json";return i&&(l=i.startsWith("text")?"text":this.configuration.isJsonMime(i)?"json":"blob"),this.httpClient.request("get",`${this.configuration.basePath}/api/CandidateProfile/GetByUser`,{context:t,params:a,responseType:l,withCredentials:this.configuration.withCredentials,headers:n,observe:f,reportProgress:o})}apiCandidateProfileGetGet(r,c="body",f=!1,o){let s=new u.LE({encoder:this.encoder});null!=r&&(s=this.addToHttpParams(s,r,"Id"));let n,a=this.defaultHeaders;n=this.configuration.lookupCredential("Bearer"),n&&(a=a.set("Authorization",n));let e=o&&o.httpHeaderAccept;void 0===e&&(e=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==e&&(a=a.set("Accept",e));let i=o&&o.context;void 0===i&&(i=new u.qT);let t="json";return e&&(t=e.startsWith("text")?"text":this.configuration.isJsonMime(e)?"json":"blob"),this.httpClient.request("get",`${this.configuration.basePath}/api/CandidateProfile/Get`,{context:i,params:s,responseType:t,withCredentials:this.configuration.withCredentials,headers:a,observe:c,reportProgress:f})}apiCandidateProfileSearchCandidateProfilesGet(r,c,f,o,s,a,n,e,i,t="body",l=!1,d){let p=new u.LE({encoder:this.encoder});null!=r&&(p=this.addToHttpParams(p,r,"Skill")),c&&c.forEach(y=>{p=this.addToHttpParams(p,y,"skills")}),f&&f.forEach(y=>{p=this.addToHttpParams(p,y,"cityIds")}),o&&o.forEach(y=>{p=this.addToHttpParams(p,y,"stateIds")}),s&&s.forEach(y=>{p=this.addToHttpParams(p,y,"visas")}),null!=a&&(p=this.addToHttpParams(p,a,"startYearsOfExp")),null!=n&&(p=this.addToHttpParams(p,n,"endYearsOfExp")),null!=e&&(p=this.addToHttpParams(p,e,"RowsOfPage")),null!=i&&(p=this.addToHttpParams(p,i,"PageNumber"));let g,H=this.defaultHeaders;g=this.configuration.lookupCredential("Bearer"),g&&(H=H.set("Authorization",g));let h=d&&d.httpHeaderAccept;void 0===h&&(h=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==h&&(H=H.set("Accept",h));let A=d&&d.context;void 0===A&&(A=new u.qT);let C="json";return h&&(C=h.startsWith("text")?"text":this.configuration.isJsonMime(h)?"json":"blob"),this.httpClient.request("get",`${this.configuration.basePath}/api/CandidateProfile/SearchCandidateProfiles`,{context:A,params:p,responseType:C,withCredentials:this.configuration.withCredentials,headers:H,observe:t,reportProgress:l})}apiCandidateProfileUpdatePut(r,c="body",f=!1,o){let a,s=this.defaultHeaders;a=this.configuration.lookupCredential("Bearer"),a&&(s=s.set("Authorization",a));let n=o&&o.httpHeaderAccept;void 0===n&&(n=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==n&&(s=s.set("Accept",n));let e=o&&o.context;void 0===e&&(e=new u.qT);const t=this.configuration.selectHeaderContentType(["application/json","text/json","application/*+json"]);void 0!==t&&(s=s.set("Content-Type",t));let l="json";return n&&(l=n.startsWith("text")?"text":this.configuration.isJsonMime(n)?"json":"blob"),this.httpClient.request("put",`${this.configuration.basePath}/api/CandidateProfile/Update`,{context:e,body:r,responseType:l,withCredentials:this.configuration.withCredentials,headers:s,observe:c,reportProgress:f})}}return(P=E).\u0275fac=function(r){return new(r||P)(j.LFG(u.eN),j.LFG(T.G,8),j.LFG(w.V,8))},P.\u0275prov=j.Yz7({token:P,factory:P.\u0275fac,providedIn:"root"}),E})()},7161:(M,$,b)=>{b.d($,{U:()=>J});var u=b(9862),S=b(5907),T=b(9398),w=b(4593),j=b(5879);let J=(()=>{var P;class E{constructor(r,c,f){this.httpClient=r,this.basePath="https://hiresapi.azurewebsites.net",this.defaultHeaders=new u.WM,this.configuration=new w.V,f&&(this.configuration=f),"string"!=typeof this.configuration.basePath&&(Array.isArray(c)&&c.length>0&&(c=c[0]),"string"!=typeof c&&(c=this.basePath),this.configuration.basePath=c),this.encoder=this.configuration.encoder||new S.H}addToHttpParams(r,c,f){return"object"!=typeof c||c instanceof Date?this.addToHttpParamsRecursive(r,c,f):this.addToHttpParamsRecursive(r,c)}addToHttpParamsRecursive(r,c,f){if(null==c)return r;if("object"==typeof c)if(Array.isArray(c))c.forEach(o=>r=this.addToHttpParamsRecursive(r,o,f));else if(c instanceof Date){if(null==f)throw Error("key may not be null if value is Date");r=r.append(f,c.toISOString().substring(0,10))}else Object.keys(c).forEach(o=>r=this.addToHttpParamsRecursive(r,c[o],null!=f?`${f}.${o}`:o));else{if(null==f)throw Error("key may not be null if value is not object or array");r=r.append(f,c)}return r}apiJobOpeningAddPost(r,c="body",f=!1,o){let a,s=this.defaultHeaders;a=this.configuration.lookupCredential("Bearer"),a&&(s=s.set("Authorization",a));let n=o&&o.httpHeaderAccept;void 0===n&&(n=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==n&&(s=s.set("Accept",n));let e=o&&o.context;void 0===e&&(e=new u.qT);const t=this.configuration.selectHeaderContentType(["application/json","text/json","application/*+json"]);void 0!==t&&(s=s.set("Content-Type",t));let l="json";return n&&(l=n.startsWith("text")?"text":this.configuration.isJsonMime(n)?"json":"blob"),this.httpClient.request("post",`${this.configuration.basePath}/api/JobOpening/Add`,{context:e,body:r,responseType:l,withCredentials:this.configuration.withCredentials,headers:s,observe:c,reportProgress:f})}apiJobOpeningAllJobOpeningGet(r="body",c=!1,f){let s,o=this.defaultHeaders;s=this.configuration.lookupCredential("Bearer"),s&&(o=o.set("Authorization",s));let a=f&&f.httpHeaderAccept;void 0===a&&(a=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==a&&(o=o.set("Accept",a));let n=f&&f.context;void 0===n&&(n=new u.qT);let e="json";return a&&(e=a.startsWith("text")?"text":this.configuration.isJsonMime(a)?"json":"blob"),this.httpClient.request("get",`${this.configuration.basePath}/api/JobOpening/AllJobOpening`,{context:n,responseType:e,withCredentials:this.configuration.withCredentials,headers:o,observe:r,reportProgress:c})}apiJobOpeningApplyPost(r,c="body",f=!1,o){let a,s=this.defaultHeaders;a=this.configuration.lookupCredential("Bearer"),a&&(s=s.set("Authorization",a));let n=o&&o.httpHeaderAccept;void 0===n&&(n=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==n&&(s=s.set("Accept",n));let e=o&&o.context;void 0===e&&(e=new u.qT);const t=this.configuration.selectHeaderContentType(["application/json","text/json","application/*+json"]);void 0!==t&&(s=s.set("Content-Type",t));let l="json";return n&&(l=n.startsWith("text")?"text":this.configuration.isJsonMime(n)?"json":"blob"),this.httpClient.request("post",`${this.configuration.basePath}/api/JobOpening/Apply`,{context:e,body:r,responseType:l,withCredentials:this.configuration.withCredentials,headers:s,observe:c,reportProgress:f})}apiJobOpeningGetAllResumeReceivedByJobIdGet(r,c="body",f=!1,o){let s=new u.LE({encoder:this.encoder});null!=r&&(s=this.addToHttpParams(s,r,"JobOpeningId"));let n,a=this.defaultHeaders;n=this.configuration.lookupCredential("Bearer"),n&&(a=a.set("Authorization",n));let e=o&&o.httpHeaderAccept;void 0===e&&(e=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==e&&(a=a.set("Accept",e));let i=o&&o.context;void 0===i&&(i=new u.qT);let t="json";return e&&(t=e.startsWith("text")?"text":this.configuration.isJsonMime(e)?"json":"blob"),this.httpClient.request("get",`${this.configuration.basePath}/api/JobOpening/GetAllResumeReceivedByJobId`,{context:i,params:s,responseType:t,withCredentials:this.configuration.withCredentials,headers:a,observe:c,reportProgress:f})}apiJobOpeningGetJobOpeningProfileMapSummaryGet(r,c="body",f=!1,o){let s=new u.LE({encoder:this.encoder});null!=r&&(s=this.addToHttpParams(s,r,"ConsultancyUserId"));let n,a=this.defaultHeaders;n=this.configuration.lookupCredential("Bearer"),n&&(a=a.set("Authorization",n));let e=o&&o.httpHeaderAccept;void 0===e&&(e=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==e&&(a=a.set("Accept",e));let i=o&&o.context;void 0===i&&(i=new u.qT);let t="json";return e&&(t=e.startsWith("text")?"text":this.configuration.isJsonMime(e)?"json":"blob"),this.httpClient.request("get",`${this.configuration.basePath}/api/JobOpening/GetJobOpeningProfileMapSummary`,{context:i,params:s,responseType:t,withCredentials:this.configuration.withCredentials,headers:a,observe:c,reportProgress:f})}apiJobOpeningJobOpeningByIdGet(r,c="body",f=!1,o){let s=new u.LE({encoder:this.encoder});null!=r&&(s=this.addToHttpParams(s,r,"Id"));let n,a=this.defaultHeaders;n=this.configuration.lookupCredential("Bearer"),n&&(a=a.set("Authorization",n));let e=o&&o.httpHeaderAccept;void 0===e&&(e=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==e&&(a=a.set("Accept",e));let i=o&&o.context;void 0===i&&(i=new u.qT);let t="json";return e&&(t=e.startsWith("text")?"text":this.configuration.isJsonMime(e)?"json":"blob"),this.httpClient.request("get",`${this.configuration.basePath}/api/JobOpening/JobOpeningById`,{context:i,params:s,responseType:t,withCredentials:this.configuration.withCredentials,headers:a,observe:c,reportProgress:f})}apiJobOpeningJobOpeningDelete(r,c="body",f=!1,o){let s=new u.LE({encoder:this.encoder});null!=r&&(s=this.addToHttpParams(s,r,"Id"));let n,a=this.defaultHeaders;n=this.configuration.lookupCredential("Bearer"),n&&(a=a.set("Authorization",n));let e=o&&o.httpHeaderAccept;void 0===e&&(e=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==e&&(a=a.set("Accept",e));let i=o&&o.context;void 0===i&&(i=new u.qT);let t="json";return e&&(t=e.startsWith("text")?"text":this.configuration.isJsonMime(e)?"json":"blob"),this.httpClient.request("delete",`${this.configuration.basePath}/api/JobOpening/JobOpening`,{context:i,params:s,responseType:t,withCredentials:this.configuration.withCredentials,headers:a,observe:c,reportProgress:f})}apiJobOpeningJobOpeningEmploymentTypeDelete(r,c="body",f=!1,o){let s=new u.LE({encoder:this.encoder});null!=r&&(s=this.addToHttpParams(s,r,"Id"));let n,a=this.defaultHeaders;n=this.configuration.lookupCredential("Bearer"),n&&(a=a.set("Authorization",n));let e=o&&o.httpHeaderAccept;void 0===e&&(e=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==e&&(a=a.set("Accept",e));let i=o&&o.context;void 0===i&&(i=new u.qT);let t="json";return e&&(t=e.startsWith("text")?"text":this.configuration.isJsonMime(e)?"json":"blob"),this.httpClient.request("delete",`${this.configuration.basePath}/api/JobOpening/JobOpeningEmploymentType`,{context:i,params:s,responseType:t,withCredentials:this.configuration.withCredentials,headers:a,observe:c,reportProgress:f})}apiJobOpeningJobOpeningJobTypeDelete(r,c="body",f=!1,o){let s=new u.LE({encoder:this.encoder});null!=r&&(s=this.addToHttpParams(s,r,"Id"));let n,a=this.defaultHeaders;n=this.configuration.lookupCredential("Bearer"),n&&(a=a.set("Authorization",n));let e=o&&o.httpHeaderAccept;void 0===e&&(e=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==e&&(a=a.set("Accept",e));let i=o&&o.context;void 0===i&&(i=new u.qT);let t="json";return e&&(t=e.startsWith("text")?"text":this.configuration.isJsonMime(e)?"json":"blob"),this.httpClient.request("delete",`${this.configuration.basePath}/api/JobOpening/JobOpeningJobType`,{context:i,params:s,responseType:t,withCredentials:this.configuration.withCredentials,headers:a,observe:c,reportProgress:f})}apiJobOpeningJobOpeningLocationDelete(r,c="body",f=!1,o){let s=new u.LE({encoder:this.encoder});null!=r&&(s=this.addToHttpParams(s,r,"Id"));let n,a=this.defaultHeaders;n=this.configuration.lookupCredential("Bearer"),n&&(a=a.set("Authorization",n));let e=o&&o.httpHeaderAccept;void 0===e&&(e=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==e&&(a=a.set("Accept",e));let i=o&&o.context;void 0===i&&(i=new u.qT);let t="json";return e&&(t=e.startsWith("text")?"text":this.configuration.isJsonMime(e)?"json":"blob"),this.httpClient.request("delete",`${this.configuration.basePath}/api/JobOpening/JobOpeningLocation`,{context:i,params:s,responseType:t,withCredentials:this.configuration.withCredentials,headers:a,observe:c,reportProgress:f})}apiJobOpeningJobOpeningSkillsDelete(r,c="body",f=!1,o){let s=new u.LE({encoder:this.encoder});null!=r&&(s=this.addToHttpParams(s,r,"Id"));let n,a=this.defaultHeaders;n=this.configuration.lookupCredential("Bearer"),n&&(a=a.set("Authorization",n));let e=o&&o.httpHeaderAccept;void 0===e&&(e=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==e&&(a=a.set("Accept",e));let i=o&&o.context;void 0===i&&(i=new u.qT);let t="json";return e&&(t=e.startsWith("text")?"text":this.configuration.isJsonMime(e)?"json":"blob"),this.httpClient.request("delete",`${this.configuration.basePath}/api/JobOpening/JobOpeningSkills`,{context:i,params:s,responseType:t,withCredentials:this.configuration.withCredentials,headers:a,observe:c,reportProgress:f})}apiJobOpeningJobOpeningVisaMapDelete(r,c="body",f=!1,o){let s=new u.LE({encoder:this.encoder});null!=r&&(s=this.addToHttpParams(s,r,"Id"));let n,a=this.defaultHeaders;n=this.configuration.lookupCredential("Bearer"),n&&(a=a.set("Authorization",n));let e=o&&o.httpHeaderAccept;void 0===e&&(e=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==e&&(a=a.set("Accept",e));let i=o&&o.context;void 0===i&&(i=new u.qT);let t="json";return e&&(t=e.startsWith("text")?"text":this.configuration.isJsonMime(e)?"json":"blob"),this.httpClient.request("delete",`${this.configuration.basePath}/api/JobOpening/JobOpeningVisaMap`,{context:i,params:s,responseType:t,withCredentials:this.configuration.withCredentials,headers:a,observe:c,reportProgress:f})}apiJobOpeningJobOpeningsByConsultancyIDGet(r,c="body",f=!1,o){let s=new u.LE({encoder:this.encoder});null!=r&&(s=this.addToHttpParams(s,r,"ConsultancyId"));let n,a=this.defaultHeaders;n=this.configuration.lookupCredential("Bearer"),n&&(a=a.set("Authorization",n));let e=o&&o.httpHeaderAccept;void 0===e&&(e=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==e&&(a=a.set("Accept",e));let i=o&&o.context;void 0===i&&(i=new u.qT);let t="json";return e&&(t=e.startsWith("text")?"text":this.configuration.isJsonMime(e)?"json":"blob"),this.httpClient.request("get",`${this.configuration.basePath}/api/JobOpening/JobOpeningsByConsultancyID`,{context:i,params:s,responseType:t,withCredentials:this.configuration.withCredentials,headers:a,observe:c,reportProgress:f})}apiJobOpeningSearchJobOpeningsGet(r,c,f,o,s,a,n,e,i,t,l,d,p="body",H=!1,g){let h=new u.LE({encoder:this.encoder});r&&r.forEach(V=>{h=this.addToHttpParams(h,V,"searchStrings")}),c&&c.forEach(V=>{h=this.addToHttpParams(h,V,"cityIds")}),f&&f.forEach(V=>{h=this.addToHttpParams(h,V,"skills")}),o&&o.forEach(V=>{h=this.addToHttpParams(h,V,"visas")}),s&&s.forEach(V=>{h=this.addToHttpParams(h,V,"employmentTypes")}),a&&a.forEach(V=>{h=this.addToHttpParams(h,V,"jobTypes")}),null!=n&&(h=this.addToHttpParams(h,n,"startYearsOfExp")),null!=e&&(h=this.addToHttpParams(h,e,"endYearsOfExp")),null!=i&&(h=this.addToHttpParams(h,i,"RowsOfPage")),null!=t&&(h=this.addToHttpParams(h,t,"PageNumber")),null!=l&&(h=this.addToHttpParams(h,l,"PostedStartDate")),null!=d&&(h=this.addToHttpParams(h,d,"PostedEndDate"));let C,A=this.defaultHeaders;C=this.configuration.lookupCredential("Bearer"),C&&(A=A.set("Authorization",C));let x=g&&g.httpHeaderAccept;void 0===x&&(x=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==x&&(A=A.set("Accept",x));let y=g&&g.context;void 0===y&&(y=new u.qT);let m="json";return x&&(m=x.startsWith("text")?"text":this.configuration.isJsonMime(x)?"json":"blob"),this.httpClient.request("get",`${this.configuration.basePath}/api/JobOpening/SearchJobOpenings`,{context:y,params:h,responseType:m,withCredentials:this.configuration.withCredentials,headers:A,observe:p,reportProgress:H})}apiJobOpeningUpdatePut(r,c="body",f=!1,o){let a,s=this.defaultHeaders;a=this.configuration.lookupCredential("Bearer"),a&&(s=s.set("Authorization",a));let n=o&&o.httpHeaderAccept;void 0===n&&(n=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==n&&(s=s.set("Accept",n));let e=o&&o.context;void 0===e&&(e=new u.qT);const t=this.configuration.selectHeaderContentType(["application/json","text/json","application/*+json"]);void 0!==t&&(s=s.set("Content-Type",t));let l="json";return n&&(l=n.startsWith("text")?"text":this.configuration.isJsonMime(n)?"json":"blob"),this.httpClient.request("put",`${this.configuration.basePath}/api/JobOpening/Update`,{context:e,body:r,responseType:l,withCredentials:this.configuration.withCredentials,headers:s,observe:c,reportProgress:f})}}return(P=E).\u0275fac=function(r){return new(r||P)(j.LFG(u.eN),j.LFG(T.G,8),j.LFG(w.V,8))},P.\u0275prov=j.Yz7({token:P,factory:P.\u0275fac,providedIn:"root"}),E})()},9945:(M,$,b)=>{b.d($,{v_:()=>S.v,pp:()=>E,UK:()=>r.U,KD:()=>f.K}),b(3782);var S=b(773),T=b(9862),w=b(5907),j=b(9398),J=b(4593),P=b(5879);let E=(()=>{var s;class a{constructor(e,i,t){this.httpClient=e,this.basePath="https://hiresapi.azurewebsites.net",this.defaultHeaders=new T.WM,this.configuration=new J.V,t&&(this.configuration=t),"string"!=typeof this.configuration.basePath&&(Array.isArray(i)&&i.length>0&&(i=i[0]),"string"!=typeof i&&(i=this.basePath),this.configuration.basePath=i),this.encoder=this.configuration.encoder||new w.H}addToHttpParams(e,i,t){return"object"!=typeof i||i instanceof Date?this.addToHttpParamsRecursive(e,i,t):this.addToHttpParamsRecursive(e,i)}addToHttpParamsRecursive(e,i,t){if(null==i)return e;if("object"==typeof i)if(Array.isArray(i))i.forEach(l=>e=this.addToHttpParamsRecursive(e,l,t));else if(i instanceof Date){if(null==t)throw Error("key may not be null if value is Date");e=e.append(t,i.toISOString().substring(0,10))}else Object.keys(i).forEach(l=>e=this.addToHttpParamsRecursive(e,i[l],null!=t?`${t}.${l}`:l));else{if(null==t)throw Error("key may not be null if value is not object or array");e=e.append(t,i)}return e}apiConsultancyAddPost(e,i="body",t=!1,l){let p,d=this.defaultHeaders;p=this.configuration.lookupCredential("Bearer"),p&&(d=d.set("Authorization",p));let H=l&&l.httpHeaderAccept;void 0===H&&(H=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==H&&(d=d.set("Accept",H));let g=l&&l.context;void 0===g&&(g=new T.qT);const A=this.configuration.selectHeaderContentType(["application/json","text/json","application/*+json"]);void 0!==A&&(d=d.set("Content-Type",A));let C="json";return H&&(C=H.startsWith("text")?"text":this.configuration.isJsonMime(H)?"json":"blob"),this.httpClient.request("post",`${this.configuration.basePath}/api/Consultancy/Add`,{context:g,body:e,responseType:C,withCredentials:this.configuration.withCredentials,headers:d,observe:i,reportProgress:t})}apiConsultancyAllConsultancyGet(e="body",i=!1,t){let d,l=this.defaultHeaders;d=this.configuration.lookupCredential("Bearer"),d&&(l=l.set("Authorization",d));let p=t&&t.httpHeaderAccept;void 0===p&&(p=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==p&&(l=l.set("Accept",p));let H=t&&t.context;void 0===H&&(H=new T.qT);let g="json";return p&&(g=p.startsWith("text")?"text":this.configuration.isJsonMime(p)?"json":"blob"),this.httpClient.request("get",`${this.configuration.basePath}/api/Consultancy/AllConsultancy`,{context:H,responseType:g,withCredentials:this.configuration.withCredentials,headers:l,observe:e,reportProgress:i})}apiConsultancyConsultancyByIdGet(e,i="body",t=!1,l){let d=new T.LE({encoder:this.encoder});null!=e&&(d=this.addToHttpParams(d,e,"Id"));let H,p=this.defaultHeaders;H=this.configuration.lookupCredential("Bearer"),H&&(p=p.set("Authorization",H));let g=l&&l.httpHeaderAccept;void 0===g&&(g=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==g&&(p=p.set("Accept",g));let h=l&&l.context;void 0===h&&(h=new T.qT);let A="json";return g&&(A=g.startsWith("text")?"text":this.configuration.isJsonMime(g)?"json":"blob"),this.httpClient.request("get",`${this.configuration.basePath}/api/Consultancy/ConsultancyById`,{context:h,params:d,responseType:A,withCredentials:this.configuration.withCredentials,headers:p,observe:i,reportProgress:t})}apiConsultancySearchConsultanciesGet(e,i="body",t=!1,l){let d=new T.LE({encoder:this.encoder});null!=e&&(d=this.addToHttpParams(d,e,"conname"));let H,p=this.defaultHeaders;H=this.configuration.lookupCredential("Bearer"),H&&(p=p.set("Authorization",H));let g=l&&l.httpHeaderAccept;void 0===g&&(g=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==g&&(p=p.set("Accept",g));let h=l&&l.context;void 0===h&&(h=new T.qT);let A="json";return g&&(A=g.startsWith("text")?"text":this.configuration.isJsonMime(g)?"json":"blob"),this.httpClient.request("get",`${this.configuration.basePath}/api/Consultancy/SearchConsultancies`,{context:h,params:d,responseType:A,withCredentials:this.configuration.withCredentials,headers:p,observe:i,reportProgress:t})}apiConsultancyUpdatePut(e,i="body",t=!1,l){let p,d=this.defaultHeaders;p=this.configuration.lookupCredential("Bearer"),p&&(d=d.set("Authorization",p));let H=l&&l.httpHeaderAccept;void 0===H&&(H=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==H&&(d=d.set("Accept",H));let g=l&&l.context;void 0===g&&(g=new T.qT);const A=this.configuration.selectHeaderContentType(["application/json","text/json","application/*+json"]);void 0!==A&&(d=d.set("Content-Type",A));let C="json";return H&&(C=H.startsWith("text")?"text":this.configuration.isJsonMime(H)?"json":"blob"),this.httpClient.request("put",`${this.configuration.basePath}/api/Consultancy/Update`,{context:g,body:e,responseType:C,withCredentials:this.configuration.withCredentials,headers:d,observe:i,reportProgress:t})}}return(s=a).\u0275fac=function(e){return new(e||s)(P.LFG(T.eN),P.LFG(j.G,8),P.LFG(J.V,8))},s.\u0275prov=P.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),a})();var r=b(7161),f=(b(2578),b(9144))}}]);