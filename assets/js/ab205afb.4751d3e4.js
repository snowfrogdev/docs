"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[30798],{49613:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return k}});var o=t(59496);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),d=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=d(e.components);return o.createElement(c.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=d(t),k=r,f=p["".concat(c,".").concat(k)]||p[k]||l[k]||i;return t?o.createElement(f,s(s({ref:n},u),{},{components:t})):o.createElement(f,s({ref:n},u))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=p;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,s[1]=a;for(var d=2;d<i;d++)s[d]=t[d];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8582:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return k},frontMatter:function(){return a},metadata:function(){return d},toc:function(){return l}});var o=t(665),r=t(40151),i=(t(59496),t(49613)),s=["components"],a={sidebar_position:2},c=void 0,d={unversionedId:"sdk/Swift/Logto/Enums/LogtoCore",id:"sdk/Swift/Logto/Enums/LogtoCore",title:"LogtoCore",description:"ENUM",source:"@site/docs/sdk/Swift/Logto/Enums/LogtoCore.md",sourceDirName:"sdk/Swift/Logto/Enums",slug:"/sdk/Swift/Logto/Enums/LogtoCore",permalink:"/sdk/Swift/Logto/Enums/LogtoCore",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/sdk/Swift/Logto/Enums/LogtoCore.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"sdkSidebar",previous:{title:"JwtField",permalink:"/sdk/Swift/Logto/Enums/JwtField"},next:{title:"LogtoErrors",permalink:"/sdk/Swift/Logto/Enums/LogtoErrors"}},u={},l=[{value:"Structs",id:"structs",level:2},{value:"CodeTokenResponse",id:"codetokenresponse",level:3},{value:"OidcConfigResponse",id:"oidcconfigresponse",level:3},{value:"RefreshTokenTokenResponse",id:"refreshtokentokenresponse",level:3},{value:"UserInfoResponse",id:"userinforesponse",level:3},{value:"Properties",id:"properties",level:2},{value:"<code>postHeaders</code>",id:"postheaders",level:3},{value:"Methods",id:"methods",level:2},{value:"<code>fetchOidcConfig(useSession:uri:)</code>",id:"fetchoidcconfigusesessionuri",level:3},{value:"<code>fetchToken(useSession:byAuthorizationCode:codeVerifier:tokenEndpoint:clientId:redirectUri:)</code>",id:"fetchtokenusesessionbyauthorizationcodecodeverifiertokenendpointclientidredirecturi",level:3},{value:"<code>fetchToken(useSession:byRefreshToken:tokenEndpoint:clientId:resource:scopes:)</code>",id:"fetchtokenusesessionbyrefreshtokentokenendpointclientidresourcescopes",level:3},{value:"<code>fetchUserInfo(useSession:userInfoEndpoint:accessToken:)</code>",id:"fetchuserinfousesessionuserinfoendpointaccesstoken",level:3},{value:"<code>fetchJwkSet(useSession:jwksUri:)</code>",id:"fetchjwksetusesessionjwksuri",level:3},{value:"<code>generateSignInUri(authorizationEndpoint:clientId:redirectUri:codeChallenge:state:scopes:resources:)</code>",id:"generatesigninuriauthorizationendpointclientidredirecturicodechallengestatescopesresources",level:3},{value:"<code>generateSignOutUri(endSessionEndpoint:idToken:postLogoutRedirectUri:)</code>",id:"generatesignouturiendsessionendpointidtokenpostlogoutredirecturi",level:3},{value:"<code>revoke(useSession:token:revocationEndpoint:clientId:)</code>",id:"revokeusesessiontokenrevocationendpointclientid",level:3},{value:"<code>verifyAndParseSignInCallbackUri(_:redirectUri:state:)</code>",id:"verifyandparsesignincallbackuri_redirecturistate",level:3}],p={toc:l};function k(e){var n=e.components,t=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"ENUM")),(0,i.kt)("h1",{id:"logtocore"},(0,i.kt)("inlineCode",{parentName:"h1"},"LogtoCore")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"public enum LogtoCore\n")),(0,i.kt)("h2",{id:"structs"},"Structs"),(0,i.kt)("h3",{id:"codetokenresponse"},(0,i.kt)("a",{parentName:"h3",href:"/sdk/Swift/Logto/Structs/LogtoCore.CodeTokenResponse"},"CodeTokenResponse")),(0,i.kt)("h3",{id:"oidcconfigresponse"},(0,i.kt)("a",{parentName:"h3",href:"/sdk/Swift/Logto/Structs/LogtoCore.OidcConfigResponse"},"OidcConfigResponse")),(0,i.kt)("h3",{id:"refreshtokentokenresponse"},(0,i.kt)("a",{parentName:"h3",href:"/sdk/Swift/Logto/Structs/LogtoCore.RefreshTokenTokenResponse"},"RefreshTokenTokenResponse")),(0,i.kt)("h3",{id:"userinforesponse"},(0,i.kt)("a",{parentName:"h3",href:"/sdk/Swift/Logto/Structs/LogtoCore.UserInfoResponse"},"UserInfoResponse")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"postheaders"},(0,i.kt)("inlineCode",{parentName:"h3"},"postHeaders")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},'static let postHeaders: [String: String] = [\n    "Content-Type": "application/x-www-form-urlencoded",\n]\n')),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"fetchoidcconfigusesessionuri"},(0,i.kt)("inlineCode",{parentName:"h3"},"fetchOidcConfig(useSession:uri:)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"static func fetchOidcConfig(\n    useSession session: NetworkSession = URLSession.shared,\n    uri: URL\n) async throws -> OidcConfigResponse\n")),(0,i.kt)("h3",{id:"fetchtokenusesessionbyauthorizationcodecodeverifiertokenendpointclientidredirecturi"},(0,i.kt)("inlineCode",{parentName:"h3"},"fetchToken(useSession:byAuthorizationCode:codeVerifier:tokenEndpoint:clientId:redirectUri:)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"static func fetchToken(\n    useSession session: NetworkSession = URLSession.shared,\n    byAuthorizationCode code: String,\n    codeVerifier: String,\n    tokenEndpoint: String,\n    clientId: String,\n    redirectUri: String\n) async throws -> CodeTokenResponse\n")),(0,i.kt)("p",null,"Fetch token by ",(0,i.kt)("inlineCode",{parentName:"p"},"authorization_code"),".\nThe returned ",(0,i.kt)("inlineCode",{parentName:"p"},"access_token")," is only for ",(0,i.kt)("a",{parentName:"p",href:"https://openid.net/specs/openid-connect-core-1_0.html#UserInfo"},"UserInfo Endpoint"),".\nNote the function will NOT validate any token in the response."),(0,i.kt)("h3",{id:"fetchtokenusesessionbyrefreshtokentokenendpointclientidresourcescopes"},(0,i.kt)("inlineCode",{parentName:"h3"},"fetchToken(useSession:byRefreshToken:tokenEndpoint:clientId:resource:scopes:)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"static func fetchToken(\n    useSession session: NetworkSession = URLSession.shared,\n    byRefreshToken refreshToken: String,\n    tokenEndpoint: String,\n    clientId: String,\n    resource: String?,\n    scopes: [String]\n) async throws -> RefreshTokenTokenResponse\n")),(0,i.kt)("p",null,"Fetch token by ",(0,i.kt)("inlineCode",{parentName:"p"},"refresh_token"),".\nNote the function will NOT validate any token in the response."),(0,i.kt)("h3",{id:"fetchuserinfousesessionuserinfoendpointaccesstoken"},(0,i.kt)("inlineCode",{parentName:"h3"},"fetchUserInfo(useSession:userInfoEndpoint:accessToken:)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"static func fetchUserInfo(\n    useSession session: NetworkSession = URLSession.shared,\n    userInfoEndpoint: String,\n    accessToken: String\n) async throws -> UserInfoResponse\n")),(0,i.kt)("h3",{id:"fetchjwksetusesessionjwksuri"},(0,i.kt)("inlineCode",{parentName:"h3"},"fetchJwkSet(useSession:jwksUri:)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"static func fetchJwkSet(\n    useSession session: NetworkSession = URLSession.shared,\n    jwksUri: String\n) async throws -> JWKSet\n")),(0,i.kt)("h3",{id:"generatesigninuriauthorizationendpointclientidredirecturicodechallengestatescopesresources"},(0,i.kt)("inlineCode",{parentName:"h3"},"generateSignInUri(authorizationEndpoint:clientId:redirectUri:codeChallenge:state:scopes:resources:)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"static func generateSignInUri(\n    authorizationEndpoint: String,\n    clientId: String,\n    redirectUri: URL,\n    codeChallenge: String,\n    state: String,\n    scopes: [String] = [],\n    resources: [String] = []\n) throws -> URL\n")),(0,i.kt)("h3",{id:"generatesignouturiendsessionendpointidtokenpostlogoutredirecturi"},(0,i.kt)("inlineCode",{parentName:"h3"},"generateSignOutUri(endSessionEndpoint:idToken:postLogoutRedirectUri:)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"static func generateSignOutUri(\n    endSessionEndpoint: String,\n    idToken: String,\n    postLogoutRedirectUri: String?\n) throws -> URL\n")),(0,i.kt)("h3",{id:"revokeusesessiontokenrevocationendpointclientid"},(0,i.kt)("inlineCode",{parentName:"h3"},"revoke(useSession:token:revocationEndpoint:clientId:)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"static func revoke(\n    useSession session: NetworkSession = URLSession.shared,\n    token: String,\n    revocationEndpoint: String,\n    clientId: String\n) async throws\n")),(0,i.kt)("h3",{id:"verifyandparsesignincallbackuri_redirecturistate"},(0,i.kt)("inlineCode",{parentName:"h3"},"verifyAndParseSignInCallbackUri(_:redirectUri:state:)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"static func verifyAndParseSignInCallbackUri(\n    _ callbackUri: URL,\n    redirectUri: URL,\n    state: String\n) throws -> String\n")),(0,i.kt)("p",null,"Verify the given ",(0,i.kt)("inlineCode",{parentName:"p"},"callbackUri")," matches the requirements and return ",(0,i.kt)("inlineCode",{parentName:"p"},"code")," parameter if success."))}k.isMDXComponent=!0}}]);