"use strict";(self.webpackChunkfragdocs=self.webpackChunkfragdocs||[]).push([[7266],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>k});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var i=r.createContext({}),m=function(t){var e=r.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},p=function(t){var e=m(t.components);return r.createElement(i.Provider,{value:e},t.children)},s="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,i=t.parentName,p=d(t,["components","mdxType","originalType","parentName"]),s=m(a),u=n,k=s["".concat(i,".").concat(u)]||s[u]||c[u]||l;return a?r.createElement(k,o(o({ref:e},p),{},{components:a})):r.createElement(k,o({ref:e},p))}));function k(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,o=new Array(l);o[0]=u;var d={};for(var i in e)hasOwnProperty.call(e,i)&&(d[i]=e[i]);d.originalType=t,d[s]="string"==typeof t?t:n,o[1]=d;for(var m=2;m<l;m++)o[m]=a[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},60490:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>d,toc:()=>m});var r=a(87462),n=(a(67294),a(3905));const l={title:"Adding maps",keywords:["adding maps to battlefield 3","adding maps to battlefield 3 server","adding maps to bf3","adding maps to bf3 server","bf3 maps","battlefield 3 maps","bf3 maplist","battlefield 3 maplist"]},o=void 0,d={unversionedId:"games/battlefield3/how-to-add-back-to-karkand-maps",id:"games/battlefield3/how-to-add-back-to-karkand-maps",title:"Adding maps",description:"You can add Battlefield maps by editing maplist.txt from our game panel or using Procon layer. If you would like to use Procon layer for this purpose, we would recommend checking this article",source:"@site/docs/games/battlefield3/how-to-add-back-to-karkand-maps.md",sourceDirName:"games/battlefield3",slug:"/games/battlefield3/how-to-add-back-to-karkand-maps",permalink:"/docs/games/battlefield3/how-to-add-back-to-karkand-maps",draft:!1,editUrl:"https://github.com/FragnetNetwork/docs/tree/main/docs/games/battlefield3/how-to-add-back-to-karkand-maps.md",tags:[],version:"current",frontMatter:{title:"Adding maps",keywords:["adding maps to battlefield 3","adding maps to battlefield 3 server","adding maps to bf3","adding maps to bf3 server","bf3 maps","battlefield 3 maps","bf3 maplist","battlefield 3 maplist"]},sidebar:"docs",previous:{title:"Admin guide",permalink:"/docs/games/battlefield3/bf3-admin-guide"},next:{title:"Maps and modes list",permalink:"/docs/games/battlefield3/maps-game-modes-and-slots-limitations"}},i={},m=[{value:"Maps",id:"maps",level:3},{value:"Game Modes",id:"game-modes",level:3}],p={toc:m},s="wrapper";function c(t){let{components:e,...a}=t;return(0,n.kt)(s,(0,r.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"You can add Battlefield maps by editing maplist.txt from our game panel or using Procon layer. If you would like to use Procon layer for this purpose, we would recommend checking ",(0,n.kt)("a",{parentName:"p",href:"../proconlayer/set-maps-via-procon"},"this article")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Log in to the ",(0,n.kt)("a",{parentName:"li",href:"https://gamepanel.fragnet.net"},"Game Panel"),"."),(0,n.kt)("li",{parentName:"ol"},"Click on ",(0,n.kt)("strong",{parentName:"li"},"Configuration Files"),"."),(0,n.kt)("li",{parentName:"ol"},"Choose to edit ",(0,n.kt)("inlineCode",{parentName:"li"},"Maplist.txt"),"."),(0,n.kt)("li",{parentName:"ol"},"Add maps/gametypes based on the below examples and code.")),(0,n.kt)("p",null,"Example list:  "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"XP1_001 ConquestLarge0 1  \nXP1_004 RushLarge0 2\n")),(0,n.kt)("h3",{id:"maps"},"Maps"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Engine Name")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Human Readable Name")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"XP1_001"),(0,n.kt)("td",{parentName:"tr",align:null},"Strike At Karkand")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"XP1_002"),(0,n.kt)("td",{parentName:"tr",align:null},"Gulf of Oman")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"XP1_003"),(0,n.kt)("td",{parentName:"tr",align:null},"Sharqi Peninsula")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"XP1_004"),(0,n.kt)("td",{parentName:"tr",align:null},"Wake Island (Supports all modes besides ConquestSmall1)")))),(0,n.kt)("h3",{id:"game-modes"},"Game Modes"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"th"},"Game Mode ")),(0,n.kt)("th",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"th"},"Human Readable Name (Max player count)")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"ConquestLarge0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Conquest (64)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"ConquestSmall0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Conquest (32)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"ConquestSmall1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Conquest Assault (32)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"RushLarge0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Rush (32)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"SquadRush0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Squad Rush (8)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"SquadDeathMatch0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Squad Deathmatch (16)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"TeamDeathMatch0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"Team Deathmatch (24)")))))}c.isMDXComponent=!0}}]);