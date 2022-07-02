"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[1160],{9613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return n?o.createElement(f,a(a({ref:t},p),{},{components:n})):o.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2329:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var o=n(5443),r=n(3010),i=(n(9496),n(9613)),a=["components"],s={sidebar_label:"Connector file structure",sidebar_position:1},c="Connector file structure",l={unversionedId:"docs/recipes/create-your-connector/connector-file-structure",id:"docs/recipes/create-your-connector/connector-file-structure",title:"Connector file structure",description:"Attached is a file tree to demonstrate how are connectors' files organized as a TypeScript project.",source:"@site/docs/docs/recipes/create-your-connector/connector-file-structure.mdx",sourceDirName:"docs/recipes/create-your-connector",slug:"/docs/recipes/create-your-connector/connector-file-structure",permalink:"/docs/recipes/create-your-connector/connector-file-structure",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/recipes/create-your-connector/connector-file-structure.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Connector file structure",sidebar_position:1},sidebar:"docsSidebar",previous:{title:"\ud83e\uddd1\u200d\ud83d\udd2c Create your connector",permalink:"/docs/recipes/create-your-connector/"},next:{title:"Guide to implement connectors",permalink:"/docs/recipes/create-your-connector/connector-implementation-guide"}},p={},d=[{value:"package.json",id:"packagejson",level:2},{value:"tsconfig.*.json",id:"tsconfigjson",level:2},{value:"README.md",id:"readmemd",level:2},{value:"logo.svg",id:"logosvg",level:2},{value:"logo-dark.svg",id:"logo-darksvg",level:2},{value:"configTemplate.json",id:"configtemplatejson",level:2},{value:"index.ts",id:"indexts",level:2},{value:"index.test.ts",id:"indextestts",level:2},{value:"types.ts",id:"typests",level:2},{value:"constant.ts",id:"constantts",level:2},{value:"mock.ts",id:"mockts",level:2},{value:"utils.ts",id:"utilsts",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"connector-file-structure"},"Connector file structure"),(0,i.kt)("p",null,"Attached is a file tree to demonstrate how are connectors' files organized as a TypeScript project."),(0,i.kt)("p",null,"Files whose name ends up with ",(0,i.kt)("inlineCode",{parentName:"p"},"^")," refer to an optional file, otherwise are required."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ConnectorRootDir/\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 tsconfig.build.json\n\u251c\u2500\u2500 tsconfig.test.json^\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 logo.svg\n\u251c\u2500\u2500 logo-dark.svg^\n\u251c\u2500\u2500 docs/\n\u2502   \u2514\u2500\u2500 configTemplate.json\n\u2514\u2500\u2500 src/\n    \u251c\u2500\u2500 index.ts\n    \u251c\u2500\u2500 index.test.ts\n    \u251c\u2500\u2500 types.ts\n    \u251c\u2500\u2500 constant.ts\n    \u251c\u2500\u2500 mock.ts^\n    \u251c\u2500\u2500 utils.ts^\n    \u251c\u2500\u2500 utils.test.ts^\n    \u2514\u2500\u2500 ...\n")),(0,i.kt)("p",null,"Based on the connector file structure, let's go through each file and figure out how they work together as a whole system."),(0,i.kt)("h2",{id:"packagejson"},"package.json"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," contains configurations of this connector repo."),(0,i.kt)("h2",{id:"tsconfigjson"},"tsconfig.","*",".json"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"tsconfig.*.json")," refers to compiler configuration files including ",(0,i.kt)("inlineCode",{parentName:"p"},"tsconfig.build.json")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"tsconfig.test.json"),".",(0,i.kt)("br",null),"\nThe former ",(0,i.kt)("inlineCode",{parentName:"p"},"tsconfig.build.json")," is usually needed to configure building process while the later ",(0,i.kt)("inlineCode",{parentName:"p"},"tsconfig.test.json")," is required only when testing exists."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"To correctly complete ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"tsconfig.*.json"),", you may check other connectors for reference."))),(0,i.kt)("h2",{id:"readmemd"},"README.md"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"README.md")," is an elaborated guide for setting up the connector's config."),(0,i.kt)("h2",{id:"logosvg"},"logo.svg"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"logo.svg")," is a file that stores the connector's logo in vector image format."),(0,i.kt)("h2",{id:"logo-darksvg"},"logo-dark.svg"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"logo-dark.svg")," file contains vector graphic of connector's dark mode logo."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"See ",(0,i.kt)("a",{parentName:"p",href:"../../references/connectors/#logo"},"connector logo")," to know more about the relationship between ",(0,i.kt)("inlineCode",{parentName:"p"},"logo.svg")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"logo-dark.svg"),"."))),(0,i.kt)("h2",{id:"configtemplatejson"},"configTemplate.json"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"configTemplate.json")," gives an example of connector config."),(0,i.kt)("h2",{id:"indexts"},"index.ts"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"index.ts")," is the file for connector class implementation."),(0,i.kt)("h2",{id:"indextestts"},"index.test.ts"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"index.test.ts")," is a file containing corresponding unit tests (UTs) for implementations in ",(0,i.kt)("inlineCode",{parentName:"p"},"index.ts"),"."),(0,i.kt)("h2",{id:"typests"},"types.ts"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"types.ts")," is where you should define variables' types."),(0,i.kt)("h2",{id:"constantts"},"constant.ts"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"constant.ts")," is where you should put constants related to the connector, including endpoints, connector metadata, etc."),(0,i.kt)("h2",{id:"mockts"},"mock.ts"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"mock.ts")," is the file you may put mocked values for testing purposes."),(0,i.kt)("h2",{id:"utilsts"},"utils.ts"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"utils.ts")," is the file where developers put utility functions, and ",(0,i.kt)("inlineCode",{parentName:"p"},"utils.test.ts")," should contain relating UTs."))}m.isMDXComponent=!0}}]);