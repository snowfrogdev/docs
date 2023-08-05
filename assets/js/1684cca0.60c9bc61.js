"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[9507],{49613:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return g}});var o=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=o.createContext({}),c=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=c(e.components);return o.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),g=a,m=d["".concat(u,".").concat(g)]||d[g]||p[g]||i;return n?o.createElement(m,r(r({ref:t},s),{},{components:n})):o.createElement(m,r({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},14954:function(e,t,n){n.d(t,{ZP:function(){return u}});var o=n(665),a=n(40151),i=(n(59496),n(49613)),r=["components"],l={toc:[{value:"Set up a project in the Google API Console",id:"set-up-a-project-in-the-google-api-console",level:3},{value:"Configure your consent screen",id:"configure-your-consent-screen",level:3},{value:"Config OAuth consent screen",id:"config-oauth-consent-screen",level:3},{value:"Config scopes",id:"config-scopes",level:3},{value:"Add test users (External user type only)",id:"add-test-users-external-user-type-only",level:3},{value:"Obtain OAuth 2.0 credentials",id:"obtain-oauth-20-credentials",level:3},{value:"References",id:"references",level:3},{value:"Config types",id:"config-types",level:4},{value:"Google developer docs",id:"google-developer-docs",level:4}]};function u(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"set-up-a-project-in-the-google-api-console"},"Set up a project in the Google API Console"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Visit the ",(0,i.kt)("a",{parentName:"li",href:"https://console.developers.google.com"},"Google API Console")," and sign in with your Google account."),(0,i.kt)("li",{parentName:"ul"},"Click the ",(0,i.kt)("strong",{parentName:"li"},"Select a project")," button on the top menu bar, and click the ",(0,i.kt)("strong",{parentName:"li"},"New Project")," button to create a project."),(0,i.kt)("li",{parentName:"ul"},"In your newly created project, click the ",(0,i.kt)("strong",{parentName:"li"},"APIs & Services")," to enter the ",(0,i.kt)("strong",{parentName:"li"},"APIs & Services")," menu.")),(0,i.kt)("h3",{id:"configure-your-consent-screen"},"Configure your consent screen"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"On the left ",(0,i.kt)("strong",{parentName:"li"},"APIs & Services")," menu, click the ",(0,i.kt)("strong",{parentName:"li"},"OAuth consent screen")," button."),(0,i.kt)("li",{parentName:"ul"},"Choose the ",(0,i.kt)("strong",{parentName:"li"},"User Type")," you want, and click the ",(0,i.kt)("strong",{parentName:"li"},"Create")," button. (Note: If you select ",(0,i.kt)("strong",{parentName:"li"},"External")," as your ",(0,i.kt)("strong",{parentName:"li"},"User Type"),", you will need to add test users later.)")),(0,i.kt)("p",null,"Now you will be on the ",(0,i.kt)("strong",{parentName:"p"},"Edit app registration")," page."),(0,i.kt)("h3",{id:"config-oauth-consent-screen"},"Config OAuth consent screen"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Follow the instructions to fill out the ",(0,i.kt)("strong",{parentName:"li"},"OAuth consent screen")," form."),(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("strong",{parentName:"li"},"SAVE AND CONTINUE")," to continue.")),(0,i.kt)("h3",{id:"config-scopes"},"Config scopes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("strong",{parentName:"li"},"ADD OR REMOVE SCOPES")," and select ",(0,i.kt)("inlineCode",{parentName:"li"},"../auth/userinfo.email"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"../auth/userinfo.profile")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"openid")," in the popup drawer, and click ",(0,i.kt)("strong",{parentName:"li"},"UPDATE")," to finish."),(0,i.kt)("li",{parentName:"ul"},"Fill out the form as you need."),(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("strong",{parentName:"li"},"SAVE AND CONTINUE")," to continue.")),(0,i.kt)("h3",{id:"add-test-users-external-user-type-only"},"Add test users (External user type only)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("strong",{parentName:"li"},"ADD USERS")," and add test users to allow these users to access your application while testing."),(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("strong",{parentName:"li"},"SAVE AND CONTINUE")," to continue.")),(0,i.kt)("p",null,"Now you should have the Google OAuth 2.0 consent screen configured."),(0,i.kt)("h3",{id:"obtain-oauth-20-credentials"},"Obtain OAuth 2.0 credentials"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"On the left ",(0,i.kt)("strong",{parentName:"li"},"APIs & Services")," menu, click the ",(0,i.kt)("strong",{parentName:"li"},"Credentials")," button."),(0,i.kt)("li",{parentName:"ul"},"On the ",(0,i.kt)("strong",{parentName:"li"},"Credentials")," page, click the ",(0,i.kt)("strong",{parentName:"li"},"+ CREATE CREDENTIALS")," button on the top menu bar, and select ",(0,i.kt)("strong",{parentName:"li"},"OAuth client ID"),"."),(0,i.kt)("li",{parentName:"ul"},"On the ",(0,i.kt)("strong",{parentName:"li"},"Create OAuth client ID")," page, select ",(0,i.kt)("strong",{parentName:"li"},"Web application")," as the application type."),(0,i.kt)("li",{parentName:"ul"},"Fill out the basic information for your application."),(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("strong",{parentName:"li"},"+ Add URI")," to add an authorized domain to the ",(0,i.kt)("strong",{parentName:"li"},"Authorized JavaScript origins")," section. This is the domain that your logto authorization page will be served from. In our case, this will be ",(0,i.kt)("inlineCode",{parentName:"li"},"${your_logto_origin}"),". e.g.",(0,i.kt)("inlineCode",{parentName:"li"},"https://logto.dev"),"."),(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("strong",{parentName:"li"},"+ Add URI")," in the ","*",(0,i.kt)("strong",{parentName:"li"},"*","Authorized redirect URIs","*","*")," section to set up the ","*",(0,i.kt)("strong",{parentName:"li"},"*","Authorized redirect URIs","*","*"),", which redirect the user to the application after logging in. In our case, this will be ",(0,i.kt)("inlineCode",{parentName:"li"},"${your_logto_endpoint}/callback/${connector_id}"),". e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"https://logto.dev/callback/${connector_id}"),". The ",(0,i.kt)("inlineCode",{parentName:"li"},"connector_id")," can be found on the top bar of the Logto Admin Console connector details page."),(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Create")," to finish and then you will get the ",(0,i.kt)("strong",{parentName:"li"},"Client ID")," and ",(0,i.kt)("strong",{parentName:"li"},"Client Secret"),".")),(0,i.kt)("h3",{id:"references"},"References"),(0,i.kt)("h4",{id:"config-types"},"Config types"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"clientId"),(0,i.kt)("td",{parentName:"tr",align:null},"string")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"clientSecret"),(0,i.kt)("td",{parentName:"tr",align:null},"string")))),(0,i.kt)("h4",{id:"google-developer-docs"},"Google developer docs"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://developers.google.com/identity/protocols/oauth2/openid-connect#appsetup"},"Google Identity: Setting up OAuth 2.0")))}u.isMDXComponent=!0},18937:function(e,t,n){n.d(t,{ZP:function(){return k}});var o=n(665),a=n(40151),i=(n(59496),n(49613)),r=n(64553),l=n(57530),u=n(91560),c=n(2890),s=n(84751),p=n(62637),d=n(45203),g=["components"],m={toc:[{value:"Add Logto SDK as a dependency",id:"add-logto-sdk-as-a-dependency",level:2},{value:"Init LogtoClient",id:"init-logtoclient",level:2},{value:"Sign in",id:"sign-in",level:2},{value:"Configure Redirect URI",id:"configure-redirect-uri",level:3},{value:"Sign in",id:"sign-in-1",level:3}]};function k(e){var t=e.components,n=(0,a.Z)(e,g);return(0,i.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"add-logto-sdk-as-a-dependency"},"Add Logto SDK as a dependency"),(0,i.kt)(r.ZP,{mdxType:"AddSdk"}),(0,i.kt)("h2",{id:"init-logtoclient"},"Init LogtoClient"),(0,i.kt)(c.ZP,{mdxType:"InitClient"}),(0,i.kt)("h2",{id:"sign-in"},"Sign in"),(0,i.kt)("h3",{id:"configure-redirect-uri"},"Configure Redirect URI"),(0,i.kt)(l.ZP,{mdxType:"ConfigAndroidRedirectUri"}),(0,i.kt)(p.ZP,{figureSrc:s.Z,redirectUri:"io.logto.android://io.logto.sample/callback",mdxType:"ConfigureRedirectUri"}),(0,i.kt)("h3",{id:"sign-in-1"},"Sign in"),(0,i.kt)(u.ZP,{mdxType:"ImplementSignIn"}),(0,i.kt)(d.ZP,{sdk:"Android",mdxType:"TestYourIntegration"}))}k.isMDXComponent=!0},58556:function(e,t,n){n.d(t,{ZP:function(){return u}});var o=n(665),a=n(40151),i=(n(59496),n(49613)),r=["components"],l={toc:[]};function u(e){var t=e.components,u=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},l,u,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'To add a social connector, go to the "Connector" tab in the Admin Console, then click on "Social Connectors". From there, click "Add Social Connector".'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Connector tab",src:n(43157).Z,width:"3352",height:"1226"})),(0,i.kt)("p",null,'In the openning modal, select "',u.connector,'" and click "Next".'),(0,i.kt)("p",null,"On the next page, you will see a two-column layout with the README content on the left and configuration on the right."),(0,i.kt)("p",null,"Feel free to follow the README file in place or read the following section to complete the configuration process. If you follow the in-place guide, you can skip the next section."))}u.isMDXComponent=!0},94742:function(e,t,n){n.d(t,{ZP:function(){return c}});var o=n(665),a=n(40151),i=(n(59496),n(49613)),r=n.p+"assets/images/create-application-modal-a9838383da54c969256d05557ca13639.png",l=["components"],u={toc:[{value:"Choose your application type",id:"choose-your-application-type",level:3},{value:"Enter application name",id:"enter-application-name",level:3}]};function c(e){var t=e.components,c=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,o.Z)({},u,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In you browser, open a new tab and enter the link of Logto Admin Console."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Create application",src:n(81601).Z,width:"2368",height:"226"})),(0,i.kt)("p",null,'Once the page is loaded, in the "Get Started" tab, click the "Create" button on the right, and the browser will redirect to the Application tab.'),(0,i.kt)("h3",{id:"choose-your-application-type"},"Choose your application type"),(0,i.kt)("p",null,'In the opening modal, select the "',c.type,'" option as the application type.'),(0,i.kt)("img",{src:r,alt:"Create Application modal",width:"700"}),(0,i.kt)("h3",{id:"enter-application-name"},"Enter application name"),(0,i.kt)("p",null,'Enter the application name, e.g., "Bookstore," and click "Create Application."'),(0,i.kt)("p",null,"\ud83c\udf89 Ta-da! You just created your first application in Logto. You'll see a congrats page which includes a detailed integration guide. Follow the guide to see what the experience will be in your application."))}c.isMDXComponent=!0},51282:function(e,t,n){n.d(t,{ZP:function(){return u}});var o=n(665),a=n(40151),i=(n(59496),n(49613)),r=["components"],l={toc:[]};function u(e){var t=e.components,u=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},l,u,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'Switch to the "Sign-in Experience" tab, then click the "Sign-up and Sign-in" tab.'),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If it's the first time you enter the tab, you will see a quick introduction about Sign-in Experience and its basic configuration.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Sign-in Experience tab",src:n(26109).Z,width:"3160",height:"1822"})),(0,i.kt)("p",null,'Select "None" for the "Sign-up identifier" to provide minimum sign-up effort for ',u.connector," ","sign-in, which may increase your conversion rate."),(0,i.kt)("p",null,'In the "Social sign-in" section, add "Add Social Connector" and choose "',u.connector,'". Then you should be able to see a button with text "Continue with ',u.connector,'" in the preview section.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Save changes",src:n(53225).Z,width:"2474",height:"188"})),(0,i.kt)("p",null,'Finally, click "Save Changes" on the bottom right corner.'))}u.isMDXComponent=!0},39092:function(e,t,n){n.d(t,{ZP:function(){return u}});var o=n(665),a=n(40151),i=(n(59496),n(49613)),r=["components"],l={toc:[]};function u(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"For our new friends",type:"info"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"https://logto.io"},"Logto")," is a cost-effective open-source alternative to Auth0. It offers OpenId Connect (OIDC) based authentication and authorization, with modern features like passwordless sign-in and role-based access control.")),(0,i.kt)("p",null,"In this article, we will go through the steps to quickly build the ",n.connector," sign-in experience (user authentication) with"," ",(0,i.kt)("a",{href:n.link,target:"_blank",rel:"noopener"},n.sdk),(0,i.kt)("span",null," and "),(0,i.kt)("a",{href:"https://logto.io",target:"_blank",rel:"noopener"},"Logto"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Prerequisites")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A running Logto instance. Check out the ",(0,i.kt)("a",{parentName:"li",href:"/docs/tutorials/get-started/"},"get started page")," if you don't have one."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("span",null,"Basic knowledge of"," ",(0,i.kt)("a",{href:n.link,target:"_blank",rel:"noopener"},n.sdk),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("span",null,"A usable ",n.connector," account."))))}u.isMDXComponent=!0},12579:function(e,t,n){n.d(t,{ZP:function(){return u}});var o=n(665),a=n(40151),i=(n(59496),n(49613)),r=["components"],l={toc:[]};function u(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'Double check you have filled out necessary values in the Logto connector configuration area. Click "Save and Done" (or "Save Changes") and the ',n.connector," connector should be available now."))}u.isMDXComponent=!0},45203:function(e,t,n){n.d(t,{ZP:function(){return u}});var o=n(665),a=n(40151),i=(n(59496),n(49613)),r=["components"],l={toc:[]};function u(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"Test your integration",type:"info"},(0,i.kt)("p",null,"Open your ",n.sdk,' app to test if the integration works. When you click the "Sign In" button, the page should be redirected to a Logto sign-in page, and you should be able to create a new account by entering username and password and complete the sign-in process.')))}u.isMDXComponent=!0},2447:function(e,t,n){n.d(t,{ZP:function(){return u}});var o=n(665),a=n(40151),i=(n(59496),n(49613)),r=["components"],l={toc:[]};function u(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Return to your ",n.sdk," app. You should now be able to sign in with ",n.connector,". Enjoy!"))}u.isMDXComponent=!0},18628:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},connector:function(){return d},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var o=n(665),a=n(40151),i=(n(59496),n(49613)),r=(n(39092),n(94742),n(58556),n(12579),n(51282),n(2447),n(18937),n(14954),["components"]),l={slug:"how-to-build-google-sign-in-with-android-and-logto",authors:"logto",tags:["authentication","google","android","kotlin/java","social-sign-in","sign-in","login"],title:"How to build Google sign-in with Android and Logto"},u=void 0,c={permalink:"/tutorial/how-to-build-google-sign-in-with-android-and-logto",source:"@site/tutorial/build-with-logto/generated-android-google.mdx",title:"How to build Google sign-in with Android and Logto",description:"\x3c!--",date:"2023-08-05T15:32:00.196Z",formattedDate:"August 5, 2023",tags:[{label:"authentication",permalink:"/tutorial/tags/authentication"},{label:"google",permalink:"/tutorial/tags/google"},{label:"android",permalink:"/tutorial/tags/android"},{label:"kotlin/java",permalink:"/tutorial/tags/kotlin-java"},{label:"social-sign-in",permalink:"/tutorial/tags/social-sign-in"},{label:"sign-in",permalink:"/tutorial/tags/sign-in"},{label:"login",permalink:"/tutorial/tags/login"}],readingTime:1.28,hasTruncateMarker:!0,authors:[{name:"Logto team",title:"Comprehensive Auth0 alternative",url:"https://logto.io",imageURL:"https://github.com/logto-io.png",key:"logto"}],frontMatter:{slug:"how-to-build-google-sign-in-with-android-and-logto",authors:"logto",tags:["authentication","google","android","kotlin/java","social-sign-in","sign-in","login"],title:"How to build Google sign-in with Android and Logto"},prevItem:{title:"How to build GitHub sign-in with Android and Logto",permalink:"/tutorial/how-to-build-github-sign-in-with-android-and-logto"},nextItem:{title:"How to build Kakao sign-in with Android and Logto",permalink:"/tutorial/how-to-build-kakao-sign-in-with-android-and-logto"}},s={authorsImageUrls:[void 0]},p=[],d="Google",g={toc:p,connector:d};function m(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},g,n,{components:t,mdxType:"MDXLayout"}))}m.isMDXComponent=!0},21522:function(e,t,n){n.d(t,{Z:function(){return r}});n(59496);var o=n(45924),a="tabItem_ojA4",i=n(4637);function r(e){var t=e.children,n=e.hidden,r=e.className;return(0,i.jsx)("div",{role:"tabpanel",className:(0,o.Z)(a,r),hidden:n,children:t})}},36884:function(e,t,n){n.d(t,{Z:function(){return N}});var o=n(59496),a=n(45924),i=n(32173),r=n(5734),l=n(27236),u=n(34857),c=n(55635);function s(e){return function(e){var t,n;return null!=(t=null==(n=o.Children.map(e,(function(e){if(!e||(0,o.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function p(e){var t=e.values,n=e.children;return(0,o.useMemo)((function(){var e=null!=t?t:s(n);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function d(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function g(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,i=(0,r.k6)(),u=function(e){var t=e.queryString,n=void 0!==t&&t,o=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!o)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=o?o:null}({queryString:n,groupId:a});return[(0,l._X)(u),(0,o.useCallback)((function(e){if(u){var t=new URLSearchParams(i.location.search);t.set(u,e),i.replace(Object.assign({},i.location,{search:t.toString()}))}}),[u,i])]}function m(e){var t,n,a,i,r=e.defaultValue,l=e.queryString,u=void 0!==l&&l,s=e.groupId,m=p(e),k=(0,o.useState)((function(){return function(e){var t,n=e.defaultValue,o=e.tabValues;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:o}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+o.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=o.find((function(e){return e.default})))?t:o[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:r,tabValues:m})})),h=k[0],f=k[1],v=g({queryString:u,groupId:s}),y=v[0],b=v[1],C=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),n=(0,c.Nk)(t),a=n[0],i=n[1],[a,(0,o.useCallback)((function(e){t&&i.set(e)}),[t,i])]),N=C[0],w=C[1],T=function(){var e=null!=y?y:N;return d({value:e,tabValues:m})?e:null}();return(0,o.useLayoutEffect)((function(){T&&f(T)}),[T]),{selectedValue:h,selectValue:(0,o.useCallback)((function(e){if(!d({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);f(e),b(e),w(e)}),[b,w,m]),tabValues:m}}var k=n(62607),h="tabList_by9y",f="tabItem_Dr3M",v=n(4637);function y(e){var t=e.className,n=e.block,o=e.selectedValue,r=e.selectValue,l=e.tabValues,u=[],c=(0,i.o5)().blockElementScrollPositionUntilNextRender,s=function(e){var t=e.currentTarget,n=u.indexOf(t),a=l[n].value;a!==o&&(c(t),r(a))},p=function(e){var t,n=null;switch(e.key){case"Enter":s(e);break;case"ArrowRight":var o,a=u.indexOf(e.currentTarget)+1;n=null!=(o=u[a])?o:u[0];break;case"ArrowLeft":var i,r=u.indexOf(e.currentTarget)-1;n=null!=(i=u[r])?i:u[u.length-1]}null==(t=n)||t.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:l.map((function(e){var t=e.value,n=e.label,i=e.attributes;return(0,v.jsx)("li",Object.assign({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,ref:function(e){return u.push(e)},onKeyDown:p,onClick:s},i,{className:(0,a.Z)("tabs__item",f,null==i?void 0:i.className,{"tabs__item--active":o===t}),children:null!=n?n:t}),t)}))})}function b(e){var t=e.lazy,n=e.children,a=e.selectedValue,i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var r=i.find((function(e){return e.props.value===a}));return r?(0,o.cloneElement)(r,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a})}))})}function C(e){var t=m(e);return(0,v.jsxs)("div",{className:(0,a.Z)("tabs-container",h),children:[(0,v.jsx)(y,Object.assign({},e,t)),(0,v.jsx)(b,Object.assign({},e,t))]})}function N(e){var t=(0,k.Z)();return(0,v.jsx)(C,Object.assign({},e),String(t))}},64553:function(e,t,n){n.d(t,{ZP:function(){return s}});var o=n(665),a=n(40151),i=(n(59496),n(49613)),r=n(21522),l=n(36884),u=["components"],c={toc:[]};function s(e){var t=e.components,n=(0,a.Z)(e,u);return(0,i.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The minimum supported Android API level of Logto Andorid SDK is level 24.")),(0,i.kt)("p",null,"Add the ",(0,i.kt)("inlineCode",{parentName:"p"},"mavenCentral()")," repository to your Gradle project build file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"repositories {\n    mavenCentral()\n}\n")),(0,i.kt)("p",null,"Add Logto Android SDK to your dependencies:"),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'dependencies {\n    implementation("io.logto.sdk:android:1.0.0-alpha.0")\n}\n'))),(0,i.kt)(r.Z,{value:"groovy",label:"Groovy",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n    implementation 'io.logto.sdk:android:1.0.0-alpha.0'\n}\n")))))}s.isMDXComponent=!0},57530:function(e,t,n){n.d(t,{ZP:function(){return u}});var o=n(665),a=n(40151),i=(n(59496),n(49613)),r=["components"],l={toc:[]};function u(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In Android, the Redirect URI follows the pattern: ",(0,i.kt)("inlineCode",{parentName:"p"},"$(LOGTO_REDIRECT_SCHEME)://$(YOUR_APP_PACKAGE)/callback"),"."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"LOGTO_REDIRECT_SCHEME")," should be a custom scheme in the reverse domain format.",(0,i.kt)("br",{parentName:"p"}),"\n","The ",(0,i.kt)("inlineCode",{parentName:"p"},"YOUR_APP_PACKAGE")," is your app package name.")),(0,i.kt)("p",null,"Assuming you treat ",(0,i.kt)("inlineCode",{parentName:"p"},"io.logto.android")," as the custom ",(0,i.kt)("inlineCode",{parentName:"p"},"LOGTO_REDIRECT_SCHEME"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"io.logto.sample")," is your app package name, the Redirect URI should be ",(0,i.kt)("inlineCode",{parentName:"p"},"io.logto.android://io.logto.sample/callback"),"."),(0,i.kt)("p",null,"Now you can configure the Redirect URI in the admin console (Take ",(0,i.kt)("inlineCode",{parentName:"p"},"io.logto.android://io.logto.sample/callback")," as an example)."))}u.isMDXComponent=!0},91560:function(e,t,n){n.d(t,{ZP:function(){return f}});var o=n(665),a=n(40151),i=(n(59496),n(49613)),r=n(21522),l=n(36884),u=n(5517),c=["components"],s={toc:[]};function p(e){var t=e.components,n=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'logtoClient.signIn(this, "<your-redirect-uri>", logtoException -> {\n    // User signed in successfully if `logtoException` is null.\n});\n')))}p.isMDXComponent=!0;var d=["components"],g={toc:[]};function m(e){var t=e.components,n=(0,a.Z)(e,d);return(0,i.kt)("wrapper",(0,o.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'logtoClient.signIn(this, "<your-redirect-uri>") { logtoException: LogtoException? ->\n    // User signed in successfully if `logtoException` is null.\n}\n')))}m.isMDXComponent=!0;var k=["components"],h={toc:[]};function f(e){var t=e.components,n=(0,a.Z)(e,k);return(0,i.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(u.ZP,{calling:".signIn(context, redirectUri, completion)",mdxType:"SignInNote"}),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)(m,{mdxType:"KotlinSignInCode"})),(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)(p,{mdxType:"JavaSignInCode"}))),(0,i.kt)("p",null,"After signing in successfully, ",(0,i.kt)("inlineCode",{parentName:"p"},"logtoClient.isAuthenticated")," will be ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"."))}f.isMDXComponent=!0},2890:function(e,t,n){n.d(t,{ZP:function(){return h}});var o=n(665),a=n(40151),i=(n(59496),n(49613)),r=n(21522),l=n(36884),u=["components"],c={toc:[]};function s(e){var t=e.components,n=(0,a.Z)(e,u);return(0,i.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import io.logto.sdk.android.LogtoClient;\nimport io.logto.sdk.android.type.LogtoConfig;\nimport io.logto.sdk.core.constant.PromptValue;\n\npublic class MainActivity extends AppCompatActivity {\n\n    private LogtoClient logtoClient;\n\n    @Override\n    protected void onCreate(Bundle savedInstanceState) {\n        // ...\n        LogtoConfig logtoConfig = new LogtoConfig(\n            "<your-logto-endpoint>",  // E.g. http://localhost:3001\n            "<your-app-id>",\n            null,\n            null,\n            true,\n            PromptValue.CONSENT\n        );\n\n        logtoClient = new LogtoClient(logtoConfig, getApplication());\n    }\n}\n')))}s.isMDXComponent=!0;var p=["components"],d={toc:[]};function g(e){var t=e.components,n=(0,a.Z)(e,p);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'import io.logto.sdk.android.LogtoClient\nimport io.logto.sdk.android.type.LogtoConfig\nimport io.logto.sdk.core.constant.PromptValue\n\nclass MainActivity : AppCompatActivity() {\n\n    private lateinit var logtoClient: LogtoClient\n\n    override fun onCreate(savedInstanceState: Bundle?) {\n        // ...\n        val logtoConfig = LogtoConfig(\n            endpoint = "<your-logto-endpoint>",  // E.g. http://localhost:3001\n            appId = "<your-app-id>",\n            scopes = null,\n            resources = null,\n            usingPersistStorage = true,\n            prompt = PromptValue.CONSENT,\n        )\n\n        logtoClient = LogtoClient(logtoConfig, application)\n    }\n}\n')))}g.isMDXComponent=!0;var m=["components"],k={toc:[]};function h(e){var t=e.components,n=(0,a.Z)(e,m);return(0,i.kt)("wrapper",(0,o.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Ensure the Application object has been initialized before creating a LogtoClient.")),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)(g,{mdxType:"KotlinSetupCode"})),(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)(s,{mdxType:"JavaSetupCode"}))))}h.isMDXComponent=!0},62637:function(e,t,n){n.d(t,{ZP:function(){return u}});var o=n(665),a=n(40151),i=(n(59496),n(49613)),r=["components"],l={toc:[]};function u(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Let's switch to the Application details page of Admin Console in this section. Add a Redirect URI ",(0,i.kt)("code",null,n.redirectUri),' and click "Save Changes".'),(0,i.kt)("img",{alt:"Redirect URI in Admin Console",src:n.figureSrc,width:"600px"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.oauth.com/oauth2-servers/redirect-uris/"},"Redirect URI")," is an OAuth 2.0 concept which implies the location should redirect after authentication."))}u.isMDXComponent=!0},5517:function(e,t,n){n.d(t,{ZP:function(){return u}});var o=n(665),a=n(40151),i=(n(59496),n(49613)),r=["components"],l={toc:[]};function u(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",null,"Before calling ",(0,i.kt)("code",null,n.calling),", make sure you have correctly configured Redirect URI in Admin Console.")))}u.isMDXComponent=!0},84751:function(e,t,n){t.Z=n.p+"assets/images/android-redirect-uri-ac35116d71d63d3bf964651207e82085.png"},43157:function(e,t,n){t.Z=n.p+"assets/images/connector-tab-social-4e3d582ddc28ceeee3bc3abcb30d4ec0.png"},81601:function(e,t,n){t.Z=n.p+"assets/images/create-application-8ace18547a152b97cea519666a0e7bbf.png"},53225:function(e,t,n){t.Z=n.p+"assets/images/save-changes-cc32c907e69d5d865b13ee0449e34822.png"},26109:function(e,t,n){t.Z=n.p+"assets/images/sie-tab-8b47b6ad0a8bbc115fc6e2ee67ed1566.png"}}]);