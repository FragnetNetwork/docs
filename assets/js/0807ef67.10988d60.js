"use strict";(self.webpackChunkfragdocs=self.webpackChunkfragdocs||[]).push([[6990],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>f});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(t),u=a,f=c["".concat(s,".").concat(u)]||c[u]||m[u]||o;return t?r.createElement(f,i(i({ref:n},d),{},{components:t})):r.createElement(f,i({ref:n},d))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},50742:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const o={title:"Send a console command",keywords:["api","server","command","send","console","execute","run","console command"]},i="Send Command",l={unversionedId:"fragify/api/server/sending-a-command",id:"fragify/api/server/sending-a-command",title:"Send a console command",description:"This endpoint sends a command to the server. The server must be online to send a command to it. You will get HTTP 502 if the server is not online.",source:"@site/docs/fragify/api/server/sending-a-command.md",sourceDirName:"fragify/api/server",slug:"/fragify/api/server/sending-a-command",permalink:"/docs/fragify/api/server/sending-a-command",draft:!1,editUrl:"https://github.com/FragnetNetwork/docs/tree/main/docs/fragify/api/server/sending-a-command.md",tags:[],version:"current",frontMatter:{title:"Send a console command",keywords:["api","server","command","send","console","execute","run","console command"]},sidebar:"docs",previous:{title:"Accessing the console",permalink:"/docs/fragify/api/server/websocket"},next:{title:"Control the power state of a server",permalink:"/docs/fragify/api/server/power-actions"}},s={},p=[{value:"Endpoint",id:"endpoint",level:2},{value:"Headers",id:"headers",level:2},{value:"Example Request",id:"example-request",level:2},{value:"Fields",id:"fields",level:2},{value:"Example Failed Response",id:"example-failed-response",level:2},{value:"Server Offline",id:"server-offline",level:3}],d={toc:p},c="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(c,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"send-command"},"Send Command"),(0,a.kt)("p",null,"This endpoint sends a command to the server. The server must be online to send a command to it. You will get HTTP 502 if the server is not online."),(0,a.kt)("h2",{id:"endpoint"},"Endpoint"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"POST /api/client/servers/{server}/command")),(0,a.kt)("h2",{id:"headers"},"Headers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Accept"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"application/json")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Content-Type"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"application/json")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Authorization"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"Bearer your_api_key"))),(0,a.kt)("h2",{id:"example-request"},"Example Request"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST "https://beta.fragify.net/api/client/servers/{server}/command"\n    -H "Authorization: Bearer your_api_key"\n    -H "Accept: application/json"\n    -H "Content-Type: application/json"\n    -d \'{"command": "your_command_here"}\'\n')),(0,a.kt)("h2",{id:"fields"},"Fields"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Required?"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Rules"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"command")),(0,a.kt)("td",{parentName:"tr",align:null},"required"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Command to send"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h2",{id:"example-failed-response"},"Example Failed Response"),(0,a.kt)("h3",{id:"server-offline"},"Server Offline"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "errors": [\n        {\n            "code": "HttpException",\n            "status": "502",\n            "detail": "An error was encountered while processing this request."\n        }\n    ]\n}\n')))}m.isMDXComponent=!0}}]);