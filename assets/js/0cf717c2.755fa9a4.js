"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[65956],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=o,g=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},76826:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return m}});var r=n(665),o=n(40151),i=(n(59496),n(49613)),a=["components"],l={sidebar_label:"Configure Logto email service",sidebar_position:1},s="Configure Logto email service",c={unversionedId:"docs/recipes/configure-connectors/email-connector/configure-logto-email-service",id:"version-1.x/docs/recipes/configure-connectors/email-connector/configure-logto-email-service",title:"Configure Logto email service",description:"Logto provides built-in email service for your convenient usage in the following scenarios:",source:"@site/versioned_docs/version-1.x/docs/recipes/configure-connectors/email-connector/configure-logto-email-service.md",sourceDirName:"docs/recipes/configure-connectors/email-connector",slug:"/docs/recipes/configure-connectors/email-connector/configure-logto-email-service",permalink:"/docs/recipes/configure-connectors/email-connector/configure-logto-email-service",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/versioned_docs/version-1.x/docs/recipes/configure-connectors/email-connector/configure-logto-email-service.md",tags:[],version:"1.x",sidebarPosition:1,frontMatter:{sidebar_label:"Configure Logto email service",sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Email connector",permalink:"/docs/recipes/configure-connectors/email-connector/"},next:{title:"Configure popular email service",permalink:"/docs/recipes/configure-connectors/email-connector/configure-popular-email-service"}},u={},m=[{value:"Configuration steps",id:"configuration-steps",level:2},{value:"Unified email templates",id:"unified-email-templates",level:2}],p={toc:m};function d(e){var t=e.components,l=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"configure-logto-email-service"},"Configure Logto email service"),(0,i.kt)("p",null,"Logto provides built-in email service for your convenient usage in the following scenarios:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Rapidly explore or test the email sign-in experience capability of Logto."),(0,i.kt)("li",{parentName:"ol"},"Directly use for your online products, mainly for the new-started projects which are acceptable to use ",(0,i.kt)("a",{parentName:"li",href:"http://Logto.email"},"Logto.email")," as the sender email domain.")),(0,i.kt)("p",null,"The characteristics of the Logto email service:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Free to use"),": It\u2019s completely free without any daily email usage limits, saving your cost."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Save your effort"),": No configuration is needed to connect with a third-party email service provider. Simply customize your basic brand information for email templates."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Ensure delivery"),": Count on Logto for stable service and reliable email delivery, ensuring users can access your product.")),(0,i.kt)("p",null,"However, along with the convenience, there are certain constraints to consider. Currently, customization of the sender's email address and domain is not available. Based on your business requirements, you can choose to configure other reputable email providers."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Logto built-in free email service is currently only available for Cloud users. For users of the Open-source service, you have the flexibility to configure your email service provider for email login.")),(0,i.kt)("h2",{id:"configuration-steps"},"Configuration steps"),(0,i.kt)("p",null,"Follow these steps to configure the Logto email service:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},'Go to "Connector > Email and SMS connectors" in the Logto Console.'),(0,i.kt)("li",{parentName:"ol"},'To add a new Email connector, click the "Set up" button and select the Logto email service.'),(0,i.kt)("li",{parentName:"ol"},"Once the Logto out-of-the-box email connector is successfully created, you can customize the basic brand information displayed in the email templates."),(0,i.kt)("li",{parentName:"ol"},"After making the necessary changes, remember to send a test email template to your email address.")),(0,i.kt)("p",null,"Customization Options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"From email"),": The sender email is set to ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"mailto:no-reply@logto.email"},"no-reply@logto.email"))," and cannot be modified."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Sender name"),": Set your brand name as the sender name to ensure user recognition."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Company information"),": Display your company name, address, or zip code to enhance user trust and meet compliance requirements. Note that URLs are not allowed."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"App logo"),": Upload a brand logo image that is compatible with both light and dark modes of the email. Only a single image is required.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Configure Logto email service",src:n(28304).Z,width:"2880",height:"1744"})),(0,i.kt)("h2",{id:"unified-email-templates"},"Unified email templates"),(0,i.kt)("p",null,"Logto email service uses unified email templates tailored for specific authentication scenarios:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Usage"),(0,i.kt)("th",{parentName:"tr",align:null},"Scenario"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Register"),(0,i.kt)("td",{parentName:"tr",align:null},"Users create an account using their email and verify by entering the verification code.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SignIn"),(0,i.kt)("td",{parentName:"tr",align:null},"Users sign in using their email and verify by entering verification code instead of entering a password.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ForgotPassword"),(0,i.kt)("td",{parentName:"tr",align:null},"If users forget their password during sign-in, they can choose to verify their identity using their email.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Generic"),(0,i.kt)("td",{parentName:"tr",align:null},"This template can be used as a generic backup option for various scenarios, including linking an email to an existing account or testing connector configuration\u2026")))),(0,i.kt)("p",null,"An example of email templates for the \u201cRegister\u201d usage type with custom brand information:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Register email template",src:n(15776).Z,width:"1844",height:"1664"})),(0,i.kt)("p",null,"If no custom brand information is provided, the email template can still be used with a default display:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Default email template without custom info",src:n(7119).Z,width:"1844",height:"1310"})))}d.isMDXComponent=!0},28304:function(e,t,n){t.Z=n.p+"assets/images/configure-logto-email-service-5b62c6b7d25d975d3cc3f497e2f4f88b.webp"},7119:function(e,t,n){t.Z=n.p+"assets/images/default-email-template-without-custom-info-b2fd998efed84a7e236e9d82323a9b84.webp"},15776:function(e,t,n){t.Z=n.p+"assets/images/register-email-template-78b732892321671287e29afbe71bd3ac.webp"}}]);