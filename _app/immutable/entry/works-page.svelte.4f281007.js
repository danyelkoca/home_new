import{S,i as W,s as y,y as z,a as w,k as v,q as L,z as B,c as E,l as d,m as b,r as N,h as u,A as C,b as $,G as p,g as J,d as K,B as M,J as P,I as U,K as I,n as g,u as j}from"../chunks/index.8a2eedfd.js";import{N as D}from"../chunks/Navbar.802e9726.js";import{w as F}from"../chunks/works.515f6e9f.js";import{b as A}from"../chunks/paths.994810cf.js";function G(f,l,r){const s=f.slice();return s[1]=l[r],s}function H(f){let l,r,s,c=f[1].title.en+"",h,_,o,m,a,e,i;return{c(){l=v("li"),r=v("a"),s=v("h3"),h=L(c),_=w(),o=v("img"),i=w(),this.h()},l(t){l=d(t,"LI",{});var n=b(l);r=d(n,"A",{href:!0});var k=b(r);s=d(k,"H3",{});var q=b(s);h=N(q,c),q.forEach(u),_=E(k),o=d(k,"IMG",{src:!0,alt:!0}),k.forEach(u),i=E(n),n.forEach(u),this.h()},h(){I(o.src,m=f[1].img)||g(o,"src",m),g(o,"alt",a=f[1].id),g(r,"href",e=A+"/works/"+f[1].id)},m(t,n){$(t,l,n),p(l,r),p(r,s),p(s,h),p(r,_),p(r,o),p(l,i)},p(t,n){n&1&&c!==(c=t[1].title.en+"")&&j(h,c),n&1&&!I(o.src,m=t[1].img)&&g(o,"src",m),n&1&&a!==(a=t[1].id)&&g(o,"alt",a),n&1&&e!==(e=A+"/works/"+t[1].id)&&g(r,"href",e)},d(t){t&&u(l)}}}function O(f){let l,r,s,c,h,_,o;l=new D({});let m=f[0],a=[];for(let e=0;e<m.length;e+=1)a[e]=H(G(f,m,e));return{c(){z(l.$$.fragment),r=w(),s=v("h1"),c=L("Works"),h=w(),_=v("ul");for(let e=0;e<a.length;e+=1)a[e].c()},l(e){B(l.$$.fragment,e),r=E(e),s=d(e,"H1",{});var i=b(s);c=N(i,"Works"),i.forEach(u),h=E(e),_=d(e,"UL",{});var t=b(_);for(let n=0;n<a.length;n+=1)a[n].l(t);t.forEach(u)},m(e,i){C(l,e,i),$(e,r,i),$(e,s,i),p(s,c),$(e,h,i),$(e,_,i);for(let t=0;t<a.length;t+=1)a[t]&&a[t].m(_,null);o=!0},p(e,[i]){if(i&1){m=e[0];let t;for(t=0;t<m.length;t+=1){const n=G(e,m,t);a[t]?a[t].p(n,i):(a[t]=H(n),a[t].c(),a[t].m(_,null))}for(;t<a.length;t+=1)a[t].d(1);a.length=m.length}},i(e){o||(J(l.$$.fragment,e),o=!0)},o(e){K(l.$$.fragment,e),o=!1},d(e){M(l,e),e&&u(r),e&&u(s),e&&u(h),e&&u(_),P(a,e)}}}function Q(f,l,r){let s;return U(f,F,c=>r(0,s=c)),[s]}class Y extends S{constructor(l){super(),W(this,l,Q,O,y,{})}}export{Y as default};