"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[291],{291:function(n,t,e){e.r(t),e.d(t,{MovieReviews:function(){return x},default:function(){return y}});var r,a,u,c,i=e(439),s=e(791),o=e(387),p=e(689),f=e(168),l=e(444),d=l.ZP.ul(r||(r=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n"]))),h=(l.ZP.li(a||(a=(0,f.Z)(["\n"]))),l.ZP.p(u||(u=(0,f.Z)(["\n  margin-bottom: 8px;\n  font-size: 22px;\n  color: var(--accent);\n"])))),v=l.ZP.p(c||(c=(0,f.Z)(["\n  font-size: 16px;\n  color: var(--secondary);\n  line-height: 1.68;\n"]))),m=e(184),x=function(){var n=(0,s.useState)(null),t=(0,i.Z)(n,2),e=t[0],r=t[1],a=(0,p.UO)().movieId;if((0,s.useEffect)((function(){(0,o.IH)(a).then(r)}),[a]),e)return(0,m.jsx)(d,{children:0===e.length?(0,m.jsx)(v,{children:"There are no reviews yet"}):(0,m.jsx)("ul",{children:e.map((function(n){return(0,m.jsxs)("li",{children:[(0,m.jsxs)(h,{children:["Written by ",n.author,","," ",n.created_at.substring(0,10)]}),n.content]},n.id)}))})})},y=x},387:function(n,t,e){e.d(t,{HW:function(){return p},IH:function(){return m},KH:function(){return h},sZ:function(){return s},so:function(){return l}});var r=e(861),a=e(757),u=e.n(a),c=e(388),i="5c79cb68282b6d2568848c7dc97d0ef0";function s(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.Z)("trending/movie/day",{params:{api_key:i,size:20}});case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.Z)("movie/".concat(t),{params:{api_key:i,id:t}});case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n,t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(u().mark((function n(t,e){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.Z)("search/movie",{params:{api_key:i,page:e,query:t}});case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.Z)("movie/".concat(t,"/credits"),{params:{api_key:i,id:t}});case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.Z)("movie/".concat(t,"/reviews"),{params:{api_key:i,id:t}});case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}c.Z.defaults.baseURL="https://api.themoviedb.org/3"}}]);
//# sourceMappingURL=291.11579601.chunk.js.map