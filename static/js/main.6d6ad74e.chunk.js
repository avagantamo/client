(this["webpackJsonpsportments-client"]=this["webpackJsonpsportments-client"]||[]).push([[0],{12:function(e,t,a){},23:function(e,t,a){e.exports=a.p+"static/media/content-background.e23b19e7.jpg"},24:function(e,t,a){e.exports=a(47)},47:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),s=a.n(c),i=(a(12),a(1)),l=a.n(i),o=a(3),u=a(2),m=a(5),p=a.n(m);function d(){return""!==document.cookie}function f(){var e=document.cookie;return""===e?null:e.split("=")[1]}var E="https://sportsment.herokuapp.com";function v(e,t){return g.apply(this,arguments)}function g(){return(g=Object(o.a)(l.a.mark((function e(t,a){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.post("".concat(E,"/auth/login"),{username:t.toLowerCase(),password:a});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(){return b.apply(this,arguments)}function b(){return(b=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.post("".concat(E,"/auth/userinfo"),{token:f()});case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(e,t,a){return w.apply(this,arguments)}function w(){return(w=Object(o.a)(l.a.mark((function e(t,a,n){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.post("".concat(E,"/auth/register"),{username:t.toLowerCase(),password:a,following:n});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e,t,a,n){return O.apply(this,arguments)}function O(){return(O=Object(o.a)(l.a.mark((function e(t,a,n,r){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.post("".concat(E,"/posts/create"),{title:t,body:a,tags:n,time:r,token:f()});case 2:return c=e.sent,e.abrupt("return",c.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e){return _.apply(this,arguments)}function _(){return(_=Object(o.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.post("".concat(E,"/posts/getposts"),{tags:t});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e,t,a){return j.apply(this,arguments)}function j(){return(j=Object(o.a)(l.a.mark((function e(t,a,n){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.post("".concat(E,"/posts/vote"),{token:f(),voteType:t,tag:a,postId:n});case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(){return S.apply(this,arguments)}function S(){return(S=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("".concat(E,"/teams/getteams"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(){return P.apply(this,arguments)}function P(){return(P=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("".concat(E,"/leagues/getleagues"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(e){return A.apply(this,arguments)}function A(){return(A=Object(o.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.post("".concat(E,"/fixtures/getfixtures"),{leagueId:t,token:f()});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(e){return G.apply(this,arguments)}function G(){return(G=Object(o.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.post("".concat(E,"/fixtures/getfixturedetails"),{fixtureId:t,token:f()});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(e){return F.apply(this,arguments)}function F(){return(F=Object(o.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.post("".concat(E,"/teams/getteammatches"),{team:t,token:f()});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var U="",H=null;function D(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],c=t[1];return H=c,a?r.a.createElement("div",{id:"notification-bar"},r.a.createElement("p",{className:"description"},U)):null}function B(e,t){U=e,null!=H&&(H(!0),t&&t(),setTimeout((function(){U="",H(!1)}),4e3))}var M,K=a(22),X=a(7),V=a(8),Y=a(10),q=a(9),J=Object(n.createContext)(null),W=Object(n.createContext)(null),$=function(e){Object(Y.a)(a,e);var t=Object(q.a)(a);function a(e){var n;return Object(X.a)(this,a),(n=t.call(this,e)).setPage=function(e){n.setState((function(t){var a,n=Object(K.a)(e);try{for(n.s();!(a=n.n()).done;){var r=a.value;t.tags.includes(r)||t.tags.push(r)}}catch(c){n.e(c)}finally{n.f()}return t.currentTags=e,e}))},n.popPage=function(e){n.setState((function(t){if(n.state.tags.includes(e)){if(1==t.tags.length)return;return t.tags.pop(),t.currentTags=t.tags[t.tags.length-1],t.currentTags}}))},n.state={tags:["home"],currentTags:["home"],setPage:n.setPage,popPage:n.popPage},n}return Object(V.a)(a,[{key:"render",value:function(){return r.a.createElement(W.Provider,{value:this.state},this.props.children)}}]),a}(n.Component),z=function(e){Object(Y.a)(a,e);var t=Object(q.a)(a);function a(e){var n;return Object(X.a)(this,a),(n=t.call(this,e)).editUser=function(e){n.setState((function(t){return t.username=e.username,t.followingSports=void 0==e.followingSports?[]:e.followingSport,t.followingTeams=void 0==e.followingTeams?[]:e.followingTeams,t.followingCompetitions=void 0==e.followingCompetitions?[]:e.followingCompetitions,e}))},n.state={editUser:n.editUser,followingSports:[],followingCompetitions:[],followingTeams:[],username:null,token:null},n}return Object(V.a)(a,[{key:"render",value:function(){return r.a.createElement(J.Provider,{value:this.state},this.props.children)}}]),a}(n.Component),Q=null,Z=null,ee=null,te=null;function ae(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],c=t[1];return Q=c,a?r.a.createElement("div",{id:"modal",onClick:function(){!function(e){if(null==Q)return;Q(e)}(!1)}},r.a.createElement("div",{id:"dialog",onClick:function(e){e.stopPropagation()}},r.a.createElement("p",{className:"title"},"Are you sure?"),r.a.createElement("p",{className:"description"},"The action you are about to take can have some serious consequences"),r.a.createElement("div",{className:"space"}),r.a.createElement("div",{className:"modal-row"},r.a.createElement("div",{className:"btn",onClick:function(){}},"OK"),r.a.createElement("div",{className:"btn",onClick:function(){}},"CANCEL")))):null}function ne(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),i=Object(u.a)(s,2),m=i[0],p=i[1],d=Object(n.useState)(null),f=Object(u.a)(d,2),E=(f[0],f[1],Object(n.useState)(!1)),g=Object(u.a)(E,2),h=g[0],b=g[1];return Z=b,h?r.a.createElement("div",{onClick:function(){ie(!1)},id:"modal"},r.a.createElement("div",{className:"login",id:"dialog",onClick:function(e){e.stopPropagation()}},r.a.createElement("p",{className:"title"},"LOG-IN"),r.a.createElement("p",null,"Username:"),r.a.createElement("input",{className:"username",onChange:function(e){c(e.target.value)},type:"text"}),r.a.createElement("p",null,"Password:"),r.a.createElement("input",{className:"password",onChange:function(e){p(e.target.value)},type:"password"}),r.a.createElement("div",{className:"space"}),r.a.createElement(J.Consumer,null,(function(e){return r.a.createElement("div",{className:"btn default",onClick:Object(o.a)(l.a.mark((function t(){var n,r,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v(a,m);case 2:"success"===(n=t.sent).status&&(ie(!1),r=new Date,c=r.getTime(),c+=36e5,r.setTime(c),document.cookie="token=".concat(n.data.token,"; expires=").concat(r.toUTCString(),";"),e.editUser({username:a,token:n.data.token,followingSports:n.data.followedSports,followingCompetitions:n.data.followedCompetitions,followingTeams:n.data.followedTeams})),B(n.message);case 5:case"end":return t.stop()}}),t)})))},"LOGIN")})))):null}function re(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),i=Object(u.a)(s,2),m=i[0],p=i[1],d=Object(n.useState)(!1),f=Object(u.a)(d,2),E=f[0],v=f[1];return ee=v,E?r.a.createElement("div",{onClick:function(){le(!1)},id:"modal"},r.a.createElement("div",{className:"login",id:"dialog",onClick:function(e){e.stopPropagation()}},r.a.createElement("p",{className:"title"},"REGISTER"),r.a.createElement("p",null,"Username:"),r.a.createElement("input",{className:"username",onChange:function(e){c(e.target.value)},type:"text"}),r.a.createElement("p",null,"Password:"),r.a.createElement("input",{className:"password",onChange:function(e){p(e.target.value)},type:"password"}),r.a.createElement("div",{className:"space"}),r.a.createElement("div",{className:"btn default",onClick:Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N(a,m);case 2:"success"===(t=e.sent).status&&le(!1),B(t.message);case 5:case"end":return e.stop()}}),e)})))},"Register"))):null}function ce(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),i=Object(u.a)(s,2),l=i[0],o=i[1],m=Object(n.useState)(""),p=Object(u.a)(m,2),d=p[0],f=p[1];return te=c,a?r.a.createElement("div",{id:"create-post-dialog"},r.a.createElement("h2",{className:"title"},"Create a post"),r.a.createElement("div",{className:"divider"}),r.a.createElement("input",{placeholder:"Enter title...",onChange:function(e){o(e.target.value)}}),r.a.createElement("textarea",{placeholder:"Enter description...",onChange:function(e){f(e.target.value)}}),r.a.createElement("div",{className:"row"},r.a.createElement(W.Consumer,null,(function(e){return r.a.createElement("div",{className:"button fixed",onClick:function(){!function(e,t,a){se.apply(this,arguments)}(l,d,e.tags)}},r.a.createElement("div",{className:"items"},r.a.createElement("p",{className:"text"},"Post")),r.a.createElement("div",{className:"shadow"}))})),r.a.createElement("div",{className:"button fixed",onClick:function(){c(!1)}},r.a.createElement("div",{className:"items"},r.a.createElement("p",{className:"text"},"Cancel")),r.a.createElement("div",{className:"shadow"})))):null}function se(){return(se=Object(o.a)(l.a.mark((function e(t,a,n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k(t,a,n,Date.now());case 2:"success"===e.sent.status&&B("Posted successfully"),oe(!1);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ie(e){null!=Z&&Z(e)}function le(e){null!=ee&&ee(e)}function oe(e){null!=te&&te(e)}function ue(e){var t=Object(n.useState)("content"),a=Object(u.a)(t,2),c=a[0],s=a[1];return r.a.createElement("div",{className:"dropdown"},r.a.createElement("div",{className:"button"},r.a.createElement("div",{className:"items",onClick:function(){s("content"==c?"content open":"content")}},r.a.createElement("p",{className:"text"},e.title),r.a.createElement("i",{className:"trailing fas fa-caret-down"})),r.a.createElement("div",{className:"shadow"}),r.a.createElement("div",{className:c},r.a.createElement("p",null,"Choice 1"),r.a.createElement("p",null,"Choice 2"))))}function me(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],c=t[1];return M=c,a?r.a.createElement("div",{id:"load-screen"},r.a.createElement("p",null,"Loading...")):null}function pe(e){M(e)}var de={sports:new Set,competitions:new Set,teams:new Set},fe="",Ee="",ve="",ge=null;function he(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(0),i=Object(u.a)(s,2),m=i[0],p=i[1],d=Object(n.useState)([]),f=Object(u.a)(d,2),E=f[0],v=f[1],g=Object(n.useState)([]),h=Object(u.a)(g,2),b=h[0],w=h[1];if(ge=c,!a)return de={sports:new Set,competitions:new Set,teams:new Set},fe="",Ee="",ve="",null;function k(){return(k=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return pe(!0),e.next=3,T();case 3:t=e.sent,v(t.data.leagues.map((function(e){return e.name}))),pe(!1),p(2);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(){return(O=Object(o.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return pe(!0),e.next=3,C();case 3:t=e.sent,a=new Set(t.data.teams.map((function(e){return e.name}))),w(Array.from(a)),pe(!1),p(3);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(){return(y=Object(o.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={sports:Array.from(de.sports),competitions:Array.from(de.competitions),teams:Array.from(de.teams)},e.next=3,N(fe,Ee,t);case 3:"success"==(a=e.sent).status?(B("Account created"),c(!1)):(B(a.message),c(!1));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement("div",{id:"register-page"},r.a.createElement("div",{className:"header"},r.a.createElement("i",{className:"exit fas fa-times-circle",onClick:function(){c(!1)}}),r.a.createElement("p",null,"REGISTER")),r.a.createElement("div",{className:"body"},r.a.createElement(be,{setPage:p,enabled:0==m}),r.a.createElement(Ne,{items:["Soccer"],clicked:function(){return k.apply(this,arguments)},setPage:p,type:"sports",enabled:1==m}),r.a.createElement(Ne,{items:E,clicked:function(){return O.apply(this,arguments)},setPage:p,type:"competitions",enabled:2==m}),r.a.createElement(Ne,{items:b,clicked:function(){return y.apply(this,arguments)},setPage:p,type:"teams",enabled:3==m})))}function be(e){if(!e.enabled)return null;function t(){return(t=Object(o.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!Oe(fe)){t.next=3;break}return B("Please enter username"),t.abrupt("return");case 3:if(!Oe(Ee)&&!Oe(ve)){t.next=6;break}return B("Please enter password"),t.abrupt("return");case 6:if(Ee==ve){t.next=9;break}return B("Passwords do not match"),t.abrupt("return");case 9:if(!(Ee.length<3)){t.next=12;break}return B("Password length must be more than 3 letters"),t.abrupt("return");case 12:e.setPage(1);case 13:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return r.a.createElement("div",{id:"register-initial"},r.a.createElement("p",{className:""},"Username:"),r.a.createElement("input",{onChange:function(e){fe=e.target.value}}),r.a.createElement("p",{className:""},"Password:"),r.a.createElement("input",{onChange:function(e){Ee=e.target.value},type:"password"}),r.a.createElement("p",{className:""},"Retype password:"),r.a.createElement("input",{onChange:function(e){ve=e.target.value},type:"password"}),r.a.createElement("div",{className:"space"}),r.a.createElement("div",{className:"button gap",onClick:function(){!function(){t.apply(this,arguments)}()}},r.a.createElement("div",{className:"items"},r.a.createElement("div",{className:"leading"},r.a.createElement("p",{className:"text"},"NEXT")),r.a.createElement("i",{className:"trailing fas fa-arrow-right"})),r.a.createElement("div",{className:"shadow"})))}function Ne(e){return e.enabled?r.a.createElement("div",{id:"register-sports"},r.a.createElement("p",null,"Select your favorite ",e.type,":"),r.a.createElement("div",{className:"panel"},r.a.createElement("div",{className:"items"},r.a.createElement(we,{type:e.type,items:e.items}))),r.a.createElement("div",{className:"button gap",onClick:function(){e.clicked()}},r.a.createElement("div",{className:"items"},r.a.createElement("div",{className:"leading"},r.a.createElement("p",{className:"text"},"NEXT")),r.a.createElement("i",{className:"trailing fas fa-arrow-right"})),r.a.createElement("div",{className:"shadow"}))):null}function we(e){return e.items.map((function(t){return r.a.createElement(ke,{type:e.type,key:t,title:t})}))}function ke(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),c=a[0],s=a[1];return r.a.createElement("div",{className:"tile ".concat(c),onClick:function(){s(""==c?"invert":""),""==c?de[e.type].add(e.title):de[e.type].delete(e.title)}},r.a.createElement("div",{className:"dot ".concat(c)}),r.a.createElement("p",{className:"name"},e.title))}function Oe(e){return null===e||null!==e.match(/^ *$/)}function ye(){return r.a.createElement(J.Consumer,null,(function(e){return null==e.username?r.a.createElement("div",{id:"credential-bar"},r.a.createElement("div",{className:"button fixed",onClick:function(){ge(!0)}},r.a.createElement("div",{className:"items"},r.a.createElement("div",{className:"leading"},r.a.createElement("div",{className:"icon dot"}),r.a.createElement("p",{className:"text"},"REGISTER"))),r.a.createElement("div",{className:"shadow"})),r.a.createElement("div",{className:"button fixed",onClick:function(){ie(!0)}},r.a.createElement("div",{className:"items"},r.a.createElement("div",{className:"leading"},r.a.createElement("div",{className:"icon dot"}),r.a.createElement("p",{className:"text"},"LOGIN"))),r.a.createElement("div",{className:"shadow"}))):r.a.createElement("div",{id:"credential-bar"},r.a.createElement(ue,{title:e.username}),r.a.createElement("i",{className:"notification fas fa-bell"}))}))}function _e(){return r.a.createElement("div",{id:"menu-column"},r.a.createElement(je,{onPress:function(){},title:"HOME",iconClass:"fas fa-home"}),r.a.createElement(je,{onPress:function(){},title:"MODERATION",iconClass:"fas fa-user-friends"}),r.a.createElement(je,{onPress:function(){},title:"HELP",iconClass:"fas fa-question-circle"}),r.a.createElement(je,{onPress:function(){},title:"FEEDBACK",iconClass:"fas fa-comments"}))}function xe(){return r.a.createElement("div",{id:"following-container"},r.a.createElement(J.Consumer,null,(function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ce,{title:"Sports",items:e.followingSports}),r.a.createElement(Ce,{title:"Competitions",items:e.followingCompetitions}),r.a.createElement(Ce,{title:"Teams",items:e.followingTeams}))})))}function je(e){return r.a.createElement("div",{className:"button gap",onClick:function(){e.onPress()}},r.a.createElement("div",{className:"items"},r.a.createElement("div",{className:"leading"},r.a.createElement("i",{className:"icon ".concat(e.iconClass)}),r.a.createElement("p",{className:"text"},e.title)),r.a.createElement("div",{className:"dot"})),r.a.createElement("div",{className:"shadow"}))}function Ce(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),c=a[0],s=a[1];return r.a.createElement("div",{className:"button gap",onClick:function(){s(""==c?"open":"")}},r.a.createElement("div",{className:"items"},r.a.createElement("div",{className:"leading"},r.a.createElement("div",{className:"icon dot"}),r.a.createElement("p",{className:"text"},e.title)),r.a.createElement("i",{className:"trailing fas fa-plus-circle"})),r.a.createElement("div",{className:"follow-body ".concat(c)},e.items.map((function(e){return r.a.createElement("p",{className:"follow-item",key:e},e)}))),r.a.createElement("div",{className:"shadow"}))}var Se=function(e){return e.activated?r.a.createElement("div",{id:"leftmenu"},r.a.createElement(ye,null),r.a.createElement(he,null),r.a.createElement(_e,null),r.a.createElement("div",{id:"menu-divider"},r.a.createElement("div",{className:"line"}),r.a.createElement("p",{className:"divider-text"},"FOLLOWING"),r.a.createElement("div",{className:"line"})),r.a.createElement(xe,null)):null};function Te(e){var t=parseInt(e.time),a=new Date(t),c=Object(n.useState)(0),s=Object(u.a)(c,2),i=s[0],l=s[1];return Object(n.useEffect)((function(){for(var t=0,a=e.votes.length-1;a>=0&&(t+=e.votes[a].votes,e.votes[a].tag!==e.page.currentTags);a--);l(t)}),[e.page.currentTags]),r.a.createElement("div",{className:"post"},r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,e.title)),r.a.createElement("p",{className:"description"},e.body),r.a.createElement("div",{className:"divider"}),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"user-details"},r.a.createElement("p",{className:"username"},e.username),r.a.createElement("div",{className:"circle"}),r.a.createElement("i",{className:"emblem fas fa-fire"})),r.a.createElement("div",{className:"timestamp"},r.a.createElement("p",null,a.toLocaleString()))),r.a.createElement("div",{className:"voter"},r.a.createElement("div",{className:"column"},r.a.createElement("i",{onClick:function(){var t,a,n;t=e.id,a=e.page.currentTags,n=function(){l(i+1)},x("add",a,t).then((function(e){"success"===e.status&&n()}))},className:"upvote fas fa-caret-up"}),r.a.createElement("p",{className:"votes"},i),r.a.createElement("i",{onClick:function(){var t,a,n;t=e.id,a=e.page.currentTags,n=function(){l(i-1)},x("subtract",a,t).then((function(e){"success"===e.status&&n()}))},className:"downvote fas fa-caret-down"})))))}function Pe(){return r.a.createElement("div",{id:"searchbar"},r.a.createElement("i",{className:"fas fa-search"}),r.a.createElement("input",{placeholder:"Search..."}))}function Ie(){return r.a.createElement("div",{id:"filterbar"},r.a.createElement("div",{id:"filter-selector"},r.a.createElement("i",{className:"fab fa-red-river"}),r.a.createElement("div",{className:"divider"}),r.a.createElement("p",null,"TRENDING")),r.a.createElement("div",{id:"view-selector"},r.a.createElement("p",null,"VIEW"),r.a.createElement("div",{className:"divider"}),r.a.createElement("i",{className:"fas fa-th-list"}),r.a.createElement("i",{className:"fas fa-list"}),r.a.createElement("i",{className:"fas fa-stream"})))}function Ae(){return d()?r.a.createElement("div",{id:"create-post-btn",onClick:function(){oe(!0)}},r.a.createElement("div",{className:"row"},r.a.createElement("i",{className:"icon fas fa-envelope"}),r.a.createElement("p",null,"CREATE POST")),r.a.createElement("div",{className:"shadow"})):null}var Re,Ge=function(e){var t=Object(n.useState)([]),a=Object(u.a)(t,2),c=a[0],s=a[1];return Object(n.useEffect)((function(){function t(){return(t=Object(o.a)(l.a.mark((function t(){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y(e.page.currentTags);case 2:a=t.sent,s(a.data.posts);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e.page.currentTags]),r.a.createElement("div",{id:"main-holder"},r.a.createElement("div",{id:"post-container"},r.a.createElement(Pe,null),r.a.createElement(Ie,null),r.a.createElement(Ae,null),r.a.createElement(W.Consumer,null,(function(e){return c.map((function(t){return r.a.createElement(Te,{page:e,key:t._id,id:t._id,votes:t.votes,username:t.username,title:t.title,body:t.body,time:t.time})}))}))))},Le=a(23),Fe=a.n(Le);function Ue(e){return r.a.createElement("div",{className:"match-attribute"},r.a.createElement("p",{className:"title"},e.title),r.a.createElement("div",{className:"attribute"},r.a.createElement("div",{className:"row"},r.a.createElement("p",{className:"name"},e.team1),r.a.createElement("p",{className:"score"},e.value1)),r.a.createElement("div",{className:"divider"}),r.a.createElement("div",{className:"row"},r.a.createElement("p",{className:"name"},e.team2),r.a.createElement("p",{className:"score"},e.value2))))}function He(e,t){Re=t}var De,Be,Me=function(e){var t=Object(n.useState)({}),a=Object(u.a)(t,2),c=a[0],s=a[1];if(Object(n.useEffect)((function(){function t(){return(t=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R(Re.fixture_id);case 2:t=e.sent,s(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e.isActivated&&function(){t.apply(this,arguments)}()}),[e.isActivated]),!e.isActivated)return null;var i=new Date(Date.parse(Re.event_date));return r.a.createElement("div",{id:"content-page"},r.a.createElement("div",{id:"content-header"},r.a.createElement("img",{src:Fe.a,alt:"back"}),r.a.createElement("div",{className:"filter"}),r.a.createElement("div",{className:"header-content"},r.a.createElement("p",{className:"date"},i.toLocaleDateString()),r.a.createElement("p",{className:"league"},Re.league.name),r.a.createElement("div",{className:"gap"}),r.a.createElement("div",{className:"score-front"},r.a.createElement("p",{className:"team"},Re.homeTeam.team_name),r.a.createElement("div",{className:"score-display"},r.a.createElement("p",{className:"num"},Re.goalsHomeTeam)),r.a.createElement("div",{className:"score-display"},r.a.createElement("p",{className:"num"},Re.goalsAwayTeam)),r.a.createElement("p",{className:"team"},Re.awayTeam.team_name)),r.a.createElement("p",{className:"location"},Re.venue))),r.a.createElement("div",{id:"content-body"},r.a.createElement(Ue,{title:"SCORE",team1:Re.homeTeam.team_name,value1:Re.goalsHomeTeam,team2:Re.awayTeam.team_name,value2:Re.goalsAwayTeam}),r.a.createElement(Ue,{title:"POSSESSION",team1:Re.homeTeam.team_name,value1:void 0===c["Ball Possession"]?"-":c["Ball Possession"].home,team2:Re.awayTeam.team_name,value2:void 0===c["Ball Possession"]?"-":c["Ball Possession"].away}),r.a.createElement(Ue,{title:"SHOTS ON TARGET",team1:Re.homeTeam.team_name,value1:void 0===c["Shots on Goal"]?"-":c["Shots on Goal"].home,team2:Re.awayTeam.team_name,value2:void 0===c["Shots on Goal"]?"-":c["Shots on Goal"].away}),r.a.createElement(Ue,{title:"SHOTS OFF TARGET",team1:Re.homeTeam.team_name,value1:void 0===c["Shots off Goal"]?"-":c["Shots off Goal"].home,team2:Re.awayTeam.team_name,value2:void 0===c["Shots off Goal"]?"-":c["Shots off Goal"].away}),r.a.createElement(Ue,{title:"CORNERS",team1:Re.homeTeam.team_name,value1:void 0===c["Corner Kicks"]?"-":c["Corner Kicks"].home,team2:Re.awayTeam.team_name,value2:void 0===c["Corner Kicks"]?"-":c["Corner Kicks"].away}),r.a.createElement(Ue,{title:"OFFSIDES",team1:Re.homeTeam.team_name,value1:void 0===c.Offsides?"-":c.Offsides.home,team2:Re.awayTeam.team_name,value2:void 0===c.Offsides?"-":c.Offsides.away})))},Ke=[];function Xe(e,t,a,n){if(e!==n){var r=a.tags[a.tags.length-1];a.popPage(r),t(n),a.setPage([n])}}function Ve(e){var t=e.tab,a=e.setTab,n=e.page,c=e.setContent;if("home"===t)return r.a.createElement(r.a.Fragment,null);if("competition"===t||"team"===t||"fixture"===t)return r.a.createElement("div",{id:"navigation-tab"},r.a.createElement("div",{onClick:function(){Xe(t,a,n,"competition")},className:"tab"},r.a.createElement("p",{className:"competition"===t?"dark":"light"},"COMPETITIONS")),r.a.createElement("div",{onClick:function(){Xe(t,a,n,"team")},className:"tab"},r.a.createElement("p",{className:"team"===t?"dark":"light"},"TEAMS")),r.a.createElement("div",{onClick:function(){Xe(t,a,n,"fixture")},className:"tab"},r.a.createElement("p",{className:"fixture"===t?"dark":"light"},"IN-PLAY")));if(t.includes("_competition_result")||t.includes("_competition_fixture")||t.includes("_competition_inplay")||t.includes("_competition_team")){var s=t.split("_")[0];return r.a.createElement("div",{id:"navigation-tab"},r.a.createElement("div",{onClick:function(){Xe(t,a,n,"".concat(s,"_competition_result")),c(!1)},className:"tab"},r.a.createElement("p",{className:t.includes("_competition_result")?"dark":"light"},"RESULTS")),r.a.createElement("div",{onClick:function(){Xe(t,a,n,"".concat(s,"_competition_fixture")),c(!1)},className:"tab"},r.a.createElement("p",{className:t.includes("_competition_fixture")?"dark":"light"},"FIXTURES")),r.a.createElement("div",{onClick:function(){Xe(t,a,n,"".concat(s,"_competition_inplay")),c(!1)},className:"tab"},r.a.createElement("p",{className:t.includes("_competition_inplay")?"dark":"light"},"IN-PLAY")),r.a.createElement("div",{onClick:function(){Xe(t,a,n,"".concat(s,"_competition_team")),c(!1)},className:"tab"},r.a.createElement("p",{className:t.includes("_competition_team")?"dark":"light"},"TEAMS")))}if(t.includes("_team_result")||t.includes("_team_fixture")||t.includes("_team_inplay")){var i=t.split("_")[0];return r.a.createElement("div",{id:"navigation-tab"},r.a.createElement("div",{onClick:function(){Xe(t,a,n,"".concat(i,"_team_result")),c(!1)},className:"tab"},r.a.createElement("p",{className:t.includes("_team_result")?"dark":"light"},"RESULTS")),r.a.createElement("div",{onClick:function(){Xe(t,a,n,"".concat(i,"_team_fixture")),c(!1)},className:"tab"},r.a.createElement("p",{className:t.includes("_team_fixture")?"dark":"light"},"FIXTURES")),r.a.createElement("div",{onClick:function(){Xe(t,a,n,"".concat(i,"_team_inplay")),c(!1)},className:"tab"},r.a.createElement("p",{className:t.includes("_team_inplay")?"dark":"light"},"IN-PLAY")))}return null}function Ye(e){var t=e.setContent,a=e.page,c=e.tab,s=e.leagues,i=e.teams,m=e.fixtures,p=Object(n.useState)([]),d=Object(u.a)(p,2),f=d[0],E=d[1];function v(e){var n=function(){var e=Object(o.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Ke.push((function(){a.popPage("".concat(n.fixture_id,"_fixture_details")),t(!1),Be(c)})),t(!0),a.setPage(["".concat(n.fixture_id,"_fixture_details")]),Be("".concat(n.fixture_id,"_fixture_details")),He(0,n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return m.filter((function(t){return e.includes(t.statusShort)})).map((function(e){return r.a.createElement(qe,{clicked:function(){n(e)},key:e.fixture_id,name:"".concat(e.homeTeam.team_name," VS ").concat(e.awayTeam.team_name),id:e.fixture_id})}))}function g(e){var n=function(){var e=Object(o.a)(l.a.mark((function e(n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Ke.push((function(){a.popPage("".concat(n.fixture_id,"_fixture_details")),t(!1),Be(c)})),t(!0),a.setPage(["".concat(n.fixture_id,"_fixture_details")]),Be("".concat(n.fixture_id,"_fixture_details")),He(0,n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return f.filter((function(t){return e.includes(t.statusShort)})).map((function(e){return r.a.createElement(qe,{clicked:function(){n(e)},key:e.fixture_id,name:"".concat(e.homeTeam.team_name," VS ").concat(e.awayTeam.team_name),id:e.fixture_id})}))}if(console.log(a.tags),"home"===c){function h(){var e=a.tags[a.tags.length-1];Be("competition"),a.setPage(["competition"]),Ke.push((function(){a.popPage(e),Be("home")}))}return r.a.createElement(qe,{name:"Soccer",clicked:function(){h()}})}if("competition"===c){var h=function(){var e=Object(o.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return pe(!0),e.next=3,I(t.leagueId);case 3:if(n=e.sent,pe(!1),"failure"!==n.status){e.next=8;break}return B(n.message),e.abrupt("return");case 8:De(n.data),Be("".concat(t.name,"_competition_result")),a.setPage(["".concat(t.name,"_competition_result")]),Ke.push((function(){var e=a.tags[a.tags.length-1];a.popPage(e),Be("competition")}));case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return s.map((function(e){return r.a.createElement(qe,{key:e._id,name:e.name,clicked:function(){h(e)}})}))}if("team"===c){function b(){return(b=Object(o.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return pe(!0),e.next=3,L(t.name);case 3:n=e.sent,E(n.data),pe(!1),a.setPage(["".concat(t.name,"_team_result")]),Be("".concat(t.name,"_team_result")),Ke.push((function(){var e=a.tags[a.tags.length-1];a.popPage(e),Be("team")}));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return i.map((function(e){return r.a.createElement(qe,{clicked:function(){!function(e){b.apply(this,arguments)}(e)},key:e._id,name:e.name}," id=",e.teamId)}))}if(c.includes("_competition_result"))return v(["FT","AET","PEN"]);if(c.includes("_competition_fixture"))return v(["NS"]);if(c.includes("_competition_inplay"))return v(["1H","HT","2H","ET","P","BT"]);if(c.includes("_competition_team")){var N=c.split("_")[0];return i.filter((function(e){return e.leagueName==N})).map((function(e){return r.a.createElement(qe,{clicked:function(){!function(e){a.setPage(["".concat(e.name,"_team_result")]),Be("".concat(e.name,"_team_result")),Ke.push((function(){var e=a.tags[a.tags.length-1];a.popPage(e),Be("team")}))}(e)},key:e._id,name:e.name}," id=",e.teamId)}))}return c.includes("_team_result")?g(["FT","AET","PEN"]):c.includes("_team_fixture")?g(["NS"]):c.includes("_team_inplay")?g(["1H","HT","2H","ET","P","BT"]):null}function qe(e){return r.a.createElement("div",{className:"team-tile",onClick:e.clicked},r.a.createElement("i",{className:"logo fas fa-igloo"}),r.a.createElement("div",{className:"divider"}),r.a.createElement("p",{className:"name"},e.name))}var Je=function(e){var t=Object(n.useState)([]),a=Object(u.a)(t,2),c=a[0],s=a[1],i=Object(n.useState)([]),m=Object(u.a)(i,2),p=m[0],d=m[1],f=Object(n.useState)("home"),E=Object(u.a)(f,2),v=E[0],g=E[1],h=Object(n.useState)([]),b=Object(u.a)(h,2),N=b[0],w=b[1],k=Object(n.useState)(!1),O=Object(u.a)(k,2),y=O[0],_=O[1];return Object(n.useEffect)((function(){function e(){return(e=Object(o.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C();case 2:return t=e.sent,e.next=5,T();case 5:if(a=e.sent,"failure"!==t.status&&"failure"!==a.status){e.next=8;break}return e.abrupt("return",console.log("Error occured while retrieving leagues/teams"));case 8:s(t.data.teams),d(a.data.leagues);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}De=w,Be=g,function(){e.apply(this,arguments)}()}),[]),e.activated?r.a.createElement(W.Consumer,null,(function(e){return r.a.createElement("div",{id:"rightmenu"},"home"===v?r.a.createElement("div",null):r.a.createElement("div",{id:"back-btn",onClick:function(){Ke.pop()()},className:"button fixed"},r.a.createElement("p",null," BACK ")),r.a.createElement("div",{id:"navigation-container"},r.a.createElement(Ve,{setContent:_,tab:v,setTab:g,page:e}),r.a.createElement("div",{id:"navigation-body"},r.a.createElement(Me,{isActivated:y}),r.a.createElement(Ye,{setContent:_,page:e,fixtures:N,tab:v,teams:c,leagues:p}))))})):null};function We(e){var t=function(t){e.menu!==t?e.changeMenu(t):e.changeMenu(0)};return r.a.createElement("div",{id:"navbar"},r.a.createElement("i",{className:"fas fa-bars",onClick:function(){t(1)}}),r.a.createElement("img",{alt:"logo",src:"./media/logo.png"}),r.a.createElement("i",{className:"fas fa-bars",onClick:function(){t(2)}}))}var $e=function(e){var t=Object(n.useState)(0),a=Object(u.a)(t,2),c=a[0],s=a[1];return Object(n.useEffect)((function(){function t(){return(t=Object(o.a)(l.a.mark((function t(){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!d()){t.next=6;break}return t.next=3,h();case 3:a=t.sent,console.log(a.data),e.user.editUser({username:a.data.username,followingSports:a.data.followedSports,followingCompetitions:a.data.followedCompetitions,followingTeams:a.data.followedTeams});case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(J.Consumer,null,(function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(he,null),r.a.createElement(We,{changeMenu:s,menu:c}),r.a.createElement(me,null),r.a.createElement(ae,null),r.a.createElement(ne,null),r.a.createElement(ce,null),r.a.createElement(re,null),r.a.createElement(W.Consumer,null,(function(e){return r.a.createElement(Ge,{page:e})})),r.a.createElement(D,null),r.a.createElement(Se,{activated:1===c}),r.a.createElement(Je,{activated:2===c}))})))};s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(z,null,r.a.createElement($,null,r.a.createElement(J.Consumer,null,(function(e){return r.a.createElement($e,{user:e})}))))),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.6d6ad74e.chunk.js.map