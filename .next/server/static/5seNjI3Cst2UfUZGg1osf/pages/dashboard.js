module.exports=function(t){var n=require("../../../ssr-module-cache.js");function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}},u=!0;try{t[r].call(o.exports,o,o.exports,e),u=!1}finally{u&&delete n[r]}return o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=6)}({"/+oN":function(t,n){t.exports=require("core-js/library/fn/object/get-prototype-of")},"0iUn":function(t,n,e){"use strict";function r(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}e.d(n,"a",function(){return r})},6:function(t,n,e){t.exports=e("u9iw")},"AT/M":function(t,n,e){"use strict";function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}e.d(n,"a",function(){return r})},Bhuq:function(t,n,e){t.exports=e("/+oN")},MI3g:function(t,n,e){"use strict";var r=e("XVgq"),o=e.n(r),u=e("Z7t5"),i=e.n(u);function c(t){return(c="function"==typeof i.a&&"symbol"==typeof o.a?function(t){return typeof t}:function(t){return t&&"function"==typeof i.a&&t.constructor===i.a&&t!==i.a.prototype?"symbol":typeof t})(t)}function f(t){return(f="function"==typeof i.a&&"symbol"===c(o.a)?function(t){return c(t)}:function(t){return t&&"function"==typeof i.a&&t.constructor===i.a&&t!==i.a.prototype?"symbol":c(t)})(t)}var a=e("AT/M");function s(t,n){return!n||"object"!==f(n)&&"function"!=typeof n?Object(a.a)(t):n}e.d(n,"a",function(){return s})},SqZg:function(t,n,e){t.exports=e("o5io")},TRZx:function(t,n,e){t.exports=e("Wk4r")},TUA0:function(t,n){t.exports=require("core-js/library/fn/object/define-property")},Tit0:function(t,n,e){"use strict";var r=e("SqZg"),o=e.n(r),u=e("TRZx"),i=e.n(u);function c(t,n){return(c=i.a||function(t,n){return t.__proto__=n,t})(t,n)}function f(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=o()(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&c(t,n)}e.d(n,"a",function(){return f})},Wk4r:function(t,n){t.exports=require("core-js/library/fn/object/set-prototype-of")},XVgq:function(t,n,e){t.exports=e("gHn/")},Z7t5:function(t,n,e){t.exports=e("vqFK")},a7VT:function(t,n,e){"use strict";e.d(n,"a",function(){return c});var r=e("Bhuq"),o=e.n(r),u=e("TRZx"),i=e.n(u);function c(t){return(c=i.a?o.a:function(t){return t.__proto__||o()(t)})(t)}},cDcd:function(t,n){t.exports=require("react")},"gHn/":function(t,n){t.exports=require("core-js/library/fn/symbol/iterator")},hfKm:function(t,n,e){t.exports=e("TUA0")},o5io:function(t,n){t.exports=require("core-js/library/fn/object/create")},sLSF:function(t,n,e){"use strict";e.d(n,"a",function(){return i});var r=e("hfKm"),o=e.n(r);function u(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),o()(t,r.key,r)}}function i(t,n,e){return n&&u(t.prototype,n),e&&u(t,e),t}},u9iw:function(t,n,e){"use strict";e.r(n);var r=e("0iUn"),o=e("sLSF"),u=e("MI3g"),i=e("a7VT"),c=e("Tit0"),f=e("cDcd"),a=e.n(f),s=function(t){function n(){return Object(r.a)(this,n),Object(u.a)(this,Object(i.a)(n).apply(this,arguments))}return Object(c.a)(n,t),Object(o.a)(n,[{key:"render",value:function(){return a.a.createElement("h1",null,"Dashboard")}}]),n}(f.Component);n.default=s},vqFK:function(t,n){t.exports=require("core-js/library/fn/symbol")}});