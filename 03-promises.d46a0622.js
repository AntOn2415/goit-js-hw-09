!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=n.parcelRequire7bc7;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},n.parcelRequire7bc7=i);var r=i("6JpON"),a=document.querySelector(".form");a.addEventListener("submit",(function(n){n.preventDefault();var t=a.elements.delay,o=a.elements.step,i=a.elements.amount,l=parseInt(t.value),u=parseInt(o.value),s=parseInt(i.value),c=1;setTimeout((function(){var n=setInterval((function(){var t,o,i;(t=c,o=l,i=Math.random()>.3,new Promise((function(e,n){i?e({position:t,delay:o}):n({position:t,delay:o})}))).then((function(n){var t=n.position,o=n.delay;e(r).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms"))})).catch((function(n){var t=n.position,o=n.delay;e(r).Notify.failure("❌ Rejected promise ".concat(t," in ").concat(o,"ms"))})),(c+=1)>s&&clearInterval(n)}),u)}),l)}))}();
//# sourceMappingURL=03-promises.d46a0622.js.map