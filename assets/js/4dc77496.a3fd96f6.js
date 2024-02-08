"use strict";(self.webpackChunkfragdocs=self.webpackChunkfragdocs||[]).push([[4423],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},f="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=l(n),u=a,g=f["".concat(c,".").concat(u)]||f[u]||m[u]||r;return n?o.createElement(g,s(s({ref:t},p),{},{components:n})):o.createElement(g,s({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[f]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<r;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},51508:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var o=n(87462),a=(n(67294),n(3905));const r={title:"Enabling in-game console of Satisfactory",keywords:["satisfactory console","satisfactory game console"]},s="Enabling in-game console of Satisfactory",i={unversionedId:"games/satisfactory/access-in-game-console",id:"games/satisfactory/access-in-game-console",title:"Enabling in-game console of Satisfactory",description:"The in-game console can be accessed by pressing the Tilde (`) key.",source:"@site/docs/games/satisfactory/access-in-game-console.md",sourceDirName:"games/satisfactory",slug:"/games/satisfactory/access-in-game-console",permalink:"/docs/games/satisfactory/access-in-game-console",draft:!1,editUrl:"https://github.com/FragnetNetwork/docs/tree/main/docs/games/satisfactory/access-in-game-console.md",tags:[],version:"current",frontMatter:{title:"Enabling in-game console of Satisfactory",keywords:["satisfactory console","satisfactory game console"]},sidebar:"docs",previous:{title:"Satisfactory",permalink:"/docs/games/satisfactory"},next:{title:"Changing server name of your Satisfactory server",permalink:"/docs/games/satisfactory/change-name-of-server"}},c={},l=[],p={toc:l},f="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(f,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"enabling-in-game-console-of-satisfactory"},"Enabling in-game console of Satisfactory"),(0,a.kt)("p",null,"The in-game console can be accessed by pressing the ",(0,a.kt)("strong",{parentName:"p"},"Tilde (`)")," key."),(0,a.kt)("p",null,"Pressing it once will open a small command line window at the bottom of the screen: "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Console",src:n(43353).Z,width:"1919",height:"1039"})),(0,a.kt)("p",null,"Pressing it twice will open a large window with a command line and logs located on the screen: "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Large Console",src:n(19567).Z,width:"1917",height:"890"})),(0,a.kt)("p",null,"You can check the full list of Satisfactory commands here: ",(0,a.kt)("a",{parentName:"p",href:"https://satisfactory.fandom.com/wiki/Console"},"https://satisfactory.fandom.com/wiki/Console")),(0,a.kt)("p",null,"If by any chance you are unable to turn on the console.\nYou can turn it on with these steps:"),(0,a.kt)("p",null,"1","."," Close your Satisfactory game."),(0,a.kt)("p",null,"2","."," Press ",(0,a.kt)("strong",{parentName:"p"},"WINDOWS + R")," to open the RUN window, and paste this line in there ",(0,a.kt)("inlineCode",{parentName:"p"},"%LOCALAPPDATA%\\FactoryGame\\Saved\\Config\\WindowsNoEditor"),"."),(0,a.kt)("p",null,"3","."," A window filled with ini files should popup. Find the file called ",(0,a.kt)("strong",{parentName:"p"},"Input.ini"),"."),(0,a.kt)("p",null,"4","."," Add these 2 lines to the bottom of the ini file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[/script/engine.inputsettings]\nConsoleKey=P\n")),(0,a.kt)("p",null,"The console key can be changed to any button you wish."),(0,a.kt)("p",null,"Launch your game, use the button you have configured, and it should work."))}m.isMDXComponent=!0},43353:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/console-f4728261871ce66a56d450f675645e4e.png"},19567:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/large-console-1a5a6342b3975d8341ae70c0f2bd211f.png"}}]);