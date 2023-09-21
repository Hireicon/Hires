"use strict";(self.webpackChunkhireicon=self.webpackChunkhireicon||[]).push([[211],{2144:($,S,y)=>{y.d(S,{M:()=>w});var H=y(520),m=y(5784),P=y(5763),j=y(9741),b=y(5e3);let w=(()=>{class x{constructor(r,c,p){this.httpClient=r,this.basePath="https://hiresapi.azurewebsites.net",this.defaultHeaders=new H.WM,this.configuration=new j.V,p&&(this.configuration=p),"string"!=typeof this.configuration.basePath&&(Array.isArray(c)&&c.length>0&&(c=c[0]),"string"!=typeof c&&(c=this.basePath),this.configuration.basePath=c),this.encoder=this.configuration.encoder||new m.H}addToHttpParams(r,c,p){return"object"!=typeof c||c instanceof Date?this.addToHttpParamsRecursive(r,c,p):this.addToHttpParamsRecursive(r,c)}addToHttpParamsRecursive(r,c,p){if(null==c)return r;if("object"==typeof c)if(Array.isArray(c))c.forEach(o=>r=this.addToHttpParamsRecursive(r,o,p));else if(c instanceof Date){if(null==p)throw Error("key may not be null if value is Date");r=r.append(p,c.toISOString().substr(0,10))}else Object.keys(c).forEach(o=>r=this.addToHttpParamsRecursive(r,c[o],null!=p?`${p}.${o}`:o));else{if(null==p)throw Error("key may not be null if value is not object or array");r=r.append(p,c)}return r}apiCandidateProfileActivateOrDeActivatePut(r,c,p,o="body",l=!1,a){let n=new H.LE({encoder:this.encoder});null!=r&&(n=this.addToHttpParams(n,r,"CandidateProfileId")),null!=c&&(n=this.addToHttpParams(n,c,"Active")),null!=p&&(n=this.addToHttpParams(n,p,"StatusId"));let t,e=this.defaultHeaders;t=this.configuration.lookupCredential("Bearer"),t&&(e=e.set("Authorization",t));let i=a&&a.httpHeaderAccept;void 0===i&&(i=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==i&&(e=e.set("Accept",i));let s=a&&a.context;void 0===s&&(s=new H.qT);let d="json";return i&&(d=i.startsWith("text")?"text":this.configuration.isJsonMime(i)?"json":"blob"),this.httpClient.request("put",`${this.configuration.basePath}/api/CandidateProfile/ActivateOrDeActivate`,{context:s,params:n,responseType:d,withCredentials:this.configuration.withCredentials,headers:e,observe:o,reportProgress:l})}apiCandidateProfileAddPost(r,c="body",p=!1,o){let a,l=this.defaultHeaders;a=this.configuration.lookupCredential("Bearer"),a&&(l=l.set("Authorization",a));let n=o&&o.httpHeaderAccept;void 0===n&&(n=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==n&&(l=l.set("Accept",n));let e=o&&o.context;void 0===e&&(e=new H.qT);const i=this.configuration.selectHeaderContentType(["application/json","text/json","application/*+json"]);void 0!==i&&(l=l.set("Content-Type",i));let s="json";return n&&(s=n.startsWith("text")?"text":this.configuration.isJsonMime(n)?"json":"blob"),this.httpClient.request("post",`${this.configuration.basePath}/api/CandidateProfile/Add`,{context:e,body:r,responseType:s,withCredentials:this.configuration.withCredentials,headers:l,observe:c,reportProgress:p})}apiCandidateProfileCandidatePrefJobTypeDelete(r,c="body",p=!1,o){let l=new H.LE({encoder:this.encoder});null!=r&&(l=this.addToHttpParams(l,r,"Id"));let n,a=this.defaultHeaders;n=this.configuration.lookupCredential("Bearer"),n&&(a=a.set("Authorization",n));let e=o&&o.httpHeaderAccept;void 0===e&&(e=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==e&&(a=a.set("Accept",e));let t=o&&o.context;void 0===t&&(t=new H.qT);let i="json";return e&&(i=e.startsWith("text")?"text":this.configuration.isJsonMime(e)?"json":"blob"),this.httpClient.request("delete",`${this.configuration.basePath}/api/CandidateProfile/CandidatePrefJobType`,{context:t,params:l,responseType:i,withCredentials:this.configuration.withCredentials,headers:a,observe:c,reportProgress:p})}apiCandidateProfileCandidatePrefLocationDelete(r,c="body",p=!1,o){let l=new H.LE({encoder:this.encoder});null!=r&&(l=this.addToHttpParams(l,r,"Id"));let n,a=this.defaultHeaders;n=this.configuration.lookupCredential("Bearer"),n&&(a=a.set("Authorization",n));let e=o&&o.httpHeaderAccept;void 0===e&&(e=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==e&&(a=a.set("Accept",e));let t=o&&o.context;void 0===t&&(t=new H.qT);let i="json";return e&&(i=e.startsWith("text")?"text":this.configuration.isJsonMime(e)?"json":"blob"),this.httpClient.request("delete",`${this.configuration.basePath}/api/CandidateProfile/CandidatePrefLocation`,{context:t,params:l,responseType:i,withCredentials:this.configuration.withCredentials,headers:a,observe:c,reportProgress:p})}apiCandidateProfileCandidateProfileDomainDelete(r,c="body",p=!1,o){let l=new H.LE({encoder:this.encoder});null!=r&&(l=this.addToHttpParams(l,r,"Id"));let n,a=this.defaultHeaders;n=this.configuration.lookupCredential("Bearer"),n&&(a=a.set("Authorization",n));let e=o&&o.httpHeaderAccept;void 0===e&&(e=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==e&&(a=a.set("Accept",e));let t=o&&o.context;void 0===t&&(t=new H.qT);let i="json";return e&&(i=e.startsWith("text")?"text":this.configuration.isJsonMime(e)?"json":"blob"),this.httpClient.request("delete",`${this.configuration.basePath}/api/CandidateProfile/CandidateProfileDomain`,{context:t,params:l,responseType:i,withCredentials:this.configuration.withCredentials,headers:a,observe:c,reportProgress:p})}apiCandidateProfileCandidateProfileEmploymentTypeDelete(r,c="body",p=!1,o){let l=new H.LE({encoder:this.encoder});null!=r&&(l=this.addToHttpParams(l,r,"Id"));let n,a=this.defaultHeaders;n=this.configuration.lookupCredential("Bearer"),n&&(a=a.set("Authorization",n));let e=o&&o.httpHeaderAccept;void 0===e&&(e=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==e&&(a=a.set("Accept",e));let t=o&&o.context;void 0===t&&(t=new H.qT);let i="json";return e&&(i=e.startsWith("text")?"text":this.configuration.isJsonMime(e)?"json":"blob"),this.httpClient.request("delete",`${this.configuration.basePath}/api/CandidateProfile/CandidateProfileEmploymentType`,{context:t,params:l,responseType:i,withCredentials:this.configuration.withCredentials,headers:a,observe:c,reportProgress:p})}apiCandidateProfileCandidateProfileSkillsDelete(r,c="body",p=!1,o){let l=new H.LE({encoder:this.encoder});null!=r&&(l=this.addToHttpParams(l,r,"Id"));let n,a=this.defaultHeaders;n=this.configuration.lookupCredential("Bearer"),n&&(a=a.set("Authorization",n));let e=o&&o.httpHeaderAccept;void 0===e&&(e=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==e&&(a=a.set("Accept",e));let t=o&&o.context;void 0===t&&(t=new H.qT);let i="json";return e&&(i=e.startsWith("text")?"text":this.configuration.isJsonMime(e)?"json":"blob"),this.httpClient.request("delete",`${this.configuration.basePath}/api/CandidateProfile/CandidateProfileSkills`,{context:t,params:l,responseType:i,withCredentials:this.configuration.withCredentials,headers:a,observe:c,reportProgress:p})}apiCandidateProfileDeleteCandidateProfileDelete(r,c="body",p=!1,o){let l=new H.LE({encoder:this.encoder});null!=r&&(l=this.addToHttpParams(l,r,"Id"));let n,a=this.defaultHeaders;n=this.configuration.lookupCredential("Bearer"),n&&(a=a.set("Authorization",n));let e=o&&o.httpHeaderAccept;void 0===e&&(e=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==e&&(a=a.set("Accept",e));let t=o&&o.context;void 0===t&&(t=new H.qT);let i="json";return e&&(i=e.startsWith("text")?"text":this.configuration.isJsonMime(e)?"json":"blob"),this.httpClient.request("delete",`${this.configuration.basePath}/api/CandidateProfile/DeleteCandidateProfile`,{context:t,params:l,responseType:i,withCredentials:this.configuration.withCredentials,headers:a,observe:c,reportProgress:p})}apiCandidateProfileGetByConsultancyUserGet(r,c="body",p=!1,o){let l=new H.LE({encoder:this.encoder});null!=r&&(l=this.addToHttpParams(l,r,"consultancyUserId"));let n,a=this.defaultHeaders;n=this.configuration.lookupCredential("Bearer"),n&&(a=a.set("Authorization",n));let e=o&&o.httpHeaderAccept;void 0===e&&(e=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==e&&(a=a.set("Accept",e));let t=o&&o.context;void 0===t&&(t=new H.qT);let i="json";return e&&(i=e.startsWith("text")?"text":this.configuration.isJsonMime(e)?"json":"blob"),this.httpClient.request("get",`${this.configuration.basePath}/api/CandidateProfile/GetByConsultancyUser`,{context:t,params:l,responseType:i,withCredentials:this.configuration.withCredentials,headers:a,observe:c,reportProgress:p})}apiCandidateProfileGetByConsultancyUserSimplelistGet(r,c,p,o="body",l=!1,a){let n=new H.LE({encoder:this.encoder});null!=r&&(n=this.addToHttpParams(n,r,"consultancyUserId")),null!=c&&(n=this.addToHttpParams(n,c,"isActive")),null!=p&&(n=this.addToHttpParams(n,p,"statusId"));let t,e=this.defaultHeaders;t=this.configuration.lookupCredential("Bearer"),t&&(e=e.set("Authorization",t));let i=a&&a.httpHeaderAccept;void 0===i&&(i=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==i&&(e=e.set("Accept",i));let s=a&&a.context;void 0===s&&(s=new H.qT);let d="json";return i&&(d=i.startsWith("text")?"text":this.configuration.isJsonMime(i)?"json":"blob"),this.httpClient.request("get",`${this.configuration.basePath}/api/CandidateProfile/GetByConsultancyUserSimplelist`,{context:s,params:n,responseType:d,withCredentials:this.configuration.withCredentials,headers:e,observe:o,reportProgress:l})}apiCandidateProfileGetByUserGet(r,c,p="body",o=!1,l){let a=new H.LE({encoder:this.encoder});null!=r&&(a=this.addToHttpParams(a,r,"userId")),null!=c&&(a=this.addToHttpParams(a,c,"id"));let e,n=this.defaultHeaders;e=this.configuration.lookupCredential("Bearer"),e&&(n=n.set("Authorization",e));let t=l&&l.httpHeaderAccept;void 0===t&&(t=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==t&&(n=n.set("Accept",t));let i=l&&l.context;void 0===i&&(i=new H.qT);let s="json";return t&&(s=t.startsWith("text")?"text":this.configuration.isJsonMime(t)?"json":"blob"),this.httpClient.request("get",`${this.configuration.basePath}/api/CandidateProfile/GetByUser`,{context:i,params:a,responseType:s,withCredentials:this.configuration.withCredentials,headers:n,observe:p,reportProgress:o})}apiCandidateProfileGetGet(r,c="body",p=!1,o){let l=new H.LE({encoder:this.encoder});null!=r&&(l=this.addToHttpParams(l,r,"Id"));let n,a=this.defaultHeaders;n=this.configuration.lookupCredential("Bearer"),n&&(a=a.set("Authorization",n));let e=o&&o.httpHeaderAccept;void 0===e&&(e=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==e&&(a=a.set("Accept",e));let t=o&&o.context;void 0===t&&(t=new H.qT);let i="json";return e&&(i=e.startsWith("text")?"text":this.configuration.isJsonMime(e)?"json":"blob"),this.httpClient.request("get",`${this.configuration.basePath}/api/CandidateProfile/Get`,{context:t,params:l,responseType:i,withCredentials:this.configuration.withCredentials,headers:a,observe:c,reportProgress:p})}apiCandidateProfileSearchCandidateProfilesGet(r,c,p,o,l,a,n,e,t,i="body",s=!1,d){let f=new H.LE({encoder:this.encoder});null!=r&&(f=this.addToHttpParams(f,r,"Skill")),c&&c.forEach(T=>{f=this.addToHttpParams(f,T,"skills")}),p&&p.forEach(T=>{f=this.addToHttpParams(f,T,"cityIds")}),o&&o.forEach(T=>{f=this.addToHttpParams(f,T,"stateIds")}),l&&l.forEach(T=>{f=this.addToHttpParams(f,T,"visas")}),null!=a&&(f=this.addToHttpParams(f,a,"startYearsOfExp")),null!=n&&(f=this.addToHttpParams(f,n,"endYearsOfExp")),null!=e&&(f=this.addToHttpParams(f,e,"RowsOfPage")),null!=t&&(f=this.addToHttpParams(f,t,"PageNumber"));let u,h=this.defaultHeaders;u=this.configuration.lookupCredential("Bearer"),u&&(h=h.set("Authorization",u));let C=d&&d.httpHeaderAccept;void 0===C&&(C=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==C&&(h=h.set("Accept",C));let A=d&&d.context;void 0===A&&(A=new H.qT);let g="json";return C&&(g=C.startsWith("text")?"text":this.configuration.isJsonMime(C)?"json":"blob"),this.httpClient.request("get",`${this.configuration.basePath}/api/CandidateProfile/SearchCandidateProfiles`,{context:A,params:f,responseType:g,withCredentials:this.configuration.withCredentials,headers:h,observe:i,reportProgress:s})}apiCandidateProfileUpdatePut(r,c="body",p=!1,o){let a,l=this.defaultHeaders;a=this.configuration.lookupCredential("Bearer"),a&&(l=l.set("Authorization",a));let n=o&&o.httpHeaderAccept;void 0===n&&(n=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==n&&(l=l.set("Accept",n));let e=o&&o.context;void 0===e&&(e=new H.qT);const i=this.configuration.selectHeaderContentType(["application/json","text/json","application/*+json"]);void 0!==i&&(l=l.set("Content-Type",i));let s="json";return n&&(s=n.startsWith("text")?"text":this.configuration.isJsonMime(n)?"json":"blob"),this.httpClient.request("put",`${this.configuration.basePath}/api/CandidateProfile/Update`,{context:e,body:r,responseType:s,withCredentials:this.configuration.withCredentials,headers:l,observe:c,reportProgress:p})}}return x.\u0275fac=function(r){return new(r||x)(b.LFG(H.eN),b.LFG(P.G,8),b.LFG(j.V,8))},x.\u0275prov=b.Yz7({token:x,factory:x.\u0275fac,providedIn:"root"}),x})()},909:($,S,y)=>{y.d(S,{K:()=>w});var H=y(520),m=y(5784),P=y(5763),j=y(9741),b=y(5e3);let w=(()=>{class x{constructor(r,c,p){this.httpClient=r,this.basePath="https://hiresapi.azurewebsites.net",this.defaultHeaders=new H.WM,this.configuration=new j.V,p&&(this.configuration=p),"string"!=typeof this.configuration.basePath&&(Array.isArray(c)&&c.length>0&&(c=c[0]),"string"!=typeof c&&(c=this.basePath),this.configuration.basePath=c),this.encoder=this.configuration.encoder||new m.H}addToHttpParams(r,c,p){return"object"!=typeof c||c instanceof Date?this.addToHttpParamsRecursive(r,c,p):this.addToHttpParamsRecursive(r,c)}addToHttpParamsRecursive(r,c,p){if(null==c)return r;if("object"==typeof c)if(Array.isArray(c))c.forEach(o=>r=this.addToHttpParamsRecursive(r,o,p));else if(c instanceof Date){if(null==p)throw Error("key may not be null if value is Date");r=r.append(p,c.toISOString().substr(0,10))}else Object.keys(c).forEach(o=>r=this.addToHttpParamsRecursive(r,c[o],null!=p?`${p}.${o}`:o));else{if(null==p)throw Error("key may not be null if value is not object or array");r=r.append(p,c)}return r}apiUserAddPost(r,c="body",p=!1,o){let a,l=this.defaultHeaders;a=this.configuration.lookupCredential("Bearer"),a&&(l=l.set("Authorization",a));let n=o&&o.httpHeaderAccept;void 0===n&&(n=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==n&&(l=l.set("Accept",n));let e=o&&o.context;void 0===e&&(e=new H.qT);const i=this.configuration.selectHeaderContentType(["application/json","text/json","application/*+json"]);void 0!==i&&(l=l.set("Content-Type",i));let s="json";return n&&(s=n.startsWith("text")?"text":this.configuration.isJsonMime(n)?"json":"blob"),this.httpClient.request("post",`${this.configuration.basePath}/api/User/Add`,{context:e,body:r,responseType:s,withCredentials:this.configuration.withCredentials,headers:l,observe:c,reportProgress:p})}apiUserAddUserWithConsultancyPost(r,c="body",p=!1,o){let a,l=this.defaultHeaders;a=this.configuration.lookupCredential("Bearer"),a&&(l=l.set("Authorization",a));let n=o&&o.httpHeaderAccept;void 0===n&&(n=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==n&&(l=l.set("Accept",n));let e=o&&o.context;void 0===e&&(e=new H.qT);const i=this.configuration.selectHeaderContentType(["application/json","text/json","application/*+json"]);void 0!==i&&(l=l.set("Content-Type",i));let s="json";return n&&(s=n.startsWith("text")?"text":this.configuration.isJsonMime(n)?"json":"blob"),this.httpClient.request("post",`${this.configuration.basePath}/api/User/AddUserWithConsultancy`,{context:e,body:r,responseType:s,withCredentials:this.configuration.withCredentials,headers:l,observe:c,reportProgress:p})}apiUserGetUserByUserNameGet(r,c="body",p=!1,o){let l=new H.LE({encoder:this.encoder});null!=r&&(l=this.addToHttpParams(l,r,"email"));let n,a=this.defaultHeaders;n=this.configuration.lookupCredential("Bearer"),n&&(a=a.set("Authorization",n));let e=o&&o.httpHeaderAccept;void 0===e&&(e=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==e&&(a=a.set("Accept",e));let t=o&&o.context;void 0===t&&(t=new H.qT);let i="json";return e&&(i=e.startsWith("text")?"text":this.configuration.isJsonMime(e)?"json":"blob"),this.httpClient.request("get",`${this.configuration.basePath}/api/User/GetUserByUserName`,{context:t,params:l,responseType:i,withCredentials:this.configuration.withCredentials,headers:a,observe:c,reportProgress:p})}apiUserResetPasswordPut(r,c="body",p=!1,o){let l=new H.LE({encoder:this.encoder});null!=r&&(l=this.addToHttpParams(l,r,"email"));let n,a=this.defaultHeaders;n=this.configuration.lookupCredential("Bearer"),n&&(a=a.set("Authorization",n));let e=o&&o.httpHeaderAccept;void 0===e&&(e=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==e&&(a=a.set("Accept",e));let t=o&&o.context;void 0===t&&(t=new H.qT);let i="json";return e&&(i=e.startsWith("text")?"text":this.configuration.isJsonMime(e)?"json":"blob"),this.httpClient.request("put",`${this.configuration.basePath}/api/User/ResetPassword`,{context:t,params:l,responseType:i,withCredentials:this.configuration.withCredentials,headers:a,observe:c,reportProgress:p})}apiUserUpdatePasswordPut(r,c,p="body",o=!1,l){let a=new H.LE({encoder:this.encoder});null!=r&&(a=this.addToHttpParams(a,r,"email")),null!=c&&(a=this.addToHttpParams(a,c,"newpassword"));let e,n=this.defaultHeaders;e=this.configuration.lookupCredential("Bearer"),e&&(n=n.set("Authorization",e));let t=l&&l.httpHeaderAccept;void 0===t&&(t=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==t&&(n=n.set("Accept",t));let i=l&&l.context;void 0===i&&(i=new H.qT);let s="json";return t&&(s=t.startsWith("text")?"text":this.configuration.isJsonMime(t)?"json":"blob"),this.httpClient.request("put",`${this.configuration.basePath}/api/User/UpdatePassword`,{context:i,params:a,responseType:s,withCredentials:this.configuration.withCredentials,headers:n,observe:p,reportProgress:o})}apiUserUpdatePut(r,c="body",p=!1,o){let a,l=this.defaultHeaders;a=this.configuration.lookupCredential("Bearer"),a&&(l=l.set("Authorization",a));let n=o&&o.httpHeaderAccept;void 0===n&&(n=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==n&&(l=l.set("Accept",n));let e=o&&o.context;void 0===e&&(e=new H.qT);const i=this.configuration.selectHeaderContentType(["application/json","text/json","application/*+json"]);void 0!==i&&(l=l.set("Content-Type",i));let s="json";return n&&(s=n.startsWith("text")?"text":this.configuration.isJsonMime(n)?"json":"blob"),this.httpClient.request("put",`${this.configuration.basePath}/api/User/Update`,{context:e,body:r,responseType:s,withCredentials:this.configuration.withCredentials,headers:l,observe:c,reportProgress:p})}}return x.\u0275fac=function(r){return new(r||x)(b.LFG(H.eN),b.LFG(P.G,8),b.LFG(j.V,8))},x.\u0275prov=b.Yz7({token:x,factory:x.\u0275fac,providedIn:"root"}),x})()},4211:($,S,y)=>{y.d(S,{v_:()=>m.v,pp:()=>E,KD:()=>o.K}),y(2144);var m=y(2757),P=y(520),j=y(5784),b=y(5763),w=y(9741),x=y(5e3);let E=(()=>{class a{constructor(e,t,i){this.httpClient=e,this.basePath="https://hiresapi.azurewebsites.net",this.defaultHeaders=new P.WM,this.configuration=new w.V,i&&(this.configuration=i),"string"!=typeof this.configuration.basePath&&(Array.isArray(t)&&t.length>0&&(t=t[0]),"string"!=typeof t&&(t=this.basePath),this.configuration.basePath=t),this.encoder=this.configuration.encoder||new j.H}addToHttpParams(e,t,i){return"object"!=typeof t||t instanceof Date?this.addToHttpParamsRecursive(e,t,i):this.addToHttpParamsRecursive(e,t)}addToHttpParamsRecursive(e,t,i){if(null==t)return e;if("object"==typeof t)if(Array.isArray(t))t.forEach(s=>e=this.addToHttpParamsRecursive(e,s,i));else if(t instanceof Date){if(null==i)throw Error("key may not be null if value is Date");e=e.append(i,t.toISOString().substr(0,10))}else Object.keys(t).forEach(s=>e=this.addToHttpParamsRecursive(e,t[s],null!=i?`${i}.${s}`:s));else{if(null==i)throw Error("key may not be null if value is not object or array");e=e.append(i,t)}return e}apiConsultancyAddPost(e,t="body",i=!1,s){let f,d=this.defaultHeaders;f=this.configuration.lookupCredential("Bearer"),f&&(d=d.set("Authorization",f));let h=s&&s.httpHeaderAccept;void 0===h&&(h=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==h&&(d=d.set("Accept",h));let u=s&&s.context;void 0===u&&(u=new P.qT);const A=this.configuration.selectHeaderContentType(["application/json","text/json","application/*+json"]);void 0!==A&&(d=d.set("Content-Type",A));let g="json";return h&&(g=h.startsWith("text")?"text":this.configuration.isJsonMime(h)?"json":"blob"),this.httpClient.request("post",`${this.configuration.basePath}/api/Consultancy/Add`,{context:u,body:e,responseType:g,withCredentials:this.configuration.withCredentials,headers:d,observe:t,reportProgress:i})}apiConsultancyAllConsultancyGet(e="body",t=!1,i){let d,s=this.defaultHeaders;d=this.configuration.lookupCredential("Bearer"),d&&(s=s.set("Authorization",d));let f=i&&i.httpHeaderAccept;void 0===f&&(f=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==f&&(s=s.set("Accept",f));let h=i&&i.context;void 0===h&&(h=new P.qT);let u="json";return f&&(u=f.startsWith("text")?"text":this.configuration.isJsonMime(f)?"json":"blob"),this.httpClient.request("get",`${this.configuration.basePath}/api/Consultancy/AllConsultancy`,{context:h,responseType:u,withCredentials:this.configuration.withCredentials,headers:s,observe:e,reportProgress:t})}apiConsultancyConsultancyByIdGet(e,t="body",i=!1,s){let d=new P.LE({encoder:this.encoder});null!=e&&(d=this.addToHttpParams(d,e,"Id"));let h,f=this.defaultHeaders;h=this.configuration.lookupCredential("Bearer"),h&&(f=f.set("Authorization",h));let u=s&&s.httpHeaderAccept;void 0===u&&(u=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==u&&(f=f.set("Accept",u));let C=s&&s.context;void 0===C&&(C=new P.qT);let A="json";return u&&(A=u.startsWith("text")?"text":this.configuration.isJsonMime(u)?"json":"blob"),this.httpClient.request("get",`${this.configuration.basePath}/api/Consultancy/ConsultancyById`,{context:C,params:d,responseType:A,withCredentials:this.configuration.withCredentials,headers:f,observe:t,reportProgress:i})}apiConsultancySearchConsultanciesGet(e,t="body",i=!1,s){let d=new P.LE({encoder:this.encoder});null!=e&&(d=this.addToHttpParams(d,e,"conname"));let h,f=this.defaultHeaders;h=this.configuration.lookupCredential("Bearer"),h&&(f=f.set("Authorization",h));let u=s&&s.httpHeaderAccept;void 0===u&&(u=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==u&&(f=f.set("Accept",u));let C=s&&s.context;void 0===C&&(C=new P.qT);let A="json";return u&&(A=u.startsWith("text")?"text":this.configuration.isJsonMime(u)?"json":"blob"),this.httpClient.request("get",`${this.configuration.basePath}/api/Consultancy/SearchConsultancies`,{context:C,params:d,responseType:A,withCredentials:this.configuration.withCredentials,headers:f,observe:t,reportProgress:i})}apiConsultancyUpdatePut(e,t="body",i=!1,s){let f,d=this.defaultHeaders;f=this.configuration.lookupCredential("Bearer"),f&&(d=d.set("Authorization",f));let h=s&&s.httpHeaderAccept;void 0===h&&(h=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==h&&(d=d.set("Accept",h));let u=s&&s.context;void 0===u&&(u=new P.qT);const A=this.configuration.selectHeaderContentType(["application/json","text/json","application/*+json"]);void 0!==A&&(d=d.set("Content-Type",A));let g="json";return h&&(g=h.startsWith("text")?"text":this.configuration.isJsonMime(h)?"json":"blob"),this.httpClient.request("put",`${this.configuration.basePath}/api/Consultancy/Update`,{context:u,body:e,responseType:g,withCredentials:this.configuration.withCredentials,headers:d,observe:t,reportProgress:i})}}return a.\u0275fac=function(e){return new(e||a)(x.LFG(P.eN),x.LFG(b.G,8),x.LFG(w.V,8))},a.\u0275prov=x.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})();y(9010),y(4280);var o=y(909)}}]);