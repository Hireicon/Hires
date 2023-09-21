"use strict";(self.webpackChunkhireicon=self.webpackChunkhireicon||[]).push([[757],{2757:(P,A,h)=>{h.d(A,{v:()=>V});var d=h(520),x=h(5784),b=h(5763),m=h(9741),C=h(5e3);let V=(()=>{class u{constructor(n,o,a){this.httpClient=n,this.basePath="https://hiresapi.azurewebsites.net",this.defaultHeaders=new d.WM,this.configuration=new m.V,a&&(this.configuration=a),"string"!=typeof this.configuration.basePath&&(Array.isArray(o)&&o.length>0&&(o=o[0]),"string"!=typeof o&&(o=this.basePath),this.configuration.basePath=o),this.encoder=this.configuration.encoder||new x.H}addToHttpParams(n,o,a){return"object"!=typeof o||o instanceof Date?this.addToHttpParamsRecursive(n,o,a):this.addToHttpParamsRecursive(n,o)}addToHttpParamsRecursive(n,o,a){if(null==o)return n;if("object"==typeof o)if(Array.isArray(o))o.forEach(i=>n=this.addToHttpParamsRecursive(n,i,a));else if(o instanceof Date){if(null==a)throw Error("key may not be null if value is Date");n=n.append(a,o.toISOString().substr(0,10))}else Object.keys(o).forEach(i=>n=this.addToHttpParamsRecursive(n,o[i],null!=a?`${a}.${i}`:i));else{if(null==a)throw Error("key may not be null if value is not object or array");n=n.append(a,o)}return n}apiCommonCandidateAvailabilityGet(n="body",o=!1,a){let s,i=this.defaultHeaders;s=this.configuration.lookupCredential("Bearer"),s&&(i=i.set("Authorization",s));let e=a&&a.httpHeaderAccept;void 0===e&&(e=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==e&&(i=i.set("Accept",e));let r=a&&a.context;void 0===r&&(r=new d.qT);let t="json";return e&&(t=e.startsWith("text")?"text":this.configuration.isJsonMime(e)?"json":"blob"),this.httpClient.request("get",`${this.configuration.basePath}/api/Common/CandidateAvailability`,{context:r,responseType:t,withCredentials:this.configuration.withCredentials,headers:i,observe:n,reportProgress:o})}apiCommonCategoryGet(n="body",o=!1,a){let s,i=this.defaultHeaders;s=this.configuration.lookupCredential("Bearer"),s&&(i=i.set("Authorization",s));let e=a&&a.httpHeaderAccept;void 0===e&&(e=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==e&&(i=i.set("Accept",e));let r=a&&a.context;void 0===r&&(r=new d.qT);let t="json";return e&&(t=e.startsWith("text")?"text":this.configuration.isJsonMime(e)?"json":"blob"),this.httpClient.request("get",`${this.configuration.basePath}/api/Common/Category`,{context:r,responseType:t,withCredentials:this.configuration.withCredentials,headers:i,observe:n,reportProgress:o})}apiCommonCityGet(n,o,a,i="body",s=!1,e){let r=new d.LE({encoder:this.encoder});null!=n&&(r=this.addToHttpParams(r,n,"cityOrZip")),null!=o&&(r=this.addToHttpParams(r,o,"state")),null!=a&&(r=this.addToHttpParams(r,a,"isState"));let c,t=this.defaultHeaders;c=this.configuration.lookupCredential("Bearer"),c&&(t=t.set("Authorization",c));let l=e&&e.httpHeaderAccept;void 0===l&&(l=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==l&&(t=t.set("Accept",l));let f=e&&e.context;void 0===f&&(f=new d.qT);let p="json";return l&&(p=l.startsWith("text")?"text":this.configuration.isJsonMime(l)?"json":"blob"),this.httpClient.request("get",`${this.configuration.basePath}/api/Common/City`,{context:f,params:r,responseType:p,withCredentials:this.configuration.withCredentials,headers:t,observe:i,reportProgress:s})}apiCommonDomainGet(n="body",o=!1,a){let s,i=this.defaultHeaders;s=this.configuration.lookupCredential("Bearer"),s&&(i=i.set("Authorization",s));let e=a&&a.httpHeaderAccept;void 0===e&&(e=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==e&&(i=i.set("Accept",e));let r=a&&a.context;void 0===r&&(r=new d.qT);let t="json";return e&&(t=e.startsWith("text")?"text":this.configuration.isJsonMime(e)?"json":"blob"),this.httpClient.request("get",`${this.configuration.basePath}/api/Common/Domain`,{context:r,responseType:t,withCredentials:this.configuration.withCredentials,headers:i,observe:n,reportProgress:o})}apiCommonEmailGet(n,o,a,i,s="body",e=!1,r){let t=new d.LE({encoder:this.encoder});null!=n&&(t=this.addToHttpParams(t,n,"emailAddress")),null!=o&&(t=this.addToHttpParams(t,o,"subject")),null!=a&&(t=this.addToHttpParams(t,a,"plainTextContent")),null!=i&&(t=this.addToHttpParams(t,i,"htmlContent"));let l,c=this.defaultHeaders;l=this.configuration.lookupCredential("Bearer"),l&&(c=c.set("Authorization",l));let f=r&&r.httpHeaderAccept;void 0===f&&(f=this.configuration.selectHeaderAccept([])),void 0!==f&&(c=c.set("Accept",f));let p=r&&r.context;void 0===p&&(p=new d.qT);let H="json";return f&&(H=f.startsWith("text")?"text":this.configuration.isJsonMime(f)?"json":"blob"),this.httpClient.request("get",`${this.configuration.basePath}/api/Common/Email`,{context:p,params:t,responseType:H,withCredentials:this.configuration.withCredentials,headers:c,observe:s,reportProgress:e})}apiCommonEmploymentTypeGet(n="body",o=!1,a){let s,i=this.defaultHeaders;s=this.configuration.lookupCredential("Bearer"),s&&(i=i.set("Authorization",s));let e=a&&a.httpHeaderAccept;void 0===e&&(e=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==e&&(i=i.set("Accept",e));let r=a&&a.context;void 0===r&&(r=new d.qT);let t="json";return e&&(t=e.startsWith("text")?"text":this.configuration.isJsonMime(e)?"json":"blob"),this.httpClient.request("get",`${this.configuration.basePath}/api/Common/EmploymentType`,{context:r,responseType:t,withCredentials:this.configuration.withCredentials,headers:i,observe:n,reportProgress:o})}apiCommonJobTypeGet(n="body",o=!1,a){let s,i=this.defaultHeaders;s=this.configuration.lookupCredential("Bearer"),s&&(i=i.set("Authorization",s));let e=a&&a.httpHeaderAccept;void 0===e&&(e=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==e&&(i=i.set("Accept",e));let r=a&&a.context;void 0===r&&(r=new d.qT);let t="json";return e&&(t=e.startsWith("text")?"text":this.configuration.isJsonMime(e)?"json":"blob"),this.httpClient.request("get",`${this.configuration.basePath}/api/Common/JobType`,{context:r,responseType:t,withCredentials:this.configuration.withCredentials,headers:i,observe:n,reportProgress:o})}apiCommonSkillsGet(n,o="body",a=!1,i){let s=new d.LE({encoder:this.encoder});null!=n&&(s=this.addToHttpParams(s,n,"Skill"));let r,e=this.defaultHeaders;r=this.configuration.lookupCredential("Bearer"),r&&(e=e.set("Authorization",r));let t=i&&i.httpHeaderAccept;void 0===t&&(t=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==t&&(e=e.set("Accept",t));let c=i&&i.context;void 0===c&&(c=new d.qT);let l="json";return t&&(l=t.startsWith("text")?"text":this.configuration.isJsonMime(t)?"json":"blob"),this.httpClient.request("get",`${this.configuration.basePath}/api/Common/Skills`,{context:c,params:s,responseType:l,withCredentials:this.configuration.withCredentials,headers:e,observe:o,reportProgress:a})}apiCommonStateGet(n,o="body",a=!1,i){let s=new d.LE({encoder:this.encoder});null!=n&&(s=this.addToHttpParams(s,n,"searchString"));let r,e=this.defaultHeaders;r=this.configuration.lookupCredential("Bearer"),r&&(e=e.set("Authorization",r));let t=i&&i.httpHeaderAccept;void 0===t&&(t=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==t&&(e=e.set("Accept",t));let c=i&&i.context;void 0===c&&(c=new d.qT);let l="json";return t&&(l=t.startsWith("text")?"text":this.configuration.isJsonMime(t)?"json":"blob"),this.httpClient.request("get",`${this.configuration.basePath}/api/Common/State`,{context:c,params:s,responseType:l,withCredentials:this.configuration.withCredentials,headers:e,observe:o,reportProgress:a})}apiCommonStatusGet(n="body",o=!1,a){let s,i=this.defaultHeaders;s=this.configuration.lookupCredential("Bearer"),s&&(i=i.set("Authorization",s));let e=a&&a.httpHeaderAccept;void 0===e&&(e=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==e&&(i=i.set("Accept",e));let r=a&&a.context;void 0===r&&(r=new d.qT);let t="json";return e&&(t=e.startsWith("text")?"text":this.configuration.isJsonMime(e)?"json":"blob"),this.httpClient.request("get",`${this.configuration.basePath}/api/Common/Status`,{context:r,responseType:t,withCredentials:this.configuration.withCredentials,headers:i,observe:n,reportProgress:o})}apiCommonUserTypeGet(n="body",o=!1,a){let s,i=this.defaultHeaders;s=this.configuration.lookupCredential("Bearer"),s&&(i=i.set("Authorization",s));let e=a&&a.httpHeaderAccept;void 0===e&&(e=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==e&&(i=i.set("Accept",e));let r=a&&a.context;void 0===r&&(r=new d.qT);let t="json";return e&&(t=e.startsWith("text")?"text":this.configuration.isJsonMime(e)?"json":"blob"),this.httpClient.request("get",`${this.configuration.basePath}/api/Common/UserType`,{context:r,responseType:t,withCredentials:this.configuration.withCredentials,headers:i,observe:n,reportProgress:o})}apiCommonVisaGet(n="body",o=!1,a){let s,i=this.defaultHeaders;s=this.configuration.lookupCredential("Bearer"),s&&(i=i.set("Authorization",s));let e=a&&a.httpHeaderAccept;void 0===e&&(e=this.configuration.selectHeaderAccept(["text/plain","application/json","text/json"])),void 0!==e&&(i=i.set("Accept",e));let r=a&&a.context;void 0===r&&(r=new d.qT);let t="json";return e&&(t=e.startsWith("text")?"text":this.configuration.isJsonMime(e)?"json":"blob"),this.httpClient.request("get",`${this.configuration.basePath}/api/Common/Visa`,{context:r,responseType:t,withCredentials:this.configuration.withCredentials,headers:i,observe:n,reportProgress:o})}}return u.\u0275fac=function(n){return new(n||u)(C.LFG(d.eN),C.LFG(b.G,8),C.LFG(m.V,8))},u.\u0275prov=C.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()}}]);