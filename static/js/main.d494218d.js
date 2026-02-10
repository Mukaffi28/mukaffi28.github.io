/*! For license information please see main.d494218d.js.LICENSE.txt */
(()=>{var e={4:(e,t,n)=>{"use strict";var r=n(853),a=n(43),i=n(950);function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function s(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function c(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function u(e){if(s(e)!==e)throw Error(o(188))}function d(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e;for(e=e.child;null!==e;){if(null!==(t=d(e)))return t;e=e.sibling}return null}var f=Object.assign,h=Symbol.for("react.element"),p=Symbol.for("react.transitional.element"),m=Symbol.for("react.portal"),g=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),y=Symbol.for("react.provider"),x=Symbol.for("react.consumer"),w=Symbol.for("react.context"),k=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),S=Symbol.for("react.suspense_list"),E=Symbol.for("react.memo"),C=Symbol.for("react.lazy");Symbol.for("react.scope");var A=Symbol.for("react.activity");Symbol.for("react.legacy_hidden"),Symbol.for("react.tracing_marker");var z=Symbol.for("react.memo_cache_sentinel");Symbol.for("react.view_transition");var T=Symbol.iterator;function M(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=T&&e[T]||e["@@iterator"])?e:null}var P=Symbol.for("react.client.reference");function R(e){if(null==e)return null;if("function"===typeof e)return e.$$typeof===P?null:e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case g:return"Fragment";case v:return"Profiler";case b:return"StrictMode";case j:return"Suspense";case S:return"SuspenseList";case A:return"Activity"}if("object"===typeof e)switch(e.$$typeof){case m:return"Portal";case w:return(e.displayName||"Context")+".Provider";case x:return(e._context.displayName||"Context")+".Consumer";case k:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case E:return null!==(t=e.displayName||null)?t:R(e.type)||"Memo";case C:t=e._payload,e=e._init;try{return R(e(t))}catch(n){}}return null}var N=Array.isArray,_=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,D={pending:!1,data:null,method:null,action:null},I=[],F=-1;function B(e){return{current:e}}function O(e){0>F||(e.current=I[F],I[F]=null,F--)}function $(e,t){F++,I[F]=e.current,e.current=t}var U=B(null),H=B(null),W=B(null),V=B(null);function q(e,t){switch($(W,t),$(H,e),$(U,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?ad(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)e=id(t=ad(t),e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}O(U),$(U,e)}function G(){O(U),O(H),O(W)}function K(e){null!==e.memoizedState&&$(V,e);var t=U.current,n=id(t,e.type);t!==n&&($(H,e),$(U,n))}function Y(e){H.current===e&&(O(U),O(H)),V.current===e&&(O(V),Kd._currentValue=D)}var Q=Object.prototype.hasOwnProperty,J=r.unstable_scheduleCallback,X=r.unstable_cancelCallback,Z=r.unstable_shouldYield,ee=r.unstable_requestPaint,te=r.unstable_now,ne=r.unstable_getCurrentPriorityLevel,re=r.unstable_ImmediatePriority,ae=r.unstable_UserBlockingPriority,ie=r.unstable_NormalPriority,oe=r.unstable_LowPriority,le=r.unstable_IdlePriority,se=r.log,ce=r.unstable_setDisableYieldValue,ue=null,de=null;function fe(e){if("function"===typeof se&&ce(e),de&&"function"===typeof de.setStrictMode)try{de.setStrictMode(ue,e)}catch(t){}}var he=Math.clz32?Math.clz32:function(e){return 0===(e>>>=0)?32:31-(pe(e)/me|0)|0},pe=Math.log,me=Math.LN2;var ge=256,be=4194304;function ve(e){var t=42&e;if(0!==t)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194048&e;case 4194304:case 8388608:case 16777216:case 33554432:return 62914560&e;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ye(e,t,n){var r=e.pendingLanes;if(0===r)return 0;var a=0,i=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var l=134217727&r;return 0!==l?0!==(r=l&~i)?a=ve(r):0!==(o&=l)?a=ve(o):n||0!==(n=l&~e)&&(a=ve(n)):0!==(l=r&~i)?a=ve(l):0!==o?a=ve(o):n||0!==(n=r&~e)&&(a=ve(n)),0===a?0:0!==t&&t!==a&&0===(t&i)&&((i=a&-a)>=(n=t&-t)||32===i&&0!==(4194048&n))?t:a}function xe(e,t){return 0===(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)}function we(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function ke(){var e=ge;return 0===(4194048&(ge<<=1))&&(ge=256),e}function je(){var e=be;return 0===(62914560&(be<<=1))&&(be=4194304),e}function Se(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ee(e,t){e.pendingLanes|=t,268435456!==t&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ce(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-he(t);e.entangledLanes|=t,e.entanglements[r]=1073741824|e.entanglements[r]|4194090&n}function Ae(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-he(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}function ze(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Te(e){return 2<(e&=-e)?8<e?0!==(134217727&e)?32:268435456:8:2}function Me(){var e=L.p;return 0!==e?e:void 0===(e=window.event)?32:uf(e.type)}var Pe=Math.random().toString(36).slice(2),Re="__reactFiber$"+Pe,Ne="__reactProps$"+Pe,_e="__reactContainer$"+Pe,Le="__reactEvents$"+Pe,De="__reactListeners$"+Pe,Ie="__reactHandles$"+Pe,Fe="__reactResources$"+Pe,Be="__reactMarker$"+Pe;function Oe(e){delete e[Re],delete e[Ne],delete e[Le],delete e[De],delete e[Ie]}function $e(e){var t=e[Re];if(t)return t;for(var n=e.parentNode;n;){if(t=n[_e]||n[Re]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=yd(e);null!==e;){if(n=e[Re])return n;e=yd(e)}return t}n=(e=n).parentNode}return null}function Ue(e){if(e=e[Re]||e[_e]){var t=e.tag;if(5===t||6===t||13===t||26===t||27===t||3===t)return e}return null}function He(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e.stateNode;throw Error(o(33))}function We(e){var t=e[Fe];return t||(t=e[Fe]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ve(e){e[Be]=!0}var qe=new Set,Ge={};function Ke(e,t){Ye(e,t),Ye(e+"Capture",t)}function Ye(e,t){for(Ge[e]=t,e=0;e<t.length;e++)qe.add(t[e])}var Qe,Je,Xe=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ze={},et={};function tt(e,t,n){if(a=t,Q.call(et,a)||!Q.call(Ze,a)&&(Xe.test(a)?et[a]=!0:(Ze[a]=!0,0)))if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":return void e.removeAttribute(t);case"boolean":var r=t.toLowerCase().slice(0,5);if("data-"!==r&&"aria-"!==r)return void e.removeAttribute(t)}e.setAttribute(t,""+n)}var a}function nt(e,t,n){if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(t)}e.setAttribute(t,""+n)}}function rt(e,t,n,r){if(null===r)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(n)}e.setAttributeNS(t,n,""+r)}}function at(e){if(void 0===Qe)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Qe=t&&t[1]||"",Je=-1<n.stack.indexOf("\n    at")?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return"\n"+Qe+e+Je}var it=!1;function ot(e,t){if(!e||it)return"";it=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(n,[])}catch(a){var r=a}Reflect.construct(e,[],n)}else{try{n.call()}catch(i){r=i}e.call(n.prototype)}}else{try{throw Error()}catch(o){r=o}(n=e())&&"function"===typeof n.catch&&n.catch(function(){})}}catch(l){if(l&&r&&"string"===typeof l.stack)return[l.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=r.DetermineComponentFrameRoot(),o=i[0],l=i[1];if(o&&l){var s=o.split("\n"),c=l.split("\n");for(a=r=0;r<s.length&&!s[r].includes("DetermineComponentFrameRoot");)r++;for(;a<c.length&&!c[a].includes("DetermineComponentFrameRoot");)a++;if(r===s.length||a===c.length)for(r=s.length-1,a=c.length-1;1<=r&&0<=a&&s[r]!==c[a];)a--;for(;1<=r&&0<=a;r--,a--)if(s[r]!==c[a]){if(1!==r||1!==a)do{if(r--,0>--a||s[r]!==c[a]){var u="\n"+s[r].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}}while(1<=r&&0<=a);break}}}finally{it=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?at(n):""}function lt(e){switch(e.tag){case 26:case 27:case 5:return at(e.type);case 16:return at("Lazy");case 13:return at("Suspense");case 19:return at("SuspenseList");case 0:case 15:return ot(e.type,!1);case 11:return ot(e.type.render,!1);case 1:return ot(e.type,!0);case 31:return at("Activity");default:return""}}function st(e){try{var t="";do{t+=lt(e),e=e.return}while(e);return t}catch(n){return"\nError generating stack: "+n.message+"\n"+n.stack}}function ct(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function ut(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function dt(e){e._valueTracker||(e._valueTracker=function(e){var t=ut(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var a=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(e){r=""+e,i.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function ft(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ut(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function ht(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}var pt=/[\n"\\]/g;function mt(e){return e.replace(pt,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function gt(e,t,n,r,a,i,o,l){e.name="",null!=o&&"function"!==typeof o&&"symbol"!==typeof o&&"boolean"!==typeof o?e.type=o:e.removeAttribute("type"),null!=t?"number"===o?(0===t&&""===e.value||e.value!=t)&&(e.value=""+ct(t)):e.value!==""+ct(t)&&(e.value=""+ct(t)):"submit"!==o&&"reset"!==o||e.removeAttribute("value"),null!=t?vt(e,o,ct(t)):null!=n?vt(e,o,ct(n)):null!=r&&e.removeAttribute("value"),null==a&&null!=i&&(e.defaultChecked=!!i),null!=a&&(e.checked=a&&"function"!==typeof a&&"symbol"!==typeof a),null!=l&&"function"!==typeof l&&"symbol"!==typeof l&&"boolean"!==typeof l?e.name=""+ct(l):e.removeAttribute("name")}function bt(e,t,n,r,a,i,o,l){if(null!=i&&"function"!==typeof i&&"symbol"!==typeof i&&"boolean"!==typeof i&&(e.type=i),null!=t||null!=n){if(!("submit"!==i&&"reset"!==i||void 0!==t&&null!==t))return;n=null!=n?""+ct(n):"",t=null!=t?""+ct(t):n,l||t===e.value||(e.value=t),e.defaultValue=t}r="function"!==typeof(r=null!=r?r:a)&&"symbol"!==typeof r&&!!r,e.checked=l?e.checked:!!r,e.defaultChecked=!!r,null!=o&&"function"!==typeof o&&"symbol"!==typeof o&&"boolean"!==typeof o&&(e.name=o)}function vt(e,t,n){"number"===t&&ht(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function yt(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ct(n),t=null,a=0;a<e.length;a++){if(e[a].value===n)return e[a].selected=!0,void(r&&(e[a].defaultSelected=!0));null!==t||e[a].disabled||(t=e[a])}null!==t&&(t.selected=!0)}}function xt(e,t,n){null==t||((t=""+ct(t))!==e.value&&(e.value=t),null!=n)?e.defaultValue=null!=n?""+ct(n):"":e.defaultValue!==t&&(e.defaultValue=t)}function wt(e,t,n,r){if(null==t){if(null!=r){if(null!=n)throw Error(o(92));if(N(r)){if(1<r.length)throw Error(o(93));r=r[0]}n=r}null==n&&(n=""),t=n}n=ct(t),e.defaultValue=n,(r=e.textContent)===n&&""!==r&&null!==r&&(e.value=r)}function kt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var jt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function St(e,t,n){var r=0===t.indexOf("--");null==n||"boolean"===typeof n||""===n?r?e.setProperty(t,""):"float"===t?e.cssFloat="":e[t]="":r?e.setProperty(t,n):"number"!==typeof n||0===n||jt.has(t)?"float"===t?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Et(e,t,n){if(null!=t&&"object"!==typeof t)throw Error(o(62));if(e=e.style,null!=n){for(var r in n)!n.hasOwnProperty(r)||null!=t&&t.hasOwnProperty(r)||(0===r.indexOf("--")?e.setProperty(r,""):"float"===r?e.cssFloat="":e[r]="");for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&St(e,a,r)}else for(var i in t)t.hasOwnProperty(i)&&St(e,i,t[i])}function Ct(e){if(-1===e.indexOf("-"))return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var At=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),zt=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Tt(e){return zt.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Mt=null;function Pt(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Rt=null,Nt=null;function _t(e){var t=Ue(e);if(t&&(e=t.stateNode)){var n=e[Ne]||null;e:switch(e=t.stateNode,t.type){case"input":if(gt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+mt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[Ne]||null;if(!a)throw Error(o(90));gt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)(r=n[t]).form===e.form&&ft(r)}break e;case"textarea":xt(e,n.value,n.defaultValue);break e;case"select":null!=(t=n.value)&&yt(e,!!n.multiple,t,!1)}}}var Lt=!1;function Dt(e,t,n){if(Lt)return e(t,n);Lt=!0;try{return e(t)}finally{if(Lt=!1,(null!==Rt||null!==Nt)&&($c(),Rt&&(t=Rt,e=Nt,Nt=Rt=null,_t(t),e)))for(t=0;t<e.length;t++)_t(e[t])}}function It(e,t){var n=e.stateNode;if(null===n)return null;var r=n[Ne]||null;if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(o(231,t,typeof n));return n}var Ft=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),Bt=!1;if(Ft)try{var Ot={};Object.defineProperty(Ot,"passive",{get:function(){Bt=!0}}),window.addEventListener("test",Ot,Ot),window.removeEventListener("test",Ot,Ot)}catch(_f){Bt=!1}var $t=null,Ut=null,Ht=null;function Wt(){if(Ht)return Ht;var e,t,n=Ut,r=n.length,a="value"in $t?$t.value:$t.textContent,i=a.length;for(e=0;e<r&&n[e]===a[e];e++);var o=r-e;for(t=1;t<=o&&n[r-t]===a[i-t];t++);return Ht=a.slice(e,1<t?1-t:void 0)}function Vt(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function qt(){return!0}function Gt(){return!1}function Kt(e){function t(t,n,r,a,i){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=a,this.target=i,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(a):a[o]);return this.isDefaultPrevented=(null!=a.defaultPrevented?a.defaultPrevented:!1===a.returnValue)?qt:Gt,this.isPropagationStopped=Gt,this}return f(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=qt)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=qt)},persist:function(){},isPersistent:qt}),t}var Yt,Qt,Jt,Xt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zt=Kt(Xt),en=f({},Xt,{view:0,detail:0}),tn=Kt(en),nn=f({},en,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Jt&&(Jt&&"mousemove"===e.type?(Yt=e.screenX-Jt.screenX,Qt=e.screenY-Jt.screenY):Qt=Yt=0,Jt=e),Yt)},movementY:function(e){return"movementY"in e?e.movementY:Qt}}),rn=Kt(nn),an=Kt(f({},nn,{dataTransfer:0})),on=Kt(f({},en,{relatedTarget:0})),ln=Kt(f({},Xt,{animationName:0,elapsedTime:0,pseudoElement:0})),sn=Kt(f({},Xt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}})),cn=Kt(f({},Xt,{data:0})),un={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=fn[e])&&!!t[e]}function pn(){return hn}var mn=Kt(f({},en,{key:function(e){if(e.key){var t=un[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=Vt(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?dn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pn,charCode:function(e){return"keypress"===e.type?Vt(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?Vt(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}})),gn=Kt(f({},nn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),bn=Kt(f({},en,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pn})),vn=Kt(f({},Xt,{propertyName:0,elapsedTime:0,pseudoElement:0})),yn=Kt(f({},nn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),xn=Kt(f({},Xt,{newState:0,oldState:0})),wn=[9,13,27,32],kn=Ft&&"CompositionEvent"in window,jn=null;Ft&&"documentMode"in document&&(jn=document.documentMode);var Sn=Ft&&"TextEvent"in window&&!jn,En=Ft&&(!kn||jn&&8<jn&&11>=jn),Cn=String.fromCharCode(32),An=!1;function zn(e,t){switch(e){case"keyup":return-1!==wn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tn(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Mn=!1;var Pn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Pn[e.type]:"textarea"===t}function Nn(e,t,n,r){Rt?Nt?Nt.push(r):Nt=[r]:Rt=r,0<(t=Wu(t,"onChange")).length&&(n=new Zt("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var _n=null,Ln=null;function Dn(e){Du(e,0)}function In(e){if(ft(He(e)))return e}function Fn(e,t){if("change"===e)return t}var Bn=!1;if(Ft){var On;if(Ft){var $n="oninput"in document;if(!$n){var Un=document.createElement("div");Un.setAttribute("oninput","return;"),$n="function"===typeof Un.oninput}On=$n}else On=!1;Bn=On&&(!document.documentMode||9<document.documentMode)}function Hn(){_n&&(_n.detachEvent("onpropertychange",Wn),Ln=_n=null)}function Wn(e){if("value"===e.propertyName&&In(Ln)){var t=[];Nn(t,Ln,e,Pt(e)),Dt(Dn,t)}}function Vn(e,t,n){"focusin"===e?(Hn(),Ln=n,(_n=t).attachEvent("onpropertychange",Wn)):"focusout"===e&&Hn()}function qn(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return In(Ln)}function Gn(e,t){if("click"===e)return In(t)}function Kn(e,t){if("input"===e||"change"===e)return In(t)}var Yn="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function Qn(e,t){if(Yn(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!Q.call(t,a)||!Yn(e[a],t[a]))return!1}return!0}function Jn(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Xn(e,t){var n,r=Jn(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Jn(r)}}function Zn(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?Zn(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function er(e){for(var t=ht((e=null!=e&&null!=e.ownerDocument&&null!=e.ownerDocument.defaultView?e.ownerDocument.defaultView:window).document);t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=ht((e=t.contentWindow).document)}return t}function tr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}var nr=Ft&&"documentMode"in document&&11>=document.documentMode,rr=null,ar=null,ir=null,or=!1;function lr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;or||null==rr||rr!==ht(r)||("selectionStart"in(r=rr)&&tr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},ir&&Qn(ir,r)||(ir=r,0<(r=Wu(ar,"onSelect")).length&&(t=new Zt("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=rr)))}function sr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var cr={animationend:sr("Animation","AnimationEnd"),animationiteration:sr("Animation","AnimationIteration"),animationstart:sr("Animation","AnimationStart"),transitionrun:sr("Transition","TransitionRun"),transitionstart:sr("Transition","TransitionStart"),transitioncancel:sr("Transition","TransitionCancel"),transitionend:sr("Transition","TransitionEnd")},ur={},dr={};function fr(e){if(ur[e])return ur[e];if(!cr[e])return e;var t,n=cr[e];for(t in n)if(n.hasOwnProperty(t)&&t in dr)return ur[e]=n[t];return e}Ft&&(dr=document.createElement("div").style,"AnimationEvent"in window||(delete cr.animationend.animation,delete cr.animationiteration.animation,delete cr.animationstart.animation),"TransitionEvent"in window||delete cr.transitionend.transition);var hr=fr("animationend"),pr=fr("animationiteration"),mr=fr("animationstart"),gr=fr("transitionrun"),br=fr("transitionstart"),vr=fr("transitioncancel"),yr=fr("transitionend"),xr=new Map,wr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function kr(e,t){xr.set(e,t),Ke(t,[e])}wr.push("scrollEnd");var jr=new WeakMap;function Sr(e,t){if("object"===typeof e&&null!==e){var n=jr.get(e);return void 0!==n?n:(t={value:e,source:t,stack:st(t)},jr.set(e,t),t)}return{value:e,source:t,stack:st(t)}}var Er=[],Cr=0,Ar=0;function zr(){for(var e=Cr,t=Ar=Cr=0;t<e;){var n=Er[t];Er[t++]=null;var r=Er[t];Er[t++]=null;var a=Er[t];Er[t++]=null;var i=Er[t];if(Er[t++]=null,null!==r&&null!==a){var o=r.pending;null===o?a.next=a:(a.next=o.next,o.next=a),r.pending=a}0!==i&&Rr(n,a,i)}}function Tr(e,t,n,r){Er[Cr++]=e,Er[Cr++]=t,Er[Cr++]=n,Er[Cr++]=r,Ar|=r,e.lanes|=r,null!==(e=e.alternate)&&(e.lanes|=r)}function Mr(e,t,n,r){return Tr(e,t,n,r),Nr(e)}function Pr(e,t){return Tr(e,null,null,t),Nr(e)}function Rr(e,t,n){e.lanes|=n;var r=e.alternate;null!==r&&(r.lanes|=n);for(var a=!1,i=e.return;null!==i;)i.childLanes|=n,null!==(r=i.alternate)&&(r.childLanes|=n),22===i.tag&&(null===(e=i.stateNode)||1&e._visibility||(a=!0)),e=i,i=i.return;return 3===e.tag?(i=e.stateNode,a&&null!==t&&(a=31-he(n),null===(r=(e=i.hiddenUpdates)[a])?e[a]=[t]:r.push(t),t.lane=536870912|n),i):null}function Nr(e){if(50<Rc)throw Rc=0,Nc=null,Error(o(185));for(var t=e.return;null!==t;)t=(e=t).return;return 3===e.tag?e.stateNode:null}var _r={};function Lr(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dr(e,t,n,r){return new Lr(e,t,n,r)}function Ir(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Fr(e,t){var n=e.alternate;return null===n?((n=Dr(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=65011712&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Br(e,t){e.flags&=65011714;var n=e.alternate;return null===n?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Or(e,t,n,r,a,i){var l=0;if(r=e,"function"===typeof e)Ir(e)&&(l=1);else if("string"===typeof e)l=function(e,t,n){if(1===n||null!=t.itemProp)return!1;switch(e){case"meta":case"title":return!0;case"style":if("string"!==typeof t.precedence||"string"!==typeof t.href||""===t.href)break;return!0;case"link":if("string"!==typeof t.rel||"string"!==typeof t.href||""===t.href||t.onLoad||t.onError)break;return"stylesheet"!==t.rel||(e=t.disabled,"string"===typeof t.precedence&&null==e);case"script":if(t.async&&"function"!==typeof t.async&&"symbol"!==typeof t.async&&!t.onLoad&&!t.onError&&t.src&&"string"===typeof t.src)return!0}return!1}(e,n,U.current)?26:"html"===e||"head"===e||"body"===e?27:5;else e:switch(e){case A:return(e=Dr(31,n,t,a)).elementType=A,e.lanes=i,e;case g:return $r(n.children,a,i,t);case b:l=8,a|=24;break;case v:return(e=Dr(12,n,t,2|a)).elementType=v,e.lanes=i,e;case j:return(e=Dr(13,n,t,a)).elementType=j,e.lanes=i,e;case S:return(e=Dr(19,n,t,a)).elementType=S,e.lanes=i,e;default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case y:case w:l=10;break e;case x:l=9;break e;case k:l=11;break e;case E:l=14;break e;case C:l=16,r=null;break e}l=29,n=Error(o(130,null===e?"null":typeof e,"")),r=null}return(t=Dr(l,n,t,a)).elementType=e,t.type=r,t.lanes=i,t}function $r(e,t,n,r){return(e=Dr(7,e,r,t)).lanes=n,e}function Ur(e,t,n){return(e=Dr(6,e,null,t)).lanes=n,e}function Hr(e,t,n){return(t=Dr(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Wr=[],Vr=0,qr=null,Gr=0,Kr=[],Yr=0,Qr=null,Jr=1,Xr="";function Zr(e,t){Wr[Vr++]=Gr,Wr[Vr++]=qr,qr=e,Gr=t}function ea(e,t,n){Kr[Yr++]=Jr,Kr[Yr++]=Xr,Kr[Yr++]=Qr,Qr=e;var r=Jr;e=Xr;var a=32-he(r)-1;r&=~(1<<a),n+=1;var i=32-he(t)+a;if(30<i){var o=a-a%5;i=(r&(1<<o)-1).toString(32),r>>=o,a-=o,Jr=1<<32-he(t)+a|n<<a|r,Xr=i+e}else Jr=1<<i|n<<a|r,Xr=e}function ta(e){null!==e.return&&(Zr(e,1),ea(e,1,0))}function na(e){for(;e===qr;)qr=Wr[--Vr],Wr[Vr]=null,Gr=Wr[--Vr],Wr[Vr]=null;for(;e===Qr;)Qr=Kr[--Yr],Kr[Yr]=null,Xr=Kr[--Yr],Kr[Yr]=null,Jr=Kr[--Yr],Kr[Yr]=null}var ra=null,aa=null,ia=!1,oa=null,la=!1,sa=Error(o(519));function ca(e){throw ma(Sr(Error(o(418,"")),e)),sa}function ua(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[Re]=e,t[Ne]=r,n){case"dialog":Iu("cancel",t),Iu("close",t);break;case"iframe":case"object":case"embed":Iu("load",t);break;case"video":case"audio":for(n=0;n<_u.length;n++)Iu(_u[n],t);break;case"source":Iu("error",t);break;case"img":case"image":case"link":Iu("error",t),Iu("load",t);break;case"details":Iu("toggle",t);break;case"input":Iu("invalid",t),bt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0),dt(t);break;case"select":Iu("invalid",t);break;case"textarea":Iu("invalid",t),wt(t,r.value,r.defaultValue,r.children),dt(t)}"string"!==typeof(n=r.children)&&"number"!==typeof n&&"bigint"!==typeof n||t.textContent===""+n||!0===r.suppressHydrationWarning||Qu(t.textContent,n)?(null!=r.popover&&(Iu("beforetoggle",t),Iu("toggle",t)),null!=r.onScroll&&Iu("scroll",t),null!=r.onScrollEnd&&Iu("scrollend",t),null!=r.onClick&&(t.onclick=Ju),t=!0):t=!1,t||ca(e)}function da(e){for(ra=e.return;ra;)switch(ra.tag){case 5:case 13:return void(la=!1);case 27:case 3:return void(la=!0);default:ra=ra.return}}function fa(e){if(e!==ra)return!1;if(!ia)return da(e),ia=!0,!1;var t,n=e.tag;if((t=3!==n&&27!==n)&&((t=5===n)&&(t=!("form"!==(t=e.type)&&"button"!==t)||od(e.type,e.memoizedProps)),t=!t),t&&aa&&ca(e),da(e),13===n){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(o(317));e:{for(e=e.nextSibling,n=0;e;){if(8===e.nodeType)if("/$"===(t=e.data)){if(0===n){aa=bd(e.nextSibling);break e}n--}else"$"!==t&&"$!"!==t&&"$?"!==t||n++;e=e.nextSibling}aa=null}}else 27===n?(n=aa,hd(e.type)?(e=vd,vd=null,aa=e):aa=n):aa=ra?bd(e.stateNode.nextSibling):null;return!0}function ha(){aa=ra=null,ia=!1}function pa(){var e=oa;return null!==e&&(null===yc?yc=e:yc.push.apply(yc,e),oa=null),e}function ma(e){null===oa?oa=[e]:oa.push(e)}var ga=B(null),ba=null,va=null;function ya(e,t,n){$(ga,t._currentValue),t._currentValue=n}function xa(e){e._currentValue=ga.current,O(ga)}function wa(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ka(e,t,n,r){var a=e.child;for(null!==a&&(a.return=e);null!==a;){var i=a.dependencies;if(null!==i){var l=a.child;i=i.firstContext;e:for(;null!==i;){var s=i;i=a;for(var c=0;c<t.length;c++)if(s.context===t[c]){i.lanes|=n,null!==(s=i.alternate)&&(s.lanes|=n),wa(i.return,n,e),r||(l=null);break e}i=s.next}}else if(18===a.tag){if(null===(l=a.return))throw Error(o(341));l.lanes|=n,null!==(i=l.alternate)&&(i.lanes|=n),wa(l,n,e),l=null}else l=a.child;if(null!==l)l.return=a;else for(l=a;null!==l;){if(l===e){l=null;break}if(null!==(a=l.sibling)){a.return=l.return,l=a;break}l=l.return}a=l}}function ja(e,t,n,r){e=null;for(var a=t,i=!1;null!==a;){if(!i)if(0!==(524288&a.flags))i=!0;else if(0!==(262144&a.flags))break;if(10===a.tag){var l=a.alternate;if(null===l)throw Error(o(387));if(null!==(l=l.memoizedProps)){var s=a.type;Yn(a.pendingProps.value,l.value)||(null!==e?e.push(s):e=[s])}}else if(a===V.current){if(null===(l=a.alternate))throw Error(o(387));l.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(null!==e?e.push(Kd):e=[Kd])}a=a.return}null!==e&&ka(t,e,n,r),t.flags|=262144}function Sa(e){for(e=e.firstContext;null!==e;){if(!Yn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ea(e){ba=e,va=null,null!==(e=e.dependencies)&&(e.firstContext=null)}function Ca(e){return za(ba,e)}function Aa(e,t){return null===ba&&Ea(e),za(e,t)}function za(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},null===va){if(null===e)throw Error(o(308));va=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else va=va.next=t;return n}var Ta="undefined"!==typeof AbortController?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},Ma=r.unstable_scheduleCallback,Pa=r.unstable_NormalPriority,Ra={$$typeof:w,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Na(){return{controller:new Ta,data:new Map,refCount:0}}function _a(e){e.refCount--,0===e.refCount&&Ma(Pa,function(){e.controller.abort()})}var La=null,Da=0,Ia=0,Fa=null;function Ba(){if(0===--Da&&null!==La){null!==Fa&&(Fa.status="fulfilled");var e=La;La=null,Ia=0,Fa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}var Oa=_.S;_.S=function(e,t){"object"===typeof t&&null!==t&&"function"===typeof t.then&&function(e,t){if(null===La){var n=La=[];Da=0,Ia=Tu(),Fa={status:"pending",value:void 0,then:function(e){n.push(e)}}}Da++,t.then(Ba,Ba)}(0,t),null!==Oa&&Oa(e,t)};var $a=B(null);function Ua(){var e=$a.current;return null!==e?e:rc.pooledCache}function Ha(e,t){$($a,null===t?$a.current:t.pool)}function Wa(){var e=Ua();return null===e?null:{parent:Ra._currentValue,pool:e}}var Va=Error(o(460)),qa=Error(o(474)),Ga=Error(o(542)),Ka={then:function(){}};function Ya(e){return"fulfilled"===(e=e.status)||"rejected"===e}function Qa(){}function Ja(e,t,n){switch(void 0===(n=e[n])?e.push(t):n!==t&&(t.then(Qa,Qa),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw ei(e=t.reason),e;default:if("string"===typeof t.status)t.then(Qa,Qa);else{if(null!==(e=rc)&&100<e.shellSuspendCounter)throw Error(o(482));(e=t).status="pending",e.then(function(e){if("pending"===t.status){var n=t;n.status="fulfilled",n.value=e}},function(e){if("pending"===t.status){var n=t;n.status="rejected",n.reason=e}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw ei(e=t.reason),e}throw Xa=t,Va}}var Xa=null;function Za(){if(null===Xa)throw Error(o(459));var e=Xa;return Xa=null,e}function ei(e){if(e===Va||e===Ga)throw Error(o(483))}var ti=!1;function ni(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ri(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ai(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ii(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&nc)){var a=r.pending;return null===a?t.next=t:(t.next=a.next,a.next=t),r.pending=t,t=Nr(e),Rr(e,null,n),t}return Tr(e,r,t,n),Nr(e)}function oi(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194048&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Ae(e,n)}}function li(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var a=null,i=null;if(null!==(n=n.firstBaseUpdate)){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};null===i?a=i=o:i=i.next=o,n=n.next}while(null!==n);null===i?a=i=t:i=i.next=t}else a=i=t;return n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:r.shared,callbacks:r.callbacks},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var si=!1;function ci(){if(si){if(null!==Fa)throw Fa}}function ui(e,t,n,r){si=!1;var a=e.updateQueue;ti=!1;var i=a.firstBaseUpdate,o=a.lastBaseUpdate,l=a.shared.pending;if(null!==l){a.shared.pending=null;var s=l,c=s.next;s.next=null,null===o?i=c:o.next=c,o=s;var u=e.alternate;null!==u&&((l=(u=u.updateQueue).lastBaseUpdate)!==o&&(null===l?u.firstBaseUpdate=c:l.next=c,u.lastBaseUpdate=s))}if(null!==i){var d=a.baseState;for(o=0,u=c=s=null,l=i;;){var h=-536870913&l.lane,p=h!==l.lane;if(p?(ic&h)===h:(r&h)===h){0!==h&&h===Ia&&(si=!0),null!==u&&(u=u.next={lane:0,tag:l.tag,payload:l.payload,callback:null,next:null});e:{var m=e,g=l;h=t;var b=n;switch(g.tag){case 1:if("function"===typeof(m=g.payload)){d=m.call(b,d,h);break e}d=m;break e;case 3:m.flags=-65537&m.flags|128;case 0:if(null===(h="function"===typeof(m=g.payload)?m.call(b,d,h):m)||void 0===h)break e;d=f({},d,h);break e;case 2:ti=!0}}null!==(h=l.callback)&&(e.flags|=64,p&&(e.flags|=8192),null===(p=a.callbacks)?a.callbacks=[h]:p.push(h))}else p={lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},null===u?(c=u=p,s=d):u=u.next=p,o|=h;if(null===(l=l.next)){if(null===(l=a.shared.pending))break;l=(p=l).next,p.next=null,a.lastBaseUpdate=p,a.shared.pending=null}}null===u&&(s=d),a.baseState=s,a.firstBaseUpdate=c,a.lastBaseUpdate=u,null===i&&(a.shared.lanes=0),hc|=o,e.lanes=o,e.memoizedState=d}}function di(e,t){if("function"!==typeof e)throw Error(o(191,e));e.call(t)}function fi(e,t){var n=e.callbacks;if(null!==n)for(e.callbacks=null,e=0;e<n.length;e++)di(n[e],t)}var hi=B(null),pi=B(0);function mi(e,t){$(pi,e=dc),$(hi,t),dc=e|t.baseLanes}function gi(){$(pi,dc),$(hi,hi.current)}function bi(){dc=pi.current,O(hi),O(pi)}var vi=0,yi=null,xi=null,wi=null,ki=!1,ji=!1,Si=!1,Ei=0,Ci=0,Ai=null,zi=0;function Ti(){throw Error(o(321))}function Mi(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Yn(e[n],t[n]))return!1;return!0}function Pi(e,t,n,r,a,i){return vi=i,yi=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_.H=null===e||null===e.memoizedState?qo:Go,Si=!1,i=n(r,a),Si=!1,ji&&(i=Ni(t,n,r,a)),Ri(e),i}function Ri(e){_.H=Vo;var t=null!==xi&&null!==xi.next;if(vi=0,wi=xi=yi=null,ki=!1,Ci=0,Ai=null,t)throw Error(o(300));null===e||Al||null!==(e=e.dependencies)&&Sa(e)&&(Al=!0)}function Ni(e,t,n,r){yi=e;var a=0;do{if(ji&&(Ai=null),Ci=0,ji=!1,25<=a)throw Error(o(301));if(a+=1,wi=xi=null,null!=e.updateQueue){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,null!=i.memoCache&&(i.memoCache.index=0)}_.H=Ko,i=t(n,r)}while(ji);return i}function _i(){var e=_.H,t=e.useState()[0];return t="function"===typeof t.then?Oi(t):t,e=e.useState()[0],(null!==xi?xi.memoizedState:null)!==e&&(yi.flags|=1024),t}function Li(){var e=0!==Ei;return Ei=0,e}function Di(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Ii(e){if(ki){for(e=e.memoizedState;null!==e;){var t=e.queue;null!==t&&(t.pending=null),e=e.next}ki=!1}vi=0,wi=xi=yi=null,ji=!1,Ci=Ei=0,Ai=null}function Fi(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===wi?yi.memoizedState=wi=e:wi=wi.next=e,wi}function Bi(){if(null===xi){var e=yi.alternate;e=null!==e?e.memoizedState:null}else e=xi.next;var t=null===wi?yi.memoizedState:wi.next;if(null!==t)wi=t,xi=e;else{if(null===e){if(null===yi.alternate)throw Error(o(467));throw Error(o(310))}e={memoizedState:(xi=e).memoizedState,baseState:xi.baseState,baseQueue:xi.baseQueue,queue:xi.queue,next:null},null===wi?yi.memoizedState=wi=e:wi=wi.next=e}return wi}function Oi(e){var t=Ci;return Ci+=1,null===Ai&&(Ai=[]),e=Ja(Ai,e,t),t=yi,null===(null===wi?t.memoizedState:wi.next)&&(t=t.alternate,_.H=null===t||null===t.memoizedState?qo:Go),e}function $i(e){if(null!==e&&"object"===typeof e){if("function"===typeof e.then)return Oi(e);if(e.$$typeof===w)return Ca(e)}throw Error(o(438,String(e)))}function Ui(e){var t=null,n=yi.updateQueue;if(null!==n&&(t=n.memoCache),null==t){var r=yi.alternate;null!==r&&(null!==(r=r.updateQueue)&&(null!=(r=r.memoCache)&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(null==t&&(t={data:[],index:0}),null===n&&(n={lastEffect:null,events:null,stores:null,memoCache:null},yi.updateQueue=n),n.memoCache=t,void 0===(n=t.data[t.index]))for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=z;return t.index++,n}function Hi(e,t){return"function"===typeof t?t(e):t}function Wi(e){return Vi(Bi(),xi,e)}function Vi(e,t,n){var r=e.queue;if(null===r)throw Error(o(311));r.lastRenderedReducer=n;var a=e.baseQueue,i=r.pending;if(null!==i){if(null!==a){var l=a.next;a.next=i.next,i.next=l}t.baseQueue=a=i,r.pending=null}if(i=e.baseState,null===a)e.memoizedState=i;else{var s=l=null,c=null,u=t=a.next,d=!1;do{var f=-536870913&u.lane;if(f!==u.lane?(ic&f)===f:(vi&f)===f){var h=u.revertLane;if(0===h)null!==c&&(c=c.next={lane:0,revertLane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===Ia&&(d=!0);else{if((vi&h)===h){u=u.next,h===Ia&&(d=!0);continue}f={lane:0,revertLane:u.revertLane,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},null===c?(s=c=f,l=i):c=c.next=f,yi.lanes|=h,hc|=h}f=u.action,Si&&n(i,f),i=u.hasEagerState?u.eagerState:n(i,f)}else h={lane:f,revertLane:u.revertLane,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},null===c?(s=c=h,l=i):c=c.next=h,yi.lanes|=f,hc|=f;u=u.next}while(null!==u&&u!==t);if(null===c?l=i:c.next=s,!Yn(i,e.memoizedState)&&(Al=!0,d&&null!==(n=Fa)))throw n;e.memoizedState=i,e.baseState=l,e.baseQueue=c,r.lastRenderedState=i}return null===a&&(r.lanes=0),[e.memoizedState,r.dispatch]}function qi(e){var t=Bi(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,i=t.memoizedState;if(null!==a){n.pending=null;var l=a=a.next;do{i=e(i,l.action),l=l.next}while(l!==a);Yn(i,t.memoizedState)||(Al=!0),t.memoizedState=i,null===t.baseQueue&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Gi(e,t,n){var r=yi,a=Bi(),i=ia;if(i){if(void 0===n)throw Error(o(407));n=n()}else n=t();var l=!Yn((xi||a).memoizedState,n);if(l&&(a.memoizedState=n,Al=!0),a=a.queue,bo(2048,8,Qi.bind(null,r,a,e),[e]),a.getSnapshot!==t||l||null!==wi&&1&wi.memoizedState.tag){if(r.flags|=2048,po(9,{destroy:void 0,resource:void 0},Yi.bind(null,r,a,n,t),null),null===rc)throw Error(o(349));i||0!==(124&vi)||Ki(r,t,n)}return n}function Ki(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=yi.updateQueue)?(t={lastEffect:null,events:null,stores:null,memoCache:null},yi.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Yi(e,t,n,r){t.value=n,t.getSnapshot=r,Ji(t)&&Xi(e)}function Qi(e,t,n){return n(function(){Ji(t)&&Xi(e)})}function Ji(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Yn(e,n)}catch(r){return!0}}function Xi(e){var t=Pr(e,2);null!==t&&Dc(t,e,2)}function Zi(e){var t=Fi();if("function"===typeof e){var n=e;if(e=n(),Si){fe(!0);try{n()}finally{fe(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:e},t}function eo(e,t,n,r){return e.baseState=n,Vi(e,xi,"function"===typeof r?r:Hi)}function to(e,t,n,r,a){if(Uo(e))throw Error(o(485));if(null!==(e=t.action)){var i={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(e){i.listeners.push(e)}};null!==_.T?n(!0):i.isTransition=!1,r(i),null===(n=t.pending)?(i.next=t.pending=i,no(t,i)):(i.next=n.next,t.pending=n.next=i)}}function no(e,t){var n=t.action,r=t.payload,a=e.state;if(t.isTransition){var i=_.T,o={};_.T=o;try{var l=n(a,r),s=_.S;null!==s&&s(o,l),ro(e,t,l)}catch(c){io(e,t,c)}finally{_.T=i}}else try{ro(e,t,i=n(a,r))}catch(u){io(e,t,u)}}function ro(e,t,n){null!==n&&"object"===typeof n&&"function"===typeof n.then?n.then(function(n){ao(e,t,n)},function(n){return io(e,t,n)}):ao(e,t,n)}function ao(e,t,n){t.status="fulfilled",t.value=n,oo(t),e.state=n,null!==(t=e.pending)&&((n=t.next)===t?e.pending=null:(n=n.next,t.next=n,no(e,n)))}function io(e,t,n){var r=e.pending;if(e.pending=null,null!==r){r=r.next;do{t.status="rejected",t.reason=n,oo(t),t=t.next}while(t!==r)}e.action=null}function oo(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function lo(e,t){return t}function so(e,t){if(ia){var n=rc.formState;if(null!==n){e:{var r=yi;if(ia){if(aa){t:{for(var a=aa,i=la;8!==a.nodeType;){if(!i){a=null;break t}if(null===(a=bd(a.nextSibling))){a=null;break t}}a="F!"===(i=a.data)||"F"===i?a:null}if(a){aa=bd(a.nextSibling),r="F!"===a.data;break e}}ca(r)}r=!1}r&&(t=n[0])}}return(n=Fi()).memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:lo,lastRenderedState:t},n.queue=r,n=Bo.bind(null,yi,r),r.dispatch=n,r=Zi(!1),i=$o.bind(null,yi,!1,r.queue),a={state:t,dispatch:null,action:e,pending:null},(r=Fi()).queue=a,n=to.bind(null,yi,a,i,n),a.dispatch=n,r.memoizedState=e,[t,n,!1]}function co(e){return uo(Bi(),xi,e)}function uo(e,t,n){if(t=Vi(e,t,lo)[0],e=Wi(Hi)[0],"object"===typeof t&&null!==t&&"function"===typeof t.then)try{var r=Oi(t)}catch(o){if(o===Va)throw Ga;throw o}else r=t;var a=(t=Bi()).queue,i=a.dispatch;return n!==t.memoizedState&&(yi.flags|=2048,po(9,{destroy:void 0,resource:void 0},fo.bind(null,a,n),null)),[r,i,e]}function fo(e,t){e.action=t}function ho(e){var t=Bi(),n=xi;if(null!==n)return uo(t,n,e);Bi(),t=t.memoizedState;var r=(n=Bi()).queue.dispatch;return n.memoizedState=e,[t,r,!1]}function po(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},null===(t=yi.updateQueue)&&(t={lastEffect:null,events:null,stores:null,memoCache:null},yi.updateQueue=t),null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function mo(){return Bi().memoizedState}function go(e,t,n,r){var a=Fi();r=void 0===r?null:r,yi.flags|=e,a.memoizedState=po(1|t,{destroy:void 0,resource:void 0},n,r)}function bo(e,t,n,r){var a=Bi();r=void 0===r?null:r;var i=a.memoizedState.inst;null!==xi&&null!==r&&Mi(r,xi.memoizedState.deps)?a.memoizedState=po(t,i,n,r):(yi.flags|=e,a.memoizedState=po(1|t,i,n,r))}function vo(e,t){go(8390656,8,e,t)}function yo(e,t){bo(2048,8,e,t)}function xo(e,t){return bo(4,2,e,t)}function wo(e,t){return bo(4,4,e,t)}function ko(e,t){if("function"===typeof t){e=e();var n=t(e);return function(){"function"===typeof n?n():t(null)}}if(null!==t&&void 0!==t)return e=e(),t.current=e,function(){t.current=null}}function jo(e,t,n){n=null!==n&&void 0!==n?n.concat([e]):null,bo(4,4,ko.bind(null,t,e),n)}function So(){}function Eo(e,t){var n=Bi();t=void 0===t?null:t;var r=n.memoizedState;return null!==t&&Mi(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Co(e,t){var n=Bi();t=void 0===t?null:t;var r=n.memoizedState;if(null!==t&&Mi(t,r[1]))return r[0];if(r=e(),Si){fe(!0);try{e()}finally{fe(!1)}}return n.memoizedState=[r,t],r}function Ao(e,t,n){return void 0===n||0!==(1073741824&vi)?e.memoizedState=t:(e.memoizedState=n,e=Lc(),yi.lanes|=e,hc|=e,n)}function zo(e,t,n,r){return Yn(n,t)?n:null!==hi.current?(e=Ao(e,n,r),Yn(e,t)||(Al=!0),e):0===(42&vi)?(Al=!0,e.memoizedState=n):(e=Lc(),yi.lanes|=e,hc|=e,t)}function To(e,t,n,r,a){var i=L.p;L.p=0!==i&&8>i?i:8;var o=_.T,l={};_.T=l,$o(e,!1,t,n);try{var s=a(),c=_.S;if(null!==c&&c(l,s),null!==s&&"object"===typeof s&&"function"===typeof s.then)Oo(e,t,function(e,t){var n=[],r={status:"pending",value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status="fulfilled",r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status="rejected",r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}(s,r),_c());else Oo(e,t,r,_c())}catch(u){Oo(e,t,{then:function(){},status:"rejected",reason:u},_c())}finally{L.p=i,_.T=o}}function Mo(){}function Po(e,t,n,r){if(5!==e.tag)throw Error(o(476));var a=Ro(e).queue;To(e,a,t,D,null===n?Mo:function(){return No(e),n(r)})}function Ro(e){var t=e.memoizedState;if(null!==t)return t;var n={};return(t={memoizedState:D,baseState:D,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:D},next:null}).next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:n},next:null},e.memoizedState=t,null!==(e=e.alternate)&&(e.memoizedState=t),t}function No(e){Oo(e,Ro(e).next.queue,{},_c())}function _o(){return Ca(Kd)}function Lo(){return Bi().memoizedState}function Do(){return Bi().memoizedState}function Io(e){for(var t=e.return;null!==t;){switch(t.tag){case 24:case 3:var n=_c(),r=ii(t,e=ai(n),n);return null!==r&&(Dc(r,t,n),oi(r,t,n)),t={cache:Na()},void(e.payload=t)}t=t.return}}function Fo(e,t,n){var r=_c();n={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Uo(e)?Ho(t,n):null!==(n=Mr(e,t,n,r))&&(Dc(n,e,r),Wo(n,t,r))}function Bo(e,t,n){Oo(e,t,n,_c())}function Oo(e,t,n,r){var a={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Uo(e))Ho(t,a);else{var i=e.alternate;if(0===e.lanes&&(null===i||0===i.lanes)&&null!==(i=t.lastRenderedReducer))try{var o=t.lastRenderedState,l=i(o,n);if(a.hasEagerState=!0,a.eagerState=l,Yn(l,o))return Tr(e,t,a,0),null===rc&&zr(),!1}catch(s){}if(null!==(n=Mr(e,t,a,r)))return Dc(n,e,r),Wo(n,t,r),!0}return!1}function $o(e,t,n,r){if(r={lane:2,revertLane:Tu(),action:r,hasEagerState:!1,eagerState:null,next:null},Uo(e)){if(t)throw Error(o(479))}else null!==(t=Mr(e,n,r,2))&&Dc(t,e,2)}function Uo(e){var t=e.alternate;return e===yi||null!==t&&t===yi}function Ho(e,t){ji=ki=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Wo(e,t,n){if(0!==(4194048&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Ae(e,n)}}var Vo={readContext:Ca,use:$i,useCallback:Ti,useContext:Ti,useEffect:Ti,useImperativeHandle:Ti,useLayoutEffect:Ti,useInsertionEffect:Ti,useMemo:Ti,useReducer:Ti,useRef:Ti,useState:Ti,useDebugValue:Ti,useDeferredValue:Ti,useTransition:Ti,useSyncExternalStore:Ti,useId:Ti,useHostTransitionStatus:Ti,useFormState:Ti,useActionState:Ti,useOptimistic:Ti,useMemoCache:Ti,useCacheRefresh:Ti},qo={readContext:Ca,use:$i,useCallback:function(e,t){return Fi().memoizedState=[e,void 0===t?null:t],e},useContext:Ca,useEffect:vo,useImperativeHandle:function(e,t,n){n=null!==n&&void 0!==n?n.concat([e]):null,go(4194308,4,ko.bind(null,t,e),n)},useLayoutEffect:function(e,t){return go(4194308,4,e,t)},useInsertionEffect:function(e,t){go(4,2,e,t)},useMemo:function(e,t){var n=Fi();t=void 0===t?null:t;var r=e();if(Si){fe(!0);try{e()}finally{fe(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Fi();if(void 0!==n){var a=n(t);if(Si){fe(!0);try{n(t)}finally{fe(!1)}}}else a=t;return r.memoizedState=r.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},r.queue=e,e=e.dispatch=Fo.bind(null,yi,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},Fi().memoizedState=e},useState:function(e){var t=(e=Zi(e)).queue,n=Bo.bind(null,yi,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:So,useDeferredValue:function(e,t){return Ao(Fi(),e,t)},useTransition:function(){var e=Zi(!1);return e=To.bind(null,yi,e.queue,!0,!1),Fi().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=yi,a=Fi();if(ia){if(void 0===n)throw Error(o(407));n=n()}else{if(n=t(),null===rc)throw Error(o(349));0!==(124&ic)||Ki(r,t,n)}a.memoizedState=n;var i={value:n,getSnapshot:t};return a.queue=i,vo(Qi.bind(null,r,i,e),[e]),r.flags|=2048,po(9,{destroy:void 0,resource:void 0},Yi.bind(null,r,i,n,t),null),n},useId:function(){var e=Fi(),t=rc.identifierPrefix;if(ia){var n=Xr;t="\xab"+t+"R"+(n=(Jr&~(1<<32-he(Jr)-1)).toString(32)+n),0<(n=Ei++)&&(t+="H"+n.toString(32)),t+="\xbb"}else t="\xab"+t+"r"+(n=zi++).toString(32)+"\xbb";return e.memoizedState=t},useHostTransitionStatus:_o,useFormState:so,useActionState:so,useOptimistic:function(e){var t=Fi();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=$o.bind(null,yi,!0,n),n.dispatch=t,[e,t]},useMemoCache:Ui,useCacheRefresh:function(){return Fi().memoizedState=Io.bind(null,yi)}},Go={readContext:Ca,use:$i,useCallback:Eo,useContext:Ca,useEffect:yo,useImperativeHandle:jo,useInsertionEffect:xo,useLayoutEffect:wo,useMemo:Co,useReducer:Wi,useRef:mo,useState:function(){return Wi(Hi)},useDebugValue:So,useDeferredValue:function(e,t){return zo(Bi(),xi.memoizedState,e,t)},useTransition:function(){var e=Wi(Hi)[0],t=Bi().memoizedState;return["boolean"===typeof e?e:Oi(e),t]},useSyncExternalStore:Gi,useId:Lo,useHostTransitionStatus:_o,useFormState:co,useActionState:co,useOptimistic:function(e,t){return eo(Bi(),0,e,t)},useMemoCache:Ui,useCacheRefresh:Do},Ko={readContext:Ca,use:$i,useCallback:Eo,useContext:Ca,useEffect:yo,useImperativeHandle:jo,useInsertionEffect:xo,useLayoutEffect:wo,useMemo:Co,useReducer:qi,useRef:mo,useState:function(){return qi(Hi)},useDebugValue:So,useDeferredValue:function(e,t){var n=Bi();return null===xi?Ao(n,e,t):zo(n,xi.memoizedState,e,t)},useTransition:function(){var e=qi(Hi)[0],t=Bi().memoizedState;return["boolean"===typeof e?e:Oi(e),t]},useSyncExternalStore:Gi,useId:Lo,useHostTransitionStatus:_o,useFormState:ho,useActionState:ho,useOptimistic:function(e,t){var n=Bi();return null!==xi?eo(n,0,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Ui,useCacheRefresh:Do},Yo=null,Qo=0;function Jo(e){var t=Qo;return Qo+=1,null===Yo&&(Yo=[]),Ja(Yo,e,t)}function Xo(e,t){t=t.props.ref,e.ref=void 0!==t?t:null}function Zo(e,t){if(t.$$typeof===h)throw Error(o(525));throw e=Object.prototype.toString.call(t),Error(o(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function el(e){return(0,e._init)(e._payload)}function tl(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;null!==e;)null!==e.key?t.set(e.key,e):t.set(e.index,e),e=e.sibling;return t}function a(e,t){return(e=Fr(e,t)).index=0,e.sibling=null,e}function i(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=67108866,n):r:(t.flags|=67108866,n):(t.flags|=1048576,n)}function l(t){return e&&null===t.alternate&&(t.flags|=67108866),t}function s(e,t,n,r){return null===t||6!==t.tag?((t=Ur(n,e.mode,r)).return=e,t):((t=a(t,n)).return=e,t)}function c(e,t,n,r){var i=n.type;return i===g?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===i||"object"===typeof i&&null!==i&&i.$$typeof===C&&el(i)===t.type)?(Xo(t=a(t,n.props),n),t.return=e,t):(Xo(t=Or(n.type,n.key,n.props,null,e.mode,r),n),t.return=e,t)}function u(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Hr(n,e.mode,r)).return=e,t):((t=a(t,n.children||[])).return=e,t)}function d(e,t,n,r,i){return null===t||7!==t.tag?((t=$r(n,e.mode,r,i)).return=e,t):((t=a(t,n)).return=e,t)}function f(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t||"bigint"===typeof t)return(t=Ur(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case p:return Xo(n=Or(t.type,t.key,t.props,null,e.mode,n),t),n.return=e,n;case m:return(t=Hr(t,e.mode,n)).return=e,t;case C:return f(e,t=(0,t._init)(t._payload),n)}if(N(t)||M(t))return(t=$r(t,e.mode,n,null)).return=e,t;if("function"===typeof t.then)return f(e,Jo(t),n);if(t.$$typeof===w)return f(e,Aa(e,t),n);Zo(e,t)}return null}function h(e,t,n,r){var a=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n||"bigint"===typeof n)return null!==a?null:s(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case p:return n.key===a?c(e,t,n,r):null;case m:return n.key===a?u(e,t,n,r):null;case C:return h(e,t,n=(a=n._init)(n._payload),r)}if(N(n)||M(n))return null!==a?null:d(e,t,n,r,null);if("function"===typeof n.then)return h(e,t,Jo(n),r);if(n.$$typeof===w)return h(e,t,Aa(e,n),r);Zo(e,n)}return null}function b(e,t,n,r,a){if("string"===typeof r&&""!==r||"number"===typeof r||"bigint"===typeof r)return s(t,e=e.get(n)||null,""+r,a);if("object"===typeof r&&null!==r){switch(r.$$typeof){case p:return c(t,e=e.get(null===r.key?n:r.key)||null,r,a);case m:return u(t,e=e.get(null===r.key?n:r.key)||null,r,a);case C:return b(e,t,n,r=(0,r._init)(r._payload),a)}if(N(r)||M(r))return d(t,e=e.get(n)||null,r,a,null);if("function"===typeof r.then)return b(e,t,n,Jo(r),a);if(r.$$typeof===w)return b(e,t,n,Aa(t,r),a);Zo(t,r)}return null}function v(s,c,u,d){if("object"===typeof u&&null!==u&&u.type===g&&null===u.key&&(u=u.props.children),"object"===typeof u&&null!==u){switch(u.$$typeof){case p:e:{for(var y=u.key;null!==c;){if(c.key===y){if((y=u.type)===g){if(7===c.tag){n(s,c.sibling),(d=a(c,u.props.children)).return=s,s=d;break e}}else if(c.elementType===y||"object"===typeof y&&null!==y&&y.$$typeof===C&&el(y)===c.type){n(s,c.sibling),Xo(d=a(c,u.props),u),d.return=s,s=d;break e}n(s,c);break}t(s,c),c=c.sibling}u.type===g?((d=$r(u.props.children,s.mode,d,u.key)).return=s,s=d):(Xo(d=Or(u.type,u.key,u.props,null,s.mode,d),u),d.return=s,s=d)}return l(s);case m:e:{for(y=u.key;null!==c;){if(c.key===y){if(4===c.tag&&c.stateNode.containerInfo===u.containerInfo&&c.stateNode.implementation===u.implementation){n(s,c.sibling),(d=a(c,u.children||[])).return=s,s=d;break e}n(s,c);break}t(s,c),c=c.sibling}(d=Hr(u,s.mode,d)).return=s,s=d}return l(s);case C:return v(s,c,u=(y=u._init)(u._payload),d)}if(N(u))return function(a,o,l,s){for(var c=null,u=null,d=o,p=o=0,m=null;null!==d&&p<l.length;p++){d.index>p?(m=d,d=null):m=d.sibling;var g=h(a,d,l[p],s);if(null===g){null===d&&(d=m);break}e&&d&&null===g.alternate&&t(a,d),o=i(g,o,p),null===u?c=g:u.sibling=g,u=g,d=m}if(p===l.length)return n(a,d),ia&&Zr(a,p),c;if(null===d){for(;p<l.length;p++)null!==(d=f(a,l[p],s))&&(o=i(d,o,p),null===u?c=d:u.sibling=d,u=d);return ia&&Zr(a,p),c}for(d=r(d);p<l.length;p++)null!==(m=b(d,a,p,l[p],s))&&(e&&null!==m.alternate&&d.delete(null===m.key?p:m.key),o=i(m,o,p),null===u?c=m:u.sibling=m,u=m);return e&&d.forEach(function(e){return t(a,e)}),ia&&Zr(a,p),c}(s,c,u,d);if(M(u)){if("function"!==typeof(y=M(u)))throw Error(o(150));return function(a,l,s,c){if(null==s)throw Error(o(151));for(var u=null,d=null,p=l,m=l=0,g=null,v=s.next();null!==p&&!v.done;m++,v=s.next()){p.index>m?(g=p,p=null):g=p.sibling;var y=h(a,p,v.value,c);if(null===y){null===p&&(p=g);break}e&&p&&null===y.alternate&&t(a,p),l=i(y,l,m),null===d?u=y:d.sibling=y,d=y,p=g}if(v.done)return n(a,p),ia&&Zr(a,m),u;if(null===p){for(;!v.done;m++,v=s.next())null!==(v=f(a,v.value,c))&&(l=i(v,l,m),null===d?u=v:d.sibling=v,d=v);return ia&&Zr(a,m),u}for(p=r(p);!v.done;m++,v=s.next())null!==(v=b(p,a,m,v.value,c))&&(e&&null!==v.alternate&&p.delete(null===v.key?m:v.key),l=i(v,l,m),null===d?u=v:d.sibling=v,d=v);return e&&p.forEach(function(e){return t(a,e)}),ia&&Zr(a,m),u}(s,c,u=y.call(u),d)}if("function"===typeof u.then)return v(s,c,Jo(u),d);if(u.$$typeof===w)return v(s,c,Aa(s,u),d);Zo(s,u)}return"string"===typeof u&&""!==u||"number"===typeof u||"bigint"===typeof u?(u=""+u,null!==c&&6===c.tag?(n(s,c.sibling),(d=a(c,u)).return=s,s=d):(n(s,c),(d=Ur(u,s.mode,d)).return=s,s=d),l(s)):n(s,c)}return function(e,t,n,r){try{Qo=0;var a=v(e,t,n,r);return Yo=null,a}catch(o){if(o===Va||o===Ga)throw o;var i=Dr(29,o,null,e.mode);return i.lanes=r,i.return=e,i}}}var nl=tl(!0),rl=tl(!1),al=B(null),il=null;function ol(e){var t=e.alternate;$(ul,1&ul.current),$(al,e),null===il&&(null===t||null!==hi.current||null!==t.memoizedState)&&(il=e)}function ll(e){if(22===e.tag){if($(ul,ul.current),$(al,e),null===il){var t=e.alternate;null!==t&&null!==t.memoizedState&&(il=e)}}else sl()}function sl(){$(ul,ul.current),$(al,al.current)}function cl(e){O(al),il===e&&(il=null),O(ul)}var ul=B(0);function dl(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||gd(n)))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function fl(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:f({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var hl={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=_c(),a=ai(r);a.payload=t,void 0!==n&&null!==n&&(a.callback=n),null!==(t=ii(e,a,r))&&(Dc(t,e,r),oi(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=_c(),a=ai(r);a.tag=1,a.payload=t,void 0!==n&&null!==n&&(a.callback=n),null!==(t=ii(e,a,r))&&(Dc(t,e,r),oi(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=_c(),r=ai(n);r.tag=2,void 0!==t&&null!==t&&(r.callback=t),null!==(t=ii(e,r,n))&&(Dc(t,e,n),oi(t,e,n))}};function pl(e,t,n,r,a,i,o){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,i,o):!t.prototype||!t.prototype.isPureReactComponent||(!Qn(n,r)||!Qn(a,i))}function ml(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&hl.enqueueReplaceState(t,t.state,null)}function gl(e,t){var n=t;if("ref"in t)for(var r in n={},t)"ref"!==r&&(n[r]=t[r]);if(e=e.defaultProps)for(var a in n===t&&(n=f({},n)),e)void 0===n[a]&&(n[a]=e[a]);return n}var bl="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)};function vl(e){bl(e)}function yl(e){console.error(e)}function xl(e){bl(e)}function wl(e,t){try{(0,e.onUncaughtError)(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function kl(e,t,n){try{(0,e.onCaughtError)(n.value,{componentStack:n.stack,errorBoundary:1===t.tag?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function jl(e,t,n){return(n=ai(n)).tag=3,n.payload={element:null},n.callback=function(){wl(e,t)},n}function Sl(e){return(e=ai(e)).tag=3,e}function El(e,t,n,r){var a=n.type.getDerivedStateFromError;if("function"===typeof a){var i=r.value;e.payload=function(){return a(i)},e.callback=function(){kl(t,n,r)}}var o=n.stateNode;null!==o&&"function"===typeof o.componentDidCatch&&(e.callback=function(){kl(t,n,r),"function"!==typeof a&&(null===Sc?Sc=new Set([this]):Sc.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:null!==e?e:""})})}var Cl=Error(o(461)),Al=!1;function zl(e,t,n,r){t.child=null===e?rl(t,null,n,r):nl(t,e.child,n,r)}function Tl(e,t,n,r,a){n=n.render;var i=t.ref;if("ref"in r){var o={};for(var l in r)"ref"!==l&&(o[l]=r[l])}else o=r;return Ea(t),r=Pi(e,t,n,o,i,a),l=Li(),null===e||Al?(ia&&l&&ta(t),t.flags|=1,zl(e,t,r,a),t.child):(Di(e,t,a),Yl(e,t,a))}function Ml(e,t,n,r,a){if(null===e){var i=n.type;return"function"!==typeof i||Ir(i)||void 0!==i.defaultProps||null!==n.compare?((e=Or(n.type,null,r,t,t.mode,a)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=i,Pl(e,t,i,r,a))}if(i=e.child,!Ql(e,a)){var o=i.memoizedProps;if((n=null!==(n=n.compare)?n:Qn)(o,r)&&e.ref===t.ref)return Yl(e,t,a)}return t.flags|=1,(e=Fr(i,r)).ref=t.ref,e.return=t,t.child=e}function Pl(e,t,n,r,a){if(null!==e){var i=e.memoizedProps;if(Qn(i,r)&&e.ref===t.ref){if(Al=!1,t.pendingProps=r=i,!Ql(e,a))return t.lanes=e.lanes,Yl(e,t,a);0!==(131072&e.flags)&&(Al=!0)}}return Ll(e,t,n,r,a)}function Rl(e,t,n){var r=t.pendingProps,a=r.children,i=null!==e?e.memoizedState:null;if("hidden"===r.mode){if(0!==(128&t.flags)){if(r=null!==i?i.baseLanes|n:n,null!==e){for(a=t.child=e.child,i=0;null!==a;)i=i|a.lanes|a.childLanes,a=a.sibling;t.childLanes=i&~r}else t.childLanes=0,t.child=null;return Nl(e,t,r,n)}if(0===(536870912&n))return t.lanes=t.childLanes=536870912,Nl(e,t,null!==i?i.baseLanes|n:n,n);t.memoizedState={baseLanes:0,cachePool:null},null!==e&&Ha(0,null!==i?i.cachePool:null),null!==i?mi(t,i):gi(),ll(t)}else null!==i?(Ha(0,i.cachePool),mi(t,i),sl(),t.memoizedState=null):(null!==e&&Ha(0,null),gi(),sl());return zl(e,t,a,n),t.child}function Nl(e,t,n,r){var a=Ua();return a=null===a?null:{parent:Ra._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},null!==e&&Ha(0,null),gi(),ll(t),null!==e&&ja(e,t,r,!0),null}function _l(e,t){var n=t.ref;if(null===n)null!==e&&null!==e.ref&&(t.flags|=4194816);else{if("function"!==typeof n&&"object"!==typeof n)throw Error(o(284));null!==e&&e.ref===n||(t.flags|=4194816)}}function Ll(e,t,n,r,a){return Ea(t),n=Pi(e,t,n,r,void 0,a),r=Li(),null===e||Al?(ia&&r&&ta(t),t.flags|=1,zl(e,t,n,a),t.child):(Di(e,t,a),Yl(e,t,a))}function Dl(e,t,n,r,a,i){return Ea(t),t.updateQueue=null,n=Ni(t,r,n,a),Ri(e),r=Li(),null===e||Al?(ia&&r&&ta(t),t.flags|=1,zl(e,t,n,i),t.child):(Di(e,t,i),Yl(e,t,i))}function Il(e,t,n,r,a){if(Ea(t),null===t.stateNode){var i=_r,o=n.contextType;"object"===typeof o&&null!==o&&(i=Ca(o)),i=new n(r,i),t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,i.updater=hl,t.stateNode=i,i._reactInternals=t,(i=t.stateNode).props=r,i.state=t.memoizedState,i.refs={},ni(t),o=n.contextType,i.context="object"===typeof o&&null!==o?Ca(o):_r,i.state=t.memoizedState,"function"===typeof(o=n.getDerivedStateFromProps)&&(fl(t,n,o,r),i.state=t.memoizedState),"function"===typeof n.getDerivedStateFromProps||"function"===typeof i.getSnapshotBeforeUpdate||"function"!==typeof i.UNSAFE_componentWillMount&&"function"!==typeof i.componentWillMount||(o=i.state,"function"===typeof i.componentWillMount&&i.componentWillMount(),"function"===typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),o!==i.state&&hl.enqueueReplaceState(i,i.state,null),ui(t,r,i,a),ci(),i.state=t.memoizedState),"function"===typeof i.componentDidMount&&(t.flags|=4194308),r=!0}else if(null===e){i=t.stateNode;var l=t.memoizedProps,s=gl(n,l);i.props=s;var c=i.context,u=n.contextType;o=_r,"object"===typeof u&&null!==u&&(o=Ca(u));var d=n.getDerivedStateFromProps;u="function"===typeof d||"function"===typeof i.getSnapshotBeforeUpdate,l=t.pendingProps!==l,u||"function"!==typeof i.UNSAFE_componentWillReceiveProps&&"function"!==typeof i.componentWillReceiveProps||(l||c!==o)&&ml(t,i,r,o),ti=!1;var f=t.memoizedState;i.state=f,ui(t,r,i,a),ci(),c=t.memoizedState,l||f!==c||ti?("function"===typeof d&&(fl(t,n,d,r),c=t.memoizedState),(s=ti||pl(t,n,s,r,f,c,o))?(u||"function"!==typeof i.UNSAFE_componentWillMount&&"function"!==typeof i.componentWillMount||("function"===typeof i.componentWillMount&&i.componentWillMount(),"function"===typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount()),"function"===typeof i.componentDidMount&&(t.flags|=4194308)):("function"===typeof i.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),i.props=r,i.state=c,i.context=o,r=s):("function"===typeof i.componentDidMount&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,ri(e,t),u=gl(n,o=t.memoizedProps),i.props=u,d=t.pendingProps,f=i.context,c=n.contextType,s=_r,"object"===typeof c&&null!==c&&(s=Ca(c)),(c="function"===typeof(l=n.getDerivedStateFromProps)||"function"===typeof i.getSnapshotBeforeUpdate)||"function"!==typeof i.UNSAFE_componentWillReceiveProps&&"function"!==typeof i.componentWillReceiveProps||(o!==d||f!==s)&&ml(t,i,r,s),ti=!1,f=t.memoizedState,i.state=f,ui(t,r,i,a),ci();var h=t.memoizedState;o!==d||f!==h||ti||null!==e&&null!==e.dependencies&&Sa(e.dependencies)?("function"===typeof l&&(fl(t,n,l,r),h=t.memoizedState),(u=ti||pl(t,n,u,r,f,h,s)||null!==e&&null!==e.dependencies&&Sa(e.dependencies))?(c||"function"!==typeof i.UNSAFE_componentWillUpdate&&"function"!==typeof i.componentWillUpdate||("function"===typeof i.componentWillUpdate&&i.componentWillUpdate(r,h,s),"function"===typeof i.UNSAFE_componentWillUpdate&&i.UNSAFE_componentWillUpdate(r,h,s)),"function"===typeof i.componentDidUpdate&&(t.flags|=4),"function"===typeof i.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof i.componentDidUpdate||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof i.getSnapshotBeforeUpdate||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),i.props=r,i.state=h,i.context=s,r=u):("function"!==typeof i.componentDidUpdate||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof i.getSnapshotBeforeUpdate||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return i=r,_l(e,t),r=0!==(128&t.flags),i||r?(i=t.stateNode,n=r&&"function"!==typeof n.getDerivedStateFromError?null:i.render(),t.flags|=1,null!==e&&r?(t.child=nl(t,e.child,null,a),t.child=nl(t,null,n,a)):zl(e,t,n,a),t.memoizedState=i.state,e=t.child):e=Yl(e,t,a),e}function Fl(e,t,n,r){return ha(),t.flags|=256,zl(e,t,n,r),t.child}var Bl={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ol(e){return{baseLanes:e,cachePool:Wa()}}function $l(e,t,n){return e=null!==e?e.childLanes&~n:0,t&&(e|=gc),e}function Ul(e,t,n){var r,a=t.pendingProps,i=!1,l=0!==(128&t.flags);if((r=l)||(r=(null===e||null!==e.memoizedState)&&0!==(2&ul.current)),r&&(i=!0,t.flags&=-129),r=0!==(32&t.flags),t.flags&=-33,null===e){if(ia){if(i?ol(t):sl(),ia){var s,c=aa;if(s=c){e:{for(s=c,c=la;8!==s.nodeType;){if(!c){c=null;break e}if(null===(s=bd(s.nextSibling))){c=null;break e}}c=s}null!==c?(t.memoizedState={dehydrated:c,treeContext:null!==Qr?{id:Jr,overflow:Xr}:null,retryLane:536870912,hydrationErrors:null},(s=Dr(18,null,null,0)).stateNode=c,s.return=t,t.child=s,ra=t,aa=null,s=!0):s=!1}s||ca(t)}if(null!==(c=t.memoizedState)&&null!==(c=c.dehydrated))return gd(c)?t.lanes=32:t.lanes=536870912,null;cl(t)}return c=a.children,a=a.fallback,i?(sl(),c=Wl({mode:"hidden",children:c},i=t.mode),a=$r(a,i,n,null),c.return=t,a.return=t,c.sibling=a,t.child=c,(i=t.child).memoizedState=Ol(n),i.childLanes=$l(e,r,n),t.memoizedState=Bl,a):(ol(t),Hl(t,c))}if(null!==(s=e.memoizedState)&&null!==(c=s.dehydrated)){if(l)256&t.flags?(ol(t),t.flags&=-257,t=Vl(e,t,n)):null!==t.memoizedState?(sl(),t.child=e.child,t.flags|=128,t=null):(sl(),i=a.fallback,c=t.mode,a=Wl({mode:"visible",children:a.children},c),(i=$r(i,c,n,null)).flags|=2,a.return=t,i.return=t,a.sibling=i,t.child=a,nl(t,e.child,null,n),(a=t.child).memoizedState=Ol(n),a.childLanes=$l(e,r,n),t.memoizedState=Bl,t=i);else if(ol(t),gd(c)){if(r=c.nextSibling&&c.nextSibling.dataset)var u=r.dgst;r=u,(a=Error(o(419))).stack="",a.digest=r,ma({value:a,source:null,stack:null}),t=Vl(e,t,n)}else if(Al||ja(e,t,n,!1),r=0!==(n&e.childLanes),Al||r){if(null!==(r=rc)&&(0!==(a=0!==((a=0!==(42&(a=n&-n))?1:ze(a))&(r.suspendedLanes|n))?0:a)&&a!==s.retryLane))throw s.retryLane=a,Pr(e,a),Dc(r,e,a),Cl;"$?"===c.data||Gc(),t=Vl(e,t,n)}else"$?"===c.data?(t.flags|=192,t.child=e.child,t=null):(e=s.treeContext,aa=bd(c.nextSibling),ra=t,ia=!0,oa=null,la=!1,null!==e&&(Kr[Yr++]=Jr,Kr[Yr++]=Xr,Kr[Yr++]=Qr,Jr=e.id,Xr=e.overflow,Qr=t),(t=Hl(t,a.children)).flags|=4096);return t}return i?(sl(),i=a.fallback,c=t.mode,u=(s=e.child).sibling,(a=Fr(s,{mode:"hidden",children:a.children})).subtreeFlags=65011712&s.subtreeFlags,null!==u?i=Fr(u,i):(i=$r(i,c,n,null)).flags|=2,i.return=t,a.return=t,a.sibling=i,t.child=a,a=i,i=t.child,null===(c=e.child.memoizedState)?c=Ol(n):(null!==(s=c.cachePool)?(u=Ra._currentValue,s=s.parent!==u?{parent:u,pool:u}:s):s=Wa(),c={baseLanes:c.baseLanes|n,cachePool:s}),i.memoizedState=c,i.childLanes=$l(e,r,n),t.memoizedState=Bl,a):(ol(t),e=(n=e.child).sibling,(n=Fr(n,{mode:"visible",children:a.children})).return=t,n.sibling=null,null!==e&&(null===(r=t.deletions)?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function Hl(e,t){return(t=Wl({mode:"visible",children:t},e.mode)).return=e,e.child=t}function Wl(e,t){return(e=Dr(22,e,null,t)).lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Vl(e,t,n){return nl(t,e.child,null,n),(e=Hl(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function ql(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),wa(e.return,t,n)}function Gl(e,t,n,r,a){var i=e.memoizedState;null===i?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=a)}function Kl(e,t,n){var r=t.pendingProps,a=r.revealOrder,i=r.tail;if(zl(e,t,r.children,n),0!==(2&(r=ul.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&ql(e,n,t);else if(19===e.tag)ql(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}switch($(ul,r),a){case"forwards":for(n=t.child,a=null;null!==n;)null!==(e=n.alternate)&&null===dl(e)&&(a=n),n=n.sibling;null===(n=a)?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Gl(t,!1,a,n,i);break;case"backwards":for(n=null,a=t.child,t.child=null;null!==a;){if(null!==(e=a.alternate)&&null===dl(e)){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Gl(t,!0,n,null,i);break;case"together":Gl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Yl(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),hc|=t.lanes,0===(n&t.childLanes)){if(null===e)return null;if(ja(e,t,n,!1),0===(n&t.childLanes))return null}if(null!==e&&t.child!==e.child)throw Error(o(153));if(null!==t.child){for(n=Fr(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Fr(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Ql(e,t){return 0!==(e.lanes&t)||!(null===(e=e.dependencies)||!Sa(e))}function Jl(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps)Al=!0;else{if(!Ql(e,n)&&0===(128&t.flags))return Al=!1,function(e,t,n){switch(t.tag){case 3:q(t,t.stateNode.containerInfo),ya(0,Ra,e.memoizedState.cache),ha();break;case 27:case 5:K(t);break;case 4:q(t,t.stateNode.containerInfo);break;case 10:ya(0,t.type,t.memoizedProps.value);break;case 13:var r=t.memoizedState;if(null!==r)return null!==r.dehydrated?(ol(t),t.flags|=128,null):0!==(n&t.child.childLanes)?Ul(e,t,n):(ol(t),null!==(e=Yl(e,t,n))?e.sibling:null);ol(t);break;case 19:var a=0!==(128&e.flags);if((r=0!==(n&t.childLanes))||(ja(e,t,n,!1),r=0!==(n&t.childLanes)),a){if(r)return Kl(e,t,n);t.flags|=128}if(null!==(a=t.memoizedState)&&(a.rendering=null,a.tail=null,a.lastEffect=null),$(ul,ul.current),r)break;return null;case 22:case 23:return t.lanes=0,Rl(e,t,n);case 24:ya(0,Ra,e.memoizedState.cache)}return Yl(e,t,n)}(e,t,n);Al=0!==(131072&e.flags)}else Al=!1,ia&&0!==(1048576&t.flags)&&ea(t,Gr,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var r=t.elementType,a=r._init;if(r=a(r._payload),t.type=r,"function"!==typeof r){if(void 0!==r&&null!==r){if((a=r.$$typeof)===k){t.tag=11,t=Tl(null,t,r,e,n);break e}if(a===E){t.tag=14,t=Ml(null,t,r,e,n);break e}}throw t=R(r)||r,Error(o(306,t,""))}Ir(r)?(e=gl(r,e),t.tag=1,t=Il(null,t,r,e,n)):(t.tag=0,t=Ll(null,t,r,e,n))}return t;case 0:return Ll(e,t,t.type,t.pendingProps,n);case 1:return Il(e,t,r=t.type,a=gl(r,t.pendingProps),n);case 3:e:{if(q(t,t.stateNode.containerInfo),null===e)throw Error(o(387));r=t.pendingProps;var i=t.memoizedState;a=i.element,ri(e,t),ui(t,r,null,n);var l=t.memoizedState;if(r=l.cache,ya(0,Ra,r),r!==i.cache&&ka(t,[Ra],n,!0),ci(),r=l.element,i.isDehydrated){if(i={element:r,isDehydrated:!1,cache:l.cache},t.updateQueue.baseState=i,t.memoizedState=i,256&t.flags){t=Fl(e,t,r,n);break e}if(r!==a){ma(a=Sr(Error(o(424)),t)),t=Fl(e,t,r,n);break e}if(9===(e=t.stateNode.containerInfo).nodeType)e=e.body;else e="HTML"===e.nodeName?e.ownerDocument.body:e;for(aa=bd(e.firstChild),ra=t,ia=!0,oa=null,la=!0,n=rl(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(ha(),r===a){t=Yl(e,t,n);break e}zl(e,t,r,n)}t=t.child}return t;case 26:return _l(e,t),null===e?(n=zd(t.type,null,t.pendingProps,null))?t.memoizedState=n:ia||(n=t.type,e=t.pendingProps,(r=rd(W.current).createElement(n))[Re]=t,r[Ne]=e,ed(r,n,e),Ve(r),t.stateNode=r):t.memoizedState=zd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return K(t),null===e&&ia&&(r=t.stateNode=xd(t.type,t.pendingProps,W.current),ra=t,la=!0,a=aa,hd(t.type)?(vd=a,aa=bd(r.firstChild)):aa=a),zl(e,t,t.pendingProps.children,n),_l(e,t),null===e&&(t.flags|=4194304),t.child;case 5:return null===e&&ia&&((a=r=aa)&&(null!==(r=function(e,t,n,r){for(;1===e.nodeType;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&("INPUT"!==e.nodeName||"hidden"!==e.type))break}else if(r){if(!e[Be])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if("stylesheet"===(i=e.getAttribute("rel"))&&e.hasAttribute("data-precedence"))break;if(i!==a.rel||e.getAttribute("href")!==(null==a.href||""===a.href?null:a.href)||e.getAttribute("crossorigin")!==(null==a.crossOrigin?null:a.crossOrigin)||e.getAttribute("title")!==(null==a.title?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(((i=e.getAttribute("src"))!==(null==a.src?null:a.src)||e.getAttribute("type")!==(null==a.type?null:a.type)||e.getAttribute("crossorigin")!==(null==a.crossOrigin?null:a.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else{if("input"!==t||"hidden"!==e.type)return e;var i=null==a.name?null:""+a.name;if("hidden"===a.type&&e.getAttribute("name")===i)return e}if(null===(e=bd(e.nextSibling)))break}return null}(r,t.type,t.pendingProps,la))?(t.stateNode=r,ra=t,aa=bd(r.firstChild),la=!1,a=!0):a=!1),a||ca(t)),K(t),a=t.type,i=t.pendingProps,l=null!==e?e.memoizedProps:null,r=i.children,od(a,i)?r=null:null!==l&&od(a,l)&&(t.flags|=32),null!==t.memoizedState&&(a=Pi(e,t,_i,null,null,n),Kd._currentValue=a),_l(e,t),zl(e,t,r,n),t.child;case 6:return null===e&&ia&&((e=n=aa)&&(null!==(n=function(e,t,n){if(""===t)return null;for(;3!==e.nodeType;){if((1!==e.nodeType||"INPUT"!==e.nodeName||"hidden"!==e.type)&&!n)return null;if(null===(e=bd(e.nextSibling)))return null}return e}(n,t.pendingProps,la))?(t.stateNode=n,ra=t,aa=null,e=!0):e=!1),e||ca(t)),null;case 13:return Ul(e,t,n);case 4:return q(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=nl(t,null,r,n):zl(e,t,r,n),t.child;case 11:return Tl(e,t,t.type,t.pendingProps,n);case 7:return zl(e,t,t.pendingProps,n),t.child;case 8:case 12:return zl(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,ya(0,t.type,r.value),zl(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,Ea(t),r=r(a=Ca(a)),t.flags|=1,zl(e,t,r,n),t.child;case 14:return Ml(e,t,t.type,t.pendingProps,n);case 15:return Pl(e,t,t.type,t.pendingProps,n);case 19:return Kl(e,t,n);case 31:return r=t.pendingProps,n=t.mode,r={mode:r.mode,children:r.children},null===e?((n=Wl(r,n)).ref=t.ref,t.child=n,n.return=t,t=n):((n=Fr(e.child,r)).ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return Rl(e,t,n);case 24:return Ea(t),r=Ca(Ra),null===e?(null===(a=Ua())&&(a=rc,i=Na(),a.pooledCache=i,i.refCount++,null!==i&&(a.pooledCacheLanes|=n),a=i),t.memoizedState={parent:r,cache:a},ni(t),ya(0,Ra,a)):(0!==(e.lanes&n)&&(ri(e,t),ui(t,null,null,n),ci()),a=e.memoizedState,i=t.memoizedState,a.parent!==r?(a={parent:r,cache:r},t.memoizedState=a,0===t.lanes&&(t.memoizedState=t.updateQueue.baseState=a),ya(0,Ra,r)):(r=i.cache,ya(0,Ra,r),r!==a.cache&&ka(t,[Ra],n,!0))),zl(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function Xl(e){e.flags|=4}function Zl(e,t){if("stylesheet"!==t.type||0!==(4&t.state.loading))e.flags&=-16777217;else if(e.flags|=16777216,!$d(t)){if(null!==(t=al.current)&&((4194048&ic)===ic?null!==il:(62914560&ic)!==ic&&0===(536870912&ic)||t!==il))throw Xa=Ka,qa;e.flags|=8192}}function es(e,t){null!==t&&(e.flags|=4),16384&e.flags&&(t=22!==e.tag?je():536870912,e.lanes|=t,bc|=t)}function ts(e,t){if(!ia)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ns(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=65011712&a.subtreeFlags,r|=65011712&a.flags,a.return=e,a=a.sibling;else for(a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function rs(e,t,n){var r=t.pendingProps;switch(na(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:case 1:return ns(t),null;case 3:return n=t.stateNode,r=null,null!==e&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),xa(Ra),G(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),null!==e&&null!==e.child||(fa(t)?Xl(t):null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,pa())),ns(t),null;case 26:return n=t.memoizedState,null===e?(Xl(t),null!==n?(ns(t),Zl(t,n)):(ns(t),t.flags&=-16777217)):n?n!==e.memoizedState?(Xl(t),ns(t),Zl(t,n)):(ns(t),t.flags&=-16777217):(e.memoizedProps!==r&&Xl(t),ns(t),t.flags&=-16777217),null;case 27:Y(t),n=W.current;var a=t.type;if(null!==e&&null!=t.stateNode)e.memoizedProps!==r&&Xl(t);else{if(!r){if(null===t.stateNode)throw Error(o(166));return ns(t),null}e=U.current,fa(t)?ua(t):(e=xd(a,r,n),t.stateNode=e,Xl(t))}return ns(t),null;case 5:if(Y(t),n=t.type,null!==e&&null!=t.stateNode)e.memoizedProps!==r&&Xl(t);else{if(!r){if(null===t.stateNode)throw Error(o(166));return ns(t),null}if(e=U.current,fa(t))ua(t);else{switch(a=rd(W.current),e){case 1:e=a.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=a.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=a.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=a.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":(e=a.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e="string"===typeof r.is?a.createElement("select",{is:r.is}):a.createElement("select"),r.multiple?e.multiple=!0:r.size&&(e.size=r.size);break;default:e="string"===typeof r.is?a.createElement(n,{is:r.is}):a.createElement(n)}}e[Re]=t,e[Ne]=r;e:for(a=t.child;null!==a;){if(5===a.tag||6===a.tag)e.appendChild(a.stateNode);else if(4!==a.tag&&27!==a.tag&&null!==a.child){a.child.return=a,a=a.child;continue}if(a===t)break e;for(;null===a.sibling;){if(null===a.return||a.return===t)break e;a=a.return}a.sibling.return=a.return,a=a.sibling}t.stateNode=e;e:switch(ed(e,n,r),n){case"button":case"input":case"select":case"textarea":e=!!r.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Xl(t)}}return ns(t),t.flags&=-16777217,null;case 6:if(e&&null!=t.stateNode)e.memoizedProps!==r&&Xl(t);else{if("string"!==typeof r&&null===t.stateNode)throw Error(o(166));if(e=W.current,fa(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,null!==(a=ra))switch(a.tag){case 27:case 5:r=a.memoizedProps}e[Re]=t,(e=!!(e.nodeValue===n||null!==r&&!0===r.suppressHydrationWarning||Qu(e.nodeValue,n)))||ca(t)}else(e=rd(e).createTextNode(r))[Re]=t,t.stateNode=e}return ns(t),null;case 13:if(r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(a=fa(t),null!==r&&null!==r.dehydrated){if(null===e){if(!a)throw Error(o(318));if(!(a=null!==(a=t.memoizedState)?a.dehydrated:null))throw Error(o(317));a[Re]=t}else ha(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;ns(t),a=!1}else a=pa(),null!==e&&null!==e.memoizedState&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return 256&t.flags?(cl(t),t):(cl(t),null)}if(cl(t),0!==(128&t.flags))return t.lanes=n,t;if(n=null!==r,e=null!==e&&null!==e.memoizedState,n){a=null,null!==(r=t.child).alternate&&null!==r.alternate.memoizedState&&null!==r.alternate.memoizedState.cachePool&&(a=r.alternate.memoizedState.cachePool.pool);var i=null;null!==r.memoizedState&&null!==r.memoizedState.cachePool&&(i=r.memoizedState.cachePool.pool),i!==a&&(r.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),es(t,t.updateQueue),ns(t),null;case 4:return G(),null===e&&Ou(t.stateNode.containerInfo),ns(t),null;case 10:return xa(t.type),ns(t),null;case 19:if(O(ul),null===(a=t.memoizedState))return ns(t),null;if(r=0!==(128&t.flags),null===(i=a.rendering))if(r)ts(a,!1);else{if(0!==fc||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(i=dl(e))){for(t.flags|=128,ts(a,!1),e=i.updateQueue,t.updateQueue=e,es(t,e),t.subtreeFlags=0,e=n,n=t.child;null!==n;)Br(n,e),n=n.sibling;return $(ul,1&ul.current|2),t.child}e=e.sibling}null!==a.tail&&te()>kc&&(t.flags|=128,r=!0,ts(a,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=dl(i))){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,es(t,e),ts(a,!0),null===a.tail&&"hidden"===a.tailMode&&!i.alternate&&!ia)return ns(t),null}else 2*te()-a.renderingStartTime>kc&&536870912!==n&&(t.flags|=128,r=!0,ts(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(null!==(e=a.last)?e.sibling=i:t.child=i,a.last=i)}return null!==a.tail?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=te(),t.sibling=null,e=ul.current,$(ul,r?1&e|2:1&e),t):(ns(t),null);case 22:case 23:return cl(t),bi(),r=null!==t.memoizedState,null!==e?null!==e.memoizedState!==r&&(t.flags|=8192):r&&(t.flags|=8192),r?0!==(536870912&n)&&0===(128&t.flags)&&(ns(t),6&t.subtreeFlags&&(t.flags|=8192)):ns(t),null!==(n=t.updateQueue)&&es(t,n.retryQueue),n=null,null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),r=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),null!==e&&O($a),null;case 24:return n=null,null!==e&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),xa(Ra),ns(t),null;case 25:case 30:return null}throw Error(o(156,t.tag))}function as(e,t){switch(na(t),t.tag){case 1:return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return xa(Ra),G(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 26:case 27:case 5:return Y(t),null;case 13:if(cl(t),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(o(340));ha()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return O(ul),null;case 4:return G(),null;case 10:return xa(t.type),null;case 22:case 23:return cl(t),bi(),null!==e&&O($a),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 24:return xa(Ra),null;default:return null}}function is(e,t){switch(na(t),t.tag){case 3:xa(Ra),G();break;case 26:case 27:case 5:Y(t);break;case 4:G();break;case 13:cl(t);break;case 19:O(ul);break;case 10:xa(t.type);break;case 22:case 23:cl(t),bi(),null!==e&&O($a);break;case 24:xa(Ra)}}function os(e,t){try{var n=t.updateQueue,r=null!==n?n.lastEffect:null;if(null!==r){var a=r.next;n=a;do{if((n.tag&e)===e){r=void 0;var i=n.create,o=n.inst;r=i(),o.destroy=r}n=n.next}while(n!==a)}}catch(l){uu(t,t.return,l)}}function ls(e,t,n){try{var r=t.updateQueue,a=null!==r?r.lastEffect:null;if(null!==a){var i=a.next;r=i;do{if((r.tag&e)===e){var o=r.inst,l=o.destroy;if(void 0!==l){o.destroy=void 0,a=t;var s=n,c=l;try{c()}catch(u){uu(a,s,u)}}}r=r.next}while(r!==i)}}catch(u){uu(t,t.return,u)}}function ss(e){var t=e.updateQueue;if(null!==t){var n=e.stateNode;try{fi(t,n)}catch(r){uu(e,e.return,r)}}}function cs(e,t,n){n.props=gl(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(r){uu(e,t,r)}}function us(e,t){try{var n=e.ref;if(null!==n){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;default:r=e.stateNode}"function"===typeof n?e.refCleanup=n(r):n.current=r}}catch(a){uu(e,t,a)}}function ds(e,t){var n=e.ref,r=e.refCleanup;if(null!==n)if("function"===typeof r)try{r()}catch(a){uu(e,t,a)}finally{e.refCleanup=null,null!=(e=e.alternate)&&(e.refCleanup=null)}else if("function"===typeof n)try{n(null)}catch(i){uu(e,t,i)}else n.current=null}function fs(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&r.focus();break e;case"img":n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(a){uu(e,e.return,a)}}function hs(e,t,n){try{var r=e.stateNode;!function(e,t,n,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,i=null,l=null,s=null,c=null,u=null,d=null;for(p in n){var f=n[p];if(n.hasOwnProperty(p)&&null!=f)switch(p){case"checked":case"value":break;case"defaultValue":c=f;default:r.hasOwnProperty(p)||Xu(e,t,p,null,r,f)}}for(var h in r){var p=r[h];if(f=n[h],r.hasOwnProperty(h)&&(null!=p||null!=f))switch(h){case"type":i=p;break;case"name":a=p;break;case"checked":u=p;break;case"defaultChecked":d=p;break;case"value":l=p;break;case"defaultValue":s=p;break;case"children":case"dangerouslySetInnerHTML":if(null!=p)throw Error(o(137,t));break;default:p!==f&&Xu(e,t,h,p,r,f)}}return void gt(e,l,s,c,u,d,i,a);case"select":for(i in p=l=s=h=null,n)if(c=n[i],n.hasOwnProperty(i)&&null!=c)switch(i){case"value":break;case"multiple":p=c;default:r.hasOwnProperty(i)||Xu(e,t,i,null,r,c)}for(a in r)if(i=r[a],c=n[a],r.hasOwnProperty(a)&&(null!=i||null!=c))switch(a){case"value":h=i;break;case"defaultValue":s=i;break;case"multiple":l=i;default:i!==c&&Xu(e,t,a,i,r,c)}return t=s,n=l,r=p,void(null!=h?yt(e,!!n,h,!1):!!r!==!!n&&(null!=t?yt(e,!!n,t,!0):yt(e,!!n,n?[]:"",!1)));case"textarea":for(s in p=h=null,n)if(a=n[s],n.hasOwnProperty(s)&&null!=a&&!r.hasOwnProperty(s))switch(s){case"value":case"children":break;default:Xu(e,t,s,null,r,a)}for(l in r)if(a=r[l],i=n[l],r.hasOwnProperty(l)&&(null!=a||null!=i))switch(l){case"value":h=a;break;case"defaultValue":p=a;break;case"children":break;case"dangerouslySetInnerHTML":if(null!=a)throw Error(o(91));break;default:a!==i&&Xu(e,t,l,a,r,i)}return void xt(e,h,p);case"option":for(var m in n)if(h=n[m],n.hasOwnProperty(m)&&null!=h&&!r.hasOwnProperty(m))if("selected"===m)e.selected=!1;else Xu(e,t,m,null,r,h);for(c in r)if(h=r[c],p=n[c],r.hasOwnProperty(c)&&h!==p&&(null!=h||null!=p))if("selected"===c)e.selected=h&&"function"!==typeof h&&"symbol"!==typeof h;else Xu(e,t,c,h,r,p);return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var g in n)h=n[g],n.hasOwnProperty(g)&&null!=h&&!r.hasOwnProperty(g)&&Xu(e,t,g,null,r,h);for(u in r)if(h=r[u],p=n[u],r.hasOwnProperty(u)&&h!==p&&(null!=h||null!=p))switch(u){case"children":case"dangerouslySetInnerHTML":if(null!=h)throw Error(o(137,t));break;default:Xu(e,t,u,h,r,p)}return;default:if(Ct(t)){for(var b in n)h=n[b],n.hasOwnProperty(b)&&void 0!==h&&!r.hasOwnProperty(b)&&Zu(e,t,b,void 0,r,h);for(d in r)h=r[d],p=n[d],!r.hasOwnProperty(d)||h===p||void 0===h&&void 0===p||Zu(e,t,d,h,r,p);return}}for(var v in n)h=n[v],n.hasOwnProperty(v)&&null!=h&&!r.hasOwnProperty(v)&&Xu(e,t,v,null,r,h);for(f in r)h=r[f],p=n[f],!r.hasOwnProperty(f)||h===p||null==h&&null==p||Xu(e,t,f,h,r,p)}(r,e.type,n,t),r[Ne]=t}catch(a){uu(e,e.return,a)}}function ps(e){return 5===e.tag||3===e.tag||26===e.tag||27===e.tag&&hd(e.type)||4===e.tag}function ms(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||ps(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(27===e.tag&&hd(e.type))continue e;if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function gs(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?(9===n.nodeType?n.body:"HTML"===n.nodeName?n.ownerDocument.body:n).insertBefore(e,t):((t=9===n.nodeType?n.body:"HTML"===n.nodeName?n.ownerDocument.body:n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Ju));else if(4!==r&&(27===r&&hd(e.type)&&(n=e.stateNode,t=null),null!==(e=e.child)))for(gs(e,t,n),e=e.sibling;null!==e;)gs(e,t,n),e=e.sibling}function bs(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&(27===r&&hd(e.type)&&(n=e.stateNode),null!==(e=e.child)))for(bs(e,t,n),e=e.sibling;null!==e;)bs(e,t,n),e=e.sibling}function vs(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);ed(t,r,n),t[Re]=e,t[Ne]=n}catch(i){uu(e,e.return,i)}}var ys=!1,xs=!1,ws=!1,ks="function"===typeof WeakSet?WeakSet:Set,js=null;function Ss(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Is(e,n),4&r&&os(5,n);break;case 1:if(Is(e,n),4&r)if(e=n.stateNode,null===t)try{e.componentDidMount()}catch(o){uu(n,n.return,o)}else{var a=gl(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(l){uu(n,n.return,l)}}64&r&&ss(n),512&r&&us(n,n.return);break;case 3:if(Is(e,n),64&r&&null!==(e=n.updateQueue)){if(t=null,null!==n.child)switch(n.child.tag){case 27:case 5:case 1:t=n.child.stateNode}try{fi(e,t)}catch(o){uu(n,n.return,o)}}break;case 27:null===t&&4&r&&vs(n);case 26:case 5:Is(e,n),null===t&&4&r&&fs(n),512&r&&us(n,n.return);break;case 12:Is(e,n);break;case 13:Is(e,n),4&r&&Ms(e,n),64&r&&(null!==(e=n.memoizedState)&&(null!==(e=e.dehydrated)&&function(e,t){var n=e.ownerDocument;if("$?"!==e.data||"complete"===n.readyState)t();else{var r=function(){t(),n.removeEventListener("DOMContentLoaded",r)};n.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}(e,n=pu.bind(null,n))));break;case 22:if(!(r=null!==n.memoizedState||ys)){t=null!==t&&null!==t.memoizedState||xs,a=ys;var i=xs;ys=r,(xs=t)&&!i?Bs(e,n,0!==(8772&n.subtreeFlags)):Is(e,n),ys=a,xs=i}break;case 30:break;default:Is(e,n)}}function Es(e){var t=e.alternate;null!==t&&(e.alternate=null,Es(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&Oe(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Cs=null,As=!1;function zs(e,t,n){for(n=n.child;null!==n;)Ts(e,t,n),n=n.sibling}function Ts(e,t,n){if(de&&"function"===typeof de.onCommitFiberUnmount)try{de.onCommitFiberUnmount(ue,n)}catch(i){}switch(n.tag){case 26:xs||ds(n,t),zs(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode).parentNode.removeChild(n);break;case 27:xs||ds(n,t);var r=Cs,a=As;hd(n.type)&&(Cs=n.stateNode,As=!1),zs(e,t,n),wd(n.stateNode),Cs=r,As=a;break;case 5:xs||ds(n,t);case 6:if(r=Cs,a=As,Cs=null,zs(e,t,n),As=a,null!==(Cs=r))if(As)try{(9===Cs.nodeType?Cs.body:"HTML"===Cs.nodeName?Cs.ownerDocument.body:Cs).removeChild(n.stateNode)}catch(o){uu(n,t,o)}else try{Cs.removeChild(n.stateNode)}catch(o){uu(n,t,o)}break;case 18:null!==Cs&&(As?(pd(9===(e=Cs).nodeType?e.body:"HTML"===e.nodeName?e.ownerDocument.body:e,n.stateNode),zf(e)):pd(Cs,n.stateNode));break;case 4:r=Cs,a=As,Cs=n.stateNode.containerInfo,As=!0,zs(e,t,n),Cs=r,As=a;break;case 0:case 11:case 14:case 15:xs||ls(2,n,t),xs||ls(4,n,t),zs(e,t,n);break;case 1:xs||(ds(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount&&cs(n,t,r)),zs(e,t,n);break;case 21:zs(e,t,n);break;case 22:xs=(r=xs)||null!==n.memoizedState,zs(e,t,n),xs=r;break;default:zs(e,t,n)}}function Ms(e,t){if(null===t.memoizedState&&(null!==(e=t.alternate)&&(null!==(e=e.memoizedState)&&null!==(e=e.dehydrated))))try{zf(e)}catch(n){uu(t,t.return,n)}}function Ps(e,t){var n=function(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return null===t&&(t=e.stateNode=new ks),t;case 22:return null===(t=(e=e.stateNode)._retryCache)&&(t=e._retryCache=new ks),t;default:throw Error(o(435,e.tag))}}(e);t.forEach(function(t){var r=mu.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}function Rs(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var a=n[r],i=e,l=t,s=l;e:for(;null!==s;){switch(s.tag){case 27:if(hd(s.type)){Cs=s.stateNode,As=!1;break e}break;case 5:Cs=s.stateNode,As=!1;break e;case 3:case 4:Cs=s.stateNode.containerInfo,As=!0;break e}s=s.return}if(null===Cs)throw Error(o(160));Ts(i,l,a),Cs=null,As=!1,null!==(i=a.alternate)&&(i.return=null),a.return=null}if(13878&t.subtreeFlags)for(t=t.child;null!==t;)_s(t,e),t=t.sibling}var Ns=null;function _s(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Rs(t,e),Ls(e),4&r&&(ls(3,e,e.return),os(3,e),ls(5,e,e.return));break;case 1:Rs(t,e),Ls(e),512&r&&(xs||null===n||ds(n,n.return)),64&r&&ys&&(null!==(e=e.updateQueue)&&(null!==(r=e.callbacks)&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=null===n?r:n.concat(r))));break;case 26:var a=Ns;if(Rs(t,e),Ls(e),512&r&&(xs||null===n||ds(n,n.return)),4&r){var i=null!==n?n.memoizedState:null;if(r=e.memoizedState,null===n)if(null===r)if(null===e.stateNode){e:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;t:switch(r){case"title":(!(i=a.getElementsByTagName("title")[0])||i[Be]||i[Re]||"http://www.w3.org/2000/svg"===i.namespaceURI||i.hasAttribute("itemprop"))&&(i=a.createElement(r),a.head.insertBefore(i,a.querySelector("head > title"))),ed(i,r,n),i[Re]=e,Ve(i),r=i;break e;case"link":var l=Bd("link","href",a).get(r+(n.href||""));if(l)for(var s=0;s<l.length;s++)if((i=l[s]).getAttribute("href")===(null==n.href||""===n.href?null:n.href)&&i.getAttribute("rel")===(null==n.rel?null:n.rel)&&i.getAttribute("title")===(null==n.title?null:n.title)&&i.getAttribute("crossorigin")===(null==n.crossOrigin?null:n.crossOrigin)){l.splice(s,1);break t}ed(i=a.createElement(r),r,n),a.head.appendChild(i);break;case"meta":if(l=Bd("meta","content",a).get(r+(n.content||"")))for(s=0;s<l.length;s++)if((i=l[s]).getAttribute("content")===(null==n.content?null:""+n.content)&&i.getAttribute("name")===(null==n.name?null:n.name)&&i.getAttribute("property")===(null==n.property?null:n.property)&&i.getAttribute("http-equiv")===(null==n.httpEquiv?null:n.httpEquiv)&&i.getAttribute("charset")===(null==n.charSet?null:n.charSet)){l.splice(s,1);break t}ed(i=a.createElement(r),r,n),a.head.appendChild(i);break;default:throw Error(o(468,r))}i[Re]=e,Ve(i),r=i}e.stateNode=r}else Od(a,e.type,e.stateNode);else e.stateNode=_d(a,r,e.memoizedProps);else i!==r?(null===i?null!==n.stateNode&&(n=n.stateNode).parentNode.removeChild(n):i.count--,null===r?Od(a,e.type,e.stateNode):_d(a,r,e.memoizedProps)):null===r&&null!==e.stateNode&&hs(e,e.memoizedProps,n.memoizedProps)}break;case 27:Rs(t,e),Ls(e),512&r&&(xs||null===n||ds(n,n.return)),null!==n&&4&r&&hs(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Rs(t,e),Ls(e),512&r&&(xs||null===n||ds(n,n.return)),32&e.flags){a=e.stateNode;try{kt(a,"")}catch(p){uu(e,e.return,p)}}4&r&&null!=e.stateNode&&hs(e,a=e.memoizedProps,null!==n?n.memoizedProps:a),1024&r&&(ws=!0);break;case 6:if(Rs(t,e),Ls(e),4&r){if(null===e.stateNode)throw Error(o(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(p){uu(e,e.return,p)}}break;case 3:if(Fd=null,a=Ns,Ns=Sd(t.containerInfo),Rs(t,e),Ns=a,Ls(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{zf(t.containerInfo)}catch(p){uu(e,e.return,p)}ws&&(ws=!1,Ds(e));break;case 4:r=Ns,Ns=Sd(e.stateNode.containerInfo),Rs(t,e),Ls(e),Ns=r;break;case 12:default:Rs(t,e),Ls(e);break;case 13:Rs(t,e),Ls(e),8192&e.child.flags&&null!==e.memoizedState!==(null!==n&&null!==n.memoizedState)&&(wc=te()),4&r&&(null!==(r=e.updateQueue)&&(e.updateQueue=null,Ps(e,r)));break;case 22:a=null!==e.memoizedState;var c=null!==n&&null!==n.memoizedState,u=ys,d=xs;if(ys=u||a,xs=d||c,Rs(t,e),xs=d,ys=u,Ls(e),8192&r)e:for(t=e.stateNode,t._visibility=a?-2&t._visibility:1|t._visibility,a&&(null===n||c||ys||xs||Fs(e)),n=null,t=e;;){if(5===t.tag||26===t.tag){if(null===n){c=n=t;try{if(i=c.stateNode,a)"function"===typeof(l=i.style).setProperty?l.setProperty("display","none","important"):l.display="none";else{s=c.stateNode;var f=c.memoizedProps.style,h=void 0!==f&&null!==f&&f.hasOwnProperty("display")?f.display:null;s.style.display=null==h||"boolean"===typeof h?"":(""+h).trim()}}catch(p){uu(c,c.return,p)}}}else if(6===t.tag){if(null===n){c=t;try{c.stateNode.nodeValue=a?"":c.memoizedProps}catch(p){uu(c,c.return,p)}}}else if((22!==t.tag&&23!==t.tag||null===t.memoizedState||t===e)&&null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;null===t.sibling;){if(null===t.return||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}4&r&&(null!==(r=e.updateQueue)&&(null!==(n=r.retryQueue)&&(r.retryQueue=null,Ps(e,n))));break;case 19:Rs(t,e),Ls(e),4&r&&(null!==(r=e.updateQueue)&&(e.updateQueue=null,Ps(e,r)));case 30:case 21:}}function Ls(e){var t=e.flags;if(2&t){try{for(var n,r=e.return;null!==r;){if(ps(r)){n=r;break}r=r.return}if(null==n)throw Error(o(160));switch(n.tag){case 27:var a=n.stateNode;bs(e,ms(e),a);break;case 5:var i=n.stateNode;32&n.flags&&(kt(i,""),n.flags&=-33),bs(e,ms(e),i);break;case 3:case 4:var l=n.stateNode.containerInfo;gs(e,ms(e),l);break;default:throw Error(o(161))}}catch(s){uu(e,e.return,s)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function Ds(e){if(1024&e.subtreeFlags)for(e=e.child;null!==e;){var t=e;Ds(t),5===t.tag&&1024&t.flags&&t.stateNode.reset(),e=e.sibling}}function Is(e,t){if(8772&t.subtreeFlags)for(t=t.child;null!==t;)Ss(e,t.alternate,t),t=t.sibling}function Fs(e){for(e=e.child;null!==e;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ls(4,t,t.return),Fs(t);break;case 1:ds(t,t.return);var n=t.stateNode;"function"===typeof n.componentWillUnmount&&cs(t,t.return,n),Fs(t);break;case 27:wd(t.stateNode);case 26:case 5:ds(t,t.return),Fs(t);break;case 22:null===t.memoizedState&&Fs(t);break;default:Fs(t)}e=e.sibling}}function Bs(e,t,n){for(n=n&&0!==(8772&t.subtreeFlags),t=t.child;null!==t;){var r=t.alternate,a=e,i=t,o=i.flags;switch(i.tag){case 0:case 11:case 15:Bs(a,i,n),os(4,i);break;case 1:if(Bs(a,i,n),"function"===typeof(a=(r=i).stateNode).componentDidMount)try{a.componentDidMount()}catch(c){uu(r,r.return,c)}if(null!==(a=(r=i).updateQueue)){var l=r.stateNode;try{var s=a.shared.hiddenCallbacks;if(null!==s)for(a.shared.hiddenCallbacks=null,a=0;a<s.length;a++)di(s[a],l)}catch(c){uu(r,r.return,c)}}n&&64&o&&ss(i),us(i,i.return);break;case 27:vs(i);case 26:case 5:Bs(a,i,n),n&&null===r&&4&o&&fs(i),us(i,i.return);break;case 12:Bs(a,i,n);break;case 13:Bs(a,i,n),n&&4&o&&Ms(a,i);break;case 22:null===i.memoizedState&&Bs(a,i,n),us(i,i.return);break;case 30:break;default:Bs(a,i,n)}t=t.sibling}}function Os(e,t){var n=null;null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),e=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(e=t.memoizedState.cachePool.pool),e!==n&&(null!=e&&e.refCount++,null!=n&&_a(n))}function $s(e,t){e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&_a(e))}function Us(e,t,n,r){if(10256&t.subtreeFlags)for(t=t.child;null!==t;)Hs(e,t,n,r),t=t.sibling}function Hs(e,t,n,r){var a=t.flags;switch(t.tag){case 0:case 11:case 15:Us(e,t,n,r),2048&a&&os(9,t);break;case 1:case 13:default:Us(e,t,n,r);break;case 3:Us(e,t,n,r),2048&a&&(e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&_a(e)));break;case 12:if(2048&a){Us(e,t,n,r),e=t.stateNode;try{var i=t.memoizedProps,o=i.id,l=i.onPostCommit;"function"===typeof l&&l(o,null===t.alternate?"mount":"update",e.passiveEffectDuration,-0)}catch(s){uu(t,t.return,s)}}else Us(e,t,n,r);break;case 23:break;case 22:i=t.stateNode,o=t.alternate,null!==t.memoizedState?2&i._visibility?Us(e,t,n,r):Vs(e,t):2&i._visibility?Us(e,t,n,r):(i._visibility|=2,Ws(e,t,n,r,0!==(10256&t.subtreeFlags))),2048&a&&Os(o,t);break;case 24:Us(e,t,n,r),2048&a&&$s(t.alternate,t)}}function Ws(e,t,n,r,a){for(a=a&&0!==(10256&t.subtreeFlags),t=t.child;null!==t;){var i=e,o=t,l=n,s=r,c=o.flags;switch(o.tag){case 0:case 11:case 15:Ws(i,o,l,s,a),os(8,o);break;case 23:break;case 22:var u=o.stateNode;null!==o.memoizedState?2&u._visibility?Ws(i,o,l,s,a):Vs(i,o):(u._visibility|=2,Ws(i,o,l,s,a)),a&&2048&c&&Os(o.alternate,o);break;case 24:Ws(i,o,l,s,a),a&&2048&c&&$s(o.alternate,o);break;default:Ws(i,o,l,s,a)}t=t.sibling}}function Vs(e,t){if(10256&t.subtreeFlags)for(t=t.child;null!==t;){var n=e,r=t,a=r.flags;switch(r.tag){case 22:Vs(n,r),2048&a&&Os(r.alternate,r);break;case 24:Vs(n,r),2048&a&&$s(r.alternate,r);break;default:Vs(n,r)}t=t.sibling}}var qs=8192;function Gs(e){if(e.subtreeFlags&qs)for(e=e.child;null!==e;)Ks(e),e=e.sibling}function Ks(e){switch(e.tag){case 26:Gs(e),e.flags&qs&&null!==e.memoizedState&&function(e,t,n){if(null===Ud)throw Error(o(475));var r=Ud;if("stylesheet"===t.type&&("string"!==typeof n.media||!1!==matchMedia(n.media).matches)&&0===(4&t.state.loading)){if(null===t.instance){var a=Td(n.href),i=e.querySelector(Md(a));if(i)return null!==(e=i._p)&&"object"===typeof e&&"function"===typeof e.then&&(r.count++,r=Wd.bind(r),e.then(r,r)),t.state.loading|=4,t.instance=i,void Ve(i);i=e.ownerDocument||e,n=Pd(n),(a=kd.get(a))&&Dd(n,a),Ve(i=i.createElement("link"));var l=i;l._p=new Promise(function(e,t){l.onload=e,l.onerror=t}),ed(i,"link",n),t.instance=i}null===r.stylesheets&&(r.stylesheets=new Map),r.stylesheets.set(t,e),(e=t.state.preload)&&0===(3&t.state.loading)&&(r.count++,t=Wd.bind(r),e.addEventListener("load",t),e.addEventListener("error",t))}}(Ns,e.memoizedState,e.memoizedProps);break;case 5:default:Gs(e);break;case 3:case 4:var t=Ns;Ns=Sd(e.stateNode.containerInfo),Gs(e),Ns=t;break;case 22:null===e.memoizedState&&(null!==(t=e.alternate)&&null!==t.memoizedState?(t=qs,qs=16777216,Gs(e),qs=t):Gs(e))}}function Ys(e){var t=e.alternate;if(null!==t&&null!==(e=t.child)){t.child=null;do{t=e.sibling,e.sibling=null,e=t}while(null!==e)}}function Qs(e){var t=e.deletions;if(0!==(16&e.flags)){if(null!==t)for(var n=0;n<t.length;n++){var r=t[n];js=r,Zs(r,e)}Ys(e)}if(10256&e.subtreeFlags)for(e=e.child;null!==e;)Js(e),e=e.sibling}function Js(e){switch(e.tag){case 0:case 11:case 15:Qs(e),2048&e.flags&&ls(9,e,e.return);break;case 3:case 12:default:Qs(e);break;case 22:var t=e.stateNode;null!==e.memoizedState&&2&t._visibility&&(null===e.return||13!==e.return.tag)?(t._visibility&=-3,Xs(e)):Qs(e)}}function Xs(e){var t=e.deletions;if(0!==(16&e.flags)){if(null!==t)for(var n=0;n<t.length;n++){var r=t[n];js=r,Zs(r,e)}Ys(e)}for(e=e.child;null!==e;){switch((t=e).tag){case 0:case 11:case 15:ls(8,t,t.return),Xs(t);break;case 22:2&(n=t.stateNode)._visibility&&(n._visibility&=-3,Xs(t));break;default:Xs(t)}e=e.sibling}}function Zs(e,t){for(;null!==js;){var n=js;switch(n.tag){case 0:case 11:case 15:ls(8,n,t);break;case 23:case 22:if(null!==n.memoizedState&&null!==n.memoizedState.cachePool){var r=n.memoizedState.cachePool.pool;null!=r&&r.refCount++}break;case 24:_a(n.memoizedState.cache)}if(null!==(r=n.child))r.return=n,js=r;else e:for(n=e;null!==js;){var a=(r=js).sibling,i=r.return;if(Es(r),r===n){js=null;break e}if(null!==a){a.return=i,js=a;break e}js=i}}}var ec={getCacheForType:function(e){var t=Ca(Ra),n=t.data.get(e);return void 0===n&&(n=e(),t.data.set(e,n)),n}},tc="function"===typeof WeakMap?WeakMap:Map,nc=0,rc=null,ac=null,ic=0,oc=0,lc=null,sc=!1,cc=!1,uc=!1,dc=0,fc=0,hc=0,pc=0,mc=0,gc=0,bc=0,vc=null,yc=null,xc=!1,wc=0,kc=1/0,jc=null,Sc=null,Ec=0,Cc=null,Ac=null,zc=0,Tc=0,Mc=null,Pc=null,Rc=0,Nc=null;function _c(){if(0!==(2&nc)&&0!==ic)return ic&-ic;if(null!==_.T){return 0!==Ia?Ia:Tu()}return Me()}function Lc(){0===gc&&(gc=0===(536870912&ic)||ia?ke():536870912);var e=al.current;return null!==e&&(e.flags|=32),gc}function Dc(e,t,n){(e!==rc||2!==oc&&9!==oc)&&null===e.cancelPendingCommit||(Hc(e,0),Oc(e,ic,gc,!1)),Ee(e,n),0!==(2&nc)&&e===rc||(e===rc&&(0===(2&nc)&&(pc|=n),4===fc&&Oc(e,ic,gc,!1)),ku(e))}function Ic(e,t,n){if(0!==(6&nc))throw Error(o(327));for(var r=!n&&0===(124&t)&&0===(t&e.expiredLanes)||xe(e,t),a=r?function(e,t){var n=nc;nc|=2;var r=Vc(),a=qc();rc!==e||ic!==t?(jc=null,kc=te()+500,Hc(e,t)):cc=xe(e,t);e:for(;;)try{if(0!==oc&&null!==ac){t=ac;var i=lc;t:switch(oc){case 1:oc=0,lc=null,Zc(e,t,i,1);break;case 2:case 9:if(Ya(i)){oc=0,lc=null,Xc(t);break}t=function(){2!==oc&&9!==oc||rc!==e||(oc=7),ku(e)},i.then(t,t);break e;case 3:oc=7;break e;case 4:oc=5;break e;case 7:Ya(i)?(oc=0,lc=null,Xc(t)):(oc=0,lc=null,Zc(e,t,i,7));break;case 5:var l=null;switch(ac.tag){case 26:l=ac.memoizedState;case 5:case 27:var s=ac;if(!l||$d(l)){oc=0,lc=null;var c=s.sibling;if(null!==c)ac=c;else{var u=s.return;null!==u?(ac=u,eu(u)):ac=null}break t}}oc=0,lc=null,Zc(e,t,i,5);break;case 6:oc=0,lc=null,Zc(e,t,i,6);break;case 8:Uc(),fc=6;break e;default:throw Error(o(462))}}Qc();break}catch(d){Wc(e,d)}return va=ba=null,_.H=r,_.A=a,nc=n,null!==ac?0:(rc=null,ic=0,zr(),fc)}(e,t):Kc(e,t,!0),i=r;;){if(0===a){cc&&!r&&Oc(e,t,0,!1);break}if(n=e.current.alternate,!i||Bc(n)){if(2===a){if(i=t,e.errorRecoveryDisabledLanes&i)var l=0;else l=0!==(l=-536870913&e.pendingLanes)?l:536870912&l?536870912:0;if(0!==l){t=l;e:{var s=e;a=vc;var c=s.current.memoizedState.isDehydrated;if(c&&(Hc(s,l).flags|=256),2!==(l=Kc(s,l,!1))){if(uc&&!c){s.errorRecoveryDisabledLanes|=i,pc|=i,a=4;break e}i=yc,yc=a,null!==i&&(null===yc?yc=i:yc.push.apply(yc,i))}a=l}if(i=!1,2!==a)continue}}if(1===a){Hc(e,0),Oc(e,t,0,!0);break}e:{switch(r=e,i=a){case 0:case 1:throw Error(o(345));case 4:if((4194048&t)!==t)break;case 6:Oc(r,t,gc,!sc);break e;case 2:yc=null;break;case 3:case 5:break;default:throw Error(o(329))}if((62914560&t)===t&&10<(a=wc+300-te())){if(Oc(r,t,gc,!sc),0!==ye(r,0,!0))break e;r.timeoutHandle=sd(Fc.bind(null,r,n,yc,jc,xc,t,gc,pc,bc,sc,i,2,-0,0),a)}else Fc(r,n,yc,jc,xc,t,gc,pc,bc,sc,i,0,-0,0)}break}a=Kc(e,t,!1),i=!1}ku(e)}function Fc(e,t,n,r,a,i,l,s,c,u,d,f,h,p){if(e.timeoutHandle=-1,(8192&(f=t.subtreeFlags)||16785408===(16785408&f))&&(Ud={stylesheets:null,count:0,unsuspend:Hd},Ks(t),null!==(f=function(){if(null===Ud)throw Error(o(475));var e=Ud;return e.stylesheets&&0===e.count&&qd(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&qd(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}())))return e.cancelPendingCommit=f(nu.bind(null,e,t,i,n,r,a,l,s,c,d,1,h,p)),void Oc(e,i,l,!u);nu(e,t,i,n,r,a,l,s,c)}function Bc(e){for(var t=e;;){var n=t.tag;if((0===n||11===n||15===n)&&16384&t.flags&&(null!==(n=t.updateQueue)&&null!==(n=n.stores)))for(var r=0;r<n.length;r++){var a=n[r],i=a.getSnapshot;a=a.value;try{if(!Yn(i(),a))return!1}catch(o){return!1}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Oc(e,t,n,r){t&=~mc,t&=~pc,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var a=t;0<a;){var i=31-he(a),o=1<<i;r[i]=-1,a&=~o}0!==n&&Ce(e,n,t)}function $c(){return 0!==(6&nc)||(ju(0,!1),!1)}function Uc(){if(null!==ac){if(0===oc)var e=ac.return;else va=ba=null,Ii(e=ac),Yo=null,Qo=0,e=ac;for(;null!==e;)is(e.alternate,e),e=e.return;ac=null}}function Hc(e,t){var n=e.timeoutHandle;-1!==n&&(e.timeoutHandle=-1,cd(n)),null!==(n=e.cancelPendingCommit)&&(e.cancelPendingCommit=null,n()),Uc(),rc=e,ac=n=Fr(e.current,null),ic=t,oc=0,lc=null,sc=!1,cc=xe(e,t),uc=!1,bc=gc=mc=pc=hc=fc=0,yc=vc=null,xc=!1,0!==(8&t)&&(t|=32&t);var r=e.entangledLanes;if(0!==r)for(e=e.entanglements,r&=t;0<r;){var a=31-he(r),i=1<<a;t|=e[a],r&=~i}return dc=t,zr(),n}function Wc(e,t){yi=null,_.H=Vo,t===Va||t===Ga?(t=Za(),oc=3):t===qa?(t=Za(),oc=4):oc=t===Cl?8:null!==t&&"object"===typeof t&&"function"===typeof t.then?6:1,lc=t,null===ac&&(fc=1,wl(e,Sr(t,e.current)))}function Vc(){var e=_.H;return _.H=Vo,null===e?Vo:e}function qc(){var e=_.A;return _.A=ec,e}function Gc(){fc=4,sc||(4194048&ic)!==ic&&null!==al.current||(cc=!0),0===(134217727&hc)&&0===(134217727&pc)||null===rc||Oc(rc,ic,gc,!1)}function Kc(e,t,n){var r=nc;nc|=2;var a=Vc(),i=qc();rc===e&&ic===t||(jc=null,Hc(e,t)),t=!1;var o=fc;e:for(;;)try{if(0!==oc&&null!==ac){var l=ac,s=lc;switch(oc){case 8:Uc(),o=6;break e;case 3:case 2:case 9:case 6:null===al.current&&(t=!0);var c=oc;if(oc=0,lc=null,Zc(e,l,s,c),n&&cc){o=0;break e}break;default:c=oc,oc=0,lc=null,Zc(e,l,s,c)}}Yc(),o=fc;break}catch(u){Wc(e,u)}return t&&e.shellSuspendCounter++,va=ba=null,nc=r,_.H=a,_.A=i,null===ac&&(rc=null,ic=0,zr()),o}function Yc(){for(;null!==ac;)Jc(ac)}function Qc(){for(;null!==ac&&!Z();)Jc(ac)}function Jc(e){var t=Jl(e.alternate,e,dc);e.memoizedProps=e.pendingProps,null===t?eu(e):ac=t}function Xc(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Dl(n,t,t.pendingProps,t.type,void 0,ic);break;case 11:t=Dl(n,t,t.pendingProps,t.type.render,t.ref,ic);break;case 5:Ii(t);default:is(n,t),t=Jl(n,t=ac=Br(t,dc),dc)}e.memoizedProps=e.pendingProps,null===t?eu(e):ac=t}function Zc(e,t,n,r){va=ba=null,Ii(t),Yo=null,Qo=0;var a=t.return;try{if(function(e,t,n,r,a){if(n.flags|=32768,null!==r&&"object"===typeof r&&"function"===typeof r.then){if(null!==(t=n.alternate)&&ja(t,n,a,!0),null!==(n=al.current)){switch(n.tag){case 13:return null===il?Gc():null===n.alternate&&0===fc&&(fc=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===Ka?n.flags|=16384:(null===(t=n.updateQueue)?n.updateQueue=new Set([r]):t.add(r),du(e,r,a)),!1;case 22:return n.flags|=65536,r===Ka?n.flags|=16384:(null===(t=n.updateQueue)?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):null===(n=t.retryQueue)?t.retryQueue=new Set([r]):n.add(r),du(e,r,a)),!1}throw Error(o(435,n.tag))}return du(e,r,a),Gc(),!1}if(ia)return null!==(t=al.current)?(0===(65536&t.flags)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==sa&&ma(Sr(e=Error(o(422),{cause:r}),n))):(r!==sa&&ma(Sr(t=Error(o(423),{cause:r}),n)),(e=e.current.alternate).flags|=65536,a&=-a,e.lanes|=a,r=Sr(r,n),li(e,a=jl(e.stateNode,r,a)),4!==fc&&(fc=2)),!1;var i=Error(o(520),{cause:r});if(i=Sr(i,n),null===vc?vc=[i]:vc.push(i),4!==fc&&(fc=2),null===t)return!0;r=Sr(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,li(n,e=jl(n.stateNode,r,e)),!1;case 1:if(t=n.type,i=n.stateNode,0===(128&n.flags)&&("function"===typeof t.getDerivedStateFromError||null!==i&&"function"===typeof i.componentDidCatch&&(null===Sc||!Sc.has(i))))return n.flags|=65536,a&=-a,n.lanes|=a,El(a=Sl(a),e,n,r),li(n,a),!1}n=n.return}while(null!==n);return!1}(e,a,t,n,ic))return fc=1,wl(e,Sr(n,e.current)),void(ac=null)}catch(i){if(null!==a)throw ac=a,i;return fc=1,wl(e,Sr(n,e.current)),void(ac=null)}32768&t.flags?(ia||1===r?e=!0:cc||0!==(536870912&ic)?e=!1:(sc=e=!0,(2===r||9===r||3===r||6===r)&&(null!==(r=al.current)&&13===r.tag&&(r.flags|=16384))),tu(t,e)):eu(t)}function eu(e){var t=e;do{if(0!==(32768&t.flags))return void tu(t,sc);e=t.return;var n=rs(t.alternate,t,dc);if(null!==n)return void(ac=n);if(null!==(t=t.sibling))return void(ac=t);ac=t=e}while(null!==t);0===fc&&(fc=5)}function tu(e,t){do{var n=as(e.alternate,e);if(null!==n)return n.flags&=32767,void(ac=n);if(null!==(n=e.return)&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&null!==(e=e.sibling))return void(ac=e);ac=e=n}while(null!==e);fc=6,ac=null}function nu(e,t,n,r,a,i,l,s,c){e.cancelPendingCommit=null;do{lu()}while(0!==Ec);if(0!==(6&nc))throw Error(o(327));if(null!==t){if(t===e.current)throw Error(o(177));if(i=t.lanes|t.childLanes,function(e,t,n,r,a,i){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var l=e.entanglements,s=e.expirationTimes,c=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-he(n),d=1<<u;l[u]=0,s[u]=-1;var f=c[u];if(null!==f)for(c[u]=null,u=0;u<f.length;u++){var h=f[u];null!==h&&(h.lane&=-536870913)}n&=~d}0!==r&&Ce(e,r,0),0!==i&&0===a&&0!==e.tag&&(e.suspendedLanes|=i&~(o&~t))}(e,n,i|=Ar,l,s,c),e===rc&&(ac=rc=null,ic=0),Ac=t,Cc=e,zc=n,Tc=i,Mc=a,Pc=r,0!==(10256&t.subtreeFlags)||0!==(10256&t.flags)?(e.callbackNode=null,e.callbackPriority=0,J(ie,function(){return su(),null})):(e.callbackNode=null,e.callbackPriority=0),r=0!==(13878&t.flags),0!==(13878&t.subtreeFlags)||r){r=_.T,_.T=null,a=L.p,L.p=2,l=nc,nc|=4;try{!function(e,t){if(e=e.containerInfo,td=nf,tr(e=er(e))){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var a=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch(g){n=null;break e}var l=0,s=-1,c=-1,u=0,d=0,f=e,h=null;t:for(;;){for(var p;f!==n||0!==a&&3!==f.nodeType||(s=l+a),f!==i||0!==r&&3!==f.nodeType||(c=l+r),3===f.nodeType&&(l+=f.nodeValue.length),null!==(p=f.firstChild);)h=f,f=p;for(;;){if(f===e)break t;if(h===n&&++u===a&&(s=l),h===i&&++d===r&&(c=l),null!==(p=f.nextSibling))break;h=(f=h).parentNode}f=p}n=-1===s||-1===c?null:{start:s,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(nd={focusedElem:e,selectionRange:n},nf=!1,js=t;null!==js;)if(e=(t=js).child,0!==(1024&t.subtreeFlags)&&null!==e)e.return=t,js=e;else for(;null!==js;){switch(i=(t=js).alternate,e=t.flags,t.tag){case 0:case 11:case 15:case 5:case 26:case 27:case 6:case 4:case 17:break;case 1:if(0!==(1024&e)&&null!==i){e=void 0,n=t,a=i.memoizedProps,i=i.memoizedState,r=n.stateNode;try{var m=gl(n.type,a,(n.elementType,n.type));e=r.getSnapshotBeforeUpdate(m,i),r.__reactInternalSnapshotBeforeUpdate=e}catch(b){uu(n,n.return,b)}}break;case 3:if(0!==(1024&e))if(9===(n=(e=t.stateNode.containerInfo).nodeType))md(e);else if(1===n)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":md(e);break;default:e.textContent=""}break;default:if(0!==(1024&e))throw Error(o(163))}if(null!==(e=t.sibling)){e.return=t.return,js=e;break}js=t.return}}(e,t)}finally{nc=l,L.p=a,_.T=r}}Ec=1,ru(),au(),iu()}}function ru(){if(1===Ec){Ec=0;var e=Cc,t=Ac,n=0!==(13878&t.flags);if(0!==(13878&t.subtreeFlags)||n){n=_.T,_.T=null;var r=L.p;L.p=2;var a=nc;nc|=4;try{_s(t,e);var i=nd,o=er(e.containerInfo),l=i.focusedElem,s=i.selectionRange;if(o!==l&&l&&l.ownerDocument&&Zn(l.ownerDocument.documentElement,l)){if(null!==s&&tr(l)){var c=s.start,u=s.end;if(void 0===u&&(u=c),"selectionStart"in l)l.selectionStart=c,l.selectionEnd=Math.min(u,l.value.length);else{var d=l.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var h=f.getSelection(),p=l.textContent.length,m=Math.min(s.start,p),g=void 0===s.end?m:Math.min(s.end,p);!h.extend&&m>g&&(o=g,g=m,m=o);var b=Xn(l,m),v=Xn(l,g);if(b&&v&&(1!==h.rangeCount||h.anchorNode!==b.node||h.anchorOffset!==b.offset||h.focusNode!==v.node||h.focusOffset!==v.offset)){var y=d.createRange();y.setStart(b.node,b.offset),h.removeAllRanges(),m>g?(h.addRange(y),h.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),h.addRange(y))}}}}for(d=[],h=l;h=h.parentNode;)1===h.nodeType&&d.push({element:h,left:h.scrollLeft,top:h.scrollTop});for("function"===typeof l.focus&&l.focus(),l=0;l<d.length;l++){var x=d[l];x.element.scrollLeft=x.left,x.element.scrollTop=x.top}}nf=!!td,nd=td=null}finally{nc=a,L.p=r,_.T=n}}e.current=t,Ec=2}}function au(){if(2===Ec){Ec=0;var e=Cc,t=Ac,n=0!==(8772&t.flags);if(0!==(8772&t.subtreeFlags)||n){n=_.T,_.T=null;var r=L.p;L.p=2;var a=nc;nc|=4;try{Ss(e,t.alternate,t)}finally{nc=a,L.p=r,_.T=n}}Ec=3}}function iu(){if(4===Ec||3===Ec){Ec=0,ee();var e=Cc,t=Ac,n=zc,r=Pc;0!==(10256&t.subtreeFlags)||0!==(10256&t.flags)?Ec=5:(Ec=0,Ac=Cc=null,ou(e,e.pendingLanes));var a=e.pendingLanes;if(0===a&&(Sc=null),Te(n),t=t.stateNode,de&&"function"===typeof de.onCommitFiberRoot)try{de.onCommitFiberRoot(ue,t,void 0,128===(128&t.current.flags))}catch(s){}if(null!==r){t=_.T,a=L.p,L.p=2,_.T=null;try{for(var i=e.onRecoverableError,o=0;o<r.length;o++){var l=r[o];i(l.value,{componentStack:l.stack})}}finally{_.T=t,L.p=a}}0!==(3&zc)&&lu(),ku(e),a=e.pendingLanes,0!==(4194090&n)&&0!==(42&a)?e===Nc?Rc++:(Rc=0,Nc=e):Rc=0,ju(0,!1)}}function ou(e,t){0===(e.pooledCacheLanes&=t)&&(null!=(t=e.pooledCache)&&(e.pooledCache=null,_a(t)))}function lu(e){return ru(),au(),iu(),su()}function su(){if(5!==Ec)return!1;var e=Cc,t=Tc;Tc=0;var n=Te(zc),r=_.T,a=L.p;try{L.p=32>n?32:n,_.T=null,n=Mc,Mc=null;var i=Cc,l=zc;if(Ec=0,Ac=Cc=null,zc=0,0!==(6&nc))throw Error(o(331));var s=nc;if(nc|=4,Js(i.current),Hs(i,i.current,l,n),nc=s,ju(0,!1),de&&"function"===typeof de.onPostCommitFiberRoot)try{de.onPostCommitFiberRoot(ue,i)}catch(c){}return!0}finally{L.p=a,_.T=r,ou(e,t)}}function cu(e,t,n){t=Sr(n,t),null!==(e=ii(e,t=jl(e.stateNode,t,2),2))&&(Ee(e,2),ku(e))}function uu(e,t,n){if(3===e.tag)cu(e,e,n);else for(;null!==t;){if(3===t.tag){cu(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===Sc||!Sc.has(r))){e=Sr(n,e),null!==(r=ii(t,n=Sl(2),2))&&(El(n,r,t,e),Ee(r,2),ku(r));break}}t=t.return}}function du(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new tc;var a=new Set;r.set(t,a)}else void 0===(a=r.get(t))&&(a=new Set,r.set(t,a));a.has(n)||(uc=!0,a.add(n),e=fu.bind(null,e,t,n),t.then(e,e))}function fu(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,rc===e&&(ic&n)===n&&(4===fc||3===fc&&(62914560&ic)===ic&&300>te()-wc?0===(2&nc)&&Hc(e,0):mc|=n,bc===ic&&(bc=0)),ku(e)}function hu(e,t){0===t&&(t=je()),null!==(e=Pr(e,t))&&(Ee(e,t),ku(e))}function pu(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),hu(e,n)}function mu(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;null!==a&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(o(314))}null!==r&&r.delete(t),hu(e,n)}var gu=null,bu=null,vu=!1,yu=!1,xu=!1,wu=0;function ku(e){e!==bu&&null===e.next&&(null===bu?gu=bu=e:bu=bu.next=e),yu=!0,vu||(vu=!0,dd(function(){0!==(6&nc)?J(re,Su):Eu()}))}function ju(e,t){if(!xu&&yu){xu=!0;do{for(var n=!1,r=gu;null!==r;){if(!t)if(0!==e){var a=r.pendingLanes;if(0===a)var i=0;else{var o=r.suspendedLanes,l=r.pingedLanes;i=(1<<31-he(42|e)+1)-1,i=201326741&(i&=a&~(o&~l))?201326741&i|1:i?2|i:0}0!==i&&(n=!0,zu(r,i))}else i=ic,0===(3&(i=ye(r,r===rc?i:0,null!==r.cancelPendingCommit||-1!==r.timeoutHandle)))||xe(r,i)||(n=!0,zu(r,i));r=r.next}}while(n);xu=!1}}function Su(){Eu()}function Eu(){yu=vu=!1;var e=0;0!==wu&&(function(){var e=window.event;if(e&&"popstate"===e.type)return e!==ld&&(ld=e,!0);return ld=null,!1}()&&(e=wu),wu=0);for(var t=te(),n=null,r=gu;null!==r;){var a=r.next,i=Cu(r,t);0===i?(r.next=null,null===n?gu=a:n.next=a,null===a&&(bu=n)):(n=r,(0!==e||0!==(3&i))&&(yu=!0)),r=a}ju(e,!1)}function Cu(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,i=-62914561&e.pendingLanes;0<i;){var o=31-he(i),l=1<<o,s=a[o];-1===s?0!==(l&n)&&0===(l&r)||(a[o]=we(l,t)):s<=t&&(e.expiredLanes|=l),i&=~l}if(n=ic,n=ye(e,e===(t=rc)?n:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle),r=e.callbackNode,0===n||e===t&&(2===oc||9===oc)||null!==e.cancelPendingCommit)return null!==r&&null!==r&&X(r),e.callbackNode=null,e.callbackPriority=0;if(0===(3&n)||xe(e,n)){if((t=n&-n)===e.callbackPriority)return t;switch(null!==r&&X(r),Te(n)){case 2:case 8:n=ae;break;case 32:default:n=ie;break;case 268435456:n=le}return r=Au.bind(null,e),n=J(n,r),e.callbackPriority=t,e.callbackNode=n,t}return null!==r&&null!==r&&X(r),e.callbackPriority=2,e.callbackNode=null,2}function Au(e,t){if(0!==Ec&&5!==Ec)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(lu()&&e.callbackNode!==n)return null;var r=ic;return 0===(r=ye(e,e===rc?r:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle))?null:(Ic(e,r,t),Cu(e,te()),null!=e.callbackNode&&e.callbackNode===n?Au.bind(null,e):null)}function zu(e,t){if(lu())return null;Ic(e,t,!0)}function Tu(){return 0===wu&&(wu=ke()),wu}function Mu(e){return null==e||"symbol"===typeof e||"boolean"===typeof e?null:"function"===typeof e?e:Tt(""+e)}function Pu(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}for(var Ru=0;Ru<wr.length;Ru++){var Nu=wr[Ru];kr(Nu.toLowerCase(),"on"+(Nu[0].toUpperCase()+Nu.slice(1)))}kr(hr,"onAnimationEnd"),kr(pr,"onAnimationIteration"),kr(mr,"onAnimationStart"),kr("dblclick","onDoubleClick"),kr("focusin","onFocus"),kr("focusout","onBlur"),kr(gr,"onTransitionRun"),kr(br,"onTransitionStart"),kr(vr,"onTransitionCancel"),kr(yr,"onTransitionEnd"),Ye("onMouseEnter",["mouseout","mouseover"]),Ye("onMouseLeave",["mouseout","mouseover"]),Ye("onPointerEnter",["pointerout","pointerover"]),Ye("onPointerLeave",["pointerout","pointerover"]),Ke("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ke("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ke("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ke("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ke("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ke("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _u="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Lu=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(_u));function Du(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],s=l.instance,c=l.currentTarget;if(l=l.listener,s!==i&&a.isPropagationStopped())break e;i=l,a.currentTarget=c;try{i(a)}catch(u){bl(u)}a.currentTarget=null,i=s}else for(o=0;o<r.length;o++){if(s=(l=r[o]).instance,c=l.currentTarget,l=l.listener,s!==i&&a.isPropagationStopped())break e;i=l,a.currentTarget=c;try{i(a)}catch(u){bl(u)}a.currentTarget=null,i=s}}}}function Iu(e,t){var n=t[Le];void 0===n&&(n=t[Le]=new Set);var r=e+"__bubble";n.has(r)||($u(t,e,2,!1),n.add(r))}function Fu(e,t,n){var r=0;t&&(r|=4),$u(n,e,r,t)}var Bu="_reactListening"+Math.random().toString(36).slice(2);function Ou(e){if(!e[Bu]){e[Bu]=!0,qe.forEach(function(t){"selectionchange"!==t&&(Lu.has(t)||Fu(t,!1,e),Fu(t,!0,e))});var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Bu]||(t[Bu]=!0,Fu("selectionchange",!1,t))}}function $u(e,t,n,r){switch(uf(t)){case 2:var a=rf;break;case 8:a=af;break;default:a=of}n=a.bind(null,t,n,e),a=void 0,!Bt||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(a=!0),r?void 0!==a?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):void 0!==a?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Uu(e,t,n,r,a){var i=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var o=r.tag;if(3===o||4===o){var l=r.stateNode.containerInfo;if(l===a)break;if(4===o)for(o=r.return;null!==o;){var c=o.tag;if((3===c||4===c)&&o.stateNode.containerInfo===a)return;o=o.return}for(;null!==l;){if(null===(o=$e(l)))return;if(5===(c=o.tag)||6===c||26===c||27===c){r=i=o;continue e}l=l.parentNode}}r=r.return}Dt(function(){var r=i,a=Pt(n),o=[];e:{var l=xr.get(e);if(void 0!==l){var c=Zt,u=e;switch(e){case"keypress":if(0===Vt(n))break e;case"keydown":case"keyup":c=mn;break;case"focusin":u="focus",c=on;break;case"focusout":u="blur",c=on;break;case"beforeblur":case"afterblur":c=on;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":c=rn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":c=an;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":c=bn;break;case hr:case pr:case mr:c=ln;break;case yr:c=vn;break;case"scroll":case"scrollend":c=tn;break;case"wheel":c=yn;break;case"copy":case"cut":case"paste":c=sn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":c=gn;break;case"toggle":case"beforetoggle":c=xn}var d=0!==(4&t),f=!d&&("scroll"===e||"scrollend"===e),h=d?null!==l?l+"Capture":null:l;d=[];for(var p,m=r;null!==m;){var g=m;if(p=g.stateNode,5!==(g=g.tag)&&26!==g&&27!==g||null===p||null===h||null!=(g=It(m,h))&&d.push(Hu(m,g,p)),f)break;m=m.return}0<d.length&&(l=new c(l,u,null,n,a),o.push({event:l,listeners:d}))}}if(0===(7&t)){if(c="mouseout"===e||"pointerout"===e,(!(l="mouseover"===e||"pointerover"===e)||n===Mt||!(u=n.relatedTarget||n.fromElement)||!$e(u)&&!u[_e])&&(c||l)&&(l=a.window===a?a:(l=a.ownerDocument)?l.defaultView||l.parentWindow:window,c?(c=r,null!==(u=(u=n.relatedTarget||n.toElement)?$e(u):null)&&(f=s(u),d=u.tag,u!==f||5!==d&&27!==d&&6!==d)&&(u=null)):(c=null,u=r),c!==u)){if(d=rn,g="onMouseLeave",h="onMouseEnter",m="mouse","pointerout"!==e&&"pointerover"!==e||(d=gn,g="onPointerLeave",h="onPointerEnter",m="pointer"),f=null==c?l:He(c),p=null==u?l:He(u),(l=new d(g,m+"leave",c,n,a)).target=f,l.relatedTarget=p,g=null,$e(a)===r&&((d=new d(h,m+"enter",u,n,a)).target=p,d.relatedTarget=f,g=d),f=g,c&&u)e:{for(h=u,m=0,p=d=c;p;p=Vu(p))m++;for(p=0,g=h;g;g=Vu(g))p++;for(;0<m-p;)d=Vu(d),m--;for(;0<p-m;)h=Vu(h),p--;for(;m--;){if(d===h||null!==h&&d===h.alternate)break e;d=Vu(d),h=Vu(h)}d=null}else d=null;null!==c&&qu(o,l,c,d,!1),null!==u&&null!==f&&qu(o,f,u,d,!0)}if("select"===(c=(l=r?He(r):window).nodeName&&l.nodeName.toLowerCase())||"input"===c&&"file"===l.type)var b=Fn;else if(Rn(l))if(Bn)b=Kn;else{b=qn;var v=Vn}else!(c=l.nodeName)||"input"!==c.toLowerCase()||"checkbox"!==l.type&&"radio"!==l.type?r&&Ct(r.elementType)&&(b=Fn):b=Gn;switch(b&&(b=b(e,r))?Nn(o,b,n,a):(v&&v(e,l,r),"focusout"===e&&r&&"number"===l.type&&null!=r.memoizedProps.value&&vt(l,"number",l.value)),v=r?He(r):window,e){case"focusin":(Rn(v)||"true"===v.contentEditable)&&(rr=v,ar=r,ir=null);break;case"focusout":ir=ar=rr=null;break;case"mousedown":or=!0;break;case"contextmenu":case"mouseup":case"dragend":or=!1,lr(o,n,a);break;case"selectionchange":if(nr)break;case"keydown":case"keyup":lr(o,n,a)}var y;if(kn)e:{switch(e){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Mn?zn(e,n)&&(x="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(x="onCompositionStart");x&&(En&&"ko"!==n.locale&&(Mn||"onCompositionStart"!==x?"onCompositionEnd"===x&&Mn&&(y=Wt()):(Ut="value"in($t=a)?$t.value:$t.textContent,Mn=!0)),0<(v=Wu(r,x)).length&&(x=new cn(x,e,null,n,a),o.push({event:x,listeners:v}),y?x.data=y:null!==(y=Tn(n))&&(x.data=y))),(y=Sn?function(e,t){switch(e){case"compositionend":return Tn(t);case"keypress":return 32!==t.which?null:(An=!0,Cn);case"textInput":return(e=t.data)===Cn&&An?null:e;default:return null}}(e,n):function(e,t){if(Mn)return"compositionend"===e||!kn&&zn(e,t)?(e=Wt(),Ht=Ut=$t=null,Mn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return En&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(x=Wu(r,"onBeforeInput")).length&&(v=new cn("onBeforeInput","beforeinput",null,n,a),o.push({event:v,listeners:x}),v.data=y)),function(e,t,n,r,a){if("submit"===t&&n&&n.stateNode===a){var i=Mu((a[Ne]||null).action),o=r.submitter;o&&null!==(t=(t=o[Ne]||null)?Mu(t.formAction):o.getAttribute("formAction"))&&(i=t,o=null);var l=new Zt("action","action",null,r,a);e.push({event:l,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(0!==wu){var e=o?Pu(a,o):new FormData(a);Po(n,{pending:!0,data:e,method:a.method,action:i},null,e)}}else"function"===typeof i&&(l.preventDefault(),e=o?Pu(a,o):new FormData(a),Po(n,{pending:!0,data:e,method:a.method,action:i},i,e))},currentTarget:a}]})}}(o,e,r,n,a)}Du(o,t)})}function Hu(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Wu(e,t){for(var n=t+"Capture",r=[];null!==e;){var a=e,i=a.stateNode;if(5!==(a=a.tag)&&26!==a&&27!==a||null===i||(null!=(a=It(e,n))&&r.unshift(Hu(e,a,i)),null!=(a=It(e,t))&&r.push(Hu(e,a,i))),3===e.tag)return r;e=e.return}return[]}function Vu(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag&&27!==e.tag);return e||null}function qu(e,t,n,r,a){for(var i=t._reactName,o=[];null!==n&&n!==r;){var l=n,s=l.alternate,c=l.stateNode;if(l=l.tag,null!==s&&s===r)break;5!==l&&26!==l&&27!==l||null===c||(s=c,a?null!=(c=It(n,i))&&o.unshift(Hu(n,c,s)):a||null!=(c=It(n,i))&&o.push(Hu(n,c,s))),n=n.return}0!==o.length&&e.push({event:t,listeners:o})}var Gu=/\r\n?/g,Ku=/\u0000|\uFFFD/g;function Yu(e){return("string"===typeof e?e:""+e).replace(Gu,"\n").replace(Ku,"")}function Qu(e,t){return t=Yu(t),Yu(e)===t}function Ju(){}function Xu(e,t,n,r,a,i){switch(n){case"children":"string"===typeof r?"body"===t||"textarea"===t&&""===r||kt(e,r):("number"===typeof r||"bigint"===typeof r)&&"body"!==t&&kt(e,""+r);break;case"className":nt(e,"class",r);break;case"tabIndex":nt(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":nt(e,n,r);break;case"style":Et(e,r,i);break;case"data":if("object"!==t){nt(e,"data",r);break}case"src":case"href":if(""===r&&("a"!==t||"href"!==n)){e.removeAttribute(n);break}if(null==r||"function"===typeof r||"symbol"===typeof r||"boolean"===typeof r){e.removeAttribute(n);break}r=Tt(""+r),e.setAttribute(n,r);break;case"action":case"formAction":if("function"===typeof r){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}if("function"===typeof i&&("formAction"===n?("input"!==t&&Xu(e,t,"name",a.name,a,null),Xu(e,t,"formEncType",a.formEncType,a,null),Xu(e,t,"formMethod",a.formMethod,a,null),Xu(e,t,"formTarget",a.formTarget,a,null)):(Xu(e,t,"encType",a.encType,a,null),Xu(e,t,"method",a.method,a,null),Xu(e,t,"target",a.target,a,null))),null==r||"symbol"===typeof r||"boolean"===typeof r){e.removeAttribute(n);break}r=Tt(""+r),e.setAttribute(n,r);break;case"onClick":null!=r&&(e.onclick=Ju);break;case"onScroll":null!=r&&Iu("scroll",e);break;case"onScrollEnd":null!=r&&Iu("scrollend",e);break;case"dangerouslySetInnerHTML":if(null!=r){if("object"!==typeof r||!("__html"in r))throw Error(o(61));if(null!=(n=r.__html)){if(null!=a.children)throw Error(o(60));e.innerHTML=n}}break;case"multiple":e.multiple=r&&"function"!==typeof r&&"symbol"!==typeof r;break;case"muted":e.muted=r&&"function"!==typeof r&&"symbol"!==typeof r;break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":case"autoFocus":break;case"xlinkHref":if(null==r||"function"===typeof r||"boolean"===typeof r||"symbol"===typeof r){e.removeAttribute("xlink:href");break}n=Tt(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":null!=r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,""+r):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":!0===r?e.setAttribute(n,""):!1!==r&&null!=r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,r):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":null!=r&&"function"!==typeof r&&"symbol"!==typeof r&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case"rowSpan":case"start":null==r||"function"===typeof r||"symbol"===typeof r||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case"popover":Iu("beforetoggle",e),Iu("toggle",e),tt(e,"popover",r);break;case"xlinkActuate":rt(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":rt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":rt(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":rt(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":rt(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":rt(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":rt(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":rt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":rt(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":tt(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<n.length)||"o"!==n[0]&&"O"!==n[0]||"n"!==n[1]&&"N"!==n[1])&&tt(e,n=At.get(n)||n,r)}}function Zu(e,t,n,r,a,i){switch(n){case"style":Et(e,r,i);break;case"dangerouslySetInnerHTML":if(null!=r){if("object"!==typeof r||!("__html"in r))throw Error(o(61));if(null!=(n=r.__html)){if(null!=a.children)throw Error(o(60));e.innerHTML=n}}break;case"children":"string"===typeof r?kt(e,r):("number"===typeof r||"bigint"===typeof r)&&kt(e,""+r);break;case"onScroll":null!=r&&Iu("scroll",e);break;case"onScrollEnd":null!=r&&Iu("scrollend",e);break;case"onClick":null!=r&&(e.onclick=Ju);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":case"innerText":case"textContent":break;default:Ge.hasOwnProperty(n)||("o"!==n[0]||"n"!==n[1]||(a=n.endsWith("Capture"),t=n.slice(2,a?n.length-7:void 0),"function"===typeof(i=null!=(i=e[Ne]||null)?i[n]:null)&&e.removeEventListener(t,i,a),"function"!==typeof r)?n in e?e[n]=r:!0===r?e.setAttribute(n,""):tt(e,n,r):("function"!==typeof i&&null!==i&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a)))}}function ed(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Iu("error",e),Iu("load",e);var r,a=!1,i=!1;for(r in n)if(n.hasOwnProperty(r)){var l=n[r];if(null!=l)switch(r){case"src":a=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Xu(e,t,r,l,n,null)}}return i&&Xu(e,t,"srcSet",n.srcSet,n,null),void(a&&Xu(e,t,"src",n.src,n,null));case"input":Iu("invalid",e);var s=r=l=i=null,c=null,u=null;for(a in n)if(n.hasOwnProperty(a)){var d=n[a];if(null!=d)switch(a){case"name":i=d;break;case"type":l=d;break;case"checked":c=d;break;case"defaultChecked":u=d;break;case"value":r=d;break;case"defaultValue":s=d;break;case"children":case"dangerouslySetInnerHTML":if(null!=d)throw Error(o(137,t));break;default:Xu(e,t,a,d,n,null)}}return bt(e,r,s,c,u,l,i,!1),void dt(e);case"select":for(i in Iu("invalid",e),a=l=r=null,n)if(n.hasOwnProperty(i)&&null!=(s=n[i]))switch(i){case"value":r=s;break;case"defaultValue":l=s;break;case"multiple":a=s;default:Xu(e,t,i,s,n,null)}return t=r,n=l,e.multiple=!!a,void(null!=t?yt(e,!!a,t,!1):null!=n&&yt(e,!!a,n,!0));case"textarea":for(l in Iu("invalid",e),r=i=a=null,n)if(n.hasOwnProperty(l)&&null!=(s=n[l]))switch(l){case"value":a=s;break;case"defaultValue":i=s;break;case"children":r=s;break;case"dangerouslySetInnerHTML":if(null!=s)throw Error(o(91));break;default:Xu(e,t,l,s,n,null)}return wt(e,a,i,r),void dt(e);case"option":for(c in n)if(n.hasOwnProperty(c)&&null!=(a=n[c]))if("selected"===c)e.selected=a&&"function"!==typeof a&&"symbol"!==typeof a;else Xu(e,t,c,a,n,null);return;case"dialog":Iu("beforetoggle",e),Iu("toggle",e),Iu("cancel",e),Iu("close",e);break;case"iframe":case"object":Iu("load",e);break;case"video":case"audio":for(a=0;a<_u.length;a++)Iu(_u[a],e);break;case"image":Iu("error",e),Iu("load",e);break;case"details":Iu("toggle",e);break;case"embed":case"source":case"link":Iu("error",e),Iu("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(u in n)if(n.hasOwnProperty(u)&&null!=(a=n[u]))switch(u){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Xu(e,t,u,a,n,null)}return;default:if(Ct(t)){for(d in n)n.hasOwnProperty(d)&&(void 0!==(a=n[d])&&Zu(e,t,d,a,n,void 0));return}}for(s in n)n.hasOwnProperty(s)&&(null!=(a=n[s])&&Xu(e,t,s,a,n,null))}var td=null,nd=null;function rd(e){return 9===e.nodeType?e:e.ownerDocument}function ad(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function id(e,t){if(0===e)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return 1===e&&"foreignObject"===t?0:e}function od(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"bigint"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ld=null;var sd="function"===typeof setTimeout?setTimeout:void 0,cd="function"===typeof clearTimeout?clearTimeout:void 0,ud="function"===typeof Promise?Promise:void 0,dd="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof ud?function(e){return ud.resolve(null).then(e).catch(fd)}:sd;function fd(e){setTimeout(function(){throw e})}function hd(e){return"head"===e}function pd(e,t){var n=t,r=0,a=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&8===i.nodeType)if("/$"===(n=i.data)){if(0<r&&8>r){n=r;var o=e.ownerDocument;if(1&n&&wd(o.documentElement),2&n&&wd(o.body),4&n)for(wd(n=o.head),o=n.firstChild;o;){var l=o.nextSibling,s=o.nodeName;o[Be]||"SCRIPT"===s||"STYLE"===s||"LINK"===s&&"stylesheet"===o.rel.toLowerCase()||n.removeChild(o),o=l}}if(0===a)return e.removeChild(i),void zf(t);a--}else"$"===n||"$?"===n||"$!"===n?a++:r=n.charCodeAt(0)-48;else r=0;n=i}while(n);zf(t)}function md(e){var t=e.firstChild;for(t&&10===t.nodeType&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":md(n),Oe(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if("stylesheet"===n.rel.toLowerCase())continue}e.removeChild(n)}}function gd(e){return"$!"===e.data||"$?"===e.data&&"complete"===e.ownerDocument.readyState}function bd(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t||"F!"===t||"F"===t)break;if("/$"===t)return null}}return e}var vd=null;function yd(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}function xd(e,t,n){switch(t=rd(n),e){case"html":if(!(e=t.documentElement))throw Error(o(452));return e;case"head":if(!(e=t.head))throw Error(o(453));return e;case"body":if(!(e=t.body))throw Error(o(454));return e;default:throw Error(o(451))}}function wd(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Oe(e)}var kd=new Map,jd=new Set;function Sd(e){return"function"===typeof e.getRootNode?e.getRootNode():9===e.nodeType?e:e.ownerDocument}var Ed=L.d;L.d={f:function(){var e=Ed.f(),t=$c();return e||t},r:function(e){var t=Ue(e);null!==t&&5===t.tag&&"form"===t.type?No(t):Ed.r(e)},D:function(e){Ed.D(e),Ad("dns-prefetch",e,null)},C:function(e,t){Ed.C(e,t),Ad("preconnect",e,t)},L:function(e,t,n){Ed.L(e,t,n);var r=Cd;if(r&&e&&t){var a='link[rel="preload"][as="'+mt(t)+'"]';"image"===t&&n&&n.imageSrcSet?(a+='[imagesrcset="'+mt(n.imageSrcSet)+'"]',"string"===typeof n.imageSizes&&(a+='[imagesizes="'+mt(n.imageSizes)+'"]')):a+='[href="'+mt(e)+'"]';var i=a;switch(t){case"style":i=Td(e);break;case"script":i=Rd(e)}kd.has(i)||(e=f({rel:"preload",href:"image"===t&&n&&n.imageSrcSet?void 0:e,as:t},n),kd.set(i,e),null!==r.querySelector(a)||"style"===t&&r.querySelector(Md(i))||"script"===t&&r.querySelector(Nd(i))||(ed(t=r.createElement("link"),"link",e),Ve(t),r.head.appendChild(t)))}},m:function(e,t){Ed.m(e,t);var n=Cd;if(n&&e){var r=t&&"string"===typeof t.as?t.as:"script",a='link[rel="modulepreload"][as="'+mt(r)+'"][href="'+mt(e)+'"]',i=a;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Rd(e)}if(!kd.has(i)&&(e=f({rel:"modulepreload",href:e},t),kd.set(i,e),null===n.querySelector(a))){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Nd(i)))return}ed(r=n.createElement("link"),"link",e),Ve(r),n.head.appendChild(r)}}},X:function(e,t){Ed.X(e,t);var n=Cd;if(n&&e){var r=We(n).hoistableScripts,a=Rd(e),i=r.get(a);i||((i=n.querySelector(Nd(a)))||(e=f({src:e,async:!0},t),(t=kd.get(a))&&Id(e,t),Ve(i=n.createElement("script")),ed(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},r.set(a,i))}},S:function(e,t,n){Ed.S(e,t,n);var r=Cd;if(r&&e){var a=We(r).hoistableStyles,i=Td(e);t=t||"default";var o=a.get(i);if(!o){var l={loading:0,preload:null};if(o=r.querySelector(Md(i)))l.loading=5;else{e=f({rel:"stylesheet",href:e,"data-precedence":t},n),(n=kd.get(i))&&Dd(e,n);var s=o=r.createElement("link");Ve(s),ed(s,"link",e),s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),s.addEventListener("load",function(){l.loading|=1}),s.addEventListener("error",function(){l.loading|=2}),l.loading|=4,Ld(o,t,r)}o={type:"stylesheet",instance:o,count:1,state:l},a.set(i,o)}}},M:function(e,t){Ed.M(e,t);var n=Cd;if(n&&e){var r=We(n).hoistableScripts,a=Rd(e),i=r.get(a);i||((i=n.querySelector(Nd(a)))||(e=f({src:e,async:!0,type:"module"},t),(t=kd.get(a))&&Id(e,t),Ve(i=n.createElement("script")),ed(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},r.set(a,i))}}};var Cd="undefined"===typeof document?null:document;function Ad(e,t,n){var r=Cd;if(r&&"string"===typeof t&&t){var a=mt(t);a='link[rel="'+e+'"][href="'+a+'"]',"string"===typeof n&&(a+='[crossorigin="'+n+'"]'),jd.has(a)||(jd.add(a),e={rel:e,crossOrigin:n,href:t},null===r.querySelector(a)&&(ed(t=r.createElement("link"),"link",e),Ve(t),r.head.appendChild(t)))}}function zd(e,t,n,r){var a,i,l,s,c=(c=W.current)?Sd(c):null;if(!c)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return"string"===typeof n.precedence&&"string"===typeof n.href?(t=Td(n.href),(r=(n=We(c).hoistableStyles).get(t))||(r={type:"style",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if("stylesheet"===n.rel&&"string"===typeof n.href&&"string"===typeof n.precedence){e=Td(n.href);var u=We(c).hoistableStyles,d=u.get(e);if(d||(c=c.ownerDocument||c,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,d),(u=c.querySelector(Md(e)))&&!u._p&&(d.instance=u,d.state.loading=5),kd.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},kd.set(e,n),u||(a=c,i=e,l=n,s=d.state,a.querySelector('link[rel="preload"][as="style"]['+i+"]")?s.loading=1:(i=a.createElement("link"),s.preload=i,i.addEventListener("load",function(){return s.loading|=1}),i.addEventListener("error",function(){return s.loading|=2}),ed(i,"link",l),Ve(i),a.head.appendChild(i))))),t&&null===r)throw Error(o(528,""));return d}if(t&&null!==r)throw Error(o(529,""));return null;case"script":return t=n.async,"string"===typeof(n=n.src)&&t&&"function"!==typeof t&&"symbol"!==typeof t?(t=Rd(n),(r=(n=We(c).hoistableScripts).get(t))||(r={type:"script",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function Td(e){return'href="'+mt(e)+'"'}function Md(e){return'link[rel="stylesheet"]['+e+"]"}function Pd(e){return f({},e,{"data-precedence":e.precedence,precedence:null})}function Rd(e){return'[src="'+mt(e)+'"]'}function Nd(e){return"script[async]"+e}function _d(e,t,n){if(t.count++,null===t.instance)switch(t.type){case"style":var r=e.querySelector('style[data-href~="'+mt(n.href)+'"]');if(r)return t.instance=r,Ve(r),r;var a=f({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return Ve(r=(e.ownerDocument||e).createElement("style")),ed(r,"style",a),Ld(r,n.precedence,e),t.instance=r;case"stylesheet":a=Td(n.href);var i=e.querySelector(Md(a));if(i)return t.state.loading|=4,t.instance=i,Ve(i),i;r=Pd(n),(a=kd.get(a))&&Dd(r,a),Ve(i=(e.ownerDocument||e).createElement("link"));var l=i;return l._p=new Promise(function(e,t){l.onload=e,l.onerror=t}),ed(i,"link",r),t.state.loading|=4,Ld(i,n.precedence,e),t.instance=i;case"script":return i=Rd(n.src),(a=e.querySelector(Nd(i)))?(t.instance=a,Ve(a),a):(r=n,(a=kd.get(i))&&Id(r=f({},n),a),Ve(a=(e=e.ownerDocument||e).createElement("script")),ed(a,"link",r),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(o(443,t.type))}else"stylesheet"===t.type&&0===(4&t.state.loading)&&(r=t.instance,t.state.loading|=4,Ld(r,n.precedence,e));return t.instance}function Ld(e,t,n){for(var r=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=r.length?r[r.length-1]:null,i=a,o=0;o<r.length;o++){var l=r[o];if(l.dataset.precedence===t)i=l;else if(i!==a)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=9===n.nodeType?n.head:n).insertBefore(e,t.firstChild)}function Dd(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.title&&(e.title=t.title)}function Id(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.integrity&&(e.integrity=t.integrity)}var Fd=null;function Bd(e,t,n){if(null===Fd){var r=new Map,a=Fd=new Map;a.set(n,r)}else(r=(a=Fd).get(n))||(r=new Map,a.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var i=n[a];if(!(i[Be]||i[Re]||"link"===e&&"stylesheet"===i.getAttribute("rel"))&&"http://www.w3.org/2000/svg"!==i.namespaceURI){var o=i.getAttribute(t)||"";o=e+o;var l=r.get(o);l?l.push(i):r.set(o,[i])}}return r}function Od(e,t,n){(e=e.ownerDocument||e).head.insertBefore(n,"title"===t?e.querySelector("head > title"):null)}function $d(e){return"stylesheet"!==e.type||0!==(3&e.state.loading)}var Ud=null;function Hd(){}function Wd(){if(this.count--,0===this.count)if(this.stylesheets)qd(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}var Vd=null;function qd(e,t){e.stylesheets=null,null!==e.unsuspend&&(e.count++,Vd=new Map,t.forEach(Gd,e),Vd=null,Wd.call(e))}function Gd(e,t){if(!(4&t.state.loading)){var n=Vd.get(e);if(n)var r=n.get(null);else{n=new Map,Vd.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<a.length;i++){var o=a[i];"LINK"!==o.nodeName&&"not all"===o.getAttribute("media")||(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}o=(a=t.instance).getAttribute("data-precedence"),(i=n.get(o)||r)===r&&n.set(null,a),n.set(o,a),this.count++,r=Wd.bind(this),a.addEventListener("load",r),a.addEventListener("error",r),i?i.parentNode.insertBefore(a,i.nextSibling):(e=9===e.nodeType?e.head:e).insertBefore(a,e.firstChild),t.state.loading|=4}}var Kd={$$typeof:w,Provider:null,Consumer:null,_currentValue:D,_currentValue2:D,_threadCount:0};function Yd(e,t,n,r,a,i,o,l){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Se(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Se(0),this.hiddenUpdates=Se(null),this.identifierPrefix=r,this.onUncaughtError=a,this.onCaughtError=i,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=l,this.incompleteTransitions=new Map}function Qd(e,t,n,r,a,i,o,l,s,c,u,d){return e=new Yd(e,t,n,o,l,s,c,d),t=1,!0===i&&(t|=24),i=Dr(3,null,null,t),e.current=i,i.stateNode=e,(t=Na()).refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:r,isDehydrated:n,cache:t},ni(i),e}function Jd(e){return e?e=_r:_r}function Xd(e,t,n,r,a,i){a=Jd(a),null===r.context?r.context=a:r.pendingContext=a,(r=ai(t)).payload={element:n},null!==(i=void 0===i?null:i)&&(r.callback=i),null!==(n=ii(e,r,t))&&(Dc(n,0,t),oi(n,e,t))}function Zd(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function ef(e,t){Zd(e,t),(e=e.alternate)&&Zd(e,t)}function tf(e){if(13===e.tag){var t=Pr(e,67108864);null!==t&&Dc(t,0,67108864),ef(e,67108864)}}var nf=!0;function rf(e,t,n,r){var a=_.T;_.T=null;var i=L.p;try{L.p=2,of(e,t,n,r)}finally{L.p=i,_.T=a}}function af(e,t,n,r){var a=_.T;_.T=null;var i=L.p;try{L.p=8,of(e,t,n,r)}finally{L.p=i,_.T=a}}function of(e,t,n,r){if(nf){var a=lf(r);if(null===a)Uu(e,t,r,sf,n),yf(e,r);else if(function(e,t,n,r,a){switch(t){case"focusin":return ff=xf(ff,e,t,n,r,a),!0;case"dragenter":return hf=xf(hf,e,t,n,r,a),!0;case"mouseover":return pf=xf(pf,e,t,n,r,a),!0;case"pointerover":var i=a.pointerId;return mf.set(i,xf(mf.get(i)||null,e,t,n,r,a)),!0;case"gotpointercapture":return i=a.pointerId,gf.set(i,xf(gf.get(i)||null,e,t,n,r,a)),!0}return!1}(a,e,t,n,r))r.stopPropagation();else if(yf(e,r),4&t&&-1<vf.indexOf(e)){for(;null!==a;){var i=Ue(a);if(null!==i)switch(i.tag){case 3:if((i=i.stateNode).current.memoizedState.isDehydrated){var o=ve(i.pendingLanes);if(0!==o){var l=i;for(l.pendingLanes|=2,l.entangledLanes|=2;o;){var s=1<<31-he(o);l.entanglements[1]|=s,o&=~s}ku(i),0===(6&nc)&&(kc=te()+500,ju(0,!1))}}break;case 13:null!==(l=Pr(i,2))&&Dc(l,0,2),$c(),ef(i,2)}if(null===(i=lf(r))&&Uu(e,t,r,sf,n),i===a)break;a=i}null!==a&&r.stopPropagation()}else Uu(e,t,r,null,n)}}function lf(e){return cf(e=Pt(e))}var sf=null;function cf(e){if(sf=null,null!==(e=$e(e))){var t=s(e);if(null===t)e=null;else{var n=t.tag;if(13===n){if(null!==(e=c(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return sf=e,null}function uf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ne()){case re:return 2;case ae:return 8;case ie:case oe:return 32;case le:return 268435456;default:return 32}default:return 32}}var df=!1,ff=null,hf=null,pf=null,mf=new Map,gf=new Map,bf=[],vf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function yf(e,t){switch(e){case"focusin":case"focusout":ff=null;break;case"dragenter":case"dragleave":hf=null;break;case"mouseover":case"mouseout":pf=null;break;case"pointerover":case"pointerout":mf.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":gf.delete(t.pointerId)}}function xf(e,t,n,r,a,i){return null===e||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[a]},null!==t&&(null!==(t=Ue(t))&&tf(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==a&&-1===t.indexOf(a)&&t.push(a),e)}function wf(e){var t=$e(e.target);if(null!==t){var n=s(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=c(n)))return e.blockedOn=t,void function(e,t){var n=L.p;try{return L.p=e,t()}finally{L.p=n}}(e.priority,function(){if(13===n.tag){var e=_c();e=ze(e);var t=Pr(n,e);null!==t&&Dc(t,0,e),ef(n,e)}})}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function kf(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=lf(e.nativeEvent);if(null!==n)return null!==(t=Ue(n))&&tf(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);Mt=r,n.target.dispatchEvent(r),Mt=null,t.shift()}return!0}function jf(e,t,n){kf(e)&&n.delete(t)}function Sf(){df=!1,null!==ff&&kf(ff)&&(ff=null),null!==hf&&kf(hf)&&(hf=null),null!==pf&&kf(pf)&&(pf=null),mf.forEach(jf),gf.forEach(jf)}function Ef(e,t){e.blockedOn===t&&(e.blockedOn=null,df||(df=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Sf)))}var Cf=null;function Af(e){Cf!==e&&(Cf=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Cf===e&&(Cf=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],a=e[t+2];if("function"!==typeof r){if(null===cf(r||n))continue;break}var i=Ue(n);null!==i&&(e.splice(t,3),t-=3,Po(i,{pending:!0,data:a,method:n.method,action:r},r,a))}}))}function zf(e){function t(t){return Ef(t,e)}null!==ff&&Ef(ff,e),null!==hf&&Ef(hf,e),null!==pf&&Ef(pf,e),mf.forEach(t),gf.forEach(t);for(var n=0;n<bf.length;n++){var r=bf[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<bf.length&&null===(n=bf[0]).blockedOn;)wf(n),null===n.blockedOn&&bf.shift();if(null!=(n=(e.ownerDocument||e).$$reactFormReplay))for(r=0;r<n.length;r+=3){var a=n[r],i=n[r+1],o=a[Ne]||null;if("function"===typeof i)o||Af(n);else if(o){var l=null;if(i&&i.hasAttribute("formAction")){if(a=i,o=i[Ne]||null)l=o.formAction;else if(null!==cf(a))continue}else l=o.action;"function"===typeof l?n[r+1]=l:(n.splice(r,3),r-=3),Af(n)}}}function Tf(e){this._internalRoot=e}function Mf(e){this._internalRoot=e}Mf.prototype.render=Tf.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(o(409));Xd(t.current,_c(),e,t,null,null)},Mf.prototype.unmount=Tf.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;Xd(e.current,2,null,e,null,null),$c(),t[_e]=null}},Mf.prototype.unstable_scheduleHydration=function(e){if(e){var t=Me();e={blockedOn:null,target:e,priority:t};for(var n=0;n<bf.length&&0!==t&&t<bf[n].priority;n++);bf.splice(n,0,e),0===n&&wf(e)}};var Pf=a.version;if("19.1.1"!==Pf)throw Error(o(527,Pf,"19.1.1"));L.findDOMNode=function(e){var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(o(188));throw e=Object.keys(e).join(","),Error(o(268,e))}return e=function(e){var t=e.alternate;if(!t){if(null===(t=s(e)))throw Error(o(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(null===a)break;var i=a.alternate;if(null===i){if(null!==(r=a.return)){n=r;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===n)return u(a),e;if(i===r)return u(a),t;i=i.sibling}throw Error(o(188))}if(n.return!==r.return)n=a,r=i;else{for(var l=!1,c=a.child;c;){if(c===n){l=!0,n=a,r=i;break}if(c===r){l=!0,r=a,n=i;break}c=c.sibling}if(!l){for(c=i.child;c;){if(c===n){l=!0,n=i,r=a;break}if(c===r){l=!0,r=i,n=a;break}c=c.sibling}if(!l)throw Error(o(189))}}if(n.alternate!==r)throw Error(o(190))}if(3!==n.tag)throw Error(o(188));return n.stateNode.current===n?e:t}(t),e=null===(e=null!==e?d(e):null)?null:e.stateNode};var Rf={bundleType:0,version:"19.1.1",rendererPackageName:"react-dom",currentDispatcherRef:_,reconcilerVersion:"19.1.1"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var Nf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Nf.isDisabled&&Nf.supportsFiber)try{ue=Nf.inject(Rf),de=Nf}catch(Lf){}}t.createRoot=function(e,t){if(!l(e))throw Error(o(299));var n=!1,r="",a=vl,i=yl,s=xl;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onUncaughtError&&(a=t.onUncaughtError),void 0!==t.onCaughtError&&(i=t.onCaughtError),void 0!==t.onRecoverableError&&(s=t.onRecoverableError),void 0!==t.unstable_transitionCallbacks&&t.unstable_transitionCallbacks),t=Qd(e,1,!1,null,0,n,r,a,i,s,0,null),e[_e]=t.current,Ou(e),new Tf(t)},t.hydrateRoot=function(e,t,n){if(!l(e))throw Error(o(299));var r=!1,a="",i=vl,s=yl,c=xl,u=null;return null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(r=!0),void 0!==n.identifierPrefix&&(a=n.identifierPrefix),void 0!==n.onUncaughtError&&(i=n.onUncaughtError),void 0!==n.onCaughtError&&(s=n.onCaughtError),void 0!==n.onRecoverableError&&(c=n.onRecoverableError),void 0!==n.unstable_transitionCallbacks&&n.unstable_transitionCallbacks,void 0!==n.formState&&(u=n.formState)),(t=Qd(e,1,!0,t,0,r,a,i,s,c,0,u)).context=Jd(null),n=t.current,(a=ai(r=ze(r=_c()))).callback=null,ii(n,a,r),n=r,t.current.lanes=n,Ee(t,n),ku(t),e[_e]=t.current,Ou(e),new Mf(t)},t.version="19.1.1"},43:(e,t,n)=>{"use strict";e.exports=n(288)},288:(e,t)=>{"use strict";var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),s=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),h=Symbol.iterator;var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function b(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||p}function v(){}function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||p}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=b.prototype;var x=y.prototype=new v;x.constructor=y,m(x,b.prototype),x.isPureReactComponent=!0;var w=Array.isArray,k={H:null,A:null,T:null,S:null,V:null},j=Object.prototype.hasOwnProperty;function S(e,t,r,a,i,o){return r=o.ref,{$$typeof:n,type:e,key:t,ref:void 0!==r?r:null,props:o}}function E(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var C=/\/+/g;function A(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(e){return t[e]})}(""+e.key):t.toString(36)}function z(){}function T(e,t,a,i,o){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s,c,u=!1;if(null===e)u=!0;else switch(l){case"bigint":case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case n:case r:u=!0;break;case f:return T((u=e._init)(e._payload),t,a,i,o)}}if(u)return o=o(e),u=""===i?"."+A(e,0):i,w(o)?(a="",null!=u&&(a=u.replace(C,"$&/")+"/"),T(o,t,a,"",function(e){return e})):null!=o&&(E(o)&&(s=o,c=a+(null==o.key||e&&e.key===o.key?"":(""+o.key).replace(C,"$&/")+"/")+u,o=S(s.type,c,void 0,0,0,s.props)),t.push(o)),1;u=0;var d,p=""===i?".":i+":";if(w(e))for(var m=0;m<e.length;m++)u+=T(i=e[m],t,a,l=p+A(i,m),o);else if("function"===typeof(m=null===(d=e)||"object"!==typeof d?null:"function"===typeof(d=h&&d[h]||d["@@iterator"])?d:null))for(e=m.call(e),m=0;!(i=e.next()).done;)u+=T(i=i.value,t,a,l=p+A(i,m++),o);else if("object"===l){if("function"===typeof e.then)return T(function(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch("string"===typeof e.status?e.then(z,z):(e.status="pending",e.then(function(t){"pending"===e.status&&(e.status="fulfilled",e.value=t)},function(t){"pending"===e.status&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}(e),t,a,i,o);throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return u}function M(e,t,n){if(null==e)return e;var r=[],a=0;return T(e,r,"","",function(e){return t.call(n,e,a++)}),r}function P(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)},function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var R="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)};function N(){}t.Children={map:M,forEach:function(e,t,n){M(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return M(e,function(){t++}),t},toArray:function(e){return M(e,function(e){return e})||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=b,t.Fragment=a,t.Profiler=o,t.PureComponent=y,t.StrictMode=i,t.Suspense=u,t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=k,t.__COMPILER_RUNTIME={__proto__:null,c:function(e){return k.H.useMemoCache(e)}},t.cache=function(e){return function(){return e.apply(null,arguments)}},t.cloneElement=function(e,t,n){if(null===e||void 0===e)throw Error("The argument must be a React element, but you passed "+e+".");var r=m({},e.props),a=e.key;if(null!=t)for(i in void 0!==t.ref&&void 0,void 0!==t.key&&(a=""+t.key),t)!j.call(t,i)||"key"===i||"__self"===i||"__source"===i||"ref"===i&&void 0===t.ref||(r[i]=t[i]);var i=arguments.length-2;if(1===i)r.children=n;else if(1<i){for(var o=Array(i),l=0;l<i;l++)o[l]=arguments[l+2];r.children=o}return S(e.type,a,void 0,0,0,r)},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider=e,e.Consumer={$$typeof:l,_context:e},e},t.createElement=function(e,t,n){var r,a={},i=null;if(null!=t)for(r in void 0!==t.key&&(i=""+t.key),t)j.call(t,r)&&"key"!==r&&"__self"!==r&&"__source"!==r&&(a[r]=t[r]);var o=arguments.length-2;if(1===o)a.children=n;else if(1<o){for(var l=Array(o),s=0;s<o;s++)l[s]=arguments[s+2];a.children=l}if(e&&e.defaultProps)for(r in o=e.defaultProps)void 0===a[r]&&(a[r]=o[r]);return S(e,i,void 0,0,0,a)},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=k.T,n={};k.T=n;try{var r=e(),a=k.S;null!==a&&a(n,r),"object"===typeof r&&null!==r&&"function"===typeof r.then&&r.then(N,R)}catch(i){R(i)}finally{k.T=t}},t.unstable_useCacheRefresh=function(){return k.H.useCacheRefresh()},t.use=function(e){return k.H.use(e)},t.useActionState=function(e,t,n){return k.H.useActionState(e,t,n)},t.useCallback=function(e,t){return k.H.useCallback(e,t)},t.useContext=function(e){return k.H.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e,t){return k.H.useDeferredValue(e,t)},t.useEffect=function(e,t,n){var r=k.H;if("function"===typeof n)throw Error("useEffect CRUD overload is not enabled in this build of React.");return r.useEffect(e,t)},t.useId=function(){return k.H.useId()},t.useImperativeHandle=function(e,t,n){return k.H.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return k.H.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return k.H.useLayoutEffect(e,t)},t.useMemo=function(e,t){return k.H.useMemo(e,t)},t.useOptimistic=function(e,t){return k.H.useOptimistic(e,t)},t.useReducer=function(e,t,n){return k.H.useReducer(e,t,n)},t.useRef=function(e){return k.H.useRef(e)},t.useState=function(e){return k.H.useState(e)},t.useSyncExternalStore=function(e,t,n){return k.H.useSyncExternalStore(e,t,n)},t.useTransition=function(){return k.H.useTransition()},t.version="19.1.1"},324:e=>{e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var i=Object.keys(e),o=Object.keys(t);if(i.length!==o.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),s=0;s<i.length;s++){var c=i[s];if(!l(c))return!1;var u=e[c],d=t[c];if(!1===(a=n?n.call(r,u,d,c):void 0)||void 0===a&&u!==d)return!1}return!0}},391:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(4)},579:(e,t,n)=>{"use strict";e.exports=n(799)},672:(e,t,n)=>{"use strict";var r=n(43);function a(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var o={d:{f:i,r:function(){throw Error(a(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");var s=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){return"font"===e?"":"string"===typeof t?"use-credentials"===t?t:"":void 0}t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!t||1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType)throw Error(a(299));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:l,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.flushSync=function(e){var t=s.T,n=o.p;try{if(s.T=null,o.p=2,e)return e()}finally{s.T=t,o.p=n,o.d.f()}},t.preconnect=function(e,t){"string"===typeof e&&(t?t="string"===typeof(t=t.crossOrigin)?"use-credentials"===t?t:"":void 0:t=null,o.d.C(e,t))},t.prefetchDNS=function(e){"string"===typeof e&&o.d.D(e)},t.preinit=function(e,t){if("string"===typeof e&&t&&"string"===typeof t.as){var n=t.as,r=c(n,t.crossOrigin),a="string"===typeof t.integrity?t.integrity:void 0,i="string"===typeof t.fetchPriority?t.fetchPriority:void 0;"style"===n?o.d.S(e,"string"===typeof t.precedence?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:i}):"script"===n&&o.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:i,nonce:"string"===typeof t.nonce?t.nonce:void 0})}},t.preinitModule=function(e,t){if("string"===typeof e)if("object"===typeof t&&null!==t){if(null==t.as||"script"===t.as){var n=c(t.as,t.crossOrigin);o.d.M(e,{crossOrigin:n,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0})}}else null==t&&o.d.M(e)},t.preload=function(e,t){if("string"===typeof e&&"object"===typeof t&&null!==t&&"string"===typeof t.as){var n=t.as,r=c(n,t.crossOrigin);o.d.L(e,n,{crossOrigin:r,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0,type:"string"===typeof t.type?t.type:void 0,fetchPriority:"string"===typeof t.fetchPriority?t.fetchPriority:void 0,referrerPolicy:"string"===typeof t.referrerPolicy?t.referrerPolicy:void 0,imageSrcSet:"string"===typeof t.imageSrcSet?t.imageSrcSet:void 0,imageSizes:"string"===typeof t.imageSizes?t.imageSizes:void 0,media:"string"===typeof t.media?t.media:void 0})}},t.preloadModule=function(e,t){if("string"===typeof e)if(t){var n=c(t.as,t.crossOrigin);o.d.m(e,{as:"string"===typeof t.as&&"script"!==t.as?t.as:void 0,crossOrigin:n,integrity:"string"===typeof t.integrity?t.integrity:void 0})}else o.d.m(e)},t.requestFormReset=function(e){o.d.r(e)},t.unstable_batchedUpdates=function(e,t){return e(t)},t.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},t.useFormStatus=function(){return s.H.useHostTransitionStatus()},t.version="19.1.1"},799:(e,t)=>{"use strict";var n=Symbol.for("react.transitional.element");function r(e,t,r){var a=null;if(void 0!==r&&(a=""+r),void 0!==t.key&&(a=""+t.key),"key"in t)for(var i in r={},t)"key"!==i&&(r[i]=t[i]);else r=t;return t=r.ref,{$$typeof:n,type:e,key:a,ref:void 0!==t?t:null,props:r}}Symbol.for("react.fragment"),t.jsx=r,t.jsxs=r},853:(e,t,n)=>{"use strict";e.exports=n(896)},896:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,a=e[r];if(!(0<i(a,t)))break e;e[r]=t,e[n]=a,n=r}}function r(e){return 0===e.length?null:e[0]}function a(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,a=e.length,o=a>>>1;r<o;){var l=2*(r+1)-1,s=e[l],c=l+1,u=e[c];if(0>i(s,n))c<a&&0>i(u,s)?(e[r]=u,e[c]=n,r=c):(e[r]=s,e[l]=n,r=l);else{if(!(c<a&&0>i(u,n)))break e;e[r]=u,e[c]=n,r=c}}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if(t.unstable_now=void 0,"object"===typeof performance&&"function"===typeof performance.now){var o=performance;t.unstable_now=function(){return o.now()}}else{var l=Date,s=l.now();t.unstable_now=function(){return l.now()-s}}var c=[],u=[],d=1,f=null,h=3,p=!1,m=!1,g=!1,b=!1,v="function"===typeof setTimeout?setTimeout:null,y="function"===typeof clearTimeout?clearTimeout:null,x="undefined"!==typeof setImmediate?setImmediate:null;function w(e){for(var t=r(u);null!==t;){if(null===t.callback)a(u);else{if(!(t.startTime<=e))break;a(u),t.sortIndex=t.expirationTime,n(c,t)}t=r(u)}}function k(e){if(g=!1,w(e),!m)if(null!==r(c))m=!0,S||(S=!0,j());else{var t=r(u);null!==t&&R(k,t.startTime-e)}}var j,S=!1,E=-1,C=5,A=-1;function z(){return!!b||!(t.unstable_now()-A<C)}function T(){if(b=!1,S){var e=t.unstable_now();A=e;var n=!0;try{e:{m=!1,g&&(g=!1,y(E),E=-1),p=!0;var i=h;try{t:{for(w(e),f=r(c);null!==f&&!(f.expirationTime>e&&z());){var o=f.callback;if("function"===typeof o){f.callback=null,h=f.priorityLevel;var l=o(f.expirationTime<=e);if(e=t.unstable_now(),"function"===typeof l){f.callback=l,w(e),n=!0;break t}f===r(c)&&a(c),w(e)}else a(c);f=r(c)}if(null!==f)n=!0;else{var s=r(u);null!==s&&R(k,s.startTime-e),n=!1}}break e}finally{f=null,h=i,p=!1}n=void 0}}finally{n?j():S=!1}}}if("function"===typeof x)j=function(){x(T)};else if("undefined"!==typeof MessageChannel){var M=new MessageChannel,P=M.port2;M.port1.onmessage=T,j=function(){P.postMessage(null)}}else j=function(){v(T,0)};function R(e,n){E=v(function(){e(t.unstable_now())},n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_next=function(e){switch(h){case 1:case 2:case 3:var t=3;break;default:t=h}var n=h;h=t;try{return e()}finally{h=n}},t.unstable_requestPaint=function(){b=!0},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=h;h=e;try{return t()}finally{h=n}},t.unstable_scheduleCallback=function(e,a,i){var o=t.unstable_now();switch("object"===typeof i&&null!==i?i="number"===typeof(i=i.delay)&&0<i?o+i:o:i=o,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return e={id:d++,callback:a,priorityLevel:e,startTime:i,expirationTime:l=i+l,sortIndex:-1},i>o?(e.sortIndex=i,n(u,e),null===r(c)&&e===r(u)&&(g?(y(E),E=-1):g=!0,R(k,i-o))):(e.sortIndex=l,n(c,e),m||p||(m=!0,S||(S=!0,j()))),e},t.unstable_shouldYield=z,t.unstable_wrapCallback=function(e){var t=h;return function(){var n=h;h=t;try{return e.apply(this,arguments)}finally{h=n}}}},950:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(672)}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce((t,r)=>(n.f[r](e,t),t),[])),n.u=e=>"static/js/"+e+".ca8a245c.chunk.js",n.miniCssF=e=>{},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={},t="mukaffimoin28.github.io:";n.l=(r,a,i,o)=>{if(e[r])e[r].push(a);else{var l,s;if(void 0!==i)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+i){l=d;break}}l||(s=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",t+i),l.src=r),e[r]=[a];var f=(t,n)=>{l.onerror=l.onload=null,clearTimeout(h);var a=e[r];if(delete e[r],l.parentNode&&l.parentNode.removeChild(l),a&&a.forEach(e=>e(n)),t)return t(n)},h=setTimeout(f.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=f.bind(null,l.onerror),l.onload=f.bind(null,l.onload),s&&document.head.appendChild(l)}}})(),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/",(()=>{var e={792:0};n.f.j=(t,r)=>{var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else{var i=new Promise((n,r)=>a=e[t]=[n,r]);r.push(a[2]=i);var o=n.p+n.u(t),l=new Error;n.l(o,r=>{if(n.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var i=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;l.message="Loading chunk "+t+" failed.\n("+i+": "+o+")",l.name="ChunkLoadError",l.type=i,l.request=o,a[1](l)}},"chunk-"+t,t)}};var t=(t,r)=>{var a,i,o=r[0],l=r[1],s=r[2],c=0;if(o.some(t=>0!==e[t])){for(a in l)n.o(l,a)&&(n.m[a]=l[a]);if(s)s(n)}for(t&&t(r);c<o.length;c++)i=o[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0},r=self.webpackChunkmukaffimoin28_github_io=self.webpackChunkmukaffimoin28_github_io||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),n.nc=void 0,(()=>{"use strict";var e=n(43),t=n(391),r="popstate";function a(){return d(function(e,t){let{pathname:n,search:r,hash:a}=e.location;return s("",{pathname:n,search:r,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||"default")},function(e,t){return"string"===typeof t?t:c(t)},null,arguments.length>0&&void 0!==arguments[0]?arguments[0]:{})}function i(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function o(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function l(e,t){return{usr:e.state,key:e.key,idx:t}}function s(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3?arguments[3]:void 0;return{pathname:"string"===typeof e?e:e.pathname,search:"",hash:"",..."string"===typeof t?u(t):t,state:n,key:t&&t.key||r||Math.random().toString(36).substring(2,10)}}function c(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function u(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function d(e,t,n){let a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},{window:i=document.defaultView,v5Compat:o=!1}=a,c=i.history,u="POP",d=null,h=p();function p(){return(c.state||{idx:null}).idx}function m(){u="POP";let e=p(),t=null==e?null:e-h;h=e,d&&d({action:u,location:b.location,delta:t})}function g(e){return f(e)}null==h&&(h=0,c.replaceState({...c.state,idx:h},""));let b={get action(){return u},get location(){return e(i,c)},listen(e){if(d)throw new Error("A history only accepts one active listener");return i.addEventListener(r,m),d=e,()=>{i.removeEventListener(r,m),d=null}},createHref:e=>t(i,e),createURL:g,encodeLocation(e){let t=g(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){u="PUSH";let r=s(b.location,e,t);n&&n(r,e),h=p()+1;let a=l(r,h),f=b.createHref(r);try{c.pushState(a,"",f)}catch(m){if(m instanceof DOMException&&"DataCloneError"===m.name)throw m;i.location.assign(f)}o&&d&&d({action:u,location:b.location,delta:1})},replace:function(e,t){u="REPLACE";let r=s(b.location,e,t);n&&n(r,e),h=p();let a=l(r,h),i=b.createHref(r);c.replaceState(a,"",i),o&&d&&d({action:u,location:b.location,delta:0})},go:e=>c.go(e)};return b}function f(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n="http://localhost";"undefined"!==typeof window&&(n="null"!==window.location.origin?window.location.origin:window.location.href),i(n,"No window.location.(origin|href) available to create URL");let r="string"===typeof e?e:c(e);return r=r.replace(/ $/,"%20"),!t&&r.startsWith("//")&&(r=n+r),new URL(r,n)}new WeakMap;function h(e,t){return p(e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:"/",!1)}function p(e,t,n,r){let a=T(("string"===typeof t?u(t):t).pathname||"/",n);if(null==a)return null;let i=m(e);!function(e){e.sort((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n]);return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)))}(i);let o=null;for(let l=0;null==o&&l<i.length;++l){let e=z(a);o=E(i[l],e,r)}return o}function m(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",a=(e,a,o)=>{let l={relativePath:void 0===o?e.path||"":o,caseSensitive:!0===e.caseSensitive,childrenIndex:a,route:e};l.relativePath.startsWith("/")&&(i(l.relativePath.startsWith(r),`Absolute route path "${l.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),l.relativePath=l.relativePath.slice(r.length));let s=_([r,l.relativePath]),c=n.concat(l);e.children&&e.children.length>0&&(i(!0!==e.index,`Index routes must not have child routes. Please remove all child routes from route path "${s}".`),m(e.children,t,c,s)),(null!=e.path||e.index)&&t.push({path:s,score:S(s,e.index),routesMeta:c})};return e.forEach((e,t)=>{if(""!==e.path&&e.path?.includes("?"))for(let n of g(e.path))a(e,t,n);else a(e,t)}),t}function g(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,a=n.endsWith("?"),i=n.replace(/\?$/,"");if(0===r.length)return a?[i,""]:[i];let o=g(r.join("/")),l=[];return l.push(...o.map(e=>""===e?i:[i,e].join("/"))),a&&l.push(...o),l.map(t=>e.startsWith("/")&&""===t?"/":t)}var b=/^:[\w-]+$/,v=3,y=2,x=1,w=10,k=-2,j=e=>"*"===e;function S(e,t){let n=e.split("/"),r=n.length;return n.some(j)&&(r+=k),t&&(r+=y),n.filter(e=>!j(e)).reduce((e,t)=>e+(b.test(t)?v:""===t?x:w),r)}function E(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],{routesMeta:r}=e,a={},i="/",o=[];for(let l=0;l<r.length;++l){let e=r[l],s=l===r.length-1,c="/"===i?t:t.slice(i.length)||"/",u=C({path:e.relativePath,caseSensitive:e.caseSensitive,end:s},c),d=e.route;if(!u&&s&&n&&!r[r.length-1].route.index&&(u=C({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},c)),!u)return null;Object.assign(a,u.params),o.push({params:a,pathname:_([i,u.pathname]),pathnameBase:L(_([i,u.pathnameBase])),route:d}),"/"!==u.pathnameBase&&(i=_([i,u.pathnameBase]))}return o}function C(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=A(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let i=a[0],o=i.replace(/(.)\/+$/,"$1"),l=a.slice(1);return{params:r.reduce((e,t,n)=>{let{paramName:r,isOptional:a}=t;if("*"===r){let e=l[n]||"";o=i.slice(0,i.length-e.length).replace(/(.)\/+$/,"$1")}const s=l[n];return e[r]=a&&!s?void 0:(s||"").replace(/%2F/g,"/"),e},{}),pathname:i,pathnameBase:o,pattern:e}}function A(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];o("*"===e||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),a+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":""!==e&&"/"!==e&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),r]}function z(e){try{return e.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(t){return o(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function T(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function M(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function P(e){return e.filter((e,t)=>0===t||e.route.path&&e.route.path.length>0)}function R(e){let t=P(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function N(e,t,n){let r,a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];"string"===typeof e?r=u(e):(r={...e},i(!r.pathname||!r.pathname.includes("?"),M("?","pathname","search",r)),i(!r.pathname||!r.pathname.includes("#"),M("#","pathname","hash",r)),i(!r.search||!r.search.includes("#"),M("#","search","hash",r)));let o,l=""===e||""===r.pathname,s=l?"/":r.pathname;if(null==s)o=n;else{let e=t.length-1;if(!a&&s.startsWith("..")){let t=s.split("/");for(;".."===t[0];)t.shift(),e-=1;r.pathname=t.join("/")}o=e>=0?t[e]:"/"}let c=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",{pathname:n,search:r="",hash:a=""}="string"===typeof e?u(e):e,i=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)}),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:i,search:D(r),hash:I(a)}}(r,o),d=s&&"/"!==s&&s.endsWith("/"),f=(l||"."===s)&&n.endsWith("/");return c.pathname.endsWith("/")||!d&&!f||(c.pathname+="/"),c}var _=e=>e.join("/").replace(/\/\/+/g,"/"),L=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),D=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",I=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";function F(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}var B=["POST","PUT","PATCH","DELETE"],O=(new Set(B),["GET",...B]);new Set(O),Symbol("ResetLoaderData");var $=e.createContext(null);$.displayName="DataRouter";var U=e.createContext(null);U.displayName="DataRouterState";var H=e.createContext(!1);var W=e.createContext({isTransitioning:!1});W.displayName="ViewTransition";var V=e.createContext(new Map);V.displayName="Fetchers";var q=e.createContext(null);q.displayName="Await";var G=e.createContext(null);G.displayName="Navigation";var K=e.createContext(null);K.displayName="Location";var Y=e.createContext({outlet:null,matches:[],isDataRoute:!1});Y.displayName="Route";var Q=e.createContext(null);Q.displayName="RouteError";function J(){return null!=e.useContext(K)}function X(){return i(J(),"useLocation() may be used only in the context of a <Router> component."),e.useContext(K).location}var Z="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function ee(t){e.useContext(G).static||e.useLayoutEffect(t)}function te(){let{isDataRoute:t}=e.useContext(Y);return t?function(){let{router:t}=ue("useNavigate"),n=fe("useNavigate"),r=e.useRef(!1);ee(()=>{r.current=!0});let a=e.useCallback(async function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};o(r.current,Z),r.current&&("number"===typeof e?t.navigate(e):await t.navigate(e,{fromRouteId:n,...a}))},[t,n]);return a}():function(){i(J(),"useNavigate() may be used only in the context of a <Router> component.");let t=e.useContext($),{basename:n,navigator:r}=e.useContext(G),{matches:a}=e.useContext(Y),{pathname:l}=X(),s=JSON.stringify(R(a)),c=e.useRef(!1);ee(()=>{c.current=!0});let u=e.useCallback(function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(o(c.current,Z),!c.current)return;if("number"===typeof e)return void r.go(e);let i=N(e,JSON.parse(s),l,"path"===a.relative);null==t&&"/"!==n&&(i.pathname="/"===i.pathname?n:_([n,i.pathname])),(a.replace?r.replace:r.push)(i,a.state,a)},[n,r,s,l,t]);return u}()}e.createContext(null);function ne(t){let{relative:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{matches:r}=e.useContext(Y),{pathname:a}=X(),i=JSON.stringify(R(r));return e.useMemo(()=>N(t,JSON.parse(i),a,"path"===n),[t,i,a,n])}function re(t,n,r,a){i(J(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l}=e.useContext(G),{matches:s}=e.useContext(Y),c=s[s.length-1],d=c?c.params:{},f=c?c.pathname:"/",p=c?c.pathnameBase:"/",m=c&&c.route;{let e=m&&m.path||"";me(f,!m||e.endsWith("*")||e.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${f}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.\n\nPlease change the parent <Route path="${e}"> to <Route path="${"/"===e?"*":`${e}/*`}">.`)}let g,b=X();if(n){let e="string"===typeof n?u(n):n;i("/"===p||e.pathname?.startsWith(p),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${e.pathname}" was given in the \`location\` prop.`),g=e}else g=b;let v=g.pathname||"/",y=v;if("/"!==p){let e=p.replace(/^\//,"").split("/");y="/"+v.replace(/^\//,"").split("/").slice(e.length).join("/")}let x=h(t,{pathname:y});o(m||null!=x,`No routes matched location "${g.pathname}${g.search}${g.hash}" `),o(null==x||void 0!==x[x.length-1].route.element||void 0!==x[x.length-1].route.Component||void 0!==x[x.length-1].route.lazy,`Matched leaf route at location "${g.pathname}${g.search}${g.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let w=se(x&&x.map(e=>Object.assign({},e,{params:Object.assign({},d,e.params),pathname:_([p,l.encodeLocation?l.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?p:_([p,l.encodeLocation?l.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])})),s,r,a);return n&&w?e.createElement(K.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...g},navigationType:"POP"}},w):w}function ae(){let t=he(),n=F(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),r=t instanceof Error?t.stack:null,a="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:a},o={padding:"2px 4px",backgroundColor:a},l=null;return console.error("Error handled by React Router default ErrorBoundary:",t),l=e.createElement(e.Fragment,null,e.createElement("p",null,"\ud83d\udcbf Hey developer \ud83d\udc4b"),e.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",e.createElement("code",{style:o},"ErrorBoundary")," or"," ",e.createElement("code",{style:o},"errorElement")," prop on your route.")),e.createElement(e.Fragment,null,e.createElement("h2",null,"Unexpected Application Error!"),e.createElement("h3",{style:{fontStyle:"italic"}},n),r?e.createElement("pre",{style:i},r):null,l)}var ie=e.createElement(ae,null),oe=class extends e.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?e.createElement(Y.Provider,{value:this.props.routeContext},e.createElement(Q.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function le(t){let{routeContext:n,match:r,children:a}=t,i=e.useContext($);return i&&i.static&&i.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=r.route.id),e.createElement(Y.Provider,{value:n},a)}function se(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(null==t){if(!r)return null;if(r.errors)t=r.matches;else{if(0!==n.length||r.initialized||!(r.matches.length>0))return null;t=r.matches}}let a=t,o=r?.errors;if(null!=o){let e=a.findIndex(e=>e.route.id&&void 0!==o?.[e.route.id]);i(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),a=a.slice(0,Math.min(a.length,e+1))}let l=!1,s=-1;if(r)for(let e=0;e<a.length;e++){let t=a[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:n}=r,i=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!n||void 0===n[t.route.id]);if(t.route.lazy||i){l=!0,a=s>=0?a.slice(0,s+1):[a[0]];break}}}return a.reduceRight((t,i,c)=>{let u,d=!1,f=null,h=null;r&&(u=o&&i.route.id?o[i.route.id]:void 0,f=i.route.errorElement||ie,l&&(s<0&&0===c?(me("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,h=null):s===c&&(d=!0,h=i.route.hydrateFallbackElement||null)));let p=n.concat(a.slice(0,c+1)),m=()=>{let n;return n=u?f:d?h:i.route.Component?e.createElement(i.route.Component,null):i.route.element?i.route.element:t,e.createElement(le,{match:i,routeContext:{outlet:t,matches:p,isDataRoute:null!=r},children:n})};return r&&(i.route.ErrorBoundary||i.route.errorElement||0===c)?e.createElement(oe,{location:r.location,revalidation:r.revalidation,component:f,error:u,children:m(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):m()},null)}function ce(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ue(t){let n=e.useContext($);return i(n,ce(t)),n}function de(t){let n=e.useContext(U);return i(n,ce(t)),n}function fe(t){let n=function(t){let n=e.useContext(Y);return i(n,ce(t)),n}(t),r=n.matches[n.matches.length-1];return i(r.route.id,`${t} can only be used on routes that contain a unique "id"`),r.route.id}function he(){let t=e.useContext(Q),n=de("useRouteError"),r=fe("useRouteError");return void 0!==t?t:n.errors?.[r]}var pe={};function me(e,t,n){t||pe[e]||(pe[e]=!0,o(!1,n))}var ge={};function be(e,t){e||ge[t]||(ge[t]=!0,console.warn(t))}e.memo(function(e){let{routes:t,future:n,state:r}=e;return re(t,void 0,r,n)});function ve(e){i(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function ye(t){let{basename:n="/",children:r=null,location:a,navigationType:l="POP",navigator:s,static:c=!1}=t;i(!J(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=n.replace(/^\/*/,"/"),f=e.useMemo(()=>({basename:d,navigator:s,static:c,future:{}}),[d,s,c]);"string"===typeof a&&(a=u(a));let{pathname:h="/",search:p="",hash:m="",state:g=null,key:b="default"}=a,v=e.useMemo(()=>{let e=T(h,d);return null==e?null:{location:{pathname:e,search:p,hash:m,state:g,key:b},navigationType:l}},[d,h,p,m,g,b,l]);return o(null!=v,`<Router basename="${d}"> is not able to match the URL "${h}${p}${m}" because it does not start with the basename, so the <Router> won't render anything.`),null==v?null:e.createElement(G.Provider,{value:f},e.createElement(K.Provider,{children:r,value:v}))}function xe(e){let{children:t,location:n}=e;return re(we(t),n)}e.Component;function we(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=[];return e.Children.forEach(t,(t,a)=>{if(!e.isValidElement(t))return;let o=[...n,a];if(t.type===e.Fragment)return void r.push.apply(r,we(t.props.children,o));i(t.type===ve,`[${"string"===typeof t.type?t.type:t.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),i(!t.props.index||!t.props.children,"An index route cannot have child routes.");let l={id:t.props.id||o.join("-"),caseSensitive:t.props.caseSensitive,element:t.props.element,Component:t.props.Component,index:t.props.index,path:t.props.path,loader:t.props.loader,action:t.props.action,hydrateFallbackElement:t.props.hydrateFallbackElement,HydrateFallback:t.props.HydrateFallback,errorElement:t.props.errorElement,ErrorBoundary:t.props.ErrorBoundary,hasErrorBoundary:!0===t.props.hasErrorBoundary||null!=t.props.ErrorBoundary||null!=t.props.errorElement,shouldRevalidate:t.props.shouldRevalidate,handle:t.props.handle,lazy:t.props.lazy};t.props.children&&(l.children=we(t.props.children,o)),r.push(l)}),r}var ke="get",je="application/x-www-form-urlencoded";function Se(e){return null!=e&&"string"===typeof e.tagName}var Ee=null;var Ce=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ae(e){return null==e||Ce.has(e)?e:(o(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${je}"`),null)}function ze(e,t){let n,r,a,i,o;if(Se(l=e)&&"form"===l.tagName.toLowerCase()){let o=e.getAttribute("action");r=o?T(o,t):null,n=e.getAttribute("method")||ke,a=Ae(e.getAttribute("enctype"))||je,i=new FormData(e)}else if(function(e){return Se(e)&&"button"===e.tagName.toLowerCase()}(e)||function(e){return Se(e)&&"input"===e.tagName.toLowerCase()}(e)&&("submit"===e.type||"image"===e.type)){let o=e.form;if(null==o)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let l=e.getAttribute("formaction")||o.getAttribute("action");if(r=l?T(l,t):null,n=e.getAttribute("formmethod")||o.getAttribute("method")||ke,a=Ae(e.getAttribute("formenctype"))||Ae(o.getAttribute("enctype"))||je,i=new FormData(o,e),!function(){if(null===Ee)try{new FormData(document.createElement("form"),0),Ee=!1}catch(e){Ee=!0}return Ee}()){let{name:t,type:n,value:r}=e;if("image"===n){let e=t?`${t}.`:"";i.append(`${e}x`,"0"),i.append(`${e}y`,"0")}else t&&i.append(t,r)}}else{if(Se(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=ke,r=null,a=je,o=e}var l;return i&&"text/plain"===a&&(o=i,i=void 0),{action:r,method:n.toLowerCase(),encType:a,formData:i,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");"undefined"!==typeof window?window:"undefined"!==typeof globalThis&&globalThis;function Te(e){return{__html:e}}function Me(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}Symbol("SingleFetchRedirect");function Pe(e,t,n){let r="string"===typeof e?new URL(e,"undefined"===typeof window?"server://singlefetch/":window.location.origin):e;return"/"===r.pathname?r.pathname=`_root.${n}`:t&&"/"===T(r.pathname,t)?r.pathname=`${t.replace(/\/$/,"")}/_root.${n}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${n}`,r}async function Re(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Ne(e){return null!=e&&"string"===typeof e.page}function _e(e){return null!=e&&(null==e.href?"preload"===e.rel&&"string"===typeof e.imageSrcSet&&"string"===typeof e.imageSizes:"string"===typeof e.rel&&"string"===typeof e.href)}function Le(e,t,n,r,a,i){let o=(e,t)=>!n[t]||e.route.id!==n[t].route.id,l=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith("*")&&n[t].params["*"]!==e.params["*"];return"assets"===i?t.filter((e,t)=>o(e,t)||l(e,t)):"data"===i?t.filter((t,i)=>{let s=r.routes[t.route.id];if(!s||!s.hasLoader)return!1;if(o(t,i)||l(t,i))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if("boolean"===typeof r)return r}return!0}):[]}function De(e,t){let{includeHydrateFallback:n}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return r=e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let a=[r.module];return r.clientActionModule&&(a=a.concat(r.clientActionModule)),r.clientLoaderModule&&(a=a.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(a=a.concat(r.hydrateFallbackModule)),r.imports&&(a=a.concat(r.imports)),a}).flat(1),[...new Set(r)];var r}function Ie(e,t){let n=new Set,r=new Set(t);return e.reduce((e,a)=>{if(t&&!Ne(a)&&"script"===a.as&&a.href&&r.has(a.href))return e;let i=JSON.stringify(function(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}(a));return n.has(i)||(n.add(i),e.push({key:i,link:a})),e},[])}function Fe(e,t){return"lazy"===e.mode&&!0===t}function Be(){let t=e.useContext($);return Me(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function Oe(){let t=e.useContext(U);return Me(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var $e=e.createContext(void 0);function Ue(){let t=e.useContext($e);return Me(t,"You must render this element inside a <HydratedRouter> element"),t}function He(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function We(e,t,n){if(n&&!Ke)return[e[0]];if(t){let n=e.findIndex(e=>void 0!==t[e.route.id]);return e.slice(0,n+1)}return e}$e.displayName="FrameworkContext";function Ve(t){let{page:n,...r}=t,{router:a}=Be(),i=e.useMemo(()=>h(a.routes,n,a.basename),[a.routes,n,a.basename]);return i?e.createElement(Ge,{page:n,matches:i,...r}):null}function qe(t){let{manifest:n,routeModules:r}=Ue(),[a,i]=e.useState([]);return e.useEffect(()=>{let e=!1;return async function(e,t,n){let r=await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await Re(r,n);return e.links?e.links():[]}return[]}));return Ie(r.flat(1).filter(_e).filter(e=>"stylesheet"===e.rel||"preload"===e.rel).map(e=>"stylesheet"===e.rel?{...e,rel:"prefetch",as:"style"}:{...e,rel:"prefetch"}))}(t,n,r).then(t=>{e||i(t)}),()=>{e=!0}},[t,n,r]),a}function Ge(t){let{page:n,matches:r,...a}=t,i=X(),{manifest:o,routeModules:l}=Ue(),{basename:s}=Be(),{loaderData:c,matches:u}=Oe(),d=e.useMemo(()=>Le(n,r,u,o,i,"data"),[n,r,u,o,i]),f=e.useMemo(()=>Le(n,r,u,o,i,"assets"),[n,r,u,o,i]),h=e.useMemo(()=>{if(n===i.pathname+i.search+i.hash)return[];let e=new Set,t=!1;if(r.forEach(n=>{let r=o.routes[n.route.id];r&&r.hasLoader&&(!d.some(e=>e.route.id===n.route.id)&&n.route.id in c&&l[n.route.id]?.shouldRevalidate||r.hasClientLoader?t=!0:e.add(n.route.id))}),0===e.size)return[];let a=Pe(n,s,"data");return t&&e.size>0&&a.searchParams.set("_routes",r.filter(t=>e.has(t.route.id)).map(e=>e.route.id).join(",")),[a.pathname+a.search]},[s,c,i,o,d,r,n,l]),p=e.useMemo(()=>De(f,o),[f,o]),m=qe(f);return e.createElement(e.Fragment,null,h.map(t=>e.createElement("link",{key:t,rel:"prefetch",as:"fetch",href:t,...a})),p.map(t=>e.createElement("link",{key:t,rel:"modulepreload",href:t,...a})),m.map(t=>{let{key:n,link:r}=t;return e.createElement("link",{key:n,...r})}))}var Ke=!1;function Ye(t){let{manifest:n,serverHandoffString:r,isSpaMode:a,renderMeta:i,routeDiscovery:o,ssr:l}=Ue(),{router:s,static:c,staticContext:u}=Be(),{matches:d}=Oe(),f=e.useContext(H),p=Fe(o,l);i&&(i.didRenderScripts=!0);let m=We(d,null,a);e.useEffect(()=>{0},[]);let g=e.useMemo(()=>{if(f)return null;let a=u?`window.__reactRouterContext = ${r};window.__reactRouterContext.stream = new ReadableStream({start(controller){window.__reactRouterContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());`:" ",i=c?`${n.hmr?.runtime?`import ${JSON.stringify(n.hmr.runtime)};`:""}${p?"":`import ${JSON.stringify(n.url)}`};\n${m.map((e,t)=>{let r=`route${t}`,a=n.routes[e.route.id];Me(a,`Route ${e.route.id} not found in manifest`);let{clientActionModule:i,clientLoaderModule:o,clientMiddlewareModule:l,hydrateFallbackModule:s,module:c}=a,u=[...i?[{module:i,varName:`${r}_clientAction`}]:[],...o?[{module:o,varName:`${r}_clientLoader`}]:[],...l?[{module:l,varName:`${r}_clientMiddleware`}]:[],...s?[{module:s,varName:`${r}_HydrateFallback`}]:[],{module:c,varName:`${r}_main`}];return 1===u.length?`import * as ${r} from ${JSON.stringify(c)};`:[u.map(e=>`import * as ${e.varName} from "${e.module}";`).join("\n"),`const ${r} = {${u.map(e=>`...${e.varName}`).join(",")}};`].join("\n")}).join("\n")}\n  ${p?`window.__reactRouterManifest = ${JSON.stringify(function(e,t){let{sri:n,...r}=e,a=new Set(t.state.matches.map(e=>e.route.id)),i=t.state.location.pathname.split("/").filter(Boolean),o=["/"];for(i.pop();i.length>0;)o.push(`/${i.join("/")}`),i.pop();o.forEach(e=>{let n=h(t.routes,e,t.basename);n&&n.forEach(e=>a.add(e.route.id))});let l=[...a].reduce((e,t)=>Object.assign(e,{[t]:r.routes[t]}),{});return{...r,routes:l,sri:!!n||void 0}}(n,s),null,2)};`:""}\n  window.__reactRouterRouteModules = {${m.map((e,t)=>`${JSON.stringify(e.route.id)}:route${t}`).join(",")}};\n\nimport(${JSON.stringify(n.entry.module)});`:" ";return e.createElement(e.Fragment,null,e.createElement("script",{...t,suppressHydrationWarning:!0,dangerouslySetInnerHTML:Te(a),type:void 0}),e.createElement("script",{...t,suppressHydrationWarning:!0,dangerouslySetInnerHTML:Te(i),type:"module",async:!0}))},[]),b=Ke||f?[]:(n.entry.imports.concat(De(m,n,{includeHydrateFallback:!0})),[...new Set(v)]);var v;let y="object"===typeof n.sri?n.sri:{};return be(!f,"The <Scripts /> element is a no-op when using RSC and can be safely removed."),Ke||f?null:e.createElement(e.Fragment,null,"object"===typeof n.sri?e.createElement("script",{"rr-importmap":"",type:"importmap",suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:JSON.stringify({integrity:y})}}):null,p?null:e.createElement("link",{rel:"modulepreload",href:n.url,crossOrigin:t.crossOrigin,integrity:y[n.url],suppressHydrationWarning:!0}),e.createElement("link",{rel:"modulepreload",href:n.entry.module,crossOrigin:t.crossOrigin,integrity:y[n.entry.module],suppressHydrationWarning:!0}),b.map(n=>e.createElement("link",{key:n,rel:"modulepreload",href:n,crossOrigin:t.crossOrigin,integrity:y[n],suppressHydrationWarning:!0})),g)}function Qe(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return e=>{t.forEach(t=>{"function"===typeof t?t(e):null!=t&&(t.current=e)})}}e.Component;function Je(t){let{error:n,isOutsideRemixApp:r}=t;console.error(n);let a,i=e.createElement("script",{dangerouslySetInnerHTML:{__html:'\n        console.log(\n          "\ud83d\udcbf Hey developer \ud83d\udc4b. You can provide a way better UX than this when your app throws errors. Check out https://reactrouter.com/how-to/error-boundary for more information."\n        );\n      '}});if(F(n))return e.createElement(Xe,{title:"Unhandled Thrown Response!"},e.createElement("h1",{style:{fontSize:"24px"}},n.status," ",n.statusText),i);if(n instanceof Error)0;else{let e=null==n?"Unknown Error":"object"===typeof n&&"toString"in n?n.toString():JSON.stringify(n);new Error(e)}return e.createElement(Xe,{title:"Application Error!",isOutsideRemixApp:r},e.createElement("h1",{style:{fontSize:"24px"}},"Application Error"),e.createElement("pre",{style:{padding:"2rem",background:"hsla(10, 50%, 50%, 0.1)",color:"red",overflow:"auto"}},a.stack),i)}function Xe(t){let{title:n,renderScripts:r,isOutsideRemixApp:a,children:i}=t,{routeModules:o}=Ue();return o.root?.Layout&&!a?i:e.createElement("html",{lang:"en"},e.createElement("head",null,e.createElement("meta",{charSet:"utf-8"}),e.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1,viewport-fit=cover"}),e.createElement("title",null,n)),e.createElement("body",null,e.createElement("main",{style:{fontFamily:"system-ui, sans-serif",padding:"2rem"}},i,r?e.createElement(Ye,null):null)))}var Ze="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement;try{Ze&&(window.__reactRouterVersion="7.7.1")}catch(Il){}function et(t){let{basename:n,children:r,window:i}=t,o=e.useRef();null==o.current&&(o.current=a({window:i,v5Compat:!0}));let l=o.current,[s,c]=e.useState({action:l.action,location:l.location}),u=e.useCallback(t=>{e.startTransition(()=>c(t))},[c]);return e.useLayoutEffect(()=>l.listen(u),[l,u]),e.createElement(ye,{basename:n,children:r,location:s.location,navigationType:s.action,navigator:l})}var tt=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,nt=e.forwardRef(function(t,n){let r,{onClick:a,discover:l="render",prefetch:s="none",relative:u,reloadDocument:d,replace:f,state:h,target:p,to:m,preventScrollReset:g,viewTransition:b,...v}=t,{basename:y}=e.useContext(G),x="string"===typeof m&&tt.test(m),w=!1;if("string"===typeof m&&x&&(r=m,Ze))try{let e=new URL(window.location.href),t=m.startsWith("//")?new URL(e.protocol+m):new URL(m),n=T(t.pathname,y);t.origin===e.origin&&null!=n?m=n+t.search+t.hash:w=!0}catch(Il){o(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let k=function(t){let{relative:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};i(J(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:a}=e.useContext(G),{hash:o,pathname:l,search:s}=ne(t,{relative:n}),c=l;return"/"!==r&&(c="/"===l?r:_([r,l])),a.createHref({pathname:c,search:s,hash:o})}(m,{relative:u}),[j,S,E]=function(t,n){let r=e.useContext($e),[a,i]=e.useState(!1),[o,l]=e.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:u,onMouseLeave:d,onTouchStart:f}=n,h=e.useRef(null);e.useEffect(()=>{if("render"===t&&l(!0),"viewport"===t){let e=new IntersectionObserver(e=>{e.forEach(e=>{l(e.isIntersecting)})},{threshold:.5});return h.current&&e.observe(h.current),()=>{e.disconnect()}}},[t]),e.useEffect(()=>{if(a){let e=setTimeout(()=>{l(!0)},100);return()=>{clearTimeout(e)}}},[a]);let p=()=>{i(!0)},m=()=>{i(!1),l(!1)};return r?"intent"!==t?[o,h,{}]:[o,h,{onFocus:He(s,p),onBlur:He(c,m),onMouseEnter:He(u,p),onMouseLeave:He(d,m),onTouchStart:He(f,p)}]:[!1,h,{}]}(s,v),C=function(t){let{target:n,replace:r,state:a,preventScrollReset:i,relative:o,viewTransition:l}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=te(),u=X(),d=ne(t,{relative:o});return e.useCallback(e=>{if(function(e,t){return 0===e.button&&(!t||"_self"===t)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)}(e,n)){e.preventDefault();let n=void 0!==r?r:c(u)===c(d);s(t,{replace:n,state:a,preventScrollReset:i,relative:o,viewTransition:l})}},[u,s,d,r,a,n,t,i,o,l])}(m,{replace:f,state:h,target:p,preventScrollReset:g,relative:u,viewTransition:b});let A=e.createElement("a",{...v,...E,href:r||k,onClick:w||d?a:function(e){a&&a(e),e.defaultPrevented||C(e)},ref:Qe(n,S),target:p,"data-discover":x||"render"!==l?void 0:"true"});return j&&!x?e.createElement(e.Fragment,null,A,e.createElement(Ve,{page:k})):A});nt.displayName="Link",e.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:a=!1,className:o="",end:l=!1,style:s,to:c,viewTransition:u,children:d,...f}=t,h=ne(c,{relative:f.relative}),p=X(),m=e.useContext(U),{navigator:g,basename:b}=e.useContext(G),v=null!=m&&function(t){let{relative:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.useContext(W);i(null!=r,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=it("useViewTransitionState"),o=ne(t,{relative:n});if(!r.isTransitioning)return!1;let l=T(r.currentLocation.pathname,a)||r.currentLocation.pathname,s=T(r.nextLocation.pathname,a)||r.nextLocation.pathname;return null!=C(o.pathname,s)||null!=C(o.pathname,l)}(h)&&!0===u,y=g.encodeLocation?g.encodeLocation(h).pathname:h.pathname,x=p.pathname,w=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;a||(x=x.toLowerCase(),w=w?w.toLowerCase():null,y=y.toLowerCase()),w&&b&&(w=T(w,b)||w);const k="/"!==y&&y.endsWith("/")?y.length-1:y.length;let j,S=x===y||!l&&x.startsWith(y)&&"/"===x.charAt(k),E=null!=w&&(w===y||!l&&w.startsWith(y)&&"/"===w.charAt(y.length)),A={isActive:S,isPending:E,isTransitioning:v},z=S?r:void 0;j="function"===typeof o?o(A):[o,S?"active":null,E?"pending":null,v?"transitioning":null].filter(Boolean).join(" ");let M="function"===typeof s?s(A):s;return e.createElement(nt,{...f,"aria-current":z,className:j,ref:n,style:M,to:c,viewTransition:u},"function"===typeof d?d(A):d)}).displayName="NavLink";var rt=e.forwardRef((t,n)=>{let{discover:r="render",fetcherKey:a,navigate:o,reloadDocument:l,replace:s,state:u,method:d=ke,action:f,onSubmit:h,relative:p,preventScrollReset:m,viewTransition:g,...b}=t,v=st(),y=function(t){let{relative:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{basename:r}=e.useContext(G),a=e.useContext(Y);i(a,"useFormAction must be used inside a RouteContext");let[o]=a.matches.slice(-1),l={...ne(t||".",{relative:n})},s=X();if(null==t){l.search=s.search;let e=new URLSearchParams(l.search),t=e.getAll("index"),n=t.some(e=>""===e);if(n){e.delete("index"),t.filter(e=>e).forEach(t=>e.append("index",t));let n=e.toString();l.search=n?`?${n}`:""}}t&&"."!==t||!o.route.index||(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index");"/"!==r&&(l.pathname="/"===l.pathname?r:_([r,l.pathname]));return c(l)}(f,{relative:p}),x="get"===d.toLowerCase()?"get":"post",w="string"===typeof f&&tt.test(f);return e.createElement("form",{ref:n,method:x,action:y,onSubmit:l?h:e=>{if(h&&h(e),e.defaultPrevented)return;e.preventDefault();let t=e.nativeEvent.submitter,n=t?.getAttribute("formmethod")||d;v(t||e.currentTarget,{fetcherKey:a,method:n,navigate:o,replace:s,state:u,relative:p,preventScrollReset:m,viewTransition:g})},...b,"data-discover":w||"render"!==r?void 0:"true"})});function at(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function it(t){let n=e.useContext($);return i(n,at(t)),n}rt.displayName="Form";var ot=0,lt=()=>`__${String(++ot)}__`;function st(){let{router:t}=it("useSubmit"),{basename:n}=e.useContext(G),r=fe("useRouteId");return e.useCallback(async function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{action:i,method:o,encType:l,formData:s,body:c}=ze(e,n);if(!1===a.navigate){let e=a.fetcherKey||lt();await t.fetch(e,r,a.action||i,{preventScrollReset:a.preventScrollReset,formData:s,body:c,formMethod:a.method||o,formEncType:a.encType||l,flushSync:a.flushSync})}else await t.navigate(a.action||i,{preventScrollReset:a.preventScrollReset,formData:s,body:c,formMethod:a.method||o,formEncType:a.encType||l,replace:a.replace,state:a.state,fromRouteId:r,flushSync:a.flushSync,viewTransition:a.viewTransition})},[t,n,r])}var ct=function(){return ct=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},ct.apply(this,arguments)};Object.create;function ut(e,t,n){if(n||2===arguments.length)for(var r,a=0,i=t.length;a<i;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var dt=n(324),ft=n.n(dt),ht="-ms-",pt="-moz-",mt="-webkit-",gt="comm",bt="rule",vt="decl",yt="@keyframes",xt=Math.abs,wt=String.fromCharCode,kt=Object.assign;function jt(e){return e.trim()}function St(e,t){return(e=t.exec(e))?e[0]:e}function Et(e,t,n){return e.replace(t,n)}function Ct(e,t,n){return e.indexOf(t,n)}function At(e,t){return 0|e.charCodeAt(t)}function zt(e,t,n){return e.slice(t,n)}function Tt(e){return e.length}function Mt(e){return e.length}function Pt(e,t){return t.push(e),e}function Rt(e,t){return e.filter(function(e){return!St(e,t)})}var Nt=1,_t=1,Lt=0,Dt=0,It=0,Ft="";function Bt(e,t,n,r,a,i,o,l){return{value:e,root:t,parent:n,type:r,props:a,children:i,line:Nt,column:_t,length:o,return:"",siblings:l}}function Ot(e,t){return kt(Bt("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function $t(e){for(;e.root;)e=Ot(e.root,{children:[e]});Pt(e,e.siblings)}function Ut(){return It=Dt>0?At(Ft,--Dt):0,_t--,10===It&&(_t=1,Nt--),It}function Ht(){return It=Dt<Lt?At(Ft,Dt++):0,_t++,10===It&&(_t=1,Nt++),It}function Wt(){return At(Ft,Dt)}function Vt(){return Dt}function qt(e,t){return zt(Ft,e,t)}function Gt(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Kt(e){return Nt=_t=1,Lt=Tt(Ft=e),Dt=0,[]}function Yt(e){return Ft="",e}function Qt(e){return jt(qt(Dt-1,Zt(91===e?e+2:40===e?e+1:e)))}function Jt(e){for(;(It=Wt())&&It<33;)Ht();return Gt(e)>2||Gt(It)>3?"":" "}function Xt(e,t){for(;--t&&Ht()&&!(It<48||It>102||It>57&&It<65||It>70&&It<97););return qt(e,Vt()+(t<6&&32==Wt()&&32==Ht()))}function Zt(e){for(;Ht();)switch(It){case e:return Dt;case 34:case 39:34!==e&&39!==e&&Zt(It);break;case 40:41===e&&Zt(e);break;case 92:Ht()}return Dt}function en(e,t){for(;Ht()&&e+It!==57&&(e+It!==84||47!==Wt()););return"/*"+qt(t,Dt-1)+"*"+wt(47===e?e:Ht())}function tn(e){for(;!Gt(Wt());)Ht();return qt(e,Dt)}function nn(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function rn(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case vt:return e.return=e.return||e.value;case gt:return"";case yt:return e.return=e.value+"{"+nn(e.children,r)+"}";case bt:if(!Tt(e.value=e.props.join(",")))return""}return Tt(n=nn(e.children,r))?e.return=e.value+"{"+n+"}":""}function an(e,t,n){switch(function(e,t){return 45^At(e,0)?(((t<<2^At(e,0))<<2^At(e,1))<<2^At(e,2))<<2^At(e,3):0}(e,t)){case 5103:return mt+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return mt+e+e;case 4789:return pt+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return mt+e+pt+e+ht+e+e;case 5936:switch(At(e,t+11)){case 114:return mt+e+ht+Et(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return mt+e+ht+Et(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return mt+e+ht+Et(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return mt+e+ht+e+e;case 6165:return mt+e+ht+"flex-"+e+e;case 5187:return mt+e+Et(e,/(\w+).+(:[^]+)/,mt+"box-$1$2"+ht+"flex-$1$2")+e;case 5443:return mt+e+ht+"flex-item-"+Et(e,/flex-|-self/g,"")+(St(e,/flex-|baseline/)?"":ht+"grid-row-"+Et(e,/flex-|-self/g,""))+e;case 4675:return mt+e+ht+"flex-line-pack"+Et(e,/align-content|flex-|-self/g,"")+e;case 5548:return mt+e+ht+Et(e,"shrink","negative")+e;case 5292:return mt+e+ht+Et(e,"basis","preferred-size")+e;case 6060:return mt+"box-"+Et(e,"-grow","")+mt+e+ht+Et(e,"grow","positive")+e;case 4554:return mt+Et(e,/([^-])(transform)/g,"$1"+mt+"$2")+e;case 6187:return Et(Et(Et(e,/(zoom-|grab)/,mt+"$1"),/(image-set)/,mt+"$1"),e,"")+e;case 5495:case 3959:return Et(e,/(image-set\([^]*)/,mt+"$1$`$1");case 4968:return Et(Et(e,/(.+:)(flex-)?(.*)/,mt+"box-pack:$3"+ht+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+mt+e+e;case 4200:if(!St(e,/flex-|baseline/))return ht+"grid-column-align"+zt(e,t)+e;break;case 2592:case 3360:return ht+Et(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,St(e.props,/grid-\w+-end/)})?~Ct(e+(n=n[t].value),"span",0)?e:ht+Et(e,"-start","")+e+ht+"grid-row-span:"+(~Ct(n,"span",0)?St(n,/\d+/):+St(n,/\d+/)-+St(e,/\d+/))+";":ht+Et(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(e){return St(e.props,/grid-\w+-start/)})?e:ht+Et(Et(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Et(e,/(.+)-inline(.+)/,mt+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Tt(e)-1-t>6)switch(At(e,t+1)){case 109:if(45!==At(e,t+4))break;case 102:return Et(e,/(.+:)(.+)-([^]+)/,"$1"+mt+"$2-$3$1"+pt+(108==At(e,t+3)?"$3":"$2-$3"))+e;case 115:return~Ct(e,"stretch",0)?an(Et(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return Et(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,a,i,o,l){return ht+n+":"+r+l+(a?ht+n+"-span:"+(i?o:+o-+r)+l:"")+e});case 4949:if(121===At(e,t+6))return Et(e,":",":"+mt)+e;break;case 6444:switch(At(e,45===At(e,14)?18:11)){case 120:return Et(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+mt+(45===At(e,14)?"inline-":"")+"box$3$1"+mt+"$2$3$1"+ht+"$2box$3")+e;case 100:return Et(e,":",":"+ht)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Et(e,"scroll-","scroll-snap-")+e}return e}function on(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case vt:return void(e.return=an(e.value,e.length,n));case yt:return nn([Ot(e,{value:Et(e.value,"@","@"+mt)})],r);case bt:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,function(t){switch(St(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":$t(Ot(e,{props:[Et(t,/:(read-\w+)/,":-moz-$1")]})),$t(Ot(e,{props:[t]})),kt(e,{props:Rt(n,r)});break;case"::placeholder":$t(Ot(e,{props:[Et(t,/:(plac\w+)/,":"+mt+"input-$1")]})),$t(Ot(e,{props:[Et(t,/:(plac\w+)/,":-moz-$1")]})),$t(Ot(e,{props:[Et(t,/:(plac\w+)/,ht+"input-$1")]})),$t(Ot(e,{props:[t]})),kt(e,{props:Rt(n,r)})}return""})}}function ln(e){return Yt(sn("",null,null,null,[""],e=Kt(e),0,[0],e))}function sn(e,t,n,r,a,i,o,l,s){for(var c=0,u=0,d=o,f=0,h=0,p=0,m=1,g=1,b=1,v=0,y="",x=a,w=i,k=r,j=y;g;)switch(p=v,v=Ht()){case 40:if(108!=p&&58==At(j,d-1)){-1!=Ct(j+=Et(Qt(v),"&","&\f"),"&\f",xt(c?l[c-1]:0))&&(b=-1);break}case 34:case 39:case 91:j+=Qt(v);break;case 9:case 10:case 13:case 32:j+=Jt(p);break;case 92:j+=Xt(Vt()-1,7);continue;case 47:switch(Wt()){case 42:case 47:Pt(un(en(Ht(),Vt()),t,n,s),s);break;default:j+="/"}break;case 123*m:l[c++]=Tt(j)*b;case 125*m:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:-1==b&&(j=Et(j,/\f/g,"")),h>0&&Tt(j)-d&&Pt(h>32?dn(j+";",r,n,d-1,s):dn(Et(j," ","")+";",r,n,d-2,s),s);break;case 59:j+=";";default:if(Pt(k=cn(j,t,n,c,u,a,l,y,x=[],w=[],d,i),i),123===v)if(0===u)sn(j,t,k,k,x,i,d,l,w);else switch(99===f&&110===At(j,3)?100:f){case 100:case 108:case 109:case 115:sn(e,k,k,r&&Pt(cn(e,k,k,0,0,a,l,y,a,x=[],d,w),w),a,w,d,l,r?x:w);break;default:sn(j,k,k,k,[""],w,0,l,w)}}c=u=h=0,m=b=1,y=j="",d=o;break;case 58:d=1+Tt(j),h=p;default:if(m<1)if(123==v)--m;else if(125==v&&0==m++&&125==Ut())continue;switch(j+=wt(v),v*m){case 38:b=u>0?1:(j+="\f",-1);break;case 44:l[c++]=(Tt(j)-1)*b,b=1;break;case 64:45===Wt()&&(j+=Qt(Ht())),f=Wt(),u=d=Tt(y=j+=tn(Vt())),v++;break;case 45:45===p&&2==Tt(j)&&(m=0)}}return i}function cn(e,t,n,r,a,i,o,l,s,c,u,d){for(var f=a-1,h=0===a?i:[""],p=Mt(h),m=0,g=0,b=0;m<r;++m)for(var v=0,y=zt(e,f+1,f=xt(g=o[m])),x=e;v<p;++v)(x=jt(g>0?h[v]+" "+y:Et(y,/&\f/g,h[v])))&&(s[b++]=x);return Bt(e,t,n,0===a?bt:l,s,c,u,d)}function un(e,t,n,r){return Bt(e,t,n,gt,wt(It),zt(e,2,-2),0,r)}function dn(e,t,n,r,a){return Bt(e,t,n,vt,zt(e,0,r),zt(e,r+1,-1),r,a)}var fn={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},hn="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",pn="active",mn="data-styled-version",gn="6.1.19",bn="/*!sc*/\n",vn="undefined"!=typeof window&&"undefined"!=typeof document,yn=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)),xn={},wn=(new Set,Object.freeze([])),kn=Object.freeze({});function jn(e,t,n){return void 0===n&&(n=kn),e.theme!==n.theme&&e.theme||t||n.theme}var Sn=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),En=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Cn=/(^-|-$)/g;function An(e){return e.replace(En,"-").replace(Cn,"")}var zn=/(a)(d)/gi,Tn=function(e){return String.fromCharCode(e+(e>25?39:97))};function Mn(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Tn(t%52)+n;return(Tn(t%52)+n).replace(zn,"$1-$2")}var Pn,Rn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Nn=function(e){return Rn(5381,e)};function _n(e){return Mn(Nn(e)>>>0)}function Ln(e){return e.displayName||e.name||"Component"}function Dn(e){return"string"==typeof e&&!0}var In="function"==typeof Symbol&&Symbol.for,Fn=In?Symbol.for("react.memo"):60115,Bn=In?Symbol.for("react.forward_ref"):60112,On={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},$n={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Un={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Hn=((Pn={})[Bn]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Pn[Fn]=Un,Pn);function Wn(e){return("type"in(t=e)&&t.type.$$typeof)===Fn?Un:"$$typeof"in e?Hn[e.$$typeof]:On;var t}var Vn=Object.defineProperty,qn=Object.getOwnPropertyNames,Gn=Object.getOwnPropertySymbols,Kn=Object.getOwnPropertyDescriptor,Yn=Object.getPrototypeOf,Qn=Object.prototype;function Jn(e,t,n){if("string"!=typeof t){if(Qn){var r=Yn(t);r&&r!==Qn&&Jn(e,r,n)}var a=qn(t);Gn&&(a=a.concat(Gn(t)));for(var i=Wn(e),o=Wn(t),l=0;l<a.length;++l){var s=a[l];if(!(s in $n||n&&n[s]||o&&s in o||i&&s in i)){var c=Kn(t,s);try{Vn(e,s,c)}catch(e){}}}}return e}function Xn(e){return"function"==typeof e}function Zn(e){return"object"==typeof e&&"styledComponentId"in e}function er(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function tr(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function nr(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function rr(e,t,n){if(void 0===n&&(n=!1),!n&&!nr(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=rr(e[r],t[r]);else if(nr(t))for(var r in t)e[r]=rr(e[r],t[r]);return e}function ar(e,t){Object.defineProperty(e,"toString",{value:t})}function ir(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var or=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,a=r;e>=a;)if((a<<=1)<0)throw ir(16,"".concat(e));this.groupSizes=new Uint32Array(a),this.groupSizes.set(n),this.length=a;for(var i=r;i<a;i++)this.groupSizes[i]=0}for(var o=this.indexOfGroup(e+1),l=(i=0,t.length);i<l;i++)this.tag.insertRule(o,t[i])&&(this.groupSizes[e]++,o++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var a=n;a<r;a++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),a=r+n,i=r;i<a;i++)t+="".concat(this.tag.getRule(i)).concat(bn);return t},e}(),lr=new Map,sr=new Map,cr=1,ur=function(e){if(lr.has(e))return lr.get(e);for(;sr.has(cr);)cr++;var t=cr++;return lr.set(e,t),sr.set(t,e),t},dr=function(e,t){cr=t+1,lr.set(e,t),sr.set(t,e)},fr="style[".concat(hn,"][").concat(mn,'="').concat(gn,'"]'),hr=new RegExp("^".concat(hn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),pr=function(e,t,n){for(var r,a=n.split(","),i=0,o=a.length;i<o;i++)(r=a[i])&&e.registerName(t,r)},mr=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(bn),a=[],i=0,o=r.length;i<o;i++){var l=r[i].trim();if(l){var s=l.match(hr);if(s){var c=0|parseInt(s[1],10),u=s[2];0!==c&&(dr(u,c),pr(e,u,s[3]),e.getTag().insertRules(c,a)),a.length=0}else a.push(l)}}},gr=function(e){for(var t=document.querySelectorAll(fr),n=0,r=t.length;n<r;n++){var a=t[n];a&&a.getAttribute(hn)!==pn&&(mr(e,a),a.parentNode&&a.parentNode.removeChild(a))}};function br(){return n.nc}var vr=function(e){var t=document.head,n=e||t,r=document.createElement("style"),a=function(e){var t=Array.from(e.querySelectorAll("style[".concat(hn,"]")));return t[t.length-1]}(n),i=void 0!==a?a.nextSibling:null;r.setAttribute(hn,pn),r.setAttribute(mn,gn);var o=br();return o&&r.setAttribute("nonce",o),n.insertBefore(r,i),r},yr=function(){function e(e){this.element=vr(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var a=t[n];if(a.ownerNode===e)return a}throw ir(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),xr=function(){function e(e){this.element=vr(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),wr=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),kr=vn,jr={isServer:!vn,useCSSOMInjection:!yn},Sr=function(){function e(e,t,n){void 0===e&&(e=kn),void 0===t&&(t={});var r=this;this.options=ct(ct({},jr),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&vn&&kr&&(kr=!1,gr(this)),ar(this,function(){return function(e){for(var t=e.getTag(),n=t.length,r="",a=function(n){var a=function(e){return sr.get(e)}(n);if(void 0===a)return"continue";var i=e.names.get(a),o=t.getGroup(n);if(void 0===i||!i.size||0===o.length)return"continue";var l="".concat(hn,".g").concat(n,'[id="').concat(a,'"]'),s="";void 0!==i&&i.forEach(function(e){e.length>0&&(s+="".concat(e,","))}),r+="".concat(o).concat(l,'{content:"').concat(s,'"}').concat(bn)},i=0;i<n;i++)a(i);return r}(r)})}return e.registerId=function(e){return ur(e)},e.prototype.rehydrate=function(){!this.server&&vn&&gr(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(ct(ct({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new wr(n):t?new yr(n):new xr(n)}(this.options),new or(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(ur(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(ur(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(ur(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Er=/&/g,Cr=/^\s*\/\/.*$/gm;function Ar(e,t){return e.map(function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map(function(e){return"".concat(t," ").concat(e)})),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=Ar(e.children,t)),e})}function zr(e){var t,n,r,a=void 0===e?kn:e,i=a.options,o=void 0===i?kn:i,l=a.plugins,s=void 0===l?wn:l,c=function(e,r,a){return a.startsWith(n)&&a.endsWith(n)&&a.replaceAll(n,"").length>0?".".concat(t):e},u=s.slice();u.push(function(e){e.type===bt&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(Er,n).replace(r,c))}),o.prefix&&u.push(on),u.push(rn);var d=function(e,a,i,l){void 0===a&&(a=""),void 0===i&&(i=""),void 0===l&&(l="&"),t=l,n=a,r=new RegExp("\\".concat(n,"\\b"),"g");var s=e.replace(Cr,""),c=ln(i||a?"".concat(i," ").concat(a," { ").concat(s," }"):s);o.namespace&&(c=Ar(c,o.namespace));var d,f=[];return nn(c,function(e){var t=Mt(e);return function(n,r,a,i){for(var o="",l=0;l<t;l++)o+=e[l](n,r,a,i)||"";return o}}(u.concat((d=function(e){return f.push(e)},function(e){e.root||(e=e.return)&&d(e)})))),f};return d.hash=s.length?s.reduce(function(e,t){return t.name||ir(15),Rn(e,t.name)},5381).toString():"",d}var Tr=new Sr,Mr=zr(),Pr=e.createContext({shouldForwardProp:void 0,styleSheet:Tr,stylis:Mr}),Rr=(Pr.Consumer,e.createContext(void 0));function Nr(){return(0,e.useContext)(Pr)}function _r(t){var n=(0,e.useState)(t.stylisPlugins),r=n[0],a=n[1],i=Nr().styleSheet,o=(0,e.useMemo)(function(){var e=i;return t.sheet?e=t.sheet:t.target&&(e=e.reconstructWithOptions({target:t.target},!1)),t.disableCSSOMInjection&&(e=e.reconstructWithOptions({useCSSOMInjection:!1})),e},[t.disableCSSOMInjection,t.sheet,t.target,i]),l=(0,e.useMemo)(function(){return zr({options:{namespace:t.namespace,prefix:t.enableVendorPrefixes},plugins:r})},[t.enableVendorPrefixes,t.namespace,r]);(0,e.useEffect)(function(){ft()(r,t.stylisPlugins)||a(t.stylisPlugins)},[t.stylisPlugins]);var s=(0,e.useMemo)(function(){return{shouldForwardProp:t.shouldForwardProp,styleSheet:o,stylis:l}},[t.shouldForwardProp,o,l]);return e.createElement(Pr.Provider,{value:s},e.createElement(Rr.Provider,{value:l},t.children))}var Lr=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=Mr);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,ar(this,function(){throw ir(12,String(n.name))})}return e.prototype.getName=function(e){return void 0===e&&(e=Mr),this.name+e.hash},e}(),Dr=function(e){return e>="A"&&e<="Z"};function Ir(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;Dr(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Fr=function(e){return null==e||!1===e||""===e},Br=function(e){var t,n,r=[];for(var a in e){var i=e[a];e.hasOwnProperty(a)&&!Fr(i)&&(Array.isArray(i)&&i.isCss||Xn(i)?r.push("".concat(Ir(a),":"),i,";"):nr(i)?r.push.apply(r,ut(ut(["".concat(a," {")],Br(i),!1),["}"],!1)):r.push("".concat(Ir(a),": ").concat((t=a,null==(n=i)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in fn||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Or(e,t,n,r){return Fr(e)?[]:Zn(e)?[".".concat(e.styledComponentId)]:Xn(e)?!Xn(a=e)||a.prototype&&a.prototype.isReactComponent||!t?[e]:Or(e(t),t,n,r):e instanceof Lr?n?(e.inject(n,r),[e.getName(r)]):[e]:nr(e)?Br(e):Array.isArray(e)?Array.prototype.concat.apply(wn,e.map(function(e){return Or(e,t,n,r)})):[e.toString()];var a}function $r(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Xn(n)&&!Zn(n))return!1}return!0}var Ur=Nn(gn),Hr=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&$r(e),this.componentId=t,this.baseHash=Rn(Ur,t),this.baseStyle=n,Sr.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=er(r,this.staticRulesId);else{var a=tr(Or(this.rules,e,t,n)),i=Mn(Rn(this.baseHash,a)>>>0);if(!t.hasNameForId(this.componentId,i)){var o=n(a,".".concat(i),void 0,this.componentId);t.insertRules(this.componentId,i,o)}r=er(r,i),this.staticRulesId=i}else{for(var l=Rn(this.baseHash,n.hash),s="",c=0;c<this.rules.length;c++){var u=this.rules[c];if("string"==typeof u)s+=u;else if(u){var d=tr(Or(u,e,t,n));l=Rn(l,d+c),s+=d}}if(s){var f=Mn(l>>>0);t.hasNameForId(this.componentId,f)||t.insertRules(this.componentId,f,n(s,".".concat(f),void 0,this.componentId)),r=er(r,f)}}return r},e}(),Wr=e.createContext(void 0);Wr.Consumer;var Vr={};new Set;function qr(t,n,r){var a=Zn(t),i=t,o=!Dn(t),l=n.attrs,s=void 0===l?wn:l,c=n.componentId,u=void 0===c?function(e,t){var n="string"!=typeof e?"sc":An(e);Vr[n]=(Vr[n]||0)+1;var r="".concat(n,"-").concat(_n(gn+n+Vr[n]));return t?"".concat(t,"-").concat(r):r}(n.displayName,n.parentComponentId):c,d=n.displayName,f=void 0===d?function(e){return Dn(e)?"styled.".concat(e):"Styled(".concat(Ln(e),")")}(t):d,h=n.displayName&&n.componentId?"".concat(An(n.displayName),"-").concat(n.componentId):n.componentId||u,p=a&&i.attrs?i.attrs.concat(s).filter(Boolean):s,m=n.shouldForwardProp;if(a&&i.shouldForwardProp){var g=i.shouldForwardProp;if(n.shouldForwardProp){var b=n.shouldForwardProp;m=function(e,t){return g(e,t)&&b(e,t)}}else m=g}var v=new Hr(r,h,a?i.componentStyle:void 0);function y(t,n){return function(t,n,r){var a=t.attrs,i=t.componentStyle,o=t.defaultProps,l=t.foldedComponentIds,s=t.styledComponentId,c=t.target,u=e.useContext(Wr),d=Nr(),f=t.shouldForwardProp||d.shouldForwardProp,h=jn(n,u,o)||kn,p=function(e,t,n){for(var r,a=ct(ct({},t),{className:void 0,theme:n}),i=0;i<e.length;i+=1){var o=Xn(r=e[i])?r(a):r;for(var l in o)a[l]="className"===l?er(a[l],o[l]):"style"===l?ct(ct({},a[l]),o[l]):o[l]}return t.className&&(a.className=er(a.className,t.className)),a}(a,n,h),m=p.as||c,g={};for(var b in p)void 0===p[b]||"$"===b[0]||"as"===b||"theme"===b&&p.theme===h||("forwardedAs"===b?g.as=p.forwardedAs:f&&!f(b,m)||(g[b]=p[b]));var v=function(e,t){var n=Nr();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(i,p),y=er(l,s);return v&&(y+=" "+v),p.className&&(y+=" "+p.className),g[Dn(m)&&!Sn.has(m)?"class":"className"]=y,r&&(g.ref=r),(0,e.createElement)(m,g)}(x,t,n)}y.displayName=f;var x=e.forwardRef(y);return x.attrs=p,x.componentStyle=v,x.displayName=f,x.shouldForwardProp=m,x.foldedComponentIds=a?er(i.foldedComponentIds,i.styledComponentId):"",x.styledComponentId=h,x.target=a?i.target:t,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=a?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,a=t;r<a.length;r++)rr(e,a[r],!0);return e}({},i.defaultProps,e):e}}),ar(x,function(){return".".concat(x.styledComponentId)}),o&&Jn(x,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function Gr(e,t){for(var n=[e[0]],r=0,a=t.length;r<a;r+=1)n.push(t[r],e[r+1]);return n}var Kr=function(e){return Object.assign(e,{isCss:!0})};function Yr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Xn(e)||nr(e))return Kr(Or(Gr(wn,ut([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?Or(r):Kr(Or(Gr(r,t)))}function Qr(e,t,n){if(void 0===n&&(n=kn),!t)throw ir(1,t);var r=function(r){for(var a=[],i=1;i<arguments.length;i++)a[i-1]=arguments[i];return e(t,n,Yr.apply(void 0,ut([r],a,!1)))};return r.attrs=function(r){return Qr(e,t,ct(ct({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return Qr(e,t,ct(ct({},n),r))},r}var Jr=function(e){return Qr(qr,e)},Xr=Jr;Sn.forEach(function(e){Xr[e]=Jr(e)});var Zr=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=$r(e),Sr.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,n,r){var a=r(tr(Or(this.rules,t,n,r)),""),i=this.componentId+e;n.insertRules(i,i,a)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&Sr.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();(function(){function t(){var t=this;this._emitSheetCSS=function(){var e=t.instance.toString();if(!e)return"";var n=br(),r=tr([n&&'nonce="'.concat(n,'"'),"".concat(hn,'="true"'),"".concat(mn,'="').concat(gn,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(e,"</style>")},this.getStyleTags=function(){if(t.sealed)throw ir(2);return t._emitSheetCSS()},this.getStyleElement=function(){var n;if(t.sealed)throw ir(2);var r=t.instance.toString();if(!r)return[];var a=((n={})[hn]="",n[mn]=gn,n.dangerouslySetInnerHTML={__html:r},n),i=br();return i&&(a.nonce=i),[e.createElement("style",ct({},a,{key:"sc-0-0"}))]},this.seal=function(){t.sealed=!0},this.instance=new Sr({isServer:!0}),this.sealed=!1}t.prototype.collectStyles=function(t){if(this.sealed)throw ir(2);return e.createElement(_r,{sheet:this.instance},t)},t.prototype.interleaveWithNodeStream=function(e){throw ir(3)}})(),"__sc-".concat(hn,"__");var ea=n(579);const ta=Xr.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: linear-gradient(135deg, #ffffff 0%, #DFF2EB 100%);
  border-bottom: 1px solid #B9E5E8;
  display: flex;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 20px rgba(122, 178, 211, 0.1);
  
  @media (max-width: 768px) {
    height: 60px; // Reduced height for mobile
    justify-content: space-between; // Spread logo and controls
    padding: 0 0.5rem; // Side padding
    align-items: center;
  }
`,na=Xr.nav`
  max-width: 1200px;
  width: auto;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  gap: 17rem;
  align-items: center;
  height: 70px; /* ensures all items are same height */
  
  @media (max-width: 768px) {
    height: 60px; // Reduced height for mobile
    justify-content: space-between; // Spread logo and hamburger
    gap: 0; // Remove large gap on mobile
    padding: 0 0; // No padding to push hamburger to the very edge
  }
  
  @media (max-width: 480px) {
    padding: 0 0; // No padding on very small screens either
  }
`,ra=Xr(nt)`
  font-weight: bold;
  font-size: clamp(1rem, 1.8vw + 0.5rem, 1.6rem);
  background: linear-gradient(135deg, rgb(17, 115, 172), #4A628A);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding: 0 0 0 5rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70px; /* ensures all items are same height */
  
  @media (max-width: 768px) {
    height: 60px; // Reduced height for mobile
    font-size: clamp(1.3rem, 2.0vw + 0.8rem, 1.6rem); // Larger font size for mobile
    padding: 0 0 0 1rem; // Reduced padding for mobile
  }
  
  @media (max-width: 480px) {
    font-size: clamp(1.3rem, 2.0vw + 0.8rem, 1.6rem); // Further adjusted font size for very small screens
    padding: 0 0 0 0.5rem; // Further reduced padding for very small screens
  }
`,aa=Xr.ul`
  display: flex;
  list-style: none;
  gap: 0.5rem;
  margin: 0;
  padding: 0;
  align-items: center; /* fix dropdown button vertical alignment */
  
  @media (max-width: 768px) {
    gap: 0.25rem; // Reduced gap for mobile
  }
`,ia=Xr.li``,oa=Xr(nt)`
  color: ${e=>e.isActive?"#fff":"#4A628A"};
  font-weight: ${e=>e.isActive?"600":"500"};
  padding: 0.5rem 1rem;
  border-radius: 8px;
  text-decoration: none; /* removes underline */
  background: ${e=>e.isActive?"linear-gradient(135deg, #3A4A6A, #3A4A6A)":"transparent"};
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  height: 100%;
  font-size: 1rem;

  &:hover {
    background: ${e=>e.isActive?"linear-gradient(135deg, #3A4A6A, #3A4A6A)":"linear-gradient(135deg, #7AB2D3, #B9E5E8)"};
    color: ${e=>e.isActive?"white":"#3F65A7"};
  }
  
  @media (max-width: 768px) {
    padding: 0.4rem 0.6rem; // Reduced padding for mobile
    font-size: 0.85rem; // Reduced font size for mobile
  }
  
  @media (max-width: 480px) {
    padding: 0.3rem 0.4rem; // Further reduced padding for very small screens
    font-size: 0.8rem; // Further reduced font size for very small screens
  }
`,la=Xr.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
`,sa=Xr.button`
  background: linear-gradient(135deg, #7AB2D3, #4A628A);
  border: none;
  color: white;
  font-size: 1.2rem;
  padding: 0.4rem 0.8rem; /* smaller padding for better vertical alignment */
  border-radius: 8px;
  cursor: pointer;
  height: 38px; /* consistent height with nav links */
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 768px) {
    height: 32px; // Reduced height for mobile
    font-size: 1rem; // Reduced font size for mobile
    padding: 0.3rem 0.6rem; // Reduced padding for mobile
  }
  
  @media (max-width: 480px) {
    height: 28px; // Further reduced height for very small screens
    font-size: 0.9rem; // Further reduced font size for very small screens
    padding: 0.25rem 0.5rem; // Further reduced padding for very small screens
  }
`,ca=Xr.div`
  position: absolute;
  top: 110%;
  right: 0;
  background: white;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  border-radius: 8px;
  display: ${e=>e.isOpen?"block":"none"};
  min-width: 150px;
  overflow: hidden;

  a {
    display: block;
    padding: 0.75rem 1rem;
    text-decoration: none;
    color: #4A628A;
    &:hover {
      background: #DFF2EB;
    }
  }
  
  @media (max-width: 768px) {
    min-width: 120px; // Reduced width for mobile
    
    a {
      padding: 0.6rem 0.8rem; // Reduced padding for mobile
      font-size: 0.85rem; // Reduced font size for mobile
    }
  }
  
  @media (max-width: 480px) {
    min-width: 100px; // Further reduced width for very small screens
    
    a {
      padding: 0.5rem 0.6rem; // Further reduced padding for very small screens
      font-size: 0.8rem; // Further reduced font size for very small screens
    }
  }
`,ua=()=>{const[t,n]=(0,e.useState)(window.innerWidth),[r,a]=(0,e.useState)(!1),[i,o]=(0,e.useState)(!1),l=X(),s=[{title:"Home",url:"/"},{title:"News",url:"/news"},{title:"Research",url:"/research"},{title:"Publications",url:"/publications"},{title:"Work Experience",url:"/work"},{title:"Datasets",url:"/datasets"},{title:"Education",url:"/education"},{title:"CV",url:"/cv"}];(0,e.useEffect)(()=>{const e=()=>n(window.innerWidth);return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),(0,e.useEffect)(()=>{o(!1),a(!1)},[l.pathname]);let c=s,u=[];if(t<=1200&&t>=900)c=s.slice(0,4),u=s.slice(5);else if(t<=900&&t>=768)c=s.slice(0,3),u=s.slice(5);else if(t<768){const e=s.find(e=>e.url===l.pathname);c=e?[e]:[],u=s.filter(e=>e.url!==l.pathname)}return(0,ea.jsxs)(ta,{children:[(0,ea.jsx)(ra,{to:"/",children:"Mukaffi Bin Moin"}),(0,ea.jsxs)(na,{children:[t<768&&(0,ea.jsx)("button",{onClick:()=>{o(!i),a(!1)},style:{background:"linear-gradient(135deg, #7AB2D3, #4A628A)",border:"none",color:"white",fontSize:"1.2rem",padding:"0.5rem",borderRadius:"8px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",minHeight:"44px",minWidth:"44px",position:"absolute",right:"1.0rem",top:"50%",transform:"translateY(-50%)"},children:i?"\u2715":"\u2630"}),t>=768&&(0,ea.jsxs)(aa,{children:[c.map(e=>(0,ea.jsx)(ia,{children:(0,ea.jsx)(oa,{to:e.url,isActive:l.pathname===e.url,children:e.title})},e.url)),u.length>0&&(0,ea.jsxs)(la,{children:[(0,ea.jsx)(sa,{onClick:()=>a(!r),children:"\u2630"}),(0,ea.jsx)(ca,{isOpen:r,children:u.map(e=>(0,ea.jsx)(nt,{to:e.url,onClick:()=>a(!1),children:e.title},e.url))})]})]}),t<768&&i&&(0,ea.jsx)("div",{style:{position:"absolute",top:"100%",left:0,right:0,background:"white",boxShadow:"0 4px 10px rgba(0,0,0,0.1)",borderTop:"1px solid #B9E5E8",zIndex:1001},children:s.map(e=>(0,ea.jsx)(nt,{to:e.url,onClick:()=>o(!1),style:{display:"block",padding:"1rem",textDecoration:"none",color:l.pathname===e.url?"#7AB2D3":"#4A628A",borderBottom:"1px solid #f0f0f0",fontSize:"1rem",fontWeight:l.pathname===e.url?"600":"400"},children:e.title},e.url))})]})]})},da=Xr.aside`
  width: 400px;
  background: linear-gradient(135deg, #ffffff 0%, #DFF2EB 100%);
  border-right: 1px solid #B9E5E8;
  position: fixed;
  top: 70px;
  left: 0;
  height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  
  @media (max-width: 768px) {
    display: none;
  }
`,fa=e=>{let{size:t}=e;return(0,ea.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 432 416",children:(0,ea.jsx)("path",{fill:"currentColor",d:"M213.5 0q88.5 0 151 62.5T427 213q0 70-41 125.5T281 416q-14 2-14-11v-58q0-27-15-40q44-5 70.5-27t26.5-77q0-34-22-58q11-26-2-57q-18-5-58 22q-26-7-54-7t-53 7q-18-12-32.5-17.5T107 88h-6q-12 31-2 57q-22 24-22 58q0 55 27 77t70 27q-11 10-13 29q-42 18-62-18q-12-20-33-22q-2 0-4.5.5t-5 3.5t8.5 9q14 7 23 31q1 2 2 4.5t6.5 9.5t13 10.5T130 371t30-2v36q0 13-14 11q-64-22-105-77.5T0 213q0-88 62.5-150.5T213.5 0z"})})},ha=e=>{let{size:t}=e;return(0,ea.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 512 512",fill:"#8b5cf6",children:(0,ea.jsx)("path",{fill:"#8b5cf6",d:"M64 64v384h384V64Zm116.815 99.926c22.222 0 32.04 2.586 45.736 8.27l-1.292 20.411c-14.729-8.785-26.356-11.367-43.152-11.367c-19.379 0-29.2 14.727-29.2 28.163c0 18.088 17.313 24.807 33.592 34.626c20.93 12.403 42.636 23.514 42.636 48.062c0 32.299-27.65 48.577-54.006 48.577c-18.863 0-32.557-2.843-45.993-9.044l3.102-20.414c13.178 8.01 24.547 11.889 41.86 11.889c17.57 0 32.297-11.887 32.297-28.424c0-17.054-16.535-23.516-32.297-33.076c-21.189-12.92-44.444-24.29-44.444-50.646s19.379-47.027 51.161-47.027zm161.705 0c26.097 0 37.725 3.102 51.937 9.82l-1.55 19.38c-15.504-8.527-31.783-11.886-52.971-11.886c-33.592 0-62.274 26.613-62.274 69.765c0 40.826 29.2 71.575 65.892 71.575c16.795 0 33.591-3.359 49.353-11.886l1.55 19.638c-13.953 6.977-31.523 9.82-52.71 9.82c-42.12 0-87.338-31.01-87.338-87.597c0-49.612 37.982-88.63 88.11-88.63z",opacity:".999"})})},pa=Xr.div`
  text-align: center;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    margin-bottom: 1.5rem; // Reduced margin for mobile
  }
`,ma=Xr.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 0 auto 1rem;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid #eaecef;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  @media (max-width: 768px) {
    width: 120px; // Reduced size for mobile
    height: 120px; // Reduced size for mobile
    margin: 0 auto 0.75rem; // Reduced margin for mobile
  }
`,ga=Xr.h1`
  font-size: 1.5rem;
  font-weight: bold;
  background: linear-gradient(135deg,rgb(0, 0, 0), #4A628A);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0 0 0.5rem 0;
  
  @media (max-width: 768px) {
    font-size: 1.3rem; // Reduced font size for mobile
    margin: 0 0 0.4rem 0; // Reduced margin for mobile
  }
`,ba=Xr.p`
  font-size: 1.1rem;
  color: #4A628A;
  margin: 0 0 2rem 0;
  text-align: center;
  font-weight: 500;
  
  @media (max-width: 768px) {
    font-size: 1rem; // Reduced font size for mobile
    margin: 0 0 1.5rem 0; // Reduced margin for mobile
  }
`,va=e=>{let{size:t}=e;return(0,ea.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 256 256",children:(0,ea.jsxs)("g",{fill:"none",children:[(0,ea.jsx)("rect",{width:"256",height:"256",fill:"#fff",rx:"60"}),(0,ea.jsx)("rect",{width:"256",height:"256",fill:"#0A66C2",rx:"60"}),(0,ea.jsx)("path",{fill:"#fff",d:"M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168c-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82c19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627c11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38C47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z"})]})})},ya=Xr.div`
  margin-bottom: 2rem;
  text-align: center;
  
  @media (max-width: 768px) {
    margin-bottom: 1.5rem; // Reduced margin for mobile
  }
`,xa=Xr.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: #4A628A;
  
  span {
    margin-left: 0.5rem;
  }
  
  a {
    color: #4A628A;
    text-decoration: none;
  }
  
  @media (max-width: 768px) {
    font-size: 0.85rem; // Reduced font size for mobile
    margin-bottom: 0.4rem; // Reduced margin for mobile
  }
`,wa=Xr.div`
  text-align: center;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    margin-bottom: 0.75rem; // Reduced margin for mobile
  }
`,ka=Xr.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 0;
  color: #4A628A;
  text-decoration: none;
  transition: all 0.3s ease;
  border-bottom: 1px solid #B9E5E8;
  
  &:hover {
    color: #7AB2D3;
    background: linear-gradient(135deg, #DFF2EB, #B9E5E8);
    border-radius: 8px;
    /* Prevent layout shift on hover by not changing margin or padding */
  }
  
  &:last-child {
    border-bottom: none;
  }
  
  @media (max-width: 768px) {
    padding: 0.6rem 0; // Reduced padding for mobile
    font-size: 0.9rem; // Reduced font size for mobile
    
    &:hover {
      /* Prevent layout shift on hover on mobile as well */
    }
  }
`,ja=Xr.div`
  width: 20px;
  height: 20px;
  margin-right: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  
  @media (max-width: 768px) {
    width: 18px; // Reduced size for mobile
    height: 18px; // Reduced size for mobile
    margin-right: 0.6rem; // Reduced margin for mobile
    font-size: 1.1rem; // Reduced font size for mobile
  }
`,Sa=Xr.div`
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
  
  @media (max-width: 768px) {
    padding: 1.5rem; // Reduced padding for mobile
  }
`,Ea=Xr.div`
  text-align: center;
  margin-top: 1rem;
`,Ca=e=>{let{size:t}=e;return(0,ea.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"#10b981",children:(0,ea.jsx)("path",{fill:"#10b981",d:"M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12s12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025c0 2.578-2.016 5.025-5.325 5.025h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 4.022-2.484 4.022-3.722c0-2.016-1.284-3.722-4.097-3.722h-2.222z"})})},Aa=e=>{let{size:t}=e;return(0,ea.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 448 512",fill:"#10b981",children:(0,ea.jsx)("path",{fill:"#10b981",d:"M48 32C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48H48zm277.201 64c5.627 0 10.731.651 15.258 1.98c4.476 1.318 8.49 3.135 12.031 5.461c3.491 2.302 6.511 5.013 9.004 8.082a44.056 44.056 0 0 1 6.227 9.899c.626 1.125.449 2.02-.55 2.646l-13.9 5.715c-1.177.628-2.006.308-2.66-.933c-3.119-5.78-5.78-9.577-10.152-12.338c-4.425-2.75-8.518-4.055-15.258-4.055c-7.327 0-10.601 1.457-15.191 4.744c-4.553 3.223-7.89 7.276-9.86 13.451c-.395 1.114-.754 2.496-1.175 4.12c-.346 1.65-.627 3.67-.805 6.035c-.18 2.366-.347 5.295-.5 8.748c-.102 3.453-.152 7.646-.152 12.506c0 4.884.05 9.078.152 12.53c.153 3.44.32 6.37.5 8.735c.178 2.391.46 4.4.805 6.063c.421 1.598.78 2.977 1.175 4.103c1.97 6.15 4.783 9.514 8.926 12.213c4.092 2.737 8.798 4.707 16.125 4.707c6.51 0 12.469-1.855 16.356-4.682c3.85-2.825 7.046-6.559 8.478-11.662c.627-2.148 1.433-4.822 1.983-8.095c.498-3.274.5-6.738.5-11.52c0-.755-.424-1.14-1.127-1.14h-22.264c-1.253 0-1.867-.613-1.867-1.866v-12.761c0-1.267.614-1.881 1.867-1.881h40.857c1.28 0 1.881.614 1.881 1.88v10.907c0 5.78 0 11.14-.601 16.101c-.576 4.962-1.355 9.257-2.34 12.389c-3.12 9.81-8.07 16.793-15.653 21.996c-7.609 5.243-17.417 8.068-28.07 8.068c-10.946 0-20.165-2.516-27.683-7.517c-7.532-5.064-12.918-12.496-16.204-22.432a42.571 42.571 0 0 1-1.482-5.83c-.384-2.007-.73-4.348-1.037-7.047c-.32-2.723-.524-5.919-.65-9.691c-.129-3.746-.18-8.325-.18-13.568c0-5.27.052-9.782.18-13.541c.127-3.773.33-7.01.65-9.708c.306-2.685.653-5.037 1.037-7.044c.37-2.02.857-3.94 1.484-5.819c3.286-9.936 8.67-17.404 16.202-22.418C305.036 98.518 314.255 96 325.2 96zm-151.674 77.813c43.569 0 76.803 19.858 76.803 62.646c0 29.028-22.916 58.083-53.861 65.32c18.733 33.249 41.252 62.662 58.08 80.973c9.898 10.703 23.646 20.268 37.392 20.268v9.912c-4.192 1.93-11.06 3.068-17.545 3.068c-22.16 0-39.718-8.773-51.2-22.545c-12.585-14.502-34.746-45.845-58.046-87.469c-12.25 0-20.268 0-29.437-.767v63.785c0 23.696 5.372 28.671 15.678 30.168l19.873 2.709v11.05c-9.553-.37-31.714-1.126-48.9-1.126c-17.968 0-35.923.756-46.23 1.127V401.88l14.503-2.71c9.974-1.891 15.652-6.47 15.652-30.167V218.506c0-23.708-5.678-28.261-15.652-30.18l-14.502-2.66V174.58c9.526.37 24.821.37 40.129.37c16.776 0 34.744-1.137 57.263-1.137zm-6.867 17.185c-10.32 0-22.136 0-30.947.768v95.845c8.811.83 14.515 1.176 27.508 1.176c34.015 0 54.629-20.243 54.629-50.422c0-30.536-19.08-47.367-51.19-47.367z"})})},za=e=>{let{size:t}=e;return(0,ea.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:t,viewBox:"0 0 24 24",fill:"#3b82f6",children:(0,ea.jsx)("path",{fill:"#3b82f6",d:"M5.242 13.769L0 9.5L12 0l12 9.5l-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14a7 7 0 0 0 0-14z"})})},Ta=()=>(0,ea.jsx)(da,{children:(0,ea.jsxs)(Sa,{children:[(0,ea.jsxs)(pa,{children:[(0,ea.jsx)(ma,{children:(0,ea.jsx)("img",{src:"/images/profile.png",alt:"Mukaffi Bin Moin"})}),(0,ea.jsx)(ga,{children:"Mukaffi Bin Moin"}),(0,ea.jsx)(ba,{children:"Researcher || LLMs & Multimodal"})]}),(0,ea.jsxs)(ya,{children:[(0,ea.jsxs)(xa,{children:["\ud83d\udccd ",(0,ea.jsx)("span",{children:"Dhaka, Bangladesh"})]}),(0,ea.jsxs)(xa,{children:["\u2709\ufe0f ",(0,ea.jsx)("span",{children:(0,ea.jsx)("a",{href:"mailto:mukaffi28@gmail.com",children:"mukaffi28@gmail.com"})})]})]}),(0,ea.jsxs)(wa,{children:[(0,ea.jsxs)(ka,{href:"https://scholar.google.com/citations?user=tU258wwAAAAJ&hl=en",target:"_blank",rel:"noopener noreferrer",children:[(0,ea.jsx)(ja,{children:(0,ea.jsx)(za,{size:"20"})}),"Google Scholar"]}),(0,ea.jsxs)(ka,{href:"https://www.researchgate.net/profile/Mukaffi-Moin",target:"_blank",rel:"noopener noreferrer",children:[(0,ea.jsx)(ja,{children:(0,ea.jsx)(Aa,{size:"20"})}),"ResearchGate"]}),(0,ea.jsxs)(ka,{href:"https://www.semanticscholar.org/author/Mukaffi-Bin-Moin/2267340450",target:"_blank",rel:"noopener noreferrer",children:[(0,ea.jsx)(ja,{children:"\ud83d\udcda"}),"Semantic Scholar"]}),(0,ea.jsxs)(ka,{href:"https://www.scopus.com/authid/detail.uri?authorId=58755515500",target:"_blank",rel:"noopener noreferrer",children:[(0,ea.jsx)(ja,{children:(0,ea.jsx)(ha,{size:"20"})}),"Scopus"]}),(0,ea.jsxs)(ka,{href:"https://orcid.org/0009-0001-9634-5809",target:"_blank",rel:"noopener noreferrer",children:[(0,ea.jsx)(ja,{children:(0,ea.jsx)(Ca,{size:"20"})}),"ORCID"]}),(0,ea.jsxs)(ka,{href:"https://linkedin.com/in/mukaffi-bin-moin",target:"_blank",rel:"noopener noreferrer",children:[(0,ea.jsx)(ja,{children:(0,ea.jsx)(va,{size:"24"})}),"LinkedIn"]}),(0,ea.jsxs)(ka,{href:"https://github.com/Mukaffi28",target:"_blank",rel:"noopener noreferrer",children:[(0,ea.jsx)(ja,{children:(0,ea.jsx)(fa,{size:"24"})}),"GitHub"]})]}),(0,ea.jsx)(Ea,{children:(0,ea.jsx)("a",{href:"https://clustrmaps.com/site/1c38a",title:"ClustrMaps",target:"_blank",rel:"noopener noreferrer",children:(0,ea.jsx)("img",{src:"https://www.clustrmaps.com/map_v2.png?d=hmIfEwbtPyT4fAgf0EIp_Xo1LUscuzQCoj1FtxsKDcI&cl=ffffff",width:"200px",height:"100px",alt:"Visitor Map"})})})]})}),Ma=Xr.footer`
  background-color: ${e=>"sidebar"===e.variant?"transparent":"#f8f9fa"};
  border-top: ${e=>"sidebar"===e.variant?"none":"1px solid #eaecef"};
  padding: ${e=>"sidebar"===e.variant?"0":"2rem 0"};
  margin-top: ${e=>"sidebar"===e.variant?"0":"auto"};
  
  @media (max-width: 768px) {
    padding: ${e=>"sidebar"===e.variant?"0":"1rem 0"}; // Reduced padding for mobile
  }
  
  @media (max-width: 480px) {
    padding: ${e=>"sidebar"===e.variant?"0":"0.75rem 0"}; // Further reduced padding for very small screens
  }
`,Pa=Xr.div`
  max-width: ${e=>"sidebar"===e.variant?"100%":"1200px"};
  margin: 0 auto;
  padding: ${e=>"sidebar"===e.variant?"0":"0 2rem"};
  text-align: ${e=>"sidebar"===e.variant?"left":"center"};
  
  @media (max-width: 768px) {
    padding: ${e=>"sidebar"===e.variant?"0":"0 1rem"}; // Reduced padding for mobile
  }
  
  @media (max-width: 480px) {
    padding: ${e=>"sidebar"===e.variant?"0":"0 0.5rem"}; // Further reduced padding for very small screens
  }
`,Ra=Xr.p`
  color: #666;
  font-size: ${e=>"sidebar"===e.variant?"0.8rem":"0.9rem"};
  text-align: ${e=>"sidebar"===e.variant?"left":"right"};
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: ${e=>"sidebar"===e.variant?"0.75rem":"0.85rem"}; // Reduced font size for mobile
  }
  
  @media (max-width: 480px) {
    font-size: ${e=>"sidebar"===e.variant?"0.7rem":"0.8rem"}; // Further reduced font size for very small screens
  }
`,Na=e=>{let{variant:t="main"}=e;return(0,ea.jsx)(Ma,{variant:t,children:(0,ea.jsx)(Pa,{variant:t,children:(0,ea.jsxs)(Ra,{variant:t,children:["\xa9 ",(new Date).getFullYear()," Mukaffi Bin Moin. All rights reserved."]})})})},_a=e=>{const t=(e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()))(e);return t.charAt(0).toUpperCase()+t.slice(1)},La=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((e,t,n)=>Boolean(e)&&""!==e.trim()&&n.indexOf(e)===t).join(" ").trim()},Da=e=>{for(const t in e)if(t.startsWith("aria-")||"role"===t||"title"===t)return!0};var Ia={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const Fa=(0,e.forwardRef)((t,n)=>{let{color:r="currentColor",size:a=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:l="",children:s,iconNode:c,...u}=t;return(0,e.createElement)("svg",{ref:n,...Ia,width:a,height:a,stroke:r,strokeWidth:o?24*Number(i)/Number(a):i,className:La("lucide",l),...!s&&!Da(u)&&{"aria-hidden":"true"},...u},[...c.map(t=>{let[n,r]=t;return(0,e.createElement)(n,r)}),...Array.isArray(s)?s:[s]])}),Ba=(t,n)=>{const r=(0,e.forwardRef)((r,a)=>{let{className:i,...o}=r;return(0,e.createElement)(Fa,{ref:a,iconNode:n,className:La(`lucide-${l=_a(t),l.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${t}`,i),...o});var l});return r.displayName=_a(t),r},Oa=Ba("mail",[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]),$a=Ba("zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),Ua=Xr.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: "Inter", sans-serif;
  
  @media (max-width: 768px) {
    padding: 1rem; // Reduced padding for mobile
  }
  
  @media (max-width: 480px) {
    padding: 0.5rem; // Further reduced padding for very small screens
  }
`,Ha=Xr.h1`
  color: #1e293b;
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
  background: linear-gradient(135deg, #7ab2d3, #4a628a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 768px) {
    font-size: 2.5rem; // Reduced font size for mobile
    margin-bottom: 1.5rem; // Reduced margin for mobile
  }
  
  @media (max-width: 480px) {
    font-size: 2rem; // Further reduced font size for very small screens
    margin-bottom: 1rem; // Further reduced margin for very small screens
  }
`,Wa=Xr.p`
  color: #475569;
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  text-align: center;

  a {
    color: rgb(0, 102, 255);
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;

    &:hover {
      color: #4a628a;
      text-decoration: none;
    }
  }
  
  @media (max-width: 768px) {
    font-size: 1.1rem; // Reduced font size for mobile
    margin-bottom: 1.5rem; // Reduced margin for mobile
    line-height: 1.6; // Reduced line height for mobile
  }
  
  @media (max-width: 480px) {
    font-size: 1rem; // Further reduced font size for very small screens
    margin-bottom: 1rem; // Further reduced margin for very small screens
    line-height: 1.5; // Further reduced line height for very small screens
  }
`,Va=Xr.div`
  color: #475569;
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 3rem;
  text-align: center;
  padding: 2rem;
  background: linear-gradient(135deg, #ffffff 0%, #dff2eb 100%);
  border: 1px solid #b9e5e8;
  border-radius: 16px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 15px 35px rgba(122, 178, 211, 0.2);
    border-color: #7ab2d3;
  }

  em {
    color: rgb(17, 115, 172);
    font-weight: 600;
  }
  
  @media (max-width: 768px) {
    font-size: 1rem; // Reduced font size for mobile
    margin-bottom: 2rem; // Reduced margin for mobile
    padding: 1.5rem; // Reduced padding for mobile
    line-height: 1.6; // Reduced line height for mobile
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem; // Further reduced font size for very small screens
    margin-bottom: 1.5rem; // Further reduced margin for very small screens
    padding: 1rem; // Further reduced padding for very small screens
    line-height: 1.5; // Further reduced line height for very small screens
  }
`,qa=Xr.div`
  margin-bottom: 3rem;
  padding: 2rem;
  background: linear-gradient(135deg, #ffffff 0%, #dff2eb 100%);
  border: 1px solid #b9e5e8;
  border-radius: 16px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 15px 35px rgba(122, 178, 211, 0.2);
    border-color: #7ab2d3;
  }
  
  @media (max-width: 768px) {
    margin-bottom: 2rem; // Reduced margin for mobile
    padding: 1.5rem; // Reduced padding for mobile
  }
  
  @media (max-width: 480px) {
    margin-bottom: 1.5rem; // Further reduced margin for very small screens
    padding: 1rem; // Further reduced padding for very small screens
  }
`,Ga=Xr.h2`
  color: #1e293b;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 12px;
  
  @media (max-width: 768px) {
    font-size: 1.6rem; // Reduced font size for mobile
    margin-bottom: 1rem; // Reduced margin for mobile
  }
  
  @media (max-width: 480px) {
    font-size: 1.4rem; // Further reduced font size for very small screens
    margin-bottom: 0.75rem; // Further reduced margin for very small screens
  }
`,Ka=Xr.p`
  color: #475569;
  font-family: "Inter", sans-serif;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  align-items: flex-start;

  a {
    color: #4A628A;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
    overflow-wrap: anywhere;
    word-break: break-word;

    &:hover {
      color: #4A628A;
      text-decoration: none;
    }
  }
  
  em {
    color:rgb(211, 128, 122);
    font-style: normal;
    font-weight: 600;
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
    gap: 6px;
  }
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
    gap: 6px;
  }
`,Ya=Xr.div`
  margin-bottom: 3rem;
  padding: 2rem;
  background: linear-gradient(135deg, #ffffff 0%, #dff2eb 100%);
  border: 1px solid #b9e5e8;
  border-radius: 16px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 15px 35px rgba(122, 178, 211, 0.2);
    border-color: #7ab2d3;
  }
`,Qa=Xr.h2`
  color: #1e293b;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 12px;
`,Ja=Xr.div`
  font-family: "Inter", sans-serif;
  color: #475569;
  margin-bottom: 1rem;
  font-size: 1rem;
  line-height: 1.7;
  padding: 0.75rem;
  background: linear-gradient(135deg, #f1f5f9, #dbecfdff);
  border-radius: 12px;
  border-left: 4px solid #7ab2d3;
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(4px);
    box-shadow: 0 4px 12px rgba(122, 178, 211, 0.2);
  }

  .date {
    color: #4a628a;
    font-weight: 700;
  }

  a {
    color: #7ab2d3;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;

    &:hover {
      color: #4a628a;
      text-decoration: none;
    }
  }
`,Xa=e=>{let{children:t}=e;return(0,ea.jsx)("h3",{style:{fontWeight:"bold",marginTop:"1rem"},children:t})},Za=(Xr.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  margin-top: 2rem;
  padding: 2rem;
  background: linear-gradient(135deg, #ffffff 0%, #dff2eb 100%);
  border: 1px solid #b9e5e8;
  border-radius: 16px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 15px 35px rgba(122, 178, 211, 0.2);
    border-color: #7ab2d3;
  }
`,()=>(0,ea.jsxs)(Ua,{children:[(0,ea.jsx)(Ha,{children:"Greetings!"}),(0,ea.jsxs)(Wa,{children:["I am Mukaffi Bin Moin, currently working as a Software Engineer II (AI/ML) at"," ",(0,ea.jsx)("a",{href:"https://www.linkedin.com/company/brainstation-23/",target:"_blank",rel:"noopener noreferrer",children:"Brain Station 23"}),". Previously, I served as a Machine Learning Engineer and AI Team Lead at"," ",(0,ea.jsx)("a",{href:"https://www.linkedin.com/company/anttroboticsltd/",target:"_blank",rel:"noopener noreferrer",children:"ANTT Robotics Ltd"}),". I hold a Bachelor's degree in Computer Science and Engineering from the"," ",(0,ea.jsx)("a",{href:"https://aust.edu/",target:"_blank",rel:"noopener noreferrer",children:"Ahsanullah University of Science and Technology"}),"."]}),(0,ea.jsxs)(Va,{children:["My research interests focuses on"," ",(0,ea.jsx)("em",{children:"Natural Language Processing (NLP), Social Media Analysis, Low-Resource Languages, Large Language Models, LLM Agents, Computer Vision, Vision-Language Models, Multimodal AI, Trustworthy AI, Multimodal Agents, AI For Healthcare"}),". I am open to collaboration options that are in line with my research aims and interests."," ",(0,ea.jsx)("span",{style:{color:"#7AB2D3"},children:(0,ea.jsx)("em",{children:"Please contact me via email if you have any questions or are interested in collaborating."})})]}),(0,ea.jsxs)(qa,{children:[(0,ea.jsxs)(Ga,{children:[(0,ea.jsx)(Oa,{size:24}),"Email"]}),(0,ea.jsxs)(Ka,{children:[(0,ea.jsx)(Oa,{size:16}),(0,ea.jsx)("a",{href:"mailto:mukaffimoin28@gmail.com",children:"mukaffimoin28@gmail.com"})]}),(0,ea.jsxs)(Ka,{children:[(0,ea.jsx)(Oa,{size:16}),(0,ea.jsx)("a",{href:"mailto:mukaffi28@gmail.com",children:"mukaffi28@gmail.com"})]}),(0,ea.jsxs)(Ka,{children:[(0,ea.jsx)(Oa,{size:16}),(0,ea.jsx)("a",{href:"mailto:mukaffi.binmoin@brainstation-23.com",children:"mukaffi.binmoin@brainstation-23.com"})," ",(0,ea.jsx)("em",{children:"(Official)"})]})]}),(0,ea.jsxs)(Ya,{children:[(0,ea.jsxs)(Qa,{children:[(0,ea.jsx)($a,{size:24}),"Recent News"]}),(0,ea.jsx)(Xa,{children:"2026"}),(0,ea.jsxs)(Ja,{children:[(0,ea.jsx)("span",{className:"date",children:"[January]"})," - Reached 100+ citations on my Google Scholar profile!"]}),(0,ea.jsxs)(Ja,{children:[(0,ea.jsx)("span",{className:"date",children:"[January]"})," - Got promoted to Software Engineer II at (",(0,ea.jsx)("a",{href:"https://www.linkedin.com/company/brainstation-23/",target:"_blank",rel:"noopener noreferrer",children:"Brain Station 23 PLC"}),")."]}),(0,ea.jsx)(Xa,{children:"2025"}),(0,ea.jsxs)(Ja,{children:[(0,ea.jsx)("span",{className:"date",children:"[December]"}),' - Presented "PotatoGANs" at the 11th IEEE International Conference on Sustainable Technology and Engineering (',(0,ea.jsx)("a",{href:"https://i-coste.org/",target:"_blank",rel:"noopener noreferrer",children:"i-COSTE 2025"}),")."]}),(0,ea.jsxs)(Ja,{children:[(0,ea.jsx)("span",{className:"date",children:"[November]"}),' - Awarded a 50% registration fee scholarship for research excellence and paper presentation of "PotatoGANs" at the 11th IEEE International Conference on Sustainable Technology and Engineering (',(0,ea.jsx)("a",{href:"https://i-coste.org/",target:"_blank",rel:"noopener noreferrer",children:"i-COSTE 2025"}),")."]}),(0,ea.jsxs)(Ja,{children:[(0,ea.jsx)("span",{className:"date",children:"[October]"}),' - "PotatoGANs: Utilizing Generative Adversarial Networks, Instance Segmentation, and Explainable AI for Enhanced Potato Disease Identification and Classification" has been accepted for presentation and publication at the 11th IEEE International Conference on Sustainable Technology and Engineering (',(0,ea.jsx)("a",{href:"https://i-coste.org/",target:"_blank",rel:"noopener noreferrer",children:"IEEE i-COSTE 2025"}),")."]}),(0,ea.jsxs)(Ja,{children:[(0,ea.jsx)("span",{className:"date",children:"[September]"})," - Two papers got published in the 4th International Conference on Computing and Communication Networks (",(0,ea.jsx)("a",{href:"https://icccn.co.uk/",target:"_blank",rel:"noopener noreferrer",children:"ICCCNet 2024"}),")."]}),(0,ea.jsxs)(Ja,{children:[(0,ea.jsx)("span",{className:"date",children:"[September]"})," - One paper got published in the ",(0,ea.jsx)("i",{children:"International Journal of Disaster Risk Reduction"}),". (",(0,ea.jsx)("a",{href:"https://www.sciencedirect.com/journal/international-journal-of-disaster-risk-reduction",target:"_blank",rel:"noopener noreferrer",children:"Disaster Risk Reduction"}),")"]}),(0,ea.jsxs)(Ja,{children:[(0,ea.jsx)("span",{className:"date",children:"[June]"})," - One paper got published in the ",(0,ea.jsx)("i",{children:"International Journal of Information Management Data Insights"}),". (",(0,ea.jsx)("a",{href:"https://www.sciencedirect.com/journal/international-journal-of-information-management-data-insights",target:"_blank",rel:"noopener noreferrer",children:"IJIM"}),")"]}),(0,ea.jsxs)(Ja,{children:[(0,ea.jsx)("span",{className:"date",children:"[May]"})," - Joined Brain Station 23 as a Software Engineer (AI/ML). (",(0,ea.jsx)("a",{href:"https://www.linkedin.com/company/brainstation-23/posts/?feedView=all",target:"_blank",rel:"noopener noreferrer",children:"Brain Station 23"}),")"]}),(0,ea.jsxs)(Ja,{children:[(0,ea.jsx)("span",{className:"date",children:"[May]"})," - Two papers got published at ICITA. (",(0,ea.jsx)("a",{href:"https://www.icita.world/#/",target:"_blank",rel:"noopener noreferrer",children:"ICITA 2024"}),")"]}),(0,ea.jsx)(Xa,{children:"2024"}),(0,ea.jsxs)(Ja,{children:[(0,ea.jsx)("span",{className:"date",children:"[August]"})," - Two papers got accepted at the 18th International Conference on Information Technology and Applications (",(0,ea.jsx)("a",{href:"https://www.icita.world/#/",target:"_blank",rel:"noopener noreferrer",children:"ICITA 2024"}),")."]}),(0,ea.jsxs)(Ja,{children:[(0,ea.jsx)("span",{className:"date",children:"[September]"})," - Attended the IEEE Region 10 Symposium at Netaji Subhas University of Technology (NSUT), New Delhi (",(0,ea.jsx)("a",{href:"https://ieeedelhi-tensymp2024.org/",target:"_blank",rel:"noopener noreferrer",children:"TENSYMP2024"}),")."]}),(0,ea.jsxs)(Ja,{children:[(0,ea.jsx)("span",{className:"date",children:"[October]"})," - Attended the 18th International Conference on Information Technology and Applications and presented two papers. (",(0,ea.jsx)("a",{href:"https://www.icita.world/#/",target:"_blank",rel:"noopener noreferrer",children:"ICITA 2024"}),")"]}),(0,ea.jsxs)(Ja,{children:[(0,ea.jsx)("span",{className:"date",children:"[October]"})," - Attended the 4th International Conference on Computing and Communication Networks and presented two papers. (",(0,ea.jsx)("a",{href:"https://icccn.co.uk/",target:"_blank",rel:"noopener noreferrer",children:"ICCCNet 2024"}),")"]}),(0,ea.jsxs)(Ja,{children:[(0,ea.jsx)("span",{className:"date",children:"[March]"})," - Joined as a Machine Learning Engineer (Level-I) at"," ",(0,ea.jsx)("a",{href:"https://www.linkedin.com/company/anttroboticsltd/posts/?feedView=all",target:"_blank",rel:"noopener noreferrer",children:"ANTT Robotics Ltd."})]})]})]})),ei=Ba("trophy",[["path",{d:"M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",key:"1n3hpd"}],["path",{d:"M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",key:"rfe1zi"}],["path",{d:"M18 9h1.5a1 1 0 0 0 0-5H18",key:"7xy6bh"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",key:"1mhfuq"}],["path",{d:"M6 9H4.5a1 1 0 0 1 0-5H6",key:"tex48p"}]]),ti=Ba("award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]),ni=Ba("external-link",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]),ri=Ba("calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]),ai=Ba("book-open",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]),ii=Ba("users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]]),oi=Ba("graduation-cap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]),li=Xr.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`,si=Xr.div`
  text-align: center;
  margin-bottom: 4rem;
`,ci=Xr.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #7AB2D3, #4A628A);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,ui=Xr.p`
  font-size: 1.2rem;
  color: #64748b;
  font-family: 'Inter', sans-serif;
`,di=Xr.div`
  margin-bottom: 4rem;
  position: relative;
`,fi=Xr.h2`
  color: #1e293b;
  font-family: 'Inter', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
  background: linear-gradient(135deg, #7AB2D3, #4A628A);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #7AB2D3, #4A628A);
    border-radius: 2px;
  }
`,hi=Xr.div`
  position: relative;
  padding-left: 2rem;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background: linear-gradient(180deg, #7AB2D3, #4A628A);
    border-radius: 2px;
  }
`,pi=Xr.div`
  margin-bottom: 2rem;
  font-family: 'Inter', sans-serif;
  color: #1e293b;
  line-height: 1.6;
  position: relative;
  padding: 1.5rem;
  background: linear-gradient(135deg, #ffffff 0%, #DFF2EB 100%);
  border: 1px solid #B9E5E8;
  border-radius: 16px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  
  &::before {
    content: '';
    position: absolute;
    left: -2.5rem;
    top: 2rem;
    width: 16px;
    height: 16px;
    background: #7AB2D3;
    border-radius: 50%;
    border: 4px solid #ffffff;
    box-shadow: 0 0 0 4px #7AB2D3;
    transition: all 0.3s ease;
  }
  
  &:hover {
    transform: translateX(8px);
    box-shadow: 0 15px 35px rgba(122, 178, 211, 0.2);
    border-color: #7AB2D3;
  }
  
  &:hover::before {
    background: #4A628A;
    box-shadow: 0 0 0 4px #4A628A, 0 0 20px rgba(74, 98, 138, 0.4);
  }
`,mi=Xr.span`
  color: #4A628A;
  font-weight: 700;
  font-size: 1.1rem;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 0.5rem;
`,gi=Xr.div`
  color: #475569;
  font-size: 1rem;
  line-height: 1.7;
`,bi=Xr.a`
  color: #7AB2D3;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  
  &:hover {
    color: #4A628A;
    text-decoration: none;
    transform: translateY(-1px);
  }
`,vi=()=>(0,ea.jsxs)(li,{children:[(0,ea.jsxs)(si,{children:[(0,ea.jsx)(ci,{children:"Recent News & Achievements"}),(0,ea.jsx)(ui,{children:"Stay updated with my latest research and professional milestones"})]}),(0,ea.jsxs)(di,{children:[(0,ea.jsx)(fi,{children:"2026"}),(0,ea.jsxs)(hi,{children:[(0,ea.jsxs)(pi,{children:[(0,ea.jsxs)(mi,{children:[(0,ea.jsx)(ei,{size:18}),"[January]"]}),(0,ea.jsx)(gi,{children:"Reached 100+ citations on my Google Scholar profile!"})]}),(0,ea.jsxs)(pi,{children:[(0,ea.jsxs)(mi,{children:[(0,ea.jsx)(ti,{size:18}),"[January]"]}),(0,ea.jsxs)(gi,{children:["Got promoted to Software Engineer II at ",(0,ea.jsxs)(bi,{href:"https://www.linkedin.com/company/brainstation-23/",target:"_blank",rel:"noopener noreferrer",children:["Brain Station 23 PLC ",(0,ea.jsx)(ni,{size:14})]}),"."]})]})]})]}),(0,ea.jsxs)(di,{children:[(0,ea.jsx)(fi,{children:"2025"}),(0,ea.jsxs)(hi,{children:[(0,ea.jsxs)(pi,{children:[(0,ea.jsxs)(mi,{children:[(0,ea.jsx)(ri,{size:18}),"[December]"]}),(0,ea.jsxs)(gi,{children:['Presented "PotatoGANs" at the 11th IEEE International Conference on Sustainable Technology and Engineering (',(0,ea.jsxs)(bi,{href:"https://i-coste.org/",target:"_blank",rel:"noopener noreferrer",children:["i-COSTE 2025 ",(0,ea.jsx)(ni,{size:14})]}),")."]})]}),(0,ea.jsxs)(pi,{children:[(0,ea.jsxs)(mi,{children:[(0,ea.jsx)(ti,{size:18}),"[November]"]}),(0,ea.jsxs)(gi,{children:['Awarded a 50% registration fee scholarship for research excellence and paper presentation of "PotatoGANs" at the 11th IEEE International Conference on Sustainable Technology and Engineering (',(0,ea.jsxs)(bi,{href:"https://i-coste.org/",target:"_blank",rel:"noopener noreferrer",children:["i-COSTE 2025 ",(0,ea.jsx)(ni,{size:14})]}),")."]})]}),(0,ea.jsxs)(pi,{children:[(0,ea.jsxs)(mi,{children:[(0,ea.jsx)(ai,{size:18}),"[October]"]}),(0,ea.jsxs)(gi,{children:['"PotatoGANs: Utilizing Generative Adversarial Networks, Instance Segmentation, and Explainable AI for Enhanced Potato Disease Identification and Classification" has been accepted for presentation and publication at the 11th IEEE International Conference on Sustainable Technology and Engineering (',(0,ea.jsxs)(bi,{href:"https://i-coste.org/",target:"_blank",rel:"noopener noreferrer",children:["IEEE i-COSTE 2025 ",(0,ea.jsx)(ni,{size:14})]}),")."]})]}),(0,ea.jsxs)(pi,{children:[(0,ea.jsxs)(mi,{children:[(0,ea.jsx)(ri,{size:18}),"[September]"]}),(0,ea.jsxs)(gi,{children:["Two papers published in the 4th International Conference on Computing and Communication Networks (",(0,ea.jsxs)(bi,{href:"https://icccn.co.uk/",target:"_blank",rel:"noopener noreferrer",children:["ICCCNet 2024 ",(0,ea.jsx)(ni,{size:14})]}),")."]})]}),(0,ea.jsxs)(pi,{children:[(0,ea.jsxs)(mi,{children:[(0,ea.jsx)(ri,{size:18}),"[September]"]}),(0,ea.jsxs)(gi,{children:["One paper published in the ",(0,ea.jsx)("i",{children:"International Journal of Disaster Risk Reduction"})," (",(0,ea.jsxs)(bi,{href:"https://www.sciencedirect.com/journal/international-journal-of-disaster-risk-reduction",target:"_blank",rel:"noopener noreferrer",children:["Disaster Risk Reduction ",(0,ea.jsx)(ni,{size:14})]}),")."]})]}),(0,ea.jsxs)(pi,{children:[(0,ea.jsxs)(mi,{children:[(0,ea.jsx)(ri,{size:18}),"[June]"]}),(0,ea.jsxs)(gi,{children:["Published a paper in the ",(0,ea.jsxs)("i",{children:["International Journal of Information Management Data Insights (",(0,ea.jsxs)(bi,{href:"https://www.sciencedirect.com/journal/international-journal-of-information-management-data-insights",target:"_blank",rel:"noopener noreferrer",children:["IJIM",(0,ea.jsx)(ni,{size:14})]}),")"]}),"."]})]}),(0,ea.jsxs)(pi,{children:[(0,ea.jsxs)(mi,{children:[(0,ea.jsx)(ri,{size:18}),"[May]"]}),(0,ea.jsxs)(gi,{children:["Joined as a Software Engineer (AI/ML) at (",(0,ea.jsxs)(bi,{href:"https://www.linkedin.com/company/brainstation-23/posts/?feedView=all",target:"_blank",rel:"noopener noreferrer",children:[(0,ea.jsx)(ni,{size:14}),"Brain Station 23"]}),")."]})]}),(0,ea.jsxs)(pi,{children:[(0,ea.jsxs)(mi,{children:[(0,ea.jsx)(ri,{size:18}),"[May]"]}),(0,ea.jsxs)(gi,{children:["Two papers published in ICITA. (",(0,ea.jsxs)(bi,{href:"https://www.icita.world/#/",target:"_blank",rel:"noopener noreferrer",children:["ICITA 2024 ",(0,ea.jsx)(ni,{size:14})]}),")"]})]})]})]}),(0,ea.jsxs)(di,{children:[(0,ea.jsx)(fi,{children:"2024"}),(0,ea.jsxs)(hi,{children:[(0,ea.jsxs)(pi,{children:[(0,ea.jsxs)(mi,{children:[(0,ea.jsx)(ri,{size:18}),"[October]"]}),(0,ea.jsxs)(gi,{children:["Attended the 18th International Conference on Information Technology and Applications and presented two papers. (",(0,ea.jsxs)(bi,{href:"https://www.icita.world/#/",target:"_blank",rel:"noopener noreferrer",children:["ICITA 2024 ",(0,ea.jsx)(ni,{size:14})]}),")"]})]}),(0,ea.jsxs)(pi,{children:[(0,ea.jsxs)(mi,{children:[(0,ea.jsx)(ri,{size:18}),"[October]"]}),(0,ea.jsxs)(gi,{children:["Attended the 4th International Conference on Computing and Communication Networks presented two papers. (",(0,ea.jsxs)(bi,{href:"https://icccn.co.uk/",target:"_blank",rel:"noopener noreferrer",children:["ICCCNet 2024 ",(0,ea.jsx)(ni,{size:14})]}),")"]})]}),(0,ea.jsxs)(pi,{children:[(0,ea.jsxs)(mi,{children:[(0,ea.jsx)(ri,{size:18}),"[September]"]}),(0,ea.jsxs)(gi,{children:["Attended the IEEE Region 10 Symposium at Netaji Subhas University of Technology (NSUT), New Delhi (",(0,ea.jsxs)(bi,{href:"https://ieeedelhi-tensymp2024.org/",target:"_blank",rel:"noopener noreferrer",children:["TENSYMP2024 ",(0,ea.jsx)(ni,{size:14})]}),")."]})]}),(0,ea.jsxs)(pi,{children:[(0,ea.jsxs)(mi,{children:[(0,ea.jsx)(ri,{size:18}),"[August]"]}),(0,ea.jsxs)(gi,{children:["Two paper got accepted at 18th International Conference on Information Technology and Applications (",(0,ea.jsxs)(bi,{href:"https://www.icita.world/#/",target:"_blank",rel:"noopener noreferrer",children:["ICITA 2024 ",(0,ea.jsx)(ni,{size:14})]}),")."]})]}),(0,ea.jsxs)(pi,{children:[(0,ea.jsxs)(mi,{children:[(0,ea.jsx)(ri,{size:18}),"[June]"]}),(0,ea.jsxs)(gi,{children:["One paper got accepted at The IEEE Region 10 Symposium (",(0,ea.jsxs)(bi,{href:"https://ieeedelhi-tensymp2024.org/",target:"_blank",rel:"noopener noreferrer",children:["TENSYMP2024 ",(0,ea.jsx)(ni,{size:14})]}),")."]})]}),(0,ea.jsxs)(pi,{children:[(0,ea.jsxs)(mi,{children:[(0,ea.jsx)(ri,{size:18}),"[May]"]}),(0,ea.jsxs)(gi,{children:["Two paper got accepted at 4th International Conference on Computing and Communication Networks (",(0,ea.jsxs)(bi,{href:"https://icccn.co.uk/",target:"_blank",rel:"noopener noreferrer",children:["ICCCNet 2024 ",(0,ea.jsx)(ni,{size:14})]}),")."]})]}),(0,ea.jsxs)(pi,{children:[(0,ea.jsxs)(mi,{children:[(0,ea.jsx)(ii,{size:18}),"[March]"]}),(0,ea.jsxs)(gi,{children:["Joined as an Machine Learning Engineer (Level-I) at ",(0,ea.jsxs)(bi,{href:"https://www.linkedin.com/company/anttroboticsltd/posts/?feedView=all",target:"_blank",rel:"noopener noreferrer",children:["ANTT Robotics Ltd. ",(0,ea.jsx)(ni,{size:14})]})]})]})]})]}),(0,ea.jsxs)(di,{children:[(0,ea.jsx)(fi,{children:"2023"}),(0,ea.jsxs)(hi,{children:[(0,ea.jsxs)(pi,{children:[(0,ea.jsxs)(mi,{children:[(0,ea.jsx)(oi,{size:18}),"[December]"]}),(0,ea.jsxs)(gi,{children:['Graduated from "Ahsanullah University of Science and Technology" ',(0,ea.jsxs)(bi,{href:"https://aust.edu/",target:"_blank",rel:"noopener noreferrer",children:["AUST ",(0,ea.jsx)(ni,{size:14})]})]})]}),(0,ea.jsxs)(pi,{children:[(0,ea.jsxs)(mi,{children:[(0,ea.jsx)(ai,{size:18}),"[November]"]}),(0,ea.jsx)(gi,{children:'Defended undergraduate thesis on "Generative Adversarial Networks for Crop Disease: A Case Study with Potato Disease Classification and Instance Segmentation"'})]}),(0,ea.jsxs)(pi,{children:[(0,ea.jsxs)(mi,{children:[(0,ea.jsx)(ei,{size:18}),"[August]"]}),(0,ea.jsxs)(gi,{children:["Secured 7",(0,ea.jsx)("sup",{children:"th"})," position at DL Sprint 2.0 - BUET CSE Fest 2023. ",(0,ea.jsxs)(bi,{href:"https://www.kaggle.com/competitions/dlsprint2/discussion/433389",target:"_blank",rel:"noopener noreferrer",children:["DL Sprint 2.0 ",(0,ea.jsx)(ni,{size:14})]})]})]}),(0,ea.jsxs)(pi,{children:[(0,ea.jsxs)(mi,{children:[(0,ea.jsx)(ri,{size:18}),"[July]"]}),(0,ea.jsxs)(gi,{children:["Participate in DL Sprint 2.0 - BUET CSE Fest 2023. ",(0,ea.jsxs)(bi,{href:"https://www.kaggle.com/competitions/dlsprint2/overview",target:"_blank",rel:"noopener noreferrer",children:["DL Sprint 2.0 ",(0,ea.jsx)(ni,{size:14})]})]})]}),(0,ea.jsxs)(pi,{children:[(0,ea.jsxs)(mi,{children:[(0,ea.jsx)(ti,{size:18}),"[June]"]}),(0,ea.jsxs)(gi,{children:["Secured 1",(0,ea.jsx)("sup",{children:"st"})," position at RESEARCH SYMPOSIUM 2023: AN INTRA-AUST RESEARCH EXHIBITION ",(0,ea.jsxs)(bi,{href:"https://aust.edu/events/1996",target:"_blank",rel:"noopener noreferrer",children:["RESEARCH SYMPOSIUM 2023 ",(0,ea.jsx)(ni,{size:14})]})]})]}),(0,ea.jsxs)(pi,{children:[(0,ea.jsxs)(mi,{children:[(0,ea.jsx)(ri,{size:18}),"[June]"]}),(0,ea.jsxs)(gi,{children:["Attended the RESEARCH SYMPOSIUM 2023: AN INTRA-AUST RESEARCH EXHIBITION ",(0,ea.jsxs)(bi,{href:"https://aust.edu/events/1996",target:"_blank",rel:"noopener noreferrer",children:["RESEARCH SYMPOSIUM 2023 ",(0,ea.jsx)(ni,{size:14})]})]})]}),(0,ea.jsxs)(pi,{children:[(0,ea.jsxs)(mi,{children:[(0,ea.jsx)(ai,{size:18}),"[April]"]}),(0,ea.jsxs)(gi,{children:["One paper got published at ",(0,ea.jsxs)(bi,{href:"https://ieee-ccwc.org/",target:"_blank",rel:"noopener noreferrer",children:["CCWC 2023 ",(0,ea.jsx)(ni,{size:14})]}),"."]})]}),(0,ea.jsxs)(pi,{children:[(0,ea.jsxs)(mi,{children:[(0,ea.jsx)(ri,{size:18}),"[March]"]}),(0,ea.jsx)(gi,{children:"Attended the 2023 IEEE 13th Annual Computing and Communication Workshop and Conference (CCWC 2023) (Virtual), Las Vegas, NV, USA."})]}),(0,ea.jsxs)(pi,{children:[(0,ea.jsxs)(mi,{children:[(0,ea.jsx)(ai,{size:18}),"[February]"]}),(0,ea.jsxs)(gi,{children:["One paper got accepted at IEEE 13th Annual Computing and Communication Workshop and Conference (CCWC) ",(0,ea.jsxs)(bi,{href:"https://ieee-ccwc.org/",target:"_blank",rel:"noopener noreferrer",children:["CCWC 2023 ",(0,ea.jsx)(ni,{size:14})]}),"."]})]})]})]})]}),yi=Ba("brain",[["path",{d:"M12 18V5",key:"adv99a"}],["path",{d:"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4",key:"1e3is1"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5",key:"1gqd8o"}],["path",{d:"M17.997 5.125a4 4 0 0 1 2.526 5.77",key:"iwvgf7"}],["path",{d:"M18 18a4 4 0 0 0 2-7.464",key:"efp6ie"}],["path",{d:"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517",key:"1gq6am"}],["path",{d:"M6 18a4 4 0 0 1-2-7.464",key:"k1g0md"}],["path",{d:"M6.003 5.125a4 4 0 0 0-2.526 5.77",key:"q97ue3"}]]),xi=Ba("heart",[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]]),wi=Ba("sparkles",[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]]),ki=Ba("shield-check",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]),ji=Ba("globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]),Si=Ba("microscope",[["path",{d:"M6 18h8",key:"1borvv"}],["path",{d:"M3 22h18",key:"8prr45"}],["path",{d:"M14 22a7 7 0 1 0 0-14h-1",key:"1jwaiy"}],["path",{d:"M9 14h2",key:"197e7h"}],["path",{d:"M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z",key:"1bmzmy"}],["path",{d:"M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3",key:"1drr47"}]]),Ei=Ba("leaf",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]),Ci=Xr.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`,Ai=Xr.h1`
  color: #1e293b;
  margin-bottom: 2rem;
  font-size: 3rem;
  font-weight: 700;
  text-align: center;
  background: linear-gradient(135deg, #7AB2D3, #4A628A);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,zi=Xr.p`
  text-align: center;
  color: #475569;
  font-family: 'Inter', sans-serif;
  line-height: 1.8;
  font-size: 1.1rem;
  margin-bottom: 4rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`,Ti=Xr.h1`
  font-size: 2.5rem;
  font-weight: 800;
  margin-top: 3rem;
  margin-bottom: 2rem;
  text-align: center;
  background: linear-gradient(135deg, #006098ff, #0048c5ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,Mi=Xr.div`
  margin-bottom: 4rem;
`,Pi=Xr.h2`
  color: #1e293b;
  font-family: 'Inter', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 12px;
  background: linear-gradient(135deg, #54a3d1ff, #7AB2D3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  &::after {
    content: '';
    flex: 1;
    height: 2px;
    background: linear-gradient(90deg, #7AB2D3, transparent);
    border-radius: 1px;
  }
`,Ri=Xr.div`
  margin-bottom: 1.5rem;
  font-family: 'Inter', sans-serif;
  color: #1e293b;
  line-height: 1.7;
  padding: 1.5rem;
  background: linear-gradient(135deg, #ffffff 0%, #DFF2EB 100%);
  border: 1px solid #B9E5E8;
  border-radius: 16px;
  transition: all 0.4s;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 15px 35px rgba(122, 178, 211, 0.2);
    border-color: #7AB2D3;
  }
`,Ni=Xr.span`
  color: #1e293b;
  font-weight: 700;
  font-size: 1.05rem;
`,_i=()=>(0,ea.jsxs)(Ci,{children:[(0,ea.jsx)(Ai,{children:"Research Areas"}),(0,ea.jsx)(zi,{children:"My research spans Natural Language Processing, Multimodal AI, and Computer Vision, focusing on low-resource languages, social media analysis, large language models, trustworthy AI, and healthcare applications."}),(0,ea.jsx)(Ti,{children:"1. Natural Language Processing (NLP)"}),(0,ea.jsxs)(Mi,{children:[(0,ea.jsxs)(Pi,{children:[(0,ea.jsx)(yi,{size:24})," Social Media Analysis"]}),(0,ea.jsxs)(Ri,{children:["+ ",(0,ea.jsx)(Ni,{children:"Motamot: A Dataset for Revealing the Supremacy of Large Language Models Over Transformer Models in Bengali Political Sentiment Analysis"})]}),(0,ea.jsxs)(Ri,{children:["+ ",(0,ea.jsx)(Ni,{children:"Assessing the Level of Toxicity Against Distinct Groups in Bangla Social Media Comments: A Comprehensive Investigation"})]}),(0,ea.jsxs)(Ri,{children:["+ ",(0,ea.jsx)(Ni,{children:"FanSpeak: A Bangla Dataset for Multi-Class Toxicity Detection in Sports Discourse and a Comparative Evaluation of PLMs and LLMs"})]})]}),(0,ea.jsxs)(Mi,{children:[(0,ea.jsxs)(Pi,{children:[(0,ea.jsx)(xi,{size:24})," AI for Healthcare"]}),(0,ea.jsxs)(Ri,{children:["+ ",(0,ea.jsx)(Ni,{children:"MindSpeak-Bangla: A Human\u2013LLM Collaborative Dataset for Chain-of-Thought Adaptation in Bangla Mental Health Advice Generation"})]}),(0,ea.jsxs)(Ri,{children:["+ ",(0,ea.jsxs)(Ni,{children:["BanglaMedQA: A Dataset for Adapting Zero-Shot Chain-of-Thought Reasoning in Bengali Medical Question Answering ",(0,ea.jsx)("span",{style:{color:"#e22200ff"},children:(0,ea.jsx)("em",{children:"(ongoing)"})})]})]})]}),(0,ea.jsxs)(Mi,{children:[(0,ea.jsxs)(Pi,{children:[(0,ea.jsx)(wi,{size:24})," Large Language Models (LLMs) "]}),(0,ea.jsxs)(Ri,{children:["+ ",(0,ea.jsx)(Ni,{children:"Unraveling the Dominance of Large Language Models Over Transformer Models for Bangla Natural Language Inference: A Comprehensive Study"})]}),(0,ea.jsxs)(Ri,{children:["+ ",(0,ea.jsx)(Ni,{children:"Tackling Hallucination in Bengali NLP: Enhancing Paraphrase Generation, Reading Comprehension, and Formal Application Writing Using LLMs with Few-Shot Learning, Fine-Tuning, and RAG"})]})]}),(0,ea.jsxs)(Mi,{children:[(0,ea.jsxs)(Pi,{children:[(0,ea.jsx)(ki,{size:24})," Trustworthy AI"]}),(0,ea.jsxs)(Ri,{children:["+ ",(0,ea.jsxs)(Ni,{children:["Cross-Cultural Moral Bias Detection in Story Understanding: Analyzing Intentionality and Fairness in LLM Judgments ",(0,ea.jsx)("span",{style:{color:"#e22200ff"},children:(0,ea.jsx)("em",{children:"(ongoing)"})})]})]}),(0,ea.jsxs)(Ri,{children:["+ ",(0,ea.jsxs)(Ni,{children:["Breaking Silence: A Jailbreaking Prompt Framework for Generating Sensitive and Controversial Narratives in Bangla ",(0,ea.jsx)("span",{style:{color:"#e22200ff"},children:(0,ea.jsx)("em",{children:"(ongoing)"})})]})]})]}),(0,ea.jsx)(Ti,{children:"2. Multimodal AI"}),(0,ea.jsxs)(Mi,{children:[(0,ea.jsxs)(Pi,{children:[(0,ea.jsx)(ji,{size:24})," Low-Resource Languages"]}),(0,ea.jsxs)(Ri,{children:["+ ",(0,ea.jsx)(Ni,{children:"Uddessho: An Extensive Benchmark Dataset for Multimodal Author Intent Classification in Low-Resource Bangla Language"})]}),(0,ea.jsxs)(Ri,{children:["+ ",(0,ea.jsx)(Ni,{children:"BanglaCalamityMMD: A Comprehensive Benchmark Dataset for Multimodal Disaster Identification in the Low-Resource Bangla Language"})]}),(0,ea.jsxs)(Ri,{children:["+ ",(0,ea.jsx)(Ni,{children:"MultiBanFakeDetect: Integrating Advanced Fusion Techniques for Multimodal Detection of Bangla Fake News in Under-Resourced Contexts"})]}),(0,ea.jsxs)(Ri,{children:["+ ",(0,ea.jsx)(Ni,{children:"BanglaMemeEvidence: A Multimodal Benchmark Dataset for Explanatory Evidence Detection in Bengali Memes"})]})]}),(0,ea.jsx)(Ti,{children:"3. Computer Vision (CV)"}),(0,ea.jsxs)(Mi,{children:[(0,ea.jsxs)(Pi,{children:[(0,ea.jsx)(Si,{size:24})," AI for Healthcare"]}),(0,ea.jsxs)(Ri,{children:["+ ",(0,ea.jsx)(Ni,{children:"Exploring Explainable AI Techniques for Improved Interpretability in Lung and Colon Cancer Classification"})]}),(0,ea.jsxs)(Ri,{children:["+ ",(0,ea.jsx)(Ni,{children:"Explainable Convolutional Neural Networks for Retinal Fundus Classification and Cutting-Edge Segmentation Models for Retinal Blood Vessels from Fundus Images"})]})]}),(0,ea.jsxs)(Mi,{children:[(0,ea.jsxs)(Pi,{children:[(0,ea.jsx)(Ei,{size:24})," Computer Vision Applications in Agriculture (Agriculture)"]}),(0,ea.jsxs)(Ri,{children:["+ ",(0,ea.jsx)(Ni,{children:"Classification of Potato Disease with Digital Image Processing Technique: A Hybrid Deep Learning Framework"})]}),(0,ea.jsxs)(Ri,{children:["+ ",(0,ea.jsx)(Ni,{children:"PotatoGANs: Utilizing Generative Adversarial Networks, Instance Segmentation, and Explainable AI for Enhanced Potato Disease Identification and Classification"})]})]})]}),Li=Ba("eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),Di=Ba("file-text",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]),Ii=Ba("code",[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]]),Fi=Ba("database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]),Bi=Ba("quote",[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]]),Oi=Ba("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),$i=Ba("copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]),Ui=Xr.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`,Hi=Xr.div`
  margin-bottom: 3rem;
  text-align: center;
`,Wi=Xr.p`
  color: #333;
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  line-height: 1.6;
`,Vi=Xr.span`
  color: #4A628A;
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  font-style: italic;
  background: linear-gradient(135deg, #DFF2EB, #B9E5E8);
  padding: 8px 16px;
  border-radius: 20px;
  display: inline-block;
`,qi=Xr.div`
  margin-bottom: 4rem;
`,Gi=Xr.h2`
  color: #1e293b;
  font-family: 'Inter', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
  background: linear-gradient(135deg, #7AB2D3, #4A628A);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, #7AB2D3, #4A628A);
    border-radius: 2px;
  }
`,Ki=Xr.div`
  margin-bottom: 2rem;
  padding: 2rem;
  border-radius: 16px;
  background: linear-gradient(135deg, #ffffff 0%, #DFF2EB 100%);
  border: 1px solid #B9E5E8;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #7AB2D3, #4A628A, #B9E5E8);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(122, 178, 211, 0.2);
    border-color: #7AB2D3;
  }
  
  &:hover::before {
    transform: scaleX(1);
  }
`,Yi=Xr.h3`
  color: #1e293b;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  line-height: 1.5;
`,Qi=Xr.p`
  color: #475569;
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  margin-bottom: 1rem;
  line-height: 1.6;
`,Ji=Xr.p`
  color: #64748b;
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  font-style: italic;
  margin-bottom: 1.5rem;
  line-height: 1.5;
`,Xi=Xr.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 1.5rem;
`,Zi=Xr.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  color: white;
  text-decoration: none;
  border: none;
  border-radius: 10px;
  font-size: 0.75rem;
  font-weight: 600;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(189, 241, 250, 0.8), transparent);
    transition: left 0.5s;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &.abstract {
    background: linear-gradient(135deg,#E195AB,#E14434);
    color: white;
  }
  
  &.citation {
    background: linear-gradient(135deg, #10b981, #A6B28B);
    color: white;
  }
`,eo=Xr.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: linear-gradient(135deg, #7AB2D3, #4A628A);
  color: white;
  text-decoration: none;
  border-radius: 10px;
  font-size: 0.75rem;
  font-weight: 600;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }
  

  &.pdf {
    background: linear-gradient(135deg, #7AB2D3, #4A628A);
    color: white;
  }
  
  &.code {
    background: linear-gradient(135deg,#52357B,#898AC4);;
    color: white;
  }
  
  &.dataset {
    background: linear-gradient(135deg,#415E72,#67b2e6);
    color: white;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(59, 130, 246, 0.3);
    text-decoration: none;
  }
  
  &:hover::before {
    left: 100%;
  }
`,to=Xr.span`
  display: inline-block;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-left: 12px;
  
  &.accepted {
    background: linear-gradient(135deg, #10b981, #059669);
    color: white;
  }
  
  &.under-review {
    background: linear-gradient(135deg, #f59e0b, #d97706);
    color: white;
  }
  
  &.submitted {
    background: linear-gradient(135deg, #8b5cf6, #7c3aed);
    color: white;
  }
  &.rejected {
    background: linear-gradient(135deg, #ef4444, #dc2626);
    color: white;
  }
  &.preprint {
    background: linear-gradient(135deg, #6366f1, #4f46e5);
    color: white;
  
  }
  &.published {
    background: linear-gradient(135deg, #f45e5eff, #e76565ff);
    color: white;
`,no=Xr.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
`,ro=Xr.div`
  background: white;
  border-radius: 16px;
  padding: 2rem;
  max-width: 800px;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
`,ao=Xr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e2e8f0;
`,io=Xr.h3`
  color: #1e293b;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
`,oo=Xr.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #64748b;
  padding: 0.5rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  
  &:hover {
    background: #f1f5f9;
    color: #1e293b;
  }
`,lo=Xr.div`
  color: #475569;
  line-height: 1.7;
  font-size: 1rem;
`,so=Xr.button`
  background: linear-gradient(135deg, #ef4444, #dc2626);
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 1rem;
  
  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
  }
`,co=()=>{const[t,n]=(0,e.useState)(null),r=(e,t,r)=>{n({type:e,title:t,content:r})},a=()=>{n(null)};return(0,ea.jsxs)(Ui,{children:[(0,ea.jsxs)(Hi,{children:[(0,ea.jsxs)(Wi,{children:["Most recent publication updates can be found on my"," ",(0,ea.jsx)("a",{href:"https://scholar.google.com/citations?user=tU258wwAAAAJ&hl=en",target:"_blank",rel:"noopener noreferrer",style:{color:"#3b82f6",fontWeight:"600"},children:(0,ea.jsx)("em",{children:"Google Scholar"})})," ","profile."]}),(0,ea.jsx)(Vi,{children:"[*] denotes equal contribution"})]}),(0,ea.jsxs)(qi,{children:[(0,ea.jsx)(Gi,{children:"2025"}),(0,ea.jsxs)(Ki,{children:[(0,ea.jsxs)(Yi,{children:["MultiBanFakeDetect: Integrating Advanced Fusion Techniques for Multimodal Detection of Bangla Fake News in Under-Resourced Contexts",(0,ea.jsx)(to,{className:"published",children:"Q1 Journal"})]}),(0,ea.jsxs)(Qi,{children:[(0,ea.jsx)("strong",{children:"Authors:"})," Fatema Tuj Johora Faria, ",(0,ea.jsx)("strong",{style:{color:"#10b981"},children:"Mukaffi Bin Moin"}),", Md Arafat Alam Khandaker, Zayeed Hasan, Niful Islam, Khan Md Hasib,  and M. F. Mridha"]}),(0,ea.jsxs)(Ji,{children:[(0,ea.jsx)("strong",{children:"Journal:"})," ",(0,ea.jsx)("em",{children:"Published in International Journal of Information Management Data Insights"})," (",(0,ea.jsx)("a",{href:"https://www.sciencedirect.com/journal/international-journal-of-information-management-data-insights",target:"_blank",rel:"noopener noreferrer",style:{color:"#3b82f6"},children:"International Journal of Information Management Data Insights"}),")"]}),(0,ea.jsxs)(Xi,{children:[(0,ea.jsxs)(Zi,{className:"abstract",onClick:()=>r("abstract","MultiBanFakeDetect","The rise of false news in recent years poses significant risks to society. As misinformation spreads rapidly, automated detection systems are essential to mitigate its impact. However, most existing methods rely solely on textual analysis, limiting their effectiveness. The challenge is further compounded by the lack of a large-scale, multimodal dataset for Bangla fake news detection, as existing datasets are either small or unimodal. To address this, we introduce MultiBanFakeDetect, a novel multimodal dataset integrating both textual and visual information. This dataset comprises manually curated real and fake news samples from various online sources. Additionally, we propose MultiFusionFake, a hybrid multimodal fake news detection framework that fuses text and image modalities using an Early Fusion approach while also comparing Late and Intermediate fusion techniques. Our experiments show that MultiFusionFake, combining DenseNet-169 and mBERT, achieves 79.69% accuracy, outperforming the text-only mBERT model\u2019s 73.13%, reflecting a 6.56 percentage point improvement. These results underscore the advantages of multimodal over unimodal methods. To the best of our knowledge, this is the first study on multimodal fake news detection in the under-resourced Bangla context, offering a promising approach to combating online misinformation."),children:[(0,ea.jsx)(Li,{size:16}),"Abstract"]}),(0,ea.jsxs)(eo,{className:"pdf",href:"https://www.sciencedirect.com/science/article/pii/S2667096825000291",target:"_blank",rel:"noopener noreferrer",children:[(0,ea.jsx)(Di,{size:16}),"PDF"]}),(0,ea.jsxs)(eo,{className:"code",href:"https://github.com/fatemafaria142/MultiBanFakeDetect-An-Extensive-Benchmark-Dataset-for-Multimodal-Bangla-Fake-News-Detection",target:"_blank",rel:"noopener noreferrer",children:[(0,ea.jsx)(Ii,{size:16}),"Code"]}),(0,ea.jsxs)(eo,{className:"dataset",href:"https://data.mendeley.com/datasets/k5pbz9795f/1",target:"_blank",rel:"noopener noreferrer",children:[(0,ea.jsx)(Fi,{size:16}),"Dataset"]}),(0,ea.jsxs)(Zi,{className:"citation",onClick:()=>r("citation","MultiBanFakeDetect","@article{MultiBanFakeDetect,\n  title={MultiBanFakeDetect: Integrating advanced fusion techniques for multimodal detection of Bangla fake news in under-resourced contexts},\n  author={Faria, Fatema Tuj Johora and Moin, Mukaffi Bin and Hasan, Zayeed and Khandaker, Md Arafat Alam and Islam, Niful and Hasib, Khan Md and Mridha, MF},\n  journal={International Journal of Information Management Data Insights},\n volume={5},\n number={2},\n  pages={100347},\n  year={2025},\n publisher={Elsevier}\n}"),children:[(0,ea.jsx)(Bi,{size:16}),"Citation bib"]})]})]}),(0,ea.jsxs)(Ki,{children:[(0,ea.jsxs)(Yi,{children:["BanglaCalamityMMD: A Comprehensive Benchmark Dataset for Multimodal Disaster Identification in the Low-Resource Bangla Language",(0,ea.jsx)(to,{className:"published",children:"Q1 Journal"})]}),(0,ea.jsxs)(Qi,{children:[(0,ea.jsx)("strong",{children:"Authors:"})," Fatema Tuj Johora Faria, ",(0,ea.jsx)("strong",{style:{color:"#10b981"},children:"Mukaffi Bin Moin"}),", Busra Kamal Rafa, Swarnajit Saha, Md. Mahfuzur Rahman, Khan Md Hasib, and M. F. Mridha"]}),(0,ea.jsxs)(Ji,{children:[(0,ea.jsx)("strong",{children:"Journal:"})," ",(0,ea.jsx)("em",{children:"Published in  International Journal of Disaster Risk Reduction (Q1)"})," (",(0,ea.jsx)("a",{href:"https://www.sciencedirect.com/journal/international-journal-of-disaster-risk-reduction",target:"_blank",rel:"noopener noreferrer",style:{color:"#3b82f6"},children:"Disaster Risk Reduction"}),")"]}),(0,ea.jsxs)(Xi,{children:[(0,ea.jsxs)(Zi,{className:"abstract",onClick:()=>r("abstract","BanglaCalamityMMD","The abundance of social media datasets with crisis messages has greatly impacted disaster response and assessment. Extracting vital information from this data is crucial for enhancing situational awareness and enabling rapid decision-making, necessitating robust techniques to filter out misleading and irrelevant content. This study introduces a hybrid multimodal fusion technique that integrates text and image data to identify relevant disaster-related images from social media. It represents a pioneering effort in multimodal disaster identification for the Bangla language, addressing a significant gap where previous research has focused exclusively on English text. To facilitate this leap, We curated the \u201cBanglaCalamityMMD\u201d dataset, which includes 7,903 data points distributed across seven disaster categories such as Earthquake, Flood, Landslides, Wildfires, Tropical Storms, Droughts, and Human Damage, along with a non-disaster category. Our technique employs advanced deep learning methodologies: DisasterTextNet for text-based disaster detection, DisasterImageNet for image-based disaster categorization, and DisasterMultiFusionNet, which combines text and image modalities using fusion techniques like Early Fusion, Late Fusion, and Intermediate Fusion. The system uses Vision Transformer variations to extract visual data and pre-trained BERT models for textual insights. Our multimodal architecture (DisasterMultiFusionNet) significantly outperforms unimodal approaches. The unimodal text-based approach achieves 79.90% accuracy with mBERT, also the image-based approach reaches 78.65% accuracy using Swin Transformer. In comparison, our multimodal technique achieves 85.25% accuracy with Swin Transformer and mBERT (DisasterMultiFusionNet), showing a 5.35% improvement over the best unimodal approach. This highlights the effectiveness of our fusion technique and the reliability of our multimodal framework in enhancing disaster identification accuracy. To our knowledge, this is the first research on multimodal disaster identification in the low-resource Bangla language context."),children:[(0,ea.jsx)(Li,{size:16}),"Abstract"]}),(0,ea.jsxs)(eo,{className:"pdf",href:"#",target:"_blank",rel:"noopener noreferrer",children:[(0,ea.jsx)(Di,{size:16}),"PDF"]}),(0,ea.jsxs)(eo,{className:"code",href:"https://github.com/Mukaffi28/BanglaCalamityMMD-A-Comprehensive-Benchmark-Dataset-for-Multimodal-Disaster-Identification",target:"_blank",rel:"noopener noreferrer",children:[(0,ea.jsx)(Ii,{size:16}),"Code"]}),(0,ea.jsxs)(eo,{className:"dataset",href:"https://data.mendeley.com/datasets/7dggbjn5sd/1",target:"_blank",rel:"noopener noreferrer",children:[(0,ea.jsx)(Fi,{size:16}),"Dataset"]}),(0,ea.jsxs)(Zi,{className:"citation",onClick:()=>r("citation","BanglaCalamityMMD","@article{BanglaCalamityMMD,\n  title={BanglaCalamityMMD: A comprehensive benchmark dataset for multimodal disaster identification in the low-resource Bangla language},\n  author={Faria, Fatema Tuj Johora and Moin, Mukaffi Bin and Rafa, Busra Kamal and Saha, Swarnajit and Rahman, Md Mahfuzur and Hasib, Khan Md and Mridha, MF},\n  journal={International Journal of Disaster Risk Reduction},\n  volume={130},\n  pages={105800},\n  year={2025},\n  issn={2212-4209},\n  doi={https://doi.org/10.1016/j.ijdrr.2025.105800},\n  url={https://www.sciencedirect.com/science/article/pii/S2212420925006247},\n  keywords={Multimodal disaster identification, Bangla language, Low-resource, Social media, Text and image fusion, Deep learning, Disaster analysis}\n}"),children:[(0,ea.jsx)(Bi,{size:16}),"Citation bib"]})]})]}),(0,ea.jsxs)(Ki,{children:[(0,ea.jsxs)(Yi,{children:["MindSpeak-Bangla: A HumanLLM Collaborative Dataset for Chain-of-Thought Adaptation in Bangla Mental Health Advice Generation",(0,ea.jsx)(to,{className:"published",children:"Q1 Journal"})," ",(0,ea.jsx)(to,{className:"under-review",children:"Under Review"})]}),(0,ea.jsxs)(Qi,{children:[(0,ea.jsx)("strong",{children:"Authors:"})," Fatema Tuj Johora Faria, ",(0,ea.jsx)("strong",{style:{color:"#10b981"},children:"Mukaffi Bin Moin"}),", Md. Mahfuzur Rahman, Khan Md Hasib, Md. Jakir Hossen, and M. F. Mridha."]}),(0,ea.jsxs)(Ji,{children:[(0,ea.jsx)("strong",{children:"Journal:"})," ",(0,ea.jsx)("em",{children:"Under Review in IEEE Open Journal of the Computer Society"})," (",(0,ea.jsx)("a",{href:"https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=8782664",target:"_blank",rel:"noopener noreferrer",style:{color:"#3b82f6"},children:"IEEE ComSoc"}),")"]}),(0,ea.jsxs)(Xi,{children:[(0,ea.jsxs)(Zi,{className:"abstract",onClick:()=>r("abstract","MindSpeak","Not published yet"),children:[(0,ea.jsx)(Li,{size:16}),"Abstract"]}),(0,ea.jsxs)(eo,{className:"pdf",href:"#",target:"_blank",rel:"noopener noreferrer",children:[(0,ea.jsx)(Di,{size:16}),"PDF"]}),(0,ea.jsxs)(eo,{className:"code",href:"#",target:"_blank",rel:"noopener noreferrer",children:[(0,ea.jsx)(Ii,{size:16}),"Code"]}),(0,ea.jsxs)(eo,{className:"dataset",href:"#",target:"_blank",rel:"noopener noreferrer",children:[(0,ea.jsx)(Fi,{size:16}),"Dataset"]}),(0,ea.jsxs)(Zi,{className:"citation",onClick:()=>r("citation","MindSpeak","Not published yet"),children:[(0,ea.jsx)(Bi,{size:16}),"Citation bib"]})]})]}),(0,ea.jsxs)(Ki,{children:[(0,ea.jsxs)(Yi,{children:["FanSpeak: A Bangla Dataset for Multi-Class Toxicity Detection in Sports Discourse and a Comparative Evaluation of PLMs and LLMs",(0,ea.jsx)(to,{className:"published",children:"Q1 Journal"})," ",(0,ea.jsx)(to,{className:"under-review",children:"Under Review"})]}),(0,ea.jsxs)(Qi,{children:[(0,ea.jsx)("strong",{children:"Authors:"})," Md. Arafat Alam Khandaker*, Ziyan Shirin Raha*, ",(0,ea.jsx)("strong",{style:{color:"#10b981"},children:"Mukaffi Bin Moin*"}),", Dipta Biswas, and Khan Md Hasib"]}),(0,ea.jsxs)(Ji,{children:[(0,ea.jsx)("strong",{children:"Journal:"})," ",(0,ea.jsx)("em",{children:"Under Review in Information Processing & Management"})," (",(0,ea.jsx)("a",{href:"https://www.sciencedirect.com/journal/information-processing-and-management",target:"_blank",rel:"noopener noreferrer",style:{color:"#3b82f6"},children:"Information Processing & Management"}),")"]}),(0,ea.jsxs)(Xi,{children:[(0,ea.jsxs)(Zi,{className:"abstract",onClick:()=>r("abstract","FanSpeak","Not published yet"),children:[(0,ea.jsx)(Li,{size:16}),"Abstract"]}),(0,ea.jsxs)(eo,{className:"pdf",href:"#",target:"_blank",rel:"noopener noreferrer",children:[(0,ea.jsx)(Di,{size:16}),"PDF"]}),(0,ea.jsxs)(eo,{className:"code",href:"#",target:"_blank",rel:"noopener noreferrer",children:[(0,ea.jsx)(Ii,{size:16}),"Code"]}),(0,ea.jsxs)(eo,{className:"dataset",href:"#",target:"_blank",rel:"noopener noreferrer",children:[(0,ea.jsx)(Fi,{size:16}),"Dataset"]}),(0,ea.jsxs)(Zi,{className:"citation",onClick:()=>r("citation","FanSpeak","Not published yet"),children:[(0,ea.jsx)(Bi,{size:16}),"Citation bib"]})]})]})]}),(0,ea.jsxs)(qi,{children:[(0,ea.jsx)(Gi,{children:"2024"}),(0,ea.jsxs)(Ki,{children:[(0,ea.jsxs)(Yi,{children:["Vashantor: A Large-scale Multilingual Benchmark Dataset for Automated Translation of Bangla Regional Dialects to Bangla Language",(0,ea.jsx)(to,{className:"published",children:"Q1 Journal"}),(0,ea.jsx)(to,{className:"under-review",children:"Under Review"})]}),(0,ea.jsxs)(Qi,{children:[(0,ea.jsx)("strong",{children:"Authors:"})," Fatema Tuj Johora Faria, ",(0,ea.jsx)("strong",{style:{color:"#10b981"},children:"Mukaffi Bin Moin"}),", Ahmed Al Wase, Mehidi Ahmmed, Md Rabius Sani, and Tashreef Muhammad."]}),(0,ea.jsxs)(Ji,{children:[(0,ea.jsx)("strong",{children:"Journal:"})," ",(0,ea.jsx)("em",{children:"Under Review in Array (Q1)"})," (",(0,ea.jsx)("a",{href:"https://www.sciencedirect.com/journal/array",target:"_blank",rel:"noopener noreferrer",style:{color:"#3b82f6"},children:"Array"}),")"]}),(0,ea.jsxs)(Xi,{children:[(0,ea.jsxs)(Zi,{className:"abstract",onClick:()=>r("abstract","Vashantor","The Bangla linguistic variety is a fascinating mix of regional dialects that adds to the cultural diversity of the Bangla-speaking community. Despite extensive study into translating Bangla to English, English to Bangla, and Banglish to Bangla in the past, there has been a noticeable gap in translating Bangla regional dialects into standard Bangla. In this study, we set out to fill this gap by creating a collection of 32,500 sentences, encompassing Bangla, Banglish, and English, representing five regional Bangla dialects. Our aim is to translate these regional dialects into standard Bangla and detect regions accurately. To achieve this, we proposed models known as mT5 and BanglaT5 for translating regional dialects into standard Bangla. Additionally, we employed mBERT and Bangla-bert-base to determine the specific regions from where these dialects originated. Our experimental results showed the highest BLEU score of 69.06 for Mymensingh regional dialects and the lowest BLEU score of 36.75 for Chittagong regional dialects. We also observed the lowest average word error rate of 0.1548 for Mymensingh regional dialects and the highest of 0.3385 for Chittagong regional dialects. For region detection, we achieved an accuracy of 85.86% for Bangla-bert-base and 84.36% for mBERT. This is the first large-scale investigation of Bangla regional dialects to Bangla machine translation. We believe our findings will not only pave the way for future work on Bangla regional dialects to Bangla machine translation, but will also be useful in solving similar language-related challenges in low-resource language conditions."),children:[(0,ea.jsx)(Li,{size:16}),"Abstract"]}),(0,ea.jsxs)(eo,{href:"https://arxiv.org/pdf/2311.11142",target:"_blank",rel:"noopener noreferrer",children:[(0,ea.jsx)(Di,{size:16}),"PDF"]}),(0,ea.jsxs)(eo,{href:"https://github.com/Mukaffi28/Vashantor-A-Large-scale-Multilingual-Benchmark-Dataset",target:"_blank",rel:"noopener noreferrer",children:[(0,ea.jsx)(Ii,{size:16}),"Code"]}),(0,ea.jsxs)(eo,{href:"https://data.mendeley.com/datasets/bj5jgk878b/2",target:"_blank",rel:"noopener noreferrer",children:[(0,ea.jsx)(Fi,{size:16}),"Dataset"]}),(0,ea.jsxs)(Zi,{className:"citation",onClick:()=>r("citation","Vashantor","@misc{faria2023vashantor,\n  title={Vashantor: A Large-scale Multilingual Benchmark Dataset for Automated Translation of Bangla Regional Dialects to Bangla Language},\n  author={Fatema Tuj Johora Faria and Mukaffi Bin Moin and Ahmed Al Wase and Mehidi Ahmmed and Md. Rabius Sani and Tashreef Muhammad},\n  year={2023},\n  eprint={2311.11142},\n  archivePrefix={arXiv},\n  primaryClass={cs.CL}\n}"),children:[(0,ea.jsx)(Bi,{size:16}),"Citation bib"]})]})]}),(0,ea.jsxs)(Ki,{children:[(0,ea.jsx)(Yi,{children:"Motamot: A Dataset for Revealing the Supremacy of Large Language Models over Transformer Models in Bengali Political Sentiment Analysis"}),(0,ea.jsxs)(Qi,{children:[(0,ea.jsx)("strong",{children:"Authors:"})," Fatema Tuj Johora Faria*, ",(0,ea.jsx)("strong",{style:{color:"#10b981"},children:"Mukaffi Bin Moin*"}),", Rabeya Islam Mumu, Md Mahabubul Alam Abir, Abrar Nawar Alfy and Mohammad Shafiul Alam"]}),(0,ea.jsxs)(Ji,{children:[(0,ea.jsx)("strong",{children:"Conference:"})," ",(0,ea.jsx)("em",{children:"Published in The IEEE Region 10 Symposium (TENSYMP 2024)"})," (",(0,ea.jsx)("a",{href:"https://ieeedelhi-tensymp2024.org/",target:"_blank",rel:"noopener noreferrer",style:{color:"#3b82f6"},children:"TENSYMP 2024"}),")"]}),(0,ea.jsxs)(Xi,{children:[(0,ea.jsxs)(Zi,{className:"abstract",onClick:()=>r("abstract","Motamot","Sentiment analysis is the process of identifying and categorizing people's emotions or opinions regarding various topics. Analyzing political sentiment is critical for understanding the complexities of public opinion processes, especially during election seasons. It gives significant information on voter preferences, attitudes, and current trends. In this study, we investigate political sentiment analysis during Bangladeshi elections, specifically examining how effectively Pre-trained Language Models (PLMs) and Large Language Models (LLMs) capture complex sentiment characteristics. Our study centers on the creation of the \"Motamot\" dataset, comprising 7,058 instances annotated with positive and negative sentiments, sourced from diverse online newspaper portals, forming a comprehensive resource for political sentiment analysis. We meticulously evaluate the performance of various PLMs including BanglaBERT, Bangla BERT Base, XLM-RoBERTa, mBERT, and sahajBERT, alongside LLMs such as Gemini 1.5 Pro and GPT 3.5 Turbo. Moreover, we explore zero-shot and few-shot learning strategies to enhance our understanding of political sentiment analysis methodologies. Our findings underscore BanglaBERT's commendable accuracy of 88.10% among PLMs. However, the exploration into LLMs reveals even more promising results. Through the adept application of Few-Shot learning techniques, Gemini 1.5 Pro achieves an impressive accuracy of 96.33%, surpassing the remarkable performance of GPT 3.5 Turbo, which stands at 94%. This underscores Gemini 1.5 Pro's status as the superior performer in this comparison."),children:[(0,ea.jsx)(Li,{size:16}),"Abstract"]}),(0,ea.jsxs)(eo,{href:"https://arxiv.org/pdf/2407.19528",target:"_blank",rel:"noopener noreferrer",children:[(0,ea.jsx)(Di,{size:16}),"PDF"]}),(0,ea.jsxs)(eo,{href:"https://github.com/Mukaffi28/Bengali-Political-Sentiment-Analysis",target:"_blank",rel:"noopener noreferrer",children:[(0,ea.jsx)(Ii,{size:16}),"Code"]}),(0,ea.jsxs)(eo,{href:"https://data.mendeley.com/datasets/hdhnrrwdz2/1",target:"_blank",rel:"noopener noreferrer",children:[(0,ea.jsx)(Fi,{size:16}),"Dataset"]}),(0,ea.jsxs)(Zi,{className:"citation",onClick:()=>r("citation","Motamot","@misc{faria2024motamotdatasetrevealingsupremacy,\n  title={Motamot: A Dataset for Revealing the Supremacy of Large Language Models over Transformer Models in Bengali Political Sentiment Analysis}, \n  author={Fatema Tuj Johora Faria and Mukaffi Bin Moin and Rabeya Islam Mumu and Md Mahabubul Alam Abir and Abrar Nawar Alfy and Mohammad Shafiul Alam},\n  year={2024},\n  eprint={2407.19528},\n  archivePrefix={arXiv},\n  primaryClass={cs.CL},\n  url={https://arxiv.org/abs/2407.19528}\n}"),children:[(0,ea.jsx)(Bi,{size:16}),"Citation bib"]})]})]}),(0,ea.jsxs)(Ki,{children:[(0,ea.jsx)(Yi,{children:"Assessing the Level of Toxicity Against Distinct Groups in Bangla Social Media Comments: A Comprehensive Investigation"}),(0,ea.jsxs)(Qi,{children:[(0,ea.jsx)("strong",{children:"Authors:"})," ",(0,ea.jsx)("strong",{style:{color:"#10b981"},children:"Mukaffi Bin Moin"}),", Pronay Debnath, Usafa Akther Rifa, Rijeet Bin Anis"]}),(0,ea.jsxs)(Ji,{children:[(0,ea.jsx)("strong",{children:"Conference:"})," ",(0,ea.jsx)("em",{children:"Published in 18th International Conference on Information Technology and Applications (ICITA 2024)"})," (",(0,ea.jsx)("a",{href:"https://link.springer.com/book/10.1007/978-981-96-1758-6",target:"_blank",rel:"noopener noreferrer",style:{color:"#3b82f6"},children:"ICITA 2024"}),")"]}),(0,ea.jsxs)(Xi,{children:[(0,ea.jsxs)(Zi,{className:"abstract",onClick:()=>r("abstract","Assessing the Level of Toxicity","Social media platforms have a vital role in the modern world, serving as conduits for communication, the exchange of ideas, and the establishment of networks. However, the misuse of these platforms through toxic comments, which can range from offensive remarks to hate speech, is a concerning issue. This study focuses on identifying toxic comments in the Bengali language targeting three specific groups: transgender people, indigenous people, and migrant people, from multiple social media sources. The study delves into the intricate process of identifying and categorizing toxic language while considering the varying degrees of toxicity: high, medium, and low. The methodology involves creating a dataset, manual annotation, and employing pre-trained transformer models like Bangla-BERT, bangla-bert-base, distil-BERT, and Bert-base-multilingual-cased for classification. Diverse assessment metrics such as accuracy, recall, precision, and F1-score are employed to evaluate the model's effectiveness. The experimental findings reveal that Bangla-BERT surpasses alternative models, achieving an F1-score of 0.8903. This research exposes the complexity of toxicity in Bangla social media dialogues, revealing its differing impacts on diverse demographic groups."),children:[(0,ea.jsx)(Li,{size:16}),"Abstract"]}),(0,ea.jsxs)(eo,{href:"https://arxiv.org/pdf/2409.17130",target:"_blank",rel:"noopener noreferrer",children:[(0,ea.jsx)(Di,{size:16}),"PDF"]}),(0,ea.jsxs)(eo,{href:"#",target:"_blank",rel:"noopener noreferrer",children:[(0,ea.jsx)(Ii,{size:16}),"Code"]}),(0,ea.jsxs)(eo,{href:"#",target:"_blank",rel:"noopener noreferrer",children:[(0,ea.jsx)(Fi,{size:16}),"Dataset"]}),(0,ea.jsxs)(Zi,{className:"citation",onClick:()=>r("citation","Assessing the Level of Toxicity",'@InProceedings{10.1007/978-981-96-1758-6_46,\n  author="Moin, Mukaffi Bin\n  and Debnath, Pronay\n  and Rifa, Usafa Akther\n  and Anis, Rijeet Bin",\n  editor="Ullah, Abrar\n  and Anwar, Sajid",\n  title="Assessing the Level of Toxicity Against Distinct Groups in Bangla Social Media Comments: A Comprehensive Investigation",\n  booktitle="Proceedings of International Conference on Information Technology and Applications",\n  year="2025",\n  publisher="Springer Nature Singapore",\n  address="Singapore",\n  pages="557--569",\n  isbn="978-981-96-1758-6"\n}'),children:[(0,ea.jsx)(Bi,{size:16}),"Citation bib"]})]})]}),(0,ea.jsxs)(Ki,{children:[(0,ea.jsx)(Yi,{children:"Uddessho: An Extensive Benchmark Dataset for Multimodal Author Intent Classification in Low-Resource Bangla Language"}),(0,ea.jsxs)(Qi,{children:[(0,ea.jsx)("strong",{children:"Authors:"})," Fatema Tuj Johora Faria, ",(0,ea.jsx)("strong",{style:{color:"#10b981"},children:"Mukaffi Bin Moin"}),", Md. Mahfuzur Rahman, Md Morshed Alam Shanto, Asif Iftekher Fahim and Md. Moinul Hoque"]}),(0,ea.jsxs)(Ji,{children:[(0,ea.jsx)("strong",{children:"Conference:"})," ",(0,ea.jsx)("em",{children:"Published in 18th International Conference on Information Technology and Applications (ICITA 2024)"})," (",(0,ea.jsx)("a",{href:"https://link.springer.com/book/10.1007/978-981-96-1758-6",target:"_blank",rel:"noopener noreferrer",style:{color:"#3b82f6"},children:"ICITA 2024"}),")"]}),(0,ea.jsxs)(Xi,{children:[(0,ea.jsxs)(Zi,{className:"abstract",onClick:()=>r("abstract","Uddessho",'With the increasing popularity of daily information sharing and acquisition on the Internet, this paper introduces an innovative approach for intent classification in Bangla language, focusing on social media posts where individuals share their thoughts and opinions. The proposed method leverages multimodal data with particular emphasis on authorship identification, aiming to understand the underlying purpose behind textual content, especially in the context of varied user-generated posts on social media. Current methods often face challenges in low-resource languages like Bangla, particularly when author traits intricately link with intent, as observed in social media posts. To address this, we present the Multimodal-based Author Bangla Intent Classification (MABIC) framework, utilizing text and images to gain deeper insights into the conveyed intentions. We have created a dataset named "Uddessho," comprising 3,048 instances sourced from social media. Our methodology comprises two approaches for classifying textual intent and multimodal author intent, incorporating early fusion and late fusion techniques. In our experiments, the unimodal approach achieved an accuracy of 64.53% in interpreting Bangla textual intent. In contrast, our multimodal approach significantly outperformed traditional unimodal methods, achieving an accuracy of 76.19%. This represents an improvement of 11.66%. To our best knowledge, this is the first research work on multimodal-based author intent classification for low-resource Bangla language social media posts.'),children:[(0,ea.jsx)(Li,{size:16}),"Abstract"]}),(0,ea.jsxs)(eo,{href:"https://arxiv.org/pdf/2409.09504",target:"_blank",rel:"noopener noreferrer",children:[(0,ea.jsx)(Di,{size:16}),"PDF"]}),(0,ea.jsxs)(eo,{href:"https://github.com/fatemafaria142/Uddessho-An-Benchmark-Dataset-for-Multimodal-Author-Intent-Classification-in-Bangla-Language",target:"_blank",rel:"noopener noreferrer",children:[(0,ea.jsx)(Ii,{size:16}),"Code"]}),(0,ea.jsxs)(eo,{href:"https://data.mendeley.com/datasets/mzxmt8tfjs/1",target:"_blank",rel:"noopener noreferrer",children:[(0,ea.jsx)(Fi,{size:16}),"Dataset"]}),(0,ea.jsxs)(Zi,{className:"citation",onClick:()=>r("citation","Uddessho",'@InProceedings{10.1007/978-981-96-1758-6_32,\n  author="Faria, Fatema Tuj Johora\n  and Moin, Mukaffi Bin\n  and Rahman, Md. Mahfuzur\n  and Shanto, Md. Morshed Alam\n  and Fahim, Asif Iftekher\n  and Hoque, Md. Moinul",\n  editor="Ullah, Abrar\n  and Anwar, Sajid",\n  title="Uddessho: An Extensive Benchmark Dataset for Multimodal Author Intent Classification in Low-Resource Bangla Language",\n  booktitle="Proceedings of International Conference on Information Technology and Applications",\n  year="2025",\n  publisher="Springer Nature Singapore",\n  address="Singapore",\n  pages="383--393",\n  isbn="978-981-96-1758-6"\n}'),children:[(0,ea.jsx)(Bi,{size:16}),"Citation bib"]})]})]}),(0,ea.jsxs)(Ki,{children:[(0,ea.jsx)(Yi,{children:"Unraveling the Dominance of Large Language Models Over Transformer Models for Bangla Natural Language Inference: A Comprehensive Study"}),(0,ea.jsxs)(Qi,{children:[(0,ea.jsx)("strong",{children:"Authors:"})," Fatema Tuj Johora Faria, ",(0,ea.jsx)("strong",{style:{color:"#10b981"},children:"Mukaffi Bin Moin"}),", Asif Iftekher Fahim, Pronay Debnath, Faisal Muhammad Shah"]}),(0,ea.jsxs)(Ji,{children:[(0,ea.jsx)("strong",{children:"Conference:"})," ",(0,ea.jsx)("em",{children:"Published in 4th International Conference on Computing and Communication Networks (ICCCNet-2024)"})," (",(0,ea.jsx)("a",{href:"https://icccn.co.uk/",target:"_blank",rel:"noopener noreferrer",style:{color:"#3b82f6"},children:"ICCCNet 2024"}),")"]}),(0,ea.jsxs)(Xi,{children:[(0,ea.jsxs)(Zi,{className:"abstract",onClick:()=>r("abstract","Unraveling the Dominance of LLMs",'Natural Language Inference (NLI) is a cornerstone of Natural Language Processing (NLP), providing insights into the entailment relationships between text pairings. It is a critical component of Natural Language Understanding (NLU), demonstrating the ability to extract information from spoken or written interactions. NLI is mainly concerned with determining the entailment relationship between two statements, known as the premise and hypothesis. When the premise logically implies the hypothesis, the pair is labeled "entailment". If the hypothesis contradicts the premise, the pair receives the "contradiction" label. When there is insufficient evidence to establish a connection, the pair is described as "neutral". Despite the success of Large Language Models (LLMs) in various tasks, their effectiveness in NLI remains constrained by issues like low-resource domain accuracy, model overconfidence, and difficulty in capturing human judgment disagreements. This study addresses the underexplored area of evaluating LLMs in low-resourced languages such as Bengali. Through a comprehensive evaluation, we assess the performance of prominent LLMs and state-of-the-art (SOTA) models in Bengali NLP tasks, focusing on natural language inference. Utilizing the XNLI dataset, we conduct zero-shot and few-shot evaluations, comparing LLMs like GPT-3.5 Turbo and Gemini 1.5 Pro with models such as BanglaBERT, Bangla BERT Base, DistilBERT, mBERT, and sahajBERT. Our findings reveal that while LLMs can achieve comparable or superior performance to fine-tuned SOTA models in few-shot scenarios, further research is necessary to enhance our understanding of LLMs in languages with modest resources like Bengali. This study underscores the importance of continued efforts in exploring LLM capabilities across diverse linguistic contexts'),children:[(0,ea.jsx)(Li,{size:16}),"Abstract"]}),(0,ea.jsxs)(eo,{href:"https://arxiv.org/pdf/2405.02937",target:"_blank",rel:"noopener noreferrer",children:[(0,ea.jsx)(Di,{size:16}),"PDF"]}),(0,ea.jsxs)(eo,{href:"https://github.com/fatemafaria142/Large-Language-Models-Over-Transformer-Models-for-Bangla-NLI",target:"_blank",rel:"noopener noreferrer",children:[(0,ea.jsx)(Ii,{size:16}),"Code"]}),(0,ea.jsxs)(eo,{href:"#",target:"_blank",rel:"noopener noreferrer",children:[(0,ea.jsx)(Fi,{size:16}),"Dataset"]}),(0,ea.jsxs)(Zi,{className:"citation",onClick:()=>r("citation","Unraveling the Dominance of LLMs","@misc{faria2024unravelingdominancelargelanguage,\n  title={Unraveling the Dominance of Large Language Models Over Transformer Models for Bangla Natural Language Inference: A Comprehensive Study}, \n  author={Fatema Tuj Johora Faria and Mukaffi Bin Moin and Asif Iftekher Fahim and Pronay Debnath and Faisal Muhammad Shah},\n  year={2024},\n  eprint={2405.02937},\n  archivePrefix={arXiv},\n  primaryClass={cs.CL},\n  url={https://arxiv.org/abs/2405.02937}\n}"),children:[(0,ea.jsx)(Bi,{size:16}),"Citation bib"]})]})]}),(0,ea.jsxs)(Ki,{children:[(0,ea.jsx)(Yi,{children:"Exploring Explainable AI Techniques for Improved Interpretability in Lung and Colon Cancer Classification"}),(0,ea.jsxs)(Qi,{children:[(0,ea.jsx)("strong",{children:"Authors:"})," ",(0,ea.jsx)("strong",{style:{color:"#10b981"},children:"Mukaffi Bin Moin"}),", Fatema Tuj Johora Faria, Swarnajit Saha, Busra Kamal Rafa, Mohammad Shafiul Alam"]}),(0,ea.jsxs)(Ji,{children:[(0,ea.jsx)("strong",{children:"Conference:"})," ",(0,ea.jsx)("em",{children:"Published in 4th International Conference on Computing and Communication Networks (ICCCNet-2024)"})," (",(0,ea.jsx)("a",{href:"https://icccn.co.uk/",target:"_blank",rel:"noopener noreferrer",style:{color:"#3b82f6"},children:"ICCCNet 2024"}),")"]}),(0,ea.jsxs)(Xi,{children:[(0,ea.jsxs)(Zi,{className:"abstract",onClick:()=>r("abstract","Exploring Explainable AI for Cancer Classification","Lung and colon cancer are serious worldwide health challenges that require early and precise identification to reduce mortality risks. However, diagnosis, which is mostly dependent on histopathologists' competence, presents difficulties and hazards when expertise is insufficient. While diagnostic methods like imaging and blood markers contribute to early detection, histopathology remains the gold standard, although time-consuming and vulnerable to inter-observer mistakes. Limited access to high-end technology further limits patients' ability to receive immediate medical care and diagnosis. Recent advances in deep learning have generated interest in its application to medical imaging analysis, specifically the use of histopathological images to diagnose lung and colon cancer. The goal of this investigation is to use and adapt existing pre-trained CNN-based models, such as Xception, DenseNet201, ResNet101, InceptionV3, DenseNet121, DenseNet169, ResNet152, and InceptionResNetV2, to enhance classification through better augmentation strategies. The results show tremendous progress, with all eight models reaching impressive accuracy ranging from 97% to 99%. Furthermore, attention visualization techniques such as GradCAM, GradCAM++, ScoreCAM, Faster Score-CAM, and LayerCAM, as well as Vanilla Saliency and SmoothGrad, are used to provide insights into the models' classification decisions, thereby improving interpretability and understanding of malignant and benign image classification."),children:[(0,ea.jsx)(Li,{size:16}),"Abstract"]}),(0,ea.jsxs)(eo,{href:"https://arxiv.org/pdf/2405.04610",target:"_blank",rel:"noopener noreferrer",children:[(0,ea.jsx)(Di,{size:16}),"PDF"]}),(0,ea.jsxs)(eo,{href:"https://github.com/Mukaffi28/Explainable-AI-for-Lung-and-Colon-Cancer-Classification",target:"_blank",rel:"noopener noreferrer",children:[(0,ea.jsx)(Ii,{size:16}),"Code"]}),(0,ea.jsxs)(eo,{href:"#",target:"_blank",rel:"noopener noreferrer",children:[(0,ea.jsx)(Fi,{size:16}),"Dataset"]}),(0,ea.jsxs)(Zi,{className:"citation",onClick:()=>r("citation","Exploring Explainable AI for Cancer Classification","@misc{moin2024exploringexplainableaitechniques,\n  title={Exploring Explainable AI Techniques for Improved Interpretability in Lung and Colon Cancer Classification}, \n  author={Mukaffi Bin Moin and Fatema Tuj Johora Faria and Swarnajit Saha and Busra Kamal Rafa and Mohammad Shafiul Alam},\n  year={2024},\n  eprint={2405.04610},\n  archivePrefix={arXiv},\n  primaryClass={eess.IV},\n  url={https://arxiv.org/abs/2405.04610}\n}"),children:[(0,ea.jsx)(Bi,{size:16}),"Citation bib"]})]})]}),(0,ea.jsxs)(Ki,{children:[(0,ea.jsxs)(Yi,{children:["BanglaMemeEvidence: A Multimodal Benchmark Dataset for Explanatory Evidence Detection in Bengali Memes",(0,ea.jsx)(to,{className:"under-review",children:"Under Review"})]}),(0,ea.jsxs)(Qi,{children:[(0,ea.jsx)("strong",{children:"Authors:"})," Fatema Tuj Johora Faria, ",(0,ea.jsx)("strong",{style:{color:"#10b981"},children:"Mukaffi Bin Moin"}),", Asif Iftekher Fahim, Pronay Debnath, and Faisal Muhammad Shah."]}),(0,ea.jsxs)(Ji,{children:[(0,ea.jsx)("strong",{children:"Conference:"})," ",(0,ea.jsx)("em",{children:"Under Review in 2025 9th International Conference on Vision, Image and Signal Processing"})]}),(0,ea.jsxs)(Xi,{children:[(0,ea.jsxs)(Zi,{className:"abstract",onClick:()=>r("abstract","BanglaMemeEvidence","Not published yet"),children:[(0,ea.jsx)(Li,{size:16}),"Abstract"]}),(0,ea.jsxs)(eo,{className:"pdf",href:"#",target:"_blank",rel:"noopener noreferrer",children:[(0,ea.jsx)(Di,{size:16}),"PDF"]}),(0,ea.jsxs)(eo,{href:"#",target:"_blank",rel:"noopener noreferrer",children:[(0,ea.jsx)(Ii,{size:16}),"Code"]}),(0,ea.jsxs)(eo,{href:"#",target:"_blank",rel:"noopener noreferrer",children:[(0,ea.jsx)(Fi,{size:16}),"Dataset"]}),(0,ea.jsxs)(Zi,{className:"citation",onClick:()=>r("citation","BanglaMemeEvidence","Not published yet"),children:[(0,ea.jsx)(Bi,{size:16}),"Citation bib"]})]})]}),(0,ea.jsxs)(Ki,{children:[(0,ea.jsxs)(Yi,{children:["Tackling Hallucination in Bengali NLP: Enhancing Paraphrase Generation, Reading Comprehension, and Formal Application Writing Using LLMs with Few-Shot Learning, Fine-Tuning, and RAG",(0,ea.jsx)(to,{className:"under-review",children:"Under Review"})]}),(0,ea.jsxs)(Qi,{children:[(0,ea.jsx)("strong",{children:"Authors:"})," Saidur Rahman Sujon, Ahmadul Karim Chowdhury, Fatema Tuj Johora Faria, ",(0,ea.jsx)("strong",{style:{color:"#10b981"},children:"Mukaffi Bin Moin"})," and Faisal Muhammad Shah"]}),(0,ea.jsxs)(Ji,{children:[(0,ea.jsx)("strong",{children:"Conference:"})," ",(0,ea.jsx)("em",{children:"Under Review in 29TH INTERNATIONAL COMPUTER SCIENCE AND ENGINEERING CONFERENCE"})]}),(0,ea.jsxs)(Xi,{children:[(0,ea.jsxs)(Zi,{className:"abstract",onClick:()=>r("abstract","Tackling Hallucination in Bengali NLP","Not published yet"),children:[(0,ea.jsx)(Li,{size:16}),"Abstract"]}),(0,ea.jsxs)(eo,{className:"pdf",href:"#",target:"_blank",rel:"noopener noreferrer",children:[(0,ea.jsx)(Di,{size:16}),"PDF"]}),(0,ea.jsxs)(eo,{href:"#",target:"_blank",rel:"noopener noreferrer",children:[(0,ea.jsx)(Ii,{size:16}),"Code"]}),(0,ea.jsxs)(eo,{href:"#",target:"_blank",rel:"noopener noreferrer",children:[(0,ea.jsx)(Fi,{size:16}),"Dataset"]}),(0,ea.jsxs)(Zi,{className:"citation",onClick:()=>r("citation","Tackling Hallucination in Bengali NLP","Not published yet"),children:[(0,ea.jsx)(Bi,{size:16}),"Citation bib"]})]})]}),(0,ea.jsxs)(Ki,{children:[(0,ea.jsxs)(Yi,{children:["PotatoGANs: Utilizing Generative Adversarial Networks, Instance Segmentation, and Explainable AI for Enhanced Potato Disease Identification and Classification",(0,ea.jsx)(to,{className:"under-review",children:"Under Review"})]}),(0,ea.jsxs)(Qi,{children:[(0,ea.jsx)("strong",{children:"Authors:"})," Mohammad Shafiul Alam*, Fatema Tuj Johora Faria*, ",(0,ea.jsx)("strong",{style:{color:"#10b981"},children:"Mukaffi Bin Moin"}),"*, Ahmed Al Wase, Md. Rabius Sani and Khan Md Hasib"]}),(0,ea.jsxs)(Ji,{children:[(0,ea.jsx)("strong",{children:"Conference:"})," ",(0,ea.jsx)("em",{children:"Under Review in IEEEi-COSTE 2025"})," (",(0,ea.jsx)("a",{href:"https://i-coste.org/",target:"_blank",rel:"noopener noreferrer",style:{color:"#3b82f6"},children:"Journal of Intelligent Information Systems"}),")"]}),(0,ea.jsxs)(Xi,{children:[(0,ea.jsxs)(Zi,{className:"abstract",onClick:()=>r("abstract","PotatoGANs","Numerous applications have resulted from the automation of agricultural disease segmentation using deep learning techniques. However, when applied to new conditions, these applications frequently face the difficulty of overfitting, resulting in lower segmentation performance. In the context of potato farming, where diseases have a large influence on yields, it is critical for the agricultural economy to quickly and properly identify these diseases. Traditional data augmentation approaches, such as rotation, flip, and translation, have limitations and frequently fail to provide strong generalization results. To address these issues, our research employs a novel approach termed as PotatoGANs. In this novel data augmentation approach, two types of Generative Adversarial Networks (GANs) are utilized to generate synthetic potato disease images from healthy potato images. This approach not only expands the dataset but also adds variety, which helps to enhance model generalization. Using the Inception score as a measure, our experiments show the better quality and realisticness of the images created by PotatoGANs, emphasizing their capacity to resemble real disease images closely. The CycleGAN model outperforms the Pix2Pix GAN model in terms of image quality, as evidenced by its higher IS scores CycleGAN achieves higher Inception scores (IS) of 1.2001 and 1.0900 for black scurf and common scab, respectively. This synthetic data can significantly improve the training of large neural networks. It also reduces data collection costs while enhancing data diversity and generalization capabilities. Our work improves interpretability by combining three gradient-based Explainable AI algorithms (GradCAM, GradCAM++, and ScoreCAM) with three distinct CNN architectures (DenseNet169, Resnet152 V2, InceptionResNet V2) for potato disease classification."),children:[(0,ea.jsx)(Li,{size:16}),"Abstract"]}),(0,ea.jsxs)(eo,{href:"https://arxiv.org/pdf/2405.07332",target:"_blank",rel:"noopener noreferrer",children:[(0,ea.jsx)(Di,{size:16}),"PDF"]}),(0,ea.jsxs)(eo,{href:"https://github.com/Mukaffi28/ExplainableAI-PotatoGAN-Cutting-Edge-Disease-Identification-for-Potatoes",target:"_blank",rel:"noopener noreferrer",children:[(0,ea.jsx)(Ii,{size:16}),"Code"]}),(0,ea.jsxs)(eo,{href:"#",target:"_blank",rel:"noopener noreferrer",children:[(0,ea.jsx)(Fi,{size:16}),"Dataset"]}),(0,ea.jsxs)(Zi,{className:"citation",onClick:()=>r("citation","PotatoGANs","@misc{alam2024potatogansutilizinggenerativeadversarial,\n  title={PotatoGANs: Utilizing Generative Adversarial Networks, Instance Segmentation, and Explainable AI for Enhanced Potato Disease Identification and Classification}, \n  author={Mohammad Shafiul Alam and Fatema Tuj Johora Faria and Mukaffi Bin Moin and Ahmed Al Wase and Md. Rabius Sani and Khan Md Hasib},\n  year={2024},\n  eprint={2405.07332},\n  archivePrefix={arXiv},\n  primaryClass={cs.CV},\n  url={https://arxiv.org/abs/2405.07332}\n}"),children:[(0,ea.jsx)(Bi,{size:16}),"Citation bib"]})]})]}),(0,ea.jsxs)(Ki,{children:[(0,ea.jsxs)(Yi,{children:["Explainable Convolutional Neural Networks for Retinal Fundus Classification and Cutting-Edge Segmentation Models for Retinal Blood Vessels from Fundus Images",(0,ea.jsx)(to,{className:"under-review",children:"Under Review"})]}),(0,ea.jsxs)(Qi,{children:[(0,ea.jsx)("strong",{children:"Authors:"})," Fatema Tuj Johora Faria, ",(0,ea.jsx)("strong",{style:{color:"#10b981"},children:"Mukaffi Bin Moin"}),", Pronay Debnath, Asif Iftekher Fahim, Faisal Muhammad Shah"]}),(0,ea.jsxs)(Ji,{children:[(0,ea.jsx)("strong",{children:"Journal:"})," ",(0,ea.jsx)("em",{children:"Under Review in Journal of Visual Communication and Image Representation"})," (",(0,ea.jsx)("a",{href:"https://www.sciencedirect.com/journal/journal-of-visual-communication-and-image-representation",target:"_blank",rel:"noopener noreferrer",style:{color:"#3b82f6"},children:"Journal of Visual Communication and Image Representation"}),")"]}),(0,ea.jsxs)(Xi,{children:[(0,ea.jsxs)(Zi,{className:"abstract",onClick:()=>r("abstract","Explainable CNN for Retinal Fundus","Our research focuses on the critical field of early diagnosis of disease by examining retinal blood vessels in fundus images. While automatic segmentation of retinal blood vessels holds promise for early detection, accurate analysis remains challenging due to the limitations of existing methods, which often lack discrimination power and are susceptible to influences from pathological regions. Our research in fundus image analysis advances deep learning-based classification using eight pre-trained CNN models. To enhance interpretability, we utilize Explainable AI techniques such as Grad-CAM, Grad-CAM++, Score-CAM, Faster Score-CAM, and Layer CAM. These techniques illuminate the decision-making processes of the models, fostering transparency and trust in their predictions. Expanding our exploration, we investigate ten models, including TransUNet with ResNet backbones, Attention U-Net with DenseNet and ResNet backbones, and Swin-UNET. Incorporating diverse architectures such as ResNet50V2, ResNet101V2, ResNet152V2, and DenseNet121 among others, this comprehensive study deepens our insights into attention mechanisms for enhanced fundus image analysis. Among the evaluated models for fundus image classification, ResNet101 emerged with the highest accuracy, achieving an impressive 94.17%. On the other end of the spectrum, EfficientNetB0 exhibited the lowest accuracy among the models, achieving a score of 88.33%. Furthermore, in the domain of fundus image segmentation, Swin-Unet demonstrated a Mean Pixel Accuracy of 86.19%, showcasing its effectiveness in accurately delineating regions of interest within fundus images. Conversely, Attention U-Net with DenseNet201 backbone exhibited the lowest Mean Pixel Accuracy among the evaluated models, achieving a score of 75.87%."),children:[(0,ea.jsx)(Li,{size:16}),"Abstract"]}),(0,ea.jsxs)(eo,{href:"https://arxiv.org/pdf/2405.07338",target:"_blank",rel:"noopener noreferrer",children:[(0,ea.jsx)(Di,{size:16}),"PDF"]}),(0,ea.jsxs)(eo,{href:"https://github.com/fatemafaria142/Retinal-Fundus-Classification-using-XAI-and-Segmentation",target:"_blank",rel:"noopener noreferrer",children:[(0,ea.jsx)(Ii,{size:16}),"Code"]}),(0,ea.jsxs)(eo,{href:"#",target:"_blank",rel:"noopener noreferrer",children:[(0,ea.jsx)(Fi,{size:16}),"Dataset"]}),(0,ea.jsxs)(Zi,{className:"citation",onClick:()=>r("citation","Explainable CNN for Retinal Fundus","@misc{faria2024explainableconvolutionalneuralnetworks,\n  title={Explainable Convolutional Neural Networks for Retinal Fundus Classification and Cutting-Edge Segmentation Models for Retinal Blood Vessels from Fundus Images}, \n  author={Fatema Tuj Johora Faria and Mukaffi Bin Moin and Pronay Debnath and Asif Iftekher Fahim and Faisal Muhammad Shah},\n  year={2024},\n  eprint={2405.07338},\n  archivePrefix={arXiv},\n  primaryClass={eess.IV},\n  url={https://arxiv.org/abs/2405.07338}\n}"),children:[(0,ea.jsx)(Bi,{size:16}),"Citation bib"]})]})]})]}),(0,ea.jsxs)(qi,{children:[(0,ea.jsx)(Gi,{children:"2023"}),(0,ea.jsxs)(Ki,{children:[(0,ea.jsx)(Yi,{children:"Classification of Potato Disease with Digital Image Processing Technique: A Hybrid Deep Learning Framework"}),(0,ea.jsxs)(Qi,{children:[(0,ea.jsx)("strong",{children:"Authors:"})," Fatema Tuj Johora Faria, ",(0,ea.jsx)("strong",{style:{color:"#10b981"},children:"Mukaffi Bin Moin"}),", Ahmed Al Wase, Md Rabius Sani, Khan Md Hasib, and Mohammad Shafiul Alam."]}),(0,ea.jsxs)(Ji,{children:[(0,ea.jsx)("strong",{children:"Conference:"})," ",(0,ea.jsx)("em",{children:"2023 IEEE 13th Annual Computing and Communication Workshop and Conference (CCWC)"})," (",(0,ea.jsx)("a",{href:"https://ieee-ccwc.org/#",target:"_blank",rel:"noopener noreferrer",style:{color:"#3b82f6"},children:"CCWC 2023"}),")"]}),(0,ea.jsxs)(Xi,{children:[(0,ea.jsxs)(Zi,{className:"abstract",onClick:()=>r("abstract","Classification of Potato Disease","Potatoes are among the major vegetables in agricultural regions, and it is farmed and utilized all over the world. Potatoes are a high-protein food with several health benefits, but there are numerous diseases associated with potatoes that hamper production. In this research, we developed a hybrid approach that employs image processing and combines MobileNet V2 with LSTM, GRU, and Bidirectional LSTM to evaluate potato disease classes known as Black Scurf, Common Scab, Blackleg, Dry Rot, Pink Rot, Healthy, and Miscellaneous. We examined the outcomes of each architecture after applying it independently to determine the optimal architecture configuration for categorizing potato diseases. In terms of accuracy, the results show that the hybrid MobileNet V2-GRU with Stochastic Gradient Descent optimizer strategy exceeds the other alternative. On the test dataset, we achieved 99% accuracy."),children:[(0,ea.jsx)(Li,{size:16}),"Abstract"]}),(0,ea.jsxs)(eo,{href:"https://www.researchgate.net/publication/370123763_Classification_of_Potato_Disease_with_Digital_Image_Processing_Technique_A_Hybrid_Deep_Learning_Framework",target:"_blank",rel:"noopener noreferrer",children:[(0,ea.jsx)(Di,{size:16}),"PDF"]}),(0,ea.jsxs)(eo,{href:"https://github.com/fatemafaria142/Classification-of-Potato-Disease-A-Hybrid-Deep-Learning-Framework",target:"_blank",rel:"noopener noreferrer",children:[(0,ea.jsx)(Ii,{size:16}),"Code"]}),(0,ea.jsxs)(eo,{href:"https://github.com/Mukaffi28/Potato-Disease",target:"_blank",rel:"noopener noreferrer",children:[(0,ea.jsx)(Fi,{size:16}),"Dataset"]}),(0,ea.jsxs)(Zi,{className:"citation",onClick:()=>r("citation","Classification of Potato Disease","@INPROCEEDINGS{10099162,\n  author={Faria, Fatema Tuj Johora and Bin Moin, Mukaffi and Al Wase, Ahmed and Sani, Md. Rabius and Hasib, Khan Md and Alam, Mohammad Shafiul},\n  booktitle={2023 IEEE 13th Annual Computing and Communication Workshop and Conference (CCWC)}, \n  title={Classification of Potato Disease with Digital Image Processing Technique: A Hybrid Deep Learning Framework}, \n  year={2023},\n  volume={},\n  number={},\n  pages={0820-0826},\n  keywords={Fungi;Deep learning;Image processing;Digital images;Conferences;Stochastic processes;Training data;Deep learning;Image processing;MobileNet V2;LSTM;GRU;BiLSTM;Disease classification},\n  doi={10.1109/CCWC57344.2023.10099162}\n}"),children:[(0,ea.jsx)(Bi,{size:16}),"Citation bib"]})]})]})]}),t&&(0,ea.jsx)(no,{onClick:a,children:(0,ea.jsxs)(ro,{onClick:e=>e.stopPropagation(),children:[(0,ea.jsxs)(ao,{children:[(0,ea.jsxs)(io,{children:["abstract"===t.type?"Abstract":"Citation"," - ",t.title]}),(0,ea.jsx)(oo,{onClick:a,children:(0,ea.jsx)(Oi,{size:20})})]}),(0,ea.jsxs)(lo,{children:["citation"===t.type?(0,ea.jsx)("pre",{style:{background:"#f8fafc",padding:"1rem",borderRadius:"8px",overflow:"auto",whiteSpace:"pre-wrap",fontFamily:"monospace",fontSize:"0.9rem"},children:t.content}):(0,ea.jsx)("p",{children:t.content}),"citation"===t.type&&(0,ea.jsxs)(so,{onClick:()=>{return e=t.content,void navigator.clipboard.writeText(e).then(()=>{alert("Copied to clipboard!")}).catch(()=>{alert("Failed to copy to clipboard")});var e},children:[(0,ea.jsx)($i,{size:16}),"Copy Citation"]})]})]})})]})},uo=Ba("chevron-down",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]),fo=Ba("bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]),ho=Xr.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`,po=Xr.div`
  text-align: center;
  margin-bottom: 4rem;
`,mo=Xr.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #7AB2D3, #4A628A);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,go=Xr.p`
  font-size: 1.2rem;
  color: #64748b;
  font-family: 'Inter', sans-serif;
`,bo=Xr.div`
  margin-bottom: 4rem;
`,vo=(Xr.h2`
  color: #1e293b;
  font-family: 'Inter', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
  background: linear-gradient(135deg, #7AB2D3, #4A628A);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #7AB2D3, #4A628A);
    border-radius: 2px;
  }
`,Xr.div`
  margin-bottom: 2.5rem;
  font-family: 'Inter', sans-serif;
  color: #1e293b;
  padding: 2rem;
  background: linear-gradient(135deg, #ffffff 0%, #DFF2EB 100%);
  border: 1px solid #B9E5E8;
  border-radius: 20px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: linear-gradient(180deg, #7AB2D3, #4A628A);
    transform: scaleY(0);
    transition: transform 0.3s ease;
  }
  
  &:hover {
    border-color: #7AB2D3;
  }
  
  &:hover::before {
    transform: none;
  }
`),yo=Xr.div`
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`,xo=Xr.div`
  flex: 1;
`,wo=Xr.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, #7AB2D3, #4A628A);
  color: white;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  flex-shrink: 0;
  
  svg {
    transform: rotate(${e=>e.$isExpanded?"180deg":"0deg"});
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 12px rgba(74, 98, 138, 0.3);
  }
`,ko=Xr.div`
  max-height: ${e=>e.$isExpanded?"10000px":"0"};
  opacity: ${e=>e.$isExpanded?"1":"0"};
  overflow: hidden;
  transition: max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1),
              opacity 0.3s ease;
  margin-top: ${e=>e.$isExpanded?"1.5rem":"0"};
`,jo=Xr.div`
  margin-bottom: 1.5rem;
  border-radius: 16px;
  overflow: hidden;
`,So=Xr.div`
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem 1.5rem;
  background: linear-gradient(135deg, #ffffff 0%, #DFF2EB 100%);
  border: 1px solid #B9E5E8;
  border-radius: 16px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    border-color: #7AB2D3;
    background: linear-gradient(135deg, #DFF2EB 0%, #B9E5E8 50%);
  }
  
  strong {
    color: #4A628A;
    font-weight: 600;
    font-size: 1.1rem;
  }
`,Eo=Xr.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: linear-gradient(135deg, #7AB2D3, #4A628A);
  color: white;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  flex-shrink: 0;
  
  svg {
    transform: rotate(${e=>e.$isExpanded?"180deg":"0deg"});
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 12px rgba(74, 98, 138, 0.3);
  }
`,Co=Xr.div`
  max-height: ${e=>e.$isExpanded?"5000px":"0"};
  opacity: ${e=>e.$isExpanded?"1":"0"};
  overflow: hidden;
  transition: max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1),
              opacity 0.3s ease;
  padding: ${e=>e.$isExpanded?"1.5rem":"0 1.5rem"};
`,Ao=Xr.h3`
  color: #1e293b;
  font-weight: 700;
  margin-bottom: 1rem;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  gap: 12px;
`,zo=Xr.div`
  margin-bottom: 1rem;
  font-size: 1.1rem;
  color: #475569;
  font-weight: 600;
`,To=Xr.a`
  color:rgb(0, 63, 100);
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  
  &:hover {
    color: #4A628A;
    text-decoration: none;
  }
`,Mo=Xr.div`
  color:rgb(0, 67, 105);
  font-style: italic;
  margin-bottom: 1.5rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, #DFF2EB, #B9E5E8);
  padding: 8px 16px;
  border-radius: 12px;
  display: inline-flex;
`,Po=Xr.ul`
  font-family: 'Inter', sans-serif;
  color: #475569;
  line-height: 1.8;
  list-style: none;
  padding: 0;
`,Ro=Xr.li`
  margin-bottom: 1.5rem;
  list-style: none;
`,No=Xr.div`
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.2rem;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #7AB2D3;
  }
  
  strong {
    color: #4A628A;
    font-weight: 600;
  }
`,_o=Xr.ul`
  margin: 0.6rem 0 0 1.2rem;
  padding: 0;
  list-style-type: disc;
`,Lo=Xr.li`
  margin-bottom: 0.6rem;
`,Do=Xr.div`
  background: linear-gradient(135deg, #DFF2EB 0%, #B9E5E8 100%);
  border: 1px solid #7AB2D3;
  border-radius: 12px;
  padding: 1rem;
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    border-color: #4A628A;
  }
  
  strong {
    color: #4A628A;
    font-weight: 600;
  }
`,Io=()=>{const[t,n]=(0,e.useState)(!1),[r,a]=(0,e.useState)(!1),[i,o]=(0,e.useState)(!1),[l,s]=(0,e.useState)(!1),[c,u]=(0,e.useState)(!1),[d,f]=(0,e.useState)(!1),[h,p]=(0,e.useState)(!1),[m,g]=(0,e.useState)(!1),[b,v]=(0,e.useState)(!1),[y,x]=(0,e.useState)(!1),[w,k]=(0,e.useState)(!1),[j,S]=(0,e.useState)(!1),[E,C]=(0,e.useState)(!1),[A,z]=(0,e.useState)(!1);return(0,ea.jsxs)(ho,{children:[(0,ea.jsxs)(po,{children:[(0,ea.jsx)(mo,{children:"Professional Experience"}),(0,ea.jsx)(go,{children:"My journey in AI/ML and software engineering"})]}),(0,ea.jsxs)(bo,{children:[(0,ea.jsxs)(vo,{children:[(0,ea.jsxs)(yo,{onClick:()=>n(!t),children:[(0,ea.jsxs)(xo,{children:[(0,ea.jsxs)(Ao,{children:[(0,ea.jsx)(yi,{size:28}),"Software Engineer II"]}),(0,ea.jsx)(zo,{children:(0,ea.jsxs)(To,{href:"https://www.linkedin.com/company/brainstation-23/",target:"_blank",rel:"noopener noreferrer",onClick:e=>e.stopPropagation(),children:["Brain Station 23 PLC.",(0,ea.jsx)(ni,{size:16})]})}),(0,ea.jsxs)(Mo,{children:[(0,ea.jsx)(ri,{size:18}),"January 2026 - Present"]})]}),(0,ea.jsx)(wo,{$isExpanded:t,children:(0,ea.jsx)(uo,{size:24})})]}),(0,ea.jsx)(ko,{$isExpanded:t,children:(0,ea.jsxs)(Po,{children:[(0,ea.jsx)(Ro,{children:(0,ea.jsxs)(jo,{children:[(0,ea.jsxs)(So,{onClick:()=>s(!l),children:[(0,ea.jsxs)("strong",{children:["Dhrubo: AI Voice Call Agent Platform ",(0,ea.jsx)("span",{style:{color:"#0C07FF"},children:"(Ongoing)"})]}),(0,ea.jsx)(Eo,{$isExpanded:l,children:(0,ea.jsx)(uo,{size:20})})]}),(0,ea.jsxs)(Co,{$isExpanded:l,children:[(0,ea.jsx)(No,{children:(0,ea.jsxs)(_o,{children:[(0,ea.jsx)(Lo,{children:"Architected and developed an enterprise-grade AI voice call agent platform enabling users to create, configure, and deploy conversational agents using natural language prompts without writing code."}),(0,ea.jsx)(Lo,{children:"Implemented a multi-agent management system allowing each agent to have customizable behavior, personality, greetings, and task instructions through prompt-based configuration."}),(0,ea.jsx)(Lo,{children:"Enabled real-time voice conversations using LiveKit with support for multiple speech-to-text and text-to-speech providers for flexible deployment scenarios."}),(0,ea.jsx)(Lo,{children:"Designed knowledge-aware conversational agents by integrating dynamic knowledge bases, enabling retrieval-augmented responses across heterogeneous data sources."}),(0,ea.jsx)(Lo,{children:"Built tool-enabled conversational workflows allowing agents to perform real-world actions such as service discovery, scheduling, and booking through prompt-controlled task execution."}),(0,ea.jsx)(Lo,{children:"Implemented post-call analytics with configurable evaluation criteria to generate structured insights from conversations for performance monitoring and business analysis."}),(0,ea.jsx)(Lo,{children:"Integrated secure authentication and multi-tenant access control to support organization-level agent management and data isolation."})]})}),(0,ea.jsxs)(Do,{children:[(0,ea.jsx)("strong",{children:"Technology used:"})," Python, FastAPI, LangChain, LangGraph, LiveKit, PostgreSQL, Qdrant, React, TypeScript, Docker, Prompt Engineering"]})]})]})}),(0,ea.jsx)(Ro,{children:(0,ea.jsxs)(jo,{children:[(0,ea.jsxs)(So,{onClick:()=>u(!c),children:[(0,ea.jsx)("strong",{children:"CliniCall Conversational AI Assistant"}),(0,ea.jsx)(Eo,{$isExpanded:c,children:(0,ea.jsx)(uo,{size:20})})]}),(0,ea.jsxs)(Co,{$isExpanded:c,children:[(0,ea.jsx)(No,{children:(0,ea.jsxs)(_o,{children:[(0,ea.jsx)(Lo,{children:"Designed and developed a conversational AI system for CliniCall to support automated healthcare service interactions and appointment management."}),(0,ea.jsx)(Lo,{children:"Implemented intelligent consultant recommendation based on medical specialty and service requirements to assist users in selecting appropriate doctors."}),(0,ea.jsx)(Lo,{children:"Enabled real-time consultation slot discovery and secure appointment booking with automatic reservation of selected time slots."}),(0,ea.jsx)(Lo,{children:"Integrated Cal.com to manage consultant availability, calendar-based scheduling, and end-to-end appointment workflows."}),(0,ea.jsx)(Lo,{children:"Developed a multilingual conversational architecture with separate agents for Bangla (BN) and English (EN) to ensure accurate and natural user interactions."}),(0,ea.jsx)(Lo,{children:"Extended the conversational scope to cover CliniCall product offerings, service packages, consultant discovery, and booking flows through structured prompt orchestration."})]})}),(0,ea.jsxs)(Do,{children:[(0,ea.jsx)("strong",{children:"Technology used:"})," Python, LangGraph, FastAPI, SQLite, Cal.com, Multilingual Conversational AI, Prompt Engineering"]})]})]})})]})})]}),(0,ea.jsxs)(vo,{children:[(0,ea.jsxs)(yo,{onClick:()=>a(!r),children:[(0,ea.jsxs)(xo,{children:[(0,ea.jsxs)(Ao,{children:[(0,ea.jsx)(yi,{size:28}),"Software Engineer I"]}),(0,ea.jsx)(zo,{children:(0,ea.jsxs)(To,{href:"https://www.linkedin.com/company/brainstation-23/",target:"_blank",rel:"noopener noreferrer",onClick:e=>e.stopPropagation(),children:["Brain Station 23 PLC.",(0,ea.jsx)(ni,{size:16})]})}),(0,ea.jsxs)(Mo,{children:[(0,ea.jsx)(ri,{size:18}),"May 2025 - December 2025"]})]}),(0,ea.jsx)(wo,{$isExpanded:r,children:(0,ea.jsx)(uo,{size:24})})]}),(0,ea.jsx)(ko,{$isExpanded:r,children:(0,ea.jsxs)(Po,{children:[(0,ea.jsx)(Ro,{children:(0,ea.jsxs)(jo,{children:[(0,ea.jsxs)(So,{onClick:()=>f(!d),children:[(0,ea.jsx)("strong",{children:"Brain Station 23 Frontdesk AI Voice Agent"}),(0,ea.jsx)(Eo,{$isExpanded:d,children:(0,ea.jsx)(uo,{size:20})})]}),(0,ea.jsxs)(Co,{$isExpanded:d,children:[(0,ea.jsx)(No,{children:(0,ea.jsxs)(_o,{children:[(0,ea.jsx)(Lo,{children:"Designed and developed a multi-agent supervisor system using LangGraph to route real-time Bangla voice interactions across domain-specific agents."}),(0,ea.jsx)(Lo,{children:"Implemented hierarchical intent classification and deterministic routing using a structured supervisor workflow with controlled agent communication."}),(0,ea.jsx)(Lo,{children:"Integrated LiveKit with custom STT and TTS microservices, achieving sub-800ms latency per conversational turn."}),(0,ea.jsx)(Lo,{children:"Engineered a modular LLM orchestration framework with observability via LangFuse for reliable and scalable voice sessions."}),(0,ea.jsx)(Lo,{children:"Deployed the system as a LiveKit Worker Application using FastAPI and Docker for cloud-scale parallel handling."})]})}),(0,ea.jsxs)(Do,{children:[(0,ea.jsx)("strong",{children:"Technology used:"})," Python, LangChain, LangGraph, LiveKit, Deepgram STT, FastAPI, Docker, LangFuse, RESTful TTS APIs, Prompt Engineering"]})]})]})}),(0,ea.jsx)(Ro,{children:(0,ea.jsxs)(jo,{children:[(0,ea.jsxs)(So,{onClick:()=>p(!h),children:[(0,ea.jsx)("strong",{children:"Agentic Footfall Monitoring and Analytics Platform"}),(0,ea.jsx)(Eo,{$isExpanded:h,children:(0,ea.jsx)(uo,{size:20})})]}),(0,ea.jsxs)(Co,{$isExpanded:h,children:[(0,ea.jsx)(No,{children:(0,ea.jsxs)(_o,{children:[(0,ea.jsx)(Lo,{children:"Led a real-time footfall analytics platform using agentic multi\u2011VLM architecture (GPT\u20114, Gemini, Qwen\u20112.5, BLIP\u20112) for autonomous perception and reasoning across multi\u2011camera environments."}),(0,ea.jsx)(Lo,{children:"Integrated YOLOv11 and ByteTrack for detection and tracking, enabling accurate multi\u2011camera identity association with temporal consistency."}),(0,ea.jsx)(Lo,{children:"Applied Tree\u2011of\u2011Thought prompting for collaborative ambiguity resolution, crowd dynamics interpretation, and coherent contextual insights."}),(0,ea.jsx)(Lo,{children:"Implemented hybrid identity matching with visual (ReID) and semantic (text) embeddings for better cross\u2011frame and cross\u2011camera consistency."}),(0,ea.jsx)(Lo,{children:"Introduced an LLM\u2011based verification layer to confirm/reject matches, reducing false positives and improving re\u2011identification reliability."}),(0,ea.jsx)(Lo,{children:"Optimized embedding pipeline and similarity search via adaptive thresholds and intelligent LLM bypass for low\u2011latency scalability."}),(0,ea.jsx)(Lo,{children:"Achieved 0.962 re\u2011identification accuracy using a VLM\u2011centric approach vs. 0.829 with traditional ReID."}),(0,ea.jsx)(Lo,{children:"Built a React visualization interface supporting text, image, and hybrid similarity search for intuitive analytics."}),(0,ea.jsx)(Lo,{children:"Engineered temporal\u2013spatial analytics generating natural\u2011language summaries of entries/exits, occupancy, and movement trends."}),(0,ea.jsx)(Lo,{children:"Led architecture, scalability planning, deployment strategy, and mentored junior developers for a modular, production\u2011grade system."})]})}),(0,ea.jsxs)(Do,{children:[(0,ea.jsx)("strong",{children:"Technology used:"})," GPT-4, Gemini, Qwen-2.5, Tree-of-Thought Prompting, Multi-Agent Reasoning, Vector DB, Temporal-Spatial Analytics, YOLO11, ByteTrack"]})]})]})}),(0,ea.jsx)(Ro,{children:(0,ea.jsxs)(jo,{children:[(0,ea.jsxs)(So,{onClick:()=>g(!m),children:[(0,ea.jsx)("strong",{children:"Bangla Text-to-Speech (TTS)"}),(0,ea.jsx)(Eo,{$isExpanded:m,children:(0,ea.jsx)(uo,{size:20})})]}),(0,ea.jsxs)(Co,{$isExpanded:m,children:[(0,ea.jsx)(No,{children:(0,ea.jsxs)(_o,{children:[(0,ea.jsx)(Lo,{children:"Developed a Bangla TTS system from scratch using an in\u2011house multi\u2011speaker corpus."}),(0,ea.jsx)(Lo,{children:"Preprocessed/curated data: text normalization, phoneme extraction, and audio alignment."}),(0,ea.jsx)(Lo,{children:"Implemented multi\u2011speaker conditioning and phoneme\u2011level modeling for clarity and differentiation."}),(0,ea.jsx)(Lo,{children:"Enhanced prosody for expressive, human\u2011like intonation and naturalness."}),(0,ea.jsx)(Lo,{children:"Designed GPU\u2011parallel training pipelines with PyTorch and NCCL for scalable efficiency."}),(0,ea.jsx)(Lo,{children:"Evaluated pronunciation accuracy, speaker similarity, and intelligibility for robustness."}),(0,ea.jsx)(Lo,{children:"Built a scalable architecture for large datasets and multiple speakers."})]})}),(0,ea.jsxs)(Do,{children:[(0,ea.jsx)("strong",{children:"Technology used:"})," xTTSv2, Orpheus, PyTorch, NCCL, CUDA, Speech Processing Libraries, Phoneme Modeling, Multi-Speaker TTS Techniques"]})]})]})}),(0,ea.jsx)(Ro,{children:(0,ea.jsxs)(jo,{children:[(0,ea.jsxs)(So,{onClick:()=>v(!b),children:[(0,ea.jsx)("strong",{children:"BS23 Workplace Monitoring & Analytics Platform"}),(0,ea.jsx)(Eo,{$isExpanded:b,children:(0,ea.jsx)(uo,{size:20})})]}),(0,ea.jsxs)(Co,{$isExpanded:b,children:[(0,ea.jsx)(No,{children:(0,ea.jsxs)(_o,{children:[(0,ea.jsx)(Lo,{children:"Built a real\u2011time workplace/desk monitoring platform with multi\u2011camera input."}),(0,ea.jsx)(Lo,{children:"Integrated YOLOv11 for detection and ByteTrack/DeepSORT for tracking."}),(0,ea.jsx)(Lo,{children:"Used Qwen\u20112.5/BLIP\u20112 for vision\u2011language analysis and activity classification (active vs idle)."}),(0,ea.jsx)(Lo,{children:"Monitored occupancy, entries/exits, seating duration, and meeting participation using non\u2011intrusive signals."}),(0,ea.jsx)(Lo,{children:"Implemented privacy\u2011conscious, consistent ID tracking without facial recognition."}),(0,ea.jsx)(Lo,{children:"Generated timestamped NL summaries, logs, and visual playback for productivity insights."}),(0,ea.jsx)(Lo,{children:"Added collaboration intensity mapping, stress estimation, and temporal\u2011spatial analytics."}),(0,ea.jsx)(Lo,{children:"Designed for scalability: queue wait times, role\u2011based detection, peak hours, occupancy alerts."}),(0,ea.jsx)(Lo,{children:"Delivered full\u2011stack solution with Python (FastAPI), OpenCV, CSV logging, and AI/ML models."})]})}),(0,ea.jsxs)(Do,{children:[(0,ea.jsx)("strong",{children:"Technology used:"})," YOLOv11, ByteTrack, DeepSORT, Qwen-2.5, BLIP-2, Chain-of-Thought Prompting, OpenCV, Python, FastAPI, Temporal-Spatial Analytics, Zone Mapping, CSV Logging"]})]})]})}),(0,ea.jsx)(Ro,{children:(0,ea.jsxs)(jo,{children:[(0,ea.jsxs)(So,{onClick:()=>x(!y),children:[(0,ea.jsx)("strong",{children:"Property Tech Platform: Intelligent Property Search"}),(0,ea.jsx)(Eo,{$isExpanded:y,children:(0,ea.jsx)(uo,{size:20})})]}),(0,ea.jsxs)(Co,{$isExpanded:y,children:[(0,ea.jsx)(No,{children:(0,ea.jsxs)(_o,{children:[(0,ea.jsx)(Lo,{children:"Built an LLM-powered conversational property search agent that extracts user intent, budget, and preferences from natural language queries."}),(0,ea.jsx)(Lo,{children:"Designed an intent-to-SQL pipeline for dynamic property retrieval and ranking based on price, location, and amenities."}),(0,ea.jsx)(Lo,{children:"Implemented a recommendation and scheduling assistant to automate broker meetings and personalized suggestions."}),(0,ea.jsx)(Lo,{children:"Integrated Redis memory and Qdrant vector DB for semantic search, session continuity, and context-aware dialogue."}),(0,ea.jsx)(Lo,{children:"Deployed a scalable full-stack system with optimized backend queries for real-time responses."})]})}),(0,ea.jsxs)(Do,{children:[(0,ea.jsx)("strong",{children:"Technology used:"})," Python, LangChain, LangGraph, GPT-4.1, GPT-4o-Mini, Redis, Qdrant, FastAPI, React, Docker, PostgreSQL"]})]})]})})]})})]}),(0,ea.jsxs)(vo,{children:[(0,ea.jsxs)(yo,{onClick:()=>o(!i),children:[(0,ea.jsxs)(xo,{children:[(0,ea.jsxs)(Ao,{children:[(0,ea.jsx)(fo,{size:28}),"Machine Learning Engineer"]}),(0,ea.jsx)(zo,{children:(0,ea.jsxs)(To,{href:"https://www.linkedin.com/company/anttroboticsltd/",target:"_blank",rel:"noopener noreferrer",onClick:e=>e.stopPropagation(),children:["ANTT Robotics Ltd",(0,ea.jsx)(ni,{size:16})]})}),(0,ea.jsxs)(Mo,{children:[(0,ea.jsx)(ri,{size:18}),"March 2024 - April 2025"]})]}),(0,ea.jsx)(wo,{$isExpanded:i,children:(0,ea.jsx)(uo,{size:24})})]}),(0,ea.jsx)(ko,{$isExpanded:i,children:(0,ea.jsxs)(Po,{children:[(0,ea.jsx)(Ro,{children:(0,ea.jsxs)(jo,{children:[(0,ea.jsxs)(So,{onClick:()=>k(!w),children:[(0,ea.jsx)("strong",{children:"Gift Shop Intelligent Chatbot"}),(0,ea.jsx)(Eo,{$isExpanded:w,children:(0,ea.jsx)(uo,{size:20})})]}),(0,ea.jsxs)(Co,{$isExpanded:w,children:[(0,ea.jsx)(No,{children:(0,ea.jsxs)(_o,{children:[(0,ea.jsx)(Lo,{children:"Developed a chatbot for personalized gift recommendations and real\u2011time queries using RAG."}),(0,ea.jsx)(Lo,{children:"Integrated GPT\u20114, ChromaDB, and LangChain with ReactJS frontend and FastAPI backend."}),(0,ea.jsx)(Lo,{children:"Enabled retrieval of product info and tailored suggestions to boost engagement and sales."})]})}),(0,ea.jsxs)(Do,{children:[(0,ea.jsx)("strong",{children:"Technology used:"})," GPT-4, RAG, FastAPI, LangChain, ChromaDB, OpenAI Embeddings, ReactJS"]})]})]})}),(0,ea.jsx)(Ro,{children:(0,ea.jsxs)(jo,{children:[(0,ea.jsxs)(So,{onClick:()=>S(!j),children:[(0,ea.jsx)("strong",{children:"ANTT AI Bot"}),(0,ea.jsx)(Eo,{$isExpanded:j,children:(0,ea.jsx)(uo,{size:20})})]}),(0,ea.jsxs)(Co,{$isExpanded:j,children:[(0,ea.jsx)(No,{children:(0,ea.jsxs)(_o,{children:[(0,ea.jsx)(Lo,{children:"Designed a chatbot using fine\u2011tuned LLMs (GPT\u20113.5, GPT\u20114o, LLaMA\u20112) to generate platform\u2011specific code."}),(0,ea.jsx)(Lo,{children:"Produced code for Arduino, ESP32, and Raspberry Pi covering sensors, actuators, and device comms."}),(0,ea.jsx)(Lo,{children:"Validated on real hardware to ensure reliability and correctness."})]})}),(0,ea.jsxs)(Do,{children:[(0,ea.jsx)("strong",{children:"Technology used:"})," Prompt Engineering, LangChain, Python, GPT-3.5, GPT-4o, LLaMA-2"]})]})]})}),(0,ea.jsx)(Ro,{children:(0,ea.jsxs)(jo,{children:[(0,ea.jsxs)(So,{onClick:()=>C(!E),children:[(0,ea.jsx)("strong",{children:"Predictive Maintenance Platform for Appliances"}),(0,ea.jsx)(Eo,{$isExpanded:E,children:(0,ea.jsx)(uo,{size:20})})]}),(0,ea.jsxs)(Co,{$isExpanded:E,children:[(0,ea.jsx)(No,{children:(0,ea.jsxs)(_o,{children:[(0,ea.jsx)(Lo,{children:"Built web/mobile predictive maintenance with time series and boosting models."}),(0,ea.jsx)(Lo,{children:"Implemented weekly retraining with new operational data for adaptive learning."}),(0,ea.jsx)(Lo,{children:"Streamed real\u2011time metrics: temperature, vibration, energy usage, shock events."}),(0,ea.jsx)(Lo,{children:"Deployed on AWS EC2 with FastAPI backend for scalable device monitoring."}),(0,ea.jsx)(Lo,{children:"Managed end\u2011to\u2011end delivery; mentored the AI team and ensured timelines/quality."})]})}),(0,ea.jsxs)(Do,{children:[(0,ea.jsx)("strong",{children:"Technology used:"})," Python, Multiple Time Series Models, Boosting Algorithms, AWS EC2, Adaptive Learning Techniques, FastAPI, Data Analysis Tools"]})]})]})}),(0,ea.jsx)(Ro,{children:(0,ea.jsxs)(jo,{children:[(0,ea.jsxs)(So,{onClick:()=>z(!A),children:[(0,ea.jsx)("strong",{children:"Real-Time ANPR and Dynamic Toll Pricing System"}),(0,ea.jsx)(Eo,{$isExpanded:A,children:(0,ea.jsx)(uo,{size:20})})]}),(0,ea.jsxs)(Co,{$isExpanded:A,children:[(0,ea.jsx)(No,{children:(0,ea.jsxs)(_o,{children:[(0,ea.jsx)(Lo,{children:"Developed real\u2011time ANPR and dynamic toll pricing with YOLOv8 and OCR."}),(0,ea.jsx)(Lo,{children:"Calculated tolls by vehicle type, time, and traffic; deployed on cloud infra."}),(0,ea.jsx)(Lo,{children:"Integrated HD cameras and a user\u2011friendly UI to improve efficiency and reduce manual work."})]})}),(0,ea.jsxs)(Do,{children:[(0,ea.jsx)("strong",{children:"Technology used:"})," Python, YOLOv8, OpenCV, Supervision, FastAPI, Ultralytics, PyQt5, ByteTrack"]})]})]})})]})})]})]})]})},Fo=Ba("trending-up",[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]]),Bo=Xr.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`,Oo=Xr.div`
  text-align: center;
  margin-bottom: 4rem;
`,$o=Xr.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #7AB2D3, #4A628A);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,Uo=Xr.p`
  font-size: 1.2rem;
  color: #64748b;
  font-family: 'Inter', sans-serif;
`,Ho=Xr.div`
  margin-bottom: 3rem;
  padding: 2.5rem;
  background: linear-gradient(135deg, #ffffff 0%, #DFF2EB 100%);
  border: 1px solid #B9E5E8;
  border-radius: 20px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at top right, rgba(122, 178, 211, 0.15), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none; /* Allow clicks to pass through overlay */
    z-index: 0;
  }
  
  &:hover {
    transform: translateY(-8px);
 
  }
  
  &:hover::before {
    opacity: 1;
  }
`,Wo=Xr.h2`
  color:rgb(75, 106, 155);
  font-family: 'Inter', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 12px;
  background: linear-gradient(135deg,rgb(73, 151, 196),rgb(34, 70, 133));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,Vo=Xr.p`
  text-align: justify;
  color: #475569;
  font-family: 'Inter', sans-serif;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  font-size: 1rem;
`,qo=Xr.span`
  
  font-weight: 700;
  
  padding: 4px 8px;
  border-radius: 8px;
`,Go=Xr.a`
  
  text-decoration: none;
  font-weight: 700;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: linear-gradient(135deg, #4A628A);
  color: white;
  padding: 8px 16px;
  border-radius: 12px;
  font-size: 0.9rem;
  position: relative;
  z-index: 1;
  
  &:hover {
    transform: translateY(-2px);
    text-decoration: none;
  }
`,Ko=Xr.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #e2e8f0;
`,Yo=Xr.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #64748b;
  font-size: 0.9rem;
  font-weight: 600;
`,Qo=()=>(0,ea.jsxs)(Bo,{children:[(0,ea.jsxs)(Oo,{children:[(0,ea.jsx)($o,{children:"Research Datasets"}),(0,ea.jsx)(Uo,{children:"Comprehensive benchmark datasets for low-resource Bangla language research"})]}),(0,ea.jsxs)(Ho,{children:[(0,ea.jsxs)(Wo,{children:[(0,ea.jsx)(ji,{size:28}),"1. Vashantor: A Large-scale Multilingual Benchmark Dataset for Automated Translation of Bangla Regional Dialects to Bangla Language"]}),(0,ea.jsxs)(Vo,{children:["The ",(0,ea.jsx)(qo,{children:(0,ea.jsxs)(Go,{href:"https://data.mendeley.com/datasets/bj5jgk878b/2",target:"_blank",rel:"noopener noreferrer",children:[(0,ea.jsx)(Fi,{size:16}),'"Vashantor"']})}),' dataset comprises 32,500 sentences from five regions in Bangladesh (Chittagong, Noakhali, Sylhet, Barishal, and Mymensingh) across two language formats: Bangla and Banglish (a mix of Bangla and English written in the English alphabet). The name "Vashantor" (\u09ad\u09be\u09b7\u09be\u09a8\u09cd\u09a4\u09b0), meaning "Translation," reflects its focus on Bangla and translations involving the language. Data was curated from websites, social media, and discussion boards to capture natural, real-world dialogues. Each region and language having 2,500 samples distributed across training, testing, and validation sets. Additionally, the dataset includes a core set with 2,500 samples each for Bangla, Banglish, and English.']}),(0,ea.jsxs)(Ko,{children:[(0,ea.jsxs)(Yo,{children:[(0,ea.jsx)(Fo,{size:16}),"32,500 sentences"]}),(0,ea.jsxs)(Yo,{children:[(0,ea.jsx)(ji,{size:16}),"5 regions"]}),(0,ea.jsxs)(Yo,{children:[(0,ea.jsx)(Di,{size:16}),"2 language formats"]})]})]}),(0,ea.jsxs)(Ho,{children:[(0,ea.jsxs)(Wo,{children:[(0,ea.jsx)(ti,{size:28}),"2. Motamot: A Dataset for Revealing the Supremacy of Large Language Models over Transformer Models in Bengali Political Sentiment Analysis"]}),(0,ea.jsxs)(Vo,{children:["The ",(0,ea.jsx)(qo,{children:(0,ea.jsxs)(Go,{href:"https://data.mendeley.com/datasets/hdhnrrwdz2/1",target:"_blank",rel:"noopener noreferrer",children:[(0,ea.jsx)(Fi,{size:16}),'"Motamot"']})}),' dataset (\u09ae\u09a4\u09be\u09ae\u09a4 in Bengali, meaning "Opinion" in English) consists of 7,058 data points focused on political sentiment analysis in the Bengali language. Compiled from a range of online newspapers covering political events and conversations during Bangladeshi elections, it includes 4,132 positive and 2,926 negative sentiment-labeled instances. The data was sourced from reputable news outlets, ensuring a diverse and representative sample of political discourse in Bangladesh, providing valuable insights into the opinions shaping the country\'s political landscape.']}),(0,ea.jsxs)(Ko,{children:[(0,ea.jsxs)(Yo,{children:[(0,ea.jsx)(Fo,{size:16}),"7,058 data points"]}),(0,ea.jsxs)(Yo,{children:[(0,ea.jsx)(ti,{size:16}),"4,132 positive"]}),(0,ea.jsxs)(Yo,{children:[(0,ea.jsx)(ti,{size:16}),"2,926 negative"]})]})]}),(0,ea.jsxs)(Ho,{children:[(0,ea.jsxs)(Wo,{children:[(0,ea.jsx)(Di,{size:28}),"3. Uddessho: An Extensive Benchmark Dataset for Multimodal Author Intent Classification in Low-Resource Bangla Language"]}),(0,ea.jsxs)(Vo,{children:["The ",(0,ea.jsx)(qo,{children:(0,ea.jsxs)(Go,{href:"https://data.mendeley.com/datasets/mzxmt8tfjs/1",target:"_blank",rel:"noopener noreferrer",children:[(0,ea.jsx)(Fi,{size:16}),'"Uddessho"']})}),' dataset, meaning "Intent" in English, is designed for multimodal author intent classification. It contains 3048 post instances categorized into six intent types: Informative, Advocative, Promotive, Exhibitionist, Expressive, and Controversial. The dataset is divided into a training set with 2423 posts, a testing set with 313 posts, and a validation set with 312 posts, totaling 3048 posts.']}),(0,ea.jsxs)(Ko,{children:[(0,ea.jsxs)(Yo,{children:[(0,ea.jsx)(Fo,{size:16}),"3,048 posts"]}),(0,ea.jsxs)(Yo,{children:[(0,ea.jsx)(Di,{size:16}),"6 intent types"]}),(0,ea.jsxs)(Yo,{children:[(0,ea.jsx)(Fi,{size:16}),"Multimodal"]})]})]}),(0,ea.jsxs)(Ho,{children:[(0,ea.jsxs)(Wo,{children:[(0,ea.jsx)(ti,{size:28}),"4. BanglaCalamityMMD: A Comprehensive Benchmark Dataset for Multimodal Disaster Identification in the Low-Resource Bangla Language"]}),(0,ea.jsxs)(Vo,{children:["The ",(0,ea.jsx)(qo,{children:(0,ea.jsxs)(Go,{href:"https://data.mendeley.com/datasets/7dggbjn5sd/1",target:"_blank",rel:"noopener noreferrer",children:[(0,ea.jsx)(Fi,{size:16}),'"BanglaCalamityMMD"']})})," dataset is a comprehensive multimodal resource designed to address the significant gap in disaster identification within Bangla language text. Comprising a total of 7,903 instances spanning eight distinct categories: Landslides, Wildfire, Tropical Storm, Drought, Flood, Earthquake, Human Damage, and Non-Disaster\u2014the dataset is meticulously divided into three subsets: 6,323 instances for training, 790 instances for testing, and 790 instances for validation. This structured division ensures that models can be trained effectively, tested rigorously, and validated accurately, thereby enhancing the overall reliability and applicability of disaster identification systems in Bangla."]}),(0,ea.jsxs)(Ko,{children:[(0,ea.jsxs)(Yo,{children:[(0,ea.jsx)(Fo,{size:16}),"7,903 instances"]}),(0,ea.jsxs)(Yo,{children:[(0,ea.jsx)(ti,{size:16}),"8 categories"]}),(0,ea.jsxs)(Yo,{children:[(0,ea.jsx)(Fi,{size:16}),"Multimodal"]})]})]}),(0,ea.jsxs)(Ho,{children:[(0,ea.jsxs)(Wo,{children:[(0,ea.jsx)(Fo,{size:28}),"5. MultiBanFakeDetect: An Extensive Benchmark Dataset for Multimodal Under-Resource Bangla Fake News Detection"]}),(0,ea.jsxs)(Vo,{children:["The ",(0,ea.jsx)(qo,{children:(0,ea.jsxs)(Go,{href:"https://data.mendeley.com/datasets/k5pbz9795f/1",target:"_blank",rel:"noopener noreferrer",children:[(0,ea.jsx)(Fi,{size:16}),'"MultiBanFakeDetect"']})})," dataset consists of a total of 9,600 text-image instances from online forums, news websites, and social media. Covering political, social, Technology, and entertainment themes, the dataset offers balanced real and fake instances. It includes a balanced set of real and fake news examples, with 7,680 instances for training, 960 for testing, and 960 for validation. The dataset covers different types of fake news\u2014misinformation, rumors, and clickbait\u2014as well as non-fake news, ensuring a comprehensive representation of various types of content. The dataset is also categorized into 12 topics, including entertainment, sports, politics, and more, with equal distribution across all categories for balanced evaluation."]}),(0,ea.jsxs)(Ko,{children:[(0,ea.jsxs)(Yo,{children:[(0,ea.jsx)(Fo,{size:16}),"9,600 instances"]}),(0,ea.jsxs)(Yo,{children:[(0,ea.jsx)(Di,{size:16}),"12 topics"]}),(0,ea.jsxs)(Yo,{children:[(0,ea.jsx)(Fi,{size:16}),"Text-Image"]})]})]})]}),Jo=Ba("star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]),Xo=Xr.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`,Zo=Xr.div`
  text-align: center;
  margin-bottom: 4rem;
`,el=Xr.h1`
  font-size: 3rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #7AB2D3, #4A628A);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,tl=Xr.p`
  font-size: 1.2rem;
  color: #64748b;
  font-family: 'Inter', sans-serif;
`,nl=Xr.div`
  margin-bottom: 2.5rem;
  font-family: 'Inter', sans-serif;
  color: #1e293b;
  padding: 2rem;
  background: linear-gradient(135deg, #ffffff 0%, #DFF2EB 100%);
  border: 1px solid #B9E5E8;
  border-radius: 20px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  
  &::after {
    content: '🎓';
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    font-size: 2rem;
    opacity: 0.3;
    transition: all 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 40px rgba(122, 178, 211, 0.2);
    border-color: #7AB2D3;
  }
  
  &:hover::after {
    opacity: 1;
    transform: scale(1.2);
  }
`,rl=Xr.div`
  color: #1e293b;
  font-size: 1.5rem;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 12px;
`,al=Xr.a`
  color: #7AB2D3;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  
  &:hover {
    color: #4A628A;
    text-decoration: none;
    transform: translateY(-1px);
  }
`,il=Xr.div`
  margin-bottom: 0.75rem;
  color: #475569;
  font-size: 1.1rem;
  font-weight: 600;
`,ol=Xr.div`
  margin-bottom: 0.75rem;
  color: #64748b;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 8px;
`,ll=Xr.div`
  margin-bottom: 1rem;
  font-weight: 700;
  color: #059669;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, #ecfdf5, #d1fae5);
  padding: 8px 16px;
  border-radius: 12px;
  display: inline-flex;
`,sl=Xr.div`
  margin-bottom: 1rem;
  color: #475569;
  font-size: 1rem;
  line-height: 1.6;
`,cl=Xr.a`
  color: #dc2626;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  
  &:hover {
    color: #b91c1c;
    text-decoration: none;
    transform: translateY(-1px);
  }
`,ul=Xr.div`
  margin-top: 4rem;
`,dl=Xr.h2`
  color: #1e293b;
  font-family: 'Inter', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
  background: linear-gradient(135deg, #f59e0b, #d97706);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #f59e0b, #d97706);
    border-radius: 2px;
  }
`,fl=Xr.div`
  margin-bottom: 1.5rem;
  font-family: 'Inter', sans-serif;
  color: #1e293b;
  line-height: 1.7;
  padding: 1.5rem;
  background: linear-gradient(135deg, #ffffff 0%, #fef3c7 100%);
  border: 1px solid #fde68a;
  border-radius: 16px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '🏆';
    position: absolute;
    top: 1rem;
    right: 1rem;
    font-size: 1.5rem;
    opacity: 0.7;
  }
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 15px 35px rgba(245, 158, 11, 0.15);
    border-color: #f59e0b;
  }
`,hl=Xr.span`
  color: #dc2626;
  font-weight: 700;
  font-size: 1.1rem;
`,pl=Xr.a`
  color: #3b82f6;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  
  &:hover {
    color: #1d4ed8;
    text-decoration: none;
    transform: translateY(-1px);
  }
`,ml=Xr.a`
  color: #dc2626;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  background: linear-gradient(135deg, #fef2f2, #fee2e2);
  padding: 4px 12px;
  border-radius: 8px;
  
  &:hover {
    color: #b91c1c;
    text-decoration: none;
    transform: translateY(-1px);
  }
`,gl=()=>(0,ea.jsxs)(Xo,{children:[(0,ea.jsxs)(Zo,{children:[(0,ea.jsx)(el,{children:"Education & Awards"}),(0,ea.jsx)(tl,{children:"Academic journey and achievements"})]}),(0,ea.jsxs)(nl,{children:[(0,ea.jsxs)(rl,{children:[(0,ea.jsx)(oi,{size:28}),(0,ea.jsxs)(al,{href:"https://aust.edu",target:"_blank",rel:"noopener noreferrer",children:["Ahsanullah University of Science and Technology",(0,ea.jsx)(ni,{size:16})]})]}),(0,ea.jsx)(il,{children:"Bachelor of Science (B.Sc.)"}),(0,ea.jsx)(il,{children:"Computer Science and Engineering"}),(0,ea.jsxs)(ol,{children:[(0,ea.jsx)(ri,{size:18}),"Duration: 2019 - 2023"]}),(0,ea.jsxs)(ll,{children:[(0,ea.jsx)(Jo,{size:18}),"CGPA: ",(0,ea.jsx)("b",{children:"3.563/4.00"})," scale (Ranked ",(0,ea.jsxs)("b",{children:["39",(0,ea.jsx)("sup",{children:"th"})]}),")"]}),(0,ea.jsxs)(sl,{children:[(0,ea.jsx)("strong",{children:"Supervisor:"})," ",(0,ea.jsxs)(cl,{href:"https://www.aust.edu/cse/faculty_member/dr_mohammad_shafiul_alam",target:"_blank",rel:"noopener noreferrer",children:["Dr. Mohammad Shafiul Alam",(0,ea.jsx)(ni,{size:14})]}),", Professor, Department of CSE, AUST"]})]}),(0,ea.jsxs)(nl,{children:[(0,ea.jsxs)(rl,{children:[(0,ea.jsx)(ai,{size:28}),(0,ea.jsxs)(al,{href:"https://bncd.edu.bd/",target:"_blank",rel:"noopener noreferrer",children:["Bangladesh Navy College Dhaka",(0,ea.jsx)(ni,{size:16})]})]}),(0,ea.jsx)(il,{children:"Higher Secondary Certificate (HSC)"}),(0,ea.jsxs)(ol,{children:[(0,ea.jsx)(ri,{size:18}),"Duration: 2016 - 2018"]}),(0,ea.jsxs)(ll,{children:[(0,ea.jsx)(Jo,{size:18}),"GPA: ",(0,ea.jsx)("b",{children:"4.50/5.00"})," scale"]})]}),(0,ea.jsxs)(nl,{children:[(0,ea.jsxs)(rl,{children:[(0,ea.jsx)(ai,{size:28}),(0,ea.jsxs)(al,{href:"https://mmodel.edu.bd/",target:"_blank",rel:"noopener noreferrer",children:["Motijheel Model School & College",(0,ea.jsx)(ni,{size:16})]})]}),(0,ea.jsx)(il,{children:"Secondary School Certificate (SSC)"}),(0,ea.jsxs)(ol,{children:[(0,ea.jsx)(ri,{size:18}),"Duration: 2014 - 2016"]}),(0,ea.jsxs)(ll,{children:[(0,ea.jsx)(Jo,{size:18}),"GPA: ",(0,ea.jsx)("b",{children:"5.00/5.00"})," scale"]})]}),(0,ea.jsxs)(ul,{children:[(0,ea.jsx)(dl,{children:"Awards & Achievements"}),(0,ea.jsxs)(fl,{children:["\ud83c\udfc6 ",(0,ea.jsx)(hl,{children:"Poster Presentation"}),", secured ",(0,ea.jsxs)("b",{children:["1",(0,ea.jsx)("sup",{children:"st"})]})," position ",(0,ea.jsxs)(pl,{href:"https://aust.edu/events/1996",target:"_blank",rel:"noopener noreferrer",children:["RESEARCH SYMPOSIUM 2023: AN INTRA-AUST RESEARCH EXHIBITION ",(0,ea.jsx)(ni,{size:14})]})," organized by AUST Research and Publication Club [",(0,ea.jsxs)(ml,{href:"https://drive.google.com/file/d/1JN8cEUTWAilZpNsZaIxPVusiHxqc4OZA/view?usp=sharing",target:"_blank",rel:"noopener noreferrer",children:["Poster Link ",(0,ea.jsx)(ni,{size:12})]}),"]"]})]})]}),bl=Ba("download",[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]]),vl=Ba("linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]),yl=Xr.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 1rem; // Reduced padding for mobile
  }
  
  @media (max-width: 480px) {
    padding: 0.5rem; // Further reduced padding for very small screens
  }
`,xl=Xr.div`
  margin-bottom: 3rem;
  text-align: center;
  padding: 2rem;
  background: linear-gradient(135deg, #ffffff 0%, #DFF2EB 100%);
  border: 1px solid #B9E5E8;
  border-radius: 20px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at top right, rgba(122, 178, 211, 0.1), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 15px 35px rgba(122, 178, 211, 0.2);
    border-color: #7AB2D3;
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  @media (max-width: 768px) {
    margin-bottom: 2rem; // Reduced margin for mobile
    padding: 1.5rem; // Reduced padding for mobile
  }
  
  @media (max-width: 480px) {
    margin-bottom: 1.5rem; // Further reduced margin for very small screens
    padding: 1rem; // Further reduced padding for very small screens
  }
`,wl=Xr.p`
  color:rgb(0, 49, 133);
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1rem; // Reduced font size for mobile
    margin-bottom: 1rem; // Reduced margin for mobile
    line-height: 1.5; // Reduced line height for mobile
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem; // Further reduced font size for very small screens
    margin-bottom: 0.75rem; // Further reduced margin for very small screens
    line-height: 1.4; // Further reduced line height for very small screens
  }
`,kl=Xr.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color:rgb(0, 114, 180);
  text-decoration: none;
  font-weight: 600;
  padding: 12px 20px;
  background: linear-gradient(135deg, #DFF2EB, #B9E5E8);
  border: 1px solid #7AB2D3;
  border-radius: 12px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.5s;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(122, 178, 211, 0.3);
    border-color: #4A628A;
    color: #4A628A;
    text-decoration: none;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  @media (max-width: 768px) {
    padding: 10px 16px; // Reduced padding for mobile
    font-size: 0.9rem; // Reduced font size for mobile
  }
  
  @media (max-width: 480px) {
    padding: 8px 14px; // Further reduced padding for very small screens
    font-size: 0.85rem; // Further reduced font size for very small screens
  }
`,jl=(Xr.iframe`
  width: 100%;
  height: 800px;
  border: none;
  margin-bottom: 3rem;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(122, 178, 211, 0.15);
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 15px 40px rgba(122, 178, 211, 0.25);
  }
  
  @media (max-width: 768px) {
    height: 600px; // Reduced height for mobile
    margin-bottom: 2rem; // Reduced margin for mobile
    border-radius: 12px; // Reduced border radius for mobile
  }
  
  @media (max-width: 480px) {
    height: 500px; // Further reduced height for very small screens
    margin-bottom: 1.5rem; // Further reduced margin for very small screens
    border-radius: 10px; // Further reduced border radius for very small screens
  }
`,Xr.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem; // Reduced gap for mobile
    margin-bottom: 1.5rem; // Reduced margin for mobile
  }
  
  @media (max-width: 480px) {
    gap: 1rem; // Further reduced gap for very small screens
    margin-bottom: 1rem; // Further reduced margin for very small screens
  }
`),Sl=Xr.div`
  padding: 2rem;
  background: linear-gradient(135deg, #ffffff 0%, #DFF2EB 100%);
  border: 1px solid #B9E5E8;
  border-radius: 20px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  
  &::after {
    content: '📧';
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    font-size: 2rem;
    opacity: 0.3;
    transition: all 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 40px rgba(122, 178, 211, 0.2);
    border-color: #7AB2D3;
  }
  
  &:hover::after {
    opacity: 1;
    transform: scale(1.2);
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem; // Reduced padding for mobile
    
    &::after {
      top: 1rem; // Adjusted position for mobile
      right: 1rem; // Adjusted position for mobile
      font-size: 1.5rem; // Reduced size for mobile
    }
  }
  
  @media (max-width: 480px) {
    padding: 1rem; // Further reduced padding for very small screens
    
    &::after {
      top: 0.75rem; // Further adjusted position for very small screens
      right: 0.75rem; // Further adjusted position for very small screens
      font-size: 1.25rem; // Further reduced size for very small screens
    }
  }
`,El=Xr.div`
  padding: 2rem;
  background: linear-gradient(135deg, #ffffff 0%, #DFF2EB 100%);
  border: 1px solid #B9E5E8;
  border-radius: 20px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  
  &::after {
    content: '🔗';
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    font-size: 2rem;
    opacity: 0.3;
    transition: all 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 40px rgba(122, 178, 211, 0.2);
    border-color: #7AB2D3;
  }
  
  &:hover::after {
    opacity: 1;
    transform: scale(1.2);
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem; // Reduced padding for mobile
    
    &::after {
      top: 1rem; // Adjusted position for mobile
      right: 1rem; // Adjusted position for mobile
      font-size: 1.5rem; // Reduced size for mobile
    }
  }
  
  @media (max-width: 480px) {
    padding: 1rem; // Further reduced padding for very small screens
    
    &::after {
      top: 0.75rem; // Further adjusted position for very small screens
      right: 0.75rem; // Further adjusted position for very small screens
      font-size: 1.25rem; // Further reduced size for very small screens
    }
  }
`,Cl=Xr.h2`
  color: #4A628A;
  margin-bottom: 1.5rem;
  font-family: 'Inter', sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 10px;
  
  &::before {
    content: '';
    width: 4px;
    height: 24px;
    background: linear-gradient(135deg, #7AB2D3, #4A628A);
    border-radius: 2px;
  }
  
  @media (max-width: 768px) {
    font-size: 1.3rem; // Reduced font size for mobile
    margin-bottom: 1rem; // Reduced margin for mobile
    gap: 8px; // Reduced gap for mobile
    
    &::before {
      height: 20px; // Reduced height for mobile
    }
  }
  
  @media (max-width: 480px) {
    font-size: 1.2rem; // Further reduced font size for very small screens
    margin-bottom: 0.75rem; // Further reduced margin for very small screens
    gap: 6px; // Further reduced gap for very small screens
    
    &::before {
      height: 18px; // Further reduced height for very small screens
    }
  }
`,Al=Xr.p`
  color: #4A628A;
  font-family: 'Inter', sans-serif;
  margin-bottom: 0.8rem;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
  align-items: flex-start;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  a {
    color: #4A628A;
    text-decoration: none;
    font-weight: 600;
    overflow-wrap: anywhere;
    word-break: break-word;
  }
  
  @media (max-width: 768px) {
    font-size: 0.95rem; // Slightly larger for readability on mobile
    margin-bottom: 0.6rem; // Reduced margin for mobile
    gap: 6px; // Reduced gap for mobile
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem; // Maintain readability on very small screens
    margin-bottom: 0.5rem; // Further reduced margin for very small screens
    gap: 5px; // Further reduced gap for very small screens
  }
`,zl=Xr.p`
  color: #4A628A;
  font-family: 'Inter', sans-serif;
  line-height: 1.6;
  font-size: 1rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 0.9rem; // Reduced font size for mobile
    margin-bottom: 0.75rem; // Reduced margin for mobile
    line-height: 1.5; // Reduced line height for mobile
  }
  
  @media (max-width: 480px) {
    font-size: 0.85rem; // Further reduced font size for very small screens
    margin-bottom: 0.5rem; // Further reduced margin for very small screens
    line-height: 1.4; // Further reduced line height for very small screens
  }
`,Tl=Xr.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color:rgb(11, 103, 156);
  text-decoration: none;
  font-weight: 600;
  padding: 10px 16px;
  background: linear-gradient(135deg, #DFF2EB, #B9E5E8);
  border: 1px solidrgb(0, 80, 126);
  border-radius: 12px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.5s;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(122, 178, 211, 0.3);
    border-color: #4A628A;
    color: #4A628A;
    text-decoration: none;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  @media (max-width: 768px) {
    padding: 8px 14px; // Reduced padding for mobile
    font-size: 0.9rem; // Reduced font size for mobile
    gap: 6px; // Reduced gap for mobile
  }
  
  @media (max-width: 480px) {
    padding: 6px 12px; // Further reduced padding for very small screens
    font-size: 0.85rem; // Further reduced font size for very small screens
    gap: 5px; // Further reduced gap for very small screens
  }
`,Ml=()=>(0,ea.jsxs)(yl,{children:[(0,ea.jsxs)(xl,{children:[(0,ea.jsx)(wl,{children:"You can download a PDF copy of my CV here. The document contains my complete professional background, including education, work experience, and technical skills."}),(0,ea.jsxs)(kl,{href:"/files/CV/CV_of_Mukaffi%20Bin%20Moin.pdf",download:!0,target:"_blank",rel:"noopener noreferrer",children:[(0,ea.jsx)(bl,{size:18}),"Download CV"]})]}),(0,ea.jsx)("object",{data:"https://drive.google.com/file/d/1hlwwqNChNhZ31AX9yZSJRXI-z2tIDRz-/preview",type:"application/pdf",width:"100%",height:"800px",style:{border:"none",borderRadius:"16px",boxShadow:"0 10px 30px rgba(122, 178, 211, 0.15)",margin:"0 0 3rem 0"}}),(0,ea.jsxs)(jl,{children:[(0,ea.jsxs)(Sl,{children:[(0,ea.jsxs)(Cl,{children:[(0,ea.jsx)(Oa,{size:24}),"Contact Information"]}),(0,ea.jsxs)(Al,{children:[(0,ea.jsx)(Oa,{size:16}),(0,ea.jsx)("a",{href:"mailto:mukaffimoin28@gmail.com",children:"mukaffimoin28@gmail.com"})]}),(0,ea.jsxs)(Al,{children:[(0,ea.jsx)(Oa,{size:16}),(0,ea.jsx)("a",{href:"mailto:mukaffi28@gmail.com",children:"mukaffi28@gmail.com"})]})]}),(0,ea.jsxs)(El,{children:[(0,ea.jsxs)(Cl,{children:[(0,ea.jsx)(vl,{size:24}),"Social Media"]}),(0,ea.jsx)(zl,{children:"Connect with me on professional networks to stay updated with my latest work and research."}),(0,ea.jsxs)(Tl,{href:"https://www.linkedin.com/in/mukaffi-bin-moin/",target:"_blank",rel:"noopener noreferrer",children:[(0,ea.jsx)(vl,{size:18}),"LinkedIn Profile"]})]})]})]}),Pl=(function(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var a=Yr.apply(void 0,ut([t],n,!1)),i="sc-global-".concat(_n(JSON.stringify(a))),o=new Zr(a,i),l=function(t){var n=Nr(),r=e.useContext(Wr),a=e.useRef(n.styleSheet.allocateGSInstance(i)).current;return n.styleSheet.server&&s(a,t,n.styleSheet,r,n.stylis),e.useLayoutEffect(function(){if(!n.styleSheet.server)return s(a,t,n.styleSheet,r,n.stylis),function(){return o.removeStyles(a,n.styleSheet)}},[a,t,n.styleSheet,r,n.stylis]),null};function s(e,t,n,r,a){if(o.isStatic)o.renderStyles(e,xn,n,a);else{var i=ct(ct({},t),{theme:jn(t,r,l.defaultProps)});o.renderStyles(e,i,n,a)}}return e.memo(l)})`
  /* Base mobile-friendly styles */
  * {
    box-sizing: border-box;
  }
  
  html {
    font-size: 16px;
    
    @media (max-width: 768px) {
      font-size: 14px; // Slightly reduced base font size for mobile
    }
    
    @media (max-width: 480px) {
      font-size: 13px; // Further reduced base font size for very small screens
    }
  }
  
  body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden; // Prevent horizontal scrolling on mobile
  }
  
  /* Touch-friendly improvements for mobile */
  button, a, input, select, textarea {
    @media (max-width: 768px) {
      min-height: 44px; // Minimum touch target size
      min-width: 44px; // Minimum touch target size
    }
  }
  
  /* Modern Card Hover Effects */
  .modern-card {
    background: linear-gradient(135deg, #ffffff 0%, #DFF2EB 100%);
    border: 1px solid #B9E5E8;
    border-radius: 16px;
    padding: 24px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
    cursor: pointer;
  }

  .modern-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #7AB2D3, #4A628A, #B9E5E8);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  .modern-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(122, 178, 211, 0.2);
    border-color: #7AB2D3;
  }

  .modern-card:hover::before {
    transform: scaleX(1);
  }

  /* Glassmorphism Card */
  .glass-card {
    background: rgba(223, 242, 235, 0.8);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(185, 229, 232, 0.3);
    border-radius: 20px;
    padding: 24px;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
  }

  .glass-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(185, 229, 232, 0.4), transparent);
    transition: left 0.5s;
  }

  .glass-card:hover {
    transform: translateY(-4px) scale(1.02);
    box-shadow: 0 25px 50px rgba(122, 178, 211, 0.2);
    border-color: rgba(122, 178, 211, 0.5);
  }

  .glass-card:hover::before {
    left: 100%;
  }

  /* Timeline Card */
  .timeline-card {
    background: #ffffff;
    border-left: 4px solid #7AB2D3;
    border-radius: 12px;
    padding: 20px;
    margin-bottom: 16px;
    transition: all 0.3s ease;
    position: relative;
    box-shadow: 0 4px 6px rgba(122, 178, 211, 0.1);
  }

  .timeline-card::before {
    content: '';
    position: absolute;
    left: -8px;
    top: 24px;
    width: 12px;
    height: 12px;
    background: #7AB2D3;
    border-radius: 50%;
    border: 3px solid #ffffff;
    box-shadow: 0 0 0 3px #7AB2D3;
    transition: all 0.3s ease;
  }

  .timeline-card:hover {
    transform: translateX(8px);
    box-shadow: 0 8px 25px rgba(122, 178, 211, 0.2);
    border-left-color: #4A628A;
  }

  .timeline-card:hover::before {
    background: #4A628A;
    box-shadow: 0 0 0 3px #4A628A, 0 0 20px rgba(74, 98, 138, 0.4);
  }

  /* Publication Card */
  .publication-card {
    background: linear-gradient(135deg, #ffffff 0%, #DFF2EB 100%);
    border: 1px solid #B9E5E8;
    border-radius: 16px;
    padding: 24px;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
  }

  .publication-card::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 40px 40px 0;
    border-color: transparent #7AB2D3 transparent transparent;
    opacity: 0;
    transition: all 0.3s ease;
  }

  .publication-card:hover {
    transform: translateY(-6px) rotateX(2deg);
    box-shadow: 0 20px 40px rgba(122, 178, 211, 0.2);
    border-color: #7AB2D3;
  }

  .publication-card:hover::after {
    opacity: 1;
  }

  /* Research Area Card */
  .research-card {
    background: linear-gradient(135deg, #DFF2EB 0%, #B9E5E8 100%);
    border: 2px solid transparent;
    border-radius: 20px;
    padding: 28px;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
  }

  .research-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, #7AB2D3, #4A628A);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 0;
  }

  .research-card > * {
    position: relative;
    z-index: 1;
  }

  .research-card:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 25px 50px rgba(122, 178, 211, 0.25);
    border-color: #7AB2D3;
  }

  .research-card:hover::before {
    opacity: 0.05;
  }

  /* Dataset Card */
  .dataset-card {
    background: linear-gradient(135deg, #ffffff 0%, #DFF2EB 100%);
    border: 1px solid #B9E5E8;
    border-radius: 18px;
    padding: 26px;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
  }

  .dataset-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at top right, rgba(122, 178, 211, 0.15), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .dataset-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 40px rgba(122, 178, 211, 0.2);
    border-color: #7AB2D3;
  }

  .dataset-card:hover::before {
    opacity: 1;
  }

  /* Education Card */
  .education-card {
    background: linear-gradient(135deg, #ffffff 0%, #DFF2EB 100%);
    border: 1px solid #B9E5E8;
    border-radius: 16px;
    padding: 24px;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
  }

  .education-card::after {
    content: '🎓';
    position: absolute;
    top: 16px;
    right: 16px;
    font-size: 24px;
    opacity: 0.3;
    transition: all 0.3s ease;
  }

  .education-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 15px 35px rgba(122, 178, 211, 0.2);
    border-color: #7AB2D3;
  }

  .education-card:hover::after {
    opacity: 1;
    transform: scale(1.2);
  }

  /* Work Experience Card */
  .work-card {
    background: linear-gradient(135deg, #ffffff 0%, #DFF2EB 100%);
    border: 1px solid #B9E5E8;
    border-radius: 16px;
    padding: 24px;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
  }

  .work-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: linear-gradient(180deg, #7AB2D3, #4A628A);
    transform: scaleY(0);
    transition: transform 0.3s ease;
  }

  .work-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 15px 35px rgba(122, 178, 211, 0.2);
    border-color: #7AB2D3;
  }

  .work-card:hover::before {
    transform: scaleY(1);
  }

  /* Modern Button Styles */
  .modern-button {
    background: linear-gradient(135deg, #7AB2D3, #4A628A);
    color: white;
    border: none;
    border-radius: 12px;
    padding: 12px 24px;
    font-weight: 600;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    cursor: pointer;
  }

  .modern-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }

  .modern-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(122, 178, 211, 0.3);
  }

  .modern-button:hover::before {
    left: 100%;
  }

  /* Floating Animation */
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }

  .float-animation {
    animation: float 3s ease-in-out infinite;
  }

  /* Pulse Animation */
  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }

  .pulse-animation {
    animation: pulse 2s ease-in-out infinite;
  }

  /* Gradient Text */
  .gradient-text {
    background: linear-gradient(135deg, #7AB2D3, #4A628A, #B9E5E8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .modern-card,
    .glass-card,
    .publication-card,
    .research-card,
    .dataset-card,
    .education-card,
    .work-card {
      padding: 16px; // Reduced padding for mobile
      margin-bottom: 12px; // Reduced margin for mobile
      border-radius: 12px; // Reduced border radius for mobile
    }
    
    .modern-button {
      padding: 10px 20px; // Reduced padding for mobile
      font-size: 0.9rem; // Reduced font size for mobile
    }
    
    /* Mobile-specific improvements */
    h1, h2, h3, h4, h5, h6 {
      line-height: 1.2; // Tighter line height for mobile
    }
    
    p {
      line-height: 1.5; // Tighter line height for mobile
    }
    
    /* Disable hover effects on mobile for better performance */
    .modern-card:hover,
    .glass-card:hover,
    .publication-card:hover,
    .research-card:hover,
    .dataset-card:hover,
    .education-card:hover,
    .work-card:hover {
      transform: none;
      box-shadow: 0 4px 6px rgba(122, 178, 211, 0.1);
    }
  }
  
  @media (max-width: 480px) {
    .modern-card,
    .glass-card,
    .publication-card,
    .research-card,
    .dataset-card,
    .education-card,
    .work-card {
      padding: 12px; // Further reduced padding for very small screens
      margin-bottom: 10px; // Further reduced margin for very small screens
      border-radius: 10px; // Further reduced border radius for very small screens
    }
    
    .modern-button {
      padding: 8px 16px; // Further reduced padding for very small screens
      font-size: 0.85rem; // Further reduced font size for very small screens
    }
    
    /* Very small screen improvements */
    h1 {
      font-size: 1.5rem !important; // Force smaller headings
    }
    
    h2 {
      font-size: 1.3rem !important; // Force smaller headings
    }
    
    h3 {
      font-size: 1.1rem !important; // Force smaller headings
    }
  }
  
  /* Landscape orientation adjustments for mobile */
  @media (max-width: 768px) and (orientation: landscape) {
    .modern-card,
    .glass-card,
    .publication-card,
    .research-card,
    .dataset-card,
    .education-card,
    .work-card {
      padding: 14px; // Slightly reduced padding for landscape
    }
  }
`,Rl=Xr.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`,Nl=Xr.main`
  flex: 1;
  padding-top: 70px; // Account for fixed header
  margin-left: 400px; // Account for sidebar width
  
  @media (max-width: 768px) {
    margin-left: 0;
    padding-top: 60px; // Reduced padding for mobile
  }
`,_l=Xr.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 1rem; // Reduced padding for mobile
  }
  
  @media (max-width: 480px) {
    padding: 0.5rem; // Further reduced padding for very small screens
  }
`;const Ll=function(){return(0,ea.jsxs)(et,{children:[(0,ea.jsx)(Pl,{}),(0,ea.jsxs)(Rl,{children:[(0,ea.jsx)(ua,{}),(0,ea.jsx)(Ta,{}),(0,ea.jsx)(Nl,{children:(0,ea.jsx)(_l,{children:(0,ea.jsxs)(xe,{children:[(0,ea.jsx)(ve,{path:"/",element:(0,ea.jsx)(Za,{})}),(0,ea.jsx)(ve,{path:"/news",element:(0,ea.jsx)(vi,{})}),(0,ea.jsx)(ve,{path:"/research",element:(0,ea.jsx)(_i,{})}),(0,ea.jsx)(ve,{path:"/publications",element:(0,ea.jsx)(co,{})}),(0,ea.jsx)(ve,{path:"/work",element:(0,ea.jsx)(Io,{})}),(0,ea.jsx)(ve,{path:"/datasets",element:(0,ea.jsx)(Qo,{})}),(0,ea.jsx)(ve,{path:"/education",element:(0,ea.jsx)(gl,{})}),(0,ea.jsx)(ve,{path:"/cv",element:(0,ea.jsx)(Ml,{})})]})})}),(0,ea.jsx)(Na,{variant:"main"})]})]})},Dl=e=>{e&&e instanceof Function&&n.e(453).then(n.bind(n,453)).then(t=>{let{getCLS:n,getFID:r,getFCP:a,getLCP:i,getTTFB:o}=t;n(e),r(e),a(e),i(e),o(e)})};t.createRoot(document.getElementById("root")).render((0,ea.jsx)(e.StrictMode,{children:(0,ea.jsx)(Ll,{})})),Dl()})()})();
//# sourceMappingURL=main.d494218d.js.map