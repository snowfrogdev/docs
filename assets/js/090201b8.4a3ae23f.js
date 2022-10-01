"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[9158],{49613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var o=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),h=r,g=d["".concat(s,".").concat(h)]||d[h]||u[h]||a;return n?o.createElement(g,i(i({ref:t},p),{},{components:n})):o.createElement(g,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},47036:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return h}});var o=n(665),r=n(40151),a=(n(59496),n(49613)),i=n(33699),c=n(42681),s=["components"],l={sidebar_position:5},p="Enable social sign-in",u={unversionedId:"docs/tutorials/get-started/enable-social-sign-in",id:"docs/tutorials/get-started/enable-social-sign-in",title:"Enable social sign-in",description:'In the "Get Started" tab, click the "Add" button on the right, and the browser will redirect to the "Connectors" -> "Social connectors" tab.',source:"@site/docs/docs/tutorials/get-started/enable-social-sign-in.mdx",sourceDirName:"docs/tutorials/get-started",slug:"/docs/tutorials/get-started/enable-social-sign-in",permalink:"/docs/tutorials/get-started/enable-social-sign-in",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/tutorials/get-started/enable-social-sign-in.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Enable SMS or email passcode sign-in",permalink:"/docs/tutorials/get-started/enable-passcode-sign-in"},next:{title:"Further readings",permalink:"/docs/tutorials/get-started/further-readings"}},d={},h=[{value:"Add a social connector",id:"add-a-social-connector",level:2},{value:"Configure social connector",id:"configure-social-connector",level:2},{value:"Enable connector in sign-in experience",id:"enable-connector-in-sign-in-experience",level:2},{value:"What&#39;s next",id:"whats-next",level:2}],g={toc:h};function m(e){var t=e.components,l=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},g,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"enable-social-sign-in"},"Enable social sign-in"),(0,a.kt)("p",null,'In the "Get Started" tab, click the "Add" button on the right, and the browser will redirect to the "Connectors" -> "Social connectors" tab.'),(0,a.kt)(i.ZP,{mdxType:"ConnectorsIntro"}),(0,a.kt)("h2",{id:"add-a-social-connector"},"Add a social connector"),(0,a.kt)("p",null,'Click the "Add social connector" button to look for the connector you want. The opening modal shows the built-in connectors, which allow out-of-box usage:'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Alipay")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/logto-io/connectors/tree/master/packages/connector-alipay-web"},"Web connector")," | ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/logto-io/connectors/tree/master/packages/connector-alipay-native"},"Native connector")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Apple")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/logto-io/connectors/tree/master/packages/connector-apple"},"Universal connector")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Azure AD")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/logto-io/connectors/tree/master/packages/connector-azuread"},"Universal connector")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Discord")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/logto-io/connectors/tree/master/packages/connector-discord"},"Universal connector")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Facebook")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/logto-io/connectors/tree/master/packages/connector-facebook"},"Universal connector")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"GitHub")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/logto-io/connectors/tree/master/packages/connector-github"},"Universal connector")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Google")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/logto-io/connectors/tree/master/packages/connector-google"},"Universal connector")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Naver")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/logto-io/connectors/tree/master/packages/connector-naver"},"Universal connector")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"WeChat")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/logto-io/connectors/tree/master/packages/connector-wechat-web"},"Web connector")," | ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/logto-io/connectors/tree/master/packages/connector-wechat-native"},"Native connector"))),(0,a.kt)("p",null,"Visit our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/logto-io/connectors"},"connectors repo")," for details."),(0,a.kt)(c.ZP,{mdxType:"ConnectorsWip"}),(0,a.kt)("h2",{id:"configure-social-connector"},"Configure social connector"),(0,a.kt)("p",null,"A full-screen page will guide you through setting things up correctly. Follow the steps below to finish the setup:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go through the README doc on the left, then follow the instructions inside."),(0,a.kt)("li",{parentName:"ol"},"Fill out the JSON that the connector needs in the editor on the right."),(0,a.kt)("li",{parentName:"ol"},'Click "Done" to finish.')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Configure social connector",src:n(5011).Z,width:"1920",height:"960"})),(0,a.kt)("h2",{id:"enable-connector-in-sign-in-experience"},"Enable connector in sign-in experience"),(0,a.kt)("p",null,'Switch to the "Sign-in Experience" tab by clicking the link in the very left section of the page, then click the "Sign-in Methods" tab.'),(0,a.kt)("p",null,'If you didn\'t add any other sign-in methods before, "Enable secondary sign-in" should be off. Turn it on, and check "Social sign-in".'),(0,a.kt)("p",null,'On the table that just showed up, look for the connector you just added in the left column, "Social connectors". Then click the plus icon on the right.'),(0,a.kt)("p",null,'You should see a logo representing the identity provider of the conncetor under the big "Sign In" button.'),(0,a.kt)("p",null,"If you have multiple social connectors in use (in the right column), you can drag and drop them to reorder."),(0,a.kt)("p",null,'Click "Save changes" to push the changes to go live.'),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Open the demo app again to try out the new sign-in method.")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"See ",(0,a.kt)("a",{parentName:"p",href:"/docs/recipes/customize-sie/configure-sign-in-methods"},"Configure sign-in methods")," for a complete picture of sign-in methods combinations.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Enable social connector in sign-in experience",src:n(12211).Z,width:"1920",height:"1190"})),(0,a.kt)("h2",{id:"whats-next"},"What's next"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/tutorials/get-started/enable-passcode-sign-in"},"Enable SMS or email passcode sign-in")," (in case you haven't tried)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/tutorials/get-started/further-readings"},"Further readings"))))}m.isMDXComponent=!0},33699:function(e,t,n){n.d(t,{ZP:function(){return s}});var o=n(665),r=n(40151),a=(n(59496),n(49613)),i=["components"],c={toc:[]};function s(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"About connectors",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Connectors are the bridges between Logto and third-party services. We have three connector types: SMS, email, and social.",(0,a.kt)("br",null),"\nWhile Logto provides some built-in connectors, you can also implement your own. See ",(0,a.kt)("a",{parentName:"p",href:"/docs/references/connectors/"},"Connectors")," to learn more.")))}s.isMDXComponent=!0},42681:function(e,t,n){n.d(t,{ZP:function(){return s}});var o=n(665),r=n(40151),a=(n(59496),n(49613)),i=["components"],c={toc:[]};function s(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"We're still working on more connectors! If you don't see the connector you want, follow ",(0,a.kt)("a",{parentName:"p",href:"/docs/recipes/create-your-connector/"},"Create your connector")," to extend or file a ",(0,a.kt)("a",{parentName:"p",href:"#"},"Feature Request")," on GitHub.")))}s.isMDXComponent=!0},5011:function(e,t,n){t.Z=n.p+"assets/images/configure-social-connector-28cf36237a3aa47d0e89a044664349de.png"},12211:function(e,t,n){t.Z=n.p+"assets/images/sie-enable-social-connector-f6a6fd4dc7d8e932104da910d7b91e5e.png"}}]);