"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[66992],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(59496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=i,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},50940:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var r=n(665),i=n(40151),o=(n(59496),n(49613)),a=["components"],s={sidebar_label:"Social identities",sidebar_position:1},c="Social identities",l={unversionedId:"docs/references/users/social-identities",id:"docs/references/users/social-identities",title:"Social identities",description:"identities contains the user info retrieved from social sign-in",source:"@site/docs/docs/references/users/social-identities.md",sourceDirName:"docs/references/users",slug:"/docs/references/users/social-identities",permalink:"/next/docs/references/users/social-identities",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/references/users/social-identities.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Social identities",sidebar_position:1},sidebar:"docsSidebar",previous:{title:"\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66 Users",permalink:"/next/docs/references/users/"},next:{title:"Custom data",permalink:"/next/docs/references/users/custom-data"}},u={},d=[],p={toc:d};function m(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"social-identities"},"Social identities"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"identities")," contains the user info retrieved from social sign-in\n(i.e., sign-in with a social connector).\nEach user's ",(0,o.kt)("em",{parentName:"p"},"identities")," is stored in an individual JSON object."),(0,o.kt)("p",null,"The user info varies by social identity provider (i.e., social network platform), and it typically includes the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/next/docs/references/connectors/#target"},(0,o.kt)("em",{parentName:"a"},"target")),' of the identity provider, such as "facebook", "google", or "wechat"'),(0,o.kt)("li",{parentName:"ul"},"User's unique identifier for this provider"),(0,o.kt)("li",{parentName:"ul"},"User's name"),(0,o.kt)("li",{parentName:"ul"},"User's verified email"),(0,o.kt)("li",{parentName:"ul"},"User's avatar")),(0,o.kt)("p",null,"The user's account may be linked to multiple social identity providers via social sign-in;\nthe corresponding user info retrieved from these providers will be stored in the ",(0,o.kt)("em",{parentName:"p"},"identities")," object."),(0,o.kt)("p",null,"Sample ",(0,o.kt)("em",{parentName:"p"},"identities")," from a user who signed in with both WeChat and Facebook:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "facebook": {\n    "userId": "5110888888888888",\n    "details": {\n      "id": "5110888888888888",\n      "name": "John Joe",\n      "email": "johnjoe@logto.io",\n      "avatar": "https://example.com/avatar.png"\n    }\n  },\n  "wechat": {\n    "userId": "O8sU-6JWMMNZzuXo6-xaEjouyQZ8",\n    "details": {\n      "id": "O8sU-6JWMMNZzuXo6-xaEjouyQZ8",\n      "name": "John Joe",\n      "avatar": "https://example.com/avatar.png"\n    }\n  }\n}\n')),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("em",{parentName:"p"},"identities"),' can NOT be updated using "Admin Console" or "Management API".'),(0,o.kt)("p",{parentName:"admonition"},"Every time the user signs in with a social connector,\ntheir ",(0,o.kt)("em",{parentName:"p"},"identities")," will be automatically imported or updated from the identity provider.")))}m.isMDXComponent=!0}}]);