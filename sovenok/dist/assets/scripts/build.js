!function t(n,e,o){function i(a,r){if(!e[a]){if(!n[a]){var l="function"==typeof require&&require;if(!r&&l)return l(a,!0);if(c)return c(a,!0);var s=new Error("Cannot find module '"+a+"'");throw s.code="MODULE_NOT_FOUND",s}var u=e[a]={exports:{}};n[a][0].call(u.exports,function(t){var e=n[a][1][t];return i(e?e:t)},u,u.exports,t,n,e,o)}return e[a].exports}for(var c="function"==typeof require&&require,a=0;a<o.length;a++)i(o[a]);return i}({1:[function(t,n,e){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}var i=t("in-viewport"),c=o(i),a=t("basicmodal"),r=[{selector:".section-1__achievements",animation:"puffIn",offset:-300},{selector:".section-2__image-iphone",animation:"slideInRight",offset:-300},{selector:".section-2__children",animation:"vanishIn",offset:-300},{selector:".section-3__top-image",animation:"tinUpIn",offset:-300},{selector:".section-3__bottom-image",animation:"tinLeftIn",offset:-300},{selector:".super-frame",animation:"spaceInDown",offset:-100},{selector:".person-list-item",animation:"slideInLeft",offset:200,times:[0,100,200,300,400]}];window.addEventListener("scroll",function(t){r.forEach(function(t){var n=document.querySelectorAll(t.selector);n.forEach(function(n,e){(0,c["default"])(n,{offset:t.offset})&&(t.times?setTimeout(function(){n.classList.add("magictime"),n.classList.add(t.animation)},t.times[e]):(n.classList.add("magictime"),n.classList.add(t.animation)))})})}),document.querySelector(".section-4__comment").addEventListener("click",function(){a.show({body:'<img src="assets/images/comment-big.png"/>',buttons:{cancel:{title:"Закрыть",fn:a.close}}})})},{basicmodal:2,"in-viewport":3}],2:[function(t,n,e){(function(o){!function(t){if("object"==typeof e&&"undefined"!=typeof n)n.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var i;i="undefined"!=typeof window?window:"undefined"!=typeof o?o:"undefined"!=typeof self?self:this,i.basicModal=t()}}(function(){return function n(e,o,i){function c(r,l){if(!o[r]){if(!e[r]){var s="function"==typeof t&&t;if(!l&&s)return s(r,!0);if(a)return a(r,!0);var u=new Error("Cannot find module '"+r+"'");throw u.code="MODULE_NOT_FOUND",u}var f=o[r]={exports:{}};e[r][0].call(f.exports,function(t){var n=e[r][1][t];return c(n?n:t)},f,f.exports,n,e,o,i)}return o[r].exports}for(var a="function"==typeof t&&t,r=0;r<i.length;r++)c(i[r]);return c}({1:[function(t,n,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=null,i=(e.THEME={small:"basicModal__small",xclose:"basicModal__xclose"},function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return n===!0?document.querySelectorAll(".basicModal "+t):document.querySelector(".basicModal "+t)}),c=function(t,n){return null!=t&&(t.constructor===Object?Array.prototype.forEach.call(Object.keys(t),function(e){return n(t[e],e,t)}):Array.prototype.forEach.call(t,function(e,o){return n(e,o,t)}))},a=function(t){return null==t||0===Object.keys(t).length?(console.error("Missing or empty modal configuration object"),!1):(null==t.body&&(t.body=""),null==t["class"]&&(t["class"]=""),t.closable!==!1&&(t.closable=!0),null==t.buttons?(console.error("basicModal requires at least one button"),!1):null!=t.buttons.action&&(null==t.buttons.action["class"]&&(t.buttons.action["class"]=""),null==t.buttons.action.title&&(t.buttons.action.title="OK"),null==t.buttons.action.fn)?(console.error("Missing fn for action-button"),!1):null==t.buttons.cancel||(null==t.buttons.cancel["class"]&&(t.buttons.cancel["class"]=""),null==t.buttons.cancel.title&&(t.buttons.cancel.title="Cancel"),null!=t.buttons.cancel.fn)||(console.error("Missing fn for cancel-button"),!1))},r=function(t){var n='<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><path d="M405 136.798l-29.798-29.798-119.202 119.202-119.202-119.202-29.798 29.798 119.202 119.202-119.202 119.202 29.798 29.798 119.202-119.202 119.202 119.202 29.798-29.798-119.202-119.202z"/></svg>',e="";return e+="\n\t        <div class='basicModalContainer basicModalContainer--fadeIn' data-closable='"+t.closable+"'>\n\t            <div class='basicModal basicModal--fadeIn "+t["class"]+"' role=\"dialog\">\n\t                <div class='basicModal__content'>\n\t                    "+t.body+"\n\t                </div>\n\t                <div class='basicModal__buttons'>\n\t        ",null!=t.buttons.cancel&&(e+=t.buttons.cancel["class"].indexOf("basicModal__xclose")===-1?"<a id='basicModal__cancel' class='basicModal__button "+t.buttons.cancel["class"]+"'>"+t.buttons.cancel.title+"</a>":"<div id='basicModal__cancel' class='basicModal__button "+t.buttons.cancel["class"]+"' aria-label='close'>"+n+"</div>"),null!=t.buttons.action&&(e+="<a id='basicModal__action' class='basicModal__button "+t.buttons.action["class"]+"'>"+t.buttons.action.title+"</a>"),e+="\n\t                </div>\n\t            </div>\n\t        </div>\n\t        "},l=e.getValues=function(){var t={},n=i("input[name]",!0),e=i("select[name]",!0);return c(n,function(n){var e=n.getAttribute("name"),o=n.value;t[e]=o}),c(e,function(n){var e=n.getAttribute("name"),o=n.options[n.selectedIndex].value;t[e]=o}),0===Object.keys(t).length?null:t},s=function(t){return null!=t.buttons.cancel&&(i("#basicModal__cancel").onclick=function(){return this.classList.contains("basicModal__button--active")!==!0&&(this.classList.add("basicModal__button--active"),void t.buttons.cancel.fn())}),null!=t.buttons.action&&(i("#basicModal__action").onclick=function(){return this.classList.contains("basicModal__button--active")!==!0&&(this.classList.add("basicModal__button--active"),void t.buttons.action.fn(l()))}),c(i("input",!0),function(t){t.oninput=t.onblur=function(){this.classList.remove("error")}}),c(i("select",!0),function(t){t.onchange=t.onblur=function(){this.classList.remove("error")}}),!0},u=(e.show=function b(t){if(a(t)===!1)return!1;if(null!=i())return d(!0),setTimeout(function(){return b(t)},301),!1;o=document.activeElement;var n=r(t);document.body.insertAdjacentHTML("beforeend",n),s(t);var e=i("input");null!=e&&e.select();var c=i("select");return null==e&&null!=c&&c.focus(),null!=t.callback&&t.callback(t),!0},e.error=function(t){f();var n=i("input[name='"+t+"']")||i("select[name='"+t+"']");return null!=n&&(n.classList.add("error"),"function"==typeof n.select?n.select():n.focus(),i().classList.remove("basicModal--fadeIn","basicModal--shake"),void setTimeout(function(){return i().classList.add("basicModal--shake")},1))},e.visible=function(){return null!=i()}),f=(e.action=function(){var t=i("#basicModal__action");return null!=t&&(t.click(),!0)},e.cancel=function(){var t=i("#basicModal__cancel");return null!=t&&(t.click(),!0)},e.reset=function(){var t=i(".basicModal__button",!0);c(t,function(t){return t.classList.remove("basicModal__button--active")});var n=i("input",!0);c(n,function(t){return t.classList.remove("error")});var e=i("select",!0);return c(e,function(t){return t.classList.remove("error")}),!0}),d=e.close=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(u()===!1)return!1;var n=i().parentElement;return("false"!==n.getAttribute("data-closable")||t!==!1)&&(n.classList.remove("basicModalContainer--fadeIn"),n.classList.add("basicModalContainer--fadeOut"),setTimeout(function(){return null!=n&&null!=n.parentElement&&void n.parentElement.removeChild(n)},300),null!=o&&(o.focus(),o=null),!0)}},{}]},{},[1])(1)})}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],3:[function(t,n,e){(function(t){function e(n,e,o){var i={container:t.document.body,offset:0};void 0!==e&&"function"!=typeof e||(o=e,e={});for(var a=i.container=e.container||i.container,r=i.offset=e.offset||i.offset,s=0;s<l.length;s++)if(l[s].container===a)return l[s].isInViewport(n,r,o);return l[l.push(c(a))-1].isInViewport(n,r,o)}function o(t,n,e){t.attachEvent?t.attachEvent("on"+n,e):t.addEventListener(n,e,!1)}function i(t,n,e){var o;return function(){function i(){o=null,e||t.apply(c,a)}var c=this,a=arguments,r=e&&!o;clearTimeout(o),o=setTimeout(i,n),r&&t.apply(c,a)}}function c(n){function e(t,n,e){if(!e)return f(t,n);var o=c(t,n,e);return o.watch(),o}function c(t,n,e){function o(){d.add(t,n,e)}function i(){d.remove(t)}return{watch:o,dispose:i}}function l(t,n,e){f(t,n)&&(d.remove(t),e(t))}function f(e,o){if(!u(t.document.documentElement,e)||!u(t.document.documentElement,n))return!1;if(!e.offsetWidth||!e.offsetHeight)return!1;var i=e.getBoundingClientRect(),c={};if(n===t.document.body)c={top:-o,left:-o,right:t.document.documentElement.clientWidth+o,bottom:t.document.documentElement.clientHeight+o};else{var a=n.getBoundingClientRect();c={top:a.top-o,left:a.left-o,right:a.right+o,bottom:a.bottom+o}}var r=i.right>=c.left&&i.left<=c.right&&i.bottom>=c.top&&i.top<=c.bottom;return r}var d=a(),b=n===t.document.body?t:n,m=i(d.checkAll(l),15);return o(b,"scroll",m),b===t&&o(t,"resize",m),s&&r(d,n,m),setInterval(m,150),{container:n,isInViewport:e}}function a(){function t(t,n,e){o(t)||c.push([t,n,e])}function n(t){var n=e(t);n!==-1&&c.splice(n,1)}function e(t){for(var n=c.length-1;n>=0;n--)if(c[n][0]===t)return n;return-1}function o(t){return e(t)!==-1}function i(t){return function(){for(var n=c.length-1;n>=0;n--)t.apply(this,c[n])}}var c=[];return{add:t,remove:n,isWatched:o,checkAll:i}}function r(t,n,e){function o(t){t.some(i)===!0&&setTimeout(e,0)}function i(n){var e=r.call([],Array.prototype.slice.call(n.addedNodes),n.target);return a.call(e,t.isWatched).length>0}var c=new MutationObserver(o),a=Array.prototype.filter,r=Array.prototype.concat;c.observe(n,{childList:!0,subtree:!0,attributes:!0})}n.exports=e;var l=[],s="function"==typeof t.MutationObserver,u=function(){return!t.document||(t.document.documentElement.compareDocumentPosition?function(t,n){return!!(16&t.compareDocumentPosition(n))}:t.document.documentElement.contains?function(t,n){return t!==n&&!!t.contains&&t.contains(n)}:function(t,n){for(;n=n.parentNode;)if(n===t)return!0;return!1})}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}]},{},[1]);