"use strict";(self.webpackChunkgalaxy_dev_docs=self.webpackChunkgalaxy_dev_docs||[]).push([[5546],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=u(n),m=a,f=s["".concat(p,".").concat(m)]||s[m]||d[m]||i;return n?r.createElement(f,o(o({ref:t},l),{},{components:n})):r.createElement(f,o({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=s;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},925:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],c={id:"mutate-cred-item-input",title:"MutateCredItemInput"},p=void 0,u={unversionedId:"graphql-api/references/inputs/mutate-cred-item-input",id:"graphql-api/references/inputs/mutate-cred-item-input",title:"MutateCredItemInput",description:"No description",source:"@site/docs/4-graphql-api/references/inputs/mutate-cred-item-input.mdx",sourceDirName:"4-graphql-api/references/inputs",slug:"/graphql-api/references/inputs/mutate-cred-item-input",permalink:"/galaxy-dev-docs/graphql-api/references/inputs/mutate-cred-item-input",editUrl:"https://github.com/ProjectGalaxyHQ/galaxy-dev-docs/blob/main/docs/4-graphql-api/references/inputs/mutate-cred-item-input.mdx",tags:[],version:"current",frontMatter:{id:"mutate-cred-item-input",title:"MutateCredItemInput"},sidebar:"docs",previous:{title:"MutateCredInput",permalink:"/galaxy-dev-docs/graphql-api/references/inputs/mutate-cred-input"},next:{title:"MutateNFTCoreInput",permalink:"/galaxy-dev-docs/graphql-api/references/inputs/mutate-nftcore-input"}},l={},d=[{value:"Fields",id:"fields",level:3},{value:"<code>auth</code> (<code>Auth</code>)",id:"auth-auth",level:4},{value:"<code>credId</code> (<code>Int</code>)",id:"credid-int",level:4},{value:"<code>operation</code> (<code>Operation</code>)",id:"operation-operation",level:4},{value:"<code>items</code> (<code>String</code>)",id:"items-string",level:4}],s={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input MutateCredItemInput {\n  auth: Auth!\n  credId: Int!\n  operation: Operation!\n  items: [String!]!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"auth-auth"},(0,i.kt)("inlineCode",{parentName:"h4"},"auth")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/inputs/auth"},(0,i.kt)("inlineCode",{parentName:"a"},"Auth")),")"),(0,i.kt)("h4",{id:"credid-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"credId")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("h4",{id:"operation-operation"},(0,i.kt)("inlineCode",{parentName:"h4"},"operation")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/enums/operation"},(0,i.kt)("inlineCode",{parentName:"a"},"Operation")),")"),(0,i.kt)("h4",{id:"items-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"items")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"))}m.isMDXComponent=!0}}]);