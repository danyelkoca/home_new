import{S as g,i as v,s as $,y as q,a as p,k as d,q as x,z as G,c as h,l as y,m as H,r as I,h as c,K as N,n as b,A as S,b as f,G as k,H as w,g as z,d as A,B,I as C}from"../chunks/index.8a2eedfd.js";import{s as E}from"../chunks/story.9a64a6bd.js";import{N as K}from"../chunks/Navbar.802e9726.js";function M(i){let e,n,s,l=i[0].id+"",m,a,o,u,_;return e=new K({}),{c(){q(e.$$.fragment),n=p(),s=d("h1"),m=x(l),a=p(),o=d("img"),this.h()},l(t){G(e.$$.fragment,t),n=h(t),s=y(t,"H1",{});var r=H(s);m=I(r,l),r.forEach(c),a=h(t),o=y(t,"IMG",{src:!0,alt:!0}),this.h()},h(){N(o.src,u=i[0].img)||b(o,"src",u),b(o,"alt",i[0].img)},m(t,r){S(e,t,r),f(t,n,r),f(t,s,r),k(s,m),f(t,a,r),f(t,o,r),_=!0},p:w,i(t){_||(z(e.$$.fragment,t),_=!0)},o(t){A(e.$$.fragment,t),_=!1},d(t){B(e,t),t&&c(n),t&&c(s),t&&c(a),t&&c(o)}}}function P(i,e,n){let s;C(i,E,a=>n(2,s=a));let{data:l}=e;const m=s.filter(a=>a.id==l.episode_id)[0];return console.log(m),i.$$set=a=>{"data"in a&&n(1,l=a.data)},[m,l]}class J extends g{constructor(e){super(),v(this,e,P,M,$,{data:1})}}export{J as default};