"use strict";(self.webpackChunkmatrix=self.webpackChunkmatrix||[]).push([[59],{4697:function(e,r,t){function n(e){var r=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return r.setUTCFullYear(e.getFullYear()),e.getTime()-r.getTime()}t.d(r,{Z:function(){return n}})},4522:function(e,r,t){function n(e,r){if(r.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+r.length+" present")}t.d(r,{Z:function(){return n}})},9297:function(e,r,t){function n(e){if(null===e||!0===e||!1===e)return NaN;var r=Number(e);return isNaN(r)?r:r<0?Math.ceil(r):Math.floor(r)}t.d(r,{Z:function(){return n}})},2392:function(e,r,t){t.d(r,{Z:function(){return C}});var n=t(8527),a=t(4522);function u(e,r){(0,a.Z)(2,arguments);var t=(0,n.Z)(e),u=(0,n.Z)(r),i=t.getTime()-u.getTime();return i<0?-1:i>0?1:i}var i=t(9297);function s(e,r){(0,a.Z)(2,arguments);var t=(0,n.Z)(e),u=(0,i.Z)(r);return isNaN(u)?new Date(NaN):u?(t.setDate(t.getDate()+u),t):t}function o(e,r){(0,a.Z)(2,arguments);var t=(0,n.Z)(e),u=(0,i.Z)(r);if(isNaN(u))return new Date(NaN);if(!u)return t;var s=t.getDate(),o=new Date(t.getTime());o.setMonth(t.getMonth()+u+1,0);var c=o.getDate();return s>=c?o:(t.setFullYear(o.getFullYear(),o.getMonth(),s),t)}function c(e){return c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function f(e,r){if((0,a.Z)(2,arguments),!r||"object"!==c(r))return new Date(NaN);var t=r.years?(0,i.Z)(r.years):0,u=r.months?(0,i.Z)(r.months):0,f=r.weeks?(0,i.Z)(r.weeks):0,l=r.days?(0,i.Z)(r.days):0,d=r.hours?(0,i.Z)(r.hours):0,v=r.minutes?(0,i.Z)(r.minutes):0,m=r.seconds?(0,i.Z)(r.seconds):0,y=(0,n.Z)(e),h=u||t?o(y,u+12*t):y,g=l||f?s(h,l+7*f):h,p=v+60*d,b=m+60*p,x=1e3*b,_=new Date(g.getTime()+x);return _}var l=t(4697);function d(e){(0,a.Z)(1,arguments);var r=(0,n.Z)(e);return r.setHours(0,0,0,0),r}var v=864e5;function m(e,r){(0,a.Z)(2,arguments);var t=d(e),n=d(r),u=t.getTime()-(0,l.Z)(t),i=n.getTime()-(0,l.Z)(n);return Math.round((u-i)/v)}function y(e,r){var t=e.getFullYear()-r.getFullYear()||e.getMonth()-r.getMonth()||e.getDate()-r.getDate()||e.getHours()-r.getHours()||e.getMinutes()-r.getMinutes()||e.getSeconds()-r.getSeconds()||e.getMilliseconds()-r.getMilliseconds();return t<0?-1:t>0?1:t}function h(e,r){(0,a.Z)(2,arguments);var t=(0,n.Z)(e),u=(0,n.Z)(r),i=y(t,u),s=Math.abs(m(t,u));t.setDate(t.getDate()-i*s);var o=Number(y(t,u)===-i),c=i*(s-o);return 0===c?0:c}Math.pow(10,8);var g=36e5;function p(e,r){return(0,a.Z)(2,arguments),(0,n.Z)(e).getTime()-(0,n.Z)(r).getTime()}var b={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(e){return e<0?Math.ceil(e):Math.floor(e)}};function x(e){return e?b[e]:b.trunc}function _(e,r,t){(0,a.Z)(2,arguments);var n=p(e,r)/g;return x(null===t||void 0===t?void 0:t.roundingMethod)(n)}function Z(e,r,t){(0,a.Z)(2,arguments);var n=p(e,r)/6e4;return x(null===t||void 0===t?void 0:t.roundingMethod)(n)}function k(e,r){(0,a.Z)(2,arguments);var t=(0,n.Z)(e),u=(0,n.Z)(r),i=t.getFullYear()-u.getFullYear(),s=t.getMonth()-u.getMonth();return 12*i+s}function A(e){(0,a.Z)(1,arguments);var r=(0,n.Z)(e);return r.setHours(23,59,59,999),r}function F(e){(0,a.Z)(1,arguments);var r=(0,n.Z)(e),t=r.getMonth();return r.setFullYear(r.getFullYear(),t+1,0),r.setHours(23,59,59,999),r}function w(e){(0,a.Z)(1,arguments);var r=(0,n.Z)(e);return A(r).getTime()===F(r).getTime()}function V(e,r){(0,a.Z)(2,arguments);var t,i=(0,n.Z)(e),s=(0,n.Z)(r),o=u(i,s),c=Math.abs(k(i,s));if(c<1)t=0;else{1===i.getMonth()&&i.getDate()>27&&i.setDate(30),i.setMonth(i.getMonth()-o*c);var f=u(i,s)===-o;w((0,n.Z)(e))&&1===c&&1===u(e,s)&&(f=!1),t=o*(c-Number(f))}return 0===t?0:t}function S(e,r,t){(0,a.Z)(2,arguments);var n=p(e,r)/1e3;return x(null===t||void 0===t?void 0:t.roundingMethod)(n)}function D(e,r){(0,a.Z)(2,arguments);var t=(0,n.Z)(e),u=(0,n.Z)(r);return t.getFullYear()-u.getFullYear()}function M(e,r){(0,a.Z)(2,arguments);var t=(0,n.Z)(e),i=(0,n.Z)(r),s=u(t,i),o=Math.abs(D(t,i));t.setFullYear(1584),i.setFullYear(1584);var c=u(t,i)===-s,f=s*(o-Number(c));return 0===f?0:f}function C(e){(0,a.Z)(1,arguments);var r=(0,n.Z)(e.start),t=(0,n.Z)(e.end);if(isNaN(r.getTime()))throw new RangeError("Start Date is invalid");if(isNaN(t.getTime()))throw new RangeError("End Date is invalid");var i={};i.years=Math.abs(M(t,r));var s=u(t,r),o=f(r,{years:s*i.years});i.months=Math.abs(V(t,o));var c=f(o,{months:s*i.months});i.days=Math.abs(h(t,c));var l=f(c,{days:s*i.days});i.hours=Math.abs(_(t,l));var d=f(l,{hours:s*i.hours});i.minutes=Math.abs(Z(t,d));var v=f(d,{minutes:s*i.minutes});return i.seconds=Math.abs(S(t,v)),i}},8527:function(e,r,t){t.d(r,{Z:function(){return u}});var n=t(4522);function a(e){return a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function u(e){(0,n.Z)(1,arguments);var r=Object.prototype.toString.call(e);return e instanceof Date||"object"===a(e)&&"[object Date]"===r?new Date(e.getTime()):"number"===typeof e||"[object Number]"===r?new Date(e):("string"!==typeof e&&"[object String]"!==r||"undefined"===typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}},4259:function(e,r,t){function n(e,r,t,n,a,u,i){try{var s=e[u](i),o=s.value}catch(c){return void t(c)}s.done?r(o):Promise.resolve(o).then(n,a)}function a(e){return function(){var r=this,t=arguments;return new Promise((function(a,u){var i=e.apply(r,t);function s(e){n(i,a,u,s,o,"next",e)}function o(e){n(i,a,u,s,o,"throw",e)}s(void 0)}))}}t.d(r,{Qr:function(){return ee},Dq:function(){return Ee},cI:function(){return nr}});var u=t(3433),i=t(7762),s=t(4942),o=t(1413),c=t(9439),f=t(5987),l=t(4687),d=t(2791),v=["name"],m=["_f"],y=["_f"],h=function(e){return"checkbox"===e.type},g=function(e){return e instanceof Date},p=function(e){return null==e},b=function(e){return"object"===typeof e},x=function(e){return!p(e)&&!Array.isArray(e)&&b(e)&&!g(e)},_=function(e){return x(e)&&e.target?h(e.target)?e.target.checked:e.target.value:e},Z=function(e,r){return e.has(function(e){return e.substring(0,e.search(/\.\d+(\.|$)/))||e}(r))},k=function(e){return Array.isArray(e)?e.filter(Boolean):[]},A=function(e){return void 0===e},F=function(e,r,t){if(!r||!x(e))return t;var n=k(r.split(/[,[\].]+?/)).reduce((function(e,r){return p(e)?e:e[r]}),e);return A(n)||n===e?A(e[r])?t:e[r]:n},w="blur",V="focusout",S="change",D="onBlur",M="onChange",C="onSubmit",N="onTouched",T="all",j="max",E="min",O="maxLength",U="minLength",B="pattern",Y="required",L="validate",R=d.createContext(null),q=function(){return d.useContext(R)},H=function(e,r,t){var n=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],a={defaultValues:r._defaultValues},u=function(u){Object.defineProperty(a,u,{get:function(){var a=u;return r._proxyFormState[a]!==T&&(r._proxyFormState[a]=!n||T),t&&(t[a]=!0),e[a]}})};for(var i in e)u(i);return a},P=function(e){return x(e)&&!Object.keys(e).length},I=function(e,r,t){e.name;var n=(0,f.Z)(e,v);return P(n)||Object.keys(n).length>=Object.keys(r).length||Object.keys(n).find((function(e){return r[e]===(!t||T)}))},W=function(e){return Array.isArray(e)?e:[e]},$=function(e,r,t){return t&&r?e===r:!e||!r||e===r||W(e).some((function(e){return e&&(e.startsWith(r)||r.startsWith(e))}))};function G(e){var r=d.useRef(e);r.current=e,d.useEffect((function(){var t=!e.disabled&&r.current.subject.subscribe({next:r.current.callback});return function(){t&&t.unsubscribe()}}),[e.disabled])}var Q=function(e){return"string"===typeof e},z=function(e,r,t,n){return Q(e)?(n&&r.watch.add(e),F(t,e)):Array.isArray(e)?e.map((function(e){return n&&r.watch.add(e),F(t,e)})):(n&&(r.watchAll=!0),t)},J="undefined"!==typeof window&&"undefined"!==typeof window.HTMLElement&&"undefined"!==typeof document;function K(e){var r,t=Array.isArray(e);if(e instanceof Date)r=new Date(e);else if(e instanceof Set)r=new Set(e);else{if(J&&(e instanceof Blob||e instanceof FileList)||!t&&!x(e))return e;if(r=t?[]:{},Array.isArray(e)||function(e){var r=e.constructor&&e.constructor.prototype;return x(r)&&r.hasOwnProperty("isPrototypeOf")}(e))for(var n in e)r[n]=K(e[n]);else r=e}return r}function X(e){var r=q(),t=e.name,n=e.control,a=void 0===n?r.control:n,u=e.shouldUnregister,i=Z(a._names.array,t),s=function(e){var r=q(),t=e||{},n=t.control,a=void 0===n?r.control:n,u=t.name,i=t.defaultValue,s=t.disabled,o=t.exact,f=d.useRef(u);f.current=u,G({disabled:s,subject:a._subjects.watch,callback:function(e){if($(f.current,e.name,o)){var r=z(f.current,a._names,e.values||a._formValues);y(A(r)?i:K(r))}}});var l=d.useState(A(i)?a._getWatch(u):i),v=(0,c.Z)(l,2),m=v[0],y=v[1];return d.useEffect((function(){return a._removeUnmounted()})),m}({control:a,name:t,defaultValue:F(a._formValues,t,F(a._defaultValues,t,e.defaultValue)),exact:!0}),f=function(e){var r=q(),t=e||{},n=t.control,a=void 0===n?r.control:n,u=t.disabled,i=t.name,s=t.exact,f=d.useState(a._formState),l=(0,c.Z)(f,2),v=l[0],m=l[1],y=d.useRef(!0),h=d.useRef({isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1}),g=d.useRef(i);return g.current=i,G({disabled:u,callback:d.useCallback((function(e){return y.current&&$(g.current,e.name,s)&&I(e,h.current)&&m((0,o.Z)((0,o.Z)({},a._formState),e))}),[a,s]),subject:a._subjects.state}),d.useEffect((function(){y.current=!0;var e=a._proxyFormState.isDirty&&a._getDirty();return e!==a._formState.isDirty&&a._subjects.state.next({isDirty:e}),a._updateValid(),function(){y.current=!1}}),[a]),H(v,a,h.current,!1)}({control:a,name:t}),l=d.useRef(a.register(t,(0,o.Z)((0,o.Z)({},e.rules),{},{value:s})));return d.useEffect((function(){var e=function(e,r){var t=F(a._fields,e);t&&(t._f.mount=r)};return e(t,!0),function(){var r=a._options.shouldUnregister||u;(i?r&&!a._stateFlags.action:r)?a.unregister(t):e(t,!1)}}),[t,a,i,u]),{field:{name:t,value:s,onChange:d.useCallback((function(e){return l.current.onChange({target:{value:_(e),name:t},type:S})}),[t]),onBlur:d.useCallback((function(){return l.current.onBlur({target:{value:F(a._formValues,t),name:t},type:w})}),[t,a]),ref:function(e){var r=F(a._fields,t);r&&e&&(r._f.ref={focus:function(){return e.focus()},select:function(){return e.select()},setCustomValidity:function(r){return e.setCustomValidity(r)},reportValidity:function(){return e.reportValidity()}})}},formState:f,fieldState:Object.defineProperties({},{invalid:{enumerable:!0,get:function(){return!!F(f.errors,t)}},isDirty:{enumerable:!0,get:function(){return!!F(f.dirtyFields,t)}},isTouched:{enumerable:!0,get:function(){return!!F(f.touchedFields,t)}},error:{enumerable:!0,get:function(){return F(f.errors,t)}}})}}var ee=function(e){return e.render(X(e))},re=function(e,r,t,n,a){return r?(0,o.Z)((0,o.Z)({},t[e]),{},{types:(0,o.Z)((0,o.Z)({},t[e]&&t[e].types?t[e].types:{}),{},(0,s.Z)({},n,a||!0))}):{}},te=function(e){return/^\w*$/.test(e)},ne=function(e){return k(e.replace(/["|']|\]/g,"").split(/\.|\[/))};function ae(e,r,t){for(var n=-1,a=te(r)?[r]:ne(r),u=a.length,i=u-1;++n<u;){var s=a[n],o=t;if(n!==i){var c=e[s];o=x(c)||Array.isArray(c)?c:isNaN(+a[n+1])?{}:[]}e[s]=o,e=e[s]}return e}var ue=function e(r,t,n){var a,u=(0,i.Z)(n||Object.keys(r));try{for(u.s();!(a=u.n()).done;){var s=a.value,o=F(r,s);if(o){var c=o._f,l=(0,f.Z)(o,m);if(c&&t(c.name)){if(c.ref.focus){c.ref.focus();break}if(c.refs&&c.refs[0].focus){c.refs[0].focus();break}}else x(l)&&e(l,t)}}}catch(d){u.e(d)}finally{u.f()}},ie=function(){var e="undefined"===typeof performance?Date.now():1e3*performance.now();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(r){var t=(16*Math.random()+e)%16|0;return("x"==r?t:3&t|8).toString(16)}))},se=function(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return t.shouldFocus||A(t.shouldFocus)?t.focusName||"".concat(e,".").concat(A(t.focusIndex)?r:t.focusIndex,"."):""},oe=function(e,r,t){return!t&&(r.watchAll||r.watch.has(e)||(0,u.Z)(r.watch).some((function(r){return e.startsWith(r)&&/^\.\w+/.test(e.slice(r.length))})))},ce=function(e,r,t){var n=k(F(e,t));return ae(n,"root",r[t]),ae(e,t,n),e},fe=function(e){return"boolean"===typeof e},le=function(e){return"file"===e.type},de=function(e){return"function"===typeof e},ve=function(e){return Q(e)||d.isValidElement(e)},me=function(e){return"radio"===e.type},ye=function(e){return e instanceof RegExp},he={value:!1,isValid:!1},ge={value:!0,isValid:!0},pe=function(e){if(Array.isArray(e)){if(e.length>1){var r=e.filter((function(e){return e&&e.checked&&!e.disabled})).map((function(e){return e.value}));return{value:r,isValid:!!r.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!A(e[0].attributes.value)?A(e[0].value)||""===e[0].value?ge:{value:e[0].value,isValid:!0}:ge:he}return he},be={isValid:!1,value:null},xe=function(e){return Array.isArray(e)?e.reduce((function(e,r){return r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:e}),be):be};function _e(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"validate";if(ve(e)||Array.isArray(e)&&e.every(ve)||fe(e)&&!e)return{type:t,message:ve(e)?e:"",ref:r}}var Ze=function(e){return x(e)&&!ye(e)?e:{value:e,message:""}},ke=function(){var e=a(l.mark((function e(r,t,n,a,u){var i,s,c,f,d,v,m,y,g,b,_,Z,k,A,F,w,V,S,D,M,C,N,T,R,q,H,I,W,$,G,z,J,K,X,ee,te,ne,ae,ue,ie,se,oe,ce,he,ge,be,ke;return l.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=r._f,s=i.ref,c=i.refs,f=i.required,d=i.maxLength,v=i.minLength,m=i.min,y=i.max,g=i.pattern,b=i.validate,_=i.name,Z=i.valueAsNumber,k=i.mount,A=i.disabled,k&&!A){e.next=3;break}return e.abrupt("return",{});case 3:if(F=c?c[0]:s,w=function(e){a&&F.reportValidity&&(F.setCustomValidity(fe(e)?"":e||""),F.reportValidity())},V={},S=me(s),D=h(s),M=S||D,C=(Z||le(s))&&!s.value||""===t||Array.isArray(t)&&!t.length,N=re.bind(null,_,n,V),T=function(e,r,t){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:O,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:U,u=e?r:t;V[_]=(0,o.Z)({type:e?n:a,message:u,ref:s},N(e?n:a,u))},!(u?!Array.isArray(t)||!t.length:f&&(!M&&(C||p(t))||fe(t)&&!t||D&&!pe(c).isValid||S&&!xe(c).isValid))){e.next=19;break}if(R=ve(f)?{value:!!f,message:f}:Ze(f),q=R.value,H=R.message,!q){e.next=19;break}if(V[_]=(0,o.Z)({type:Y,message:H,ref:F},N(Y,H)),n){e.next=19;break}return w(H),e.abrupt("return",V);case 19:if(C||p(m)&&p(y)){e.next=28;break}if($=Ze(y),G=Ze(m),p(t)||isNaN(t)?(J=s.valueAsDate||new Date(t),K=function(e){return new Date((new Date).toDateString()+" "+e)},X="time"==s.type,ee="week"==s.type,Q($.value)&&t&&(I=X?K(t)>K($.value):ee?t>$.value:J>new Date($.value)),Q(G.value)&&t&&(W=X?K(t)<K(G.value):ee?t<G.value:J<new Date(G.value))):(z=s.valueAsNumber||(t?+t:t),p($.value)||(I=z>$.value),p(G.value)||(W=z<G.value)),!I&&!W){e.next=28;break}if(T(!!I,$.message,G.message,j,E),n){e.next=28;break}return w(V[_].message),e.abrupt("return",V);case 28:if(!d&&!v||C||!(Q(t)||u&&Array.isArray(t))){e.next=38;break}if(te=Ze(d),ne=Ze(v),ae=!p(te.value)&&t.length>te.value,ue=!p(ne.value)&&t.length<ne.value,!ae&&!ue){e.next=38;break}if(T(ae,te.message,ne.message),n){e.next=38;break}return w(V[_].message),e.abrupt("return",V);case 38:if(!g||C||!Q(t)){e.next=45;break}if(ie=Ze(g),se=ie.value,oe=ie.message,!ye(se)||t.match(se)){e.next=45;break}if(V[_]=(0,o.Z)({type:B,message:oe,ref:s},N(B,oe)),n){e.next=45;break}return w(oe),e.abrupt("return",V);case 45:if(!b){e.next=79;break}if(!de(b)){e.next=58;break}return e.next=49,b(t);case 49:if(ce=e.sent,!(he=_e(ce,F))){e.next=56;break}if(V[_]=(0,o.Z)((0,o.Z)({},he),N(L,he.message)),n){e.next=56;break}return w(he.message),e.abrupt("return",V);case 56:e.next=79;break;case 58:if(!x(b)){e.next=79;break}ge={},e.t0=l.keys(b);case 61:if((e.t1=e.t0()).done){e.next=75;break}if(be=e.t1.value,P(ge)||n){e.next=65;break}return e.abrupt("break",75);case 65:return e.t2=_e,e.next=68,b[be](t);case 68:e.t3=e.sent,e.t4=F,e.t5=be,(ke=(0,e.t2)(e.t3,e.t4,e.t5))&&(ge=(0,o.Z)((0,o.Z)({},ke),N(be,ke.message)),w(ke.message),n&&(V[_]=ge)),e.next=61;break;case 75:if(P(ge)){e.next=79;break}if(V[_]=(0,o.Z)({ref:F},ge),n){e.next=79;break}return e.abrupt("return",V);case 79:return w(!0),e.abrupt("return",V);case 81:case"end":return e.stop()}}),e)})));return function(r,t,n,a,u){return e.apply(this,arguments)}}();function Ae(e,r){return[].concat((0,u.Z)(e),(0,u.Z)(W(r)))}var Fe=function(e){return Array.isArray(e)?e.map((function(){})):void 0},we=function(e){return{isOnSubmit:!e||e===C,isOnBlur:e===D,isOnChange:e===M,isOnAll:e===T,isOnTouch:e===N}};function Ve(e,r,t){return[].concat((0,u.Z)(e.slice(0,r)),(0,u.Z)(W(t)),(0,u.Z)(e.slice(r)))}var Se=function(e,r,t){return Array.isArray(e)?(A(e[t])&&(e[t]=void 0),e.splice(t,0,e.splice(r,1)[0]),e):[]};function De(e,r){return[].concat((0,u.Z)(W(r)),(0,u.Z)(W(e)))}var Me=function(e,r){return A(r)?[]:function(e,r){var t,n=0,a=(0,u.Z)(e),s=(0,i.Z)(r);try{for(s.s();!(t=s.n()).done;){var o=t.value;a.splice(o-n,1),n++}}catch(c){s.e(c)}finally{s.f()}return k(a).length?a:[]}(e,W(r).sort((function(e,r){return e-r})))},Ce=function(e,r,t){e[r]=[e[t],e[t]=e[r]][0]};function Ne(e){for(var r in e)if(!A(e[r]))return!1;return!0}function Te(e,r){var t,n=te(r)?[r]:ne(r),a=1==n.length?e:function(e,r){for(var t=r.slice(0,-1).length,n=0;n<t;)e=A(e)?n++:e[r[n++]];return e}(e,n),u=n[n.length-1];a&&delete a[u];for(var i=0;i<n.slice(0,-1).length;i++){var s=-1,o=void 0,c=n.slice(0,-(i+1)),f=c.length-1;for(i>0&&(t=e);++s<c.length;){var l=c[s];o=o?o[l]:e[l],f===s&&(x(o)&&P(o)||Array.isArray(o)&&Ne(o))&&(t?delete t[l]:delete e[l]),t=o}}return e}var je=function(e,r,t){return e[r]=t,e};function Ee(e){var r=q(),t=e.control,n=void 0===t?r.control:t,a=e.name,i=e.keyName,f=void 0===i?"id":i,l=e.shouldUnregister,v=d.useState(n._getFieldArray(a)),m=(0,c.Z)(v,2),y=m[0],h=m[1],g=d.useRef(n._getFieldArray(a).map(ie)),p=d.useRef(y),b=d.useRef(a),x=d.useRef(!1);b.current=a,p.current=y,n._names.array.add(a),e.rules&&n.register(a,e.rules),G({callback:d.useCallback((function(e){var r=e.values,t=e.name;if(t===b.current||!t){var n=F(r,b.current);Array.isArray(n)&&(h(n),g.current=n.map(ie))}}),[]),subject:n._subjects.array});var _=d.useCallback((function(e){x.current=!0,n._updateFieldArray(a,e)}),[n,a]);return d.useEffect((function(){if(n._stateFlags.action=!1,oe(a,n._names)&&n._subjects.state.next({}),x.current&&(!we(n._options.mode).isOnSubmit||n._formState.isSubmitted))if(n._options.resolver)n._executeSchema([a]).then((function(e){var r=F(e.errors,a),t=F(n._formState.errors,a);(t?!r&&t.type:r&&r.type)&&(r?ae(n._formState.errors,a,r):Te(n._formState.errors,a),n._subjects.state.next({errors:n._formState.errors}))}));else{var e=F(n._fields,a);e&&e._f&&ke(e,F(n._formValues,a),n._options.criteriaMode===T,n._options.shouldUseNativeValidation,!0).then((function(e){return!P(e)&&n._subjects.state.next({errors:ce(n._formState.errors,e,a)})}))}n._subjects.watch.next({name:a,values:n._formValues}),n._names.focus&&ue(n._fields,(function(e){return!!e&&e.startsWith(n._names.focus||"")})),n._names.focus="",n._proxyFormState.isValid&&n._updateValid()}),[y,a,n]),d.useEffect((function(){return!F(n._formValues,a)&&n._updateFieldArray(a),function(){(n._options.shouldUnregister||l)&&n.unregister(a)}}),[a,n,f,l]),{swap:d.useCallback((function(e,r){var t=n._getFieldArray(a);Ce(t,e,r),Ce(g.current,e,r),_(t),h(t),n._updateFieldArray(a,t,Ce,{argA:e,argB:r},!1)}),[_,a,n]),move:d.useCallback((function(e,r){var t=n._getFieldArray(a);Se(t,e,r),Se(g.current,e,r),_(t),h(t),n._updateFieldArray(a,t,Se,{argA:e,argB:r},!1)}),[_,a,n]),prepend:d.useCallback((function(e,r){var t=W(K(e)),u=De(n._getFieldArray(a),t);n._names.focus=se(a,0,r),g.current=De(g.current,t.map(ie)),_(u),h(u),n._updateFieldArray(a,u,De,{argA:Fe(e)})}),[_,a,n]),append:d.useCallback((function(e,r){var t=W(K(e)),u=Ae(n._getFieldArray(a),t);n._names.focus=se(a,u.length-1,r),g.current=Ae(g.current,t.map(ie)),_(u),h(u),n._updateFieldArray(a,u,Ae,{argA:Fe(e)})}),[_,a,n]),remove:d.useCallback((function(e){var r=Me(n._getFieldArray(a),e);g.current=Me(g.current,e),_(r),h(r),n._updateFieldArray(a,r,Me,{argA:e})}),[_,a,n]),insert:d.useCallback((function(e,r,t){var u=W(K(r)),i=Ve(n._getFieldArray(a),e,u);n._names.focus=se(a,e,t),g.current=Ve(g.current,e,u.map(ie)),_(i),h(i),n._updateFieldArray(a,i,Ve,{argA:e,argB:Fe(r)})}),[_,a,n]),update:d.useCallback((function(e,r){var t=K(r),i=je(n._getFieldArray(a),e,t);g.current=(0,u.Z)(i).map((function(r,t){return r&&t!==e?g.current[t]:ie()})),_(i),h((0,u.Z)(i)),n._updateFieldArray(a,i,je,{argA:e,argB:t},!0,!1)}),[_,a,n]),replace:d.useCallback((function(e){var r=W(K(e));g.current=r.map(ie),_((0,u.Z)(r)),h((0,u.Z)(r)),n._updateFieldArray(a,(0,u.Z)(r),(function(e){return e}),{},!0,!1)}),[_,a,n]),fields:d.useMemo((function(){return y.map((function(e,r){return(0,o.Z)((0,o.Z)({},e),{},(0,s.Z)({},f,g.current[r]||ie()))}))}),[y,f])}}function Oe(){var e=[];return{get observers(){return e},next:function(r){var t,n=(0,i.Z)(e);try{for(n.s();!(t=n.n()).done;){t.value.next(r)}}catch(a){n.e(a)}finally{n.f()}},subscribe:function(r){return e.push(r),{unsubscribe:function(){e=e.filter((function(e){return e!==r}))}}},unsubscribe:function(){e=[]}}}var Ue=function(e){return p(e)||!b(e)};function Be(e,r){if(Ue(e)||Ue(r))return e===r;if(g(e)&&g(r))return e.getTime()===r.getTime();var t=Object.keys(e),n=Object.keys(r);if(t.length!==n.length)return!1;for(var a=0,u=t;a<u.length;a++){var i=u[a],s=e[i];if(!n.includes(i))return!1;if("ref"!==i){var o=r[i];if(g(s)&&g(o)||x(s)&&x(o)||Array.isArray(s)&&Array.isArray(o)?!Be(s,o):s!==o)return!1}}return!0}var Ye=function(e){var r=e?e.ownerDocument:0;return e instanceof(r&&r.defaultView?r.defaultView.HTMLElement:HTMLElement)},Le=function(e){return"select-multiple"===e.type},Re=function(e){return me(e)||h(e)},qe=function(e){return Ye(e)&&e.isConnected},He=function(e){for(var r in e)if(de(e[r]))return!0;return!1};function Pe(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=Array.isArray(e);if(x(e)||t)for(var n in e)Array.isArray(e[n])||x(e[n])&&!He(e[n])?(r[n]=Array.isArray(e[n])?[]:{},Pe(e[n],r[n])):p(e[n])||(r[n]=!0);return r}function Ie(e,r,t){var n=Array.isArray(e);if(x(e)||n)for(var a in e)Array.isArray(e[a])||x(e[a])&&!He(e[a])?A(r)||Ue(t[a])?t[a]=Array.isArray(e[a])?Pe(e[a],[]):(0,o.Z)({},Pe(e[a])):Ie(e[a],p(r)?{}:r[a],t[a]):Be(e[a],r[a])?delete t[a]:t[a]=!0;return t}var We=function(e,r){return Ie(e,r,Pe(r))},$e=function(e,r){var t=r.valueAsNumber,n=r.valueAsDate,a=r.setValueAs;return A(e)?e:t?""===e?NaN:e?+e:e:n&&Q(e)?new Date(e):a?a(e):e};function Ge(e){var r=e.ref;if(!(e.refs?e.refs.every((function(e){return e.disabled})):r.disabled))return le(r)?r.files:me(r)?xe(e.refs).value:Le(r)?(0,u.Z)(r.selectedOptions).map((function(e){return e.value})):h(r)?pe(e.refs).value:$e(A(r.value)?e.ref.value:r.value,e)}var Qe=function(e,r,t,n){var a,s={},o=(0,i.Z)(e);try{for(o.s();!(a=o.n()).done;){var c=a.value,f=F(r,c);f&&ae(s,c,f._f)}}catch(l){o.e(l)}finally{o.f()}return{criteriaMode:t,names:(0,u.Z)(e),fields:s,shouldUseNativeValidation:n}},ze=function(e){return A(e)?e:ye(e)?e.source:x(e)?ye(e.value)?e.value.source:e.value:e},Je=function(e){return e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate)};function Ke(e,r,t){var n=F(e,t);if(n||te(t))return{error:n,name:t};for(var a=t.split(".");a.length;){var u=a.join("."),i=F(r,u),s=F(e,u);if(i&&!Array.isArray(i)&&t!==u)return{name:t};if(s&&s.type)return{name:u,error:s};a.pop()}return{name:t}}var Xe=function(e,r,t,n,a){return!a.isOnAll&&(!t&&a.isOnTouch?!(r||e):(t?n.isOnBlur:a.isOnBlur)?!e:!(t?n.isOnChange:a.isOnChange)||e)},er=function(e,r){return!k(F(e,r)).length&&Te(e,r)},rr={mode:C,reValidateMode:M,shouldFocusError:!0};function tr(){var e,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,o.Z)((0,o.Z)({},rr),r),n={submitCount:0,isDirty:!1,isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},c={},d=K(t.defaultValues)||{},v=t.shouldUnregister?{}:K(d),m={action:!1,mount:!1,watch:!1},b={mount:new Set,unMount:new Set,array:new Set,watch:new Set},x=0,S={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},D={watch:Oe(),array:Oe(),state:Oe()},M=we(t.mode),C=we(t.reValidateMode),N=t.criteriaMode===T,j=function(e){return function(r){clearTimeout(x),x=window.setTimeout(e,r)}},E=function(){var e=a(l.mark((function e(){var r;return l.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!S.isValid){e.next=14;break}if(!t.resolver){e.next=9;break}return e.t1=P,e.next=5,q();case 5:e.t2=e.sent.errors,e.t0=(0,e.t1)(e.t2),e.next=12;break;case 9:return e.next=11,I(c,!0);case 11:e.t0=e.sent;case 12:(r=e.t0)!==n.isValid&&(n.isValid=r,D.state.next({isValid:r}));case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),O=function(e){return S.isValidating&&e!==n.isValidating&&D.state.next({isValidating:e})},U=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0,u=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],i=!(arguments.length>5&&void 0!==arguments[5])||arguments[5];if(a&&t){if(m.action=!0,i&&Array.isArray(F(c,e))){var s=t(F(c,e),a.argA,a.argB);u&&ae(c,e,s)}if(i&&Array.isArray(F(n.errors,e))){var o=t(F(n.errors,e),a.argA,a.argB);u&&ae(n.errors,e,o),er(n.errors,e)}if(S.touchedFields&&i&&Array.isArray(F(n.touchedFields,e))){var f=t(F(n.touchedFields,e),a.argA,a.argB);u&&ae(n.touchedFields,e,f)}S.dirtyFields&&(n.dirtyFields=We(d,v)),D.state.next({name:e,isDirty:G(e,r),dirtyFields:n.dirtyFields,errors:n.errors,isValid:n.isValid})}else ae(v,e,r)},B=function(e,r){ae(n.errors,e,r),D.state.next({errors:n.errors})},Y=function(e,r,t,n){var a=F(c,e);if(a){var u=F(v,e,A(t)?F(d,e):t);A(u)||n&&n.defaultChecked||r?ae(v,e,r?u:Ge(a._f)):re(e,u),m.mount&&E()}},L=function(e,r,t,a,u){var i=!1,s=!1,o={name:e};if((!t||a)&&(S.isDirty&&(s=n.isDirty,n.isDirty=o.isDirty=G(),i=s!==o.isDirty),S.dirtyFields)){s=F(n.dirtyFields,e);var c=Be(F(d,e),r);c?Te(n.dirtyFields,e):ae(n.dirtyFields,e,!0),o.dirtyFields=n.dirtyFields,i=i||s!==!c}if(t){var f=F(n.touchedFields,e);f||(ae(n.touchedFields,e,t),o.touchedFields=n.touchedFields,i=i||S.touchedFields&&f!==t)}return i&&u&&D.state.next(o),i?o:{}},R=function(t,a,u,i){var s=F(n.errors,t),c=S.isValid&&fe(a)&&n.isValid!==a;if(r.delayError&&u?(e=j((function(){return B(t,u)})))(r.delayError):(clearTimeout(x),e=null,u?ae(n.errors,t,u):Te(n.errors,t)),(u?!Be(s,u):s)||!P(i)||c){var f=(0,o.Z)((0,o.Z)((0,o.Z)({},i),c&&fe(a)?{isValid:a}:{}),{},{errors:n.errors,name:t});n=(0,o.Z)((0,o.Z)({},n),f),D.state.next(f)}O(!1)},q=function(){var e=a(l.mark((function e(r){return l.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.resolver(v,t.context,Qe(r||b.mount,c,t.criteriaMode,t.shouldUseNativeValidation));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),H=function(){var e=a(l.mark((function e(r){var t,a,u,s,o,c;return l.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q();case 2:if(t=e.sent,a=t.errors,r){u=(0,i.Z)(r);try{for(u.s();!(s=u.n()).done;)o=s.value,(c=F(a,o))?ae(n.errors,o,c):Te(n.errors,o)}catch(f){u.e(f)}finally{u.f()}}else n.errors=a;return e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),I=function(){var e=a(l.mark((function e(r,a){var u,i,s,o,c,d,m,h=arguments;return l.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u=h.length>2&&void 0!==h[2]?h[2]:{valid:!0},e.t0=l.keys(r);case 2:if((e.t1=e.t0()).done){e.next=23;break}if(i=e.t1.value,!(s=r[i])){e.next=21;break}if(o=s._f,c=(0,f.Z)(s,y),!o){e.next=17;break}return d=b.array.has(o.name),e.next=11,ke(s,F(v,o.name),N,t.shouldUseNativeValidation,d);case 11:if(!(m=e.sent)[o.name]){e.next=16;break}if(u.valid=!1,!a){e.next=16;break}return e.abrupt("break",23);case 16:!a&&(F(m,o.name)?d?ce(n.errors,m,o.name):ae(n.errors,o.name,m[o.name]):Te(n.errors,o.name));case 17:if(e.t2=c,!e.t2){e.next=21;break}return e.next=21,I(c,a,u);case 21:e.next=2;break;case 23:return e.abrupt("return",u.valid);case 24:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}(),$=function(){var e,r=(0,i.Z)(b.unMount);try{for(r.s();!(e=r.n()).done;){var t=e.value,n=F(c,t);n&&(n._f.refs?n._f.refs.every((function(e){return!qe(e)})):!qe(n._f.ref))&&pe(t)}}catch(a){r.e(a)}finally{r.f()}b.unMount=new Set},G=function(e,r){return e&&r&&ae(v,e,r),!Be(ve(),d)},X=function(e,r,t){return z(e,b,(0,o.Z)({},m.mount?v:A(r)?d:Q(e)?(0,s.Z)({},e,r):r),t)},ee=function(e){return k(F(m.mount?v:d,e,r.shouldUnregister?F(d,e,[]):[]))},re=function(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=F(c,e),a=r;if(n){var i=n._f;i&&(!i.disabled&&ae(v,e,$e(r,i)),a=J&&Ye(i.ref)&&p(r)?"":r,Le(i.ref)?(0,u.Z)(i.ref.options).forEach((function(e){return e.selected=a.includes(e.value)})):i.refs?h(i.ref)?i.refs.length>1?i.refs.forEach((function(e){return(!e.defaultChecked||!e.disabled)&&(e.checked=Array.isArray(a)?!!a.find((function(r){return r===e.value})):a===e.value)})):i.refs[0]&&(i.refs[0].checked=!!a):i.refs.forEach((function(e){return e.checked=e.value===a})):le(i.ref)?i.ref.value="":(i.ref.value=a,i.ref.type||D.watch.next({name:e})))}(t.shouldDirty||t.shouldTouch)&&L(e,a,t.shouldTouch,t.shouldDirty,!0),t.shouldValidate&&se(e)},te=function e(r,t,n){for(var a in t){var u=t[a],i="".concat(r,".").concat(a),s=F(c,i);!b.array.has(r)&&Ue(u)&&(!s||s._f)||g(u)?re(i,u,n):e(i,u,n)}},ne=function(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=F(c,e),u=b.array.has(e),i=K(r);ae(v,e,i),u?(D.array.next({name:e,values:v}),(S.isDirty||S.dirtyFields)&&t.shouldDirty&&(n.dirtyFields=We(d,v),D.state.next({name:e,dirtyFields:n.dirtyFields,isDirty:G(e,i)}))):!a||a._f||p(i)?re(e,i,t):te(e,i,t),oe(e,b)&&D.state.next({}),D.watch.next({name:e})},ie=function(){var r=a(l.mark((function r(a){var u,i,s,f,d,m,y,h,g,p,x,Z,k,A,T,j;return l.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(u=a.target,i=u.name,s=F(c,i),f=function(){return u.type?Ge(s._f):_(a)},!s){r.next=44;break}if(y=f(),h=a.type===w||a.type===V,g=!Je(s._f)&&!t.resolver&&!F(n.errors,i)&&!s._f.deps||Xe(h,F(n.touchedFields,i),n.isSubmitted,C,M),p=oe(i,b,h),ae(v,i,y),h?(s._f.onBlur&&s._f.onBlur(a),e&&e(0)):s._f.onChange&&s._f.onChange(a),x=L(i,y,h,!1),Z=!P(x)||p,!h&&D.watch.next({name:i,type:a.type}),!g){r.next=17;break}return S.isValid&&E(),r.abrupt("return",Z&&D.state.next((0,o.Z)({name:i},p?{}:x)));case 17:if(!h&&p&&D.state.next({}),O(!0),!t.resolver){r.next=31;break}return r.next=22,q([i]);case 22:k=r.sent,A=k.errors,T=Ke(n.errors,c,i),j=Ke(A,c,T.name||i),d=j.error,i=j.name,m=P(A),r.next=43;break;case 31:return r.next=33,ke(s,F(v,i),N,t.shouldUseNativeValidation);case 33:if(r.t0=i,!(d=r.sent[r.t0])){r.next=39;break}m=!1,r.next=43;break;case 39:if(!S.isValid){r.next=43;break}return r.next=42,I(c,!0);case 42:m=r.sent;case 43:Ue(y)&&f()!==y?O(!1):(s._f.deps&&se(s._f.deps),R(i,m,d,x));case 44:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),se=function(){var e=a(l.mark((function e(r){var u,i,f,d,v,m=arguments;return l.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u=m.length>1&&void 0!==m[1]?m[1]:{},d=W(r),O(!0),!t.resolver){e.next=11;break}return e.next=6,H(A(r)?r:d);case 6:v=e.sent,i=P(v),f=r?!d.some((function(e){return F(v,e)})):i,e.next=21;break;case 11:if(!r){e.next=18;break}return e.next=14,Promise.all(d.map(function(){var e=a(l.mark((function e(r){var t;return l.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=F(c,r),e.next=3,I(t&&t._f?(0,s.Z)({},r,t):t);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()));case 14:((f=e.sent.every(Boolean))||n.isValid)&&E(),e.next=21;break;case 18:return e.next=20,I(c);case 20:f=i=e.sent;case 21:return D.state.next((0,o.Z)((0,o.Z)((0,o.Z)({},!Q(r)||S.isValid&&i!==n.isValid?{}:{name:r}),t.resolver||!r?{isValid:i}:{}),{},{errors:n.errors,isValidating:!1})),u.shouldFocus&&!f&&ue(c,(function(e){return e&&F(n.errors,e)}),r?d:b.mount),e.abrupt("return",f);case 24:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),ve=function(e){var r=(0,o.Z)((0,o.Z)({},d),m.mount?v:{});return A(e)?r:Q(e)?F(r,e):e.map((function(e){return F(r,e)}))},me=function(e,r){return{invalid:!!F((r||n).errors,e),isDirty:!!F((r||n).dirtyFields,e),isTouched:!!F((r||n).touchedFields,e),error:F((r||n).errors,e)}},ye=function(e){e?W(e).forEach((function(e){return Te(n.errors,e)})):n.errors={},D.state.next({errors:n.errors})},he=function(e,r,t){var a=(F(c,e,{_f:{}})._f||{}).ref;ae(n.errors,e,(0,o.Z)((0,o.Z)({},r),{},{ref:a})),D.state.next({name:e,errors:n.errors,isValid:!1}),t&&t.shouldFocus&&a&&a.focus&&a.focus()},ge=function(e,r){return de(e)?D.watch.subscribe({next:function(t){return e(X(void 0,r),t)}}):X(e,r,!0)},pe=function(e){var r,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},u=(0,i.Z)(e?W(e):b.mount);try{for(u.s();!(r=u.n()).done;){var s=r.value;b.mount.delete(s),b.array.delete(s),F(c,s)&&(a.keepValue||(Te(c,s),Te(v,s)),!a.keepError&&Te(n.errors,s),!a.keepDirty&&Te(n.dirtyFields,s),!a.keepTouched&&Te(n.touchedFields,s),!t.shouldUnregister&&!a.keepDefaultValue&&Te(d,s))}}catch(f){u.e(f)}finally{u.f()}D.watch.next({}),D.state.next((0,o.Z)((0,o.Z)({},n),a.keepDirty?{isDirty:G()}:{})),!a.keepIsValid&&E()},be=function e(r){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=F(c,r),i=fe(n.disabled);return ae(c,r,(0,o.Z)((0,o.Z)({},a||{}),{},{_f:(0,o.Z)((0,o.Z)({},a&&a._f?a._f:{ref:{name:r}}),{},{name:r,mount:!0},n)})),b.mount.add(r),a?i&&ae(v,r,n.disabled?void 0:F(v,r,Ge(a._f))):Y(r,!0,n.value),(0,o.Z)((0,o.Z)((0,o.Z)({},i?{disabled:n.disabled}:{}),t.shouldUseNativeValidation?{required:!!n.required,min:ze(n.min),max:ze(n.max),minLength:ze(n.minLength),maxLength:ze(n.maxLength),pattern:ze(n.pattern)}:{}),{},{name:r,onChange:ie,onBlur:ie,ref:function(e){function r(r){return e.apply(this,arguments)}return r.toString=function(){return e.toString()},r}((function(i){if(i){e(r,n),a=F(c,r);var s=A(i.value)&&i.querySelectorAll&&i.querySelectorAll("input,select,textarea")[0]||i,f=Re(s),l=a._f.refs||[];if(f?l.find((function(e){return e===s})):s===a._f.ref)return;ae(c,r,{_f:(0,o.Z)((0,o.Z)({},a._f),f?{refs:[].concat((0,u.Z)(l.filter(qe)),[s],(0,u.Z)(Array.isArray(F(d,r))?[{}]:[])),ref:{type:s.type,name:r}}:{ref:s})}),Y(r,!1,void 0,s)}else(a=F(c,r,{}))._f&&(a._f.mount=!1),(t.shouldUnregister||n.shouldUnregister)&&(!Z(b.array,r)||!m.action)&&b.unMount.add(r)}))})},xe=function(){return t.shouldFocusError&&ue(c,(function(e){return e&&F(n.errors,e)}),b.mount)},_e=function(e,r){return function(){var u=a(l.mark((function a(u){var i,s,f,d,m;return l.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(u&&(u.preventDefault&&u.preventDefault(),u.persist&&u.persist()),i=!0,s=K(v),D.state.next({isSubmitting:!0}),a.prev=4,!t.resolver){a.next=15;break}return a.next=8,q();case 8:f=a.sent,d=f.errors,m=f.values,n.errors=d,s=m,a.next=17;break;case 15:return a.next=17,I(c);case 17:if(!P(n.errors)){a.next=23;break}return D.state.next({errors:{},isSubmitting:!0}),a.next=21,e(s,u);case 21:a.next=27;break;case 23:if(!r){a.next=26;break}return a.next=26,r((0,o.Z)({},n.errors),u);case 26:xe();case 27:a.next=33;break;case 29:throw a.prev=29,a.t0=a.catch(4),i=!1,a.t0;case 33:return a.prev=33,n.isSubmitted=!0,D.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:P(n.errors)&&i,submitCount:n.submitCount+1,errors:n.errors}),a.finish(33);case 37:case"end":return a.stop()}}),a,null,[[4,29,33,37]])})));return function(e){return u.apply(this,arguments)}}()},Ze=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};F(c,e)&&(A(r.defaultValue)?ne(e,F(d,e)):(ne(e,r.defaultValue),ae(d,e,r.defaultValue)),r.keepTouched||Te(n.touchedFields,e),r.keepDirty||(Te(n.dirtyFields,e),n.isDirty=r.defaultValue?G(e,F(d,e)):G()),r.keepError||(Te(n.errors,e),S.isValid&&E()),D.state.next((0,o.Z)({},n)))},Ae=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=e||d,u=K(a),s=e&&!P(e)?u:d;if(t.keepDefaultValues||(d=a),!t.keepValues){if(t.keepDirtyValues){var o,f=(0,i.Z)(b.mount);try{for(f.s();!(o=f.n()).done;){var l=o.value;F(n.dirtyFields,l)?ae(s,l,F(v,l)):ne(l,F(s,l))}}catch(Z){f.e(Z)}finally{f.f()}}else{if(J&&A(e)){var y,h=(0,i.Z)(b.mount);try{for(h.s();!(y=h.n()).done;){var g=y.value,p=F(c,g);if(p&&p._f){var x=Array.isArray(p._f.refs)?p._f.refs[0]:p._f.ref;if(Ye(x)){var _=x.closest("form");if(_){_.reset();break}}}}}catch(Z){h.e(Z)}finally{h.f()}}c={}}v=r.shouldUnregister?t.keepDefaultValues?K(d):{}:u,D.array.next({values:s}),D.watch.next({values:s})}b={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},m.mount=!S.isValid||!!t.keepIsValid,m.watch=!!r.shouldUnregister,D.state.next({submitCount:t.keepSubmitCount?n.submitCount:0,isDirty:t.keepDirty||t.keepDirtyValues?n.isDirty:!(!t.keepDefaultValues||Be(e,d)),isSubmitted:!!t.keepIsSubmitted&&n.isSubmitted,dirtyFields:t.keepDirty||t.keepDirtyValues?n.dirtyFields:t.keepDefaultValues&&e?We(d,e):{},touchedFields:t.keepTouched?n.touchedFields:{},errors:t.keepErrors?n.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},Fe=function(e,r){return Ae(de(e)?e(v):e,r)},Ve=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=F(c,e),n=t&&t._f;if(n){var a=n.refs?n.refs[0]:n.ref;a.focus&&(a.focus(),r.shouldSelect&&a.select())}};return{control:{register:be,unregister:pe,getFieldState:me,_executeSchema:q,_focusError:xe,_getWatch:X,_getDirty:G,_updateValid:E,_removeUnmounted:$,_updateFieldArray:U,_getFieldArray:ee,_subjects:D,_proxyFormState:S,get _fields(){return c},get _formValues(){return v},get _stateFlags(){return m},set _stateFlags(e){m=e},get _defaultValues(){return d},get _names(){return b},set _names(e){b=e},get _formState(){return n},set _formState(e){n=e},get _options(){return t},set _options(e){t=(0,o.Z)((0,o.Z)({},t),e)}},trigger:se,register:be,handleSubmit:_e,watch:ge,setValue:ne,getValues:ve,reset:Fe,resetField:Ze,clearErrors:ye,unregister:pe,setError:he,setFocus:Ve,getFieldState:me}}function nr(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=d.useRef(),t=d.useState({isDirty:!1,isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:e.defaultValues}),n=(0,c.Z)(t,2),a=n[0],u=n[1];r.current||(r.current=(0,o.Z)((0,o.Z)({},tr(e)),{},{formState:a}));var i=r.current.control;return i._options=e,G({subject:i._subjects.state,callback:d.useCallback((function(e){I(e,i._proxyFormState,!0)&&(i._formState=(0,o.Z)((0,o.Z)({},i._formState),e),u((0,o.Z)({},i._formState)))}),[i])}),d.useEffect((function(){i._stateFlags.mount||(i._proxyFormState.isValid&&i._updateValid(),i._stateFlags.mount=!0),i._stateFlags.watch&&(i._stateFlags.watch=!1,i._subjects.state.next({})),i._removeUnmounted()})),d.useEffect((function(){a.submitCount&&i._focusError()}),[i,a.submitCount]),r.current.formState=H(a,i),r.current}}}]);
//# sourceMappingURL=59.e646172a.chunk.js.map