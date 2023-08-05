"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[47917],{49613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(n),f=r,g=p["".concat(u,".").concat(f)]||p[f]||d[f]||o;return n?a.createElement(g,l(l({ref:t},c),{},{components:n})):a.createElement(g,l({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},21522:function(e,t,n){n.d(t,{Z:function(){return l}});n(59496);var a=n(45924),r="tabItem_ojA4",o=n(4637);function l(e){var t=e.children,n=e.hidden,l=e.className;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r,l),hidden:n,children:t})}},36884:function(e,t,n){n.d(t,{Z:function(){return T}});var a=n(59496),r=n(45924),o=n(32173),l=n(5734),i=n(27236),u=n(34857),s=n(55635);function c(e){return function(e){var t,n;return null!=(t=null==(n=a.Children.map(e,(function(e){if(!e||(0,a.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:c(n);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,o=(0,l.k6)(),u=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:r});return[(0,i._X)(u),(0,a.useCallback)((function(e){if(u){var t=new URLSearchParams(o.location.search);t.set(u,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[u,o])]}function g(e){var t,n,r,o,l=e.defaultValue,i=e.queryString,u=void 0!==i&&i,c=e.groupId,g=d(e),b=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:l,tabValues:g})})),m=b[0],v=b[1],y=f({queryString:u,groupId:c}),k=y[0],h=y[1],x=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:c}.groupId),n=(0,s.Nk)(t),r=n[0],o=n[1],[r,(0,a.useCallback)((function(e){t&&o.set(e)}),[t,o])]),T=x[0],I=x[1],w=function(){var e=null!=k?k:T;return p({value:e,tabValues:g})?e:null}();return(0,a.useLayoutEffect)((function(){w&&v(w)}),[w]),{selectedValue:m,selectValue:(0,a.useCallback)((function(e){if(!p({value:e,tabValues:g}))throw new Error("Can't select invalid tab value="+e);v(e),h(e),I(e)}),[h,I,g]),tabValues:g}}var b=n(62607),m="tabList_by9y",v="tabItem_Dr3M",y=n(4637);function k(e){var t=e.className,n=e.block,a=e.selectedValue,l=e.selectValue,i=e.tabValues,u=[],s=(0,o.o5)().blockElementScrollPositionUntilNextRender,c=function(e){var t=e.currentTarget,n=u.indexOf(t),r=i[n].value;r!==a&&(s(t),l(r))},d=function(e){var t,n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var a,r=u.indexOf(e.currentTarget)+1;n=null!=(a=u[r])?a:u[0];break;case"ArrowLeft":var o,l=u.indexOf(e.currentTarget)-1;n=null!=(o=u[l])?o:u[u.length-1]}null==(t=n)||t.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:i.map((function(e){var t=e.value,n=e.label,o=e.attributes;return(0,y.jsx)("li",Object.assign({role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:function(e){return u.push(e)},onKeyDown:d,onClick:c},o,{className:(0,r.Z)("tabs__item",v,null==o?void 0:o.className,{"tabs__item--active":a===t}),children:null!=n?n:t}),t)}))})}function h(e){var t=e.lazy,n=e.children,r=e.selectedValue,o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var l=o.find((function(e){return e.props.value===r}));return l?(0,a.cloneElement)(l,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:o.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})}))})}function x(e){var t=g(e);return(0,y.jsxs)("div",{className:(0,r.Z)("tabs-container",m),children:[(0,y.jsx)(k,Object.assign({},e,t)),(0,y.jsx)(h,Object.assign({},e,t))]})}function T(e){var t=(0,b.Z)();return(0,y.jsx)(x,Object.assign({},e),String(t))}},60887:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return f}});var a=n(665),r=n(40151),o=(n(59496),n(49613)),l=n(21522),i=n(36884),u=["components"],s={sidebar_position:4},c="Manage database configs",d={unversionedId:"docs/tutorials/using-cli/manage-database-configs",id:"version-1.x/docs/tutorials/using-cli/manage-database-configs",title:"Manage database configs",description:"Logto helps to maintain some technical configs, such as OIDC and Cookie keys. Before we can managing them via Admin Console or Management API, you can use CLI to achieve the goal.",source:"@site/versioned_docs/version-1.x/docs/tutorials/using-cli/manage-database-configs.mdx",sourceDirName:"docs/tutorials/using-cli",slug:"/docs/tutorials/using-cli/manage-database-configs",permalink:"/docs/tutorials/using-cli/manage-database-configs",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/versioned_docs/version-1.x/docs/tutorials/using-cli/manage-database-configs.mdx",tags:[],version:"1.x",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"Database alteration",permalink:"/docs/tutorials/using-cli/database-alteration"},next:{title:"Translation",permalink:"/docs/tutorials/using-cli/translation"}},p={},f=[{value:"Get config by key",id:"get-config-by-key",level:2},{value:"Set config by key",id:"set-config-by-key",level:2}],g={toc:f};function b(e){var t=e.components,n=(0,r.Z)(e,u);return(0,o.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"manage-database-configs"},"Manage database configs"),(0,o.kt)("p",null,"Logto helps to maintain some technical configs, such as OIDC and Cookie keys. Before we can managing them via Admin Console or Management API, you can use CLI to achieve the goal."),(0,o.kt)("h2",{id:"get-config-by-key"},"Get config by key"),(0,o.kt)("p",null,"Usage:"),(0,o.kt)(i.Z,{groupId:"cmd",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"cli",label:"CLI",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"logto db config get <key> [keys...]\n"))),(0,o.kt)(l.Z,{value:"npx",label:"npx",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx @logto/cli db config get <key> [keys...]\n")))),(0,o.kt)("p",null,"Say you want to get the OIDC private keys:"),(0,o.kt)(i.Z,{groupId:"cmd",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"cli",label:"CLI",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"logto db config get oidc.privateKeys\n"))),(0,o.kt)(l.Z,{value:"npx",label:"npx",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx @logto/cli db config get oidc.privateKeys\n")))),(0,o.kt)("p",null,"The output will be like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'oidc.privateKeys=["\\n-----BEGIN PRIVATE KEY-----\\nMIIJRAIBA..."]\n')),(0,o.kt)("p",null,"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"logto db config get --help")," for all available keys, or see ",(0,o.kt)("a",{parentName:"p",href:"/docs/references/core/configuration#database-configs"},"Configuration")," for detailed explanation."),(0,o.kt)("h2",{id:"set-config-by-key"},"Set config by key"),(0,o.kt)(i.Z,{groupId:"cmd",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"cli",label:"CLI",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"logto db config set <key> [keys...]\n"))),(0,o.kt)(l.Z,{value:"npx",label:"npx",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx @logto/cli db config set <key> [keys...]\n")))),(0,o.kt)("p",null,"Say you want to set the OIDC Cookie keys:"),(0,o.kt)(i.Z,{groupId:"cmd",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"cli",label:"CLI",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'logto db config set oidc.cookieKeys "[\\"key1\\",\\"key2\\"]"\n'))),(0,o.kt)(l.Z,{value:"npx",label:"npx",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'npx @logto/cli db config set oidc.cookieKeys "[\\"key1\\",\\"key2\\"]"\n')))),(0,o.kt)("p",null,"Normally, the value to set should be a valid JSON string, and follows the pre-defined type definition. Run ",(0,o.kt)("inlineCode",{parentName:"p"},"logto db config set --help")," for all available keys, or see ",(0,o.kt)("a",{parentName:"p",href:"/docs/references/core/configuration#database-configs"},"Configuration")," for detailed explanation."))}b.isMDXComponent=!0}}]);