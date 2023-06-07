"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[37554],{49613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var o=r(59496);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},s=Object.keys(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),c=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(r),f=n,m=d["".concat(p,".").concat(f)]||d[f]||l[f]||s;return r?o.createElement(m,a(a({ref:t},u),{},{components:r})):o.createElement(m,a({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,a=new Array(s);a[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var c=2;c<s;c++)a[c]=r[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},60535:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return l}});var o=r(665),n=r(40151),s=(r(59496),r(49613)),a=["components"],i={sidebar_position:3.1},p=void 0,c={unversionedId:"sdk/Swift/Logto/Enums/LogtoErrors.Response",id:"sdk/Swift/Logto/Enums/LogtoErrors.Response",title:"LogtoErrors.Response",description:"ENUM",source:"@site/docs/sdk/Swift/Logto/Enums/LogtoErrors.Response.md",sourceDirName:"sdk/Swift/Logto/Enums",slug:"/sdk/Swift/Logto/Enums/LogtoErrors.Response",permalink:"/next/sdk/Swift/Logto/Enums/LogtoErrors.Response",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/sdk/Swift/Logto/Enums/LogtoErrors.Response.md",tags:[],version:"current",sidebarPosition:3.1,frontMatter:{sidebar_position:3.1},sidebar:"sdkSidebar",previous:{title:"LogtoErrors",permalink:"/next/sdk/Swift/Logto/Enums/LogtoErrors"},next:{title:"LogtoErrors.UriVerification",permalink:"/next/sdk/Swift/Logto/Enums/LogtoErrors.UriVerification"}},u={},l=[{value:"Cases",id:"cases",level:2},{value:"<code>notHttpResponse(response:)</code>",id:"nothttpresponseresponse",level:3},{value:"<code>withCode(code:httpResponse:data:)</code>",id:"withcodecodehttpresponsedata",level:3}],d={toc:l};function f(e){var t=e.components,r=(0,n.Z)(e,a);return(0,s.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"ENUM")),(0,s.kt)("h1",{id:"logtoerrorsresponse"},(0,s.kt)("inlineCode",{parentName:"h1"},"LogtoErrors.Response")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-swift"},"public enum Response: LocalizedError, Equatable\n")),(0,s.kt)("h2",{id:"cases"},"Cases"),(0,s.kt)("h3",{id:"nothttpresponseresponse"},(0,s.kt)("inlineCode",{parentName:"h3"},"notHttpResponse(response:)")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-swift"},"case notHttpResponse(response: URLResponse?)\n")),(0,s.kt)("h3",{id:"withcodecodehttpresponsedata"},(0,s.kt)("inlineCode",{parentName:"h3"},"withCode(code:httpResponse:data:)")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-swift"},"case withCode(code: Int, httpResponse: HTTPURLResponse, data: Data?)\n")))}f.isMDXComponent=!0}}]);