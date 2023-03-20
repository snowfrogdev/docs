"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[64449],{49613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return l}});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),l=r,f=d["".concat(p,".").concat(l)]||d[l]||m[l]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function l(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},60317:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return l},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return m}});var a=n(665),r=n(40151),o=(n(59496),n(49613)),i=["components"],s={sidebar_label:"Custom data",sidebar_position:2},p="Custom data",u={unversionedId:"docs/references/users/custom-data",id:"docs/references/users/custom-data",title:"Custom data",description:"customdata_ stores additional user info not listed in the pre-defined user properties.",source:"@site/docs/docs/references/users/custom-data.md",sourceDirName:"docs/references/users",slug:"/docs/references/users/custom-data",permalink:"/docs/references/users/custom-data",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/references/users/custom-data.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Custom data",sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Social identities",permalink:"/docs/references/users/social-identities"}},c={},m=[],d={toc:m};function l(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"custom-data"},"Custom data"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"custom_data")," stores additional user info not listed in the pre-defined user properties."),(0,o.kt)("p",null,"You can use ",(0,o.kt)("em",{parentName:"p"},"custom_data")," to do the following things:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Record whether specific actions have been done by the user, such as having seen the welcome page."),(0,o.kt)("li",{parentName:"ul"},"Store application-specific data in the user profile, such as the user's preferred language and appearance per application."),(0,o.kt)("li",{parentName:"ul"},"Maintain other arbitrary data related to the user.")),(0,o.kt)("p",null,"Sample ",(0,o.kt)("em",{parentName:"p"},"custom_data")," from an admin user in Logto:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "adminConsolePreferences": {\n    "language": "en",\n    "appearanceMode": "system",\n    "experienceNoticeConfirmed": true\n  },\n  "customDataFoo": {\n    "foo": "foo"\n  },\n  "customDataBar": {\n    "bar": "bar"\n  }\n}\n')),(0,o.kt)("p",null,"Each user's ",(0,o.kt)("em",{parentName:"p"},"custom_data")," is stored in an individual JSON object."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"DO NOT put sensitive data in ",(0,o.kt)("em",{parentName:"mdxAdmonitionTitle"},"custom_data")),(0,o.kt)("p",{parentName:"admonition"},"You may fetch a user profile containing ",(0,o.kt)("em",{parentName:"p"},"custom_data")," using Management API and send it to the frontend apps or external backend services.\nTherefore, putting the sensitive information in ",(0,o.kt)("em",{parentName:"p"},"custom_data")," may cause data leaks."),(0,o.kt)("p",{parentName:"admonition"},"If you still want to put the sensitive information in ",(0,o.kt)("em",{parentName:"p"},"custom_data"),", we recommend encrypting it first.\nOnly encrypt/decrypt it in a trusted party like your backend services, and avoid doing it in the frontend apps.\nThese will minimize the loss if your users' ",(0,o.kt)("em",{parentName:"p"},"custom_data")," is leaked by mistake.")),(0,o.kt)("p",null,"You can update the user's ",(0,o.kt)("em",{parentName:"p"},"custom_data")," using\n",(0,o.kt)("a",{parentName:"p",href:"/docs/recipes/manage-users/admin-console#view-and-update-user-profile"},"Admin Console")," or\n",(0,o.kt)("a",{parentName:"p",href:"/docs/recipes/manage-users/management-api"},"Management API"),",\nsuch as ",(0,o.kt)("a",{href:"/api/#tag/Users/paths/~1api~1users~1:userId/patch",target:"_blank"},(0,o.kt)("inlineCode",{parentName:"p"},"PATCH /api/users/:userId")),"."),(0,o.kt)("admonition",{title:"Update carefully",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Updating a user's ",(0,o.kt)("em",{parentName:"p"},"custom_data")," will completely overwrite its original content in the storage."),(0,o.kt)("p",{parentName:"admonition"},"For example, if your input of calling update ",(0,o.kt)("em",{parentName:"p"},"custom_data")," API looks like this (suppose that the original ",(0,o.kt)("em",{parentName:"p"},"custom_data")," is previous shown sample data):"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "customDataBaz": {\n    "baz": "baz"\n  }\n}\n')),(0,o.kt)("p",{parentName:"admonition"},"then new ",(0,o.kt)("em",{parentName:"p"},"custom_data")," value after updating should be:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "customDataBaz": {\n    "baz": "baz"\n  }\n}\n')),(0,o.kt)("p",{parentName:"admonition"},"That is, the updated field value has nothing to do with the previous value.")))}l.isMDXComponent=!0}}]);