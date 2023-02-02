"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[6921],{49613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var o=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),g=r,f=d["".concat(l,".").concat(g)]||d[g]||c[g]||a;return n?o.createElement(f,i(i({ref:t},p),{},{components:n})):o.createElement(f,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},81907:function(e,t,n){n.d(t,{Z:function(){return i}});n(59496);var o=n(45924),r="tabItem_B9jv",a=n(4637);function i(e){var t=e.children,n=e.hidden,i=e.className;return(0,a.jsx)("div",{role:"tabpanel",className:(0,o.Z)(r,i),hidden:n,children:t})}},19774:function(e,t,n){n.d(t,{Z:function(){return N}});var o=n(59496),r=n(45924),a=n(43226),i=n(55660),s=n(59731),l=n(58867);function u(e){return function(e){return o.Children.map(e,(function(e){if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function p(e){var t=e.values,n=e.children;return(0,o.useMemo)((function(){var e=null!=t?t:u(n);return function(e){var t=(0,s.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function c(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function d(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,s=(0,a.k6)(),l=function(e){var t=e.queryString,n=void 0!==t&&t,o=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!o)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=o?o:null}({queryString:n,groupId:r});return[(0,i._X)(l),(0,o.useCallback)((function(e){if(l){var t=new URLSearchParams(s.location.search);t.set(l,e),s.replace(Object.assign({},s.location,{search:t.toString()}))}}),[l,s])]}function g(e){var t,n,r,a,i=e.defaultValue,s=e.queryString,u=void 0!==s&&s,g=e.groupId,f=p(e),m=(0,o.useState)((function(){return function(e){var t,n=e.defaultValue,o=e.tabValues;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!c({value:n,tabValues:o}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+o.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=o.find((function(e){return e.default})))?t:o[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:f})})),h=m[0],A=m[1],k=d({queryString:u,groupId:g}),b=k[0],v=k[1],y=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:g}.groupId),n=(0,l.Nk)(t),r=n[0],a=n[1],[r,(0,o.useCallback)((function(e){t&&a.set(e)}),[t,a])]),N=y[0],I=y[1],w=function(){var e=null!=b?b:N;return c({value:e,tabValues:f})?e:null}();return(0,o.useEffect)((function(){w&&A(w)}),[w]),{selectedValue:h,selectValue:(0,o.useCallback)((function(e){if(!c({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);A(e),v(e),I(e)}),[v,I,f]),tabValues:f}}var f=n(75831),m=n(75836),h="tabList_tI2j",A="tabItem_zDC9",k=n(4637);function b(e){var t=e.className,n=e.block,o=e.selectedValue,a=e.selectValue,i=e.tabValues,s=[],l=(0,f.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var t=e.currentTarget,n=s.indexOf(t),r=i[n].value;r!==o&&(l(t),a(r))},p=function(e){var t,n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var o,r=s.indexOf(e.currentTarget)+1;n=null!=(o=s[r])?o:s[0];break;case"ArrowLeft":var a,i=s.indexOf(e.currentTarget)-1;n=null!=(a=s[i])?a:s[s.length-1]}null==(t=n)||t.focus()};return(0,k.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:i.map((function(e){var t=e.value,n=e.label,a=e.attributes;return(0,k.jsx)("li",Object.assign({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,ref:function(e){return s.push(e)},onKeyDown:p,onClick:u},a,{className:(0,r.Z)("tabs__item",A,null==a?void 0:a.className,{"tabs__item--active":o===t}),children:null!=n?n:t}),t)}))})}function v(e){var t=e.lazy,n=e.children,r=e.selectedValue;if(t){var a=n.find((function(e){return e.props.value===r}));return a?(0,o.cloneElement)(a,{className:"margin-top--md"}):null}return(0,k.jsx)("div",{className:"margin-top--md",children:n.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==r})}))})}function y(e){var t=g(e);return(0,k.jsxs)("div",{className:(0,r.Z)("tabs-container",h),children:[(0,k.jsx)(b,Object.assign({},e,t)),(0,k.jsx)(v,Object.assign({},e,t))]})}function N(e){var t=(0,m.Z)();return(0,k.jsx)(y,Object.assign({},e),String(t))}},82168:function(e,t,n){n.d(t,{ZP:function(){return l}});var o=n(665),r=n(40151),a=(n(59496),n(49613)),i=["components"],s={toc:[]};function l(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",null,'This tutorial assumes you have created an Application of type "',n.type,'" in Admin Console. If you are not ready,'," ",(0,a.kt)("a",{href:"/docs/tutorials/get-started/create-and-integrate-the-first-app"},"read this")," before continuing.")))}l.isMDXComponent=!0},75197:function(e,t,n){n.d(t,{ZP:function(){return l}});var o=n(665),r=n(40151),a=(n(59496),n(49613)),i=["components"],s={toc:[]};function l(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"With the user's authorization status, a ",(0,a.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc7519"},"JWT")," format ",(0,a.kt)("inlineCode",{parentName:"p"},"access_token")," will be granted and issued by Logto, specifically for the requested API resource. Encrypted and audience-restricted with an expiration time. The token carries all the necessary info to represent the authority of this request."),(0,a.kt)("p",null,"Put the token in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Authorization")," field of HTTP headers with the Bearer format (",(0,a.kt)("inlineCode",{parentName:"p"},"Bearer YOUR_TOKEN"),"), and you are good to go."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The Bearer Token's integration flow may vary based on the framework or requester you are using. Choose your own way to apply the request ",(0,a.kt)("inlineCode",{parentName:"p"},"Authorization")," header.")))}l.isMDXComponent=!0},78666:function(e,t,n){n.d(t,{ZP:function(){return l}});var o=n(665),r=n(40151),a=(n(59496),n(49613)),i=["components"],s={toc:[]};function l(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Let's switch to the Application details page of Admin Console in this section. Add a Redirect URI ",(0,a.kt)("code",null,n.redirectUri),' and click "Save Changes".'),(0,a.kt)("img",{alt:"Redirect URI in Admin Console",src:n.figureSrc,width:"600px"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.oauth.com/oauth2-servers/redirect-uris/"},"Redirect URI")," is an OAuth 2.0 concept which implies the location should redirect after authentication."))}l.isMDXComponent=!0},16313:function(e,t,n){n.d(t,{ZP:function(){return l}});var o=n(665),r=n(40151),a=(n(59496),n(49613)),i=["components"],s={toc:[]};function l(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/recipes/customize-sie/"},"Customize sign-in experience")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/tutorials/get-started/enable-passcode-sign-in"},"Enable SMS or email passcode sign-in")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/tutorials/get-started/enable-social-sign-in"},"Enable social sign-in"))))}l.isMDXComponent=!0},23791:function(e,t,n){n.d(t,{ZP:function(){return u}});var o=n(665),r=n(40151),a=(n(59496),n(49613)),i=n.p+"assets/images/app-secret-2b2c12ae8557fbcf3b283bf86f3ac6db.png",s=["components"],l={toc:[]};function u(e){var t=e.components,n=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",null,'You can find and copy "App Secret" from application details page in Admin Console:'),(0,a.kt)("img",{alt:"App Secret",src:i,width:"586px"})))}u.isMDXComponent=!0},73447:function(e,t,n){n.d(t,{ZP:function(){return l}});var o=n(665),r=n(40151),a=(n(59496),n(49613)),i=["components"],s={toc:[]};function l(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Logto also helps you apply authorization to your backend APIs . Please check our ",(0,a.kt)("a",{parentName:"p",href:"/docs/recipes/protect-your-api/"},"Protect your API")," see how to integrate Logto with your backend applications."),(0,a.kt)("p",null,"You can claim an authorization token for a protected API Resource request easily through Logto SDK."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"In order to grant an audience restricted authorization token for your request, make sure the requested API Resource is ",(0,a.kt)("a",{parentName:"p",href:"/docs/recipes/protect-your-api/#register-the-api-resources-using-logto-admin-console"},"registered in the Logto Admin Console"),".")))}l.isMDXComponent=!0},50594:function(e,t,n){n.d(t,{ZP:function(){return l}});var o=n(665),r=n(40151),a=(n(59496),n(49613)),i=["components"],s={toc:[]};function l(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"In the following code snippets, we assume your app is running on ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:3000"),".")))}l.isMDXComponent=!0},23548:function(e,t,n){n.d(t,{ZP:function(){return l}});var o=n(665),r=n(40151),a=(n(59496),n(49613)),i=["components"],s={toc:[]};function l(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The sign-in flow can be simplied as:"),(0,a.kt)("img",{alt:"Web sign-in flow",src:"data:image/png;base64,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",width:"700pt"}))}l.isMDXComponent=!0},24855:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return b},default:function(){return w},frontMatter:function(){return k},metadata:function(){return v},toc:function(){return N}});var o=n(665),r=n(40151),a=(n(59496),n(49613)),i=n(81907),s=n(19774),l=n(64062),u=n(82168),p=n(75197),c=n(78666),d=n(16313),g=n(23791),f=n(73447),m=n(50594),h=n(23548),A=["components"],k={sidebar_label:"Next.js"},b="Next.js: Integrate @logto/next",v={unversionedId:"docs/recipes/integrate-logto/next-js",id:"docs/recipes/integrate-logto/next-js",title:"Next.js: Integrate @logto/next",description:"Add Logto SDK as a dependency",source:"@site/docs/docs/recipes/integrate-logto/next-js.mdx",sourceDirName:"docs/recipes/integrate-logto",slug:"/docs/recipes/integrate-logto/next-js",permalink:"/docs/recipes/integrate-logto/next-js",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/recipes/integrate-logto/next-js.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Next.js"},sidebar:"docsSidebar",previous:{title:"Machine to Machine",permalink:"/docs/recipes/integrate-logto/machine-to-machine"},next:{title:"React",permalink:"/docs/recipes/integrate-logto/react"}},y={},N=[{value:"Add Logto SDK as a dependency",id:"add-logto-sdk-as-a-dependency",level:2},{value:"Init LogtoClient",id:"init-logtoclient",level:2},{value:"Sign in",id:"sign-in",level:2},{value:"Configure sign-in redirect URI",id:"configure-sign-in-redirect-uri",level:3},{value:"Prepare API routes",id:"prepare-api-routes",level:3},{value:"Implement sign-in button",id:"implement-sign-in-button",level:3},{value:"Get user profile",id:"get-user-profile",level:2},{value:"Through API request in front-end",id:"through-api-request-in-front-end",level:3},{value:"Through <code>getServerSideProps</code>",id:"through-getserversideprops",level:3},{value:"Fetch user info",id:"fetch-user-info",level:3},{value:"Protect API and pages",id:"protect-api-and-pages",level:2},{value:"Protect API routes",id:"protect-api-routes",level:3},{value:"Protect pages",id:"protect-pages",level:3},{value:"Sign out",id:"sign-out",level:2},{value:"Implement a sign-out button",id:"implement-a-sign-out-button",level:3},{value:"Backend API authorization",id:"backend-api-authorization",level:2},{value:"Further readings",id:"further-readings",level:2}],I={toc:N};function w(e){var t=e.components,n=(0,r.Z)(e,A);return(0,a.kt)("wrapper",(0,o.Z)({},I,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"nextjs-integrate-logtonext"},"Next.js: Integrate ",(0,a.kt)("inlineCode",{parentName:"h1"},"@logto/next")),(0,a.kt)(u.ZP,{type:"Traditional Web",mdxType:"AppNote"}),(0,a.kt)("h2",{id:"add-logto-sdk-as-a-dependency"},"Add Logto SDK as a dependency"),(0,a.kt)(s.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @logto/next\n"))),(0,a.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @logto/next\n"))),(0,a.kt)(i.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add @logto/next\n")))),(0,a.kt)("h2",{id:"init-logtoclient"},"Init LogtoClient"),(0,a.kt)(m.ZP,{mdxType:"AssumingUrl"}),(0,a.kt)(g.ZP,{mdxType:"GetAppSecret"}),(0,a.kt)("p",null,"Import and initialize LogtoClient:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// libraries/logto.ts\nimport LogtoClient from '@logto/next';\n\nexport const logtoClient = new LogtoClient({\n  appId: '<your-application-id>',\n  appSecret: '<your-app-secret-copied-from-console>',\n  endpoint: '<your-logto-endpoint>', // E.g. http://localhost:3001\n  baseUrl: '<your-nextjs-app-base-url>', // E.g. http://localhost:3000\n  cookieSecret: 'complex_password_at_least_32_characters_long',\n  cookieSecure: process.env.NODE_ENV === 'production',\n});\n")),(0,a.kt)("h2",{id:"sign-in"},"Sign in"),(0,a.kt)(h.ZP,{mdxType:"SignInFlowSummary"}),(0,a.kt)("h3",{id:"configure-sign-in-redirect-uri"},"Configure sign-in redirect URI"),(0,a.kt)(c.ZP,{figureSrc:l.Z,redirectUri:"http://localhost:3000/api/logto/sign-in-callback",mdxType:"ConfigureRedirectUri"}),(0,a.kt)("h3",{id:"prepare-api-routes"},"Prepare API routes"),(0,a.kt)("p",null,"Prepare ",(0,a.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/api-routes/introduction"},"API routes")," to connect with Logto."),(0,a.kt)("p",null,"Go back to your IDE/editor, use the following code to implement the API routes first:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// pages/api/logto/[action].ts\nimport { logtoClient } from '../../../libraries/logto';\n\nexport default logtoClient.handleAuthRoutes();\n")),(0,a.kt)("p",null,"This will create 4 routes automatically:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"/api/logto/sign-in"),": Sign in with Logto."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"/api/logto/sign-in-callback"),": Handle sign-in callback."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"/api/logto/sign-out"),": Sign out with Logto."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"/api/logto/user"),": Check if user is authenticated with Logto. If yes, return user info.")),(0,a.kt)("h3",{id:"implement-sign-in-button"},"Implement sign-in button"),(0,a.kt)("p",null,"We're almost there! In the last step, we will create a sign-in button:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useRouter } from 'next/router';\n\nconst { push } = useRouter();\n\n<button onClick={() => push('/api/logto/sign-in')}>Sign In</button>;\n")),(0,a.kt)("p",null,"Now you will be navigated to Logto sign-in page when you click the button."),(0,a.kt)("h2",{id:"get-user-profile"},"Get user profile"),(0,a.kt)("p",null,"There are two ways to get user profile."),(0,a.kt)("h3",{id:"through-api-request-in-front-end"},"Through API request in front-end"),(0,a.kt)("p",null,"You can fetch user info by calling ",(0,a.kt)("inlineCode",{parentName:"p"},"/api/logto/user")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { LogtoContext } from '@logto/next';\nimport useSWR from 'swr';\n\nconst Home = () => {\n  const { data } = useSWR<LogtoContext>('/api/logto/user');\n\n  return <div>userId: {data?.claims?.sub}</div>;\n};\n\nexport default Profile;\n")),(0,a.kt)("p",null,"Check ",(0,a.kt)("a",{parentName:"p",href:"https://swr.vercel.app/docs/getting-started"},"this guide")," to learn more about ",(0,a.kt)("inlineCode",{parentName:"p"},"useSWR"),"."),(0,a.kt)("h3",{id:"through-getserversideprops"},"Through ",(0,a.kt)("inlineCode",{parentName:"h3"},"getServerSideProps")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { LogtoContext } from '@logto/next';\nimport { logtoClient } from '../libraries/logto';\n\ntype Props = {\n  user: LogtoContext;\n};\n\nconst Profile = ({ user }: Props) => {\n  return <div>User ID: {user.claims?.sub}</div>;\n};\n\nexport default Profile;\n\nexport const getServerSideProps = logtoClient.withLogtoSsr(async function ({ request }) {\n  const { user } = request;\n\n  return {\n    props: { user },\n  };\n});\n")),(0,a.kt)("p",null,"Check ",(0,a.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props"},"Next.js documentation")," for more details on ",(0,a.kt)("inlineCode",{parentName:"p"},"getServerSideProps"),"."),(0,a.kt)("h3",{id:"fetch-user-info"},"Fetch user info"),(0,a.kt)("p",null,"For most cases, it is recommended to use ",(0,a.kt)("inlineCode",{parentName:"p"},"claims"),", this can be fast because ",(0,a.kt)("inlineCode",{parentName:"p"},"claims")," is cached when tokens are granted. If you need more accurate user info, set ",(0,a.kt)("inlineCode",{parentName:"p"},"config.fetchUserInfo")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", to tell the SDK to fetch the user information from the OIDC ",(0,a.kt)("a",{parentName:"p",href:"https://openid.net/specs/openid-connect-core-1_0.html#UserInfo"},"UserInfo Endpoint"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// pages/api/logto/user-info.ts\nimport { logtoClient } from '../../../libraries/logto';\n\nexport default logtoClient.handleAuthRoutes({ fetchUserInfo: true });\n")),(0,a.kt)("h2",{id:"protect-api-and-pages"},"Protect API and pages"),(0,a.kt)("h3",{id:"protect-api-routes"},"Protect API routes"),(0,a.kt)("p",null,"Wrap your handler with ",(0,a.kt)("inlineCode",{parentName:"p"},"logtoClient.withLogtoApiRoute"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// pages/api/protected-resource.ts\nimport { logtoClient } from '../../libraries/logto';\n\nexport default logtoClient.withLogtoApiRoute((request, response) => {\n  if (!request.user.isAuthenticated) {\n    response.status(401).json({ message: 'Unauthorized' });\n\n    return;\n  }\n\n  response.json({\n    data: 'this_is_protected_resource',\n  });\n});\n")),(0,a.kt)("h3",{id:"protect-pages"},"Protect pages"),(0,a.kt)("p",null,"If you don't want anonymous users to access a page, use ",(0,a.kt)("inlineCode",{parentName:"p"},"logtoClient.withLogtoSsr")," to get auth state, and redirect to sign-in route if not authenticated."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export const getServerSideProps = logtoClient.withLogtoSsr(async function ({ req, res }) {\n  const { user } = req;\n\n  if (!user.isAuthenticated) {\n    res.setHeader('location', '/api/logto/sign-in');\n    res.statusCode = 302;\n    res.end();\n  }\n\n  return {\n    props: { user },\n  };\n});\n")),(0,a.kt)("h2",{id:"sign-out"},"Sign out"),(0,a.kt)("p",null,"Calling ",(0,a.kt)("inlineCode",{parentName:"p"},"/api/logto/sign-out")," will clear all the Logto data in memory and cookies if they exist."),(0,a.kt)("p",null,"After signing out, it'll be great to redirect your user back to your website. Let's add ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:3000")," as one of the Post Sign-out URIs in Admin Console (shows under Redirect URIs)."),(0,a.kt)("h3",{id:"implement-a-sign-out-button"},"Implement a sign-out button"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"<button onClick={() => push('/api/logto/sign-out')}>Sign Out</button>\n")),(0,a.kt)("h2",{id:"backend-api-authorization"},"Backend API authorization"),(0,a.kt)(f.ZP,{mdxType:"GetAuthorizationToken"}),(0,a.kt)("p",null,"Add your API resource indicators to the Logto SDK configs:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// libraries/logto.ts\nimport LogtoClient from '@logto/next';\n\nexport const logtoClient = new LogtoClient({\n  appId: '<your-application-id>',\n  appSecret: '<your-app-secret-copied-from-console>',\n  endpoint: '<your-logto-endpoint>', // E.g. http://localhost:3001\n  baseUrl: '<your-nextjs-app-base-url>', // E.g. http://localhost:3000\n  cookieSecret: 'complex_password_at_least_32_characters_long',\n  cookieSecure: process.env.NODE_ENV === 'production',\n  resources: ['<your-api-resource>'],\n});\n")),(0,a.kt)("p",null,"Specify the resource when creating the API routes:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// pages/api/logto/[action].ts\nimport { logtoClient } from '../../../libraries/logto';\n\nexport default logtoClient.handleAuthRoutes({ resource: '<your-target-api-resource>' });\n")),(0,a.kt)("p",null,"Claim an authorization token from inside wrapper withLogtoApiRoute:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"// pages/api/protected-resource.ts\nimport { logtoClient } from '../../libraries/logto';\n\nexport default logtoClient.withLogtoApiRoute(\n  (request, response) => {\n    if (!request.user.isAuthenticated) {\n      response.status(401).json({ message: 'Unauthorized' });\n\n      return;\n    }\n\n    // Access token can be obtained from request.user.accessToken\n\n    response.json({\n      data: 'this_is_protected_resource',\n    });\n  },\n  { getAccessToken: true, resource: '<your-target-api-resource>' }\n);\n")),(0,a.kt)("p",null,"You can also get the access token from inside getServerSideProps:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import { LogtoContext } from '@logto/next';\nimport { logtoClient } from '../libraries/logto';\n\ntype Props = {\n  user: LogtoContext;\n};\n\nconst Profile = ({ user }: Props) => {\n  return <div>User ID: {user.claims?.sub}</div>;\n};\n\nexport default Profile;\n\nexport const getServerSideProps = logtoClient.withLogtoSsr(\n  async function ({ req }) {\n    const { user } = req;\n\n    // Access token can be obtained from user.accessToken\n\n    return {\n      props: { user },\n    };\n  },\n  { getAccessToken: true, resource: '<your-target-api-resource>' }\n);\n")),(0,a.kt)(p.ZP,{mdxType:"ApplyAuthorizationToken"}),(0,a.kt)("h2",{id:"further-readings"},"Further readings"),(0,a.kt)(d.ZP,{mdxType:"FurtherReadings"}))}w.isMDXComponent=!0},64062:function(e,t,n){t.Z=n.p+"assets/images/next-redirect-uri-3200717bb327c2d84cfe6173c9d8aef5.png"}}]);