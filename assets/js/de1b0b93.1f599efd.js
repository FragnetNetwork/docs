"use strict";(self.webpackChunkfragdocs=self.webpackChunkfragdocs||[]).push([[9338],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},A=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),g=p(n),A=r,d=g["".concat(c,".").concat(A)]||g[A]||m[A]||o;return n?a.createElement(d,i(i({ref:t},s),{},{components:n})):a.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=A;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[g]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}A.displayName="MDXCreateElement"},80701:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={},i="Enabling matchmaking on Left 4 Dead 2 server",l={unversionedId:"games/l4d2/enable-matchmaking",id:"games/l4d2/enable-matchmaking",title:"Enabling matchmaking on Left 4 Dead 2 server",description:"By default, our servers aren't open to matchmaking, meaning no other players can join via the Quick Match option in the game.",source:"@site/docs/games/l4d2/enable-matchmaking.md",sourceDirName:"games/l4d2",slug:"/games/l4d2/enable-matchmaking",permalink:"/docs/games/l4d2/enable-matchmaking",draft:!1,editUrl:"https://github.com/FragnetNetwork/docs/tree/main/docs/games/l4d2/enable-matchmaking.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Kicking players from Left 4 Dead 2 server",permalink:"/docs/games/l4d2/kick-players"},next:{title:"Set and edit an RCON password for Left 4 Dead 2 server",permalink:"/docs/games/l4d2/set-rcon-password"}},c={},p=[],s={toc:p},g="wrapper";function m(e){let{components:t,...o}=e;return(0,r.kt)(g,(0,a.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"enabling-matchmaking-on-left-4-dead-2-server"},"Enabling matchmaking on Left 4 Dead 2 server"),(0,r.kt)("p",null,"By default, our servers aren't open to matchmaking, meaning no other players can join via the ",(0,r.kt)("strong",{parentName:"p"},"Quick Match")," option in the game."),(0,r.kt)("p",null,"If you wish to have a server that's available to that option, follow these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to your Fragify game panel and stop your server.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Navigate to File Manager."))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"File Manager",src:n(77466).Z,width:"208",height:"273"})),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to ",(0,r.kt)("inlineCode",{parentName:"p"},"left4dead2  /cfg / server.cfg"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Once there, go to line 31 in the server.cfg ",(0,r.kt)("inlineCode",{parentName:"p"},"sv_steamgroup_exclusive 0")," and set it to 1 at the end looking like this: ",(0,r.kt)("inlineCode",{parentName:"p"},"sv_steamgroup_exclusive 1"),"."))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Steam Group",src:n(99965).Z,width:"640",height:"609"})),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Once edited, press ",(0,r.kt)("strong",{parentName:"p"},"Save Content")," located in the lower right section of the window.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Start the server again, and now players can join your server via ",(0,r.kt)("strong",{parentName:"p"},"Quick Match"),"."))))}m.isMDXComponent=!0},77466:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"},99965:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/steamgroup-84ecfc08ce2eaec9906b010238984656.png"}}]);