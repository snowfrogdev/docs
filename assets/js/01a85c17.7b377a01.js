"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[64013],{84376:function(e,s,a){a.d(s,{Z:function(){return N}});var t=a(40151),n=(a(59496),a(45924)),r=a(45933),i=a(67002),l=a(5120),c=a(25270),o="sidebar_g4th",u="sidebarItemTitle_Okuq",d="sidebarItemList_TuF9",m="sidebarItem_cE8_",h="sidebarItemLink_sMhI",g="sidebarItemLinkActive_D00T",b=a(4637);function j(e){var s=e.sidebar;return(0,b.jsx)("aside",{className:"col col--3",children:(0,b.jsxs)("nav",{className:(0,n.Z)(o,"thin-scrollbar"),"aria-label":(0,c.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,b.jsx)("div",{className:(0,n.Z)(u,"margin-bottom--md"),children:s.title}),(0,b.jsx)("ul",{className:(0,n.Z)(d,"clean-list"),children:s.items.map((function(e){return(0,b.jsx)("li",{className:m,children:(0,b.jsx)(l.Z,{isNavLink:!0,to:e.permalink,className:h,activeClassName:g,children:e.title})},e.permalink)}))})]})})}var p=a(7984);function v(e){var s=e.sidebar;return(0,b.jsx)("ul",{className:"menu__list",children:s.items.map((function(e){return(0,b.jsx)("li",{className:"menu__list-item",children:(0,b.jsx)(l.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)}))})}function f(e){return(0,b.jsx)(p.Zo,{component:v,props:e})}function x(e){var s=e.sidebar,a=(0,i.i)();return null!=s&&s.items.length?"mobile"===a?(0,b.jsx)(f,{sidebar:s}):(0,b.jsx)(j,{sidebar:s}):null}var _=["sidebar","toc","children"];function N(e){var s=e.sidebar,a=e.toc,i=e.children,l=(0,t.Z)(e,_),c=s&&s.items.length>0;return(0,b.jsx)(r.Z,Object.assign({},l,{children:(0,b.jsx)("div",{className:"container margin-vert--lg",children:(0,b.jsxs)("div",{className:"row",children:[(0,b.jsx)(x,{sidebar:s}),(0,b.jsx)("main",{className:(0,n.Z)("col",{"col--7":c,"col--9 col--offset-1":!c}),itemScope:!0,itemType:"http://schema.org/Blog",children:i}),a&&(0,b.jsx)("div",{className:"col col--2",children:a})]})})}))}},34525:function(e,s,a){a.r(s),a.d(s,{default:function(){return g}});a(59496);var t=a(45924),n=a(25270);var r=a(33859),i=a(14755),l=a(84376),c=a(80727),o="tag_QoiI",u=a(4637);function d(e){var s=e.letterEntry;return(0,u.jsxs)("article",{children:[(0,u.jsx)("h2",{children:s.letter}),(0,u.jsx)("ul",{className:"padding--none",children:s.tags.map((function(e){return(0,u.jsx)("li",{className:o,children:(0,u.jsx)(c.Z,Object.assign({},e))},e.permalink)}))}),(0,u.jsx)("hr",{})]})}function m(e){var s=function(e){var s={};return Object.values(e).forEach((function(e){var a=function(e){return e[0].toUpperCase()}(e.label);null!=s[a]||(s[a]=[]),s[a].push(e)})),Object.entries(s).sort((function(e,s){var a=e[0],t=s[0];return a.localeCompare(t)})).map((function(e){return{letter:e[0],tags:e[1].sort((function(e,s){return e.label.localeCompare(s.label)}))}}))}(e.tags);return(0,u.jsx)("section",{className:"margin-vert--lg",children:s.map((function(e){return(0,u.jsx)(d,{letterEntry:e},e.letter)}))})}var h=a(92749);function g(e){var s=e.tags,a=e.sidebar,c=(0,n.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});return(0,u.jsxs)(r.FG,{className:(0,t.Z)(i.k.wrapper.blogPages,i.k.page.blogTagsListPage),children:[(0,u.jsx)(r.d,{title:c}),(0,u.jsx)(h.Z,{tag:"blog_tags_list"}),(0,u.jsxs)(l.Z,{sidebar:a,children:[(0,u.jsx)("h1",{children:c}),(0,u.jsx)(m,{tags:s})]})]})}},80727:function(e,s,a){a.d(s,{Z:function(){return o}});a(59496);var t=a(45924),n=a(5120),r="tag_amvJ",i="tagRegular_G2B2",l="tagWithCount_u2DA",c=a(4637);function o(e){var s=e.permalink,a=e.label,o=e.count;return(0,c.jsxs)(n.Z,{href:s,className:(0,t.Z)(r,o?l:i),children:[a,o&&(0,c.jsx)("span",{children:o})]})}}}]);