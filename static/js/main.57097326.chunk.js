(this.webpackJsonppath_finder=this.webpackJsonppath_finder||[]).push([[0],[,,,,,,,,,,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var r=t(2),c=t.n(r),a=t(8),i=t.n(a),l=(t(14),t(15),t(4)),o=t(5),s=(t(16),t(0));function u(e){return Object(s.jsxs)("div",{className:"builder-controls__container",children:[Object(s.jsx)("div",{className:"builder-controls__name",children:"Control your world:"}),Object(s.jsx)("div",{className:"builder-controls__proxy-box",children:e.children.map((function(e,n){return Object(s.jsx)("div",{className:"builder-controls__child-box",children:e},n)}))})]})}var d,j=t(9),b=t(1),f="[DIRECTION] DIR_UP",h="[DIRECTION] DIR_UP_RIGHT",O="[DIRECTION] DIR_RIGHT",x="[DIRECTION] DIR_RIGHT_DOWN",_="[DIRECTION] DIR_DOWN",m="[DIRECTION] DIR_DOWN_LEFT",v="[DIRECTION] DIR_LEFT",y="[DIRECTION] DIR_LEFT_UP",p=(d={},Object(b.a)(d,f,{x:0,y:-1}),Object(b.a)(d,h,{x:1,y:-1}),Object(b.a)(d,O,{x:1,y:0}),Object(b.a)(d,x,{x:1,y:1}),Object(b.a)(d,_,{x:0,y:1}),Object(b.a)(d,m,{x:-1,y:1}),Object(b.a)(d,v,{x:-1,y:0}),Object(b.a)(d,y,{x:-1,y:-1}),d),C=function(e,n){return{x:e,y:n}},g=function(e){return Object(j.a)({},e)},N="[Local storage] MapID",I=[{id:1,name:"Wall"},{id:2,name:"Start"},{id:3,name:"Finish"}];function D(e){return new Array(e).fill(0).map((function(n){return new Array(e).fill(0)}))}function w(e,n){for(var t=0;t<e.length;t++)for(var r=0;r<e[t].length;r++)if(e[t][r]===n)return C(r,t);return null}function R(e,n,t){var r=n.x;e[n.y][r]=t}t(18);function E(e){var n={};return I.forEach((function(e){n[e.id]=e.name})),!!e.map&&Object(s.jsx)("div",{className:"grid-renderer__container",children:Object(s.jsx)("div",{className:"grid-renderer__content",children:e.map.map((function(t,r){return Object(s.jsx)("div",{className:"grid-renderer__row",children:t.map((function(t,c){var a=Array.isArray(e.path)&&!!e.path.find((function(e){return e.x===c&&e.y===r}))?"grid-renderer__cell__path":"",i=t?"grid-renderer__cell__"+n[t].toLowerCase():"";return Object(s.jsx)("div",{className:"grid-renderer__cell ".concat(a," ").concat(i),onClick:function(n){return function(n,t){var r=C(n,t);e.onCellClick&&e.onCellClick(r)}(c,r)}},"cell_".concat(c,":").concat(r))}))},"row_"+r)}))})})}t(19);function T(e){return Object(s.jsxs)("div",{className:"control-wrap__container",children:[Object(s.jsxs)("div",{className:"control-wrap__name",children:[e.name,": "]}),Object(s.jsx)("div",{className:"control-wrap__proxy-box",children:e.children||"placeholder"})]})}t(20);function k(e){return Object(s.jsxs)("div",{className:"number-selector__container",children:[Object(s.jsx)("div",{className:"number-selector__control",onClick:function(n){return e.onChanged(-1)},children:"-"}),Object(s.jsx)("div",{className:"number-selector__display",children:e.value}),Object(s.jsx)("div",{className:"number-selector__control",onClick:function(n){return e.onChanged(1)},children:"+"})]})}t(21);function S(e){return Object(s.jsx)("div",{className:"array-selector__container",children:e.list.map((function(n){return Object(s.jsx)("div",{className:"array-selector__item ".concat(n.id===e.selected?"array-selector__item__selected":""),onClick:function(t){return r=n.id,void(e.onChange&&e.onChange(r));var r},children:n.name},n.id)}))})}t(22);var A,F=(A={},Object(b.a)(A,f,10),Object(b.a)(A,O,10),Object(b.a)(A,_,10),Object(b.a)(A,v,10),Object(b.a)(A,h,14),Object(b.a)(A,x,14),Object(b.a)(A,m,14),Object(b.a)(A,y,14),A);function M(e,n){var t=n.x,r=n.y,c=e.length;return t>=0&&r>=0&&t<c&&r<c&&1!==e[r][t]}function L(e,n){var t=n.x,r=n.y;return!e[r][t]||!e[r][t].closed}function P(e,n){var t,r=(t=function(e,n){return{x:e.x-n.x,y:e.y-n.y}}(e,n),{x:Math.abs(t.x),y:Math.abs(t.y)}),c=Math.min(r.x,r.y);return 14*c+10*(Math.max(r.x,r.y)-c)}function W(e,n,t,r,c){var a=P(n,t),i=a+r,l=e[n.y][n.x],o=l?l.remainingCost+l.spendedCost:null;return!o||o>i?{remainingCost:a,spendedCost:r,parent:c,closed:!1}:l}function J(e,n,t,r,c){if(c>1e4)return r;for(var a in r[n.y][n.x].closed=!0,p){var i=F[a],l=(u=p[a],{x:(s=n).x+u.x,y:s.y+u.y});if(M(e,l)&&L(r,l)){var o=W(r,l,t,c+i,n);if(o!==r[l.y][l.x]&&(r[l.y][l.x]=o),0===o.remainingCost)return r}}var s,u,d=function(e){var n=null,t=null,r=null;return e.forEach((function(e,c){e.forEach((function(e,a){if(e&&!e.closed){var i=e.spendedCost+e.remainingCost;(!r||n>i||n===i&&t>e.remainingCost)&&(n=i,t=e.remainingCost,r=C(a,c))}}))})),r}(r),j=r[d.y][d.x].spendedCost;return d?J(e,d,t,r,j):r}function B(e){var n=w(e,2),t=w(e,3);return n&&t?function(e,n,t){var r=[];if(!e[t.y][t.x])return r;var c,a,i=!1,l=g(t);for(r.push(l);!i;)l=g(e[l.y][l.x].parent),r.push(l),a=n,(c=l).x===a.x&&c.y===a.y&&(i=!0);return r}(J(e,n,t,function(e,n,t){var r=e.length,c=new Array(r).fill(0).map((function(e){return new Array(r).fill(null)}));return c[n.y][n.x]=W(c,n,t,0,null),c}(e,n,t),0),n,t):Error("Map should have Start and Finish")}function G(){var e=Object(r.useState)(11),n=Object(o.a)(e,2),t=n[0],c=n[1],a=Object(r.useState)(D(t)),i=Object(o.a)(a,2),d=i[0],j=i[1],b=Object(r.useState)(1),f=Object(o.a)(b,2),h=f[0],O=f[1],x=Object(r.useState)(null),_=Object(o.a)(x,2),m=_[0],v=_[1];function y(e){j(e),function(e){try{var n=B(e);v(n)}catch(t){console.error(t)}}(e)}function p(){var e=localStorage.getItem(N),n=JSON.parse(e);n&&(y(n),c(n.length))}return Object(r.useEffect)((function(e){p()}),[]),Object(s.jsxs)("div",{className:"builder__wrap",children:[Object(s.jsx)("div",{className:"builder__left-side",children:Object(s.jsx)(E,{map:d,path:m,onCellClick:function(e){switch(h){case 1:var n=1!==d[e.y][e.x]?1:0;R(d,e,n);break;case 2:case 3:var t=w(d,h);t&&R(d,t,0),R(d,e,h),y(d)}y(Object(l.a)(d))}})}),Object(s.jsx)("div",{className:"builder__right-side",children:Object(s.jsxs)(u,{children:[Object(s.jsx)(T,{name:"World Size",children:Object(s.jsx)(k,{value:t,onChanged:function(e){var n=t+e,r=function(e,n){var t=e.length-n,r=null;if(0===t)return e;if(t>=1)r=new Array(n).fill(null).map((function(t,r){return e[r].slice(0,n)}));else{var c=new Array(Math.abs(t)).fill(0);r=new Array(n).fill(null).map((function(t,r){return e[r]?[].concat(Object(l.a)(e[r]),Object(l.a)(c)):new Array(n).fill(0)}))}return r}(d,n);c(n),y(r)}})}),Object(s.jsx)(T,{name:"Choose block type",children:Object(s.jsx)(S,{list:I,selected:h,onChange:O})}),Object(s.jsx)("br",{}),Object(s.jsxs)(T,{name:"Map storage",children:[Object(s.jsx)("button",{onClick:function(){y(D(t))},children:"Clear"}),Object(s.jsx)("button",{onClick:function(){localStorage.setItem(N,JSON.stringify(d))},children:"Save"}),Object(s.jsx)("button",{onClick:p,children:"Load"})]}),Object(s.jsx)("br",{}),Array.isArray(m)&&m.length&&Object(s.jsx)(T,{name:"Path length",children:Object(s.jsx)("span",{children:m.length})})]})})]})}var H=function(){return Object(s.jsxs)("div",{className:"app__container",children:[Object(s.jsx)("header",{className:"app__header",children:Object(s.jsxs)("h1",{className:"app__header-title",children:["PathFinder: ",Object(s.jsx)("span",{className:"app__header-subtitle",children:"create map and find the shortest way from point A to point B"})]})}),Object(s.jsx)(G,{})]})},U=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,24)).then((function(n){var t=n.getCLS,r=n.getFID,c=n.getFCP,a=n.getLCP,i=n.getTTFB;t(e),r(e),c(e),a(e),i(e)}))};i.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(H,{})}),document.getElementById("root")),U()}],[[23,1,2]]]);
//# sourceMappingURL=main.57097326.chunk.js.map