"use strict";(self.webpackChunkfragdocs=self.webpackChunkfragdocs||[]).push([[7740],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>b});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=n.createContext({}),c=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(u.Provider,{value:r},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=c(t),d=a,b=p["".concat(u,".").concat(d)]||p[d]||f[d]||o;return t?n.createElement(b,s(s({ref:r},l),{},{components:t})):n.createElement(b,s({ref:r},l))}));function b(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=d;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},21992:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=t(87462),a=(t(67294),t(3905));const o={sidebar_position:6},s="Subusers",i={unversionedId:"fragify/subusers",id:"fragify/subusers",title:"Subusers",description:"Subusers allow you to grant limited or full access to your server to another user, without sharing your credentials.",source:"@site/docs/fragify/subusers.md",sourceDirName:"fragify",slug:"/fragify/subusers",permalink:"/docs/fragify/subusers",draft:!1,editUrl:"https://github.com/FragnetNetwork/docs/tree/main/docs/fragify/subusers.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docs",previous:{title:"Deleting a backup",permalink:"/docs/fragify/backups/deleting-a-backup"},next:{title:"Subdomains",permalink:"/docs/fragify/subdomains"}},u={},c=[{value:"Creating a subuser",id:"creating-a-subuser",level:2}],l={toc:c},p="wrapper";function f(e){let{components:r,...t}=e;return(0,a.kt)(p,(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"subusers"},"Subusers"),(0,a.kt)("p",null,"Subusers allow you to grant ",(0,a.kt)("inlineCode",{parentName:"p"},"limited")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"full")," access to your server to another user, without sharing your credentials."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"creating-a-subuser"},"Creating a subuser"),(0,a.kt)("p",null,"To create a subuser, head over to your server's ",(0,a.kt)("strong",{parentName:"p"},"Users")," tab and click the ",(0,a.kt)("strong",{parentName:"p"},"New User")," button."),(0,a.kt)("p",null,"Simply, fill in the user's email address that you want to grant access to, and select the permissions the account should have."),(0,a.kt)("p",null,"Once you have created the subuser, an email will be sent to the user with a link to set their account password."))}f.isMDXComponent=!0}}]);