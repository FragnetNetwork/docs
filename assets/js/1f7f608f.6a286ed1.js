"use strict";(self.webpackChunkfragdocs=self.webpackChunkfragdocs||[]).push([[5161],{3905:(e,a,t)=>{t.d(a,{Zo:()=>g,kt:()=>h});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function A(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=n.createContext({}),l=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):A(A({},a),e)),t},g=function(e){var a=l(e.components);return n.createElement(i.Provider,{value:a},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),c=l(t),d=r,h=c["".concat(i,".").concat(d)]||c[d]||u[d]||o;return t?n.createElement(h,A(A({ref:a},g),{},{components:t})):n.createElement(h,A({ref:a},g))}));function h(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,A=new Array(o);A[0]=d;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s[c]="string"==typeof e?e:r,A[1]=s;for(var l=2;l<o;l++)A[l]=t[l];return n.createElement.apply(null,A)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},86946:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>A,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=t(87462),r=(t(67294),t(3905));const o={sidebar_position:7},A="MySQL Databases",s={unversionedId:"fragify/databases",id:"fragify/databases",title:"MySQL Databases",description:"Databased are commonly used by plugins or mods to store large amounts of data efficiently.",source:"@site/docs/fragify/databases.md",sourceDirName:"fragify",slug:"/fragify/databases",permalink:"/docs/fragify/databases",draft:!1,editUrl:"https://github.com/FragnetNetwork/docs/tree/main/docs/fragify/databases.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"docs",previous:{title:"Subdomains",permalink:"/docs/fragify/subdomains"},next:{title:"Crash alerts",permalink:"/docs/fragify/crash-alerts"}},i={},l=[{value:"Limits",id:"limits",level:2},{value:"Creating a database",id:"creating-a-database",level:2},{value:"Managing your databases",id:"managing-your-databases",level:2},{value:"View",id:"view",level:4},{value:"Database backups",id:"database-backups",level:2},{value:"Deleting a database",id:"deleting-a-database",level:2}],g={toc:l},c="wrapper";function u(e){let{components:a,...o}=e;return(0,r.kt)(c,(0,n.Z)({},g,o,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mysql-databases"},"MySQL Databases"),(0,r.kt)("p",null,"Databased are commonly used by plugins or mods to store large amounts of data efficiently."),(0,r.kt)("h2",{id:"limits"},"Limits"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The number of databases you can create depends on the server plan you have purchased (1 by default for free)."),(0,r.kt)("li",{parentName:"ul"},"The size of your database does not count towards your server's disk usage.")),(0,r.kt)("h2",{id:"creating-a-database"},"Creating a database"),(0,r.kt)("p",null,"To create a database, head over to your server's ",(0,r.kt)("strong",{parentName:"p"},"Databases")," tab and click the ",(0,r.kt)("strong",{parentName:"p"},"New Database")," button."),(0,r.kt)("p",null,"In the modal that appears, you can enter:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Database Name:")," This should only contain alphanumeric characters, underscores, dashes, and/or periods."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Connections From:")," This is the IP address that the database should allow connections from. You can use the percentage ",(0,r.kt)("inlineCode",{parentName:"li"},"%")," symbol to allow connections from anywhere.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"managing-your-databases"},"Managing your databases"),(0,r.kt)("p",null,"Once your database is created, you should see the following:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Database Overview",src:t(96345).Z,width:"832",height:"213"})),(0,r.kt)("h4",{id:"view"},"View"),(0,r.kt)("p",null,"The view button will reveal more information about your database, including the username and password you can use to connect to it."),(0,r.kt)("p",null,"You can then use the ",(0,r.kt)("strong",{parentName:"p"},"PHPMyAdmin")," button to manage your database using the corresponding username/password."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"database-backups"},"Database backups"),(0,r.kt)("p",null,"You can create database backups by heading over to your server's ",(0,r.kt)("strong",{parentName:"p"},"Backups")," tab and clicking the ",(0,r.kt)("strong",{parentName:"p"},"Create Backup")," button. You can also restore or download backups from this page."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"deleting-a-database"},"Deleting a database"),(0,r.kt)("p",null,"To delete a database, head over to your server's ",(0,r.kt)("strong",{parentName:"p"},"Databases")," tab and click the ",(0,r.kt)("strong",{parentName:"p"},"Trash")," icon next to the database you want to delete."),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Deleting a database is ireversible. All data will be lost.\nIf you accidently deleted your database and you have a backup, you can restore it from the ",(0,r.kt)("strong",{parentName:"p"},"Backups")," tab.")))}u.isMDXComponent=!0},96345:(e,a,t)=>{t.d(a,{Z:()=>n});const n="data:image/png;base64,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"}}]);