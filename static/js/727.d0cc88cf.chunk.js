"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[727],{765:function(n,t,r){r.r(t),r.d(t,{MovieCast:function(){return b},default:function(){return g}});var e,a,u,c,i,s=r(439),o=r(791),p=r(387),f=r(689),d=r(168),h=r(444),l=h.ZP.li(e||(e=(0,d.Z)(["\n width: 220px;\n  margin: 0 auto;\n  padding: 30px 0;\n  text-align: center;\n  background-color: var(--bg);\n  box-shadow: var(--main-shadow);\n  \n  \n"]))),m=h.ZP.img(a||(a=(0,d.Z)(["\n\n  margin-bottom: 5px;\n  border-radius: 4px;\n"]))),x=h.ZP.p(u||(u=(0,d.Z)(["\n  margin-bottom: 5px;\n  font-weight: 500;\n"]))),v=h.ZP.p(c||(c=(0,d.Z)(["\n  color: var(--accent);\n"]))),w=r(184),Z=function(n){var t=n.name,r=n.role,e=n.photo_path;return(0,w.jsx)(w.Fragment,{children:(0,w.jsxs)(l,{children:[(0,w.jsx)(m,{src:"https://image.tmdb.org/t/p/w500".concat(e),alt:t}),(0,w.jsx)(x,{children:t}),(0,w.jsx)(v,{children:r})]})})},y=h.ZP.ul(i||(i=(0,d.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  \n"]))),b=function(){var n=(0,o.useState)(null),t=(0,s.Z)(n,2),r=t[0],e=t[1],a=(0,f.UO)().movieId;if((0,o.useEffect)((function(){(0,p.KH)(a).then(e)}),[a]),r)return(0,w.jsxs)(w.Fragment,{children:[0===r.length&&(0,w.jsx)("p",{children:"Sorry, we don't have any cast on this movie"}),r&&(0,w.jsx)(y,{children:r.map((function(n){return(0,w.jsx)(Z,{name:n.name,role:n.character,photo_path:n.profile_path},n.credit_id)}))})]})},g=b},387:function(n,t,r){r.d(t,{HW:function(){return p},IH:function(){return x},KH:function(){return l},sZ:function(){return s},so:function(){return d}});var e=r(861),a=r(757),u=r.n(a),c=r(388),i="5c79cb68282b6d2568848c7dc97d0ef0";function s(){return o.apply(this,arguments)}function o(){return(o=(0,e.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.Z)("trending/movie/day",{params:{api_key:i,size:20}});case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return f.apply(this,arguments)}function f(){return(f=(0,e.Z)(u().mark((function n(t){var r,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.Z)("movie/".concat(t),{params:{api_key:i,id:t}});case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n,t){return h.apply(this,arguments)}function h(){return(h=(0,e.Z)(u().mark((function n(t,r){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.Z)("search/movie",{params:{api_key:i,page:r,query:t}});case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return m.apply(this,arguments)}function m(){return(m=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.Z)("movie/".concat(t,"/credits"),{params:{api_key:i,id:t}});case 2:return r=n.sent,n.abrupt("return",r.data.cast);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return v.apply(this,arguments)}function v(){return(v=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.Z)("movie/".concat(t,"/reviews"),{params:{api_key:i,id:t}});case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}c.Z.defaults.baseURL="https://api.themoviedb.org/3"}}]);
//# sourceMappingURL=727.d0cc88cf.chunk.js.map