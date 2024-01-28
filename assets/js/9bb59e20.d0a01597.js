"use strict";(self.webpackChunkfragdocs=self.webpackChunkfragdocs||[]).push([[8427],{3905:(e,t,o)=>{o.d(t,{Zo:()=>m,kt:()=>y});var r=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function d(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=r.createContext({}),i=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},m=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),p=i(o),u=a,y=p["".concat(l,".").concat(u)]||p[u]||c[u]||n;return o?r.createElement(y,s(s({ref:t},m),{},{components:o})):r.createElement(y,s({ref:t},m))}));function y(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,s=new Array(n);s[0]=u;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[p]="string"==typeof e?e:a,s[1]=d;for(var i=2;i<n;i++)s[i]=o[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},65933:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>n,metadata:()=>d,toc:()=>i});var r=o(87462),a=(o(67294),o(3905));const n={title:"Adding mods",keywords:["dayz mods","dayz addons","dayz server mods","dayz server addons","dayz server workshop","dayz server steam workshop","dayz server steam workshop mods","dayz server steam workshop addons"]},s="Installation and enabling mods on your DayZ server",d={unversionedId:"games/dayz/add-mods",id:"games/dayz/add-mods",title:"Adding mods",description:"This guide will show you how to add mods to your DayZ server correctly.",source:"@site/docs/games/dayz/add-mods.md",sourceDirName:"games/dayz",slug:"/games/dayz/add-mods",permalink:"/docs/games/dayz/add-mods",draft:!1,editUrl:"https://github.com/FragnetNetwork/docs/tree/main/docs/games/dayz/add-mods.md",tags:[],version:"current",frontMatter:{title:"Adding mods",keywords:["dayz mods","dayz addons","dayz server mods","dayz server addons","dayz server workshop","dayz server steam workshop","dayz server steam workshop mods","dayz server steam workshop addons"]},sidebar:"docs",previous:{title:"DayZ",permalink:"/docs/games/dayz"},next:{title:"Adjustment of basic settings of DayZ server",permalink:"/docs/games/dayz/adjust-basic-settings"}},l={},i=[{value:"How to install mods on your server",id:"how-to-install-mods-on-your-server",level:2},{value:"How to enable mods on your server",id:"how-to-enable-mods-on-your-server",level:2}],m={toc:i},p="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installation-and-enabling-mods-on-your-dayz-server"},"Installation and enabling mods on your DayZ server"),(0,a.kt)("p",null,"This guide will show you how to add mods to your DayZ server correctly.\nBefore you proceed following the next steps, just in case something goes wrong, it will be good if you have a backup. To create a backup, you can use this article on our knowledge base: ",(0,a.kt)("a",{parentName:"p",href:"/docs/games/dayz/make-backup"},"How to create a backup for Dayz server")),(0,a.kt)("p",null,"Great. Now that you have created a backup let's focus on installing mods."),(0,a.kt)("h2",{id:"how-to-install-mods-on-your-server"},"How to install mods on your server"),(0,a.kt)("p",null,"After you login to the game panel, you will find three sections on your game panel that will help you move through mods. Three sections are ",(0,a.kt)("strong",{parentName:"p"},"Steam Workshop, Steam Workshop (installed), Steam Workshop (updates)"),". "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"To find mods, go to ",(0,a.kt)("strong",{parentName:"p"},"Steam Workshop")," and, in the ",(0,a.kt)("strong",{parentName:"p"},"Search box"),", write the mod's name.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("img",{alt:"Steam Workshop",src:o(54762).Z,width:"270",height:"138"}),"   ")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"After finding the desired mod, click the ",(0,a.kt)("strong",{parentName:"p"},"Install")," button.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("img",{alt:"Search Steam Workshop Mods",src:o(67026).Z,width:"1170",height:"358"}),"\nProceed with these steps for all mods you want to install on your server."))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Please note that after installation of mods on your server, you will also need to enable them.")),(0,a.kt)("h2",{id:"how-to-enable-mods-on-your-server"},"How to enable mods on your server"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Navigate to ",(0,a.kt)("strong",{parentName:"li"},"Commandline Manager")," and select ",(0,a.kt)("inlineCode",{parentName:"li"},"Workshop Mods")," commandline. ")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Workshop Mods Commandline",src:o(18810).Z,width:"574",height:"184"})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Restart the server, and the server will be running if everything is installed correctly.")))}c.isMDXComponent=!0},67026:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/search-steam-workshop-f9b09f78a251c6b7db5f7dc5238c1d68.png"},54762:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/steam-workshop-697338a9e6afc6626c492276efde2273.png"},18810:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/workshop-mods-commandline-de71890e6b265d434b5def74696437d2.png"}}]);