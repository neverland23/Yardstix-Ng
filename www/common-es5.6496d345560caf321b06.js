function asyncGeneratorStep(e,t,n,r,a,o,c){try{var i=e[o](c),u=i.value}catch(s){return void n(s)}i.done?t(u):Promise.resolve(u).then(r,a)}function _asyncToGenerator(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function c(e){asyncGeneratorStep(o,r,a,c,i,"next",e)}function i(e){asyncGeneratorStep(o,r,a,c,i,"throw",e)}c(void 0)}))}}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"6i10":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r={bubbles:{dur:1e3,circles:9,fn:function(e,t,n){var r="".concat(e*t/n-e,"ms"),a=2*Math.PI*t/n;return{r:5,style:{top:"".concat(9*Math.sin(a),"px"),left:"".concat(9*Math.cos(a),"px"),"animation-delay":r}}}},circles:{dur:1e3,circles:8,fn:function(e,t,n){var r=t/n,a="".concat(e*r-e,"ms"),o=2*Math.PI*r;return{r:5,style:{top:"".concat(9*Math.sin(o),"px"),left:"".concat(9*Math.cos(o),"px"),"animation-delay":a}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:function(){return{r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}}}},crescent:{dur:750,circles:1,fn:function(){return{r:26,style:{}}}},dots:{dur:750,circles:3,fn:function(e,t){return{r:6,style:{left:"".concat(9-9*t,"px"),"animation-delay":-110*t+"ms"}}}},lines:{dur:1e3,lines:12,fn:function(e,t,n){return{y1:17,y2:29,style:{transform:"rotate(".concat(30*t+(t<6?180:-180),"deg)"),"animation-delay":"".concat(e*t/n-e,"ms")}}}},"lines-small":{dur:1e3,lines:12,fn:function(e,t,n){return{y1:12,y2:20,style:{transform:"rotate(".concat(30*t+(t<6?180:-180),"deg)"),"animation-delay":"".concat(e*t/n-e,"ms")}}}}}},"8RPc":function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r,a=n("z6cu"),o=n("AytR"),c=n("JIr8"),i=n("dwY0"),u=n("8Y7J"),s=n("IheW"),f=function(){var e=function(){function e(t,n){_classCallCheck(this,e),this.http=t,this.network=n}return _createClass(e,[{key:"getQuestion",value:function(e){return this.http.get("".concat(o.a.baseUrl,"/users/questions?link=").concat(e),{headers:this.network.getHeaders()}).pipe(Object(c.a)((function(e){return Object(a.a)(e)})))}},{key:"giveFeedback",value:function(e){return this.http.post("".concat(o.a.baseUrl,"/users/add_feedback"),e,{headers:this.network.getHeaders()}).pipe(Object(c.a)((function(e){return Object(a.a)(e)})))}},{key:"getResultsChart",value:function(e){return this.http.get("".concat(o.a.baseUrl,"/users/response_data?link=").concat(e),{headers:this.network.getHeaders()}).pipe(Object(c.a)((function(e){return Object(a.a)(e)})))}},{key:"feedbackRequest",value:function(e){return this.http.post("".concat(o.a.baseUrl,"/users/send_feedback_request"),e,{headers:this.network.getHeaders()}).pipe(Object(c.a)((function(e){return Object(a.a)(e)})))}},{key:"login",value:function(e){return this.http.post("".concat(o.a.baseUrl,"/users/login"),e,{headers:this.network.getHeaders()}).pipe(Object(c.a)((function(e){return Object(a.a)(e)})))}},{key:"register",value:function(e){return this.http.post("".concat(o.a.baseUrl,"/users/register"),e,{headers:this.network.getHeaders()}).pipe(Object(c.a)((function(e){return Object(a.a)(e)})))}},{key:"send",value:function(e){r=e}},{key:"fetchData",value:function(){return r}},{key:"getQuestionTemplate",value:function(e){return this.http.get("".concat(o.a.baseUrl,"/users/dummy_questions?link=").concat(e),{headers:this.network.getHeaders()}).pipe(Object(c.a)((function(e){return Object(a.a)(e)})))}},{key:"createQuestionTemplate",value:function(e){return this.http.post("".concat(o.a.baseUrl,"/users/questions"),e,{headers:this.network.getHeaders()}).pipe(Object(c.a)((function(e){return Object(a.a)(e)})))}}]),e}();return e.ngInjectableDef=u.Pb({factory:function(){return new e(u.Qb(s.c),u.Qb(i.a))},token:e,providedIn:"root"}),e}()},KwJk:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return r})),n.d(t,"d",(function(){return i}));var r=function(e,t){return null!==t.closest(e)},a=function(e){return"string"==typeof e&&e.length>0?_defineProperty({"ion-color":!0},"ion-color-".concat(e),!0):void 0},o=function(e){var t={};return function(e){return void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter((function(e){return null!=e})).map((function(e){return e.trim()})).filter((function(e){return""!==e})):[]}(e).forEach((function(e){return t[e]=!0})),t},c=/^[a-z][a-z0-9+\-.]*:/,i=function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(t,n,r){var a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null==t||"#"===t[0]||c.test(t)){e.next=4;break}if(!(a=document.querySelector("ion-router"))){e.next=4;break}return e.abrupt("return",(null!=n&&n.preventDefault(),a.push(t,r)));case 4:return e.abrupt("return",!1);case 5:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}()},NqGI:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}));var r=function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(t,n,r,a,o){var c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=2;break}return e.abrupt("return",t.attachViewToDom(n,r,o,a));case 2:if("string"==typeof r||r instanceof HTMLElement){e.next=4;break}throw new Error("framework delegate is missing");case 4:if(c="string"==typeof r?n.ownerDocument&&n.ownerDocument.createElement(r):r,a&&a.forEach((function(e){return c.classList.add(e)})),o&&Object.assign(c,o),n.appendChild(c),e.t0=c.componentOnReady,!e.t0){e.next=12;break}return e.next=12,c.componentOnReady();case 12:return e.abrupt("return",c);case 13:case"end":return e.stop()}}),e)})));return function(t,n,r,a,o){return e.apply(this,arguments)}}(),a=function(e,t){if(t){if(e)return e.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()}},Uwmq:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(e){try{if("string"!=typeof e||""===e)return e;var t=document.createDocumentFragment(),n=document.createElement("div");t.appendChild(n),n.innerHTML=e,i.forEach((function(e){for(var n=t.querySelectorAll(e),r=n.length-1;r>=0;r--){var c=n[r];c.parentNode?c.parentNode.removeChild(c):t.removeChild(c);for(var i=o(c),u=0;u<i.length;u++)a(i[u])}}));for(var r=o(t),c=0;c<r.length;c++)a(r[c]);var u=document.createElement("div");u.appendChild(t);var s=u.querySelector("div");return null!==s?s.innerHTML:u.innerHTML}catch(f){return console.error(f),""}},a=function e(t){if(!t.nodeType||1===t.nodeType){for(var n=t.attributes.length-1;n>=0;n--){var r=t.attributes.item(n),a=r.name;if(c.includes(a.toLowerCase())){var i=r.value;null!=i&&i.toLowerCase().includes("javascript:")&&t.removeAttribute(a)}else t.removeAttribute(a)}for(var u=o(t),s=0;s<u.length;s++)e(u[s])}},o=function(e){return null!=e.children?e.children:e.childNodes},c=["class","id","href","src","name","slot"],i=["script","style","iframe","meta","link","object","embed"]},fzvj:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return r}));var r=function(){var e=window.TapticEngine;e&&e.selection()},a=function(){var e=window.TapticEngine;e&&e.gestureSelectionStart()},o=function(){var e=window.TapticEngine;e&&e.gestureSelectionChanged()},c=function(){var e=window.TapticEngine;e&&e.gestureSelectionEnd()}}}]);