"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[41981],{49613:function(e,o,t){t.d(o,{Zo:function(){return p},kt:function(){return g}});var n=t(59496);function r(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function a(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?a(Object(t),!0).forEach((function(o){r(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function i(e,o){if(null==e)return{};var t,n,r=function(e,o){if(null==e)return{};var t,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],o.indexOf(t)>=0||(r[t]=e[t]);return r}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),l=function(e){var o=n.useContext(s),t=o;return e&&(t="function"==typeof e?e(o):c(c({},o),e)),t},p=function(e){var o=l(e.components);return n.createElement(s.Provider,{value:o},e.children)},u={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},m=n.forwardRef((function(e,o){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=l(t),g=r,f=m["".concat(s,".").concat(g)]||m[g]||u[g]||a;return t?n.createElement(f,c(c({ref:o},p),{},{components:t})):n.createElement(f,c({ref:o},p))}));function g(e,o){var t=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=m;var i={};for(var s in o)hasOwnProperty.call(o,s)&&(i[s]=o[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<a;l++)c[l]=t[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},39235:function(e,o,t){t.r(o),t.d(o,{assets:function(){return p},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var n=t(665),r=t(40151),a=(t(59496),t(49613)),c=["components"],i={sidebar_label:"Configure social connector",sidebar_position:3},s="Configure Social Connector",l={unversionedId:"docs/recipes/configure-connectors/configure-social-connector",id:"version-1.x/docs/recipes/configure-connectors/configure-social-connector",title:"Configure Social Connector",description:"Configuring social connectors allows users to easily sign in using their existing social media accounts, without entering a password or basic profile information. This can help increase the registration conversion rate for your website or app. At Logto, we're constantly improving our social connector's capabilities to support new platforms and enhance the user experience.",source:"@site/versioned_docs/version-1.x/docs/recipes/configure-connectors/configure-social-connector.md",sourceDirName:"docs/recipes/configure-connectors",slug:"/docs/recipes/configure-connectors/configure-social-connector",permalink:"/docs/recipes/configure-connectors/configure-social-connector",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/versioned_docs/version-1.x/docs/recipes/configure-connectors/configure-social-connector.md",tags:[],version:"1.x",sidebarPosition:3,frontMatter:{sidebar_label:"Configure social connector",sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Configure email connector",permalink:"/docs/recipes/configure-connectors/configure-email-connector"},next:{title:"Custom social connector with standard protocol",permalink:"/docs/recipes/configure-connectors/custom-social-connector-with-standard-protocols"}},p={},u=[{value:"Types of common Social Connectors",id:"types-of-common-social-connectors",level:2},{value:"Configure steps",id:"configure-steps",level:2},{value:"<strong>Related Readings</strong>",id:"related-readings",level:2}],m={toc:u};function g(e){var o=e.components,i=(0,r.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},m,i,{components:o,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"configure-social-connector"},"Configure Social Connector"),(0,a.kt)("p",null,"Configuring social connectors allows users to easily sign in using their existing social media accounts, without entering a password or basic profile information. This can help increase the registration conversion rate for your website or app. At Logto, we're constantly improving our social connector's capabilities to support new platforms and enhance the user experience."),(0,a.kt)("p",null,"Logto offers two types of social connectors:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Common Social Connectors"),": Google, Apple, Facebook, GitHub, Discord, Wechat, Alipay, Kakao, Naver, Azure Active Directory."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Standard Connectors"),": OIDC, OAuth 2.0, SAML.")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If the social connector you need isn't among our Common Social Connectors, you can create your own using the Standard Connector protocol. Check out our \u201c",(0,a.kt)("a",{parentName:"p",href:"/docs/recipes/configure-connectors/custom-social-connector-with-standard-protocols"},"Custom Social Connector with Standard Protocol"),"\u201d guide to learn more.\nIf the Standard Connector still doesn't meet your needs, don't hesitate to contact us. For those using the Logto Open-Source Version, you can even ",(0,a.kt)("a",{parentName:"p",href:"../create-your-connector/"},"Write your connector (OSS)"),".")),(0,a.kt)("h2",{id:"types-of-common-social-connectors"},"Types of common Social Connectors"),(0,a.kt)("p",null,"We have provided lots of universal third-party social platforms preinstalled by Logto Console."),(0,a.kt)("p",null,"Follow the README to compose the connector config with little effort."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Google")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/logto-io/logto/tree/master/packages/connectors/connector-google"},"Universal connector")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Apple")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/logto-io/logto/tree/master/packages/connectors/connector-apple"},"Universal connector")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Facebook")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/logto-io/logto/tree/master/packages/connectors/connector-facebook"},"Universal connector")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"GitHub")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/logto-io/logto/tree/master/packages/connectors/connector-github"},"Universal connector")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Discord")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/logto-io/logto/tree/master/packages/connectors/connector-discord"},"Universal connector")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"WeChat")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/logto-io/logto/tree/master/packages/connectors/connector-wechat-web"},"Web connector")," | ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/logto-io/logto/tree/master/packages/connectors/connector-wechat-native"},"Native connector")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Alipay")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/logto-io/logto/tree/master/packages/connectors/connector-alipay-web"},"Web connector")," | ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/logto-io/logto/tree/master/packages/connectors/connector-alipay-native"},"Native connector")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Kakao")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/logto-io/logto/tree/master/packages/connectors/connector-kakao"},"Universal connector")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Naver")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/logto-io/logto/tree/master/packages/connectors/connector-naver"},"Universal connector")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Microsoft Azure AD")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/logto-io/logto/tree/master/packages/connectors/connector-azuread"},"Universal connector"))),(0,a.kt)("admonition",{title:"About the platform of Social connector",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"You may find that some connectors do not have a secondary choice of platform, such as Google, Facebook, and GitHub. These connectors' ",(0,a.kt)("em",{parentName:"p"},"platform")," are ",(0,a.kt)("em",{parentName:"p"},"Universal"),". Explore ",(0,a.kt)("a",{parentName:"p",href:"https://docs.logto.io/docs/references/connectors/#platform"},(0,a.kt)("em",{parentName:"a"},"platform"))," to know more."),(0,a.kt)("p",{parentName:"admonition"},"Choose a proper ",(0,a.kt)("em",{parentName:"p"},"platform")," from either ",(0,a.kt)("em",{parentName:"p"},"Web")," or ",(0,a.kt)("em",{parentName:"p"},"Native")," for connectors to fit your use case. You can set up a single ",(0,a.kt)("em",{parentName:"p"},"Native")," connector w/o adding a ",(0,a.kt)("em",{parentName:"p"},"Web")," connector if you only provide native mobile apps and vice versa.")),(0,a.kt)("h2",{id:"configure-steps"},"Configure steps"),(0,a.kt)("p",null,"To add a new Social connector in Logto Console, navigate to \u201c",(0,a.kt)("strong",{parentName:"p"},"Connector > Social connectors"),"\u201d and click the \u201c",(0,a.kt)("strong",{parentName:"p"},"Add Social Connector"),"\u201d button. Then Select the desired social connector type in the Modal that appears and click the \u201c",(0,a.kt)("strong",{parentName:"p"},"Next"),"\u201d button."),(0,a.kt)("p",null,"Note that ",(0,a.kt)("strong",{parentName:"p"},"each type of common social connector can only create one instance")," in a Logto tenant."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Add social connector",src:t(22527).Z,width:"2702",height:"1406"})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"All types of social connectors can choose how to \u201c",(0,a.kt)("strong",{parentName:"li"},"sync user profiles"),"\u201d (such as avatars and usernames). The default setting is to only sync at registration. Still, you can also choose to always sync at each sign-in, but be careful that this may overwrite customized information in your application at user each social sign-in."),(0,a.kt)("li",{parentName:"ol"},"Each social connector has a unique ",(0,a.kt)("strong",{parentName:"li"},"\u201cIdentity provider name (IdP name)\u201d")," to distinguish social identities. Common social connectors use a default IdP name value that cannot be modified, ensuring that you always own the same user identity pool, even if this social connector is re-added. ( For Standard Connectors, you should customize the IdP name value. You can learn more about IdP names before setting up a standard connector. )"),(0,a.kt)("li",{parentName:"ol"},"Finally, note that different social connectors require different configuration parameters. You can refer to the left ",(0,a.kt)("strong",{parentName:"li"},"README")," for guidance on filling out the forms.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Configure social connector guideline",src:t(87611).Z,width:"3018",height:"1700"})),(0,a.kt)("h2",{id:"related-readings"},(0,a.kt)("strong",{parentName:"h2"},"Related Readings")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"See ",(0,a.kt)("a",{parentName:"li",href:"../customize-sie/configure-sign-in-methods/"},"Configure sign-in method")," by adding connectors to bring your social connector into use.")))}g.isMDXComponent=!0},22527:function(e,o,t){o.Z=t.p+"assets/images/configure-add-social-connector-b31d36f3ca8ee362b5f6eb6cdaece9be.png"},87611:function(e,o,t){o.Z=t.p+"assets/images/configure-social-connector-guideline-c95b6c00e254c29dad6706acccab37a7.png"}}]);