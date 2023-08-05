"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[21310],{49613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},69906:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var r=n(665),o=n(40151),a=(n(59496),n(49613)),i=["components"],s={sidebar_position:4},u="Common practice: you don't need a user table",l={unversionedId:"docs/recipes/manage-users/you-dont-need-a-user-table",id:"version-1.x/docs/recipes/manage-users/you-dont-need-a-user-table",title:"Common practice: you don't need a user table",description:"Identify user",source:"@site/versioned_docs/version-1.x/docs/recipes/manage-users/you-dont-need-a-user-table.md",sourceDirName:"docs/recipes/manage-users",slug:"/docs/recipes/manage-users/you-dont-need-a-user-table",permalink:"/docs/recipes/manage-users/you-dont-need-a-user-table",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/versioned_docs/version-1.x/docs/recipes/manage-users/you-dont-need-a-user-table.md",tags:[],version:"1.x",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"Advanced User Search",permalink:"/docs/recipes/manage-users/advanced-user-search"},next:{title:"\ud83d\udc64 User Profiles",permalink:"/docs/recipes/user-profile/"}},c={},p=[{value:"Identify user",id:"identify-user",level:2},{value:"Why skip preparing a user table?",id:"why-skip-preparing-a-user-table",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"common-practice-you-dont-need-a-user-table"},"Common practice: you don't need a user table"),(0,a.kt)("h2",{id:"identify-user"},"Identify user"),(0,a.kt)("p",null,"We suggest utilizing the ",(0,a.kt)("inlineCode",{parentName:"p"},"user.id")," property to identify a user, as we ensure each user has a distinct and non-null ",(0,a.kt)("inlineCode",{parentName:"p"},"id"),". Additionally, the ",(0,a.kt)("inlineCode",{parentName:"p"},"username"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"primary_email"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"primary_phone")," properties are unique but may be empty. Therefore, it is important to handle ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," values appropriately if you intend to use these properties as identifiers for a user."),(0,a.kt)("h2",{id:"why-skip-preparing-a-user-table"},"Why skip preparing a user table?"),(0,a.kt)("p",null,"When using Logto as an identity solution, it is important to consider how to organize user information and related data. This involves defining a user schema to determine the structure and properties of a user object and deciding how to store and manage user-related data."),(0,a.kt)("p",null,"In the past, it was common for developers to create a user table in a SQL database to store a user's profile and related information. They would then establish a many-to-one relationship in other tables using a ",(0,a.kt)("inlineCode",{parentName:"p"},"user")," column that pointed back to the user table. Other identity providers, such as Google, would require the creation of a ",(0,a.kt)("inlineCode",{parentName:"p"},"google_id"),' column to enable "sign in with Google" functionality. However, this approach is not appropriate for Logto since it is not just a service provider, but also an identity provider. Logto is a comprehensive solution that can manage all user-related information, including identifiers, social connections, custom data, and more. Therefore, creating a ',(0,a.kt)("inlineCode",{parentName:"p"},"logto_id")," column is not an effective strategy."),(0,a.kt)("p",null,"Using Logto eliminates the need for a user table."),(0,a.kt)("p",null,"Forget the user table, store user info in Logto. Here is a common practice:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a ",(0,a.kt)("inlineCode",{parentName:"li"},"user_id")," column in other tables and save the user's user.id value from Logto. You can refer to the previous chapter on ",(0,a.kt)("a",{parentName:"li",href:"#identify-user"},"Identify User")," for more information."),(0,a.kt)("li",{parentName:"ol"},"Use ",(0,a.kt)("a",{parentName:"li",href:"/docs/recipes/manage-users/management-api"},"Logto's Management API")," f for CRUD operations, such as creating and updating users, getting user details, and listing users."),(0,a.kt)("li",{parentName:"ol"},"Store any additional user information in custom data. You can refer to the ",(0,a.kt)("a",{parentName:"li",href:"/docs/references/users/custom-data"},"User Custom Data")," for more information.")),(0,a.kt)("p",null,'By utilizing these methods, Logto essentially takes on the role of a "user table".'),(0,a.kt)("p",null,'For example, let\'s consider an "Online Store" application that uses Logto as its identity service. If you want to implement two features'),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Storing user preference data in the cloud"),(0,a.kt)("li",{parentName:"ol"},"Implementing access control for different groups of users")),(0,a.kt)("p",null,"Logto can facilitate both of these tasks."),(0,a.kt)("p",null,"With the help of ",(0,a.kt)("em",{parentName:"p"},"customData"),", we can quickly implement this, and the data object will be like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "appearenceMode": "DarkMode",\n  "role": "customer"\n}\n')),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},'You cannot do "join" or other complex queries on Logto\'s user storage. In this circumstance, you should use a cache layer or your own user table.')))}m.isMDXComponent=!0}}]);