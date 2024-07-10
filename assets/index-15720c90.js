(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();/**
* @vue/shared v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Uu(t,e){const n=new Set(t.split(","));return e?r=>n.has(r.toLowerCase()):r=>n.has(r)}const qe={},Si=[],Ht=()=>{},_b=()=>!1,ll=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),$u=t=>t.startsWith("onUpdate:"),ht=Object.assign,Bu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},yb=Object.prototype.hasOwnProperty,Ce=(t,e)=>yb.call(t,e),me=Array.isArray,Ci=t=>cl(t)==="[object Map]",rg=t=>cl(t)==="[object Set]",we=t=>typeof t=="function",at=t=>typeof t=="string",hi=t=>typeof t=="symbol",He=t=>t!==null&&typeof t=="object",ig=t=>(He(t)||we(t))&&we(t.then)&&we(t.catch),sg=Object.prototype.toString,cl=t=>sg.call(t),vb=t=>cl(t).slice(8,-1),og=t=>cl(t)==="[object Object]",ju=t=>at(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ns=Uu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ul=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},wb=/-(\w)/g,Tn=ul(t=>t.replace(wb,(e,n)=>n?n.toUpperCase():"")),bb=/\B([A-Z])/g,Yi=ul(t=>t.replace(bb,"-$1").toLowerCase()),hl=ul(t=>t.charAt(0).toUpperCase()+t.slice(1)),pc=ul(t=>t?`on${hl(t)}`:""),Er=(t,e)=>!Object.is(t,e),mc=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},ag=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Eb=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let gd;const lg=()=>gd||(gd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function qu(t){if(me(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=at(r)?Rb(r):qu(r);if(i)for(const s in i)e[s]=i[s]}return e}else if(at(t)||He(t))return t}const Tb=/;(?![^(]*\))/g,Ib=/:([^]+)/,Ab=/\/\*[^]*?\*\//g;function Rb(t){const e={};return t.replace(Ab,"").split(Tb).forEach(n=>{if(n){const r=n.split(Ib);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function vo(t){let e="";if(at(t))e=t;else if(me(t))for(let n=0;n<t.length;n++){const r=vo(t[n]);r&&(e+=r+" ")}else if(He(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Pb="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Sb=Uu(Pb);function cg(t){return!!t||t===""}const ze=t=>at(t)?t:t==null?"":me(t)||He(t)&&(t.toString===sg||!we(t.toString))?JSON.stringify(t,ug,2):String(t),ug=(t,e)=>e&&e.__v_isRef?ug(t,e.value):Ci(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,i],s)=>(n[gc(r,s)+" =>"]=i,n),{})}:rg(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>gc(n))}:hi(e)?gc(e):He(e)&&!me(e)&&!og(e)?String(e):e,gc=(t,e="")=>{var n;return hi(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let tn;class Cb{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=tn,!e&&tn&&(this.index=(tn.scopes||(tn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=tn;try{return tn=this,e()}finally{tn=n}}}on(){tn=this}off(){tn=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function kb(t,e=tn){e&&e.active&&e.effects.push(t)}function xb(){return tn}let Yr;class zu{constructor(e,n,r,i){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=5,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,kb(this,i)}get dirty(){if(this._dirtyLevel===2)return!1;if(this._dirtyLevel===3||this._dirtyLevel===4){this._dirtyLevel=1,Dr();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed){if(n.computed.effect._dirtyLevel===2)return!0;if(Nb(n.computed),this._dirtyLevel>=5)break}}this._dirtyLevel===1&&(this._dirtyLevel=0),Lr()}return this._dirtyLevel>=5}set dirty(e){this._dirtyLevel=e?5:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=_r,n=Yr;try{return _r=!0,Yr=this,this._runnings++,_d(this),this.fn()}finally{yd(this),this._runnings--,Yr=n,_r=e}}stop(){this.active&&(_d(this),yd(this),this.onStop&&this.onStop(),this.active=!1)}}function Nb(t){return t.value}function _d(t){t._trackId++,t._depsLength=0}function yd(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)hg(t.deps[e],t);t.deps.length=t._depsLength}}function hg(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let _r=!0,qc=0;const fg=[];function Dr(){fg.push(_r),_r=!1}function Lr(){const t=fg.pop();_r=t===void 0?!0:t}function Hu(){qc++}function Wu(){for(qc--;!qc&&zc.length;)zc.shift()()}function dg(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&hg(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const zc=[];function pg(t,e,n){Hu();for(const r of t.keys()){if(!t.computed&&r.computed&&t.get(r)===r._trackId&&r._runnings>0){r._dirtyLevel=2;continue}let i;r._dirtyLevel<e&&(i??(i=t.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r.computed&&r._dirtyLevel===2&&(r._shouldSchedule=!0),r._dirtyLevel=e),r._shouldSchedule&&(i??(i=t.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==3&&(r._shouldSchedule=!1,r.scheduler&&zc.push(r.scheduler)))}Wu()}const mg=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},Hc=new WeakMap,Xr=Symbol(""),Wc=Symbol("");function Ut(t,e,n){if(_r&&Yr){let r=Hc.get(t);r||Hc.set(t,r=new Map);let i=r.get(n);i||r.set(n,i=mg(()=>r.delete(n))),dg(Yr,i)}}function Dn(t,e,n,r,i,s){const o=Hc.get(t);if(!o)return;let l=[];if(e==="clear")l=[...o.values()];else if(n==="length"&&me(t)){const c=Number(r);o.forEach((u,f)=>{(f==="length"||!hi(f)&&f>=c)&&l.push(u)})}else switch(n!==void 0&&l.push(o.get(n)),e){case"add":me(t)?ju(n)&&l.push(o.get("length")):(l.push(o.get(Xr)),Ci(t)&&l.push(o.get(Wc)));break;case"delete":me(t)||(l.push(o.get(Xr)),Ci(t)&&l.push(o.get(Wc)));break;case"set":Ci(t)&&l.push(o.get(Xr));break}Hu();for(const c of l)c&&pg(c,5);Wu()}const Ob=Uu("__proto__,__v_isRef,__isVue"),gg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(hi)),vd=Db();function Db(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=Oe(this);for(let s=0,o=this.length;s<o;s++)Ut(r,"get",s+"");const i=r[e](...n);return i===-1||i===!1?r[e](...n.map(Oe)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Dr(),Hu();const r=Oe(this)[e].apply(this,n);return Wu(),Lr(),r}}),t}function Lb(t){hi(t)||(t=String(t));const e=Oe(this);return Ut(e,"has",t),e.hasOwnProperty(t)}class _g{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const i=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return s;if(n==="__v_raw")return r===(i?s?Gb:bg:s?wg:vg).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=me(e);if(!i){if(o&&Ce(vd,n))return Reflect.get(vd,n,r);if(n==="hasOwnProperty")return Lb}const l=Reflect.get(e,n,r);return(hi(n)?gg.has(n):Ob(n))||(i||Ut(e,"get",n),s)?l:$t(l)?o&&ju(n)?l:l.value:He(l)?i?Tg(l):dl(l):l}}class yg extends _g{constructor(e=!1){super(!1,e)}set(e,n,r,i){let s=e[n];if(!this._isShallow){const c=Qs(s);if(!Ma(r)&&!Qs(r)&&(s=Oe(s),r=Oe(r)),!me(e)&&$t(s)&&!$t(r))return c?!1:(s.value=r,!0)}const o=me(e)&&ju(n)?Number(n)<e.length:Ce(e,n),l=Reflect.set(e,n,r,i);return e===Oe(i)&&(o?Er(r,s)&&Dn(e,"set",n,r):Dn(e,"add",n,r)),l}deleteProperty(e,n){const r=Ce(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&r&&Dn(e,"delete",n,void 0),i}has(e,n){const r=Reflect.has(e,n);return(!hi(n)||!gg.has(n))&&Ut(e,"has",n),r}ownKeys(e){return Ut(e,"iterate",me(e)?"length":Xr),Reflect.ownKeys(e)}}class Vb extends _g{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Mb=new yg,Fb=new Vb,Ub=new yg(!0);const Ku=t=>t,fl=t=>Reflect.getPrototypeOf(t);function Jo(t,e,n=!1,r=!1){t=t.__v_raw;const i=Oe(t),s=Oe(e);n||(Er(e,s)&&Ut(i,"get",e),Ut(i,"get",s));const{has:o}=fl(i),l=r?Ku:n?Yu:Ys;if(o.call(i,e))return l(t.get(e));if(o.call(i,s))return l(t.get(s));t!==i&&t.get(e)}function Zo(t,e=!1){const n=this.__v_raw,r=Oe(n),i=Oe(t);return e||(Er(t,i)&&Ut(r,"has",t),Ut(r,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function ea(t,e=!1){return t=t.__v_raw,!e&&Ut(Oe(t),"iterate",Xr),Reflect.get(t,"size",t)}function wd(t){t=Oe(t);const e=Oe(this);return fl(e).has.call(e,t)||(e.add(t),Dn(e,"add",t,t)),this}function bd(t,e){e=Oe(e);const n=Oe(this),{has:r,get:i}=fl(n);let s=r.call(n,t);s||(t=Oe(t),s=r.call(n,t));const o=i.call(n,t);return n.set(t,e),s?Er(e,o)&&Dn(n,"set",t,e):Dn(n,"add",t,e),this}function Ed(t){const e=Oe(this),{has:n,get:r}=fl(e);let i=n.call(e,t);i||(t=Oe(t),i=n.call(e,t)),r&&r.call(e,t);const s=e.delete(t);return i&&Dn(e,"delete",t,void 0),s}function Td(){const t=Oe(this),e=t.size!==0,n=t.clear();return e&&Dn(t,"clear",void 0,void 0),n}function ta(t,e){return function(r,i){const s=this,o=s.__v_raw,l=Oe(o),c=e?Ku:t?Yu:Ys;return!t&&Ut(l,"iterate",Xr),o.forEach((u,f)=>r.call(i,c(u),c(f),s))}}function na(t,e,n){return function(...r){const i=this.__v_raw,s=Oe(i),o=Ci(s),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,u=i[t](...r),f=n?Ku:e?Yu:Ys;return!e&&Ut(s,"iterate",c?Wc:Xr),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:l?[f(p[0]),f(p[1])]:f(p),done:m}},[Symbol.iterator](){return this}}}}function ir(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function $b(){const t={get(s){return Jo(this,s)},get size(){return ea(this)},has:Zo,add:wd,set:bd,delete:Ed,clear:Td,forEach:ta(!1,!1)},e={get(s){return Jo(this,s,!1,!0)},get size(){return ea(this)},has:Zo,add:wd,set:bd,delete:Ed,clear:Td,forEach:ta(!1,!0)},n={get(s){return Jo(this,s,!0)},get size(){return ea(this,!0)},has(s){return Zo.call(this,s,!0)},add:ir("add"),set:ir("set"),delete:ir("delete"),clear:ir("clear"),forEach:ta(!0,!1)},r={get(s){return Jo(this,s,!0,!0)},get size(){return ea(this,!0)},has(s){return Zo.call(this,s,!0)},add:ir("add"),set:ir("set"),delete:ir("delete"),clear:ir("clear"),forEach:ta(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=na(s,!1,!1),n[s]=na(s,!0,!1),e[s]=na(s,!1,!0),r[s]=na(s,!0,!0)}),[t,n,e,r]}const[Bb,jb,qb,zb]=$b();function Gu(t,e){const n=e?t?zb:qb:t?jb:Bb;return(r,i,s)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?r:Reflect.get(Ce(n,i)&&i in r?n:r,i,s)}const Hb={get:Gu(!1,!1)},Wb={get:Gu(!1,!0)},Kb={get:Gu(!0,!1)};const vg=new WeakMap,wg=new WeakMap,bg=new WeakMap,Gb=new WeakMap;function Qb(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Yb(t){return t.__v_skip||!Object.isExtensible(t)?0:Qb(vb(t))}function dl(t){return Qs(t)?t:Qu(t,!1,Mb,Hb,vg)}function Eg(t){return Qu(t,!1,Ub,Wb,wg)}function Tg(t){return Qu(t,!0,Fb,Kb,bg)}function Qu(t,e,n,r,i){if(!He(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=i.get(t);if(s)return s;const o=Yb(t);if(o===0)return t;const l=new Proxy(t,o===2?r:n);return i.set(t,l),l}function Os(t){return Qs(t)?Os(t.__v_raw):!!(t&&t.__v_isReactive)}function Qs(t){return!!(t&&t.__v_isReadonly)}function Ma(t){return!!(t&&t.__v_isShallow)}function Ig(t){return t?!!t.__v_raw:!1}function Oe(t){const e=t&&t.__v_raw;return e?Oe(e):t}function Xb(t){return Object.isExtensible(t)&&ag(t,"__v_skip",!0),t}const Ys=t=>He(t)?dl(t):t,Yu=t=>He(t)?Tg(t):t;class Ag{constructor(e,n,r,i){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new zu(()=>e(this._value),()=>wa(this,this.effect._dirtyLevel===3?3:4)),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const e=Oe(this);return(!e._cacheable||e.effect.dirty)&&Er(e._value,e._value=e.effect.run())&&wa(e,5),Rg(e),e.effect._dirtyLevel>=2&&wa(e,3),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function Jb(t,e,n=!1){let r,i;const s=we(t);return s?(r=t,i=Ht):(r=t.get,i=t.set),new Ag(r,i,s||!i,n)}function Rg(t){var e;_r&&Yr&&(t=Oe(t),dg(Yr,(e=t.dep)!=null?e:t.dep=mg(()=>t.dep=void 0,t instanceof Ag?t:void 0)))}function wa(t,e=5,n,r){t=Oe(t);const i=t.dep;i&&pg(i,e)}function $t(t){return!!(t&&t.__v_isRef===!0)}function Vt(t){return Pg(t,!1)}function Zb(t){return Pg(t,!0)}function Pg(t,e){return $t(t)?t:new e0(t,e)}class e0{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Oe(e),this._value=n?e:Ys(e)}get value(){return Rg(this),this._value}set value(e){const n=this.__v_isShallow||Ma(e)||Qs(e);e=n?e:Oe(e),Er(e,this._rawValue)&&(this._rawValue,this._rawValue=e,this._value=n?e:Ys(e),wa(this,5))}}function ve(t){return $t(t)?t.value:t}const t0={get:(t,e,n)=>ve(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return $t(i)&&!$t(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function Sg(t){return Os(t)?t:new Proxy(t,t0)}/**
* @vue/runtime-core v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function yr(t,e,n,r){try{return r?t(...r):t()}catch(i){pl(i,e,n)}}function sn(t,e,n,r){if(we(t)){const i=yr(t,e,n,r);return i&&ig(i)&&i.catch(s=>{pl(s,e,n)}),i}if(me(t)){const i=[];for(let s=0;s<t.length;s++)i.push(sn(t[s],e,n,r));return i}}function pl(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;s;){const u=s.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,o,l)===!1)return}s=s.parent}const c=e.appContext.config.errorHandler;if(c){Dr(),yr(c,null,10,[t,o,l]),Lr();return}}n0(t,n,i,r)}function n0(t,e,n,r=!0){console.error(t)}let Xs=!1,Kc=!1;const It=[];let fn=0;const ki=[];let lr=null,Hr=0;const Cg=Promise.resolve();let Xu=null;function kg(t){const e=Xu||Cg;return t?e.then(this?t.bind(this):t):e}function r0(t){let e=fn+1,n=It.length;for(;e<n;){const r=e+n>>>1,i=It[r],s=Js(i);s<t||s===t&&i.pre?e=r+1:n=r}return e}function Ju(t){(!It.length||!It.includes(t,Xs&&t.allowRecurse?fn+1:fn))&&(t.id==null?It.push(t):It.splice(r0(t.id),0,t),xg())}function xg(){!Xs&&!Kc&&(Kc=!0,Xu=Cg.then(Og))}function i0(t){const e=It.indexOf(t);e>fn&&It.splice(e,1)}function s0(t){me(t)?ki.push(...t):(!lr||!lr.includes(t,t.allowRecurse?Hr+1:Hr))&&ki.push(t),xg()}function Id(t,e,n=Xs?fn+1:0){for(;n<It.length;n++){const r=It[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;It.splice(n,1),n--,r()}}}function Ng(t){if(ki.length){const e=[...new Set(ki)].sort((n,r)=>Js(n)-Js(r));if(ki.length=0,lr){lr.push(...e);return}for(lr=e,Hr=0;Hr<lr.length;Hr++){const n=lr[Hr];n.active!==!1&&n()}lr=null,Hr=0}}const Js=t=>t.id==null?1/0:t.id,o0=(t,e)=>{const n=Js(t)-Js(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Og(t){Kc=!1,Xs=!0,It.sort(o0);const e=Ht;try{for(fn=0;fn<It.length;fn++){const n=It[fn];n&&n.active!==!1&&yr(n,null,14)}}finally{fn=0,It.length=0,Ng(),Xs=!1,Xu=null,(It.length||ki.length)&&Og()}}function a0(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||qe;let i=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in r){const f=`${o==="modelValue"?"model":o}Modifiers`,{number:p,trim:m}=r[f]||qe;m&&(i=n.map(v=>at(v)?v.trim():v)),p&&(i=n.map(Eb))}let l,c=r[l=pc(e)]||r[l=pc(Tn(e))];!c&&s&&(c=r[l=pc(Yi(e))]),c&&sn(c,t,6,i);const u=r[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,sn(u,t,6,i)}}function Dg(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(i!==void 0)return i;const s=t.emits;let o={},l=!1;if(!we(t)){const c=u=>{const f=Dg(u,e,!0);f&&(l=!0,ht(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!s&&!l?(He(t)&&r.set(t,null),null):(me(s)?s.forEach(c=>o[c]=null):ht(o,s),He(t)&&r.set(t,o),o)}function ml(t,e){return!t||!ll(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ce(t,e[0].toLowerCase()+e.slice(1))||Ce(t,Yi(e))||Ce(t,e))}let Nt=null,Lg=null;function Fa(t){const e=Nt;return Nt=t,Lg=t&&t.type.__scopeId||null,e}function Ne(t,e=Nt,n){if(!e||t._n)return t;const r=(...i)=>{r._d&&Vd(-1);const s=Fa(e);let o;try{o=t(...i)}finally{Fa(s),r._d&&Vd(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function _c(t){const{type:e,vnode:n,proxy:r,withProxy:i,propsOptions:[s],slots:o,attrs:l,emit:c,render:u,renderCache:f,props:p,data:m,setupState:v,ctx:C,inheritAttrs:L}=t,N=Fa(t);let x,k;try{if(n.shapeFlag&4){const U=i||r,ne=U;x=hn(u.call(ne,U,f,p,v,m,C)),k=l}else{const U=e;x=hn(U.length>1?U(p,{attrs:l,slots:o,emit:c}):U(p,null)),k=e.props?l:l0(l)}}catch(U){Fs.length=0,pl(U,t,1),x=te(Tr)}let V=x;if(k&&L!==!1){const U=Object.keys(k),{shapeFlag:ne}=V;U.length&&ne&7&&(s&&U.some($u)&&(k=c0(k,s)),V=Vi(V,k,!1,!0))}return n.dirs&&(V=Vi(V,null,!1,!0),V.dirs=V.dirs?V.dirs.concat(n.dirs):n.dirs),n.transition&&(V.transition=n.transition),x=V,Fa(N),x}const l0=t=>{let e;for(const n in t)(n==="class"||n==="style"||ll(n))&&((e||(e={}))[n]=t[n]);return e},c0=(t,e)=>{const n={};for(const r in t)(!$u(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function u0(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:l,patchFlag:c}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Ad(r,o,u):!!o;if(c&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const m=f[p];if(o[m]!==r[m]&&!ml(u,m))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?Ad(r,o,u):!0:!!o;return!1}function Ad(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!ml(n,s))return!0}return!1}function h0({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Vg="components";function Qe(t,e){return d0(Vg,t,!0,e)||t}const f0=Symbol.for("v-ndc");function d0(t,e,n=!0,r=!1){const i=Nt||At;if(i){const s=i.type;if(t===Vg){const l=oE(s,!1);if(l&&(l===e||l===Tn(e)||l===hl(Tn(e))))return s}const o=Rd(i[t]||s[t],e)||Rd(i.appContext[t],e);return!o&&r?s:o}}function Rd(t,e){return t&&(t[e]||t[Tn(e)]||t[hl(Tn(e))])}const p0=t=>t.__isSuspense;function m0(t,e){e&&e.pendingBranch?me(t)?e.effects.push(...t):e.effects.push(t):s0(t)}function gl(t,e,n=At,r=!1){if(n){const i=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{Dr();const l=wo(n),c=sn(e,n,t,o);return l(),Lr(),c});return r?i.unshift(s):i.push(s),s}}const Wn=t=>(e,n=At)=>{(!yl||t==="sp")&&gl(t,(...r)=>e(...r),n)},g0=Wn("bm"),Zu=Wn("m"),_0=Wn("bu"),y0=Wn("u"),v0=Wn("bum"),eh=Wn("um"),w0=Wn("sp"),b0=Wn("rtg"),E0=Wn("rtc");function T0(t,e=At){gl("ec",t,e)}function jr(t,e,n,r){const i=t.dirs,s=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];s&&(l.oldValue=s[o].value);let c=l.dir[r];c&&(Dr(),sn(c,n,8,[t.el,l,t,e]),Lr())}}function Xi(t,e,n,r){let i;const s=n&&n[r];if(me(t)||at(t)){i=new Array(t.length);for(let o=0,l=t.length;o<l;o++)i[o]=e(t[o],o,void 0,s&&s[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,s&&s[o])}else if(He(t))if(t[Symbol.iterator])i=Array.from(t,(o,l)=>e(o,l,void 0,s&&s[l]));else{const o=Object.keys(t);i=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const u=o[l];i[l]=e(t[u],u,l,s&&s[l])}}else i=[];return n&&(n[r]=i),i}/*! #__NO_SIDE_EFFECTS__ */function th(t,e){return we(t)?(()=>ht({name:t.name},e,{setup:t}))():t}const Ds=t=>!!t.type.__asyncLoader;function Mg(t,e,n={},r,i){if(Nt.isCE||Nt.parent&&Ds(Nt.parent)&&Nt.parent.isCE)return e!=="default"&&(n.name=e),te("slot",n,r&&r());let s=t[e];s&&s._c&&(s._d=!1),ie();const o=s&&Fg(s(n)),l=Ir(Ve,{key:n.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&t._===1?64:-2);return!i&&l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),s&&s._c&&(s._d=!0),l}function Fg(t){return t.some(e=>$a(e)?!(e.type===Tr||e.type===Ve&&!Fg(e.children)):!0)?t:null}const Gc=t=>t?i_(t)?sh(t):Gc(t.parent):null,Ls=ht(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Gc(t.parent),$root:t=>Gc(t.root),$emit:t=>t.emit,$options:t=>nh(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,Ju(t.update)}),$nextTick:t=>t.n||(t.n=kg.bind(t.proxy)),$watch:t=>q0.bind(t)}),yc=(t,e)=>t!==qe&&!t.__isScriptSetup&&Ce(t,e),I0={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:i,props:s,accessCache:o,type:l,appContext:c}=t;let u;if(e[0]!=="$"){const v=o[e];if(v!==void 0)switch(v){case 1:return r[e];case 2:return i[e];case 4:return n[e];case 3:return s[e]}else{if(yc(r,e))return o[e]=1,r[e];if(i!==qe&&Ce(i,e))return o[e]=2,i[e];if((u=t.propsOptions[0])&&Ce(u,e))return o[e]=3,s[e];if(n!==qe&&Ce(n,e))return o[e]=4,n[e];Qc&&(o[e]=0)}}const f=Ls[e];let p,m;if(f)return e==="$attrs"&&Ut(t.attrs,"get",""),f(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==qe&&Ce(n,e))return o[e]=4,n[e];if(m=c.config.globalProperties,Ce(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:i,ctx:s}=t;return yc(i,e)?(i[e]=n,!0):r!==qe&&Ce(r,e)?(r[e]=n,!0):Ce(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:s}},o){let l;return!!n[o]||t!==qe&&Ce(t,o)||yc(e,o)||(l=s[0])&&Ce(l,o)||Ce(r,o)||Ce(Ls,o)||Ce(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ce(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Pd(t){return me(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Qc=!0;function A0(t){const e=nh(t),n=t.proxy,r=t.ctx;Qc=!1,e.beforeCreate&&Sd(e.beforeCreate,t,"bc");const{data:i,computed:s,methods:o,watch:l,provide:c,inject:u,created:f,beforeMount:p,mounted:m,beforeUpdate:v,updated:C,activated:L,deactivated:N,beforeDestroy:x,beforeUnmount:k,destroyed:V,unmounted:U,render:ne,renderTracked:K,renderTriggered:T,errorCaptured:y,serverPrefetch:w,expose:I,inheritAttrs:A,components:S,directives:b,filters:St}=e;if(u&&R0(u,r,null),o)for(const Pe in o){const Ee=o[Pe];we(Ee)&&(r[Pe]=Ee.bind(n))}if(i){const Pe=i.call(n,n);He(Pe)&&(t.data=dl(Pe))}if(Qc=!0,s)for(const Pe in s){const Ee=s[Pe],qt=we(Ee)?Ee.bind(n,n):we(Ee.get)?Ee.get.bind(n,n):Ht,Zt=!we(Ee)&&we(Ee.set)?Ee.set.bind(n):Ht,Yt=mt({get:qt,set:Zt});Object.defineProperty(r,Pe,{enumerable:!0,configurable:!0,get:()=>Yt.value,set:Ke=>Yt.value=Ke})}if(l)for(const Pe in l)Ug(l[Pe],r,n,Pe);if(c){const Pe=we(c)?c.call(n):c;Reflect.ownKeys(Pe).forEach(Ee=>{ba(Ee,Pe[Ee])})}f&&Sd(f,t,"c");function nt(Pe,Ee){me(Ee)?Ee.forEach(qt=>Pe(qt.bind(n))):Ee&&Pe(Ee.bind(n))}if(nt(g0,p),nt(Zu,m),nt(_0,v),nt(y0,C),nt(z0,L),nt(H0,N),nt(T0,y),nt(E0,K),nt(b0,T),nt(v0,k),nt(eh,U),nt(w0,w),me(I))if(I.length){const Pe=t.exposed||(t.exposed={});I.forEach(Ee=>{Object.defineProperty(Pe,Ee,{get:()=>n[Ee],set:qt=>n[Ee]=qt})})}else t.exposed||(t.exposed={});ne&&t.render===Ht&&(t.render=ne),A!=null&&(t.inheritAttrs=A),S&&(t.components=S),b&&(t.directives=b)}function R0(t,e,n=Ht){me(t)&&(t=Yc(t));for(const r in t){const i=t[r];let s;He(i)?"default"in i?s=_n(i.from||r,i.default,!0):s=_n(i.from||r):s=_n(i),$t(s)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[r]=s}}function Sd(t,e,n){sn(me(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ug(t,e,n,r){const i=r.includes(".")?Jg(n,r):()=>n[r];if(at(t)){const s=e[t];we(s)&&Ms(i,s)}else if(we(t))Ms(i,t.bind(n));else if(He(t))if(me(t))t.forEach(s=>Ug(s,e,n,r));else{const s=we(t.handler)?t.handler.bind(n):e[t.handler];we(s)&&Ms(i,s,t)}}function nh(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,l=s.get(e);let c;return l?c=l:!i.length&&!n&&!r?c=e:(c={},i.length&&i.forEach(u=>Ua(c,u,o,!0)),Ua(c,e,o)),He(e)&&s.set(e,c),c}function Ua(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&Ua(t,s,n,!0),i&&i.forEach(o=>Ua(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=P0[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const P0={data:Cd,props:kd,emits:kd,methods:Is,computed:Is,beforeCreate:xt,created:xt,beforeMount:xt,mounted:xt,beforeUpdate:xt,updated:xt,beforeDestroy:xt,beforeUnmount:xt,destroyed:xt,unmounted:xt,activated:xt,deactivated:xt,errorCaptured:xt,serverPrefetch:xt,components:Is,directives:Is,watch:C0,provide:Cd,inject:S0};function Cd(t,e){return e?t?function(){return ht(we(t)?t.call(this,this):t,we(e)?e.call(this,this):e)}:e:t}function S0(t,e){return Is(Yc(t),Yc(e))}function Yc(t){if(me(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function xt(t,e){return t?[...new Set([].concat(t,e))]:e}function Is(t,e){return t?ht(Object.create(null),t,e):e}function kd(t,e){return t?me(t)&&me(e)?[...new Set([...t,...e])]:ht(Object.create(null),Pd(t),Pd(e??{})):e}function C0(t,e){if(!t)return e;if(!e)return t;const n=ht(Object.create(null),t);for(const r in e)n[r]=xt(t[r],e[r]);return n}function $g(){return{app:null,config:{isNativeTag:_b,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let k0=0;function x0(t,e){return function(r,i=null){we(r)||(r=ht({},r)),i!=null&&!He(i)&&(i=null);const s=$g(),o=new WeakSet;let l=!1;const c=s.app={_uid:k0++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:lE,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&we(u.install)?(o.add(u),u.install(c,...f)):we(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,p){if(!l){const m=te(r,i);return m.appContext=s,p===!0?p="svg":p===!1&&(p=void 0),f&&e?e(m,u):t(m,u,p),l=!0,c._container=u,u.__vue_app__=c,sh(m.component)}},unmount(){l&&(t(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=Vs;Vs=c;try{return u()}finally{Vs=f}}};return c}}let Vs=null;function ba(t,e){if(At){let n=At.provides;const r=At.parent&&At.parent.provides;r===n&&(n=At.provides=Object.create(r)),n[t]=e}}function _n(t,e,n=!1){const r=At||Nt;if(r||Vs){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Vs._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&we(e)?e.call(r&&r.proxy):e}}const Bg={},jg=()=>Object.create(Bg),qg=t=>Object.getPrototypeOf(t)===Bg;function N0(t,e,n,r=!1){const i={},s=jg();t.propsDefaults=Object.create(null),zg(t,e,i,s);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=r?i:Eg(i):t.type.props?t.props=i:t.props=s,t.attrs=s}function O0(t,e,n,r){const{props:i,attrs:s,vnode:{patchFlag:o}}=t,l=Oe(i),[c]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let m=f[p];if(ml(t.emitsOptions,m))continue;const v=e[m];if(c)if(Ce(s,m))v!==s[m]&&(s[m]=v,u=!0);else{const C=Tn(m);i[C]=Xc(c,l,C,v,t,!1)}else v!==s[m]&&(s[m]=v,u=!0)}}}else{zg(t,e,i,s)&&(u=!0);let f;for(const p in l)(!e||!Ce(e,p)&&((f=Yi(p))===p||!Ce(e,f)))&&(c?n&&(n[p]!==void 0||n[f]!==void 0)&&(i[p]=Xc(c,l,p,void 0,t,!0)):delete i[p]);if(s!==l)for(const p in s)(!e||!Ce(e,p))&&(delete s[p],u=!0)}u&&Dn(t.attrs,"set","")}function zg(t,e,n,r){const[i,s]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(Ns(c))continue;const u=e[c];let f;i&&Ce(i,f=Tn(c))?!s||!s.includes(f)?n[f]=u:(l||(l={}))[f]=u:ml(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(s){const c=Oe(n),u=l||qe;for(let f=0;f<s.length;f++){const p=s[f];n[p]=Xc(i,c,p,u[p],t,!Ce(u,p))}}return o}function Xc(t,e,n,r,i,s){const o=t[n];if(o!=null){const l=Ce(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&we(c)){const{propsDefaults:u}=i;if(n in u)r=u[n];else{const f=wo(i);r=u[n]=c.call(null,e),f()}}else r=c}o[0]&&(s&&!l?r=!1:o[1]&&(r===""||r===Yi(n))&&(r=!0))}return r}function Hg(t,e,n=!1){const r=e.propsCache,i=r.get(t);if(i)return i;const s=t.props,o={},l=[];let c=!1;if(!we(t)){const f=p=>{c=!0;const[m,v]=Hg(p,e,!0);ht(o,m),v&&l.push(...v)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!s&&!c)return He(t)&&r.set(t,Si),Si;if(me(s))for(let f=0;f<s.length;f++){const p=Tn(s[f]);xd(p)&&(o[p]=qe)}else if(s)for(const f in s){const p=Tn(f);if(xd(p)){const m=s[f],v=o[p]=me(m)||we(m)?{type:m}:ht({},m);if(v){const C=Dd(Boolean,v.type),L=Dd(String,v.type);v[0]=C>-1,v[1]=L<0||C<L,(C>-1||Ce(v,"default"))&&l.push(p)}}}const u=[o,l];return He(t)&&r.set(t,u),u}function xd(t){return t[0]!=="$"&&!Ns(t)}function Nd(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function Od(t,e){return Nd(t)===Nd(e)}function Dd(t,e){return me(e)?e.findIndex(n=>Od(n,t)):we(e)&&Od(e,t)?0:-1}const Wg=t=>t[0]==="_"||t==="$stable",rh=t=>me(t)?t.map(hn):[hn(t)],D0=(t,e,n)=>{if(e._n)return e;const r=Ne((...i)=>rh(e(...i)),n);return r._c=!1,r},Kg=(t,e,n)=>{const r=t._ctx;for(const i in t){if(Wg(i))continue;const s=t[i];if(we(s))e[i]=D0(i,s,r);else if(s!=null){const o=rh(s);e[i]=()=>o}}},Gg=(t,e)=>{const n=rh(e);t.slots.default=()=>n},L0=(t,e)=>{const n=t.slots=jg();if(t.vnode.shapeFlag&32){const r=e._;r?(ht(n,e),ag(n,"_",r,!0)):Kg(e,n)}else e&&Gg(t,e)},V0=(t,e,n)=>{const{vnode:r,slots:i}=t;let s=!0,o=qe;if(r.shapeFlag&32){const l=e._;l?n&&l===1?s=!1:(ht(i,e),!n&&l===1&&delete i._):(s=!e.$stable,Kg(e,i)),o=e}else e&&(Gg(t,e),o={default:1});if(s)for(const l in i)!Wg(l)&&o[l]==null&&delete i[l]};function Jc(t,e,n,r,i=!1){if(me(t)){t.forEach((m,v)=>Jc(m,e&&(me(e)?e[v]:e),n,r,i));return}if(Ds(r)&&!i)return;const s=r.shapeFlag&4?sh(r.component):r.el,o=i?null:s,{i:l,r:c}=t,u=e&&e.r,f=l.refs===qe?l.refs={}:l.refs,p=l.setupState;if(u!=null&&u!==c&&(at(u)?(f[u]=null,Ce(p,u)&&(p[u]=null)):$t(u)&&(u.value=null)),we(c))yr(c,l,12,[o,f]);else{const m=at(c),v=$t(c);if(m||v){const C=()=>{if(t.f){const L=m?Ce(p,c)?p[c]:f[c]:c.value;i?me(L)&&Bu(L,s):me(L)?L.includes(s)||L.push(s):m?(f[c]=[s],Ce(p,c)&&(p[c]=f[c])):(c.value=[s],t.k&&(f[t.k]=c.value))}else m?(f[c]=o,Ce(p,c)&&(p[c]=o)):v&&(c.value=o,t.k&&(f[t.k]=o))};o?(C.id=-1,Lt(C,n)):C()}}}const Lt=m0;function M0(t){return F0(t)}function F0(t,e){const n=lg();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:o,createText:l,createComment:c,setText:u,setElementText:f,parentNode:p,nextSibling:m,setScopeId:v=Ht,insertStaticContent:C}=t,L=(_,E,O,B=null,M=null,H=null,Q=void 0,z=null,W=!!E.dynamicChildren)=>{if(_===E)return;_&&!ws(_,E)&&(B=F(_),Ke(_,M,H,!0),_=null),E.patchFlag===-2&&(W=!1,E.dynamicChildren=null);const{type:j,ref:J,shapeFlag:le}=E;switch(j){case _l:N(_,E,O,B);break;case Tr:x(_,E,O,B);break;case Ea:_==null&&k(E,O,B,Q);break;case Ve:S(_,E,O,B,M,H,Q,z,W);break;default:le&1?ne(_,E,O,B,M,H,Q,z,W):le&6?b(_,E,O,B,M,H,Q,z,W):(le&64||le&128)&&j.process(_,E,O,B,M,H,Q,z,W,re)}J!=null&&M&&Jc(J,_&&_.ref,H,E||_,!E)},N=(_,E,O,B)=>{if(_==null)r(E.el=l(E.children),O,B);else{const M=E.el=_.el;E.children!==_.children&&u(M,E.children)}},x=(_,E,O,B)=>{_==null?r(E.el=c(E.children||""),O,B):E.el=_.el},k=(_,E,O,B)=>{[_.el,_.anchor]=C(_.children,E,O,B,_.el,_.anchor)},V=({el:_,anchor:E},O,B)=>{let M;for(;_&&_!==E;)M=m(_),r(_,O,B),_=M;r(E,O,B)},U=({el:_,anchor:E})=>{let O;for(;_&&_!==E;)O=m(_),i(_),_=O;i(E)},ne=(_,E,O,B,M,H,Q,z,W)=>{E.type==="svg"?Q="svg":E.type==="math"&&(Q="mathml"),_==null?K(E,O,B,M,H,Q,z,W):w(_,E,M,H,Q,z,W)},K=(_,E,O,B,M,H,Q,z)=>{let W,j;const{props:J,shapeFlag:le,transition:ae,dirs:de}=_;if(W=_.el=o(_.type,H,J&&J.is,J),le&8?f(W,_.children):le&16&&y(_.children,W,null,B,M,vc(_,H),Q,z),de&&jr(_,null,B,"created"),T(W,_,_.scopeId,Q,B),J){for(const ye in J)ye!=="value"&&!Ns(ye)&&s(W,ye,null,J[ye],H,_.children,B,M,ct);"value"in J&&s(W,"value",null,J.value,H),(j=J.onVnodeBeforeMount)&&un(j,B,_)}de&&jr(_,null,B,"beforeMount");const ue=U0(M,ae);ue&&ae.beforeEnter(W),r(W,E,O),((j=J&&J.onVnodeMounted)||ue||de)&&Lt(()=>{j&&un(j,B,_),ue&&ae.enter(W),de&&jr(_,null,B,"mounted")},M)},T=(_,E,O,B,M)=>{if(O&&v(_,O),B)for(let H=0;H<B.length;H++)v(_,B[H]);if(M){let H=M.subTree;if(E===H){const Q=M.vnode;T(_,Q,Q.scopeId,Q.slotScopeIds,M.parent)}}},y=(_,E,O,B,M,H,Q,z,W=0)=>{for(let j=W;j<_.length;j++){const J=_[j]=z?cr(_[j]):hn(_[j]);L(null,J,E,O,B,M,H,Q,z)}},w=(_,E,O,B,M,H,Q)=>{const z=E.el=_.el;let{patchFlag:W,dynamicChildren:j,dirs:J}=E;W|=_.patchFlag&16;const le=_.props||qe,ae=E.props||qe;let de;if(O&&qr(O,!1),(de=ae.onVnodeBeforeUpdate)&&un(de,O,E,_),J&&jr(E,_,O,"beforeUpdate"),O&&qr(O,!0),j?I(_.dynamicChildren,j,z,O,B,vc(E,M),H):Q||Ee(_,E,z,null,O,B,vc(E,M),H,!1),W>0){if(W&16)A(z,E,le,ae,O,B,M);else if(W&2&&le.class!==ae.class&&s(z,"class",null,ae.class,M),W&4&&s(z,"style",le.style,ae.style,M),W&8){const ue=E.dynamicProps;for(let ye=0;ye<ue.length;ye++){const Ae=ue[ye],tt=le[Ae],Ot=ae[Ae];(Ot!==tt||Ae==="value")&&s(z,Ae,tt,Ot,M,_.children,O,B,ct)}}W&1&&_.children!==E.children&&f(z,E.children)}else!Q&&j==null&&A(z,E,le,ae,O,B,M);((de=ae.onVnodeUpdated)||J)&&Lt(()=>{de&&un(de,O,E,_),J&&jr(E,_,O,"updated")},B)},I=(_,E,O,B,M,H,Q)=>{for(let z=0;z<E.length;z++){const W=_[z],j=E[z],J=W.el&&(W.type===Ve||!ws(W,j)||W.shapeFlag&70)?p(W.el):O;L(W,j,J,null,B,M,H,Q,!0)}},A=(_,E,O,B,M,H,Q)=>{if(O!==B){if(O!==qe)for(const z in O)!Ns(z)&&!(z in B)&&s(_,z,O[z],null,Q,E.children,M,H,ct);for(const z in B){if(Ns(z))continue;const W=B[z],j=O[z];W!==j&&z!=="value"&&s(_,z,j,W,Q,E.children,M,H,ct)}"value"in B&&s(_,"value",O.value,B.value,Q)}},S=(_,E,O,B,M,H,Q,z,W)=>{const j=E.el=_?_.el:l(""),J=E.anchor=_?_.anchor:l("");let{patchFlag:le,dynamicChildren:ae,slotScopeIds:de}=E;de&&(z=z?z.concat(de):de),_==null?(r(j,O,B),r(J,O,B),y(E.children||[],O,J,M,H,Q,z,W)):le>0&&le&64&&ae&&_.dynamicChildren?(I(_.dynamicChildren,ae,O,M,H,Q,z),(E.key!=null||M&&E===M.subTree)&&Qg(_,E,!0)):Ee(_,E,O,J,M,H,Q,z,W)},b=(_,E,O,B,M,H,Q,z,W)=>{E.slotScopeIds=z,_==null?E.shapeFlag&512?M.ctx.activate(E,O,B,Q,W):St(E,O,B,M,H,Q,W):Qt(_,E,W)},St=(_,E,O,B,M,H,Q)=>{const z=_.component=tE(_,B,M);if(Zg(_)&&(z.ctx.renderer=re),nE(z),z.asyncDep){if(M&&M.registerDep(z,nt,Q),!_.el){const W=z.subTree=te(Tr);x(null,W,E,O)}}else nt(z,_,E,O,M,H,Q)},Qt=(_,E,O)=>{const B=E.component=_.component;if(u0(_,E,O))if(B.asyncDep&&!B.asyncResolved){Pe(B,E,O);return}else B.next=E,i0(B.update),B.effect.dirty=!0,B.update();else E.el=_.el,B.vnode=E},nt=(_,E,O,B,M,H,Q)=>{const z=()=>{if(_.isMounted){let{next:J,bu:le,u:ae,parent:de,vnode:ue}=_;{const Jn=Yg(_);if(Jn){J&&(J.el=ue.el,Pe(_,J,Q)),Jn.asyncDep.then(()=>{_.isUnmounted||z()});return}}let ye=J,Ae;qr(_,!1),J?(J.el=ue.el,Pe(_,J,Q)):J=ue,le&&mc(le),(Ae=J.props&&J.props.onVnodeBeforeUpdate)&&un(Ae,de,J,ue),qr(_,!0);const tt=_c(_),Ot=_.subTree;_.subTree=tt,L(Ot,tt,p(Ot.el),F(Ot),_,M,H),J.el=tt.el,ye===null&&h0(_,tt.el),ae&&Lt(ae,M),(Ae=J.props&&J.props.onVnodeUpdated)&&Lt(()=>un(Ae,de,J,ue),M)}else{let J;const{el:le,props:ae}=E,{bm:de,m:ue,parent:ye}=_,Ae=Ds(E);if(qr(_,!1),de&&mc(de),!Ae&&(J=ae&&ae.onVnodeBeforeMount)&&un(J,ye,E),qr(_,!0),le&&Le){const tt=()=>{_.subTree=_c(_),Le(le,_.subTree,_,M,null)};Ae?E.type.__asyncLoader().then(()=>!_.isUnmounted&&tt()):tt()}else{const tt=_.subTree=_c(_);L(null,tt,O,B,_,M,H),E.el=tt.el}if(ue&&Lt(ue,M),!Ae&&(J=ae&&ae.onVnodeMounted)){const tt=E;Lt(()=>un(J,ye,tt),M)}(E.shapeFlag&256||ye&&Ds(ye.vnode)&&ye.vnode.shapeFlag&256)&&_.a&&Lt(_.a,M),_.isMounted=!0,E=O=B=null}},W=_.effect=new zu(z,Ht,()=>Ju(j),_.scope),j=_.update=()=>{W.dirty&&W.run()};j.id=_.uid,qr(_,!0),j()},Pe=(_,E,O)=>{E.component=_;const B=_.vnode.props;_.vnode=E,_.next=null,O0(_,E.props,B,O),V0(_,E.children,O),Dr(),Id(_),Lr()},Ee=(_,E,O,B,M,H,Q,z,W=!1)=>{const j=_&&_.children,J=_?_.shapeFlag:0,le=E.children,{patchFlag:ae,shapeFlag:de}=E;if(ae>0){if(ae&128){Zt(j,le,O,B,M,H,Q,z,W);return}else if(ae&256){qt(j,le,O,B,M,H,Q,z,W);return}}de&8?(J&16&&ct(j,M,H),le!==j&&f(O,le)):J&16?de&16?Zt(j,le,O,B,M,H,Q,z,W):ct(j,M,H,!0):(J&8&&f(O,""),de&16&&y(le,O,B,M,H,Q,z,W))},qt=(_,E,O,B,M,H,Q,z,W)=>{_=_||Si,E=E||Si;const j=_.length,J=E.length,le=Math.min(j,J);let ae;for(ae=0;ae<le;ae++){const de=E[ae]=W?cr(E[ae]):hn(E[ae]);L(_[ae],de,O,null,M,H,Q,z,W)}j>J?ct(_,M,H,!0,!1,le):y(E,O,B,M,H,Q,z,W,le)},Zt=(_,E,O,B,M,H,Q,z,W)=>{let j=0;const J=E.length;let le=_.length-1,ae=J-1;for(;j<=le&&j<=ae;){const de=_[j],ue=E[j]=W?cr(E[j]):hn(E[j]);if(ws(de,ue))L(de,ue,O,null,M,H,Q,z,W);else break;j++}for(;j<=le&&j<=ae;){const de=_[le],ue=E[ae]=W?cr(E[ae]):hn(E[ae]);if(ws(de,ue))L(de,ue,O,null,M,H,Q,z,W);else break;le--,ae--}if(j>le){if(j<=ae){const de=ae+1,ue=de<J?E[de].el:B;for(;j<=ae;)L(null,E[j]=W?cr(E[j]):hn(E[j]),O,ue,M,H,Q,z,W),j++}}else if(j>ae)for(;j<=le;)Ke(_[j],M,H,!0),j++;else{const de=j,ue=j,ye=new Map;for(j=ue;j<=ae;j++){const ft=E[j]=W?cr(E[j]):hn(E[j]);ft.key!=null&&ye.set(ft.key,j)}let Ae,tt=0;const Ot=ae-ue+1;let Jn=!1,Zn=0;const er=new Array(Ot);for(j=0;j<Ot;j++)er[j]=0;for(j=de;j<=le;j++){const ft=_[j];if(tt>=Ot){Ke(ft,M,H,!0);continue}let Xt;if(ft.key!=null)Xt=ye.get(ft.key);else for(Ae=ue;Ae<=ae;Ae++)if(er[Ae-ue]===0&&ws(ft,E[Ae])){Xt=Ae;break}Xt===void 0?Ke(ft,M,H,!0):(er[Xt-ue]=j+1,Xt>=Zn?Zn=Xt:Jn=!0,L(ft,E[Xt],O,null,M,H,Q,z,W),tt++)}const os=Jn?$0(er):Si;for(Ae=os.length-1,j=Ot-1;j>=0;j--){const ft=ue+j,Xt=E[ft],Mo=ft+1<J?E[ft+1].el:B;er[j]===0?L(null,Xt,O,Mo,M,H,Q,z,W):Jn&&(Ae<0||j!==os[Ae]?Yt(Xt,O,Mo,2):Ae--)}}},Yt=(_,E,O,B,M=null)=>{const{el:H,type:Q,transition:z,children:W,shapeFlag:j}=_;if(j&6){Yt(_.component.subTree,E,O,B);return}if(j&128){_.suspense.move(E,O,B);return}if(j&64){Q.move(_,E,O,re);return}if(Q===Ve){r(H,E,O);for(let le=0;le<W.length;le++)Yt(W[le],E,O,B);r(_.anchor,E,O);return}if(Q===Ea){V(_,E,O);return}if(B!==2&&j&1&&z)if(B===0)z.beforeEnter(H),r(H,E,O),Lt(()=>z.enter(H),M);else{const{leave:le,delayLeave:ae,afterLeave:de}=z,ue=()=>r(H,E,O),ye=()=>{le(H,()=>{ue(),de&&de()})};ae?ae(H,ue,ye):ye()}else r(H,E,O)},Ke=(_,E,O,B=!1,M=!1)=>{const{type:H,props:Q,ref:z,children:W,dynamicChildren:j,shapeFlag:J,patchFlag:le,dirs:ae,memoIndex:de}=_;if(z!=null&&Jc(z,null,O,_,!0),de!=null&&(E.renderCache[de]=void 0),J&256){E.ctx.deactivate(_);return}const ue=J&1&&ae,ye=!Ds(_);let Ae;if(ye&&(Ae=Q&&Q.onVnodeBeforeUnmount)&&un(Ae,E,_),J&6)cn(_.component,O,B);else{if(J&128){_.suspense.unmount(O,B);return}ue&&jr(_,null,E,"beforeUnmount"),J&64?_.type.remove(_,E,O,M,re,B):j&&(H!==Ve||le>0&&le&64)?ct(j,E,O,!1,!0):(H===Ve&&le&384||!M&&J&16)&&ct(W,E,O),B&&Ge(_)}(ye&&(Ae=Q&&Q.onVnodeUnmounted)||ue)&&Lt(()=>{Ae&&un(Ae,E,_),ue&&jr(_,null,E,"unmounted")},O)},Ge=_=>{const{type:E,el:O,anchor:B,transition:M}=_;if(E===Ve){Xn(O,B);return}if(E===Ea){U(_);return}const H=()=>{i(O),M&&!M.persisted&&M.afterLeave&&M.afterLeave()};if(_.shapeFlag&1&&M&&!M.persisted){const{leave:Q,delayLeave:z}=M,W=()=>Q(O,H);z?z(_.el,H,W):W()}else H()},Xn=(_,E)=>{let O;for(;_!==E;)O=m(_),i(_),_=O;i(E)},cn=(_,E,O)=>{const{bum:B,scope:M,update:H,subTree:Q,um:z,m:W,a:j}=_;Ld(W),Ld(j),B&&mc(B),M.stop(),H&&(H.active=!1,Ke(Q,_,E,O)),z&&Lt(z,E),Lt(()=>{_.isUnmounted=!0},E),E&&E.pendingBranch&&!E.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===E.pendingId&&(E.deps--,E.deps===0&&E.resolve())},ct=(_,E,O,B=!1,M=!1,H=0)=>{for(let Q=H;Q<_.length;Q++)Ke(_[Q],E,O,B,M)},F=_=>_.shapeFlag&6?F(_.component.subTree):_.shapeFlag&128?_.suspense.next():m(_.anchor||_.el);let X=!1;const Y=(_,E,O)=>{_==null?E._vnode&&Ke(E._vnode,null,null,!0):L(E._vnode||null,_,E,null,null,null,O),X||(X=!0,Id(),Ng(),X=!1),E._vnode=_},re={p:L,um:Ke,m:Yt,r:Ge,mt:St,mc:y,pc:Ee,pbc:I,n:F,o:t};let Ie,Le;return e&&([Ie,Le]=e(re)),{render:Y,hydrate:Ie,createApp:x0(Y,Ie)}}function vc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function qr({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function U0(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Qg(t,e,n=!1){const r=t.children,i=e.children;if(me(r)&&me(i))for(let s=0;s<r.length;s++){const o=r[s];let l=i[s];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[s]=cr(i[s]),l.el=o.el),!n&&l.patchFlag!==-2&&Qg(o,l)),l.type===_l&&(l.el=o.el)}}function $0(t){const e=t.slice(),n=[0];let r,i,s,o,l;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(i=n[n.length-1],t[i]<u){e[r]=i,n.push(r);continue}for(s=0,o=n.length-1;s<o;)l=s+o>>1,t[n[l]]<u?s=l+1:o=l;u<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}function Yg(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Yg(e)}function Ld(t){if(t)for(let e=0;e<t.length;e++)t[e].active=!1}const B0=Symbol.for("v-scx"),j0=()=>_n(B0),ra={};function Ms(t,e,n){return Xg(t,e,n)}function Xg(t,e,{immediate:n,deep:r,flush:i,once:s,onTrack:o,onTrigger:l}=qe){if(e&&s){const K=e;e=(...T)=>{K(...T),ne()}}const c=At,u=K=>r===!0?K:Wr(K,r===!1?1:void 0);let f,p=!1,m=!1;if($t(t)?(f=()=>t.value,p=Ma(t)):Os(t)?(f=()=>u(t),p=!0):me(t)?(m=!0,p=t.some(K=>Os(K)||Ma(K)),f=()=>t.map(K=>{if($t(K))return K.value;if(Os(K))return u(K);if(we(K))return yr(K,c,2)})):we(t)?e?f=()=>yr(t,c,2):f=()=>(v&&v(),sn(t,c,3,[C])):f=Ht,e&&r){const K=f;f=()=>Wr(K())}let v,C=K=>{v=V.onStop=()=>{yr(K,c,4),v=V.onStop=void 0}},L;if(yl)if(C=Ht,e?n&&sn(e,c,3,[f(),m?[]:void 0,C]):f(),i==="sync"){const K=j0();L=K.__watcherHandles||(K.__watcherHandles=[])}else return Ht;let N=m?new Array(t.length).fill(ra):ra;const x=()=>{if(!(!V.active||!V.dirty))if(e){const K=V.run();(r||p||(m?K.some((T,y)=>Er(T,N[y])):Er(K,N)))&&(v&&v(),sn(e,c,3,[K,N===ra?void 0:m&&N[0]===ra?[]:N,C]),N=K)}else V.run()};x.allowRecurse=!!e;let k;i==="sync"?k=x:i==="post"?k=()=>Lt(x,c&&c.suspense):(x.pre=!0,c&&(x.id=c.uid),k=()=>Ju(x));const V=new zu(f,Ht,k),U=xb(),ne=()=>{V.stop(),U&&Bu(U.effects,V)};return e?n?x():N=V.run():i==="post"?Lt(V.run.bind(V),c&&c.suspense):V.run(),L&&L.push(ne),ne}function q0(t,e,n){const r=this.proxy,i=at(t)?t.includes(".")?Jg(r,t):()=>r[t]:t.bind(r,r);let s;we(e)?s=e:(s=e.handler,n=e);const o=wo(this),l=Xg(i,s.bind(r),n);return o(),l}function Jg(t,e){const n=e.split(".");return()=>{let r=t;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function Wr(t,e=1/0,n){if(e<=0||!He(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,$t(t))Wr(t.value,e,n);else if(me(t))for(let r=0;r<t.length;r++)Wr(t[r],e,n);else if(rg(t)||Ci(t))t.forEach(r=>{Wr(r,e,n)});else if(og(t)){for(const r in t)Wr(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Wr(t[r],e,n)}return t}const Zg=t=>t.type.__isKeepAlive;function z0(t,e){e_(t,"a",e)}function H0(t,e){e_(t,"da",e)}function e_(t,e,n=At){const r=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(gl(e,r,n),n){let i=n.parent;for(;i&&i.parent;)Zg(i.parent.vnode)&&W0(r,e,n,i),i=i.parent}}function W0(t,e,n,r){const i=gl(e,t,r,!0);eh(()=>{Bu(r[e],i)},n)}function t_(t,e){t.shapeFlag&6&&t.component?t_(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}const K0=t=>t.__isTeleport,Ve=Symbol.for("v-fgt"),_l=Symbol.for("v-txt"),Tr=Symbol.for("v-cmt"),Ea=Symbol.for("v-stc"),Fs=[];let nn=null;function ie(t=!1){Fs.push(nn=t?null:[])}function G0(){Fs.pop(),nn=Fs[Fs.length-1]||null}let Zs=1;function Vd(t){Zs+=t}function n_(t){return t.dynamicChildren=Zs>0?nn||Si:null,G0(),Zs>0&&nn&&nn.push(t),t}function ce(t,e,n,r,i,s){return n_(R(t,e,n,r,i,s,!0))}function Ir(t,e,n,r,i){return n_(te(t,e,n,r,i,!0))}function $a(t){return t?t.__v_isVNode===!0:!1}function ws(t,e){return t.type===e.type&&t.key===e.key}const r_=({key:t})=>t??null,Ta=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?at(t)||$t(t)||we(t)?{i:Nt,r:t,k:e,f:!!n}:t:null);function R(t,e=null,n=null,r=0,i=null,s=t===Ve?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&r_(e),ref:e&&Ta(e),scopeId:Lg,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Nt};return l?(ih(c,n),s&128&&t.normalize(c)):n&&(c.shapeFlag|=at(n)?8:16),Zs>0&&!o&&nn&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&nn.push(c),c}const te=Q0;function Q0(t,e=null,n=null,r=0,i=null,s=!1){if((!t||t===f0)&&(t=Tr),$a(t)){const l=Vi(t,e,!0);return n&&ih(l,n),Zs>0&&!s&&nn&&(l.shapeFlag&6?nn[nn.indexOf(t)]=l:nn.push(l)),l.patchFlag=-2,l}if(aE(t)&&(t=t.__vccOpts),e){e=Y0(e);let{class:l,style:c}=e;l&&!at(l)&&(e.class=vo(l)),He(c)&&(Ig(c)&&!me(c)&&(c=ht({},c)),e.style=qu(c))}const o=at(t)?1:p0(t)?128:K0(t)?64:He(t)?4:we(t)?2:0;return R(t,e,n,r,i,o,s,!0)}function Y0(t){return t?Ig(t)||qg(t)?ht({},t):t:null}function Vi(t,e,n=!1,r=!1){const{props:i,ref:s,patchFlag:o,children:l,transition:c}=t,u=e?J0(i||{},e):i,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&r_(u),ref:e&&e.ref?n&&s?me(s)?s.concat(Ta(e)):[s,Ta(e)]:Ta(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ve?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Vi(t.ssContent),ssFallback:t.ssFallback&&Vi(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&t_(f,c.clone(f)),f}function be(t=" ",e=0){return te(_l,null,t,e)}function X0(t,e){const n=te(Ea,null,t);return n.staticCount=e,n}function Ln(t="",e=!1){return e?(ie(),Ir(Tr,null,t)):te(Tr,null,t)}function hn(t){return t==null||typeof t=="boolean"?te(Tr):me(t)?te(Ve,null,t.slice()):typeof t=="object"?cr(t):te(_l,null,String(t))}function cr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Vi(t)}function ih(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(me(e))n=16;else if(typeof e=="object")if(r&65){const i=e.default;i&&(i._c&&(i._d=!1),ih(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!qg(e)?e._ctx=Nt:i===3&&Nt&&(Nt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else we(e)?(e={default:e,_ctx:Nt},n=32):(e=String(e),r&64?(n=16,e=[be(e)]):n=8);t.children=e,t.shapeFlag|=n}function J0(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const i in r)if(i==="class")e.class!==r.class&&(e.class=vo([e.class,r.class]));else if(i==="style")e.style=qu([e.style,r.style]);else if(ll(i)){const s=e[i],o=r[i];o&&s!==o&&!(me(s)&&s.includes(o))&&(e[i]=s?[].concat(s,o):o)}else i!==""&&(e[i]=r[i])}return e}function un(t,e,n,r=null){sn(t,e,7,[n,r])}const Z0=$g();let eE=0;function tE(t,e,n){const r=t.type,i=(e?e.appContext:t.appContext)||Z0,s={uid:eE++,vnode:t,type:r,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Cb(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Hg(r,i),emitsOptions:Dg(r,i),emit:null,emitted:null,propsDefaults:qe,inheritAttrs:r.inheritAttrs,ctx:qe,data:qe,props:qe,attrs:qe,slots:qe,refs:qe,setupState:qe,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=a0.bind(null,s),t.ce&&t.ce(s),s}let At=null,Ba,Zc;{const t=lg(),e=(n,r)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(r),s=>{i.length>1?i.forEach(o=>o(s)):i[0](s)}};Ba=e("__VUE_INSTANCE_SETTERS__",n=>At=n),Zc=e("__VUE_SSR_SETTERS__",n=>yl=n)}const wo=t=>{const e=At;return Ba(t),t.scope.on(),()=>{t.scope.off(),Ba(e)}},Md=()=>{At&&At.scope.off(),Ba(null)};function i_(t){return t.vnode.shapeFlag&4}let yl=!1;function nE(t,e=!1){e&&Zc(e);const{props:n,children:r}=t.vnode,i=i_(t);N0(t,n,i,e),L0(t,r);const s=i?rE(t,e):void 0;return e&&Zc(!1),s}function rE(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,I0);const{setup:r}=n;if(r){const i=t.setupContext=r.length>1?sE(t):null,s=wo(t);Dr();const o=yr(r,t,0,[t.props,i]);if(Lr(),s(),ig(o)){if(o.then(Md,Md),e)return o.then(l=>{Fd(t,l,e)}).catch(l=>{pl(l,t,0)});t.asyncDep=o}else Fd(t,o,e)}else s_(t,e)}function Fd(t,e,n){we(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:He(e)&&(t.setupState=Sg(e)),s_(t,n)}let Ud;function s_(t,e,n){const r=t.type;if(!t.render){if(!e&&Ud&&!r.render){const i=r.template||nh(t).template;if(i){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:c}=r,u=ht(ht({isCustomElement:s,delimiters:l},o),c);r.render=Ud(i,u)}}t.render=r.render||Ht}{const i=wo(t);Dr();try{A0(t)}finally{Lr(),i()}}}const iE={get(t,e){return Ut(t,"get",""),t[e]}};function sE(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,iE),slots:t.slots,emit:t.emit,expose:e}}function sh(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Sg(Xb(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ls)return Ls[n](t)},has(e,n){return n in e||n in Ls}})):t.proxy}function oE(t,e=!0){return we(t)?t.displayName||t.name:t.name||e&&t.__name}function aE(t){return we(t)&&"__vccOpts"in t}const mt=(t,e)=>Jb(t,e,yl);function oh(t,e,n){const r=arguments.length;return r===2?He(e)&&!me(e)?$a(e)?te(t,null,[e]):te(t,e):te(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&$a(n)&&(n=[n]),te(t,e,n))}const lE="3.4.29";/**
* @vue/runtime-dom v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const cE="http://www.w3.org/2000/svg",uE="http://www.w3.org/1998/Math/MathML",Cn=typeof document<"u"?document:null,$d=Cn&&Cn.createElement("template"),hE={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e==="svg"?Cn.createElementNS(cE,t):e==="mathml"?Cn.createElementNS(uE,t):n?Cn.createElement(t,{is:n}):Cn.createElement(t);return t==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:t=>Cn.createTextNode(t),createComment:t=>Cn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Cn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{$d.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const l=$d.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},fE=Symbol("_vtc");function dE(t,e,n){const r=t[fE];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Bd=Symbol("_vod"),pE=Symbol("_vsh"),mE=Symbol(""),gE=/(^|;)\s*display\s*:/;function _E(t,e,n){const r=t.style,i=at(n);let s=!1;if(n&&!i){if(e)if(at(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Ia(r,l,"")}else for(const o in e)n[o]==null&&Ia(r,o,"");for(const o in n)o==="display"&&(s=!0),Ia(r,o,n[o])}else if(i){if(e!==n){const o=r[mE];o&&(n+=";"+o),r.cssText=n,s=gE.test(n)}}else e&&t.removeAttribute("style");Bd in t&&(t[Bd]=s?r.display:"",t[pE]&&(r.display="none"))}const jd=/\s*!important$/;function Ia(t,e,n){if(me(n))n.forEach(r=>Ia(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=yE(t,e);jd.test(n)?t.setProperty(Yi(r),n.replace(jd,""),"important"):t[r]=n}}const qd=["Webkit","Moz","ms"],wc={};function yE(t,e){const n=wc[e];if(n)return n;let r=Tn(e);if(r!=="filter"&&r in t)return wc[e]=r;r=hl(r);for(let i=0;i<qd.length;i++){const s=qd[i]+r;if(s in t)return wc[e]=s}return e}const zd="http://www.w3.org/1999/xlink";function Hd(t,e,n,r,i,s=Sb(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(zd,e.slice(6,e.length)):t.setAttributeNS(zd,e,n):n==null||s&&!cg(n)?t.removeAttribute(e):t.setAttribute(e,s?"":String(n))}function vE(t,e,n,r,i,s,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,i,s),t[e]=n??"";return}const l=t.tagName;if(e==="value"&&l!=="PROGRESS"&&!l.includes("-")){const u=l==="OPTION"?t.getAttribute("value")||"":t.value,f=n==null?"":String(n);(u!==f||!("_value"in t))&&(t.value=f),n==null&&t.removeAttribute(e),t._value=n;return}let c=!1;if(n===""||n==null){const u=typeof t[e];u==="boolean"?n=cg(n):n==null&&u==="string"?(n="",c=!0):u==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function wE(t,e,n,r){t.addEventListener(e,n,r)}function bE(t,e,n,r){t.removeEventListener(e,n,r)}const Wd=Symbol("_vei");function EE(t,e,n,r,i=null){const s=t[Wd]||(t[Wd]={}),o=s[e];if(r&&o)o.value=r;else{const[l,c]=TE(e);if(r){const u=s[e]=RE(r,i);wE(t,l,u,c)}else o&&(bE(t,l,o,c),s[e]=void 0)}}const Kd=/(?:Once|Passive|Capture)$/;function TE(t){let e;if(Kd.test(t)){e={};let r;for(;r=t.match(Kd);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Yi(t.slice(2)),e]}let bc=0;const IE=Promise.resolve(),AE=()=>bc||(IE.then(()=>bc=0),bc=Date.now());function RE(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;sn(PE(r,n.value),e,5,[r])};return n.value=t,n.attached=AE(),n}function PE(t,e){if(me(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>i=>!i._stopped&&r&&r(i))}else return e}const Gd=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,SE=(t,e,n,r,i,s,o,l,c)=>{const u=i==="svg";e==="class"?dE(t,r,u):e==="style"?_E(t,n,r):ll(e)?$u(e)||EE(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):CE(t,e,r,u))?(vE(t,e,r,s,o,l,c),(e==="value"||e==="checked"||e==="selected")&&Hd(t,e,r,u,o,e!=="value")):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Hd(t,e,r,u))};function CE(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Gd(e)&&we(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Gd(e)&&at(n)?!1:e in t}const kE=["ctrl","shift","alt","meta"],xE={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>kE.some(n=>t[`${n}Key`]&&!e.includes(n))},ei=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(i,...s)=>{for(let o=0;o<e.length;o++){const l=xE[e[o]];if(l&&l(i,e))return}return t(i,...s)})},NE=ht({patchProp:SE},hE);let Qd;function OE(){return Qd||(Qd=M0(NE))}const DE=(...t)=>{const e=OE().createApp(...t),{mount:n}=e;return e.mount=r=>{const i=VE(r);if(!i)return;const s=e._component;!we(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,LE(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function LE(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function VE(t){return at(t)?document.querySelector(t):t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ME=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},a_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,f=s>>2,p=(s&3)<<4|l>>4;let m=(l&15)<<2|u>>6,v=u&63;c||(v=64,o||(m=64)),r.push(n[f],n[p],n[m],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(o_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ME(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const p=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||p==null)throw new FE;const m=s<<2|l>>4;if(r.push(m),u!==64){const v=l<<4&240|u>>2;if(r.push(v),p!==64){const C=u<<6&192|p;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class FE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const UE=function(t){const e=o_(t);return a_.encodeByteArray(e,!0)},ja=function(t){return UE(t).replace(/\./g,"")},l_=function(t){try{return a_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $E(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BE=()=>$E().__FIREBASE_DEFAULTS__,jE=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},qE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&l_(t[1]);return e&&JSON.parse(e)},vl=()=>{try{return BE()||jE()||qE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},c_=t=>{var e,n;return(n=(e=vl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},u_=t=>{const e=c_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},h_=()=>{var t;return(t=vl())===null||t===void 0?void 0:t.config},f_=t=>{var e;return(e=vl())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[ja(JSON.stringify(n)),ja(JSON.stringify(o)),l].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function HE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(yt())}function WE(){var t;const e=(t=vl())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function KE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function GE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function QE(){const t=yt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function YE(){return!WE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function XE(){try{return typeof indexedDB=="object"}catch{return!1}}function JE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZE="FirebaseError";class An extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ZE,Object.setPrototypeOf(this,An.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,bo.prototype.create)}}class bo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?eT(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new An(i,l,r)}}function eT(t,e){return t.replace(tT,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const tT=/\{\$([^}]+)}/g;function nT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function eo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Yd(s)&&Yd(o)){if(!eo(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Yd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function As(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Rs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function rT(t,e){const n=new iT(t,e);return n.subscribe.bind(n)}class iT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");sT(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Ec),i.error===void 0&&(i.error=Ec),i.complete===void 0&&(i.complete=Ec);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function sT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ec(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(t){return t&&t._delegate?t._delegate:t}class Ar{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new zE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(lT(e))try{this.getOrInitializeService({instanceIdentifier:zr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=zr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=zr){return this.instances.has(e)}getOptions(e=zr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:aT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=zr){return this.component?this.component.multipleInstances?e:zr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function aT(t){return t===zr?void 0:t}function lT(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new oT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Re||(Re={}));const uT={debug:Re.DEBUG,verbose:Re.VERBOSE,info:Re.INFO,warn:Re.WARN,error:Re.ERROR,silent:Re.SILENT},hT=Re.INFO,fT={[Re.DEBUG]:"log",[Re.VERBOSE]:"log",[Re.INFO]:"info",[Re.WARN]:"warn",[Re.ERROR]:"error"},dT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=fT[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ah{constructor(e){this.name=e,this._logLevel=hT,this._logHandler=dT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?uT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Re.DEBUG,...e),this._logHandler(this,Re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Re.VERBOSE,...e),this._logHandler(this,Re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Re.INFO,...e),this._logHandler(this,Re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Re.WARN,...e),this._logHandler(this,Re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Re.ERROR,...e),this._logHandler(this,Re.ERROR,...e)}}const pT=(t,e)=>e.some(n=>t instanceof n);let Xd,Jd;function mT(){return Xd||(Xd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function gT(){return Jd||(Jd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const p_=new WeakMap,eu=new WeakMap,m_=new WeakMap,Tc=new WeakMap,lh=new WeakMap;function _T(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(vr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&p_.set(n,t)}).catch(()=>{}),lh.set(e,t),e}function yT(t){if(eu.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});eu.set(t,e)}let tu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return eu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||m_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return vr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function vT(t){tu=t(tu)}function wT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ic(this),e,...n);return m_.set(r,e.sort?e.sort():[e]),vr(r)}:gT().includes(t)?function(...e){return t.apply(Ic(this),e),vr(p_.get(this))}:function(...e){return vr(t.apply(Ic(this),e))}}function bT(t){return typeof t=="function"?wT(t):(t instanceof IDBTransaction&&yT(t),pT(t,mT())?new Proxy(t,tu):t)}function vr(t){if(t instanceof IDBRequest)return _T(t);if(Tc.has(t))return Tc.get(t);const e=bT(t);return e!==t&&(Tc.set(t,e),lh.set(e,t)),e}const Ic=t=>lh.get(t);function ET(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=vr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(vr(o.result),c.oldVersion,c.newVersion,vr(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const TT=["get","getKey","getAll","getAllKeys","count"],IT=["put","add","delete","clear"],Ac=new Map;function Zd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ac.get(e))return Ac.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=IT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||TT.includes(n)))return;const s=async function(o,...l){const c=this.transaction(o,i?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&c.done]))[0]};return Ac.set(e,s),s}vT(t=>({...t,get:(e,n,r)=>Zd(e,n)||t.get(e,n,r),has:(e,n)=>!!Zd(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(RT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function RT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const nu="@firebase/app",ep="0.10.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ti=new ah("@firebase/app"),PT="@firebase/app-compat",ST="@firebase/analytics-compat",CT="@firebase/analytics",kT="@firebase/app-check-compat",xT="@firebase/app-check",NT="@firebase/auth",OT="@firebase/auth-compat",DT="@firebase/database",LT="@firebase/database-compat",VT="@firebase/functions",MT="@firebase/functions-compat",FT="@firebase/installations",UT="@firebase/installations-compat",$T="@firebase/messaging",BT="@firebase/messaging-compat",jT="@firebase/performance",qT="@firebase/performance-compat",zT="@firebase/remote-config",HT="@firebase/remote-config-compat",WT="@firebase/storage",KT="@firebase/storage-compat",GT="@firebase/firestore",QT="@firebase/vertexai-preview",YT="@firebase/firestore-compat",XT="firebase",JT="10.12.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ru="[DEFAULT]",ZT={[nu]:"fire-core",[PT]:"fire-core-compat",[CT]:"fire-analytics",[ST]:"fire-analytics-compat",[xT]:"fire-app-check",[kT]:"fire-app-check-compat",[NT]:"fire-auth",[OT]:"fire-auth-compat",[DT]:"fire-rtdb",[LT]:"fire-rtdb-compat",[VT]:"fire-fn",[MT]:"fire-fn-compat",[FT]:"fire-iid",[UT]:"fire-iid-compat",[$T]:"fire-fcm",[BT]:"fire-fcm-compat",[jT]:"fire-perf",[qT]:"fire-perf-compat",[zT]:"fire-rc",[HT]:"fire-rc-compat",[WT]:"fire-gcs",[KT]:"fire-gcs-compat",[GT]:"fire-fst",[YT]:"fire-fst-compat",[QT]:"fire-vertex","fire-js":"fire-js",[XT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qa=new Map,eI=new Map,iu=new Map;function tp(t,e){try{t.container.addComponent(e)}catch(n){ti.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ni(t){const e=t.name;if(iu.has(e))return ti.debug(`There were multiple attempts to register component ${e}.`),!1;iu.set(e,t);for(const n of qa.values())tp(n,t);for(const n of eI.values())tp(n,t);return!0}function wl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function pn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},wr=new bo("app","Firebase",tI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ar("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw wr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fi=JT;function g_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ru,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw wr.create("bad-app-name",{appName:String(i)});if(n||(n=h_()),!n)throw wr.create("no-options");const s=qa.get(i);if(s){if(eo(n,s.options)&&eo(r,s.config))return s;throw wr.create("duplicate-app",{appName:i})}const o=new cT(i);for(const c of iu.values())o.addComponent(c);const l=new nI(n,r,o);return qa.set(i,l),l}function ch(t=ru){const e=qa.get(t);if(!e&&t===ru&&h_())return g_();if(!e)throw wr.create("no-app",{appName:t});return e}function yn(t,e,n){var r;let i=(r=ZT[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ti.warn(l.join(" "));return}ni(new Ar(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rI="firebase-heartbeat-database",iI=1,to="firebase-heartbeat-store";let Rc=null;function __(){return Rc||(Rc=ET(rI,iI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(to)}catch(n){console.warn(n)}}}}).catch(t=>{throw wr.create("idb-open",{originalErrorMessage:t.message})})),Rc}async function sI(t){try{const n=(await __()).transaction(to),r=await n.objectStore(to).get(y_(t));return await n.done,r}catch(e){if(e instanceof An)ti.warn(e.message);else{const n=wr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ti.warn(n.message)}}}async function np(t,e){try{const r=(await __()).transaction(to,"readwrite");await r.objectStore(to).put(e,y_(t)),await r.done}catch(n){if(n instanceof An)ti.warn(n.message);else{const r=wr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ti.warn(r.message)}}}function y_(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oI=1024,aI=30*24*60*60*1e3;class lI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new uI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=rp();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=aI}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=rp(),{heartbeatsToSend:r,unsentEntries:i}=cI(this._heartbeatsCache.heartbeats),s=ja(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function rp(){return new Date().toISOString().substring(0,10)}function cI(t,e=oI){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),ip(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ip(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class uI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return XE()?JE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await sI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return np(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return np(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ip(t){return ja(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hI(t){ni(new Ar("platform-logger",e=>new AT(e),"PRIVATE")),ni(new Ar("heartbeat",e=>new lI(e),"PRIVATE")),yn(nu,ep,t),yn(nu,ep,"esm2017"),yn("fire-js","")}hI("");var fI="firebase",dI="10.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yn(fI,dI,"app");var sp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Jr,v_;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,y){function w(){}w.prototype=y.prototype,T.D=y.prototype,T.prototype=new w,T.prototype.constructor=T,T.C=function(I,A,S){for(var b=Array(arguments.length-2),St=2;St<arguments.length;St++)b[St-2]=arguments[St];return y.prototype[A].apply(I,b)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,y,w){w||(w=0);var I=Array(16);if(typeof y=="string")for(var A=0;16>A;++A)I[A]=y.charCodeAt(w++)|y.charCodeAt(w++)<<8|y.charCodeAt(w++)<<16|y.charCodeAt(w++)<<24;else for(A=0;16>A;++A)I[A]=y[w++]|y[w++]<<8|y[w++]<<16|y[w++]<<24;y=T.g[0],w=T.g[1],A=T.g[2];var S=T.g[3],b=y+(S^w&(A^S))+I[0]+3614090360&4294967295;y=w+(b<<7&4294967295|b>>>25),b=S+(A^y&(w^A))+I[1]+3905402710&4294967295,S=y+(b<<12&4294967295|b>>>20),b=A+(w^S&(y^w))+I[2]+606105819&4294967295,A=S+(b<<17&4294967295|b>>>15),b=w+(y^A&(S^y))+I[3]+3250441966&4294967295,w=A+(b<<22&4294967295|b>>>10),b=y+(S^w&(A^S))+I[4]+4118548399&4294967295,y=w+(b<<7&4294967295|b>>>25),b=S+(A^y&(w^A))+I[5]+1200080426&4294967295,S=y+(b<<12&4294967295|b>>>20),b=A+(w^S&(y^w))+I[6]+2821735955&4294967295,A=S+(b<<17&4294967295|b>>>15),b=w+(y^A&(S^y))+I[7]+4249261313&4294967295,w=A+(b<<22&4294967295|b>>>10),b=y+(S^w&(A^S))+I[8]+1770035416&4294967295,y=w+(b<<7&4294967295|b>>>25),b=S+(A^y&(w^A))+I[9]+2336552879&4294967295,S=y+(b<<12&4294967295|b>>>20),b=A+(w^S&(y^w))+I[10]+4294925233&4294967295,A=S+(b<<17&4294967295|b>>>15),b=w+(y^A&(S^y))+I[11]+2304563134&4294967295,w=A+(b<<22&4294967295|b>>>10),b=y+(S^w&(A^S))+I[12]+1804603682&4294967295,y=w+(b<<7&4294967295|b>>>25),b=S+(A^y&(w^A))+I[13]+4254626195&4294967295,S=y+(b<<12&4294967295|b>>>20),b=A+(w^S&(y^w))+I[14]+2792965006&4294967295,A=S+(b<<17&4294967295|b>>>15),b=w+(y^A&(S^y))+I[15]+1236535329&4294967295,w=A+(b<<22&4294967295|b>>>10),b=y+(A^S&(w^A))+I[1]+4129170786&4294967295,y=w+(b<<5&4294967295|b>>>27),b=S+(w^A&(y^w))+I[6]+3225465664&4294967295,S=y+(b<<9&4294967295|b>>>23),b=A+(y^w&(S^y))+I[11]+643717713&4294967295,A=S+(b<<14&4294967295|b>>>18),b=w+(S^y&(A^S))+I[0]+3921069994&4294967295,w=A+(b<<20&4294967295|b>>>12),b=y+(A^S&(w^A))+I[5]+3593408605&4294967295,y=w+(b<<5&4294967295|b>>>27),b=S+(w^A&(y^w))+I[10]+38016083&4294967295,S=y+(b<<9&4294967295|b>>>23),b=A+(y^w&(S^y))+I[15]+3634488961&4294967295,A=S+(b<<14&4294967295|b>>>18),b=w+(S^y&(A^S))+I[4]+3889429448&4294967295,w=A+(b<<20&4294967295|b>>>12),b=y+(A^S&(w^A))+I[9]+568446438&4294967295,y=w+(b<<5&4294967295|b>>>27),b=S+(w^A&(y^w))+I[14]+3275163606&4294967295,S=y+(b<<9&4294967295|b>>>23),b=A+(y^w&(S^y))+I[3]+4107603335&4294967295,A=S+(b<<14&4294967295|b>>>18),b=w+(S^y&(A^S))+I[8]+1163531501&4294967295,w=A+(b<<20&4294967295|b>>>12),b=y+(A^S&(w^A))+I[13]+2850285829&4294967295,y=w+(b<<5&4294967295|b>>>27),b=S+(w^A&(y^w))+I[2]+4243563512&4294967295,S=y+(b<<9&4294967295|b>>>23),b=A+(y^w&(S^y))+I[7]+1735328473&4294967295,A=S+(b<<14&4294967295|b>>>18),b=w+(S^y&(A^S))+I[12]+2368359562&4294967295,w=A+(b<<20&4294967295|b>>>12),b=y+(w^A^S)+I[5]+4294588738&4294967295,y=w+(b<<4&4294967295|b>>>28),b=S+(y^w^A)+I[8]+2272392833&4294967295,S=y+(b<<11&4294967295|b>>>21),b=A+(S^y^w)+I[11]+1839030562&4294967295,A=S+(b<<16&4294967295|b>>>16),b=w+(A^S^y)+I[14]+4259657740&4294967295,w=A+(b<<23&4294967295|b>>>9),b=y+(w^A^S)+I[1]+2763975236&4294967295,y=w+(b<<4&4294967295|b>>>28),b=S+(y^w^A)+I[4]+1272893353&4294967295,S=y+(b<<11&4294967295|b>>>21),b=A+(S^y^w)+I[7]+4139469664&4294967295,A=S+(b<<16&4294967295|b>>>16),b=w+(A^S^y)+I[10]+3200236656&4294967295,w=A+(b<<23&4294967295|b>>>9),b=y+(w^A^S)+I[13]+681279174&4294967295,y=w+(b<<4&4294967295|b>>>28),b=S+(y^w^A)+I[0]+3936430074&4294967295,S=y+(b<<11&4294967295|b>>>21),b=A+(S^y^w)+I[3]+3572445317&4294967295,A=S+(b<<16&4294967295|b>>>16),b=w+(A^S^y)+I[6]+76029189&4294967295,w=A+(b<<23&4294967295|b>>>9),b=y+(w^A^S)+I[9]+3654602809&4294967295,y=w+(b<<4&4294967295|b>>>28),b=S+(y^w^A)+I[12]+3873151461&4294967295,S=y+(b<<11&4294967295|b>>>21),b=A+(S^y^w)+I[15]+530742520&4294967295,A=S+(b<<16&4294967295|b>>>16),b=w+(A^S^y)+I[2]+3299628645&4294967295,w=A+(b<<23&4294967295|b>>>9),b=y+(A^(w|~S))+I[0]+4096336452&4294967295,y=w+(b<<6&4294967295|b>>>26),b=S+(w^(y|~A))+I[7]+1126891415&4294967295,S=y+(b<<10&4294967295|b>>>22),b=A+(y^(S|~w))+I[14]+2878612391&4294967295,A=S+(b<<15&4294967295|b>>>17),b=w+(S^(A|~y))+I[5]+4237533241&4294967295,w=A+(b<<21&4294967295|b>>>11),b=y+(A^(w|~S))+I[12]+1700485571&4294967295,y=w+(b<<6&4294967295|b>>>26),b=S+(w^(y|~A))+I[3]+2399980690&4294967295,S=y+(b<<10&4294967295|b>>>22),b=A+(y^(S|~w))+I[10]+4293915773&4294967295,A=S+(b<<15&4294967295|b>>>17),b=w+(S^(A|~y))+I[1]+2240044497&4294967295,w=A+(b<<21&4294967295|b>>>11),b=y+(A^(w|~S))+I[8]+1873313359&4294967295,y=w+(b<<6&4294967295|b>>>26),b=S+(w^(y|~A))+I[15]+4264355552&4294967295,S=y+(b<<10&4294967295|b>>>22),b=A+(y^(S|~w))+I[6]+2734768916&4294967295,A=S+(b<<15&4294967295|b>>>17),b=w+(S^(A|~y))+I[13]+1309151649&4294967295,w=A+(b<<21&4294967295|b>>>11),b=y+(A^(w|~S))+I[4]+4149444226&4294967295,y=w+(b<<6&4294967295|b>>>26),b=S+(w^(y|~A))+I[11]+3174756917&4294967295,S=y+(b<<10&4294967295|b>>>22),b=A+(y^(S|~w))+I[2]+718787259&4294967295,A=S+(b<<15&4294967295|b>>>17),b=w+(S^(A|~y))+I[9]+3951481745&4294967295,T.g[0]=T.g[0]+y&4294967295,T.g[1]=T.g[1]+(A+(b<<21&4294967295|b>>>11))&4294967295,T.g[2]=T.g[2]+A&4294967295,T.g[3]=T.g[3]+S&4294967295}r.prototype.u=function(T,y){y===void 0&&(y=T.length);for(var w=y-this.blockSize,I=this.B,A=this.h,S=0;S<y;){if(A==0)for(;S<=w;)i(this,T,S),S+=this.blockSize;if(typeof T=="string"){for(;S<y;)if(I[A++]=T.charCodeAt(S++),A==this.blockSize){i(this,I),A=0;break}}else for(;S<y;)if(I[A++]=T[S++],A==this.blockSize){i(this,I),A=0;break}}this.h=A,this.o+=y},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var y=1;y<T.length-8;++y)T[y]=0;var w=8*this.o;for(y=T.length-8;y<T.length;++y)T[y]=w&255,w/=256;for(this.u(T),T=Array(16),y=w=0;4>y;++y)for(var I=0;32>I;I+=8)T[w++]=this.g[y]>>>I&255;return T};function s(T,y){var w=l;return Object.prototype.hasOwnProperty.call(w,T)?w[T]:w[T]=y(T)}function o(T,y){this.h=y;for(var w=[],I=!0,A=T.length-1;0<=A;A--){var S=T[A]|0;I&&S==y||(w[A]=S,I=!1)}this.g=w}var l={};function c(T){return-128<=T&&128>T?s(T,function(y){return new o([y|0],0>y?-1:0)}):new o([T|0],0>T?-1:0)}function u(T){if(isNaN(T)||!isFinite(T))return p;if(0>T)return N(u(-T));for(var y=[],w=1,I=0;T>=w;I++)y[I]=T/w|0,w*=4294967296;return new o(y,0)}function f(T,y){if(T.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(T.charAt(0)=="-")return N(f(T.substring(1),y));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=u(Math.pow(y,8)),I=p,A=0;A<T.length;A+=8){var S=Math.min(8,T.length-A),b=parseInt(T.substring(A,A+S),y);8>S?(S=u(Math.pow(y,S)),I=I.j(S).add(u(b))):(I=I.j(w),I=I.add(u(b)))}return I}var p=c(0),m=c(1),v=c(16777216);t=o.prototype,t.m=function(){if(L(this))return-N(this).m();for(var T=0,y=1,w=0;w<this.g.length;w++){var I=this.i(w);T+=(0<=I?I:4294967296+I)*y,y*=4294967296}return T},t.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(C(this))return"0";if(L(this))return"-"+N(this).toString(T);for(var y=u(Math.pow(T,6)),w=this,I="";;){var A=U(w,y).g;w=x(w,A.j(y));var S=((0<w.g.length?w.g[0]:w.h)>>>0).toString(T);if(w=A,C(w))return S+I;for(;6>S.length;)S="0"+S;I=S+I}},t.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function C(T){if(T.h!=0)return!1;for(var y=0;y<T.g.length;y++)if(T.g[y]!=0)return!1;return!0}function L(T){return T.h==-1}t.l=function(T){return T=x(this,T),L(T)?-1:C(T)?0:1};function N(T){for(var y=T.g.length,w=[],I=0;I<y;I++)w[I]=~T.g[I];return new o(w,~T.h).add(m)}t.abs=function(){return L(this)?N(this):this},t.add=function(T){for(var y=Math.max(this.g.length,T.g.length),w=[],I=0,A=0;A<=y;A++){var S=I+(this.i(A)&65535)+(T.i(A)&65535),b=(S>>>16)+(this.i(A)>>>16)+(T.i(A)>>>16);I=b>>>16,S&=65535,b&=65535,w[A]=b<<16|S}return new o(w,w[w.length-1]&-2147483648?-1:0)};function x(T,y){return T.add(N(y))}t.j=function(T){if(C(this)||C(T))return p;if(L(this))return L(T)?N(this).j(N(T)):N(N(this).j(T));if(L(T))return N(this.j(N(T)));if(0>this.l(v)&&0>T.l(v))return u(this.m()*T.m());for(var y=this.g.length+T.g.length,w=[],I=0;I<2*y;I++)w[I]=0;for(I=0;I<this.g.length;I++)for(var A=0;A<T.g.length;A++){var S=this.i(I)>>>16,b=this.i(I)&65535,St=T.i(A)>>>16,Qt=T.i(A)&65535;w[2*I+2*A]+=b*Qt,k(w,2*I+2*A),w[2*I+2*A+1]+=S*Qt,k(w,2*I+2*A+1),w[2*I+2*A+1]+=b*St,k(w,2*I+2*A+1),w[2*I+2*A+2]+=S*St,k(w,2*I+2*A+2)}for(I=0;I<y;I++)w[I]=w[2*I+1]<<16|w[2*I];for(I=y;I<2*y;I++)w[I]=0;return new o(w,0)};function k(T,y){for(;(T[y]&65535)!=T[y];)T[y+1]+=T[y]>>>16,T[y]&=65535,y++}function V(T,y){this.g=T,this.h=y}function U(T,y){if(C(y))throw Error("division by zero");if(C(T))return new V(p,p);if(L(T))return y=U(N(T),y),new V(N(y.g),N(y.h));if(L(y))return y=U(T,N(y)),new V(N(y.g),y.h);if(30<T.g.length){if(L(T)||L(y))throw Error("slowDivide_ only works with positive integers.");for(var w=m,I=y;0>=I.l(T);)w=ne(w),I=ne(I);var A=K(w,1),S=K(I,1);for(I=K(I,2),w=K(w,2);!C(I);){var b=S.add(I);0>=b.l(T)&&(A=A.add(w),S=b),I=K(I,1),w=K(w,1)}return y=x(T,A.j(y)),new V(A,y)}for(A=p;0<=T.l(y);){for(w=Math.max(1,Math.floor(T.m()/y.m())),I=Math.ceil(Math.log(w)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),S=u(w),b=S.j(y);L(b)||0<b.l(T);)w-=I,S=u(w),b=S.j(y);C(S)&&(S=m),A=A.add(S),T=x(T,b)}return new V(A,T)}t.A=function(T){return U(this,T).h},t.and=function(T){for(var y=Math.max(this.g.length,T.g.length),w=[],I=0;I<y;I++)w[I]=this.i(I)&T.i(I);return new o(w,this.h&T.h)},t.or=function(T){for(var y=Math.max(this.g.length,T.g.length),w=[],I=0;I<y;I++)w[I]=this.i(I)|T.i(I);return new o(w,this.h|T.h)},t.xor=function(T){for(var y=Math.max(this.g.length,T.g.length),w=[],I=0;I<y;I++)w[I]=this.i(I)^T.i(I);return new o(w,this.h^T.h)};function ne(T){for(var y=T.g.length+1,w=[],I=0;I<y;I++)w[I]=T.i(I)<<1|T.i(I-1)>>>31;return new o(w,T.h)}function K(T,y){var w=y>>5;y%=32;for(var I=T.g.length-w,A=[],S=0;S<I;S++)A[S]=0<y?T.i(S+w)>>>y|T.i(S+w+1)<<32-y:T.i(S+w);return new o(A,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,v_=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,Jr=o}).apply(typeof sp<"u"?sp:typeof self<"u"?self:typeof window<"u"?window:{});var ia=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var w_,b_,Ps,E_,Aa,su,T_,I_,A_;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,d){return a==Array.prototype||a==Object.prototype||(a[h]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ia=="object"&&ia];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,h){if(h)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var P=a[g];if(!(P in d))break e;d=d[P]}a=a[a.length-1],g=d[a],h=h(g),h!=g&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}function s(a,h){a instanceof String&&(a+="");var d=0,g=!1,P={next:function(){if(!g&&d<a.length){var D=d++;return{value:h(D,a[D]),done:!1}}return g=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}i("Array.prototype.values",function(a){return a||function(){return s(this,function(h,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function f(a,h,d){return a.call.apply(a.bind,arguments)}function p(a,h,d){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,g),a.apply(h,P)}}return function(){return a.apply(h,arguments)}}function m(a,h,d){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,m.apply(null,arguments)}function v(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function C(a,h){function d(){}d.prototype=h.prototype,a.aa=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(g,P,D){for(var G=Array(arguments.length-2),Me=2;Me<arguments.length;Me++)G[Me-2]=arguments[Me];return h.prototype[P].apply(g,G)}}function L(a){const h=a.length;if(0<h){const d=Array(h);for(let g=0;g<h;g++)d[g]=a[g];return d}return[]}function N(a,h){for(let d=1;d<arguments.length;d++){const g=arguments[d];if(c(g)){const P=a.length||0,D=g.length||0;a.length=P+D;for(let G=0;G<D;G++)a[P+G]=g[G]}else a.push(g)}}class x{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function k(a){return/^[\s\xa0]*$/.test(a)}function V(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function U(a){return U[" "](a),a}U[" "]=function(){};var ne=V().indexOf("Gecko")!=-1&&!(V().toLowerCase().indexOf("webkit")!=-1&&V().indexOf("Edge")==-1)&&!(V().indexOf("Trident")!=-1||V().indexOf("MSIE")!=-1)&&V().indexOf("Edge")==-1;function K(a,h,d){for(const g in a)h.call(d,a[g],g,a)}function T(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function y(a){const h={};for(const d in a)h[d]=a[d];return h}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(a,h){let d,g;for(let P=1;P<arguments.length;P++){g=arguments[P];for(d in g)a[d]=g[d];for(let D=0;D<w.length;D++)d=w[D],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function A(a){var h=1;a=a.split(":");const d=[];for(;0<h&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function S(a){l.setTimeout(()=>{throw a},0)}function b(){var a=qt;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class St{constructor(){this.h=this.g=null}add(h,d){const g=Qt.get();g.set(h,d),this.h?this.h.next=g:this.g=g,this.h=g}}var Qt=new x(()=>new nt,a=>a.reset());class nt{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Pe,Ee=!1,qt=new St,Zt=()=>{const a=l.Promise.resolve(void 0);Pe=()=>{a.then(Yt)}};var Yt=()=>{for(var a;a=b();){try{a.h.call(a.g)}catch(d){S(d)}var h=Qt;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}Ee=!1};function Ke(){this.s=this.s,this.C=this.C}Ke.prototype.s=!1,Ke.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ke.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ge(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Ge.prototype.h=function(){this.defaultPrevented=!0};var Xn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,h),l.removeEventListener("test",d,h)}catch{}return a}();function cn(a,h){if(Ge.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(ne){e:{try{U(h.nodeName);var P=!0;break e}catch{}P=!1}P||(h=null)}}else d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:ct[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&cn.aa.h.call(this)}}C(cn,Ge);var ct={2:"touch",3:"pen",4:"mouse"};cn.prototype.h=function(){cn.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var F="closure_listenable_"+(1e6*Math.random()|0),X=0;function Y(a,h,d,g,P){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!g,this.ha=P,this.key=++X,this.da=this.fa=!1}function re(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ie(a){this.src=a,this.g={},this.h=0}Ie.prototype.add=function(a,h,d,g,P){var D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);var G=_(a,h,g,P);return-1<G?(h=a[G],d||(h.fa=!1)):(h=new Y(h,this.src,D,!!g,P),h.fa=d,a.push(h)),h};function Le(a,h){var d=h.type;if(d in a.g){var g=a.g[d],P=Array.prototype.indexOf.call(g,h,void 0),D;(D=0<=P)&&Array.prototype.splice.call(g,P,1),D&&(re(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function _(a,h,d,g){for(var P=0;P<a.length;++P){var D=a[P];if(!D.da&&D.listener==h&&D.capture==!!d&&D.ha==g)return P}return-1}var E="closure_lm_"+(1e6*Math.random()|0),O={};function B(a,h,d,g,P){if(g&&g.once)return Q(a,h,d,g,P);if(Array.isArray(h)){for(var D=0;D<h.length;D++)B(a,h[D],d,g,P);return null}return d=de(d),a&&a[F]?a.K(h,d,u(g)?!!g.capture:!!g,P):M(a,h,d,!1,g,P)}function M(a,h,d,g,P,D){if(!h)throw Error("Invalid event type");var G=u(P)?!!P.capture:!!P,Me=le(a);if(Me||(a[E]=Me=new Ie(a)),d=Me.add(h,d,g,G,D),d.proxy)return d;if(g=H(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)Xn||(P=G),P===void 0&&(P=!1),a.addEventListener(h.toString(),g,P);else if(a.attachEvent)a.attachEvent(j(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function H(){function a(d){return h.call(a.src,a.listener,d)}const h=J;return a}function Q(a,h,d,g,P){if(Array.isArray(h)){for(var D=0;D<h.length;D++)Q(a,h[D],d,g,P);return null}return d=de(d),a&&a[F]?a.L(h,d,u(g)?!!g.capture:!!g,P):M(a,h,d,!0,g,P)}function z(a,h,d,g,P){if(Array.isArray(h))for(var D=0;D<h.length;D++)z(a,h[D],d,g,P);else g=u(g)?!!g.capture:!!g,d=de(d),a&&a[F]?(a=a.i,h=String(h).toString(),h in a.g&&(D=a.g[h],d=_(D,d,g,P),-1<d&&(re(D[d]),Array.prototype.splice.call(D,d,1),D.length==0&&(delete a.g[h],a.h--)))):a&&(a=le(a))&&(h=a.g[h.toString()],a=-1,h&&(a=_(h,d,g,P)),(d=-1<a?h[a]:null)&&W(d))}function W(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[F])Le(h.i,a);else{var d=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(d,g,a.capture):h.detachEvent?h.detachEvent(j(d),g):h.addListener&&h.removeListener&&h.removeListener(g),(d=le(h))?(Le(d,a),d.h==0&&(d.src=null,h[E]=null)):re(a)}}}function j(a){return a in O?O[a]:O[a]="on"+a}function J(a,h){if(a.da)a=!0;else{h=new cn(h,this);var d=a.listener,g=a.ha||a.src;a.fa&&W(a),a=d.call(g,h)}return a}function le(a){return a=a[E],a instanceof Ie?a:null}var ae="__closure_events_fn_"+(1e9*Math.random()>>>0);function de(a){return typeof a=="function"?a:(a[ae]||(a[ae]=function(h){return a.handleEvent(h)}),a[ae])}function ue(){Ke.call(this),this.i=new Ie(this),this.M=this,this.F=null}C(ue,Ke),ue.prototype[F]=!0,ue.prototype.removeEventListener=function(a,h,d,g){z(this,a,h,d,g)};function ye(a,h){var d,g=a.F;if(g)for(d=[];g;g=g.F)d.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new Ge(h,a);else if(h instanceof Ge)h.target=h.target||a;else{var P=h;h=new Ge(g,a),I(h,P)}if(P=!0,d)for(var D=d.length-1;0<=D;D--){var G=h.g=d[D];P=Ae(G,g,!0,h)&&P}if(G=h.g=a,P=Ae(G,g,!0,h)&&P,P=Ae(G,g,!1,h)&&P,d)for(D=0;D<d.length;D++)G=h.g=d[D],P=Ae(G,g,!1,h)&&P}ue.prototype.N=function(){if(ue.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var d=a.g[h],g=0;g<d.length;g++)re(d[g]);delete a.g[h],a.h--}}this.F=null},ue.prototype.K=function(a,h,d,g){return this.i.add(String(a),h,!1,d,g)},ue.prototype.L=function(a,h,d,g){return this.i.add(String(a),h,!0,d,g)};function Ae(a,h,d,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var P=!0,D=0;D<h.length;++D){var G=h[D];if(G&&!G.da&&G.capture==d){var Me=G.listener,dt=G.ha||G.src;G.fa&&Le(a.i,G),P=Me.call(dt,g)!==!1&&P}}return P&&!g.defaultPrevented}function tt(a,h,d){if(typeof a=="function")d&&(a=m(a,d));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(a,h||0)}function Ot(a){a.g=tt(()=>{a.g=null,a.i&&(a.i=!1,Ot(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Jn extends Ke{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Ot(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Zn(a){Ke.call(this),this.h=a,this.g={}}C(Zn,Ke);var er=[];function os(a){K(a.g,function(h,d){this.g.hasOwnProperty(d)&&W(h)},a),a.g={}}Zn.prototype.N=function(){Zn.aa.N.call(this),os(this)},Zn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ft=l.JSON.stringify,Xt=l.JSON.parse,Mo=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Zl(){}Zl.prototype.h=null;function Af(a){return a.h||(a.h=a.i())}function Rf(){}var as={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ec(){Ge.call(this,"d")}C(ec,Ge);function tc(){Ge.call(this,"c")}C(tc,Ge);var Fr={},Pf=null;function Fo(){return Pf=Pf||new ue}Fr.La="serverreachability";function Sf(a){Ge.call(this,Fr.La,a)}C(Sf,Ge);function ls(a){const h=Fo();ye(h,new Sf(h))}Fr.STAT_EVENT="statevent";function Cf(a,h){Ge.call(this,Fr.STAT_EVENT,a),this.stat=h}C(Cf,Ge);function Ct(a){const h=Fo();ye(h,new Cf(h,a))}Fr.Ma="timingevent";function kf(a,h){Ge.call(this,Fr.Ma,a),this.size=h}C(kf,Ge);function cs(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},h)}function us(){this.g=!0}us.prototype.xa=function(){this.g=!1};function Gw(a,h,d,g,P,D){a.info(function(){if(a.g)if(D)for(var G="",Me=D.split("&"),dt=0;dt<Me.length;dt++){var ke=Me[dt].split("=");if(1<ke.length){var vt=ke[0];ke=ke[1];var wt=vt.split("_");G=2<=wt.length&&wt[1]=="type"?G+(vt+"="+ke+"&"):G+(vt+"=redacted&")}}else G=null;else G=D;return"XMLHTTP REQ ("+g+") [attempt "+P+"]: "+h+`
`+d+`
`+G})}function Qw(a,h,d,g,P,D,G){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+P+"]: "+h+`
`+d+`
`+D+" "+G})}function _i(a,h,d,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+Xw(a,d)+(g?" "+g:"")})}function Yw(a,h){a.info(function(){return"TIMEOUT: "+h})}us.prototype.info=function(){};function Xw(a,h){if(!a.g)return h;if(!h)return null;try{var d=JSON.parse(h);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var g=d[a];if(!(2>g.length)){var P=g[1];if(Array.isArray(P)&&!(1>P.length)){var D=P[0];if(D!="noop"&&D!="stop"&&D!="close")for(var G=1;G<P.length;G++)P[G]=""}}}}return ft(d)}catch{return h}}var Uo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},xf={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},nc;function $o(){}C($o,Zl),$o.prototype.g=function(){return new XMLHttpRequest},$o.prototype.i=function(){return{}},nc=new $o;function tr(a,h,d,g){this.j=a,this.i=h,this.l=d,this.R=g||1,this.U=new Zn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Nf}function Nf(){this.i=null,this.g="",this.h=!1}var Of={},rc={};function ic(a,h,d){a.L=1,a.v=zo(Rn(h)),a.m=d,a.P=!0,Df(a,null)}function Df(a,h){a.F=Date.now(),Bo(a),a.A=Rn(a.v);var d=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),Gf(d.i,"t",g),a.C=0,d=a.j.J,a.h=new Nf,a.g=fd(a.j,d?h:null,!a.m),0<a.O&&(a.M=new Jn(m(a.Y,a,a.g),a.O)),h=a.U,d=a.g,g=a.ca;var P="readystatechange";Array.isArray(P)||(P&&(er[0]=P.toString()),P=er);for(var D=0;D<P.length;D++){var G=B(d,P[D],g||h.handleEvent,!1,h.h||h);if(!G)break;h.g[G.key]=G}h=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),ls(),Gw(a.i,a.u,a.A,a.l,a.R,a.m)}tr.prototype.ca=function(a){a=a.target;const h=this.M;h&&Pn(a)==3?h.j():this.Y(a)},tr.prototype.Y=function(a){try{if(a==this.g)e:{const wt=Pn(this.g);var h=this.g.Ba();const wi=this.g.Z();if(!(3>wt)&&(wt!=3||this.g&&(this.h.h||this.g.oa()||td(this.g)))){this.J||wt!=4||h==7||(h==8||0>=wi?ls(3):ls(2)),sc(this);var d=this.g.Z();this.X=d;t:if(Lf(this)){var g=td(this.g);a="";var P=g.length,D=Pn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ur(this),hs(this);var G="";break t}this.h.i=new l.TextDecoder}for(h=0;h<P;h++)this.h.h=!0,a+=this.h.i.decode(g[h],{stream:!(D&&h==P-1)});g.length=0,this.h.g+=a,this.C=0,G=this.h.g}else G=this.g.oa();if(this.o=d==200,Qw(this.i,this.u,this.A,this.l,this.R,wt,d),this.o){if(this.T&&!this.K){t:{if(this.g){var Me,dt=this.g;if((Me=dt.g?dt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!k(Me)){var ke=Me;break t}}ke=null}if(d=ke)_i(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,oc(this,d);else{this.o=!1,this.s=3,Ct(12),Ur(this),hs(this);break e}}if(this.P){d=!0;let en;for(;!this.J&&this.C<G.length;)if(en=Jw(this,G),en==rc){wt==4&&(this.s=4,Ct(14),d=!1),_i(this.i,this.l,null,"[Incomplete Response]");break}else if(en==Of){this.s=4,Ct(15),_i(this.i,this.l,G,"[Invalid Chunk]"),d=!1;break}else _i(this.i,this.l,en,null),oc(this,en);if(Lf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),wt!=4||G.length!=0||this.h.h||(this.s=1,Ct(16),d=!1),this.o=this.o&&d,!d)_i(this.i,this.l,G,"[Invalid Chunked Response]"),Ur(this),hs(this);else if(0<G.length&&!this.W){this.W=!0;var vt=this.j;vt.g==this&&vt.ba&&!vt.M&&(vt.j.info("Great, no buffering proxy detected. Bytes received: "+G.length),fc(vt),vt.M=!0,Ct(11))}}else _i(this.i,this.l,G,null),oc(this,G);wt==4&&Ur(this),this.o&&!this.J&&(wt==4?ld(this.j,this):(this.o=!1,Bo(this)))}else mb(this.g),d==400&&0<G.indexOf("Unknown SID")?(this.s=3,Ct(12)):(this.s=0,Ct(13)),Ur(this),hs(this)}}}catch{}finally{}};function Lf(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Jw(a,h){var d=a.C,g=h.indexOf(`
`,d);return g==-1?rc:(d=Number(h.substring(d,g)),isNaN(d)?Of:(g+=1,g+d>h.length?rc:(h=h.slice(g,g+d),a.C=g+d,h)))}tr.prototype.cancel=function(){this.J=!0,Ur(this)};function Bo(a){a.S=Date.now()+a.I,Vf(a,a.I)}function Vf(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=cs(m(a.ba,a),h)}function sc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}tr.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Yw(this.i,this.A),this.L!=2&&(ls(),Ct(17)),Ur(this),this.s=2,hs(this)):Vf(this,this.S-a)};function hs(a){a.j.G==0||a.J||ld(a.j,a)}function Ur(a){sc(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,os(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function oc(a,h){try{var d=a.j;if(d.G!=0&&(d.g==a||ac(d.h,a))){if(!a.K&&ac(d.h,a)&&d.G==3){try{var g=d.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var P=g;if(P[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Qo(d),Ko(d);else break e;hc(d),Ct(18)}}else d.za=P[1],0<d.za-d.T&&37500>P[2]&&d.F&&d.v==0&&!d.C&&(d.C=cs(m(d.Za,d),6e3));if(1>=Uf(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Br(d,11)}else if((a.K||d.g==a)&&Qo(d),!k(h))for(P=d.Da.g.parse(h),h=0;h<P.length;h++){let ke=P[h];if(d.T=ke[0],ke=ke[1],d.G==2)if(ke[0]=="c"){d.K=ke[1],d.ia=ke[2];const vt=ke[3];vt!=null&&(d.la=vt,d.j.info("VER="+d.la));const wt=ke[4];wt!=null&&(d.Aa=wt,d.j.info("SVER="+d.Aa));const wi=ke[5];wi!=null&&typeof wi=="number"&&0<wi&&(g=1.5*wi,d.L=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const en=a.g;if(en){const Xo=en.g?en.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Xo){var D=g.h;D.g||Xo.indexOf("spdy")==-1&&Xo.indexOf("quic")==-1&&Xo.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(lc(D,D.h),D.h=null))}if(g.D){const dc=en.g?en.g.getResponseHeader("X-HTTP-Session-Id"):null;dc&&(g.ya=dc,Ue(g.I,g.D,dc))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),g=d;var G=a;if(g.qa=hd(g,g.J?g.ia:null,g.W),G.K){$f(g.h,G);var Me=G,dt=g.L;dt&&(Me.I=dt),Me.B&&(sc(Me),Bo(Me)),g.g=G}else od(g);0<d.i.length&&Go(d)}else ke[0]!="stop"&&ke[0]!="close"||Br(d,7);else d.G==3&&(ke[0]=="stop"||ke[0]=="close"?ke[0]=="stop"?Br(d,7):uc(d):ke[0]!="noop"&&d.l&&d.l.ta(ke),d.v=0)}}ls(4)}catch{}}var Zw=class{constructor(a,h){this.g=a,this.map=h}};function Mf(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ff(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Uf(a){return a.h?1:a.g?a.g.size:0}function ac(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function lc(a,h){a.g?a.g.add(h):a.h=h}function $f(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Mf.prototype.cancel=function(){if(this.i=Bf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Bf(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.D);return h}return L(a.i)}function eb(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var h=[],d=a.length,g=0;g<d;g++)h.push(a[g]);return h}h=[],d=0;for(g in a)h[d++]=a[g];return h}function tb(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var h=[];a=a.length;for(var d=0;d<a;d++)h.push(d);return h}h=[],d=0;for(const g in a)h[d++]=g;return h}}}function jf(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var d=tb(a),g=eb(a),P=g.length,D=0;D<P;D++)h.call(void 0,g[D],d&&d[D],a)}var qf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function nb(a,h){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var g=a[d].indexOf("="),P=null;if(0<=g){var D=a[d].substring(0,g);P=a[d].substring(g+1)}else D=a[d];h(D,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function $r(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof $r){this.h=a.h,jo(this,a.j),this.o=a.o,this.g=a.g,qo(this,a.s),this.l=a.l;var h=a.i,d=new ps;d.i=h.i,h.g&&(d.g=new Map(h.g),d.h=h.h),zf(this,d),this.m=a.m}else a&&(h=String(a).match(qf))?(this.h=!1,jo(this,h[1]||"",!0),this.o=fs(h[2]||""),this.g=fs(h[3]||"",!0),qo(this,h[4]),this.l=fs(h[5]||"",!0),zf(this,h[6]||"",!0),this.m=fs(h[7]||"")):(this.h=!1,this.i=new ps(null,this.h))}$r.prototype.toString=function(){var a=[],h=this.j;h&&a.push(ds(h,Hf,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(ds(h,Hf,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(ds(d,d.charAt(0)=="/"?sb:ib,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",ds(d,ab)),a.join("")};function Rn(a){return new $r(a)}function jo(a,h,d){a.j=d?fs(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function qo(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function zf(a,h,d){h instanceof ps?(a.i=h,lb(a.i,a.h)):(d||(h=ds(h,ob)),a.i=new ps(h,a.h))}function Ue(a,h,d){a.i.set(h,d)}function zo(a){return Ue(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function fs(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ds(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,rb),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function rb(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Hf=/[#\/\?@]/g,ib=/[#\?:]/g,sb=/[#\?]/g,ob=/[#\?@]/g,ab=/#/g;function ps(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function nr(a){a.g||(a.g=new Map,a.h=0,a.i&&nb(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=ps.prototype,t.add=function(a,h){nr(this),this.i=null,a=yi(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function Wf(a,h){nr(a),h=yi(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function Kf(a,h){return nr(a),h=yi(a,h),a.g.has(h)}t.forEach=function(a,h){nr(this),this.g.forEach(function(d,g){d.forEach(function(P){a.call(h,P,g,this)},this)},this)},t.na=function(){nr(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),d=[];for(let g=0;g<h.length;g++){const P=a[g];for(let D=0;D<P.length;D++)d.push(h[g])}return d},t.V=function(a){nr(this);let h=[];if(typeof a=="string")Kf(this,a)&&(h=h.concat(this.g.get(yi(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)h=h.concat(a[d])}return h},t.set=function(a,h){return nr(this),this.i=null,a=yi(this,a),Kf(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Gf(a,h,d){Wf(a,h),0<d.length&&(a.i=null,a.g.set(yi(a,h),L(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var d=0;d<h.length;d++){var g=h[d];const D=encodeURIComponent(String(g)),G=this.V(g);for(g=0;g<G.length;g++){var P=D;G[g]!==""&&(P+="="+encodeURIComponent(String(G[g]))),a.push(P)}}return this.i=a.join("&")};function yi(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function lb(a,h){h&&!a.j&&(nr(a),a.i=null,a.g.forEach(function(d,g){var P=g.toLowerCase();g!=P&&(Wf(this,g),Gf(this,P,d))},a)),a.j=h}function cb(a,h){const d=new us;if(l.Image){const g=new Image;g.onload=v(rr,d,"TestLoadImage: loaded",!0,h,g),g.onerror=v(rr,d,"TestLoadImage: error",!1,h,g),g.onabort=v(rr,d,"TestLoadImage: abort",!1,h,g),g.ontimeout=v(rr,d,"TestLoadImage: timeout",!1,h,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function ub(a,h){const d=new us,g=new AbortController,P=setTimeout(()=>{g.abort(),rr(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(D=>{clearTimeout(P),D.ok?rr(d,"TestPingServer: ok",!0,h):rr(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(P),rr(d,"TestPingServer: error",!1,h)})}function rr(a,h,d,g,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),g(d)}catch{}}function hb(){this.g=new Mo}function fb(a,h,d){const g=d||"";try{jf(a,function(P,D){let G=P;u(P)&&(G=ft(P)),h.push(g+D+"="+encodeURIComponent(G))})}catch(P){throw h.push(g+"type="+encodeURIComponent("_badmap")),P}}function ms(a){this.l=a.Ub||null,this.j=a.eb||!1}C(ms,Zl),ms.prototype.g=function(){return new Ho(this.l,this.j)},ms.prototype.i=function(a){return function(){return a}}({});function Ho(a,h){ue.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(Ho,ue),t=Ho.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,_s(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,gs(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,_s(this)),this.g&&(this.readyState=3,_s(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Qf(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Qf(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?gs(this):_s(this),this.readyState==3&&Qf(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,gs(this))},t.Qa=function(a){this.g&&(this.response=a,gs(this))},t.ga=function(){this.g&&gs(this)};function gs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,_s(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function _s(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ho.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Yf(a){let h="";return K(a,function(d,g){h+=g,h+=":",h+=d,h+=`\r
`}),h}function cc(a,h,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=Yf(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):Ue(a,h,d))}function Xe(a){ue.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(Xe,ue);var db=/^https?$/i,pb=["POST","PUT"];t=Xe.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():nc.g(),this.v=this.o?Af(this.o):Af(nc),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(D){Xf(this,D);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var P in g)d.set(P,g[P]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const D of g.keys())d.set(D,g.get(D));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(D=>D.toLowerCase()=="content-type"),P=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(pb,h,void 0))||g||P||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,G]of d)this.g.setRequestHeader(D,G);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ed(this),this.u=!0,this.g.send(a),this.u=!1}catch(D){Xf(this,D)}};function Xf(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Jf(a),Wo(a)}function Jf(a){a.A||(a.A=!0,ye(a,"complete"),ye(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ye(this,"complete"),ye(this,"abort"),Wo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Wo(this,!0)),Xe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Zf(this):this.bb())},t.bb=function(){Zf(this)};function Zf(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Pn(a)!=4||a.Z()!=2)){if(a.u&&Pn(a)==4)tt(a.Ea,0,a);else if(ye(a,"readystatechange"),Pn(a)==4){a.h=!1;try{const G=a.Z();e:switch(G){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var g;if(g=G===0){var P=String(a.D).match(qf)[1]||null;!P&&l.self&&l.self.location&&(P=l.self.location.protocol.slice(0,-1)),g=!db.test(P?P.toLowerCase():"")}d=g}if(d)ye(a,"complete"),ye(a,"success");else{a.m=6;try{var D=2<Pn(a)?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.Z()+"]",Jf(a)}}finally{Wo(a)}}}}function Wo(a,h){if(a.g){ed(a);const d=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||ye(a,"ready");try{d.onreadystatechange=g}catch{}}}function ed(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Pn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Pn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Xt(h)}};function td(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function mb(a){const h={};a=(a.g&&2<=Pn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(k(a[g]))continue;var d=A(a[g]);const P=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const D=h[P]||[];h[P]=D,D.push(d)}T(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ys(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function nd(a){this.Aa=0,this.i=[],this.j=new us,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ys("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ys("baseRetryDelayMs",5e3,a),this.cb=ys("retryDelaySeedMs",1e4,a),this.Wa=ys("forwardChannelMaxRetries",2,a),this.wa=ys("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Mf(a&&a.concurrentRequestLimit),this.Da=new hb,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=nd.prototype,t.la=8,t.G=1,t.connect=function(a,h,d,g){Ct(0),this.W=a,this.H=h||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.I=hd(this,null,this.W),Go(this)};function uc(a){if(rd(a),a.G==3){var h=a.U++,d=Rn(a.I);if(Ue(d,"SID",a.K),Ue(d,"RID",h),Ue(d,"TYPE","terminate"),vs(a,d),h=new tr(a,a.j,h),h.L=2,h.v=zo(Rn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=h.v,d=!0),d||(h.g=fd(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Bo(h)}ud(a)}function Ko(a){a.g&&(fc(a),a.g.cancel(),a.g=null)}function rd(a){Ko(a),a.u&&(l.clearTimeout(a.u),a.u=null),Qo(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Go(a){if(!Ff(a.h)&&!a.s){a.s=!0;var h=a.Ga;Pe||Zt(),Ee||(Pe(),Ee=!0),qt.add(h,a),a.B=0}}function gb(a,h){return Uf(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=cs(m(a.Ga,a,h),cd(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const P=new tr(this,this.j,a);let D=this.o;if(this.S&&(D?(D=y(D),I(D,this.S)):D=this.S),this.m!==null||this.O||(P.H=D,D=null),this.P)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=sd(this,P,h),d=Rn(this.I),Ue(d,"RID",a),Ue(d,"CVER",22),this.D&&Ue(d,"X-HTTP-Session-Id",this.D),vs(this,d),D&&(this.O?h="headers="+encodeURIComponent(String(Yf(D)))+"&"+h:this.m&&cc(d,this.m,D)),lc(this.h,P),this.Ua&&Ue(d,"TYPE","init"),this.P?(Ue(d,"$req",h),Ue(d,"SID","null"),P.T=!0,ic(P,d,null)):ic(P,d,h),this.G=2}}else this.G==3&&(a?id(this,a):this.i.length==0||Ff(this.h)||id(this))};function id(a,h){var d;h?d=h.l:d=a.U++;const g=Rn(a.I);Ue(g,"SID",a.K),Ue(g,"RID",d),Ue(g,"AID",a.T),vs(a,g),a.m&&a.o&&cc(g,a.m,a.o),d=new tr(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),h&&(a.i=h.D.concat(a.i)),h=sd(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),lc(a.h,d),ic(d,g,h)}function vs(a,h){a.H&&K(a.H,function(d,g){Ue(h,g,d)}),a.l&&jf({},function(d,g){Ue(h,g,d)})}function sd(a,h,d){d=Math.min(a.i.length,d);var g=a.l?m(a.l.Na,a.l,a):null;e:{var P=a.i;let D=-1;for(;;){const G=["count="+d];D==-1?0<d?(D=P[0].g,G.push("ofs="+D)):D=0:G.push("ofs="+D);let Me=!0;for(let dt=0;dt<d;dt++){let ke=P[dt].g;const vt=P[dt].map;if(ke-=D,0>ke)D=Math.max(0,P[dt].g-100),Me=!1;else try{fb(vt,G,"req"+ke+"_")}catch{g&&g(vt)}}if(Me){g=G.join("&");break e}}}return a=a.i.splice(0,d),h.D=a,g}function od(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;Pe||Zt(),Ee||(Pe(),Ee=!0),qt.add(h,a),a.v=0}}function hc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=cs(m(a.Fa,a),cd(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,ad(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=cs(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Ct(10),Ko(this),ad(this))};function fc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function ad(a){a.g=new tr(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=Rn(a.qa);Ue(h,"RID","rpc"),Ue(h,"SID",a.K),Ue(h,"AID",a.T),Ue(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&Ue(h,"TO",a.ja),Ue(h,"TYPE","xmlhttp"),vs(a,h),a.m&&a.o&&cc(h,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=zo(Rn(h)),d.m=null,d.P=!0,Df(d,a)}t.Za=function(){this.C!=null&&(this.C=null,Ko(this),hc(this),Ct(19))};function Qo(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function ld(a,h){var d=null;if(a.g==h){Qo(a),fc(a),a.g=null;var g=2}else if(ac(a.h,h))d=h.D,$f(a.h,h),g=1;else return;if(a.G!=0){if(h.o)if(g==1){d=h.m?h.m.length:0,h=Date.now()-h.F;var P=a.B;g=Fo(),ye(g,new kf(g,d)),Go(a)}else od(a);else if(P=h.s,P==3||P==0&&0<h.X||!(g==1&&gb(a,h)||g==2&&hc(a)))switch(d&&0<d.length&&(h=a.h,h.i=h.i.concat(d)),P){case 1:Br(a,5);break;case 4:Br(a,10);break;case 3:Br(a,6);break;default:Br(a,2)}}}function cd(a,h){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*h}function Br(a,h){if(a.j.info("Error code "+h),h==2){var d=m(a.fb,a),g=a.Xa;const P=!g;g=new $r(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||jo(g,"https"),zo(g),P?cb(g.toString(),d):ub(g.toString(),d)}else Ct(2);a.G=0,a.l&&a.l.sa(h),ud(a),rd(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Ct(2)):(this.j.info("Failed to ping google.com"),Ct(1))};function ud(a){if(a.G=0,a.ka=[],a.l){const h=Bf(a.h);(h.length!=0||a.i.length!=0)&&(N(a.ka,h),N(a.ka,a.i),a.h.i.length=0,L(a.i),a.i.length=0),a.l.ra()}}function hd(a,h,d){var g=d instanceof $r?Rn(d):new $r(d);if(g.g!="")h&&(g.g=h+"."+g.g),qo(g,g.s);else{var P=l.location;g=P.protocol,h=h?h+"."+P.hostname:P.hostname,P=+P.port;var D=new $r(null);g&&jo(D,g),h&&(D.g=h),P&&qo(D,P),d&&(D.l=d),g=D}return d=a.D,h=a.ya,d&&h&&Ue(g,d,h),Ue(g,"VER",a.la),vs(a,g),g}function fd(a,h,d){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Xe(new ms({eb:d})):new Xe(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function dd(){}t=dd.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Yo(){}Yo.prototype.g=function(a,h){return new zt(a,h)};function zt(a,h){ue.call(this),this.g=new nd(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!k(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!k(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new vi(this)}C(zt,ue),zt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},zt.prototype.close=function(){uc(this.g)},zt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=ft(a),a=d);h.i.push(new Zw(h.Ya++,a)),h.G==3&&Go(h)},zt.prototype.N=function(){this.g.l=null,delete this.j,uc(this.g),delete this.g,zt.aa.N.call(this)};function pd(a){ec.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}C(pd,ec);function md(){tc.call(this),this.status=1}C(md,tc);function vi(a){this.g=a}C(vi,dd),vi.prototype.ua=function(){ye(this.g,"a")},vi.prototype.ta=function(a){ye(this.g,new pd(a))},vi.prototype.sa=function(a){ye(this.g,new md)},vi.prototype.ra=function(){ye(this.g,"b")},Yo.prototype.createWebChannel=Yo.prototype.g,zt.prototype.send=zt.prototype.o,zt.prototype.open=zt.prototype.m,zt.prototype.close=zt.prototype.close,A_=function(){return new Yo},I_=function(){return Fo()},T_=Fr,su={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Uo.NO_ERROR=0,Uo.TIMEOUT=8,Uo.HTTP_ERROR=6,Aa=Uo,xf.COMPLETE="complete",E_=xf,Rf.EventType=as,as.OPEN="a",as.CLOSE="b",as.ERROR="c",as.MESSAGE="d",ue.prototype.listen=ue.prototype.K,Ps=Rf,b_=ms,Xe.prototype.listenOnce=Xe.prototype.L,Xe.prototype.getLastError=Xe.prototype.Ka,Xe.prototype.getLastErrorCode=Xe.prototype.Ba,Xe.prototype.getStatus=Xe.prototype.Z,Xe.prototype.getResponseJson=Xe.prototype.Oa,Xe.prototype.getResponseText=Xe.prototype.oa,Xe.prototype.send=Xe.prototype.ea,Xe.prototype.setWithCredentials=Xe.prototype.Ha,w_=Xe}).apply(typeof ia<"u"?ia:typeof self<"u"?self:typeof window<"u"?window:{});const op="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Et.UNAUTHENTICATED=new Et(null),Et.GOOGLE_CREDENTIALS=new Et("google-credentials-uid"),Et.FIRST_PARTY=new Et("first-party-uid"),Et.MOCK_USER=new Et("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ji="10.12.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ri=new ah("@firebase/firestore");function bs(){return ri.logLevel}function se(t,...e){if(ri.logLevel<=Re.DEBUG){const n=e.map(uh);ri.debug(`Firestore (${Ji}): ${t}`,...n)}}function Un(t,...e){if(ri.logLevel<=Re.ERROR){const n=e.map(uh);ri.error(`Firestore (${Ji}): ${t}`,...n)}}function Mi(t,...e){if(ri.logLevel<=Re.WARN){const n=e.map(uh);ri.warn(`Firestore (${Ji}): ${t}`,...n)}}function uh(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(t="Unexpected state"){const e=`FIRESTORE (${Ji}) INTERNAL ASSERTION FAILED: `+t;throw Un(e),new Error(e)}function Fe(t,e){t||pe()}function _e(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Z extends An{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class pI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Et.UNAUTHENTICATED))}shutdown(){}}class mI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class gI{constructor(e){this.t=e,this.currentUser=Et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let s=new Vn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Vn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},l=c=>{se("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(se("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Vn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(se("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Fe(typeof r.accessToken=="string"),new R_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Fe(e===null||typeof e=="string"),new Et(e)}}class _I{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Et.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class yI{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new _I(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Et.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class vI{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class wI{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&se("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,se("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{se("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):se("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Fe(typeof n.token=="string"),this.R=n.token,new vI(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bI(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=bI(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function xe(t,e){return t<e?-1:t>e?1:0}function Fi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new Z($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new Z($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new Z($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Z($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ot.fromMillis(Date.now())}static fromDate(e){return ot.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ot(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?xe(this.nanoseconds,e.nanoseconds):xe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ge(e)}static min(){return new ge(new ot(0,0))}static max(){return new ge(new ot(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e,n,r){n===void 0?n=0:n>e.length&&pe(),r===void 0?r=e.length-n:r>e.length-n&&pe(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return no.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof no?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Be extends no{construct(e,n,r){return new Be(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new Z($.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Be(n)}static emptyPath(){return new Be([])}}const EI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class gt extends no{construct(e,n,r){return new gt(e,n,r)}static isValidIdentifier(e){return EI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),gt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new gt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new Z($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new Z($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new Z($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new Z($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new gt(n)}static emptyPath(){return new gt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e){this.path=e}static fromPath(e){return new he(Be.fromString(e))}static fromName(e){return new he(Be.fromString(e).popFirst(5))}static empty(){return new he(Be.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Be.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Be.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new he(new Be(e.slice()))}}function TI(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ge.fromTimestamp(r===1e9?new ot(n+1,0):new ot(n,r));return new Rr(i,he.empty(),e)}function II(t){return new Rr(t.readTime,t.key,-1)}class Rr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Rr(ge.min(),he.empty(),-1)}static max(){return new Rr(ge.max(),he.empty(),-1)}}function AI(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=he.comparator(t.documentKey,e.documentKey),n!==0?n:xe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class PI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function To(t){if(t.code!==$.FAILED_PRECONDITION||t.message!==RI)throw t;se("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&pe(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new q((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof q?n:q.resolve(n)}catch(n){return q.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):q.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):q.reject(n)}static resolve(e){return new q((n,r)=>{n(e)})}static reject(e){return new q((n,r)=>{r(e)})}static waitFor(e){return new q((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},c=>r(c))}),o=!0,s===i&&n()})}static or(e){let n=q.resolve(!1);for(const r of e)n=n.next(i=>i?q.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new q((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let c=0;c<s;c++){const u=c;n(e[u]).next(f=>{o[u]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new q((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function SI(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Io(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}hh.oe=-1;function bl(t){return t==null}function za(t){return t===0&&1/t==-1/0}function CI(t){return typeof t=="number"&&Number.isInteger(t)&&!za(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ap(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function di(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function S_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e,n){this.comparator=e,this.root=n||pt.EMPTY}insert(e,n){return new Ye(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,pt.BLACK,null,null))}remove(e){return new Ye(this.comparator,this.root.remove(e,this.comparator).copy(null,null,pt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new sa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new sa(this.root,e,this.comparator,!1)}getReverseIterator(){return new sa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new sa(this.root,e,this.comparator,!0)}}class sa{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class pt{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??pt.RED,this.left=i??pt.EMPTY,this.right=s??pt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new pt(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return pt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return pt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw pe();const e=this.left.check();if(e!==this.right.check())throw pe();return e+(this.isRed()?0:1)}}pt.EMPTY=null,pt.RED=!0,pt.BLACK=!1;pt.EMPTY=new class{constructor(){this.size=0}get key(){throw pe()}get value(){throw pe()}get color(){throw pe()}get left(){throw pe()}get right(){throw pe()}copy(e,n,r,i,s){return this}insert(e,n,r){return new pt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.comparator=e,this.data=new Ye(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new lp(this.data.getIterator())}getIteratorFrom(e){return new lp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof _t)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new _t(this.comparator);return n.data=e,n}}class lp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e){this.fields=e,e.sort(gt.comparator)}static empty(){return new Wt([])}unionWith(e){let n=new _t(gt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Wt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Fi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new C_("Invalid base64 string: "+s):s}}(e);return new Pt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Pt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return xe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Pt.EMPTY_BYTE_STRING=new Pt("");const kI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Pr(t){if(Fe(!!t),typeof t=="string"){let e=0;const n=kI.exec(t);if(Fe(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:it(t.seconds),nanos:it(t.nanos)}}function it(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ii(t){return typeof t=="string"?Pt.fromBase64String(t):Pt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function dh(t){const e=t.mapValue.fields.__previous_value__;return fh(e)?dh(e):e}function ro(t){const e=Pr(t.mapValue.fields.__local_write_time__.timestampValue);return new ot(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{constructor(e,n,r,i,s,o,l,c,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u}}class io{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new io("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof io&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oa={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function si(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?fh(t)?4:NI(t)?9007199254740991:10:pe()}function In(t,e){if(t===e)return!0;const n=si(t);if(n!==si(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ro(t).isEqual(ro(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Pr(i.timestampValue),l=Pr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return ii(i.bytesValue).isEqual(ii(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return it(i.geoPointValue.latitude)===it(s.geoPointValue.latitude)&&it(i.geoPointValue.longitude)===it(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return it(i.integerValue)===it(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=it(i.doubleValue),l=it(s.doubleValue);return o===l?za(o)===za(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Fi(t.arrayValue.values||[],e.arrayValue.values||[],In);case 10:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(ap(o)!==ap(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!In(o[c],l[c])))return!1;return!0}(t,e);default:return pe()}}function so(t,e){return(t.values||[]).find(n=>In(n,e))!==void 0}function Ui(t,e){if(t===e)return 0;const n=si(t),r=si(e);if(n!==r)return xe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return xe(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=it(s.integerValue||s.doubleValue),c=it(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return cp(t.timestampValue,e.timestampValue);case 4:return cp(ro(t),ro(e));case 5:return xe(t.stringValue,e.stringValue);case 6:return function(s,o){const l=ii(s),c=ii(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),c=o.split("/");for(let u=0;u<l.length&&u<c.length;u++){const f=xe(l[u],c[u]);if(f!==0)return f}return xe(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=xe(it(s.latitude),it(o.latitude));return l!==0?l:xe(it(s.longitude),it(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const l=s.values||[],c=o.values||[];for(let u=0;u<l.length&&u<c.length;++u){const f=Ui(l[u],c[u]);if(f)return f}return xe(l.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===oa.mapValue&&o===oa.mapValue)return 0;if(s===oa.mapValue)return 1;if(o===oa.mapValue)return-1;const l=s.fields||{},c=Object.keys(l),u=o.fields||{},f=Object.keys(u);c.sort(),f.sort();for(let p=0;p<c.length&&p<f.length;++p){const m=xe(c[p],f[p]);if(m!==0)return m;const v=Ui(l[c[p]],u[f[p]]);if(v!==0)return v}return xe(c.length,f.length)}(t.mapValue,e.mapValue);default:throw pe()}}function cp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return xe(t,e);const n=Pr(t),r=Pr(e),i=xe(n.seconds,r.seconds);return i!==0?i:xe(n.nanos,r.nanos)}function $i(t){return ou(t)}function ou(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Pr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ii(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return he.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=ou(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${ou(n.fields[o])}`;return i+"}"}(t.mapValue):pe()}function up(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function au(t){return!!t&&"integerValue"in t}function ph(t){return!!t&&"arrayValue"in t}function hp(t){return!!t&&"nullValue"in t}function fp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ra(t){return!!t&&"mapValue"in t}function Us(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return di(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Us(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Us(t.arrayValue.values[n]);return e}return Object.assign({},t)}function NI(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.value=e}static empty(){return new Mt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ra(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Us(n)}setAll(e){let n=gt.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Us(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Ra(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return In(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Ra(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){di(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Mt(Us(this.value))}}function k_(t){const e=[];return di(t.fields,(n,r)=>{const i=new gt([n]);if(Ra(r)){const s=k_(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Wt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Tt(e,0,ge.min(),ge.min(),ge.min(),Mt.empty(),0)}static newFoundDocument(e,n,r,i){return new Tt(e,1,n,ge.min(),r,i,0)}static newNoDocument(e,n){return new Tt(e,2,n,ge.min(),ge.min(),Mt.empty(),0)}static newUnknownDocument(e,n){return new Tt(e,3,n,ge.min(),ge.min(),Mt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ge.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Mt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ge.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Tt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(e,n){this.position=e,this.inclusive=n}}function dp(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=he.comparator(he.fromName(o.referenceValue),n.key):r=Ui(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function pp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!In(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e,n="asc"){this.field=e,this.dir=n}}function OI(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{}class st extends x_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new LI(e,n,r):n==="array-contains"?new FI(e,r):n==="in"?new UI(e,r):n==="not-in"?new $I(e,r):n==="array-contains-any"?new BI(e,r):new st(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new VI(e,r):new MI(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ui(n,this.value)):n!==null&&si(this.value)===si(n)&&this.matchesComparison(Ui(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return pe()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class on extends x_{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new on(e,n)}matches(e){return N_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function N_(t){return t.op==="and"}function O_(t){return DI(t)&&N_(t)}function DI(t){for(const e of t.filters)if(e instanceof on)return!1;return!0}function lu(t){if(t instanceof st)return t.field.canonicalString()+t.op.toString()+$i(t.value);if(O_(t))return t.filters.map(e=>lu(e)).join(",");{const e=t.filters.map(n=>lu(n)).join(",");return`${t.op}(${e})`}}function D_(t,e){return t instanceof st?function(r,i){return i instanceof st&&r.op===i.op&&r.field.isEqual(i.field)&&In(r.value,i.value)}(t,e):t instanceof on?function(r,i){return i instanceof on&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&D_(o,i.filters[l]),!0):!1}(t,e):void pe()}function L_(t){return t instanceof st?function(n){return`${n.field.canonicalString()} ${n.op} ${$i(n.value)}`}(t):t instanceof on?function(n){return n.op.toString()+" {"+n.getFilters().map(L_).join(" ,")+"}"}(t):"Filter"}class LI extends st{constructor(e,n,r){super(e,n,r),this.key=he.fromName(r.referenceValue)}matches(e){const n=he.comparator(e.key,this.key);return this.matchesComparison(n)}}class VI extends st{constructor(e,n){super(e,"in",n),this.keys=V_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class MI extends st{constructor(e,n){super(e,"not-in",n),this.keys=V_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function V_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>he.fromName(r.referenceValue))}class FI extends st{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ph(n)&&so(n.arrayValue,this.value)}}class UI extends st{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&so(this.value.arrayValue,n)}}class $I extends st{constructor(e,n){super(e,"not-in",n)}matches(e){if(so(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!so(this.value.arrayValue,n)}}class BI extends st{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ph(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>so(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jI{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function mp(t,e=null,n=[],r=[],i=null,s=null,o=null){return new jI(t,e,n,r,i,s,o)}function mh(t){const e=_e(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>lu(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),bl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>$i(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>$i(r)).join(",")),e.ue=n}return e.ue}function gh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!OI(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!D_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!pp(t.startAt,e.startAt)&&pp(t.endAt,e.endAt)}function cu(t){return he.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function qI(t,e,n,r,i,s,o,l){return new Zi(t,e,n,r,i,s,o,l)}function El(t){return new Zi(t)}function gp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function M_(t){return t.collectionGroup!==null}function $s(t){const e=_e(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new _t(gt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new oo(s,r))}),n.has(gt.keyField().canonicalString())||e.ce.push(new oo(gt.keyField(),r))}return e.ce}function vn(t){const e=_e(t);return e.le||(e.le=zI(e,$s(t))),e.le}function zI(t,e){if(t.limitType==="F")return mp(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new oo(i.field,s)});const n=t.endAt?new Ha(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ha(t.startAt.position,t.startAt.inclusive):null;return mp(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function uu(t,e){const n=t.filters.concat([e]);return new Zi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Wa(t,e,n){return new Zi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Tl(t,e){return gh(vn(t),vn(e))&&t.limitType===e.limitType}function F_(t){return`${mh(vn(t))}|lt:${t.limitType}`}function bi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>L_(i)).join(", ")}]`),bl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>$i(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>$i(i)).join(",")),`Target(${r})`}(vn(t))}; limitType=${t.limitType})`}function Il(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):he.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of $s(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,c){const u=dp(o,l,c);return o.inclusive?u<=0:u<0}(r.startAt,$s(r),i)||r.endAt&&!function(o,l,c){const u=dp(o,l,c);return o.inclusive?u>=0:u>0}(r.endAt,$s(r),i))}(t,e)}function HI(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function U_(t){return(e,n)=>{let r=!1;for(const i of $s(t)){const s=WI(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function WI(t,e,n){const r=t.field.isKeyField()?he.comparator(e.key,n.key):function(s,o,l){const c=o.data.field(s),u=l.data.field(s);return c!==null&&u!==null?Ui(c,u):pe()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return pe()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){di(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return S_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KI=new Ye(he.comparator);function $n(){return KI}const $_=new Ye(he.comparator);function Ss(...t){let e=$_;for(const n of t)e=e.insert(n.key,n);return e}function B_(t){let e=$_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Kr(){return Bs()}function j_(){return Bs()}function Bs(){return new es(t=>t.toString(),(t,e)=>t.isEqual(e))}const GI=new Ye(he.comparator),QI=new _t(he.comparator);function Te(...t){let e=QI;for(const n of t)e=e.add(n);return e}const YI=new _t(xe);function XI(){return YI}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q_(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:za(e)?"-0":e}}function z_(t){return{integerValue:""+t}}function JI(t,e){return CI(e)?z_(e):q_(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(){this._=void 0}}function ZI(t,e,n){return t instanceof ao?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&fh(s)&&(s=dh(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Bi?W_(t,e):t instanceof lo?K_(t,e):function(i,s){const o=H_(i,s),l=_p(o)+_p(i.Pe);return au(o)&&au(i.Pe)?z_(l):q_(i.serializer,l)}(t,e)}function eA(t,e,n){return t instanceof Bi?W_(t,e):t instanceof lo?K_(t,e):n}function H_(t,e){return t instanceof Ka?function(r){return au(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class ao extends Al{}class Bi extends Al{constructor(e){super(),this.elements=e}}function W_(t,e){const n=G_(e);for(const r of t.elements)n.some(i=>In(i,r))||n.push(r);return{arrayValue:{values:n}}}class lo extends Al{constructor(e){super(),this.elements=e}}function K_(t,e){let n=G_(e);for(const r of t.elements)n=n.filter(i=>!In(i,r));return{arrayValue:{values:n}}}class Ka extends Al{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function _p(t){return it(t.integerValue||t.doubleValue)}function G_(t){return ph(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{constructor(e,n){this.field=e,this.transform=n}}function tA(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Bi&&i instanceof Bi||r instanceof lo&&i instanceof lo?Fi(r.elements,i.elements,In):r instanceof Ka&&i instanceof Ka?In(r.Pe,i.Pe):r instanceof ao&&i instanceof ao}(t.transform,e.transform)}class nA{constructor(e,n){this.version=e,this.transformResults=n}}class Jt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Jt}static exists(e){return new Jt(void 0,e)}static updateTime(e){return new Jt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Pa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Rl{}function Y_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new _h(t.key,Jt.none()):new Ao(t.key,t.data,Jt.none());{const n=t.data,r=Mt.empty();let i=new _t(gt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Vr(t.key,r,new Wt(i.toArray()),Jt.none())}}function rA(t,e,n){t instanceof Ao?function(i,s,o){const l=i.value.clone(),c=vp(i.fieldTransforms,s,o.transformResults);l.setAll(c),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Vr?function(i,s,o){if(!Pa(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=vp(i.fieldTransforms,s,o.transformResults),c=s.data;c.setAll(X_(i)),c.setAll(l),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function js(t,e,n,r){return t instanceof Ao?function(s,o,l,c){if(!Pa(s.precondition,o))return l;const u=s.value.clone(),f=wp(s.fieldTransforms,c,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Vr?function(s,o,l,c){if(!Pa(s.precondition,o))return l;const u=wp(s.fieldTransforms,c,o),f=o.data;return f.setAll(X_(s)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(s,o,l){return Pa(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function iA(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=H_(r.transform,i||null);s!=null&&(n===null&&(n=Mt.empty()),n.set(r.field,s))}return n||null}function yp(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Fi(r,i,(s,o)=>tA(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ao extends Rl{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Vr extends Rl{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function X_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function vp(t,e,n){const r=new Map;Fe(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,eA(o,l,n[i]))}return r}function wp(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,ZI(s,o,e))}return r}class _h extends Rl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class sA extends Rl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&rA(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=js(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=js(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=j_();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const c=Y_(o,l);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(ge.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Te())}isEqual(e){return this.batchId===e.batchId&&Fi(this.mutations,e.mutations,(n,r)=>yp(n,r))&&Fi(this.baseMutations,e.baseMutations,(n,r)=>yp(n,r))}}class yh{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Fe(e.mutations.length===r.length);let i=function(){return GI}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new yh(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aA{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lA{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var rt,Se;function cA(t){switch(t){default:return pe();case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0}}function J_(t){if(t===void 0)return Un("GRPC error has no .code"),$.UNKNOWN;switch(t){case rt.OK:return $.OK;case rt.CANCELLED:return $.CANCELLED;case rt.UNKNOWN:return $.UNKNOWN;case rt.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case rt.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case rt.INTERNAL:return $.INTERNAL;case rt.UNAVAILABLE:return $.UNAVAILABLE;case rt.UNAUTHENTICATED:return $.UNAUTHENTICATED;case rt.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case rt.NOT_FOUND:return $.NOT_FOUND;case rt.ALREADY_EXISTS:return $.ALREADY_EXISTS;case rt.PERMISSION_DENIED:return $.PERMISSION_DENIED;case rt.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case rt.ABORTED:return $.ABORTED;case rt.OUT_OF_RANGE:return $.OUT_OF_RANGE;case rt.UNIMPLEMENTED:return $.UNIMPLEMENTED;case rt.DATA_LOSS:return $.DATA_LOSS;default:return pe()}}(Se=rt||(rt={}))[Se.OK=0]="OK",Se[Se.CANCELLED=1]="CANCELLED",Se[Se.UNKNOWN=2]="UNKNOWN",Se[Se.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Se[Se.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Se[Se.NOT_FOUND=5]="NOT_FOUND",Se[Se.ALREADY_EXISTS=6]="ALREADY_EXISTS",Se[Se.PERMISSION_DENIED=7]="PERMISSION_DENIED",Se[Se.UNAUTHENTICATED=16]="UNAUTHENTICATED",Se[Se.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Se[Se.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Se[Se.ABORTED=10]="ABORTED",Se[Se.OUT_OF_RANGE=11]="OUT_OF_RANGE",Se[Se.UNIMPLEMENTED=12]="UNIMPLEMENTED",Se[Se.INTERNAL=13]="INTERNAL",Se[Se.UNAVAILABLE=14]="UNAVAILABLE",Se[Se.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uA(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hA=new Jr([4294967295,4294967295],0);function bp(t){const e=uA().encode(t),n=new v_;return n.update(e),new Uint8Array(n.digest())}function Ep(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Jr([n,r],0),new Jr([i,s],0)]}class vh{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Cs(`Invalid padding: ${n}`);if(r<0)throw new Cs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Cs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Cs(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Jr.fromNumber(this.Ie)}Ee(e,n,r){let i=e.add(n.multiply(Jr.fromNumber(r)));return i.compare(hA)===1&&(i=new Jr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=bp(e),[r,i]=Ep(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new vh(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=bp(e),[r,i]=Ep(n);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Cs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Ro.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Pl(ge.min(),i,new Ye(xe),$n(),Te())}}class Ro{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ro(r,n,Te(),Te(),Te())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(e,n,r,i){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=i}}class Z_{constructor(e,n){this.targetId=e,this.me=n}}class ey{constructor(e,n,r=Pt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Tp{constructor(){this.fe=0,this.ge=Ap(),this.pe=Pt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=Te(),n=Te(),r=Te();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:pe()}}),new Ro(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=Ap()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Fe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class fA{constructor(e){this.Le=e,this.Be=new Map,this.ke=$n(),this.qe=Ip(),this.Qe=new Ye(xe)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:pe()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,i)=>{this.ze(i)&&n(i)})}He(e){const n=e.targetId,r=e.me.count,i=this.Je(n);if(i){const s=i.target;if(cu(s))if(r===0){const o=new he(s.path);this.Ue(n,o,Tt.newNoDocument(o,ge.min()))}else Fe(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),c=l?this.Xe(l,e,o):1;if(c!==0){this.je(n);const u=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,u)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=ii(r).toUint8Array()}catch(c){if(c instanceof C_)return Mi("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new vh(o,i,s)}catch(c){return Mi(c instanceof Cs?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,s,null),i++)}),i}rt(e){const n=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&cu(l.target)){const c=new he(l.target.path);this.ke.get(c)!==null||this.it(o,c)||this.Ue(o,c,Tt.newNoDocument(c,e))}s.be&&(n.set(o,s.Ce()),s.ve())}});let r=Te();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(c=>{const u=this.Je(c);return!u||u.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Pl(e,n,this.Qe,this.ke,r);return this.ke=$n(),this.qe=Ip(),this.Qe=new Ye(xe),i}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,n)?i.Fe(n,1):i.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Tp,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new _t(xe),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||se("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Tp),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Ip(){return new Ye(he.comparator)}function Ap(){return new Ye(he.comparator)}const dA=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),pA=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),mA=(()=>({and:"AND",or:"OR"}))();class gA{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function hu(t,e){return t.useProto3Json||bl(e)?e:{value:e}}function Ga(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ty(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function _A(t,e){return Ga(t,e.toTimestamp())}function wn(t){return Fe(!!t),ge.fromTimestamp(function(n){const r=Pr(n);return new ot(r.seconds,r.nanos)}(t))}function wh(t,e){return fu(t,e).canonicalString()}function fu(t,e){const n=function(i){return new Be(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function ny(t){const e=Be.fromString(t);return Fe(ay(e)),e}function du(t,e){return wh(t.databaseId,e.path)}function Pc(t,e){const n=ny(e);if(n.get(1)!==t.databaseId.projectId)throw new Z($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new Z($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new he(iy(n))}function ry(t,e){return wh(t.databaseId,e)}function yA(t){const e=ny(t);return e.length===4?Be.emptyPath():iy(e)}function pu(t){return new Be(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function iy(t){return Fe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Rp(t,e,n){return{name:du(t,e),fields:n.value.mapValue.fields}}function vA(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:pe()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,f){return u.useProto3Json?(Fe(f===void 0||typeof f=="string"),Pt.fromBase64String(f||"")):(Fe(f===void 0||f instanceof Buffer||f instanceof Uint8Array),Pt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(u){const f=u.code===void 0?$.UNKNOWN:J_(u.code);return new Z(f,u.message||"")}(o);n=new ey(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Pc(t,r.document.name),s=wn(r.document.updateTime),o=r.document.createTime?wn(r.document.createTime):ge.min(),l=new Mt({mapValue:{fields:r.document.fields}}),c=Tt.newFoundDocument(i,s,o,l),u=r.targetIds||[],f=r.removedTargetIds||[];n=new Sa(u,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Pc(t,r.document),s=r.readTime?wn(r.readTime):ge.min(),o=Tt.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Sa([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Pc(t,r.document),s=r.removedTargetIds||[];n=new Sa([],s,i,null)}else{if(!("filter"in e))return pe();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new lA(i,s),l=r.targetId;n=new Z_(l,o)}}return n}function wA(t,e){let n;if(e instanceof Ao)n={update:Rp(t,e.key,e.value)};else if(e instanceof _h)n={delete:du(t,e.key)};else if(e instanceof Vr)n={update:Rp(t,e.key,e.data),updateMask:CA(e.fieldMask)};else{if(!(e instanceof sA))return pe();n={verify:du(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof ao)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Bi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof lo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Ka)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw pe()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:_A(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:pe()}(t,e.precondition)),n}function bA(t,e){return t&&t.length>0?(Fe(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?wn(i.updateTime):wn(s);return o.isEqual(ge.min())&&(o=wn(s)),new nA(o,i.transformResults||[])}(n,e))):[]}function EA(t,e){return{documents:[ry(t,e.path)]}}function TA(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=ry(t,i);const s=function(u){if(u.length!==0)return oy(on.create(u,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(u){if(u.length!==0)return u.map(f=>function(m){return{field:Ei(m.field),direction:RA(m.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=hu(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{_t:n,parent:i}}function IA(t){let e=yA(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Fe(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(p){const m=sy(p);return m instanceof on&&O_(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(m=>function(C){return new oo(Ti(C.field),function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,bl(m)?null:m}(n.limit));let c=null;n.startAt&&(c=function(p){const m=!!p.before,v=p.values||[];return new Ha(v,m)}(n.startAt));let u=null;return n.endAt&&(u=function(p){const m=!p.before,v=p.values||[];return new Ha(v,m)}(n.endAt)),qI(e,i,o,s,l,"F",c,u)}function AA(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return pe()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function sy(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ti(n.unaryFilter.field);return st.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ti(n.unaryFilter.field);return st.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ti(n.unaryFilter.field);return st.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ti(n.unaryFilter.field);return st.create(o,"!=",{nullValue:"NULL_VALUE"});default:return pe()}}(t):t.fieldFilter!==void 0?function(n){return st.create(Ti(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return pe()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return on.create(n.compositeFilter.filters.map(r=>sy(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return pe()}}(n.compositeFilter.op))}(t):pe()}function RA(t){return dA[t]}function PA(t){return pA[t]}function SA(t){return mA[t]}function Ei(t){return{fieldPath:t.canonicalString()}}function Ti(t){return gt.fromServerFormat(t.fieldPath)}function oy(t){return t instanceof st?function(n){if(n.op==="=="){if(fp(n.value))return{unaryFilter:{field:Ei(n.field),op:"IS_NAN"}};if(hp(n.value))return{unaryFilter:{field:Ei(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(fp(n.value))return{unaryFilter:{field:Ei(n.field),op:"IS_NOT_NAN"}};if(hp(n.value))return{unaryFilter:{field:Ei(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ei(n.field),op:PA(n.op),value:n.value}}}(t):t instanceof on?function(n){const r=n.getFilters().map(i=>oy(i));return r.length===1?r[0]:{compositeFilter:{op:SA(n.op),filters:r}}}(t):pe()}function CA(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function ay(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(e,n,r,i,s=ge.min(),o=ge.min(),l=Pt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new gr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kA{constructor(e){this.ct=e}}function xA(t){const e=IA({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Wa(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NA{constructor(){this._n=new OA}addToCollectionParentIndex(e,n){return this._n.add(n),q.resolve()}getCollectionParents(e,n){return q.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return q.resolve()}deleteFieldIndex(e,n){return q.resolve()}deleteAllFieldIndexes(e){return q.resolve()}createTargetIndexes(e,n){return q.resolve()}getDocumentsMatchingTarget(e,n){return q.resolve(null)}getIndexType(e,n){return q.resolve(0)}getFieldIndexes(e,n){return q.resolve([])}getNextCollectionGroupToUpdate(e){return q.resolve(null)}getMinOffset(e,n){return q.resolve(Rr.min())}getMinOffsetFromCollectionGroup(e,n){return q.resolve(Rr.min())}updateCollectionGroup(e,n,r){return q.resolve()}updateIndexEntries(e,n){return q.resolve()}}class OA{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new _t(Be.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new _t(Be.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new ji(0)}static Ln(){return new ji(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DA{constructor(){this.changes=new es(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Tt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?q.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LA{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VA{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&js(r.mutation,i,Wt.empty(),ot.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Te()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Te()){const i=Kr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ss();return s.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Kr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Te()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=$n();const o=Bs(),l=function(){return Bs()}();return n.forEach((c,u)=>{const f=r.get(u.key);i.has(u.key)&&(f===void 0||f.mutation instanceof Vr)?s=s.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),js(f.mutation,u,f.mutation.getFieldMask(),ot.now())):o.set(u.key,Wt.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((u,f)=>o.set(u,f)),n.forEach((u,f)=>{var p;return l.set(u,new LA(f,(p=o.get(u))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Bs();let i=new Ye((o,l)=>o-l),s=Te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let f=r.get(c)||Wt.empty();f=l.applyToLocalView(u,f),r.set(c,f);const p=(i.get(l.batchId)||Te()).add(c);i=i.insert(l.batchId,p)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,f=c.value,p=j_();f.forEach(m=>{if(!s.has(m)){const v=Y_(n.get(m),r.get(m));v!==null&&p.set(m,v),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return q.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return he.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):M_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):q.resolve(Kr());let l=-1,c=s;return o.next(u=>q.forEach(u,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),s.get(f)?q.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{c=c.insert(f,m)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,c,u,Te())).next(f=>({batchId:l,changes:B_(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new he(n)).next(r=>{let i=Ss();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Ss();return this.indexManager.getCollectionParents(e,s).next(l=>q.forEach(l,c=>{const u=function(p,m){return new Zi(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(f=>{f.forEach((p,m)=>{o=o.insert(p,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((c,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,Tt.newInvalidDocument(f)))});let l=Ss();return o.forEach((c,u)=>{const f=s.get(c);f!==void 0&&js(f.mutation,u,Wt.empty(),ot.now()),Il(n,u)&&(l=l.insert(c,u))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MA{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return q.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:wn(i.createTime)}}(n)),q.resolve()}getNamedQuery(e,n){return q.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:xA(i.bundledQuery),readTime:wn(i.readTime)}}(n)),q.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FA{constructor(){this.overlays=new Ye(he.comparator),this.hr=new Map}getOverlay(e,n){return q.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Kr();return q.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),q.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),q.resolve()}getOverlaysForCollection(e,n,r){const i=Kr(),s=n.length+1,o=new he(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return q.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Ye((u,f)=>u-f);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let f=s.get(u.largestBatchId);f===null&&(f=Kr(),s=s.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const l=Kr(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,f)=>l.set(u,f)),!(l.size()>=i)););return q.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new aA(n,r));let s=this.hr.get(n);s===void 0&&(s=Te(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(){this.Pr=new _t(ut.Ir),this.Tr=new _t(ut.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new ut(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new ut(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new he(new Be([])),r=new ut(n,e),i=new ut(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new he(new Be([])),r=new ut(n,e),i=new ut(n,e+1);let s=Te();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new ut(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ut{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return he.comparator(e.key,n.key)||xe(e.pr,n.pr)}static Er(e,n){return xe(e.pr,n.pr)||he.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UA{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new _t(ut.Ir)}checkEmpty(e){return q.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new oA(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.wr=this.wr.add(new ut(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return q.resolve(o)}lookupMutationBatch(e,n){return q.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return q.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return q.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return q.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ut(n,0),i=new ut(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const l=this.Sr(o.pr);s.push(l)}),q.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new _t(xe);return n.forEach(i=>{const s=new ut(i,0),o=new ut(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],l=>{r=r.add(l.pr)})}),q.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;he.isDocumentKey(s)||(s=s.child(""));const o=new ut(new he(s),0);let l=new _t(xe);return this.wr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(l=l.add(c.pr)),!0)},o),q.resolve(this.Dr(l))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Fe(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return q.forEach(n.mutations,i=>{const s=new ut(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new ut(n,0),i=this.wr.firstAfterOrEqual(r);return q.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,q.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $A{constructor(e){this.vr=e,this.docs=function(){return new Ye(he.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return q.resolve(r?r.document.mutableCopy():Tt.newInvalidDocument(n))}getEntries(e,n){let r=$n();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Tt.newInvalidDocument(i))}),q.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=$n();const o=n.path,l=new he(o.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:f}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||AI(II(f),r)<=0||(i.has(f.key)||Il(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return q.resolve(s)}getAllFromCollectionGroup(e,n,r,i){pe()}Fr(e,n){return q.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new BA(this)}getSize(e){return q.resolve(this.size)}}class BA extends DA{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),q.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jA{constructor(e){this.persistence=e,this.Mr=new es(n=>mh(n),gh),this.lastRemoteSnapshotVersion=ge.min(),this.highestTargetId=0,this.Or=0,this.Nr=new bh,this.targetCount=0,this.Lr=ji.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),q.resolve()}getLastRemoteSnapshotVersion(e){return q.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return q.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),q.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),q.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new ji(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,q.resolve()}updateTargetData(e,n){return this.qn(n),q.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,q.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),q.waitFor(s).next(()=>i)}getTargetCount(e){return q.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return q.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),q.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),q.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),q.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return q.resolve(r)}containsKey(e,n){return q.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qA{constructor(e,n){this.Br={},this.overlays={},this.kr=new hh(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new jA(this),this.indexManager=new NA,this.remoteDocumentCache=function(i){return new $A(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new kA(n),this.$r=new MA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new FA,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new UA(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){se("MemoryPersistence","Starting transaction:",e);const i=new zA(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return q.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class zA extends PI{constructor(e){super(),this.currentSequenceNumber=e}}class Eh{constructor(e){this.persistence=e,this.zr=new bh,this.jr=null}static Hr(e){return new Eh(e)}get Jr(){if(this.jr)return this.jr;throw pe()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),q.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),q.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),q.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return q.forEach(this.Jr,r=>{const i=he.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,ge.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return q.or([()=>q.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=Te(),i=Te();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Th(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WA{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return YE()?8:SI(yt())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new HA;return this.Ji(e,n,o).next(l=>{if(s.result=l,this.Ui)return this.Yi(e,n,o,l.size)})}).next(()=>s.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(bs()<=Re.DEBUG&&se("QueryEngine","SDK will not create cache indexes for query:",bi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),q.resolve()):(bs()<=Re.DEBUG&&se("QueryEngine","Query:",bi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(bs()<=Re.DEBUG&&se("QueryEngine","The SDK decides to create cache indexes for query:",bi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,vn(n))):q.resolve())}ji(e,n){if(gp(n))return q.resolve(null);let r=vn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Wa(n,null,"F"),r=vn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Te(...s);return this.zi.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.Zi(n,l);return this.Xi(n,u,o,c.readTime)?this.ji(e,Wa(n,null,"F")):this.es(e,u,n,c)}))})))}Hi(e,n,r,i){return gp(n)||i.isEqual(ge.min())?q.resolve(null):this.zi.getDocuments(e,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?q.resolve(null):(bs()<=Re.DEBUG&&se("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),bi(n)),this.es(e,o,n,TI(i,-1)).next(l=>l))})}Zi(e,n){let r=new _t(U_(e));return n.forEach((i,s)=>{Il(e,s)&&(r=r.add(s))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,n,r){return bs()<=Re.DEBUG&&se("QueryEngine","Using full collection scan to execute query:",bi(n)),this.zi.getDocumentsMatchingQuery(e,n,Rr.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KA{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new Ye(xe),this.rs=new es(s=>mh(s),gh),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new VA(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function GA(t,e,n,r){return new KA(t,e,n,r)}async function ly(t,e){const n=_e(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let c=Te();for(const u of i){o.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}for(const u of s){l.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}return n.localDocuments.getDocuments(r,c).next(u=>({us:u,removedBatchIds:o,addedBatchIds:l}))})})}function QA(t,e){const n=_e(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(l,c,u,f){const p=u.batch,m=p.keys();let v=q.resolve();return m.forEach(C=>{v=v.next(()=>f.getEntry(c,C)).next(L=>{const N=u.docVersions.get(C);Fe(N!==null),L.version.compareTo(N)<0&&(p.applyToRemoteDocument(L,u),L.isValidDocument()&&(L.setReadTime(u.commitVersion),f.addEntry(L)))})}),v.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=Te();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function cy(t){const e=_e(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function YA(t,e){const n=_e(t),r=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const l=[];e.targetChanges.forEach((f,p)=>{const m=i.get(p);if(!m)return;l.push(n.Qr.removeMatchingKeys(s,f.removedDocuments,p).next(()=>n.Qr.addMatchingKeys(s,f.addedDocuments,p)));let v=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(p)!==null?v=v.withResumeToken(Pt.EMPTY_BYTE_STRING,ge.min()).withLastLimboFreeSnapshotVersion(ge.min()):f.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(f.resumeToken,r)),i=i.insert(p,v),function(L,N,x){return L.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-L.snapshotVersion.toMicroseconds()>=3e8?!0:x.addedDocuments.size+x.modifiedDocuments.size+x.removedDocuments.size>0}(m,v,f)&&l.push(n.Qr.updateTargetData(s,v))});let c=$n(),u=Te();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(XA(s,o,e.documentUpdates).next(f=>{c=f.cs,u=f.ls})),!r.isEqual(ge.min())){const f=n.Qr.getLastRemoteSnapshotVersion(s).next(p=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return q.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,c,u)).next(()=>c)}).then(s=>(n.ns=i,s))}function XA(t,e,n){let r=Te(),i=Te();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=$n();return n.forEach((l,c)=>{const u=s.get(l);c.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(l)),c.isNoDocument()&&c.version.isEqual(ge.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):se("LocalStore","Ignoring outdated watch update for ",l,". Current version:",u.version," Watch version:",c.version)}),{cs:o,ls:i}})}function JA(t,e){const n=_e(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function ZA(t,e){const n=_e(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,q.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new gr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function mu(t,e,n){const r=_e(t),i=r.ns.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Io(o))throw o;se("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function Pp(t,e,n){const r=_e(t);let i=ge.min(),s=Te();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,u,f){const p=_e(c),m=p.rs.get(f);return m!==void 0?q.resolve(p.ns.get(m)):p.Qr.getTargetData(u,f)}(r,o,vn(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,l.targetId).next(c=>{s=c})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?i:ge.min(),n?s:Te())).next(l=>(e1(r,HI(e),l),{documents:l,hs:s})))}function e1(t,e,n){let r=t.ss.get(e)||ge.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ss.set(e,r)}class Sp{constructor(){this.activeTargetIds=XI()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class t1{constructor(){this.no=new Sp,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new Sp,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n1{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){se("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){se("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let aa=null;function Sc(){return aa===null?aa=function(){return 268435456+Math.round(2147483648*Math.random())}():aa++,"0x"+aa.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i1{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt="WebChannelConnection";class s1 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+n.host,this.So=`projects/${i}/databases/${s}`,this.bo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Do(){return!1}Co(n,r,i,s,o){const l=Sc(),c=this.vo(n,r.toUriEncodedString());se("RestConnection",`Sending RPC '${n}' ${l}:`,c,i);const u={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(u,s,o),this.Mo(n,c,u,i).then(f=>(se("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw Mi("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",c,"request:",i),f})}xo(n,r,i,s,o,l){return this.Co(n,r,i,s,o)}Fo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ji}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}vo(n,r){const i=r1[n];return`${this.wo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,n,r,i){const s=Sc();return new Promise((o,l)=>{const c=new w_;c.setWithCredentials(!0),c.listenOnce(E_.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Aa.NO_ERROR:const f=c.getResponseJson();se(bt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case Aa.TIMEOUT:se(bt,`RPC '${e}' ${s} timed out`),l(new Z($.DEADLINE_EXCEEDED,"Request time out"));break;case Aa.HTTP_ERROR:const p=c.getStatus();if(se(bt,`RPC '${e}' ${s} failed with status:`,p,"response text:",c.getResponseText()),p>0){let m=c.getResponseJson();Array.isArray(m)&&(m=m[0]);const v=m==null?void 0:m.error;if(v&&v.status&&v.message){const C=function(N){const x=N.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(x)>=0?x:$.UNKNOWN}(v.status);l(new Z(C,v.message))}else l(new Z($.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new Z($.UNAVAILABLE,"Connection failed."));break;default:pe()}}finally{se(bt,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);se(bt,`RPC '${e}' ${s} sending request:`,i),c.send(n,"POST",u,r,15)})}Oo(e,n,r){const i=Sc(),s=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=A_(),l=I_(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.xmlHttpFactory=new b_({})),this.Fo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const f=s.join("");se(bt,`Creating RPC '${e}' stream ${i}: ${f}`,c);const p=o.createWebChannel(f,c);let m=!1,v=!1;const C=new i1({lo:N=>{v?se(bt,`Not sending because RPC '${e}' stream ${i} is closed:`,N):(m||(se(bt,`Opening RPC '${e}' stream ${i} transport.`),p.open(),m=!0),se(bt,`RPC '${e}' stream ${i} sending:`,N),p.send(N))},ho:()=>p.close()}),L=(N,x,k)=>{N.listen(x,V=>{try{k(V)}catch(U){setTimeout(()=>{throw U},0)}})};return L(p,Ps.EventType.OPEN,()=>{v||(se(bt,`RPC '${e}' stream ${i} transport opened.`),C.mo())}),L(p,Ps.EventType.CLOSE,()=>{v||(v=!0,se(bt,`RPC '${e}' stream ${i} transport closed`),C.po())}),L(p,Ps.EventType.ERROR,N=>{v||(v=!0,Mi(bt,`RPC '${e}' stream ${i} transport errored:`,N),C.po(new Z($.UNAVAILABLE,"The operation could not be completed")))}),L(p,Ps.EventType.MESSAGE,N=>{var x;if(!v){const k=N.data[0];Fe(!!k);const V=k,U=V.error||((x=V[0])===null||x===void 0?void 0:x.error);if(U){se(bt,`RPC '${e}' stream ${i} received error:`,U);const ne=U.status;let K=function(w){const I=rt[w];if(I!==void 0)return J_(I)}(ne),T=U.message;K===void 0&&(K=$.INTERNAL,T="Unknown error status: "+ne+" with message "+U.message),v=!0,C.po(new Z(K,T)),p.close()}else se(bt,`RPC '${e}' stream ${i} received:`,k),C.yo(k)}}),L(l,T_.STAT_EVENT,N=>{N.stat===su.PROXY?se(bt,`RPC '${e}' stream ${i} detected buffering proxy`):N.stat===su.NOPROXY&&se(bt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{C.fo()},0),C}}function Cc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sl(t){return new gA(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uy{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.No=r,this.Lo=i,this.Bo=s,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,n-r);i>0&&se("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(e,n,r,i,s,o,l,c){this.oi=e,this.Go=r,this.zo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new uy(e,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():n&&n.code===$.RESOURCE_EXHAUSTED?(Un(n.toString()),Un("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(n)}__(){}auth(){this.state=1;const e=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.jo===n&&this.u_(r,i)},r=>{e(()=>{const i=new Z($.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(i)})})}u_(e,n){const r=this.a_(this.jo);this.stream=this.l_(e,n),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(i=>{r(()=>this.c_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return se("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return n=>{this.oi.enqueueAndForget(()=>this.jo===e?n():(se("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class o1 extends hy{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}l_(e,n){return this.connection.Oo("Listen",e,n)}onMessage(e){this.Yo.reset();const n=vA(this.serializer,e),r=function(s){if(!("targetChange"in s))return ge.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?ge.min():o.readTime?wn(o.readTime):ge.min()}(e);return this.listener.h_(n,r)}P_(e){const n={};n.database=pu(this.serializer),n.addTarget=function(s,o){let l;const c=o.target;if(l=cu(c)?{documents:EA(s,c)}:{query:TA(s,c)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=ty(s,o.resumeToken);const u=hu(s,o.expectedCount);u!==null&&(l.expectedCount=u)}else if(o.snapshotVersion.compareTo(ge.min())>0){l.readTime=Ga(s,o.snapshotVersion.toTimestamp());const u=hu(s,o.expectedCount);u!==null&&(l.expectedCount=u)}return l}(this.serializer,e);const r=AA(this.serializer,e);r&&(n.labels=r),this.i_(n)}I_(e){const n={};n.database=pu(this.serializer),n.removeTarget=e,this.i_(n)}}class a1 extends hy{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,n){return this.connection.Oo("Write",e,n)}onMessage(e){if(Fe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const n=bA(e.writeResults,e.commitTime),r=wn(e.commitTime);return this.listener.A_(r,n)}return Fe(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=pu(this.serializer),this.i_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>wA(this.serializer,r))};this.i_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l1 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.m_=!1}f_(){if(this.m_)throw new Z($.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,n,r,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,fu(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new Z($.UNKNOWN,s.toString())})}xo(e,n,r,i,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.xo(e,fu(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Z($.UNKNOWN,o.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class c1{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(Un(n),this.y_=!1):se("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u1{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=s,this.O_.io(o=>{r.enqueueAndForget(async()=>{pi(this)&&(se("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=_e(c);u.M_.add(4),await Po(u),u.N_.set("Unknown"),u.M_.delete(4),await Cl(u)}(this))})}),this.N_=new c1(r,i)}}async function Cl(t){if(pi(t))for(const e of t.x_)await e(!0)}async function Po(t){for(const e of t.x_)await e(!1)}function fy(t,e){const n=_e(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),Ph(n)?Rh(n):ts(n).Xo()&&Ah(n,e))}function Ih(t,e){const n=_e(t),r=ts(n);n.F_.delete(e),r.Xo()&&dy(n,e),n.F_.size===0&&(r.Xo()?r.n_():pi(n)&&n.N_.set("Unknown"))}function Ah(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ge.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ts(t).P_(e)}function dy(t,e){t.L_.xe(e),ts(t).I_(e)}function Rh(t){t.L_=new fA({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),ts(t).start(),t.N_.w_()}function Ph(t){return pi(t)&&!ts(t).Zo()&&t.F_.size>0}function pi(t){return _e(t).M_.size===0}function py(t){t.L_=void 0}async function h1(t){t.N_.set("Online")}async function f1(t){t.F_.forEach((e,n)=>{Ah(t,e)})}async function d1(t,e){py(t),Ph(t)?(t.N_.D_(e),Rh(t)):t.N_.set("Unknown")}async function p1(t,e,n){if(t.N_.set("Online"),e instanceof ey&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.F_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.F_.delete(l),i.L_.removeTarget(l))}(t,e)}catch(r){se("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Qa(t,r)}else if(e instanceof Sa?t.L_.Ke(e):e instanceof Z_?t.L_.He(e):t.L_.We(e),!n.isEqual(ge.min()))try{const r=await cy(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.L_.rt(o);return l.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const f=s.F_.get(u);f&&s.F_.set(u,f.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,u)=>{const f=s.F_.get(c);if(!f)return;s.F_.set(c,f.withResumeToken(Pt.EMPTY_BYTE_STRING,f.snapshotVersion)),dy(s,c);const p=new gr(f.target,c,u,f.sequenceNumber);Ah(s,p)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){se("RemoteStore","Failed to raise snapshot:",r),await Qa(t,r)}}async function Qa(t,e,n){if(!Io(e))throw e;t.M_.add(1),await Po(t),t.N_.set("Offline"),n||(n=()=>cy(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{se("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await Cl(t)})}function my(t,e){return e().catch(n=>Qa(t,n,e))}async function kl(t){const e=_e(t),n=Sr(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;m1(e);)try{const i=await JA(e.localStore,r);if(i===null){e.v_.length===0&&n.n_();break}r=i.batchId,g1(e,i)}catch(i){await Qa(e,i)}gy(e)&&_y(e)}function m1(t){return pi(t)&&t.v_.length<10}function g1(t,e){t.v_.push(e);const n=Sr(t);n.Xo()&&n.E_&&n.d_(e.mutations)}function gy(t){return pi(t)&&!Sr(t).Zo()&&t.v_.length>0}function _y(t){Sr(t).start()}async function _1(t){Sr(t).V_()}async function y1(t){const e=Sr(t);for(const n of t.v_)e.d_(n.mutations)}async function v1(t,e,n){const r=t.v_.shift(),i=yh.from(r,e,n);await my(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await kl(t)}async function w1(t,e){e&&Sr(t).E_&&await async function(r,i){if(function(o){return cA(o)&&o!==$.ABORTED}(i.code)){const s=r.v_.shift();Sr(r).t_(),await my(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await kl(r)}}(t,e),gy(t)&&_y(t)}async function kp(t,e){const n=_e(t);n.asyncQueue.verifyOperationInProgress(),se("RemoteStore","RemoteStore received new credentials");const r=pi(n);n.M_.add(3),await Po(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await Cl(n)}async function b1(t,e){const n=_e(t);e?(n.M_.delete(2),await Cl(n)):e||(n.M_.add(2),await Po(n),n.N_.set("Unknown"))}function ts(t){return t.B_||(t.B_=function(n,r,i){const s=_e(n);return s.f_(),new o1(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:h1.bind(null,t),To:f1.bind(null,t),Ao:d1.bind(null,t),h_:p1.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.t_(),Ph(t)?Rh(t):t.N_.set("Unknown")):(await t.B_.stop(),py(t))})),t.B_}function Sr(t){return t.k_||(t.k_=function(n,r,i){const s=_e(n);return s.f_(),new a1(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:()=>Promise.resolve(),To:_1.bind(null,t),Ao:w1.bind(null,t),R_:y1.bind(null,t),A_:v1.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.t_(),await kl(t)):(await t.k_.stop(),t.v_.length>0&&(se("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Vn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new Sh(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Z($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ch(t,e){if(Un("AsyncQueue",`${e}: ${t}`),Io(t))return new Z($.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||he.comparator(n.key,r.key):(n,r)=>he.comparator(n.key,r.key),this.keyedMap=Ss(),this.sortedSet=new Ye(this.comparator)}static emptySet(e){return new xi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof xi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new xi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp{constructor(){this.q_=new Ye(he.comparator)}track(e){const n=e.doc.key,r=this.q_.get(n);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(n,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(n):e.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):pe():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,r)=>{e.push(r)}),e}}class qi{constructor(e,n,r,i,s,o,l,c,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new qi(e,n,xi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Tl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E1{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class T1{constructor(){this.queries=new es(e=>F_(e),Tl),this.onlineState="Unknown",this.z_=new Set}}async function kh(t,e){const n=_e(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.W_()&&e.G_()&&(r=2):(s=new E1,r=e.G_()?0:1);try{switch(r){case 0:s.K_=await n.onListen(i,!0);break;case 1:s.K_=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=Ch(o,`Initialization of query '${bi(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.U_.push(e),e.j_(n.onlineState),s.K_&&e.H_(s.K_)&&Nh(n)}async function xh(t,e){const n=_e(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.U_.indexOf(e);o>=0&&(s.U_.splice(o,1),s.U_.length===0?i=e.G_()?0:1:!s.W_()&&e.G_()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function I1(t,e){const n=_e(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.U_)l.H_(i)&&(r=!0);o.K_=i}}r&&Nh(n)}function A1(t,e,n){const r=_e(t),i=r.queries.get(e);if(i)for(const s of i.U_)s.onError(n);r.queries.delete(e)}function Nh(t){t.z_.forEach(e=>{e.next()})}var gu,Np;(Np=gu||(gu={})).J_="default",Np.Cache="cache";class Oh{constructor(e,n,r){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new qi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=qi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==gu.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy{constructor(e){this.key=e}}class vy{constructor(e){this.key=e}}class R1{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=Te(),this.mutatedKeys=Te(),this.Ia=U_(e),this.Ta=new xi(this.Ia)}get Ea(){return this.la}da(e,n){const r=n?n.Aa:new xp,i=n?n.Ta:this.Ta;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,p)=>{const m=i.get(f),v=Il(this.query,p)?p:null,C=!!m&&this.mutatedKeys.has(m.key),L=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let N=!1;m&&v?m.data.isEqual(v.data)?C!==L&&(r.track({type:3,doc:v}),N=!0):this.Ra(m,v)||(r.track({type:2,doc:v}),N=!0,(c&&this.Ia(v,c)>0||u&&this.Ia(v,u)<0)&&(l=!0)):!m&&v?(r.track({type:0,doc:v}),N=!0):m&&!v&&(r.track({type:1,doc:m}),N=!0,(c||u)&&(l=!0)),N&&(v?(o=o.add(v),s=L?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Ta:o,Aa:r,Xi:l,mutatedKeys:s}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const o=e.Aa.Q_();o.sort((f,p)=>function(v,C){const L=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return pe()}};return L(v)-L(C)}(f.type,p.type)||this.Ia(f.doc,p.doc)),this.Va(r),i=i!=null&&i;const l=n&&!i?this.ma():[],c=this.Pa.size===0&&this.current&&!i?1:0,u=c!==this.ha;return this.ha=c,o.length!==0||u?{snapshot:new qi(this.query,e.Ta,s,o,e.mutatedKeys,c===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:l}:{fa:l}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new xp,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=Te(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return e.forEach(r=>{this.Pa.has(r)||n.push(new vy(r))}),this.Pa.forEach(r=>{e.has(r)||n.push(new yy(r))}),n}pa(e){this.la=e.hs,this.Pa=Te();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return qi.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class P1{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class S1{constructor(e){this.key=e,this.wa=!1}}class C1{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new es(l=>F_(l),Tl),this.Da=new Map,this.Ca=new Set,this.va=new Ye(he.comparator),this.Fa=new Map,this.Ma=new bh,this.xa={},this.Oa=new Map,this.Na=ji.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function k1(t,e,n=!0){const r=Ay(t);let i;const s=r.ba.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ya()):i=await wy(r,e,n,!0),i}async function x1(t,e){const n=Ay(t);await wy(n,e,!0,!1)}async function wy(t,e,n,r){const i=await ZA(t.localStore,vn(e)),s=i.targetId,o=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let l;return r&&(l=await N1(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&fy(t.remoteStore,i),l}async function N1(t,e,n,r,i){t.Ba=(p,m,v)=>async function(L,N,x,k){let V=N.view.da(x);V.Xi&&(V=await Pp(L.localStore,N.query,!1).then(({documents:T})=>N.view.da(T,V)));const U=k&&k.targetChanges.get(N.targetId),ne=k&&k.targetMismatches.get(N.targetId)!=null,K=N.view.applyChanges(V,L.isPrimaryClient,U,ne);return Dp(L,N.targetId,K.fa),K.snapshot}(t,p,m,v);const s=await Pp(t.localStore,e,!0),o=new R1(e,s.hs),l=o.da(s.documents),c=Ro.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(l,t.isPrimaryClient,c);Dp(t,n,u.fa);const f=new P1(e,n,o);return t.ba.set(e,f),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),u.snapshot}async function O1(t,e,n){const r=_e(t),i=r.ba.get(e),s=r.Da.get(i.targetId);if(s.length>1)return r.Da.set(i.targetId,s.filter(o=>!Tl(o,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await mu(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&Ih(r.remoteStore,i.targetId),_u(r,i.targetId)}).catch(To)):(_u(r,i.targetId),await mu(r.localStore,i.targetId,!0))}async function D1(t,e){const n=_e(t),r=n.ba.get(e),i=n.Da.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Ih(n.remoteStore,r.targetId))}async function L1(t,e,n){const r=j1(t);try{const i=await function(o,l){const c=_e(o),u=ot.now(),f=l.reduce((v,C)=>v.add(C.key),Te());let p,m;return c.persistence.runTransaction("Locally write mutations","readwrite",v=>{let C=$n(),L=Te();return c.os.getEntries(v,f).next(N=>{C=N,C.forEach((x,k)=>{k.isValidDocument()||(L=L.add(x))})}).next(()=>c.localDocuments.getOverlayedDocuments(v,C)).next(N=>{p=N;const x=[];for(const k of l){const V=iA(k,p.get(k.key).overlayedDocument);V!=null&&x.push(new Vr(k.key,V,k_(V.value.mapValue),Jt.exists(!0)))}return c.mutationQueue.addMutationBatch(v,u,x,l)}).next(N=>{m=N;const x=N.applyToLocalDocumentSet(p,L);return c.documentOverlayCache.saveOverlays(v,N.batchId,x)})}).then(()=>({batchId:m.batchId,changes:B_(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,c){let u=o.xa[o.currentUser.toKey()];u||(u=new Ye(xe)),u=u.insert(l,c),o.xa[o.currentUser.toKey()]=u}(r,i.batchId,n),await So(r,i.changes),await kl(r.remoteStore)}catch(i){const s=Ch(i,"Failed to persist write");n.reject(s)}}async function by(t,e){const n=_e(t);try{const r=await YA(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Fa.get(s);o&&(Fe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.wa=!0:i.modifiedDocuments.size>0?Fe(o.wa):i.removedDocuments.size>0&&(Fe(o.wa),o.wa=!1))}),await So(n,r,e)}catch(r){await To(r)}}function Op(t,e,n){const r=_e(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ba.forEach((s,o)=>{const l=o.view.j_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const c=_e(o);c.onlineState=l;let u=!1;c.queries.forEach((f,p)=>{for(const m of p.U_)m.j_(l)&&(u=!0)}),u&&Nh(c)}(r.eventManager,e),i.length&&r.Sa.h_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function V1(t,e,n){const r=_e(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Fa.get(e),s=i&&i.key;if(s){let o=new Ye(he.comparator);o=o.insert(s,Tt.newNoDocument(s,ge.min()));const l=Te().add(s),c=new Pl(ge.min(),new Map,new Ye(xe),o,l);await by(r,c),r.va=r.va.remove(s),r.Fa.delete(e),Dh(r)}else await mu(r.localStore,e,!1).then(()=>_u(r,e,n)).catch(To)}async function M1(t,e){const n=_e(t),r=e.batch.batchId;try{const i=await QA(n.localStore,e);Ty(n,r,null),Ey(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await So(n,i)}catch(i){await To(i)}}async function F1(t,e,n){const r=_e(t);try{const i=await function(o,l){const c=_e(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let f;return c.mutationQueue.lookupMutationBatch(u,l).next(p=>(Fe(p!==null),f=p.keys(),c.mutationQueue.removeMutationBatch(u,p))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,f,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f)).next(()=>c.localDocuments.getDocuments(u,f))})}(r.localStore,e);Ty(r,e,n),Ey(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await So(r,i)}catch(i){await To(i)}}function Ey(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function Ty(t,e,n){const r=_e(t);let i=r.xa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.xa[r.currentUser.toKey()]=i}}function _u(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Da.get(e))t.ba.delete(r),n&&t.Sa.ka(r,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Vr(e).forEach(r=>{t.Ma.containsKey(r)||Iy(t,r)})}function Iy(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&(Ih(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),Dh(t))}function Dp(t,e,n){for(const r of n)r instanceof yy?(t.Ma.addReference(r.key,e),U1(t,r)):r instanceof vy?(se("SyncEngine","Document no longer in limbo: "+r.key),t.Ma.removeReference(r.key,e),t.Ma.containsKey(r.key)||Iy(t,r.key)):pe()}function U1(t,e){const n=e.key,r=n.path.canonicalString();t.va.get(n)||t.Ca.has(r)||(se("SyncEngine","New document in limbo: "+n),t.Ca.add(r),Dh(t))}function Dh(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new he(Be.fromString(e)),r=t.Na.next();t.Fa.set(r,new S1(n)),t.va=t.va.insert(n,r),fy(t.remoteStore,new gr(vn(El(n.path)),r,"TargetPurposeLimboResolution",hh.oe))}}async function So(t,e,n){const r=_e(t),i=[],s=[],o=[];r.ba.isEmpty()||(r.ba.forEach((l,c)=>{o.push(r.Ba(c,e,n).then(u=>{if((u||n)&&r.isPrimaryClient){const f=u&&!u.fromCache;r.sharedClientState.updateQueryState(c.targetId,f?"current":"not-current")}if(u){i.push(u);const f=Th.Ki(c.targetId,u);s.push(f)}}))}),await Promise.all(o),r.Sa.h_(i),await async function(c,u){const f=_e(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>q.forEach(u,m=>q.forEach(m.qi,v=>f.persistence.referenceDelegate.addReference(p,m.targetId,v)).next(()=>q.forEach(m.Qi,v=>f.persistence.referenceDelegate.removeReference(p,m.targetId,v)))))}catch(p){if(!Io(p))throw p;se("LocalStore","Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const v=f.ns.get(m),C=v.snapshotVersion,L=v.withLastLimboFreeSnapshotVersion(C);f.ns=f.ns.insert(m,L)}}}(r.localStore,s))}async function $1(t,e){const n=_e(t);if(!n.currentUser.isEqual(e)){se("SyncEngine","User change. New user:",e.toKey());const r=await ly(n.localStore,e);n.currentUser=e,function(s,o){s.Oa.forEach(l=>{l.forEach(c=>{c.reject(new Z($.CANCELLED,o))})}),s.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await So(n,r.us)}}function B1(t,e){const n=_e(t),r=n.Fa.get(e);if(r&&r.wa)return Te().add(r.key);{let i=Te();const s=n.Da.get(e);if(!s)return i;for(const o of s){const l=n.ba.get(o);i=i.unionWith(l.view.Ea)}return i}}function Ay(t){const e=_e(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=by.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=B1.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=V1.bind(null,e),e.Sa.h_=I1.bind(null,e.eventManager),e.Sa.ka=A1.bind(null,e.eventManager),e}function j1(t){const e=_e(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=M1.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=F1.bind(null,e),e}class Lp{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Sl(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return GA(this.persistence,new WA,e.initialUser,this.serializer)}createPersistence(e){return new qA(Eh.Hr,this.serializer)}createSharedClientState(e){return new t1}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class q1{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Op(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=$1.bind(null,this.syncEngine),await b1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new T1}()}createDatastore(e){const n=Sl(e.databaseInfo.databaseId),r=function(s){return new s1(s)}(e.databaseInfo);return function(s,o,l,c){return new l1(s,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new u1(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Op(this.syncEngine,n,0),function(){return Cp.D()?new Cp:new n1}())}createSyncEngine(e,n){return function(i,s,o,l,c,u,f){const p=new C1(i,s,o,l,c,u);return f&&(p.La=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=_e(r);se("RemoteStore","RemoteStore shutting down."),i.M_.add(5),await Po(i),i.O_.shutdown(),i.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):Un("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z1{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Et.UNAUTHENTICATED,this.clientId=P_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{se("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(se("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Z($.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Vn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Ch(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function kc(t,e){t.asyncQueue.verifyOperationInProgress(),se("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await ly(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Vp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await W1(t);se("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>kp(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>kp(e.remoteStore,i)),t._onlineComponents=e}function H1(t){return t.name==="FirebaseError"?t.code===$.FAILED_PRECONDITION||t.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function W1(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){se("FirestoreClient","Using user provided OfflineComponentProvider");try{await kc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!H1(n))throw n;Mi("Error using user provided cache. Falling back to memory cache: "+n),await kc(t,new Lp)}}else se("FirestoreClient","Using default OfflineComponentProvider"),await kc(t,new Lp);return t._offlineComponents}async function Ry(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(se("FirestoreClient","Using user provided OnlineComponentProvider"),await Vp(t,t._uninitializedComponentsProvider._online)):(se("FirestoreClient","Using default OnlineComponentProvider"),await Vp(t,new q1))),t._onlineComponents}function K1(t){return Ry(t).then(e=>e.syncEngine)}async function Ya(t){const e=await Ry(t),n=e.eventManager;return n.onListen=k1.bind(null,e.syncEngine),n.onUnlisten=O1.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=x1.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=D1.bind(null,e.syncEngine),n}function G1(t,e,n={}){const r=new Vn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,c,u){const f=new Lh({next:m=>{o.enqueueAndForget(()=>xh(s,p));const v=m.docs.has(l);!v&&m.fromCache?u.reject(new Z($.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&m.fromCache&&c&&c.source==="server"?u.reject(new Z($.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new Oh(El(l.path),f,{includeMetadataChanges:!0,ra:!0});return kh(s,p)}(await Ya(t),t.asyncQueue,e,n,r)),r.promise}function Q1(t,e,n={}){const r=new Vn;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,c,u){const f=new Lh({next:m=>{o.enqueueAndForget(()=>xh(s,p)),m.fromCache&&c.source==="server"?u.reject(new Z($.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new Oh(l,f,{includeMetadataChanges:!0,ra:!0});return kh(s,p)}(await Ya(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Py(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mp=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sy(t,e,n){if(!n)throw new Z($.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Y1(t,e,n,r){if(e===!0&&r===!0)throw new Z($.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Fp(t){if(!he.isDocumentKey(t))throw new Z($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Up(t){if(he.isDocumentKey(t))throw new Z($.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function xl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":pe()}function Ft(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Z($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=xl(t);throw new Z($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function X1(t,e){if(e<=0)throw new Z($.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $p{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Z($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Z($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Y1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Py((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new Z($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new Z($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new Z($.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Nl{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new $p({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Z($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new Z($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new $p(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new pI;switch(r.type){case"firstParty":return new yI(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Z($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Mp.get(n);r&&(se("ComponentProvider","Removing Datastore"),Mp.delete(n),r.terminate())}(this),Promise.resolve()}}function J1(t,e,n,r={}){var i;const s=(t=Ft(t,Nl))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Mi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=Et.MOCK_USER;else{l=d_(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new Z($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Et(u)}t._authCredentials=new mI(new R_(l,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Kn(this.firestore,e,this._query)}}class Rt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new br(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Rt(this.firestore,e,this._key)}}class br extends Kn{constructor(e,n,r){super(e,n,El(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Rt(this.firestore,null,new he(e))}withConverter(e){return new br(this.firestore,e,this._path)}}function ns(t,e,...n){if(t=We(t),Sy("collection","path",e),t instanceof Nl){const r=Be.fromString(e,...n);return Up(r),new br(t,null,r)}{if(!(t instanceof Rt||t instanceof br))throw new Z($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Be.fromString(e,...n));return Up(r),new br(t.firestore,null,r)}}function Gn(t,e,...n){if(t=We(t),arguments.length===1&&(e=P_.newId()),Sy("doc","path",e),t instanceof Nl){const r=Be.fromString(e,...n);return Fp(r),new Rt(t,null,new he(r))}{if(!(t instanceof Rt||t instanceof br))throw new Z($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Be.fromString(e,...n));return Fp(r),new Rt(t.firestore,t instanceof br?t.converter:null,new he(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z1{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new uy(this,"async_queue_retry"),this.hu=()=>{const n=Cc();n&&se("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=Cc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=Cc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new Vn;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!Io(e))throw e;se("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Un("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const i=Sh.createAndSchedule(this,e,n,r,s=>this.Eu(s));return this._u.push(i),i}Pu(){this.au&&pe()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}function Bp(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}class Bn extends Nl{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new Z1}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Cy(this),this._firestoreClient.terminate()}}function eR(t,e){const n=typeof t=="object"?t:ch(),r=typeof t=="string"?t:e||"(default)",i=wl(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=u_("firestore");s&&J1(i,...s)}return i}function Ol(t){return t._firestoreClient||Cy(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Cy(t){var e,n,r;const i=t._freezeSettings(),s=function(l,c,u,f){return new xI(l,c,u,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Py(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new z1(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new zi(Pt.fromBase64String(e))}catch(n){throw new Z($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new zi(Pt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new Z($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new gt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new Z($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new Z($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return xe(this._lat,e._lat)||xe(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tR=/^__.*__$/;class nR{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Vr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ao(e,this.data,n,this.fieldTransforms)}}class ky{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Vr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function xy(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw pe()}}class Ll{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.mu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new Ll(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.wu(e),i}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.gu({path:r,yu:!1});return i.mu(),i}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return Xa(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(xy(this.fu)&&tR.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class rR{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Sl(e)}Fu(e,n,r,i=!1){return new Ll({fu:e,methodName:n,vu:r,path:gt.emptyPath(),yu:!1,Cu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Vl(t){const e=t._freezeSettings(),n=Sl(t._databaseId);return new rR(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Ny(t,e,n,r,i,s={}){const o=t.Fu(s.merge||s.mergeFields?2:0,e,n,i);Uh("Data must be an object, but it was:",o,r);const l=Oy(r,o);let c,u;if(s.merge)c=new Wt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const p of s.mergeFields){const m=yu(e,p,n);if(!o.contains(m))throw new Z($.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);Ly(f,m)||f.push(m)}c=new Wt(f),u=o.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,u=o.fieldTransforms;return new nR(new Mt(l),c,u)}class Ml extends Co{_toFieldTransform(e){if(e.fu!==2)throw e.fu===1?e.Du(`${this._methodName}() can only appear at the top level of your update data`):e.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ml}}function iR(t,e,n){return new Ll({fu:3,vu:e.settings.vu,methodName:t._methodName,yu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Mh extends Co{_toFieldTransform(e){return new Q_(e.path,new ao)}isEqual(e){return e instanceof Mh}}class Fh extends Co{constructor(e,n){super(e),this.Mu=n}_toFieldTransform(e){const n=iR(this,e,!0),r=this.Mu.map(s=>rs(s,n)),i=new Bi(r);return new Q_(e.path,i)}isEqual(e){return e instanceof Fh&&eo(this.Mu,e.Mu)}}function sR(t,e,n,r){const i=t.Fu(1,e,n);Uh("Data must be an object, but it was:",i,r);const s=[],o=Mt.empty();di(r,(c,u)=>{const f=$h(e,c,n);u=We(u);const p=i.Su(f);if(u instanceof Ml)s.push(f);else{const m=rs(u,p);m!=null&&(s.push(f),o.set(f,m))}});const l=new Wt(s);return new ky(o,l,i.fieldTransforms)}function oR(t,e,n,r,i,s){const o=t.Fu(1,e,n),l=[yu(e,r,n)],c=[i];if(s.length%2!=0)throw new Z($.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)l.push(yu(e,s[m])),c.push(s[m+1]);const u=[],f=Mt.empty();for(let m=l.length-1;m>=0;--m)if(!Ly(u,l[m])){const v=l[m];let C=c[m];C=We(C);const L=o.Su(v);if(C instanceof Ml)u.push(v);else{const N=rs(C,L);N!=null&&(u.push(v),f.set(v,N))}}const p=new Wt(u);return new ky(f,p,o.fieldTransforms)}function aR(t,e,n,r=!1){return rs(n,t.Fu(r?4:3,e))}function rs(t,e){if(Dy(t=We(t)))return Uh("Unsupported field value:",e,t),Oy(t,e);if(t instanceof Co)return function(r,i){if(!xy(i.fu))throw i.Du(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Du(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let c=rs(l,i.bu(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=We(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return JI(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=ot.fromDate(r);return{timestampValue:Ga(i.serializer,s)}}if(r instanceof ot){const s=new ot(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ga(i.serializer,s)}}if(r instanceof Vh)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof zi)return{bytesValue:ty(i.serializer,r._byteString)};if(r instanceof Rt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:wh(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Du(`Unsupported field value: ${xl(r)}`)}(t,e)}function Oy(t,e){const n={};return S_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):di(t,(r,i)=>{const s=rs(i,e.pu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Dy(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ot||t instanceof Vh||t instanceof zi||t instanceof Rt||t instanceof Co)}function Uh(t,e,n){if(!Dy(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=xl(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}function yu(t,e,n){if((e=We(e))instanceof Dl)return e._internalPath;if(typeof e=="string")return $h(t,e);throw Xa("Field path arguments must be of type string or ",t,!1,void 0,n)}const lR=new RegExp("[~\\*/\\[\\]]");function $h(t,e,n){if(e.search(lR)>=0)throw Xa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Dl(...e.split("."))._internalPath}catch{throw Xa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Xa(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new Z($.INVALID_ARGUMENT,l+t+c)}function Ly(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Rt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new cR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Fl("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class cR extends Vy{data(){return super.data()}}function Fl(t,e){return typeof e=="string"?$h(t,e):e instanceof Dl?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function My(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new Z($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Bh{}class jh extends Bh{}function qh(t,e,...n){let r=[];e instanceof Bh&&r.push(e),r=r.concat(n),function(s){const o=s.filter(c=>c instanceof zh).length,l=s.filter(c=>c instanceof Ul).length;if(o>1||o>0&&l>0)throw new Z($.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Ul extends jh{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Ul(e,n,r)}_apply(e){const n=this._parse(e);return Fy(e._query,n),new Kn(e.firestore,e.converter,uu(e._query,n))}_parse(e){const n=Vl(e.firestore);return function(s,o,l,c,u,f,p){let m;if(u.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new Z($.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){qp(p,f);const v=[];for(const C of p)v.push(jp(c,s,C));m={arrayValue:{values:v}}}else m=jp(c,s,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||qp(p,f),m=aR(l,o,p,f==="in"||f==="not-in");return st.create(u,f,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function uR(t,e,n){const r=e,i=Fl("where",t);return Ul._create(i,r,n)}class zh extends Bh{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new zh(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:on.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const l=s.getFlattenedFilters();for(const c of l)Fy(o,c),o=uu(o,c)}(e._query,n),new Kn(e.firestore,e.converter,uu(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Hh extends jh{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Hh(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new Z($.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new Z($.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new oo(s,o)}(e._query,this._field,this._direction);return new Kn(e.firestore,e.converter,function(i,s){const o=i.explicitOrderBy.concat([s]);return new Zi(i.path,i.collectionGroup,o,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}(e._query,n))}}function hR(t,e="asc"){const n=e,r=Fl("orderBy",t);return Hh._create(r,n)}class Wh extends jh{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Wh(e,n,r)}_apply(e){return new Kn(e.firestore,e.converter,Wa(e._query,this._limit,this._limitType))}}function fR(t){return X1("limit",t),Wh._create("limit",t,"F")}function jp(t,e,n){if(typeof(n=We(n))=="string"){if(n==="")throw new Z($.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!M_(e)&&n.indexOf("/")!==-1)throw new Z($.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Be.fromString(n));if(!he.isDocumentKey(r))throw new Z($.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return up(t,new he(r))}if(n instanceof Rt)return up(t,n._key);throw new Z($.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${xl(n)}.`)}function qp(t,e){if(!Array.isArray(t)||t.length===0)throw new Z($.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Fy(t,e){const n=function(i,s){for(const o of i)for(const l of o.getFlattenedFilters())if(s.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new Z($.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Z($.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class dR{convertValue(e,n="none"){switch(si(e)){case 0:return null;case 1:return e.booleanValue;case 2:return it(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ii(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw pe()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return di(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Vh(it(e.latitude),it(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=dh(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ro(e));default:return null}}convertTimestamp(e){const n=Pr(e);return new ot(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Be.fromString(e);Fe(ay(r));const i=new io(r.get(1),r.get(3)),s=new he(r.popFirst(5));return i.isEqual(n)||Un(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uy(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class $y extends Vy{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ca(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Fl("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ca extends $y{data(e={}){return super.data(e)}}class By{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ks(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ca(this._firestore,this._userDataWriter,r.key,r,new ks(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new Z($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const c=new Ca(i._firestore,i._userDataWriter,l.doc.key,l.doc,new ks(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const c=new Ca(i._firestore,i._userDataWriter,l.doc.key,l.doc,new ks(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,f=-1;return l.type!==0&&(u=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:pR(l.type),doc:c,oldIndex:u,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function pR(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return pe()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $l(t){t=Ft(t,Rt);const e=Ft(t.firestore,Bn);return G1(Ol(e),t._key).then(n=>Hy(e,t,n))}class Kh extends dR{constructor(e){super(),this.firestore=e}convertBytes(e){return new zi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Rt(this.firestore,null,n)}}function jy(t){t=Ft(t,Kn);const e=Ft(t.firestore,Bn),n=Ol(e),r=new Kh(e);return My(t._query),Q1(n,t._query).then(i=>new By(e,r,t,i))}function mR(t,e,n){t=Ft(t,Rt);const r=Ft(t.firestore,Bn),i=Uy(t.converter,e,n);return Bl(r,[Ny(Vl(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Jt.none())])}function qy(t,e,n,...r){t=Ft(t,Rt);const i=Ft(t.firestore,Bn),s=Vl(i);let o;return o=typeof(e=We(e))=="string"||e instanceof Dl?oR(s,"updateDoc",t._key,e,n,r):sR(s,"updateDoc",t._key,e),Bl(i,[o.toMutation(t._key,Jt.exists(!0))])}function gR(t){return Bl(Ft(t.firestore,Bn),[new _h(t._key,Jt.none())])}function Gh(t,e){const n=Ft(t.firestore,Bn),r=Gn(t),i=Uy(t.converter,e);return Bl(n,[Ny(Vl(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Jt.exists(!1))]).then(()=>r)}function zy(t,...e){var n,r,i;t=We(t);let s={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Bp(e[o])||(s=e[o],o++);const l={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(Bp(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(i=p.complete)===null||i===void 0?void 0:i.bind(p)}let c,u,f;if(t instanceof Rt)u=Ft(t.firestore,Bn),f=El(t._key.path),c={next:p=>{e[o]&&e[o](Hy(u,t,p))},error:e[o+1],complete:e[o+2]};else{const p=Ft(t,Kn);u=Ft(p.firestore,Bn),f=p._query;const m=new Kh(u);c={next:v=>{e[o]&&e[o](new By(u,m,p,v))},error:e[o+1],complete:e[o+2]},My(t._query)}return function(m,v,C,L){const N=new Lh(L),x=new Oh(v,N,C);return m.asyncQueue.enqueueAndForget(async()=>kh(await Ya(m),x)),()=>{N.$a(),m.asyncQueue.enqueueAndForget(async()=>xh(await Ya(m),x))}}(Ol(u),f,l,c)}function Bl(t,e){return function(r,i){const s=new Vn;return r.asyncQueue.enqueueAndForget(async()=>L1(await K1(r),i,s)),s.promise}(Ol(t),e)}function Hy(t,e,n){const r=n.docs.get(e._key),i=new Kh(t);return new $y(t,i,e._key,r,new ks(n.hasPendingWrites,n.fromCache),e.converter)}function Wy(){return new Mh("serverTimestamp")}function _R(...t){return new Fh("arrayUnion",t)}(function(e,n=!0){(function(i){Ji=i})(fi),ni(new Ar("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new Bn(new gI(r.getProvider("auth-internal")),new wI(r.getProvider("app-check-internal")),function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new Z($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new io(u.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),yn(op,"4.6.3",e),yn(op,"4.6.3","esm2017")})();function Qh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Ky(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const yR=Ky,Gy=new bo("auth","Firebase",Ky());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ja=new ah("@firebase/auth");function vR(t,...e){Ja.logLevel<=Re.WARN&&Ja.warn(`Auth (${fi}): ${t}`,...e)}function ka(t,...e){Ja.logLevel<=Re.ERROR&&Ja.error(`Auth (${fi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(t,...e){throw Yh(t,...e)}function bn(t,...e){return Yh(t,...e)}function Qy(t,e,n){const r=Object.assign(Object.assign({},yR()),{[e]:n});return new bo("auth","Firebase",r).create(e,{appName:t.name})}function Mn(t){return Qy(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Yh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Gy.create(t,...e)}function fe(t,e,...n){if(!t)throw Yh(e,...n)}function xn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ka(e),new Error(e)}function jn(t,e){t||xn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function wR(){return zp()==="http:"||zp()==="https:"}function zp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(wR()||KE()||"connection"in navigator)?navigator.onLine:!0}function ER(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e,n){this.shortDelay=e,this.longDelay=n,jn(n>e,"Short delay should be less than long delay!"),this.isMobile=HE()||GE()}get(){return bR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xh(t,e){jn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;xn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;xn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;xn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IR=new ko(3e4,6e4);function Mr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Qn(t,e,n,r,i={}){return Xy(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Eo(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Yy.fetch()(Jy(t,t.config.apiHost,n,l),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function Xy(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},TR),e);try{const i=new RR(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw la(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw la(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw la(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw la(t,"user-disabled",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Qy(t,f,u);an(t,f)}}catch(i){if(i instanceof An)throw i;an(t,"network-request-failed",{message:String(i)})}}async function xo(t,e,n,r,i={}){const s=await Qn(t,e,n,r,i);return"mfaPendingCredential"in s&&an(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Jy(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Xh(t.config,i):`${t.config.apiScheme}://${i}`}function AR(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class RR{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(bn(this.auth,"network-request-failed")),IR.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function la(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=bn(t,e,r);return i.customData._tokenResponse=n,i}function Hp(t){return t!==void 0&&t.enterprise!==void 0}class PR{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return AR(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function SR(t,e){return Qn(t,"GET","/v2/recaptchaConfig",Mr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CR(t,e){return Qn(t,"POST","/v1/accounts:delete",e)}async function Zy(t,e){return Qn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function kR(t,e=!1){const n=We(t),r=await n.getIdToken(e),i=Jh(r);fe(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:qs(xc(i.auth_time)),issuedAtTime:qs(xc(i.iat)),expirationTime:qs(xc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function xc(t){return Number(t)*1e3}function Jh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ka("JWT malformed, contained fewer than 3 sections"),null;try{const i=l_(n);return i?JSON.parse(i):(ka("Failed to decode base64 JWT payload"),null)}catch(i){return ka("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Wp(t){const e=Jh(t);return fe(e,"internal-error"),fe(typeof e.exp<"u","internal-error"),fe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof An&&xR(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function xR({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=qs(this.lastLoginAt),this.creationTime=qs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Za(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Hi(t,Zy(n,{idToken:r}));fe(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?ev(s.providerUserInfo):[],l=DR(t.providerData,o),c=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=c?u:!1,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new wu(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function OR(t){const e=We(t);await Za(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function DR(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function ev(t){return t.map(e=>{var{providerId:n}=e,r=Qh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LR(t,e){const n=await Xy(t,{},async()=>{const r=Eo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Jy(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Yy.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function VR(t,e){return Qn(t,"POST","/v2/accounts:revokeToken",Mr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){fe(e.idToken,"internal-error"),fe(typeof e.idToken<"u","internal-error"),fe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Wp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){fe(e.length!==0,"internal-error");const n=Wp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(fe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await LR(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ni;return r&&(fe(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(fe(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(fe(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ni,this.toJSON())}_performRefresh(){return xn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(t,e){fe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Nn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Qh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new NR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new wu(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Hi(this,this.stsTokenManager.getToken(this.auth,e));return fe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return kR(this,e)}reload(){return OR(this)}_assign(e){this!==e&&(fe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Nn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){fe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Za(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(pn(this.auth.app))return Promise.reject(Mn(this.auth));const e=await this.getIdToken();return await Hi(this,CR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,c,u,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,v=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,L=(l=n.tenantId)!==null&&l!==void 0?l:void 0,N=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,x=(u=n.createdAt)!==null&&u!==void 0?u:void 0,k=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:V,emailVerified:U,isAnonymous:ne,providerData:K,stsTokenManager:T}=n;fe(V&&T,e,"internal-error");const y=Ni.fromJSON(this.name,T);fe(typeof V=="string",e,"internal-error"),sr(p,e.name),sr(m,e.name),fe(typeof U=="boolean",e,"internal-error"),fe(typeof ne=="boolean",e,"internal-error"),sr(v,e.name),sr(C,e.name),sr(L,e.name),sr(N,e.name),sr(x,e.name),sr(k,e.name);const w=new Nn({uid:V,auth:e,email:m,emailVerified:U,displayName:p,isAnonymous:ne,photoURL:C,phoneNumber:v,tenantId:L,stsTokenManager:y,createdAt:x,lastLoginAt:k});return K&&Array.isArray(K)&&(w.providerData=K.map(I=>Object.assign({},I))),N&&(w._redirectEventId=N),w}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ni;i.updateFromServerResponse(n);const s=new Nn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Za(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];fe(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?ev(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Ni;l.updateFromIdToken(r);const c=new Nn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new wu(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kp=new Map;function On(t){jn(t instanceof Function,"Expected a class definition");let e=Kp.get(t);return e?(jn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Kp.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}tv.type="NONE";const Gp=tv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xa(t,e,n){return`firebase:${t}:${e}:${n}`}class Oi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=xa(this.userKey,i.apiKey,s),this.fullPersistenceKey=xa("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Nn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Oi(On(Gp),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||On(Gp);const o=xa(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const f=await u._get(o);if(f){const p=Nn._fromJSON(e,f);u!==s&&(l=p),s=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Oi(s,e,r):(s=c[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Oi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(iv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(nv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ov(e))return"Blackberry";if(av(e))return"Webos";if(Zh(e))return"Safari";if((e.includes("chrome/")||rv(e))&&!e.includes("edge/"))return"Chrome";if(sv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function nv(t=yt()){return/firefox\//i.test(t)}function Zh(t=yt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function rv(t=yt()){return/crios\//i.test(t)}function iv(t=yt()){return/iemobile/i.test(t)}function sv(t=yt()){return/android/i.test(t)}function ov(t=yt()){return/blackberry/i.test(t)}function av(t=yt()){return/webos/i.test(t)}function jl(t=yt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function MR(t=yt()){var e;return jl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function FR(){return QE()&&document.documentMode===10}function lv(t=yt()){return jl(t)||sv(t)||av(t)||ov(t)||/windows phone/i.test(t)||iv(t)}function UR(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cv(t,e=[]){let n;switch(t){case"Browser":n=Qp(yt());break;case"Worker":n=`${Qp(yt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${fi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $R{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const c=e(s);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BR(t,e={}){return Qn(t,"GET","/v2/passwordPolicy",Mr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jR=6;class qR{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:jR,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zR{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Yp(this),this.idTokenSubscription=new Yp(this),this.beforeStateQueue=new $R(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Gy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=On(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Oi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Zy(this,{idToken:e}),r=await Nn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(pn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return fe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Za(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ER()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(pn(this.app))return Promise.reject(Mn(this));const n=e?We(e):null;return n&&fe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&fe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return pn(this.app)?Promise.reject(Mn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return pn(this.app)?Promise.reject(Mn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(On(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await BR(this),n=new qR(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new bo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await VR(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&On(e)||this._popupRedirectResolver;fe(n,this,"argument-error"),this.redirectPersistenceManager=await Oi.create(this,[On(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(fe(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,i);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return fe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=cv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&vR(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function mi(t){return We(t)}class Yp{constructor(e){this.auth=e,this.observer=null,this.addObserver=rT(n=>this.observer=n)}get next(){return fe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ql={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function HR(t){ql=t}function uv(t){return ql.loadJS(t)}function WR(){return ql.recaptchaEnterpriseScript}function KR(){return ql.gapiScript}function GR(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const QR="recaptcha-enterprise",YR="NO_RECAPTCHA";class XR{constructor(e){this.type=QR,this.auth=mi(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{SR(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new PR(c);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(c=>{l(c)})})}function i(s,o,l){const c=window.grecaptcha;Hp(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(YR)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&Hp(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=WR();c.length!==0&&(c+=l),uv(c).then(()=>{i(l,s,o)}).catch(u=>{o(u)})}}).catch(l=>{o(l)})})}}async function Xp(t,e,n,r=!1){const i=new XR(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function bu(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Xp(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Xp(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JR(t,e){const n=wl(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(eo(s,e??{}))return i;an(i,"already-initialized")}return n.initialize({options:e})}function ZR(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(On);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function eP(t,e,n){const r=mi(t);fe(r._canInitEmulator,r,"emulator-config-failed"),fe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=hv(e),{host:o,port:l}=tP(e),c=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||nP()}function hv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function tP(t){const e=hv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Jp(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Jp(o)}}}function Jp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function nP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return xn("not implemented")}_getIdTokenResponse(e){return xn("not implemented")}_linkToIdToken(e,n){return xn("not implemented")}_getReauthenticationResolver(e){return xn("not implemented")}}async function rP(t,e){return Qn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iP(t,e){return xo(t,"POST","/v1/accounts:signInWithPassword",Mr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sP(t,e){return xo(t,"POST","/v1/accounts:signInWithEmailLink",Mr(t,e))}async function oP(t,e){return xo(t,"POST","/v1/accounts:signInWithEmailLink",Mr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co extends ef{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new co(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new co(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return bu(e,n,"signInWithPassword",iP);case"emailLink":return sP(e,{email:this._email,oobCode:this._password});default:an(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return bu(e,r,"signUpPassword",rP);case"emailLink":return oP(e,{idToken:n,email:this._email,oobCode:this._password});default:an(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Di(t,e){return xo(t,"POST","/v1/accounts:signInWithIdp",Mr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aP="http://localhost";class oi extends ef{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new oi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):an("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Qh(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new oi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Di(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Di(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Di(e,n)}buildRequest(){const e={requestUri:aP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Eo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lP(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function cP(t){const e=As(Rs(t)).link,n=e?As(Rs(e)).deep_link_id:null,r=As(Rs(t)).deep_link_id;return(r?As(Rs(r)).link:null)||r||n||e||t}class tf{constructor(e){var n,r,i,s,o,l;const c=As(Rs(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,f=(r=c.oobCode)!==null&&r!==void 0?r:null,p=lP((i=c.mode)!==null&&i!==void 0?i:null);fe(u&&f&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=f,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=cP(e);try{return new tf(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(){this.providerId=is.PROVIDER_ID}static credential(e,n){return co._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=tf.parseLink(n);return fe(r,"argument-error"),co._fromEmailAndCode(e,r.code,r.tenantId)}}is.PROVIDER_ID="password";is.EMAIL_PASSWORD_SIGN_IN_METHOD="password";is.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No extends fv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr extends No{constructor(){super("facebook.com")}static credential(e){return oi._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hr.credential(e.oauthAccessToken)}catch{return null}}}hr.FACEBOOK_SIGN_IN_METHOD="facebook.com";hr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr extends No{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return oi._fromParams({providerId:fr.PROVIDER_ID,signInMethod:fr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return fr.credentialFromTaggedObject(e)}static credentialFromError(e){return fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return fr.credential(n,r)}catch{return null}}}fr.GOOGLE_SIGN_IN_METHOD="google.com";fr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr extends No{constructor(){super("github.com")}static credential(e){return oi._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dr.credentialFromTaggedObject(e)}static credentialFromError(e){return dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dr.credential(e.oauthAccessToken)}catch{return null}}}dr.GITHUB_SIGN_IN_METHOD="github.com";dr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr extends No{constructor(){super("twitter.com")}static credential(e,n){return oi._fromParams({providerId:pr.PROVIDER_ID,signInMethod:pr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return pr.credentialFromTaggedObject(e)}static credentialFromError(e){return pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return pr.credential(n,r)}catch{return null}}}pr.TWITTER_SIGN_IN_METHOD="twitter.com";pr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uP(t,e){return xo(t,"POST","/v1/accounts:signUp",Mr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Nn._fromIdTokenResponse(e,r,i),o=Zp(r);return new ai({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Zp(r);return new ai({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Zp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el extends An{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,el.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new el(e,n,r,i)}}function dv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?el._fromErrorAndOperation(t,s,e,r):s})}async function hP(t,e,n=!1){const r=await Hi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ai._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fP(t,e,n=!1){const{auth:r}=t;if(pn(r.app))return Promise.reject(Mn(r));const i="reauthenticate";try{const s=await Hi(t,dv(r,i,e,t),n);fe(s.idToken,r,"internal-error");const o=Jh(s.idToken);fe(o,r,"internal-error");const{sub:l}=o;return fe(t.uid===l,r,"user-mismatch"),ai._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&an(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pv(t,e,n=!1){if(pn(t.app))return Promise.reject(Mn(t));const r="signIn",i=await dv(t,r,e),s=await ai._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function dP(t,e){return pv(mi(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mv(t){const e=mi(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function pP(t,e,n){if(pn(t.app))return Promise.reject(Mn(t));const r=mi(t),o=await bu(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",uP).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&mv(t),c}),l=await ai._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function mP(t,e,n){return pn(t.app)?Promise.reject(Mn(t)):dP(We(t),is.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&mv(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gP(t,e){return Qn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _P(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=We(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Hi(r,gP(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:c})=>c==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function yP(t,e,n,r){return We(t).onIdTokenChanged(e,n,r)}function vP(t,e,n){return We(t).beforeAuthStateChanged(e,n)}function wP(t,e,n,r){return We(t).onAuthStateChanged(e,n,r)}function bP(t){return We(t).signOut()}const tl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(tl,"1"),this.storage.removeItem(tl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EP(){const t=yt();return Zh(t)||jl(t)}const TP=1e3,IP=10;class _v extends gv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=EP()&&UR(),this.fallbackToPolling=lv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);FR()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,IP):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},TP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}_v.type="LOCAL";const AP=_v;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yv extends gv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}yv.type="SESSION";const vv=yv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new zl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),c=await RP(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}zl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,c)=>{const u=nf("",20);i.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(m.data.response);break;default:clearTimeout(f),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(){return window}function SP(t){En().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wv(){return typeof En().WorkerGlobalScope<"u"&&typeof En().importScripts=="function"}async function CP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function kP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function xP(){return wv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bv="firebaseLocalStorageDb",NP=1,nl="firebaseLocalStorage",Ev="fbase_key";class Oo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Hl(t,e){return t.transaction([nl],e?"readwrite":"readonly").objectStore(nl)}function OP(){const t=indexedDB.deleteDatabase(bv);return new Oo(t).toPromise()}function Eu(){const t=indexedDB.open(bv,NP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(nl,{keyPath:Ev})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(nl)?e(r):(r.close(),await OP(),e(await Eu()))})})}async function em(t,e,n){const r=Hl(t,!0).put({[Ev]:e,value:n});return new Oo(r).toPromise()}async function DP(t,e){const n=Hl(t,!1).get(e),r=await new Oo(n).toPromise();return r===void 0?null:r.value}function tm(t,e){const n=Hl(t,!0).delete(e);return new Oo(n).toPromise()}const LP=800,VP=3;class Tv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Eu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>VP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return wv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=zl._getInstance(xP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await CP(),!this.activeServiceWorker)return;this.sender=new PP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||kP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Eu();return await em(e,tl,"1"),await tm(e,tl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>em(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>DP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>tm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Hl(i,!1).getAll();return new Oo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),LP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Tv.type="LOCAL";const MP=Tv;new ko(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FP(t,e){return e?On(e):(fe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf extends ef{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Di(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Di(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Di(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function UP(t){return pv(t.auth,new rf(t),t.bypassAuthState)}function $P(t){const{auth:e,user:n}=t;return fe(n,e,"internal-error"),fP(n,new rf(t),t.bypassAuthState)}async function BP(t){const{auth:e,user:n}=t;return fe(n,e,"internal-error"),hP(n,new rf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iv{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return UP;case"linkViaPopup":case"linkViaRedirect":return BP;case"reauthViaPopup":case"reauthViaRedirect":return $P;default:an(this.auth,"internal-error")}}resolve(e){jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jP=new ko(2e3,1e4);class Ai extends Iv{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ai.currentPopupAction&&Ai.currentPopupAction.cancel(),Ai.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return fe(e,this.auth,"internal-error"),e}async onExecution(){jn(this.filter.length===1,"Popup operations only handle one event");const e=nf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(bn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(bn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ai.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(bn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,jP.get())};e()}}Ai.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qP="pendingRedirect",Na=new Map;class zP extends Iv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Na.get(this.auth._key());if(!e){try{const r=await HP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Na.set(this.auth._key(),e)}return this.bypassAuthState||Na.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function HP(t,e){const n=GP(e),r=KP(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function WP(t,e){Na.set(t._key(),e)}function KP(t){return On(t._redirectPersistence)}function GP(t){return xa(qP,t.config.apiKey,t.name)}async function QP(t,e,n=!1){if(pn(t.app))return Promise.reject(Mn(t));const r=mi(t),i=FP(r,e),o=await new zP(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YP=10*60*1e3;class XP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!JP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Av(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(bn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=YP&&this.cachedEventUids.clear(),this.cachedEventUids.has(nm(e))}saveEventToCache(e){this.cachedEventUids.add(nm(e)),this.lastProcessedEventTime=Date.now()}}function nm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Av({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function JP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Av(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZP(t,e={}){return Qn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eS=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,tS=/^https?/;async function nS(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ZP(t);for(const n of e)try{if(rS(n))return}catch{}an(t,"unauthorized-domain")}function rS(t){const e=vu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!tS.test(n))return!1;if(eS.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iS=new ko(3e4,6e4);function rm(){const t=En().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function sS(t){return new Promise((e,n)=>{var r,i,s;function o(){rm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{rm(),n(bn(t,"network-request-failed"))},timeout:iS.get()})}if(!((i=(r=En().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=En().gapi)===null||s===void 0)&&s.load)o();else{const l=GR("iframefcb");return En()[l]=()=>{gapi.load?o():n(bn(t,"network-request-failed"))},uv(`${KR()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw Oa=null,e})}let Oa=null;function oS(t){return Oa=Oa||sS(t),Oa}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aS=new ko(5e3,15e3),lS="__/auth/iframe",cS="emulator/auth/iframe",uS={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},hS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function fS(t){const e=t.config;fe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Xh(e,cS):`https://${t.config.authDomain}/${lS}`,r={apiKey:e.apiKey,appName:t.name,v:fi},i=hS.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Eo(r).slice(1)}`}async function dS(t){const e=await oS(t),n=En().gapi;return fe(n,t,"internal-error"),e.open({where:document.body,url:fS(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:uS,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=bn(t,"network-request-failed"),l=En().setTimeout(()=>{s(o)},aS.get());function c(){En().clearTimeout(l),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pS={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},mS=500,gS=600,_S="_blank",yS="http://localhost";class im{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function vS(t,e,n,r=mS,i=gS){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},pS),{width:r.toString(),height:i.toString(),top:s,left:o}),u=yt().toLowerCase();n&&(l=rv(u)?_S:n),nv(u)&&(e=e||yS,c.scrollbars="yes");const f=Object.entries(c).reduce((m,[v,C])=>`${m}${v}=${C},`,"");if(MR(u)&&l!=="_self")return wS(e||"",l),new im(null);const p=window.open(e||"",l,f);fe(p,t,"popup-blocked");try{p.focus()}catch{}return new im(p)}function wS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bS="__/auth/handler",ES="emulator/auth/handler",TS=encodeURIComponent("fac");async function sm(t,e,n,r,i,s){fe(t.config.authDomain,t,"auth-domain-config-required"),fe(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:fi,eventId:i};if(e instanceof fv){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",nT(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries(s||{}))o[f]=p}if(e instanceof No){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await t._getAppCheckToken(),u=c?`#${TS}=${encodeURIComponent(c)}`:"";return`${IS(t)}?${Eo(l).slice(1)}${u}`}function IS({config:t}){return t.emulator?Xh(t,ES):`https://${t.authDomain}/${bS}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nc="webStorageSupport";class AS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=vv,this._completeRedirectFn=QP,this._overrideRedirectResult=WP}async _openPopup(e,n,r,i){var s;jn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await sm(e,n,r,vu(),i);return vS(e,o,nf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await sm(e,n,r,vu(),i);return SP(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(jn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await dS(e),r=new XP(e);return n.register("authEvent",i=>(fe(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Nc,{type:Nc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Nc];o!==void 0&&n(!!o),an(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=nS(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return lv()||Zh()||jl()}}const RS=AS;var om="@firebase/auth",am="1.7.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){fe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function CS(t){ni(new Ar("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;fe(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:cv(t)},u=new zR(r,i,s,c);return ZR(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ni(new Ar("auth-internal",e=>{const n=mi(e.getProvider("auth").getImmediate());return(r=>new PS(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),yn(om,am,SS(t)),yn(om,am,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kS=5*60,xS=f_("authIdTokenMaxAge")||kS;let lm=null;const NS=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>xS)return;const i=n==null?void 0:n.token;lm!==i&&(lm=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function OS(t=ch()){const e=wl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=JR(t,{popupRedirectResolver:RS,persistence:[MP,AP,vv]}),r=f_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=NS(s.toString());vP(n,o,()=>o(n.currentUser)),yP(n,l=>o(l))}}const i=c_("auth");return i&&eP(n,`http://${i}`),n}function DS(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}HR({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=bn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",DS().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});CS("Browser");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rv="firebasestorage.googleapis.com",Pv="storageBucket",LS=2*60*1e3,VS=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et extends An{constructor(e,n,r=0){super(Oc(e),`Firebase Storage: ${n} (${Oc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,et.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Oc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ze;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ze||(Ze={}));function Oc(t){return"storage/"+t}function sf(){const t="An unknown error occurred, please check the error payload for server response.";return new et(Ze.UNKNOWN,t)}function MS(t){return new et(Ze.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function FS(t){return new et(Ze.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function US(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new et(Ze.UNAUTHENTICATED,t)}function $S(){return new et(Ze.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function BS(t){return new et(Ze.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function jS(){return new et(Ze.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function qS(){return new et(Ze.CANCELED,"User canceled the upload/download.")}function zS(t){return new et(Ze.INVALID_URL,"Invalid URL '"+t+"'.")}function HS(t){return new et(Ze.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function WS(){return new et(Ze.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Pv+"' property when initializing the app?")}function KS(){return new et(Ze.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function GS(){return new et(Ze.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function QS(t){return new et(Ze.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Tu(t){return new et(Ze.INVALID_ARGUMENT,t)}function Sv(){return new et(Ze.APP_DELETED,"The Firebase app was deleted.")}function YS(t){return new et(Ze.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function zs(t,e){return new et(Ze.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Es(t){throw new et(Ze.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Kt.makeFromUrl(e,n)}catch{return new Kt(e,"")}if(r.path==="")return r;throw HS(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(U){U.path.charAt(U.path.length-1)==="/"&&(U.path_=U.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function u(U){U.path_=decodeURIComponent(U.path)}const f="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),m="(/([^?#]*).*)?$",v=new RegExp(`^https?://${p}/${f}/b/${i}/o${m}`,"i"),C={bucket:1,path:3},L=n===Rv?"(?:storage.googleapis.com|storage.cloud.google.com)":n,N="([^?#]*)",x=new RegExp(`^https?://${L}/${i}/${N}`,"i"),V=[{regex:l,indices:c,postModify:s},{regex:v,indices:C,postModify:u},{regex:x,indices:{bucket:1,path:2},postModify:u}];for(let U=0;U<V.length;U++){const ne=V[U],K=ne.regex.exec(e);if(K){const T=K[ne.indices.bucket];let y=K[ne.indices.path];y||(y=""),r=new Kt(T,y),ne.postModify(r);break}}if(r==null)throw zS(e);return r}}class XS{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JS(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function c(){return l===2}let u=!1;function f(...N){u||(u=!0,e.apply(null,N))}function p(N){i=setTimeout(()=>{i=null,t(v,c())},N)}function m(){s&&clearTimeout(s)}function v(N,...x){if(u){m();return}if(N){m(),f.call(null,N,...x);return}if(c()||o){m(),f.call(null,N,...x);return}r<64&&(r*=2);let V;l===1?(l=2,V=0):V=(r+Math.random())*1e3,p(V)}let C=!1;function L(N){C||(C=!0,m(),!u&&(i!==null?(N||(l=2),clearTimeout(i),p(0)):N||(l=1)))}return p(0),s=setTimeout(()=>{o=!0,L(!0)},n),L}function ZS(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eC(t){return t!==void 0}function tC(t){return typeof t=="object"&&!Array.isArray(t)}function of(t){return typeof t=="string"||t instanceof String}function cm(t){return af()&&t instanceof Blob}function af(){return typeof Blob<"u"}function um(t,e,n,r){if(r<e)throw Tu(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Tu(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lf(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function Cv(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Zr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Zr||(Zr={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nC(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC{constructor(e,n,r,i,s,o,l,c,u,f,p,m=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=c,this.timeout_=u,this.progressCallback_=f,this.connectionFactory_=p,this.retry=m,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((v,C)=>{this.resolve_=v,this.reject_=C,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new ca(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const c=l.loaded,u=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===Zr.NO_ERROR,c=s.getStatus();if(!l||nC(c,this.additionalRetryCodes_)&&this.retry){const f=s.getErrorCode()===Zr.ABORT;r(!1,new ca(!1,null,f));return}const u=this.successCodes_.indexOf(c)!==-1;r(!0,new ca(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(l,l.getResponse());eC(c)?s(c):s()}catch(c){o(c)}else if(l!==null){const c=sf();c.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,c)):o(c)}else if(i.canceled){const c=this.appDelete_?Sv():qS();o(c)}else{const c=jS();o(c)}};this.canceled_?n(!1,new ca(!1,null,!0)):this.backoffId_=JS(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&ZS(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ca{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function iC(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function sC(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function oC(t,e){e&&(t["X-Firebase-GMPID"]=e)}function aC(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function lC(t,e,n,r,i,s,o=!0){const l=Cv(t.urlParams),c=t.url+l,u=Object.assign({},t.headers);return oC(u,e),iC(u,n),sC(u,s),aC(u,r),new rC(c,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cC(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function uC(...t){const e=cC();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(af())return new Blob(t);throw new et(Ze.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function hC(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fC(t){if(typeof atob>"u")throw QS("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Dc{constructor(e,n){this.data=e,this.contentType=n||null}}function dC(t,e){switch(t){case mn.RAW:return new Dc(kv(e));case mn.BASE64:case mn.BASE64URL:return new Dc(xv(t,e));case mn.DATA_URL:return new Dc(mC(e),gC(e))}throw sf()}function kv(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function pC(t){let e;try{e=decodeURIComponent(t)}catch{throw zs(mn.DATA_URL,"Malformed data URL.")}return kv(e)}function xv(t,e){switch(t){case mn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw zs(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case mn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw zs(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=fC(e)}catch(i){throw i.message.includes("polyfill")?i:zs(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class Nv{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw zs(mn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=_C(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function mC(t){const e=new Nv(t);return e.base64?xv(mn.BASE64,e.rest):pC(e.rest)}function gC(t){return new Nv(t).contentType}function _C(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e,n){let r=0,i="";cm(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(cm(this.data_)){const r=this.data_,i=hC(r,e,n);return i===null?null:new mr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new mr(r,!0)}}static getBlob(...e){if(af()){const n=e.map(r=>r instanceof mr?r.data_:r);return new mr(uC.apply(null,n))}else{const n=e.map(o=>of(o)?dC(mn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let l=0;l<o.length;l++)i[s++]=o[l]}),new mr(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ov(t){let e;try{e=JSON.parse(t)}catch{return null}return tC(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yC(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function vC(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Dv(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wC(t,e){return e}class kt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||wC}}let ua=null;function bC(t){return!of(t)||t.length<2?t:Dv(t)}function Lv(){if(ua)return ua;const t=[];t.push(new kt("bucket")),t.push(new kt("generation")),t.push(new kt("metageneration")),t.push(new kt("name","fullPath",!0));function e(s,o){return bC(o)}const n=new kt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new kt("size");return i.xform=r,t.push(i),t.push(new kt("timeCreated")),t.push(new kt("updated")),t.push(new kt("md5Hash",null,!0)),t.push(new kt("cacheControl",null,!0)),t.push(new kt("contentDisposition",null,!0)),t.push(new kt("contentEncoding",null,!0)),t.push(new kt("contentLanguage",null,!0)),t.push(new kt("contentType",null,!0)),t.push(new kt("metadata","customMetadata",!0)),ua=t,ua}function EC(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Kt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function TC(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return EC(r,t),r}function Vv(t,e,n){const r=Ov(e);return r===null?null:TC(t,r,n)}function IC(t,e,n,r){const i=Ov(e);if(i===null||!of(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const f=t.bucket,p=t.fullPath,m="/b/"+o(f)+"/o/"+o(p),v=lf(m,n,r),C=Cv({alt:"media",token:u});return v+C})[0]}function AC(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class Mv{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fv(t){if(!t)throw sf()}function RC(t,e){function n(r,i){const s=Vv(t,i,e);return Fv(s!==null),s}return n}function PC(t,e){function n(r,i){const s=Vv(t,i,e);return Fv(s!==null),IC(s,i,t.host,t._protocol)}return n}function Uv(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=$S():i=US():n.getStatus()===402?i=FS(t.bucket):n.getStatus()===403?i=BS(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function SC(t){const e=Uv(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=MS(t.path)),s.serverResponse=i.serverResponse,s}return n}function CC(t,e,n){const r=e.fullServerUrl(),i=lf(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,l=new Mv(i,s,PC(t,n),o);return l.errorHandler=SC(e),l}function kC(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function xC(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=kC(null,e)),r}function NC(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let V="";for(let U=0;U<2;U++)V=V+Math.random().toString().slice(2);return V}const c=l();o["Content-Type"]="multipart/related; boundary="+c;const u=xC(e,r,i),f=AC(u,n),p="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+c+`\r
Content-Type: `+u.contentType+`\r
\r
`,m=`\r
--`+c+"--",v=mr.getBlob(p,r,m);if(v===null)throw KS();const C={name:u.fullPath},L=lf(s,t.host,t._protocol),N="POST",x=t.maxUploadRetryTime,k=new Mv(L,N,RC(t,n),x);return k.urlParams=C,k.headers=o,k.body=v.uploadData(),k.errorHandler=Uv(e),k}class OC{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Zr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Zr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Zr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Es("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Es("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Es("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Es("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Es("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class DC extends OC{initXhr(){this.xhr_.responseType="text"}}function $v(){return new DC}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e,n){this._service=e,n instanceof Kt?this._location=n:this._location=Kt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new li(e,n)}get root(){const e=new Kt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Dv(this._location.path)}get storage(){return this._service}get parent(){const e=yC(this._location.path);if(e===null)return null;const n=new Kt(this._location.bucket,e);return new li(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw YS(e)}}function LC(t,e,n){t._throwIfRoot("uploadBytes");const r=NC(t.storage,t._location,Lv(),new mr(e,!0),n);return t.storage.makeRequestWithTokens(r,$v).then(i=>({metadata:i,ref:t}))}function VC(t){t._throwIfRoot("getDownloadURL");const e=CC(t.storage,t._location,Lv());return t.storage.makeRequestWithTokens(e,$v).then(n=>{if(n===null)throw GS();return n})}function MC(t,e){const n=vC(t._location.path,e),r=new Kt(t._location.bucket,n);return new li(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FC(t){return/^[A-Za-z]+:\/\//.test(t)}function UC(t,e){return new li(t,e)}function Bv(t,e){if(t instanceof cf){const n=t;if(n._bucket==null)throw WS();const r=new li(n,n._bucket);return e!=null?Bv(r,e):r}else return e!==void 0?MC(t,e):t}function $C(t,e){if(e&&FC(e)){if(t instanceof cf)return UC(t,e);throw Tu("To use ref(service, url), the first argument must be a Storage instance.")}else return Bv(t,e)}function hm(t,e){const n=e==null?void 0:e[Pv];return n==null?null:Kt.makeFromBucketSpec(n,t)}function BC(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:d_(i,t.app.options.projectId))}class cf{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=Rv,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=LS,this._maxUploadRetryTime=VS,this._requests=new Set,i!=null?this._bucket=Kt.makeFromBucketSpec(i,this._host):this._bucket=hm(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Kt.makeFromBucketSpec(this._url,e):this._bucket=hm(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){um("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){um("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new li(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new XS(Sv());{const o=lC(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const fm="@firebase/storage",dm="0.12.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jv="storage";function jC(t,e,n){return t=We(t),LC(t,e,n)}function qC(t){return t=We(t),VC(t)}function qv(t,e){return t=We(t),$C(t,e)}function zC(t=ch(),e){t=We(t);const r=wl(t,jv).getImmediate({identifier:e}),i=u_("storage");return i&&HC(r,...i),r}function HC(t,e,n,r={}){BC(t,e,n,r)}function WC(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new cf(n,r,i,e,fi)}function KC(){ni(new Ar(jv,WC,"PUBLIC").setMultipleInstances(!0)),yn(fm,dm,""),yn(fm,dm,"esm2017")}KC();const GC={apiKey:"AIzaSyCu_bQNIQOxHcslJBFBg6M5UPxrcF4jwlw",authDomain:"clienteswebtp1.firebaseapp.com",projectId:"clienteswebtp1",storageBucket:"clienteswebtp1.appspot.com",messagingSenderId:"78825190717",appId:"1:78825190717:web:3b8f57ba56cd0614ec0154",measurementId:"G-1JE28JL448"},uf=g_(GC),Bt=eR(uf),gi=OS(uf),zv=zC(uf);function Hv(){const t=Vt(!0),e=Vt({id:null,email:null,displayName:null,role:null,photoURL:null});let n;return Zu(()=>{n=Wl(async r=>{if(r){t.value=!0;const i=await Cr(r.id);e.value={...i},t.value=!1}else e=null})}),eh(()=>{n&&n()}),{user:e,userLoading:t}}async function QC(){const t=await jy(ns(Bt,"users")),e=[];return t.forEach(n=>{n.id!=="lpzKk2JucWR1Bqyr3IOWlht8LQ33"&&e.push({id:n.id,email:n.data().email})}),e}async function Cr(t){const e=Gn(Bt,`users/${t}`),n=await $l(e);return n.data(),{id:n.id,email:n.data().email,role:n.data().role,displayName:n.data().displayName,photoURL:n.data().photoURL,plansPurchased:n.data().plansPurchased}}async function YC(t,e){try{const n=Gn(Bt,`users/${t}`);return mR(n,{...e,created_at:Wy()})}catch(n){throw n}}async function XC(t,e){qy(Gn(Bt,`users/${t}`),{...e})}async function JC(t){if(t){const e=Gn(Bt,`users/${t.value.id}`),n=await $l(e);if(n.exists()){const r=n.data();t.value.plans=r.plans||[]}}}async function ZC(t,e){const n=qv(zv,t);return jC(n,e)}async function ek(t){return qC(qv(zv,t))}const tk=ns(Bt,"cursos");function Wv(t){const e=qh(tk);return zy(e,n=>{const r=n.docs.map(i=>({id:i.id,name:i.data().name,description:i.data().description,price:i.data().price.toLocaleString("es")}));t(r)})}async function Kv(t){const e=Gn(Bt,"cursos",t),n=await $l(e);return n.exists()?{id:n.id,name:n.data().name,description:n.data().description,price:n.data().price}:null}async function nk(t,e){const n=Gn(Bt,`users/${t}`),r=await Kv(e),i=new Date;await qy(n,{plansPurchased:_R({planId:e,name:r.name,description:r.description,price:r.price,purchaseDate:i})})}async function rk(t){try{const e=Gn(Bt,`users/${t}`),n=await $l(e);return n.exists()?n.data().plansPurchased||[]:[]}catch(e){throw e}}let Fn={id:null,email:null,role:null,displayName:null,photoURL:null,plansPurchased:[]},Da=[];localStorage.getItem("user")&&(Fn=JSON.parse(localStorage.getItem("user")));wP(gi,async t=>{if(t){rl({id:t.uid,email:t.email,displayName:t.displayName,role:t.role,photoURL:t.photoURL,plansPurchased:t.plansPurchased});const e=await Cr(t.uid);rl({role:e.role})}else Yv(),localStorage.removeItem("user")});async function ik({email:t,password:e,role:n}){try{const r=await pP(gi,t,e);return await YC(r.user.uid,{email:t}),{id:r.user.uid,email:r.user.email,role:"user"}}catch(r){return{code:r.code,message:r.message}}}function sk({email:t,password:e}){return mP(gi,t,e).then(n=>(Fn={id:n.user.uid,email:n.user.email,displayName:n.user.displayName,role:n.role,photoURL:n.user.photoURL,plansPurchased:n.user.plansPurchased},Fn)).catch(n=>{throw{code:n.code,message:n.message}})}function ok(){return bP(gi)}async function Gv({displayName:t,photoURL:e}){try{const n={};t!==void 0?n.displayName=t:e!==void 0&&(n.photoURL=e);const r=_P(gi.currentUser,n),i=XC(Fn.id,n);await Promise.all([r,i]),rl(n)}catch(n){throw n}}async function ak(t){const e=`users/${Fn.id}/photo`;await ZC(e,t);const n=await ek(e);return Gv({photoURL:n})}function Wl(t){return Da.push(t),Qv(t),gi.onAuthStateChanged(async e=>{if(e)try{const n=await Cr(e.uid);if(t(n),n&&n.plansPurchased){const r=await Promise.all(n.plansPurchased.map(i=>Kv(i)));t({...n,plansPurchased:r})}}catch{}else Yv(),t(null)}),()=>{Da=Da.filter(e=>e!==t)}}function Qv(t){t({...Fn})}function lk(){Da.forEach(t=>Qv(t))}function rl(t){Fn={...Fn,...t},localStorage.setItem("user",JSON.stringify(Fn)),lk()}function Yv(){rl({id:null,email:null,role:null,displayName:null,photoURL:null,plansPurchased:[]}),localStorage.removeItem("user")}function ck(){return!!gi.currentUser}function pm(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function ee(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?pm(Object(n),!0).forEach(function(r){lt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):pm(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function il(t){"@babel/helpers - typeof";return il=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},il(t)}function uk(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function mm(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function hk(t,e,n){return e&&mm(t.prototype,e),n&&mm(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function lt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function hf(t,e){return dk(t)||mk(t,e)||Xv(t,e)||_k()}function Do(t){return fk(t)||pk(t)||Xv(t)||gk()}function fk(t){if(Array.isArray(t))return Iu(t)}function dk(t){if(Array.isArray(t))return t}function pk(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function mk(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,l;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(c){s=!0,l=c}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw l}}return r}}function Xv(t,e){if(t){if(typeof t=="string")return Iu(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Iu(t,e)}}function Iu(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function gk(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _k(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var gm=function(){},ff={},Jv={},Zv=null,ew={mark:gm,measure:gm};try{typeof window<"u"&&(ff=window),typeof document<"u"&&(Jv=document),typeof MutationObserver<"u"&&(Zv=MutationObserver),typeof performance<"u"&&(ew=performance)}catch{}var yk=ff.navigator||{},_m=yk.userAgent,ym=_m===void 0?"":_m,kr=ff,je=Jv,vm=Zv,ha=ew;kr.document;var Yn=!!je.documentElement&&!!je.head&&typeof je.addEventListener=="function"&&typeof je.createElement=="function",tw=~ym.indexOf("MSIE")||~ym.indexOf("Trident/"),fa,da,pa,ma,ga,qn="___FONT_AWESOME___",Au=16,nw="fa",rw="svg-inline--fa",ci="data-fa-i2svg",Ru="data-fa-pseudo-element",vk="data-fa-pseudo-element-pending",df="data-prefix",pf="data-icon",wm="fontawesome-i2svg",wk="async",bk=["HTML","HEAD","STYLE","SCRIPT"],iw=function(){try{return!0}catch{return!1}}(),$e="classic",Je="sharp",mf=[$e,Je];function Lo(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[$e]}})}var uo=Lo((fa={},lt(fa,$e,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),lt(fa,Je,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),fa)),ho=Lo((da={},lt(da,$e,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),lt(da,Je,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),da)),fo=Lo((pa={},lt(pa,$e,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),lt(pa,Je,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),pa)),Ek=Lo((ma={},lt(ma,$e,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),lt(ma,Je,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),ma)),Tk=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,sw="fa-layers-text",Ik=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Ak=Lo((ga={},lt(ga,$e,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),lt(ga,Je,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),ga)),ow=[1,2,3,4,5,6,7,8,9,10],Rk=ow.concat([11,12,13,14,15,16,17,18,19,20]),Pk=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Gr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},po=new Set;Object.keys(ho[$e]).map(po.add.bind(po));Object.keys(ho[Je]).map(po.add.bind(po));var Sk=[].concat(mf,Do(po),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Gr.GROUP,Gr.SWAP_OPACITY,Gr.PRIMARY,Gr.SECONDARY]).concat(ow.map(function(t){return"".concat(t,"x")})).concat(Rk.map(function(t){return"w-".concat(t)})),Hs=kr.FontAwesomeConfig||{};function Ck(t){var e=je.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function kk(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(je&&typeof je.querySelector=="function"){var xk=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];xk.forEach(function(t){var e=hf(t,2),n=e[0],r=e[1],i=kk(Ck(n));i!=null&&(Hs[r]=i)})}var aw={styleDefault:"solid",familyDefault:"classic",cssPrefix:nw,replacementClass:rw,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Hs.familyPrefix&&(Hs.cssPrefix=Hs.familyPrefix);var Wi=ee(ee({},aw),Hs);Wi.autoReplaceSvg||(Wi.observeMutations=!1);var oe={};Object.keys(aw).forEach(function(t){Object.defineProperty(oe,t,{enumerable:!0,set:function(n){Wi[t]=n,Ws.forEach(function(r){return r(oe)})},get:function(){return Wi[t]}})});Object.defineProperty(oe,"familyPrefix",{enumerable:!0,set:function(e){Wi.cssPrefix=e,Ws.forEach(function(n){return n(oe)})},get:function(){return Wi.cssPrefix}});kr.FontAwesomeConfig=oe;var Ws=[];function Nk(t){return Ws.push(t),function(){Ws.splice(Ws.indexOf(t),1)}}var or=Au,gn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Ok(t){if(!(!t||!Yn)){var e=je.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=je.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return je.head.insertBefore(e,r),t}}var Dk="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function mo(){for(var t=12,e="";t-- >0;)e+=Dk[Math.random()*62|0];return e}function ss(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function gf(t){return t.classList?ss(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function lw(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Lk(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(lw(t[n]),'" ')},"").trim()}function Kl(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function _f(t){return t.size!==gn.size||t.x!==gn.x||t.y!==gn.y||t.rotate!==gn.rotate||t.flipX||t.flipY}function Vk(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),l="rotate(".concat(e.rotate," 0 0)"),c={transform:"".concat(s," ").concat(o," ").concat(l)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:c,path:u}}function Mk(t){var e=t.transform,n=t.width,r=n===void 0?Au:n,i=t.height,s=i===void 0?Au:i,o=t.startCentered,l=o===void 0?!1:o,c="";return l&&tw?c+="translate(".concat(e.x/or-r/2,"em, ").concat(e.y/or-s/2,"em) "):l?c+="translate(calc(-50% + ".concat(e.x/or,"em), calc(-50% + ").concat(e.y/or,"em)) "):c+="translate(".concat(e.x/or,"em, ").concat(e.y/or,"em) "),c+="scale(".concat(e.size/or*(e.flipX?-1:1),", ").concat(e.size/or*(e.flipY?-1:1),") "),c+="rotate(".concat(e.rotate,"deg) "),c}var Fk=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, 0));
          transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function cw(){var t=nw,e=rw,n=oe.cssPrefix,r=oe.replacementClass,i=Fk;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),l=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(l,".".concat(r))}return i}var bm=!1;function Lc(){oe.autoAddCss&&!bm&&(Ok(cw()),bm=!0)}var Uk={mixout:function(){return{dom:{css:cw,insertCss:Lc}}},hooks:function(){return{beforeDOMElementCreation:function(){Lc()},beforeI2svg:function(){Lc()}}}},zn=kr||{};zn[qn]||(zn[qn]={});zn[qn].styles||(zn[qn].styles={});zn[qn].hooks||(zn[qn].hooks={});zn[qn].shims||(zn[qn].shims=[]);var rn=zn[qn],uw=[],$k=function t(){je.removeEventListener("DOMContentLoaded",t),sl=1,uw.map(function(e){return e()})},sl=!1;Yn&&(sl=(je.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(je.readyState),sl||je.addEventListener("DOMContentLoaded",$k));function Bk(t){Yn&&(sl?setTimeout(t,0):uw.push(t))}function Vo(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?lw(t):"<".concat(e," ").concat(Lk(r),">").concat(s.map(Vo).join(""),"</").concat(e,">")}function Em(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var jk=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},Vc=function(e,n,r,i){var s=Object.keys(e),o=s.length,l=i!==void 0?jk(n,i):n,c,u,f;for(r===void 0?(c=1,f=e[s[0]]):(c=0,f=r);c<o;c++)u=s[c],f=l(f,e[u],u,e);return f};function qk(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Pu(t){var e=qk(t);return e.length===1?e[0].toString(16):null}function zk(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Tm(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function Su(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=Tm(e);typeof rn.hooks.addPack=="function"&&!i?rn.hooks.addPack(t,Tm(e)):rn.styles[t]=ee(ee({},rn.styles[t]||{}),s),t==="fas"&&Su("fa",e)}var _a,ya,va,Ri=rn.styles,Hk=rn.shims,Wk=(_a={},lt(_a,$e,Object.values(fo[$e])),lt(_a,Je,Object.values(fo[Je])),_a),yf=null,hw={},fw={},dw={},pw={},mw={},Kk=(ya={},lt(ya,$e,Object.keys(uo[$e])),lt(ya,Je,Object.keys(uo[Je])),ya);function Gk(t){return~Sk.indexOf(t)}function Qk(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!Gk(i)?i:null}var gw=function(){var e=function(s){return Vc(Ri,function(o,l,c){return o[c]=Vc(l,s,{}),o},{})};hw=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var l=s[2].filter(function(c){return typeof c=="number"});l.forEach(function(c){i[c.toString(16)]=o})}return i}),fw=e(function(i,s,o){if(i[o]=o,s[2]){var l=s[2].filter(function(c){return typeof c=="string"});l.forEach(function(c){i[c]=o})}return i}),mw=e(function(i,s,o){var l=s[2];return i[o]=o,l.forEach(function(c){i[c]=o}),i});var n="far"in Ri||oe.autoFetchSvg,r=Vc(Hk,function(i,s){var o=s[0],l=s[1],c=s[2];return l==="far"&&!n&&(l="fas"),typeof o=="string"&&(i.names[o]={prefix:l,iconName:c}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:l,iconName:c}),i},{names:{},unicodes:{}});dw=r.names,pw=r.unicodes,yf=Gl(oe.styleDefault,{family:oe.familyDefault})};Nk(function(t){yf=Gl(t.styleDefault,{family:oe.familyDefault})});gw();function vf(t,e){return(hw[t]||{})[e]}function Yk(t,e){return(fw[t]||{})[e]}function Qr(t,e){return(mw[t]||{})[e]}function _w(t){return dw[t]||{prefix:null,iconName:null}}function Xk(t){var e=pw[t],n=vf("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function xr(){return yf}var wf=function(){return{prefix:null,iconName:null,rest:[]}};function Gl(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?$e:n,i=uo[r][t],s=ho[r][t]||ho[r][i],o=t in rn.styles?t:null;return s||o||null}var Im=(va={},lt(va,$e,Object.keys(fo[$e])),lt(va,Je,Object.keys(fo[Je])),va);function Ql(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},lt(e,$e,"".concat(oe.cssPrefix,"-").concat($e)),lt(e,Je,"".concat(oe.cssPrefix,"-").concat(Je)),e),o=null,l=$e;(t.includes(s[$e])||t.some(function(u){return Im[$e].includes(u)}))&&(l=$e),(t.includes(s[Je])||t.some(function(u){return Im[Je].includes(u)}))&&(l=Je);var c=t.reduce(function(u,f){var p=Qk(oe.cssPrefix,f);if(Ri[f]?(f=Wk[l].includes(f)?Ek[l][f]:f,o=f,u.prefix=f):Kk[l].indexOf(f)>-1?(o=f,u.prefix=Gl(f,{family:l})):p?u.iconName=p:f!==oe.replacementClass&&f!==s[$e]&&f!==s[Je]&&u.rest.push(f),!i&&u.prefix&&u.iconName){var m=o==="fa"?_w(u.iconName):{},v=Qr(u.prefix,u.iconName);m.prefix&&(o=null),u.iconName=m.iconName||v||u.iconName,u.prefix=m.prefix||u.prefix,u.prefix==="far"&&!Ri.far&&Ri.fas&&!oe.autoFetchSvg&&(u.prefix="fas")}return u},wf());return(t.includes("fa-brands")||t.includes("fab"))&&(c.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(c.prefix="fad"),!c.prefix&&l===Je&&(Ri.fass||oe.autoFetchSvg)&&(c.prefix="fass",c.iconName=Qr(c.prefix,c.iconName)||c.iconName),(c.prefix==="fa"||o==="fa")&&(c.prefix=xr()||"fas"),c}var Jk=function(){function t(){uk(this,t),this.definitions={}}return hk(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(l){n.definitions[l]=ee(ee({},n.definitions[l]||{}),o[l]),Su(l,o[l]);var c=fo[$e][l];c&&Su(c,o[l]),gw()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],l=o.prefix,c=o.iconName,u=o.icon,f=u[2];n[l]||(n[l]={}),f.length>0&&f.forEach(function(p){typeof p=="string"&&(n[l][p]=u)}),n[l][c]=u}),n}}]),t}(),Am=[],Pi={},Li={},Zk=Object.keys(Li);function ex(t,e){var n=e.mixoutsTo;return Am=t,Pi={},Object.keys(Li).forEach(function(r){Zk.indexOf(r)===-1&&delete Li[r]}),Am.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),il(i[o])==="object"&&Object.keys(i[o]).forEach(function(l){n[o]||(n[o]={}),n[o][l]=i[o][l]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){Pi[o]||(Pi[o]=[]),Pi[o].push(s[o])})}r.provides&&r.provides(Li)}),n}function Cu(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=Pi[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function ui(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=Pi[t]||[];i.forEach(function(s){s.apply(null,n)})}function Hn(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Li[t]?Li[t].apply(null,e):void 0}function ku(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||xr();if(e)return e=Qr(n,e)||e,Em(yw.definitions,n,e)||Em(rn.styles,n,e)}var yw=new Jk,tx=function(){oe.autoReplaceSvg=!1,oe.observeMutations=!1,ui("noAuto")},nx={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Yn?(ui("beforeI2svg",e),Hn("pseudoElements2svg",e),Hn("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;oe.autoReplaceSvg===!1&&(oe.autoReplaceSvg=!0),oe.observeMutations=!0,Bk(function(){ix({autoReplaceSvgRoot:n}),ui("watch",e)})}},rx={icon:function(e){if(e===null)return null;if(il(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Qr(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Gl(e[0]);return{prefix:r,iconName:Qr(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(oe.cssPrefix,"-"))>-1||e.match(Tk))){var i=Ql(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||xr(),iconName:Qr(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=xr();return{prefix:s,iconName:Qr(s,e)||e}}}},Gt={noAuto:tx,config:oe,dom:nx,parse:rx,library:yw,findIconDefinition:ku,toHtml:Vo},ix=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?je:n;(Object.keys(rn.styles).length>0||oe.autoFetchSvg)&&Yn&&oe.autoReplaceSvg&&Gt.dom.i2svg({node:r})};function Yl(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return Vo(r)})}}),Object.defineProperty(t,"node",{get:function(){if(Yn){var r=je.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function sx(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(_f(o)&&n.found&&!r.found){var l=n.width,c=n.height,u={x:l/c/2,y:.5};i.style=Kl(ee(ee({},s),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function ox(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(oe.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:ee(ee({},i),{},{id:o}),children:r}]}]}function bf(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,l=t.symbol,c=t.title,u=t.maskId,f=t.titleId,p=t.extra,m=t.watchable,v=m===void 0?!1:m,C=r.found?r:n,L=C.width,N=C.height,x=i==="fak",k=[oe.replacementClass,s?"".concat(oe.cssPrefix,"-").concat(s):""].filter(function(w){return p.classes.indexOf(w)===-1}).filter(function(w){return w!==""||!!w}).concat(p.classes).join(" "),V={children:[],attributes:ee(ee({},p.attributes),{},{"data-prefix":i,"data-icon":s,class:k,role:p.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(L," ").concat(N)})},U=x&&!~p.classes.indexOf("fa-fw")?{width:"".concat(L/N*16*.0625,"em")}:{};v&&(V.attributes[ci]=""),c&&(V.children.push({tag:"title",attributes:{id:V.attributes["aria-labelledby"]||"title-".concat(f||mo())},children:[c]}),delete V.attributes.title);var ne=ee(ee({},V),{},{prefix:i,iconName:s,main:n,mask:r,maskId:u,transform:o,symbol:l,styles:ee(ee({},U),p.styles)}),K=r.found&&n.found?Hn("generateAbstractMask",ne)||{children:[],attributes:{}}:Hn("generateAbstractIcon",ne)||{children:[],attributes:{}},T=K.children,y=K.attributes;return ne.children=T,ne.attributes=y,l?ox(ne):sx(ne)}function Rm(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,l=t.watchable,c=l===void 0?!1:l,u=ee(ee(ee({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});c&&(u[ci]="");var f=ee({},o.styles);_f(i)&&(f.transform=Mk({transform:i,startCentered:!0,width:n,height:r}),f["-webkit-transform"]=f.transform);var p=Kl(f);p.length>0&&(u.style=p);var m=[];return m.push({tag:"span",attributes:u,children:[e]}),s&&m.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),m}function ax(t){var e=t.content,n=t.title,r=t.extra,i=ee(ee(ee({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=Kl(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Mc=rn.styles;function xu(t){var e=t[0],n=t[1],r=t.slice(4),i=hf(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(oe.cssPrefix,"-").concat(Gr.GROUP)},children:[{tag:"path",attributes:{class:"".concat(oe.cssPrefix,"-").concat(Gr.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(oe.cssPrefix,"-").concat(Gr.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var lx={found:!1,width:512,height:512};function cx(t,e){!iw&&!oe.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Nu(t,e){var n=e;return e==="fa"&&oe.styleDefault!==null&&(e=xr()),new Promise(function(r,i){if(Hn("missingIconAbstract"),n==="fa"){var s=_w(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Mc[e]&&Mc[e][t]){var o=Mc[e][t];return r(xu(o))}cx(t,e),r(ee(ee({},lx),{},{icon:oe.showMissingIcons&&t?Hn("missingIconAbstract")||{}:{}}))})}var Pm=function(){},Ou=oe.measurePerformance&&ha&&ha.mark&&ha.measure?ha:{mark:Pm,measure:Pm},xs='FA "6.5.2"',ux=function(e){return Ou.mark("".concat(xs," ").concat(e," begins")),function(){return vw(e)}},vw=function(e){Ou.mark("".concat(xs," ").concat(e," ends")),Ou.measure("".concat(xs," ").concat(e),"".concat(xs," ").concat(e," begins"),"".concat(xs," ").concat(e," ends"))},Ef={begin:ux,end:vw},La=function(){};function Sm(t){var e=t.getAttribute?t.getAttribute(ci):null;return typeof e=="string"}function hx(t){var e=t.getAttribute?t.getAttribute(df):null,n=t.getAttribute?t.getAttribute(pf):null;return e&&n}function fx(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(oe.replacementClass)}function dx(){if(oe.autoReplaceSvg===!0)return Va.replace;var t=Va[oe.autoReplaceSvg];return t||Va.replace}function px(t){return je.createElementNS("http://www.w3.org/2000/svg",t)}function mx(t){return je.createElement(t)}function ww(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?px:mx:n;if(typeof t=="string")return je.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(ww(o,{ceFn:r}))}),i}function gx(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Va={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(ww(i),n)}),n.getAttribute(ci)===null&&oe.keepOriginalSource){var r=je.createComment(gx(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~gf(n).indexOf(oe.replacementClass))return Va.replace(e);var i=new RegExp("".concat(oe.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(l,c){return c===oe.replacementClass||c.match(i)?l.toSvg.push(c):l.toNode.push(c),l},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(l){return Vo(l)}).join(`
`);n.setAttribute(ci,""),n.innerHTML=o}};function Cm(t){t()}function bw(t,e){var n=typeof e=="function"?e:La;if(t.length===0)n();else{var r=Cm;oe.mutateApproach===wk&&(r=kr.requestAnimationFrame||Cm),r(function(){var i=dx(),s=Ef.begin("mutate");t.map(i),s(),n()})}}var Tf=!1;function Ew(){Tf=!0}function Du(){Tf=!1}var ol=null;function km(t){if(vm&&oe.observeMutations){var e=t.treeCallback,n=e===void 0?La:e,r=t.nodeCallback,i=r===void 0?La:r,s=t.pseudoElementsCallback,o=s===void 0?La:s,l=t.observeMutationsRoot,c=l===void 0?je:l;ol=new vm(function(u){if(!Tf){var f=xr();ss(u).forEach(function(p){if(p.type==="childList"&&p.addedNodes.length>0&&!Sm(p.addedNodes[0])&&(oe.searchPseudoElements&&o(p.target),n(p.target)),p.type==="attributes"&&p.target.parentNode&&oe.searchPseudoElements&&o(p.target.parentNode),p.type==="attributes"&&Sm(p.target)&&~Pk.indexOf(p.attributeName))if(p.attributeName==="class"&&hx(p.target)){var m=Ql(gf(p.target)),v=m.prefix,C=m.iconName;p.target.setAttribute(df,v||f),C&&p.target.setAttribute(pf,C)}else fx(p.target)&&i(p.target)})}}),Yn&&ol.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function _x(){ol&&ol.disconnect()}function yx(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],l=s.slice(1);return o&&l.length>0&&(r[o]=l.join(":").trim()),r},{})),n}function vx(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=Ql(gf(t));return i.prefix||(i.prefix=xr()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=Yk(i.prefix,t.innerText)||vf(i.prefix,Pu(t.innerText))),!i.iconName&&oe.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function wx(t){var e=ss(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return oe.autoA11y&&(n?e["aria-labelledby"]="".concat(oe.replacementClass,"-title-").concat(r||mo()):(e["aria-hidden"]="true",e.focusable="false")),e}function bx(){return{iconName:null,title:null,titleId:null,prefix:null,transform:gn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function xm(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=vx(t),r=n.iconName,i=n.prefix,s=n.rest,o=wx(t),l=Cu("parseNodeAttributes",{},t),c=e.styleParser?yx(t):[];return ee({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:gn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:c,attributes:o}},l)}var Ex=rn.styles;function Tw(t){var e=oe.autoReplaceSvg==="nest"?xm(t,{styleParser:!1}):xm(t);return~e.extra.classes.indexOf(sw)?Hn("generateLayersText",t,e):Hn("generateSvgReplacementMutation",t,e)}var Nr=new Set;mf.map(function(t){Nr.add("fa-".concat(t))});Object.keys(uo[$e]).map(Nr.add.bind(Nr));Object.keys(uo[Je]).map(Nr.add.bind(Nr));Nr=Do(Nr);function Nm(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Yn)return Promise.resolve();var n=je.documentElement.classList,r=function(p){return n.add("".concat(wm,"-").concat(p))},i=function(p){return n.remove("".concat(wm,"-").concat(p))},s=oe.autoFetchSvg?Nr:mf.map(function(f){return"fa-".concat(f)}).concat(Object.keys(Ex));s.includes("fa")||s.push("fa");var o=[".".concat(sw,":not([").concat(ci,"])")].concat(s.map(function(f){return".".concat(f,":not([").concat(ci,"])")})).join(", ");if(o.length===0)return Promise.resolve();var l=[];try{l=ss(t.querySelectorAll(o))}catch{}if(l.length>0)r("pending"),i("complete");else return Promise.resolve();var c=Ef.begin("onTree"),u=l.reduce(function(f,p){try{var m=Tw(p);m&&f.push(m)}catch(v){iw||v.name==="MissingIcon"&&console.error(v)}return f},[]);return new Promise(function(f,p){Promise.all(u).then(function(m){bw(m,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),c(),f()})}).catch(function(m){c(),p(m)})})}function Tx(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Tw(t).then(function(n){n&&bw([n],e)})}function Ix(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:ku(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:ku(i||{})),t(r,ee(ee({},n),{},{mask:i}))}}var Ax=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?gn:r,s=n.symbol,o=s===void 0?!1:s,l=n.mask,c=l===void 0?null:l,u=n.maskId,f=u===void 0?null:u,p=n.title,m=p===void 0?null:p,v=n.titleId,C=v===void 0?null:v,L=n.classes,N=L===void 0?[]:L,x=n.attributes,k=x===void 0?{}:x,V=n.styles,U=V===void 0?{}:V;if(e){var ne=e.prefix,K=e.iconName,T=e.icon;return Yl(ee({type:"icon"},e),function(){return ui("beforeDOMElementCreation",{iconDefinition:e,params:n}),oe.autoA11y&&(m?k["aria-labelledby"]="".concat(oe.replacementClass,"-title-").concat(C||mo()):(k["aria-hidden"]="true",k.focusable="false")),bf({icons:{main:xu(T),mask:c?xu(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:ne,iconName:K,transform:ee(ee({},gn),i),symbol:o,title:m,maskId:f,titleId:C,extra:{attributes:k,styles:U,classes:N}})})}},Rx={mixout:function(){return{icon:Ix(Ax)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Nm,n.nodeCallback=Tx,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?je:r,s=n.callback,o=s===void 0?function(){}:s;return Nm(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,l=r.prefix,c=r.transform,u=r.symbol,f=r.mask,p=r.maskId,m=r.extra;return new Promise(function(v,C){Promise.all([Nu(i,l),f.iconName?Nu(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(L){var N=hf(L,2),x=N[0],k=N[1];v([n,bf({icons:{main:x,mask:k},prefix:l,iconName:i,transform:c,symbol:u,maskId:p,title:s,titleId:o,extra:m,watchable:!0})])}).catch(C)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,l=n.styles,c=Kl(l);c.length>0&&(i.style=c);var u;return _f(o)&&(u=Hn("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(u||s.icon),{children:r,attributes:i}}}},Px={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return Yl({type:"layer"},function(){ui("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(l){Array.isArray(l)?l.map(function(c){o=o.concat(c.abstract)}):o=o.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(oe.cssPrefix,"-layers")].concat(Do(s)).join(" ")},children:o}]})}}}},Sx={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,l=o===void 0?[]:o,c=r.attributes,u=c===void 0?{}:c,f=r.styles,p=f===void 0?{}:f;return Yl({type:"counter",content:n},function(){return ui("beforeDOMElementCreation",{content:n,params:r}),ax({content:n.toString(),title:s,extra:{attributes:u,styles:p,classes:["".concat(oe.cssPrefix,"-layers-counter")].concat(Do(l))}})})}}}},Cx={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?gn:i,o=r.title,l=o===void 0?null:o,c=r.classes,u=c===void 0?[]:c,f=r.attributes,p=f===void 0?{}:f,m=r.styles,v=m===void 0?{}:m;return Yl({type:"text",content:n},function(){return ui("beforeDOMElementCreation",{content:n,params:r}),Rm({content:n,transform:ee(ee({},gn),s),title:l,extra:{attributes:p,styles:v,classes:["".concat(oe.cssPrefix,"-layers-text")].concat(Do(u))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,l=null,c=null;if(tw){var u=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();l=f.width/u,c=f.height/u}return oe.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Rm({content:n.innerHTML,width:l,height:c,transform:s,title:i,extra:o,watchable:!0})])}}},kx=new RegExp('"',"ug"),Om=[1105920,1112319];function xx(t){var e=t.replace(kx,""),n=zk(e,0),r=n>=Om[0]&&n<=Om[1],i=e.length===2?e[0]===e[1]:!1;return{value:Pu(i?e[0]:e),isSecondary:r||i}}function Dm(t,e){var n="".concat(vk).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=ss(t.children),o=s.filter(function(T){return T.getAttribute(Ru)===e})[0],l=kr.getComputedStyle(t,e),c=l.getPropertyValue("font-family").match(Ik),u=l.getPropertyValue("font-weight"),f=l.getPropertyValue("content");if(o&&!c)return t.removeChild(o),r();if(c&&f!=="none"&&f!==""){var p=l.getPropertyValue("content"),m=~["Sharp"].indexOf(c[2])?Je:$e,v=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(c[2])?ho[m][c[2].toLowerCase()]:Ak[m][u],C=xx(p),L=C.value,N=C.isSecondary,x=c[0].startsWith("FontAwesome"),k=vf(v,L),V=k;if(x){var U=Xk(L);U.iconName&&U.prefix&&(k=U.iconName,v=U.prefix)}if(k&&!N&&(!o||o.getAttribute(df)!==v||o.getAttribute(pf)!==V)){t.setAttribute(n,V),o&&t.removeChild(o);var ne=bx(),K=ne.extra;K.attributes[Ru]=e,Nu(k,v).then(function(T){var y=bf(ee(ee({},ne),{},{icons:{main:T,mask:wf()},prefix:v,iconName:V,extra:K,watchable:!0})),w=je.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(w,t.firstChild):t.appendChild(w),w.outerHTML=y.map(function(I){return Vo(I)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Nx(t){return Promise.all([Dm(t,"::before"),Dm(t,"::after")])}function Ox(t){return t.parentNode!==document.head&&!~bk.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Ru)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Lm(t){if(Yn)return new Promise(function(e,n){var r=ss(t.querySelectorAll("*")).filter(Ox).map(Nx),i=Ef.begin("searchPseudoElements");Ew(),Promise.all(r).then(function(){i(),Du(),e()}).catch(function(){i(),Du(),n()})})}var Dx={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Lm,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?je:r;oe.searchPseudoElements&&Lm(i)}}},Vm=!1,Lx={mixout:function(){return{dom:{unwatch:function(){Ew(),Vm=!0}}}},hooks:function(){return{bootstrap:function(){km(Cu("mutationObserverCallbacks",{}))},noAuto:function(){_x()},watch:function(n){var r=n.observeMutationsRoot;Vm?Du():km(Cu("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Mm=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],l=s.slice(1).join("-");if(o&&l==="h")return r.flipX=!0,r;if(o&&l==="v")return r.flipY=!0,r;if(l=parseFloat(l),isNaN(l))return r;switch(o){case"grow":r.size=r.size+l;break;case"shrink":r.size=r.size-l;break;case"left":r.x=r.x-l;break;case"right":r.x=r.x+l;break;case"up":r.y=r.y-l;break;case"down":r.y=r.y+l;break;case"rotate":r.rotate=r.rotate+l;break}return r},n)},Vx={mixout:function(){return{parse:{transform:function(n){return Mm(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=Mm(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,l={transform:"translate(".concat(s/2," 256)")},c="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),f="rotate(".concat(i.rotate," 0 0)"),p={transform:"".concat(c," ").concat(u," ").concat(f)},m={transform:"translate(".concat(o/2*-1," -256)")},v={outer:l,inner:p,path:m};return{tag:"g",attributes:ee({},v.outer),children:[{tag:"g",attributes:ee({},v.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:ee(ee({},r.icon.attributes),v.path)}]}]}}}},Fc={x:0,y:0,width:"100%",height:"100%"};function Fm(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Mx(t){return t.tag==="g"?t.children:[t]}var Fx={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?Ql(i.split(" ").map(function(o){return o.trim()})):wf();return s.prefix||(s.prefix=xr()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,l=n.maskId,c=n.transform,u=s.width,f=s.icon,p=o.width,m=o.icon,v=Vk({transform:c,containerWidth:p,iconWidth:u}),C={tag:"rect",attributes:ee(ee({},Fc),{},{fill:"white"})},L=f.children?{children:f.children.map(Fm)}:{},N={tag:"g",attributes:ee({},v.inner),children:[Fm(ee({tag:f.tag,attributes:ee(ee({},f.attributes),v.path)},L))]},x={tag:"g",attributes:ee({},v.outer),children:[N]},k="mask-".concat(l||mo()),V="clip-".concat(l||mo()),U={tag:"mask",attributes:ee(ee({},Fc),{},{id:k,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[C,x]},ne={tag:"defs",children:[{tag:"clipPath",attributes:{id:V},children:Mx(m)},U]};return r.push(ne,{tag:"rect",attributes:ee({fill:"currentColor","clip-path":"url(#".concat(V,")"),mask:"url(#".concat(k,")")},Fc)}),{children:r,attributes:i}}}},Ux={provides:function(e){var n=!1;kr.matchMedia&&(n=kr.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:ee(ee({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=ee(ee({},s),{},{attributeName:"opacity"}),l={tag:"circle",attributes:ee(ee({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||l.children.push({tag:"animate",attributes:ee(ee({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:ee(ee({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(l),r.push({tag:"path",attributes:ee(ee({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:ee(ee({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:ee(ee({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:ee(ee({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},$x={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},Bx=[Uk,Rx,Px,Sx,Cx,Dx,Lx,Vx,Fx,Ux,$x];ex(Bx,{mixoutsTo:Gt});Gt.noAuto;Gt.config;var jx=Gt.library;Gt.dom;var Lu=Gt.parse;Gt.findIconDefinition;Gt.toHtml;var qx=Gt.icon;Gt.layer;Gt.text;Gt.counter;function Um(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function kn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Um(Object(n),!0).forEach(function(r){Dt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Um(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function zx(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Hx(t){var e=zx(t,"string");return typeof e=="symbol"?e:e+""}function al(t){"@babel/helpers - typeof";return al=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},al(t)}function Dt(t,e,n){return e=Hx(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Wx(t,e){if(t==null)return{};var n={};for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(e.indexOf(r)>=0)continue;n[r]=t[r]}return n}function Kx(t,e){if(t==null)return{};var n=Wx(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var Gx=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Iw={exports:{}};(function(t){(function(e){var n=function(x,k,V){if(!u(k)||p(k)||m(k)||v(k)||c(k))return k;var U,ne=0,K=0;if(f(k))for(U=[],K=k.length;ne<K;ne++)U.push(n(x,k[ne],V));else{U={};for(var T in k)Object.prototype.hasOwnProperty.call(k,T)&&(U[x(T,V)]=n(x,k[T],V))}return U},r=function(x,k){k=k||{};var V=k.separator||"_",U=k.split||/(?=[A-Z])/;return x.split(U).join(V)},i=function(x){return C(x)?x:(x=x.replace(/[\-_\s]+(.)?/g,function(k,V){return V?V.toUpperCase():""}),x.substr(0,1).toLowerCase()+x.substr(1))},s=function(x){var k=i(x);return k.substr(0,1).toUpperCase()+k.substr(1)},o=function(x,k){return r(x,k).toLowerCase()},l=Object.prototype.toString,c=function(x){return typeof x=="function"},u=function(x){return x===Object(x)},f=function(x){return l.call(x)=="[object Array]"},p=function(x){return l.call(x)=="[object Date]"},m=function(x){return l.call(x)=="[object RegExp]"},v=function(x){return l.call(x)=="[object Boolean]"},C=function(x){return x=x-0,x===x},L=function(x,k){var V=k&&"process"in k?k.process:k;return typeof V!="function"?x:function(U,ne){return V(U,x,ne)}},N={camelize:i,decamelize:o,pascalize:s,depascalize:o,camelizeKeys:function(x,k){return n(L(i,k),x)},decamelizeKeys:function(x,k){return n(L(o,k),x,k)},pascalizeKeys:function(x,k){return n(L(s,k),x)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=N:e.humps=N})(Gx)})(Iw);var Qx=Iw.exports,Yx=["class","style"];function Xx(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=Qx.camelize(n.slice(0,r)),s=n.slice(r+1).trim();return e[i]=s,e},{})}function Jx(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function Aw(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(c){return Aw(c)}),i=Object.keys(t.attributes||{}).reduce(function(c,u){var f=t.attributes[u];switch(u){case"class":c.class=Jx(f);break;case"style":c.style=Xx(f);break;default:c.attrs[u]=f}return c},{attrs:{},class:{},style:{}});n.class;var s=n.style,o=s===void 0?{}:s,l=Kx(n,Yx);return oh(t.tag,kn(kn(kn({},e),{},{class:i.class,style:kn(kn({},i.style),o)},i.attrs),l),r)}var Rw=!1;try{Rw=!0}catch{}function Zx(){if(!Rw&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Uc(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Dt({},t,e):{}}function eN(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},Dt(Dt(Dt(Dt(Dt(Dt(Dt(Dt(Dt(Dt(e,"fa-".concat(t.size),t.size!==null),"fa-rotate-".concat(t.rotation),t.rotation!==null),"fa-pull-".concat(t.pull),t.pull!==null),"fa-swap-opacity",t.swapOpacity),"fa-bounce",t.bounce),"fa-shake",t.shake),"fa-beat",t.beat),"fa-fade",t.fade),"fa-beat-fade",t.beatFade),"fa-flash",t.flash),Dt(Dt(e,"fa-spin-pulse",t.spinPulse),"fa-spin-reverse",t.spinReverse));return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function $m(t){if(t&&al(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Lu.icon)return Lu.icon(t);if(t===null)return null;if(al(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var tN=th({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,i=mt(function(){return $m(e.icon)}),s=mt(function(){return Uc("classes",eN(e))}),o=mt(function(){return Uc("transform",typeof e.transform=="string"?Lu.transform(e.transform):e.transform)}),l=mt(function(){return Uc("mask",$m(e.mask))}),c=mt(function(){return qx(i.value,kn(kn(kn(kn({},s.value),o.value),l.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});Ms(c,function(f){if(!f)return Zx("Could not find one or more icon(s)",i.value,l.value)},{immediate:!0});var u=mt(function(){return c.value?Aw(c.value.abstract[0],{},r):null});return function(){return u.value}}}),nN={prefix:"fas",iconName:"leaf",icon:[512,512,[],"f06c","M272 96c-78.6 0-145.1 51.5-167.7 122.5c33.6-17 71.5-26.5 111.7-26.5h88c8.8 0 16 7.2 16 16s-7.2 16-16 16H288 216s0 0 0 0c-16.6 0-32.7 1.9-48.3 5.4c-25.9 5.9-49.9 16.4-71.4 30.7c0 0 0 0 0 0C38.3 298.8 0 364.9 0 440v16c0 13.3 10.7 24 24 24s24-10.7 24-24V440c0-48.7 20.7-92.5 53.8-123.2C121.6 392.3 190.3 448 272 448l1 0c132.1-.7 239-130.9 239-291.4c0-42.6-7.5-83.1-21.1-119.6c-2.6-6.9-12.7-6.6-16.2-.1C455.9 72.1 418.7 96 376 96L272 96z"]},rN={prefix:"fas",iconName:"phone-flip",icon:[512,512,[128381,"phone-alt"],"f879","M347.1 24.6c7.7-18.6 28-28.5 47.4-23.2l88 24C499.9 30.2 512 46 512 64c0 247.4-200.6 448-448 448c-18 0-33.8-12.1-38.6-29.5l-24-88c-5.3-19.4 4.6-39.7 23.2-47.4l96-40c16.3-6.8 35.2-2.1 46.3 11.6L207.3 368c70.4-33.3 127.4-90.3 160.7-160.7L318.7 167c-13.7-11.2-18.4-30-11.6-46.3l40-96z"]},iN=rN,sN={prefix:"fas",iconName:"tags",icon:[512,512,[],"f02c","M345 39.1L472.8 168.4c52.4 53 52.4 138.2 0 191.2L360.8 472.9c-9.3 9.4-24.5 9.5-33.9 .2s-9.5-24.5-.2-33.9L438.6 325.9c33.9-34.3 33.9-89.4 0-123.7L310.9 72.9c-9.3-9.4-9.2-24.6 .2-33.9s24.6-9.2 33.9 .2zM0 229.5V80C0 53.5 21.5 32 48 32H197.5c17 0 33.3 6.7 45.3 18.7l168 168c25 25 25 65.5 0 90.5L277.3 442.7c-25 25-65.5 25-90.5 0l-168-168C6.7 262.7 0 246.5 0 229.5zM144 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]},oN={prefix:"fas",iconName:"shirt",icon:[640,512,[128085,"t-shirt","tshirt"],"f553","M211.8 0c7.8 0 14.3 5.7 16.7 13.2C240.8 51.9 277.1 80 320 80s79.2-28.1 91.5-66.8C413.9 5.7 420.4 0 428.2 0h12.6c22.5 0 44.2 7.9 61.5 22.3L628.5 127.4c6.6 5.5 10.7 13.5 11.4 22.1s-2.1 17.1-7.8 23.6l-56 64c-11.4 13.1-31.2 14.6-44.6 3.5L480 197.7V448c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64V197.7l-51.5 42.9c-13.3 11.1-33.1 9.6-44.6-3.5l-56-64c-5.7-6.5-8.5-15-7.8-23.6s4.8-16.6 11.4-22.1L137.7 22.3C155 7.9 176.7 0 199.2 0h12.6z"]},aN=oN,lN={prefix:"fas",iconName:"truck",icon:[640,512,[128666,9951],"f0d1","M48 0C21.5 0 0 21.5 0 48V368c0 26.5 21.5 48 48 48H64c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H48zM416 160h50.7L544 237.3V256H416V160zM112 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm368-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"]};const Pw="/banner.jpg",jt=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n};jx.add(lN,aN,nN,sN,iN);const cN={name:"Home",components:{FontAwesomeIcon:tN}},uN=R("header",{className:"py-6 text-center"},[R("div",{className:"container mx-auto"},[R("h1",{className:"text-4xl font-bold"},"Tecnología y excelencia para cuidar tu ropa")])],-1),hN=R("section",{className:"bg-white pb-12"},[R("div",{className:"container mx-auto text-center px-4"},[R("p",{className:"text-lg mb-6"},[be("En "),R("b",null,"SHINE"),be(" nos dedicamos a ofrecerte el mejor servicio de lavado y cuidado de ropa. Sabemos lo importante que es para vos mantener tus prendas en perfecto estado, y por eso, combinamos tecnología de punta con un equipo de expertos comprometidos con la excelencia.")]),R("img",{src:Pw,alt:"Persona lavando ropa",className:"mx-auto rounded-lg shadow-lg w-80"})])],-1),fN={className:"bg-gray-200 py-12"},dN={className:"container mx-auto text-center px-4"},pN=R("h2",{className:"text-3xl font-bold mb-8"},"¿Qué ofrecemos?",-1),mN={className:"flex flex-wrap justify-center"},gN={className:"w-full sm:w-1/2 lg:w-1/4 p-4"},_N={className:"bg-white p-6 rounded-lg shadow-lg"},yN={className:"text-4xl text-blue-600 mb-4"},vN=R("h3",{className:"text-xl font-bold mb-4"},"Servicio a Domicilio",-1),wN=R("p",null,"Recogemos y entregamos tu ropa en la comodidad de tu hogar.",-1),bN={className:"w-full sm:w-1/2 lg:w-1/4 p-4"},EN={className:"bg-white p-6 rounded-lg shadow-lg"},TN={className:"text-4xl text-blue-600 mb-4"},IN=R("h3",{className:"text-xl font-bold mb-4"},"Tratamiento Especializado",-1),AN=R("p",null,"Cuidado especial para prendas delicadas y artículos de limpieza complejos.",-1),RN={className:"w-full sm:w-1/2 lg:w-1/4 p-4"},PN={className:"bg-white p-6 rounded-lg shadow-lg"},SN={className:"text-4xl text-blue-600 mb-4"},CN=R("h3",{className:"text-xl font-bold mb-4"},"Sostenibilidad",-1),kN=R("p",null,"Utilizamos productos ecológicos que cuidan tu ropa y el medio ambiente.",-1),xN={className:"w-full sm:w-1/2 lg:w-1/4 p-4"},NN={className:"bg-white p-6 rounded-lg shadow-lg"},ON={className:"text-4xl text-blue-600 mb-4"},DN=R("h3",{className:"text-xl font-bold mb-4"},"Promociones y Descuentos",-1),LN=R("p",null,"Tenemos promociones y descuentos para vos.",-1),VN=R("section",{className:"bg-white py-12"},[R("div",{className:"container mx-auto px-4"},[R("h2",{className:"text-3xl font-bold mb-8 text-center"},"¿Por qué elegirnos?"),R("div",{className:"flex flex-wrap justify-center items-center"},[R("div",{className:"w-full lg:w-2/3 p-4"},[R("div",{className:"mb-4"},[R("h3",{className:"text-2xl font-bold mb-2"},"Calidad Insuperable"),R("p",null,"Nuestra prioridad es que tus prendas reciban el mejor tratamiento posible. Utilizamos tecnología avanzada y productos de limpieza de alta calidad que aseguran resultados impecables.")]),R("div",{className:"mb-4"},[R("h3",{className:"text-2xl font-bold mb-2"},"Comodidad a tu Alcance"),R("p",null,"Sabemos que tu tiempo es valioso. Con un par de clics en nuestra plataforma, podés programar la recogida y entrega, sin necesidad de desplazarte.")]),R("div",{className:"mb-4"},[R("h3",{className:"text-2xl font-bold mb-2"},"Sostenibilidad y Responsabilidad"),R("p",null,"Utilizamos productos ecológicos y técnicas de lavado eficientes que reducen el impacto ambiental. Al elegirnos, también estás contribuyendo a un futuro más sostenible.")]),R("div",{className:"mb-4"},[R("h3",{className:"text-2xl font-bold mb-2"},"Promociones y Ofertas Exclusivas"),R("p",null,"Nos gusta premiar a nuestros clientes leales. Regularmente lanzamos promociones y descuentos especiales para que puedas disfrutar de nuestros servicios premium a precios aún más atractivos.")])]),R("div",{className:"w-full lg:w-1/3 p-4 flex justify-center"},[R("img",{src:Pw,alt:"Persona esperando",className:"rounded-lg shadow-lg w-80"})])])])],-1),MN={className:"bg-blue-600 text-white py-12"},FN={className:"container mx-auto text-center px-4"},UN=R("h2",{className:"text-3xl font-bold mb-4"},"¡Probá la Diferencia Hoy Mismo!",-1),$N=R("p",{className:"text-lg mb-6"},[be("Elegir "),R("b",null,"SHINE"),be(" significa optar por un servicio de lavandería que entiende y satisface tus necesidades. Nos dedicamos a hacer tu vida más fácil y a cuidar de tu ropa con el mismo esmero con el que tú lo harías.")],-1),BN={href:"#",className:"bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition"};function jN(t,e,n,r,i,s){const o=Qe("font-awesome-icon"),l=Qe("FontAwesomeIcon");return ie(),ce(Ve,null,[uN,hN,R("section",fN,[R("div",dN,[pN,R("div",mN,[R("div",gN,[R("div",_N,[R("div",yN,[te(o,{icon:["fas","truck"]})]),vN,wN])]),R("div",bN,[R("div",EN,[R("div",TN,[te(o,{icon:["fas","tshirt"]})]),IN,AN])]),R("div",RN,[R("div",PN,[R("div",SN,[te(o,{icon:["fas","leaf"]})]),CN,kN])]),R("div",xN,[R("div",NN,[R("div",ON,[te(o,{icon:["fas","tags"]})]),DN,LN])])])])]),VN,R("section",MN,[R("div",FN,[UN,$N,R("a",BN,[te(l,{icon:t.faPhoneAlt,className:"mr-2"},null,8,["icon"]),be("Contactanos")])])])],64)}const Sw=jt(cN,[["render",jN]]),qN={name:"Footer"},zN={className:"bg-gray-800 text-white py-6"},HN=R("div",{className:"container mx-auto text-center"},[R("p",null,"© 2024 SHINE. Todos los derechos reservados.")],-1),WN=[HN];function KN(t,e,n,r,i,s){return ie(),ce("footer",zN,WN)}const GN=jt(qN,[["render",KN]]),QN="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAABkpJREFUWEfFl2tMk1cYx//nfWlLC+UipVyKUC4KCJQ5FVRQptmyMS+by+LmXNRoFpfMD4tfluzTvrlsWRaTJZuZ07m4uWmWaeKMM/PGUHCyycTKpdyhICCXFmqv73u2cxQspYV6SXYSkvb0eZ7/732e55z3geB/XuRJ9Cml4gkAmwmRHjdO2AAH6uoUCo2zwiPTSirLyyiQQynVgAKCKNhAaTMBuaYRlafbFy2//hEhcjhQcwJc7OiIbHX0vOuVpPdlIIMJYhYvQkAFCGYFET6JKSz/Ya7szArwbVNNmdPt+kYCcsN5mkAbkQg1UUS5a1vRisZQ/iEBDt6s3u2Gdz+lUD2O+KQPIdSuhLjlHVPFmWBxggIcNFfvcfk8+wEiPIn4Qwi41QrV6zvzV54OjDcD4PDt6pcdXu8pABFPQ9wPwhEnRpVvLSip9487DeCQpSrReU9qoEBSOOL585Lh8nnRYR8OxxwRRGhYVaRbWkAKPFNg/p4Hbl3+wivJ74UTbXlSJpYkZUCmFBd7m9E0eicMNwqNqNy7s7D88xkAR5qvGiZcbgsF1HNFmhSftHsUCFEQ7uRFp2euycx0Mf+pEnx16/IHPkn+eG5xI5YkGWeYUUpxIYxMsGtEGxH5xo6CFccDAKpqfZJUSghAmVWQtTzZiCX6meL+mbjU24zGIOVgT8rCsj+NGHFsV+Gqt6YAjpvN0UPS4BCliFyblotO+zA67He58eQKTPuoy4GaO+1QihEoS8mBOkLBTVk5gkE8mzgfFBQ3hnqhEMSe3UWr06cAjjZeLRrzuG6yjS0LS9A1PgylIOKPvlZIlCIrRodKY+G0nPzSdgN9DhvfM+kMWJW6YOp3BnHC8hfuusYhEAGV6QVw+Dwc8kyXGaIgyKbkpLjyxLxx3gPfNV1Za3d7zscq1diaWwKrYwxeWUKcUo0fLXWIU2nwWvZiqMSHV8PJtnpux1axzoByP4Bxr5sDMMGylGywuONeF3SR0TjSVAOfLEOvmpe1Oa+4gwMcarz64j2P+2x5ag6KdWkYdk7w9Meq1PjaXA3WYEkaLTZmFvOUszXicqA2SAmY+Km2etg8TmiVKmzNLcWo+x4ICBIio3DZ2oKG4T4kKjW5b+aXtnCAI41XVrh8vqvb81fC6fNwZ02EktUK1olRXLJauGhKVAzWG01TEIF9OuF142R7PWxuJ5SiCNY3ixJSMeJ0YNTtQLo2AQ6vGz9Z6mCI0qW/mlPUwwGOWmrTtEJk98asYnJ7uA9OyYs4lRoxSjVP/6HbV3jaZoPwF2d28SoNNuUshsfnQ8/ECM+oSlRgQZwex1quuVIXlmrXEOLjAJRSocpq6VltWJBqGRvkRm22QWiVah7ooLmadze3BWCIisE6v0wEijO7GGUk3s4rRf/EGLxURoY2Aa22QeTE6vFrR0Pd+izTsqlTwD5cH+g4slRv3NZlH4YhOo4LtdmGoFdrcazl+rRss+NkiIrDOmMRPLIE1pCsbP5LFATsWlSGppF+FOoMsLtdcEs+6DVanO9p2vd8ev6H0wBqre0vlKQYz8mg6HfYkBYdj+7xEbTahtA40h9Ybv6d9YkkS3DLwUfCZ3RpyI1Phk4djS77XWTE6NjpojV9luKK+fkN0wBYGSilFwghFXaPE9EKFQghuNzbAnMIgKBUDzYFQngTLtanwyP54JMlaBQqVu6zgiBUTvpOex1TSlldagCI7OgxALZ6J0ZR09eGQec48GBvNvH52nisTM7mT36/byg/hgB8AJYRQqZmghkDCaX0MwB7AwVYE9YNdqJuoGvaFe1vpxAEfiHlz0sJNbfuI4Tw2gfNwIMToQTwG4Dngj2lZWwAv3c3gfWK/2LnfoPRhOSo2FDJOfdfr68jhLAshAZ4ABEDgA2RZcGi/T3YzV9E/qsyowBZsYmhxC8B2EAImQg0CDkVU0rZYPIlgO2BThKV8X3znxj38JmCn5hXsopDiR8EsIcQ4g5mMOc/JpTSTQA+BZDtH6DKakHDsJUXYnVqDky6tMD47P7eSwiZMQnPWYLASJRS9rLfDGAHgAoAirqBTlwb6OSmL2UUIPt++tmweRHAYQA/B9b7sTIQBIadreJaa7vplq0vSYCAlcmZ1rx5KWYA/xBCHKFq8VQAHiV4OLb/Ajl/mz9Sb++8AAAAAElFTkSuQmCC",YN={name:"App",components:{Home:Sw,Footer:GN},data(){return{user:{id:null,email:null},userFirestore:{}}},methods:{async handleLogout(){await ok(),this.user={id:null,email:null},this.userFirestore={},this.$router.push("/login")}},mounted(){Wl(async t=>{this.user={...t},this.userFirestore=await Cr(this.user.id)})}},XN={class:"bg-black text-white"},JN={class:"container m-auto flex justify-between gap-4 items-center p-4"},ZN=R("div",null,[R("img",{src:QN,alt:"Favicon"})],-1),e2={class:"flex gap-5"},t2={key:0},n2={key:1},r2={type:"submit"},i2={class:"container m-auto p-10"};function s2(t,e,n,r,i,s){const o=Qe("router-link"),l=Qe("router-view"),c=Qe("Footer");return ie(),ce(Ve,null,[R("header",null,[R("div",XN,[R("div",JN,[ZN,R("nav",null,[R("ul",e2,[R("li",null,[te(o,{to:"/"},{default:Ne(()=>[be("Home")]),_:1})]),i.user.id?(ie(),ce(Ve,{key:1},[i.userFirestore.role==="admin"?(ie(),ce("li",t2,[te(o,{to:"/usuarios"},{default:Ne(()=>[be("Usuarios")]),_:1})])):Ln("",!0),R("li",null,[te(o,{to:"/perfil"},{default:Ne(()=>[be("Mi perfil")]),_:1})]),i.userFirestore.role==="admin"?(ie(),ce("li",n2,[te(o,{to:"/panel"},{default:Ne(()=>[be("Panel")]),_:1})])):Ln("",!0),i.userFirestore.role!=="admin"?(ie(),ce(Ve,{key:2},[R("li",null,[te(o,{to:"/servicios"},{default:Ne(()=>[be("Servicios")]),_:1})]),R("li",null,[te(o,{to:"/contacto"},{default:Ne(()=>[be("Contacto")]),_:1})])],64)):Ln("",!0),R("li",null,[R("form",{action:"",onSubmit:e[0]||(e[0]=ei((...u)=>s.handleLogout&&s.handleLogout(...u),["prevent"]))},[R("button",r2,ze(i.user.email)+" (Cerrar sesión)",1)],32)])],64)):(ie(),ce(Ve,{key:0},[R("li",null,[te(o,{to:"/registro"},{default:Ne(()=>[be("Registro")]),_:1})]),R("li",null,[te(o,{to:"/login"},{default:Ne(()=>[be("Iniciar sesión")]),_:1})])],64))])])])])]),R("div",i2,[te(l)]),te(c)],64)}const o2=jt(YN,[["render",s2]]),a2={},l2={class:"loader"},c2=R("div",null,null,-1),u2=R("div",null,null,-1),h2=R("div",{class:"sr-only"},"Cargando...>",-1),f2=R("div",null,null,-1),d2=[c2,u2,h2,f2];function p2(t,e){return ie(),ce("div",l2,d2)}const Or=jt(a2,[["render",p2]]),m2=["disabled"],dn={__name:"BaseButton",props:{loading:{type:Boolean,default:!1}},setup(t){return(e,n)=>(ie(),ce("button",{class:"my-3 py-2 px-3 rounded w-full bg-green-700 text-white hover:bg-green-600 disabled:bg-green-400 active:bg-green-800 transition",type:"submit",disabled:t.loading},[t.loading?(ie(),Ir(Or,{key:1})):Mg(e.$slots,"default",{key:0},()=>[be("Enviar")])],8,m2))}},g2={name:"BaseLabel",props:{modelFor:{type:String,required:!0}}},_2=["for"];function y2(t,e,n,r,i,s){return ie(),ce(Ve,null,[R("label",{class:"block font-bold",for:n.modelFor},null,8,_2),Mg(t.$slots,"default")],64)}const Ki=jt(g2,[["render",y2]]),v2=["value"],go={__name:"BaseInput",props:{modelValue:{type:String,required:!0}},emits:["update:modelValue"],setup(t){return(e,n)=>(ie(),ce("input",{class:"border border-blue-500 rounded p-1 mb-2 w-full disabled:bg-gray-100",value:t.modelValue,onInput:n[0]||(n[0]=r=>e.$emit("update:modelValue",r.target.value))},null,40,v2))}};/*!
  * vue-router v4.3.3
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Ii=typeof document<"u";function w2(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const De=Object.assign;function $c(t,e){const n={};for(const r in e){const i=e[r];n[r]=ln(i)?i.map(t):t(i)}return n}const Ks=()=>{},ln=Array.isArray,Cw=/#/g,b2=/&/g,E2=/\//g,T2=/=/g,I2=/\?/g,kw=/\+/g,A2=/%5B/g,R2=/%5D/g,xw=/%5E/g,P2=/%60/g,Nw=/%7B/g,S2=/%7C/g,Ow=/%7D/g,C2=/%20/g;function If(t){return encodeURI(""+t).replace(S2,"|").replace(A2,"[").replace(R2,"]")}function k2(t){return If(t).replace(Nw,"{").replace(Ow,"}").replace(xw,"^")}function Vu(t){return If(t).replace(kw,"%2B").replace(C2,"+").replace(Cw,"%23").replace(b2,"%26").replace(P2,"`").replace(Nw,"{").replace(Ow,"}").replace(xw,"^")}function x2(t){return Vu(t).replace(T2,"%3D")}function N2(t){return If(t).replace(Cw,"%23").replace(I2,"%3F")}function O2(t){return t==null?"":N2(t).replace(E2,"%2F")}function _o(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const D2=/\/$/,L2=t=>t.replace(D2,"");function Bc(t,e,n="/"){let r,i={},s="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=e.slice(0,c),s=e.slice(c+1,l>-1?l:e.length),i=t(s)),l>-1&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=U2(r??e,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:_o(o)}}function V2(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Bm(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function M2(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&Gi(e.matched[r],n.matched[i])&&Dw(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Gi(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Dw(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!F2(t[n],e[n]))return!1;return!0}function F2(t,e){return ln(t)?jm(t,e):ln(e)?jm(e,t):t===e}function jm(t,e){return ln(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function U2(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let s=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(o).join("/")}var yo;(function(t){t.pop="pop",t.push="push"})(yo||(yo={}));var Gs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Gs||(Gs={}));function $2(t){if(!t)if(Ii){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),L2(t)}const B2=/^[^#]+#/;function j2(t,e){return t.replace(B2,"#")+e}function q2(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Xl=()=>({left:window.scrollX,top:window.scrollY});function z2(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=q2(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function qm(t,e){return(history.state?history.state.position-e:-1)+t}const Mu=new Map;function H2(t,e){Mu.set(t,e)}function W2(t){const e=Mu.get(t);return Mu.delete(t),e}let K2=()=>location.protocol+"//"+location.host;function Lw(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let l=i.includes(t.slice(s))?t.slice(s).length:1,c=i.slice(l);return c[0]!=="/"&&(c="/"+c),Bm(c,"")}return Bm(n,t)+r+i}function G2(t,e,n,r){let i=[],s=[],o=null;const l=({state:m})=>{const v=Lw(t,location),C=n.value,L=e.value;let N=0;if(m){if(n.value=v,e.value=m,o&&o===C){o=null;return}N=L?m.position-L.position:0}else r(v);i.forEach(x=>{x(n.value,C,{delta:N,type:yo.pop,direction:N?N>0?Gs.forward:Gs.back:Gs.unknown})})};function c(){o=n.value}function u(m){i.push(m);const v=()=>{const C=i.indexOf(m);C>-1&&i.splice(C,1)};return s.push(v),v}function f(){const{history:m}=window;m.state&&m.replaceState(De({},m.state,{scroll:Xl()}),"")}function p(){for(const m of s)m();s=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:c,listen:u,destroy:p}}function zm(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?Xl():null}}function Q2(t){const{history:e,location:n}=window,r={value:Lw(t,n)},i={value:e.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(c,u,f){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:K2()+t+c;try{e[f?"replaceState":"pushState"](u,"",m),i.value=u}catch(v){console.error(v),n[f?"replace":"assign"](m)}}function o(c,u){const f=De({},e.state,zm(i.value.back,c,i.value.forward,!0),u,{position:i.value.position});s(c,f,!0),r.value=c}function l(c,u){const f=De({},i.value,e.state,{forward:c,scroll:Xl()});s(f.current,f,!0);const p=De({},zm(r.value,c,null),{position:f.position+1},u);s(c,p,!1),r.value=c}return{location:r,state:i,push:l,replace:o}}function Y2(t){t=$2(t);const e=Q2(t),n=G2(t,e.state,e.location,e.replace);function r(s,o=!0){o||n.pauseListeners(),history.go(s)}const i=De({location:"",base:t,go:r,createHref:j2.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function X2(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),Y2(t)}function J2(t){return typeof t=="string"||t&&typeof t=="object"}function Vw(t){return typeof t=="string"||typeof t=="symbol"}const ar={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Mw=Symbol("");var Hm;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Hm||(Hm={}));function Qi(t,e){return De(new Error,{type:t,[Mw]:!0},e)}function Sn(t,e){return t instanceof Error&&Mw in t&&(e==null||!!(t.type&e))}const Wm="[^/]+?",Z2={sensitive:!1,strict:!1,start:!0,end:!0},eO=/[.+*?^${}()[\]/\\]/g;function tO(t,e){const n=De({},Z2,e),r=[];let i=n.start?"^":"";const s=[];for(const u of t){const f=u.length?[]:[90];n.strict&&!u.length&&(i+="/");for(let p=0;p<u.length;p++){const m=u[p];let v=40+(n.sensitive?.25:0);if(m.type===0)p||(i+="/"),i+=m.value.replace(eO,"\\$&"),v+=40;else if(m.type===1){const{value:C,repeatable:L,optional:N,regexp:x}=m;s.push({name:C,repeatable:L,optional:N});const k=x||Wm;if(k!==Wm){v+=10;try{new RegExp(`(${k})`)}catch(U){throw new Error(`Invalid custom RegExp for param "${C}" (${k}): `+U.message)}}let V=L?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;p||(V=N&&u.length<2?`(?:/${V})`:"/"+V),N&&(V+="?"),i+=V,v+=20,N&&(v+=-8),L&&(v+=-20),k===".*"&&(v+=-50)}f.push(v)}r.push(f)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function l(u){const f=u.match(o),p={};if(!f)return null;for(let m=1;m<f.length;m++){const v=f[m]||"",C=s[m-1];p[C.name]=v&&C.repeatable?v.split("/"):v}return p}function c(u){let f="",p=!1;for(const m of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const v of m)if(v.type===0)f+=v.value;else if(v.type===1){const{value:C,repeatable:L,optional:N}=v,x=C in u?u[C]:"";if(ln(x)&&!L)throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);const k=ln(x)?x.join("/"):x;if(!k)if(N)m.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${C}"`);f+=k}}return f||"/"}return{re:o,score:r,keys:s,parse:l,stringify:c}}function nO(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Fw(t,e){let n=0;const r=t.score,i=e.score;for(;n<r.length&&n<i.length;){const s=nO(r[n],i[n]);if(s)return s;n++}if(Math.abs(i.length-r.length)===1){if(Km(r))return 1;if(Km(i))return-1}return i.length-r.length}function Km(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const rO={type:0,value:""},iO=/[a-zA-Z0-9_]/;function sO(t){if(!t)return[[]];if(t==="/")return[[rO]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(v){throw new Error(`ERR (${n})/"${u}": ${v}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let l=0,c,u="",f="";function p(){u&&(n===0?s.push({type:0,value:u}):n===1||n===2||n===3?(s.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&p(),o()):c===":"?(p(),n=1):m();break;case 4:m(),n=r;break;case 1:c==="("?n=2:iO.test(c)?m():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=3:f+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),i}function oO(t,e,n){const r=tO(sO(t.path),n),i=De(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function aO(t,e){const n=[],r=new Map;e=Ym({strict:!1,end:!0,sensitive:!1},e);function i(f){return r.get(f)}function s(f,p,m){const v=!m,C=lO(f);C.aliasOf=m&&m.record;const L=Ym(e,f),N=[C];if("alias"in f){const V=typeof f.alias=="string"?[f.alias]:f.alias;for(const U of V)N.push(De({},C,{components:m?m.record.components:C.components,path:U,aliasOf:m?m.record:C}))}let x,k;for(const V of N){const{path:U}=V;if(p&&U[0]!=="/"){const ne=p.record.path,K=ne[ne.length-1]==="/"?"":"/";V.path=p.record.path+(U&&K+U)}if(x=oO(V,p,L),m?m.alias.push(x):(k=k||x,k!==x&&k.alias.push(x),v&&f.name&&!Qm(x)&&o(f.name)),Uw(x)&&c(x),C.children){const ne=C.children;for(let K=0;K<ne.length;K++)s(ne[K],x,m&&m.children[K])}m=m||x}return k?()=>{o(k)}:Ks}function o(f){if(Vw(f)){const p=r.get(f);p&&(r.delete(f),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(f);p>-1&&(n.splice(p,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function l(){return n}function c(f){const p=hO(f,n);n.splice(p,0,f),f.record.name&&!Qm(f)&&r.set(f.record.name,f)}function u(f,p){let m,v={},C,L;if("name"in f&&f.name){if(m=r.get(f.name),!m)throw Qi(1,{location:f});L=m.record.name,v=De(Gm(p.params,m.keys.filter(k=>!k.optional).concat(m.parent?m.parent.keys.filter(k=>k.optional):[]).map(k=>k.name)),f.params&&Gm(f.params,m.keys.map(k=>k.name))),C=m.stringify(v)}else if(f.path!=null)C=f.path,m=n.find(k=>k.re.test(C)),m&&(v=m.parse(C),L=m.record.name);else{if(m=p.name?r.get(p.name):n.find(k=>k.re.test(p.path)),!m)throw Qi(1,{location:f,currentLocation:p});L=m.record.name,v=De({},p.params,f.params),C=m.stringify(v)}const N=[];let x=m;for(;x;)N.unshift(x.record),x=x.parent;return{name:L,path:C,params:v,matched:N,meta:uO(N)}}return t.forEach(f=>s(f)),{addRoute:s,resolve:u,removeRoute:o,getRoutes:l,getRecordMatcher:i}}function Gm(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function lO(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:cO(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function cO(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Qm(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function uO(t){return t.reduce((e,n)=>De(e,n.meta),{})}function Ym(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function hO(t,e){let n=0,r=e.length;for(;n!==r;){const s=n+r>>1;Fw(t,e[s])<0?r=s:n=s+1}const i=fO(t);return i&&(r=e.lastIndexOf(i,r-1)),r}function fO(t){let e=t;for(;e=e.parent;)if(Uw(e)&&Fw(t,e)===0)return e}function Uw({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function dO(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(kw," "),o=s.indexOf("="),l=_o(o<0?s:s.slice(0,o)),c=o<0?null:_o(s.slice(o+1));if(l in e){let u=e[l];ln(u)||(u=e[l]=[u]),u.push(c)}else e[l]=c}return e}function Xm(t){let e="";for(let n in t){const r=t[n];if(n=x2(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(ln(r)?r.map(s=>s&&Vu(s)):[r&&Vu(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function pO(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=ln(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return e}const mO=Symbol(""),Jm=Symbol(""),Jl=Symbol(""),$w=Symbol(""),Fu=Symbol("");function Ts(){let t=[];function e(r){return t.push(r),()=>{const i=t.indexOf(r);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function ur(t,e,n,r,i,s=o=>o()){const o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((l,c)=>{const u=m=>{m===!1?c(Qi(4,{from:n,to:e})):m instanceof Error?c(m):J2(m)?c(Qi(2,{from:e,to:m})):(o&&r.enterCallbacks[i]===o&&typeof m=="function"&&o.push(m),l())},f=s(()=>t.call(r&&r.instances[i],e,n,u));let p=Promise.resolve(f);t.length<3&&(p=p.then(u)),p.catch(m=>c(m))})}function jc(t,e,n,r,i=s=>s()){const s=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(gO(c)){const f=(c.__vccOpts||c)[e];f&&s.push(ur(f,n,r,o,l,i))}else{let u=c();s.push(()=>u.then(f=>{if(!f)return Promise.reject(new Error(`Couldn't resolve component "${l}" at "${o.path}"`));const p=w2(f)?f.default:f;o.components[l]=p;const v=(p.__vccOpts||p)[e];return v&&ur(v,n,r,o,l,i)()}))}}return s}function gO(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Zm(t){const e=_n(Jl),n=_n($w),r=mt(()=>{const c=ve(t.to);return e.resolve(c)}),i=mt(()=>{const{matched:c}=r.value,{length:u}=c,f=c[u-1],p=n.matched;if(!f||!p.length)return-1;const m=p.findIndex(Gi.bind(null,f));if(m>-1)return m;const v=eg(c[u-2]);return u>1&&eg(f)===v&&p[p.length-1].path!==v?p.findIndex(Gi.bind(null,c[u-2])):m}),s=mt(()=>i.value>-1&&wO(n.params,r.value.params)),o=mt(()=>i.value>-1&&i.value===n.matched.length-1&&Dw(n.params,r.value.params));function l(c={}){return vO(c)?e[ve(t.replace)?"replace":"push"](ve(t.to)).catch(Ks):Promise.resolve()}return{route:r,href:mt(()=>r.value.href),isActive:s,isExactActive:o,navigate:l}}const _O=th({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Zm,setup(t,{slots:e}){const n=dl(Zm(t)),{options:r}=_n(Jl),i=mt(()=>({[tg(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[tg(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:oh("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),yO=_O;function vO(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function wO(t,e){for(const n in e){const r=e[n],i=t[n];if(typeof r=="string"){if(r!==i)return!1}else if(!ln(i)||i.length!==r.length||r.some((s,o)=>s!==i[o]))return!1}return!0}function eg(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const tg=(t,e,n)=>t??e??n,bO=th({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=_n(Fu),i=mt(()=>t.route||r.value),s=_n(Jm,0),o=mt(()=>{let u=ve(s);const{matched:f}=i.value;let p;for(;(p=f[u])&&!p.components;)u++;return u}),l=mt(()=>i.value.matched[o.value]);ba(Jm,mt(()=>o.value+1)),ba(mO,l),ba(Fu,i);const c=Vt();return Ms(()=>[c.value,l.value,t.name],([u,f,p],[m,v,C])=>{f&&(f.instances[p]=u,v&&v!==f&&u&&u===m&&(f.leaveGuards.size||(f.leaveGuards=v.leaveGuards),f.updateGuards.size||(f.updateGuards=v.updateGuards))),u&&f&&(!v||!Gi(f,v)||!m)&&(f.enterCallbacks[p]||[]).forEach(L=>L(u))},{flush:"post"}),()=>{const u=i.value,f=t.name,p=l.value,m=p&&p.components[f];if(!m)return ng(n.default,{Component:m,route:u});const v=p.props[f],C=v?v===!0?u.params:typeof v=="function"?v(u):v:null,N=oh(m,De({},C,e,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(p.instances[f]=null)},ref:c}));return ng(n.default,{Component:N,route:u})||N}}});function ng(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const EO=bO;function TO(t){const e=aO(t.routes,t),n=t.parseQuery||dO,r=t.stringifyQuery||Xm,i=t.history,s=Ts(),o=Ts(),l=Ts(),c=Zb(ar);let u=ar;Ii&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=$c.bind(null,F=>""+F),p=$c.bind(null,O2),m=$c.bind(null,_o);function v(F,X){let Y,re;return Vw(F)?(Y=e.getRecordMatcher(F),re=X):re=F,e.addRoute(re,Y)}function C(F){const X=e.getRecordMatcher(F);X&&e.removeRoute(X)}function L(){return e.getRoutes().map(F=>F.record)}function N(F){return!!e.getRecordMatcher(F)}function x(F,X){if(X=De({},X||c.value),typeof F=="string"){const E=Bc(n,F,X.path),O=e.resolve({path:E.path},X),B=i.createHref(E.fullPath);return De(E,O,{params:m(O.params),hash:_o(E.hash),redirectedFrom:void 0,href:B})}let Y;if(F.path!=null)Y=De({},F,{path:Bc(n,F.path,X.path).path});else{const E=De({},F.params);for(const O in E)E[O]==null&&delete E[O];Y=De({},F,{params:p(E)}),X.params=p(X.params)}const re=e.resolve(Y,X),Ie=F.hash||"";re.params=f(m(re.params));const Le=V2(r,De({},F,{hash:k2(Ie),path:re.path})),_=i.createHref(Le);return De({fullPath:Le,hash:Ie,query:r===Xm?pO(F.query):F.query||{}},re,{redirectedFrom:void 0,href:_})}function k(F){return typeof F=="string"?Bc(n,F,c.value.path):De({},F)}function V(F,X){if(u!==F)return Qi(8,{from:X,to:F})}function U(F){return T(F)}function ne(F){return U(De(k(F),{replace:!0}))}function K(F){const X=F.matched[F.matched.length-1];if(X&&X.redirect){const{redirect:Y}=X;let re=typeof Y=="function"?Y(F):Y;return typeof re=="string"&&(re=re.includes("?")||re.includes("#")?re=k(re):{path:re},re.params={}),De({query:F.query,hash:F.hash,params:re.path!=null?{}:F.params},re)}}function T(F,X){const Y=u=x(F),re=c.value,Ie=F.state,Le=F.force,_=F.replace===!0,E=K(Y);if(E)return T(De(k(E),{state:typeof E=="object"?De({},Ie,E.state):Ie,force:Le,replace:_}),X||Y);const O=Y;O.redirectedFrom=X;let B;return!Le&&M2(r,re,Y)&&(B=Qi(16,{to:O,from:re}),Yt(re,re,!0,!1)),(B?Promise.resolve(B):I(O,re)).catch(M=>Sn(M)?Sn(M,2)?M:Zt(M):Ee(M,O,re)).then(M=>{if(M){if(Sn(M,2))return T(De({replace:_},k(M.to),{state:typeof M.to=="object"?De({},Ie,M.to.state):Ie,force:Le}),X||O)}else M=S(O,re,!0,_,Ie);return A(O,re,M),M})}function y(F,X){const Y=V(F,X);return Y?Promise.reject(Y):Promise.resolve()}function w(F){const X=Xn.values().next().value;return X&&typeof X.runWithContext=="function"?X.runWithContext(F):F()}function I(F,X){let Y;const[re,Ie,Le]=IO(F,X);Y=jc(re.reverse(),"beforeRouteLeave",F,X);for(const E of re)E.leaveGuards.forEach(O=>{Y.push(ur(O,F,X))});const _=y.bind(null,F,X);return Y.push(_),ct(Y).then(()=>{Y=[];for(const E of s.list())Y.push(ur(E,F,X));return Y.push(_),ct(Y)}).then(()=>{Y=jc(Ie,"beforeRouteUpdate",F,X);for(const E of Ie)E.updateGuards.forEach(O=>{Y.push(ur(O,F,X))});return Y.push(_),ct(Y)}).then(()=>{Y=[];for(const E of Le)if(E.beforeEnter)if(ln(E.beforeEnter))for(const O of E.beforeEnter)Y.push(ur(O,F,X));else Y.push(ur(E.beforeEnter,F,X));return Y.push(_),ct(Y)}).then(()=>(F.matched.forEach(E=>E.enterCallbacks={}),Y=jc(Le,"beforeRouteEnter",F,X,w),Y.push(_),ct(Y))).then(()=>{Y=[];for(const E of o.list())Y.push(ur(E,F,X));return Y.push(_),ct(Y)}).catch(E=>Sn(E,8)?E:Promise.reject(E))}function A(F,X,Y){l.list().forEach(re=>w(()=>re(F,X,Y)))}function S(F,X,Y,re,Ie){const Le=V(F,X);if(Le)return Le;const _=X===ar,E=Ii?history.state:{};Y&&(re||_?i.replace(F.fullPath,De({scroll:_&&E&&E.scroll},Ie)):i.push(F.fullPath,Ie)),c.value=F,Yt(F,X,Y,_),Zt()}let b;function St(){b||(b=i.listen((F,X,Y)=>{if(!cn.listening)return;const re=x(F),Ie=K(re);if(Ie){T(De(Ie,{replace:!0}),re).catch(Ks);return}u=re;const Le=c.value;Ii&&H2(qm(Le.fullPath,Y.delta),Xl()),I(re,Le).catch(_=>Sn(_,12)?_:Sn(_,2)?(T(_.to,re).then(E=>{Sn(E,20)&&!Y.delta&&Y.type===yo.pop&&i.go(-1,!1)}).catch(Ks),Promise.reject()):(Y.delta&&i.go(-Y.delta,!1),Ee(_,re,Le))).then(_=>{_=_||S(re,Le,!1),_&&(Y.delta&&!Sn(_,8)?i.go(-Y.delta,!1):Y.type===yo.pop&&Sn(_,20)&&i.go(-1,!1)),A(re,Le,_)}).catch(Ks)}))}let Qt=Ts(),nt=Ts(),Pe;function Ee(F,X,Y){Zt(F);const re=nt.list();return re.length?re.forEach(Ie=>Ie(F,X,Y)):console.error(F),Promise.reject(F)}function qt(){return Pe&&c.value!==ar?Promise.resolve():new Promise((F,X)=>{Qt.add([F,X])})}function Zt(F){return Pe||(Pe=!F,St(),Qt.list().forEach(([X,Y])=>F?Y(F):X()),Qt.reset()),F}function Yt(F,X,Y,re){const{scrollBehavior:Ie}=t;if(!Ii||!Ie)return Promise.resolve();const Le=!Y&&W2(qm(F.fullPath,0))||(re||!Y)&&history.state&&history.state.scroll||null;return kg().then(()=>Ie(F,X,Le)).then(_=>_&&z2(_)).catch(_=>Ee(_,F,X))}const Ke=F=>i.go(F);let Ge;const Xn=new Set,cn={currentRoute:c,listening:!0,addRoute:v,removeRoute:C,hasRoute:N,getRoutes:L,resolve:x,options:t,push:U,replace:ne,go:Ke,back:()=>Ke(-1),forward:()=>Ke(1),beforeEach:s.add,beforeResolve:o.add,afterEach:l.add,onError:nt.add,isReady:qt,install(F){const X=this;F.component("RouterLink",yO),F.component("RouterView",EO),F.config.globalProperties.$router=X,Object.defineProperty(F.config.globalProperties,"$route",{enumerable:!0,get:()=>ve(c)}),Ii&&!Ge&&c.value===ar&&(Ge=!0,U(i.location).catch(Ie=>{}));const Y={};for(const Ie in ar)Object.defineProperty(Y,Ie,{get:()=>c.value[Ie],enumerable:!0});F.provide(Jl,X),F.provide($w,Eg(Y)),F.provide(Fu,c);const re=F.unmount;Xn.add(F),F.unmount=function(){Xn.delete(F),Xn.size<1&&(u=ar,b&&b(),b=null,c.value=ar,Ge=!1,Pe=!1),re()}}};function ct(F){return F.reduce((X,Y)=>X.then(()=>w(Y)),Promise.resolve())}return cn}function IO(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const l=e.matched[o];l&&(t.matched.find(u=>Gi(u,l))?r.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(u=>Gi(u,c))||i.push(c))}return[n,r,i]}function Bw(){return _n(Jl)}function AO(t){return t==null?null:new Intl.DateTimeFormat("es-AR",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(t).replace(",","")}function RO(t){const e=new Date(t.seconds*1e3+t.nanoseconds/1e6),n={year:"numeric",month:"numeric",day:"numeric"};return e.toLocaleDateString(void 0,n)}const PO={key:0,class:"flex flex-col items-center"},SO=R("h1",{class:"text-3xl font-black mb-4 text-center w-100"},"Mi perfil",-1),CO={key:0,class:"flex w-[100%] justify-center items-center"},kO={class:"flex flex-col items-center p-3 mb-2 bg-light shadow mr-10"},xO=["src"],NO={class:"mt-5"},OO=R("p",{class:"font-bold"},"Email",-1),DO={class:"mb-2"},LO=R("p",{class:"font-bold"},"Nombre",-1),VO={class:"mb-2"},MO=R("p",{class:"font-bold"},"Rol",-1),FO=R("h2",{class:"mb-3 text-xl font-black"},"Mis cursos comprados",-1),UO={key:0},$O={key:1},BO={class:"flex flex-col"},jO=["disabled"],qO={key:0,class:"container"},zO=R("p",null,"Previsualización de la foto seleccionada",-1),HO=["src"],WO={__name:"MyProfile",setup(t){const{user:e,userLoading:n}=Hv();Bw();const{editData:r,editing:i,editingLoading:s,handleEditShow:o,handleEditHide:l,handleEditForm:c}=x(e),{editingPhoto:u,editingPhotoLoading:f,photoData:p,handlePhotoFormShow:m,handlePhotoFormeHide:v,handlePhotoFormSubmit:C,handlePhotoChange:L}=N();function N(){const k=Vt(!1),V=Vt(!1),U=Vt({file:null,preview:null});function ne(){k.value=!0}function K(){k.value=!1}async function T(){V.value=!0;try{await ak(U.value.file)}catch{}V.value=!1}async function y(w){U.value.file=w.target.files[0];const I=new FileReader;I.addEventListener("load",function(){U.value.preview=I.result}),I.readAsDataURL(U.value.file)}return{editingPhoto:k,editingPhotoLoading:V,photoData:U,handlePhotoFormShow:ne,handlePhotoFormeHide:K,handlePhotoFormSubmit:T,handlePhotoChange:y}}function x(k){const V=Vt(!1),U=Vt(!1),ne=Vt({displayName:""});async function K(){try{U.value=!0,await Gv({displayName:ne.value.displayName})}catch{}y(),U.value=!1}function T(){ne.value.displayName=k.value.displayName,V.value=!0}function y(){V.value=!1}return{editData:ne,editing:V,editingLoading:U,handleEditShow:T,handleEditHide:y,handleEditForm:K}}return(k,V)=>ve(n)?(ie(),Ir(Or,{key:1})):(ie(),ce("div",PO,[SO,!ve(i)&&!ve(u)?(ie(),ce("div",CO,[R("div",kO,[ve(e).photoURL?(ie(),ce("img",{key:0,src:ve(e).photoURL,alt:"Foto del perfil",class:"w-[100px] h-[100px] rounded-full",style:{"object-fit":"cover"}},null,8,xO)):Ln("",!0),R("button",{class:"bg-white p-1 rounded-full -mt-7 text-sm",onClick:V[0]||(V[0]=(...U)=>ve(m)&&ve(m)(...U))},ze(ve(e).photoURL?"Actualizar":"Cargar"),1),R("div",NO,[OO,R("p",DO,ze(ve(e).email),1),LO,R("p",VO,ze(ve(e).displayName||"No especificado"),1),MO,R("p",null,ze(ve(e).role||"Usuario estándar"),1),te(dn,{onClick:ve(o)},{default:Ne(()=>[be("Editar mis datos")]),_:1},8,["onClick"])])]),R("div",null,[FO,ve(e).plansPurchased?(ie(),ce("ul",$O,[(ie(!0),ce(Ve,null,Xi(ve(e).plansPurchased,U=>(ie(),ce("li",{key:U.id},ze(ve(RO)(U.purchaseDate))+" "+ze(U.name),1))),128))])):(ie(),ce("p",UO,"No tenés ningún curso comprado."))])])):ve(i)?(ie(),ce("form",{key:1,action:"#",method:"post",onSubmit:V[2]||(V[2]=ei((...U)=>ve(c)&&ve(c)(...U),["prevent"]))},[R("div",null,[te(Ki,{for:"displayName"},{default:Ne(()=>[be("Nombre")]),_:1}),te(go,{id:"displayName",disabled:ve(s),modelValue:ve(r).displayName,"onUpdate:modelValue":V[1]||(V[1]=U=>ve(r).displayName=U)},null,8,["disabled","modelValue"])]),te(dn,{loading:ve(s)},{default:Ne(()=>[be("Actualizar ")]),_:1},8,["loading"]),te(dn,{onClick:ve(l)},{default:Ne(()=>[be("Cancelar ")]),_:1},8,["onClick"])],32)):(ie(),ce("form",{key:2,action:"#",method:"post",onSubmit:V[4]||(V[4]=ei((...U)=>ve(C)&&ve(C)(...U),["prevent"]))},[R("div",BO,[te(Ki,{for:"newPhoto"},{default:Ne(()=>[be("Foto de Perfil")]),_:1}),R("input",{type:"file",id:"newPhoto",disabled:ve(f),onChange:V[3]||(V[3]=(...U)=>ve(L)&&ve(L)(...U))},null,40,jO)]),ve(p).preview!==null?(ie(),ce("div",qO,[zO,R("img",{src:ve(p).preview,alt:"Foto de prefil",class:"mt-3 m-auto",style:{width:"200px",height:"200px"}},null,8,HO)])):Ln("",!0),te(dn,{loading:ve(f),onClick:k.doEditProfile},{default:Ne(()=>[be("Actualizar foto ")]),_:1},8,["loading","onClick"]),te(dn,{onClick:ve(v)},{default:Ne(()=>[be("Cancelar ")]),_:1},8,["onClick"])],32))]))}},KO=["value"],jw={__name:"BaseTextarea",props:{modelValue:{type:String,required:!0}},emits:["update:modelValue"],setup(t){return(e,n)=>(ie(),ce("textarea",{class:"border border-blue-500 rounded p-1 w-full",value:t.modelValue,onInput:n[0]||(n[0]=r=>e.$emit("update:modelValue",r.target.value))},null,40,KO))}},qw={};async function GO({senderId:t,receiverId:e,message:n}){const r=await zw({senderId:t,receiverId:e}),i=ns(Bt,`private-chats/${r.id}/messages`);return await Gh(i,{senderId:t,message:n,created_at:Wy()}),!0}async function zw({senderId:t,receiverId:e}){const n=XO({senderId:t,receiverId:e});if(n)return n;const r=ns(Bt,"private-chats"),i=qh(r,uR("users","==",{[t]:!0,[e]:!0}),fR(1)),s=await jy(i);let o;return s.empty?o=await Gh(r,{users:{[t]:!0,[e]:!0}}):o=s.docs[0],YO({senderId:t,receiverId:e},o),o}async function QO({senderId:t,receiverId:e},n){const r=await zw({senderId:t,receiverId:e}),i=ns(Bt,`private-chats/${r.id}/messages`),s=qh(i,hR("created_at"));return zy(s,o=>{const l=o.docs.map(c=>{var u;return{id:c.id,senderId:c.data().senderId,message:c.data().message,created_at:(u=c.data().created_at)==null?void 0:u.toDate()}});n(l)})}function YO({senderId:t,receiverId:e},n){const r=t+e;qw[r]=n}function XO({senderId:t,receiverId:e}){const n=t+e;return qw[n]||null}const JO={name:"PrivateChat",components:{Loader:Or,BaseTextarea:jw,BaseButton:dn},data(){return{userLoading:!0,user:{id:null,email:null},authUser:{id:null,email:null},unsubscribeAuth:()=>{},newMessage:{message:""},messagesLoading:!0,messages:[],unsubscribeMessages:()=>{}}},methods:{handleSendMessage(){GO({senderId:this.authUser.id,receiverId:this.user.id,message:this.newMessage.message}),this.newMessage.message=""},formatDate(t){return AO(t)}},async mounted(){this.userLoading=!0,this.user=await Cr(this.$route.params.id),this.unsubscribeAuth=Wl(t=>this.authUser=t),this.userLoading=!1,this.messagesLoading=!0,this.unsubscribeMessages=await QO({senderId:this.authUser.id,receiverId:this.user.id},t=>this.messages=t),this.messagesLoading=!1},unmounted(){this.unsubscribeAuth(),this.unsubscribeMessages()}},ZO={class:"text-3xl font-black mb-4 text-center"},eD=R("h2",{class:"sr-only"},"Mensajes",-1),tD={class:"flex flex-col items-start min-h-[400px] max-w-[800px] mx-auto p-4 mb-4 border border-gray-300 rounded"},nD={class:"text-right"},rD=R("h2",{class:"sr-only"},"Enviar mensajes",-1),iD=R("label",{for:"message",class:"sr-only"},null,-1);function sD(t,e,n,r,i,s){const o=Qe("Loader"),l=Qe("BaseTextarea"),c=Qe("Button");return i.userLoading?(ie(),Ir(o,{key:0})):(ie(),ce(Ve,{key:1},[R("h1",ZO,"Conversación con "+ze(i.user.email),1),eD,R("div",tD,[i.messagesLoading?(ie(),Ir(o,{key:0})):(ie(!0),ce(Ve,{key:1},Xi(i.messages,u=>(ie(),ce("div",{key:u.id,class:vo(["max-w-[70%] p-2 rounded mb-2",{"bg-gray-100":u.senderId!==i.authUser.id,"bg-green-200":u.senderId===i.authUser.id,"self-end":u.senderId===i.authUser.id}])},[R("div",null,ze(u.message),1),R("div",nD,ze(s.formatDate(u.created_at)||"Enviando..."),1)],2))),128))]),rD,R("form",{class:"flex gap-2 max-w-[800px] mx-auto",action:"",onSubmit:e[1]||(e[1]=ei((...u)=>s.handleSendMessage&&s.handleSendMessage(...u),["prevent"]))},[iD,te(l,{id:"message",class:"w-10/12",modelValue:i.newMessage.message,"onUpdate:modelValue":e[0]||(e[0]=u=>i.newMessage.message=u)},null,8,["modelValue"]),te(c,{class:"bg-green-600 rounded text-white w-2/12"},{default:Ne(()=>[be("Enviar")]),_:1})],32)],64))}const oD=jt(JO,[["render",sD]]),aD={name:"Register",components:{BaseButton:dn,BaseLabel:Ki,BaseInput:go},data(){return{isLoading:!1,newUser:{email:"",password:""}}},methods:{async handleSubmit(){this.isLoading=!0;try{await ik({...this.newUser}),this.$router.push("/")}catch{}this.isLoading=!1}}},lD={class:"max-w-screen-sm flex flex-col justify-center m-auto"},cD=R("h1",{class:"text-3xl font-black mb-4"},"Crear cuenta",-1);function uD(t,e,n,r,i,s){const o=Qe("BaseLabel"),l=Qe("BaseInput"),c=Qe("BaseButton");return ie(),ce("div",lD,[cD,R("form",{action:"#",onSubmit:e[2]||(e[2]=ei((...u)=>s.handleSubmit&&s.handleSubmit(...u),["prevent"]))},[R("div",null,[te(o,{modelFor:"email"},{default:Ne(()=>[be("Email")]),_:1}),te(l,{type:"email",id:"email",modelValue:i.newUser.email,"onUpdate:modelValue":e[0]||(e[0]=u=>i.newUser.email=u)},null,8,["modelValue"])]),R("div",null,[te(o,{modelFor:"password"},{default:Ne(()=>[be("Contraseña")]),_:1}),te(l,{type:"password",id:"password",modelValue:i.newUser.password,"onUpdate:modelValue":e[1]||(e[1]=u=>i.newUser.password=u)},null,8,["modelValue"])]),te(c,null,{default:Ne(()=>[be("Registrarme")]),_:1})],32)])}const hD=jt(aD,[["render",uD]]),fD={class:"max-w-screen-sm flex flex-col justify-center m-auto"},dD=R("h1",{class:"text-3xl font-black mb-4"},"Iniciar sesión",-1),pD={key:0,class:"text-red-500 mt-2"},mD={__name:"Login",setup(t){const e=Bw(),n=Vt(!1);let r=Vt(null);const i=Vt({email:"",password:""}),s=async()=>{try{n.value=!0,await sk({...i.value}),ck()&&e.push("/")}catch(o){(o.code==="auth/missing-password"||o.code==="auth/user-not-found"||o.code==="auth/wrong-password"||o.code==="auth/invalid-login-credentials")&&(r="Credenciales inválidas")}n.value=!1};return(o,l)=>(ie(),ce("div",fD,[dD,R("form",{action:"#",onSubmit:ei(s,["prevent"])},[R("div",null,[te(Ki,{modelFor:"email"},{default:Ne(()=>[be("Email")]),_:1}),te(go,{disabled:n.value,type:"email",id:"email",modelValue:i.value.email,"onUpdate:modelValue":l[0]||(l[0]=c=>i.value.email=c)},null,8,["disabled","modelValue"])]),R("div",null,[te(Ki,{modelFor:"password"},{default:Ne(()=>[be("Contraseña")]),_:1}),te(go,{disabled:n.value,type:"password",id:"password",modelValue:i.value.password,"onUpdate:modelValue":l[1]||(l[1]=c=>i.value.password=c)},null,8,["disabled","modelValue"])]),te(dn,{loading:n.value},{default:Ne(()=>[be("Iniciar sesión")]),_:1},8,["loading"])],32),ve(r)?(ie(),ce("div",pD,ze(ve(r)),1)):Ln("",!0)]))}},gD=ns(Bt,"cursos");function _D(t){return Gh(gD,{...t})}async function yD(t){const e=Gn(Bt,"cursos",t);try{await gR(e)}catch{}}const vD={name:"planPanel",data(){return{isLoading:!0,plans:[],showingConfirmation:!1,planIdToDelete:null}},methods:{eliminarCurso(){yD(this.planIdToDelete).then(()=>{}).catch(t=>{})},showConfirmation(t){this.planIdToDelete=t,this.showingConfirmation=!0}},mounted(){this.isLoading=!0,Wv(t=>{this.plans=t,this.isLoading=!1,this.showingConfirmation=!1})},components:{Loader:Or}},wD={key:0,class:"container flex flex-col"},bD={class:"container mx-auto"},ED={class:"overflow-x-auto"},TD={class:"min-w-full"},ID=R("thead",null,[R("tr",null,[R("th",{class:"px-6 py-3 bg-gray-300 text-left"},"Nombre"),R("th",{class:"px-6 py-3 bg-gray-300 text-left"},"Descripción"),R("th",{class:"px-6 py-3 bg-gray-300 text-left"},"Precio"),R("th",{class:"px-6 py-3 bg-gray-300"})])],-1),AD={class:"border px-6 py-4"},RD={class:"border px-6 py-4"},PD={class:"border px-6 py-4"},SD={class:"border px-6 py-4"},CD=["onClick"],kD={key:0,class:"modal flex flex-col"},xD=R("p",null,"Estás a punto de eliminar el curso. ¿Deseas continuar con la acción?",-1),ND={key:1,class:"text-center"};function OD(t,e,n,r,i,s){const o=Qe("Loader");return i.isLoading?(ie(),ce("div",ND,[te(o)])):(ie(),ce("div",wD,[R("div",bD,[R("div",ED,[R("table",TD,[ID,R("tbody",null,[(ie(!0),ce(Ve,null,Xi(i.plans,l=>(ie(),ce("tr",null,[R("td",AD,ze(l.name),1),R("td",RD,ze(l.description),1),R("td",PD,"$"+ze(l.price),1),R("td",SD,[R("button",{onClick:c=>s.showConfirmation(l.id),class:"bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"},"Eliminar",8,CD)])]))),256))])]),i.showingConfirmation?(ie(),ce("div",kD,[xD,R("button",{class:"mx-auto mt-3 py-1 w-40 bg-red-600 rounded text-white",onClick:e[0]||(e[0]=l=>s.eliminarCurso(i.planIdToDelete))},"Sí, eliminarlo")])):Ln("",!0)])])]))}const DD=jt(vD,[["render",OD]]),LD={name:"planAdmin",components:{planPanel:DD,BaseButton:dn},data(){return{isLoading:!0,plans:[]}}},VD=R("p",{class:"text-xl font-black mb-6 text-center"},"¡Agrega y elimina los cursos cuando desees!",-1),MD={class:"flex"};function FD(t,e,n,r,i,s){const o=Qe("planPanel"),l=Qe("router-link");return ie(),ce(Ve,null,[VD,te(o),R("div",MD,[te(l,{class:"my-5 py-3 px-3 rounded w-full text-center bg-blue-700 text-white hover:bg-blue-600 disabled:bg-blue-400 active:bg-blue-800 transition",to:"/cargar-curso"},{default:Ne(()=>[be("Cargar nuevo curso")]),_:1})])],64)}const UD=jt(LD,[["render",FD]]),$D={name:"Newplan",components:{BaseButton:dn,BaseInput:go,BaseLabel:Ki,BaseTextarea:jw},data(){return{isLoading:!0,plans:[],isSaving:!1,newplan:{name:"",description:"",price:""},validationErrors:{name:"",description:"",price:""}}},methods:{validateForm(){let t=!0;return this.newplan.name?this.validationErrors.name="":(this.validationErrors.name="Incluye un nombre para el curso",t=!1),this.newplan.description?this.validationErrors.description="":(this.validationErrors.description="Incluye una descripción para el curso",t=!1),this.newplan.price?isNaN(this.newplan.price)||parseFloat(this.newplan.price)<=0?(this.validationErrors.price="El precio debe ser un número válido",t=!1):this.validationErrors.price="":(this.validationErrors.price="Incluye un precio para el curso",t=!1),t},saveplan(){this.isSaving||!this.validateForm()||(this.isSaving=!0,_D({name:this.newplan.name,description:this.newplan.description,price:this.newplan.price}),this.$router.push("/panel"))}}},BD={class:"max-w-screen-sm flex flex-col justify-center m-auto"},jD=R("h1",{class:"text-3xl font-black mb-4 text-center"},"Cargar nuevo curso",-1),qD=R("p",{class:"font-black mb-4"},"Agrega el ítem a continuación",-1),zD={class:"text-red-500"},HD={class:"text-red-500"},WD={class:"text-red-500"};function KD(t,e,n,r,i,s){const o=Qe("BaseLabel"),l=Qe("BaseInput"),c=Qe("BaseTextarea"),u=Qe("BaseButton");return ie(),ce("div",BD,[jD,qD,R("form",{action:"#",onSubmit:e[3]||(e[3]=ei((...f)=>s.saveplan&&s.saveplan(...f),["prevent"]))},[R("div",null,[te(o,{modelFor:"name"},{default:Ne(()=>[be("Nombre")]),_:1}),te(l,{id:"name",modelValue:i.newplan.name,"onUpdate:modelValue":e[0]||(e[0]=f=>i.newplan.name=f)},null,8,["modelValue"]),R("p",zD,ze(i.validationErrors.name),1)]),R("div",null,[te(o,{modelFor:"description"},{default:Ne(()=>[be("Descripción")]),_:1}),te(c,{id:"description",modelValue:i.newplan.description,"onUpdate:modelValue":e[1]||(e[1]=f=>i.newplan.description=f)},null,8,["modelValue"]),R("p",HD,ze(i.validationErrors.description),1)]),R("div",null,[te(o,{modelFor:"price"},{default:Ne(()=>[be("Precio")]),_:1}),te(l,{id:"price",modelValue:i.newplan.price,"onUpdate:modelValue":e[2]||(e[2]=f=>i.newplan.price=f)},null,8,["modelValue"]),R("p",WD,ze(i.validationErrors.price),1)]),te(u,{type:"submit"},{default:Ne(()=>[be("Cargar curso")]),_:1})],32)])}const GD=jt($D,[["render",KD]]),QD={class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"},YD={class:"bg-white p-6 rounded-md shadow-md mb-4 flex flex-col justify-between h-full bg-[#ebc5eb86]"},XD={class:"text-xl font-bold mb-2"},JD={class:"text-gray-600"},ZD={class:"mt-4"},eL={key:0,class:"bg-slate-200 px-2 rounded font-bold w-fit"},tL=["onClick"],nL={key:0},rL={key:1},iL=["disabled"],sL={key:1},oL={__name:"planCards",setup(t){const{user:e}=Hv(),n=Vt(!0),r=Vt([]);Zu(async()=>{n.value=!0,await JC(e),Wv(async s=>{var u;const o=((u=e.value)==null?void 0:u.plans)||[],c=(await Cr(e.value.id)).plansPurchased||[];r.value=s.map(f=>{const p=o.some(m=>m===f.id)||c.some(m=>m.planId===f.id);return{...f,isPurchased:p,isPurchasing:!1}}),n.value=!1})});async function i(s,o){const l=await Cr(s);(!l.plansPurchased||!l.plansPurchased.includes(o))&&(r.value=r.value.map(c=>({...c,isPurchasing:c.id===o})),await nk(s,o),r.value=r.value.map(c=>c.id===o?{...c,isPurchased:!0,isPurchasing:!1}:c),r.value=r.value.map(c=>({...c,isPurchasing:!1})))}return(s,o)=>(ie(),ce("div",QD,[n.value?(ie(),ce("div",sL,[te(Or)])):(ie(!0),ce(Ve,{key:0},Xi(r.value,l=>(ie(),ce("div",{key:l.id},[R("div",YD,[R("div",null,[R("h2",XD,ze(l.name),1),R("p",JD,ze(l.description),1)]),R("div",ZD,[l.isPurchased?Ln("",!0):(ie(),ce("p",eL,"$"+ze(l.price),1)),l.isPurchased?(ie(),ce("button",{key:2,disabled:l.isPurchased,class:vo([{"bg-gray-300":l.isPurchased,"cursor-de fault":l.isPurchased},"mt-2 bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"])}," Comprado ",10,iL)):(ie(),ce("button",{key:1,onClick:c=>i(ve(e).id,l.id),class:"mt-2 bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"},[l.isPurchasing?(ie(),ce("span",nL,[te(Or)])):(ie(),ce("span",rL,"Comprar"))],8,tL))])])]))),128))]))}},aL={name:"plans",components:{planCards:oL}},lL=R("h1",{class:"text-3xl font-black mb-4 text-center"},"Explora nuestros Servicios",-1),cL=R("p",{class:"text-center max-w-[800px] mt-5 mb-5 m-auto"},[be("En "),R("strong",null,"iLearn"),be(", te ofrecemos una amplia gama de cursos diseñados para enriquecer tu conocimiento y potenciar tu crecimiento personal y profesional. ¡Descubre tus próximas oportunidades de aprendizaje y comienza a construir un futuro brillante hoy mismo!")],-1);function uL(t,e,n,r,i,s){const o=Qe("planCards");return ie(),ce(Ve,null,[lL,cL,te(o)],64)}const hL=jt(aL,[["render",uL]]),fL="/assets/chat-884eec81.png",dL="/assets/email-7e7fd01d.png",pL="/assets/phone-531d762d.png",mL={name:"Contact"},gL=R("div",null,[R("h1",{class:"text-3xl font-black mb-4 text-center"},"Contacto"),R("p",{class:"text-center mb-10"},"Elige el medio que prefieras para contactarte con nuestro equipo")],-1),_L={class:"flex justify-between"},yL={class:"flex flex-col items-center"},vL=R("img",{src:fL,alt:"chat",class:"max-w-[150px]"},null,-1),wL=R("h2",{class:"mt-2 mb-2 text-xl font-bold"},"Chat",-1),bL=X0('<div class="flex flex-col items-center"><img src="'+dL+'" alt="email" class="max-w-[150px]"><h2 class="mt-2 mb-2 text-xl font-bold">Email</h2><p>Escribe tu consulta a <a class="text-blue-600" href="mailto:mesadeayuda@ilearn.com">mesadeayuda@ilearn.com</a></p></div><div class="flex flex-col items-center"><img src="'+pL+'" alt="teléfono" class="max-w-[150px]"><h2 class="mt-2 mb-2 text-xl font-bold">Teléfono</h2><p>Comunícate al +54 9 11 49384958</p></div>',2);function EL(t,e,n,r,i,s){const o=Qe("router-link");return ie(),ce(Ve,null,[gL,R("template",_L,[R("div",yL,[vL,wL,te(o,{to:"/usuario/lpzKk2JucWR1Bqyr3IOWlht8LQ33/chat",class:"text-blue-600"},{default:Ne(()=>[be("Inicia una conversación con un ejecutivo de iLearn")]),_:1})]),bL])],64)}const TL=jt(mL,[["render",EL]]),IL={name:"UsersList",components:{Loader:Or},data(){return{usersLoading:!0,userList:[]}},async mounted(){this.usersLoading=!0,await this.fetchUsers(),this.usersLoading=!1},methods:{async fetchUsers(){try{const t=await QC();this.userList=t}catch{}}}},AL={key:1,class:"text-center"},RL=R("h1",{class:"text-3xl font-black mb-4"},"Usuarios",-1),PL=R("p",{class:"mb-2"},"Listado de usuarios",-1),SL={class:"min-w-full border border-gray-300"},CL=R("thead",null,[R("tr",null,[R("th",{class:"border border-gray-300 px-4 py-2"},"Email"),R("th",{class:"border border-gray-300 px-4 py-2"},"Acciones")])],-1),kL={class:"border border-gray-300 px-4 py-2"},xL={class:"border border-gray-300 px-4 py-2"};function NL(t,e,n,r,i,s){const o=Qe("Loader"),l=Qe("router-link");return i.usersLoading?(ie(),Ir(o,{key:0})):(ie(),ce("div",AL,[RL,PL,R("table",SL,[CL,R("tbody",null,[(ie(!0),ce(Ve,null,Xi(i.userList,c=>(ie(),ce("tr",{key:c.id},[R("td",kL,ze(c.email),1),R("td",xL,[te(l,{to:`/usuario/${c.id}/chat`,class:"text-blue-600 underline mr-2"},{default:Ne(()=>[be(" Chatear ")]),_:2},1032,["to"]),te(l,{to:`/usuario/${c.id}/cursos`,class:"text-green-600 underline"},{default:Ne(()=>[be(" Ver cursos ")]),_:2},1032,["to"])])]))),128))])])]))}const OL=jt(IL,[["render",NL]]),DL={name:"Userplans",components:{Loader:Or},data(){return{userLoading:!0,user:{id:null,email:null,displayName:null,role:null,photoURL:null,plansPurchased:[]},planData:[]}},methods:{async loadUserProfile(){try{const t=this.$route.params.id,e=await Cr(t);this.user={...e}}catch{}},async loadplanData(){try{this.planData=await rk(this.user.id)}catch{}this.userLoading=!1}},async mounted(){this.userLoading=!0,await this.loadUserProfile(),await this.loadplanData(),this.userLoading=!1}},LL={class:"font-bold text-center text-3xl"},VL={class:"text-center mt-5"},ML={key:0,class:"text-center mt-4"};function FL(t,e,n,r,i,s){const o=Qe("Loader");return ie(),ce("div",null,[R("h1",LL,"Cursos comprados por "+ze(i.user.email),1),i.userLoading?(ie(),Ir(o,{key:0})):(ie(),ce(Ve,{key:1},[R("ul",VL,[(ie(!0),ce(Ve,null,Xi(i.planData,l=>(ie(),ce("li",{key:l.id,class:"text-xl"},ze(l.name),1))),128))]),i.planData.length===0&&!i.userLoading?(ie(),ce("div",ML,ze(i.user.email)+" no tiene ningún curso comprado. ",1)):Ln("",!0)],64))])}const UL=jt(DL,[["render",FL]]),$L=[{path:"/",component:Sw},{path:"/perfil",component:WO,meta:{requiresAuth:!0}},{path:"/usuario/:id/chat",component:oD,meta:{requiresAuth:!0}},{path:"/usuario/:id/cursos",component:UL,meta:{requiresAuth:!0}},{path:"/panel",component:UD,meta:{requiresAuth:!0}},{path:"/cargar-curso",component:GD,meta:{requiresAuth:!0}},{path:"/contacto",component:TL,meta:{requiresAuth:!0}},{path:"/usuarios",component:OL,meta:{requiresAuth:!0}},{path:"/servicios",component:hL,meta:{requiresAuth:!0}},{path:"/registro",component:hD},{path:"/login",component:mD}],Hw=TO({routes:$L,history:X2()});let Ww={id:null,email:null};Wl(t=>Ww=t);Hw.beforeEach((t,e)=>{if(Ww.id===null&&t.meta.requiresAuth)return"/login"});const Kw=DE(o2);Kw.use(Hw);Kw.mount("#app");
