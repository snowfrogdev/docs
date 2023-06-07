"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[26594],{49613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,g=d["".concat(u,".").concat(m)]||d[m]||s[m]||i;return n?a.createElement(g,r(r({ref:t},c),{},{components:n})):a.createElement(g,r({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},64725:function(e,t,n){n.d(t,{ZP:function(){return u}});var a=n(665),o=n(40151),i=(n(59496),n(49613)),r=["components"],l={toc:[{value:"Create your OAuth 2.0 app",id:"create-your-oauth-20-app",level:3},{value:"Configure your connector",id:"configure-your-connector",level:3},{value:"Config types",id:"config-types",level:3},{value:"Reference",id:"reference",level:3}]};function u(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"create-your-oauth-20-app"},"Create your OAuth 2.0 app"),(0,i.kt)("p",null,"When you open this page, we believe you already know which social identity provider you want to connect to. The first thing to do is to confirm that the identity provider supports the OAuth 2.0 protocol, which is a prerequisite for configuring a valid connector. Then, follow the identity provider's instructions to register and create the relevant app for OAuth 2.0 authorization."),(0,i.kt)("h3",{id:"configure-your-connector"},"Configure your connector"),(0,i.kt)("p",null,'We ONLY support "Authorization Code" grant type for security consideration and it can perfectly fit Logto\'s scenario.'),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"clientId")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"clientSecret")," can be found at your OAuth 2.0 apps details page."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"clientId"),": The client ID is a unique identifier that identifies the client application during registration with the authorization server. This ID is used by the authorization server to verify the identity of the client application and to associate any authorized access tokens with that specific client application."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"clientSecret"),": The client secret is a confidential key that is issued to the client application by the authorization server during registration. The client application uses this secret key to authenticate itself with the authorization server when requesting access tokens. The client secret is considered confidential information and should be kept secure at all times."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"scope"),': The scope parameter is used to specify the set of resources and permissions that the client application is requesting access to. The scope parameter is typically defined as a space-separated list of values that represent specific permissions. For example, a scope value of "read write" might indicate that the client application is requesting read and write access to a user\'s data.'),(0,i.kt)("p",null,"You are expected to find ",(0,i.kt)("inlineCode",{parentName:"p"},"authorizationEndpoint"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"tokenEndpoint")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"userInfoEndpoint")," in social vendor's documentation."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"authenticationEndpoint"),": This endpoint is used to initiate the authentication process. The authentication process typically involves the user logging in and granting authorization for the client application to access their resources."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"tokenEndpoint"),": This endpoint is used by the client application to obtain an access token that can be used to access the requested resources. The client application typically sends a request to the token endpoint with a grant type and authorization code to receive an access token."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"userInfoEndpoint"),": This endpoint is used by the client application to obtain additional information about the user, such as their fullname, email address or profile picture. The user info endpoint is typically accessed after the client application has obtained an access token from the token endpoint."),(0,i.kt)("p",null,"Logto also provide a ",(0,i.kt)("inlineCode",{parentName:"p"},"profileMap")," field that users can customize the mapping from the social vendors' profiles which are usually not standard. The keys are Logto's standard user profile field names and corresponding values should be social profiles' field names. In current stage, Logto only concern 'id', 'name', 'avatar', 'email' and 'phone' from social profile, only 'id' is required and others are optional fields."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"responseType")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"grantType")," can ONLY be FIXED values with authorization code grant type, so we make them optional and default values will be automatically filled."),(0,i.kt)("p",null,"For example, you can find ",(0,i.kt)("a",{parentName:"p",href:"https://developers.google.com/identity/openid-connect/openid-connect#an-id-tokens-payload"},"Google user profile response")," and hence its ",(0,i.kt)("inlineCode",{parentName:"p"},"profileMap")," should be like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "sub",\n  "avatar": "picture"\n}\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u2139\ufe0f ",(0,i.kt)("strong",{parentName:"p"},"Note")),(0,i.kt)("p",{parentName:"blockquote"},"We provided an OPTIONAL ",(0,i.kt)("inlineCode",{parentName:"p"},"customConfig")," key to put your customize parameters.\nEach social identity provider could have their own variant on OAuth 2.0 standard protocol. If your desired social identity provider strictly stick to OAuth 2.0 standard protocol, the you do not need to care about ",(0,i.kt)("inlineCode",{parentName:"p"},"customConfig"),".")),(0,i.kt)("h3",{id:"config-types"},"Config types"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"authorizationEndpoint"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"true")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"userInfoEndpoint"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"true")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"clientId"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"true")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"clientSecret"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"true")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"tokenEndpointResponseType"),(0,i.kt)("td",{parentName:"tr",align:null},"enum"),(0,i.kt)("td",{parentName:"tr",align:null},"false")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"responseType"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"false")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"grantType"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"false")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"tokenEndpoint"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"false")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"scope"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"false")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"customConfig"),(0,i.kt)("td",{parentName:"tr",align:null},"{"," ","[key: string]",": string ","}"),(0,i.kt)("td",{parentName:"tr",align:null},"false")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"profileMap"),(0,i.kt)("td",{parentName:"tr",align:null},"ProfileMap"),(0,i.kt)("td",{parentName:"tr",align:null},"false")))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"ProfileMap fields"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"),(0,i.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"id"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"id")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"name"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"name")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"avatar"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"avatar")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"email"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"email")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"phone"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"phone")))),(0,i.kt)("h3",{id:"reference"},"Reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.rfc-editor.org/rfc/rfc6749"},"The OAuth 2.0 2.0 Authorization Framework"))))}u.isMDXComponent=!0},82265:function(e,t,n){n.d(t,{ZP:function(){return h}});var a=n(665),o=n(40151),i=(n(59496),n(49613)),r=n(30287),l=n(8436),u=n(58706),p=n(58658),c=n(16310),s=n(48248),d=n(58369),m=["components"],g={toc:[{value:"Add Logto SDK as a dependency",id:"add-logto-sdk-as-a-dependency",level:2},{value:"Init LogtoClient",id:"init-logtoclient",level:2},{value:"Sign in",id:"sign-in",level:2},{value:"Configure Redirect URI",id:"configure-redirect-uri",level:3},{value:"Sign in",id:"sign-in-1",level:3}]};function h(e){var t=e.components,n=(0,o.Z)(e,m);return(0,i.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"add-logto-sdk-as-a-dependency"},"Add Logto SDK as a dependency"),(0,i.kt)(r.ZP,{mdxType:"AddSdk"}),(0,i.kt)("h2",{id:"init-logtoclient"},"Init LogtoClient"),(0,i.kt)(p.ZP,{mdxType:"InitClient"}),(0,i.kt)("h2",{id:"sign-in"},"Sign in"),(0,i.kt)("h3",{id:"configure-redirect-uri"},"Configure Redirect URI"),(0,i.kt)(l.ZP,{mdxType:"ConfigAndroidRedirectUri"}),(0,i.kt)(s.ZP,{figureSrc:c.Z,redirectUri:"io.logto.android://io.logto.sample/callback",mdxType:"ConfigureRedirectUri"}),(0,i.kt)("h3",{id:"sign-in-1"},"Sign in"),(0,i.kt)(u.ZP,{mdxType:"ImplementSignIn"}),(0,i.kt)(d.ZP,{sdk:"Android",mdxType:"TestYourIntegration"}))}h.isMDXComponent=!0},62413:function(e,t,n){n.d(t,{ZP:function(){return u}});var a=n(665),o=n(40151),i=(n(59496),n(49613)),r=["components"],l={toc:[]};function u(e){var t=e.components,u=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},l,u,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'To add a social connector, go to the "Connector" tab in the Admin Console, then click on "Social Connectors". From there, click "Add Social Connector".'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Connector tab",src:n(72788).Z,width:"3352",height:"1226"})),(0,i.kt)("p",null,'In the openning modal, select "',u.connector,'" and click "Next".'),(0,i.kt)("p",null,"On the next page, you will see a two-column layout with the README content on the left and configuration on the right."),(0,i.kt)("p",null,"Feel free to follow the README file in place or read the following section to complete the configuration process. If you follow the in-place guide, you can skip the next section."))}u.isMDXComponent=!0},84551:function(e,t,n){n.d(t,{ZP:function(){return p}});var a=n(665),o=n(40151),i=(n(59496),n(49613)),r=n.p+"assets/images/create-application-modal-a9838383da54c969256d05557ca13639.png",l=["components"],u={toc:[{value:"Choose your application type",id:"choose-your-application-type",level:3},{value:"Enter application name",id:"enter-application-name",level:3}]};function p(e){var t=e.components,p=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,p,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In you browser, open a new tab and enter the link of Logto Admin Console."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Create application",src:n(67612).Z,width:"2368",height:"226"})),(0,i.kt)("p",null,'Once the page is loaded, in the "Get Started" tab, click the "Create" button on the right, and the browser will redirect to the Application tab.'),(0,i.kt)("h3",{id:"choose-your-application-type"},"Choose your application type"),(0,i.kt)("p",null,'In the opening modal, select the "',p.type,'" option as the application type.'),(0,i.kt)("img",{src:r,alt:"Create Application modal",width:"700"}),(0,i.kt)("h3",{id:"enter-application-name"},"Enter application name"),(0,i.kt)("p",null,'Enter the application name, e.g., "Bookstore," and click "Create Application."'),(0,i.kt)("p",null,"\ud83c\udf89 Ta-da! You just created your first application in Logto. You'll see a congrats page which includes a detailed integration guide. Follow the guide to see what the experience will be in your application."))}p.isMDXComponent=!0},11895:function(e,t,n){n.d(t,{ZP:function(){return u}});var a=n(665),o=n(40151),i=(n(59496),n(49613)),r=["components"],l={toc:[]};function u(e){var t=e.components,u=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},l,u,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'Switch to the "Sign-in Experience" tab, then click the "Sign-up and Sign-in" tab.'),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If it's the first time you enter the tab, you will see a quick introduction about Sign-in Experience and its basic configuration.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Sign-in Experience tab",src:n(74673).Z,width:"3160",height:"1822"})),(0,i.kt)("p",null,'Select "None" for the "Sign-up identifier" to provide minimum sign-up effort for ',u.connector," ","sign-in, which may increase your conversion rate."),(0,i.kt)("p",null,'In the "Social sign-in" section, add "Add Social Connector" and choose "',u.connector,'". Then you should be able to see a button with text "Continue with ',u.connector,'" in the preview section.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Save changes",src:n(89913).Z,width:"2474",height:"188"})),(0,i.kt)("p",null,'Finally, click "Save Changes" on the bottom right corner.'))}u.isMDXComponent=!0},4107:function(e,t,n){n.d(t,{ZP:function(){return u}});var a=n(665),o=n(40151),i=(n(59496),n(49613)),r=["components"],l={toc:[]};function u(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"For our new friends",type:"info"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"https://logto.io"},"Logto")," is a cost-effective open-source alternative to Auth0. It offers OpenId Connect (OIDC) based authentication and authorization, with modern features like passwordless sign-in and role-based access control.")),(0,i.kt)("p",null,"In this article, we will go through the steps to quickly build the ",n.connector," sign-in experience (user authentication) with"," ",(0,i.kt)("a",{href:n.link,target:"_blank",rel:"noopener"},n.sdk),(0,i.kt)("span",null," and "),(0,i.kt)("a",{href:"https://logto.io",target:"_blank",rel:"noopener"},"Logto"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Prerequisites")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A running Logto instance. Check out the ",(0,i.kt)("a",{parentName:"li",href:"/docs/tutorials/get-started/"},"get started page")," if you don't have one."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("span",null,"Basic knowledge of"," ",(0,i.kt)("a",{href:n.link,target:"_blank",rel:"noopener"},n.sdk),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("span",null,"A usable ",n.connector," account."))))}u.isMDXComponent=!0},45793:function(e,t,n){n.d(t,{ZP:function(){return u}});var a=n(665),o=n(40151),i=(n(59496),n(49613)),r=["components"],l={toc:[]};function u(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'Double check you have filled out necessary values in the Logto connector configuration area. Click "Save and Done" (or "Save Changes") and the ',n.connector," connector should be available now."))}u.isMDXComponent=!0},58369:function(e,t,n){n.d(t,{ZP:function(){return u}});var a=n(665),o=n(40151),i=(n(59496),n(49613)),r=["components"],l={toc:[]};function u(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"Test your integration",type:"info"},(0,i.kt)("p",null,"Open your ",n.sdk,' app to test if the integration works. When you click the "Sign In" button, the page should be redirected to a Logto sign-in page, and you should be able to create a new account by entering username and password and complete the sign-in process.')))}u.isMDXComponent=!0},27501:function(e,t,n){n.d(t,{ZP:function(){return u}});var a=n(665),o=n(40151),i=(n(59496),n(49613)),r=["components"],l={toc:[]};function u(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Return to your ",n.sdk," app. You should now be able to sign in with ",n.connector,". Enjoy!"))}u.isMDXComponent=!0},7476:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},connector:function(){return b},contentTitle:function(){return k},default:function(){return w},frontMatter:function(){return h},metadata:function(){return f},toc:function(){return v}});var a=n(665),o=n(40151),i=(n(59496),n(49613)),r=n(4107),l=n(84551),u=n(62413),p=n(45793),c=n(11895),s=n(27501),d=n(82265),m=n(64725),g=["components"],h={slug:"how-to-build-oauth2-sign-in-with-android-and-logto",authors:"logto",tags:["authentication","oauth2","android","kotlin/java","social-sign-in","sign-in","login"],title:"How to build OAuth2 sign-in with Android and Logto"},k=void 0,f={permalink:"/tutorial/how-to-build-oauth2-sign-in-with-android-and-logto",source:"@site/tutorial/build-with-logto/generated-android-oauth2.mdx",title:"How to build OAuth2 sign-in with Android and Logto",description:"\x3c!--",date:"2023-06-07T07:55:17.392Z",formattedDate:"June 7, 2023",tags:[{label:"authentication",permalink:"/tutorial/tags/authentication"},{label:"oauth2",permalink:"/tutorial/tags/oauth-2"},{label:"android",permalink:"/tutorial/tags/android"},{label:"kotlin/java",permalink:"/tutorial/tags/kotlin-java"},{label:"social-sign-in",permalink:"/tutorial/tags/social-sign-in"},{label:"sign-in",permalink:"/tutorial/tags/sign-in"},{label:"login",permalink:"/tutorial/tags/login"}],readingTime:1.285,hasTruncateMarker:!0,authors:[{name:"Logto team",title:"Comprehensive Auth0 alternative",url:"https://logto.io",imageURL:"https://github.com/logto-io.png",key:"logto"}],frontMatter:{slug:"how-to-build-oauth2-sign-in-with-android-and-logto",authors:"logto",tags:["authentication","oauth2","android","kotlin/java","social-sign-in","sign-in","login"],title:"How to build OAuth2 sign-in with Android and Logto"},prevItem:{title:"How to build Naver sign-in with Android and Logto",permalink:"/tutorial/how-to-build-naver-sign-in-with-android-and-logto"},nextItem:{title:"How to build OIDC sign-in with Android and Logto",permalink:"/tutorial/how-to-build-oidc-sign-in-with-android-and-logto"}},y={authorsImageUrls:[void 0]},v=[{value:"Create an application in Logto",id:"create-an-application-in-logto",level:2},{value:"Integrate Logto SDK",id:"integrate-logto-sdk",level:2},{value:"Add OAuth2 connector",id:"add-oauth2-connector",level:2},{value:"Set up Standard OAuth 2.0 app",id:"set-up-standard-oauth-20-app",level:2},{value:"Save your configuraiton",id:"save-your-configuraiton",level:2},{value:"Enable OAuth2 connector in Sign-in Experience",id:"enable-oauth2-connector-in-sign-in-experience",level:2},{value:"Testing and Validation",id:"testing-and-validation",level:2},{value:"Further readings",id:"further-readings",level:2}],b="OAuth2",N={toc:v,connector:b};function w(e){var t=e.components,n=(0,o.Z)(e,g);return(0,i.kt)("wrapper",(0,a.Z)({},N,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(r.ZP,{connector:b,sdk:"Android",link:"https://developer.android.com/",mdxType:"Intro"}),(0,i.kt)("h2",{id:"create-an-application-in-logto"},"Create an application in Logto"),(0,i.kt)(l.ZP,{type:"Native App",mdxType:"CreateApplication"}),(0,i.kt)("h2",{id:"integrate-logto-sdk"},"Integrate Logto SDK"),(0,i.kt)(d.ZP,{mdxType:"IntegrateSdk"}),(0,i.kt)("h2",{id:"add-oauth2-connector"},"Add OAuth2 connector"),(0,i.kt)(u.ZP,{connector:b,mdxType:"AddSocialConnector"}),(0,i.kt)("h2",{id:"set-up-standard-oauth-20-app"},"Set up Standard OAuth 2.0 app"),(0,i.kt)(m.ZP,{mdxType:"ConnectorGuide"}),(0,i.kt)("h2",{id:"save-your-configuraiton"},"Save your configuraiton"),(0,i.kt)(p.ZP,{connector:b,mdxType:"SaveYourConfiguration"}),(0,i.kt)("h2",{id:"enable-oauth2-connector-in-sign-in-experience"},"Enable OAuth2 connector in Sign-in Experience"),(0,i.kt)(c.ZP,{connector:b,mdxType:"EnableSocialConnector"}),(0,i.kt)("h2",{id:"testing-and-validation"},"Testing and Validation"),(0,i.kt)(s.ZP,{connector:b,sdk:"Android",mdxType:"TestingAndValidation"}),(0,i.kt)("h2",{id:"further-readings"},"Further readings"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/recipes/protect-your-api/"},"\u2694\ufe0f Protect your API")," For native and single page apps, you'll need to call one or more API endpoints to retrieve and update data.",(0,i.kt)("br",null),"\nLearn more about identifying who's who and keeping your API secure."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/recipes/manage-users/"},"\ud83e\uddd1\u200d\ud83d\ude80 Manage users")," We know you care about user management and activities, as we also do.",(0,i.kt)("br",null),"\nLearn more about how to know your users and see the figures like DAU and MAU graphically."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/recipes/customize-sie/localized-language"},"\ud83c\udf10 Localization")," From one regional business to a global corporate, the willingness to offer the best user experience won't change.",(0,i.kt)("br",null),"\nYou can change current language phrases or add a new language without friction."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/blog/tags/ciam"},"\ud83e\uddd1\u200d\ud83c\udf93 Customer IAM series")," Our serial blog posts about Customer (or Consumer) Identity and Access Management, from 101 to advanced topics and beyond."))}w.isMDXComponent=!0},22042:function(e,t,n){n.d(t,{Z:function(){return r}});n(59496);var a=n(45924),o="tabItem_ojA4",i=n(4637);function r(e){var t=e.children,n=e.hidden,r=e.className;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.Z)(o,r),hidden:n,children:t})}},77477:function(e,t,n){n.d(t,{Z:function(){return w}});var a=n(59496),o=n(45924),i=n(5734),r=n(84512),l=n(8888),u=n(35312);function p(e){return function(e){var t,n;return null!=(t=null==(n=a.Children.map(e,(function(e){if(!e||(0,a.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function c(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:p(n);return function(e){var t=(0,l.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function s(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function d(e){var t=e.queryString,n=void 0!==t&&t,o=e.groupId,l=(0,i.k6)(),u=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:o});return[(0,r._X)(u),(0,a.useCallback)((function(e){if(u){var t=new URLSearchParams(l.location.search);t.set(u,e),l.replace(Object.assign({},l.location,{search:t.toString()}))}}),[u,l])]}function m(e){var t,n,o,i,r=e.defaultValue,l=e.queryString,p=void 0!==l&&l,m=e.groupId,g=c(e),h=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!s({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var o=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:r,tabValues:g})})),k=h[0],f=h[1],y=d({queryString:p,groupId:m}),v=y[0],b=y[1],N=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:m}.groupId),n=(0,u.Nk)(t),o=n[0],i=n[1],[o,(0,a.useCallback)((function(e){t&&i.set(e)}),[t,i])]),w=N[0],C=N[1],T=function(){var e=null!=v?v:w;return s({value:e,tabValues:g})?e:null}();return(0,a.useLayoutEffect)((function(){T&&f(T)}),[T]),{selectedValue:k,selectValue:(0,a.useCallback)((function(e){if(!s({value:e,tabValues:g}))throw new Error("Can't select invalid tab value="+e);f(e),b(e),C(e)}),[b,C,g]),tabValues:g}}var g=n(14775),h=n(99468),k="tabList_by9y",f="tabItem_Dr3M",y=n(4637);function v(e){var t=e.className,n=e.block,a=e.selectedValue,i=e.selectValue,r=e.tabValues,l=[],u=(0,g.o5)().blockElementScrollPositionUntilNextRender,p=function(e){var t=e.currentTarget,n=l.indexOf(t),o=r[n].value;o!==a&&(u(t),i(o))},c=function(e){var t,n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":var a,o=l.indexOf(e.currentTarget)+1;n=null!=(a=l[o])?a:l[0];break;case"ArrowLeft":var i,r=l.indexOf(e.currentTarget)-1;n=null!=(i=l[r])?i:l[l.length-1]}null==(t=n)||t.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t),children:r.map((function(e){var t=e.value,n=e.label,i=e.attributes;return(0,y.jsx)("li",Object.assign({role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:function(e){return l.push(e)},onKeyDown:c,onClick:p},i,{className:(0,o.Z)("tabs__item",f,null==i?void 0:i.className,{"tabs__item--active":a===t}),children:null!=n?n:t}),t)}))})}function b(e){var t=e.lazy,n=e.children,o=e.selectedValue,i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var r=i.find((function(e){return e.props.value===o}));return r?(0,a.cloneElement)(r,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:i.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==o})}))})}function N(e){var t=m(e);return(0,y.jsxs)("div",{className:(0,o.Z)("tabs-container",k),children:[(0,y.jsx)(v,Object.assign({},e,t)),(0,y.jsx)(b,Object.assign({},e,t))]})}function w(e){var t=(0,h.Z)();return(0,y.jsx)(N,Object.assign({},e),String(t))}},30287:function(e,t,n){n.d(t,{ZP:function(){return c}});var a=n(665),o=n(40151),i=(n(59496),n(49613)),r=n(22042),l=n(77477),u=["components"],p={toc:[]};function c(e){var t=e.components,n=(0,o.Z)(e,u);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The minimum supported Android API level of Logto Andorid SDK is level 24.")),(0,i.kt)("p",null,"Add the ",(0,i.kt)("inlineCode",{parentName:"p"},"mavenCentral()")," repository to your Gradle project build file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"repositories {\n    mavenCentral()\n}\n")),(0,i.kt)("p",null,"Add Logto Android SDK to your dependencies:"),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'dependencies {\n    implementation("io.logto.sdk:android:1.0.0-alpha.0")\n}\n'))),(0,i.kt)(r.Z,{value:"groovy",label:"Groovy",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n    implementation 'io.logto.sdk:android:1.0.0-alpha.0'\n}\n")))))}c.isMDXComponent=!0},8436:function(e,t,n){n.d(t,{ZP:function(){return u}});var a=n(665),o=n(40151),i=(n(59496),n(49613)),r=["components"],l={toc:[]};function u(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In Android, the Redirect URI follows the pattern: ",(0,i.kt)("inlineCode",{parentName:"p"},"$(LOGTO_REDIRECT_SCHEME)://$(YOUR_APP_PACKAGE)/callback"),"."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"LOGTO_REDIRECT_SCHEME")," should be a custom scheme in the reverse domain format.",(0,i.kt)("br",{parentName:"p"}),"\n","The ",(0,i.kt)("inlineCode",{parentName:"p"},"YOUR_APP_PACKAGE")," is your app package name.")),(0,i.kt)("p",null,"Assuming you treat ",(0,i.kt)("inlineCode",{parentName:"p"},"io.logto.android")," as the custom ",(0,i.kt)("inlineCode",{parentName:"p"},"LOGTO_REDIRECT_SCHEME"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"io.logto.sample")," is your app package name, the Redirect URI should be ",(0,i.kt)("inlineCode",{parentName:"p"},"io.logto.android://io.logto.sample/callback"),"."),(0,i.kt)("p",null,"Now you can configure the Redirect URI in the admin console (Take ",(0,i.kt)("inlineCode",{parentName:"p"},"io.logto.android://io.logto.sample/callback")," as an example)."))}u.isMDXComponent=!0},58706:function(e,t,n){n.d(t,{ZP:function(){return f}});var a=n(665),o=n(40151),i=(n(59496),n(49613)),r=n(22042),l=n(77477),u=n(86032),p=["components"],c={toc:[]};function s(e){var t=e.components,n=(0,o.Z)(e,p);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'logtoClient.signIn(this, "<your-redirect-uri>", logtoException -> {\n    // User signed in successfully if `logtoException` is null.\n});\n')))}s.isMDXComponent=!0;var d=["components"],m={toc:[]};function g(e){var t=e.components,n=(0,o.Z)(e,d);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'logtoClient.signIn(this, "<your-redirect-uri>") { logtoException: LogtoException? ->\n    // User signed in successfully if `logtoException` is null.\n}\n')))}g.isMDXComponent=!0;var h=["components"],k={toc:[]};function f(e){var t=e.components,n=(0,o.Z)(e,h);return(0,i.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(u.ZP,{calling:".signIn(context, redirectUri, completion)",mdxType:"SignInNote"}),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)(g,{mdxType:"KotlinSignInCode"})),(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)(s,{mdxType:"JavaSignInCode"}))),(0,i.kt)("p",null,"After signing in successfully, ",(0,i.kt)("inlineCode",{parentName:"p"},"logtoClient.isAuthenticated")," will be ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),"."))}f.isMDXComponent=!0},58658:function(e,t,n){n.d(t,{ZP:function(){return k}});var a=n(665),o=n(40151),i=(n(59496),n(49613)),r=n(22042),l=n(77477),u=["components"],p={toc:[]};function c(e){var t=e.components,n=(0,o.Z)(e,u);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import io.logto.sdk.android.LogtoClient;\nimport io.logto.sdk.android.type.LogtoConfig;\nimport io.logto.sdk.core.constant.PromptValue;\n\npublic class MainActivity extends AppCompatActivity {\n\n    private LogtoClient logtoClient;\n\n    @Override\n    protected void onCreate(Bundle savedInstanceState) {\n        // ...\n        LogtoConfig logtoConfig = new LogtoConfig(\n            "<your-logto-endpoint>",  // E.g. http://localhost:3001\n            "<your-app-id>",\n            null,\n            null,\n            true,\n            PromptValue.CONSENT\n        );\n\n        logtoClient = new LogtoClient(logtoConfig, getApplication());\n    }\n}\n')))}c.isMDXComponent=!0;var s=["components"],d={toc:[]};function m(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'import io.logto.sdk.android.LogtoClient\nimport io.logto.sdk.android.type.LogtoConfig\nimport io.logto.sdk.core.constant.PromptValue\n\nclass MainActivity : AppCompatActivity() {\n\n    private lateinit var logtoClient: LogtoClient\n\n    override fun onCreate(savedInstanceState: Bundle?) {\n        // ...\n        val logtoConfig = LogtoConfig(\n            endpoint = "<your-logto-endpoint>",  // E.g. http://localhost:3001\n            appId = "<your-app-id>",\n            scopes = null,\n            resources = null,\n            usingPersistStorage = true,\n            prompt = PromptValue.CONSENT,\n        )\n\n        logtoClient = LogtoClient(logtoConfig, application)\n    }\n}\n')))}m.isMDXComponent=!0;var g=["components"],h={toc:[]};function k(e){var t=e.components,n=(0,o.Z)(e,g);return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Ensure the Application object has been initialized before creating a LogtoClient.")),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"kotlin",label:"Kotlin",mdxType:"TabItem"},(0,i.kt)(m,{mdxType:"KotlinSetupCode"})),(0,i.kt)(r.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,i.kt)(c,{mdxType:"JavaSetupCode"}))))}k.isMDXComponent=!0},48248:function(e,t,n){n.d(t,{ZP:function(){return u}});var a=n(665),o=n(40151),i=(n(59496),n(49613)),r=["components"],l={toc:[]};function u(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Let's switch to the Application details page of Admin Console in this section. Add a Redirect URI ",(0,i.kt)("code",null,n.redirectUri),' and click "Save Changes".'),(0,i.kt)("img",{alt:"Redirect URI in Admin Console",src:n.figureSrc,width:"600px"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.oauth.com/oauth2-servers/redirect-uris/"},"Redirect URI")," is an OAuth 2.0 concept which implies the location should redirect after authentication."))}u.isMDXComponent=!0},86032:function(e,t,n){n.d(t,{ZP:function(){return u}});var a=n(665),o=n(40151),i=(n(59496),n(49613)),r=["components"],l={toc:[]};function u(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",null,"Before calling ",(0,i.kt)("code",null,n.calling),", make sure you have correctly configured Redirect URI in Admin Console.")))}u.isMDXComponent=!0},16310:function(e,t,n){t.Z=n.p+"assets/images/android-redirect-uri-ac35116d71d63d3bf964651207e82085.png"},72788:function(e,t,n){t.Z=n.p+"assets/images/connector-tab-social-4e3d582ddc28ceeee3bc3abcb30d4ec0.png"},67612:function(e,t,n){t.Z=n.p+"assets/images/create-application-8ace18547a152b97cea519666a0e7bbf.png"},89913:function(e,t,n){t.Z=n.p+"assets/images/save-changes-cc32c907e69d5d865b13ee0449e34822.png"},74673:function(e,t,n){t.Z=n.p+"assets/images/sie-tab-8b47b6ad0a8bbc115fc6e2ee67ed1566.png"}}]);