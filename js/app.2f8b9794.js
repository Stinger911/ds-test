(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{0:function(t,a,e){t.exports=e("2f39")},"0047":function(t,a,e){},"013f":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-page",{ref:"pageHolder",staticClass:"flex flex-center"},[e("canvas",{staticClass:"back_canvas",attrs:{id:"bg-canvas"}}),e("div",{staticStyle:{"text-align":"center"}},[e("h3",{staticClass:"h-title",staticStyle:{"font-size":"3.77rem"}},[t._v("DEEP")]),e("h3",{staticClass:"h-title",staticStyle:{"font-size":"3.1rem"}},[t._v("SPACE")]),e("h5",{staticClass:"h-title"},[t._v("adventures")]),e("div",{staticClass:"row",staticStyle:{"max-width":"500px",margin:"auto"}},[e("div",{staticClass:"col-xs-12 col-sm-6",staticStyle:{padding:".5em"}},[e("q-input",{attrs:{outlined:"",placeholder:"username",dense:""},scopedSlots:t._u([{key:"prepend",fn:function(){return[e("i",{staticClass:"far fa-user q-icon"})]},proxy:!0}]),model:{value:t.username,callback:function(a){t.username=a},expression:"username"}})],1),e("div",{staticClass:"col-xs-12 col-sm-6",staticStyle:{padding:".5em"}},[e("q-input",{attrs:{outlined:"",type:t.isPwd?"password":"text",placeholder:"password",dense:""},scopedSlots:t._u([{key:"prepend",fn:function(){return[e("i",{staticClass:"fas fa-unlock-alt q-icon"})]},proxy:!0},{key:"append",fn:function(){return[e("q-icon",{staticClass:"cursor-pointer",attrs:{name:t.isPwd?"far fa-eye":"far fa-eye-slash"},on:{click:function(a){t.isPwd=!t.isPwd}}})]},proxy:!0}]),model:{value:t.password,callback:function(a){t.password=a},expression:"password"}})],1),e("div",{staticClass:"col-xs-6"},[e("q-btn",{attrs:{flat:"",color:"secondary",label:"Register"},on:{click:function(a){return t.doRegister()}}})],1),e("div",{staticClass:"col-xs-6"},[e("q-btn",{attrs:{color:"primary",label:"Login"},on:{click:function(a){return t.doLogin()}}})],1),e("div",{staticClass:"col-xs-12"},[e("b",[t._v("– OR –")])]),e("div",{staticClass:"col-xs-12"},[e("div",{staticClass:"q-pa-md q-gutter-sm"},[e("q-btn",{attrs:{round:"",color:"blue",glossy:"",disable:""}},[e("i",{staticClass:"fab fa-facebook-f q-icon"})]),e("q-btn",{attrs:{round:"",color:"red",glossy:"",disable:""}},[e("i",{staticClass:"fab fa-google q-icon"})]),e("q-btn",{attrs:{round:"",color:"amber",glossy:"",disable:""}},[e("i",{staticClass:"fab fa-app-store-ios q-icon"})]),e("q-btn",{attrs:{round:"",color:"deep-orange",glossy:"",disable:""}},[e("i",{staticClass:"fab fa-google-play q-icon"})])],1)])])])])},n=[],o=(e("6c7b"),{name:"Login",data:function(){return{username:"",password:"",isPwd:!0,canvas:null,context:null,stars:[],midx:0,midy:0}},mounted:function(){window.addEventListener("resize",this.onResize),window.requestAnimationFrame(this.animate),this.onResize()},methods:{doLogin:function(){var t=this;this.$root.$tools.game.login(this.username,this.password,(function(a){a&&a.error?t.$q.notify({message:"Can't log in",caption:a.error.DETAILS,icon:"warning",color:"negative"}):t.$root.$store.commit("ds/setAuth",!0)}))},doRegister:function(){this.$root.$store.commit("ds/setView","register")},onResize:function(){this.canvas=document.getElementById("bg-canvas"),this.canvas&&(this.canvas.width=this.canvas.clientWidth,this.canvas.height=this.canvas.clientHeight,this.context=this.canvas.getContext("2d"),this.midx=this.canvas.width/2,this.midy=this.canvas.height/2,this.stars=[])},animate:function(){if(this.canvas){if(this.stars.length<300&&Math.random()>.1){var t={x:0,y:0,vx:6*Math.random()-3,vy:6*Math.random()-3};this.stars.push(t)}this.context.clearRect(0,0,this.canvas.width,this.canvas.height);for(var a=0;a<this.stars.length;a++){this.stars[a].x=this.stars[a].x+this.stars[a].vx,this.stars[a].y=this.stars[a].y+this.stars[a].vy,(this.stars[a].x>this.midx||this.stars[a].x<-this.midx)&&(this.stars[a].x=0,this.stars[a].y=0);var e=Math.floor(Math.abs(this.stars[a].x)+Math.abs(this.stars[a].y));this.context.fillStyle="rgb("+e+","+e+","+e+")",this.context.beginPath(),this.context.arc(this.midx+this.stars[a].x,this.midy+this.stars[a].y,Math.abs(2*this.stars[a].y/this.midy+a/150),0,2*Math.PI),this.context.fill()}window.requestAnimationFrame(this.animate)}}}}),i=o,r=(e("da41"),e("2877")),c=Object(r["a"])(i,s,n,!1,null,null,null);a["default"]=c.exports},"14f2":function(t,a,e){},"1d6a":function(t,a,e){},"2f39":function(t,a,e){"use strict";e.r(a);var s={};e.r(s),e.d(s,"someGetter",(function(){return K}));var n={};e.r(n),e.d(n,"setAuth",(function(){return Y})),e.d(n,"setView",(function(){return tt}));var o={};e.r(o),e.d(o,"someAction",(function(){return at}));var i=e("967e"),r=e.n(i),c=(e("a481"),e("96cf"),e("fa84")),l=e.n(c),u=(e("7d6e"),e("573e"),e("e54f"),e("985d"),e("0047"),e("2b0e")),d=e("1f91"),f=e("42d2"),p=e("b05d"),m=e("cb32"),h=e("d847"),g=e("ead5"),v=e("079e"),b=e("9c40"),w=e("f09f"),x=e("4b7e"),y=e("a370"),k=e("24e8"),q=e("9404"),C=e("e359"),S=e("0016"),$=e("27f9"),_=e("66e5"),A=e("0170"),P=e("4074"),E=e("4d5a"),M=e("1c1c"),R=e("9989"),I=e("09e3"),T=e("7cbe"),B=e("2c91"),N=e("65c6"),Q=e("6ac5"),L=e("05c0"),O=e("714f"),z=e("7f67"),D=e("2a19");u["a"].use(p["a"],{config:{},lang:d["a"],iconSet:f["a"],components:{QAvatar:m["a"],QBar:h["a"],QBreadcrumbs:g["a"],QBreadcrumbsEl:v["a"],QBtn:b["a"],QCard:w["a"],QCardActions:x["a"],QCardSection:y["a"],QDialog:k["a"],QDrawer:q["a"],QHeader:C["a"],QIcon:S["a"],QInput:$["a"],QItem:_["a"],QItemLabel:A["a"],QItemSection:P["a"],QLayout:E["a"],QList:M["a"],QPage:R["a"],QPageContainer:I["a"],QPopupProxy:T["a"],QSpace:B["a"],QToolbar:N["a"],QToolbarTitle:Q["a"],QTooltip:L["a"]},directives:{Ripple:O["a"],ClosePopup:z["a"]},plugins:{Notify:D["a"]}});var F=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"q-app"}},[e("MyLayout")],1)},H=[],U=e("f241"),j={name:"App",components:{MyLayout:U["default"]},created:function(){this.$q.dark.set(!0),this.$root.$tools.game.store=this.$root.$store}},V=j,G=e("2877"),Z=Object(G["a"])(V,F,H,!1,null,null,null),J=Z.exports,W=e("2f62"),X=function(){return{auth:!1,view:""}};function K(){}function Y(t,a){a||window.localStorage.setItem("dsdat",null),t.auth=a}function tt(t,a){t.view=a}function at(){}var et={namespaced:!0,getters:s,mutations:n,actions:o,state:X};u["a"].use(W["a"]);var st=function(){var t=new W["a"].Store({modules:{ds:et},strict:!1});return t},nt=e("8c4f"),ot=[{path:"/",component:function(){return Promise.resolve().then(e.bind(null,"f241"))},children:[{path:"",name:"default",component:function(){return Promise.resolve().then(e.bind(null,"013f"))}}]}];ot.push({path:"*",component:function(){return e.e("4b47640d").then(e.bind(null,"e51e"))}});var it=ot;u["a"].use(nt["a"]);var rt=function(){var t=new nt["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:it,mode:"hash",base:""});return t},ct=function(){return lt.apply(this,arguments)};function lt(){return lt=l()(r.a.mark((function t(){var a,e,s;return r.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("function"!==typeof st){t.next=6;break}return t.next=3,st({Vue:u["a"]});case 3:t.t0=t.sent,t.next=7;break;case 6:t.t0=st;case 7:if(a=t.t0,"function"!==typeof rt){t.next=14;break}return t.next=11,rt({Vue:u["a"],store:a});case 11:t.t1=t.sent,t.next=15;break;case 14:t.t1=rt;case 15:return e=t.t1,a.$router=e,s={el:"#q-app",router:e,store:a,render:function(t){return t(J)}},t.abrupt("return",{app:s,store:a,router:e});case 19:case"end":return t.stop()}}),t)}))),lt.apply(this,arguments)}var ut=e("a925"),dt={failed:"Action failed",success:"Action was successful"},ft={"en-us":dt};u["a"].use(ut["a"]);var pt=new ut["a"]({locale:"en-us",fallbackLocale:"en-us",messages:ft}),mt=function(t){var a=t.app;a.i18n=pt},ht=e("bc3a"),gt=e.n(ht);u["a"].prototype.$axios=gt.a;e("28a5");var vt="X388316E3fNi",bt="Nf6w3hFfo9xafl9Y79Aby6xBZFUn97LU";function wt(t){return window.CryptoJS.enc.Base64.stringify(window.CryptoJS.HmacSHA256(t,bt))}function xt(){}var yt={store:null,gs:window.gamesparks,onInit:function(){},onMessage:function(t){xt("GM-Message",t,yt),".AuthenticatedConnectResponse"===t["@class"]&&void 0!==t["userId"]&&null!=yt.store&&yt.store.commit("ds/setAuth",!0)},onError:function(t){this.gs.log("GM-Message",t,this),this.isAuthenticated&&(this.isAuthenticated=!1)},saveAuthToken:function(){var t=window.gamesparks.getAuthToken(),a=window.gamesparks.getSessionId();window.localStorage.setItem("dsdat",t+"::"+a)},login:function(t,a,e){yt.gs.authenticationRequest(a,t,(function(t){t&&void 0===t.error&&yt.saveAuthToken(),e&&e(t)}))},register:function(t,a,e,s){yt.gs.registrationRequest(e,a,t,(function(t){t&&void 0!==t["userId"]&&void 0!==t["authToken"]&&!0===t["newPlayer"]&&(yt.gs.setAuthToken(t["authToken"]),yt.saveAuthToken()),s&&s(t)}))},eventRequest:function(t,a,e){a["eventKey"]=t,yt.gs.sendWithData("LogEventRequest",a,e)}};function kt(){var t=window.localStorage.getItem("dsdat");if(null!=t){var a=t.split("::");window.gamesparks.setAuthToken(a[0]),window.gamesparks.sessionId=a[1]}return yt.gs=window.gamesparks,window.gamesparks.initPreview({key:vt,secret:bt,onNonce:wt,onInit:yt.onInit,onMessage:yt.onMessage,onError:yt.onError,logger:xt}),yt}function qt(){return Ct.apply(this,arguments)}function Ct(){return Ct=l()(r.a.mark((function t(){var a,e,s,n,o,i,c,l,d;return r.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,ct();case 2:a=t.sent,e=a.app,s=a.store,n=a.router,o=!0,i=function(t){o=!1,window.location.href=t},c=window.location.href.replace(window.location.origin,""),l=[mt,void 0,void 0],d=0;case 11:if(!(!0===o&&d<l.length)){t.next=29;break}if("function"===typeof l[d]){t.next=14;break}return t.abrupt("continue",26);case 14:return t.prev=14,t.next=17,l[d]({app:e,router:n,store:s,Vue:u["a"],ssrContext:null,redirect:i,urlPath:c});case 17:t.next=26;break;case 19:if(t.prev=19,t.t0=t["catch"](14),!t.t0||!t.t0.url){t.next=24;break}return window.location.href=t.t0.url,t.abrupt("return");case 24:return console.error("[Quasar] boot error:",t.t0),t.abrupt("return");case 26:d++,t.next=11;break;case 29:if(!1!==o){t.next=31;break}return t.abrupt("return");case 31:new u["a"](e);case 32:case"end":return t.stop()}}),t,null,[[14,19]])}))),Ct.apply(this,arguments)}u["a"].prototype.$tools={makeName:function(){for(var t="ABOUSEITILETSTONLONUTHNOALLEXEGEZACEBISOUSESARMAINDIREA?ERATENBERALAVETIEDORQUANTEISRION",a="",e=0,s=Math.random()<.15?2:Math.random()<.5?3:4,n=0;n<s;n++)e=2*Math.floor(43*Math.random()),a+=t[e],"?"!==t[e+1]&&(a+=t[e+1]);return a.charAt(0)+a.slice(1).toLowerCase()},game:kt(u["a"].prototype),dumpProps:function(t){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e="";return Object.getOwnPropertyNames(t).forEach((function(s){e+=s+": "+t[s],e+=a?"<br/>\n":",\n"})),e}},qt()},4126:function(t,a,e){"use strict";var s=e("f40f"),n=e.n(s);n.a},"6d31":function(t,a,e){"use strict";var s=e("b828"),n=e.n(s);n.a},"6f8f":function(t,a,e){"use strict";var s=e("7bcb"),n=e.n(s);n.a},"7bcb":function(t,a,e){},8944:function(t,a,e){},b828:function(t,a,e){},c876:function(t,a,e){"use strict";var s=e("8944"),n=e.n(s);n.a},d3d6:function(t,a,e){t.exports=e.p+"img/quasar-logo-full.c3e88651.svg"},d75a:function(t,a,e){"use strict";var s=e("1d6a"),n=e.n(s);n.a},da41:function(t,a,e){"use strict";var s=e("14f2"),n=e.n(s);n.a},f241:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-layout",{staticStyle:{overflow:"hidden"}},[e("q-page-container",[t.auth||""!==t.view?t._e():e("Login"),t.auth||"register"!==t.view?t._e():e("Register"),t.auth&&""===t.view?e("PageIndex"):t._e()],1)],1)},n=[],o=e("013f"),i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("q-page",{staticClass:"flex flex-center back"},[s("q-dialog",{model:{value:t.open,callback:function(a){t.open=a},expression:"open"}},[s("q-card",{staticClass:"reg-dlg"},[s("q-toolbar",{staticClass:"reg-dlg-title"},[s("q-avatar",[s("img",{attrs:{src:e("d3d6"),alt:"Quasar Logo"}})]),s("q-toolbar-title",[s("span",{staticClass:"text-weight-bold"},[t._v("Register new player")])]),s("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"close"},on:{click:function(a){return t.cancelRegs()}}})],1),s("q-card-section",[s("div",{staticClass:"row"},[s("div",{staticClass:"col-xs-12",staticStyle:{padding:".5em"}},[s("q-input",{attrs:{outlined:"",placeholder:"username",dense:"",rules:[function(){return!0}]},scopedSlots:t._u([{key:"prepend",fn:function(){return[s("i",{staticClass:"far fa-user q-icon"})]},proxy:!0}]),model:{value:t.username,callback:function(a){t.username=a},expression:"username"}})],1),s("div",{staticClass:"col-xs-12",staticStyle:{padding:".5em"}},[s("q-input",{attrs:{outlined:"",type:t.isPwd?"password":"text",placeholder:"password","error-message":"Passwords are not match",error:!t.samePass,dense:""},scopedSlots:t._u([{key:"prepend",fn:function(){return[s("i",{staticClass:"fas fa-unlock-alt q-icon"})]},proxy:!0},{key:"append",fn:function(){return[s("q-icon",{staticClass:"cursor-pointer",attrs:{name:t.isPwd?"far fa-eye":"far fa-eye-slash"},on:{click:function(a){t.isPwd=!t.isPwd}}})]},proxy:!0}]),model:{value:t.password,callback:function(a){t.password=a},expression:"password"}})],1),s("div",{staticClass:"col-xs-12",staticStyle:{padding:".5em"}},[s("q-input",{attrs:{outlined:"",type:t.isPwd?"password":"text",placeholder:"repeat password","error-message":"Passwords are not match",error:!t.samePass,dense:""},scopedSlots:t._u([{key:"prepend",fn:function(){return[s("i",{staticClass:"fas fa-unlock-alt q-icon"})]},proxy:!0},{key:"append",fn:function(){return[s("q-icon",{staticClass:"cursor-pointer",attrs:{name:t.isPwd?"far fa-eye":"far fa-eye-slash"},on:{click:function(a){t.isPwd=!t.isPwd}}})]},proxy:!0}]),model:{value:t.password2,callback:function(a){t.password2=a},expression:"password2"}})],1),s("div",{staticClass:"col-xs-12",staticStyle:{padding:".5em"}},[s("q-input",{attrs:{outlined:"",placeholder:"display name",dense:"","bottom-slots":""},scopedSlots:t._u([{key:"prepend",fn:function(){return[s("i",{staticClass:"fas fa-user-astronaut"})]},proxy:!0},{key:"append",fn:function(){return[s("q-btn",{attrs:{icon:"fas fa-cogs",round:"",dense:""},on:{click:function(a){return t.makeName()}}})]},proxy:!0}]),model:{value:t.displayName,callback:function(a){t.displayName=a},expression:"displayName"}})],1),s("div",{staticClass:"col-xs-12",staticStyle:{padding:".5em"}},[s("q-input",{attrs:{outlined:"",placeholder:"e-mail",dense:"",rules:[function(){return!0}]},scopedSlots:t._u([{key:"prepend",fn:function(){return[s("i",{staticClass:"far fa-envelope q-icon"})]},proxy:!0}]),model:{value:t.email,callback:function(a){t.email=a},expression:"email"}})],1),s("div",{staticClass:"col-xs-12",staticStyle:{padding:".5em","text-align":"center"}},[s("q-avatar",{attrs:{size:"150px"}},[s("img",{attrs:{src:t.avatarImg,alt:"Avatar"},on:{click:function(a){return t.makeAvatar()}}})])],1),s("div",{staticClass:"col-xs-12",staticStyle:{padding:".5em","text-align":"center"}},[s("q-btn",{attrs:{color:"primary",label:"Register"},on:{click:function(a){return t.doRegister()}}})],1)])])],1)],1)],1)},r=[],c=(e("a481"),{name:"Register",data:function(){return{open:!0,username:"",password:"",password2:"",displayName:"",dnValid:!0,email:"",isPwd:!0,avatarImg:""}},mounted:function(){this.makeName()},computed:{samePass:function(){return this.password===this.password2}},methods:{cancelRegs:function(){this.$root.$store.commit("ds/setView","")},makeName:function(){this.displayName=this.$root.$tools.makeName()+" "+this.$root.$tools.makeName(),this.makeAvatar()},makeAvatar:function(){var t=(new Date).getTime(),a=this.displayName.replace(" ",".");this.avatarImg="https://i.pravatar.cc/150?u="+encodeURI(a+"."+t+"@ds.net")},doRegister:function(){var t=this;this.$root.$tools.game.register(this.username,this.password,this.displayName,(function(a){if(a&&a.newPlayer)t.$root.$tools.game.eventRequest("STORE_USETS",{settings:{email:t.email,avatar:t.avatarImg}},(function(){t.$root.$store.commit("ds/setAuth",!0),t.$root.$store.commit("ds/setView","")}));else{var e=a&&a.error?t.$root.$tools.dumpProps(a.error):"Unknown Error";t.$q.notify({message:"Can't register",caption:e,icon:"warning",color:"negative"})}}))}}}),l=c,u=(e("d75a"),e("2877")),d=Object(u["a"])(l,i,r,!1,null,"6bc41b57",null),f=d.exports,p=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("HorizTools",{attrs:{top:""}},[s("q-btn",{attrs:{round:""}},[s("q-avatar",[s("img",{attrs:{alt:"avatar",src:t.avatar}})]),s("q-popup-proxy",{attrs:{"auto-close":"",breakpoint:300}},[s("div",{staticStyle:{"font-family":"BankGothic"}},[t._v(t._s(t.userName))]),s("div",{staticClass:"fit row inline wrap",staticStyle:{"max-width":"300px"}},[s("FixBtn",{attrs:{icon:"settings",label:"Settings",double:""}}),s("FixBtn",{attrs:{icon:"fa fas fa-chart-line",label:"Market"}}),s("FixBtn",{attrs:{icon:"fa fas fa-mobile-alt",label:"Comm"}}),s("FixBtn",{attrs:{icon:"fa fas fa-dna",label:"Skills"}}),s("FixBtn",{attrs:{icon:"fa fas fa-map",label:"StarMap"},on:{click:function(a){t.starMap=!0}}}),s("FixBtn",{attrs:{icon:"fa fas fa-box-open",label:"Inventory",double:""}}),s("FixBtn",{attrs:{icon:"fa fas fa-door-open",label:"LogOut"},on:{click:function(a){return t.logoutRequest()}}})],1)])],1),s("q-btn",{staticClass:"q-ml-lg",attrs:{round:"",flat:"",icon:"fas fa-user-astronaut",color:t.autopilot?"accent":"default"},on:{click:function(a){t.autopilot=!t.autopilot}}},[s("q-tooltip",[t._v("Autopilot")])],1)],1),s("q-page",{staticClass:"flex flex-center"},[s("img",{attrs:{alt:"Quasar logo",src:e("d3d6")}})]),s("HorizTools",{attrs:{bottom:""}},[s("div",{staticClass:"flex flex-center service"},[s("q-space"),t._v("\n      Build: "+t._s(t.buildTag())+"\n    ")],1)]),s("StarMap",{attrs:{dialog:t.starMap},on:{close:function(a){t.starMap=!1}}})],1)},m=[],h=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{class:t.posClass,style:t.posStyle},[t._t("default")],2)},g=[],v={name:"HorizTools",props:{top:Boolean,bottom:Boolean},computed:{posStyle:function(){if(this.top&&this.bottom)throw"Both 'top' and 'bottom' are given";return this.bottom?"bottom: 0;":"top: 0;"},posClass:function(){if(this.top&&this.bottom)throw"Both 'top' and 'bottom' are given";return this.bottom?"glossy-bottom horiz-toolbox":"glossy-top horiz-toolbox"}}},b=v,w=(e("c876"),Object(u["a"])(b,h,g,!1,null,"76b9e594",null)),x=w.exports,y=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-btn",{class:t.makeClass,attrs:{icon:t.icon,label:t.label,"text-color":"secondary",stack:"",glossy:""},on:{click:t.doClick}})},k=[],q={name:"FixBtn",props:{icon:String,label:String,double:{type:Boolean,default:!1}},computed:{makeClass:function(){return this.double?"col-8 fix-btn-d":"col-4 fix-btn"}},methods:{doClick:function(){this.$emit("click")}}},C=q,S=(e("6d31"),Object(u["a"])(C,y,k,!1,null,"494fa921",null)),$=S.exports,_=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-dialog",{attrs:{maximized:t.maximized,"full-height":"","full-width":"",persistent:""},model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[e("q-card",[e("q-bar",[e("q-btn",{attrs:{flat:"",icon:"menu"}},[e("q-tooltip",[t._v("Close")])],1),e("span",{staticClass:"gt-xs",staticStyle:{"font-family":"SpaceAge"}},[t._v("Star Map")]),e("q-space"),e("q-btn",{attrs:{flat:"",icon:"fas fa-search-minus"}},[e("q-tooltip",[t._v("Zoom Out")])],1),e("q-btn",{attrs:{flat:"",icon:"fas fa-search-plus"}},[e("q-tooltip",[t._v("Zoom In")])],1),e("q-btn",{attrs:{flat:"",icon:"close"},on:{click:function(a){return t.$emit("close")}}},[e("q-tooltip",[t._v("Close")])],1)],1),e("q-bar",[e("q-breadcrumbs",[t.mode>=0?e("q-breadcrumbs-el",{staticClass:"bcr",attrs:{label:"SPACE"},on:{click:function(a){t.mode=0}}}):t._e(),t.mode>=1?e("q-breadcrumbs-el",{staticClass:"bcr",attrs:{label:"CLUSTER 0"},on:{click:function(a){t.mode=1}}}):t._e(),t.mode>=2?e("q-breadcrumbs-el",{staticClass:"bcr",attrs:{label:"STAR 0"}}):t._e()],1)],1),e("div",{staticClass:"flex flex-center q-pa-sm mapper"},[e("canvas",{key:t.mode,staticClass:"map-canvas",attrs:{id:"star-map-canvas"}})])],1)],1)},A=[],P=(e("6c7b"),{name:"StarMap",data:function(){return{maximized:!0,mode:1,cluster:0}},props:{dialog:Boolean},watch:{mode:function(){this.drawMap()},cluster:function(){this.drawMap()},dialog:function(t){t&&setTimeout(this.drawMap,100)}},mounted:function(){this.maximized=window.innerWidth<=760},methods:{drawMap:function(){var t=document.getElementById("star-map-canvas");if(t){console.log("Redraw canvas"),t.width=t.clientWidth,t.height=t.clientHeight;var a=t.getContext("2d"),e=t.width>t.height?t.height:t.width;a.clearRect(0,0,t.width,t.height),a.fillStyle="#dd7000",a.beginPath(),a.arc(t.width/2,t.height/2,.4*e,0,2*Math.PI),console.log(t.width/2,t.height/2,.9*e),a.fill()}}}}),E=P,M=(e("4126"),Object(u["a"])(E,_,A,!1,null,"23255bac",null)),R=M.exports,I={name:"PageIndex",components:{StarMap:R,FixBtn:$,HorizTools:x},data:function(){return{userName:"",avatar:"",starMap:!1,autopilot:!1}},mounted:function(){var t=this;this.$root.$tools.game.gs.accountDetailsRequest((function(a){t.userName=a.displayName,a&&a.scriptData&&a.scriptData.settings&&a.scriptData.settings.avatar?t.avatar=a.scriptData.settings.avatar:t.avatar="https://i.pravatar.cc/150?u=".concat(t.userName,"@ds.net")}))},methods:{buildTag:function(){var t="devBuild",a=new Date("2020-02-12T10:10:18.655Z");return t=a.toDateString()+" b"+a.getTime()%1e4,t},logoutRequest:function(){this.$root.$store.commit("ds/setAuth",!1)},showStarMap:function(){this.starMap=!0}}},T=I,B=(e("6f8f"),Object(u["a"])(T,p,m,!1,null,"42492c72",null)),N=B.exports,Q={name:"MyLayout",components:{PageIndex:N,Register:f,Login:o["default"]},data:function(){return{leftDrawerOpen:!1}},computed:{view:function(){return this.$root.$store.state.ds.view},auth:function(){return this.$root.$store.state.ds.auth}}},L=Q,O=Object(u["a"])(L,s,n,!1,null,null,null);a["default"]=O.exports},f40f:function(t,a,e){}},[[0,"runtime","vendor"]]]);