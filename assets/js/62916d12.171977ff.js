"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[3298],{9613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(9496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6421:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(5443),o=n(3010),i=(n(9496),n(9613)),a=["components"],l={sidebar_position:1,slug:"/"},s="\ud83d\udc81 Introduction",u={unversionedId:"docs/README",id:"docs/README",title:"\ud83d\udc81 Introduction",description:"\ud83e\udd18 Logto helps you quickly focus on everything after signing in.",source:"@site/docs/docs/README.md",sourceDirName:"docs",slug:"/",permalink:"/",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/README.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/"},sidebar:"docsSidebar",next:{title:"\u26a1 Get started",permalink:"/docs/tutorials/get-started/"}},c={},p=[{value:"Installation",id:"installation",level:2},{value:"Docker Compose",id:"docker-compose",level:3},{value:"One-liner command",id:"one-liner-command",level:3},{value:"Prerequisites",id:"prerequisites",level:4},{value:"Download and start",id:"download-and-start",level:4},{value:"Configuration",id:"configuration",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-introduction"},"\ud83d\udc81 Introduction"),(0,i.kt)("p",null,"\ud83e\udd18 Logto helps you quickly focus on everything after signing in."),(0,i.kt)("p",null,"Main features:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"An OIDC-based identity service"),(0,i.kt)("li",{parentName:"ul"},"Multi-platform user sign-in/up experience with dark mode and SDKs (Web, iOS, and Android)"),(0,i.kt)("li",{parentName:"ul"},"Sign-in/up with dynamic SMS/Email passcode"),(0,i.kt)("li",{parentName:"ul"},"Out-of-box social sign-in integration (GitHub, Google, WeChat, Alipay, etc.)"),(0,i.kt)("li",{parentName:"ul"},"A web UI to control all above (Admin Console)"),(0,i.kt)("li",{parentName:"ul"},"Extendable multi-language support")),(0,i.kt)("p",null,'Boringly, we call it "',(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Customer_identity_access_management"},"customer identity access management"),'" (CIAM) or "customer identity solution."'),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("h3",{id:"docker-compose"},"Docker Compose"),(0,i.kt)("p",null,"TBD"),(0,i.kt)("h3",{id:"one-liner-command"},"One-liner command"),(0,i.kt)("h4",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://nodejs.org/"},"Node.js")," ",(0,i.kt)("inlineCode",{parentName:"li"},"^16.13.0")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://postgresql.org/"},"PostgreSQL")," ",(0,i.kt)("inlineCode",{parentName:"li"},"^14.0"))),(0,i.kt)("p",null,"Higher versions usually work but are not guaranteed."),(0,i.kt)("p",null,"We recommend using a new empty database which is dedicated for Logto, while it's not a hard requirement."),(0,i.kt)("h4",{id:"download-and-start"},"Download and start"),(0,i.kt)("p",null,"In your terminal:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'node -e "$(printf "%s" "$(curl -fsSL https://raw.githubusercontent.com/logto-io/logto/master/install.js)")"\n')),(0,i.kt)("p",null,"The script will download Logto and create a directory ",(0,i.kt)("inlineCode",{parentName:"p"},"logto")," in the location you ran it. After answering ",(0,i.kt)("a",{parentName:"p",href:"/docs/references/core/configuration#questions"},"several simple questions"),", you will see the message like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"App is running at http://localhost:3001\n\nVisit http://localhost:3001/welcome to continue your Logto journey.\n")),(0,i.kt)("p",null,"Heading to ",(0,i.kt)("a",{target:"_blank",href:"http://localhost:3001/welcome"},"http://localhost:3001/welcome")," to continue your Logto journey. Enjoy!"),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"Logto uses environment variables for configuration, along with ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file support. See ",(0,i.kt)("a",{parentName:"p",href:"/docs/references/core/configuration"},"Configuration")," for detailed usage and full variable list."))}m.isMDXComponent=!0}}]);