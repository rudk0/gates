(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,function(e,t,o){e.exports=o(13)},,,,,function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){"use strict";o.r(t);var n=o(0),a=o.n(n),r=o(3),c=o.n(r),l=(o(10),o(2),o(11),o(4));o(12);var i=function(){var e=Object(n.useState)(),t=Object(l.a)(e,2),o=t[0],r=t[1],c="",i="";return console.log(o),a.a.createElement("div",{className:"page"},o&&a.a.createElement("div",{className:"alert blue alert-warning"},o),a.a.createElement("div",{className:"buttons"},a.a.createElement("button",{className:"btn btn2 btn-dark",onClick:function(){return localStorage.getItem("password")?c=localStorage.getItem("password"):null!=(c=prompt("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c:"))&&localStorage.setItem("password",c),localStorage.getItem("name")?i=localStorage.getItem("name"):null!=(i=prompt("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f:"))&&localStorage.setItem("name",i),void fetch("https://mine-doors.herokuapp.com/mobile/bike",{method:"GET",headers:new Headers({Authorization:"Basic ".concat(c,".").concat(i)})}).then((function(e){200===e.status?r("OK"):(r("Something went wrong"),localStorage.clear())})).catch((function(e){return r("\u0427\u0442\u043e-\u0442\u043e \u043d\u0435 \u0442\u0430\u043a \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c \u0438\u043b\u0438 \u043d\u0435\u0442 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u0430")}))}},"\ud83d\udeb2"),a.a.createElement("button",{className:"btn btn3 btn-dark",onClick:function(){return localStorage.getItem("password")?c=localStorage.getItem("password"):null!=(c=prompt("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c:"))&&localStorage.setItem("password",c),localStorage.getItem("name")?i=localStorage.getItem("name"):null!=(i=prompt("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f:"))&&localStorage.setItem("name",i),void fetch("https://mine-doors.herokuapp.com/mobile/man",{method:"GET",headers:new Headers({Authorization:"Basic ".concat(c,".").concat(i)})}).then((function(e){200===e.status?r("OK"):(r("Something went wrong"),localStorage.clear())})).catch((function(e){return r("\u0427\u0442\u043e-\u0442\u043e \u043d\u0435 \u0442\u0430\u043a \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c \u0438\u043b\u0438 \u043d\u0435\u0442 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u0430")}))}},"\ud83d\udeb6\ud83c\udffb")),a.a.createElement("button",{className:"btn btn1 btn-dark",onClick:function(){return localStorage.getItem("password")?c=localStorage.getItem("password"):null!=(c=prompt("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c:"))&&localStorage.setItem("password",c),localStorage.getItem("name")?i=localStorage.getItem("name"):null!=(i=prompt("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f:"))&&localStorage.setItem("name",i),void fetch("https://mine-doors.herokuapp.com/mobile/car",{method:"GET",headers:new Headers({Authorization:"Basic ".concat(c,".").concat(i)})}).then((function(e){200===e.status?r("OK"):(r("Something went wrong"),localStorage.clear())})).catch((function(e){return r("\u0427\u0442\u043e-\u0442\u043e \u043d\u0435 \u0442\u0430\u043a \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c \u0438\u043b\u0438 \u043d\u0435\u0442 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u0430")}))}},"\ud83d\ude97"))};var s=function(){return a.a.createElement(i,null)},u=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function m(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var o=e.installing;null!=o&&(o.onstatechange=function(){"installed"===o.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(s,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");u?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(o){var n=o.headers.get("content-type");404===o.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):m(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):m(t,e)}))}}()}],[[5,1,2]]]);
//# sourceMappingURL=main.cadb9c73.chunk.js.map