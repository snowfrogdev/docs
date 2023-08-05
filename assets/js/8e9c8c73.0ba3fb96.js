"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[85535],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},32577:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var a=n(665),r=n(40151),o=(n(59496),n(49613)),i=["components"],s={sidebar_position:5},l="Translation",c={unversionedId:"docs/tutorials/using-cli/translation",id:"docs/tutorials/using-cli/translation",title:"Translation",description:"These commands are for developers who want to contribute to Logto. If you just want to use Logto with custom translation, please refer to this guide.",source:"@site/docs/docs/tutorials/using-cli/translation.mdx",sourceDirName:"docs/tutorials/using-cli",slug:"/docs/tutorials/using-cli/translation",permalink:"/next/docs/tutorials/using-cli/translation",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/tutorials/using-cli/translation.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Manage database configs",permalink:"/next/docs/tutorials/using-cli/manage-database-configs"},next:{title:"Migrate configs from env",permalink:"/next/docs/tutorials/using-cli/migrate-from-env"}},u={},p=[{value:"Sync keys",id:"sync-keys",level:2},{value:"Translte keys using ChatGPT",id:"translte-keys-using-chatgpt",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"translation"},"Translation"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"These commands are for developers who want to contribute to Logto. If you just want to use Logto with custom translation, please refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/recipes/customize-sie/localized-language/"},"this guide"),".")),(0,o.kt)("h2",{id:"sync-keys"},"Sync keys"),(0,o.kt)("p",null,"Let's say we made some changes to the translation keys in the ",(0,o.kt)("inlineCode",{parentName:"p"},"en")," folder of the ",(0,o.kt)("inlineCode",{parentName:"p"},"phrases")," package. We want to sync these changes to the ",(0,o.kt)("inlineCode",{parentName:"p"},"pt-BR")," folder. Run the command below to sync translation keys and file structure:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm cli translate sync-keys --target pt-BR\n")),(0,o.kt)("p",null,"This command will read all translation keys from the source language folder (",(0,o.kt)("inlineCode",{parentName:"p"},"en")," by default) and sync them to the target language folder (",(0,o.kt)("inlineCode",{parentName:"p"},"pt-BR")," in this example)."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If the target language folder doesn't exist, it will be created automatically;"),(0,o.kt)("li",{parentName:"ul"},"If the target language folder already exists, it will be updated with new keys and removed with obsolete keys.")),(0,o.kt)("p",null,"For each translation key:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If a key is missing in the target, it will be added with a comment to indicate that the phrase is untranslated (marked with ",(0,o.kt)("inlineCode",{parentName:"li"},"// UNTRANSLATED"),");"),(0,o.kt)("li",{parentName:"ul"},"If a key is missing in the baseline, it will be removed from the target;"),(0,o.kt)("li",{parentName:"ul"},"If a key exists in both the baseline and the target, the value of the target will be used.")),(0,o.kt)("p",null,"To sync keys for all languages in the ",(0,o.kt)("inlineCode",{parentName:"p"},"phrases")," package, run the command below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm cli translate sync-keys --target all\n")),(0,o.kt)("p",null,"Thus we can focusing on updating the translation keys in the source language folder, and the translation keys in other languages will be updated automatically."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This command executes for ",(0,o.kt)("inlineCode",{parentName:"p"},"phrases")," package by default. You can specify the package name by ",(0,o.kt)("inlineCode",{parentName:"p"},"--package")," option. For example, use ",(0,o.kt)("inlineCode",{parentName:"p"},"--package phrases-ui")," to sync keys for the ",(0,o.kt)("inlineCode",{parentName:"p"},"phrases-ui")," package.")),(0,o.kt)("p",null,"After syncing keys, we can translate the keys using ChatGPT API."),(0,o.kt)("h2",{id:"translte-keys-using-chatgpt"},"Translte keys using ChatGPT"),(0,o.kt)("p",null,"Run the command below to translate keys using ChatGPT:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm cli translate sync\n")),(0,o.kt)("p",null,"This command will translate all untranslated keys (marked with ",(0,o.kt)("inlineCode",{parentName:"p"},"// UNTRANSLATED"),") across all languages in the ",(0,o.kt)("inlineCode",{parentName:"p"},"phrases")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"phrases-ui")," packages. Note an environment variable ",(0,o.kt)("inlineCode",{parentName:"p"},"OPENAI_API_KEY")," is required to run this command."))}m.isMDXComponent=!0}}]);