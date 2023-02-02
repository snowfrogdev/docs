"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[3290],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},81907:function(e,t,n){n.d(t,{Z:function(){return i}});n(59496);var r=n(45924),o="tabItem_B9jv",a=n(4637);function i(e){var t=e.children,n=e.hidden,i=e.className;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n,children:t})}},19774:function(e,t,n){n.d(t,{Z:function(){return w}});var r=n(59496),o=n(45924),a=n(43226),i=n(55660),s=n(59731),l=n(58867);function c(e){return function(e){return r.Children.map(e,(function(e){if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function u(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:c(n);return function(e){var t=(0,s.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function d(e){var t=e.queryString,n=void 0!==t&&t,o=e.groupId,s=(0,a.k6)(),l=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:o});return[(0,i._X)(l),(0,r.useCallback)((function(e){if(l){var t=new URLSearchParams(s.location.search);t.set(l,e),s.replace(Object.assign({},s.location,{search:t.toString()}))}}),[l,s])]}function h(e){var t,n,o,a,i=e.defaultValue,s=e.queryString,c=void 0!==s&&s,h=e.groupId,m=u(e),f=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var o=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:i,tabValues:m})})),k=f[0],g=f[1],v=d({queryString:c,groupId:h}),b=v[0],N=v[1],y=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:h}.groupId),n=(0,l.Nk)(t),o=n[0],a=n[1],[o,(0,r.useCallback)((function(e){t&&a.set(e)}),[t,a])]),w=y[0],C=y[1],T=function(){var e=null!=b?b:w;return p({value:e,tabValues:m})?e:null}();return(0,r.useEffect)((function(){T&&g(T)}),[T]),{selectedValue:k,selectValue:(0,r.useCallback)((function(e){if(!p({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);g(e),N(e),C(e)}),[N,C,m]),tabValues:m}}var m=n(75831),f=n(75836),k="tabList_tI2j",g="tabItem_zDC9",v=n(4637);function b(e){var t=e.className,n=e.block,r=e.selectedValue,a=e.selectValue,i=e.tabValues,s=[],l=(0,m.o5)().blockElementScrollPositionUntilNextRender,c=function(e){var t=e.currentTarget,n=s.indexOf(t),o=i[n].value;o!==r&&(l(t),a(o))},u=function(e){var t,n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var r,o=s.indexOf(e.currentTarget)+1;n=null!=(r=s[o])?r:s[0];break;case"ArrowLeft":var a,i=s.indexOf(e.currentTarget)-1;n=null!=(a=s[i])?a:s[s.length-1]}null==(t=n)||t.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t),children:i.map((function(e){var t=e.value,n=e.label,a=e.attributes;return(0,v.jsx)("li",Object.assign({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:function(e){return s.push(e)},onKeyDown:u,onClick:c},a,{className:(0,o.Z)("tabs__item",g,null==a?void 0:a.className,{"tabs__item--active":r===t}),children:null!=n?n:t}),t)}))})}function N(e){var t=e.lazy,n=e.children,o=e.selectedValue;if(t){var a=n.find((function(e){return e.props.value===o}));return a?(0,r.cloneElement)(a,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:n.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==o})}))})}function y(e){var t=h(e);return(0,v.jsxs)("div",{className:(0,o.Z)("tabs-container",k),children:[(0,v.jsx)(b,Object.assign({},e,t)),(0,v.jsx)(N,Object.assign({},e,t))]})}function w(e){var t=(0,f.Z)();return(0,v.jsx)(y,Object.assign({},e),String(t))}},93149:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return h}});var r=n(665),o=n(40151),a=(n(59496),n(49613)),i=n(81907),s=n(19774),l=["components"],c={},u="Protect your API Resource with RBAC",p={unversionedId:"docs/recipes/rbac/protect-resource",id:"docs/recipes/rbac/protect-resource",title:"Protect your API Resource with RBAC",description:"This page assumes you have configured roles and permissions based on your demand. Go through \ud83d\udd10 RBAC (Role Based Access Control) first if you haven't done yet.",source:"@site/docs/docs/recipes/rbac/protect-resource.mdx",sourceDirName:"docs/recipes/rbac",slug:"/docs/recipes/rbac/protect-resource",permalink:"/zh-cn/docs/recipes/rbac/protect-resource",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/recipes/rbac/protect-resource.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Manage permissions and roles",permalink:"/zh-cn/docs/recipes/rbac/manage-permissions-and-roles"},next:{title:"\ud83e\ude9d Web hooks",permalink:"/zh-cn/docs/recipes/web-hooks/"}},d={},h=[{value:"Server",id:"server",level:2},{value:"Client",id:"client",level:2},{value:"Assumption",id:"assumption",level:3},{value:"Configure client SDK",id:"configure-client-sdk",level:3},{value:"Fetch an access token for a resource",id:"fetch-an-access-token-for-a-resource",level:3},{value:"Carry the Access Token in requests",id:"carry-the-access-token-in-requests",level:3},{value:"Optional: Access multiple API Resources",id:"optional-access-multiple-api-resources",level:3}],m={toc:h};function f(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"protect-your-api-resource-with-rbac"},"Protect your API Resource with RBAC"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This page assumes you have configured roles and permissions based on your demand. Go through ",(0,a.kt)("a",{parentName:"p",href:"/zh-cn/docs/recipes/rbac/"},"\ud83d\udd10 RBAC (Role Based Access Control)")," first if you haven't done yet.")),(0,a.kt)("h2",{id:"server"},"Server"),(0,a.kt)("p",null,"To ensure the incoming request has the right access, you need to validate Access Token on the server side. Detailed validation process is demonstrated in ",(0,a.kt)("a",{parentName:"p",href:"/docs/recipes/protect-your-api/#validate-the-api-requests-authorization-token"},"\u2694\ufe0f Protect your API"),"."),(0,a.kt)("p",null,"In short, besides the basic JWT and JWS validtion, you need to focus on:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The token has the correct issuer (",(0,a.kt)("inlineCode",{parentName:"li"},"iss"),")"),(0,a.kt)("li",{parentName:"ul"},"The token has the correct audience (i.e. resource indicator, ",(0,a.kt)("inlineCode",{parentName:"li"},"aud"),")"),(0,a.kt)("li",{parentName:"ul"},"The token has the desired scope (i.e. permission, ",(0,a.kt)("inlineCode",{parentName:"li"},"scope"),")")),(0,a.kt)("p",null,"Note ",(0,a.kt)("inlineCode",{parentName:"p"},"scope")," is a string that includes all granted scopes separated by space. Usually the library you use to validate will take care of it."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Currently, there's no limitation for requesting valid resource indicators in an auth flow. Thus validating ",(0,a.kt)("inlineCode",{parentName:"p"},"scope")," (permission) is crucial when implementing RBAC. Otherwise the meaning of resource indicator will become trivial.")),(0,a.kt)("h2",{id:"client"},"Client"),(0,a.kt)("h3",{id:"assumption"},"Assumption"),(0,a.kt)("p",null,"Let's say you have two resources with permissions as below:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"API Resource ",(0,a.kt)("inlineCode",{parentName:"li"},"https://api-1.store.io"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Permission ",(0,a.kt)("inlineCode",{parentName:"li"},"read:order")),(0,a.kt)("li",{parentName:"ul"},"Permission ",(0,a.kt)("inlineCode",{parentName:"li"},"write:order")))),(0,a.kt)("li",{parentName:"ul"},"API Resource ",(0,a.kt)("inlineCode",{parentName:"li"},"https://api-2.store.io"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Permission ",(0,a.kt)("inlineCode",{parentName:"li"},"read:order"))))),(0,a.kt)("p",null,"To gain the specific access, the client needs to exchange a proper Access Token from Logto, and use it as a Bearer Token in the request header."),(0,a.kt)("h3",{id:"configure-client-sdk"},"Configure client SDK"),(0,a.kt)("p",null,"This tutorial uses TypeScript as the sample language, and the convention applies to all Logto Client SDKs."),(0,a.kt)("p",null,"When ",(0,a.kt)("a",{parentName:"p",href:"/docs/recipes/integrate-logto/"},"integrating client SDK")," with your application, make sure to include both ",(0,a.kt)("inlineCode",{parentName:"p"},"resources")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"scopes")," (permissions) in the configuration for ",(0,a.kt)("inlineCode",{parentName:"p"},"LogtoClient"),"."),(0,a.kt)("p",null,"For example, in order to access the API Resource ",(0,a.kt)("inlineCode",{parentName:"p"},"https://api-1.store.io")," and fetch ",(0,a.kt)("inlineCode",{parentName:"p"},"read:order")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"write:order")," permissions, the config should look like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const config: LogtoConfig = {\n  // ...other configs\n  resources: ['https://api-1.store.io'],\n  scopes: ['read:order', 'write:order'], // i.e. permissions\n};\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"In Logto SDKs, the term ",(0,a.kt)("inlineCode",{parentName:"p"},"scope")," is used to align with the OAuth 2.0 protocol. However, in the Admin Console, it is referred to ",(0,a.kt)("inlineCode",{parentName:"p"},"permission")," for better readability and understanding of real-world scenarios. Thus ",(0,a.kt)("inlineCode",{parentName:"p"},"scope")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"permission")," are identical and exchangeable in all cases except coding.")),(0,a.kt)("h3",{id:"fetch-an-access-token-for-a-resource"},"Fetch an access token for a resource"),(0,a.kt)("p",null,"When user has successfully signed in, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"logtoClient.getAccessToken()")," to fetch an access token for a given resource:"),(0,a.kt)(s.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const accessToken = await logtoClient.getAccessToken('https://api-1.store.io');\n"))),(0,a.kt)(i.Z,{value:"swift",label:"Swift",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},'let token = try await client.getAccessToken(for: "https://api-1.store.io")\n'))),(0,a.kt)(i.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},'logtoClient.getAccessToken("https://api-1.store.io", { logtoException, accessToken ->\n    //...\n})\n')))),(0,a.kt)("p",null,"The Access Token will include all eligble scopes (permissions) for the current user. The definition of eligble scopes is the joint of the following sets:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A subset of ",(0,a.kt)("inlineCode",{parentName:"li"},"scopes")," in the initial Logto config that includes all the scopes that belong to the resource indicator you passed in ",(0,a.kt)("inlineCode",{parentName:"li"},"getAccessToken()")),(0,a.kt)("li",{parentName:"ul"},"The scopes that the user can obtain based on your RBAC configuration")),(0,a.kt)("p",null,"For example, in the initial Logto config:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const config: LogtoConfig = {\n  // ...other configs\n  resources: ['https://api-1.store.io'],\n  scopes: ['read:order', 'write:order', 'custom_data'],\n};\n")),(0,a.kt)("p",null,"Per our ",(0,a.kt)("a",{parentName:"p",href:"#assumption"},"assumption"),", scope ",(0,a.kt)("inlineCode",{parentName:"p"},"cusom_data")," is not available in the API Resource ",(0,a.kt)("inlineCode",{parentName:"p"},"https://api-1.store.io"),". When getting an Access Token:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const accessToken = await logtoClient.getAccessToken('https://api-1.store.io');\n")),(0,a.kt)("p",null,"If the user has both ",(0,a.kt)("inlineCode",{parentName:"p"},"read:order")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"write:order")," permissions for the API Resource ",(0,a.kt)("inlineCode",{parentName:"p"},"https://api-1.store.io"),", the returned Access Token will have both scopes:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"{\n  // ...other token claims\n  iss: '<your-logto-endpoint>/oidc', // issuer\n  aud: 'https://api-1.store.io', // audience, i.e. resource indicator\n  scope: 'read:order write:order'\n}\n")),(0,a.kt)("p",null,"If no resource indicator is passed in ",(0,a.kt)("inlineCode",{parentName:"p"},"getAccessToken()"),", it will try to fetch an Access Token for the ",(0,a.kt)("a",{parentName:"p",href:"https://openid.net/specs/openid-connect-core-1_0.html#UserInfo"},"UserInfo Endpoint"),'. Check out the "Fetch user information" section in the SDK integration guide for details.'),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"While you can specify multiple resource indicators in the config, ",(0,a.kt)("inlineCode",{parentName:"p"},"getAccessToken()")," only accepts a single resource parameter for security reason. As a result, Access Tokens are resource-specific.")),(0,a.kt)("h3",{id:"carry-the-access-token-in-requests"},"Carry the Access Token in requests"),(0,a.kt)("p",null,"Put the token in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Authorization")," field of HTTP headers with the Bearer format (",(0,a.kt)("inlineCode",{parentName:"p"},"Bearer YOUR_TOKEN"),"), and you are good to go. Now ",(0,a.kt)("inlineCode",{parentName:"p"},"https://api-1.store.io")," can receive and validate the token from the server side."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The Bearer Token's integration flow may vary based on the framework or requester you are using. Choose your own way to apply the request ",(0,a.kt)("inlineCode",{parentName:"p"},"Authorization")," header.")),(0,a.kt)("h3",{id:"optional-access-multiple-api-resources"},"Optional: Access multiple API Resources"),(0,a.kt)("p",null,"While your business or the amount of micro services is growing, your client app may need to access multiple API Resources. We found it confusing since we cannot specify the relation between ",(0,a.kt)("inlineCode",{parentName:"p"},"resources")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"scopes")," per OAuth 2.0 protocol."),(0,a.kt)("p",null,"So we took another look at RFC 8707. In ",(0,a.kt)("a",{parentName:"p",href:"https://www.rfc-editor.org/rfc/rfc8707.html#section-2.2-3"},"section 2.2"),", it turns out the result is the ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Cartesian_product"},"cartesian product")," of ",(0,a.kt)("inlineCode",{parentName:"p"},"resources")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"scopes"),":"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("em",{parentName:"p"},"... Effectively, the requested access rights of the token are the cartesian product of all the scopes at all the target services. To the extent possible, when issuing access tokens, the authorization server should downscope the scope value..."))),(0,a.kt)("details",null,(0,a.kt)("summary",null,"OK cool. Let's go with this."),(0,a.kt)("p",null,'We are not sure if the cartesian product is the best solution to this, since all permissions are "attached" to a resource indicator and the result is implicit.'),(0,a.kt)("p",null,"But it is also understandable since ",(0,a.kt)("a",{parentName:"p",href:"https://www.rfc-editor.org/rfc/rfc8707.html"},"RFC 8087")," published eight years later than ",(0,a.kt)("a",{parentName:"p",href:"https://www.rfc-editor.org/rfc/rfc6749"},"RFC 6749")," (i.e. the OAuth 2.0 Authorization Framework).")),(0,a.kt)("p",null,"Thus, if the client wants to access all ",(0,a.kt)("inlineCode",{parentName:"p"},"read:order")," permissions across the two resources in our ",(0,a.kt)("a",{parentName:"p",href:"#assumption"},"assumption"),", the config should look like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const config: LogtoConfig = {\n  // ...other configs\n  resources: ['https://api-1.store.io', 'https://api-2.store.io'],\n  scopes: ['read:order'],\n};\n")),(0,a.kt)("p",null,"During the auth flow, Logto will try to validate two permissions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Permission ",(0,a.kt)("inlineCode",{parentName:"li"},"read:order")," of the API Resource ",(0,a.kt)("inlineCode",{parentName:"li"},"https://api-1.store.io")),(0,a.kt)("li",{parentName:"ul"},"Permission ",(0,a.kt)("inlineCode",{parentName:"li"},"read:order")," of the API Resource ",(0,a.kt)("inlineCode",{parentName:"li"},"https://api-2.store.io"))),(0,a.kt)("p",null,"What if you want to request the ",(0,a.kt)("inlineCode",{parentName:"p"},"write:order")," permission of API Resource ",(0,a.kt)("inlineCode",{parentName:"p"},"https://api-1.store.io"),"? Simply update the config to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const config: LogtoConfig = {\n  // ...other configs\n  resources: ['https://api-1.store.io', 'https://api-2.store.io'],\n  scopes: ['read:order', 'write:order'],\n};\n")),(0,a.kt)("p",null,"Per definition of the cartesian product, during the auth flow, Logto will try to validate four permissions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Permission ",(0,a.kt)("inlineCode",{parentName:"li"},"read:order")," of the API Resource ",(0,a.kt)("inlineCode",{parentName:"li"},"https://api-1.store.io")),(0,a.kt)("li",{parentName:"ul"},"Permission ",(0,a.kt)("inlineCode",{parentName:"li"},"write:order")," of the API Resource ",(0,a.kt)("inlineCode",{parentName:"li"},"https://api-1.store.io")),(0,a.kt)("li",{parentName:"ul"},"Permission ",(0,a.kt)("inlineCode",{parentName:"li"},"read:order")," of the API Resource ",(0,a.kt)("inlineCode",{parentName:"li"},"https://api-2.store.io")),(0,a.kt)("li",{parentName:"ul"},"Permission ",(0,a.kt)("inlineCode",{parentName:"li"},"write:order")," of the API Resource ",(0,a.kt)("inlineCode",{parentName:"li"},"https://api-2.store.io"))),(0,a.kt)("p",null,"But the ",(0,a.kt)("inlineCode",{parentName:"p"},"write:order")," permission does not exist in the API Resource ",(0,a.kt)("inlineCode",{parentName:"p"},"https://api-2.store.io"),'. Logto will ignore (i.e. "downscope") this permission in the API Resource ',(0,a.kt)("inlineCode",{parentName:"p"},"https://api-2.store.io")," which will reflect in the auth result."),(0,a.kt)("p",null,"Now you can also specify ",(0,a.kt)("inlineCode",{parentName:"p"},"https://api-2.store.io")," as the resource indicator when calling ",(0,a.kt)("inlineCode",{parentName:"p"},"logtoClient.getAccessToken()"),". Only ",(0,a.kt)("inlineCode",{parentName:"p"},"read:order")," will present in the ",(0,a.kt)("inlineCode",{parentName:"p"},"scope")," claim of the returned Access Token even if the user has the full access of ",(0,a.kt)("inlineCode",{parentName:"p"},"https://api-2.store.io"),"."))}f.isMDXComponent=!0}}]);