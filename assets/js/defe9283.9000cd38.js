"use strict";(self.webpackChunkfragdocs=self.webpackChunkfragdocs||[]).push([[1528],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),u=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},m=function(e){var t=u(e.components);return o.createElement(p.Provider,{value:t},e.children)},c="mdxType",i={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=u(r),d=n,f=c["".concat(p,".").concat(d)]||c[d]||i[d]||a;return r?o.createElement(f,s(s({ref:t},m),{},{components:r})):o.createElement(f,s({ref:t},m))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:n,s[1]=l;for(var u=2;u<a;u++)s[u]=r[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},76326:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>i,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var o=r(87462),n=(r(67294),r(3905));const a={title:"Loading custom map on your Rust server",keywords:["rust server custom map setup","rust server custom map install","rust server level url"]},s="How to load the custom map on your Rust Server",l={unversionedId:"games/rust/load-custom-map",id:"games/rust/load-custom-map",title:"Loading custom map on your Rust server",description:"It is possible to have a custom map on the Rust Server apart from the original ones, and it's relatively easy to load one. You can get custom maps from http://playrust.io/",source:"@site/docs/games/rust/load-custom-map.md",sourceDirName:"games/rust",slug:"/games/rust/load-custom-map",permalink:"/docs/games/rust/load-custom-map",draft:!1,editUrl:"https://github.com/FragnetNetwork/docs/tree/main/docs/games/rust/load-custom-map.md",tags:[],version:"current",frontMatter:{title:"Loading custom map on your Rust server",keywords:["rust server custom map setup","rust server custom map install","rust server level url"]},sidebar:"docs",previous:{title:"Installing RustIO on your RUST server",permalink:"/docs/games/rust/installing-rustio"},next:{title:"Primitive Game Mode",permalink:"/docs/games/rust/primitive-gamemode"}},p={},u=[],m={toc:u},c="wrapper";function i(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,o.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"how-to-load-the-custom-map-on-your-rust-server"},"How to load the custom map on your Rust Server"),(0,n.kt)("p",null,"It is possible to have a custom map on the Rust Server apart from the original ones, and it's relatively easy to load one. You can get custom maps from ",(0,n.kt)("a",{parentName:"p",href:"http://playrust.io/"},"http://playrust.io/"),"\nor ",(0,n.kt)("a",{parentName:"p",href:"https://rustmaps.com/"},"https://rustmaps.com/"),"."),(0,n.kt)("p",null,"Just follow these simple steps:"),(0,n.kt)("p",null,"1",".","  Upload your custom .map file to Dropbox."),(0,n.kt)("p",null,"2",".","  Once uploaded, copy the download link."),(0,n.kt)("p",null,"3",".","  Login to the ",(0,n.kt)("a",{parentName:"p",href:"https://beta.fragify.net/auth/login"},"Fragify panel")," and select your Rust server."),(0,n.kt)("p",null,"4",".","  Navigate to the ",(0,n.kt)("strong",{parentName:"p"},"Configure")," option on the left-side menu and look for ",(0,n.kt)("strong",{parentName:"p"},"Server Level URL")," variable under ",(0,n.kt)("inlineCode",{parentName:"p"},"World")," settings."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Server Level URL",src:r(87739).Z,width:"1640",height:"692"})),(0,n.kt)("p",null,"5",".","  Paste the download link. Example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"}," https://www.dropbox.com/s/<randomcharacters>/<mapname>.map?dl=0\n")),(0,n.kt)("p",null,"6",".","  Change the ",(0,n.kt)("strong",{parentName:"p"},"dl=0")," to ",(0,n.kt)("strong",{parentName:"p"},"dl=1")," in that link.  Example: "),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"https://www.dropbox.com/s/<randomcharacters>/<mapname>.map?dl=1\n")),(0,n.kt)("p",null,"7",".","  Once done, restart the server so the changes can take effect."),(0,n.kt)("p",null,"You have now successfully added a custom map to your Rust server!"))}i.isMDXComponent=!0},87739:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/server-lvl-url-d8b3565cfe620c1f981ea3bc0dadbf31.png"}}]);