"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[84882],{49613:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return g}});var o=t(59496);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=o.createContext({}),l=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=l(e.components);return o.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(t),g=i,h=p["".concat(c,".").concat(g)]||p[g]||u[g]||r;return t?o.createElement(h,a(a({ref:n},d),{},{components:t})):o.createElement(h,a({ref:n},d))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,a=new Array(r);a[0]=p;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<r;l++)a[l]=t[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},79097:function(e,n,t){t.d(n,{ZP:function(){return c}});var o=t(665),i=t(40151),r=(t(59496),t(49613)),a=["components"],s={toc:[]};function c(e){var n=e.components,t=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"About connectors",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Connectors are the bridges between Logto and third-party services. We have three connector types: SMS, email, and social.",(0,r.kt)("br",null),"\nWhile Logto provides some built-in connectors, you can also implement your own. See ",(0,r.kt)("a",{parentName:"p",href:"/docs/references/connectors"},"Connectors")," to learn more.")))}c.isMDXComponent=!0},46509:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return p}});var o=t(665),i=t(40151),r=(t(59496),t(49613)),a=t(79097),s=["components"],c={sidebar_position:4},l="Passwordless sign-in by adding connectors",d={unversionedId:"docs/tutorials/get-started/passwordless-sign-in-by-adding-connectors",id:"version-1.x/docs/tutorials/get-started/passwordless-sign-in-by-adding-connectors",title:"Passwordless sign-in by adding connectors",description:'In the "Get Started" tab, click the "Enable" button on the right, and the browser will redirect to the "Connectors".',source:"@site/versioned_docs/version-1.x/docs/tutorials/get-started/passwordless-sign-in-by-adding-connectors.mdx",sourceDirName:"docs/tutorials/get-started",slug:"/docs/tutorials/get-started/passwordless-sign-in-by-adding-connectors",permalink:"/docs/tutorials/get-started/passwordless-sign-in-by-adding-connectors",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/versioned_docs/version-1.x/docs/tutorials/get-started/passwordless-sign-in-by-adding-connectors.mdx",tags:[],version:"1.x",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"Customize sign-in experience",permalink:"/docs/tutorials/get-started/customize-sign-in-experience"},next:{title:"Add role-based access control to protect your resources",permalink:"/docs/tutorials/get-started/add-rbac"}},u={},p=[{value:"Demo connectors for Cloud Preview",id:"demo-connectors-for-cloud-preview",level:2},{value:"Enable SMS or Email passwordless sign-in",id:"enable-sms-or-email-passwordless-sign-in",level:2},{value:"Step 1: Configure connector and test",id:"step-1-configure-connector-and-test",level:3},{value:"Step2: Enable connector in sign-in experience",id:"step2-enable-connector-in-sign-in-experience",level:3},{value:"Enable Social sign-in",id:"enable-social-sign-in",level:2},{value:"Step 1: Add a social connector",id:"step-1-add-a-social-connector",level:3},{value:"Step 2: Enable connector in Sign-in Experience",id:"step-2-enable-connector-in-sign-in-experience",level:3},{value:"Related Readings",id:"related-readings",level:2}],g={toc:p};function h(e){var n=e.components,c=(0,i.Z)(e,s);return(0,r.kt)("wrapper",(0,o.Z)({},g,c,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"passwordless-sign-in-by-adding-connectors"},"Passwordless sign-in by adding connectors"),(0,r.kt)("p",null,'In the "Get Started" tab, click the "Enable" button on the right, and the browser will redirect to the "Connectors".'),(0,r.kt)(a.ZP,{mdxType:"ConnectorsIntro"}),(0,r.kt)("h2",{id:"demo-connectors-for-cloud-preview"},"Demo connectors for Cloud Preview"),(0,r.kt)("p",null,"During the onboarding process of creating a Logto Cloud account, you have the option to select Demo connectors that are pre-configured by Logto Service just for trial. This allows you to experience the passwordless sign-in experience easily."),(0,r.kt)("p",null,'Note that Logto Demo connectors with a "Demo" tag have usage limitations, not for official use: Message sending capabilities - only 100 terms for Demo Email or SMS connectors, and the Demo social connector cannot be used actually to sign in to your application.'),(0,r.kt)("p",null,"Once you have completed testing, you should delete the demo connectors and set up your own custom connectors to ensure long-term availability."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Delete demo connector",src:t(51492).Z,width:"2432",height:"806"})),(0,r.kt)("h2",{id:"enable-sms-or-email-passwordless-sign-in"},"Enable SMS or Email passwordless sign-in"),(0,r.kt)("p",null,"Logto has some built-in connectors which allow out-of-box usage:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"SMS connectors: Twilio SMS, Aliyun SMS, Tencent SMS\nEmail connectors: AWS Direct Mail, SendGrid Mail Service, Aliyun Direct Mail, SMTP")),(0,r.kt)("p",null,"The process for enabling SMS and Email connectors is similar, so we have combined them into a single tutorial for your convenience."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Add SMS or email connector",src:t(94643).Z,width:"2510",height:"662"})),(0,r.kt)("h3",{id:"step-1-configure-connector-and-test"},"Step 1: Configure connector and test"),(0,r.kt)("p",null,'To start configuring your connectors, navigate to the \u201cConnectors\u201d tab in the left navigation bar. By default, this tab is located under the "Email and SMS connectors" section.'),(0,r.kt)("p",null,'Click the "Set Up" button on the SMS or Email connector column. Then choose your preferred connector from the modal list and click "Next" to proceed.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Configure SMS connector",src:t(98015).Z,width:"3012",height:"2482"})),(0,r.kt)("p",null,"You will be directed to a full-screen page that will guide you through the setup process correctly. Follow the steps below:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go through the README doc on the left, then follow the instructions."),(0,r.kt)("li",{parentName:"ol"},"Fill out any required forms on the right to complete the configuration, and you can customize the SMS or Email template by editing JSON code. Then test the configuration by sending an email or SMS to your email address or phone number."),(0,r.kt)("li",{parentName:"ol"},'Click "Save and Done" to finish.')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Configure SMS connector",src:t(98015).Z,width:"3012",height:"2482"})),(0,r.kt)("h3",{id:"step2-enable-connector-in-sign-in-experience"},"Step2: Enable connector in sign-in experience"),(0,r.kt)("p",null,"Once you've successfully configured your SMS or Email connector, you can make it available as a sign-up or sign-in option according to your business needs."),(0,r.kt)("p",null,'Navigate to the "Sign-in Experience" tab in the left navigation bar, and click "Sign-in Methods".'),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Set sign-up methods:"),' To enable passwordless sign-up via SMS or email, select "Email address," "Phone number," or "Email address or phone number" as the sign-up identifier. Please note that email or phone verification must be required during sign-up in the current version.'),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Set sign-in methods:"),' The sign-up identifier will be automatically added as a sign-in method. To provide additional sign-in combinations, click "Add Another".'),(0,r.kt)("li",{parentName:"ol"},'Click "Save changes" to make the changes live.')),(0,r.kt)("p",null,"Remember to open the \u201cLive preview\u201d to test the new sign-in experience."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"SIE enable email or SMS connector",src:t(72679).Z,width:"3004",height:"1742"})),(0,r.kt)("h2",{id:"enable-social-sign-in"},"Enable Social sign-in"),(0,r.kt)("p",null,"Logto offers a variety of built-in connectors for out-of-the-box usage, including:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Default social connectors: Google, Apple, Facebook, GitHub, Discord, WeChat, Alipay, Kakao, Naver, Azure AD.\nStandard connectors: OAuth 2.0, OIDC, SAML.")),(0,r.kt)("p",null,"Default social connectors are the universal and popular social media platforms, which are preinstalled by Logto Console ready-to-use. Only one of each type can be created."),(0,r.kt)("p",null,"Standard connectors include the widely used industry-standard protocols for authentication and authorization purposes. These connectors typically provide flexibility and customization options for developers who want to create their own social connector."),(0,r.kt)("h3",{id:"step-1-add-a-social-connector"},"Step 1: Add a social connector"),(0,r.kt)("p",null,"To start configuring your social connectors, navigate to the \u201cConnectors\u201d tab in the left navigation bar, and select the \u201cSocial connectors\u201d tab."),(0,r.kt)("p",null,'Click the "Add social connector" button and choose the connector that best fits your needs.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Add social connector",src:t(12256).Z,width:"2702",height:"1406"})),(0,r.kt)("p",null,'Follow the instructions on the full-screen page to configure the connector by reviewing the README doc on the left, filling out the required forms on the right, and clicking "Save and Done" to complete the setup.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Configure social connector",src:t(33348).Z,width:"3018",height:"1700"})),(0,r.kt)("h3",{id:"step-2-enable-connector-in-sign-in-experience"},"Step 2: Enable connector in Sign-in Experience"),(0,r.kt)("p",null,"Once configured a social connector successfully, you can enable it as a Social Sign-in button in Sign-in Experience."),(0,r.kt)("p",null,'Navigate to the "Sign-in Experience" tab in the left navigation bar, and click "Sign-in Methods".'),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Choose sign-up method"),': If you only want to offer social sign-up, select "Not applicable" as the sign-up identifier. If you choose another sign-up identifier, such as email, the user should link an email to their social account during the sign-up flow.'),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Set up the social sign-in button"),": Click the connector you configured in the \u201cAdd another\u201d menu to provide it as a social sign-in method. If you have multiple social connectors in use, you can drag and drop them to reorder."),(0,r.kt)("li",{parentName:"ol"},'Click "Save changes" to make the changes live.')),(0,r.kt)("p",null,"Remember to open the \u201cLive preview\u201d to test the new sign-in experience."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"SIE enable social connector",src:t(60385).Z,width:"3008",height:"1670"})),(0,r.kt)("h2",{id:"related-readings"},"Related Readings"),(0,r.kt)("p",null,"For more detailed guidance on how to configure the Connector or Sign-in Experience, please refer to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"See ",(0,r.kt)("a",{parentName:"li",href:"/docs/recipes/configure-connectors/"},"Configure connectors")," for more notice tips about configuration process."),(0,r.kt)("li",{parentName:"ul"},"See ",(0,r.kt)("a",{parentName:"li",href:"/docs/recipes/customize-sie/"},"Configure sign-in methods")," for a complete picture of sign-in method combinations.")))}h.isMDXComponent=!0},94643:function(e,n,t){n.Z=t.p+"assets/images/passwordless-add-sms-or-emai-connector-f322b9aa1dcfb0ed720123b39759376c.png"},12256:function(e,n,t){n.Z=t.p+"assets/images/passwordless-add-social-connector-59ebca81021e23d0a594ced5ed6dae49.png"},98015:function(e,n,t){n.Z=t.p+"assets/images/passwordless-configure-sms-connector-5d5e9cf8597014e931c55f4ad4eb803c.png"},33348:function(e,n,t){n.Z=t.p+"assets/images/passwordless-configure-social-connector-96d785be6a3d2add6ba9b691e67fa352.png"},51492:function(e,n,t){n.Z=t.p+"assets/images/passwordless-delete-demo-connector-08365f5aa41ce854402dee6a3e0cb63d.png"},72679:function(e,n,t){n.Z=t.p+"assets/images/passwordless-sie-enable-email-or-sms-connector-67eb149bc713ff399ff1b65ea53e7555.png"},60385:function(e,n,t){n.Z=t.p+"assets/images/passwordless-sie-enable-social-connector-fc865f4526c85c5f38e86a5a7f6fdc39.png"}}]);