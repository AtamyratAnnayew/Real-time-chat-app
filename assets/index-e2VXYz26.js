(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();var t_={exports:{}},vc={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var c0;function bD(){if(c0)return vc;c0=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(n,a,l){var c=null;if(l!==void 0&&(c=""+l),a.key!==void 0&&(c=""+a.key),"key"in a){l={};for(var f in a)f!=="key"&&(l[f]=a[f])}else l=a;return a=l.ref,{$$typeof:i,type:n,key:c,ref:a!==void 0?a:null,props:l}}return vc.Fragment=e,vc.jsx=t,vc.jsxs=t,vc}var h0;function ID(){return h0||(h0=1,t_.exports=bD()),t_.exports}var De=ID(),n_={exports:{}},Ce={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d0;function AD(){if(d0)return Ce;d0=1;var i=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),T=Symbol.iterator;function b(D){return D===null||typeof D!="object"?null:(D=T&&D[T]||D["@@iterator"],typeof D=="function"?D:null)}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},G=Object.assign,$={};function Y(D,J,ue){this.props=D,this.context=J,this.refs=$,this.updater=ue||O}Y.prototype.isReactComponent={},Y.prototype.setState=function(D,J){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,J,"setState")},Y.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function fe(){}fe.prototype=Y.prototype;function ae(D,J,ue){this.props=D,this.context=J,this.refs=$,this.updater=ue||O}var ne=ae.prototype=new fe;ne.constructor=ae,G(ne,Y.prototype),ne.isPureReactComponent=!0;var ve=Array.isArray,me={H:null,A:null,T:null,S:null,V:null},Te=Object.prototype.hasOwnProperty;function N(D,J,ue,ie,ye,Ne){return ue=Ne.ref,{$$typeof:i,type:D,key:J,ref:ue!==void 0?ue:null,props:Ne}}function A(D,J){return N(D.type,J,void 0,void 0,void 0,D.props)}function R(D){return typeof D=="object"&&D!==null&&D.$$typeof===i}function V(D){var J={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(ue){return J[ue]})}var x=/\/+/g;function M(D,J){return typeof D=="object"&&D!==null&&D.key!=null?V(""+D.key):J.toString(36)}function C(){}function en(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(C,C):(D.status="pending",D.then(function(J){D.status==="pending"&&(D.status="fulfilled",D.value=J)},function(J){D.status==="pending"&&(D.status="rejected",D.reason=J)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function vt(D,J,ue,ie,ye){var Ne=typeof D;(Ne==="undefined"||Ne==="boolean")&&(D=null);var Se=!1;if(D===null)Se=!0;else switch(Ne){case"bigint":case"string":case"number":Se=!0;break;case"object":switch(D.$$typeof){case i:case e:Se=!0;break;case y:return Se=D._init,vt(Se(D._payload),J,ue,ie,ye)}}if(Se)return ye=ye(D),Se=ie===""?"."+M(D,0):ie,ve(ye)?(ue="",Se!=null&&(ue=Se.replace(x,"$&/")+"/"),vt(ye,J,ue,"",function(wi){return wi})):ye!=null&&(R(ye)&&(ye=A(ye,ue+(ye.key==null||D&&D.key===ye.key?"":(""+ye.key).replace(x,"$&/")+"/")+Se)),J.push(ye)),1;Se=0;var Gt=ie===""?".":ie+":";if(ve(D))for(var rt=0;rt<D.length;rt++)ie=D[rt],Ne=Gt+M(ie,rt),Se+=vt(ie,J,ue,Ne,ye);else if(rt=b(D),typeof rt=="function")for(D=rt.call(D),rt=0;!(ie=D.next()).done;)ie=ie.value,Ne=Gt+M(ie,rt++),Se+=vt(ie,J,ue,Ne,ye);else if(Ne==="object"){if(typeof D.then=="function")return vt(en(D),J,ue,ie,ye);throw J=String(D),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return Se}function K(D,J,ue){if(D==null)return D;var ie=[],ye=0;return vt(D,ie,"","",function(Ne){return J.call(ue,Ne,ye++)}),ie}function oe(D){if(D._status===-1){var J=D._result;J=J(),J.then(function(ue){(D._status===0||D._status===-1)&&(D._status=1,D._result=ue)},function(ue){(D._status===0||D._status===-1)&&(D._status=2,D._result=ue)}),D._status===-1&&(D._status=0,D._result=J)}if(D._status===1)return D._result.default;throw D._result}var _e=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)};function He(){}return Ce.Children={map:K,forEach:function(D,J,ue){K(D,function(){J.apply(this,arguments)},ue)},count:function(D){var J=0;return K(D,function(){J++}),J},toArray:function(D){return K(D,function(J){return J})||[]},only:function(D){if(!R(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},Ce.Component=Y,Ce.Fragment=t,Ce.Profiler=a,Ce.PureComponent=ae,Ce.StrictMode=n,Ce.Suspense=m,Ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=me,Ce.__COMPILER_RUNTIME={__proto__:null,c:function(D){return me.H.useMemoCache(D)}},Ce.cache=function(D){return function(){return D.apply(null,arguments)}},Ce.cloneElement=function(D,J,ue){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var ie=G({},D.props),ye=D.key,Ne=void 0;if(J!=null)for(Se in J.ref!==void 0&&(Ne=void 0),J.key!==void 0&&(ye=""+J.key),J)!Te.call(J,Se)||Se==="key"||Se==="__self"||Se==="__source"||Se==="ref"&&J.ref===void 0||(ie[Se]=J[Se]);var Se=arguments.length-2;if(Se===1)ie.children=ue;else if(1<Se){for(var Gt=Array(Se),rt=0;rt<Se;rt++)Gt[rt]=arguments[rt+2];ie.children=Gt}return N(D.type,ye,void 0,void 0,Ne,ie)},Ce.createContext=function(D){return D={$$typeof:c,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:l,_context:D},D},Ce.createElement=function(D,J,ue){var ie,ye={},Ne=null;if(J!=null)for(ie in J.key!==void 0&&(Ne=""+J.key),J)Te.call(J,ie)&&ie!=="key"&&ie!=="__self"&&ie!=="__source"&&(ye[ie]=J[ie]);var Se=arguments.length-2;if(Se===1)ye.children=ue;else if(1<Se){for(var Gt=Array(Se),rt=0;rt<Se;rt++)Gt[rt]=arguments[rt+2];ye.children=Gt}if(D&&D.defaultProps)for(ie in Se=D.defaultProps,Se)ye[ie]===void 0&&(ye[ie]=Se[ie]);return N(D,Ne,void 0,void 0,null,ye)},Ce.createRef=function(){return{current:null}},Ce.forwardRef=function(D){return{$$typeof:f,render:D}},Ce.isValidElement=R,Ce.lazy=function(D){return{$$typeof:y,_payload:{_status:-1,_result:D},_init:oe}},Ce.memo=function(D,J){return{$$typeof:p,type:D,compare:J===void 0?null:J}},Ce.startTransition=function(D){var J=me.T,ue={};me.T=ue;try{var ie=D(),ye=me.S;ye!==null&&ye(ue,ie),typeof ie=="object"&&ie!==null&&typeof ie.then=="function"&&ie.then(He,_e)}catch(Ne){_e(Ne)}finally{me.T=J}},Ce.unstable_useCacheRefresh=function(){return me.H.useCacheRefresh()},Ce.use=function(D){return me.H.use(D)},Ce.useActionState=function(D,J,ue){return me.H.useActionState(D,J,ue)},Ce.useCallback=function(D,J){return me.H.useCallback(D,J)},Ce.useContext=function(D){return me.H.useContext(D)},Ce.useDebugValue=function(){},Ce.useDeferredValue=function(D,J){return me.H.useDeferredValue(D,J)},Ce.useEffect=function(D,J,ue){var ie=me.H;if(typeof ue=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ie.useEffect(D,J)},Ce.useId=function(){return me.H.useId()},Ce.useImperativeHandle=function(D,J,ue){return me.H.useImperativeHandle(D,J,ue)},Ce.useInsertionEffect=function(D,J){return me.H.useInsertionEffect(D,J)},Ce.useLayoutEffect=function(D,J){return me.H.useLayoutEffect(D,J)},Ce.useMemo=function(D,J){return me.H.useMemo(D,J)},Ce.useOptimistic=function(D,J){return me.H.useOptimistic(D,J)},Ce.useReducer=function(D,J,ue){return me.H.useReducer(D,J,ue)},Ce.useRef=function(D){return me.H.useRef(D)},Ce.useState=function(D){return me.H.useState(D)},Ce.useSyncExternalStore=function(D,J,ue){return me.H.useSyncExternalStore(D,J,ue)},Ce.useTransition=function(){return me.H.useTransition()},Ce.version="19.1.0",Ce}var f0;function my(){return f0||(f0=1,n_.exports=AD()),n_.exports}var Nn=my(),i_={exports:{}},Ec={},r_={exports:{}},s_={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m0;function SD(){return m0||(m0=1,function(i){function e(K,oe){var _e=K.length;K.push(oe);e:for(;0<_e;){var He=_e-1>>>1,D=K[He];if(0<a(D,oe))K[He]=oe,K[_e]=D,_e=He;else break e}}function t(K){return K.length===0?null:K[0]}function n(K){if(K.length===0)return null;var oe=K[0],_e=K.pop();if(_e!==oe){K[0]=_e;e:for(var He=0,D=K.length,J=D>>>1;He<J;){var ue=2*(He+1)-1,ie=K[ue],ye=ue+1,Ne=K[ye];if(0>a(ie,_e))ye<D&&0>a(Ne,ie)?(K[He]=Ne,K[ye]=_e,He=ye):(K[He]=ie,K[ue]=_e,He=ue);else if(ye<D&&0>a(Ne,_e))K[He]=Ne,K[ye]=_e,He=ye;else break e}}return oe}function a(K,oe){var _e=K.sortIndex-oe.sortIndex;return _e!==0?_e:K.id-oe.id}if(i.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;i.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();i.unstable_now=function(){return c.now()-f}}var m=[],p=[],y=1,T=null,b=3,O=!1,G=!1,$=!1,Y=!1,fe=typeof setTimeout=="function"?setTimeout:null,ae=typeof clearTimeout=="function"?clearTimeout:null,ne=typeof setImmediate<"u"?setImmediate:null;function ve(K){for(var oe=t(p);oe!==null;){if(oe.callback===null)n(p);else if(oe.startTime<=K)n(p),oe.sortIndex=oe.expirationTime,e(m,oe);else break;oe=t(p)}}function me(K){if($=!1,ve(K),!G)if(t(m)!==null)G=!0,Te||(Te=!0,M());else{var oe=t(p);oe!==null&&vt(me,oe.startTime-K)}}var Te=!1,N=-1,A=5,R=-1;function V(){return Y?!0:!(i.unstable_now()-R<A)}function x(){if(Y=!1,Te){var K=i.unstable_now();R=K;var oe=!0;try{e:{G=!1,$&&($=!1,ae(N),N=-1),O=!0;var _e=b;try{t:{for(ve(K),T=t(m);T!==null&&!(T.expirationTime>K&&V());){var He=T.callback;if(typeof He=="function"){T.callback=null,b=T.priorityLevel;var D=He(T.expirationTime<=K);if(K=i.unstable_now(),typeof D=="function"){T.callback=D,ve(K),oe=!0;break t}T===t(m)&&n(m),ve(K)}else n(m);T=t(m)}if(T!==null)oe=!0;else{var J=t(p);J!==null&&vt(me,J.startTime-K),oe=!1}}break e}finally{T=null,b=_e,O=!1}oe=void 0}}finally{oe?M():Te=!1}}}var M;if(typeof ne=="function")M=function(){ne(x)};else if(typeof MessageChannel<"u"){var C=new MessageChannel,en=C.port2;C.port1.onmessage=x,M=function(){en.postMessage(null)}}else M=function(){fe(x,0)};function vt(K,oe){N=fe(function(){K(i.unstable_now())},oe)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(K){K.callback=null},i.unstable_forceFrameRate=function(K){0>K||125<K?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<K?Math.floor(1e3/K):5},i.unstable_getCurrentPriorityLevel=function(){return b},i.unstable_next=function(K){switch(b){case 1:case 2:case 3:var oe=3;break;default:oe=b}var _e=b;b=oe;try{return K()}finally{b=_e}},i.unstable_requestPaint=function(){Y=!0},i.unstable_runWithPriority=function(K,oe){switch(K){case 1:case 2:case 3:case 4:case 5:break;default:K=3}var _e=b;b=K;try{return oe()}finally{b=_e}},i.unstable_scheduleCallback=function(K,oe,_e){var He=i.unstable_now();switch(typeof _e=="object"&&_e!==null?(_e=_e.delay,_e=typeof _e=="number"&&0<_e?He+_e:He):_e=He,K){case 1:var D=-1;break;case 2:D=250;break;case 5:D=1073741823;break;case 4:D=1e4;break;default:D=5e3}return D=_e+D,K={id:y++,callback:oe,priorityLevel:K,startTime:_e,expirationTime:D,sortIndex:-1},_e>He?(K.sortIndex=_e,e(p,K),t(m)===null&&K===t(p)&&($?(ae(N),N=-1):$=!0,vt(me,_e-He))):(K.sortIndex=D,e(m,K),G||O||(G=!0,Te||(Te=!0,M()))),K},i.unstable_shouldYield=V,i.unstable_wrapCallback=function(K){var oe=b;return function(){var _e=b;b=oe;try{return K.apply(this,arguments)}finally{b=_e}}}}(s_)),s_}var g0;function RD(){return g0||(g0=1,r_.exports=SD()),r_.exports}var a_={exports:{}},fn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p0;function CD(){if(p0)return fn;p0=1;var i=my();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)p+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var n={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},a=Symbol.for("react.portal");function l(m,p,y){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:T==null?null:""+T,children:m,containerInfo:p,implementation:y}}var c=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return fn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=n,fn.createPortal=function(m,p){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return l(m,p,null,y)},fn.flushSync=function(m){var p=c.T,y=n.p;try{if(c.T=null,n.p=2,m)return m()}finally{c.T=p,n.p=y,n.d.f()}},fn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,n.d.C(m,p))},fn.prefetchDNS=function(m){typeof m=="string"&&n.d.D(m)},fn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var y=p.as,T=f(y,p.crossOrigin),b=typeof p.integrity=="string"?p.integrity:void 0,O=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;y==="style"?n.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:T,integrity:b,fetchPriority:O}):y==="script"&&n.d.X(m,{crossOrigin:T,integrity:b,fetchPriority:O,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},fn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var y=f(p.as,p.crossOrigin);n.d.M(m,{crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&n.d.M(m)},fn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var y=p.as,T=f(y,p.crossOrigin);n.d.L(m,y,{crossOrigin:T,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},fn.preloadModule=function(m,p){if(typeof m=="string")if(p){var y=f(p.as,p.crossOrigin);n.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else n.d.m(m)},fn.requestFormReset=function(m){n.d.r(m)},fn.unstable_batchedUpdates=function(m,p){return m(p)},fn.useFormState=function(m,p,y){return c.H.useFormState(m,p,y)},fn.useFormStatus=function(){return c.H.useHostTransitionStatus()},fn.version="19.1.0",fn}var _0;function DD(){if(_0)return a_.exports;_0=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),a_.exports=CD(),a_.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y0;function PD(){if(y0)return Ec;y0=1;var i=RD(),e=my(),t=DD();function n(r){var s="https://react.dev/errors/"+r;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)s+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function l(r){var s=r,o=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,(s.flags&4098)!==0&&(o=s.return),r=s.return;while(r)}return s.tag===3?o:null}function c(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function f(r){if(l(r)!==r)throw Error(n(188))}function m(r){var s=r.alternate;if(!s){if(s=l(r),s===null)throw Error(n(188));return s!==r?null:r}for(var o=r,u=s;;){var d=o.return;if(d===null)break;var g=d.alternate;if(g===null){if(u=d.return,u!==null){o=u;continue}break}if(d.child===g.child){for(g=d.child;g;){if(g===o)return f(d),r;if(g===u)return f(d),s;g=g.sibling}throw Error(n(188))}if(o.return!==u.return)o=d,u=g;else{for(var E=!1,w=d.child;w;){if(w===o){E=!0,o=d,u=g;break}if(w===u){E=!0,u=d,o=g;break}w=w.sibling}if(!E){for(w=g.child;w;){if(w===o){E=!0,o=g,u=d;break}if(w===u){E=!0,u=g,o=d;break}w=w.sibling}if(!E)throw Error(n(189))}}if(o.alternate!==u)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?r:s}function p(r){var s=r.tag;if(s===5||s===26||s===27||s===6)return r;for(r=r.child;r!==null;){if(s=p(r),s!==null)return s;r=r.sibling}return null}var y=Object.assign,T=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),O=Symbol.for("react.portal"),G=Symbol.for("react.fragment"),$=Symbol.for("react.strict_mode"),Y=Symbol.for("react.profiler"),fe=Symbol.for("react.provider"),ae=Symbol.for("react.consumer"),ne=Symbol.for("react.context"),ve=Symbol.for("react.forward_ref"),me=Symbol.for("react.suspense"),Te=Symbol.for("react.suspense_list"),N=Symbol.for("react.memo"),A=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),V=Symbol.for("react.memo_cache_sentinel"),x=Symbol.iterator;function M(r){return r===null||typeof r!="object"?null:(r=x&&r[x]||r["@@iterator"],typeof r=="function"?r:null)}var C=Symbol.for("react.client.reference");function en(r){if(r==null)return null;if(typeof r=="function")return r.$$typeof===C?null:r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case G:return"Fragment";case Y:return"Profiler";case $:return"StrictMode";case me:return"Suspense";case Te:return"SuspenseList";case R:return"Activity"}if(typeof r=="object")switch(r.$$typeof){case O:return"Portal";case ne:return(r.displayName||"Context")+".Provider";case ae:return(r._context.displayName||"Context")+".Consumer";case ve:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case N:return s=r.displayName||null,s!==null?s:en(r.type)||"Memo";case A:s=r._payload,r=r._init;try{return en(r(s))}catch{}}return null}var vt=Array.isArray,K=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,oe=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,_e={pending:!1,data:null,method:null,action:null},He=[],D=-1;function J(r){return{current:r}}function ue(r){0>D||(r.current=He[D],He[D]=null,D--)}function ie(r,s){D++,He[D]=r.current,r.current=s}var ye=J(null),Ne=J(null),Se=J(null),Gt=J(null);function rt(r,s){switch(ie(Se,s),ie(Ne,r),ie(ye,null),s.nodeType){case 9:case 11:r=(r=s.documentElement)&&(r=r.namespaceURI)?Uw(r):0;break;default:if(r=s.tagName,s=s.namespaceURI)s=Uw(s),r=Bw(s,r);else switch(r){case"svg":r=1;break;case"math":r=2;break;default:r=0}}ue(ye),ie(ye,r)}function wi(){ue(ye),ue(Ne),ue(Se)}function Fr(r){r.memoizedState!==null&&ie(Gt,r);var s=ye.current,o=Bw(s,r.type);s!==o&&(ie(Ne,r),ie(ye,o))}function tr(r){Ne.current===r&&(ue(ye),ue(Ne)),Gt.current===r&&(ue(Gt),mc._currentValue=_e)}var Js=Object.prototype.hasOwnProperty,Zs=i.unstable_scheduleCallback,ea=i.unstable_cancelCallback,hu=i.unstable_shouldYield,Qh=i.unstable_requestPaint,Yn=i.unstable_now,tg=i.unstable_getCurrentPriorityLevel,du=i.unstable_ImmediatePriority,_o=i.unstable_UserBlockingPriority,ta=i.unstable_NormalPriority,ng=i.unstable_LowPriority,yo=i.unstable_IdlePriority,fu=i.log,Yh=i.unstable_setDisableYieldValue,Et=null,Qe=null;function kn(r){if(typeof fu=="function"&&Yh(r),Qe&&typeof Qe.setStrictMode=="function")try{Qe.setStrictMode(Et,r)}catch{}}var hn=Math.clz32?Math.clz32:na,Wh=Math.log,ig=Math.LN2;function na(r){return r>>>=0,r===0?32:31-(Wh(r)/ig|0)|0}var ia=256,ra=4194304;function hi(r){var s=r&42;if(s!==0)return s;switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return r&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return r}}function vo(r,s,o){var u=r.pendingLanes;if(u===0)return 0;var d=0,g=r.suspendedLanes,E=r.pingedLanes;r=r.warmLanes;var w=u&134217727;return w!==0?(u=w&~g,u!==0?d=hi(u):(E&=w,E!==0?d=hi(E):o||(o=w&~r,o!==0&&(d=hi(o))))):(w=u&~g,w!==0?d=hi(w):E!==0?d=hi(E):o||(o=u&~r,o!==0&&(d=hi(o)))),d===0?0:s!==0&&s!==d&&(s&g)===0&&(g=d&-d,o=s&-s,g>=o||g===32&&(o&4194048)!==0)?s:d}function sa(r,s){return(r.pendingLanes&~(r.suspendedLanes&~r.pingedLanes)&s)===0}function mu(r,s){switch(r){case 1:case 2:case 4:case 8:case 64:return s+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gu(){var r=ia;return ia<<=1,(ia&4194048)===0&&(ia=256),r}function pu(){var r=ra;return ra<<=1,(ra&62914560)===0&&(ra=4194304),r}function nr(r){for(var s=[],o=0;31>o;o++)s.push(r);return s}function ir(r,s){r.pendingLanes|=s,s!==268435456&&(r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0)}function _u(r,s,o,u,d,g){var E=r.pendingLanes;r.pendingLanes=o,r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0,r.expiredLanes&=o,r.entangledLanes&=o,r.errorRecoveryDisabledLanes&=o,r.shellSuspendCounter=0;var w=r.entanglements,S=r.expirationTimes,z=r.hiddenUpdates;for(o=E&~o;0<o;){var Q=31-hn(o),X=1<<Q;w[Q]=0,S[Q]=-1;var F=z[Q];if(F!==null)for(z[Q]=null,Q=0;Q<F.length;Q++){var q=F[Q];q!==null&&(q.lane&=-536870913)}o&=~X}u!==0&&bi(r,u,0),g!==0&&d===0&&r.tag!==0&&(r.suspendedLanes|=g&~(E&~s))}function bi(r,s,o){r.pendingLanes|=s,r.suspendedLanes&=~s;var u=31-hn(s);r.entangledLanes|=s,r.entanglements[u]=r.entanglements[u]|1073741824|o&4194090}function yu(r,s){var o=r.entangledLanes|=s;for(r=r.entanglements;o;){var u=31-hn(o),d=1<<u;d&s|r[u]&s&&(r[u]|=s),o&=~d}}function qr(r){switch(r){case 2:r=1;break;case 8:r=4;break;case 32:r=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:r=128;break;case 268435456:r=134217728;break;default:r=0}return r}function Eo(r){return r&=-r,2<r?8<r?(r&134217727)!==0?32:268435456:8:2}function jr(){var r=oe.p;return r!==0?r:(r=window.event,r===void 0?32:r0(r.type))}function $h(r,s){var o=oe.p;try{return oe.p=r,s()}finally{oe.p=o}}var lt=Math.random().toString(36).slice(2),Ut="__reactFiber$"+lt,Ot="__reactProps$"+lt,Wn="__reactContainer$"+lt,vu="__reactEvents$"+lt,rg="__reactListeners$"+lt,Hr="__reactHandles$"+lt,Xh="__reactResources$"+lt,aa="__reactMarker$"+lt;function Gr(r){delete r[Ut],delete r[Ot],delete r[vu],delete r[rg],delete r[Hr]}function rr(r){var s=r[Ut];if(s)return s;for(var o=r.parentNode;o;){if(s=o[Wn]||o[Ut]){if(o=s.alternate,s.child!==null||o!==null&&o.child!==null)for(r=jw(r);r!==null;){if(o=r[Ut])return o;r=jw(r)}return s}r=o,o=r.parentNode}return null}function Ii(r){if(r=r[Ut]||r[Wn]){var s=r.tag;if(s===5||s===6||s===13||s===26||s===27||s===3)return r}return null}function Ai(r){var s=r.tag;if(s===5||s===26||s===27||s===6)return r.stateNode;throw Error(n(33))}function yn(r){var s=r[Xh];return s||(s=r[Xh]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function St(r){r[aa]=!0}var Eu=new Set,To={};function di(r,s){sr(r,s),sr(r+"Capture",s)}function sr(r,s){for(To[r]=s,r=0;r<s.length;r++)Eu.add(s[r])}var Jh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Zh={},oa={};function ed(r){return Js.call(oa,r)?!0:Js.call(Zh,r)?!1:Jh.test(r)?oa[r]=!0:(Zh[r]=!0,!1)}function Kr(r,s,o){if(ed(s))if(o===null)r.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":r.removeAttribute(s);return;case"boolean":var u=s.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){r.removeAttribute(s);return}}r.setAttribute(s,""+o)}}function Si(r,s,o){if(o===null)r.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(s);return}r.setAttribute(s,""+o)}}function tn(r,s,o,u){if(u===null)r.removeAttribute(o);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(o);return}r.setAttributeNS(s,o,""+u)}}var la,td;function ar(r){if(la===void 0)try{throw Error()}catch(o){var s=o.stack.trim().match(/\n( *(at )?)/);la=s&&s[1]||"",td=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+la+r+td}var wo=!1;function bo(r,s){if(!r||wo)return"";wo=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(s){var X=function(){throw Error()};if(Object.defineProperty(X.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(X,[])}catch(q){var F=q}Reflect.construct(r,[],X)}else{try{X.call()}catch(q){F=q}r.call(X.prototype)}}else{try{throw Error()}catch(q){F=q}(X=r())&&typeof X.catch=="function"&&X.catch(function(){})}}catch(q){if(q&&F&&typeof q.stack=="string")return[q.stack,F.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var g=u.DetermineComponentFrameRoot(),E=g[0],w=g[1];if(E&&w){var S=E.split(`
`),z=w.split(`
`);for(d=u=0;u<S.length&&!S[u].includes("DetermineComponentFrameRoot");)u++;for(;d<z.length&&!z[d].includes("DetermineComponentFrameRoot");)d++;if(u===S.length||d===z.length)for(u=S.length-1,d=z.length-1;1<=u&&0<=d&&S[u]!==z[d];)d--;for(;1<=u&&0<=d;u--,d--)if(S[u]!==z[d]){if(u!==1||d!==1)do if(u--,d--,0>d||S[u]!==z[d]){var Q=`
`+S[u].replace(" at new "," at ");return r.displayName&&Q.includes("<anonymous>")&&(Q=Q.replace("<anonymous>",r.displayName)),Q}while(1<=u&&0<=d);break}}}finally{wo=!1,Error.prepareStackTrace=o}return(o=r?r.displayName||r.name:"")?ar(o):""}function Tu(r){switch(r.tag){case 26:case 27:case 5:return ar(r.type);case 16:return ar("Lazy");case 13:return ar("Suspense");case 19:return ar("SuspenseList");case 0:case 15:return bo(r.type,!1);case 11:return bo(r.type.render,!1);case 1:return bo(r.type,!0);case 31:return ar("Activity");default:return""}}function Io(r){try{var s="";do s+=Tu(r),r=r.return;while(r);return s}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function vn(r){switch(typeof r){case"bigint":case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function wu(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function sg(r){var s=wu(r)?"checked":"value",o=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),u=""+r[s];if(!r.hasOwnProperty(s)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,g=o.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return d.call(this)},set:function(E){u=""+E,g.call(this,E)}}),Object.defineProperty(r,s,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(E){u=""+E},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function Ao(r){r._valueTracker||(r._valueTracker=sg(r))}function bu(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var o=s.getValue(),u="";return r&&(u=wu(r)?r.checked?"true":"false":r.value),r=u,r!==o?(s.setValue(r),!0):!1}function ua(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}var ag=/[\n"\\]/g;function Vt(r){return r.replace(ag,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function Mn(r,s,o,u,d,g,E,w){r.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?r.type=E:r.removeAttribute("type"),s!=null?E==="number"?(s===0&&r.value===""||r.value!=s)&&(r.value=""+vn(s)):r.value!==""+vn(s)&&(r.value=""+vn(s)):E!=="submit"&&E!=="reset"||r.removeAttribute("value"),s!=null?Qr(r,E,vn(s)):o!=null?Qr(r,E,vn(o)):u!=null&&r.removeAttribute("value"),d==null&&g!=null&&(r.defaultChecked=!!g),d!=null&&(r.checked=d&&typeof d!="function"&&typeof d!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?r.name=""+vn(w):r.removeAttribute("name")}function ca(r,s,o,u,d,g,E,w){if(g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(r.type=g),s!=null||o!=null){if(!(g!=="submit"&&g!=="reset"||s!=null))return;o=o!=null?""+vn(o):"",s=s!=null?""+vn(s):o,w||s===r.value||(r.value=s),r.defaultValue=s}u=u??d,u=typeof u!="function"&&typeof u!="symbol"&&!!u,r.checked=w?r.checked:!!u,r.defaultChecked=!!u,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(r.name=E)}function Qr(r,s,o){s==="number"&&ua(r.ownerDocument)===r||r.defaultValue===""+o||(r.defaultValue=""+o)}function or(r,s,o,u){if(r=r.options,s){s={};for(var d=0;d<o.length;d++)s["$"+o[d]]=!0;for(o=0;o<r.length;o++)d=s.hasOwnProperty("$"+r[o].value),r[o].selected!==d&&(r[o].selected=d),d&&u&&(r[o].defaultSelected=!0)}else{for(o=""+vn(o),s=null,d=0;d<r.length;d++){if(r[d].value===o){r[d].selected=!0,u&&(r[d].defaultSelected=!0);return}s!==null||r[d].disabled||(s=r[d])}s!==null&&(s.selected=!0)}}function Ze(r,s,o){if(s!=null&&(s=""+vn(s),s!==r.value&&(r.value=s),o==null)){r.defaultValue!==s&&(r.defaultValue=s);return}r.defaultValue=o!=null?""+vn(o):""}function ha(r,s,o,u){if(s==null){if(u!=null){if(o!=null)throw Error(n(92));if(vt(u)){if(1<u.length)throw Error(n(93));u=u[0]}o=u}o==null&&(o=""),s=o}o=vn(s),r.defaultValue=o,u=r.textContent,u===o&&u!==""&&u!==null&&(r.value=u)}function $n(r,s){if(s){var o=r.firstChild;if(o&&o===r.lastChild&&o.nodeType===3){o.nodeValue=s;return}}r.textContent=s}var da=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function nd(r,s,o){var u=s.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?u?r.setProperty(s,""):s==="float"?r.cssFloat="":r[s]="":u?r.setProperty(s,o):typeof o!="number"||o===0||da.has(s)?s==="float"?r.cssFloat=o:r[s]=(""+o).trim():r[s]=o+"px"}function Iu(r,s,o){if(s!=null&&typeof s!="object")throw Error(n(62));if(r=r.style,o!=null){for(var u in o)!o.hasOwnProperty(u)||s!=null&&s.hasOwnProperty(u)||(u.indexOf("--")===0?r.setProperty(u,""):u==="float"?r.cssFloat="":r[u]="");for(var d in s)u=s[d],s.hasOwnProperty(d)&&o[d]!==u&&nd(r,d,u)}else for(var g in s)s.hasOwnProperty(g)&&nd(r,g,s[g])}function Au(r){if(r.indexOf("-")===-1)return!1;switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var og=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),lg=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function So(r){return lg.test(""+r)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":r}var lr=null;function Xn(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var ur=null,cr=null;function Su(r){var s=Ii(r);if(s&&(r=s.stateNode)){var o=r[Ot]||null;e:switch(r=s.stateNode,s.type){case"input":if(Mn(r,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),s=o.name,o.type==="radio"&&s!=null){for(o=r;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+Vt(""+s)+'"][type="radio"]'),s=0;s<o.length;s++){var u=o[s];if(u!==r&&u.form===r.form){var d=u[Ot]||null;if(!d)throw Error(n(90));Mn(u,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(s=0;s<o.length;s++)u=o[s],u.form===r.form&&bu(u)}break e;case"textarea":Ze(r,o.value,o.defaultValue);break e;case"select":s=o.value,s!=null&&or(r,!!o.multiple,s,!1)}}}var Ri=!1;function id(r,s,o){if(Ri)return r(s,o);Ri=!0;try{var u=r(s);return u}finally{if(Ri=!1,(ur!==null||cr!==null)&&($d(),ur&&(s=ur,r=cr,cr=ur=null,Su(s),r)))for(s=0;s<r.length;s++)Su(r[s])}}function fa(r,s){var o=r.stateNode;if(o===null)return null;var u=o[Ot]||null;if(u===null)return null;o=u[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(r=r.type,u=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!u;break e;default:r=!1}if(r)return null;if(o&&typeof o!="function")throw Error(n(231,s,typeof o));return o}var fi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Jn=!1;if(fi)try{var ma={};Object.defineProperty(ma,"passive",{get:function(){Jn=!0}}),window.addEventListener("test",ma,ma),window.removeEventListener("test",ma,ma)}catch{Jn=!1}var Ci=null,Yr=null,hr=null;function Ru(){if(hr)return hr;var r,s=Yr,o=s.length,u,d="value"in Ci?Ci.value:Ci.textContent,g=d.length;for(r=0;r<o&&s[r]===d[r];r++);var E=o-r;for(u=1;u<=E&&s[o-u]===d[g-u];u++);return hr=d.slice(r,1<u?1-u:void 0)}function Di(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function Pi(){return!0}function Cu(){return!1}function Kt(r){function s(o,u,d,g,E){this._reactName=o,this._targetInst=d,this.type=u,this.nativeEvent=g,this.target=E,this.currentTarget=null;for(var w in r)r.hasOwnProperty(w)&&(o=r[w],this[w]=o?o(g):g[w]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Pi:Cu,this.isPropagationStopped=Cu,this}return y(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Pi)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Pi)},persist:function(){},isPersistent:Pi}),s}var Ke={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ro=Kt(Ke),ga=y({},Ke,{view:0,detail:0}),rd=Kt(ga),Co,Do,Ni,pa=y({},ga,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:va,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==Ni&&(Ni&&r.type==="mousemove"?(Co=r.screenX-Ni.screenX,Do=r.screenY-Ni.screenY):Do=Co=0,Ni=r),Co)},movementY:function(r){return"movementY"in r?r.movementY:Do}}),Zn=Kt(pa),sd=y({},pa,{dataTransfer:0}),ug=Kt(sd),_a=y({},ga,{relatedTarget:0}),Po=Kt(_a),Du=y({},Ke,{animationName:0,elapsedTime:0,pseudoElement:0}),No=Kt(Du),ad=y({},Ke,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),Oo=Kt(ad),cg=y({},Ke,{data:0}),Pu=Kt(cg),ya={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},od={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ld={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Nu(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=ld[r])?!!s[r]:!1}function va(){return Nu}var ud=y({},ga,{key:function(r){if(r.key){var s=ya[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=Di(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?od[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:va,charCode:function(r){return r.type==="keypress"?Di(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Di(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),Vo=Kt(ud),cd=y({},pa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ou=Kt(cd),dr=y({},ga,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:va}),hd=Kt(dr),dd=y({},Ke,{propertyName:0,elapsedTime:0,pseudoElement:0}),fd=Kt(dd),md=y({},pa,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),xo=Kt(md),En=y({},Ke,{newState:0,oldState:0}),gd=Kt(En),pd=[9,13,27,32],Oi=fi&&"CompositionEvent"in window,h=null;fi&&"documentMode"in document&&(h=document.documentMode);var _=fi&&"TextEvent"in window&&!h,v=fi&&(!Oi||h&&8<h&&11>=h),I=" ",L=!1;function H(r,s){switch(r){case"keyup":return pd.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function re(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var Ue=!1;function Bt(r,s){switch(r){case"compositionend":return re(s);case"keypress":return s.which!==32?null:(L=!0,I);case"textInput":return r=s.data,r===I&&L?null:r;default:return null}}function Be(r,s){if(Ue)return r==="compositionend"||!Oi&&H(r,s)?(r=Ru(),hr=Yr=Ci=null,Ue=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return v&&s.locale!=="ko"?null:s.data;default:return null}}var Qt={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zt(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!Qt[r.type]:s==="textarea"}function fr(r,s,o,u){ur?cr?cr.push(u):cr=[u]:ur=u,s=nf(s,"onChange"),0<s.length&&(o=new Ro("onChange","change",null,o,u),r.push({event:o,listeners:s}))}var nn=null,Vi=null;function Vu(r){Vw(r,0)}function _d(r){var s=Ai(r);if(bu(s))return r}function eE(r,s){if(r==="change")return s}var tE=!1;if(fi){var hg;if(fi){var dg="oninput"in document;if(!dg){var nE=document.createElement("div");nE.setAttribute("oninput","return;"),dg=typeof nE.oninput=="function"}hg=dg}else hg=!1;tE=hg&&(!document.documentMode||9<document.documentMode)}function iE(){nn&&(nn.detachEvent("onpropertychange",rE),Vi=nn=null)}function rE(r){if(r.propertyName==="value"&&_d(Vi)){var s=[];fr(s,Vi,r,Xn(r)),id(Vu,s)}}function Z1(r,s,o){r==="focusin"?(iE(),nn=s,Vi=o,nn.attachEvent("onpropertychange",rE)):r==="focusout"&&iE()}function eC(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return _d(Vi)}function tC(r,s){if(r==="click")return _d(s)}function nC(r,s){if(r==="input"||r==="change")return _d(s)}function iC(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var Ln=typeof Object.is=="function"?Object.is:iC;function xu(r,s){if(Ln(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var o=Object.keys(r),u=Object.keys(s);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var d=o[u];if(!Js.call(s,d)||!Ln(r[d],s[d]))return!1}return!0}function sE(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function aE(r,s){var o=sE(r);r=0;for(var u;o;){if(o.nodeType===3){if(u=r+o.textContent.length,r<=s&&u>=s)return{node:o,offset:s-r};r=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=sE(o)}}function oE(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?oE(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function lE(r){r=r!=null&&r.ownerDocument!=null&&r.ownerDocument.defaultView!=null?r.ownerDocument.defaultView:window;for(var s=ua(r.document);s instanceof r.HTMLIFrameElement;){try{var o=typeof s.contentWindow.location.href=="string"}catch{o=!1}if(o)r=s.contentWindow;else break;s=ua(r.document)}return s}function fg(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}var rC=fi&&"documentMode"in document&&11>=document.documentMode,ko=null,mg=null,ku=null,gg=!1;function uE(r,s,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;gg||ko==null||ko!==ua(u)||(u=ko,"selectionStart"in u&&fg(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),ku&&xu(ku,u)||(ku=u,u=nf(mg,"onSelect"),0<u.length&&(s=new Ro("onSelect","select",null,s,o),r.push({event:s,listeners:u}),s.target=ko)))}function Ea(r,s){var o={};return o[r.toLowerCase()]=s.toLowerCase(),o["Webkit"+r]="webkit"+s,o["Moz"+r]="moz"+s,o}var Mo={animationend:Ea("Animation","AnimationEnd"),animationiteration:Ea("Animation","AnimationIteration"),animationstart:Ea("Animation","AnimationStart"),transitionrun:Ea("Transition","TransitionRun"),transitionstart:Ea("Transition","TransitionStart"),transitioncancel:Ea("Transition","TransitionCancel"),transitionend:Ea("Transition","TransitionEnd")},pg={},cE={};fi&&(cE=document.createElement("div").style,"AnimationEvent"in window||(delete Mo.animationend.animation,delete Mo.animationiteration.animation,delete Mo.animationstart.animation),"TransitionEvent"in window||delete Mo.transitionend.transition);function Ta(r){if(pg[r])return pg[r];if(!Mo[r])return r;var s=Mo[r],o;for(o in s)if(s.hasOwnProperty(o)&&o in cE)return pg[r]=s[o];return r}var hE=Ta("animationend"),dE=Ta("animationiteration"),fE=Ta("animationstart"),sC=Ta("transitionrun"),aC=Ta("transitionstart"),oC=Ta("transitioncancel"),mE=Ta("transitionend"),gE=new Map,_g="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");_g.push("scrollEnd");function mi(r,s){gE.set(r,s),di(s,[r])}var pE=new WeakMap;function ei(r,s){if(typeof r=="object"&&r!==null){var o=pE.get(r);return o!==void 0?o:(s={value:r,source:s,stack:Io(s)},pE.set(r,s),s)}return{value:r,source:s,stack:Io(s)}}var ti=[],Lo=0,yg=0;function yd(){for(var r=Lo,s=yg=Lo=0;s<r;){var o=ti[s];ti[s++]=null;var u=ti[s];ti[s++]=null;var d=ti[s];ti[s++]=null;var g=ti[s];if(ti[s++]=null,u!==null&&d!==null){var E=u.pending;E===null?d.next=d:(d.next=E.next,E.next=d),u.pending=d}g!==0&&_E(o,d,g)}}function vd(r,s,o,u){ti[Lo++]=r,ti[Lo++]=s,ti[Lo++]=o,ti[Lo++]=u,yg|=u,r.lanes|=u,r=r.alternate,r!==null&&(r.lanes|=u)}function vg(r,s,o,u){return vd(r,s,o,u),Ed(r)}function Uo(r,s){return vd(r,null,null,s),Ed(r)}function _E(r,s,o){r.lanes|=o;var u=r.alternate;u!==null&&(u.lanes|=o);for(var d=!1,g=r.return;g!==null;)g.childLanes|=o,u=g.alternate,u!==null&&(u.childLanes|=o),g.tag===22&&(r=g.stateNode,r===null||r._visibility&1||(d=!0)),r=g,g=g.return;return r.tag===3?(g=r.stateNode,d&&s!==null&&(d=31-hn(o),r=g.hiddenUpdates,u=r[d],u===null?r[d]=[s]:u.push(s),s.lane=o|536870912),g):null}function Ed(r){if(50<ac)throw ac=0,Ap=null,Error(n(185));for(var s=r.return;s!==null;)r=s,s=r.return;return r.tag===3?r.stateNode:null}var Bo={};function lC(r,s,o,u){this.tag=r,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Un(r,s,o,u){return new lC(r,s,o,u)}function Eg(r){return r=r.prototype,!(!r||!r.isReactComponent)}function mr(r,s){var o=r.alternate;return o===null?(o=Un(r.tag,s,r.key,r.mode),o.elementType=r.elementType,o.type=r.type,o.stateNode=r.stateNode,o.alternate=r,r.alternate=o):(o.pendingProps=s,o.type=r.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=r.flags&65011712,o.childLanes=r.childLanes,o.lanes=r.lanes,o.child=r.child,o.memoizedProps=r.memoizedProps,o.memoizedState=r.memoizedState,o.updateQueue=r.updateQueue,s=r.dependencies,o.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},o.sibling=r.sibling,o.index=r.index,o.ref=r.ref,o.refCleanup=r.refCleanup,o}function yE(r,s){r.flags&=65011714;var o=r.alternate;return o===null?(r.childLanes=0,r.lanes=s,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=o.childLanes,r.lanes=o.lanes,r.child=o.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=o.memoizedProps,r.memoizedState=o.memoizedState,r.updateQueue=o.updateQueue,r.type=o.type,s=o.dependencies,r.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),r}function Td(r,s,o,u,d,g){var E=0;if(u=r,typeof r=="function")Eg(r)&&(E=1);else if(typeof r=="string")E=cD(r,o,ye.current)?26:r==="html"||r==="head"||r==="body"?27:5;else e:switch(r){case R:return r=Un(31,o,s,d),r.elementType=R,r.lanes=g,r;case G:return wa(o.children,d,g,s);case $:E=8,d|=24;break;case Y:return r=Un(12,o,s,d|2),r.elementType=Y,r.lanes=g,r;case me:return r=Un(13,o,s,d),r.elementType=me,r.lanes=g,r;case Te:return r=Un(19,o,s,d),r.elementType=Te,r.lanes=g,r;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case fe:case ne:E=10;break e;case ae:E=9;break e;case ve:E=11;break e;case N:E=14;break e;case A:E=16,u=null;break e}E=29,o=Error(n(130,r===null?"null":typeof r,"")),u=null}return s=Un(E,o,s,d),s.elementType=r,s.type=u,s.lanes=g,s}function wa(r,s,o,u){return r=Un(7,r,u,s),r.lanes=o,r}function Tg(r,s,o){return r=Un(6,r,null,s),r.lanes=o,r}function wg(r,s,o){return s=Un(4,r.children!==null?r.children:[],r.key,s),s.lanes=o,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}var zo=[],Fo=0,wd=null,bd=0,ni=[],ii=0,ba=null,gr=1,pr="";function Ia(r,s){zo[Fo++]=bd,zo[Fo++]=wd,wd=r,bd=s}function vE(r,s,o){ni[ii++]=gr,ni[ii++]=pr,ni[ii++]=ba,ba=r;var u=gr;r=pr;var d=32-hn(u)-1;u&=~(1<<d),o+=1;var g=32-hn(s)+d;if(30<g){var E=d-d%5;g=(u&(1<<E)-1).toString(32),u>>=E,d-=E,gr=1<<32-hn(s)+d|o<<d|u,pr=g+r}else gr=1<<g|o<<d|u,pr=r}function bg(r){r.return!==null&&(Ia(r,1),vE(r,1,0))}function Ig(r){for(;r===wd;)wd=zo[--Fo],zo[Fo]=null,bd=zo[--Fo],zo[Fo]=null;for(;r===ba;)ba=ni[--ii],ni[ii]=null,pr=ni[--ii],ni[ii]=null,gr=ni[--ii],ni[ii]=null}var Tn=null,Tt=null,Ge=!1,Aa=null,xi=!1,Ag=Error(n(519));function Sa(r){var s=Error(n(418,""));throw Uu(ei(s,r)),Ag}function EE(r){var s=r.stateNode,o=r.type,u=r.memoizedProps;switch(s[Ut]=r,s[Ot]=u,o){case"dialog":xe("cancel",s),xe("close",s);break;case"iframe":case"object":case"embed":xe("load",s);break;case"video":case"audio":for(o=0;o<lc.length;o++)xe(lc[o],s);break;case"source":xe("error",s);break;case"img":case"image":case"link":xe("error",s),xe("load",s);break;case"details":xe("toggle",s);break;case"input":xe("invalid",s),ca(s,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),Ao(s);break;case"select":xe("invalid",s);break;case"textarea":xe("invalid",s),ha(s,u.value,u.defaultValue,u.children),Ao(s)}o=u.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||s.textContent===""+o||u.suppressHydrationWarning===!0||Lw(s.textContent,o)?(u.popover!=null&&(xe("beforetoggle",s),xe("toggle",s)),u.onScroll!=null&&xe("scroll",s),u.onScrollEnd!=null&&xe("scrollend",s),u.onClick!=null&&(s.onclick=rf),s=!0):s=!1,s||Sa(r)}function TE(r){for(Tn=r.return;Tn;)switch(Tn.tag){case 5:case 13:xi=!1;return;case 27:case 3:xi=!0;return;default:Tn=Tn.return}}function Mu(r){if(r!==Tn)return!1;if(!Ge)return TE(r),Ge=!0,!1;var s=r.tag,o;if((o=s!==3&&s!==27)&&((o=s===5)&&(o=r.type,o=!(o!=="form"&&o!=="button")||Fp(r.type,r.memoizedProps)),o=!o),o&&Tt&&Sa(r),TE(r),s===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(n(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8)if(o=r.data,o==="/$"){if(s===0){Tt=pi(r.nextSibling);break e}s--}else o!=="$"&&o!=="$!"&&o!=="$?"||s++;r=r.nextSibling}Tt=null}}else s===27?(s=Tt,cs(r.type)?(r=Gp,Gp=null,Tt=r):Tt=s):Tt=Tn?pi(r.stateNode.nextSibling):null;return!0}function Lu(){Tt=Tn=null,Ge=!1}function wE(){var r=Aa;return r!==null&&(Dn===null?Dn=r:Dn.push.apply(Dn,r),Aa=null),r}function Uu(r){Aa===null?Aa=[r]:Aa.push(r)}var Sg=J(null),Ra=null,_r=null;function Wr(r,s,o){ie(Sg,s._currentValue),s._currentValue=o}function yr(r){r._currentValue=Sg.current,ue(Sg)}function Rg(r,s,o){for(;r!==null;){var u=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,u!==null&&(u.childLanes|=s)):u!==null&&(u.childLanes&s)!==s&&(u.childLanes|=s),r===o)break;r=r.return}}function Cg(r,s,o,u){var d=r.child;for(d!==null&&(d.return=r);d!==null;){var g=d.dependencies;if(g!==null){var E=d.child;g=g.firstContext;e:for(;g!==null;){var w=g;g=d;for(var S=0;S<s.length;S++)if(w.context===s[S]){g.lanes|=o,w=g.alternate,w!==null&&(w.lanes|=o),Rg(g.return,o,r),u||(E=null);break e}g=w.next}}else if(d.tag===18){if(E=d.return,E===null)throw Error(n(341));E.lanes|=o,g=E.alternate,g!==null&&(g.lanes|=o),Rg(E,o,r),E=null}else E=d.child;if(E!==null)E.return=d;else for(E=d;E!==null;){if(E===r){E=null;break}if(d=E.sibling,d!==null){d.return=E.return,E=d;break}E=E.return}d=E}}function Bu(r,s,o,u){r=null;for(var d=s,g=!1;d!==null;){if(!g){if((d.flags&524288)!==0)g=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var E=d.alternate;if(E===null)throw Error(n(387));if(E=E.memoizedProps,E!==null){var w=d.type;Ln(d.pendingProps.value,E.value)||(r!==null?r.push(w):r=[w])}}else if(d===Gt.current){if(E=d.alternate,E===null)throw Error(n(387));E.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(r!==null?r.push(mc):r=[mc])}d=d.return}r!==null&&Cg(s,r,o,u),s.flags|=262144}function Id(r){for(r=r.firstContext;r!==null;){if(!Ln(r.context._currentValue,r.memoizedValue))return!0;r=r.next}return!1}function Ca(r){Ra=r,_r=null,r=r.dependencies,r!==null&&(r.firstContext=null)}function dn(r){return bE(Ra,r)}function Ad(r,s){return Ra===null&&Ca(r),bE(r,s)}function bE(r,s){var o=s._currentValue;if(s={context:s,memoizedValue:o,next:null},_r===null){if(r===null)throw Error(n(308));_r=s,r.dependencies={lanes:0,firstContext:s},r.flags|=524288}else _r=_r.next=s;return o}var uC=typeof AbortController<"u"?AbortController:function(){var r=[],s=this.signal={aborted:!1,addEventListener:function(o,u){r.push(u)}};this.abort=function(){s.aborted=!0,r.forEach(function(o){return o()})}},cC=i.unstable_scheduleCallback,hC=i.unstable_NormalPriority,Ft={$$typeof:ne,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Dg(){return{controller:new uC,data:new Map,refCount:0}}function zu(r){r.refCount--,r.refCount===0&&cC(hC,function(){r.controller.abort()})}var Fu=null,Pg=0,qo=0,jo=null;function dC(r,s){if(Fu===null){var o=Fu=[];Pg=0,qo=Op(),jo={status:"pending",value:void 0,then:function(u){o.push(u)}}}return Pg++,s.then(IE,IE),s}function IE(){if(--Pg===0&&Fu!==null){jo!==null&&(jo.status="fulfilled");var r=Fu;Fu=null,qo=0,jo=null;for(var s=0;s<r.length;s++)(0,r[s])()}}function fC(r,s){var o=[],u={status:"pending",value:null,reason:null,then:function(d){o.push(d)}};return r.then(function(){u.status="fulfilled",u.value=s;for(var d=0;d<o.length;d++)(0,o[d])(s)},function(d){for(u.status="rejected",u.reason=d,d=0;d<o.length;d++)(0,o[d])(void 0)}),u}var AE=K.S;K.S=function(r,s){typeof s=="object"&&s!==null&&typeof s.then=="function"&&dC(r,s),AE!==null&&AE(r,s)};var Da=J(null);function Ng(){var r=Da.current;return r!==null?r:st.pooledCache}function Sd(r,s){s===null?ie(Da,Da.current):ie(Da,s.pool)}function SE(){var r=Ng();return r===null?null:{parent:Ft._currentValue,pool:r}}var qu=Error(n(460)),RE=Error(n(474)),Rd=Error(n(542)),Og={then:function(){}};function CE(r){return r=r.status,r==="fulfilled"||r==="rejected"}function Cd(){}function DE(r,s,o){switch(o=r[o],o===void 0?r.push(s):o!==s&&(s.then(Cd,Cd),s=o),s.status){case"fulfilled":return s.value;case"rejected":throw r=s.reason,NE(r),r;default:if(typeof s.status=="string")s.then(Cd,Cd);else{if(r=st,r!==null&&100<r.shellSuspendCounter)throw Error(n(482));r=s,r.status="pending",r.then(function(u){if(s.status==="pending"){var d=s;d.status="fulfilled",d.value=u}},function(u){if(s.status==="pending"){var d=s;d.status="rejected",d.reason=u}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw r=s.reason,NE(r),r}throw ju=s,qu}}var ju=null;function PE(){if(ju===null)throw Error(n(459));var r=ju;return ju=null,r}function NE(r){if(r===qu||r===Rd)throw Error(n(483))}var $r=!1;function Vg(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function xg(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,callbacks:null})}function Xr(r){return{lane:r,tag:0,payload:null,callback:null,next:null}}function Jr(r,s,o){var u=r.updateQueue;if(u===null)return null;if(u=u.shared,(Ye&2)!==0){var d=u.pending;return d===null?s.next=s:(s.next=d.next,d.next=s),u.pending=s,s=Ed(r),_E(r,null,o),s}return vd(r,u,s,o),Ed(r)}function Hu(r,s,o){if(s=s.updateQueue,s!==null&&(s=s.shared,(o&4194048)!==0)){var u=s.lanes;u&=r.pendingLanes,o|=u,s.lanes=o,yu(r,o)}}function kg(r,s){var o=r.updateQueue,u=r.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var d=null,g=null;if(o=o.firstBaseUpdate,o!==null){do{var E={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};g===null?d=g=E:g=g.next=E,o=o.next}while(o!==null);g===null?d=g=s:g=g.next=s}else d=g=s;o={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:g,shared:u.shared,callbacks:u.callbacks},r.updateQueue=o;return}r=o.lastBaseUpdate,r===null?o.firstBaseUpdate=s:r.next=s,o.lastBaseUpdate=s}var Mg=!1;function Gu(){if(Mg){var r=jo;if(r!==null)throw r}}function Ku(r,s,o,u){Mg=!1;var d=r.updateQueue;$r=!1;var g=d.firstBaseUpdate,E=d.lastBaseUpdate,w=d.shared.pending;if(w!==null){d.shared.pending=null;var S=w,z=S.next;S.next=null,E===null?g=z:E.next=z,E=S;var Q=r.alternate;Q!==null&&(Q=Q.updateQueue,w=Q.lastBaseUpdate,w!==E&&(w===null?Q.firstBaseUpdate=z:w.next=z,Q.lastBaseUpdate=S))}if(g!==null){var X=d.baseState;E=0,Q=z=S=null,w=g;do{var F=w.lane&-536870913,q=F!==w.lane;if(q?(ze&F)===F:(u&F)===F){F!==0&&F===qo&&(Mg=!0),Q!==null&&(Q=Q.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var Ae=r,we=w;F=s;var nt=o;switch(we.tag){case 1:if(Ae=we.payload,typeof Ae=="function"){X=Ae.call(nt,X,F);break e}X=Ae;break e;case 3:Ae.flags=Ae.flags&-65537|128;case 0:if(Ae=we.payload,F=typeof Ae=="function"?Ae.call(nt,X,F):Ae,F==null)break e;X=y({},X,F);break e;case 2:$r=!0}}F=w.callback,F!==null&&(r.flags|=64,q&&(r.flags|=8192),q=d.callbacks,q===null?d.callbacks=[F]:q.push(F))}else q={lane:F,tag:w.tag,payload:w.payload,callback:w.callback,next:null},Q===null?(z=Q=q,S=X):Q=Q.next=q,E|=F;if(w=w.next,w===null){if(w=d.shared.pending,w===null)break;q=w,w=q.next,q.next=null,d.lastBaseUpdate=q,d.shared.pending=null}}while(!0);Q===null&&(S=X),d.baseState=S,d.firstBaseUpdate=z,d.lastBaseUpdate=Q,g===null&&(d.shared.lanes=0),as|=E,r.lanes=E,r.memoizedState=X}}function OE(r,s){if(typeof r!="function")throw Error(n(191,r));r.call(s)}function VE(r,s){var o=r.callbacks;if(o!==null)for(r.callbacks=null,r=0;r<o.length;r++)OE(o[r],s)}var Ho=J(null),Dd=J(0);function xE(r,s){r=Ar,ie(Dd,r),ie(Ho,s),Ar=r|s.baseLanes}function Lg(){ie(Dd,Ar),ie(Ho,Ho.current)}function Ug(){Ar=Dd.current,ue(Ho),ue(Dd)}var Zr=0,Pe=null,et=null,xt=null,Pd=!1,Go=!1,Pa=!1,Nd=0,Qu=0,Ko=null,mC=0;function Rt(){throw Error(n(321))}function Bg(r,s){if(s===null)return!1;for(var o=0;o<s.length&&o<r.length;o++)if(!Ln(r[o],s[o]))return!1;return!0}function zg(r,s,o,u,d,g){return Zr=g,Pe=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,K.H=r===null||r.memoizedState===null?_T:yT,Pa=!1,g=o(u,d),Pa=!1,Go&&(g=ME(s,o,u,d)),kE(r),g}function kE(r){K.H=Ld;var s=et!==null&&et.next!==null;if(Zr=0,xt=et=Pe=null,Pd=!1,Qu=0,Ko=null,s)throw Error(n(300));r===null||Yt||(r=r.dependencies,r!==null&&Id(r)&&(Yt=!0))}function ME(r,s,o,u){Pe=r;var d=0;do{if(Go&&(Ko=null),Qu=0,Go=!1,25<=d)throw Error(n(301));if(d+=1,xt=et=null,r.updateQueue!=null){var g=r.updateQueue;g.lastEffect=null,g.events=null,g.stores=null,g.memoCache!=null&&(g.memoCache.index=0)}K.H=TC,g=s(o,u)}while(Go);return g}function gC(){var r=K.H,s=r.useState()[0];return s=typeof s.then=="function"?Yu(s):s,r=r.useState()[0],(et!==null?et.memoizedState:null)!==r&&(Pe.flags|=1024),s}function Fg(){var r=Nd!==0;return Nd=0,r}function qg(r,s,o){s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~o}function jg(r){if(Pd){for(r=r.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}Pd=!1}Zr=0,xt=et=Pe=null,Go=!1,Qu=Nd=0,Ko=null}function Rn(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xt===null?Pe.memoizedState=xt=r:xt=xt.next=r,xt}function kt(){if(et===null){var r=Pe.alternate;r=r!==null?r.memoizedState:null}else r=et.next;var s=xt===null?Pe.memoizedState:xt.next;if(s!==null)xt=s,et=r;else{if(r===null)throw Pe.alternate===null?Error(n(467)):Error(n(310));et=r,r={memoizedState:et.memoizedState,baseState:et.baseState,baseQueue:et.baseQueue,queue:et.queue,next:null},xt===null?Pe.memoizedState=xt=r:xt=xt.next=r}return xt}function Hg(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Yu(r){var s=Qu;return Qu+=1,Ko===null&&(Ko=[]),r=DE(Ko,r,s),s=Pe,(xt===null?s.memoizedState:xt.next)===null&&(s=s.alternate,K.H=s===null||s.memoizedState===null?_T:yT),r}function Od(r){if(r!==null&&typeof r=="object"){if(typeof r.then=="function")return Yu(r);if(r.$$typeof===ne)return dn(r)}throw Error(n(438,String(r)))}function Gg(r){var s=null,o=Pe.updateQueue;if(o!==null&&(s=o.memoCache),s==null){var u=Pe.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(s={data:u.data.map(function(d){return d.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),o===null&&(o=Hg(),Pe.updateQueue=o),o.memoCache=s,o=s.data[s.index],o===void 0)for(o=s.data[s.index]=Array(r),u=0;u<r;u++)o[u]=V;return s.index++,o}function vr(r,s){return typeof s=="function"?s(r):s}function Vd(r){var s=kt();return Kg(s,et,r)}function Kg(r,s,o){var u=r.queue;if(u===null)throw Error(n(311));u.lastRenderedReducer=o;var d=r.baseQueue,g=u.pending;if(g!==null){if(d!==null){var E=d.next;d.next=g.next,g.next=E}s.baseQueue=d=g,u.pending=null}if(g=r.baseState,d===null)r.memoizedState=g;else{s=d.next;var w=E=null,S=null,z=s,Q=!1;do{var X=z.lane&-536870913;if(X!==z.lane?(ze&X)===X:(Zr&X)===X){var F=z.revertLane;if(F===0)S!==null&&(S=S.next={lane:0,revertLane:0,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),X===qo&&(Q=!0);else if((Zr&F)===F){z=z.next,F===qo&&(Q=!0);continue}else X={lane:0,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},S===null?(w=S=X,E=g):S=S.next=X,Pe.lanes|=F,as|=F;X=z.action,Pa&&o(g,X),g=z.hasEagerState?z.eagerState:o(g,X)}else F={lane:X,revertLane:z.revertLane,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},S===null?(w=S=F,E=g):S=S.next=F,Pe.lanes|=X,as|=X;z=z.next}while(z!==null&&z!==s);if(S===null?E=g:S.next=w,!Ln(g,r.memoizedState)&&(Yt=!0,Q&&(o=jo,o!==null)))throw o;r.memoizedState=g,r.baseState=E,r.baseQueue=S,u.lastRenderedState=g}return d===null&&(u.lanes=0),[r.memoizedState,u.dispatch]}function Qg(r){var s=kt(),o=s.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=r;var u=o.dispatch,d=o.pending,g=s.memoizedState;if(d!==null){o.pending=null;var E=d=d.next;do g=r(g,E.action),E=E.next;while(E!==d);Ln(g,s.memoizedState)||(Yt=!0),s.memoizedState=g,s.baseQueue===null&&(s.baseState=g),o.lastRenderedState=g}return[g,u]}function LE(r,s,o){var u=Pe,d=kt(),g=Ge;if(g){if(o===void 0)throw Error(n(407));o=o()}else o=s();var E=!Ln((et||d).memoizedState,o);E&&(d.memoizedState=o,Yt=!0),d=d.queue;var w=zE.bind(null,u,d,r);if(Wu(2048,8,w,[r]),d.getSnapshot!==s||E||xt!==null&&xt.memoizedState.tag&1){if(u.flags|=2048,Qo(9,xd(),BE.bind(null,u,d,o,s),null),st===null)throw Error(n(349));g||(Zr&124)!==0||UE(u,s,o)}return o}function UE(r,s,o){r.flags|=16384,r={getSnapshot:s,value:o},s=Pe.updateQueue,s===null?(s=Hg(),Pe.updateQueue=s,s.stores=[r]):(o=s.stores,o===null?s.stores=[r]:o.push(r))}function BE(r,s,o,u){s.value=o,s.getSnapshot=u,FE(s)&&qE(r)}function zE(r,s,o){return o(function(){FE(s)&&qE(r)})}function FE(r){var s=r.getSnapshot;r=r.value;try{var o=s();return!Ln(r,o)}catch{return!0}}function qE(r){var s=Uo(r,2);s!==null&&jn(s,r,2)}function Yg(r){var s=Rn();if(typeof r=="function"){var o=r;if(r=o(),Pa){kn(!0);try{o()}finally{kn(!1)}}}return s.memoizedState=s.baseState=r,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:vr,lastRenderedState:r},s}function jE(r,s,o,u){return r.baseState=o,Kg(r,et,typeof u=="function"?u:vr)}function pC(r,s,o,u,d){if(Md(r))throw Error(n(485));if(r=s.action,r!==null){var g={payload:d,action:r,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){g.listeners.push(E)}};K.T!==null?o(!0):g.isTransition=!1,u(g),o=s.pending,o===null?(g.next=s.pending=g,HE(s,g)):(g.next=o.next,s.pending=o.next=g)}}function HE(r,s){var o=s.action,u=s.payload,d=r.state;if(s.isTransition){var g=K.T,E={};K.T=E;try{var w=o(d,u),S=K.S;S!==null&&S(E,w),GE(r,s,w)}catch(z){Wg(r,s,z)}finally{K.T=g}}else try{g=o(d,u),GE(r,s,g)}catch(z){Wg(r,s,z)}}function GE(r,s,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(u){KE(r,s,u)},function(u){return Wg(r,s,u)}):KE(r,s,o)}function KE(r,s,o){s.status="fulfilled",s.value=o,QE(s),r.state=o,s=r.pending,s!==null&&(o=s.next,o===s?r.pending=null:(o=o.next,s.next=o,HE(r,o)))}function Wg(r,s,o){var u=r.pending;if(r.pending=null,u!==null){u=u.next;do s.status="rejected",s.reason=o,QE(s),s=s.next;while(s!==u)}r.action=null}function QE(r){r=r.listeners;for(var s=0;s<r.length;s++)(0,r[s])()}function YE(r,s){return s}function WE(r,s){if(Ge){var o=st.formState;if(o!==null){e:{var u=Pe;if(Ge){if(Tt){t:{for(var d=Tt,g=xi;d.nodeType!==8;){if(!g){d=null;break t}if(d=pi(d.nextSibling),d===null){d=null;break t}}g=d.data,d=g==="F!"||g==="F"?d:null}if(d){Tt=pi(d.nextSibling),u=d.data==="F!";break e}}Sa(u)}u=!1}u&&(s=o[0])}}return o=Rn(),o.memoizedState=o.baseState=s,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:YE,lastRenderedState:s},o.queue=u,o=mT.bind(null,Pe,u),u.dispatch=o,u=Yg(!1),g=ep.bind(null,Pe,!1,u.queue),u=Rn(),d={state:s,dispatch:null,action:r,pending:null},u.queue=d,o=pC.bind(null,Pe,d,g,o),d.dispatch=o,u.memoizedState=r,[s,o,!1]}function $E(r){var s=kt();return XE(s,et,r)}function XE(r,s,o){if(s=Kg(r,s,YE)[0],r=Vd(vr)[0],typeof s=="object"&&s!==null&&typeof s.then=="function")try{var u=Yu(s)}catch(E){throw E===qu?Rd:E}else u=s;s=kt();var d=s.queue,g=d.dispatch;return o!==s.memoizedState&&(Pe.flags|=2048,Qo(9,xd(),_C.bind(null,d,o),null)),[u,g,r]}function _C(r,s){r.action=s}function JE(r){var s=kt(),o=et;if(o!==null)return XE(s,o,r);kt(),s=s.memoizedState,o=kt();var u=o.queue.dispatch;return o.memoizedState=r,[s,u,!1]}function Qo(r,s,o,u){return r={tag:r,create:o,deps:u,inst:s,next:null},s=Pe.updateQueue,s===null&&(s=Hg(),Pe.updateQueue=s),o=s.lastEffect,o===null?s.lastEffect=r.next=r:(u=o.next,o.next=r,r.next=u,s.lastEffect=r),r}function xd(){return{destroy:void 0,resource:void 0}}function ZE(){return kt().memoizedState}function kd(r,s,o,u){var d=Rn();u=u===void 0?null:u,Pe.flags|=r,d.memoizedState=Qo(1|s,xd(),o,u)}function Wu(r,s,o,u){var d=kt();u=u===void 0?null:u;var g=d.memoizedState.inst;et!==null&&u!==null&&Bg(u,et.memoizedState.deps)?d.memoizedState=Qo(s,g,o,u):(Pe.flags|=r,d.memoizedState=Qo(1|s,g,o,u))}function eT(r,s){kd(8390656,8,r,s)}function tT(r,s){Wu(2048,8,r,s)}function nT(r,s){return Wu(4,2,r,s)}function iT(r,s){return Wu(4,4,r,s)}function rT(r,s){if(typeof s=="function"){r=r();var o=s(r);return function(){typeof o=="function"?o():s(null)}}if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function sT(r,s,o){o=o!=null?o.concat([r]):null,Wu(4,4,rT.bind(null,s,r),o)}function $g(){}function aT(r,s){var o=kt();s=s===void 0?null:s;var u=o.memoizedState;return s!==null&&Bg(s,u[1])?u[0]:(o.memoizedState=[r,s],r)}function oT(r,s){var o=kt();s=s===void 0?null:s;var u=o.memoizedState;if(s!==null&&Bg(s,u[1]))return u[0];if(u=r(),Pa){kn(!0);try{r()}finally{kn(!1)}}return o.memoizedState=[u,s],u}function Xg(r,s,o){return o===void 0||(Zr&1073741824)!==0?r.memoizedState=s:(r.memoizedState=o,r=cw(),Pe.lanes|=r,as|=r,o)}function lT(r,s,o,u){return Ln(o,s)?o:Ho.current!==null?(r=Xg(r,o,u),Ln(r,s)||(Yt=!0),r):(Zr&42)===0?(Yt=!0,r.memoizedState=o):(r=cw(),Pe.lanes|=r,as|=r,s)}function uT(r,s,o,u,d){var g=oe.p;oe.p=g!==0&&8>g?g:8;var E=K.T,w={};K.T=w,ep(r,!1,s,o);try{var S=d(),z=K.S;if(z!==null&&z(w,S),S!==null&&typeof S=="object"&&typeof S.then=="function"){var Q=fC(S,u);$u(r,s,Q,qn(r))}else $u(r,s,u,qn(r))}catch(X){$u(r,s,{then:function(){},status:"rejected",reason:X},qn())}finally{oe.p=g,K.T=E}}function yC(){}function Jg(r,s,o,u){if(r.tag!==5)throw Error(n(476));var d=cT(r).queue;uT(r,d,s,_e,o===null?yC:function(){return hT(r),o(u)})}function cT(r){var s=r.memoizedState;if(s!==null)return s;s={memoizedState:_e,baseState:_e,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:vr,lastRenderedState:_e},next:null};var o={};return s.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:vr,lastRenderedState:o},next:null},r.memoizedState=s,r=r.alternate,r!==null&&(r.memoizedState=s),s}function hT(r){var s=cT(r).next.queue;$u(r,s,{},qn())}function Zg(){return dn(mc)}function dT(){return kt().memoizedState}function fT(){return kt().memoizedState}function vC(r){for(var s=r.return;s!==null;){switch(s.tag){case 24:case 3:var o=qn();r=Xr(o);var u=Jr(s,r,o);u!==null&&(jn(u,s,o),Hu(u,s,o)),s={cache:Dg()},r.payload=s;return}s=s.return}}function EC(r,s,o){var u=qn();o={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},Md(r)?gT(s,o):(o=vg(r,s,o,u),o!==null&&(jn(o,r,u),pT(o,s,u)))}function mT(r,s,o){var u=qn();$u(r,s,o,u)}function $u(r,s,o,u){var d={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(Md(r))gT(s,d);else{var g=r.alternate;if(r.lanes===0&&(g===null||g.lanes===0)&&(g=s.lastRenderedReducer,g!==null))try{var E=s.lastRenderedState,w=g(E,o);if(d.hasEagerState=!0,d.eagerState=w,Ln(w,E))return vd(r,s,d,0),st===null&&yd(),!1}catch{}finally{}if(o=vg(r,s,d,u),o!==null)return jn(o,r,u),pT(o,s,u),!0}return!1}function ep(r,s,o,u){if(u={lane:2,revertLane:Op(),action:u,hasEagerState:!1,eagerState:null,next:null},Md(r)){if(s)throw Error(n(479))}else s=vg(r,o,u,2),s!==null&&jn(s,r,2)}function Md(r){var s=r.alternate;return r===Pe||s!==null&&s===Pe}function gT(r,s){Go=Pd=!0;var o=r.pending;o===null?s.next=s:(s.next=o.next,o.next=s),r.pending=s}function pT(r,s,o){if((o&4194048)!==0){var u=s.lanes;u&=r.pendingLanes,o|=u,s.lanes=o,yu(r,o)}}var Ld={readContext:dn,use:Od,useCallback:Rt,useContext:Rt,useEffect:Rt,useImperativeHandle:Rt,useLayoutEffect:Rt,useInsertionEffect:Rt,useMemo:Rt,useReducer:Rt,useRef:Rt,useState:Rt,useDebugValue:Rt,useDeferredValue:Rt,useTransition:Rt,useSyncExternalStore:Rt,useId:Rt,useHostTransitionStatus:Rt,useFormState:Rt,useActionState:Rt,useOptimistic:Rt,useMemoCache:Rt,useCacheRefresh:Rt},_T={readContext:dn,use:Od,useCallback:function(r,s){return Rn().memoizedState=[r,s===void 0?null:s],r},useContext:dn,useEffect:eT,useImperativeHandle:function(r,s,o){o=o!=null?o.concat([r]):null,kd(4194308,4,rT.bind(null,s,r),o)},useLayoutEffect:function(r,s){return kd(4194308,4,r,s)},useInsertionEffect:function(r,s){kd(4,2,r,s)},useMemo:function(r,s){var o=Rn();s=s===void 0?null:s;var u=r();if(Pa){kn(!0);try{r()}finally{kn(!1)}}return o.memoizedState=[u,s],u},useReducer:function(r,s,o){var u=Rn();if(o!==void 0){var d=o(s);if(Pa){kn(!0);try{o(s)}finally{kn(!1)}}}else d=s;return u.memoizedState=u.baseState=d,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:d},u.queue=r,r=r.dispatch=EC.bind(null,Pe,r),[u.memoizedState,r]},useRef:function(r){var s=Rn();return r={current:r},s.memoizedState=r},useState:function(r){r=Yg(r);var s=r.queue,o=mT.bind(null,Pe,s);return s.dispatch=o,[r.memoizedState,o]},useDebugValue:$g,useDeferredValue:function(r,s){var o=Rn();return Xg(o,r,s)},useTransition:function(){var r=Yg(!1);return r=uT.bind(null,Pe,r.queue,!0,!1),Rn().memoizedState=r,[!1,r]},useSyncExternalStore:function(r,s,o){var u=Pe,d=Rn();if(Ge){if(o===void 0)throw Error(n(407));o=o()}else{if(o=s(),st===null)throw Error(n(349));(ze&124)!==0||UE(u,s,o)}d.memoizedState=o;var g={value:o,getSnapshot:s};return d.queue=g,eT(zE.bind(null,u,g,r),[r]),u.flags|=2048,Qo(9,xd(),BE.bind(null,u,g,o,s),null),o},useId:function(){var r=Rn(),s=st.identifierPrefix;if(Ge){var o=pr,u=gr;o=(u&~(1<<32-hn(u)-1)).toString(32)+o,s="«"+s+"R"+o,o=Nd++,0<o&&(s+="H"+o.toString(32)),s+="»"}else o=mC++,s="«"+s+"r"+o.toString(32)+"»";return r.memoizedState=s},useHostTransitionStatus:Zg,useFormState:WE,useActionState:WE,useOptimistic:function(r){var s=Rn();s.memoizedState=s.baseState=r;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=o,s=ep.bind(null,Pe,!0,o),o.dispatch=s,[r,s]},useMemoCache:Gg,useCacheRefresh:function(){return Rn().memoizedState=vC.bind(null,Pe)}},yT={readContext:dn,use:Od,useCallback:aT,useContext:dn,useEffect:tT,useImperativeHandle:sT,useInsertionEffect:nT,useLayoutEffect:iT,useMemo:oT,useReducer:Vd,useRef:ZE,useState:function(){return Vd(vr)},useDebugValue:$g,useDeferredValue:function(r,s){var o=kt();return lT(o,et.memoizedState,r,s)},useTransition:function(){var r=Vd(vr)[0],s=kt().memoizedState;return[typeof r=="boolean"?r:Yu(r),s]},useSyncExternalStore:LE,useId:dT,useHostTransitionStatus:Zg,useFormState:$E,useActionState:$E,useOptimistic:function(r,s){var o=kt();return jE(o,et,r,s)},useMemoCache:Gg,useCacheRefresh:fT},TC={readContext:dn,use:Od,useCallback:aT,useContext:dn,useEffect:tT,useImperativeHandle:sT,useInsertionEffect:nT,useLayoutEffect:iT,useMemo:oT,useReducer:Qg,useRef:ZE,useState:function(){return Qg(vr)},useDebugValue:$g,useDeferredValue:function(r,s){var o=kt();return et===null?Xg(o,r,s):lT(o,et.memoizedState,r,s)},useTransition:function(){var r=Qg(vr)[0],s=kt().memoizedState;return[typeof r=="boolean"?r:Yu(r),s]},useSyncExternalStore:LE,useId:dT,useHostTransitionStatus:Zg,useFormState:JE,useActionState:JE,useOptimistic:function(r,s){var o=kt();return et!==null?jE(o,et,r,s):(o.baseState=r,[r,o.queue.dispatch])},useMemoCache:Gg,useCacheRefresh:fT},Yo=null,Xu=0;function Ud(r){var s=Xu;return Xu+=1,Yo===null&&(Yo=[]),DE(Yo,r,s)}function Ju(r,s){s=s.props.ref,r.ref=s!==void 0?s:null}function Bd(r,s){throw s.$$typeof===T?Error(n(525)):(r=Object.prototype.toString.call(s),Error(n(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r)))}function vT(r){var s=r._init;return s(r._payload)}function ET(r){function s(k,P){if(r){var B=k.deletions;B===null?(k.deletions=[P],k.flags|=16):B.push(P)}}function o(k,P){if(!r)return null;for(;P!==null;)s(k,P),P=P.sibling;return null}function u(k){for(var P=new Map;k!==null;)k.key!==null?P.set(k.key,k):P.set(k.index,k),k=k.sibling;return P}function d(k,P){return k=mr(k,P),k.index=0,k.sibling=null,k}function g(k,P,B){return k.index=B,r?(B=k.alternate,B!==null?(B=B.index,B<P?(k.flags|=67108866,P):B):(k.flags|=67108866,P)):(k.flags|=1048576,P)}function E(k){return r&&k.alternate===null&&(k.flags|=67108866),k}function w(k,P,B,W){return P===null||P.tag!==6?(P=Tg(B,k.mode,W),P.return=k,P):(P=d(P,B),P.return=k,P)}function S(k,P,B,W){var he=B.type;return he===G?Q(k,P,B.props.children,W,B.key):P!==null&&(P.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===A&&vT(he)===P.type)?(P=d(P,B.props),Ju(P,B),P.return=k,P):(P=Td(B.type,B.key,B.props,null,k.mode,W),Ju(P,B),P.return=k,P)}function z(k,P,B,W){return P===null||P.tag!==4||P.stateNode.containerInfo!==B.containerInfo||P.stateNode.implementation!==B.implementation?(P=wg(B,k.mode,W),P.return=k,P):(P=d(P,B.children||[]),P.return=k,P)}function Q(k,P,B,W,he){return P===null||P.tag!==7?(P=wa(B,k.mode,W,he),P.return=k,P):(P=d(P,B),P.return=k,P)}function X(k,P,B){if(typeof P=="string"&&P!==""||typeof P=="number"||typeof P=="bigint")return P=Tg(""+P,k.mode,B),P.return=k,P;if(typeof P=="object"&&P!==null){switch(P.$$typeof){case b:return B=Td(P.type,P.key,P.props,null,k.mode,B),Ju(B,P),B.return=k,B;case O:return P=wg(P,k.mode,B),P.return=k,P;case A:var W=P._init;return P=W(P._payload),X(k,P,B)}if(vt(P)||M(P))return P=wa(P,k.mode,B,null),P.return=k,P;if(typeof P.then=="function")return X(k,Ud(P),B);if(P.$$typeof===ne)return X(k,Ad(k,P),B);Bd(k,P)}return null}function F(k,P,B,W){var he=P!==null?P.key:null;if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return he!==null?null:w(k,P,""+B,W);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case b:return B.key===he?S(k,P,B,W):null;case O:return B.key===he?z(k,P,B,W):null;case A:return he=B._init,B=he(B._payload),F(k,P,B,W)}if(vt(B)||M(B))return he!==null?null:Q(k,P,B,W,null);if(typeof B.then=="function")return F(k,P,Ud(B),W);if(B.$$typeof===ne)return F(k,P,Ad(k,B),W);Bd(k,B)}return null}function q(k,P,B,W,he){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return k=k.get(B)||null,w(P,k,""+W,he);if(typeof W=="object"&&W!==null){switch(W.$$typeof){case b:return k=k.get(W.key===null?B:W.key)||null,S(P,k,W,he);case O:return k=k.get(W.key===null?B:W.key)||null,z(P,k,W,he);case A:var Oe=W._init;return W=Oe(W._payload),q(k,P,B,W,he)}if(vt(W)||M(W))return k=k.get(B)||null,Q(P,k,W,he,null);if(typeof W.then=="function")return q(k,P,B,Ud(W),he);if(W.$$typeof===ne)return q(k,P,B,Ad(P,W),he);Bd(P,W)}return null}function Ae(k,P,B,W){for(var he=null,Oe=null,pe=P,be=P=0,$t=null;pe!==null&&be<B.length;be++){pe.index>be?($t=pe,pe=null):$t=pe.sibling;var qe=F(k,pe,B[be],W);if(qe===null){pe===null&&(pe=$t);break}r&&pe&&qe.alternate===null&&s(k,pe),P=g(qe,P,be),Oe===null?he=qe:Oe.sibling=qe,Oe=qe,pe=$t}if(be===B.length)return o(k,pe),Ge&&Ia(k,be),he;if(pe===null){for(;be<B.length;be++)pe=X(k,B[be],W),pe!==null&&(P=g(pe,P,be),Oe===null?he=pe:Oe.sibling=pe,Oe=pe);return Ge&&Ia(k,be),he}for(pe=u(pe);be<B.length;be++)$t=q(pe,k,be,B[be],W),$t!==null&&(r&&$t.alternate!==null&&pe.delete($t.key===null?be:$t.key),P=g($t,P,be),Oe===null?he=$t:Oe.sibling=$t,Oe=$t);return r&&pe.forEach(function(gs){return s(k,gs)}),Ge&&Ia(k,be),he}function we(k,P,B,W){if(B==null)throw Error(n(151));for(var he=null,Oe=null,pe=P,be=P=0,$t=null,qe=B.next();pe!==null&&!qe.done;be++,qe=B.next()){pe.index>be?($t=pe,pe=null):$t=pe.sibling;var gs=F(k,pe,qe.value,W);if(gs===null){pe===null&&(pe=$t);break}r&&pe&&gs.alternate===null&&s(k,pe),P=g(gs,P,be),Oe===null?he=gs:Oe.sibling=gs,Oe=gs,pe=$t}if(qe.done)return o(k,pe),Ge&&Ia(k,be),he;if(pe===null){for(;!qe.done;be++,qe=B.next())qe=X(k,qe.value,W),qe!==null&&(P=g(qe,P,be),Oe===null?he=qe:Oe.sibling=qe,Oe=qe);return Ge&&Ia(k,be),he}for(pe=u(pe);!qe.done;be++,qe=B.next())qe=q(pe,k,be,qe.value,W),qe!==null&&(r&&qe.alternate!==null&&pe.delete(qe.key===null?be:qe.key),P=g(qe,P,be),Oe===null?he=qe:Oe.sibling=qe,Oe=qe);return r&&pe.forEach(function(wD){return s(k,wD)}),Ge&&Ia(k,be),he}function nt(k,P,B,W){if(typeof B=="object"&&B!==null&&B.type===G&&B.key===null&&(B=B.props.children),typeof B=="object"&&B!==null){switch(B.$$typeof){case b:e:{for(var he=B.key;P!==null;){if(P.key===he){if(he=B.type,he===G){if(P.tag===7){o(k,P.sibling),W=d(P,B.props.children),W.return=k,k=W;break e}}else if(P.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===A&&vT(he)===P.type){o(k,P.sibling),W=d(P,B.props),Ju(W,B),W.return=k,k=W;break e}o(k,P);break}else s(k,P);P=P.sibling}B.type===G?(W=wa(B.props.children,k.mode,W,B.key),W.return=k,k=W):(W=Td(B.type,B.key,B.props,null,k.mode,W),Ju(W,B),W.return=k,k=W)}return E(k);case O:e:{for(he=B.key;P!==null;){if(P.key===he)if(P.tag===4&&P.stateNode.containerInfo===B.containerInfo&&P.stateNode.implementation===B.implementation){o(k,P.sibling),W=d(P,B.children||[]),W.return=k,k=W;break e}else{o(k,P);break}else s(k,P);P=P.sibling}W=wg(B,k.mode,W),W.return=k,k=W}return E(k);case A:return he=B._init,B=he(B._payload),nt(k,P,B,W)}if(vt(B))return Ae(k,P,B,W);if(M(B)){if(he=M(B),typeof he!="function")throw Error(n(150));return B=he.call(B),we(k,P,B,W)}if(typeof B.then=="function")return nt(k,P,Ud(B),W);if(B.$$typeof===ne)return nt(k,P,Ad(k,B),W);Bd(k,B)}return typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint"?(B=""+B,P!==null&&P.tag===6?(o(k,P.sibling),W=d(P,B),W.return=k,k=W):(o(k,P),W=Tg(B,k.mode,W),W.return=k,k=W),E(k)):o(k,P)}return function(k,P,B,W){try{Xu=0;var he=nt(k,P,B,W);return Yo=null,he}catch(pe){if(pe===qu||pe===Rd)throw pe;var Oe=Un(29,pe,null,k.mode);return Oe.lanes=W,Oe.return=k,Oe}finally{}}}var Wo=ET(!0),TT=ET(!1),ri=J(null),ki=null;function es(r){var s=r.alternate;ie(qt,qt.current&1),ie(ri,r),ki===null&&(s===null||Ho.current!==null||s.memoizedState!==null)&&(ki=r)}function wT(r){if(r.tag===22){if(ie(qt,qt.current),ie(ri,r),ki===null){var s=r.alternate;s!==null&&s.memoizedState!==null&&(ki=r)}}else ts()}function ts(){ie(qt,qt.current),ie(ri,ri.current)}function Er(r){ue(ri),ki===r&&(ki=null),ue(qt)}var qt=J(0);function zd(r){for(var s=r;s!==null;){if(s.tag===13){var o=s.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||Hp(o)))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}function tp(r,s,o,u){s=r.memoizedState,o=o(u,s),o=o==null?s:y({},s,o),r.memoizedState=o,r.lanes===0&&(r.updateQueue.baseState=o)}var np={enqueueSetState:function(r,s,o){r=r._reactInternals;var u=qn(),d=Xr(u);d.payload=s,o!=null&&(d.callback=o),s=Jr(r,d,u),s!==null&&(jn(s,r,u),Hu(s,r,u))},enqueueReplaceState:function(r,s,o){r=r._reactInternals;var u=qn(),d=Xr(u);d.tag=1,d.payload=s,o!=null&&(d.callback=o),s=Jr(r,d,u),s!==null&&(jn(s,r,u),Hu(s,r,u))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var o=qn(),u=Xr(o);u.tag=2,s!=null&&(u.callback=s),s=Jr(r,u,o),s!==null&&(jn(s,r,o),Hu(s,r,o))}};function bT(r,s,o,u,d,g,E){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(u,g,E):s.prototype&&s.prototype.isPureReactComponent?!xu(o,u)||!xu(d,g):!0}function IT(r,s,o,u){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(o,u),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(o,u),s.state!==r&&np.enqueueReplaceState(s,s.state,null)}function Na(r,s){var o=s;if("ref"in s){o={};for(var u in s)u!=="ref"&&(o[u]=s[u])}if(r=r.defaultProps){o===s&&(o=y({},o));for(var d in r)o[d]===void 0&&(o[d]=r[d])}return o}var Fd=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)};function AT(r){Fd(r)}function ST(r){console.error(r)}function RT(r){Fd(r)}function qd(r,s){try{var o=r.onUncaughtError;o(s.value,{componentStack:s.stack})}catch(u){setTimeout(function(){throw u})}}function CT(r,s,o){try{var u=r.onCaughtError;u(o.value,{componentStack:o.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function ip(r,s,o){return o=Xr(o),o.tag=3,o.payload={element:null},o.callback=function(){qd(r,s)},o}function DT(r){return r=Xr(r),r.tag=3,r}function PT(r,s,o,u){var d=o.type.getDerivedStateFromError;if(typeof d=="function"){var g=u.value;r.payload=function(){return d(g)},r.callback=function(){CT(s,o,u)}}var E=o.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(r.callback=function(){CT(s,o,u),typeof d!="function"&&(os===null?os=new Set([this]):os.add(this));var w=u.stack;this.componentDidCatch(u.value,{componentStack:w!==null?w:""})})}function wC(r,s,o,u,d){if(o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(s=o.alternate,s!==null&&Bu(s,o,d,!0),o=ri.current,o!==null){switch(o.tag){case 13:return ki===null?Rp():o.alternate===null&&wt===0&&(wt=3),o.flags&=-257,o.flags|=65536,o.lanes=d,u===Og?o.flags|=16384:(s=o.updateQueue,s===null?o.updateQueue=new Set([u]):s.add(u),Dp(r,u,d)),!1;case 22:return o.flags|=65536,u===Og?o.flags|=16384:(s=o.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([u])},o.updateQueue=s):(o=s.retryQueue,o===null?s.retryQueue=new Set([u]):o.add(u)),Dp(r,u,d)),!1}throw Error(n(435,o.tag))}return Dp(r,u,d),Rp(),!1}if(Ge)return s=ri.current,s!==null?((s.flags&65536)===0&&(s.flags|=256),s.flags|=65536,s.lanes=d,u!==Ag&&(r=Error(n(422),{cause:u}),Uu(ei(r,o)))):(u!==Ag&&(s=Error(n(423),{cause:u}),Uu(ei(s,o))),r=r.current.alternate,r.flags|=65536,d&=-d,r.lanes|=d,u=ei(u,o),d=ip(r.stateNode,u,d),kg(r,d),wt!==4&&(wt=2)),!1;var g=Error(n(520),{cause:u});if(g=ei(g,o),sc===null?sc=[g]:sc.push(g),wt!==4&&(wt=2),s===null)return!0;u=ei(u,o),o=s;do{switch(o.tag){case 3:return o.flags|=65536,r=d&-d,o.lanes|=r,r=ip(o.stateNode,u,r),kg(o,r),!1;case 1:if(s=o.type,g=o.stateNode,(o.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(os===null||!os.has(g))))return o.flags|=65536,d&=-d,o.lanes|=d,d=DT(d),PT(d,r,o,u),kg(o,d),!1}o=o.return}while(o!==null);return!1}var NT=Error(n(461)),Yt=!1;function rn(r,s,o,u){s.child=r===null?TT(s,null,o,u):Wo(s,r.child,o,u)}function OT(r,s,o,u,d){o=o.render;var g=s.ref;if("ref"in u){var E={};for(var w in u)w!=="ref"&&(E[w]=u[w])}else E=u;return Ca(s),u=zg(r,s,o,E,g,d),w=Fg(),r!==null&&!Yt?(qg(r,s,d),Tr(r,s,d)):(Ge&&w&&bg(s),s.flags|=1,rn(r,s,u,d),s.child)}function VT(r,s,o,u,d){if(r===null){var g=o.type;return typeof g=="function"&&!Eg(g)&&g.defaultProps===void 0&&o.compare===null?(s.tag=15,s.type=g,xT(r,s,g,u,d)):(r=Td(o.type,null,u,s,s.mode,d),r.ref=s.ref,r.return=s,s.child=r)}if(g=r.child,!hp(r,d)){var E=g.memoizedProps;if(o=o.compare,o=o!==null?o:xu,o(E,u)&&r.ref===s.ref)return Tr(r,s,d)}return s.flags|=1,r=mr(g,u),r.ref=s.ref,r.return=s,s.child=r}function xT(r,s,o,u,d){if(r!==null){var g=r.memoizedProps;if(xu(g,u)&&r.ref===s.ref)if(Yt=!1,s.pendingProps=u=g,hp(r,d))(r.flags&131072)!==0&&(Yt=!0);else return s.lanes=r.lanes,Tr(r,s,d)}return rp(r,s,o,u,d)}function kT(r,s,o){var u=s.pendingProps,d=u.children,g=r!==null?r.memoizedState:null;if(u.mode==="hidden"){if((s.flags&128)!==0){if(u=g!==null?g.baseLanes|o:o,r!==null){for(d=s.child=r.child,g=0;d!==null;)g=g|d.lanes|d.childLanes,d=d.sibling;s.childLanes=g&~u}else s.childLanes=0,s.child=null;return MT(r,s,u,o)}if((o&536870912)!==0)s.memoizedState={baseLanes:0,cachePool:null},r!==null&&Sd(s,g!==null?g.cachePool:null),g!==null?xE(s,g):Lg(),wT(s);else return s.lanes=s.childLanes=536870912,MT(r,s,g!==null?g.baseLanes|o:o,o)}else g!==null?(Sd(s,g.cachePool),xE(s,g),ts(),s.memoizedState=null):(r!==null&&Sd(s,null),Lg(),ts());return rn(r,s,d,o),s.child}function MT(r,s,o,u){var d=Ng();return d=d===null?null:{parent:Ft._currentValue,pool:d},s.memoizedState={baseLanes:o,cachePool:d},r!==null&&Sd(s,null),Lg(),wT(s),r!==null&&Bu(r,s,u,!0),null}function jd(r,s){var o=s.ref;if(o===null)r!==null&&r.ref!==null&&(s.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(n(284));(r===null||r.ref!==o)&&(s.flags|=4194816)}}function rp(r,s,o,u,d){return Ca(s),o=zg(r,s,o,u,void 0,d),u=Fg(),r!==null&&!Yt?(qg(r,s,d),Tr(r,s,d)):(Ge&&u&&bg(s),s.flags|=1,rn(r,s,o,d),s.child)}function LT(r,s,o,u,d,g){return Ca(s),s.updateQueue=null,o=ME(s,u,o,d),kE(r),u=Fg(),r!==null&&!Yt?(qg(r,s,g),Tr(r,s,g)):(Ge&&u&&bg(s),s.flags|=1,rn(r,s,o,g),s.child)}function UT(r,s,o,u,d){if(Ca(s),s.stateNode===null){var g=Bo,E=o.contextType;typeof E=="object"&&E!==null&&(g=dn(E)),g=new o(u,g),s.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,g.updater=np,s.stateNode=g,g._reactInternals=s,g=s.stateNode,g.props=u,g.state=s.memoizedState,g.refs={},Vg(s),E=o.contextType,g.context=typeof E=="object"&&E!==null?dn(E):Bo,g.state=s.memoizedState,E=o.getDerivedStateFromProps,typeof E=="function"&&(tp(s,o,E,u),g.state=s.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(E=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),E!==g.state&&np.enqueueReplaceState(g,g.state,null),Ku(s,u,g,d),Gu(),g.state=s.memoizedState),typeof g.componentDidMount=="function"&&(s.flags|=4194308),u=!0}else if(r===null){g=s.stateNode;var w=s.memoizedProps,S=Na(o,w);g.props=S;var z=g.context,Q=o.contextType;E=Bo,typeof Q=="object"&&Q!==null&&(E=dn(Q));var X=o.getDerivedStateFromProps;Q=typeof X=="function"||typeof g.getSnapshotBeforeUpdate=="function",w=s.pendingProps!==w,Q||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(w||z!==E)&&IT(s,g,u,E),$r=!1;var F=s.memoizedState;g.state=F,Ku(s,u,g,d),Gu(),z=s.memoizedState,w||F!==z||$r?(typeof X=="function"&&(tp(s,o,X,u),z=s.memoizedState),(S=$r||bT(s,o,S,u,F,z,E))?(Q||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(s.flags|=4194308)):(typeof g.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=u,s.memoizedState=z),g.props=u,g.state=z,g.context=E,u=S):(typeof g.componentDidMount=="function"&&(s.flags|=4194308),u=!1)}else{g=s.stateNode,xg(r,s),E=s.memoizedProps,Q=Na(o,E),g.props=Q,X=s.pendingProps,F=g.context,z=o.contextType,S=Bo,typeof z=="object"&&z!==null&&(S=dn(z)),w=o.getDerivedStateFromProps,(z=typeof w=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(E!==X||F!==S)&&IT(s,g,u,S),$r=!1,F=s.memoizedState,g.state=F,Ku(s,u,g,d),Gu();var q=s.memoizedState;E!==X||F!==q||$r||r!==null&&r.dependencies!==null&&Id(r.dependencies)?(typeof w=="function"&&(tp(s,o,w,u),q=s.memoizedState),(Q=$r||bT(s,o,Q,u,F,q,S)||r!==null&&r.dependencies!==null&&Id(r.dependencies))?(z||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(u,q,S),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(u,q,S)),typeof g.componentDidUpdate=="function"&&(s.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof g.componentDidUpdate!="function"||E===r.memoizedProps&&F===r.memoizedState||(s.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||E===r.memoizedProps&&F===r.memoizedState||(s.flags|=1024),s.memoizedProps=u,s.memoizedState=q),g.props=u,g.state=q,g.context=S,u=Q):(typeof g.componentDidUpdate!="function"||E===r.memoizedProps&&F===r.memoizedState||(s.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||E===r.memoizedProps&&F===r.memoizedState||(s.flags|=1024),u=!1)}return g=u,jd(r,s),u=(s.flags&128)!==0,g||u?(g=s.stateNode,o=u&&typeof o.getDerivedStateFromError!="function"?null:g.render(),s.flags|=1,r!==null&&u?(s.child=Wo(s,r.child,null,d),s.child=Wo(s,null,o,d)):rn(r,s,o,d),s.memoizedState=g.state,r=s.child):r=Tr(r,s,d),r}function BT(r,s,o,u){return Lu(),s.flags|=256,rn(r,s,o,u),s.child}var sp={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ap(r){return{baseLanes:r,cachePool:SE()}}function op(r,s,o){return r=r!==null?r.childLanes&~o:0,s&&(r|=si),r}function zT(r,s,o){var u=s.pendingProps,d=!1,g=(s.flags&128)!==0,E;if((E=g)||(E=r!==null&&r.memoizedState===null?!1:(qt.current&2)!==0),E&&(d=!0,s.flags&=-129),E=(s.flags&32)!==0,s.flags&=-33,r===null){if(Ge){if(d?es(s):ts(),Ge){var w=Tt,S;if(S=w){e:{for(S=w,w=xi;S.nodeType!==8;){if(!w){w=null;break e}if(S=pi(S.nextSibling),S===null){w=null;break e}}w=S}w!==null?(s.memoizedState={dehydrated:w,treeContext:ba!==null?{id:gr,overflow:pr}:null,retryLane:536870912,hydrationErrors:null},S=Un(18,null,null,0),S.stateNode=w,S.return=s,s.child=S,Tn=s,Tt=null,S=!0):S=!1}S||Sa(s)}if(w=s.memoizedState,w!==null&&(w=w.dehydrated,w!==null))return Hp(w)?s.lanes=32:s.lanes=536870912,null;Er(s)}return w=u.children,u=u.fallback,d?(ts(),d=s.mode,w=Hd({mode:"hidden",children:w},d),u=wa(u,d,o,null),w.return=s,u.return=s,w.sibling=u,s.child=w,d=s.child,d.memoizedState=ap(o),d.childLanes=op(r,E,o),s.memoizedState=sp,u):(es(s),lp(s,w))}if(S=r.memoizedState,S!==null&&(w=S.dehydrated,w!==null)){if(g)s.flags&256?(es(s),s.flags&=-257,s=up(r,s,o)):s.memoizedState!==null?(ts(),s.child=r.child,s.flags|=128,s=null):(ts(),d=u.fallback,w=s.mode,u=Hd({mode:"visible",children:u.children},w),d=wa(d,w,o,null),d.flags|=2,u.return=s,d.return=s,u.sibling=d,s.child=u,Wo(s,r.child,null,o),u=s.child,u.memoizedState=ap(o),u.childLanes=op(r,E,o),s.memoizedState=sp,s=d);else if(es(s),Hp(w)){if(E=w.nextSibling&&w.nextSibling.dataset,E)var z=E.dgst;E=z,u=Error(n(419)),u.stack="",u.digest=E,Uu({value:u,source:null,stack:null}),s=up(r,s,o)}else if(Yt||Bu(r,s,o,!1),E=(o&r.childLanes)!==0,Yt||E){if(E=st,E!==null&&(u=o&-o,u=(u&42)!==0?1:qr(u),u=(u&(E.suspendedLanes|o))!==0?0:u,u!==0&&u!==S.retryLane))throw S.retryLane=u,Uo(r,u),jn(E,r,u),NT;w.data==="$?"||Rp(),s=up(r,s,o)}else w.data==="$?"?(s.flags|=192,s.child=r.child,s=null):(r=S.treeContext,Tt=pi(w.nextSibling),Tn=s,Ge=!0,Aa=null,xi=!1,r!==null&&(ni[ii++]=gr,ni[ii++]=pr,ni[ii++]=ba,gr=r.id,pr=r.overflow,ba=s),s=lp(s,u.children),s.flags|=4096);return s}return d?(ts(),d=u.fallback,w=s.mode,S=r.child,z=S.sibling,u=mr(S,{mode:"hidden",children:u.children}),u.subtreeFlags=S.subtreeFlags&65011712,z!==null?d=mr(z,d):(d=wa(d,w,o,null),d.flags|=2),d.return=s,u.return=s,u.sibling=d,s.child=u,u=d,d=s.child,w=r.child.memoizedState,w===null?w=ap(o):(S=w.cachePool,S!==null?(z=Ft._currentValue,S=S.parent!==z?{parent:z,pool:z}:S):S=SE(),w={baseLanes:w.baseLanes|o,cachePool:S}),d.memoizedState=w,d.childLanes=op(r,E,o),s.memoizedState=sp,u):(es(s),o=r.child,r=o.sibling,o=mr(o,{mode:"visible",children:u.children}),o.return=s,o.sibling=null,r!==null&&(E=s.deletions,E===null?(s.deletions=[r],s.flags|=16):E.push(r)),s.child=o,s.memoizedState=null,o)}function lp(r,s){return s=Hd({mode:"visible",children:s},r.mode),s.return=r,r.child=s}function Hd(r,s){return r=Un(22,r,null,s),r.lanes=0,r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},r}function up(r,s,o){return Wo(s,r.child,null,o),r=lp(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function FT(r,s,o){r.lanes|=s;var u=r.alternate;u!==null&&(u.lanes|=s),Rg(r.return,s,o)}function cp(r,s,o,u,d){var g=r.memoizedState;g===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:d}:(g.isBackwards=s,g.rendering=null,g.renderingStartTime=0,g.last=u,g.tail=o,g.tailMode=d)}function qT(r,s,o){var u=s.pendingProps,d=u.revealOrder,g=u.tail;if(rn(r,s,u.children,o),u=qt.current,(u&2)!==0)u=u&1|2,s.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&FT(r,o,s);else if(r.tag===19)FT(r,o,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}u&=1}switch(ie(qt,u),d){case"forwards":for(o=s.child,d=null;o!==null;)r=o.alternate,r!==null&&zd(r)===null&&(d=o),o=o.sibling;o=d,o===null?(d=s.child,s.child=null):(d=o.sibling,o.sibling=null),cp(s,!1,d,o,g);break;case"backwards":for(o=null,d=s.child,s.child=null;d!==null;){if(r=d.alternate,r!==null&&zd(r)===null){s.child=d;break}r=d.sibling,d.sibling=o,o=d,d=r}cp(s,!0,o,null,g);break;case"together":cp(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Tr(r,s,o){if(r!==null&&(s.dependencies=r.dependencies),as|=s.lanes,(o&s.childLanes)===0)if(r!==null){if(Bu(r,s,o,!1),(o&s.childLanes)===0)return null}else return null;if(r!==null&&s.child!==r.child)throw Error(n(153));if(s.child!==null){for(r=s.child,o=mr(r,r.pendingProps),s.child=o,o.return=s;r.sibling!==null;)r=r.sibling,o=o.sibling=mr(r,r.pendingProps),o.return=s;o.sibling=null}return s.child}function hp(r,s){return(r.lanes&s)!==0?!0:(r=r.dependencies,!!(r!==null&&Id(r)))}function bC(r,s,o){switch(s.tag){case 3:rt(s,s.stateNode.containerInfo),Wr(s,Ft,r.memoizedState.cache),Lu();break;case 27:case 5:Fr(s);break;case 4:rt(s,s.stateNode.containerInfo);break;case 10:Wr(s,s.type,s.memoizedProps.value);break;case 13:var u=s.memoizedState;if(u!==null)return u.dehydrated!==null?(es(s),s.flags|=128,null):(o&s.child.childLanes)!==0?zT(r,s,o):(es(s),r=Tr(r,s,o),r!==null?r.sibling:null);es(s);break;case 19:var d=(r.flags&128)!==0;if(u=(o&s.childLanes)!==0,u||(Bu(r,s,o,!1),u=(o&s.childLanes)!==0),d){if(u)return qT(r,s,o);s.flags|=128}if(d=s.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),ie(qt,qt.current),u)break;return null;case 22:case 23:return s.lanes=0,kT(r,s,o);case 24:Wr(s,Ft,r.memoizedState.cache)}return Tr(r,s,o)}function jT(r,s,o){if(r!==null)if(r.memoizedProps!==s.pendingProps)Yt=!0;else{if(!hp(r,o)&&(s.flags&128)===0)return Yt=!1,bC(r,s,o);Yt=(r.flags&131072)!==0}else Yt=!1,Ge&&(s.flags&1048576)!==0&&vE(s,bd,s.index);switch(s.lanes=0,s.tag){case 16:e:{r=s.pendingProps;var u=s.elementType,d=u._init;if(u=d(u._payload),s.type=u,typeof u=="function")Eg(u)?(r=Na(u,r),s.tag=1,s=UT(null,s,u,r,o)):(s.tag=0,s=rp(null,s,u,r,o));else{if(u!=null){if(d=u.$$typeof,d===ve){s.tag=11,s=OT(null,s,u,r,o);break e}else if(d===N){s.tag=14,s=VT(null,s,u,r,o);break e}}throw s=en(u)||u,Error(n(306,s,""))}}return s;case 0:return rp(r,s,s.type,s.pendingProps,o);case 1:return u=s.type,d=Na(u,s.pendingProps),UT(r,s,u,d,o);case 3:e:{if(rt(s,s.stateNode.containerInfo),r===null)throw Error(n(387));u=s.pendingProps;var g=s.memoizedState;d=g.element,xg(r,s),Ku(s,u,null,o);var E=s.memoizedState;if(u=E.cache,Wr(s,Ft,u),u!==g.cache&&Cg(s,[Ft],o,!0),Gu(),u=E.element,g.isDehydrated)if(g={element:u,isDehydrated:!1,cache:E.cache},s.updateQueue.baseState=g,s.memoizedState=g,s.flags&256){s=BT(r,s,u,o);break e}else if(u!==d){d=ei(Error(n(424)),s),Uu(d),s=BT(r,s,u,o);break e}else{switch(r=s.stateNode.containerInfo,r.nodeType){case 9:r=r.body;break;default:r=r.nodeName==="HTML"?r.ownerDocument.body:r}for(Tt=pi(r.firstChild),Tn=s,Ge=!0,Aa=null,xi=!0,o=TT(s,null,u,o),s.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(Lu(),u===d){s=Tr(r,s,o);break e}rn(r,s,u,o)}s=s.child}return s;case 26:return jd(r,s),r===null?(o=Qw(s.type,null,s.pendingProps,null))?s.memoizedState=o:Ge||(o=s.type,r=s.pendingProps,u=sf(Se.current).createElement(o),u[Ut]=s,u[Ot]=r,an(u,o,r),St(u),s.stateNode=u):s.memoizedState=Qw(s.type,r.memoizedProps,s.pendingProps,r.memoizedState),null;case 27:return Fr(s),r===null&&Ge&&(u=s.stateNode=Hw(s.type,s.pendingProps,Se.current),Tn=s,xi=!0,d=Tt,cs(s.type)?(Gp=d,Tt=pi(u.firstChild)):Tt=d),rn(r,s,s.pendingProps.children,o),jd(r,s),r===null&&(s.flags|=4194304),s.child;case 5:return r===null&&Ge&&((d=u=Tt)&&(u=XC(u,s.type,s.pendingProps,xi),u!==null?(s.stateNode=u,Tn=s,Tt=pi(u.firstChild),xi=!1,d=!0):d=!1),d||Sa(s)),Fr(s),d=s.type,g=s.pendingProps,E=r!==null?r.memoizedProps:null,u=g.children,Fp(d,g)?u=null:E!==null&&Fp(d,E)&&(s.flags|=32),s.memoizedState!==null&&(d=zg(r,s,gC,null,null,o),mc._currentValue=d),jd(r,s),rn(r,s,u,o),s.child;case 6:return r===null&&Ge&&((r=o=Tt)&&(o=JC(o,s.pendingProps,xi),o!==null?(s.stateNode=o,Tn=s,Tt=null,r=!0):r=!1),r||Sa(s)),null;case 13:return zT(r,s,o);case 4:return rt(s,s.stateNode.containerInfo),u=s.pendingProps,r===null?s.child=Wo(s,null,u,o):rn(r,s,u,o),s.child;case 11:return OT(r,s,s.type,s.pendingProps,o);case 7:return rn(r,s,s.pendingProps,o),s.child;case 8:return rn(r,s,s.pendingProps.children,o),s.child;case 12:return rn(r,s,s.pendingProps.children,o),s.child;case 10:return u=s.pendingProps,Wr(s,s.type,u.value),rn(r,s,u.children,o),s.child;case 9:return d=s.type._context,u=s.pendingProps.children,Ca(s),d=dn(d),u=u(d),s.flags|=1,rn(r,s,u,o),s.child;case 14:return VT(r,s,s.type,s.pendingProps,o);case 15:return xT(r,s,s.type,s.pendingProps,o);case 19:return qT(r,s,o);case 31:return u=s.pendingProps,o=s.mode,u={mode:u.mode,children:u.children},r===null?(o=Hd(u,o),o.ref=s.ref,s.child=o,o.return=s,s=o):(o=mr(r.child,u),o.ref=s.ref,s.child=o,o.return=s,s=o),s;case 22:return kT(r,s,o);case 24:return Ca(s),u=dn(Ft),r===null?(d=Ng(),d===null&&(d=st,g=Dg(),d.pooledCache=g,g.refCount++,g!==null&&(d.pooledCacheLanes|=o),d=g),s.memoizedState={parent:u,cache:d},Vg(s),Wr(s,Ft,d)):((r.lanes&o)!==0&&(xg(r,s),Ku(s,null,null,o),Gu()),d=r.memoizedState,g=s.memoizedState,d.parent!==u?(d={parent:u,cache:u},s.memoizedState=d,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=d),Wr(s,Ft,u)):(u=g.cache,Wr(s,Ft,u),u!==d.cache&&Cg(s,[Ft],o,!0))),rn(r,s,s.pendingProps.children,o),s.child;case 29:throw s.pendingProps}throw Error(n(156,s.tag))}function wr(r){r.flags|=4}function HT(r,s){if(s.type!=="stylesheet"||(s.state.loading&4)!==0)r.flags&=-16777217;else if(r.flags|=16777216,!Jw(s)){if(s=ri.current,s!==null&&((ze&4194048)===ze?ki!==null:(ze&62914560)!==ze&&(ze&536870912)===0||s!==ki))throw ju=Og,RE;r.flags|=8192}}function Gd(r,s){s!==null&&(r.flags|=4),r.flags&16384&&(s=r.tag!==22?pu():536870912,r.lanes|=s,Zo|=s)}function Zu(r,s){if(!Ge)switch(r.tailMode){case"hidden":s=r.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?r.tail=null:o.sibling=null;break;case"collapsed":o=r.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:u.sibling=null}}function gt(r){var s=r.alternate!==null&&r.alternate.child===r.child,o=0,u=0;if(s)for(var d=r.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags&65011712,u|=d.flags&65011712,d.return=r,d=d.sibling;else for(d=r.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=r,d=d.sibling;return r.subtreeFlags|=u,r.childLanes=o,s}function IC(r,s,o){var u=s.pendingProps;switch(Ig(s),s.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return gt(s),null;case 1:return gt(s),null;case 3:return o=s.stateNode,u=null,r!==null&&(u=r.memoizedState.cache),s.memoizedState.cache!==u&&(s.flags|=2048),yr(Ft),wi(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(r===null||r.child===null)&&(Mu(s)?wr(s):r===null||r.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,wE())),gt(s),null;case 26:return o=s.memoizedState,r===null?(wr(s),o!==null?(gt(s),HT(s,o)):(gt(s),s.flags&=-16777217)):o?o!==r.memoizedState?(wr(s),gt(s),HT(s,o)):(gt(s),s.flags&=-16777217):(r.memoizedProps!==u&&wr(s),gt(s),s.flags&=-16777217),null;case 27:tr(s),o=Se.current;var d=s.type;if(r!==null&&s.stateNode!=null)r.memoizedProps!==u&&wr(s);else{if(!u){if(s.stateNode===null)throw Error(n(166));return gt(s),null}r=ye.current,Mu(s)?EE(s):(r=Hw(d,u,o),s.stateNode=r,wr(s))}return gt(s),null;case 5:if(tr(s),o=s.type,r!==null&&s.stateNode!=null)r.memoizedProps!==u&&wr(s);else{if(!u){if(s.stateNode===null)throw Error(n(166));return gt(s),null}if(r=ye.current,Mu(s))EE(s);else{switch(d=sf(Se.current),r){case 1:r=d.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:r=d.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":r=d.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":r=d.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":r=d.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof u.is=="string"?d.createElement("select",{is:u.is}):d.createElement("select"),u.multiple?r.multiple=!0:u.size&&(r.size=u.size);break;default:r=typeof u.is=="string"?d.createElement(o,{is:u.is}):d.createElement(o)}}r[Ut]=s,r[Ot]=u;e:for(d=s.child;d!==null;){if(d.tag===5||d.tag===6)r.appendChild(d.stateNode);else if(d.tag!==4&&d.tag!==27&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===s)break e;for(;d.sibling===null;){if(d.return===null||d.return===s)break e;d=d.return}d.sibling.return=d.return,d=d.sibling}s.stateNode=r;e:switch(an(r,o,u),o){case"button":case"input":case"select":case"textarea":r=!!u.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&wr(s)}}return gt(s),s.flags&=-16777217,null;case 6:if(r&&s.stateNode!=null)r.memoizedProps!==u&&wr(s);else{if(typeof u!="string"&&s.stateNode===null)throw Error(n(166));if(r=Se.current,Mu(s)){if(r=s.stateNode,o=s.memoizedProps,u=null,d=Tn,d!==null)switch(d.tag){case 27:case 5:u=d.memoizedProps}r[Ut]=s,r=!!(r.nodeValue===o||u!==null&&u.suppressHydrationWarning===!0||Lw(r.nodeValue,o)),r||Sa(s)}else r=sf(r).createTextNode(u),r[Ut]=s,s.stateNode=r}return gt(s),null;case 13:if(u=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(d=Mu(s),u!==null&&u.dehydrated!==null){if(r===null){if(!d)throw Error(n(318));if(d=s.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(n(317));d[Ut]=s}else Lu(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;gt(s),d=!1}else d=wE(),r!==null&&r.memoizedState!==null&&(r.memoizedState.hydrationErrors=d),d=!0;if(!d)return s.flags&256?(Er(s),s):(Er(s),null)}if(Er(s),(s.flags&128)!==0)return s.lanes=o,s;if(o=u!==null,r=r!==null&&r.memoizedState!==null,o){u=s.child,d=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(d=u.alternate.memoizedState.cachePool.pool);var g=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(g=u.memoizedState.cachePool.pool),g!==d&&(u.flags|=2048)}return o!==r&&o&&(s.child.flags|=8192),Gd(s,s.updateQueue),gt(s),null;case 4:return wi(),r===null&&Mp(s.stateNode.containerInfo),gt(s),null;case 10:return yr(s.type),gt(s),null;case 19:if(ue(qt),d=s.memoizedState,d===null)return gt(s),null;if(u=(s.flags&128)!==0,g=d.rendering,g===null)if(u)Zu(d,!1);else{if(wt!==0||r!==null&&(r.flags&128)!==0)for(r=s.child;r!==null;){if(g=zd(r),g!==null){for(s.flags|=128,Zu(d,!1),r=g.updateQueue,s.updateQueue=r,Gd(s,r),s.subtreeFlags=0,r=o,o=s.child;o!==null;)yE(o,r),o=o.sibling;return ie(qt,qt.current&1|2),s.child}r=r.sibling}d.tail!==null&&Yn()>Yd&&(s.flags|=128,u=!0,Zu(d,!1),s.lanes=4194304)}else{if(!u)if(r=zd(g),r!==null){if(s.flags|=128,u=!0,r=r.updateQueue,s.updateQueue=r,Gd(s,r),Zu(d,!0),d.tail===null&&d.tailMode==="hidden"&&!g.alternate&&!Ge)return gt(s),null}else 2*Yn()-d.renderingStartTime>Yd&&o!==536870912&&(s.flags|=128,u=!0,Zu(d,!1),s.lanes=4194304);d.isBackwards?(g.sibling=s.child,s.child=g):(r=d.last,r!==null?r.sibling=g:s.child=g,d.last=g)}return d.tail!==null?(s=d.tail,d.rendering=s,d.tail=s.sibling,d.renderingStartTime=Yn(),s.sibling=null,r=qt.current,ie(qt,u?r&1|2:r&1),s):(gt(s),null);case 22:case 23:return Er(s),Ug(),u=s.memoizedState!==null,r!==null?r.memoizedState!==null!==u&&(s.flags|=8192):u&&(s.flags|=8192),u?(o&536870912)!==0&&(s.flags&128)===0&&(gt(s),s.subtreeFlags&6&&(s.flags|=8192)):gt(s),o=s.updateQueue,o!==null&&Gd(s,o.retryQueue),o=null,r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),u=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(u=s.memoizedState.cachePool.pool),u!==o&&(s.flags|=2048),r!==null&&ue(Da),null;case 24:return o=null,r!==null&&(o=r.memoizedState.cache),s.memoizedState.cache!==o&&(s.flags|=2048),yr(Ft),gt(s),null;case 25:return null;case 30:return null}throw Error(n(156,s.tag))}function AC(r,s){switch(Ig(s),s.tag){case 1:return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return yr(Ft),wi(),r=s.flags,(r&65536)!==0&&(r&128)===0?(s.flags=r&-65537|128,s):null;case 26:case 27:case 5:return tr(s),null;case 13:if(Er(s),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(n(340));Lu()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return ue(qt),null;case 4:return wi(),null;case 10:return yr(s.type),null;case 22:case 23:return Er(s),Ug(),r!==null&&ue(Da),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 24:return yr(Ft),null;case 25:return null;default:return null}}function GT(r,s){switch(Ig(s),s.tag){case 3:yr(Ft),wi();break;case 26:case 27:case 5:tr(s);break;case 4:wi();break;case 13:Er(s);break;case 19:ue(qt);break;case 10:yr(s.type);break;case 22:case 23:Er(s),Ug(),r!==null&&ue(Da);break;case 24:yr(Ft)}}function ec(r,s){try{var o=s.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&r)===r){u=void 0;var g=o.create,E=o.inst;u=g(),E.destroy=u}o=o.next}while(o!==d)}}catch(w){it(s,s.return,w)}}function ns(r,s,o){try{var u=s.updateQueue,d=u!==null?u.lastEffect:null;if(d!==null){var g=d.next;u=g;do{if((u.tag&r)===r){var E=u.inst,w=E.destroy;if(w!==void 0){E.destroy=void 0,d=s;var S=o,z=w;try{z()}catch(Q){it(d,S,Q)}}}u=u.next}while(u!==g)}}catch(Q){it(s,s.return,Q)}}function KT(r){var s=r.updateQueue;if(s!==null){var o=r.stateNode;try{VE(s,o)}catch(u){it(r,r.return,u)}}}function QT(r,s,o){o.props=Na(r.type,r.memoizedProps),o.state=r.memoizedState;try{o.componentWillUnmount()}catch(u){it(r,s,u)}}function tc(r,s){try{var o=r.ref;if(o!==null){switch(r.tag){case 26:case 27:case 5:var u=r.stateNode;break;case 30:u=r.stateNode;break;default:u=r.stateNode}typeof o=="function"?r.refCleanup=o(u):o.current=u}}catch(d){it(r,s,d)}}function Mi(r,s){var o=r.ref,u=r.refCleanup;if(o!==null)if(typeof u=="function")try{u()}catch(d){it(r,s,d)}finally{r.refCleanup=null,r=r.alternate,r!=null&&(r.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(d){it(r,s,d)}else o.current=null}function YT(r){var s=r.type,o=r.memoizedProps,u=r.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":o.autoFocus&&u.focus();break e;case"img":o.src?u.src=o.src:o.srcSet&&(u.srcset=o.srcSet)}}catch(d){it(r,r.return,d)}}function dp(r,s,o){try{var u=r.stateNode;KC(u,r.type,o,s),u[Ot]=s}catch(d){it(r,r.return,d)}}function WT(r){return r.tag===5||r.tag===3||r.tag===26||r.tag===27&&cs(r.type)||r.tag===4}function fp(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||WT(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.tag===27&&cs(r.type)||r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function mp(r,s,o){var u=r.tag;if(u===5||u===6)r=r.stateNode,s?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(r,s):(s=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,s.appendChild(r),o=o._reactRootContainer,o!=null||s.onclick!==null||(s.onclick=rf));else if(u!==4&&(u===27&&cs(r.type)&&(o=r.stateNode,s=null),r=r.child,r!==null))for(mp(r,s,o),r=r.sibling;r!==null;)mp(r,s,o),r=r.sibling}function Kd(r,s,o){var u=r.tag;if(u===5||u===6)r=r.stateNode,s?o.insertBefore(r,s):o.appendChild(r);else if(u!==4&&(u===27&&cs(r.type)&&(o=r.stateNode),r=r.child,r!==null))for(Kd(r,s,o),r=r.sibling;r!==null;)Kd(r,s,o),r=r.sibling}function $T(r){var s=r.stateNode,o=r.memoizedProps;try{for(var u=r.type,d=s.attributes;d.length;)s.removeAttributeNode(d[0]);an(s,u,o),s[Ut]=r,s[Ot]=o}catch(g){it(r,r.return,g)}}var br=!1,Ct=!1,gp=!1,XT=typeof WeakSet=="function"?WeakSet:Set,Wt=null;function SC(r,s){if(r=r.containerInfo,Bp=hf,r=lE(r),fg(r)){if("selectionStart"in r)var o={start:r.selectionStart,end:r.selectionEnd};else e:{o=(o=r.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var d=u.anchorOffset,g=u.focusNode;u=u.focusOffset;try{o.nodeType,g.nodeType}catch{o=null;break e}var E=0,w=-1,S=-1,z=0,Q=0,X=r,F=null;t:for(;;){for(var q;X!==o||d!==0&&X.nodeType!==3||(w=E+d),X!==g||u!==0&&X.nodeType!==3||(S=E+u),X.nodeType===3&&(E+=X.nodeValue.length),(q=X.firstChild)!==null;)F=X,X=q;for(;;){if(X===r)break t;if(F===o&&++z===d&&(w=E),F===g&&++Q===u&&(S=E),(q=X.nextSibling)!==null)break;X=F,F=X.parentNode}X=q}o=w===-1||S===-1?null:{start:w,end:S}}else o=null}o=o||{start:0,end:0}}else o=null;for(zp={focusedElem:r,selectionRange:o},hf=!1,Wt=s;Wt!==null;)if(s=Wt,r=s.child,(s.subtreeFlags&1024)!==0&&r!==null)r.return=s,Wt=r;else for(;Wt!==null;){switch(s=Wt,g=s.alternate,r=s.flags,s.tag){case 0:break;case 11:case 15:break;case 1:if((r&1024)!==0&&g!==null){r=void 0,o=s,d=g.memoizedProps,g=g.memoizedState,u=o.stateNode;try{var Ae=Na(o.type,d,o.elementType===o.type);r=u.getSnapshotBeforeUpdate(Ae,g),u.__reactInternalSnapshotBeforeUpdate=r}catch(we){it(o,o.return,we)}}break;case 3:if((r&1024)!==0){if(r=s.stateNode.containerInfo,o=r.nodeType,o===9)jp(r);else if(o===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":jp(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((r&1024)!==0)throw Error(n(163))}if(r=s.sibling,r!==null){r.return=s.return,Wt=r;break}Wt=s.return}}function JT(r,s,o){var u=o.flags;switch(o.tag){case 0:case 11:case 15:is(r,o),u&4&&ec(5,o);break;case 1:if(is(r,o),u&4)if(r=o.stateNode,s===null)try{r.componentDidMount()}catch(E){it(o,o.return,E)}else{var d=Na(o.type,s.memoizedProps);s=s.memoizedState;try{r.componentDidUpdate(d,s,r.__reactInternalSnapshotBeforeUpdate)}catch(E){it(o,o.return,E)}}u&64&&KT(o),u&512&&tc(o,o.return);break;case 3:if(is(r,o),u&64&&(r=o.updateQueue,r!==null)){if(s=null,o.child!==null)switch(o.child.tag){case 27:case 5:s=o.child.stateNode;break;case 1:s=o.child.stateNode}try{VE(r,s)}catch(E){it(o,o.return,E)}}break;case 27:s===null&&u&4&&$T(o);case 26:case 5:is(r,o),s===null&&u&4&&YT(o),u&512&&tc(o,o.return);break;case 12:is(r,o);break;case 13:is(r,o),u&4&&tw(r,o),u&64&&(r=o.memoizedState,r!==null&&(r=r.dehydrated,r!==null&&(o=kC.bind(null,o),ZC(r,o))));break;case 22:if(u=o.memoizedState!==null||br,!u){s=s!==null&&s.memoizedState!==null||Ct,d=br;var g=Ct;br=u,(Ct=s)&&!g?rs(r,o,(o.subtreeFlags&8772)!==0):is(r,o),br=d,Ct=g}break;case 30:break;default:is(r,o)}}function ZT(r){var s=r.alternate;s!==null&&(r.alternate=null,ZT(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&Gr(s)),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}var ut=null,Cn=!1;function Ir(r,s,o){for(o=o.child;o!==null;)ew(r,s,o),o=o.sibling}function ew(r,s,o){if(Qe&&typeof Qe.onCommitFiberUnmount=="function")try{Qe.onCommitFiberUnmount(Et,o)}catch{}switch(o.tag){case 26:Ct||Mi(o,s),Ir(r,s,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:Ct||Mi(o,s);var u=ut,d=Cn;cs(o.type)&&(ut=o.stateNode,Cn=!1),Ir(r,s,o),cc(o.stateNode),ut=u,Cn=d;break;case 5:Ct||Mi(o,s);case 6:if(u=ut,d=Cn,ut=null,Ir(r,s,o),ut=u,Cn=d,ut!==null)if(Cn)try{(ut.nodeType===9?ut.body:ut.nodeName==="HTML"?ut.ownerDocument.body:ut).removeChild(o.stateNode)}catch(g){it(o,s,g)}else try{ut.removeChild(o.stateNode)}catch(g){it(o,s,g)}break;case 18:ut!==null&&(Cn?(r=ut,qw(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,o.stateNode),yc(r)):qw(ut,o.stateNode));break;case 4:u=ut,d=Cn,ut=o.stateNode.containerInfo,Cn=!0,Ir(r,s,o),ut=u,Cn=d;break;case 0:case 11:case 14:case 15:Ct||ns(2,o,s),Ct||ns(4,o,s),Ir(r,s,o);break;case 1:Ct||(Mi(o,s),u=o.stateNode,typeof u.componentWillUnmount=="function"&&QT(o,s,u)),Ir(r,s,o);break;case 21:Ir(r,s,o);break;case 22:Ct=(u=Ct)||o.memoizedState!==null,Ir(r,s,o),Ct=u;break;default:Ir(r,s,o)}}function tw(r,s){if(s.memoizedState===null&&(r=s.alternate,r!==null&&(r=r.memoizedState,r!==null&&(r=r.dehydrated,r!==null))))try{yc(r)}catch(o){it(s,s.return,o)}}function RC(r){switch(r.tag){case 13:case 19:var s=r.stateNode;return s===null&&(s=r.stateNode=new XT),s;case 22:return r=r.stateNode,s=r._retryCache,s===null&&(s=r._retryCache=new XT),s;default:throw Error(n(435,r.tag))}}function pp(r,s){var o=RC(r);s.forEach(function(u){var d=MC.bind(null,r,u);o.has(u)||(o.add(u),u.then(d,d))})}function Bn(r,s){var o=s.deletions;if(o!==null)for(var u=0;u<o.length;u++){var d=o[u],g=r,E=s,w=E;e:for(;w!==null;){switch(w.tag){case 27:if(cs(w.type)){ut=w.stateNode,Cn=!1;break e}break;case 5:ut=w.stateNode,Cn=!1;break e;case 3:case 4:ut=w.stateNode.containerInfo,Cn=!0;break e}w=w.return}if(ut===null)throw Error(n(160));ew(g,E,d),ut=null,Cn=!1,g=d.alternate,g!==null&&(g.return=null),d.return=null}if(s.subtreeFlags&13878)for(s=s.child;s!==null;)nw(s,r),s=s.sibling}var gi=null;function nw(r,s){var o=r.alternate,u=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:Bn(s,r),zn(r),u&4&&(ns(3,r,r.return),ec(3,r),ns(5,r,r.return));break;case 1:Bn(s,r),zn(r),u&512&&(Ct||o===null||Mi(o,o.return)),u&64&&br&&(r=r.updateQueue,r!==null&&(u=r.callbacks,u!==null&&(o=r.shared.hiddenCallbacks,r.shared.hiddenCallbacks=o===null?u:o.concat(u))));break;case 26:var d=gi;if(Bn(s,r),zn(r),u&512&&(Ct||o===null||Mi(o,o.return)),u&4){var g=o!==null?o.memoizedState:null;if(u=r.memoizedState,o===null)if(u===null)if(r.stateNode===null){e:{u=r.type,o=r.memoizedProps,d=d.ownerDocument||d;t:switch(u){case"title":g=d.getElementsByTagName("title")[0],(!g||g[aa]||g[Ut]||g.namespaceURI==="http://www.w3.org/2000/svg"||g.hasAttribute("itemprop"))&&(g=d.createElement(u),d.head.insertBefore(g,d.querySelector("head > title"))),an(g,u,o),g[Ut]=r,St(g),u=g;break e;case"link":var E=$w("link","href",d).get(u+(o.href||""));if(E){for(var w=0;w<E.length;w++)if(g=E[w],g.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&g.getAttribute("rel")===(o.rel==null?null:o.rel)&&g.getAttribute("title")===(o.title==null?null:o.title)&&g.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){E.splice(w,1);break t}}g=d.createElement(u),an(g,u,o),d.head.appendChild(g);break;case"meta":if(E=$w("meta","content",d).get(u+(o.content||""))){for(w=0;w<E.length;w++)if(g=E[w],g.getAttribute("content")===(o.content==null?null:""+o.content)&&g.getAttribute("name")===(o.name==null?null:o.name)&&g.getAttribute("property")===(o.property==null?null:o.property)&&g.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&g.getAttribute("charset")===(o.charSet==null?null:o.charSet)){E.splice(w,1);break t}}g=d.createElement(u),an(g,u,o),d.head.appendChild(g);break;default:throw Error(n(468,u))}g[Ut]=r,St(g),u=g}r.stateNode=u}else Xw(d,r.type,r.stateNode);else r.stateNode=Ww(d,u,r.memoizedProps);else g!==u?(g===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):g.count--,u===null?Xw(d,r.type,r.stateNode):Ww(d,u,r.memoizedProps)):u===null&&r.stateNode!==null&&dp(r,r.memoizedProps,o.memoizedProps)}break;case 27:Bn(s,r),zn(r),u&512&&(Ct||o===null||Mi(o,o.return)),o!==null&&u&4&&dp(r,r.memoizedProps,o.memoizedProps);break;case 5:if(Bn(s,r),zn(r),u&512&&(Ct||o===null||Mi(o,o.return)),r.flags&32){d=r.stateNode;try{$n(d,"")}catch(q){it(r,r.return,q)}}u&4&&r.stateNode!=null&&(d=r.memoizedProps,dp(r,d,o!==null?o.memoizedProps:d)),u&1024&&(gp=!0);break;case 6:if(Bn(s,r),zn(r),u&4){if(r.stateNode===null)throw Error(n(162));u=r.memoizedProps,o=r.stateNode;try{o.nodeValue=u}catch(q){it(r,r.return,q)}}break;case 3:if(lf=null,d=gi,gi=af(s.containerInfo),Bn(s,r),gi=d,zn(r),u&4&&o!==null&&o.memoizedState.isDehydrated)try{yc(s.containerInfo)}catch(q){it(r,r.return,q)}gp&&(gp=!1,iw(r));break;case 4:u=gi,gi=af(r.stateNode.containerInfo),Bn(s,r),zn(r),gi=u;break;case 12:Bn(s,r),zn(r);break;case 13:Bn(s,r),zn(r),r.child.flags&8192&&r.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(wp=Yn()),u&4&&(u=r.updateQueue,u!==null&&(r.updateQueue=null,pp(r,u)));break;case 22:d=r.memoizedState!==null;var S=o!==null&&o.memoizedState!==null,z=br,Q=Ct;if(br=z||d,Ct=Q||S,Bn(s,r),Ct=Q,br=z,zn(r),u&8192)e:for(s=r.stateNode,s._visibility=d?s._visibility&-2:s._visibility|1,d&&(o===null||S||br||Ct||Oa(r)),o=null,s=r;;){if(s.tag===5||s.tag===26){if(o===null){S=o=s;try{if(g=S.stateNode,d)E=g.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{w=S.stateNode;var X=S.memoizedProps.style,F=X!=null&&X.hasOwnProperty("display")?X.display:null;w.style.display=F==null||typeof F=="boolean"?"":(""+F).trim()}}catch(q){it(S,S.return,q)}}}else if(s.tag===6){if(o===null){S=s;try{S.stateNode.nodeValue=d?"":S.memoizedProps}catch(q){it(S,S.return,q)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===r)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break e;for(;s.sibling===null;){if(s.return===null||s.return===r)break e;o===s&&(o=null),s=s.return}o===s&&(o=null),s.sibling.return=s.return,s=s.sibling}u&4&&(u=r.updateQueue,u!==null&&(o=u.retryQueue,o!==null&&(u.retryQueue=null,pp(r,o))));break;case 19:Bn(s,r),zn(r),u&4&&(u=r.updateQueue,u!==null&&(r.updateQueue=null,pp(r,u)));break;case 30:break;case 21:break;default:Bn(s,r),zn(r)}}function zn(r){var s=r.flags;if(s&2){try{for(var o,u=r.return;u!==null;){if(WT(u)){o=u;break}u=u.return}if(o==null)throw Error(n(160));switch(o.tag){case 27:var d=o.stateNode,g=fp(r);Kd(r,g,d);break;case 5:var E=o.stateNode;o.flags&32&&($n(E,""),o.flags&=-33);var w=fp(r);Kd(r,w,E);break;case 3:case 4:var S=o.stateNode.containerInfo,z=fp(r);mp(r,z,S);break;default:throw Error(n(161))}}catch(Q){it(r,r.return,Q)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function iw(r){if(r.subtreeFlags&1024)for(r=r.child;r!==null;){var s=r;iw(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),r=r.sibling}}function is(r,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)JT(r,s.alternate,s),s=s.sibling}function Oa(r){for(r=r.child;r!==null;){var s=r;switch(s.tag){case 0:case 11:case 14:case 15:ns(4,s,s.return),Oa(s);break;case 1:Mi(s,s.return);var o=s.stateNode;typeof o.componentWillUnmount=="function"&&QT(s,s.return,o),Oa(s);break;case 27:cc(s.stateNode);case 26:case 5:Mi(s,s.return),Oa(s);break;case 22:s.memoizedState===null&&Oa(s);break;case 30:Oa(s);break;default:Oa(s)}r=r.sibling}}function rs(r,s,o){for(o=o&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var u=s.alternate,d=r,g=s,E=g.flags;switch(g.tag){case 0:case 11:case 15:rs(d,g,o),ec(4,g);break;case 1:if(rs(d,g,o),u=g,d=u.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(z){it(u,u.return,z)}if(u=g,d=u.updateQueue,d!==null){var w=u.stateNode;try{var S=d.shared.hiddenCallbacks;if(S!==null)for(d.shared.hiddenCallbacks=null,d=0;d<S.length;d++)OE(S[d],w)}catch(z){it(u,u.return,z)}}o&&E&64&&KT(g),tc(g,g.return);break;case 27:$T(g);case 26:case 5:rs(d,g,o),o&&u===null&&E&4&&YT(g),tc(g,g.return);break;case 12:rs(d,g,o);break;case 13:rs(d,g,o),o&&E&4&&tw(d,g);break;case 22:g.memoizedState===null&&rs(d,g,o),tc(g,g.return);break;case 30:break;default:rs(d,g,o)}s=s.sibling}}function _p(r,s){var o=null;r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),r=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(r=s.memoizedState.cachePool.pool),r!==o&&(r!=null&&r.refCount++,o!=null&&zu(o))}function yp(r,s){r=null,s.alternate!==null&&(r=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==r&&(s.refCount++,r!=null&&zu(r))}function Li(r,s,o,u){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)rw(r,s,o,u),s=s.sibling}function rw(r,s,o,u){var d=s.flags;switch(s.tag){case 0:case 11:case 15:Li(r,s,o,u),d&2048&&ec(9,s);break;case 1:Li(r,s,o,u);break;case 3:Li(r,s,o,u),d&2048&&(r=null,s.alternate!==null&&(r=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==r&&(s.refCount++,r!=null&&zu(r)));break;case 12:if(d&2048){Li(r,s,o,u),r=s.stateNode;try{var g=s.memoizedProps,E=g.id,w=g.onPostCommit;typeof w=="function"&&w(E,s.alternate===null?"mount":"update",r.passiveEffectDuration,-0)}catch(S){it(s,s.return,S)}}else Li(r,s,o,u);break;case 13:Li(r,s,o,u);break;case 23:break;case 22:g=s.stateNode,E=s.alternate,s.memoizedState!==null?g._visibility&2?Li(r,s,o,u):nc(r,s):g._visibility&2?Li(r,s,o,u):(g._visibility|=2,$o(r,s,o,u,(s.subtreeFlags&10256)!==0)),d&2048&&_p(E,s);break;case 24:Li(r,s,o,u),d&2048&&yp(s.alternate,s);break;default:Li(r,s,o,u)}}function $o(r,s,o,u,d){for(d=d&&(s.subtreeFlags&10256)!==0,s=s.child;s!==null;){var g=r,E=s,w=o,S=u,z=E.flags;switch(E.tag){case 0:case 11:case 15:$o(g,E,w,S,d),ec(8,E);break;case 23:break;case 22:var Q=E.stateNode;E.memoizedState!==null?Q._visibility&2?$o(g,E,w,S,d):nc(g,E):(Q._visibility|=2,$o(g,E,w,S,d)),d&&z&2048&&_p(E.alternate,E);break;case 24:$o(g,E,w,S,d),d&&z&2048&&yp(E.alternate,E);break;default:$o(g,E,w,S,d)}s=s.sibling}}function nc(r,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var o=r,u=s,d=u.flags;switch(u.tag){case 22:nc(o,u),d&2048&&_p(u.alternate,u);break;case 24:nc(o,u),d&2048&&yp(u.alternate,u);break;default:nc(o,u)}s=s.sibling}}var ic=8192;function Xo(r){if(r.subtreeFlags&ic)for(r=r.child;r!==null;)sw(r),r=r.sibling}function sw(r){switch(r.tag){case 26:Xo(r),r.flags&ic&&r.memoizedState!==null&&dD(gi,r.memoizedState,r.memoizedProps);break;case 5:Xo(r);break;case 3:case 4:var s=gi;gi=af(r.stateNode.containerInfo),Xo(r),gi=s;break;case 22:r.memoizedState===null&&(s=r.alternate,s!==null&&s.memoizedState!==null?(s=ic,ic=16777216,Xo(r),ic=s):Xo(r));break;default:Xo(r)}}function aw(r){var s=r.alternate;if(s!==null&&(r=s.child,r!==null)){s.child=null;do s=r.sibling,r.sibling=null,r=s;while(r!==null)}}function rc(r){var s=r.deletions;if((r.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var u=s[o];Wt=u,lw(u,r)}aw(r)}if(r.subtreeFlags&10256)for(r=r.child;r!==null;)ow(r),r=r.sibling}function ow(r){switch(r.tag){case 0:case 11:case 15:rc(r),r.flags&2048&&ns(9,r,r.return);break;case 3:rc(r);break;case 12:rc(r);break;case 22:var s=r.stateNode;r.memoizedState!==null&&s._visibility&2&&(r.return===null||r.return.tag!==13)?(s._visibility&=-3,Qd(r)):rc(r);break;default:rc(r)}}function Qd(r){var s=r.deletions;if((r.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var u=s[o];Wt=u,lw(u,r)}aw(r)}for(r=r.child;r!==null;){switch(s=r,s.tag){case 0:case 11:case 15:ns(8,s,s.return),Qd(s);break;case 22:o=s.stateNode,o._visibility&2&&(o._visibility&=-3,Qd(s));break;default:Qd(s)}r=r.sibling}}function lw(r,s){for(;Wt!==null;){var o=Wt;switch(o.tag){case 0:case 11:case 15:ns(8,o,s);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var u=o.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:zu(o.memoizedState.cache)}if(u=o.child,u!==null)u.return=o,Wt=u;else e:for(o=r;Wt!==null;){u=Wt;var d=u.sibling,g=u.return;if(ZT(u),u===o){Wt=null;break e}if(d!==null){d.return=g,Wt=d;break e}Wt=g}}}var CC={getCacheForType:function(r){var s=dn(Ft),o=s.data.get(r);return o===void 0&&(o=r(),s.data.set(r,o)),o}},DC=typeof WeakMap=="function"?WeakMap:Map,Ye=0,st=null,Ve=null,ze=0,We=0,Fn=null,ss=!1,Jo=!1,vp=!1,Ar=0,wt=0,as=0,Va=0,Ep=0,si=0,Zo=0,sc=null,Dn=null,Tp=!1,wp=0,Yd=1/0,Wd=null,os=null,sn=0,ls=null,el=null,tl=0,bp=0,Ip=null,uw=null,ac=0,Ap=null;function qn(){if((Ye&2)!==0&&ze!==0)return ze&-ze;if(K.T!==null){var r=qo;return r!==0?r:Op()}return jr()}function cw(){si===0&&(si=(ze&536870912)===0||Ge?gu():536870912);var r=ri.current;return r!==null&&(r.flags|=32),si}function jn(r,s,o){(r===st&&(We===2||We===9)||r.cancelPendingCommit!==null)&&(nl(r,0),us(r,ze,si,!1)),ir(r,o),((Ye&2)===0||r!==st)&&(r===st&&((Ye&2)===0&&(Va|=o),wt===4&&us(r,ze,si,!1)),Ui(r))}function hw(r,s,o){if((Ye&6)!==0)throw Error(n(327));var u=!o&&(s&124)===0&&(s&r.expiredLanes)===0||sa(r,s),d=u?OC(r,s):Cp(r,s,!0),g=u;do{if(d===0){Jo&&!u&&us(r,s,0,!1);break}else{if(o=r.current.alternate,g&&!PC(o)){d=Cp(r,s,!1),g=!1;continue}if(d===2){if(g=s,r.errorRecoveryDisabledLanes&g)var E=0;else E=r.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){s=E;e:{var w=r;d=sc;var S=w.current.memoizedState.isDehydrated;if(S&&(nl(w,E).flags|=256),E=Cp(w,E,!1),E!==2){if(vp&&!S){w.errorRecoveryDisabledLanes|=g,Va|=g,d=4;break e}g=Dn,Dn=d,g!==null&&(Dn===null?Dn=g:Dn.push.apply(Dn,g))}d=E}if(g=!1,d!==2)continue}}if(d===1){nl(r,0),us(r,s,0,!0);break}e:{switch(u=r,g=d,g){case 0:case 1:throw Error(n(345));case 4:if((s&4194048)!==s)break;case 6:us(u,s,si,!ss);break e;case 2:Dn=null;break;case 3:case 5:break;default:throw Error(n(329))}if((s&62914560)===s&&(d=wp+300-Yn(),10<d)){if(us(u,s,si,!ss),vo(u,0,!0)!==0)break e;u.timeoutHandle=zw(dw.bind(null,u,o,Dn,Wd,Tp,s,si,Va,Zo,ss,g,2,-0,0),d);break e}dw(u,o,Dn,Wd,Tp,s,si,Va,Zo,ss,g,0,-0,0)}}break}while(!0);Ui(r)}function dw(r,s,o,u,d,g,E,w,S,z,Q,X,F,q){if(r.timeoutHandle=-1,X=s.subtreeFlags,(X&8192||(X&16785408)===16785408)&&(fc={stylesheets:null,count:0,unsuspend:hD},sw(s),X=fD(),X!==null)){r.cancelPendingCommit=X(vw.bind(null,r,s,g,o,u,d,E,w,S,Q,1,F,q)),us(r,g,E,!z);return}vw(r,s,g,o,u,d,E,w,S)}function PC(r){for(var s=r;;){var o=s.tag;if((o===0||o===11||o===15)&&s.flags&16384&&(o=s.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var u=0;u<o.length;u++){var d=o[u],g=d.getSnapshot;d=d.value;try{if(!Ln(g(),d))return!1}catch{return!1}}if(o=s.child,s.subtreeFlags&16384&&o!==null)o.return=s,s=o;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function us(r,s,o,u){s&=~Ep,s&=~Va,r.suspendedLanes|=s,r.pingedLanes&=~s,u&&(r.warmLanes|=s),u=r.expirationTimes;for(var d=s;0<d;){var g=31-hn(d),E=1<<g;u[g]=-1,d&=~E}o!==0&&bi(r,o,s)}function $d(){return(Ye&6)===0?(oc(0),!1):!0}function Sp(){if(Ve!==null){if(We===0)var r=Ve.return;else r=Ve,_r=Ra=null,jg(r),Yo=null,Xu=0,r=Ve;for(;r!==null;)GT(r.alternate,r),r=r.return;Ve=null}}function nl(r,s){var o=r.timeoutHandle;o!==-1&&(r.timeoutHandle=-1,YC(o)),o=r.cancelPendingCommit,o!==null&&(r.cancelPendingCommit=null,o()),Sp(),st=r,Ve=o=mr(r.current,null),ze=s,We=0,Fn=null,ss=!1,Jo=sa(r,s),vp=!1,Zo=si=Ep=Va=as=wt=0,Dn=sc=null,Tp=!1,(s&8)!==0&&(s|=s&32);var u=r.entangledLanes;if(u!==0)for(r=r.entanglements,u&=s;0<u;){var d=31-hn(u),g=1<<d;s|=r[d],u&=~g}return Ar=s,yd(),o}function fw(r,s){Pe=null,K.H=Ld,s===qu||s===Rd?(s=PE(),We=3):s===RE?(s=PE(),We=4):We=s===NT?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,Fn=s,Ve===null&&(wt=1,qd(r,ei(s,r.current)))}function mw(){var r=K.H;return K.H=Ld,r===null?Ld:r}function gw(){var r=K.A;return K.A=CC,r}function Rp(){wt=4,ss||(ze&4194048)!==ze&&ri.current!==null||(Jo=!0),(as&134217727)===0&&(Va&134217727)===0||st===null||us(st,ze,si,!1)}function Cp(r,s,o){var u=Ye;Ye|=2;var d=mw(),g=gw();(st!==r||ze!==s)&&(Wd=null,nl(r,s)),s=!1;var E=wt;e:do try{if(We!==0&&Ve!==null){var w=Ve,S=Fn;switch(We){case 8:Sp(),E=6;break e;case 3:case 2:case 9:case 6:ri.current===null&&(s=!0);var z=We;if(We=0,Fn=null,il(r,w,S,z),o&&Jo){E=0;break e}break;default:z=We,We=0,Fn=null,il(r,w,S,z)}}NC(),E=wt;break}catch(Q){fw(r,Q)}while(!0);return s&&r.shellSuspendCounter++,_r=Ra=null,Ye=u,K.H=d,K.A=g,Ve===null&&(st=null,ze=0,yd()),E}function NC(){for(;Ve!==null;)pw(Ve)}function OC(r,s){var o=Ye;Ye|=2;var u=mw(),d=gw();st!==r||ze!==s?(Wd=null,Yd=Yn()+500,nl(r,s)):Jo=sa(r,s);e:do try{if(We!==0&&Ve!==null){s=Ve;var g=Fn;t:switch(We){case 1:We=0,Fn=null,il(r,s,g,1);break;case 2:case 9:if(CE(g)){We=0,Fn=null,_w(s);break}s=function(){We!==2&&We!==9||st!==r||(We=7),Ui(r)},g.then(s,s);break e;case 3:We=7;break e;case 4:We=5;break e;case 7:CE(g)?(We=0,Fn=null,_w(s)):(We=0,Fn=null,il(r,s,g,7));break;case 5:var E=null;switch(Ve.tag){case 26:E=Ve.memoizedState;case 5:case 27:var w=Ve;if(!E||Jw(E)){We=0,Fn=null;var S=w.sibling;if(S!==null)Ve=S;else{var z=w.return;z!==null?(Ve=z,Xd(z)):Ve=null}break t}}We=0,Fn=null,il(r,s,g,5);break;case 6:We=0,Fn=null,il(r,s,g,6);break;case 8:Sp(),wt=6;break e;default:throw Error(n(462))}}VC();break}catch(Q){fw(r,Q)}while(!0);return _r=Ra=null,K.H=u,K.A=d,Ye=o,Ve!==null?0:(st=null,ze=0,yd(),wt)}function VC(){for(;Ve!==null&&!hu();)pw(Ve)}function pw(r){var s=jT(r.alternate,r,Ar);r.memoizedProps=r.pendingProps,s===null?Xd(r):Ve=s}function _w(r){var s=r,o=s.alternate;switch(s.tag){case 15:case 0:s=LT(o,s,s.pendingProps,s.type,void 0,ze);break;case 11:s=LT(o,s,s.pendingProps,s.type.render,s.ref,ze);break;case 5:jg(s);default:GT(o,s),s=Ve=yE(s,Ar),s=jT(o,s,Ar)}r.memoizedProps=r.pendingProps,s===null?Xd(r):Ve=s}function il(r,s,o,u){_r=Ra=null,jg(s),Yo=null,Xu=0;var d=s.return;try{if(wC(r,d,s,o,ze)){wt=1,qd(r,ei(o,r.current)),Ve=null;return}}catch(g){if(d!==null)throw Ve=d,g;wt=1,qd(r,ei(o,r.current)),Ve=null;return}s.flags&32768?(Ge||u===1?r=!0:Jo||(ze&536870912)!==0?r=!1:(ss=r=!0,(u===2||u===9||u===3||u===6)&&(u=ri.current,u!==null&&u.tag===13&&(u.flags|=16384))),yw(s,r)):Xd(s)}function Xd(r){var s=r;do{if((s.flags&32768)!==0){yw(s,ss);return}r=s.return;var o=IC(s.alternate,s,Ar);if(o!==null){Ve=o;return}if(s=s.sibling,s!==null){Ve=s;return}Ve=s=r}while(s!==null);wt===0&&(wt=5)}function yw(r,s){do{var o=AC(r.alternate,r);if(o!==null){o.flags&=32767,Ve=o;return}if(o=r.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!s&&(r=r.sibling,r!==null)){Ve=r;return}Ve=r=o}while(r!==null);wt=6,Ve=null}function vw(r,s,o,u,d,g,E,w,S){r.cancelPendingCommit=null;do Jd();while(sn!==0);if((Ye&6)!==0)throw Error(n(327));if(s!==null){if(s===r.current)throw Error(n(177));if(g=s.lanes|s.childLanes,g|=yg,_u(r,o,g,E,w,S),r===st&&(Ve=st=null,ze=0),el=s,ls=r,tl=o,bp=g,Ip=d,uw=u,(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?(r.callbackNode=null,r.callbackPriority=0,LC(ta,function(){return Iw(),null})):(r.callbackNode=null,r.callbackPriority=0),u=(s.flags&13878)!==0,(s.subtreeFlags&13878)!==0||u){u=K.T,K.T=null,d=oe.p,oe.p=2,E=Ye,Ye|=4;try{SC(r,s,o)}finally{Ye=E,oe.p=d,K.T=u}}sn=1,Ew(),Tw(),ww()}}function Ew(){if(sn===1){sn=0;var r=ls,s=el,o=(s.flags&13878)!==0;if((s.subtreeFlags&13878)!==0||o){o=K.T,K.T=null;var u=oe.p;oe.p=2;var d=Ye;Ye|=4;try{nw(s,r);var g=zp,E=lE(r.containerInfo),w=g.focusedElem,S=g.selectionRange;if(E!==w&&w&&w.ownerDocument&&oE(w.ownerDocument.documentElement,w)){if(S!==null&&fg(w)){var z=S.start,Q=S.end;if(Q===void 0&&(Q=z),"selectionStart"in w)w.selectionStart=z,w.selectionEnd=Math.min(Q,w.value.length);else{var X=w.ownerDocument||document,F=X&&X.defaultView||window;if(F.getSelection){var q=F.getSelection(),Ae=w.textContent.length,we=Math.min(S.start,Ae),nt=S.end===void 0?we:Math.min(S.end,Ae);!q.extend&&we>nt&&(E=nt,nt=we,we=E);var k=aE(w,we),P=aE(w,nt);if(k&&P&&(q.rangeCount!==1||q.anchorNode!==k.node||q.anchorOffset!==k.offset||q.focusNode!==P.node||q.focusOffset!==P.offset)){var B=X.createRange();B.setStart(k.node,k.offset),q.removeAllRanges(),we>nt?(q.addRange(B),q.extend(P.node,P.offset)):(B.setEnd(P.node,P.offset),q.addRange(B))}}}}for(X=[],q=w;q=q.parentNode;)q.nodeType===1&&X.push({element:q,left:q.scrollLeft,top:q.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<X.length;w++){var W=X[w];W.element.scrollLeft=W.left,W.element.scrollTop=W.top}}hf=!!Bp,zp=Bp=null}finally{Ye=d,oe.p=u,K.T=o}}r.current=s,sn=2}}function Tw(){if(sn===2){sn=0;var r=ls,s=el,o=(s.flags&8772)!==0;if((s.subtreeFlags&8772)!==0||o){o=K.T,K.T=null;var u=oe.p;oe.p=2;var d=Ye;Ye|=4;try{JT(r,s.alternate,s)}finally{Ye=d,oe.p=u,K.T=o}}sn=3}}function ww(){if(sn===4||sn===3){sn=0,Qh();var r=ls,s=el,o=tl,u=uw;(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?sn=5:(sn=0,el=ls=null,bw(r,r.pendingLanes));var d=r.pendingLanes;if(d===0&&(os=null),Eo(o),s=s.stateNode,Qe&&typeof Qe.onCommitFiberRoot=="function")try{Qe.onCommitFiberRoot(Et,s,void 0,(s.current.flags&128)===128)}catch{}if(u!==null){s=K.T,d=oe.p,oe.p=2,K.T=null;try{for(var g=r.onRecoverableError,E=0;E<u.length;E++){var w=u[E];g(w.value,{componentStack:w.stack})}}finally{K.T=s,oe.p=d}}(tl&3)!==0&&Jd(),Ui(r),d=r.pendingLanes,(o&4194090)!==0&&(d&42)!==0?r===Ap?ac++:(ac=0,Ap=r):ac=0,oc(0)}}function bw(r,s){(r.pooledCacheLanes&=s)===0&&(s=r.pooledCache,s!=null&&(r.pooledCache=null,zu(s)))}function Jd(r){return Ew(),Tw(),ww(),Iw()}function Iw(){if(sn!==5)return!1;var r=ls,s=bp;bp=0;var o=Eo(tl),u=K.T,d=oe.p;try{oe.p=32>o?32:o,K.T=null,o=Ip,Ip=null;var g=ls,E=tl;if(sn=0,el=ls=null,tl=0,(Ye&6)!==0)throw Error(n(331));var w=Ye;if(Ye|=4,ow(g.current),rw(g,g.current,E,o),Ye=w,oc(0,!1),Qe&&typeof Qe.onPostCommitFiberRoot=="function")try{Qe.onPostCommitFiberRoot(Et,g)}catch{}return!0}finally{oe.p=d,K.T=u,bw(r,s)}}function Aw(r,s,o){s=ei(o,s),s=ip(r.stateNode,s,2),r=Jr(r,s,2),r!==null&&(ir(r,2),Ui(r))}function it(r,s,o){if(r.tag===3)Aw(r,r,o);else for(;s!==null;){if(s.tag===3){Aw(s,r,o);break}else if(s.tag===1){var u=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(os===null||!os.has(u))){r=ei(o,r),o=DT(2),u=Jr(s,o,2),u!==null&&(PT(o,u,s,r),ir(u,2),Ui(u));break}}s=s.return}}function Dp(r,s,o){var u=r.pingCache;if(u===null){u=r.pingCache=new DC;var d=new Set;u.set(s,d)}else d=u.get(s),d===void 0&&(d=new Set,u.set(s,d));d.has(o)||(vp=!0,d.add(o),r=xC.bind(null,r,s,o),s.then(r,r))}function xC(r,s,o){var u=r.pingCache;u!==null&&u.delete(s),r.pingedLanes|=r.suspendedLanes&o,r.warmLanes&=~o,st===r&&(ze&o)===o&&(wt===4||wt===3&&(ze&62914560)===ze&&300>Yn()-wp?(Ye&2)===0&&nl(r,0):Ep|=o,Zo===ze&&(Zo=0)),Ui(r)}function Sw(r,s){s===0&&(s=pu()),r=Uo(r,s),r!==null&&(ir(r,s),Ui(r))}function kC(r){var s=r.memoizedState,o=0;s!==null&&(o=s.retryLane),Sw(r,o)}function MC(r,s){var o=0;switch(r.tag){case 13:var u=r.stateNode,d=r.memoizedState;d!==null&&(o=d.retryLane);break;case 19:u=r.stateNode;break;case 22:u=r.stateNode._retryCache;break;default:throw Error(n(314))}u!==null&&u.delete(s),Sw(r,o)}function LC(r,s){return Zs(r,s)}var Zd=null,rl=null,Pp=!1,ef=!1,Np=!1,xa=0;function Ui(r){r!==rl&&r.next===null&&(rl===null?Zd=rl=r:rl=rl.next=r),ef=!0,Pp||(Pp=!0,BC())}function oc(r,s){if(!Np&&ef){Np=!0;do for(var o=!1,u=Zd;u!==null;){if(r!==0){var d=u.pendingLanes;if(d===0)var g=0;else{var E=u.suspendedLanes,w=u.pingedLanes;g=(1<<31-hn(42|r)+1)-1,g&=d&~(E&~w),g=g&201326741?g&201326741|1:g?g|2:0}g!==0&&(o=!0,Pw(u,g))}else g=ze,g=vo(u,u===st?g:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(g&3)===0||sa(u,g)||(o=!0,Pw(u,g));u=u.next}while(o);Np=!1}}function UC(){Rw()}function Rw(){ef=Pp=!1;var r=0;xa!==0&&(QC()&&(r=xa),xa=0);for(var s=Yn(),o=null,u=Zd;u!==null;){var d=u.next,g=Cw(u,s);g===0?(u.next=null,o===null?Zd=d:o.next=d,d===null&&(rl=o)):(o=u,(r!==0||(g&3)!==0)&&(ef=!0)),u=d}oc(r)}function Cw(r,s){for(var o=r.suspendedLanes,u=r.pingedLanes,d=r.expirationTimes,g=r.pendingLanes&-62914561;0<g;){var E=31-hn(g),w=1<<E,S=d[E];S===-1?((w&o)===0||(w&u)!==0)&&(d[E]=mu(w,s)):S<=s&&(r.expiredLanes|=w),g&=~w}if(s=st,o=ze,o=vo(r,r===s?o:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),u=r.callbackNode,o===0||r===s&&(We===2||We===9)||r.cancelPendingCommit!==null)return u!==null&&u!==null&&ea(u),r.callbackNode=null,r.callbackPriority=0;if((o&3)===0||sa(r,o)){if(s=o&-o,s===r.callbackPriority)return s;switch(u!==null&&ea(u),Eo(o)){case 2:case 8:o=_o;break;case 32:o=ta;break;case 268435456:o=yo;break;default:o=ta}return u=Dw.bind(null,r),o=Zs(o,u),r.callbackPriority=s,r.callbackNode=o,s}return u!==null&&u!==null&&ea(u),r.callbackPriority=2,r.callbackNode=null,2}function Dw(r,s){if(sn!==0&&sn!==5)return r.callbackNode=null,r.callbackPriority=0,null;var o=r.callbackNode;if(Jd()&&r.callbackNode!==o)return null;var u=ze;return u=vo(r,r===st?u:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),u===0?null:(hw(r,u,s),Cw(r,Yn()),r.callbackNode!=null&&r.callbackNode===o?Dw.bind(null,r):null)}function Pw(r,s){if(Jd())return null;hw(r,s,!0)}function BC(){WC(function(){(Ye&6)!==0?Zs(du,UC):Rw()})}function Op(){return xa===0&&(xa=gu()),xa}function Nw(r){return r==null||typeof r=="symbol"||typeof r=="boolean"?null:typeof r=="function"?r:So(""+r)}function Ow(r,s){var o=s.ownerDocument.createElement("input");return o.name=s.name,o.value=s.value,r.id&&o.setAttribute("form",r.id),s.parentNode.insertBefore(o,s),r=new FormData(r),o.parentNode.removeChild(o),r}function zC(r,s,o,u,d){if(s==="submit"&&o&&o.stateNode===d){var g=Nw((d[Ot]||null).action),E=u.submitter;E&&(s=(s=E[Ot]||null)?Nw(s.formAction):E.getAttribute("formAction"),s!==null&&(g=s,E=null));var w=new Ro("action","action",null,u,d);r.push({event:w,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(xa!==0){var S=E?Ow(d,E):new FormData(d);Jg(o,{pending:!0,data:S,method:d.method,action:g},null,S)}}else typeof g=="function"&&(w.preventDefault(),S=E?Ow(d,E):new FormData(d),Jg(o,{pending:!0,data:S,method:d.method,action:g},g,S))},currentTarget:d}]})}}for(var Vp=0;Vp<_g.length;Vp++){var xp=_g[Vp],FC=xp.toLowerCase(),qC=xp[0].toUpperCase()+xp.slice(1);mi(FC,"on"+qC)}mi(hE,"onAnimationEnd"),mi(dE,"onAnimationIteration"),mi(fE,"onAnimationStart"),mi("dblclick","onDoubleClick"),mi("focusin","onFocus"),mi("focusout","onBlur"),mi(sC,"onTransitionRun"),mi(aC,"onTransitionStart"),mi(oC,"onTransitionCancel"),mi(mE,"onTransitionEnd"),sr("onMouseEnter",["mouseout","mouseover"]),sr("onMouseLeave",["mouseout","mouseover"]),sr("onPointerEnter",["pointerout","pointerover"]),sr("onPointerLeave",["pointerout","pointerover"]),di("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),di("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),di("onBeforeInput",["compositionend","keypress","textInput","paste"]),di("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),di("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),di("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jC=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(lc));function Vw(r,s){s=(s&4)!==0;for(var o=0;o<r.length;o++){var u=r[o],d=u.event;u=u.listeners;e:{var g=void 0;if(s)for(var E=u.length-1;0<=E;E--){var w=u[E],S=w.instance,z=w.currentTarget;if(w=w.listener,S!==g&&d.isPropagationStopped())break e;g=w,d.currentTarget=z;try{g(d)}catch(Q){Fd(Q)}d.currentTarget=null,g=S}else for(E=0;E<u.length;E++){if(w=u[E],S=w.instance,z=w.currentTarget,w=w.listener,S!==g&&d.isPropagationStopped())break e;g=w,d.currentTarget=z;try{g(d)}catch(Q){Fd(Q)}d.currentTarget=null,g=S}}}}function xe(r,s){var o=s[vu];o===void 0&&(o=s[vu]=new Set);var u=r+"__bubble";o.has(u)||(xw(s,r,2,!1),o.add(u))}function kp(r,s,o){var u=0;s&&(u|=4),xw(o,r,u,s)}var tf="_reactListening"+Math.random().toString(36).slice(2);function Mp(r){if(!r[tf]){r[tf]=!0,Eu.forEach(function(o){o!=="selectionchange"&&(jC.has(o)||kp(o,!1,r),kp(o,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[tf]||(s[tf]=!0,kp("selectionchange",!1,s))}}function xw(r,s,o,u){switch(r0(s)){case 2:var d=pD;break;case 8:d=_D;break;default:d=$p}o=d.bind(null,s,o,r),d=void 0,!Jn||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(d=!0),u?d!==void 0?r.addEventListener(s,o,{capture:!0,passive:d}):r.addEventListener(s,o,!0):d!==void 0?r.addEventListener(s,o,{passive:d}):r.addEventListener(s,o,!1)}function Lp(r,s,o,u,d){var g=u;if((s&1)===0&&(s&2)===0&&u!==null)e:for(;;){if(u===null)return;var E=u.tag;if(E===3||E===4){var w=u.stateNode.containerInfo;if(w===d)break;if(E===4)for(E=u.return;E!==null;){var S=E.tag;if((S===3||S===4)&&E.stateNode.containerInfo===d)return;E=E.return}for(;w!==null;){if(E=rr(w),E===null)return;if(S=E.tag,S===5||S===6||S===26||S===27){u=g=E;continue e}w=w.parentNode}}u=u.return}id(function(){var z=g,Q=Xn(o),X=[];e:{var F=gE.get(r);if(F!==void 0){var q=Ro,Ae=r;switch(r){case"keypress":if(Di(o)===0)break e;case"keydown":case"keyup":q=Vo;break;case"focusin":Ae="focus",q=Po;break;case"focusout":Ae="blur",q=Po;break;case"beforeblur":case"afterblur":q=Po;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":q=Zn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":q=ug;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":q=hd;break;case hE:case dE:case fE:q=No;break;case mE:q=fd;break;case"scroll":case"scrollend":q=rd;break;case"wheel":q=xo;break;case"copy":case"cut":case"paste":q=Oo;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":q=Ou;break;case"toggle":case"beforetoggle":q=gd}var we=(s&4)!==0,nt=!we&&(r==="scroll"||r==="scrollend"),k=we?F!==null?F+"Capture":null:F;we=[];for(var P=z,B;P!==null;){var W=P;if(B=W.stateNode,W=W.tag,W!==5&&W!==26&&W!==27||B===null||k===null||(W=fa(P,k),W!=null&&we.push(uc(P,W,B))),nt)break;P=P.return}0<we.length&&(F=new q(F,Ae,null,o,Q),X.push({event:F,listeners:we}))}}if((s&7)===0){e:{if(F=r==="mouseover"||r==="pointerover",q=r==="mouseout"||r==="pointerout",F&&o!==lr&&(Ae=o.relatedTarget||o.fromElement)&&(rr(Ae)||Ae[Wn]))break e;if((q||F)&&(F=Q.window===Q?Q:(F=Q.ownerDocument)?F.defaultView||F.parentWindow:window,q?(Ae=o.relatedTarget||o.toElement,q=z,Ae=Ae?rr(Ae):null,Ae!==null&&(nt=l(Ae),we=Ae.tag,Ae!==nt||we!==5&&we!==27&&we!==6)&&(Ae=null)):(q=null,Ae=z),q!==Ae)){if(we=Zn,W="onMouseLeave",k="onMouseEnter",P="mouse",(r==="pointerout"||r==="pointerover")&&(we=Ou,W="onPointerLeave",k="onPointerEnter",P="pointer"),nt=q==null?F:Ai(q),B=Ae==null?F:Ai(Ae),F=new we(W,P+"leave",q,o,Q),F.target=nt,F.relatedTarget=B,W=null,rr(Q)===z&&(we=new we(k,P+"enter",Ae,o,Q),we.target=B,we.relatedTarget=nt,W=we),nt=W,q&&Ae)t:{for(we=q,k=Ae,P=0,B=we;B;B=sl(B))P++;for(B=0,W=k;W;W=sl(W))B++;for(;0<P-B;)we=sl(we),P--;for(;0<B-P;)k=sl(k),B--;for(;P--;){if(we===k||k!==null&&we===k.alternate)break t;we=sl(we),k=sl(k)}we=null}else we=null;q!==null&&kw(X,F,q,we,!1),Ae!==null&&nt!==null&&kw(X,nt,Ae,we,!0)}}e:{if(F=z?Ai(z):window,q=F.nodeName&&F.nodeName.toLowerCase(),q==="select"||q==="input"&&F.type==="file")var he=eE;else if(zt(F))if(tE)he=nC;else{he=eC;var Oe=Z1}else q=F.nodeName,!q||q.toLowerCase()!=="input"||F.type!=="checkbox"&&F.type!=="radio"?z&&Au(z.elementType)&&(he=eE):he=tC;if(he&&(he=he(r,z))){fr(X,he,o,Q);break e}Oe&&Oe(r,F,z),r==="focusout"&&z&&F.type==="number"&&z.memoizedProps.value!=null&&Qr(F,"number",F.value)}switch(Oe=z?Ai(z):window,r){case"focusin":(zt(Oe)||Oe.contentEditable==="true")&&(ko=Oe,mg=z,ku=null);break;case"focusout":ku=mg=ko=null;break;case"mousedown":gg=!0;break;case"contextmenu":case"mouseup":case"dragend":gg=!1,uE(X,o,Q);break;case"selectionchange":if(rC)break;case"keydown":case"keyup":uE(X,o,Q)}var pe;if(Oi)e:{switch(r){case"compositionstart":var be="onCompositionStart";break e;case"compositionend":be="onCompositionEnd";break e;case"compositionupdate":be="onCompositionUpdate";break e}be=void 0}else Ue?H(r,o)&&(be="onCompositionEnd"):r==="keydown"&&o.keyCode===229&&(be="onCompositionStart");be&&(v&&o.locale!=="ko"&&(Ue||be!=="onCompositionStart"?be==="onCompositionEnd"&&Ue&&(pe=Ru()):(Ci=Q,Yr="value"in Ci?Ci.value:Ci.textContent,Ue=!0)),Oe=nf(z,be),0<Oe.length&&(be=new Pu(be,r,null,o,Q),X.push({event:be,listeners:Oe}),pe?be.data=pe:(pe=re(o),pe!==null&&(be.data=pe)))),(pe=_?Bt(r,o):Be(r,o))&&(be=nf(z,"onBeforeInput"),0<be.length&&(Oe=new Pu("onBeforeInput","beforeinput",null,o,Q),X.push({event:Oe,listeners:be}),Oe.data=pe)),zC(X,r,z,o,Q)}Vw(X,s)})}function uc(r,s,o){return{instance:r,listener:s,currentTarget:o}}function nf(r,s){for(var o=s+"Capture",u=[];r!==null;){var d=r,g=d.stateNode;if(d=d.tag,d!==5&&d!==26&&d!==27||g===null||(d=fa(r,o),d!=null&&u.unshift(uc(r,d,g)),d=fa(r,s),d!=null&&u.push(uc(r,d,g))),r.tag===3)return u;r=r.return}return[]}function sl(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5&&r.tag!==27);return r||null}function kw(r,s,o,u,d){for(var g=s._reactName,E=[];o!==null&&o!==u;){var w=o,S=w.alternate,z=w.stateNode;if(w=w.tag,S!==null&&S===u)break;w!==5&&w!==26&&w!==27||z===null||(S=z,d?(z=fa(o,g),z!=null&&E.unshift(uc(o,z,S))):d||(z=fa(o,g),z!=null&&E.push(uc(o,z,S)))),o=o.return}E.length!==0&&r.push({event:s,listeners:E})}var HC=/\r\n?/g,GC=/\u0000|\uFFFD/g;function Mw(r){return(typeof r=="string"?r:""+r).replace(HC,`
`).replace(GC,"")}function Lw(r,s){return s=Mw(s),Mw(r)===s}function rf(){}function tt(r,s,o,u,d,g){switch(o){case"children":typeof u=="string"?s==="body"||s==="textarea"&&u===""||$n(r,u):(typeof u=="number"||typeof u=="bigint")&&s!=="body"&&$n(r,""+u);break;case"className":Si(r,"class",u);break;case"tabIndex":Si(r,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":Si(r,o,u);break;case"style":Iu(r,u,g);break;case"data":if(s!=="object"){Si(r,"data",u);break}case"src":case"href":if(u===""&&(s!=="a"||o!=="href")){r.removeAttribute(o);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){r.removeAttribute(o);break}u=So(""+u),r.setAttribute(o,u);break;case"action":case"formAction":if(typeof u=="function"){r.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof g=="function"&&(o==="formAction"?(s!=="input"&&tt(r,s,"name",d.name,d,null),tt(r,s,"formEncType",d.formEncType,d,null),tt(r,s,"formMethod",d.formMethod,d,null),tt(r,s,"formTarget",d.formTarget,d,null)):(tt(r,s,"encType",d.encType,d,null),tt(r,s,"method",d.method,d,null),tt(r,s,"target",d.target,d,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){r.removeAttribute(o);break}u=So(""+u),r.setAttribute(o,u);break;case"onClick":u!=null&&(r.onclick=rf);break;case"onScroll":u!=null&&xe("scroll",r);break;case"onScrollEnd":u!=null&&xe("scrollend",r);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(n(61));if(o=u.__html,o!=null){if(d.children!=null)throw Error(n(60));r.innerHTML=o}}break;case"multiple":r.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":r.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){r.removeAttribute("xlink:href");break}o=So(""+u),r.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?r.setAttribute(o,""+u):r.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?r.setAttribute(o,""):r.removeAttribute(o);break;case"capture":case"download":u===!0?r.setAttribute(o,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?r.setAttribute(o,u):r.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?r.setAttribute(o,u):r.removeAttribute(o);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?r.removeAttribute(o):r.setAttribute(o,u);break;case"popover":xe("beforetoggle",r),xe("toggle",r),Kr(r,"popover",u);break;case"xlinkActuate":tn(r,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":tn(r,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":tn(r,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":tn(r,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":tn(r,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":tn(r,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":tn(r,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":tn(r,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":tn(r,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":Kr(r,"is",u);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=og.get(o)||o,Kr(r,o,u))}}function Up(r,s,o,u,d,g){switch(o){case"style":Iu(r,u,g);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(n(61));if(o=u.__html,o!=null){if(d.children!=null)throw Error(n(60));r.innerHTML=o}}break;case"children":typeof u=="string"?$n(r,u):(typeof u=="number"||typeof u=="bigint")&&$n(r,""+u);break;case"onScroll":u!=null&&xe("scroll",r);break;case"onScrollEnd":u!=null&&xe("scrollend",r);break;case"onClick":u!=null&&(r.onclick=rf);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!To.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(d=o.endsWith("Capture"),s=o.slice(2,d?o.length-7:void 0),g=r[Ot]||null,g=g!=null?g[o]:null,typeof g=="function"&&r.removeEventListener(s,g,d),typeof u=="function")){typeof g!="function"&&g!==null&&(o in r?r[o]=null:r.hasAttribute(o)&&r.removeAttribute(o)),r.addEventListener(s,u,d);break e}o in r?r[o]=u:u===!0?r.setAttribute(o,""):Kr(r,o,u)}}}function an(r,s,o){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",r),xe("load",r);var u=!1,d=!1,g;for(g in o)if(o.hasOwnProperty(g)){var E=o[g];if(E!=null)switch(g){case"src":u=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(n(137,s));default:tt(r,s,g,E,o,null)}}d&&tt(r,s,"srcSet",o.srcSet,o,null),u&&tt(r,s,"src",o.src,o,null);return;case"input":xe("invalid",r);var w=g=E=d=null,S=null,z=null;for(u in o)if(o.hasOwnProperty(u)){var Q=o[u];if(Q!=null)switch(u){case"name":d=Q;break;case"type":E=Q;break;case"checked":S=Q;break;case"defaultChecked":z=Q;break;case"value":g=Q;break;case"defaultValue":w=Q;break;case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(n(137,s));break;default:tt(r,s,u,Q,o,null)}}ca(r,g,w,S,z,E,d,!1),Ao(r);return;case"select":xe("invalid",r),u=E=g=null;for(d in o)if(o.hasOwnProperty(d)&&(w=o[d],w!=null))switch(d){case"value":g=w;break;case"defaultValue":E=w;break;case"multiple":u=w;default:tt(r,s,d,w,o,null)}s=g,o=E,r.multiple=!!u,s!=null?or(r,!!u,s,!1):o!=null&&or(r,!!u,o,!0);return;case"textarea":xe("invalid",r),g=d=u=null;for(E in o)if(o.hasOwnProperty(E)&&(w=o[E],w!=null))switch(E){case"value":u=w;break;case"defaultValue":d=w;break;case"children":g=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(n(91));break;default:tt(r,s,E,w,o,null)}ha(r,u,d,g),Ao(r);return;case"option":for(S in o)if(o.hasOwnProperty(S)&&(u=o[S],u!=null))switch(S){case"selected":r.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:tt(r,s,S,u,o,null)}return;case"dialog":xe("beforetoggle",r),xe("toggle",r),xe("cancel",r),xe("close",r);break;case"iframe":case"object":xe("load",r);break;case"video":case"audio":for(u=0;u<lc.length;u++)xe(lc[u],r);break;case"image":xe("error",r),xe("load",r);break;case"details":xe("toggle",r);break;case"embed":case"source":case"link":xe("error",r),xe("load",r);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(z in o)if(o.hasOwnProperty(z)&&(u=o[z],u!=null))switch(z){case"children":case"dangerouslySetInnerHTML":throw Error(n(137,s));default:tt(r,s,z,u,o,null)}return;default:if(Au(s)){for(Q in o)o.hasOwnProperty(Q)&&(u=o[Q],u!==void 0&&Up(r,s,Q,u,o,void 0));return}}for(w in o)o.hasOwnProperty(w)&&(u=o[w],u!=null&&tt(r,s,w,u,o,null))}function KC(r,s,o,u){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,g=null,E=null,w=null,S=null,z=null,Q=null;for(q in o){var X=o[q];if(o.hasOwnProperty(q)&&X!=null)switch(q){case"checked":break;case"value":break;case"defaultValue":S=X;default:u.hasOwnProperty(q)||tt(r,s,q,null,u,X)}}for(var F in u){var q=u[F];if(X=o[F],u.hasOwnProperty(F)&&(q!=null||X!=null))switch(F){case"type":g=q;break;case"name":d=q;break;case"checked":z=q;break;case"defaultChecked":Q=q;break;case"value":E=q;break;case"defaultValue":w=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(n(137,s));break;default:q!==X&&tt(r,s,F,q,u,X)}}Mn(r,E,w,S,z,Q,g,d);return;case"select":q=E=w=F=null;for(g in o)if(S=o[g],o.hasOwnProperty(g)&&S!=null)switch(g){case"value":break;case"multiple":q=S;default:u.hasOwnProperty(g)||tt(r,s,g,null,u,S)}for(d in u)if(g=u[d],S=o[d],u.hasOwnProperty(d)&&(g!=null||S!=null))switch(d){case"value":F=g;break;case"defaultValue":w=g;break;case"multiple":E=g;default:g!==S&&tt(r,s,d,g,u,S)}s=w,o=E,u=q,F!=null?or(r,!!o,F,!1):!!u!=!!o&&(s!=null?or(r,!!o,s,!0):or(r,!!o,o?[]:"",!1));return;case"textarea":q=F=null;for(w in o)if(d=o[w],o.hasOwnProperty(w)&&d!=null&&!u.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:tt(r,s,w,null,u,d)}for(E in u)if(d=u[E],g=o[E],u.hasOwnProperty(E)&&(d!=null||g!=null))switch(E){case"value":F=d;break;case"defaultValue":q=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(n(91));break;default:d!==g&&tt(r,s,E,d,u,g)}Ze(r,F,q);return;case"option":for(var Ae in o)if(F=o[Ae],o.hasOwnProperty(Ae)&&F!=null&&!u.hasOwnProperty(Ae))switch(Ae){case"selected":r.selected=!1;break;default:tt(r,s,Ae,null,u,F)}for(S in u)if(F=u[S],q=o[S],u.hasOwnProperty(S)&&F!==q&&(F!=null||q!=null))switch(S){case"selected":r.selected=F&&typeof F!="function"&&typeof F!="symbol";break;default:tt(r,s,S,F,u,q)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var we in o)F=o[we],o.hasOwnProperty(we)&&F!=null&&!u.hasOwnProperty(we)&&tt(r,s,we,null,u,F);for(z in u)if(F=u[z],q=o[z],u.hasOwnProperty(z)&&F!==q&&(F!=null||q!=null))switch(z){case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(n(137,s));break;default:tt(r,s,z,F,u,q)}return;default:if(Au(s)){for(var nt in o)F=o[nt],o.hasOwnProperty(nt)&&F!==void 0&&!u.hasOwnProperty(nt)&&Up(r,s,nt,void 0,u,F);for(Q in u)F=u[Q],q=o[Q],!u.hasOwnProperty(Q)||F===q||F===void 0&&q===void 0||Up(r,s,Q,F,u,q);return}}for(var k in o)F=o[k],o.hasOwnProperty(k)&&F!=null&&!u.hasOwnProperty(k)&&tt(r,s,k,null,u,F);for(X in u)F=u[X],q=o[X],!u.hasOwnProperty(X)||F===q||F==null&&q==null||tt(r,s,X,F,u,q)}var Bp=null,zp=null;function sf(r){return r.nodeType===9?r:r.ownerDocument}function Uw(r){switch(r){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Bw(r,s){if(r===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return r===1&&s==="foreignObject"?0:r}function Fp(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var qp=null;function QC(){var r=window.event;return r&&r.type==="popstate"?r===qp?!1:(qp=r,!0):(qp=null,!1)}var zw=typeof setTimeout=="function"?setTimeout:void 0,YC=typeof clearTimeout=="function"?clearTimeout:void 0,Fw=typeof Promise=="function"?Promise:void 0,WC=typeof queueMicrotask=="function"?queueMicrotask:typeof Fw<"u"?function(r){return Fw.resolve(null).then(r).catch($C)}:zw;function $C(r){setTimeout(function(){throw r})}function cs(r){return r==="head"}function qw(r,s){var o=s,u=0,d=0;do{var g=o.nextSibling;if(r.removeChild(o),g&&g.nodeType===8)if(o=g.data,o==="/$"){if(0<u&&8>u){o=u;var E=r.ownerDocument;if(o&1&&cc(E.documentElement),o&2&&cc(E.body),o&4)for(o=E.head,cc(o),E=o.firstChild;E;){var w=E.nextSibling,S=E.nodeName;E[aa]||S==="SCRIPT"||S==="STYLE"||S==="LINK"&&E.rel.toLowerCase()==="stylesheet"||o.removeChild(E),E=w}}if(d===0){r.removeChild(g),yc(s);return}d--}else o==="$"||o==="$?"||o==="$!"?d++:u=o.charCodeAt(0)-48;else u=0;o=g}while(o);yc(s)}function jp(r){var s=r.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var o=s;switch(s=s.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":jp(o),Gr(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}r.removeChild(o)}}function XC(r,s,o,u){for(;r.nodeType===1;){var d=o;if(r.nodeName.toLowerCase()!==s.toLowerCase()){if(!u&&(r.nodeName!=="INPUT"||r.type!=="hidden"))break}else if(u){if(!r[aa])switch(s){case"meta":if(!r.hasAttribute("itemprop"))break;return r;case"link":if(g=r.getAttribute("rel"),g==="stylesheet"&&r.hasAttribute("data-precedence"))break;if(g!==d.rel||r.getAttribute("href")!==(d.href==null||d.href===""?null:d.href)||r.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||r.getAttribute("title")!==(d.title==null?null:d.title))break;return r;case"style":if(r.hasAttribute("data-precedence"))break;return r;case"script":if(g=r.getAttribute("src"),(g!==(d.src==null?null:d.src)||r.getAttribute("type")!==(d.type==null?null:d.type)||r.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&g&&r.hasAttribute("async")&&!r.hasAttribute("itemprop"))break;return r;default:return r}}else if(s==="input"&&r.type==="hidden"){var g=d.name==null?null:""+d.name;if(d.type==="hidden"&&r.getAttribute("name")===g)return r}else return r;if(r=pi(r.nextSibling),r===null)break}return null}function JC(r,s,o){if(s==="")return null;for(;r.nodeType!==3;)if((r.nodeType!==1||r.nodeName!=="INPUT"||r.type!=="hidden")&&!o||(r=pi(r.nextSibling),r===null))return null;return r}function Hp(r){return r.data==="$!"||r.data==="$?"&&r.ownerDocument.readyState==="complete"}function ZC(r,s){var o=r.ownerDocument;if(r.data!=="$?"||o.readyState==="complete")s();else{var u=function(){s(),o.removeEventListener("DOMContentLoaded",u)};o.addEventListener("DOMContentLoaded",u),r._reactRetry=u}}function pi(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?"||s==="F!"||s==="F")break;if(s==="/$")return null}}return r}var Gp=null;function jw(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var o=r.data;if(o==="$"||o==="$!"||o==="$?"){if(s===0)return r;s--}else o==="/$"&&s++}r=r.previousSibling}return null}function Hw(r,s,o){switch(s=sf(o),r){case"html":if(r=s.documentElement,!r)throw Error(n(452));return r;case"head":if(r=s.head,!r)throw Error(n(453));return r;case"body":if(r=s.body,!r)throw Error(n(454));return r;default:throw Error(n(451))}}function cc(r){for(var s=r.attributes;s.length;)r.removeAttributeNode(s[0]);Gr(r)}var ai=new Map,Gw=new Set;function af(r){return typeof r.getRootNode=="function"?r.getRootNode():r.nodeType===9?r:r.ownerDocument}var Sr=oe.d;oe.d={f:eD,r:tD,D:nD,C:iD,L:rD,m:sD,X:oD,S:aD,M:lD};function eD(){var r=Sr.f(),s=$d();return r||s}function tD(r){var s=Ii(r);s!==null&&s.tag===5&&s.type==="form"?hT(s):Sr.r(r)}var al=typeof document>"u"?null:document;function Kw(r,s,o){var u=al;if(u&&typeof s=="string"&&s){var d=Vt(s);d='link[rel="'+r+'"][href="'+d+'"]',typeof o=="string"&&(d+='[crossorigin="'+o+'"]'),Gw.has(d)||(Gw.add(d),r={rel:r,crossOrigin:o,href:s},u.querySelector(d)===null&&(s=u.createElement("link"),an(s,"link",r),St(s),u.head.appendChild(s)))}}function nD(r){Sr.D(r),Kw("dns-prefetch",r,null)}function iD(r,s){Sr.C(r,s),Kw("preconnect",r,s)}function rD(r,s,o){Sr.L(r,s,o);var u=al;if(u&&r&&s){var d='link[rel="preload"][as="'+Vt(s)+'"]';s==="image"&&o&&o.imageSrcSet?(d+='[imagesrcset="'+Vt(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(d+='[imagesizes="'+Vt(o.imageSizes)+'"]')):d+='[href="'+Vt(r)+'"]';var g=d;switch(s){case"style":g=ol(r);break;case"script":g=ll(r)}ai.has(g)||(r=y({rel:"preload",href:s==="image"&&o&&o.imageSrcSet?void 0:r,as:s},o),ai.set(g,r),u.querySelector(d)!==null||s==="style"&&u.querySelector(hc(g))||s==="script"&&u.querySelector(dc(g))||(s=u.createElement("link"),an(s,"link",r),St(s),u.head.appendChild(s)))}}function sD(r,s){Sr.m(r,s);var o=al;if(o&&r){var u=s&&typeof s.as=="string"?s.as:"script",d='link[rel="modulepreload"][as="'+Vt(u)+'"][href="'+Vt(r)+'"]',g=d;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":g=ll(r)}if(!ai.has(g)&&(r=y({rel:"modulepreload",href:r},s),ai.set(g,r),o.querySelector(d)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(dc(g)))return}u=o.createElement("link"),an(u,"link",r),St(u),o.head.appendChild(u)}}}function aD(r,s,o){Sr.S(r,s,o);var u=al;if(u&&r){var d=yn(u).hoistableStyles,g=ol(r);s=s||"default";var E=d.get(g);if(!E){var w={loading:0,preload:null};if(E=u.querySelector(hc(g)))w.loading=5;else{r=y({rel:"stylesheet",href:r,"data-precedence":s},o),(o=ai.get(g))&&Kp(r,o);var S=E=u.createElement("link");St(S),an(S,"link",r),S._p=new Promise(function(z,Q){S.onload=z,S.onerror=Q}),S.addEventListener("load",function(){w.loading|=1}),S.addEventListener("error",function(){w.loading|=2}),w.loading|=4,of(E,s,u)}E={type:"stylesheet",instance:E,count:1,state:w},d.set(g,E)}}}function oD(r,s){Sr.X(r,s);var o=al;if(o&&r){var u=yn(o).hoistableScripts,d=ll(r),g=u.get(d);g||(g=o.querySelector(dc(d)),g||(r=y({src:r,async:!0},s),(s=ai.get(d))&&Qp(r,s),g=o.createElement("script"),St(g),an(g,"link",r),o.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},u.set(d,g))}}function lD(r,s){Sr.M(r,s);var o=al;if(o&&r){var u=yn(o).hoistableScripts,d=ll(r),g=u.get(d);g||(g=o.querySelector(dc(d)),g||(r=y({src:r,async:!0,type:"module"},s),(s=ai.get(d))&&Qp(r,s),g=o.createElement("script"),St(g),an(g,"link",r),o.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},u.set(d,g))}}function Qw(r,s,o,u){var d=(d=Se.current)?af(d):null;if(!d)throw Error(n(446));switch(r){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(s=ol(o.href),o=yn(d).hoistableStyles,u=o.get(s),u||(u={type:"style",instance:null,count:0,state:null},o.set(s,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){r=ol(o.href);var g=yn(d).hoistableStyles,E=g.get(r);if(E||(d=d.ownerDocument||d,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},g.set(r,E),(g=d.querySelector(hc(r)))&&!g._p&&(E.instance=g,E.state.loading=5),ai.has(r)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},ai.set(r,o),g||uD(d,r,o,E.state))),s&&u===null)throw Error(n(528,""));return E}if(s&&u!==null)throw Error(n(529,""));return null;case"script":return s=o.async,o=o.src,typeof o=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=ll(o),o=yn(d).hoistableScripts,u=o.get(s),u||(u={type:"script",instance:null,count:0,state:null},o.set(s,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(n(444,r))}}function ol(r){return'href="'+Vt(r)+'"'}function hc(r){return'link[rel="stylesheet"]['+r+"]"}function Yw(r){return y({},r,{"data-precedence":r.precedence,precedence:null})}function uD(r,s,o,u){r.querySelector('link[rel="preload"][as="style"]['+s+"]")?u.loading=1:(s=r.createElement("link"),u.preload=s,s.addEventListener("load",function(){return u.loading|=1}),s.addEventListener("error",function(){return u.loading|=2}),an(s,"link",o),St(s),r.head.appendChild(s))}function ll(r){return'[src="'+Vt(r)+'"]'}function dc(r){return"script[async]"+r}function Ww(r,s,o){if(s.count++,s.instance===null)switch(s.type){case"style":var u=r.querySelector('style[data-href~="'+Vt(o.href)+'"]');if(u)return s.instance=u,St(u),u;var d=y({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return u=(r.ownerDocument||r).createElement("style"),St(u),an(u,"style",d),of(u,o.precedence,r),s.instance=u;case"stylesheet":d=ol(o.href);var g=r.querySelector(hc(d));if(g)return s.state.loading|=4,s.instance=g,St(g),g;u=Yw(o),(d=ai.get(d))&&Kp(u,d),g=(r.ownerDocument||r).createElement("link"),St(g);var E=g;return E._p=new Promise(function(w,S){E.onload=w,E.onerror=S}),an(g,"link",u),s.state.loading|=4,of(g,o.precedence,r),s.instance=g;case"script":return g=ll(o.src),(d=r.querySelector(dc(g)))?(s.instance=d,St(d),d):(u=o,(d=ai.get(g))&&(u=y({},o),Qp(u,d)),r=r.ownerDocument||r,d=r.createElement("script"),St(d),an(d,"link",u),r.head.appendChild(d),s.instance=d);case"void":return null;default:throw Error(n(443,s.type))}else s.type==="stylesheet"&&(s.state.loading&4)===0&&(u=s.instance,s.state.loading|=4,of(u,o.precedence,r));return s.instance}function of(r,s,o){for(var u=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=u.length?u[u.length-1]:null,g=d,E=0;E<u.length;E++){var w=u[E];if(w.dataset.precedence===s)g=w;else if(g!==d)break}g?g.parentNode.insertBefore(r,g.nextSibling):(s=o.nodeType===9?o.head:o,s.insertBefore(r,s.firstChild))}function Kp(r,s){r.crossOrigin==null&&(r.crossOrigin=s.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=s.referrerPolicy),r.title==null&&(r.title=s.title)}function Qp(r,s){r.crossOrigin==null&&(r.crossOrigin=s.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=s.referrerPolicy),r.integrity==null&&(r.integrity=s.integrity)}var lf=null;function $w(r,s,o){if(lf===null){var u=new Map,d=lf=new Map;d.set(o,u)}else d=lf,u=d.get(o),u||(u=new Map,d.set(o,u));if(u.has(r))return u;for(u.set(r,null),o=o.getElementsByTagName(r),d=0;d<o.length;d++){var g=o[d];if(!(g[aa]||g[Ut]||r==="link"&&g.getAttribute("rel")==="stylesheet")&&g.namespaceURI!=="http://www.w3.org/2000/svg"){var E=g.getAttribute(s)||"";E=r+E;var w=u.get(E);w?w.push(g):u.set(E,[g])}}return u}function Xw(r,s,o){r=r.ownerDocument||r,r.head.insertBefore(o,s==="title"?r.querySelector("head > title"):null)}function cD(r,s,o){if(o===1||s.itemProp!=null)return!1;switch(r){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;switch(s.rel){case"stylesheet":return r=s.disabled,typeof s.precedence=="string"&&r==null;default:return!0}case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function Jw(r){return!(r.type==="stylesheet"&&(r.state.loading&3)===0)}var fc=null;function hD(){}function dD(r,s,o){if(fc===null)throw Error(n(475));var u=fc;if(s.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var d=ol(o.href),g=r.querySelector(hc(d));if(g){r=g._p,r!==null&&typeof r=="object"&&typeof r.then=="function"&&(u.count++,u=uf.bind(u),r.then(u,u)),s.state.loading|=4,s.instance=g,St(g);return}g=r.ownerDocument||r,o=Yw(o),(d=ai.get(d))&&Kp(o,d),g=g.createElement("link"),St(g);var E=g;E._p=new Promise(function(w,S){E.onload=w,E.onerror=S}),an(g,"link",o),s.instance=g}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(s,r),(r=s.state.preload)&&(s.state.loading&3)===0&&(u.count++,s=uf.bind(u),r.addEventListener("load",s),r.addEventListener("error",s))}}function fD(){if(fc===null)throw Error(n(475));var r=fc;return r.stylesheets&&r.count===0&&Yp(r,r.stylesheets),0<r.count?function(s){var o=setTimeout(function(){if(r.stylesheets&&Yp(r,r.stylesheets),r.unsuspend){var u=r.unsuspend;r.unsuspend=null,u()}},6e4);return r.unsuspend=s,function(){r.unsuspend=null,clearTimeout(o)}}:null}function uf(){if(this.count--,this.count===0){if(this.stylesheets)Yp(this,this.stylesheets);else if(this.unsuspend){var r=this.unsuspend;this.unsuspend=null,r()}}}var cf=null;function Yp(r,s){r.stylesheets=null,r.unsuspend!==null&&(r.count++,cf=new Map,s.forEach(mD,r),cf=null,uf.call(r))}function mD(r,s){if(!(s.state.loading&4)){var o=cf.get(r);if(o)var u=o.get(null);else{o=new Map,cf.set(r,o);for(var d=r.querySelectorAll("link[data-precedence],style[data-precedence]"),g=0;g<d.length;g++){var E=d[g];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(o.set(E.dataset.precedence,E),u=E)}u&&o.set(null,u)}d=s.instance,E=d.getAttribute("data-precedence"),g=o.get(E)||u,g===u&&o.set(null,d),o.set(E,d),this.count++,u=uf.bind(this),d.addEventListener("load",u),d.addEventListener("error",u),g?g.parentNode.insertBefore(d,g.nextSibling):(r=r.nodeType===9?r.head:r,r.insertBefore(d,r.firstChild)),s.state.loading|=4}}var mc={$$typeof:ne,Provider:null,Consumer:null,_currentValue:_e,_currentValue2:_e,_threadCount:0};function gD(r,s,o,u,d,g,E,w){this.tag=1,this.containerInfo=r,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=nr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nr(0),this.hiddenUpdates=nr(null),this.identifierPrefix=u,this.onUncaughtError=d,this.onCaughtError=g,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=w,this.incompleteTransitions=new Map}function Zw(r,s,o,u,d,g,E,w,S,z,Q,X){return r=new gD(r,s,o,E,w,S,z,X),s=1,g===!0&&(s|=24),g=Un(3,null,null,s),r.current=g,g.stateNode=r,s=Dg(),s.refCount++,r.pooledCache=s,s.refCount++,g.memoizedState={element:u,isDehydrated:o,cache:s},Vg(g),r}function e0(r){return r?(r=Bo,r):Bo}function t0(r,s,o,u,d,g){d=e0(d),u.context===null?u.context=d:u.pendingContext=d,u=Xr(s),u.payload={element:o},g=g===void 0?null:g,g!==null&&(u.callback=g),o=Jr(r,u,s),o!==null&&(jn(o,r,s),Hu(o,r,s))}function n0(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var o=r.retryLane;r.retryLane=o!==0&&o<s?o:s}}function Wp(r,s){n0(r,s),(r=r.alternate)&&n0(r,s)}function i0(r){if(r.tag===13){var s=Uo(r,67108864);s!==null&&jn(s,r,67108864),Wp(r,67108864)}}var hf=!0;function pD(r,s,o,u){var d=K.T;K.T=null;var g=oe.p;try{oe.p=2,$p(r,s,o,u)}finally{oe.p=g,K.T=d}}function _D(r,s,o,u){var d=K.T;K.T=null;var g=oe.p;try{oe.p=8,$p(r,s,o,u)}finally{oe.p=g,K.T=d}}function $p(r,s,o,u){if(hf){var d=Xp(u);if(d===null)Lp(r,s,u,df,o),s0(r,u);else if(vD(d,r,s,o,u))u.stopPropagation();else if(s0(r,u),s&4&&-1<yD.indexOf(r)){for(;d!==null;){var g=Ii(d);if(g!==null)switch(g.tag){case 3:if(g=g.stateNode,g.current.memoizedState.isDehydrated){var E=hi(g.pendingLanes);if(E!==0){var w=g;for(w.pendingLanes|=2,w.entangledLanes|=2;E;){var S=1<<31-hn(E);w.entanglements[1]|=S,E&=~S}Ui(g),(Ye&6)===0&&(Yd=Yn()+500,oc(0))}}break;case 13:w=Uo(g,2),w!==null&&jn(w,g,2),$d(),Wp(g,2)}if(g=Xp(u),g===null&&Lp(r,s,u,df,o),g===d)break;d=g}d!==null&&u.stopPropagation()}else Lp(r,s,u,null,o)}}function Xp(r){return r=Xn(r),Jp(r)}var df=null;function Jp(r){if(df=null,r=rr(r),r!==null){var s=l(r);if(s===null)r=null;else{var o=s.tag;if(o===13){if(r=c(s),r!==null)return r;r=null}else if(o===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null)}}return df=r,null}function r0(r){switch(r){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(tg()){case du:return 2;case _o:return 8;case ta:case ng:return 32;case yo:return 268435456;default:return 32}default:return 32}}var Zp=!1,hs=null,ds=null,fs=null,gc=new Map,pc=new Map,ms=[],yD="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function s0(r,s){switch(r){case"focusin":case"focusout":hs=null;break;case"dragenter":case"dragleave":ds=null;break;case"mouseover":case"mouseout":fs=null;break;case"pointerover":case"pointerout":gc.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":pc.delete(s.pointerId)}}function _c(r,s,o,u,d,g){return r===null||r.nativeEvent!==g?(r={blockedOn:s,domEventName:o,eventSystemFlags:u,nativeEvent:g,targetContainers:[d]},s!==null&&(s=Ii(s),s!==null&&i0(s)),r):(r.eventSystemFlags|=u,s=r.targetContainers,d!==null&&s.indexOf(d)===-1&&s.push(d),r)}function vD(r,s,o,u,d){switch(s){case"focusin":return hs=_c(hs,r,s,o,u,d),!0;case"dragenter":return ds=_c(ds,r,s,o,u,d),!0;case"mouseover":return fs=_c(fs,r,s,o,u,d),!0;case"pointerover":var g=d.pointerId;return gc.set(g,_c(gc.get(g)||null,r,s,o,u,d)),!0;case"gotpointercapture":return g=d.pointerId,pc.set(g,_c(pc.get(g)||null,r,s,o,u,d)),!0}return!1}function a0(r){var s=rr(r.target);if(s!==null){var o=l(s);if(o!==null){if(s=o.tag,s===13){if(s=c(o),s!==null){r.blockedOn=s,$h(r.priority,function(){if(o.tag===13){var u=qn();u=qr(u);var d=Uo(o,u);d!==null&&jn(d,o,u),Wp(o,u)}});return}}else if(s===3&&o.stateNode.current.memoizedState.isDehydrated){r.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}r.blockedOn=null}function ff(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var o=Xp(r.nativeEvent);if(o===null){o=r.nativeEvent;var u=new o.constructor(o.type,o);lr=u,o.target.dispatchEvent(u),lr=null}else return s=Ii(o),s!==null&&i0(s),r.blockedOn=o,!1;s.shift()}return!0}function o0(r,s,o){ff(r)&&o.delete(s)}function ED(){Zp=!1,hs!==null&&ff(hs)&&(hs=null),ds!==null&&ff(ds)&&(ds=null),fs!==null&&ff(fs)&&(fs=null),gc.forEach(o0),pc.forEach(o0)}function mf(r,s){r.blockedOn===s&&(r.blockedOn=null,Zp||(Zp=!0,i.unstable_scheduleCallback(i.unstable_NormalPriority,ED)))}var gf=null;function l0(r){gf!==r&&(gf=r,i.unstable_scheduleCallback(i.unstable_NormalPriority,function(){gf===r&&(gf=null);for(var s=0;s<r.length;s+=3){var o=r[s],u=r[s+1],d=r[s+2];if(typeof u!="function"){if(Jp(u||o)===null)continue;break}var g=Ii(o);g!==null&&(r.splice(s,3),s-=3,Jg(g,{pending:!0,data:d,method:o.method,action:u},u,d))}}))}function yc(r){function s(S){return mf(S,r)}hs!==null&&mf(hs,r),ds!==null&&mf(ds,r),fs!==null&&mf(fs,r),gc.forEach(s),pc.forEach(s);for(var o=0;o<ms.length;o++){var u=ms[o];u.blockedOn===r&&(u.blockedOn=null)}for(;0<ms.length&&(o=ms[0],o.blockedOn===null);)a0(o),o.blockedOn===null&&ms.shift();if(o=(r.ownerDocument||r).$$reactFormReplay,o!=null)for(u=0;u<o.length;u+=3){var d=o[u],g=o[u+1],E=d[Ot]||null;if(typeof g=="function")E||l0(o);else if(E){var w=null;if(g&&g.hasAttribute("formAction")){if(d=g,E=g[Ot]||null)w=E.formAction;else if(Jp(d)!==null)continue}else w=E.action;typeof w=="function"?o[u+1]=w:(o.splice(u,3),u-=3),l0(o)}}}function e_(r){this._internalRoot=r}pf.prototype.render=e_.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(n(409));var o=s.current,u=qn();t0(o,u,r,s,null,null)},pf.prototype.unmount=e_.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;t0(r.current,2,null,r,null,null),$d(),s[Wn]=null}};function pf(r){this._internalRoot=r}pf.prototype.unstable_scheduleHydration=function(r){if(r){var s=jr();r={blockedOn:null,target:r,priority:s};for(var o=0;o<ms.length&&s!==0&&s<ms[o].priority;o++);ms.splice(o,0,r),o===0&&a0(r)}};var u0=e.version;if(u0!=="19.1.0")throw Error(n(527,u0,"19.1.0"));oe.findDOMNode=function(r){var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(n(188)):(r=Object.keys(r).join(","),Error(n(268,r)));return r=m(s),r=r!==null?p(r):null,r=r===null?null:r.stateNode,r};var TD={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:K,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _f=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_f.isDisabled&&_f.supportsFiber)try{Et=_f.inject(TD),Qe=_f}catch{}}return Ec.createRoot=function(r,s){if(!a(r))throw Error(n(299));var o=!1,u="",d=AT,g=ST,E=RT,w=null;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onUncaughtError!==void 0&&(d=s.onUncaughtError),s.onCaughtError!==void 0&&(g=s.onCaughtError),s.onRecoverableError!==void 0&&(E=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(w=s.unstable_transitionCallbacks)),s=Zw(r,1,!1,null,null,o,u,d,g,E,w,null),r[Wn]=s.current,Mp(r),new e_(s)},Ec.hydrateRoot=function(r,s,o){if(!a(r))throw Error(n(299));var u=!1,d="",g=AT,E=ST,w=RT,S=null,z=null;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(d=o.identifierPrefix),o.onUncaughtError!==void 0&&(g=o.onUncaughtError),o.onCaughtError!==void 0&&(E=o.onCaughtError),o.onRecoverableError!==void 0&&(w=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(S=o.unstable_transitionCallbacks),o.formState!==void 0&&(z=o.formState)),s=Zw(r,1,!0,s,o??null,u,d,g,E,w,S,z),s.context=e0(null),o=s.current,u=qn(),u=qr(u),d=Xr(u),d.callback=null,Jr(o,d,u),o=u,s.current.lanes=o,ir(s,o),Ui(s),r[Wn]=s.current,Mp(r),new pf(s)},Ec.version="19.1.0",Ec}var v0;function ND(){if(v0)return i_.exports;v0=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),i_.exports=PD(),i_.exports}var OD=ND();const VD=()=>{};var E0={};/**
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
 */const LI=function(i){const e=[];let t=0;for(let n=0;n<i.length;n++){let a=i.charCodeAt(n);a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):(a&64512)===55296&&n+1<i.length&&(i.charCodeAt(n+1)&64512)===56320?(a=65536+((a&1023)<<10)+(i.charCodeAt(++n)&1023),e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},xD=function(i){const e=[];let t=0,n=0;for(;t<i.length;){const a=i[t++];if(a<128)e[n++]=String.fromCharCode(a);else if(a>191&&a<224){const l=i[t++];e[n++]=String.fromCharCode((a&31)<<6|l&63)}else if(a>239&&a<365){const l=i[t++],c=i[t++],f=i[t++],m=((a&7)<<18|(l&63)<<12|(c&63)<<6|f&63)-65536;e[n++]=String.fromCharCode(55296+(m>>10)),e[n++]=String.fromCharCode(56320+(m&1023))}else{const l=i[t++],c=i[t++];e[n++]=String.fromCharCode((a&15)<<12|(l&63)<<6|c&63)}}return e.join("")},UI={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let a=0;a<i.length;a+=3){const l=i[a],c=a+1<i.length,f=c?i[a+1]:0,m=a+2<i.length,p=m?i[a+2]:0,y=l>>2,T=(l&3)<<4|f>>4;let b=(f&15)<<2|p>>6,O=p&63;m||(O=64,c||(b=64)),n.push(t[y],t[T],t[b],t[O])}return n.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(LI(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):xD(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let a=0;a<i.length;){const l=t[i.charAt(a++)],f=a<i.length?t[i.charAt(a)]:0;++a;const p=a<i.length?t[i.charAt(a)]:64;++a;const T=a<i.length?t[i.charAt(a)]:64;if(++a,l==null||f==null||p==null||T==null)throw new kD;const b=l<<2|f>>4;if(n.push(b),p!==64){const O=f<<4&240|p>>2;if(n.push(O),T!==64){const G=p<<6&192|T;n.push(G)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class kD extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const MD=function(i){const e=LI(i);return UI.encodeByteArray(e,!0)},qf=function(i){return MD(i).replace(/\./g,"")},gy=function(i){try{return UI.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function jf(i,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:i===void 0&&(i={});break;case Array:i=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!LD(t)||(i[t]=jf(i[t],e[t]));return i}function LD(i){return i!=="__proto__"}/**
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
 */function py(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const UD=()=>py().__FIREBASE_DEFAULTS__,BD=()=>{if(typeof process>"u"||typeof E0>"u")return;const i=E0.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},zD=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&gy(i[1]);return e&&JSON.parse(e)},_y=()=>{try{return VD()||UD()||BD()||zD()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},BI=()=>{var i;return(i=_y())===null||i===void 0?void 0:i.config},FD=i=>{var e;return(e=_y())===null||e===void 0?void 0:e[`_${i}`]};/**
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
 */class qD{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function Jl(i){return i.endsWith(".cloudworkstations.dev")}async function zI(i){return(await fetch(i,{credentials:"include"})).ok}/**
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
 */function jD(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",a=i.iat||0,l=i.sub||i.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:a,exp:a+3600,auth_time:a,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},i);return[qf(JSON.stringify(t)),qf(JSON.stringify(c)),""].join(".")}const Bc={};function HD(){const i={prod:[],emulator:[]};for(const e of Object.keys(Bc))Bc[e]?i.emulator.push(e):i.prod.push(e);return i}function GD(i){let e=document.getElementById(i),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",i),t=!0),{created:t,element:e}}let T0=!1;function FI(i,e){if(typeof window>"u"||typeof document>"u"||!Jl(window.location.host)||Bc[i]===e||Bc[i]||T0)return;Bc[i]=e;function t(b){return`__firebase__banner__${b}`}const n="__firebase__banner",l=HD().prod.length>0;function c(){const b=document.getElementById(n);b&&b.remove()}function f(b){b.style.display="flex",b.style.background="#7faaf0",b.style.position="fixed",b.style.bottom="5px",b.style.left="5px",b.style.padding=".5em",b.style.borderRadius="5px",b.style.alignItems="center"}function m(b,O){b.setAttribute("width","24"),b.setAttribute("id",O),b.setAttribute("height","24"),b.setAttribute("viewBox","0 0 24 24"),b.setAttribute("fill","none"),b.style.marginLeft="-6px"}function p(){const b=document.createElement("span");return b.style.cursor="pointer",b.style.marginLeft="16px",b.style.fontSize="24px",b.innerHTML=" &times;",b.onclick=()=>{T0=!0,c()},b}function y(b,O){b.setAttribute("id",O),b.innerText="Learn more",b.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",b.setAttribute("target","__blank"),b.style.paddingLeft="5px",b.style.textDecoration="underline"}function T(){const b=GD(n),O=t("text"),G=document.getElementById(O)||document.createElement("span"),$=t("learnmore"),Y=document.getElementById($)||document.createElement("a"),fe=t("preprendIcon"),ae=document.getElementById(fe)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(b.created){const ne=b.element;f(ne),y(Y,$);const ve=p();m(ae,fe),ne.append(ae,G,Y,ve),document.body.appendChild(ne)}l?(G.innerText="Preview backend disconnected.",ae.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(ae.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,G.innerText="Preview backend running in this workspace."),G.setAttribute("id",O)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",T):T()}/**
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
 */function _t(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function KD(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_t())}function gm(){var i;const e=(i=_y())===null||i===void 0?void 0:i.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function QD(){return typeof window<"u"||qI()}function qI(){return typeof WorkerGlobalScope<"u"&&typeof self<"u"&&self instanceof WorkerGlobalScope}function YD(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function jI(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function yy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function HI(){const i=_t();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function GI(){return!gm()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function KI(){return!gm()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function eh(){try{return typeof indexedDB=="object"}catch{return!1}}function WD(){return new Promise((i,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(n);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(n),i(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{var l;e(((l=a.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}/**
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
 */const $D="FirebaseError";class In extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=$D,Object.setPrototypeOf(this,In.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,co.prototype.create)}}class co{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},a=`${this.service}/${e}`,l=this.errors[e],c=l?XD(l,n):"Error",f=`${this.serviceName}: ${c} (${a}).`;return new In(a,f,n)}}function XD(i,e){return i.replace(JD,(t,n)=>{const a=e[n];return a!=null?String(a):`<${n}?>`})}const JD=/\{\$([^}]+)}/g;/**
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
 */function w0(i,e){return Object.prototype.hasOwnProperty.call(i,e)}function ZD(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function Ns(i,e){if(i===e)return!0;const t=Object.keys(i),n=Object.keys(e);for(const a of t){if(!n.includes(a))return!1;const l=i[a],c=e[a];if(b0(l)&&b0(c)){if(!Ns(l,c))return!1}else if(l!==c)return!1}for(const a of n)if(!t.includes(a))return!1;return!0}function b0(i){return i!==null&&typeof i=="object"}/**
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
 */function Zl(i){const e=[];for(const[t,n]of Object.entries(i))Array.isArray(n)?n.forEach(a=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function wl(i){const e={};return i.replace(/^\?/,"").split("&").forEach(n=>{if(n){const[a,l]=n.split("=");e[decodeURIComponent(a)]=decodeURIComponent(l)}}),e}function Oc(i){const e=i.indexOf("?");if(!e)return"";const t=i.indexOf("#",e);return i.substring(e,t>0?t:void 0)}function QI(i,e){const t=new eP(i,e);return t.subscribe.bind(t)}class eP{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let a;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");tP(e,["next","error","complete"])?a=e:a={next:e,error:t,complete:n},a.next===void 0&&(a.next=o_),a.error===void 0&&(a.error=o_),a.complete===void 0&&(a.complete=o_);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function tP(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function o_(){}/**
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
 */function Ee(i){return i&&i._delegate?i._delegate:i}class $i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ma="[DEFAULT]";/**
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
 */class nP{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new qD;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:t});a&&n.resolve(a)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),a=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(l){if(a)return null;throw l}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(rP(e))try{this.getOrInitializeService({instanceIdentifier:Ma})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:a});n.resolve(l)}catch{}}}}clearInstance(e=Ma){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ma){return this.instances.has(e)}getOptions(e=Ma){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[l,c]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);n===f&&c.resolve(a)}return a}onInit(e,t){var n;const a=this.normalizeInstanceIdentifier(t),l=(n=this.onInitCallbacks.get(a))!==null&&n!==void 0?n:new Set;l.add(e),this.onInitCallbacks.set(a,l);const c=this.instances.get(a);return c&&e(c,a),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const a of n)try{a(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:iP(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=Ma){return this.component?this.component.multipleInstances?e:Ma:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function iP(i){return i===Ma?void 0:i}function rP(i){return i.instantiationMode==="EAGER"}/**
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
 */class YI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new nP(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const vy=[];var ke;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(ke||(ke={}));const WI={debug:ke.DEBUG,verbose:ke.VERBOSE,info:ke.INFO,warn:ke.WARN,error:ke.ERROR,silent:ke.SILENT},sP=ke.INFO,aP={[ke.DEBUG]:"log",[ke.VERBOSE]:"log",[ke.INFO]:"info",[ke.WARN]:"warn",[ke.ERROR]:"error"},oP=(i,e,...t)=>{if(e<i.logLevel)return;const n=new Date().toISOString(),a=aP[e];if(a)console[a](`[${n}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class pm{constructor(e){this.name=e,this._logLevel=sP,this._logHandler=oP,this._userLogHandler=null,vy.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ke))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?WI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ke.DEBUG,...e),this._logHandler(this,ke.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ke.VERBOSE,...e),this._logHandler(this,ke.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ke.INFO,...e),this._logHandler(this,ke.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ke.WARN,...e),this._logHandler(this,ke.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ke.ERROR,...e),this._logHandler(this,ke.ERROR,...e)}}function lP(i){vy.forEach(e=>{e.setLogLevel(i)})}function uP(i,e){for(const t of vy){let n=null;e&&e.level&&(n=WI[e.level]),i===null?t.userLogHandler=null:t.userLogHandler=(a,l,...c)=>{const f=c.map(m=>{if(m==null)return null;if(typeof m=="string")return m;if(typeof m=="number"||typeof m=="boolean")return m.toString();if(m instanceof Error)return m.message;try{return JSON.stringify(m)}catch{return null}}).filter(m=>m).join(" ");l>=(n??a.logLevel)&&i({level:ke[l].toLowerCase(),message:f,args:c,type:a.name})}}}const cP=(i,e)=>e.some(t=>i instanceof t);let I0,A0;function hP(){return I0||(I0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function dP(){return A0||(A0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $I=new WeakMap,R_=new WeakMap,XI=new WeakMap,l_=new WeakMap,Ey=new WeakMap;function fP(i){const e=new Promise((t,n)=>{const a=()=>{i.removeEventListener("success",l),i.removeEventListener("error",c)},l=()=>{t(Ss(i.result)),a()},c=()=>{n(i.error),a()};i.addEventListener("success",l),i.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&$I.set(t,i)}).catch(()=>{}),Ey.set(e,i),e}function mP(i){if(R_.has(i))return;const e=new Promise((t,n)=>{const a=()=>{i.removeEventListener("complete",l),i.removeEventListener("error",c),i.removeEventListener("abort",c)},l=()=>{t(),a()},c=()=>{n(i.error||new DOMException("AbortError","AbortError")),a()};i.addEventListener("complete",l),i.addEventListener("error",c),i.addEventListener("abort",c)});R_.set(i,e)}let C_={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return R_.get(i);if(e==="objectStoreNames")return i.objectStoreNames||XI.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ss(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function gP(i){C_=i(C_)}function pP(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=i.call(u_(this),e,...t);return XI.set(n,e.sort?e.sort():[e]),Ss(n)}:dP().includes(i)?function(...e){return i.apply(u_(this),e),Ss($I.get(this))}:function(...e){return Ss(i.apply(u_(this),e))}}function _P(i){return typeof i=="function"?pP(i):(i instanceof IDBTransaction&&mP(i),cP(i,hP())?new Proxy(i,C_):i)}function Ss(i){if(i instanceof IDBRequest)return fP(i);if(l_.has(i))return l_.get(i);const e=_P(i);return e!==i&&(l_.set(i,e),Ey.set(e,i)),e}const u_=i=>Ey.get(i);function yP(i,e,{blocked:t,upgrade:n,blocking:a,terminated:l}={}){const c=indexedDB.open(i,e),f=Ss(c);return n&&c.addEventListener("upgradeneeded",m=>{n(Ss(c.result),m.oldVersion,m.newVersion,Ss(c.transaction),m)}),t&&c.addEventListener("blocked",m=>t(m.oldVersion,m.newVersion,m)),f.then(m=>{l&&m.addEventListener("close",()=>l()),a&&m.addEventListener("versionchange",p=>a(p.oldVersion,p.newVersion,p))}).catch(()=>{}),f}const vP=["get","getKey","getAll","getAllKeys","count"],EP=["put","add","delete","clear"],c_=new Map;function S0(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(c_.get(e))return c_.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,a=EP.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(a||vP.includes(t)))return;const l=async function(c,...f){const m=this.transaction(c,a?"readwrite":"readonly");let p=m.store;return n&&(p=p.index(f.shift())),(await Promise.all([p[t](...f),a&&m.done]))[0]};return c_.set(e,l),l}gP(i=>({...i,get:(e,t,n)=>S0(e,t)||i.get(e,t,n),has:(e,t)=>!!S0(e,t)||i.has(e,t)}));/**
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
 */class TP{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(wP(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function wP(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Hf="@firebase/app",D_="0.13.1";/**
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
 */const Pr=new pm("@firebase/app"),bP="@firebase/app-compat",IP="@firebase/analytics-compat",AP="@firebase/analytics",SP="@firebase/app-check-compat",RP="@firebase/app-check",CP="@firebase/auth",DP="@firebase/auth-compat",PP="@firebase/database",NP="@firebase/data-connect",OP="@firebase/database-compat",VP="@firebase/functions",xP="@firebase/functions-compat",kP="@firebase/installations",MP="@firebase/installations-compat",LP="@firebase/messaging",UP="@firebase/messaging-compat",BP="@firebase/performance",zP="@firebase/performance-compat",FP="@firebase/remote-config",qP="@firebase/remote-config-compat",jP="@firebase/storage",HP="@firebase/storage-compat",GP="@firebase/firestore",KP="@firebase/ai",QP="@firebase/firestore-compat",YP="firebase",WP="11.9.0";/**
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
 */const Os="[DEFAULT]",$P={[Hf]:"fire-core",[bP]:"fire-core-compat",[AP]:"fire-analytics",[IP]:"fire-analytics-compat",[RP]:"fire-app-check",[SP]:"fire-app-check-compat",[CP]:"fire-auth",[DP]:"fire-auth-compat",[PP]:"fire-rtdb",[NP]:"fire-data-connect",[OP]:"fire-rtdb-compat",[VP]:"fire-fn",[xP]:"fire-fn-compat",[kP]:"fire-iid",[MP]:"fire-iid-compat",[LP]:"fire-fcm",[UP]:"fire-fcm-compat",[BP]:"fire-perf",[zP]:"fire-perf-compat",[FP]:"fire-rc",[qP]:"fire-rc-compat",[jP]:"fire-gcs",[HP]:"fire-gcs-compat",[GP]:"fire-fst",[QP]:"fire-fst-compat",[KP]:"fire-vertex","fire-js":"fire-js",[YP]:"fire-js-all"};/**
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
 */const Vs=new Map,Dl=new Map,Pl=new Map;function th(i,e){try{i.container.addComponent(e)}catch(t){Pr.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function JI(i,e){i.container.addOrOverwriteComponent(e)}function xs(i){const e=i.name;if(Pl.has(e))return Pr.debug(`There were multiple attempts to register component ${e}.`),!1;Pl.set(e,i);for(const t of Vs.values())th(t,i);for(const t of Dl.values())th(t,i);return!0}function ZI(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function XP(i,e,t=Os){ZI(i,e).clearInstance(t)}function eA(i){return i.options!==void 0}function ht(i){return i==null?!1:i.settings!==void 0}function JP(){Pl.clear()}/**
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
 */const ZP={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},li=new co("app","Firebase",ZP);/**
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
 */let tA=class{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new $i("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw li.create("app-deleted",{appName:this._name})}};/**
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
 */function R0(i,e){const t=gy(i.split(".")[1]);if(t===null){console.error(`FirebaseServerApp ${e} is invalid: second part could not be parsed.`);return}if(JSON.parse(t).exp===void 0){console.error(`FirebaseServerApp ${e} is invalid: expiration claim could not be parsed`);return}const a=JSON.parse(t).exp*1e3,l=new Date().getTime();a-l<=0&&console.error(`FirebaseServerApp ${e} is invalid: the token has expired.`)}class eN extends tA{constructor(e,t,n,a){const l=t.automaticDataCollectionEnabled!==void 0?t.automaticDataCollectionEnabled:!0,c={name:n,automaticDataCollectionEnabled:l};if(e.apiKey!==void 0)super(e,c,a);else{const f=e;super(f.options,c,a)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:l},t),this._serverConfig.authIdToken&&R0(this._serverConfig.authIdToken,"authIdToken"),this._serverConfig.appCheckToken&&R0(this._serverConfig.appCheckToken,"appCheckToken"),this._finalizationRegistry=null,typeof FinalizationRegistry<"u"&&(this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()})),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,t.releaseOnDeref=void 0,vi(Hf,D_,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry!==null&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){wy(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw li.create("server-app-deleted")}}/**
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
 */const Gs=WP;function Ty(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const n=Object.assign({name:Os,automaticDataCollectionEnabled:!0},e),a=n.name;if(typeof a!="string"||!a)throw li.create("bad-app-name",{appName:String(a)});if(t||(t=BI()),!t)throw li.create("no-options");const l=Vs.get(a);if(l){if(Ns(t,l.options)&&Ns(n,l.config))return l;throw li.create("duplicate-app",{appName:a})}const c=new YI(a);for(const m of Pl.values())c.addComponent(m);const f=new tA(t,n,c);return Vs.set(a,f),f}function tN(i,e){if(QD()&&!qI())throw li.create("invalid-server-app-environment");e.automaticDataCollectionEnabled===void 0&&(e.automaticDataCollectionEnabled=!0);let t;eA(i)?t=i.options:t=i;const n=Object.assign(Object.assign({},e),t);n.releaseOnDeref!==void 0&&delete n.releaseOnDeref;const a=p=>[...p].reduce((y,T)=>Math.imul(31,y)+T.charCodeAt(0)|0,0);if(e.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw li.create("finalization-registry-not-supported",{});const l=""+a(JSON.stringify(n)),c=Dl.get(l);if(c)return c.incRefCount(e.releaseOnDeref),c;const f=new YI(l);for(const p of Pl.values())f.addComponent(p);const m=new eN(t,e,l,f);return Dl.set(l,m),m}function nN(i=Os){const e=Vs.get(i);if(!e&&i===Os&&BI())return Ty();if(!e)throw li.create("no-app",{appName:i});return e}function iN(){return Array.from(Vs.values())}async function wy(i){let e=!1;const t=i.name;Vs.has(t)?(e=!0,Vs.delete(t)):Dl.has(t)&&i.decRefCount()<=0&&(Dl.delete(t),e=!0),e&&(await Promise.all(i.container.getProviders().map(n=>n.delete())),i.isDeleted=!0)}function vi(i,e,t){var n;let a=(n=$P[i])!==null&&n!==void 0?n:i;t&&(a+=`-${t}`);const l=a.match(/\s|\//),c=e.match(/\s|\//);if(l||c){const f=[`Unable to register library "${a}" with version "${e}":`];l&&f.push(`library name "${a}" contains illegal characters (whitespace or "/")`),l&&c&&f.push("and"),c&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Pr.warn(f.join(" "));return}xs(new $i(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}function nA(i,e){if(i!==null&&typeof i!="function")throw li.create("invalid-log-argument");uP(i,e)}function iA(i){lP(i)}/**
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
 */const rN="firebase-heartbeat-database",sN=1,nh="firebase-heartbeat-store";let h_=null;function rA(){return h_||(h_=yP(rN,sN,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(nh)}catch(t){console.warn(t)}}}}).catch(i=>{throw li.create("idb-open",{originalErrorMessage:i.message})})),h_}async function aN(i){try{const t=(await rA()).transaction(nh),n=await t.objectStore(nh).get(sA(i));return await t.done,n}catch(e){if(e instanceof In)Pr.warn(e.message);else{const t=li.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Pr.warn(t.message)}}}async function C0(i,e){try{const n=(await rA()).transaction(nh,"readwrite");await n.objectStore(nh).put(e,sA(i)),await n.done}catch(t){if(t instanceof In)Pr.warn(t.message);else{const n=li.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Pr.warn(n.message)}}}function sA(i){return`${i.name}!${i.options.appId}`}/**
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
 */const oN=1024,lN=30;class uN{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new hN(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=D0();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:a}),this._heartbeatsCache.heartbeats.length>lN){const c=dN(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){Pr.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=D0(),{heartbeatsToSend:n,unsentEntries:a}=cN(this._heartbeatsCache.heartbeats),l=qf(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Pr.warn(t),""}}}function D0(){return new Date().toISOString().substring(0,10)}function cN(i,e=oN){const t=[];let n=i.slice();for(const a of i){const l=t.find(c=>c.agent===a.agent);if(l){if(l.dates.push(a.date),P0(t)>e){l.dates.pop();break}}else if(t.push({agent:a.agent,dates:[a.date]}),P0(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class hN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return eh()?WD().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await aN(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return C0(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return C0(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function P0(i){return qf(JSON.stringify({version:2,heartbeats:i})).length}function dN(i){if(i.length===0)return-1;let e=0,t=i[0].date;for(let n=1;n<i.length;n++)i[n].date<t&&(t=i[n].date,e=n);return e}/**
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
 */function fN(i){xs(new $i("platform-logger",e=>new TP(e),"PRIVATE")),xs(new $i("heartbeat",e=>new uN(e),"PRIVATE")),vi(Hf,D_,i),vi(Hf,D_,"esm2017"),vi("fire-js","")}fN("");const mN=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:In,SDK_VERSION:Gs,_DEFAULT_ENTRY_NAME:Os,_addComponent:th,_addOrOverwriteComponent:JI,_apps:Vs,_clearComponents:JP,_components:Pl,_getProvider:ZI,_isFirebaseApp:eA,_isFirebaseServerApp:ht,_registerComponent:xs,_removeServiceInstance:XP,_serverApps:Dl,deleteApp:wy,getApp:nN,getApps:iN,initializeApp:Ty,initializeServerApp:tN,onLog:nA,registerVersion:vi,setLogLevel:iA},Symbol.toStringTag,{value:"Module"}));/**
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
 */class gN{constructor(e,t){this._delegate=e,this.firebase=t,th(e,new $i("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),wy(this._delegate)))}_getService(e,t=Os){var n;this._delegate.checkDestroyed();const a=this._delegate.container.getProvider(e);return!a.isInitialized()&&((n=a.getComponent())===null||n===void 0?void 0:n.instantiationMode)==="EXPLICIT"&&a.initialize(),a.getImmediate({identifier:t})}_removeServiceInstance(e,t=Os){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){th(this._delegate,e)}_addOrOverwriteComponent(e){JI(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const pN={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},N0=new co("app-compat","Firebase",pN);/**
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
 */function _N(i){const e={},t={__esModule:!0,initializeApp:l,app:a,registerVersion:vi,setLogLevel:iA,onLog:nA,apps:null,SDK_VERSION:Gs,INTERNAL:{registerComponent:f,removeApp:n,useAsService:m,modularAPIs:mN}};t.default=t,Object.defineProperty(t,"apps",{get:c});function n(p){delete e[p]}function a(p){if(p=p||Os,!w0(e,p))throw N0.create("no-app",{appName:p});return e[p]}a.App=i;function l(p,y={}){const T=Ty(p,y);if(w0(e,T.name))return e[T.name];const b=new i(T,t);return e[T.name]=b,b}function c(){return Object.keys(e).map(p=>e[p])}function f(p){const y=p.name,T=y.replace("-compat","");if(xs(p)&&p.type==="PUBLIC"){const b=(O=a())=>{if(typeof O[T]!="function")throw N0.create("invalid-app-argument",{appName:y});return O[T]()};p.serviceProps!==void 0&&jf(b,p.serviceProps),t[T]=b,i.prototype[T]=function(...O){return this._getService.bind(this,y).apply(this,p.multipleInstances?O:[])}}return p.type==="PUBLIC"?t[T]:null}function m(p,y){return y==="serverAuth"?null:y}return t}/**
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
 */function aA(){const i=_N(gN);i.INTERNAL=Object.assign(Object.assign({},i.INTERNAL),{createFirebaseNamespace:aA,extendNamespace:e,createSubscribe:QI,ErrorFactory:co,deepExtend:jf});function e(t){jf(i,t)}return i}const yN=aA();/**
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
 */const O0=new pm("@firebase/app-compat"),vN="@firebase/app-compat",EN="0.4.1";/**
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
 */function TN(i){vi(vN,EN,i)}/**
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
 */try{const i=py();if(i.firebase!==void 0){O0.warn(`
      Warning: Firebase is already defined in the global scope. Please make sure
      Firebase library is only loaded once.
    `);const e=i.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&O0.warn(`
        Warning: You are trying to load Firebase while using Firebase Performance standalone script.
        You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
        `)}}catch{}const ui=yN;TN();var wN="firebase",bN="11.9.1";/**
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
 */ui.registerVersion(wN,bN,"app-compat");function by(i,e){var t={};for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&e.indexOf(n)<0&&(t[n]=i[n]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(i);a<n.length;a++)e.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(i,n[a])&&(t[n[a]]=i[n[a]]);return t}const Tc={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",TWITTER:"twitter.com"},ul={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function IN(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registered for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements.","invalid-hosting-link-domain":"The provided Hosting link domain is not configured in Firebase Hosting or is not owned by the current project. This cannot be a default Hosting domain (`web.app` or `firebaseapp.com`)."}}function oA(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const AN=IN,SN=oA,lA=new co("auth","Firebase",oA());/**
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
 */const Gf=new pm("@firebase/auth");function RN(i,...e){Gf.logLevel<=ke.WARN&&Gf.warn(`Auth (${Gs}): ${i}`,...e)}function Rf(i,...e){Gf.logLevel<=ke.ERROR&&Gf.error(`Auth (${Gs}): ${i}`,...e)}/**
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
 */function cn(i,...e){throw Ay(i,...e)}function jt(i,...e){return Ay(i,...e)}function Iy(i,e,t){const n=Object.assign(Object.assign({},SN()),{[e]:t});return new co("auth","Firebase",n).create(e,{appName:i.name})}function Zt(i){return Iy(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function eu(i,e,t){const n=t;if(!(e instanceof n))throw n.name!==e.constructor.name&&cn(i,"argument-error"),Iy(i,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ay(i,...e){if(typeof i!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=i.name),i._errorFactory.create(t,...n)}return lA.create(i,...e)}function te(i,e,...t){if(!i)throw Ay(e,...t)}function Gi(i){const e="INTERNAL ASSERTION FAILED: "+i;throw Rf(e),new Error(e)}function Ei(i,e){i||Gi(e)}/**
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
 */function ih(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function Sy(){return V0()==="http:"||V0()==="https:"}function V0(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
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
 */function CN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Sy()||jI()||"connection"in navigator)?navigator.onLine:!0}function DN(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
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
 */class Ah{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ei(t>e,"Short delay should be less than long delay!"),this.isMobile=KD()||yy()}get(){return CN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ry(i,e){Ei(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class uA{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Gi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Gi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Gi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const PN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const NN=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],ON=new Ah(3e4,6e4);function It(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function At(i,e,t,n,a={}){return cA(i,a,async()=>{let l={},c={};n&&(e==="GET"?c=n:l={body:JSON.stringify(n)});const f=Zl(Object.assign({key:i.config.apiKey},c)).slice(1),m=await i._getAdditionalHeaders();m["Content-Type"]="application/json",i.languageCode&&(m["X-Firebase-Locale"]=i.languageCode);const p=Object.assign({method:e,headers:m},l);return YD()||(p.referrerPolicy="no-referrer"),i.emulatorConfig&&Jl(i.emulatorConfig.host)&&(p.credentials="include"),uA.fetch()(await hA(i,i.config.apiHost,t,f),p)})}async function cA(i,e,t){i._canInitEmulator=!1;const n=Object.assign(Object.assign({},PN),e);try{const a=new xN(i),l=await Promise.race([t(),a.promise]);a.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw Vc(i,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const f=l.ok?c.errorMessage:c.error.message,[m,p]=f.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw Vc(i,"credential-already-in-use",c);if(m==="EMAIL_EXISTS")throw Vc(i,"email-already-in-use",c);if(m==="USER_DISABLED")throw Vc(i,"user-disabled",c);const y=n[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(p)throw Iy(i,y,p);cn(i,y)}}catch(a){if(a instanceof In)throw a;cn(i,"network-request-failed",{message:String(a)})}}async function kr(i,e,t,n,a={}){const l=await At(i,e,t,n,a);return"mfaPendingCredential"in l&&cn(i,"multi-factor-auth-required",{_serverResponse:l}),l}async function hA(i,e,t,n){const a=`${e}${t}?${n}`,l=i,c=l.config.emulator?Ry(i.config,a):`${i.config.apiScheme}://${a}`;return NN.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(c).toString():c}function VN(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class xN{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(jt(this.auth,"network-request-failed")),ON.get())})}}function Vc(i,e,t){const n={appName:i.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const a=jt(i,e,n);return a.customData._tokenResponse=t,a}/**
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
 */function x0(i){return i!==void 0&&i.getResponse!==void 0}function k0(i){return i!==void 0&&i.enterprise!==void 0}class dA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return VN(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}/**
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
 */async function kN(i){return(await At(i,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function fA(i,e){return At(i,"GET","/v2/recaptchaConfig",It(i,e))}/**
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
 */async function MN(i,e){return At(i,"POST","/v1/accounts:delete",e)}async function LN(i,e){return At(i,"POST","/v1/accounts:update",e)}async function Kf(i,e){return At(i,"POST","/v1/accounts:lookup",e)}/**
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
 */function zc(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function UN(i,e=!1){const t=Ee(i),n=await t.getIdToken(e),a=_m(n);te(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const l=typeof a.firebase=="object"?a.firebase:void 0,c=l==null?void 0:l.sign_in_provider;return{claims:a,token:n,authTime:zc(d_(a.auth_time)),issuedAtTime:zc(d_(a.iat)),expirationTime:zc(d_(a.exp)),signInProvider:c||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function d_(i){return Number(i)*1e3}function _m(i){const[e,t,n]=i.split(".");if(e===void 0||t===void 0||n===void 0)return Rf("JWT malformed, contained fewer than 3 sections"),null;try{const a=gy(t);return a?JSON.parse(a):(Rf("Failed to decode base64 JWT payload"),null)}catch(a){return Rf("Caught error parsing JWT payload as JSON",a==null?void 0:a.toString()),null}}function M0(i){const e=_m(i);return te(e,"internal-error"),te(typeof e.exp<"u","internal-error"),te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Nr(i,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof In&&BN(n)&&i.auth.currentUser===i&&await i.auth.signOut(),n}}function BN({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
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
 */class zN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const a=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class P_{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=zc(this.lastLoginAt),this.creationTime=zc(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function rh(i){var e;const t=i.auth,n=await i.getIdToken(),a=await Nr(i,Kf(t,{idToken:n}));te(a==null?void 0:a.users.length,t,"internal-error");const l=a.users[0];i._notifyReloadListener(l);const c=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?mA(l.providerUserInfo):[],f=qN(i.providerData,c),m=i.isAnonymous,p=!(i.email&&l.passwordHash)&&!(f!=null&&f.length),y=m?p:!1,T={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:f,metadata:new P_(l.createdAt,l.lastLoginAt),isAnonymous:y};Object.assign(i,T)}async function FN(i){const e=Ee(i);await rh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function qN(i,e){return[...i.filter(n=>!e.some(a=>a.providerId===n.providerId)),...e]}function mA(i){return i.map(e=>{var{providerId:t}=e,n=by(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
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
 */async function jN(i,e){const t=await cA(i,{},async()=>{const n=Zl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:l}=i.config,c=await hA(i,a,"/v1/token",`key=${l}`),f=await i._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const m={method:"POST",headers:f,body:n};return i.emulatorConfig&&Jl(i.emulatorConfig.host)&&(m.credentials="include"),uA.fetch()(c,m)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function HN(i,e){return At(i,"POST","/v2/accounts:revokeToken",It(i,e))}/**
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
 */class bl{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){te(e.idToken,"internal-error"),te(typeof e.idToken<"u","internal-error"),te(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):M0(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){te(e.length!==0,"internal-error");const t=M0(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(te(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:a,expiresIn:l}=await jN(e,t);this.updateTokensAndExpiration(n,a,Number(l))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:a,expirationTime:l}=t,c=new bl;return n&&(te(typeof n=="string","internal-error",{appName:e}),c.refreshToken=n),a&&(te(typeof a=="string","internal-error",{appName:e}),c.accessToken=a),l&&(te(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new bl,this.toJSON())}_performRefresh(){return Gi("not implemented")}}/**
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
 */function ps(i,e){te(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class yi{constructor(e){var{uid:t,auth:n,stsTokenManager:a}=e,l=by(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new zN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new P_(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await Nr(this,this.stsTokenManager.getToken(this.auth,e));return te(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return UN(this,e)}reload(){return FN(this)}_assign(e){this!==e&&(te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new yi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await rh(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ht(this.auth.app))return Promise.reject(Zt(this.auth));const e=await this.getIdToken();return await Nr(this,MN(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,a,l,c,f,m,p,y;const T=(n=t.displayName)!==null&&n!==void 0?n:void 0,b=(a=t.email)!==null&&a!==void 0?a:void 0,O=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,G=(c=t.photoURL)!==null&&c!==void 0?c:void 0,$=(f=t.tenantId)!==null&&f!==void 0?f:void 0,Y=(m=t._redirectEventId)!==null&&m!==void 0?m:void 0,fe=(p=t.createdAt)!==null&&p!==void 0?p:void 0,ae=(y=t.lastLoginAt)!==null&&y!==void 0?y:void 0,{uid:ne,emailVerified:ve,isAnonymous:me,providerData:Te,stsTokenManager:N}=t;te(ne&&N,e,"internal-error");const A=bl.fromJSON(this.name,N);te(typeof ne=="string",e,"internal-error"),ps(T,e.name),ps(b,e.name),te(typeof ve=="boolean",e,"internal-error"),te(typeof me=="boolean",e,"internal-error"),ps(O,e.name),ps(G,e.name),ps($,e.name),ps(Y,e.name),ps(fe,e.name),ps(ae,e.name);const R=new yi({uid:ne,auth:e,email:b,emailVerified:ve,displayName:T,isAnonymous:me,photoURL:G,phoneNumber:O,tenantId:$,stsTokenManager:A,createdAt:fe,lastLoginAt:ae});return Te&&Array.isArray(Te)&&(R.providerData=Te.map(V=>Object.assign({},V))),Y&&(R._redirectEventId=Y),R}static async _fromIdTokenResponse(e,t,n=!1){const a=new bl;a.updateFromServerResponse(t);const l=new yi({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:n});return await rh(l),l}static async _fromGetAccountInfoResponse(e,t,n){const a=t.users[0];te(a.localId!==void 0,"internal-error");const l=a.providerUserInfo!==void 0?mA(a.providerUserInfo):[],c=!(a.email&&a.passwordHash)&&!(l!=null&&l.length),f=new bl;f.updateFromIdToken(n);const m=new yi({uid:a.localId,auth:e,stsTokenManager:f,isAnonymous:c}),p={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new P_(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!(l!=null&&l.length)};return Object.assign(m,p),m}}/**
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
 */const L0=new Map;function Kn(i){Ei(i instanceof Function,"Expected a class definition");let e=L0.get(i);return e?(Ei(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,L0.set(i,e),e)}/**
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
 */class gA{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}gA.type="NONE";const Nl=gA;/**
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
 */function Wa(i,e,t){return`firebase:${i}:${e}:${t}`}class Il{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:a,name:l}=this.auth;this.fullUserKey=Wa(this.userKey,a.apiKey,l),this.fullPersistenceKey=Wa("persistence",a.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Kf(this.auth,{idToken:e}).catch(()=>{});return t?yi._fromGetAccountInfoResponse(this.auth,t,e):null}return yi._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Il(Kn(Nl),e,n);const a=(await Promise.all(t.map(async p=>{if(await p._isAvailable())return p}))).filter(p=>p);let l=a[0]||Kn(Nl);const c=Wa(n,e.config.apiKey,e.name);let f=null;for(const p of t)try{const y=await p._get(c);if(y){let T;if(typeof y=="string"){const b=await Kf(e,{idToken:y}).catch(()=>{});if(!b)break;T=await yi._fromGetAccountInfoResponse(e,b,y)}else T=yi._fromJSON(e,y);p!==l&&(f=T),l=p;break}}catch{}const m=a.filter(p=>p._shouldAllowMigration);return!l._shouldAllowMigration||!m.length?new Il(l,e,n):(l=m[0],f&&await l._set(c,f.toJSON()),await Promise.all(t.map(async p=>{if(p!==l)try{await p._remove(c)}catch{}})),new Il(l,e,n))}}/**
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
 */function U0(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(vA(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(pA(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(EA(e))return"Blackberry";if(TA(e))return"Webos";if(_A(e))return"Safari";if((e.includes("chrome/")||yA(e))&&!e.includes("edge/"))return"Chrome";if(Sh(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=i.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function pA(i=_t()){return/firefox\//i.test(i)}function _A(i=_t()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function yA(i=_t()){return/crios\//i.test(i)}function vA(i=_t()){return/iemobile/i.test(i)}function Sh(i=_t()){return/android/i.test(i)}function EA(i=_t()){return/blackberry/i.test(i)}function TA(i=_t()){return/webos/i.test(i)}function Rh(i=_t()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function GN(i=_t()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(i)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(i)}function KN(i=_t()){var e;return Rh(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function QN(){return HI()&&document.documentMode===10}function wA(i=_t()){return Rh(i)||Sh(i)||TA(i)||EA(i)||/windows phone/i.test(i)||vA(i)}/**
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
 */function bA(i,e=[]){let t;switch(i){case"Browser":t=U0(_t());break;case"Worker":t=`${U0(_t())}-${i}`;break;default:t=i}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Gs}/${n}`}/**
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
 */class YN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=l=>new Promise((c,f)=>{try{const m=e(l);c(m)}catch(m){f(m)}});n.onAbort=t,this.queue.push(n);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const a of t)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
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
 */async function WN(i,e={}){return At(i,"GET","/v2/passwordPolicy",It(i,e))}/**
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
 */const $N=6;class XN{constructor(e){var t,n,a,l;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=c.minPasswordLength)!==null&&t!==void 0?t:$N,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(a=(n=e.allowedNonAlphanumericCharacters)===null||n===void 0?void 0:n.join(""))!==null&&a!==void 0?a:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,a,l,c,f;const m={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,m),this.validatePasswordCharacterOptions(e,m),m.isValid&&(m.isValid=(t=m.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),m.isValid&&(m.isValid=(n=m.meetsMaxPasswordLength)!==null&&n!==void 0?n:!0),m.isValid&&(m.isValid=(a=m.containsLowercaseLetter)!==null&&a!==void 0?a:!0),m.isValid&&(m.isValid=(l=m.containsUppercaseLetter)!==null&&l!==void 0?l:!0),m.isValid&&(m.isValid=(c=m.containsNumericCharacter)!==null&&c!==void 0?c:!0),m.isValid&&(m.isValid=(f=m.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),m}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),a&&(t.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let a=0;a<e.length;a++)n=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,a,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
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
 */class JN{constructor(e,t,n,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new B0(this),this.idTokenSubscription=new B0(this),this.beforeStateQueue=new YN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=lA,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Kn(t)),this._initializationPromise=this.queue(async()=>{var n,a,l;if(!this._deleted&&(this.persistenceManager=await Il.create(this,e),(n=this._resolvePersistenceManagerAvailable)===null||n===void 0||n.call(this),!this._deleted)){if(!((a=this._popupRedirectResolver)===null||a===void 0)&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Kf(this,{idToken:e}),n=await yi._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(ht(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(f,f))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let a=n,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,f=a==null?void 0:a._redirectEventId,m=await this.tryRedirectSignIn(e);(!c||c===f)&&(m!=null&&m.user)&&(a=m.user,l=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(a)}catch(c){a=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await rh(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=DN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ht(this.app))return Promise.reject(Zt(this));const t=e?Ee(e):null;return t&&te(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ht(this.app)?Promise.reject(Zt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ht(this.app)?Promise.reject(Zt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Kn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await WN(this),t=new XN(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new co("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await HN(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Kn(e)||this._popupRedirectResolver;te(t,this,"argument-error"),this.redirectPersistenceManager=await Il.create(this,[Kn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,a){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(te(f,this,"internal-error"),f.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const m=e.addObserver(t,n,a);return()=>{c=!0,m()}}else{const m=e.addObserver(t);return()=>{c=!0,m()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=bA(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const a=await this._getAppCheckToken();return a&&(t["X-Firebase-AppCheck"]=a),t}async _getAppCheckToken(){var e;if(ht(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&RN(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function yt(i){return Ee(i)}class B0{constructor(e){this.auth=e,this.observer=null,this.addObserver=QI(t=>this.observer=t)}get next(){return te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ch={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ZN(i){Ch=i}function Cy(i){return Ch.loadJS(i)}function eO(){return Ch.recaptchaV2Script}function tO(){return Ch.recaptchaEnterpriseScript}function nO(){return Ch.gapiScript}function IA(i){return`__${i}${Math.floor(Math.random()*1e6)}`}/**
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
 */const iO=500,rO=6e4,yf=1e12;class sO{constructor(e){this.auth=e,this.counter=yf,this._widgets=new Map}render(e,t){const n=this.counter;return this._widgets.set(n,new lO(e,this.auth.name,t||{})),this.counter++,n}reset(e){var t;const n=e||yf;(t=this._widgets.get(n))===null||t===void 0||t.delete(),this._widgets.delete(n)}getResponse(e){var t;const n=e||yf;return((t=this._widgets.get(n))===null||t===void 0?void 0:t.getResponse())||""}async execute(e){var t;const n=e||yf;return(t=this._widgets.get(n))===null||t===void 0||t.execute(),""}}class aO{constructor(){this.enterprise=new oO}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class oO{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class lO{constructor(e,t,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const a=typeof e=="string"?document.getElementById(e):e;te(a,"argument-error",{appName:t}),this.container=a,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=uO(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},rO)},iO))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function uO(i){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<i;n++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}const cO="recaptcha-enterprise",Fc="NO_RECAPTCHA";class AA{constructor(e){this.type=cO,this.auth=yt(e)}async verify(e="verify",t=!1){async function n(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(c,f)=>{fA(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(m=>{if(m.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const p=new dA(m);return l.tenantId==null?l._agentRecaptchaConfig=p:l._tenantRecaptchaConfigs[l.tenantId]=p,c(p.siteKey)}}).catch(m=>{f(m)})})}function a(l,c,f){const m=window.grecaptcha;k0(m)?m.enterprise.ready(()=>{m.enterprise.execute(l,{action:e}).then(p=>{c(p)}).catch(()=>{c(Fc)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new aO().execute("siteKey",{action:"verify"}):new Promise((l,c)=>{n(this.auth).then(f=>{if(!t&&k0(window.grecaptcha))a(f,l,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let m=tO();m.length!==0&&(m+=f),Cy(m).then(()=>{a(f,l,c)}).catch(p=>{c(p)})}}).catch(f=>{c(f)})})}}async function wc(i,e,t,n=!1,a=!1){const l=new AA(i);let c;if(a)c=Fc;else try{c=await l.verify(t)}catch{c=await l.verify(t,!0)}const f=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const m=f.phoneEnrollmentInfo.phoneNumber,p=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:m,recaptchaToken:p,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const m=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:m,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return n?Object.assign(f,{captchaResp:c}):Object.assign(f,{captchaResponse:c}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function Rs(i,e,t,n,a){var l,c;if(a==="EMAIL_PASSWORD_PROVIDER")if(!((l=i._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const f=await wc(i,e,t,t==="getOobCode");return n(i,f)}else return n(i,e).catch(async f=>{if(f.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const m=await wc(i,e,t,t==="getOobCode");return n(i,m)}else return Promise.reject(f)});else if(a==="PHONE_PROVIDER")if(!((c=i._getRecaptchaConfig())===null||c===void 0)&&c.isProviderEnabled("PHONE_PROVIDER")){const f=await wc(i,e,t);return n(i,f).catch(async m=>{var p;if(((p=i._getRecaptchaConfig())===null||p===void 0?void 0:p.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(m.code==="auth/missing-recaptcha-token"||m.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${t} flow.`);const y=await wc(i,e,t,!1,!0);return n(i,y)}return Promise.reject(m)})}else{const f=await wc(i,e,t,!1,!0);return n(i,f)}else return Promise.reject(a+" provider is not supported.")}async function hO(i){const e=yt(i),t=await fA(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new dA(t);e.tenantId==null?e._agentRecaptchaConfig=n:e._tenantRecaptchaConfigs[e.tenantId]=n,n.isAnyProviderEnabled()&&new AA(e).verify()}function dO(i,e){const t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map(Kn);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function fO(i,e,t){const n=yt(i);te(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const a=!!(t!=null&&t.disableWarnings),l=SA(e),{host:c,port:f}=mO(e),m=f===null?"":`:${f}`,p={url:`${l}//${c}${m}/`},y=Object.freeze({host:c,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:a})});if(!n._canInitEmulator){te(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),te(Ns(p,n.config.emulator)&&Ns(y,n.emulatorConfig),n,"emulator-config-failed");return}n.config.emulator=p,n.emulatorConfig=y,n.settings.appVerificationDisabledForTesting=!0,Jl(c)?(zI(`${l}//${c}${m}`),FI("Auth",!0)):a||gO()}function SA(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function mO(i){const e=SA(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(n);if(a){const l=a[1];return{host:l,port:z0(n.substr(l.length+1))}}else{const[l,c]=n.split(":");return{host:l,port:z0(c)}}}function z0(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function gO(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
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
 */class tu{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Gi("not implemented")}_getIdTokenResponse(e){return Gi("not implemented")}_linkToIdToken(e,t){return Gi("not implemented")}_getReauthenticationResolver(e){return Gi("not implemented")}}/**
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
 */async function RA(i,e){return At(i,"POST","/v1/accounts:resetPassword",It(i,e))}async function pO(i,e){return At(i,"POST","/v1/accounts:update",e)}async function _O(i,e){return At(i,"POST","/v1/accounts:signUp",e)}async function yO(i,e){return At(i,"POST","/v1/accounts:update",It(i,e))}/**
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
 */async function vO(i,e){return kr(i,"POST","/v1/accounts:signInWithPassword",It(i,e))}async function ym(i,e){return At(i,"POST","/v1/accounts:sendOobCode",It(i,e))}async function EO(i,e){return ym(i,e)}async function TO(i,e){return ym(i,e)}async function wO(i,e){return ym(i,e)}async function bO(i,e){return ym(i,e)}/**
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
 */async function IO(i,e){return kr(i,"POST","/v1/accounts:signInWithEmailLink",It(i,e))}async function AO(i,e){return kr(i,"POST","/v1/accounts:signInWithEmailLink",It(i,e))}/**
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
 */class sh extends tu{constructor(e,t,n,a=null){super("password",n),this._email=e,this._password=t,this._tenantId=a}static _fromEmailAndPassword(e,t){return new sh(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new sh(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Rs(e,t,"signInWithPassword",vO,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return IO(e,{email:this._email,oobCode:this._password});default:cn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Rs(e,n,"signUpPassword",_O,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return AO(e,{idToken:t,email:this._email,oobCode:this._password});default:cn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Dr(i,e){return kr(i,"POST","/v1/accounts:signInWithIdp",It(i,e))}/**
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
 */const SO="http://localhost";class Xi extends tu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Xi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):cn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:a}=t,l=by(t,["providerId","signInMethod"]);if(!n||!a)return null;const c=new Xi(n,a);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return Dr(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Dr(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Dr(e,t)}buildRequest(){const e={requestUri:SO,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Zl(t)}return e}}/**
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
 */async function F0(i,e){return At(i,"POST","/v1/accounts:sendVerificationCode",It(i,e))}async function RO(i,e){return kr(i,"POST","/v1/accounts:signInWithPhoneNumber",It(i,e))}async function CO(i,e){const t=await kr(i,"POST","/v1/accounts:signInWithPhoneNumber",It(i,e));if(t.temporaryProof)throw Vc(i,"account-exists-with-different-credential",t);return t}const DO={USER_NOT_FOUND:"user-not-found"};async function PO(i,e){const t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return kr(i,"POST","/v1/accounts:signInWithPhoneNumber",It(i,t),DO)}/**
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
 */class $a extends tu{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new $a({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new $a({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return RO(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return CO(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return PO(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:a}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:a}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:a,temporaryProof:l}=e;return!n&&!t&&!a&&!l?null:new $a({verificationId:t,verificationCode:n,phoneNumber:a,temporaryProof:l})}}/**
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
 */function NO(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function OO(i){const e=wl(Oc(i)).link,t=e?wl(Oc(e)).deep_link_id:null,n=wl(Oc(i)).deep_link_id;return(n?wl(Oc(n)).link:null)||n||t||e||i}class vm{constructor(e){var t,n,a,l,c,f;const m=wl(Oc(e)),p=(t=m.apiKey)!==null&&t!==void 0?t:null,y=(n=m.oobCode)!==null&&n!==void 0?n:null,T=NO((a=m.mode)!==null&&a!==void 0?a:null);te(p&&y&&T,"argument-error"),this.apiKey=p,this.operation=T,this.code=y,this.continueUrl=(l=m.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(c=m.lang)!==null&&c!==void 0?c:null,this.tenantId=(f=m.tenantId)!==null&&f!==void 0?f:null}static parseLink(e){const t=OO(e);try{return new vm(t)}catch{return null}}}/**
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
 */class Ks{constructor(){this.providerId=Ks.PROVIDER_ID}static credential(e,t){return sh._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=vm.parseLink(t);return te(n,"argument-error"),sh._fromEmailAndCode(e,n.code,n.tenantId)}}Ks.PROVIDER_ID="password";Ks.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ks.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Mr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class nu extends Mr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Al extends nu{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return te("providerId"in t&&"signInMethod"in t,"argument-error"),Xi._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return te(e.idToken||e.accessToken,"argument-error"),Xi._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Al.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Al.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n,oauthTokenSecret:a,pendingToken:l,nonce:c,providerId:f}=e;if(!n&&!a&&!t&&!l||!f)return null;try{return new Al(f)._credential({idToken:t,accessToken:n,nonce:c,pendingToken:l})}catch{return null}}}/**
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
 */class Fi extends nu{constructor(){super("facebook.com")}static credential(e){return Xi._fromParams({providerId:Fi.PROVIDER_ID,signInMethod:Fi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fi.credentialFromTaggedObject(e)}static credentialFromError(e){return Fi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fi.credential(e.oauthAccessToken)}catch{return null}}}Fi.FACEBOOK_SIGN_IN_METHOD="facebook.com";Fi.PROVIDER_ID="facebook.com";/**
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
 */class qi extends nu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Xi._fromParams({providerId:qi.PROVIDER_ID,signInMethod:qi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return qi.credentialFromTaggedObject(e)}static credentialFromError(e){return qi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return qi.credential(t,n)}catch{return null}}}qi.GOOGLE_SIGN_IN_METHOD="google.com";qi.PROVIDER_ID="google.com";/**
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
 */class ji extends nu{constructor(){super("github.com")}static credential(e){return Xi._fromParams({providerId:ji.PROVIDER_ID,signInMethod:ji.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ji.credentialFromTaggedObject(e)}static credentialFromError(e){return ji.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ji.credential(e.oauthAccessToken)}catch{return null}}}ji.GITHUB_SIGN_IN_METHOD="github.com";ji.PROVIDER_ID="github.com";/**
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
 */const VO="http://localhost";class Ol extends tu{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return Dr(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Dr(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Dr(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:a,pendingToken:l}=t;return!n||!a||!l||n!==a?null:new Ol(n,l)}static _create(e,t){return new Ol(e,t)}buildRequest(){return{requestUri:VO,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const xO="saml.";class Qf extends Mr{constructor(e){te(e.startsWith(xO),"argument-error"),super(e)}static credentialFromResult(e){return Qf.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return Qf.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=Ol.fromJSON(e);return te(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:n}=e;if(!t||!n)return null;try{return Ol._create(n,t)}catch{return null}}}/**
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
 */class Hi extends nu{constructor(){super("twitter.com")}static credential(e,t){return Xi._fromParams({providerId:Hi.PROVIDER_ID,signInMethod:Hi.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Hi.credentialFromTaggedObject(e)}static credentialFromError(e){return Hi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Hi.credential(t,n)}catch{return null}}}Hi.TWITTER_SIGN_IN_METHOD="twitter.com";Hi.PROVIDER_ID="twitter.com";/**
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
 */async function CA(i,e){return kr(i,"POST","/v1/accounts:signUp",It(i,e))}/**
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
 */class ci{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,a=!1){const l=await yi._fromIdTokenResponse(e,n,a),c=q0(n);return new ci({user:l,providerId:c,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const a=q0(n);return new ci({user:e,providerId:a,_tokenResponse:n,operationType:t})}}function q0(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
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
 */async function kO(i){var e;if(ht(i.app))return Promise.reject(Zt(i));const t=yt(i);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new ci({user:t.currentUser,providerId:null,operationType:"signIn"});const n=await CA(t,{returnSecureToken:!0}),a=await ci._fromIdTokenResponse(t,"signIn",n,!0);return await t._updateCurrentUser(a.user),a}/**
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
 */class Yf extends In{constructor(e,t,n,a){var l;super(t.code,t.message),this.operationType=n,this.user=a,Object.setPrototypeOf(this,Yf.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,a){return new Yf(e,t,n,a)}}function DA(i,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Yf._fromErrorAndOperation(i,l,e,n):l})}/**
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
 */function PA(i){return new Set(i.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function MO(i,e){const t=Ee(i);await Em(!0,t,e);const{providerUserInfo:n}=await LN(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),a=PA(n||[]);return t.providerData=t.providerData.filter(l=>a.has(l.providerId)),a.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function Dy(i,e,t=!1){const n=await Nr(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return ci._forOperation(i,"link",n)}async function Em(i,e,t){await rh(e);const n=PA(e.providerData),a=i===!1?"provider-already-linked":"no-such-provider";te(n.has(t)===i,e.auth,a)}/**
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
 */async function NA(i,e,t=!1){const{auth:n}=i;if(ht(n.app))return Promise.reject(Zt(n));const a="reauthenticate";try{const l=await Nr(i,DA(n,a,e,i),t);te(l.idToken,n,"internal-error");const c=_m(l.idToken);te(c,n,"internal-error");const{sub:f}=c;return te(i.uid===f,n,"user-mismatch"),ci._forOperation(i,a,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&cn(n,"user-mismatch"),l}}/**
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
 */async function OA(i,e,t=!1){if(ht(i.app))return Promise.reject(Zt(i));const n="signIn",a=await DA(i,n,e),l=await ci._fromIdTokenResponse(i,n,a);return t||await i._updateCurrentUser(l.user),l}async function Tm(i,e){return OA(yt(i),e)}async function VA(i,e){const t=Ee(i);return await Em(!1,t,e.providerId),Dy(t,e)}async function xA(i,e){return NA(Ee(i),e)}/**
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
 */async function LO(i,e){return kr(i,"POST","/v1/accounts:signInWithCustomToken",It(i,e))}/**
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
 */async function UO(i,e){if(ht(i.app))return Promise.reject(Zt(i));const t=yt(i),n=await LO(t,{token:e,returnSecureToken:!0}),a=await ci._fromIdTokenResponse(t,"signIn",n);return await t._updateCurrentUser(a.user),a}/**
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
 */class Dh{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?Py._fromServerResponse(e,t):"totpInfo"in t?Ny._fromServerResponse(e,t):cn(e,"internal-error")}}class Py extends Dh{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new Py(t)}}class Ny extends Dh{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new Ny(t)}}/**
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
 */function wm(i,e,t){var n;te(((n=t.url)===null||n===void 0?void 0:n.length)>0,i,"invalid-continue-uri"),te(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,i,"invalid-dynamic-link-domain"),te(typeof t.linkDomain>"u"||t.linkDomain.length>0,i,"invalid-hosting-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.linkDomain=t.linkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(te(t.iOS.bundleId.length>0,i,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(te(t.android.packageName.length>0,i,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
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
 */async function Oy(i){const e=yt(i);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function BO(i,e,t){const n=yt(i),a={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&wm(n,a,t),await Rs(n,a,"getOobCode",TO,"EMAIL_PASSWORD_PROVIDER")}async function zO(i,e,t){await RA(Ee(i),{oobCode:e,newPassword:t}).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&Oy(i),n})}async function FO(i,e){await yO(Ee(i),{oobCode:e})}async function kA(i,e){const t=Ee(i),n=await RA(t,{oobCode:e}),a=n.requestType;switch(te(a,t,"internal-error"),a){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":te(n.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":te(n.mfaInfo,t,"internal-error");default:te(n.email,t,"internal-error")}let l=null;return n.mfaInfo&&(l=Dh._fromServerResponse(yt(t),n.mfaInfo)),{data:{email:(n.requestType==="VERIFY_AND_CHANGE_EMAIL"?n.newEmail:n.email)||null,previousEmail:(n.requestType==="VERIFY_AND_CHANGE_EMAIL"?n.email:n.newEmail)||null,multiFactorInfo:l},operation:a}}async function qO(i,e){const{data:t}=await kA(Ee(i),e);return t.email}async function jO(i,e,t){if(ht(i.app))return Promise.reject(Zt(i));const n=yt(i),c=await Rs(n,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",CA,"EMAIL_PASSWORD_PROVIDER").catch(m=>{throw m.code==="auth/password-does-not-meet-requirements"&&Oy(i),m}),f=await ci._fromIdTokenResponse(n,"signIn",c);return await n._updateCurrentUser(f.user),f}function HO(i,e,t){return ht(i.app)?Promise.reject(Zt(i)):Tm(Ee(i),Ks.credential(e,t)).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&Oy(i),n})}/**
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
 */async function GO(i,e,t){const n=yt(i),a={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function l(c,f){te(f.handleCodeInApp,n,"argument-error"),f&&wm(n,c,f)}l(a,t),await Rs(n,a,"getOobCode",wO,"EMAIL_PASSWORD_PROVIDER")}function KO(i,e){const t=vm.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function QO(i,e,t){if(ht(i.app))return Promise.reject(Zt(i));const n=Ee(i),a=Ks.credentialWithLink(e,t||ih());return te(a._tenantId===(n.tenantId||null),n,"tenant-id-mismatch"),Tm(n,a)}/**
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
 */async function YO(i,e){return At(i,"POST","/v1/accounts:createAuthUri",It(i,e))}/**
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
 */async function WO(i,e){const t=Sy()?ih():"http://localhost",n={identifier:e,continueUri:t},{signinMethods:a}=await YO(Ee(i),n);return a||[]}async function $O(i,e){const t=Ee(i),a={requestType:"VERIFY_EMAIL",idToken:await i.getIdToken()};e&&wm(t.auth,a,e);const{email:l}=await EO(t.auth,a);l!==i.email&&await i.reload()}async function XO(i,e,t){const n=Ee(i),l={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await i.getIdToken(),newEmail:e};t&&wm(n.auth,l,t);const{email:c}=await bO(n.auth,l);c!==i.email&&await i.reload()}/**
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
 */async function JO(i,e){return At(i,"POST","/v1/accounts:update",e)}/**
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
 */async function ZO(i,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const n=Ee(i),l={idToken:await n.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},c=await Nr(n,JO(n.auth,l));n.displayName=c.displayName||null,n.photoURL=c.photoUrl||null;const f=n.providerData.find(({providerId:m})=>m==="password");f&&(f.displayName=n.displayName,f.photoURL=n.photoURL),await n._updateTokensIfNecessary(c)}function eV(i,e){const t=Ee(i);return ht(t.auth.app)?Promise.reject(Zt(t.auth)):MA(t,e,null)}function tV(i,e){return MA(Ee(i),null,e)}async function MA(i,e,t){const{auth:n}=i,l={idToken:await i.getIdToken(),returnSecureToken:!0};e&&(l.email=e),t&&(l.password=t);const c=await Nr(i,pO(n,l));await i._updateTokensIfNecessary(c,!0)}/**
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
 */function nV(i){var e,t;if(!i)return null;const{providerId:n}=i,a=i.rawUserInfo?JSON.parse(i.rawUserInfo):{},l=i.isNewUser||i.kind==="identitytoolkit#SignupNewUserResponse";if(!n&&(i!=null&&i.idToken)){const c=(t=(e=_m(i.idToken))===null||e===void 0?void 0:e.firebase)===null||t===void 0?void 0:t.sign_in_provider;if(c){const f=c!=="anonymous"&&c!=="custom"?c:null;return new Sl(l,f)}}if(!n)return null;switch(n){case"facebook.com":return new iV(l,a);case"github.com":return new rV(l,a);case"google.com":return new sV(l,a);case"twitter.com":return new aV(l,a,i.screenName||null);case"custom":case"anonymous":return new Sl(l,null);default:return new Sl(l,n,a)}}class Sl{constructor(e,t,n={}){this.isNewUser=e,this.providerId=t,this.profile=n}}class LA extends Sl{constructor(e,t,n,a){super(e,t,n),this.username=a}}class iV extends Sl{constructor(e,t){super(e,"facebook.com",t)}}class rV extends LA{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class sV extends Sl{constructor(e,t){super(e,"google.com",t)}}class aV extends LA{constructor(e,t,n){super(e,"twitter.com",t,n)}}function oV(i){const{user:e,_tokenResponse:t}=i;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:nV(t)}/**
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
 */class Ga{constructor(e,t,n){this.type=e,this.credential=t,this.user=n}static _fromIdtoken(e,t){return new Ga("enroll",e,t)}static _fromMfaPendingCredential(e){return new Ga("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,n;if(e!=null&&e.multiFactorSession){if(!((t=e.multiFactorSession)===null||t===void 0)&&t.pendingCredential)return Ga._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((n=e.multiFactorSession)===null||n===void 0)&&n.idToken)return Ga._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class Vy{constructor(e,t,n){this.session=e,this.hints=t,this.signInResolver=n}static _fromError(e,t){const n=yt(e),a=t.customData._serverResponse,l=(a.mfaInfo||[]).map(f=>Dh._fromServerResponse(n,f));te(a.mfaPendingCredential,n,"internal-error");const c=Ga._fromMfaPendingCredential(a.mfaPendingCredential);return new Vy(c,l,async f=>{const m=await f._process(n,c);delete a.mfaInfo,delete a.mfaPendingCredential;const p=Object.assign(Object.assign({},a),{idToken:m.idToken,refreshToken:m.refreshToken});switch(t.operationType){case"signIn":const y=await ci._fromIdTokenResponse(n,t.operationType,p);return await n._updateCurrentUser(y.user),y;case"reauthenticate":return te(t.user,n,"internal-error"),ci._forOperation(t.user,t.operationType,p);default:cn(n,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function lV(i,e){var t;const n=Ee(i),a=e;return te(e.customData.operationType,n,"argument-error"),te((t=a.customData._serverResponse)===null||t===void 0?void 0:t.mfaPendingCredential,n,"argument-error"),Vy._fromError(n,a)}/**
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
 */function j0(i,e){return At(i,"POST","/v2/accounts/mfaEnrollment:start",It(i,e))}function uV(i,e){return At(i,"POST","/v2/accounts/mfaEnrollment:finalize",It(i,e))}function cV(i,e){return At(i,"POST","/v2/accounts/mfaEnrollment:withdraw",It(i,e))}class xy{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(n=>Dh._fromServerResponse(e.auth,n)))})}static _fromUser(e){return new xy(e)}async getSession(){return Ga._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,t){const n=e,a=await this.getSession(),l=await Nr(this.user,n._process(this.user.auth,a,t));return await this.user._updateTokensIfNecessary(l),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,n=await this.user.getIdToken();try{const a=await Nr(this.user,cV(this.user.auth,{idToken:n,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:l})=>l!==t),await this.user._updateTokensIfNecessary(a),await this.user.reload()}catch(a){throw a}}}const f_=new WeakMap;function hV(i){const e=Ee(i);return f_.has(e)||f_.set(e,xy._fromUser(e)),f_.get(e)}const Wf="__sak";/**
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
 */class UA{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Wf,"1"),this.storage.removeItem(Wf),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const dV=1e3,fV=10;class BA extends UA{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=wA(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),a=this.localCache[t];n!==a&&e(t,a,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,f,m)=>{this.notifyListeners(c,m)});return}const n=e.key;t?this.detachListener():this.stopPolling();const a=()=>{const c=this.storage.getItem(n);!t&&this.localCache[n]===c||this.notifyListeners(n,c)},l=this.storage.getItem(n);QN()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,fV):a()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const a of Array.from(n))a(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},dV)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}BA.type="LOCAL";const ky=BA;/**
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
 */class zA extends UA{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}zA.type="SESSION";const Ja=zA;/**
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
 */function mV(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class bm{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(a=>a.isListeningto(e));if(t)return t;const n=new bm(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:a,data:l}=t.data,c=this.handlersMap[a];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:a});const f=Array.from(c).map(async p=>p(t.origin,l)),m=await mV(f);t.ports[0].postMessage({status:"done",eventId:n,eventType:a,response:m})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}bm.receivers=[];/**
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
 */function Ph(i="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return i+t}/**
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
 */class gV{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let l,c;return new Promise((f,m)=>{const p=Ph("",20);a.port1.start();const y=setTimeout(()=>{m(new Error("unsupported_event"))},n);c={messageChannel:a,onMessage(T){const b=T;if(b.data.eventId===p)switch(b.data.status){case"ack":clearTimeout(y),l=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(b.data.response);break;default:clearTimeout(y),clearTimeout(l),m(new Error("invalid_response"));break}}},this.handlers.add(c),a.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:p,data:t},[a.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
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
 */function Lt(){return window}function pV(i){Lt().location.href=i}/**
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
 */function My(){return typeof Lt().WorkerGlobalScope<"u"&&typeof Lt().importScripts=="function"}async function _V(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function yV(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function vV(){return My()?self:null}/**
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
 */const FA="firebaseLocalStorageDb",EV=1,$f="firebaseLocalStorage",qA="fbase_key";class Nh{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Im(i,e){return i.transaction([$f],e?"readwrite":"readonly").objectStore($f)}function TV(){const i=indexedDB.deleteDatabase(FA);return new Nh(i).toPromise()}function N_(){const i=indexedDB.open(FA,EV);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const n=i.result;try{n.createObjectStore($f,{keyPath:qA})}catch(a){t(a)}}),i.addEventListener("success",async()=>{const n=i.result;n.objectStoreNames.contains($f)?e(n):(n.close(),await TV(),e(await N_()))})})}async function H0(i,e,t){const n=Im(i,!0).put({[qA]:e,value:t});return new Nh(n).toPromise()}async function wV(i,e){const t=Im(i,!1).get(e),n=await new Nh(t).toPromise();return n===void 0?null:n.value}function G0(i,e){const t=Im(i,!0).delete(e);return new Nh(t).toPromise()}const bV=800,IV=3;class jA{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await N_(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>IV)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return My()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=bm._getInstance(vV()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await _V(),!this.activeServiceWorker)return;this.sender=new gV(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&!((e=n[0])===null||e===void 0)&&e.fulfilled&&!((t=n[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||yV()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await N_();return await H0(e,Wf,"1"),await G0(e,Wf),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>H0(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>wV(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>G0(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const l=Im(a,!1).getAll();return new Nh(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:a,value:l}of e)n.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(l)&&(this.notifyListeners(a,l),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!n.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const a of Array.from(n))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),bV)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}jA.type="LOCAL";const ah=jA;/**
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
 */function K0(i,e){return At(i,"POST","/v2/accounts/mfaSignIn:start",It(i,e))}function AV(i,e){return At(i,"POST","/v2/accounts/mfaSignIn:finalize",It(i,e))}/**
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
 */const m_=IA("rcb"),SV=new Ah(3e4,6e4);class RV{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=Lt().grecaptcha)===null||e===void 0)&&e.render)}load(e,t=""){return te(CV(t),e,"argument-error"),this.shouldResolveImmediately(t)&&x0(Lt().grecaptcha)?Promise.resolve(Lt().grecaptcha):new Promise((n,a)=>{const l=Lt().setTimeout(()=>{a(jt(e,"network-request-failed"))},SV.get());Lt()[m_]=()=>{Lt().clearTimeout(l),delete Lt()[m_];const f=Lt().grecaptcha;if(!f||!x0(f)){a(jt(e,"internal-error"));return}const m=f.render;f.render=(p,y)=>{const T=m(p,y);return this.counter++,T},this.hostLanguage=t,n(f)};const c=`${eO()}?${Zl({onload:m_,render:"explicit",hl:t})}`;Cy(c).catch(()=>{clearTimeout(l),a(jt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(!((t=Lt().grecaptcha)===null||t===void 0)&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function CV(i){return i.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(i)}class DV{async load(e){return new sO(e)}clearedOneInstance(){}}/**
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
 */const qc="recaptcha",PV={theme:"light",type:"image"};let NV=class{constructor(e,t,n=Object.assign({},PV)){this.parameters=n,this.type=qc,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=yt(e),this.isInvisible=this.parameters.size==="invisible",te(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const a=typeof t=="string"?document.getElementById(t):t;te(a,this.auth,"argument-error"),this.container=a,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new DV:new RV,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),n=t.getResponse(e);return n||new Promise(a=>{const l=c=>{c&&(this.tokenChangeListeners.delete(l),a(c))};this.tokenChangeListeners.add(l),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){te(!this.parameters.sitekey,this.auth,"argument-error"),te(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),te(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(n=>n(t)),typeof e=="function")e(t);else if(typeof e=="string"){const n=Lt()[e];typeof n=="function"&&n(t)}}}assertNotDestroyed(){te(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){te(Sy()&&!My(),this.auth,"internal-error"),await OV(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await kN(this.auth);te(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return te(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function OV(){let i=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}i=()=>e(),window.addEventListener("load",i)}).catch(e=>{throw i&&window.removeEventListener("load",i),e})}/**
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
 */class Ly{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=$a._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function VV(i,e,t){if(ht(i.app))return Promise.reject(Zt(i));const n=yt(i),a=await Am(n,e,Ee(t));return new Ly(a,l=>Tm(n,l))}async function xV(i,e,t){const n=Ee(i);await Em(!1,n,"phone");const a=await Am(n.auth,e,Ee(t));return new Ly(a,l=>VA(n,l))}async function kV(i,e,t){const n=Ee(i);if(ht(n.auth.app))return Promise.reject(Zt(n.auth));const a=await Am(n.auth,e,Ee(t));return new Ly(a,l=>xA(n,l))}async function Am(i,e,t){var n;if(!i._getRecaptchaConfig())try{await hO(i)}catch{console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.")}try{let a;if(typeof e=="string"?a={phoneNumber:e}:a=e,"session"in a){const l=a.session;if("phoneNumber"in a){te(l.type==="enroll",i,"internal-error");const c={idToken:l.credential,phoneEnrollmentInfo:{phoneNumber:a.phoneNumber,clientType:"CLIENT_TYPE_WEB"}};return(await Rs(i,c,"mfaSmsEnrollment",async(y,T)=>{if(T.phoneEnrollmentInfo.captchaResponse===Fc){te((t==null?void 0:t.type)===qc,y,"argument-error");const b=await g_(y,T,t);return j0(y,b)}return j0(y,T)},"PHONE_PROVIDER").catch(y=>Promise.reject(y))).phoneSessionInfo.sessionInfo}else{te(l.type==="signin",i,"internal-error");const c=((n=a.multiFactorHint)===null||n===void 0?void 0:n.uid)||a.multiFactorUid;te(c,i,"missing-multi-factor-info");const f={mfaPendingCredential:l.credential,mfaEnrollmentId:c,phoneSignInInfo:{clientType:"CLIENT_TYPE_WEB"}};return(await Rs(i,f,"mfaSmsSignIn",async(T,b)=>{if(b.phoneSignInInfo.captchaResponse===Fc){te((t==null?void 0:t.type)===qc,T,"argument-error");const O=await g_(T,b,t);return K0(T,O)}return K0(T,b)},"PHONE_PROVIDER").catch(T=>Promise.reject(T))).phoneResponseInfo.sessionInfo}}else{const l={phoneNumber:a.phoneNumber,clientType:"CLIENT_TYPE_WEB"};return(await Rs(i,l,"sendVerificationCode",async(p,y)=>{if(y.captchaResponse===Fc){te((t==null?void 0:t.type)===qc,p,"argument-error");const T=await g_(p,y,t);return F0(p,T)}return F0(p,y)},"PHONE_PROVIDER").catch(p=>Promise.reject(p))).sessionInfo}}finally{t==null||t._reset()}}async function MV(i,e){const t=Ee(i);if(ht(t.auth.app))return Promise.reject(Zt(t.auth));await Dy(t,e)}async function g_(i,e,t){te(t.type===qc,i,"argument-error");const n=await t.verify();te(typeof n=="string",i,"argument-error");const a=Object.assign({},e);if("phoneEnrollmentInfo"in a){const l=a.phoneEnrollmentInfo.phoneNumber,c=a.phoneEnrollmentInfo.captchaResponse,f=a.phoneEnrollmentInfo.clientType,m=a.phoneEnrollmentInfo.recaptchaVersion;return Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:n,captchaResponse:c,clientType:f,recaptchaVersion:m}}),a}else if("phoneSignInInfo"in a){const l=a.phoneSignInInfo.captchaResponse,c=a.phoneSignInInfo.clientType,f=a.phoneSignInInfo.recaptchaVersion;return Object.assign(a,{phoneSignInInfo:{recaptchaToken:n,captchaResponse:l,clientType:c,recaptchaVersion:f}}),a}else return Object.assign(a,{recaptchaToken:n}),a}/**
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
 */let Za=class Cf{constructor(e){this.providerId=Cf.PROVIDER_ID,this.auth=yt(e)}verifyPhoneNumber(e,t){return Am(this.auth,e,Ee(t))}static credential(e,t){return $a._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Cf.credentialFromTaggedObject(t)}static credentialFromError(e){return Cf.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?$a._fromTokenResponse(t,n):null}};Za.PROVIDER_ID="phone";Za.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function ho(i,e){return e?Kn(e):(te(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class Uy extends tu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Dr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Dr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Dr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function LV(i){return OA(i.auth,new Uy(i),i.bypassAuthState)}function UV(i){const{auth:e,user:t}=i;return te(t,e,"internal-error"),NA(t,new Uy(i),i.bypassAuthState)}async function BV(i){const{auth:e,user:t}=i;return te(t,e,"internal-error"),Dy(t,new Uy(i),i.bypassAuthState)}/**
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
 */class HA{constructor(e,t,n,a,l=!1){this.auth=e,this.resolver=n,this.user=a,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:a,tenantId:l,error:c,type:f}=e;if(c){this.reject(c);return}const m={auth:this.auth,requestUri:t,sessionId:n,tenantId:l||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(m))}catch(p){this.reject(p)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return LV;case"linkViaPopup":case"linkViaRedirect":return BV;case"reauthViaPopup":case"reauthViaRedirect":return UV;default:cn(this.auth,"internal-error")}}resolve(e){Ei(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ei(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const zV=new Ah(2e3,1e4);async function FV(i,e,t){if(ht(i.app))return Promise.reject(jt(i,"operation-not-supported-in-this-environment"));const n=yt(i);eu(i,e,Mr);const a=ho(n,t);return new Rr(n,"signInViaPopup",e,a).executeNotNull()}async function qV(i,e,t){const n=Ee(i);if(ht(n.auth.app))return Promise.reject(jt(n.auth,"operation-not-supported-in-this-environment"));eu(n.auth,e,Mr);const a=ho(n.auth,t);return new Rr(n.auth,"reauthViaPopup",e,a,n).executeNotNull()}async function jV(i,e,t){const n=Ee(i);eu(n.auth,e,Mr);const a=ho(n.auth,t);return new Rr(n.auth,"linkViaPopup",e,a,n).executeNotNull()}class Rr extends HA{constructor(e,t,n,a,l){super(e,t,a,l),this.provider=n,this.authWindow=null,this.pollId=null,Rr.currentPopupAction&&Rr.currentPopupAction.cancel(),Rr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return te(e,this.auth,"internal-error"),e}async onExecution(){Ei(this.filter.length===1,"Popup operations only handle one event");const e=Ph();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(jt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(jt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Rr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if(!((n=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(jt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,zV.get())};e()}}Rr.currentPopupAction=null;/**
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
 */const HV="pendingRedirect",jc=new Map;class GV extends HA{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=jc.get(this.auth._key());if(!e){try{const n=await KV(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}jc.set(this.auth._key(),e)}return this.bypassAuthState||jc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function KV(i,e){const t=KA(e),n=GA(i);if(!await n._isAvailable())return!1;const a=await n._get(t)==="true";return await n._remove(t),a}async function By(i,e){return GA(i)._set(KA(e),"true")}function QV(){jc.clear()}function zy(i,e){jc.set(i._key(),e)}function GA(i){return Kn(i._redirectPersistence)}function KA(i){return Wa(HV,i.config.apiKey,i.name)}/**
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
 */function YV(i,e,t){return WV(i,e,t)}async function WV(i,e,t){if(ht(i.app))return Promise.reject(Zt(i));const n=yt(i);eu(i,e,Mr),await n._initializationPromise;const a=ho(n,t);return await By(a,n),a._openRedirect(n,e,"signInViaRedirect")}function $V(i,e,t){return XV(i,e,t)}async function XV(i,e,t){const n=Ee(i);if(eu(n.auth,e,Mr),ht(n.auth.app))return Promise.reject(Zt(n.auth));await n.auth._initializationPromise;const a=ho(n.auth,t);await By(a,n.auth);const l=await QA(n);return a._openRedirect(n.auth,e,"reauthViaRedirect",l)}function JV(i,e,t){return ZV(i,e,t)}async function ZV(i,e,t){const n=Ee(i);eu(n.auth,e,Mr),await n.auth._initializationPromise;const a=ho(n.auth,t);await Em(!1,n,e.providerId),await By(a,n.auth);const l=await QA(n);return a._openRedirect(n.auth,e,"linkViaRedirect",l)}async function ex(i,e){return await yt(i)._initializationPromise,Sm(i,e,!1)}async function Sm(i,e,t=!1){if(ht(i.app))return Promise.reject(Zt(i));const n=yt(i),a=ho(n,e),c=await new GV(n,a,t).execute();return c&&!t&&(delete c.user._redirectEventId,await n._persistUserIfCurrent(c.user),await n._setRedirectUser(null,e)),c}async function QA(i){const e=Ph(`${i.uid}:::`);return i._redirectEventId=e,await i.auth._setRedirectUser(i),await i.auth._persistUserIfCurrent(i),e}/**
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
 */const tx=10*60*1e3;class YA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!nx(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!WA(e)){const a=((n=e.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";t.onError(jt(this.auth,a))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=tx&&this.cachedEventUids.clear(),this.cachedEventUids.has(Q0(e))}saveEventToCache(e){this.cachedEventUids.add(Q0(e)),this.lastProcessedEventTime=Date.now()}}function Q0(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function WA({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function nx(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return WA(i);default:return!1}}/**
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
 */async function $A(i,e={}){return At(i,"GET","/v1/projects",e)}/**
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
 */const ix=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,rx=/^https?/;async function sx(i){if(i.config.emulator)return;const{authorizedDomains:e}=await $A(i);for(const t of e)try{if(ax(t))return}catch{}cn(i,"unauthorized-domain")}function ax(i){const e=ih(),{protocol:t,hostname:n}=new URL(e);if(i.startsWith("chrome-extension://")){const c=new URL(i);return c.hostname===""&&n===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===n}if(!rx.test(t))return!1;if(ix.test(i))return n===i;const a=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(n)}/**
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
 */const ox=new Ah(3e4,6e4);function Y0(){const i=Lt().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function lx(i){return new Promise((e,t)=>{var n,a,l;function c(){Y0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Y0(),t(jt(i,"network-request-failed"))},timeout:ox.get()})}if(!((a=(n=Lt().gapi)===null||n===void 0?void 0:n.iframes)===null||a===void 0)&&a.Iframe)e(gapi.iframes.getContext());else if(!((l=Lt().gapi)===null||l===void 0)&&l.load)c();else{const f=IA("iframefcb");return Lt()[f]=()=>{gapi.load?c():t(jt(i,"network-request-failed"))},Cy(`${nO()}?onload=${f}`).catch(m=>t(m))}}).catch(e=>{throw Df=null,e})}let Df=null;function ux(i){return Df=Df||lx(i),Df}/**
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
 */const cx=new Ah(5e3,15e3),hx="__/auth/iframe",dx="emulator/auth/iframe",fx={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},mx=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function gx(i){const e=i.config;te(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?Ry(e,dx):`https://${i.config.authDomain}/${hx}`,n={apiKey:e.apiKey,appName:i.name,v:Gs},a=mx.get(i.config.apiHost);a&&(n.eid=a);const l=i._getFrameworks();return l.length&&(n.fw=l.join(",")),`${t}?${Zl(n).slice(1)}`}async function px(i){const e=await ux(i),t=Lt().gapi;return te(t,i,"internal-error"),e.open({where:document.body,url:gx(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:fx,dontclear:!0},n=>new Promise(async(a,l)=>{await n.restyle({setHideOnLeave:!1});const c=jt(i,"network-request-failed"),f=Lt().setTimeout(()=>{l(c)},cx.get());function m(){Lt().clearTimeout(f),a(n)}n.ping(m).then(m,()=>{l(c)})}))}/**
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
 */const _x={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},yx=500,vx=600,Ex="_blank",Tx="http://localhost";class W0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function wx(i,e,t,n=yx,a=vx){const l=Math.max((window.screen.availHeight-a)/2,0).toString(),c=Math.max((window.screen.availWidth-n)/2,0).toString();let f="";const m=Object.assign(Object.assign({},_x),{width:n.toString(),height:a.toString(),top:l,left:c}),p=_t().toLowerCase();t&&(f=yA(p)?Ex:t),pA(p)&&(e=e||Tx,m.scrollbars="yes");const y=Object.entries(m).reduce((b,[O,G])=>`${b}${O}=${G},`,"");if(KN(p)&&f!=="_self")return bx(e||"",f),new W0(null);const T=window.open(e||"",f,y);te(T,i,"popup-blocked");try{T.focus()}catch{}return new W0(T)}function bx(i,e){const t=document.createElement("a");t.href=i,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
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
 */const Ix="__/auth/handler",Ax="emulator/auth/handler",Sx=encodeURIComponent("fac");async function O_(i,e,t,n,a,l){te(i.config.authDomain,i,"auth-domain-config-required"),te(i.config.apiKey,i,"invalid-api-key");const c={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:n,v:Gs,eventId:a};if(e instanceof Mr){e.setDefaultLanguage(i.languageCode),c.providerId=e.providerId||"",ZD(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[y,T]of Object.entries(l||{}))c[y]=T}if(e instanceof nu){const y=e.getScopes().filter(T=>T!=="");y.length>0&&(c.scopes=y.join(","))}i.tenantId&&(c.tid=i.tenantId);const f=c;for(const y of Object.keys(f))f[y]===void 0&&delete f[y];const m=await i._getAppCheckToken(),p=m?`#${Sx}=${encodeURIComponent(m)}`:"";return`${Rx(i)}?${Zl(f).slice(1)}${p}`}function Rx({config:i}){return i.emulator?Ry(i,Ax):`https://${i.authDomain}/${Ix}`}/**
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
 */const p_="webStorageSupport";class Cx{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ja,this._completeRedirectFn=Sm,this._overrideRedirectResult=zy}async _openPopup(e,t,n,a){var l;Ei((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const c=await O_(e,t,n,ih(),a);return wx(e,c,Ph())}async _openRedirect(e,t,n,a){await this._originValidation(e);const l=await O_(e,t,n,ih(),a);return pV(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:a,promise:l}=this.eventManagers[t];return a?Promise.resolve(a):(Ei(l,"If manager is not set, promise should be"),l)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await px(e),n=new YA(e);return t.register("authEvent",a=>(te(a==null?void 0:a.authEvent,e,"invalid-auth-event"),{status:n.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(p_,{type:p_},a=>{var l;const c=(l=a==null?void 0:a[0])===null||l===void 0?void 0:l[p_];c!==void 0&&t(!!c),cn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=sx(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return wA()||_A()||Rh()}}const Dx=Cx;class Px{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return Gi("unexpected MultiFactorSessionType")}}}class Fy extends Px{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Fy(e)}_finalizeEnroll(e,t,n){return uV(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return AV(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class XA{constructor(){}static assertion(e){return Fy._fromCredential(e)}}XA.FACTOR_ID="phone";var $0="@firebase/auth",X0="1.10.7";/**
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
 */class Nx{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Ox(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Vx(i){xs(new $i("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:f}=n.options;te(c&&!c.includes(":"),"invalid-api-key",{appName:n.name});const m={apiKey:c,authDomain:f,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:bA(i)},p=new JN(n,a,l,m);return dO(p,t),p},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),xs(new $i("auth-internal",e=>{const t=yt(e.getProvider("auth").getImmediate());return(n=>new Nx(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),vi($0,X0,Ox(i)),vi($0,X0,"esm2017")}/**
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
 */const xx=5*60;FD("authIdTokenMaxAge");function kx(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}ZN({loadJS(i){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",i),n.onload=e,n.onerror=a=>{const l=jt("internal-error");l.customData=a,t(l)},n.type="text/javascript",n.charset="UTF-8",kx().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Vx("Browser");/**
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
 */function eo(){return window}/**
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
 */const Mx=2e3;async function Lx(i,e,t){var n;const{BuildInfo:a}=eo();Ei(e.sessionId,"AuthEvent did not contain a session ID");const l=await qx(e.sessionId),c={};return Rh()?c.ibi=a.packageName:Sh()?c.apn=a.packageName:cn(i,"operation-not-supported-in-this-environment"),a.displayName&&(c.appDisplayName=a.displayName),c.sessionId=l,O_(i,t,e.type,void 0,(n=e.eventId)!==null&&n!==void 0?n:void 0,c)}async function Ux(i){const{BuildInfo:e}=eo(),t={};Rh()?t.iosBundleId=e.packageName:Sh()?t.androidPackageName=e.packageName:cn(i,"operation-not-supported-in-this-environment"),await $A(i,t)}function Bx(i){const{cordova:e}=eo();return new Promise(t=>{e.plugins.browsertab.isAvailable(n=>{let a=null;n?e.plugins.browsertab.openUrl(i):a=e.InAppBrowser.open(i,GN()?"_blank":"_system","location=yes"),t(a)})})}async function zx(i,e,t){const{cordova:n}=eo();let a=()=>{};try{await new Promise((l,c)=>{let f=null;function m(){var T;l();const b=(T=n.plugins.browsertab)===null||T===void 0?void 0:T.close;typeof b=="function"&&b(),typeof(t==null?void 0:t.close)=="function"&&t.close()}function p(){f||(f=window.setTimeout(()=>{c(jt(i,"redirect-cancelled-by-user"))},Mx))}function y(){(document==null?void 0:document.visibilityState)==="visible"&&p()}e.addPassiveListener(m),document.addEventListener("resume",p,!1),Sh()&&document.addEventListener("visibilitychange",y,!1),a=()=>{e.removePassiveListener(m),document.removeEventListener("resume",p,!1),document.removeEventListener("visibilitychange",y,!1),f&&window.clearTimeout(f)}})}finally{a()}}function Fx(i){var e,t,n,a,l,c,f,m,p,y;const T=eo();te(typeof((e=T==null?void 0:T.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",i,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),te(typeof((t=T==null?void 0:T.BuildInfo)===null||t===void 0?void 0:t.packageName)<"u",i,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),te(typeof((l=(a=(n=T==null?void 0:T.cordova)===null||n===void 0?void 0:n.plugins)===null||a===void 0?void 0:a.browsertab)===null||l===void 0?void 0:l.openUrl)=="function",i,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),te(typeof((m=(f=(c=T==null?void 0:T.cordova)===null||c===void 0?void 0:c.plugins)===null||f===void 0?void 0:f.browsertab)===null||m===void 0?void 0:m.isAvailable)=="function",i,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),te(typeof((y=(p=T==null?void 0:T.cordova)===null||p===void 0?void 0:p.InAppBrowser)===null||y===void 0?void 0:y.open)=="function",i,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function qx(i){const e=jx(i),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(a=>a.toString(16).padStart(2,"0")).join("")}function jx(i){if(Ei(/[0-9a-zA-Z]+/.test(i),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(i);const e=new ArrayBuffer(i.length),t=new Uint8Array(e);for(let n=0;n<i.length;n++)t[n]=i.charCodeAt(n);return t}/**
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
 */const Hx=20;class Gx extends YA{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInitialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInitialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function Kx(i,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:Wx(),postBody:null,tenantId:i.tenantId,error:jt(i,"no-auth-event")}}function Qx(i,e){return V_()._set(x_(i),e)}async function J0(i){const e=await V_()._get(x_(i));return e&&await V_()._remove(x_(i)),e}function Yx(i,e){var t,n;const a=Xx(e);if(a.includes("/__/auth/callback")){const l=Pf(a),c=l.firebaseError?$x(decodeURIComponent(l.firebaseError)):null,f=(n=(t=c==null?void 0:c.code)===null||t===void 0?void 0:t.split("auth/"))===null||n===void 0?void 0:n[1],m=f?jt(f):null;return m?{type:i.type,eventId:i.eventId,tenantId:i.tenantId,error:m,urlResponse:null,sessionId:null,postBody:null}:{type:i.type,eventId:i.eventId,tenantId:i.tenantId,sessionId:i.sessionId,urlResponse:a,postBody:null}}return null}function Wx(){const i=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<Hx;t++){const n=Math.floor(Math.random()*e.length);i.push(e.charAt(n))}return i.join("")}function V_(){return Kn(ky)}function x_(i){return Wa("authEvent",i.config.apiKey,i.name)}function $x(i){try{return JSON.parse(i)}catch{return null}}function Xx(i){const e=Pf(i),t=e.link?decodeURIComponent(e.link):void 0,n=Pf(t).link,a=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Pf(a).link||a||n||t||i}function Pf(i){if(!(i!=null&&i.includes("?")))return{};const[e,...t]=i.split("?");return wl(t.join("?"))}/**
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
 */const Jx=500;class Zx{constructor(){this._redirectPersistence=Ja,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Sm,this._overrideRedirectResult=zy}async _initialize(e){const t=e._key();let n=this.eventManagers.get(t);return n||(n=new Gx(e),this.eventManagers.set(t,n),this.attachCallbackListeners(e,n)),n}_openPopup(e){cn(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,n,a){Fx(e);const l=await this._initialize(e);await l.initialized(),l.resetRedirect(),QV(),await this._originValidation(e);const c=Kx(e,n,a);await Qx(e,c);const f=await Lx(e,c,t),m=await Bx(f);return zx(e,l,m)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Ux(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:n,handleOpenURL:a,BuildInfo:l}=eo(),c=setTimeout(async()=>{await J0(e),t.onEvent(Z0())},Jx),f=async y=>{clearTimeout(c);const T=await J0(e);let b=null;T&&(y!=null&&y.url)&&(b=Yx(T,y.url)),t.onEvent(b||Z0())};typeof n<"u"&&typeof n.subscribe=="function"&&n.subscribe(null,f);const m=a,p=`${l.packageName.toLowerCase()}://`;eo().handleOpenURL=async y=>{if(y.toLowerCase().startsWith(p)&&f({url:y}),typeof m=="function")try{m(y)}catch(T){console.error(T)}}}}const e2=Zx;function Z0(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:jt("no-auth-event")}}/**
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
 */function t2(i,e){yt(i)._logFramework(e)}var n2="@firebase/auth-compat",i2="0.5.27";/**
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
 */const r2=1e3;function Hc(){var i;return((i=self==null?void 0:self.location)===null||i===void 0?void 0:i.protocol)||null}function s2(){return Hc()==="http:"||Hc()==="https:"}function JA(i=_t()){return!!((Hc()==="file:"||Hc()==="ionic:"||Hc()==="capacitor:")&&i.toLowerCase().match(/iphone|ipad|ipod|android/))}function a2(){return yy()||gm()}function o2(){return HI()&&(document==null?void 0:document.documentMode)===11}function l2(i=_t()){return/Edge\/\d+/.test(i)}function u2(i=_t()){return o2()||l2(i)}function ZA(){try{const i=self.localStorage,e=Ph();if(i)return i.setItem(e,"1"),i.removeItem(e),u2()?eh():!0}catch{return qy()&&eh()}return!1}function qy(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function __(){return(s2()||jI()||JA())&&!a2()&&ZA()&&!qy()}function eS(){return JA()&&typeof document<"u"}async function c2(){return eS()?new Promise(i=>{const e=setTimeout(()=>{i(!1)},r2);document.addEventListener("deviceready",()=>{clearTimeout(e),i(!0)})}):!1}function h2(){return typeof window<"u"?window:null}/**
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
 */const Gn={LOCAL:"local",NONE:"none",SESSION:"session"},bc=te,tS="persistence";function d2(i,e){if(bc(Object.values(Gn).includes(e),i,"invalid-persistence-type"),yy()){bc(e!==Gn.SESSION,i,"unsupported-persistence-type");return}if(gm()){bc(e===Gn.NONE,i,"unsupported-persistence-type");return}if(qy()){bc(e===Gn.NONE||e===Gn.LOCAL&&eh(),i,"unsupported-persistence-type");return}bc(e===Gn.NONE||ZA(),i,"unsupported-persistence-type")}async function k_(i){await i._initializationPromise;const e=nS(),t=Wa(tS,i.config.apiKey,i.name);e&&e.setItem(t,i._getPersistenceType())}function f2(i,e){const t=nS();if(!t)return[];const n=Wa(tS,i,e);switch(t.getItem(n)){case Gn.NONE:return[Nl];case Gn.LOCAL:return[ah,Ja];case Gn.SESSION:return[Ja];default:return[]}}function nS(){var i;try{return((i=h2())===null||i===void 0?void 0:i.sessionStorage)||null}catch{return null}}/**
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
 */const m2=te;class bs{constructor(){this.browserResolver=Kn(Dx),this.cordovaResolver=Kn(e2),this.underlyingResolver=null,this._redirectPersistence=Ja,this._completeRedirectFn=Sm,this._overrideRedirectResult=zy}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,n,a){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,n,a)}async _openRedirect(e,t,n,a){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,n,a)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return eS()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return m2(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await c2();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function iS(i){return i.unwrap()}function g2(i){return i.wrapped()}/**
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
 */function p2(i){return rS(i)}function _2(i,e){var t;const n=(t=e.customData)===null||t===void 0?void 0:t._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const a=e;a.resolver=new y2(i,lV(i,e))}else if(n){const a=rS(e),l=e;a&&(l.credential=a,l.tenantId=n.tenantId||void 0,l.email=n.email||void 0,l.phoneNumber=n.phoneNumber||void 0)}}function rS(i){const{_tokenResponse:e}=i instanceof In?i.customData:i;if(!e)return null;if(!(i instanceof In)&&"temporaryProof"in e&&"phoneNumber"in e)return Za.credentialFromResult(i);const t=e.providerId;if(!t||t===Tc.PASSWORD)return null;let n;switch(t){case Tc.GOOGLE:n=qi;break;case Tc.FACEBOOK:n=Fi;break;case Tc.GITHUB:n=ji;break;case Tc.TWITTER:n=Hi;break;default:const{oauthIdToken:a,oauthAccessToken:l,oauthTokenSecret:c,pendingToken:f,nonce:m}=e;return!l&&!c&&!a&&!f?null:f?t.startsWith("saml.")?Ol._create(t,f):Xi._fromParams({providerId:t,signInMethod:t,pendingToken:f,idToken:a,accessToken:l}):new Al(t).credential({idToken:a,accessToken:l,rawNonce:m})}return i instanceof In?n.credentialFromError(i):n.credentialFromResult(i)}function Pn(i,e){return e.catch(t=>{throw t instanceof In&&_2(i,t),t}).then(t=>{const n=t.operationType,a=t.user;return{operationType:n,credential:p2(t),additionalUserInfo:oV(t),user:Rm.getOrCreate(a)}})}async function M_(i,e){const t=await e;return{verificationId:t.verificationId,confirm:n=>Pn(i,t.confirm(n))}}class y2{constructor(e,t){this.resolver=t,this.auth=g2(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Pn(iS(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */let Rm=class xc{constructor(e){this._delegate=e,this.multiFactor=hV(e)}static getOrCreate(e){return xc.USER_MAP.has(e)||xc.USER_MAP.set(e,new xc(e)),xc.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Pn(this.auth,VA(this._delegate,e))}async linkWithPhoneNumber(e,t){return M_(this.auth,xV(this._delegate,e,t))}async linkWithPopup(e){return Pn(this.auth,jV(this._delegate,e,bs))}async linkWithRedirect(e){return await k_(yt(this.auth)),JV(this._delegate,e,bs)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Pn(this.auth,xA(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return M_(this.auth,kV(this._delegate,e,t))}reauthenticateWithPopup(e){return Pn(this.auth,qV(this._delegate,e,bs))}async reauthenticateWithRedirect(e){return await k_(yt(this.auth)),$V(this._delegate,e,bs)}sendEmailVerification(e){return $O(this._delegate,e)}async unlink(e){return await MO(this._delegate,e),this}updateEmail(e){return eV(this._delegate,e)}updatePassword(e){return tV(this._delegate,e)}updatePhoneNumber(e){return MV(this._delegate,e)}updateProfile(e){return ZO(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return XO(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}};Rm.USER_MAP=new WeakMap;/**
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
 */const Ic=te;class L_{constructor(e,t){if(this.app=e,t.isInitialized()){this._delegate=t.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:n}=e.options;Ic(n,"invalid-api-key",{appName:e.name}),Ic(n,"invalid-api-key",{appName:e.name});const a=typeof window<"u"?bs:void 0;this._delegate=t.initialize({options:{persistence:v2(n,e.name),popupRedirectResolver:a}}),this._delegate._updateErrorMap(AN),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Rm.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){fO(this._delegate,e,t)}applyActionCode(e){return FO(this._delegate,e)}checkActionCode(e){return kA(this._delegate,e)}confirmPasswordReset(e,t){return zO(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return Pn(this._delegate,jO(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return WO(this._delegate,e)}isSignInWithEmailLink(e){return KO(this._delegate,e)}async getRedirectResult(){Ic(__(),this._delegate,"operation-not-supported-in-this-environment");const e=await ex(this._delegate,bs);return e?Pn(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){t2(this._delegate,e)}onAuthStateChanged(e,t,n){const{next:a,error:l,complete:c}=eb(e,t,n);return this._delegate.onAuthStateChanged(a,l,c)}onIdTokenChanged(e,t,n){const{next:a,error:l,complete:c}=eb(e,t,n);return this._delegate.onIdTokenChanged(a,l,c)}sendSignInLinkToEmail(e,t){return GO(this._delegate,e,t)}sendPasswordResetEmail(e,t){return BO(this._delegate,e,t||void 0)}async setPersistence(e){d2(this._delegate,e);let t;switch(e){case Gn.SESSION:t=Ja;break;case Gn.LOCAL:t=await Kn(ah)._isAvailable()?ah:ky;break;case Gn.NONE:t=Nl;break;default:return cn("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Pn(this._delegate,kO(this._delegate))}signInWithCredential(e){return Pn(this._delegate,Tm(this._delegate,e))}signInWithCustomToken(e){return Pn(this._delegate,UO(this._delegate,e))}signInWithEmailAndPassword(e,t){return Pn(this._delegate,HO(this._delegate,e,t))}signInWithEmailLink(e,t){return Pn(this._delegate,QO(this._delegate,e,t))}signInWithPhoneNumber(e,t){return M_(this._delegate,VV(this._delegate,e,t))}async signInWithPopup(e){return Ic(__(),this._delegate,"operation-not-supported-in-this-environment"),Pn(this._delegate,FV(this._delegate,e,bs))}async signInWithRedirect(e){return Ic(__(),this._delegate,"operation-not-supported-in-this-environment"),await k_(this._delegate),YV(this._delegate,e,bs)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return qO(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}L_.Persistence=Gn;function eb(i,e,t){let n=i;typeof i!="function"&&({next:n,error:e,complete:t}=i);const a=n;return{next:c=>a(c&&Rm.getOrCreate(c)),error:e,complete:t}}function v2(i,e){const t=f2(i,e);if(typeof self<"u"&&!t.includes(ah)&&t.push(ah),typeof window<"u")for(const n of[ky,Ja])t.includes(n)||t.push(n);return t.includes(Nl)||t.push(Nl),t}/**
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
 */class jy{static credential(e,t){return Za.credential(e,t)}constructor(){this.providerId="phone",this._delegate=new Za(iS(ui.auth()))}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}jy.PHONE_SIGN_IN_METHOD=Za.PHONE_SIGN_IN_METHOD;jy.PROVIDER_ID=Za.PROVIDER_ID;/**
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
 */const E2=te;class T2{constructor(e,t,n=ui.app()){var a;E2((a=n.options)===null||a===void 0?void 0:a.apiKey,"invalid-api-key",{appName:n.name}),this._delegate=new NV(n.auth(),e,t),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const w2="auth-compat";function b2(i){i.INTERNAL.registerComponent(new $i(w2,e=>{const t=e.getProvider("app-compat").getImmediate(),n=e.getProvider("auth");return new L_(t,n)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:ul.EMAIL_SIGNIN,PASSWORD_RESET:ul.PASSWORD_RESET,RECOVER_EMAIL:ul.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:ul.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:ul.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:ul.VERIFY_EMAIL}},EmailAuthProvider:Ks,FacebookAuthProvider:Fi,GithubAuthProvider:ji,GoogleAuthProvider:qi,OAuthProvider:Al,SAMLAuthProvider:Qf,PhoneAuthProvider:jy,PhoneMultiFactorGenerator:XA,RecaptchaVerifier:T2,TwitterAuthProvider:Hi,Auth:L_,AuthCredential:tu,Error:In}).setInstantiationMode("LAZY").setMultipleInstances(!1)),i.registerVersion(n2,i2)}b2(ui);var tb=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Cs,sS;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(N,A){function R(){}R.prototype=A.prototype,N.D=A.prototype,N.prototype=new R,N.prototype.constructor=N,N.C=function(V,x,M){for(var C=Array(arguments.length-2),en=2;en<arguments.length;en++)C[en-2]=arguments[en];return A.prototype[x].apply(V,C)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(n,t),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(N,A,R){R||(R=0);var V=Array(16);if(typeof A=="string")for(var x=0;16>x;++x)V[x]=A.charCodeAt(R++)|A.charCodeAt(R++)<<8|A.charCodeAt(R++)<<16|A.charCodeAt(R++)<<24;else for(x=0;16>x;++x)V[x]=A[R++]|A[R++]<<8|A[R++]<<16|A[R++]<<24;A=N.g[0],R=N.g[1],x=N.g[2];var M=N.g[3],C=A+(M^R&(x^M))+V[0]+3614090360&4294967295;A=R+(C<<7&4294967295|C>>>25),C=M+(x^A&(R^x))+V[1]+3905402710&4294967295,M=A+(C<<12&4294967295|C>>>20),C=x+(R^M&(A^R))+V[2]+606105819&4294967295,x=M+(C<<17&4294967295|C>>>15),C=R+(A^x&(M^A))+V[3]+3250441966&4294967295,R=x+(C<<22&4294967295|C>>>10),C=A+(M^R&(x^M))+V[4]+4118548399&4294967295,A=R+(C<<7&4294967295|C>>>25),C=M+(x^A&(R^x))+V[5]+1200080426&4294967295,M=A+(C<<12&4294967295|C>>>20),C=x+(R^M&(A^R))+V[6]+2821735955&4294967295,x=M+(C<<17&4294967295|C>>>15),C=R+(A^x&(M^A))+V[7]+4249261313&4294967295,R=x+(C<<22&4294967295|C>>>10),C=A+(M^R&(x^M))+V[8]+1770035416&4294967295,A=R+(C<<7&4294967295|C>>>25),C=M+(x^A&(R^x))+V[9]+2336552879&4294967295,M=A+(C<<12&4294967295|C>>>20),C=x+(R^M&(A^R))+V[10]+4294925233&4294967295,x=M+(C<<17&4294967295|C>>>15),C=R+(A^x&(M^A))+V[11]+2304563134&4294967295,R=x+(C<<22&4294967295|C>>>10),C=A+(M^R&(x^M))+V[12]+1804603682&4294967295,A=R+(C<<7&4294967295|C>>>25),C=M+(x^A&(R^x))+V[13]+4254626195&4294967295,M=A+(C<<12&4294967295|C>>>20),C=x+(R^M&(A^R))+V[14]+2792965006&4294967295,x=M+(C<<17&4294967295|C>>>15),C=R+(A^x&(M^A))+V[15]+1236535329&4294967295,R=x+(C<<22&4294967295|C>>>10),C=A+(x^M&(R^x))+V[1]+4129170786&4294967295,A=R+(C<<5&4294967295|C>>>27),C=M+(R^x&(A^R))+V[6]+3225465664&4294967295,M=A+(C<<9&4294967295|C>>>23),C=x+(A^R&(M^A))+V[11]+643717713&4294967295,x=M+(C<<14&4294967295|C>>>18),C=R+(M^A&(x^M))+V[0]+3921069994&4294967295,R=x+(C<<20&4294967295|C>>>12),C=A+(x^M&(R^x))+V[5]+3593408605&4294967295,A=R+(C<<5&4294967295|C>>>27),C=M+(R^x&(A^R))+V[10]+38016083&4294967295,M=A+(C<<9&4294967295|C>>>23),C=x+(A^R&(M^A))+V[15]+3634488961&4294967295,x=M+(C<<14&4294967295|C>>>18),C=R+(M^A&(x^M))+V[4]+3889429448&4294967295,R=x+(C<<20&4294967295|C>>>12),C=A+(x^M&(R^x))+V[9]+568446438&4294967295,A=R+(C<<5&4294967295|C>>>27),C=M+(R^x&(A^R))+V[14]+3275163606&4294967295,M=A+(C<<9&4294967295|C>>>23),C=x+(A^R&(M^A))+V[3]+4107603335&4294967295,x=M+(C<<14&4294967295|C>>>18),C=R+(M^A&(x^M))+V[8]+1163531501&4294967295,R=x+(C<<20&4294967295|C>>>12),C=A+(x^M&(R^x))+V[13]+2850285829&4294967295,A=R+(C<<5&4294967295|C>>>27),C=M+(R^x&(A^R))+V[2]+4243563512&4294967295,M=A+(C<<9&4294967295|C>>>23),C=x+(A^R&(M^A))+V[7]+1735328473&4294967295,x=M+(C<<14&4294967295|C>>>18),C=R+(M^A&(x^M))+V[12]+2368359562&4294967295,R=x+(C<<20&4294967295|C>>>12),C=A+(R^x^M)+V[5]+4294588738&4294967295,A=R+(C<<4&4294967295|C>>>28),C=M+(A^R^x)+V[8]+2272392833&4294967295,M=A+(C<<11&4294967295|C>>>21),C=x+(M^A^R)+V[11]+1839030562&4294967295,x=M+(C<<16&4294967295|C>>>16),C=R+(x^M^A)+V[14]+4259657740&4294967295,R=x+(C<<23&4294967295|C>>>9),C=A+(R^x^M)+V[1]+2763975236&4294967295,A=R+(C<<4&4294967295|C>>>28),C=M+(A^R^x)+V[4]+1272893353&4294967295,M=A+(C<<11&4294967295|C>>>21),C=x+(M^A^R)+V[7]+4139469664&4294967295,x=M+(C<<16&4294967295|C>>>16),C=R+(x^M^A)+V[10]+3200236656&4294967295,R=x+(C<<23&4294967295|C>>>9),C=A+(R^x^M)+V[13]+681279174&4294967295,A=R+(C<<4&4294967295|C>>>28),C=M+(A^R^x)+V[0]+3936430074&4294967295,M=A+(C<<11&4294967295|C>>>21),C=x+(M^A^R)+V[3]+3572445317&4294967295,x=M+(C<<16&4294967295|C>>>16),C=R+(x^M^A)+V[6]+76029189&4294967295,R=x+(C<<23&4294967295|C>>>9),C=A+(R^x^M)+V[9]+3654602809&4294967295,A=R+(C<<4&4294967295|C>>>28),C=M+(A^R^x)+V[12]+3873151461&4294967295,M=A+(C<<11&4294967295|C>>>21),C=x+(M^A^R)+V[15]+530742520&4294967295,x=M+(C<<16&4294967295|C>>>16),C=R+(x^M^A)+V[2]+3299628645&4294967295,R=x+(C<<23&4294967295|C>>>9),C=A+(x^(R|~M))+V[0]+4096336452&4294967295,A=R+(C<<6&4294967295|C>>>26),C=M+(R^(A|~x))+V[7]+1126891415&4294967295,M=A+(C<<10&4294967295|C>>>22),C=x+(A^(M|~R))+V[14]+2878612391&4294967295,x=M+(C<<15&4294967295|C>>>17),C=R+(M^(x|~A))+V[5]+4237533241&4294967295,R=x+(C<<21&4294967295|C>>>11),C=A+(x^(R|~M))+V[12]+1700485571&4294967295,A=R+(C<<6&4294967295|C>>>26),C=M+(R^(A|~x))+V[3]+2399980690&4294967295,M=A+(C<<10&4294967295|C>>>22),C=x+(A^(M|~R))+V[10]+4293915773&4294967295,x=M+(C<<15&4294967295|C>>>17),C=R+(M^(x|~A))+V[1]+2240044497&4294967295,R=x+(C<<21&4294967295|C>>>11),C=A+(x^(R|~M))+V[8]+1873313359&4294967295,A=R+(C<<6&4294967295|C>>>26),C=M+(R^(A|~x))+V[15]+4264355552&4294967295,M=A+(C<<10&4294967295|C>>>22),C=x+(A^(M|~R))+V[6]+2734768916&4294967295,x=M+(C<<15&4294967295|C>>>17),C=R+(M^(x|~A))+V[13]+1309151649&4294967295,R=x+(C<<21&4294967295|C>>>11),C=A+(x^(R|~M))+V[4]+4149444226&4294967295,A=R+(C<<6&4294967295|C>>>26),C=M+(R^(A|~x))+V[11]+3174756917&4294967295,M=A+(C<<10&4294967295|C>>>22),C=x+(A^(M|~R))+V[2]+718787259&4294967295,x=M+(C<<15&4294967295|C>>>17),C=R+(M^(x|~A))+V[9]+3951481745&4294967295,N.g[0]=N.g[0]+A&4294967295,N.g[1]=N.g[1]+(x+(C<<21&4294967295|C>>>11))&4294967295,N.g[2]=N.g[2]+x&4294967295,N.g[3]=N.g[3]+M&4294967295}n.prototype.u=function(N,A){A===void 0&&(A=N.length);for(var R=A-this.blockSize,V=this.B,x=this.h,M=0;M<A;){if(x==0)for(;M<=R;)a(this,N,M),M+=this.blockSize;if(typeof N=="string"){for(;M<A;)if(V[x++]=N.charCodeAt(M++),x==this.blockSize){a(this,V),x=0;break}}else for(;M<A;)if(V[x++]=N[M++],x==this.blockSize){a(this,V),x=0;break}}this.h=x,this.o+=A},n.prototype.v=function(){var N=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);N[0]=128;for(var A=1;A<N.length-8;++A)N[A]=0;var R=8*this.o;for(A=N.length-8;A<N.length;++A)N[A]=R&255,R/=256;for(this.u(N),N=Array(16),A=R=0;4>A;++A)for(var V=0;32>V;V+=8)N[R++]=this.g[A]>>>V&255;return N};function l(N,A){var R=f;return Object.prototype.hasOwnProperty.call(R,N)?R[N]:R[N]=A(N)}function c(N,A){this.h=A;for(var R=[],V=!0,x=N.length-1;0<=x;x--){var M=N[x]|0;V&&M==A||(R[x]=M,V=!1)}this.g=R}var f={};function m(N){return-128<=N&&128>N?l(N,function(A){return new c([A|0],0>A?-1:0)}):new c([N|0],0>N?-1:0)}function p(N){if(isNaN(N)||!isFinite(N))return T;if(0>N)return Y(p(-N));for(var A=[],R=1,V=0;N>=R;V++)A[V]=N/R|0,R*=4294967296;return new c(A,0)}function y(N,A){if(N.length==0)throw Error("number format error: empty string");if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(N.charAt(0)=="-")return Y(y(N.substring(1),A));if(0<=N.indexOf("-"))throw Error('number format error: interior "-" character');for(var R=p(Math.pow(A,8)),V=T,x=0;x<N.length;x+=8){var M=Math.min(8,N.length-x),C=parseInt(N.substring(x,x+M),A);8>M?(M=p(Math.pow(A,M)),V=V.j(M).add(p(C))):(V=V.j(R),V=V.add(p(C)))}return V}var T=m(0),b=m(1),O=m(16777216);i=c.prototype,i.m=function(){if($(this))return-Y(this).m();for(var N=0,A=1,R=0;R<this.g.length;R++){var V=this.i(R);N+=(0<=V?V:4294967296+V)*A,A*=4294967296}return N},i.toString=function(N){if(N=N||10,2>N||36<N)throw Error("radix out of range: "+N);if(G(this))return"0";if($(this))return"-"+Y(this).toString(N);for(var A=p(Math.pow(N,6)),R=this,V="";;){var x=ve(R,A).g;R=fe(R,x.j(A));var M=((0<R.g.length?R.g[0]:R.h)>>>0).toString(N);if(R=x,G(R))return M+V;for(;6>M.length;)M="0"+M;V=M+V}},i.i=function(N){return 0>N?0:N<this.g.length?this.g[N]:this.h};function G(N){if(N.h!=0)return!1;for(var A=0;A<N.g.length;A++)if(N.g[A]!=0)return!1;return!0}function $(N){return N.h==-1}i.l=function(N){return N=fe(this,N),$(N)?-1:G(N)?0:1};function Y(N){for(var A=N.g.length,R=[],V=0;V<A;V++)R[V]=~N.g[V];return new c(R,~N.h).add(b)}i.abs=function(){return $(this)?Y(this):this},i.add=function(N){for(var A=Math.max(this.g.length,N.g.length),R=[],V=0,x=0;x<=A;x++){var M=V+(this.i(x)&65535)+(N.i(x)&65535),C=(M>>>16)+(this.i(x)>>>16)+(N.i(x)>>>16);V=C>>>16,M&=65535,C&=65535,R[x]=C<<16|M}return new c(R,R[R.length-1]&-2147483648?-1:0)};function fe(N,A){return N.add(Y(A))}i.j=function(N){if(G(this)||G(N))return T;if($(this))return $(N)?Y(this).j(Y(N)):Y(Y(this).j(N));if($(N))return Y(this.j(Y(N)));if(0>this.l(O)&&0>N.l(O))return p(this.m()*N.m());for(var A=this.g.length+N.g.length,R=[],V=0;V<2*A;V++)R[V]=0;for(V=0;V<this.g.length;V++)for(var x=0;x<N.g.length;x++){var M=this.i(V)>>>16,C=this.i(V)&65535,en=N.i(x)>>>16,vt=N.i(x)&65535;R[2*V+2*x]+=C*vt,ae(R,2*V+2*x),R[2*V+2*x+1]+=M*vt,ae(R,2*V+2*x+1),R[2*V+2*x+1]+=C*en,ae(R,2*V+2*x+1),R[2*V+2*x+2]+=M*en,ae(R,2*V+2*x+2)}for(V=0;V<A;V++)R[V]=R[2*V+1]<<16|R[2*V];for(V=A;V<2*A;V++)R[V]=0;return new c(R,0)};function ae(N,A){for(;(N[A]&65535)!=N[A];)N[A+1]+=N[A]>>>16,N[A]&=65535,A++}function ne(N,A){this.g=N,this.h=A}function ve(N,A){if(G(A))throw Error("division by zero");if(G(N))return new ne(T,T);if($(N))return A=ve(Y(N),A),new ne(Y(A.g),Y(A.h));if($(A))return A=ve(N,Y(A)),new ne(Y(A.g),A.h);if(30<N.g.length){if($(N)||$(A))throw Error("slowDivide_ only works with positive integers.");for(var R=b,V=A;0>=V.l(N);)R=me(R),V=me(V);var x=Te(R,1),M=Te(V,1);for(V=Te(V,2),R=Te(R,2);!G(V);){var C=M.add(V);0>=C.l(N)&&(x=x.add(R),M=C),V=Te(V,1),R=Te(R,1)}return A=fe(N,x.j(A)),new ne(x,A)}for(x=T;0<=N.l(A);){for(R=Math.max(1,Math.floor(N.m()/A.m())),V=Math.ceil(Math.log(R)/Math.LN2),V=48>=V?1:Math.pow(2,V-48),M=p(R),C=M.j(A);$(C)||0<C.l(N);)R-=V,M=p(R),C=M.j(A);G(M)&&(M=b),x=x.add(M),N=fe(N,C)}return new ne(x,N)}i.A=function(N){return ve(this,N).h},i.and=function(N){for(var A=Math.max(this.g.length,N.g.length),R=[],V=0;V<A;V++)R[V]=this.i(V)&N.i(V);return new c(R,this.h&N.h)},i.or=function(N){for(var A=Math.max(this.g.length,N.g.length),R=[],V=0;V<A;V++)R[V]=this.i(V)|N.i(V);return new c(R,this.h|N.h)},i.xor=function(N){for(var A=Math.max(this.g.length,N.g.length),R=[],V=0;V<A;V++)R[V]=this.i(V)^N.i(V);return new c(R,this.h^N.h)};function me(N){for(var A=N.g.length+1,R=[],V=0;V<A;V++)R[V]=N.i(V)<<1|N.i(V-1)>>>31;return new c(R,N.h)}function Te(N,A){var R=A>>5;A%=32;for(var V=N.g.length-R,x=[],M=0;M<V;M++)x[M]=0<A?N.i(M+R)>>>A|N.i(M+R+1)<<32-A:N.i(M+R);return new c(x,N.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,sS=n,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=p,c.fromString=y,Cs=c}).apply(typeof tb<"u"?tb:typeof self<"u"?self:typeof window<"u"?window:{});var vf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var aS,kc,oS,Nf,U_,lS,uS,cS;(function(){var i,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,_,v){return h==Array.prototype||h==Object.prototype||(h[_]=v.value),h};function t(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof vf=="object"&&vf];for(var _=0;_<h.length;++_){var v=h[_];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var n=t(this);function a(h,_){if(_)e:{var v=n;h=h.split(".");for(var I=0;I<h.length-1;I++){var L=h[I];if(!(L in v))break e;v=v[L]}h=h[h.length-1],I=v[h],_=_(I),_!=I&&_!=null&&e(v,h,{configurable:!0,writable:!0,value:_})}}function l(h,_){h instanceof String&&(h+="");var v=0,I=!1,L={next:function(){if(!I&&v<h.length){var H=v++;return{value:_(H,h[H]),done:!1}}return I=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}a("Array.prototype.values",function(h){return h||function(){return l(this,function(_,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},f=this||self;function m(h){var _=typeof h;return _=_!="object"?_:h?Array.isArray(h)?"array":_:"null",_=="array"||_=="object"&&typeof h.length=="number"}function p(h){var _=typeof h;return _=="object"&&h!=null||_=="function"}function y(h,_,v){return h.call.apply(h.bind,arguments)}function T(h,_,v){if(!h)throw Error();if(2<arguments.length){var I=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,I),h.apply(_,L)}}return function(){return h.apply(_,arguments)}}function b(h,_,v){return b=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?y:T,b.apply(null,arguments)}function O(h,_){var v=Array.prototype.slice.call(arguments,1);return function(){var I=v.slice();return I.push.apply(I,arguments),h.apply(this,I)}}function G(h,_){function v(){}v.prototype=_.prototype,h.aa=_.prototype,h.prototype=new v,h.prototype.constructor=h,h.Qb=function(I,L,H){for(var re=Array(arguments.length-2),Ue=2;Ue<arguments.length;Ue++)re[Ue-2]=arguments[Ue];return _.prototype[L].apply(I,re)}}function $(h){const _=h.length;if(0<_){const v=Array(_);for(let I=0;I<_;I++)v[I]=h[I];return v}return[]}function Y(h,_){for(let v=1;v<arguments.length;v++){const I=arguments[v];if(m(I)){const L=h.length||0,H=I.length||0;h.length=L+H;for(let re=0;re<H;re++)h[L+re]=I[re]}else h.push(I)}}class fe{constructor(_,v){this.i=_,this.j=v,this.h=0,this.g=null}get(){let _;return 0<this.h?(this.h--,_=this.g,this.g=_.next,_.next=null):_=this.i(),_}}function ae(h){return/^[\s\xa0]*$/.test(h)}function ne(){var h=f.navigator;return h&&(h=h.userAgent)?h:""}function ve(h){return ve[" "](h),h}ve[" "]=function(){};var me=ne().indexOf("Gecko")!=-1&&!(ne().toLowerCase().indexOf("webkit")!=-1&&ne().indexOf("Edge")==-1)&&!(ne().indexOf("Trident")!=-1||ne().indexOf("MSIE")!=-1)&&ne().indexOf("Edge")==-1;function Te(h,_,v){for(const I in h)_.call(v,h[I],I,h)}function N(h,_){for(const v in h)_.call(void 0,h[v],v,h)}function A(h){const _={};for(const v in h)_[v]=h[v];return _}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function V(h,_){let v,I;for(let L=1;L<arguments.length;L++){I=arguments[L];for(v in I)h[v]=I[v];for(let H=0;H<R.length;H++)v=R[H],Object.prototype.hasOwnProperty.call(I,v)&&(h[v]=I[v])}}function x(h){var _=1;h=h.split(":");const v=[];for(;0<_&&h.length;)v.push(h.shift()),_--;return h.length&&v.push(h.join(":")),v}function M(h){f.setTimeout(()=>{throw h},0)}function C(){var h=He;let _=null;return h.g&&(_=h.g,h.g=h.g.next,h.g||(h.h=null),_.next=null),_}class en{constructor(){this.h=this.g=null}add(_,v){const I=vt.get();I.set(_,v),this.h?this.h.next=I:this.g=I,this.h=I}}var vt=new fe(()=>new K,h=>h.reset());class K{constructor(){this.next=this.g=this.h=null}set(_,v){this.h=_,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let oe,_e=!1,He=new en,D=()=>{const h=f.Promise.resolve(void 0);oe=()=>{h.then(J)}};var J=()=>{for(var h;h=C();){try{h.h.call(h.g)}catch(v){M(v)}var _=vt;_.j(h),100>_.h&&(_.h++,h.next=_.g,_.g=h)}_e=!1};function ue(){this.s=this.s,this.C=this.C}ue.prototype.s=!1,ue.prototype.ma=function(){this.s||(this.s=!0,this.N())},ue.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ie(h,_){this.type=h,this.g=this.target=_,this.defaultPrevented=!1}ie.prototype.h=function(){this.defaultPrevented=!0};var ye=function(){if(!f.addEventListener||!Object.defineProperty)return!1;var h=!1,_=Object.defineProperty({},"passive",{get:function(){h=!0}});try{const v=()=>{};f.addEventListener("test",v,_),f.removeEventListener("test",v,_)}catch{}return h}();function Ne(h,_){if(ie.call(this,h?h.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,h){var v=this.type=h.type,I=h.changedTouches&&h.changedTouches.length?h.changedTouches[0]:null;if(this.target=h.target||h.srcElement,this.g=_,_=h.relatedTarget){if(me){e:{try{ve(_.nodeName);var L=!0;break e}catch{}L=!1}L||(_=null)}}else v=="mouseover"?_=h.fromElement:v=="mouseout"&&(_=h.toElement);this.relatedTarget=_,I?(this.clientX=I.clientX!==void 0?I.clientX:I.pageX,this.clientY=I.clientY!==void 0?I.clientY:I.pageY,this.screenX=I.screenX||0,this.screenY=I.screenY||0):(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0),this.button=h.button,this.key=h.key||"",this.ctrlKey=h.ctrlKey,this.altKey=h.altKey,this.shiftKey=h.shiftKey,this.metaKey=h.metaKey,this.pointerId=h.pointerId||0,this.pointerType=typeof h.pointerType=="string"?h.pointerType:Se[h.pointerType]||"",this.state=h.state,this.i=h,h.defaultPrevented&&Ne.aa.h.call(this)}}G(Ne,ie);var Se={2:"touch",3:"pen",4:"mouse"};Ne.prototype.h=function(){Ne.aa.h.call(this);var h=this.i;h.preventDefault?h.preventDefault():h.returnValue=!1};var Gt="closure_listenable_"+(1e6*Math.random()|0),rt=0;function wi(h,_,v,I,L){this.listener=h,this.proxy=null,this.src=_,this.type=v,this.capture=!!I,this.ha=L,this.key=++rt,this.da=this.fa=!1}function Fr(h){h.da=!0,h.listener=null,h.proxy=null,h.src=null,h.ha=null}function tr(h){this.src=h,this.g={},this.h=0}tr.prototype.add=function(h,_,v,I,L){var H=h.toString();h=this.g[H],h||(h=this.g[H]=[],this.h++);var re=Zs(h,_,I,L);return-1<re?(_=h[re],v||(_.fa=!1)):(_=new wi(_,this.src,H,!!I,L),_.fa=v,h.push(_)),_};function Js(h,_){var v=_.type;if(v in h.g){var I=h.g[v],L=Array.prototype.indexOf.call(I,_,void 0),H;(H=0<=L)&&Array.prototype.splice.call(I,L,1),H&&(Fr(_),h.g[v].length==0&&(delete h.g[v],h.h--))}}function Zs(h,_,v,I){for(var L=0;L<h.length;++L){var H=h[L];if(!H.da&&H.listener==_&&H.capture==!!v&&H.ha==I)return L}return-1}var ea="closure_lm_"+(1e6*Math.random()|0),hu={};function Qh(h,_,v,I,L){if(Array.isArray(_)){for(var H=0;H<_.length;H++)Qh(h,_[H],v,I,L);return null}return v=Yh(v),h&&h[Gt]?h.K(_,v,p(I)?!!I.capture:!1,L):Yn(h,_,v,!1,I,L)}function Yn(h,_,v,I,L,H){if(!_)throw Error("Invalid event type");var re=p(L)?!!L.capture:!!L,Ue=yo(h);if(Ue||(h[ea]=Ue=new tr(h)),v=Ue.add(_,v,I,re,H),v.proxy)return v;if(I=tg(),v.proxy=I,I.src=h,I.listener=v,h.addEventListener)ye||(L=re),L===void 0&&(L=!1),h.addEventListener(_.toString(),I,L);else if(h.attachEvent)h.attachEvent(ta(_.toString()),I);else if(h.addListener&&h.removeListener)h.addListener(I);else throw Error("addEventListener and attachEvent are unavailable.");return v}function tg(){function h(v){return _.call(h.src,h.listener,v)}const _=ng;return h}function du(h,_,v,I,L){if(Array.isArray(_))for(var H=0;H<_.length;H++)du(h,_[H],v,I,L);else I=p(I)?!!I.capture:!!I,v=Yh(v),h&&h[Gt]?(h=h.i,_=String(_).toString(),_ in h.g&&(H=h.g[_],v=Zs(H,v,I,L),-1<v&&(Fr(H[v]),Array.prototype.splice.call(H,v,1),H.length==0&&(delete h.g[_],h.h--)))):h&&(h=yo(h))&&(_=h.g[_.toString()],h=-1,_&&(h=Zs(_,v,I,L)),(v=-1<h?_[h]:null)&&_o(v))}function _o(h){if(typeof h!="number"&&h&&!h.da){var _=h.src;if(_&&_[Gt])Js(_.i,h);else{var v=h.type,I=h.proxy;_.removeEventListener?_.removeEventListener(v,I,h.capture):_.detachEvent?_.detachEvent(ta(v),I):_.addListener&&_.removeListener&&_.removeListener(I),(v=yo(_))?(Js(v,h),v.h==0&&(v.src=null,_[ea]=null)):Fr(h)}}}function ta(h){return h in hu?hu[h]:hu[h]="on"+h}function ng(h,_){if(h.da)h=!0;else{_=new Ne(_,this);var v=h.listener,I=h.ha||h.src;h.fa&&_o(h),h=v.call(I,_)}return h}function yo(h){return h=h[ea],h instanceof tr?h:null}var fu="__closure_events_fn_"+(1e9*Math.random()>>>0);function Yh(h){return typeof h=="function"?h:(h[fu]||(h[fu]=function(_){return h.handleEvent(_)}),h[fu])}function Et(){ue.call(this),this.i=new tr(this),this.M=this,this.F=null}G(Et,ue),Et.prototype[Gt]=!0,Et.prototype.removeEventListener=function(h,_,v,I){du(this,h,_,v,I)};function Qe(h,_){var v,I=h.F;if(I)for(v=[];I;I=I.F)v.push(I);if(h=h.M,I=_.type||_,typeof _=="string")_=new ie(_,h);else if(_ instanceof ie)_.target=_.target||h;else{var L=_;_=new ie(I,h),V(_,L)}if(L=!0,v)for(var H=v.length-1;0<=H;H--){var re=_.g=v[H];L=kn(re,I,!0,_)&&L}if(re=_.g=h,L=kn(re,I,!0,_)&&L,L=kn(re,I,!1,_)&&L,v)for(H=0;H<v.length;H++)re=_.g=v[H],L=kn(re,I,!1,_)&&L}Et.prototype.N=function(){if(Et.aa.N.call(this),this.i){var h=this.i,_;for(_ in h.g){for(var v=h.g[_],I=0;I<v.length;I++)Fr(v[I]);delete h.g[_],h.h--}}this.F=null},Et.prototype.K=function(h,_,v,I){return this.i.add(String(h),_,!1,v,I)},Et.prototype.L=function(h,_,v,I){return this.i.add(String(h),_,!0,v,I)};function kn(h,_,v,I){if(_=h.i.g[String(_)],!_)return!0;_=_.concat();for(var L=!0,H=0;H<_.length;++H){var re=_[H];if(re&&!re.da&&re.capture==v){var Ue=re.listener,Bt=re.ha||re.src;re.fa&&Js(h.i,re),L=Ue.call(Bt,I)!==!1&&L}}return L&&!I.defaultPrevented}function hn(h,_,v){if(typeof h=="function")v&&(h=b(h,v));else if(h&&typeof h.handleEvent=="function")h=b(h.handleEvent,h);else throw Error("Invalid listener argument");return 2147483647<Number(_)?-1:f.setTimeout(h,_||0)}function Wh(h){h.g=hn(()=>{h.g=null,h.i&&(h.i=!1,Wh(h))},h.l);const _=h.h;h.h=null,h.m.apply(null,_)}class ig extends ue{constructor(_,v){super(),this.m=_,this.l=v,this.h=null,this.i=!1,this.g=null}j(_){this.h=arguments,this.g?this.i=!0:Wh(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function na(h){ue.call(this),this.h=h,this.g={}}G(na,ue);var ia=[];function ra(h){Te(h.g,function(_,v){this.g.hasOwnProperty(v)&&_o(_)},h),h.g={}}na.prototype.N=function(){na.aa.N.call(this),ra(this)},na.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var hi=f.JSON.stringify,vo=f.JSON.parse,sa=class{stringify(h){return f.JSON.stringify(h,void 0)}parse(h){return f.JSON.parse(h,void 0)}};function mu(){}mu.prototype.h=null;function gu(h){return h.h||(h.h=h.i())}function pu(){}var nr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ir(){ie.call(this,"d")}G(ir,ie);function _u(){ie.call(this,"c")}G(_u,ie);var bi={},yu=null;function qr(){return yu=yu||new Et}bi.La="serverreachability";function Eo(h){ie.call(this,bi.La,h)}G(Eo,ie);function jr(h){const _=qr();Qe(_,new Eo(_))}bi.STAT_EVENT="statevent";function $h(h,_){ie.call(this,bi.STAT_EVENT,h),this.stat=_}G($h,ie);function lt(h){const _=qr();Qe(_,new $h(_,h))}bi.Ma="timingevent";function Ut(h,_){ie.call(this,bi.Ma,h),this.size=_}G(Ut,ie);function Ot(h,_){if(typeof h!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){h()},_)}function Wn(){this.g=!0}Wn.prototype.xa=function(){this.g=!1};function vu(h,_,v,I,L,H){h.info(function(){if(h.g)if(H)for(var re="",Ue=H.split("&"),Bt=0;Bt<Ue.length;Bt++){var Be=Ue[Bt].split("=");if(1<Be.length){var Qt=Be[0];Be=Be[1];var zt=Qt.split("_");re=2<=zt.length&&zt[1]=="type"?re+(Qt+"="+Be+"&"):re+(Qt+"=redacted&")}}else re=null;else re=H;return"XMLHTTP REQ ("+I+") [attempt "+L+"]: "+_+`
`+v+`
`+re})}function rg(h,_,v,I,L,H,re){h.info(function(){return"XMLHTTP RESP ("+I+") [ attempt "+L+"]: "+_+`
`+v+`
`+H+" "+re})}function Hr(h,_,v,I){h.info(function(){return"XMLHTTP TEXT ("+_+"): "+aa(h,v)+(I?" "+I:"")})}function Xh(h,_){h.info(function(){return"TIMEOUT: "+_})}Wn.prototype.info=function(){};function aa(h,_){if(!h.g)return _;if(!_)return null;try{var v=JSON.parse(_);if(v){for(h=0;h<v.length;h++)if(Array.isArray(v[h])){var I=v[h];if(!(2>I.length)){var L=I[1];if(Array.isArray(L)&&!(1>L.length)){var H=L[0];if(H!="noop"&&H!="stop"&&H!="close")for(var re=1;re<L.length;re++)L[re]=""}}}}return hi(v)}catch{return _}}var Gr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},rr={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ii;function Ai(){}G(Ai,mu),Ai.prototype.g=function(){return new XMLHttpRequest},Ai.prototype.i=function(){return{}},Ii=new Ai;function yn(h,_,v,I){this.j=h,this.i=_,this.l=v,this.R=I||1,this.U=new na(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new St}function St(){this.i=null,this.g="",this.h=!1}var Eu={},To={};function di(h,_,v){h.L=1,h.v=ha(Mn(_)),h.m=v,h.P=!0,sr(h,null)}function sr(h,_){h.F=Date.now(),oa(h),h.A=Mn(h.v);var v=h.A,I=h.R;Array.isArray(I)||(I=[String(I)]),Su(v.i,"t",I),h.C=0,v=h.j.J,h.h=new St,h.g=fd(h.j,v?_:null,!h.m),0<h.O&&(h.M=new ig(b(h.Y,h,h.g),h.O)),_=h.U,v=h.g,I=h.ca;var L="readystatechange";Array.isArray(L)||(L&&(ia[0]=L.toString()),L=ia);for(var H=0;H<L.length;H++){var re=Qh(v,L[H],I||_.handleEvent,!1,_.h||_);if(!re)break;_.g[re.key]=re}_=h.H?A(h.H):{},h.m?(h.u||(h.u="POST"),_["Content-Type"]="application/x-www-form-urlencoded",h.g.ea(h.A,h.u,h.m,_)):(h.u="GET",h.g.ea(h.A,h.u,null,_)),jr(),vu(h.i,h.u,h.A,h.l,h.R,h.m)}yn.prototype.ca=function(h){h=h.target;const _=this.M;_&&Zn(h)==3?_.j():this.Y(h)},yn.prototype.Y=function(h){try{if(h==this.g)e:{const zt=Zn(this.g);var _=this.g.Ba();const fr=this.g.Z();if(!(3>zt)&&(zt!=3||this.g&&(this.h.h||this.g.oa()||sd(this.g)))){this.J||zt!=4||_==7||(_==8||0>=fr?jr(3):jr(2)),Kr(this);var v=this.g.Z();this.X=v;t:if(Jh(this)){var I=sd(this.g);h="";var L=I.length,H=Zn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){tn(this),Si(this);var re="";break t}this.h.i=new f.TextDecoder}for(_=0;_<L;_++)this.h.h=!0,h+=this.h.i.decode(I[_],{stream:!(H&&_==L-1)});I.length=0,this.h.g+=h,this.C=0,re=this.h.g}else re=this.g.oa();if(this.o=v==200,rg(this.i,this.u,this.A,this.l,this.R,zt,v),this.o){if(this.T&&!this.K){t:{if(this.g){var Ue,Bt=this.g;if((Ue=Bt.g?Bt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ae(Ue)){var Be=Ue;break t}}Be=null}if(v=Be)Hr(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,la(this,v);else{this.o=!1,this.s=3,lt(12),tn(this),Si(this);break e}}if(this.P){v=!0;let nn;for(;!this.J&&this.C<re.length;)if(nn=Zh(this,re),nn==To){zt==4&&(this.s=4,lt(14),v=!1),Hr(this.i,this.l,null,"[Incomplete Response]");break}else if(nn==Eu){this.s=4,lt(15),Hr(this.i,this.l,re,"[Invalid Chunk]"),v=!1;break}else Hr(this.i,this.l,nn,null),la(this,nn);if(Jh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),zt!=4||re.length!=0||this.h.h||(this.s=1,lt(16),v=!1),this.o=this.o&&v,!v)Hr(this.i,this.l,re,"[Invalid Chunked Response]"),tn(this),Si(this);else if(0<re.length&&!this.W){this.W=!0;var Qt=this.j;Qt.g==this&&Qt.ba&&!Qt.M&&(Qt.j.info("Great, no buffering proxy detected. Bytes received: "+re.length),va(Qt),Qt.M=!0,lt(11))}}else Hr(this.i,this.l,re,null),la(this,re);zt==4&&tn(this),this.o&&!this.J&&(zt==4?cd(this.j,this):(this.o=!1,oa(this)))}else ug(this.g),v==400&&0<re.indexOf("Unknown SID")?(this.s=3,lt(12)):(this.s=0,lt(13)),tn(this),Si(this)}}}catch{}finally{}};function Jh(h){return h.g?h.u=="GET"&&h.L!=2&&h.j.Ca:!1}function Zh(h,_){var v=h.C,I=_.indexOf(`
`,v);return I==-1?To:(v=Number(_.substring(v,I)),isNaN(v)?Eu:(I+=1,I+v>_.length?To:(_=_.slice(I,I+v),h.C=I+v,_)))}yn.prototype.cancel=function(){this.J=!0,tn(this)};function oa(h){h.S=Date.now()+h.I,ed(h,h.I)}function ed(h,_){if(h.B!=null)throw Error("WatchDog timer not null");h.B=Ot(b(h.ba,h),_)}function Kr(h){h.B&&(f.clearTimeout(h.B),h.B=null)}yn.prototype.ba=function(){this.B=null;const h=Date.now();0<=h-this.S?(Xh(this.i,this.A),this.L!=2&&(jr(),lt(17)),tn(this),this.s=2,Si(this)):ed(this,this.S-h)};function Si(h){h.j.G==0||h.J||cd(h.j,h)}function tn(h){Kr(h);var _=h.M;_&&typeof _.ma=="function"&&_.ma(),h.M=null,ra(h.U),h.g&&(_=h.g,h.g=null,_.abort(),_.ma())}function la(h,_){try{var v=h.j;if(v.G!=0&&(v.g==h||Tu(v.h,h))){if(!h.K&&Tu(v.h,h)&&v.G==3){try{var I=v.Da.g.parse(_)}catch{I=null}if(Array.isArray(I)&&I.length==3){var L=I;if(L[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<h.F)Vo(v),No(v);else break e;Nu(v),lt(18)}}else v.za=L[1],0<v.za-v.T&&37500>L[2]&&v.F&&v.v==0&&!v.C&&(v.C=Ot(b(v.Za,v),6e3));if(1>=bo(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else dr(v,11)}else if((h.K||v.g==h)&&Vo(v),!ae(_))for(L=v.Da.g.parse(_),_=0;_<L.length;_++){let Be=L[_];if(v.T=Be[0],Be=Be[1],v.G==2)if(Be[0]=="c"){v.K=Be[1],v.ia=Be[2];const Qt=Be[3];Qt!=null&&(v.la=Qt,v.j.info("VER="+v.la));const zt=Be[4];zt!=null&&(v.Aa=zt,v.j.info("SVER="+v.Aa));const fr=Be[5];fr!=null&&typeof fr=="number"&&0<fr&&(I=1.5*fr,v.L=I,v.j.info("backChannelRequestTimeoutMs_="+I)),I=v;const nn=h.g;if(nn){const Vi=nn.g?nn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Vi){var H=I.h;H.g||Vi.indexOf("spdy")==-1&&Vi.indexOf("quic")==-1&&Vi.indexOf("h2")==-1||(H.j=H.l,H.g=new Set,H.h&&(Io(H,H.h),H.h=null))}if(I.D){const Vu=nn.g?nn.g.getResponseHeader("X-HTTP-Session-Id"):null;Vu&&(I.ya=Vu,Ze(I.I,I.D,Vu))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-h.F,v.j.info("Handshake RTT: "+v.R+"ms")),I=v;var re=h;if(I.qa=dd(I,I.J?I.ia:null,I.W),re.K){vn(I.h,re);var Ue=re,Bt=I.L;Bt&&(Ue.I=Bt),Ue.B&&(Kr(Ue),oa(Ue)),I.g=re}else ld(I);0<v.i.length&&Oo(v)}else Be[0]!="stop"&&Be[0]!="close"||dr(v,7);else v.G==3&&(Be[0]=="stop"||Be[0]=="close"?Be[0]=="stop"?dr(v,7):Du(v):Be[0]!="noop"&&v.l&&v.l.ta(Be),v.v=0)}}jr(4)}catch{}}var td=class{constructor(h,_){this.g=h,this.map=_}};function ar(h){this.l=h||10,f.PerformanceNavigationTiming?(h=f.performance.getEntriesByType("navigation"),h=0<h.length&&(h[0].nextHopProtocol=="hq"||h[0].nextHopProtocol=="h2")):h=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=h?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function wo(h){return h.h?!0:h.g?h.g.size>=h.j:!1}function bo(h){return h.h?1:h.g?h.g.size:0}function Tu(h,_){return h.h?h.h==_:h.g?h.g.has(_):!1}function Io(h,_){h.g?h.g.add(_):h.h=_}function vn(h,_){h.h&&h.h==_?h.h=null:h.g&&h.g.has(_)&&h.g.delete(_)}ar.prototype.cancel=function(){if(this.i=wu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const h of this.g.values())h.cancel();this.g.clear()}};function wu(h){if(h.h!=null)return h.i.concat(h.h.D);if(h.g!=null&&h.g.size!==0){let _=h.i;for(const v of h.g.values())_=_.concat(v.D);return _}return $(h.i)}function sg(h){if(h.V&&typeof h.V=="function")return h.V();if(typeof Map<"u"&&h instanceof Map||typeof Set<"u"&&h instanceof Set)return Array.from(h.values());if(typeof h=="string")return h.split("");if(m(h)){for(var _=[],v=h.length,I=0;I<v;I++)_.push(h[I]);return _}_=[],v=0;for(I in h)_[v++]=h[I];return _}function Ao(h){if(h.na&&typeof h.na=="function")return h.na();if(!h.V||typeof h.V!="function"){if(typeof Map<"u"&&h instanceof Map)return Array.from(h.keys());if(!(typeof Set<"u"&&h instanceof Set)){if(m(h)||typeof h=="string"){var _=[];h=h.length;for(var v=0;v<h;v++)_.push(v);return _}_=[],v=0;for(const I in h)_[v++]=I;return _}}}function bu(h,_){if(h.forEach&&typeof h.forEach=="function")h.forEach(_,void 0);else if(m(h)||typeof h=="string")Array.prototype.forEach.call(h,_,void 0);else for(var v=Ao(h),I=sg(h),L=I.length,H=0;H<L;H++)_.call(void 0,I[H],v&&v[H],h)}var ua=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ag(h,_){if(h){h=h.split("&");for(var v=0;v<h.length;v++){var I=h[v].indexOf("="),L=null;if(0<=I){var H=h[v].substring(0,I);L=h[v].substring(I+1)}else H=h[v];_(H,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function Vt(h){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,h instanceof Vt){this.h=h.h,ca(this,h.j),this.o=h.o,this.g=h.g,Qr(this,h.s),this.l=h.l;var _=h.i,v=new lr;v.i=_.i,_.g&&(v.g=new Map(_.g),v.h=_.h),or(this,v),this.m=h.m}else h&&(_=String(h).match(ua))?(this.h=!1,ca(this,_[1]||"",!0),this.o=$n(_[2]||""),this.g=$n(_[3]||"",!0),Qr(this,_[4]),this.l=$n(_[5]||"",!0),or(this,_[6]||"",!0),this.m=$n(_[7]||"")):(this.h=!1,this.i=new lr(null,this.h))}Vt.prototype.toString=function(){var h=[],_=this.j;_&&h.push(da(_,Iu,!0),":");var v=this.g;return(v||_=="file")&&(h.push("//"),(_=this.o)&&h.push(da(_,Iu,!0),"@"),h.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&h.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&h.push("/"),h.push(da(v,v.charAt(0)=="/"?og:Au,!0))),(v=this.i.toString())&&h.push("?",v),(v=this.m)&&h.push("#",da(v,So)),h.join("")};function Mn(h){return new Vt(h)}function ca(h,_,v){h.j=v?$n(_,!0):_,h.j&&(h.j=h.j.replace(/:$/,""))}function Qr(h,_){if(_){if(_=Number(_),isNaN(_)||0>_)throw Error("Bad port number "+_);h.s=_}else h.s=null}function or(h,_,v){_ instanceof lr?(h.i=_,id(h.i,h.h)):(v||(_=da(_,lg)),h.i=new lr(_,h.h))}function Ze(h,_,v){h.i.set(_,v)}function ha(h){return Ze(h,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),h}function $n(h,_){return h?_?decodeURI(h.replace(/%25/g,"%2525")):decodeURIComponent(h):""}function da(h,_,v){return typeof h=="string"?(h=encodeURI(h).replace(_,nd),v&&(h=h.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h):null}function nd(h){return h=h.charCodeAt(0),"%"+(h>>4&15).toString(16)+(h&15).toString(16)}var Iu=/[#\/\?@]/g,Au=/[#\?:]/g,og=/[#\?]/g,lg=/[#\?@]/g,So=/#/g;function lr(h,_){this.h=this.g=null,this.i=h||null,this.j=!!_}function Xn(h){h.g||(h.g=new Map,h.h=0,h.i&&ag(h.i,function(_,v){h.add(decodeURIComponent(_.replace(/\+/g," ")),v)}))}i=lr.prototype,i.add=function(h,_){Xn(this),this.i=null,h=Ri(this,h);var v=this.g.get(h);return v||this.g.set(h,v=[]),v.push(_),this.h+=1,this};function ur(h,_){Xn(h),_=Ri(h,_),h.g.has(_)&&(h.i=null,h.h-=h.g.get(_).length,h.g.delete(_))}function cr(h,_){return Xn(h),_=Ri(h,_),h.g.has(_)}i.forEach=function(h,_){Xn(this),this.g.forEach(function(v,I){v.forEach(function(L){h.call(_,L,I,this)},this)},this)},i.na=function(){Xn(this);const h=Array.from(this.g.values()),_=Array.from(this.g.keys()),v=[];for(let I=0;I<_.length;I++){const L=h[I];for(let H=0;H<L.length;H++)v.push(_[I])}return v},i.V=function(h){Xn(this);let _=[];if(typeof h=="string")cr(this,h)&&(_=_.concat(this.g.get(Ri(this,h))));else{h=Array.from(this.g.values());for(let v=0;v<h.length;v++)_=_.concat(h[v])}return _},i.set=function(h,_){return Xn(this),this.i=null,h=Ri(this,h),cr(this,h)&&(this.h-=this.g.get(h).length),this.g.set(h,[_]),this.h+=1,this},i.get=function(h,_){return h?(h=this.V(h),0<h.length?String(h[0]):_):_};function Su(h,_,v){ur(h,_),0<v.length&&(h.i=null,h.g.set(Ri(h,_),$(v)),h.h+=v.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const h=[],_=Array.from(this.g.keys());for(var v=0;v<_.length;v++){var I=_[v];const H=encodeURIComponent(String(I)),re=this.V(I);for(I=0;I<re.length;I++){var L=H;re[I]!==""&&(L+="="+encodeURIComponent(String(re[I]))),h.push(L)}}return this.i=h.join("&")};function Ri(h,_){return _=String(_),h.j&&(_=_.toLowerCase()),_}function id(h,_){_&&!h.j&&(Xn(h),h.i=null,h.g.forEach(function(v,I){var L=I.toLowerCase();I!=L&&(ur(this,I),Su(this,L,v))},h)),h.j=_}function fa(h,_){const v=new Wn;if(f.Image){const I=new Image;I.onload=O(Jn,v,"TestLoadImage: loaded",!0,_,I),I.onerror=O(Jn,v,"TestLoadImage: error",!1,_,I),I.onabort=O(Jn,v,"TestLoadImage: abort",!1,_,I),I.ontimeout=O(Jn,v,"TestLoadImage: timeout",!1,_,I),f.setTimeout(function(){I.ontimeout&&I.ontimeout()},1e4),I.src=h}else _(!1)}function fi(h,_){const v=new Wn,I=new AbortController,L=setTimeout(()=>{I.abort(),Jn(v,"TestPingServer: timeout",!1,_)},1e4);fetch(h,{signal:I.signal}).then(H=>{clearTimeout(L),H.ok?Jn(v,"TestPingServer: ok",!0,_):Jn(v,"TestPingServer: server error",!1,_)}).catch(()=>{clearTimeout(L),Jn(v,"TestPingServer: error",!1,_)})}function Jn(h,_,v,I,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),I(v)}catch{}}function ma(){this.g=new sa}function Ci(h,_,v){const I=v||"";try{bu(h,function(L,H){let re=L;p(L)&&(re=hi(L)),_.push(I+H+"="+encodeURIComponent(re))})}catch(L){throw _.push(I+"type="+encodeURIComponent("_badmap")),L}}function Yr(h){this.l=h.Ub||null,this.j=h.eb||!1}G(Yr,mu),Yr.prototype.g=function(){return new hr(this.l,this.j)},Yr.prototype.i=function(h){return function(){return h}}({});function hr(h,_){Et.call(this),this.D=h,this.o=_,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}G(hr,Et),i=hr.prototype,i.open=function(h,_){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=h,this.A=_,this.readyState=1,Pi(this)},i.send=function(h){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const _={headers:this.u,method:this.B,credentials:this.m,cache:void 0};h&&(_.body=h),(this.D||f).fetch(new Request(this.A,_)).then(this.Sa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Di(this)),this.readyState=0},i.Sa=function(h){if(this.g&&(this.l=h,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=h.headers,this.readyState=2,Pi(this)),this.g&&(this.readyState=3,Pi(this),this.g)))if(this.responseType==="arraybuffer")h.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in h){if(this.j=h.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ru(this)}else h.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ru(h){h.j.read().then(h.Pa.bind(h)).catch(h.ga.bind(h))}i.Pa=function(h){if(this.g){if(this.o&&h.value)this.response.push(h.value);else if(!this.o){var _=h.value?h.value:new Uint8Array(0);(_=this.v.decode(_,{stream:!h.done}))&&(this.response=this.responseText+=_)}h.done?Di(this):Pi(this),this.readyState==3&&Ru(this)}},i.Ra=function(h){this.g&&(this.response=this.responseText=h,Di(this))},i.Qa=function(h){this.g&&(this.response=h,Di(this))},i.ga=function(){this.g&&Di(this)};function Di(h){h.readyState=4,h.l=null,h.j=null,h.v=null,Pi(h)}i.setRequestHeader=function(h,_){this.u.append(h,_)},i.getResponseHeader=function(h){return this.h&&this.h.get(h.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const h=[],_=this.h.entries();for(var v=_.next();!v.done;)v=v.value,h.push(v[0]+": "+v[1]),v=_.next();return h.join(`\r
`)};function Pi(h){h.onreadystatechange&&h.onreadystatechange.call(h)}Object.defineProperty(hr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(h){this.m=h?"include":"same-origin"}});function Cu(h){let _="";return Te(h,function(v,I){_+=I,_+=":",_+=v,_+=`\r
`}),_}function Kt(h,_,v){e:{for(I in v){var I=!1;break e}I=!0}I||(v=Cu(v),typeof h=="string"?v!=null&&encodeURIComponent(String(v)):Ze(h,_,v))}function Ke(h){Et.call(this),this.headers=new Map,this.o=h||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}G(Ke,Et);var Ro=/^https?$/i,ga=["POST","PUT"];i=Ke.prototype,i.Ha=function(h){this.J=h},i.ea=function(h,_,v,I){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+h);_=_?_.toUpperCase():"GET",this.D=h,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ii.g(),this.v=this.o?gu(this.o):gu(Ii),this.g.onreadystatechange=b(this.Ea,this);try{this.B=!0,this.g.open(_,String(h),!0),this.B=!1}catch(H){rd(this,H);return}if(h=v||"",v=new Map(this.headers),I)if(Object.getPrototypeOf(I)===Object.prototype)for(var L in I)v.set(L,I[L]);else if(typeof I.keys=="function"&&typeof I.get=="function")for(const H of I.keys())v.set(H,I.get(H));else throw Error("Unknown input type for opt_headers: "+String(I));I=Array.from(v.keys()).find(H=>H.toLowerCase()=="content-type"),L=f.FormData&&h instanceof f.FormData,!(0<=Array.prototype.indexOf.call(ga,_,void 0))||I||L||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[H,re]of v)this.g.setRequestHeader(H,re);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{pa(this),this.u=!0,this.g.send(h),this.u=!1}catch(H){rd(this,H)}};function rd(h,_){h.h=!1,h.g&&(h.j=!0,h.g.abort(),h.j=!1),h.l=_,h.m=5,Co(h),Ni(h)}function Co(h){h.A||(h.A=!0,Qe(h,"complete"),Qe(h,"error"))}i.abort=function(h){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=h||7,Qe(this,"complete"),Qe(this,"abort"),Ni(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ni(this,!0)),Ke.aa.N.call(this)},i.Ea=function(){this.s||(this.B||this.u||this.j?Do(this):this.bb())},i.bb=function(){Do(this)};function Do(h){if(h.h&&typeof c<"u"&&(!h.v[1]||Zn(h)!=4||h.Z()!=2)){if(h.u&&Zn(h)==4)hn(h.Ea,0,h);else if(Qe(h,"readystatechange"),Zn(h)==4){h.h=!1;try{const re=h.Z();e:switch(re){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var _=!0;break e;default:_=!1}var v;if(!(v=_)){var I;if(I=re===0){var L=String(h.D).match(ua)[1]||null;!L&&f.self&&f.self.location&&(L=f.self.location.protocol.slice(0,-1)),I=!Ro.test(L?L.toLowerCase():"")}v=I}if(v)Qe(h,"complete"),Qe(h,"success");else{h.m=6;try{var H=2<Zn(h)?h.g.statusText:""}catch{H=""}h.l=H+" ["+h.Z()+"]",Co(h)}}finally{Ni(h)}}}}function Ni(h,_){if(h.g){pa(h);const v=h.g,I=h.v[0]?()=>{}:null;h.g=null,h.v=null,_||Qe(h,"ready");try{v.onreadystatechange=I}catch{}}}function pa(h){h.I&&(f.clearTimeout(h.I),h.I=null)}i.isActive=function(){return!!this.g};function Zn(h){return h.g?h.g.readyState:0}i.Z=function(){try{return 2<Zn(this)?this.g.status:-1}catch{return-1}},i.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.Oa=function(h){if(this.g){var _=this.g.responseText;return h&&_.indexOf(h)==0&&(_=_.substring(h.length)),vo(_)}};function sd(h){try{if(!h.g)return null;if("response"in h.g)return h.g.response;switch(h.H){case"":case"text":return h.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in h.g)return h.g.mozResponseArrayBuffer}return null}catch{return null}}function ug(h){const _={};h=(h.g&&2<=Zn(h)&&h.g.getAllResponseHeaders()||"").split(`\r
`);for(let I=0;I<h.length;I++){if(ae(h[I]))continue;var v=x(h[I]);const L=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const H=_[L]||[];_[L]=H,H.push(v)}N(_,function(I){return I.join(", ")})}i.Ba=function(){return this.m},i.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function _a(h,_,v){return v&&v.internalChannelParams&&v.internalChannelParams[h]||_}function Po(h){this.Aa=0,this.i=[],this.j=new Wn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=_a("failFast",!1,h),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=_a("baseRetryDelayMs",5e3,h),this.cb=_a("retryDelaySeedMs",1e4,h),this.Wa=_a("forwardChannelMaxRetries",2,h),this.wa=_a("forwardChannelRequestTimeoutMs",2e4,h),this.pa=h&&h.xmlHttpFactory||void 0,this.Xa=h&&h.Tb||void 0,this.Ca=h&&h.useFetchStreams||!1,this.L=void 0,this.J=h&&h.supportsCrossDomainXhr||!1,this.K="",this.h=new ar(h&&h.concurrentRequestLimit),this.Da=new ma,this.P=h&&h.fastHandshake||!1,this.O=h&&h.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=h&&h.Rb||!1,h&&h.xa&&this.j.xa(),h&&h.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&h&&h.detectBufferingProxy||!1,this.ja=void 0,h&&h.longPollingTimeout&&0<h.longPollingTimeout&&(this.ja=h.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}i=Po.prototype,i.la=8,i.G=1,i.connect=function(h,_,v,I){lt(0),this.W=h,this.H=_||{},v&&I!==void 0&&(this.H.OSID=v,this.H.OAID=I),this.F=this.X,this.I=dd(this,null,this.W),Oo(this)};function Du(h){if(ad(h),h.G==3){var _=h.U++,v=Mn(h.I);if(Ze(v,"SID",h.K),Ze(v,"RID",_),Ze(v,"TYPE","terminate"),ya(h,v),_=new yn(h,h.j,_),_.L=2,_.v=ha(Mn(v)),v=!1,f.navigator&&f.navigator.sendBeacon)try{v=f.navigator.sendBeacon(_.v.toString(),"")}catch{}!v&&f.Image&&(new Image().src=_.v,v=!0),v||(_.g=fd(_.j,null),_.g.ea(_.v)),_.F=Date.now(),oa(_)}hd(h)}function No(h){h.g&&(va(h),h.g.cancel(),h.g=null)}function ad(h){No(h),h.u&&(f.clearTimeout(h.u),h.u=null),Vo(h),h.h.cancel(),h.s&&(typeof h.s=="number"&&f.clearTimeout(h.s),h.s=null)}function Oo(h){if(!wo(h.h)&&!h.s){h.s=!0;var _=h.Ga;oe||D(),_e||(oe(),_e=!0),He.add(_,h),h.B=0}}function cg(h,_){return bo(h.h)>=h.h.j-(h.s?1:0)?!1:h.s?(h.i=_.D.concat(h.i),!0):h.G==1||h.G==2||h.B>=(h.Va?0:h.Wa)?!1:(h.s=Ot(b(h.Ga,h,_),Ou(h,h.B)),h.B++,!0)}i.Ga=function(h){if(this.s)if(this.s=null,this.G==1){if(!h){this.U=Math.floor(1e5*Math.random()),h=this.U++;const L=new yn(this,this.j,h);let H=this.o;if(this.S&&(H?(H=A(H),V(H,this.S)):H=this.S),this.m!==null||this.O||(L.H=H,H=null),this.P)e:{for(var _=0,v=0;v<this.i.length;v++){t:{var I=this.i[v];if("__data__"in I.map&&(I=I.map.__data__,typeof I=="string")){I=I.length;break t}I=void 0}if(I===void 0)break;if(_+=I,4096<_){_=v;break e}if(_===4096||v===this.i.length-1){_=v+1;break e}}_=1e3}else _=1e3;_=od(this,L,_),v=Mn(this.I),Ze(v,"RID",h),Ze(v,"CVER",22),this.D&&Ze(v,"X-HTTP-Session-Id",this.D),ya(this,v),H&&(this.O?_="headers="+encodeURIComponent(String(Cu(H)))+"&"+_:this.m&&Kt(v,this.m,H)),Io(this.h,L),this.Ua&&Ze(v,"TYPE","init"),this.P?(Ze(v,"$req",_),Ze(v,"SID","null"),L.T=!0,di(L,v,null)):di(L,v,_),this.G=2}}else this.G==3&&(h?Pu(this,h):this.i.length==0||wo(this.h)||Pu(this))};function Pu(h,_){var v;_?v=_.l:v=h.U++;const I=Mn(h.I);Ze(I,"SID",h.K),Ze(I,"RID",v),Ze(I,"AID",h.T),ya(h,I),h.m&&h.o&&Kt(I,h.m,h.o),v=new yn(h,h.j,v,h.B+1),h.m===null&&(v.H=h.o),_&&(h.i=_.D.concat(h.i)),_=od(h,v,1e3),v.I=Math.round(.5*h.wa)+Math.round(.5*h.wa*Math.random()),Io(h.h,v),di(v,I,_)}function ya(h,_){h.H&&Te(h.H,function(v,I){Ze(_,I,v)}),h.l&&bu({},function(v,I){Ze(_,I,v)})}function od(h,_,v){v=Math.min(h.i.length,v);var I=h.l?b(h.l.Na,h.l,h):null;e:{var L=h.i;let H=-1;for(;;){const re=["count="+v];H==-1?0<v?(H=L[0].g,re.push("ofs="+H)):H=0:re.push("ofs="+H);let Ue=!0;for(let Bt=0;Bt<v;Bt++){let Be=L[Bt].g;const Qt=L[Bt].map;if(Be-=H,0>Be)H=Math.max(0,L[Bt].g-100),Ue=!1;else try{Ci(Qt,re,"req"+Be+"_")}catch{I&&I(Qt)}}if(Ue){I=re.join("&");break e}}}return h=h.i.splice(0,v),_.D=h,I}function ld(h){if(!h.g&&!h.u){h.Y=1;var _=h.Fa;oe||D(),_e||(oe(),_e=!0),He.add(_,h),h.v=0}}function Nu(h){return h.g||h.u||3<=h.v?!1:(h.Y++,h.u=Ot(b(h.Fa,h),Ou(h,h.v)),h.v++,!0)}i.Fa=function(){if(this.u=null,ud(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var h=2*this.R;this.j.info("BP detection timer enabled: "+h),this.A=Ot(b(this.ab,this),h)}},i.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,lt(10),No(this),ud(this))};function va(h){h.A!=null&&(f.clearTimeout(h.A),h.A=null)}function ud(h){h.g=new yn(h,h.j,"rpc",h.Y),h.m===null&&(h.g.H=h.o),h.g.O=0;var _=Mn(h.qa);Ze(_,"RID","rpc"),Ze(_,"SID",h.K),Ze(_,"AID",h.T),Ze(_,"CI",h.F?"0":"1"),!h.F&&h.ja&&Ze(_,"TO",h.ja),Ze(_,"TYPE","xmlhttp"),ya(h,_),h.m&&h.o&&Kt(_,h.m,h.o),h.L&&(h.g.I=h.L);var v=h.g;h=h.ia,v.L=1,v.v=ha(Mn(_)),v.m=null,v.P=!0,sr(v,h)}i.Za=function(){this.C!=null&&(this.C=null,No(this),Nu(this),lt(19))};function Vo(h){h.C!=null&&(f.clearTimeout(h.C),h.C=null)}function cd(h,_){var v=null;if(h.g==_){Vo(h),va(h),h.g=null;var I=2}else if(Tu(h.h,_))v=_.D,vn(h.h,_),I=1;else return;if(h.G!=0){if(_.o)if(I==1){v=_.m?_.m.length:0,_=Date.now()-_.F;var L=h.B;I=qr(),Qe(I,new Ut(I,v)),Oo(h)}else ld(h);else if(L=_.s,L==3||L==0&&0<_.X||!(I==1&&cg(h,_)||I==2&&Nu(h)))switch(v&&0<v.length&&(_=h.h,_.i=_.i.concat(v)),L){case 1:dr(h,5);break;case 4:dr(h,10);break;case 3:dr(h,6);break;default:dr(h,2)}}}function Ou(h,_){let v=h.Ta+Math.floor(Math.random()*h.cb);return h.isActive()||(v*=2),v*_}function dr(h,_){if(h.j.info("Error code "+_),_==2){var v=b(h.fb,h),I=h.Xa;const L=!I;I=new Vt(I||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||ca(I,"https"),ha(I),L?fa(I.toString(),v):fi(I.toString(),v)}else lt(2);h.G=0,h.l&&h.l.sa(_),hd(h),ad(h)}i.fb=function(h){h?(this.j.info("Successfully pinged google.com"),lt(2)):(this.j.info("Failed to ping google.com"),lt(1))};function hd(h){if(h.G=0,h.ka=[],h.l){const _=wu(h.h);(_.length!=0||h.i.length!=0)&&(Y(h.ka,_),Y(h.ka,h.i),h.h.i.length=0,$(h.i),h.i.length=0),h.l.ra()}}function dd(h,_,v){var I=v instanceof Vt?Mn(v):new Vt(v);if(I.g!="")_&&(I.g=_+"."+I.g),Qr(I,I.s);else{var L=f.location;I=L.protocol,_=_?_+"."+L.hostname:L.hostname,L=+L.port;var H=new Vt(null);I&&ca(H,I),_&&(H.g=_),L&&Qr(H,L),v&&(H.l=v),I=H}return v=h.D,_=h.ya,v&&_&&Ze(I,v,_),Ze(I,"VER",h.la),ya(h,I),I}function fd(h,_,v){if(_&&!h.J)throw Error("Can't create secondary domain capable XhrIo object.");return _=h.Ca&&!h.pa?new Ke(new Yr({eb:v})):new Ke(h.pa),_.Ha(h.J),_}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function md(){}i=md.prototype,i.ua=function(){},i.ta=function(){},i.sa=function(){},i.ra=function(){},i.isActive=function(){return!0},i.Na=function(){};function xo(){}xo.prototype.g=function(h,_){return new En(h,_)};function En(h,_){Et.call(this),this.g=new Po(_),this.l=h,this.h=_&&_.messageUrlParams||null,h=_&&_.messageHeaders||null,_&&_.clientProtocolHeaderRequired&&(h?h["X-Client-Protocol"]="webchannel":h={"X-Client-Protocol":"webchannel"}),this.g.o=h,h=_&&_.initMessageHeaders||null,_&&_.messageContentType&&(h?h["X-WebChannel-Content-Type"]=_.messageContentType:h={"X-WebChannel-Content-Type":_.messageContentType}),_&&_.va&&(h?h["X-WebChannel-Client-Profile"]=_.va:h={"X-WebChannel-Client-Profile":_.va}),this.g.S=h,(h=_&&_.Sb)&&!ae(h)&&(this.g.m=h),this.v=_&&_.supportsCrossDomainXhr||!1,this.u=_&&_.sendRawJson||!1,(_=_&&_.httpSessionIdParam)&&!ae(_)&&(this.g.D=_,h=this.h,h!==null&&_ in h&&(h=this.h,_ in h&&delete h[_])),this.j=new Oi(this)}G(En,Et),En.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},En.prototype.close=function(){Du(this.g)},En.prototype.o=function(h){var _=this.g;if(typeof h=="string"){var v={};v.__data__=h,h=v}else this.u&&(v={},v.__data__=hi(h),h=v);_.i.push(new td(_.Ya++,h)),_.G==3&&Oo(_)},En.prototype.N=function(){this.g.l=null,delete this.j,Du(this.g),delete this.g,En.aa.N.call(this)};function gd(h){ir.call(this),h.__headers__&&(this.headers=h.__headers__,this.statusCode=h.__status__,delete h.__headers__,delete h.__status__);var _=h.__sm__;if(_){e:{for(const v in _){h=v;break e}h=void 0}(this.i=h)&&(h=this.i,_=_!==null&&h in _?_[h]:void 0),this.data=_}else this.data=h}G(gd,ir);function pd(){_u.call(this),this.status=1}G(pd,_u);function Oi(h){this.g=h}G(Oi,md),Oi.prototype.ua=function(){Qe(this.g,"a")},Oi.prototype.ta=function(h){Qe(this.g,new gd(h))},Oi.prototype.sa=function(h){Qe(this.g,new pd)},Oi.prototype.ra=function(){Qe(this.g,"b")},xo.prototype.createWebChannel=xo.prototype.g,En.prototype.send=En.prototype.o,En.prototype.open=En.prototype.m,En.prototype.close=En.prototype.close,cS=function(){return new xo},uS=function(){return qr()},lS=bi,U_={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Gr.NO_ERROR=0,Gr.TIMEOUT=8,Gr.HTTP_ERROR=6,Nf=Gr,rr.COMPLETE="complete",oS=rr,pu.EventType=nr,nr.OPEN="a",nr.CLOSE="b",nr.ERROR="c",nr.MESSAGE="d",Et.prototype.listen=Et.prototype.K,kc=pu,Ke.prototype.listenOnce=Ke.prototype.L,Ke.prototype.getLastError=Ke.prototype.Ka,Ke.prototype.getLastErrorCode=Ke.prototype.Ba,Ke.prototype.getStatus=Ke.prototype.Z,Ke.prototype.getResponseJson=Ke.prototype.Oa,Ke.prototype.getResponseText=Ke.prototype.oa,Ke.prototype.send=Ke.prototype.ea,Ke.prototype.setWithCredentials=Ke.prototype.Ha,aS=Ke}).apply(typeof vf<"u"?vf:typeof self<"u"?self:typeof window<"u"?window:{});const nb="@firebase/firestore",ib="4.7.17";/**
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
 */class Jt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Jt.UNAUTHENTICATED=new Jt(null),Jt.GOOGLE_CREDENTIALS=new Jt("google-credentials-uid"),Jt.FIRST_PARTY=new Jt("first-party-uid"),Jt.MOCK_USER=new Jt("mock-user");/**
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
 */let iu="11.9.0";/**
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
 */const ks=new pm("@firebase/firestore");function _l(){return ks.logLevel}function I2(i){ks.setLogLevel(i)}function ee(i,...e){if(ks.logLevel<=ke.DEBUG){const t=e.map(Hy);ks.debug(`Firestore (${iu}): ${i}`,...t)}}function Dt(i,...e){if(ks.logLevel<=ke.ERROR){const t=e.map(Hy);ks.error(`Firestore (${iu}): ${i}`,...t)}}function Ji(i,...e){if(ks.logLevel<=ke.WARN){const t=e.map(Hy);ks.warn(`Firestore (${iu}): ${i}`,...t)}}function Hy(i){if(typeof i=="string")return i;try{/**
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
*/return function(t){return JSON.stringify(t)}(i)}catch{return i}}/**
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
 */function ce(i,e,t){let n="Unexpected state";typeof e=="string"?n=e:t=e,hS(i,n,t)}function hS(i,e,t){let n=`FIRESTORE (${iu}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(t!==void 0)try{n+=" CONTEXT: "+JSON.stringify(t)}catch{n+=" CONTEXT: "+t}throw Dt(n),new Error(n)}function de(i,e,t,n){let a="Unexpected state";typeof t=="string"?a=t:n=t,i||hS(e,a,n)}function A2(i,e){i||ce(57014,e)}function le(i,e){return i}/**
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
 */const j={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Z extends In{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class un{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class dS{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class S2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Jt.UNAUTHENTICATED))}shutdown(){}}class R2{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class C2{constructor(e){this.t=e,this.currentUser=Jt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){de(this.o===void 0,42304);let n=this.i;const a=m=>this.i!==n?(n=this.i,t(m)):Promise.resolve();let l=new un;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new un,e.enqueueRetryable(()=>a(this.currentUser))};const c=()=>{const m=l;e.enqueueRetryable(async()=>{await m.promise,await a(this.currentUser)})},f=m=>{ee("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=m,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit(m=>f(m)),setTimeout(()=>{if(!this.auth){const m=this.t.getImmediate({optional:!0});m?f(m):(ee("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new un)}},0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(n=>this.i!==e?(ee("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(de(typeof n.accessToken=="string",31837,{l:n}),new dS(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return de(e===null||typeof e=="string",2055,{h:e}),new Jt(e)}}class D2{constructor(e,t,n){this.P=e,this.T=t,this.I=n,this.type="FirstParty",this.user=Jt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class P2{constructor(e,t,n){this.P=e,this.T=t,this.I=n}getToken(){return Promise.resolve(new D2(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Jt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class rb{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class N2{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,ht(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){de(this.o===void 0,3512);const n=l=>{l.error!=null&&ee("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.m;return this.m=l.token,ee("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>n(l))};const a=l=>{ee("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(l=>a(l)),setTimeout(()=>{if(!this.appCheck){const l=this.V.getImmediate({optional:!0});l?a(l):ee("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new rb(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(de(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new rb(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function O2(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<i;n++)t[n]=Math.floor(256*Math.random());return t}/**
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
 */function Gy(){return new TextEncoder}/**
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
 */class fS{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const a=O2(40);for(let l=0;l<a.length;++l)n.length<20&&a[l]<t&&(n+=e.charAt(a[l]%62))}return n}}function Ie(i,e){return i<e?-1:i>e?1:0}function B_(i,e){let t=0;for(;t<i.length&&t<e.length;){const n=i.codePointAt(t),a=e.codePointAt(t);if(n!==a){if(n<128&&a<128)return Ie(n,a);{const l=Gy(),c=V2(l.encode(sb(i,t)),l.encode(sb(e,t)));return c!==0?c:Ie(n,a)}}t+=n>65535?2:1}return Ie(i.length,e.length)}function sb(i,e){return i.codePointAt(e)>65535?i.substring(e,e+2):i.substring(e,e+1)}function V2(i,e){for(let t=0;t<i.length&&t<e.length;++t)if(i[t]!==e[t])return Ie(i[t],e[t]);return Ie(i.length,e.length)}function Vl(i,e,t){return i.length===e.length&&i.every((n,a)=>t(n,e[a]))}function mS(i){return i+"\0"}/**
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
 */const ab=-62135596800,ob=1e6;class mt{static now(){return mt.fromMillis(Date.now())}static fromDate(e){return mt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*ob);return new mt(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Z(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Z(j.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<ab)throw new Z(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Z(j.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ob}_compareTo(e){return this.seconds===e.seconds?Ie(this.nanoseconds,e.nanoseconds):Ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-ab;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ge{static fromTimestamp(e){return new ge(e)}static min(){return new ge(new mt(0,0))}static max(){return new ge(new mt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const lb="__name__";class Bi{constructor(e,t,n){t===void 0?t=0:t>e.length&&ce(637,{offset:t,range:e.length}),n===void 0?n=e.length-t:n>e.length-t&&ce(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return Bi.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Bi?e.forEach(n=>{t.push(n)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let a=0;a<n;a++){const l=Bi.compareSegments(e.get(a),t.get(a));if(l!==0)return l}return Ie(e.length,t.length)}static compareSegments(e,t){const n=Bi.isNumericId(e),a=Bi.isNumericId(t);return n&&!a?-1:!n&&a?1:n&&a?Bi.extractNumericId(e).compare(Bi.extractNumericId(t)):B_(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Cs.fromString(e.substring(4,e.length-2))}}class Me extends Bi{construct(e,t,n){return new Me(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new Z(j.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(a=>a.length>0))}return new Me(t)}static emptyPath(){return new Me([])}}const x2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class dt extends Bi{construct(e,t,n){return new dt(e,t,n)}static isValidIdentifier(e){return x2.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),dt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===lb}static keyField(){return new dt([lb])}static fromServerFormat(e){const t=[];let n="",a=0;const l=()=>{if(n.length===0)throw new Z(j.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let c=!1;for(;a<e.length;){const f=e[a];if(f==="\\"){if(a+1===e.length)throw new Z(j.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const m=e[a+1];if(m!=="\\"&&m!=="."&&m!=="`")throw new Z(j.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=m,a+=2}else f==="`"?(c=!c,a++):f!=="."||c?(n+=f,a++):(l(),a++)}if(l(),c)throw new Z(j.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new dt(t)}static emptyPath(){return new dt([])}}/**
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
 */class se{constructor(e){this.path=e}static fromPath(e){return new se(Me.fromString(e))}static fromName(e){return new se(Me.fromString(e).popFirst(5))}static empty(){return new se(Me.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Me.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Me.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new se(new Me(e.slice()))}}/**
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
 */const xl=-1;class Xf{constructor(e,t,n,a){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=a}}function z_(i){return i.fields.find(e=>e.kind===2)}function La(i){return i.fields.filter(e=>e.kind!==2)}Xf.UNKNOWN_ID=-1;class Of{constructor(e,t){this.fieldPath=e,this.kind=t}}class oh{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new oh(0,Qn.min())}}function gS(i,e){const t=i.toTimestamp().seconds,n=i.toTimestamp().nanoseconds+1,a=ge.fromTimestamp(n===1e9?new mt(t+1,0):new mt(t,n));return new Qn(a,se.empty(),e)}function pS(i){return new Qn(i.readTime,i.key,xl)}class Qn{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Qn(ge.min(),se.empty(),xl)}static max(){return new Qn(ge.max(),se.empty(),xl)}}function Ky(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=se.comparator(i.documentKey,e.documentKey),t!==0?t:Ie(i.largestBatchId,e.largestBatchId))}/**
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
 */const _S="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class yS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Qs(i){if(i.code!==j.FAILED_PRECONDITION||i.message!==_S)throw i;ee("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ce(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new U((n,a)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(n,a)},this.catchCallback=l=>{this.wrapFailure(t,l).next(n,a)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof U?t:U.resolve(t)}catch(t){return U.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):U.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):U.reject(t)}static resolve(e){return new U((t,n)=>{t(e)})}static reject(e){return new U((t,n)=>{n(e)})}static waitFor(e){return new U((t,n)=>{let a=0,l=0,c=!1;e.forEach(f=>{++a,f.next(()=>{++l,c&&l===a&&t()},m=>n(m))}),c=!0,l===a&&t()})}static or(e){let t=U.resolve(!1);for(const n of e)t=t.next(a=>a?U.resolve(a):n());return t}static forEach(e,t){const n=[];return e.forEach((a,l)=>{n.push(t.call(this,a,l))}),this.waitFor(n)}static mapArray(e,t){return new U((n,a)=>{const l=e.length,c=new Array(l);let f=0;for(let m=0;m<l;m++){const p=m;t(e[p]).next(y=>{c[p]=y,++f,f===l&&n(c)},y=>a(y))}})}static doWhile(e,t){return new U((n,a)=>{const l=()=>{e()===!0?t().next(()=>{l()},a):n()};l()})}}/**
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
 */const Hn="SimpleDb";class Cm{static open(e,t,n,a){try{return new Cm(t,e.transaction(a,n))}catch(l){throw new Gc(t,l)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.S=new un,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{t.error?this.S.reject(new Gc(e,t.error)):this.S.resolve()},this.transaction.onerror=n=>{const a=Qy(n.target.error);this.S.reject(new Gc(e,a))}}get D(){return this.S.promise}abort(e){e&&this.S.reject(e),this.aborted||(ee(Hn,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}v(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new M2(t)}}class Yi{static delete(e){return ee(Hn,"Removing database:",e),za(py().indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!eh())return!1;if(Yi.F())return!0;const e=_t(),t=Yi.M(e),n=0<t&&t<10,a=vS(e),l=0<a&&a<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||l)}static F(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.O)==="YES"}static N(e,t){return e.store(t)}static M(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}constructor(e,t,n){this.name=e,this.version=t,this.B=n,this.L=null,Yi.M(_t())===12.2&&Dt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async k(e){return this.db||(ee(Hn,"Opening database:",this.name),this.db=await new Promise((t,n)=>{const a=indexedDB.open(this.name,this.version);a.onsuccess=l=>{const c=l.target.result;t(c)},a.onblocked=()=>{n(new Gc(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},a.onerror=l=>{const c=l.target.error;c.name==="VersionError"?n(new Z(j.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):c.name==="InvalidStateError"?n(new Z(j.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+c)):n(new Gc(e,c))},a.onupgradeneeded=l=>{ee(Hn,'Database "'+this.name+'" requires upgrade from version:',l.oldVersion);const c=l.target.result;if(this.L!==null&&this.L!==l.oldVersion)throw new Error(`refusing to open IndexedDB database due to potential corruption of the IndexedDB database data; this corruption could be caused by clicking the "clear site data" button in a web browser; try reloading the web page to re-initialize the IndexedDB database: lastClosedDbVersion=${this.L}, event.oldVersion=${l.oldVersion}, event.newVersion=${l.newVersion}, db.version=${c.version}`);this.B.q(c,a.transaction,l.oldVersion,this.version).next(()=>{ee(Hn,"Database upgrade to version "+this.version+" complete")})}}),this.db.addEventListener("close",t=>{const n=t.target;this.L=n.version},{passive:!0})),this.$&&(this.db.onversionchange=t=>this.$(t)),this.db}U(e){this.$=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,a){const l=t==="readonly";let c=0;for(;;){++c;try{this.db=await this.k(e);const f=Cm.open(this.db,e,l?"readonly":"readwrite",n),m=a(f).next(p=>(f.v(),p)).catch(p=>(f.abort(p),U.reject(p))).toPromise();return m.catch(()=>{}),await f.D,m}catch(f){const m=f,p=m.name!=="FirebaseError"&&c<3;if(ee(Hn,"Transaction failed with error:",m.message,"Retrying:",p),this.close(),!p)return Promise.reject(m)}}}close(){this.db&&this.db.close(),this.db=void 0}}function vS(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class k2{constructor(e){this.K=e,this.W=!1,this.G=null}get isDone(){return this.W}get j(){return this.G}set cursor(e){this.K=e}done(){this.W=!0}H(e){this.G=e}delete(){return za(this.K.delete())}}class Gc extends Z{constructor(e,t){super(j.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Ys(i){return i.name==="IndexedDbTransactionError"}class M2{constructor(e){this.store=e}put(e,t){let n;return t!==void 0?(ee(Hn,"PUT",this.store.name,e,t),n=this.store.put(t,e)):(ee(Hn,"PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),za(n)}add(e){return ee(Hn,"ADD",this.store.name,e,e),za(this.store.add(e))}get(e){return za(this.store.get(e)).next(t=>(t===void 0&&(t=null),ee(Hn,"GET",this.store.name,e,t),t))}delete(e){return ee(Hn,"DELETE",this.store.name,e),za(this.store.delete(e))}count(){return ee(Hn,"COUNT",this.store.name),za(this.store.count())}J(e,t){const n=this.options(e,t),a=n.index?this.store.index(n.index):this.store;if(typeof a.getAll=="function"){const l=a.getAll(n.range);return new U((c,f)=>{l.onerror=m=>{f(m.target.error)},l.onsuccess=m=>{c(m.target.result)}})}{const l=this.cursor(n),c=[];return this.Y(l,(f,m)=>{c.push(m)}).next(()=>c)}}Z(e,t){const n=this.store.getAll(e,t===null?void 0:t);return new U((a,l)=>{n.onerror=c=>{l(c.target.error)},n.onsuccess=c=>{a(c.target.result)}})}X(e,t){ee(Hn,"DELETE ALL",this.store.name);const n=this.options(e,t);n.ee=!1;const a=this.cursor(n);return this.Y(a,(l,c,f)=>f.delete())}te(e,t){let n;t?n=e:(n={},t=e);const a=this.cursor(n);return this.Y(a,t)}ne(e){const t=this.cursor({});return new U((n,a)=>{t.onerror=l=>{const c=Qy(l.target.error);a(c)},t.onsuccess=l=>{const c=l.target.result;c?e(c.primaryKey,c.value).next(f=>{f?c.continue():n()}):n()}})}Y(e,t){const n=[];return new U((a,l)=>{e.onerror=c=>{l(c.target.error)},e.onsuccess=c=>{const f=c.target.result;if(!f)return void a();const m=new k2(f),p=t(f.primaryKey,f.value,m);if(p instanceof U){const y=p.catch(T=>(m.done(),U.reject(T)));n.push(y)}m.isDone?a():m.j===null?f.continue():f.continue(m.j)}}).next(()=>U.waitFor(n))}options(e,t){let n;return e!==void 0&&(typeof e=="string"?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.ee?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function za(i){return new U((e,t)=>{i.onsuccess=n=>{const a=n.target.result;e(a)},i.onerror=n=>{const a=Qy(n.target.error);t(a)}})}let ub=!1;function Qy(i){const e=Yi.M(_t());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(i.message.indexOf(t)>=0){const n=new Z("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return ub||(ub=!0,setTimeout(()=>{throw n},0)),n}}return i}const Kc="IndexBackfiller";class L2{constructor(e,t){this.asyncQueue=e,this.re=t,this.task=null}start(){this.ie(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}ie(e){ee(Kc,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{const t=await this.re.se();ee(Kc,`Documents written: ${t}`)}catch(t){Ys(t)?ee(Kc,"Ignoring IndexedDB error during index backfill: ",t):await Qs(t)}await this.ie(6e4)})}}class U2{constructor(e,t){this.localStore=e,this.persistence=t}async se(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.oe(t,e))}oe(e,t){const n=new Set;let a=t,l=!0;return U.doWhile(()=>l===!0&&a>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(c=>{if(c!==null&&!n.has(c))return ee(Kc,`Processing collection: ${c}`),this._e(e,c,a).next(f=>{a-=f,n.add(c)});l=!1})).next(()=>t-a)}_e(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(a=>this.localStore.localDocuments.getNextDocuments(e,t,a,n).next(l=>{const c=l.changes;return this.localStore.indexManager.updateIndexEntries(e,c).next(()=>this.ae(a,l)).next(f=>(ee(Kc,`Updating offset: ${f}`),this.localStore.indexManager.updateCollectionGroup(e,t,f))).next(()=>c.size)}))}ae(e,t){let n=e;return t.changes.forEach((a,l)=>{const c=pS(l);Ky(c,n)>0&&(n=c)}),new Qn(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */class On{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.ue(n),this.ce=n=>t.writeSequenceNumber(n))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}On.le=-1;/**
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
 */const Ds=-1;function Oh(i){return i==null}function lh(i){return i===0&&1/i==-1/0}function ES(i){return typeof i=="number"&&Number.isInteger(i)&&!lh(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
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
 */const Jf="";function pn(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=cb(e)),e=B2(i.get(t),e);return cb(e)}function B2(i,e){let t=e;const n=i.length;for(let a=0;a<n;a++){const l=i.charAt(a);switch(l){case"\0":t+="";break;case Jf:t+="";break;default:t+=l}}return t}function cb(i){return i+Jf+""}function Ki(i){const e=i.length;if(de(e>=2,64408,{path:i}),e===2)return de(i.charAt(0)===Jf&&i.charAt(1)==="",56145,{path:i}),Me.emptyPath();const t=e-2,n=[];let a="";for(let l=0;l<e;){const c=i.indexOf(Jf,l);switch((c<0||c>t)&&ce(50515,{path:i}),i.charAt(c+1)){case"":const f=i.substring(l,c);let m;a.length===0?m=f:(a+=f,m=a,a=""),n.push(m);break;case"":a+=i.substring(l,c),a+="\0";break;case"":a+=i.substring(l,c+1);break;default:ce(61167,{path:i})}l=c+2}return new Me(n)}/**
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
 */const Ua="remoteDocuments",Vh="owner",cl="owner",uh="mutationQueues",z2="userId",_i="mutations",hb="batchId",Ka="userMutationsIndex",db=["userId","batchId"];/**
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
 */function Vf(i,e){return[i,pn(e)]}function TS(i,e,t){return[i,pn(e),t]}const F2={},kl="documentMutations",Zf="remoteDocumentsV14",q2=["prefixPath","collectionGroup","readTime","documentId"],xf="documentKeyIndex",j2=["prefixPath","collectionGroup","documentId"],wS="collectionGroupIndex",H2=["collectionGroup","readTime","prefixPath","documentId"],ch="remoteDocumentGlobal",F_="remoteDocumentGlobalKey",Ml="targets",bS="queryTargetsIndex",G2=["canonicalId","targetId"],Ll="targetDocuments",K2=["targetId","path"],Yy="documentTargetsIndex",Q2=["path","targetId"],em="targetGlobalKey",Xa="targetGlobal",hh="collectionParents",Y2=["collectionId","parent"],Ul="clientMetadata",W2="clientId",Dm="bundles",$2="bundleId",Pm="namedQueries",X2="name",Wy="indexConfiguration",J2="indexId",q_="collectionGroupIndex",Z2="collectionGroup",Qc="indexState",ek=["indexId","uid"],IS="sequenceNumberIndex",tk=["uid","sequenceNumber"],Yc="indexEntries",nk=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],AS="documentKeyIndex",ik=["indexId","uid","orderedDocumentKey"],Nm="documentOverlays",rk=["userId","collectionPath","documentId"],j_="collectionPathOverlayIndex",sk=["userId","collectionPath","largestBatchId"],SS="collectionGroupOverlayIndex",ak=["userId","collectionGroup","largestBatchId"],$y="globals",ok="name",RS=[uh,_i,kl,Ua,Ml,Vh,Xa,Ll,Ul,ch,hh,Dm,Pm],lk=[...RS,Nm],CS=[uh,_i,kl,Zf,Ml,Vh,Xa,Ll,Ul,ch,hh,Dm,Pm,Nm],DS=CS,Xy=[...DS,Wy,Qc,Yc],uk=Xy,PS=[...Xy,$y],ck=PS;/**
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
 */class H_ extends yS{constructor(e,t){super(),this.he=e,this.currentSequenceNumber=t}}function Ht(i,e){const t=le(i);return Yi.N(t.he,e)}/**
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
 */function fb(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function Ws(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function NS(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
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
 */class at{constructor(e,t){this.comparator=e,this.root=t||on.EMPTY}insert(e,t){return new at(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,on.BLACK,null,null))}remove(e){return new at(this.comparator,this.root.remove(e,this.comparator).copy(null,null,on.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const a=this.comparator(e,n.key);if(a===0)return t+n.left.size;a<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ef(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ef(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ef(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ef(this.root,e,this.comparator,!0)}}class Ef{constructor(e,t,n,a){this.isReverse=a,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?n(e.key,t):1,t&&a&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class on{constructor(e,t,n,a,l){this.key=e,this.value=t,this.color=n??on.RED,this.left=a??on.EMPTY,this.right=l??on.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,a,l){return new on(e??this.key,t??this.value,n??this.color,a??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let a=this;const l=n(e,a.key);return a=l<0?a.copy(null,null,null,a.left.insert(e,t,n),null):l===0?a.copy(null,t,null,null,null):a.copy(null,null,null,null,a.right.insert(e,t,n)),a.fixUp()}removeMin(){if(this.left.isEmpty())return on.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,a=this;if(t(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,t),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),t(e,a.key)===0){if(a.right.isEmpty())return on.EMPTY;n=a.right.min(),a=a.copy(n.key,n.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,t))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,on.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,on.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ce(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ce(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ce(27949);return e+(this.isRed()?0:1)}}on.EMPTY=null,on.RED=!0,on.BLACK=!1;on.EMPTY=new class{constructor(){this.size=0}get key(){throw ce(57766)}get value(){throw ce(16141)}get color(){throw ce(16727)}get left(){throw ce(29726)}get right(){throw ce(36894)}copy(e,t,n,a,l){return this}insert(e,t,n){return new on(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Je{constructor(e){this.comparator=e,this.data=new at(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const a=n.getNext();if(this.comparator(a.key,e[1])>=0)return;t(a.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new mb(this.data.getIterator())}getIteratorFrom(e){return new mb(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(n=>{t=t.add(n)}),t}isEqual(e){if(!(e instanceof Je)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=n.getNext().key;if(this.comparator(a,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Je(this.comparator);return t.data=e,t}}class mb{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function hl(i){return i.hasNext()?i.getNext():void 0}/**
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
 */class Vn{constructor(e){this.fields=e,e.sort(dt.comparator)}static empty(){return new Vn([])}unionWith(e){let t=new Je(dt.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Vn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Vl(this.fields,e.fields,(t,n)=>t.isEqual(n))}}/**
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
 */class OS extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */function hk(){return typeof atob<"u"}/**
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
 */class bt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(a){try{return atob(a)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new OS("Invalid base64 string: "+l):l}}(e);return new bt(t)}static fromUint8Array(e){const t=function(a){let l="";for(let c=0;c<a.length;++c)l+=String.fromCharCode(a[c]);return l}(e);return new bt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let a=0;a<t.length;a++)n[a]=t.charCodeAt(a);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}bt.EMPTY_BYTE_STRING=new bt("");const dk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Or(i){if(de(!!i,39018),typeof i=="string"){let e=0;const t=dk.exec(i);if(de(!!t,46558,{timestamp:i}),t[1]){let a=t[1];a=(a+"000000000").substr(0,9),e=Number(a)}const n=new Date(i);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:ct(i.seconds),nanos:ct(i.nanos)}}function ct(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function Vr(i){return typeof i=="string"?bt.fromBase64String(i):bt.fromUint8Array(i)}/**
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
 */const VS="server_timestamp",xS="__type__",kS="__previous_value__",MS="__local_write_time__";function Om(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{})[xS])===null||t===void 0?void 0:t.stringValue)===VS}function Vm(i){const e=i.mapValue.fields[kS];return Om(e)?Vm(e):e}function dh(i){const e=Or(i.mapValue.fields[MS].timestampValue);return new mt(e.seconds,e.nanos)}/**
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
 */class fk{constructor(e,t,n,a,l,c,f,m,p,y){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=a,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=f,this.longPollingOptions=m,this.useFetchStreams=p,this.isUsingEmulator=y}}const G_="(default)";class Ms{constructor(e,t){this.projectId=e,this.database=t||G_}static empty(){return new Ms("","")}get isDefaultDatabase(){return this.database===G_}isEqual(e){return e instanceof Ms&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Jy="__type__",LS="__max__",Is={mapValue:{fields:{__type__:{stringValue:LS}}}},Zy="__vector__",Bl="value",kf={nullValue:"NULL_VALUE"};function Ls(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?Om(i)?4:US(i)?9007199254740991:xm(i)?10:11:ce(28295,{value:i})}function Zi(i,e){if(i===e)return!0;const t=Ls(i);if(t!==Ls(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return dh(i).isEqual(dh(e));case 3:return function(a,l){if(typeof a.timestampValue=="string"&&typeof l.timestampValue=="string"&&a.timestampValue.length===l.timestampValue.length)return a.timestampValue===l.timestampValue;const c=Or(a.timestampValue),f=Or(l.timestampValue);return c.seconds===f.seconds&&c.nanos===f.nanos}(i,e);case 5:return i.stringValue===e.stringValue;case 6:return function(a,l){return Vr(a.bytesValue).isEqual(Vr(l.bytesValue))}(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return function(a,l){return ct(a.geoPointValue.latitude)===ct(l.geoPointValue.latitude)&&ct(a.geoPointValue.longitude)===ct(l.geoPointValue.longitude)}(i,e);case 2:return function(a,l){if("integerValue"in a&&"integerValue"in l)return ct(a.integerValue)===ct(l.integerValue);if("doubleValue"in a&&"doubleValue"in l){const c=ct(a.doubleValue),f=ct(l.doubleValue);return c===f?lh(c)===lh(f):isNaN(c)&&isNaN(f)}return!1}(i,e);case 9:return Vl(i.arrayValue.values||[],e.arrayValue.values||[],Zi);case 10:case 11:return function(a,l){const c=a.mapValue.fields||{},f=l.mapValue.fields||{};if(fb(c)!==fb(f))return!1;for(const m in c)if(c.hasOwnProperty(m)&&(f[m]===void 0||!Zi(c[m],f[m])))return!1;return!0}(i,e);default:return ce(52216,{left:i})}}function fh(i,e){return(i.values||[]).find(t=>Zi(t,e))!==void 0}function Us(i,e){if(i===e)return 0;const t=Ls(i),n=Ls(e);if(t!==n)return Ie(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return Ie(i.booleanValue,e.booleanValue);case 2:return function(l,c){const f=ct(l.integerValue||l.doubleValue),m=ct(c.integerValue||c.doubleValue);return f<m?-1:f>m?1:f===m?0:isNaN(f)?isNaN(m)?0:-1:1}(i,e);case 3:return gb(i.timestampValue,e.timestampValue);case 4:return gb(dh(i),dh(e));case 5:return B_(i.stringValue,e.stringValue);case 6:return function(l,c){const f=Vr(l),m=Vr(c);return f.compareTo(m)}(i.bytesValue,e.bytesValue);case 7:return function(l,c){const f=l.split("/"),m=c.split("/");for(let p=0;p<f.length&&p<m.length;p++){const y=Ie(f[p],m[p]);if(y!==0)return y}return Ie(f.length,m.length)}(i.referenceValue,e.referenceValue);case 8:return function(l,c){const f=Ie(ct(l.latitude),ct(c.latitude));return f!==0?f:Ie(ct(l.longitude),ct(c.longitude))}(i.geoPointValue,e.geoPointValue);case 9:return pb(i.arrayValue,e.arrayValue);case 10:return function(l,c){var f,m,p,y;const T=l.fields||{},b=c.fields||{},O=(f=T[Bl])===null||f===void 0?void 0:f.arrayValue,G=(m=b[Bl])===null||m===void 0?void 0:m.arrayValue,$=Ie(((p=O==null?void 0:O.values)===null||p===void 0?void 0:p.length)||0,((y=G==null?void 0:G.values)===null||y===void 0?void 0:y.length)||0);return $!==0?$:pb(O,G)}(i.mapValue,e.mapValue);case 11:return function(l,c){if(l===Is.mapValue&&c===Is.mapValue)return 0;if(l===Is.mapValue)return 1;if(c===Is.mapValue)return-1;const f=l.fields||{},m=Object.keys(f),p=c.fields||{},y=Object.keys(p);m.sort(),y.sort();for(let T=0;T<m.length&&T<y.length;++T){const b=B_(m[T],y[T]);if(b!==0)return b;const O=Us(f[m[T]],p[y[T]]);if(O!==0)return O}return Ie(m.length,y.length)}(i.mapValue,e.mapValue);default:throw ce(23264,{Pe:t})}}function gb(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return Ie(i,e);const t=Or(i),n=Or(e),a=Ie(t.seconds,n.seconds);return a!==0?a:Ie(t.nanos,n.nanos)}function pb(i,e){const t=i.values||[],n=e.values||[];for(let a=0;a<t.length&&a<n.length;++a){const l=Us(t[a],n[a]);if(l)return l}return Ie(t.length,n.length)}function zl(i){return K_(i)}function K_(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?function(t){const n=Or(t);return`time(${n.seconds},${n.nanos})`}(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?function(t){return Vr(t).toBase64()}(i.bytesValue):"referenceValue"in i?function(t){return se.fromName(t).toString()}(i.referenceValue):"geoPointValue"in i?function(t){return`geo(${t.latitude},${t.longitude})`}(i.geoPointValue):"arrayValue"in i?function(t){let n="[",a=!0;for(const l of t.values||[])a?a=!1:n+=",",n+=K_(l);return n+"]"}(i.arrayValue):"mapValue"in i?function(t){const n=Object.keys(t.fields||{}).sort();let a="{",l=!0;for(const c of n)l?l=!1:a+=",",a+=`${c}:${K_(t.fields[c])}`;return a+"}"}(i.mapValue):ce(61005,{value:i})}function Mf(i){switch(Ls(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Vm(i);return e?16+Mf(e):16;case 5:return 2*i.stringValue.length;case 6:return Vr(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((a,l)=>a+Mf(l),0)}(i.arrayValue);case 10:case 11:return function(n){let a=0;return Ws(n.fields,(l,c)=>{a+=l.length+Mf(c)}),a}(i.mapValue);default:throw ce(13486,{value:i})}}function to(i,e){return{referenceValue:`projects/${i.projectId}/databases/${i.database}/documents/${e.path.canonicalString()}`}}function Q_(i){return!!i&&"integerValue"in i}function mh(i){return!!i&&"arrayValue"in i}function _b(i){return!!i&&"nullValue"in i}function yb(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function Lf(i){return!!i&&"mapValue"in i}function xm(i){var e,t;return((t=(((e=i==null?void 0:i.mapValue)===null||e===void 0?void 0:e.fields)||{})[Jy])===null||t===void 0?void 0:t.stringValue)===Zy}function Wc(i){if(i.geoPointValue)return{geoPointValue:Object.assign({},i.geoPointValue)};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:Object.assign({},i.timestampValue)};if(i.mapValue){const e={mapValue:{fields:{}}};return Ws(i.mapValue.fields,(t,n)=>e.mapValue.fields[t]=Wc(n)),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Wc(i.arrayValue.values[t]);return e}return Object.assign({},i)}function US(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===LS}const BS={mapValue:{fields:{[Jy]:{stringValue:Zy},[Bl]:{arrayValue:{}}}}};function mk(i){return"nullValue"in i?kf:"booleanValue"in i?{booleanValue:!1}:"integerValue"in i||"doubleValue"in i?{doubleValue:NaN}:"timestampValue"in i?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in i?{stringValue:""}:"bytesValue"in i?{bytesValue:""}:"referenceValue"in i?to(Ms.empty(),se.empty()):"geoPointValue"in i?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in i?{arrayValue:{}}:"mapValue"in i?xm(i)?BS:{mapValue:{}}:ce(35942,{value:i})}function gk(i){return"nullValue"in i?{booleanValue:!1}:"booleanValue"in i?{doubleValue:NaN}:"integerValue"in i||"doubleValue"in i?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in i?{stringValue:""}:"stringValue"in i?{bytesValue:""}:"bytesValue"in i?to(Ms.empty(),se.empty()):"referenceValue"in i?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in i?{arrayValue:{}}:"arrayValue"in i?BS:"mapValue"in i?xm(i)?{mapValue:{}}:Is:ce(61959,{value:i})}function vb(i,e){const t=Us(i.value,e.value);return t!==0?t:i.inclusive&&!e.inclusive?-1:!i.inclusive&&e.inclusive?1:0}function Eb(i,e){const t=Us(i.value,e.value);return t!==0?t:i.inclusive&&!e.inclusive?1:!i.inclusive&&e.inclusive?-1:0}/**
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
 */class ln{constructor(e){this.value=e}static empty(){return new ln({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Lf(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Wc(t)}setAll(e){let t=dt.emptyPath(),n={},a=[];e.forEach((c,f)=>{if(!t.isImmediateParentOf(f)){const m=this.getFieldsMap(t);this.applyChanges(m,n,a),n={},a=[],t=f.popLast()}c?n[f.lastSegment()]=Wc(c):a.push(f.lastSegment())});const l=this.getFieldsMap(t);this.applyChanges(l,n,a)}delete(e){const t=this.field(e.popLast());Lf(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Zi(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let a=t.mapValue.fields[e.get(n)];Lf(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=a),t=a}return t.mapValue.fields}applyChanges(e,t,n){Ws(t,(a,l)=>e[a]=l);for(const a of n)delete e[a]}clone(){return new ln(Wc(this.value))}}function zS(i){const e=[];return Ws(i.fields,(t,n)=>{const a=new dt([t]);if(Lf(n)){const l=zS(n.mapValue).fields;if(l.length===0)e.push(a);else for(const c of l)e.push(a.child(c))}else e.push(a)}),new Vn(e)}/**
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
 */class ot{constructor(e,t,n,a,l,c,f){this.key=e,this.documentType=t,this.version=n,this.readTime=a,this.createTime=l,this.data=c,this.documentState=f}static newInvalidDocument(e){return new ot(e,0,ge.min(),ge.min(),ge.min(),ln.empty(),0)}static newFoundDocument(e,t,n,a){return new ot(e,1,t,ge.min(),n,a,0)}static newNoDocument(e,t){return new ot(e,2,t,ge.min(),ge.min(),ln.empty(),0)}static newUnknownDocument(e,t){return new ot(e,3,t,ge.min(),ge.min(),ln.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ge.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ln.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ln.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ge.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ot&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ot(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Bs{constructor(e,t){this.position=e,this.inclusive=t}}function Tb(i,e,t){let n=0;for(let a=0;a<i.position.length;a++){const l=e[a],c=i.position[a];if(l.field.isKeyField()?n=se.comparator(se.fromName(c.referenceValue),t.key):n=Us(c,t.data.field(l.field)),l.dir==="desc"&&(n*=-1),n!==0)break}return n}function wb(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!Zi(i.position[t],e.position[t]))return!1;return!0}/**
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
 */class gh{constructor(e,t="asc"){this.field=e,this.dir=t}}function pk(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
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
 */class FS{}class Le extends FS{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new _k(e,t,n):t==="array-contains"?new Ek(e,n):t==="in"?new QS(e,n):t==="not-in"?new Tk(e,n):t==="array-contains-any"?new wk(e,n):new Le(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new yk(e,n):new vk(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Us(t,this.value)):t!==null&&Ls(this.value)===Ls(t)&&this.matchesComparison(Us(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ce(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Xe extends FS{constructor(e,t){super(),this.filters=e,this.op=t,this.Te=null}static create(e,t){return new Xe(e,t)}matches(e){return Fl(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function Fl(i){return i.op==="and"}function Y_(i){return i.op==="or"}function ev(i){return qS(i)&&Fl(i)}function qS(i){for(const e of i.filters)if(e instanceof Xe)return!1;return!0}function W_(i){if(i instanceof Le)return i.field.canonicalString()+i.op.toString()+zl(i.value);if(ev(i))return i.filters.map(e=>W_(e)).join(",");{const e=i.filters.map(t=>W_(t)).join(",");return`${i.op}(${e})`}}function jS(i,e){return i instanceof Le?function(n,a){return a instanceof Le&&n.op===a.op&&n.field.isEqual(a.field)&&Zi(n.value,a.value)}(i,e):i instanceof Xe?function(n,a){return a instanceof Xe&&n.op===a.op&&n.filters.length===a.filters.length?n.filters.reduce((l,c,f)=>l&&jS(c,a.filters[f]),!0):!1}(i,e):void ce(19439)}function HS(i,e){const t=i.filters.concat(e);return Xe.create(t,i.op)}function GS(i){return i instanceof Le?function(t){return`${t.field.canonicalString()} ${t.op} ${zl(t.value)}`}(i):i instanceof Xe?function(t){return t.op.toString()+" {"+t.getFilters().map(GS).join(" ,")+"}"}(i):"Filter"}class _k extends Le{constructor(e,t,n){super(e,t,n),this.key=se.fromName(n.referenceValue)}matches(e){const t=se.comparator(e.key,this.key);return this.matchesComparison(t)}}class yk extends Le{constructor(e,t){super(e,"in",t),this.keys=KS("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class vk extends Le{constructor(e,t){super(e,"not-in",t),this.keys=KS("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function KS(i,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(n=>se.fromName(n.referenceValue))}class Ek extends Le{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return mh(t)&&fh(t.arrayValue,this.value)}}class QS extends Le{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&fh(this.value.arrayValue,t)}}class Tk extends Le{constructor(e,t){super(e,"not-in",t)}matches(e){if(fh(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!fh(this.value.arrayValue,t)}}class wk extends Le{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!mh(t)||!t.arrayValue.values)&&t.arrayValue.values.some(n=>fh(this.value.arrayValue,n))}}/**
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
 */class bk{constructor(e,t=null,n=[],a=[],l=null,c=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=a,this.limit=l,this.startAt=c,this.endAt=f,this.Ie=null}}function $_(i,e=null,t=[],n=[],a=null,l=null,c=null){return new bk(i,e,t,n,a,l,c)}function no(i){const e=le(i);if(e.Ie===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(n=>W_(n)).join(","),t+="|ob:",t+=e.orderBy.map(n=>function(l){return l.field.canonicalString()+l.dir}(n)).join(","),Oh(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>zl(n)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>zl(n)).join(",")),e.Ie=t}return e.Ie}function xh(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!pk(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!jS(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!wb(i.startAt,e.startAt)&&wb(i.endAt,e.endAt)}function tm(i){return se.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}function nm(i,e){return i.filters.filter(t=>t instanceof Le&&t.field.isEqual(e))}function bb(i,e,t){let n=kf,a=!0;for(const l of nm(i,e)){let c=kf,f=!0;switch(l.op){case"<":case"<=":c=mk(l.value);break;case"==":case"in":case">=":c=l.value;break;case">":c=l.value,f=!1;break;case"!=":case"not-in":c=kf}vb({value:n,inclusive:a},{value:c,inclusive:f})<0&&(n=c,a=f)}if(t!==null){for(let l=0;l<i.orderBy.length;++l)if(i.orderBy[l].field.isEqual(e)){const c=t.position[l];vb({value:n,inclusive:a},{value:c,inclusive:t.inclusive})<0&&(n=c,a=t.inclusive);break}}return{value:n,inclusive:a}}function Ib(i,e,t){let n=Is,a=!0;for(const l of nm(i,e)){let c=Is,f=!0;switch(l.op){case">=":case">":c=gk(l.value),f=!1;break;case"==":case"in":case"<=":c=l.value;break;case"<":c=l.value,f=!1;break;case"!=":case"not-in":c=Is}Eb({value:n,inclusive:a},{value:c,inclusive:f})>0&&(n=c,a=f)}if(t!==null){for(let l=0;l<i.orderBy.length;++l)if(i.orderBy[l].field.isEqual(e)){const c=t.position[l];Eb({value:n,inclusive:a},{value:c,inclusive:t.inclusive})>0&&(n=c,a=t.inclusive);break}}return{value:n,inclusive:a}}/**
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
 */class Lr{constructor(e,t=null,n=[],a=[],l=null,c="F",f=null,m=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=a,this.limit=l,this.limitType=c,this.startAt=f,this.endAt=m,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function YS(i,e,t,n,a,l,c,f){return new Lr(i,e,t,n,a,l,c,f)}function ru(i){return new Lr(i)}function Ab(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function tv(i){return i.collectionGroup!==null}function Rl(i){const e=le(i);if(e.Ee===null){e.Ee=[];const t=new Set;for(const l of e.explicitOrderBy)e.Ee.push(l),t.add(l.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let f=new Je(dt.comparator);return c.filters.forEach(m=>{m.getFlattenedFilters().forEach(p=>{p.isInequality()&&(f=f.add(p.field))})}),f})(e).forEach(l=>{t.has(l.canonicalString())||l.isKeyField()||e.Ee.push(new gh(l,n))}),t.has(dt.keyField().canonicalString())||e.Ee.push(new gh(dt.keyField(),n))}return e.Ee}function An(i){const e=le(i);return e.de||(e.de=Ik(e,Rl(i))),e.de}function Ik(i,e){if(i.limitType==="F")return $_(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map(a=>{const l=a.dir==="desc"?"asc":"desc";return new gh(a.field,l)});const t=i.endAt?new Bs(i.endAt.position,i.endAt.inclusive):null,n=i.startAt?new Bs(i.startAt.position,i.startAt.inclusive):null;return $_(i.path,i.collectionGroup,e,i.filters,i.limit,t,n)}}function X_(i,e){const t=i.filters.concat([e]);return new Lr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),t,i.limit,i.limitType,i.startAt,i.endAt)}function im(i,e,t){return new Lr(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function kh(i,e){return xh(An(i),An(e))&&i.limitType===e.limitType}function WS(i){return`${no(An(i))}|lt:${i.limitType}`}function yl(i){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(a=>GS(a)).join(", ")}]`),Oh(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(a=>function(c){return`${c.field.canonicalString()} (${c.dir})`}(a)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(a=>zl(a)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(a=>zl(a)).join(",")),`Target(${n})`}(An(i))}; limitType=${i.limitType})`}function Mh(i,e){return e.isFoundDocument()&&function(n,a){const l=a.key.path;return n.collectionGroup!==null?a.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(l):se.isDocumentKey(n.path)?n.path.isEqual(l):n.path.isImmediateParentOf(l)}(i,e)&&function(n,a){for(const l of Rl(n))if(!l.field.isKeyField()&&a.data.field(l.field)===null)return!1;return!0}(i,e)&&function(n,a){for(const l of n.filters)if(!l.matches(a))return!1;return!0}(i,e)&&function(n,a){return!(n.startAt&&!function(c,f,m){const p=Tb(c,f,m);return c.inclusive?p<=0:p<0}(n.startAt,Rl(n),a)||n.endAt&&!function(c,f,m){const p=Tb(c,f,m);return c.inclusive?p>=0:p>0}(n.endAt,Rl(n),a))}(i,e)}function $S(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function XS(i){return(e,t)=>{let n=!1;for(const a of Rl(i)){const l=Ak(a,e,t);if(l!==0)return l;n=n||a.field.isKeyField()}return 0}}function Ak(i,e,t){const n=i.field.isKeyField()?se.comparator(e.key,t.key):function(l,c,f){const m=c.data.field(l),p=f.data.field(l);return m!==null&&p!==null?Us(m,p):ce(42886)}(i.field,e,t);switch(i.dir){case"asc":return n;case"desc":return-1*n;default:return ce(19790,{direction:i.dir})}}/**
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
 */class Ur{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[a,l]of n)if(this.equalsFn(a,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),a=this.inner[n];if(a===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let l=0;l<a.length;l++)if(this.equalsFn(a[l][0],e))return void(a[l]=[e,t]);a.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let a=0;a<n.length;a++)if(this.equalsFn(n[a][0],e))return n.length===1?delete this.inner[t]:n.splice(a,1),this.innerSize--,!0;return!1}forEach(e){Ws(this.inner,(t,n)=>{for(const[a,l]of n)e(a,l)})}isEmpty(){return NS(this.inner)}size(){return this.innerSize}}/**
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
 */const Sk=new at(se.comparator);function xn(){return Sk}const JS=new at(se.comparator);function Mc(...i){let e=JS;for(const t of i)e=e.insert(t.key,t);return e}function ZS(i){let e=JS;return i.forEach((t,n)=>e=e.insert(t,n.overlayedDocument)),e}function Qi(){return $c()}function eR(){return $c()}function $c(){return new Ur(i=>i.toString(),(i,e)=>i.isEqual(e))}const Rk=new at(se.comparator),Ck=new Je(se.comparator);function Re(...i){let e=Ck;for(const t of i)e=e.add(t);return e}const Dk=new Je(Ie);function nv(){return Dk}/**
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
 */function iv(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:lh(e)?"-0":e}}function tR(i){return{integerValue:""+i}}function nR(i,e){return ES(e)?tR(e):iv(i,e)}/**
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
 */class km{constructor(){this._=void 0}}function Pk(i,e,t){return i instanceof ql?function(a,l){const c={fields:{[xS]:{stringValue:VS},[MS]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return l&&Om(l)&&(l=Vm(l)),l&&(c.fields[kS]=l),{mapValue:c}}(t,e):i instanceof io?rR(i,e):i instanceof ro?sR(i,e):function(a,l){const c=iR(a,l),f=Sb(c)+Sb(a.Re);return Q_(c)&&Q_(a.Re)?tR(f):iv(a.serializer,f)}(i,e)}function Nk(i,e,t){return i instanceof io?rR(i,e):i instanceof ro?sR(i,e):t}function iR(i,e){return i instanceof jl?function(n){return Q_(n)||function(l){return!!l&&"doubleValue"in l}(n)}(e)?e:{integerValue:0}:null}class ql extends km{}class io extends km{constructor(e){super(),this.elements=e}}function rR(i,e){const t=aR(e);for(const n of i.elements)t.some(a=>Zi(a,n))||t.push(n);return{arrayValue:{values:t}}}class ro extends km{constructor(e){super(),this.elements=e}}function sR(i,e){let t=aR(e);for(const n of i.elements)t=t.filter(a=>!Zi(a,n));return{arrayValue:{values:t}}}class jl extends km{constructor(e,t){super(),this.serializer=e,this.Re=t}}function Sb(i){return ct(i.integerValue||i.doubleValue)}function aR(i){return mh(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}/**
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
 */class Lh{constructor(e,t){this.field=e,this.transform=t}}function Ok(i,e){return i.field.isEqual(e.field)&&function(n,a){return n instanceof io&&a instanceof io||n instanceof ro&&a instanceof ro?Vl(n.elements,a.elements,Zi):n instanceof jl&&a instanceof jl?Zi(n.Re,a.Re):n instanceof ql&&a instanceof ql}(i.transform,e.transform)}class Vk{constructor(e,t){this.version=e,this.transformResults=t}}class ft{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ft}static exists(e){return new ft(void 0,e)}static updateTime(e){return new ft(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Uf(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class Mm{}function oR(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new au(i.key,ft.none()):new su(i.key,i.data,ft.none());{const t=i.data,n=ln.empty();let a=new Je(dt.comparator);for(let l of e.fields)if(!a.has(l)){let c=t.field(l);c===null&&l.length>1&&(l=l.popLast(),c=t.field(l)),c===null?n.delete(l):n.set(l,c),a=a.add(l)}return new Br(i.key,n,new Vn(a.toArray()),ft.none())}}function xk(i,e,t){i instanceof su?function(a,l,c){const f=a.value.clone(),m=Cb(a.fieldTransforms,l,c.transformResults);f.setAll(m),l.convertToFoundDocument(c.version,f).setHasCommittedMutations()}(i,e,t):i instanceof Br?function(a,l,c){if(!Uf(a.precondition,l))return void l.convertToUnknownDocument(c.version);const f=Cb(a.fieldTransforms,l,c.transformResults),m=l.data;m.setAll(lR(a)),m.setAll(f),l.convertToFoundDocument(c.version,m).setHasCommittedMutations()}(i,e,t):function(a,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()}(0,e,t)}function Xc(i,e,t,n){return i instanceof su?function(l,c,f,m){if(!Uf(l.precondition,c))return f;const p=l.value.clone(),y=Db(l.fieldTransforms,m,c);return p.setAll(y),c.convertToFoundDocument(c.version,p).setHasLocalMutations(),null}(i,e,t,n):i instanceof Br?function(l,c,f,m){if(!Uf(l.precondition,c))return f;const p=Db(l.fieldTransforms,m,c),y=c.data;return y.setAll(lR(l)),y.setAll(p),c.convertToFoundDocument(c.version,y).setHasLocalMutations(),f===null?null:f.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(T=>T.field))}(i,e,t,n):function(l,c,f){return Uf(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):f}(i,e,t)}function kk(i,e){let t=null;for(const n of i.fieldTransforms){const a=e.data.field(n.field),l=iR(n.transform,a||null);l!=null&&(t===null&&(t=ln.empty()),t.set(n.field,l))}return t||null}function Rb(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!function(n,a){return n===void 0&&a===void 0||!(!n||!a)&&Vl(n,a,(l,c)=>Ok(l,c))}(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class su extends Mm{constructor(e,t,n,a=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class Br extends Mm{constructor(e,t,n,a,l=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=a,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function lR(i){const e=new Map;return i.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const n=i.data.field(t);e.set(t,n)}}),e}function Cb(i,e,t){const n=new Map;de(i.length===t.length,32656,{Ve:t.length,me:i.length});for(let a=0;a<t.length;a++){const l=i[a],c=l.transform,f=e.data.field(l.field);n.set(l.field,Nk(c,f,t[a]))}return n}function Db(i,e,t){const n=new Map;for(const a of i){const l=a.transform,c=t.data.field(a.field);n.set(a.field,Pk(l,c,e))}return n}class au extends Mm{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class rv extends Mm{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class sv{constructor(e,t,n,a){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=a}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let a=0;a<this.mutations.length;a++){const l=this.mutations[a];l.key.isEqual(e.key)&&xk(l,e,n[a])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Xc(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Xc(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=eR();return this.mutations.forEach(a=>{const l=e.get(a.key),c=l.overlayedDocument;let f=this.applyToLocalView(c,l.mutatedFields);f=t.has(a.key)?null:f;const m=oR(c,f);m!==null&&n.set(a.key,m),c.isValidDocument()||c.convertToNoDocument(ge.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Re())}isEqual(e){return this.batchId===e.batchId&&Vl(this.mutations,e.mutations,(t,n)=>Rb(t,n))&&Vl(this.baseMutations,e.baseMutations,(t,n)=>Rb(t,n))}}class av{constructor(e,t,n,a){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=a}static from(e,t,n){de(e.mutations.length===n.length,58842,{fe:e.mutations.length,ge:n.length});let a=function(){return Rk}();const l=e.mutations;for(let c=0;c<l.length;c++)a=a.insert(l[c].key,n[c].version);return new av(e,t,n,a)}}/**
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
 */class ov{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Mk{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Mt,Fe;function uR(i){switch(i){case j.OK:return ce(64938);case j.CANCELLED:case j.UNKNOWN:case j.DEADLINE_EXCEEDED:case j.RESOURCE_EXHAUSTED:case j.INTERNAL:case j.UNAVAILABLE:case j.UNAUTHENTICATED:return!1;case j.INVALID_ARGUMENT:case j.NOT_FOUND:case j.ALREADY_EXISTS:case j.PERMISSION_DENIED:case j.FAILED_PRECONDITION:case j.ABORTED:case j.OUT_OF_RANGE:case j.UNIMPLEMENTED:case j.DATA_LOSS:return!0;default:return ce(15467,{code:i})}}function cR(i){if(i===void 0)return Dt("GRPC error has no .code"),j.UNKNOWN;switch(i){case Mt.OK:return j.OK;case Mt.CANCELLED:return j.CANCELLED;case Mt.UNKNOWN:return j.UNKNOWN;case Mt.DEADLINE_EXCEEDED:return j.DEADLINE_EXCEEDED;case Mt.RESOURCE_EXHAUSTED:return j.RESOURCE_EXHAUSTED;case Mt.INTERNAL:return j.INTERNAL;case Mt.UNAVAILABLE:return j.UNAVAILABLE;case Mt.UNAUTHENTICATED:return j.UNAUTHENTICATED;case Mt.INVALID_ARGUMENT:return j.INVALID_ARGUMENT;case Mt.NOT_FOUND:return j.NOT_FOUND;case Mt.ALREADY_EXISTS:return j.ALREADY_EXISTS;case Mt.PERMISSION_DENIED:return j.PERMISSION_DENIED;case Mt.FAILED_PRECONDITION:return j.FAILED_PRECONDITION;case Mt.ABORTED:return j.ABORTED;case Mt.OUT_OF_RANGE:return j.OUT_OF_RANGE;case Mt.UNIMPLEMENTED:return j.UNIMPLEMENTED;case Mt.DATA_LOSS:return j.DATA_LOSS;default:return ce(39323,{code:i})}}(Fe=Mt||(Mt={}))[Fe.OK=0]="OK",Fe[Fe.CANCELLED=1]="CANCELLED",Fe[Fe.UNKNOWN=2]="UNKNOWN",Fe[Fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Fe[Fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Fe[Fe.NOT_FOUND=5]="NOT_FOUND",Fe[Fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Fe[Fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Fe[Fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Fe[Fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Fe[Fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Fe[Fe.ABORTED=10]="ABORTED",Fe[Fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Fe[Fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Fe[Fe.INTERNAL=13]="INTERNAL",Fe[Fe.UNAVAILABLE=14]="UNAVAILABLE",Fe[Fe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const Lk=new Cs([4294967295,4294967295],0);function Pb(i){const e=Gy().encode(i),t=new sS;return t.update(e),new Uint8Array(t.digest())}function Nb(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),a=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Cs([t,n],0),new Cs([a,l],0)]}class lv{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Lc(`Invalid padding: ${t}`);if(n<0)throw new Lc(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new Lc(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new Lc(`Invalid padding when bitmap length is 0: ${t}`);this.pe=8*e.length-t,this.ye=Cs.fromNumber(this.pe)}we(e,t,n){let a=e.add(t.multiply(Cs.fromNumber(n)));return a.compare(Lk)===1&&(a=new Cs([a.getBits(0),a.getBits(1)],0)),a.modulo(this.ye).toNumber()}be(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const t=Pb(e),[n,a]=Nb(t);for(let l=0;l<this.hashCount;l++){const c=this.we(n,a,l);if(!this.be(c))return!1}return!0}static create(e,t,n){const a=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),c=new lv(l,a,t);return n.forEach(f=>c.insert(f)),c}insert(e){if(this.pe===0)return;const t=Pb(e),[n,a]=Nb(t);for(let l=0;l<this.hashCount;l++){const c=this.we(n,a,l);this.Se(c)}}Se(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Lc extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Uh{constructor(e,t,n,a,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=a,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const a=new Map;return a.set(e,Bh.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Uh(ge.min(),a,new at(Ie),xn(),Re())}}class Bh{constructor(e,t,n,a,l){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=a,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new Bh(n,t,Re(),Re(),Re())}}/**
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
 */class Bf{constructor(e,t,n,a){this.De=e,this.removedTargetIds=t,this.key=n,this.ve=a}}class hR{constructor(e,t){this.targetId=e,this.Ce=t}}class dR{constructor(e,t,n=bt.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=a}}class Ob{constructor(){this.Fe=0,this.Me=Vb(),this.xe=bt.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=Re(),t=Re(),n=Re();return this.Me.forEach((a,l)=>{switch(l){case 0:e=e.add(a);break;case 2:t=t.add(a);break;case 1:n=n.add(a);break;default:ce(38017,{changeType:l})}}),new Bh(this.xe,this.Oe,e,t,n)}Qe(){this.Ne=!1,this.Me=Vb()}$e(e,t){this.Ne=!0,this.Me=this.Me.insert(e,t)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,de(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class Uk{constructor(e){this.ze=e,this.je=new Map,this.He=xn(),this.Je=Tf(),this.Ye=Tf(),this.Ze=new at(Ie)}Xe(e){for(const t of e.De)e.ve&&e.ve.isFoundDocument()?this.et(t,e.ve):this.tt(t,e.key,e.ve);for(const t of e.removedTargetIds)this.tt(t,e.key,e.ve)}nt(e){this.forEachTarget(e,t=>{const n=this.rt(t);switch(e.state){case 0:this.it(t)&&n.ke(e.resumeToken);break;case 1:n.We(),n.Be||n.Qe(),n.ke(e.resumeToken);break;case 2:n.We(),n.Be||this.removeTarget(t);break;case 3:this.it(t)&&(n.Ge(),n.ke(e.resumeToken));break;case 4:this.it(t)&&(this.st(t),n.ke(e.resumeToken));break;default:ce(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.je.forEach((n,a)=>{this.it(a)&&t(a)})}ot(e){const t=e.targetId,n=e.Ce.count,a=this._t(t);if(a){const l=a.target;if(tm(l))if(n===0){const c=new se(l.path);this.tt(t,c,ot.newNoDocument(c,ge.min()))}else de(n===1,20013,{expectedCount:n});else{const c=this.ut(t);if(c!==n){const f=this.ct(e),m=f?this.lt(f,e,c):1;if(m!==0){this.st(t);const p=m===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,p)}}}}}ct(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:a=0},hashCount:l=0}=t;let c,f;try{c=Vr(n).toUint8Array()}catch(m){if(m instanceof OS)return Ji("Decoding the base64 bloom filter in existence filter failed ("+m.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw m}try{f=new lv(c,a,l)}catch(m){return Ji(m instanceof Lc?"BloomFilter error: ":"Applying bloom filter failed: ",m),null}return f.pe===0?null:f}lt(e,t,n){return t.Ce.count===n-this.Tt(e,t.targetId)?0:2}Tt(e,t){const n=this.ze.getRemoteKeysForTarget(t);let a=0;return n.forEach(l=>{const c=this.ze.Pt(),f=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;e.mightContain(f)||(this.tt(t,l,null),a++)}),a}It(e){const t=new Map;this.je.forEach((l,c)=>{const f=this._t(c);if(f){if(l.current&&tm(f.target)){const m=new se(f.target.path);this.Et(m).has(c)||this.dt(c,m)||this.tt(c,m,ot.newNoDocument(m,e))}l.Le&&(t.set(c,l.qe()),l.Qe())}});let n=Re();this.Ye.forEach((l,c)=>{let f=!0;c.forEachWhile(m=>{const p=this._t(m);return!p||p.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)}),f&&(n=n.add(l))}),this.He.forEach((l,c)=>c.setReadTime(e));const a=new Uh(e,t,this.Ze,this.He,n);return this.He=xn(),this.Je=Tf(),this.Ye=Tf(),this.Ze=new at(Ie),a}et(e,t){if(!this.it(e))return;const n=this.dt(e,t.key)?2:0;this.rt(e).$e(t.key,n),this.He=this.He.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.Ye=this.Ye.insert(t.key,this.At(t.key).add(e))}tt(e,t,n){if(!this.it(e))return;const a=this.rt(e);this.dt(e,t)?a.$e(t,1):a.Ue(t),this.Ye=this.Ye.insert(t,this.At(t).delete(e)),this.Ye=this.Ye.insert(t,this.At(t).add(e)),n&&(this.He=this.He.insert(t,n))}removeTarget(e){this.je.delete(e)}ut(e){const t=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let t=this.je.get(e);return t||(t=new Ob,this.je.set(e,t)),t}At(e){let t=this.Ye.get(e);return t||(t=new Je(Ie),this.Ye=this.Ye.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new Je(Ie),this.Je=this.Je.insert(e,t)),t}it(e){const t=this._t(e)!==null;return t||ee("WatchChangeAggregator","Detected inactive target",e),t}_t(e){const t=this.je.get(e);return t&&t.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new Ob),this.ze.getRemoteKeysForTarget(e).forEach(t=>{this.tt(e,t,null)})}dt(e,t){return this.ze.getRemoteKeysForTarget(e).has(t)}}function Tf(){return new at(se.comparator)}function Vb(){return new at(se.comparator)}const Bk={asc:"ASCENDING",desc:"DESCENDING"},zk={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Fk={and:"AND",or:"OR"};class qk{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function J_(i,e){return i.useProto3Json||Oh(e)?e:{value:e}}function Hl(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function fR(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function jk(i,e){return Hl(i,e.toTimestamp())}function Pt(i){return de(!!i,49232),ge.fromTimestamp(function(t){const n=Or(t);return new mt(n.seconds,n.nanos)}(i))}function uv(i,e){return Z_(i,e).canonicalString()}function Z_(i,e){const t=function(a){return new Me(["projects",a.projectId,"databases",a.database])}(i).child("documents");return e===void 0?t:t.child(e)}function mR(i){const e=Me.fromString(i);return de(IR(e),10190,{key:e.toString()}),e}function ph(i,e){return uv(i.databaseId,e.path)}function Wi(i,e){const t=mR(e);if(t.get(1)!==i.databaseId.projectId)throw new Z(j.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new Z(j.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new se(_R(t))}function gR(i,e){return uv(i.databaseId,e)}function pR(i){const e=mR(i);return e.length===4?Me.emptyPath():_R(e)}function ey(i){return new Me(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function _R(i){return de(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}function xb(i,e,t){return{name:ph(i,e),fields:t.value.mapValue.fields}}function yR(i,e,t){const n=Wi(i,e.name),a=Pt(e.updateTime),l=e.createTime?Pt(e.createTime):ge.min(),c=new ln({mapValue:{fields:e.fields}}),f=ot.newFoundDocument(n,a,l,c);return t&&f.setHasCommittedMutations(),t?f.setHasCommittedMutations():f}function Hk(i,e){return"found"in e?function(n,a){de(!!a.found,43571),a.found.name,a.found.updateTime;const l=Wi(n,a.found.name),c=Pt(a.found.updateTime),f=a.found.createTime?Pt(a.found.createTime):ge.min(),m=new ln({mapValue:{fields:a.found.fields}});return ot.newFoundDocument(l,c,f,m)}(i,e):"missing"in e?function(n,a){de(!!a.missing,3894),de(!!a.readTime,22933);const l=Wi(n,a.missing),c=Pt(a.readTime);return ot.newNoDocument(l,c)}(i,e):ce(7234,{result:e})}function Gk(i,e){let t;if("targetChange"in e){e.targetChange;const n=function(p){return p==="NO_CHANGE"?0:p==="ADD"?1:p==="REMOVE"?2:p==="CURRENT"?3:p==="RESET"?4:ce(39313,{state:p})}(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],l=function(p,y){return p.useProto3Json?(de(y===void 0||typeof y=="string",58123),bt.fromBase64String(y||"")):(de(y===void 0||y instanceof Buffer||y instanceof Uint8Array,16193),bt.fromUint8Array(y||new Uint8Array))}(i,e.targetChange.resumeToken),c=e.targetChange.cause,f=c&&function(p){const y=p.code===void 0?j.UNKNOWN:cR(p.code);return new Z(y,p.message||"")}(c);t=new dR(n,a,l,f||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const a=Wi(i,n.document.name),l=Pt(n.document.updateTime),c=n.document.createTime?Pt(n.document.createTime):ge.min(),f=new ln({mapValue:{fields:n.document.fields}}),m=ot.newFoundDocument(a,l,c,f),p=n.targetIds||[],y=n.removedTargetIds||[];t=new Bf(p,y,m.key,m)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const a=Wi(i,n.document),l=n.readTime?Pt(n.readTime):ge.min(),c=ot.newNoDocument(a,l),f=n.removedTargetIds||[];t=new Bf([],f,c.key,c)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const a=Wi(i,n.document),l=n.removedTargetIds||[];t=new Bf([],l,a,null)}else{if(!("filter"in e))return ce(11601,{Vt:e});{e.filter;const n=e.filter;n.targetId;const{count:a=0,unchangedNames:l}=n,c=new Mk(a,l),f=n.targetId;t=new hR(f,c)}}return t}function _h(i,e){let t;if(e instanceof su)t={update:xb(i,e.key,e.value)};else if(e instanceof au)t={delete:ph(i,e.key)};else if(e instanceof Br)t={update:xb(i,e.key,e.data),updateMask:Xk(e.fieldMask)};else{if(!(e instanceof rv))return ce(16599,{ft:e.type});t={verify:ph(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(n=>function(l,c){const f=c.transform;if(f instanceof ql)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof io)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof ro)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof jl)return{fieldPath:c.field.canonicalString(),increment:f.Re};throw ce(20930,{transform:c.transform})}(0,n))),e.precondition.isNone||(t.currentDocument=function(a,l){return l.updateTime!==void 0?{updateTime:jk(a,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:ce(27497)}(i,e.precondition)),t}function ty(i,e){const t=e.currentDocument?function(l){return l.updateTime!==void 0?ft.updateTime(Pt(l.updateTime)):l.exists!==void 0?ft.exists(l.exists):ft.none()}(e.currentDocument):ft.none(),n=e.updateTransforms?e.updateTransforms.map(a=>function(c,f){let m=null;if("setToServerValue"in f)de(f.setToServerValue==="REQUEST_TIME",16630,{proto:f}),m=new ql;else if("appendMissingElements"in f){const y=f.appendMissingElements.values||[];m=new io(y)}else if("removeAllFromArray"in f){const y=f.removeAllFromArray.values||[];m=new ro(y)}else"increment"in f?m=new jl(c,f.increment):ce(16584,{proto:f});const p=dt.fromServerFormat(f.fieldPath);return new Lh(p,m)}(i,a)):[];if(e.update){e.update.name;const a=Wi(i,e.update.name),l=new ln({mapValue:{fields:e.update.fields}});if(e.updateMask){const c=function(m){const p=m.fieldPaths||[];return new Vn(p.map(y=>dt.fromServerFormat(y)))}(e.updateMask);return new Br(a,l,c,t,n)}return new su(a,l,t,n)}if(e.delete){const a=Wi(i,e.delete);return new au(a,t)}if(e.verify){const a=Wi(i,e.verify);return new rv(a,t)}return ce(1463,{proto:e})}function Kk(i,e){return i&&i.length>0?(de(e!==void 0,14353),i.map(t=>function(a,l){let c=a.updateTime?Pt(a.updateTime):Pt(l);return c.isEqual(ge.min())&&(c=Pt(l)),new Vk(c,a.transformResults||[])}(t,e))):[]}function vR(i,e){return{documents:[gR(i,e.path)]}}function ER(i,e){const t={structuredQuery:{}},n=e.path;let a;e.collectionGroup!==null?(a=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=gR(i,a);const l=function(p){if(p.length!==0)return bR(Xe.create(p,"and"))}(e.filters);l&&(t.structuredQuery.where=l);const c=function(p){if(p.length!==0)return p.map(y=>function(b){return{field:vl(b.field),direction:Yk(b.dir)}}(y))}(e.orderBy);c&&(t.structuredQuery.orderBy=c);const f=J_(i,e.limit);return f!==null&&(t.structuredQuery.limit=f),e.startAt&&(t.structuredQuery.startAt=function(p){return{before:p.inclusive,values:p.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(p){return{before:!p.inclusive,values:p.position}}(e.endAt)),{gt:t,parent:a}}function TR(i){let e=pR(i.parent);const t=i.structuredQuery,n=t.from?t.from.length:0;let a=null;if(n>0){de(n===1,65062);const y=t.from[0];y.allDescendants?a=y.collectionId:e=e.child(y.collectionId)}let l=[];t.where&&(l=function(T){const b=wR(T);return b instanceof Xe&&ev(b)?b.getFilters():[b]}(t.where));let c=[];t.orderBy&&(c=function(T){return T.map(b=>function(G){return new gh(El(G.field),function(Y){switch(Y){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(G.direction))}(b))}(t.orderBy));let f=null;t.limit&&(f=function(T){let b;return b=typeof T=="object"?T.value:T,Oh(b)?null:b}(t.limit));let m=null;t.startAt&&(m=function(T){const b=!!T.before,O=T.values||[];return new Bs(O,b)}(t.startAt));let p=null;return t.endAt&&(p=function(T){const b=!T.before,O=T.values||[];return new Bs(O,b)}(t.endAt)),YS(e,a,c,l,f,"F",m,p)}function Qk(i,e){const t=function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ce(28987,{purpose:a})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function wR(i){return i.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=El(t.unaryFilter.field);return Le.create(n,"==",{doubleValue:NaN});case"IS_NULL":const a=El(t.unaryFilter.field);return Le.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=El(t.unaryFilter.field);return Le.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=El(t.unaryFilter.field);return Le.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ce(61313);default:return ce(60726)}}(i):i.fieldFilter!==void 0?function(t){return Le.create(El(t.fieldFilter.field),function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ce(58110);default:return ce(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(i):i.compositeFilter!==void 0?function(t){return Xe.create(t.compositeFilter.filters.map(n=>wR(n)),function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return ce(1026)}}(t.compositeFilter.op))}(i):ce(30097,{filter:i})}function Yk(i){return Bk[i]}function Wk(i){return zk[i]}function $k(i){return Fk[i]}function vl(i){return{fieldPath:i.canonicalString()}}function El(i){return dt.fromServerFormat(i.fieldPath)}function bR(i){return i instanceof Le?function(t){if(t.op==="=="){if(yb(t.value))return{unaryFilter:{field:vl(t.field),op:"IS_NAN"}};if(_b(t.value))return{unaryFilter:{field:vl(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(yb(t.value))return{unaryFilter:{field:vl(t.field),op:"IS_NOT_NAN"}};if(_b(t.value))return{unaryFilter:{field:vl(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:vl(t.field),op:Wk(t.op),value:t.value}}}(i):i instanceof Xe?function(t){const n=t.getFilters().map(a=>bR(a));return n.length===1?n[0]:{compositeFilter:{op:$k(t.op),filters:n}}}(i):ce(54877,{filter:i})}function Xk(i){const e=[];return i.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function IR(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}/**
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
 */class Cr{constructor(e,t,n,a,l=ge.min(),c=ge.min(),f=bt.EMPTY_BYTE_STRING,m=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=a,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=f,this.expectedCount=m}withSequenceNumber(e){return new Cr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Cr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Cr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Cr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class AR{constructor(e){this.wt=e}}function Jk(i,e){let t;if(e.document)t=yR(i.wt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const n=se.fromSegments(e.noDocument.path),a=ao(e.noDocument.readTime);t=ot.newNoDocument(n,a),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return ce(56709);{const n=se.fromSegments(e.unknownDocument.path),a=ao(e.unknownDocument.version);t=ot.newUnknownDocument(n,a)}}return e.readTime&&t.setReadTime(function(a){const l=new mt(a[0],a[1]);return ge.fromTimestamp(l)}(e.readTime)),t}function kb(i,e){const t=e.key,n={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:rm(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())n.document=function(l,c){return{name:ph(l,c.key),fields:c.data.value.mapValue.fields,updateTime:Hl(l,c.version.toTimestamp()),createTime:Hl(l,c.createTime.toTimestamp())}}(i.wt,e);else if(e.isNoDocument())n.noDocument={path:t.path.toArray(),readTime:so(e.version)};else{if(!e.isUnknownDocument())return ce(57904,{document:e});n.unknownDocument={path:t.path.toArray(),version:so(e.version)}}return n}function rm(i){const e=i.toTimestamp();return[e.seconds,e.nanoseconds]}function so(i){const e=i.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function ao(i){const e=new mt(i.seconds,i.nanoseconds);return ge.fromTimestamp(e)}function Fa(i,e){const t=(e.baseMutations||[]).map(l=>ty(i.wt,l));for(let l=0;l<e.mutations.length-1;++l){const c=e.mutations[l];if(l+1<e.mutations.length&&e.mutations[l+1].transform!==void 0){const f=e.mutations[l+1];c.updateTransforms=f.transform.fieldTransforms,e.mutations.splice(l+1,1),++l}}const n=e.mutations.map(l=>ty(i.wt,l)),a=mt.fromMillis(e.localWriteTimeMs);return new sv(e.batchId,a,t,n)}function Uc(i){const e=ao(i.readTime),t=i.lastLimboFreeSnapshotVersion!==void 0?ao(i.lastLimboFreeSnapshotVersion):ge.min();let n;return n=function(l){return l.documents!==void 0}(i.query)?function(l){const c=l.documents.length;return de(c===1,1966,{count:c}),An(ru(pR(l.documents[0])))}(i.query):function(l){return An(TR(l))}(i.query),new Cr(n,i.targetId,"TargetPurposeListen",i.lastListenSequenceNumber,e,t,bt.fromBase64String(i.resumeToken))}function SR(i,e){const t=so(e.snapshotVersion),n=so(e.lastLimboFreeSnapshotVersion);let a;a=tm(e.target)?vR(i.wt,e.target):ER(i.wt,e.target).gt;const l=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:no(e.target),readTime:t,resumeToken:l,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:n,query:a}}function cv(i){const e=TR({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?im(e,e.limit,"L"):e}function y_(i,e){return new ov(e.largestBatchId,ty(i.wt,e.overlayMutation))}function Mb(i,e){const t=e.path.lastSegment();return[i,pn(e.path.popLast()),t]}function Lb(i,e,t,n){return{indexId:i,uid:e,sequenceNumber:t,readTime:so(n.readTime),documentKey:pn(n.documentKey.path),largestBatchId:n.largestBatchId}}/**
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
 */class Zk{getBundleMetadata(e,t){return Ub(e).get(t).next(n=>{if(n)return function(l){return{id:l.bundleId,createTime:ao(l.createTime),version:l.version}}(n)})}saveBundleMetadata(e,t){return Ub(e).put(function(a){return{bundleId:a.id,createTime:so(Pt(a.createTime)),version:a.version}}(t))}getNamedQuery(e,t){return Bb(e).get(t).next(n=>{if(n)return function(l){return{name:l.name,query:cv(l.bundledQuery),readTime:ao(l.readTime)}}(n)})}saveNamedQuery(e,t){return Bb(e).put(function(a){return{name:a.name,readTime:so(Pt(a.readTime)),bundledQuery:a.bundledQuery}}(t))}}function Ub(i){return Ht(i,Dm)}function Bb(i){return Ht(i,Pm)}/**
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
 */class Lm{constructor(e,t){this.serializer=e,this.userId=t}static bt(e,t){const n=t.uid||"";return new Lm(e,n)}getOverlay(e,t){return Ac(e).get(Mb(this.userId,t)).next(n=>n?y_(this.serializer,n):null)}getOverlays(e,t){const n=Qi();return U.forEach(t,a=>this.getOverlay(e,a).next(l=>{l!==null&&n.set(a,l)})).next(()=>n)}saveOverlays(e,t,n){const a=[];return n.forEach((l,c)=>{const f=new ov(t,c);a.push(this.St(e,f))}),U.waitFor(a)}removeOverlaysForBatchId(e,t,n){const a=new Set;t.forEach(c=>a.add(pn(c.getCollectionPath())));const l=[];return a.forEach(c=>{const f=IDBKeyRange.bound([this.userId,c,n],[this.userId,c,n+1],!1,!0);l.push(Ac(e).X(j_,f))}),U.waitFor(l)}getOverlaysForCollection(e,t,n){const a=Qi(),l=pn(t),c=IDBKeyRange.bound([this.userId,l,n],[this.userId,l,Number.POSITIVE_INFINITY],!0);return Ac(e).J(j_,c).next(f=>{for(const m of f){const p=y_(this.serializer,m);a.set(p.getKey(),p)}return a})}getOverlaysForCollectionGroup(e,t,n,a){const l=Qi();let c;const f=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Ac(e).te({index:SS,range:f},(m,p,y)=>{const T=y_(this.serializer,p);l.size()<a||T.largestBatchId===c?(l.set(T.getKey(),T),c=T.largestBatchId):y.done()}).next(()=>l)}St(e,t){return Ac(e).put(function(a,l,c){const[f,m,p]=Mb(l,c.mutation.key);return{userId:l,collectionPath:m,documentId:p,collectionGroup:c.mutation.key.getCollectionGroup(),largestBatchId:c.largestBatchId,overlayMutation:_h(a.wt,c.mutation)}}(this.serializer,this.userId,t))}}function Ac(i){return Ht(i,Nm)}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class eM{Dt(e){return Ht(e,$y)}getSessionToken(e){return this.Dt(e).get("sessionToken").next(t=>{const n=t==null?void 0:t.value;return n?bt.fromUint8Array(n):bt.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.Dt(e).put({name:"sessionToken",value:t.toUint8Array()})}}/**
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
 */class qa{constructor(){}vt(e,t){this.Ct(e,t),t.Ft()}Ct(e,t){if("nullValue"in e)this.Mt(t,5);else if("booleanValue"in e)this.Mt(t,10),t.xt(e.booleanValue?1:0);else if("integerValue"in e)this.Mt(t,15),t.xt(ct(e.integerValue));else if("doubleValue"in e){const n=ct(e.doubleValue);isNaN(n)?this.Mt(t,13):(this.Mt(t,15),lh(n)?t.xt(0):t.xt(n))}else if("timestampValue"in e){let n=e.timestampValue;this.Mt(t,20),typeof n=="string"&&(n=Or(n)),t.Ot(`${n.seconds||""}`),t.xt(n.nanos||0)}else if("stringValue"in e)this.Nt(e.stringValue,t),this.Bt(t);else if("bytesValue"in e)this.Mt(t,30),t.Lt(Vr(e.bytesValue)),this.Bt(t);else if("referenceValue"in e)this.kt(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.Mt(t,45),t.xt(n.latitude||0),t.xt(n.longitude||0)}else"mapValue"in e?US(e)?this.Mt(t,Number.MAX_SAFE_INTEGER):xm(e)?this.qt(e.mapValue,t):(this.Qt(e.mapValue,t),this.Bt(t)):"arrayValue"in e?(this.$t(e.arrayValue,t),this.Bt(t)):ce(19022,{Ut:e})}Nt(e,t){this.Mt(t,25),this.Kt(e,t)}Kt(e,t){t.Ot(e)}Qt(e,t){const n=e.fields||{};this.Mt(t,55);for(const a of Object.keys(n))this.Nt(a,t),this.Ct(n[a],t)}qt(e,t){var n,a;const l=e.fields||{};this.Mt(t,53);const c=Bl,f=((a=(n=l[c].arrayValue)===null||n===void 0?void 0:n.values)===null||a===void 0?void 0:a.length)||0;this.Mt(t,15),t.xt(ct(f)),this.Nt(c,t),this.Ct(l[c],t)}$t(e,t){const n=e.values||[];this.Mt(t,50);for(const a of n)this.Ct(a,t)}kt(e,t){this.Mt(t,37),se.fromName(e).path.forEach(n=>{this.Mt(t,60),this.Kt(n,t)})}Mt(e,t){e.xt(t)}Bt(e){e.xt(2)}}qa.Wt=new qa;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law | agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dl=255;function tM(i){if(i===0)return 8;let e=0;return i>>4||(e+=4,i<<=4),i>>6||(e+=2,i<<=2),i>>7||(e+=1),e}function zb(i){const e=64-function(n){let a=0;for(let l=0;l<8;++l){const c=tM(255&n[l]);if(a+=c,c!==8)break}return a}(i);return Math.ceil(e/8)}class nM{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Gt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.zt(n.value),n=t.next();this.jt()}Ht(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Jt(n.value),n=t.next();this.Yt()}Zt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.zt(n);else if(n<2048)this.zt(960|n>>>6),this.zt(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.zt(480|n>>>12),this.zt(128|63&n>>>6),this.zt(128|63&n);else{const a=t.codePointAt(0);this.zt(240|a>>>18),this.zt(128|63&a>>>12),this.zt(128|63&a>>>6),this.zt(128|63&a)}}this.jt()}Xt(e){for(const t of e){const n=t.charCodeAt(0);if(n<128)this.Jt(n);else if(n<2048)this.Jt(960|n>>>6),this.Jt(128|63&n);else if(t<"\uD800"||"\uDBFF"<t)this.Jt(480|n>>>12),this.Jt(128|63&n>>>6),this.Jt(128|63&n);else{const a=t.codePointAt(0);this.Jt(240|a>>>18),this.Jt(128|63&a>>>12),this.Jt(128|63&a>>>6),this.Jt(128|63&a)}}this.Yt()}en(e){const t=this.tn(e),n=zb(t);this.nn(1+n),this.buffer[this.position++]=255&n;for(let a=t.length-n;a<t.length;++a)this.buffer[this.position++]=255&t[a]}rn(e){const t=this.tn(e),n=zb(t);this.nn(1+n),this.buffer[this.position++]=~(255&n);for(let a=t.length-n;a<t.length;++a)this.buffer[this.position++]=~(255&t[a])}sn(){this._n(dl),this._n(255)}an(){this.un(dl),this.un(255)}reset(){this.position=0}seed(e){this.nn(e.length),this.buffer.set(e,this.position),this.position+=e.length}cn(){return this.buffer.slice(0,this.position)}tn(e){const t=function(l){const c=new DataView(new ArrayBuffer(8));return c.setFloat64(0,l,!1),new Uint8Array(c.buffer)}(e),n=!!(128&t[0]);t[0]^=n?255:128;for(let a=1;a<t.length;++a)t[a]^=n?255:0;return t}zt(e){const t=255&e;t===0?(this._n(0),this._n(255)):t===dl?(this._n(dl),this._n(0)):this._n(t)}Jt(e){const t=255&e;t===0?(this.un(0),this.un(255)):t===dl?(this.un(dl),this.un(0)):this.un(e)}jt(){this._n(0),this._n(1)}Yt(){this.un(0),this.un(1)}_n(e){this.nn(1),this.buffer[this.position++]=e}un(e){this.nn(1),this.buffer[this.position++]=~e}nn(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const a=new Uint8Array(n);a.set(this.buffer),this.buffer=a}}class iM{constructor(e){this.ln=e}Lt(e){this.ln.Gt(e)}Ot(e){this.ln.Zt(e)}xt(e){this.ln.en(e)}Ft(){this.ln.sn()}}class rM{constructor(e){this.ln=e}Lt(e){this.ln.Ht(e)}Ot(e){this.ln.Xt(e)}xt(e){this.ln.rn(e)}Ft(){this.ln.an()}}class Sc{constructor(){this.ln=new nM,this.hn=new iM(this.ln),this.Pn=new rM(this.ln)}seed(e){this.ln.seed(e)}Tn(e){return e===0?this.hn:this.Pn}cn(){return this.ln.cn()}reset(){this.ln.reset()}}/**
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
 */class ja{constructor(e,t,n,a){this.In=e,this.En=t,this.dn=n,this.An=a}Rn(){const e=this.An.length,t=e===0||this.An[e-1]===255?e+1:e,n=new Uint8Array(t);return n.set(this.An,0),t!==e?n.set([0],this.An.length):++n[n.length-1],new ja(this.In,this.En,this.dn,n)}Vn(e,t,n){return{indexId:this.In,uid:e,arrayValue:zf(this.dn),directionalValue:zf(this.An),orderedDocumentKey:zf(t),documentKey:n.path.toArray()}}mn(e,t,n){const a=this.Vn(e,t,n);return[a.indexId,a.uid,a.arrayValue,a.directionalValue,a.orderedDocumentKey,a.documentKey]}}function _s(i,e){let t=i.In-e.In;return t!==0?t:(t=Fb(i.dn,e.dn),t!==0?t:(t=Fb(i.An,e.An),t!==0?t:se.comparator(i.En,e.En)))}function Fb(i,e){for(let t=0;t<i.length&&t<e.length;++t){const n=i[t]-e[t];if(n!==0)return n}return i.length-e.length}function zf(i){return KI()?function(t){let n="";for(let a=0;a<t.length;a++)n+=String.fromCharCode(t[a]);return n}(i):i}function qb(i){return typeof i!="string"?i:function(t){const n=new Uint8Array(t.length);for(let a=0;a<t.length;a++)n[a]=t.charCodeAt(a);return n}(i)}class jb{constructor(e){this.fn=new Je((t,n)=>dt.comparator(t.field,n.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.gn=e.orderBy,this.pn=[];for(const t of e.filters){const n=t;n.isInequality()?this.fn=this.fn.add(n):this.pn.push(n)}}get yn(){return this.fn.size>1}wn(e){if(de(e.collectionGroup===this.collectionId,49279),this.yn)return!1;const t=z_(e);if(t!==void 0&&!this.bn(t))return!1;const n=La(e);let a=new Set,l=0,c=0;for(;l<n.length&&this.bn(n[l]);++l)a=a.add(n[l].fieldPath.canonicalString());if(l===n.length)return!0;if(this.fn.size>0){const f=this.fn.getIterator().getNext();if(!a.has(f.field.canonicalString())){const m=n[l];if(!this.Sn(f,m)||!this.Dn(this.gn[c++],m))return!1}++l}for(;l<n.length;++l){const f=n[l];if(c>=this.gn.length||!this.Dn(this.gn[c++],f))return!1}return!0}vn(){if(this.yn)return null;let e=new Je(dt.comparator);const t=[];for(const n of this.pn)if(!n.field.isKeyField())if(n.op==="array-contains"||n.op==="array-contains-any")t.push(new Of(n.field,2));else{if(e.has(n.field))continue;e=e.add(n.field),t.push(new Of(n.field,0))}for(const n of this.gn)n.field.isKeyField()||e.has(n.field)||(e=e.add(n.field),t.push(new Of(n.field,n.dir==="asc"?0:1)));return new Xf(Xf.UNKNOWN_ID,this.collectionId,t,oh.empty())}bn(e){for(const t of this.pn)if(this.Sn(t,e))return!0;return!1}Sn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const n=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===n}Dn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function RR(i){var e,t;if(de(i instanceof Le||i instanceof Xe,20012),i instanceof Le){if(i instanceof QS){const a=((t=(e=i.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(l=>Le.create(i.field,"==",l)))||[];return Xe.create(a,"or")}return i}const n=i.filters.map(a=>RR(a));return Xe.create(n,i.op)}function sM(i){if(i.getFilters().length===0)return[];const e=ry(RR(i));return de(CR(e),7391),ny(e)||iy(e)?[e]:e.getFilters()}function ny(i){return i instanceof Le}function iy(i){return i instanceof Xe&&ev(i)}function CR(i){return ny(i)||iy(i)||function(t){if(t instanceof Xe&&Y_(t)){for(const n of t.getFilters())if(!ny(n)&&!iy(n))return!1;return!0}return!1}(i)}function ry(i){if(de(i instanceof Le||i instanceof Xe,34018),i instanceof Le)return i;if(i.filters.length===1)return ry(i.filters[0]);const e=i.filters.map(n=>ry(n));let t=Xe.create(e,i.op);return t=sm(t),CR(t)?t:(de(t instanceof Xe,64498),de(Fl(t),40251),de(t.filters.length>1,57927),t.filters.reduce((n,a)=>hv(n,a)))}function hv(i,e){let t;return de(i instanceof Le||i instanceof Xe,38388),de(e instanceof Le||e instanceof Xe,25473),t=i instanceof Le?e instanceof Le?function(a,l){return Xe.create([a,l],"and")}(i,e):Hb(i,e):e instanceof Le?Hb(e,i):function(a,l){if(de(a.filters.length>0&&l.filters.length>0,48005),Fl(a)&&Fl(l))return HS(a,l.getFilters());const c=Y_(a)?a:l,f=Y_(a)?l:a,m=c.filters.map(p=>hv(p,f));return Xe.create(m,"or")}(i,e),sm(t)}function Hb(i,e){if(Fl(e))return HS(e,i.getFilters());{const t=e.filters.map(n=>hv(i,n));return Xe.create(t,"or")}}function sm(i){if(de(i instanceof Le||i instanceof Xe,11850),i instanceof Le)return i;const e=i.getFilters();if(e.length===1)return sm(e[0]);if(qS(i))return i;const t=e.map(a=>sm(a)),n=[];return t.forEach(a=>{a instanceof Le?n.push(a):a instanceof Xe&&(a.op===i.op?n.push(...a.filters):n.push(a))}),n.length===1?n[0]:Xe.create(n,i.op)}/**
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
 */class aM{constructor(){this.Cn=new dv}addToCollectionParentIndex(e,t){return this.Cn.add(t),U.resolve()}getCollectionParents(e,t){return U.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return U.resolve()}deleteFieldIndex(e,t){return U.resolve()}deleteAllFieldIndexes(e){return U.resolve()}createTargetIndexes(e,t){return U.resolve()}getDocumentsMatchingTarget(e,t){return U.resolve(null)}getIndexType(e,t){return U.resolve(0)}getFieldIndexes(e,t){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,t){return U.resolve(Qn.min())}getMinOffsetFromCollectionGroup(e,t){return U.resolve(Qn.min())}updateCollectionGroup(e,t,n){return U.resolve()}updateIndexEntries(e,t){return U.resolve()}}class dv{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),a=this.index[t]||new Je(Me.comparator),l=!a.has(n);return this.index[t]=a.add(n),l}has(e){const t=e.lastSegment(),n=e.popLast(),a=this.index[t];return a&&a.has(n)}getEntries(e){return(this.index[e]||new Je(Me.comparator)).toArray()}}/**
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
 */const Gb="IndexedDbIndexManager",wf=new Uint8Array(0);class oM{constructor(e,t){this.databaseId=t,this.Fn=new dv,this.Mn=new Ur(n=>no(n),(n,a)=>xh(n,a)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.Fn.has(t)){const n=t.lastSegment(),a=t.popLast();e.addOnCommittedListener(()=>{this.Fn.add(t)});const l={collectionId:n,parent:pn(a)};return Kb(e).put(l)}return U.resolve()}getCollectionParents(e,t){const n=[],a=IDBKeyRange.bound([t,""],[mS(t),""],!1,!0);return Kb(e).J(a).next(l=>{for(const c of l){if(c.collectionId!==t)break;n.push(Ki(c.parent))}return n})}addFieldIndex(e,t){const n=Rc(e),a=function(f){return{indexId:f.indexId,collectionGroup:f.collectionGroup,fields:f.fields.map(m=>[m.fieldPath.canonicalString(),m.kind])}}(t);delete a.indexId;const l=n.add(a);if(t.indexState){const c=ml(e);return l.next(f=>{c.put(Lb(f,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return l.next()}deleteFieldIndex(e,t){const n=Rc(e),a=ml(e),l=fl(e);return n.delete(t.indexId).next(()=>a.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>l.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=Rc(e),n=fl(e),a=ml(e);return t.X().next(()=>n.X()).next(()=>a.X())}createTargetIndexes(e,t){return U.forEach(this.xn(t),n=>this.getIndexType(e,n).next(a=>{if(a===0||a===1){const l=new jb(n).vn();if(l!=null)return this.addFieldIndex(e,l)}}))}getDocumentsMatchingTarget(e,t){const n=fl(e);let a=!0;const l=new Map;return U.forEach(this.xn(t),c=>this.On(e,c).next(f=>{a&&(a=!!f),l.set(c,f)})).next(()=>{if(a){let c=Re();const f=[];return U.forEach(l,(m,p)=>{ee(Gb,`Using index ${function(ne){return`id=${ne.indexId}|cg=${ne.collectionGroup}|f=${ne.fields.map(ve=>`${ve.fieldPath}:${ve.kind}`).join(",")}`}(m)} to execute ${no(t)}`);const y=function(ne,ve){const me=z_(ve);if(me===void 0)return null;for(const Te of nm(ne,me.fieldPath))switch(Te.op){case"array-contains-any":return Te.value.arrayValue.values||[];case"array-contains":return[Te.value]}return null}(p,m),T=function(ne,ve){const me=new Map;for(const Te of La(ve))for(const N of nm(ne,Te.fieldPath))switch(N.op){case"==":case"in":me.set(Te.fieldPath.canonicalString(),N.value);break;case"not-in":case"!=":return me.set(Te.fieldPath.canonicalString(),N.value),Array.from(me.values())}return null}(p,m),b=function(ne,ve){const me=[];let Te=!0;for(const N of La(ve)){const A=N.kind===0?bb(ne,N.fieldPath,ne.startAt):Ib(ne,N.fieldPath,ne.startAt);me.push(A.value),Te&&(Te=A.inclusive)}return new Bs(me,Te)}(p,m),O=function(ne,ve){const me=[];let Te=!0;for(const N of La(ve)){const A=N.kind===0?Ib(ne,N.fieldPath,ne.endAt):bb(ne,N.fieldPath,ne.endAt);me.push(A.value),Te&&(Te=A.inclusive)}return new Bs(me,Te)}(p,m),G=this.Nn(m,p,b),$=this.Nn(m,p,O),Y=this.Bn(m,p,T),fe=this.Ln(m.indexId,y,G,b.inclusive,$,O.inclusive,Y);return U.forEach(fe,ae=>n.Z(ae,t.limit).next(ne=>{ne.forEach(ve=>{const me=se.fromSegments(ve.documentKey);c.has(me)||(c=c.add(me),f.push(me))})}))}).next(()=>f)}return U.resolve(null)})}xn(e){let t=this.Mn.get(e);return t||(e.filters.length===0?t=[e]:t=sM(Xe.create(e.filters,"and")).map(n=>$_(e.path,e.collectionGroup,e.orderBy,n.getFilters(),e.limit,e.startAt,e.endAt)),this.Mn.set(e,t),t)}Ln(e,t,n,a,l,c,f){const m=(t!=null?t.length:1)*Math.max(n.length,l.length),p=m/(t!=null?t.length:1),y=[];for(let T=0;T<m;++T){const b=t?this.kn(t[T/p]):wf,O=this.qn(e,b,n[T%p],a),G=this.Qn(e,b,l[T%p],c),$=f.map(Y=>this.qn(e,b,Y,!0));y.push(...this.createRange(O,G,$))}return y}qn(e,t,n,a){const l=new ja(e,se.empty(),t,n);return a?l:l.Rn()}Qn(e,t,n,a){const l=new ja(e,se.empty(),t,n);return a?l.Rn():l}On(e,t){const n=new jb(t),a=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,a).next(l=>{let c=null;for(const f of l)n.wn(f)&&(!c||f.fields.length>c.fields.length)&&(c=f);return c})}getIndexType(e,t){let n=2;const a=this.xn(t);return U.forEach(a,l=>this.On(e,l).next(c=>{c?n!==0&&c.fields.length<function(m){let p=new Je(dt.comparator),y=!1;for(const T of m.filters)for(const b of T.getFlattenedFilters())b.field.isKeyField()||(b.op==="array-contains"||b.op==="array-contains-any"?y=!0:p=p.add(b.field));for(const T of m.orderBy)T.field.isKeyField()||(p=p.add(T.field));return p.size+(y?1:0)}(l)&&(n=1):n=0})).next(()=>function(c){return c.limit!==null}(t)&&a.length>1&&n===2?1:n)}$n(e,t){const n=new Sc;for(const a of La(e)){const l=t.data.field(a.fieldPath);if(l==null)return null;const c=n.Tn(a.kind);qa.Wt.vt(l,c)}return n.cn()}kn(e){const t=new Sc;return qa.Wt.vt(e,t.Tn(0)),t.cn()}Un(e,t){const n=new Sc;return qa.Wt.vt(to(this.databaseId,t),n.Tn(function(l){const c=La(l);return c.length===0?0:c[c.length-1].kind}(e))),n.cn()}Bn(e,t,n){if(n===null)return[];let a=[];a.push(new Sc);let l=0;for(const c of La(e)){const f=n[l++];for(const m of a)if(this.Kn(t,c.fieldPath)&&mh(f))a=this.Wn(a,c,f);else{const p=m.Tn(c.kind);qa.Wt.vt(f,p)}}return this.Gn(a)}Nn(e,t,n){return this.Bn(e,t,n.position)}Gn(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].cn();return t}Wn(e,t,n){const a=[...e],l=[];for(const c of n.arrayValue.values||[])for(const f of a){const m=new Sc;m.seed(f.cn()),qa.Wt.vt(c,m.Tn(t.kind)),l.push(m)}return l}Kn(e,t){return!!e.filters.find(n=>n instanceof Le&&n.field.isEqual(t)&&(n.op==="in"||n.op==="not-in"))}getFieldIndexes(e,t){const n=Rc(e),a=ml(e);return(t?n.J(q_,IDBKeyRange.bound(t,t)):n.J()).next(l=>{const c=[];return U.forEach(l,f=>a.get([f.indexId,this.uid]).next(m=>{c.push(function(y,T){const b=T?new oh(T.sequenceNumber,new Qn(ao(T.readTime),new se(Ki(T.documentKey)),T.largestBatchId)):oh.empty(),O=y.fields.map(([G,$])=>new Of(dt.fromServerFormat(G),$));return new Xf(y.indexId,y.collectionGroup,O,b)}(f,m))})).next(()=>c)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((n,a)=>{const l=n.indexState.sequenceNumber-a.indexState.sequenceNumber;return l!==0?l:Ie(n.collectionGroup,a.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,n){const a=Rc(e),l=ml(e);return this.zn(e).next(c=>a.J(q_,IDBKeyRange.bound(t,t)).next(f=>U.forEach(f,m=>l.put(Lb(m.indexId,this.uid,c,n)))))}updateIndexEntries(e,t){const n=new Map;return U.forEach(t,(a,l)=>{const c=n.get(a.collectionGroup);return(c?U.resolve(c):this.getFieldIndexes(e,a.collectionGroup)).next(f=>(n.set(a.collectionGroup,f),U.forEach(f,m=>this.jn(e,a,m).next(p=>{const y=this.Hn(l,m);return p.isEqual(y)?U.resolve():this.Jn(e,l,m,p,y)}))))})}Yn(e,t,n,a){return fl(e).put(a.Vn(this.uid,this.Un(n,t.key),t.key))}Zn(e,t,n,a){return fl(e).delete(a.mn(this.uid,this.Un(n,t.key),t.key))}jn(e,t,n){const a=fl(e);let l=new Je(_s);return a.te({index:AS,range:IDBKeyRange.only([n.indexId,this.uid,zf(this.Un(n,t))])},(c,f)=>{l=l.add(new ja(n.indexId,t,qb(f.arrayValue),qb(f.directionalValue)))}).next(()=>l)}Hn(e,t){let n=new Je(_s);const a=this.$n(t,e);if(a==null)return n;const l=z_(t);if(l!=null){const c=e.data.field(l.fieldPath);if(mh(c))for(const f of c.arrayValue.values||[])n=n.add(new ja(t.indexId,e.key,this.kn(f),a))}else n=n.add(new ja(t.indexId,e.key,wf,a));return n}Jn(e,t,n,a,l){ee(Gb,"Updating index entries for document '%s'",t.key);const c=[];return function(m,p,y,T,b){const O=m.getIterator(),G=p.getIterator();let $=hl(O),Y=hl(G);for(;$||Y;){let fe=!1,ae=!1;if($&&Y){const ne=y($,Y);ne<0?ae=!0:ne>0&&(fe=!0)}else $!=null?ae=!0:fe=!0;fe?(T(Y),Y=hl(G)):ae?(b($),$=hl(O)):($=hl(O),Y=hl(G))}}(a,l,_s,f=>{c.push(this.Yn(e,t,n,f))},f=>{c.push(this.Zn(e,t,n,f))}),U.waitFor(c)}zn(e){let t=1;return ml(e).te({index:IS,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(n,a,l)=>{l.done(),t=a.sequenceNumber+1}).next(()=>t)}createRange(e,t,n){n=n.sort((c,f)=>_s(c,f)).filter((c,f,m)=>!f||_s(c,m[f-1])!==0);const a=[];a.push(e);for(const c of n){const f=_s(c,e),m=_s(c,t);if(f===0)a[0]=e.Rn();else if(f>0&&m<0)a.push(c),a.push(c.Rn());else if(m>0)break}a.push(t);const l=[];for(let c=0;c<a.length;c+=2){if(this.Xn(a[c],a[c+1]))return[];const f=a[c].mn(this.uid,wf,se.empty()),m=a[c+1].mn(this.uid,wf,se.empty());l.push(IDBKeyRange.bound(f,m))}return l}Xn(e,t){return _s(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Qb)}getMinOffset(e,t){return U.mapArray(this.xn(t),n=>this.On(e,n).next(a=>a||ce(44426))).next(Qb)}}function Kb(i){return Ht(i,hh)}function fl(i){return Ht(i,Yc)}function Rc(i){return Ht(i,Wy)}function ml(i){return Ht(i,Qc)}function Qb(i){de(i.length!==0,28825);let e=i[0].indexState.offset,t=e.largestBatchId;for(let n=1;n<i.length;n++){const a=i[n].indexState.offset;Ky(a,e)<0&&(e=a),t<a.largestBatchId&&(t=a.largestBatchId)}return new Qn(e.readTime,e.documentKey,t)}/**
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
 */const Yb={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},DR=41943040;class gn{static withCacheSize(e){return new gn(e,gn.DEFAULT_COLLECTION_PERCENTILE,gn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}/**
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
 */function PR(i,e,t){const n=i.store(_i),a=i.store(kl),l=[],c=IDBKeyRange.only(t.batchId);let f=0;const m=n.te({range:c},(y,T,b)=>(f++,b.delete()));l.push(m.next(()=>{de(f===1,47070,{batchId:t.batchId})}));const p=[];for(const y of t.mutations){const T=TS(e,y.key.path,t.batchId);l.push(a.delete(T)),p.push(y.key)}return U.waitFor(l).next(()=>p)}function am(i){if(!i)return 0;let e;if(i.document)e=i.document;else if(i.unknownDocument)e=i.unknownDocument;else{if(!i.noDocument)throw ce(14731);e=i.noDocument}return JSON.stringify(e).length}/**
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
 */gn.DEFAULT_COLLECTION_PERCENTILE=10,gn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,gn.DEFAULT=new gn(DR,gn.DEFAULT_COLLECTION_PERCENTILE,gn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),gn.DISABLED=new gn(-1,0,0);class Um{constructor(e,t,n,a){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=a,this.er={}}static bt(e,t,n,a){de(e.uid!=="",64387);const l=e.isAuthenticated()?e.uid:"";return new Um(l,t,n,a)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return ys(e).te({index:Ka,range:n},(a,l,c)=>{t=!1,c.done()}).next(()=>t)}addMutationBatch(e,t,n,a){const l=Tl(e),c=ys(e);return c.add({}).next(f=>{de(typeof f=="number",49019);const m=new sv(f,t,n,a),p=function(O,G,$){const Y=$.baseMutations.map(ae=>_h(O.wt,ae)),fe=$.mutations.map(ae=>_h(O.wt,ae));return{userId:G,batchId:$.batchId,localWriteTimeMs:$.localWriteTime.toMillis(),baseMutations:Y,mutations:fe}}(this.serializer,this.userId,m),y=[];let T=new Je((b,O)=>Ie(b.canonicalString(),O.canonicalString()));for(const b of a){const O=TS(this.userId,b.key.path,f);T=T.add(b.key.path.popLast()),y.push(c.put(p)),y.push(l.put(O,F2))}return T.forEach(b=>{y.push(this.indexManager.addToCollectionParentIndex(e,b))}),e.addOnCommittedListener(()=>{this.er[f]=m.keys()}),U.waitFor(y).next(()=>m)})}lookupMutationBatch(e,t){return ys(e).get(t).next(n=>n?(de(n.userId===this.userId,48,"Unexpected user for mutation batch",{userId:n.userId,batchId:t}),Fa(this.serializer,n)):null)}tr(e,t){return this.er[t]?U.resolve(this.er[t]):this.lookupMutationBatch(e,t).next(n=>{if(n){const a=n.keys();return this.er[t]=a,a}return null})}getNextMutationBatchAfterBatchId(e,t){const n=t+1,a=IDBKeyRange.lowerBound([this.userId,n]);let l=null;return ys(e).te({index:Ka,range:a},(c,f,m)=>{f.userId===this.userId&&(de(f.batchId>=n,47524,{nr:n}),l=Fa(this.serializer,f)),m.done()}).next(()=>l)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=Ds;return ys(e).te({index:Ka,range:t,reverse:!0},(a,l,c)=>{n=l.batchId,c.done()}).next(()=>n)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,Ds],[this.userId,Number.POSITIVE_INFINITY]);return ys(e).J(Ka,t).next(n=>n.map(a=>Fa(this.serializer,a)))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=Vf(this.userId,t.path),a=IDBKeyRange.lowerBound(n),l=[];return Tl(e).te({range:a},(c,f,m)=>{const[p,y,T]=c,b=Ki(y);if(p===this.userId&&t.path.isEqual(b))return ys(e).get(T).next(O=>{if(!O)throw ce(61480,{rr:c,batchId:T});de(O.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:O.userId,batchId:T}),l.push(Fa(this.serializer,O))});m.done()}).next(()=>l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Je(Ie);const a=[];return t.forEach(l=>{const c=Vf(this.userId,l.path),f=IDBKeyRange.lowerBound(c),m=Tl(e).te({range:f},(p,y,T)=>{const[b,O,G]=p,$=Ki(O);b===this.userId&&l.path.isEqual($)?n=n.add(G):T.done()});a.push(m)}),U.waitFor(a).next(()=>this.ir(e,n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,a=n.length+1,l=Vf(this.userId,n),c=IDBKeyRange.lowerBound(l);let f=new Je(Ie);return Tl(e).te({range:c},(m,p,y)=>{const[T,b,O]=m,G=Ki(b);T===this.userId&&n.isPrefixOf(G)?G.length===a&&(f=f.add(O)):y.done()}).next(()=>this.ir(e,f))}ir(e,t){const n=[],a=[];return t.forEach(l=>{a.push(ys(e).get(l).next(c=>{if(c===null)throw ce(35274,{batchId:l});de(c.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:c.userId,batchId:l}),n.push(Fa(this.serializer,c))}))}),U.waitFor(a).next(()=>n)}removeMutationBatch(e,t){return PR(e.he,this.userId,t).next(n=>(e.addOnCommittedListener(()=>{this.sr(t.batchId)}),U.forEach(n,a=>this.referenceDelegate.markPotentiallyOrphaned(e,a))))}sr(e){delete this.er[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return U.resolve();const n=IDBKeyRange.lowerBound(function(c){return[c]}(this.userId)),a=[];return Tl(e).te({range:n},(l,c,f)=>{if(l[0]===this.userId){const m=Ki(l[1]);a.push(m)}else f.done()}).next(()=>{de(a.length===0,56720,{_r:a.map(l=>l.canonicalString())})})})}containsKey(e,t){return NR(e,this.userId,t)}ar(e){return OR(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:Ds,lastStreamToken:""})}}function NR(i,e,t){const n=Vf(e,t.path),a=n[1],l=IDBKeyRange.lowerBound(n);let c=!1;return Tl(i).te({range:l,ee:!0},(f,m,p)=>{const[y,T,b]=f;y===e&&T===a&&(c=!0),p.done()}).next(()=>c)}function ys(i){return Ht(i,_i)}function Tl(i){return Ht(i,kl)}function OR(i){return Ht(i,uh)}/**
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
 */class oo{constructor(e){this.ur=e}next(){return this.ur+=2,this.ur}static cr(){return new oo(0)}static lr(){return new oo(-1)}}/**
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
 */class lM{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.hr(e).next(t=>{const n=new oo(t.highestTargetId);return t.highestTargetId=n.next(),this.Pr(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.hr(e).next(t=>ge.fromTimestamp(new mt(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.hr(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,n){return this.hr(e).next(a=>(a.highestListenSequenceNumber=t,n&&(a.lastRemoteSnapshotVersion=n.toTimestamp()),t>a.highestListenSequenceNumber&&(a.highestListenSequenceNumber=t),this.Pr(e,a)))}addTargetData(e,t){return this.Tr(e,t).next(()=>this.hr(e).next(n=>(n.targetCount+=1,this.Ir(t,n),this.Pr(e,n))))}updateTargetData(e,t){return this.Tr(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>gl(e).delete(t.targetId)).next(()=>this.hr(e)).next(n=>(de(n.targetCount>0,8065),n.targetCount-=1,this.Pr(e,n)))}removeTargets(e,t,n){let a=0;const l=[];return gl(e).te((c,f)=>{const m=Uc(f);m.sequenceNumber<=t&&n.get(m.targetId)===null&&(a++,l.push(this.removeTargetData(e,m)))}).next(()=>U.waitFor(l)).next(()=>a)}forEachTarget(e,t){return gl(e).te((n,a)=>{const l=Uc(a);t(l)})}hr(e){return Wb(e).get(em).next(t=>(de(t!==null,2888),t))}Pr(e,t){return Wb(e).put(em,t)}Tr(e,t){return gl(e).put(SR(this.serializer,t))}Ir(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.hr(e).next(t=>t.targetCount)}getTargetData(e,t){const n=no(t),a=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let l=null;return gl(e).te({range:a,index:bS},(c,f,m)=>{const p=Uc(f);xh(t,p.target)&&(l=p,m.done())}).next(()=>l)}addMatchingKeys(e,t,n){const a=[],l=ws(e);return t.forEach(c=>{const f=pn(c.path);a.push(l.put({targetId:n,path:f})),a.push(this.referenceDelegate.addReference(e,n,c))}),U.waitFor(a)}removeMatchingKeys(e,t,n){const a=ws(e);return U.forEach(t,l=>{const c=pn(l.path);return U.waitFor([a.delete([n,c]),this.referenceDelegate.removeReference(e,n,l)])})}removeMatchingKeysForTargetId(e,t){const n=ws(e),a=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(a)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),a=ws(e);let l=Re();return a.te({range:n,ee:!0},(c,f,m)=>{const p=Ki(c[1]),y=new se(p);l=l.add(y)}).next(()=>l)}containsKey(e,t){const n=pn(t.path),a=IDBKeyRange.bound([n],[mS(n)],!1,!0);let l=0;return ws(e).te({index:Yy,ee:!0,range:a},([c,f],m,p)=>{c!==0&&(l++,p.done())}).next(()=>l>0)}Rt(e,t){return gl(e).get(t).next(n=>n?Uc(n):null)}}function gl(i){return Ht(i,Ml)}function Wb(i){return Ht(i,Xa)}function ws(i){return Ht(i,Ll)}/**
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
 */const $b="LruGarbageCollector",uM=1048576;function Xb([i,e],[t,n]){const a=Ie(i,t);return a===0?Ie(e,n):a}class cM{constructor(e){this.Er=e,this.buffer=new Je(Xb),this.dr=0}Ar(){return++this.dr}Rr(e){const t=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();Xb(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class VR{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(e){ee($b,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ys(t)?ee($b,"Ignoring IndexedDB error during garbage collection: ",t):await Qs(t)}await this.mr(3e5)})}}class hM{constructor(e,t){this.gr=e,this.params=t}calculateTargetCount(e,t){return this.gr.pr(e).next(n=>Math.floor(t/100*n))}nthSequenceNumber(e,t){if(t===0)return U.resolve(On.le);const n=new cM(t);return this.gr.forEachTarget(e,a=>n.Rr(a.sequenceNumber)).next(()=>this.gr.yr(e,a=>n.Rr(a))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.gr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.gr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ee("LruGarbageCollector","Garbage collection skipped; disabled"),U.resolve(Yb)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(ee("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Yb):this.wr(e,t))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,t){let n,a,l,c,f,m,p;const y=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(T=>(T>this.params.maximumSequenceNumbersToCollect?(ee("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),a=this.params.maximumSequenceNumbersToCollect):a=T,c=Date.now(),this.nthSequenceNumber(e,a))).next(T=>(n=T,f=Date.now(),this.removeTargets(e,n,t))).next(T=>(l=T,m=Date.now(),this.removeOrphanedDocuments(e,n))).next(T=>(p=Date.now(),_l()<=ke.DEBUG&&ee("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-y}ms
	Determined least recently used ${a} in `+(f-c)+`ms
	Removed ${l} targets in `+(m-f)+`ms
	Removed ${T} documents in `+(p-m)+`ms
Total Duration: ${p-y}ms`),U.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:l,documentsRemoved:T})))}}function xR(i,e){return new hM(i,e)}/**
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
 */class dM{constructor(e,t){this.db=e,this.garbageCollector=xR(this,t)}pr(e){const t=this.br(e);return this.db.getTargetCache().getTargetCount(e).next(n=>t.next(a=>n+a))}br(e){let t=0;return this.yr(e,n=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}yr(e,t){return this.Sr(e,(n,a)=>t(a))}addReference(e,t,n){return bf(e,n)}removeReference(e,t,n){return bf(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return bf(e,t)}Dr(e,t){return function(a,l){let c=!1;return OR(a).ne(f=>NR(a,f,l).next(m=>(m&&(c=!0),U.resolve(!m)))).next(()=>c)}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),a=[];let l=0;return this.Sr(e,(c,f)=>{if(f<=t){const m=this.Dr(e,c).next(p=>{if(!p)return l++,n.getEntry(e,c).next(()=>(n.removeEntry(c,ge.min()),ws(e).delete(function(T){return[0,pn(T.path)]}(c))))});a.push(m)}}).next(()=>U.waitFor(a)).next(()=>n.apply(e)).next(()=>l)}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return bf(e,t)}Sr(e,t){const n=ws(e);let a,l=On.le;return n.te({index:Yy},([c,f],{path:m,sequenceNumber:p})=>{c===0?(l!==On.le&&t(new se(Ki(a)),l),l=p,a=m):l=On.le}).next(()=>{l!==On.le&&t(new se(Ki(a)),l)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function bf(i,e){return ws(i).put(function(n,a){return{targetId:0,path:pn(n.path),sequenceNumber:a}}(e,i.currentSequenceNumber))}/**
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
 */class kR{constructor(){this.changes=new Ur(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ot.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?U.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class fM{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return ka(e).put(n)}removeEntry(e,t,n){return ka(e).delete(function(l,c){const f=l.path.toArray();return[f.slice(0,f.length-2),f[f.length-2],rm(c),f[f.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next(n=>(n.byteSize+=t,this.vr(e,n)))}getEntry(e,t){let n=ot.newInvalidDocument(t);return ka(e).te({index:xf,range:IDBKeyRange.only(Cc(t))},(a,l)=>{n=this.Cr(t,l)}).next(()=>n)}Fr(e,t){let n={size:0,document:ot.newInvalidDocument(t)};return ka(e).te({index:xf,range:IDBKeyRange.only(Cc(t))},(a,l)=>{n={document:this.Cr(t,l),size:am(l)}}).next(()=>n)}getEntries(e,t){let n=xn();return this.Mr(e,t,(a,l)=>{const c=this.Cr(a,l);n=n.insert(a,c)}).next(()=>n)}Or(e,t){let n=xn(),a=new at(se.comparator);return this.Mr(e,t,(l,c)=>{const f=this.Cr(l,c);n=n.insert(l,f),a=a.insert(l,am(c))}).next(()=>({documents:n,Nr:a}))}Mr(e,t,n){if(t.isEmpty())return U.resolve();let a=new Je(eI);t.forEach(m=>a=a.add(m));const l=IDBKeyRange.bound(Cc(a.first()),Cc(a.last())),c=a.getIterator();let f=c.getNext();return ka(e).te({index:xf,range:l},(m,p,y)=>{const T=se.fromSegments([...p.prefixPath,p.collectionGroup,p.documentId]);for(;f&&eI(f,T)<0;)n(f,null),f=c.getNext();f&&f.isEqual(T)&&(n(f,p),f=c.hasNext()?c.getNext():null),f?y.H(Cc(f)):y.done()}).next(()=>{for(;f;)n(f,null),f=c.hasNext()?c.getNext():null})}getDocumentsMatchingQuery(e,t,n,a,l){const c=t.path,f=[c.popLast().toArray(),c.lastSegment(),rm(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],m=[c.popLast().toArray(),c.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return ka(e).J(IDBKeyRange.bound(f,m,!0)).next(p=>{l==null||l.incrementDocumentReadCount(p.length);let y=xn();for(const T of p){const b=this.Cr(se.fromSegments(T.prefixPath.concat(T.collectionGroup,T.documentId)),T);b.isFoundDocument()&&(Mh(t,b)||a.has(b.key))&&(y=y.insert(b.key,b))}return y})}getAllFromCollectionGroup(e,t,n,a){let l=xn();const c=Zb(t,n),f=Zb(t,Qn.max());return ka(e).te({index:wS,range:IDBKeyRange.bound(c,f,!0)},(m,p,y)=>{const T=this.Cr(se.fromSegments(p.prefixPath.concat(p.collectionGroup,p.documentId)),p);l=l.insert(T.key,T),l.size===a&&y.done()}).next(()=>l)}newChangeBuffer(e){return new mM(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return Jb(e).get(F_).next(t=>(de(!!t,20021),t))}vr(e,t){return Jb(e).put(F_,t)}Cr(e,t){if(t){const n=Jk(this.serializer,t);if(!(n.isNoDocument()&&n.version.isEqual(ge.min())))return n}return ot.newInvalidDocument(e)}}function MR(i){return new fM(i)}class mM extends kR{constructor(e,t){super(),this.Br=e,this.trackRemovals=t,this.Lr=new Ur(n=>n.toString(),(n,a)=>n.isEqual(a))}applyChanges(e){const t=[];let n=0,a=new Je((l,c)=>Ie(l.canonicalString(),c.canonicalString()));return this.changes.forEach((l,c)=>{const f=this.Lr.get(l);if(t.push(this.Br.removeEntry(e,l,f.readTime)),c.isValidDocument()){const m=kb(this.Br.serializer,c);a=a.add(l.path.popLast());const p=am(m);n+=p-f.size,t.push(this.Br.addEntry(e,l,m))}else if(n-=f.size,this.trackRemovals){const m=kb(this.Br.serializer,c.convertToNoDocument(ge.min()));t.push(this.Br.addEntry(e,l,m))}}),a.forEach(l=>{t.push(this.Br.indexManager.addToCollectionParentIndex(e,l))}),t.push(this.Br.updateMetadata(e,n)),U.waitFor(t)}getFromCache(e,t){return this.Br.Fr(e,t).next(n=>(this.Lr.set(t,{size:n.size,readTime:n.document.readTime}),n.document))}getAllFromCache(e,t){return this.Br.Or(e,t).next(({documents:n,Nr:a})=>(a.forEach((l,c)=>{this.Lr.set(l,{size:c,readTime:n.get(l).readTime})}),n))}}function Jb(i){return Ht(i,ch)}function ka(i){return Ht(i,Zf)}function Cc(i){const e=i.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Zb(i,e){const t=e.documentKey.path.toArray();return[i,rm(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function eI(i,e){const t=i.path.toArray(),n=e.path.toArray();let a=0;for(let l=0;l<t.length-2&&l<n.length-2;++l)if(a=Ie(t[l],n[l]),a)return a;return a=Ie(t.length,n.length),a||(a=Ie(t[t.length-2],n[n.length-2]),a||Ie(t[t.length-1],n[n.length-1]))}/**
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
 */class gM{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class LR{constructor(e,t,n,a){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=a}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(a=>(n=a,this.remoteDocumentCache.getEntry(e,t))).next(a=>(n!==null&&Xc(n.mutation,a,Vn.empty(),mt.now()),a))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.getLocalViewOfDocuments(e,n,Re()).next(()=>n))}getLocalViewOfDocuments(e,t,n=Re()){const a=Qi();return this.populateOverlays(e,a,t).next(()=>this.computeViews(e,t,a,n).next(l=>{let c=Mc();return l.forEach((f,m)=>{c=c.insert(f,m.overlayedDocument)}),c}))}getOverlayedDocuments(e,t){const n=Qi();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,Re()))}populateOverlays(e,t,n){const a=[];return n.forEach(l=>{t.has(l)||a.push(l)}),this.documentOverlayCache.getOverlays(e,a).next(l=>{l.forEach((c,f)=>{t.set(c,f)})})}computeViews(e,t,n,a){let l=xn();const c=$c(),f=function(){return $c()}();return t.forEach((m,p)=>{const y=n.get(p.key);a.has(p.key)&&(y===void 0||y.mutation instanceof Br)?l=l.insert(p.key,p):y!==void 0?(c.set(p.key,y.mutation.getFieldMask()),Xc(y.mutation,p,y.mutation.getFieldMask(),mt.now())):c.set(p.key,Vn.empty())}),this.recalculateAndSaveOverlays(e,l).next(m=>(m.forEach((p,y)=>c.set(p,y)),t.forEach((p,y)=>{var T;return f.set(p,new gM(y,(T=c.get(p))!==null&&T!==void 0?T:null))}),f))}recalculateAndSaveOverlays(e,t){const n=$c();let a=new at((c,f)=>c-f),l=Re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(c=>{for(const f of c)f.keys().forEach(m=>{const p=t.get(m);if(p===null)return;let y=n.get(m)||Vn.empty();y=f.applyToLocalView(p,y),n.set(m,y);const T=(a.get(f.batchId)||Re()).add(m);a=a.insert(f.batchId,T)})}).next(()=>{const c=[],f=a.getReverseIterator();for(;f.hasNext();){const m=f.getNext(),p=m.key,y=m.value,T=eR();y.forEach(b=>{if(!l.has(b)){const O=oR(t.get(b),n.get(b));O!==null&&T.set(b,O),l=l.add(b)}}),c.push(this.documentOverlayCache.saveOverlays(e,p,T))}return U.waitFor(c)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(n=>this.recalculateAndSaveOverlays(e,n))}getDocumentsMatchingQuery(e,t,n,a){return function(c){return se.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):tv(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,a):this.getDocumentsMatchingCollectionQuery(e,t,n,a)}getNextDocuments(e,t,n,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,a).next(l=>{const c=a-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,a-l.size):U.resolve(Qi());let f=xl,m=l;return c.next(p=>U.forEach(p,(y,T)=>(f<T.largestBatchId&&(f=T.largestBatchId),l.get(y)?U.resolve():this.remoteDocumentCache.getEntry(e,y).next(b=>{m=m.insert(y,b)}))).next(()=>this.populateOverlays(e,p,l)).next(()=>this.computeViews(e,m,p,Re())).next(y=>({batchId:f,changes:ZS(y)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new se(t)).next(n=>{let a=Mc();return n.isFoundDocument()&&(a=a.insert(n.key,n)),a})}getDocumentsMatchingCollectionGroupQuery(e,t,n,a){const l=t.collectionGroup;let c=Mc();return this.indexManager.getCollectionParents(e,l).next(f=>U.forEach(f,m=>{const p=function(T,b){return new Lr(b,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(t,m.child(l));return this.getDocumentsMatchingCollectionQuery(e,p,n,a).next(y=>{y.forEach((T,b)=>{c=c.insert(T,b)})})}).next(()=>c))}getDocumentsMatchingCollectionQuery(e,t,n,a){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,l,a))).next(c=>{l.forEach((m,p)=>{const y=p.getKey();c.get(y)===null&&(c=c.insert(y,ot.newInvalidDocument(y)))});let f=Mc();return c.forEach((m,p)=>{const y=l.get(m);y!==void 0&&Xc(y.mutation,p,Vn.empty(),mt.now()),Mh(t,p)&&(f=f.insert(m,p))}),f})}}/**
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
 */class pM{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,t){return U.resolve(this.kr.get(t))}saveBundleMetadata(e,t){return this.kr.set(t.id,function(a){return{id:a.id,version:a.version,createTime:Pt(a.createTime)}}(t)),U.resolve()}getNamedQuery(e,t){return U.resolve(this.qr.get(t))}saveNamedQuery(e,t){return this.qr.set(t.name,function(a){return{name:a.name,query:cv(a.bundledQuery),readTime:Pt(a.readTime)}}(t)),U.resolve()}}/**
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
 */class _M{constructor(){this.overlays=new at(se.comparator),this.Qr=new Map}getOverlay(e,t){return U.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Qi();return U.forEach(t,a=>this.getOverlay(e,a).next(l=>{l!==null&&n.set(a,l)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((a,l)=>{this.St(e,t,l)}),U.resolve()}removeOverlaysForBatchId(e,t,n){const a=this.Qr.get(n);return a!==void 0&&(a.forEach(l=>this.overlays=this.overlays.remove(l)),this.Qr.delete(n)),U.resolve()}getOverlaysForCollection(e,t,n){const a=Qi(),l=t.length+1,c=new se(t.child("")),f=this.overlays.getIteratorFrom(c);for(;f.hasNext();){const m=f.getNext().value,p=m.getKey();if(!t.isPrefixOf(p.path))break;p.path.length===l&&m.largestBatchId>n&&a.set(m.getKey(),m)}return U.resolve(a)}getOverlaysForCollectionGroup(e,t,n,a){let l=new at((p,y)=>p-y);const c=this.overlays.getIterator();for(;c.hasNext();){const p=c.getNext().value;if(p.getKey().getCollectionGroup()===t&&p.largestBatchId>n){let y=l.get(p.largestBatchId);y===null&&(y=Qi(),l=l.insert(p.largestBatchId,y)),y.set(p.getKey(),p)}}const f=Qi(),m=l.getIterator();for(;m.hasNext()&&(m.getNext().value.forEach((p,y)=>f.set(p,y)),!(f.size()>=a)););return U.resolve(f)}St(e,t,n){const a=this.overlays.get(n.key);if(a!==null){const c=this.Qr.get(a.largestBatchId).delete(n.key);this.Qr.set(a.largestBatchId,c)}this.overlays=this.overlays.insert(n.key,new ov(t,n));let l=this.Qr.get(t);l===void 0&&(l=Re(),this.Qr.set(t,l)),this.Qr.set(t,l.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class yM{constructor(){this.sessionToken=bt.EMPTY_BYTE_STRING}getSessionToken(e){return U.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,U.resolve()}}/**
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
 */class fv{constructor(){this.$r=new Je(Xt.Ur),this.Kr=new Je(Xt.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,t){const n=new Xt(e,t);this.$r=this.$r.add(n),this.Kr=this.Kr.add(n)}Gr(e,t){e.forEach(n=>this.addReference(n,t))}removeReference(e,t){this.zr(new Xt(e,t))}jr(e,t){e.forEach(n=>this.removeReference(n,t))}Hr(e){const t=new se(new Me([])),n=new Xt(t,e),a=new Xt(t,e+1),l=[];return this.Kr.forEachInRange([n,a],c=>{this.zr(c),l.push(c.key)}),l}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){const t=new se(new Me([])),n=new Xt(t,e),a=new Xt(t,e+1);let l=Re();return this.Kr.forEachInRange([n,a],c=>{l=l.add(c.key)}),l}containsKey(e){const t=new Xt(e,0),n=this.$r.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class Xt{constructor(e,t){this.key=e,this.Zr=t}static Ur(e,t){return se.comparator(e.key,t.key)||Ie(e.Zr,t.Zr)}static Wr(e,t){return Ie(e.Zr,t.Zr)||se.comparator(e.key,t.key)}}/**
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
 */class vM{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.nr=1,this.Xr=new Je(Xt.Ur)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,a){const l=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new sv(l,t,n,a);this.mutationQueue.push(c);for(const f of a)this.Xr=this.Xr.add(new Xt(f.key,l)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return U.resolve(c)}lookupMutationBatch(e,t){return U.resolve(this.ei(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,a=this.ti(n),l=a<0?0:a;return U.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?Ds:this.nr-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Xt(t,0),a=new Xt(t,Number.POSITIVE_INFINITY),l=[];return this.Xr.forEachInRange([n,a],c=>{const f=this.ei(c.Zr);l.push(f)}),U.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Je(Ie);return t.forEach(a=>{const l=new Xt(a,0),c=new Xt(a,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([l,c],f=>{n=n.add(f.Zr)})}),U.resolve(this.ni(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,a=n.length+1;let l=n;se.isDocumentKey(l)||(l=l.child(""));const c=new Xt(new se(l),0);let f=new Je(Ie);return this.Xr.forEachWhile(m=>{const p=m.key.path;return!!n.isPrefixOf(p)&&(p.length===a&&(f=f.add(m.Zr)),!0)},c),U.resolve(this.ni(f))}ni(e){const t=[];return e.forEach(n=>{const a=this.ei(n);a!==null&&t.push(a)}),t}removeMutationBatch(e,t){de(this.ri(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.Xr;return U.forEach(t.mutations,a=>{const l=new Xt(a.key,t.batchId);return n=n.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)}).next(()=>{this.Xr=n})}sr(e){}containsKey(e,t){const n=new Xt(t,0),a=this.Xr.firstAfterOrEqual(n);return U.resolve(t.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}ri(e,t){return this.ti(e)}ti(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ei(e){const t=this.ti(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class EM{constructor(e){this.ii=e,this.docs=function(){return new at(se.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,a=this.docs.get(n),l=a?a.size:0,c=this.ii(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return U.resolve(n?n.document.mutableCopy():ot.newInvalidDocument(t))}getEntries(e,t){let n=xn();return t.forEach(a=>{const l=this.docs.get(a);n=n.insert(a,l?l.document.mutableCopy():ot.newInvalidDocument(a))}),U.resolve(n)}getDocumentsMatchingQuery(e,t,n,a){let l=xn();const c=t.path,f=new se(c.child("__id-9223372036854775808__")),m=this.docs.getIteratorFrom(f);for(;m.hasNext();){const{key:p,value:{document:y}}=m.getNext();if(!c.isPrefixOf(p.path))break;p.path.length>c.length+1||Ky(pS(y),n)<=0||(a.has(y.key)||Mh(t,y))&&(l=l.insert(y.key,y.mutableCopy()))}return U.resolve(l)}getAllFromCollectionGroup(e,t,n,a){ce(9500)}si(e,t){return U.forEach(this.docs,n=>t(n))}newChangeBuffer(e){return new TM(this)}getSize(e){return U.resolve(this.size)}}class TM extends kR{constructor(e){super(),this.Br=e}applyChanges(e){const t=[];return this.changes.forEach((n,a)=>{a.isValidDocument()?t.push(this.Br.addEntry(e,a)):this.Br.removeEntry(n)}),U.waitFor(t)}getFromCache(e,t){return this.Br.getEntry(e,t)}getAllFromCache(e,t){return this.Br.getEntries(e,t)}}/**
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
 */class wM{constructor(e){this.persistence=e,this.oi=new Ur(t=>no(t),xh),this.lastRemoteSnapshotVersion=ge.min(),this.highestTargetId=0,this._i=0,this.ai=new fv,this.targetCount=0,this.ui=oo.cr()}forEachTarget(e,t){return this.oi.forEach((n,a)=>t(a)),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this._i&&(this._i=t),U.resolve()}Tr(e){this.oi.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ui=new oo(t),this.highestTargetId=t),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,t){return this.Tr(t),this.targetCount+=1,U.resolve()}updateTargetData(e,t){return this.Tr(t),U.resolve()}removeTargetData(e,t){return this.oi.delete(t.target),this.ai.Hr(t.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,t,n){let a=0;const l=[];return this.oi.forEach((c,f)=>{f.sequenceNumber<=t&&n.get(f.targetId)===null&&(this.oi.delete(c),l.push(this.removeMatchingKeysForTargetId(e,f.targetId)),a++)}),U.waitFor(l).next(()=>a)}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,t){const n=this.oi.get(t)||null;return U.resolve(n)}addMatchingKeys(e,t,n){return this.ai.Gr(t,n),U.resolve()}removeMatchingKeys(e,t,n){this.ai.jr(t,n);const a=this.persistence.referenceDelegate,l=[];return a&&t.forEach(c=>{l.push(a.markPotentiallyOrphaned(e,c))}),U.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.ai.Hr(t),U.resolve()}getMatchingKeysForTargetId(e,t){const n=this.ai.Yr(t);return U.resolve(n)}containsKey(e,t){return U.resolve(this.ai.containsKey(t))}}/**
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
 */class mv{constructor(e,t){this.ci={},this.overlays={},this.li=new On(0),this.hi=!1,this.hi=!0,this.Pi=new yM,this.referenceDelegate=e(this),this.Ti=new wM(this),this.indexManager=new aM,this.remoteDocumentCache=function(a){return new EM(a)}(n=>this.referenceDelegate.Ii(n)),this.serializer=new AR(t),this.Ei=new pM(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new _M,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.ci[e.toKey()];return n||(n=new vM(t,this.referenceDelegate),this.ci[e.toKey()]=n),n}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,t,n){ee("MemoryPersistence","Starting transaction:",e);const a=new bM(this.li.next());return this.referenceDelegate.di(),n(a).next(l=>this.referenceDelegate.Ai(a).next(()=>l)).toPromise().then(l=>(a.raiseOnCommittedEvent(),l))}Ri(e,t){return U.or(Object.values(this.ci).map(n=>()=>n.containsKey(e,t)))}}class bM extends yS{constructor(e){super(),this.currentSequenceNumber=e}}class Bm{constructor(e){this.persistence=e,this.Vi=new fv,this.mi=null}static fi(e){return new Bm(e)}get gi(){if(this.mi)return this.mi;throw ce(60996)}addReference(e,t,n){return this.Vi.addReference(n,t),this.gi.delete(n.toString()),U.resolve()}removeReference(e,t,n){return this.Vi.removeReference(n,t),this.gi.add(n.toString()),U.resolve()}markPotentiallyOrphaned(e,t){return this.gi.add(t.toString()),U.resolve()}removeTarget(e,t){this.Vi.Hr(t.targetId).forEach(a=>this.gi.add(a.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(a=>{a.forEach(l=>this.gi.add(l.toString()))}).next(()=>n.removeTargetData(e,t))}di(){this.mi=new Set}Ai(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.gi,n=>{const a=se.fromPath(n);return this.pi(e,a).next(l=>{l||t.removeEntry(a,ge.min())})}).next(()=>(this.mi=null,t.apply(e)))}updateLimboDocument(e,t){return this.pi(e,t).next(n=>{n?this.gi.delete(t.toString()):this.gi.add(t.toString())})}Ii(e){return 0}pi(e,t){return U.or([()=>U.resolve(this.Vi.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ri(e,t)])}}class om{constructor(e,t){this.persistence=e,this.yi=new Ur(n=>pn(n.path),(n,a)=>n.isEqual(a)),this.garbageCollector=xR(this,t)}static fi(e,t){return new om(e,t)}di(){}Ai(e){return U.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}pr(e){const t=this.br(e);return this.persistence.getTargetCache().getTargetCount(e).next(n=>t.next(a=>n+a))}br(e){let t=0;return this.yr(e,n=>{t++}).next(()=>t)}yr(e,t){return U.forEach(this.yi,(n,a)=>this.Dr(e,n,a).next(l=>l?U.resolve():t(a)))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const a=this.persistence.getRemoteDocumentCache(),l=a.newChangeBuffer();return a.si(e,c=>this.Dr(e,c,t).next(f=>{f||(n++,l.removeEntry(c,ge.min()))})).next(()=>l.apply(e)).next(()=>n)}markPotentiallyOrphaned(e,t){return this.yi.set(t,e.currentSequenceNumber),U.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.yi.set(n,e.currentSequenceNumber),U.resolve()}removeReference(e,t,n){return this.yi.set(n,e.currentSequenceNumber),U.resolve()}updateLimboDocument(e,t){return this.yi.set(t,e.currentSequenceNumber),U.resolve()}Ii(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Mf(e.data.value)),t}Dr(e,t,n){return U.or([()=>this.persistence.Ri(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const a=this.yi.get(t);return U.resolve(a!==void 0&&a>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class IM{constructor(e){this.serializer=e}q(e,t,n,a){const l=new Cm("createOrUpgrade",t);n<1&&a>=1&&(function(m){m.createObjectStore(Vh)}(e),function(m){m.createObjectStore(uh,{keyPath:z2}),m.createObjectStore(_i,{keyPath:hb,autoIncrement:!0}).createIndex(Ka,db,{unique:!0}),m.createObjectStore(kl)}(e),tI(e),function(m){m.createObjectStore(Ua)}(e));let c=U.resolve();return n<3&&a>=3&&(n!==0&&(function(m){m.deleteObjectStore(Ll),m.deleteObjectStore(Ml),m.deleteObjectStore(Xa)}(e),tI(e)),c=c.next(()=>function(m){const p=m.store(Xa),y={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:ge.min().toTimestamp(),targetCount:0};return p.put(em,y)}(l))),n<4&&a>=4&&(n!==0&&(c=c.next(()=>function(m,p){return p.store(_i).J().next(T=>{m.deleteObjectStore(_i),m.createObjectStore(_i,{keyPath:hb,autoIncrement:!0}).createIndex(Ka,db,{unique:!0});const b=p.store(_i),O=T.map(G=>b.put(G));return U.waitFor(O)})}(e,l))),c=c.next(()=>{(function(m){m.createObjectStore(Ul,{keyPath:W2})})(e)})),n<5&&a>=5&&(c=c.next(()=>this.wi(l))),n<6&&a>=6&&(c=c.next(()=>(function(m){m.createObjectStore(ch)}(e),this.bi(l)))),n<7&&a>=7&&(c=c.next(()=>this.Si(l))),n<8&&a>=8&&(c=c.next(()=>this.Di(e,l))),n<9&&a>=9&&(c=c.next(()=>{(function(m){m.objectStoreNames.contains("remoteDocumentChanges")&&m.deleteObjectStore("remoteDocumentChanges")})(e)})),n<10&&a>=10&&(c=c.next(()=>this.Ci(l))),n<11&&a>=11&&(c=c.next(()=>{(function(m){m.createObjectStore(Dm,{keyPath:$2})})(e),function(m){m.createObjectStore(Pm,{keyPath:X2})}(e)})),n<12&&a>=12&&(c=c.next(()=>{(function(m){const p=m.createObjectStore(Nm,{keyPath:rk});p.createIndex(j_,sk,{unique:!1}),p.createIndex(SS,ak,{unique:!1})})(e)})),n<13&&a>=13&&(c=c.next(()=>function(m){const p=m.createObjectStore(Zf,{keyPath:q2});p.createIndex(xf,j2),p.createIndex(wS,H2)}(e)).next(()=>this.Fi(e,l)).next(()=>e.deleteObjectStore(Ua))),n<14&&a>=14&&(c=c.next(()=>this.Mi(e,l))),n<15&&a>=15&&(c=c.next(()=>function(m){m.createObjectStore(Wy,{keyPath:J2,autoIncrement:!0}).createIndex(q_,Z2,{unique:!1}),m.createObjectStore(Qc,{keyPath:ek}).createIndex(IS,tk,{unique:!1}),m.createObjectStore(Yc,{keyPath:nk}).createIndex(AS,ik,{unique:!1})}(e))),n<16&&a>=16&&(c=c.next(()=>{t.objectStore(Qc).clear()}).next(()=>{t.objectStore(Yc).clear()})),n<17&&a>=17&&(c=c.next(()=>{(function(m){m.createObjectStore($y,{keyPath:ok})})(e)})),n<18&&a>=18&&KI()&&(c=c.next(()=>{t.objectStore(Qc).clear()}).next(()=>{t.objectStore(Yc).clear()})),c}bi(e){let t=0;return e.store(Ua).te((n,a)=>{t+=am(a)}).next(()=>{const n={byteSize:t};return e.store(ch).put(F_,n)})}wi(e){const t=e.store(uh),n=e.store(_i);return t.J().next(a=>U.forEach(a,l=>{const c=IDBKeyRange.bound([l.userId,Ds],[l.userId,l.lastAcknowledgedBatchId]);return n.J(Ka,c).next(f=>U.forEach(f,m=>{de(m.userId===l.userId,18650,"Cannot process batch from unexpected user",{batchId:m.batchId});const p=Fa(this.serializer,m);return PR(e,l.userId,p).next(()=>{})}))}))}Si(e){const t=e.store(Ll),n=e.store(Ua);return e.store(Xa).get(em).next(a=>{const l=[];return n.te((c,f)=>{const m=new Me(c),p=function(T){return[0,pn(T)]}(m);l.push(t.get(p).next(y=>y?U.resolve():(T=>t.put({targetId:0,path:pn(T),sequenceNumber:a.highestListenSequenceNumber}))(m)))}).next(()=>U.waitFor(l))})}Di(e,t){e.createObjectStore(hh,{keyPath:Y2});const n=t.store(hh),a=new dv,l=c=>{if(a.add(c)){const f=c.lastSegment(),m=c.popLast();return n.put({collectionId:f,parent:pn(m)})}};return t.store(Ua).te({ee:!0},(c,f)=>{const m=new Me(c);return l(m.popLast())}).next(()=>t.store(kl).te({ee:!0},([c,f,m],p)=>{const y=Ki(f);return l(y.popLast())}))}Ci(e){const t=e.store(Ml);return t.te((n,a)=>{const l=Uc(a),c=SR(this.serializer,l);return t.put(c)})}Fi(e,t){const n=t.store(Ua),a=[];return n.te((l,c)=>{const f=t.store(Zf),m=function(T){return T.document?new se(Me.fromString(T.document.name).popFirst(5)):T.noDocument?se.fromSegments(T.noDocument.path):T.unknownDocument?se.fromSegments(T.unknownDocument.path):ce(36783)}(c).path.toArray(),p={prefixPath:m.slice(0,m.length-2),collectionGroup:m[m.length-2],documentId:m[m.length-1],readTime:c.readTime||[0,0],unknownDocument:c.unknownDocument,noDocument:c.noDocument,document:c.document,hasCommittedMutations:!!c.hasCommittedMutations};a.push(f.put(p))}).next(()=>U.waitFor(a))}Mi(e,t){const n=t.store(_i),a=MR(this.serializer),l=new mv(Bm.fi,this.serializer.wt);return n.J().next(c=>{const f=new Map;return c.forEach(m=>{var p;let y=(p=f.get(m.userId))!==null&&p!==void 0?p:Re();Fa(this.serializer,m).keys().forEach(T=>y=y.add(T)),f.set(m.userId,y)}),U.forEach(f,(m,p)=>{const y=new Jt(p),T=Lm.bt(this.serializer,y),b=l.getIndexManager(y),O=Um.bt(y,this.serializer,b,l.referenceDelegate);return new LR(a,O,T,b).recalculateAndSaveOverlaysForDocumentKeys(new H_(t,On.le),m).next()})})}}function tI(i){i.createObjectStore(Ll,{keyPath:K2}).createIndex(Yy,Q2,{unique:!0}),i.createObjectStore(Ml,{keyPath:"targetId"}).createIndex(bS,G2,{unique:!0}),i.createObjectStore(Xa)}const vs="IndexedDbPersistence",v_=18e5,E_=5e3,T_="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",UR="main";class gv{constructor(e,t,n,a,l,c,f,m,p,y,T=18){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.xi=l,this.window=c,this.document=f,this.Oi=p,this.Ni=y,this.Bi=T,this.li=null,this.hi=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Li=null,this.inForeground=!1,this.ki=null,this.qi=null,this.Qi=Number.NEGATIVE_INFINITY,this.$i=b=>Promise.resolve(),!gv.C())throw new Z(j.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new dM(this,a),this.Ui=t+UR,this.serializer=new AR(m),this.Ki=new Yi(this.Ui,this.Bi,new IM(this.serializer)),this.Pi=new eM,this.Ti=new lM(this.referenceDelegate,this.serializer),this.remoteDocumentCache=MR(this.serializer),this.Ei=new Zk,this.window&&this.window.localStorage?this.Wi=this.window.localStorage:(this.Wi=null,y===!1&&Dt(vs,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Gi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new Z(j.FAILED_PRECONDITION,T_);return this.zi(),this.ji(),this.Hi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ti.getHighestSequenceNumber(e))}).then(e=>{this.li=new On(e,this.Oi)}).then(()=>{this.hi=!0}).catch(e=>(this.Ki&&this.Ki.close(),Promise.reject(e)))}Ji(e){return this.$i=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ki.U(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.xi.enqueueAndForget(async()=>{this.started&&await this.Gi()}))}Gi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>If(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Yi(e).next(t=>{t||(this.isPrimary=!1,this.xi.enqueueRetryable(()=>this.$i(!1)))})}).next(()=>this.Zi(e)).next(t=>this.isPrimary&&!t?this.Xi(e).next(()=>!1):!!t&&this.es(e).next(()=>!0))).catch(e=>{if(Ys(e))return ee(vs,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return ee(vs,"Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.xi.enqueueRetryable(()=>this.$i(e)),this.isPrimary=e})}Yi(e){return Dc(e).get(cl).next(t=>U.resolve(this.ts(t)))}ns(e){return If(e).delete(this.clientId)}async rs(){if(this.isPrimary&&!this.ss(this.Qi,v_)){this.Qi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const n=Ht(t,Ul);return n.J().next(a=>{const l=this._s(a,v_),c=a.filter(f=>l.indexOf(f)===-1);return U.forEach(c,f=>n.delete(f.clientId)).next(()=>c)})}).catch(()=>[]);if(this.Wi)for(const t of e)this.Wi.removeItem(this.us(t.clientId))}}Hi(){this.qi=this.xi.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Gi().then(()=>this.rs()).then(()=>this.Hi()))}ts(e){return!!e&&e.ownerId===this.clientId}Zi(e){return this.Ni?U.resolve(!0):Dc(e).get(cl).next(t=>{if(t!==null&&this.ss(t.leaseTimestampMs,E_)&&!this.cs(t.ownerId)){if(this.ts(t)&&this.networkEnabled)return!0;if(!this.ts(t)){if(!t.allowTabSynchronization)throw new Z(j.FAILED_PRECONDITION,T_);return!1}}return!(!this.networkEnabled||!this.inForeground)||If(e).J().next(n=>this._s(n,E_).find(a=>{if(this.clientId!==a.clientId){const l=!this.networkEnabled&&a.networkEnabled,c=!this.inForeground&&a.inForeground,f=this.networkEnabled===a.networkEnabled;if(l||c&&f)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&ee(vs,`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.hi=!1,this.ls(),this.qi&&(this.qi.cancel(),this.qi=null),this.hs(),this.Ps(),await this.Ki.runTransaction("shutdown","readwrite",[Vh,Ul],e=>{const t=new H_(e,On.le);return this.Xi(t).next(()=>this.ns(t))}),this.Ki.close(),this.Ts()}_s(e,t){return e.filter(n=>this.ss(n.updateTimeMs,t)&&!this.cs(n.clientId))}Is(){return this.runTransaction("getActiveClients","readonly",e=>If(e).J().next(t=>this._s(t,v_).map(n=>n.clientId)))}get started(){return this.hi}getGlobalsCache(){return this.Pi}getMutationQueue(e,t){return Um.bt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new oM(e,this.serializer.wt.databaseId)}getDocumentOverlayCache(e){return Lm.bt(this.serializer,e)}getBundleCache(){return this.Ei}runTransaction(e,t,n){ee(vs,"Starting transaction:",e);const a=t==="readonly"?"readonly":"readwrite",l=function(m){return m===18?ck:m===17?PS:m===16?uk:m===15?Xy:m===14?DS:m===13?CS:m===12?lk:m===11?RS:void ce(60245)}(this.Bi);let c;return this.Ki.runTransaction(e,a,l,f=>(c=new H_(f,this.li?this.li.next():On.le),t==="readwrite-primary"?this.Yi(c).next(m=>!!m||this.Zi(c)).next(m=>{if(!m)throw Dt(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.xi.enqueueRetryable(()=>this.$i(!1)),new Z(j.FAILED_PRECONDITION,_S);return n(c)}).next(m=>this.es(c).next(()=>m)):this.Es(c).next(()=>n(c)))).then(f=>(c.raiseOnCommittedEvent(),f))}Es(e){return Dc(e).get(cl).next(t=>{if(t!==null&&this.ss(t.leaseTimestampMs,E_)&&!this.cs(t.ownerId)&&!this.ts(t)&&!(this.Ni||this.allowTabSynchronization&&t.allowTabSynchronization))throw new Z(j.FAILED_PRECONDITION,T_)})}es(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Dc(e).put(cl,t)}static C(){return Yi.C()}Xi(e){const t=Dc(e);return t.get(cl).next(n=>this.ts(n)?(ee(vs,"Releasing primary lease."),t.delete(cl)):U.resolve())}ss(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(Dt(`Detected an update time that is in the future: ${e} > ${n}`),!1))}zi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ki=()=>{this.xi.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Gi()))},this.document.addEventListener("visibilitychange",this.ki),this.inForeground=this.document.visibilityState==="visible")}hs(){this.ki&&(this.document.removeEventListener("visibilitychange",this.ki),this.ki=null)}ji(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Li=()=>{this.ls();const t=/(?:Version|Mobile)\/1[456]/;GI()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.xi.enterRestrictedMode(!0),this.xi.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Li))}Ps(){this.Li&&(this.window.removeEventListener("pagehide",this.Li),this.Li=null)}cs(e){var t;try{const n=((t=this.Wi)===null||t===void 0?void 0:t.getItem(this.us(e)))!==null;return ee(vs,`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(n){return Dt(vs,"Failed to get zombied client id.",n),!1}}ls(){if(this.Wi)try{this.Wi.setItem(this.us(this.clientId),String(Date.now()))}catch(e){Dt("Failed to set zombie client id.",e)}}Ts(){if(this.Wi)try{this.Wi.removeItem(this.us(this.clientId))}catch{}}us(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Dc(i){return Ht(i,Vh)}function If(i){return Ht(i,Ul)}function pv(i,e){let t=i.projectId;return i.isDefaultDatabase||(t+="."+i.database),"firestore/"+e+"/"+t+"/"}/**
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
 */class _v{constructor(e,t,n,a){this.targetId=e,this.fromCache=t,this.ds=n,this.As=a}static Rs(e,t){let n=Re(),a=Re();for(const l of t.docChanges)switch(l.type){case 0:n=n.add(l.doc.key);break;case 1:a=a.add(l.doc.key)}return new _v(e,t.fromCache,n,a)}}/**
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
 */class AM{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class BR{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return GI()?8:vS(_t())>0?6:4}()}initialize(e,t){this.ys=e,this.indexManager=t,this.Vs=!0}getDocumentsMatchingQuery(e,t,n,a){const l={result:null};return this.ws(e,t).next(c=>{l.result=c}).next(()=>{if(!l.result)return this.bs(e,t,a,n).next(c=>{l.result=c})}).next(()=>{if(l.result)return;const c=new AM;return this.Ss(e,t,c).next(f=>{if(l.result=f,this.fs)return this.Ds(e,t,c,f.size)})}).next(()=>l.result)}Ds(e,t,n,a){return n.documentReadCount<this.gs?(_l()<=ke.DEBUG&&ee("QueryEngine","SDK will not create cache indexes for query:",yl(t),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),U.resolve()):(_l()<=ke.DEBUG&&ee("QueryEngine","Query:",yl(t),"scans",n.documentReadCount,"local documents and returns",a,"documents as results."),n.documentReadCount>this.ps*a?(_l()<=ke.DEBUG&&ee("QueryEngine","The SDK decides to create cache indexes for query:",yl(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,An(t))):U.resolve())}ws(e,t){if(Ab(t))return U.resolve(null);let n=An(t);return this.indexManager.getIndexType(e,n).next(a=>a===0?null:(t.limit!==null&&a===1&&(t=im(t,null,"F"),n=An(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(l=>{const c=Re(...l);return this.ys.getDocuments(e,c).next(f=>this.indexManager.getMinOffset(e,n).next(m=>{const p=this.vs(t,f);return this.Cs(t,p,c,m.readTime)?this.ws(e,im(t,null,"F")):this.Fs(e,p,t,m)}))})))}bs(e,t,n,a){return Ab(t)||a.isEqual(ge.min())?U.resolve(null):this.ys.getDocuments(e,n).next(l=>{const c=this.vs(t,l);return this.Cs(t,c,n,a)?U.resolve(null):(_l()<=ke.DEBUG&&ee("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),yl(t)),this.Fs(e,c,t,gS(a,xl)).next(f=>f))})}vs(e,t){let n=new Je(XS(e));return t.forEach((a,l)=>{Mh(e,l)&&(n=n.add(l))}),n}Cs(e,t,n,a){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(a)>0)}Ss(e,t,n){return _l()<=ke.DEBUG&&ee("QueryEngine","Using full collection scan to execute query:",yl(t)),this.ys.getDocumentsMatchingQuery(e,t,Qn.min(),n)}Fs(e,t,n,a){return this.ys.getDocumentsMatchingQuery(e,n,a).next(l=>(t.forEach(c=>{l=l.insert(c.key,c)}),l))}}/**
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
 */const yv="LocalStore",SM=3e8;class RM{constructor(e,t,n,a){this.persistence=e,this.Ms=t,this.serializer=a,this.xs=new at(Ie),this.Os=new Ur(l=>no(l),xh),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(n)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new LR(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.xs))}}function zR(i,e,t,n){return new RM(i,e,t,n)}async function FR(i,e){const t=le(i);return await t.persistence.runTransaction("Handle user change","readonly",n=>{let a;return t.mutationQueue.getAllMutationBatches(n).next(l=>(a=l,t.Ls(e),t.mutationQueue.getAllMutationBatches(n))).next(l=>{const c=[],f=[];let m=Re();for(const p of a){c.push(p.batchId);for(const y of p.mutations)m=m.add(y.key)}for(const p of l){f.push(p.batchId);for(const y of p.mutations)m=m.add(y.key)}return t.localDocuments.getDocuments(n,m).next(p=>({ks:p,removedBatchIds:c,addedBatchIds:f}))})})}function CM(i,e){const t=le(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const a=e.batch.keys(),l=t.Bs.newChangeBuffer({trackRemovals:!0});return function(f,m,p,y){const T=p.batch,b=T.keys();let O=U.resolve();return b.forEach(G=>{O=O.next(()=>y.getEntry(m,G)).next($=>{const Y=p.docVersions.get(G);de(Y!==null,48541),$.version.compareTo(Y)<0&&(T.applyToRemoteDocument($,p),$.isValidDocument()&&($.setReadTime(p.commitVersion),y.addEntry($)))})}),O.next(()=>f.mutationQueue.removeMutationBatch(m,T))}(t,n,e,l).next(()=>l.apply(n)).next(()=>t.mutationQueue.performConsistencyCheck(n)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(n,a,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(f){let m=Re();for(let p=0;p<f.mutationResults.length;++p)f.mutationResults[p].transformResults.length>0&&(m=m.add(f.batch.mutations[p].key));return m}(e))).next(()=>t.localDocuments.getDocuments(n,a))})}function qR(i){const e=le(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ti.getLastRemoteSnapshotVersion(t))}function DM(i,e){const t=le(i),n=e.snapshotVersion;let a=t.xs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{const c=t.Bs.newChangeBuffer({trackRemovals:!0});a=t.xs;const f=[];e.targetChanges.forEach((y,T)=>{const b=a.get(T);if(!b)return;f.push(t.Ti.removeMatchingKeys(l,y.removedDocuments,T).next(()=>t.Ti.addMatchingKeys(l,y.addedDocuments,T)));let O=b.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?O=O.withResumeToken(bt.EMPTY_BYTE_STRING,ge.min()).withLastLimboFreeSnapshotVersion(ge.min()):y.resumeToken.approximateByteSize()>0&&(O=O.withResumeToken(y.resumeToken,n)),a=a.insert(T,O),function($,Y,fe){return $.resumeToken.approximateByteSize()===0||Y.snapshotVersion.toMicroseconds()-$.snapshotVersion.toMicroseconds()>=SM?!0:fe.addedDocuments.size+fe.modifiedDocuments.size+fe.removedDocuments.size>0}(b,O,y)&&f.push(t.Ti.updateTargetData(l,O))});let m=xn(),p=Re();if(e.documentUpdates.forEach(y=>{e.resolvedLimboDocuments.has(y)&&f.push(t.persistence.referenceDelegate.updateLimboDocument(l,y))}),f.push(jR(l,c,e.documentUpdates).next(y=>{m=y.qs,p=y.Qs})),!n.isEqual(ge.min())){const y=t.Ti.getLastRemoteSnapshotVersion(l).next(T=>t.Ti.setTargetsMetadata(l,l.currentSequenceNumber,n));f.push(y)}return U.waitFor(f).next(()=>c.apply(l)).next(()=>t.localDocuments.getLocalViewOfDocuments(l,m,p)).next(()=>m)}).then(l=>(t.xs=a,l))}function jR(i,e,t){let n=Re(),a=Re();return t.forEach(l=>n=n.add(l)),e.getEntries(i,n).next(l=>{let c=xn();return t.forEach((f,m)=>{const p=l.get(f);m.isFoundDocument()!==p.isFoundDocument()&&(a=a.add(f)),m.isNoDocument()&&m.version.isEqual(ge.min())?(e.removeEntry(f,m.readTime),c=c.insert(f,m)):!p.isValidDocument()||m.version.compareTo(p.version)>0||m.version.compareTo(p.version)===0&&p.hasPendingWrites?(e.addEntry(m),c=c.insert(f,m)):ee(yv,"Ignoring outdated watch update for ",f,". Current version:",p.version," Watch version:",m.version)}),{qs:c,Qs:a}})}function PM(i,e){const t=le(i);return t.persistence.runTransaction("Get next mutation batch","readonly",n=>(e===void 0&&(e=Ds),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e)))}function Gl(i,e){const t=le(i);return t.persistence.runTransaction("Allocate target","readwrite",n=>{let a;return t.Ti.getTargetData(n,e).next(l=>l?(a=l,U.resolve(a)):t.Ti.allocateTargetId(n).next(c=>(a=new Cr(e,c,"TargetPurposeListen",n.currentSequenceNumber),t.Ti.addTargetData(n,a).next(()=>a))))}).then(n=>{const a=t.xs.get(n.targetId);return(a===null||n.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(t.xs=t.xs.insert(n.targetId,n),t.Os.set(e,n.targetId)),n})}async function Kl(i,e,t){const n=le(i),a=n.xs.get(e),l=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",l,c=>n.persistence.referenceDelegate.removeTarget(c,a))}catch(c){if(!Ys(c))throw c;ee(yv,`Failed to update sequence numbers for target ${e}: ${c}`)}n.xs=n.xs.remove(e),n.Os.delete(a.target)}function lm(i,e,t){const n=le(i);let a=ge.min(),l=Re();return n.persistence.runTransaction("Execute query","readwrite",c=>function(m,p,y){const T=le(m),b=T.Os.get(y);return b!==void 0?U.resolve(T.xs.get(b)):T.Ti.getTargetData(p,y)}(n,c,An(e)).next(f=>{if(f)return a=f.lastLimboFreeSnapshotVersion,n.Ti.getMatchingKeysForTargetId(c,f.targetId).next(m=>{l=m})}).next(()=>n.Ms.getDocumentsMatchingQuery(c,e,t?a:ge.min(),t?l:Re())).next(f=>(KR(n,$S(e),f),{documents:f,$s:l})))}function HR(i,e){const t=le(i),n=le(t.Ti),a=t.xs.get(e);return a?Promise.resolve(a.target):t.persistence.runTransaction("Get target data","readonly",l=>n.Rt(l,e).next(c=>c?c.target:null))}function GR(i,e){const t=le(i),n=t.Ns.get(e)||ge.min();return t.persistence.runTransaction("Get new document changes","readonly",a=>t.Bs.getAllFromCollectionGroup(a,e,gS(n,xl),Number.MAX_SAFE_INTEGER)).then(a=>(KR(t,e,a),a))}function KR(i,e,t){let n=i.Ns.get(e)||ge.min();t.forEach((a,l)=>{l.readTime.compareTo(n)>0&&(n=l.readTime)}),i.Ns.set(e,n)}async function NM(i,e,t,n){const a=le(i);let l=Re(),c=xn();for(const p of t){const y=e.Us(p.metadata.name);p.document&&(l=l.add(y));const T=e.Ks(p);T.setReadTime(e.Ws(p.metadata.readTime)),c=c.insert(y,T)}const f=a.Bs.newChangeBuffer({trackRemovals:!0}),m=await Gl(a,function(y){return An(ru(Me.fromString(`__bundle__/docs/${y}`)))}(n));return a.persistence.runTransaction("Apply bundle documents","readwrite",p=>jR(p,f,c).next(y=>(f.apply(p),y)).next(y=>a.Ti.removeMatchingKeysForTargetId(p,m.targetId).next(()=>a.Ti.addMatchingKeys(p,l,m.targetId)).next(()=>a.localDocuments.getLocalViewOfDocuments(p,y.qs,y.Qs)).next(()=>y.qs)))}async function OM(i,e,t=Re()){const n=await Gl(i,An(cv(e.bundledQuery))),a=le(i);return a.persistence.runTransaction("Save named query","readwrite",l=>{const c=Pt(e.readTime);if(n.snapshotVersion.compareTo(c)>=0)return a.Ei.saveNamedQuery(l,e);const f=n.withResumeToken(bt.EMPTY_BYTE_STRING,c);return a.xs=a.xs.insert(f.targetId,f),a.Ti.updateTargetData(l,f).next(()=>a.Ti.removeMatchingKeysForTargetId(l,n.targetId)).next(()=>a.Ti.addMatchingKeys(l,t,n.targetId)).next(()=>a.Ei.saveNamedQuery(l,e))})}/**
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
 */const QR="firestore_clients";function nI(i,e){return`${QR}_${i}_${e}`}const YR="firestore_mutations";function iI(i,e,t){let n=`${YR}_${i}_${t}`;return e.isAuthenticated()&&(n+=`_${e.uid}`),n}const WR="firestore_targets";function w_(i,e){return`${WR}_${i}_${e}`}/**
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
 */const zi="SharedClientState";class um{constructor(e,t,n,a){this.user=e,this.batchId=t,this.state=n,this.error=a}static Gs(e,t,n){const a=JSON.parse(n);let l,c=typeof a=="object"&&["pending","acknowledged","rejected"].indexOf(a.state)!==-1&&(a.error===void 0||typeof a.error=="object");return c&&a.error&&(c=typeof a.error.message=="string"&&typeof a.error.code=="string",c&&(l=new Z(a.error.code,a.error.message))),c?new um(e,t,a.state,l):(Dt(zi,`Failed to parse mutation state for ID '${t}': ${n}`),null)}zs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Jc{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static Gs(e,t){const n=JSON.parse(t);let a,l=typeof n=="object"&&["not-current","current","rejected"].indexOf(n.state)!==-1&&(n.error===void 0||typeof n.error=="object");return l&&n.error&&(l=typeof n.error.message=="string"&&typeof n.error.code=="string",l&&(a=new Z(n.error.code,n.error.message))),l?new Jc(e,n.state,a):(Dt(zi,`Failed to parse target state for ID '${e}': ${t}`),null)}zs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class cm{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Gs(e,t){const n=JSON.parse(t);let a=typeof n=="object"&&n.activeTargetIds instanceof Array,l=nv();for(let c=0;a&&c<n.activeTargetIds.length;++c)a=ES(n.activeTargetIds[c]),l=l.add(n.activeTargetIds[c]);return a?new cm(e,l):(Dt(zi,`Failed to parse client data for instance '${e}': ${t}`),null)}}class vv{constructor(e,t){this.clientId=e,this.onlineState=t}static Gs(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new vv(t.clientId,t.onlineState):(Dt(zi,`Failed to parse online state: ${e}`),null)}}class sy{constructor(){this.activeTargetIds=nv()}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class b_{constructor(e,t,n,a,l){this.window=e,this.xi=t,this.persistenceKey=n,this.Js=a,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Ys=this.Zs.bind(this),this.Xs=new at(Ie),this.started=!1,this.eo=[];const c=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=l,this.no=nI(this.persistenceKey,this.Js),this.ro=function(m){return`firestore_sequence_number_${m}`}(this.persistenceKey),this.Xs=this.Xs.insert(this.Js,new sy),this.io=new RegExp(`^${QR}_${c}_([^_]*)$`),this.so=new RegExp(`^${YR}_${c}_(\\d+)(?:_(.*))?$`),this.oo=new RegExp(`^${WR}_${c}_(\\d+)$`),this._o=function(m){return`firestore_online_state_${m}`}(this.persistenceKey),this.ao=function(m){return`firestore_bundle_loaded_v2_${m}`}(this.persistenceKey),this.window.addEventListener("storage",this.Ys)}static C(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Is();for(const n of e){if(n===this.Js)continue;const a=this.getItem(nI(this.persistenceKey,n));if(a){const l=cm.Gs(n,a);l&&(this.Xs=this.Xs.insert(l.clientId,l))}}this.uo();const t=this.storage.getItem(this._o);if(t){const n=this.co(t);n&&this.lo(n)}for(const n of this.eo)this.Zs(n);this.eo=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.ro,JSON.stringify(e))}getAllActiveQueryTargets(){return this.ho(this.Xs)}isActiveQueryTarget(e){let t=!1;return this.Xs.forEach((n,a)=>{a.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.Po(e,"pending")}updateMutationState(e,t,n){this.Po(e,t,n),this.To(e)}addLocalQueryTarget(e,t=!0){let n="not-current";if(this.isActiveQueryTarget(e)){const a=this.storage.getItem(w_(this.persistenceKey,e));if(a){const l=Jc.Gs(e,a);l&&(n=l.state)}}return t&&this.Io.js(e),this.uo(),n}removeLocalQueryTarget(e){this.Io.Hs(e),this.uo()}isLocalQueryTarget(e){return this.Io.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(w_(this.persistenceKey,e))}updateQueryState(e,t,n){this.Eo(e,t,n)}handleUserChange(e,t,n){t.forEach(a=>{this.To(a)}),this.currentUser=e,n.forEach(a=>{this.addPendingMutation(a)})}setOnlineState(e){this.Ao(e)}notifyBundleLoaded(e){this.Ro(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Ys),this.removeItem(this.no),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return ee(zi,"READ",e,t),t}setItem(e,t){ee(zi,"SET",e,t),this.storage.setItem(e,t)}removeItem(e){ee(zi,"REMOVE",e),this.storage.removeItem(e)}Zs(e){const t=e;if(t.storageArea===this.storage){if(ee(zi,"EVENT",t.key,t.newValue),t.key===this.no)return void Dt("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.xi.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.io.test(t.key)){if(t.newValue==null){const n=this.Vo(t.key);return this.mo(n,null)}{const n=this.fo(t.key,t.newValue);if(n)return this.mo(n.clientId,n)}}else if(this.so.test(t.key)){if(t.newValue!==null){const n=this.po(t.key,t.newValue);if(n)return this.yo(n)}}else if(this.oo.test(t.key)){if(t.newValue!==null){const n=this.wo(t.key,t.newValue);if(n)return this.bo(n)}}else if(t.key===this._o){if(t.newValue!==null){const n=this.co(t.newValue);if(n)return this.lo(n)}}else if(t.key===this.ro){const n=function(l){let c=On.le;if(l!=null)try{const f=JSON.parse(l);de(typeof f=="number",30636,{So:l}),c=f}catch(f){Dt(zi,"Failed to read sequence number from WebStorage",f)}return c}(t.newValue);n!==On.le&&this.sequenceNumberHandler(n)}else if(t.key===this.ao){const n=this.Do(t.newValue);await Promise.all(n.map(a=>this.syncEngine.vo(a)))}}}else this.eo.push(t)})}}get Io(){return this.Xs.get(this.Js)}uo(){this.setItem(this.no,this.Io.zs())}Po(e,t,n){const a=new um(this.currentUser,e,t,n),l=iI(this.persistenceKey,this.currentUser,e);this.setItem(l,a.zs())}To(e){const t=iI(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Ao(e){const t={clientId:this.Js,onlineState:e};this.storage.setItem(this._o,JSON.stringify(t))}Eo(e,t,n){const a=w_(this.persistenceKey,e),l=new Jc(e,t,n);this.setItem(a,l.zs())}Ro(e){const t=JSON.stringify(Array.from(e));this.setItem(this.ao,t)}Vo(e){const t=this.io.exec(e);return t?t[1]:null}fo(e,t){const n=this.Vo(e);return cm.Gs(n,t)}po(e,t){const n=this.so.exec(e),a=Number(n[1]),l=n[2]!==void 0?n[2]:null;return um.Gs(new Jt(l),a,t)}wo(e,t){const n=this.oo.exec(e),a=Number(n[1]);return Jc.Gs(a,t)}co(e){return vv.Gs(e)}Do(e){return JSON.parse(e)}async yo(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Co(e.batchId,e.state,e.error);ee(zi,`Ignoring mutation for non-active user ${e.user.uid}`)}bo(e){return this.syncEngine.Fo(e.targetId,e.state,e.error)}mo(e,t){const n=t?this.Xs.insert(e,t):this.Xs.remove(e),a=this.ho(this.Xs),l=this.ho(n),c=[],f=[];return l.forEach(m=>{a.has(m)||c.push(m)}),a.forEach(m=>{l.has(m)||f.push(m)}),this.syncEngine.Mo(c,f).then(()=>{this.Xs=n})}lo(e){this.Xs.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}ho(e){let t=nv();return e.forEach((n,a)=>{t=t.unionWith(a.activeTargetIds)}),t}}class $R{constructor(){this.xo=new sy,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,t,n){this.Oo[e]=t}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new sy,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class VM{No(e){}shutdown(){}}/**
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
 */const rI="ConnectivityMonitor";class sI{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(e){this.Qo.push(e)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){ee(rI,"Network connectivity changed: AVAILABLE");for(const e of this.Qo)e(0)}qo(){ee(rI,"Network connectivity changed: UNAVAILABLE");for(const e of this.Qo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Af=null;function ay(){return Af===null?Af=function(){return 268435456+Math.round(2147483648*Math.random())}():Af++,"0x"+Af.toString(16)}/**
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
 */const I_="RestConnection",xM={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class kM{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Wo=`projects/${n}/databases/${a}`,this.Go=this.databaseId.database===G_?`project_id=${n}`:`project_id=${n}&database_id=${a}`}zo(e,t,n,a,l){const c=ay(),f=this.jo(e,t.toUriEncodedString());ee(I_,`Sending RPC '${e}' ${c}:`,f,n);const m={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(m,a,l);const{host:p}=new URL(f),y=Jl(p);return this.Jo(e,f,m,n,y).then(T=>(ee(I_,`Received RPC '${e}' ${c}: `,T),T),T=>{throw Ji(I_,`RPC '${e}' ${c} failed with error: `,T,"url: ",f,"request:",n),T})}Yo(e,t,n,a,l,c){return this.zo(e,t,n,a,l)}Ho(e,t,n){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+iu}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((a,l)=>e[l]=a),n&&n.headers.forEach((a,l)=>e[l]=a)}jo(e,t){const n=xM[e];return`${this.Ko}/v1/${t}:${n}`}terminate(){}}/**
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
 */class MM{constructor(e){this.Zo=e.Zo,this.Xo=e.Xo}e_(e){this.t_=e}n_(e){this.r_=e}i_(e){this.s_=e}onMessage(e){this.o_=e}close(){this.Xo()}send(e){this.Zo(e)}__(){this.t_()}a_(){this.r_()}u_(e){this.s_(e)}c_(e){this.o_(e)}}/**
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
 */const mn="WebChannelConnection";class LM extends kM{constructor(e){super(e),this.l_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,n,a,l){const c=ay();return new Promise((f,m)=>{const p=new aS;p.setWithCredentials(!0),p.listenOnce(oS.COMPLETE,()=>{try{switch(p.getLastErrorCode()){case Nf.NO_ERROR:const T=p.getResponseJson();ee(mn,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(T)),f(T);break;case Nf.TIMEOUT:ee(mn,`RPC '${e}' ${c} timed out`),m(new Z(j.DEADLINE_EXCEEDED,"Request time out"));break;case Nf.HTTP_ERROR:const b=p.getStatus();if(ee(mn,`RPC '${e}' ${c} failed with status:`,b,"response text:",p.getResponseText()),b>0){let O=p.getResponseJson();Array.isArray(O)&&(O=O[0]);const G=O==null?void 0:O.error;if(G&&G.status&&G.message){const $=function(fe){const ae=fe.toLowerCase().replace(/_/g,"-");return Object.values(j).indexOf(ae)>=0?ae:j.UNKNOWN}(G.status);m(new Z($,G.message))}else m(new Z(j.UNKNOWN,"Server responded with status "+p.getStatus()))}else m(new Z(j.UNAVAILABLE,"Connection failed."));break;default:ce(9055,{h_:e,streamId:c,P_:p.getLastErrorCode(),T_:p.getLastError()})}}finally{ee(mn,`RPC '${e}' ${c} completed.`)}});const y=JSON.stringify(a);ee(mn,`RPC '${e}' ${c} sending request:`,a),p.send(t,"POST",y,n,15)})}I_(e,t,n){const a=ay(),l=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=cS(),f=uS(),m={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},p=this.longPollingOptions.timeoutSeconds;p!==void 0&&(m.longPollingTimeout=Math.round(1e3*p)),this.useFetchStreams&&(m.useFetchStreams=!0),this.Ho(m.initMessageHeaders,t,n),m.encodeInitMessageHeaders=!0;const y=l.join("");ee(mn,`Creating RPC '${e}' stream ${a}: ${y}`,m);const T=c.createWebChannel(y,m);this.E_(T);let b=!1,O=!1;const G=new MM({Zo:Y=>{O?ee(mn,`Not sending because RPC '${e}' stream ${a} is closed:`,Y):(b||(ee(mn,`Opening RPC '${e}' stream ${a} transport.`),T.open(),b=!0),ee(mn,`RPC '${e}' stream ${a} sending:`,Y),T.send(Y))},Xo:()=>T.close()}),$=(Y,fe,ae)=>{Y.listen(fe,ne=>{try{ae(ne)}catch(ve){setTimeout(()=>{throw ve},0)}})};return $(T,kc.EventType.OPEN,()=>{O||(ee(mn,`RPC '${e}' stream ${a} transport opened.`),G.__())}),$(T,kc.EventType.CLOSE,()=>{O||(O=!0,ee(mn,`RPC '${e}' stream ${a} transport closed`),G.u_(),this.d_(T))}),$(T,kc.EventType.ERROR,Y=>{O||(O=!0,Ji(mn,`RPC '${e}' stream ${a} transport errored. Name:`,Y.name,"Message:",Y.message),G.u_(new Z(j.UNAVAILABLE,"The operation could not be completed")))}),$(T,kc.EventType.MESSAGE,Y=>{var fe;if(!O){const ae=Y.data[0];de(!!ae,16349);const ne=ae,ve=(ne==null?void 0:ne.error)||((fe=ne[0])===null||fe===void 0?void 0:fe.error);if(ve){ee(mn,`RPC '${e}' stream ${a} received error:`,ve);const me=ve.status;let Te=function(R){const V=Mt[R];if(V!==void 0)return cR(V)}(me),N=ve.message;Te===void 0&&(Te=j.INTERNAL,N="Unknown error status: "+me+" with message "+ve.message),O=!0,G.u_(new Z(Te,N)),T.close()}else ee(mn,`RPC '${e}' stream ${a} received:`,ae),G.c_(ae)}}),$(f,lS.STAT_EVENT,Y=>{Y.stat===U_.PROXY?ee(mn,`RPC '${e}' stream ${a} detected buffering proxy`):Y.stat===U_.NOPROXY&&ee(mn,`RPC '${e}' stream ${a} detected no buffering proxy`)}),setTimeout(()=>{G.a_()},0),G}terminate(){this.l_.forEach(e=>e.close()),this.l_=[]}E_(e){this.l_.push(e)}d_(e){this.l_=this.l_.filter(t=>t===e)}}/**
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
 */function XR(){return typeof window<"u"?window:null}function Ff(){return typeof document<"u"?document:null}/**
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
 */function zh(i){return new qk(i,!0)}/**
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
 */class Ev{constructor(e,t,n=1e3,a=1.5,l=6e4){this.xi=e,this.timerId=t,this.A_=n,this.R_=a,this.V_=l,this.m_=0,this.f_=null,this.g_=Date.now(),this.reset()}reset(){this.m_=0}p_(){this.m_=this.V_}y_(e){this.cancel();const t=Math.floor(this.m_+this.w_()),n=Math.max(0,Date.now()-this.g_),a=Math.max(0,t-n);a>0&&ee("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.m_} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.f_=this.xi.enqueueAfterDelay(this.timerId,a,()=>(this.g_=Date.now(),e())),this.m_*=this.R_,this.m_<this.A_&&(this.m_=this.A_),this.m_>this.V_&&(this.m_=this.V_)}b_(){this.f_!==null&&(this.f_.skipDelay(),this.f_=null)}cancel(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}w_(){return(Math.random()-.5)*this.m_}}/**
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
 */const aI="PersistentStream";class JR{constructor(e,t,n,a,l,c,f,m){this.xi=e,this.S_=n,this.D_=a,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=f,this.listener=m,this.state=0,this.v_=0,this.C_=null,this.F_=null,this.stream=null,this.M_=0,this.x_=new Ev(e,t)}O_(){return this.state===1||this.state===5||this.N_()}N_(){return this.state===2||this.state===3}start(){this.M_=0,this.state!==4?this.auth():this.B_()}async stop(){this.O_()&&await this.close(0)}L_(){this.state=0,this.x_.reset()}k_(){this.N_()&&this.C_===null&&(this.C_=this.xi.enqueueAfterDelay(this.S_,6e4,()=>this.q_()))}Q_(e){this.U_(),this.stream.send(e)}async q_(){if(this.N_())return this.close(0)}U_(){this.C_&&(this.C_.cancel(),this.C_=null)}K_(){this.F_&&(this.F_.cancel(),this.F_=null)}async close(e,t){this.U_(),this.K_(),this.x_.cancel(),this.v_++,e!==4?this.x_.reset():t&&t.code===j.RESOURCE_EXHAUSTED?(Dt(t.toString()),Dt("Using maximum backoff delay to prevent overloading the backend."),this.x_.p_()):t&&t.code===j.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(t)}W_(){}auth(){this.state=1;const e=this.G_(this.v_),t=this.v_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,a])=>{this.v_===t&&this.z_(n,a)},n=>{e(()=>{const a=new Z(j.UNKNOWN,"Fetching auth token failed: "+n.message);return this.j_(a)})})}z_(e,t){const n=this.G_(this.v_);this.stream=this.H_(e,t),this.stream.e_(()=>{n(()=>this.listener.e_())}),this.stream.n_(()=>{n(()=>(this.state=2,this.F_=this.xi.enqueueAfterDelay(this.D_,1e4,()=>(this.N_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(a=>{n(()=>this.j_(a))}),this.stream.onMessage(a=>{n(()=>++this.M_==1?this.J_(a):this.onNext(a))})}B_(){this.state=5,this.x_.y_(async()=>{this.state=0,this.start()})}j_(e){return ee(aI,`close with error: ${e}`),this.stream=null,this.close(4,e)}G_(e){return t=>{this.xi.enqueueAndForget(()=>this.v_===e?t():(ee(aI,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class UM extends JR{constructor(e,t,n,a,l,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,a,c),this.serializer=l}H_(e,t){return this.connection.I_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.x_.reset();const t=Gk(this.serializer,e),n=function(l){if(!("targetChange"in l))return ge.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?ge.min():c.readTime?Pt(c.readTime):ge.min()}(e);return this.listener.Y_(t,n)}Z_(e){const t={};t.database=ey(this.serializer),t.addTarget=function(l,c){let f;const m=c.target;if(f=tm(m)?{documents:vR(l,m)}:{query:ER(l,m).gt},f.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){f.resumeToken=fR(l,c.resumeToken);const p=J_(l,c.expectedCount);p!==null&&(f.expectedCount=p)}else if(c.snapshotVersion.compareTo(ge.min())>0){f.readTime=Hl(l,c.snapshotVersion.toTimestamp());const p=J_(l,c.expectedCount);p!==null&&(f.expectedCount=p)}return f}(this.serializer,e);const n=Qk(this.serializer,e);n&&(t.labels=n),this.Q_(t)}X_(e){const t={};t.database=ey(this.serializer),t.removeTarget=e,this.Q_(t)}}class BM extends JR{constructor(e,t,n,a,l,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,a,c),this.serializer=l}get ea(){return this.M_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.ea&&this.ta([])}H_(e,t){return this.connection.I_("Write",e,t)}J_(e){return de(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,de(!e.writeResults||e.writeResults.length===0,55816),this.listener.na()}onNext(e){de(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.x_.reset();const t=Kk(e.writeResults,e.commitTime),n=Pt(e.commitTime);return this.listener.ra(n,t)}ia(){const e={};e.database=ey(this.serializer),this.Q_(e)}ta(e){const t={streamToken:this.lastStreamToken,writes:e.map(n=>_h(this.serializer,n))};this.Q_(t)}}/**
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
 */class zM{}class FM extends zM{constructor(e,t,n,a){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=a,this.sa=!1}oa(){if(this.sa)throw new Z(j.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,t,n,a){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,c])=>this.connection.zo(e,Z_(t,n),a,l,c)).catch(l=>{throw l.name==="FirebaseError"?(l.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new Z(j.UNKNOWN,l.toString())})}Yo(e,t,n,a,l){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,f])=>this.connection.Yo(e,Z_(t,n),a,c,f,l)).catch(c=>{throw c.name==="FirebaseError"?(c.code===j.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new Z(j.UNKNOWN,c.toString())})}terminate(){this.sa=!0,this.connection.terminate()}}class qM{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this._a=0,this.aa=null,this.ua=!0}ca(){this._a===0&&(this.la("Unknown"),this.aa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.aa=null,this.ha("Backend didn't respond within 10 seconds."),this.la("Offline"),Promise.resolve())))}Pa(e){this.state==="Online"?this.la("Unknown"):(this._a++,this._a>=1&&(this.Ta(),this.ha(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.la("Offline")))}set(e){this.Ta(),this._a=0,e==="Online"&&(this.ua=!1),this.la(e)}la(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ha(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ua?(Dt(t),this.ua=!1):ee("OnlineStateTracker",t)}Ta(){this.aa!==null&&(this.aa.cancel(),this.aa=null)}}/**
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
 */const lo="RemoteStore";class jM{constructor(e,t,n,a,l){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Ia=[],this.Ea=new Map,this.da=new Set,this.Aa=[],this.Ra=l,this.Ra.No(c=>{n.enqueueAndForget(async()=>{$s(this)&&(ee(lo,"Restarting streams for network reachability change."),await async function(m){const p=le(m);p.da.add(4),await ou(p),p.Va.set("Unknown"),p.da.delete(4),await Fh(p)}(this))})}),this.Va=new qM(n,a)}}async function Fh(i){if($s(i))for(const e of i.Aa)await e(!0)}async function ou(i){for(const e of i.Aa)await e(!1)}function zm(i,e){const t=le(i);t.Ea.has(e.targetId)||(t.Ea.set(e.targetId,e),bv(t)?wv(t):uu(t).N_()&&Tv(t,e))}function Ql(i,e){const t=le(i),n=uu(t);t.Ea.delete(e),n.N_()&&ZR(t,e),t.Ea.size===0&&(n.N_()?n.k_():$s(t)&&t.Va.set("Unknown"))}function Tv(i,e){if(i.ma.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ge.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}uu(i).Z_(e)}function ZR(i,e){i.ma.Ke(e),uu(i).X_(e)}function wv(i){i.ma=new Uk({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>i.Ea.get(e)||null,Pt:()=>i.datastore.serializer.databaseId}),uu(i).start(),i.Va.ca()}function bv(i){return $s(i)&&!uu(i).O_()&&i.Ea.size>0}function $s(i){return le(i).da.size===0}function e1(i){i.ma=void 0}async function HM(i){i.Va.set("Online")}async function GM(i){i.Ea.forEach((e,t)=>{Tv(i,e)})}async function KM(i,e){e1(i),bv(i)?(i.Va.Pa(e),wv(i)):i.Va.set("Unknown")}async function QM(i,e,t){if(i.Va.set("Online"),e instanceof dR&&e.state===2&&e.cause)try{await async function(a,l){const c=l.cause;for(const f of l.targetIds)a.Ea.has(f)&&(await a.remoteSyncer.rejectListen(f,c),a.Ea.delete(f),a.ma.removeTarget(f))}(i,e)}catch(n){ee(lo,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),await hm(i,n)}else if(e instanceof Bf?i.ma.Xe(e):e instanceof hR?i.ma.ot(e):i.ma.nt(e),!t.isEqual(ge.min()))try{const n=await qR(i.localStore);t.compareTo(n)>=0&&await function(l,c){const f=l.ma.It(c);return f.targetChanges.forEach((m,p)=>{if(m.resumeToken.approximateByteSize()>0){const y=l.Ea.get(p);y&&l.Ea.set(p,y.withResumeToken(m.resumeToken,c))}}),f.targetMismatches.forEach((m,p)=>{const y=l.Ea.get(m);if(!y)return;l.Ea.set(m,y.withResumeToken(bt.EMPTY_BYTE_STRING,y.snapshotVersion)),ZR(l,m);const T=new Cr(y.target,m,p,y.sequenceNumber);Tv(l,T)}),l.remoteSyncer.applyRemoteEvent(f)}(i,t)}catch(n){ee(lo,"Failed to raise snapshot:",n),await hm(i,n)}}async function hm(i,e,t){if(!Ys(e))throw e;i.da.add(1),await ou(i),i.Va.set("Offline"),t||(t=()=>qR(i.localStore)),i.asyncQueue.enqueueRetryable(async()=>{ee(lo,"Retrying IndexedDB access"),await t(),i.da.delete(1),await Fh(i)})}function t1(i,e){return e().catch(t=>hm(i,t,e))}async function lu(i){const e=le(i),t=zs(e);let n=e.Ia.length>0?e.Ia[e.Ia.length-1].batchId:Ds;for(;YM(e);)try{const a=await PM(e.localStore,n);if(a===null){e.Ia.length===0&&t.k_();break}n=a.batchId,WM(e,a)}catch(a){await hm(e,a)}n1(e)&&i1(e)}function YM(i){return $s(i)&&i.Ia.length<10}function WM(i,e){i.Ia.push(e);const t=zs(i);t.N_()&&t.ea&&t.ta(e.mutations)}function n1(i){return $s(i)&&!zs(i).O_()&&i.Ia.length>0}function i1(i){zs(i).start()}async function $M(i){zs(i).ia()}async function XM(i){const e=zs(i);for(const t of i.Ia)e.ta(t.mutations)}async function JM(i,e,t){const n=i.Ia.shift(),a=av.from(n,e,t);await t1(i,()=>i.remoteSyncer.applySuccessfulWrite(a)),await lu(i)}async function ZM(i,e){e&&zs(i).ea&&await async function(n,a){if(function(c){return uR(c)&&c!==j.ABORTED}(a.code)){const l=n.Ia.shift();zs(n).L_(),await t1(n,()=>n.remoteSyncer.rejectFailedWrite(l.batchId,a)),await lu(n)}}(i,e),n1(i)&&i1(i)}async function oI(i,e){const t=le(i);t.asyncQueue.verifyOperationInProgress(),ee(lo,"RemoteStore received new credentials");const n=$s(t);t.da.add(3),await ou(t),n&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.da.delete(3),await Fh(t)}async function oy(i,e){const t=le(i);e?(t.da.delete(2),await Fh(t)):e||(t.da.add(2),await ou(t),t.Va.set("Unknown"))}function uu(i){return i.fa||(i.fa=function(t,n,a){const l=le(t);return l.oa(),new UM(n,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)}(i.datastore,i.asyncQueue,{e_:HM.bind(null,i),n_:GM.bind(null,i),i_:KM.bind(null,i),Y_:QM.bind(null,i)}),i.Aa.push(async e=>{e?(i.fa.L_(),bv(i)?wv(i):i.Va.set("Unknown")):(await i.fa.stop(),e1(i))})),i.fa}function zs(i){return i.ga||(i.ga=function(t,n,a){const l=le(t);return l.oa(),new BM(n,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)}(i.datastore,i.asyncQueue,{e_:()=>Promise.resolve(),n_:$M.bind(null,i),i_:ZM.bind(null,i),na:XM.bind(null,i),ra:JM.bind(null,i)}),i.Aa.push(async e=>{e?(i.ga.L_(),await lu(i)):(await i.ga.stop(),i.Ia.length>0&&(ee(lo,`Stopping write stream with ${i.Ia.length} pending writes`),i.Ia=[]))})),i.ga}/**
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
 */class Iv{constructor(e,t,n,a,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=a,this.removalCallback=l,this.deferred=new un,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,a,l){const c=Date.now()+n,f=new Iv(e,t,c,a,l);return f.start(n),f}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Z(j.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function cu(i,e){if(Dt("AsyncQueue",`${e}: ${i}`),Ys(i))return new Z(j.UNAVAILABLE,`${e}: ${i}`);throw i}/**
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
 */class Cl{static emptySet(e){return new Cl(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||se.comparator(t.key,n.key):(t,n)=>se.comparator(t.key,n.key),this.keyedMap=Mc(),this.sortedSet=new at(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Cl)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=n.getNext().key;if(!a.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new Cl;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
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
 */class lI{constructor(){this.pa=new at(se.comparator)}track(e){const t=e.doc.key,n=this.pa.get(t);n?e.type!==0&&n.type===3?this.pa=this.pa.insert(t,e):e.type===3&&n.type!==1?this.pa=this.pa.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.pa=this.pa.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.pa=this.pa.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.pa=this.pa.remove(t):e.type===1&&n.type===2?this.pa=this.pa.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.pa=this.pa.insert(t,{type:2,doc:e.doc}):ce(63341,{Vt:e,ya:n}):this.pa=this.pa.insert(t,e)}wa(){const e=[];return this.pa.inorderTraversal((t,n)=>{e.push(n)}),e}}class Yl{constructor(e,t,n,a,l,c,f,m,p){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=a,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=f,this.excludesMetadataChanges=m,this.hasCachedResults=p}static fromInitialDocuments(e,t,n,a,l){const c=[];return t.forEach(f=>{c.push({type:0,doc:f})}),new Yl(e,t,Cl.emptySet(t),c,n,a,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&kh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let a=0;a<t.length;a++)if(t[a].type!==n[a].type||!t[a].doc.isEqual(n[a].doc))return!1;return!0}}/**
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
 */class eL{constructor(){this.ba=void 0,this.Sa=[]}Da(){return this.Sa.some(e=>e.va())}}class tL{constructor(){this.queries=uI(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,n){const a=le(t),l=a.queries;a.queries=uI(),l.forEach((c,f)=>{for(const m of f.Sa)m.onError(n)})})(this,new Z(j.ABORTED,"Firestore shutting down"))}}function uI(){return new Ur(i=>WS(i),kh)}async function Av(i,e){const t=le(i);let n=3;const a=e.query;let l=t.queries.get(a);l?!l.Da()&&e.va()&&(n=2):(l=new eL,n=e.va()?0:1);try{switch(n){case 0:l.ba=await t.onListen(a,!0);break;case 1:l.ba=await t.onListen(a,!1);break;case 2:await t.onFirstRemoteStoreListen(a)}}catch(c){const f=cu(c,`Initialization of query '${yl(e.query)}' failed`);return void e.onError(f)}t.queries.set(a,l),l.Sa.push(e),e.Fa(t.onlineState),l.ba&&e.Ma(l.ba)&&Rv(t)}async function Sv(i,e){const t=le(i),n=e.query;let a=3;const l=t.queries.get(n);if(l){const c=l.Sa.indexOf(e);c>=0&&(l.Sa.splice(c,1),l.Sa.length===0?a=e.va()?0:1:!l.Da()&&e.va()&&(a=2))}switch(a){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function nL(i,e){const t=le(i);let n=!1;for(const a of e){const l=a.query,c=t.queries.get(l);if(c){for(const f of c.Sa)f.Ma(a)&&(n=!0);c.ba=a}}n&&Rv(t)}function iL(i,e,t){const n=le(i),a=n.queries.get(e);if(a)for(const l of a.Sa)l.onError(t);n.queries.delete(e)}function Rv(i){i.Ca.forEach(e=>{e.next()})}var ly,cI;(cI=ly||(ly={})).xa="default",cI.Cache="cache";class Cv{constructor(e,t,n){this.query=e,this.Oa=t,this.Na=!1,this.Ba=null,this.onlineState="Unknown",this.options=n||{}}Ma(e){if(!this.options.includeMetadataChanges){const n=[];for(const a of e.docChanges)a.type!==3&&n.push(a);e=new Yl(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Na?this.La(e)&&(this.Oa.next(e),t=!0):this.ka(e,this.onlineState)&&(this.qa(e),t=!0),this.Ba=e,t}onError(e){this.Oa.error(e)}Fa(e){this.onlineState=e;let t=!1;return this.Ba&&!this.Na&&this.ka(this.Ba,e)&&(this.qa(this.Ba),t=!0),t}ka(e,t){if(!e.fromCache||!this.va())return!0;const n=t!=="Offline";return(!this.options.Qa||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}La(e){if(e.docChanges.length>0)return!0;const t=this.Ba&&this.Ba.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}qa(e){e=Yl.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Na=!0,this.Oa.next(e)}va(){return this.options.source!==ly.Cache}}/**
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
 */class rL{constructor(e,t){this.$a=e,this.byteLength=t}Ua(){return"metadata"in this.$a}}/**
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
 */class hI{constructor(e){this.serializer=e}Us(e){return Wi(this.serializer,e)}Ks(e){return e.metadata.exists?yR(this.serializer,e.document,!1):ot.newNoDocument(this.Us(e.metadata.name),this.Ws(e.metadata.readTime))}Ws(e){return Pt(e)}}class sL{constructor(e,t,n){this.Ka=e,this.localStore=t,this.serializer=n,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=r1(e)}Wa(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.$a.namedQuery)this.queries.push(e.$a.namedQuery);else if(e.$a.documentMetadata){this.documents.push({metadata:e.$a.documentMetadata}),e.$a.documentMetadata.exists||++t;const n=Me.fromString(e.$a.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else e.$a.document&&(this.documents[this.documents.length-1].document=e.$a.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}Ga(e){const t=new Map,n=new hI(this.serializer);for(const a of e)if(a.metadata.queries){const l=n.Us(a.metadata.name);for(const c of a.metadata.queries){const f=(t.get(c)||Re()).add(l);t.set(c,f)}}return t}async complete(){const e=await NM(this.localStore,new hI(this.serializer),this.documents,this.Ka.id),t=this.Ga(this.documents);for(const n of this.queries)await OM(this.localStore,n,t.get(n.name));return this.progress.taskState="Success",{progress:this.progress,za:this.collectionGroups,ja:e}}}function r1(i){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:i.totalDocuments,totalBytes:i.totalBytes}}/**
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
 */class s1{constructor(e){this.key=e}}class a1{constructor(e){this.key=e}}class o1{constructor(e,t){this.query=e,this.Ha=t,this.Ja=null,this.hasCachedResults=!1,this.current=!1,this.Ya=Re(),this.mutatedKeys=Re(),this.Za=XS(e),this.Xa=new Cl(this.Za)}get eu(){return this.Ha}tu(e,t){const n=t?t.nu:new lI,a=t?t.Xa:this.Xa;let l=t?t.mutatedKeys:this.mutatedKeys,c=a,f=!1;const m=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,p=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal((y,T)=>{const b=a.get(y),O=Mh(this.query,T)?T:null,G=!!b&&this.mutatedKeys.has(b.key),$=!!O&&(O.hasLocalMutations||this.mutatedKeys.has(O.key)&&O.hasCommittedMutations);let Y=!1;b&&O?b.data.isEqual(O.data)?G!==$&&(n.track({type:3,doc:O}),Y=!0):this.ru(b,O)||(n.track({type:2,doc:O}),Y=!0,(m&&this.Za(O,m)>0||p&&this.Za(O,p)<0)&&(f=!0)):!b&&O?(n.track({type:0,doc:O}),Y=!0):b&&!O&&(n.track({type:1,doc:b}),Y=!0,(m||p)&&(f=!0)),Y&&(O?(c=c.add(O),l=$?l.add(y):l.delete(y)):(c=c.delete(y),l=l.delete(y)))}),this.query.limit!==null)for(;c.size>this.query.limit;){const y=this.query.limitType==="F"?c.last():c.first();c=c.delete(y.key),l=l.delete(y.key),n.track({type:1,doc:y})}return{Xa:c,nu:n,Cs:f,mutatedKeys:l}}ru(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,a){const l=this.Xa;this.Xa=e.Xa,this.mutatedKeys=e.mutatedKeys;const c=e.nu.wa();c.sort((y,T)=>function(O,G){const $=Y=>{switch(Y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ce(20277,{Vt:Y})}};return $(O)-$(G)}(y.type,T.type)||this.Za(y.doc,T.doc)),this.iu(n),a=a!=null&&a;const f=t&&!a?this.su():[],m=this.Ya.size===0&&this.current&&!a?1:0,p=m!==this.Ja;return this.Ja=m,c.length!==0||p?{snapshot:new Yl(this.query,e.Xa,l,c,e.mutatedKeys,m===0,p,!1,!!n&&n.resumeToken.approximateByteSize()>0),ou:f}:{ou:f}}Fa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Xa:this.Xa,nu:new lI,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ou:[]}}_u(e){return!this.Ha.has(e)&&!!this.Xa.has(e)&&!this.Xa.get(e).hasLocalMutations}iu(e){e&&(e.addedDocuments.forEach(t=>this.Ha=this.Ha.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ha=this.Ha.delete(t)),this.current=e.current)}su(){if(!this.current)return[];const e=this.Ya;this.Ya=Re(),this.Xa.forEach(n=>{this._u(n.key)&&(this.Ya=this.Ya.add(n.key))});const t=[];return e.forEach(n=>{this.Ya.has(n)||t.push(new a1(n))}),this.Ya.forEach(n=>{e.has(n)||t.push(new s1(n))}),t}au(e){this.Ha=e.$s,this.Ya=Re();const t=this.tu(e.documents);return this.applyChanges(t,!0)}uu(){return Yl.fromInitialDocuments(this.query,this.Xa,this.mutatedKeys,this.Ja===0,this.hasCachedResults)}}const Xs="SyncEngine";class aL{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class oL{constructor(e){this.key=e,this.cu=!1}}class lL{constructor(e,t,n,a,l,c){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=a,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.lu={},this.hu=new Ur(f=>WS(f),kh),this.Pu=new Map,this.Tu=new Set,this.Iu=new at(se.comparator),this.Eu=new Map,this.du=new fv,this.Au={},this.Ru=new Map,this.Vu=oo.lr(),this.onlineState="Unknown",this.mu=void 0}get isPrimaryClient(){return this.mu===!0}}async function uL(i,e,t=!0){const n=Fm(i);let a;const l=n.hu.get(e);return l?(n.sharedClientState.addLocalQueryTarget(l.targetId),a=l.view.uu()):a=await l1(n,e,t,!0),a}async function cL(i,e){const t=Fm(i);await l1(t,e,!0,!1)}async function l1(i,e,t,n){const a=await Gl(i.localStore,An(e)),l=a.targetId,c=i.sharedClientState.addLocalQueryTarget(l,t);let f;return n&&(f=await Dv(i,e,l,c==="current",a.resumeToken)),i.isPrimaryClient&&t&&zm(i.remoteStore,a),f}async function Dv(i,e,t,n,a){i.fu=(T,b,O)=>async function($,Y,fe,ae){let ne=Y.view.tu(fe);ne.Cs&&(ne=await lm($.localStore,Y.query,!1).then(({documents:N})=>Y.view.tu(N,ne)));const ve=ae&&ae.targetChanges.get(Y.targetId),me=ae&&ae.targetMismatches.get(Y.targetId)!=null,Te=Y.view.applyChanges(ne,$.isPrimaryClient,ve,me);return uy($,Y.targetId,Te.ou),Te.snapshot}(i,T,b,O);const l=await lm(i.localStore,e,!0),c=new o1(e,l.$s),f=c.tu(l.documents),m=Bh.createSynthesizedTargetChangeForCurrentChange(t,n&&i.onlineState!=="Offline",a),p=c.applyChanges(f,i.isPrimaryClient,m);uy(i,t,p.ou);const y=new aL(e,t,c);return i.hu.set(e,y),i.Pu.has(t)?i.Pu.get(t).push(e):i.Pu.set(t,[e]),p.snapshot}async function hL(i,e,t){const n=le(i),a=n.hu.get(e),l=n.Pu.get(a.targetId);if(l.length>1)return n.Pu.set(a.targetId,l.filter(c=>!kh(c,e))),void n.hu.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(a.targetId),n.sharedClientState.isActiveQueryTarget(a.targetId)||await Kl(n.localStore,a.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(a.targetId),t&&Ql(n.remoteStore,a.targetId),Wl(n,a.targetId)}).catch(Qs)):(Wl(n,a.targetId),await Kl(n.localStore,a.targetId,!0))}async function dL(i,e){const t=le(i),n=t.hu.get(e),a=t.Pu.get(n.targetId);t.isPrimaryClient&&a.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),Ql(t.remoteStore,n.targetId))}async function fL(i,e,t){const n=Vv(i);try{const a=await function(c,f){const m=le(c),p=mt.now(),y=f.reduce((O,G)=>O.add(G.key),Re());let T,b;return m.persistence.runTransaction("Locally write mutations","readwrite",O=>{let G=xn(),$=Re();return m.Bs.getEntries(O,y).next(Y=>{G=Y,G.forEach((fe,ae)=>{ae.isValidDocument()||($=$.add(fe))})}).next(()=>m.localDocuments.getOverlayedDocuments(O,G)).next(Y=>{T=Y;const fe=[];for(const ae of f){const ne=kk(ae,T.get(ae.key).overlayedDocument);ne!=null&&fe.push(new Br(ae.key,ne,zS(ne.value.mapValue),ft.exists(!0)))}return m.mutationQueue.addMutationBatch(O,p,fe,f)}).next(Y=>{b=Y;const fe=Y.applyToLocalDocumentSet(T,$);return m.documentOverlayCache.saveOverlays(O,Y.batchId,fe)})}).then(()=>({batchId:b.batchId,changes:ZS(T)}))}(n.localStore,e);n.sharedClientState.addPendingMutation(a.batchId),function(c,f,m){let p=c.Au[c.currentUser.toKey()];p||(p=new at(Ie)),p=p.insert(f,m),c.Au[c.currentUser.toKey()]=p}(n,a.batchId,t),await zr(n,a.changes),await lu(n.remoteStore)}catch(a){const l=cu(a,"Failed to persist write");t.reject(l)}}async function u1(i,e){const t=le(i);try{const n=await DM(t.localStore,e);e.targetChanges.forEach((a,l)=>{const c=t.Eu.get(l);c&&(de(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1,22616),a.addedDocuments.size>0?c.cu=!0:a.modifiedDocuments.size>0?de(c.cu,14607):a.removedDocuments.size>0&&(de(c.cu,42227),c.cu=!1))}),await zr(t,n,e)}catch(n){await Qs(n)}}function dI(i,e,t){const n=le(i);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const a=[];n.hu.forEach((l,c)=>{const f=c.view.Fa(e);f.snapshot&&a.push(f.snapshot)}),function(c,f){const m=le(c);m.onlineState=f;let p=!1;m.queries.forEach((y,T)=>{for(const b of T.Sa)b.Fa(f)&&(p=!0)}),p&&Rv(m)}(n.eventManager,e),a.length&&n.lu.Y_(a),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function mL(i,e,t){const n=le(i);n.sharedClientState.updateQueryState(e,"rejected",t);const a=n.Eu.get(e),l=a&&a.key;if(l){let c=new at(se.comparator);c=c.insert(l,ot.newNoDocument(l,ge.min()));const f=Re().add(l),m=new Uh(ge.min(),new Map,new at(Ie),c,f);await u1(n,m),n.Iu=n.Iu.remove(l),n.Eu.delete(e),Ov(n)}else await Kl(n.localStore,e,!1).then(()=>Wl(n,e,t)).catch(Qs)}async function gL(i,e){const t=le(i),n=e.batch.batchId;try{const a=await CM(t.localStore,e);Nv(t,n,null),Pv(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await zr(t,a)}catch(a){await Qs(a)}}async function pL(i,e,t){const n=le(i);try{const a=await function(c,f){const m=le(c);return m.persistence.runTransaction("Reject batch","readwrite-primary",p=>{let y;return m.mutationQueue.lookupMutationBatch(p,f).next(T=>(de(T!==null,37113),y=T.keys(),m.mutationQueue.removeMutationBatch(p,T))).next(()=>m.mutationQueue.performConsistencyCheck(p)).next(()=>m.documentOverlayCache.removeOverlaysForBatchId(p,y,f)).next(()=>m.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(p,y)).next(()=>m.localDocuments.getDocuments(p,y))})}(n.localStore,e);Nv(n,e,t),Pv(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await zr(n,a)}catch(a){await Qs(a)}}async function _L(i,e){const t=le(i);$s(t.remoteStore)||ee(Xs,"The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const n=await function(c){const f=le(c);return f.persistence.runTransaction("Get highest unacknowledged batch id","readonly",m=>f.mutationQueue.getHighestUnacknowledgedBatchId(m))}(t.localStore);if(n===Ds)return void e.resolve();const a=t.Ru.get(n)||[];a.push(e),t.Ru.set(n,a)}catch(n){const a=cu(n,"Initialization of waitForPendingWrites() operation failed");e.reject(a)}}function Pv(i,e){(i.Ru.get(e)||[]).forEach(t=>{t.resolve()}),i.Ru.delete(e)}function Nv(i,e,t){const n=le(i);let a=n.Au[n.currentUser.toKey()];if(a){const l=a.get(e);l&&(t?l.reject(t):l.resolve(),a=a.remove(e)),n.Au[n.currentUser.toKey()]=a}}function Wl(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const n of i.Pu.get(e))i.hu.delete(n),t&&i.lu.gu(n,t);i.Pu.delete(e),i.isPrimaryClient&&i.du.Hr(e).forEach(n=>{i.du.containsKey(n)||c1(i,n)})}function c1(i,e){i.Tu.delete(e.path.canonicalString());const t=i.Iu.get(e);t!==null&&(Ql(i.remoteStore,t),i.Iu=i.Iu.remove(e),i.Eu.delete(t),Ov(i))}function uy(i,e,t){for(const n of t)n instanceof s1?(i.du.addReference(n.key,e),yL(i,n)):n instanceof a1?(ee(Xs,"Document no longer in limbo: "+n.key),i.du.removeReference(n.key,e),i.du.containsKey(n.key)||c1(i,n.key)):ce(19791,{pu:n})}function yL(i,e){const t=e.key,n=t.path.canonicalString();i.Iu.get(t)||i.Tu.has(n)||(ee(Xs,"New document in limbo: "+t),i.Tu.add(n),Ov(i))}function Ov(i){for(;i.Tu.size>0&&i.Iu.size<i.maxConcurrentLimboResolutions;){const e=i.Tu.values().next().value;i.Tu.delete(e);const t=new se(Me.fromString(e)),n=i.Vu.next();i.Eu.set(n,new oL(t)),i.Iu=i.Iu.insert(t,n),zm(i.remoteStore,new Cr(An(ru(t.path)),n,"TargetPurposeLimboResolution",On.le))}}async function zr(i,e,t){const n=le(i),a=[],l=[],c=[];n.hu.isEmpty()||(n.hu.forEach((f,m)=>{c.push(n.fu(m,e,t).then(p=>{var y;if((p||t)&&n.isPrimaryClient){const T=p?!p.fromCache:(y=t==null?void 0:t.targetChanges.get(m.targetId))===null||y===void 0?void 0:y.current;n.sharedClientState.updateQueryState(m.targetId,T?"current":"not-current")}if(p){a.push(p);const T=_v.Rs(m.targetId,p);l.push(T)}}))}),await Promise.all(c),n.lu.Y_(a),await async function(m,p){const y=le(m);try{await y.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>U.forEach(p,b=>U.forEach(b.ds,O=>y.persistence.referenceDelegate.addReference(T,b.targetId,O)).next(()=>U.forEach(b.As,O=>y.persistence.referenceDelegate.removeReference(T,b.targetId,O)))))}catch(T){if(!Ys(T))throw T;ee(yv,"Failed to update sequence numbers: "+T)}for(const T of p){const b=T.targetId;if(!T.fromCache){const O=y.xs.get(b),G=O.snapshotVersion,$=O.withLastLimboFreeSnapshotVersion(G);y.xs=y.xs.insert(b,$)}}}(n.localStore,l))}async function vL(i,e){const t=le(i);if(!t.currentUser.isEqual(e)){ee(Xs,"User change. New user:",e.toKey());const n=await FR(t.localStore,e);t.currentUser=e,function(l,c){l.Ru.forEach(f=>{f.forEach(m=>{m.reject(new Z(j.CANCELLED,c))})}),l.Ru.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await zr(t,n.ks)}}function EL(i,e){const t=le(i),n=t.Eu.get(e);if(n&&n.cu)return Re().add(n.key);{let a=Re();const l=t.Pu.get(e);if(!l)return a;for(const c of l){const f=t.hu.get(c);a=a.unionWith(f.view.eu)}return a}}async function TL(i,e){const t=le(i),n=await lm(t.localStore,e.query,!0),a=e.view.au(n);return t.isPrimaryClient&&uy(t,e.targetId,a.ou),a}async function wL(i,e){const t=le(i);return GR(t.localStore,e).then(n=>zr(t,n))}async function bL(i,e,t,n){const a=le(i),l=await function(f,m){const p=le(f),y=le(p.mutationQueue);return p.persistence.runTransaction("Lookup mutation documents","readonly",T=>y.tr(T,m).next(b=>b?p.localDocuments.getDocuments(T,b):U.resolve(null)))}(a.localStore,e);l!==null?(t==="pending"?await lu(a.remoteStore):t==="acknowledged"||t==="rejected"?(Nv(a,e,n||null),Pv(a,e),function(f,m){le(le(f).mutationQueue).sr(m)}(a.localStore,e)):ce(6720,"Unknown batchState",{yu:t}),await zr(a,l)):ee(Xs,"Cannot apply mutation batch with id: "+e)}async function IL(i,e){const t=le(i);if(Fm(t),Vv(t),e===!0&&t.mu!==!0){const n=t.sharedClientState.getAllActiveQueryTargets(),a=await fI(t,n.toArray());t.mu=!0,await oy(t.remoteStore,!0);for(const l of a)zm(t.remoteStore,l)}else if(e===!1&&t.mu!==!1){const n=[];let a=Promise.resolve();t.Pu.forEach((l,c)=>{t.sharedClientState.isLocalQueryTarget(c)?n.push(c):a=a.then(()=>(Wl(t,c),Kl(t.localStore,c,!0))),Ql(t.remoteStore,c)}),await a,await fI(t,n),function(c){const f=le(c);f.Eu.forEach((m,p)=>{Ql(f.remoteStore,p)}),f.du.Jr(),f.Eu=new Map,f.Iu=new at(se.comparator)}(t),t.mu=!1,await oy(t.remoteStore,!1)}}async function fI(i,e,t){const n=le(i),a=[],l=[];for(const c of e){let f;const m=n.Pu.get(c);if(m&&m.length!==0){f=await Gl(n.localStore,An(m[0]));for(const p of m){const y=n.hu.get(p),T=await TL(n,y);T.snapshot&&l.push(T.snapshot)}}else{const p=await HR(n.localStore,c);f=await Gl(n.localStore,p),await Dv(n,h1(p),c,!1,f.resumeToken)}a.push(f)}return n.lu.Y_(l),a}function h1(i){return YS(i.path,i.collectionGroup,i.orderBy,i.filters,i.limit,"F",i.startAt,i.endAt)}function AL(i){return function(t){return le(le(t).persistence).Is()}(le(i).localStore)}async function SL(i,e,t,n){const a=le(i);if(a.mu)return void ee(Xs,"Ignoring unexpected query state notification.");const l=a.Pu.get(e);if(l&&l.length>0)switch(t){case"current":case"not-current":{const c=await GR(a.localStore,$S(l[0])),f=Uh.createSynthesizedRemoteEventForCurrentChange(e,t==="current",bt.EMPTY_BYTE_STRING);await zr(a,c,f);break}case"rejected":await Kl(a.localStore,e,!0),Wl(a,e,n);break;default:ce(64155,t)}}async function RL(i,e,t){const n=Fm(i);if(n.mu){for(const a of e){if(n.Pu.has(a)&&n.sharedClientState.isActiveQueryTarget(a)){ee(Xs,"Adding an already active target "+a);continue}const l=await HR(n.localStore,a),c=await Gl(n.localStore,l);await Dv(n,h1(l),c.targetId,!1,c.resumeToken),zm(n.remoteStore,c)}for(const a of t)n.Pu.has(a)&&await Kl(n.localStore,a,!1).then(()=>{Ql(n.remoteStore,a),Wl(n,a)}).catch(Qs)}}function Fm(i){const e=le(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=u1.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=EL.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=mL.bind(null,e),e.lu.Y_=nL.bind(null,e.eventManager),e.lu.gu=iL.bind(null,e.eventManager),e}function Vv(i){const e=le(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=gL.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=pL.bind(null,e),e}function CL(i,e,t){const n=le(i);(async function(l,c,f){try{const m=await c.getMetadata();if(await function(O,G){const $=le(O),Y=Pt(G.createTime);return $.persistence.runTransaction("hasNewerBundle","readonly",fe=>$.Ei.getBundleMetadata(fe,G.id)).then(fe=>!!fe&&fe.createTime.compareTo(Y)>=0)}(l.localStore,m))return await c.close(),f._completeWith(function(O){return{taskState:"Success",documentsLoaded:O.totalDocuments,bytesLoaded:O.totalBytes,totalDocuments:O.totalDocuments,totalBytes:O.totalBytes}}(m)),Promise.resolve(new Set);f._updateProgress(r1(m));const p=new sL(m,l.localStore,c.serializer);let y=await c.wu();for(;y;){const b=await p.Wa(y);b&&f._updateProgress(b),y=await c.wu()}const T=await p.complete();return await zr(l,T.ja,void 0),await function(O,G){const $=le(O);return $.persistence.runTransaction("Save bundle","readwrite",Y=>$.Ei.saveBundleMetadata(Y,G))}(l.localStore,m),f._completeWith(T.progress),Promise.resolve(T.za)}catch(m){return Ji(Xs,`Loading bundle failed with ${m}`),f._failWith(m),Promise.resolve(new Set)}})(n,e,t).then(a=>{n.sharedClientState.notifyBundleLoaded(a)})}class yh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=zh(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Su(e),await this.persistence.start(),this.localStore=this.Du(e),this.gcScheduler=this.vu(e,this.localStore),this.indexBackfillerScheduler=this.Cu(e,this.localStore)}vu(e,t){return null}Cu(e,t){return null}Du(e){return zR(this.persistence,new BR,e.initialUser,this.serializer)}Su(e){return new mv(Bm.fi,this.serializer)}bu(e){return new $R}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}yh.provider={build:()=>new yh};class DL extends yh{constructor(e){super(),this.cacheSizeBytes=e}vu(e,t){de(this.persistence.referenceDelegate instanceof om,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new VR(n,e.asyncQueue,t)}Su(e){const t=this.cacheSizeBytes!==void 0?gn.withCacheSize(this.cacheSizeBytes):gn.DEFAULT;return new mv(n=>om.fi(n,t),this.serializer)}}class d1 extends yh{constructor(e,t,n){super(),this.Fu=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Fu.initialize(this,e),await Vv(this.Fu.syncEngine),await lu(this.Fu.remoteStore),await this.persistence.Ji(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}Du(e){return zR(this.persistence,new BR,e.initialUser,this.serializer)}vu(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new VR(n,e.asyncQueue,t)}Cu(e,t){const n=new U2(t,this.persistence);return new L2(e.asyncQueue,n)}Su(e){const t=pv(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=this.cacheSizeBytes!==void 0?gn.withCacheSize(this.cacheSizeBytes):gn.DEFAULT;return new gv(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,XR(),Ff(),this.serializer,this.sharedClientState,!!this.forceOwnership)}bu(e){return new $R}}class PL extends d1{constructor(e,t){super(e,t,!1),this.Fu=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Fu.syncEngine;this.sharedClientState instanceof b_&&(this.sharedClientState.syncEngine={Co:bL.bind(null,t),Fo:SL.bind(null,t),Mo:RL.bind(null,t),Is:AL.bind(null,t),vo:wL.bind(null,t)},await this.sharedClientState.start()),await this.persistence.Ji(async n=>{await IL(this.Fu.syncEngine,n),this.gcScheduler&&(n&&!this.gcScheduler.started?this.gcScheduler.start():n||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(n&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():n||this.indexBackfillerScheduler.stop())})}bu(e){const t=XR();if(!b_.C(t))throw new Z(j.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=pv(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new b_(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class vh{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>dI(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=vL.bind(null,this.syncEngine),await oy(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new tL}()}createDatastore(e){const t=zh(e.databaseInfo.databaseId),n=function(l){return new LM(l)}(e.databaseInfo);return function(l,c,f,m){return new FM(l,c,f,m)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return function(n,a,l,c,f){return new jM(n,a,l,c,f)}(this.localStore,this.datastore,e.asyncQueue,t=>dI(this.syncEngine,t,0),function(){return sI.C()?new sI:new VM}())}createSyncEngine(e,t){return function(a,l,c,f,m,p,y){const T=new lL(a,l,c,f,m,p);return y&&(T.mu=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(a){const l=le(a);ee(lo,"RemoteStore shutting down."),l.da.add(5),await ou(l),l.Ra.shutdown(),l.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}vh.provider={build:()=>new vh};function mI(i,e=10240){let t=0;return{async read(){if(t<i.byteLength){const n={value:i.slice(t,t+e),done:!1};return t+=e,n}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
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
 */class qm{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Mu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Mu(this.observer.error,e):Dt("Uncaught Error in snapshot listener:",e.toString()))}xu(){this.muted=!0}Mu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class NL{constructor(e,t){this.Ou=e,this.serializer=t,this.metadata=new un,this.buffer=new Uint8Array,this.Nu=function(){return new TextDecoder("utf-8")}(),this.Bu().then(n=>{n&&n.Ua()?this.metadata.resolve(n.$a.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(n==null?void 0:n.$a)}`))},n=>this.metadata.reject(n))}close(){return this.Ou.cancel()}async getMetadata(){return this.metadata.promise}async wu(){return await this.getMetadata(),this.Bu()}async Bu(){const e=await this.Lu();if(e===null)return null;const t=this.Nu.decode(e),n=Number(t);isNaN(n)&&this.ku(`length string (${t}) is not valid number`);const a=await this.qu(n);return new rL(JSON.parse(a),e.length+n)}Qu(){return this.buffer.findIndex(e=>e===123)}async Lu(){for(;this.Qu()<0&&!await this.$u(););if(this.buffer.length===0)return null;const e=this.Qu();e<0&&this.ku("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async qu(e){for(;this.buffer.length<e;)await this.$u()&&this.ku("Reached the end of bundle when more is expected.");const t=this.Nu.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}ku(e){throw this.Ou.cancel(),new Error(`Invalid bundle format: ${e}`)}async $u(){const e=await this.Ou.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
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
 */class OL{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new Z(j.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await async function(a,l){const c=le(a),f={documents:l.map(T=>ph(c.serializer,T))},m=await c.Yo("BatchGetDocuments",c.serializer.databaseId,Me.emptyPath(),f,l.length),p=new Map;m.forEach(T=>{const b=Hk(c.serializer,T);p.set(b.key.toString(),b)});const y=[];return l.forEach(T=>{const b=p.get(T.toString());de(!!b,55234,{key:T}),y.push(b)}),y}(this.datastore,e);return t.forEach(n=>this.recordVersion(n)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(n){this.lastTransactionError=n}this.writtenDocs.add(e.toString())}delete(e){this.write(new au(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,n)=>{const a=se.fromPath(n);this.mutations.push(new rv(a,this.precondition(a)))}),await async function(n,a){const l=le(n),c={writes:a.map(f=>_h(l.serializer,f))};await l.zo("Commit",l.serializer.databaseId,Me.emptyPath(),c)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw ce(50498,{Uu:e.constructor.name});t=ge.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new Z(j.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(ge.min())?ft.exists(!1):ft.updateTime(t):ft.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(ge.min()))throw new Z(j.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return ft.updateTime(t)}return ft.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class VL{constructor(e,t,n,a,l){this.asyncQueue=e,this.datastore=t,this.options=n,this.updateFunction=a,this.deferred=l,this.Ku=n.maxAttempts,this.x_=new Ev(this.asyncQueue,"transaction_retry")}Wu(){this.Ku-=1,this.Gu()}Gu(){this.x_.y_(async()=>{const e=new OL(this.datastore),t=this.zu(e);t&&t.then(n=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(n)}).catch(a=>{this.ju(a)}))}).catch(n=>{this.ju(n)})})}zu(e){try{const t=this.updateFunction(e);return!Oh(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}ju(e){this.Ku>0&&this.Hu(e)?(this.Ku-=1,this.asyncQueue.enqueueAndForget(()=>(this.Gu(),Promise.resolve()))):this.deferred.reject(e)}Hu(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!uR(t)}return!1}}/**
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
 */const Fs="FirestoreClient";class xL{constructor(e,t,n,a,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=a,this.user=Jt.UNAUTHENTICATED,this.clientId=fS.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(n,async c=>{ee(Fs,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c}),this.appCheckCredentials.start(n,c=>(ee(Fs,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new un;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=cu(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function A_(i,e){i.asyncQueue.verifyOperationInProgress(),ee(Fs,"Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let n=t.initialUser;i.setCredentialChangeListener(async a=>{n.isEqual(a)||(await FR(e.localStore,a),n=a)}),e.persistence.setDatabaseDeletedListener(()=>i.terminate()),i._offlineComponents=e}async function gI(i,e){i.asyncQueue.verifyOperationInProgress();const t=await xv(i);ee(Fs,"Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener(n=>oI(e.remoteStore,n)),i.setAppCheckTokenChangeListener((n,a)=>oI(e.remoteStore,a)),i._onlineComponents=e}async function xv(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){ee(Fs,"Using user provided OfflineComponentProvider");try{await A_(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(a){return a.name==="FirebaseError"?a.code===j.FAILED_PRECONDITION||a.code===j.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11}(t))throw t;Ji("Error using user provided cache. Falling back to memory cache: "+t),await A_(i,new yh)}}else ee(Fs,"Using default OfflineComponentProvider"),await A_(i,new DL(void 0));return i._offlineComponents}async function jm(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(ee(Fs,"Using user provided OnlineComponentProvider"),await gI(i,i._uninitializedComponentsProvider._online)):(ee(Fs,"Using default OnlineComponentProvider"),await gI(i,new vh))),i._onlineComponents}function f1(i){return xv(i).then(e=>e.persistence)}function kv(i){return xv(i).then(e=>e.localStore)}function m1(i){return jm(i).then(e=>e.remoteStore)}function Mv(i){return jm(i).then(e=>e.syncEngine)}function kL(i){return jm(i).then(e=>e.datastore)}async function $l(i){const e=await jm(i),t=e.eventManager;return t.onListen=uL.bind(null,e.syncEngine),t.onUnlisten=hL.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=cL.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=dL.bind(null,e.syncEngine),t}function ML(i){return i.asyncQueue.enqueue(async()=>{const e=await f1(i),t=await m1(i);return e.setNetworkEnabled(!0),function(a){const l=le(a);return l.da.delete(0),Fh(l)}(t)})}function LL(i){return i.asyncQueue.enqueue(async()=>{const e=await f1(i),t=await m1(i);return e.setNetworkEnabled(!1),async function(a){const l=le(a);l.da.add(0),await ou(l),l.Va.set("Offline")}(t)})}function UL(i,e){const t=new un;return i.asyncQueue.enqueueAndForget(async()=>async function(a,l,c){try{const f=await function(p,y){const T=le(p);return T.persistence.runTransaction("read document","readonly",b=>T.localDocuments.getDocument(b,y))}(a,l);f.isFoundDocument()?c.resolve(f):f.isNoDocument()?c.resolve(null):c.reject(new Z(j.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(f){const m=cu(f,`Failed to get document '${l} from cache`);c.reject(m)}}(await kv(i),e,t)),t.promise}function g1(i,e,t={}){const n=new un;return i.asyncQueue.enqueueAndForget(async()=>function(l,c,f,m,p){const y=new qm({next:b=>{y.xu(),c.enqueueAndForget(()=>Sv(l,T));const O=b.docs.has(f);!O&&b.fromCache?p.reject(new Z(j.UNAVAILABLE,"Failed to get document because the client is offline.")):O&&b.fromCache&&m&&m.source==="server"?p.reject(new Z(j.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):p.resolve(b)},error:b=>p.reject(b)}),T=new Cv(ru(f.path),y,{includeMetadataChanges:!0,Qa:!0});return Av(l,T)}(await $l(i),i.asyncQueue,e,t,n)),n.promise}function BL(i,e){const t=new un;return i.asyncQueue.enqueueAndForget(async()=>async function(a,l,c){try{const f=await lm(a,l,!0),m=new o1(l,f.$s),p=m.tu(f.documents),y=m.applyChanges(p,!1);c.resolve(y.snapshot)}catch(f){const m=cu(f,`Failed to execute query '${l} against cache`);c.reject(m)}}(await kv(i),e,t)),t.promise}function p1(i,e,t={}){const n=new un;return i.asyncQueue.enqueueAndForget(async()=>function(l,c,f,m,p){const y=new qm({next:b=>{y.xu(),c.enqueueAndForget(()=>Sv(l,T)),b.fromCache&&m.source==="server"?p.reject(new Z(j.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):p.resolve(b)},error:b=>p.reject(b)}),T=new Cv(f,y,{includeMetadataChanges:!0,Qa:!0});return Av(l,T)}(await $l(i),i.asyncQueue,e,t,n)),n.promise}function zL(i,e){const t=new qm(e);return i.asyncQueue.enqueueAndForget(async()=>function(a,l){le(a).Ca.add(l),l.next()}(await $l(i),t)),()=>{t.xu(),i.asyncQueue.enqueueAndForget(async()=>function(a,l){le(a).Ca.delete(l)}(await $l(i),t))}}function FL(i,e,t,n){const a=function(c,f){let m;return m=typeof c=="string"?Gy().encode(c):c,function(y,T){return new NL(y,T)}(function(y,T){if(y instanceof Uint8Array)return mI(y,T);if(y instanceof ArrayBuffer)return mI(new Uint8Array(y),T);if(y instanceof ReadableStream)return y.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(m),f)}(t,zh(e));i.asyncQueue.enqueueAndForget(async()=>{CL(await Mv(i),a,n)})}function qL(i,e){return i.asyncQueue.enqueue(async()=>function(n,a){const l=le(n);return l.persistence.runTransaction("Get named query","readonly",c=>l.Ei.getNamedQuery(c,a))}(await kv(i),e))}/**
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
 */function _1(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
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
 */const pI=new Map;/**
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
 */function Lv(i,e,t){if(!t)throw new Z(j.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function y1(i,e,t,n){if(e===!0&&n===!0)throw new Z(j.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function _I(i){if(!se.isDocumentKey(i))throw new Z(j.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function yI(i){if(se.isDocumentKey(i))throw new Z(j.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function Hm(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":ce(12329,{type:typeof i})}function je(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new Z(j.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Hm(i);throw new Z(j.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}function v1(i,e){if(e<=0)throw new Z(j.INVALID_ARGUMENT,`Function ${i}() requires a positive number, but it was: ${e}.`)}/**
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
 */const E1="firestore.googleapis.com",vI=!0;class EI{constructor(e){var t,n;if(e.host===void 0){if(e.ssl!==void 0)throw new Z(j.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=E1,this.ssl=vI}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:vI;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=DR;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<uM)throw new Z(j.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}y1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=_1((n=e.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new Z(j.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new Z(j.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new Z(j.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(n,a){return n.timeoutSeconds===a.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class qh{constructor(e,t,n,a){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new EI({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Z(j.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Z(j.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new EI(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new S2;switch(n.type){case"firstParty":return new P2(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new Z(j.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=pI.get(t);n&&(ee("ComponentProvider","Removing Datastore"),pI.delete(t),n.terminate())}(this),Promise.resolve()}}function jL(i,e,t,n={}){var a;i=je(i,qh);const l=Jl(e),c=i._getSettings(),f=Object.assign(Object.assign({},c),{emulatorOptions:i._getEmulatorOptions()}),m=`${e}:${t}`;l&&(zI(`https://${m}`),FI("Firestore",!0)),c.host!==E1&&c.host!==m&&Ji("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const p=Object.assign(Object.assign({},c),{host:m,ssl:l,emulatorOptions:n});if(!Ns(p,f)&&(i._setSettings(p),n.mockUserToken)){let y,T;if(typeof n.mockUserToken=="string")y=n.mockUserToken,T=Jt.MOCK_USER;else{y=jD(n.mockUserToken,(a=i._app)===null||a===void 0?void 0:a.options.projectId);const b=n.mockUserToken.sub||n.mockUserToken.user_id;if(!b)throw new Z(j.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");T=new Jt(b)}i._authCredentials=new R2(new dS(y,T))}}/**
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
 */let Sn=class T1{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new T1(this.firestore,e,this._query)}},pt=class w1{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ps(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new w1(this.firestore,e,this._key)}},Ps=class b1 extends Sn{constructor(e,t,n){super(e,t,ru(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new pt(this.firestore,null,new se(e))}withConverter(e){return new b1(this.firestore,e,this._path)}};function I1(i,e,...t){if(i=Ee(i),Lv("collection","path",e),i instanceof qh){const n=Me.fromString(e,...t);return yI(n),new Ps(i,null,n)}{if(!(i instanceof pt||i instanceof Ps))throw new Z(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=i._path.child(Me.fromString(e,...t));return yI(n),new Ps(i.firestore,null,n)}}function HL(i,e){if(i=je(i,qh),Lv("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new Z(j.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Sn(i,null,function(n){return new Lr(Me.emptyPath(),n)}(e))}function dm(i,e,...t){if(i=Ee(i),arguments.length===1&&(e=fS.newId()),Lv("doc","path",e),i instanceof qh){const n=Me.fromString(e,...t);return _I(n),new pt(i,null,new se(n))}{if(!(i instanceof pt||i instanceof Ps))throw new Z(j.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=i._path.child(Me.fromString(e,...t));return _I(n),new pt(i.firestore,i instanceof Ps?i.converter:null,new se(n))}}function A1(i,e){return i=Ee(i),e=Ee(e),(i instanceof pt||i instanceof Ps)&&(e instanceof pt||e instanceof Ps)&&i.firestore===e.firestore&&i.path===e.path&&i.converter===e.converter}function S1(i,e){return i=Ee(i),e=Ee(e),i instanceof Sn&&e instanceof Sn&&i.firestore===e.firestore&&kh(i._query,e._query)&&i.converter===e.converter}/**
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
 */const TI="AsyncQueue";class wI{constructor(e=Promise.resolve()){this.Ju=[],this.Yu=!1,this.Zu=[],this.Xu=null,this.ec=!1,this.tc=!1,this.nc=[],this.x_=new Ev(this,"async_queue_retry"),this.rc=()=>{const n=Ff();n&&ee(TI,"Visibility state changed to "+n.visibilityState),this.x_.b_()},this.sc=e;const t=Ff();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.rc)}get isShuttingDown(){return this.Yu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.oc(),this._c(e)}enterRestrictedMode(e){if(!this.Yu){this.Yu=!0,this.tc=e||!1;const t=Ff();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.rc)}}enqueue(e){if(this.oc(),this.Yu)return new Promise(()=>{});const t=new un;return this._c(()=>this.Yu&&this.tc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ju.push(e),this.ac()))}async ac(){if(this.Ju.length!==0){try{await this.Ju[0](),this.Ju.shift(),this.x_.reset()}catch(e){if(!Ys(e))throw e;ee(TI,"Operation failed with retryable error: "+e)}this.Ju.length>0&&this.x_.y_(()=>this.ac())}}_c(e){const t=this.sc.then(()=>(this.ec=!0,e().catch(n=>{throw this.Xu=n,this.ec=!1,Dt("INTERNAL UNHANDLED ERROR: ",bI(n)),n}).then(n=>(this.ec=!1,n))));return this.sc=t,t}enqueueAfterDelay(e,t,n){this.oc(),this.nc.indexOf(e)>-1&&(t=0);const a=Iv.createAndSchedule(this,e,t,n,l=>this.uc(l));return this.Zu.push(a),a}oc(){this.Xu&&ce(47125,{cc:bI(this.Xu)})}verifyOperationInProgress(){}async lc(){let e;do e=this.sc,await e;while(e!==this.sc)}hc(e){for(const t of this.Zu)if(t.timerId===e)return!0;return!1}Pc(e){return this.lc().then(()=>{this.Zu.sort((t,n)=>t.targetTimeMs-n.targetTimeMs);for(const t of this.Zu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.lc()})}Tc(e){this.nc.push(e)}uc(e){const t=this.Zu.indexOf(e);this.Zu.splice(t,1)}}function bI(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),e}/**
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
 */function cy(i){return function(t,n){if(typeof t!="object"||t===null)return!1;const a=t;for(const l of n)if(l in a&&typeof a[l]=="function")return!0;return!1}(i,["next","error","complete"])}class GL{constructor(){this._progressObserver={},this._taskCompletionResolver=new un,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const KL=-1;let Nt=class extends qh{constructor(e,t,n,a){super(e,t,n,a),this.type="firestore",this._queue=new wI,this._persistenceKey=(a==null?void 0:a.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new wI(e),this._firestoreClient=void 0,await e}}};function _n(i){if(i._terminated)throw new Z(j.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||R1(i),i._firestoreClient}function R1(i){var e,t,n;const a=i._freezeSettings(),l=function(f,m,p,y){return new fk(f,m,p,y.host,y.ssl,y.experimentalForceLongPolling,y.experimentalAutoDetectLongPolling,_1(y.experimentalLongPollingOptions),y.useFetchStreams,y.isUsingEmulator)}(i._databaseId,((e=i._app)===null||e===void 0?void 0:e.options.appId)||"",i._persistenceKey,a);i._componentsProvider||!((t=a.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((n=a.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(i._componentsProvider={_offline:a.localCache._offlineComponentProvider,_online:a.localCache._onlineComponentProvider}),i._firestoreClient=new xL(i._authCredentials,i._appCheckCredentials,i._queue,l,i._componentsProvider&&function(f){const m=f==null?void 0:f._online.build();return{_offline:f==null?void 0:f._offline.build(m),_online:m}}(i._componentsProvider))}function QL(i,e){Ji("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=i._freezeSettings();return C1(i,vh.provider,{build:n=>new d1(n,t.cacheSizeBytes,e==null?void 0:e.forceOwnership)}),Promise.resolve()}async function YL(i){Ji("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=i._freezeSettings();C1(i,vh.provider,{build:t=>new PL(t,e.cacheSizeBytes)})}function C1(i,e,t){if((i=je(i,Nt))._firestoreClient||i._terminated)throw new Z(j.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(i._componentsProvider||i._getSettings().localCache)throw new Z(j.FAILED_PRECONDITION,"SDK cache is already specified.");i._componentsProvider={_online:e,_offline:t},R1(i)}function WL(i){if(i._initialized&&!i._terminated)throw new Z(j.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new un;return i._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(n){if(!Yi.C())return Promise.resolve();const a=n+UR;await Yi.delete(a)}(pv(i._databaseId,i._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function $L(i){return function(t){const n=new un;return t.asyncQueue.enqueueAndForget(async()=>_L(await Mv(t),n)),n.promise}(_n(i=je(i,Nt)))}function XL(i){return ML(_n(i=je(i,Nt)))}function JL(i){return LL(_n(i=je(i,Nt)))}function ZL(i,e){const t=_n(i=je(i,Nt)),n=new GL;return FL(t,i._databaseId,e,n),n}function e4(i,e){return qL(_n(i=je(i,Nt)),e).then(t=>t?new Sn(i,null,t.query):null)}/**
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
 */class er{constructor(e){this._byteString=e}static fromBase64String(e){try{return new er(bt.fromBase64String(e))}catch(t){throw new Z(j.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new er(bt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */let qs=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new Z(j.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new dt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
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
 */let fo=class{constructor(e){this._methodName=e}};/**
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
 */class Gm{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Z(j.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Z(j.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ie(this._lat,e._lat)||Ie(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class Uv{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(n,a){if(n.length!==a.length)return!1;for(let l=0;l<n.length;++l)if(n[l]!==a[l])return!1;return!0}(this._values,e._values)}}/**
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
 */const t4=/^__.*__$/;class n4{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new Br(e,this.data,this.fieldMask,t,this.fieldTransforms):new su(e,this.data,t,this.fieldTransforms)}}class D1{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new Br(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function P1(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ce(40011,{Ic:i})}}class Km{constructor(e,t,n,a,l,c){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=a,l===void 0&&this.Ec(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Ic(){return this.settings.Ic}dc(e){return new Km(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ac(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.dc({path:n,Rc:!1});return a.Vc(e),a}mc(e){var t;const n=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.dc({path:n,Rc:!1});return a.Ec(),a}fc(e){return this.dc({path:void 0,Rc:!0})}gc(e){return fm(e,this.settings.methodName,this.settings.yc||!1,this.path,this.settings.wc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ec(){if(this.path)for(let e=0;e<this.path.length;e++)this.Vc(this.path.get(e))}Vc(e){if(e.length===0)throw this.gc("Document fields must not be empty");if(P1(this.Ic)&&t4.test(e))throw this.gc('Document fields cannot begin and end with "__"')}}class i4{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||zh(e)}bc(e,t,n,a=!1){return new Km({Ic:e,methodName:t,wc:n,path:dt.emptyPath(),Rc:!1,yc:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function mo(i){const e=i._freezeSettings(),t=zh(i._databaseId);return new i4(i._databaseId,!!e.ignoreUndefinedProperties,t)}function Qm(i,e,t,n,a,l={}){const c=i.bc(l.merge||l.mergeFields?2:0,e,t,a);Gv("Data must be an object, but it was:",c,n);const f=V1(n,c);let m,p;if(l.merge)m=new Vn(c.fieldMask),p=c.fieldTransforms;else if(l.mergeFields){const y=[];for(const T of l.mergeFields){const b=hy(e,T,t);if(!c.contains(b))throw new Z(j.INVALID_ARGUMENT,`Field '${b}' is specified in your field mask but missing from your input data.`);k1(y,b)||y.push(b)}m=new Vn(y),p=c.fieldTransforms.filter(T=>m.covers(T.field))}else m=null,p=c.fieldTransforms;return new n4(new ln(f),m,p)}class jh extends fo{_toFieldTransform(e){if(e.Ic!==2)throw e.Ic===1?e.gc(`${this._methodName}() can only appear at the top level of your update data`):e.gc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof jh}}function N1(i,e,t){return new Km({Ic:3,wc:e.settings.wc,methodName:i._methodName,Rc:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Bv extends fo{_toFieldTransform(e){return new Lh(e.path,new ql)}isEqual(e){return e instanceof Bv}}class zv extends fo{constructor(e,t){super(e),this.Sc=t}_toFieldTransform(e){const t=N1(this,e,!0),n=this.Sc.map(l=>go(l,t)),a=new io(n);return new Lh(e.path,a)}isEqual(e){return e instanceof zv&&Ns(this.Sc,e.Sc)}}class Fv extends fo{constructor(e,t){super(e),this.Sc=t}_toFieldTransform(e){const t=N1(this,e,!0),n=this.Sc.map(l=>go(l,t)),a=new ro(n);return new Lh(e.path,a)}isEqual(e){return e instanceof Fv&&Ns(this.Sc,e.Sc)}}class qv extends fo{constructor(e,t){super(e),this.Dc=t}_toFieldTransform(e){const t=new jl(e.serializer,nR(e.serializer,this.Dc));return new Lh(e.path,t)}isEqual(e){return e instanceof qv&&this.Dc===e.Dc}}function jv(i,e,t,n){const a=i.bc(1,e,t);Gv("Data must be an object, but it was:",a,n);const l=[],c=ln.empty();Ws(n,(m,p)=>{const y=Kv(e,m,t);p=Ee(p);const T=a.mc(y);if(p instanceof jh)l.push(y);else{const b=go(p,T);b!=null&&(l.push(y),c.set(y,b))}});const f=new Vn(l);return new D1(c,f,a.fieldTransforms)}function Hv(i,e,t,n,a,l){const c=i.bc(1,e,t),f=[hy(e,n,t)],m=[a];if(l.length%2!=0)throw new Z(j.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let b=0;b<l.length;b+=2)f.push(hy(e,l[b])),m.push(l[b+1]);const p=[],y=ln.empty();for(let b=f.length-1;b>=0;--b)if(!k1(p,f[b])){const O=f[b];let G=m[b];G=Ee(G);const $=c.mc(O);if(G instanceof jh)p.push(O);else{const Y=go(G,$);Y!=null&&(p.push(O),y.set(O,Y))}}const T=new Vn(p);return new D1(y,T,c.fieldTransforms)}function O1(i,e,t,n=!1){return go(t,i.bc(n?4:3,e))}function go(i,e){if(x1(i=Ee(i)))return Gv("Unsupported field value:",e,i),V1(i,e);if(i instanceof fo)return function(n,a){if(!P1(a.Ic))throw a.gc(`${n._methodName}() can only be used with update() and set()`);if(!a.path)throw a.gc(`${n._methodName}() is not currently supported inside arrays`);const l=n._toFieldTransform(a);l&&a.fieldTransforms.push(l)}(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.Rc&&e.Ic!==4)throw e.gc("Nested arrays are not supported");return function(n,a){const l=[];let c=0;for(const f of n){let m=go(f,a.fc(c));m==null&&(m={nullValue:"NULL_VALUE"}),l.push(m),c++}return{arrayValue:{values:l}}}(i,e)}return function(n,a){if((n=Ee(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return nR(a.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const l=mt.fromDate(n);return{timestampValue:Hl(a.serializer,l)}}if(n instanceof mt){const l=new mt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Hl(a.serializer,l)}}if(n instanceof Gm)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof er)return{bytesValue:fR(a.serializer,n._byteString)};if(n instanceof pt){const l=a.databaseId,c=n.firestore._databaseId;if(!c.isEqual(l))throw a.gc(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:uv(n.firestore._databaseId||a.databaseId,n._key.path)}}if(n instanceof Uv)return function(c,f){return{mapValue:{fields:{[Jy]:{stringValue:Zy},[Bl]:{arrayValue:{values:c.toArray().map(p=>{if(typeof p!="number")throw f.gc("VectorValues must only contain numeric values.");return iv(f.serializer,p)})}}}}}}(n,a);throw a.gc(`Unsupported field value: ${Hm(n)}`)}(i,e)}function V1(i,e){const t={};return NS(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ws(i,(n,a)=>{const l=go(a,e.Ac(n));l!=null&&(t[n]=l)}),{mapValue:{fields:t}}}function x1(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof mt||i instanceof Gm||i instanceof er||i instanceof pt||i instanceof fo||i instanceof Uv)}function Gv(i,e,t){if(!x1(t)||!function(a){return typeof a=="object"&&a!==null&&(Object.getPrototypeOf(a)===Object.prototype||Object.getPrototypeOf(a)===null)}(t)){const n=Hm(t);throw n==="an object"?e.gc(i+" a custom object"):e.gc(i+" "+n)}}function hy(i,e,t){if((e=Ee(e))instanceof qs)return e._internalPath;if(typeof e=="string")return Kv(i,e);throw fm("Field path arguments must be of type string or ",i,!1,void 0,t)}const r4=new RegExp("[~\\*/\\[\\]]");function Kv(i,e,t){if(e.search(r4)>=0)throw fm(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new qs(...e.split("."))._internalPath}catch{throw fm(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function fm(i,e,t,n,a){const l=n&&!n.isEmpty(),c=a!==void 0;let f=`Function ${e}() called with invalid data`;t&&(f+=" (via `toFirestore()`)"),f+=". ";let m="";return(l||c)&&(m+=" (found",l&&(m+=` in field ${n}`),c&&(m+=` in document ${a}`),m+=")"),new Z(j.INVALID_ARGUMENT,f+i+m)}function k1(i,e){return i.some(t=>t.isEqual(e))}/**
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
 */class Eh{constructor(e,t,n,a,l){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=a,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new pt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new s4(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Ym("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class s4 extends Eh{data(){return super.data()}}function Ym(i,e){return typeof e=="string"?Kv(i,e):e instanceof qs?e._internalPath:e._delegate._internalPath}/**
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
 */function M1(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new Z(j.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Qv{}class Hh extends Qv{}function Es(i,e,...t){let n=[];e instanceof Qv&&n.push(e),n=n.concat(t),function(l){const c=l.filter(m=>m instanceof Yv).length,f=l.filter(m=>m instanceof Wm).length;if(c>1||c>0&&f>0)throw new Z(j.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const a of n)i=a._apply(i);return i}class Wm extends Hh{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new Wm(e,t,n)}_apply(e){const t=this._parse(e);return U1(e._query,t),new Sn(e.firestore,e.converter,X_(e._query,t))}_parse(e){const t=mo(e.firestore);return function(l,c,f,m,p,y,T){let b;if(p.isKeyField()){if(y==="array-contains"||y==="array-contains-any")throw new Z(j.INVALID_ARGUMENT,`Invalid Query. You can't perform '${y}' queries on documentId().`);if(y==="in"||y==="not-in"){AI(T,y);const G=[];for(const $ of T)G.push(II(m,l,$));b={arrayValue:{values:G}}}else b=II(m,l,T)}else y!=="in"&&y!=="not-in"&&y!=="array-contains-any"||AI(T,y),b=O1(f,c,T,y==="in"||y==="not-in");return Le.create(p,y,b)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function a4(i,e,t){const n=e,a=Ym("where",i);return Wm._create(a,n,t)}class Yv extends Qv{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Yv(e,t)}_parse(e){const t=this._queryConstraints.map(n=>n._parse(e)).filter(n=>n.getFilters().length>0);return t.length===1?t[0]:Xe.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(a,l){let c=a;const f=l.getFlattenedFilters();for(const m of f)U1(c,m),c=X_(c,m)}(e._query,t),new Sn(e.firestore,e.converter,X_(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Wv extends Hh{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Wv(e,t)}_apply(e){const t=function(a,l,c){if(a.startAt!==null)throw new Z(j.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(a.endAt!==null)throw new Z(j.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new gh(l,c)}(e._query,this._field,this._direction);return new Sn(e.firestore,e.converter,function(a,l){const c=a.explicitOrderBy.concat([l]);return new Lr(a.path,a.collectionGroup,c,a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt)}(e._query,t))}}function o4(i,e="asc"){const t=e,n=Ym("orderBy",i);return Wv._create(n,t)}class $m extends Hh{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new $m(e,t,n)}_apply(e){return new Sn(e.firestore,e.converter,im(e._query,this._limit,this._limitType))}}function l4(i){return v1("limit",i),$m._create("limit",i,"F")}function u4(i){return v1("limitToLast",i),$m._create("limitToLast",i,"L")}class Xm extends Hh{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new Xm(e,t,n)}_apply(e){const t=L1(e,this.type,this._docOrFields,this._inclusive);return new Sn(e.firestore,e.converter,function(a,l){return new Lr(a.path,a.collectionGroup,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,l,a.endAt)}(e._query,t))}}function c4(...i){return Xm._create("startAt",i,!0)}function h4(...i){return Xm._create("startAfter",i,!1)}class Jm extends Hh{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new Jm(e,t,n)}_apply(e){const t=L1(e,this.type,this._docOrFields,this._inclusive);return new Sn(e.firestore,e.converter,function(a,l){return new Lr(a.path,a.collectionGroup,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,a.startAt,l)}(e._query,t))}}function d4(...i){return Jm._create("endBefore",i,!1)}function f4(...i){return Jm._create("endAt",i,!0)}function L1(i,e,t,n){if(t[0]=Ee(t[0]),t[0]instanceof Eh)return function(l,c,f,m,p){if(!m)throw new Z(j.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${f}().`);const y=[];for(const T of Rl(l))if(T.field.isKeyField())y.push(to(c,m.key));else{const b=m.data.field(T.field);if(Om(b))throw new Z(j.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+T.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(b===null){const O=T.field.canonicalString();throw new Z(j.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${O}' (used as the orderBy) does not exist.`)}y.push(b)}return new Bs(y,p)}(i._query,i.firestore._databaseId,e,t[0]._document,n);{const a=mo(i.firestore);return function(c,f,m,p,y,T){const b=c.explicitOrderBy;if(y.length>b.length)throw new Z(j.INVALID_ARGUMENT,`Too many arguments provided to ${p}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const O=[];for(let G=0;G<y.length;G++){const $=y[G];if(b[G].field.isKeyField()){if(typeof $!="string")throw new Z(j.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${p}(), but got a ${typeof $}`);if(!tv(c)&&$.indexOf("/")!==-1)throw new Z(j.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${p}() must be a plain document ID, but '${$}' contains a slash.`);const Y=c.path.child(Me.fromString($));if(!se.isDocumentKey(Y))throw new Z(j.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${p}() must result in a valid document path, but '${Y}' is not because it contains an odd number of segments.`);const fe=new se(Y);O.push(to(f,fe))}else{const Y=O1(m,p,$);O.push(Y)}}return new Bs(O,T)}(i._query,i.firestore._databaseId,a,e,t,n)}}function II(i,e,t){if(typeof(t=Ee(t))=="string"){if(t==="")throw new Z(j.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!tv(e)&&t.indexOf("/")!==-1)throw new Z(j.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const n=e.path.child(Me.fromString(t));if(!se.isDocumentKey(n))throw new Z(j.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return to(i,new se(n))}if(t instanceof pt)return to(i,t._key);throw new Z(j.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Hm(t)}.`)}function AI(i,e){if(!Array.isArray(i)||i.length===0)throw new Z(j.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function U1(i,e){const t=function(a,l){for(const c of a)for(const f of c.getFlattenedFilters())if(l.indexOf(f.op)>=0)return f.op;return null}(i.filters,function(a){switch(a){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new Z(j.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Z(j.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class $v{convertValue(e,t="none"){switch(Ls(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ct(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Vr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ce(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return Ws(e,(a,l)=>{n[a]=this.convertValue(l,t)}),n}convertVectorValue(e){var t,n,a;const l=(a=(n=(t=e.fields)===null||t===void 0?void 0:t[Bl].arrayValue)===null||n===void 0?void 0:n.values)===null||a===void 0?void 0:a.map(c=>ct(c.doubleValue));return new Uv(l)}convertGeoPoint(e){return new Gm(ct(e.latitude),ct(e.longitude))}convertArray(e,t){return(e.values||[]).map(n=>this.convertValue(n,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Vm(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(dh(e));default:return null}}convertTimestamp(e){const t=Or(e);return new mt(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Me.fromString(e);de(IR(n),9688,{name:e});const a=new Ms(n.get(1),n.get(3)),l=new se(n.popFirst(5));return a.isEqual(t)||Dt(`Document ${l} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
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
 */function Zm(i,e,t){let n;return n=i?t&&(t.merge||t.mergeFields)?i.toFirestore(e,t):i.toFirestore(e):e,n}class m4 extends $v{constructor(e){super(),this.firestore=e}convertBytes(e){return new er(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new pt(this.firestore,null,t)}}/**
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
 */class Qa{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let xr=class extends Eh{constructor(e,t,n,a,l,c){super(e,t,n,a,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Zc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Ym("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}},Zc=class extends xr{data(e={}){return super.data(e)}},js=class{constructor(e,t,n,a){this._firestore=e,this._userDataWriter=t,this._snapshot=a,this.metadata=new Qa(a.hasPendingWrites,a.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new Zc(this._firestore,this._userDataWriter,n.key,n,new Qa(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Z(j.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(a,l){if(a._snapshot.oldDocs.isEmpty()){let c=0;return a._snapshot.docChanges.map(f=>{const m=new Zc(a._firestore,a._userDataWriter,f.doc.key,f.doc,new Qa(a._snapshot.mutatedKeys.has(f.doc.key),a._snapshot.fromCache),a.query.converter);return f.doc,{type:"added",doc:m,oldIndex:-1,newIndex:c++}})}{let c=a._snapshot.oldDocs;return a._snapshot.docChanges.filter(f=>l||f.type!==3).map(f=>{const m=new Zc(a._firestore,a._userDataWriter,f.doc.key,f.doc,new Qa(a._snapshot.mutatedKeys.has(f.doc.key),a._snapshot.fromCache),a.query.converter);let p=-1,y=-1;return f.type!==0&&(p=c.indexOf(f.doc.key),c=c.delete(f.doc.key)),f.type!==1&&(c=c.add(f.doc),y=c.indexOf(f.doc.key)),{type:g4(f.type),doc:m,oldIndex:p,newIndex:y}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}};function g4(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ce(61501,{type:i})}}function B1(i,e){return i instanceof xr&&e instanceof xr?i._firestore===e._firestore&&i._key.isEqual(e._key)&&(i._document===null?e._document===null:i._document.isEqual(e._document))&&i._converter===e._converter:i instanceof js&&e instanceof js&&i._firestore===e._firestore&&S1(i.query,e.query)&&i.metadata.isEqual(e.metadata)&&i._snapshot.isEqual(e._snapshot)}/**
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
 */function p4(i){i=je(i,pt);const e=je(i.firestore,Nt);return g1(_n(e),i._key).then(t=>Xv(e,i,t))}class po extends $v{constructor(e){super(),this.firestore=e}convertBytes(e){return new er(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new pt(this.firestore,null,t)}}function _4(i){i=je(i,pt);const e=je(i.firestore,Nt),t=_n(e),n=new po(e);return UL(t,i._key).then(a=>new xr(e,n,i._key,a,new Qa(a!==null&&a.hasLocalMutations,!0),i.converter))}function y4(i){i=je(i,pt);const e=je(i.firestore,Nt);return g1(_n(e),i._key,{source:"server"}).then(t=>Xv(e,i,t))}function v4(i){i=je(i,Sn);const e=je(i.firestore,Nt),t=_n(e),n=new po(e);return M1(i._query),p1(t,i._query).then(a=>new js(e,n,i,a))}function E4(i){i=je(i,Sn);const e=je(i.firestore,Nt),t=_n(e),n=new po(e);return BL(t,i._query).then(a=>new js(e,n,i,a))}function T4(i){i=je(i,Sn);const e=je(i.firestore,Nt),t=_n(e),n=new po(e);return p1(t,i._query,{source:"server"}).then(a=>new js(e,n,i,a))}function SI(i,e,t){i=je(i,pt);const n=je(i.firestore,Nt),a=Zm(i.converter,e,t);return Gh(n,[Qm(mo(n),"setDoc",i._key,a,i.converter!==null,t).toMutation(i._key,ft.none())])}function RI(i,e,t,...n){i=je(i,pt);const a=je(i.firestore,Nt),l=mo(a);let c;return c=typeof(e=Ee(e))=="string"||e instanceof qs?Hv(l,"updateDoc",i._key,e,t,n):jv(l,"updateDoc",i._key,e),Gh(a,[c.toMutation(i._key,ft.exists(!0))])}function w4(i){return Gh(je(i.firestore,Nt),[new au(i._key,ft.none())])}function b4(i,e){const t=je(i.firestore,Nt),n=dm(i),a=Zm(i.converter,e);return Gh(t,[Qm(mo(i.firestore),"addDoc",n._key,a,i.converter!==null,{}).toMutation(n._key,ft.exists(!1))]).then(()=>n)}function z1(i,...e){var t,n,a;i=Ee(i);let l={includeMetadataChanges:!1,source:"default"},c=0;typeof e[c]!="object"||cy(e[c])||(l=e[c],c++);const f={includeMetadataChanges:l.includeMetadataChanges,source:l.source};if(cy(e[c])){const T=e[c];e[c]=(t=T.next)===null||t===void 0?void 0:t.bind(T),e[c+1]=(n=T.error)===null||n===void 0?void 0:n.bind(T),e[c+2]=(a=T.complete)===null||a===void 0?void 0:a.bind(T)}let m,p,y;if(i instanceof pt)p=je(i.firestore,Nt),y=ru(i._key.path),m={next:T=>{e[c]&&e[c](Xv(p,i,T))},error:e[c+1],complete:e[c+2]};else{const T=je(i,Sn);p=je(T.firestore,Nt),y=T._query;const b=new po(p);m={next:O=>{e[c]&&e[c](new js(p,b,T,O))},error:e[c+1],complete:e[c+2]},M1(i._query)}return function(b,O,G,$){const Y=new qm($),fe=new Cv(O,Y,G);return b.asyncQueue.enqueueAndForget(async()=>Av(await $l(b),fe)),()=>{Y.xu(),b.asyncQueue.enqueueAndForget(async()=>Sv(await $l(b),fe))}}(_n(p),y,f,m)}function I4(i,e){return zL(_n(i=je(i,Nt)),cy(e)?e:{next:e})}function Gh(i,e){return function(n,a){const l=new un;return n.asyncQueue.enqueueAndForget(async()=>fL(await Mv(n),a,l)),l.promise}(_n(i),e)}function Xv(i,e,t){const n=t.docs.get(e._key),a=new po(i);return new xr(i,a,e._key,n,new Qa(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */const A4={maxAttempts:5};/**
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
 */let S4=class{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=mo(e)}set(e,t,n){this._verifyNotCommitted();const a=As(e,this._firestore),l=Zm(a.converter,t,n),c=Qm(this._dataReader,"WriteBatch.set",a._key,l,a.converter!==null,n);return this._mutations.push(c.toMutation(a._key,ft.none())),this}update(e,t,n,...a){this._verifyNotCommitted();const l=As(e,this._firestore);let c;return c=typeof(t=Ee(t))=="string"||t instanceof qs?Hv(this._dataReader,"WriteBatch.update",l._key,t,n,a):jv(this._dataReader,"WriteBatch.update",l._key,t),this._mutations.push(c.toMutation(l._key,ft.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=As(e,this._firestore);return this._mutations=this._mutations.concat(new au(t._key,ft.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new Z(j.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function As(i,e){if((i=Ee(i)).firestore!==e)throw new Z(j.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return i}/**
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
 */class R4{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=mo(e)}get(e){const t=As(e,this._firestore),n=new m4(this._firestore);return this._transaction.lookup([t._key]).then(a=>{if(!a||a.length!==1)return ce(24041);const l=a[0];if(l.isFoundDocument())return new Eh(this._firestore,n,l.key,l,t.converter);if(l.isNoDocument())return new Eh(this._firestore,n,t._key,null,t.converter);throw ce(18433,{doc:l})})}set(e,t,n){const a=As(e,this._firestore),l=Zm(a.converter,t,n),c=Qm(this._dataReader,"Transaction.set",a._key,l,a.converter!==null,n);return this._transaction.set(a._key,c),this}update(e,t,n,...a){const l=As(e,this._firestore);let c;return c=typeof(t=Ee(t))=="string"||t instanceof qs?Hv(this._dataReader,"Transaction.update",l._key,t,n,a):jv(this._dataReader,"Transaction.update",l._key,t),this._transaction.update(l._key,c),this}delete(e){const t=As(e,this._firestore);return this._transaction.delete(t._key),this}}/**
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
 */let C4=class extends R4{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=As(e,this._firestore),n=new po(this._firestore);return super.get(e).then(a=>new xr(this._firestore,n,t._key,a._document,new Qa(!1,!1),t.converter))}};function D4(i,e,t){i=je(i,Nt);const n=Object.assign(Object.assign({},A4),t);return function(l){if(l.maxAttempts<1)throw new Z(j.INVALID_ARGUMENT,"Max attempts must be at least 1")}(n),function(l,c,f){const m=new un;return l.asyncQueue.enqueueAndForget(async()=>{const p=await kL(l);new VL(l.asyncQueue,p,f,c,m).Wu()}),m.promise}(_n(i),a=>e(new C4(i,a)),n)}/**
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
 */function P4(){return new jh("deleteField")}function N4(){return new Bv("serverTimestamp")}function O4(...i){return new zv("arrayUnion",i)}function V4(...i){return new Fv("arrayRemove",i)}function x4(i){return new qv("increment",i)}(function(e,t=!0){(function(a){iu=a})(Gs),xs(new $i("firestore",(n,{instanceIdentifier:a,options:l})=>{const c=n.getProvider("app").getImmediate(),f=new Nt(new C2(n.getProvider("auth-internal")),new N2(c,n.getProvider("app-check-internal")),function(p,y){if(!Object.prototype.hasOwnProperty.apply(p.options,["projectId"]))throw new Z(j.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ms(p.options.projectId,y)}(c,a),c);return l=Object.assign({useFetchStreams:t},l),f._setSettings(l),f},"PUBLIC").setMultipleInstances(!0)),vi(nb,ib,e),vi(nb,ib,"esm2017")})();const k4=({onClick:i,children:e})=>De.jsx("button",{onClick:i,children:e}),F1=6048e5,M4=864e5,CI=Symbol.for("constructDateFrom");function Hs(i,e){return typeof i=="function"?i(e):i&&typeof i=="object"&&CI in i?i[CI](e):i instanceof Date?new i.constructor(e):new Date(e)}function Ti(i,e){return Hs(e||i,i)}let L4={};function Kh(){return L4}function Th(i,e){var f,m,p,y;const t=Kh(),n=(e==null?void 0:e.weekStartsOn)??((m=(f=e==null?void 0:e.locale)==null?void 0:f.options)==null?void 0:m.weekStartsOn)??t.weekStartsOn??((y=(p=t.locale)==null?void 0:p.options)==null?void 0:y.weekStartsOn)??0,a=Ti(i,e==null?void 0:e.in),l=a.getDay(),c=(l<n?7:0)+l-n;return a.setDate(a.getDate()-c),a.setHours(0,0,0,0),a}function mm(i,e){return Th(i,{...e,weekStartsOn:1})}function q1(i,e){const t=Ti(i,e==null?void 0:e.in),n=t.getFullYear(),a=Hs(t,0);a.setFullYear(n+1,0,4),a.setHours(0,0,0,0);const l=mm(a),c=Hs(t,0);c.setFullYear(n,0,4),c.setHours(0,0,0,0);const f=mm(c);return t.getTime()>=l.getTime()?n+1:t.getTime()>=f.getTime()?n:n-1}function DI(i){const e=Ti(i),t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),+i-+t}function j1(i,...e){const t=Hs.bind(null,e.find(n=>typeof n=="object"));return e.map(t)}function PI(i,e){const t=Ti(i,e==null?void 0:e.in);return t.setHours(0,0,0,0),t}function H1(i,e,t){const[n,a]=j1(t==null?void 0:t.in,i,e),l=PI(n),c=PI(a),f=+l-DI(l),m=+c-DI(c);return Math.round((f-m)/M4)}function U4(i,e){const t=q1(i,e),n=Hs(i,0);return n.setFullYear(t,0,4),n.setHours(0,0,0,0),mm(n)}function B4(i){return i instanceof Date||typeof i=="object"&&Object.prototype.toString.call(i)==="[object Date]"}function z4(i){return!(!B4(i)&&typeof i!="number"||isNaN(+Ti(i)))}function F4(i,e){const t=Ti(i,e==null?void 0:e.in);return t.setFullYear(t.getFullYear(),0,1),t.setHours(0,0,0,0),t}const q4={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},j4=(i,e,t)=>{let n;const a=q4[i];return typeof a=="string"?n=a:e===1?n=a.one:n=a.other.replace("{{count}}",e.toString()),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"in "+n:n+" ago":n};function S_(i){return(e={})=>{const t=e.width?String(e.width):i.defaultWidth;return i.formats[t]||i.formats[i.defaultWidth]}}const H4={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},G4={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},K4={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},Q4={date:S_({formats:H4,defaultWidth:"full"}),time:S_({formats:G4,defaultWidth:"full"}),dateTime:S_({formats:K4,defaultWidth:"full"})},Y4={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},W4=(i,e,t,n)=>Y4[i];function Pc(i){return(e,t)=>{const n=t!=null&&t.context?String(t.context):"standalone";let a;if(n==="formatting"&&i.formattingValues){const c=i.defaultFormattingWidth||i.defaultWidth,f=t!=null&&t.width?String(t.width):c;a=i.formattingValues[f]||i.formattingValues[c]}else{const c=i.defaultWidth,f=t!=null&&t.width?String(t.width):i.defaultWidth;a=i.values[f]||i.values[c]}const l=i.argumentCallback?i.argumentCallback(e):e;return a[l]}}const $4={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},X4={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},J4={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},Z4={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},eU={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},tU={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},nU=(i,e)=>{const t=Number(i),n=t%100;if(n>20||n<10)switch(n%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},iU={ordinalNumber:nU,era:Pc({values:$4,defaultWidth:"wide"}),quarter:Pc({values:X4,defaultWidth:"wide",argumentCallback:i=>i-1}),month:Pc({values:J4,defaultWidth:"wide"}),day:Pc({values:Z4,defaultWidth:"wide"}),dayPeriod:Pc({values:eU,defaultWidth:"wide",formattingValues:tU,defaultFormattingWidth:"wide"})};function Nc(i){return(e,t={})=>{const n=t.width,a=n&&i.matchPatterns[n]||i.matchPatterns[i.defaultMatchWidth],l=e.match(a);if(!l)return null;const c=l[0],f=n&&i.parsePatterns[n]||i.parsePatterns[i.defaultParseWidth],m=Array.isArray(f)?sU(f,T=>T.test(c)):rU(f,T=>T.test(c));let p;p=i.valueCallback?i.valueCallback(m):m,p=t.valueCallback?t.valueCallback(p):p;const y=e.slice(c.length);return{value:p,rest:y}}}function rU(i,e){for(const t in i)if(Object.prototype.hasOwnProperty.call(i,t)&&e(i[t]))return t}function sU(i,e){for(let t=0;t<i.length;t++)if(e(i[t]))return t}function aU(i){return(e,t={})=>{const n=e.match(i.matchPattern);if(!n)return null;const a=n[0],l=e.match(i.parsePattern);if(!l)return null;let c=i.valueCallback?i.valueCallback(l[0]):l[0];c=t.valueCallback?t.valueCallback(c):c;const f=e.slice(a.length);return{value:c,rest:f}}}const oU=/^(\d+)(th|st|nd|rd)?/i,lU=/\d+/i,uU={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},cU={any:[/^b/i,/^(a|c)/i]},hU={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},dU={any:[/1/i,/2/i,/3/i,/4/i]},fU={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},mU={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},gU={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},pU={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},_U={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},yU={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},vU={ordinalNumber:aU({matchPattern:oU,parsePattern:lU,valueCallback:i=>parseInt(i,10)}),era:Nc({matchPatterns:uU,defaultMatchWidth:"wide",parsePatterns:cU,defaultParseWidth:"any"}),quarter:Nc({matchPatterns:hU,defaultMatchWidth:"wide",parsePatterns:dU,defaultParseWidth:"any",valueCallback:i=>i+1}),month:Nc({matchPatterns:fU,defaultMatchWidth:"wide",parsePatterns:mU,defaultParseWidth:"any"}),day:Nc({matchPatterns:gU,defaultMatchWidth:"wide",parsePatterns:pU,defaultParseWidth:"any"}),dayPeriod:Nc({matchPatterns:_U,defaultMatchWidth:"any",parsePatterns:yU,defaultParseWidth:"any"})},G1={code:"en-US",formatDistance:j4,formatLong:Q4,formatRelative:W4,localize:iU,match:vU,options:{weekStartsOn:0,firstWeekContainsDate:1}};function EU(i,e){const t=Ti(i,e==null?void 0:e.in);return H1(t,F4(t))+1}function TU(i,e){const t=Ti(i,e==null?void 0:e.in),n=+mm(t)-+U4(t);return Math.round(n/F1)+1}function K1(i,e){var y,T,b,O;const t=Ti(i,e==null?void 0:e.in),n=t.getFullYear(),a=Kh(),l=(e==null?void 0:e.firstWeekContainsDate)??((T=(y=e==null?void 0:e.locale)==null?void 0:y.options)==null?void 0:T.firstWeekContainsDate)??a.firstWeekContainsDate??((O=(b=a.locale)==null?void 0:b.options)==null?void 0:O.firstWeekContainsDate)??1,c=Hs((e==null?void 0:e.in)||i,0);c.setFullYear(n+1,0,l),c.setHours(0,0,0,0);const f=Th(c,e),m=Hs((e==null?void 0:e.in)||i,0);m.setFullYear(n,0,l),m.setHours(0,0,0,0);const p=Th(m,e);return+t>=+f?n+1:+t>=+p?n:n-1}function wU(i,e){var f,m,p,y;const t=Kh(),n=(e==null?void 0:e.firstWeekContainsDate)??((m=(f=e==null?void 0:e.locale)==null?void 0:f.options)==null?void 0:m.firstWeekContainsDate)??t.firstWeekContainsDate??((y=(p=t.locale)==null?void 0:p.options)==null?void 0:y.firstWeekContainsDate)??1,a=K1(i,e),l=Hs((e==null?void 0:e.in)||i,0);return l.setFullYear(a,0,n),l.setHours(0,0,0,0),Th(l,e)}function bU(i,e){const t=Ti(i,e==null?void 0:e.in),n=+Th(t,e)-+wU(t,e);return Math.round(n/F1)+1}function $e(i,e){const t=i<0?"-":"",n=Math.abs(i).toString().padStart(e,"0");return t+n}const Ts={y(i,e){const t=i.getFullYear(),n=t>0?t:1-t;return $e(e==="yy"?n%100:n,e.length)},M(i,e){const t=i.getMonth();return e==="M"?String(t+1):$e(t+1,2)},d(i,e){return $e(i.getDate(),e.length)},a(i,e){const t=i.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.toUpperCase();case"aaa":return t;case"aaaaa":return t[0];case"aaaa":default:return t==="am"?"a.m.":"p.m."}},h(i,e){return $e(i.getHours()%12||12,e.length)},H(i,e){return $e(i.getHours(),e.length)},m(i,e){return $e(i.getMinutes(),e.length)},s(i,e){return $e(i.getSeconds(),e.length)},S(i,e){const t=e.length,n=i.getMilliseconds(),a=Math.trunc(n*Math.pow(10,t-3));return $e(a,e.length)}},pl={midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},NI={G:function(i,e,t){const n=i.getFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return t.era(n,{width:"abbreviated"});case"GGGGG":return t.era(n,{width:"narrow"});case"GGGG":default:return t.era(n,{width:"wide"})}},y:function(i,e,t){if(e==="yo"){const n=i.getFullYear(),a=n>0?n:1-n;return t.ordinalNumber(a,{unit:"year"})}return Ts.y(i,e)},Y:function(i,e,t,n){const a=K1(i,n),l=a>0?a:1-a;if(e==="YY"){const c=l%100;return $e(c,2)}return e==="Yo"?t.ordinalNumber(l,{unit:"year"}):$e(l,e.length)},R:function(i,e){const t=q1(i);return $e(t,e.length)},u:function(i,e){const t=i.getFullYear();return $e(t,e.length)},Q:function(i,e,t){const n=Math.ceil((i.getMonth()+1)/3);switch(e){case"Q":return String(n);case"QQ":return $e(n,2);case"Qo":return t.ordinalNumber(n,{unit:"quarter"});case"QQQ":return t.quarter(n,{width:"abbreviated",context:"formatting"});case"QQQQQ":return t.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return t.quarter(n,{width:"wide",context:"formatting"})}},q:function(i,e,t){const n=Math.ceil((i.getMonth()+1)/3);switch(e){case"q":return String(n);case"qq":return $e(n,2);case"qo":return t.ordinalNumber(n,{unit:"quarter"});case"qqq":return t.quarter(n,{width:"abbreviated",context:"standalone"});case"qqqqq":return t.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return t.quarter(n,{width:"wide",context:"standalone"})}},M:function(i,e,t){const n=i.getMonth();switch(e){case"M":case"MM":return Ts.M(i,e);case"Mo":return t.ordinalNumber(n+1,{unit:"month"});case"MMM":return t.month(n,{width:"abbreviated",context:"formatting"});case"MMMMM":return t.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return t.month(n,{width:"wide",context:"formatting"})}},L:function(i,e,t){const n=i.getMonth();switch(e){case"L":return String(n+1);case"LL":return $e(n+1,2);case"Lo":return t.ordinalNumber(n+1,{unit:"month"});case"LLL":return t.month(n,{width:"abbreviated",context:"standalone"});case"LLLLL":return t.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return t.month(n,{width:"wide",context:"standalone"})}},w:function(i,e,t,n){const a=bU(i,n);return e==="wo"?t.ordinalNumber(a,{unit:"week"}):$e(a,e.length)},I:function(i,e,t){const n=TU(i);return e==="Io"?t.ordinalNumber(n,{unit:"week"}):$e(n,e.length)},d:function(i,e,t){return e==="do"?t.ordinalNumber(i.getDate(),{unit:"date"}):Ts.d(i,e)},D:function(i,e,t){const n=EU(i);return e==="Do"?t.ordinalNumber(n,{unit:"dayOfYear"}):$e(n,e.length)},E:function(i,e,t){const n=i.getDay();switch(e){case"E":case"EE":case"EEE":return t.day(n,{width:"abbreviated",context:"formatting"});case"EEEEE":return t.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return t.day(n,{width:"short",context:"formatting"});case"EEEE":default:return t.day(n,{width:"wide",context:"formatting"})}},e:function(i,e,t,n){const a=i.getDay(),l=(a-n.weekStartsOn+8)%7||7;switch(e){case"e":return String(l);case"ee":return $e(l,2);case"eo":return t.ordinalNumber(l,{unit:"day"});case"eee":return t.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return t.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return t.day(a,{width:"short",context:"formatting"});case"eeee":default:return t.day(a,{width:"wide",context:"formatting"})}},c:function(i,e,t,n){const a=i.getDay(),l=(a-n.weekStartsOn+8)%7||7;switch(e){case"c":return String(l);case"cc":return $e(l,e.length);case"co":return t.ordinalNumber(l,{unit:"day"});case"ccc":return t.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return t.day(a,{width:"narrow",context:"standalone"});case"cccccc":return t.day(a,{width:"short",context:"standalone"});case"cccc":default:return t.day(a,{width:"wide",context:"standalone"})}},i:function(i,e,t){const n=i.getDay(),a=n===0?7:n;switch(e){case"i":return String(a);case"ii":return $e(a,e.length);case"io":return t.ordinalNumber(a,{unit:"day"});case"iii":return t.day(n,{width:"abbreviated",context:"formatting"});case"iiiii":return t.day(n,{width:"narrow",context:"formatting"});case"iiiiii":return t.day(n,{width:"short",context:"formatting"});case"iiii":default:return t.day(n,{width:"wide",context:"formatting"})}},a:function(i,e,t){const a=i.getHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return t.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return t.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(i,e,t){const n=i.getHours();let a;switch(n===12?a=pl.noon:n===0?a=pl.midnight:a=n/12>=1?"pm":"am",e){case"b":case"bb":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return t.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return t.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(i,e,t){const n=i.getHours();let a;switch(n>=17?a=pl.evening:n>=12?a=pl.afternoon:n>=4?a=pl.morning:a=pl.night,e){case"B":case"BB":case"BBB":return t.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return t.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return t.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(i,e,t){if(e==="ho"){let n=i.getHours()%12;return n===0&&(n=12),t.ordinalNumber(n,{unit:"hour"})}return Ts.h(i,e)},H:function(i,e,t){return e==="Ho"?t.ordinalNumber(i.getHours(),{unit:"hour"}):Ts.H(i,e)},K:function(i,e,t){const n=i.getHours()%12;return e==="Ko"?t.ordinalNumber(n,{unit:"hour"}):$e(n,e.length)},k:function(i,e,t){let n=i.getHours();return n===0&&(n=24),e==="ko"?t.ordinalNumber(n,{unit:"hour"}):$e(n,e.length)},m:function(i,e,t){return e==="mo"?t.ordinalNumber(i.getMinutes(),{unit:"minute"}):Ts.m(i,e)},s:function(i,e,t){return e==="so"?t.ordinalNumber(i.getSeconds(),{unit:"second"}):Ts.s(i,e)},S:function(i,e){return Ts.S(i,e)},X:function(i,e,t){const n=i.getTimezoneOffset();if(n===0)return"Z";switch(e){case"X":return VI(n);case"XXXX":case"XX":return Ba(n);case"XXXXX":case"XXX":default:return Ba(n,":")}},x:function(i,e,t){const n=i.getTimezoneOffset();switch(e){case"x":return VI(n);case"xxxx":case"xx":return Ba(n);case"xxxxx":case"xxx":default:return Ba(n,":")}},O:function(i,e,t){const n=i.getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+OI(n,":");case"OOOO":default:return"GMT"+Ba(n,":")}},z:function(i,e,t){const n=i.getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+OI(n,":");case"zzzz":default:return"GMT"+Ba(n,":")}},t:function(i,e,t){const n=Math.trunc(+i/1e3);return $e(n,e.length)},T:function(i,e,t){return $e(+i,e.length)}};function OI(i,e=""){const t=i>0?"-":"+",n=Math.abs(i),a=Math.trunc(n/60),l=n%60;return l===0?t+String(a):t+String(a)+e+$e(l,2)}function VI(i,e){return i%60===0?(i>0?"-":"+")+$e(Math.abs(i)/60,2):Ba(i,e)}function Ba(i,e=""){const t=i>0?"-":"+",n=Math.abs(i),a=$e(Math.trunc(n/60),2),l=$e(n%60,2);return t+a+e+l}const xI=(i,e)=>{switch(i){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});case"PPPP":default:return e.date({width:"full"})}},Q1=(i,e)=>{switch(i){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});case"pppp":default:return e.time({width:"full"})}},IU=(i,e)=>{const t=i.match(/(P+)(p+)?/)||[],n=t[1],a=t[2];if(!a)return xI(i,e);let l;switch(n){case"P":l=e.dateTime({width:"short"});break;case"PP":l=e.dateTime({width:"medium"});break;case"PPP":l=e.dateTime({width:"long"});break;case"PPPP":default:l=e.dateTime({width:"full"});break}return l.replace("{{date}}",xI(n,e)).replace("{{time}}",Q1(a,e))},AU={p:Q1,P:IU},SU=/^D+$/,RU=/^Y+$/,CU=["D","DD","YY","YYYY"];function DU(i){return SU.test(i)}function PU(i){return RU.test(i)}function NU(i,e,t){const n=OU(i,e,t);if(console.warn(n),CU.includes(i))throw new RangeError(n)}function OU(i,e,t){const n=i[0]==="Y"?"years":"days of the month";return`Use \`${i.toLowerCase()}\` instead of \`${i}\` (in \`${e}\`) for formatting ${n} to the input \`${t}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`}const VU=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,xU=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,kU=/^'([^]*?)'?$/,MU=/''/g,LU=/[a-zA-Z]/;function UU(i,e,t){var y,T,b,O,G,$,Y,fe;const n=Kh(),a=(t==null?void 0:t.locale)??n.locale??G1,l=(t==null?void 0:t.firstWeekContainsDate)??((T=(y=t==null?void 0:t.locale)==null?void 0:y.options)==null?void 0:T.firstWeekContainsDate)??n.firstWeekContainsDate??((O=(b=n.locale)==null?void 0:b.options)==null?void 0:O.firstWeekContainsDate)??1,c=(t==null?void 0:t.weekStartsOn)??(($=(G=t==null?void 0:t.locale)==null?void 0:G.options)==null?void 0:$.weekStartsOn)??n.weekStartsOn??((fe=(Y=n.locale)==null?void 0:Y.options)==null?void 0:fe.weekStartsOn)??0,f=Ti(i,t==null?void 0:t.in);if(!z4(f))throw new RangeError("Invalid time value");let m=e.match(xU).map(ae=>{const ne=ae[0];if(ne==="p"||ne==="P"){const ve=AU[ne];return ve(ae,a.formatLong)}return ae}).join("").match(VU).map(ae=>{if(ae==="''")return{isToken:!1,value:"'"};const ne=ae[0];if(ne==="'")return{isToken:!1,value:BU(ae)};if(NI[ne])return{isToken:!0,value:ae};if(ne.match(LU))throw new RangeError("Format string contains an unescaped latin alphabet character `"+ne+"`");return{isToken:!1,value:ae}});a.localize.preprocessor&&(m=a.localize.preprocessor(f,m));const p={firstWeekContainsDate:l,weekStartsOn:c,locale:a};return m.map(ae=>{if(!ae.isToken)return ae.value;const ne=ae.value;(!(t!=null&&t.useAdditionalWeekYearTokens)&&PU(ne)||!(t!=null&&t.useAdditionalDayOfYearTokens)&&DU(ne))&&NU(ne,e,String(i));const ve=NI[ne[0]];return ve(f,ne,a.localize,p)}).join("")}function BU(i){const e=i.match(kU);return e?e[1].replace(MU,"'"):i}function zU(i,e,t){var T,b;const[n,a]=j1(t==null?void 0:t.in,i,e),l=Kh(),c=l.locale??G1,f=l.weekStartsOn??((b=(T=l.locale)==null?void 0:T.options)==null?void 0:b.weekStartsOn)??0,m=H1(n,a);if(isNaN(m))throw new RangeError("Invalid time value");let p;m<-6?p="other":m<-1?p="lastWeek":m<0?p="yesterday":m<1?p="today":m<2?p="tomorrow":m<7?p="nextWeek":p="other";const y=c.formatRelative(p,n,a,{locale:c,weekStartsOn:f});return UU(n,y,{locale:c,weekStartsOn:f})}const FU=({createdAt:i,text:e,displayName:t,photoUrl:n,uid:a,currentUid:l})=>{const c=a===l;return De.jsx("div",{className:`flex ${c?"justify-end":"justify-start"}`,children:De.jsxs("div",{className:`flex items-start gap-3 mb-4 p-3 rounded-lg max-w-xs shadow-sm
        ${c?"bg-blue-100":"bg-white"}
      `,children:[!c&&n&&De.jsx("img",{src:n,alt:"Avatar",className:"w-10 h-10 rounded-full object-cover"}),De.jsxs("div",{children:[t&&De.jsx("p",{className:"text-sm font-semibold text-gray-700",children:t}),(i==null?void 0:i.seconds)&&De.jsx("span",{className:"text-xs text-gray-400 block",children:zU(new Date(i.seconds*1e3),new Date)}),De.jsx("p",{className:"text-sm text-gray-800 mt-1 break-words",children:e})]})]})})},qU="@firebase/firestore-compat",jU="0.3.52";/**
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
 */function Jv(i,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new Z("invalid-argument",`Invalid options passed to function ${i}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
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
 */function kI(){if(typeof Uint8Array>"u")throw new Z("unimplemented","Uint8Arrays are not available in this environment.")}function MI(){if(!hk())throw new Z("unimplemented","Blobs are unavailable in Firestore in this environment.")}class wh{constructor(e){this._delegate=e}static fromBase64String(e){return MI(),new wh(er.fromBase64String(e))}static fromUint8Array(e){return kI(),new wh(er.fromUint8Array(e))}toBase64(){return MI(),this._delegate.toBase64()}toUint8Array(){return kI(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
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
 */function dy(i){return HU(i,["next","error","complete"])}function HU(i,e){if(typeof i!="object"||i===null)return!1;const t=i;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}/**
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
 */class GU{enableIndexedDbPersistence(e,t){return QL(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return YL(e._delegate)}clearIndexedDbPersistence(e){return WL(e._delegate)}}class Y1{constructor(e,t,n){this._delegate=t,this._persistenceProvider=n,this.INTERNAL={delete:()=>this.terminate()},e instanceof Ms||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&Ji("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,n={}){jL(this._delegate,e,t,n)}enableNetwork(){return XL(this._delegate)}disableNetwork(){return JL(this._delegate)}enablePersistence(e){let t=!1,n=!1;return e&&(t=!!e.synchronizeTabs,n=!!e.experimentalForceOwningTab,y1("synchronizeTabs",t,"experimentalForceOwningTab",n)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,n)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return $L(this._delegate)}onSnapshotsInSync(e){return I4(this._delegate,e)}get app(){if(!this._appCompat)throw new Z("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Xl(this,I1(this._delegate,e))}catch(t){throw bn(t,"collection()","Firestore.collection()")}}doc(e){try{return new oi(this,dm(this._delegate,e))}catch(t){throw bn(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new wn(this,HL(this._delegate,e))}catch(t){throw bn(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return D4(this._delegate,t=>e(new W1(this,t)))}batch(){return _n(this._delegate),new $1(new S4(this._delegate,e=>Gh(this._delegate,e)))}loadBundle(e){return ZL(this._delegate,e)}namedQuery(e){return e4(this._delegate,e).then(t=>t?new wn(this,t):null)}}class eg extends $v{constructor(e){super(),this.firestore=e}convertBytes(e){return new wh(new er(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return oi.forKey(t,this.firestore,null)}}function KU(i){I2(i)}class W1{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new eg(e)}get(e){const t=Ya(e);return this._delegate.get(t).then(n=>new bh(this._firestore,new xr(this._firestore._delegate,this._userDataWriter,n._key,n._document,n.metadata,t.converter)))}set(e,t,n){const a=Ya(e);return n?(Jv("Transaction.set",n),this._delegate.set(a,t,n)):this._delegate.set(a,t),this}update(e,t,n,...a){const l=Ya(e);return arguments.length===2?this._delegate.update(l,t):this._delegate.update(l,t,n,...a),this}delete(e){const t=Ya(e);return this._delegate.delete(t),this}}class $1{constructor(e){this._delegate=e}set(e,t,n){const a=Ya(e);return n?(Jv("WriteBatch.set",n),this._delegate.set(a,t,n)):this._delegate.set(a,t),this}update(e,t,n,...a){const l=Ya(e);return arguments.length===2?this._delegate.update(l,t):this._delegate.update(l,t,n,...a),this}delete(e){const t=Ya(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class uo{constructor(e,t,n){this._firestore=e,this._userDataWriter=t,this._delegate=n}fromFirestore(e,t){const n=new Zc(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Ih(this._firestore,n),t??{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const n=uo.INSTANCES;let a=n.get(e);a||(a=new WeakMap,n.set(e,a));let l=a.get(t);return l||(l=new uo(e,new eg(e),t),a.set(t,l)),l}}uo.INSTANCES=new WeakMap;class oi{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new eg(e)}static forPath(e,t,n){if(e.length%2!==0)throw new Z("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new oi(t,new pt(t._delegate,n,new se(e)))}static forKey(e,t,n){return new oi(t,new pt(t._delegate,n,e))}get id(){return this._delegate.id}get parent(){return new Xl(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Xl(this.firestore,I1(this._delegate,e))}catch(t){throw bn(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=Ee(e),e instanceof pt?A1(this._delegate,e):!1}set(e,t){t=Jv("DocumentReference.set",t);try{return t?SI(this._delegate,e,t):SI(this._delegate,e)}catch(n){throw bn(n,"setDoc()","DocumentReference.set()")}}update(e,t,...n){try{return arguments.length===1?RI(this._delegate,e):RI(this._delegate,e,t,...n)}catch(a){throw bn(a,"updateDoc()","DocumentReference.update()")}}delete(){return w4(this._delegate)}onSnapshot(...e){const t=X1(e),n=J1(e,a=>new bh(this.firestore,new xr(this.firestore._delegate,this._userDataWriter,a._key,a._document,a.metadata,this._delegate.converter)));return z1(this._delegate,t,n)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=_4(this._delegate):(e==null?void 0:e.source)==="server"?t=y4(this._delegate):t=p4(this._delegate),t.then(n=>new bh(this.firestore,new xr(this.firestore._delegate,this._userDataWriter,n._key,n._document,n.metadata,this._delegate.converter)))}withConverter(e){return new oi(this.firestore,e?this._delegate.withConverter(uo.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function bn(i,e,t){return i.message=i.message.replace(e,t),i}function X1(i){for(const e of i)if(typeof e=="object"&&!dy(e))return e;return{}}function J1(i,e){var t,n;let a;return dy(i[0])?a=i[0]:dy(i[1])?a=i[1]:typeof i[0]=="function"?a={next:i[0],error:i[1],complete:i[2]}:a={next:i[1],error:i[2],complete:i[3]},{next:l=>{a.next&&a.next(e(l))},error:(t=a.error)===null||t===void 0?void 0:t.bind(a),complete:(n=a.complete)===null||n===void 0?void 0:n.bind(a)}}class bh{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new oi(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return B1(this._delegate,e._delegate)}}class Ih extends bh{data(e){const t=this._delegate.data(e);return this._delegate._converter||A2(t!==void 0,"Document in a QueryDocumentSnapshot should exist"),t}}class wn{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new eg(e)}where(e,t,n){try{return new wn(this.firestore,Es(this._delegate,a4(e,t,n)))}catch(a){throw bn(a,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new wn(this.firestore,Es(this._delegate,o4(e,t)))}catch(n){throw bn(n,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new wn(this.firestore,Es(this._delegate,l4(e)))}catch(t){throw bn(t,"limit()","Query.limit()")}}limitToLast(e){try{return new wn(this.firestore,Es(this._delegate,u4(e)))}catch(t){throw bn(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new wn(this.firestore,Es(this._delegate,c4(...e)))}catch(t){throw bn(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new wn(this.firestore,Es(this._delegate,h4(...e)))}catch(t){throw bn(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new wn(this.firestore,Es(this._delegate,d4(...e)))}catch(t){throw bn(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new wn(this.firestore,Es(this._delegate,f4(...e)))}catch(t){throw bn(t,"endAt()","Query.endAt()")}}isEqual(e){return S1(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=E4(this._delegate):(e==null?void 0:e.source)==="server"?t=T4(this._delegate):t=v4(this._delegate),t.then(n=>new fy(this.firestore,new js(this.firestore._delegate,this._userDataWriter,this._delegate,n._snapshot)))}onSnapshot(...e){const t=X1(e),n=J1(e,a=>new fy(this.firestore,new js(this.firestore._delegate,this._userDataWriter,this._delegate,a._snapshot)));return z1(this._delegate,t,n)}withConverter(e){return new wn(this.firestore,e?this._delegate.withConverter(uo.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class QU{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new Ih(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class fy{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new wn(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Ih(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new QU(this._firestore,t))}forEach(e,t){this._delegate.forEach(n=>{e.call(t,new Ih(this._firestore,n))})}isEqual(e){return B1(this._delegate,e._delegate)}}class Xl extends wn{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new oi(this.firestore,e):null}doc(e){try{return e===void 0?new oi(this.firestore,dm(this._delegate)):new oi(this.firestore,dm(this._delegate,e))}catch(t){throw bn(t,"doc()","CollectionReference.doc()")}}add(e){return b4(this._delegate,e).then(t=>new oi(this.firestore,t))}isEqual(e){return A1(this._delegate,e._delegate)}withConverter(e){return new Xl(this.firestore,e?this._delegate.withConverter(uo.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Ya(i){return je(i,pt)}/**
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
 */class Zv{constructor(...e){this._delegate=new qs(...e)}static documentId(){return new Zv(dt.keyField().canonicalString())}isEqual(e){return e=Ee(e),e instanceof qs?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class Ha{static serverTimestamp(){const e=N4();return e._methodName="FieldValue.serverTimestamp",new Ha(e)}static delete(){const e=P4();return e._methodName="FieldValue.delete",new Ha(e)}static arrayUnion(...e){const t=O4(...e);return t._methodName="FieldValue.arrayUnion",new Ha(t)}static arrayRemove(...e){const t=V4(...e);return t._methodName="FieldValue.arrayRemove",new Ha(t)}static increment(e){const t=x4(e);return t._methodName="FieldValue.increment",new Ha(t)}constructor(e){this._delegate=e}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const YU={Firestore:Y1,GeoPoint:Gm,Timestamp:mt,Blob:wh,Transaction:W1,WriteBatch:$1,DocumentReference:oi,DocumentSnapshot:bh,Query:wn,QueryDocumentSnapshot:Ih,QuerySnapshot:fy,CollectionReference:Xl,FieldPath:Zv,FieldValue:Ha,setLogLevel:KU,CACHE_SIZE_UNLIMITED:KL};function WU(i,e){i.INTERNAL.registerComponent(new $i("firestore-compat",t=>{const n=t.getProvider("app-compat").getImmediate(),a=t.getProvider("firestore").getImmediate();return e(n,a)},"PUBLIC").setServiceProps(Object.assign({},YU)))}/**
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
 */function $U(i){WU(i,(e,t)=>new Y1(e,t,new GU)),i.registerVersion(qU,jU)}$U(ui);const XU=({user:i,db:e})=>{const[t,n]=Nn.useState([]),[a,l]=Nn.useState("");Nn.useEffect(()=>{if(e)return e.collection("message").orderBy("createdAt").limit(100).onSnapshot(y=>{const T=y.docs.map(b=>({...b.data(),id:b.id}));n(T)})},[e]);const c=p=>{l(p.target.value)},f=async p=>{if(p.preventDefault(),e&&i){const{uid:y,displayName:T,photoURL:b}=i;await e.collection("message").add({text:a,createdAt:ui.firestore.FieldValue.serverTimestamp(),uid:y,displayName:T,photoUrl:b}),l("")}},m=Nn.useRef(null);return Nn.useEffect(()=>{var p;(p=m.current)==null||p.scrollIntoView({behavior:"smooth"})},[t]),De.jsxs("div",{className:"flex flex-col h-[70vh]",children:[De.jsx("ul",{className:"flex-1 overflow-y-auto p-4 bg-gray-100 rounded-lg mb-4",children:t.map(p=>De.jsx("li",{children:De.jsx(FU,{createdAt:p.createdAt,text:p.text,displayName:p.displayName,photoUrl:p.photoUrl,uid:p.uid,currentUid:i==null?void 0:i.uid})},p.id))}),De.jsx("div",{ref:m}),De.jsxs("form",{onSubmit:f,className:"flex gap-2",children:[De.jsx("input",{type:"text",value:a,onChange:c,placeholder:"Type your message...",className:"flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"}),De.jsx("button",{type:"submit",disabled:!a.trim(),className:"px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50",children:"Send"})]})]})},JU=({onUserAuthenticated:i})=>{const[e,t]=Nn.useState(""),[n,a]=Nn.useState(""),[l,c]=Nn.useState(""),[f,m]=Nn.useState(""),[p,y]=Nn.useState(!0),T=async b=>{b.preventDefault();try{if(p){const O=await ui.auth().createUserWithEmailAndPassword(l,f);O.user&&(await O.user.updateProfile({displayName:e}),i(O.user))}else{const O=await ui.auth().signInWithEmailAndPassword(l,f);O.user&&i(O.user)}}catch(O){alert(O.message)}};return De.jsxs("div",{className:"w-full max-w-md bg-white rounded-xl shadow p-6 space-y-4",children:[De.jsxs("h2",{className:"text-xl font-bold text-center text-blue-600",children:[p?"Register":"Login"," with Email"]}),De.jsxs("form",{onSubmit:T,className:"space-y-4",children:[p&&De.jsxs(De.Fragment,{children:[De.jsx("input",{type:"text",placeholder:"Full Name",value:e,onChange:b=>t(b.target.value),required:!0,className:"w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"}),De.jsx("input",{type:"text",placeholder:"Phone Number",value:n,onChange:b=>a(b.target.value),required:!0,className:"w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),De.jsx("input",{type:"email",placeholder:"Email",value:l,onChange:b=>c(b.target.value),required:!0,className:"w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"}),De.jsx("input",{type:"password",placeholder:"Password",value:f,onChange:b=>m(b.target.value),required:!0,className:"w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"}),De.jsx("button",{type:"submit",className:"w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition",children:p?"Sign Up":"Login"})]}),De.jsx("button",{type:"button",onClick:()=>y(!p),className:"text-sm text-blue-500 hover:underline block mx-auto",children:p?"Already have an account? Login":"No account? Register"})]})};ui.initializeApp({apiKey:"AIzaSyBnFdUnfOGI0hkTNJocvAZh5j-INNG7L4k",authDomain:"realtime-chat-app-4a647.firebaseapp.com",projectId:"realtime-chat-app-4a647",storageBucket:"realtime-chat-app-4a647.appspot.com",messagingSenderId:"580522930225",appId:"1:580522930225:web:7eb5d780bf0b4480bca510",measurementId:"G-7VL8ZWF1DM"});const ZU=ui.firestore(),Sf=ui.auth();function e6(){const[i,e]=Nn.useState(()=>Sf.currentUser),[t,n]=Nn.useState(!0);Nn.useEffect(()=>Sf.onAuthStateChanged(c=>{e(c),t&&n(!1)}),[t]);const a=async()=>{const l=new ui.auth.GoogleAuthProvider;Sf.useDeviceLanguage();try{await Sf.signInWithPopup(l)}catch(c){console.error(c)}};return t?De.jsx("div",{children:"Loading..."}):De.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 p-4",children:De.jsx("div",{className:"w-full max-w-2xl bg-white shadow-md rounded-xl p-6",children:i?De.jsxs(De.Fragment,{children:[De.jsx("h2",{className:"text-2xl font-semibold text-center text-blue-600 mb-6",children:"Welcome to the chat"}),De.jsx(XU,{user:i,db:ZU})]}):De.jsx(De.Fragment,{children:De.jsxs("div",{className:"flex flex-col items-center gap-4",children:[De.jsx(k4,{onClick:a,children:"Sign In With Google"}),De.jsx(JU,{onUserAuthenticated:l=>e(l)})]})})})})}OD.createRoot(document.getElementById("root")).render(De.jsx(Nn.StrictMode,{children:De.jsx(e6,{})}));
