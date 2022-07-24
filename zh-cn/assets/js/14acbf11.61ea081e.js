"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[5412],{49613:function(e,t,n){n.d(t,{Zo:function(){return k},kt:function(){return m}});var a=n(59496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},k=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,k=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=l,c=d["".concat(p,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(c,i(i({ref:t},k),{},{components:n})):a.createElement(c,i({ref:t},k))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},40586:function(e,t,n){n.r(t),n.d(t,{assets:function(){return C},contentTitle:function(){return g},default:function(){return b},frontMatter:function(){return h},metadata:function(){return f},toc:function(){return y}});var a=n(665),l=n(40151),r=(n(59496),n(49613)),i=["components"],o={toc:[]};function p(e){var t=e.components,n=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("details",null,(0,r.kt)("summary",null,"LogtoConfig"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"endpoint"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"The OIDC service endpoint.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"appId"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"The application id comes from the application we registered in Logto Service.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"scopes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string[]")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"[openid, offline_access, profile]")),(0,r.kt)("td",{parentName:"tr",align:null},"This field always contains ",(0,r.kt)("inlineCode",{parentName:"td"},"openid"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"offline_access")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"profile"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"resources"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string[]")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"The protected resource indicators we want to use.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"usingPersistStorage"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},"Decide to store credentials on the local machine or not.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"prompt"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"consent")),(0,r.kt)("td",{parentName:"tr",align:null},"The prompt value used in ",(0,r.kt)("inlineCode",{parentName:"td"},"generateSignInUri"),".")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"*","Notes")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can extend this ",(0,r.kt)("inlineCode",{parentName:"li"},"LogtoConfig")," if you need to."))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"AccessToken"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"token"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"scope"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"expiresAt"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"number")),(0,r.kt)("td",{parentName:"tr",align:null},"Timestamp in seconds"))))))}p.isMDXComponent=!0;var s=["components"],k={toc:[]};function u(e){var t=e.components,n=(0,l.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("details",null,(0,r.kt)("summary",null,"constructor"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"logtoConfig"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"LogtoConfig"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return Type")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"LogtoClient")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Notes")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can add extra parameters if you need to."),(0,r.kt)("li",{parentName:"ul"},"If the usePersistStorage is enabled in logtoConfig, the platform SDK will provide the following functionalities:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Store persistent data with a unique key based on ",(0,r.kt)("inlineCode",{parentName:"li"},"clientId"),"."),(0,r.kt)("li",{parentName:"ul"},"Load ",(0,r.kt)("inlineCode",{parentName:"li"},"refreshToken")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"idToken")," from the local machine on initialization."),(0,r.kt)("li",{parentName:"ul"},"Store ",(0,r.kt)("inlineCode",{parentName:"li"},"refreshToken")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"idToken")," locally on ",(0,r.kt)("inlineCode",{parentName:"li"},"Core.fetchTokenByAuthorizationCode")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"Core.fetchTokenByRefreshToken"),"."))))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"isAuthenticated"),(0,r.kt)("p",null,"To know if a user is authenticated or not.",(0,r.kt)("br",{parentName:"p"}),"\n","This can be defined as a getter as well."),(0,r.kt)("p",null,"A user is treated as authenticated when:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We have gained an ID token successfully."),(0,r.kt)("li",{parentName:"ul"},"We have loaded an ID token from the local machine.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("p",null,"None."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return Type")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"boolean"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"SignIn"),(0,r.kt)("p",null,"This method should start a sign-in flow and the platform SDK should take care of all steps an authorization needs to complete including the sign-in redirect process."),(0,r.kt)("p",null,"The user will be authenticated after this method has been called successfully."),(0,r.kt)("p",null,"The sign-in process will reply on the Core SDK Functions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"generateSignInUri")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"verifyAndParseCodeFromCallbackUri")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fetchTokenByAuthorizationCode"))),(0,r.kt)("p",null,"Notes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Because generateSignInUri includes the resources we need, we don\u2019t need to pass resource to fetchTokenByAuthorizationCode function.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"redirectUri"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return Type")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Throws")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Any error that occurs during this sign-in process."))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"SignOut"),(0,r.kt)("p",null,"The sign-out process should follow the steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Clear local storage, cookies, persistent data, or something else."),(0,r.kt)("li",{parentName:"ol"},"Revoke the obtained refresh token via ",(0,r.kt)("inlineCode",{parentName:"li"},"Core.revoke")," (the Logto service will revoke all related tokens if the refresh token is revoked)."),(0,r.kt)("li",{parentName:"ol"},"Redirect the user to Logto's sign-out endpoint unless step 1 clears the session of the sign-in page.")),(0,r.kt)("p",null,"Notes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In step 2, ",(0,r.kt)("inlineCode",{parentName:"li"},"Core.revoke")," is an async call and will not block the sign-out process even if it fails."),(0,r.kt)("li",{parentName:"ul"},"Step 3 is relying on ",(0,r.kt)("inlineCode",{parentName:"li"},"Core.generateSignOutUri")," to generate the Logto's sign-out endpoint.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"postLogoutRedirectUri"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"null"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return Type")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"void")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Throws")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Any error that occurs during this sign-out process."))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"getAccessToken"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"getAccessToken")," retrieves an ",(0,r.kt)("inlineCode",{parentName:"p"},"AccessToken")," by ",(0,r.kt)("inlineCode",{parentName:"p"},"resource")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"scope")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"accessTokenMap")," then returns the ",(0,r.kt)("inlineCode",{parentName:"p"},"token")," value of that ",(0,r.kt)("inlineCode",{parentName:"p"},"AccessToken"),"."),(0,r.kt)("p",null,"We set the ",(0,r.kt)("inlineCode",{parentName:"p"},"scope")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," when building the key of the ",(0,r.kt)("inlineCode",{parentName:"p"},"accessTokenMap")," for we don't support custom scopes in Logto V1."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Notes")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If cannot find a corresponding ",(0,r.kt)("inlineCode",{parentName:"li"},"AccessToken")," then perform a ",(0,r.kt)("inlineCode",{parentName:"li"},"Core.fetchTokenByRefreshToken")," action to fetch the token needed."),(0,r.kt)("li",{parentName:"ul"},"If the ",(0,r.kt)("inlineCode",{parentName:"li"},"accessToken")," is not expired, then return the ",(0,r.kt)("inlineCode",{parentName:"li"},"token")," value inside."),(0,r.kt)("li",{parentName:"ul"},"If the ",(0,r.kt)("inlineCode",{parentName:"li"},"accessToken")," is expired, then perform a ",(0,r.kt)("inlineCode",{parentName:"li"},"Core.fetchTokenByRefreshToken")," action to retrieve a new ",(0,r.kt)("inlineCode",{parentName:"li"},"accessToken")," , update the local ",(0,r.kt)("inlineCode",{parentName:"li"},"accessTokenMap")," and return the new ",(0,r.kt)("inlineCode",{parentName:"li"},"token")," value inside."),(0,r.kt)("li",{parentName:"ul"},"If ",(0,r.kt)("inlineCode",{parentName:"li"},"Core.fetchTokenByRefreshToken")," failed, then informs that the user with the exception occurred."),(0,r.kt)("li",{parentName:"ul"},"If cannot find the refreshToken, then informs the user of an unauthorized exception."),(0,r.kt)("li",{parentName:"ul"},"Only by obtaining a ",(0,r.kt)("inlineCode",{parentName:"li"},"refreshToken")," after signing in can we perform a ",(0,r.kt)("inlineCode",{parentName:"li"},"Core.fetchTokenByRefreshToken")," action.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"resource"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"null"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return Type")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Throws")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The user is not authenticated."),(0,r.kt)("li",{parentName:"ul"},"The input ",(0,r.kt)("inlineCode",{parentName:"li"},"resource")," is not set in the ",(0,r.kt)("inlineCode",{parentName:"li"},"logtoConfig"),"."),(0,r.kt)("li",{parentName:"ul"},"No refresh token found before ",(0,r.kt)("inlineCode",{parentName:"li"},"Core.fetchTokenByRefreshToken"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Core.fetchTokenByRefreshToken")," failed."))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"getIdTokenClaims"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"getIdTokenClaims")," return an object that carries the claims of the ",(0,r.kt)("inlineCode",{parentName:"p"},"idToken")," property."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters")),(0,r.kt)("p",null,"None."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Return Type")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"IdTokenClaims")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Throws")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The user is not authenticated."))))}u.isMDXComponent=!0;var d=["components"],m={toc:[]};function c(e){var t=e.components,n=(0,l.Z)(e,d);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("details",null,(0,r.kt)("summary",null,"logtoConfig"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"LogtoConfig"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"oidcConfig"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"OidcConfigResponse?"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"accessTokenMap"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Map<string, AccessToken>")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Key")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The key should be constructed with ",(0,r.kt)("inlineCode",{parentName:"li"},"scope")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"resource"),"."),(0,r.kt)("li",{parentName:"ul"},"The values in ",(0,r.kt)("inlineCode",{parentName:"li"},"scope")," should be sorted alphabetically and joined with space."),(0,r.kt)("li",{parentName:"ul"},"The key should be constructed in the pattern: ",(0,r.kt)("inlineCode",{parentName:"li"},"${scope}@${resource}"),"."),(0,r.kt)("li",{parentName:"ul"},"If the ",(0,r.kt)("inlineCode",{parentName:"li"},"scope")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"resource")," is null or empty, their value should be treated as empty.")),(0,r.kt)("p",null,"E.g., ",(0,r.kt)("inlineCode",{parentName:"p"},'"offline_access openid read:usr@https://logto.dev/api"'),", ",(0,r.kt)("inlineCode",{parentName:"p"},'"@https://logto.dev/api"'),", ",(0,r.kt)("inlineCode",{parentName:"p"},'"openid@"'),", ",(0,r.kt)("inlineCode",{parentName:"p"},'"@"'),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Value")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AccessToken"),", which uses ",(0,r.kt)("inlineCode",{parentName:"li"},"expiresAt")," property to indicate the exact time when an access token is expired.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Notes")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"scope")," will always be a null value for we don\u2019t support custom scopes in Logto V1."),(0,r.kt)("li",{parentName:"ul"},"When building the access token key to store an access token:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"scope")," will always be a null value."),(0,r.kt)("li",{parentName:"ul"},"if the access token is not a jwt, treat the ",(0,r.kt)("inlineCode",{parentName:"li"},"resource")," as a null value."),(0,r.kt)("li",{parentName:"ul"},"if the access token is a jwt, decode the access token and use the payload\u2019s ",(0,r.kt)("inlineCode",{parentName:"li"},"aud")," claim value as the ",(0,r.kt)("inlineCode",{parentName:"li"},"resource")," part of the access token key."))))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"refreshToken"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string?")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Notes")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"refreshToken")," will be set or updated under circumstances below:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Load ",(0,r.kt)("inlineCode",{parentName:"li"},"refreshToken")," from the storage."),(0,r.kt)("li",{parentName:"ul"},"The server returns a ",(0,r.kt)("inlineCode",{parentName:"li"},"refreshToken")," in the response on fetch token successfully."),(0,r.kt)("li",{parentName:"ul"},"Sign out (will be set to ",(0,r.kt)("inlineCode",{parentName:"li"},"null"),")."))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"idToken"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Type")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string?")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Notes")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"idToken")," should be verified if it comes from the backend."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"idToken")," will be set or updated under circumstances below:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Load ",(0,r.kt)("inlineCode",{parentName:"li"},"idToken")," from the storage."),(0,r.kt)("li",{parentName:"ul"},"The server returns an ",(0,r.kt)("inlineCode",{parentName:"li"},"idToken")," in the response on fetch token successfully."),(0,r.kt)("li",{parentName:"ul"},"Sign out (will be set to ",(0,r.kt)("inlineCode",{parentName:"li"},"null"),")."))))))}c.isMDXComponent=!0;var N=["components"],h={sidebar_position:1.3},g="Platform SDK",f={unversionedId:"docs/references/sdk-convention/platform-sdk-convention",id:"docs/references/sdk-convention/platform-sdk-convention",title:"Platform SDK",description:"Platform SDK provides a standard way to integrate the client with Logto service in the specific platform and accelerates the integration process.",source:"@site/docs/docs/references/sdk-convention/platform-sdk-convention.mdx",sourceDirName:"docs/references/sdk-convention",slug:"/docs/references/sdk-convention/platform-sdk-convention",permalink:"/zh-cn/docs/references/sdk-convention/platform-sdk-convention",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/references/sdk-convention/platform-sdk-convention.mdx",tags:[],version:"current",sidebarPosition:1.3,frontMatter:{sidebar_position:1.3},sidebar:"docsSidebar",previous:{title:"Core",permalink:"/zh-cn/docs/references/sdk-convention/core-sdk-convention"},next:{title:"\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d\udc66 \u7528\u6237",permalink:"/zh-cn/docs/references/users/"}},C={},y=[{value:"Basic Types",id:"basic-types",level:2},{value:"LogtoClient",id:"logtoclient",level:2},{value:"Properties",id:"properties",level:3},{value:"Methods",id:"methods",level:3}],T={toc:y};function b(e){var t=e.components,n=(0,l.Z)(e,N);return(0,r.kt)("wrapper",(0,a.Z)({},T,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"platform-sdk"},"Platform SDK"),(0,r.kt)("p",null,"Platform SDK provides a standard way to integrate the client with Logto service in the specific platform and accelerates the integration process."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Platform SDK encapsulates ",(0,r.kt)("a",{parentName:"li",href:"/zh-cn/docs/references/sdk-convention/core-sdk-convention"},"the core")," with platform-specific implementation."),(0,r.kt)("li",{parentName:"ul"},"Platform SDK should provide basic types that make SDK easier to use."),(0,r.kt)("li",{parentName:"ul"},"Platform SDK should be exported as a class named ",(0,r.kt)("inlineCode",{parentName:"li"},"LogtoClient"),".")),(0,r.kt)("h2",{id:"basic-types"},"Basic Types"),(0,r.kt)(p,{mdxType:"PlatformBasicTypes"}),(0,r.kt)("h2",{id:"logtoclient"},"LogtoClient"),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)(c,{mdxType:"PlatformLogtoClientProperties"}),(0,r.kt)("h3",{id:"methods"},"Methods"),(0,r.kt)(u,{mdxType:"PlatformLogtoClientMethods"}))}b.isMDXComponent=!0}}]);