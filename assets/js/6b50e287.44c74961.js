"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[43034],{49613:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return m}});var r=n(59496);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var s=r.createContext({}),p=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},d=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,s=t.parentName,d=a(t,["components","mdxType","originalType","parentName"]),g=p(n),m=i,c=g["".concat(s,".").concat(m)]||g[m]||k[m]||o;return n?r.createElement(c,l(l({ref:e},d),{},{components:n})):r.createElement(c,l({ref:e},d))}));function m(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,l=new Array(o);l[0]=g;var a={};for(var s in e)hasOwnProperty.call(e,s)&&(a[s]=e[s]);a.originalType=t,a.mdxType="string"==typeof t?t:i,l[1]=a;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},12106:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return k}});var r=n(665),i=n(40151),o=(n(59496),n(49613)),l=["components"],a={},s="Core",p={unversionedId:"sdk/Kotlin/kotlin/io.logto.sdk.core/-core/index",id:"sdk/Kotlin/kotlin/io.logto.sdk.core/-core/index",title:"Core",description:"object Core",source:"@site/docs/sdk/Kotlin/kotlin/io.logto.sdk.core/-core/index.md",sourceDirName:"sdk/Kotlin/kotlin/io.logto.sdk.core/-core",slug:"/sdk/Kotlin/kotlin/io.logto.sdk.core/-core/",permalink:"/sdk/Kotlin/kotlin/io.logto.sdk.core/-core/",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/sdk/Kotlin/kotlin/io.logto.sdk.core/-core/index.md",tags:[],version:"current",frontMatter:{},sidebar:"sdkSidebar",previous:{title:"io.logto.sdk.core",permalink:"/sdk/Kotlin/kotlin/io.logto.sdk.core/"},next:{title:"io.logto.sdk.core.constant",permalink:"/sdk/Kotlin/kotlin/io.logto.sdk.core.constant/"}},d={},k=[{value:"Functions",id:"functions",level:2}],g={toc:k};function m(t){var e=t.components,n=(0,i.Z)(t,l);return(0,o.kt)("wrapper",(0,r.Z)({},g,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"core"},"Core"),(0,o.kt)("p",null,"object Core"),(0,o.kt)("h2",{id:"functions"},"Functions"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"fetchJwksJson"),(0,o.kt)("td",{parentName:"tr",align:null},"fun fetchJwksJson(jwksUri: ",(0,o.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", completion: ",(0,o.kt)("a",{parentName:"td",href:"/sdk/Kotlin/kotlin/io.logto.sdk.core.http/-http-completion/"},"HttpCompletion"),"<",(0,o.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),">",")")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"fetchOidcConfig"),(0,o.kt)("td",{parentName:"tr",align:null},"fun fetchOidcConfig(endpoint: ",(0,o.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", completion: ",(0,o.kt)("a",{parentName:"td",href:"/sdk/Kotlin/kotlin/io.logto.sdk.core.http/-http-completion/"},"HttpCompletion"),"<",(0,o.kt)("a",{parentName:"td",href:"/sdk/Kotlin/kotlin/io.logto.sdk.core.type/-oidc-config-response/"},"OidcConfigResponse"),">",")")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"fetchTokenByAuthorizationCode"),(0,o.kt)("td",{parentName:"tr",align:null},"fun fetchTokenByAuthorizationCode(tokenEndpoint: ",(0,o.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", clientId: ",(0,o.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", redirectUri: ",(0,o.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", codeVerifier: ",(0,o.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", code: ",(0,o.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", resource: ",(0,o.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),"?, completion: ",(0,o.kt)("a",{parentName:"td",href:"/sdk/Kotlin/kotlin/io.logto.sdk.core.http/-http-completion/"},"HttpCompletion"),"<",(0,o.kt)("a",{parentName:"td",href:"/sdk/Kotlin/kotlin/io.logto.sdk.core.type/-code-token-response/"},"CodeTokenResponse"),">",")")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"fetchTokenByRefreshToken"),(0,o.kt)("td",{parentName:"tr",align:null},"fun fetchTokenByRefreshToken(tokenEndpoint: ",(0,o.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", clientId: ",(0,o.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", refreshToken: ",(0,o.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", resource: ",(0,o.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),"?, scopes: ",(0,o.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"},"List"),"<",(0,o.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),">","?, completion: ",(0,o.kt)("a",{parentName:"td",href:"/sdk/Kotlin/kotlin/io.logto.sdk.core.http/-http-completion/"},"HttpCompletion"),"<",(0,o.kt)("a",{parentName:"td",href:"/sdk/Kotlin/kotlin/io.logto.sdk.core.type/-refresh-token-token-response/"},"RefreshTokenTokenResponse"),">",")")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"generateSignInUri"),(0,o.kt)("td",{parentName:"tr",align:null},"fun generateSignInUri(authorizationEndpoint: ",(0,o.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", clientId: ",(0,o.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", redirectUri: ",(0,o.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", codeChallenge: ",(0,o.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", state: ",(0,o.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", scopes: ",(0,o.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"},"List"),"<",(0,o.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),">","?, resources: ",(0,o.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"},"List"),"<",(0,o.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),">","?, prompt: ",(0,o.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),"?): ",(0,o.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"generateSignOutUri"),(0,o.kt)("td",{parentName:"tr",align:null},"fun generateSignOutUri(endSessionEndpoint: ",(0,o.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", idToken: ",(0,o.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", postLogoutRedirectUri: ",(0,o.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),"? = null): ",(0,o.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"revoke"),(0,o.kt)("td",{parentName:"tr",align:null},"fun revoke(revocationEndpoint: ",(0,o.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", clientId: ",(0,o.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", token: ",(0,o.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", completion: ",(0,o.kt)("a",{parentName:"td",href:"/sdk/Kotlin/kotlin/io.logto.sdk.core.http/-http-empty-completion/"},"HttpEmptyCompletion"),")")))))}m.isMDXComponent=!0}}]);