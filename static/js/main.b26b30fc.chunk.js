(this["webpackJsonplocation-app"]=this["webpackJsonplocation-app"]||[]).push([[0],{30:function(e,t,n){e.exports=n(84)},35:function(e,t,n){},62:function(e,t,n){},65:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var a,r=n(0),c=n.n(r),u=n(8),o=n.n(u),i=(n(35),n(3)),s=n.n(i),l=n(5),p=n(28),d=n(24),f=n(1),E=n(26);!function(e){e.SELECTED_COUNTRY="SELECTED_COUNTRY",e.UPDATE_CITIES="UPDATE_CITIES ",e.UPDATE_AREAS="UPDATE_AREAS",e.GET_COUNTRIES="GET_COUNTRIES",e.COUNTRIES_LOADING="COUNTRIES_LOADING"}(a||(a={}));var v=n(7),y=n(29),b=(n(62),{option:function(e){return Object(v.a)({},e,{textAlign:"left"})},container:function(e){return Object(v.a)({},e,{width:"50%","@media only screen and (max-width: 600px)":{width:"100%"}})}}),h=function(e){var t=e.title,n=e.data,a=e.placeholder,r=e.onChangeItem,u=e.disabled;return c.a.createElement("div",null,c.a.createElement("h3",{className:"title"},t),c.a.createElement(y.a,{options:n,placeholder:a,styles:b,isDisabled:u,onChange:function(e){return r&&r(e)}}))},m=(n(65),function(e){var t=e.countries,n=e.cities,a=e.areas,r=e.onSelectCountry,u=e.onSelectCity;return c.a.createElement("div",null,c.a.createElement("h2",{className:"header"},"Location"),c.a.createElement(h,{data:t,title:"Country *",placeholder:"Please select your country ..",onChangeItem:function(e){return r&&r(e)}}),0!==(null===n||void 0===n?void 0:n.length)&&c.a.createElement(h,{data:n,title:"City *",disabled:0===(null===n||void 0===n?void 0:n.length),placeholder:"Please select your city ..",onChangeItem:function(e){return u&&u(e)}}),0!==(null===a||void 0===a?void 0:a.length)&&c.a.createElement(h,{data:a,title:"Area (Optional)",placeholder:"Please select your area .."}))});function O(e){var t=[];return e.map((function(e){var n={label:e.attributes.name,value:e.id};return t.push(n),null})),t}var C=n(27),T=n.n(C),x=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=T.a.create()).defaults.baseURL="http://46.101.108.59/api",t.defaults.headers.post["Content-Type"]="application/json",t.defaults.timeout=1e4,t.interceptors.response.use((function(e){return e.data}),(function(e){return Promise.reject(e)})),e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));function A(){return S.apply(this,arguments)}function S(){return(S=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x();case 3:return e.next=5,e.sent.get("/countries");case 5:if(!(t=e.sent)){e.next=8;break}return e.abrupt("return",O(t.data));case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function I(e){return j.apply(this,arguments)}function j(){return(j=Object(l.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x();case 3:return e.next=5,e.sent.get("/country/".concat(null===t||void 0===t?void 0:t.value,"/city"));case 5:if(!(n=e.sent)){e.next=8;break}return e.abrupt("return",O(n.data));case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function U(e,t){return _.apply(this,arguments)}function _(){return(_=Object(l.a)(s.a.mark((function e(t,n){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x();case 3:return e.next=5,e.sent.get("/country/".concat(t.value,"/city/").concat(null===n||void 0===n?void 0:n.value,"/area"));case 5:if(!(a=e.sent)){e.next=8;break}return e.abrupt("return",O(a.data));case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}var g=function(e,t){switch(t.type){case a.SELECTED_COUNTRY:return Object(v.a)({},e,{selectedCountry:t.payload,areas:[],cities:[]});case a.COUNTRIES_LOADING:return Object(v.a)({},e,{countriesLoading:t.payload});case a.GET_COUNTRIES:return Object(v.a)({},e,{countries:t.payload});case a.UPDATE_CITIES:return Object(v.a)({},e,{cities:t.payload});case a.UPDATE_AREAS:return Object(v.a)({},e,{areas:t.payload});default:return e}};n(83);function k(){var e=Object(d.a)(["\n  display: block;\n  margin: 0 auto;\n  border-color: red;\n  margin-top: 200px;\n"]);return k=function(){return e},e}var w={selectedCountry:{},cities:[],areas:[],countries:[],countriesLoading:!0},N=Object(f.css)(k()),R=function(){var e=Object(r.useReducer)(g,w),t=Object(p.a)(e,2),n=t[0],u=n.cities,o=n.areas,i=n.selectedCountry,d=n.countriesLoading,f=n.countries,v=t[1];Object(r.useEffect)((function(){h(),v({type:a.COUNTRIES_LOADING,payload:!1})}),[]);var y=Object(r.useCallback)(function(){var e=Object(l.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v({type:a.SELECTED_COUNTRY,payload:t}),e.next=3,I(t);case 3:n=e.sent,v({type:a.UPDATE_CITIES,payload:n});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]),b=Object(r.useCallback)(function(){var e=Object(l.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(v({type:a.UPDATE_AREAS,payload:[]}),"56"!==(null===i||void 0===i?void 0:i.value)){e.next=8;break}return e.next=4,U(i,t);case 4:n=e.sent,v({type:a.UPDATE_AREAS,payload:n}),e.next=9;break;case 8:v({type:a.UPDATE_AREAS,payload:[]});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[i]),h=function(){var e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A();case 2:t=e.sent,v({type:a.GET_COUNTRIES,payload:t});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return d?c.a.createElement(E.ClipLoader,{size:90,loading:d,css:N}):c.a.createElement("div",{className:"container"},c.a.createElement(m,{countries:f,cities:u,areas:o,onSelectCity:function(e){return b(e)},onSelectCountry:function(e){return y(e)}}))};var D=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(R,null))};o.a.render(c.a.createElement(D,null),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.b26b30fc.chunk.js.map