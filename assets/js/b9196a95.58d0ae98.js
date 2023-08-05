"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[54697],{49613:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return g}});var o=n(59496);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=o.createContext({}),c=function(t){var e=o.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},p=function(t){var e=c(t.components);return o.createElement(u.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,u=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),d=c(n),g=a,h=d["".concat(u,".").concat(g)]||d[g]||s[g]||i;return n?o.createElement(h,r(r({ref:e},p),{},{components:n})):o.createElement(h,r({ref:e},p))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:a,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},63243:function(t,e,n){n.d(e,{ZP:function(){return u}});var o=n(665),a=n(40151),i=(n(59496),n(49613)),r=["components"],l={toc:[{value:"Sign in with GitHub account",id:"sign-in-with-github-account",level:3},{value:"Create and configure OAuth app",id:"create-and-configure-oauth-app",level:3},{value:"Managing OAuth apps",id:"managing-oauth-apps",level:3},{value:"Compose the connector JSON",id:"compose-the-connector-json",level:3},{value:"Config types",id:"config-types",level:4}]};function u(t){var e=t.components,n=(0,a.Z)(t,r);return(0,i.kt)("wrapper",(0,o.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"sign-in-with-github-account"},"Sign in with GitHub account"),(0,i.kt)("p",null,"Go to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/"},"GitHub website")," and sign in with your GitHub account. You may register a new account if you don't have one."),(0,i.kt)("h3",{id:"create-and-configure-oauth-app"},"Create and configure OAuth app"),(0,i.kt)("p",null,"Follow the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app"},"creating an OAuth App")," guide, and register a new application."),(0,i.kt)("p",null,"Name your new OAuth application in ",(0,i.kt)("strong",{parentName:"p"},"Application name")," and fill up ",(0,i.kt)("strong",{parentName:"p"},"Homepage URL")," of the app.\nYou can leave ",(0,i.kt)("strong",{parentName:"p"},"Application description")," field blank and customize ",(0,i.kt)("strong",{parentName:"p"},"Authorization callback URL")," as ",(0,i.kt)("inlineCode",{parentName:"p"},"${your_logto_origin}/callback/${connector_id}"),". The ",(0,i.kt)("inlineCode",{parentName:"p"},"connector_id")," can be found on the top bar of the Logto Admin Console connector details page."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},'Note: If you encounter the error message "The redirect_uri MUST match the registered callback URL for this application." when logging in, try aligning the Authorization Callback URL of your GitHub OAuth App and your Logto App\'s redirect URL (of course, including the protocol) to resolve the issue.')),(0,i.kt)("p",null,"We suggest not to check the box before ",(0,i.kt)("strong",{parentName:"p"},"Enable Device Flow"),", or users who sign in with GitHub on mobile devices must confirm the initial sign-in action in the GitHub app. Many GitHub users do not install the GitHub mobile app on their phones, which could block the sign-in flow. Please ignore our suggestion if you are expecting end-users to confirm their sign-in flow. See details of ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/developers/apps/building-oauth-apps/authorizing-oauth-apps#device-flow"},"device flow"),"."),(0,i.kt)("h3",{id:"managing-oauth-apps"},"Managing OAuth apps"),(0,i.kt)("p",null,"Go to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/settings/developers"},"OAuth Apps page")," and you can add, edit or delete existing OAuth apps.\nYou can also find ",(0,i.kt)("inlineCode",{parentName:"p"},"Client ID")," and generate ",(0,i.kt)("inlineCode",{parentName:"p"},"Client secrets")," in OAuth app detail pages."),(0,i.kt)("h3",{id:"compose-the-connector-json"},"Compose the connector JSON"),(0,i.kt)("p",null,"Let's go back to Logto. Fill out the ",(0,i.kt)("inlineCode",{parentName:"p"},"clientId")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"clientSecret")," field with ",(0,i.kt)("em",{parentName:"p"},"Client ID")," and ",(0,i.kt)("em",{parentName:"p"},"Client Secret")," you've got from OAuth app detail pages mentioned in the previous section."),(0,i.kt)("p",null,"Here is an example of GitHub connector config JSON."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "clientID": "<your-client-id>",\n  "clientSecret": "<your-client-secret>"\n}\n')),(0,i.kt)("h4",{id:"config-types"},"Config types"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"clientId"),(0,i.kt)("td",{parentName:"tr",align:null},"string")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"clientSecret"),(0,i.kt)("td",{parentName:"tr",align:null},"string")))))}u.isMDXComponent=!0},38059:function(t,e,n){n.d(e,{ZP:function(){return d}});var o=n(665),a=n(40151),i=(n(59496),n(49613)),r=n(39933),l=n(25965),u=n(90680),c=n(58369),p=["components"],s={toc:[{value:"Add Logto SDK as a dependency",id:"add-logto-sdk-as-a-dependency",level:3},{value:"Init LogtoClient",id:"init-logtoclient",level:3},{value:"Sign in",id:"sign-in",level:3}]};function d(t){var e=t.components,n=(0,a.Z)(t,p);return(0,i.kt)("wrapper",(0,o.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"add-logto-sdk-as-a-dependency"},"Add Logto SDK as a dependency"),(0,i.kt)(r.ZP,{mdxType:"AddSdk"}),(0,i.kt)("h3",{id:"init-logtoclient"},"Init LogtoClient"),(0,i.kt)(u.ZP,{mdxType:"InitClient"}),(0,i.kt)("h3",{id:"sign-in"},"Sign in"),(0,i.kt)(l.ZP,{mdxType:"ImplementSignIn"}),(0,i.kt)(c.ZP,{sdk:"Next",mdxType:"TestYourIntegration"}))}d.isMDXComponent=!0},62413:function(t,e,n){n.d(e,{ZP:function(){return u}});var o=n(665),a=n(40151),i=(n(59496),n(49613)),r=["components"],l={toc:[]};function u(t){var e=t.components,u=(0,a.Z)(t,r);return(0,i.kt)("wrapper",(0,o.Z)({},l,u,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'To add a social connector, go to the "Connector" tab in the Admin Console, then click on "Social Connectors". From there, click "Add Social Connector".'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Connector tab",src:n(72788).Z,width:"3352",height:"1226"})),(0,i.kt)("p",null,'In the openning modal, select "',u.connector,'" and click "Next".'),(0,i.kt)("p",null,"On the next page, you will see a two-column layout with the README content on the left and configuration on the right."),(0,i.kt)("p",null,"Feel free to follow the README file in place or read the following section to complete the configuration process. If you follow the in-place guide, you can skip the next section."))}u.isMDXComponent=!0},84551:function(t,e,n){n.d(e,{ZP:function(){return c}});var o=n(665),a=n(40151),i=(n(59496),n(49613)),r=n.p+"assets/images/create-application-modal-a9838383da54c969256d05557ca13639.png",l=["components"],u={toc:[{value:"Choose your application type",id:"choose-your-application-type",level:3},{value:"Enter application name",id:"enter-application-name",level:3}]};function c(t){var e=t.components,c=(0,a.Z)(t,l);return(0,i.kt)("wrapper",(0,o.Z)({},u,c,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In you browser, open a new tab and enter the link of Logto Admin Console."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Create application",src:n(67612).Z,width:"2368",height:"226"})),(0,i.kt)("p",null,'Once the page is loaded, in the "Get Started" tab, click the "Create" button on the right, and the browser will redirect to the Application tab.'),(0,i.kt)("h3",{id:"choose-your-application-type"},"Choose your application type"),(0,i.kt)("p",null,'In the opening modal, select the "',c.type,'" option as the application type.'),(0,i.kt)("img",{src:r,alt:"Create Application modal",width:"700"}),(0,i.kt)("h3",{id:"enter-application-name"},"Enter application name"),(0,i.kt)("p",null,'Enter the application name, e.g., "Bookstore," and click "Create Application."'),(0,i.kt)("p",null,"\ud83c\udf89 Ta-da! You just created your first application in Logto. You'll see a congrats page which includes a detailed integration guide. Follow the guide to see what the experience will be in your application."))}c.isMDXComponent=!0},11895:function(t,e,n){n.d(e,{ZP:function(){return u}});var o=n(665),a=n(40151),i=(n(59496),n(49613)),r=["components"],l={toc:[]};function u(t){var e=t.components,u=(0,a.Z)(t,r);return(0,i.kt)("wrapper",(0,o.Z)({},l,u,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'Switch to the "Sign-in Experience" tab, then click the "Sign-up and Sign-in" tab.'),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If it's the first time you enter the tab, you will see a quick introduction about Sign-in Experience and its basic configuration.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Sign-in Experience tab",src:n(74673).Z,width:"3160",height:"1822"})),(0,i.kt)("p",null,'Select "None" for the "Sign-up identifier" to provide minimum sign-up effort for ',u.connector," ","sign-in, which may increase your conversion rate."),(0,i.kt)("p",null,'In the "Social sign-in" section, add "Add Social Connector" and choose "',u.connector,'". Then you should be able to see a button with text "Continue with ',u.connector,'" in the preview section.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Save changes",src:n(89913).Z,width:"2474",height:"188"})),(0,i.kt)("p",null,'Finally, click "Save Changes" on the bottom right corner.'))}u.isMDXComponent=!0},4107:function(t,e,n){n.d(e,{ZP:function(){return u}});var o=n(665),a=n(40151),i=(n(59496),n(49613)),r=["components"],l={toc:[]};function u(t){var e=t.components,n=(0,a.Z)(t,r);return(0,i.kt)("wrapper",(0,o.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"For our new friends",type:"info"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"https://logto.io"},"Logto")," is a cost-effective open-source alternative to Auth0. It offers OpenId Connect (OIDC) based authentication and authorization, with modern features like passwordless sign-in and role-based access control.")),(0,i.kt)("p",null,"In this article, we will go through the steps to quickly build the ",n.connector," sign-in experience (user authentication) with"," ",(0,i.kt)("a",{href:n.link,target:"_blank",rel:"noopener"},n.sdk),(0,i.kt)("span",null," and "),(0,i.kt)("a",{href:"https://logto.io",target:"_blank",rel:"noopener"},"Logto"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Prerequisites")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A running Logto instance. Check out the ",(0,i.kt)("a",{parentName:"li",href:"/docs/tutorials/get-started/"},"get started page")," if you don't have one."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("span",null,"Basic knowledge of"," ",(0,i.kt)("a",{href:n.link,target:"_blank",rel:"noopener"},n.sdk),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("span",null,"A usable ",n.connector," account."))))}u.isMDXComponent=!0},45793:function(t,e,n){n.d(e,{ZP:function(){return u}});var o=n(665),a=n(40151),i=(n(59496),n(49613)),r=["components"],l={toc:[]};function u(t){var e=t.components,n=(0,a.Z)(t,r);return(0,i.kt)("wrapper",(0,o.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'Double check you have filled out necessary values in the Logto connector configuration area. Click "Save and Done" (or "Save Changes") and the ',n.connector," connector should be available now."))}u.isMDXComponent=!0},58369:function(t,e,n){n.d(e,{ZP:function(){return u}});var o=n(665),a=n(40151),i=(n(59496),n(49613)),r=["components"],l={toc:[]};function u(t){var e=t.components,n=(0,a.Z)(t,r);return(0,i.kt)("wrapper",(0,o.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"Test your integration",type:"info"},(0,i.kt)("p",null,"Open your ",n.sdk,' app to test if the integration works. When you click the "Sign In" button, the page should be redirected to a Logto sign-in page, and you should be able to create a new account by entering username and password and complete the sign-in process.')))}u.isMDXComponent=!0},27501:function(t,e,n){n.d(e,{ZP:function(){return u}});var o=n(665),a=n(40151),i=(n(59496),n(49613)),r=["components"],l={toc:[]};function u(t){var e=t.components,n=(0,a.Z)(t,r);return(0,i.kt)("wrapper",(0,o.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Return to your ",n.sdk," app. You should now be able to sign in with ",n.connector,". Enjoy!"))}u.isMDXComponent=!0},88077:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},connector:function(){return d},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s}});var o=n(665),a=n(40151),i=(n(59496),n(49613)),r=(n(4107),n(84551),n(62413),n(45793),n(11895),n(27501),n(38059),n(63243),["components"]),l={slug:"how-to-build-github-sign-in-with-next-and-logto",authors:"logto",tags:["authentication","github","next","js","social-sign-in","sign-in","login"],title:"How to build GitHub sign-in with Next and Logto"},u=void 0,c={permalink:"/tutorial/how-to-build-github-sign-in-with-next-and-logto",source:"@site/tutorial/build-with-logto/generated-next-github.mdx",title:"How to build GitHub sign-in with Next and Logto",description:"\x3c!--",date:"2023-08-05T15:25:42.229Z",formattedDate:"August 5, 2023",tags:[{label:"authentication",permalink:"/tutorial/tags/authentication"},{label:"github",permalink:"/tutorial/tags/github"},{label:"next",permalink:"/tutorial/tags/next"},{label:"js",permalink:"/tutorial/tags/js"},{label:"social-sign-in",permalink:"/tutorial/tags/social-sign-in"},{label:"sign-in",permalink:"/tutorial/tags/sign-in"},{label:"login",permalink:"/tutorial/tags/login"}],readingTime:1.28,hasTruncateMarker:!0,authors:[{name:"Logto team",title:"Comprehensive Auth0 alternative",url:"https://logto.io",imageURL:"https://github.com/logto-io.png",key:"logto"}],frontMatter:{slug:"how-to-build-github-sign-in-with-next-and-logto",authors:"logto",tags:["authentication","github","next","js","social-sign-in","sign-in","login"],title:"How to build GitHub sign-in with Next and Logto"},prevItem:{title:"How to build SAML sign-in with Go and Logto",permalink:"/tutorial/how-to-build-saml-sign-in-with-go-and-logto"},nextItem:{title:"How to build Apple sign-in with Go and Logto",permalink:"/tutorial/how-to-build-apple-sign-in-with-go-and-logto"}},p={authorsImageUrls:[void 0]},s=[],d="GitHub",g={toc:s,connector:d};function h(t){var e=t.components,n=(0,a.Z)(t,r);return(0,i.kt)("wrapper",(0,o.Z)({},g,n,{components:e,mdxType:"MDXLayout"}))}h.isMDXComponent=!0},22042:function(t,e,n){n.d(e,{Z:function(){return r}});n(59496);var o=n(45924),a="tabItem_ojA4",i=n(4637);function r(t){var e=t.children,n=t.hidden,r=t.className;return(0,i.jsx)("div",{role:"tabpanel",className:(0,o.Z)(a,r),hidden:n,children:e})}},77477:function(t,e,n){n.d(e,{Z:function(){return y}});var o=n(59496),a=n(45924),i=n(5734),r=n(84512),l=n(8888),u=n(35312);function c(t){return function(t){var e,n;return null!=(e=null==(n=o.Children.map(t,(function(t){if(!t||(0,o.isValidElement)(t)&&(e=t.props)&&"object"==typeof e&&"value"in e)return t;var e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?e:[]}(t).map((function(t){var e=t.props;return{value:e.value,label:e.label,attributes:e.attributes,default:e.default}}))}function p(t){var e=t.values,n=t.children;return(0,o.useMemo)((function(){var t=null!=e?e:c(n);return function(t){var e=(0,l.l)(t,(function(t,e){return t.value===e.value}));if(e.length>0)throw new Error('Docusaurus error: Duplicate values "'+e.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(t),t}),[e,n])}function s(t){var e=t.value;return t.tabValues.some((function(t){return t.value===e}))}function d(t){var e=t.queryString,n=void 0!==e&&e,a=t.groupId,l=(0,i.k6)(),u=function(t){var e=t.queryString,n=void 0!==e&&e,o=t.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!o)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=o?o:null}({queryString:n,groupId:a});return[(0,r._X)(u),(0,o.useCallback)((function(t){if(u){var e=new URLSearchParams(l.location.search);e.set(u,t),l.replace(Object.assign({},l.location,{search:e.toString()}))}}),[u,l])]}function g(t){var e,n,a,i,r=t.defaultValue,l=t.queryString,c=void 0!==l&&l,g=t.groupId,h=p(t),m=(0,o.useState)((function(){return function(t){var e,n=t.defaultValue,o=t.tabValues;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!s({value:n,tabValues:o}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+o.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(e=o.find((function(t){return t.default})))?e:o[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:r,tabValues:h})})),f=m[0],A=m[1],b=d({queryString:c,groupId:g}),k=b[0],v=b[1],w=(e=function(t){return t?"docusaurus.tab."+t:null}({groupId:g}.groupId),n=(0,u.Nk)(e),a=n[0],i=n[1],[a,(0,o.useCallback)((function(t){e&&i.set(t)}),[e,i])]),y=w[0],N=w[1],I=function(){var t=null!=k?k:y;return s({value:t,tabValues:h})?t:null}();return(0,o.useLayoutEffect)((function(){I&&A(I)}),[I]),{selectedValue:f,selectValue:(0,o.useCallback)((function(t){if(!s({value:t,tabValues:h}))throw new Error("Can't select invalid tab value="+t);A(t),v(t),N(t)}),[v,N,h]),tabValues:h}}var h=n(14775),m=n(99468),f="tabList_by9y",A="tabItem_Dr3M",b=n(4637);function k(t){var e=t.className,n=t.block,o=t.selectedValue,i=t.selectValue,r=t.tabValues,l=[],u=(0,h.o5)().blockElementScrollPositionUntilNextRender,c=function(t){var e=t.currentTarget,n=l.indexOf(e),a=r[n].value;a!==o&&(u(e),i(a))},p=function(t){var e,n=null;switch(t.key){case"Enter":c(t);break;case"ArrowRight":var o,a=l.indexOf(t.currentTarget)+1;n=null!=(o=l[a])?o:l[0];break;case"ArrowLeft":var i,r=l.indexOf(t.currentTarget)-1;n=null!=(i=l[r])?i:l[l.length-1]}null==(e=n)||e.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},e),children:r.map((function(t){var e=t.value,n=t.label,i=t.attributes;return(0,b.jsx)("li",Object.assign({role:"tab",tabIndex:o===e?0:-1,"aria-selected":o===e,ref:function(t){return l.push(t)},onKeyDown:p,onClick:c},i,{className:(0,a.Z)("tabs__item",A,null==i?void 0:i.className,{"tabs__item--active":o===e}),children:null!=n?n:e}),e)}))})}function v(t){var e=t.lazy,n=t.children,a=t.selectedValue,i=(Array.isArray(n)?n:[n]).filter(Boolean);if(e){var r=i.find((function(t){return t.props.value===a}));return r?(0,o.cloneElement)(r,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map((function(t,e){return(0,o.cloneElement)(t,{key:e,hidden:t.props.value!==a})}))})}function w(t){var e=g(t);return(0,b.jsxs)("div",{className:(0,a.Z)("tabs-container",f),children:[(0,b.jsx)(k,Object.assign({},t,e)),(0,b.jsx)(v,Object.assign({},t,e))]})}function y(t){var e=(0,m.Z)();return(0,b.jsx)(w,Object.assign({},t),String(e))}},48248:function(t,e,n){n.d(e,{ZP:function(){return u}});var o=n(665),a=n(40151),i=(n(59496),n(49613)),r=["components"],l={toc:[]};function u(t){var e=t.components,n=(0,a.Z)(t,r);return(0,i.kt)("wrapper",(0,o.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Let's switch to the Application details page of Admin Console in this section. Add a Redirect URI ",(0,i.kt)("code",null,n.redirectUri),' and click "Save Changes".'),(0,i.kt)("img",{alt:"Redirect URI in Admin Console",src:n.figureSrc,width:"600px"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.oauth.com/oauth2-servers/redirect-uris/"},"Redirect URI")," is an OAuth 2.0 concept which implies the location should redirect after authentication."))}u.isMDXComponent=!0},5092:function(t,e,n){n.d(e,{ZP:function(){return c}});var o=n(665),a=n(40151),i=(n(59496),n(49613)),r=n.p+"assets/images/app-secret-2b2c12ae8557fbcf3b283bf86f3ac6db.png",l=["components"],u={toc:[]};function c(t){var e=t.components,n=(0,a.Z)(t,l);return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",null,'You can find and copy "App Secret" from application details page in Admin Console:'),(0,i.kt)("img",{alt:"App Secret",src:r,width:"586px"})))}c.isMDXComponent=!0},11331:function(t,e,n){n.d(e,{ZP:function(){return u}});var o=n(665),a=n(40151),i=(n(59496),n(49613)),r=["components"],l={toc:[]};function u(t){var e=t.components,n=(0,a.Z)(t,r);return(0,i.kt)("wrapper",(0,o.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"In the following code snippets, we assume your app is running on ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:3000"),".")))}u.isMDXComponent=!0},20814:function(t,e,n){n.d(e,{ZP:function(){return u}});var o=n(665),a=n(40151),i=(n(59496),n(49613)),r=["components"],l={toc:[]};function u(t){var e=t.components,n=(0,a.Z)(t,r);return(0,i.kt)("wrapper",(0,o.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The sign-in flow can be simplified as:"),(0,i.kt)("img",{alt:"Web sign-in flow",src:"data:image/png;base64,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",width:"700pt"}))}u.isMDXComponent=!0},39933:function(t,e,n){n.d(e,{ZP:function(){return p}});var o=n(665),a=n(40151),i=(n(59496),n(49613)),r=n(22042),l=n(77477),u=["components"],c={toc:[]};function p(t){var e=t.components,n=(0,a.Z)(t,u);return(0,i.kt)("wrapper",(0,o.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"npm",label:"npm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @logto/next\n"))),(0,i.kt)(r.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @logto/next\n"))),(0,i.kt)(r.Z,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm add @logto/next\n")))))}p.isMDXComponent=!0},25965:function(t,e,n){n.d(e,{ZP:function(){return s}});var o=n(665),a=n(40151),i=(n(59496),n(49613)),r=n(72350),l=n(48248),u=n(20814),c=["components"],p={toc:[{value:"Configure sign-in redirect URI",id:"configure-sign-in-redirect-uri",level:3},{value:"Prepare API routes",id:"prepare-api-routes",level:3},{value:"Implement sign-in button",id:"implement-sign-in-button",level:3}]};function s(t){var e=t.components,n=(0,a.Z)(t,c);return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)(u.ZP,{mdxType:"SignInFlowSummary"}),(0,i.kt)("h3",{id:"configure-sign-in-redirect-uri"},"Configure sign-in redirect URI"),(0,i.kt)(l.ZP,{figureSrc:r.Z,redirectUri:"http://localhost:3000/api/logto/sign-in-callback",mdxType:"ConfigureRedirectUri"}),(0,i.kt)("h3",{id:"prepare-api-routes"},"Prepare API routes"),(0,i.kt)("p",null,"Prepare ",(0,i.kt)("a",{parentName:"p",href:"https://nextjs.org/docs/api-routes/introduction"},"API routes")," to connect with Logto."),(0,i.kt)("p",null,"Go back to your IDE/editor, use the following code to implement the API routes first:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// pages/api/logto/[action].ts\nimport { logtoClient } from '../../../libraries/logto';\n\nexport default logtoClient.handleAuthRoutes();\n")),(0,i.kt)("p",null,"This will create 4 routes automatically:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"/api/logto/sign-in"),": Sign in with Logto."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"/api/logto/sign-in-callback"),": Handle sign-in callback."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"/api/logto/sign-out"),": Sign out with Logto."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"/api/logto/user"),": Check if user is authenticated with Logto. If yes, return user info.")),(0,i.kt)("h3",{id:"implement-sign-in-button"},"Implement sign-in button"),(0,i.kt)("p",null,"We're almost there! In the last step, we will create a sign-in button:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"import { useRouter } from 'next/router';\n\n<button onClick={() => window.location.assign('/api/logto/sign-in')}>Sign In</button>;\n")),(0,i.kt)("p",null,"Now you will be navigated to Logto sign-in page when you click the button."))}s.isMDXComponent=!0},90680:function(t,e,n){n.d(e,{ZP:function(){return p}});var o=n(665),a=n(40151),i=(n(59496),n(49613)),r=n(5092),l=n(11331),u=["components"],c={toc:[]};function p(t){var e=t.components,n=(0,a.Z)(t,u);return(0,i.kt)("wrapper",(0,o.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)(l.ZP,{mdxType:"AssumingUrl"}),(0,i.kt)(r.ZP,{mdxType:"GetAppSecret"}),(0,i.kt)("p",null,"Import and initialize LogtoClient:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// libraries/logto.ts\nimport LogtoClient from '@logto/next';\n\nexport const logtoClient = new LogtoClient({\n  appId: '<your-application-id>',\n  appSecret: '<your-app-secret-copied-from-console>',\n  endpoint: '<your-logto-endpoint>', // E.g. http://localhost:3001\n  baseUrl: '<your-nextjs-app-base-url>', // E.g. http://localhost:3000\n  cookieSecret: 'complex_password_at_least_32_characters_long',\n  cookieSecure: process.env.NODE_ENV === 'production',\n});\n")))}p.isMDXComponent=!0},72350:function(t,e,n){e.Z=n.p+"assets/images/next-redirect-uri-3200717bb327c2d84cfe6173c9d8aef5.png"},72788:function(t,e,n){e.Z=n.p+"assets/images/connector-tab-social-4e3d582ddc28ceeee3bc3abcb30d4ec0.png"},67612:function(t,e,n){e.Z=n.p+"assets/images/create-application-8ace18547a152b97cea519666a0e7bbf.png"},89913:function(t,e,n){e.Z=n.p+"assets/images/save-changes-cc32c907e69d5d865b13ee0449e34822.png"},74673:function(t,e,n){e.Z=n.p+"assets/images/sie-tab-8b47b6ad0a8bbc115fc6e2ee67ed1566.png"}}]);