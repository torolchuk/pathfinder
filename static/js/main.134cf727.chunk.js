(this.webpackJsonppath_finder=this.webpackJsonppath_finder||[]).push([[0],[,,,,,,,,,,,,,,function(e,n,r){},function(e,n,r){},function(e,n,r){},,function(e,n,r){},function(e,n,r){},function(e,n,r){},function(e,n,r){},function(e,n,r){},function(e,n,r){"use strict";r.r(n);var t=r(1),c=r.n(t),a=r(8),i=r.n(a),l=(r(14),r(15),r(4)),o=r(5),s=(r(16),r(0));function u(e){return Object(s.jsxs)("div",{className:"builder-controls__container",children:[Object(s.jsx)("div",{className:"builder-controls__name",children:"Control your world:"}),Object(s.jsx)("div",{className:"builder-controls__proxy-box",children:e.children.map((function(e,n){return Object(s.jsx)("div",{className:"builder-controls__child-box",children:e},n)}))})]})}var d,j=r(9),b=r(2),f=(d={},Object(b.a)(d,"[DIRECTION] DIR_UP",{x:0,y:-1}),Object(b.a)(d,"[DIRECTION] DIR_UP_RIGHT",{x:1,y:-1}),Object(b.a)(d,"[DIRECTION] DIR_RIGHT",{x:1,y:0}),Object(b.a)(d,"[DIRECTION] DIR_RIGHT_DOWN",{x:1,y:1}),Object(b.a)(d,"[DIRECTION] DIR_DOWN",{x:0,y:1}),Object(b.a)(d,"[DIRECTION] DIR_DOWN_LEFT",{x:-1,y:1}),Object(b.a)(d,"[DIRECTION] DIR_LEFT",{x:-1,y:0}),Object(b.a)(d,"[DIRECTION] DIR_LEFT_UP",{x:-1,y:-1}),d),h=function(e,n){return{x:e,y:n}},x=function(e){return Object(j.a)({},e)},_="[Local storage] MapID",O=[{id:1,name:"Wall"},{id:2,name:"Start"},{id:3,name:"Finish"}];function m(e){return new Array(e).fill(0).map((function(n){return new Array(e).fill(0)}))}function v(e,n){for(var r=0;r<e.length;r++)for(var t=0;t<e[r].length;t++)if(e[r][t]===n)return h(t,r);return null}function p(e,n,r){var t=n.x;e[n.y][t]=r}r(18);function y(e){console.log(e);var n={};return O.forEach((function(e){n[e.id]=e.name})),!!e.map&&Object(s.jsx)("div",{className:"grid-renderer__container",children:Object(s.jsx)("div",{className:"grid-renderer__content",children:e.map.map((function(r,t){return Object(s.jsx)("div",{className:"grid-renderer__row",children:r.map((function(r,c){var a=!!e.path&&!!e.path.find((function(e){return e.x===c&&e.y===t}))?"grid-renderer__cell__path":"",i=r?"grid-renderer__cell__"+n[r].toLowerCase():"";return Object(s.jsx)("div",{className:"grid-renderer__cell ".concat(a," ").concat(i),onClick:function(n){return function(n,r){var t=h(n,r);e.onCellClick&&e.onCellClick(t)}(c,t)}},"cell_".concat(c,":").concat(t))}))},"row_"+t)}))})})}r(19);function C(e){return Object(s.jsxs)("div",{className:"control-wrap__container",children:[Object(s.jsxs)("div",{className:"control-wrap__name",children:[e.name,": "]}),Object(s.jsx)("div",{className:"control-wrap__proxy-box",children:e.children||"placeholder"})]})}r(20);function N(e){return Object(s.jsxs)("div",{className:"number-selector__container",children:[Object(s.jsx)("div",{className:"number-selector__control",onClick:function(n){return e.onChanged(-1)},children:"-"}),Object(s.jsx)("div",{className:"number-selector__display",children:e.value}),Object(s.jsx)("div",{className:"number-selector__control",onClick:function(n){return e.onChanged(1)},children:"+"})]})}r(21);function g(e){return Object(s.jsx)("div",{className:"array-selector__container",children:e.list.map((function(n){return Object(s.jsx)("div",{className:"array-selector__item ".concat(n.id===e.selected?"array-selector__item__selected":""),onClick:function(r){return t=n.id,void(e.onChange&&e.onChange(t));var t},children:n.name},n.id)}))})}r(22);function I(e,n){var r=n.x,t=n.y,c=e.length;return r>=0&&t>=0&&r<c&&t<c&&1!==e[t][r]}function D(e,n){var r=n.x,t=n.y;return!e[t][r]||!e[t][r].closed}function w(e,n,r,t,c){var a,i,l,o=(l=r,a={x:(i=n).x-l.x,y:i.y-l.y},{x:Math.abs(a.x),y:Math.abs(a.y)}),s=o.x+o.y,u=s+t,d=e[n.y][n.x],j=d?d.Cost+d.spendedCost:null;return!j||j>u?{remainingCost:s,spendedCost:t,parent:c,closed:!1}:d}function R(e,n,r,t,c){if(c>100)return t;for(var a in t[n.y][n.x].closed=!0,f){var i=(s=f[a],{x:(o=n).x+s.x,y:o.y+s.y});if(I(e,i)&&D(t,i)){var l=w(t,i,r,c+1,n);if(l!==t[i.y][i.x]&&(t[i.y][i.x]=l),0===l.remainingCost)return t}}var o,s,u=function(e){var n=null,r=null;return e.forEach((function(e,t){e.forEach((function(e,c){if(e&&!e.closed){var a=e.spendedCost+e.remainingCost;n&&n<=a||(n=a,r=h(c,t))}}))})),r}(t);return u?R(e,u,r,t,c+1):t}function E(e){var n=v(e,2),r=v(e,3);if(!n||!r)return Error("Map should have Start and Finish");var t=R(e,n,r,function(e,n,r){var t=e.length,c=new Array(t).fill(0).map((function(e){return new Array(t).fill(null)}));return c[n.y][n.x]=w(c,n,r,0,null),c}(e,n,r),1);return console.log(t),function(e,n,r){var t=[];if(!e[r.y][r.x])return t;var c,a,i=!1,l=x(r);for(t.push(l);!i;)l=x(e[l.y][l.x].parent),t.push(l),a=n,(c=l).x===a.x&&c.y===a.y&&(i=!0);return t}(t,n,r)}function T(){var e=Object(t.useState)(11),n=Object(o.a)(e,2),r=n[0],c=n[1],a=Object(t.useState)(m(r)),i=Object(o.a)(a,2),d=i[0],j=i[1],b=Object(t.useState)(1),f=Object(o.a)(b,2),h=f[0],x=f[1],I=Object(t.useState)(null),D=Object(o.a)(I,2),w=D[0],R=D[1];function T(){var e=localStorage.getItem(_);e&&j(JSON.parse(e))}return Object(t.useEffect)((function(e){T()}),[]),Object(s.jsxs)("div",{className:"builder__wrap",children:[Object(s.jsx)("div",{className:"builder__left-side",children:Object(s.jsx)(y,{map:d,path:w,onCellClick:function(e){switch(h){case 1:var n=1!==d[e.y][e.x]?1:0;p(d,e,n);break;case 2:case 3:var r=v(d,h);r&&p(d,r,0),p(d,e,h),j(d)}j(Object(l.a)(d))}})}),Object(s.jsx)("div",{className:"builder__right-side",children:Object(s.jsxs)(u,{children:[Object(s.jsx)(C,{name:"World Size",children:Object(s.jsx)(N,{value:r,onChanged:function(e){var n=r+e,t=function(e,n){var r=e.length-n,t=null;if(0===r)return e;if(r>=1)t=new Array(n).fill(null).map((function(r,t){return e[t].slice(0,n)}));else{var c=new Array(Math.abs(r)).fill(0);t=new Array(n).fill(null).map((function(r,t){return e[t]?[].concat(Object(l.a)(e[t]),Object(l.a)(c)):new Array(n).fill(0)}))}return t}(d,n);c(n),j(t)}})}),Object(s.jsx)(C,{name:"Choose block type",children:Object(s.jsx)(g,{list:O,selected:h,onChange:x})}),Object(s.jsx)("br",{}),Object(s.jsxs)(C,{name:"Map storage",children:[Object(s.jsx)("button",{onClick:function(){var e=m(r);j(e)},children:"Clear"}),Object(s.jsx)("button",{onClick:function(){localStorage.setItem(_,JSON.stringify(d))},children:"Save"}),Object(s.jsx)("button",{onClick:T,children:"Load"})]}),Object(s.jsx)("br",{}),Object(s.jsx)(C,{name:"Calculate Way",children:Object(s.jsx)("button",{onClick:function(){try{var e=E(d);R(e)}catch(n){console.error(n)}},children:"Run"})})]})})]})}var k=function(){return Object(s.jsxs)("div",{className:"app__container",children:[Object(s.jsx)("header",{className:"app__header",children:Object(s.jsxs)("h1",{className:"app__header-title",children:["PathFinder: ",Object(s.jsx)("span",{className:"app__header-subtitle",children:"create map and find the shortest way from point A to point B"})]})}),Object(s.jsx)(T,{})]})},S=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,24)).then((function(n){var r=n.getCLS,t=n.getFID,c=n.getFCP,a=n.getLCP,i=n.getTTFB;r(e),t(e),c(e),a(e),i(e)}))};i.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(k,{})}),document.getElementById("root")),S()}],[[23,1,2]]]);
//# sourceMappingURL=main.134cf727.chunk.js.map