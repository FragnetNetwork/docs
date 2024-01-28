"use strict";(self.webpackChunkfragdocs=self.webpackChunkfragdocs||[]).push([[365],{3905:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>m});var r=o(67294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,r,i=function(e,t){if(null==e)return{};var o,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var d=r.createContext({}),c=function(e){var t=r.useContext(d),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},l=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,i=e.mdxType,n=e.originalType,d=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=c(o),u=i,m=p["".concat(d,".").concat(u)]||p[u]||g[u]||n;return o?r.createElement(m,s(s({ref:t},l),{},{components:o})):r.createElement(m,s({ref:t},l))}));function m(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=o.length,s=new Array(n);s[0]=u;var a={};for(var d in t)hasOwnProperty.call(t,d)&&(a[d]=t[d]);a.originalType=e,a[p]="string"==typeof e?e:i,s[1]=a;for(var c=2;c<n;c++)s[c]=o[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},92532:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>g,frontMatter:()=>n,metadata:()=>a,toc:()=>c});var r=o(87462),i=(o(67294),o(3905));const n={title:"Setting up your DiscordGSM bot",keywords:["discorgsm setup","discordgsm installation","discordgsm bot install","discordgsm bot setup","discordgsm bot installation"]},s="Setting up your DiscordGSM bot",a={unversionedId:"discord-bots/discordgsm/setting-up-discordgsm",id:"discord-bots/discordgsm/setting-up-discordgsm",title:"Setting up your DiscordGSM bot",description:"This guide will include enabling developer mode in your Discord account, generating tokens for your bot, and getting a guild ID (server ID) to set up DiscordGSM properly.",source:"@site/docs/discord-bots/discordgsm/setting-up-discordgsm.md",sourceDirName:"discord-bots/discordgsm",slug:"/discord-bots/discordgsm/setting-up-discordgsm",permalink:"/docs/discord-bots/discordgsm/setting-up-discordgsm",draft:!1,editUrl:"https://github.com/FragnetNetwork/docs/tree/main/docs/discord-bots/discordgsm/setting-up-discordgsm.md",tags:[],version:"current",frontMatter:{title:"Setting up your DiscordGSM bot",keywords:["discorgsm setup","discordgsm installation","discordgsm bot install","discordgsm bot setup","discordgsm bot installation"]},sidebar:"docs",previous:{title:"DiscordGSM",permalink:"/docs/discord-bots/discodgsm"},next:{title:"Games",permalink:"/docs/games/"}},d={},c=[{value:"Enabling Developer Mode for your Discord account",id:"enabling-developer-mode-for-your-discord-account",level:2},{value:"Generate Discord Bot Token",id:"generate-discord-bot-token",level:2}],l={toc:c},p="wrapper";function g(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"setting-up-your-discordgsm-bot"},"Setting up your DiscordGSM bot"),(0,i.kt)("p",null,"This guide will include enabling developer mode in your Discord account, generating tokens for your bot, and getting a guild ID (server ID) to set up DiscordGSM properly."),(0,i.kt)("h2",{id:"enabling-developer-mode-for-your-discord-account"},"Enabling Developer Mode for your Discord account"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Launch your Discord application and click the Settings icon next to your profile.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Settings",src:o(17964).Z,width:"154",height:"64"})),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Navigate to ",(0,i.kt)("strong",{parentName:"li"},"Advanced")," option under ",(0,i.kt)("inlineCode",{parentName:"li"},"App Settings")," and toggle on ",(0,i.kt)("strong",{parentName:"li"},"Developer Mode")," function.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Developer Mode",src:o(42468).Z,width:"1032",height:"961"})),(0,i.kt)("h2",{id:"generate-discord-bot-token"},"Generate Discord Bot Token"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go to ",(0,i.kt)("a",{parentName:"li",href:"https://discord.com/developers/applications"},"https://discord.com/developers/applications")," and click on ",(0,i.kt)("strong",{parentName:"li"},"New Application")," button on top-right side.\nName the bot and agree to the Terms of Service. Afterwards, click on the ",(0,i.kt)("strong",{parentName:"li"},"Create")," button.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"New Application",src:o(84202).Z,width:"2054",height:"755"})),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"You will be redirected to the ",(0,i.kt)("strong",{parentName:"li"},"Bot")," page, and you can click on the ",(0,i.kt)("strong",{parentName:"li"},"Reset Token")," button to get a new token for your bot. Copy the token that you have seen ")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Reset Token",src:o(56902).Z,width:"2129",height:"497"})),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Login to the ",(0,i.kt)("a",{parentName:"p",href:"https://beta.fragify.net"},"Fragify panel")," and select your DiscordGSM server.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to ",(0,i.kt)("strong",{parentName:"p"},"Configure")," option on the left-side menu and paste your token in ",(0,i.kt)("strong",{parentName:"p"},"Discord Bot Token"),"."))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Discord Bot Token",src:o(40637).Z,width:"1332",height:"400"})),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"The bot will also need a Guild ID (Server ID) to work. You can obtain it by going to your Discord application => right-clicking on the server to which you would like the bot to send messages, and clicking on the ",(0,i.kt)("strong",{parentName:"li"},"Copy Server ID")," option.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Guild ID",src:o(30662).Z,width:"184",height:"474"})),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},"Paste the Guild ID in ",(0,i.kt)("strong",{parentName:"li"},"Whitelisted Guilds")," which is located on Fragify panel in ",(0,i.kt)("strong",{parentName:"li"},"Configure")," options. ")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Whhitelisted Guilds",src:o(33997).Z,width:"918",height:"1072"})),(0,i.kt)("ol",{start:7},(0,i.kt)("li",{parentName:"ol"},"Afterwards, you can try to start the server, and you will see the following error:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"discordgsm The client does not have the applications.commands scope in the guild. 403 Forbidden (error code: 50001)\n")),(0,i.kt)("p",null,"In this case, go to the URL provided on the startup of your bot. Click on the ",(0,i.kt)("strong",{parentName:"p"},"Continue")," button and ",(0,i.kt)("strong",{parentName:"p"},"Authorise")," bot. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"URL",src:o(98377).Z,width:"1153",height:"194"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Grant Permission",src:o(7702).Z,width:"358",height:"523"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Authorise",src:o(73536).Z,width:"388",height:"611"})),(0,i.kt)("ol",{start:8},(0,i.kt)("li",{parentName:"ol"},"Afterwards, you can use the list of commands from here: ",(0,i.kt)("a",{parentName:"li",href:"https://discordgsm.com/guide/commands"},"https://discordgsm.com/guide/commands")," and Game IDs provided here: ",(0,i.kt)("a",{parentName:"li",href:"https://discordgsm.com/guide/supported-games"},"https://discordgsm.com/guide/supported-games"))))}g.isMDXComponent=!0},73536:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/authorise-3d5da15f4832ce8518be3d6e7a555aa0.png"},42468:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/developer-mode-b878ee17d0366b24529fcbbd963e6935.png"},40637:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/discord-bot-token-b126cdd4f8a55d37d0c52c4d366cb115.png"},7702:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/grant-permission-182aeebbf15e354027ae83ffe2b62e65.png"},30662:(e,t,o)=>{o.d(t,{Z:()=>r});const r="data:image/png;base64,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"},84202:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/new-application-d046826b03925730580e0e4cea390700.png"},56902:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/reset-token-f830e544130bbf5785c039525b493b57.png"},17964:(e,t,o)=>{o.d(t,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJoAAABACAMAAADVhJ5sAAAAeFBMVEUjJCgxMzgrLTHyPDwiISG1usHyP0K+ODtDQ0MSEhQhICBEQ0MkIyNXKy48JyvYPD81NztxLjKjp65CQUKQlJtISk5FREWkNDcfHx+LMjVaXGJ+gYfnOjohIibRNzfENTaVLS6FKiwaGRxsb3VmIiMpGBqsLzBcIyar5bTyAAAC7ElEQVRo3u3ZiXKbMBAAUFqXNcHWhY0BX7nb///D7q7YMESOw3QUnOloJ4gFCemNMIfj7Of88WNaJFqiJVqi/RvtBpFoifZBJNoX0vTD/eKzODfqBjR3XEyKx9lpGmXTQs1NaxZT435u2hkHfXi9ux6vL9jqODdtgVGePml0aqnZLWiBLIxb0bJE+69p1n4ZTSm/XposDNcAxtJprIeLtEOeb7+GppcARpEMlqHaADRdszSgqT6g0YRVTLN1fJrhWbkscwDOZyIb0+q8qus8z6t9XVXP0WkkM+qiTIPRPhP5mIaqIVAZmeauyIzhtci0fkez1YiWRaeJLIgOupEMXHhC2bTl1T4qTbvMiczp4CXDjM+mCS6DPYq2lqYvJk0GVzJn0LyvZY/IqDXoEe3As2UptTx5h4i0DpTurz0FLqB1gyygEYei56CSmPFoCjoZuQEV0tA9yPQlmtxtq9i0rJMrQHEZ3vFEpgzQ1oj2TFNV2Tdmhcx4NBnZAagLVTDIKcyIxiJvs4Ss410GIpNHVRDuTaaBowuvUJ4shMWn8cgI6y7W6uHalEkb08a3XBuRJvcrc+1sK5BJU9cfVHkdiyYy5Yxx7orM9K8A2CY8odWeffh4j3hCRSYz8oGMq5zxH8bwpcjf0rb8ehSPpv0n3FGILKxXPtcfveUy7RD7VVKPtibWhzRr7bf9bvCNv7YkWqIl2rehHflfoZ+FvgXt92JqnOem/ZlMe5yb1j5MlN23c9Oyp5fzBNjx8ek0Oy1r76bE0yn9RpVoESIyrdgVxWq12eBSrCgvaBv/VlRyinVYtSk22GS3w/27FaZY7graKjZ8EHZRcGcbLAqfFz6jWr/GHoaQtlxNsSt832xZZb8o1i2VPuWyxKXlfI15SZlslViWJS5vR6wpL+U4adl31Y46Lqnk5P1o1KtP2/4opPHY/W4eV9rxWlhDlD764elQ3rmmnFPuBYs1FT5az5Kx1zJqKXRq3vo+qaCe/wLxiETzqQzo6QAAAABJRU5ErkJggg=="},98377:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/url-f032d07b6b3702674e2d2daa37f15311.png"},33997:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/whitelist-guild-5eccb77248258da799fe855004af7a23.png"}}]);