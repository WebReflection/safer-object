/*! (c) Andrea Giammarchi - ISC */
var saferObject=function(e){"use strict";var r=Function.call,t=r.bind(r.bind);t(r,r.apply);r=t(r,r);const{defineProperty:n,getPrototypeOf:o,getOwnPropertyDescriptor:a,getOwnPropertyNames:c,hasOwnProperty:i}=Object,s=(e,r)=>{n(e,r,{enumerable:!0,value:!1})};return e=>{const t=e,u=[],l=[];do{c(e).forEach(r=>{u.includes(r)||(u.push(r),l.push(a(e,r)))})}while(e=o(e));return u.forEach((e,o)=>{n(t,e,(e=>(s(e,"configurable"),r(i,e,"writable")&&s(e,"writable"),e))(l[o]))}),t}}();