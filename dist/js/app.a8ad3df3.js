(function(){var e={3482:function(e,t,n){"use strict";n.r(t),t["default"]={app:{nav_link_home:e=>{const{normalize:t}=e;return t(["Home"])},nav_link_about:e=>{const{normalize:t}=e;return t(["About"])},welcome:e=>{const{normalize:t}=e;return t(["Welcome to Your Vue.js App"])}},helloWorld:{intro:e=>{const{normalize:t}=e;return t(["For a guide and recipes on how to configure / customize this project check out the"])},plugins:e=>{const{normalize:t}=e;return t(["Installed CLI Plugins"])},links:e=>{const{normalize:t}=e;return t(["Essential Links"])},eco:e=>{const{normalize:t}=e;return t(["Ecosystem"])}},about:{title:e=>{const{normalize:t}=e;return t(["This is an about page"])}}}},3063:function(e,t,n){"use strict";n.r(t),t["default"]={app:{nav_link_home:e=>{const{normalize:t}=e;return t(["Inicio"])},nav_link_about:e=>{const{normalize:t}=e;return t(["Quien Somos?"])},welcome:e=>{const{normalize:t}=e;return t(["Bienvenido a tu aplicacion Vue.js"])}},helloWorld:{intro:e=>{const{normalize:t}=e;return t(["Para obtener una guía y recetas sobre cómo configurar/personalizar este proyecto, consulte el"])},plugins:e=>{const{normalize:t}=e;return t(["Plugins CLI instalados"])},links:e=>{const{normalize:t}=e;return t(["Links Esenciales"])},eco:e=>{const{normalize:t}=e;return t(["Ecosystema"])}},about:{title:e=>{const{normalize:t}=e;return t(["Esta es la pagina Quien Somos?"])}}}},4685:function(e,t,n){"use strict";var o=n(9242),r=n(3396),i=n(7139);const s=(0,r.Uk)("Register"),a=(0,r.Uk)(" | "),l=(0,r.Uk)("Init"),u=(0,r.Uk)(" | "),c=(0,r.Uk)("Login"),d=(0,r.Uk)(" | "),p=(0,r.Uk)("Verify"),g=(0,r.Uk)(" | "),m=(0,r.Uk)("About"),f=(0,r.Uk)(" | "),h={key:5,class:"btn-group iconLogged"},v={type:"button",class:"btn btn-warning dropdown-toggle","data-bs-toggle":"dropdown","aria-expanded":"false"},_=(0,r._)("i",{class:"bi bi-person-circle"},null,-1),b={class:"dropdown-menu"},w=(0,r._)("video",{autoPlay:"",muted:"",loop:"",id:"backgroundVideo"},[(0,r._)("source",{src:"https://dsqqu7oxq6o1v.cloudfront.net/preview-1014399-dJuQm5UBet-high.mp4",type:"video/mp4"}),(0,r.Uk)(" Your browser does not support HTML5 video. ")],-1);function k(e,t,n,o,k,y){const E=(0,r.up)("router-link"),I=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("nav",null,[!1===y.user.userState.loggedIn?((0,r.wg)(),(0,r.j4)(E,{key:0,to:"/register"},{default:(0,r.w5)((()=>[s])),_:1})):(0,r.kq)("",!0),a,!1===y.user.userState.loggedIn?((0,r.wg)(),(0,r.j4)(E,{key:1,to:"/init"},{default:(0,r.w5)((()=>[l])),_:1})):(0,r.kq)("",!0),u,!1===y.user.userState.loggedIn?((0,r.wg)(),(0,r.j4)(E,{key:2,to:"/login"},{default:(0,r.w5)((()=>[c])),_:1})):(0,r.kq)("",!0),d,!1===y.user.userState.loggedIn?((0,r.wg)(),(0,r.j4)(E,{key:3,to:"/verify"},{default:(0,r.w5)((()=>[p])),_:1})):(0,r.kq)("",!0),g,!1===y.user.userState.loggedIn?((0,r.wg)(),(0,r.j4)(E,{key:4,to:"/about"},{default:(0,r.w5)((()=>[m])),_:1})):(0,r.kq)("",!0),f,!0===y.user.userState.loggedIn?((0,r.wg)(),(0,r.iD)("div",h,[(0,r._)("button",v,[(0,r.Uk)((0,i.zw)(y.user.userState.user)+" ",1),_]),(0,r._)("ul",b,[(0,r._)("li",null,[(0,r._)("a",{onClick:t[0]||(t[0]=(...e)=>y.logoutvuex&&y.logoutvuex(...e)),class:"dropdown-item",href:"#"},"Logout")])])])):(0,r.kq)("",!0)]),(0,r.Wm)(I),w],64)}var y={name:"App",components:{},data(){return{}},computed:{user(){return this.$store.state}},methods:{logoutvuex(){this.$store.dispatch("logoutAction",{loggedIn:!1,user:null,token:null})}}},E=n(89);const I=(0,E.Z)(y,[["render",k]]);var S=I,x=n(5431);(0,x.z)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var z=n(2483);const j=e=>((0,r.dD)("data-v-6f9c9e2c"),e=e(),(0,r.Cn)(),e),A={id:"registerForm"},L={id:"divRegister",class:"card"},U=j((()=>(0,r._)("div",{class:"card-header"},[(0,r._)("div",{class:"d-flex justify-content-end social_icon"},[(0,r._)("span",null,[(0,r._)("i",{class:"bi bi-r-circle-fill"})])])],-1))),O=j((()=>(0,r._)("h3",{class:""},"Register",-1))),P={class:"input-group mb-4 mt-5"},V=j((()=>(0,r._)("span",{class:"input-group-text",id:"Email"},[(0,r._)("i",{style:{"min-width":"25px"},class:"bi bi-envelope-at-fill"})],-1))),C=j((()=>(0,r._)("br",null,null,-1)));function D(e,t,n,i,s,a){return(0,r.wg)(),(0,r.iD)("div",A,[(0,r._)("div",L,[U,O,(0,r._)("div",P,[V,(0,r.wy)((0,r._)("input",{type:"email",class:"form-control",placeholder:"Email","aria-label":"Email","aria-describedby":"Email","onUpdate:modelValue":t[0]||(t[0]=e=>s.email=e)},null,512),[[o.nr,s.email]])]),C,(0,r._)("button",{id:"btnRegister",class:"btn btn-dark my-2 my-sm-0 centrar",onClick:t[1]||(t[1]=(...e)=>a.signup&&a.signup(...e))}," Register ")])])}var $=n(5939),Z={name:"RegisterView",data(){return{email:"",token:""}},methods:{async signup(){if(this.validateEmail(this.email)){var e={email:this.email};await $.Z.post("http://localhost:5000/api/register ",e,{}).then((e=>{this.token=e.data,localStorage.setItem("FlsKTkn",this.token),this.$router.push("/init?token="+this.token)})).catch((e=>console.log(e)))}else alert("Email not valid")},validateEmail(e){var t=/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;return t.test(e)}},mounted(){}};const F=(0,E.Z)(Z,[["render",D],["__scopeId","data-v-6f9c9e2c"]]);var N=F;const q=e=>((0,r.dD)("data-v-6b32064f"),e=e(),(0,r.Cn)(),e),T={id:"initForm"},R={id:"divInit",class:"card"},B=q((()=>(0,r._)("div",{class:"card-header"},[(0,r._)("div",{class:"d-flex justify-content-end social_icon"},[(0,r._)("span",null,[(0,r._)("i",{class:"bi bi-arrow-right-circle-fill"})])])],-1))),M=q((()=>(0,r._)("h3",{class:""}," Init ",-1))),W={class:"input-group mb-4 mt-5"},H=q((()=>(0,r._)("span",{class:"input-group-text",id:"Password"},[(0,r._)("i",{style:{"min-width":"25px"},class:"bi bi-lock-fill"})],-1))),Q=q((()=>(0,r._)("br",null,null,-1)));function Y(e,t,n,i,s,a){return(0,r.wg)(),(0,r.iD)("div",T,[(0,r._)("div",R,[B,M,(0,r._)("div",W,[H,(0,r.wy)((0,r._)("input",{type:"password",class:"form-control",placeholder:"Password","aria-label":"Password","aria-describedby":"Password","onUpdate:modelValue":t[0]||(t[0]=e=>s.password=e)},null,512),[[o.nr,s.password]])]),Q,(0,r._)("button",{id:"btnInit",class:"btn btn-dark my-2 my-sm-0 centrar",onClick:t[1]||(t[1]=(...e)=>a.init&&a.init(...e))}," Init Password ")])])}var J={name:"InitView",data(){return{password:"",token:window.location.href.split("=").pop(),password_param:window.location.href.split("&?password=").pop()}},methods:{async init(){var e={password:this.password,token:this.token};await $.Z.post("http://localhost:5000/api/init ",e).then((e=>{console.log(e),this.$router.push("/login")})).catch((e=>console.log(e)))}},mounted(){console.log(this.password_param)}};const K=(0,E.Z)(J,[["render",Y],["__scopeId","data-v-6b32064f"]]);var G=K;const X=e=>((0,r.dD)("data-v-37b857b1"),e=e(),(0,r.Cn)(),e),ee={id:"loginForm"},te={id:"divlogin",class:"card"},ne=X((()=>(0,r._)("div",{class:"card-header"},[(0,r._)("div",{class:"d-flex justify-content-end social_icon"},[(0,r._)("span",null,[(0,r._)("i",{class:"bi bi-door-open-fill"})])])],-1))),oe=X((()=>(0,r._)("h3",{class:""}," Login ",-1))),re={class:"input-group mb-4 mt-5"},ie=X((()=>(0,r._)("span",{class:"input-group-text",id:"Email"},[(0,r._)("i",{style:{"min-width":"25px"},class:"bi bi-envelope-at-fill"})],-1))),se={class:"input-group mb-5"},ae=X((()=>(0,r._)("span",{class:"input-group-text",id:"Password"},[(0,r._)("i",{style:{"min-width":"25px"},class:"bi bi-lock-fill"})],-1)));function le(e,t,n,i,s,a){return(0,r.wg)(),(0,r.iD)("div",ee,[(0,r._)("div",te,[ne,oe,(0,r._)("div",re,[ie,(0,r.wy)((0,r._)("input",{type:"email",class:"form-control",placeholder:"Email","aria-label":"Email","aria-describedby":"Email","onUpdate:modelValue":t[0]||(t[0]=e=>s.email=e)},null,512),[[o.nr,s.email]])]),(0,r._)("div",se,[ae,(0,r.wy)((0,r._)("input",{type:"password",class:"form-control",placeholder:"Password","aria-label":"Password","aria-describedby":"Password","onUpdate:modelValue":t[1]||(t[1]=e=>s.password=e)},null,512),[[o.nr,s.password]])]),(0,r._)("button",{id:"btnLogin",class:"btn btn-dark my-2 my-sm-0 centrar",onClick:t[2]||(t[2]=(...e)=>a.login&&a.login(...e))}," Login ")])])}var ue={name:"LoginView",data(){return{email:"",password:""}},computed:{user(){return this.$store.state}},methods:{async login(){var e={email:this.email,password:this.password};await $.Z.post("http://localhost:5000/api/login ",e).then((t=>{this.loginvuex(e,t.data),this.$router.push({name:"verify",params:{token:t.data}})})).catch((e=>console.log(e)))},loginvuex(e,t){this.$store.dispatch("loginAction",{loggedIn:!0,user:e.email,token:t})},logoutvuex(){this.$store.dispatch("logoutAction",{loggedIn:!1,user:null,token:null})}},mounted(){}};const ce=(0,E.Z)(ue,[["render",le],["__scopeId","data-v-37b857b1"]]);var de=ce;const pe=e=>((0,r.dD)("data-v-77c3008e"),e=e(),(0,r.Cn)(),e),ge={id:"verifyForm"},me={id:"divVerify",class:"card"},fe=pe((()=>(0,r._)("div",{class:"card-header"},[(0,r._)("div",{class:"d-flex justify-content-end social_icon"},[(0,r._)("span",null,[(0,r._)("i",{class:"bi bi-check-circle"})])])],-1))),he=pe((()=>(0,r._)("h3",{class:""},"Verify",-1))),ve=pe((()=>(0,r._)("br",null,null,-1))),_e=pe((()=>(0,r._)("h5",null,"JWT: ",-1)));function be(e,t,n,o,s,a){return(0,r.wg)(),(0,r.iD)("div",ge,[(0,r._)("div",me,[fe,he,ve,_e,(0,r._)("p",null,(0,i.zw)(s.token),1)])])}var we={name:"VerifyView",components:{},data(){return{token:this.$route.params["token"]}},mounted(){""==this.$route.params["token"]&&(this.$route.params["token"]="Login first")}};const ke=(0,E.Z)(we,[["render",be],["__scopeId","data-v-77c3008e"]]);var ye=ke;const Ee=[{path:"/",name:"/",redirect:{path:"/register"}},{path:"/register",name:"register",component:N},{path:"/login",name:"login",component:de},{path:"/init",name:"init",component:G},{path:"/verify/:token?",name:"verify",component:ye,props:!0}],Ie=(0,z.p7)({history:(0,z.PO)("/"),routes:Ee});var Se=Ie,xe=n(65),ze=(0,xe.MT)({state:{userState:{loggedIn:!1,user:null,token:null}},getters:{loggedIn(e){return e.userState.loggedIn},user(e){return e.userState.user},token(e){return e.userState.token}},mutations:{login(e,t){e.userState.loggedIn=!0,e.userState.user=t.user,e.userState.token=t.token},logout(e){e.userState.loggedIn=!1,e.userState.user=null,e.userState.token=null}},actions:{loginAction(e,t){e.commit("login",t)},logoutAction(e,t){e.commit("logout",t)}}}),je=(n(2166),n(5658));function Ae(){const e=n(8973),t={};return e.keys().forEach((n=>{const o=n.match(/([A-Za-z0-9-_]+)\./i);if(o&&o.length>1){const r=o[1];t[r]=e(n).default}})),t}var Le=(0,je.o)({locale:{NODE_ENV:"production",BASE_URL:"/"}.VUE_APP_I18N_LOCALE,fallbackLocale:{NODE_ENV:"production",BASE_URL:"/"}.VUE_APP_I18N_FALLBACK_LOCALE,messages:Ae()});(0,o.ri)(S).use(Le).use(ze).use(Se).mount("#app")},8973:function(e,t,n){var o={"./en.json":3482,"./es.json":3063};function r(e){var t=i(e);return n(t)}function i(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=i,e.exports=r,r.id=8973}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,i){if(!o){var s=1/0;for(c=0;c<e.length;c++){o=e[c][0],r=e[c][1],i=e[c][2];for(var a=!0,l=0;l<o.length;l++)(!1&i||s>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[l])}))?o.splice(l--,1):(a=!1,i<s&&(s=i));if(a){e.splice(c--,1);var u=r();void 0!==u&&(t=u)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[o,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,s=o[0],a=o[1],l=o[2],u=0;if(s.some((function(t){return 0!==e[t]}))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(l)var c=l(n)}for(t&&t(o);u<s.length;u++)i=s[u],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(c)},o=self["webpackChunkfront_flaskm03"]=self["webpackChunkfront_flaskm03"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(4685)}));o=n.O(o)})();
//# sourceMappingURL=app.a8ad3df3.js.map