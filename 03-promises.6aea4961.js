!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequire7bc7;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},n.parcelRequire7bc7=r);var i=r("6JpON"),a=document.querySelector(".form");a.addEventListener("submit",(function(n){n.preventDefault();var t=a.elements.delay,o=a.elements.step,r=a.elements.amount,l=parseInt(t.value),s=parseInt(o.value),u=parseInt(r.value),c=1,f=setInterval((function(){var n,t,o,r;(n=c,t=l,o=s,r=Math.random()>.3,t+=(n-1)*o,new Promise((function(e,o){r?e({position:n,delay:t}):o({position:n,delay:t})}))).then((function(n){var t=n.position,o=n.delay;e(i).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms"))})).catch((function(n){var t=n.position,o=n.delay;e(i).Notify.failure("❌ Rejected promise ".concat(t," in ").concat(o,"ms"))})),(c+=1)>=u&&(clearInterval(f),a.reset())}),s)}))}();
//# sourceMappingURL=03-promises.6aea4961.js.map
