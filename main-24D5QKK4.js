import{$ as Ft,$a as vn,$b as $m,A as pm,Aa as Em,Ab as Ko,B as Is,Ba as Cm,Bb as ze,C as vr,Ca as Am,Cb as Ee,D as eh,Da as Tm,Db as Ai,E as mm,Ea as Dm,Eb as ti,F as Lc,Fa as Rm,Fb as Er,G as kc,Ga as Im,Gb as Ti,H as cn,Ha as Mn,Hb as Di,I as Ei,Ia as Sr,Ib as Qo,J as wn,Ja as Pm,Jb as Vs,K as Oe,Ka as wr,Kb as gt,L as _r,La as X,Lb as Cr,M as ns,Ma as ks,Mb as re,N as oe,Na as Om,Nb as nt,O as gn,Oa as Bc,Ob as Bt,P as gm,Pa as Zo,Pb as Vn,Q as Ce,Qa as di,Qb as rs,R as Fe,Ra as Jo,Rb as Gm,S as A,Sa as Qn,Sb as ni,T as yr,Ta as In,Tb as Hm,U as vm,Ua as bt,Ub as Ri,V as ln,Va as ih,Vb as Wm,W as Rn,Wa as Us,Wb as jm,X as et,Xa as Vc,Xb as Mt,Y as tt,Ya as Fm,Yb as ss,Z as Ci,Za as rh,Zb as Xm,_ as Ps,_a as _t,_b as zs,a as ie,aa as Je,ab as xt,ac as qm,b as Ot,ba as br,bb as sh,bc as _n,ca as _m,cb as En,cc as Ym,d as Rs,da as en,db as Nm,dc as Lt,e as dm,ea as mt,eb as oh,ec as os,f as Mi,fa as is,fb as Bs,fc as Hc,g as ft,ga as Os,gb as Lm,h as pn,ha as ym,hb as ah,i as Kn,ia as Ne,ib as km,j as Dn,ja as bm,jb as ei,k as Ve,ka as xm,kb as Bn,l as Ic,la as Un,lb as Dt,m as Qd,ma as ui,mb as Rt,n as hm,na as th,nb as Um,o as it,oa as Nt,ob as zc,p as Pc,pa as Sm,pb as Gc,q as mr,qa as qo,qb as St,r as Oc,ra as wm,rb as W,s as Fc,sa as Fs,sb as q,t as Nc,ta as Ns,tb as rt,u as gr,ua as Yo,ub as Bm,v as li,va as Mm,vb as Vm,w as Xo,wa as nh,wb as Mr,x as $o,xa as Uc,xb as tn,y as fm,ya as xr,yb as zm,z as mn,za as Ls,zb as ch}from"./chunk-EDUKWEMW.js";var Zm=null;function ii(){return Zm}function lh(i){Zm??=i}var ea=class{},Wc=(()=>{class i{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||i)};static \u0275prov=oe({token:i,factory:()=>A(Jm),providedIn:"platform"})}return i})();var Jm=(()=>{class i extends Wc{_location;_history;_doc=A(Je);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return ii().getBaseHref(this._doc)}onPopState(e){let n=ii().getGlobalEventTarget(this._doc,"window");return n.addEventListener("popstate",e,!1),()=>n.removeEventListener("popstate",e)}onHashChange(e){let n=ii().getGlobalEventTarget(this._doc,"window");return n.addEventListener("hashchange",e,!1),()=>n.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,n,r){this._history.pushState(e,n,r)}replaceState(e,n,r){this._history.replaceState(e,n,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(n){return new(n||i)};static \u0275prov=oe({token:i,factory:()=>new i,providedIn:"platform"})}return i})();function eg(i,t){return i?t?i.endsWith("/")?t.startsWith("/")?i+t.slice(1):i+t:t.startsWith("/")?i+t:`${i}/${t}`:i:t}function Km(i){let t=i.search(/#|\?|$/);return i[t-1]==="/"?i.slice(0,t-1)+i.slice(t):i}function Ar(i){return i&&i[0]!=="?"?`?${i}`:i}var Gs=(()=>{class i{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||i)};static \u0275prov=oe({token:i,factory:()=>A(Ny),providedIn:"root"})}return i})(),Fy=new Ce(""),Ny=(()=>{class i extends Gs{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??A(Je).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return eg(this._baseHref,e)}path(e=!1){let n=this._platformLocation.pathname+Ar(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${n}${r}`:n}pushState(e,n,r,s){let o=this.prepareExternalUrl(r+Ar(s));this._platformLocation.pushState(e,n,o)}replaceState(e,n,r,s){let o=this.prepareExternalUrl(r+Ar(s));this._platformLocation.replaceState(e,n,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(n){return new(n||i)(Fe(Wc),Fe(Fy,8))};static \u0275prov=oe({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Tr=(()=>{class i{_subject=new ft;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let n=this._locationStrategy.getBaseHref();this._basePath=Uy(Km(Qm(n))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,n=""){return this.path()==this.normalize(e+Ar(n))}normalize(e){return i.stripTrailingSlash(ky(this._basePath,Qm(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,n="",r=null){this._locationStrategy.pushState(r,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Ar(n)),r)}replaceState(e,n="",r=null){this._locationStrategy.replaceState(r,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Ar(n)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)}),()=>{let n=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",n){this._urlChangeListeners.forEach(r=>r(e,n))}subscribe(e,n,r){return this._subject.subscribe({next:e,error:n??void 0,complete:r??void 0})}static normalizeQueryParams=Ar;static joinWithSlash=eg;static stripTrailingSlash=Km;static \u0275fac=function(n){return new(n||i)(Fe(Gs))};static \u0275prov=oe({token:i,factory:()=>Ly(),providedIn:"root"})}return i})();function Ly(){return new Tr(Fe(Gs))}function ky(i,t){if(!i||!t.startsWith(i))return t;let e=t.substring(i.length);return e===""||["/",";","?","#"].includes(e[0])?e:t}function Qm(i){return i.replace(/\/index.html$/,"")}function Uy(i){if(new RegExp("^(https?:)?//").test(i)){let[,e]=i.split(/\/\/[^\/]+/);return e}return i}var ph=(function(i){return i[i.Decimal=0]="Decimal",i[i.Percent=1]="Percent",i[i.Currency=2]="Currency",i[i.Scientific=3]="Scientific",i})(ph||{});var Ii={Decimal:0,Group:1,List:2,PercentSign:3,PlusSign:4,MinusSign:5,Exponential:6,SuperscriptingExponent:7,PerMille:8,Infinity:9,NaN:10,TimeSeparator:11,CurrencyDecimal:12,CurrencyGroup:13};function Hs(i,t){let e=ch(i),n=e[Ko.NumberSymbols][t];if(typeof n>"u"){if(t===Ii.CurrencyDecimal)return e[Ko.NumberSymbols][Ii.Decimal];if(t===Ii.CurrencyGroup)return e[Ko.NumberSymbols][Ii.Group]}return n}function ng(i,t){return ch(i)[Ko.NumberFormats][t]}var By=/^(\d+)?\.((\d+)(-(\d+))?)?$/,tg=22,jc=".",ta="0",Vy=";",zy=",",uh="#";function Gy(i,t,e,n,r,s,o=!1){let a="",c=!1;if(!isFinite(i))a=Hs(e,Ii.Infinity);else{let l=jy(i);o&&(l=Wy(l));let u=t.minInt,h=t.minFrac,d=t.maxFrac;if(s){let x=s.match(By);if(x===null)throw new Oe(2306,!1);let M=x[1],w=x[3],D=x[5];M!=null&&(u=dh(M)),w!=null&&(h=dh(w)),D!=null?d=dh(D):w!=null&&h>d&&(d=h)}Xy(l,h,d);let p=l.digits,g=l.integerLen,b=l.exponent,m=[];for(c=p.every(x=>!x);g<u;g++)p.unshift(0);for(;g<0;g++)p.unshift(0);g>0?m=p.splice(g,p.length):(m=p,p=[0]);let f=[];for(p.length>=t.lgSize&&f.unshift(p.splice(-t.lgSize,p.length).join(""));p.length>t.gSize;)f.unshift(p.splice(-t.gSize,p.length).join(""));p.length&&f.unshift(p.join("")),a=f.join(Hs(e,n)),m.length&&(a+=Hs(e,r)+m.join("")),b&&(a+=Hs(e,Ii.Exponential)+"+"+b)}return i<0&&!c?a=t.negPre+a+t.negSuf:a=t.posPre+a+t.posSuf,a}function ig(i,t,e){let n=ng(t,ph.Decimal),r=Hy(n,Hs(t,Ii.MinusSign));return Gy(i,r,t,Ii.Group,Ii.Decimal,e)}function Hy(i,t="-"){let e={minInt:1,minFrac:0,maxFrac:0,posPre:"",posSuf:"",negPre:"",negSuf:"",gSize:0,lgSize:0},n=i.split(Vy),r=n[0],s=n[1],o=r.indexOf(jc)!==-1?r.split(jc):[r.substring(0,r.lastIndexOf(ta)+1),r.substring(r.lastIndexOf(ta)+1)],a=o[0],c=o[1]||"";e.posPre=a.substring(0,a.indexOf(uh));for(let u=0;u<c.length;u++){let h=c.charAt(u);h===ta?e.minFrac=e.maxFrac=u+1:h===uh?e.maxFrac=u+1:e.posSuf+=h}let l=a.split(zy);if(e.gSize=l[1]?l[1].length:0,e.lgSize=l[2]||l[1]?(l[2]||l[1]).length:0,s){let u=r.length-e.posPre.length-e.posSuf.length,h=s.indexOf(uh);e.negPre=s.substring(0,h).replace(/'/g,""),e.negSuf=s.slice(h+u).replace(/'/g,"")}else e.negPre=t+e.posPre,e.negSuf=e.posSuf;return e}function Wy(i){if(i.digits[0]===0)return i;let t=i.digits.length-i.integerLen;return i.exponent?i.exponent+=2:(t===0?i.digits.push(0,0):t===1&&i.digits.push(0),i.integerLen+=2),i}function jy(i){let t=Math.abs(i)+"",e=0,n,r,s,o,a;for((r=t.indexOf(jc))>-1&&(t=t.replace(jc,"")),(s=t.search(/e/i))>0?(r<0&&(r=s),r+=+t.slice(s+1),t=t.substring(0,s)):r<0&&(r=t.length),s=0;t.charAt(s)===ta;s++);if(s===(a=t.length))n=[0],r=1;else{for(a--;t.charAt(a)===ta;)a--;for(r-=s,n=[],o=0;s<=a;s++,o++)n[o]=Number(t.charAt(s))}return r>tg&&(n=n.splice(0,tg-1),e=r-1,r=1),{digits:n,exponent:e,integerLen:r}}function Xy(i,t,e){if(t>e)throw new Oe(2307,!1);let n=i.digits,r=n.length-i.integerLen,s=Math.min(Math.max(t,r),e),o=s+i.integerLen,a=n[o];if(o>0){n.splice(Math.max(i.integerLen,o));for(let h=o;h<n.length;h++)n[h]=0}else{r=Math.max(0,r),i.integerLen=1,n.length=Math.max(1,o=s+1),n[0]=0;for(let h=1;h<o;h++)n[h]=0}if(a>=5)if(o-1<0){for(let h=0;h>o;h--)n.unshift(0),i.integerLen++;n.unshift(1),i.integerLen++}else n[o-1]++;for(;r<Math.max(0,s);r++)n.push(0);let c=s!==0,l=t+i.integerLen,u=n.reduceRight(function(h,d,p,g){return d=d+h,g[p]=d<10?d:d-10,c&&(g[p]===0&&p>=l?g.pop():c=!1),d>=10?1:0},0);u&&(n.unshift(u),i.integerLen++)}function dh(i){let t=parseInt(i);if(isNaN(t))throw new Oe(2305,!1);return t}function rg(i,t){return new Oe(2100,!1)}var hh=class{createSubscription(t,e,n){return Mt(()=>t.subscribe({next:e,error:n}))}dispose(t){Mt(()=>t.unsubscribe())}},fh=class{createSubscription(t,e,n){return t.then(r=>e?.(r),r=>n?.(r)),{unsubscribe:()=>{e=null,n=null}}}dispose(t){t.unsubscribe()}},$y=new fh,qy=new hh,mh=(()=>{class i{_ref;_latestValue=null;markForCheckOnValueUpdate=!0;_subscription=null;_obj=null;_strategy=null;applicationErrorHandler=A(Os);constructor(e){this._ref=e}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(e){if(!this._obj){if(e)try{this.markForCheckOnValueUpdate=!1,this._subscribe(e)}finally{this.markForCheckOnValueUpdate=!0}return this._latestValue}return e!==this._obj?(this._dispose(),this.transform(e)):this._latestValue}_subscribe(e){this._obj=e,this._strategy=this._selectStrategy(e),this._subscription=this._strategy.createSubscription(e,n=>this._updateLatestValue(e,n),n=>this.applicationErrorHandler(n))}_selectStrategy(e){if(Bs(e))return $y;if(Lm(e))return qy;throw rg(i,e)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(e,n){e===this._obj&&(this._latestValue=n,this.markForCheckOnValueUpdate&&this._ref?.markForCheck())}static \u0275fac=function(n){return new(n||i)(bt(_n,16))};static \u0275pipe=sh({name:"async",type:i,pure:!1})}return i})();var na=(()=>{class i{_locale;constructor(e){this._locale=e}transform(e,n,r){if(!Yy(e))return null;r||=this._locale;try{let s=Zy(e);return ig(s,r,n)}catch(s){throw rg(i,s.message)}}static \u0275fac=function(n){return new(n||i)(bt(jm,16))};static \u0275pipe=sh({name:"number",type:i,pure:!0})}return i})();function Yy(i){return!(i==null||i===""||i!==i)}function Zy(i){if(typeof i=="string"&&!isNaN(Number(i)-parseFloat(i)))return Number(i);if(typeof i!="number")throw new Oe(2309,!1);return i}function Xc(i,t){t=encodeURIComponent(t);for(let e of i.split(";")){let n=e.indexOf("="),[r,s]=n==-1?[e,""]:[e.slice(0,n),e.slice(n+1)];if(r.trim()===t)return decodeURIComponent(s)}return null}var as=class{};var gh="browser";function ag(i){return i===gh}var cg=i=>i.src,Qy=new Ce("",{factory:()=>cg});var sg=/^((\s*\d+w\s*(,|$)){1,})$/;var eb=[1,2],tb=640;var nb=1920,ib=1080;var lg=(()=>{class i{imageLoader=A(Qy);config=rb(A(nh));renderer=A(In);imgElement=A(Nt).nativeElement;injector=A(Ft);destroyRef=A(br);lcpObserver;_renderedSrc=null;ngSrc;ngSrcset;sizes;width;height;decoding;loading;priority=!1;loaderParams;disableOptimizedSrcset=!1;fill=!1;placeholder;placeholderConfig;src;srcset;constructor(){this.destroyRef.onDestroy(()=>{this.renderer.removeAttribute(this.imgElement,"loading")})}ngOnInit(){Zo("NgOptimizedImage"),this.placeholder&&this.removePlaceholderOnLoad(this.imgElement),this.setHostAttributes()}setHostAttributes(){this.fill?this.sizes||="100vw":(this.setHostAttribute("width",this.width.toString()),this.setHostAttribute("height",this.height.toString())),this.setHostAttribute("loading",this.getLoadingBehavior()),this.setHostAttribute("fetchpriority",this.getFetchPriority()),this.setHostAttribute("decoding",this.getDecoding()),this.setHostAttribute("ng-img","true");let e=this.updateSrcAndSrcset();this.sizes?this.getLoadingBehavior()==="lazy"?this.setHostAttribute("sizes","auto, "+this.sizes):this.setHostAttribute("sizes",this.sizes):this.ngSrcset&&sg.test(this.ngSrcset)&&this.getLoadingBehavior()==="lazy"&&this.setHostAttribute("sizes","auto, 100vw")}ngOnChanges(e){if(e.ngSrc&&!e.ngSrc.isFirstChange()){let n=this._renderedSrc;this.updateSrcAndSrcset(!0)}}getAspectRatio(){return this.width&&this.height&&this.height!==0?this.width/this.height:null}callImageLoader(e){let n=e;this.loaderParams&&(n.loaderParams=this.loaderParams);let r=this.getAspectRatio();return r!==null&&n.width&&(n.height=Math.round(n.width/r)),this.imageLoader(n)}getLoadingBehavior(){return!this.priority&&this.loading!==void 0?this.loading:this.priority?"eager":"lazy"}getFetchPriority(){return this.priority?"high":"auto"}getDecoding(){return this.priority?"sync":this.decoding??"auto"}getRewrittenSrc(){if(!this._renderedSrc){let e={src:this.ngSrc};this._renderedSrc=this.callImageLoader(e)}return this._renderedSrc}getRewrittenSrcset(){let e=sg.test(this.ngSrcset);return this.ngSrcset.split(",").filter(r=>r!=="").map(r=>{r=r.trim();let s=e?parseFloat(r):parseFloat(r)*this.width;return`${this.callImageLoader({src:this.ngSrc,width:s})} ${r}`}).join(", ")}getAutomaticSrcset(){return this.sizes?this.getResponsiveSrcset():this.getFixedSrcset()}getResponsiveSrcset(){let{breakpoints:e}=this.config,n=e;return this.sizes?.trim()==="100vw"&&(n=e.filter(s=>s>=tb)),n.map(s=>`${this.callImageLoader({src:this.ngSrc,width:s})} ${s}w`).join(", ")}updateSrcAndSrcset(e=!1){e&&(this._renderedSrc=null);let n=this.getRewrittenSrc();this.setHostAttribute("src",n);let r;return this.ngSrcset?r=this.getRewrittenSrcset():this.shouldGenerateAutomaticSrcset()&&(r=this.getAutomaticSrcset()),r&&this.setHostAttribute("srcset",r),r}getFixedSrcset(){return eb.map(n=>`${this.callImageLoader({src:this.ngSrc,width:this.width*n})} ${n}x`).join(", ")}shouldGenerateAutomaticSrcset(){let e=!1;return this.sizes||(e=this.width>nb||this.height>ib),!this.disableOptimizedSrcset&&!this.srcset&&this.imageLoader!==cg&&!e}generatePlaceholder(e){let{placeholderResolution:n}=this.config;return e===!0?`url(${this.callImageLoader({src:this.ngSrc,width:n,isPlaceholder:!0})})`:typeof e=="string"?`url(${e})`:null}shouldBlurPlaceholder(e){return!e||!e.hasOwnProperty("blur")?!0:!!e.blur}removePlaceholderOnLoad(e){let n=()=>{let o=this.injector.get(_n);r(),s(),this.placeholder=!1,o.markForCheck()},r=this.renderer.listen(e,"load",n),s=this.renderer.listen(e,"error",n);this.destroyRef.onDestroy(()=>{r(),s()}),sb(e,n)}setHostAttribute(e,n){this.renderer.setAttribute(this.imgElement,e,n)}static \u0275fac=function(n){return new(n||i)};static \u0275dir=xt({type:i,selectors:[["img","ngSrc",""]],hostVars:18,hostBindings:function(n,r){n&2&&Vs("position",r.fill?"absolute":null)("width",r.fill?"100%":null)("height",r.fill?"100%":null)("inset",r.fill?"0":null)("background-size",r.placeholder?"cover":null)("background-position",r.placeholder?"50% 50%":null)("background-repeat",r.placeholder?"no-repeat":null)("background-image",r.placeholder?r.generatePlaceholder(r.placeholder):null)("filter",r.placeholder&&r.shouldBlurPlaceholder(r.placeholderConfig)?"blur(15px)":null)},inputs:{ngSrc:[2,"ngSrc","ngSrc",ob],ngSrcset:"ngSrcset",sizes:"sizes",width:[2,"width","width",os],height:[2,"height","height",os],decoding:"decoding",loading:"loading",priority:[2,"priority","priority",Lt],loaderParams:"loaderParams",disableOptimizedSrcset:[2,"disableOptimizedSrcset","disableOptimizedSrcset",Lt],fill:[2,"fill","fill",Lt],placeholder:[2,"placeholder","placeholder",ab],placeholderConfig:"placeholderConfig",src:"src",srcset:"srcset"},features:[Un]})}return i})();function rb(i){let t={};return i.breakpoints&&(t.breakpoints=i.breakpoints.sort((e,n)=>e-n)),Object.assign({},Mm,i,t)}function sb(i,t){i.complete&&i.naturalWidth&&t()}function ob(i){return typeof i=="string"?i:xr(i)}function ab(i){return typeof i=="string"&&i!=="true"&&i!=="false"&&i!==""?i:Lt(i)}var ia=class{_doc;constructor(t){this._doc=t}manager},$c=(()=>{class i extends ia{constructor(e){super(e)}supports(e){return!0}addEventListener(e,n,r,s){return e.addEventListener(n,r,s),()=>this.removeEventListener(e,n,r,s)}removeEventListener(e,n,r,s){return e.removeEventListener(n,r,s)}static \u0275fac=function(n){return new(n||i)(Fe(Je))};static \u0275prov=oe({token:i,factory:i.\u0275fac})}return i})(),Zc=new Ce(""),bh=(()=>{class i{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,n){this._zone=n,e.forEach(o=>{o.manager=this});let r=e.filter(o=>!(o instanceof $c));this._plugins=r.slice().reverse();let s=e.find(o=>o instanceof $c);s&&this._plugins.push(s)}addEventListener(e,n,r,s){return this._findPluginFor(n).addEventListener(e,n,r,s)}getZone(){return this._zone}_findPluginFor(e){let n=this._eventNameToPlugin.get(e);if(n)return n;if(n=this._plugins.find(s=>s.supports(e)),!n)throw new Oe(5101,!1);return this._eventNameToPlugin.set(e,n),n}static \u0275fac=function(n){return new(n||i)(Fe(Zc),Fe(mt))};static \u0275prov=oe({token:i,factory:i.\u0275fac})}return i})(),vh="ng-app-id";function ug(i){for(let t of i)t.remove()}function dg(i,t){let e=t.createElement("style");return e.textContent=i,e}function lb(i,t,e,n){let r=i.head?.querySelectorAll(`style[${vh}="${t}"],link[${vh}="${t}"]`);if(r)for(let s of r)s.removeAttribute(vh),s instanceof HTMLLinkElement?n.set(s.href.slice(s.href.lastIndexOf("/")+1),{usage:0,elements:[s]}):s.textContent&&e.set(s.textContent,{usage:0,elements:[s]})}function yh(i,t){let e=t.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",i),e}var xh=(()=>{class i{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,n,r,s={}){this.doc=e,this.appId=n,this.nonce=r,lb(e,n,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,n){for(let r of e)this.addUsage(r,this.inline,dg);n?.forEach(r=>this.addUsage(r,this.external,yh))}removeStyles(e,n){for(let r of e)this.removeUsage(r,this.inline);n?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,n,r){let s=n.get(e);s?s.usage++:n.set(e,{usage:1,elements:[...this.hosts].map(o=>this.addElement(o,r(e,this.doc)))})}removeUsage(e,n){let r=n.get(e);r&&(r.usage--,r.usage<=0&&(ug(r.elements),n.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])ug(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[n,{elements:r}]of this.inline)r.push(this.addElement(e,dg(n,this.doc)));for(let[n,{elements:r}]of this.external)r.push(this.addElement(e,yh(n,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,n){return this.nonce&&n.setAttribute("nonce",this.nonce),e.appendChild(n)}static \u0275fac=function(n){return new(n||i)(Fe(Je),Fe(qo),Fe(Yo,8),Fe(Fs))};static \u0275prov=oe({token:i,factory:i.\u0275fac})}return i})(),_h={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Sh=/%COMP%/g;var fg="%COMP%",ub=`_nghost-${fg}`,db=`_ngcontent-${fg}`,hb=!0,fb=new Ce("",{factory:()=>hb});function pb(i){return db.replace(Sh,i)}function mb(i){return ub.replace(Sh,i)}function pg(i,t){return t.map(e=>e.replace(Sh,i))}var oa=(()=>{class i{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,n,r,s,o,a,c=null,l=null){this.eventManager=e,this.sharedStylesHost=n,this.appId=r,this.removeStylesOnCompDestroy=s,this.doc=o,this.ngZone=a,this.nonce=c,this.tracingService=l,this.defaultRenderer=new ra(e,o,a,this.tracingService)}createRenderer(e,n){if(!e||!n)return this.defaultRenderer;let r=this.getOrCreateRenderer(e,n);return r instanceof Yc?r.applyToHost(e):r instanceof sa&&r.applyStyles(),r}getOrCreateRenderer(e,n){let r=this.rendererByCompId,s=r.get(n.id);if(!s){let o=this.doc,a=this.ngZone,c=this.eventManager,l=this.sharedStylesHost,u=this.removeStylesOnCompDestroy,h=this.tracingService;switch(n.encapsulation){case Uc.Emulated:s=new Yc(c,l,n,this.appId,u,o,a,h);break;case Uc.ShadowDom:return new qc(c,e,n,o,a,this.nonce,h,l);case Uc.ExperimentalIsolatedShadowDom:return new qc(c,e,n,o,a,this.nonce,h);default:s=new sa(c,l,n,u,o,a,h);break}r.set(n.id,s)}return s}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(n){return new(n||i)(Fe(bh),Fe(xh),Fe(qo),Fe(fb),Fe(Je),Fe(mt),Fe(Yo),Fe(Bc,8))};static \u0275prov=oe({token:i,factory:i.\u0275fac})}return i})(),ra=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(t,e,n,r){this.eventManager=t,this.doc=e,this.ngZone=n,this.tracingService=r}destroy(){}destroyNode=null;createElement(t,e){return e?this.doc.createElementNS(_h[e]||e,t):this.doc.createElement(t)}createComment(t){return this.doc.createComment(t)}createText(t){return this.doc.createTextNode(t)}appendChild(t,e){(hg(t)?t.content:t).appendChild(e)}insertBefore(t,e,n){t&&(hg(t)?t.content:t).insertBefore(e,n)}removeChild(t,e){e.remove()}selectRootElement(t,e){let n=typeof t=="string"?this.doc.querySelector(t):t;if(!n)throw new Oe(-5104,!1);return e||(n.textContent=""),n}parentNode(t){return t.parentNode}nextSibling(t){return t.nextSibling}setAttribute(t,e,n,r){if(r){e=r+":"+e;let s=_h[r];s?t.setAttributeNS(s,e,n):t.setAttribute(e,n)}else t.setAttribute(e,n)}removeAttribute(t,e,n){if(n){let r=_h[n];r?t.removeAttributeNS(r,e):t.removeAttribute(`${n}:${e}`)}else t.removeAttribute(e)}addClass(t,e){t.classList.add(e)}removeClass(t,e){t.classList.remove(e)}setStyle(t,e,n,r){r&(ks.DashCase|ks.Important)?t.style.setProperty(e,n,r&ks.Important?"important":""):t.style[e]=n}removeStyle(t,e,n){n&ks.DashCase?t.style.removeProperty(e):t.style[e]=""}setProperty(t,e,n){t!=null&&(t[e]=n)}setValue(t,e){t.nodeValue=e}listen(t,e,n,r){if(typeof t=="string"&&(t=ii().getGlobalEventTarget(this.doc,t),!t))throw new Oe(5102,!1);let s=this.decoratePreventDefault(n);return this.tracingService?.wrapEventListener&&(s=this.tracingService.wrapEventListener(t,e,s)),this.eventManager.addEventListener(t,e,s,r)}decoratePreventDefault(t){return e=>{if(e==="__ngUnwrap__")return t;t(e)===!1&&e.preventDefault()}}};function hg(i){return i.tagName==="TEMPLATE"&&i.content!==void 0}var qc=class extends ra{hostEl;sharedStylesHost;shadowRoot;constructor(t,e,n,r,s,o,a,c){super(t,r,s,a),this.hostEl=e,this.sharedStylesHost=c,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let l=n.styles;l=pg(n.id,l);for(let h of l){let d=document.createElement("style");o&&d.setAttribute("nonce",o),d.textContent=h,this.shadowRoot.appendChild(d)}let u=n.getExternalStyles?.();if(u)for(let h of u){let d=yh(h,r);o&&d.setAttribute("nonce",o),this.shadowRoot.appendChild(d)}}nodeOrShadowRoot(t){return t===this.hostEl?this.shadowRoot:t}appendChild(t,e){return super.appendChild(this.nodeOrShadowRoot(t),e)}insertBefore(t,e,n){return super.insertBefore(this.nodeOrShadowRoot(t),e,n)}removeChild(t,e){return super.removeChild(null,e)}parentNode(t){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},sa=class extends ra{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(t,e,n,r,s,o,a,c){super(t,s,o,a),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let l=n.styles;this.styles=c?pg(c,l):l,this.styleUrls=n.getExternalStyles?.(c)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&Om.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},Yc=class extends sa{contentAttr;hostAttr;constructor(t,e,n,r,s,o,a,c){let l=r+"-"+n.id;super(t,e,n,s,o,a,c,l),this.contentAttr=pb(l),this.hostAttr=mb(l)}applyToHost(t){this.applyStyles(),this.setAttribute(t,this.hostAttr,"")}createElement(t,e){let n=super.createElement(t,e);return super.setAttribute(n,this.contentAttr,""),n}};var Jc=class i extends ea{supportsDOMEvents=!0;static makeCurrent(){lh(new i)}onAndCancel(t,e,n,r){return t.addEventListener(e,n,r),()=>{t.removeEventListener(e,n,r)}}dispatchEvent(t,e){t.dispatchEvent(e)}remove(t){t.remove()}createElement(t,e){return e=e||this.getDefaultDocument(),e.createElement(t)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(t){return t.nodeType===Node.ELEMENT_NODE}isShadowRoot(t){return t instanceof DocumentFragment}getGlobalEventTarget(t,e){return e==="window"?window:e==="document"?t:e==="body"?t.body:null}getBaseHref(t){let e=vb();return e==null?null:_b(e)}resetBaseElement(){aa=null}getUserAgent(){return window.navigator.userAgent}getCookie(t){return Xc(document.cookie,t)}},aa=null;function vb(){return aa=aa||document.head.querySelector("base"),aa?aa.getAttribute("href"):null}function _b(i){return new URL(i,document.baseURI).pathname}var yb=(()=>{class i{build(){return new XMLHttpRequest}static \u0275fac=function(n){return new(n||i)};static \u0275prov=oe({token:i,factory:i.\u0275fac})}return i})(),mg=["alt","control","meta","shift"],bb={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},xb={alt:i=>i.altKey,control:i=>i.ctrlKey,meta:i=>i.metaKey,shift:i=>i.shiftKey},gg=(()=>{class i extends ia{constructor(e){super(e)}supports(e){return i.parseEventName(e)!=null}addEventListener(e,n,r,s){let o=i.parseEventName(n),a=i.eventCallback(o.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>ii().onAndCancel(e,o.domEventName,a,s))}static parseEventName(e){let n=e.toLowerCase().split("."),r=n.shift();if(n.length===0||!(r==="keydown"||r==="keyup"))return null;let s=i._normalizeKey(n.pop()),o="",a=n.indexOf("code");if(a>-1&&(n.splice(a,1),o="code."),mg.forEach(l=>{let u=n.indexOf(l);u>-1&&(n.splice(u,1),o+=l+".")}),o+=s,n.length!=0||s.length===0)return null;let c={};return c.domEventName=r,c.fullKey=o,c}static matchEventFullKeyCode(e,n){let r=bb[e.key]||e.key,s="";return n.indexOf("code.")>-1&&(r=e.code,s="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),mg.forEach(o=>{if(o!==r){let a=xb[o];a(e)&&(s+=o+".")}}),s+=r,s===n)}static eventCallback(e,n,r){return s=>{i.matchEventFullKeyCode(s,e)&&r.runGuarded(()=>n(s))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(n){return new(n||i)(Fe(Je))};static \u0275prov=oe({token:i,factory:i.\u0275fac})}return i})();async function wh(i,t,e){let n=ie({rootComponent:i},Sb(t,e));return Ym(n)}function Sb(i,t){return{platformRef:t?.platformRef,appProviders:[...Ab,...i?.providers??[]],platformProviders:Cb}}function wb(){Jc.makeCurrent()}function Mb(){return new is}function Eb(){return Sm(document),document}var Cb=[{provide:Fs,useValue:gh},{provide:wm,useValue:wb,multi:!0},{provide:Je,useFactory:Eb}];var Ab=[{provide:vm,useValue:"root"},{provide:is,useFactory:Mb},{provide:Zc,useClass:$c,multi:!0},{provide:Zc,useClass:gg,multi:!0},oa,xh,bh,{provide:Qn,useExisting:oa},{provide:as,useClass:yb},[]];var Dr=class i{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(t){t?typeof t=="string"?this.lazyInit=()=>{this.headers=new Map,t.split(`
`).forEach(e=>{let n=e.indexOf(":");if(n>0){let r=e.slice(0,n),s=e.slice(n+1).trim();this.addHeaderEntry(r,s)}})}:typeof Headers<"u"&&t instanceof Headers?(this.headers=new Map,t.forEach((e,n)=>{this.addHeaderEntry(n,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(t).forEach(([e,n])=>{this.setHeaderEntries(e,n)})}:this.headers=new Map}has(t){return this.init(),this.headers.has(t.toLowerCase())}get(t){this.init();let e=this.headers.get(t.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(t){return this.init(),this.headers.get(t.toLowerCase())||null}append(t,e){return this.clone({name:t,value:e,op:"a"})}set(t,e){return this.clone({name:t,value:e,op:"s"})}delete(t,e){return this.clone({name:t,value:e,op:"d"})}maybeSetNormalizedName(t,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,t)}init(){this.lazyInit&&(this.lazyInit instanceof i?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(t=>this.applyUpdate(t)),this.lazyUpdate=null))}copyFrom(t){t.init(),Array.from(t.headers.keys()).forEach(e=>{this.headers.set(e,t.headers.get(e)),this.normalizedNames.set(e,t.normalizedNames.get(e))})}clone(t){let e=new i;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof i?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([t]),e}applyUpdate(t){let e=t.name.toLowerCase();switch(t.op){case"a":case"s":let n=t.value;if(typeof n=="string"&&(n=[n]),n.length===0)return;this.maybeSetNormalizedName(t.name,e);let r=(t.op==="a"?this.headers.get(e):void 0)||[];r.push(...n),this.headers.set(e,r);break;case"d":let s=t.value;if(!s)this.headers.delete(e),this.normalizedNames.delete(e);else{let o=this.headers.get(e);if(!o)return;o=o.filter(a=>s.indexOf(a)===-1),o.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,o)}break}}addHeaderEntry(t,e){let n=t.toLowerCase();this.maybeSetNormalizedName(t,n),this.headers.has(n)?this.headers.get(n).push(e):this.headers.set(n,[e])}setHeaderEntries(t,e){let n=(Array.isArray(e)?e:[e]).map(s=>s.toString()),r=t.toLowerCase();this.headers.set(r,n),this.maybeSetNormalizedName(t,r)}forEach(t){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>t(this.normalizedNames.get(e),this.headers.get(e)))}};var Eh=class{map=new Map;set(t,e){return this.map.set(t,e),this}get(t){return this.map.has(t)||this.map.set(t,t.defaultValue()),this.map.get(t)}delete(t){return this.map.delete(t),this}has(t){return this.map.has(t)}keys(){return this.map.keys()}},Ch=class{encodeKey(t){return vg(t)}encodeValue(t){return vg(t)}decodeKey(t){return decodeURIComponent(t)}decodeValue(t){return decodeURIComponent(t)}};function Tb(i,t){let e=new Map;return i.length>0&&i.replace(/^\?/,"").split("&").forEach(r=>{let s=r.indexOf("="),[o,a]=s==-1?[t.decodeKey(r),""]:[t.decodeKey(r.slice(0,s)),t.decodeValue(r.slice(s+1))],c=e.get(o)||[];c.push(a),e.set(o,c)}),e}var Db=/%(\d[a-f0-9])/gi,Rb={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function vg(i){return encodeURIComponent(i).replace(Db,(t,e)=>Rb[e]??t)}function Kc(i){return`${i}`}var Yi=class i{map;encoder;updates=null;cloneFrom=null;constructor(t={}){if(this.encoder=t.encoder||new Ch,t.fromString){if(t.fromObject)throw new Oe(2805,!1);this.map=Tb(t.fromString,this.encoder)}else t.fromObject?(this.map=new Map,Object.keys(t.fromObject).forEach(e=>{let n=t.fromObject[e],r=Array.isArray(n)?n.map(Kc):[Kc(n)];this.map.set(e,r)})):this.map=null}has(t){return this.init(),this.map.has(t)}get(t){this.init();let e=this.map.get(t);return e?e[0]:null}getAll(t){return this.init(),this.map.get(t)||null}keys(){return this.init(),Array.from(this.map.keys())}append(t,e){return this.clone({param:t,value:e,op:"a"})}appendAll(t){let e=[];return Object.keys(t).forEach(n=>{let r=t[n];Array.isArray(r)?r.forEach(s=>{e.push({param:n,value:s,op:"a"})}):e.push({param:n,value:r,op:"a"})}),this.clone(e)}set(t,e){return this.clone({param:t,value:e,op:"s"})}delete(t,e){return this.clone({param:t,value:e,op:"d"})}toString(){return this.init(),this.keys().map(t=>{let e=this.encoder.encodeKey(t);return this.map.get(t).map(n=>e+"="+this.encoder.encodeValue(n)).join("&")}).filter(t=>t!=="").join("&")}clone(t){let e=new i({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(t),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(t=>this.map.set(t,this.cloneFrom.map.get(t))),this.updates.forEach(t=>{switch(t.op){case"a":case"s":let e=(t.op==="a"?this.map.get(t.param):void 0)||[];e.push(Kc(t.value)),this.map.set(t.param,e);break;case"d":if(t.value!==void 0){let n=this.map.get(t.param)||[],r=n.indexOf(Kc(t.value));r!==-1&&n.splice(r,1),n.length>0?this.map.set(t.param,n):this.map.delete(t.param)}else{this.map.delete(t.param);break}}}),this.cloneFrom=this.updates=null)}};function Ib(i){switch(i){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function _g(i){return typeof ArrayBuffer<"u"&&i instanceof ArrayBuffer}function yg(i){return typeof Blob<"u"&&i instanceof Blob}function bg(i){return typeof FormData<"u"&&i instanceof FormData}function Pb(i){return typeof URLSearchParams<"u"&&i instanceof URLSearchParams}var xg="Content-Type",Sg="Accept",wg="text/plain",Mg="application/json",Ob=`${Mg}, ${wg}, */*`,Ws=class i{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(t,e,n,r){this.url=e,this.method=t.toUpperCase();let s;if(Ib(this.method)||r?(this.body=n!==void 0?n:null,s=r):s=n,s){if(this.reportProgress=!!s.reportProgress,this.withCredentials=!!s.withCredentials,this.keepalive=!!s.keepalive,s.responseType&&(this.responseType=s.responseType),s.headers&&(this.headers=s.headers),s.context&&(this.context=s.context),s.params&&(this.params=s.params),s.priority&&(this.priority=s.priority),s.cache&&(this.cache=s.cache),s.credentials&&(this.credentials=s.credentials),typeof s.timeout=="number"){if(s.timeout<1||!Number.isInteger(s.timeout))throw new Oe(2822,"");this.timeout=s.timeout}s.mode&&(this.mode=s.mode),s.redirect&&(this.redirect=s.redirect),s.integrity&&(this.integrity=s.integrity),s.referrer&&(this.referrer=s.referrer),s.referrerPolicy&&(this.referrerPolicy=s.referrerPolicy),this.transferCache=s.transferCache}if(this.headers??=new Dr,this.context??=new Eh,!this.params)this.params=new Yi,this.urlWithParams=e;else{let o=this.params.toString();if(o.length===0)this.urlWithParams=e;else{let a=e.indexOf("?"),c=a===-1?"?":a<e.length-1?"&":"";this.urlWithParams=e+c+o}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||_g(this.body)||yg(this.body)||bg(this.body)||Pb(this.body)?this.body:this.body instanceof Yi?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||bg(this.body)?null:yg(this.body)?this.body.type||null:_g(this.body)?null:typeof this.body=="string"?wg:this.body instanceof Yi?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?Mg:null}clone(t={}){let e=t.method||this.method,n=t.url||this.url,r=t.responseType||this.responseType,s=t.keepalive??this.keepalive,o=t.priority||this.priority,a=t.cache||this.cache,c=t.mode||this.mode,l=t.redirect||this.redirect,u=t.credentials||this.credentials,h=t.referrer||this.referrer,d=t.integrity||this.integrity,p=t.referrerPolicy||this.referrerPolicy,g=t.transferCache??this.transferCache,b=t.timeout??this.timeout,m=t.body!==void 0?t.body:this.body,f=t.withCredentials??this.withCredentials,x=t.reportProgress??this.reportProgress,M=t.headers||this.headers,w=t.params||this.params,D=t.context??this.context;return t.setHeaders!==void 0&&(M=Object.keys(t.setHeaders).reduce((E,R)=>E.set(R,t.setHeaders[R]),M)),t.setParams&&(w=Object.keys(t.setParams).reduce((E,R)=>E.set(R,t.setParams[R]),w)),new i(e,n,m,{params:w,headers:M,context:D,reportProgress:x,responseType:r,withCredentials:f,transferCache:g,keepalive:s,cache:a,priority:o,timeout:b,mode:c,redirect:l,credentials:u,referrer:h,integrity:d,referrerPolicy:p})}},cs=(function(i){return i[i.Sent=0]="Sent",i[i.UploadProgress=1]="UploadProgress",i[i.ResponseHeader=2]="ResponseHeader",i[i.DownloadProgress=3]="DownloadProgress",i[i.Response=4]="Response",i[i.User=5]="User",i})(cs||{}),ca=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(t,e=200,n="OK"){this.headers=t.headers||new Dr,this.status=t.status!==void 0?t.status:e,this.statusText=t.statusText||n,this.url=t.url||null,this.redirected=t.redirected,this.responseType=t.responseType,this.ok=this.status>=200&&this.status<300}},Ah=class i extends ca{constructor(t={}){super(t)}type=cs.ResponseHeader;clone(t={}){return new i({headers:t.headers||this.headers,status:t.status!==void 0?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}},la=class i extends ca{body;constructor(t={}){super(t),this.body=t.body!==void 0?t.body:null}type=cs.Response;clone(t={}){return new i({body:t.body!==void 0?t.body:this.body,headers:t.headers||this.headers,status:t.status!==void 0?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0,redirected:t.redirected??this.redirected,responseType:t.responseType??this.responseType})}},js=class extends ca{name="HttpErrorResponse";message;error;ok=!1;constructor(t){super(t,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${t.url||"(unknown url)"}`:this.message=`Http failure response for ${t.url||"(unknown url)"}: ${t.status} ${t.statusText}`,this.error=t.error||null}},Fb=200,Nb=204;var Lb=/^\)\]\}',?\n/;var kb=(()=>{class i{xhrFactory;tracingService=A(Bc,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new Oe(-2800,!1);let n=this.xhrFactory;return Ve(null).pipe(cn(()=>new Mi(s=>{let o=n.build();if(o.open(e.method,e.urlWithParams),e.withCredentials&&(o.withCredentials=!0),e.headers.forEach((m,f)=>o.setRequestHeader(m,f.join(","))),e.headers.has(Sg)||o.setRequestHeader(Sg,Ob),!e.headers.has(xg)){let m=e.detectContentTypeHeader();m!==null&&o.setRequestHeader(xg,m)}if(e.timeout&&(o.timeout=e.timeout),e.responseType){let m=e.responseType.toLowerCase();o.responseType=m!=="json"?m:"text"}let a=e.serializeBody(),c=null,l=()=>{if(c!==null)return c;let m=o.statusText||"OK",f=new Dr(o.getAllResponseHeaders()),x=o.responseURL||e.url;return c=new Ah({headers:f,status:o.status,statusText:m,url:x}),c},u=this.maybePropagateTrace(()=>{let{headers:m,status:f,statusText:x,url:M}=l(),w=null;f!==Nb&&(w=typeof o.response>"u"?o.responseText:o.response),f===0&&(f=w?Fb:0);let D=f>=200&&f<300;if(e.responseType==="json"&&typeof w=="string"){let E=w;w=w.replace(Lb,"");try{w=w!==""?JSON.parse(w):null}catch(R){w=E,D&&(D=!1,w={error:R,text:w})}}D?(s.next(new la({body:w,headers:m,status:f,statusText:x,url:M||void 0})),s.complete()):s.error(new js({error:w,headers:m,status:f,statusText:x,url:M||void 0}))}),h=this.maybePropagateTrace(m=>{let{url:f}=l(),x=new js({error:m,status:o.status||0,statusText:o.statusText||"Unknown Error",url:f||void 0});s.error(x)}),d=h;e.timeout&&(d=this.maybePropagateTrace(m=>{let{url:f}=l(),x=new js({error:new DOMException("Request timed out","TimeoutError"),status:o.status||0,statusText:o.statusText||"Request timeout",url:f||void 0});s.error(x)}));let p=!1,g=this.maybePropagateTrace(m=>{p||(s.next(l()),p=!0);let f={type:cs.DownloadProgress,loaded:m.loaded};m.lengthComputable&&(f.total=m.total),e.responseType==="text"&&o.responseText&&(f.partialText=o.responseText),s.next(f)}),b=this.maybePropagateTrace(m=>{let f={type:cs.UploadProgress,loaded:m.loaded};m.lengthComputable&&(f.total=m.total),s.next(f)});return o.addEventListener("load",u),o.addEventListener("error",h),o.addEventListener("timeout",d),o.addEventListener("abort",h),e.reportProgress&&(o.addEventListener("progress",g),a!==null&&o.upload&&o.upload.addEventListener("progress",b)),o.send(a),s.next({type:cs.Sent}),()=>{o.removeEventListener("error",h),o.removeEventListener("abort",h),o.removeEventListener("load",u),o.removeEventListener("timeout",d),e.reportProgress&&(o.removeEventListener("progress",g),a!==null&&o.upload&&o.upload.removeEventListener("progress",b)),o.readyState!==o.DONE&&o.abort()}})))}static \u0275fac=function(n){return new(n||i)(Fe(as))};static \u0275prov=oe({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function Ub(i,t){return t(i)}function Bb(i,t,e){return(n,r)=>Rn(e,()=>t(n,s=>i(s,r)))}var Vb=new Ce("",{factory:()=>[]}),Eg=new Ce(""),zb=new Ce("",{factory:()=>!0});var Gb=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275prov=oe({token:i,factory:function(n){let r=null;return n?r=new(n||i):r=Fe(kb),r},providedIn:"root"})}return i})();var Hb=(()=>{class i{backend;injector;chain=null;pendingTasks=A(xm);contributeToStability=A(zb);constructor(e,n){this.backend=e,this.injector=n}handle(e){if(this.chain===null){let n=Array.from(new Set([...this.injector.get(Vb),...this.injector.get(Eg,[])]));this.chain=n.reduceRight((r,s)=>Bb(r,s,this.injector),Ub)}if(this.contributeToStability){let n=this.pendingTasks.add();return this.chain(e,r=>this.backend.handle(r)).pipe(Is(n))}else return this.chain(e,n=>this.backend.handle(n))}static \u0275fac=function(n){return new(n||i)(Fe(Gb),Fe(ln))};static \u0275prov=oe({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Wb=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275prov=oe({token:i,factory:function(n){let r=null;return n?r=new(n||i):r=Fe(Hb),r},providedIn:"root"})}return i})();function Mh(i,t){return{body:t,headers:i.headers,context:i.context,observe:i.observe,params:i.params,reportProgress:i.reportProgress,responseType:i.responseType,withCredentials:i.withCredentials,credentials:i.credentials,transferCache:i.transferCache,timeout:i.timeout,keepalive:i.keepalive,priority:i.priority,cache:i.cache,mode:i.mode,redirect:i.redirect,integrity:i.integrity,referrer:i.referrer,referrerPolicy:i.referrerPolicy}}var Th=(()=>{class i{handler;constructor(e){this.handler=e}request(e,n,r={}){let s;if(e instanceof Ws)s=e;else{let c;r.headers instanceof Dr?c=r.headers:c=new Dr(r.headers);let l;r.params&&(r.params instanceof Yi?l=r.params:l=new Yi({fromObject:r.params})),s=new Ws(e,n,r.body!==void 0?r.body:null,{headers:c,context:r.context,params:l,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache,keepalive:r.keepalive,priority:r.priority,cache:r.cache,mode:r.mode,redirect:r.redirect,credentials:r.credentials,referrer:r.referrer,referrerPolicy:r.referrerPolicy,integrity:r.integrity,timeout:r.timeout})}let o=Ve(s).pipe($o(c=>this.handler.handle(c)));if(e instanceof Ws||r.observe==="events")return o;let a=o.pipe(li(c=>c instanceof la));switch(r.observe||"body"){case"body":switch(s.responseType){case"arraybuffer":return a.pipe(it(c=>{if(c.body!==null&&!(c.body instanceof ArrayBuffer))throw new Oe(2806,!1);return c.body}));case"blob":return a.pipe(it(c=>{if(c.body!==null&&!(c.body instanceof Blob))throw new Oe(2807,!1);return c.body}));case"text":return a.pipe(it(c=>{if(c.body!==null&&typeof c.body!="string")throw new Oe(2808,!1);return c.body}));default:return a.pipe(it(c=>c.body))}case"response":return a;default:throw new Oe(2809,!1)}}delete(e,n={}){return this.request("DELETE",e,n)}get(e,n={}){return this.request("GET",e,n)}head(e,n={}){return this.request("HEAD",e,n)}jsonp(e,n){return this.request("JSONP",e,{params:new Yi().append(n,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,n={}){return this.request("OPTIONS",e,n)}patch(e,n,r={}){return this.request("PATCH",e,Mh(r,n))}post(e,n,r={}){return this.request("POST",e,Mh(r,n))}put(e,n,r={}){return this.request("PUT",e,Mh(r,n))}static \u0275fac=function(n){return new(n||i)(Fe(Wb))};static \u0275prov=oe({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Cg=(()=>{class i{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(n){return new(n||i)(Fe(Je))};static \u0275prov=oe({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var ua=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275prov=oe({token:i,factory:function(n){let r=null;return n?r=new(n||i):r=Fe(qb),r},providedIn:"root"})}return i})(),qb=(()=>{class i extends ua{_doc;constructor(e){super(),this._doc=e}sanitize(e,n){if(n==null)return null;switch(e){case Mn.NONE:return n;case Mn.HTML:return Ls(n,"HTML")?xr(n):Im(this._doc,String(n)).toString();case Mn.STYLE:return Ls(n,"Style")?xr(n):n;case Mn.SCRIPT:if(Ls(n,"Script"))return xr(n);throw new Oe(5200,!1);case Mn.URL:return Ls(n,"URL")?xr(n):Rm(String(n));case Mn.RESOURCE_URL:if(Ls(n,"ResourceURL"))return xr(n);throw new Oe(5201,!1);default:throw new Oe(5202,!1)}}bypassSecurityTrustHtml(e){return Em(e)}bypassSecurityTrustStyle(e){return Cm(e)}bypassSecurityTrustScript(e){return Am(e)}bypassSecurityTrustUrl(e){return Tm(e)}bypassSecurityTrustResourceUrl(e){return Dm(e)}static \u0275fac=function(n){return new(n||i)(Fe(Je))};static \u0275prov=oe({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var He="primary",Ma=Symbol("RouteTitle"),Oh=class{params;constructor(t){this.params=t||{}}has(t){return Object.prototype.hasOwnProperty.call(this.params,t)}get(t){if(this.has(t)){let e=this.params[t];return Array.isArray(e)?e[0]:e}return null}getAll(t){if(this.has(t)){let e=this.params[t];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function us(i){return new Oh(i)}function Dh(i,t,e){for(let n=0;n<i.length;n++){let r=i[n],s=t[n];if(r[0]===":")e[r.substring(1)]=s;else if(r!==s.path)return!1}return!0}function Ng(i,t,e){let n=e.path.split("/"),r=n.indexOf("**");if(r===-1){if(n.length>i.length||e.pathMatch==="full"&&(t.hasChildren()||n.length<i.length))return null;let c={},l=i.slice(0,n.length);return Dh(n,l,c)?{consumed:l,posParams:c}:null}if(r!==n.lastIndexOf("**"))return null;let s=n.slice(0,r),o=n.slice(r+1);if(s.length+o.length>i.length||e.pathMatch==="full"&&t.hasChildren()&&e.path!=="**")return null;let a={};return!Dh(s,i.slice(0,s.length),a)||!Dh(o,i.slice(i.length-o.length),a)?null:{consumed:i,posParams:a}}function rl(i){return new Promise((t,e)=>{i.pipe(vr()).subscribe({next:n=>t(n),error:n=>e(n)})})}function Yb(i,t){if(i.length!==t.length)return!1;for(let e=0;e<i.length;++e)if(!Pi(i[e],t[e]))return!1;return!0}function Pi(i,t){let e=i?Fh(i):void 0,n=t?Fh(t):void 0;if(!e||!n||e.length!=n.length)return!1;let r;for(let s=0;s<e.length;s++)if(r=e[s],!Lg(i[r],t[r]))return!1;return!0}function Fh(i){return[...Object.keys(i),...Object.getOwnPropertySymbols(i)]}function Lg(i,t){if(Array.isArray(i)&&Array.isArray(t)){if(i.length!==t.length)return!1;let e=[...i].sort(),n=[...t].sort();return e.every((r,s)=>n[s]===r)}else return i===t}function Zb(i){return i.length>0?i[i.length-1]:null}function ds(i){return Qd(i)?i:Bs(i)?Dn(Promise.resolve(i)):Ve(i)}function kg(i){return Qd(i)?rl(i):Promise.resolve(i)}var Jb={exact:Vg,subset:zg},Ug={exact:Kb,subset:Qb,ignored:()=>!0},Bg={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},Nh={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function Tg(i,t,e){return Jb[e.paths](i.root,t.root,e.matrixParams)&&Ug[e.queryParams](i.queryParams,t.queryParams)&&!(e.fragment==="exact"&&i.fragment!==t.fragment)}function Kb(i,t){return Pi(i,t)}function Vg(i,t,e){if(!ls(i.segments,t.segments)||!tl(i.segments,t.segments,e)||i.numberOfChildren!==t.numberOfChildren)return!1;for(let n in t.children)if(!i.children[n]||!Vg(i.children[n],t.children[n],e))return!1;return!0}function Qb(i,t){return Object.keys(t).length<=Object.keys(i).length&&Object.keys(t).every(e=>Lg(i[e],t[e]))}function zg(i,t,e){return Gg(i,t,t.segments,e)}function Gg(i,t,e,n){if(i.segments.length>e.length){let r=i.segments.slice(0,e.length);return!(!ls(r,e)||t.hasChildren()||!tl(r,e,n))}else if(i.segments.length===e.length){if(!ls(i.segments,e)||!tl(i.segments,e,n))return!1;for(let r in t.children)if(!i.children[r]||!zg(i.children[r],t.children[r],n))return!1;return!0}else{let r=e.slice(0,i.segments.length),s=e.slice(i.segments.length);return!ls(i.segments,r)||!tl(i.segments,r,n)||!i.children[He]?!1:Gg(i.children[He],t,s,n)}}function tl(i,t,e){return t.every((n,r)=>Ug[e](i[r].parameters,n.parameters))}var Gn=class{root;queryParams;fragment;_queryParamMap;constructor(t=new yt([],{}),e={},n=null){this.root=t,this.queryParams=e,this.fragment=n}get queryParamMap(){return this._queryParamMap??=us(this.queryParams),this._queryParamMap}toString(){return nx.serialize(this)}},yt=class{segments;children;parent=null;constructor(t,e){this.segments=t,this.children=e,Object.values(e).forEach(n=>n.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return nl(this)}},Rr=class{path;parameters;_parameterMap;constructor(t,e){this.path=t,this.parameters=e}get parameterMap(){return this._parameterMap??=us(this.parameters),this._parameterMap}toString(){return Wg(this)}};function ex(i,t){return ls(i,t)&&i.every((e,n)=>Pi(e.parameters,t[n].parameters))}function ls(i,t){return i.length!==t.length?!1:i.every((e,n)=>e.path===t[n].path)}function tx(i,t){let e=[];return Object.entries(i.children).forEach(([n,r])=>{n===He&&(e=e.concat(t(r,n)))}),Object.entries(i.children).forEach(([n,r])=>{n!==He&&(e=e.concat(t(r,n)))}),e}var eo=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275prov=oe({token:i,factory:()=>new Ir,providedIn:"root"})}return i})(),Ir=class{parse(t){let e=new kh(t);return new Gn(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(t){let e=`/${da(t.root,!0)}`,n=sx(t.queryParams),r=typeof t.fragment=="string"?`#${ix(t.fragment)}`:"";return`${e}${n}${r}`}},nx=new Ir;function nl(i){return i.segments.map(t=>Wg(t)).join("/")}function da(i,t){if(!i.hasChildren())return nl(i);if(t){let e=i.children[He]?da(i.children[He],!1):"",n=[];return Object.entries(i.children).forEach(([r,s])=>{r!==He&&n.push(`${r}:${da(s,!1)}`)}),n.length>0?`${e}(${n.join("//")})`:e}else{let e=tx(i,(n,r)=>r===He?[da(i.children[He],!1)]:[`${r}:${da(n,!1)}`]);return Object.keys(i.children).length===1&&i.children[He]!=null?`${nl(i)}/${e[0]}`:`${nl(i)}/(${e.join("//")})`}}function Hg(i){return encodeURIComponent(i).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Qc(i){return Hg(i).replace(/%3B/gi,";")}function ix(i){return encodeURI(i)}function Lh(i){return Hg(i).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function il(i){return decodeURIComponent(i)}function Dg(i){return il(i.replace(/\+/g,"%20"))}function Wg(i){return`${Lh(i.path)}${rx(i.parameters)}`}function rx(i){return Object.entries(i).map(([t,e])=>`;${Lh(t)}=${Lh(e)}`).join("")}function sx(i){let t=Object.entries(i).map(([e,n])=>Array.isArray(n)?n.map(r=>`${Qc(e)}=${Qc(r)}`).join("&"):`${Qc(e)}=${Qc(n)}`).filter(e=>e);return t.length?`?${t.join("&")}`:""}var ox=/^[^\/()?;#]+/;function Rh(i){let t=i.match(ox);return t?t[0]:""}var ax=/^[^\/()?;=#]+/;function cx(i){let t=i.match(ax);return t?t[0]:""}var lx=/^[^=?&#]+/;function ux(i){let t=i.match(lx);return t?t[0]:""}var dx=/^[^&#]+/;function hx(i){let t=i.match(dx);return t?t[0]:""}var kh=class{url;remaining;constructor(t){this.url=t,this.remaining=t}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new yt([],{}):new yt([],this.parseChildren())}parseQueryParams(){let t={};if(this.consumeOptional("?"))do this.parseQueryParam(t);while(this.consumeOptional("&"));return t}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(t=0){if(t>50)throw new Oe(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let n={};this.peekStartsWith("/(")&&(this.capture("/"),n=this.parseParens(!0,t));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,t)),(e.length>0||Object.keys(n).length>0)&&(r[He]=new yt(e,n)),r}parseSegment(){let t=Rh(this.remaining);if(t===""&&this.peekStartsWith(";"))throw new Oe(4009,!1);return this.capture(t),new Rr(il(t),this.parseMatrixParams())}parseMatrixParams(){let t={};for(;this.consumeOptional(";");)this.parseParam(t);return t}parseParam(t){let e=cx(this.remaining);if(!e)return;this.capture(e);let n="";if(this.consumeOptional("=")){let r=Rh(this.remaining);r&&(n=r,this.capture(n))}t[il(e)]=il(n)}parseQueryParam(t){let e=ux(this.remaining);if(!e)return;this.capture(e);let n="";if(this.consumeOptional("=")){let o=hx(this.remaining);o&&(n=o,this.capture(n))}let r=Dg(e),s=Dg(n);if(t.hasOwnProperty(r)){let o=t[r];Array.isArray(o)||(o=[o],t[r]=o),o.push(s)}else t[r]=s}parseParens(t,e){let n={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=Rh(this.remaining),s=this.remaining[r.length];if(s!=="/"&&s!==")"&&s!==";")throw new Oe(4010,!1);let o;r.indexOf(":")>-1?(o=r.slice(0,r.indexOf(":")),this.capture(o),this.capture(":")):t&&(o=He);let a=this.parseChildren(e+1);n[o??He]=Object.keys(a).length===1&&a[He]?a[He]:new yt([],a),this.consumeOptional("//")}return n}peekStartsWith(t){return this.remaining.startsWith(t)}consumeOptional(t){return this.peekStartsWith(t)?(this.remaining=this.remaining.substring(t.length),!0):!1}capture(t){if(!this.consumeOptional(t))throw new Oe(4011,!1)}};function jg(i){return i.segments.length>0?new yt([],{[He]:i}):i}function Xg(i){let t={};for(let[n,r]of Object.entries(i.children)){let s=Xg(r);if(n===He&&s.segments.length===0&&s.hasChildren())for(let[o,a]of Object.entries(s.children))t[o]=a;else(s.segments.length>0||s.hasChildren())&&(t[n]=s)}let e=new yt(i.segments,t);return fx(e)}function fx(i){if(i.numberOfChildren===1&&i.children[He]){let t=i.children[He];return new yt(i.segments.concat(t.segments),t.children)}return i}function Pr(i){return i instanceof Gn}function $g(i,t,e=null,n=null,r=new Ir){let s=qg(i);return Yg(s,t,e,n,r)}function qg(i){let t;function e(s){let o={};for(let c of s.children){let l=e(c);o[c.outlet]=l}let a=new yt(s.url,o);return s===i&&(t=a),a}let n=e(i.root),r=jg(n);return t??r}function Yg(i,t,e,n,r){let s=i;for(;s.parent;)s=s.parent;if(t.length===0)return Ih(s,s,s,e,n,r);let o=px(t);if(o.toRoot())return Ih(s,s,new yt([],{}),e,n,r);let a=mx(o,s,i),c=a.processChildren?fa(a.segmentGroup,a.index,o.commands):Jg(a.segmentGroup,a.index,o.commands);return Ih(s,a.segmentGroup,c,e,n,r)}function sl(i){return typeof i=="object"&&i!=null&&!i.outlets&&!i.segmentPath}function ga(i){return typeof i=="object"&&i!=null&&i.outlets}function Rg(i,t,e){i||="\u0275";let n=new Gn;return n.queryParams={[i]:t},e.parse(e.serialize(n)).queryParams[i]}function Ih(i,t,e,n,r,s){let o={};for(let[l,u]of Object.entries(n??{}))o[l]=Array.isArray(u)?u.map(h=>Rg(l,h,s)):Rg(l,u,s);let a;i===t?a=e:a=Zg(i,t,e);let c=jg(Xg(a));return new Gn(c,o,r)}function Zg(i,t,e){let n={};return Object.entries(i.children).forEach(([r,s])=>{s===t?n[r]=e:n[r]=Zg(s,t,e)}),new yt(i.segments,n)}var ol=class{isAbsolute;numberOfDoubleDots;commands;constructor(t,e,n){if(this.isAbsolute=t,this.numberOfDoubleDots=e,this.commands=n,t&&n.length>0&&sl(n[0]))throw new Oe(4003,!1);let r=n.find(ga);if(r&&r!==Zb(n))throw new Oe(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function px(i){if(typeof i[0]=="string"&&i.length===1&&i[0]==="/")return new ol(!0,0,i);let t=0,e=!1,n=i.reduce((r,s,o)=>{if(typeof s=="object"&&s!=null){if(s.outlets){let a={};return Object.entries(s.outlets).forEach(([c,l])=>{a[c]=typeof l=="string"?l.split("/"):l}),[...r,{outlets:a}]}if(s.segmentPath)return[...r,s.segmentPath]}return typeof s!="string"?[...r,s]:o===0?(s.split("/").forEach((a,c)=>{c==0&&a==="."||(c==0&&a===""?e=!0:a===".."?t++:a!=""&&r.push(a))}),r):[...r,s]},[]);return new ol(e,t,n)}var $s=class{segmentGroup;processChildren;index;constructor(t,e,n){this.segmentGroup=t,this.processChildren=e,this.index=n}};function mx(i,t,e){if(i.isAbsolute)return new $s(t,!0,0);if(!e)return new $s(t,!1,NaN);if(e.parent===null)return new $s(e,!0,0);let n=sl(i.commands[0])?0:1,r=e.segments.length-1+n;return gx(e,r,i.numberOfDoubleDots)}function gx(i,t,e){let n=i,r=t,s=e;for(;s>r;){if(s-=r,n=n.parent,!n)throw new Oe(4005,!1);r=n.segments.length}return new $s(n,!1,r-s)}function vx(i){return ga(i[0])?i[0].outlets:{[He]:i}}function Jg(i,t,e){if(i??=new yt([],{}),i.segments.length===0&&i.hasChildren())return fa(i,t,e);let n=_x(i,t,e),r=e.slice(n.commandIndex);if(n.match&&n.pathIndex<i.segments.length){let s=new yt(i.segments.slice(0,n.pathIndex),{});return s.children[He]=new yt(i.segments.slice(n.pathIndex),i.children),fa(s,0,r)}else return n.match&&r.length===0?new yt(i.segments,{}):n.match&&!i.hasChildren()?Uh(i,t,e):n.match?fa(i,0,r):Uh(i,t,e)}function fa(i,t,e){if(e.length===0)return new yt(i.segments,{});{let n=vx(e),r={};if(Object.keys(n).some(s=>s!==He)&&i.children[He]&&i.numberOfChildren===1&&i.children[He].segments.length===0){let s=fa(i.children[He],t,e);return new yt(i.segments,s.children)}return Object.entries(n).forEach(([s,o])=>{typeof o=="string"&&(o=[o]),o!==null&&(r[s]=Jg(i.children[s],t,o))}),Object.entries(i.children).forEach(([s,o])=>{n[s]===void 0&&(r[s]=o)}),new yt(i.segments,r)}}function _x(i,t,e){let n=0,r=t,s={match:!1,pathIndex:0,commandIndex:0};for(;r<i.segments.length;){if(n>=e.length)return s;let o=i.segments[r],a=e[n];if(ga(a))break;let c=`${a}`,l=n<e.length-1?e[n+1]:null;if(r>0&&c===void 0)break;if(c&&l&&typeof l=="object"&&l.outlets===void 0){if(!Pg(c,l,o))return s;n+=2}else{if(!Pg(c,{},o))return s;n++}r++}return{match:!0,pathIndex:r,commandIndex:n}}function Uh(i,t,e){let n=i.segments.slice(0,t),r=0;for(;r<e.length;){let s=e[r];if(ga(s)){let c=yx(s.outlets);return new yt(n,c)}if(r===0&&sl(e[0])){let c=i.segments[t];n.push(new Rr(c.path,Ig(e[0]))),r++;continue}let o=ga(s)?s.outlets[He]:`${s}`,a=r<e.length-1?e[r+1]:null;o&&a&&sl(a)?(n.push(new Rr(o,Ig(a))),r+=2):(n.push(new Rr(o,{})),r++)}return new yt(n,{})}function yx(i){let t={};return Object.entries(i).forEach(([e,n])=>{typeof n=="string"&&(n=[n]),n!==null&&(t[e]=Uh(new yt([],{}),0,n))}),t}function Ig(i){let t={};return Object.entries(i).forEach(([e,n])=>t[e]=`${n}`),t}function Pg(i,t,e){return i==e.path&&Pi(t,e.parameters)}var pa="imperative",sn=(function(i){return i[i.NavigationStart=0]="NavigationStart",i[i.NavigationEnd=1]="NavigationEnd",i[i.NavigationCancel=2]="NavigationCancel",i[i.NavigationError=3]="NavigationError",i[i.RoutesRecognized=4]="RoutesRecognized",i[i.ResolveStart=5]="ResolveStart",i[i.ResolveEnd=6]="ResolveEnd",i[i.GuardsCheckStart=7]="GuardsCheckStart",i[i.GuardsCheckEnd=8]="GuardsCheckEnd",i[i.RouteConfigLoadStart=9]="RouteConfigLoadStart",i[i.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",i[i.ChildActivationStart=11]="ChildActivationStart",i[i.ChildActivationEnd=12]="ChildActivationEnd",i[i.ActivationStart=13]="ActivationStart",i[i.ActivationEnd=14]="ActivationEnd",i[i.Scroll=15]="Scroll",i[i.NavigationSkipped=16]="NavigationSkipped",i})(sn||{}),Hn=class{id;url;constructor(t,e){this.id=t,this.url=e}},Ji=class extends Hn{type=sn.NavigationStart;navigationTrigger;restoredState;constructor(t,e,n="imperative",r=null){super(t,e),this.navigationTrigger=n,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},ri=class extends Hn{urlAfterRedirects;type=sn.NavigationEnd;constructor(t,e,n){super(t,e),this.urlAfterRedirects=n}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},yn=(function(i){return i[i.Redirect=0]="Redirect",i[i.SupersededByNewNavigation=1]="SupersededByNewNavigation",i[i.NoDataFromResolver=2]="NoDataFromResolver",i[i.GuardRejected=3]="GuardRejected",i[i.Aborted=4]="Aborted",i})(yn||{}),va=(function(i){return i[i.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",i[i.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",i})(va||{}),Pn=class extends Hn{reason;code;type=sn.NavigationCancel;constructor(t,e,n,r){super(t,e),this.reason=n,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function Kg(i){return i instanceof Pn&&(i.code===yn.Redirect||i.code===yn.SupersededByNewNavigation)}var Ki=class extends Hn{reason;code;type=sn.NavigationSkipped;constructor(t,e,n,r){super(t,e),this.reason=n,this.code=r}},Qi=class extends Hn{error;target;type=sn.NavigationError;constructor(t,e,n,r){super(t,e),this.error=n,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},_a=class extends Hn{urlAfterRedirects;state;type=sn.RoutesRecognized;constructor(t,e,n,r){super(t,e),this.urlAfterRedirects=n,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},al=class extends Hn{urlAfterRedirects;state;type=sn.GuardsCheckStart;constructor(t,e,n,r){super(t,e),this.urlAfterRedirects=n,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},cl=class extends Hn{urlAfterRedirects;state;shouldActivate;type=sn.GuardsCheckEnd;constructor(t,e,n,r,s){super(t,e),this.urlAfterRedirects=n,this.state=r,this.shouldActivate=s}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},ll=class extends Hn{urlAfterRedirects;state;type=sn.ResolveStart;constructor(t,e,n,r){super(t,e),this.urlAfterRedirects=n,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},ul=class extends Hn{urlAfterRedirects;state;type=sn.ResolveEnd;constructor(t,e,n,r){super(t,e),this.urlAfterRedirects=n,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},dl=class{route;type=sn.RouteConfigLoadStart;constructor(t){this.route=t}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},hl=class{route;type=sn.RouteConfigLoadEnd;constructor(t){this.route=t}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},fl=class{snapshot;type=sn.ChildActivationStart;constructor(t){this.snapshot=t}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},pl=class{snapshot;type=sn.ChildActivationEnd;constructor(t){this.snapshot=t}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},ml=class{snapshot;type=sn.ActivationStart;constructor(t){this.snapshot=t}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},gl=class{snapshot;type=sn.ActivationEnd;constructor(t){this.snapshot=t}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var Ys=class{},ya=class{},Zs=class{url;navigationBehaviorOptions;constructor(t,e){this.url=t,this.navigationBehaviorOptions=e}};function bx(i){return!(i instanceof Ys)&&!(i instanceof Zs)&&!(i instanceof ya)}var vl=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(t){this.rootInjector=t,this.children=new to(this.rootInjector)}},to=(()=>{class i{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,n){let r=this.getOrCreateContext(e);r.outlet=n,this.contexts.set(e,r)}onChildOutletDestroyed(e){let n=this.getContext(e);n&&(n.outlet=null,n.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let n=this.getContext(e);return n||(n=new vl(this.rootInjector),this.contexts.set(e,n)),n}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(n){return new(n||i)(Fe(ln))};static \u0275prov=oe({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),_l=class{_root;constructor(t){this._root=t}get root(){return this._root.value}parent(t){let e=this.pathFromRoot(t);return e.length>1?e[e.length-2]:null}children(t){let e=Bh(t,this._root);return e?e.children.map(n=>n.value):[]}firstChild(t){let e=Bh(t,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(t){let e=Vh(t,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==t)}pathFromRoot(t){return Vh(t,this._root).map(e=>e.value)}};function Bh(i,t){if(i===t.value)return t;for(let e of t.children){let n=Bh(i,e);if(n)return n}return null}function Vh(i,t){if(i===t.value)return[t];for(let e of t.children){let n=Vh(i,e);if(n.length)return n.unshift(t),n}return[]}var zn=class{value;children;constructor(t,e){this.value=t,this.children=e}toString(){return`TreeNode(${this.value})`}};function Xs(i){let t={};return i&&i.children.forEach(e=>t[e.value.outlet]=e),t}var ba=class extends _l{snapshot;constructor(t,e){super(t),this.snapshot=e,Yh(this,t)}toString(){return this.snapshot.toString()}};function Qg(i,t){let e=xx(i,t),n=new pn([new Rr("",{})]),r=new pn({}),s=new pn({}),o=new pn({}),a=new pn(""),c=new er(n,r,o,a,s,He,i,e.root);return c.snapshot=e.root,new ba(new zn(c,[]),e)}function xx(i,t){let e={},n={},r={},o=new Js([],e,r,"",n,He,i,null,{},t);return new xa("",new zn(o,[]))}var er=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(t,e,n,r,s,o,a,c){this.urlSubject=t,this.paramsSubject=e,this.queryParamsSubject=n,this.fragmentSubject=r,this.dataSubject=s,this.outlet=o,this.component=a,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(it(l=>l[Ma]))??Ve(void 0),this.url=t,this.params=e,this.queryParams=n,this.fragment=r,this.data=s}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(it(t=>us(t))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(it(t=>us(t))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function qh(i,t,e="emptyOnly"){let n,{routeConfig:r}=i;return t!==null&&(e==="always"||r?.path===""||!t.component&&!t.routeConfig?.loadComponent)?n={params:ie(ie({},t.params),i.params),data:ie(ie({},t.data),i.data),resolve:ie(ie(ie(ie({},i.data),t.data),r?.data),i._resolvedData)}:n={params:ie({},i.params),data:ie({},i.data),resolve:ie(ie({},i.data),i._resolvedData??{})},r&&tv(r)&&(n.resolve[Ma]=r.title),n}var Js=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[Ma]}constructor(t,e,n,r,s,o,a,c,l,u){this.url=t,this.params=e,this.queryParams=n,this.fragment=r,this.data=s,this.outlet=o,this.component=a,this.routeConfig=c,this._resolve=l,this._environmentInjector=u}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=us(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=us(this.queryParams),this._queryParamMap}toString(){let t=this.url.map(n=>n.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${t}', path:'${e}')`}},xa=class extends _l{url;constructor(t,e){super(e),this.url=t,Yh(this,e)}toString(){return ev(this._root)}};function Yh(i,t){t.value._routerState=i,t.children.forEach(e=>Yh(i,e))}function ev(i){let t=i.children.length>0?` { ${i.children.map(ev).join(", ")} } `:"";return`${i.value}${t}`}function Ph(i){if(i.snapshot){let t=i.snapshot,e=i._futureSnapshot;i.snapshot=e,Pi(t.queryParams,e.queryParams)||i.queryParamsSubject.next(e.queryParams),t.fragment!==e.fragment&&i.fragmentSubject.next(e.fragment),Pi(t.params,e.params)||i.paramsSubject.next(e.params),Yb(t.url,e.url)||i.urlSubject.next(e.url),Pi(t.data,e.data)||i.dataSubject.next(e.data)}else i.snapshot=i._futureSnapshot,i.dataSubject.next(i._futureSnapshot.data)}function zh(i,t){let e=Pi(i.params,t.params)&&ex(i.url,t.url),n=!i.parent!=!t.parent;return e&&!n&&(!i.parent||zh(i.parent,t.parent))}function tv(i){return typeof i.title=="string"||i.title===null}var nv=new Ce(""),Ea=(()=>{class i{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=He;activateEvents=new en;deactivateEvents=new en;attachEvents=new en;detachEvents=new en;routerOutletData=$m();parentContexts=A(to);location=A(Us);changeDetector=A(_n);inputBinder=A(Sl,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:n,previousValue:r}=e.name;if(n)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new Oe(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new Oe(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new Oe(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,n){this.activated=e,this._activatedRoute=n,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,n){if(this.isActivated)throw new Oe(4013,!1);this._activatedRoute=e;let r=this.location,o=e.snapshot.component,a=this.parentContexts.getOrCreateContext(this.name).children,c=new Gh(e,a,r.injector,this.routerOutletData);this.activated=r.createComponent(o,{index:r.length,injector:c,environmentInjector:n}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(n){return new(n||i)};static \u0275dir=xt({type:i,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Un]})}return i})(),Gh=class{route;childContexts;parent;outletData;constructor(t,e,n,r){this.route=t,this.childContexts=e,this.parent=n,this.outletData=r}get(t,e){return t===er?this.route:t===to?this.childContexts:t===nv?this.outletData:this.parent.get(t,e)}},Sl=new Ce("");var Zh=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275cmp=_t({type:i,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(n,r){n&1&&rt(0,"router-outlet")},dependencies:[Ea],encapsulation:2})}return i})();function Jh(i){let t=i.children&&i.children.map(Jh),e=t?Ot(ie({},i),{children:t}):ie({},i);return!e.component&&!e.loadComponent&&(t||e.loadChildren)&&e.outlet&&e.outlet!==He&&(e.component=Zh),e}function Sx(i,t,e){let n=Sa(i,t._root,e?e._root:void 0);return new ba(n,t)}function Sa(i,t,e){if(e&&i.shouldReuseRoute(t.value,e.value.snapshot)){let n=e.value;n._futureSnapshot=t.value;let r=wx(i,t,e);return new zn(n,r)}else{if(i.shouldAttach(t.value)){let s=i.retrieve(t.value);if(s!==null){let o=s.route;return o.value._futureSnapshot=t.value,o.children=t.children.map(a=>Sa(i,a)),o}}let n=Mx(t.value),r=t.children.map(s=>Sa(i,s));return new zn(n,r)}}function wx(i,t,e){return t.children.map(n=>{for(let r of e.children)if(i.shouldReuseRoute(n.value,r.value.snapshot))return Sa(i,n,r);return Sa(i,n)})}function Mx(i){return new er(new pn(i.url),new pn(i.params),new pn(i.queryParams),new pn(i.fragment),new pn(i.data),i.outlet,i.component,i)}var Ks=class{redirectTo;navigationBehaviorOptions;constructor(t,e){this.redirectTo=t,this.navigationBehaviorOptions=e}},iv="ngNavigationCancelingError";function yl(i,t){let{redirectTo:e,navigationBehaviorOptions:n}=Pr(t)?{redirectTo:t,navigationBehaviorOptions:void 0}:t,r=rv(!1,yn.Redirect);return r.url=e,r.navigationBehaviorOptions=n,r}function rv(i,t){let e=new Error(`NavigationCancelingError: ${i||""}`);return e[iv]=!0,e.cancellationCode=t,e}function Ex(i){return sv(i)&&Pr(i.url)}function sv(i){return!!i&&i[iv]}var Hh=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(t,e,n,r,s){this.routeReuseStrategy=t,this.futureState=e,this.currState=n,this.forwardEvent=r,this.inputBindingEnabled=s}activate(t){let e=this.futureState._root,n=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,n,t),Ph(this.futureState.root),this.activateChildRoutes(e,n,t)}deactivateChildRoutes(t,e,n){let r=Xs(e);t.children.forEach(s=>{let o=s.value.outlet;this.deactivateRoutes(s,r[o],n),delete r[o]}),Object.values(r).forEach(s=>{this.deactivateRouteAndItsChildren(s,n)})}deactivateRoutes(t,e,n){let r=t.value,s=e?e.value:null;if(r===s)if(r.component){let o=n.getContext(r.outlet);o&&this.deactivateChildRoutes(t,e,o.children)}else this.deactivateChildRoutes(t,e,n);else s&&this.deactivateRouteAndItsChildren(e,n)}deactivateRouteAndItsChildren(t,e){t.value.component&&this.routeReuseStrategy.shouldDetach(t.value.snapshot)?this.detachAndStoreRouteSubtree(t,e):this.deactivateRouteAndOutlet(t,e)}detachAndStoreRouteSubtree(t,e){let n=e.getContext(t.value.outlet),r=n&&t.value.component?n.children:e,s=Xs(t);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);if(n&&n.outlet){let o=n.outlet.detach(),a=n.children.onOutletDeactivated();this.routeReuseStrategy.store(t.value.snapshot,{componentRef:o,route:t,contexts:a})}}deactivateRouteAndOutlet(t,e){let n=e.getContext(t.value.outlet),r=n&&t.value.component?n.children:e,s=Xs(t);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);n&&(n.outlet&&(n.outlet.deactivate(),n.children.onOutletDeactivated()),n.attachRef=null,n.route=null)}activateChildRoutes(t,e,n){let r=Xs(e);t.children.forEach(s=>{this.activateRoutes(s,r[s.value.outlet],n),this.forwardEvent(new gl(s.value.snapshot))}),t.children.length&&this.forwardEvent(new pl(t.value.snapshot))}activateRoutes(t,e,n){let r=t.value,s=e?e.value:null;if(Ph(r),r===s)if(r.component){let o=n.getOrCreateContext(r.outlet);this.activateChildRoutes(t,e,o.children)}else this.activateChildRoutes(t,e,n);else if(r.component){let o=n.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let a=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),o.children.onOutletReAttached(a.contexts),o.attachRef=a.componentRef,o.route=a.route.value,o.outlet&&o.outlet.attach(a.componentRef,a.route.value),Ph(a.route.value),this.activateChildRoutes(t,null,o.children)}else o.attachRef=null,o.route=r,o.outlet&&o.outlet.activateWith(r,o.injector),this.activateChildRoutes(t,null,o.children)}else this.activateChildRoutes(t,null,n)}},bl=class{path;route;constructor(t){this.path=t,this.route=this.path[this.path.length-1]}},qs=class{component;route;constructor(t,e){this.component=t,this.route=e}};function Cx(i,t,e){let n=i._root,r=t?t._root:null;return ha(n,r,e,[n.value])}function Ax(i){let t=i.routeConfig?i.routeConfig.canActivateChild:null;return!t||t.length===0?null:{node:i,guards:t}}function no(i,t){let e=Symbol(),n=t.get(i,e);return n===e?typeof i=="function"&&!gm(i)?i:t.get(i):n}function ha(i,t,e,n,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=Xs(t);return i.children.forEach(o=>{Tx(o,s[o.value.outlet],e,n.concat([o.value]),r),delete s[o.value.outlet]}),Object.entries(s).forEach(([o,a])=>ma(a,e.getContext(o),r)),r}function Tx(i,t,e,n,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=i.value,o=t?t.value:null,a=e?e.getContext(i.value.outlet):null;if(o&&s.routeConfig===o.routeConfig){let c=Dx(o,s,s.routeConfig.runGuardsAndResolvers);c?r.canActivateChecks.push(new bl(n)):(s.data=o.data,s._resolvedData=o._resolvedData),s.component?ha(i,t,a?a.children:null,n,r):ha(i,t,e,n,r),c&&a&&a.outlet&&a.outlet.isActivated&&r.canDeactivateChecks.push(new qs(a.outlet.component,o))}else o&&ma(t,a,r),r.canActivateChecks.push(new bl(n)),s.component?ha(i,null,a?a.children:null,n,r):ha(i,null,e,n,r);return r}function Dx(i,t,e){if(typeof e=="function")return Rn(t._environmentInjector,()=>e(i,t));switch(e){case"pathParamsChange":return!ls(i.url,t.url);case"pathParamsOrQueryParamsChange":return!ls(i.url,t.url)||!Pi(i.queryParams,t.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!zh(i,t)||!Pi(i.queryParams,t.queryParams);default:return!zh(i,t)}}function ma(i,t,e){let n=Xs(i),r=i.value;Object.entries(n).forEach(([s,o])=>{r.component?t?ma(o,t.children.getContext(s),e):ma(o,null,e):ma(o,t,e)}),r.component?t&&t.outlet&&t.outlet.isActivated?e.canDeactivateChecks.push(new qs(t.outlet.component,r)):e.canDeactivateChecks.push(new qs(null,r)):e.canDeactivateChecks.push(new qs(null,r))}function Ca(i){return typeof i=="function"}function Rx(i){return typeof i=="boolean"}function Ix(i){return i&&Ca(i.canLoad)}function Px(i){return i&&Ca(i.canActivate)}function Ox(i){return i&&Ca(i.canActivateChild)}function Fx(i){return i&&Ca(i.canDeactivate)}function Nx(i){return i&&Ca(i.canMatch)}function ov(i){return i instanceof hm||i?.name==="EmptyError"}var el=Symbol("INITIAL_VALUE");function Qs(){return cn(i=>Pc(i.map(t=>t.pipe(mn(1),kc(el)))).pipe(it(t=>{for(let e of t)if(e!==!0){if(e===el)return el;if(e===!1||Lx(e))return e}return!0}),li(t=>t!==el),mn(1)))}function Lx(i){return Pr(i)||i instanceof Ks}function av(i){return i.aborted?Ve(void 0).pipe(mn(1)):new Mi(t=>{let e=()=>{t.next(),t.complete()};return i.addEventListener("abort",e),()=>i.removeEventListener("abort",e)})}function cv(i){return Ei(av(i))}function kx(i){return mr(t=>{let{targetSnapshot:e,currentSnapshot:n,guards:{canActivateChecks:r,canDeactivateChecks:s}}=t;return s.length===0&&r.length===0?Ve(Ot(ie({},t),{guardsResult:!0})):Ux(s,e,n).pipe(mr(o=>o&&Rx(o)?Bx(e,r,i):Ve(o)),it(o=>Ot(ie({},t),{guardsResult:o})))})}function Ux(i,t,e){return Dn(i).pipe(mr(n=>Wx(n.component,n.route,e,t)),vr(n=>n!==!0,!0))}function Bx(i,t,e){return Dn(t).pipe($o(n=>Oc(zx(n.route.parent,e),Vx(n.route,e),Hx(i,n.path),Gx(i,n.route))),vr(n=>n!==!0,!0))}function Vx(i,t){return i!==null&&t&&t(new ml(i)),Ve(!0)}function zx(i,t){return i!==null&&t&&t(new fl(i)),Ve(!0)}function Gx(i,t){let e=t.routeConfig?t.routeConfig.canActivate:null;if(!e||e.length===0)return Ve(!0);let n=e.map(r=>Fc(()=>{let s=t._environmentInjector,o=no(r,s),a=Px(o)?o.canActivate(t,i):Rn(s,()=>o(t,i));return ds(a).pipe(vr())}));return Ve(n).pipe(Qs())}function Hx(i,t){let e=t[t.length-1],r=t.slice(0,t.length-1).reverse().map(s=>Ax(s)).filter(s=>s!==null).map(s=>Fc(()=>{let o=s.guards.map(a=>{let c=s.node._environmentInjector,l=no(a,c),u=Ox(l)?l.canActivateChild(e,i):Rn(c,()=>l(e,i));return ds(u).pipe(vr())});return Ve(o).pipe(Qs())}));return Ve(r).pipe(Qs())}function Wx(i,t,e,n){let r=t&&t.routeConfig?t.routeConfig.canDeactivate:null;if(!r||r.length===0)return Ve(!0);let s=r.map(o=>{let a=t._environmentInjector,c=no(o,a),l=Fx(c)?c.canDeactivate(i,t,e,n):Rn(a,()=>c(i,t,e,n));return ds(l).pipe(vr())});return Ve(s).pipe(Qs())}function jx(i,t,e,n,r){let s=t.canLoad;if(s===void 0||s.length===0)return Ve(!0);let o=s.map(a=>{let c=no(a,i),l=Ix(c)?c.canLoad(t,e):Rn(i,()=>c(t,e)),u=ds(l);return r?u.pipe(cv(r)):u});return Ve(o).pipe(Qs(),lv(n))}function lv(i){return dm(wn(t=>{if(typeof t!="boolean")throw yl(i,t)}),it(t=>t===!0))}function Xx(i,t,e,n,r,s){let o=t.canMatch;if(!o||o.length===0)return Ve(!0);let a=o.map(c=>{let l=no(c,i),u=Nx(l)?l.canMatch(t,e,r):Rn(i,()=>l(t,e,r));return ds(u).pipe(cv(s))});return Ve(a).pipe(Qs(),lv(n))}var Zi=class i extends Error{segmentGroup;constructor(t){super(),this.segmentGroup=t||null,Object.setPrototypeOf(this,i.prototype)}},wa=class i extends Error{urlTree;constructor(t){super(),this.urlTree=t,Object.setPrototypeOf(this,i.prototype)}};function $x(i){throw new Oe(4e3,!1)}function qx(i){throw rv(!1,yn.GuardRejected)}var Wh=class{urlSerializer;urlTree;constructor(t,e){this.urlSerializer=t,this.urlTree=e}async lineralizeSegments(t,e){let n=[],r=e.root;for(;;){if(n=n.concat(r.segments),r.numberOfChildren===0)return n;if(r.numberOfChildren>1||!r.children[He])throw $x(`${t.redirectTo}`);r=r.children[He]}}async applyRedirectCommands(t,e,n,r,s){let o=await Yx(e,r,s);if(o instanceof Gn)throw new wa(o);let a=this.applyRedirectCreateUrlTree(o,this.urlSerializer.parse(o),t,n);if(o[0]==="/")throw new wa(a);return a}applyRedirectCreateUrlTree(t,e,n,r){let s=this.createSegmentGroup(t,e.root,n,r);return new Gn(s,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(t,e){let n={};return Object.entries(t).forEach(([r,s])=>{if(typeof s=="string"&&s[0]===":"){let a=s.substring(1);n[r]=e[a]}else n[r]=s}),n}createSegmentGroup(t,e,n,r){let s=this.createSegments(t,e.segments,n,r),o={};return Object.entries(e.children).forEach(([a,c])=>{o[a]=this.createSegmentGroup(t,c,n,r)}),new yt(s,o)}createSegments(t,e,n,r){return e.map(s=>s.path[0]===":"?this.findPosParam(t,s,r):this.findOrReturn(s,n))}findPosParam(t,e,n){let r=n[e.path.substring(1)];if(!r)throw new Oe(4001,!1);return r}findOrReturn(t,e){let n=0;for(let r of e){if(r.path===t.path)return e.splice(n),r;n++}return t}};function Yx(i,t,e){if(typeof i=="string")return Promise.resolve(i);let n=i;return rl(ds(Rn(e,()=>n(t))))}function Zx(i,t){return i.providers&&!i._injector&&(i._injector=rh(i.providers,t,`Route: ${i.path}`)),i._injector??t}function hi(i){return i.outlet||He}function Jx(i,t){let e=i.filter(n=>hi(n)===t);return e.push(...i.filter(n=>hi(n)!==t)),e}var jh={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function uv(i){return{routeConfig:i.routeConfig,url:i.url,params:i.params,queryParams:i.queryParams,fragment:i.fragment,data:i.data,outlet:i.outlet,title:i.title,paramMap:i.paramMap,queryParamMap:i.queryParamMap}}function Kx(i,t,e,n,r,s,o){let a=dv(i,t,e);if(!a.matched)return Ve(a);let c=uv(s(a));return n=Zx(t,n),Xx(n,t,e,r,c,o).pipe(it(l=>l===!0?a:ie({},jh)))}function dv(i,t,e){if(t.path==="")return t.pathMatch==="full"&&(i.hasChildren()||e.length>0)?ie({},jh):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(t.matcher||Ng)(e,i,t);if(!r)return ie({},jh);let s={};Object.entries(r.posParams??{}).forEach(([a,c])=>{s[a]=c.path});let o=r.consumed.length>0?ie(ie({},s),r.consumed[r.consumed.length-1].parameters):s;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:o,positionalParamSegments:r.posParams??{}}}function Og(i,t,e,n,r){return e.length>0&&tS(i,e,n,r)?{segmentGroup:new yt(t,eS(n,new yt(e,i.children))),slicedSegments:[]}:e.length===0&&nS(i,e,n)?{segmentGroup:new yt(i.segments,Qx(i,e,n,i.children)),slicedSegments:e}:{segmentGroup:new yt(i.segments,i.children),slicedSegments:e}}function Qx(i,t,e,n){let r={};for(let s of e)if(wl(i,t,s)&&!n[hi(s)]){let o=new yt([],{});r[hi(s)]=o}return ie(ie({},n),r)}function eS(i,t){let e={};e[He]=t;for(let n of i)if(n.path===""&&hi(n)!==He){let r=new yt([],{});e[hi(n)]=r}return e}function tS(i,t,e,n){return e.some(r=>!wl(i,t,r)||!(hi(r)!==He)?!1:!(n!==void 0&&hi(r)===n))}function nS(i,t,e){return e.some(n=>wl(i,t,n))}function wl(i,t,e){return(i.hasChildren()||t.length>0)&&e.pathMatch==="full"?!1:e.path===""}function iS(i,t,e){return t.length===0&&!i.children[e]}var Xh=class{};async function rS(i,t,e,n,r,s,o="emptyOnly",a){return new $h(i,t,e,n,r,o,s,a).recognize()}var sS=31,$h=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(t,e,n,r,s,o,a,c){this.injector=t,this.configLoader=e,this.rootComponentType=n,this.config=r,this.urlTree=s,this.paramsInheritanceStrategy=o,this.urlSerializer=a,this.abortSignal=c,this.applyRedirects=new Wh(this.urlSerializer,this.urlTree)}noMatchError(t){return new Oe(4002,`'${t.segmentGroup}'`)}async recognize(){let t=Og(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:n}=await this.match(t),r=new zn(n,e),s=new xa("",r),o=$g(n,[],this.urlTree.queryParams,this.urlTree.fragment);return o.queryParams=this.urlTree.queryParams,s.url=this.urlSerializer.serialize(o),{state:s,tree:o}}async match(t){let e=new Js([],Object.freeze({}),Object.freeze(ie({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),He,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,t,He,e),rootSnapshot:e}}catch(n){if(n instanceof wa)return this.urlTree=n.urlTree,this.match(n.urlTree.root);throw n instanceof Zi?this.noMatchError(n):n}}async processSegmentGroup(t,e,n,r,s){if(n.segments.length===0&&n.hasChildren())return this.processChildren(t,e,n,s);let o=await this.processSegment(t,e,n,n.segments,r,!0,s);return o instanceof zn?[o]:[]}async processChildren(t,e,n,r){let s=[];for(let c of Object.keys(n.children))c==="primary"?s.unshift(c):s.push(c);let o=[];for(let c of s){let l=n.children[c],u=Jx(e,c),h=await this.processSegmentGroup(t,u,l,c,r);o.push(...h)}let a=hv(o);return oS(a),a}async processSegment(t,e,n,r,s,o,a){for(let c of e)try{return await this.processSegmentAgainstRoute(c._injector??t,e,c,n,r,s,o,a)}catch(l){if(l instanceof Zi||ov(l))continue;throw l}if(iS(n,r,s))return new Xh;throw new Zi(n)}async processSegmentAgainstRoute(t,e,n,r,s,o,a,c){if(hi(n)!==o&&(o===He||!wl(r,s,n)))throw new Zi(r);if(n.redirectTo===void 0)return this.matchSegmentAgainstRoute(t,r,n,s,o,c);if(this.allowRedirects&&a)return this.expandSegmentAgainstRouteUsingRedirect(t,r,e,n,s,o,c);throw new Zi(r)}async expandSegmentAgainstRouteUsingRedirect(t,e,n,r,s,o,a){let{matched:c,parameters:l,consumedSegments:u,positionalParamSegments:h,remainingSegments:d}=dv(e,r,s);if(!c)throw new Zi(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>sS&&(this.allowRedirects=!1));let p=this.createSnapshot(t,r,s,l,a);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let g=await this.applyRedirects.applyRedirectCommands(u,r.redirectTo,h,uv(p),t),b=await this.applyRedirects.lineralizeSegments(r,g);return this.processSegment(t,n,e,b.concat(d),o,!1,a)}createSnapshot(t,e,n,r,s){let o=new Js(n,r,Object.freeze(ie({},this.urlTree.queryParams)),this.urlTree.fragment,cS(e),hi(e),e.component??e._loadedComponent??null,e,lS(e),t),a=qh(o,s,this.paramsInheritanceStrategy);return o.params=Object.freeze(a.params),o.data=Object.freeze(a.data),o}async matchSegmentAgainstRoute(t,e,n,r,s,o){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let a=M=>this.createSnapshot(t,n,M.consumedSegments,M.parameters,o),c=await rl(Kx(e,n,r,t,this.urlSerializer,a,this.abortSignal));if(n.path==="**"&&(e.children={}),!c?.matched)throw new Zi(e);t=n._injector??t;let{routes:l}=await this.getChildConfig(t,n,r),u=n._loadedInjector??t,{parameters:h,consumedSegments:d,remainingSegments:p}=c,g=this.createSnapshot(t,n,d,h,o),{segmentGroup:b,slicedSegments:m}=Og(e,d,p,l,s);if(m.length===0&&b.hasChildren()){let M=await this.processChildren(u,l,b,g);return new zn(g,M)}if(l.length===0&&m.length===0)return new zn(g,[]);let f=hi(n)===s,x=await this.processSegment(u,l,b,m,f?He:s,!0,g);return new zn(g,x instanceof zn?[x]:[])}async getChildConfig(t,e,n){if(e.children)return{routes:e.children,injector:t};if(e.loadChildren){if(e._loadedRoutes!==void 0){let s=e._loadedNgModuleFactory;return s&&!e._loadedInjector&&(e._loadedInjector=s.create(t).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await rl(jx(t,e,n,this.urlSerializer,this.abortSignal))){let s=await this.configLoader.loadChildren(t,e);return e._loadedRoutes=s.routes,e._loadedInjector=s.injector,e._loadedNgModuleFactory=s.factory,s}throw qx(e)}return{routes:[],injector:t}}};function oS(i){i.sort((t,e)=>t.value.outlet===He?-1:e.value.outlet===He?1:t.value.outlet.localeCompare(e.value.outlet))}function aS(i){let t=i.value.routeConfig;return t&&t.path===""}function hv(i){let t=[],e=new Set;for(let n of i){if(!aS(n)){t.push(n);continue}let r=t.find(s=>n.value.routeConfig===s.value.routeConfig);r!==void 0?(r.children.push(...n.children),e.add(r)):t.push(n)}for(let n of e){let r=hv(n.children);t.push(new zn(n.value,r))}return t.filter(n=>!e.has(n))}function cS(i){return i.data||{}}function lS(i){return i.resolve||{}}function uS(i,t,e,n,r,s,o){return mr(async a=>{let{state:c,tree:l}=await rS(i,t,e,n,a.extractedUrl,r,s,o);return Ot(ie({},a),{targetSnapshot:c,urlAfterRedirects:l})})}function dS(i){return mr(t=>{let{targetSnapshot:e,guards:{canActivateChecks:n}}=t;if(!n.length)return Ve(t);let r=new Set(n.map(a=>a.route)),s=new Set;for(let a of r)if(!s.has(a))for(let c of fv(a))s.add(c);let o=0;return Dn(s).pipe($o(a=>r.has(a)?hS(a,e,i):(a.data=qh(a,a.parent,i).resolve,Ve(void 0))),wn(()=>o++),eh(1),mr(a=>o===s.size?Ve(t):Kn))})}function fv(i){let t=i.children.map(e=>fv(e)).flat();return[i,...t]}function hS(i,t,e){let n=i.routeConfig,r=i._resolve;return n?.title!==void 0&&!tv(n)&&(r[Ma]=n.title),Fc(()=>(i.data=qh(i,i.parent,e).resolve,fS(r,i,t).pipe(it(s=>(i._resolvedData=s,i.data=ie(ie({},i.data),s),null)))))}function fS(i,t,e){let n=Fh(i);if(n.length===0)return Ve({});let r={};return Dn(n).pipe(mr(s=>pS(i[s],t,e).pipe(vr(),wn(o=>{if(o instanceof Ks)throw yl(new Ir,o);r[s]=o}))),eh(1),it(()=>r),Xo(s=>ov(s)?Kn:Ic(s)))}function pS(i,t,e){let n=t._environmentInjector,r=no(i,n),s=r.resolve?r.resolve(t,e):Rn(n,()=>r(t,e));return ds(s)}function Fg(i){return cn(t=>{let e=i(t);return e?Dn(e).pipe(it(()=>t)):Ve(t)})}var Kh=(()=>{class i{buildTitle(e){let n,r=e.root;for(;r!==void 0;)n=this.getResolvedTitleForRoute(r)??n,r=r.children.find(s=>s.outlet===He);return n}getResolvedTitleForRoute(e){return e.data[Ma]}static \u0275fac=function(n){return new(n||i)};static \u0275prov=oe({token:i,factory:()=>A(pv),providedIn:"root"})}return i})(),pv=(()=>{class i extends Kh{title;constructor(e){super(),this.title=e}updateTitle(e){let n=this.buildTitle(e);n!==void 0&&this.title.setTitle(n)}static \u0275fac=function(n){return new(n||i)(Fe(Cg))};static \u0275prov=oe({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),io=new Ce("",{factory:()=>({})}),Aa=new Ce(""),mv=(()=>{class i{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=A(Wm);async loadComponent(e,n){if(this.componentLoaders.get(n))return this.componentLoaders.get(n);if(n._loadedComponent)return Promise.resolve(n._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(n);let r=(async()=>{try{let s=await kg(Rn(e,()=>n.loadComponent())),o=await _v(vv(s));return this.onLoadEndListener&&this.onLoadEndListener(n),n._loadedComponent=o,o}finally{this.componentLoaders.delete(n)}})();return this.componentLoaders.set(n,r),r}loadChildren(e,n){if(this.childrenLoaders.get(n))return this.childrenLoaders.get(n);if(n._loadedRoutes)return Promise.resolve({routes:n._loadedRoutes,injector:n._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(n);let r=(async()=>{try{let s=await gv(n,this.compiler,e,this.onLoadEndListener);return n._loadedRoutes=s.routes,n._loadedInjector=s.injector,n._loadedNgModuleFactory=s.factory,s}finally{this.childrenLoaders.delete(n)}})();return this.childrenLoaders.set(n,r),r}static \u0275fac=function(n){return new(n||i)};static \u0275prov=oe({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();async function gv(i,t,e,n){let r=await kg(Rn(e,()=>i.loadChildren())),s=await _v(vv(r)),o;s instanceof Fm||Array.isArray(s)?o=s:o=await t.compileModuleAsync(s),n&&n(i);let a,c,l=!1,u;return Array.isArray(o)?(c=o,l=!0):(a=o.create(e).injector,u=o,c=a.get(Aa,[],{optional:!0,self:!0}).flat()),{routes:c.map(Jh),injector:a,factory:u}}function mS(i){return i&&typeof i=="object"&&"default"in i}function vv(i){return mS(i)?i.default:i}async function _v(i){return i}var Ml=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275prov=oe({token:i,factory:()=>A(gS),providedIn:"root"})}return i})(),gS=(()=>{class i{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,n){return e}static \u0275fac=function(n){return new(n||i)};static \u0275prov=oe({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),yv=new Ce("");var vS=()=>{},bv=new Ce(""),xv=(()=>{class i{currentNavigation=Ne(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=Ne(null);events=new ft;transitionAbortWithErrorSubject=new ft;configLoader=A(mv);environmentInjector=A(ln);destroyRef=A(br);urlSerializer=A(eo);rootContexts=A(to);location=A(Tr);inputBindingEnabled=A(Sl,{optional:!0})!==null;titleStrategy=A(Kh);options=A(io,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=A(Ml);createViewTransition=A(yv,{optional:!0});navigationErrorHandler=A(bv,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>Ve(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=r=>this.events.next(new dl(r)),n=r=>this.events.next(new hl(r));this.configLoader.onLoadEndListener=n,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let n=++this.navigationId;Mt(()=>{this.transitions?.next(Ot(ie({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:n,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new pn(null),this.transitions.pipe(li(n=>n!==null),cn(n=>{let r=!1,s=new AbortController,o=()=>!r&&this.currentTransition?.id===n.id;return Ve(n).pipe(cn(a=>{if(this.navigationId>n.id)return this.cancelNavigationTransition(n,"",yn.SupersededByNewNavigation),Kn;this.currentTransition=n;let c=this.lastSuccessfulNavigation();this.currentNavigation.set({id:a.id,initialUrl:a.rawUrl,extractedUrl:a.extractedUrl,targetBrowserUrl:typeof a.extras.browserUrl=="string"?this.urlSerializer.parse(a.extras.browserUrl):a.extras.browserUrl,trigger:a.source,extras:a.extras,previousNavigation:c?Ot(ie({},c),{previousNavigation:null}):null,abort:()=>s.abort(),routesRecognizeHandler:a.routesRecognizeHandler,beforeActivateHandler:a.beforeActivateHandler});let l=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),u=a.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!l&&u!=="reload")return this.events.next(new Ki(a.id,this.urlSerializer.serialize(a.rawUrl),"",va.IgnoredSameUrlNavigation)),a.resolve(!1),Kn;if(this.urlHandlingStrategy.shouldProcessUrl(a.rawUrl))return Ve(a).pipe(cn(h=>(this.events.next(new Ji(h.id,this.urlSerializer.serialize(h.extractedUrl),h.source,h.restoredState)),h.id!==this.navigationId?Kn:Promise.resolve(h))),uS(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,s.signal),wn(h=>{n.targetSnapshot=h.targetSnapshot,n.urlAfterRedirects=h.urlAfterRedirects,this.currentNavigation.update(d=>(d.finalUrl=h.urlAfterRedirects,d)),this.events.next(new ya)}),cn(h=>Dn(n.routesRecognizeHandler.deferredHandle??Ve(void 0)).pipe(it(()=>h))),wn(()=>{let h=new _a(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(h)}));if(l&&this.urlHandlingStrategy.shouldProcessUrl(a.currentRawUrl)){let{id:h,extractedUrl:d,source:p,restoredState:g,extras:b}=a,m=new Ji(h,this.urlSerializer.serialize(d),p,g);this.events.next(m);let f=Qg(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=n=Ot(ie({},a),{targetSnapshot:f,urlAfterRedirects:d,extras:Ot(ie({},b),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(x=>(x.finalUrl=d,x)),Ve(n)}else return this.events.next(new Ki(a.id,this.urlSerializer.serialize(a.extractedUrl),"",va.IgnoredByUrlHandlingStrategy)),a.resolve(!1),Kn}),it(a=>{let c=new al(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);return this.events.next(c),this.currentTransition=n=Ot(ie({},a),{guards:Cx(a.targetSnapshot,a.currentSnapshot,this.rootContexts)}),n}),kx(a=>this.events.next(a)),cn(a=>{if(n.guardsResult=a.guardsResult,a.guardsResult&&typeof a.guardsResult!="boolean")throw yl(this.urlSerializer,a.guardsResult);let c=new cl(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot,!!a.guardsResult);if(this.events.next(c),!o())return Kn;if(!a.guardsResult)return this.cancelNavigationTransition(a,"",yn.GuardRejected),Kn;if(a.guards.canActivateChecks.length===0)return Ve(a);let l=new ll(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);if(this.events.next(l),!o())return Kn;let u=!1;return Ve(a).pipe(dS(this.paramsInheritanceStrategy),wn({next:()=>{u=!0;let h=new ul(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects),a.targetSnapshot);this.events.next(h)},complete:()=>{u||this.cancelNavigationTransition(a,"",yn.NoDataFromResolver)}}))}),Fg(a=>{let c=u=>{let h=[];if(u.routeConfig?._loadedComponent)u.component=u.routeConfig?._loadedComponent;else if(u.routeConfig?.loadComponent){let d=u._environmentInjector;h.push(this.configLoader.loadComponent(d,u.routeConfig).then(p=>{u.component=p}))}for(let d of u.children)h.push(...c(d));return h},l=c(a.targetSnapshot.root);return l.length===0?Ve(a):Dn(Promise.all(l).then(()=>a))}),Fg(()=>this.afterPreactivation()),cn(()=>{let{currentSnapshot:a,targetSnapshot:c}=n,l=this.createViewTransition?.(this.environmentInjector,a.root,c.root);return l?Dn(l).pipe(it(()=>n)):Ve(n)}),mn(1),cn(a=>{let c=Sx(e.routeReuseStrategy,a.targetSnapshot,a.currentRouterState);this.currentTransition=n=a=Ot(ie({},a),{targetRouterState:c}),this.currentNavigation.update(u=>(u.targetRouterState=c,u)),this.events.next(new Ys);let l=n.beforeActivateHandler.deferredHandle;return l?Dn(l.then(()=>a)):Ve(a)}),wn(a=>{new Hh(e.routeReuseStrategy,n.targetRouterState,n.currentRouterState,c=>this.events.next(c),this.inputBindingEnabled).activate(this.rootContexts),o()&&(r=!0,this.currentNavigation.update(c=>(c.abort=vS,c)),this.lastSuccessfulNavigation.set(Mt(this.currentNavigation)),this.events.next(new ri(a.id,this.urlSerializer.serialize(a.extractedUrl),this.urlSerializer.serialize(a.urlAfterRedirects))),this.titleStrategy?.updateTitle(a.targetRouterState.snapshot),a.resolve(!0))}),Ei(av(s.signal).pipe(li(()=>!r&&!n.targetRouterState),wn(()=>{this.cancelNavigationTransition(n,s.signal.reason+"",yn.Aborted)}))),wn({complete:()=>{r=!0}}),Ei(this.transitionAbortWithErrorSubject.pipe(wn(a=>{throw a}))),Is(()=>{s.abort(),r||this.cancelNavigationTransition(n,"",yn.SupersededByNewNavigation),this.currentTransition?.id===n.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),Xo(a=>{if(r=!0,this.destroyed)return n.resolve(!1),Kn;if(sv(a))this.events.next(new Pn(n.id,this.urlSerializer.serialize(n.extractedUrl),a.message,a.cancellationCode)),Ex(a)?this.events.next(new Zs(a.url,a.navigationBehaviorOptions)):n.resolve(!1);else{let c=new Qi(n.id,this.urlSerializer.serialize(n.extractedUrl),a,n.targetSnapshot??void 0);try{let l=Rn(this.environmentInjector,()=>this.navigationErrorHandler?.(c));if(l instanceof Ks){let{message:u,cancellationCode:h}=yl(this.urlSerializer,l);this.events.next(new Pn(n.id,this.urlSerializer.serialize(n.extractedUrl),u,h)),this.events.next(new Zs(l.redirectTo,l.navigationBehaviorOptions))}else throw this.events.next(c),a}catch(l){this.options.resolveNavigationPromiseOnError?n.resolve(!1):n.reject(l)}}return Kn}))}))}cancelNavigationTransition(e,n,r){let s=new Pn(e.id,this.urlSerializer.serialize(e.extractedUrl),n,r);this.events.next(s),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),n=Mt(this.currentNavigation),r=n?.targetBrowserUrl??n?.extractedUrl;return e.toString()!==r?.toString()&&!n?.extras.skipLocationChange}static \u0275fac=function(n){return new(n||i)};static \u0275prov=oe({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function _S(i){return i!==pa}var Sv=new Ce("");var wv=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275prov=oe({token:i,factory:()=>A(yS),providedIn:"root"})}return i})(),xl=class{shouldDetach(t){return!1}store(t,e){}shouldAttach(t){return!1}retrieve(t){return null}shouldReuseRoute(t,e){return t.routeConfig===e.routeConfig}shouldDestroyInjector(t){return!0}},yS=(()=>{class i extends xl{static \u0275fac=(()=>{let e;return function(r){return(e||(e=ui(i)))(r||i)}})();static \u0275prov=oe({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),El=(()=>{class i{urlSerializer=A(eo);options=A(io,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=A(Tr);urlHandlingStrategy=A(Ml);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new Gn;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:n,targetBrowserUrl:r}){let s=e!==void 0?this.urlHandlingStrategy.merge(e,n):n,o=r??s;return o instanceof Gn?this.urlSerializer.serialize(o):o}commitTransition({targetRouterState:e,finalUrl:n,initialUrl:r}){n&&e?(this.currentUrlTree=n,this.rawUrlTree=this.urlHandlingStrategy.merge(n,r),this.routerState=e):this.rawUrlTree=r}routerState=Qg(null,A(ln));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(n){return new(n||i)};static \u0275prov=oe({token:i,factory:()=>A(bS),providedIn:"root"})}return i})(),bS=(()=>{class i extends El{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(n=>{n.type==="popstate"&&setTimeout(()=>{e(n.url,n.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,n){e instanceof Ji?this.updateStateMemento():e instanceof Ki?this.commitTransition(n):e instanceof _a?this.urlUpdateStrategy==="eager"&&(n.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(n),n)):e instanceof Ys?(this.commitTransition(n),this.urlUpdateStrategy==="deferred"&&!n.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(n),n)):e instanceof Pn&&!Kg(e)?this.restoreHistory(n):e instanceof Qi?this.restoreHistory(n,!0):e instanceof ri&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,{extras:n,id:r}){let{replaceUrl:s,state:o}=n;if(this.location.isCurrentPathEqualTo(e)||s){let a=this.browserPageId,c=ie(ie({},o),this.generateNgRouterState(r,a));this.location.replaceState(e,"",c)}else{let a=ie(ie({},o),this.generateNgRouterState(r,this.browserPageId+1));this.location.go(e,"",a)}}restoreHistory(e,n=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,s=this.currentPageId-r;s!==0?this.location.historyGo(s):this.getCurrentUrlTree()===e.finalUrl&&s===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(n&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,n){return this.canceledNavigationResolution==="computed"?{navigationId:e,\u0275routerPageId:n}:{navigationId:e}}static \u0275fac=(()=>{let e;return function(r){return(e||(e=ui(i)))(r||i)}})();static \u0275prov=oe({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function Qh(i,t){i.events.pipe(li(e=>e instanceof ri||e instanceof Pn||e instanceof Qi||e instanceof Ki),it(e=>e instanceof ri||e instanceof Ki?0:(e instanceof Pn?e.code===yn.Redirect||e.code===yn.SupersededByNewNavigation:!1)?2:1),li(e=>e!==2),mn(1)).subscribe(()=>{t()})}var Or=(()=>{class i{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=A(oh);stateManager=A(El);options=A(io,{optional:!0})||{};pendingTasks=A(_m);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=A(xv);urlSerializer=A(eo);location=A(Tr);urlHandlingStrategy=A(Ml);injector=A(ln);_events=new ft;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=A(wv);injectorCleanup=A(Sv,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=A(Aa,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!A(Sl,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new Rs;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(n=>{try{let r=this.navigationTransitions.currentTransition,s=Mt(this.navigationTransitions.currentNavigation);if(r!==null&&s!==null){if(this.stateManager.handleRouterEvent(n,s),n instanceof Pn&&n.code!==yn.Redirect&&n.code!==yn.SupersededByNewNavigation)this.navigated=!0;else if(n instanceof ri)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(n instanceof Zs){let o=n.navigationBehaviorOptions,a=this.urlHandlingStrategy.merge(n.url,r.currentRawUrl),c=ie({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||_S(r.source)},o);this.scheduleNavigation(a,pa,null,c,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}bx(n)&&this._events.next(n)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),pa,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,n,r,s)=>{this.navigateToSyncWithBrowser(e,r,n,s)})}navigateToSyncWithBrowser(e,n,r,s){let o=r?.navigationId?r:null;if(r){let c=ie({},r);delete c.navigationId,delete c.\u0275routerPageId,Object.keys(c).length!==0&&(s.state=c)}let a=this.parseUrl(e);this.scheduleNavigation(a,n,o,s).catch(c=>{this.disposed||this.injector.get(Os)(c)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return Mt(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(Jh),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,n={}){let{relativeTo:r,queryParams:s,fragment:o,queryParamsHandling:a,preserveFragment:c}=n,l=c?this.currentUrlTree.fragment:o,u=null;switch(a??this.options.defaultQueryParamsHandling){case"merge":u=ie(ie({},this.currentUrlTree.queryParams),s);break;case"preserve":u=this.currentUrlTree.queryParams;break;default:u=s||null}u!==null&&(u=this.removeEmptyProps(u));let h;try{let d=r?r.snapshot:this.routerState.snapshot.root;h=qg(d)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),h=this.currentUrlTree.root}return Yg(h,e,u,l??null,this.urlSerializer)}navigateByUrl(e,n={skipLocationChange:!1}){let r=Pr(e)?e:this.parseUrl(e),s=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(s,pa,null,n)}navigate(e,n={skipLocationChange:!1}){return xS(e),this.navigateByUrl(this.createUrlTree(e,n),n)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.console.warn(_r(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,n){let r;if(n===!0?r=ie({},Bg):n===!1?r=ie({},Nh):r=ie(ie({},Nh),n),Pr(e))return Tg(this.currentUrlTree,e,r);let s=this.parseUrl(e);return Tg(this.currentUrlTree,s,r)}removeEmptyProps(e){return Object.entries(e).reduce((n,[r,s])=>(s!=null&&(n[r]=s),n),{})}scheduleNavigation(e,n,r,s,o){if(this.disposed)return Promise.resolve(!1);let a,c,l;o?(a=o.resolve,c=o.reject,l=o.promise):l=new Promise((h,d)=>{a=h,c=d});let u=this.pendingTasks.add();return Qh(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(u))}),this.navigationTransitions.handleNavigationRequest({source:n,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:s,resolve:a,reject:c,promise:l,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),l.catch(Promise.reject.bind(Promise))}static \u0275fac=function(n){return new(n||i)};static \u0275prov=oe({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function xS(i){for(let t=0;t<i.length;t++)if(i[t]==null)throw new Oe(4008,!1)}var MS=(()=>{class i{router=A(Or);stateManager=A(El);fragment=Ne("");queryParams=Ne({});path=Ne("");serializer=A(eo);constructor(){this.updateState(),this.router.events?.subscribe(e=>{e instanceof ri&&this.updateState()})}updateState(){let{fragment:e,root:n,queryParams:r}=this.stateManager.getCurrentUrlTree();this.fragment.set(e),this.queryParams.set(r),this.path.set(this.serializer.serialize(new Gn(n)))}static \u0275fac=function(n){return new(n||i)};static \u0275prov=oe({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),ro=(()=>{class i{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=A(new zs("href"),{optional:!0});reactiveHref=Xm(()=>this.isAnchorElement?this.computeHref(this._urlTree()):this.hrefAttributeValue);get href(){return Mt(this.reactiveHref)}set href(e){this.reactiveHref.set(e)}set target(e){this._target.set(e)}get target(){return Mt(this._target)}_target=Ne(void 0);set queryParams(e){this._queryParams.set(e)}get queryParams(){return Mt(this._queryParams)}_queryParams=Ne(void 0,{equal:()=>!1});set fragment(e){this._fragment.set(e)}get fragment(){return Mt(this._fragment)}_fragment=Ne(void 0);set queryParamsHandling(e){this._queryParamsHandling.set(e)}get queryParamsHandling(){return Mt(this._queryParamsHandling)}_queryParamsHandling=Ne(void 0);set state(e){this._state.set(e)}get state(){return Mt(this._state)}_state=Ne(void 0,{equal:()=>!1});set info(e){this._info.set(e)}get info(){return Mt(this._info)}_info=Ne(void 0,{equal:()=>!1});set relativeTo(e){this._relativeTo.set(e)}get relativeTo(){return Mt(this._relativeTo)}_relativeTo=Ne(void 0);set preserveFragment(e){this._preserveFragment.set(e)}get preserveFragment(){return Mt(this._preserveFragment)}_preserveFragment=Ne(!1);set skipLocationChange(e){this._skipLocationChange.set(e)}get skipLocationChange(){return Mt(this._skipLocationChange)}_skipLocationChange=Ne(!1);set replaceUrl(e){this._replaceUrl.set(e)}get replaceUrl(){return Mt(this._replaceUrl)}_replaceUrl=Ne(!1);isAnchorElement;onChanges=new ft;applicationErrorHandler=A(Os);options=A(io,{optional:!0});reactiveRouterState=A(MS);constructor(e,n,r,s,o,a){this.router=e,this.route=n,this.tabIndexAttribute=r,this.renderer=s,this.el=o,this.locationStrategy=a;let c=o.nativeElement.tagName?.toLowerCase();this.isAnchorElement=c==="a"||c==="area"||!!(typeof customElements=="object"&&customElements.get(c)?.observedAttributes?.includes?.("href"))}setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",e)}ngOnChanges(e){this.onChanges.next(this)}routerLinkInput=Ne(null);set routerLink(e){e==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(Pr(e)?this.routerLinkInput.set(e):this.routerLinkInput.set(Array.isArray(e)?e:[e]),this.setTabIndexIfNotOnNativeEl("0"))}onClick(e,n,r,s,o){let a=this._urlTree();if(a===null||this.isAnchorElement&&(e!==0||n||r||s||o||typeof this.target=="string"&&this.target!="_self"))return!0;let c={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(a,c)?.catch(l=>{this.applicationErrorHandler(l)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(e,n){let r=this.renderer,s=this.el.nativeElement;n!==null?r.setAttribute(s,e,n):r.removeAttribute(s,e)}_urlTree=ss(()=>{this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let e=r=>r==="preserve"||r==="merge";(e(this._queryParamsHandling())||e(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams();let n=this.routerLinkInput();return n===null||!this.router.createUrlTree?null:Pr(n)?n:this.router.createUrlTree(n,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})},{equal:(e,n)=>this.computeHref(e)===this.computeHref(n)});get urlTree(){return Mt(this._urlTree)}computeHref(e){return e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e))??"":null}static \u0275fac=function(n){return new(n||i)(bt(Or),bt(er),th("tabindex"),bt(In),bt(Nt),bt(Gs))};static \u0275dir=xt({type:i,selectors:[["","routerLink",""]],hostVars:2,hostBindings:function(n,r){n&1&&ze("click",function(o){return r.onClick(o.button,o.ctrlKey,o.shiftKey,o.altKey,o.metaKey)}),n&2&&Bn("href",r.reactiveHref(),Pm)("target",r._target())},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",Lt],skipLocationChange:[2,"skipLocationChange","skipLocationChange",Lt],replaceUrl:[2,"replaceUrl","replaceUrl",Lt],routerLink:"routerLink"},features:[Un]})}return i})();var ES=new Ce("");function ef(i,...t){return yr([{provide:Aa,multi:!0,useValue:i},[],{provide:er,useFactory:CS},{provide:km,multi:!0,useFactory:AS},t.map(e=>e.\u0275providers)])}function CS(){return A(Or).routerState.root}function AS(){let i=A(Ft);return t=>{let e=i.get(ei);if(t!==e.components[0])return;let n=i.get(Or),r=i.get(TS);i.get(DS)===1&&n.initialNavigation(),i.get(RS,null,{optional:!0})?.setUpPreloading(),i.get(ES,null,{optional:!0})?.init(),n.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var TS=new Ce("",{factory:()=>new ft}),DS=new Ce("",{factory:()=>1});var RS=new Ce("");var IS="@",PS=(()=>{class i{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=A(Ft);loadingSchedulerFn=A(OS,{optional:!0});_engine;constructor(e,n,r,s,o){this.doc=e,this.delegate=n,this.zone=r,this.animationType=s,this.moduleImpl=o}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-HM527BJF.js").then(r=>r),n;return this.loadingSchedulerFn?n=this.loadingSchedulerFn(e):n=e(),n.catch(r=>{throw new Oe(5300,!1)}).then(({\u0275createEngine:r,\u0275AnimationRendererFactory:s})=>{this._engine=r(this.animationType,this.doc);let o=new s(this.delegate,this._engine,this.zone);return this.delegate=o,o})}createRenderer(e,n){let r=this.delegate.createRenderer(e,n);if(r.\u0275type===0)return r;typeof r.throwOnSyntheticProps=="boolean"&&(r.throwOnSyntheticProps=!1);let s=new tf(r);return n?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(o=>{let a=o.createRenderer(e,n);s.use(a),this.scheduler??=this.injector.get(bm,null,{optional:!0}),this.scheduler?.notify(10)}).catch(o=>{s.use(r)}),s}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(e){this._engine?.flush(),this.delegate.componentReplaced?.(e)}static \u0275fac=function(n){ih()};static \u0275prov=oe({token:i,factory:i.\u0275fac})}return i})(),tf=class{delegate;replay=[];\u0275type=1;constructor(t){this.delegate=t}use(t){if(this.delegate=t,this.replay!==null){for(let e of this.replay)e(t);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(t,e){return this.delegate.createElement(t,e)}createComment(t){return this.delegate.createComment(t)}createText(t){return this.delegate.createText(t)}get destroyNode(){return this.delegate.destroyNode}appendChild(t,e){this.delegate.appendChild(t,e)}insertBefore(t,e,n,r){this.delegate.insertBefore(t,e,n,r)}removeChild(t,e,n,r){this.delegate.removeChild(t,e,n,r)}selectRootElement(t,e){return this.delegate.selectRootElement(t,e)}parentNode(t){return this.delegate.parentNode(t)}nextSibling(t){return this.delegate.nextSibling(t)}setAttribute(t,e,n,r){this.delegate.setAttribute(t,e,n,r)}removeAttribute(t,e,n){this.delegate.removeAttribute(t,e,n)}addClass(t,e){this.delegate.addClass(t,e)}removeClass(t,e){this.delegate.removeClass(t,e)}setStyle(t,e,n,r){this.delegate.setStyle(t,e,n,r)}removeStyle(t,e,n){this.delegate.removeStyle(t,e,n)}setProperty(t,e,n){this.shouldReplay(e)&&this.replay.push(r=>r.setProperty(t,e,n)),this.delegate.setProperty(t,e,n)}setValue(t,e){this.delegate.setValue(t,e)}listen(t,e,n,r){return this.shouldReplay(e)&&this.replay.push(s=>s.listen(t,e,n,r)),this.delegate.listen(t,e,n,r)}shouldReplay(t){return this.replay!==null&&t.startsWith(IS)}},OS=new Ce("");function Mv(i="animations"){return Zo("NgAsyncAnimations"),yr([{provide:Qn,useFactory:()=>new PS(A(Je),A(oa),A(mt),i)},{provide:Ns,useValue:i==="noop"?"NoopAnimations":"BrowserAnimations"}])}function Ta(i){return i.buttons===0||i.detail===0}function Da(i){let t=i.touches&&i.touches[0]||i.changedTouches&&i.changedTouches[0];return!!t&&t.identifier===-1&&(t.radiusX==null||t.radiusX===1)&&(t.radiusY==null||t.radiusY===1)}var nf;function Ev(){if(nf==null){let i=typeof document<"u"?document.head:null;nf=!!(i&&(i.createShadowRoot||i.attachShadow))}return nf}function rf(i){if(Ev()){let t=i.getRootNode?i.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&t instanceof ShadowRoot)return t}return null}function On(i){return i.composedPath?i.composedPath()[0]:i.target}var sf;try{sf=typeof Intl<"u"&&Intl.v8BreakIterator}catch{sf=!1}var Cn=(()=>{class i{_platformId=A(Fs);isBrowser=this._platformId?ag(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||sf)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(n){return new(n||i)};static \u0275prov=oe({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Ra;function Cv(){if(Ra==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>Ra=!0}))}finally{Ra=Ra||!1}return Ra}function so(i){return Cv()?i:!!i.capture}function Fr(i){return i instanceof Nt?i.nativeElement:i}var Av=new Ce("cdk-input-modality-detector-options"),Tv={ignoreKeys:[18,17,224,91,16]},Dv=650,of={passive:!0,capture:!0},Rv=(()=>{class i{_platform=A(Cn);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new pn(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(n=>n===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=On(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<Dv||(this._modality.next(Ta(e)?"keyboard":"mouse"),this._mostRecentTarget=On(e))};_onTouchstart=e=>{if(Da(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=On(e)};constructor(){let e=A(mt),n=A(Je),r=A(Av,{optional:!0});if(this._options=ie(ie({},Tv),r),this.modalityDetected=this._modality.pipe(Lc(1)),this.modalityChanged=this.modalityDetected.pipe(pm()),this._platform.isBrowser){let s=A(Qn).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[s.listen(n,"keydown",this._onKeydown,of),s.listen(n,"mousedown",this._onMousedown,of),s.listen(n,"touchstart",this._onTouchstart,of)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(n){return new(n||i)};static \u0275prov=oe({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Ia=(function(i){return i[i.IMMEDIATE=0]="IMMEDIATE",i[i.EVENTUAL=1]="EVENTUAL",i})(Ia||{}),Iv=new Ce("cdk-focus-monitor-default-options"),Cl=so({passive:!0,capture:!0}),Pa=(()=>{class i{_ngZone=A(mt);_platform=A(Cn);_inputModalityDetector=A(Rv);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=A(Je);_stopInputModalityDetector=new ft;constructor(){let e=A(Iv,{optional:!0});this._detectionMode=e?.detectionMode||Ia.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let n=On(e);for(let r=n;r;r=r.parentElement)e.type==="focus"?this._onFocus(e,r):this._onBlur(e,r)};monitor(e,n=!1){let r=Fr(e);if(!this._platform.isBrowser||r.nodeType!==1)return Ve();let s=rf(r)||this._document,o=this._elementInfo.get(r);if(o)return n&&(o.checkChildren=!0),o.subject;let a={checkChildren:n,subject:new ft,rootNode:s};return this._elementInfo.set(r,a),this._registerGlobalListeners(a),a.subject}stopMonitoring(e){let n=Fr(e),r=this._elementInfo.get(n);r&&(r.subject.complete(),this._setClasses(n),this._elementInfo.delete(n),this._removeGlobalListeners(r))}focusVia(e,n,r){let s=Fr(e),o=this._document.activeElement;s===o?this._getClosestElementsInfo(s).forEach(([a,c])=>this._originChanged(a,n,c)):(this._setOrigin(n),typeof s.focus=="function"&&s.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,n)=>this.stopMonitoring(n))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===Ia.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,n){e.classList.toggle("cdk-focused",!!n),e.classList.toggle("cdk-touch-focused",n==="touch"),e.classList.toggle("cdk-keyboard-focused",n==="keyboard"),e.classList.toggle("cdk-mouse-focused",n==="mouse"),e.classList.toggle("cdk-program-focused",n==="program")}_setOrigin(e,n=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&n,this._detectionMode===Ia.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?Dv:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,n){let r=this._elementInfo.get(n),s=On(e);!r||!r.checkChildren&&n!==s||this._originChanged(n,this._getFocusOrigin(s),r)}_onBlur(e,n){let r=this._elementInfo.get(n);!r||r.checkChildren&&e.relatedTarget instanceof Node&&n.contains(e.relatedTarget)||(this._setClasses(n),this._emitOrigin(r,null))}_emitOrigin(e,n){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(n))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let n=e.rootNode,r=this._rootNodeFocusListenerCount.get(n)||0;r||this._ngZone.runOutsideAngular(()=>{n.addEventListener("focus",this._rootNodeFocusAndBlurListener,Cl),n.addEventListener("blur",this._rootNodeFocusAndBlurListener,Cl)}),this._rootNodeFocusListenerCount.set(n,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(Ei(this._stopInputModalityDetector)).subscribe(s=>{this._setOrigin(s,!0)}))}_removeGlobalListeners(e){let n=e.rootNode;if(this._rootNodeFocusListenerCount.has(n)){let r=this._rootNodeFocusListenerCount.get(n);r>1?this._rootNodeFocusListenerCount.set(n,r-1):(n.removeEventListener("focus",this._rootNodeFocusAndBlurListener,Cl),n.removeEventListener("blur",this._rootNodeFocusAndBlurListener,Cl),this._rootNodeFocusListenerCount.delete(n))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,n,r){this._setClasses(e,n),this._emitOrigin(r,n),this._lastFocusOrigin=n}_getClosestElementsInfo(e){let n=[];return this._elementInfo.forEach((r,s)=>{(s===e||r.checkChildren&&s.contains(e))&&n.push([s,r])}),n}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:n,mostRecentModality:r}=this._inputModalityDetector;if(r!=="mouse"||!n||n===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let s=e.labels;if(s){for(let o=0;o<s.length;o++)if(s[o].contains(n))return!0}return!1}static \u0275fac=function(n){return new(n||i)};static \u0275prov=oe({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Al=new WeakMap,Oi=(()=>{class i{_appRef;_injector=A(Ft);_environmentInjector=A(ln);load(e){let n=this._appRef=this._appRef||this._injector.get(ei),r=Al.get(n);r||(r={loaders:new Set,refs:[]},Al.set(n,r),n.onDestroy(()=>{Al.get(n)?.refs.forEach(s=>s.destroy()),Al.delete(n)})),r.loaders.has(e)||(r.loaders.add(e),r.refs.push(Hc(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(n){return new(n||i)};static \u0275prov=oe({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Tl;function FS(){if(Tl===void 0&&(Tl=null,typeof window<"u")){let i=window;i.trustedTypes!==void 0&&(Tl=i.trustedTypes.createPolicy("angular#components",{createHTML:t=>t}))}return Tl}function hs(i){return FS()?.createHTML(i)||i}function Pv(i,t,e){let n=e.sanitize(Mn.HTML,t);i.innerHTML=hs(n||"")}function Oa(i){return Array.isArray(i)?i:[i]}var Ov=new Set,fs,Dl=(()=>{class i{_platform=A(Cn);_nonce=A(Yo,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):LS}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&NS(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(n){return new(n||i)};static \u0275prov=oe({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function NS(i,t){if(!Ov.has(i))try{fs||(fs=document.createElement("style"),t&&fs.setAttribute("nonce",t),fs.setAttribute("type","text/css"),document.head.appendChild(fs)),fs.sheet&&(fs.sheet.insertRule(`@media ${i} {body{ }}`,0),Ov.add(i))}catch(e){console.error(e)}}function LS(i){return{matches:i==="all"||i==="",media:i,addListener:()=>{},removeListener:()=>{}}}var af=(()=>{class i{_mediaMatcher=A(Dl);_zone=A(mt);_queries=new Map;_destroySubject=new ft;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return Fv(Oa(e)).some(r=>this._registerQuery(r).mql.matches)}observe(e){let r=Fv(Oa(e)).map(o=>this._registerQuery(o).observable),s=Pc(r);return s=Oc(s.pipe(mn(1)),s.pipe(Lc(1),fm(0))),s.pipe(it(o=>{let a={matches:!1,breakpoints:{}};return o.forEach(({matches:c,query:l})=>{a.matches=a.matches||c,a.breakpoints[l]=c}),a}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let n=this._mediaMatcher.matchMedia(e),s={observable:new Mi(o=>{let a=c=>this._zone.run(()=>o.next(c));return n.addListener(a),()=>{n.removeListener(a)}}).pipe(kc(n),it(({matches:o})=>({query:e,matches:o})),Ei(this._destroySubject)),mql:n};return this._queries.set(e,s),s}static \u0275fac=function(n){return new(n||i)};static \u0275prov=oe({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function Fv(i){return i.map(t=>t.split(",")).reduce((t,e)=>t.concat(e)).map(t=>t.trim())}var Nv=new Ce("liveAnnouncerElement",{providedIn:"root",factory:()=>null}),Lv=new Ce("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),kS=0,cf=(()=>{class i{_ngZone=A(mt);_defaultOptions=A(Lv,{optional:!0});_liveElement;_document=A(Je);_sanitizer=A(ua);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=A(Nv,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...n){let r=this._defaultOptions,s,o;return n.length===1&&typeof n[0]=="number"?o=n[0]:[s,o]=n,this.clear(),clearTimeout(this._previousTimeout),s||(s=r&&r.politeness?r.politeness:"polite"),o==null&&r&&(o=r.duration),this._liveElement.setAttribute("aria-live",s),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(a=>this._currentResolve=a)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e=="string"?this._liveElement.textContent=e:Pv(this._liveElement,e,this._sanitizer),typeof o=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),o)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e="cdk-live-announcer-element",n=this._document.getElementsByClassName(e),r=this._document.createElement("div");for(let s=0;s<n.length;s++)n[s].remove();return r.classList.add(e),r.classList.add("cdk-visually-hidden"),r.setAttribute("aria-atomic","true"),r.setAttribute("aria-live","polite"),r.id=`cdk-live-announcer-${kS++}`,this._document.body.appendChild(r),r}_exposeAnnouncerToModals(e){let n=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let r=0;r<n.length;r++){let s=n[r],o=s.getAttribute("aria-owns");o?o.indexOf(e)===-1&&s.setAttribute("aria-owns",o+" "+e):s.setAttribute("aria-owns",e)}}static \u0275fac=function(n){return new(n||i)};static \u0275prov=oe({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var lf={},tr=class i{_appId=A(qo);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(t,e=!1){return this._appId!=="ng"&&(t+=this._appId),lf.hasOwnProperty(t)||(lf[t]=0),`${t}${e?i._infix+"-":""}${lf[t]++}`}static \u0275fac=function(e){return new(e||i)};static \u0275prov=oe({token:i,factory:i.\u0275fac,providedIn:"root"})};var kv={XSmall:"(max-width: 599.98px)",Small:"(min-width: 600px) and (max-width: 959.98px)",Medium:"(min-width: 960px) and (max-width: 1279.98px)",Large:"(min-width: 1280px) and (max-width: 1919.98px)",XLarge:"(min-width: 1920px)",Handset:"(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)",Tablet:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",Web:"(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)",HandsetPortrait:"(max-width: 599.98px) and (orientation: portrait)",TabletPortrait:"(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)",WebPortrait:"(min-width: 840px) and (orientation: portrait)",HandsetLandscape:"(max-width: 959.98px) and (orientation: landscape)",TabletLandscape:"(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)",WebLandscape:"(min-width: 1280px) and (orientation: landscape)"};function uf(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}function ps(i){return i==null?"":typeof i=="string"?i:`${i}px`}var US=new Ce("cdk-dir-doc",{providedIn:"root",factory:()=>A(Je)}),BS=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function VS(i){let t=i?.toLowerCase()||"";return t==="auto"&&typeof navigator<"u"&&navigator?.language?BS.test(navigator.language)?"rtl":"ltr":t==="rtl"?"rtl":"ltr"}var Uv=(()=>{class i{get value(){return this.valueSignal()}valueSignal=Ne("ltr");change=new en;constructor(){let e=A(US,{optional:!0});if(e){let n=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(VS(n||r||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(n){return new(n||i)};static \u0275prov=oe({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Fa=class{_attachedHost=null;attach(t){return this._attachedHost=t,t.attach(this)}detach(){let t=this._attachedHost;t!=null&&(this._attachedHost=null,t.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(t){this._attachedHost=t}},oo=class extends Fa{component;viewContainerRef;injector;projectableNodes;bindings;constructor(t,e,n,r,s){super(),this.component=t,this.viewContainerRef=e,this.injector=n,this.projectableNodes=r,this.bindings=s||null}},ao=class extends Fa{templateRef;viewContainerRef;context;injector;constructor(t,e,n,r){super(),this.templateRef=t,this.viewContainerRef=e,this.context=n,this.injector=r}get origin(){return this.templateRef.elementRef}attach(t,e=this.context){return this.context=e,super.attach(t)}detach(){return this.context=void 0,super.detach()}},df=class extends Fa{element;constructor(t){super(),this.element=t instanceof Nt?t.nativeElement:t}},co=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(t){if(t instanceof oo)return this._attachedPortal=t,this.attachComponentPortal(t);if(t instanceof ao)return this._attachedPortal=t,this.attachTemplatePortal(t);if(this.attachDomPortal&&t instanceof df)return this._attachedPortal=t,this.attachDomPortal(t)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(t){this._disposeFn=t}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},Rl=class extends co{outletElement;_appRef;_defaultInjector;constructor(t,e,n){super(),this.outletElement=t,this._appRef=e,this._defaultInjector=n}attachComponentPortal(t){let e;if(t.viewContainerRef){let n=t.injector||t.viewContainerRef.injector,r=n.get(Vc,null,{optional:!0})||void 0;e=t.viewContainerRef.createComponent(t.component,{index:t.viewContainerRef.length,injector:n,ngModuleRef:r,projectableNodes:t.projectableNodes||void 0,bindings:t.bindings||void 0}),this.setDisposeFn(()=>e.destroy())}else{let n=this._appRef,r=t.injector||this._defaultInjector||Ft.NULL,s=r.get(ln,n.injector);e=Hc(t.component,{elementInjector:r,environmentInjector:s,projectableNodes:t.projectableNodes||void 0,bindings:t.bindings||void 0}),n.attachView(e.hostView),this.setDisposeFn(()=>{n.viewCount>0&&n.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=t,e}attachTemplatePortal(t){let e=t.viewContainerRef,n=e.createEmbeddedView(t.templateRef,t.context,{injector:t.injector});return n.rootNodes.forEach(r=>this.outletElement.appendChild(r)),n.detectChanges(),this.setDisposeFn(()=>{let r=e.indexOf(n);r!==-1&&e.remove(r)}),this._attachedPortal=t,n}attachDomPortal=t=>{let e=t.element;e.parentNode;let n=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(n,e),this.outletElement.appendChild(e),this._attachedPortal=t,super.setDisposeFn(()=>{n.parentNode&&n.parentNode.replaceChild(e,n)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(t){return t.hostView.rootNodes[0]}};var hf=(()=>{class i extends co{_moduleRef=A(Vc,{optional:!0});_document=A(Je);_viewContainerRef=A(Us);_isInitialized=!1;_attachedRef=null;constructor(){super()}get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new en;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let n=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,r=n.createComponent(e.component,{index:n.length,injector:e.injector||n.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0});return n!==this._viewContainerRef&&this._getRootNode().appendChild(r.hostView.rootNodes[0]),super.setDisposeFn(()=>r.destroy()),this._attachedPortal=e,this._attachedRef=r,this.attached.emit(r),r}attachTemplatePortal(e){e.setAttachedHost(this);let n=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=n,this.attached.emit(n),n}attachDomPortal=e=>{let n=e.element;n.parentNode;let r=this._document.createComment("dom-portal");e.setAttachedHost(this),n.parentNode.insertBefore(r,n),this._getRootNode().appendChild(n),this._attachedPortal=e,super.setDisposeFn(()=>{r.parentNode&&r.parentNode.replaceChild(n,r)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=function(n){return new(n||i)};static \u0275dir=xt({type:i,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[En]})}return i})();var Il=class{enable(){}disable(){}attach(){}};var lo=class{positionStrategy;scrollStrategy=new Il;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(t){if(t){let e=Object.keys(t);for(let n of e)t[n]!==void 0&&(this[n]=t[n])}}};var zv=(()=>{class i{_attachedOverlays=[];_document=A(Je);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let n=this._attachedOverlays.indexOf(e);n>-1&&this._attachedOverlays.splice(n,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,n,r){return r.observers.length<1?!1:e.eventPredicate?e.eventPredicate(n):!0}static \u0275fac=function(n){return new(n||i)};static \u0275prov=oe({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Gv=(()=>{class i extends zv{_ngZone=A(mt);_renderer=A(Qn).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let n=this._attachedOverlays;for(let r=n.length-1;r>-1;r--){let s=n[r];if(this.canReceiveEvent(s,e,s._keydownEvents)){this._ngZone.run(()=>s._keydownEvents.next(e));break}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=ui(i)))(r||i)}})();static \u0275prov=oe({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Hv=(()=>{class i extends zv{_platform=A(Cn);_ngZone=A(mt);_renderer=A(Qn).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let n=this._document.body,r={capture:!0},s=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[s.listen(n,"pointerdown",this._pointerDownListener,r),s.listen(n,"click",this._clickListener,r),s.listen(n,"auxclick",this._clickListener,r),s.listen(n,"contextmenu",this._clickListener,r)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=n.style.cursor,n.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=On(e)};_clickListener=e=>{let n=On(e),r=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:n;this._pointerDownEventTarget=null;let s=this._attachedOverlays.slice();for(let o=s.length-1;o>-1;o--){let a=s[o],c=a._outsidePointerEvents;if(!(!a.hasAttached()||!this.canReceiveEvent(a,e,c))){if(Bv(a.overlayElement,n)||Bv(a.overlayElement,r))break;this._ngZone?this._ngZone.run(()=>c.next(e)):c.next(e)}}};static \u0275fac=(()=>{let e;return function(r){return(e||(e=ui(i)))(r||i)}})();static \u0275prov=oe({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function Bv(i,t){let e=typeof ShadowRoot<"u"&&ShadowRoot,n=t;for(;n;){if(n===i)return!0;n=e&&n instanceof ShadowRoot?n.host:n.parentNode}return!1}var Wv=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275cmp=_t({type:i,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(n,r){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2,changeDetection:0})}return i})(),GS=(()=>{class i{_platform=A(Cn);_containerElement;_document=A(Je);_styleLoader=A(Oi);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||uf()){let r=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let s=0;s<r.length;s++)r[s].remove()}let n=this._document.createElement("div");n.classList.add(e),uf()?n.setAttribute("platform","test"):this._platform.isBrowser||n.setAttribute("platform","server"),this._document.body.appendChild(n),this._containerElement=n}_loadStyles(){this._styleLoader.load(Wv)}static \u0275fac=function(n){return new(n||i)};static \u0275prov=oe({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),ff=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(t,e,n,r){this._renderer=e,this._ngZone=n,this.element=t.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",r)}detach(){this._ngZone.runOutsideAngular(()=>{let t=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(t,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),t.style.pointerEvents="none",t.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function jv(i){return i&&i.nodeType===1}var Pl=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new ft;_attachments=new ft;_detachments=new ft;_positionStrategy;_scrollStrategy;_locationChanges=Rs.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new ft;_outsidePointerEvents=new ft;_afterNextRenderRef;constructor(t,e,n,r,s,o,a,c,l,u=!1,h,d){this._portalOutlet=t,this._host=e,this._pane=n,this._config=r,this._ngZone=s,this._keyboardDispatcher=o,this._document=a,this._location=c,this._outsideClickDispatcher=l,this._animationsDisabled=u,this._injector=h,this._renderer=d,r.scrollStrategy&&(this._scrollStrategy=r.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=r.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(t){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(t);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=di(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let t=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),t}dispose(){if(this._disposed)return;let t=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,t&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(t){t!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=t,this.hasAttached()&&(t.attach(this),this.updatePosition()))}updateSize(t){this._config=ie(ie({},this._config),t),this._updateElementSize()}setDirection(t){this._config=Ot(ie({},this._config),{direction:t}),this._updateElementDirection()}addPanelClass(t){this._pane&&this._toggleClasses(this._pane,t,!0)}removePanelClass(t){this._pane&&this._toggleClasses(this._pane,t,!1)}getDirection(){let t=this._config.direction;return t?typeof t=="string"?t:t.value:"ltr"}updateScrollStrategy(t){t!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=t,this.hasAttached()&&(t.attach(this),t.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let t=this._pane.style;t.width=ps(this._config.width),t.height=ps(this._config.height),t.minWidth=ps(this._config.minWidth),t.minHeight=ps(this._config.minHeight),t.maxWidth=ps(this._config.maxWidth),t.maxHeight=ps(this._config.maxHeight)}_togglePointerEvents(t){this._pane.style.pointerEvents=t?"":"none"}_attachHost(){if(!this._host.parentElement){let t=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;jv(t)?t.after(this._host):t?.type==="parent"?t.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let t="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new ff(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(t))}):this._backdropRef.element.classList.add(t)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(t,e,n){let r=Oa(e||[]).filter(s=>!!s);r.length&&(n?t.classList.add(...r):t.classList.remove(...r))}_detachContentWhenEmpty(){let t=!1;try{this._detachContentAfterRenderRef=di(()=>{t=!0,this._detachContent()},{injector:this._injector})}catch(e){if(t)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let t=this._scrollStrategy;t?.disable(),t?.detach?.()}};var Vv="cdk-global-overlay-wrapper";function pf(i){return new Ol}var Ol=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(t){let e=t.getConfig();this._overlayRef=t,this._width&&!e.width&&t.updateSize({width:this._width}),this._height&&!e.height&&t.updateSize({height:this._height}),t.hostElement.classList.add(Vv),this._isDisposed=!1}top(t=""){return this._bottomOffset="",this._topOffset=t,this._alignItems="flex-start",this}left(t=""){return this._xOffset=t,this._xPosition="left",this}bottom(t=""){return this._topOffset="",this._bottomOffset=t,this._alignItems="flex-end",this}right(t=""){return this._xOffset=t,this._xPosition="right",this}start(t=""){return this._xOffset=t,this._xPosition="start",this}end(t=""){return this._xOffset=t,this._xPosition="end",this}width(t=""){return this._overlayRef?this._overlayRef.updateSize({width:t}):this._width=t,this}height(t=""){return this._overlayRef?this._overlayRef.updateSize({height:t}):this._height=t,this}centerHorizontally(t=""){return this.left(t),this._xPosition="center",this}centerVertically(t=""){return this.top(t),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let t=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,n=this._overlayRef.getConfig(),{width:r,height:s,maxWidth:o,maxHeight:a}=n,c=(r==="100%"||r==="100vw")&&(!o||o==="100%"||o==="100vw"),l=(s==="100%"||s==="100vh")&&(!a||a==="100%"||a==="100vh"),u=this._xPosition,h=this._xOffset,d=this._overlayRef.getConfig().direction==="rtl",p="",g="",b="";c?b="flex-start":u==="center"?(b="center",d?g=h:p=h):d?u==="left"||u==="end"?(b="flex-end",p=h):(u==="right"||u==="start")&&(b="flex-start",g=h):u==="left"||u==="start"?(b="flex-start",p=h):(u==="right"||u==="end")&&(b="flex-end",g=h),t.position=this._cssPosition,t.marginLeft=c?"0":p,t.marginTop=l?"0":this._topOffset,t.marginBottom=this._bottomOffset,t.marginRight=c?"0":g,e.justifyContent=b,e.alignItems=l?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let t=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,n=e.style;e.classList.remove(Vv),n.justifyContent=n.alignItems=t.marginTop=t.marginBottom=t.marginLeft=t.marginRight=t.position="",this._overlayRef=null,this._isDisposed=!0}};var Xv=new Ce("OVERLAY_DEFAULT_CONFIG");function mf(i,t){i.get(Oi).load(Wv);let e=i.get(GS),n=i.get(Je),r=i.get(tr),s=i.get(ei),o=i.get(Uv),a=i.get(In,null,{optional:!0})||i.get(Qn).createRenderer(null,null),c=new lo(t),l=i.get(Xv,null,{optional:!0})?.usePopover??!0;c.direction=c.direction||o.value,"showPopover"in n.body?c.usePopover=t?.usePopover??l:c.usePopover=!1;let u=n.createElement("div"),h=n.createElement("div");u.id=r.getId("cdk-overlay-"),u.classList.add("cdk-overlay-pane"),h.appendChild(u),c.usePopover&&(h.setAttribute("popover","manual"),h.classList.add("cdk-overlay-popover"));let d=c.usePopover?c.positionStrategy?.getPopoverInsertionPoint?.():null;return jv(d)?d.after(h):d?.type==="parent"?d.element.appendChild(h):e.getContainerElement().appendChild(h),new Pl(new Rl(u,s,i),h,u,c,i.get(mt),i.get(Gv),n,i.get(Tr),i.get(Hv),t?.disableAnimations??i.get(Ns,null,{optional:!0})==="NoopAnimations",i.get(ln),a)}var WS=new Ce("MATERIAL_ANIMATIONS"),$v=null;function jS(){return A(WS,{optional:!0})?.animationsDisabled||A(Ns,{optional:!0})==="NoopAnimations"?"di-disabled":($v??=A(Dl).matchMedia("(prefers-reduced-motion)").matches,$v?"reduced-motion":"enabled")}function fi(){return jS()!=="enabled"}var si=(function(i){return i[i.FADING_IN=0]="FADING_IN",i[i.VISIBLE=1]="VISIBLE",i[i.FADING_OUT=2]="FADING_OUT",i[i.HIDDEN=3]="HIDDEN",i})(si||{}),gf=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=si.HIDDEN;constructor(t,e,n,r=!1){this._renderer=t,this.element=e,this.config=n,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},qv=so({passive:!0,capture:!0}),vf=class{_events=new Map;addHandler(t,e,n,r){let s=this._events.get(e);if(s){let o=s.get(n);o?o.add(r):s.set(n,new Set([r]))}else this._events.set(e,new Map([[n,new Set([r])]])),t.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,qv)})}removeHandler(t,e,n){let r=this._events.get(t);if(!r)return;let s=r.get(e);s&&(s.delete(n),s.size===0&&r.delete(e),r.size===0&&(this._events.delete(t),document.removeEventListener(t,this._delegateEventHandler,qv)))}_delegateEventHandler=t=>{let e=On(t);e&&this._events.get(t.type)?.forEach((n,r)=>{(r===e||r.contains(e))&&n.forEach(s=>s.handleEvent(t))})}},Na={enterDuration:225,exitDuration:150},XS=800,Yv=so({passive:!0,capture:!0}),Zv=["mousedown","touchstart"],Jv=["mouseup","mouseleave","touchend","touchcancel"],$S=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275cmp=_t({type:i,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(n,r){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return i})(),La=class i{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new vf;constructor(t,e,n,r,s){this._target=t,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=Fr(n)),s&&s.get(Oi).load($S)}fadeInRipple(t,e,n={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),s=ie(ie({},Na),n.animation);n.centered&&(t=r.left+r.width/2,e=r.top+r.height/2);let o=n.radius||qS(t,e,r),a=t-r.left,c=e-r.top,l=s.enterDuration,u=document.createElement("div");u.classList.add("mat-ripple-element"),u.style.left=`${a-o}px`,u.style.top=`${c-o}px`,u.style.height=`${o*2}px`,u.style.width=`${o*2}px`,n.color!=null&&(u.style.backgroundColor=n.color),u.style.transitionDuration=`${l}ms`,this._containerElement.appendChild(u);let h=window.getComputedStyle(u),d=h.transitionProperty,p=h.transitionDuration,g=d==="none"||p==="0s"||p==="0s, 0s"||r.width===0&&r.height===0,b=new gf(this,u,n,g);u.style.transform="scale3d(1, 1, 1)",b.state=si.FADING_IN,n.persistent||(this._mostRecentTransientRipple=b);let m=null;return!g&&(l||s.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let f=()=>{m&&(m.fallbackTimer=null),clearTimeout(M),this._finishRippleTransition(b)},x=()=>this._destroyRipple(b),M=setTimeout(x,l+100);u.addEventListener("transitionend",f),u.addEventListener("transitioncancel",x),m={onTransitionEnd:f,onTransitionCancel:x,fallbackTimer:M}}),this._activeRipples.set(b,m),(g||!l)&&this._finishRippleTransition(b),b}fadeOutRipple(t){if(t.state===si.FADING_OUT||t.state===si.HIDDEN)return;let e=t.element,n=ie(ie({},Na),t.config.animation);e.style.transitionDuration=`${n.exitDuration}ms`,e.style.opacity="0",t.state=si.FADING_OUT,(t._animationForciblyDisabledThroughCss||!n.exitDuration)&&this._finishRippleTransition(t)}fadeOutAll(){this._getActiveRipples().forEach(t=>t.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(t=>{t.config.persistent||t.fadeOut()})}setupTriggerEvents(t){let e=Fr(t);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,Zv.forEach(n=>{i._eventManager.addHandler(this._ngZone,n,e,this)}))}handleEvent(t){t.type==="mousedown"?this._onMousedown(t):t.type==="touchstart"?this._onTouchStart(t):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Jv.forEach(e=>{this._triggerElement.addEventListener(e,this,Yv)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(t){t.state===si.FADING_IN?this._startFadeOutTransition(t):t.state===si.FADING_OUT&&this._destroyRipple(t)}_startFadeOutTransition(t){let e=t===this._mostRecentTransientRipple,{persistent:n}=t.config;t.state=si.VISIBLE,!n&&(!e||!this._isPointerDown)&&t.fadeOut()}_destroyRipple(t){let e=this._activeRipples.get(t)??null;this._activeRipples.delete(t),this._activeRipples.size||(this._containerRect=null),t===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),t.state=si.HIDDEN,e!==null&&(t.element.removeEventListener("transitionend",e.onTransitionEnd),t.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),t.element.remove()}_onMousedown(t){let e=Ta(t),n=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+XS;!this._target.rippleDisabled&&!e&&!n&&(this._isPointerDown=!0,this.fadeInRipple(t.clientX,t.clientY,this._target.rippleConfig))}_onTouchStart(t){if(!this._target.rippleDisabled&&!Da(t)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=t.changedTouches;if(e)for(let n=0;n<e.length;n++)this.fadeInRipple(e[n].clientX,e[n].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(t=>{let e=t.state===si.VISIBLE||t.config.terminateOnPointerUp&&t.state===si.FADING_IN;!t.config.persistent&&e&&t.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let t=this._triggerElement;t&&(Zv.forEach(e=>i._eventManager.removeHandler(e,t,this)),this._pointerUpEventsRegistered&&(Jv.forEach(e=>t.removeEventListener(e,this,Yv)),this._pointerUpEventsRegistered=!1))}};function qS(i,t,e){let n=Math.max(Math.abs(i-e.left),Math.abs(i-e.right)),r=Math.max(Math.abs(t-e.top),Math.abs(t-e.bottom));return Math.sqrt(n*n+r*r)}var _f=new Ce("mat-ripple-global-options"),Kv=(()=>{class i{_elementRef=A(Nt);_animationsDisabled=fi();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=A(mt),n=A(Cn),r=A(_f,{optional:!0}),s=A(Ft);this._globalOptions=r||{},this._rippleRenderer=new La(this,e,this._elementRef,n,s)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:ie(ie(ie({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,n=0,r){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,n,ie(ie({},this.rippleConfig),r)):this._rippleRenderer.fadeInRipple(0,0,ie(ie({},this.rippleConfig),e))}static \u0275fac=function(n){return new(n||i)};static \u0275dir=xt({type:i,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(n,r){n&2&&gt("mat-ripple-unbounded",r.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return i})();var YS={capture:!0},ZS=["focus","mousedown","mouseenter","touchstart"],yf="mat-ripple-loader-uninitialized",bf="mat-ripple-loader-class-name",Qv="mat-ripple-loader-centered",Fl="mat-ripple-loader-disabled",e_=(()=>{class i{_document=A(Je);_animationsDisabled=fi();_globalRippleOptions=A(_f,{optional:!0});_platform=A(Cn);_ngZone=A(mt);_injector=A(Ft);_eventCleanups;_hosts=new Map;constructor(){let e=A(Qn).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>ZS.map(n=>e.listen(this._document,n,this._onInteraction,YS)))}ngOnDestroy(){let e=this._hosts.keys();for(let n of e)this.destroyRipple(n);this._eventCleanups.forEach(n=>n())}configureRipple(e,n){e.setAttribute(yf,this._globalRippleOptions?.namespace??""),(n.className||!e.hasAttribute(bf))&&e.setAttribute(bf,n.className||""),n.centered&&e.setAttribute(Qv,""),n.disabled&&e.setAttribute(Fl,"")}setDisabled(e,n){let r=this._hosts.get(e);r?(r.target.rippleDisabled=n,!n&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(e))):n?e.setAttribute(Fl,""):e.removeAttribute(Fl)}_onInteraction=e=>{let n=On(e);if(n instanceof HTMLElement){let r=n.closest(`[${yf}="${this._globalRippleOptions?.namespace??""}"]`);r&&this._createRipple(r)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let n=this._document.createElement("span");n.classList.add("mat-ripple",e.getAttribute(bf)),e.append(n);let r=this._globalRippleOptions,s=this._animationsDisabled?0:r?.animation?.enterDuration??Na.enterDuration,o=this._animationsDisabled?0:r?.animation?.exitDuration??Na.exitDuration,a={rippleDisabled:this._animationsDisabled||r?.disabled||e.hasAttribute(Fl),rippleConfig:{centered:e.hasAttribute(Qv),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:s,exitDuration:o}}},c=new La(a,this._ngZone,n,this._platform,this._injector),l=!a.rippleDisabled;l&&c.setupTriggerEvents(e),this._hosts.set(e,{target:a,renderer:c,hasSetUpEvents:l}),e.removeAttribute(yf)}destroyRipple(e){let n=this._hosts.get(e);n&&(n.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(n){return new(n||i)};static \u0275prov=oe({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Nl=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275cmp=_t({type:i,selectors:[["structural-styles"]],decls:0,vars:0,template:function(n,r){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2,changeDetection:0})}return i})();var JS=["mat-icon-button",""],KS=["*"],QS=new Ce("MAT_BUTTON_CONFIG");function t_(i){return i==null?void 0:os(i)}var xf=(()=>{class i{_elementRef=A(Nt);_ngZone=A(mt);_animationsDisabled=fi();_config=A(QS,{optional:!0});_focusMonitor=A(Pa);_cleanupClick;_renderer=A(In);_rippleLoader=A(e_);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){A(Oi).load(Nl);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",n){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,n):this._elementRef.nativeElement.focus(n)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(n){return new(n||i)};static \u0275dir=xt({type:i,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(n,r){n&2&&(Bn("disabled",r._getDisabledAttribute())("aria-disabled",r._getAriaDisabled())("tabindex",r._getTabIndex()),Cr(r.color?"mat-"+r.color:""),gt("mat-mdc-button-disabled",r.disabled)("mat-mdc-button-disabled-interactive",r.disabledInteractive)("mat-unthemed",!r.color)("_mat-animation-noopable",r._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",Lt],disabled:[2,"disabled","disabled",Lt],ariaDisabled:[2,"aria-disabled","ariaDisabled",Lt],disabledInteractive:[2,"disabledInteractive","disabledInteractive",Lt],tabIndex:[2,"tabIndex","tabIndex",t_],_tabindex:[2,"tabindex","_tabindex",t_]}})}return i})(),Sf=(()=>{class i extends xf{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=_t({type:i,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[En],attrs:JS,ngContentSelectors:KS,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(n,r){n&1&&(Ai(),Mr(0,"span",0),ti(1),Mr(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--mat-icon-button-state-layer-size, 40px);
  height: var(--mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--mat-icon-button-state-layer-size, 40px) - var(--mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--mat-icon-button-icon-size, 24px);
  color: var(--mat-icon-button-icon-color, var(--mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-icon-button-touch-target-size, 48px);
  display: var(--mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--mat-icon-button-icon-size, 24px);
  height: var(--mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return i})();var ew=["matButton",""],tw=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],nw=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var n_=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),i_=(()=>{class i extends xf{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=iw(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let n=this._elementRef.nativeElement.classList,r=this._appearance?n_.get(this._appearance):null,s=n_.get(e);r&&n.remove(...r),n.add(...s),this._appearance=e}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=_t({type:i,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[En],attrs:ew,ngContentSelectors:nw,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(n,r){n&1&&(Ai(tw),Mr(0,"span",0),ti(1),Bm(2,"span",1),ti(3,1),Vm(),ti(4,2),Mr(5,"span",2)(6,"span",3)),n&2&&gt("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab)},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return i})();function iw(i){return i.hasAttribute("mat-raised-button")?"elevated":i.hasAttribute("mat-stroked-button")?"outlined":i.hasAttribute("mat-flat-button")?"filled":i.hasAttribute("mat-button")?"text":null}function rw(i,t){if(i&1){let e=tn();W(0,"div",1)(1,"button",2),ze("click",function(){et(e);let r=Ee();return tt(r.action())}),re(2),q()()}if(i&2){let e=Ee();X(2),Bt(" ",e.data.action," ")}}var sw=["label"];function ow(i,t){}var aw=Math.pow(2,31)-1,ka=class{_overlayRef;instance;containerInstance;_afterDismissed=new ft;_afterOpened=new ft;_onAction=new ft;_durationTimeoutId;_dismissedByAction=!1;constructor(t,e){this._overlayRef=e,this.containerInstance=t,t._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(t){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(t,aw))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},r_=new Ce("MatSnackBarData"),uo=class{politeness="polite";announcementMessage="";viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition="center";verticalPosition="bottom"},cw=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275dir=xt({type:i,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]})}return i})(),lw=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275dir=xt({type:i,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]})}return i})(),uw=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275dir=xt({type:i,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]})}return i})(),dw=(()=>{class i{snackBarRef=A(ka);data=A(r_);constructor(){}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=_t({type:i,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["matButton","","matSnackBarAction","",3,"click"]],template:function(n,r){n&1&&(W(0,"div",0),re(1),q(),Dt(2,rw,3,1,"div",1)),n&2&&(X(),Bt(" ",r.data.message,`
`),X(),Rt(r.hasAction?2:-1))},dependencies:[i_,cw,lw,uw],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2,changeDetection:0})}return i})(),wf="_mat-snack-bar-enter",Mf="_mat-snack-bar-exit",hw=(()=>{class i extends co{_ngZone=A(mt);_elementRef=A(Nt);_changeDetectorRef=A(_n);_platform=A(Cn);_animationsDisabled=fi();snackBarConfig=A(uo);_document=A(Je);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=A(Ft);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new ft;_onExit=new ft;_onEnter=new ft;_animationState="void";_live;_label;_role;_liveElementId=A(tr).getId("mat-snack-bar-container-live-");constructor(){super();let e=this.snackBarConfig;e.politeness==="assertive"&&!e.announcementMessage?this._live="assertive":e.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(e){this._assertNotAttached();let n=this._portalOutlet.attachComponentPortal(e);return this._afterPortalAttached(),n}attachTemplatePortal(e){this._assertNotAttached();let n=this._portalOutlet.attachTemplatePortal(e);return this._afterPortalAttached(),n}attachDomPortal=e=>{this._assertNotAttached();let n=this._portalOutlet.attachDomPortal(e);return this._afterPortalAttached(),n};onAnimationEnd(e){e===Mf?this._completeExit():e===wf&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?di(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(wf)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-snack-bar-fallback-visible"),this.onAnimationEnd(wf)},200)))}exit(){return this._destroyed?Ve(void 0):(this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId),this._animationsDisabled?di(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(Mf)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(Mf),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let e=this._elementRef.nativeElement,n=this.snackBarConfig.panelClass;n&&(Array.isArray(n)?n.forEach(o=>e.classList.add(o)):e.classList.add(n)),this._exposeToModals();let r=this._label.nativeElement,s="mdc-snackbar__label";r.classList.toggle(s,!r.querySelector(`.${s}`))}_exposeToModals(){let e=this._liveElementId,n=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let r=0;r<n.length;r++){let s=n[r],o=s.getAttribute("aria-owns");this._trackedModals.add(s),o?o.indexOf(e)===-1&&s.setAttribute("aria-owns",o+" "+e):s.setAttribute("aria-owns",e)}}_clearFromModals(){this._trackedModals.forEach(e=>{let n=e.getAttribute("aria-owns");if(n){let r=n.replace(this._liveElementId,"").trim();r.length>0?e.setAttribute("aria-owns",r):e.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let e=this._elementRef.nativeElement,n=e.querySelector("[aria-hidden]"),r=e.querySelector("[aria-live]");if(n&&r){let s=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&n.contains(document.activeElement)&&(s=document.activeElement),n.removeAttribute("aria-hidden"),r.appendChild(n),s?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=_t({type:i,selectors:[["mat-snack-bar-container"]],viewQuery:function(n,r){if(n&1&&Er(hf,7)(sw,7),n&2){let s;Ti(s=Di())&&(r._portalOutlet=s.first),Ti(s=Di())&&(r._label=s.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:6,hostBindings:function(n,r){n&1&&ze("animationend",function(o){return r.onAnimationEnd(o.animationName)})("animationcancel",function(o){return r.onAnimationEnd(o.animationName)}),n&2&&gt("mat-snack-bar-container-enter",r._animationState==="visible")("mat-snack-bar-container-exit",r._animationState==="hidden")("mat-snack-bar-container-animations-enabled",!r._animationsDisabled)},features:[En],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(n,r){n&1&&(W(0,"div",1)(1,"div",2,0)(3,"div",3),Nm(4,ow,0,0,"ng-template",4),q(),rt(5,"div"),q()()),n&2&&(X(5),Bn("aria-live",r._live)("role",r._role)("id",r._liveElementId))},dependencies:[hf],styles:[`@keyframes _mat-snack-bar-enter {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes _mat-snack-bar-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-snack-bar-container {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  margin: 8px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container {
  width: 100vw;
}

.mat-snack-bar-container-animations-enabled {
  opacity: 0;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-fallback-visible {
  opacity: 1;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-enter {
  animation: _mat-snack-bar-enter 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-exit {
  animation: _mat-snack-bar-exit 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}

.mat-mdc-snackbar-surface {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 8px;
}
[dir=rtl] .mat-mdc-snackbar-surface {
  padding-right: 0;
  padding-left: 8px;
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  min-width: 344px;
  max-width: 672px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface {
  width: 100%;
  min-width: 0;
}
@media (forced-colors: active) {
  .mat-mdc-snackbar-surface {
    outline: solid 1px;
  }
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  color: var(--mat-snack-bar-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-snack-bar-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-snack-bar-container-color, var(--mat-sys-inverse-surface));
}

.mdc-snackbar__label {
  width: 100%;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  padding: 14px 8px 14px 16px;
}
[dir=rtl] .mdc-snackbar__label {
  padding-left: 8px;
  padding-right: 16px;
}
.mat-mdc-snack-bar-container .mdc-snackbar__label {
  font-family: var(--mat-snack-bar-supporting-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-snack-bar-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-snack-bar-supporting-text-weight, var(--mat-sys-body-medium-weight));
  line-height: var(--mat-snack-bar-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
}

.mat-mdc-snack-bar-actions {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  box-sizing: border-box;
}

.mat-mdc-snack-bar-handset,
.mat-mdc-snack-bar-container,
.mat-mdc-snack-bar-label {
  flex: 1 1 auto;
}

.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed {
  color: var(--mat-snack-bar-button-color, var(--mat-sys-inverse-primary));
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) {
  --mat-button-text-state-layer-color: currentColor;
  --mat-button-text-ripple-color: currentColor;
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element {
  opacity: 0.1;
}
`],encapsulation:2})}return i})(),fw=new Ce("mat-snack-bar-default-options",{providedIn:"root",factory:()=>new uo}),s_=(()=>{class i{_live=A(cf);_injector=A(Ft);_breakpointObserver=A(af);_parentSnackBar=A(i,{optional:!0,skipSelf:!0});_defaultConfig=A(fw);_animationsDisabled=fi();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=dw;snackBarContainerComponent=hw;handsetCssClass="mat-mdc-snack-bar-handset";get _openedSnackBarRef(){let e=this._parentSnackBar;return e?e._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(e){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=e:this._snackBarRefAtThisLevel=e}constructor(){}openFromComponent(e,n){return this._attach(e,n)}openFromTemplate(e,n){return this._attach(e,n)}open(e,n="",r){let s=ie(ie({},this._defaultConfig),r);return s.data={message:e,action:n},s.announcementMessage===e&&(s.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,s)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(e,n){let r=n&&n.viewContainerRef&&n.viewContainerRef.injector,s=Ft.create({parent:r||this._injector,providers:[{provide:uo,useValue:n}]}),o=new oo(this.snackBarContainerComponent,n.viewContainerRef,s),a=e.attach(o);return a.instance.snackBarConfig=n,a.instance}_attach(e,n){let r=ie(ie(ie({},new uo),this._defaultConfig),n),s=this._createOverlay(r),o=this._attachSnackBarContainer(s,r),a=new ka(o,s);if(e instanceof Jo){let c=new ao(e,null,{$implicit:r.data,snackBarRef:a});a.instance=o.attachTemplatePortal(c)}else{let c=this._createInjector(r,a),l=new oo(e,void 0,c),u=o.attachComponentPortal(l);a.instance=u.instance}return this._breakpointObserver.observe(kv.HandsetPortrait).pipe(Ei(s.detachments())).subscribe(c=>{s.overlayElement.classList.toggle(this.handsetCssClass,c.matches)}),r.announcementMessage&&o._onAnnounce.subscribe(()=>{this._live.announce(r.announcementMessage,r.politeness)}),this._animateSnackBar(a,r),this._openedSnackBarRef=a,this._openedSnackBarRef}_animateSnackBar(e,n){e.afterDismissed().subscribe(()=>{this._openedSnackBarRef==e&&(this._openedSnackBarRef=null),n.announcementMessage&&this._live.clear()}),n.duration&&n.duration>0&&e.afterOpened().subscribe(()=>e._dismissAfter(n.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{e.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):e.containerInstance.enter()}_createOverlay(e){let n=new lo;n.direction=e.direction;let r=pf(this._injector),s=e.direction==="rtl",o=e.horizontalPosition==="left"||e.horizontalPosition==="start"&&!s||e.horizontalPosition==="end"&&s,a=!o&&e.horizontalPosition!=="center";return o?r.left("0"):a?r.right("0"):r.centerHorizontally(),e.verticalPosition==="top"?r.top("0"):r.bottom("0"),n.positionStrategy=r,n.disableAnimations=this._animationsDisabled,mf(this._injector,n)}_createInjector(e,n){let r=e&&e.viewContainerRef&&e.viewContainerRef.injector;return Ft.create({parent:r||this._injector,providers:[{provide:ka,useValue:n},{provide:r_,useValue:e.data}]})}static \u0275fac=function(n){return new(n||i)};static \u0275prov=oe({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Ef="pwa_install_snooze_until",o_=10080*60*1e3,Ll=class i{constructor(t,e){this.snackBar=t;this.zone=e;typeof window<"u"&&(window.addEventListener("beforeinstallprompt",n=>{n.preventDefault(),this.deferredPrompt=n,this.updateCanInstall(),this.maybeAutoPrompt()}),window.addEventListener("appinstalled",()=>{this.deferredPrompt=null,this.canInstall$.next(!1)}),this.updateCanInstall())}canInstall$=new pn(!1);deferredPrompt=null;isStandalone(){if(typeof window>"u")return!1;let t=window.matchMedia&&window.matchMedia("(display-mode: standalone)").matches,e=window.navigator?.standalone===!0;return t||e}askToInstall(){if(!this.deferredPrompt||this.isStandalone())return;let t=this.snackBar.open("M\xC3\u0192\xC2\xB6chten Sie die App installieren?","Ja, gerne.",{duration:1e4,verticalPosition:"top",horizontalPosition:"center"});t.onAction().subscribe(()=>{this.triggerInstall()}),t.afterDismissed().subscribe(e=>{if(!e.dismissedByAction){let n=Date.now()+o_;localStorage.setItem(Ef,String(n))}})}async triggerInstall(){if(this.deferredPrompt)try{if(this.deferredPrompt.prompt(),(await this.deferredPrompt.userChoice)?.outcome!=="accepted"){let e=Date.now()+o_;localStorage.setItem(Ef,String(e))}}catch(t){console.warn("Install prompt failed",t)}finally{this.deferredPrompt=null,this.updateCanInstall()}}isSnoozed(){if(typeof localStorage>"u")return!1;let t=localStorage.getItem(Ef);if(!t)return!1;let e=parseInt(t,10);return!isNaN(e)&&Date.now()<e}updateCanInstall(){let t=!!this.deferredPrompt&&!this.isStandalone();this.canInstall$.next(t)}maybeAutoPrompt(){!this.deferredPrompt||this.isStandalone()||this.isSnoozed()||this.zone.run(()=>this.askToInstall())}static \u0275fac=function(e){return new(e||i)(Fe(s_),Fe(mt))};static \u0275prov=oe({token:i,factory:i.\u0275fac,providedIn:"root"})};var oi=class i{languages={};currentLang=Ne("de");initPromise;constructor(){this.initPromise=this.loadLanguages();let t=localStorage.getItem("selected_language");if(t)this.currentLang.set(t);else{let e=navigator.language.split("-")[0];["de","en"].includes(e)?this.currentLang.set(e):this.currentLang.set("de")}}async initialize(){return this.initPromise}async loadLanguages(){try{let t=await fetch("assets/language.json");this.languages=await t.json()}catch(t){console.error("Could not load languages",t)}}setLanguage(t){this.currentLang.set(t),localStorage.setItem("selected_language",t)}translate(t,e=[]){let n=this.currentLang();if(!this.languages[n])return t;let r=t.split("."),s=this.languages[n];for(let o of r)if(s&&s[o])s=s[o];else return t;return typeof s=="string"&&e.length>0&&e.forEach((o,a)=>{s=s.replace(`{${a}}`,o)}),s}get t(){return(t,e=[])=>this.translate(t,e)}static \u0275fac=function(e){return new(e||i)};static \u0275prov=oe({token:i,factory:i.\u0275fac,providedIn:"root"})};var m_=(()=>{class i{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,n){this._renderer=e,this._elementRef=n}setProperty(e,n){this._renderer.setProperty(this._elementRef.nativeElement,e,n)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(n){return new(n||i)(bt(In),bt(Nt))};static \u0275dir=xt({type:i})}return i})(),If=(()=>{class i extends m_{static \u0275fac=(()=>{let e;return function(r){return(e||(e=ui(i)))(r||i)}})();static \u0275dir=xt({type:i,features:[En]})}return i})(),po=new Ce("");var mw={provide:po,useExisting:ns(()=>g_),multi:!0};function gw(){let i=ii()?ii().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}var vw=new Ce(""),g_=(()=>{class i extends m_{_compositionMode;_composing=!1;constructor(e,n,r){super(e,n),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!gw())}writeValue(e){let n=e??"";this.setProperty("value",n)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(n){return new(n||i)(bt(In),bt(Nt),bt(vw,8))};static \u0275dir=xt({type:i,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,r){n&1&&ze("input",function(o){return r._handleInput(o.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(o){return r._compositionEnd(o.target.value)})},standalone:!1,features:[rs([mw]),En]})}return i})();var Pf=new Ce(""),_w=new Ce("");function v_(i){return i!=null}function __(i){return Bs(i)?Dn(i):i}function y_(i){let t={};return i.forEach(e=>{t=e!=null?ie(ie({},t),e):t}),Object.keys(t).length===0?null:t}function b_(i,t){return t.map(e=>e(i))}function yw(i){return!i.validate}function x_(i){return i.map(t=>yw(t)?t:e=>t.validate(e))}function bw(i){if(!i)return null;let t=i.filter(v_);return t.length==0?null:function(e){return y_(b_(e,t))}}function S_(i){return i!=null?bw(x_(i)):null}function xw(i){if(!i)return null;let t=i.filter(v_);return t.length==0?null:function(e){let n=b_(e,t).map(__);return Nc(n).pipe(it(y_))}}function w_(i){return i!=null?xw(x_(i)):null}function a_(i,t){return i===null?[t]:Array.isArray(i)?[...i,t]:[i,t]}function Sw(i){return i._rawValidators}function ww(i){return i._rawAsyncValidators}function Cf(i){return i?Array.isArray(i)?i:[i]:[]}function Ul(i,t){return Array.isArray(i)?i.includes(t):i===t}function c_(i,t){let e=Cf(t);return Cf(i).forEach(r=>{Ul(e,r)||e.push(r)}),e}function l_(i,t){return Cf(t).filter(e=>!Ul(i,e))}var Bl=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=S_(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=w_(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t=void 0){this.control?.reset(t)}hasError(t,e){return this.control?this.control.hasError(t,e):!1}getError(t,e){return this.control?this.control.getError(t,e):null}},Af=class extends Bl{name;get formDirective(){return null}get path(){return null}},Ga=class extends Bl{_parent=null;name=null;valueAccessor=null},Tf=class{_cd;constructor(t){this._cd=t}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var M_=(()=>{class i extends Tf{constructor(e){super(e)}static \u0275fac=function(n){return new(n||i)(bt(Ga,2))};static \u0275dir=xt({type:i,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,r){n&2&&gt("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[En]})}return i})();var Ua="VALID",kl="INVALID",ho="PENDING",Ba="DISABLED",ms=class{},Vl=class extends ms{value;source;constructor(t,e){super(),this.value=t,this.source=e}},Va=class extends ms{pristine;source;constructor(t,e){super(),this.pristine=t,this.source=e}},za=class extends ms{touched;source;constructor(t,e){super(),this.touched=t,this.source=e}},fo=class extends ms{status;source;constructor(t,e){super(),this.status=t,this.source=e}};var Df=class extends ms{source;constructor(t){super(),this.source=t}};function Mw(i){return(zl(i)?i.validators:i)||null}function Ew(i){return Array.isArray(i)?S_(i):i||null}function Cw(i,t){return(zl(t)?t.asyncValidators:i)||null}function Aw(i){return Array.isArray(i)?w_(i):i||null}function zl(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}var Rf=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(t,e){this._assignValidators(t),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get status(){return Mt(this.statusReactive)}set status(t){Mt(()=>this.statusReactive.set(t))}_status=ss(()=>this.statusReactive());statusReactive=Ne(void 0);get valid(){return this.status===Ua}get invalid(){return this.status===kl}get pending(){return this.status===ho}get disabled(){return this.status===Ba}get enabled(){return this.status!==Ba}errors;get pristine(){return Mt(this.pristineReactive)}set pristine(t){Mt(()=>this.pristineReactive.set(t))}_pristine=ss(()=>this.pristineReactive());pristineReactive=Ne(!0);get dirty(){return!this.pristine}get touched(){return Mt(this.touchedReactive)}set touched(t){Mt(()=>this.touchedReactive.set(t))}_touched=ss(()=>this.touchedReactive());touchedReactive=Ne(!1);get untouched(){return!this.touched}_events=new ft;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._assignValidators(t)}setAsyncValidators(t){this._assignAsyncValidators(t)}addValidators(t){this.setValidators(c_(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(c_(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(l_(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(l_(t,this._rawAsyncValidators))}hasValidator(t){return Ul(this._rawValidators,t)}hasAsyncValidator(t){return Ul(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){let e=this.touched===!1;this.touched=!0;let n=t.sourceControl??this;t.onlySelf||this._parent?.markAsTouched(Ot(ie({},t),{sourceControl:n})),e&&t.emitEvent!==!1&&this._events.next(new za(!0,n))}markAllAsDirty(t={}){this.markAsDirty({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(t))}markAllAsTouched(t={}){this.markAsTouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(t))}markAsUntouched(t={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=t.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:t.emitEvent,sourceControl:n})}),t.onlySelf||this._parent?._updateTouched(t,n),e&&t.emitEvent!==!1&&this._events.next(new za(!1,n))}markAsDirty(t={}){let e=this.pristine===!0;this.pristine=!1;let n=t.sourceControl??this;t.onlySelf||this._parent?.markAsDirty(Ot(ie({},t),{sourceControl:n})),e&&t.emitEvent!==!1&&this._events.next(new Va(!1,n))}markAsPristine(t={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=t.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:t.emitEvent})}),t.onlySelf||this._parent?._updatePristine(t,n),e&&t.emitEvent!==!1&&this._events.next(new Va(!0,n))}markAsPending(t={}){this.status=ho;let e=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new fo(this.status,e)),this.statusChanges.emit(this.status)),t.onlySelf||this._parent?.markAsPending(Ot(ie({},t),{sourceControl:e}))}disable(t={}){let e=this._parentMarkedDirty(t.onlySelf);this.status=Ba,this.errors=null,this._forEachChild(r=>{r.disable(Ot(ie({},t),{onlySelf:!0}))}),this._updateValue();let n=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new Vl(this.value,n)),this._events.next(new fo(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(Ot(ie({},t),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(t={}){let e=this._parentMarkedDirty(t.onlySelf);this.status=Ua,this._forEachChild(n=>{n.enable(Ot(ie({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(Ot(ie({},t),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(t,e){t.onlySelf||(this._parent?.updateValueAndValidity(t),t.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(t){this._parent=t}getRawValue(){return this.value}updateValueAndValidity(t={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Ua||this.status===ho)&&this._runAsyncValidator(n,t.emitEvent)}let e=t.sourceControl??this;t.emitEvent!==!1&&(this._events.next(new Vl(this.value,e)),this._events.next(new fo(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),t.onlySelf||this._parent?.updateValueAndValidity(Ot(ie({},t),{sourceControl:e}))}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Ba:Ua}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t,e){if(this.asyncValidator){this.status=ho,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:t!==!1};let n=__(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:t})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let t=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,t}return!1}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(t){let e=t;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((n,r)=>n&&n._find(r),this)}getError(t,e){let n=e?this.get(e):this;return n?.errors?n.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t,e,n){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),(t||n)&&this._events.next(new fo(this.status,e)),this._parent&&this._parent._updateControlsErrors(t,e,n)}_initObservables(){this.valueChanges=new en,this.statusChanges=new en}_calculateStatus(){return this._allControlsDisabled()?Ba:this.errors?kl:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(ho)?ho:this._anyControlsHaveStatus(kl)?kl:Ua}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t,e){let n=!this._anyControlsDirty(),r=this.pristine!==n;this.pristine=n,t.onlySelf||this._parent?._updatePristine(t,e),r&&this._events.next(new Va(this.pristine,e))}_updateTouched(t={},e){this.touched=this._anyControlsTouched(),this._events.next(new za(this.touched,e)),t.onlySelf||this._parent?._updateTouched(t,e)}_onDisabledChange=[];_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){zl(t)&&t.updateOn!=null&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){return!t&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(t){return null}_assignValidators(t){this._rawValidators=Array.isArray(t)?t.slice():t,this._composedValidatorFn=Ew(this._rawValidators)}_assignAsyncValidators(t){this._rawAsyncValidators=Array.isArray(t)?t.slice():t,this._composedAsyncValidatorFn=Aw(this._rawAsyncValidators)}};var E_=new Ce("",{factory:()=>Of}),Of="always";function Tw(i,t){return[...t.path,i]}function Dw(i,t,e=Of){Iw(i,t),t.valueAccessor.writeValue(i.value),(i.disabled||e==="always")&&t.valueAccessor.setDisabledState?.(i.disabled),Pw(i,t),Fw(i,t),Ow(i,t),Rw(i,t)}function u_(i,t){i.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(t)})}function Rw(i,t){if(t.valueAccessor.setDisabledState){let e=n=>{t.valueAccessor.setDisabledState(n)};i.registerOnDisabledChange(e),t._registerOnDestroy(()=>{i._unregisterOnDisabledChange(e)})}}function Iw(i,t){let e=Sw(i);t.validator!==null?i.setValidators(a_(e,t.validator)):typeof e=="function"&&i.setValidators([e]);let n=ww(i);t.asyncValidator!==null?i.setAsyncValidators(a_(n,t.asyncValidator)):typeof n=="function"&&i.setAsyncValidators([n]);let r=()=>i.updateValueAndValidity();u_(t._rawValidators,r),u_(t._rawAsyncValidators,r)}function Pw(i,t){t.valueAccessor.registerOnChange(e=>{i._pendingValue=e,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&C_(i,t)})}function Ow(i,t){t.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&C_(i,t),i.updateOn!=="submit"&&i.markAsTouched()})}function C_(i,t){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function Fw(i,t){let e=(n,r)=>{t.valueAccessor.writeValue(n),r&&t.viewToModelUpdate(n)};i.registerOnChange(e),t._registerOnDestroy(()=>{i._unregisterOnChange(e)})}function Nw(i,t){if(!i.hasOwnProperty("model"))return!1;let e=i.model;return e.isFirstChange()?!0:!Object.is(t,e.currentValue)}function Lw(i){return Object.getPrototypeOf(i.constructor)===If}function kw(i,t){if(!t)return null;Array.isArray(t);let e,n,r;return t.forEach(s=>{s.constructor===g_?e=s:Lw(s)?n=s:r=s}),r||n||e||null}function d_(i,t){let e=i.indexOf(t);e>-1&&i.splice(e,1)}function h_(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var Uw=class extends Rf{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(t=null,e,n){super(Mw(e),Cw(n,e)),this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),zl(e)&&(e.nonNullable||e.initialValueIsDefault)&&(h_(t)?this.defaultValue=t.value:this.defaultValue=t)}setValue(t,e={}){this.value=this._pendingValue=t,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(t,e={}){this.setValue(t,e)}reset(t=this.defaultValue,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new Df(this))}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){d_(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){d_(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(t){h_(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}};var Bw={provide:Ga,useExisting:ns(()=>Ff)},f_=Promise.resolve(),Ff=(()=>{class i extends Ga{_changeDetectorRef;callSetDisabledState;control=new Uw;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new en;constructor(e,n,r,s,o,a){super(),this._changeDetectorRef=o,this.callSetDisabledState=a,this._parent=e,this._setValidators(n),this._setAsyncValidators(r),this.valueAccessor=kw(this,s)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let n=e.name.previousValue;this.formDirective.removeControl({name:n,path:this._getPath(n)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),Nw(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective?.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){Dw(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){f_.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let n=e.isDisabled.currentValue,r=n!==0&&Lt(n);f_.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?Tw(e,this._parent):[e]}static \u0275fac=function(n){return new(n||i)(bt(Af,9),bt(Pf,10),bt(_w,10),bt(po,10),bt(_n,8),bt(E_,8))};static \u0275dir=xt({type:i,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[rs([Bw]),En,Un]})}return i})();var Vw={provide:po,useExisting:ns(()=>Gl),multi:!0};function A_(i,t){return i==null?`${t}`:(t&&typeof t=="object"&&(t="Object"),`${i}: ${t}`.slice(0,50))}function zw(i){return i.split(":")[0]}var Gl=(()=>{class i extends If{value;_optionMap=new Map;_idCounter=0;set compareWith(e){this._compareWith=e}_compareWith=Object.is;appRefInjector=A(ei).injector;destroyRef=A(br);cdr=A(_n);_queuedWrite=!1;_writeValueAfterRender(){this._queuedWrite||this.appRefInjector.destroyed||(this._queuedWrite=!0,di({write:()=>{this.destroyRef.destroyed||(this._queuedWrite=!1,this.writeValue(this.value))}},{injector:this.appRefInjector}))}writeValue(e){this.cdr.markForCheck(),this.value=e;let n=this._getOptionId(e),r=A_(n,e);this.setProperty("value",r)}registerOnChange(e){this.onChange=n=>{this.value=this._getOptionValue(n),e(this.value)}}_registerOption(){return(this._idCounter++).toString()}_getOptionId(e){for(let n of this._optionMap.keys())if(this._compareWith(this._optionMap.get(n),e))return n;return null}_getOptionValue(e){let n=zw(e);return this._optionMap.has(n)?this._optionMap.get(n):e}static \u0275fac=(()=>{let e;return function(r){return(e||(e=ui(i)))(r||i)}})();static \u0275dir=xt({type:i,selectors:[["select","formControlName","",3,"multiple",""],["select","formControl","",3,"multiple",""],["select","ngModel","",3,"multiple",""]],hostBindings:function(n,r){n&1&&ze("change",function(o){return r.onChange(o.target.value)})("blur",function(){return r.onTouched()})},inputs:{compareWith:"compareWith"},standalone:!1,features:[rs([Vw]),En]})}return i})(),T_=(()=>{class i{_element;_renderer;_select;id;constructor(e,n,r){this._element=e,this._renderer=n,this._select=r,this._select&&(this.id=this._select._registerOption())}set ngValue(e){this._select!=null&&(this._select._optionMap.set(this.id,e),this._setElementValue(A_(this.id,e)),this._select._writeValueAfterRender())}set value(e){this._setElementValue(e),this._select?._writeValueAfterRender()}_setElementValue(e){this._renderer.setProperty(this._element.nativeElement,"value",e)}ngOnDestroy(){this._select?._optionMap.delete(this.id),this._select?._writeValueAfterRender()}static \u0275fac=function(n){return new(n||i)(bt(Nt),bt(In),bt(Gl,9))};static \u0275dir=xt({type:i,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"},standalone:!1})}return i})(),Gw={provide:po,useExisting:ns(()=>D_),multi:!0};function p_(i,t){return i==null?`${t}`:(typeof t=="string"&&(t=`'${t}'`),t&&typeof t=="object"&&(t="Object"),`${i}: ${t}`.slice(0,50))}function Hw(i){return i.split(":")[0]}var D_=(()=>{class i extends If{value;_optionMap=new Map;_idCounter=0;set compareWith(e){this._compareWith=e}_compareWith=Object.is;writeValue(e){this.value=e;let n;if(Array.isArray(e)){let r=e.map(s=>this._getOptionId(s));n=(s,o)=>{s._setSelected(r.indexOf(o.toString())>-1)}}else n=(r,s)=>{r._setSelected(!1)};this._optionMap.forEach(n)}registerOnChange(e){this.onChange=n=>{let r=[],s=n.selectedOptions;if(s!==void 0){let o=s;for(let a=0;a<o.length;a++){let c=o[a],l=this._getOptionValue(c.value);r.push(l)}}else{let o=n.options;for(let a=0;a<o.length;a++){let c=o[a];if(c.selected){let l=this._getOptionValue(c.value);r.push(l)}}}this.value=r,e(r)}}_registerOption(e){let n=(this._idCounter++).toString();return this._optionMap.set(n,e),n}_getOptionId(e){for(let n of this._optionMap.keys())if(this._compareWith(this._optionMap.get(n)._value,e))return n;return null}_getOptionValue(e){let n=Hw(e);return this._optionMap.has(n)?this._optionMap.get(n)._value:e}static \u0275fac=(()=>{let e;return function(r){return(e||(e=ui(i)))(r||i)}})();static \u0275dir=xt({type:i,selectors:[["select","multiple","","formControlName",""],["select","multiple","","formControl",""],["select","multiple","","ngModel",""]],hostBindings:function(n,r){n&1&&ze("change",function(o){return r.onChange(o.target)})("blur",function(){return r.onTouched()})},inputs:{compareWith:"compareWith"},standalone:!1,features:[rs([Gw]),En]})}return i})(),R_=(()=>{class i{_element;_renderer;_select;id;_value;constructor(e,n,r){this._element=e,this._renderer=n,this._select=r,this._select&&(this.id=this._select._registerOption(this))}set ngValue(e){this._select!=null&&(this._value=e,this._setElementValue(p_(this.id,e)),this._select.writeValue(this._select.value))}set value(e){this._select?(this._value=e,this._setElementValue(p_(this.id,e)),this._select.writeValue(this._select.value)):this._setElementValue(e)}_setElementValue(e){this._renderer.setProperty(this._element.nativeElement,"value",e)}_setSelected(e){this._renderer.setProperty(this._element.nativeElement,"selected",e)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}static \u0275fac=function(n){return new(n||i)(bt(Nt),bt(In),bt(D_,9))};static \u0275dir=xt({type:i,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"},standalone:!1})}return i})();var Ww=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=vn({type:i});static \u0275inj=gn({})}return i})();var Hl=(()=>{class i{static withConfig(e){return{ngModule:i,providers:[{provide:E_,useValue:e.callSetDisabledState??Of}]}}static \u0275fac=function(n){return new(n||i)};static \u0275mod=vn({type:i});static \u0275inj=gn({imports:[Ww]})}return i})();function Xw(i,t){i&1&&rt(0,"div",16)}function $w(i,t){if(i&1){let e=tn();W(0,"button",38),ze("click",function(){et(e);let r=Ee();return tt(r.installApp())}),re(1),q()}if(i&2){let e=Ee();X(),Bt(" ",e.languageService.t("INTRO.INSTALL_APP")," ")}}var Wl=class i{pwaService=A(Ll);languageService=A(oi);isShowSpinner=Ne(!1);installApp(){this.pwaService.triggerInstall()}showQRCode(t){t.classList.contains("collapse")?t.classList.remove("collapse"):t.classList.add("collapse"),t&&t.scrollIntoView({behavior:"smooth"})}showSpinner(){this.isShowSpinner.set(!0)}ngOnDestroy(){this.isShowSpinner.set(!1)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=_t({type:i,selectors:[["app-introduction"]],decls:88,vars:29,consts:[["colapseDivBox",""],[1,"intro-wrapper"],[1,"main-header"],[1,"tagline"],[1,"control-hint"],[1,"story-section"],[1,"graphic-section"],[1,"preview-container"],["priority","","alt","Gameplay Preview","width","600","height","500",1,"game-gif",3,"ngSrc"],[1,"language-selector","mt-3","d-flex","justify-content-center"],[1,"pt-2","pe-1"],[1,"form-select","w-auto","bg-dark","text-white","border-secondary",3,"ngModelChange","ngModel"],["value","de"],["value","en"],[1,"info-section"],["routerLink","game",1,"start-button","border","border-2","rounded-2","mb-2",3,"click"],["role","status",1,"spinner-border"],[1,"mb-4","mt-2","text-bg-info","border-2","rounded-2","border"],[1,"info-grid"],[1,"info-card"],[1,"card-header"],["viewBox","0 0 24 24",1,"icon","icon-cyan"],["d","M12 2L4.5 20.29L5.21 21L12 18L18.79 21L19.5 20.29L12 2Z"],[3,"innerHTML"],[1,"info-card","special"],["viewBox","0 0 24 24",1,"icon","icon-blue"],["d","M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"],["viewBox","0 0 24 24",1,"icon","icon-green"],["d","M21 16.5C21 16.88 20.79 17.21 20.47 17.38L12.57 21.82C12.41 21.94 12.21 22 12 22C11.79 22 11.59 21.94 11.43 21.82L3.53 17.38C3.21 17.21 3 16.88 3 16.5V7.5C3 7.12 3.21 6.79 3.53 6.62L11.43 2.18C11.59 2.06 11.79 2 12 2C12.21 2 12.41 2.06 12.57 2.18L20.47 6.62C20.79 6.79 21 7.12 21 7.5V16.5Z"],["viewBox","0 0 24 24",1,"icon","icon-red"],["d","M13 2v8h8L12 22v-8H4L13 2z"],[1,"info-card","evolution"],["viewBox","0 0 24 24",1,"icon","icon-yellow"],["d","M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5.89 12.55L12 15.89l6.11-3.34c.66-.36.89-1.19.53-1.85-.36-.66-1.19-.89-1.85-.53L12 12.79l-4.79-2.62c-.66-.36-1.49-.13-1.85.53-.36.66-.13 1.49.53 1.85z"],[1,"start-button"],[1,"btn","btn-dark","m-2","fw-bold","font-monospace",3,"click"],[1,"collapse","multi-collapse"],["src","assets/site-qr-code.png","alt","site-qr-code",1,"w-75"],[1,"start-button",3,"click"]],template:function(e,n){if(e&1){let r=tn();W(0,"div",1)(1,"header",2)(2,"h1"),re(3),q(),W(4,"p",3),re(5),q(),W(6,"p",4),re(7,"beta - 2.4"),q()(),W(8,"section",5)(9,"h2"),re(10),q(),W(11,"p"),re(12),q()(),W(13,"section",6)(14,"p"),re(15),q(),W(16,"div",7),rt(17,"img",8),q(),W(18,"div",9)(19,"span",10),re(20,"\u{1F310}"),q(),W(21,"select",11),ze("ngModelChange",function(o){return n.languageService.setLanguage(o)}),W(22,"option",12),re(23,"Deutsch"),q(),W(24,"option",13),re(25,"English"),q()()()(),W(26,"section",14)(27,"button",15),ze("click",function(){return n.showSpinner()}),re(28),Dt(29,Xw,1,0,"div",16),q(),W(30,"h2",17),re(31),q(),W(32,"div",18)(33,"div",19)(34,"div",20),Ci(),W(35,"svg",21),rt(36,"path",22),q(),Ps(),W(37,"h3"),re(38),q()(),rt(39,"p",23),q(),W(40,"div",19)(41,"h3"),re(42),q(),rt(43,"p",23),q(),W(44,"div",24)(45,"h3"),re(46),q(),rt(47,"p",23),q(),W(48,"div",19)(49,"div",20),Ci(),W(50,"svg",25),rt(51,"path",26),q(),Ps(),W(52,"h3"),re(53),q()(),rt(54,"p",23),q(),W(55,"div",24)(56,"div",20),Ci(),W(57,"svg",27),rt(58,"path",28),q(),Ps(),W(59,"h3"),re(60),q()(),rt(61,"p",23),q(),W(62,"div",19)(63,"div",20),Ci(),W(64,"svg",29),rt(65,"path",30),q(),Ps(),W(66,"h3"),re(67),q()(),rt(68,"p",23),q(),W(69,"div",31)(70,"div",20),Ci(),W(71,"svg",32),rt(72,"path",33),q(),Ps(),W(73,"h3"),re(74),q()(),rt(75,"p",23),q()()(),W(76,"footer")(77,"p",4),re(78),q(),Dt(79,$w,2,1,"button",34),ni(80,"async"),W(81,"p",4),re(82,"local share"),q(),W(83,"button",35),ze("click",function(){et(r);let o=Qo(86);return tt(n.showQRCode(o))}),re(84),q(),W(85,"div",36,0),rt(87,"img",37),q()()()}if(e&2){let r=Qo(86);X(3),nt(n.languageService.t("INTRO.TITLE")),X(2),nt(n.languageService.t("INTRO.TAGLINE")),X(5),nt(n.languageService.t("INTRO.STORY_TITLE")),X(2),Bt(" ",n.languageService.t("INTRO.STORY_TEXT")," "),X(3),Bt(" ",n.languageService.t("INTRO.PREVIEW")),X(2),St("ngSrc","assets/intro-animation.gif"),X(4),St("ngModel",n.languageService.currentLang()),X(7),Bt(" ",n.languageService.t("INTRO.START_BUTTON")," "),X(),Rt(n.isShowSpinner()?29:-1),X(2),nt(n.languageService.t("INTRO.INFO_TITLE")),X(7),nt(n.languageService.t("INTRO.CONTROL_TITLE")),X(),St("innerHTML",n.languageService.t("INTRO.CONTROL_TEXT"),Sr),X(3),nt(n.languageService.t("INTRO.GOAL_TITLE")),X(),St("innerHTML",n.languageService.t("INTRO.GOAL_TEXT"),Sr),X(3),nt(n.languageService.t("INTRO.RESEARCH_ZONE_TITLE")),X(),St("innerHTML",n.languageService.t("INTRO.RESEARCH_ZONE_TEXT"),Sr),X(6),nt(n.languageService.t("INTRO.SHIELD_TITLE")),X(),St("innerHTML",n.languageService.t("INTRO.SHIELD_TEXT"),Sr),X(6),nt(n.languageService.t("INTRO.SATS_TITLE")),X(),St("innerHTML",n.languageService.t("INTRO.SATS_TEXT"),Sr),X(6),nt(n.languageService.t("INTRO.MARINES_TITLE")),X(),St("innerHTML",n.languageService.t("INTRO.MARINES_TEXT"),Sr),X(6),nt(n.languageService.t("INTRO.RESEARCH_TITLE")),X(),St("innerHTML",n.languageService.t("INTRO.RESEARCH_TEXT"),Sr),X(3),nt(n.languageService.t("INTRO.HINT_MOBILE")),X(),Rt(Hm(80,27,n.pwaService.canInstall$)?79:-1),X(5),Bt(" ",r.classList.contains("collapse")?n.languageService.t("INTRO.SHOW_QR"):n.languageService.t("INTRO.HIDE_QR")," ")}},dependencies:[ro,lg,Hl,T_,R_,Gl,M_,Ff,mh],styles:['@charset "UTF-8";[_nghost-%COMP%]{display:block;background:#000;min-height:100vh;color:#e0e0e0;font-family:Segoe UI,Courier New,monospace}.intro-wrapper[_ngcontent-%COMP%]{max-width:900px;margin:0 auto;padding:40px 20px;text-align:center}.main-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{color:#00fbff;font-size:3.5rem;letter-spacing:5px;margin-bottom:0;text-shadow:0 0 15px rgba(0,251,255,.7)}.tagline[_ngcontent-%COMP%]{color:#fc0;margin-top:5px;font-weight:700}.story-section[_ngcontent-%COMP%]{background:#ffffff08;padding:20px;border-radius:8px;margin:30px 0;border:1px solid #222}.story-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#fff;margin-top:0}.story-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{line-height:1.6;color:#ccc;max-width:700px;margin:0 auto}.graphic-section[_ngcontent-%COMP%]{margin:40px 0}.game-gif[_ngcontent-%COMP%]{width:100%;max-width:500px;height:auto;border-radius:8px;border:2px solid #00f2ff;box-shadow:0 0 20px #00f2ff66;margin:20px 0}.preview-container[_ngcontent-%COMP%]{display:flex;justify-content:center}.language-selector[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{font-size:.9rem;padding:.5rem 2rem .5rem 1rem;cursor:pointer;transition:all .2s ease}.language-selector[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:hover{border-color:#0ff!important;box-shadow:0 0 10px #00ffff4d}.language-selector[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus{border-color:#0ff!important;box-shadow:0 0 15px #0ff6;outline:none}.info-section[_ngcontent-%COMP%]{margin:40px 0}.info-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:20px;text-align:left}.info-card[_ngcontent-%COMP%]{background:#ffffff0d;padding:20px;border-radius:8px;border-left:4px solid #444}.info-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:0;color:#00fbff}.info-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding-left:20px}.control-hint[_ngcontent-%COMP%]{font-size:.9rem;color:#aaa;font-style:italic;border-top:1px solid #333;padding-top:10px}.info-card.special[_ngcontent-%COMP%]{border-left-color:#00ff6a;background:#00ff6a08}.info-card.evolution[_ngcontent-%COMP%]{border-left-color:#fc0;background:#ffcc0008}.win-condition[_ngcontent-%COMP%]{color:#fc0;font-weight:700;margin-top:10px}.start-button[_ngcontent-%COMP%]{padding:18px 50px;background:transparent;color:#00fbff;border:2px solid #00fbff;font-size:1.4rem;font-weight:700;cursor:pointer;transition:all .3s;box-shadow:0 0 10px #00fbff4d;display:inline-flex;align-items:center;justify-content:center;gap:15px}.start-button[_ngcontent-%COMP%]   .spinner-border[_ngcontent-%COMP%]{width:1.5rem;height:1.5rem;border-width:.2em}.start-button[_ngcontent-%COMP%]:hover{background:#00fbff;color:#000;box-shadow:0 0 25px #00fbffcc}@media(max-width:700px){.info-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}.main-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2.5rem}}.card-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:15px;margin-bottom:10px}.icon[_ngcontent-%COMP%]{width:32px;height:32px;fill:currentColor;flex-shrink:0}.icon-cyan[_ngcontent-%COMP%]{color:#00fbff;filter:drop-shadow(0 0 5px #00fbff)}.icon-blue[_ngcontent-%COMP%]{color:#07f;filter:drop-shadow(0 0 5px #0077ff)}.icon-green[_ngcontent-%COMP%]{color:#00ff6a;filter:drop-shadow(0 0 5px #00ff6a)}.icon-red[_ngcontent-%COMP%]{color:#f44;filter:drop-shadow(0 0 5px #ff4444)}.icon-yellow[_ngcontent-%COMP%]{color:#fc0;filter:drop-shadow(0 0 5px #ffcc00)}.info-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-size:1.2rem;letter-spacing:1px}.info-card[_ngcontent-%COMP%]:hover{background:#ffffff14;transform:translateY(-2px);transition:all .2s ease-in-out}']})};var K_=0,gp=1,Q_=2;var pc=1,e0=2,Bo=3,cr=0,hn=1,Vi=2,zi=0,Ss=1,mc=2,vp=3,_p=4,t0=5;var Gr=100,n0=101,i0=102,r0=103,s0=104,o0=200,a0=201,c0=202,l0=203,pu=204,mu=205,u0=206,d0=207,h0=208,f0=209,p0=210,m0=211,g0=212,v0=213,_0=214,gu=0,vu=1,_u=2,ws=3,yu=4,bu=5,xu=6,Su=7,yp=0,y0=1,b0=2,yi=0,bp=1,xp=2,Sp=3,wp=4,Mp=5,Ep=6,Cp=7;var sp=300,qr=301,Es=302,Yu=303,Zu=304,gc=306,wu=1e3,Li=1001,Mu=1002,an=1003,x0=1004;var vc=1005;var dn=1006,Ju=1007;var Yr=1008;var Nn=1009,Ap=1010,Tp=1011,Vo=1012,Ku=1013,bi=1014,xi=1015,Gi=1016,Qu=1017,ed=1018,zo=1020,Dp=35902,Rp=35899,Ip=1021,Pp=1022,ci=1023,ki=1026,Zr=1027,Op=1028,td=1029,Jr=1030,nd=1031;var id=1033,_c=33776,yc=33777,bc=33778,xc=33779,rd=35840,sd=35841,od=35842,ad=35843,cd=36196,ld=37492,ud=37496,dd=37488,hd=37489,Sc=37490,fd=37491,pd=37808,md=37809,gd=37810,vd=37811,_d=37812,yd=37813,bd=37814,xd=37815,Sd=37816,wd=37817,Md=37818,Ed=37819,Cd=37820,Ad=37821,Td=36492,Dd=36494,Rd=36495,Id=36283,Pd=36284,wc=36285,Od=36286;var qa=2300,Eu=2301,hu=2302,op=2303,ap=2400,cp=2401,lp=2402;var S0=3200;var Fd=0,w0=1,ur="",Xn="srgb",Ya="srgb-linear",Za="linear",wt="srgb";var bs=7680;var up=519,M0=512,E0=513,C0=514,Nd=515,A0=516,T0=517,Ld=518,D0=519,dp=35044;var Fp="300 es",vi=2e3,Do=2001;function qw(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Yw(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ro(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function R0(){let i=Ro("canvas");return i.style.display="block",i}var I_={},Io=null;function Np(...i){let t="THREE."+i.shift();Io?Io("log",t,...i):console.log(t,...i)}function I0(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Le(...i){i=I0(i);let t="THREE."+i.shift();if(Io)Io("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Ue(...i){i=I0(i);let t="THREE."+i.shift();if(Io)Io("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Cu(...i){let t=i.join(" ");t in I_||(I_[t]=!0,Le(...i))}function P0(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}var O0={[gu]:vu,[_u]:xu,[yu]:Su,[ws]:bu,[vu]:gu,[xu]:_u,[Su]:yu,[bu]:ws},Ui=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let r=n[t];if(r!==void 0){let s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}},bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Nf=Math.PI/180,Au=180/Math.PI;function Mc(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(bn[i&255]+bn[i>>8&255]+bn[i>>16&255]+bn[i>>24&255]+"-"+bn[t&255]+bn[t>>8&255]+"-"+bn[t>>16&15|64]+bn[t>>24&255]+"-"+bn[e&63|128]+bn[e>>8&255]+"-"+bn[e>>16&255]+bn[e>>24&255]+bn[n&255]+bn[n>>8&255]+bn[n>>16&255]+bn[n>>24&255]).toLowerCase()}function lt(i,t,e){return Math.max(t,Math.min(e,i))}function Zw(i,t){return(i%t+t)%t}function Lf(i,t,e){return(1-e)*i+e*t}function Ha(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Fn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var vt=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=lt(this.x,t.x,e.x),this.y=lt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=lt(this.x,t,e),this.y=lt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(lt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Bi=class{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let c=n[r+0],l=n[r+1],u=n[r+2],h=n[r+3],d=s[o+0],p=s[o+1],g=s[o+2],b=s[o+3];if(h!==b||c!==d||l!==p||u!==g){let m=c*d+l*p+u*g+h*b;m<0&&(d=-d,p=-p,g=-g,b=-b,m=-m);let f=1-a;if(m<.9995){let x=Math.acos(m),M=Math.sin(x);f=Math.sin(f*x)/M,a=Math.sin(a*x)/M,c=c*f+d*a,l=l*f+p*a,u=u*f+g*a,h=h*f+b*a}else{c=c*f+d*a,l=l*f+p*a,u=u*f+g*a,h=h*f+b*a;let x=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=x,l*=x,u*=x,h*=x}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,r,s,o){let a=n[r],c=n[r+1],l=n[r+2],u=n[r+3],h=s[o],d=s[o+1],p=s[o+2],g=s[o+3];return t[e]=a*g+u*h+c*p-l*d,t[e+1]=c*g+u*d+l*h-a*p,t[e+2]=l*g+u*p+a*d-c*h,t[e+3]=u*g-a*h-c*d-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(r/2),h=a(s/2),d=c(n/2),p=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=d*u*h+l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h+d*p*g;break;case"YZX":this._x=d*u*h+l*p*g,this._y=l*p*h+d*u*g,this._z=l*u*g-d*p*h,this._w=l*u*h-d*p*g;break;case"XZY":this._x=d*u*h-l*p*g,this._y=l*p*h-d*u*g,this._z=l*u*g+d*p*h,this._w=l*u*h+d*p*g;break;default:Le("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],h=e[10],d=n+a+h;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(o-r)*p}else if(n>a&&n>h){let p=2*Math.sqrt(1+n-a-h);this._w=(u-c)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+l)/p}else if(a>h){let p=2*Math.sqrt(1+a-n-h);this._w=(s-l)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(c+u)/p}else{let p=2*Math.sqrt(1+h-n-a);this._w=(o-r)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(lt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-n*l,this._z=s*u+o*l+n*c-r*a,this._w=o*u-n*a-r*c-s*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,r=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,r=-r,s=-s,o=-o,a=-a);let c=1-e;if(a<.9995){let l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,e=Math.sin(e*l)/u,this._x=this._x*c+n*e,this._y=this._y*c+r*e,this._z=this._z*c+s*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+r*e,this._z=this._z*c+s*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},z=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(P_.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(P_.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*r-a*n),u=2*(a*e-s*r),h=2*(s*n-o*e);return this.x=e+c*l+o*h-a*u,this.y=n+c*u+a*l-s*h,this.z=r+c*h+s*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=lt(this.x,t.x,e.x),this.y=lt(this.y,t.y,e.y),this.z=lt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=lt(this.x,t,e),this.y=lt(this.y,t,e),this.z=lt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return kf.copy(this).projectOnVector(t),this.sub(kf)}reflect(t){return this.sub(kf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(lt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},kf=new z,P_=new Bi,We=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,r,s,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,c,l)}set(t,e,n,r,s,o,a,c,l){let u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],p=n[5],g=n[8],b=r[0],m=r[3],f=r[6],x=r[1],M=r[4],w=r[7],D=r[2],E=r[5],R=r[8];return s[0]=o*b+a*x+c*D,s[3]=o*m+a*M+c*E,s[6]=o*f+a*w+c*R,s[1]=l*b+u*x+h*D,s[4]=l*m+u*M+h*E,s[7]=l*f+u*w+h*R,s[2]=d*b+p*x+g*D,s[5]=d*m+p*M+g*E,s[8]=d*f+p*w+g*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*s*u+n*a*c+r*s*l-r*o*c}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=u*o-a*l,d=a*c-u*s,p=l*s-o*c,g=e*h+n*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/g;return t[0]=h*b,t[1]=(r*l-u*n)*b,t[2]=(a*n-r*o)*b,t[3]=d*b,t[4]=(u*e-r*c)*b,t[5]=(r*s-a*e)*b,t[6]=p*b,t[7]=(n*c-l*e)*b,t[8]=(o*e-n*s)*b,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-r*l,r*c,-r*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Uf.makeScale(t,e)),this}rotate(t){return this.premultiply(Uf.makeRotation(-t)),this}translate(t,e){return this.premultiply(Uf.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Uf=new We,O_=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),F_=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Jw(){let i={enabled:!0,workingColorSpace:Ya,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===wt&&(r.r=ar(r.r),r.g=ar(r.g),r.b=ar(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===wt&&(r.r=To(r.r),r.g=To(r.g),r.b=To(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ur?Za:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Cu("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Cu("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ya]:{primaries:t,whitePoint:n,transfer:Za,toXYZ:O_,fromXYZ:F_,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Xn},outputColorSpaceConfig:{drawingBufferColorSpace:Xn}},[Xn]:{primaries:t,whitePoint:n,transfer:wt,toXYZ:O_,fromXYZ:F_,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Xn}}}),i}var ct=Jw();function ar(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function To(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var mo,Tu=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{mo===void 0&&(mo=Ro("canvas")),mo.width=t.width,mo.height=t.height;let r=mo.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=mo}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ro("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ar(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ar(e[n]/255)*255):e[n]=ar(e[n]);return{data:e,width:t.width,height:t.height}}else return Le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Kw=0,Po=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Kw++}),this.uuid=Mc(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Bf(r[o].image)):s.push(Bf(r[o]))}else s=Bf(r);n.url=s}return e||(t.images[this.uuid]=n),n}};function Bf(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Tu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Le("Texture: Unable to serialize Texture."),{})}var Qw=0,Vf=new z,Hi=(()=>{class i extends Ui{constructor(e=i.DEFAULT_IMAGE,n=i.DEFAULT_MAPPING,r=Li,s=Li,o=dn,a=Yr,c=ci,l=Nn,u=i.DEFAULT_ANISOTROPY,h=ur){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qw++}),this.uuid=Mc(),this.name="",this.source=new Po(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=u,this.format=c,this.internalFormat=null,this.type=l,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Vf).x}get height(){return this.source.getSize(Vf).y}get depth(){return this.source.getSize(Vf).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let n in e){let r=e[n];if(r===void 0){Le(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Le(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&r&&s.isVector2&&r.isVector2||s&&r&&s.isVector3&&r.isVector3||s&&r&&s.isMatrix3&&r.isMatrix3?s.copy(r):this[n]=r}}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wu:e.x=e.x-Math.floor(e.x);break;case Li:e.x=e.x<0?0:1;break;case Mu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wu:e.y=e.y-Math.floor(e.y);break;case Li:e.y=e.y<0?0:1;break;case Mu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}return i.DEFAULT_IMAGE=null,i.DEFAULT_MAPPING=sp,i.DEFAULT_ANISOTROPY=1,i})(),Ht=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,r=1){this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s,c=t.elements,l=c[0],u=c[4],h=c[8],d=c[1],p=c[5],g=c[9],b=c[2],m=c[6],f=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-b)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+b)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(l+1)/2,w=(p+1)/2,D=(f+1)/2,E=(u+d)/4,R=(h+b)/4,_=(g+m)/4;return M>w&&M>D?M<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(M),r=E/n,s=R/n):w>D?w<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(w),n=E/r,s=_/r):D<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(D),n=R/s,r=_/s),this.set(n,r,s,e),this}let x=Math.sqrt((m-g)*(m-g)+(h-b)*(h-b)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(h-b)/x,this.z=(d-u)/x,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=lt(this.x,t.x,e.x),this.y=lt(this.y,t.y,e.y),this.z=lt(this.z,t.z,e.z),this.w=lt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=lt(this.x,t,e),this.y=lt(this.y,t,e),this.z=lt(this.z,t,e),this.w=lt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(lt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Du=class extends Ui{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ht(0,0,t,e),this.scissorTest=!1,this.viewport=new Ht(0,0,t,e),this.textures=[];let r={width:t,height:e,depth:n.depth},s=new Hi(r),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:dn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let r=Object.assign({},t.textures[e].image);this.textures[e].source=new Po(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}},qn=class extends Du{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ja=class extends Hi{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=an,this.minFilter=an,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ru=class extends Hi{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=an,this.minFilter=an,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var $t=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,r,s,o,a,c,l,u,h,d,p,g,b,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,c,l,u,h,d,p,g,b,m)}set(t,e,n,r,s,o,a,c,l,u,h,d,p,g,b,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=g,f[11]=b,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();let e=this.elements,n=t.elements,r=1/go.setFromMatrixColumn(t,0).length(),s=1/go.setFromMatrixColumn(t,1).length(),o=1/go.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){let d=o*u,p=o*h,g=a*u,b=a*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=p+g*l,e[5]=d-b*l,e[9]=-a*c,e[2]=b-d*l,e[6]=g+p*l,e[10]=o*c}else if(t.order==="YXZ"){let d=c*u,p=c*h,g=l*u,b=l*h;e[0]=d+b*a,e[4]=g*a-p,e[8]=o*l,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=p*a-g,e[6]=b+d*a,e[10]=o*c}else if(t.order==="ZXY"){let d=c*u,p=c*h,g=l*u,b=l*h;e[0]=d-b*a,e[4]=-o*h,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*u,e[9]=b-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let d=o*u,p=o*h,g=a*u,b=a*h;e[0]=c*u,e[4]=g*l-p,e[8]=d*l+b,e[1]=c*h,e[5]=b*l+d,e[9]=p*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let d=o*c,p=o*l,g=a*c,b=a*l;e[0]=c*u,e[4]=b-d*h,e[8]=g*h+p,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=p*h+g,e[10]=d-b*h}else if(t.order==="XZY"){let d=o*c,p=o*l,g=a*c,b=a*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=d*h+b,e[5]=o*u,e[9]=p*h-g,e[2]=g*h-p,e[6]=a*u,e[10]=b*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(eM,t,tM)}lookAt(t,e,n){let r=this.elements;return Wn.subVectors(t,e),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),Nr.crossVectors(n,Wn),Nr.lengthSq()===0&&(Math.abs(n.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),Nr.crossVectors(n,Wn)),Nr.normalize(),Xl.crossVectors(Wn,Nr),r[0]=Nr.x,r[4]=Xl.x,r[8]=Wn.x,r[1]=Nr.y,r[5]=Xl.y,r[9]=Wn.y,r[2]=Nr.z,r[6]=Xl.z,r[10]=Wn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],p=n[13],g=n[2],b=n[6],m=n[10],f=n[14],x=n[3],M=n[7],w=n[11],D=n[15],E=r[0],R=r[4],_=r[8],C=r[12],N=r[1],T=r[5],U=r[9],$=r[13],K=r[2],F=r[6],H=r[10],k=r[14],ne=r[3],se=r[7],ge=r[11],Ae=r[15];return s[0]=o*E+a*N+c*K+l*ne,s[4]=o*R+a*T+c*F+l*se,s[8]=o*_+a*U+c*H+l*ge,s[12]=o*C+a*$+c*k+l*Ae,s[1]=u*E+h*N+d*K+p*ne,s[5]=u*R+h*T+d*F+p*se,s[9]=u*_+h*U+d*H+p*ge,s[13]=u*C+h*$+d*k+p*Ae,s[2]=g*E+b*N+m*K+f*ne,s[6]=g*R+b*T+m*F+f*se,s[10]=g*_+b*U+m*H+f*ge,s[14]=g*C+b*$+m*k+f*Ae,s[3]=x*E+M*N+w*K+D*ne,s[7]=x*R+M*T+w*F+D*se,s[11]=x*_+M*U+w*H+D*ge,s[15]=x*C+M*$+w*k+D*Ae,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],h=t[6],d=t[10],p=t[14],g=t[3],b=t[7],m=t[11],f=t[15],x=c*p-l*d,M=a*p-l*h,w=a*d-c*h,D=o*p-l*u,E=o*d-c*u,R=o*h-a*u;return e*(b*x-m*M+f*w)-n*(g*x-m*D+f*E)+r*(g*M-b*D+f*R)-s*(g*w-b*E+m*R)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],h=t[9],d=t[10],p=t[11],g=t[12],b=t[13],m=t[14],f=t[15],x=e*a-n*o,M=e*c-r*o,w=e*l-s*o,D=n*c-r*a,E=n*l-s*a,R=r*l-s*c,_=u*b-h*g,C=u*m-d*g,N=u*f-p*g,T=h*m-d*b,U=h*f-p*b,$=d*f-p*m,K=x*$-M*U+w*T+D*N-E*C+R*_;if(K===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/K;return t[0]=(a*$-c*U+l*T)*F,t[1]=(r*U-n*$-s*T)*F,t[2]=(b*R-m*E+f*D)*F,t[3]=(d*E-h*R-p*D)*F,t[4]=(c*N-o*$-l*C)*F,t[5]=(e*$-r*N+s*C)*F,t[6]=(m*w-g*R-f*M)*F,t[7]=(u*R-d*w+p*M)*F,t[8]=(o*U-a*N+l*_)*F,t[9]=(n*N-e*U-s*_)*F,t[10]=(g*E-b*w+f*x)*F,t[11]=(h*w-u*E-p*x)*F,t[12]=(a*C-o*T-c*_)*F,t[13]=(e*T-n*C+r*_)*F,t[14]=(b*M-g*D-m*x)*F,t[15]=(u*D-h*M+d*x)*F,this}scale(t){let e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,c=t.z,l=s*o,u=s*a;return this.set(l*o+n,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+n,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){let r=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,u=o+o,h=a+a,d=s*l,p=s*u,g=s*h,b=o*u,m=o*h,f=a*h,x=c*l,M=c*u,w=c*h,D=n.x,E=n.y,R=n.z;return r[0]=(1-(b+f))*D,r[1]=(p+w)*D,r[2]=(g-M)*D,r[3]=0,r[4]=(p-w)*E,r[5]=(1-(d+f))*E,r[6]=(m+x)*E,r[7]=0,r[8]=(g+M)*R,r[9]=(m-x)*R,r[10]=(1-(d+b))*R,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){let r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];let s=this.determinant();if(s===0)return n.set(1,1,1),e.identity(),this;let o=go.set(r[0],r[1],r[2]).length(),a=go.set(r[4],r[5],r[6]).length(),c=go.set(r[8],r[9],r[10]).length();s<0&&(o=-o),pi.copy(this);let l=1/o,u=1/a,h=1/c;return pi.elements[0]*=l,pi.elements[1]*=l,pi.elements[2]*=l,pi.elements[4]*=u,pi.elements[5]*=u,pi.elements[6]*=u,pi.elements[8]*=h,pi.elements[9]*=h,pi.elements[10]*=h,e.setFromRotationMatrix(pi),n.x=o,n.y=a,n.z=c,this}makePerspective(t,e,n,r,s,o,a=vi,c=!1){let l=this.elements,u=2*s/(e-t),h=2*s/(n-r),d=(e+t)/(e-t),p=(n+r)/(n-r),g,b;if(c)g=s/(o-s),b=o*s/(o-s);else if(a===vi)g=-(o+s)/(o-s),b=-2*o*s/(o-s);else if(a===Do)g=-o/(o-s),b=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=b,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=vi,c=!1){let l=this.elements,u=2/(e-t),h=2/(n-r),d=-(e+t)/(e-t),p=-(n+r)/(n-r),g,b;if(c)g=1/(o-s),b=o/(o-s);else if(a===vi)g=-2/(o-s),b=-(o+s)/(o-s);else if(a===Do)g=-1/(o-s),b=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=b,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},go=new z,pi=new $t,eM=new z(0,0,0),tM=new z(1,1,1),Nr=new z,Xl=new z,Wn=new z,N_=new $t,L_=new Bi,Oo=(()=>{class i{constructor(e=0,n=0,r=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,s=this._order){return this._x=e,this._y=n,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){let s=e.elements,o=s[0],a=s[4],c=s[8],l=s[1],u=s[5],h=s[9],d=s[2],p=s[6],g=s[10];switch(n){case"XYZ":this._y=Math.asin(lt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(p,u),this._z=0);break;case"YXZ":this._x=Math.asin(-lt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(c,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(lt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,g),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-lt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,g),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(c,g));break;case"XZY":this._z=Math.asin(-lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,u),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-h,g),this._y=0);break;default:Le("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return N_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(N_,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return L_.setFromEuler(this),this.setFromQuaternion(L_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return i.DEFAULT_ORDER="XYZ",i})(),Ka=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},nM=0,k_=new z,vo=new Bi,nr=new $t,$l=new z,Wa=new z,iM=new z,rM=new Bi,U_=new z(1,0,0),B_=new z(0,1,0),V_=new z(0,0,1),z_={type:"added"},sM={type:"removed"},_o={type:"childadded",child:null},zf={type:"childremoved",child:null},Kr=(()=>{class i extends Ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nM++}),this.uuid=Mc(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new z,n=new Oo,r=new Bi,s=new z(1,1,1);function o(){r.setFromEuler(n,!1)}function a(){n.setFromQuaternion(r,void 0,!1)}n._onChange(o),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new $t},normalMatrix:{value:new We}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ka,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return vo.setFromAxisAngle(e,n),this.quaternion.multiply(vo),this}rotateOnWorldAxis(e,n){return vo.setFromAxisAngle(e,n),this.quaternion.premultiply(vo),this}rotateX(e){return this.rotateOnAxis(U_,e)}rotateY(e){return this.rotateOnAxis(B_,e)}rotateZ(e){return this.rotateOnAxis(V_,e)}translateOnAxis(e,n){return k_.copy(e).applyQuaternion(this.quaternion),this.position.add(k_.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(U_,e)}translateY(e){return this.translateOnAxis(B_,e)}translateZ(e){return this.translateOnAxis(V_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(nr.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?$l.copy(e):$l.set(e,n,r);let s=this.parent;this.updateWorldMatrix(!0,!1),Wa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?nr.lookAt(Wa,$l,this.up):nr.lookAt($l,Wa,this.up),this.quaternion.setFromRotationMatrix(nr),s&&(nr.extractRotation(s.matrixWorld),vo.setFromRotationMatrix(nr),this.quaternion.premultiply(vo.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Ue("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(z_),_o.child=e,this.dispatchEvent(_o),_o.child=null):Ue("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(sM),zf.child=e,this.dispatchEvent(zf),zf.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),nr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),nr.multiply(e.parent.matrixWorld)),e.applyMatrix4(nr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(z_),_o.child=e,this.dispatchEvent(_o),_o.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,s=this.children.length;r<s;r++){let a=this.children[r].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wa,e,iM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wa,rM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);let n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].traverseVisible(e)}traverseAncestors(e){let n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let n=e.x,r=e.y,s=e.z,o=this.matrix.elements;o[12]+=n-o[0]*n-o[4]*r-o[8]*s,o[13]+=r-o[1]*n-o[5]*r-o[9]*s,o[14]+=s-o[2]*n-o[6]*r-o[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let n=this.children;for(let r=0,s=n.length;r<s;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(e){let n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(c=>Ot(ie({},c),{boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(c=>ie({},c)),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function o(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(e.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let l=c.shapes;if(Array.isArray(l))for(let u=0,h=l.length;u<h;u++){let d=l[u];o(e.shapes,d)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let l=0,u=this.material.length;l<u;l++)c.push(o(e.materials,this.material[l]));s.material=c}else s.material=o(e.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){let l=this.animations[c];s.animations.push(o(e.animations,l))}}if(n){let c=a(e.geometries),l=a(e.materials),u=a(e.textures),h=a(e.images),d=a(e.shapes),p=a(e.skeletons),g=a(e.animations),b=a(e.nodes);c.length>0&&(r.geometries=c),l.length>0&&(r.materials=l),u.length>0&&(r.textures=u),h.length>0&&(r.images=h),d.length>0&&(r.shapes=d),p.length>0&&(r.skeletons=p),g.length>0&&(r.animations=g),b.length>0&&(r.nodes=b)}return r.object=s,r;function a(c){let l=[];for(let u in c){let h=c[u];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){let s=e.children[r];this.add(s.clone())}return this}}return i.DEFAULT_UP=new z(0,1,0),i.DEFAULT_MATRIX_AUTO_UPDATE=!0,i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,i})(),xs=class extends Kr{constructor(){super(),this.isGroup=!0,this.type="Group"}},oM={type:"move"},Fo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let b of t.hand.values()){let m=e.getJointPose(b,n),f=this._getHandJoint(l,b);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(oM)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new xs;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},F0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Lr={h:0,s:0,l:0},ql={h:0,s:0,l:0};function Gf(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var ut=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Xn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ct.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=ct.workingColorSpace){return this.r=t,this.g=e,this.b=n,ct.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=ct.workingColorSpace){if(t=Zw(t,1),e=lt(e,0,1),n=lt(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Gf(o,s,t+1/3),this.g=Gf(o,s,t),this.b=Gf(o,s,t-1/3)}return ct.colorSpaceToWorking(this,r),this}setStyle(t,e=Xn){function n(s){s!==void 0&&parseFloat(s)<1&&Le("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Le("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);Le("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Xn){let n=F0[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Le("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ar(t.r),this.g=ar(t.g),this.b=ar(t.b),this}copyLinearToSRGB(t){return this.r=To(t.r),this.g=To(t.g),this.b=To(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Xn){return ct.workingToColorSpace(xn.copy(this),t),Math.round(lt(xn.r*255,0,255))*65536+Math.round(lt(xn.g*255,0,255))*256+Math.round(lt(xn.b*255,0,255))}getHexString(t=Xn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ct.workingColorSpace){ct.workingToColorSpace(xn.copy(this),e);let n=xn.r,r=xn.g,s=xn.b,o=Math.max(n,r,s),a=Math.min(n,r,s),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-n)/h+2;break;case s:c=(n-r)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=ct.workingColorSpace){return ct.workingToColorSpace(xn.copy(this),e),t.r=xn.r,t.g=xn.g,t.b=xn.b,t}getStyle(t=Xn){ct.workingToColorSpace(xn.copy(this),t);let e=xn.r,n=xn.g,r=xn.b;return t!==Xn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Lr),this.setHSL(Lr.h+t,Lr.s+e,Lr.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Lr),t.getHSL(ql);let n=Lf(Lr.h,ql.h,e),r=Lf(Lr.s,ql.s,e),s=Lf(Lr.l,ql.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},xn=new ut;ut.NAMES=F0;var Qa=class extends Kr{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Oo,this.environmentIntensity=1,this.environmentRotation=new Oo,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},mi=new z,ir=new z,Hf=new z,rr=new z,yo=new z,bo=new z,G_=new z,Wf=new z,jf=new z,Xf=new z,$f=new Ht,qf=new Ht,Yf=new Ht,zr=class i{constructor(t=new z,e=new z,n=new z){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),mi.subVectors(t,e),r.cross(mi);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){mi.subVectors(r,e),ir.subVectors(n,e),Hf.subVectors(t,e);let o=mi.dot(mi),a=mi.dot(ir),c=mi.dot(Hf),l=ir.dot(ir),u=ir.dot(Hf),h=o*l-a*a;if(h===0)return s.set(0,0,0),null;let d=1/h,p=(l*c-a*u)*d,g=(o*u-a*c)*d;return s.set(1-p-g,g,p)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,rr)===null?!1:rr.x>=0&&rr.y>=0&&rr.x+rr.y<=1}static getInterpolation(t,e,n,r,s,o,a,c){return this.getBarycoord(t,e,n,r,rr)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,rr.x),c.addScaledVector(o,rr.y),c.addScaledVector(a,rr.z),c)}static getInterpolatedAttribute(t,e,n,r,s,o){return $f.setScalar(0),qf.setScalar(0),Yf.setScalar(0),$f.fromBufferAttribute(t,e),qf.fromBufferAttribute(t,n),Yf.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector($f,s.x),o.addScaledVector(qf,s.y),o.addScaledVector(Yf,s.z),o}static isFrontFacing(t,e,n,r){return mi.subVectors(n,e),ir.subVectors(t,e),mi.cross(ir).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return mi.subVectors(this.c,this.b),ir.subVectors(this.a,this.b),mi.cross(ir).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return i.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,r=this.b,s=this.c,o,a;yo.subVectors(r,n),bo.subVectors(s,n),Wf.subVectors(t,n);let c=yo.dot(Wf),l=bo.dot(Wf);if(c<=0&&l<=0)return e.copy(n);jf.subVectors(t,r);let u=yo.dot(jf),h=bo.dot(jf);if(u>=0&&h<=u)return e.copy(r);let d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(yo,o);Xf.subVectors(t,s);let p=yo.dot(Xf),g=bo.dot(Xf);if(g>=0&&p<=g)return e.copy(s);let b=p*l-c*g;if(b<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(bo,a);let m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return G_.subVectors(s,r),a=(h-u)/(h-u+(p-g)),e.copy(r).addScaledVector(G_,a);let f=1/(m+b+d);return o=b*f,a=d*f,e.copy(n).addScaledVector(yo,o).addScaledVector(bo,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Hr=class{constructor(t=new z(1/0,1/0,1/0),e=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(gi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(gi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=gi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,gi):gi.fromBufferAttribute(s,o),gi.applyMatrix4(t.matrixWorld),this.expandByPoint(gi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Yl.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Yl.copy(n.boundingBox)),Yl.applyMatrix4(t.matrixWorld),this.union(Yl)}let r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,gi),gi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ja),Zl.subVectors(this.max,ja),xo.subVectors(t.a,ja),So.subVectors(t.b,ja),wo.subVectors(t.c,ja),kr.subVectors(So,xo),Ur.subVectors(wo,So),gs.subVectors(xo,wo);let e=[0,-kr.z,kr.y,0,-Ur.z,Ur.y,0,-gs.z,gs.y,kr.z,0,-kr.x,Ur.z,0,-Ur.x,gs.z,0,-gs.x,-kr.y,kr.x,0,-Ur.y,Ur.x,0,-gs.y,gs.x,0];return!Zf(e,xo,So,wo,Zl)||(e=[1,0,0,0,1,0,0,0,1],!Zf(e,xo,So,wo,Zl))?!1:(Jl.crossVectors(kr,Ur),e=[Jl.x,Jl.y,Jl.z],Zf(e,xo,So,wo,Zl))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,gi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(gi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(sr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),sr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),sr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),sr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),sr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),sr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),sr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),sr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(sr),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},sr=[new z,new z,new z,new z,new z,new z,new z,new z],gi=new z,Yl=new Hr,xo=new z,So=new z,wo=new z,kr=new z,Ur=new z,gs=new z,ja=new z,Zl=new z,Jl=new z,vs=new z;function Zf(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){vs.fromArray(i,s);let a=r.x*Math.abs(vs.x)+r.y*Math.abs(vs.y)+r.z*Math.abs(vs.z),c=t.dot(vs),l=e.dot(vs),u=n.dot(vs);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var Jt=new z,Kl=new vt,aM=0,$n=class extends Ui{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:aM++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=dp,this.updateRanges=[],this.gpuType=xi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Kl.fromBufferAttribute(this,e),Kl.applyMatrix3(t),this.setXY(e,Kl.x,Kl.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Jt.fromBufferAttribute(this,e),Jt.applyMatrix3(t),this.setXYZ(e,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Jt.fromBufferAttribute(this,e),Jt.applyMatrix4(t),this.setXYZ(e,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Jt.fromBufferAttribute(this,e),Jt.applyNormalMatrix(t),this.setXYZ(e,Jt.x,Jt.y,Jt.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Jt.fromBufferAttribute(this,e),Jt.transformDirection(t),this.setXYZ(e,Jt.x,Jt.y,Jt.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ha(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Fn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ha(e,this.array)),e}setX(t,e){return this.normalized&&(e=Fn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ha(e,this.array)),e}setY(t,e){return this.normalized&&(e=Fn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ha(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Fn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ha(e,this.array)),e}setW(t,e){return this.normalized&&(e=Fn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Fn(e,this.array),n=Fn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Fn(e,this.array),n=Fn(n,this.array),r=Fn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Fn(e,this.array),n=Fn(n,this.array),r=Fn(r,this.array),s=Fn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==dp&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}};var ec=class extends $n{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var tc=class extends $n{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var An=class extends $n{constructor(t,e,n){super(new Float32Array(t),e,n)}},cM=new Hr,Xa=new z,Jf=new z,No=class{constructor(t=new z,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):cM.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Xa.subVectors(t,this.center);let e=Xa.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Xa,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Jf.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Xa.copy(t.center).add(Jf)),this.expandByPoint(Xa.copy(t.center).sub(Jf))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},lM=0,ai=new $t,Kf=new Kr,Mo=new z,jn=new Hr,$a=new Hr,on=new z,_i=class i extends Ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lM++}),this.uuid=Mc(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(qw(t)?tc:ec)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new We().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ai.makeRotationFromQuaternion(t),this.applyMatrix4(ai),this}rotateX(t){return ai.makeRotationX(t),this.applyMatrix4(ai),this}rotateY(t){return ai.makeRotationY(t),this.applyMatrix4(ai),this}rotateZ(t){return ai.makeRotationZ(t),this.applyMatrix4(ai),this}translate(t,e,n){return ai.makeTranslation(t,e,n),this.applyMatrix4(ai),this}scale(t,e,n){return ai.makeScale(t,e,n),this.applyMatrix4(ai),this}lookAt(t){return Kf.lookAt(t),Kf.updateMatrix(),this.applyMatrix4(Kf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mo).negate(),this.translate(Mo.x,Mo.y,Mo.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let r=0,s=t.length;r<s;r++){let o=t[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new An(n,3))}else{let n=Math.min(t.length,e.count);for(let r=0;r<n;r++){let s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&Le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){let s=e[n];jn.setFromBufferAttribute(s),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,jn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,jn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(jn.min),this.boundingBox.expandByPoint(jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ue('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new No);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(t){let n=this.boundingSphere.center;if(jn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];$a.setFromBufferAttribute(a),this.morphTargetsRelative?(on.addVectors(jn.min,$a.min),jn.expandByPoint(on),on.addVectors(jn.max,$a.max),jn.expandByPoint(on)):(jn.expandByPoint($a.min),jn.expandByPoint($a.max))}jn.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)on.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(on));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)on.fromBufferAttribute(a,l),c&&(Mo.fromBufferAttribute(t,l),on.add(Mo)),r=Math.max(r,n.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ue('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ue("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $n(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let _=0;_<n.count;_++)a[_]=new z,c[_]=new z;let l=new z,u=new z,h=new z,d=new vt,p=new vt,g=new vt,b=new z,m=new z;function f(_,C,N){l.fromBufferAttribute(n,_),u.fromBufferAttribute(n,C),h.fromBufferAttribute(n,N),d.fromBufferAttribute(s,_),p.fromBufferAttribute(s,C),g.fromBufferAttribute(s,N),u.sub(l),h.sub(l),p.sub(d),g.sub(d);let T=1/(p.x*g.y-g.x*p.y);isFinite(T)&&(b.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(T),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(T),a[_].add(b),a[C].add(b),a[N].add(b),c[_].add(m),c[C].add(m),c[N].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let _=0,C=x.length;_<C;++_){let N=x[_],T=N.start,U=N.count;for(let $=T,K=T+U;$<K;$+=3)f(t.getX($+0),t.getX($+1),t.getX($+2))}let M=new z,w=new z,D=new z,E=new z;function R(_){D.fromBufferAttribute(r,_),E.copy(D);let C=a[_];M.copy(C),M.sub(D.multiplyScalar(D.dot(C))).normalize(),w.crossVectors(E,C);let T=w.dot(c[_])<0?-1:1;o.setXYZW(_,M.x,M.y,M.z,T)}for(let _=0,C=x.length;_<C;++_){let N=x[_],T=N.start,U=N.count;for(let $=T,K=T+U;$<K;$+=3)R(t.getX($+0)),R(t.getX($+1)),R(t.getX($+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new $n(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let r=new z,s=new z,o=new z,a=new z,c=new z,l=new z,u=new z,h=new z;if(t)for(let d=0,p=t.count;d<p;d+=3){let g=t.getX(d+0),b=t.getX(d+1),m=t.getX(d+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,b),o.fromBufferAttribute(e,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,b),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(b,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=e.count;d<p;d+=3)r.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)on.fromBufferAttribute(t,e),on.normalize(),t.setXYZ(e,on.x,on.y,on.z)}toNonIndexed(){function t(a,c){let l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u),p=0,g=0;for(let b=0,m=c.length;b<m;b++){a.isInterleavedBufferAttribute?p=c[b]*a.data.stride+a.offset:p=c[b]*u;for(let f=0;f<u;f++)d[g++]=l[p++]}return new $n(d,u,h)}if(this.index===null)return Le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=t(c,n);e.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let u=0,h=l.length;u<h;u++){let d=l[u],p=t(d,n);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){let p=l[h];u.push(p.toJSON(t.data))}u.length>0&&(r[c]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let r=t.attributes;for(let l in r){let u=r[l];this.setAttribute(l,u.clone(e))}let s=t.morphAttributes;for(let l in s){let u=[],h=s[l];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,u=o.length;l<u;l++){let h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}};var uM=0,Wr=class extends Ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uM++}),this.uuid=Mc(),this.name="",this.type="Material",this.blending=Ss,this.side=cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pu,this.blendDst=mu,this.blendEquation=Gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ut(0,0,0),this.blendAlpha=0,this.depthFunc=ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=up,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bs,this.stencilZFail=bs,this.stencilZPass=bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Le(`Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){Le(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ss&&(n.blending=this.blending),this.side!==cr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==pu&&(n.blendSrc=this.blendSrc),this.blendDst!==mu&&(n.blendDst=this.blendDst),this.blendEquation!==Gr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ws&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==up&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==bs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==bs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(e){let s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var or=new z,Qf=new z,Ql=new z,Br=new z,ep=new z,eu=new z,tp=new z,Iu=class{constructor(t=new z,e=new z(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,or)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=or.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(or.copy(this.origin).addScaledVector(this.direction,e),or.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Qf.copy(t).add(e).multiplyScalar(.5),Ql.copy(e).sub(t).normalize(),Br.copy(this.origin).sub(Qf);let s=t.distanceTo(e)*.5,o=-this.direction.dot(Ql),a=Br.dot(this.direction),c=-Br.dot(Ql),l=Br.lengthSq(),u=Math.abs(1-o*o),h,d,p,g;if(u>0)if(h=o*c-a,d=o*a-c,g=s*u,h>=0)if(d>=-g)if(d<=g){let b=1/u;h*=b,d*=b,p=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*c)+l;else d=-s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-c),s),p=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-s,-c),s),p=d*(d+2*c)+l):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-c),s),p=-h*h+d*(d+2*c)+l);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Qf).addScaledVector(Ql,d),p}intersectSphere(t,e){or.subVectors(t.center,this.origin);let n=or.dot(this.direction),r=or.dot(or)-n*n,s=t.radius*t.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,r=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,r=(t.min.x-d.x)*l),u>=0?(s=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(s=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(t.min.z-d.z)*h,c=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,c=(t.min.z-d.z)*h),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,or)!==null}intersectTriangle(t,e,n,r,s){ep.subVectors(e,t),eu.subVectors(n,t),tp.crossVectors(ep,eu);let o=this.direction.dot(tp),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Br.subVectors(this.origin,t);let c=a*this.direction.dot(eu.crossVectors(Br,eu));if(c<0)return null;let l=a*this.direction.dot(ep.cross(Br));if(l<0||c+l>o)return null;let u=-a*Br.dot(tp);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ms=class extends Wr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oo,this.combine=yp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},H_=new $t,_s=new Iu,tu=new No,W_=new z,nu=new z,iu=new z,ru=new z,np=new z,su=new z,j_=new z,ou=new z,Tn=class extends Kr{constructor(t=new _i,e=new Ms){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);let a=this.morphTargetInfluences;if(s&&a){su.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let u=a[c],h=s[c];u!==0&&(np.fromBufferAttribute(h,t),o?su.addScaledVector(np,u):su.addScaledVector(np.sub(e),u))}e.add(su)}return e}raycast(t,e){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),tu.copy(n.boundingSphere),tu.applyMatrix4(s),_s.copy(t.ray).recast(t.near),!(tu.containsPoint(_s.origin)===!1&&(_s.intersectSphere(tu,W_)===null||_s.origin.distanceToSquared(W_)>(t.far-t.near)**2))&&(H_.copy(s).invert(),_s.copy(t.ray).applyMatrix4(H_),!(n.boundingBox!==null&&_s.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,_s)))}_computeIntersections(t,e,n){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,b=d.length;g<b;g++){let m=d[g],f=o[m.materialIndex],x=Math.max(m.start,p.start),M=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let w=x,D=M;w<D;w+=3){let E=a.getX(w),R=a.getX(w+1),_=a.getX(w+2);r=au(this,f,t,n,l,u,h,E,R,_),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{let g=Math.max(0,p.start),b=Math.min(a.count,p.start+p.count);for(let m=g,f=b;m<f;m+=3){let x=a.getX(m),M=a.getX(m+1),w=a.getX(m+2);r=au(this,o,t,n,l,u,h,x,M,w),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,b=d.length;g<b;g++){let m=d[g],f=o[m.materialIndex],x=Math.max(m.start,p.start),M=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let w=x,D=M;w<D;w+=3){let E=w,R=w+1,_=w+2;r=au(this,f,t,n,l,u,h,E,R,_),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{let g=Math.max(0,p.start),b=Math.min(c.count,p.start+p.count);for(let m=g,f=b;m<f;m+=3){let x=m,M=m+1,w=m+2;r=au(this,o,t,n,l,u,h,x,M,w),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}};function dM(i,t,e,n,r,s,o,a){let c;if(t.side===hn?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,t.side===cr,a),c===null)return null;ou.copy(a),ou.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(ou);return l<e.near||l>e.far?null:{distance:l,point:ou.clone(),object:i}}function au(i,t,e,n,r,s,o,a,c,l){i.getVertexPosition(a,nu),i.getVertexPosition(c,iu),i.getVertexPosition(l,ru);let u=dM(i,t,e,n,nu,iu,ru,j_);if(u){let h=new z;zr.getBarycoord(j_,nu,iu,ru,h),r&&(u.uv=zr.getInterpolatedAttribute(r,a,c,l,h,new vt)),s&&(u.uv1=zr.getInterpolatedAttribute(s,a,c,l,h,new vt)),o&&(u.normal=zr.getInterpolatedAttribute(o,a,c,l,h,new z),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new z,materialIndex:0};zr.getNormal(nu,iu,ru,d.normal),u.face=d,u.barycoord=h}return u}var Pu=class extends Hi{constructor(t=null,e=1,n=1,r,s,o,a,c,l=an,u=an,h,d){super(null,o,a,c,l,u,r,s,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ip=new z,hM=new z,fM=new We,Ni=class{constructor(t=new z(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let r=ip.subVectors(n,e).cross(hM.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let r=t.delta(ip),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(r,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||fM.getNormalMatrix(t),r=this.coplanarPoint(ip).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ys=new No,pM=new vt(.5,.5),cu=new z,Lo=class{constructor(t=new Ni,e=new Ni,n=new Ni,r=new Ni,s=new Ni,o=new Ni){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=vi,n=!1){let r=this.planes,s=t.elements,o=s[0],a=s[1],c=s[2],l=s[3],u=s[4],h=s[5],d=s[6],p=s[7],g=s[8],b=s[9],m=s[10],f=s[11],x=s[12],M=s[13],w=s[14],D=s[15];if(r[0].setComponents(l-o,p-u,f-g,D-x).normalize(),r[1].setComponents(l+o,p+u,f+g,D+x).normalize(),r[2].setComponents(l+a,p+h,f+b,D+M).normalize(),r[3].setComponents(l-a,p-h,f-b,D-M).normalize(),n)r[4].setComponents(c,d,m,w).normalize(),r[5].setComponents(l-c,p-d,f-m,D-w).normalize();else if(r[4].setComponents(l-c,p-d,f-m,D-w).normalize(),e===vi)r[5].setComponents(l+c,p+d,f+m,D+w).normalize();else if(e===Do)r[5].setComponents(c,d,m,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ys.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ys.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ys)}intersectsSprite(t){ys.center.set(0,0,0);let e=pM.distanceTo(t.center);return ys.radius=.7071067811865476+e,ys.applyMatrix4(t.matrixWorld),this.intersectsSphere(ys)}intersectsSphere(t){let e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let r=e[n];if(cu.x=r.normal.x>0?t.max.x:t.min.x,cu.y=r.normal.y>0?t.max.y:t.min.y,cu.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(cu)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var nc=class extends Hi{constructor(t=[],e=qr,n,r,s,o,a,c,l,u){super(t,e,n,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var lr=class extends Hi{constructor(t,e,n=bi,r,s,o,a=an,c=an,l,u=ki,h=1){if(u!==ki&&u!==Zr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:h};super(d,r,s,o,a,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Po(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Ou=class extends lr{constructor(t,e=bi,n=qr,r,s,o=an,a=an,c,l=ki){let u={width:t,height:t,depth:1},h=[u,u,u,u,u,u];super(t,t,e,n,r,s,o,a,c,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},ic=class extends Hi{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ko=class i extends _i{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],u=[],h=[],d=0,p=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,r,o,2),g("x","z","y",1,-1,t,n,-e,r,o,3),g("x","y","z",1,-1,t,e,n,r,s,4),g("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new An(l,3)),this.setAttribute("normal",new An(u,3)),this.setAttribute("uv",new An(h,2));function g(b,m,f,x,M,w,D,E,R,_,C){let N=w/R,T=D/_,U=w/2,$=D/2,K=E/2,F=R+1,H=_+1,k=0,ne=0,se=new z;for(let ge=0;ge<H;ge++){let Ae=ge*T-$;for(let Ie=0;Ie<F;Ie++){let dt=Ie*N-U;se[b]=dt*x,se[m]=Ae*M,se[f]=K,l.push(se.x,se.y,se.z),se[b]=0,se[m]=0,se[f]=E>0?1:-1,u.push(se.x,se.y,se.z),h.push(Ie/R),h.push(1-ge/_),k+=1}}for(let ge=0;ge<_;ge++)for(let Ae=0;Ae<R;Ae++){let Ie=d+Ae+F*ge,dt=d+Ae+F*(ge+1),Et=d+(Ae+1)+F*(ge+1),Ye=d+(Ae+1)+F*ge;c.push(Ie,dt,Ye),c.push(dt,Et,Ye),ne+=6}a.addGroup(p,ne,C),p+=ne,d+=k}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var rc=class i extends _i{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};let s=t/2,o=e/2,a=Math.floor(n),c=Math.floor(r),l=a+1,u=c+1,h=t/a,d=e/c,p=[],g=[],b=[],m=[];for(let f=0;f<u;f++){let x=f*d-o;for(let M=0;M<l;M++){let w=M*h-s;g.push(w,-x,0),b.push(0,0,1),m.push(M/a),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let x=0;x<a;x++){let M=x+l*f,w=x+l*(f+1),D=x+1+l*(f+1),E=x+1+l*f;p.push(M,w,E),p.push(w,D,E)}this.setIndex(p),this.setAttribute("position",new An(g,3)),this.setAttribute("normal",new An(b,3)),this.setAttribute("uv",new An(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Uo=class i extends _i{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,u=[],h=new z,d=new z,p=[],g=[],b=[],m=[];for(let f=0;f<=n;f++){let x=[],M=f/n,w=0;f===0&&o===0?w=.5/e:f===n&&c===Math.PI&&(w=-.5/e);for(let D=0;D<=e;D++){let E=D/e;h.x=-t*Math.cos(r+E*s)*Math.sin(o+M*a),h.y=t*Math.cos(o+M*a),h.z=t*Math.sin(r+E*s)*Math.sin(o+M*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),b.push(d.x,d.y,d.z),m.push(E+w,1-M),x.push(l++)}u.push(x)}for(let f=0;f<n;f++)for(let x=0;x<e;x++){let M=u[f][x+1],w=u[f][x],D=u[f+1][x],E=u[f+1][x+1];(f!==0||o>0)&&p.push(M,w,E),(f!==n-1||c<Math.PI)&&p.push(w,D,E)}this.setIndex(p),this.setAttribute("position",new An(g,3)),this.setAttribute("normal",new An(b,3)),this.setAttribute("uv",new An(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function Cs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let r=i[e][n];if(X_(r))r.isRenderTargetTexture?(Le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone();else if(Array.isArray(r))if(X_(r[0])){let s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();t[e][n]=s}else t[e][n]=r.slice();else t[e][n]=r}}return t}function Sn(i){let t={};for(let e=0;e<i.length;e++){let n=Cs(i[e]);for(let r in n)t[r]=n[r]}return t}function X_(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function mM(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Lp(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ct.workingColorSpace}var N0={clone:Cs,merge:Sn},gM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Yn=class extends Wr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gM,this.fragmentShader=vM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Cs(t.uniforms),this.uniformsGroups=mM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Fu=class extends Yn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},sc=class extends Wr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fd,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oo,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Nu=class extends Wr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=S0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Lu=class extends Wr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function lu(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}var jr=class{constructor(t,e,n,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,r=e[n],s=e[n-1];n:{e:{let o;t:{i:if(!(t<r)){for(let a=n+2;;){if(r===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=e[++n],t<r)break e}o=e.length;break t}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=e[--n-1],t>=s)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(r=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=t*r;for(let o=0;o!==r;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ku=class extends jr{constructor(t,e,n,r){super(t,e,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ap,endingEnd:ap}}intervalChanged_(t,e,n){let r=this.parameterPositions,s=t-2,o=t+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case cp:s=t,a=2*e-n;break;case lp:s=r.length-2,a=e+r[s]-r[s+1];break;default:s=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case cp:o=t,c=2*n-e;break;case lp:o=1,c=n+r[1]-r[0];break;default:o=t-1,c=e}let l=(n-e)*.5,u=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-e)/(r-e),b=g*g,m=b*g,f=-d*m+2*d*b-d*g,x=(1+d)*m+(-1.5-2*d)*b+(-.5+d)*g+1,M=(-1-p)*m+(1.5+p)*b+.5*g,w=p*m-p*b;for(let D=0;D!==a;++D)s[D]=f*o[u+D]+x*o[l+D]+M*o[c+D]+w*o[h+D];return s}},Uu=class extends jr{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=(n-e)/(r-e),h=1-u;for(let d=0;d!==a;++d)s[d]=o[l+d]*h+o[c+d]*u;return s}},Bu=class extends jr{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t){return this.copySampleValue_(t-1)}},Vu=class extends jr{interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=this.settings||this.DefaultSettings_,h=u.inTangents,d=u.outTangents;if(!h||!d){let b=(n-e)/(r-e),m=1-b;for(let f=0;f!==a;++f)s[f]=o[l+f]*m+o[c+f]*b;return s}let p=a*2,g=t-1;for(let b=0;b!==a;++b){let m=o[l+b],f=o[c+b],x=g*p+b*2,M=d[x],w=d[x+1],D=t*p+b*2,E=h[D],R=h[D+1],_=(n-e)/(r-e),C,N,T,U,$;for(let K=0;K<8;K++){C=_*_,N=C*_,T=1-_,U=T*T,$=U*T;let H=$*e+3*U*_*M+3*T*C*E+N*r-n;if(Math.abs(H)<1e-10)break;let k=3*U*(M-e)+6*T*_*(E-M)+3*C*(r-E);if(Math.abs(k)<1e-10)break;_=_-H/k,_=Math.max(0,Math.min(1,_))}s[b]=$*m+3*U*_*w+3*T*C*R+N*f}return s}},Zn=class{constructor(t,e,n,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=lu(e,this.TimeBufferType),this.values=lu(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:lu(t.times,Array),values:lu(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(n.interpolation=r)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Bu(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Uu(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ku(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Vu(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.settings=this.settings),e}setInterpolation(t){let e;switch(t){case qa:e=this.InterpolantFactoryMethodDiscrete;break;case Eu:e=this.InterpolantFactoryMethodLinear;break;case hu:e=this.InterpolantFactoryMethodSmooth;break;case op:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Le("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qa;case this.InterpolantFactoryMethodLinear:return Eu;case this.InterpolantFactoryMethodSmooth:return hu;case this.InterpolantFactoryMethodBezier:return op}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]*=t}return this}trim(t,e){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Ue("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,r=this.values,s=n.length;s===0&&(Ue("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){Ue("KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){Ue("KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(r!==void 0&&Yw(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){Ue("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===hu,s=t.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=t[a],u=t[a+1];if(l!==u&&(a!==1||l!==t[0]))if(r)c=!0;else{let h=a*n,d=h-n,p=h+n;for(let g=0;g!==n;++g){let b=e[h+g];if(b!==e[d+g]||b!==e[p+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let h=a*n,d=o*n;for(let p=0;p!==n;++p)e[d+p]=e[h+p]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,r=new n(this.name,t,e);return r.createInterpolant=this.createInterpolant,r}};Zn.prototype.ValueTypeName="";Zn.prototype.TimeBufferType=Float32Array;Zn.prototype.ValueBufferType=Float32Array;Zn.prototype.DefaultInterpolation=Eu;var Xr=class extends Zn{constructor(t,e,n){super(t,e,n)}};Xr.prototype.ValueTypeName="bool";Xr.prototype.ValueBufferType=Array;Xr.prototype.DefaultInterpolation=qa;Xr.prototype.InterpolantFactoryMethodLinear=void 0;Xr.prototype.InterpolantFactoryMethodSmooth=void 0;var zu=class extends Zn{constructor(t,e,n,r){super(t,e,n,r)}};zu.prototype.ValueTypeName="color";var Gu=class extends Zn{constructor(t,e,n,r){super(t,e,n,r)}};Gu.prototype.ValueTypeName="number";var Hu=class extends jr{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(r-e),l=t*a;for(let u=l+a;l!==u;l+=4)Bi.slerpFlat(s,0,o,l-a,o,l,c);return s}},oc=class extends Zn{constructor(t,e,n,r){super(t,e,n,r)}InterpolantFactoryMethodLinear(t){return new Hu(this.times,this.values,this.getValueSize(),t)}};oc.prototype.ValueTypeName="quaternion";oc.prototype.InterpolantFactoryMethodSmooth=void 0;var $r=class extends Zn{constructor(t,e,n){super(t,e,n)}};$r.prototype.ValueTypeName="string";$r.prototype.ValueBufferType=Array;$r.prototype.DefaultInterpolation=qa;$r.prototype.InterpolantFactoryMethodLinear=void 0;$r.prototype.InterpolantFactoryMethodSmooth=void 0;var Wu=class extends Zn{constructor(t,e,n,r){super(t,e,n,r)}};Wu.prototype.ValueTypeName="vector";var fu={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&($_(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!$_(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function $_(i){try{let t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var ju=class{constructor(t,e,n){let r=this,s=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){let p=l[h],g=l[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},L0=new ju,kp=(()=>{class i{constructor(e){this.manager=e!==void 0?e:L0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,n){let r=this;return new Promise(function(s,o){r.load(e,s,n,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}return i.DEFAULT_MATERIAL_NAME="__DEFAULT",i})();var Eo=new WeakMap,Xu=class extends kp{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=this,o=fu.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0);else{let h=Eo.get(o);h===void 0&&(h=[],Eo.set(o,h)),h.push({onLoad:e,onError:r})}return o}let a=Ro("img");function c(){u(),e&&e(this);let h=Eo.get(this)||[];for(let d=0;d<h.length;d++){let p=h[d];p.onLoad&&p.onLoad(this)}Eo.delete(this),s.manager.itemEnd(t)}function l(h){u(),r&&r(h),fu.remove(`image:${t}`);let d=Eo.get(this)||[];for(let p=0;p<d.length;p++){let g=d[p];g.onError&&g.onError(h)}Eo.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),fu.add(`image:${t}`,a),s.manager.itemStart(t),a.src=t,a}};var ac=class extends kp{constructor(t){super(t)}load(t,e,n,r){let s=new Hi,o=new Xu(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,r),s}},cc=class extends Kr{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ut(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};var rp=new $t,q_=new z,Y_=new z,hp=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new vt(512,512),this.mapType=Nn,this.map=null,this.mapPass=null,this.matrix=new $t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Lo,this._frameExtents=new vt(1,1),this._viewportCount=1,this._viewports=[new Ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;q_.setFromMatrixPosition(t.matrixWorld),e.position.copy(q_),Y_.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Y_),e.updateMatrixWorld(),rp.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rp,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===Do||e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(rp)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},uu=new z,du=new Bi,Fi=new z,lc=class extends Kr{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(uu,du,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(uu,du,Fi.set(1,1,1)).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorld.decompose(uu,du,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(uu,du,Fi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Vr=new z,Z_=new vt,J_=new vt,un=class extends lc{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Au*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Nf*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Au*2*Math.atan(Math.tan(Nf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Vr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Vr.x,Vr.y).multiplyScalar(-t/Vr.z),Vr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vr.x,Vr.y).multiplyScalar(-t/Vr.z)}getViewSize(t,e){return this.getViewBounds(t,Z_,J_),e.subVectors(J_,Z_)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Nf*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,e-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var fp=class extends hp{constructor(){super(new un(90,1,.5,500)),this.isPointLightShadow=!0}},uc=class extends cc{constructor(t,e,n=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new fp}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},dc=class extends lc{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-t,o=n+t,a=r+e,c=r-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var hc=class extends cc{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Co=-90,Ao=1,$u=class extends Kr{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new un(Co,Ao,t,e);r.layers=this.layers,this.add(r);let s=new un(Co,Ao,t,e);s.layers=this.layers,this.add(s);let o=new un(Co,Ao,t,e);o.layers=this.layers,this.add(o);let a=new un(Co,Ao,t,e);a.layers=this.layers,this.add(a);let c=new un(Co,Ao,t,e);c.layers=this.layers,this.add(c);let l=new un(Co,Ao,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,c]=e;for(let l of e)this.remove(l);if(t===vi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Do)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=b,t.setRenderTarget(n,5,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(h,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},qu=class extends un{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},fc=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=_M.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function _M(){this._document.hidden===!1&&this.reset()}var Up="\\[\\]\\.:\\/",yM=new RegExp("["+Up+"]","g"),Bp="[^"+Up+"]",bM="[^"+Up.replace("\\.","")+"]",xM=/((?:WC+[\/:])*)/.source.replace("WC",Bp),SM=/(WCOD+)?/.source.replace("WCOD",bM),wM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Bp),MM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Bp),EM=new RegExp("^"+xM+SM+wM+MM+"$"),CM=["material","materials","bones","map"],pp=class{constructor(t,e,n){let r=n||Xt.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Xt=(()=>{class i{constructor(e,n,r){this.path=n,this.parsedPath=r||i.parseTrackName(n),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,r){return e&&e.isAnimationObjectGroup?new i.Composite(e,n,r):new i(e,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(yM,"")}static parseTrackName(e){let n=EM.exec(e);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let r={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=r.nodeName&&r.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=r.nodeName.substring(s+1);CM.indexOf(o)!==-1&&(r.nodeName=r.nodeName.substring(0,s),r.objectName=o)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return r}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){let r=e.skeleton.getBoneByName(n);if(r!==void 0)return r}if(e.children){let r=function(o){for(let a=0;a<o.length;a++){let c=o[a];if(c.name===n||c.uuid===n)return c;let l=r(c.children);if(l)return l}return null},s=r(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)e[n++]=r[s]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=e[n++]}_setValue_array_setNeedsUpdate(e,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node,n=this.parsedPath,r=n.objectName,s=n.propertyName,o=n.propertyIndex;if(e||(e=i.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Le("PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let u=n.objectIndex;switch(r){case"materials":if(!e.material){Ue("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ue("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ue("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===u){u=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ue("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ue("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[r]===void 0){Ue("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[r]}if(u!==void 0){if(e[u]===void 0){Ue("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}let a=e[s];if(a===void 0){let u=n.nodeName;Ue("PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",e);return}let c=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?c=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ue("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ue("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[o]!==void 0&&(o=e.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return i.Composite=pp,i})();Xt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Xt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Xt.prototype.GetterByBindingType=[Xt.prototype._getValue_direct,Xt.prototype._getValue_array,Xt.prototype._getValue_arrayElement,Xt.prototype._getValue_toArray];Xt.prototype.SetterByBindingTypeAndVersioning=[[Xt.prototype._setValue_direct,Xt.prototype._setValue_direct_setNeedsUpdate,Xt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Xt.prototype._setValue_array,Xt.prototype._setValue_array_setNeedsUpdate,Xt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Xt.prototype._setValue_arrayElement,Xt.prototype._setValue_arrayElement_setNeedsUpdate,Xt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Xt.prototype._setValue_fromArray,Xt.prototype._setValue_fromArray_setNeedsUpdate,Xt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var IL=new Float32Array(1);var mp=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,r){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,r){let s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=r,this}};function Vp(i,t,e,n){let r=AM(n);switch(e){case Ip:return i*t;case Op:return i*t/r.components*r.byteLength;case td:return i*t/r.components*r.byteLength;case Jr:return i*t*2/r.components*r.byteLength;case nd:return i*t*2/r.components*r.byteLength;case Pp:return i*t*3/r.components*r.byteLength;case ci:return i*t*4/r.components*r.byteLength;case id:return i*t*4/r.components*r.byteLength;case _c:case yc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case bc:case xc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case sd:case ad:return Math.max(i,16)*Math.max(t,8)/4;case rd:case od:return Math.max(i,8)*Math.max(t,8)/2;case cd:case ld:case dd:case hd:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ud:case Sc:case fd:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case pd:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case md:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case gd:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case vd:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case _d:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case yd:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case bd:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case xd:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Sd:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case wd:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Md:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ed:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Cd:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ad:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Td:case Dd:case Rd:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Id:case Pd:return Math.ceil(i/4)*Math.ceil(t/4)*8;case wc:case Od:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function AM(i){switch(i){case Nn:case Ap:return{byteLength:1,components:1};case Vo:case Tp:case Gi:return{byteLength:2,components:1};case Qu:case ed:return{byteLength:2,components:4};case bi:case Ku:case xi:return{byteLength:4,components:1};case Dp:case Rp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"184"}}));typeof window<"u"&&(window.__THREE__?Le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="184");function sy(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function DM(i){let t=new WeakMap;function e(a,c){let l=a.array,u=a.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),a.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){let u=c.array,h=c.updateRanges;if(i.bindBuffer(l,a),h.length===0)i.bufferSubData(l,0,u);else{h.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<h.length;p++){let g=h[d],b=h[p];b.start<=g.start+g.count+1?g.count=Math.max(g.count,b.start+b.count-g.start):(++d,h[d]=b)}h.length=d+1;for(let p=0,g=h.length;p<g;p++){let b=h[p];i.bufferSubData(l,b.start*u.BYTES_PER_ELEMENT,u,b.start,b.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var RM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,IM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,PM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,OM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,FM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,NM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,LM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,kM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,UM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,BM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,VM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,GM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,HM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,WM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,jM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,XM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$M=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,YM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ZM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,JM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,KM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,QM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,eE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,tE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,nE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,iE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,oE="gl_FragColor = linearToOutputTexel( gl_FragColor );",aE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,lE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,uE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,dE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,_E=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,SE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,wE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ME=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,EE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,CE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,AE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,TE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,DE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,RE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,IE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,PE=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,OE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,FE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,NE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,LE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,UE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,BE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,VE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,GE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,HE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,WE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,XE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,$E=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,YE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ZE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,JE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,KE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,QE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,eC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sC=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,oC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,aC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hC=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,fC=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,pC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,mC=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,gC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vC=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,_C=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yC=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,bC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,SC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wC=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,MC=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,EC=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,CC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,AC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,TC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,DC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,RC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,IC=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OC=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NC=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,kC=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,UC=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,BC=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,VC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GC=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,HC=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,WC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,jC=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XC=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$C=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qC=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,YC=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZC=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,JC=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,KC=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,QC=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,tA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,sA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,oA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ke={alphahash_fragment:RM,alphahash_pars_fragment:IM,alphamap_fragment:PM,alphamap_pars_fragment:OM,alphatest_fragment:FM,alphatest_pars_fragment:NM,aomap_fragment:LM,aomap_pars_fragment:kM,batching_pars_vertex:UM,batching_vertex:BM,begin_vertex:VM,beginnormal_vertex:zM,bsdfs:GM,iridescence_fragment:HM,bumpmap_pars_fragment:WM,clipping_planes_fragment:jM,clipping_planes_pars_fragment:XM,clipping_planes_pars_vertex:$M,clipping_planes_vertex:qM,color_fragment:YM,color_pars_fragment:ZM,color_pars_vertex:JM,color_vertex:KM,common:QM,cube_uv_reflection_fragment:eE,defaultnormal_vertex:tE,displacementmap_pars_vertex:nE,displacementmap_vertex:iE,emissivemap_fragment:rE,emissivemap_pars_fragment:sE,colorspace_fragment:oE,colorspace_pars_fragment:aE,envmap_fragment:cE,envmap_common_pars_fragment:lE,envmap_pars_fragment:uE,envmap_pars_vertex:dE,envmap_physical_pars_fragment:SE,envmap_vertex:hE,fog_vertex:fE,fog_pars_vertex:pE,fog_fragment:mE,fog_pars_fragment:gE,gradientmap_pars_fragment:vE,lightmap_pars_fragment:_E,lights_lambert_fragment:yE,lights_lambert_pars_fragment:bE,lights_pars_begin:xE,lights_toon_fragment:wE,lights_toon_pars_fragment:ME,lights_phong_fragment:EE,lights_phong_pars_fragment:CE,lights_physical_fragment:AE,lights_physical_pars_fragment:TE,lights_fragment_begin:DE,lights_fragment_maps:RE,lights_fragment_end:IE,lightprobes_pars_fragment:PE,logdepthbuf_fragment:OE,logdepthbuf_pars_fragment:FE,logdepthbuf_pars_vertex:NE,logdepthbuf_vertex:LE,map_fragment:kE,map_pars_fragment:UE,map_particle_fragment:BE,map_particle_pars_fragment:VE,metalnessmap_fragment:zE,metalnessmap_pars_fragment:GE,morphinstance_vertex:HE,morphcolor_vertex:WE,morphnormal_vertex:jE,morphtarget_pars_vertex:XE,morphtarget_vertex:$E,normal_fragment_begin:qE,normal_fragment_maps:YE,normal_pars_fragment:ZE,normal_pars_vertex:JE,normal_vertex:KE,normalmap_pars_fragment:QE,clearcoat_normal_fragment_begin:eC,clearcoat_normal_fragment_maps:tC,clearcoat_pars_fragment:nC,iridescence_pars_fragment:iC,opaque_fragment:rC,packing:sC,premultiplied_alpha_fragment:oC,project_vertex:aC,dithering_fragment:cC,dithering_pars_fragment:lC,roughnessmap_fragment:uC,roughnessmap_pars_fragment:dC,shadowmap_pars_fragment:hC,shadowmap_pars_vertex:fC,shadowmap_vertex:pC,shadowmask_pars_fragment:mC,skinbase_vertex:gC,skinning_pars_vertex:vC,skinning_vertex:_C,skinnormal_vertex:yC,specularmap_fragment:bC,specularmap_pars_fragment:xC,tonemapping_fragment:SC,tonemapping_pars_fragment:wC,transmission_fragment:MC,transmission_pars_fragment:EC,uv_pars_fragment:CC,uv_pars_vertex:AC,uv_vertex:TC,worldpos_vertex:DC,background_vert:RC,background_frag:IC,backgroundCube_vert:PC,backgroundCube_frag:OC,cube_vert:FC,cube_frag:NC,depth_vert:LC,depth_frag:kC,distance_vert:UC,distance_frag:BC,equirect_vert:VC,equirect_frag:zC,linedashed_vert:GC,linedashed_frag:HC,meshbasic_vert:WC,meshbasic_frag:jC,meshlambert_vert:XC,meshlambert_frag:$C,meshmatcap_vert:qC,meshmatcap_frag:YC,meshnormal_vert:ZC,meshnormal_frag:JC,meshphong_vert:KC,meshphong_frag:QC,meshphysical_vert:eA,meshphysical_frag:tA,meshtoon_vert:nA,meshtoon_frag:iA,points_vert:rA,points_frag:sA,shadow_vert:oA,shadow_frag:aA,sprite_vert:cA,sprite_frag:lA},me={common:{diffuse:{value:new ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new z},probesMax:{value:new z},probesResolution:{value:new z}},points:{diffuse:{value:new ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new ut(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},ji={basic:{uniforms:Sn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:Sn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new ut(0)},envMapIntensity:{value:1}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:Sn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new ut(0)},specular:{value:new ut(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:Sn([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:Sn([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new ut(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:Sn([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:Sn([me.points,me.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:Sn([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:Sn([me.common,me.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:Sn([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:Sn([me.sprite,me.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distance:{uniforms:Sn([me.common,me.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distance_vert,fragmentShader:Ke.distance_frag},shadow:{uniforms:Sn([me.lights,me.fog,{color:{value:new ut(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};ji.physical={uniforms:Sn([ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new ut(0)},specularColor:{value:new ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};var kd={r:0,b:0,g:0},uA=new $t,oy=new We;oy.set(-1,0,0,0,1,0,0,0,1);function dA(i,t,e,n,r,s){let o=new ut(0),a=r===!0?0:1,c,l,u=null,h=0,d=null;function p(x){let M=x.isScene===!0?x.background:null;if(M&&M.isTexture){let w=x.backgroundBlurriness>0;M=t.get(M,w)}return M}function g(x){let M=!1,w=p(x);w===null?m(o,a):w&&w.isColor&&(m(w,1),M=!0);let D=i.xr.getEnvironmentBlendMode();D==="additive"?e.buffers.color.setClear(0,0,0,1,s):D==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(i.autoClear||M)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function b(x,M){let w=p(M);w&&(w.isCubeTexture||w.mapping===gc)?(l===void 0&&(l=new Tn(new ko(1,1,1),new Yn({name:"BackgroundCubeMaterial",uniforms:Cs(ji.backgroundCube.uniforms),vertexShader:ji.backgroundCube.vertexShader,fragmentShader:ji.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(D,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=w,l.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(uA.makeRotationFromEuler(M.backgroundRotation)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(oy),l.material.toneMapped=ct.getTransfer(w.colorSpace)!==wt,(u!==w||h!==w.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=w,h=w.version,d=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new Tn(new rc(2,2),new Yn({name:"BackgroundMaterial",uniforms:Cs(ji.background.uniforms),vertexShader:ji.background.vertexShader,fragmentShader:ji.background.fragmentShader,side:cr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=ct.getTransfer(w.colorSpace)!==wt,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(u!==w||h!==w.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=w,h=w.version,d=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function m(x,M){x.getRGB(kd,Lp(i)),e.buffers.color.setClear(kd.r,kd.g,kd.b,M,s)}function f(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,M=1){o.set(x),a=M,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,m(o,a)},render:g,addToRenderList:b,dispose:f}}function hA(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null),s=r,o=!1;function a(T,U,$,K,F){let H=!1,k=h(T,K,$,U);s!==k&&(s=k,l(s.object)),H=p(T,K,$,F),H&&g(T,K,$,F),F!==null&&t.update(F,i.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,w(T,U,$,K),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function c(){return i.createVertexArray()}function l(T){return i.bindVertexArray(T)}function u(T){return i.deleteVertexArray(T)}function h(T,U,$,K){let F=K.wireframe===!0,H=n[U.id];H===void 0&&(H={},n[U.id]=H);let k=T.isInstancedMesh===!0?T.id:0,ne=H[k];ne===void 0&&(ne={},H[k]=ne);let se=ne[$.id];se===void 0&&(se={},ne[$.id]=se);let ge=se[F];return ge===void 0&&(ge=d(c()),se[F]=ge),ge}function d(T){let U=[],$=[],K=[];for(let F=0;F<e;F++)U[F]=0,$[F]=0,K[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:$,attributeDivisors:K,object:T,attributes:{},index:null}}function p(T,U,$,K){let F=s.attributes,H=U.attributes,k=0,ne=$.getAttributes();for(let se in ne)if(ne[se].location>=0){let Ae=F[se],Ie=H[se];if(Ie===void 0&&(se==="instanceMatrix"&&T.instanceMatrix&&(Ie=T.instanceMatrix),se==="instanceColor"&&T.instanceColor&&(Ie=T.instanceColor)),Ae===void 0||Ae.attribute!==Ie||Ie&&Ae.data!==Ie.data)return!0;k++}return s.attributesNum!==k||s.index!==K}function g(T,U,$,K){let F={},H=U.attributes,k=0,ne=$.getAttributes();for(let se in ne)if(ne[se].location>=0){let Ae=H[se];Ae===void 0&&(se==="instanceMatrix"&&T.instanceMatrix&&(Ae=T.instanceMatrix),se==="instanceColor"&&T.instanceColor&&(Ae=T.instanceColor));let Ie={};Ie.attribute=Ae,Ae&&Ae.data&&(Ie.data=Ae.data),F[se]=Ie,k++}s.attributes=F,s.attributesNum=k,s.index=K}function b(){let T=s.newAttributes;for(let U=0,$=T.length;U<$;U++)T[U]=0}function m(T){f(T,0)}function f(T,U){let $=s.newAttributes,K=s.enabledAttributes,F=s.attributeDivisors;$[T]=1,K[T]===0&&(i.enableVertexAttribArray(T),K[T]=1),F[T]!==U&&(i.vertexAttribDivisor(T,U),F[T]=U)}function x(){let T=s.newAttributes,U=s.enabledAttributes;for(let $=0,K=U.length;$<K;$++)U[$]!==T[$]&&(i.disableVertexAttribArray($),U[$]=0)}function M(T,U,$,K,F,H,k){k===!0?i.vertexAttribIPointer(T,U,$,F,H):i.vertexAttribPointer(T,U,$,K,F,H)}function w(T,U,$,K){b();let F=K.attributes,H=$.getAttributes(),k=U.defaultAttributeValues;for(let ne in H){let se=H[ne];if(se.location>=0){let ge=F[ne];if(ge===void 0&&(ne==="instanceMatrix"&&T.instanceMatrix&&(ge=T.instanceMatrix),ne==="instanceColor"&&T.instanceColor&&(ge=T.instanceColor)),ge!==void 0){let Ae=ge.normalized,Ie=ge.itemSize,dt=t.get(ge);if(dt===void 0)continue;let Et=dt.buffer,Ye=dt.type,Q=dt.bytesPerElement,ye=Ye===i.INT||Ye===i.UNSIGNED_INT||ge.gpuType===Ku;if(ge.isInterleavedBufferAttribute){let ue=ge.data,ke=ue.stride,je=ge.offset;if(ue.isInstancedInterleavedBuffer){for(let Be=0;Be<se.locationSize;Be++)f(se.location+Be,ue.meshPerAttribute);T.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Be=0;Be<se.locationSize;Be++)m(se.location+Be);i.bindBuffer(i.ARRAY_BUFFER,Et);for(let Be=0;Be<se.locationSize;Be++)M(se.location+Be,Ie/se.locationSize,Ye,Ae,ke*Q,(je+Ie/se.locationSize*Be)*Q,ye)}else{if(ge.isInstancedBufferAttribute){for(let ue=0;ue<se.locationSize;ue++)f(se.location+ue,ge.meshPerAttribute);T.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let ue=0;ue<se.locationSize;ue++)m(se.location+ue);i.bindBuffer(i.ARRAY_BUFFER,Et);for(let ue=0;ue<se.locationSize;ue++)M(se.location+ue,Ie/se.locationSize,Ye,Ae,Ie*Q,Ie/se.locationSize*ue*Q,ye)}}else if(k!==void 0){let Ae=k[ne];if(Ae!==void 0)switch(Ae.length){case 2:i.vertexAttrib2fv(se.location,Ae);break;case 3:i.vertexAttrib3fv(se.location,Ae);break;case 4:i.vertexAttrib4fv(se.location,Ae);break;default:i.vertexAttrib1fv(se.location,Ae)}}}}x()}function D(){C();for(let T in n){let U=n[T];for(let $ in U){let K=U[$];for(let F in K){let H=K[F];for(let k in H)u(H[k].object),delete H[k];delete K[F]}}delete n[T]}}function E(T){if(n[T.id]===void 0)return;let U=n[T.id];for(let $ in U){let K=U[$];for(let F in K){let H=K[F];for(let k in H)u(H[k].object),delete H[k];delete K[F]}}delete n[T.id]}function R(T){for(let U in n){let $=n[U];for(let K in $){let F=$[K];if(F[T.id]===void 0)continue;let H=F[T.id];for(let k in H)u(H[k].object),delete H[k];delete F[T.id]}}}function _(T){for(let U in n){let $=n[U],K=T.isInstancedMesh===!0?T.id:0,F=$[K];if(F!==void 0){for(let H in F){let k=F[H];for(let ne in k)u(k[ne].object),delete k[ne];delete F[H]}delete $[K],Object.keys($).length===0&&delete n[U]}}}function C(){N(),o=!0,s!==r&&(s=r,l(s.object))}function N(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:C,resetDefaultState:N,dispose:D,releaseStatesOfGeometry:E,releaseStatesOfObject:_,releaseStatesOfProgram:R,initAttributes:b,enableAttribute:m,disableUnusedAttributes:x}}function fA(i,t,e){let n;function r(c){n=c}function s(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function o(c,l,u){u!==0&&(i.drawArraysInstanced(n,c,l,u),e.update(l,n,u))}function a(c,l,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let d=0;for(let p=0;p<u;p++)d+=l[p];e.update(d,n,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function pA(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==ci&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let _=R===Gi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Nn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==xi&&!_)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",u=c(l);u!==l&&(Le("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let h=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&d===!1&&Le("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:b,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:w,maxSamples:D,samples:E}}function mA(i){let t=this,e=null,n=0,r=!1,s=!1,o=new Ni,a=new We,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let p=h.length!==0||d||n!==0||r;return r=d,n=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,p){let g=h.clippingPlanes,b=h.clipIntersection,m=h.clipShadows,f=i.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{let x=s?0:n,M=x*4,w=f.clippingState||null;c.value=w,w=u(g,d,M,p);for(let D=0;D!==M;++D)w[D]=e[D];f.clippingState=w,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,p,g){let b=h!==null?h.length:0,m=null;if(b!==0){if(m=c.value,g!==!0||m===null){let f=p+b*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<f)&&(m=new Float32Array(f));for(let M=0,w=p;M!==b;++M,w+=4)o.copy(h[M]).applyMatrix4(x,a),o.normal.toArray(m,w),m[w+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,m}}var Qr=4,k0=[.125,.215,.35,.446,.526,.582],As=20,gA=256,Ec=new dc,U0=new ut,zp=null,Gp=0,Hp=0,Wp=!1,vA=new z,Bd=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,r=100,s={}){let{size:o=256,position:a=vA}=s;zp=this._renderer.getRenderTarget(),Gp=this._renderer.getActiveCubeFace(),Hp=this._renderer.getActiveMipmapLevel(),Wp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,r,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=z0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=V0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(zp,Gp,Hp),this._renderer.xr.enabled=Wp,t.scissorTest=!1,Go(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===qr||t.mapping===Es?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),zp=this._renderer.getRenderTarget(),Gp=this._renderer.getActiveCubeFace(),Hp=this._renderer.getActiveMipmapLevel(),Wp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:Gi,format:ci,colorSpace:Ya,depthBuffer:!1},r=B0(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=B0(t,e,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=_A(s)),this._blurMaterial=bA(s,t,e),this._ggxMaterial=yA(s,t,e)}return r}_compileMaterial(t){let e=new Tn(new _i,t);this._renderer.compile(e,Ec)}_sceneToCubeUV(t,e,n,r,s){let c=new un(90,1,e,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(U0),h.toneMapping=yi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Tn(new ko,new Ms({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1})));let b=this._backgroundBox,m=b.material,f=!1,x=t.background;x?x.isColor&&(m.color.copy(x),t.background=null,f=!0):(m.color.copy(U0),f=!0);for(let M=0;M<6;M++){let w=M%3;w===0?(c.up.set(0,l[M],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[M],s.y,s.z)):w===1?(c.up.set(0,0,l[M]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[M],s.z)):(c.up.set(0,l[M],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[M]));let D=this._cubeSize;Go(r,w*D,M>2?D:0,D,D),h.setRenderTarget(r),f&&h.render(b,c),h.render(t,c)}h.toneMapping=p,h.autoClear=d,t.background=x}_textureToCubeUV(t,e){let n=this._renderer,r=t.mapping===qr||t.mapping===Es;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=z0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=V0());let s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=t;let c=this._cubeSize;Go(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Ec)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){let r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let c=o.uniforms,l=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),h=Math.sqrt(l*l-u*u),d=0+l*1.25,p=h*d,{_lodMax:g}=this,b=this._sizeLods[n],m=3*b*(n>g-Qr?n-g+Qr:0),f=4*(this._cubeSize-b);c.envMap.value=t.texture,c.roughness.value=p,c.mipInt.value=g-e,Go(s,m,f,3*b,2*b),r.setRenderTarget(s),r.render(a,Ec),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=g-n,Go(t,m,f,3*b,2*b),r.setRenderTarget(t),r.render(a,Ec)}_blur(t,e,n,r,s){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Ue("blur direction must be either latitudinal or longitudinal!");let u=3,h=this._lodMeshes[r];h.material=l;let d=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*As-1),b=s/g,m=isFinite(s)?1+Math.floor(u*b):As;m>As&&Le(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${As}`);let f=[],x=0;for(let R=0;R<As;++R){let _=R/b,C=Math.exp(-_*_/2);f.push(C),R===0?x+=C:R<m&&(x+=2*C)}for(let R=0;R<f.length;R++)f[R]=f[R]/x;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-n;let w=this._sizeLods[r],D=3*w*(r>M-Qr?r-M+Qr:0),E=4*(this._cubeSize-w);Go(e,D,E,3*w,2*w),c.setRenderTarget(e),c.render(h,Ec)}};function _A(i){let t=[],e=[],n=[],r=i,s=i-Qr+1+k0.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let c=1/a;o>i-Qr?c=k0[o-i+Qr-1]:o===0&&(c=0),e.push(c);let l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,b=3,m=2,f=1,x=new Float32Array(b*g*p),M=new Float32Array(m*g*p),w=new Float32Array(f*g*p);for(let E=0;E<p;E++){let R=E%3*2/3-1,_=E>2?0:-1,C=[R,_,0,R+2/3,_,0,R+2/3,_+1,0,R,_,0,R+2/3,_+1,0,R,_+1,0];x.set(C,b*g*E),M.set(d,m*g*E);let N=[E,E,E,E,E,E];w.set(N,f*g*E)}let D=new _i;D.setAttribute("position",new $n(x,b)),D.setAttribute("uv",new $n(M,m)),D.setAttribute("faceIndex",new $n(w,f)),n.push(new Tn(D,null)),r>Qr&&r--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function B0(i,t,e){let n=new qn(i,t,e);return n.texture.mapping=gc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Go(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function yA(i,t,e){return new Yn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:gA,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Gd(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function bA(i,t,e){let n=new Float32Array(As),r=new z(0,1,0);return new Yn({name:"SphericalGaussianBlur",defines:{n:As,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Gd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function V0(){return new Yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function z0(){return new Yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Gd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var Vd=class extends qn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new nc(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ko(5,5,5),s=new Yn({name:"CubemapFromEquirect",uniforms:Cs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:hn,blending:zi});s.uniforms.tEquirect.value=e;let o=new Tn(r,s),a=e.minFilter;return e.minFilter===Yr&&(e.minFilter=dn),new $u(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}};function xA(i){let t=new WeakMap,e=new WeakMap,n=null;function r(d,p=!1){return d==null?null:p?o(d):s(d)}function s(d){if(d&&d.isTexture){let p=d.mapping;if(p===Yu||p===Zu)if(t.has(d)){let g=t.get(d).texture;return a(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let b=new Vd(g.height);return b.fromEquirectangularTexture(i,d),t.set(d,b),d.addEventListener("dispose",l),a(b.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){let p=d.mapping,g=p===Yu||p===Zu,b=p===qr||p===Es;if(g||b){let m=e.get(d),f=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==f)return n===null&&(n=new Bd(i)),m=g?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{let x=d.image;return g&&x&&x.height>0||b&&x&&c(x)?(n===null&&(n=new Bd(i)),m=g?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function a(d,p){return p===Yu?d.mapping=qr:p===Zu&&(d.mapping=Es),d}function c(d){let p=0,g=6;for(let b=0;b<g;b++)d[b]!==void 0&&p++;return p===g}function l(d){let p=d.target;p.removeEventListener("dispose",l);let g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function u(d){let p=d.target;p.removeEventListener("dispose",u);let g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function h(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:h}}function SA(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let r=i.getExtension(n);return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let r=e(n);return r===null&&Cu("WebGLRenderer: "+n+" extension not supported."),r}}}function wA(i,t,e,n){let r={},s=new WeakMap;function o(h){let d=h.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete r[d.id];let p=s.get(d);p&&(t.remove(p),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,e.memory.geometries++),d}function c(h){let d=h.attributes;for(let p in d)t.update(d[p],i.ARRAY_BUFFER)}function l(h){let d=[],p=h.index,g=h.attributes.position,b=0;if(g===void 0)return;if(p!==null){let x=p.array;b=p.version;for(let M=0,w=x.length;M<w;M+=3){let D=x[M+0],E=x[M+1],R=x[M+2];d.push(D,E,E,R,R,D)}}else{let x=g.array;b=g.version;for(let M=0,w=x.length/3-1;M<w;M+=3){let D=M+0,E=M+1,R=M+2;d.push(D,E,E,R,R,D)}}let m=new(g.count>=65535?tc:ec)(d,1);m.version=b;let f=s.get(h);f&&t.remove(f),s.set(h,m)}function u(h){let d=s.get(h);if(d){let p=h.index;p!==null&&d.version<p.version&&l(h)}else l(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function MA(i,t,e){let n;function r(h){n=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function c(h,d){i.drawElements(n,d,s,h*o),e.update(d,n,1)}function l(h,d,p){p!==0&&(i.drawElementsInstanced(n,d,s,h*o,p),e.update(d,n,p))}function u(h,d,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,h,0,p);let b=0;for(let m=0;m<p;m++)b+=d[m];e.update(b,n,1)}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function EA(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:Ue("WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function CA(i,t,e){let n=new WeakMap,r=new Ht;function s(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(a);if(d===void 0||d.count!==h){let N=function(){_.dispose(),n.delete(a),a.removeEventListener("dispose",N)};var p=N;d!==void 0&&d.texture.dispose();let g=a.morphAttributes.position!==void 0,b=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],w=0;g===!0&&(w=1),b===!0&&(w=2),m===!0&&(w=3);let D=a.attributes.position.count*w,E=1;D>t.maxTextureSize&&(E=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);let R=new Float32Array(D*E*4*h),_=new Ja(R,D,E,h);_.type=xi,_.needsUpdate=!0;let C=w*4;for(let T=0;T<h;T++){let U=f[T],$=x[T],K=M[T],F=D*E*4*T;for(let H=0;H<U.count;H++){let k=H*C;g===!0&&(r.fromBufferAttribute(U,H),R[F+k+0]=r.x,R[F+k+1]=r.y,R[F+k+2]=r.z,R[F+k+3]=0),b===!0&&(r.fromBufferAttribute($,H),R[F+k+4]=r.x,R[F+k+5]=r.y,R[F+k+6]=r.z,R[F+k+7]=0),m===!0&&(r.fromBufferAttribute(K,H),R[F+k+8]=r.x,R[F+k+9]=r.y,R[F+k+10]=r.z,R[F+k+11]=K.itemSize===4?r.w:1)}}d={count:h,texture:_,size:new vt(D,E)},n.set(a,d),a.addEventListener("dispose",N)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];let b=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",b),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function AA(i,t,e,n,r){let s=new WeakMap;function o(l){let u=r.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==u&&(t.update(d),s.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==u&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){let p=l.skeleton;s.get(p)!==u&&(p.update(),s.set(p,u))}return d}function a(){s=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}var TA={[bp]:"LINEAR_TONE_MAPPING",[xp]:"REINHARD_TONE_MAPPING",[Sp]:"CINEON_TONE_MAPPING",[wp]:"ACES_FILMIC_TONE_MAPPING",[Ep]:"AGX_TONE_MAPPING",[Cp]:"NEUTRAL_TONE_MAPPING",[Mp]:"CUSTOM_TONE_MAPPING"};function DA(i,t,e,n,r){let s=new qn(t,e,{type:i,depthBuffer:n,stencilBuffer:r,depthTexture:n?new lr(t,e):void 0}),o=new qn(t,e,{type:Gi,depthBuffer:!1,stencilBuffer:!1}),a=new _i;a.setAttribute("position",new An([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new An([0,2,0,0,2,0],2));let c=new Fu({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),l=new Tn(a,c),u=new dc(-1,1,1,-1,0,1),h=null,d=null,p=!1,g,b=null,m=[],f=!1;this.setSize=function(x,M){s.setSize(x,M),o.setSize(x,M);for(let w=0;w<m.length;w++){let D=m[w];D.setSize&&D.setSize(x,M)}},this.setEffects=function(x){m=x,f=m.length>0&&m[0].isRenderPass===!0;let M=s.width,w=s.height;for(let D=0;D<m.length;D++){let E=m[D];E.setSize&&E.setSize(M,w)}},this.begin=function(x,M){if(p||x.toneMapping===yi&&m.length===0)return!1;if(b=M,M!==null){let w=M.width,D=M.height;(s.width!==w||s.height!==D)&&this.setSize(w,D)}return f===!1&&x.setRenderTarget(s),g=x.toneMapping,x.toneMapping=yi,!0},this.hasRenderPass=function(){return f},this.end=function(x,M){x.toneMapping=g,p=!0;let w=s,D=o;for(let E=0;E<m.length;E++){let R=m[E];if(R.enabled!==!1&&(R.render(x,D,w,M),R.needsSwap!==!1)){let _=w;w=D,D=_}}if(h!==x.outputColorSpace||d!==x.toneMapping){h=x.outputColorSpace,d=x.toneMapping,c.defines={},ct.getTransfer(h)===wt&&(c.defines.SRGB_TRANSFER="");let E=TA[d];E&&(c.defines[E]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=w.texture,x.setRenderTarget(b),x.render(l,u),b=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),o.dispose(),a.dispose(),c.dispose()}}var ay=new Hi,$p=new lr(1,1),cy=new Ja,ly=new Ru,uy=new nc,G0=[],H0=[],W0=new Float32Array(16),j0=new Float32Array(9),X0=new Float32Array(4);function Wo(i,t,e){let n=i[0];if(n<=0||n>0)return i;let r=t*e,s=G0[r];if(s===void 0&&(s=new Float32Array(r),G0[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function nn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function rn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Hd(i,t){let e=H0[t];e===void 0&&(e=new Int32Array(t),H0[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function RA(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function IA(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;i.uniform2fv(this.addr,t),rn(e,t)}}function PA(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(nn(e,t))return;i.uniform3fv(this.addr,t),rn(e,t)}}function OA(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;i.uniform4fv(this.addr,t),rn(e,t)}}function FA(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(nn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),rn(e,t)}else{if(nn(e,n))return;X0.set(n),i.uniformMatrix2fv(this.addr,!1,X0),rn(e,n)}}function NA(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(nn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),rn(e,t)}else{if(nn(e,n))return;j0.set(n),i.uniformMatrix3fv(this.addr,!1,j0),rn(e,n)}}function LA(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(nn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),rn(e,t)}else{if(nn(e,n))return;W0.set(n),i.uniformMatrix4fv(this.addr,!1,W0),rn(e,n)}}function kA(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function UA(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;i.uniform2iv(this.addr,t),rn(e,t)}}function BA(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(nn(e,t))return;i.uniform3iv(this.addr,t),rn(e,t)}}function VA(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;i.uniform4iv(this.addr,t),rn(e,t)}}function zA(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function GA(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(nn(e,t))return;i.uniform2uiv(this.addr,t),rn(e,t)}}function HA(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(nn(e,t))return;i.uniform3uiv(this.addr,t),rn(e,t)}}function WA(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(nn(e,t))return;i.uniform4uiv(this.addr,t),rn(e,t)}}function jA(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?($p.compareFunction=e.isReversedDepthBuffer()?Ld:Nd,s=$p):s=ay,e.setTexture2D(t||s,r)}function XA(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||ly,r)}function $A(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||uy,r)}function qA(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||cy,r)}function YA(i){switch(i){case 5126:return RA;case 35664:return IA;case 35665:return PA;case 35666:return OA;case 35674:return FA;case 35675:return NA;case 35676:return LA;case 5124:case 35670:return kA;case 35667:case 35671:return UA;case 35668:case 35672:return BA;case 35669:case 35673:return VA;case 5125:return zA;case 36294:return GA;case 36295:return HA;case 36296:return WA;case 35678:case 36198:case 36298:case 36306:case 35682:return jA;case 35679:case 36299:case 36307:return XA;case 35680:case 36300:case 36308:case 36293:return $A;case 36289:case 36303:case 36311:case 36292:return qA}}function ZA(i,t){i.uniform1fv(this.addr,t)}function JA(i,t){let e=Wo(t,this.size,2);i.uniform2fv(this.addr,e)}function KA(i,t){let e=Wo(t,this.size,3);i.uniform3fv(this.addr,e)}function QA(i,t){let e=Wo(t,this.size,4);i.uniform4fv(this.addr,e)}function eT(i,t){let e=Wo(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function tT(i,t){let e=Wo(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function nT(i,t){let e=Wo(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function iT(i,t){i.uniform1iv(this.addr,t)}function rT(i,t){i.uniform2iv(this.addr,t)}function sT(i,t){i.uniform3iv(this.addr,t)}function oT(i,t){i.uniform4iv(this.addr,t)}function aT(i,t){i.uniform1uiv(this.addr,t)}function cT(i,t){i.uniform2uiv(this.addr,t)}function lT(i,t){i.uniform3uiv(this.addr,t)}function uT(i,t){i.uniform4uiv(this.addr,t)}function dT(i,t,e){let n=this.cache,r=t.length,s=Hd(e,r);nn(n,s)||(i.uniform1iv(this.addr,s),rn(n,s));let o;this.type===i.SAMPLER_2D_SHADOW?o=$p:o=ay;for(let a=0;a!==r;++a)e.setTexture2D(t[a]||o,s[a])}function hT(i,t,e){let n=this.cache,r=t.length,s=Hd(e,r);nn(n,s)||(i.uniform1iv(this.addr,s),rn(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||ly,s[o])}function fT(i,t,e){let n=this.cache,r=t.length,s=Hd(e,r);nn(n,s)||(i.uniform1iv(this.addr,s),rn(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||uy,s[o])}function pT(i,t,e){let n=this.cache,r=t.length,s=Hd(e,r);nn(n,s)||(i.uniform1iv(this.addr,s),rn(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||cy,s[o])}function mT(i){switch(i){case 5126:return ZA;case 35664:return JA;case 35665:return KA;case 35666:return QA;case 35674:return eT;case 35675:return tT;case 35676:return nT;case 5124:case 35670:return iT;case 35667:case 35671:return rT;case 35668:case 35672:return sT;case 35669:case 35673:return oT;case 5125:return aT;case 36294:return cT;case 36295:return lT;case 36296:return uT;case 35678:case 36198:case 36298:case 36306:case 35682:return dT;case 35679:case 36299:case 36307:return hT;case 35680:case 36300:case 36308:case 36293:return fT;case 36289:case 36303:case 36311:case 36292:return pT}}var qp=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=YA(e.type)}},Yp=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=mT(e.type)}},Zp=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(t,e[a.id],n)}}},jp=/(\w+)(\])?(\[|\.)?/g;function $0(i,t){i.seq.push(t),i.map[t.id]=t}function gT(i,t,e){let n=i.name,r=n.length;for(jp.lastIndex=0;;){let s=jp.exec(n),o=jp.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){$0(e,l===void 0?new qp(a,i,t):new Yp(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new Zp(a),$0(e,h)),e=h}}}var Ho=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);gT(a,c,this)}let r=[],s=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,n,r){let s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){let r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){let a=e[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,r)}}static seqWithValue(t,e){let n=[];for(let r=0,s=t.length;r!==s;++r){let o=t[r];o.id in e&&n.push(o)}return n}};function q0(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var vT=37297,_T=0;function yT(i,t){let e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Y0=new We;function bT(i){ct._getMatrix(Y0,ct.workingColorSpace,i);let t=`mat3( ${Y0.elements.map(e=>e.toFixed(4))} )`;switch(ct.getTransfer(i)){case Za:return[t,"LinearTransferOETF"];case wt:return[t,"sRGBTransferOETF"];default:return Le("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Z0(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+yT(i.getShaderSource(t),a)}else return s}function xT(i,t){let e=bT(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var ST={[bp]:"Linear",[xp]:"Reinhard",[Sp]:"Cineon",[wp]:"ACESFilmic",[Ep]:"AgX",[Cp]:"Neutral",[Mp]:"Custom"};function wT(i,t){let e=ST[t];return e===void 0?(Le("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ud=new z;function MT(){ct.getLuminanceCoefficients(Ud);let i=Ud.x.toFixed(4),t=Ud.y.toFixed(4),e=Ud.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ET(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ac).join(`
`)}function CT(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function AT(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(t,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ac(i){return i!==""}function J0(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function K0(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var TT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jp(i){return i.replace(TT,RT)}var DT=new Map;function RT(i,t){let e=Ke[t];if(e===void 0){let n=DT.get(t);if(n!==void 0)e=Ke[n],Le('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Jp(e)}var IT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Q0(i){return i.replace(IT,PT)}function PT(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ey(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var OT={[pc]:"SHADOWMAP_TYPE_PCF",[Bo]:"SHADOWMAP_TYPE_VSM"};function FT(i){return OT[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var NT={[qr]:"ENVMAP_TYPE_CUBE",[Es]:"ENVMAP_TYPE_CUBE",[gc]:"ENVMAP_TYPE_CUBE_UV"};function LT(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":NT[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var kT={[Es]:"ENVMAP_MODE_REFRACTION"};function UT(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":kT[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var BT={[yp]:"ENVMAP_BLENDING_MULTIPLY",[y0]:"ENVMAP_BLENDING_MIX",[b0]:"ENVMAP_BLENDING_ADD"};function VT(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":BT[i.combine]||"ENVMAP_BLENDING_NONE"}function zT(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function GT(i,t,e,n){let r=i.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,c=FT(e),l=LT(e),u=UT(e),h=VT(e),d=zT(e),p=ET(e),g=CT(s),b=r.createProgram(),m,f,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ac).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ac).join(`
`),f.length>0&&(f+=`
`)):(m=[ey(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ac).join(`
`),f=[ey(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==yi?"#define TONE_MAPPING":"",e.toneMapping!==yi?Ke.tonemapping_pars_fragment:"",e.toneMapping!==yi?wT("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,xT("linearToOutputTexel",e.outputColorSpace),MT(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ac).join(`
`)),o=Jp(o),o=J0(o,e),o=K0(o,e),a=Jp(a),a=J0(a,e),a=K0(a,e),o=Q0(o),a=Q0(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Fp?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Fp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let M=x+m+o,w=x+f+a,D=q0(r,r.VERTEX_SHADER,M),E=q0(r,r.FRAGMENT_SHADER,w);r.attachShader(b,D),r.attachShader(b,E),e.index0AttributeName!==void 0?r.bindAttribLocation(b,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function R(T){if(i.debug.checkShaderErrors){let U=r.getProgramInfoLog(b)||"",$=r.getShaderInfoLog(D)||"",K=r.getShaderInfoLog(E)||"",F=U.trim(),H=$.trim(),k=K.trim(),ne=!0,se=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(ne=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,b,D,E);else{let ge=Z0(r,D,"vertex"),Ae=Z0(r,E,"fragment");Ue("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+F+`
`+ge+`
`+Ae)}else F!==""?Le("WebGLProgram: Program Info Log:",F):(H===""||k==="")&&(se=!1);se&&(T.diagnostics={runnable:ne,programLog:F,vertexShader:{log:H,prefix:m},fragmentShader:{log:k,prefix:f}})}r.deleteShader(D),r.deleteShader(E),_=new Ho(r,b),C=AT(r,b)}let _;this.getUniforms=function(){return _===void 0&&R(this),_};let C;this.getAttributes=function(){return C===void 0&&R(this),C};let N=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=r.getProgramParameter(b,vT)),N},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=_T++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=D,this.fragmentShader=E,this}var HT=0,Kp=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Qp(t),e.set(t,n)),n}},Qp=class{constructor(t){this.id=HT++,this.code=t,this.usedTimes=0}};function WT(i){return i===Jr||i===Sc||i===wc}function jT(i,t,e,n,r,s){let o=new Ka,a=new Kp,c=new Set,l=[],u=new Map,h=n.logarithmicDepthBuffer,d=n.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return c.add(_),_===0?"uv":`uv${_}`}function b(_,C,N,T,U,$){let K=T.fog,F=U.geometry,H=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?T.environment:null,k=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,ne=t.get(_.envMap||H,k),se=ne&&ne.mapping===gc?ne.image.height:null,ge=p[_.type];_.precision!==null&&(d=n.getMaxPrecision(_.precision),d!==_.precision&&Le("WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));let Ae=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Ie=Ae!==void 0?Ae.length:0,dt=0;F.morphAttributes.position!==void 0&&(dt=1),F.morphAttributes.normal!==void 0&&(dt=2),F.morphAttributes.color!==void 0&&(dt=3);let Et,Ye,Q,ye;if(ge){let Xe=ji[ge];Et=Xe.vertexShader,Ye=Xe.fragmentShader}else Et=_.vertexShader,Ye=_.fragmentShader,a.update(_),Q=a.getVertexShaderID(_),ye=a.getFragmentShaderID(_);let ue=i.getRenderTarget(),ke=i.state.buffers.depth.getReversed(),je=U.isInstancedMesh===!0,Be=U.isBatchedMesh===!0,zt=!!_.map,ot=!!_.matcap,Ct=!!ne,Vt=!!_.aoMap,st=!!_.lightMap,Kt=!!_.bumpMap,Gt=!!_.normalMap,Ln=!!_.displacementMap,P=!!_.emissiveMap,Qt=!!_.metalnessMap,at=!!_.roughnessMap,kt=_.anisotropy>0,pe=_.clearcoat>0,Wt=_.dispersion>0,S=_.iridescence>0,v=_.sheen>0,L=_.transmission>0,Z=kt&&!!_.anisotropyMap,te=pe&&!!_.clearcoatMap,ae=pe&&!!_.clearcoatNormalMap,fe=pe&&!!_.clearcoatRoughnessMap,j=S&&!!_.iridescenceMap,J=S&&!!_.iridescenceThicknessMap,be=v&&!!_.sheenColorMap,we=v&&!!_.sheenRoughnessMap,de=!!_.specularMap,ce=!!_.specularColorMap,Ge=!!_.specularIntensityMap,Ze=L&&!!_.transmissionMap,pt=L&&!!_.thicknessMap,I=!!_.gradientMap,le=!!_.alphaMap,Y=_.alphaTest>0,xe=!!_.alphaHash,he=!!_.extensions,ee=yi;_.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(ee=i.toneMapping);let De={shaderID:ge,shaderType:_.type,shaderName:_.name,vertexShader:Et,fragmentShader:Ye,defines:_.defines,customVertexShaderID:Q,customFragmentShaderID:ye,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:Be,batchingColor:Be&&U._colorsTexture!==null,instancing:je,instancingColor:je&&U.instanceColor!==null,instancingMorph:je&&U.morphTexture!==null,outputColorSpace:ue===null?i.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:ct.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:zt,matcap:ot,envMap:Ct,envMapMode:Ct&&ne.mapping,envMapCubeUVHeight:se,aoMap:Vt,lightMap:st,bumpMap:Kt,normalMap:Gt,displacementMap:Ln,emissiveMap:P,normalMapObjectSpace:Gt&&_.normalMapType===w0,normalMapTangentSpace:Gt&&_.normalMapType===Fd,packedNormalMap:Gt&&_.normalMapType===Fd&&WT(_.normalMap.format),metalnessMap:Qt,roughnessMap:at,anisotropy:kt,anisotropyMap:Z,clearcoat:pe,clearcoatMap:te,clearcoatNormalMap:ae,clearcoatRoughnessMap:fe,dispersion:Wt,iridescence:S,iridescenceMap:j,iridescenceThicknessMap:J,sheen:v,sheenColorMap:be,sheenRoughnessMap:we,specularMap:de,specularColorMap:ce,specularIntensityMap:Ge,transmission:L,transmissionMap:Ze,thicknessMap:pt,gradientMap:I,opaque:_.transparent===!1&&_.blending===Ss&&_.alphaToCoverage===!1,alphaMap:le,alphaTest:Y,alphaHash:xe,combine:_.combine,mapUv:zt&&g(_.map.channel),aoMapUv:Vt&&g(_.aoMap.channel),lightMapUv:st&&g(_.lightMap.channel),bumpMapUv:Kt&&g(_.bumpMap.channel),normalMapUv:Gt&&g(_.normalMap.channel),displacementMapUv:Ln&&g(_.displacementMap.channel),emissiveMapUv:P&&g(_.emissiveMap.channel),metalnessMapUv:Qt&&g(_.metalnessMap.channel),roughnessMapUv:at&&g(_.roughnessMap.channel),anisotropyMapUv:Z&&g(_.anisotropyMap.channel),clearcoatMapUv:te&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:ae&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:fe&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:J&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:be&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:we&&g(_.sheenRoughnessMap.channel),specularMapUv:de&&g(_.specularMap.channel),specularColorMapUv:ce&&g(_.specularColorMap.channel),specularIntensityMapUv:Ge&&g(_.specularIntensityMap.channel),transmissionMapUv:Ze&&g(_.transmissionMap.channel),thicknessMapUv:pt&&g(_.thicknessMap.channel),alphaMapUv:le&&g(_.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Gt||kt),vertexNormals:!!F.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!F.attributes.uv&&(zt||le),fog:!!K,useFog:_.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||F.attributes.normal===void 0&&Gt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ke,skinning:U.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:Ie,morphTextureStride:dt,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:$.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:ee,decodeVideoTexture:zt&&_.map.isVideoTexture===!0&&ct.getTransfer(_.map.colorSpace)===wt,decodeVideoTextureEmissive:P&&_.emissiveMap.isVideoTexture===!0&&ct.getTransfer(_.emissiveMap.colorSpace)===wt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Vi,flipSided:_.side===hn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:he&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(he&&_.extensions.multiDraw===!0||Be)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return De.vertexUv1s=c.has(1),De.vertexUv2s=c.has(2),De.vertexUv3s=c.has(3),c.clear(),De}function m(_){let C=[];if(_.shaderID?C.push(_.shaderID):(C.push(_.customVertexShaderID),C.push(_.customFragmentShaderID)),_.defines!==void 0)for(let N in _.defines)C.push(N),C.push(_.defines[N]);return _.isRawShaderMaterial===!1&&(f(C,_),x(C,_),C.push(i.outputColorSpace)),C.push(_.customProgramCacheKey),C.join()}function f(_,C){_.push(C.precision),_.push(C.outputColorSpace),_.push(C.envMapMode),_.push(C.envMapCubeUVHeight),_.push(C.mapUv),_.push(C.alphaMapUv),_.push(C.lightMapUv),_.push(C.aoMapUv),_.push(C.bumpMapUv),_.push(C.normalMapUv),_.push(C.displacementMapUv),_.push(C.emissiveMapUv),_.push(C.metalnessMapUv),_.push(C.roughnessMapUv),_.push(C.anisotropyMapUv),_.push(C.clearcoatMapUv),_.push(C.clearcoatNormalMapUv),_.push(C.clearcoatRoughnessMapUv),_.push(C.iridescenceMapUv),_.push(C.iridescenceThicknessMapUv),_.push(C.sheenColorMapUv),_.push(C.sheenRoughnessMapUv),_.push(C.specularMapUv),_.push(C.specularColorMapUv),_.push(C.specularIntensityMapUv),_.push(C.transmissionMapUv),_.push(C.thicknessMapUv),_.push(C.combine),_.push(C.fogExp2),_.push(C.sizeAttenuation),_.push(C.morphTargetsCount),_.push(C.morphAttributeCount),_.push(C.numDirLights),_.push(C.numPointLights),_.push(C.numSpotLights),_.push(C.numSpotLightMaps),_.push(C.numHemiLights),_.push(C.numRectAreaLights),_.push(C.numDirLightShadows),_.push(C.numPointLightShadows),_.push(C.numSpotLightShadows),_.push(C.numSpotLightShadowsWithMaps),_.push(C.numLightProbes),_.push(C.shadowMapType),_.push(C.toneMapping),_.push(C.numClippingPlanes),_.push(C.numClipIntersection),_.push(C.depthPacking)}function x(_,C){o.disableAll(),C.instancing&&o.enable(0),C.instancingColor&&o.enable(1),C.instancingMorph&&o.enable(2),C.matcap&&o.enable(3),C.envMap&&o.enable(4),C.normalMapObjectSpace&&o.enable(5),C.normalMapTangentSpace&&o.enable(6),C.clearcoat&&o.enable(7),C.iridescence&&o.enable(8),C.alphaTest&&o.enable(9),C.vertexColors&&o.enable(10),C.vertexAlphas&&o.enable(11),C.vertexUv1s&&o.enable(12),C.vertexUv2s&&o.enable(13),C.vertexUv3s&&o.enable(14),C.vertexTangents&&o.enable(15),C.anisotropy&&o.enable(16),C.alphaHash&&o.enable(17),C.batching&&o.enable(18),C.dispersion&&o.enable(19),C.batchingColor&&o.enable(20),C.gradientMap&&o.enable(21),C.packedNormalMap&&o.enable(22),C.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.reversedDepthBuffer&&o.enable(4),C.skinning&&o.enable(5),C.morphTargets&&o.enable(6),C.morphNormals&&o.enable(7),C.morphColors&&o.enable(8),C.premultipliedAlpha&&o.enable(9),C.shadowMapEnabled&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),C.decodeVideoTexture&&o.enable(19),C.decodeVideoTextureEmissive&&o.enable(20),C.alphaToCoverage&&o.enable(21),C.numLightProbeGrids>0&&o.enable(22),_.push(o.mask)}function M(_){let C=p[_.type],N;if(C){let T=ji[C];N=N0.clone(T.uniforms)}else N=_.uniforms;return N}function w(_,C){let N=u.get(C);return N!==void 0?++N.usedTimes:(N=new GT(i,C,_,r),l.push(N),u.set(C,N)),N}function D(_){if(--_.usedTimes===0){let C=l.indexOf(_);l[C]=l[l.length-1],l.pop(),u.delete(_.cacheKey),_.destroy()}}function E(_){a.remove(_)}function R(){a.dispose()}return{getParameters:b,getProgramCacheKey:m,getUniforms:M,acquireProgram:w,releaseProgram:D,releaseShaderCache:E,programs:l,dispose:R}}function XT(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,c){i.get(o)[a]=c}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function $T(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function ty(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ny(){let i=[],t=0,e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(d){let p=0;return d.isInstancedMesh&&(p+=2),d.isSkinnedMesh&&(p+=1),p}function a(d,p,g,b,m,f){let x=i[t];return x===void 0?(x={id:d.id,object:d,geometry:p,material:g,materialVariant:o(d),groupOrder:b,renderOrder:d.renderOrder,z:m,group:f},i[t]=x):(x.id=d.id,x.object=d,x.geometry=p,x.material=g,x.materialVariant=o(d),x.groupOrder=b,x.renderOrder=d.renderOrder,x.z=m,x.group=f),t++,x}function c(d,p,g,b,m,f){let x=a(d,p,g,b,m,f);g.transmission>0?n.push(x):g.transparent===!0?r.push(x):e.push(x)}function l(d,p,g,b,m,f){let x=a(d,p,g,b,m,f);g.transmission>0?n.unshift(x):g.transparent===!0?r.unshift(x):e.unshift(x)}function u(d,p){e.length>1&&e.sort(d||$T),n.length>1&&n.sort(p||ty),r.length>1&&r.sort(p||ty)}function h(){for(let d=t,p=i.length;d<p;d++){let g=i[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:c,unshift:l,finish:h,sort:u}}function qT(){let i=new WeakMap;function t(n,r){let s=i.get(n),o;return s===void 0?(o=new ny,i.set(n,[o])):r>=s.length?(o=new ny,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function YT(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new z,color:new ut};break;case"SpotLight":e={position:new z,direction:new z,color:new ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new z,color:new ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new z,skyColor:new ut,groundColor:new ut};break;case"RectAreaLight":e={color:new ut,position:new z,halfWidth:new z,halfHeight:new z};break}return i[t.id]=e,e}}}function ZT(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var JT=0;function KT(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function QT(i){let t=new YT,e=ZT(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new z);let r=new z,s=new $t,o=new $t;function a(l){let u=0,h=0,d=0;for(let C=0;C<9;C++)n.probe[C].set(0,0,0);let p=0,g=0,b=0,m=0,f=0,x=0,M=0,w=0,D=0,E=0,R=0;l.sort(KT);for(let C=0,N=l.length;C<N;C++){let T=l[C],U=T.color,$=T.intensity,K=T.distance,F=null;if(T.shadow&&T.shadow.map&&(T.shadow.map.texture.format===Jr?F=T.shadow.map.texture:F=T.shadow.map.depthTexture||T.shadow.map.texture),T.isAmbientLight)u+=U.r*$,h+=U.g*$,d+=U.b*$;else if(T.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(T.sh.coefficients[H],$);R++}else if(T.isDirectionalLight){let H=t.get(T);if(H.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let k=T.shadow,ne=e.get(T);ne.shadowIntensity=k.intensity,ne.shadowBias=k.bias,ne.shadowNormalBias=k.normalBias,ne.shadowRadius=k.radius,ne.shadowMapSize=k.mapSize,n.directionalShadow[p]=ne,n.directionalShadowMap[p]=F,n.directionalShadowMatrix[p]=T.shadow.matrix,x++}n.directional[p]=H,p++}else if(T.isSpotLight){let H=t.get(T);H.position.setFromMatrixPosition(T.matrixWorld),H.color.copy(U).multiplyScalar($),H.distance=K,H.coneCos=Math.cos(T.angle),H.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),H.decay=T.decay,n.spot[b]=H;let k=T.shadow;if(T.map&&(n.spotLightMap[D]=T.map,D++,k.updateMatrices(T),T.castShadow&&E++),n.spotLightMatrix[b]=k.matrix,T.castShadow){let ne=e.get(T);ne.shadowIntensity=k.intensity,ne.shadowBias=k.bias,ne.shadowNormalBias=k.normalBias,ne.shadowRadius=k.radius,ne.shadowMapSize=k.mapSize,n.spotShadow[b]=ne,n.spotShadowMap[b]=F,w++}b++}else if(T.isRectAreaLight){let H=t.get(T);H.color.copy(U).multiplyScalar($),H.halfWidth.set(T.width*.5,0,0),H.halfHeight.set(0,T.height*.5,0),n.rectArea[m]=H,m++}else if(T.isPointLight){let H=t.get(T);if(H.color.copy(T.color).multiplyScalar(T.intensity),H.distance=T.distance,H.decay=T.decay,T.castShadow){let k=T.shadow,ne=e.get(T);ne.shadowIntensity=k.intensity,ne.shadowBias=k.bias,ne.shadowNormalBias=k.normalBias,ne.shadowRadius=k.radius,ne.shadowMapSize=k.mapSize,ne.shadowCameraNear=k.camera.near,ne.shadowCameraFar=k.camera.far,n.pointShadow[g]=ne,n.pointShadowMap[g]=F,n.pointShadowMatrix[g]=T.shadow.matrix,M++}n.point[g]=H,g++}else if(T.isHemisphereLight){let H=t.get(T);H.skyColor.copy(T.color).multiplyScalar($),H.groundColor.copy(T.groundColor).multiplyScalar($),n.hemi[f]=H,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=me.LTC_FLOAT_1,n.rectAreaLTC2=me.LTC_FLOAT_2):(n.rectAreaLTC1=me.LTC_HALF_1,n.rectAreaLTC2=me.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let _=n.hash;(_.directionalLength!==p||_.pointLength!==g||_.spotLength!==b||_.rectAreaLength!==m||_.hemiLength!==f||_.numDirectionalShadows!==x||_.numPointShadows!==M||_.numSpotShadows!==w||_.numSpotMaps!==D||_.numLightProbes!==R)&&(n.directional.length=p,n.spot.length=b,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=w+D-E,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=R,_.directionalLength=p,_.pointLength=g,_.spotLength=b,_.rectAreaLength=m,_.hemiLength=f,_.numDirectionalShadows=x,_.numPointShadows=M,_.numSpotShadows=w,_.numSpotMaps=D,_.numLightProbes=R,n.version=JT++)}function c(l,u){let h=0,d=0,p=0,g=0,b=0,m=u.matrixWorldInverse;for(let f=0,x=l.length;f<x;f++){let M=l[f];if(M.isDirectionalLight){let w=n.directional[h];w.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(m),h++}else if(M.isSpotLight){let w=n.spot[p];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(m),p++}else if(M.isRectAreaLight){let w=n.rectArea[g];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(m),o.identity(),s.copy(M.matrixWorld),s.premultiply(m),o.extractRotation(s),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){let w=n.point[d];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){let w=n.hemi[b];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(m),b++}}}return{setup:a,setupView:c,state:n}}function iy(i){let t=new QT(i),e=[],n=[],r=[];function s(d){h.camera=d,e.length=0,n.length=0,r.length=0}function o(d){e.push(d)}function a(d){n.push(d)}function c(d){r.push(d)}function l(){t.setup(e)}function u(d){t.setupView(e,d)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function e1(i){let t=new WeakMap;function e(r,s=0){let o=t.get(r),a;return o===void 0?(a=new iy(i),t.set(r,[a])):s>=o.length?(a=new iy(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var t1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,n1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,i1=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],r1=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],ry=new $t,Cc=new z,Xp=new z;function s1(i,t,e){let n=new Lo,r=new vt,s=new vt,o=new Ht,a=new Nu,c=new Lu,l={},u=e.maxTextureSize,h={[cr]:hn,[hn]:cr,[Vi]:Vi},d=new Yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:t1,fragmentShader:n1}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new _i;g.setAttribute("position",new $n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Tn(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pc;let f=this.type;this.render=function(E,R,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===e0&&(Le("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=pc);let C=i.getRenderTarget(),N=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),U=i.state;U.setBlending(zi),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let $=f!==this.type;$&&R.traverse(function(K){K.material&&(Array.isArray(K.material)?K.material.forEach(F=>F.needsUpdate=!0):K.material.needsUpdate=!0)});for(let K=0,F=E.length;K<F;K++){let H=E[K],k=H.shadow;if(k===void 0){Le("WebGLShadowMap:",H,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);let ne=k.getFrameExtents();r.multiply(ne),s.copy(k.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ne.x),r.x=s.x*ne.x,k.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ne.y),r.y=s.y*ne.y,k.mapSize.y=s.y));let se=i.state.buffers.depth.getReversed();if(k.camera._reversedDepth=se,k.map===null||$===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Bo){if(H.isPointLight){Le("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new qn(r.x,r.y,{format:Jr,type:Gi,minFilter:dn,magFilter:dn,generateMipmaps:!1}),k.map.texture.name=H.name+".shadowMap",k.map.depthTexture=new lr(r.x,r.y,xi),k.map.depthTexture.name=H.name+".shadowMapDepth",k.map.depthTexture.format=ki,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=an,k.map.depthTexture.magFilter=an}else H.isPointLight?(k.map=new Vd(r.x),k.map.depthTexture=new Ou(r.x,bi)):(k.map=new qn(r.x,r.y),k.map.depthTexture=new lr(r.x,r.y,bi)),k.map.depthTexture.name=H.name+".shadowMap",k.map.depthTexture.format=ki,this.type===pc?(k.map.depthTexture.compareFunction=se?Ld:Nd,k.map.depthTexture.minFilter=dn,k.map.depthTexture.magFilter=dn):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=an,k.map.depthTexture.magFilter=an);k.camera.updateProjectionMatrix()}let ge=k.map.isWebGLCubeRenderTarget?6:1;for(let Ae=0;Ae<ge;Ae++){if(k.map.isWebGLCubeRenderTarget)i.setRenderTarget(k.map,Ae),i.clear();else{Ae===0&&(i.setRenderTarget(k.map),i.clear());let Ie=k.getViewport(Ae);o.set(s.x*Ie.x,s.y*Ie.y,s.x*Ie.z,s.y*Ie.w),U.viewport(o)}if(H.isPointLight){let Ie=k.camera,dt=k.matrix,Et=H.distance||Ie.far;Et!==Ie.far&&(Ie.far=Et,Ie.updateProjectionMatrix()),Cc.setFromMatrixPosition(H.matrixWorld),Ie.position.copy(Cc),Xp.copy(Ie.position),Xp.add(i1[Ae]),Ie.up.copy(r1[Ae]),Ie.lookAt(Xp),Ie.updateMatrixWorld(),dt.makeTranslation(-Cc.x,-Cc.y,-Cc.z),ry.multiplyMatrices(Ie.projectionMatrix,Ie.matrixWorldInverse),k._frustum.setFromProjectionMatrix(ry,Ie.coordinateSystem,Ie.reversedDepth)}else k.updateMatrices(H);n=k.getFrustum(),w(R,_,k.camera,H,this.type)}k.isPointLightShadow!==!0&&this.type===Bo&&x(k,_),k.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(C,N,T)};function x(E,R){let _=t.update(b);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new qn(r.x,r.y,{format:Jr,type:Gi})),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(R,null,_,d,b,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(R,null,_,p,b,null)}function M(E,R,_,C){let N=null,T=_.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(T!==void 0)N=T;else if(N=_.isPointLight===!0?c:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let U=N.uuid,$=R.uuid,K=l[U];K===void 0&&(K={},l[U]=K);let F=K[$];F===void 0&&(F=N.clone(),K[$]=F,R.addEventListener("dispose",D)),N=F}if(N.visible=R.visible,N.wireframe=R.wireframe,C===Bo?N.side=R.shadowSide!==null?R.shadowSide:R.side:N.side=R.shadowSide!==null?R.shadowSide:h[R.side],N.alphaMap=R.alphaMap,N.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,N.map=R.map,N.clipShadows=R.clipShadows,N.clippingPlanes=R.clippingPlanes,N.clipIntersection=R.clipIntersection,N.displacementMap=R.displacementMap,N.displacementScale=R.displacementScale,N.displacementBias=R.displacementBias,N.wireframeLinewidth=R.wireframeLinewidth,N.linewidth=R.linewidth,_.isPointLight===!0&&N.isMeshDistanceMaterial===!0){let U=i.properties.get(N);U.light=_}return N}function w(E,R,_,C,N){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&N===Bo)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,E.matrixWorld);let $=t.update(E),K=E.material;if(Array.isArray(K)){let F=$.groups;for(let H=0,k=F.length;H<k;H++){let ne=F[H],se=K[ne.materialIndex];if(se&&se.visible){let ge=M(E,se,C,N);E.onBeforeShadow(i,E,R,_,$,ge,ne),i.renderBufferDirect(_,null,$,ge,E,ne),E.onAfterShadow(i,E,R,_,$,ge,ne)}}}else if(K.visible){let F=M(E,K,C,N);E.onBeforeShadow(i,E,R,_,$,F,null),i.renderBufferDirect(_,null,$,F,E,null),E.onAfterShadow(i,E,R,_,$,F,null)}}let U=E.children;for(let $=0,K=U.length;$<K;$++)w(U[$],R,_,C,N)}function D(E){E.target.removeEventListener("dispose",D);for(let _ in l){let C=l[_],N=E.target.uuid;N in C&&(C[N].dispose(),delete C[N])}}}function o1(i,t){function e(){let I=!1,le=new Ht,Y=null,xe=new Ht(0,0,0,0);return{setMask:function(he){Y!==he&&!I&&(i.colorMask(he,he,he,he),Y=he)},setLocked:function(he){I=he},setClear:function(he,ee,De,Xe,qt){qt===!0&&(he*=Xe,ee*=Xe,De*=Xe),le.set(he,ee,De,Xe),xe.equals(le)===!1&&(i.clearColor(he,ee,De,Xe),xe.copy(le))},reset:function(){I=!1,Y=null,xe.set(-1,0,0,0)}}}function n(){let I=!1,le=!1,Y=null,xe=null,he=null;return{setReversed:function(ee){if(le!==ee){let De=t.get("EXT_clip_control");ee?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),le=ee;let Xe=he;he=null,this.setClear(Xe)}},getReversed:function(){return le},setTest:function(ee){ee?ue(i.DEPTH_TEST):ke(i.DEPTH_TEST)},setMask:function(ee){Y!==ee&&!I&&(i.depthMask(ee),Y=ee)},setFunc:function(ee){if(le&&(ee=O0[ee]),xe!==ee){switch(ee){case gu:i.depthFunc(i.NEVER);break;case vu:i.depthFunc(i.ALWAYS);break;case _u:i.depthFunc(i.LESS);break;case ws:i.depthFunc(i.LEQUAL);break;case yu:i.depthFunc(i.EQUAL);break;case bu:i.depthFunc(i.GEQUAL);break;case xu:i.depthFunc(i.GREATER);break;case Su:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}xe=ee}},setLocked:function(ee){I=ee},setClear:function(ee){he!==ee&&(he=ee,le&&(ee=1-ee),i.clearDepth(ee))},reset:function(){I=!1,Y=null,xe=null,he=null,le=!1}}}function r(){let I=!1,le=null,Y=null,xe=null,he=null,ee=null,De=null,Xe=null,qt=null;return{setTest:function(At){I||(At?ue(i.STENCIL_TEST):ke(i.STENCIL_TEST))},setMask:function(At){le!==At&&!I&&(i.stencilMask(At),le=At)},setFunc:function(At,qi,Si){(Y!==At||xe!==qi||he!==Si)&&(i.stencilFunc(At,qi,Si),Y=At,xe=qi,he=Si)},setOp:function(At,qi,Si){(ee!==At||De!==qi||Xe!==Si)&&(i.stencilOp(At,qi,Si),ee=At,De=qi,Xe=Si)},setLocked:function(At){I=At},setClear:function(At){qt!==At&&(i.clearStencil(At),qt=At)},reset:function(){I=!1,le=null,Y=null,xe=null,he=null,ee=null,De=null,Xe=null,qt=null}}}let s=new e,o=new n,a=new r,c=new WeakMap,l=new WeakMap,u={},h={},d={},p=new WeakMap,g=[],b=null,m=!1,f=null,x=null,M=null,w=null,D=null,E=null,R=null,_=new ut(0,0,0),C=0,N=!1,T=null,U=null,$=null,K=null,F=null,H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,ne=0,se=i.getParameter(i.VERSION);se.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(se)[1]),k=ne>=1):se.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),k=ne>=2);let ge=null,Ae={},Ie=i.getParameter(i.SCISSOR_BOX),dt=i.getParameter(i.VIEWPORT),Et=new Ht().fromArray(Ie),Ye=new Ht().fromArray(dt);function Q(I,le,Y,xe){let he=new Uint8Array(4),ee=i.createTexture();i.bindTexture(I,ee),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let De=0;De<Y;De++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(le,0,i.RGBA,1,1,xe,0,i.RGBA,i.UNSIGNED_BYTE,he):i.texImage2D(le+De,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,he);return ee}let ye={};ye[i.TEXTURE_2D]=Q(i.TEXTURE_2D,i.TEXTURE_2D,1),ye[i.TEXTURE_CUBE_MAP]=Q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[i.TEXTURE_2D_ARRAY]=Q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ye[i.TEXTURE_3D]=Q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ue(i.DEPTH_TEST),o.setFunc(ws),Kt(!1),Gt(gp),ue(i.CULL_FACE),Vt(zi);function ue(I){u[I]!==!0&&(i.enable(I),u[I]=!0)}function ke(I){u[I]!==!1&&(i.disable(I),u[I]=!1)}function je(I,le){return d[I]!==le?(i.bindFramebuffer(I,le),d[I]=le,I===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=le),I===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=le),!0):!1}function Be(I,le){let Y=g,xe=!1;if(I){Y=p.get(le),Y===void 0&&(Y=[],p.set(le,Y));let he=I.textures;if(Y.length!==he.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let ee=0,De=he.length;ee<De;ee++)Y[ee]=i.COLOR_ATTACHMENT0+ee;Y.length=he.length,xe=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,xe=!0);xe&&i.drawBuffers(Y)}function zt(I){return b!==I?(i.useProgram(I),b=I,!0):!1}let ot={[Gr]:i.FUNC_ADD,[n0]:i.FUNC_SUBTRACT,[i0]:i.FUNC_REVERSE_SUBTRACT};ot[r0]=i.MIN,ot[s0]=i.MAX;let Ct={[o0]:i.ZERO,[a0]:i.ONE,[c0]:i.SRC_COLOR,[pu]:i.SRC_ALPHA,[p0]:i.SRC_ALPHA_SATURATE,[h0]:i.DST_COLOR,[u0]:i.DST_ALPHA,[l0]:i.ONE_MINUS_SRC_COLOR,[mu]:i.ONE_MINUS_SRC_ALPHA,[f0]:i.ONE_MINUS_DST_COLOR,[d0]:i.ONE_MINUS_DST_ALPHA,[m0]:i.CONSTANT_COLOR,[g0]:i.ONE_MINUS_CONSTANT_COLOR,[v0]:i.CONSTANT_ALPHA,[_0]:i.ONE_MINUS_CONSTANT_ALPHA};function Vt(I,le,Y,xe,he,ee,De,Xe,qt,At){if(I===zi){m===!0&&(ke(i.BLEND),m=!1);return}if(m===!1&&(ue(i.BLEND),m=!0),I!==t0){if(I!==f||At!==N){if((x!==Gr||D!==Gr)&&(i.blendEquation(i.FUNC_ADD),x=Gr,D=Gr),At)switch(I){case Ss:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case mc:i.blendFunc(i.ONE,i.ONE);break;case vp:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case _p:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ue("WebGLState: Invalid blending: ",I);break}else switch(I){case Ss:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case mc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case vp:Ue("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _p:Ue("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ue("WebGLState: Invalid blending: ",I);break}M=null,w=null,E=null,R=null,_.set(0,0,0),C=0,f=I,N=At}return}he=he||le,ee=ee||Y,De=De||xe,(le!==x||he!==D)&&(i.blendEquationSeparate(ot[le],ot[he]),x=le,D=he),(Y!==M||xe!==w||ee!==E||De!==R)&&(i.blendFuncSeparate(Ct[Y],Ct[xe],Ct[ee],Ct[De]),M=Y,w=xe,E=ee,R=De),(Xe.equals(_)===!1||qt!==C)&&(i.blendColor(Xe.r,Xe.g,Xe.b,qt),_.copy(Xe),C=qt),f=I,N=!1}function st(I,le){I.side===Vi?ke(i.CULL_FACE):ue(i.CULL_FACE);let Y=I.side===hn;le&&(Y=!Y),Kt(Y),I.blending===Ss&&I.transparent===!1?Vt(zi):Vt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),s.setMask(I.colorWrite);let xe=I.stencilWrite;a.setTest(xe),xe&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),P(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ue(i.SAMPLE_ALPHA_TO_COVERAGE):ke(i.SAMPLE_ALPHA_TO_COVERAGE)}function Kt(I){T!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),T=I)}function Gt(I){I!==K_?(ue(i.CULL_FACE),I!==U&&(I===gp?i.cullFace(i.BACK):I===Q_?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ke(i.CULL_FACE),U=I}function Ln(I){I!==$&&(k&&i.lineWidth(I),$=I)}function P(I,le,Y){I?(ue(i.POLYGON_OFFSET_FILL),(K!==le||F!==Y)&&(K=le,F=Y,o.getReversed()&&(le=-le),i.polygonOffset(le,Y))):ke(i.POLYGON_OFFSET_FILL)}function Qt(I){I?ue(i.SCISSOR_TEST):ke(i.SCISSOR_TEST)}function at(I){I===void 0&&(I=i.TEXTURE0+H-1),ge!==I&&(i.activeTexture(I),ge=I)}function kt(I,le,Y){Y===void 0&&(ge===null?Y=i.TEXTURE0+H-1:Y=ge);let xe=Ae[Y];xe===void 0&&(xe={type:void 0,texture:void 0},Ae[Y]=xe),(xe.type!==I||xe.texture!==le)&&(ge!==Y&&(i.activeTexture(Y),ge=Y),i.bindTexture(I,le||ye[I]),xe.type=I,xe.texture=le)}function pe(){let I=Ae[ge];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Wt(){try{i.compressedTexImage2D(...arguments)}catch(I){Ue("WebGLState:",I)}}function S(){try{i.compressedTexImage3D(...arguments)}catch(I){Ue("WebGLState:",I)}}function v(){try{i.texSubImage2D(...arguments)}catch(I){Ue("WebGLState:",I)}}function L(){try{i.texSubImage3D(...arguments)}catch(I){Ue("WebGLState:",I)}}function Z(){try{i.compressedTexSubImage2D(...arguments)}catch(I){Ue("WebGLState:",I)}}function te(){try{i.compressedTexSubImage3D(...arguments)}catch(I){Ue("WebGLState:",I)}}function ae(){try{i.texStorage2D(...arguments)}catch(I){Ue("WebGLState:",I)}}function fe(){try{i.texStorage3D(...arguments)}catch(I){Ue("WebGLState:",I)}}function j(){try{i.texImage2D(...arguments)}catch(I){Ue("WebGLState:",I)}}function J(){try{i.texImage3D(...arguments)}catch(I){Ue("WebGLState:",I)}}function be(I){return h[I]!==void 0?h[I]:i.getParameter(I)}function we(I,le){h[I]!==le&&(i.pixelStorei(I,le),h[I]=le)}function de(I){Et.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),Et.copy(I))}function ce(I){Ye.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),Ye.copy(I))}function Ge(I,le){let Y=l.get(le);Y===void 0&&(Y=new WeakMap,l.set(le,Y));let xe=Y.get(I);xe===void 0&&(xe=i.getUniformBlockIndex(le,I.name),Y.set(I,xe))}function Ze(I,le){let xe=l.get(le).get(I);c.get(le)!==xe&&(i.uniformBlockBinding(le,xe,I.__bindingPointIndex),c.set(le,xe))}function pt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},h={},ge=null,Ae={},d={},p=new WeakMap,g=[],b=null,m=!1,f=null,x=null,M=null,w=null,D=null,E=null,R=null,_=new ut(0,0,0),C=0,N=!1,T=null,U=null,$=null,K=null,F=null,Et.set(0,0,i.canvas.width,i.canvas.height),Ye.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ue,disable:ke,bindFramebuffer:je,drawBuffers:Be,useProgram:zt,setBlending:Vt,setMaterial:st,setFlipSided:Kt,setCullFace:Gt,setLineWidth:Ln,setPolygonOffset:P,setScissorTest:Qt,activeTexture:at,bindTexture:kt,unbindTexture:pe,compressedTexImage2D:Wt,compressedTexImage3D:S,texImage2D:j,texImage3D:J,pixelStorei:we,getParameter:be,updateUBOMapping:Ge,uniformBlockBinding:Ze,texStorage2D:ae,texStorage3D:fe,texSubImage2D:v,texSubImage3D:L,compressedTexSubImage2D:Z,compressedTexSubImage3D:te,scissor:de,viewport:ce,reset:pt}}function a1(i,t,e,n,r,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new vt,u=new WeakMap,h=new Set,d,p=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(S,v){return g?new OffscreenCanvas(S,v):Ro("canvas")}function m(S,v,L){let Z=1,te=Wt(S);if((te.width>L||te.height>L)&&(Z=L/Math.max(te.width,te.height)),Z<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){let ae=Math.floor(Z*te.width),fe=Math.floor(Z*te.height);d===void 0&&(d=b(ae,fe));let j=v?b(ae,fe):d;return j.width=ae,j.height=fe,j.getContext("2d").drawImage(S,0,0,ae,fe),Le("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+ae+"x"+fe+")."),j}else return"data"in S&&Le("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),S;return S}function f(S){return S.generateMipmaps}function x(S){i.generateMipmap(S)}function M(S){return S.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?i.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(S,v,L,Z,te,ae=!1){if(S!==null){if(i[S]!==void 0)return i[S];Le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let fe;Z&&(fe=t.get("EXT_texture_norm16"),fe||Le("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=v;if(v===i.RED&&(L===i.FLOAT&&(j=i.R32F),L===i.HALF_FLOAT&&(j=i.R16F),L===i.UNSIGNED_BYTE&&(j=i.R8),L===i.UNSIGNED_SHORT&&fe&&(j=fe.R16_EXT),L===i.SHORT&&fe&&(j=fe.R16_SNORM_EXT)),v===i.RED_INTEGER&&(L===i.UNSIGNED_BYTE&&(j=i.R8UI),L===i.UNSIGNED_SHORT&&(j=i.R16UI),L===i.UNSIGNED_INT&&(j=i.R32UI),L===i.BYTE&&(j=i.R8I),L===i.SHORT&&(j=i.R16I),L===i.INT&&(j=i.R32I)),v===i.RG&&(L===i.FLOAT&&(j=i.RG32F),L===i.HALF_FLOAT&&(j=i.RG16F),L===i.UNSIGNED_BYTE&&(j=i.RG8),L===i.UNSIGNED_SHORT&&fe&&(j=fe.RG16_EXT),L===i.SHORT&&fe&&(j=fe.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(L===i.UNSIGNED_BYTE&&(j=i.RG8UI),L===i.UNSIGNED_SHORT&&(j=i.RG16UI),L===i.UNSIGNED_INT&&(j=i.RG32UI),L===i.BYTE&&(j=i.RG8I),L===i.SHORT&&(j=i.RG16I),L===i.INT&&(j=i.RG32I)),v===i.RGB_INTEGER&&(L===i.UNSIGNED_BYTE&&(j=i.RGB8UI),L===i.UNSIGNED_SHORT&&(j=i.RGB16UI),L===i.UNSIGNED_INT&&(j=i.RGB32UI),L===i.BYTE&&(j=i.RGB8I),L===i.SHORT&&(j=i.RGB16I),L===i.INT&&(j=i.RGB32I)),v===i.RGBA_INTEGER&&(L===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),L===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),L===i.UNSIGNED_INT&&(j=i.RGBA32UI),L===i.BYTE&&(j=i.RGBA8I),L===i.SHORT&&(j=i.RGBA16I),L===i.INT&&(j=i.RGBA32I)),v===i.RGB&&(L===i.UNSIGNED_SHORT&&fe&&(j=fe.RGB16_EXT),L===i.SHORT&&fe&&(j=fe.RGB16_SNORM_EXT),L===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),L===i.UNSIGNED_INT_10F_11F_11F_REV&&(j=i.R11F_G11F_B10F)),v===i.RGBA){let J=ae?Za:ct.getTransfer(te);L===i.FLOAT&&(j=i.RGBA32F),L===i.HALF_FLOAT&&(j=i.RGBA16F),L===i.UNSIGNED_BYTE&&(j=J===wt?i.SRGB8_ALPHA8:i.RGBA8),L===i.UNSIGNED_SHORT&&fe&&(j=fe.RGBA16_EXT),L===i.SHORT&&fe&&(j=fe.RGBA16_SNORM_EXT),L===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),L===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function D(S,v){let L;return S?v===null||v===bi||v===zo?L=i.DEPTH24_STENCIL8:v===xi?L=i.DEPTH32F_STENCIL8:v===Vo&&(L=i.DEPTH24_STENCIL8,Le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===bi||v===zo?L=i.DEPTH_COMPONENT24:v===xi?L=i.DEPTH_COMPONENT32F:v===Vo&&(L=i.DEPTH_COMPONENT16),L}function E(S,v){return f(S)===!0||S.isFramebufferTexture&&S.minFilter!==an&&S.minFilter!==dn?Math.log2(Math.max(v.width,v.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?v.mipmaps.length:1}function R(S){let v=S.target;v.removeEventListener("dispose",R),C(v),v.isVideoTexture&&u.delete(v),v.isHTMLTexture&&h.delete(v)}function _(S){let v=S.target;v.removeEventListener("dispose",_),T(v)}function C(S){let v=n.get(S);if(v.__webglInit===void 0)return;let L=S.source,Z=p.get(L);if(Z){let te=Z[v.__cacheKey];te.usedTimes--,te.usedTimes===0&&N(S),Object.keys(Z).length===0&&p.delete(L)}n.remove(S)}function N(S){let v=n.get(S);i.deleteTexture(v.__webglTexture);let L=S.source,Z=p.get(L);delete Z[v.__cacheKey],o.memory.textures--}function T(S){let v=n.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),n.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(v.__webglFramebuffer[Z]))for(let te=0;te<v.__webglFramebuffer[Z].length;te++)i.deleteFramebuffer(v.__webglFramebuffer[Z][te]);else i.deleteFramebuffer(v.__webglFramebuffer[Z]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[Z])}else{if(Array.isArray(v.__webglFramebuffer))for(let Z=0;Z<v.__webglFramebuffer.length;Z++)i.deleteFramebuffer(v.__webglFramebuffer[Z]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Z=0;Z<v.__webglColorRenderbuffer.length;Z++)v.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[Z]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let L=S.textures;for(let Z=0,te=L.length;Z<te;Z++){let ae=n.get(L[Z]);ae.__webglTexture&&(i.deleteTexture(ae.__webglTexture),o.memory.textures--),n.remove(L[Z])}n.remove(S)}let U=0;function $(){U=0}function K(){return U}function F(S){U=S}function H(){let S=U;return S>=r.maxTextures&&Le("WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+r.maxTextures),U+=1,S}function k(S){let v=[];return v.push(S.wrapS),v.push(S.wrapT),v.push(S.wrapR||0),v.push(S.magFilter),v.push(S.minFilter),v.push(S.anisotropy),v.push(S.internalFormat),v.push(S.format),v.push(S.type),v.push(S.generateMipmaps),v.push(S.premultiplyAlpha),v.push(S.flipY),v.push(S.unpackAlignment),v.push(S.colorSpace),v.join()}function ne(S,v){let L=n.get(S);if(S.isVideoTexture&&kt(S),S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&L.__version!==S.version){let Z=S.image;if(Z===null)Le("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)Le("WebGLRenderer: Texture marked for update but image is incomplete");else{ke(L,S,v);return}}else S.isExternalTexture&&(L.__webglTexture=S.sourceTexture?S.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,L.__webglTexture,i.TEXTURE0+v)}function se(S,v){let L=n.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&L.__version!==S.version){ke(L,S,v);return}else S.isExternalTexture&&(L.__webglTexture=S.sourceTexture?S.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,L.__webglTexture,i.TEXTURE0+v)}function ge(S,v){let L=n.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&L.__version!==S.version){ke(L,S,v);return}e.bindTexture(i.TEXTURE_3D,L.__webglTexture,i.TEXTURE0+v)}function Ae(S,v){let L=n.get(S);if(S.isCubeDepthTexture!==!0&&S.version>0&&L.__version!==S.version){je(L,S,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+v)}let Ie={[wu]:i.REPEAT,[Li]:i.CLAMP_TO_EDGE,[Mu]:i.MIRRORED_REPEAT},dt={[an]:i.NEAREST,[x0]:i.NEAREST_MIPMAP_NEAREST,[vc]:i.NEAREST_MIPMAP_LINEAR,[dn]:i.LINEAR,[Ju]:i.LINEAR_MIPMAP_NEAREST,[Yr]:i.LINEAR_MIPMAP_LINEAR},Et={[M0]:i.NEVER,[D0]:i.ALWAYS,[E0]:i.LESS,[Nd]:i.LEQUAL,[C0]:i.EQUAL,[Ld]:i.GEQUAL,[A0]:i.GREATER,[T0]:i.NOTEQUAL};function Ye(S,v){if(v.type===xi&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===dn||v.magFilter===Ju||v.magFilter===vc||v.magFilter===Yr||v.minFilter===dn||v.minFilter===Ju||v.minFilter===vc||v.minFilter===Yr)&&Le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(S,i.TEXTURE_WRAP_S,Ie[v.wrapS]),i.texParameteri(S,i.TEXTURE_WRAP_T,Ie[v.wrapT]),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,Ie[v.wrapR]),i.texParameteri(S,i.TEXTURE_MAG_FILTER,dt[v.magFilter]),i.texParameteri(S,i.TEXTURE_MIN_FILTER,dt[v.minFilter]),v.compareFunction&&(i.texParameteri(S,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(S,i.TEXTURE_COMPARE_FUNC,Et[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===an||v.minFilter!==vc&&v.minFilter!==Yr||v.type===xi&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let L=t.get("EXT_texture_filter_anisotropic");i.texParameterf(S,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Q(S,v){let L=!1;S.__webglInit===void 0&&(S.__webglInit=!0,v.addEventListener("dispose",R));let Z=v.source,te=p.get(Z);te===void 0&&(te={},p.set(Z,te));let ae=k(v);if(ae!==S.__cacheKey){te[ae]===void 0&&(te[ae]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,L=!0),te[ae].usedTimes++;let fe=te[S.__cacheKey];fe!==void 0&&(te[S.__cacheKey].usedTimes--,fe.usedTimes===0&&N(v)),S.__cacheKey=ae,S.__webglTexture=te[ae].texture}return L}function ye(S,v,L){return Math.floor(Math.floor(S/L)/v)}function ue(S,v,L,Z){let ae=S.updateRanges;if(ae.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,L,Z,v.data);else{ae.sort((we,de)=>we.start-de.start);let fe=0;for(let we=1;we<ae.length;we++){let de=ae[fe],ce=ae[we],Ge=de.start+de.count,Ze=ye(ce.start,v.width,4),pt=ye(de.start,v.width,4);ce.start<=Ge+1&&Ze===pt&&ye(ce.start+ce.count-1,v.width,4)===Ze?de.count=Math.max(de.count,ce.start+ce.count-de.start):(++fe,ae[fe]=ce)}ae.length=fe+1;let j=e.getParameter(i.UNPACK_ROW_LENGTH),J=e.getParameter(i.UNPACK_SKIP_PIXELS),be=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let we=0,de=ae.length;we<de;we++){let ce=ae[we],Ge=Math.floor(ce.start/4),Ze=Math.ceil(ce.count/4),pt=Ge%v.width,I=Math.floor(Ge/v.width),le=Ze,Y=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,pt),e.pixelStorei(i.UNPACK_SKIP_ROWS,I),e.texSubImage2D(i.TEXTURE_2D,0,pt,I,le,Y,L,Z,v.data)}S.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,j),e.pixelStorei(i.UNPACK_SKIP_PIXELS,J),e.pixelStorei(i.UNPACK_SKIP_ROWS,be)}}function ke(S,v,L){let Z=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Z=i.TEXTURE_3D);let te=Q(S,v),ae=v.source;e.bindTexture(Z,S.__webglTexture,i.TEXTURE0+L);let fe=n.get(ae);if(ae.version!==fe.__version||te===!0){if(e.activeTexture(i.TEXTURE0+L),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let Y=ct.getPrimaries(ct.workingColorSpace),xe=v.colorSpace===ur?null:ct.getPrimaries(v.colorSpace),he=v.colorSpace===ur||Y===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,he)}e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let J=m(v.image,!1,r.maxTextureSize);J=pe(v,J);let be=s.convert(v.format,v.colorSpace),we=s.convert(v.type),de=w(v.internalFormat,be,we,v.normalized,v.colorSpace,v.isVideoTexture);Ye(Z,v);let ce,Ge=v.mipmaps,Ze=v.isVideoTexture!==!0,pt=fe.__version===void 0||te===!0,I=ae.dataReady,le=E(v,J);if(v.isDepthTexture)de=D(v.format===Zr,v.type),pt&&(Ze?e.texStorage2D(i.TEXTURE_2D,1,de,J.width,J.height):e.texImage2D(i.TEXTURE_2D,0,de,J.width,J.height,0,be,we,null));else if(v.isDataTexture)if(Ge.length>0){Ze&&pt&&e.texStorage2D(i.TEXTURE_2D,le,de,Ge[0].width,Ge[0].height);for(let Y=0,xe=Ge.length;Y<xe;Y++)ce=Ge[Y],Ze?I&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,ce.width,ce.height,be,we,ce.data):e.texImage2D(i.TEXTURE_2D,Y,de,ce.width,ce.height,0,be,we,ce.data);v.generateMipmaps=!1}else Ze?(pt&&e.texStorage2D(i.TEXTURE_2D,le,de,J.width,J.height),I&&ue(v,J,be,we)):e.texImage2D(i.TEXTURE_2D,0,de,J.width,J.height,0,be,we,J.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ze&&pt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,le,de,Ge[0].width,Ge[0].height,J.depth);for(let Y=0,xe=Ge.length;Y<xe;Y++)if(ce=Ge[Y],v.format!==ci)if(be!==null)if(Ze){if(I)if(v.layerUpdates.size>0){let he=Vp(ce.width,ce.height,v.format,v.type);for(let ee of v.layerUpdates){let De=ce.data.subarray(ee*he/ce.data.BYTES_PER_ELEMENT,(ee+1)*he/ce.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,ee,ce.width,ce.height,1,be,De)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,ce.width,ce.height,J.depth,be,ce.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,de,ce.width,ce.height,J.depth,0,ce.data,0,0);else Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ze?I&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,ce.width,ce.height,J.depth,be,we,ce.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Y,de,ce.width,ce.height,J.depth,0,be,we,ce.data)}else{Ze&&pt&&e.texStorage2D(i.TEXTURE_2D,le,de,Ge[0].width,Ge[0].height);for(let Y=0,xe=Ge.length;Y<xe;Y++)ce=Ge[Y],v.format!==ci?be!==null?Ze?I&&e.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,ce.width,ce.height,be,ce.data):e.compressedTexImage2D(i.TEXTURE_2D,Y,de,ce.width,ce.height,0,ce.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?I&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,ce.width,ce.height,be,we,ce.data):e.texImage2D(i.TEXTURE_2D,Y,de,ce.width,ce.height,0,be,we,ce.data)}else if(v.isDataArrayTexture)if(Ze){if(pt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,le,de,J.width,J.height,J.depth),I)if(v.layerUpdates.size>0){let Y=Vp(J.width,J.height,v.format,v.type);for(let xe of v.layerUpdates){let he=J.data.subarray(xe*Y/J.data.BYTES_PER_ELEMENT,(xe+1)*Y/J.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,xe,J.width,J.height,1,be,we,he)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,be,we,J.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,de,J.width,J.height,J.depth,0,be,we,J.data);else if(v.isData3DTexture)Ze?(pt&&e.texStorage3D(i.TEXTURE_3D,le,de,J.width,J.height,J.depth),I&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,be,we,J.data)):e.texImage3D(i.TEXTURE_3D,0,de,J.width,J.height,J.depth,0,be,we,J.data);else if(v.isFramebufferTexture){if(pt)if(Ze)e.texStorage2D(i.TEXTURE_2D,le,de,J.width,J.height);else{let Y=J.width,xe=J.height;for(let he=0;he<le;he++)e.texImage2D(i.TEXTURE_2D,he,de,Y,xe,0,be,we,null),Y>>=1,xe>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){let Y=i.canvas;if(Y.hasAttribute("layoutsubtree")||Y.setAttribute("layoutsubtree","true"),J.parentNode!==Y){Y.appendChild(J),h.add(v),Y.onpaint=Xe=>{let qt=Xe.changedElements;for(let At of h)qt.includes(At.image)&&(At.needsUpdate=!0)},Y.requestPaint();return}let xe=0,he=i.RGBA,ee=i.RGBA,De=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,xe,he,ee,De,J),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ge.length>0){if(Ze&&pt){let Y=Wt(Ge[0]);e.texStorage2D(i.TEXTURE_2D,le,de,Y.width,Y.height)}for(let Y=0,xe=Ge.length;Y<xe;Y++)ce=Ge[Y],Ze?I&&e.texSubImage2D(i.TEXTURE_2D,Y,0,0,be,we,ce):e.texImage2D(i.TEXTURE_2D,Y,de,be,we,ce);v.generateMipmaps=!1}else if(Ze){if(pt){let Y=Wt(J);e.texStorage2D(i.TEXTURE_2D,le,de,Y.width,Y.height)}I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,be,we,J)}else e.texImage2D(i.TEXTURE_2D,0,de,be,we,J);f(v)&&x(Z),fe.__version=ae.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function je(S,v,L){if(v.image.length!==6)return;let Z=Q(S,v),te=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,S.__webglTexture,i.TEXTURE0+L);let ae=n.get(te);if(te.version!==ae.__version||Z===!0){e.activeTexture(i.TEXTURE0+L);let fe=ct.getPrimaries(ct.workingColorSpace),j=v.colorSpace===ur?null:ct.getPrimaries(v.colorSpace),J=v.colorSpace===ur||fe===j?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let be=v.isCompressedTexture||v.image[0].isCompressedTexture,we=v.image[0]&&v.image[0].isDataTexture,de=[];for(let ee=0;ee<6;ee++)!be&&!we?de[ee]=m(v.image[ee],!0,r.maxCubemapSize):de[ee]=we?v.image[ee].image:v.image[ee],de[ee]=pe(v,de[ee]);let ce=de[0],Ge=s.convert(v.format,v.colorSpace),Ze=s.convert(v.type),pt=w(v.internalFormat,Ge,Ze,v.normalized,v.colorSpace),I=v.isVideoTexture!==!0,le=ae.__version===void 0||Z===!0,Y=te.dataReady,xe=E(v,ce);Ye(i.TEXTURE_CUBE_MAP,v);let he;if(be){I&&le&&e.texStorage2D(i.TEXTURE_CUBE_MAP,xe,pt,ce.width,ce.height);for(let ee=0;ee<6;ee++){he=de[ee].mipmaps;for(let De=0;De<he.length;De++){let Xe=he[De];v.format!==ci?Ge!==null?I?Y&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,De,0,0,Xe.width,Xe.height,Ge,Xe.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,De,pt,Xe.width,Xe.height,0,Xe.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,De,0,0,Xe.width,Xe.height,Ge,Ze,Xe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,De,pt,Xe.width,Xe.height,0,Ge,Ze,Xe.data)}}}else{if(he=v.mipmaps,I&&le){he.length>0&&xe++;let ee=Wt(de[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,xe,pt,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(we){I?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,de[ee].width,de[ee].height,Ge,Ze,de[ee].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,pt,de[ee].width,de[ee].height,0,Ge,Ze,de[ee].data);for(let De=0;De<he.length;De++){let qt=he[De].image[ee].image;I?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,De+1,0,0,qt.width,qt.height,Ge,Ze,qt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,De+1,pt,qt.width,qt.height,0,Ge,Ze,qt.data)}}else{I?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Ge,Ze,de[ee]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,pt,Ge,Ze,de[ee]);for(let De=0;De<he.length;De++){let Xe=he[De];I?Y&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,De+1,0,0,Ge,Ze,Xe.image[ee]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,De+1,pt,Ge,Ze,Xe.image[ee])}}}f(v)&&x(i.TEXTURE_CUBE_MAP),ae.__version=te.version,v.onUpdate&&v.onUpdate(v)}S.__version=v.version}function Be(S,v,L,Z,te,ae){let fe=s.convert(L.format,L.colorSpace),j=s.convert(L.type),J=w(L.internalFormat,fe,j,L.normalized,L.colorSpace),be=n.get(v),we=n.get(L);if(we.__renderTarget=v,!be.__hasExternalTextures){let de=Math.max(1,v.width>>ae),ce=Math.max(1,v.height>>ae);te===i.TEXTURE_3D||te===i.TEXTURE_2D_ARRAY?e.texImage3D(te,ae,J,de,ce,v.depth,0,fe,j,null):e.texImage2D(te,ae,J,de,ce,0,fe,j,null)}e.bindFramebuffer(i.FRAMEBUFFER,S),at(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,te,we.__webglTexture,0,Qt(v)):(te===i.TEXTURE_2D||te>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,te,we.__webglTexture,ae),e.bindFramebuffer(i.FRAMEBUFFER,null)}function zt(S,v,L){if(i.bindRenderbuffer(i.RENDERBUFFER,S),v.depthBuffer){let Z=v.depthTexture,te=Z&&Z.isDepthTexture?Z.type:null,ae=D(v.stencilBuffer,te),fe=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;at(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Qt(v),ae,v.width,v.height):L?i.renderbufferStorageMultisample(i.RENDERBUFFER,Qt(v),ae,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ae,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,fe,i.RENDERBUFFER,S)}else{let Z=v.textures;for(let te=0;te<Z.length;te++){let ae=Z[te],fe=s.convert(ae.format,ae.colorSpace),j=s.convert(ae.type),J=w(ae.internalFormat,fe,j,ae.normalized,ae.colorSpace);at(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Qt(v),J,v.width,v.height):L?i.renderbufferStorageMultisample(i.RENDERBUFFER,Qt(v),J,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,J,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ot(S,v,L){let Z=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,S),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let te=n.get(v.depthTexture);if(te.__renderTarget=v,(!te.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Z){if(te.__webglInit===void 0&&(te.__webglInit=!0,v.depthTexture.addEventListener("dispose",R)),te.__webglTexture===void 0){te.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture),Ye(i.TEXTURE_CUBE_MAP,v.depthTexture);let be=s.convert(v.depthTexture.format),we=s.convert(v.depthTexture.type),de;v.depthTexture.format===ki?de=i.DEPTH_COMPONENT24:v.depthTexture.format===Zr&&(de=i.DEPTH24_STENCIL8);for(let ce=0;ce<6;ce++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,de,v.width,v.height,0,be,we,null)}}else ne(v.depthTexture,0);let ae=te.__webglTexture,fe=Qt(v),j=Z?i.TEXTURE_CUBE_MAP_POSITIVE_X+L:i.TEXTURE_2D,J=v.depthTexture.format===Zr?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===ki)at(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,j,ae,0,fe):i.framebufferTexture2D(i.FRAMEBUFFER,J,j,ae,0);else if(v.depthTexture.format===Zr)at(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,j,ae,0,fe):i.framebufferTexture2D(i.FRAMEBUFFER,J,j,ae,0);else throw new Error("Unknown depthTexture format")}function Ct(S){let v=n.get(S),L=S.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==S.depthTexture){let Z=S.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Z){let te=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Z.removeEventListener("dispose",te)};Z.addEventListener("dispose",te),v.__depthDisposeCallback=te}v.__boundDepthTexture=Z}if(S.depthTexture&&!v.__autoAllocateDepthBuffer)if(L)for(let Z=0;Z<6;Z++)ot(v.__webglFramebuffer[Z],S,Z);else{let Z=S.texture.mipmaps;Z&&Z.length>0?ot(v.__webglFramebuffer[0],S,0):ot(v.__webglFramebuffer,S,0)}else if(L){v.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[Z]),v.__webglDepthbuffer[Z]===void 0)v.__webglDepthbuffer[Z]=i.createRenderbuffer(),zt(v.__webglDepthbuffer[Z],S,!1);else{let te=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=v.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,ae)}}else{let Z=S.texture.mipmaps;if(Z&&Z.length>0?e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),zt(v.__webglDepthbuffer,S,!1);else{let te=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ae),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,ae)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Vt(S,v,L){let Z=n.get(S);v!==void 0&&Be(Z.__webglFramebuffer,S,S.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),L!==void 0&&Ct(S)}function st(S){let v=S.texture,L=n.get(S),Z=n.get(v);S.addEventListener("dispose",_);let te=S.textures,ae=S.isWebGLCubeRenderTarget===!0,fe=te.length>1;if(fe||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=v.version,o.memory.textures++),ae){L.__webglFramebuffer=[];for(let j=0;j<6;j++)if(v.mipmaps&&v.mipmaps.length>0){L.__webglFramebuffer[j]=[];for(let J=0;J<v.mipmaps.length;J++)L.__webglFramebuffer[j][J]=i.createFramebuffer()}else L.__webglFramebuffer[j]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){L.__webglFramebuffer=[];for(let j=0;j<v.mipmaps.length;j++)L.__webglFramebuffer[j]=i.createFramebuffer()}else L.__webglFramebuffer=i.createFramebuffer();if(fe)for(let j=0,J=te.length;j<J;j++){let be=n.get(te[j]);be.__webglTexture===void 0&&(be.__webglTexture=i.createTexture(),o.memory.textures++)}if(S.samples>0&&at(S)===!1){L.__webglMultisampledFramebuffer=i.createFramebuffer(),L.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let j=0;j<te.length;j++){let J=te[j];L.__webglColorRenderbuffer[j]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,L.__webglColorRenderbuffer[j]);let be=s.convert(J.format,J.colorSpace),we=s.convert(J.type),de=w(J.internalFormat,be,we,J.normalized,J.colorSpace,S.isXRRenderTarget===!0),ce=Qt(S);i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,de,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+j,i.RENDERBUFFER,L.__webglColorRenderbuffer[j])}i.bindRenderbuffer(i.RENDERBUFFER,null),S.depthBuffer&&(L.__webglDepthRenderbuffer=i.createRenderbuffer(),zt(L.__webglDepthRenderbuffer,S,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ae){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Ye(i.TEXTURE_CUBE_MAP,v);for(let j=0;j<6;j++)if(v.mipmaps&&v.mipmaps.length>0)for(let J=0;J<v.mipmaps.length;J++)Be(L.__webglFramebuffer[j][J],S,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,J);else Be(L.__webglFramebuffer[j],S,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);f(v)&&x(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(fe){for(let j=0,J=te.length;j<J;j++){let be=te[j],we=n.get(be),de=i.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(de=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(de,we.__webglTexture),Ye(de,be),Be(L.__webglFramebuffer,S,be,i.COLOR_ATTACHMENT0+j,de,0),f(be)&&x(de)}e.unbindTexture()}else{let j=i.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(j=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(j,Z.__webglTexture),Ye(j,v),v.mipmaps&&v.mipmaps.length>0)for(let J=0;J<v.mipmaps.length;J++)Be(L.__webglFramebuffer[J],S,v,i.COLOR_ATTACHMENT0,j,J);else Be(L.__webglFramebuffer,S,v,i.COLOR_ATTACHMENT0,j,0);f(v)&&x(j),e.unbindTexture()}S.depthBuffer&&Ct(S)}function Kt(S){let v=S.textures;for(let L=0,Z=v.length;L<Z;L++){let te=v[L];if(f(te)){let ae=M(S),fe=n.get(te).__webglTexture;e.bindTexture(ae,fe),x(ae),e.unbindTexture()}}}let Gt=[],Ln=[];function P(S){if(S.samples>0){if(at(S)===!1){let v=S.textures,L=S.width,Z=S.height,te=i.COLOR_BUFFER_BIT,ae=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=n.get(S),j=v.length>1;if(j)for(let be=0;be<v.length;be++)e.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer);let J=S.texture.mipmaps;J&&J.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let be=0;be<v.length;be++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(te|=i.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(te|=i.STENCIL_BUFFER_BIT)),j){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,fe.__webglColorRenderbuffer[be]);let we=n.get(v[be]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,we,0)}i.blitFramebuffer(0,0,L,Z,0,0,L,Z,te,i.NEAREST),c===!0&&(Gt.length=0,Ln.length=0,Gt.push(i.COLOR_ATTACHMENT0+be),S.depthBuffer&&S.resolveDepthBuffer===!1&&(Gt.push(ae),Ln.push(ae),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ln)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Gt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),j)for(let be=0;be<v.length;be++){e.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,fe.__webglColorRenderbuffer[be]);let we=n.get(v[be]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,we,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&c){let v=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function Qt(S){return Math.min(r.maxSamples,S.samples)}function at(S){let v=n.get(S);return S.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function kt(S){let v=o.render.frame;u.get(S)!==v&&(u.set(S,v),S.update())}function pe(S,v){let L=S.colorSpace,Z=S.format,te=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||L!==Ya&&L!==ur&&(ct.getTransfer(L)===wt?(Z!==ci||te!==Nn)&&Le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ue("WebGLTextures: Unsupported texture color space:",L)),v}function Wt(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(l.width=S.naturalWidth||S.width,l.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(l.width=S.displayWidth,l.height=S.displayHeight):(l.width=S.width,l.height=S.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=$,this.getTextureUnits=K,this.setTextureUnits=F,this.setTexture2D=ne,this.setTexture2DArray=se,this.setTexture3D=ge,this.setTextureCube=Ae,this.rebindTextures=Vt,this.setupRenderTarget=st,this.updateRenderTargetMipmap=Kt,this.updateMultisampleRenderTarget=P,this.setupDepthRenderbuffer=Ct,this.setupFrameBufferTexture=Be,this.useMultisampledRTT=at,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function c1(i,t){function e(n,r=ur){let s,o=ct.getTransfer(r);if(n===Nn)return i.UNSIGNED_BYTE;if(n===Qu)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ed)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Dp)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Rp)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ap)return i.BYTE;if(n===Tp)return i.SHORT;if(n===Vo)return i.UNSIGNED_SHORT;if(n===Ku)return i.INT;if(n===bi)return i.UNSIGNED_INT;if(n===xi)return i.FLOAT;if(n===Gi)return i.HALF_FLOAT;if(n===Ip)return i.ALPHA;if(n===Pp)return i.RGB;if(n===ci)return i.RGBA;if(n===ki)return i.DEPTH_COMPONENT;if(n===Zr)return i.DEPTH_STENCIL;if(n===Op)return i.RED;if(n===td)return i.RED_INTEGER;if(n===Jr)return i.RG;if(n===nd)return i.RG_INTEGER;if(n===id)return i.RGBA_INTEGER;if(n===_c||n===yc||n===bc||n===xc)if(o===wt)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===_c)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===yc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===bc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===xc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===_c)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===yc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===bc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===xc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===rd||n===sd||n===od||n===ad)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===rd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===sd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===od)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ad)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===cd||n===ld||n===ud||n===dd||n===hd||n===Sc||n===fd)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===cd||n===ld)return o===wt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ud)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===dd)return s.COMPRESSED_R11_EAC;if(n===hd)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Sc)return s.COMPRESSED_RG11_EAC;if(n===fd)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===pd||n===md||n===gd||n===vd||n===_d||n===yd||n===bd||n===xd||n===Sd||n===wd||n===Md||n===Ed||n===Cd||n===Ad)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===pd)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===md)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===gd)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===vd)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===_d)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===yd)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===bd)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===xd)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Sd)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===wd)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Md)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ed)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Cd)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ad)return o===wt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Td||n===Dd||n===Rd)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Td)return o===wt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Dd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Rd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Id||n===Pd||n===wc||n===Od)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Id)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Pd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===wc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Od)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===zo?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var l1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,u1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,em=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new ic(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Yn({vertexShader:l1,fragmentShader:u1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Tn(new rc(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},tm=class extends Ui{constructor(t,e){super();let n=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,p=null,g=null,b=typeof XRWebGLBinding<"u",m=new em,f={},x=e.getContextAttributes(),M=null,w=null,D=[],E=[],R=new vt,_=null,C=new un;C.viewport=new Ht;let N=new un;N.viewport=new Ht;let T=[C,N],U=new qu,$=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ye=D[Q];return ye===void 0&&(ye=new Fo,D[Q]=ye),ye.getTargetRaySpace()},this.getControllerGrip=function(Q){let ye=D[Q];return ye===void 0&&(ye=new Fo,D[Q]=ye),ye.getGripSpace()},this.getHand=function(Q){let ye=D[Q];return ye===void 0&&(ye=new Fo,D[Q]=ye),ye.getHandSpace()};function F(Q){let ye=E.indexOf(Q.inputSource);if(ye===-1)return;let ue=D[ye];ue!==void 0&&(ue.update(Q.inputSource,Q.frame,l||o),ue.dispatchEvent({type:Q.type,data:Q.inputSource}))}function H(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",k);for(let Q=0;Q<D.length;Q++){let ye=E[Q];ye!==null&&(E[Q]=null,D[Q].disconnect(ye))}$=null,K=null,m.reset();for(let Q in f)delete f[Q];t.setRenderTarget(M),p=null,d=null,h=null,r=null,w=null,Ye.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,n.isPresenting===!0&&Le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,n.isPresenting===!0&&Le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Q){l=Q},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h===null&&b&&(h=new XRWebGLBinding(r,e)),h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(M=t.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",H),r.addEventListener("inputsourceschange",k),x.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(R),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let ue=null,ke=null,je=null;x.depth&&(je=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ue=x.stencil?Zr:ki,ke=x.stencil?zo:bi);let Be={colorFormat:e.RGBA8,depthFormat:je,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(Be),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),w=new qn(d.textureWidth,d.textureHeight,{format:ci,type:Nn,depthTexture:new lr(d.textureWidth,d.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let ue={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,e,ue),r.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new qn(p.framebufferWidth,p.framebufferHeight,{format:ci,type:Nn,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),Ye.setContext(r),Ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function k(Q){for(let ye=0;ye<Q.removed.length;ye++){let ue=Q.removed[ye],ke=E.indexOf(ue);ke>=0&&(E[ke]=null,D[ke].disconnect(ue))}for(let ye=0;ye<Q.added.length;ye++){let ue=Q.added[ye],ke=E.indexOf(ue);if(ke===-1){for(let Be=0;Be<D.length;Be++)if(Be>=E.length){E.push(ue),ke=Be;break}else if(E[Be]===null){E[Be]=ue,ke=Be;break}if(ke===-1)break}let je=D[ke];je&&je.connect(ue)}}let ne=new z,se=new z;function ge(Q,ye,ue){ne.setFromMatrixPosition(ye.matrixWorld),se.setFromMatrixPosition(ue.matrixWorld);let ke=ne.distanceTo(se),je=ye.projectionMatrix.elements,Be=ue.projectionMatrix.elements,zt=je[14]/(je[10]-1),ot=je[14]/(je[10]+1),Ct=(je[9]+1)/je[5],Vt=(je[9]-1)/je[5],st=(je[8]-1)/je[0],Kt=(Be[8]+1)/Be[0],Gt=zt*st,Ln=zt*Kt,P=ke/(-st+Kt),Qt=P*-st;if(ye.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Qt),Q.translateZ(P),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),je[10]===-1)Q.projectionMatrix.copy(ye.projectionMatrix),Q.projectionMatrixInverse.copy(ye.projectionMatrixInverse);else{let at=zt+P,kt=ot+P,pe=Gt-Qt,Wt=Ln+(ke-Qt),S=Ct*ot/kt*at,v=Vt*ot/kt*at;Q.projectionMatrix.makePerspective(pe,Wt,S,v,at,kt),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function Ae(Q,ye){ye===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ye.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;let ye=Q.near,ue=Q.far;m.texture!==null&&(m.depthNear>0&&(ye=m.depthNear),m.depthFar>0&&(ue=m.depthFar)),U.near=N.near=C.near=ye,U.far=N.far=C.far=ue,($!==U.near||K!==U.far)&&(r.updateRenderState({depthNear:U.near,depthFar:U.far}),$=U.near,K=U.far),U.layers.mask=Q.layers.mask|6,C.layers.mask=U.layers.mask&-5,N.layers.mask=U.layers.mask&-3;let ke=Q.parent,je=U.cameras;Ae(U,ke);for(let Be=0;Be<je.length;Be++)Ae(je[Be],ke);je.length===2?ge(U,C,N):U.projectionMatrix.copy(C.projectionMatrix),Ie(Q,U,ke)};function Ie(Q,ye,ue){ue===null?Q.matrix.copy(ye.matrixWorld):(Q.matrix.copy(ue.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ye.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ye.projectionMatrix),Q.projectionMatrixInverse.copy(ye.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Au*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(Q){c=Q,d!==null&&(d.fixedFoveation=Q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(Q){return f[Q]};let dt=null;function Et(Q,ye){if(u=ye.getViewerPose(l||o),g=ye,u!==null){let ue=u.views;p!==null&&(t.setRenderTargetFramebuffer(w,p.framebuffer),t.setRenderTarget(w));let ke=!1;ue.length!==U.cameras.length&&(U.cameras.length=0,ke=!0);for(let ot=0;ot<ue.length;ot++){let Ct=ue[ot],Vt=null;if(p!==null)Vt=p.getViewport(Ct);else{let Kt=h.getViewSubImage(d,Ct);Vt=Kt.viewport,ot===0&&(t.setRenderTargetTextures(w,Kt.colorTexture,Kt.depthStencilTexture),t.setRenderTarget(w))}let st=T[ot];st===void 0&&(st=new un,st.layers.enable(ot),st.viewport=new Ht,T[ot]=st),st.matrix.fromArray(Ct.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray(Ct.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(Vt.x,Vt.y,Vt.width,Vt.height),ot===0&&(U.matrix.copy(st.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),ke===!0&&U.cameras.push(st)}let je=r.enabledFeatures;if(je&&je.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&b){h=n.getBinding();let ot=h.getDepthInformation(ue[0]);ot&&ot.isValid&&ot.texture&&m.init(ot,r.renderState)}if(je&&je.includes("camera-access")&&b){t.state.unbindTexture(),h=n.getBinding();for(let ot=0;ot<ue.length;ot++){let Ct=ue[ot].camera;if(Ct){let Vt=f[Ct];Vt||(Vt=new ic,f[Ct]=Vt);let st=h.getCameraImage(Ct);Vt.sourceTexture=st}}}}for(let ue=0;ue<D.length;ue++){let ke=E[ue],je=D[ue];ke!==null&&je!==void 0&&je.update(ke,ye,l||o)}dt&&dt(Q,ye),ye.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ye}),g=null}let Ye=new sy;Ye.setAnimationLoop(Et),this.setAnimationLoop=function(Q){dt=Q},this.dispose=function(){}}},d1=new $t,dy=new We;dy.set(-1,0,0,0,1,0,0,0,1);function h1(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Lp(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,x,M,w){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(m,f):f.isMeshLambertMaterial?(s(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(m,f),h(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,w)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),b(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?c(m,f,x,M):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===hn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===hn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let x=t.get(f),M=x.envMap,w=x.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(d1.makeRotationFromEuler(w)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(dy),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,x,M){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*x,m.scale.value=M*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,x){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===hn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function b(m,f){let x=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function f1(i,t,e,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,M){let w=M.program;n.uniformBlockBinding(x,w)}function l(x,M){let w=r[x.id];w===void 0&&(g(x),w=u(x),r[x.id]=w,x.addEventListener("dispose",m));let D=M.program;n.updateUBOMapping(x,D);let E=t.render.frame;s[x.id]!==E&&(d(x),s[x.id]=E)}function u(x){let M=h();x.__bindingPointIndex=M;let w=i.createBuffer(),D=x.__size,E=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,D,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,w),w}function h(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return Ue("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){let M=r[x.id],w=x.uniforms,D=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let E=0,R=w.length;E<R;E++){let _=Array.isArray(w[E])?w[E]:[w[E]];for(let C=0,N=_.length;C<N;C++){let T=_[C];if(p(T,E,C,D)===!0){let U=T.__offset,$=Array.isArray(T.value)?T.value:[T.value],K=0;for(let F=0;F<$.length;F++){let H=$[F],k=b(H);typeof H=="number"||typeof H=="boolean"?(T.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,U+K,T.__data)):H.isMatrix3?(T.__data[0]=H.elements[0],T.__data[1]=H.elements[1],T.__data[2]=H.elements[2],T.__data[3]=0,T.__data[4]=H.elements[3],T.__data[5]=H.elements[4],T.__data[6]=H.elements[5],T.__data[7]=0,T.__data[8]=H.elements[6],T.__data[9]=H.elements[7],T.__data[10]=H.elements[8],T.__data[11]=0):ArrayBuffer.isView(H)?T.__data.set(new H.constructor(H.buffer,H.byteOffset,T.__data.length)):(H.toArray(T.__data,K),K+=k.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(x,M,w,D){let E=x.value,R=M+"_"+w;if(D[R]===void 0)return typeof E=="number"||typeof E=="boolean"?D[R]=E:ArrayBuffer.isView(E)?D[R]=E.slice():D[R]=E.clone(),!0;{let _=D[R];if(typeof E=="number"||typeof E=="boolean"){if(_!==E)return D[R]=E,!0}else{if(ArrayBuffer.isView(E))return!0;if(_.equals(E)===!1)return _.copy(E),!0}}return!1}function g(x){let M=x.uniforms,w=0,D=16;for(let R=0,_=M.length;R<_;R++){let C=Array.isArray(M[R])?M[R]:[M[R]];for(let N=0,T=C.length;N<T;N++){let U=C[N],$=Array.isArray(U.value)?U.value:[U.value];for(let K=0,F=$.length;K<F;K++){let H=$[K],k=b(H),ne=w%D,se=ne%k.boundary,ge=ne+se;w+=se,ge!==0&&D-ge<k.storage&&(w+=D-ge),U.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=w,w+=k.storage}}}let E=w%D;return E>0&&(w+=D-E),x.__size=w,x.__cache={},this}function b(x){let M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?Le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(M.boundary=16,M.storage=x.byteLength):Le("WebGLRenderer: Unsupported uniform value type.",x),M}function m(x){let M=x.target;M.removeEventListener("dispose",m);let w=o.indexOf(M.__bindingPointIndex);o.splice(w,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function f(){for(let x in r)i.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:c,update:l,dispose:f}}var p1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Wi=null;function m1(){return Wi===null&&(Wi=new Pu(p1,16,16,Jr,Gi),Wi.name="DFG_LUT",Wi.minFilter=dn,Wi.magFilter=dn,Wi.wrapS=Li,Wi.wrapT=Li,Wi.generateMipmaps=!1,Wi.needsUpdate=!0),Wi}var zd=class{constructor(t={}){let{canvas:e=R0(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:p=Nn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let b=p,m=new Set([id,nd,td]),f=new Set([Nn,bi,Vo,zo,Qu,ed]),x=new Uint32Array(4),M=new Int32Array(4),w=new z,D=null,E=null,R=[],_=[],C=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let N=this,T=!1,U=null;this._outputColorSpace=Xn;let $=0,K=0,F=null,H=-1,k=null,ne=new Ht,se=new Ht,ge=null,Ae=new ut(0),Ie=0,dt=e.width,Et=e.height,Ye=1,Q=null,ye=null,ue=new Ht(0,0,dt,Et),ke=new Ht(0,0,dt,Et),je=!1,Be=new Lo,zt=!1,ot=!1,Ct=new $t,Vt=new z,st=new Ht,Kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Gt=!1;function Ln(){return F===null?Ye:1}let P=n;function Qt(y,O){return e.getContext(y,O)}try{let y={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"184"}`),e.addEventListener("webglcontextlost",ee,!1),e.addEventListener("webglcontextrestored",De,!1),e.addEventListener("webglcontextcreationerror",Xe,!1),P===null){let O="webgl2";if(P=Qt(O,y),P===null)throw Qt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw Ue("WebGLRenderer: "+y.message),y}let at,kt,pe,Wt,S,v,L,Z,te,ae,fe,j,J,be,we,de,ce,Ge,Ze,pt,I,le,Y;function xe(){at=new SA(P),at.init(),I=new c1(P,at),kt=new pA(P,at,t,I),pe=new o1(P,at),kt.reversedDepthBuffer&&d&&pe.buffers.depth.setReversed(!0),Wt=new EA(P),S=new XT,v=new a1(P,at,pe,S,kt,I,Wt),L=new xA(N),Z=new DM(P),le=new hA(P,Z),te=new wA(P,Z,Wt,le),ae=new AA(P,te,Z,le,Wt),Ge=new CA(P,kt,v),we=new mA(S),fe=new jT(N,L,at,kt,le,we),j=new h1(N,S),J=new qT,be=new e1(at),ce=new dA(N,L,pe,ae,g,c),de=new s1(N,ae,kt),Y=new f1(P,Wt,kt,pe),Ze=new fA(P,at,Wt),pt=new MA(P,at,Wt),Wt.programs=fe.programs,N.capabilities=kt,N.extensions=at,N.properties=S,N.renderLists=J,N.shadowMap=de,N.state=pe,N.info=Wt}xe(),b!==Nn&&(C=new DA(b,e.width,e.height,r,s));let he=new tm(N,P);this.xr=he,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let y=at.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=at.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return Ye},this.setPixelRatio=function(y){y!==void 0&&(Ye=y,this.setSize(dt,Et,!1))},this.getSize=function(y){return y.set(dt,Et)},this.setSize=function(y,O,G=!0){if(he.isPresenting){Le("WebGLRenderer: Can't change size while VR device is presenting.");return}dt=y,Et=O,e.width=Math.floor(y*Ye),e.height=Math.floor(O*Ye),G===!0&&(e.style.width=y+"px",e.style.height=O+"px"),C!==null&&C.setSize(e.width,e.height),this.setViewport(0,0,y,O)},this.getDrawingBufferSize=function(y){return y.set(dt*Ye,Et*Ye).floor()},this.setDrawingBufferSize=function(y,O,G){dt=y,Et=O,Ye=G,e.width=Math.floor(y*G),e.height=Math.floor(O*G),this.setViewport(0,0,y,O)},this.setEffects=function(y){if(b===Nn){Ue("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let O=0;O<y.length;O++)if(y[O].isOutputPass===!0){Le("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(ne)},this.getViewport=function(y){return y.copy(ue)},this.setViewport=function(y,O,G,B){y.isVector4?ue.set(y.x,y.y,y.z,y.w):ue.set(y,O,G,B),pe.viewport(ne.copy(ue).multiplyScalar(Ye).round())},this.getScissor=function(y){return y.copy(ke)},this.setScissor=function(y,O,G,B){y.isVector4?ke.set(y.x,y.y,y.z,y.w):ke.set(y,O,G,B),pe.scissor(se.copy(ke).multiplyScalar(Ye).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(y){pe.setScissorTest(je=y)},this.setOpaqueSort=function(y){Q=y},this.setTransparentSort=function(y){ye=y},this.getClearColor=function(y){return y.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor(...arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha(...arguments)},this.clear=function(y=!0,O=!0,G=!0){let B=0;if(y){let V=!1;if(F!==null){let _e=F.texture.format;V=m.has(_e)}if(V){let _e=F.texture.type,Me=f.has(_e),ve=ce.getClearColor(),Te=ce.getClearAlpha(),Re=ve.r,$e=ve.g,Qe=ve.b;Me?(x[0]=Re,x[1]=$e,x[2]=Qe,x[3]=Te,P.clearBufferuiv(P.COLOR,0,x)):(M[0]=Re,M[1]=$e,M[2]=Qe,M[3]=Te,P.clearBufferiv(P.COLOR,0,M))}else B|=P.COLOR_BUFFER_BIT}O&&(B|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(B|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&P.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),U=y},this.dispose=function(){e.removeEventListener("webglcontextlost",ee,!1),e.removeEventListener("webglcontextrestored",De,!1),e.removeEventListener("webglcontextcreationerror",Xe,!1),ce.dispose(),J.dispose(),be.dispose(),S.dispose(),L.dispose(),ae.dispose(),le.dispose(),Y.dispose(),fe.dispose(),he.dispose(),he.removeEventListener("sessionstart",im),he.removeEventListener("sessionend",rm),ts.stop()};function ee(y){y.preventDefault(),Np("WebGLRenderer: Context Lost."),T=!0}function De(){Np("WebGLRenderer: Context Restored."),T=!1;let y=Wt.autoReset,O=de.enabled,G=de.autoUpdate,B=de.needsUpdate,V=de.type;xe(),Wt.autoReset=y,de.enabled=O,de.autoUpdate=G,de.needsUpdate=B,de.type=V}function Xe(y){Ue("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function qt(y){let O=y.target;O.removeEventListener("dispose",qt),At(O)}function At(y){qi(y),S.remove(y)}function qi(y){let O=S.get(y).programs;O!==void 0&&(O.forEach(function(G){fe.releaseProgram(G)}),y.isShaderMaterial&&fe.releaseShaderCache(y))}this.renderBufferDirect=function(y,O,G,B,V,_e){O===null&&(O=Kt);let Me=V.isMesh&&V.matrixWorld.determinant()<0,ve=Ty(y,O,G,B,V);pe.setMaterial(B,Me);let Te=G.index,Re=1;if(B.wireframe===!0){if(Te=te.getWireframeAttribute(G),Te===void 0)return;Re=2}let $e=G.drawRange,Qe=G.attributes.position,Pe=$e.start*Re,Tt=($e.start+$e.count)*Re;_e!==null&&(Pe=Math.max(Pe,_e.start*Re),Tt=Math.min(Tt,(_e.start+_e.count)*Re)),Te!==null?(Pe=Math.max(Pe,0),Tt=Math.min(Tt,Te.count)):Qe!=null&&(Pe=Math.max(Pe,0),Tt=Math.min(Tt,Qe.count));let Yt=Tt-Pe;if(Yt<0||Yt===1/0)return;le.setup(V,B,ve,G,Te);let jt,It=Ze;if(Te!==null&&(jt=Z.get(Te),It=pt,It.setIndex(jt)),V.isMesh)B.wireframe===!0?(pe.setLineWidth(B.wireframeLinewidth*Ln()),It.setMode(P.LINES)):It.setMode(P.TRIANGLES);else if(V.isLine){let fn=B.linewidth;fn===void 0&&(fn=1),pe.setLineWidth(fn*Ln()),V.isLineSegments?It.setMode(P.LINES):V.isLineLoop?It.setMode(P.LINE_LOOP):It.setMode(P.LINE_STRIP)}else V.isPoints?It.setMode(P.POINTS):V.isSprite&&It.setMode(P.TRIANGLES);if(V.isBatchedMesh)if(at.get("WEBGL_multi_draw"))It.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let fn=V._multiDrawStarts,Se=V._multiDrawCounts,kn=V._multiDrawCount,ht=Te?Z.get(Te).bytesPerElement:1,Jn=S.get(B).currentProgram.getUniforms();for(let wi=0;wi<kn;wi++)Jn.setValue(P,"_gl_DrawID",wi),It.render(fn[wi]/ht,Se[wi])}else if(V.isInstancedMesh)It.renderInstances(Pe,Yt,V.count);else if(G.isInstancedBufferGeometry){let fn=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Se=Math.min(G.instanceCount,fn);It.renderInstances(Pe,Yt,Se)}else It.render(Pe,Yt)};function Si(y,O,G){y.transparent===!0&&y.side===Vi&&y.forceSinglePass===!1?(y.side=hn,y.needsUpdate=!0,Rc(y,O,G),y.side=cr,y.needsUpdate=!0,Rc(y,O,G),y.side=Vi):Rc(y,O,G)}this.compile=function(y,O,G=null){G===null&&(G=y),E=be.get(G),E.init(O),_.push(E),G.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(E.pushLight(V),V.castShadow&&E.pushShadow(V))}),y!==G&&y.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(E.pushLight(V),V.castShadow&&E.pushShadow(V))}),E.setupLights();let B=new Set;return y.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let _e=V.material;if(_e)if(Array.isArray(_e))for(let Me=0;Me<_e.length;Me++){let ve=_e[Me];Si(ve,G,V),B.add(ve)}else Si(_e,G,V),B.add(_e)}),E=_.pop(),B},this.compileAsync=function(y,O,G=null){let B=this.compile(y,O,G);return new Promise(V=>{function _e(){if(B.forEach(function(Me){S.get(Me).currentProgram.isReady()&&B.delete(Me)}),B.size===0){V(y);return}setTimeout(_e,10)}at.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let Jd=null;function Cy(y){Jd&&Jd(y)}function im(){ts.stop()}function rm(){ts.start()}let ts=new sy;ts.setAnimationLoop(Cy),typeof self<"u"&&ts.setContext(self),this.setAnimationLoop=function(y){Jd=y,he.setAnimationLoop(y),y===null?ts.stop():ts.start()},he.addEventListener("sessionstart",im),he.addEventListener("sessionend",rm),this.render=function(y,O){if(O!==void 0&&O.isCamera!==!0){Ue("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;U!==null&&U.renderStart(y,O);let G=he.enabled===!0&&he.isPresenting===!0,B=C!==null&&(F===null||G)&&C.begin(N,F);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(he.cameraAutoUpdate===!0&&he.updateCamera(O),O=he.getCamera()),y.isScene===!0&&y.onBeforeRender(N,y,O,F),E=be.get(y,_.length),E.init(O),E.state.textureUnits=v.getTextureUnits(),_.push(E),Ct.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Be.setFromProjectionMatrix(Ct,vi,O.reversedDepth),ot=this.localClippingEnabled,zt=we.init(this.clippingPlanes,ot),D=J.get(y,R.length),D.init(),R.push(D),he.enabled===!0&&he.isPresenting===!0){let Me=N.xr.getDepthSensingMesh();Me!==null&&Kd(Me,O,-1/0,N.sortObjects)}Kd(y,O,0,N.sortObjects),D.finish(),N.sortObjects===!0&&D.sort(Q,ye),Gt=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,Gt&&ce.addToRenderList(D,y),this.info.render.frame++,zt===!0&&we.beginShadows();let V=E.state.shadowsArray;if(de.render(V,y,O),zt===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset(),(B&&C.hasRenderPass())===!1){let Me=D.opaque,ve=D.transmissive;if(E.setupLights(),O.isArrayCamera){let Te=O.cameras;if(ve.length>0)for(let Re=0,$e=Te.length;Re<$e;Re++){let Qe=Te[Re];om(Me,ve,y,Qe)}Gt&&ce.render(y);for(let Re=0,$e=Te.length;Re<$e;Re++){let Qe=Te[Re];sm(D,y,Qe,Qe.viewport)}}else ve.length>0&&om(Me,ve,y,O),Gt&&ce.render(y),sm(D,y,O)}F!==null&&K===0&&(v.updateMultisampleRenderTarget(F),v.updateRenderTargetMipmap(F)),B&&C.end(N),y.isScene===!0&&y.onAfterRender(N,y,O),le.resetDefaultState(),H=-1,k=null,_.pop(),_.length>0?(E=_[_.length-1],v.setTextureUnits(E.state.textureUnits),zt===!0&&we.setGlobalState(N.clippingPlanes,E.state.camera)):E=null,R.pop(),R.length>0?D=R[R.length-1]:D=null,U!==null&&U.renderEnd()};function Kd(y,O,G,B){if(y.visible===!1)return;if(y.layers.test(O.layers)){if(y.isGroup)G=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(O);else if(y.isLightProbeGrid)E.pushLightProbeGrid(y);else if(y.isLight)E.pushLight(y),y.castShadow&&E.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Be.intersectsSprite(y)){B&&st.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Ct);let Me=ae.update(y),ve=y.material;ve.visible&&D.push(y,Me,ve,G,st.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Be.intersectsObject(y))){let Me=ae.update(y),ve=y.material;if(B&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),st.copy(y.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),st.copy(Me.boundingSphere.center)),st.applyMatrix4(y.matrixWorld).applyMatrix4(Ct)),Array.isArray(ve)){let Te=Me.groups;for(let Re=0,$e=Te.length;Re<$e;Re++){let Qe=Te[Re],Pe=ve[Qe.materialIndex];Pe&&Pe.visible&&D.push(y,Me,Pe,G,st.z,Qe)}}else ve.visible&&D.push(y,Me,ve,G,st.z,null)}}let _e=y.children;for(let Me=0,ve=_e.length;Me<ve;Me++)Kd(_e[Me],O,G,B)}function sm(y,O,G,B){let{opaque:V,transmissive:_e,transparent:Me}=y;E.setupLightsView(G),zt===!0&&we.setGlobalState(N.clippingPlanes,G),B&&pe.viewport(ne.copy(B)),V.length>0&&Dc(V,O,G),_e.length>0&&Dc(_e,O,G),Me.length>0&&Dc(Me,O,G),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function om(y,O,G,B){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[B.id]===void 0){let Pe=at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[B.id]=new qn(1,1,{generateMipmaps:!0,type:Pe?Gi:Nn,minFilter:Yr,samples:Math.max(4,kt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ct.workingColorSpace})}let _e=E.state.transmissionRenderTarget[B.id],Me=B.viewport||ne;_e.setSize(Me.z*N.transmissionResolutionScale,Me.w*N.transmissionResolutionScale);let ve=N.getRenderTarget(),Te=N.getActiveCubeFace(),Re=N.getActiveMipmapLevel();N.setRenderTarget(_e),N.getClearColor(Ae),Ie=N.getClearAlpha(),Ie<1&&N.setClearColor(16777215,.5),N.clear(),Gt&&ce.render(G);let $e=N.toneMapping;N.toneMapping=yi;let Qe=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),E.setupLightsView(B),zt===!0&&we.setGlobalState(N.clippingPlanes,B),Dc(y,G,B),v.updateMultisampleRenderTarget(_e),v.updateRenderTargetMipmap(_e),at.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let Tt=0,Yt=O.length;Tt<Yt;Tt++){let jt=O[Tt],{object:It,geometry:fn,material:Se,group:kn}=jt;if(Se.side===Vi&&It.layers.test(B.layers)){let ht=Se.side;Se.side=hn,Se.needsUpdate=!0,am(It,G,B,fn,Se,kn),Se.side=ht,Se.needsUpdate=!0,Pe=!0}}Pe===!0&&(v.updateMultisampleRenderTarget(_e),v.updateRenderTargetMipmap(_e))}N.setRenderTarget(ve,Te,Re),N.setClearColor(Ae,Ie),Qe!==void 0&&(B.viewport=Qe),N.toneMapping=$e}function Dc(y,O,G){let B=O.isScene===!0?O.overrideMaterial:null;for(let V=0,_e=y.length;V<_e;V++){let Me=y[V],{object:ve,geometry:Te,group:Re}=Me,$e=Me.material;$e.allowOverride===!0&&B!==null&&($e=B),ve.layers.test(G.layers)&&am(ve,O,G,Te,$e,Re)}}function am(y,O,G,B,V,_e){y.onBeforeRender(N,O,G,B,V,_e),y.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),V.onBeforeRender(N,O,G,B,y,_e),V.transparent===!0&&V.side===Vi&&V.forceSinglePass===!1?(V.side=hn,V.needsUpdate=!0,N.renderBufferDirect(G,O,B,V,y,_e),V.side=cr,V.needsUpdate=!0,N.renderBufferDirect(G,O,B,V,y,_e),V.side=Vi):N.renderBufferDirect(G,O,B,V,y,_e),y.onAfterRender(N,O,G,B,V,_e)}function Rc(y,O,G){O.isScene!==!0&&(O=Kt);let B=S.get(y),V=E.state.lights,_e=E.state.shadowsArray,Me=V.state.version,ve=fe.getParameters(y,V.state,_e,O,G,E.state.lightProbeGridArray),Te=fe.getProgramCacheKey(ve),Re=B.programs;B.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?O.environment:null,B.fog=O.fog;let $e=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;B.envMap=L.get(y.envMap||B.environment,$e),B.envMapRotation=B.environment!==null&&y.envMap===null?O.environmentRotation:y.envMapRotation,Re===void 0&&(y.addEventListener("dispose",qt),Re=new Map,B.programs=Re);let Qe=Re.get(Te);if(Qe!==void 0){if(B.currentProgram===Qe&&B.lightsStateVersion===Me)return lm(y,ve),Qe}else ve.uniforms=fe.getUniforms(y),U!==null&&y.isNodeMaterial&&U.build(y,G,ve),y.onBeforeCompile(ve,N),Qe=fe.acquireProgram(ve,Te),Re.set(Te,Qe),B.uniforms=ve.uniforms;let Pe=B.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Pe.clippingPlanes=we.uniform),lm(y,ve),B.needsLights=Ry(y),B.lightsStateVersion=Me,B.needsLights&&(Pe.ambientLightColor.value=V.state.ambient,Pe.lightProbe.value=V.state.probe,Pe.directionalLights.value=V.state.directional,Pe.directionalLightShadows.value=V.state.directionalShadow,Pe.spotLights.value=V.state.spot,Pe.spotLightShadows.value=V.state.spotShadow,Pe.rectAreaLights.value=V.state.rectArea,Pe.ltc_1.value=V.state.rectAreaLTC1,Pe.ltc_2.value=V.state.rectAreaLTC2,Pe.pointLights.value=V.state.point,Pe.pointLightShadows.value=V.state.pointShadow,Pe.hemisphereLights.value=V.state.hemi,Pe.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Pe.spotLightMatrix.value=V.state.spotLightMatrix,Pe.spotLightMap.value=V.state.spotLightMap,Pe.pointShadowMatrix.value=V.state.pointShadowMatrix),B.lightProbeGrid=E.state.lightProbeGridArray.length>0,B.currentProgram=Qe,B.uniformsList=null,Qe}function cm(y){if(y.uniformsList===null){let O=y.currentProgram.getUniforms();y.uniformsList=Ho.seqWithValue(O.seq,y.uniforms)}return y.uniformsList}function lm(y,O){let G=S.get(y);G.outputColorSpace=O.outputColorSpace,G.batching=O.batching,G.batchingColor=O.batchingColor,G.instancing=O.instancing,G.instancingColor=O.instancingColor,G.instancingMorph=O.instancingMorph,G.skinning=O.skinning,G.morphTargets=O.morphTargets,G.morphNormals=O.morphNormals,G.morphColors=O.morphColors,G.morphTargetsCount=O.morphTargetsCount,G.numClippingPlanes=O.numClippingPlanes,G.numIntersection=O.numClipIntersection,G.vertexAlphas=O.vertexAlphas,G.vertexTangents=O.vertexTangents,G.toneMapping=O.toneMapping}function Ay(y,O){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;w.setFromMatrixPosition(O.matrixWorld);for(let G=0,B=y.length;G<B;G++){let V=y[G];if(V.texture!==null&&V.boundingBox.containsPoint(w))return V}return null}function Ty(y,O,G,B,V){O.isScene!==!0&&(O=Kt),v.resetTextureUnits();let _e=O.fog,Me=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?O.environment:null,ve=F===null?N.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:ct.workingColorSpace,Te=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Re=L.get(B.envMap||Me,Te),$e=B.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Qe=!!G.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Pe=!!G.morphAttributes.position,Tt=!!G.morphAttributes.normal,Yt=!!G.morphAttributes.color,jt=yi;B.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(jt=N.toneMapping);let It=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,fn=It!==void 0?It.length:0,Se=S.get(B),kn=E.state.lights;if(zt===!0&&(ot===!0||y!==k)){let Ut=y===k&&B.id===H;we.setState(B,y,Ut)}let ht=!1;B.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==kn.state.version||Se.outputColorSpace!==ve||V.isBatchedMesh&&Se.batching===!1||!V.isBatchedMesh&&Se.batching===!0||V.isBatchedMesh&&Se.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Se.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Se.instancing===!1||!V.isInstancedMesh&&Se.instancing===!0||V.isSkinnedMesh&&Se.skinning===!1||!V.isSkinnedMesh&&Se.skinning===!0||V.isInstancedMesh&&Se.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Se.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Se.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Se.instancingMorph===!1&&V.morphTexture!==null||Se.envMap!==Re||B.fog===!0&&Se.fog!==_e||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==we.numPlanes||Se.numIntersection!==we.numIntersection)||Se.vertexAlphas!==$e||Se.vertexTangents!==Qe||Se.morphTargets!==Pe||Se.morphNormals!==Tt||Se.morphColors!==Yt||Se.toneMapping!==jt||Se.morphTargetsCount!==fn||!!Se.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(ht=!0):(ht=!0,Se.__version=B.version);let Jn=Se.currentProgram;ht===!0&&(Jn=Rc(B,O,V),U&&B.isNodeMaterial&&U.onUpdateProgram(B,Jn,Se));let wi=!1,hr=!1,Ts=!1,Pt=Jn.getUniforms(),Zt=Se.uniforms;if(pe.useProgram(Jn.program)&&(wi=!0,hr=!0,Ts=!0),B.id!==H&&(H=B.id,hr=!0),Se.needsLights){let Ut=Ay(E.state.lightProbeGridArray,V);Se.lightProbeGrid!==Ut&&(Se.lightProbeGrid=Ut,hr=!0)}if(wi||k!==y){pe.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),Pt.setValue(P,"projectionMatrix",y.projectionMatrix),Pt.setValue(P,"viewMatrix",y.matrixWorldInverse);let pr=Pt.map.cameraPosition;pr!==void 0&&pr.setValue(P,Vt.setFromMatrixPosition(y.matrixWorld)),kt.logarithmicDepthBuffer&&Pt.setValue(P,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Pt.setValue(P,"isOrthographic",y.isOrthographicCamera===!0),k!==y&&(k=y,hr=!0,Ts=!0)}if(Se.needsLights&&(kn.state.directionalShadowMap.length>0&&Pt.setValue(P,"directionalShadowMap",kn.state.directionalShadowMap,v),kn.state.spotShadowMap.length>0&&Pt.setValue(P,"spotShadowMap",kn.state.spotShadowMap,v),kn.state.pointShadowMap.length>0&&Pt.setValue(P,"pointShadowMap",kn.state.pointShadowMap,v)),V.isSkinnedMesh){Pt.setOptional(P,V,"bindMatrix"),Pt.setOptional(P,V,"bindMatrixInverse");let Ut=V.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),Pt.setValue(P,"boneTexture",Ut.boneTexture,v))}V.isBatchedMesh&&(Pt.setOptional(P,V,"batchingTexture"),Pt.setValue(P,"batchingTexture",V._matricesTexture,v),Pt.setOptional(P,V,"batchingIdTexture"),Pt.setValue(P,"batchingIdTexture",V._indirectTexture,v),Pt.setOptional(P,V,"batchingColorTexture"),V._colorsTexture!==null&&Pt.setValue(P,"batchingColorTexture",V._colorsTexture,v));let fr=G.morphAttributes;if((fr.position!==void 0||fr.normal!==void 0||fr.color!==void 0)&&Ge.update(V,G,Jn),(hr||Se.receiveShadow!==V.receiveShadow)&&(Se.receiveShadow=V.receiveShadow,Pt.setValue(P,"receiveShadow",V.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&O.environment!==null&&(Zt.envMapIntensity.value=O.environmentIntensity),Zt.dfgLUT!==void 0&&(Zt.dfgLUT.value=m1()),hr){if(Pt.setValue(P,"toneMappingExposure",N.toneMappingExposure),Se.needsLights&&Dy(Zt,Ts),_e&&B.fog===!0&&j.refreshFogUniforms(Zt,_e),j.refreshMaterialUniforms(Zt,B,Ye,Et,E.state.transmissionRenderTarget[y.id]),Se.needsLights&&Se.lightProbeGrid){let Ut=Se.lightProbeGrid;Zt.probesSH.value=Ut.texture,Zt.probesMin.value.copy(Ut.boundingBox.min),Zt.probesMax.value.copy(Ut.boundingBox.max),Zt.probesResolution.value.copy(Ut.resolution)}Ho.upload(P,cm(Se),Zt,v)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Ho.upload(P,cm(Se),Zt,v),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Pt.setValue(P,"center",V.center),Pt.setValue(P,"modelViewMatrix",V.modelViewMatrix),Pt.setValue(P,"normalMatrix",V.normalMatrix),Pt.setValue(P,"modelMatrix",V.matrixWorld),B.uniformsGroups!==void 0){let Ut=B.uniformsGroups;for(let pr=0,Ds=Ut.length;pr<Ds;pr++){let um=Ut[pr];Y.update(um,Jn),Y.bind(um,Jn)}}return Jn}function Dy(y,O){y.ambientLightColor.needsUpdate=O,y.lightProbe.needsUpdate=O,y.directionalLights.needsUpdate=O,y.directionalLightShadows.needsUpdate=O,y.pointLights.needsUpdate=O,y.pointLightShadows.needsUpdate=O,y.spotLights.needsUpdate=O,y.spotLightShadows.needsUpdate=O,y.rectAreaLights.needsUpdate=O,y.hemisphereLights.needsUpdate=O}function Ry(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(y,O,G){let B=S.get(y);B.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),S.get(y.texture).__webglTexture=O,S.get(y.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:G,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,O){let G=S.get(y);G.__webglFramebuffer=O,G.__useDefaultFramebuffer=O===void 0};let Iy=P.createFramebuffer();this.setRenderTarget=function(y,O=0,G=0){F=y,$=O,K=G;let B=null,V=!1,_e=!1;if(y){let ve=S.get(y);if(ve.__useDefaultFramebuffer!==void 0){pe.bindFramebuffer(P.FRAMEBUFFER,ve.__webglFramebuffer),ne.copy(y.viewport),se.copy(y.scissor),ge=y.scissorTest,pe.viewport(ne),pe.scissor(se),pe.setScissorTest(ge),H=-1;return}else if(ve.__webglFramebuffer===void 0)v.setupRenderTarget(y);else if(ve.__hasExternalTextures)v.rebindTextures(y,S.get(y.texture).__webglTexture,S.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let $e=y.depthTexture;if(ve.__boundDepthTexture!==$e){if($e!==null&&S.has($e)&&(y.width!==$e.image.width||y.height!==$e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");v.setupDepthRenderbuffer(y)}}let Te=y.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(_e=!0);let Re=S.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Re[O])?B=Re[O][G]:B=Re[O],V=!0):y.samples>0&&v.useMultisampledRTT(y)===!1?B=S.get(y).__webglMultisampledFramebuffer:Array.isArray(Re)?B=Re[G]:B=Re,ne.copy(y.viewport),se.copy(y.scissor),ge=y.scissorTest}else ne.copy(ue).multiplyScalar(Ye).floor(),se.copy(ke).multiplyScalar(Ye).floor(),ge=je;if(G!==0&&(B=Iy),pe.bindFramebuffer(P.FRAMEBUFFER,B)&&pe.drawBuffers(y,B),pe.viewport(ne),pe.scissor(se),pe.setScissorTest(ge),V){let ve=S.get(y.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+O,ve.__webglTexture,G)}else if(_e){let ve=O;for(let Te=0;Te<y.textures.length;Te++){let Re=S.get(y.textures[Te]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Te,Re.__webglTexture,G,ve)}}else if(y!==null&&G!==0){let ve=S.get(y.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,ve.__webglTexture,G)}H=-1},this.readRenderTargetPixels=function(y,O,G,B,V,_e,Me,ve=0){if(!(y&&y.isWebGLRenderTarget)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=S.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Me!==void 0&&(Te=Te[Me]),Te){pe.bindFramebuffer(P.FRAMEBUFFER,Te);try{let Re=y.textures[ve],$e=Re.format,Qe=Re.type;if(y.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+ve),!kt.textureFormatReadable($e)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!kt.textureTypeReadable(Qe)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=y.width-B&&G>=0&&G<=y.height-V&&P.readPixels(O,G,B,V,I.convert($e),I.convert(Qe),_e)}finally{let Re=F!==null?S.get(F).__webglFramebuffer:null;pe.bindFramebuffer(P.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(y,O,G,B,V,_e,Me,ve=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=S.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Me!==void 0&&(Te=Te[Me]),Te)if(O>=0&&O<=y.width-B&&G>=0&&G<=y.height-V){pe.bindFramebuffer(P.FRAMEBUFFER,Te);let Re=y.textures[ve],$e=Re.format,Qe=Re.type;if(y.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+ve),!kt.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!kt.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Pe=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Pe),P.bufferData(P.PIXEL_PACK_BUFFER,_e.byteLength,P.STREAM_READ),P.readPixels(O,G,B,V,I.convert($e),I.convert(Qe),0);let Tt=F!==null?S.get(F).__webglFramebuffer:null;pe.bindFramebuffer(P.FRAMEBUFFER,Tt);let Yt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await P0(P,Yt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Pe),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,_e),P.deleteBuffer(Pe),P.deleteSync(Yt),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,O=null,G=0){let B=Math.pow(2,-G),V=Math.floor(y.image.width*B),_e=Math.floor(y.image.height*B),Me=O!==null?O.x:0,ve=O!==null?O.y:0;v.setTexture2D(y,0),P.copyTexSubImage2D(P.TEXTURE_2D,G,0,0,Me,ve,V,_e),pe.unbindTexture()};let Py=P.createFramebuffer(),Oy=P.createFramebuffer();this.copyTextureToTexture=function(y,O,G=null,B=null,V=0,_e=0){let Me,ve,Te,Re,$e,Qe,Pe,Tt,Yt,jt=y.isCompressedTexture?y.mipmaps[_e]:y.image;if(G!==null)Me=G.max.x-G.min.x,ve=G.max.y-G.min.y,Te=G.isBox3?G.max.z-G.min.z:1,Re=G.min.x,$e=G.min.y,Qe=G.isBox3?G.min.z:0;else{let Zt=Math.pow(2,-V);Me=Math.floor(jt.width*Zt),ve=Math.floor(jt.height*Zt),y.isDataArrayTexture?Te=jt.depth:y.isData3DTexture?Te=Math.floor(jt.depth*Zt):Te=1,Re=0,$e=0,Qe=0}B!==null?(Pe=B.x,Tt=B.y,Yt=B.z):(Pe=0,Tt=0,Yt=0);let It=I.convert(O.format),fn=I.convert(O.type),Se;O.isData3DTexture?(v.setTexture3D(O,0),Se=P.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(v.setTexture2DArray(O,0),Se=P.TEXTURE_2D_ARRAY):(v.setTexture2D(O,0),Se=P.TEXTURE_2D),pe.activeTexture(P.TEXTURE0),pe.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,O.flipY),pe.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),pe.pixelStorei(P.UNPACK_ALIGNMENT,O.unpackAlignment);let kn=pe.getParameter(P.UNPACK_ROW_LENGTH),ht=pe.getParameter(P.UNPACK_IMAGE_HEIGHT),Jn=pe.getParameter(P.UNPACK_SKIP_PIXELS),wi=pe.getParameter(P.UNPACK_SKIP_ROWS),hr=pe.getParameter(P.UNPACK_SKIP_IMAGES);pe.pixelStorei(P.UNPACK_ROW_LENGTH,jt.width),pe.pixelStorei(P.UNPACK_IMAGE_HEIGHT,jt.height),pe.pixelStorei(P.UNPACK_SKIP_PIXELS,Re),pe.pixelStorei(P.UNPACK_SKIP_ROWS,$e),pe.pixelStorei(P.UNPACK_SKIP_IMAGES,Qe);let Ts=y.isDataArrayTexture||y.isData3DTexture,Pt=O.isDataArrayTexture||O.isData3DTexture;if(y.isDepthTexture){let Zt=S.get(y),fr=S.get(O),Ut=S.get(Zt.__renderTarget),pr=S.get(fr.__renderTarget);pe.bindFramebuffer(P.READ_FRAMEBUFFER,Ut.__webglFramebuffer),pe.bindFramebuffer(P.DRAW_FRAMEBUFFER,pr.__webglFramebuffer);for(let Ds=0;Ds<Te;Ds++)Ts&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,S.get(y).__webglTexture,V,Qe+Ds),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,S.get(O).__webglTexture,_e,Yt+Ds)),P.blitFramebuffer(Re,$e,Me,ve,Pe,Tt,Me,ve,P.DEPTH_BUFFER_BIT,P.NEAREST);pe.bindFramebuffer(P.READ_FRAMEBUFFER,null),pe.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(V!==0||y.isRenderTargetTexture||S.has(y)){let Zt=S.get(y),fr=S.get(O);pe.bindFramebuffer(P.READ_FRAMEBUFFER,Py),pe.bindFramebuffer(P.DRAW_FRAMEBUFFER,Oy);for(let Ut=0;Ut<Te;Ut++)Ts?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Zt.__webglTexture,V,Qe+Ut):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Zt.__webglTexture,V),Pt?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,fr.__webglTexture,_e,Yt+Ut):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,fr.__webglTexture,_e),V!==0?P.blitFramebuffer(Re,$e,Me,ve,Pe,Tt,Me,ve,P.COLOR_BUFFER_BIT,P.NEAREST):Pt?P.copyTexSubImage3D(Se,_e,Pe,Tt,Yt+Ut,Re,$e,Me,ve):P.copyTexSubImage2D(Se,_e,Pe,Tt,Re,$e,Me,ve);pe.bindFramebuffer(P.READ_FRAMEBUFFER,null),pe.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Pt?y.isDataTexture||y.isData3DTexture?P.texSubImage3D(Se,_e,Pe,Tt,Yt,Me,ve,Te,It,fn,jt.data):O.isCompressedArrayTexture?P.compressedTexSubImage3D(Se,_e,Pe,Tt,Yt,Me,ve,Te,It,jt.data):P.texSubImage3D(Se,_e,Pe,Tt,Yt,Me,ve,Te,It,fn,jt):y.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,_e,Pe,Tt,Me,ve,It,fn,jt.data):y.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,_e,Pe,Tt,jt.width,jt.height,It,jt.data):P.texSubImage2D(P.TEXTURE_2D,_e,Pe,Tt,Me,ve,It,fn,jt);pe.pixelStorei(P.UNPACK_ROW_LENGTH,kn),pe.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ht),pe.pixelStorei(P.UNPACK_SKIP_PIXELS,Jn),pe.pixelStorei(P.UNPACK_SKIP_ROWS,wi),pe.pixelStorei(P.UNPACK_SKIP_IMAGES,hr),_e===0&&O.generateMipmaps&&P.generateMipmap(Se),pe.unbindTexture()},this.initRenderTarget=function(y){S.get(y).__webglFramebuffer===void 0&&v.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?v.setTextureCube(y,0):y.isData3DTexture?v.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?v.setTexture2DArray(y,0):v.setTexture2D(y,0),pe.unbindTexture()},this.resetState=function(){$=0,K=0,F=null,pe.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ct._getDrawingBufferColorSpace(t),e.unpackColorSpace=ct._getUnpackColorSpace()}};var Xi=class i{audioCtx=null;currentSource=null;currentGain=null;rawBuffers=new Map;audioBuffers=new Map;playlistIds=[];currentIndex=0;nextTrackTimer;currentTrackRemainingLoops=0;currentTrackId=null;isPaused=!1;MIN_TRACK_DURATION=600;CROSSFADE_TIME=3;playlist=[{id:"synth",file:"assets/music/monume-electronic.mp3"},{id:"ambient",file:"assets/music/space-ambient-loop.mp3"},{id:"tension",file:"assets/music/mountain-electronic.mp3"},{id:"soft",file:"assets/music/soft-corporate.mp3"},{id:"upbeat",file:"assets/music/upbeat-emotive.mp3"},{id:"night",file:"assets/music/night-detective.mp3"}];isMusicOn=Ne(!1);isMusicReady=Ne(!1);async fetchAllTracks(){this.isMusicReady.set(!1);let t=this.playlist.map(async e=>{try{let n=await fetch(e.file);n.ok||console.error(`404: ${e.file}`);let r=await n.arrayBuffer();this.rawBuffers.set(e.id,r)}catch(n){console.error(`Fehler beim Laden von ${e.id}:`,n)}});await Promise.all(t),this.playlistIds=Array.from(this.rawBuffers.keys()),console.log("Alle MP3-Dateien im Speicher (Rohdaten)."),this.isMusicReady.set(!0)}async getDecodedBuffer(t){if(this.audioBuffers.has(t))return this.audioBuffers.get(t);let e=this.rawBuffers.get(t);if(!e)return null;this.audioCtx||(this.audioCtx=new(window.AudioContext||window.webkitAudioContext));try{let n=await this.audioCtx.decodeAudioData(e.slice(0));return this.audioBuffers.set(t,n),n}catch(n){return console.error(`Dekodierungsfehler bei ${t}:`,n),null}}async playTrack(t,e=!1){let n=await this.getDecodedBuffer(t);if(!n||!this.audioCtx)return;this.audioCtx.state==="suspended"&&await this.audioCtx.resume();let r=this.audioCtx.currentTime,s=this.CROSSFADE_TIME,o=this.audioCtx.createBufferSource(),a=this.audioCtx.createGain();o.buffer=n,o.connect(a),a.connect(this.audioCtx.destination),a.gain.setValueAtTime(0,r),a.gain.linearRampToValueAtTime(.3,r+s),this.currentGain&&(this.currentGain.gain.setValueAtTime(this.currentGain.gain.value,r),this.currentGain.gain.linearRampToValueAtTime(0,r+s),this.currentSource?.stop(r+s)),o.start(r),this.currentSource=o,this.currentGain=a,this.currentTrackId=t,e||(n.duration<this.MIN_TRACK_DURATION?this.currentTrackRemainingLoops=Math.ceil(this.MIN_TRACK_DURATION/n.duration)-1:this.currentTrackRemainingLoops=0),this.nextTrackTimer&&clearTimeout(this.nextTrackTimer),this.nextTrackTimer=setTimeout(()=>{this.currentTrackRemainingLoops>0?(this.currentTrackRemainingLoops--,this.playTrack(t,!0)):this.playNext()},(n.duration-s)*1e3)}startAutoplay(){this.shufflePlaylist(),this.currentIndex=0,this.playNext(),this.isMusicOn.set(!0)}async playNext(){this.currentIndex>=this.playlistIds.length&&(this.shufflePlaylist(),this.currentIndex=0);let t=this.playlistIds[this.currentIndex];this.currentIndex++,await this.playTrack(t)}shufflePlaylist(){for(let t=this.playlistIds.length-1;t>0;t--){let e=Math.floor(Math.random()*(t+1));[this.playlistIds[t],this.playlistIds[e]]=[this.playlistIds[e],this.playlistIds[t]]}}stopMusic(){if(this.nextTrackTimer&&(clearTimeout(this.nextTrackTimer),this.nextTrackTimer=null),!this.audioCtx||!this.currentSource||!this.currentGain)return;this.isPaused=!1;let t=this.audioCtx.currentTime,e=1.5;this.currentGain.gain.setValueAtTime(this.currentGain.gain.value,t),this.currentGain.gain.linearRampToValueAtTime(0,t+e),this.currentSource.stop(t+e),this.currentSource=null,this.currentGain=null,console.log("Musik gestoppt und Queue geleert."),this.isMusicOn.set(!1)}async pauseMusic(){!this.audioCtx||this.isPaused||this.audioCtx.state==="running"&&(await this.audioCtx.suspend(),this.isPaused=!0,console.log("Musik pausiert."))}async resumeMusic(){!this.audioCtx||!this.isPaused||this.audioCtx.state==="suspended"&&(await this.audioCtx.resume(),this.isPaused=!1,console.log("Musik fortgesetzt."))}static \u0275fac=function(e){return new(e||i)};static \u0275prov=oe({token:i,factory:i.\u0275fac,providedIn:"root"})};var $i=class i{wakeLock=null;isFullScreen=Ne(!1);canFullscreen=!!document.documentElement.requestFullscreen||!!document.documentElement.webkitRequestFullscreen;constructor(){this.canFullscreen&&document.addEventListener("fullscreenchange",()=>{document.fullscreenElement?this.isFullScreen.set(!0):this.isFullScreen.set(!1)})}toggleTabFullScreenModeGame(){this.canFullscreen&&(document.fullscreenElement?this.isFullScreen.set(!0):document.documentElement.requestFullscreen().then(()=>{this.isFullScreen.set(!0),this.initDisplayAlwaysOnMode().then(()=>{console.log("full screen and display always on mode requested")})}).catch(t=>{console.warn("Fullscreen error: ",t)}))}toggleTabFullScreenModeMenue(){this.canFullscreen&&(document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen():document.documentElement.requestFullscreen().then(()=>{this.isFullScreen.set(!0),this.initDisplayAlwaysOnMode().then(()=>{console.log("full screen and display always on mode requested")})}))}releaseDisplayAlwaysOnMode(){this.wakeLock?.release().then(()=>{this.wakeLock=null})}async initDisplayAlwaysOnMode(){try{this.wakeLock=await navigator.wakeLock.request("screen")}catch(t){console.log(`${t.name}, ${t.message}`)}}static \u0275fac=function(e){return new(e||i)};static \u0275prov=oe({token:i,factory:i.\u0275fac,providedIn:"root"})};var es=class i{languageService=A(oi);musicservice=A(Xi);fullscreenService=A($i);COORDINATE_BASE=900;SUN_3D_DESIRED_UNITS_CORRECTION=200;gameActive=Ne(!1);winState=Ne(!1);highScore=Ne(parseInt(localStorage.getItem("orbital_hs")||"0"));bestEntry=Ne(JSON.parse(localStorage.getItem("orbital_best_entry")||"null"));lastScore=Ne(parseInt(localStorage.getItem("orbital_last_score")||"0"));scoreHistory=Ne(JSON.parse(localStorage.getItem("orbital_history")||"[]"));resumeCountdown=Ne(0);pauseStartTime=0;totalPausedTime=0;lastTimestamp=0;startTime=0;score=0;ep=0;maxEp=2e3;epOverflowLogged=!1;researchLevel=1;playerR=350;marinesActive=!1;isRecovering=!1;isJumping=!1;warpActive=!1;warpStart=0;warpDuration=3e3;satellitesCount=0;marinesReadyTime=0;novaBombeActive=!1;novaBombeVisuals=null;stopSpawningUntil=0;shieldActive=!1;shieldHp=0;comets=[];isInsideHabitableZone=!1;spawnInterval;isPaused=!1;showRewardDialog=Ne(!1);showIntroduction=Ne(null);introductionEnabled=Ne(localStorage.getItem("orbital_intro_enabled")!=="false");shownIntroductions=Ne(JSON.parse(localStorage.getItem("orbital_shown_intros")||"[]"));toggleIntroduction(){this.introductionEnabled.set(!this.introductionEnabled()),localStorage.setItem("orbital_intro_enabled",this.introductionEnabled().toString())}markIntroductionShown(t){let e=this.shownIntroductions();if(!e.includes(t)){let n=[...e,t];this.shownIntroductions.set(n),localStorage.setItem("orbital_shown_intros",JSON.stringify(n))}}flightDirection=1;asteroids=[];scienceLog=[];projectiles=[];isColorsInverted=!1;toggleInversion(){this.isColorsInverted=!this.isColorsInverted}startSpawning(){this.cleanup();let t=Math.floor((this.researchLevel+7)/15),e=Math.max(600,2e3-t*250);this.spawnInterval=setInterval(()=>{Date.now()<this.stopSpawningUntil||this.spawnAsteroid()},e)}spawnAsteroid(){if(this.isPaused||this.resumeCountdown()>0||!this.gameActive())return;let t=Math.min(5,1+Math.floor((this.researchLevel-1)/15));for(let e=0;e<t;e++){let r=Math.random()*Math.PI*2+e*.26,s=-Math.cos(r)*(2+Math.random()*2.5),o=-Math.sin(r)*(2+Math.random()*2.5),a=12+Math.random()*15,c=Math.ceil(a/3),l=[],u=7+Math.floor(Math.random()*5);for(let p=0;p<u;p++){let g=p/u*Math.PI*2,b=a*(.8+Math.random()*.4);l.push({x:Math.cos(g)*b,y:Math.sin(g)*b})}let h=["#8B4513","rgb(97 55 7)","rgb(202 103 1.3)","#8B4513"],d=h[Math.floor(Math.random()*h.length)];this.asteroids.push({x:Math.cos(r)*900,y:Math.sin(r)*900,vx:s,vy:o,ovx:s,ovy:o,size:a,color:d,points:l,hp:c})}}cleanup(){this.cancelVibration(),this.spawnInterval&&clearInterval(this.spawnInterval)}addLog(t,e){this.scienceLog.unshift({text:t,timestamp:Date.now(),type:e}),this.scienceLog.length>4&&this.scienceLog.pop()}initGameVariables(){this.cancelVibration(),this.lastTimestamp=performance.now(),this.startTime=Date.now(),this.gameActive.set(!0),this.winState.set(!1),this.score=0,this.ep=100,this.epOverflowLogged=!1,this.researchLevel=1,this.playerR=350,this.asteroids=[],this.scienceLog=[],this.projectiles=[],this.marinesActive=!1,this.isRecovering=!1,this.isJumping=!1,this.warpActive=!1,this.warpStart=0,this.satellitesCount=0,this.marinesReadyTime=0,this.novaBombeActive=!1,this.novaBombeVisuals=null,this.stopSpawningUntil=0,this.showRewardDialog.set(!1),this.shieldActive=!1,this.shieldHp=0,this.comets=[],this.isInsideHabitableZone=!1,this.flightDirection=1,this.pauseStartTime=0,this.totalPausedTime=0,this.shownIntroductions.set([]),this.togglePause(),this.resumeGame()}vibrateAction(t){typeof navigator<"u"&&"vibrate"in navigator&&navigator.vibrate(t)}vibrateProximity(t){typeof navigator<"u"&&"vibrate"in navigator&&navigator.vibrate(t)}vibrateSunCrash(){typeof navigator<"u"&&"vibrate"in navigator&&navigator.vibrate(3e3)}cancelVibration(){typeof navigator<"u"&&"vibrate"in navigator&&navigator.vibrate(0)}togglePause(t){t&&(t.stopPropagation(),t.preventDefault()),!(!this.gameActive()||this.winState()||this.resumeCountdown()>0)&&(this.cancelVibration(),this.isPaused=!0,this.pauseStartTime=Date.now(),this.musicservice.pauseMusic())}resumeGame(){window.focus(),this.fullscreenService.toggleTabFullScreenModeGame(),this.isPaused=!1,this.pauseStartTime>0&&(this.totalPausedTime+=Date.now()-this.pauseStartTime,this.pauseStartTime=0),this.musicservice.resumeMusic(),this.resumeCountdown.set(3);let t=setInterval(()=>{this.resumeCountdown.set(this.resumeCountdown()-1),this.resumeCountdown()<=0&&clearInterval(t)},1e3)}static \u0275fac=function(e){return new(e||i)};static \u0275prov=oe({token:i,factory:i.\u0275fac,providedIn:"root"})};var v1=["threeDimensionsCanvas"],Wd=class i{constructor(t){this.ngZone=t}canvasRef;onWindowResize(){this.camera&&(this.updateCameraPosition(),setTimeout(()=>{this.updateCameraPosition()},100))}gameService=A(es);renderer;scene;camera;sunMesh;glowMesh;clock=new fc;animationId;ngAfterViewInit(){this.initThree(),this.createRealisticSun(),this.updateCameraPosition(),this.startAnimation(),setTimeout(()=>this.onWindowResize(),50)}ngOnDestroy(){this.animationId&&cancelAnimationFrame(this.animationId),this.renderer.dispose(),this.sunMesh.geometry.dispose(),this.sunMesh.material.dispose(),this.glowMesh.geometry.dispose(),this.glowMesh.material.dispose()}initThree(){let t=this.canvasRef.nativeElement;this.renderer=new zd({canvas:t,alpha:!0,antialias:!0}),this.scene=new Qa,this.camera=new un(75,1,.1,2e3)}updateCameraPosition(){if(!this.camera||!this.renderer||!this.canvasRef)return;let t=this.canvasRef.nativeElement,e=t.clientWidth||window.innerWidth,n=t.clientHeight||window.innerHeight,s=75*Math.PI/180,o=this.gameService.COORDINATE_BASE+this.gameService.SUN_3D_DESIRED_UNITS_CORRECTION;if(this.camera.aspect=e/n,this.renderer.setSize(e,n,!1),e>n)this.camera.position.z=o/(2*Math.tan(s/2));else{let a=2*Math.atan(Math.tan(s/2)*this.camera.aspect);this.camera.position.z=o/(2*Math.tan(a/2))}this.camera.updateProjectionMatrix(),this.camera.lookAt(0,0,0)}createRealisticSun(){let n=new ac().load("assets/sun-surface.jpg");n.anisotropy=this.renderer.capabilities.getMaxAnisotropy();let r=new Uo(68,64,64),s=new sc({map:n,emissive:16768426,emissiveMap:n,emissiveIntensity:1});this.sunMesh=new Tn(r,s),this.scene.add(this.sunMesh);let o=new Uo(83,64,64),a=new Ms({color:16737792,transparent:!0,opacity:.3,side:hn,blending:mc});this.glowMesh=new Tn(o,a),this.scene.add(this.glowMesh);let c=new hc(16777215,.2);this.scene.add(c);let l=new uc(16777215,3,600);this.scene.add(l)}startAnimation(){this.ngZone.runOutsideAngular(()=>{let t=e=>{this.animationId=requestAnimationFrame(t),this.clock.update(e);let n=this.clock.getDelta(),r=this.clock.getElapsed();if(this.sunMesh&&(this.sunMesh.rotation.y+=.08*n),this.glowMesh){let s=Math.sin(r*2)*.05;this.glowMesh.scale.set(1.05+s,1.05+s,1.05+s),this.glowMesh.material.opacity=.35+Math.sin(r*1.5)*.1}this.renderer.render(this.scene,this.camera)};this.animationId=requestAnimationFrame(t)})}static \u0275fac=function(e){return new(e||i)(bt(mt))};static \u0275cmp=_t({type:i,selectors:[["app-3d"]],viewQuery:function(e,n){if(e&1&&Er(v1,7),e&2){let r;Ti(r=Di())&&(n.canvasRef=r.first)}},hostBindings:function(e,n){e&1&&ze("resize",function(){return n.onWindowResize()},wr)("orientationchange",function(){return n.onWindowResize()},wr)},decls:2,vars:0,consts:[["threeDimensionsCanvas",""]],template:function(e,n){e&1&&Mr(0,"canvas",null,0)},styles:["canvas[_ngcontent-%COMP%]{width:100%;height:100%;display:block}"]})};function hy(i){return Error(`Unable to find icon with the name "${i}"`)}function _1(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function fy(i){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${i}".`)}function py(i){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${i}".`)}var dr=class{url;svgText;options;svgElement=null;constructor(t,e,n){this.url=t,this.svgText=e,this.options=n}},gy=(()=>{class i{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,n,r,s){this._httpClient=e,this._sanitizer=n,this._errorHandler=s,this._document=r}addSvgIcon(e,n,r){return this.addSvgIconInNamespace("",e,n,r)}addSvgIconLiteral(e,n,r){return this.addSvgIconLiteralInNamespace("",e,n,r)}addSvgIconInNamespace(e,n,r,s){return this._addSvgIconConfig(e,n,new dr(r,null,s))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,n,r,s){let o=this._sanitizer.sanitize(Mn.HTML,r);if(!o)throw py(r);let a=hs(o);return this._addSvgIconConfig(e,n,new dr("",a,s))}addSvgIconSet(e,n){return this.addSvgIconSetInNamespace("",e,n)}addSvgIconSetLiteral(e,n){return this.addSvgIconSetLiteralInNamespace("",e,n)}addSvgIconSetInNamespace(e,n,r){return this._addSvgIconSetConfig(e,new dr(n,null,r))}addSvgIconSetLiteralInNamespace(e,n,r){let s=this._sanitizer.sanitize(Mn.HTML,n);if(!s)throw py(n);let o=hs(s);return this._addSvgIconSetConfig(e,new dr("",o,r))}registerFontClassAlias(e,n=e){return this._fontCssClassesByAlias.set(e,n),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let n=this._sanitizer.sanitize(Mn.RESOURCE_URL,e);if(!n)throw fy(e);let r=this._cachedIconsByUrl.get(n);return r?Ve(jd(r)):this._loadSvgIconFromConfig(new dr(e,null)).pipe(wn(s=>this._cachedIconsByUrl.set(n,s)),it(s=>jd(s)))}getNamedSvgIcon(e,n=""){let r=my(n,e),s=this._svgIconConfigs.get(r);if(s)return this._getSvgFromConfig(s);if(s=this._getIconConfigFromResolvers(n,e),s)return this._svgIconConfigs.set(r,s),this._getSvgFromConfig(s);let o=this._iconSetConfigs.get(n);return o?this._getSvgFromIconSetConfigs(e,o):Ic(hy(r))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?Ve(jd(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(it(n=>jd(n)))}_getSvgFromIconSetConfigs(e,n){let r=this._extractIconWithNameFromAnySet(e,n);if(r)return Ve(r);let s=n.filter(o=>!o.svgText).map(o=>this._loadSvgIconSetFromConfig(o).pipe(Xo(a=>{let l=`Loading icon set URL: ${this._sanitizer.sanitize(Mn.RESOURCE_URL,o.url)} failed: ${a.message}`;return this._errorHandler.handleError(new Error(l)),Ve(null)})));return Nc(s).pipe(it(()=>{let o=this._extractIconWithNameFromAnySet(e,n);if(!o)throw hy(e);return o}))}_extractIconWithNameFromAnySet(e,n){for(let r=n.length-1;r>=0;r--){let s=n[r];if(s.svgText&&s.svgText.toString().indexOf(e)>-1){let o=this._svgElementFromConfig(s),a=this._extractSvgIconFromSet(o,e,s.options);if(a)return a}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(wn(n=>e.svgText=n),it(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?Ve(null):this._fetchIcon(e).pipe(wn(n=>e.svgText=n))}_extractSvgIconFromSet(e,n,r){let s=e.querySelector(`[id="${n}"]`);if(!s)return null;let o=s.cloneNode(!0);if(o.removeAttribute("id"),o.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(o,r);if(o.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(o),r);let a=this._svgElementFromString(hs("<svg></svg>"));return a.appendChild(o),this._setSvgAttributes(a,r)}_svgElementFromString(e){let n=this._document.createElement("DIV");n.innerHTML=e;let r=n.querySelector("svg");if(!r)throw Error("<svg> tag not found");return r}_toSvgElement(e){let n=this._svgElementFromString(hs("<svg></svg>")),r=e.attributes;for(let s=0;s<r.length;s++){let{name:o,value:a}=r[s];o!=="id"&&n.setAttribute(o,a)}for(let s=0;s<e.childNodes.length;s++)e.childNodes[s].nodeType===this._document.ELEMENT_NODE&&n.appendChild(e.childNodes[s].cloneNode(!0));return n}_setSvgAttributes(e,n){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),n&&n.viewBox&&e.setAttribute("viewBox",n.viewBox),e}_fetchIcon(e){let{url:n,options:r}=e,s=r?.withCredentials??!1;if(!this._httpClient)throw _1();if(n==null)throw Error(`Cannot fetch icon from URL "${n}".`);let o=this._sanitizer.sanitize(Mn.RESOURCE_URL,n);if(!o)throw fy(n);let a=this._inProgressUrlFetches.get(o);if(a)return a;let c=this._httpClient.get(o,{responseType:"text",withCredentials:s}).pipe(it(l=>hs(l)),Is(()=>this._inProgressUrlFetches.delete(o)),mm());return this._inProgressUrlFetches.set(o,c),c}_addSvgIconConfig(e,n,r){return this._svgIconConfigs.set(my(e,n),r),this}_addSvgIconSetConfig(e,n){let r=this._iconSetConfigs.get(e);return r?r.push(n):this._iconSetConfigs.set(e,[n]),this}_svgElementFromConfig(e){if(!e.svgElement){let n=this._svgElementFromString(e.svgText);this._setSvgAttributes(n,e.options),e.svgElement=n}return e.svgElement}_getIconConfigFromResolvers(e,n){for(let r=0;r<this._resolvers.length;r++){let s=this._resolvers[r](n,e);if(s)return y1(s)?new dr(s.url,null,s.options):new dr(s,null)}}static \u0275fac=function(n){return new(n||i)(Fe(Th,8),Fe(ua),Fe(Je,8),Fe(is))};static \u0275prov=oe({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function jd(i){return i.cloneNode(!0)}function my(i,t){return i+":"+t}function y1(i){return!!(i.url&&i.options)}var b1=["*"],x1=new Ce("MAT_ICON_DEFAULT_OPTIONS"),S1=new Ce("mat-icon-location",{providedIn:"root",factory:()=>{let i=A(Je),t=i?i.location:null;return{getPathname:()=>t?t.pathname+t.search:""}}}),vy=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],w1=vy.map(i=>`[${i}]`).join(", "),M1=/^url\(['"]?#(.*?)['"]?\)$/,_y=(()=>{class i{_elementRef=A(Nt);_iconRegistry=A(gy);_location=A(S1);_errorHandler=A(is);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let n=this._cleanupFontValue(e);n!==this._fontSet&&(this._fontSet=n,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let n=this._cleanupFontValue(e);n!==this._fontIcon&&(this._fontIcon=n,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=Rs.EMPTY;constructor(){let e=A(new zs("aria-hidden"),{optional:!0}),n=A(x1,{optional:!0});n&&(n.color&&(this.color=this._defaultColor=n.color),n.fontSet&&(this.fontSet=n.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let n=e.split(":");switch(n.length){case 1:return["",n[0]];case 2:return n;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let n=this._location.getPathname();n!==this._previousPath&&(this._previousPath=n,this._prependPathToReferences(n))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let n=this._location.getPathname();this._previousPath=n,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(n),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,n=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();n--;){let r=e.childNodes[n];(r.nodeType!==1||r.nodeName.toLowerCase()==="svg")&&r.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,n=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(r=>r.length>0);this._previousFontSetClass.forEach(r=>e.classList.remove(r)),n.forEach(r=>e.classList.add(r)),this._previousFontSetClass=n,this.fontIcon!==this._previousFontIconClass&&!n.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let n=this._elementsWithExternalReferences;n&&n.forEach((r,s)=>{r.forEach(o=>{s.setAttribute(o.name,`url('${e}#${o.value}')`)})})}_cacheChildrenWithExternalReferences(e){let n=e.querySelectorAll(w1),r=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let s=0;s<n.length;s++)vy.forEach(o=>{let a=n[s],c=a.getAttribute(o),l=c?c.match(M1):null;if(l){let u=r.get(a);u||(u=[],r.set(a,u)),u.push({name:o,value:l[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[n,r]=this._splitIconName(e);n&&(this._svgNamespace=n),r&&(this._svgName=r),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(r,n).pipe(mn(1)).subscribe(s=>this._setSvgElement(s),s=>{let o=`Error retrieving icon ${n}:${r}! ${s.message}`;this._errorHandler.handleError(new Error(o))})}}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=_t({type:i,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(n,r){n&2&&(Bn("data-mat-icon-type",r._usingFontIcon()?"font":"svg")("data-mat-icon-name",r._svgName||r.fontIcon)("data-mat-icon-namespace",r._svgNamespace||r.fontSet)("fontIcon",r._usingFontIcon()?r.fontIcon:null),Cr(r.color?"mat-"+r.color:""),gt("mat-icon-inline",r.inline)("mat-icon-no-color",r.color!=="primary"&&r.color!=="accent"&&r.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",Lt],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:b1,decls:1,vars:0,template:function(n,r){n&1&&(Ai(),ti(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2,changeDetection:0})}return i})();var E1=["mat-internal-form-field",""],C1=["*"],yy=(()=>{class i{labelPosition="after";static \u0275fac=function(n){return new(n||i)};static \u0275cmp=_t({type:i,selectors:[["div","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(n,r){n&2&&gt("mdc-form-field--align-end",r.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},attrs:E1,ngContentSelectors:C1,decls:1,vars:0,template:function(n,r){n&1&&(Ai(),ti(0))},styles:[`.mat-internal-form-field {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}
.mat-internal-form-field > label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
  order: 0;
}
[dir=rtl] .mat-internal-form-field > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
}

.mdc-form-field--align-end > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
  order: -1;
}
[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
}
`],encapsulation:2,changeDetection:0})}return i})();var A1=["switch"],T1=["*"];function D1(i,t){i&1&&(W(0,"span",11),Ci(),W(1,"svg",13),rt(2,"path",14),q(),W(3,"svg",15),rt(4,"path",16),q()())}var R1=new Ce("mat-slide-toggle-default-options",{providedIn:"root",factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})}),Xd=class{source;checked;constructor(t,e){this.source=t,this.checked=e}},by=(()=>{class i{_elementRef=A(Nt);_focusMonitor=A(Pa);_changeDetectorRef=A(_n);defaults=A(R1);_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(e){return new Xd(this,e)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=fi();_focused=!1;name=null;id;labelPosition="after";ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new en;toggleChange=new en;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){A(Oi).load(Nl);let e=A(new zs("tabindex"),{optional:!0}),n=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=n.color||"accent",this.id=this._uniqueId=A(tr).getId("mat-mdc-slide-toggle-"),this.hideIcon=n.hideIcon??!1,this.disabledInteractive=n.disabledInteractive??!1,this._labelId=this._uniqueId+"-label"}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{e==="keyboard"||e==="program"?(this._focused=!0,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(e){e.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorOnChange=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new Xd(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static \u0275fac=function(n){return new(n||i)};static \u0275cmp=_t({type:i,selectors:[["mat-slide-toggle"]],viewQuery:function(n,r){if(n&1&&Er(A1,5),n&2){let s;Ti(s=Di())&&(r._switchElement=s.first)}},hostAttrs:[1,"mat-mdc-slide-toggle"],hostVars:13,hostBindings:function(n,r){n&2&&(zm("id",r.id),Bn("tabindex",null)("aria-label",null)("name",null)("aria-labelledby",null),Cr(r.color?"mat-"+r.color:""),gt("mat-mdc-slide-toggle-focused",r._focused)("mat-mdc-slide-toggle-checked",r.checked)("_mat-animation-noopable",r._noopAnimations))},inputs:{name:"name",id:"id",labelPosition:"labelPosition",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],required:[2,"required","required",Lt],color:"color",disabled:[2,"disabled","disabled",Lt],disableRipple:[2,"disableRipple","disableRipple",Lt],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:os(e)],checked:[2,"checked","checked",Lt],hideIcon:[2,"hideIcon","hideIcon",Lt],disabledInteractive:[2,"disabledInteractive","disabledInteractive",Lt]},outputs:{change:"change",toggleChange:"toggleChange"},exportAs:["matSlideToggle"],features:[rs([{provide:po,useExisting:ns(()=>i),multi:!0},{provide:Pf,useExisting:i,multi:!0}]),Un],ngContentSelectors:T1,decls:14,vars:27,consts:[["switch",""],["mat-internal-form-field","",3,"labelPosition"],["role","switch","type","button",1,"mdc-switch",3,"click","tabIndex","disabled"],[1,"mat-mdc-slide-toggle-touch-target"],[1,"mdc-switch__track"],[1,"mdc-switch__handle-track"],[1,"mdc-switch__handle"],[1,"mdc-switch__shadow"],[1,"mdc-elevation-overlay"],[1,"mdc-switch__ripple"],["mat-ripple","",1,"mat-mdc-slide-toggle-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-switch__icons"],[1,"mdc-label",3,"click","for"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--on"],["d","M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--off"],["d","M20 13H4v-2h16v2z"]],template:function(n,r){if(n&1&&(Ai(),W(0,"div",1)(1,"button",2,0),ze("click",function(){return r._handleClick()}),rt(3,"div",3)(4,"span",4),W(5,"span",5)(6,"span",6)(7,"span",7),rt(8,"span",8),q(),W(9,"span",9),rt(10,"span",10),q(),Dt(11,D1,5,0,"span",11),q()()(),W(12,"label",12),ze("click",function(o){return o.stopPropagation()}),ti(13),q()()),n&2){let s=Qo(2);St("labelPosition",r.labelPosition),X(),gt("mdc-switch--selected",r.checked)("mdc-switch--unselected",!r.checked)("mdc-switch--checked",r.checked)("mdc-switch--disabled",r.disabled)("mat-mdc-slide-toggle-disabled-interactive",r.disabledInteractive),St("tabIndex",r.disabled&&!r.disabledInteractive?-1:r.tabIndex)("disabled",r.disabled&&!r.disabledInteractive),Bn("id",r.buttonId)("name",r.name)("aria-label",r.ariaLabel)("aria-labelledby",r._getAriaLabelledBy())("aria-describedby",r.ariaDescribedby)("aria-required",r.required||null)("aria-checked",r.checked)("aria-disabled",r.disabled&&r.disabledInteractive?"true":null),X(9),St("matRippleTrigger",s)("matRippleDisabled",r.disableRipple||r.disabled)("matRippleCentered",!0),X(),Rt(r.hideIcon?-1:11),X(),St("for",r.buttonId),Bn("id",r._labelId)}},dependencies:[Kv,yy],styles:[`.mdc-switch {
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  display: inline-flex;
  flex-shrink: 0;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 0;
  position: relative;
  width: var(--mat-slide-toggle-track-width, 52px);
}
.mdc-switch.mdc-switch--disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-switch.mat-mdc-slide-toggle-disabled-interactive {
  pointer-events: auto;
}

.mdc-switch__track {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: var(--mat-slide-toggle-track-height, 32px);
  border-radius: var(--mat-slide-toggle-track-shape, var(--mat-sys-corner-full));
}
.mdc-switch--disabled.mdc-switch .mdc-switch__track {
  opacity: var(--mat-slide-toggle-disabled-track-opacity, 0.12);
}
.mdc-switch__track::before, .mdc-switch__track::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  width: 100%;
  border-width: var(--mat-slide-toggle-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-track-outline-color, var(--mat-sys-outline));
}
.mdc-switch--selected .mdc-switch__track::before, .mdc-switch--selected .mdc-switch__track::after {
  border-width: var(--mat-slide-toggle-selected-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-selected-track-outline-color, transparent);
}
.mdc-switch--disabled .mdc-switch__track::before, .mdc-switch--disabled .mdc-switch__track::after {
  border-width: var(--mat-slide-toggle-disabled-unselected-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-disabled-unselected-track-outline-color, var(--mat-sys-on-surface));
}
@media (forced-colors: active) {
  .mdc-switch__track {
    border-color: currentColor;
  }
}
.mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: translateX(0);
  background: var(--mat-slide-toggle-unselected-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch--selected .mdc-switch__track::before {
  transform: translateX(-100%);
}
.mdc-switch--selected .mdc-switch__track::before {
  opacity: var(--mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::before {
  opacity: var(--mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-hover-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-focus-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch:enabled:active .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-pressed-track-color, var(--mat-sys-surface-variant));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::before, .mdc-switch.mdc-switch--disabled .mdc-switch__track::before {
  background: var(--mat-slide-toggle-disabled-unselected-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch__track::after {
  transform: translateX(-100%);
  background: var(--mat-slide-toggle-selected-track-color, var(--mat-sys-primary));
}
[dir=rtl] .mdc-switch__track::after {
  transform: translateX(100%);
}
.mdc-switch--selected .mdc-switch__track::after {
  transform: translateX(0);
}
.mdc-switch--selected .mdc-switch__track::after {
  opacity: var(--mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::after {
  opacity: var(--mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-hover-track-color, var(--mat-sys-primary));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-focus-track-color, var(--mat-sys-primary));
}
.mdc-switch:enabled:active .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-pressed-track-color, var(--mat-sys-primary));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::after, .mdc-switch.mdc-switch--disabled .mdc-switch__track::after {
  background: var(--mat-slide-toggle-disabled-selected-track-color, var(--mat-sys-on-surface));
}

.mdc-switch__handle-track {
  height: 100%;
  pointer-events: none;
  position: absolute;
  top: 0;
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  left: 0;
  right: auto;
  transform: translateX(0);
  width: calc(100% - var(--mat-slide-toggle-handle-width));
}
[dir=rtl] .mdc-switch__handle-track {
  left: auto;
  right: 0;
}
.mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(-100%);
}

.mdc-switch__handle {
  display: flex;
  pointer-events: auto;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: auto;
  transition: width 75ms cubic-bezier(0.4, 0, 0.2, 1), height 75ms cubic-bezier(0.4, 0, 0.2, 1), margin 75ms cubic-bezier(0.4, 0, 0.2, 1);
  width: var(--mat-slide-toggle-handle-width);
  height: var(--mat-slide-toggle-handle-height);
  border-radius: var(--mat-slide-toggle-handle-shape, var(--mat-sys-corner-full));
}
[dir=rtl] .mdc-switch__handle {
  left: auto;
  right: 0;
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle {
  width: var(--mat-slide-toggle-unselected-handle-size, 16px);
  height: var(--mat-slide-toggle-unselected-handle-size, 16px);
  margin: var(--mat-slide-toggle-unselected-handle-horizontal-margin, 0 8px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--mat-slide-toggle-unselected-with-icon-handle-horizontal-margin, 0 4px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle {
  width: var(--mat-slide-toggle-selected-handle-size, 24px);
  height: var(--mat-slide-toggle-selected-handle-size, 24px);
  margin: var(--mat-slide-toggle-selected-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--mat-slide-toggle-selected-with-icon-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons) {
  width: var(--mat-slide-toggle-with-icon-handle-size, 24px);
  height: var(--mat-slide-toggle-with-icon-handle-size, 24px);
}
.mat-mdc-slide-toggle .mdc-switch:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  width: var(--mat-slide-toggle-pressed-handle-size, 28px);
  height: var(--mat-slide-toggle-pressed-handle-size, 28px);
}
.mat-mdc-slide-toggle .mdc-switch--selected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--mat-slide-toggle-selected-pressed-handle-horizontal-margin, 0 22px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--mat-slide-toggle-unselected-pressed-handle-horizontal-margin, 0 2px);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after {
  opacity: var(--mat-slide-toggle-disabled-selected-handle-opacity, 1);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after {
  opacity: var(--mat-slide-toggle-disabled-unselected-handle-opacity, 0.38);
}
.mdc-switch__handle::before, .mdc-switch__handle::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  width: 100%;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transition: background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1), border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
}
@media (forced-colors: active) {
  .mdc-switch__handle::before, .mdc-switch__handle::after {
    border-color: currentColor;
  }
}
.mdc-switch--selected:enabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-handle-color, var(--mat-sys-on-primary));
}
.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-hover-handle-color, var(--mat-sys-primary-container));
}
.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-focus-handle-color, var(--mat-sys-primary-container));
}
.mdc-switch--selected:enabled:active .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-pressed-handle-color, var(--mat-sys-primary-container));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:hover:not(:focus):not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:focus:not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:active .mdc-switch__handle::after, .mdc-switch--selected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-disabled-selected-handle-color, var(--mat-sys-surface));
}
.mdc-switch--unselected:enabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-handle-color, var(--mat-sys-outline));
}
.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-hover-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-focus-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected:enabled:active .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-pressed-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-disabled-unselected-handle-color, var(--mat-sys-on-surface));
}
.mdc-switch__handle::before {
  background: var(--mat-slide-toggle-handle-surface-color);
}

.mdc-switch__shadow {
  border-radius: inherit;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}
.mdc-switch:enabled .mdc-switch__shadow {
  box-shadow: var(--mat-slide-toggle-handle-elevation-shadow);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__shadow, .mdc-switch.mdc-switch--disabled .mdc-switch__shadow {
  box-shadow: var(--mat-slide-toggle-disabled-handle-elevation-shadow);
}

.mdc-switch__ripple {
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  width: var(--mat-slide-toggle-state-layer-size, 40px);
  height: var(--mat-slide-toggle-state-layer-size, 40px);
}
.mdc-switch__ripple::after {
  content: "";
  opacity: 0;
}
.mdc-switch--disabled .mdc-switch__ripple::after {
  display: none;
}
.mat-mdc-slide-toggle-disabled-interactive .mdc-switch__ripple::after {
  display: block;
}
.mdc-switch:hover .mdc-switch__ripple::after {
  transition: 75ms opacity cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:focus .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:active .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:hover:not(:focus) .mdc-switch__ripple::after, .mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mdc-switch--unselected:enabled:active .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-pressed-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}
.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-hover-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mdc-switch--selected:enabled:focus .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-focus-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mdc-switch--selected:enabled:active .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-pressed-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}

.mdc-switch__icons {
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 1;
  transform: translateZ(0);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__icons {
  opacity: var(--mat-slide-toggle-disabled-unselected-icon-opacity, 0.38);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__icons {
  opacity: var(--mat-slide-toggle-disabled-selected-icon-opacity, 0.38);
}

.mdc-switch__icon {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  opacity: 0;
  transition: opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1);
}
.mdc-switch--unselected .mdc-switch__icon {
  width: var(--mat-slide-toggle-unselected-icon-size, 16px);
  height: var(--mat-slide-toggle-unselected-icon-size, 16px);
  fill: var(--mat-slide-toggle-unselected-icon-color, var(--mat-sys-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--mat-slide-toggle-disabled-unselected-icon-color, var(--mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__icon {
  width: var(--mat-slide-toggle-selected-icon-size, 16px);
  height: var(--mat-slide-toggle-selected-icon-size, 16px);
  fill: var(--mat-slide-toggle-selected-icon-color, var(--mat-sys-on-primary-container));
}
.mdc-switch--selected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--mat-slide-toggle-disabled-selected-icon-color, var(--mat-sys-on-surface));
}

.mdc-switch--selected .mdc-switch__icon--on,
.mdc-switch--unselected .mdc-switch__icon--off {
  opacity: 1;
  transition: opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1);
}

.mat-mdc-slide-toggle {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  -webkit-tap-highlight-color: transparent;
  outline: 0;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,
.mat-mdc-slide-toggle .mdc-switch__ripple::after {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),
.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty) {
  transform: translateZ(0);
}
.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-focus-indicator::before {
  content: "";
}
.mat-mdc-slide-toggle .mat-internal-form-field {
  color: var(--mat-slide-toggle-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-slide-toggle-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-slide-toggle-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-slide-toggle-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-slide-toggle-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-slide-toggle-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-slide-toggle .mat-ripple-element {
  opacity: 0.12;
}
.mat-mdc-slide-toggle .mat-focus-indicator::before {
  border-radius: 50%;
}
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after {
  transition: none;
}
.mat-mdc-slide-toggle .mdc-switch:enabled + .mdc-label {
  cursor: pointer;
}
.mat-mdc-slide-toggle .mdc-switch--disabled + label {
  color: var(--mat-slide-toggle-disabled-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-slide-toggle label:empty {
  display: none;
}

.mat-mdc-slide-toggle-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--mat-slide-toggle-touch-target-size, 48px);
  width: 100%;
  transform: translate(-50%, -50%);
  display: var(--mat-slide-toggle-touch-target-display, block);
}
[dir=rtl] .mat-mdc-slide-toggle-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2,changeDetection:0})}return i})();var I1=()=>[],P1=(i,t)=>t.date;function O1(i,t){if(i&1&&(W(0,"p",2),re(1),q()),i&2){let e=Ee();X(),nt(e.languageService.t("DIALOG.WIN_TEXT"))}}function F1(i,t){if(i&1&&(W(0,"div",18)(1,"span",27),re(2),q(),W(3,"span",28),re(4),q(),W(5,"span",29),re(6),ni(7,"number"),q()()),i&2){let e=t,n=Ee(2);X(2),nt(n.formatTime(e.time)),X(2),Bt("LV ",e.level||1),X(2),nt(Ri(7,3,e.score,"1.0-0"))}}function N1(i,t){if(i&1&&(W(0,"p",19),re(1),ni(2,"number"),q()),i&2){let e=Ee(2);X(),Bt(" ",Ri(2,1,e.gameService.highScore(),"1.0-0")," ")}}function L1(i,t){if(i&1&&(W(0,"div",26)(1,"span",27),re(2),q(),W(3,"span",28),re(4),q(),W(5,"span",29),re(6),ni(7,"number"),q()()),i&2){let e=t.$implicit,n=Ee(2);X(2),nt(n.formatTime(e.time)),X(2),Bt("LV ",e.level||1),X(2),nt(Ri(7,3,e.score,"1.0-0"))}}function k1(i,t){if(i&1&&(W(0,"div",16)(1,"p",17),re(2),q(),Dt(3,F1,8,6,"div",18)(4,N1,3,4,"p",19),q(),W(5,"div",20)(6,"p",21),re(7),q(),W(8,"div",22)(9,"span",23),re(10),q(),W(11,"span",24),re(12),q(),W(13,"span",25),re(14),q()(),zc(15,L1,8,6,"div",26,P1),q()),i&2){let e,n=Ee();X(2),Bt(" ",n.languageService.t("DIALOG.BEST_SCORE")," "),X(),Rt((e=n.gameService.bestEntry())?3:4,e),X(4),nt(n.languageService.t("DIALOG.HISTORY_TITLE")),X(3),nt(n.languageService.t("GAME.TIME",Gm(6,I1))),X(2),nt(n.languageService.t("GAME.RESEARCH_LVL")),X(2),nt(n.languageService.t("GAME.SCORE")),X(),Gc(n.gameService.scoreHistory())}}function U1(i,t){if(i&1&&(W(0,"p",4),re(1),q()),i&2){let e=Ee();X(),nt(e.languageService.t("DIALOG.NO_DATA"))}}function B1(i,t){i&1&&rt(0,"div",8)}var $d=class i{fullscreenService=A($i);gameService=A(es);musicservice=A(Xi);languageService=A(oi);isShowSpinner=Ne(!1);showSpinner(){this.isShowSpinner.set(!0)}ngOnDestroy(){this.isShowSpinner.set(!1)}toggleMusic(){this.musicservice.isMusicOn()?this.musicservice.stopMusic():this.musicservice.startAutoplay()}clearHighScore(){localStorage.removeItem("orbital_hs"),localStorage.removeItem("orbital_history"),localStorage.removeItem("orbital_best_entry"),this.gameService.highScore.set(0),this.gameService.scoreHistory.set([]),this.gameService.bestEntry.set(null)}formatTime(t){let e=Math.floor(t/60),n=t%60;return`${e}:${n.toString().padStart(2,"0")}`}startGame(){this.fullscreenService.toggleTabFullScreenModeGame(),this.gameService.cleanup(),this.gameService.initGameVariables(),this.gameService.addLog(this.languageService.translate("GAME.LOG_DEFENSE_ACTIVE"),"event"),this.gameService.startSpawning()}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=_t({type:i,selectors:[["app-game-dialog"]],decls:30,vars:15,consts:[[1,"menu-modal-content"],[1,"d-flex","flex-column","justify-content-center","p-2","flex-grow-1"],[1,"hyper-jump-text","text-center","text-md-start"],[1,"scores"],[1,"score-display","text-center","text-md-start"],[1,"d-flex","flex-column","justify-content-center","p-2","min-w-md-200"],["tabindex","0",1,"start-btn","fw-bold",3,"click"],["routerLink","",1,"start-btn","fw-bold","d-flex","align-items-center","justify-content-center","gap-2",3,"click"],["role","status",1,"spinner-border","spinner-border-sm"],[1,"start-btn","fw-bold","mode-toggle",3,"click"],[1,"me-2"],[1,"music-box","fw-bold","mb-2"],["labelPosition","before",3,"toggleChange","checked"],[1,"fw-bold","me-2"],[1,"music-box","fw-bold"],["mat-icon-button","",1,"mt-2","w-100",3,"click","title"],[1,"best-score-container","mb-3"],[1,"score-display","high","text-center","text-md-start","mb-1"],[1,"history-item","best-entry-highlight"],[1,"score-display","high","text-center","text-md-start"],[1,"history-list"],[1,"history-title"],[1,"history-header"],[1,"header-time"],[1,"header-level"],[1,"header-score"],[1,"history-item"],[1,"history-time"],[1,"history-level"],[1,"history-score"]],template:function(e,n){e&1&&(W(0,"div",0)(1,"div",1)(2,"h1"),re(3),q(),Dt(4,O1,2,1,"p",2),W(5,"div",3),Dt(6,k1,17,7)(7,U1,2,1,"p",4),q()(),W(8,"div",5)(9,"button",6),ze("click",function(){return n.startGame()}),re(10),q(),W(11,"button",7),ze("click",function(){return n.showSpinner()}),W(12,"span"),re(13),q(),Dt(14,B1,1,0,"div",8),q(),W(15,"button",9),ze("click",function(){return n.gameService.toggleInversion()}),W(16,"mat-icon",10),re(17),q(),re(18),q(),W(19,"div",11)(20,"mat-slide-toggle",12),ze("toggleChange",function(){return n.gameService.toggleIntroduction()}),W(21,"span",13),re(22),q()()(),W(23,"div",14)(24,"mat-slide-toggle",12),ze("toggleChange",function(){return n.toggleMusic()}),W(25,"span",13),re(26),q()()(),W(27,"button",15),ze("click",function(){return n.clearHighScore()}),W(28,"mat-icon"),re(29,"delete"),q()()()()),e&2&&(X(3),nt(n.gameService.winState()?n.languageService.t("DIALOG.WIN_TITLE"):n.languageService.t("DIALOG.LOSE_TITLE")),X(),Rt(n.gameService.winState()?4:-1),X(2),Rt(n.gameService.scoreHistory().length>0?6:7),X(4),Bt(" ",n.gameService.winState()?n.languageService.t("DIALOG.START_NEW"):n.languageService.t("DIALOG.START")," "),X(3),nt(n.languageService.t("DIALOG.INTRO")),X(),Rt(n.isShowSpinner()?14:-1),X(3),nt(n.gameService.isColorsInverted?"dark_mode":"light_mode"),X(),Bt(" ",n.gameService.isColorsInverted?"Dark-Mode":"Light-Mode"," "),X(2),St("checked",n.gameService.introductionEnabled()),X(2),Vn(" ",n.languageService.t("DIALOG.ENABLE_INTRO")," ",n.gameService.introductionEnabled()?"ON":"OFF"," "),X(2),St("checked",n.musicservice.isMusicOn()),X(2),Vn(" ",n.languageService.t("DIALOG.SOUND")," ",n.musicservice.isMusicOn()?"ON":"OFF"," "),X(),St("title",n.languageService.t("DIALOG.DELETE_HISTORY")))},dependencies:[_y,ro,Sf,by,Hl,na],styles:[".menu-modal-content[_ngcontent-%COMP%]{border:1px solid #00fbff;background:#020617;border-radius:12px;pointer-events:auto!important;max-width:95vw;max-height:95vh;overflow-y:auto;display:flex;flex-direction:column;padding:1rem;min-width:280px}@media(min-width:768px){.menu-modal-content[_ngcontent-%COMP%]{flex-direction:row;padding:2rem;min-width:600px}}h1[_ngcontent-%COMP%]{color:#00fbff;letter-spacing:2px;margin-bottom:.5rem;text-shadow:0 0 15px rgba(0,251,255,.7);font-size:clamp(1.2rem,4vw,2.5rem);text-align:center}@media(min-width:768px){h1[_ngcontent-%COMP%]{letter-spacing:5px;text-align:left}}.hyper-jump-text[_ngcontent-%COMP%]{color:#00fbff;margin-bottom:15px}.scores[_ngcontent-%COMP%]{margin:15px 0}.score-display[_ngcontent-%COMP%]{margin:5px 0;color:#64748b;font-size:.9rem}.score-display.high[_ngcontent-%COMP%]{color:#fc0;font-weight:700;font-size:1.1rem;margin-bottom:5px}.best-entry-highlight[_ngcontent-%COMP%]{background:#ffcc001a;border:1px solid rgba(255,204,0,.3);padding:5px 10px;border-radius:6px}.best-entry-highlight[_ngcontent-%COMP%]   .history-score[_ngcontent-%COMP%]{color:#fc0}.history-list[_ngcontent-%COMP%]{background:#00fbff0d;border-radius:8px;padding:10px;border:1px solid rgba(0,251,255,.2);max-height:200px;overflow-y:auto}.history-title[_ngcontent-%COMP%]{color:#00fbff;font-size:.8rem;text-transform:uppercase;margin-bottom:5px;opacity:.8}@media(min-width:768px){.min-w-md-200[_ngcontent-%COMP%]{min-width:200px}}.history-item[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;font-size:.85rem;margin-bottom:3px;color:#e2e8f0;border-bottom:1px solid rgba(255,255,255,.05);padding-bottom:2px}.history-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;font-size:.7rem;color:#64748b;text-transform:uppercase;margin-bottom:5px;border-bottom:1px solid rgba(0,251,255,.2);padding-bottom:2px}.history-item[_ngcontent-%COMP%] > span[_ngcontent-%COMP%], .history-header[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{flex:1}.header-time[_ngcontent-%COMP%], .history-time[_ngcontent-%COMP%]{text-align:left}.header-level[_ngcontent-%COMP%], .history-level[_ngcontent-%COMP%]{text-align:center}.header-score[_ngcontent-%COMP%], .history-score[_ngcontent-%COMP%]{text-align:right}.history-item[_ngcontent-%COMP%]:last-child{border-bottom:none}.history-date[_ngcontent-%COMP%]{color:#94a3b8;min-width:60px}.history-score[_ngcontent-%COMP%]{font-weight:700;color:#00fbff}.history-time[_ngcontent-%COMP%]{color:#94a3b8;font-style:italic}.history-level[_ngcontent-%COMP%]{color:#fb7185;font-weight:500}.start-btn[_ngcontent-%COMP%]{background:#00fbff;color:#000;padding:10px;border:none;font-size:clamp(.8rem,2vw,1rem);border-radius:5px;margin-top:10px;width:100%;cursor:pointer!important;touch-action:manipulation!important;-webkit-tap-highlight-color:transparent;pointer-events:auto!important}.mode-toggle[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;background:#1e293b;color:#00fbff;border:1px solid #00fbff;transition:all .2s}.mode-toggle[_ngcontent-%COMP%]:hover{background:#334155;box-shadow:0 0 10px #00fbff4d}.music-box[_ngcontent-%COMP%]{background:#1e293b;color:#00fbff;padding:8px 15px;border:1px solid #00fbff;font-size:clamp(.8rem,2vw,1rem);border-radius:5px;margin-top:10px;width:100%;display:flex;justify-content:center;align-items:center;cursor:pointer;transition:all .2s}.music-box[_ngcontent-%COMP%]:hover{background:#334155;box-shadow:0 0 10px #00fbff4d}.music-box[_ngcontent-%COMP%]     .mat-mdc-slide-toggle .mdc-label{color:#00fbff!important}"]})};var qd=class i{shipImage=null;particles=[];imageLoaded=!1;constructor(){}setShipImage(t){this.shipImage&&this.shipImage.src.endsWith(t)||(this.imageLoaded=!1,this.shipImage=new Image,this.shipImage.src=t,this.shipImage.onload=()=>{this.imageLoaded=!0})}initParticles(t,e){if(this.particles.length===0)for(let n=0;n<350;n++)this.particles.push({angle:Math.random()*Math.PI*2,r:Math.random()*Math.max(t,e),speed:15+Math.random()*25,length:15+Math.random()*10})}reset(){this.particles=[]}drawWarp(t,e,n,r,s,o){let a=r-s,c=Math.min(1,Math.max(0,a/o));this.initParticles(e,n),t.save(),t.translate(e/2,n/2);let l=0;c<.1?l=c*10:c>.8?l=(1-c)*5:l=1,t.fillStyle=`rgba(0, 10, 40, ${l*.9})`,t.fillRect(-e/2,-n/2,e,n),t.globalCompositeOperation="lighter",this.drawTunnel(t,e,n,l,r),this.drawEventHorizon(t,c,l,r),this.drawShip(t,c,l,r,e,n),this.drawFlash(t,c,l,r,e,n),t.restore()}drawTunnel(t,e,n,r,s){let o=Math.sin(s*.001)*10,a=Math.cos(s*8e-4)*7;this.particles.forEach(c=>{c.r+=c.speed,c.r>Math.max(e,n)&&(c.r=20,c.angle=Math.random()*Math.PI*2);let l=c.angle+Math.sin(c.r*.01+s*.002)*.1,u=Math.pow(c.r/200,2),h=o*u,d=a*u,p=Math.cos(l)*c.r+h,g=Math.sin(l)*c.r+d,b=c.length*(1+c.r/100),m=Math.pow((c.r+b)/200,2),f=Math.cos(l)*(c.r+b)+o*m,x=Math.sin(l)*(c.r+b)+a*m,M=Math.min(1,c.r/300)*r,w=.5+c.r/200;t.beginPath(),t.moveTo(p,g),t.lineTo(f,x),t.lineWidth=w,t.strokeStyle=`rgba(150, 230, 255, ${M})`,t.stroke()})}drawEventHorizon(t,e,n,r){let o=r*.113;for(let a=0;a<7;a++){let c=e*800+a*40,l=(1-a/7)*.6*n;t.beginPath();for(let h=0;h<=Math.PI*2;h+=.1){let d=Math.sin(h*5+o+a)*5+Math.cos(h*3-o*.5)*5,p=c+d,g=Math.cos(h)*p,b=Math.sin(h)*p;h===0?t.moveTo(g,b):t.lineTo(g,b)}t.closePath(),t.lineWidth=5;let u=a%2===0?`rgba(0, 255, 255, ${l})`:`rgba(0, 100, 255, ${l})`;t.strokeStyle=u,t.stroke(),a<3&&(t.lineWidth=1,t.strokeStyle=`rgba(255, 255, 255, ${l*.5})`,t.stroke())}}drawShip(t,e,n,r,s,o){if(!this.imageLoaded||!this.shipImage)return;t.save();let a=s*.25,c=o*.15,l=Math.atan2(-c,-a)+Math.PI/2;t.translate(a,c),t.rotate(l);let u=2.5-e*1,h=Math.sin(e*Math.PI)*.8,d=(1-h*.3)*u,p=(1+h*1.5)*u,g=e*15,b=(Math.random()-.5)*g,m=(Math.random()-.5)*g;t.translate(b,m);let f=100,x=100,M=this.shipImage;t.save(),t.globalAlpha=.3*n,t.translate(0,25),t.scale(d*1.05,p*1.05),t.drawImage(M,-f/2,-x/2,f,x),t.restore(),t.save(),t.scale(d,p),t.globalAlpha=n,t.drawImage(M,-f/2,-x/2,f,x),t.restore(),t.restore()}drawFlash(t,e,n,r,s,o){let a=e<.3?30+Math.sin(r*.01)*10:e*5*Math.max(s,o),c=t.createRadialGradient(0,0,0,0,0,a);c.addColorStop(0,`rgba(255, 255, 255, ${n})`),c.addColorStop(.3,`rgba(0, 255, 255, ${n*.7})`),c.addColorStop(1,"rgba(0, 50, 150, 0)"),t.fillStyle=c,t.beginPath(),t.arc(0,0,a,0,Math.PI*2),t.fill()}static \u0275fac=function(e){return new(e||i)};static \u0275prov=oe({token:i,factory:i.\u0275fac,providedIn:"root"})};var V1=["gameCanvas"];function z1(i,t){i&1&&(W(0,"div",1),rt(1,"app-game-dialog"),q())}function G1(i,t){if(i&1&&(W(0,"div",13)(1,"div",32),re(2),q()()),i&2){let e=Ee(3);X(2),nt(e.gameService.resumeCountdown())}}function H1(i,t){if(i&1&&(W(0,"div",19)(1,"label"),re(2),q(),W(3,"div",33),rt(4,"div",34),q()()),i&2){let e=Ee(3);X(2),nt(e.languageService.t("GAME.SHIELD")),X(2),Vs("width",e.gameService.shieldHp,"%")}}function W1(i,t){if(i&1&&(W(0,"div",35),re(1),q()),i&2){let e=t.$implicit;Cr(e.type),X(),Vn(" ",e.type==="research"?"\u{1F52C}":"\u26A0\uFE0F"," ",e.text," ")}}function j1(i,t){if(i&1&&(Ci(),W(0,"svg",25),rt(1,"rect",36),q()),i&2){let e=Ee(3);X(),Vs("stroke-dashoffset",e.getShieldDashOffset())("stroke","rgba(0, 255, 255, "+e.gameService.shieldHp/100+")")}}function X1(i,t){if(i&1){let e=tn();W(0,"button",37),ze("mousedown",function(r){et(e);let s=Ee(3);return tt(s.buy("sats",r))})("touchstart",function(r){et(e);let s=Ee(3);return tt(s.buy("sats",r))}),re(1),q()}if(i&2){let e=Ee(3);X(),Bt("\u21C4 ",e.languageService.t("GAME.BUY_ORBIT")," ")}}function $1(i,t){if(i&1){let e=tn();W(0,"button",31),ze("mousedown",function(r){et(e);let s=Ee(3);return tt(s.buy("sats",r))})("touchstart",function(r){et(e);let s=Ee(3);return tt(s.buy("sats",r))}),re(1),W(2,"span"),re(3,"(150 EP)"),q()()}if(i&2){let e=Ee(3);gt("power-active",e.gameService.ep>=150),St("disabled",e.gameService.ep<150),X(),Vn(" \u{1F6F0}\uFE0F ",e.languageService.t("GAME.BUY_SATS")," ",e.gameService.satellitesCount)}}function q1(i,t){if(i&1&&(W(0,"div",30),rt(1,"div",38),q()),i&2){let e=Ee(3);X(),Vs("height",e.marinesCooldownProgress,"%")}}function Y1(i,t){if(i&1){let e=tn();W(0,"div",6),Dt(1,G1,3,1,"div",13),W(2,"div",14)(3,"div",15)(4,"div",16),re(5),q(),W(6,"div",17),re(7),ni(8,"number"),q()()(),W(9,"div",18),Dt(10,H1,5,3,"div",19),W(11,"div",20),zc(12,W1,2,4,"div",21,Um),q()(),W(14,"div",22)(15,"div",23)(16,"button",24),ze("mousedown",function(r){et(e);let s=Ee(2);return tt(s.buy("shield",r))})("touchstart",function(r){et(e);let s=Ee(2);return tt(s.buy("shield",r))}),Dt(17,j1,2,4,":svg:svg",25),re(18),W(19,"span"),re(20,"(100 EP)"),q()(),Dt(21,X1,2,1,"button",26)(22,$1,4,5,"button",27),q(),W(23,"div",28)(24,"button",29),ze("mousedown",function(r){et(e);let s=Ee(2);return tt(s.buy("marines",r))})("touchstart",function(r){et(e);let s=Ee(2);return tt(s.buy("marines",r))}),re(25),W(26,"span"),re(27,"(250 EP)"),q(),Dt(28,q1,2,2,"div",30),q(),W(29,"button",31),ze("mousedown",function(r){et(e);let s=Ee(2);return tt(s.buy("research",r))})("touchstart",function(r){et(e);let s=Ee(2);return tt(s.buy("research",r))}),re(30),W(31,"span"),re(32,"(200 EP)"),q()()()()()}if(i&2){let e=Ee(2);X(),Rt(e.gameService.resumeCountdown()>0?1:-1),X(3),gt("score-active",e.isScoreZone),X(),Vn("",e.languageService.t("GAME.SCORE")," : ",e.scoreFromated," "),X(),gt("ep-active",e.gameService.isInsideHabitableZone),X(),Vn(" ",e.languageService.t("GAME.EP"),": ",Ri(8,28,e.gameService.ep,"1.0-0")," "),X(3),Rt(e.gameService.shieldActive?10:-1),X(2),Gc(e.gameService.scienceLog),X(4),gt("shield-active",e.gameService.shieldHp>0)("critical",e.gameService.shieldHp<35),St("disabled",e.gameService.ep<100||e.gameService.shieldHp===100),X(),Rt(e.gameService.shieldActive?17:-1),X(),Bt(" \u{1F6E1}\uFE0F ",e.languageService.t("GAME.BUY_SHIELD")),X(3),Rt(e.gameService.satellitesCount>=5?21:22),X(3),gt("power-active",e.gameService.ep>=250&&e.marinesCooldownProgress===100),St("disabled",e.gameService.ep<250||e.marinesCooldownProgress<100),X(),Bt(" \u{1F396}\uFE0F ",e.languageService.t("GAME.BUY_MARINES")," "),X(3),Rt(e.marinesCooldownProgress<100?28:-1),X(),gt("power-active",e.gameService.ep>=200),St("disabled",e.gameService.ep<200),X(),Vn("\u{1F52C} ",e.languageService.t("GAME.RESEARCH_LVL")," ",e.gameService.researchLevel," ")}}function Z1(i,t){if(i&1){let e=tn();W(0,"button",39),ze("mousedown",function(){et(e);let r=Ee(2);return tt(r.triggerOrbitalJump())})("touchstart",function(){et(e);let r=Ee(2);return tt(r.triggerOrbitalJump())}),re(1),ni(2,"number"),W(3,"span"),re(4),ni(5,"number"),q()()}if(i&2){let e=Ee(2);X(),Vn(" ",e.languageService.t("GAME.ORBITAL_JUMP")," ",Ri(2,3,e.jumpBounsLevel,"1.0-0")," "),X(3),Bt("(+",Ri(5,6,e.jumpBonus,"1.0-0")," PTS)")}}function J1(i,t){if(i&1){let e=tn();W(0,"button",40),ze("mousedown",function(){et(e);let r=Ee(2);return tt(r.gameService.resumeGame())})("touchstart",function(){et(e);let r=Ee(2);return tt(r.gameService.resumeGame())}),re(1),q()}if(i&2){let e=Ee(2);X(),Bt("",e.languageService.t("GAME.RESUME")," ")}}function K1(i,t){if(i&1){let e=tn();W(0,"button",41),ze("mousedown",function(r){et(e);let s=Ee(2);return tt(s.gameService.togglePause(r))})("touchstart",function(r){et(e);let s=Ee(2);return tt(s.gameService.togglePause(r))}),rt(1,"div",42),q()}}function Q1(i,t){if(i&1){let e=tn();W(0,"div",1)(1,"div",43)(2,"h2",44),re(3),q(),W(4,"p",45),re(5),q(),W(6,"div",46)(7,"button",47),ze("click",function(){et(e);let r=Ee(2);return tt(r.selectReward(1))}),W(8,"div",48),re(9,"\u{1F396}\uFE0F"),q(),W(10,"div",49),re(11),q(),W(12,"div",50),re(13),q()(),W(14,"button",47),ze("click",function(){et(e);let r=Ee(2);return tt(r.selectReward(2))}),W(15,"div",48),re(16,"\u{1F50B}"),q(),W(17,"div",49),re(18,"300 EP"),q(),W(19,"div",50),re(20),q()(),W(21,"button",51),ze("click",function(){et(e);let r=Ee(2);return tt(r.selectReward(3))}),W(22,"div",48),re(23,"\u{1F4A5}"),q(),W(24,"div",49),re(25),q(),W(26,"div",50),re(27),q()()()()()}if(i&2){let e=Ee(2);X(),gt("invert-colors",e.gameService.isColorsInverted),X(2),nt(e.languageService.t("GAME.REWARD_TITLE")),X(2),nt(e.languageService.t("GAME.REWARD_SUBTITLE")),X(2),St("disabled",e.marinesCooldownProgress<100),X(4),nt(e.languageService.t("GAME.REWARD_MARINES")),X(2),nt(e.languageService.t("GAME.REWARD_MARINES_DESC")),X(),St("disabled",e.gameService.ep===e.gameService.maxEp),X(6),nt(e.languageService.t("GAME.REWARD_EP_DESC")),X(5),nt(e.languageService.t("GAME.REWARD_NOVA")),X(2),nt(e.languageService.t("GAME.REWARD_NOVA_DESC"))}}function eD(i,t){if(i&1&&(W(0,"button",9),re(1),ni(2,"number"),W(3,"span"),re(4),ni(5,"number"),q()()),i&2){let e=Ee(3);X(),Vn(" ",e.languageService.t("GAME.ORBITAL_JUMP")," ",Ri(2,3,e.jumpBounsLevel,"1.0-0")," "),X(3),Bt("(+",Ri(5,6,e.jumpBonus,"1.0-0")," PTS)")}}function tD(i,t){if(i&1){let e=tn();W(0,"button",31),ze("mousedown",function(r){et(e);let s=Ee(3);return s.buy("shield",r),tt(s.closeIntroduction())})("touchstart",function(r){et(e);let s=Ee(3);return s.buy("shield",r),tt(s.closeIntroduction())}),re(1),W(2,"span"),re(3,"(100 EP)"),q()()}if(i&2){let e=Ee(3);gt("shield-active",e.gameService.shieldHp>0)("critical",e.gameService.shieldHp<35),St("disabled",e.gameService.ep<100||e.gameService.shieldHp===100),X(),Bt(" \u{1F6E1}\uFE0F ",e.languageService.t("GAME.BUY_SHIELD"))}}function nD(i,t){if(i&1){let e=tn();W(0,"button",31),ze("mousedown",function(r){et(e);let s=Ee(3);return s.buy("sats",r),tt(s.closeIntroduction())})("touchstart",function(r){et(e);let s=Ee(3);return s.buy("sats",r),tt(s.closeIntroduction())}),re(1),W(2,"span"),re(3,"(150 EP)"),q()()}if(i&2){let e=Ee(3);gt("power-active",e.gameService.ep>=150),St("disabled",e.gameService.ep<150),X(),Vn(" \u{1F6F0}\uFE0F ",e.languageService.t("GAME.BUY_SATS")," ",e.gameService.satellitesCount)}}function iD(i,t){if(i&1){let e=tn();W(0,"button",29),ze("mousedown",function(r){et(e);let s=Ee(3);return s.buy("marines",r),tt(s.closeIntroduction())})("touchstart",function(r){et(e);let s=Ee(3);return s.buy("marines",r),tt(s.closeIntroduction())}),re(1),W(2,"span"),re(3,"(250 EP)"),q()()}if(i&2){let e=Ee(3);gt("power-active",e.gameService.ep>=250&&e.marinesCooldownProgress===100),St("disabled",e.gameService.ep<250||e.marinesCooldownProgress<100),X(),Bt(" \u{1F396}\uFE0F ",e.languageService.t("GAME.BUY_MARINES")," ")}}function rD(i,t){if(i&1){let e=tn();W(0,"button",31),ze("mousedown",function(r){et(e);let s=Ee(3);return s.buy("research",r),tt(s.closeIntroduction())})("touchstart",function(r){et(e);let s=Ee(3);return s.buy("research",r),tt(s.closeIntroduction())}),re(1),W(2,"span"),re(3,"(200 EP)"),q()()}if(i&2){let e=Ee(3);gt("power-active",e.gameService.ep>=200),St("disabled",e.gameService.ep<200),X(),Vn("\u{1F52C} ",e.languageService.t("GAME.RESEARCH_LVL")," ",e.gameService.researchLevel," ")}}function sD(i,t){if(i&1){let e=tn();W(0,"button",60),ze("click",function(){et(e);let r=Ee(3);return tt(r.closeIntroduction())}),re(1),q()}if(i&2){let e=Ee(3);X(),Bt(" ",e.languageService.t("DIALOG.CLOSE")," ")}}function oD(i,t){if(i&1&&(W(0,"div",12)(1,"div",52)(2,"h2",44),re(3),q(),W(4,"div",53)(5,"div",54),Dt(6,eD,6,9,"button",9),q(),W(7,"p",55),re(8),q(),W(9,"div",54),Dt(10,tD,4,6,"button",56)(11,nD,4,5,"button",27)(12,iD,4,4,"button",57)(13,rD,4,5,"button",58)(14,sD,2,1,"button",59),q()()()()),i&2){let e,n,r=t,s=Ee(2);X(),gt("invert-colors",s.gameService.isColorsInverted),X(2),nt(s.languageService.t("POWERUP_INTRO."+r+"_TITLE")),X(3),Rt((e=r)==="JUMP"?6:-1),X(2),nt(s.languageService.t("POWERUP_INTRO."+r+"_TEXT")),X(2),Rt((n=r)==="SHIELD"?10:n==="SATS"?11:n==="MARINES"?12:n==="RESEARCH"?13:n==="JUMP"?14:-1)}}function aD(i,t){if(i&1){let e=tn();W(0,"div",2),ze("mousedown",function(r){et(e);let s=Ee();return tt(s.onDown(r))})("touchstart",function(r){et(e);let s=Ee();return tt(s.onDown(r))})("mouseup",function(){et(e);let r=Ee();return tt(r.onUp())})("touchend",function(){et(e);let r=Ee();return tt(r.onUp())})("mouseleave",function(){et(e);let r=Ee();return tt(r.onUp())}),W(1,"div",3),rt(2,"app-3d"),q(),rt(3,"canvas",4,0),W(5,"div",5),Dt(6,Y1,33,31,"div",6),q()(),W(7,"div",7)(8,"div",8),Dt(9,Z1,6,9,"button",9),Dt(10,J1,2,1,"button",10)(11,K1,2,0,"button",11),q()(),Dt(12,Q1,28,11,"div",1),Dt(13,oD,15,6,"div",12)}if(i&2){let e,n=Ee();gt("invert-colors",n.gameService.isColorsInverted),X(6),Rt(n.gameService.gameActive()&&!n.gameService.winState()?6:-1),X(),gt("invert-colors",n.gameService.isColorsInverted),X(2),Rt(n.gameService.researchLevel>=10&&!n.gameService.isJumping?9:-1),X(),Rt(n.gameService.isPaused&&!n.gameService.showRewardDialog()?10:n.gameService.showRewardDialog()?-1:11),X(2),Rt(n.gameService.showRewardDialog()?12:-1),X(),Rt((e=n.gameService.showIntroduction())?13:-1,e)}}var Yd=class i{languageService=A(oi);warpAnimationService=A(qd);_canvas;ctx;set canvas(t){t&&(this._canvas=t,this.ctx=this._canvas.nativeElement.getContext("2d"),this.resize(),this.stars.length===0&&this.initStars())}get canvasRef(){return this._canvas}resize(){this._canvas&&(this._canvas.nativeElement.width=window.innerWidth,this._canvas.nativeElement.height=window.innerHeight,this.scale=Math.min(window.innerWidth,window.innerHeight)/this.gameService.COORDINATE_BASE,this.initStars())}onUp(){this.isPressing=!1}onContextMenu(t){t.preventDefault()}cdr=A(_n);fullscreenService=A($i);gameService=A(es);musicservice=A(Xi);isPressing=!1;playerAngle=0;playerRotation=0;shipDirection=0;marinesCooldown=15e3;marinesCooldownProgress=100;lastShotTime=0;lastDelta=0;plusParticles=[];stars=[];isScoreZone=!1;isInsideYellowZone=!1;isInsideRedZone=!1;isInsideCoronaZone=!1;playerImg=new Image;animFrame;scale=1;cachedGlassCanvas=null;lastShieldHpForCracks=-1;lastInvertedState=!1;lastSunProximityVibeTime=0;ngOnInit(){this.setShipSkin("assets/ship-skin/elite-interceptor-skin.svg"),this.gameLoop(),document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&this.gameService.isPaused&&(this.fullscreenService.isFullScreen.set(!!document.fullscreenElement),window.focus())})}setShipSkin(t){this.playerImg.src=t,this.warpAnimationService.setShipImage(this.playerImg.src)}ngOnDestroy(){this.gameService.cancelVibration(),this.gameService.cleanup(),cancelAnimationFrame(this.animFrame),this.musicservice.stopMusic()}get scoreFromated(){return Math.floor(this.gameService.score)}get jumpBounsLevel(){return Math.floor(this.gameService.researchLevel/10)}get jumpBonus(){if(this.gameService.researchLevel<10)return 0;let t=Math.sqrt(this.gameService.researchLevel)*.212;return Math.floor(this.gameService.score*t)}initStars(){this.stars=[];for(let t=0;t<150;t++)this.stars.push({x:Math.random()*window.innerWidth,y:Math.random()*window.innerHeight,size:Math.random()*1.5+.5,opacity:Math.random()})}onDown(t){this.fullscreenService.isFullScreen().valueOf()||this.fullscreenService.toggleTabFullScreenModeGame(),this.isPressing=!0,t.preventDefault()}triggerOrbitalJump(){if(this.gameService.researchLevel>=10&&!this.gameService.isJumping){let t=this.jumpBonus;this.gameService.isJumping=!0,this.gameService.score+=t,this.gameService.addLog(this.languageService.t("GAME.LOG_ORBITAL_JUMP",[t.toLocaleString()]),"event")}}buy(t,e){switch(e&&(this.onDown(e),setTimeout(()=>this.onUp(),50)),t){case"shield":this.buyShield();break;case"sats":this.handleSatelliteAction();break;case"marines":this.buyMarines();break;case"research":this.buyResearch();break}}buyShield(){this.gameService.ep>=100&&this.gameService.shieldHp<100&&(this.gameService.ep-=100,this.gameService.shieldActive=!0,this.gameService.shieldHp=100,this.gameService.addLog(this.languageService.t("GAME.LOG_SHIELD_ACTIVE"),"system"),this.gameService.vibrateAction(30))}handleSatelliteAction(){if(this.gameService.satellitesCount>=5){this.gameService.flightDirection*=-1;let t=this.gameService.flightDirection===1?this.languageService.t("GAME.LOG_CLOCKWISE"):this.languageService.t("GAME.LOG_COUNTER_CLOCKWISE");this.gameService.addLog(this.languageService.t("GAME.LOG_ORBIT_REVERSE",[t]),"system"),this.gameService.vibrateAction(20);return}this.gameService.ep>=150&&(this.gameService.ep-=150,this.gameService.satellitesCount++,this.gameService.addLog(this.languageService.t("GAME.LOG_SATS_LEVEL_UP",[this.gameService.satellitesCount*10,this.gameService.satellitesCount+"/5 online"]),"system"),this.gameService.vibrateAction(20),this.gameService.satellitesCount===5&&this.gameService.addLog(this.languageService.t("GAME.LOG_MAX_SATS"),"event"))}buyMarines(){let t=Date.now();this.gameService.ep>=250&&t>=this.gameService.marinesReadyTime&&(this.gameService.ep-=250,this.gameService.marinesActive=!0,this.gameService.addLog(this.languageService.t("GAME.LOG_MARINES_STARTED"),"event"),this.gameService.vibrateAction(30),setTimeout(()=>this.gameService.marinesActive=!1,1e4),this.gameService.marinesReadyTime=t+this.marinesCooldown)}updateNovaBombe(){if(this.gameService.novaBombeVisuals){let t=this.gameService.novaBombeVisuals;t.r+=15,t.alpha-=.01;for(let e=this.gameService.asteroids.length-1;e>=0;e--){let n=this.gameService.asteroids[e],r=Math.cos(this.playerAngle)*this.gameService.playerR,s=Math.sin(this.playerAngle)*this.gameService.playerR,o=Math.hypot(n.x-r,n.y-s);o<t.r&&o>t.r-100&&(this.gameService.score+=Math.floor(n.size*10),this.gameService.asteroids.splice(e,1))}t.alpha<=0&&(this.gameService.novaBombeVisuals=null)}}drawNovaBombe(t,e,n){if(!this.gameService.novaBombeVisuals||!this.ctx)return;let r=this.gameService.novaBombeVisuals,s=e+Math.cos(this.playerAngle)*(this.gameService.playerR*t),o=n+Math.sin(this.playerAngle)*(this.gameService.playerR*t);this.ctx.save(),this.ctx.beginPath(),this.ctx.arc(s,o,r.r*t,0,Math.PI*2),this.ctx.strokeStyle=`rgba(255, 100, 0, ${r.alpha})`,this.ctx.lineWidth=15*t,this.ctx.stroke(),this.ctx.shadowBlur=30*t,this.ctx.shadowColor="orange",this.ctx.stroke(),this.ctx.restore()}triggerNovaBombe(){this.gameService.novaBombeVisuals={x:0,y:0,r:0,alpha:1},this.gameService.stopSpawningUntil=Date.now()+5e3,this.gameService.addLog(this.languageService.t("GAME.LOG_REWARD_NOVA"),"event")}selectReward(t){switch(this.gameService.showRewardDialog.set(!1),t){case 1:this.gameService.marinesActive=!0,this.gameService.addLog(this.languageService.t("GAME.LOG_REWARD_MARINES"),"event"),setTimeout(()=>this.gameService.marinesActive=!1,1e4),this.gameService.marinesReadyTime=Date.now()+this.marinesCooldown;break;case 2:this.gameService.ep=Math.min(this.gameService.maxEp,this.gameService.ep+300),this.gameService.addLog(this.languageService.t("GAME.LOG_REWARD_EP",[300]),"event");break;case 3:this.triggerNovaBombe();break}this.gameService.isPaused=!1}buyResearch(){if(this.gameService.ep<200)return;let t=Math.floor((this.gameService.researchLevel-1)/3);this.gameService.ep-=200,this.gameService.researchLevel++,this.gameService.vibrateAction(20),this.gameService.researchLevel%3===0&&(this.spawnComet(),this.gameService.addLog(this.languageService.t("GAME.LOG_COMET_SIGHTED"),"research")),Math.floor((this.gameService.researchLevel-1)/3)>t&&(this.gameService.startSpawning(),this.gameService.addLog(this.languageService.t("GAME.LOG_DANGER_INCREASED"),"event"));let n=Math.floor(Math.sqrt(this.gameService.researchLevel)*.212*100);this.gameService.addLog(this.languageService.t("GAME.LOG_TECH_LEVEL_UP",[n]),"research"),this.gameService.researchLevel%5===0&&(this.gameService.isPaused=!0,this.gameService.showRewardDialog.set(!0)),this.gameService.researchLevel===10&&this.gameService.addLog(this.languageService.t("GAME.LOG_ANTIGRAV_READY"),"event")}spawnComet(){let t=Math.random()*Math.PI*2,e=Math.cos(t)*1e3,n=Math.sin(t)*1e3,r=(Math.random()-.5)*400,s=(Math.random()-.5)*r,o=(Math.random()-.5)*r,a=Math.atan2(o-n,s-e),c=1.5+Math.random()*2;this.gameService.comets.push({x:e,y:n,vx:Math.cos(a)*c,vy:Math.sin(a)*c,hue:Math.random()*360,lifespan:0,tail:[]}),this.gameService.addLog(this.languageService.t("GAME.LOG_COMET_APPROACH"),"event")}gameLoop(){let t=performance.now();this.gameService.lastTimestamp===0&&(this.gameService.lastTimestamp=t),this.lastDelta=(t-this.gameService.lastTimestamp)/1e3,this.gameService.lastTimestamp=t,this.lastDelta>.1&&(this.lastDelta=.1),this.update(),this.draw(),this.cdr.detectChanges(),this.animFrame=requestAnimationFrame(()=>this.gameLoop())}update(){if(!this.gameService.gameActive()||this.gameService.winState()||this.gameService.isPaused||this.gameService.resumeCountdown()>0)return;let t=Date.now();this.updateCooldowns(t),this.checkPowerUpIntroduction();let e=this.calculatePlayerRadiusDelta();if(this.applyPlayerPhysics(e),this.gameService.isJumping){let s=Math.min(window.innerWidth,window.innerHeight)/this.gameService.COORDINATE_BASE,o=Math.max(window.innerWidth,window.innerHeight)/2/s;if(!this.gameService.warpActive&&this.gameService.playerR>o+30&&(this.gameService.warpActive=!0,this.gameService.warpStart=Date.now()),this.gameService.warpActive&&Date.now()-this.gameService.warpStart>=this.gameService.warpDuration-500){this.gameService.warpActive=!1,this.gameService.isJumping=!1,this.endGame(!0);return}}let n=Math.cos(this.playerAngle)*this.gameService.playerR,r=Math.sin(this.playerAngle)*this.gameService.playerR;this.updateStars(),this.updateComets(n,r),this.updateCombat(t,n,r),this.updateNovaBombe(),this.updatePlusParticles(),this.updateSunProximityVibration(t),this.checkDeathConditions()}checkPowerUpIntroduction(){this.gameService.ep>=100&&!this.gameService.shieldActive&&this.gameService.shieldHp===0&&this.checkAndShowIntroduction("SHIELD"),this.gameService.ep>=150&&this.gameService.satellitesCount===0&&this.checkAndShowIntroduction("SATS"),this.gameService.ep>=250&&this.marinesCooldownProgress===100&&this.checkAndShowIntroduction("MARINES"),this.gameService.ep>=200&&this.checkAndShowIntroduction("RESEARCH"),this.gameService.researchLevel>=10&&!this.gameService.isJumping&&this.checkAndShowIntroduction("JUMP")}updateCooldowns(t){let e=this.gameService.marinesReadyTime-t;this.marinesCooldownProgress=e>0?(this.marinesCooldown-e)/this.marinesCooldown*100:100}calculatePlayerRadiusDelta(){if(this.gameService.isJumping)return 15;let t=Math.min(window.innerWidth,window.innerHeight)/this.gameService.COORDINATE_BASE,e=Math.max(window.innerWidth,window.innerHeight)/2/t;this.gameService.playerR>e+50&&(this.gameService.isRecovering=!0);let n=this.isPressing?4.5:-2;return this.gameService.isRecovering&&(n=-6,this.gameService.playerR<e-50&&(this.gameService.isRecovering=!1)),this.updateZonesAndScoring(),n}updateZonesAndScoring(){if(this.gameService.isInsideHabitableZone=this.gameService.playerR>300&&this.gameService.playerR<420,this.isInsideYellowZone=this.gameService.playerR>200&&this.gameService.playerR<=300,this.isInsideRedZone=this.gameService.playerR>110&&this.gameService.playerR<=190,this.isInsideCoronaZone=this.gameService.playerR>=65&&this.gameService.playerR<=110,this.gameService.isInsideHabitableZone){this.isScoreZone=!1;let t=30*(1+this.gameService.satellitesCount*.1);this.gameService.researchLevel>=50&&(t*=1+(this.gameService.researchLevel-49)*.05);let e=t*this.lastDelta;this.gameService.ep<this.gameService.maxEp?(this.gameService.ep=Math.min(this.gameService.maxEp,this.gameService.ep+e),this.spawnPlusParticle("green"),this.gameService.epOverflowLogged=!1):this.gameService.epOverflowLogged||(this.gameService.addLog(this.languageService.t("GAME.LOG_EP_OVERFLOW"),"system"),this.gameService.epOverflowLogged=!0)}else if(this.gameService.playerR<=300){this.isScoreZone=!0;let e=Math.pow(1e3/Math.max(1,this.gameService.playerR),2)*10,n=.4;this.isInsideCoronaZone?n=1.4:this.isInsideRedZone?n=.8:this.isInsideYellowZone&&(n=.6);let r=1+this.gameService.researchLevel*.1,s=e*n*r;this.gameService.score+=s*this.lastDelta,this.spawnPlusParticle("orange")}else this.isScoreZone=!1}spawnPlusParticle(t,e=!1){if(!e&&Math.random()>.15)return;let n=window.innerWidth/2,r=window.innerHeight/2,s=this.scale,o=1;this.isInsideCoronaZone?o=5:this.isInsideRedZone?o=2:this.isInsideYellowZone&&(o=1);let a=n+Math.cos(this.playerAngle)*(this.gameService.playerR*s),c=r+Math.sin(this.playerAngle)*(this.gameService.playerR*s);for(let l=0;l<o;l++)this.plusParticles.push({x:a+(Math.random()-.5)*15,y:c+(Math.random()-.5)*15,vx:(Math.random()-.5)*1.2,vy:-1-Math.random()*2,alpha:1,color:t==="orange"?"#ffcc00":"#00ff00",text:e&&l===0?"EP+":"+",life:1})}updatePlusParticles(){for(let t=this.plusParticles.length-1;t>=0;t--){let e=this.plusParticles[t];e.x+=e.vx,e.y+=e.vy,e.life-=.02,e.alpha=e.life,e.life<=0&&this.plusParticles.splice(t,1)}}drawPlusParticles(){this.ctx&&(this.ctx.font=`${Math.floor(20*this.scale)}px Arial`,this.ctx.textAlign="center",this.ctx.textBaseline="middle",this.plusParticles.forEach((t,e)=>{this.ctx.save(),this.ctx.globalAlpha=t.alpha,this.ctx.fillStyle=t.color,this.ctx.font=t.text==="EP+"?"bold 18px Arial":"bold 14px Arial",this.ctx.fillText(t.text,t.x,t.y),t.x+=t.vx,t.y+=t.vy,t.alpha-=.02,t.alpha<=0&&this.plusParticles.splice(e,1),this.ctx.restore()}),this.ctx.globalAlpha=1)}applyPlayerPhysics(t){let e=.015*this.gameService.flightDirection;this.gameService.playerR+=t,this.playerAngle+=e,this.playerRotation+=.08*this.gameService.flightDirection;let n=t*Math.cos(this.playerAngle)-this.gameService.playerR*Math.sin(this.playerAngle)*e,r=t*Math.sin(this.playerAngle)+this.gameService.playerR*Math.cos(this.playerAngle)*e;this.shipDirection=Math.atan2(r,n)}updateStars(){this.stars.forEach(t=>{t.x+=.5,t.x>window.innerWidth&&(t.x=-10)})}updateComets(t,e){for(let n=this.gameService.comets.length-1;n>=0;n--){let r=this.gameService.comets[n],s=0-r.x,o=0-r.y,a=Math.hypot(s,o),l=.3*(100/Math.max(50,a));if(r.vx+=s/a*l,r.vy+=o/a*l,r.x+=r.vx,r.y+=r.vy,r.hue=(r.hue+1)%360,r.tail.unshift({x:r.x,y:r.y}),r.tail.length>25&&r.tail.pop(),r.lifespan++,r.lifespan>1800){this.gameService.comets.splice(n,1);continue}if(Math.hypot(t-r.x,e-r.y)<40){let u=Math.floor(100*this.gameService.researchLevel*50);this.gameService.score+=u,this.gameService.addLog(this.languageService.t("GAME.LOG_COMET_EXTRACTED",[u]),"research"),this.gameService.comets.splice(n,1);continue}a>1500&&this.gameService.comets.splice(n,1)}}updateCombat(t,e,n){this.gameService.marinesActive&&t-this.lastShotTime>350&&(this.fireMarines(e,n),this.lastShotTime=t),this.updateProjectiles(),this.updateAsteroids(e,n)}updateAsteroids(t,e){for(let r=this.gameService.asteroids.length-1;r>=0;r--){let s=this.gameService.asteroids[r];if(s.vx+=(s.ovx-s.vx)*.012,s.vy+=(s.ovy-s.vy)*.012,s.x+=s.vx,s.y+=s.vy,Math.hypot(s.x,s.y)<60){this.gameService.asteroids.splice(r,1);continue}if(Math.hypot(t-s.x,e-s.y)<s.size+15){this.gameService.asteroids.splice(r,1),this.handleHit();continue}Math.hypot(s.x,s.y)>1200&&this.gameService.asteroids.splice(r,1)}}updateSunProximityVibration(t){if(!this.gameService.gameActive()||this.gameService.isPaused||this.gameService.winState()||this.gameService.isJumping||this.gameService.resumeCountdown()>0){this.lastSunProximityVibeTime!==0&&(this.lastSunProximityVibeTime=0,this.gameService.cancelVibration());return}if(this.gameService.playerR<=118&&this.gameService.playerR>=65){let e=Math.min(1,Math.max(0,(118-this.gameService.playerR)/53)),n=Math.round(120-e*70),r=Math.max(0,Math.round(25*Math.pow(1-e,2))),s=n-r+Math.round(e*50);t-this.lastSunProximityVibeTime>=n&&(this.lastSunProximityVibeTime=t,this.gameService.vibrateProximity(s))}else this.lastSunProximityVibeTime!==0&&(this.lastSunProximityVibeTime=0,this.gameService.cancelVibration())}checkDeathConditions(){this.gameService.playerR<65&&(this.lastSunProximityVibeTime=0,this.gameService.vibrateSunCrash(),this.endGame(!1))}fireMarines(t,e){if(this.gameService.asteroids.length!==0)for(let n=0;n<3;n++){let r=this.playerAngle+n*(Math.PI*2/3),s=t+Math.cos(r)*35,o=e+Math.sin(r)*35,a=this.gameService.asteroids[0],c=1/0;this.gameService.asteroids.forEach(d=>{let p=Math.hypot(s-d.x,o-d.y);p<c&&(c=p,a=d)});let l=a.x-s,u=a.y-o,h=Math.hypot(l,u);this.gameService.projectiles.push({x:s,y:o,vx:l/h*14,vy:u/h*14})}}updateProjectiles(){for(let e=this.gameService.projectiles.length-1;e>=0;e--){let n=this.gameService.projectiles[e];n.x+=n.vx,n.y+=n.vy;let r=!1;for(let s=this.gameService.asteroids.length-1;s>=0;s--){let o=this.gameService.asteroids[s];if(Math.hypot(n.x-o.x,n.y-o.y)<o.size+6){if(o.vx*=.55,o.vy*=.55,o.hp--,o.hp<=0){let a=Math.floor(o.size*2),c=this.gameService.maxEp-this.gameService.ep,l=Math.max(0,Math.min(a,c));this.gameService.ep+=l,l>0&&this.spawnPlusParticle("green",!0),this.gameService.asteroids.splice(s,1)}r=!0;break}}r&&this.gameService.projectiles.splice(e,1)}}handleHit(){this.gameService.isRecovering||this.gameService.isJumping||(this.gameService.vibrateAction(80),this.gameService.shieldActive&&this.gameService.shieldHp>0?(this.gameService.shieldHp-=34,this.gameService.shieldHp<=0&&(this.gameService.shieldHp=0,this.gameService.shieldActive=!1)):this.gameService.satellitesCount>0?this.gameService.satellitesCount--:this.endGame(!1))}endGame(t){this.gameService.gameActive.set(!1),this.gameService.winState.set(t);let e=Math.floor(this.gameService.score);this.gameService.lastScore.set(e),localStorage.setItem("orbital_last_score",e.toString());let n=Math.floor((Date.now()-this.gameService.startTime-this.gameService.totalPausedTime)/1e3),r={score:e,time:n,date:Date.now(),level:this.gameService.researchLevel};e>this.gameService.highScore()&&(this.gameService.highScore.set(e),localStorage.setItem("orbital_hs",e.toString()),this.gameService.bestEntry.set(r),localStorage.setItem("orbital_best_entry",JSON.stringify(r)));let s=[r,...this.gameService.scoreHistory()];s.length>5&&s.pop(),this.gameService.scoreHistory.set(s),localStorage.setItem("orbital_history",JSON.stringify(s))}draw(){if(!this.ctx)return;this.ctx.clearRect(0,0,window.innerWidth,window.innerHeight);let t=Math.min(window.innerWidth,window.innerHeight)/this.gameService.COORDINATE_BASE,e=window.innerWidth/2,n=window.innerHeight/2;this.ctx.clearRect(0,0,window.innerWidth,window.innerHeight),this.drawStars(),this.drawEnvironmentZones(t,e,n),this.drawComets(t,e,n),this.cutFor3dSun(e,n,t);let r=e+Math.cos(this.playerAngle)*(this.gameService.playerR*t),s=n+Math.sin(this.playerAngle)*(this.gameService.playerR*t);this.drawPlayerShip(t,r,s),this.drawSatellites(t,r,s),this.drawMarines(t,r,s),this.drawShield(t,r,s),this.drawProjectiles(t,e,n),this.drawNovaBombe(t,e,n),this.drawAsteroids(t,e,n),this.drawPlusParticles(),this.drawGlassCracks(this.ctx,window.innerWidth,window.innerHeight),this.drawDamageVignette(this.ctx,window.innerWidth,window.innerHeight),this.gameService.warpActive&&this.drawWarpOverlay()}cutFor3dSun(t,e,n){this.ctx.save(),this.ctx.globalCompositeOperation="destination-out";let r=70*n,s=this.ctx.createRadialGradient(t,e,55*n,t,e,r);s.addColorStop(0,"rgba(255, 255, 255, 1)"),s.addColorStop(.2,"rgba(255, 50, 50, 0)"),s.addColorStop(1,"rgba(255, 50, 50, 0)"),this.ctx.fillStyle=s,this.ctx.beginPath(),this.ctx.arc(t,e,r,0,Math.PI*2),this.ctx.fill(),this.ctx.restore()}drawStars(){this.stars.forEach(t=>{this.ctx.fillStyle=`rgba(255,255,255,${t.opacity})`,this.ctx.beginPath(),this.ctx.arc(t.x,t.y,t.size,0,Math.PI*2),this.ctx.fill()})}drawEnvironmentZones(t,e,n){let r=this.gameService.isColorsInverted,s=r?.4:1;[{name:"Yellow",r:250,w:this.isInsideYellowZone?110:100,c:this.isInsideYellowZone?`rgba(255, 230, 100, ${.4*s})`:`rgba(255, 255, 150, ${.15*s})`},{name:"Red",r:150,w:this.isInsideRedZone?90:80,c:this.isInsideRedZone?`rgba(255, 180, 0, ${.5*s})`:`rgba(255, 200, 50, ${.25*s})`},{name:"Corona",r:85,w:this.isInsideCoronaZone?50:40,c:this.isInsideCoronaZone?r?"rgba(251, 147, 49, 0.6)":"#cd6727":`rgba(255, 200, 0, ${.2*s})`}].forEach(p=>{this.ctx.beginPath(),this.ctx.arc(e,n,p.r*t,0,Math.PI*2),this.ctx.strokeStyle=p.c,this.ctx.lineWidth=p.w*t,this.ctx.stroke()});let a=360*t,c=(this.gameService.isInsideHabitableZone?150:120)*t,l=this.gameService.isInsideHabitableZone?.4:.15,u=a-c/2,h=a+c/2,d=this.ctx.createRadialGradient(e,n,u,e,n,h);d.addColorStop(0,"rgba(0, 255, 100, 0)"),d.addColorStop(.5,`rgba(0, 255, 150, ${l})`),d.addColorStop(1,"rgba(0, 255, 100, 0)"),this.ctx.save(),this.ctx.beginPath(),this.ctx.arc(e,n,a,0,Math.PI*2),this.ctx.strokeStyle=d,this.ctx.lineWidth=c,this.ctx.stroke(),this.ctx.restore()}drawPlayerShip(t,e,n,r){let s=35*t;this.ctx.save(),this.ctx.translate(e,n),this.ctx.rotate(this.shipDirection+Math.PI/2),this.playerImg.complete?this.ctx.drawImage(this.playerImg,-s,-s,s*2,s*2):(this.ctx.fillStyle=r||"#2277ff",this.ctx.beginPath(),this.ctx.moveTo(0,-s),this.ctx.lineTo(-s*.8,s),this.ctx.lineTo(0,s*.6),this.ctx.lineTo(s*.8,s),this.ctx.fill(),this.ctx.fillStyle="#88ccff",this.ctx.beginPath(),this.ctx.arc(0,-s*.2,s*.3,0,Math.PI*2),this.ctx.fill()),this.isPressing&&(this.ctx.fillStyle="#ffaa00",this.ctx.beginPath(),this.ctx.moveTo(-s*.4,s*.7),this.ctx.lineTo(0,s*1.5),this.ctx.lineTo(s*.4,s*.7),this.ctx.fill()),this.gameService.isJumping&&(this.ctx.fillStyle="#00ffff",this.ctx.beginPath(),this.ctx.moveTo(-s*.6,s*.7),this.ctx.lineTo(0,s*5),this.ctx.lineTo(s*.6,s*.7),this.ctx.fill(),this.ctx.shadowBlur=20*t,this.ctx.shadowColor="#00ffff"),this.ctx.restore()}drawSatellites(t,e,n){for(let r=0;r<this.gameService.satellitesCount;r++){let s=Math.PI*2/this.gameService.satellitesCount*r+this.playerAngle*.5,o=e+Math.cos(s)*30*t,a=n+Math.sin(s)*30*t;this.ctx.save(),this.ctx.translate(o,a),this.ctx.rotate(this.playerRotation),this.ctx.fillStyle="#aaa",this.ctx.fillRect(-4*t,-2*t,8*t,4*t),this.ctx.fillStyle="#44f",this.ctx.fillRect(-6*t,-4*t,2*t,8*t),this.ctx.fillRect(4*t,-4*t,2*t,8*t),this.ctx.restore()}}drawMarines(t,e,n){if(this.gameService.marinesActive)for(let r=0;r<3;r++){let s=this.playerAngle+r*(Math.PI*2/3),o=e+Math.cos(s)*42*t,a=n+Math.sin(s)*42*t;this.ctx.save(),this.ctx.translate(o,a),this.ctx.rotate(s+Math.PI/2),this.ctx.fillStyle="#ffcc00",this.ctx.beginPath(),this.ctx.moveTo(0,-6*t),this.ctx.lineTo(-5*t,6*t),this.ctx.lineTo(5*t,6*t),this.ctx.closePath(),this.ctx.fill(),this.ctx.restore()}}drawComets(t,e,n){this.gameService.comets.forEach(r=>{r.tail.forEach((s,o)=>{let a=1-o/r.tail.length;this.ctx.fillStyle=`hsla(${r.hue}, 100%, 70%, ${a*.5})`,this.ctx.beginPath(),this.ctx.arc(e+s.x*t,n+s.y*t,(8-o*.3)*t,0,Math.PI*2),this.ctx.fill()}),this.ctx.fillStyle="white",this.ctx.beginPath(),this.ctx.arc(e+r.x*t,n+r.y*t,10*t,0,Math.PI*2),this.ctx.fill()})}drawAsteroids(t,e,n){this.gameService.asteroids.forEach(r=>{let s=e+r.x*t,o=n+r.y*t,a=r.size*t,c=this.ctx.createRadialGradient(s,o,a*.2,s,o,a);c.addColorStop(.1,"rgb(202 103 1.2)"),c.addColorStop(.5,r.color),c.addColorStop(1,"rgb(87 45 1)"),this.ctx.fillStyle=c,this.drawAsteroidShape(s,o,r.points,t),this.ctx.fill(),this.ctx.save(),this.ctx.translate(-a*.15,-a*.15),this.ctx.scale(.85,.85),this.ctx.translate(s*.15/.85,o*.15/.85);let l=this.ctx.createRadialGradient(s,o,0,s,o,a*.8);l.addColorStop(.1,"rgb(202 103 1.25)"),l.addColorStop(.5,r.color),l.addColorStop(1,"rgb(87 45 1)"),l.addColorStop(1,"transparent"),this.ctx.fillStyle=l,this.drawAsteroidShape(s,o,r.points,t),this.ctx.fill(),this.ctx.restore(),r.hp<2&&(this.ctx.strokeStyle="rgba(255, 60, 0, 0.6)",this.ctx.lineWidth=1*t,this.drawAsteroidShape(s,o,r.points,t),this.ctx.stroke())})}drawAsteroidShape(t,e,n,r){if(this.ctx.beginPath(),n&&n.length>0){this.ctx.moveTo(t+n[0].x*r,e+n[0].y*r);for(let s=1;s<n.length;s++)this.ctx.lineTo(t+n[s].x*r,e+n[s].y*r)}this.ctx.closePath()}drawProjectiles(t,e,n){this.ctx.fillStyle="#ffff00",this.gameService.projectiles.forEach(r=>{this.ctx.beginPath(),this.ctx.arc(e+r.x*t,n+r.y*t,3*t,0,Math.PI*2),this.ctx.fill()})}drawShield(t,e,n){if(!this.gameService.shieldActive)return;let r=22*t;this.ctx.strokeStyle=`rgba(0, 255, 255, ${this.gameService.shieldHp/100})`,this.ctx.lineWidth=3*t,this.ctx.beginPath(),this.ctx.arc(e,n,r*2,0,Math.PI*2),this.ctx.stroke()}closeIntroduction(){this.gameService.showIntroduction.set(null),this.gameService.resumeGame()}checkAndShowIntroduction(t){this.gameService.introductionEnabled()&&!this.gameService.shownIntroductions().includes(t)&&(this.gameService.isPaused=!0,this.gameService.showIntroduction.set(t),this.gameService.markIntroductionShown(t))}getShieldDashOffset(){return 420*(1-this.gameService.shieldHp/100)}drawGlassCracks(t,e,n){let r=this.gameService.shieldHp/100;if(r>=.35)return;let s=(.35-r)*2.857;(!this.cachedGlassCanvas||this.cachedGlassCanvas.width!==e||this.cachedGlassCanvas.height!==n||this.gameService.shieldHp!==this.lastShieldHpForCracks||this.gameService.isColorsInverted!==this.lastInvertedState)&&(this.generateGlassCache(e,n,s),this.lastShieldHpForCracks=this.gameService.shieldHp,this.lastInvertedState=this.gameService.isColorsInverted),this.cachedGlassCanvas&&t.drawImage(this.cachedGlassCanvas,0,0)}generateGlassCache(t,e,n){this.cachedGlassCanvas||(this.cachedGlassCanvas=document.createElement("canvas")),this.cachedGlassCanvas.width=t,this.cachedGlassCanvas.height=e;let r=this.cachedGlassCanvas.getContext("2d");r.clearRect(0,0,t,e);let s=this.gameService.isColorsInverted,o=s?"rgba(0, 255, 255, 0.95)":"rgba(255, 0, 0, 0.9)",a=s?"rgba(255, 255, 255, 0.4)":"rgba(0, 0, 0, 0.6)",c=60,l=Math.floor(c*.5+c*.5*n),u=Math.min(t,e),h=(u*.15+u*.2*n)*this.scale,d=[],p=12345,g=()=>(p=(p*9301+49297)%233280,p/233280);for(let b=0;b<l;b++){let m=Math.floor(g()*4),f=0,x=0,M=0;m===0?(f=g()*t,x=0,M=Math.PI/2):m===1?(f=t,x=g()*e,M=Math.PI):m===2?(f=g()*t,x=e,M=-Math.PI/2):(f=0,x=g()*e,M=0),d.push({x:f,y:x,angle:M})}r.save(),r.strokeStyle=a,p=12345,d.forEach(b=>{this.drawStaticBranch(r,b.x,b.y,b.angle+(g()-.5)*.8,h,g,3.5)}),r.restore(),r.save(),r.strokeStyle=o,r.shadowBlur=4*this.scale,r.shadowColor=o,p=12345,d.forEach(b=>{this.drawStaticBranch(r,b.x,b.y,b.angle+(g()-.5)*.8,h,g,2)}),r.restore()}drawStaticBranch(t,e,n,r,s,o,a){if(s<4||a<.15)return;t.lineWidth=a*this.scale;let c=4+o()*8,l=e+Math.cos(r)*c,u=n+Math.sin(r)*c;t.beginPath(),t.moveTo(e,n),t.lineTo(l,u),t.stroke();let h=a*.82;if(this.drawStaticBranch(t,l,u,r+(o()-.5)*.1,s-c,o,h),o()>.5){let d=(o()>.5?1:-1)*(Math.PI/2.5+o()*Math.PI/4);this.drawStaticBranch(t,l,u,r+d,(s-c)*.35,o,h*.6)}}drawWarpOverlay(){if(!this.ctx)return;let t=window.innerWidth,e=window.innerHeight,n=Date.now();this.warpAnimationService.setShipImage(this.playerImg.src),this.warpAnimationService.drawWarp(this.ctx,t,e,n,this.gameService.warpStart,this.gameService.warpDuration)}drawDamageVignette(t,e,n){let r=this.gameService.shieldHp/100;if(r>=.35)return;let s=(.35-r)/.35,o=Math.pow(s,2),a=Math.hypot(e,n),c=1,l=a*c*(1-o*c),u=a*.7,h=t.createRadialGradient(e/2,n/2,l,e/2,n/2,u),d=this.gameService.isColorsInverted?"0, 255, 255":"150, 0, 0",p=o*.7;h.addColorStop(0,"rgba(0,0,0,0)"),h.addColorStop(.6,`rgba(${d}, ${p*.3})`),h.addColorStop(1,`rgba(${d}, ${p})`),t.save(),t.fillStyle=h,t.fillRect(0,0,e,n),t.restore()}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=_t({type:i,selectors:[["app-game"]],viewQuery:function(e,n){if(e&1&&Er(V1,5),e&2){let r;Ti(r=Di())&&(n.canvas=r.first)}},hostBindings:function(e,n){e&1&&ze("orientationchange",function(){return n.resize()},wr)("resize",function(){return n.resize()},wr)("mouseup",function(){return n.onUp()},wr)("touchend",function(){return n.onUp()},wr)("contextmenu",function(s){return n.onContextMenu(s)})},decls:2,vars:1,consts:[["gameCanvas",""],[1,"dialog-overlay","vh-100"],["id","game-container",1,"game-container",3,"mousedown","touchstart","mouseup","touchend","mouseleave"],[1,"sun-3d-layer"],["id","gameCanvas"],[1,"ui-overlay","top-left","p-3","text-white"],[1,"hud"],[1,"top-right-controls"],[1,"pause-control","d-flex","flex-column","gap-2","align-items-end"],[1,"jump-btn"],[1,"resume-btn"],[1,"pause-btn","float-end"],[1,"dialog-overlay","intro-overlay","vh-100"],[1,"countdown-overlay"],[1,"top-row"],[1,"main-stats"],[1,"score"],[1,"ep"],[1,"left-panels"],[1,"bar-row"],[1,"log-overlay"],[1,"log-item",3,"class"],[1,"bottom-controls"],[1,"action-side","left"],[1,"power-up-button","shield-button-container",3,"mousedown","touchstart","disabled"],[1,"shield-border-svg","rounded-2"],[1,"power-up-button","orbit-change-btn-color","fw-bold","pt-2"],[1,"power-up-button",3,"power-active","disabled"],[1,"action-side","right"],[1,"power-up-button","marine-btn",3,"mousedown","touchstart","disabled"],[1,"cooldown-overlay-mini"],[1,"power-up-button",3,"mousedown","touchstart","disabled"],[1,"countdown-number"],[1,"progress"],[1,"fill","cyan"],[1,"log-item"],["x","0","y","0","width","100%","height","100%",1,"shield-rect"],[1,"power-up-button","orbit-change-btn-color","fw-bold","pt-2",3,"mousedown","touchstart"],[1,"fill"],[1,"jump-btn",3,"mousedown","touchstart"],[1,"resume-btn",3,"mousedown","touchstart"],[1,"pause-btn","float-end",3,"mousedown","touchstart"],[1,"pause-icon"],[1,"reward-dialog"],[1,"reward-title"],[1,"reward-subtitle"],[1,"reward-options"],[1,"reward-option-btn",3,"click","disabled"],[1,"reward-icon"],[1,"reward-name"],[1,"reward-desc"],[1,"reward-option-btn",3,"click"],[1,"reward-dialog","introduction-dialog"],[1,"introduction-content","p-3","text-white","text-center","justify-content-center"],[1,"intro-hint-large","mb-3"],[1,"mb-4"],[1,"power-up-button",3,"shield-active","critical","disabled"],[1,"power-up-button","marine-btn",3,"disabled","power-active"],[1,"power-up-button",3,"disabled","power-active"],[1,"resume-btn","mx-auto"],[1,"resume-btn","mx-auto",3,"click"]],template:function(e,n){e&1&&Dt(0,z1,2,0,"div",1)(1,aD,14,9),e&2&&Rt(!n.gameService.gameActive()||n.gameService.winState()?0:1)},dependencies:[Wd,$d,na],styles:['@charset "UTF-8";.game-container[_ngcontent-%COMP%]{position:relative;width:100vw;height:100vh;background:#05080c;overflow:hidden;font-family:Segoe UI,sans-serif;touch-action:none;color:#fff}.sun-3d-layer[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;z-index:1}#gameCanvas[_ngcontent-%COMP%]{position:absolute;top:0;left:0;display:block;width:100%;height:100%;z-index:10;pointer-events:none;background:transparent}.ui-overlay[_ngcontent-%COMP%]{position:absolute;inset:0;z-index:20;pointer-events:none}.ui-overlay[_ngcontent-%COMP%]   .hud[_ngcontent-%COMP%], .ui-overlay[_ngcontent-%COMP%]   .bottom-controls[_ngcontent-%COMP%]{pointer-events:auto}.ui-overlay[_ngcontent-%COMP%]   .hud[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled, .ui-overlay[_ngcontent-%COMP%]   .bottom-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{pointer-events:none}.invert-colors[_ngcontent-%COMP%]{filter:invert(100%)}.hud[_ngcontent-%COMP%]{position:absolute;inset:0;display:flex;flex-direction:column;padding:12px;pointer-events:none}.top-right-controls[_ngcontent-%COMP%]{display:table-row;position:absolute;top:15px;right:15px;z-index:30;pointer-events:none}.top-right-controls[_ngcontent-%COMP%]   .pause-control[_ngcontent-%COMP%]{pointer-events:auto!important;padding:1rem}.jump-btn[_ngcontent-%COMP%]{background:#3b0764;border:1px solid #d8b4fe;color:#e9d5ff;padding:10px 20px;font-size:.75rem;border-radius:8px;box-shadow:0 0 15px #a855f7;animation:_ngcontent-%COMP%_pulse-glow 1.5s infinite;opacity:80%;pointer-events:auto!important}.jump-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:block;font-size:.75rem;color:#0f8;margin-top:4px}.main-stats[_ngcontent-%COMP%]   .score[_ngcontent-%COMP%]{font-size:1.3rem;font-weight:700;color:#fc0;transition:all .3s}.score-active[_ngcontent-%COMP%]{padding-left:12%;color:#e16a16!important;transform:scale(1)}.main-stats[_ngcontent-%COMP%]   .ep[_ngcontent-%COMP%]{font-size:1rem;color:#00fbff;transition:all .3s}.ep-active[_ngcontent-%COMP%]{padding-left:12%;color:#0f6!important;transform:scale(1)}.left-panels[_ngcontent-%COMP%]{margin-top:15px}.bar-row[_ngcontent-%COMP%]{display:flex;align-items:center;margin-bottom:8px;font-size:.65rem}.bar-row[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{width:50px}.progress[_ngcontent-%COMP%]{width:100px;height:5px;background:#ffffff1a;border-radius:3px}.fill[_ngcontent-%COMP%]{height:100%;transition:width .3s}.fill.cyan[_ngcontent-%COMP%]{background:#00fbff;box-shadow:0 0 8px #00fbff}.log-overlay[_ngcontent-%COMP%]{margin-top:15px;max-width:200px}.log-item[_ngcontent-%COMP%]{font-size:.7rem;margin-bottom:3px;padding:3px 6px;background:#0000004d;border-radius:3px}.log-item.event[_ngcontent-%COMP%]{color:#ffae00;border-left:2px solid #ffae00}.log-item.research[_ngcontent-%COMP%]{color:#0f8;border-left:2px solid #00ff88}.bottom-controls[_ngcontent-%COMP%]{position:absolute;bottom:0;left:0;width:100%;padding:0 30px 30px;display:flex;justify-content:space-between;align-items:flex-end;z-index:30;pointer-events:none}.bottom-controls[_ngcontent-%COMP%]   .action-side[_ngcontent-%COMP%]{display:flex;flex-direction:column}@media(orientation:landscape){.bottom-controls[_ngcontent-%COMP%]   .action-side[_ngcontent-%COMP%]{flex-direction:row}}.bottom-controls[_ngcontent-%COMP%]   .action-side[_ngcontent-%COMP%]{gap:10px;pointer-events:auto}.bottom-controls[_ngcontent-%COMP%]   .action-side.left[_ngcontent-%COMP%]{align-items:flex-start}.bottom-controls[_ngcontent-%COMP%]   .action-side.right[_ngcontent-%COMP%]{align-items:flex-end}.power-up-button[_ngcontent-%COMP%]{width:120px;height:50px;font-size:.9rem;position:relative;background:#0f172a;color:#fff;border-radius:5px;padding:6px 2px;font-weight:700;cursor:pointer;display:flex;flex-direction:column;align-items:center;border:2px solid transparent;transition:border-color .3s ease,box-shadow .3s ease}.power-up-button.power-active[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_power-btn-glow-pulse 2s infinite ease-in-out}.power-up-button.shield-active-border[_ngcontent-%COMP%]{box-shadow:0 0 10px #00ffff4d}.orbit-change-btn-color[_ngcontent-%COMP%]{background:linear-gradient(to bottom,#a855f7,#3b0764,#0f172a,#3b0764,#a855f7)}button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:.55rem;color:#64748b}button[_ngcontent-%COMP%]:disabled{opacity:.4;animation:none;box-shadow:none}.marine-btn[_ngcontent-%COMP%]{position:relative;overflow:hidden}.cooldown-overlay-mini[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;background:#0006;pointer-events:none;z-index:1}.cooldown-overlay-mini[_ngcontent-%COMP%]   .fill[_ngcontent-%COMP%]{position:absolute;bottom:0;left:0;width:100%;background:#fff3;transition:height .1s linear}.pause-control[_ngcontent-%COMP%]{padding-top:2rem;padding-left:7rem;pointer-events:auto;z-index:100}.pause-btn[_ngcontent-%COMP%]{width:45px;height:45px;background:#ffffff1a!important;border:2px solid rgba(255,255,255,.5)!important;border-radius:50%!important;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .2s ease;padding:0!important;pointer-events:auto!important}.pause-btn[_ngcontent-%COMP%]:hover{background:#fff3!important;border-color:#fff!important;transform:scale(1.05)}.pause-btn[_ngcontent-%COMP%]   .pause-icon[_ngcontent-%COMP%]{width:14px;height:18px;border-left:5px solid white;border-right:5px solid white;box-sizing:border-box;display:inline-block}.countdown-overlay[_ngcontent-%COMP%]{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:#0000004d;z-index:200;pointer-events:none}.countdown-overlay[_ngcontent-%COMP%]   .countdown-number[_ngcontent-%COMP%]{font-size:10rem;font-weight:800;color:#00fbff;text-shadow:0 0 30px rgba(0,251,255,.8);animation:_ngcontent-%COMP%_pulseCount 1s ease-in-out infinite}.dialog-overlay[_ngcontent-%COMP%]{position:fixed;inset:0;background:#000000b3;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);z-index:2000;display:flex;justify-content:center;align-items:center;padding:1rem}.dialog-overlay.intro-overlay[_ngcontent-%COMP%]{background:#0006;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px);pointer-events:none}.dialog-overlay.intro-overlay[_ngcontent-%COMP%]   .reward-dialog[_ngcontent-%COMP%]{pointer-events:auto}.intro-hint-large[_ngcontent-%COMP%]{font-size:3rem;margin-bottom:1rem;filter:drop-shadow(0 0 10px rgba(255,204,0,.6));justify-content:center;align-items:center;display:flex;flex-direction:column;gap:1rem;text-align:center;color:#fc0;pointer-events:auto;z-index:1000;position:relative}.reward-dialog[_ngcontent-%COMP%]{background:#020617;border:2px solid #ffcc00;border-radius:12px;padding:clamp(1rem,3vw,2rem);max-width:90vw;width:min(500px,95vw);pointer-events:auto;box-shadow:0 0 30px #fc06;max-height:90vh;overflow-y:auto}@media(orientation:landscape)and (max-height:600px){.reward-dialog[_ngcontent-%COMP%]{width:min(800px,95vw);padding:1rem}.reward-dialog[_ngcontent-%COMP%]   .reward-subtitle[_ngcontent-%COMP%]{margin-bottom:1rem}}.reward-title[_ngcontent-%COMP%]{color:#fc0;text-align:center;font-size:clamp(1.2rem,4vw,1.8rem);margin-bottom:.5rem;text-shadow:0 0 10px rgba(255,204,0,.5)}.reward-subtitle[_ngcontent-%COMP%]{color:#94a3b8;text-align:center;margin-bottom:clamp(1rem,3vw,2rem);font-size:clamp(.8rem,2.5vw,1rem)}.reward-options[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:clamp(10px,2vw,15px)}@media(orientation:landscape)and (max-height:600px){.reward-options[_ngcontent-%COMP%]{flex-direction:row;justify-content:center}.reward-options[_ngcontent-%COMP%]   .reward-option-btn[_ngcontent-%COMP%]{flex:1;grid-template-columns:1fr;grid-template-rows:auto auto auto;text-align:center;padding:10px 5px}.reward-options[_ngcontent-%COMP%]   .reward-option-btn[_ngcontent-%COMP%]   .reward-icon[_ngcontent-%COMP%]{grid-row:1;margin-bottom:5px}.reward-options[_ngcontent-%COMP%]   .reward-option-btn[_ngcontent-%COMP%]   .reward-name[_ngcontent-%COMP%]{font-size:.9rem}.reward-options[_ngcontent-%COMP%]   .reward-option-btn[_ngcontent-%COMP%]   .reward-desc[_ngcontent-%COMP%]{display:none}}.reward-option-btn[_ngcontent-%COMP%]{background:#ffffff0d;border:1px solid rgba(255,204,0,.3);border-radius:8px;padding:clamp(10px,2.5vw,15px);display:grid;grid-template-columns:clamp(40px,10vw,50px) 1fr;grid-template-rows:auto auto;gap:0 clamp(10px,2vw,15px);cursor:pointer;transition:all .2s;color:#fff;text-align:left}.reward-option-btn[_ngcontent-%COMP%]:hover{background:#ffcc001a;border-color:#fc0;transform:translateY(-2px)}.reward-option-btn[_ngcontent-%COMP%]   .reward-icon[_ngcontent-%COMP%]{grid-row:span 2;font-size:clamp(1.5rem,5vw,2rem);display:flex;align-items:center;justify-content:center}.reward-option-btn[_ngcontent-%COMP%]   .reward-name[_ngcontent-%COMP%]{font-weight:700;color:#fc0;font-size:clamp(.9rem,2.5vw,1.1rem)}.reward-option-btn[_ngcontent-%COMP%]   .reward-desc[_ngcontent-%COMP%]{font-size:clamp(.7rem,2vw,.85rem);color:#94a3b8}.resume-btn[_ngcontent-%COMP%]{background:#22c55e!important;color:#fff;padding:10px 20px;font-size:.75rem!important;box-shadow:0 0 20px #22c55e66;border-radius:5px;pointer-events:auto!important}.shield-button-container[_ngcontent-%COMP%]{position:relative;transition:all .3s ease}.shield-button-container.shield-active[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_power-btn-glow-pulse 2s infinite ease-in-out}.shield-button-container.critical[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_power-btn-glow-pulse .5s infinite ease-in-out;background:linear-gradient(to right,#f44,#0f172a,#0f172a,#f44)}.shield-border-svg[_ngcontent-%COMP%]{position:absolute;top:-2px;left:-2px;width:calc(100% + 4px);height:calc(100% + 4px);pointer-events:none;fill:none}.shield-border-svg[_ngcontent-%COMP%]   .shield-rect[_ngcontent-%COMP%]{width:100%;height:100%;stroke-width:10px;stroke-dasharray:420;stroke-linecap:round;transition:stroke-dashoffset .3s ease,stroke .3s ease;filter:drop-shadow(0 0 5px rgba(0,255,255,.5))}@keyframes _ngcontent-%COMP%_power-btn-glow-pulse{0%{filter:drop-shadow(0 0 2px rgba(0,255,255,.4));transform:scale(1)}50%{filter:drop-shadow(0 0 8px rgba(0,255,255,.8));transform:scale(1.02)}to{filter:drop-shadow(0 0 2px rgba(0,255,255,.4));transform:scale(1)}}@keyframes _ngcontent-%COMP%_pulseCount{0%{transform:scale(1.2);opacity:0}20%{opacity:1}to{transform:scale(.8);opacity:0}}@keyframes _ngcontent-%COMP%_pulse-glow{0%{box-shadow:0 0 5px #a855f7;border-color:#a855f7}50%{box-shadow:0 0 25px #d8b4fe;border-color:#d8b4fe}to{box-shadow:0 0 5px #a855f7;border-color:#a855f7}}']})};var cD=()=>A(Xi).fetchAllTracks(),lD=()=>A(oi).initialize(),xy=[{path:"",component:Wl,resolve:{lang:lD,music:cD},pathMatch:"full"},{path:"game",component:Yd,pathMatch:"full"},{path:"**",redirectTo:""}];var nm="Service workers are disabled or not supported by this browser",jo=class{serviceWorker;worker;registration;events;constructor(t,e){if(this.serviceWorker=t,!t)this.worker=this.events=this.registration=new Mi(n=>n.error(new Oe(5601,!1)));else{let n=null,r=new ft;this.worker=new Mi(l=>(n!==null&&l.next(n),r.subscribe(u=>l.next(u))));let s=()=>{let{controller:l}=t;l!==null&&(n=l,r.next(n))};t.addEventListener("controllerchange",s),s(),this.registration=this.worker.pipe(cn(()=>t.getRegistration().then(l=>{if(!l)throw new Oe(5601,!1);return l})));let o=new ft;this.events=o.asObservable();let a=l=>{let{data:u}=l;u?.type&&o.next(u)};t.addEventListener("message",a),e?.get(ei,null,{optional:!0})?.onDestroy(()=>{t.removeEventListener("controllerchange",s),t.removeEventListener("message",a)})}}postMessage(t,e){return new Promise(n=>{this.worker.pipe(mn(1)).subscribe(r=>{r.postMessage(ie({action:t},e)),n()})})}postMessageWithOperation(t,e,n){let r=this.waitForOperationCompleted(n),s=this.postMessage(t,e);return Promise.all([s,r]).then(([,o])=>o)}generateNonce(){return Math.round(Math.random()*1e7)}eventsOfType(t){let e;return typeof t=="string"?e=n=>n.type===t:e=n=>t.includes(n.type),this.events.pipe(li(e))}nextEventOfType(t){return this.eventsOfType(t).pipe(mn(1))}waitForOperationCompleted(t){return new Promise((e,n)=>{this.eventsOfType("OPERATION_COMPLETED").pipe(li(r=>r.nonce===t),mn(1),it(r=>{if(r.result!==void 0)return r.result;throw new Error(r.error)})).subscribe({next:e,error:n})})}get isEnabled(){return!!this.serviceWorker}},uD=(()=>{class i{sw;messages;notificationClicks;notificationCloses;pushSubscriptionChanges;subscription;get isEnabled(){return this.sw.isEnabled}pushManager=null;subscriptionChanges=new ft;constructor(e){if(this.sw=e,!e.isEnabled){this.messages=gr,this.notificationClicks=gr,this.notificationCloses=gr,this.pushSubscriptionChanges=gr,this.subscription=gr;return}this.messages=this.sw.eventsOfType("PUSH").pipe(it(r=>r.data)),this.notificationClicks=this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(it(r=>r.data)),this.notificationCloses=this.sw.eventsOfType("NOTIFICATION_CLOSE").pipe(it(r=>r.data)),this.pushSubscriptionChanges=this.sw.eventsOfType("PUSH_SUBSCRIPTION_CHANGE").pipe(it(r=>r.data)),this.pushManager=this.sw.registration.pipe(it(r=>r.pushManager));let n=this.pushManager.pipe(cn(r=>r.getSubscription()));this.subscription=new Mi(r=>{let s=n.subscribe(r),o=this.subscriptionChanges.subscribe(r);return()=>{s.unsubscribe(),o.unsubscribe()}})}requestSubscription(e){if(!this.sw.isEnabled||this.pushManager===null)return Promise.reject(new Error(nm));let n={userVisibleOnly:!0},r=this.decodeBase64(e.serverPublicKey.replace(/_/g,"/").replace(/-/g,"+")),s=new Uint8Array(new ArrayBuffer(r.length));for(let o=0;o<r.length;o++)s[o]=r.charCodeAt(o);return n.applicationServerKey=s,new Promise((o,a)=>{this.pushManager.pipe(cn(c=>c.subscribe(n)),mn(1)).subscribe({next:c=>{this.subscriptionChanges.next(c),o(c)},error:a})})}unsubscribe(){if(!this.sw.isEnabled)return Promise.reject(new Error(nm));let e=n=>{if(n===null)throw new Oe(5602,!1);return n.unsubscribe().then(r=>{if(!r)throw new Oe(5603,!1);this.subscriptionChanges.next(null)})};return new Promise((n,r)=>{this.subscription.pipe(mn(1),cn(e)).subscribe({next:n,error:r})})}decodeBase64(e){return atob(e)}static \u0275fac=function(n){return new(n||i)(Fe(jo))};static \u0275prov=oe({token:i,factory:i.\u0275fac})}return i})(),dD=(()=>{class i{sw;versionUpdates;unrecoverable;get isEnabled(){return this.sw.isEnabled}ongoingCheckForUpdate=null;constructor(e){if(this.sw=e,!e.isEnabled){this.versionUpdates=gr,this.unrecoverable=gr;return}this.versionUpdates=this.sw.eventsOfType(["VERSION_DETECTED","VERSION_INSTALLATION_FAILED","VERSION_READY","NO_NEW_VERSION_DETECTED"]),this.unrecoverable=this.sw.eventsOfType("UNRECOVERABLE_STATE")}checkForUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(nm));if(this.ongoingCheckForUpdate)return this.ongoingCheckForUpdate;let e=this.sw.generateNonce();return this.ongoingCheckForUpdate=this.sw.postMessageWithOperation("CHECK_FOR_UPDATES",{nonce:e},e).finally(()=>{this.ongoingCheckForUpdate=null}),this.ongoingCheckForUpdate}activateUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Oe(5601,!1));let e=this.sw.generateNonce();return this.sw.postMessageWithOperation("ACTIVATE_UPDATE",{nonce:e},e)}static \u0275fac=function(n){return new(n||i)(Fe(jo))};static \u0275prov=oe({token:i,factory:i.\u0275fac})}return i})(),wy=new Ce("");function hD(){let i=A(Tc);if(!("serviceWorker"in navigator&&i.enabled!==!1))return;let t=A(wy),e=A(mt),n=A(ei);e.runOutsideAngular(()=>{let r=navigator.serviceWorker,s=()=>r.controller?.postMessage({action:"INITIALIZE"});r.addEventListener("controllerchange",s),n.onDestroy(()=>{r.removeEventListener("controllerchange",s)})}),e.runOutsideAngular(()=>{let r,{registrationStrategy:s}=i;if(typeof s=="function")r=new Promise(o=>s().subscribe(()=>o()));else{let[o,...a]=(s||"registerWhenStable:30000").split(":");switch(o){case"registerImmediately":r=Promise.resolve();break;case"registerWithDelay":r=Sy(+a[0]||0);break;case"registerWhenStable":r=Promise.race([n.whenStable(),Sy(+a[0])]);break;default:throw new Oe(5600,!1)}}r.then(()=>{n.destroyed||navigator.serviceWorker.register(t,{scope:i.scope,updateViaCache:i.updateViaCache,type:i.type}).catch(o=>console.error(_r(5604,!1)))})})}function Sy(i){return new Promise(t=>setTimeout(t,i))}function fD(){let i=A(Tc),t=A(Ft),e=!0;return new jo(e&&i.enabled!==!1?navigator.serviceWorker:void 0,t)}var Tc=class{enabled;updateViaCache;type;scope;registrationStrategy};function My(i,t={}){return yr([uD,dD,{provide:wy,useValue:i},{provide:Tc,useValue:t},{provide:jo,useFactory:fD},ah(hD)])}var Ey={providers:[ym(),ef(xy),Mv(),My("ngsw-worker.js",{enabled:!qm(),registrationStrategy:"registerWhenStable:30000"})]};function pD(i,t){i&1&&(W(0,"div",0)(1,"div",1)(2,"span",2),re(3,"Loading..."),q()()())}var Zd=class i{title=Ne("orbital-evolution");fullscreenService=A($i);router=A(Or);isLoading=Ne(!1);constructor(){this.router.events.subscribe(t=>{t instanceof Ji?this.isLoading.set(!0):(t instanceof ri||t instanceof Pn||t instanceof Qi)&&this.isLoading.set(!1)})}ngOnDestroy(){this.fullscreenService.releaseDisplayAlwaysOnMode()}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=_t({type:i,selectors:[["app-root"]],decls:2,vars:1,consts:[[1,"app-loading-indicator"],["role","status",1,"spinner-border"],[1,"visually-hidden"]],template:function(e,n){e&1&&(Dt(0,pD,4,0,"div",0),rt(1,"router-outlet")),e&2&&Rt(n.isLoading()?0:-1)},dependencies:[Ea],styles:["[_nghost-%COMP%]{display:block;width:100%}button[_ngcontent-%COMP%], .interactive[_ngcontent-%COMP%]{cursor:pointer!important;touch-action:manipulation;pointer-events:auto!important;-webkit-tap-highlight-color:transparent}.app-loading-indicator[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100vw;height:100vh;display:flex;justify-content:center;align-items:center;background-color:#020617d9;-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);z-index:99999;pointer-events:none}.app-loading-indicator[_ngcontent-%COMP%]   .spinner-border[_ngcontent-%COMP%]{width:3.5rem;height:3.5rem;border-width:.3em;color:#00fbff;box-shadow:0 0 20px #00fbff80;border-radius:50%}"]})};wh(Zd,Ey).catch(i=>console.error(i));
