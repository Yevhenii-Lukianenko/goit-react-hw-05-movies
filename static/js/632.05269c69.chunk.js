"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[632],{4632:function(e,t,r){r.r(t),r.d(t,{default:function(){return x}});var n,a,i,c,u=r(5861),s=r(9439),o=r(4687),p=r.n(o),v=r(2791),f=r(7689),h=r(168),l=r(5706),d=l.Z.ul(n||(n=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n  margin: 20px auto;\n  width: 1200px;\n"]))),m=l.Z.li(a||(a=(0,h.Z)(["\n  padding: 12px;\n  background-color: #4c4c4c;\n  border-radius: 6px;\n"]))),y=l.Z.h3(i||(i=(0,h.Z)(["\n  margin-bottom: 12px;\n"]))),g=l.Z.p(c||(c=(0,h.Z)([""]))),w=r(409),Z=r(184),k=new w.Z,x=function(){var e=(0,v.useState)([]),t=(0,s.Z)(e,2),r=t[0],n=t[1],a=(0,f.UO)().movieId;return(0,v.useEffect)((function(){var e=function(){var e=(0,u.Z)(p().mark((function e(){var t;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.getMovieReviews(a);case 2:t=e.sent,n(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[a]),(0,Z.jsx)(d,{children:r.length>0?r.map((function(e){return(0,Z.jsxs)(m,{children:[(0,Z.jsx)(y,{children:"Author: ".concat(e.author)}),(0,Z.jsx)(g,{children:e.content})]},e.id)})):"We don`t have any reviews for this movie"})}},409:function(e,t,r){var n=r(5861),a=r(5671),i=r(9466),c=r(4687),u=r.n(c),s=r(1243),o=r(5264);s.Z.defaults.baseURL="https://api.themoviedb.org/3";var p=function(){function e(){(0,a.Z)(this,e),this.apiKey="c4665b1bb83f92274dd3017d4b062627"}return(0,i.Z)(e,[{key:"getTrendingMovies",value:function(){var e=(0,n.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/trending/movie/week",{params:{api_key:this.apiKey}});case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:throw e.prev=7,e.t0=e.catch(0),o.Notify.failure("Error getting trending movies: ".concat(e.t0)),e.t0;case 11:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"searchMovies",value:function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/search/movie",{params:{api_key:this.apiKey,query:t}});case 3:return r=e.sent,e.abrupt("return",r.data.results);case 7:throw e.prev=7,e.t0=e.catch(0),o.Notify.failure("Error searching movies: ".concat(e.t0)),e.t0;case 11:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},{key:"getMovieDetails",value:function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/movie/".concat(t),{params:{api_key:this.apiKey}});case 3:return r=e.sent,e.abrupt("return",r.data);case 7:throw e.prev=7,e.t0=e.catch(0),o.Notify.failure("Error getting movie: ".concat(e.t0)),e.t0;case 11:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},{key:"getMovieCast",value:function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/movie/".concat(t,"/credits"),{params:{api_key:this.apiKey}});case 3:return r=e.sent,e.abrupt("return",r.data);case 7:throw e.prev=7,e.t0=e.catch(0),o.Notify.failure("Error getting movie cast: ".concat(e.t0)),e.t0;case 11:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},{key:"getMovieReviews",value:function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.get("/movie/".concat(t,"/reviews"),{params:{api_key:this.apiKey}});case 3:return r=e.sent,e.abrupt("return",r.data.results);case 7:throw e.prev=7,e.t0=e.catch(0),o.Notify.failure("Error getting movie review: ".concat(e.t0)),e.t0;case 11:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()}]),e}();t.Z=p}}]);
//# sourceMappingURL=632.05269c69.chunk.js.map