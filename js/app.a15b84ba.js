(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[0],{0:function(t,e,a){t.exports=a("2f39")},"0047":function(t,e,a){},"013f":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{ref:"pageHolder",staticClass:"flex flex-center"},[a("canvas",{staticClass:"back_canvas",attrs:{id:"bg-canvas"}}),a("div",{staticStyle:{"text-align":"center"}},[a("h3",{staticClass:"h-title",staticStyle:{"font-size":"3.77rem"}},[t._v("DEEP")]),a("h3",{staticClass:"h-title",staticStyle:{"font-size":"3.1rem"}},[t._v("SPACE")]),a("h5",{staticClass:"h-title"},[t._v("adventures")]),a("div",{staticClass:"v-block"},[t._v("v."+t._s(t.project_version))]),a("div",{staticClass:"row",staticStyle:{"max-width":"500px",margin:"auto"}},[a("div",{staticClass:"col-xs-12 col-sm-6",staticStyle:{padding:".5em"}},[a("q-input",{attrs:{outlined:"",placeholder:"username",dense:""},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("i",{staticClass:"far fa-user q-icon"})]},proxy:!0}]),model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1),a("div",{staticClass:"col-xs-12 col-sm-6",staticStyle:{padding:".5em"}},[a("q-input",{attrs:{outlined:"",type:t.isPwd?"password":"text",placeholder:"password",dense:""},on:{keypress:t.checkEnter},scopedSlots:t._u([{key:"prepend",fn:function(){return[a("i",{staticClass:"fas fa-unlock-alt q-icon"})]},proxy:!0},{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:t.isPwd?"far fa-eye":"far fa-eye-slash"},on:{click:function(e){t.isPwd=!t.isPwd}}})]},proxy:!0}]),model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),a("div",{staticClass:"col-xs-6"},[a("q-btn",{attrs:{flat:"",color:"secondary",label:"Register"},on:{click:function(e){return t.doRegister()}}})],1),a("div",{staticClass:"col-xs-6"},[a("q-btn",{attrs:{color:"primary",label:"Login"},on:{click:function(e){return t.doLogin()}}})],1),a("div",{staticClass:"col-xs-12"},[a("b",[t._v("– OR –")])]),a("div",{staticClass:"col-xs-12"},[a("div",{staticClass:"q-pa-md q-gutter-sm"},[a("q-btn",{attrs:{round:"",color:"blue",glossy:"",disable:""}},[a("i",{staticClass:"fab fa-facebook-f q-icon"})]),a("q-btn",{attrs:{round:"",color:"red",glossy:"",disable:""}},[a("i",{staticClass:"fab fa-google q-icon"})]),a("q-btn",{attrs:{round:"",color:"amber",glossy:"",disable:""}},[a("i",{staticClass:"fab fa-app-store-ios q-icon"})]),a("q-btn",{attrs:{round:"",color:"deep-orange",glossy:"",disable:""}},[a("i",{staticClass:"fab fa-google-play q-icon"})])],1)])])])])},n=[],o=(a("6c7b"),a("9224")),i={name:"Login",data:function(){return{username:"",password:"",isPwd:!0,canvas:null,context:null,stars:[],midx:0,midy:0,project_version:o["a"]}},mounted:function(){window.addEventListener("resize",this.onResize),window.requestAnimationFrame(this.animate),this.onResize()},methods:{checkEnter:function(t){"Enter"===t.code&&this.doLogin()},doLogin:function(){var t=this;this.$root.$tools.game.login(this.username,this.password,(function(e){e&&e.error?t.$q.notify({message:"Can't log in",caption:e.error.DETAILS,icon:"warning",color:"negative"}):t.$root.$store.commit("ds/setAuth",!0)}))},doRegister:function(){this.$root.$store.commit("ds/setView","register")},onResize:function(){this.canvas=document.getElementById("bg-canvas"),this.canvas&&(this.canvas.width=this.canvas.clientWidth,this.canvas.height=this.canvas.clientHeight,this.context=this.canvas.getContext("2d"),this.midx=this.canvas.width/2,this.midy=this.canvas.height/2,this.stars=[])},animate:function(){if(this.canvas){if(this.stars.length<300&&Math.random()>.1){var t={x:0,y:0,vx:6*Math.random()-3,vy:6*Math.random()-3};this.stars.push(t)}this.context.clearRect(0,0,this.canvas.width,this.canvas.height);for(var e=0;e<this.stars.length;e++){this.stars[e].x=this.stars[e].x+this.stars[e].vx,this.stars[e].y=this.stars[e].y+this.stars[e].vy,(this.stars[e].x>this.midx||this.stars[e].x<-this.midx)&&(this.stars[e].x=0,this.stars[e].y=0);var a=Math.floor(Math.abs(this.stars[e].x)+Math.abs(this.stars[e].y));this.context.fillStyle="rgb("+a+","+a+","+a+")",this.context.beginPath(),this.context.arc(this.midx+this.stars[e].x,this.midy+this.stars[e].y,Math.abs(2*this.stars[e].y/this.midy+e/150),0,2*Math.PI),this.context.fill()}window.requestAnimationFrame(this.animate)}}}},r=i,c=(a("0aa3"),a("2877")),l=Object(c["a"])(r,s,n,!1,null,"ae16990e",null);e["default"]=l.exports},"0aa3":function(t,e,a){"use strict";var s=a("ce9f"),n=a.n(s);n.a},"0c0d":function(t,e,a){},"0ec8":function(t,e,a){"use strict";var s=a("f92b"),n=a.n(s);n.a},1:function(t,e){},1051:function(t,e,a){},"153e":function(t,e,a){},"16d0":function(t,e,a){"use strict";var s=a("153e"),n=a.n(s);n.a},"17c9":function(t,e,a){"use strict";var s=a("be7e"),n=a.n(s);n.a},"2a24":function(t,e,a){"use strict";var s=a("b737"),n=a.n(s);n.a},"2f39":function(t,e,a){"use strict";a.r(e);var s={};a.r(s),a.d(s,"someGetter",(function(){return et}));var n={};a.r(n),a.d(n,"setAuth",(function(){return at})),a.d(n,"setView",(function(){return st}));var o={};a.r(o),a.d(o,"someAction",(function(){return nt}));var i=a("967e"),r=a.n(i),c=(a("a481"),a("96cf"),a("fa84")),l=a.n(c),u=(a("7d6e"),a("573e"),a("e54f"),a("985d"),a("0047"),a("2b0e")),d=a("1f91"),f=a("42d2"),h=a("b05d"),p=a("cb32"),m=a("58a8"),v=a("d847"),g=a("ead5"),b=a("079e"),x=a("9c40"),y=a("f09f"),w=a("4b7e"),k=a("a370"),q=a("24e8"),C=a("9404"),S=a("e359"),M=a("0016"),_=a("27f9"),A=a("66e5"),E=a("0170"),$=a("4074"),P=a("4d5a"),I=a("1c1c"),T=a("9989"),z=a("09e3"),B=a("7cbe"),R=a("3786"),N=a("3980"),D=a("2c91"),O=a("65c6"),Q=a("6ac5"),L=a("05c0"),j=a("714f"),G=a("7f67"),F=a("2a19");u["a"].use(h["a"],{config:{},lang:d["a"],iconSet:f["a"],components:{QAvatar:p["a"],QBadge:m["a"],QBar:v["a"],QBreadcrumbs:g["a"],QBreadcrumbsEl:b["a"],QBtn:x["a"],QCard:y["a"],QCardActions:w["a"],QCardSection:k["a"],QDialog:q["a"],QDrawer:C["a"],QHeader:S["a"],QIcon:M["a"],QInput:_["a"],QItem:A["a"],QItemLabel:E["a"],QItemSection:$["a"],QLayout:P["a"],QList:I["a"],QPage:T["a"],QPageContainer:z["a"],QPopupProxy:B["a"],QRadio:R["a"],QResizeObserver:N["a"],QSpace:D["a"],QToolbar:O["a"],QToolbarTitle:Q["a"],QTooltip:L["a"]},directives:{Ripple:j["a"],ClosePopup:G["a"]},plugins:{Notify:F["a"]}});var V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"q-app"}},[a("MyLayout")],1)},U=[],H=a("f241"),K={name:"App",components:{MyLayout:H["default"]},created:function(){this.$q.dark.set(!0),this.$root.$tools.game.store=this.$root.$store}},Z=K,J=a("2877"),W=Object(J["a"])(Z,V,U,!1,null,null,null),X=W.exports,Y=a("2f62"),tt=function(){return{auth:!1,view:""}};function et(){}function at(t,e){e||window.localStorage.setItem("dsdat",null),t.auth=e}function st(t,e){t.view=e}function nt(){}var ot={namespaced:!0,getters:s,mutations:n,actions:o,state:tt};u["a"].use(Y["a"]);var it=function(){var t=new Y["a"].Store({modules:{ds:ot},strict:!1});return t},rt=a("8c4f"),ct=[{path:"/",component:function(){return Promise.resolve().then(a.bind(null,"f241"))},children:[{path:"",name:"default",component:function(){return Promise.resolve().then(a.bind(null,"013f"))}}]}];ct.push({path:"*",component:function(){return a.e(3).then(a.bind(null,"e51e"))}});var lt=ct;u["a"].use(rt["a"]);var ut=function(){var t=new rt["a"]({scrollBehavior:function(){return{x:0,y:0}},routes:lt,mode:"hash",base:""});return t},dt=function(){return ft.apply(this,arguments)};function ft(){return ft=l()(r.a.mark((function t(){var e,a,s;return r.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("function"!==typeof it){t.next=6;break}return t.next=3,it({Vue:u["a"]});case 3:t.t0=t.sent,t.next=7;break;case 6:t.t0=it;case 7:if(e=t.t0,"function"!==typeof ut){t.next=14;break}return t.next=11,ut({Vue:u["a"],store:e});case 11:t.t1=t.sent,t.next=15;break;case 14:t.t1=ut;case 15:return a=t.t1,e.$router=a,s={el:"#q-app",router:a,store:e,render:function(t){return t(X)}},t.abrupt("return",{app:s,store:e,router:a});case 19:case"end":return t.stop()}}),t)}))),ft.apply(this,arguments)}var ht=a("a925"),pt={failed:"Action failed",success:"Action was successful"},mt={"en-us":pt};u["a"].use(ht["a"]);var vt=new ht["a"]({locale:"en-us",fallbackLocale:"en-us",messages:mt}),gt=function(t){var e=t.app;e.i18n=vt},bt=a("bc3a"),xt=a.n(bt);u["a"].prototype.$axios=xt.a;a("28a5");var yt="X388316E3fNi",wt="Nf6w3hFfo9xafl9Y79Aby6xBZFUn97LU";function kt(t){return window.CryptoJS.enc.Base64.stringify(window.CryptoJS.HmacSHA256(t,wt))}function qt(){}var Ct={store:null,gs:window.gamesparks,onInit:function(){},onMessage:function(t){qt("GM-Message",t,Ct),".AuthenticatedConnectResponse"===t["@class"]&&void 0!==t["userId"]&&null!=Ct.store&&Ct.store.commit("ds/setAuth",!0)},onError:function(t){this.gs.log("GM-Message",t,this),this.isAuthenticated&&(this.isAuthenticated=!1)},saveAuthToken:function(){var t=window.gamesparks.getAuthToken(),e=window.gamesparks.getSessionId();window.localStorage.setItem("dsdat",t+"::"+e)},login:function(t,e,a){Ct.gs.authenticationRequest(e,t,(function(t){t&&void 0===t.error&&Ct.saveAuthToken(),a&&a(t)}))},register:function(t,e,a,s){Ct.gs.registrationRequest(a,e,t,(function(t){t&&void 0!==t["userId"]&&void 0!==t["authToken"]&&!0===t["newPlayer"]&&(Ct.gs.setAuthToken(t["authToken"]),Ct.saveAuthToken()),s&&s(t)}))},eventRequest:function(t,e,a){e["eventKey"]=t,Ct.gs.sendWithData("LogEventRequest",e,a)}};function St(){var t=window.localStorage.getItem("dsdat");if(null!=t){var e=t.split("::");window.gamesparks.setAuthToken(e[0]),window.gamesparks.sessionId=e[1]}return Ct.gs=window.gamesparks,window.gamesparks.initPreview({key:yt,secret:wt,onNonce:kt,onInit:Ct.onInit,onMessage:Ct.onMessage,onError:Ct.onError,logger:qt}),Ct}a("e956"),a("6c7b"),a("1c4c"),a("ac6a"),a("cadf"),a("06db"),a("5df3"),a("4f7f"),a("7f7f");var Mt=a("fc74"),_t=a.n(Mt),At=a("59a1"),Et=a.n(At),$t=a("c47a"),Pt=a.n($t),It=a("6125"),Tt=a.n(It),zt=function(){function t(e,a){var s=this;_t()(this,t),this.rng=Tt()(e),this.sectors=[],this.radiusStep=20;for(var n=5*Math.PI/180,o=0,i=0,r=0,c=0,l=1,u=0,d=0,f=Math.PI/2,h=Math.PI/3,p=0;p<a;p++){var m="sector."+32768*this.rng(),v=new Bt(m,250,1e3,1e3);if(v.name=t.makeName(this.rng),0===p)v.x=0,v.y=0;else{var g=this.rng()*this.radiusStep*.24+.75*this.radiusStep+d;v.x=Math.round(Math.sin(f)*g),v.y=Math.round(Math.cos(f)*g),f=f+.85*h+this.rng()*h*.3,u+=1,u>=6*l&&(u=0,l+=1,d+=this.radiusStep,f=Math.PI/2-n+2*this.rng()*n,h=Math.PI/(3*l))}v.g=new Set([]),this.sectors.push(v),v.x>i&&(i=v.x),v.x<o&&(o=v.x),v.y>c&&(c=v.y),v.y<r&&(r=v.y)}this.sectors.forEach((function(e,a){var n=s.sectors.map((function(a,s){return{d:t.distance(e.x,e.y,a.x,a.y),i:s}})).filter((function(t,e){return a!==e&&t.d<=1.27*s.radiusStep})).sort((function(t,e){return t.d>e.d?1:-1})),o=Math.round(4*s.rng())+2,i=0;while(e.g.size<o&&i<n.length)e.g.add(n[i].i),s.sectors[n[i].i].g.add(a),i+=1}));var b=1.1*(i-o),x=c-r,y=900/Math.max(b,x),w=(1e3-x*y)/2;this.sectors.forEach((function(t){t.x=Math.round((t.x-o)*y+50),t.y=Math.round((t.y-r)*y+w)})),this.radiusStep=this.radiusStep*y,this.width=i-o,this.height=c-r}return Et()(t,null,[{key:"makeName",value:function(t){t||(t=Math.random);for(var e="ABOUSEITILETSTONLONUTHNOALLEXEGEZACEBISOUSESARMAINDIREA?ERATENBERALAVETIEDORQUANTEISRION",a="",s=0,n=t()<.15?2:t()<.5?3:4,o=0;o<n;o++)s=2*Math.floor(43*t()),a+=e[s],"?"!==e[s+1]&&(a+=e[s+1]);return a.charAt(0)+a.slice(1).toLowerCase()}}]),Et()(t,[{key:"copyToScreen",value:function(t,e){var a=t.canvas.width,s=t.canvas.height,n=Math.min(a,s),o=Math.round((s-n)/2),i=Math.round((a-n)/2);t.drawImage(e,i,o,n,n)}},{key:"getCanvas",value:function(t){var e=document.createElement("canvas"),a=Math.max(1e3,Math.max(t.width,t.height));return e.width=a,e.height=a,e.ctx=e.getContext("2d",{alpha:!1}),e.scale=a/1e3,e}},{key:"draw",value:function(e){var a=this,s=this.getCanvas(e.canvas);s.ctx.strokeStyle=t.jumpColor,s.ctx.beginPath(),this.sectors.forEach((function(t){var e=Array.from(t.g);e.forEach((function(e){var n=a.sectors[e];s.ctx.moveTo(Math.round(t.x*s.scale),Math.round(t.y*s.scale)),s.ctx.lineTo(Math.round(n.x*s.scale),Math.round(n.y*s.scale))}))})),s.ctx.stroke(),s.ctx.fillStyle=t.starColors.K[0],this.sectors.forEach((function(t){s.ctx.beginPath(),s.ctx.arc(Math.round(Math.round(t.x*s.scale)),Math.round(Math.round(t.y*s.scale)),Math.round(Math.round(10*s.scale)),0,2*Math.PI),s.ctx.fill()})),s.ctx.font="20px BankGothic",s.ctx.fillStyle=t.starColors.A[0],this.sectors.forEach((function(t){s.ctx.fillText(t.name,Math.round(t.x*s.scale)+15,Math.round(t.y*s.scale)+10)})),this.copyToScreen(e,s)}},{key:"drawRegion",value:function(e,a,s){var n=this.getCanvas(e.canvas),o=this.sectors[a].stars;n.ctx.beginPath(),n.ctx.strokeStyle=t.jumpColor,o.forEach((function(t,e){t.g.forEach((function(a){if(a>e){var s=o[a];n.ctx.moveTo(Math.round(t.x*n.scale),Math.round(t.y*n.scale)),n.ctx.lineTo(Math.round(s.x*n.scale),Math.round(s.y*n.scale))}}))})),n.ctx.stroke(),o.forEach((function(t){n.ctx.fillStyle=t.color(),n.ctx.beginPath(),n.ctx.arc(Math.round(t.x*n.scale),Math.round(t.y*n.scale),Math.round(3*n.scale),0,2*Math.PI),n.ctx.fill()})),s&&(n.ctx.font="20px BankGothic",n.ctx.fillStyle=t.starColors.A[0],n.ctx.textAlign="center",o.forEach((function(t){n.ctx.fillText(t.n,Math.round(t.x*n.scale),Math.round((t.y+4)*n.scale)+10)}))),this.copyToScreen(e,n)}},{key:"drawStar",value:function(){return!0}},{key:"clickMap",value:function(e,a){var s=Math.max(e.width,e.height),n=s/1e3,o=this.radiusStep*n*.4,i=this.sectors.map((function(e,s){return{d:t.distance(e.x*n,e.y*n,a.offsetX,a.offsetY),i:s}})).sort((function(t,e){return t.d>e.d?1:-1}));return i.length>0&&i[0].d<=o?i[0].i:-1}},{key:"clickRegion",value:function(t,e){console.log(t,e)}},{key:"clickStar",value:function(t,e){console.log(t,e)}}],[{key:"distance",value:function(t,e,a,s){var n=t-a,o=e-s;return Math.sqrt(n*n+o*o)}}]),t}();Pt()(zt,"starColors",{M:["#ff6759","#822721"],K:["#ffa351","#ff6759"],G:["#fff6a8","#ffa351"],F:["#fafaff","#fff6a8"],A:["#9edeff","#fafaff"],B:["#00ffff","#9edeff"]}),Pt()(zt,"starMass",{M:[.3,.2],K:[.8,.3],G:[1.1,.8],F:[1.7,1.1],A:[3.1,1.7],B:[18,3.1]}),Pt()(zt,"starSize",{M:[.4,.2],K:[.9,.4],G:[1.1,.9],F:[1.3,1.1],A:[2.1,1.3],B:[7,2.1]}),Pt()(zt,"jumpColor","#57ffbc60"),Pt()(zt,"jumpColorA","#57ffbc");var Bt=function t(e,a,s,n){var o=this;_t()(this,t),this.rng=Tt()(e),this.rng||(this.rng=Math.random),this.rsize=a,this.width=s,this.height=n,this.stars=[];for(var i=0;i<this.rsize;i+=1){var r=Math.floor(this.rng()*this.width),c=Math.floor(this.rng()*this.height),l=Math.floor(268435455*this.rng());this.stars.push(new Rt(l,r,c))}for(var u=function(t){var e=o.stars[t],a=o.stars.map((function(t,a){return{d:zt.distance(e.x,e.y,t.x,t.y),i:a}})).sort((function(t,e){return t.d>e.d?1:-1})).slice(1),s=4*o.rng()+2-e.g.length,n=10*o.rng();n=n<5?0:n<8?2:4;for(var i=n,r=0;s>0;i++,r++)(i===a.length&&0===n||i===n-1)&&(s=0),i%=a.length,s>0&&o.stars[a[i].i].g.length<5&&(o.stars[t].addGate(a[i].i),o.stars[a[i].i].addGate(t),s--,r++)},d=0;d<this.rsize;d++)u(d);this.stars.forEach((function(t){var e=t.g.flatMap((function(e){return t.g.map((function(t){return[e,t]}))})).filter((function(t){return t[0]!==t[1]}));e.forEach((function(e){var a=o.stars[e[0]],s=o.stars[e[1]];if(a.g.length>2&&s.g.length>2&&a.g.indexOf(e[1])>-1){var n=zt.distance(t.x,t.y,a.x,a.y),i=zt.distance(t.x,t.y,s.x,s.y),r=zt.distance(a.x,a.y,s.x,s.y);r<n&&r<i&&(o.stars[e[0]].delGate(e[1]),o.stars[e[1]].delGate(e[0]))}}))}))},Rt=function(){function t(e,a,s){_t()(this,t),this.i=e,this.x=a,this.y=s,this.rng=Tt()(e),this.n=zt.makeName(this.rng),this.g=[];var n=this.rng();if(n<=.7){var o=this.rng();this.c=o<.384?"dM":o<.445?"dK":o<.661?"dG":o<.801?"dF":o<.927?"dA":"dB"}else if(n<=.9){var i=this.rng();this.c=i<.039?"gM":i<.468?"gK":i<.719?"gG":"gF"}else{var r=this.rng();this.c=r<.057?"wK":r<.132?"wG":r<.223?"wF":r<.682?"wA":"wB"}this.s=this.rng()}return Et()(t,[{key:"color",value:function(){return zt.starColors[this.c[1]][0]}},{key:"mass",value:function(){var t=zt.starMass[this.c[1]],e="g"===this.c[0]?2:1;return e*(this.s*(t[0]-t[1])+t[1])}},{key:"radius",value:function(){var t=zt.starSize[this.c[1]],e="g"===this.c[0]?10:"w"===this.c[0]?.01:1;return e*(this.s*(t[0]-t[1])+t[1])}},{key:"addGate",value:function(t){var e=new Set(this.g);e.add(t),this.g=Array.from(e).sort((function(t,e){return t>e?1:-1}))}},{key:"delGate",value:function(t){var e=new Set(this.g);e.delete(t),this.g=Array.from(e).sort((function(t,e){return t>e?1:-1}))}}]),t}();function Nt(){return Dt.apply(this,arguments)}function Dt(){return Dt=l()(r.a.mark((function t(){var e,a,s,n,o,i,c,l,d;return r.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,dt();case 2:e=t.sent,a=e.app,s=e.store,n=e.router,o=!0,i=function(t){o=!1,window.location.href=t},c=window.location.href.replace(window.location.origin,""),l=[gt,void 0,void 0],d=0;case 11:if(!(!0===o&&d<l.length)){t.next=29;break}if("function"===typeof l[d]){t.next=14;break}return t.abrupt("continue",26);case 14:return t.prev=14,t.next=17,l[d]({app:a,router:n,store:s,Vue:u["a"],ssrContext:null,redirect:i,urlPath:c});case 17:t.next=26;break;case 19:if(t.prev=19,t.t0=t["catch"](14),!t.t0||!t.t0.url){t.next=24;break}return window.location.href=t.t0.url,t.abrupt("return");case 24:return console.error("[Quasar] boot error:",t.t0),t.abrupt("return");case 26:d++,t.next=11;break;case 29:if(!1!==o){t.next=31;break}return t.abrupt("return");case 31:new u["a"](a);case 32:case"end":return t.stop()}}),t,null,[[14,19]])}))),Dt.apply(this,arguments)}u["a"].prototype.$tools={makeName:function(){for(var t="ABOUSEITILETSTONLONUTHNOALLEXEGEZACEBISOUSESARMAINDIREA?ERATENBERALAVETIEDORQUANTEISRION",e="",a=0,s=Math.random()<.15?2:Math.random()<.5?3:4,n=0;n<s;n++)a=2*Math.floor(43*Math.random()),e+=t[a],"?"!==t[a+1]&&(e+=t[a+1]);return e.charAt(0)+e.slice(1).toLowerCase()},game:St(u["a"].prototype),dumpProps:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a="";return Object.getOwnPropertyNames(t).forEach((function(s){a+=s+": "+t[s],a+=e?"<br/>\n":",\n"})),a},starMap:new zt("NewEden",32)},Nt()},"43ae":function(t,e,a){"use strict";var s=a("86b3"),n=a.n(s);n.a},5417:function(t,e,a){"use strict";var s=a("0c0d"),n=a.n(s);n.a},"5d54":function(t,e,a){},"7f92":function(t,e,a){"use strict";var s=a("5d54"),n=a.n(s);n.a},"86b3":function(t,e,a){},9224:function(t){t.exports=JSON.parse('{"a":"0.0.3"}')},aa8e:function(t,e,a){"use strict";var s=a("fd91"),n=a.n(s);n.a},aea0:function(t,e,a){"use strict";var s=a("1051"),n=a.n(s);n.a},b737:function(t,e,a){},be7e:function(t,e,a){},ce9f:function(t,e,a){},d3d6:function(t,e,a){t.exports=a.p+"img/quasar-logo-full.c3e88651.svg"},f241:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{staticStyle:{overflow:"hidden"}},[a("q-page-container",[t.auth||""!==t.view?t._e():a("Login"),t.auth||"register"!==t.view?t._e():a("Register"),t.auth&&""===t.view?a("PageIndex"):t._e()],1)],1)},n=[],o=a("013f"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",{staticClass:"flex flex-center back"},[s("q-dialog",{model:{value:t.open,callback:function(e){t.open=e},expression:"open"}},[s("q-card",{staticClass:"reg-dlg"},[s("q-toolbar",{staticClass:"reg-dlg-title"},[s("q-avatar",[s("img",{attrs:{src:a("d3d6"),alt:"Quasar Logo"}})]),s("q-toolbar-title",[s("span",{staticClass:"text-weight-bold"},[t._v("Register new player")])]),s("q-btn",{attrs:{flat:"",round:"",dense:"",icon:"close"},on:{click:function(e){return t.cancelRegs()}}})],1),s("q-card-section",[s("div",{staticClass:"row"},[s("div",{staticClass:"col-xs-12",staticStyle:{padding:".5em"}},[s("q-input",{attrs:{outlined:"",placeholder:"username",dense:"",rules:[function(){return!0}]},scopedSlots:t._u([{key:"prepend",fn:function(){return[s("i",{staticClass:"far fa-user q-icon"})]},proxy:!0}]),model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1),s("div",{staticClass:"col-xs-12",staticStyle:{padding:".5em"}},[s("q-input",{attrs:{outlined:"",type:t.isPwd?"password":"text",placeholder:"password","error-message":"Passwords are not match",error:!t.samePass,dense:""},scopedSlots:t._u([{key:"prepend",fn:function(){return[s("i",{staticClass:"fas fa-unlock-alt q-icon"})]},proxy:!0},{key:"append",fn:function(){return[s("q-icon",{staticClass:"cursor-pointer",attrs:{name:t.isPwd?"far fa-eye":"far fa-eye-slash"},on:{click:function(e){t.isPwd=!t.isPwd}}})]},proxy:!0}]),model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),s("div",{staticClass:"col-xs-12",staticStyle:{padding:".5em"}},[s("q-input",{attrs:{outlined:"",type:t.isPwd?"password":"text",placeholder:"repeat password","error-message":"Passwords are not match",error:!t.samePass,dense:""},scopedSlots:t._u([{key:"prepend",fn:function(){return[s("i",{staticClass:"fas fa-unlock-alt q-icon"})]},proxy:!0},{key:"append",fn:function(){return[s("q-icon",{staticClass:"cursor-pointer",attrs:{name:t.isPwd?"far fa-eye":"far fa-eye-slash"},on:{click:function(e){t.isPwd=!t.isPwd}}})]},proxy:!0}]),model:{value:t.password2,callback:function(e){t.password2=e},expression:"password2"}})],1),s("div",{staticClass:"col-xs-12",staticStyle:{padding:".5em"}},[s("q-input",{attrs:{outlined:"",placeholder:"display name",dense:"","bottom-slots":""},scopedSlots:t._u([{key:"prepend",fn:function(){return[s("i",{staticClass:"fas fa-user-astronaut"})]},proxy:!0},{key:"append",fn:function(){return[s("q-btn",{attrs:{icon:"fas fa-cogs",round:"",dense:""},on:{click:function(e){return t.makeName()}}})]},proxy:!0}]),model:{value:t.displayName,callback:function(e){t.displayName=e},expression:"displayName"}})],1),s("div",{staticClass:"col-xs-12",staticStyle:{padding:".5em"}},[s("q-input",{attrs:{outlined:"",placeholder:"e-mail",dense:"",rules:[function(){return!0}]},scopedSlots:t._u([{key:"prepend",fn:function(){return[s("i",{staticClass:"far fa-envelope q-icon"})]},proxy:!0}]),model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),s("div",{staticClass:"col-xs-12",staticStyle:{padding:".5em","text-align":"center"}},[s("q-avatar",{attrs:{size:"150px"}},[s("img",{attrs:{src:t.avatarImg,alt:"Avatar"},on:{click:function(e){return t.makeAvatar()}}})])],1),s("div",{staticClass:"col-xs-12",staticStyle:{padding:".5em","text-align":"center"}},[s("q-btn",{attrs:{color:"primary",label:"Register"},on:{click:function(e){return t.doRegister()}}})],1)])])],1)],1)],1)},r=[],c=(a("a481"),{name:"Register",data:function(){return{open:!0,username:"",password:"",password2:"",displayName:"",dnValid:!0,email:"",isPwd:!0,avatarImg:""}},mounted:function(){this.makeName()},computed:{samePass:function(){return this.password===this.password2}},methods:{cancelRegs:function(){this.$root.$store.commit("ds/setView","")},makeName:function(){this.displayName=this.$root.$tools.makeName()+" "+this.$root.$tools.makeName(),this.makeAvatar()},makeAvatar:function(){var t=(new Date).getTime(),e=this.displayName.replace(" ",".");this.avatarImg="https://i.pravatar.cc/150?u="+encodeURI(e+"."+t+"@ds.net")},doRegister:function(){var t=this;this.$root.$tools.game.register(this.username,this.password,this.displayName,(function(e){if(e&&e.newPlayer)t.$root.$tools.game.eventRequest("STORE_USETS",{settings:{email:t.email,avatar:t.avatarImg}},(function(){t.$root.$store.commit("ds/setAuth",!0),t.$root.$store.commit("ds/setView","")}));else{var a=e&&e.error?t.$root.$tools.dumpProps(e.error):"Unknown Error";t.$q.notify({message:"Can't register",caption:a,icon:"warning",color:"negative"})}}))}}}),l=c,u=(a("7f92"),a("2877")),d=Object(u["a"])(l,i,r,!1,null,"882b73ae",null),f=d.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("HorizTools",{attrs:{top:""}},[a("q-btn",{attrs:{round:""}},[a("q-avatar",[a("img",{attrs:{alt:"avatar",src:t.avatar}})]),a("q-popup-proxy",{attrs:{"auto-close":"",breakpoint:300}},[a("div",{staticStyle:{"font-family":"BankGothic"}},[t._v(t._s(t.userName))]),a("div",{staticClass:"fit row inline wrap",staticStyle:{"max-width":"300px"}},[a("FixBtn",{attrs:{icon:"fa fas fa-chart-line",label:"Market"}}),a("FixBtn",{attrs:{icon:"fa fas fa-dna",label:"Skills"}}),a("FixBtn",{attrs:{icon:"fa fas fa-map",label:"StarMap"},on:{click:function(e){t.starMap=!0}}}),a("FixBtn",{attrs:{icon:"fa fas fa-mobile-alt",label:"Comm"}}),a("FixBtn",{attrs:{icon:"settings",label:"Settings",double:""},on:{click:function(e){t.settingsDlg=!0}}}),a("FixBtn",{attrs:{icon:"fa fas fa-box-open",label:"Inventory",double:""}}),a("FixBtn",{attrs:{icon:"fa fas fa-door-open",label:"LogOut"},on:{click:function(e){return t.logoutRequest()}}})],1)])],1),a("q-btn",{staticClass:"q-ml-lg",attrs:{round:"",flat:"",icon:"fas fa-user-astronaut",color:t.autopilot?"accent":"default"},on:{click:function(e){t.autopilot=!t.autopilot}}},[a("q-tooltip",[t._v("Autopilot")])],1),a("div",{staticClass:"col-grow flex flex-center service"},[a("q-space"),a("q-badge",{staticClass:"q-mr-md",attrs:{outline:"",color:"grey-6"},on:{click:function(e){t.aboutDlg=!0}}},[t._v("\n        "+t._s(t.project_version)+"\n        "),a("q-tooltip",[t._v(t._s(t.buildTag()))])],1)],1)],1),"station"===t.view?a("StationView",{on:{undock:function(e){t.view="space"}}}):t._e(),"space"===t.view?a("SpaceView",{on:{dock:function(e){t.view="station"}}}):t._e(),a("StarMap",{attrs:{dialog:t.starMap},on:{close:function(e){t.starMap=!1}}}),a("SettingsDlg",{attrs:{dialog:t.settingsDlg},on:{close:function(e){t.settingsDlg=!1}}}),a("AboutDlg",{attrs:{dialog:t.aboutDlg},on:{close:function(e){t.aboutDlg=!1}}})],1)},p=[],m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.posClass,style:t.posStyle},[t._t("default")],2)},v=[],g={name:"HorizTools",props:{top:Boolean,bottom:Boolean},computed:{posStyle:function(){if(this.top&&this.bottom)throw"Both 'top' and 'bottom' are given";return this.bottom?"bottom: 0;":"top: 0;"},posClass:function(){if(this.top&&this.bottom)throw"Both 'top' and 'bottom' are given";return this.bottom?"row glossy-bottom horiz-toolbox":"row glossy-top horiz-toolbox"}}},b=g,x=(a("43ae"),Object(u["a"])(b,m,v,!1,null,"7090919e",null)),y=x.exports,w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-btn",{class:t.makeClass,attrs:{icon:t.icon,label:t.label,"text-color":"secondary",stack:"",glossy:"",dense:""},on:{click:t.doClick}})},k=[],q={name:"FixBtn",props:{icon:String,label:String,double:{type:Boolean,default:!1}},computed:{makeClass:function(){return this.double?"col-8 fix-btn-d":"col-4 fix-btn"}},methods:{doClick:function(){this.$emit("click")}}},C=q,S=(a("0ec8"),Object(u["a"])(C,w,k,!1,null,"f9514594",null)),M=S.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-dialog",{attrs:{maximized:t.maximized,"full-height":"","full-width":"",persistent:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("q-card",[a("q-bar",[a("q-icon",{staticClass:"q-px-md",attrs:{name:"menu"}}),a("span",{staticStyle:{"font-family":"SpaceAge"}},[t._v("Star Map")]),a("q-space"),a("q-btn",{attrs:{flat:"",icon:"fas fa-map-marker-alt"},on:{click:t.resetPos}},[a("q-tooltip",[t._v("Current Position")])],1),a("q-btn",{attrs:{flat:"",icon:"close"},on:{click:function(e){return t.$emit("close")}}},[a("q-tooltip",[t._v("Close")])],1)],1),a("q-bar",[a("div",{staticClass:"col col-grow"},[a("q-breadcrumbs",[t.mode>=0?a("q-breadcrumbs-el",{staticClass:"bcr",attrs:{label:"SPACE"},on:{click:function(e){t.mode=0}}}):t._e(),t.mode>=1?a("q-breadcrumbs-el",{staticClass:"bcr",attrs:{label:t.clusterName},on:{click:function(e){t.mode=1}}}):t._e(),t.mode>=2?a("q-breadcrumbs-el",{staticClass:"bcr",attrs:{label:"STAR 0"}}):t._e(),a("q-space")],1)],1),a("div",{staticClass:"col col-shrink"},[a("q-btn",{attrs:{flat:"",icon:"fas fa-search-minus"},on:{click:t.zoomOut}},[a("q-tooltip",[t._v("Zoom Out")])],1),a("q-btn",{attrs:{flat:"",icon:"fas fa-search-plus"},on:{click:t.zoomIn}},[a("q-tooltip",[t._v("Zoom In")])],1)],1)]),a("div",{staticClass:"flex flex-center mapper"},[a("div",{staticClass:"map-container",attrs:{id:"star-map-container"}},[a("canvas",{key:t.mode,staticClass:"map-canvas",attrs:{id:"star-map-canvas"},on:{click:t.mapClick}}),a("q-resize-observer",{on:{resize:t.drawMap}})],1)])],1)],1)},A=[],E=(a("7f7f"),{name:"StarMap",data:function(){return{maximized:!0,mode:1,cluster:0,zoom:100}},props:{dialog:Boolean},watch:{mode:function(){var t=this;this.zoom=100,setTimeout((function(){t.drawMap()}),1)},cluster:function(){this.zoom=100,this.drawMap()},dialog:function(t){t&&(this.zoom=100,setTimeout(this.drawMap,1))}},mounted:function(){this.maximized=window.innerWidth<=760},computed:{clusterName:function(){return this.$root.$tools.starMap.sectors[this.cluster].name}},methods:{resetPos:function(){this.mode=1,this.cluster=0},zoomIn:function(){this.zoom=Math.round(1.1*this.zoom),this.drawMap()},zoomOut:function(){var t=Math.round(.9090909*this.zoom);t<100&&(t=100),this.zoom=t,this.drawMap()},drawMap:function(){var t=document.getElementById("star-map-container");if(t){var e=document.getElementById("star-map-canvas"),a=Math.min(t.parentElement.clientWidth,t.parentElement.clientHeight)-16;if(t.style.width="".concat(a,"px"),t.style.height="".concat(a,"px"),e){e.width=Math.round(a*this.zoom/100),e.height=Math.round(a*this.zoom/100);var s=e.getContext("2d",{alpha:!1});0===this.mode?this.$root.$tools.starMap.draw(s,this.zoom):1===this.mode?this.$root.$tools.starMap.drawRegion(s,this.cluster,this.zoom>=300):this.$root.$tools.starMap.drawStar(s,this.cluster,0)}}},mapClick:function(t){var e=document.getElementById("star-map-canvas");if(e)if(0===this.mode){var a=this.$root.$tools.starMap.clickMap(e,t);a>-1&&(this.cluster=a,this.mode=1)}else 1===this.mode?this.$root.$tools.starMap.clickRegion(e,t):this.$root.$tools.starMap.clickStar(e,t)}}}),$=E,P=(a("5417"),Object(u["a"])($,_,A,!1,null,"ff19c062",null)),I=P.exports,T=a("9224"),z=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("VertTools",{attrs:{left:"",noback:""}},[s("q-btn",{attrs:{round:"",flat:"",icon:"fas fa-sign-out-alt"},on:{click:function(e){return t.$emit("undock")}}},[s("q-tooltip",[t._v("Undock from station")])],1)],1),s("q-page",{staticClass:"flex flex-center"},[s("img",{attrs:{alt:"Quasar logo",src:a("d3d6")}})])],1)},B=[],R=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:t.posClass,style:t.posStyle},[t._t("default")],2)},N=[],D={name:"VertTools",props:{left:Boolean,right:Boolean,noback:Boolean},computed:{posStyle:function(){if(this.left&&this.right)throw"Both 'left' and 'right' are given";return this.right?"right: 0;":"left: 0;"},posClass:function(){if(this.left&&this.right)throw"Both 'left' and 'right' are given";var t="vertical-toolbox";return this.noback||(t+=this.right?" glossy-right":" glossy-left"),t}}},O=D,Q=(a("17c9"),Object(u["a"])(O,R,N,!1,null,"0837733f",null)),L=Q.exports,j={name:"StationView",components:{VertTools:L}},G=j,F=Object(u["a"])(G,z,B,!1,null,"daff571a",null),V=F.exports,U=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("q-page",{staticClass:"flex flex-center space-view"},[s("img",{attrs:{alt:"Quasar logo",src:a("d3d6")}})]),s("HorizTools",{attrs:{bottom:""}},[s("q-btn",{attrs:{round:"",flat:"",icon:"fas fa-sign-in-alt"},on:{click:function(e){return t.$emit("dock")}}},[s("q-tooltip",[t._v("Docking")])],1)],1)],1)},H=[],K={name:"SpaceView",components:{HorizTools:y}},Z=K,J=(a("16d0"),Object(u["a"])(Z,U,H,!1,null,"b17468ec",null)),W=J.exports,X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-dialog",{attrs:{maximized:t.maximized,persistent:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("q-card",{staticClass:"settings-dlg"},[a("q-bar",[a("q-icon",{staticClass:"q-px-md",attrs:{name:"menu"}}),a("span",{staticStyle:{"font-family":"SpaceAge"}},[t._v("Settings")]),a("q-space"),a("q-btn",{attrs:{flat:"",icon:"close"},on:{click:function(e){return t.$emit("close")}}},[a("q-tooltip",[t._v("Close")])],1)],1),a("q-card-section",[a("div",{staticClass:"q-pa-md"},[a("div",{staticClass:"text-h6"},[t._v("Graphics")]),a("q-list",[a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{tag:"label"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-radio",{attrs:{val:"2ds"},model:{value:t.render,callback:function(e){t.render=e},expression:"render"}})],1),a("q-item-section",[a("q-item-label",[t._v("2D Schemes")]),a("q-item-label",{attrs:{caption:""}},[t._v("\n                Fast graphics, suitable for mobiles\n              ")])],1)],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{tag:"label"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-radio",{attrs:{val:"3ds"},model:{value:t.render,callback:function(e){t.render=e},expression:"render"}})],1),a("q-item-section",[a("q-item-label",[t._v("3D Schemes")]),a("q-item-label",{attrs:{caption:""}},[t._v("\n                Still fast, but more reliable graphics.\n              ")])],1)],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{tag:"label"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-radio",{attrs:{val:"3dr"},model:{value:t.render,callback:function(e){t.render=e},expression:"render"}})],1),a("q-item-section",[a("q-item-label",[t._v("3D Rendering")]),a("q-item-label",{attrs:{caption:""}},[t._v("\n                Most realistic graphics mode. May be slow and not recommended for mobiles.\n              ")])],1)],1)],1),a("hr")],1)]),a("q-card-actions",[a("q-btn",{attrs:{flat:"",label:"About"},on:{click:function(e){t.aboutDlg=!0}}}),a("q-space"),a("q-btn",{attrs:{flat:"",label:"Cancel",color:"negative"},on:{click:function(e){return t.$emit("close")}}}),a("q-btn",{attrs:{flat:"",label:"Apply",color:"positive"},on:{click:function(e){return t.$emit("close")}}})],1)],1),a("AboutDlg",{attrs:{dialog:t.aboutDlg},on:{close:function(e){t.aboutDlg=!1}}})],1)},Y=[],tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-dialog",{attrs:{persistent:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("q-card",{staticClass:"about-card"},[a("q-bar",[a("q-icon",{staticClass:"q-px-md",attrs:{name:"menu"}}),a("span",{staticStyle:{"font-family":"SpaceAge"}},[t._v("About")]),a("q-space"),a("q-btn",{attrs:{flat:"",icon:"close"},on:{click:function(e){return t.$emit("close")}}},[a("q-tooltip",[t._v("Close")])],1)],1),a("q-card-section",{staticClass:"scroll",staticStyle:{"max-height":"30vh"}},[a("div",{staticClass:"about-block"},[a("h3",{staticClass:"h-title",staticStyle:{"font-size":"2.6rem"}},[t._v("DEEP")]),a("h3",{staticClass:"h-title",staticStyle:{"font-size":"2.17rem"}},[t._v("SPACE")]),a("h5",{staticClass:"h-title",staticStyle:{"font-size":"1.05rem"}},[t._v("adventures")]),a("div",{staticClass:"v-block"},[t._v("v."+t._s(t.project_version))]),a("div",{staticClass:"v-block"},[t._v('© 2020 Andrew "Stinger" Abramov')]),a("h5",{staticClass:"h-title",staticStyle:{background:"#4b4b4b"}},[t._v("Credits")])]),a("div",{staticClass:"t-block"}),a("h6",{staticClass:"c-title"},[t._v("Quasar Framework")]),a("div",{staticClass:"t-block"},[a("a",{attrs:{href:"https://quasar.dev/introduction-to-quasar",target:"_blank"}},[t._v("\n          https://quasar.dev/\n        ")]),a("p",[t._v("\n          Quasar is an MIT licensed open-source Vue.js based framework, which allows you as a web\n          developer to quickly create responsive++ websites/apps in many flavours.\n        ")]),a("p",[t._v("Quasar is used as base for the UI in this project.")])]),a("h6",{staticClass:"c-title"},[t._v("Cosmos-2")]),a("div",{staticClass:"t-block"},[a("p",[t._v("Alternity Universe-Guidebook, Version 2")]),a("p",[t._v("\n          © Mark Peoples, 2006. Permission granted to make and distribute electronic and paper\n          copies for personal use only. Permission granted to host this work on a website or\n          online archive. All other rights reserved.\n        ")]),a("p",[t._v("This work is used as base for Deep Space Universe.")])])]),a("q-card-actions",{attrs:{align:"center"}},[a("q-btn",{attrs:{label:"Ok",color:"positive"},on:{click:function(e){return t.$emit("close")}}})],1)],1)],1)},et=[],at={name:"AboutDlg",data:function(){return{project_version:T["a"]}},props:{dialog:Boolean},mounted:function(){}},st=at,nt=(a("2a24"),Object(u["a"])(st,tt,et,!1,null,"7f282074",null)),ot=nt.exports,it={name:"SettingsDlg",components:{AboutDlg:ot},data:function(){return{maximized:!0,render:"2ds",aboutDlg:!1}},props:{dialog:Boolean},mounted:function(){this.maximized=window.innerWidth<=760}},rt=it,ct=(a("aea0"),Object(u["a"])(rt,X,Y,!1,null,"99d98b1a",null)),lt=ct.exports,ut={name:"PageIndex",components:{AboutDlg:ot,SettingsDlg:lt,SpaceView:W,StationView:V,StarMap:I,FixBtn:M,HorizTools:y},data:function(){return{userName:"",avatar:"",starMap:!1,settingsDlg:!1,aboutDlg:!1,autopilot:!1,project_version:T["a"],view:"station"}},mounted:function(){var t=this;this.$root.$tools.game.gs.accountDetailsRequest((function(e){t.userName=e.displayName,e&&e.scriptData&&e.scriptData.settings&&e.scriptData.settings.avatar?t.avatar=e.scriptData.settings.avatar:t.avatar="https://i.pravatar.cc/150?u=".concat(t.userName,"@ds.net")}))},methods:{buildTag:function(){var t="devBuild",e=new Date("2020-02-21T09:06:43.175Z"),a="1e71a507";return t=e.toUTCString()+" build "+a,t},logoutRequest:function(){this.$root.$store.commit("ds/setAuth",!1)}}},dt=ut,ft=(a("aa8e"),Object(u["a"])(dt,h,p,!1,null,"94806fee",null)),ht=ft.exports,pt={name:"MyLayout",components:{PageIndex:ht,Register:f,Login:o["default"]},data:function(){return{leftDrawerOpen:!1}},computed:{view:function(){return this.$root.$store.state.ds.view},auth:function(){return this.$root.$store.state.ds.auth}}},mt=pt,vt=Object(u["a"])(mt,s,n,!1,null,null,null);e["default"]=vt.exports},f92b:function(t,e,a){},fd91:function(t,e,a){}},[[0,1,2]]]);