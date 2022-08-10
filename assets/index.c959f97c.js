var yt=Object.defineProperty;var kt=(n,e,t)=>e in n?yt(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var oe=(n,e,t)=>(kt(n,typeof e!="symbol"?e+"":e,t),t);const bt=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}};bt();function H(){}function be(n,e){for(const t in e)n[t]=e[t];return n}function it(n){return n()}function Fe(){return Object.create(null)}function se(n){n.forEach(it)}function vt(n){return typeof n=="function"}function X(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}function Rt(n){return Object.keys(n).length===0}function Pt(n,e,t,r){if(n){const i=ot(n,e,t,r);return n[0](i)}}function ot(n,e,t,r){return n[1]&&r?be(t.ctx.slice(),n[1](r(e))):t.ctx}function Tt(n,e,t,r){if(n[2]&&r){const i=n[2](r(t));if(e.dirty===void 0)return i;if(typeof i=="object"){const o=[],s=Math.max(e.dirty.length,i.length);for(let a=0;a<s;a+=1)o[a]=e.dirty[a]|i[a];return o}return e.dirty|i}return e.dirty}function $t(n,e,t,r,i,o){if(i){const s=ot(e,t,r,o);n.p(s,i)}}function xt(n){if(n.ctx.length>32){const e=[],t=n.ctx.length/32;for(let r=0;r<t;r++)e[r]=-1;return e}return-1}function Ue(n){const e={};for(const t in n)t[0]!=="$"&&(e[t]=n[t]);return e}function p(n,e){n.appendChild(e)}function T(n,e,t){n.insertBefore(e,t||null)}function k(n){n.parentNode.removeChild(n)}function we(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function _(n){return document.createElement(n)}function ve(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function V(n){return document.createTextNode(n)}function x(){return V(" ")}function Pe(){return V("")}function ce(n,e,t,r){return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t,r)}function At(n){return function(e){return e.preventDefault(),n.call(this,e)}}function d(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function St(n){return Array.from(n.childNodes)}function ae(n,e){e=""+e,n.wholeText!==e&&(n.data=e)}function ge(n,e){n.value=e==null?"":e}function Ct(n,e,{bubbles:t=!1,cancelable:r=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(n,t,r,e),i}let de;function fe(n){de=n}function st(){if(!de)throw new Error("Function called outside component initialization");return de}function he(n){st().$$.on_mount.push(n)}function at(){const n=st();return(e,t,{cancelable:r=!1}={})=>{const i=n.$$.callbacks[e];if(i){const o=Ct(e,t,{cancelable:r});return i.slice().forEach(s=>{s.call(n,o)}),!o.defaultPrevented}return!0}}const ue=[],Ne=[],ye=[],Ie=[],Et=Promise.resolve();let Ce=!1;function Gt(){Ce||(Ce=!0,Et.then(lt))}function Ee(n){ye.push(n)}const $e=new Set;let _e=0;function lt(){const n=de;do{for(;_e<ue.length;){const e=ue[_e];_e++,fe(e),qt(e.$$)}for(fe(null),ue.length=0,_e=0;Ne.length;)Ne.pop()();for(let e=0;e<ye.length;e+=1){const t=ye[e];$e.has(t)||($e.add(t),t())}ye.length=0}while(ue.length);for(;Ie.length;)Ie.pop()();Ce=!1,$e.clear(),fe(n)}function qt(n){if(n.fragment!==null){n.update(),se(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(Ee)}}const ke=new Set;let te;function xe(){te={r:0,c:[],p:te}}function Ae(){te.r||se(te.c),te=te.p}function P(n,e){n&&n.i&&(ke.delete(n),n.i(e))}function A(n,e,t,r){if(n&&n.o){if(ke.has(n))return;ke.add(n),te.c.push(()=>{ke.delete(n),r&&(t&&n.d(1),r())}),n.o(e)}else r&&r()}function Ot(n,e){const t={},r={},i={$$scope:1};let o=n.length;for(;o--;){const s=n[o],a=e[o];if(a){for(const u in s)u in a||(r[u]=1);for(const u in a)i[u]||(t[u]=a[u],i[u]=1);n[o]=a}else for(const u in s)i[u]=1}for(const s in r)s in t||(t[s]=void 0);return t}function Lt(n){return typeof n=="object"&&n!==null?n:{}}function K(n){n&&n.c()}function j(n,e,t,r){const{fragment:i,on_mount:o,on_destroy:s,after_update:a}=n.$$;i&&i.m(e,t),r||Ee(()=>{const u=o.map(it).filter(vt);s?s.push(...u):se(u),n.$$.on_mount=[]}),a.forEach(Ee)}function z(n,e){const t=n.$$;t.fragment!==null&&(se(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function Bt(n,e){n.$$.dirty[0]===-1&&(ue.push(n),Gt(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function Q(n,e,t,r,i,o,s,a=[-1]){const u=de;fe(n);const h=n.$$={fragment:null,ctx:null,props:o,update:H,not_equal:i,bound:Fe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:Fe(),dirty:a,skip_bound:!1,root:e.target||u.$$.root};s&&s(h.root);let w=!1;if(h.ctx=t?t(n,e.props||{},(f,g,...D)=>{const $=D.length?D[0]:g;return h.ctx&&i(h.ctx[f],h.ctx[f]=$)&&(!h.skip_bound&&h.bound[f]&&h.bound[f]($),w&&Bt(n,f)),g}):[],h.update(),w=!0,se(h.before_update),h.fragment=r?r(h.ctx):!1,e.target){if(e.hydrate){const f=St(e.target);h.fragment&&h.fragment.l(f),f.forEach(k)}else h.fragment&&h.fragment.c();e.intro&&P(n.$$.fragment),j(n,e.target,e.anchor,e.customElement),lt()}fe(u)}class W{$destroy(){z(this,1),this.$destroy=H}$on(e,t){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(t),()=>{const i=r.indexOf(t);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!Rt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Ft="http://localhost".replace(/\/+$/,"");class pe{constructor(e={}){this.configuration=e}set config(e){this.configuration=e}get basePath(){return this.configuration.basePath!=null?this.configuration.basePath:Ft}get fetchApi(){return this.configuration.fetchApi}get middleware(){return this.configuration.middleware||[]}get queryParamsStringify(){return this.configuration.queryParamsStringify||ct}get username(){return this.configuration.username}get password(){return this.configuration.password}get apiKey(){const e=this.configuration.apiKey;if(e)return typeof e=="function"?e:()=>e}get accessToken(){const e=this.configuration.accessToken;if(e)return typeof e=="function"?e:async()=>e}get headers(){return this.configuration.headers}get credentials(){return this.configuration.credentials}}const Ut=new pe;class Te{constructor(e=Ut){oe(this,"middleware");oe(this,"fetchApi",async(e,t)=>{let r={url:e,init:t};for(const o of this.middleware)o.pre&&(r=await o.pre({fetch:this.fetchApi,...r})||r);let i;try{i=await(this.configuration.fetchApi||fetch)(r.url,r.init)}catch(o){for(const s of this.middleware)s.onError&&(i=await s.onError({fetch:this.fetchApi,url:r.url,init:r.init,error:o,response:i?i.clone():void 0})||i);if(i!==void 0)throw new Jt(o,"The request failed and the interceptors did not return an alternative response")}for(const o of this.middleware)o.post&&(i=await o.post({fetch:this.fetchApi,url:r.url,init:r.init,response:i.clone()})||i);return i});this.configuration=e,this.middleware=e.middleware}withMiddleware(...e){const t=this.clone();return t.middleware=t.middleware.concat(...e),t}withPreMiddleware(...e){const t=e.map(r=>({pre:r}));return this.withMiddleware(...t)}withPostMiddleware(...e){const t=e.map(r=>({post:r}));return this.withMiddleware(...t)}async request(e,t){const{url:r,init:i}=await this.createFetchParams(e,t),o=await this.fetchApi(r,i);if(o.status>=200&&o.status<300)return o;throw new Dt(o,"Response returned an error code")}async createFetchParams(e,t){let r=this.configuration.basePath+e.path;e.query!==void 0&&Object.keys(e.query).length!==0&&(r+="?"+this.configuration.queryParamsStringify(e.query));const i=Object.assign({},this.configuration.headers,e.headers);Object.keys(i).forEach(h=>i[h]===void 0?delete i[h]:{});const o=typeof t=="function"?t:async()=>t,s={method:e.method,headers:i,body:e.body,credentials:this.configuration.credentials},a={...s,...await o({init:s,context:e})},u={...a,body:It(a.body)||a.body instanceof URLSearchParams||Nt(a.body)?a.body:JSON.stringify(a.body)};return{url:r,init:u}}clone(){const e=this.constructor,t=new e(this.configuration);return t.middleware=this.middleware.slice(),t}}function Nt(n){return typeof Blob!="undefined"&&n instanceof Blob}function It(n){return typeof FormData!="undefined"&&n instanceof FormData}class Dt extends Error{constructor(t,r){super(r);oe(this,"name","ResponseError");this.response=t}}class Jt extends Error{constructor(t,r){super(r);oe(this,"name","FetchError");this.cause=t}}class E extends Error{constructor(t,r){super(r);oe(this,"name","RequiredError");this.field=t}}function Mt(n,e){const t=n[e];return t!=null}function ct(n,e=""){return Object.keys(n).map(t=>ut(t,n[t],e)).filter(t=>t.length>0).join("&")}function ut(n,e,t=""){const r=t+(t.length?`[${n}]`:n);if(e instanceof Array){const i=e.map(o=>encodeURIComponent(String(o))).join(`&${encodeURIComponent(r)}=`);return`${encodeURIComponent(r)}=${i}`}if(e instanceof Set){const i=Array.from(e);return ut(n,i,t)}return e instanceof Date?`${encodeURIComponent(r)}=${encodeURIComponent(e.toISOString())}`:e instanceof Object?ct(e,r):`${encodeURIComponent(r)}=${encodeURIComponent(String(e))}`}function Ge(n){for(const e of n)if(e.contentType==="multipart/form-data")return!0;return!1}class N{constructor(e,t=r=>r){this.raw=e,this.transformer=t}async value(){return this.transformer(await this.raw.json())}}class Re{constructor(e){this.raw=e}async value(){}}function jt(n){if(n!==void 0)return n===null?null:{password:n.password,username:n.username}}function ne(n){return zt(n)}function zt(n,e){return n==null?n:{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}function qe(n){if(n!==void 0)return n===null?null:{refresh_token:n.refreshToken}}function Oe(n){return Kt(n)}function Kt(n,e){return n==null?n:{url:Mt(n,"url")?n.url:void 0}}function Vt(n){if(n!==void 0)return n===null?null:{token:n.token}}function ft(n){return Ht(n)}function Ht(n,e){return n==null?n:{accessSecret:n.access_secret,accessToken:n.access_token}}function Le(n){return Xt(n)}function Xt(n,e){return n==null?n:{id:n.id,name:n.name}}class Qt extends Te{async pinterestAuthCallbackCallbackGetRaw(e,t){if(e.state===null||e.state===void 0)throw new E("state","Required parameter requestParameters.state was null or undefined when calling pinterestAuthCallbackCallbackGet.");if(e.code===null||e.code===void 0)throw new E("code","Required parameter requestParameters.code was null or undefined when calling pinterestAuthCallbackCallbackGet.");const r={};e.state!==void 0&&(r.state=e.state),e.code!==void 0&&(r.code=e.code);const i={},o=await this.request({path:"/api/pinterest/auth/callback",method:"GET",headers:i,query:r},t);return new N(o,s=>ne(s))}async pinterestAuthCallbackCallbackGet(e,t){return await(await this.pinterestAuthCallbackCallbackGetRaw(e,t)).value()}async pinterestAuthGetRaw(e,t){const r={};e.returnTo!==void 0&&(r.return_to=e.returnTo);const i={},o=await this.request({path:"/api/pinterest/auth/",method:"GET",headers:i,query:r},t);return new Re(o)}async pinterestAuthGet(e={},t){await this.pinterestAuthGetRaw(e,t)}async pinterestRefreshRefreshPostRaw(e,t){if(e.refreshToken===null||e.refreshToken===void 0)throw new E("refreshToken","Required parameter requestParameters.refreshToken was null or undefined when calling pinterestRefreshRefreshPost.");const r={},i={};i["Content-Type"]="application/json";const o=await this.request({path:"/api/pinterest/auth/refresh",method:"POST",headers:i,query:r,body:qe(e.refreshToken)},t);return new N(o,s=>ne(s))}async pinterestRefreshRefreshPost(e,t){return await(await this.pinterestRefreshRefreshPostRaw(e,t)).value()}async userUserGetRaw(e){const t={},r={};if(this.configuration&&this.configuration.accessToken){const o=this.configuration.accessToken,s=await o("jwt",[]);s&&(r.Authorization=`Bearer ${s}`)}const i=await this.request({path:"/api/pinterest/user",method:"GET",headers:r,query:t},e);return new N(i,o=>Le(o))}async userUserGet(e){return await(await this.userUserGetRaw(e)).value()}}class Wt extends Te{async pixivAuthPostRaw(e,t){if(e.login===null||e.login===void 0)throw new E("login","Required parameter requestParameters.login was null or undefined when calling pixivAuthPost.");const r={},i={};i["Content-Type"]="application/json";const o=await this.request({path:"/api/pixiv/auth/",method:"POST",headers:i,query:r,body:jt(e.login)},t);return new N(o,s=>ne(s))}async pixivAuthPost(e,t){return await(await this.pixivAuthPostRaw(e,t)).value()}async pixivPostPostPostRaw(e,t){if(e.images===null||e.images===void 0)throw new E("images","Required parameter requestParameters.images was null or undefined when calling pixivPostPostPost.");if(e.tags===null||e.tags===void 0)throw new E("tags","Required parameter requestParameters.tags was null or undefined when calling pixivPostPostPost.");if(e.title===null||e.title===void 0)throw new E("title","Required parameter requestParameters.title was null or undefined when calling pixivPostPostPost.");const r={},i={};if(this.configuration&&this.configuration.accessToken){const w=this.configuration.accessToken,f=await w("jwt",[]);f&&(i.Authorization=`Bearer ${f}`)}const s=Ge([{contentType:"multipart/form-data"}]);let a,u=!1;u=s,u?a=new FormData:a=new URLSearchParams,e.images&&e.images.forEach(w=>{a.append("images",w)}),e.tags!==void 0&&a.append("tags",e.tags),e.text!==void 0&&a.append("text",e.text),e.title!==void 0&&a.append("title",e.title);const h=await this.request({path:"/api/pixiv/post",method:"POST",headers:i,query:r,body:a},t);return new N(h,w=>Oe(w))}async pixivPostPostPost(e,t){return await(await this.pixivPostPostPostRaw(e,t)).value()}async pixivRefreshRefreshPostRaw(e,t){if(e.refreshToken===null||e.refreshToken===void 0)throw new E("refreshToken","Required parameter requestParameters.refreshToken was null or undefined when calling pixivRefreshRefreshPost.");const r={},i={};i["Content-Type"]="application/json";const o=await this.request({path:"/api/pixiv/auth/refresh",method:"POST",headers:i,query:r,body:qe(e.refreshToken)},t);return new N(o,s=>ne(s))}async pixivRefreshRefreshPost(e,t){return await(await this.pixivRefreshRefreshPostRaw(e,t)).value()}}class Yt extends Te{async redditAuthCallbackCallbackGetRaw(e){const t={},r={},i=await this.request({path:"/api/reddit/auth/callback",method:"GET",headers:r,query:t},e);return new N(i,o=>ne(o))}async redditAuthCallbackCallbackGet(e){return await(await this.redditAuthCallbackCallbackGetRaw(e)).value()}async redditAuthGetRaw(e,t){const r={};e.returnTo!==void 0&&(r.return_to=e.returnTo);const i={},o=await this.request({path:"/api/reddit/auth/",method:"GET",headers:i,query:r},t);return new Re(o)}async redditAuthGet(e={},t){await this.redditAuthGetRaw(e,t)}async redditPostPostPostRaw(e,t){if(e.subreddit===null||e.subreddit===void 0)throw new E("subreddit","Required parameter requestParameters.subreddit was null or undefined when calling redditPostPostPost.");if(e.title===null||e.title===void 0)throw new E("title","Required parameter requestParameters.title was null or undefined when calling redditPostPostPost.");const r={},i={};if(this.configuration&&this.configuration.accessToken){const w=this.configuration.accessToken,f=await w("jwt",[]);f&&(i.Authorization=`Bearer ${f}`)}const s=Ge([{contentType:"multipart/form-data"}]);let a,u=!1;u=s,u?a=new FormData:a=new URLSearchParams,e.flair!==void 0&&a.append("flair",e.flair),e.images&&e.images.forEach(w=>{a.append("images",w)}),e.subreddit!==void 0&&a.append("subreddit",e.subreddit),e.text!==void 0&&a.append("text",e.text),e.title!==void 0&&a.append("title",e.title);const h=await this.request({path:"/api/reddit/post",method:"POST",headers:i,query:r,body:a},t);return new N(h,w=>Oe(w))}async redditPostPostPost(e,t){return await(await this.redditPostPostPostRaw(e,t)).value()}async redditRefreshRefreshPostRaw(e,t){if(e.refreshToken===null||e.refreshToken===void 0)throw new E("refreshToken","Required parameter requestParameters.refreshToken was null or undefined when calling redditRefreshRefreshPost.");const r={},i={};i["Content-Type"]="application/json";const o=await this.request({path:"/api/reddit/auth/refresh",method:"POST",headers:i,query:r,body:qe(e.refreshToken)},t);return new N(o,s=>ne(s))}async redditRefreshRefreshPost(e,t){return await(await this.redditRefreshRefreshPostRaw(e,t)).value()}async redditRevokeRevokePostRaw(e,t){if(e.token===null||e.token===void 0)throw new E("token","Required parameter requestParameters.token was null or undefined when calling redditRevokeRevokePost.");const r={},i={};i["Content-Type"]="application/json";const o=await this.request({path:"/api/reddit/auth/revoke",method:"POST",headers:i,query:r,body:Vt(e.token)},t);return new Re(o)}async redditRevokeRevokePost(e,t){await this.redditRevokeRevokePostRaw(e,t)}async userUserGetRaw(e){const t={},r={};if(this.configuration&&this.configuration.accessToken){const o=this.configuration.accessToken,s=await o("jwt",[]);s&&(r.Authorization=`Bearer ${s}`)}const i=await this.request({path:"/api/reddit/user",method:"GET",headers:r,query:t},e);return new N(i,o=>Le(o))}async userUserGet(e){return await(await this.userUserGetRaw(e)).value()}}class Zt extends Te{async twitterAuthCallbackCallbackGetRaw(e,t){if(e.oauthVerifier===null||e.oauthVerifier===void 0)throw new E("oauthVerifier","Required parameter requestParameters.oauthVerifier was null or undefined when calling twitterAuthCallbackCallbackGet.");if(e.oauthToken===null||e.oauthToken===void 0)throw new E("oauthToken","Required parameter requestParameters.oauthToken was null or undefined when calling twitterAuthCallbackCallbackGet.");const r={};e.oauthVerifier!==void 0&&(r.oauth_verifier=e.oauthVerifier),e.oauthToken!==void 0&&(r.oauth_token=e.oauthToken);const i={},o=await this.request({path:"/api/twitter/auth/callback",method:"GET",headers:i,query:r},t);return new N(o,s=>ft(s))}async twitterAuthCallbackCallbackGet(e,t){return await(await this.twitterAuthCallbackCallbackGetRaw(e,t)).value()}async twitterAuthGetRaw(e,t){const r={};e.returnTo!==void 0&&(r.return_to=e.returnTo);const i={},o=await this.request({path:"/api/twitter/auth/",method:"GET",headers:i,query:r},t);return new Re(o)}async twitterAuthGet(e={},t){await this.twitterAuthGetRaw(e,t)}async twitterPostPostPostRaw(e,t){if(e.text===null||e.text===void 0)throw new E("text","Required parameter requestParameters.text was null or undefined when calling twitterPostPostPost.");const r={},i={};this.configuration&&(this.configuration.username!==void 0||this.configuration.password!==void 0)&&(i.Authorization="Basic "+btoa(this.configuration.username+":"+this.configuration.password));const s=Ge([{contentType:"multipart/form-data"}]);let a,u=!1;u=s,u?a=new FormData:a=new URLSearchParams,e.images&&e.images.forEach(w=>{a.append("images",w)}),e.text!==void 0&&a.append("text",e.text);const h=await this.request({path:"/api/twitter/post",method:"POST",headers:i,query:r,body:a},t);return new N(h,w=>Oe(w))}async twitterPostPostPost(e,t){return await(await this.twitterPostPostPostRaw(e,t)).value()}async userUserGetRaw(e){const t={},r={};this.configuration&&(this.configuration.username!==void 0||this.configuration.password!==void 0)&&(r.Authorization="Basic "+btoa(this.configuration.username+":"+this.configuration.password));const i=await this.request({path:"/api/twitter/user",method:"GET",headers:r,query:t},e);return new N(i,o=>Le(o))}async userUserGet(e){return await(await this.userUserGetRaw(e)).value()}}function De(n){let e,t;return{c(){e=ve("title"),t=V(n[0])},m(r,i){T(r,e,i),p(e,t)},p(r,i){i&1&&ae(t,r[0])},d(r){r&&k(e)}}}function en(n){let e,t,r,i=n[0]&&De(n);const o=n[3].default,s=Pt(o,n,n[2],null);return{c(){e=ve("svg"),i&&i.c(),t=Pe(),s&&s.c(),d(e,"xmlns","http://www.w3.org/2000/svg"),d(e,"viewBox",n[1]),d(e,"class","svelte-c8tyih")},m(a,u){T(a,e,u),i&&i.m(e,null),p(e,t),s&&s.m(e,null),r=!0},p(a,[u]){a[0]?i?i.p(a,u):(i=De(a),i.c(),i.m(e,t)):i&&(i.d(1),i=null),s&&s.p&&(!r||u&4)&&$t(s,o,a,a[2],r?Tt(o,a[2],u,null):xt(a[2]),null),(!r||u&2)&&d(e,"viewBox",a[1])},i(a){r||(P(s,a),r=!0)},o(a){A(s,a),r=!1},d(a){a&&k(e),i&&i.d(),s&&s.d(a)}}}function tn(n,e,t){let{$$slots:r={},$$scope:i}=e,{title:o=null}=e,{viewBox:s}=e;return n.$$set=a=>{"title"in a&&t(0,o=a.title),"viewBox"in a&&t(1,s=a.viewBox),"$$scope"in a&&t(2,i=a.$$scope)},[o,s,i,r]}class nn extends W{constructor(e){super(),Q(this,e,tn,en,X,{title:0,viewBox:1})}}function rn(n){let e,t,r;return{c(){e=ve("path"),t=x(),r=ve("path"),d(e,"d","M256 48c-42.9 0-84.2 13-119.2 37.5-34.2 24-60.2 57.2-75.1 96.1L58 192h45.7l1.9-5c8.2-17.8 19.4-33.9 33.5-48 31.2-31.2 72.7-48.4 116.9-48.4s85.7 17.2 116.9 48.4c31.2 31.2 48.4 72.7 48.4 116.9 0 44.1-17.2 85.7-48.4 116.9-31.2 31.2-72.7 48.4-116.9 48.4-44.1 0-85.6-17.2-116.9-48.4-14-14-25.3-30.1-33.5-47.9l-1.9-5H58l3.6 10.4c14.9 38.9 40.9 72.1 75.1 96.1C171.8 451.1 213 464 256 464c114.7 0 208-93.3 208-208S370.7 48 256 48z"),d(r,"d","M48 277.4h189.7l-43.6 44.7L224 352l96-96-96-96-31 29.9 44.7 44.7H48v42.8z")},m(i,o){T(i,e,o),T(i,t,o),T(i,r,o)},p:H,d(i){i&&k(e),i&&k(t),i&&k(r)}}}function on(n){let e,t;const r=[{viewBox:"0 0 512 512"},n[0]];let i={$$slots:{default:[rn]},$$scope:{ctx:n}};for(let o=0;o<r.length;o+=1)i=be(i,r[o]);return e=new nn({props:i}),{c(){K(e.$$.fragment)},m(o,s){j(e,o,s),t=!0},p(o,[s]){const a=s&1?Ot(r,[r[0],Lt(o[0])]):{};s&2&&(a.$$scope={dirty:s,ctx:o}),e.$set(a)},i(o){t||(P(e.$$.fragment,o),t=!0)},o(o){A(e.$$.fragment,o),t=!1},d(o){z(e,o)}}}function sn(n,e,t){return n.$$set=r=>{t(0,e=be(be({},e),Ue(r)))},e=Ue(e),[e]}class dt extends W{constructor(e){super(),Q(this,e,sn,on,X,{})}}const me={apiBase:"https://sns-manager.herokuapp.com"},ht="sns-manager-tokens-",pt=localStorage,Be=n=>{const e=ht+n;return JSON.parse(pt.getItem(e)||"[]")},mt=(n,e)=>{const t=e.toLowerCase()==="twitter";if(!n||!n.accessToken||t&&!n.accessSecret){console.log("Invalid token",n);return}const r=ht+e,i=Be(e);i.findIndex(o=>o.accessToken===n.accessToken)===-1?(i.push(n),pt.setItem(r,JSON.stringify(i))):console.warn("User is already logged in. Ignoring")};function an(n){let e,t,r,i,o,s;return r=new dt({}),{c(){e=_("a"),t=_("div"),K(r.$$.fragment),i=x(),o=V(n[0]),d(t,"class","w-4 h-4"),d(e,"href",n[1]()),d(e,"class","flex flex-row items-center font-bold")},m(a,u){T(a,e,u),p(e,t),j(r,t,null),p(e,i),p(e,o),s=!0},p(a,[u]){(!s||u&1)&&ae(o,a[0])},i(a){s||(P(r.$$.fragment,a),s=!0)},o(a){A(r.$$.fragment,a),s=!1},d(a){a&&k(e),z(r)}}}function ln(n,e,t){let{provider:r}=e;const i=at(),o=r.toLowerCase(),s=()=>window.location.origin+window.location.pathname,a=()=>`${me.apiBase}/api/${o}/auth?return_to=${encodeURIComponent(s())}`;return he(()=>{const h=new URLSearchParams(window.location.search).get(o);if(h){const w=JSON.parse(h),g=r.toLowerCase()==="twitter"?ft(w):ne(w);mt(g,r),history.replaceState("","",s())}i("login",{tokens:Be(r)})}),n.$$set=u=>{"provider"in u&&t(0,r=u.provider)},[r,a]}class Se extends W{constructor(e){super(),Q(this,e,ln,an,X,{provider:0})}}function cn(n){let e,t,r,i,o,s,a,u,h,w,f,g,D,$,q,S,le,O,I,re,J;return r=new dt({}),{c(){e=_("button"),t=_("div"),K(r.$$.fragment),i=V(`
  Pixiv`),o=x(),s=_("div"),a=_("div"),u=x(),h=_("h2"),h.textContent="Pixiv Login",w=x(),f=_("form"),g=_("input"),D=x(),$=_("input"),q=x(),S=_("button"),le=V("Login"),d(t,"class","w-4 h-4"),d(e,"class","flex flex-row items-center font-bold"),d(a,"class","fixed inset-0 -z-10"),d(h,"class","font-bold"),d(g,"type","text"),d(g,"class","bg-white border py-1 px-2 disabled:bg-gray-200"),d(g,"name","username"),g.disabled=n[3],d(g,"placeholder","Username"),g.required=!0,d($,"type","password"),d($,"name","password"),d($,"placeholder","Passwor"),$.disabled=n[3],$.required=!0,d($,"class","bg-white border py-1 px-2 disabled:bg-gray-200"),d(S,"type","submit"),S.disabled=n[3],d(S,"class","disabled:text-gray-500"),d(f,"class","flex flex-col gap-2 justify-center p-4 z-10"),d(s,"class",O=`${n[2]?"flex":"hidden"} fixed inset-0 items-center justify-center backdrop-blur-sm flex-col`)},m(y,C){T(y,e,C),p(e,t),j(r,t,null),p(e,i),T(y,o,C),T(y,s,C),p(s,a),p(s,u),p(s,h),p(s,w),p(s,f),p(f,g),ge(g,n[0]),p(f,D),p(f,$),ge($,n[1]),p(f,q),p(f,S),p(S,le),I=!0,re||(J=[ce(e,"click",n[5]),ce(a,"click",n[6]),ce(g,"input",n[7]),ce($,"input",n[8]),ce(f,"submit",At(n[9]))],re=!0)},p(y,[C]){(!I||C&8)&&(g.disabled=y[3]),C&1&&g.value!==y[0]&&ge(g,y[0]),(!I||C&8)&&($.disabled=y[3]),C&2&&$.value!==y[1]&&ge($,y[1]),(!I||C&8)&&(S.disabled=y[3]),(!I||C&4&&O!==(O=`${y[2]?"flex":"hidden"} fixed inset-0 items-center justify-center backdrop-blur-sm flex-col`))&&d(s,"class",O)},i(y){I||(P(r.$$.fragment,y),I=!0)},o(y){A(r.$$.fragment,y),I=!1},d(y){y&&k(e),z(r),y&&k(o),y&&k(s),re=!1,se(J)}}}const Je="pixiv";function un(n,e,t){const r=at();let i="",o="",s=!1,a=!1;const u=async()=>{const q=new Wt(new pe({basePath:me.apiBase}));t(3,a=!0);try{const S=await q.pixivAuthPost({login:{username:i,password:o}});mt(S,Je),h(),t(2,s=!1),t(0,i=""),t(1,o="")}catch(S){console.log("Failed to login to pixiv",S)}finally{t(3,a=!1)}},h=()=>{r("login",{tokens:Be(Je)})};he(()=>h());const w=()=>t(2,s=!s),f=()=>t(2,s=!1);function g(){i=this.value,t(0,i)}function D(){o=this.value,t(1,o)}return[i,o,s,a,u,w,f,g,D,()=>u()]}class fn extends W{constructor(e){super(),Q(this,e,un,cn,X,{})}}function Me(n){let e,t=n[0].name+"",r,i;return{c(){e=_("a"),r=V(t),d(e,"href",i=`https://pinterest.com/${n[0].name}`),d(e,"target","_blank")},m(o,s){T(o,e,s),p(e,r)},p(o,s){s&1&&t!==(t=o[0].name+"")&&ae(r,t),s&1&&i!==(i=`https://pinterest.com/${o[0].name}`)&&d(e,"href",i)},d(o){o&&k(e)}}}function dn(n){let e,t=n[0]&&Me(n);return{c(){t&&t.c(),e=Pe()},m(r,i){t&&t.m(r,i),T(r,e,i)},p(r,[i]){r[0]?t?t.p(r,i):(t=Me(r),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:H,o:H,d(r){t&&t.d(r),r&&k(e)}}}function hn(n,e,t){let{token:r}=e,i;return he(async()=>{const o=new Qt(new pe({basePath:me.apiBase,accessToken:r.accessToken}));t(0,i=await o.userUserGet())}),n.$$set=o=>{"token"in o&&t(1,r=o.token)},[i,r]}class pn extends W{constructor(e){super(),Q(this,e,hn,dn,X,{token:1})}}function je(n){let e,t=n[0].name+"",r,i;return{c(){e=_("a"),r=V(t),d(e,"href",i=`https://reddit.com/u/${n[0].name}`),d(e,"target","_blank")},m(o,s){T(o,e,s),p(e,r)},p(o,s){s&1&&t!==(t=o[0].name+"")&&ae(r,t),s&1&&i!==(i=`https://reddit.com/u/${o[0].name}`)&&d(e,"href",i)},d(o){o&&k(e)}}}function mn(n){let e,t=n[0]&&je(n);return{c(){t&&t.c(),e=Pe()},m(r,i){t&&t.m(r,i),T(r,e,i)},p(r,[i]){r[0]?t?t.p(r,i):(t=je(r),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:H,o:H,d(r){t&&t.d(r),r&&k(e)}}}function wn(n,e,t){let{token:r}=e,i;return he(async()=>{const o=new Yt(new pe({basePath:me.apiBase,accessToken:r.accessToken}));t(0,i=await o.userUserGet())}),n.$$set=o=>{"token"in o&&t(1,r=o.token)},[i,r]}class gn extends W{constructor(e){super(),Q(this,e,wn,mn,X,{token:1})}}function ze(n){let e,t=n[0].name+"",r,i;return{c(){e=_("a"),r=V(t),d(e,"href",i=`https://twitter.com/${n[0].id}`),d(e,"target","_blank")},m(o,s){T(o,e,s),p(e,r)},p(o,s){s&1&&t!==(t=o[0].name+"")&&ae(r,t),s&1&&i!==(i=`https://twitter.com/${o[0].id}`)&&d(e,"href",i)},d(o){o&&k(e)}}}function _n(n){let e,t=n[0]&&ze(n);return{c(){t&&t.c(),e=Pe()},m(r,i){t&&t.m(r,i),T(r,e,i)},p(r,[i]){r[0]?t?t.p(r,i):(t=ze(r),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:H,o:H,d(r){t&&t.d(r),r&&k(e)}}}function yn(n,e,t){let{token:r}=e,i;return he(async()=>{const o=new Zt(new pe({basePath:me.apiBase,username:r.accessToken,password:r.accessSecret}));t(0,i=await o.userUserGet())}),n.$$set=o=>{"token"in o&&t(1,r=o.token)},[i,r]}class kn extends W{constructor(e){super(),Q(this,e,yn,_n,X,{token:1})}}function Ke(n,e,t){const r=n.slice();return r[8]=e[t],r}function Ve(n,e,t){const r=n.slice();return r[8]=e[t],r}function He(n,e,t){const r=n.slice();return r[8]=e[t],r}function Xe(n,e,t){const r=n.slice();return r[8]=e[t],r}function Qe(n){let e;return{c(){e=_("h1"),e.textContent="Twitter",d(e,"class","font-bold")},m(t,r){T(t,e,r)},d(t){t&&k(e)}}}function We(n){let e,t;return e=new kn({props:{token:n[8]}}),{c(){K(e.$$.fragment)},m(r,i){j(e,r,i),t=!0},p(r,i){const o={};i&1&&(o.token=r[8]),e.$set(o)},i(r){t||(P(e.$$.fragment,r),t=!0)},o(r){A(e.$$.fragment,r),t=!1},d(r){z(e,r)}}}function Ye(n){let e;return{c(){e=_("h1"),e.textContent="Reddit",d(e,"class","font-bold")},m(t,r){T(t,e,r)},d(t){t&&k(e)}}}function Ze(n){let e,t;return e=new gn({props:{token:n[8]}}),{c(){K(e.$$.fragment)},m(r,i){j(e,r,i),t=!0},p(r,i){const o={};i&2&&(o.token=r[8]),e.$set(o)},i(r){t||(P(e.$$.fragment,r),t=!0)},o(r){A(e.$$.fragment,r),t=!1},d(r){z(e,r)}}}function et(n){let e;return{c(){e=_("h1"),e.textContent="Pixiv",d(e,"class","font-bold")},m(t,r){T(t,e,r)},d(t){t&&k(e)}}}function tt(n){let e=n[8].accessToken+"",t;return{c(){t=V(e)},m(r,i){T(r,t,i)},p(r,i){i&4&&e!==(e=r[8].accessToken+"")&&ae(t,e)},d(r){r&&k(t)}}}function nt(n){let e;return{c(){e=_("h1"),e.textContent="Pinterest",d(e,"class","font-bold")},m(t,r){T(t,e,r)},d(t){t&&k(e)}}}function rt(n){let e,t;return e=new pn({props:{token:n[8]}}),{c(){K(e.$$.fragment)},m(r,i){j(e,r,i),t=!0},p(r,i){const o={};i&8&&(o.token=r[8]),e.$set(o)},i(r){t||(P(e.$$.fragment,r),t=!0)},o(r){A(e.$$.fragment,r),t=!1},d(r){z(e,r)}}}function bn(n){let e,t,r,i,o,s,a,u,h,w,f,g,D,$,q,S,le,O,I,re,J,y,C;r=new Se({props:{provider:"Twitter"}}),r.$on("login",n[4]),o=new Se({props:{provider:"Reddit"}}),o.$on("login",n[5]),a=new Se({props:{provider:"Pinterest"}}),a.$on("login",n[6]),h=new fn({}),h.$on("login",n[7]);let L=n[0].length&&Qe(),Y=n[0],b=[];for(let c=0;c<Y.length;c+=1)b[c]=We(Xe(n,Y,c));const wt=c=>A(b[c],1,1,()=>{b[c]=null});let B=n[1].length&&Ye(),Z=n[1],v=[];for(let c=0;c<Z.length;c+=1)v[c]=Ze(He(n,Z,c));const gt=c=>A(v[c],1,1,()=>{v[c]=null});let F=n[2].length&&et(),ie=n[2],G=[];for(let c=0;c<ie.length;c+=1)G[c]=tt(Ve(n,ie,c));let U=n[3].length&&nt(),ee=n[3],R=[];for(let c=0;c<ee.length;c+=1)R[c]=rt(Ke(n,ee,c));const _t=c=>A(R[c],1,1,()=>{R[c]=null});return{c(){e=_("main"),t=_("div"),K(r.$$.fragment),i=x(),K(o.$$.fragment),s=x(),K(a.$$.fragment),u=x(),K(h.$$.fragment),w=x(),f=_("div"),g=_("div"),L&&L.c(),D=x();for(let c=0;c<b.length;c+=1)b[c].c();$=x(),q=_("div"),B&&B.c(),S=x();for(let c=0;c<v.length;c+=1)v[c].c();le=x(),O=_("div"),F&&F.c(),I=x();for(let c=0;c<G.length;c+=1)G[c].c();re=x(),J=_("div"),U&&U.c(),y=x();for(let c=0;c<R.length;c+=1)R[c].c();d(t,"class","flex flex-row justify-center gap-4 border-b p-2"),d(g,"class","flex flex-col gap-2 items-center"),d(q,"class","flex flex-col gap-2 items-center"),d(O,"class","flex flex-col gap-2 items-center"),d(J,"class","flex flex-col gap-2 items-center"),d(f,"class","flex flex-col items-center gap-8"),d(e,"class","h-full flex flex-col gap-8")},m(c,m){T(c,e,m),p(e,t),j(r,t,null),p(t,i),j(o,t,null),p(t,s),j(a,t,null),p(t,u),j(h,t,null),p(e,w),p(e,f),p(f,g),L&&L.m(g,null),p(g,D);for(let l=0;l<b.length;l+=1)b[l].m(g,null);p(f,$),p(f,q),B&&B.m(q,null),p(q,S);for(let l=0;l<v.length;l+=1)v[l].m(q,null);p(f,le),p(f,O),F&&F.m(O,null),p(O,I);for(let l=0;l<G.length;l+=1)G[l].m(O,null);p(f,re),p(f,J),U&&U.m(J,null),p(J,y);for(let l=0;l<R.length;l+=1)R[l].m(J,null);C=!0},p(c,[m]){if(c[0].length?L||(L=Qe(),L.c(),L.m(g,D)):L&&(L.d(1),L=null),m&1){Y=c[0];let l;for(l=0;l<Y.length;l+=1){const M=Xe(c,Y,l);b[l]?(b[l].p(M,m),P(b[l],1)):(b[l]=We(M),b[l].c(),P(b[l],1),b[l].m(g,null))}for(xe(),l=Y.length;l<b.length;l+=1)wt(l);Ae()}if(c[1].length?B||(B=Ye(),B.c(),B.m(q,S)):B&&(B.d(1),B=null),m&2){Z=c[1];let l;for(l=0;l<Z.length;l+=1){const M=He(c,Z,l);v[l]?(v[l].p(M,m),P(v[l],1)):(v[l]=Ze(M),v[l].c(),P(v[l],1),v[l].m(q,null))}for(xe(),l=Z.length;l<v.length;l+=1)gt(l);Ae()}if(c[2].length?F||(F=et(),F.c(),F.m(O,I)):F&&(F.d(1),F=null),m&4){ie=c[2];let l;for(l=0;l<ie.length;l+=1){const M=Ve(c,ie,l);G[l]?G[l].p(M,m):(G[l]=tt(M),G[l].c(),G[l].m(O,null))}for(;l<G.length;l+=1)G[l].d(1);G.length=ie.length}if(c[3].length?U||(U=nt(),U.c(),U.m(J,y)):U&&(U.d(1),U=null),m&8){ee=c[3];let l;for(l=0;l<ee.length;l+=1){const M=Ke(c,ee,l);R[l]?(R[l].p(M,m),P(R[l],1)):(R[l]=rt(M),R[l].c(),P(R[l],1),R[l].m(J,null))}for(xe(),l=ee.length;l<R.length;l+=1)_t(l);Ae()}},i(c){if(!C){P(r.$$.fragment,c),P(o.$$.fragment,c),P(a.$$.fragment,c),P(h.$$.fragment,c);for(let m=0;m<Y.length;m+=1)P(b[m]);for(let m=0;m<Z.length;m+=1)P(v[m]);for(let m=0;m<ee.length;m+=1)P(R[m]);C=!0}},o(c){A(r.$$.fragment,c),A(o.$$.fragment,c),A(a.$$.fragment,c),A(h.$$.fragment,c),b=b.filter(Boolean);for(let m=0;m<b.length;m+=1)A(b[m]);v=v.filter(Boolean);for(let m=0;m<v.length;m+=1)A(v[m]);R=R.filter(Boolean);for(let m=0;m<R.length;m+=1)A(R[m]);C=!1},d(c){c&&k(e),z(r),z(o),z(a),z(h),L&&L.d(),we(b,c),B&&B.d(),we(v,c),F&&F.d(),we(G,c),U&&U.d(),we(R,c)}}}function vn(n,e,t){let r=[],i=[],o=[],s=[];return[r,i,o,s,f=>t(0,r=f.detail.tokens),f=>t(1,i=f.detail.tokens),f=>t(3,s=f.detail.tokens),f=>t(2,o=f.detail.tokens)]}class Rn extends W{constructor(e){super(),Q(this,e,vn,bn,X,{})}}new Rn({target:document.getElementById("app")});
