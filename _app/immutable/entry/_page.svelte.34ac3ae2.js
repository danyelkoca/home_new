import{S as j,i as D,s as F,y,a as w,k as b,q as C,z as G,c as H,l as x,m as E,r as J,h as _,A,b as d,G as g,g as v,f as P,d as k,B,J as K,I as M,x as L,n as q,u as O,v as U}from"../chunks/index.8a2eedfd.js";import{N as Q,s as R}from"../chunks/Navbar.225236c6.js";import{b as N}from"../chunks/paths.8f49eaf0.js";function S(c,r,s){const o=c.slice();return o[1]=r[s],o}function z(c){let r,s,o,u=c[1].title+"",h,m,l,f,n,p;var e=c[1].component;function a(t){return{}}return e&&(l=L(e,a())),{c(){r=b("li"),s=b("a"),o=b("h3"),h=C(u),m=w(),l&&y(l.$$.fragment),n=w(),this.h()},l(t){r=x(t,"LI",{});var i=E(r);s=x(i,"A",{href:!0});var $=E(s);o=x($,"H3",{class:!0});var I=E(o);h=J(I,u),I.forEach(_),m=H($),l&&G(l.$$.fragment,$),$.forEach(_),n=H(i),i.forEach(_),this.h()},h(){q(o,"class","text-3xl font-bold underline"),q(s,"href",f=N+"/"+c[1].id)},m(t,i){d(t,r,i),g(r,s),g(s,o),g(o,h),g(s,m),l&&A(l,s,null),g(r,n),p=!0},p(t,i){if((!p||i&1)&&u!==(u=t[1].title+"")&&O(h,u),i&1&&e!==(e=t[1].component)){if(l){U();const $=l;k($.$$.fragment,1,0,()=>{B($,1)}),P()}e?(l=L(e,a()),y(l.$$.fragment),v(l.$$.fragment,1),A(l,s,null)):l=null}(!p||i&1&&f!==(f=N+"/"+t[1].id))&&q(s,"href",f)},i(t){p||(l&&v(l.$$.fragment,t),p=!0)},o(t){l&&k(l.$$.fragment,t),p=!1},d(t){t&&_(r),l&&B(l)}}}function T(c){let r,s,o,u,h,m,l;r=new Q({});let f=c[0],n=[];for(let e=0;e<f.length;e+=1)n[e]=z(S(c,f,e));const p=e=>k(n[e],1,1,()=>{n[e]=null});return{c(){y(r.$$.fragment),s=w(),o=b("h1"),u=C("Home"),h=w(),m=b("ul");for(let e=0;e<n.length;e+=1)n[e].c()},l(e){G(r.$$.fragment,e),s=H(e),o=x(e,"H1",{});var a=E(o);u=J(a,"Home"),a.forEach(_),h=H(e),m=x(e,"UL",{});var t=E(m);for(let i=0;i<n.length;i+=1)n[i].l(t);t.forEach(_)},m(e,a){A(r,e,a),d(e,s,a),d(e,o,a),g(o,u),d(e,h,a),d(e,m,a);for(let t=0;t<n.length;t+=1)n[t]&&n[t].m(m,null);l=!0},p(e,[a]){if(a&1){f=e[0];let t;for(t=0;t<f.length;t+=1){const i=S(e,f,t);n[t]?(n[t].p(i,a),v(n[t],1)):(n[t]=z(i),n[t].c(),v(n[t],1),n[t].m(m,null))}for(U(),t=f.length;t<n.length;t+=1)p(t);P()}},i(e){if(!l){v(r.$$.fragment,e);for(let a=0;a<f.length;a+=1)v(n[a]);l=!0}},o(e){k(r.$$.fragment,e),n=n.filter(Boolean);for(let a=0;a<n.length;a+=1)k(n[a]);l=!1},d(e){B(r,e),e&&_(s),e&&_(o),e&&_(h),e&&_(m),K(n,e)}}}function V(c,r,s){let o;return M(c,R,u=>s(0,o=u)),[o]}class Z extends j{constructor(r){super(),D(this,r,V,T,F,{})}}export{Z as default};
