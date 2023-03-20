"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[99904],{49613:function(t,n,e){e.d(n,{Zo:function(){return d},kt:function(){return k}});var r=e(59496);function a(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function l(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function o(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?l(Object(e),!0).forEach((function(n){a(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function i(t,n){if(null==t)return{};var e,r,a=function(t,n){if(null==t)return{};var e,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)e=l[r],n.indexOf(e)>=0||(a[e]=t[e]);return a}(t,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)e=l[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(a[e]=t[e])}return a}var s=r.createContext({}),p=function(t){var n=r.useContext(s),e=n;return t&&(e="function"==typeof t?t(n):o(o({},n),t)),e},d=function(t){var n=p(t.components);return r.createElement(s.Provider,{value:n},t.children)},g={inlineCode:"code",wrapper:function(t){var n=t.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(t,n){var e=t.components,a=t.mdxType,l=t.originalType,s=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),m=p(e),k=a,c=m["".concat(s,".").concat(k)]||m[k]||g[k]||l;return e?r.createElement(c,o(o({ref:n},d),{},{components:e})):r.createElement(c,o({ref:n},d))}));function k(t,n){var e=arguments,a=n&&n.mdxType;if("string"==typeof t||a){var l=e.length,o=new Array(l);o[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var p=2;p<l;p++)o[p]=e[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,e)}m.displayName="MDXCreateElement"},40362:function(t,n,e){e.r(n),e.d(n,{assets:function(){return d},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return g}});var r=e(665),a=e(40151),l=(e(59496),e(49613)),o=["components"],i={},s="LogtoConfig",p={unversionedId:"sdk/Kotlin/android/io.logto.sdk.android.type/-logto-config/index",id:"sdk/Kotlin/android/io.logto.sdk.android.type/-logto-config/index",title:"LogtoConfig",description:'class LogtoConfig(val endpoint String, scopes List&lt;String&gt;? = null, val usingPersistStorage String = "consent")',source:"@site/docs/sdk/Kotlin/android/io.logto.sdk.android.type/-logto-config/index.md",sourceDirName:"sdk/Kotlin/android/io.logto.sdk.android.type/-logto-config",slug:"/sdk/Kotlin/android/io.logto.sdk.android.type/-logto-config/",permalink:"/sdk/Kotlin/android/io.logto.sdk.android.type/-logto-config/",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/sdk/Kotlin/android/io.logto.sdk.android.type/-logto-config/index.md",tags:[],version:"current",frontMatter:{},sidebar:"sdkSidebar",previous:{title:"AccessToken",permalink:"/sdk/Kotlin/android/io.logto.sdk.android.type/-access-token/"},next:{title:"io.logto.sdk.android.util",permalink:"/sdk/Kotlin/android/io.logto.sdk.android.util/"}},d={},g=[{value:"Constructors",id:"constructors",level:2},{value:"Properties",id:"properties",level:2},{value:"Extensions",id:"extensions",level:2}],m={toc:g};function k(t){var n=t.components,e=(0,a.Z)(t,o);return(0,l.kt)("wrapper",(0,r.Z)({},m,e,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"logtoconfig"},"LogtoConfig"),(0,l.kt)("p",null,"class LogtoConfig(val endpoint: ",(0,l.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", val appId: ",(0,l.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", scopes: ",(0,l.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"},"List"),"<",(0,l.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),">","? = null, val resources: ",(0,l.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"},"List"),"<",(0,l.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),">","? = null, val usingPersistStorage: ",(0,l.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"},"Boolean")," = true, val prompt: ",(0,l.kt)("a",{parentName:"p",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),' = "consent")'),(0,l.kt)("h2",{id:"constructors"},"Constructors"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LogtoConfig"),(0,l.kt)("td",{parentName:"tr",align:null},"fun LogtoConfig(endpoint: ",(0,l.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", appId: ",(0,l.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),", scopes: ",(0,l.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"},"List"),"<",(0,l.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),">","? = null, resources: ",(0,l.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"},"List"),"<",(0,l.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),">","? = null, usingPersistStorage: ",(0,l.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"},"Boolean")," = true, prompt: ",(0,l.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),' = "consent")')))),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"appId"),(0,l.kt)("td",{parentName:"tr",align:null},"val appId: ",(0,l.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"endpoint"),(0,l.kt)("td",{parentName:"tr",align:null},"val endpoint: ",(0,l.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"resources"),(0,l.kt)("td",{parentName:"tr",align:null},"val resources: ",(0,l.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"},"List"),"<",(0,l.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),">","? = null")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"scopes"),(0,l.kt)("td",{parentName:"tr",align:null},"val scopes: ",(0,l.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.collections/-list/index.html"},"List"),"<",(0,l.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),">")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"usingPersistStorage"),(0,l.kt)("td",{parentName:"tr",align:null},"val usingPersistStorage: ",(0,l.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-boolean/index.html"},"Boolean")," = true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"prompt"),(0,l.kt)("td",{parentName:"tr",align:null},"val prompt: ",(0,l.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"),' = "consent"')))),(0,l.kt)("h2",{id:"extensions"},"Extensions"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Summary"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"oidcConfigEndpoint"),(0,l.kt)("td",{parentName:"tr",align:null},"val LogtoConfig.oidcConfigEndpoint: ",(0,l.kt)("a",{parentName:"td",href:"https://kotlinlang.org/api/latest/jvm/stdlib/kotlin/-string/index.html"},"String"))))))}k.isMDXComponent=!0}}]);