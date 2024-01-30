"use strict";(self.webpackChunkfragdocs=self.webpackChunkfragdocs||[]).push([[9338],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>v});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,v=d["".concat(c,".").concat(m)]||d[m]||f[m]||i;return n?r.createElement(v,o(o({ref:t},s),{},{components:n})):r.createElement(v,o({ref:t},s))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},80701:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={title:"Enabling matchmaking on Left 4 Dead 2 server",keywords:["left 4 dead 2 matchmaking","left 4 dead 2 server matchmaking setup","left 4 dead 2 server matchmaking"]},o="Enabling matchmaking on Left 4 Dead 2 server",l={unversionedId:"games/l4d2/enable-matchmaking",id:"games/l4d2/enable-matchmaking",title:"Enabling matchmaking on Left 4 Dead 2 server",description:"By default, our servers aren't open to matchmaking, meaning no other players can join via the Quick Match option in the game.",source:"@site/docs/games/l4d2/enable-matchmaking.md",sourceDirName:"games/l4d2",slug:"/games/l4d2/enable-matchmaking",permalink:"/docs/games/l4d2/enable-matchmaking",draft:!1,editUrl:"https://github.com/FragnetNetwork/docs/tree/main/docs/games/l4d2/enable-matchmaking.md",tags:[],version:"current",frontMatter:{title:"Enabling matchmaking on Left 4 Dead 2 server",keywords:["left 4 dead 2 matchmaking","left 4 dead 2 server matchmaking setup","left 4 dead 2 server matchmaking"]},sidebar:"docs",previous:{title:"Kicking players from your Left 4 Dead 2 server",permalink:"/docs/games/l4d2/kick-players"},next:{title:"Setting and editing an RCON password of your Left 4 Dead 2 server",permalink:"/docs/games/l4d2/set-rcon-password"}},c={},p=[],s={toc:p},d="wrapper";function f(e){let{components:t,...i}=e;return(0,a.kt)(d,(0,r.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"enabling-matchmaking-on-left-4-dead-2-server"},"Enabling matchmaking on Left 4 Dead 2 server"),(0,a.kt)("p",null,"By default, our servers aren't open to matchmaking, meaning no other players can join via the ",(0,a.kt)("strong",{parentName:"p"},"Quick Match")," option in the game."),(0,a.kt)("p",null,"If you wish to have a server that's available to that option, follow these steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to your Fragify game panel and stop your server.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Navigate to File Manager."))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"File Manager",src:n(79075).Z,width:"189",height:"510"})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to ",(0,a.kt)("inlineCode",{parentName:"p"},"left4dead2  /cfg / server.cfg"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Once there, go to line 31 in the server.cfg ",(0,a.kt)("inlineCode",{parentName:"p"},"sv_steamgroup_exclusive 0")," and set it to 1 at the end looking like this: ",(0,a.kt)("inlineCode",{parentName:"p"},"sv_steamgroup_exclusive 1"),"."))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Steam Group",src:n(99965).Z,width:"640",height:"609"})),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Once edited, press ",(0,a.kt)("strong",{parentName:"li"},"Save Content")," located in the top right section of the window.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Save Content",src:n(55231).Z,width:"354",height:"107"})),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},"Start the server again, and now players can join your server via ",(0,a.kt)("strong",{parentName:"li"},"Quick Match"),".")))}f.isMDXComponent=!0},79075:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"},55231:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"},99965:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/steamgroup-84ecfc08ce2eaec9906b010238984656.png"}}]);