"use strict";(self.webpackChunkgalaxy_docs=self.webpackChunkgalaxy_docs||[]).push([[3936],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),l=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,h=u["".concat(d,".").concat(m)]||u[m]||p[m]||i;return r?n.createElement(h,c(c({ref:t},s),{},{components:r})):n.createElement(h,c({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,c=new Array(i);c[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var l=2;l<i;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3190:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return p}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),c=["components"],o={id:"cred",title:"Cred"},d=void 0,l={unversionedId:"graphql-api/references/objects/cred",id:"graphql-api/references/objects/cred",title:"Cred",description:"No description",source:"@site/docs-developer/4-graphql-api/references/objects/cred.mdx",sourceDirName:"4-graphql-api/references/objects",slug:"/graphql-api/references/objects/cred",permalink:"/developer/graphql-api/references/objects/cred",editUrl:"https://github.com/ProjectGalaxyHQ/galaxy-docs/blob/main/docs-developer/4-graphql-api/references/objects/cred.mdx",tags:[],version:"current",lastUpdatedBy:"Wayn",lastUpdatedAt:1650245228,formattedLastUpdatedAt:"4/18/2022",frontMatter:{id:"cred",title:"Cred"},sidebar:"docs",previous:{title:"CredSubgraph",permalink:"/developer/graphql-api/references/objects/cred-subgraph"},next:{title:"DaoCarousel",permalink:"/developer/graphql-api/references/objects/dao-carousel"}},s={},p=[{value:"Fields",id:"fields",level:3},{value:"<code>id</code> (<code>String</code>)",id:"id-string",level:4},{value:"<code>name</code> (<code>String</code>)",id:"name-string",level:4},{value:"<code>description</code> (<code>String</code>)",id:"description-string",level:4},{value:"<code>chain</code> (<code>Chain</code>)",id:"chain-chain",level:4},{value:"<code>type</code> (<code>String</code>)",id:"type-string",level:4},{value:"<code>curatorAddress</code> (<code>String</code>)",id:"curatoraddress-string",level:4},{value:"<code>referenceLink</code> (<code>String</code>)",id:"referencelink-string",level:4},{value:"<code>staticEligible</code> (<code>Int</code>)",id:"staticeligible-int",level:4},{value:"<code>itemCount</code> (<code>Int</code>)",id:"itemcount-int",level:4},{value:"<code>subgraph</code> (<code>CredSubgraph</code>)",id:"subgraph-credsubgraph",level:4},{value:"<code>items</code> (<code>CredItemConnection</code>)",id:"items-creditemconnection",level:4},{value:"<code>lastUpdate</code> (<code>Int</code>)",id:"lastupdate-int",level:4},{value:"<code>syncRate</code> (<code>Float</code>)",id:"syncrate-float",level:4},{value:"<code>credType</code> (<code>CredType</code>)",id:"credtype-credtype",level:4},{value:"<code>credSource</code> (<code>CredSource</code>)",id:"credsource-credsource",level:4}],u={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},'type Cred {\n  id: String!\n  name: String!\n  description: String!\n  chain: Chain!\n  type: String!\n  curatorAddress: String!\n  referenceLink: String!\n  staticEligible(\n  value: String!\n): Int!\n  itemCount: Int!\n  subgraph: CredSubgraph\n  items(\n  first: Int = 20\n  after: String = ""\n  searchString: String = ""\n): CredItemConnection!\n  lastUpdate: Int!\n  syncRate: Float!\n  credType: CredType!\n  credSource: CredSource!\n}\n')),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"id-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"name-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"name")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"description-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"description")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"chain-chain"},(0,i.kt)("inlineCode",{parentName:"h4"},"chain")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/enums/chain"},(0,i.kt)("inlineCode",{parentName:"a"},"Chain")),")"),(0,i.kt)("h4",{id:"type-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"type")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"curatoraddress-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"curatorAddress")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"referencelink-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"referenceLink")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"staticeligible-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"staticEligible")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"value-string"},(0,i.kt)("inlineCode",{parentName:"h5"},"value")," (",(0,i.kt)("a",{parentName:"h5",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"))),(0,i.kt)("h4",{id:"itemcount-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"itemCount")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("h4",{id:"subgraph-credsubgraph"},(0,i.kt)("inlineCode",{parentName:"h4"},"subgraph")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/objects/cred-subgraph"},(0,i.kt)("inlineCode",{parentName:"a"},"CredSubgraph")),")"),(0,i.kt)("h4",{id:"items-creditemconnection"},(0,i.kt)("inlineCode",{parentName:"h4"},"items")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/objects/cred-item-connection"},(0,i.kt)("inlineCode",{parentName:"a"},"CredItemConnection")),")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"first-int"},(0,i.kt)("inlineCode",{parentName:"h5"},"first")," (",(0,i.kt)("a",{parentName:"h5",href:"../../references/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"after-string"},(0,i.kt)("inlineCode",{parentName:"h5"},"after")," (",(0,i.kt)("a",{parentName:"h5",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"searchstring-string"},(0,i.kt)("inlineCode",{parentName:"h5"},"searchString")," (",(0,i.kt)("a",{parentName:"h5",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"))),(0,i.kt)("h4",{id:"lastupdate-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"lastUpdate")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("h4",{id:"syncrate-float"},(0,i.kt)("inlineCode",{parentName:"h4"},"syncRate")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/float"},(0,i.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,i.kt)("h4",{id:"credtype-credtype"},(0,i.kt)("inlineCode",{parentName:"h4"},"credType")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/enums/cred-type"},(0,i.kt)("inlineCode",{parentName:"a"},"CredType")),")"),(0,i.kt)("h4",{id:"credsource-credsource"},(0,i.kt)("inlineCode",{parentName:"h4"},"credSource")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/enums/cred-source"},(0,i.kt)("inlineCode",{parentName:"a"},"CredSource")),")"))}m.isMDXComponent=!0}}]);