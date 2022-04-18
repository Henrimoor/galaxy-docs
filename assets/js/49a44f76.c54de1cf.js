"use strict";(self.webpackChunkgalaxy_docs=self.webpackChunkgalaxy_docs||[]).push([[2160],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return g}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),d=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=d(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=d(t),g=a,f=m["".concat(c,".").concat(g)]||m[g]||p[g]||i;return t?r.createElement(f,o(o({ref:n},s),{},{components:t})):r.createElement(f,o({ref:n},s))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8021:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return c},default:function(){return g},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return p}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),o=["components"],l={id:"dao",title:"DAO"},c=void 0,d={unversionedId:"graphql-api/references/objects/dao",id:"graphql-api/references/objects/dao",title:"DAO",description:"No description",source:"@site/docs-developer/4-graphql-api/references/objects/dao.mdx",sourceDirName:"4-graphql-api/references/objects",slug:"/graphql-api/references/objects/dao",permalink:"/developer/graphql-api/references/objects/dao",editUrl:"https://github.com/ProjectGalaxyHQ/galaxy-docs/blob/main/docs-developer/4-graphql-api/references/objects/dao.mdx",tags:[],version:"current",lastUpdatedBy:"oyyblin",lastUpdatedAt:1650254943,formattedLastUpdatedAt:"4/18/2022",frontMatter:{id:"dao",title:"DAO"},sidebar:"docs",previous:{title:"DaoCarousel",permalink:"/developer/graphql-api/references/objects/dao-carousel"},next:{title:"Error",permalink:"/developer/graphql-api/references/objects/error"}},s={},p=[{value:"Fields",id:"fields",level:3},{value:"<code>id</code> (<code>ID</code>)",id:"id-id",level:4},{value:"<code>name</code> (<code>String</code>)",id:"name-string",level:4},{value:"<code>info</code> (<code>String</code>)",id:"info-string",level:4},{value:"<code>symbol</code> (<code>String</code>)",id:"symbol-string",level:4},{value:"<code>logo</code> (<code>String</code>)",id:"logo-string",level:4},{value:"<code>alias</code> (<code>String</code>)",id:"alias-string",level:4},{value:"<code>homepage</code> (<code>String</code>)",id:"homepage-string",level:4},{value:"<code>twitter</code> (<code>String</code>)",id:"twitter-string",level:4},{value:"<code>github</code> (<code>String</code>)",id:"github-string",level:4},{value:"<code>discord</code> (<code>String</code>)",id:"discord-string",level:4},{value:"<code>medium</code> (<code>String</code>)",id:"medium-string",level:4},{value:"<code>telegram</code> (<code>String</code>)",id:"telegram-string",level:4},{value:"<code>facebook</code> (<code>String</code>)",id:"facebook-string",level:4},{value:"<code>storeOpensea</code> (<code>String</code>)",id:"storeopensea-string",level:4},{value:"<code>storeTreasureLand</code> (<code>String</code>)",id:"storetreasureland-string",level:4},{value:"<code>storeElement</code> (<code>String</code>)",id:"storeelement-string",level:4},{value:"<code>campaigns</code> (<code>CampaignConnection</code>)",id:"campaigns-campaignconnection",level:4},{value:"<code>nftCores</code> (<code>NFTCoreConnection</code>)",id:"nftcores-nftcoreconnection",level:4},{value:"<code>isVerified</code> (<code>Boolean</code>)",id:"isverified-boolean",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:"<code>Node</code>",id:"node",level:4}],m={toc:p};function g(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type DAO implements Node {\n  id: ID!\n  name: String!\n  info: String!\n  symbol: String!\n  logo: String!\n  alias: String!\n  homepage: String\n  twitter: String\n  github: String\n  discord: String\n  medium: String\n  telegram: String\n  facebook: String\n  storeOpensea: String\n  storeTreasureLand: String\n  storeElement: String\n  campaigns(\n  first: Int\n  after: String\n): CampaignConnection!\n  nftCores(\n  first: Int\n  after: String\n): NFTCoreConnection!\n  isVerified: Boolean!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"id-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"name-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"name")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"info-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"info")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"symbol-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"symbol")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"logo-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"logo")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"alias-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"alias")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"homepage-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"homepage")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"twitter-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"twitter")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"github-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"github")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"discord-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"discord")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"medium-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"medium")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"telegram-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"telegram")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"facebook-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"facebook")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"storeopensea-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"storeOpensea")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"storetreasureland-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"storeTreasureLand")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"storeelement-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"storeElement")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"campaigns-campaignconnection"},(0,i.kt)("inlineCode",{parentName:"h4"},"campaigns")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/objects/campaign-connection"},(0,i.kt)("inlineCode",{parentName:"a"},"CampaignConnection")),")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"first-int"},(0,i.kt)("inlineCode",{parentName:"h5"},"first")," (",(0,i.kt)("a",{parentName:"h5",href:"../../references/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"after-string"},(0,i.kt)("inlineCode",{parentName:"h5"},"after")," (",(0,i.kt)("a",{parentName:"h5",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"))),(0,i.kt)("h4",{id:"nftcores-nftcoreconnection"},(0,i.kt)("inlineCode",{parentName:"h4"},"nftCores")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/objects/nftcore-connection"},(0,i.kt)("inlineCode",{parentName:"a"},"NFTCoreConnection")),")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"first-int-1"},(0,i.kt)("inlineCode",{parentName:"h5"},"first")," (",(0,i.kt)("a",{parentName:"h5",href:"../../references/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"after-string-1"},(0,i.kt)("inlineCode",{parentName:"h5"},"after")," (",(0,i.kt)("a",{parentName:"h5",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"))),(0,i.kt)("h4",{id:"isverified-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"isVerified")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("h3",{id:"interfaces"},"Interfaces"),(0,i.kt)("h4",{id:"node"},(0,i.kt)("a",{parentName:"h4",href:"../../references/interfaces/node"},(0,i.kt)("inlineCode",{parentName:"a"},"Node"))))}g.isMDXComponent=!0}}]);