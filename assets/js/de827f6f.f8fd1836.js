"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[6187],{49613:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return k}});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=p(n),k=o,m=s["".concat(c,".").concat(k)]||s[k]||u[k]||a;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},6537:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return m},default:function(){return y},frontMatter:function(){return k},metadata:function(){return f},toc:function(){return g}});var r=n(665),o=n(40151),a=(n(59496),n(49613)),i=["components"],l={toc:[]};function c(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You need to have an Access Token that satisfies the following criteria:"),(0,a.kt)("ul",null,(0,a.kt)("li",null,"It's a valid token"),(0,a.kt)("li",null,"It's issued by your Logto instance"),(0,a.kt)("li",null,"Its audience (`aud`, i.e. the API identifier) points to ",(0,a.kt)("code",null,"https://api.logto.io"),"."),n.children&&(0,a.kt)("li",null,n.children)))}c.isMDXComponent=!0;var p=["components"],d={toc:[]};function u(e){var t=e.components,n=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Put that token in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Authorization")," field of HTTP headers with Bearer format (",(0,a.kt)("inlineCode",{parentName:"p"},"Bearer YOUR_TOKEN"),"), and you are good to go."))}u.isMDXComponent=!0;var s=["components"],k={},m="\ud83e\uddf1 Core Service",f={unversionedId:"docs/references/core/README",id:"docs/references/core/README",title:"\ud83e\uddf1 Core Service",description:"Introduction",source:"@site/docs/docs/references/core/README.mdx",sourceDirName:"docs/references/core",slug:"/docs/references/core/",permalink:"/docs/references/core/",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/references/core/README.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"\ud83d\udd0c Connectors",permalink:"/docs/references/connectors/"},next:{title:"Configuration",permalink:"/docs/references/core/configuration"}},h={},g=[{value:"Introduction",id:"introduction",level:2},{value:"OIDC Provider",id:"oidc-provider",level:2},{value:"Enabled OpenID features",id:"enabled-openid-features",level:3},{value:"Management API",id:"management-api",level:2},{value:"Authentication",id:"authentication",level:3},{value:"User API",id:"user-api",level:2},{value:"Authentication",id:"authentication-1",level:3},{value:"Frontend proxies",id:"frontend-proxies",level:2}],v={toc:g};function y(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-core-service"},"\ud83e\uddf1 Core Service"),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Core Service")," is a monolith service for critical Logto duties. The source code is in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/logto-io/logto/tree/master/packages/core"},(0,a.kt)("inlineCode",{parentName:"a"},"/packages/core")),"."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("em",{parentName:"p"},"Core Service")," and ",(0,a.kt)("em",{parentName:"p"},"SDK core")," are two separate concepts. See ",(0,a.kt)("a",{parentName:"p",href:"/docs/references/logto-sdk-convention/"},"SDK Convention")," for the differences.")),(0,a.kt)("p",null,"To simplify, we divide Core Service into four major modules:"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"Name"),(0,a.kt)("td",null,"Description"),(0,a.kt)("td",null,"Mount Path"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"OIDC Provider"),(0,a.kt)("td",null,"An"," ",(0,a.kt)("a",{href:"https://openid.net/specs/openid-connect-core-1_0.html",target:"_blank",rel:"noopener"},"OpenID Provider"),"."),(0,a.kt)("td",null,(0,a.kt)("code",null,"/oidc"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Management API"),(0,a.kt)("td",null,"APIs for managing Logto. The admin role is required."),(0,a.kt)("td",null,(0,a.kt)("code",null,"/api"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"User API"),(0,a.kt)("td",null,"APIs for the currently signed-in user."),(0,a.kt)("td",null,(0,a.kt)("code",null,"/api/me"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Frontend proxies"),(0,a.kt)("td",null,"HTTP proxies or static file serving for frontend projects."),(0,a.kt)("td",null,"See ",(0,a.kt)("a",{href:"#frontend-proxies"},"Frontend proxies")," for details.")))),(0,a.kt)("p",null,"Backend APIs, including OIDC, are built within the ",(0,a.kt)("inlineCode",{parentName:"p"},"core")," package, while frontend proxies depend on the corresponding sibling packages in the Logto monorepo."),(0,a.kt)("h2",{id:"oidc-provider"},"OIDC Provider"),(0,a.kt)("p",null,"Logto uses the amazing certified ",(0,a.kt)("a",{parentName:"p",href:"https://openid.net/connect/"},"OpenID Connect")," implementation ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/panva/node-oidc-provider"},(0,a.kt)("inlineCode",{parentName:"a"},"node-oidc-provider"))," under the hood. The provider is mounted at ",(0,a.kt)("inlineCode",{parentName:"p"},"/oidc"),", and you can check relative configurations and files in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/logto-io/logto/tree/master/packages/core/src/oidc"},(0,a.kt)("inlineCode",{parentName:"a"},"packages/core/src/oidc")),"."),(0,a.kt)("h3",{id:"enabled-openid-features"},"Enabled OpenID features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://openid.net/specs/openid-connect-core-1_0.html"},"OpenID Connect Core")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://openid.net/specs/openid-connect-discovery-1_0.html"},"OpenID Connect Discovery")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://openid.net/specs/openid-connect-rpinitiated-1_0.html"},"OpenID Connect RP-Initiated Logout")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.rfc-editor.org/rfc/rfc7009.html"},"OAuth 2.0 Token Revocation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.rfc-editor.org/rfc/rfc8707.html"},"OAuth 2.0 Resource Indicators"))),(0,a.kt)("h2",{id:"management-api"},"Management API"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Management API")," is a set of APIs that manage and update Logto data. Only users with the ",(0,a.kt)("inlineCode",{parentName:"p"},"admin")," role have access to them."),(0,a.kt)("p",null,"It's mounted at ",(0,a.kt)("inlineCode",{parentName:"p"},"/api")," (except ",(0,a.kt)("inlineCode",{parentName:"p"},"/api/me"),"). Head to ",(0,a.kt)("a",{parentName:"p",href:"/api"},"API Reference")," to see the details in your browser, or use ",(0,a.kt)("inlineCode",{parentName:"p"},"GET /api/swagger.json")," for a Swagger result in JSON."),(0,a.kt)("h3",{id:"authentication"},"Authentication"),(0,a.kt)("p",null,"Admin Console heavily depends on these APIs, while you can also call them manually."),(0,a.kt)(c,{mdxType:"BasicTokenRequirements"},"Its ",(0,a.kt)("code",null,"role_names")," array includes ",(0,a.kt)("code",null,'"admin"'),"."),(0,a.kt)(u,{mdxType:"BearerAuth"}),(0,a.kt)("h2",{id:"user-api"},"User API"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"User API")," is a set of APIs that fetch and update data of the currently signed-in user. It's mounted at ",(0,a.kt)("inlineCode",{parentName:"p"},"/api/me"),"."),(0,a.kt)("h3",{id:"authentication-1"},"Authentication"),(0,a.kt)(c,{mdxType:"BasicTokenRequirements"}),(0,a.kt)(u,{mdxType:"BearerAuth"}),(0,a.kt)("h2",{id:"frontend-proxies"},"Frontend proxies"),(0,a.kt)("p",null,"A ",(0,a.kt)("em",{parentName:"p"},"frontend proxy")," is a middleware function that serves a frontend project in an environment-related way:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If it's development, it proxies HTTP requests to the frontend dev server."),(0,a.kt)("li",{parentName:"ul"},"If it's production, it serves static frontend files directly.")),(0,a.kt)("p",null,"Logto has three frontend proxies:"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"Name"),(0,a.kt)("td",null,"Frontend Package"),(0,a.kt)("td",null,"Mount Path"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"Admin Console proxy"),(0,a.kt)("td",null,(0,a.kt)("code",null,"/packages/console")),(0,a.kt)("td",null,(0,a.kt)("code",null,"/console"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Demo app proxy"),(0,a.kt)("td",null,(0,a.kt)("code",null,"/packages/demo-app")),(0,a.kt)("td",null,(0,a.kt)("code",null,"/demo-app"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"UI (sign-in experience) proxy"),(0,a.kt)("td",null,(0,a.kt)("code",null,"/packages/ui")),(0,a.kt)("td",null,(0,a.kt)("code",null,"/"))))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"You may notice that the UI proxy uses the root path. Unlike other proxies, the UI proxy is a fallback proxy which means it only takes effect when no other proxy is matched.")))}y.isMDXComponent=!0}}]);