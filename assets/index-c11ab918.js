(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var rs={},u1={get exports(){return rs},set exports(t){rs=t}},tl={},X={},c1={get exports(){return X},set exports(t){X=t}},H={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Us=Symbol.for("react.element"),h1=Symbol.for("react.portal"),d1=Symbol.for("react.fragment"),f1=Symbol.for("react.strict_mode"),p1=Symbol.for("react.profiler"),m1=Symbol.for("react.provider"),g1=Symbol.for("react.context"),y1=Symbol.for("react.forward_ref"),v1=Symbol.for("react.suspense"),w1=Symbol.for("react.memo"),E1=Symbol.for("react.lazy"),Sf=Symbol.iterator;function S1(t){return t===null||typeof t!="object"?null:(t=Sf&&t[Sf]||t["@@iterator"],typeof t=="function"?t:null)}var qm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Gm=Object.assign,Qm={};function di(t,e,n){this.props=t,this.context=e,this.refs=Qm,this.updater=n||qm}di.prototype.isReactComponent={};di.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};di.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Xm(){}Xm.prototype=di.prototype;function ph(t,e,n){this.props=t,this.context=e,this.refs=Qm,this.updater=n||qm}var mh=ph.prototype=new Xm;mh.constructor=ph;Gm(mh,di.prototype);mh.isPureReactComponent=!0;var _f=Array.isArray,Ym=Object.prototype.hasOwnProperty,gh={current:null},Jm={key:!0,ref:!0,__self:!0,__source:!0};function Zm(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Ym.call(e,r)&&!Jm.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Us,type:t,key:s,ref:o,props:i,_owner:gh.current}}function _1(t,e){return{$$typeof:Us,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function yh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Us}function T1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Tf=/\/+/g;function eu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?T1(""+t.key):e.toString(36)}function Vo(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Us:case h1:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+eu(o,0):r,_f(i)?(n="",t!=null&&(n=t.replace(Tf,"$&/")+"/"),Vo(i,e,n,"",function(u){return u})):i!=null&&(yh(i)&&(i=_1(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Tf,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",_f(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+eu(s,a);o+=Vo(s,e,n,l,i)}else if(l=S1(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+eu(s,a++),o+=Vo(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function mo(t,e,n){if(t==null)return t;var r=[],i=0;return Vo(t,r,"","",function(s){return e.call(n,s,i++)}),r}function k1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Xe={current:null},zo={transition:null},I1={ReactCurrentDispatcher:Xe,ReactCurrentBatchConfig:zo,ReactCurrentOwner:gh};H.Children={map:mo,forEach:function(t,e,n){mo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return mo(t,function(){e++}),e},toArray:function(t){return mo(t,function(e){return e})||[]},only:function(t){if(!yh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};H.Component=di;H.Fragment=d1;H.Profiler=p1;H.PureComponent=ph;H.StrictMode=f1;H.Suspense=v1;H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I1;H.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Gm({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=gh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Ym.call(e,l)&&!Jm.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Us,type:t.type,key:i,ref:s,props:r,_owner:o}};H.createContext=function(t){return t={$$typeof:g1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:m1,_context:t},t.Consumer=t};H.createElement=Zm;H.createFactory=function(t){var e=Zm.bind(null,t);return e.type=t,e};H.createRef=function(){return{current:null}};H.forwardRef=function(t){return{$$typeof:y1,render:t}};H.isValidElement=yh;H.lazy=function(t){return{$$typeof:E1,_payload:{_status:-1,_result:t},_init:k1}};H.memo=function(t,e){return{$$typeof:w1,type:t,compare:e===void 0?null:e}};H.startTransition=function(t){var e=zo.transition;zo.transition={};try{t()}finally{zo.transition=e}};H.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};H.useCallback=function(t,e){return Xe.current.useCallback(t,e)};H.useContext=function(t){return Xe.current.useContext(t)};H.useDebugValue=function(){};H.useDeferredValue=function(t){return Xe.current.useDeferredValue(t)};H.useEffect=function(t,e){return Xe.current.useEffect(t,e)};H.useId=function(){return Xe.current.useId()};H.useImperativeHandle=function(t,e,n){return Xe.current.useImperativeHandle(t,e,n)};H.useInsertionEffect=function(t,e){return Xe.current.useInsertionEffect(t,e)};H.useLayoutEffect=function(t,e){return Xe.current.useLayoutEffect(t,e)};H.useMemo=function(t,e){return Xe.current.useMemo(t,e)};H.useReducer=function(t,e,n){return Xe.current.useReducer(t,e,n)};H.useRef=function(t){return Xe.current.useRef(t)};H.useState=function(t){return Xe.current.useState(t)};H.useSyncExternalStore=function(t,e,n){return Xe.current.useSyncExternalStore(t,e,n)};H.useTransition=function(){return Xe.current.useTransition()};H.version="18.2.0";(function(t){t.exports=H})(c1);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C1=X,N1=Symbol.for("react.element"),A1=Symbol.for("react.fragment"),D1=Object.prototype.hasOwnProperty,x1=C1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,R1={key:!0,ref:!0,__self:!0,__source:!0};function eg(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)D1.call(e,r)&&!R1.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:N1,type:t,key:s,ref:o,props:i,_owner:x1.current}}tl.Fragment=A1;tl.jsx=eg;tl.jsxs=eg;(function(t){t.exports=tl})(u1);const vh=rs.Fragment,O=rs.jsx,ne=rs.jsxs;var Hu={},Ku={},P1={get exports(){return Ku},set exports(t){Ku=t}},dt={},Wu={},O1={get exports(){return Wu},set exports(t){Wu=t}},tg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(C,V){var z=C.length;C.push(V);e:for(;0<z;){var he=z-1>>>1,_e=C[he];if(0<i(_e,V))C[he]=V,C[z]=_e,z=he;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var V=C[0],z=C.pop();if(z!==V){C[0]=z;e:for(var he=0,_e=C.length,fo=_e>>>1;he<fo;){var jn=2*(he+1)-1,Zl=C[jn],Hn=jn+1,po=C[Hn];if(0>i(Zl,z))Hn<_e&&0>i(po,Zl)?(C[he]=po,C[Hn]=z,he=Hn):(C[he]=Zl,C[jn]=z,he=jn);else if(Hn<_e&&0>i(po,z))C[he]=po,C[Hn]=z,he=Hn;else break e}}return V}function i(C,V){var z=C.sortIndex-V.sortIndex;return z!==0?z:C.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,h=3,g=!1,y=!1,v=!1,D=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(C){for(var V=n(u);V!==null;){if(V.callback===null)r(u);else if(V.startTime<=C)r(u),V.sortIndex=V.expirationTime,e(l,V);else break;V=n(u)}}function w(C){if(v=!1,m(C),!y)if(n(l)!==null)y=!0,Yl(T);else{var V=n(u);V!==null&&Jl(w,V.startTime-C)}}function T(C,V){y=!1,v&&(v=!1,p(x),x=-1),g=!0;var z=h;try{for(m(V),d=n(l);d!==null&&(!(d.expirationTime>V)||C&&!St());){var he=d.callback;if(typeof he=="function"){d.callback=null,h=d.priorityLevel;var _e=he(d.expirationTime<=V);V=t.unstable_now(),typeof _e=="function"?d.callback=_e:d===n(l)&&r(l),m(V)}else r(l);d=n(l)}if(d!==null)var fo=!0;else{var jn=n(u);jn!==null&&Jl(w,jn.startTime-V),fo=!1}return fo}finally{d=null,h=z,g=!1}}var I=!1,N=null,x=-1,Z=5,B=-1;function St(){return!(t.unstable_now()-B<Z)}function Si(){if(N!==null){var C=t.unstable_now();B=C;var V=!0;try{V=N(!0,C)}finally{V?_i():(I=!1,N=null)}}else I=!1}var _i;if(typeof f=="function")_i=function(){f(Si)};else if(typeof MessageChannel<"u"){var Ef=new MessageChannel,l1=Ef.port2;Ef.port1.onmessage=Si,_i=function(){l1.postMessage(null)}}else _i=function(){D(Si,0)};function Yl(C){N=C,I||(I=!0,_i())}function Jl(C,V){x=D(function(){C(t.unstable_now())},V)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(C){C.callback=null},t.unstable_continueExecution=function(){y||g||(y=!0,Yl(T))},t.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<C?Math.floor(1e3/C):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(C){switch(h){case 1:case 2:case 3:var V=3;break;default:V=h}var z=h;h=V;try{return C()}finally{h=z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(C,V){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var z=h;h=C;try{return V()}finally{h=z}},t.unstable_scheduleCallback=function(C,V,z){var he=t.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?he+z:he):z=he,C){case 1:var _e=-1;break;case 2:_e=250;break;case 5:_e=1073741823;break;case 4:_e=1e4;break;default:_e=5e3}return _e=z+_e,C={id:c++,callback:V,priorityLevel:C,startTime:z,expirationTime:_e,sortIndex:-1},z>he?(C.sortIndex=z,e(u,C),n(l)===null&&C===n(u)&&(v?(p(x),x=-1):v=!0,Jl(w,z-he))):(C.sortIndex=_e,e(l,C),y||g||(y=!0,Yl(T))),C},t.unstable_shouldYield=St,t.unstable_wrapCallback=function(C){var V=h;return function(){var z=h;h=V;try{return C.apply(this,arguments)}finally{h=z}}}})(tg);(function(t){t.exports=tg})(O1);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ng=X,ct=Wu;function S(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var rg=new Set,is={};function yr(t,e){Qr(t,e),Qr(t+"Capture",e)}function Qr(t,e){for(is[t]=e,t=0;t<e.length;t++)rg.add(e[t])}var Xt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qu=Object.prototype.hasOwnProperty,L1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,kf={},If={};function M1(t){return qu.call(If,t)?!0:qu.call(kf,t)?!1:L1.test(t)?If[t]=!0:(kf[t]=!0,!1)}function $1(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function U1(t,e,n,r){if(e===null||typeof e>"u"||$1(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ye(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Pe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Pe[t]=new Ye(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Pe[e]=new Ye(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Pe[t]=new Ye(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Pe[t]=new Ye(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Pe[t]=new Ye(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Pe[t]=new Ye(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Pe[t]=new Ye(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Pe[t]=new Ye(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Pe[t]=new Ye(t,5,!1,t.toLowerCase(),null,!1,!1)});var wh=/[\-:]([a-z])/g;function Eh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(wh,Eh);Pe[e]=new Ye(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(wh,Eh);Pe[e]=new Ye(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(wh,Eh);Pe[e]=new Ye(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Pe[t]=new Ye(t,1,!1,t.toLowerCase(),null,!1,!1)});Pe.xlinkHref=new Ye("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Pe[t]=new Ye(t,1,!1,t.toLowerCase(),null,!0,!0)});function Sh(t,e,n,r){var i=Pe.hasOwnProperty(e)?Pe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(U1(e,n,i,r)&&(n=null),r||i===null?M1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var on=ng.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,go=Symbol.for("react.element"),Cr=Symbol.for("react.portal"),Nr=Symbol.for("react.fragment"),_h=Symbol.for("react.strict_mode"),Gu=Symbol.for("react.profiler"),ig=Symbol.for("react.provider"),sg=Symbol.for("react.context"),Th=Symbol.for("react.forward_ref"),Qu=Symbol.for("react.suspense"),Xu=Symbol.for("react.suspense_list"),kh=Symbol.for("react.memo"),hn=Symbol.for("react.lazy"),og=Symbol.for("react.offscreen"),Cf=Symbol.iterator;function Ti(t){return t===null||typeof t!="object"?null:(t=Cf&&t[Cf]||t["@@iterator"],typeof t=="function"?t:null)}var le=Object.assign,tu;function Oi(t){if(tu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);tu=e&&e[1]||""}return`
`+tu+t}var nu=!1;function ru(t,e){if(!t||nu)return"";nu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{nu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Oi(t):""}function b1(t){switch(t.tag){case 5:return Oi(t.type);case 16:return Oi("Lazy");case 13:return Oi("Suspense");case 19:return Oi("SuspenseList");case 0:case 2:case 15:return t=ru(t.type,!1),t;case 11:return t=ru(t.type.render,!1),t;case 1:return t=ru(t.type,!0),t;default:return""}}function Yu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Nr:return"Fragment";case Cr:return"Portal";case Gu:return"Profiler";case _h:return"StrictMode";case Qu:return"Suspense";case Xu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case sg:return(t.displayName||"Context")+".Consumer";case ig:return(t._context.displayName||"Context")+".Provider";case Th:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case kh:return e=t.displayName||null,e!==null?e:Yu(t.type)||"Memo";case hn:e=t._payload,t=t._init;try{return Yu(t(e))}catch{}}return null}function F1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Yu(e);case 8:return e===_h?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Pn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ag(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function V1(t){var e=ag(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function yo(t){t._valueTracker||(t._valueTracker=V1(t))}function lg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=ag(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function oa(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ju(t,e){var n=e.checked;return le({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Nf(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Pn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ug(t,e){e=e.checked,e!=null&&Sh(t,"checked",e,!1)}function Zu(t,e){ug(t,e);var n=Pn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ec(t,e.type,n):e.hasOwnProperty("defaultValue")&&ec(t,e.type,Pn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Af(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ec(t,e,n){(e!=="number"||oa(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Li=Array.isArray;function Fr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Pn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function tc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(S(91));return le({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Df(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(S(92));if(Li(n)){if(1<n.length)throw Error(S(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Pn(n)}}function cg(t,e){var n=Pn(e.value),r=Pn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function xf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function hg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function nc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?hg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var vo,dg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(vo=vo||document.createElement("div"),vo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=vo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ss(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var zi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},z1=["Webkit","ms","Moz","O"];Object.keys(zi).forEach(function(t){z1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),zi[e]=zi[t]})});function fg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||zi.hasOwnProperty(t)&&zi[t]?(""+e).trim():e+"px"}function pg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=fg(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var B1=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function rc(t,e){if(e){if(B1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(S(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(S(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(S(61))}if(e.style!=null&&typeof e.style!="object")throw Error(S(62))}}function ic(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sc=null;function Ih(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var oc=null,Vr=null,zr=null;function Rf(t){if(t=Vs(t)){if(typeof oc!="function")throw Error(S(280));var e=t.stateNode;e&&(e=ol(e),oc(t.stateNode,t.type,e))}}function mg(t){Vr?zr?zr.push(t):zr=[t]:Vr=t}function gg(){if(Vr){var t=Vr,e=zr;if(zr=Vr=null,Rf(t),e)for(t=0;t<e.length;t++)Rf(e[t])}}function yg(t,e){return t(e)}function vg(){}var iu=!1;function wg(t,e,n){if(iu)return t(e,n);iu=!0;try{return yg(t,e,n)}finally{iu=!1,(Vr!==null||zr!==null)&&(vg(),gg())}}function os(t,e){var n=t.stateNode;if(n===null)return null;var r=ol(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(S(231,e,typeof n));return n}var ac=!1;if(Xt)try{var ki={};Object.defineProperty(ki,"passive",{get:function(){ac=!0}}),window.addEventListener("test",ki,ki),window.removeEventListener("test",ki,ki)}catch{ac=!1}function j1(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Bi=!1,aa=null,la=!1,lc=null,H1={onError:function(t){Bi=!0,aa=t}};function K1(t,e,n,r,i,s,o,a,l){Bi=!1,aa=null,j1.apply(H1,arguments)}function W1(t,e,n,r,i,s,o,a,l){if(K1.apply(this,arguments),Bi){if(Bi){var u=aa;Bi=!1,aa=null}else throw Error(S(198));la||(la=!0,lc=u)}}function vr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Eg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Pf(t){if(vr(t)!==t)throw Error(S(188))}function q1(t){var e=t.alternate;if(!e){if(e=vr(t),e===null)throw Error(S(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Pf(i),t;if(s===r)return Pf(i),e;s=s.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?t:e}function Sg(t){return t=q1(t),t!==null?_g(t):null}function _g(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=_g(t);if(e!==null)return e;t=t.sibling}return null}var Tg=ct.unstable_scheduleCallback,Of=ct.unstable_cancelCallback,G1=ct.unstable_shouldYield,Q1=ct.unstable_requestPaint,de=ct.unstable_now,X1=ct.unstable_getCurrentPriorityLevel,Ch=ct.unstable_ImmediatePriority,kg=ct.unstable_UserBlockingPriority,ua=ct.unstable_NormalPriority,Y1=ct.unstable_LowPriority,Ig=ct.unstable_IdlePriority,nl=null,Ot=null;function J1(t){if(Ot&&typeof Ot.onCommitFiberRoot=="function")try{Ot.onCommitFiberRoot(nl,t,void 0,(t.current.flags&128)===128)}catch{}}var Ct=Math.clz32?Math.clz32:tE,Z1=Math.log,eE=Math.LN2;function tE(t){return t>>>=0,t===0?32:31-(Z1(t)/eE|0)|0}var wo=64,Eo=4194304;function Mi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ca(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Mi(a):(s&=o,s!==0&&(r=Mi(s)))}else o=n&~i,o!==0?r=Mi(o):s!==0&&(r=Mi(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Ct(e),i=1<<n,r|=t[n],e&=~i;return r}function nE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rE(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Ct(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=nE(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function uc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Cg(){var t=wo;return wo<<=1,!(wo&4194240)&&(wo=64),t}function su(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function bs(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ct(e),t[e]=n}function iE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Ct(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Nh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Ct(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Y=0;function Ng(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Ag,Ah,Dg,xg,Rg,cc=!1,So=[],En=null,Sn=null,_n=null,as=new Map,ls=new Map,fn=[],sE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Lf(t,e){switch(t){case"focusin":case"focusout":En=null;break;case"dragenter":case"dragleave":Sn=null;break;case"mouseover":case"mouseout":_n=null;break;case"pointerover":case"pointerout":as.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ls.delete(e.pointerId)}}function Ii(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Vs(e),e!==null&&Ah(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function oE(t,e,n,r,i){switch(e){case"focusin":return En=Ii(En,t,e,n,r,i),!0;case"dragenter":return Sn=Ii(Sn,t,e,n,r,i),!0;case"mouseover":return _n=Ii(_n,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return as.set(s,Ii(as.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ls.set(s,Ii(ls.get(s)||null,t,e,n,r,i)),!0}return!1}function Pg(t){var e=Gn(t.target);if(e!==null){var n=vr(e);if(n!==null){if(e=n.tag,e===13){if(e=Eg(n),e!==null){t.blockedOn=e,Rg(t.priority,function(){Dg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Bo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=hc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);sc=r,n.target.dispatchEvent(r),sc=null}else return e=Vs(n),e!==null&&Ah(e),t.blockedOn=n,!1;e.shift()}return!0}function Mf(t,e,n){Bo(t)&&n.delete(e)}function aE(){cc=!1,En!==null&&Bo(En)&&(En=null),Sn!==null&&Bo(Sn)&&(Sn=null),_n!==null&&Bo(_n)&&(_n=null),as.forEach(Mf),ls.forEach(Mf)}function Ci(t,e){t.blockedOn===e&&(t.blockedOn=null,cc||(cc=!0,ct.unstable_scheduleCallback(ct.unstable_NormalPriority,aE)))}function us(t){function e(i){return Ci(i,t)}if(0<So.length){Ci(So[0],t);for(var n=1;n<So.length;n++){var r=So[n];r.blockedOn===t&&(r.blockedOn=null)}}for(En!==null&&Ci(En,t),Sn!==null&&Ci(Sn,t),_n!==null&&Ci(_n,t),as.forEach(e),ls.forEach(e),n=0;n<fn.length;n++)r=fn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<fn.length&&(n=fn[0],n.blockedOn===null);)Pg(n),n.blockedOn===null&&fn.shift()}var Br=on.ReactCurrentBatchConfig,ha=!0;function lE(t,e,n,r){var i=Y,s=Br.transition;Br.transition=null;try{Y=1,Dh(t,e,n,r)}finally{Y=i,Br.transition=s}}function uE(t,e,n,r){var i=Y,s=Br.transition;Br.transition=null;try{Y=4,Dh(t,e,n,r)}finally{Y=i,Br.transition=s}}function Dh(t,e,n,r){if(ha){var i=hc(t,e,n,r);if(i===null)mu(t,e,r,da,n),Lf(t,r);else if(oE(i,t,e,n,r))r.stopPropagation();else if(Lf(t,r),e&4&&-1<sE.indexOf(t)){for(;i!==null;){var s=Vs(i);if(s!==null&&Ag(s),s=hc(t,e,n,r),s===null&&mu(t,e,r,da,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else mu(t,e,r,null,n)}}var da=null;function hc(t,e,n,r){if(da=null,t=Ih(r),t=Gn(t),t!==null)if(e=vr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Eg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return da=t,null}function Og(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(X1()){case Ch:return 1;case kg:return 4;case ua:case Y1:return 16;case Ig:return 536870912;default:return 16}default:return 16}}var vn=null,xh=null,jo=null;function Lg(){if(jo)return jo;var t,e=xh,n=e.length,r,i="value"in vn?vn.value:vn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return jo=i.slice(t,1<r?1-r:void 0)}function Ho(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function _o(){return!0}function $f(){return!1}function ft(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?_o:$f,this.isPropagationStopped=$f,this}return le(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=_o)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=_o)},persist:function(){},isPersistent:_o}),e}var fi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rh=ft(fi),Fs=le({},fi,{view:0,detail:0}),cE=ft(Fs),ou,au,Ni,rl=le({},Fs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ph,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ni&&(Ni&&t.type==="mousemove"?(ou=t.screenX-Ni.screenX,au=t.screenY-Ni.screenY):au=ou=0,Ni=t),ou)},movementY:function(t){return"movementY"in t?t.movementY:au}}),Uf=ft(rl),hE=le({},rl,{dataTransfer:0}),dE=ft(hE),fE=le({},Fs,{relatedTarget:0}),lu=ft(fE),pE=le({},fi,{animationName:0,elapsedTime:0,pseudoElement:0}),mE=ft(pE),gE=le({},fi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),yE=ft(gE),vE=le({},fi,{data:0}),bf=ft(vE),wE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},EE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},SE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _E(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=SE[t])?!!e[t]:!1}function Ph(){return _E}var TE=le({},Fs,{key:function(t){if(t.key){var e=wE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ho(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?EE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ph,charCode:function(t){return t.type==="keypress"?Ho(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ho(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),kE=ft(TE),IE=le({},rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ff=ft(IE),CE=le({},Fs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ph}),NE=ft(CE),AE=le({},fi,{propertyName:0,elapsedTime:0,pseudoElement:0}),DE=ft(AE),xE=le({},rl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),RE=ft(xE),PE=[9,13,27,32],Oh=Xt&&"CompositionEvent"in window,ji=null;Xt&&"documentMode"in document&&(ji=document.documentMode);var OE=Xt&&"TextEvent"in window&&!ji,Mg=Xt&&(!Oh||ji&&8<ji&&11>=ji),Vf=String.fromCharCode(32),zf=!1;function $g(t,e){switch(t){case"keyup":return PE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ug(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ar=!1;function LE(t,e){switch(t){case"compositionend":return Ug(e);case"keypress":return e.which!==32?null:(zf=!0,Vf);case"textInput":return t=e.data,t===Vf&&zf?null:t;default:return null}}function ME(t,e){if(Ar)return t==="compositionend"||!Oh&&$g(t,e)?(t=Lg(),jo=xh=vn=null,Ar=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Mg&&e.locale!=="ko"?null:e.data;default:return null}}var $E={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!$E[t.type]:e==="textarea"}function bg(t,e,n,r){mg(r),e=fa(e,"onChange"),0<e.length&&(n=new Rh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Hi=null,cs=null;function UE(t){Qg(t,0)}function il(t){var e=Rr(t);if(lg(e))return t}function bE(t,e){if(t==="change")return e}var Fg=!1;if(Xt){var uu;if(Xt){var cu="oninput"in document;if(!cu){var jf=document.createElement("div");jf.setAttribute("oninput","return;"),cu=typeof jf.oninput=="function"}uu=cu}else uu=!1;Fg=uu&&(!document.documentMode||9<document.documentMode)}function Hf(){Hi&&(Hi.detachEvent("onpropertychange",Vg),cs=Hi=null)}function Vg(t){if(t.propertyName==="value"&&il(cs)){var e=[];bg(e,cs,t,Ih(t)),wg(UE,e)}}function FE(t,e,n){t==="focusin"?(Hf(),Hi=e,cs=n,Hi.attachEvent("onpropertychange",Vg)):t==="focusout"&&Hf()}function VE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return il(cs)}function zE(t,e){if(t==="click")return il(e)}function BE(t,e){if(t==="input"||t==="change")return il(e)}function jE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var At=typeof Object.is=="function"?Object.is:jE;function hs(t,e){if(At(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!qu.call(e,i)||!At(t[i],e[i]))return!1}return!0}function Kf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Wf(t,e){var n=Kf(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Kf(n)}}function zg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?zg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Bg(){for(var t=window,e=oa();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=oa(t.document)}return e}function Lh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function HE(t){var e=Bg(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&zg(n.ownerDocument.documentElement,n)){if(r!==null&&Lh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Wf(n,s);var o=Wf(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var KE=Xt&&"documentMode"in document&&11>=document.documentMode,Dr=null,dc=null,Ki=null,fc=!1;function qf(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;fc||Dr==null||Dr!==oa(r)||(r=Dr,"selectionStart"in r&&Lh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ki&&hs(Ki,r)||(Ki=r,r=fa(dc,"onSelect"),0<r.length&&(e=new Rh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Dr)))}function To(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var xr={animationend:To("Animation","AnimationEnd"),animationiteration:To("Animation","AnimationIteration"),animationstart:To("Animation","AnimationStart"),transitionend:To("Transition","TransitionEnd")},hu={},jg={};Xt&&(jg=document.createElement("div").style,"AnimationEvent"in window||(delete xr.animationend.animation,delete xr.animationiteration.animation,delete xr.animationstart.animation),"TransitionEvent"in window||delete xr.transitionend.transition);function sl(t){if(hu[t])return hu[t];if(!xr[t])return t;var e=xr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in jg)return hu[t]=e[n];return t}var Hg=sl("animationend"),Kg=sl("animationiteration"),Wg=sl("animationstart"),qg=sl("transitionend"),Gg=new Map,Gf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Un(t,e){Gg.set(t,e),yr(e,[t])}for(var du=0;du<Gf.length;du++){var fu=Gf[du],WE=fu.toLowerCase(),qE=fu[0].toUpperCase()+fu.slice(1);Un(WE,"on"+qE)}Un(Hg,"onAnimationEnd");Un(Kg,"onAnimationIteration");Un(Wg,"onAnimationStart");Un("dblclick","onDoubleClick");Un("focusin","onFocus");Un("focusout","onBlur");Un(qg,"onTransitionEnd");Qr("onMouseEnter",["mouseout","mouseover"]);Qr("onMouseLeave",["mouseout","mouseover"]);Qr("onPointerEnter",["pointerout","pointerover"]);Qr("onPointerLeave",["pointerout","pointerover"]);yr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));yr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));yr("onBeforeInput",["compositionend","keypress","textInput","paste"]);yr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));yr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));yr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $i="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),GE=new Set("cancel close invalid load scroll toggle".split(" ").concat($i));function Qf(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,W1(r,e,void 0,t),t.currentTarget=null}function Qg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Qf(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Qf(i,a,u),s=l}}}if(la)throw t=lc,la=!1,lc=null,t}function ee(t,e){var n=e[vc];n===void 0&&(n=e[vc]=new Set);var r=t+"__bubble";n.has(r)||(Xg(e,t,2,!1),n.add(r))}function pu(t,e,n){var r=0;e&&(r|=4),Xg(n,t,r,e)}var ko="_reactListening"+Math.random().toString(36).slice(2);function ds(t){if(!t[ko]){t[ko]=!0,rg.forEach(function(n){n!=="selectionchange"&&(GE.has(n)||pu(n,!1,t),pu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ko]||(e[ko]=!0,pu("selectionchange",!1,e))}}function Xg(t,e,n,r){switch(Og(e)){case 1:var i=lE;break;case 4:i=uE;break;default:i=Dh}n=i.bind(null,e,n,t),i=void 0,!ac||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function mu(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Gn(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}wg(function(){var u=s,c=Ih(n),d=[];e:{var h=Gg.get(t);if(h!==void 0){var g=Rh,y=t;switch(t){case"keypress":if(Ho(n)===0)break e;case"keydown":case"keyup":g=kE;break;case"focusin":y="focus",g=lu;break;case"focusout":y="blur",g=lu;break;case"beforeblur":case"afterblur":g=lu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Uf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=dE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=NE;break;case Hg:case Kg:case Wg:g=mE;break;case qg:g=DE;break;case"scroll":g=cE;break;case"wheel":g=RE;break;case"copy":case"cut":case"paste":g=yE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Ff}var v=(e&4)!==0,D=!v&&t==="scroll",p=v?h!==null?h+"Capture":null:h;v=[];for(var f=u,m;f!==null;){m=f;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,p!==null&&(w=os(f,p),w!=null&&v.push(fs(f,w,m)))),D)break;f=f.return}0<v.length&&(h=new g(h,y,null,n,c),d.push({event:h,listeners:v}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",h&&n!==sc&&(y=n.relatedTarget||n.fromElement)&&(Gn(y)||y[Yt]))break e;if((g||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=u,y=y?Gn(y):null,y!==null&&(D=vr(y),y!==D||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(v=Uf,w="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(v=Ff,w="onPointerLeave",p="onPointerEnter",f="pointer"),D=g==null?h:Rr(g),m=y==null?h:Rr(y),h=new v(w,f+"leave",g,n,c),h.target=D,h.relatedTarget=m,w=null,Gn(c)===u&&(v=new v(p,f+"enter",y,n,c),v.target=m,v.relatedTarget=D,w=v),D=w,g&&y)t:{for(v=g,p=y,f=0,m=v;m;m=_r(m))f++;for(m=0,w=p;w;w=_r(w))m++;for(;0<f-m;)v=_r(v),f--;for(;0<m-f;)p=_r(p),m--;for(;f--;){if(v===p||p!==null&&v===p.alternate)break t;v=_r(v),p=_r(p)}v=null}else v=null;g!==null&&Xf(d,h,g,v,!1),y!==null&&D!==null&&Xf(d,D,y,v,!0)}}e:{if(h=u?Rr(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var T=bE;else if(Bf(h))if(Fg)T=BE;else{T=VE;var I=FE}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(T=zE);if(T&&(T=T(t,u))){bg(d,T,n,c);break e}I&&I(t,h,u),t==="focusout"&&(I=h._wrapperState)&&I.controlled&&h.type==="number"&&ec(h,"number",h.value)}switch(I=u?Rr(u):window,t){case"focusin":(Bf(I)||I.contentEditable==="true")&&(Dr=I,dc=u,Ki=null);break;case"focusout":Ki=dc=Dr=null;break;case"mousedown":fc=!0;break;case"contextmenu":case"mouseup":case"dragend":fc=!1,qf(d,n,c);break;case"selectionchange":if(KE)break;case"keydown":case"keyup":qf(d,n,c)}var N;if(Oh)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Ar?$g(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(Mg&&n.locale!=="ko"&&(Ar||x!=="onCompositionStart"?x==="onCompositionEnd"&&Ar&&(N=Lg()):(vn=c,xh="value"in vn?vn.value:vn.textContent,Ar=!0)),I=fa(u,x),0<I.length&&(x=new bf(x,t,null,n,c),d.push({event:x,listeners:I}),N?x.data=N:(N=Ug(n),N!==null&&(x.data=N)))),(N=OE?LE(t,n):ME(t,n))&&(u=fa(u,"onBeforeInput"),0<u.length&&(c=new bf("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=N))}Qg(d,e)})}function fs(t,e,n){return{instance:t,listener:e,currentTarget:n}}function fa(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=os(t,n),s!=null&&r.unshift(fs(t,s,i)),s=os(t,e),s!=null&&r.push(fs(t,s,i))),t=t.return}return r}function _r(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Xf(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=os(n,s),l!=null&&o.unshift(fs(n,l,a))):i||(l=os(n,s),l!=null&&o.push(fs(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var QE=/\r\n?/g,XE=/\u0000|\uFFFD/g;function Yf(t){return(typeof t=="string"?t:""+t).replace(QE,`
`).replace(XE,"")}function Io(t,e,n){if(e=Yf(e),Yf(t)!==e&&n)throw Error(S(425))}function pa(){}var pc=null,mc=null;function gc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var yc=typeof setTimeout=="function"?setTimeout:void 0,YE=typeof clearTimeout=="function"?clearTimeout:void 0,Jf=typeof Promise=="function"?Promise:void 0,JE=typeof queueMicrotask=="function"?queueMicrotask:typeof Jf<"u"?function(t){return Jf.resolve(null).then(t).catch(ZE)}:yc;function ZE(t){setTimeout(function(){throw t})}function gu(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),us(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);us(e)}function Tn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Zf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var pi=Math.random().toString(36).slice(2),Rt="__reactFiber$"+pi,ps="__reactProps$"+pi,Yt="__reactContainer$"+pi,vc="__reactEvents$"+pi,eS="__reactListeners$"+pi,tS="__reactHandles$"+pi;function Gn(t){var e=t[Rt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Yt]||n[Rt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Zf(t);t!==null;){if(n=t[Rt])return n;t=Zf(t)}return e}t=n,n=t.parentNode}return null}function Vs(t){return t=t[Rt]||t[Yt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Rr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(S(33))}function ol(t){return t[ps]||null}var wc=[],Pr=-1;function bn(t){return{current:t}}function te(t){0>Pr||(t.current=wc[Pr],wc[Pr]=null,Pr--)}function J(t,e){Pr++,wc[Pr]=t.current,t.current=e}var On={},je=bn(On),tt=bn(!1),or=On;function Xr(t,e){var n=t.type.contextTypes;if(!n)return On;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function nt(t){return t=t.childContextTypes,t!=null}function ma(){te(tt),te(je)}function ep(t,e,n){if(je.current!==On)throw Error(S(168));J(je,e),J(tt,n)}function Yg(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(S(108,F1(t)||"Unknown",i));return le({},n,r)}function ga(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||On,or=je.current,J(je,t),J(tt,tt.current),!0}function tp(t,e,n){var r=t.stateNode;if(!r)throw Error(S(169));n?(t=Yg(t,e,or),r.__reactInternalMemoizedMergedChildContext=t,te(tt),te(je),J(je,t)):te(tt),J(tt,n)}var zt=null,al=!1,yu=!1;function Jg(t){zt===null?zt=[t]:zt.push(t)}function nS(t){al=!0,Jg(t)}function Fn(){if(!yu&&zt!==null){yu=!0;var t=0,e=Y;try{var n=zt;for(Y=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}zt=null,al=!1}catch(i){throw zt!==null&&(zt=zt.slice(t+1)),Tg(Ch,Fn),i}finally{Y=e,yu=!1}}return null}var Or=[],Lr=0,ya=null,va=0,mt=[],gt=0,ar=null,jt=1,Ht="";function Kn(t,e){Or[Lr++]=va,Or[Lr++]=ya,ya=t,va=e}function Zg(t,e,n){mt[gt++]=jt,mt[gt++]=Ht,mt[gt++]=ar,ar=t;var r=jt;t=Ht;var i=32-Ct(r)-1;r&=~(1<<i),n+=1;var s=32-Ct(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,jt=1<<32-Ct(e)+i|n<<i|r,Ht=s+t}else jt=1<<s|n<<i|r,Ht=t}function Mh(t){t.return!==null&&(Kn(t,1),Zg(t,1,0))}function $h(t){for(;t===ya;)ya=Or[--Lr],Or[Lr]=null,va=Or[--Lr],Or[Lr]=null;for(;t===ar;)ar=mt[--gt],mt[gt]=null,Ht=mt[--gt],mt[gt]=null,jt=mt[--gt],mt[gt]=null}var at=null,st=null,re=!1,It=null;function ey(t,e){var n=yt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function np(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,at=t,st=Tn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,at=t,st=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ar!==null?{id:jt,overflow:Ht}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=yt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,at=t,st=null,!0):!1;default:return!1}}function Ec(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Sc(t){if(re){var e=st;if(e){var n=e;if(!np(t,e)){if(Ec(t))throw Error(S(418));e=Tn(n.nextSibling);var r=at;e&&np(t,e)?ey(r,n):(t.flags=t.flags&-4097|2,re=!1,at=t)}}else{if(Ec(t))throw Error(S(418));t.flags=t.flags&-4097|2,re=!1,at=t}}}function rp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;at=t}function Co(t){if(t!==at)return!1;if(!re)return rp(t),re=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!gc(t.type,t.memoizedProps)),e&&(e=st)){if(Ec(t))throw ty(),Error(S(418));for(;e;)ey(t,e),e=Tn(e.nextSibling)}if(rp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(S(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){st=Tn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}st=null}}else st=at?Tn(t.stateNode.nextSibling):null;return!0}function ty(){for(var t=st;t;)t=Tn(t.nextSibling)}function Yr(){st=at=null,re=!1}function Uh(t){It===null?It=[t]:It.push(t)}var rS=on.ReactCurrentBatchConfig;function Tt(t,e){if(t&&t.defaultProps){e=le({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var wa=bn(null),Ea=null,Mr=null,bh=null;function Fh(){bh=Mr=Ea=null}function Vh(t){var e=wa.current;te(wa),t._currentValue=e}function _c(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function jr(t,e){Ea=t,bh=Mr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(et=!0),t.firstContext=null)}function wt(t){var e=t._currentValue;if(bh!==t)if(t={context:t,memoizedValue:e,next:null},Mr===null){if(Ea===null)throw Error(S(308));Mr=t,Ea.dependencies={lanes:0,firstContext:t}}else Mr=Mr.next=t;return e}var Qn=null;function zh(t){Qn===null?Qn=[t]:Qn.push(t)}function ny(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,zh(e)):(n.next=i.next,i.next=n),e.interleaved=n,Jt(t,r)}function Jt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var dn=!1;function Bh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ry(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Gt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function kn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Jt(t,n)}return i=r.interleaved,i===null?(e.next=e,zh(r)):(e.next=i.next,i.next=e),r.interleaved=e,Jt(t,n)}function Ko(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Nh(t,n)}}function ip(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Sa(t,e,n,r){var i=t.updateQueue;dn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,g=a.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,v=a;switch(h=e,g=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){d=y.call(g,d,h);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,h=typeof y=="function"?y.call(g,d,h):y,h==null)break e;d=le({},d,h);break e;case 2:dn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else g={eventTime:g,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=d):c=c.next=g,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ur|=o,t.lanes=o,t.memoizedState=d}}function sp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var iy=new ng.Component().refs;function Tc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:le({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ll={isMounted:function(t){return(t=t._reactInternals)?vr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Qe(),i=Cn(t),s=Gt(r,i);s.payload=e,n!=null&&(s.callback=n),e=kn(t,s,i),e!==null&&(Nt(e,t,i,r),Ko(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Qe(),i=Cn(t),s=Gt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=kn(t,s,i),e!==null&&(Nt(e,t,i,r),Ko(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Qe(),r=Cn(t),i=Gt(n,r);i.tag=2,e!=null&&(i.callback=e),e=kn(t,i,r),e!==null&&(Nt(e,t,r,n),Ko(e,t,r))}};function op(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!hs(n,r)||!hs(i,s):!0}function sy(t,e,n){var r=!1,i=On,s=e.contextType;return typeof s=="object"&&s!==null?s=wt(s):(i=nt(e)?or:je.current,r=e.contextTypes,s=(r=r!=null)?Xr(t,i):On),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ll,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function ap(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&ll.enqueueReplaceState(e,e.state,null)}function kc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=iy,Bh(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=wt(s):(s=nt(e)?or:je.current,i.context=Xr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Tc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&ll.enqueueReplaceState(i,i.state,null),Sa(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ai(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===iy&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,t))}return t}function No(t,e){throw t=Object.prototype.toString.call(e),Error(S(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function lp(t){var e=t._init;return e(t._payload)}function oy(t){function e(p,f){if(t){var m=p.deletions;m===null?(p.deletions=[f],p.flags|=16):m.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=Nn(p,f),p.index=0,p.sibling=null,p}function s(p,f,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<f?(p.flags|=2,f):m):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,f,m,w){return f===null||f.tag!==6?(f=ku(m,p.mode,w),f.return=p,f):(f=i(f,m),f.return=p,f)}function l(p,f,m,w){var T=m.type;return T===Nr?c(p,f,m.props.children,w,m.key):f!==null&&(f.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===hn&&lp(T)===f.type)?(w=i(f,m.props),w.ref=Ai(p,f,m),w.return=p,w):(w=Yo(m.type,m.key,m.props,null,p.mode,w),w.ref=Ai(p,f,m),w.return=p,w)}function u(p,f,m,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=Iu(m,p.mode,w),f.return=p,f):(f=i(f,m.children||[]),f.return=p,f)}function c(p,f,m,w,T){return f===null||f.tag!==7?(f=nr(m,p.mode,w,T),f.return=p,f):(f=i(f,m),f.return=p,f)}function d(p,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=ku(""+f,p.mode,m),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case go:return m=Yo(f.type,f.key,f.props,null,p.mode,m),m.ref=Ai(p,null,f),m.return=p,m;case Cr:return f=Iu(f,p.mode,m),f.return=p,f;case hn:var w=f._init;return d(p,w(f._payload),m)}if(Li(f)||Ti(f))return f=nr(f,p.mode,m,null),f.return=p,f;No(p,f)}return null}function h(p,f,m,w){var T=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return T!==null?null:a(p,f,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case go:return m.key===T?l(p,f,m,w):null;case Cr:return m.key===T?u(p,f,m,w):null;case hn:return T=m._init,h(p,f,T(m._payload),w)}if(Li(m)||Ti(m))return T!==null?null:c(p,f,m,w,null);No(p,m)}return null}function g(p,f,m,w,T){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(m)||null,a(f,p,""+w,T);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case go:return p=p.get(w.key===null?m:w.key)||null,l(f,p,w,T);case Cr:return p=p.get(w.key===null?m:w.key)||null,u(f,p,w,T);case hn:var I=w._init;return g(p,f,m,I(w._payload),T)}if(Li(w)||Ti(w))return p=p.get(m)||null,c(f,p,w,T,null);No(f,w)}return null}function y(p,f,m,w){for(var T=null,I=null,N=f,x=f=0,Z=null;N!==null&&x<m.length;x++){N.index>x?(Z=N,N=null):Z=N.sibling;var B=h(p,N,m[x],w);if(B===null){N===null&&(N=Z);break}t&&N&&B.alternate===null&&e(p,N),f=s(B,f,x),I===null?T=B:I.sibling=B,I=B,N=Z}if(x===m.length)return n(p,N),re&&Kn(p,x),T;if(N===null){for(;x<m.length;x++)N=d(p,m[x],w),N!==null&&(f=s(N,f,x),I===null?T=N:I.sibling=N,I=N);return re&&Kn(p,x),T}for(N=r(p,N);x<m.length;x++)Z=g(N,p,x,m[x],w),Z!==null&&(t&&Z.alternate!==null&&N.delete(Z.key===null?x:Z.key),f=s(Z,f,x),I===null?T=Z:I.sibling=Z,I=Z);return t&&N.forEach(function(St){return e(p,St)}),re&&Kn(p,x),T}function v(p,f,m,w){var T=Ti(m);if(typeof T!="function")throw Error(S(150));if(m=T.call(m),m==null)throw Error(S(151));for(var I=T=null,N=f,x=f=0,Z=null,B=m.next();N!==null&&!B.done;x++,B=m.next()){N.index>x?(Z=N,N=null):Z=N.sibling;var St=h(p,N,B.value,w);if(St===null){N===null&&(N=Z);break}t&&N&&St.alternate===null&&e(p,N),f=s(St,f,x),I===null?T=St:I.sibling=St,I=St,N=Z}if(B.done)return n(p,N),re&&Kn(p,x),T;if(N===null){for(;!B.done;x++,B=m.next())B=d(p,B.value,w),B!==null&&(f=s(B,f,x),I===null?T=B:I.sibling=B,I=B);return re&&Kn(p,x),T}for(N=r(p,N);!B.done;x++,B=m.next())B=g(N,p,x,B.value,w),B!==null&&(t&&B.alternate!==null&&N.delete(B.key===null?x:B.key),f=s(B,f,x),I===null?T=B:I.sibling=B,I=B);return t&&N.forEach(function(Si){return e(p,Si)}),re&&Kn(p,x),T}function D(p,f,m,w){if(typeof m=="object"&&m!==null&&m.type===Nr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case go:e:{for(var T=m.key,I=f;I!==null;){if(I.key===T){if(T=m.type,T===Nr){if(I.tag===7){n(p,I.sibling),f=i(I,m.props.children),f.return=p,p=f;break e}}else if(I.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===hn&&lp(T)===I.type){n(p,I.sibling),f=i(I,m.props),f.ref=Ai(p,I,m),f.return=p,p=f;break e}n(p,I);break}else e(p,I);I=I.sibling}m.type===Nr?(f=nr(m.props.children,p.mode,w,m.key),f.return=p,p=f):(w=Yo(m.type,m.key,m.props,null,p.mode,w),w.ref=Ai(p,f,m),w.return=p,p=w)}return o(p);case Cr:e:{for(I=m.key;f!==null;){if(f.key===I)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(p,f.sibling),f=i(f,m.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=Iu(m,p.mode,w),f.return=p,p=f}return o(p);case hn:return I=m._init,D(p,f,I(m._payload),w)}if(Li(m))return y(p,f,m,w);if(Ti(m))return v(p,f,m,w);No(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,m),f.return=p,p=f):(n(p,f),f=ku(m,p.mode,w),f.return=p,p=f),o(p)):n(p,f)}return D}var Jr=oy(!0),ay=oy(!1),zs={},Lt=bn(zs),ms=bn(zs),gs=bn(zs);function Xn(t){if(t===zs)throw Error(S(174));return t}function jh(t,e){switch(J(gs,e),J(ms,t),J(Lt,zs),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:nc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=nc(e,t)}te(Lt),J(Lt,e)}function Zr(){te(Lt),te(ms),te(gs)}function ly(t){Xn(gs.current);var e=Xn(Lt.current),n=nc(e,t.type);e!==n&&(J(ms,t),J(Lt,n))}function Hh(t){ms.current===t&&(te(Lt),te(ms))}var oe=bn(0);function _a(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var vu=[];function Kh(){for(var t=0;t<vu.length;t++)vu[t]._workInProgressVersionPrimary=null;vu.length=0}var Wo=on.ReactCurrentDispatcher,wu=on.ReactCurrentBatchConfig,lr=0,ae=null,ge=null,ke=null,Ta=!1,Wi=!1,ys=0,iS=0;function Me(){throw Error(S(321))}function Wh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!At(t[n],e[n]))return!1;return!0}function qh(t,e,n,r,i,s){if(lr=s,ae=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Wo.current=t===null||t.memoizedState===null?lS:uS,t=n(r,i),Wi){s=0;do{if(Wi=!1,ys=0,25<=s)throw Error(S(301));s+=1,ke=ge=null,e.updateQueue=null,Wo.current=cS,t=n(r,i)}while(Wi)}if(Wo.current=ka,e=ge!==null&&ge.next!==null,lr=0,ke=ge=ae=null,Ta=!1,e)throw Error(S(300));return t}function Gh(){var t=ys!==0;return ys=0,t}function xt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ke===null?ae.memoizedState=ke=t:ke=ke.next=t,ke}function Et(){if(ge===null){var t=ae.alternate;t=t!==null?t.memoizedState:null}else t=ge.next;var e=ke===null?ae.memoizedState:ke.next;if(e!==null)ke=e,ge=t;else{if(t===null)throw Error(S(310));ge=t,t={memoizedState:ge.memoizedState,baseState:ge.baseState,baseQueue:ge.baseQueue,queue:ge.queue,next:null},ke===null?ae.memoizedState=ke=t:ke=ke.next=t}return ke}function vs(t,e){return typeof e=="function"?e(t):e}function Eu(t){var e=Et(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=ge,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((lr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,ae.lanes|=c,ur|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,At(r,e.memoizedState)||(et=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ae.lanes|=s,ur|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Su(t){var e=Et(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);At(s,e.memoizedState)||(et=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function uy(){}function cy(t,e){var n=ae,r=Et(),i=e(),s=!At(r.memoizedState,i);if(s&&(r.memoizedState=i,et=!0),r=r.queue,Qh(fy.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||ke!==null&&ke.memoizedState.tag&1){if(n.flags|=2048,ws(9,dy.bind(null,n,r,i,e),void 0,null),Ce===null)throw Error(S(349));lr&30||hy(n,e,i)}return i}function hy(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ae.updateQueue,e===null?(e={lastEffect:null,stores:null},ae.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function dy(t,e,n,r){e.value=n,e.getSnapshot=r,py(e)&&my(t)}function fy(t,e,n){return n(function(){py(e)&&my(t)})}function py(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!At(t,n)}catch{return!0}}function my(t){var e=Jt(t,1);e!==null&&Nt(e,t,1,-1)}function up(t){var e=xt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vs,lastRenderedState:t},e.queue=t,t=t.dispatch=aS.bind(null,ae,t),[e.memoizedState,t]}function ws(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ae.updateQueue,e===null?(e={lastEffect:null,stores:null},ae.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function gy(){return Et().memoizedState}function qo(t,e,n,r){var i=xt();ae.flags|=t,i.memoizedState=ws(1|e,n,void 0,r===void 0?null:r)}function ul(t,e,n,r){var i=Et();r=r===void 0?null:r;var s=void 0;if(ge!==null){var o=ge.memoizedState;if(s=o.destroy,r!==null&&Wh(r,o.deps)){i.memoizedState=ws(e,n,s,r);return}}ae.flags|=t,i.memoizedState=ws(1|e,n,s,r)}function cp(t,e){return qo(8390656,8,t,e)}function Qh(t,e){return ul(2048,8,t,e)}function yy(t,e){return ul(4,2,t,e)}function vy(t,e){return ul(4,4,t,e)}function wy(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Ey(t,e,n){return n=n!=null?n.concat([t]):null,ul(4,4,wy.bind(null,e,t),n)}function Xh(){}function Sy(t,e){var n=Et();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Wh(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function _y(t,e){var n=Et();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Wh(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Ty(t,e,n){return lr&21?(At(n,e)||(n=Cg(),ae.lanes|=n,ur|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,et=!0),t.memoizedState=n)}function sS(t,e){var n=Y;Y=n!==0&&4>n?n:4,t(!0);var r=wu.transition;wu.transition={};try{t(!1),e()}finally{Y=n,wu.transition=r}}function ky(){return Et().memoizedState}function oS(t,e,n){var r=Cn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Iy(t))Cy(e,n);else if(n=ny(t,e,n,r),n!==null){var i=Qe();Nt(n,t,r,i),Ny(n,e,r)}}function aS(t,e,n){var r=Cn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Iy(t))Cy(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,At(a,o)){var l=e.interleaved;l===null?(i.next=i,zh(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=ny(t,e,i,r),n!==null&&(i=Qe(),Nt(n,t,r,i),Ny(n,e,r))}}function Iy(t){var e=t.alternate;return t===ae||e!==null&&e===ae}function Cy(t,e){Wi=Ta=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Ny(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Nh(t,n)}}var ka={readContext:wt,useCallback:Me,useContext:Me,useEffect:Me,useImperativeHandle:Me,useInsertionEffect:Me,useLayoutEffect:Me,useMemo:Me,useReducer:Me,useRef:Me,useState:Me,useDebugValue:Me,useDeferredValue:Me,useTransition:Me,useMutableSource:Me,useSyncExternalStore:Me,useId:Me,unstable_isNewReconciler:!1},lS={readContext:wt,useCallback:function(t,e){return xt().memoizedState=[t,e===void 0?null:e],t},useContext:wt,useEffect:cp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,qo(4194308,4,wy.bind(null,e,t),n)},useLayoutEffect:function(t,e){return qo(4194308,4,t,e)},useInsertionEffect:function(t,e){return qo(4,2,t,e)},useMemo:function(t,e){var n=xt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=xt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=oS.bind(null,ae,t),[r.memoizedState,t]},useRef:function(t){var e=xt();return t={current:t},e.memoizedState=t},useState:up,useDebugValue:Xh,useDeferredValue:function(t){return xt().memoizedState=t},useTransition:function(){var t=up(!1),e=t[0];return t=sS.bind(null,t[1]),xt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ae,i=xt();if(re){if(n===void 0)throw Error(S(407));n=n()}else{if(n=e(),Ce===null)throw Error(S(349));lr&30||hy(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,cp(fy.bind(null,r,s,t),[t]),r.flags|=2048,ws(9,dy.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=xt(),e=Ce.identifierPrefix;if(re){var n=Ht,r=jt;n=(r&~(1<<32-Ct(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ys++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=iS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},uS={readContext:wt,useCallback:Sy,useContext:wt,useEffect:Qh,useImperativeHandle:Ey,useInsertionEffect:yy,useLayoutEffect:vy,useMemo:_y,useReducer:Eu,useRef:gy,useState:function(){return Eu(vs)},useDebugValue:Xh,useDeferredValue:function(t){var e=Et();return Ty(e,ge.memoizedState,t)},useTransition:function(){var t=Eu(vs)[0],e=Et().memoizedState;return[t,e]},useMutableSource:uy,useSyncExternalStore:cy,useId:ky,unstable_isNewReconciler:!1},cS={readContext:wt,useCallback:Sy,useContext:wt,useEffect:Qh,useImperativeHandle:Ey,useInsertionEffect:yy,useLayoutEffect:vy,useMemo:_y,useReducer:Su,useRef:gy,useState:function(){return Su(vs)},useDebugValue:Xh,useDeferredValue:function(t){var e=Et();return ge===null?e.memoizedState=t:Ty(e,ge.memoizedState,t)},useTransition:function(){var t=Su(vs)[0],e=Et().memoizedState;return[t,e]},useMutableSource:uy,useSyncExternalStore:cy,useId:ky,unstable_isNewReconciler:!1};function ei(t,e){try{var n="",r=e;do n+=b1(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function _u(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ic(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var hS=typeof WeakMap=="function"?WeakMap:Map;function Ay(t,e,n){n=Gt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ca||(Ca=!0,Mc=r),Ic(t,e)},n}function Dy(t,e,n){n=Gt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Ic(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ic(t,e),typeof r!="function"&&(In===null?In=new Set([this]):In.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function hp(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new hS;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=IS.bind(null,t,e,n),e.then(t,t))}function dp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function fp(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Gt(-1,1),e.tag=2,kn(n,e,1))),n.lanes|=1),t)}var dS=on.ReactCurrentOwner,et=!1;function We(t,e,n,r){e.child=t===null?ay(e,null,n,r):Jr(e,t.child,n,r)}function pp(t,e,n,r,i){n=n.render;var s=e.ref;return jr(e,i),r=qh(t,e,n,r,s,i),n=Gh(),t!==null&&!et?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Zt(t,e,i)):(re&&n&&Mh(e),e.flags|=1,We(t,e,r,i),e.child)}function mp(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!id(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,xy(t,e,s,r,i)):(t=Yo(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:hs,n(o,r)&&t.ref===e.ref)return Zt(t,e,i)}return e.flags|=1,t=Nn(s,r),t.ref=e.ref,t.return=e,e.child=t}function xy(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(hs(s,r)&&t.ref===e.ref)if(et=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(et=!0);else return e.lanes=t.lanes,Zt(t,e,i)}return Cc(t,e,n,r,i)}function Ry(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},J(Ur,it),it|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,J(Ur,it),it|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,J(Ur,it),it|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,J(Ur,it),it|=r;return We(t,e,i,n),e.child}function Py(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Cc(t,e,n,r,i){var s=nt(n)?or:je.current;return s=Xr(e,s),jr(e,i),n=qh(t,e,n,r,s,i),r=Gh(),t!==null&&!et?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Zt(t,e,i)):(re&&r&&Mh(e),e.flags|=1,We(t,e,n,i),e.child)}function gp(t,e,n,r,i){if(nt(n)){var s=!0;ga(e)}else s=!1;if(jr(e,i),e.stateNode===null)Go(t,e),sy(e,n,r),kc(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=wt(u):(u=nt(n)?or:je.current,u=Xr(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&ap(e,o,r,u),dn=!1;var h=e.memoizedState;o.state=h,Sa(e,r,o,i),l=e.memoizedState,a!==r||h!==l||tt.current||dn?(typeof c=="function"&&(Tc(e,n,c,r),l=e.memoizedState),(a=dn||op(e,n,a,r,h,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,ry(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Tt(e.type,a),o.props=u,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=wt(l):(l=nt(n)?or:je.current,l=Xr(e,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&ap(e,o,r,l),dn=!1,h=e.memoizedState,o.state=h,Sa(e,r,o,i);var y=e.memoizedState;a!==d||h!==y||tt.current||dn?(typeof g=="function"&&(Tc(e,n,g,r),y=e.memoizedState),(u=dn||op(e,n,u,r,h,y,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return Nc(t,e,n,r,s,i)}function Nc(t,e,n,r,i,s){Py(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&tp(e,n,!1),Zt(t,e,s);r=e.stateNode,dS.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Jr(e,t.child,null,s),e.child=Jr(e,null,a,s)):We(t,e,a,s),e.memoizedState=r.state,i&&tp(e,n,!0),e.child}function Oy(t){var e=t.stateNode;e.pendingContext?ep(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ep(t,e.context,!1),jh(t,e.containerInfo)}function yp(t,e,n,r,i){return Yr(),Uh(i),e.flags|=256,We(t,e,n,r),e.child}var Ac={dehydrated:null,treeContext:null,retryLane:0};function Dc(t){return{baseLanes:t,cachePool:null,transitions:null}}function Ly(t,e,n){var r=e.pendingProps,i=oe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),J(oe,i&1),t===null)return Sc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=dl(o,r,0,null),t=nr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Dc(n),e.memoizedState=Ac,t):Yh(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return fS(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Nn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Nn(a,s):(s=nr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Dc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Ac,r}return s=t.child,t=s.sibling,r=Nn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Yh(t,e){return e=dl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ao(t,e,n,r){return r!==null&&Uh(r),Jr(e,t.child,null,n),t=Yh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function fS(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=_u(Error(S(422))),Ao(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=dl({mode:"visible",children:r.children},i,0,null),s=nr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Jr(e,t.child,null,o),e.child.memoizedState=Dc(o),e.memoizedState=Ac,s);if(!(e.mode&1))return Ao(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(S(419)),r=_u(s,r,void 0),Ao(t,e,o,r)}if(a=(o&t.childLanes)!==0,et||a){if(r=Ce,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Jt(t,i),Nt(r,t,i,-1))}return rd(),r=_u(Error(S(421))),Ao(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=CS.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,st=Tn(i.nextSibling),at=e,re=!0,It=null,t!==null&&(mt[gt++]=jt,mt[gt++]=Ht,mt[gt++]=ar,jt=t.id,Ht=t.overflow,ar=e),e=Yh(e,r.children),e.flags|=4096,e)}function vp(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),_c(t.return,e,n)}function Tu(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function My(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(We(t,e,r.children,n),r=oe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&vp(t,n,e);else if(t.tag===19)vp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(J(oe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&_a(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Tu(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&_a(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Tu(e,!0,n,null,s);break;case"together":Tu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Go(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Zt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ur|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(S(153));if(e.child!==null){for(t=e.child,n=Nn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Nn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function pS(t,e,n){switch(e.tag){case 3:Oy(e),Yr();break;case 5:ly(e);break;case 1:nt(e.type)&&ga(e);break;case 4:jh(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;J(wa,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(J(oe,oe.current&1),e.flags|=128,null):n&e.child.childLanes?Ly(t,e,n):(J(oe,oe.current&1),t=Zt(t,e,n),t!==null?t.sibling:null);J(oe,oe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return My(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),J(oe,oe.current),r)break;return null;case 22:case 23:return e.lanes=0,Ry(t,e,n)}return Zt(t,e,n)}var $y,xc,Uy,by;$y=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};xc=function(){};Uy=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Xn(Lt.current);var s=null;switch(n){case"input":i=Ju(t,i),r=Ju(t,r),s=[];break;case"select":i=le({},i,{value:void 0}),r=le({},r,{value:void 0}),s=[];break;case"textarea":i=tc(t,i),r=tc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=pa)}rc(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(is.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(is.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ee("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};by=function(t,e,n,r){n!==r&&(e.flags|=4)};function Di(t,e){if(!re)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function $e(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function mS(t,e,n){var r=e.pendingProps;switch($h(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(e),null;case 1:return nt(e.type)&&ma(),$e(e),null;case 3:return r=e.stateNode,Zr(),te(tt),te(je),Kh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Co(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,It!==null&&(bc(It),It=null))),xc(t,e),$e(e),null;case 5:Hh(e);var i=Xn(gs.current);if(n=e.type,t!==null&&e.stateNode!=null)Uy(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(S(166));return $e(e),null}if(t=Xn(Lt.current),Co(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Rt]=e,r[ps]=s,t=(e.mode&1)!==0,n){case"dialog":ee("cancel",r),ee("close",r);break;case"iframe":case"object":case"embed":ee("load",r);break;case"video":case"audio":for(i=0;i<$i.length;i++)ee($i[i],r);break;case"source":ee("error",r);break;case"img":case"image":case"link":ee("error",r),ee("load",r);break;case"details":ee("toggle",r);break;case"input":Nf(r,s),ee("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ee("invalid",r);break;case"textarea":Df(r,s),ee("invalid",r)}rc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Io(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Io(r.textContent,a,t),i=["children",""+a]):is.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ee("scroll",r)}switch(n){case"input":yo(r),Af(r,s,!0);break;case"textarea":yo(r),xf(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=pa)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=hg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Rt]=e,t[ps]=r,$y(t,e,!1,!1),e.stateNode=t;e:{switch(o=ic(n,r),n){case"dialog":ee("cancel",t),ee("close",t),i=r;break;case"iframe":case"object":case"embed":ee("load",t),i=r;break;case"video":case"audio":for(i=0;i<$i.length;i++)ee($i[i],t);i=r;break;case"source":ee("error",t),i=r;break;case"img":case"image":case"link":ee("error",t),ee("load",t),i=r;break;case"details":ee("toggle",t),i=r;break;case"input":Nf(t,r),i=Ju(t,r),ee("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=le({},r,{value:void 0}),ee("invalid",t);break;case"textarea":Df(t,r),i=tc(t,r),ee("invalid",t);break;default:i=r}rc(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?pg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&dg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ss(t,l):typeof l=="number"&&ss(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(is.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ee("scroll",t):l!=null&&Sh(t,s,l,o))}switch(n){case"input":yo(t),Af(t,r,!1);break;case"textarea":yo(t),xf(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Pn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Fr(t,!!r.multiple,s,!1):r.defaultValue!=null&&Fr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=pa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return $e(e),null;case 6:if(t&&e.stateNode!=null)by(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(S(166));if(n=Xn(gs.current),Xn(Lt.current),Co(e)){if(r=e.stateNode,n=e.memoizedProps,r[Rt]=e,(s=r.nodeValue!==n)&&(t=at,t!==null))switch(t.tag){case 3:Io(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Io(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Rt]=e,e.stateNode=r}return $e(e),null;case 13:if(te(oe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(re&&st!==null&&e.mode&1&&!(e.flags&128))ty(),Yr(),e.flags|=98560,s=!1;else if(s=Co(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(S(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(S(317));s[Rt]=e}else Yr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;$e(e),s=!1}else It!==null&&(bc(It),It=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||oe.current&1?ve===0&&(ve=3):rd())),e.updateQueue!==null&&(e.flags|=4),$e(e),null);case 4:return Zr(),xc(t,e),t===null&&ds(e.stateNode.containerInfo),$e(e),null;case 10:return Vh(e.type._context),$e(e),null;case 17:return nt(e.type)&&ma(),$e(e),null;case 19:if(te(oe),s=e.memoizedState,s===null)return $e(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Di(s,!1);else{if(ve!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=_a(t),o!==null){for(e.flags|=128,Di(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return J(oe,oe.current&1|2),e.child}t=t.sibling}s.tail!==null&&de()>ti&&(e.flags|=128,r=!0,Di(s,!1),e.lanes=4194304)}else{if(!r)if(t=_a(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Di(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!re)return $e(e),null}else 2*de()-s.renderingStartTime>ti&&n!==1073741824&&(e.flags|=128,r=!0,Di(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=de(),e.sibling=null,n=oe.current,J(oe,r?n&1|2:n&1),e):($e(e),null);case 22:case 23:return nd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?it&1073741824&&($e(e),e.subtreeFlags&6&&(e.flags|=8192)):$e(e),null;case 24:return null;case 25:return null}throw Error(S(156,e.tag))}function gS(t,e){switch($h(e),e.tag){case 1:return nt(e.type)&&ma(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Zr(),te(tt),te(je),Kh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Hh(e),null;case 13:if(te(oe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(S(340));Yr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return te(oe),null;case 4:return Zr(),null;case 10:return Vh(e.type._context),null;case 22:case 23:return nd(),null;case 24:return null;default:return null}}var Do=!1,Fe=!1,yS=typeof WeakSet=="function"?WeakSet:Set,k=null;function $r(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ue(t,e,r)}else n.current=null}function Rc(t,e,n){try{n()}catch(r){ue(t,e,r)}}var wp=!1;function vS(t,e){if(pc=ha,t=Bg(),Lh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,h=null;t:for(;;){for(var g;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(g=d.firstChild)!==null;)h=d,d=g;for(;;){if(d===t)break t;if(h===n&&++u===i&&(a=o),h===s&&++c===r&&(l=o),(g=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(mc={focusedElem:t,selectionRange:n},ha=!1,k=e;k!==null;)if(e=k,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,k=t;else for(;k!==null;){e=k;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,D=y.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?v:Tt(e.type,v),D);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(w){ue(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,k=t;break}k=e.return}return y=wp,wp=!1,y}function qi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Rc(e,n,s)}i=i.next}while(i!==r)}}function cl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Pc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Fy(t){var e=t.alternate;e!==null&&(t.alternate=null,Fy(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Rt],delete e[ps],delete e[vc],delete e[eS],delete e[tS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Vy(t){return t.tag===5||t.tag===3||t.tag===4}function Ep(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Vy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Oc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=pa));else if(r!==4&&(t=t.child,t!==null))for(Oc(t,e,n),t=t.sibling;t!==null;)Oc(t,e,n),t=t.sibling}function Lc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Lc(t,e,n),t=t.sibling;t!==null;)Lc(t,e,n),t=t.sibling}var Ae=null,kt=!1;function un(t,e,n){for(n=n.child;n!==null;)zy(t,e,n),n=n.sibling}function zy(t,e,n){if(Ot&&typeof Ot.onCommitFiberUnmount=="function")try{Ot.onCommitFiberUnmount(nl,n)}catch{}switch(n.tag){case 5:Fe||$r(n,e);case 6:var r=Ae,i=kt;Ae=null,un(t,e,n),Ae=r,kt=i,Ae!==null&&(kt?(t=Ae,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ae.removeChild(n.stateNode));break;case 18:Ae!==null&&(kt?(t=Ae,n=n.stateNode,t.nodeType===8?gu(t.parentNode,n):t.nodeType===1&&gu(t,n),us(t)):gu(Ae,n.stateNode));break;case 4:r=Ae,i=kt,Ae=n.stateNode.containerInfo,kt=!0,un(t,e,n),Ae=r,kt=i;break;case 0:case 11:case 14:case 15:if(!Fe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Rc(n,e,o),i=i.next}while(i!==r)}un(t,e,n);break;case 1:if(!Fe&&($r(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ue(n,e,a)}un(t,e,n);break;case 21:un(t,e,n);break;case 22:n.mode&1?(Fe=(r=Fe)||n.memoizedState!==null,un(t,e,n),Fe=r):un(t,e,n);break;default:un(t,e,n)}}function Sp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new yS),e.forEach(function(r){var i=NS.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function _t(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ae=a.stateNode,kt=!1;break e;case 3:Ae=a.stateNode.containerInfo,kt=!0;break e;case 4:Ae=a.stateNode.containerInfo,kt=!0;break e}a=a.return}if(Ae===null)throw Error(S(160));zy(s,o,i),Ae=null,kt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ue(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)By(e,t),e=e.sibling}function By(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(_t(e,t),Dt(t),r&4){try{qi(3,t,t.return),cl(3,t)}catch(v){ue(t,t.return,v)}try{qi(5,t,t.return)}catch(v){ue(t,t.return,v)}}break;case 1:_t(e,t),Dt(t),r&512&&n!==null&&$r(n,n.return);break;case 5:if(_t(e,t),Dt(t),r&512&&n!==null&&$r(n,n.return),t.flags&32){var i=t.stateNode;try{ss(i,"")}catch(v){ue(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&ug(i,s),ic(a,o);var u=ic(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?pg(i,d):c==="dangerouslySetInnerHTML"?dg(i,d):c==="children"?ss(i,d):Sh(i,c,d,u)}switch(a){case"input":Zu(i,s);break;case"textarea":cg(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Fr(i,!!s.multiple,g,!1):h!==!!s.multiple&&(s.defaultValue!=null?Fr(i,!!s.multiple,s.defaultValue,!0):Fr(i,!!s.multiple,s.multiple?[]:"",!1))}i[ps]=s}catch(v){ue(t,t.return,v)}}break;case 6:if(_t(e,t),Dt(t),r&4){if(t.stateNode===null)throw Error(S(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){ue(t,t.return,v)}}break;case 3:if(_t(e,t),Dt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{us(e.containerInfo)}catch(v){ue(t,t.return,v)}break;case 4:_t(e,t),Dt(t);break;case 13:_t(e,t),Dt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(ed=de())),r&4&&Sp(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Fe=(u=Fe)||c,_t(e,t),Fe=u):_t(e,t),Dt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(k=t,c=t.child;c!==null;){for(d=k=c;k!==null;){switch(h=k,g=h.child,h.tag){case 0:case 11:case 14:case 15:qi(4,h,h.return);break;case 1:$r(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(v){ue(r,n,v)}}break;case 5:$r(h,h.return);break;case 22:if(h.memoizedState!==null){Tp(d);continue}}g!==null?(g.return=h,k=g):Tp(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=fg("display",o))}catch(v){ue(t,t.return,v)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(v){ue(t,t.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:_t(e,t),Dt(t),r&4&&Sp(t);break;case 21:break;default:_t(e,t),Dt(t)}}function Dt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Vy(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ss(i,""),r.flags&=-33);var s=Ep(t);Lc(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Ep(t);Oc(t,a,o);break;default:throw Error(S(161))}}catch(l){ue(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function wS(t,e,n){k=t,jy(t)}function jy(t,e,n){for(var r=(t.mode&1)!==0;k!==null;){var i=k,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Do;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Fe;a=Do;var u=Fe;if(Do=o,(Fe=l)&&!u)for(k=i;k!==null;)o=k,l=o.child,o.tag===22&&o.memoizedState!==null?kp(i):l!==null?(l.return=o,k=l):kp(i);for(;s!==null;)k=s,jy(s),s=s.sibling;k=i,Do=a,Fe=u}_p(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,k=s):_p(t)}}function _p(t){for(;k!==null;){var e=k;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Fe||cl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Fe)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Tt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&sp(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}sp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&us(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}Fe||e.flags&512&&Pc(e)}catch(h){ue(e,e.return,h)}}if(e===t){k=null;break}if(n=e.sibling,n!==null){n.return=e.return,k=n;break}k=e.return}}function Tp(t){for(;k!==null;){var e=k;if(e===t){k=null;break}var n=e.sibling;if(n!==null){n.return=e.return,k=n;break}k=e.return}}function kp(t){for(;k!==null;){var e=k;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{cl(4,e)}catch(l){ue(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){ue(e,i,l)}}var s=e.return;try{Pc(e)}catch(l){ue(e,s,l)}break;case 5:var o=e.return;try{Pc(e)}catch(l){ue(e,o,l)}}}catch(l){ue(e,e.return,l)}if(e===t){k=null;break}var a=e.sibling;if(a!==null){a.return=e.return,k=a;break}k=e.return}}var ES=Math.ceil,Ia=on.ReactCurrentDispatcher,Jh=on.ReactCurrentOwner,vt=on.ReactCurrentBatchConfig,W=0,Ce=null,me=null,xe=0,it=0,Ur=bn(0),ve=0,Es=null,ur=0,hl=0,Zh=0,Gi=null,Je=null,ed=0,ti=1/0,Vt=null,Ca=!1,Mc=null,In=null,xo=!1,wn=null,Na=0,Qi=0,$c=null,Qo=-1,Xo=0;function Qe(){return W&6?de():Qo!==-1?Qo:Qo=de()}function Cn(t){return t.mode&1?W&2&&xe!==0?xe&-xe:rS.transition!==null?(Xo===0&&(Xo=Cg()),Xo):(t=Y,t!==0||(t=window.event,t=t===void 0?16:Og(t.type)),t):1}function Nt(t,e,n,r){if(50<Qi)throw Qi=0,$c=null,Error(S(185));bs(t,n,r),(!(W&2)||t!==Ce)&&(t===Ce&&(!(W&2)&&(hl|=n),ve===4&&pn(t,xe)),rt(t,r),n===1&&W===0&&!(e.mode&1)&&(ti=de()+500,al&&Fn()))}function rt(t,e){var n=t.callbackNode;rE(t,e);var r=ca(t,t===Ce?xe:0);if(r===0)n!==null&&Of(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Of(n),e===1)t.tag===0?nS(Ip.bind(null,t)):Jg(Ip.bind(null,t)),JE(function(){!(W&6)&&Fn()}),n=null;else{switch(Ng(r)){case 1:n=Ch;break;case 4:n=kg;break;case 16:n=ua;break;case 536870912:n=Ig;break;default:n=ua}n=Yy(n,Hy.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Hy(t,e){if(Qo=-1,Xo=0,W&6)throw Error(S(327));var n=t.callbackNode;if(Hr()&&t.callbackNode!==n)return null;var r=ca(t,t===Ce?xe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Aa(t,r);else{e=r;var i=W;W|=2;var s=Wy();(Ce!==t||xe!==e)&&(Vt=null,ti=de()+500,tr(t,e));do try{TS();break}catch(a){Ky(t,a)}while(1);Fh(),Ia.current=s,W=i,me!==null?e=0:(Ce=null,xe=0,e=ve)}if(e!==0){if(e===2&&(i=uc(t),i!==0&&(r=i,e=Uc(t,i))),e===1)throw n=Es,tr(t,0),pn(t,r),rt(t,de()),n;if(e===6)pn(t,r);else{if(i=t.current.alternate,!(r&30)&&!SS(i)&&(e=Aa(t,r),e===2&&(s=uc(t),s!==0&&(r=s,e=Uc(t,s))),e===1))throw n=Es,tr(t,0),pn(t,r),rt(t,de()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(S(345));case 2:Wn(t,Je,Vt);break;case 3:if(pn(t,r),(r&130023424)===r&&(e=ed+500-de(),10<e)){if(ca(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Qe(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=yc(Wn.bind(null,t,Je,Vt),e);break}Wn(t,Je,Vt);break;case 4:if(pn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Ct(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=de()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ES(r/1960))-r,10<r){t.timeoutHandle=yc(Wn.bind(null,t,Je,Vt),r);break}Wn(t,Je,Vt);break;case 5:Wn(t,Je,Vt);break;default:throw Error(S(329))}}}return rt(t,de()),t.callbackNode===n?Hy.bind(null,t):null}function Uc(t,e){var n=Gi;return t.current.memoizedState.isDehydrated&&(tr(t,e).flags|=256),t=Aa(t,e),t!==2&&(e=Je,Je=n,e!==null&&bc(e)),t}function bc(t){Je===null?Je=t:Je.push.apply(Je,t)}function SS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!At(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function pn(t,e){for(e&=~Zh,e&=~hl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ct(e),r=1<<n;t[n]=-1,e&=~r}}function Ip(t){if(W&6)throw Error(S(327));Hr();var e=ca(t,0);if(!(e&1))return rt(t,de()),null;var n=Aa(t,e);if(t.tag!==0&&n===2){var r=uc(t);r!==0&&(e=r,n=Uc(t,r))}if(n===1)throw n=Es,tr(t,0),pn(t,e),rt(t,de()),n;if(n===6)throw Error(S(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Wn(t,Je,Vt),rt(t,de()),null}function td(t,e){var n=W;W|=1;try{return t(e)}finally{W=n,W===0&&(ti=de()+500,al&&Fn())}}function cr(t){wn!==null&&wn.tag===0&&!(W&6)&&Hr();var e=W;W|=1;var n=vt.transition,r=Y;try{if(vt.transition=null,Y=1,t)return t()}finally{Y=r,vt.transition=n,W=e,!(W&6)&&Fn()}}function nd(){it=Ur.current,te(Ur)}function tr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,YE(n)),me!==null)for(n=me.return;n!==null;){var r=n;switch($h(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ma();break;case 3:Zr(),te(tt),te(je),Kh();break;case 5:Hh(r);break;case 4:Zr();break;case 13:te(oe);break;case 19:te(oe);break;case 10:Vh(r.type._context);break;case 22:case 23:nd()}n=n.return}if(Ce=t,me=t=Nn(t.current,null),xe=it=e,ve=0,Es=null,Zh=hl=ur=0,Je=Gi=null,Qn!==null){for(e=0;e<Qn.length;e++)if(n=Qn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Qn=null}return t}function Ky(t,e){do{var n=me;try{if(Fh(),Wo.current=ka,Ta){for(var r=ae.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ta=!1}if(lr=0,ke=ge=ae=null,Wi=!1,ys=0,Jh.current=null,n===null||n.return===null){ve=1,Es=e,me=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=xe,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=dp(o);if(g!==null){g.flags&=-257,fp(g,o,a,s,e),g.mode&1&&hp(s,u,e),e=g,l=u;var y=e.updateQueue;if(y===null){var v=new Set;v.add(l),e.updateQueue=v}else y.add(l);break e}else{if(!(e&1)){hp(s,u,e),rd();break e}l=Error(S(426))}}else if(re&&a.mode&1){var D=dp(o);if(D!==null){!(D.flags&65536)&&(D.flags|=256),fp(D,o,a,s,e),Uh(ei(l,a));break e}}s=l=ei(l,a),ve!==4&&(ve=2),Gi===null?Gi=[s]:Gi.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=Ay(s,l,e);ip(s,p);break e;case 1:a=l;var f=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(In===null||!In.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=Dy(s,a,e);ip(s,w);break e}}s=s.return}while(s!==null)}Gy(n)}catch(T){e=T,me===n&&n!==null&&(me=n=n.return);continue}break}while(1)}function Wy(){var t=Ia.current;return Ia.current=ka,t===null?ka:t}function rd(){(ve===0||ve===3||ve===2)&&(ve=4),Ce===null||!(ur&268435455)&&!(hl&268435455)||pn(Ce,xe)}function Aa(t,e){var n=W;W|=2;var r=Wy();(Ce!==t||xe!==e)&&(Vt=null,tr(t,e));do try{_S();break}catch(i){Ky(t,i)}while(1);if(Fh(),W=n,Ia.current=r,me!==null)throw Error(S(261));return Ce=null,xe=0,ve}function _S(){for(;me!==null;)qy(me)}function TS(){for(;me!==null&&!G1();)qy(me)}function qy(t){var e=Xy(t.alternate,t,it);t.memoizedProps=t.pendingProps,e===null?Gy(t):me=e,Jh.current=null}function Gy(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=gS(n,e),n!==null){n.flags&=32767,me=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ve=6,me=null;return}}else if(n=mS(n,e,it),n!==null){me=n;return}if(e=e.sibling,e!==null){me=e;return}me=e=t}while(e!==null);ve===0&&(ve=5)}function Wn(t,e,n){var r=Y,i=vt.transition;try{vt.transition=null,Y=1,kS(t,e,n,r)}finally{vt.transition=i,Y=r}return null}function kS(t,e,n,r){do Hr();while(wn!==null);if(W&6)throw Error(S(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(S(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(iE(t,s),t===Ce&&(me=Ce=null,xe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||xo||(xo=!0,Yy(ua,function(){return Hr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=vt.transition,vt.transition=null;var o=Y;Y=1;var a=W;W|=4,Jh.current=null,vS(t,n),By(n,t),HE(mc),ha=!!pc,mc=pc=null,t.current=n,wS(n),Q1(),W=a,Y=o,vt.transition=s}else t.current=n;if(xo&&(xo=!1,wn=t,Na=i),s=t.pendingLanes,s===0&&(In=null),J1(n.stateNode),rt(t,de()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ca)throw Ca=!1,t=Mc,Mc=null,t;return Na&1&&t.tag!==0&&Hr(),s=t.pendingLanes,s&1?t===$c?Qi++:(Qi=0,$c=t):Qi=0,Fn(),null}function Hr(){if(wn!==null){var t=Ng(Na),e=vt.transition,n=Y;try{if(vt.transition=null,Y=16>t?16:t,wn===null)var r=!1;else{if(t=wn,wn=null,Na=0,W&6)throw Error(S(331));var i=W;for(W|=4,k=t.current;k!==null;){var s=k,o=s.child;if(k.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(k=u;k!==null;){var c=k;switch(c.tag){case 0:case 11:case 15:qi(8,c,s)}var d=c.child;if(d!==null)d.return=c,k=d;else for(;k!==null;){c=k;var h=c.sibling,g=c.return;if(Fy(c),c===u){k=null;break}if(h!==null){h.return=g,k=h;break}k=g}}}var y=s.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var D=v.sibling;v.sibling=null,v=D}while(v!==null)}}k=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,k=o;else e:for(;k!==null;){if(s=k,s.flags&2048)switch(s.tag){case 0:case 11:case 15:qi(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,k=p;break e}k=s.return}}var f=t.current;for(k=f;k!==null;){o=k;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,k=m;else e:for(o=f;k!==null;){if(a=k,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:cl(9,a)}}catch(T){ue(a,a.return,T)}if(a===o){k=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,k=w;break e}k=a.return}}if(W=i,Fn(),Ot&&typeof Ot.onPostCommitFiberRoot=="function")try{Ot.onPostCommitFiberRoot(nl,t)}catch{}r=!0}return r}finally{Y=n,vt.transition=e}}return!1}function Cp(t,e,n){e=ei(n,e),e=Ay(t,e,1),t=kn(t,e,1),e=Qe(),t!==null&&(bs(t,1,e),rt(t,e))}function ue(t,e,n){if(t.tag===3)Cp(t,t,n);else for(;e!==null;){if(e.tag===3){Cp(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(In===null||!In.has(r))){t=ei(n,t),t=Dy(e,t,1),e=kn(e,t,1),t=Qe(),e!==null&&(bs(e,1,t),rt(e,t));break}}e=e.return}}function IS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Qe(),t.pingedLanes|=t.suspendedLanes&n,Ce===t&&(xe&n)===n&&(ve===4||ve===3&&(xe&130023424)===xe&&500>de()-ed?tr(t,0):Zh|=n),rt(t,e)}function Qy(t,e){e===0&&(t.mode&1?(e=Eo,Eo<<=1,!(Eo&130023424)&&(Eo=4194304)):e=1);var n=Qe();t=Jt(t,e),t!==null&&(bs(t,e,n),rt(t,n))}function CS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Qy(t,n)}function NS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(e),Qy(t,n)}var Xy;Xy=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||tt.current)et=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return et=!1,pS(t,e,n);et=!!(t.flags&131072)}else et=!1,re&&e.flags&1048576&&Zg(e,va,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Go(t,e),t=e.pendingProps;var i=Xr(e,je.current);jr(e,n),i=qh(null,e,r,t,i,n);var s=Gh();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,nt(r)?(s=!0,ga(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Bh(e),i.updater=ll,e.stateNode=i,i._reactInternals=e,kc(e,r,t,n),e=Nc(null,e,r,!0,s,n)):(e.tag=0,re&&s&&Mh(e),We(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Go(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=DS(r),t=Tt(r,t),i){case 0:e=Cc(null,e,r,t,n);break e;case 1:e=gp(null,e,r,t,n);break e;case 11:e=pp(null,e,r,t,n);break e;case 14:e=mp(null,e,r,Tt(r.type,t),n);break e}throw Error(S(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Tt(r,i),Cc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Tt(r,i),gp(t,e,r,i,n);case 3:e:{if(Oy(e),t===null)throw Error(S(387));r=e.pendingProps,s=e.memoizedState,i=s.element,ry(t,e),Sa(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ei(Error(S(423)),e),e=yp(t,e,r,n,i);break e}else if(r!==i){i=ei(Error(S(424)),e),e=yp(t,e,r,n,i);break e}else for(st=Tn(e.stateNode.containerInfo.firstChild),at=e,re=!0,It=null,n=ay(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Yr(),r===i){e=Zt(t,e,n);break e}We(t,e,r,n)}e=e.child}return e;case 5:return ly(e),t===null&&Sc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,gc(r,i)?o=null:s!==null&&gc(r,s)&&(e.flags|=32),Py(t,e),We(t,e,o,n),e.child;case 6:return t===null&&Sc(e),null;case 13:return Ly(t,e,n);case 4:return jh(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Jr(e,null,r,n):We(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Tt(r,i),pp(t,e,r,i,n);case 7:return We(t,e,e.pendingProps,n),e.child;case 8:return We(t,e,e.pendingProps.children,n),e.child;case 12:return We(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,J(wa,r._currentValue),r._currentValue=o,s!==null)if(At(s.value,o)){if(s.children===i.children&&!tt.current){e=Zt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Gt(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),_c(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(S(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),_c(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}We(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,jr(e,n),i=wt(i),r=r(i),e.flags|=1,We(t,e,r,n),e.child;case 14:return r=e.type,i=Tt(r,e.pendingProps),i=Tt(r.type,i),mp(t,e,r,i,n);case 15:return xy(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Tt(r,i),Go(t,e),e.tag=1,nt(r)?(t=!0,ga(e)):t=!1,jr(e,n),sy(e,r,i),kc(e,r,i,n),Nc(null,e,r,!0,t,n);case 19:return My(t,e,n);case 22:return Ry(t,e,n)}throw Error(S(156,e.tag))};function Yy(t,e){return Tg(t,e)}function AS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yt(t,e,n,r){return new AS(t,e,n,r)}function id(t){return t=t.prototype,!(!t||!t.isReactComponent)}function DS(t){if(typeof t=="function")return id(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Th)return 11;if(t===kh)return 14}return 2}function Nn(t,e){var n=t.alternate;return n===null?(n=yt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Yo(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")id(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Nr:return nr(n.children,i,s,e);case _h:o=8,i|=8;break;case Gu:return t=yt(12,n,e,i|2),t.elementType=Gu,t.lanes=s,t;case Qu:return t=yt(13,n,e,i),t.elementType=Qu,t.lanes=s,t;case Xu:return t=yt(19,n,e,i),t.elementType=Xu,t.lanes=s,t;case og:return dl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ig:o=10;break e;case sg:o=9;break e;case Th:o=11;break e;case kh:o=14;break e;case hn:o=16,r=null;break e}throw Error(S(130,t==null?t:typeof t,""))}return e=yt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function nr(t,e,n,r){return t=yt(7,t,r,e),t.lanes=n,t}function dl(t,e,n,r){return t=yt(22,t,r,e),t.elementType=og,t.lanes=n,t.stateNode={isHidden:!1},t}function ku(t,e,n){return t=yt(6,t,null,e),t.lanes=n,t}function Iu(t,e,n){return e=yt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function xS(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=su(0),this.expirationTimes=su(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=su(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function sd(t,e,n,r,i,s,o,a,l){return t=new xS(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=yt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bh(s),t}function RS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Cr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Jy(t){if(!t)return On;t=t._reactInternals;e:{if(vr(t)!==t||t.tag!==1)throw Error(S(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(nt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(S(171))}if(t.tag===1){var n=t.type;if(nt(n))return Yg(t,n,e)}return e}function Zy(t,e,n,r,i,s,o,a,l){return t=sd(n,r,!0,t,i,s,o,a,l),t.context=Jy(null),n=t.current,r=Qe(),i=Cn(n),s=Gt(r,i),s.callback=e??null,kn(n,s,i),t.current.lanes=i,bs(t,i,r),rt(t,r),t}function fl(t,e,n,r){var i=e.current,s=Qe(),o=Cn(i);return n=Jy(n),e.context===null?e.context=n:e.pendingContext=n,e=Gt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=kn(i,e,o),t!==null&&(Nt(t,i,o,s),Ko(t,i,o)),o}function Da(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Np(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function od(t,e){Np(t,e),(t=t.alternate)&&Np(t,e)}function PS(){return null}var ev=typeof reportError=="function"?reportError:function(t){console.error(t)};function ad(t){this._internalRoot=t}pl.prototype.render=ad.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(S(409));fl(t,e,null,null)};pl.prototype.unmount=ad.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;cr(function(){fl(null,t,null,null)}),e[Yt]=null}};function pl(t){this._internalRoot=t}pl.prototype.unstable_scheduleHydration=function(t){if(t){var e=xg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<fn.length&&e!==0&&e<fn[n].priority;n++);fn.splice(n,0,t),n===0&&Pg(t)}};function ld(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ml(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ap(){}function OS(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Da(o);s.call(u)}}var o=Zy(e,r,t,0,null,!1,!1,"",Ap);return t._reactRootContainer=o,t[Yt]=o.current,ds(t.nodeType===8?t.parentNode:t),cr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Da(l);a.call(u)}}var l=sd(t,0,!1,null,null,!1,!1,"",Ap);return t._reactRootContainer=l,t[Yt]=l.current,ds(t.nodeType===8?t.parentNode:t),cr(function(){fl(e,l,n,r)}),l}function gl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Da(o);a.call(l)}}fl(e,o,t,i)}else o=OS(n,e,t,i,r);return Da(o)}Ag=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Mi(e.pendingLanes);n!==0&&(Nh(e,n|1),rt(e,de()),!(W&6)&&(ti=de()+500,Fn()))}break;case 13:cr(function(){var r=Jt(t,1);if(r!==null){var i=Qe();Nt(r,t,1,i)}}),od(t,1)}};Ah=function(t){if(t.tag===13){var e=Jt(t,134217728);if(e!==null){var n=Qe();Nt(e,t,134217728,n)}od(t,134217728)}};Dg=function(t){if(t.tag===13){var e=Cn(t),n=Jt(t,e);if(n!==null){var r=Qe();Nt(n,t,e,r)}od(t,e)}};xg=function(){return Y};Rg=function(t,e){var n=Y;try{return Y=t,e()}finally{Y=n}};oc=function(t,e,n){switch(e){case"input":if(Zu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=ol(r);if(!i)throw Error(S(90));lg(r),Zu(r,i)}}}break;case"textarea":cg(t,n);break;case"select":e=n.value,e!=null&&Fr(t,!!n.multiple,e,!1)}};yg=td;vg=cr;var LS={usingClientEntryPoint:!1,Events:[Vs,Rr,ol,mg,gg,td]},xi={findFiberByHostInstance:Gn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},MS={bundleType:xi.bundleType,version:xi.version,rendererPackageName:xi.rendererPackageName,rendererConfig:xi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:on.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Sg(t),t===null?null:t.stateNode},findFiberByHostInstance:xi.findFiberByHostInstance||PS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ro=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ro.isDisabled&&Ro.supportsFiber)try{nl=Ro.inject(MS),Ot=Ro}catch{}}dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=LS;dt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ld(e))throw Error(S(200));return RS(t,e,null,n)};dt.createRoot=function(t,e){if(!ld(t))throw Error(S(299));var n=!1,r="",i=ev;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=sd(t,1,!1,null,null,n,!1,r,i),t[Yt]=e.current,ds(t.nodeType===8?t.parentNode:t),new ad(e)};dt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(S(188)):(t=Object.keys(t).join(","),Error(S(268,t)));return t=Sg(e),t=t===null?null:t.stateNode,t};dt.flushSync=function(t){return cr(t)};dt.hydrate=function(t,e,n){if(!ml(e))throw Error(S(200));return gl(null,t,e,!0,n)};dt.hydrateRoot=function(t,e,n){if(!ld(t))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=ev;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Zy(e,null,t,1,n??null,i,!1,s,o),t[Yt]=e.current,ds(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new pl(e)};dt.render=function(t,e,n){if(!ml(e))throw Error(S(200));return gl(null,t,e,!1,n)};dt.unmountComponentAtNode=function(t){if(!ml(t))throw Error(S(40));return t._reactRootContainer?(cr(function(){gl(null,null,t,!1,function(){t._reactRootContainer=null,t[Yt]=null})}),!0):!1};dt.unstable_batchedUpdates=td;dt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ml(n))throw Error(S(200));if(t==null||t._reactInternals===void 0)throw Error(S(38));return gl(t,e,n,!1,r)};dt.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=dt})(P1);var Dp=Ku;Hu.createRoot=Dp.createRoot,Hu.hydrateRoot=Dp.hydrateRoot;const ud={level:null,playing:!1,hideButton:!1,text:"Start",viewLeader:!0,objective:{Waldo:!1,Odlaw:!1,Wizard:!1},isLoading:!0,coordinatesData:null,leaderBoardData:null,personalBest:null},tv=X.createContext(ud),nv=X.createContext(()=>null),$S=({children:t})=>{const[e,n]=X.useReducer(US,ud);return O(tv.Provider,{value:e,children:O(nv.Provider,{value:n,children:t})})},an=()=>X.useContext(tv),mi=()=>X.useContext(nv),US=(t=ud,e)=>{switch(e.type){case"SET_DATA":return{...t,isLoading:!1,coordinatesData:e.payload.coordinatesData,leaderBoardData:e.payload.leaderBoardData,personalBest:e.payload.personalBest};case"SET_LEVEL":return{...t,level:e.payload,objective:{Waldo:!1,Odlaw:!1,Wizard:!1},playing:!1,hideButton:!1,text:"Start",viewLeader:!1};case"OPEN_LEADERBOARD":return{...t,viewLeader:!0,level:null};case"SET_TEXT":return{...t,text:e.payload};case"SET_PLAYING":return{...t,playing:e.payload};case"SET_HIDE_BUTTON":return{...t,hideButton:e.payload};case"SET_OBJECTIVE":return{...t,objective:e.payload};case"SET_NEXT_LEVEL":return{...t,level:e.payload,objective:{Waldo:!1,Odlaw:!1,Wizard:!1},playing:!1,hideButton:!1,text:"Start"};case"SET_GAME_OVER":return{...t,level:null,viewLeader:!0,objective:{Waldo:!1,Odlaw:!1,Wizard:!1},playing:!1,hideButton:!1,text:"Start"};default:return t}};/**
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
 */const rv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},bS=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},iv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let h=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(h=64)),r.push(n[c],n[d],n[h],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(rv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):bS(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw new FS;const h=s<<2|a>>4;if(r.push(h),u!==64){const g=a<<4&240|u>>2;if(r.push(g),d!==64){const y=u<<6&192|d;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class FS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const VS=function(t){const e=rv(t);return iv.encodeByteArray(e,!0)},xa=function(t){return VS(t).replace(/\./g,"")},sv=function(t){try{return iv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function zS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const BS=()=>zS().__FIREBASE_DEFAULTS__,jS=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},HS=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&sv(t[1]);return e&&JSON.parse(e)},cd=()=>{try{return BS()||jS()||HS()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ov=t=>{var e,n;return(n=(e=cd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},KS=t=>{const e=ov(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},WS=()=>{var t;return(t=cd())===null||t===void 0?void 0:t.config},av=t=>{var e;return(e=cd())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class qS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function GS(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[xa(JSON.stringify(n)),xa(JSON.stringify(o)),a].join(".")}/**
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
 */function He(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function QS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(He())}function XS(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function YS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function JS(){const t=He();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ZS(){try{return typeof indexedDB=="object"}catch{return!1}}function e_(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const t_="FirebaseError";class ln extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=t_,Object.setPrototypeOf(this,ln.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Bs.prototype.create)}}class Bs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?n_(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ln(i,a,r)}}function n_(t,e){return t.replace(r_,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const r_=/\{\$([^}]+)}/g;function i_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ra(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(xp(s)&&xp(o)){if(!Ra(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function xp(t){return t!==null&&typeof t=="object"}/**
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
 */function js(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function s_(t,e){const n=new o_(t,e);return n.subscribe.bind(n)}class o_{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");a_(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Cu),i.error===void 0&&(i.error=Cu),i.complete===void 0&&(i.complete=Cu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function a_(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Cu(){}/**
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
 */function Oe(t){return t&&t._delegate?t._delegate:t}class hr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const qn="[DEFAULT]";/**
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
 */class l_{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new qS;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(c_(e))try{this.getOrInitializeService({instanceIdentifier:qn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=qn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qn){return this.instances.has(e)}getOptions(e=qn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:u_(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=qn){return this.component?this.component.multipleInstances?e:qn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function u_(t){return t===qn?void 0:t}function c_(t){return t.instantiationMode==="EAGER"}/**
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
 */class h_{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new l_(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var q;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(q||(q={}));const d_={debug:q.DEBUG,verbose:q.VERBOSE,info:q.INFO,warn:q.WARN,error:q.ERROR,silent:q.SILENT},f_=q.INFO,p_={[q.DEBUG]:"log",[q.VERBOSE]:"log",[q.INFO]:"info",[q.WARN]:"warn",[q.ERROR]:"error"},m_=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=p_[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class hd{constructor(e){this.name=e,this._logLevel=f_,this._logHandler=m_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?d_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,q.DEBUG,...e),this._logHandler(this,q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,q.VERBOSE,...e),this._logHandler(this,q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,q.INFO,...e),this._logHandler(this,q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,q.WARN,...e),this._logHandler(this,q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,q.ERROR,...e),this._logHandler(this,q.ERROR,...e)}}const g_=(t,e)=>e.some(n=>t instanceof n);let Rp,Pp;function y_(){return Rp||(Rp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function v_(){return Pp||(Pp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const lv=new WeakMap,Fc=new WeakMap,uv=new WeakMap,Nu=new WeakMap,dd=new WeakMap;function w_(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(An(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&lv.set(n,t)}).catch(()=>{}),dd.set(e,t),e}function E_(t){if(Fc.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Fc.set(t,e)}let Vc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Fc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||uv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return An(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function S_(t){Vc=t(Vc)}function __(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Au(this),e,...n);return uv.set(r,e.sort?e.sort():[e]),An(r)}:v_().includes(t)?function(...e){return t.apply(Au(this),e),An(lv.get(this))}:function(...e){return An(t.apply(Au(this),e))}}function T_(t){return typeof t=="function"?__(t):(t instanceof IDBTransaction&&E_(t),g_(t,y_())?new Proxy(t,Vc):t)}function An(t){if(t instanceof IDBRequest)return w_(t);if(Nu.has(t))return Nu.get(t);const e=T_(t);return e!==t&&(Nu.set(t,e),dd.set(e,t)),e}const Au=t=>dd.get(t);function k_(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=An(o);return r&&o.addEventListener("upgradeneeded",l=>{r(An(o.result),l.oldVersion,l.newVersion,An(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const I_=["get","getKey","getAll","getAllKeys","count"],C_=["put","add","delete","clear"],Du=new Map;function Op(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Du.get(e))return Du.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=C_.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||I_.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Du.set(e,s),s}S_(t=>({...t,get:(e,n,r)=>Op(e,n)||t.get(e,n,r),has:(e,n)=>!!Op(e,n)||t.has(e,n)}));/**
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
 */class N_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(A_(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function A_(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const zc="@firebase/app",Lp="0.9.5";/**
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
 */const dr=new hd("@firebase/app"),D_="@firebase/app-compat",x_="@firebase/analytics-compat",R_="@firebase/analytics",P_="@firebase/app-check-compat",O_="@firebase/app-check",L_="@firebase/auth",M_="@firebase/auth-compat",$_="@firebase/database",U_="@firebase/database-compat",b_="@firebase/functions",F_="@firebase/functions-compat",V_="@firebase/installations",z_="@firebase/installations-compat",B_="@firebase/messaging",j_="@firebase/messaging-compat",H_="@firebase/performance",K_="@firebase/performance-compat",W_="@firebase/remote-config",q_="@firebase/remote-config-compat",G_="@firebase/storage",Q_="@firebase/storage-compat",X_="@firebase/firestore",Y_="@firebase/firestore-compat",J_="firebase",Z_="9.18.0";/**
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
 */const Bc="[DEFAULT]",eT={[zc]:"fire-core",[D_]:"fire-core-compat",[R_]:"fire-analytics",[x_]:"fire-analytics-compat",[O_]:"fire-app-check",[P_]:"fire-app-check-compat",[L_]:"fire-auth",[M_]:"fire-auth-compat",[$_]:"fire-rtdb",[U_]:"fire-rtdb-compat",[b_]:"fire-fn",[F_]:"fire-fn-compat",[V_]:"fire-iid",[z_]:"fire-iid-compat",[B_]:"fire-fcm",[j_]:"fire-fcm-compat",[H_]:"fire-perf",[K_]:"fire-perf-compat",[W_]:"fire-rc",[q_]:"fire-rc-compat",[G_]:"fire-gcs",[Q_]:"fire-gcs-compat",[X_]:"fire-fst",[Y_]:"fire-fst-compat","fire-js":"fire-js",[J_]:"fire-js-all"};/**
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
 */const Pa=new Map,jc=new Map;function tT(t,e){try{t.container.addComponent(e)}catch(n){dr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ni(t){const e=t.name;if(jc.has(e))return dr.debug(`There were multiple attempts to register component ${e}.`),!1;jc.set(e,t);for(const n of Pa.values())tT(n,t);return!0}function fd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const nT={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Dn=new Bs("app","Firebase",nT);/**
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
 */class rT{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new hr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Dn.create("app-deleted",{appName:this._name})}}/**
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
 */const Hs=Z_;function cv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Bc,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Dn.create("bad-app-name",{appName:String(i)});if(n||(n=WS()),!n)throw Dn.create("no-options");const s=Pa.get(i);if(s){if(Ra(n,s.options)&&Ra(r,s.config))return s;throw Dn.create("duplicate-app",{appName:i})}const o=new h_(i);for(const l of jc.values())o.addComponent(l);const a=new rT(n,r,o);return Pa.set(i,a),a}function hv(t=Bc){const e=Pa.get(t);if(!e&&t===Bc)return cv();if(!e)throw Dn.create("no-app",{appName:t});return e}function xn(t,e,n){var r;let i=(r=eT[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),dr.warn(a.join(" "));return}ni(new hr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const iT="firebase-heartbeat-database",sT=1,Ss="firebase-heartbeat-store";let xu=null;function dv(){return xu||(xu=k_(iT,sT,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ss)}}}).catch(t=>{throw Dn.create("idb-open",{originalErrorMessage:t.message})})),xu}async function oT(t){try{return(await dv()).transaction(Ss).objectStore(Ss).get(fv(t))}catch(e){if(e instanceof ln)dr.warn(e.message);else{const n=Dn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});dr.warn(n.message)}}}async function Mp(t,e){try{const r=(await dv()).transaction(Ss,"readwrite");return await r.objectStore(Ss).put(e,fv(t)),r.done}catch(n){if(n instanceof ln)dr.warn(n.message);else{const r=Dn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});dr.warn(r.message)}}}function fv(t){return`${t.name}!${t.options.appId}`}/**
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
 */const aT=1024,lT=30*24*60*60*1e3;class uT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new hT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=$p();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=lT}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=$p(),{heartbeatsToSend:n,unsentEntries:r}=cT(this._heartbeatsCache.heartbeats),i=xa(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function $p(){return new Date().toISOString().substring(0,10)}function cT(t,e=aT){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Up(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Up(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class hT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ZS()?e_().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await oT(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Mp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Mp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Up(t){return xa(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function dT(t){ni(new hr("platform-logger",e=>new N_(e),"PRIVATE")),ni(new hr("heartbeat",e=>new uT(e),"PRIVATE")),xn(zc,Lp,t),xn(zc,Lp,"esm2017"),xn("fire-js","")}dT("");var fT=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},A,pd=pd||{},b=fT||self;function Oa(){}function yl(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Ks(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function pT(t){return Object.prototype.hasOwnProperty.call(t,Ru)&&t[Ru]||(t[Ru]=++mT)}var Ru="closure_uid_"+(1e9*Math.random()>>>0),mT=0;function gT(t,e,n){return t.call.apply(t.bind,arguments)}function yT(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function ze(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ze=gT:ze=yT,ze.apply(null,arguments)}function Po(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Le(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Vn(){this.s=this.s,this.o=this.o}var vT=0;Vn.prototype.s=!1;Vn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),vT!=0)&&pT(this)};Vn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const pv=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function md(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function bp(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(yl(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Be(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Be.prototype.h=function(){this.defaultPrevented=!0};var wT=function(){if(!b.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{b.addEventListener("test",Oa,e),b.removeEventListener("test",Oa,e)}catch{}return t}();function La(t){return/^[\s\xa0]*$/.test(t)}var Fp=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Pu(t,e){return t<e?-1:t>e?1:0}function vl(){var t=b.navigator;return t&&(t=t.userAgent)?t:""}function Pt(t){return vl().indexOf(t)!=-1}function gd(t){return gd[" "](t),t}gd[" "]=Oa;function ET(t){var e=TT;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var ST=Pt("Opera"),ri=Pt("Trident")||Pt("MSIE"),mv=Pt("Edge"),Hc=mv||ri,gv=Pt("Gecko")&&!(vl().toLowerCase().indexOf("webkit")!=-1&&!Pt("Edge"))&&!(Pt("Trident")||Pt("MSIE"))&&!Pt("Edge"),_T=vl().toLowerCase().indexOf("webkit")!=-1&&!Pt("Edge");function yv(){var t=b.document;return t?t.documentMode:void 0}var Ma;e:{var Ou="",Lu=function(){var t=vl();if(gv)return/rv:([^\);]+)(\)|;)/.exec(t);if(mv)return/Edge\/([\d\.]+)/.exec(t);if(ri)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(_T)return/WebKit\/(\S+)/.exec(t);if(ST)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Lu&&(Ou=Lu?Lu[1]:""),ri){var Mu=yv();if(Mu!=null&&Mu>parseFloat(Ou)){Ma=String(Mu);break e}}Ma=Ou}var TT={};function kT(){return ET(function(){let t=0;const e=Fp(String(Ma)).split("."),n=Fp("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=Pu(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Pu(i[2].length==0,s[2].length==0)||Pu(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var Kc;if(b.document&&ri){var Vp=yv();Kc=Vp||parseInt(Ma,10)||void 0}else Kc=void 0;var IT=Kc;function _s(t,e){if(Be.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(gv){e:{try{gd(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:CT[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&_s.X.h.call(this)}}Le(_s,Be);var CT={2:"touch",3:"pen",4:"mouse"};_s.prototype.h=function(){_s.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ws="closure_listenable_"+(1e6*Math.random()|0),NT=0;function AT(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++NT,this.ba=this.ea=!1}function wl(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function yd(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function vv(t){const e={};for(const n in t)e[n]=t[n];return e}const zp="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function wv(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<zp.length;s++)n=zp[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function El(t){this.src=t,this.g={},this.h=0}El.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=qc(t,e,r,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new AT(e,this.src,s,!!r,i),e.ea=n,t.push(e)),e};function Wc(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=pv(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(wl(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function qc(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}var vd="closure_lm_"+(1e6*Math.random()|0),$u={};function Ev(t,e,n,r,i){if(r&&r.once)return _v(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Ev(t,e[s],n,r,i);return null}return n=Sd(n),t&&t[Ws]?t.N(e,n,Ks(r)?!!r.capture:!!r,i):Sv(t,e,n,!1,r,i)}function Sv(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Ks(i)?!!i.capture:!!i,a=Ed(t);if(a||(t[vd]=a=new El(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=DT(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)wT||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(kv(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function DT(){function t(n){return e.call(t.src,t.listener,n)}const e=xT;return t}function _v(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)_v(t,e[s],n,r,i);return null}return n=Sd(n),t&&t[Ws]?t.O(e,n,Ks(r)?!!r.capture:!!r,i):Sv(t,e,n,!0,r,i)}function Tv(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Tv(t,e[s],n,r,i);else r=Ks(r)?!!r.capture:!!r,n=Sd(n),t&&t[Ws]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=qc(s,n,r,i),-1<n&&(wl(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Ed(t))&&(e=t.g[e.toString()],t=-1,e&&(t=qc(e,n,r,i)),(n=-1<t?e[t]:null)&&wd(n))}function wd(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Ws])Wc(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(kv(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Ed(e))?(Wc(n,t),n.h==0&&(n.src=null,e[vd]=null)):wl(t)}}}function kv(t){return t in $u?$u[t]:$u[t]="on"+t}function xT(t,e){if(t.ba)t=!0;else{e=new _s(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&wd(t),t=n.call(r,e)}return t}function Ed(t){return t=t[vd],t instanceof El?t:null}var Uu="__closure_events_fn_"+(1e9*Math.random()>>>0);function Sd(t){return typeof t=="function"?t:(t[Uu]||(t[Uu]=function(e){return t.handleEvent(e)}),t[Uu])}function Ne(){Vn.call(this),this.i=new El(this),this.P=this,this.I=null}Le(Ne,Vn);Ne.prototype[Ws]=!0;Ne.prototype.removeEventListener=function(t,e,n,r){Tv(this,t,e,n,r)};function Re(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new Be(e,t);else if(e instanceof Be)e.target=e.target||t;else{var i=e;e=new Be(r,t),wv(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Oo(o,r,!0,e)&&i}if(o=e.g=t,i=Oo(o,r,!0,e)&&i,i=Oo(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Oo(o,r,!1,e)&&i}Ne.prototype.M=function(){if(Ne.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)wl(n[r]);delete t.g[e],t.h--}}this.I=null};Ne.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ne.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Oo(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&Wc(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var _d=b.JSON.stringify;function RT(){var t=Nv;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class PT{constructor(){this.h=this.g=null}add(e,n){const r=Iv.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Iv=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new OT,t=>t.reset());class OT{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function LT(t){b.setTimeout(()=>{throw t},0)}function Cv(t,e){Gc||MT(),Qc||(Gc(),Qc=!0),Nv.add(t,e)}var Gc;function MT(){var t=b.Promise.resolve(void 0);Gc=function(){t.then($T)}}var Qc=!1,Nv=new PT;function $T(){for(var t;t=RT();){try{t.h.call(t.g)}catch(n){LT(n)}var e=Iv;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Qc=!1}function Sl(t,e){Ne.call(this),this.h=t||1,this.g=e||b,this.j=ze(this.lb,this),this.l=Date.now()}Le(Sl,Ne);A=Sl.prototype;A.ca=!1;A.R=null;A.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Re(this,"tick"),this.ca&&(Td(this),this.start()))}};A.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Td(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}A.M=function(){Sl.X.M.call(this),Td(this),delete this.g};function kd(t,e,n){if(typeof t=="function")n&&(t=ze(t,n));else if(t&&typeof t.handleEvent=="function")t=ze(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:b.setTimeout(t,e||0)}function Av(t){t.g=kd(()=>{t.g=null,t.i&&(t.i=!1,Av(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class UT extends Vn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Av(this)}M(){super.M(),this.g&&(b.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ts(t){Vn.call(this),this.h=t,this.g={}}Le(Ts,Vn);var Bp=[];function Dv(t,e,n,r){Array.isArray(n)||(n&&(Bp[0]=n.toString()),n=Bp);for(var i=0;i<n.length;i++){var s=Ev(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function xv(t){yd(t.g,function(e,n){this.g.hasOwnProperty(n)&&wd(e)},t),t.g={}}Ts.prototype.M=function(){Ts.X.M.call(this),xv(this)};Ts.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function _l(){this.g=!0}_l.prototype.Aa=function(){this.g=!1};function bT(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var d=c.split("_");o=2<=d.length&&d[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function FT(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function br(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+zT(t,n)+(r?" "+r:"")})}function VT(t,e){t.info(function(){return"TIMEOUT: "+e})}_l.prototype.info=function(){};function zT(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return _d(n)}catch{return e}}var wr={},jp=null;function Tl(){return jp=jp||new Ne}wr.Pa="serverreachability";function Rv(t){Be.call(this,wr.Pa,t)}Le(Rv,Be);function ks(t){const e=Tl();Re(e,new Rv(e))}wr.STAT_EVENT="statevent";function Pv(t,e){Be.call(this,wr.STAT_EVENT,t),this.stat=e}Le(Pv,Be);function Ge(t){const e=Tl();Re(e,new Pv(e,t))}wr.Qa="timingevent";function Ov(t,e){Be.call(this,wr.Qa,t),this.size=e}Le(Ov,Be);function qs(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return b.setTimeout(function(){t()},e)}var kl={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Lv={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Id(){}Id.prototype.h=null;function Hp(t){return t.h||(t.h=t.i())}function Mv(){}var Gs={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Cd(){Be.call(this,"d")}Le(Cd,Be);function Nd(){Be.call(this,"c")}Le(Nd,Be);var Xc;function Il(){}Le(Il,Id);Il.prototype.g=function(){return new XMLHttpRequest};Il.prototype.i=function(){return{}};Xc=new Il;function Qs(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new Ts(this),this.O=BT,t=Hc?125:void 0,this.T=new Sl(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new $v}function $v(){this.i=null,this.g="",this.h=!1}var BT=45e3,Yc={},$a={};A=Qs.prototype;A.setTimeout=function(t){this.O=t};function Jc(t,e,n){t.K=1,t.v=Nl(en(e)),t.s=n,t.P=!0,Uv(t,null)}function Uv(t,e){t.F=Date.now(),Xs(t),t.A=en(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),Kv(n.i,"t",r),t.C=0,n=t.l.H,t.h=new $v,t.g=d0(t.l,n?e:null,!t.s),0<t.N&&(t.L=new UT(ze(t.La,t,t.g),t.N)),Dv(t.S,t.g,"readystatechange",t.ib),e=t.H?vv(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),ks(),bT(t.j,t.u,t.A,t.m,t.U,t.s)}A.ib=function(t){t=t.target;const e=this.L;e&&Kt(t)==3?e.l():this.La(t)};A.La=function(t){try{if(t==this.g)e:{const c=Kt(this.g);var e=this.g.Ea();const d=this.g.aa();if(!(3>c)&&(c!=3||Hc||this.g&&(this.h.h||this.g.fa()||Gp(this.g)))){this.I||c!=4||e==7||(e==8||0>=d?ks(3):ks(2)),Cl(this);var n=this.g.aa();this.Y=n;t:if(bv(this)){var r=Gp(this.g);t="";var i=r.length,s=Kt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Yn(this),Xi(this);var o="";break t}this.h.i=new b.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,FT(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!La(a)){var u=a;break t}}u=null}if(n=u)br(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Zc(this,n);else{this.i=!1,this.o=3,Ge(12),Yn(this),Xi(this);break e}}this.P?(Fv(this,c,o),Hc&&this.i&&c==3&&(Dv(this.S,this.T,"tick",this.hb),this.T.start())):(br(this.j,this.m,o,null),Zc(this,o)),c==4&&Yn(this),this.i&&!this.I&&(c==4?l0(this.l,this):(this.i=!1,Xs(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ge(12)):(this.o=0,Ge(13)),Yn(this),Xi(this)}}}catch{}finally{}};function bv(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Fv(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=jT(t,n),i==$a){e==4&&(t.o=4,Ge(14),r=!1),br(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Yc){t.o=4,Ge(15),br(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else br(t.j,t.m,i,null),Zc(t,i);bv(t)&&i!=$a&&i!=Yc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Ge(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ld(e),e.K=!0,Ge(11))):(br(t.j,t.m,n,"[Invalid Chunked Response]"),Yn(t),Xi(t))}A.hb=function(){if(this.g){var t=Kt(this.g),e=this.g.fa();this.C<e.length&&(Cl(this),Fv(this,t,e),this.i&&t!=4&&Xs(this))}};function jT(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?$a:(n=Number(e.substring(n,r)),isNaN(n)?Yc:(r+=1,r+n>e.length?$a:(e=e.substr(r,n),t.C=r+n,e)))}A.cancel=function(){this.I=!0,Yn(this)};function Xs(t){t.V=Date.now()+t.O,Vv(t,t.O)}function Vv(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=qs(ze(t.gb,t),e)}function Cl(t){t.B&&(b.clearTimeout(t.B),t.B=null)}A.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(VT(this.j,this.A),this.K!=2&&(ks(),Ge(17)),Yn(this),this.o=2,Xi(this)):Vv(this,this.V-t)};function Xi(t){t.l.G==0||t.I||l0(t.l,t)}function Yn(t){Cl(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Td(t.T),xv(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Zc(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||eh(n.h,t))){if(!t.J&&eh(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Fa(n),xl(n);else break e;Od(n),Ge(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=qs(ze(n.cb,n),6e3));if(1>=Gv(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Jn(n,11)}else if((t.J||n.g==t)&&Fa(n),!La(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const c=u[3];c!=null&&(n.ma=c,n.j.info("VER="+n.ma));const d=u[4];d!=null&&(n.Ca=d,n.j.info("SVER="+n.Ca));const h=u[5];h!=null&&typeof h=="number"&&0<h&&(r=1.5*h,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const y=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.h;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Ad(s,s.h),s.h=null))}if(r.D){const v=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.za=v,ie(r.F,r.D,v))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=h0(r,r.H?r.ka:null,r.V),o.J){Qv(r.h,o);var a=o,l=r.J;l&&a.setTimeout(l),a.B&&(Cl(a),Xs(a)),r.g=o}else o0(r);0<n.i.length&&Rl(n)}else u[0]!="stop"&&u[0]!="close"||Jn(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Jn(n,7):Pd(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}ks(4)}catch{}}function HT(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(yl(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function KT(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(yl(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function zv(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(yl(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=KT(t),r=HT(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var Bv=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function WT(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function rr(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof rr){this.h=e!==void 0?e:t.h,Ua(this,t.j),this.s=t.s,this.g=t.g,ba(this,t.m),this.l=t.l,e=t.i;var n=new Is;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Kp(this,n),this.o=t.o}else t&&(n=String(t).match(Bv))?(this.h=!!e,Ua(this,n[1]||"",!0),this.s=Ui(n[2]||""),this.g=Ui(n[3]||"",!0),ba(this,n[4]),this.l=Ui(n[5]||"",!0),Kp(this,n[6]||"",!0),this.o=Ui(n[7]||"")):(this.h=!!e,this.i=new Is(null,this.h))}rr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(bi(e,Wp,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(bi(e,Wp,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(bi(n,n.charAt(0)=="/"?QT:GT,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",bi(n,YT)),t.join("")};function en(t){return new rr(t)}function Ua(t,e,n){t.j=n?Ui(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ba(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Kp(t,e,n){e instanceof Is?(t.i=e,JT(t.i,t.h)):(n||(e=bi(e,XT)),t.i=new Is(e,t.h))}function ie(t,e,n){t.i.set(e,n)}function Nl(t){return ie(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ui(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function bi(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,qT),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function qT(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Wp=/[#\/\?@]/g,GT=/[#\?:]/g,QT=/[#\?]/g,XT=/[#\?@]/g,YT=/#/g;function Is(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function zn(t){t.g||(t.g=new Map,t.h=0,t.i&&WT(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}A=Is.prototype;A.add=function(t,e){zn(this),this.i=null,t=gi(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function jv(t,e){zn(t),e=gi(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Hv(t,e){return zn(t),e=gi(t,e),t.g.has(e)}A.forEach=function(t,e){zn(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};A.oa=function(){zn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};A.W=function(t){zn(this);let e=[];if(typeof t=="string")Hv(this,t)&&(e=e.concat(this.g.get(gi(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};A.set=function(t,e){return zn(this),this.i=null,t=gi(this,t),Hv(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};A.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Kv(t,e,n){jv(t,e),0<n.length&&(t.i=null,t.g.set(gi(t,e),md(n)),t.h+=n.length)}A.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function gi(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function JT(t,e){e&&!t.j&&(zn(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(jv(this,r),Kv(this,i,n))},t)),t.j=e}var ZT=class{constructor(e,n){this.h=e,this.g=n}};function Wv(t){this.l=t||ek,b.PerformanceNavigationTiming?(t=b.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(b.g&&b.g.Ga&&b.g.Ga()&&b.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var ek=10;function qv(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Gv(t){return t.h?1:t.g?t.g.size:0}function eh(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Ad(t,e){t.g?t.g.add(e):t.h=e}function Qv(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Wv.prototype.cancel=function(){if(this.i=Xv(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Xv(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return md(t.i)}function Dd(){}Dd.prototype.stringify=function(t){return b.JSON.stringify(t,void 0)};Dd.prototype.parse=function(t){return b.JSON.parse(t,void 0)};function tk(){this.g=new Dd}function nk(t,e,n){const r=n||"";try{zv(t,function(i,s){let o=i;Ks(i)&&(o=_d(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function rk(t,e){const n=new _l;if(b.Image){const r=new Image;r.onload=Po(Lo,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Po(Lo,n,r,"TestLoadImage: error",!1,e),r.onabort=Po(Lo,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Po(Lo,n,r,"TestLoadImage: timeout",!1,e),b.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Lo(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Ys(t){this.l=t.ac||null,this.j=t.jb||!1}Le(Ys,Id);Ys.prototype.g=function(){return new Al(this.l,this.j)};Ys.prototype.i=function(t){return function(){return t}}({});function Al(t,e){Ne.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=xd,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Le(Al,Ne);var xd=0;A=Al.prototype;A.open=function(t,e){if(this.readyState!=xd)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Cs(this)};A.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||b).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};A.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Js(this)),this.readyState=xd};A.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Cs(this)),this.g&&(this.readyState=3,Cs(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof b.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Yv(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function Yv(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}A.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Js(this):Cs(this),this.readyState==3&&Yv(this)}};A.Va=function(t){this.g&&(this.response=this.responseText=t,Js(this))};A.Ua=function(t){this.g&&(this.response=t,Js(this))};A.ga=function(){this.g&&Js(this)};function Js(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Cs(t)}A.setRequestHeader=function(t,e){this.v.append(t,e)};A.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};A.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Cs(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Al.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var ik=b.JSON.parse;function ce(t){Ne.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Jv,this.K=this.L=!1}Le(ce,Ne);var Jv="",sk=/^https?$/i,ok=["POST","PUT"];A=ce.prototype;A.Ka=function(t){this.L=t};A.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Xc.g(),this.C=this.u?Hp(this.u):Hp(Xc),this.g.onreadystatechange=ze(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){qp(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=b.FormData&&t instanceof b.FormData,!(0<=pv(ok,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{t0(this),0<this.B&&((this.K=ak(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ze(this.qa,this)):this.A=kd(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){qp(this,s)}};function ak(t){return ri&&kT()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}A.qa=function(){typeof pd<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Re(this,"timeout"),this.abort(8))};function qp(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Zv(t),Dl(t)}function Zv(t){t.D||(t.D=!0,Re(t,"complete"),Re(t,"error"))}A.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Re(this,"complete"),Re(this,"abort"),Dl(this))};A.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Dl(this,!0)),ce.X.M.call(this)};A.Ha=function(){this.s||(this.F||this.v||this.l?e0(this):this.fb())};A.fb=function(){e0(this)};function e0(t){if(t.h&&typeof pd<"u"&&(!t.C[1]||Kt(t)!=4||t.aa()!=2)){if(t.v&&Kt(t)==4)kd(t.Ha,0,t);else if(Re(t,"readystatechange"),Kt(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(Bv)[1]||null;if(!i&&b.self&&b.self.location){var s=b.self.location.protocol;i=s.substr(0,s.length-1)}r=!sk.test(i?i.toLowerCase():"")}n=r}if(n)Re(t,"complete"),Re(t,"success");else{t.m=6;try{var o=2<Kt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Zv(t)}}finally{Dl(t)}}}}function Dl(t,e){if(t.g){t0(t);const n=t.g,r=t.C[0]?Oa:null;t.g=null,t.C=null,e||Re(t,"ready");try{n.onreadystatechange=r}catch{}}}function t0(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(b.clearTimeout(t.A),t.A=null)}function Kt(t){return t.g?t.g.readyState:0}A.aa=function(){try{return 2<Kt(this)?this.g.status:-1}catch{return-1}};A.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};A.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),ik(e)}};function Gp(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Jv:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}A.Ea=function(){return this.m};A.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function n0(t){let e="";return yd(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Rd(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=n0(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ie(t,e,n))}function Ri(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function r0(t){this.Ca=0,this.i=[],this.j=new _l,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Ri("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Ri("baseRetryDelayMs",5e3,t),this.bb=Ri("retryDelaySeedMs",1e4,t),this.$a=Ri("forwardChannelMaxRetries",2,t),this.ta=Ri("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Wv(t&&t.concurrentRequestLimit),this.Fa=new tk,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}A=r0.prototype;A.ma=8;A.G=1;function Pd(t){if(i0(t),t.G==3){var e=t.U++,n=en(t.F);ie(n,"SID",t.I),ie(n,"RID",e),ie(n,"TYPE","terminate"),Zs(t,n),e=new Qs(t,t.j,e,void 0),e.K=2,e.v=Nl(en(n)),n=!1,b.navigator&&b.navigator.sendBeacon&&(n=b.navigator.sendBeacon(e.v.toString(),"")),!n&&b.Image&&(new Image().src=e.v,n=!0),n||(e.g=d0(e.l,null),e.g.da(e.v)),e.F=Date.now(),Xs(e)}c0(t)}function xl(t){t.g&&(Ld(t),t.g.cancel(),t.g=null)}function i0(t){xl(t),t.u&&(b.clearTimeout(t.u),t.u=null),Fa(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&b.clearTimeout(t.m),t.m=null)}function Rl(t){qv(t.h)||t.m||(t.m=!0,Cv(t.Ja,t),t.C=0)}function lk(t,e){return Gv(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=qs(ze(t.Ja,t,e),u0(t,t.C)),t.C++,!0)}A.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Qs(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=vv(s),wv(s,this.S)):s=this.S),this.o!==null||this.N||(i.H=s,s=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=s0(this,i,e),n=en(this.F),ie(n,"RID",t),ie(n,"CVER",22),this.D&&ie(n,"X-HTTP-Session-Id",this.D),Zs(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(n0(s)))+"&"+e:this.o&&Rd(n,this.o,s)),Ad(this.h,i),this.Ya&&ie(n,"TYPE","init"),this.O?(ie(n,"$req",e),ie(n,"SID","null"),i.Z=!0,Jc(i,n,null)):Jc(i,n,e),this.G=2}}else this.G==3&&(t?Qp(this,t):this.i.length==0||qv(this.h)||Qp(this))};function Qp(t,e){var n;e?n=e.m:n=t.U++;const r=en(t.F);ie(r,"SID",t.I),ie(r,"RID",n),ie(r,"AID",t.T),Zs(t,r),t.o&&t.s&&Rd(r,t.o,t.s),n=new Qs(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=s0(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Ad(t.h,n),Jc(n,r,e)}function Zs(t,e){t.ia&&yd(t.ia,function(n,r){ie(e,r,n)}),t.l&&zv({},function(n,r){ie(e,r,n)})}function s0(t,e,n){n=Math.min(t.i.length,n);var r=t.l?ze(t.l.Ra,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{nk(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function o0(t){t.g||t.u||(t.Z=1,Cv(t.Ia,t),t.A=0)}function Od(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=qs(ze(t.Ia,t),u0(t,t.A)),t.A++,!0)}A.Ia=function(){if(this.u=null,a0(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=qs(ze(this.eb,this),t)}};A.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Ge(10),xl(this),a0(this))};function Ld(t){t.B!=null&&(b.clearTimeout(t.B),t.B=null)}function a0(t){t.g=new Qs(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=en(t.sa);ie(e,"RID","rpc"),ie(e,"SID",t.I),ie(e,"CI",t.L?"0":"1"),ie(e,"AID",t.T),ie(e,"TYPE","xmlhttp"),Zs(t,e),t.o&&t.s&&Rd(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Nl(en(e)),n.s=null,n.P=!0,Uv(n,t)}A.cb=function(){this.v!=null&&(this.v=null,xl(this),Od(this),Ge(19))};function Fa(t){t.v!=null&&(b.clearTimeout(t.v),t.v=null)}function l0(t,e){var n=null;if(t.g==e){Fa(t),Ld(t),t.g=null;var r=2}else if(eh(t.h,e))n=e.D,Qv(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=Tl(),Re(r,new Ov(r,n)),Rl(t)}else o0(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(r==1&&lk(t,e)||r==2&&Od(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Jn(t,5);break;case 4:Jn(t,10);break;case 3:Jn(t,6);break;default:Jn(t,2)}}}function u0(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Jn(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=ze(t.kb,t);n||(n=new rr("//www.google.com/images/cleardot.gif"),b.location&&b.location.protocol=="http"||Ua(n,"https"),Nl(n)),rk(n.toString(),r)}else Ge(2);t.G=0,t.l&&t.l.va(e),c0(t),i0(t)}A.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Ge(2)):(this.j.info("Failed to ping google.com"),Ge(1))};function c0(t){if(t.G=0,t.la=[],t.l){const e=Xv(t.h);(e.length!=0||t.i.length!=0)&&(bp(t.la,e),bp(t.la,t.i),t.h.i.length=0,md(t.i),t.i.length=0),t.l.ua()}}function h0(t,e,n){var r=n instanceof rr?en(n):new rr(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),ba(r,r.m);else{var i=b.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new rr(null,void 0);r&&Ua(s,r),e&&(s.g=e),i&&ba(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.za,n&&e&&ie(r,n,e),ie(r,"VER",t.ma),Zs(t,r),r}function d0(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new ce(new Ys({jb:!0})):new ce(t.ra),e.Ka(t.H),e}function f0(){}A=f0.prototype;A.xa=function(){};A.wa=function(){};A.va=function(){};A.ua=function(){};A.Ra=function(){};function Va(){if(ri&&!(10<=Number(IT)))throw Error("Environmental error: no available transport.")}Va.prototype.g=function(t,e){return new ht(t,e)};function ht(t,e){Ne.call(this),this.g=new r0(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!La(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!La(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new yi(this)}Le(ht,Ne);ht.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Ge(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=h0(t,null,t.V),Rl(t)};ht.prototype.close=function(){Pd(this.g)};ht.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=_d(t),t=n);e.i.push(new ZT(e.ab++,t)),e.G==3&&Rl(e)};ht.prototype.M=function(){this.g.l=null,delete this.j,Pd(this.g),delete this.g,ht.X.M.call(this)};function p0(t){Cd.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Le(p0,Cd);function m0(){Nd.call(this),this.status=1}Le(m0,Nd);function yi(t){this.g=t}Le(yi,f0);yi.prototype.xa=function(){Re(this.g,"a")};yi.prototype.wa=function(t){Re(this.g,new p0(t))};yi.prototype.va=function(t){Re(this.g,new m0)};yi.prototype.ua=function(){Re(this.g,"b")};Va.prototype.createWebChannel=Va.prototype.g;ht.prototype.send=ht.prototype.u;ht.prototype.open=ht.prototype.m;ht.prototype.close=ht.prototype.close;kl.NO_ERROR=0;kl.TIMEOUT=8;kl.HTTP_ERROR=6;Lv.COMPLETE="complete";Mv.EventType=Gs;Gs.OPEN="a";Gs.CLOSE="b";Gs.ERROR="c";Gs.MESSAGE="d";Ne.prototype.listen=Ne.prototype.N;ce.prototype.listenOnce=ce.prototype.O;ce.prototype.getLastError=ce.prototype.Oa;ce.prototype.getLastErrorCode=ce.prototype.Ea;ce.prototype.getStatus=ce.prototype.aa;ce.prototype.getResponseJson=ce.prototype.Sa;ce.prototype.getResponseText=ce.prototype.fa;ce.prototype.send=ce.prototype.da;ce.prototype.setWithCredentials=ce.prototype.Ka;var uk=function(){return new Va},ck=function(){return Tl()},bu=kl,hk=Lv,dk=wr,Xp={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},fk=Ys,Mo=Mv,pk=ce;const Yp="@firebase/firestore";/**
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
 */class be{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}be.UNAUTHENTICATED=new be(null),be.GOOGLE_CREDENTIALS=new be("google-credentials-uid"),be.FIRST_PARTY=new be("first-party-uid"),be.MOCK_USER=new be("mock-user");/**
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
 */let vi="9.18.0";/**
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
 */const fr=new hd("@firebase/firestore");function Jp(){return fr.logLevel}function R(t,...e){if(fr.logLevel<=q.DEBUG){const n=e.map(Md);fr.debug(`Firestore (${vi}): ${t}`,...n)}}function tn(t,...e){if(fr.logLevel<=q.ERROR){const n=e.map(Md);fr.error(`Firestore (${vi}): ${t}`,...n)}}function th(t,...e){if(fr.logLevel<=q.WARN){const n=e.map(Md);fr.warn(`Firestore (${vi}): ${t}`,...n)}}function Md(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function M(t="Unexpected state"){const e=`FIRESTORE (${vi}) INTERNAL ASSERTION FAILED: `+t;throw tn(e),new Error(e)}function Q(t,e){t||M()}function F(t,e){return t}/**
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
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class P extends ln{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Qt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class g0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class mk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(be.UNAUTHENTICATED))}shutdown(){}}class gk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class yk{constructor(e){this.t=e,this.currentUser=be.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Qt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Qt,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{R("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(R("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Qt)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(R("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Q(typeof r.accessToken=="string"),new g0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Q(e===null||typeof e=="string"),new be(e)}}class vk{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i,this.type="FirstParty",this.user=be.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Q(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class wk{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i}getToken(){return Promise.resolve(new vk(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(be.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ek{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Sk{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const r=s=>{s.error!=null&&R("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.A;return this.A=s.token,R("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{R("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.T.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.T.getImmediate({optional:!0});s?i(s):R("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Q(typeof n.token=="string"),this.A=n.token,new Ek(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function _k(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class y0{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=_k(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function G(t,e){return t<e?-1:t>e?1:0}function ii(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */class we{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new P(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new P(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new P(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new P(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return we.fromMillis(Date.now())}static fromDate(e){return we.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new we(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?G(this.nanoseconds,e.nanoseconds):G(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ${constructor(e){this.timestamp=e}static fromTimestamp(e){return new $(e)}static min(){return new $(new we(0,0))}static max(){return new $(new we(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Ns{constructor(e,n,r){n===void 0?n=0:n>e.length&&M(),r===void 0?r=e.length-n:r>e.length-n&&M(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ns.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ns?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class se extends Ns{construct(e,n,r){return new se(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new P(E.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new se(n)}static emptyPath(){return new se([])}}const Tk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ve extends Ns{construct(e,n,r){return new Ve(e,n,r)}static isValidIdentifier(e){return Tk.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ve.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ve(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new P(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new P(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new P(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new P(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ve(n)}static emptyPath(){return new Ve([])}}/**
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
 */class L{constructor(e){this.path=e}static fromPath(e){return new L(se.fromString(e))}static fromName(e){return new L(se.fromString(e).popFirst(5))}static empty(){return new L(se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return se.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new L(new se(e.slice()))}}function kk(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=$.fromTimestamp(r===1e9?new we(n+1,0):new we(n,r));return new Ln(i,L.empty(),e)}function Ik(t){return new Ln(t.readTime,t.key,-1)}class Ln{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ln($.min(),L.empty(),-1)}static max(){return new Ln($.max(),L.empty(),-1)}}function Ck(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=L.comparator(t.documentKey,e.documentKey),n!==0?n:G(t.largestBatchId,e.largestBatchId))}/**
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
 */const Nk="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ak{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function eo(t){if(t.code!==E.FAILED_PRECONDITION||t.message!==Nk)throw t;R("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class _{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&M(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new _((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof _?n:_.resolve(n)}catch(n){return _.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):_.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):_.reject(n)}static resolve(e){return new _((n,r)=>{n(e)})}static reject(e){return new _((n,r)=>{r(e)})}static waitFor(e){return new _((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=_.resolve(!1);for(const r of e)n=n.next(i=>i?_.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new _((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new _((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function to(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class $d{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>n.writeSequenceNumber(r))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}$d.at=-1;/**
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
 */class Dk{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class As{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new As("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof As&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */function Zp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Er(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function v0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */function no(t){return t==null}function za(t){return t===0&&1/t==-1/0}function xk(t){return typeof t=="number"&&Number.isInteger(t)&&!za(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */class Rk extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ke{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw i instanceof DOMException?new Rk("Invalid base64 string: "+i):i}}(e);return new Ke(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Ke(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return G(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ke.EMPTY_BYTE_STRING=new Ke("");const Pk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Mn(t){if(Q(!!t),typeof t=="string"){let e=0;const n=Pk.exec(t);if(Q(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:pe(t.seconds),nanos:pe(t.nanos)}}function pe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function si(t){return typeof t=="string"?Ke.fromBase64String(t):Ke.fromUint8Array(t)}/**
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
 */function w0(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function E0(t){const e=t.mapValue.fields.__previous_value__;return w0(e)?E0(e):e}function Ds(t){const e=Mn(t.mapValue.fields.__local_write_time__.timestampValue);return new we(e.seconds,e.nanos)}/**
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
 */const $o={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function pr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?w0(t)?4:Ok(t)?9007199254740991:10:M()}function Ut(t,e){if(t===e)return!0;const n=pr(t);if(n!==pr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ds(t).isEqual(Ds(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Mn(r.timestampValue),o=Mn(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return si(r.bytesValue).isEqual(si(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return pe(r.geoPointValue.latitude)===pe(i.geoPointValue.latitude)&&pe(r.geoPointValue.longitude)===pe(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return pe(r.integerValue)===pe(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=pe(r.doubleValue),o=pe(i.doubleValue);return s===o?za(s)===za(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return ii(t.arrayValue.values||[],e.arrayValue.values||[],Ut);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Zp(s)!==Zp(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Ut(s[a],o[a])))return!1;return!0}(t,e);default:return M()}}function xs(t,e){return(t.values||[]).find(n=>Ut(n,e))!==void 0}function oi(t,e){if(t===e)return 0;const n=pr(t),r=pr(e);if(n!==r)return G(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return G(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=pe(i.integerValue||i.doubleValue),a=pe(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return em(t.timestampValue,e.timestampValue);case 4:return em(Ds(t),Ds(e));case 5:return G(t.stringValue,e.stringValue);case 6:return function(i,s){const o=si(i),a=si(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=G(o[l],a[l]);if(u!==0)return u}return G(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=G(pe(i.latitude),pe(s.latitude));return o!==0?o:G(pe(i.longitude),pe(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=oi(o[l],a[l]);if(u)return u}return G(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===$o.mapValue&&s===$o.mapValue)return 0;if(i===$o.mapValue)return 1;if(s===$o.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const d=G(a[c],u[c]);if(d!==0)return d;const h=oi(o[a[c]],l[u[c]]);if(h!==0)return h}return G(a.length,u.length)}(t.mapValue,e.mapValue);default:throw M()}}function em(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return G(t,e);const n=Mn(t),r=Mn(e),i=G(n.seconds,r.seconds);return i!==0?i:G(n.nanos,r.nanos)}function ai(t){return nh(t)}function nh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=Mn(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?si(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,L.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=nh(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${nh(r.fields[a])}`;return s+"}"}(t.mapValue):M();var e,n}function rh(t){return!!t&&"integerValue"in t}function Ud(t){return!!t&&"arrayValue"in t}function tm(t){return!!t&&"nullValue"in t}function nm(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Jo(t){return!!t&&"mapValue"in t}function Yi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Er(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Yi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Yi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Ok(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Ba{constructor(e,n){this.position=e,this.inclusive=n}}function rm(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=L.comparator(L.fromName(o.referenceValue),n.key):r=oi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function im(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ut(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class S0{}class ye extends S0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new Mk(e,n,r):n==="array-contains"?new bk(e,r):n==="in"?new Fk(e,r):n==="not-in"?new Vk(e,r):n==="array-contains-any"?new zk(e,r):new ye(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new $k(e,r):new Uk(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(oi(n,this.value)):n!==null&&pr(this.value)===pr(n)&&this.matchesComparison(oi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return M()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class bt extends S0{constructor(e,n){super(),this.filters=e,this.op=n,this.ft=null}static create(e,n){return new bt(e,n)}matches(e){return _0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ft!==null||(this.ft=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ft}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.dt(n=>n.isInequality());return e!==null?e.field:null}dt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function _0(t){return t.op==="and"}function T0(t){return Lk(t)&&_0(t)}function Lk(t){for(const e of t.filters)if(e instanceof bt)return!1;return!0}function ih(t){if(t instanceof ye)return t.field.canonicalString()+t.op.toString()+ai(t.value);if(T0(t))return t.filters.map(e=>ih(e)).join(",");{const e=t.filters.map(n=>ih(n)).join(",");return`${t.op}(${e})`}}function k0(t,e){return t instanceof ye?function(n,r){return r instanceof ye&&n.op===r.op&&n.field.isEqual(r.field)&&Ut(n.value,r.value)}(t,e):t instanceof bt?function(n,r){return r instanceof bt&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&k0(s,r.filters[o]),!0):!1}(t,e):void M()}function I0(t){return t instanceof ye?function(e){return`${e.field.canonicalString()} ${e.op} ${ai(e.value)}`}(t):t instanceof bt?function(e){return e.op.toString()+" {"+e.getFilters().map(I0).join(" ,")+"}"}(t):"Filter"}class Mk extends ye{constructor(e,n,r){super(e,n,r),this.key=L.fromName(r.referenceValue)}matches(e){const n=L.comparator(e.key,this.key);return this.matchesComparison(n)}}class $k extends ye{constructor(e,n){super(e,"in",n),this.keys=C0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Uk extends ye{constructor(e,n){super(e,"not-in",n),this.keys=C0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function C0(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>L.fromName(r.referenceValue))}class bk extends ye{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ud(n)&&xs(n.arrayValue,this.value)}}class Fk extends ye{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&xs(this.value.arrayValue,n)}}class Vk extends ye{constructor(e,n){super(e,"not-in",n)}matches(e){if(xs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!xs(this.value.arrayValue,n)}}class zk extends ye{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ud(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>xs(this.value.arrayValue,r))}}/**
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
 */class Ji{constructor(e,n="asc"){this.field=e,this.dir=n}}function Bk(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Se{constructor(e,n){this.comparator=e,this.root=n||De.EMPTY}insert(e,n){return new Se(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,De.BLACK,null,null))}remove(e){return new Se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,De.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Uo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Uo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Uo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Uo(this.root,e,this.comparator,!0)}}class Uo{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class De{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??De.RED,this.left=i??De.EMPTY,this.right=s??De.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new De(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return De.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return De.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,De.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,De.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw M();const e=this.left.check();if(e!==this.right.check())throw M();return e+(this.isRed()?0:1)}}De.EMPTY=null,De.RED=!0,De.BLACK=!1;De.EMPTY=new class{constructor(){this.size=0}get key(){throw M()}get value(){throw M()}get color(){throw M()}get left(){throw M()}get right(){throw M()}copy(t,e,n,r,i){return this}insert(t,e,n){return new De(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ee{constructor(e){this.comparator=e,this.data=new Se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new sm(this.data.getIterator())}getIteratorFrom(e){return new sm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ee)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ee(this.comparator);return n.data=e,n}}class sm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class ot{constructor(e){this.fields=e,e.sort(Ve.comparator)}static empty(){return new ot([])}unionWith(e){let n=new Ee(Ve.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new ot(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ii(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class qe{constructor(e){this.value=e}static empty(){return new qe({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Jo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Yi(n)}setAll(e){let n=Ve.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Yi(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Jo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Ut(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Jo(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Er(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new qe(Yi(this.value))}}function N0(t){const e=[];return Er(t.fields,(n,r)=>{const i=new Ve([n]);if(Jo(r)){const s=N0(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new ot(e)}/**
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
 */class Ie{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ie(e,0,$.min(),$.min(),$.min(),qe.empty(),0)}static newFoundDocument(e,n,r,i){return new Ie(e,1,n,$.min(),r,i,0)}static newNoDocument(e,n){return new Ie(e,2,n,$.min(),$.min(),qe.empty(),0)}static newUnknownDocument(e,n){return new Ie(e,3,n,$.min(),$.min(),qe.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual($.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=qe.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=qe.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=$.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ie&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ie(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class jk{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this._t=null}}function om(t,e=null,n=[],r=[],i=null,s=null,o=null){return new jk(t,e,n,r,i,s,o)}function bd(t){const e=F(t);if(e._t===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>ih(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),no(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ai(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ai(r)).join(",")),e._t=n}return e._t}function Fd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Bk(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!k0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!im(t.startAt,e.startAt)&&im(t.endAt,e.endAt)}function sh(t){return L.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Pl{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.wt=null,this.gt=null,this.startAt,this.endAt}}function Hk(t,e,n,r,i,s,o,a){return new Pl(t,e,n,r,i,s,o,a)}function A0(t){return new Pl(t)}function am(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Kk(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Wk(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function qk(t){return t.collectionGroup!==null}function Kr(t){const e=F(t);if(e.wt===null){e.wt=[];const n=Wk(e),r=Kk(e);if(n!==null&&r===null)n.isKeyField()||e.wt.push(new Ji(n)),e.wt.push(new Ji(Ve.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.wt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new Ji(Ve.keyField(),s))}}}return e.wt}function nn(t){const e=F(t);if(!e.gt)if(e.limitType==="F")e.gt=om(e.path,e.collectionGroup,Kr(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Kr(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Ji(s.field,o))}const r=e.endAt?new Ba(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Ba(e.startAt.position,e.startAt.inclusive):null;e.gt=om(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.gt}function oh(t,e,n){return new Pl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ol(t,e){return Fd(nn(t),nn(e))&&t.limitType===e.limitType}function D0(t){return`${bd(nn(t))}|lt:${t.limitType}`}function ah(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>I0(r)).join(", ")}]`),no(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ai(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ai(r)).join(",")),`Target(${n})`}(nn(t))}; limitType=${t.limitType})`}function Ll(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):L.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of Kr(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=rm(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,Kr(n),r)||n.endAt&&!function(i,s,o){const a=rm(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,Kr(n),r))}(t,e)}function Gk(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function x0(t){return(e,n)=>{let r=!1;for(const i of Kr(t)){const s=Qk(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Qk(t,e,n){const r=t.field.isKeyField()?L.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?oi(a,l):M()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return M()}}/**
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
 */function R0(t,e){if(t.yt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:za(e)?"-0":e}}function P0(t){return{integerValue:""+t}}function Xk(t,e){return xk(e)?P0(e):R0(t,e)}/**
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
 */class Ml{constructor(){this._=void 0}}function Yk(t,e,n){return t instanceof ja?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Rs?L0(t,e):t instanceof Ps?M0(t,e):function(r,i){const s=O0(r,i),o=lm(s)+lm(r.It);return rh(s)&&rh(r.It)?P0(o):R0(r.Tt,o)}(t,e)}function Jk(t,e,n){return t instanceof Rs?L0(t,e):t instanceof Ps?M0(t,e):n}function O0(t,e){return t instanceof Ha?rh(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class ja extends Ml{}class Rs extends Ml{constructor(e){super(),this.elements=e}}function L0(t,e){const n=$0(e);for(const r of t.elements)n.some(i=>Ut(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ps extends Ml{constructor(e){super(),this.elements=e}}function M0(t,e){let n=$0(e);for(const r of t.elements)n=n.filter(i=>!Ut(i,r));return{arrayValue:{values:n}}}class Ha extends Ml{constructor(e,n){super(),this.Tt=e,this.It=n}}function lm(t){return pe(t.integerValue||t.doubleValue)}function $0(t){return Ud(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Zk(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Rs&&r instanceof Rs||n instanceof Ps&&r instanceof Ps?ii(n.elements,r.elements,Ut):n instanceof Ha&&r instanceof Ha?Ut(n.It,r.It):n instanceof ja&&r instanceof ja}(t.transform,e.transform)}class eI{constructor(e,n){this.version=e,this.transformResults=n}}class Ze{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ze}static exists(e){return new Ze(void 0,e)}static updateTime(e){return new Ze(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Zo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class $l{}function U0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Vd(t.key,Ze.none()):new ro(t.key,t.data,Ze.none());{const n=t.data,r=qe.empty();let i=new Ee(Ve.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Bn(t.key,r,new ot(i.toArray()),Ze.none())}}function tI(t,e,n){t instanceof ro?function(r,i,s){const o=r.value.clone(),a=cm(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Bn?function(r,i,s){if(!Zo(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=cm(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(b0(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Zi(t,e,n,r){return t instanceof ro?function(i,s,o,a){if(!Zo(i.precondition,s))return o;const l=i.value.clone(),u=hm(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Bn?function(i,s,o,a){if(!Zo(i.precondition,s))return o;const l=hm(i.fieldTransforms,a,s),u=s.data;return u.setAll(b0(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return Zo(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function nI(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=O0(r.transform,i||null);s!=null&&(n===null&&(n=qe.empty()),n.set(r.field,s))}return n||null}function um(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&ii(n,r,(i,s)=>Zk(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ro extends $l{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Bn extends $l{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function b0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function cm(t,e,n){const r=new Map;Q(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,Jk(o,a,n[i]))}return r}function hm(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,Yk(s,o,e))}return r}class Vd extends $l{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class F0 extends $l{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class rI{constructor(e){this.count=e}}/**
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
 */var fe,K;function V0(t){switch(t){default:return M();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function z0(t){if(t===void 0)return tn("GRPC error has no .code"),E.UNKNOWN;switch(t){case fe.OK:return E.OK;case fe.CANCELLED:return E.CANCELLED;case fe.UNKNOWN:return E.UNKNOWN;case fe.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case fe.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case fe.INTERNAL:return E.INTERNAL;case fe.UNAVAILABLE:return E.UNAVAILABLE;case fe.UNAUTHENTICATED:return E.UNAUTHENTICATED;case fe.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case fe.NOT_FOUND:return E.NOT_FOUND;case fe.ALREADY_EXISTS:return E.ALREADY_EXISTS;case fe.PERMISSION_DENIED:return E.PERMISSION_DENIED;case fe.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case fe.ABORTED:return E.ABORTED;case fe.OUT_OF_RANGE:return E.OUT_OF_RANGE;case fe.UNIMPLEMENTED:return E.UNIMPLEMENTED;case fe.DATA_LOSS:return E.DATA_LOSS;default:return M()}}(K=fe||(fe={}))[K.OK=0]="OK",K[K.CANCELLED=1]="CANCELLED",K[K.UNKNOWN=2]="UNKNOWN",K[K.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",K[K.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",K[K.NOT_FOUND=5]="NOT_FOUND",K[K.ALREADY_EXISTS=6]="ALREADY_EXISTS",K[K.PERMISSION_DENIED=7]="PERMISSION_DENIED",K[K.UNAUTHENTICATED=16]="UNAUTHENTICATED",K[K.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",K[K.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",K[K.ABORTED=10]="ABORTED",K[K.OUT_OF_RANGE=11]="OUT_OF_RANGE",K[K.UNIMPLEMENTED=12]="UNIMPLEMENTED",K[K.INTERNAL=13]="INTERNAL",K[K.UNAVAILABLE=14]="UNAVAILABLE",K[K.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class wi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Er(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return v0(this.inner)}size(){return this.innerSize}}/**
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
 */const iI=new Se(L.comparator);function rn(){return iI}const B0=new Se(L.comparator);function Fi(...t){let e=B0;for(const n of t)e=e.insert(n.key,n);return e}function j0(t){let e=B0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Zn(){return es()}function H0(){return es()}function es(){return new wi(t=>t.toString(),(t,e)=>t.isEqual(e))}const sI=new Se(L.comparator),oI=new Ee(L.comparator);function j(...t){let e=oI;for(const n of t)e=e.add(n);return e}const aI=new Ee(G);function K0(){return aI}/**
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
 */class Ul{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,io.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ul($.min(),i,K0(),rn(),j())}}class io{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new io(r,n,j(),j(),j())}}/**
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
 */class ea{constructor(e,n,r,i){this.Et=e,this.removedTargetIds=n,this.key=r,this.At=i}}class W0{constructor(e,n){this.targetId=e,this.Rt=n}}class q0{constructor(e,n,r=Ke.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class dm{constructor(){this.Pt=0,this.vt=pm(),this.bt=Ke.EMPTY_BYTE_STRING,this.Vt=!1,this.St=!0}get current(){return this.Vt}get resumeToken(){return this.bt}get Dt(){return this.Pt!==0}get Ct(){return this.St}xt(e){e.approximateByteSize()>0&&(this.St=!0,this.bt=e)}Nt(){let e=j(),n=j(),r=j();return this.vt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:M()}}),new io(this.bt,this.Vt,e,n,r)}kt(){this.St=!1,this.vt=pm()}$t(e,n){this.St=!0,this.vt=this.vt.insert(e,n)}Mt(e){this.St=!0,this.vt=this.vt.remove(e)}Ot(){this.Pt+=1}Ft(){this.Pt-=1}Bt(){this.St=!0,this.Vt=!0}}class lI{constructor(e){this.Lt=e,this.qt=new Map,this.Ut=rn(),this.Kt=fm(),this.Gt=new Ee(G)}Qt(e){for(const n of e.Et)e.At&&e.At.isFoundDocument()?this.jt(n,e.At):this.zt(n,e.key,e.At);for(const n of e.removedTargetIds)this.zt(n,e.key,e.At)}Wt(e){this.forEachTarget(e,n=>{const r=this.Ht(n);switch(e.state){case 0:this.Jt(n)&&r.xt(e.resumeToken);break;case 1:r.Ft(),r.Dt||r.kt(),r.xt(e.resumeToken);break;case 2:r.Ft(),r.Dt||this.removeTarget(n);break;case 3:this.Jt(n)&&(r.Bt(),r.xt(e.resumeToken));break;case 4:this.Jt(n)&&(this.Yt(n),r.xt(e.resumeToken));break;default:M()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qt.forEach((r,i)=>{this.Jt(i)&&n(i)})}Zt(e){const n=e.targetId,r=e.Rt.count,i=this.Xt(n);if(i){const s=i.target;if(sh(s))if(r===0){const o=new L(s.path);this.zt(n,o,Ie.newNoDocument(o,$.min()))}else Q(r===1);else this.te(n)!==r&&(this.Yt(n),this.Gt=this.Gt.add(n))}}ee(e){const n=new Map;this.qt.forEach((s,o)=>{const a=this.Xt(o);if(a){if(s.current&&sh(a.target)){const l=new L(a.target.path);this.Ut.get(l)!==null||this.ne(o,l)||this.zt(o,l,Ie.newNoDocument(l,e))}s.Ct&&(n.set(o,s.Nt()),s.kt())}});let r=j();this.Kt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Xt(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ut.forEach((s,o)=>o.setReadTime(e));const i=new Ul(e,n,this.Gt,this.Ut,r);return this.Ut=rn(),this.Kt=fm(),this.Gt=new Ee(G),i}jt(e,n){if(!this.Jt(e))return;const r=this.ne(e,n.key)?2:0;this.Ht(e).$t(n.key,r),this.Ut=this.Ut.insert(n.key,n),this.Kt=this.Kt.insert(n.key,this.se(n.key).add(e))}zt(e,n,r){if(!this.Jt(e))return;const i=this.Ht(e);this.ne(e,n)?i.$t(n,1):i.Mt(n),this.Kt=this.Kt.insert(n,this.se(n).delete(e)),r&&(this.Ut=this.Ut.insert(n,r))}removeTarget(e){this.qt.delete(e)}te(e){const n=this.Ht(e).Nt();return this.Lt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.Ht(e).Ot()}Ht(e){let n=this.qt.get(e);return n||(n=new dm,this.qt.set(e,n)),n}se(e){let n=this.Kt.get(e);return n||(n=new Ee(G),this.Kt=this.Kt.insert(e,n)),n}Jt(e){const n=this.Xt(e)!==null;return n||R("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.qt.get(e);return n&&n.Dt?null:this.Lt.ie(e)}Yt(e){this.qt.set(e,new dm),this.Lt.getRemoteKeysForTarget(e).forEach(n=>{this.zt(e,n,null)})}ne(e,n){return this.Lt.getRemoteKeysForTarget(e).has(n)}}function fm(){return new Se(L.comparator)}function pm(){return new Se(L.comparator)}/**
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
 */const uI=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),cI=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),hI=(()=>({and:"AND",or:"OR"}))();class dI{constructor(e,n){this.databaseId=e,this.yt=n}}function Ka(t,e){return t.yt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function G0(t,e){return t.yt?e.toBase64():e.toUint8Array()}function fI(t,e){return Ka(t,e.toTimestamp())}function lt(t){return Q(!!t),$.fromTimestamp(function(e){const n=Mn(e);return new we(n.seconds,n.nanos)}(t))}function zd(t,e){return function(n){return new se(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function Q0(t){const e=se.fromString(t);return Q(ew(e)),e}function Wa(t,e){return zd(t.databaseId,e.path)}function ts(t,e){const n=Q0(e);if(n.get(1)!==t.databaseId.projectId)throw new P(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new P(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new L(X0(n))}function lh(t,e){return zd(t.databaseId,e)}function pI(t){const e=Q0(t);return e.length===4?se.emptyPath():X0(e)}function Os(t){return new se(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function X0(t){return Q(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function mm(t,e,n){return{name:Wa(t,e),fields:n.value.mapValue.fields}}function mI(t,e){return"found"in e?function(n,r){Q(!!r.found),r.found.name,r.found.updateTime;const i=ts(n,r.found.name),s=lt(r.found.updateTime),o=r.found.createTime?lt(r.found.createTime):$.min(),a=new qe({mapValue:{fields:r.found.fields}});return Ie.newFoundDocument(i,s,o,a)}(t,e):"missing"in e?function(n,r){Q(!!r.missing),Q(!!r.readTime);const i=ts(n,r.missing),s=lt(r.readTime);return Ie.newNoDocument(i,s)}(t,e):M()}function gI(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:M()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.yt?(Q(u===void 0||typeof u=="string"),Ke.fromBase64String(u||"")):(Q(u===void 0||u instanceof Uint8Array),Ke.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?E.UNKNOWN:z0(l.code);return new P(u,l.message||"")}(o);n=new q0(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=ts(t,r.document.name),s=lt(r.document.updateTime),o=r.document.createTime?lt(r.document.createTime):$.min(),a=new qe({mapValue:{fields:r.document.fields}}),l=Ie.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new ea(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=ts(t,r.document),s=r.readTime?lt(r.readTime):$.min(),o=Ie.newNoDocument(i,s),a=r.removedTargetIds||[];n=new ea([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=ts(t,r.document),s=r.removedTargetIds||[];n=new ea([],s,i,null)}else{if(!("filter"in e))return M();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new rI(i),o=r.targetId;n=new W0(o,s)}}return n}function Y0(t,e){let n;if(e instanceof ro)n={update:mm(t,e.key,e.value)};else if(e instanceof Vd)n={delete:Wa(t,e.key)};else if(e instanceof Bn)n={update:mm(t,e.key,e.data),updateMask:II(e.fieldMask)};else{if(!(e instanceof F0))return M();n={verify:Wa(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof ja)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Rs)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ps)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Ha)return{fieldPath:s.field.canonicalString(),increment:o.It};throw M()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:fI(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:M()}(t,e.precondition)),n}function yI(t,e){return t&&t.length>0?(Q(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?lt(r.updateTime):lt(i);return s.isEqual($.min())&&(s=lt(i)),new eI(s,r.transformResults||[])}(n,e))):[]}function vI(t,e){return{documents:[lh(t,e.path)]}}function wI(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=lh(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=lh(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return Z0(bt.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:Tr(c.field),direction:_I(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,u){return l.yt||no(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function EI(t){let e=pI(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Q(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(c){const d=J0(c);return d instanceof bt&&T0(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(d){return new Ji(kr(d.field),function(h){switch(h){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(d.direction))}(c)));let a=null;n.limit&&(a=function(c){let d;return d=typeof c=="object"?c.value:c,no(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(c){const d=!!c.before,h=c.values||[];return new Ba(h,d)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const d=!c.before,h=c.values||[];return new Ba(h,d)}(n.endAt)),Hk(e,i,o,s,a,"F",l,u)}function SI(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return M()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function J0(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=kr(e.unaryFilter.field);return ye.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=kr(e.unaryFilter.field);return ye.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=kr(e.unaryFilter.field);return ye.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=kr(e.unaryFilter.field);return ye.create(s,"!=",{nullValue:"NULL_VALUE"});default:return M()}}(t):t.fieldFilter!==void 0?function(e){return ye.create(kr(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return M()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return bt.create(e.compositeFilter.filters.map(n=>J0(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return M()}}(e.compositeFilter.op))}(t):M()}function _I(t){return uI[t]}function TI(t){return cI[t]}function kI(t){return hI[t]}function Tr(t){return{fieldPath:t.canonicalString()}}function kr(t){return Ve.fromServerFormat(t.fieldPath)}function Z0(t){return t instanceof ye?function(e){if(e.op==="=="){if(nm(e.value))return{unaryFilter:{field:Tr(e.field),op:"IS_NAN"}};if(tm(e.value))return{unaryFilter:{field:Tr(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(nm(e.value))return{unaryFilter:{field:Tr(e.field),op:"IS_NOT_NAN"}};if(tm(e.value))return{unaryFilter:{field:Tr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Tr(e.field),op:TI(e.op),value:e.value}}}(t):t instanceof bt?function(e){const n=e.getFilters().map(r=>Z0(r));return n.length===1?n[0]:{compositeFilter:{op:kI(e.op),filters:n}}}(t):M()}function II(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function ew(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class CI{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&tI(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Zi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Zi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=H0();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=U0(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument($.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),j())}isEqual(e){return this.batchId===e.batchId&&ii(this.mutations,e.mutations,(n,r)=>um(n,r))&&ii(this.baseMutations,e.baseMutations,(n,r)=>um(n,r))}}class Bd{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Q(e.mutations.length===r.length);let i=sI;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Bd(e,n,r,i)}}/**
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
 */class NI{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class ir{constructor(e,n,r,i,s=$.min(),o=$.min(),a=Ke.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new ir(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new ir(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new ir(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class AI{constructor(e){this.oe=e}}function DI(t){const e=EI({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?oh(e,e.limit,"L"):e}/**
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
 */class xI{constructor(){this.Ze=new RI}addToCollectionParentIndex(e,n){return this.Ze.add(n),_.resolve()}getCollectionParents(e,n){return _.resolve(this.Ze.getEntries(n))}addFieldIndex(e,n){return _.resolve()}deleteFieldIndex(e,n){return _.resolve()}getDocumentsMatchingTarget(e,n){return _.resolve(null)}getIndexType(e,n){return _.resolve(0)}getFieldIndexes(e,n){return _.resolve([])}getNextCollectionGroupToUpdate(e){return _.resolve(null)}getMinOffset(e,n){return _.resolve(Ln.min())}getMinOffsetFromCollectionGroup(e,n){return _.resolve(Ln.min())}updateCollectionGroup(e,n,r){return _.resolve()}updateIndexEntries(e,n){return _.resolve()}}class RI{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ee(se.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ee(se.comparator)).toArray()}}/**
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
 */class li{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Vn(){return new li(0)}static Sn(){return new li(-1)}}/**
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
 */class PI{constructor(){this.changes=new wi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ie.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?_.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class OI{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class LI{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Zi(r.mutation,i,ot.empty(),we.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,j()).next(()=>r))}getLocalViewOfDocuments(e,n,r=j()){const i=Zn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Fi();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Zn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,j()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=rn();const o=es(),a=es();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Bn)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),Zi(c.mutation,u,c.mutation.getFieldMask(),we.now())):o.set(u.key,ot.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var d;return a.set(u,new OI(c,(d=o.get(u))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const r=es();let i=new Se((o,a)=>o-a),s=j();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||ot.empty();c=a.applyToLocalView(u,c),r.set(l,c);const d=(i.get(a.batchId)||j()).add(l);i=i.insert(a.batchId,d)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,d=H0();c.forEach(h=>{if(!s.has(h)){const g=U0(n.get(h),r.get(h));g!==null&&d.set(h,g),s=s.add(h)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return _.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return L.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):qk(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):_.resolve(Zn());let a=-1,l=s;return o.next(u=>_.forEach(u,(c,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),s.get(c)?_.resolve():this.remoteDocumentCache.getEntry(e,c).next(h=>{l=l.insert(c,h)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,j())).next(c=>({batchId:a,changes:j0(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new L(n)).next(r=>{let i=Fi();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=Fi();return this.indexManager.getCollectionParents(e,i).next(o=>_.forEach(o,a=>{const l=function(u,c){return new Pl(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,d)=>{s=s.insert(c,d)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,Ie.newInvalidDocument(u)))});let o=Fi();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&Zi(u.mutation,l,ot.empty(),we.now()),Ll(n,l)&&(o=o.insert(a,l))}),o})}}/**
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
 */class MI{constructor(e){this.Tt=e,this.es=new Map,this.ns=new Map}getBundleMetadata(e,n){return _.resolve(this.es.get(n))}saveBundleMetadata(e,n){var r;return this.es.set(n.id,{id:(r=n).id,version:r.version,createTime:lt(r.createTime)}),_.resolve()}getNamedQuery(e,n){return _.resolve(this.ns.get(n))}saveNamedQuery(e,n){return this.ns.set(n.name,function(r){return{name:r.name,query:DI(r.bundledQuery),readTime:lt(r.readTime)}}(n)),_.resolve()}}/**
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
 */class $I{constructor(){this.overlays=new Se(L.comparator),this.ss=new Map}getOverlay(e,n){return _.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Zn();return _.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ce(e,n,s)}),_.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.ss.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.ss.delete(r)),_.resolve()}getOverlaysForCollection(e,n,r){const i=Zn(),s=n.length+1,o=new L(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return _.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Se((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Zn(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Zn(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return _.resolve(a)}ce(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.ss.get(i.largestBatchId).delete(r.key);this.ss.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new NI(n,r));let s=this.ss.get(n);s===void 0&&(s=j(),this.ss.set(n,s)),this.ss.set(n,s.add(r.key))}}/**
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
 */class jd{constructor(){this.rs=new Ee(Te.os),this.us=new Ee(Te.cs)}isEmpty(){return this.rs.isEmpty()}addReference(e,n){const r=new Te(e,n);this.rs=this.rs.add(r),this.us=this.us.add(r)}hs(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.ls(new Te(e,n))}fs(e,n){e.forEach(r=>this.removeReference(r,n))}ds(e){const n=new L(new se([])),r=new Te(n,e),i=new Te(n,e+1),s=[];return this.us.forEachInRange([r,i],o=>{this.ls(o),s.push(o.key)}),s}_s(){this.rs.forEach(e=>this.ls(e))}ls(e){this.rs=this.rs.delete(e),this.us=this.us.delete(e)}ws(e){const n=new L(new se([])),r=new Te(n,e),i=new Te(n,e+1);let s=j();return this.us.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Te(e,0),r=this.rs.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Te{constructor(e,n){this.key=e,this.gs=n}static os(e,n){return L.comparator(e.key,n.key)||G(e.gs,n.gs)}static cs(e,n){return G(e.gs,n.gs)||L.comparator(e.key,n.key)}}/**
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
 */class UI{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ys=1,this.ps=new Ee(Te.os)}checkEmpty(e){return _.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.ys;this.ys++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new CI(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.ps=this.ps.add(new Te(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return _.resolve(o)}lookupMutationBatch(e,n){return _.resolve(this.Is(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Ts(r),s=i<0?0:i;return _.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return _.resolve(this.mutationQueue.length===0?-1:this.ys-1)}getAllMutationBatches(e){return _.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Te(n,0),i=new Te(n,Number.POSITIVE_INFINITY),s=[];return this.ps.forEachInRange([r,i],o=>{const a=this.Is(o.gs);s.push(a)}),_.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ee(G);return n.forEach(i=>{const s=new Te(i,0),o=new Te(i,Number.POSITIVE_INFINITY);this.ps.forEachInRange([s,o],a=>{r=r.add(a.gs)})}),_.resolve(this.Es(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;L.isDocumentKey(s)||(s=s.child(""));const o=new Te(new L(s),0);let a=new Ee(G);return this.ps.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.gs)),!0)},o),_.resolve(this.Es(a))}Es(e){const n=[];return e.forEach(r=>{const i=this.Is(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Q(this.As(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.ps;return _.forEach(n.mutations,i=>{const s=new Te(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.ps=r})}Pn(e){}containsKey(e,n){const r=new Te(n,0),i=this.ps.firstAfterOrEqual(r);return _.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,_.resolve()}As(e,n){return this.Ts(e)}Ts(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Is(e){const n=this.Ts(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class bI{constructor(e){this.Rs=e,this.docs=new Se(L.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Rs(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return _.resolve(r?r.document.mutableCopy():Ie.newInvalidDocument(n))}getEntries(e,n){let r=rn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ie.newInvalidDocument(i))}),_.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=rn();const o=n.path,a=new L(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Ck(Ik(c),r)<=0||(i.has(c.key)||Ll(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return _.resolve(s)}getAllFromCollectionGroup(e,n,r,i){M()}Ps(e,n){return _.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new FI(this)}getSize(e){return _.resolve(this.size)}}class FI extends PI{constructor(e){super(),this.Xn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Xn.addEntry(e,i)):this.Xn.removeEntry(r)}),_.waitFor(n)}getFromCache(e,n){return this.Xn.getEntry(e,n)}getAllFromCache(e,n){return this.Xn.getEntries(e,n)}}/**
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
 */class VI{constructor(e){this.persistence=e,this.vs=new wi(n=>bd(n),Fd),this.lastRemoteSnapshotVersion=$.min(),this.highestTargetId=0,this.bs=0,this.Vs=new jd,this.targetCount=0,this.Ss=li.Vn()}forEachTarget(e,n){return this.vs.forEach((r,i)=>n(i)),_.resolve()}getLastRemoteSnapshotVersion(e){return _.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return _.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.Ss.next(),_.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.bs&&(this.bs=n),_.resolve()}xn(e){this.vs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ss=new li(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.xn(n),this.targetCount+=1,_.resolve()}updateTargetData(e,n){return this.xn(n),_.resolve()}removeTargetData(e,n){return this.vs.delete(n.target),this.Vs.ds(n.targetId),this.targetCount-=1,_.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.vs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.vs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),_.waitFor(s).next(()=>i)}getTargetCount(e){return _.resolve(this.targetCount)}getTargetData(e,n){const r=this.vs.get(n)||null;return _.resolve(r)}addMatchingKeys(e,n,r){return this.Vs.hs(n,r),_.resolve()}removeMatchingKeys(e,n,r){this.Vs.fs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),_.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Vs.ds(n),_.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Vs.ws(n);return _.resolve(r)}containsKey(e,n){return _.resolve(this.Vs.containsKey(n))}}/**
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
 */class zI{constructor(e,n){this.Ds={},this.overlays={},this.Cs=new $d(0),this.xs=!1,this.xs=!0,this.referenceDelegate=e(this),this.Ns=new VI(this),this.indexManager=new xI,this.remoteDocumentCache=function(r){return new bI(r)}(r=>this.referenceDelegate.ks(r)),this.Tt=new AI(n),this.$s=new MI(this.Tt)}start(){return Promise.resolve()}shutdown(){return this.xs=!1,Promise.resolve()}get started(){return this.xs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new $I,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Ds[e.toKey()];return r||(r=new UI(n,this.referenceDelegate),this.Ds[e.toKey()]=r),r}getTargetCache(){return this.Ns}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$s}runTransaction(e,n,r){R("MemoryPersistence","Starting transaction:",e);const i=new BI(this.Cs.next());return this.referenceDelegate.Ms(),r(i).next(s=>this.referenceDelegate.Os(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Fs(e,n){return _.or(Object.values(this.Ds).map(r=>()=>r.containsKey(e,n)))}}class BI extends Ak{constructor(e){super(),this.currentSequenceNumber=e}}class Hd{constructor(e){this.persistence=e,this.Bs=new jd,this.Ls=null}static qs(e){return new Hd(e)}get Us(){if(this.Ls)return this.Ls;throw M()}addReference(e,n,r){return this.Bs.addReference(r,n),this.Us.delete(r.toString()),_.resolve()}removeReference(e,n,r){return this.Bs.removeReference(r,n),this.Us.add(r.toString()),_.resolve()}markPotentiallyOrphaned(e,n){return this.Us.add(n.toString()),_.resolve()}removeTarget(e,n){this.Bs.ds(n.targetId).forEach(i=>this.Us.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Us.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ms(){this.Ls=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return _.forEach(this.Us,r=>{const i=L.fromPath(r);return this.Ks(e,i).next(s=>{s||n.removeEntry(i,$.min())})}).next(()=>(this.Ls=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ks(e,n).next(r=>{r?this.Us.delete(n.toString()):this.Us.add(n.toString())})}ks(e){return 0}Ks(e,n){return _.or([()=>_.resolve(this.Bs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Fs(e,n)])}}/**
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
 */class Kd{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Ci=r,this.xi=i}static Ni(e,n){let r=j(),i=j();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Kd(e,n.fromCache,r,i)}}/**
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
 */class jI{constructor(){this.ki=!1}initialize(e,n){this.$i=e,this.indexManager=n,this.ki=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Mi(e,n).next(s=>s||this.Oi(e,n,i,r)).next(s=>s||this.Fi(e,n))}Mi(e,n){if(am(n))return _.resolve(null);let r=nn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=oh(n,null,"F"),r=nn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=j(...s);return this.$i.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Bi(n,a);return this.Li(n,u,o,l.readTime)?this.Mi(e,oh(n,null,"F")):this.qi(e,u,n,l)}))})))}Oi(e,n,r,i){return am(n)||i.isEqual($.min())?this.Fi(e,n):this.$i.getDocuments(e,r).next(s=>{const o=this.Bi(n,s);return this.Li(n,o,r,i)?this.Fi(e,n):(Jp()<=q.DEBUG&&R("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ah(n)),this.qi(e,o,n,kk(i,-1)))})}Bi(e,n){let r=new Ee(x0(e));return n.forEach((i,s)=>{Ll(e,s)&&(r=r.add(s))}),r}Li(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Fi(e,n){return Jp()<=q.DEBUG&&R("QueryEngine","Using full collection scan to execute query:",ah(n)),this.$i.getDocumentsMatchingQuery(e,n,Ln.min())}qi(e,n,r,i){return this.$i.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class HI{constructor(e,n,r,i){this.persistence=e,this.Ui=n,this.Tt=i,this.Ki=new Se(G),this.Gi=new wi(s=>bd(s),Fd),this.Qi=new Map,this.ji=e.getRemoteDocumentCache(),this.Ns=e.getTargetCache(),this.$s=e.getBundleCache(),this.zi(r)}zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new LI(this.ji,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ji.setIndexManager(this.indexManager),this.Ui.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ki))}}function KI(t,e,n,r){return new HI(t,e,n,r)}async function tw(t,e){const n=F(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.zi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=j();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({Wi:u,removedBatchIds:o,addedBatchIds:a}))})})}function WI(t,e){const n=F(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.ji.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,d=c.keys();let h=_.resolve();return d.forEach(g=>{h=h.next(()=>u.getEntry(a,g)).next(y=>{const v=l.docVersions.get(g);Q(v!==null),y.version.compareTo(v)<0&&(c.applyToRemoteDocument(y,l),y.isValidDocument()&&(y.setReadTime(l.commitVersion),u.addEntry(y)))})}),h.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=j();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function nw(t){const e=F(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ns.getLastRemoteSnapshotVersion(n))}function qI(t,e){const n=F(t),r=e.snapshotVersion;let i=n.Ki;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.ji.newChangeBuffer({trackRemovals:!0});i=n.Ki;const a=[];e.targetChanges.forEach((c,d)=>{const h=i.get(d);if(!h)return;a.push(n.Ns.removeMatchingKeys(s,c.removedDocuments,d).next(()=>n.Ns.addMatchingKeys(s,c.addedDocuments,d)));let g=h.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(d)?g=g.withResumeToken(Ke.EMPTY_BYTE_STRING,$.min()).withLastLimboFreeSnapshotVersion($.min()):c.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(c.resumeToken,r)),i=i.insert(d,g),function(y,v,D){return y.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:D.addedDocuments.size+D.modifiedDocuments.size+D.removedDocuments.size>0}(h,g,c)&&a.push(n.Ns.updateTargetData(s,g))});let l=rn(),u=j();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(GI(s,o,e.documentUpdates).next(c=>{l=c.Hi,u=c.Ji})),!r.isEqual($.min())){const c=n.Ns.getLastRemoteSnapshotVersion(s).next(d=>n.Ns.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return _.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ki=i,s))}function GI(t,e,n){let r=j(),i=j();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=rn();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual($.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):R("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Hi:o,Ji:i}})}function QI(t,e){const n=F(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function XI(t,e){const n=F(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ns.getTargetData(r,e).next(s=>s?(i=s,_.resolve(i)):n.Ns.allocateTargetId(r).next(o=>(i=new ir(e,o,0,r.currentSequenceNumber),n.Ns.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ki.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ki=n.Ki.insert(r.targetId,r),n.Gi.set(e,r.targetId)),r})}async function uh(t,e,n){const r=F(t),i=r.Ki.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!to(o))throw o;R("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ki=r.Ki.remove(e),r.Gi.delete(i.target)}function gm(t,e,n){const r=F(t);let i=$.min(),s=j();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=F(a),d=c.Gi.get(u);return d!==void 0?_.resolve(c.Ki.get(d)):c.Ns.getTargetData(l,u)}(r,o,nn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ns.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Ui.getDocumentsMatchingQuery(o,e,n?i:$.min(),n?s:j())).next(a=>(YI(r,Gk(e),a),{documents:a,Yi:s})))}function YI(t,e,n){let r=t.Qi.get(e)||$.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Qi.set(e,r)}class ym{constructor(){this.activeTargetIds=K0()}sr(e){this.activeTargetIds=this.activeTargetIds.add(e)}ir(e){this.activeTargetIds=this.activeTargetIds.delete(e)}nr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class JI{constructor(){this.Ur=new ym,this.Kr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Ur.sr(e),this.Kr[e]||"not-current"}updateQueryState(e,n,r){this.Kr[e]=n}removeLocalQueryTarget(e){this.Ur.ir(e)}isLocalQueryTarget(e){return this.Ur.activeTargetIds.has(e)}clearQueryState(e){delete this.Kr[e]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(e){return this.Ur.activeTargetIds.has(e)}start(){return this.Ur=new ym,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class ZI{Gr(e){}shutdown(){}}/**
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
 */class vm{constructor(){this.Qr=()=>this.jr(),this.zr=()=>this.Wr(),this.Hr=[],this.Jr()}Gr(e){this.Hr.push(e)}shutdown(){window.removeEventListener("online",this.Qr),window.removeEventListener("offline",this.zr)}Jr(){window.addEventListener("online",this.Qr),window.addEventListener("offline",this.zr)}jr(){R("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Hr)e(0)}Wr(){R("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Hr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let bo=null;function Fu(){return bo===null?bo=268435456+Math.round(2147483648*Math.random()):bo++,"0x"+bo.toString(16)}/**
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
 */const eC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class tC{constructor(e){this.Yr=e.Yr,this.Zr=e.Zr}Xr(e){this.eo=e}no(e){this.so=e}onMessage(e){this.io=e}close(){this.Zr()}send(e){this.Yr(e)}ro(){this.eo()}oo(e){this.so(e)}uo(e){this.io(e)}}/**
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
 */const Ue="WebChannelConnection";class nC extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.co=n+"://"+e.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get ho(){return!1}lo(e,n,r,i,s){const o=Fu(),a=this.fo(e,n);R("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const l={};return this._o(l,i,s),this.wo(e,a,l,r).then(u=>(R("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw th("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}mo(e,n,r,i,s,o){return this.lo(e,n,r,i,s)}_o(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+vi,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}fo(e,n){const r=eC[e];return`${this.co}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}wo(e,n,r,i){const s=Fu();return new Promise((o,a)=>{const l=new pk;l.setWithCredentials(!0),l.listenOnce(hk.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case bu.NO_ERROR:const c=l.getResponseJson();R(Ue,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case bu.TIMEOUT:R(Ue,`RPC '${e}' ${s} timed out`),a(new P(E.DEADLINE_EXCEEDED,"Request time out"));break;case bu.HTTP_ERROR:const d=l.getStatus();if(R(Ue,`RPC '${e}' ${s} failed with status:`,d,"response text:",l.getResponseText()),d>0){let h=l.getResponseJson();Array.isArray(h)&&(h=h[0]);const g=h==null?void 0:h.error;if(g&&g.status&&g.message){const y=function(v){const D=v.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(D)>=0?D:E.UNKNOWN}(g.status);a(new P(y,g.message))}else a(new P(E.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new P(E.UNAVAILABLE,"Connection failed."));break;default:M()}}finally{R(Ue,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);R(Ue,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}yo(e,n,r){const i=Fu(),s=[this.co,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=uk(),a=ck(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(l.xmlHttpFactory=new fk({})),this._o(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=s.join("");R(Ue,`Creating RPC '${e}' stream ${i}: ${u}`,l);const c=o.createWebChannel(u,l);let d=!1,h=!1;const g=new tC({Yr:v=>{h?R(Ue,`Not sending because RPC '${e}' stream ${i} is closed:`,v):(d||(R(Ue,`Opening RPC '${e}' stream ${i} transport.`),c.open(),d=!0),R(Ue,`RPC '${e}' stream ${i} sending:`,v),c.send(v))},Zr:()=>c.close()}),y=(v,D,p)=>{v.listen(D,f=>{try{p(f)}catch(m){setTimeout(()=>{throw m},0)}})};return y(c,Mo.EventType.OPEN,()=>{h||R(Ue,`RPC '${e}' stream ${i} transport opened.`)}),y(c,Mo.EventType.CLOSE,()=>{h||(h=!0,R(Ue,`RPC '${e}' stream ${i} transport closed`),g.oo())}),y(c,Mo.EventType.ERROR,v=>{h||(h=!0,th(Ue,`RPC '${e}' stream ${i} transport errored:`,v),g.oo(new P(E.UNAVAILABLE,"The operation could not be completed")))}),y(c,Mo.EventType.MESSAGE,v=>{var D;if(!h){const p=v.data[0];Q(!!p);const f=p,m=f.error||((D=f[0])===null||D===void 0?void 0:D.error);if(m){R(Ue,`RPC '${e}' stream ${i} received error:`,m);const w=m.status;let T=function(N){const x=fe[N];if(x!==void 0)return z0(x)}(w),I=m.message;T===void 0&&(T=E.INTERNAL,I="Unknown error status: "+w+" with message "+m.message),h=!0,g.oo(new P(T,I)),c.close()}else R(Ue,`RPC '${e}' stream ${i} received:`,p),g.uo(p)}}),y(a,dk.STAT_EVENT,v=>{v.stat===Xp.PROXY?R(Ue,`RPC '${e}' stream ${i} detected buffering proxy`):v.stat===Xp.NOPROXY&&R(Ue,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{g.ro()},0),g}}function Vu(){return typeof document<"u"?document:null}/**
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
 */function bl(t){return new dI(t,!0)}/**
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
 */class Wd{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Ys=e,this.timerId=n,this.po=r,this.Io=i,this.To=s,this.Eo=0,this.Ao=null,this.Ro=Date.now(),this.reset()}reset(){this.Eo=0}Po(){this.Eo=this.To}vo(e){this.cancel();const n=Math.floor(this.Eo+this.bo()),r=Math.max(0,Date.now()-this.Ro),i=Math.max(0,n-r);i>0&&R("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Eo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Ao=this.Ys.enqueueAfterDelay(this.timerId,i,()=>(this.Ro=Date.now(),e())),this.Eo*=this.Io,this.Eo<this.po&&(this.Eo=this.po),this.Eo>this.To&&(this.Eo=this.To)}Vo(){this.Ao!==null&&(this.Ao.skipDelay(),this.Ao=null)}cancel(){this.Ao!==null&&(this.Ao.cancel(),this.Ao=null)}bo(){return(Math.random()-.5)*this.Eo}}/**
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
 */class rw{constructor(e,n,r,i,s,o,a,l){this.Ys=e,this.So=r,this.Do=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Co=0,this.xo=null,this.No=null,this.stream=null,this.ko=new Wd(e,n)}$o(){return this.state===1||this.state===5||this.Mo()}Mo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.$o()&&await this.close(0)}Fo(){this.state=0,this.ko.reset()}Bo(){this.Mo()&&this.xo===null&&(this.xo=this.Ys.enqueueAfterDelay(this.So,6e4,()=>this.Lo()))}qo(e){this.Uo(),this.stream.send(e)}async Lo(){if(this.Mo())return this.close(0)}Uo(){this.xo&&(this.xo.cancel(),this.xo=null)}Ko(){this.No&&(this.No.cancel(),this.No=null)}async close(e,n){this.Uo(),this.Ko(),this.ko.cancel(),this.Co++,e!==4?this.ko.reset():n&&n.code===E.RESOURCE_EXHAUSTED?(tn(n.toString()),tn("Using maximum backoff delay to prevent overloading the backend."),this.ko.Po()):n&&n.code===E.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Go(),this.stream.close(),this.stream=null),this.state=e,await this.listener.no(n)}Go(){}auth(){this.state=1;const e=this.Qo(this.Co),n=this.Co;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Co===n&&this.jo(r,i)},r=>{e(()=>{const i=new P(E.UNKNOWN,"Fetching auth token failed: "+r.message);return this.zo(i)})})}jo(e,n){const r=this.Qo(this.Co);this.stream=this.Wo(e,n),this.stream.Xr(()=>{r(()=>(this.state=2,this.No=this.Ys.enqueueAfterDelay(this.Do,1e4,()=>(this.Mo()&&(this.state=3),Promise.resolve())),this.listener.Xr()))}),this.stream.no(i=>{r(()=>this.zo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Oo(){this.state=5,this.ko.vo(async()=>{this.state=0,this.start()})}zo(e){return R("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Qo(e){return n=>{this.Ys.enqueueAndForget(()=>this.Co===e?n():(R("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class rC extends rw{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.Tt=s}Wo(e,n){return this.connection.yo("Listen",e,n)}onMessage(e){this.ko.reset();const n=gI(this.Tt,e),r=function(i){if(!("targetChange"in i))return $.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?$.min():s.readTime?lt(s.readTime):$.min()}(e);return this.listener.Ho(n,r)}Jo(e){const n={};n.database=Os(this.Tt),n.addTarget=function(i,s){let o;const a=s.target;return o=sh(a)?{documents:vI(i,a)}:{query:wI(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=G0(i,s.resumeToken):s.snapshotVersion.compareTo($.min())>0&&(o.readTime=Ka(i,s.snapshotVersion.toTimestamp())),o}(this.Tt,e);const r=SI(this.Tt,e);r&&(n.labels=r),this.qo(n)}Yo(e){const n={};n.database=Os(this.Tt),n.removeTarget=e,this.qo(n)}}class iC extends rw{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.Tt=s,this.Zo=!1}get Xo(){return this.Zo}start(){this.Zo=!1,this.lastStreamToken=void 0,super.start()}Go(){this.Zo&&this.tu([])}Wo(e,n){return this.connection.yo("Write",e,n)}onMessage(e){if(Q(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Zo){this.ko.reset();const n=yI(e.writeResults,e.commitTime),r=lt(e.commitTime);return this.listener.eu(r,n)}return Q(!e.writeResults||e.writeResults.length===0),this.Zo=!0,this.listener.nu()}su(){const e={};e.database=Os(this.Tt),this.qo(e)}tu(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Y0(this.Tt,r))};this.qo(n)}}/**
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
 */class sC extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.Tt=i,this.iu=!1}ru(){if(this.iu)throw new P(E.FAILED_PRECONDITION,"The client has already been terminated.")}lo(e,n,r){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.lo(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new P(E.UNKNOWN,i.toString())})}mo(e,n,r,i){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.mo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new P(E.UNKNOWN,s.toString())})}terminate(){this.iu=!0}}class oC{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ou=0,this.uu=null,this.cu=!0}au(){this.ou===0&&(this.hu("Unknown"),this.uu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.uu=null,this.lu("Backend didn't respond within 10 seconds."),this.hu("Offline"),Promise.resolve())))}fu(e){this.state==="Online"?this.hu("Unknown"):(this.ou++,this.ou>=1&&(this.du(),this.lu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.hu("Offline")))}set(e){this.du(),this.ou=0,e==="Online"&&(this.cu=!1),this.hu(e)}hu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}lu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.cu?(tn(n),this.cu=!1):R("OnlineStateTracker",n)}du(){this.uu!==null&&(this.uu.cancel(),this.uu=null)}}/**
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
 */class aC{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this._u=[],this.wu=new Map,this.mu=new Set,this.gu=[],this.yu=s,this.yu.Gr(o=>{r.enqueueAndForget(async()=>{Sr(this)&&(R("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=F(a);l.mu.add(4),await so(l),l.pu.set("Unknown"),l.mu.delete(4),await Fl(l)}(this))})}),this.pu=new oC(r,i)}}async function Fl(t){if(Sr(t))for(const e of t.gu)await e(!0)}async function so(t){for(const e of t.gu)await e(!1)}function iw(t,e){const n=F(t);n.wu.has(e.targetId)||(n.wu.set(e.targetId,e),Qd(n)?Gd(n):Ei(n).Mo()&&qd(n,e))}function sw(t,e){const n=F(t),r=Ei(n);n.wu.delete(e),r.Mo()&&ow(n,e),n.wu.size===0&&(r.Mo()?r.Bo():Sr(n)&&n.pu.set("Unknown"))}function qd(t,e){t.Iu.Ot(e.targetId),Ei(t).Jo(e)}function ow(t,e){t.Iu.Ot(e),Ei(t).Yo(e)}function Gd(t){t.Iu=new lI({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ie:e=>t.wu.get(e)||null}),Ei(t).start(),t.pu.au()}function Qd(t){return Sr(t)&&!Ei(t).$o()&&t.wu.size>0}function Sr(t){return F(t).mu.size===0}function aw(t){t.Iu=void 0}async function lC(t){t.wu.forEach((e,n)=>{qd(t,e)})}async function uC(t,e){aw(t),Qd(t)?(t.pu.fu(e),Gd(t)):t.pu.set("Unknown")}async function cC(t,e,n){if(t.pu.set("Online"),e instanceof q0&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.wu.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.wu.delete(o),r.Iu.removeTarget(o))}(t,e)}catch(r){R("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await qa(t,r)}else if(e instanceof ea?t.Iu.Qt(e):e instanceof W0?t.Iu.Zt(e):t.Iu.Wt(e),!n.isEqual($.min()))try{const r=await nw(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.Iu.ee(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.wu.get(l);u&&i.wu.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=i.wu.get(a);if(!l)return;i.wu.set(a,l.withResumeToken(Ke.EMPTY_BYTE_STRING,l.snapshotVersion)),ow(i,a);const u=new ir(l.target,a,1,l.sequenceNumber);qd(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){R("RemoteStore","Failed to raise snapshot:",r),await qa(t,r)}}async function qa(t,e,n){if(!to(e))throw e;t.mu.add(1),await so(t),t.pu.set("Offline"),n||(n=()=>nw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{R("RemoteStore","Retrying IndexedDB access"),await n(),t.mu.delete(1),await Fl(t)})}function lw(t,e){return e().catch(n=>qa(t,n,e))}async function Vl(t){const e=F(t),n=$n(e);let r=e._u.length>0?e._u[e._u.length-1].batchId:-1;for(;hC(e);)try{const i=await QI(e.localStore,r);if(i===null){e._u.length===0&&n.Bo();break}r=i.batchId,dC(e,i)}catch(i){await qa(e,i)}uw(e)&&cw(e)}function hC(t){return Sr(t)&&t._u.length<10}function dC(t,e){t._u.push(e);const n=$n(t);n.Mo()&&n.Xo&&n.tu(e.mutations)}function uw(t){return Sr(t)&&!$n(t).$o()&&t._u.length>0}function cw(t){$n(t).start()}async function fC(t){$n(t).su()}async function pC(t){const e=$n(t);for(const n of t._u)e.tu(n.mutations)}async function mC(t,e,n){const r=t._u.shift(),i=Bd.from(r,e,n);await lw(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Vl(t)}async function gC(t,e){e&&$n(t).Xo&&await async function(n,r){if(i=r.code,V0(i)&&i!==E.ABORTED){const s=n._u.shift();$n(n).Fo(),await lw(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Vl(n)}var i}(t,e),uw(t)&&cw(t)}async function wm(t,e){const n=F(t);n.asyncQueue.verifyOperationInProgress(),R("RemoteStore","RemoteStore received new credentials");const r=Sr(n);n.mu.add(3),await so(n),r&&n.pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.mu.delete(3),await Fl(n)}async function yC(t,e){const n=F(t);e?(n.mu.delete(2),await Fl(n)):e||(n.mu.add(2),await so(n),n.pu.set("Unknown"))}function Ei(t){return t.Tu||(t.Tu=function(e,n,r){const i=F(e);return i.ru(),new rC(n,i.connection,i.authCredentials,i.appCheckCredentials,i.Tt,r)}(t.datastore,t.asyncQueue,{Xr:lC.bind(null,t),no:uC.bind(null,t),Ho:cC.bind(null,t)}),t.gu.push(async e=>{e?(t.Tu.Fo(),Qd(t)?Gd(t):t.pu.set("Unknown")):(await t.Tu.stop(),aw(t))})),t.Tu}function $n(t){return t.Eu||(t.Eu=function(e,n,r){const i=F(e);return i.ru(),new iC(n,i.connection,i.authCredentials,i.appCheckCredentials,i.Tt,r)}(t.datastore,t.asyncQueue,{Xr:fC.bind(null,t),no:gC.bind(null,t),nu:pC.bind(null,t),eu:mC.bind(null,t)}),t.gu.push(async e=>{e?(t.Eu.Fo(),await Vl(t)):(await t.Eu.stop(),t._u.length>0&&(R("RemoteStore",`Stopping write stream with ${t._u.length} pending writes`),t._u=[]))})),t.Eu}/**
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
 */class Xd{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Qt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Xd(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new P(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Yd(t,e){if(tn("AsyncQueue",`${e}: ${t}`),to(t))return new P(E.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Wr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||L.comparator(n.key,r.key):(n,r)=>L.comparator(n.key,r.key),this.keyedMap=Fi(),this.sortedSet=new Se(this.comparator)}static emptySet(e){return new Wr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Wr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Wr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Em{constructor(){this.Au=new Se(L.comparator)}track(e){const n=e.doc.key,r=this.Au.get(n);r?e.type!==0&&r.type===3?this.Au=this.Au.insert(n,e):e.type===3&&r.type!==1?this.Au=this.Au.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Au=this.Au.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Au=this.Au.remove(n):e.type===1&&r.type===2?this.Au=this.Au.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):M():this.Au=this.Au.insert(n,e)}Ru(){const e=[];return this.Au.inorderTraversal((n,r)=>{e.push(r)}),e}}class ui{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ui(e,n,Wr.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ol(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class vC{constructor(){this.Pu=void 0,this.listeners=[]}}class wC{constructor(){this.queries=new wi(e=>D0(e),Ol),this.onlineState="Unknown",this.vu=new Set}}async function EC(t,e){const n=F(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new vC),i)try{s.Pu=await n.onListen(r)}catch(o){const a=Yd(o,`Initialization of query '${ah(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.bu(n.onlineState),s.Pu&&e.Vu(s.Pu)&&Jd(n)}async function SC(t,e){const n=F(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function _C(t,e){const n=F(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Vu(i)&&(r=!0);o.Pu=i}}r&&Jd(n)}function TC(t,e,n){const r=F(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Jd(t){t.vu.forEach(e=>{e.next()})}class kC{constructor(e,n,r){this.query=e,this.Su=n,this.Du=!1,this.Cu=null,this.onlineState="Unknown",this.options=r||{}}Vu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ui(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Du?this.xu(e)&&(this.Su.next(e),n=!0):this.Nu(e,this.onlineState)&&(this.ku(e),n=!0),this.Cu=e,n}onError(e){this.Su.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Cu&&!this.Du&&this.Nu(this.Cu,e)&&(this.ku(this.Cu),n=!0),n}Nu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.$u||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}xu(e){if(e.docChanges.length>0)return!0;const n=this.Cu&&this.Cu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ku(e){e=ui.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Du=!0,this.Su.next(e)}}/**
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
 */class hw{constructor(e){this.key=e}}class dw{constructor(e){this.key=e}}class IC{constructor(e,n){this.query=e,this.Ku=n,this.Gu=null,this.hasCachedResults=!1,this.current=!1,this.Qu=j(),this.mutatedKeys=j(),this.ju=x0(e),this.zu=new Wr(this.ju)}get Wu(){return this.Ku}Hu(e,n){const r=n?n.Ju:new Em,i=n?n.zu:this.zu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,d)=>{const h=i.get(c),g=Ll(this.query,d)?d:null,y=!!h&&this.mutatedKeys.has(h.key),v=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let D=!1;h&&g?h.data.isEqual(g.data)?y!==v&&(r.track({type:3,doc:g}),D=!0):this.Yu(h,g)||(r.track({type:2,doc:g}),D=!0,(l&&this.ju(g,l)>0||u&&this.ju(g,u)<0)&&(a=!0)):!h&&g?(r.track({type:0,doc:g}),D=!0):h&&!g&&(r.track({type:1,doc:h}),D=!0,(l||u)&&(a=!0)),D&&(g?(o=o.add(g),s=v?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{zu:o,Ju:r,Li:a,mutatedKeys:s}}Yu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.zu;this.zu=e.zu,this.mutatedKeys=e.mutatedKeys;const s=e.Ju.Ru();s.sort((u,c)=>function(d,h){const g=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M()}};return g(d)-g(h)}(u.type,c.type)||this.ju(u.doc,c.doc)),this.Zu(r);const o=n?this.Xu():[],a=this.Qu.size===0&&this.current?1:0,l=a!==this.Gu;return this.Gu=a,s.length!==0||l?{snapshot:new ui(this.query,e.zu,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),tc:o}:{tc:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({zu:this.zu,Ju:new Em,mutatedKeys:this.mutatedKeys,Li:!1},!1)):{tc:[]}}ec(e){return!this.Ku.has(e)&&!!this.zu.has(e)&&!this.zu.get(e).hasLocalMutations}Zu(e){e&&(e.addedDocuments.forEach(n=>this.Ku=this.Ku.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ku=this.Ku.delete(n)),this.current=e.current)}Xu(){if(!this.current)return[];const e=this.Qu;this.Qu=j(),this.zu.forEach(r=>{this.ec(r.key)&&(this.Qu=this.Qu.add(r.key))});const n=[];return e.forEach(r=>{this.Qu.has(r)||n.push(new dw(r))}),this.Qu.forEach(r=>{e.has(r)||n.push(new hw(r))}),n}nc(e){this.Ku=e.Yi,this.Qu=j();const n=this.Hu(e.documents);return this.applyChanges(n,!0)}sc(){return ui.fromInitialDocuments(this.query,this.zu,this.mutatedKeys,this.Gu===0,this.hasCachedResults)}}class CC{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class NC{constructor(e){this.key=e,this.ic=!1}}class AC{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.rc={},this.oc=new wi(a=>D0(a),Ol),this.uc=new Map,this.cc=new Set,this.ac=new Se(L.comparator),this.hc=new Map,this.lc=new jd,this.fc={},this.dc=new Map,this._c=li.Sn(),this.onlineState="Unknown",this.wc=void 0}get isPrimaryClient(){return this.wc===!0}}async function DC(t,e){const n=FC(t);let r,i;const s=n.oc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.sc();else{const o=await XI(n.localStore,nn(e));n.isPrimaryClient&&iw(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await xC(n,e,r,a==="current",o.resumeToken)}return i}async function xC(t,e,n,r,i){t.mc=(d,h,g)=>async function(y,v,D,p){let f=v.view.Hu(D);f.Li&&(f=await gm(y.localStore,v.query,!1).then(({documents:T})=>v.view.Hu(T,f)));const m=p&&p.targetChanges.get(v.targetId),w=v.view.applyChanges(f,y.isPrimaryClient,m);return _m(y,v.targetId,w.tc),w.snapshot}(t,d,h,g);const s=await gm(t.localStore,e,!0),o=new IC(e,s.Yi),a=o.Hu(s.documents),l=io.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);_m(t,n,u.tc);const c=new CC(e,n,o);return t.oc.set(e,c),t.uc.has(n)?t.uc.get(n).push(e):t.uc.set(n,[e]),u.snapshot}async function RC(t,e){const n=F(t),r=n.oc.get(e),i=n.uc.get(r.targetId);if(i.length>1)return n.uc.set(r.targetId,i.filter(s=>!Ol(s,e))),void n.oc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await uh(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),sw(n.remoteStore,r.targetId),ch(n,r.targetId)}).catch(eo)):(ch(n,r.targetId),await uh(n.localStore,r.targetId,!0))}async function PC(t,e,n){const r=VC(t);try{const i=await function(s,o){const a=F(s),l=we.now(),u=o.reduce((h,g)=>h.add(g.key),j());let c,d;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>{let g=rn(),y=j();return a.ji.getEntries(h,u).next(v=>{g=v,g.forEach((D,p)=>{p.isValidDocument()||(y=y.add(D))})}).next(()=>a.localDocuments.getOverlayedDocuments(h,g)).next(v=>{c=v;const D=[];for(const p of o){const f=nI(p,c.get(p.key).overlayedDocument);f!=null&&D.push(new Bn(p.key,f,N0(f.value.mapValue),Ze.exists(!0)))}return a.mutationQueue.addMutationBatch(h,l,D,o)}).next(v=>{d=v;const D=v.applyToLocalDocumentSet(c,y);return a.documentOverlayCache.saveOverlays(h,v.batchId,D)})}).then(()=>({batchId:d.batchId,changes:j0(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.fc[s.currentUser.toKey()];l||(l=new Se(G)),l=l.insert(o,a),s.fc[s.currentUser.toKey()]=l}(r,i.batchId,n),await oo(r,i.changes),await Vl(r.remoteStore)}catch(i){const s=Yd(i,"Failed to persist write");n.reject(s)}}async function fw(t,e){const n=F(t);try{const r=await qI(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.hc.get(s);o&&(Q(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ic=!0:i.modifiedDocuments.size>0?Q(o.ic):i.removedDocuments.size>0&&(Q(o.ic),o.ic=!1))}),await oo(n,r,e)}catch(r){await eo(r)}}function Sm(t,e,n){const r=F(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.oc.forEach((s,o)=>{const a=o.view.bu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=F(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const d of c.listeners)d.bu(o)&&(l=!0)}),l&&Jd(a)}(r.eventManager,e),i.length&&r.rc.Ho(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function OC(t,e,n){const r=F(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.hc.get(e),s=i&&i.key;if(s){let o=new Se(L.comparator);o=o.insert(s,Ie.newNoDocument(s,$.min()));const a=j().add(s),l=new Ul($.min(),new Map,new Ee(G),o,a);await fw(r,l),r.ac=r.ac.remove(s),r.hc.delete(e),Zd(r)}else await uh(r.localStore,e,!1).then(()=>ch(r,e,n)).catch(eo)}async function LC(t,e){const n=F(t),r=e.batch.batchId;try{const i=await WI(n.localStore,e);mw(n,r,null),pw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await oo(n,i)}catch(i){await eo(i)}}async function MC(t,e,n){const r=F(t);try{const i=await function(s,o){const a=F(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(Q(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);mw(r,e,n),pw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await oo(r,i)}catch(i){await eo(i)}}function pw(t,e){(t.dc.get(e)||[]).forEach(n=>{n.resolve()}),t.dc.delete(e)}function mw(t,e,n){const r=F(t);let i=r.fc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.fc[r.currentUser.toKey()]=i}}function ch(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.uc.get(e))t.oc.delete(r),n&&t.rc.gc(r,n);t.uc.delete(e),t.isPrimaryClient&&t.lc.ds(e).forEach(r=>{t.lc.containsKey(r)||gw(t,r)})}function gw(t,e){t.cc.delete(e.path.canonicalString());const n=t.ac.get(e);n!==null&&(sw(t.remoteStore,n),t.ac=t.ac.remove(e),t.hc.delete(n),Zd(t))}function _m(t,e,n){for(const r of n)r instanceof hw?(t.lc.addReference(r.key,e),$C(t,r)):r instanceof dw?(R("SyncEngine","Document no longer in limbo: "+r.key),t.lc.removeReference(r.key,e),t.lc.containsKey(r.key)||gw(t,r.key)):M()}function $C(t,e){const n=e.key,r=n.path.canonicalString();t.ac.get(n)||t.cc.has(r)||(R("SyncEngine","New document in limbo: "+n),t.cc.add(r),Zd(t))}function Zd(t){for(;t.cc.size>0&&t.ac.size<t.maxConcurrentLimboResolutions;){const e=t.cc.values().next().value;t.cc.delete(e);const n=new L(se.fromString(e)),r=t._c.next();t.hc.set(r,new NC(n)),t.ac=t.ac.insert(n,r),iw(t.remoteStore,new ir(nn(A0(n.path)),r,2,$d.at))}}async function oo(t,e,n){const r=F(t),i=[],s=[],o=[];r.oc.isEmpty()||(r.oc.forEach((a,l)=>{o.push(r.mc(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=Kd.Ni(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.rc.Ho(i),await async function(a,l){const u=F(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>_.forEach(l,d=>_.forEach(d.Ci,h=>u.persistence.referenceDelegate.addReference(c,d.targetId,h)).next(()=>_.forEach(d.xi,h=>u.persistence.referenceDelegate.removeReference(c,d.targetId,h)))))}catch(c){if(!to(c))throw c;R("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const d=c.targetId;if(!c.fromCache){const h=u.Ki.get(d),g=h.snapshotVersion,y=h.withLastLimboFreeSnapshotVersion(g);u.Ki=u.Ki.insert(d,y)}}}(r.localStore,s))}async function UC(t,e){const n=F(t);if(!n.currentUser.isEqual(e)){R("SyncEngine","User change. New user:",e.toKey());const r=await tw(n.localStore,e);n.currentUser=e,function(i,s){i.dc.forEach(o=>{o.forEach(a=>{a.reject(new P(E.CANCELLED,s))})}),i.dc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await oo(n,r.Wi)}}function bC(t,e){const n=F(t),r=n.hc.get(e);if(r&&r.ic)return j().add(r.key);{let i=j();const s=n.uc.get(e);if(!s)return i;for(const o of s){const a=n.oc.get(o);i=i.unionWith(a.view.Wu)}return i}}function FC(t){const e=F(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=fw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=bC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=OC.bind(null,e),e.rc.Ho=_C.bind(null,e.eventManager),e.rc.gc=TC.bind(null,e.eventManager),e}function VC(t){const e=F(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=LC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=MC.bind(null,e),e}class zC{constructor(){this.synchronizeTabs=!1}async initialize(e){this.Tt=bl(e.databaseInfo.databaseId),this.sharedClientState=this.Ic(e),this.persistence=this.Tc(e),await this.persistence.start(),this.localStore=this.Ec(e),this.gcScheduler=this.Ac(e,this.localStore),this.indexBackfillerScheduler=this.Rc(e,this.localStore)}Ac(e,n){return null}Rc(e,n){return null}Ec(e){return KI(this.persistence,new jI,e.initialUser,this.Tt)}Tc(e){return new zI(Hd.qs,this.Tt)}Ic(e){return new JI}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class BC{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Sm(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=UC.bind(null,this.syncEngine),await yC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new wC}createDatastore(e){const n=bl(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new nC(i));var i;return function(s,o,a,l){return new sC(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>Sm(this.syncEngine,a,0),o=vm.C()?new vm:new ZI,new aC(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new AC(r,i,s,o,a,l);return u&&(c.wc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=F(e);R("RemoteStore","RemoteStore shutting down."),n.mu.add(5),await so(n),n.yu.shutdown(),n.pu.set("Unknown")}(this.remoteStore)}}/**
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
 */class jC{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.vc(this.observer.next,e)}error(e){this.observer.error?this.vc(this.observer.error,e):tn("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}vc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class HC{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new P(E.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const n=await async function(r,i){const s=F(r),o=Os(s.Tt)+"/documents",a={documents:i.map(d=>Wa(s.Tt,d))},l=await s.mo("BatchGetDocuments",o,a,i.length),u=new Map;l.forEach(d=>{const h=mI(s.Tt,d);u.set(h.key.toString(),h)});const c=[];return i.forEach(d=>{const h=u.get(d.toString());Q(!!h),c.push(h)}),c}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Vd(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=L.fromPath(r);this.mutations.push(new F0(i,this.precondition(i)))}),await async function(n,r){const i=F(n),s=Os(i.Tt)+"/documents",o={writes:r.map(a=>Y0(i.Tt,a))};await i.lo("Commit",s,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw M();n=$.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new P(E.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual($.min())?Ze.exists(!1):Ze.updateTime(n):Ze.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual($.min()))throw new P(E.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Ze.updateTime(n)}return Ze.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class KC{constructor(e,n,r,i,s){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=i,this.deferred=s,this.Mc=r.maxAttempts,this.ko=new Wd(this.asyncQueue,"transaction_retry")}run(){this.Mc-=1,this.Oc()}Oc(){this.ko.vo(async()=>{const e=new HC(this.datastore),n=this.Fc(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.Bc(i)}))}).catch(r=>{this.Bc(r)})})}Fc(e){try{const n=this.updateFunction(e);return!no(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}Bc(e){this.Mc>0&&this.Lc(e)?(this.Mc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Oc(),Promise.resolve()))):this.deferred.reject(e)}Lc(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!V0(n)}return!1}}/**
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
 */class WC{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=be.UNAUTHENTICATED,this.clientId=y0.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{R("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(R("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new P(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Qt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Yd(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function qC(t,e){t.asyncQueue.verifyOperationInProgress(),R("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await tw(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function GC(t,e){t.asyncQueue.verifyOperationInProgress();const n=await QC(t);R("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>wm(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>wm(e.remoteStore,s)),t.onlineComponents=e}async function QC(t){return t.offlineComponents||(R("FirestoreClient","Using default OfflineComponentProvider"),await qC(t,new zC)),t.offlineComponents}async function ef(t){return t.onlineComponents||(R("FirestoreClient","Using default OnlineComponentProvider"),await GC(t,new BC)),t.onlineComponents}function XC(t){return ef(t).then(e=>e.syncEngine)}function YC(t){return ef(t).then(e=>e.datastore)}async function JC(t){const e=await ef(t),n=e.eventManager;return n.onListen=DC.bind(null,e.syncEngine),n.onUnlisten=RC.bind(null,e.syncEngine),n}function ZC(t,e,n={}){const r=new Qt;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new jC({next:d=>{s.enqueueAndForget(()=>SC(i,c)),d.fromCache&&a.source==="server"?l.reject(new P(E.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(d)},error:d=>l.reject(d)}),c=new kC(o,u,{includeMetadataChanges:!0,$u:!0});return EC(i,c)}(await JC(t),t.asyncQueue,e,n,r)),r.promise}const Tm=new Map;/**
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
 */function yw(t,e,n){if(!n)throw new P(E.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function eN(t,e,n,r){if(e===!0&&r===!0)throw new P(E.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function km(t){if(!L.isDocumentKey(t))throw new P(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Im(t){if(L.isDocumentKey(t))throw new P(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function tf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":M()}function ci(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new P(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=tf(t);throw new P(E.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Cm{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new P(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new P(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,eN("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class zl{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Cm({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new P(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new P(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Cm(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new mk;switch(n.type){case"gapi":const r=n.client;return new wk(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new P(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Tm.get(e);n&&(R("ComponentProvider","Removing Datastore"),Tm.delete(e),n.terminate())}(this),Promise.resolve()}}function tN(t,e,n,r={}){var i;const s=(t=ci(t,zl))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&th("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=be.MOCK_USER;else{o=GS(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new P(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new be(l)}t._authCredentials=new gk(new g0(o,a))}}/**
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
 */class ut{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Rn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ut(this.firestore,e,this._key)}}class Bl{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Bl(this.firestore,e,this._query)}}class Rn extends Bl{constructor(e,n,r){super(e,n,A0(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ut(this.firestore,null,new L(e))}withConverter(e){return new Rn(this.firestore,e,this._path)}}function nf(t,e,...n){if(t=Oe(t),yw("collection","path",e),t instanceof zl){const r=se.fromString(e,...n);return Im(r),new Rn(t,null,r)}{if(!(t instanceof ut||t instanceof Rn))throw new P(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(se.fromString(e,...n));return Im(r),new Rn(t.firestore,null,r)}}function nN(t,e,...n){if(t=Oe(t),arguments.length===1&&(e=y0.R()),yw("doc","path",e),t instanceof zl){const r=se.fromString(e,...n);return km(r),new ut(t,null,new L(r))}{if(!(t instanceof ut||t instanceof Rn))throw new P(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(se.fromString(e,...n));return km(r),new ut(t.firestore,t instanceof Rn?t.converter:null,new L(r))}}/**
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
 */class rN{constructor(){this.qc=Promise.resolve(),this.Uc=[],this.Kc=!1,this.Gc=[],this.Qc=null,this.jc=!1,this.zc=!1,this.Wc=[],this.ko=new Wd(this,"async_queue_retry"),this.Hc=()=>{const n=Vu();n&&R("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ko.Vo()};const e=Vu();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Jc(),this.Yc(e)}enterRestrictedMode(e){if(!this.Kc){this.Kc=!0,this.zc=e||!1;const n=Vu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Hc)}}enqueue(e){if(this.Jc(),this.Kc)return new Promise(()=>{});const n=new Qt;return this.Yc(()=>this.Kc&&this.zc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Uc.push(e),this.Zc()))}async Zc(){if(this.Uc.length!==0){try{await this.Uc[0](),this.Uc.shift(),this.ko.reset()}catch(e){if(!to(e))throw e;R("AsyncQueue","Operation failed with retryable error: "+e)}this.Uc.length>0&&this.ko.vo(()=>this.Zc())}}Yc(e){const n=this.qc.then(()=>(this.jc=!0,e().catch(r=>{this.Qc=r,this.jc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw tn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.jc=!1,r))));return this.qc=n,n}enqueueAfterDelay(e,n,r){this.Jc(),this.Wc.indexOf(e)>-1&&(n=0);const i=Xd.createAndSchedule(this,e,n,r,s=>this.Xc(s));return this.Gc.push(i),i}Jc(){this.Qc&&M()}verifyOperationInProgress(){}async ta(){let e;do e=this.qc,await e;while(e!==this.qc)}ea(e){for(const n of this.Gc)if(n.timerId===e)return!0;return!1}na(e){return this.ta().then(()=>{this.Gc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Gc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ta()})}sa(e){this.Wc.push(e)}Xc(e){const n=this.Gc.indexOf(e);this.Gc.splice(n,1)}}class jl extends zl{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new rN,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||vw(this),this._firestoreClient.terminate()}}function iN(t,e){const n=typeof t=="object"?t:hv(),r=typeof t=="string"?t:e||"(default)",i=fd(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=KS("firestore");s&&tN(i,...s)}return i}function rf(t){return t._firestoreClient||vw(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function vw(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new Dk(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new WC(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
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
 */class mr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new mr(Ke.fromBase64String(e))}catch(n){throw new P(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new mr(Ke.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class ao{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new P(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ve(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class sf{constructor(e){this._methodName=e}}/**
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
 */class of{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new P(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new P(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return G(this._lat,e._lat)||G(this._long,e._long)}}/**
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
 */const sN=/^__.*__$/;class oN{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Bn(e,this.data,this.fieldMask,n,this.fieldTransforms):new ro(e,this.data,n,this.fieldTransforms)}}class ww{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Bn(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Ew(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M()}}class af{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.Tt=r,this.ignoreUndefinedProperties=i,s===void 0&&this.ia(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ra(){return this.settings.ra}oa(e){return new af(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.Tt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ua(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.oa({path:r,ca:!1});return i.aa(e),i}ha(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.oa({path:r,ca:!1});return i.ia(),i}la(e){return this.oa({path:void 0,ca:!0})}fa(e){return Ga(e,this.settings.methodName,this.settings.da||!1,this.path,this.settings._a)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ia(){if(this.path)for(let e=0;e<this.path.length;e++)this.aa(this.path.get(e))}aa(e){if(e.length===0)throw this.fa("Document fields must not be empty");if(Ew(this.ra)&&sN.test(e))throw this.fa('Document fields cannot begin and end with "__"')}}class aN{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.Tt=r||bl(e)}wa(e,n,r,i=!1){return new af({ra:e,methodName:n,_a:r,path:Ve.emptyPath(),ca:!1,da:i},this.databaseId,this.Tt,this.ignoreUndefinedProperties)}}function Sw(t){const e=t._freezeSettings(),n=bl(t._databaseId);return new aN(t._databaseId,!!e.ignoreUndefinedProperties,n)}function lN(t,e,n,r,i,s={}){const o=t.wa(s.merge||s.mergeFields?2:0,e,n,i);lf("Data must be an object, but it was:",o,r);const a=kw(r,o);let l,u;if(s.merge)l=new ot(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const d of s.mergeFields){const h=hh(e,d,n);if(!o.contains(h))throw new P(E.INVALID_ARGUMENT,`Field '${h}' is specified in your field mask but missing from your input data.`);Cw(c,h)||c.push(h)}l=new ot(c),u=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,u=o.fieldTransforms;return new oN(new qe(a),l,u)}class Hl extends sf{_toFieldTransform(e){if(e.ra!==2)throw e.ra===1?e.fa(`${this._methodName}() can only appear at the top level of your update data`):e.fa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Hl}}function _w(t,e,n,r){const i=t.wa(1,e,n);lf("Data must be an object, but it was:",i,r);const s=[],o=qe.empty();Er(r,(l,u)=>{const c=uf(e,l,n);u=Oe(u);const d=i.ha(c);if(u instanceof Hl)s.push(c);else{const h=Kl(u,d);h!=null&&(s.push(c),o.set(c,h))}});const a=new ot(s);return new ww(o,a,i.fieldTransforms)}function Tw(t,e,n,r,i,s){const o=t.wa(1,e,n),a=[hh(e,r,n)],l=[i];if(s.length%2!=0)throw new P(E.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let h=0;h<s.length;h+=2)a.push(hh(e,s[h])),l.push(s[h+1]);const u=[],c=qe.empty();for(let h=a.length-1;h>=0;--h)if(!Cw(u,a[h])){const g=a[h];let y=l[h];y=Oe(y);const v=o.ha(g);if(y instanceof Hl)u.push(g);else{const D=Kl(y,v);D!=null&&(u.push(g),c.set(g,D))}}const d=new ot(u);return new ww(c,d,o.fieldTransforms)}function Kl(t,e){if(Iw(t=Oe(t)))return lf("Unsupported field value:",e,t),kw(t,e);if(t instanceof sf)return function(n,r){if(!Ew(r.ra))throw r.fa(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.fa(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ca&&e.ra!==4)throw e.fa("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=Kl(o,r.la(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=Oe(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return Xk(r.Tt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=we.fromDate(n);return{timestampValue:Ka(r.Tt,i)}}if(n instanceof we){const i=new we(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ka(r.Tt,i)}}if(n instanceof of)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof mr)return{bytesValue:G0(r.Tt,n._byteString)};if(n instanceof ut){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.fa(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:zd(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.fa(`Unsupported field value: ${tf(n)}`)}(t,e)}function kw(t,e){const n={};return v0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Er(t,(r,i)=>{const s=Kl(i,e.ua(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Iw(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof we||t instanceof of||t instanceof mr||t instanceof ut||t instanceof sf)}function lf(t,e,n){if(!Iw(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=tf(n);throw r==="an object"?e.fa(t+" a custom object"):e.fa(t+" "+r)}}function hh(t,e,n){if((e=Oe(e))instanceof ao)return e._internalPath;if(typeof e=="string")return uf(t,e);throw Ga("Field path arguments must be of type string or ",t,!1,void 0,n)}const uN=new RegExp("[~\\*/\\[\\]]");function uf(t,e,n){if(e.search(uN)>=0)throw Ga(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ao(...e.split("."))._internalPath}catch{throw Ga(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ga(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new P(E.INVALID_ARGUMENT,a+t+l)}function Cw(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Qa{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ut(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new cN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Nw("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class cN extends Qa{data(){return super.data()}}function Nw(t,e){return typeof e=="string"?uf(t,e):e instanceof ao?e._internalPath:e._delegate._internalPath}/**
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
 */function hN(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new P(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Aw{convertValue(e,n="none"){switch(pr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return pe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(si(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw M()}}convertObject(e,n){const r={};return Er(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new of(pe(e.latitude),pe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=E0(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ds(e));default:return null}}convertTimestamp(e){const n=Mn(e);return new we(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=se.fromString(e);Q(ew(r));const i=new As(r.get(1),r.get(3)),s=new L(r.popFirst(5));return i.isEqual(n)||tn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function dN(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class fN extends Aw{constructor(e){super(),this.firestore=e}convertBytes(e){return new mr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ut(this.firestore,null,n)}}/**
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
 */class Vi{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Dw extends Qa{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ta(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Nw("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class ta extends Dw{data(e={}){return super.data(e)}}class pN{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Vi(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new ta(this._firestore,this._userDataWriter,r.key,r,new Vi(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new P(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new ta(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Vi(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new ta(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Vi(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:mN(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function mN(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M()}}class xw extends Aw{constructor(e){super(),this.firestore=e}convertBytes(e){return new mr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ut(this.firestore,null,n)}}function Rw(t){t=ci(t,Bl);const e=ci(t.firestore,jl),n=rf(e),r=new xw(e);return hN(t._query),ZC(n,t._query).then(i=>new pN(e,r,t,i))}function gN(t,e,n,...r){t=ci(t,ut);const i=ci(t.firestore,jl),s=Sw(i);let o;return o=typeof(e=Oe(e))=="string"||e instanceof ao?Tw(s,"updateDoc",t._key,e,n,r):_w(s,"updateDoc",t._key,e),yN(i,[o.toMutation(t._key,Ze.exists(!0))])}function yN(t,e){return function(n,r){const i=new Qt;return n.asyncQueue.enqueueAndForget(async()=>PC(await XC(n),r,i)),i.promise}(rf(t),e)}const vN={maxAttempts:5};function Pi(t,e){if((t=Oe(t)).firestore!==e)throw new P(E.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 */class wN extends class{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=Sw(e)}get(e){const n=Pi(e,this._firestore),r=new fN(this._firestore);return this._transaction.lookup([n._key]).then(i=>{if(!i||i.length!==1)return M();const s=i[0];if(s.isFoundDocument())return new Qa(this._firestore,r,s.key,s,n.converter);if(s.isNoDocument())return new Qa(this._firestore,r,n._key,null,n.converter);throw M()})}set(e,n,r){const i=Pi(e,this._firestore),s=dN(i.converter,n,r),o=lN(this._dataReader,"Transaction.set",i._key,s,i.converter!==null,r);return this._transaction.set(i._key,o),this}update(e,n,r,...i){const s=Pi(e,this._firestore);let o;return o=typeof(n=Oe(n))=="string"||n instanceof ao?Tw(this._dataReader,"Transaction.update",s._key,n,r,i):_w(this._dataReader,"Transaction.update",s._key,n),this._transaction.update(s._key,o),this}delete(e){const n=Pi(e,this._firestore);return this._transaction.delete(n._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=Pi(e,this._firestore),r=new xw(this._firestore);return super.get(e).then(i=>new Dw(this._firestore,r,n._key,i._document,new Vi(!1,!1),n.converter))}}function EN(t,e,n){t=ci(t,jl);const r=Object.assign(Object.assign({},vN),n);return function(i){if(i.maxAttempts<1)throw new P(E.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(i,s,o){const a=new Qt;return i.asyncQueue.enqueueAndForget(async()=>{const l=await YC(i);new KC(i.asyncQueue,l,o,s,a).run()}),a.promise}(rf(t),i=>e(new wN(t,i)),r)}(function(t,e=!0){(function(n){vi=n})(Hs),ni(new hr("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new jl(new yk(n.getProvider("auth-internal")),new Sk(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new P(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new As(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),xn(Yp,"3.9.0",t),xn(Yp,"3.9.0","esm2017")})();function cf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Pw(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const SN=Pw,Ow=new Bs("auth","Firebase",Pw());/**
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
 */const Nm=new hd("@firebase/auth");function na(t,...e){Nm.logLevel<=q.ERROR&&Nm.error(`Auth (${Hs}): ${t}`,...e)}/**
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
 */function Ft(t,...e){throw hf(t,...e)}function Mt(t,...e){return hf(t,...e)}function Lw(t,e,n){const r=Object.assign(Object.assign({},SN()),{[e]:n});return new Bs("auth","Firebase",r).create(e,{appName:t.name})}function _N(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ft(t,"argument-error"),Lw(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function hf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Ow.create(t,...e)}function U(t,e,...n){if(!t)throw hf(e,...n)}function Wt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw na(e),new Error(e)}function sn(t,e){t||Wt(e)}/**
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
 */const Am=new Map;function qt(t){sn(t instanceof Function,"Expected a class definition");let e=Am.get(t);return e?(sn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Am.set(t,e),e)}/**
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
 */function TN(t,e){const n=fd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ra(s,e??{}))return i;Ft(i,"already-initialized")}return n.initialize({options:e})}function kN(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(qt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function dh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function IN(){return Dm()==="http:"||Dm()==="https:"}function Dm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function CN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(IN()||XS()||"connection"in navigator)?navigator.onLine:!0}function NN(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class lo{constructor(e,n){this.shortDelay=e,this.longDelay=n,sn(n>e,"Short delay should be less than long delay!"),this.isMobile=QS()||YS()}get(){return CN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function df(t,e){sn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Mw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Wt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Wt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Wt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const AN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const DN=new lo(3e4,6e4);function xN(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Wl(t,e,n,r,i={}){return $w(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=js(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Mw.fetch()(Uw(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function $w(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},AN),e);try{const i=new PN(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Fo(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Fo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Fo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Fo(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Lw(t,c,u);Ft(t,c)}}catch(i){if(i instanceof ln)throw i;Ft(t,"internal-error",{message:String(i)})}}async function RN(t,e,n,r,i={}){const s=await Wl(t,e,n,r,i);return"mfaPendingCredential"in s&&Ft(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Uw(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?df(t.config,i):`${t.config.apiScheme}://${i}`}class PN{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Mt(this.auth,"network-request-failed")),DN.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Fo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Mt(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function ON(t,e){return Wl(t,"POST","/v1/accounts:delete",e)}async function LN(t,e){return Wl(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ns(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function MN(t,e=!1){const n=Oe(t),r=await n.getIdToken(e),i=ff(r);U(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ns(zu(i.auth_time)),issuedAtTime:ns(zu(i.iat)),expirationTime:ns(zu(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function zu(t){return Number(t)*1e3}function ff(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return na("JWT malformed, contained fewer than 3 sections"),null;try{const i=sv(n);return i?JSON.parse(i):(na("Failed to decode base64 JWT payload"),null)}catch(i){return na("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function $N(t){const e=ff(t);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ls(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof ln&&UN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function UN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class bN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class bw{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ns(this.lastLoginAt),this.creationTime=ns(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Xa(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ls(t,LN(n,{idToken:r}));U(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?zN(s.providerUserInfo):[],a=VN(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new bw(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function FN(t){const e=Oe(t);await Xa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function VN(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function zN(t){return t.map(e=>{var{providerId:n}=e,r=cf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function BN(t,e){const n=await $w(t,{},async()=>{const r=js({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Uw(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Mw.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Ms{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):$N(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return U(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await BN(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ms;return r&&(U(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(U(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(U(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ms,this.toJSON())}_performRefresh(){return Wt("not implemented")}}/**
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
 */function cn(t,e){U(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class sr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=cf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new bN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new bw(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ls(this,this.stsTokenManager.getToken(this.auth,e));return U(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return MN(this,e)}reload(){return FN(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new sr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Xa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ls(this,ON(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,D=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:w,isAnonymous:T,providerData:I,stsTokenManager:N}=n;U(m&&N,e,"internal-error");const x=Ms.fromJSON(this.name,N);U(typeof m=="string",e,"internal-error"),cn(d,e.name),cn(h,e.name),U(typeof w=="boolean",e,"internal-error"),U(typeof T=="boolean",e,"internal-error"),cn(g,e.name),cn(y,e.name),cn(v,e.name),cn(D,e.name),cn(p,e.name),cn(f,e.name);const Z=new sr({uid:m,auth:e,email:h,emailVerified:w,displayName:d,isAnonymous:T,photoURL:y,phoneNumber:g,tenantId:v,stsTokenManager:x,createdAt:p,lastLoginAt:f});return I&&Array.isArray(I)&&(Z.providerData=I.map(B=>Object.assign({},B))),D&&(Z._redirectEventId=D),Z}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ms;i.updateFromServerResponse(n);const s=new sr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Xa(s),s}}/**
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
 */class Fw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Fw.type="NONE";const xm=Fw;/**
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
 */function ra(t,e,n){return`firebase:${t}:${e}:${n}`}class qr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ra(this.userKey,i.apiKey,s),this.fullPersistenceKey=ra("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?sr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new qr(qt(xm),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||qt(xm);const o=ra(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=sr._fromJSON(e,c);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new qr(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new qr(s,e,r))}}/**
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
 */function Rm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Bw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Vw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Hw(e))return"Blackberry";if(Kw(e))return"Webos";if(pf(e))return"Safari";if((e.includes("chrome/")||zw(e))&&!e.includes("edge/"))return"Chrome";if(jw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Vw(t=He()){return/firefox\//i.test(t)}function pf(t=He()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function zw(t=He()){return/crios\//i.test(t)}function Bw(t=He()){return/iemobile/i.test(t)}function jw(t=He()){return/android/i.test(t)}function Hw(t=He()){return/blackberry/i.test(t)}function Kw(t=He()){return/webos/i.test(t)}function ql(t=He()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function jN(t=He()){var e;return ql(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function HN(){return JS()&&document.documentMode===10}function Ww(t=He()){return ql(t)||jw(t)||Kw(t)||Hw(t)||/windows phone/i.test(t)||Bw(t)}function KN(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function qw(t,e=[]){let n;switch(t){case"Browser":n=Rm(He());break;case"Worker":n=`${Rm(He())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Hs}/${r}`}/**
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
 */class WN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class qN{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Pm(this),this.idTokenSubscription=new Pm(this),this.beforeStateQueue=new WN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ow,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=qt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await qr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Xa(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=NN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Oe(e):null;return n&&U(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(qt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Bs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&qt(e)||this._popupRedirectResolver;U(n,this,"argument-error"),this.redirectPersistenceManager=await qr.create(this,[qt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return U(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=qw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Gl(t){return Oe(t)}class Pm{constructor(e){this.auth=e,this.observer=null,this.addObserver=s_(n=>this.observer=n)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function GN(t,e,n){const r=Gl(t);U(r._canInitEmulator,r,"emulator-config-failed"),U(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=Gw(e),{host:o,port:a}=QN(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||XN()}function Gw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function QN(t){const e=Gw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Om(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Om(o)}}}function Om(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function XN(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Qw{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Wt("not implemented")}_getIdTokenResponse(e){return Wt("not implemented")}_linkToIdToken(e,n){return Wt("not implemented")}_getReauthenticationResolver(e){return Wt("not implemented")}}/**
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
 */async function Gr(t,e){return RN(t,"POST","/v1/accounts:signInWithIdp",xN(t,e))}/**
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
 */const YN="http://localhost";class gr extends Qw{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new gr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ft("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=cf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new gr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Gr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Gr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Gr(e,n)}buildRequest(){const e={requestUri:YN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=js(n)}return e}}/**
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
 */class mf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class uo extends mf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class mn extends uo{constructor(){super("facebook.com")}static credential(e){return gr._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mn.credentialFromTaggedObject(e)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mn.credential(e.oauthAccessToken)}catch{return null}}}mn.FACEBOOK_SIGN_IN_METHOD="facebook.com";mn.PROVIDER_ID="facebook.com";/**
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
 */class Bt extends uo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return gr._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Bt.credentialFromTaggedObject(e)}static credentialFromError(e){return Bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Bt.credential(n,r)}catch{return null}}}Bt.GOOGLE_SIGN_IN_METHOD="google.com";Bt.PROVIDER_ID="google.com";/**
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
 */class gn extends uo{constructor(){super("github.com")}static credential(e){return gr._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gn.credential(e.oauthAccessToken)}catch{return null}}}gn.GITHUB_SIGN_IN_METHOD="github.com";gn.PROVIDER_ID="github.com";/**
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
 */class yn extends uo{constructor(){super("twitter.com")}static credential(e,n){return gr._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return yn.credential(n,r)}catch{return null}}}yn.TWITTER_SIGN_IN_METHOD="twitter.com";yn.PROVIDER_ID="twitter.com";/**
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
 */class hi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await sr._fromIdTokenResponse(e,r,i),o=Lm(r);return new hi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Lm(r);return new hi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Lm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Ya extends ln{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ya.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ya(e,n,r,i)}}function Xw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ya._fromErrorAndOperation(t,s,e,r):s})}async function JN(t,e,n=!1){const r=await Ls(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return hi._forOperation(t,"link",r)}/**
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
 */async function ZN(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Ls(t,Xw(r,i,e,t),n);U(s.idToken,r,"internal-error");const o=ff(s.idToken);U(o,r,"internal-error");const{sub:a}=o;return U(t.uid===a,r,"user-mismatch"),hi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ft(r,"user-mismatch"),s}}/**
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
 */async function eA(t,e,n=!1){const r="signIn",i=await Xw(t,r,e),s=await hi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function tA(t,e,n,r){return Oe(t).onIdTokenChanged(e,n,r)}function nA(t,e,n){return Oe(t).beforeAuthStateChanged(e,n)}function rA(t){return Oe(t).signOut()}const Ja="__sak";/**
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
 */class Yw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ja,"1"),this.storage.removeItem(Ja),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function iA(){const t=He();return pf(t)||ql(t)}const sA=1e3,oA=10;class Jw extends Yw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=iA()&&KN(),this.fallbackToPolling=Ww(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);HN()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,oA):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},sA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Jw.type="LOCAL";const aA=Jw;/**
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
 */class Zw extends Yw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Zw.type="SESSION";const e1=Zw;/**
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
 */function lA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ql{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Ql(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await lA(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ql.receivers=[];/**
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
 */function gf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class uA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=gf("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function $t(){return window}function cA(t){$t().location.href=t}/**
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
 */function t1(){return typeof $t().WorkerGlobalScope<"u"&&typeof $t().importScripts=="function"}async function hA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function dA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function fA(){return t1()?self:null}/**
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
 */const n1="firebaseLocalStorageDb",pA=1,Za="firebaseLocalStorage",r1="fbase_key";class co{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Xl(t,e){return t.transaction([Za],e?"readwrite":"readonly").objectStore(Za)}function mA(){const t=indexedDB.deleteDatabase(n1);return new co(t).toPromise()}function fh(){const t=indexedDB.open(n1,pA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Za,{keyPath:r1})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Za)?e(r):(r.close(),await mA(),e(await fh()))})})}async function Mm(t,e,n){const r=Xl(t,!0).put({[r1]:e,value:n});return new co(r).toPromise()}async function gA(t,e){const n=Xl(t,!1).get(e),r=await new co(n).toPromise();return r===void 0?null:r.value}function $m(t,e){const n=Xl(t,!0).delete(e);return new co(n).toPromise()}const yA=800,vA=3;class i1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await fh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>vA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return t1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ql._getInstance(fA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await hA(),!this.activeServiceWorker)return;this.sender=new uA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||dA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await fh();return await Mm(e,Ja,"1"),await $m(e,Ja),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Mm(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>gA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>$m(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Xl(i,!1).getAll();return new co(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),yA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}i1.type="LOCAL";const wA=i1;/**
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
 */function EA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function SA(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Mt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",EA().appendChild(r)})}function _A(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new lo(3e4,6e4);/**
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
 */function s1(t,e){return e?qt(e):(U(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class yf extends Qw{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Gr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Gr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Gr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function TA(t){return eA(t.auth,new yf(t),t.bypassAuthState)}function kA(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),ZN(n,new yf(t),t.bypassAuthState)}async function IA(t){const{auth:e,user:n}=t;return U(n,e,"internal-error"),JN(n,new yf(t),t.bypassAuthState)}/**
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
 */class o1{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return TA;case"linkViaPopup":case"linkViaRedirect":return IA;case"reauthViaPopup":case"reauthViaRedirect":return kA;default:Ft(this.auth,"internal-error")}}resolve(e){sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const CA=new lo(2e3,1e4);async function NA(t,e,n){const r=Gl(t);_N(t,e,mf);const i=s1(r,n);return new er(r,"signInViaPopup",e,i).executeNotNull()}class er extends o1{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,er.currentPopupAction&&er.currentPopupAction.cancel(),er.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){sn(this.filter.length===1,"Popup operations only handle one event");const e=gf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Mt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Mt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,er.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Mt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,CA.get())};e()}}er.currentPopupAction=null;/**
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
 */const AA="pendingRedirect",ia=new Map;class DA extends o1{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ia.get(this.auth._key());if(!e){try{const r=await xA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ia.set(this.auth._key(),e)}return this.bypassAuthState||ia.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function xA(t,e){const n=OA(e),r=PA(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function RA(t,e){ia.set(t._key(),e)}function PA(t){return qt(t._redirectPersistence)}function OA(t){return ra(AA,t.config.apiKey,t.name)}async function LA(t,e,n=!1){const r=Gl(t),i=s1(r,e),o=await new DA(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const MA=10*60*1e3;class $A{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!UA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!a1(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Mt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=MA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Um(e))}saveEventToCache(e){this.cachedEventUids.add(Um(e)),this.lastProcessedEventTime=Date.now()}}function Um(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function a1({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function UA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return a1(t);default:return!1}}/**
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
 */async function bA(t,e={}){return Wl(t,"GET","/v1/projects",e)}/**
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
 */const FA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,VA=/^https?/;async function zA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await bA(t);for(const n of e)try{if(BA(n))return}catch{}Ft(t,"unauthorized-domain")}function BA(t){const e=dh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!VA.test(n))return!1;if(FA.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const jA=new lo(3e4,6e4);function bm(){const t=$t().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function HA(t){return new Promise((e,n)=>{var r,i,s;function o(){bm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{bm(),n(Mt(t,"network-request-failed"))},timeout:jA.get()})}if(!((i=(r=$t().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=$t().gapi)===null||s===void 0)&&s.load)o();else{const a=_A("iframefcb");return $t()[a]=()=>{gapi.load?o():n(Mt(t,"network-request-failed"))},SA(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw sa=null,e})}let sa=null;function KA(t){return sa=sa||HA(t),sa}/**
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
 */const WA=new lo(5e3,15e3),qA="__/auth/iframe",GA="emulator/auth/iframe",QA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},XA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function YA(t){const e=t.config;U(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?df(e,GA):`https://${t.config.authDomain}/${qA}`,r={apiKey:e.apiKey,appName:t.name,v:Hs},i=XA.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${js(r).slice(1)}`}async function JA(t){const e=await KA(t),n=$t().gapi;return U(n,t,"internal-error"),e.open({where:document.body,url:YA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:QA,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Mt(t,"network-request-failed"),a=$t().setTimeout(()=>{s(o)},WA.get());function l(){$t().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const ZA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},eD=500,tD=600,nD="_blank",rD="http://localhost";class Fm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function iD(t,e,n,r=eD,i=tD){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},ZA),{width:r.toString(),height:i.toString(),top:s,left:o}),u=He().toLowerCase();n&&(a=zw(u)?nD:n),Vw(u)&&(e=e||rD,l.scrollbars="yes");const c=Object.entries(l).reduce((h,[g,y])=>`${h}${g}=${y},`,"");if(jN(u)&&a!=="_self")return sD(e||"",a),new Fm(null);const d=window.open(e||"",a,c);U(d,t,"popup-blocked");try{d.focus()}catch{}return new Fm(d)}function sD(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const oD="__/auth/handler",aD="emulator/auth/handler";function Vm(t,e,n,r,i,s){U(t.config.authDomain,t,"auth-domain-config-required"),U(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Hs,eventId:i};if(e instanceof mf){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",i_(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(s||{}))o[l]=u}if(e instanceof uo){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${lD(t)}?${js(a).slice(1)}`}function lD({config:t}){return t.emulator?df(t,aD):`https://${t.authDomain}/${oD}`}/**
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
 */const Bu="webStorageSupport";class uD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=e1,this._completeRedirectFn=LA,this._overrideRedirectResult=RA}async _openPopup(e,n,r,i){var s;sn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Vm(e,n,r,dh(),i);return iD(e,o,gf())}async _openRedirect(e,n,r,i){return await this._originValidation(e),cA(Vm(e,n,r,dh(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(sn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await JA(e),r=new $A(e);return n.register("authEvent",i=>(U(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Bu,{type:Bu},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Bu];o!==void 0&&n(!!o),Ft(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=zA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ww()||pf()||ql()}}const cD=uD;var zm="@firebase/auth",Bm="0.21.5";/**
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
 */class hD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function dD(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function fD(t){ni(new hr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{U(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),U(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:qw(t)},c=new qN(a,l,u);return kN(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ni(new hr("auth-internal",e=>{const n=Gl(e.getProvider("auth").getImmediate());return(r=>new hD(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),xn(zm,Bm,dD(t)),xn(zm,Bm,"esm2017")}/**
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
 */const pD=5*60,mD=av("authIdTokenMaxAge")||pD;let jm=null;const gD=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>mD)return;const i=n==null?void 0:n.token;jm!==i&&(jm=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function ho(t=hv()){const e=fd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=TN(t,{popupRedirectResolver:cD,persistence:[wA,aA,e1]}),r=av("authTokenSyncURL");if(r){const s=gD(r);nA(n,s,()=>s(n.currentUser)),tA(n,o=>s(o))}const i=ov("auth");return i&&GN(n,`http://${i}`),n}fD("Browser");var yD="firebase",vD="9.18.0";/**
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
 */xn(yD,vD,"app");const pt={events:{},subscribe:(t,e)=>{pt.events[t]=pt.events[t]||[],pt.events[t].push(e)},unsubscribe:(t,e)=>{if(pt.events[t]){for(let n=0;n<pt.events[t].length;n++)if(pt.events[t][n]===e){pt.events[t].splice(n,1);break}}},publish:(t,e)=>{pt.events[t]&&pt.events[t].forEach(n=>{n(e)})}},wD={apiKey:"AIzaSyA9Nha9WS12eZwKl0D05-BjlfkEFiCKPUQ",authDomain:"where-s-waldo-9.firebaseapp.com",projectId:"where-s-waldo-9",storageBucket:"where-s-waldo-9.appspot.com",messagingSenderId:"385456596542",appId:"1:385456596542:web:7641ce52c476d9a036136f"};cv(wD);const $s=iN(),ED=nf($s,"levels");nf($s,"leaderboard");const SD=async()=>{const t=new Bt;await NA(ho(),t)},Hm=ho();Hm.onAuthStateChanged(function(t){pt.publish("authStateChanged",Hm.currentUser)});const _D=()=>{rA(ho())},el="/wheres-waldo/assets/Waldo-6cf4c5aa.jpg",vf="/wheres-waldo/assets/Odlaw-29c07616.jpg",wf="/wheres-waldo/assets/Wizard-e33822e7.jpg",TD=()=>{const t=[];return Rw(ED).then(e=>{e.docs.forEach(n=>{t.push({...n.data()})})}).catch(e=>{console.log(e.message)}),t},kD=t=>{const e=[[],[],[]];return t.forEach((n,r)=>{Object.keys(n).forEach(s=>{const o=n[s].time,a=n[s].name;e[r].push([o,a])}),e[r].sort((s,o)=>s[0]-o[0])}),e},ID=async()=>{const t=[];(await Rw(nf($s,"leaderboard"))).forEach(i=>{t.push(i.data())});const n=CD(t);return[kD(t),n]},CD=t=>{const e=ho();if(e.currentUser===null)return null;const n=e.currentUser.uid,r=[];return t.forEach(i=>{if(Object.keys(i).includes(n)===!1){r.push([0,"No Data"]);return}Object.entries(i).forEach(o=>{if(o[0]===n){const{time:a,name:l}=o[1];r.push([a,l])}})}),r},ND=async(t,e)=>{const n=ho();if(n.currentUser===null)return;const r=n.currentUser.uid,i=n.currentUser.displayName,s=e==null?void 0:e.toFixed(),o=nN($s,"leaderboard",s);await EN($s,async a=>{const l=await a.get(o);if(!l.exists())throw new Error("Document does not exist!");l.data()[r]===void 0&&await gN(o,{[r]:{time:t,name:i}})})},AD=(t,e,n)=>{if(n.current!==null){const r=n.current.offsetWidth,i=n.current.offsetHeight;e>=i-126&&(e=i-129),t>=r-160&&(t=r-170)}return{x:t,y:e}},DD=(t,e)=>{if(typeof e=="object"){if(t.current!==null&&e.current!==null)return t.current.offsetWidth/e.current}else if(t.current!==null)return t.current.offsetWidth/e;throw new Error("Bad ref")},xD=(t,e)=>{const[n,r]=t;return[Math.trunc(n*e),Math.trunc(r*e)]},Km=(t,e,n)=>{if(t!==null){const r=DD(t,e);n=n.map(i=>{const s=i.coordinate;return{...i,coordinate:xD(s,r)}})}return n},RD=(t,e)=>{t.current!==null&&(t.current.classList.toggle("animate-correct"),setTimeout(()=>{t.current!==null&&(t.current.classList.toggle("animate-correct"),e(!1))},500))},PD=t=>{t.current!==null&&(t.current.classList.toggle("animate-incorrect"),setTimeout(()=>{t.current!==null&&t.current.classList.toggle("animate-incorrect")},600))},OD=t=>{if(t==="Waldo")return el;if(t==="Odlaw")return vf;if(t==="Wizard")return wf},LD=({char:t,coordinate:e,clickPos:n,setView:r})=>{const i=an(),s=mi(),o=OD(t),a=X.useRef(null),{x:l,y:u}=n;return O("li",{children:ne("button",{className:"flex w-full cursor-pointer items-center gap-1 overflow-hidden rounded-md bg-white hover:shadow-md",onClick:()=>{const[d,h]=e;if(Math.abs(d-l)<30&&Math.abs(h-u)<30){const g={...i.objective,[t]:!0};s({type:"SET_OBJECTIVE",payload:g}),RD(a,r)}else PD(a)},ref:a,children:[O("img",{src:o,alt:t,className:"h-9"}),O("span",{className:"flex-grow text-lg ",children:t})]})})},MD=({clickPos:t,view:e,setView:n,coordinates:r})=>{const{x:i,y:s}=t;return O("div",{"data-testid":"picker",className:(e?"block ":"hidden ")+"absolute mx-2 w-40 animate-open overflow-hidden rounded-md border bg-slate-100 p-1 shadow-xl",style:{top:`${s}px`,left:`${i}px`},children:O("ul",{className:"flex flex-col gap-1",children:r.map((o,a)=>O(LD,{char:o.char,coordinate:o.coordinate,clickPos:t,setView:n},a))})})},$D=()=>{const t=an(),e=mi(),n=X.useRef(null),r=X.useRef(void 0),i=()=>{n.current!==null&&(n.current.disabled=!0),e({type:"SET_TEXT",payload:3})};return X.useEffect(()=>{if(t.text!=="Start")return r.current=window.setInterval(()=>{t.text===1?e({type:"SET_TEXT",payload:"Go!"}):typeof t.text=="number"&&e({type:"SET_TEXT",payload:t.text-1})},1e3),()=>clearInterval(r.current)},[t.text]),X.useEffect(()=>{t.text==="Go!"&&(clearInterval(r.current),e({type:"SET_PLAYING",payload:!0}),setTimeout(()=>{e({type:"SET_HIDE_BUTTON",payload:!0})},500))},[t.text]),O(vh,{children:t.hideButton===!1?O("button",{"data-testid":"start-button",ref:n,onClick:i,className:"absolute top-0 bottom-0 left-0 right-0 m-auto h-10 w-32 rounded-md bg-blue-500 px-4 py-2 text-xl leading-tight text-white transition hover:bg-red-600 "+(t.playing===!0?"animate-fadeout":void 0),children:t.text}):null})};let Ir=[];const UD=(t,e)=>{const n=t[e-1];return Ir=[{char:n.waldo[0],coordinate:[n.waldo[1],n.waldo[2]]},{char:n.odlaw[0],coordinate:[n.odlaw[1],n.odlaw[2]]},{char:n.wizard[0],coordinate:[n.wizard[1],n.wizard[2]]}],n.img},bD=({children:t})=>{const e=an(),[n,r]=X.useState({x:0,y:0}),[i,s]=X.useState(!1),o=X.useRef(null);X.useLayoutEffect(()=>{if(e.level!==null&&e.coordinatesData!==null){const c=UD(e.coordinatesData,e.level);o.current!==null&&(o.current.src=c)}},[e.level]);const a=X.useRef(null);X.useEffect(()=>{if(e.playing===!0&&(Ir=Km(o,1e3,Ir),o.current!==null)){const c=o.current.offsetWidth;a.current=c}},[e.playing]);const l=()=>{if(e.playing===!0&&(Ir=Km(o,a,Ir),o.current!==null)){const c=o.current.offsetWidth;a.current=c}};return X.useEffect(()=>(window.addEventListener("resize",l),()=>window.removeEventListener("resize",l)),[]),ne("div",{"data-testid":"board",className:"relative z-10 mx-2 overflow-hidden rounded-md border bg-white",children:[O("img",{alt:"",src:"",onClick:c=>{if(o.current!==null){const d=o.current.getBoundingClientRect(),h=c.clientX-d.left,g=c.clientY-d.top,y=AD(h,g,o);r(y),s(!i)}},id:"img",ref:o,className:e.playing===!1?"blur-sm":void 0}),t,O($D,{}),O(MD,{clickPos:n,view:i,setView:s,coordinates:Ir})]})},FD=({name:t})=>{const e=an(),n=mi(),r=()=>{n({type:"SET_LEVEL",payload:t})};return O(vh,{children:e.level!==t?O("button",{"data-testid":`level-${t}`,onClick:r,className:"border px-2 text-blue-500 transition duration-200 hover:bg-slate-200",children:t}):O("button",{"data-testid":`level-${t}`,onClick:r,disabled:!0,className:"border px-2 font-bold text-red-600",children:t})})},ju=({src:t,char:e})=>O("img",{src:t,alt:"",className:"h-full "+(e===!1&&"opacity-40")}),VD=()=>{const t=an(),{Waldo:e,Odlaw:n,Wizard:r}=t.objective;return ne("div",{"data-testid":"characters",className:"z-0 mr-4 flex h-10 translate-y-10 items-center opacity-0 "+(t.level!==null?"animate-rise":null),children:[ne("div",{className:"relative mr-3 rounded-lg bg-slate-200 px-3 "+(t.level!==null?"animate-slide":null),children:["Find us!",O("div",{className:"absolute -right-2 top-2 h-0 w-0 border-t-4 border-b-4 border-l-8 border-t-white border-b-white border-l-slate-200 bg-slate-200"})]}),O(ju,{src:el,char:e}),O(ju,{src:vf,char:n}),O(ju,{src:wf,char:r})]})},zD="/wheres-waldo/assets/logo-1c4fe739.png",BD=({signedIn:t,setSignedIn:e})=>{const n=an(),r=mi(),[i,s]=X.useState(null),o=l=>{l?(s(l.displayName),e(!0)):e(!1)};X.useEffect(()=>(pt.subscribe("authStateChanged",o),()=>pt.unsubscribe("authStateChanged",o)),[]);const a=()=>{r({type:"OPEN_LEADERBOARD"})};return ne("div",{className:"relative flex items-center justify-between",children:[O("img",{src:zD,alt:"",className:"m-1 ml-2 h-10"}),n.viewLeader===!1&&O("button",{onClick:a,className:"left-0 right-0 mx-auto w-[175px] border px-3 text-lg duration-200 hover:bg-slate-200 md:absolute",children:"View Leaderboard"}),ne("span",{className:"flex items-center gap-2 text-lg",children:[t&&ne("span",{className:"text-blue-500",children:["Signed in as:",O("span",{className:"ml-2 font-bold text-red-600",children:i})]}),t?O("button",{onClick:_D,className:"mr-2 border px-3 duration-200 hover:bg-slate-200",children:"Sign out"}):O("button",{onClick:SD,className:"mr-2 border px-3 duration-200 hover:bg-slate-200",children:"Sign in"})]})]})},jD=()=>{const t=an(),{personalBest:e,leaderBoardData:n}=t;return ne("div",{className:"m-2 mx-auto flex w-11/12 flex-col gap-10 sm:w-11/12 md:w-3/4 lg:w-3/4",children:[ne("div",{children:[O("div",{className:"border py-1 text-center text-2xl font-bold text-blue-500",children:"Personal"}),O("ul",{className:"flex",children:Wm.map(r=>ne("li",{className:"w-1/3 border py-1 text-center text-lg",children:["Level ",r]},r))}),e!==null?O("ul",{className:"flex",children:e.map((r,i)=>ne("li",{className:"flex w-1/3 items-center gap-2 border text-lg",children:[O("img",{src:el,alt:"waldo",className:"h-10"}),ne("span",{className:"grow-[1] text-center text-blue-500",children:[r[0].toFixed(1),"s"]}),O("span",{className:"grow-[3] overflow-hidden text-ellipsis text-center font-bold text-red-600",children:r[1]})]},i))}):O("div",{className:"border py-1 text-center text-lg font-bold text-red-600",children:"Log in to upload your best times and view your personal best"})]}),ne("div",{children:[O("div",{className:"border py-1 text-center text-2xl font-bold text-blue-500",children:"Leaderboard"}),O("ul",{className:"flex",children:Wm.map(r=>ne("li",{className:"w-1/3 border py-1 text-center text-lg",children:["Level ",r]},r))}),O("div",{className:"flex",children:n!==null&&n.map((r,i)=>O("ul",{className:"w-1/3",children:r.map((s,o)=>ne("li",{className:"flex items-center gap-2 border text-lg",children:[O("img",{src:o%2===0?el:o%3===0?vf:wf,alt:"waldo",className:"h-10"}),ne("span",{className:"grow-[1] text-center text-blue-500",children:[s[0].toFixed(1),"s"]}),O("span",{className:"grow-[3] overflow-hidden text-ellipsis text-center font-bold text-red-600",children:s[1]})]},o))},i))})]})]})},Wm=[1,2,3],HD=({time:t})=>{const e=an(),n=mi(),r=()=>{e.level!==null&&(e.level!==3?n({type:"SET_NEXT_LEVEL",payload:e.level+1}):n({type:"SET_GAME_OVER"}))};return O("div",{className:"fixed top-0 left-0 z-50 h-full w-full bg-black bg-opacity-50",children:O("div",{className:"absolute top-1/2 left-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-md bg-white py-5 shadow-lg sm:w-1/3",children:ne("div",{className:"flex h-full flex-col items-center justify-center",children:[ne("div",{className:"text-2xl font-bold text-blue-500",children:["Level ",e.level,":"]}),ne("div",{className:"text-lg text-blue-500",children:["Time complete:",ne("span",{className:"font-bold text-red-600",children:[" ",t,"s"]})]}),O("button",{className:"mt-4 rounded-md bg-blue-500 px-4 py-2 text-white transition hover:bg-red-600",onClick:r,children:e.level!==3?"Next Level":"View Leaderboard"})]})})})},KD=()=>{const t=an(),e=mi(),[n,r]=X.useState(null),[i,s]=X.useState(!1);X.useEffect(()=>{let a=!1;if(t.viewLeader===!0){const l=TD(),u=ID();a||Promise.all([l,u]).then(c=>{const d={coordinatesData:c[0],leaderBoardData:c[1][0],personalBest:c[1][1]};e({type:"SET_DATA",payload:d})}).catch(c=>{console.log(c.message)})}return()=>{a=!0}},[t.viewLeader,i]);const o=X.useRef(null);return X.useEffect(()=>{t.playing===!0&&(o.current=Date.now())},[t.playing]),X.useEffect(()=>{if(Object.values(t.objective).every(a=>a===!0)&&o.current!==null){const a=(Date.now()-o.current)/1e3;r(a),t.level!==null&&ND(a,t.level)}},[t.objective]),ne("div",{className:"Wrapper",children:[O(BD,{signedIn:i,setSignedIn:s}),ne("div",{className:"flex justify-between",children:[t.isLoading===!1&&ne("div",{className:"relative flex items-center",children:[O("ul",{className:"ml-3 flex items-center gap-4",children:WD.map(a=>O("li",{children:O(FD,{name:a})},a))}),t.level===null&&ne("span",{className:"absolute top-1 left-32 ml-3 animate-arrow whitespace-nowrap font-bold",children:[O("span",{className:"text-xl text-red-600",children:"⇦"}),O("span",{className:"m-3 text-lg text-blue-500",children:"Select a level to begin..."})]})]}),O(VD,{})]}),t.isLoading===!1&&O(vh,{children:t.level===null?O(jD,{}):O(bD,{children:Object.values(t.objective).every(a=>a===!0)&&O(HD,{time:n})})})]})},WD=[1,2,3],qD=()=>O($S,{children:O(KD,{})});Hu.createRoot(document.getElementById("root")).render(O(qD,{}));
