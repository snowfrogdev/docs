"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[81430],{49613:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return g}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=l(r),g=o,m=d["".concat(s,".").concat(g)]||d[g]||p[g]||a;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},67245:function(e,t,r){r.d(t,{Z:function(){return i}});r(59496);var n=r(45924),o="tabItem_wP3Q",a=r(4637);function i(e){var t=e.children,r=e.hidden,i=e.className;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.Z)(o,i),hidden:r,children:t})}},31614:function(e,t,r){r.d(t,{Z:function(){return S}});var n=r(59496),o=r(45924),a=r(43226),i=r(59630),u=r(84534),s=r(27995);function l(e){return function(e){return n.Children.map(e,(function(e){if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function c(e){var t=e.values,r=e.children;return(0,n.useMemo)((function(){var e=null!=t?t:l(r);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,r])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function d(e){var t=e.queryString,r=void 0!==t&&t,o=e.groupId,u=(0,a.k6)(),s=function(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:r,groupId:o});return[(0,i._X)(s),(0,n.useCallback)((function(e){if(s){var t=new URLSearchParams(u.location.search);t.set(s,e),u.replace(Object.assign({},u.location,{search:t.toString()}))}}),[s,u])]}function g(e){var t,r,o,a,i=e.defaultValue,u=e.queryString,l=void 0!==u&&u,g=e.groupId,m=c(e),h=(0,n.useState)((function(){return function(e){var t,r=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var o=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:i,tabValues:m})})),f=h[0],k=h[1],v=d({queryString:l,groupId:g}),y=v[0],b=v[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:g}.groupId),r=(0,s.Nk)(t),o=r[0],a=r[1],[o,(0,n.useCallback)((function(e){t&&a.set(e)}),[t,a])]),S=w[0],N=w[1],j=function(){var e=null!=y?y:S;return p({value:e,tabValues:m})?e:null}();return(0,n.useLayoutEffect)((function(){j&&k(j)}),[j]),{selectedValue:f,selectValue:(0,n.useCallback)((function(e){if(!p({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);k(e),b(e),N(e)}),[b,N,m]),tabValues:m}}var m=r(80274),h=r(45605),f="tabList_npZo",k="tabItem_InYg",v=r(4637);function y(e){var t=e.className,r=e.block,n=e.selectedValue,a=e.selectValue,i=e.tabValues,u=[],s=(0,m.o5)().blockElementScrollPositionUntilNextRender,l=function(e){var t=e.currentTarget,r=u.indexOf(t),o=i[r].value;o!==n&&(s(t),a(o))},c=function(e){var t,r=null;switch(e.key){case"Enter":l(e);break;case"ArrowRight":var n,o=u.indexOf(e.currentTarget)+1;r=null!=(n=u[o])?n:u[0];break;case"ArrowLeft":var a,i=u.indexOf(e.currentTarget)-1;r=null!=(a=u[i])?a:u[u.length-1]}null==(t=r)||t.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t),children:i.map((function(e){var t=e.value,r=e.label,a=e.attributes;return(0,v.jsx)("li",Object.assign({role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:function(e){return u.push(e)},onKeyDown:c,onClick:l},a,{className:(0,o.Z)("tabs__item",k,null==a?void 0:a.className,{"tabs__item--active":n===t}),children:null!=r?r:t}),t)}))})}function b(e){var t=e.lazy,r=e.children,o=e.selectedValue;if(r=Array.isArray(r)?r:[r],t){var a=r.find((function(e){return e.props.value===o}));return a?(0,n.cloneElement)(a,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:r.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==o})}))})}function w(e){var t=g(e);return(0,v.jsxs)("div",{className:(0,o.Z)("tabs-container",f),children:[(0,v.jsx)(y,Object.assign({},e,t)),(0,v.jsx)(b,Object.assign({},e,t))]})}function S(e){var t=(0,h.Z)();return(0,v.jsx)(w,Object.assign({},e),String(t))}},86268:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return g}});var n=r(665),o=r(40151),a=(r(59496),r(49613)),i=r(67245),u=r(31614),s=["components"],l={sidebar_label:"Spring Boot"},c="Protect your API on Spring Boot",p={unversionedId:"docs/recipes/protect-your-api/spring-boot",id:"docs/recipes/protect-your-api/spring-boot",title:"Protect your API on Spring Boot",description:"This tutorial assumes you have created an API Resource http3000/ in Admin Console.",source:"@site/docs/docs/recipes/protect-your-api/spring-boot.mdx",sourceDirName:"docs/recipes/protect-your-api",slug:"/docs/recipes/protect-your-api/spring-boot",permalink:"/docs/recipes/protect-your-api/spring-boot",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/recipes/protect-your-api/spring-boot.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Spring Boot"},sidebar:"docsSidebar",previous:{title:"Python",permalink:"/docs/recipes/protect-your-api/python"},next:{title:"\ud83c\udfa8 Customize sign-in experience",permalink:"/docs/recipes/customize-sie/"}},d={},g=[{value:"Start a Spring Boot project",id:"start-a-spring-boot-project",level:2},{value:"Add dependencies",id:"add-dependencies",level:2},{value:"Get issuer and JWKS URI",id:"get-issuer-and-jwks-uri",level:2},{value:"Configure application",id:"configure-application",level:2},{value:"Provide audience validator",id:"provide-audience-validator",level:2},{value:"Configure Spring Security",id:"configure-spring-security",level:2},{value:"Add APIs",id:"add-apis",level:2},{value:"Access protected API",id:"access-protected-api",level:2},{value:"Further readings",id:"further-readings",level:2}],m={toc:g};function h(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"protect-your-api-on-spring-boot"},"Protect your API on Spring Boot"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This tutorial assumes you have created an API Resource ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:3000/")," in Admin Console.\nIf you are not ready, ",(0,a.kt)("a",{parentName:"p",href:"/docs/recipes/protect-your-api/#register-the-api-resources-using-logto-admin-console"},"read this")," before continuing.")),(0,a.kt)("p",null,"Your web application may run on the server-side using Spring Boot framework.\nFor now, you need to integrate Logto in Spring Boot manually.\nThis article guides you on how to finish it step by step.\nAnd we use Gradle, Java, and Spring Security to take the example."),(0,a.kt)("h2",{id:"start-a-spring-boot-project"},"Start a Spring Boot project"),(0,a.kt)("p",null,"With ",(0,a.kt)("a",{parentName:"p",href:"https://start.spring.io/"},"Spring Initializr"),", you can quickly start a Spring Boot project.\nUse the following options:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Gradle Project"),(0,a.kt)("li",{parentName:"ul"},"Language: Java"),(0,a.kt)("li",{parentName:"ul"},"Spring Boot: 2.7.2")),(0,a.kt)("p",null,"Generate and open the project."),(0,a.kt)("h2",{id:"add-dependencies"},"Add dependencies"),(0,a.kt)("p",null,"Add the dependencies to your Gradle project build file ",(0,a.kt)("inlineCode",{parentName:"p"},"build.gradle"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n    implementation 'org.springframework.boot:spring-boot-starter-web'\n    implementation 'org.springframework.boot:spring-boot-starter-oauth2-resource-server'\n}\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Since Spring Boot and Spring Security have built-in support for both OAuth2 resource server and JWT validation,\nyou DO NOT need to add additional libraries from Logto to integrate."),(0,a.kt)("p",{parentName:"admonition"},"See ",(0,a.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-security/reference/servlet/oauth2/resource-server/index.html"},"Spring Security OAuth 2.0 Resource Server"),"\nand ",(0,a.kt)("a",{parentName:"p",href:"https://spring.io/guides/topicals/spring-security-architecture"},"Spring Security Architecture"),"\nfor more details.")),(0,a.kt)("h2",{id:"get-issuer-and-jwks-uri"},"Get issuer and JWKS URI"),(0,a.kt)("p",null,"All tokens are issued by the ",(0,a.kt)("a",{parentName:"p",href:"https://openid.net/specs/openid-connect-core-1_0.html#IssuerIdentifier"},"issuer"),",\nand signed with ",(0,a.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc7517"},"JWK"),"\n(See ",(0,a.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc7515"},"JWS")," for more details)."),(0,a.kt)("p",null,"Before moving on, you will need to get an issuer and a JWKS URI to verify the issuer and the signature of the Bearer Token (",(0,a.kt)("inlineCode",{parentName:"p"},"access_token"),")."),(0,a.kt)("p",null,"By default, your Logto's issuer and JWKS URI are ",(0,a.kt)("inlineCode",{parentName:"p"},"https://<your-logto-domain>/oidc")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"https://<your-logto-domain>/oidc/jwks"),"\n(e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:3001/oidc")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:3001/oidc/jwks")," in the local development environment)."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"All the latest Logto Authorization Server Configurations can be found by ",(0,a.kt)("inlineCode",{parentName:"p"},"https://<your-logto-domain>/oidc/.well-known/openid-configuration"),"\n(e.g. ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:3001/oidc/.well-known/openid-configuration")," in the local development environment),\nincluding the ",(0,a.kt)("strong",{parentName:"p"},"issuer"),", ",(0,a.kt)("strong",{parentName:"p"},"jwks_uri")," and other authorization configs.\nFor example:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  // ...\n  "issuer": "https://<your-logto-domain>/oidc",\n  "jwks_uri": "https://<your-logto-domain>/oidc/jwks"\n  // ...\n}\n'))),(0,a.kt)("h2",{id:"configure-application"},"Configure application"),(0,a.kt)("p",null,"Use an ",(0,a.kt)("inlineCode",{parentName:"p"},"application.yml")," file (instead of the default ",(0,a.kt)("inlineCode",{parentName:"p"},"application.properties"),")\nto configure the server port, audience, and OAuth2 resource server."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"# path/to/project/src/main/resources/application.yaml\nserver:\n  port: 3000\n\nlogto:\n  audience: http://localhost:3000/\n\nspring:\n  security:\n    oauth2:\n      resourceserver:\n        jwt:\n          issuer-uri: <your-logto-issuer-uri> # e.g. http://localhost:3001/oidc\n          jwk-set-uri: <your-logto-jwks-uri> # e.g. http://localhost:3001/oidc/jwks\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"audience"),":\nThe unique API identifier (i.e. API indicator) of your protected API resource."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"spring.security.oauth2.resourceserver.jwt.issuer-uri"),":\nThe ",(0,a.kt)("inlineCode",{parentName:"li"},"iss")," claim value and the issuer URI in the JWT issued by Logto.\nFill out the ",(0,a.kt)("inlineCode",{parentName:"li"},"issuer")," value from the previous section."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"spring.security.oauth2.resourceserver.jwt.jwk-set-uri"),":\nSpring Security uses this URI to get the authorization server's public keys to validate JWT signatures.\nFill out the ",(0,a.kt)("inlineCode",{parentName:"li"},"jwks_uri")," value from the previous section.")),(0,a.kt)("h2",{id:"provide-audience-validator"},"Provide audience validator"),(0,a.kt)("p",null,"Provide your own ",(0,a.kt)("inlineCode",{parentName:"p"},"AudienceValidator")," class that implements the ",(0,a.kt)("inlineCode",{parentName:"p"},"OAuth2TokenValidator")," interface\nto validate whether the required audience is present in the JWT."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'// path/to/project/src/main/java/io/logto/springboot/sample/validator/AudienceValidator.java\npackage io.logto.springboot.sample.validator;\n\nimport org.springframework.security.oauth2.core.OAuth2Error;\nimport org.springframework.security.oauth2.core.OAuth2TokenValidator;\nimport org.springframework.security.oauth2.core.OAuth2TokenValidatorResult;\nimport org.springframework.security.oauth2.jwt.Jwt;\n\npublic class AudienceValidator implements OAuth2TokenValidator<Jwt> {\n\n    private final OAuth2Error oAuth2Error = new OAuth2Error("invalid_token", "Required audience not found", null);\n\n    private final String audience;\n\n    public AudienceValidator(String audience) {\n        this.audience = audience;\n    }\n\n    @Override\n    public OAuth2TokenValidatorResult validate(Jwt jwt) {\n        if (!jwt.getAudience().contains(audience)) {\n            return OAuth2TokenValidatorResult.failure(oAuth2Error);\n        }\n\n        return OAuth2TokenValidatorResult.success();\n    }\n}\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"For ",(0,a.kt)("a",{parentName:"p",href:"/docs/recipes/rbac"},"\ud83d\udd10 RBAC"),", scope validation is also required.")),(0,a.kt)("h2",{id:"configure-spring-security"},"Configure Spring Security"),(0,a.kt)("p",null,"Spring Security makes it easy to configure your application as a Resource Server\nand validate the JWT from the Bearer Token in the request header."),(0,a.kt)("p",null,"You need to provide instances of ",(0,a.kt)("inlineCode",{parentName:"p"},"JwtDecoder")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"SecurityFilterChain")," (as Spring beans), and add the ",(0,a.kt)("inlineCode",{parentName:"p"},"@EnableWebSecurity")," annotation."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'// path/to/project/src/main/java/io/logto/springboot/sample/configuration/SecurityConfiguration.java\npackage io.logto.springboot.sample.configuration;\n\nimport com.nimbusds.jose.JOSEObjectType;\nimport com.nimbusds.jose.proc.DefaultJOSEObjectTypeVerifier;\nimport com.nimbusds.jose.proc.SecurityContext;\nimport io.logto.springboot.sample.validator.AudienceValidator;\nimport org.springframework.beans.factory.annotation.Value;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.security.config.annotation.web.builders.HttpSecurity;\nimport org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;\nimport org.springframework.security.config.annotation.web.configurers.oauth2.server.resource.OAuth2ResourceServerConfigurer;\nimport org.springframework.security.oauth2.core.DelegatingOAuth2TokenValidator;\nimport org.springframework.security.oauth2.core.OAuth2TokenValidator;\nimport org.springframework.security.oauth2.jwt.Jwt;\nimport org.springframework.security.oauth2.jwt.JwtDecoder;\nimport org.springframework.security.oauth2.jwt.JwtValidators;\nimport org.springframework.security.oauth2.jwt.NimbusJwtDecoder;\nimport org.springframework.security.web.SecurityFilterChain;\n\n@EnableWebSecurity\npublic class SecurityConfiguration {\n\n    @Value("${logto.audience}")\n    private String audience;\n\n    @Value("${spring.security.oauth2.resourceserver.jwt.issuer-uri}")\n    private String issuer;\n\n    @Value("${spring.security.oauth2.resourceserver.jwt.jwk-set-uri}")\n    private String jwksUri;\n\n    @Bean\n    public JwtDecoder jwtDecoder() {\n        NimbusJwtDecoder jwtDecoder = NimbusJwtDecoder.withJwkSetUri(jwksUri)\n                // The decoder should support the token type: Access Token + JWT.\n                .jwtProcessorCustomizer(customizer -> customizer.setJWSTypeVerifier(\n                        new DefaultJOSEObjectTypeVerifier<SecurityContext>(new JOSEObjectType("at+jwt"))))\n                .build();\n\n        jwtDecoder.setJwtValidator(new DelegatingOAuth2TokenValidator<>(\n                new AudienceValidator(audience),\n                new JwtIssuerValidator(issuer),\n                new JwtTimestampValidator()));\n\n        return jwtDecoder;\n    }\n\n    @Bean\n    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {\n        http.oauth2ResourceServer(OAuth2ResourceServerConfigurer::jwt).cors().and()\n                .authorizeRequests(customizer -> customizer\n                        // Only authenticated requests can access your protected APIs\n                        // e.g. `http://localhost:3000/` and `http://localhost:3000/profile`.\n                        .mvcMatchers("/", "/secret").authenticated()\n                        // Anyone can access the public profile.\n                        .mvcMatchers("/profile").permitAll()\n                );\n        return http.build();\n    }\n}\n')),(0,a.kt)("h2",{id:"add-apis"},"Add APIs"),(0,a.kt)("p",null,"Add a controller to provide the protected and public APIs:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'// path/to/project/src/main/java/io/logto/springboot/sample/controller/ProtectedController.java\npackage io.logto.springboot.sample.controller;\n\nimport org.springframework.web.bind.annotation.CrossOrigin;\nimport org.springframework.web.bind.annotation.GetMapping;\nimport org.springframework.web.bind.annotation.RestController;\n\n// Only allow all origins for the sample.\n// (Production applications should configure CORS carefully.)\n@CrossOrigin(origins = "*")\n@RestController\npublic class ProtectedController {\n\n    @GetMapping("/")\n    public String protectedRoot() {\n        return "Protected root.";\n    }\n\n    @GetMapping("/secret")\n    public String protectedSecret() {\n        return "Protected secret.";\n    }\n\n    @GetMapping("/profile")\n    public String publicProfile() {\n        return "Public profile.";\n    }\n}\n')),(0,a.kt)("h2",{id:"access-protected-api"},"Access protected API"),(0,a.kt)("p",null,"Build and run your Spring Boot web application, e.g. execute the ",(0,a.kt)("inlineCode",{parentName:"p"},"bootRun")," Gradle task."),(0,a.kt)(u.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"linux-or-macos",label:"Linux or macOS",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"./gradlew bootRun\n"))),(0,a.kt)(i.Z,{value:"windows",label:"Windows",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"gradlew.bat bootRun\n")))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This tutorial assumes you have the Access Token for an API resource ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:3000/")," before making a request.\nIf you are not ready, ",(0,a.kt)("a",{parentName:"p",href:"/docs/recipes/protect-your-api/#integrate-the-resources-authorization-flow-into-your-client-application"},"read this")," before continuing.")),(0,a.kt)("p",null,"Request your protected API with the Access Token as the Bearer token in the Authorization header,\ne.g. execute the ",(0,a.kt)("inlineCode",{parentName:"p"},"curl")," command."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl --include 'http://localhost:3000/secret' \\\n--header 'Authorization: Bearer <your-access-token>'\n")),(0,a.kt)("p",null,"If succeeded, you will get a response with 200 status:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"HTTP/1.1 200\n...\n")),(0,a.kt)("p",null,"Otherwise, you will get a response with 401 status like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'HTTP/1.1 401\n...\nWWW-Authenticate: Bearer error="invalid_token", error_description="An error occurred while attempting to decode the Jwt: Signed JWT rejected: Invalid signature", error_uri="https://tools.ietf.org/html/rfc6750#section-3.1"\n...\n')),(0,a.kt)("h2",{id:"further-readings"},"Further readings"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/recipes/protect-your-api/"},"Protect your API")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.spring.io/spring-security/reference/servlet/oauth2/resource-server/index.html"},"Spring Security OAuth 2.0 Resource Server")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://spring.io/guides/topicals/spring-security-architecture"},"Spring Security Architecture"))))}h.isMDXComponent=!0}}]);