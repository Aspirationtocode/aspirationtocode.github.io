!function e(t,n,i){function o(s,c){if(!n[s]){if(!t[s]){var a="function"==typeof require&&require;if(!c&&a)return a(s,!0);if(r)return r(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var l=n[s]={exports:{}};t[s][0].call(l.exports,function(e){var n=t[s][1][e];return o(n?n:e)},l,l.exports,e,t,n,i)}return n[s].exports}for(var r="function"==typeof require&&require,s=0;s<i.length;s++)o(i[s]);return o}({1:[function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){for(var n=[],i=0;i<e;i++)n.push(i*t);return n}function r(e){for(var t=[],n=0;n<e;n++)t.push({selector:".prototype-element--"+(n+1)+"s",elementToBeInView:".prototype-element--"+(n+1)+"s",animation:!1,threshold:.5});return t}var s=e("in-view"),c=i(s),a=[{selector:".prototype",elementToBeInView:".prototype-element--1s",animation:!1,threshold:0},{selector:".person-list-item",elementToBeInView:".person-list",animation:!1,threshold:.5,times:o(6,150)},{selector:".hint__image--1s",elementToBeInView:".hint__image--1s",animation:!1,threshold:.5,cb:function(){document.querySelector(".hint__arrow--1s").classList.add("magictime")}},{selector:".hint__image--2s",elementToBeInView:".hint__image--2s",animation:!1,threshold:.5,cb:function(){document.querySelector(".hint__arrow--2s").classList.add("magictime")}},{selector:".hint__image--3s",elementToBeInView:".hint__image--3s",animation:!1,threshold:.5,cb:function(){document.querySelector(".hint__arrow--3s").classList.add("magictime")}},{selector:".super-frame",elementToBeInView:".super-frame",animation:!1,threshold:.5},{selector:".section-4__card--1s",elementToBeInView:".section-4__card-left-side",animation:!1,threshold:.5},{selector:".section-4__card--2s",elementToBeInView:".section-4__card-left-side",animation:!1,threshold:.5},{selector:".section-4__card--3s",elementToBeInView:".section-4__card-left-side",animation:!1,threshold:.5},{selector:".section-4__card--4s",elementToBeInView:".section-4__card-left-side",animation:!1,threshold:.5},{selector:".section-4__card--5s",elementToBeInView:".section-4__card-left-side",animation:!1,threshold:.5},{selector:".section-4__card--6s",elementToBeInView:".section-4__card-left-side",animation:!1,threshold:.5},{selector:".section-4__card--7s",elementToBeInView:".section-4__card-left-side",animation:!1,threshold:.5},{selector:".section-4__card--8s",elementToBeInView:".section-4__card-right-side",animation:!1,threshold:.5},{selector:".section-4__card--9s",elementToBeInView:".section-4__card-right-side",animation:!1,threshold:.5},{selector:".section-4__card--10s",elementToBeInView:".section-4__card-right-side",animation:!1,threshold:.5},{selector:".section-4__card--11s",elementToBeInView:".section-4__card-right-side",animation:!1,threshold:.5},{selector:".section-4__card--12s",elementToBeInView:".section-4__card-right-side",animation:!1,threshold:.5},{selector:".section-4__card--13s",elementToBeInView:".section-4__card-right-side",animation:!1,threshold:.5},{selector:".section-6__icon",elementToBeInView:".section-6",animation:!1,threshold:.5,times:o(16,50)},{selector:".section-5__screen--left",elementToBeInView:".section-5",animation:!1,threshold:.2},{selector:".section-5__screen--middle",elementToBeInView:".section-5",animation:!1,threshold:.2},{selector:".section-5__screen--right",elementToBeInView:".section-5",animation:!1,threshold:.2}];document.addEventListener("DOMContentLoaded",function(){setTimeout(function(){document.querySelector(".section-1__i-mac").classList.add("magictime")},1),setTimeout(function(){document.querySelector(".section-1__card").classList.add("magictime")},400),setTimeout(function(){document.querySelector(".section-1__ipad").classList.add("magictime")},800),window.addEventListener("scroll",function(e){r(18).concat(a).forEach(function(e){var t=document.querySelectorAll(e.selector);t.forEach(function(t,n){t.addEventListener("transitionend",e.cb,!1),t.addEventListener("animationend",e.cb,!1),c["default"].threshold(e.threshold),(0,c["default"])(e.elementToBeInView).on("enter",function(){e.times?setTimeout(function(){t.classList.add("magictime"),e.animation&&t.classList.add(e.animation)},e.times[n]):(t.classList.add("magictime"),e.animation&&t.classList.add(e.animation))})})})})})},{"in-view":2}],2:[function(e,t,n){!function(e,i){"object"==typeof n&&"object"==typeof t?t.exports=i():"function"==typeof define&&define.amd?define([],i):"object"==typeof n?n.inView=i():e.inView=i()}(this,function(){return function(e){function t(i){if(n[i])return n[i].exports;var o=n[i]={exports:{},id:i,loaded:!1};return e[i].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}var o=n(2),r=i(o);e.exports=r["default"]},function(e,t){function n(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}e.exports=n},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(9),r=i(o),s=n(3),c=i(s),a=n(4),u=function(){if("undefined"!=typeof window){var e=100,t=["scroll","resize","load"],n={history:[]},i={offset:{},threshold:0,test:a.inViewport},o=(0,r["default"])(function(){n.history.forEach(function(e){n[e].check()})},e);t.forEach(function(e){return addEventListener(e,o)}),window.MutationObserver&&addEventListener("DOMContentLoaded",function(){new MutationObserver(o).observe(document.body,{attributes:!0,childList:!0,subtree:!0})});var s=function(e){if("string"==typeof e){var t=[].slice.call(document.querySelectorAll(e));return n.history.indexOf(e)>-1?n[e].elements=t:(n[e]=(0,c["default"])(t,i),n.history.push(e)),n[e]}};return s.offset=function(e){if(void 0===e)return i.offset;var t=function(e){return"number"==typeof e};return["top","right","bottom","left"].forEach(t(e)?function(t){return i.offset[t]=e}:function(n){return t(e[n])?i.offset[n]=e[n]:null}),i.offset},s.threshold=function(e){return"number"==typeof e&&e>=0&&e<=1?i.threshold=e:i.threshold},s.test=function(e){return"function"==typeof e?i.test=e:i.test},s.is=function(e){return i.test(e,i)},s.offset(0),s}};t["default"]=u()},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=function(){function e(t,i){n(this,e),this.options=i,this.elements=t,this.current=[],this.handlers={enter:[],exit:[]},this.singles={enter:[],exit:[]}}return i(e,[{key:"check",value:function(){var e=this;return this.elements.forEach(function(t){var n=e.options.test(t,e.options),i=e.current.indexOf(t),o=i>-1,r=n&&!o,s=!n&&o;r&&(e.current.push(t),e.emit("enter",t)),s&&(e.current.splice(i,1),e.emit("exit",t))}),this}},{key:"on",value:function(e,t){return this.handlers[e].push(t),this}},{key:"once",value:function(e,t){return this.singles[e].unshift(t),this}},{key:"emit",value:function(e,t){for(;this.singles[e].length;)this.singles[e].pop()(t);for(var n=this.handlers[e].length;--n>-1;)this.handlers[e][n](t);return this}}]),e}();t["default"]=function(e,t){return new o(e,t)}},function(e,t){"use strict";function n(e,t){var n=e.getBoundingClientRect(),i=n.top,o=n.right,r=n.bottom,s=n.left,c=n.width,a=n.height,u={t:r,r:window.innerWidth-s,b:window.innerHeight-i,l:o},l={x:t.threshold*c,y:t.threshold*a};return u.t>t.offset.top+l.y&&u.r>t.offset.right+l.x&&u.b>t.offset.bottom+l.y&&u.l>t.offset.left+l.x}Object.defineProperty(t,"__esModule",{value:!0}),t.inViewport=n},function(e,t){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(t,function(){return this}())},function(e,t,n){var i=n(5),o="object"==typeof self&&self&&self.Object===Object&&self,r=i||o||Function("return this")();e.exports=r},function(e,t,n){function i(e,t,n){function i(t){var n=w,i=y;return w=y=void 0,V=t,T=e.apply(i,n)}function l(e){return V=e,b=setTimeout(h,t),B?i(e):T}function f(e){var n=e-x,i=e-V,o=t-n;return I?u(o,g-i):o}function d(e){var n=e-x,i=e-V;return void 0===x||n>=t||n<0||I&&i>=g}function h(){var e=r();return d(e)?m(e):void(b=setTimeout(h,f(e)))}function m(e){return b=void 0,L&&w?i(e):(w=y=void 0,T)}function _(){void 0!==b&&clearTimeout(b),V=0,w=x=y=b=void 0}function p(){return void 0===b?T:m(r())}function v(){var e=r(),n=d(e);if(w=arguments,y=this,x=e,n){if(void 0===b)return l(x);if(I)return b=setTimeout(h,t),i(x)}return void 0===b&&(b=setTimeout(h,t)),T}var w,y,g,T,b,x,V=0,B=!1,I=!1,L=!0;if("function"!=typeof e)throw new TypeError(c);return t=s(t)||0,o(n)&&(B=!!n.leading,I="maxWait"in n,g=I?a(s(n.maxWait)||0,t):g,L="trailing"in n?!!n.trailing:L),v.cancel=_,v.flush=p,v}var o=n(1),r=n(8),s=n(10),c="Expected a function",a=Math.max,u=Math.min;e.exports=i},function(e,t,n){var i=n(6),o=function(){return i.Date.now()};e.exports=o},function(e,t,n){function i(e,t,n){var i=!0,c=!0;if("function"!=typeof e)throw new TypeError(s);return r(n)&&(i="leading"in n?!!n.leading:i,c="trailing"in n?!!n.trailing:c),o(e,t,{leading:i,maxWait:t,trailing:c})}var o=n(7),r=n(1),s="Expected a function";e.exports=i},function(e,t){function n(e){return e}e.exports=n}])})},{}]},{},[1]);