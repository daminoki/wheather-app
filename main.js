/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){e=function(){return r};var r={},n=Object.prototype,o=n.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,a=Object.create(o.prototype),c=new O(n||[]);return i(a,"_invoke",{value:E(t,r,c)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}r.wrap=h;var p={};function d(){}function y(){}function m(){}var v={};l(v,c,(function(){return this}));var _=Object.getPrototypeOf,w=_&&_(_(j([])));w&&w!==n&&o.call(w,c)&&(v=w);var g=m.prototype=d.prototype=Object.create(v);function b(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function x(e,r){function n(i,a,c,u){var s=f(e[i],e,a);if("throw"!==s.type){var l=s.arg,h=l.value;return h&&"object"==t(h)&&o.call(h,"__await")?r.resolve(h.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):r.resolve(h).then((function(t){l.value=t,c(l)}),(function(t){return n("throw",t,c,u)}))}u(s.arg)}var a;i(this,"_invoke",{value:function(t,e){function o(){return new r((function(r,o){n(t,e,r,o)}))}return a=a?a.then(o,o):o()}})}function E(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=L(a,r);if(c){if(c===p)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=f(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===p)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function L(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),p;var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,p;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function j(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:q}}function q(){return{value:void 0,done:!0}}return y.prototype=m,i(g,"constructor",{value:m,configurable:!0}),i(m,"constructor",{value:y,configurable:!0}),y.displayName=l(m,s,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,l(t,s,"GeneratorFunction")),t.prototype=Object.create(g),t},r.awrap=function(t){return{__await:t}},b(x.prototype),l(x.prototype,u,(function(){return this})),r.AsyncIterator=x,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new x(h(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(g),l(g,s,"Generator"),l(g,c,(function(){return this})),l(g,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=j,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),u=o.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},r}function r(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}const n=function(){var t,n=(t=e().mark((function t(r){var n,o;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(r);case 3:return n=t.sent,t.next=6,n.json();case 6:return o=t.sent,t.abrupt("return",o||null);case 10:return t.prev=10,t.t0=t.catch(0),alert(t.t0),t.abrupt("return",null);case 14:case"end":return t.stop()}}),t,null,[[0,10]])})),function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function c(t){r(a,o,i,c,u,"next",t)}function u(t){r(a,o,i,c,u,"throw",t)}c(void 0)}))});return function(t){return n.apply(this,arguments)}}();function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function i(){i=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function h(t,e,r,o){var i=e&&e.prototype instanceof d?e:d,a=Object.create(i.prototype),c=new O(o||[]);return n(a,"_invoke",{value:E(t,r,c)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=h;var p={};function d(){}function y(){}function m(){}var v={};l(v,c,(function(){return this}));var _=Object.getPrototypeOf,w=_&&_(_(j([])));w&&w!==e&&r.call(w,c)&&(v=w);var g=m.prototype=d.prototype=Object.create(v);function b(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function i(n,a,c,u){var s=f(t[n],t,a);if("throw"!==s.type){var l=s.arg,h=l.value;return h&&"object"==o(h)&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){i("next",t,c,u)}),(function(t){i("throw",t,c,u)})):e.resolve(h).then((function(t){l.value=t,c(l)}),(function(t){return i("throw",t,c,u)}))}u(s.arg)}var a;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){i(t,r,e,n)}))}return a=a?a.then(n,n):n()}})}function E(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=L(a,r);if(c){if(c===p)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=f(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===p)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function L(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),p;var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,p;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function j(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:q}}function q(){return{value:void 0,done:!0}}return y.prototype=m,n(g,"constructor",{value:m,configurable:!0}),n(m,"constructor",{value:y,configurable:!0}),y.displayName=l(m,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,l(t,s,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},b(x.prototype),l(x.prototype,u,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new x(h(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(g),l(g,s,"Generator"),l(g,c,(function(){return this})),l(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=j,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},t}function a(t){return function(t){if(Array.isArray(t))return c(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function u(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function s(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){u(i,n,o,a,c,"next",t)}function c(t){u(i,n,o,a,c,"throw",t)}a(void 0)}))}}function l(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==o(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===o(i)?i:String(i)),n)}var i}var h=function(){function t(e){var r,o,i=e.searchWrapper,a=e.searchInput,c=e.dropdownTemplate,u=e.dropdown,s=e.dropdownItem,l=e.dropdownItemClass,h=e.inputOpenedClass,f=e.buttonElement,p=e.previousRequest;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._wrapper=document.querySelector(i),this._inputEl=this._wrapper.querySelector(a),this._dropdownItemClass=l,this._inputOpenedClass=h,this._dropdownTemplate=this._wrapper.querySelector(c),this._dropdownEl=this._dropdownTemplate.content.querySelector(u).cloneNode(!0),this._dropdownItemEl=this._dropdownEl.querySelector(s),this._results=[],this._debouncedHandle=(r=this._handleInput.bind(this),o=500,function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var i=this.lastCall;this.lastCall=Date.now(),i&&this.lastCall-i<=o&&clearTimeout(this.lastCallTimer),this.lastCallTimer=setTimeout((function(){return r.apply(void 0,e)}),o)}),this._api=n,this._buttonElement=document.querySelector(f),this._previousRequest=document.querySelector(p),this._history=[],this._apiKey="0397d7a368004ee080c2ccf5773af927"}var e,r,o,c;return e=t,r=[{key:"setEventListeners",value:function(){var t=this;this._inputEl.addEventListener("input",this._debouncedHandle),this._handleClick(),window.addEventListener("click",(function(e){e.target.contains(t._dropdownItemEl)||t._handleClose()})),this._previousRequest.addEventListener("click",function(){var e=s(i().mark((function e(r){var n,o,c,u,s,l,h;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t._previousRequest.querySelectorAll(".previous-request__wrapper"),o=a(n).map((function(t){return t.querySelector(".previous-request__city-name")})),r.target.classList.contains("previous-request__city-name")?(c=o.indexOf(r.target),u=t._history[c],s=new CustomEvent("itemSelectedEvent",{detail:{selectedItem:u}}),window.dispatchEvent(s)):r.target.classList.contains("previous-request__close-icon")&&(l=a(n).map((function(t){return t.querySelector(".previous-request__close-icon")})),h=l.indexOf(r.target),n[h].remove()),t._hidePreviousRequest();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},{key:"_handleInput",value:(c=s(i().mark((function t(e){var r,o,a,c;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.target,!((o=r.value).length<4)){t.next=4;break}return t.abrupt("return");case 4:return t.next=6,n("https://api.opencagedata.com/geocode/v1/json?q=".concat(o,"&key=").concat(this._apiKey,"&language=en"));case 6:a=t.sent,c=a.results,this._results=c,this._toggleInputView(),this._renderResults();case 11:case"end":return t.stop()}}),t,this)}))),function(t){return c.apply(this,arguments)})},{key:"_toggleInputView",value:function(){this._results.length?this._inputEl.classList.add(this._inputOpenedClass):this._inputEl.classList.remove(this._inputOpenedClass)}},{key:"_renderResults",value:function(){var t=this;this._wrapper.append(this._dropdownEl),this._dropdownEl.innerHTML="",this._results.forEach((function(e){t._dropdownEl.insertAdjacentHTML("beforeend","<button class=".concat(t._dropdownItemClass,">").concat(e.formatted,"</button>"))}))}},{key:"_handleClick",value:(o=s(i().mark((function t(){var e=this;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this._dropdownEl.addEventListener("click",function(){var t=s(i().mark((function t(r){var n,o,c;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=a(e._dropdownEl.children).indexOf(r.target),o=e._results[n],c=new CustomEvent("itemSelectedEvent",{detail:{selectedItem:o}}),window.dispatchEvent(c),e._handleClose(),e._handleHistory(o);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 1:case"end":return t.stop()}}),t,this)}))),function(){return o.apply(this,arguments)})},{key:"_handleHistory",value:function(t){!this._history.includes(t)&&this._history.length<=3&&(this._history.push(t),this._previousRequest.insertAdjacentHTML("beforeend",'\n      <div class="previous-request__wrapper">\n        <button type="button" class="previous-request__city-name">'.concat(t.formatted.split(",")[0],'</button>\n        <button type="button" class="previous-request__close-icon"></button>\n      </div>\n      ')))}},{key:"_handleClose",value:function(){this._dropdownEl.remove(),this._inputEl.classList.remove(this._inputOpenedClass),this._inputEl.value=""}},{key:"_hidePreviousRequest",value:function(){var t=document.querySelector(".wrapper"),e=document.querySelector(".previous-request__wrapper");this._previousRequest.contains(e)||t.classList.remove("wrapper_opened")}}],r&&l(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function p(t){return function(t){if(Array.isArray(t))return y(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||d(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(t,e){if(t){if("string"==typeof t)return y(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?y(t,e):void 0}}function y(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function m(){m=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function s(t,e,r,o){var i=e&&e.prototype instanceof p?e:p,a=Object.create(i.prototype),c=new O(o||[]);return n(a,"_invoke",{value:E(t,r,c)}),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var h={};function p(){}function d(){}function y(){}var v={};u(v,i,(function(){return this}));var _=Object.getPrototypeOf,w=_&&_(_(j([])));w&&w!==e&&r.call(w,i)&&(v=w);var g=y.prototype=p.prototype=Object.create(v);function b(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function o(n,i,a,c){var u=l(t[n],t,i);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"==f(h)&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):e.resolve(h).then((function(t){s.value=t,a(s)}),(function(t){return o("throw",t,a,c)}))}c(u.arg)}var i;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function E(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=L(a,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function L(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var o=l(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,h;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function j(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:q}}function q(){return{value:void 0,done:!0}}return d.prototype=y,n(g,"constructor",{value:y,configurable:!0}),n(y,"constructor",{value:d,configurable:!0}),d.displayName=u(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,u(t,c,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},b(x.prototype),u(x.prototype,a,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new x(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(g),u(g,c,"Generator"),u(g,i,(function(){return this})),u(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=j,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}function v(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function _(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){v(i,n,o,a,c,"next",t)}function c(t){v(i,n,o,a,c,"throw",t)}a(void 0)}))}}function w(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==f(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==f(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===f(o)?o:String(o)),n)}var o}var g=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._api=n,this._selectedItem=null,this._apiKey="e6970efb880b105e85f3508dd47a2c23",this._baseCurrentWeatherUrl="https://api.openweathermap.org/data/2.5/weather",this._currentWeatherUrl=new URL(this._baseCurrentWeatherUrl),this._currentWeatherUrl.searchParams.append("units","metric"),this._currentWeatherUrl.searchParams.append("appid",this._apiKey),this._baseForecastWeatherUrl="https://api.openweathermap.org/data/2.5/forecast",this._forecastWeatherUrl=new URL(this._baseForecastWeatherUrl),this._forecastWeatherUrl.searchParams.append("units","metric"),this._forecastWeatherUrl.searchParams.append("appid",this._apiKey),this._currentWeatherData=null,this._forecastWeatherData=null,this._cityName=document.querySelector(".main-information__city"),this._weatherIcon=document.querySelector(".main-information__weather-icon"),this._date=document.querySelector(".main-information__current-date"),this._time=document.querySelector(".main-information__current-time"),this._temp=document.querySelector(".main-information__temp"),this._weatherDescription=document.querySelector(".main-information__weather-description"),this._visibility=document.querySelector(".widgets__main_description-visibility"),this._wind=document.querySelector(".widgets__main_description-wind"),this._humidity=document.querySelector(".widgets__main_description-humidity"),this._feelsLike=document.querySelector(".widgets__main_description-feels-like"),this._weatherMain=document.querySelector(".main-information__temp-diff"),this._sunrise=document.querySelector(".widgets__main_description-sunrise"),this._sunset=document.querySelector(".widgets__main_description-sunset"),this._dayOne=document.querySelector(".widgets__forecast_day-one"),this._dayTwo=document.querySelector(".widgets__forecast_day-two"),this._dayThree=document.querySelector(".widgets__forecast_day-three"),this._dayFour=document.querySelector(".widgets__forecast_day-four"),this._dayFive=document.querySelector(".widgets__forecast_day-five"),this._iconDayElements=document.querySelectorAll(".widgets__forecast_img"),this._descriptionDayElements=document.querySelectorAll(".widgets__forecast_temp"),this._tempDayElements=document.querySelectorAll(".widgets__forecast_temp_l"),this._hourTempElements=document.querySelectorAll(".hourly-forecast__temp"),this._hourIconElements=document.querySelectorAll(".hourly-forecast__icon")}var e,r,o,i,a,c;return e=t,r=[{key:"init",value:(c=_(m().mark((function t(){var e=this;return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:window.addEventListener("itemSelectedEvent",function(){var t=_(m().mark((function t(r){var n,o,i;return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.detail.selectedItem,e._selectedItem=n,o=document.querySelector(".load"),(i=document.querySelector(".wrapper")).classList.contains("wrapper_opened")||o.classList.add("load_opened"),t.next=7,Promise.all([e._fetchCurrentWeatherData(),e._fetchForecastWeatherData()]);case 7:if(o.classList.remove("load_opened"),e._currentWeatherData&&e._forecastWeatherData){t.next=10;break}return t.abrupt("return");case 10:i.classList.add("wrapper_opened"),e._setСurrentData(),e._setTime(),e._setForecastData();case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 1:case"end":return t.stop()}}),t)}))),function(){return c.apply(this,arguments)})},{key:"_fetchCurrentWeatherData",value:(a=_(m().mark((function t(){return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this._currentWeatherUrl.searchParams.set("lat",this._selectedItem.geometry.lat),this._currentWeatherUrl.searchParams.set("lon",this._selectedItem.geometry.lng),t.next=4,this._api(this._currentWeatherUrl);case 4:this._currentWeatherData=t.sent;case 5:case"end":return t.stop()}}),t,this)}))),function(){return a.apply(this,arguments)})},{key:"_fetchForecastWeatherData",value:(i=_(m().mark((function t(){return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this._forecastWeatherUrl.searchParams.set("lat",this._selectedItem.geometry.lat),this._forecastWeatherUrl.searchParams.set("lon",this._selectedItem.geometry.lng),t.next=4,this._api(this._forecastWeatherUrl);case 4:this._forecastWeatherData=t.sent;case 5:case"end":return t.stop()}}),t,this)}))),function(){return i.apply(this,arguments)})},{key:"_setСurrentData",value:function(){var e,r,n=this._currentWeatherData,o=n.weather,i=n.main,a=i.temp,c=i.humidity,u=i.feels_like,s=n.visibility,l=n.wind.speed,h=(e=o,r=1,function(t){if(Array.isArray(t))return t}(e)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,c=[],u=!0,s=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(c.push(n.value),c.length!==e);u=!0);}catch(t){s=!0,o=t}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(s)throw o}}return c}}(e,r)||d(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())[0],f=h.description,p=h.icon;this._cityName.textContent=this._selectedItem.formatted.split(",")[0],this._weatherIcon.src=t._getUrl(p),this._temp.textContent="".concat(Math.round(a),"°"),this._weatherDescription.textContent=f,this._weatherDescription.textContent="".concat(this._weatherDescription.textContent[0].charAt(0).toUpperCase()).concat(this._weatherDescription.textContent.slice(1)),this._weatherMain.textContent=this._currentWeatherData.weather[0].main,this._weatherMain.textContent="".concat(this._weatherMain.textContent[0].charAt(0).toUpperCase()).concat(this._weatherMain.textContent.slice(1)),this._visibility.textContent="".concat(Math.round(s/1e3)," km"),this._wind.textContent="".concat(Math.round(l)," m/s"),this._humidity.textContent="".concat(c,"%"),this._feelsLike.textContent="".concat(Math.round(u),"°")}},{key:"_setTime",value:function(){var t=this._currentWeatherData,e=t.dt,r=t.sys,n=r.sunrise,o=r.sunset,i=new Date(1e3*e),a=new Date(1e3*n),c=new Date(1e3*o),u={weekday:"long",month:"long",day:"numeric",timeZone:this._selectedItem.annotations.timezone.name};this._date.textContent=new Intl.DateTimeFormat("en-US",u).format(i);var s={hour:"numeric",minute:"numeric",timeZone:this._selectedItem.annotations.timezone.name};this._time.textContent=new Intl.DateTimeFormat("ru-RU",s).format(i),this._sunrise.textContent=new Intl.DateTimeFormat("ru-RU",s).format(a),this._sunset.textContent=new Intl.DateTimeFormat("ru-RU",s).format(c)}},{key:"_setForecastData",value:function(){var e={weekday:"short",timeZone:this._selectedItem.annotations.timezone.name},r=this._forecastWeatherData.list;console.log(r),this._dayOne.textContent=new Intl.DateTimeFormat("en-US",e).format(new Date(1e3*r[0].dt)),this._dayTwo.textContent=new Intl.DateTimeFormat("en-US",e).format(new Date(1e3*r[8].dt)),this._dayThree.textContent=new Intl.DateTimeFormat("en-US",e).format(new Date(1e3*r[16].dt)),this._dayFour.textContent=new Intl.DateTimeFormat("en-US",e).format(new Date(1e3*r[24].dt)),this._dayFive.textContent=new Intl.DateTimeFormat("en-US",e).format(new Date(1e3*r[32].dt));var n=0;this._iconDayElements=p(this._iconDayElements).map((function(e,o){var i=e;return 0!==o&&(n+=8),i.src=t._getUrl(r[n].weather[0].icon),i}));var o=0;this._descriptionDayElements=p(this._descriptionDayElements).map((function(t,e){var n=t;return 0!==e&&(o+=8),n.textContent=r[o].weather[0].main,n}));var i=0;this._tempDayElements=p(this._tempDayElements).map((function(t,e){var n=t;return 0!==e&&(i+=8),n.textContent="".concat(Math.round(r[i].main.temp),"°"),n})),this._hourTempElements=p(this._hourTempElements).map((function(t,e){var n=t;return n.textContent="".concat(Math.round(r[e].main.temp),"°"),n})),this._hourIconElements=p(this._hourIconElements).map((function(e,n){var o=e;return o.src=t._getUrl(r[n].weather[0].icon),o}))}}],o=[{key:"_getUrl",value:function(t){return"https://openweathermap.org/img/wn/".concat(t,"@2x.png")}}],r&&w(e.prototype,r),o&&w(e,o),Object.defineProperty(e,"prototype",{writable:!1}),t}();new h({searchWrapper:".search",searchInput:".search__input",dropdownTemplate:".search__dropdown-template",dropdown:".search__dropdown",dropdownItem:".search__dropdown-button",dropdownItemClass:"search__dropdown-button",inputOpenedClass:"search__input_opened",wrapper:".wrapper",buttonElement:".previous-request__city-name",previousRequest:".previous-request"}).setEventListeners(),(new g).init()})();