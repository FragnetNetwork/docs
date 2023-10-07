"use strict";(self.webpackChunkfragdocs=self.webpackChunkfragdocs||[]).push([[1684],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=c(n),v=a,g=s["".concat(p,".").concat(v)]||s[v]||m[v]||o;return n?r.createElement(g,i(i({ref:t},d),{},{components:n})):r.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=v;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},8735:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"Adding admins",keywords:["dont starve together","dont starve together admins","dont starve together adding admins"]},i=void 0,l={unversionedId:"games/dontstarvetogether/adding-admins",id:"games/dontstarvetogether/adding-admins",title:"Adding admins",description:"Adding admins to your Don\u2019t Starve Together server requires creating an adminlist.txt file at a specific location.",source:"@site/docs/games/dontstarvetogether/adding-admins.md",sourceDirName:"games/dontstarvetogether",slug:"/games/dontstarvetogether/adding-admins",permalink:"/docs/games/dontstarvetogether/adding-admins",draft:!1,editUrl:"https://github.com/FragnetNetwork/docs/tree/main/docs/games/dontstarvetogether/adding-admins.md",tags:[],version:"current",frontMatter:{title:"Adding admins",keywords:["dont starve together","dont starve together admins","dont starve together adding admins"]},sidebar:"docs",previous:{title:"Don't Starve Together",permalink:"/docs/games/dontstarvetogether"},next:{title:"Adding Mods",permalink:"/docs/games/dontstarvetogether/adding-mods"}},p={},c=[{value:"Getting your Klei_ID",id:"getting-your-klei_id",level:2},{value:"Method 1",id:"method-1",level:3},{value:"Method 2",id:"method-2",level:3},{value:"Creating the adminlist.txt file",id:"creating-the-adminlisttxt-file",level:2}],d={toc:c},s="wrapper";function m(e){let{components:t,...o}=e;return(0,a.kt)(s,(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Adding admins to your Don\u2019t Starve Together server requires creating an ",(0,a.kt)("strong",{parentName:"p"},"adminlist.txt")," file at a specific location."),(0,a.kt)("p",null,"Let's start by getting your ",(0,a.kt)("strong",{parentName:"p"},"Klei_ID"),". There are 2 ways to do this:"),(0,a.kt)("h2",{id:"getting-your-klei_id"},"Getting your Klei_ID"),(0,a.kt)("h3",{id:"method-1"},"Method 1"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Connect to your server and type ",(0,a.kt)("inlineCode",{parentName:"p"},"c_listallplayers()")," in the console.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"You will see a list of players connected to the server. Find your name and copy the ",(0,a.kt)("strong",{parentName:"p"},"Klei_ID"),"."))),(0,a.kt)("h3",{id:"method-2"},"Method 2"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to ",(0,a.kt)("a",{parentName:"p",href:"https://accounts.klei.com/account/game"},"Klei Entertainment")," and log in with your Steam account.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Once logged in, you will see your ",(0,a.kt)("strong",{parentName:"p"},"Klei_ID"),"."))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("img",{alt:"Klei ID",src:n(98596).Z,width:"1075",height:"361"}))),(0,a.kt)("h2",{id:"creating-the-adminlisttxt-file"},"Creating the adminlist.txt file"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open up your ",(0,a.kt)("strong",{parentName:"li"},"File Manager")," on your game panel. ")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"File Manager",src:n(79075).Z,width:"189",height:"510"})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to this directory: ",(0,a.kt)("inlineCode",{parentName:"p"},"DoNotStarveTogether => config => server"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Once there, click on ",(0,a.kt)("strong",{parentName:"p"},"New File")," located in the upper right corner of the panel."))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("img",{alt:"New File",src:n(24567).Z,width:"444",height:"67"}))),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"The file will open up, paste your ",(0,a.kt)("inlineCode",{parentName:"li"},"Klei_ID")," in the first line and then click on ",(0,a.kt)("strong",{parentName:"li"},"Create File")," in the lower right corner. ")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("img",{alt:"Create File",src:n(48046).Z,width:"306",height:"111"}))),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"It will prompt you to name the file. It\u2019s very important to name it ",(0,a.kt)("strong",{parentName:"p"},"adminlist.txt"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Afterwards, click on Create File and Start/Restart you server and connect to it."))),(0,a.kt)("p",null,"If successfully done, you should see a star icon near your character portrait:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Character portrait",src:n(22336).Z,width:"107",height:"95"})))}m.isMDXComponent=!0},22336:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"},48046:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATIAAABvCAMAAABYf7xqAAAA+VBMVEUMEBrcYyQfJDAzMzMJDBT/AADm9v/K0djcY3bjmiSGSRoMEHYMEFLhYyTj6OrhAgMMbq1EEBo6DRWUBwtJDBPcs9MZHibksyRoEBngx+qGvcTm2ZucBwvoAgLm6LnKvZTj6P/KpXYqKy2f0a3cY5szHRcWEBbxAQGGvdif0cQUFyAMSZSfbhqkBgrl9uovNT8xMTKpTiA9IRlYCxLm9tO4xNG2vZS2jFLh2f+grLpopdjdmrmf0dgNERrk9tPK0cREjMTE0a3lx3bj6NOWoa6TvaEuDRZBDBRnChCCCA3KBAa20dhopcSfn62GjK1obq3lx5tRCxPCBAfdWHzkAAADGElEQVR42uzQsQ2AMAwF0R/IDB4gEilSBfrsvxY1dFawEOLeBKfT8ntyYhnLWBbPWObVWOZjTfAZAgAAAAAAXzas9PU9vdjQ1bHVHKRuh+ZZaXpTK3Y/tqcw+xPPvMcCnunCd8z/TNO6QvkLagpVNW1VKH9BTqEyy1jGMpad7NfLboJAFAZg3YxVoJGFTKckIqkLG41utNyaar2sen3/p+n8AxGtkIwmTtrk/IEBHNh8OXMEhMiIjMiIjMiIjMh0QmQ1ZNbDXaMm/4Ls5rZtjKzbkokOyKznSTlrj1rI67GntXOvSZYxmXUlgODHUAPcykXfMUoWKqX6KrMeO79/Gj9dk0xM2826xLymtkyTNdIIZCtVb/Z9x959tVrLTkkGVcytArcxfvuQ9wU6aJ5XjtpkQ4gBYZOxudOMGes7TRwYV0XFmxnGQ6ien58JhidMkEEFZHlLA9kolBOBW5LZo4na0xAjpnSyTTwplmzPIutBSC06nAhf7Ugml9+AK1PsJ2R4EruZXjZpFGTwUhtW3wHZGN1sFUm2RaGpk9ki8bxkMbuQjOcDrFT5vYCsuCHm+142dwqyeK1uMlFlCMigt6wiAywCLdiBTNcMYpeRoYKGTAarTeCQkwmGrE+qTPmxadsgGSDqqqy8+AxcbTKYQeyyXgYODIjw91UGIOSEDJWHGCbr1lQZOhiSRth0yWA2O/8fc+6UHLAqDkJVWWla1csMk+EdLHyvJIMZWl4auHgjkRf6aGeSQYDJ8IIDy9BXC/R742CKq4uq9q8e7Dv0wfRnP5jqQ2RERmRERmRERmQ6ITIiIzIi+2nfDnEQBoIwjI5Bk0AForWtqoE7AMXB/Q9DQkOK646hDbx3hE/Mmn8lk+wvkxl+mhfPzYt/acTeVi+H49pH7Mt/lWibzYfuuvqvEitQbya3czCvmortg3m7/fYdbHsJCnuN+jYo7NWNdz8o7NWfonH3M73GN3MICnuNdu5+YS/00itDrxy9ljX1aup7kOlVBXrplaFXjl45euXolaPX0iq9sh56ZQ16AQAAAAAAAHzLE3aKfijfvhCwAAAAAElFTkSuQmCC"},98596:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/klei-id-website-52f2cc014cd2208192c77313219f5380.png"},24567:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"},79075:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"}}]);