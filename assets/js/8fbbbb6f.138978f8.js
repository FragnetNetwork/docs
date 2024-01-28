"use strict";(self.webpackChunkfragdocs=self.webpackChunkfragdocs||[]).push([[7107],{3905:(e,t,A)=>{A.d(t,{Zo:()=>g,kt:()=>c});var n=A(67294);function a(e,t,A){return t in e?Object.defineProperty(e,t,{value:A,enumerable:!0,configurable:!0,writable:!0}):e[t]=A,e}function i(e,t){var A=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),A.push.apply(A,n)}return A}function r(e){for(var t=1;t<arguments.length;t++){var A=null!=arguments[t]?arguments[t]:{};t%2?i(Object(A),!0).forEach((function(t){a(e,t,A[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(A)):i(Object(A)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(A,t))}))}return e}function s(e,t){if(null==e)return{};var A,n,a=function(e,t){if(null==e)return{};var A,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)A=i[n],t.indexOf(A)>=0||(a[A]=e[A]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)A=i[n],t.indexOf(A)>=0||Object.prototype.propertyIsEnumerable.call(e,A)&&(a[A]=e[A])}return a}var o=n.createContext({}),d=function(e){var t=n.useContext(o),A=t;return e&&(A="function"==typeof e?e(t):r(r({},t),e)),A},g=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var A=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),m=d(A),l=a,c=m["".concat(o,".").concat(l)]||m[l]||p[l]||i;return A?n.createElement(c,r(r({ref:t},g),{},{components:A})):n.createElement(c,r({ref:t},g))}));function c(e,t){var A=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=A.length,r=new Array(i);r[0]=l;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[m]="string"==typeof e?e:a,r[1]=s;for(var d=2;d<i;d++)r[d]=A[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,A)}l.displayName="MDXCreateElement"},1691:(e,t,A)=>{A.r(t),A.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=A(87462),a=(A(67294),A(3905));const i={title:"Adding admins on your Path Of Titans server",keywords:["pot add admin","pot server add admin","path of titans server add admin","path of titans server admin","agid path of titans","agid path of titans server","agid pot server","agid pot"]},r="Adding admins on your Path Of Titans server",s={unversionedId:"games/pathoftitans/add-admins-find-agid",id:"games/pathoftitans/add-admins-find-agid",title:"Adding admins on your Path Of Titans server",description:"First, you will need to know Alderon Games ID to add yourself or any other player as admin.",source:"@site/docs/games/pathoftitans/add-admins-find-agid.md",sourceDirName:"games/pathoftitans",slug:"/games/pathoftitans/add-admins-find-agid",permalink:"/docs/games/pathoftitans/add-admins-find-agid",draft:!1,editUrl:"https://github.com/FragnetNetwork/docs/tree/main/docs/games/pathoftitans/add-admins-find-agid.md",tags:[],version:"current",frontMatter:{title:"Adding admins on your Path Of Titans server",keywords:["pot add admin","pot server add admin","path of titans server add admin","path of titans server admin","agid path of titans","agid path of titans server","agid pot server","agid pot"]},sidebar:"docs",previous:{title:"Path of Titans",permalink:"/docs/games/pathoftitans"},next:{title:"Create and modify player roles for your Path Of Titans server",permalink:"/docs/games/pathoftitans/add-player-role"}},o={},d=[{value:"Find your Alderon Games ID (AGID)",id:"find-your-alderon-games-id-agid",level:2},{value:"Adding AGID of admins to Game.ini",id:"adding-agid-of-admins-to-gameini",level:2},{value:"Example of Game.ini",id:"example-of-gameini",level:3}],g={toc:d},m="wrapper";function p(e){let{components:t,...i}=e;return(0,a.kt)(m,(0,n.Z)({},g,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"adding-admins-on-your-path-of-titans-server"},"Adding admins on your Path Of Titans server"),(0,a.kt)("p",null,"First, you will need to know Alderon Games ID to add yourself or any other player as admin. "),(0,a.kt)("h2",{id:"find-your-alderon-games-id-agid"},"Find your Alderon Games ID (AGID)"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"To find AGID, you can login to your account here: ",(0,a.kt)("a",{parentName:"p",href:"https://alderongames.com/login"},"https://alderongames.com/login")," and go to ",(0,a.kt)("a",{parentName:"p",href:"https://alderongames.com/me/settings"},"https://alderongames.com/me/settings"),". AGID will be located under ",(0,a.kt)("inlineCode",{parentName:"p"},"My Settings"),".  ")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"AGID",src:A(43303).Z,width:"769",height:"241"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Alternatively, you can find your AGID in Alderon Games Launcher on the top-right side. ")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Launcher AGID",src:A(23483).Z,width:"307",height:"77"})),(0,a.kt)("h2",{id:"adding-agid-of-admins-to-gameini"},"Adding AGID of admins to Game.ini"),(0,a.kt)("p",null,"You can add or remove admins by using the following steps:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 1:")," Login to the ",(0,a.kt)("a",{parentName:"p",href:"https://beta.fragify.net"},"Fragify panel")," and select your Path of Titans server."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 2:")," Ensure that the server is stopped and navigate to ",(0,a.kt)("strong",{parentName:"p"},"File Manager")," on the left side menu. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 3:")," Navigate to the following directory: ",(0,a.kt)("inlineCode",{parentName:"p"},"PathOfTitans/Saved/Config/LinuxServer"),", and you will need to click on the ",(0,a.kt)("strong",{parentName:"p"},"Game.ini")," file to edit it."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 4:")," If doesn't exist, add ",(0,a.kt)("inlineCode",{parentName:"p"},"[/Script/PathOfTitans.IGameSession]"),". Enter the Alderon Games ID(AGID) under it, and add one player per line. To remove admin, remove the line."),(0,a.kt)("h3",{id:"example-of-gameini"},"Example of Game.ini"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[/Script/PathOfTitans.IGameSession]\nServerAdmins=087-234-324\nServerAdmins=348-892-843\nServerAdmins=249-453-328\nServerAdmins=yourAGIDHere\n;comments can be made by including semi-colon in the beginning\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 5:")," Click on ",(0,a.kt)("strong",{parentName:"p"},'"Save Content"')," button and start/restart the server for the changes to be applied."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Add admins",src:A(66031).Z,width:"2009",height:"466"})))}p.isMDXComponent=!0},66031:(e,t,A)=>{A.d(t,{Z:()=>n});const n=A.p+"assets/images/add-admins-f77323c0f654a44563f74cac0fc26ba1.png"},43303:(e,t,A)=>{A.d(t,{Z:()=>n});const n="data:image/png;base64,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"},23483:(e,t,A)=>{A.d(t,{Z:()=>n});const n="data:image/png;base64,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"}}]);