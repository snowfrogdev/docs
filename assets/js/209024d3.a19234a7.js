"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[85295],{49613:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return c}});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=d(n),c=r,k=m["".concat(p,".").concat(c)]||m[c]||u[c]||i;return n?a.createElement(k,l(l({ref:t},s),{},{components:n})):a.createElement(k,l({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},79315:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return u}});var a=n(665),r=n(40151),i=(n(59496),n(49613)),l=["components"],o={},p="Configuration",d={unversionedId:"docs/references/core/configuration",id:"version-1.x/docs/references/core/configuration",title:"Configuration",description:"Environment variables",source:"@site/versioned_docs/version-1.x/docs/references/core/configuration.md",sourceDirName:"docs/references/core",slug:"/docs/references/core/configuration",permalink:"/docs/references/core/configuration",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/versioned_docs/version-1.x/docs/references/core/configuration.md",tags:[],version:"1.x",frontMatter:{},sidebar:"docsSidebar",previous:{title:"\ud83e\uddf1 Core Service",permalink:"/docs/references/core/"},next:{title:"\ud83d\udcc1 API Resource",permalink:"/docs/references/resources/"}},s={},u=[{value:"Environment variables",id:"environment-variables",level:2},{value:"Usage",id:"usage",level:3},{value:"Variables",id:"variables",level:3},{value:"Enabling HTTPS",id:"enabling-https",level:3},{value:"Using Node",id:"using-node",level:4},{value:"Using a HTTPS proxy",id:"using-a-https-proxy",level:4},{value:"Database configs",id:"database-configs",level:2},{value:"Supported private key types",id:"supported-private-key-types",level:3}],m={toc:u};function c(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"configuration"},"Configuration"),(0,i.kt)("h2",{id:"environment-variables"},"Environment variables"),(0,i.kt)("h3",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Logto handles environment variables in the following order:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"System environment variables"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},".env")," file in the project root, which conforms with ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/motdotla/dotenv#readme"},"dotenv")," format")),(0,i.kt)("p",null,"Thus the system environment variables will override the values in ",(0,i.kt)("inlineCode",{parentName:"p"},".env"),"."),(0,i.kt)("h3",{id:"variables"},"Variables"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"If you run Logto via ",(0,i.kt)("inlineCode",{parentName:"p"},"npm start")," in the project root, ",(0,i.kt)("inlineCode",{parentName:"p"},"NODE_ENV")," will always be ",(0,i.kt)("inlineCode",{parentName:"p"},"production"),".")),(0,i.kt)("p",null,"In default values, ",(0,i.kt)("inlineCode",{parentName:"p"},"protocol")," will be either ",(0,i.kt)("inlineCode",{parentName:"p"},"http")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"https")," according to your HTTPS config."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Key"),(0,i.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"NODE_ENV"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"'production' ","|"," 'test' ","|"," undefined")),(0,i.kt)("td",{parentName:"tr",align:null},"What kind of environment that Logto runs in.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"PORT"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"3001")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:null},"The local port that Logto listens to.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ADMIN_PORT"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"3002")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:null},"The local port that Logto Admin Console listens to.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ADMIN_DISABLE_LOCALHOST"),(0,i.kt)("td",{parentName:"tr",align:null},"N/A"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"string ","|"," boolean ","|"," number")),(0,i.kt)("td",{parentName:"tr",align:null},"Set it to ",(0,i.kt)("inlineCode",{parentName:"td"},"1")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"true")," to disable the port for Admin Console. With ",(0,i.kt)("inlineCode",{parentName:"td"},"ADMIN_ENDPOINT")," unset, it'll completely disable the Admin Console.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"DB_URL"),(0,i.kt)("td",{parentName:"tr",align:null},"N/A"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("a",{parentName:"td",href:"https://www.postgresql.org/docs/14/libpq-connect.html#id-1.7.3.8.3.6"},"Postgres DSN")," for Logto database.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"HTTPS_CERT_PATH"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"string ","|"," undefined")),(0,i.kt)("td",{parentName:"tr",align:null},"See ",(0,i.kt)("a",{parentName:"td",href:"#enabling-https"},"Enabling HTTPS")," for details.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"HTTPS_KEY_PATH"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"string ","|"," undefined")),(0,i.kt)("td",{parentName:"tr",align:null},"Ditto.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"TRUST_PROXY_HEADER"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:null},"Ditto.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ENDPOINT"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"'protocol://localhost:$PORT'")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},"You may specify a URL with your custom domain for online testing or production. This will also affect the value of the ",(0,i.kt)("a",{parentName:"td",href:"https://openid.net/specs/openid-connect-core-1_0.html#IssuerIdentifier"},"OIDC issuer identifier"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ADMIN_ENDPOINT"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"'protocol://localhost:$ADMIN_PORT'")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},"You may specify a URL with your custom domain for production (E.g. ",(0,i.kt)("inlineCode",{parentName:"td"},"ADMIN_ENDPOINT=https://admin.domain.com"),"). This will also affect the value of Admin Console Redirect URIs.")))),(0,i.kt)("h3",{id:"enabling-https"},"Enabling HTTPS"),(0,i.kt)("h4",{id:"using-node"},"Using Node"),(0,i.kt)("p",null,"Node natively supports HTTPS. Provide ",(0,i.kt)("strong",{parentName:"p"},"BOTH")," ",(0,i.kt)("inlineCode",{parentName:"p"},"HTTPS_CERT_PATH")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"HTTPS_KEY_PATH")," to enable HTTPS via Node."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"HTTPS_CERT_PATH")," implies the path to your HTTPS certificate, while ",(0,i.kt)("inlineCode",{parentName:"p"},"HTTPS_KEY_PATH")," implies the path to your HTTPS key."),(0,i.kt)("h4",{id:"using-a-https-proxy"},"Using a HTTPS proxy"),(0,i.kt)("p",null,"Another common practice is to have an HTTPS proxy in front of Node (E.g. Nginx)."),(0,i.kt)("p",null,"In this case, you're likely want to set ",(0,i.kt)("inlineCode",{parentName:"p"},"TRUST_PROXY_HEADER")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," which indicates if proxy header fields should be trusted. Logto will pass the value to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/koajs/koa/blob/master/docs/api/index.md#settings"},"Koa app settings"),"."),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/panva/node-oidc-provider/blob/main/docs/README.md#trusting-tls-offloading-proxies"},"Trusting TLS offloading proxies")," for when to configure this field."),(0,i.kt)("h2",{id:"database-configs"},"Database configs"),(0,i.kt)("p",null,"Managing too many environment variables are not efficient and flexible, so most of our general configs are stored in the database table ",(0,i.kt)("inlineCode",{parentName:"p"},"logto_configs"),"."),(0,i.kt)("p",null,"The table is a simple key-value storage, and the key is enumerable as following:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Key"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"oidc.cookieKeys"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"string[]")),(0,i.kt)("td",{parentName:"tr",align:null},"The string array of the ",(0,i.kt)("a",{parentName:"td",href:"https://github.com/panva/node-oidc-provider/blob/main/docs/README.md#cookieskeys"},"signing cookie keys"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"oidc.privateKeys"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("code",null,"string[]")),(0,i.kt)("td",{parentName:"tr",align:null},"The string array of the private key content for ",(0,i.kt)("a",{parentName:"td",href:"https://openid.net/specs/openid-connect-core-1_0.html#Signing"},"OIDC JWT signing"),".")))),(0,i.kt)("h3",{id:"supported-private-key-types"},"Supported private key types"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"EC (P-256, secp256k1, P-384, and P-521 curves)"),(0,i.kt)("li",{parentName:"ul"},"RSA"),(0,i.kt)("li",{parentName:"ul"},"OKP (Ed25519, Ed448, X25519, X448 sub types)")))}c.isMDXComponent=!0}}]);