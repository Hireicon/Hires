"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[165],{2582:(O,v,n)=>{n.d(v,{R:()=>M});var i=n(5879);let M=(()=>{var c;class r{}return(c=r).\u0275fac=function(e){return new(e||c)},c.\u0275cmp=i.Xpm({type:c,selectors:[["loader"]],decls:3,vars:0,consts:[[1,"loader-wrapper"],[1,"loader-area"],[1,"pre-loader"]],template:function(e,m){1&e&&(i.TgZ(0,"div",0)(1,"div",1),i._UZ(2,"div",2),i.qZA()())},styles:['.loader-wrapper[_ngcontent-%COMP%]{margin:50px 0}.loader-wrapper[_ngcontent-%COMP%]   .loader-area[_ngcontent-%COMP%]{position:relative;display:flex;padding:50px 0}.loader-wrapper[_ngcontent-%COMP%]   .loader-area[_ngcontent-%COMP%]   .pre-loader[_ngcontent-%COMP%]{position:absolute;inset:0;width:60px;height:60px;margin:auto}.loader-wrapper[_ngcontent-%COMP%]   .loader-area[_ngcontent-%COMP%]   .pre-loader[_ngcontent-%COMP%]:before, .loader-wrapper[_ngcontent-%COMP%]   .loader-area[_ngcontent-%COMP%]   .pre-loader[_ngcontent-%COMP%]:after{content:"";position:absolute;inset:0;border-width:5px;border-style:solid;border-color:#1259a4;border-radius:100%}.loader-wrapper[_ngcontent-%COMP%]   .loader-area[_ngcontent-%COMP%]   .pre-loader[_ngcontent-%COMP%]:before{opacity:.5}.loader-wrapper[_ngcontent-%COMP%]   .loader-area[_ngcontent-%COMP%]   .pre-loader[_ngcontent-%COMP%]:after{border-color:#1259a4 transparent transparent;animation:_ngcontent-%COMP%_spin .5s linear infinite}@keyframes _ngcontent-%COMP%_spin{to{transform:rotate(360deg)}}@keyframes _ngcontent-%COMP%_blob-bottom{25%,50%,75%{top:50%;left:100%}to{top:0;left:50%}}@keyframes _ngcontent-%COMP%_blob-left{25%{top:50%;left:0}50%,to{top:100%;left:50%}}@keyframes _ngcontent-%COMP%_blob-top{50%{top:0;left:50%}75%,to{top:50%;left:0}}@keyframes _ngcontent-%COMP%_blob-spinner-mover{0%,to{top:0;left:50%}25%{top:50%;left:100%}50%{top:100%;left:50%}75%{top:50%;left:0}}']}),r})()},3838:(O,v,n)=>{n.d(v,{N:()=>_,x:()=>y});var l,g,f,t,d,i=n(5879);if(typeof window>"u")throw new Error("[TalkJS] The TalkJS JavaScript SDK only works in browsers (and not, for example, in Node.js)");l=window,g=document,f=[],(d=g.createElement("script")).async=1,d.src="https://cdn.talkjs.com/talk.js",g.head.appendChild(d),t=l.Promise,l.Talk={v:3,ready:{then:function(u){if(t)return new t(function(s,p){f.push([u,s,p])});f.push([u])},catch:function(){return t&&new t},c:f}};const c=window.Talk;var r=n(9900),h=n(2755),e=n(930),m=n(2742);let _=(()=>{var l;class g{constructor(t,a){this.talkService=t,this.sessionService=a,this.APP_ID="tKzUD2dn"}generateRandomId(){return Math.floor(90*Math.random())+10}onClick(t){this.popup&&this.popup.destroy(),this.initChat(this.chatUser),this.popup=this.session.createPopup(),this.popup.select(this.conversation),this.popup.mount(),setTimeout(()=>{this.talkElementLanucher=document.querySelector("#__talkjs_launcher"),this.talkElementLanucher.addEventListener("click",a=>{this.talkElementLanucher.parentNode.remove()})},1e3)}initChat(t){let a={};this.sessionService.userId?this.sessionService.userdetailscast.subscribe(u=>{this.user=u,a=new c.User({id:this.user.id,name:`${this.user.fname} ${this.user.lname}`,photoUrl:this.user.profilePic?`${r.xY}${this.user.profilePic}`:r.Ov,role:"PremiumRecruiters",custom:{companyName:this.user.consultancyUsers[0].consultancy.name,profileUrl:`${r.Eu}${this.user.consultancyUsers[0].publicProfileUserName}`}})}):a=new c.User({id:this.generateRandomId(),name:"user",photoUrl:`${r.Ov}`,role:"PremiumRecruiters"}),this.userId=t.userId;const d=new c.User({id:t.userId,name:`${t.userFName} ${t.userLName}`,photoUrl:`${r.xY}${t.profilePic}`,role:"PremiumRecruiters",custom:{companyName:t.companyName,profileUrl:`${r.Eu}${t.profileUserName}`}});this.session=new c.Session({appId:this.APP_ID,me:a}),this.conversation=this.session.getOrCreateConversation(c.oneOnOneId(a,d)),this.conversation.setParticipant(a),this.conversation.setParticipant(d),this.talkService.fetchTalkUserPresence(this.userId).subscribe(u=>{console.log(u)})}ngOnChanges(){}}return(l=g).\u0275fac=function(t){return new(t||l)(i.Y36(h._),i.Y36(e.m))},l.\u0275dir=i.lG2({type:l,selectors:[["",8,"chat-btn"]],hostBindings:function(t,a){1&t&&i.NdJ("click",function(u){return a.onClick(u)})},inputs:{chatUser:"chatUser"},features:[i.TTD]}),g})(),y=(()=>{var l;class g{constructor(t,a){this.element=t,this.sharedService=a,this.onUnreadEvent=new i.vpe,this.APP_ID="tKzUD2dn"}generateRandomId(){return Math.floor(90*Math.random())+10}initInbox(t,a){const d=t.consultancyUsers[0].consultancy.name,u=`${r.Eu}${t.consultancyUsers[0].publicProfileUserName}`,C=new c.User({id:a.id,name:`${a.fname} ${a.lname}`,photoUrl:`${r.xY}${a.profilePic}`,role:"PremiumRecruiters",custom:{companyName:a.consultancyUsers[0].consultancy.name,profileUrl:`${r.Eu}${a.consultancyUsers[0].publicProfileUserName}`}}),o=new c.User({id:t.id,name:`${t.fname} ${t.lname}`,photoUrl:t.profilePic?`${r.xY}${t.profilePic}`:r.Ov,role:"PremiumRecruiters",custom:{companyName:d,profileUrl:u}});this.session=new c.Session({appId:this.APP_ID,me:o}),this.conversation=this.session.getOrCreateConversation(c.oneOnOneId(o,C)),this.conversation.setParticipant(C),this.conversation.setParticipant(o);const P=this.session.createInbox();P.select(this.conversation);const x=this.element.nativeElement.querySelector(".message-area");P.mount(x),this.session.unreads.on("change",U=>{this.sharedService.setInboxUnReadCount(U)})}ngOnChanges(){this.user&&this.chatUser&&this.initInbox(this.user,this.chatUser)}}return(l=g).\u0275fac=function(t){return new(t||l)(i.Y36(i.SBq),i.Y36(m.F))},l.\u0275dir=i.lG2({type:l,selectors:[["","id","inboxcontainer"]],inputs:{user:"user",chatUser:"chatUser"},outputs:{onUnreadEvent:"onUnreadEvent"},features:[i.TTD]}),g})()},2755:(O,v,n)=>{n.d(v,{_:()=>c});var i=n(5879),M=n(9862);let c=(()=>{var r;class h{constructor(m){this.http=m,this.APP_ID="tKzUD2dn"}fetchTalkUserPresence(m){return this.http.post("https://api.talkjs.com/v1/tKzUD2dn/presences/",{userIds:[m]})}}return(r=h).\u0275fac=function(m){return new(m||r)(i.LFG(M.eN))},r.\u0275prov=i.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),h})()},9165:(O,v,n)=>{n.r(v),n.d(v,{MessagesModule:()=>u});var i=n(6814),M=n(5214),c=n(8524),r=n(1331),h=n(1670),e=n(5879),m=n(9945),_=n(2742),y=n(930),l=n(3838),g=n(2582);const f=["inboxContainer"],a=[{path:"",component:(()=>{var s;class p{constructor(o,P,x){this.userService=o,this.sharedService=P,this.sessionService=x,this.uneadCount=0}handleUnread(o){this.uneadCount=h.ZP.isEmpty(o)?0:o[0]?.unreadMessageCount}ngOnInit(){this.userService.apiUserGetUserByUserNameGet("kannantest32@gmail.com").subscribe({next:o=>{this.chatUser=o.value[0]},error:()=>{}}),this.sharedService.inboxunreadcountcast.subscribe(o=>{this.uneadCount=h.ZP.isEmpty(o)?0:o[0]?.unreadMessageCount}),this.sessionService.userdetailscast.subscribe(o=>{this.user=o})}}return(s=p).\u0275fac=function(o){return new(o||s)(e.Y36(m.KD),e.Y36(_.F),e.Y36(y.m))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-messages"]],viewQuery:function(o,P){if(1&o&&e.Gf(f,5),2&o){let x;e.iGM(x=e.CRH())&&(P.inboxContainer=x.first)}},decls:15,vars:3,consts:[[1,"messages-wrapper"],[1,"container"],[1,"row"],[1,"col-sm-12","col-lg-9"],["id","inboxContainer",1,"messages-box",3,"user","chatUser"],["inboxContainer",""],[1,"title","mb-3"],[1,"message-area"],[1,"col-sm-12","col-lg-3"],[1,"placeholder-box"],["src","https://placehold.co/300x600/png","alt","",1,"d-none","d-lg-block"],[1,"d-lg-none","text-center"],["src","https://placehold.co/360x360/png","alt",""]],template:function(o,P){1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4,5)(6,"h6",6),e._uU(7),e.qZA(),e.TgZ(8,"div",7),e._UZ(9,"loader"),e.qZA()()(),e.TgZ(10,"div",8)(11,"div",9),e._UZ(12,"img",10),e.TgZ(13,"div",11),e._UZ(14,"img",12),e.qZA()()()()()()),2&o&&(e.xp6(4),e.Q6J("user",P.user)("chatUser",P.chatUser),e.xp6(3),e.hij("You have ",P.uneadCount," unread conversations "))},dependencies:[l.x,g.R],styles:[".shadow[_ngcontent-%COMP%]{box-shadow:0 1px 3px #0000001a,0 1px 2px #0000000f!important}.rounded[_ngcontent-%COMP%]{border-radius:6px!important}.rounded-md[_ngcontent-%COMP%]{border-radius:8px!important}.rounded-lg[_ngcontent-%COMP%]{border-radius:10px!important}.rounded-xl[_ngcontent-%COMP%]{border-radius:15px!important}.op-50[_ngcontent-%COMP%]{opacity:.5}.text-nano[_ngcontent-%COMP%]{font-size:10px}.text-xs[_ngcontent-%COMP%]{font-size:12px}.text-smr[_ngcontent-%COMP%]{font-size:13px}.text-sm[_ngcontent-%COMP%]{font-size:14px}.text-base[_ngcontent-%COMP%]{font-size:18px}.text-normal[_ngcontent-%COMP%]{font-size:16px}.text-regular[_ngcontent-%COMP%]{font-size:15px}h6[_ngcontent-%COMP%], .text-h6[_ngcontent-%COMP%]{font-size:20px}h5[_ngcontent-%COMP%], .text-h5[_ngcontent-%COMP%]{font-size:22px}h4[_ngcontent-%COMP%], .text-h4[_ngcontent-%COMP%]{font-size:24px}h3[_ngcontent-%COMP%], .text-h3[_ngcontent-%COMP%]{font-size:30px}h2[_ngcontent-%COMP%], .text-h2[_ngcontent-%COMP%]{font-size:34px}h1[_ngcontent-%COMP%], .text-h1[_ngcontent-%COMP%]{font-size:36px}.text-huge[_ngcontent-%COMP%]{font-size:50px}.text-big[_ngcontent-%COMP%]{font-size:38px}.ft-head[_ngcontent-%COMP%]{font-family:Metropolis,sans-serif;letter-spacing:.5px}.ft-default[_ngcontent-%COMP%]{font-family:Albert Sans,sans-serif;font-weight:400;letter-spacing:.2px}.ft-sp[_ngcontent-%COMP%]{font-family:Catamaran,sans-serif}.fw-light[_ngcontent-%COMP%]{font-weight:300}.fw-normal[_ngcontent-%COMP%]{font-weight:400}.fw-medium[_ngcontent-%COMP%]{font-weight:500}.fw-semibold[_ngcontent-%COMP%]{font-weight:600}.fw-bold[_ngcontent-%COMP%]{font-weight:700}.ls--2[_ngcontent-%COMP%]{letter-spacing:.2px}.ls--25[_ngcontent-%COMP%]{letter-spacing:.25px}.ls--4[_ngcontent-%COMP%]{letter-spacing:.4px}.ls--15[_ngcontent-%COMP%]{letter-spacing:1.5px}.lh-14[_ngcontent-%COMP%]{line-height:14px}.lh-18[_ngcontent-%COMP%]{line-height:18px}@media (max-width: 991px){.messages-wrapper[_ngcontent-%COMP%]   .placeholder-box[_ngcontent-%COMP%]{margin:30px 0 0}}"]}),p})()}];let d=(()=>{var s;class p{}return(s=p).\u0275fac=function(o){return new(o||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[r.Bz.forChild(a),r.Bz]}),p})(),u=(()=>{var s;class p{}return(s=p).\u0275fac=function(o){return new(o||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[i.ez,M.B,c.m.forRoot(),d]}),p})()}}]);