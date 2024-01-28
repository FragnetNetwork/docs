"use strict";(self.webpackChunkfragdocs=self.webpackChunkfragdocs||[]).push([[3238],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>f});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),p=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(i.Provider,{value:r},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),c=p(t),m=a,f=c["".concat(i,".").concat(m)]||c[m]||d[m]||o;return t?n.createElement(f,s(s({ref:r},l),{},{components:t})):n.createElement(f,s({ref:r},l))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=m;var u={};for(var i in r)hasOwnProperty.call(r,i)&&(u[i]=r[i]);u.originalType=e,u[c]="string"==typeof e?e:a,s[1]=u;for(var p=2;p<o;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},91119:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var n=t(87462),a=(t(67294),t(3905));const o={title:"Warm-up and pre-round",keywords:["bf4 warm-up","bf4 warm-up","bf4 warm-up","bf4 warm-up","bf4 warm-up","bf4 warm-up"]},s=void 0,u={unversionedId:"games/battlefield4/warm-up-and-pre-round",id:"games/battlefield4/warm-up-and-pre-round",title:"Warm-up and pre-round",description:"When a server first starts up, there are no players on it and the server is in warm-up state.",source:"@site/docs/games/battlefield4/warm-up-and-pre-round.md",sourceDirName:"games/battlefield4",slug:"/games/battlefield4/warm-up-and-pre-round",permalink:"/docs/games/battlefield4/warm-up-and-pre-round",draft:!1,editUrl:"https://github.com/FragnetNetwork/docs/tree/main/docs/games/battlefield4/warm-up-and-pre-round.md",tags:[],version:"current",frontMatter:{title:"Warm-up and pre-round",keywords:["bf4 warm-up","bf4 warm-up","bf4 warm-up","bf4 warm-up","bf4 warm-up","bf4 warm-up"]},sidebar:"docs",previous:{title:"Player slots",permalink:"/docs/games/battlefield4/player-slots"},next:{title:"DayZ",permalink:"/docs/games/dayz"}},i={},p=[],l={toc:p},c="wrapper";function d(e){let{components:r,...t}=e;return(0,a.kt)(c,(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"When a server first starts up, there are no players on it and the server is in warm-up state. "),(0,a.kt)("p",null,"Warm-up is a state where players can move around, complete objectives and so on, but scoring is disabled. Once the required number of players is reached, the game will reset the level and transition into pre-round. In pre-round, a timer counts down to the round start; players cannot move, shoot or take objectives during pre-round. When the timer has run out, the actual round begins. Players can move freely, take objectives and scoring is enabled during the round."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If the number of players drops beneath the minimum threshold during the round, the round will be aborted and the server switches back to warm-up.")),(0,a.kt)("p",null,"You can change the number of players required to go between warm-up and in-round using\xa0",(0,a.kt)("strong",{parentName:"p"},"vars.roundStartPlayerCount"),"\xa0and\xa0",(0,a.kt)("strong",{parentName:"p"},"vars.roundRestartPlayerCount"),"\xa0in the\xa0startup.txt."),(0,a.kt)("p",null,"The start player count must be higher than the restart player count \u2013 so if you set the starting player count below the restart player count, the engine will silently assume that the restart player count is one lower than the start player count."))}d.isMDXComponent=!0}}]);