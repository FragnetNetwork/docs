"use strict";(self.webpackChunkfragdocs=self.webpackChunkfragdocs||[]).push([[6372],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),f=r,y=p["".concat(s,".").concat(f)]||p[f]||d[f]||o;return n?a.createElement(y,i(i({ref:t},u),{},{components:n})):a.createElement(y,i({ref:t},u))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},44093:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:9},i="2-Factor Authentication",c={unversionedId:"fragify/2fa",id:"fragify/2fa",title:"2-Factor Authentication",description:"Take caution and only enable 2FA on a trusted device. If you lose access to this device, you will not be able to access your account.",source:"@site/docs/fragify/2fa.md",sourceDirName:"fragify",slug:"/fragify/2fa",permalink:"/docs/fragify/2fa",draft:!1,editUrl:"https://github.com/FragnetNetwork/docs/tree/main/docs/fragify/2fa.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"docs",previous:{title:"Crash alerts",permalink:"/docs/fragify/crash-alerts"},next:{title:"Discord Bots",permalink:"/docs/discord-bots"}},s={},l=[{value:"Enabling 2FA",id:"enabling-2fa",level:2}],u={toc:l},p="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(p,(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"2-factor-authentication"},"2-Factor Authentication"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Take caution and only enable 2FA on a trusted device. If you lose access to this device, you will not be able to access your account.")),(0,r.kt)("h2",{id:"enabling-2fa"},"Enabling 2FA"),(0,r.kt)("p",null,"To enable 2FA, head over to the ",(0,r.kt)("a",{parentName:"p",href:"https://beta.fragify.net/account"},(0,r.kt)("strong",{parentName:"a"},"Account"))," tab and click the ",(0,r.kt)("strong",{parentName:"p"},"Enable Two-Step")," button."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"2FA Prompt",src:n(66252).Z,width:"961",height:"833"})),(0,r.kt)("p",null,"You will then be presented with a QR code and a code that you can use to set up 2FA on your device. We recommend that you use an application like ",(0,r.kt)("a",{parentName:"p",href:"https://authy.com/"},"Authy")," to scan the QR code and generate the 2FA code."),(0,r.kt)("p",null,"Once you've installed the Authy app, clikc on the + button and select ",(0,r.kt)("strong",{parentName:"p"},"Scan QR Code"),". You will then be prompted to scan the QR code."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If this is the first time you are using Authy, you will now be prompted to set a ",(0,r.kt)("inlineCode",{parentName:"p"},"Backup Password"),". This password is used to recover your account if you lose access to your device. Make sure to write this down and keep it in a safe place.")),(0,r.kt)("p",null,"Now pick a name for your 2fa account and click ",(0,r.kt)("strong",{parentName:"p"},"Save"),"."),(0,r.kt)("p",null,"You will then see the generated 2FA code. Enter this code into the panel, along with your current Fragify account password and click ",(0,r.kt)("strong",{parentName:"p"},"Enable"),"."),(0,r.kt)("p",null,"If 2FA was enabled successfully, you will see the following message:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"2FA Enabled",src:n(27901).Z,width:"841",height:"505"})),(0,r.kt)("p",null,"Congratulations! You have successfully enabled 2FA on your account."))}d.isMDXComponent=!0},27901:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2fa-enabled-8094dbeac0ae20a8560c2900678baefe.png"},66252:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/2fa-prompt-653a1ac57e3d0e43f2dbd34eeda7e7b3.png"}}]);