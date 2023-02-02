"use strict";(self.webpackChunk_logto_docs=self.webpackChunk_logto_docs||[]).push([[3521],{49613:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return u}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=c(r),u=o,h=d["".concat(l,".").concat(u)]||d[u]||p[u]||s;return r?n.createElement(h,a(a({ref:t},m),{},{components:r})):n.createElement(h,a({ref:t},m))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},11023:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var n=r(665),o=r(40151),s=(r(59496),r(49613)),a=["components"],i={},l="Manage permissions and roles",c={unversionedId:"docs/recipes/rbac/manage-permissions-and-roles",id:"docs/recipes/rbac/manage-permissions-and-roles",title:"Manage permissions and roles",description:"This page is for managing permissions and roles via Admin Console. Visit API Reference for RESTful APIs.",source:"@site/docs/docs/recipes/rbac/manage-permissions-and-roles.md",sourceDirName:"docs/recipes/rbac",slug:"/docs/recipes/rbac/manage-permissions-and-roles",permalink:"/docs/recipes/rbac/manage-permissions-and-roles",draft:!1,editUrl:"https://github.com/logto-io/docs/tree/master/docs/docs/recipes/rbac/manage-permissions-and-roles.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"\ud83d\udd10 RBAC (Role Based Access Control)",permalink:"/docs/recipes/rbac/"},next:{title:"Protect your API Resource with RBAC",permalink:"/docs/recipes/rbac/protect-resource"}},m={},p=[{value:"Manage API Resource permissions",id:"manage-api-resource-permissions",level:2},{value:"Manage roles",id:"manage-roles",level:2},{value:"Create and define a new role",id:"create-and-define-a-new-role",level:3},{value:"View or update a role",id:"view-or-update-a-role",level:3},{value:"Add users to roles",id:"add-users-to-roles",level:3},{value:"Remove users from roles",id:"remove-users-from-roles",level:3},{value:"Manage role permissions",id:"manage-role-permissions",level:3},{value:"Manage a user&#39;s roles",id:"manage-a-users-roles",level:2}],d={toc:p};function u(e){var t=e.components,i=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"manage-permissions-and-roles"},"Manage permissions and roles"),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"This page is for managing permissions and roles via Admin Console. Visit ",(0,s.kt)("a",{parentName:"p",href:"/api"},"API Reference")," for RESTful APIs.")),(0,s.kt)("h2",{id:"manage-api-resource-permissions"},"Manage API Resource permissions"),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"The pre-defined Logto Management API is immutable. A new API Resource is needed to proceed.")),(0,s.kt)("p",null,'Permissions are set in the API Resource level. Navigate to the "API Resources" tab, click the API Resource you want to manage, and then go to the "Permissions" tab.'),(0,s.kt)("p",null,'To create a new permission, click the "Create permission" button in the top right corner. It\'s important to provide a name and details for the permission, as it will make it easier to identify and manage permissions.'),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Manage Permissions",src:r(30731).Z,width:"2880",height:"1800"})),(0,s.kt)("p",null,"To delete a permission, click the trash bin icon in the very right of the row."),(0,s.kt)("h2",{id:"manage-roles"},"Manage roles"),(0,s.kt)("h3",{id:"create-and-define-a-new-role"},"Create and define a new role"),(0,s.kt)("p",null,"A role is a group of permissions. Navigate to the \"Roles\" tab, and you'll see a list of roles you've defined."),(0,s.kt)("p",null,'To create a new role, click the "Create Role" button in the top right corner. A dialog box will appear, where you can give the role a name and description, and assign one or more permissions to the role.'),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Keep in mind that while it is technically possible to create a role ",(0,s.kt)("em",{parentName:"li"},"without")," permissions or users assigned, it is not recommended to create too many empty roles. This will disrupt the harmony of role management and render the RBAC system ineffective."),(0,s.kt)("li",{parentName:"ol"},"Permissions are grouped by API in the selector, allowing you to add them in bulk or select them individually. The selected permissions will be displayed on the right side."),(0,s.kt)("li",{parentName:"ol"},"After creating a role, you will be taken to the user assignment page, where you can authorize the role to specific users. You can search for users by name, email, phone number, username or ID if available. If you prefer, you can also skip this step and assign users to the role later.")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Create Role",src:r(78459).Z,width:"3630",height:"1648"})),(0,s.kt)("h3",{id:"view-or-update-a-role"},"View or update a role"),(0,s.kt)("p",null,"After completing the role creation and assignment process or click a role name in the roles list, you will be directed to the role details page. The layout and controls on this page are consistent with other entities. To delete the role, click the three dots button."),(0,s.kt)("p",null,"You can also edit the role name and description, inspect and manage the permissions and users assigned to the role at any time."),(0,s.kt)("admonition",{type:"danger"},(0,s.kt)("p",{parentName:"admonition"},"Deleting the role will eliminate all the permissions linked to it for the impacted users and delete the connection between roles, users, and permissions.")),(0,s.kt)("h3",{id:"add-users-to-roles"},"Add users to roles"),(0,s.kt)("p",null,'To add more users to a role, navigate to the role\'s details page and click the "Users" tab. Then, click "Assign Users" to open the dialog.'),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Manage Role Users",src:r(57394).Z,width:"2880",height:"1800"})),(0,s.kt)("p",null,'Search or browse for the desired users and click "Assign Users" to add them to the role.'),(0,s.kt)("h3",{id:"remove-users-from-roles"},"Remove users from roles"),(0,s.kt)("p",null,'To remove a user from the role, under the "Users" tab, click the trash bin icon in the very right of the row.'),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"Taking users out of a designated role does not delete them from your user base, they will still exist but will no longer have access to the permissions associated with that role.")),(0,s.kt)("h3",{id:"manage-role-permissions"},"Manage role permissions"),(0,s.kt)("p",null,"If you need to change the capabilities of a role, you can easily do so by assigning or removing permissions."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},'To assign new permissions, simply go to the "Permissions" and click "Assign Permissions." From there, you can select the permissions you want to add to the role.'),(0,s.kt)("li",{parentName:"ul"},"To remove existing permissions, click on the trash bin icon in the very right of the row.")),(0,s.kt)("admonition",{type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"If a permission is deleted, users with this role will lose the access granted by this permission.")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Manage Role Permissions",src:r(55275).Z,width:"2880",height:"1800"})),(0,s.kt)("h2",{id:"manage-a-users-roles"},"Manage a user's roles"),(0,s.kt)("p",null,"You've learned how to manage roles by assigning or removing users from them, but you can also achieve the same result from the user's perspective."),(0,s.kt)("p",null,'If you need to change a user\'s access, go to the "User Management" tab and click the desired user name. In the "Roles" tab of the user details page, you can easily assign or remove roles to meet your desired outcome.'),(0,s.kt)("admonition",{type:"caution"},(0,s.kt)("p",{parentName:"admonition"},"Removing a role from a user means that the user will no longer have access to all the permissions associated with that role. The role itself will still exist, but it will no longer be linked to that specific user.")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Manage User Roles",src:r(39979).Z,width:"2880",height:"1800"})))}u.isMDXComponent=!0},78459:function(e,t,r){t.Z=r.p+"assets/images/create-role-41cd6a664ad058397190224785976881.png"},30731:function(e,t,r){t.Z=r.p+"assets/images/manage-permissions-985f25b0b875f2b4a856e896a53b85c2.png"},55275:function(e,t,r){t.Z=r.p+"assets/images/manage-role-permissions-8d47ef3979abef82c70c91a04042ec6a.png"},57394:function(e,t,r){t.Z=r.p+"assets/images/manage-role-users-036d7aee211cb8735d7d9b92ee64d805.png"},39979:function(e,t,r){t.Z=r.p+"assets/images/manage-user-roles-2194f19b14b54b56463da15cc83098b2.png"}}]);