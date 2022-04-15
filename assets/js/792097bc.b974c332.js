"use strict";(self.webpackChunkgalaxy_dev_docs=self.webpackChunkgalaxy_dev_docs||[]).push([[4872],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return u}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=d(e.components);return a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=d(t),u=r,h=m["".concat(l,".").concat(u)]||m[u]||p[u]||i;return t?a.createElement(h,o(o({ref:n},s),{},{components:t})):a.createElement(h,o({ref:n},s))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var d=2;d<i;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6259:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return p}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),o=["components"],c={id:"address",title:"Address"},l=void 0,d={unversionedId:"graphql-api/references/objects/address",id:"graphql-api/references/objects/address",title:"Address",description:"No description",source:"@site/docs/4-graphql-api/references/objects/address.mdx",sourceDirName:"4-graphql-api/references/objects",slug:"/graphql-api/references/objects/address",permalink:"/galaxy-dev-docs/graphql-api/references/objects/address",editUrl:"https://github.com/ProjectGalaxyHQ/galaxy-dev-docs/blob/main/docs/4-graphql-api/references/objects/address.mdx",tags:[],version:"current",frontMatter:{id:"address",title:"Address"},sidebar:"docs",previous:{title:"AddressEdge",permalink:"/galaxy-dev-docs/graphql-api/references/objects/address-edge"},next:{title:"AirdropAddressInfo",permalink:"/galaxy-dev-docs/graphql-api/references/objects/airdrop-address-info"}},s={},p=[{value:"Fields",id:"fields",level:3},{value:"<code>id</code> (<code>String</code>)",id:"id-string",level:4},{value:"<code>address</code> (<code>String</code>)",id:"address-string",level:4},{value:"<code>username</code> (<code>String</code>)",id:"username-string",level:4},{value:"<code>hasEmail</code> (<code>Boolean</code>)",id:"hasemail-boolean",level:4},{value:"<code>hasTwitter</code> (<code>Boolean</code>)",id:"hastwitter-boolean",level:4},{value:"<code>email</code> (<code>String</code>)",id:"email-string",level:4},{value:"<code>avatar</code> (<code>String</code>)",id:"avatar-string",level:4},{value:"<code>solanaAddress</code> (<code>String</code>)",id:"solanaaddress-string",level:4},{value:"<code>twitterUserID</code> (<code>String</code>)",id:"twitteruserid-string",level:4},{value:"<code>twitterUserName</code> (<code>String</code>)",id:"twitterusername-string",level:4},{value:"<code>participatedCampaignIDs</code> (<code>Int</code>)",id:"participatedcampaignids-int",level:4},{value:"<code>private</code> (<code>PrivateInfo</code>)",id:"private-privateinfo",level:4},{value:"<code>eligibleCredentials</code> (<code>CredConnection</code>)",id:"eligiblecredentials-credconnection",level:4},{value:"<code>balance</code> (<code>String</code>)",id:"balance-string",level:4},{value:"<code>spaces</code> (<code>SpaceConnection</code>)",id:"spaces-spaceconnection",level:4},{value:"<code>isVerified</code> (<code>Boolean</code>)",id:"isverified-boolean",level:4},{value:"<code>nfts</code> (<code>NFTConnection</code>)",id:"nfts-nftconnection",level:4},{value:"<code>recentParticipation</code> (<code>ParticipationConnection</code>)",id:"recentparticipation-participationconnection",level:4},{value:"<code>participatedCampaignCount</code> (<code>Int</code>)",id:"participatedcampaigncount-int",level:4}],m={toc:p};function u(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},'type Address {\n  id: String!\n  address: String!\n  username: String!\n  hasEmail: Boolean!\n  hasTwitter: Boolean!\n  email: String!\n  avatar: String!\n  solanaAddress: String!\n  twitterUserID: String!\n  twitterUserName: String!\n  participatedCampaignIDs: [Int!]\n  private(\n  sig: String!\n): PrivateInfo!\n  eligibleCredentials(\n  first: Int\n  after: String = ""\n): CredConnection!\n  balance(\n  chain: Chain!\n  block: Int!\n): String!\n  spaces(\n  input: ListSpaceInput\n): SpaceConnection!\n  isVerified: Boolean!\n  nfts(\n  option: ListNFTInput!\n): NFTConnection!\n  recentParticipation(\n  input: ListParticipationInput!\n): ParticipationConnection!\n  participatedCampaignCount(\n  input: ParticipatedCampaignCountInput!\n): Int!\n}\n')),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"id-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"address-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"address")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"username-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"username")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"hasemail-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"hasEmail")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("h4",{id:"hastwitter-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"hasTwitter")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("h4",{id:"email-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"email")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"avatar-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"avatar")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"solanaaddress-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"solanaAddress")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"twitteruserid-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"twitterUserID")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"twitterusername-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"twitterUserName")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"participatedcampaignids-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"participatedCampaignIDs")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("h4",{id:"private-privateinfo"},(0,i.kt)("inlineCode",{parentName:"h4"},"private")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/objects/private-info"},(0,i.kt)("inlineCode",{parentName:"a"},"PrivateInfo")),")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"sig-string"},(0,i.kt)("inlineCode",{parentName:"h5"},"sig")," (",(0,i.kt)("a",{parentName:"h5",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"))),(0,i.kt)("h4",{id:"eligiblecredentials-credconnection"},(0,i.kt)("inlineCode",{parentName:"h4"},"eligibleCredentials")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/objects/cred-connection"},(0,i.kt)("inlineCode",{parentName:"a"},"CredConnection")),")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"first-int"},(0,i.kt)("inlineCode",{parentName:"h5"},"first")," (",(0,i.kt)("a",{parentName:"h5",href:"../../references/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"after-string"},(0,i.kt)("inlineCode",{parentName:"h5"},"after")," (",(0,i.kt)("a",{parentName:"h5",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"))),(0,i.kt)("h4",{id:"balance-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"balance")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"chain-chain"},(0,i.kt)("inlineCode",{parentName:"h5"},"chain")," (",(0,i.kt)("a",{parentName:"h5",href:"../../references/enums/chain"},(0,i.kt)("inlineCode",{parentName:"a"},"Chain")),")"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"block-int"},(0,i.kt)("inlineCode",{parentName:"h5"},"block")," (",(0,i.kt)("a",{parentName:"h5",href:"../../references/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,i.kt)("h4",{id:"spaces-spaceconnection"},(0,i.kt)("inlineCode",{parentName:"h4"},"spaces")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/objects/space-connection"},(0,i.kt)("inlineCode",{parentName:"a"},"SpaceConnection")),")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"input-listspaceinput"},(0,i.kt)("inlineCode",{parentName:"h5"},"input")," (",(0,i.kt)("a",{parentName:"h5",href:"../../references/inputs/list-space-input"},(0,i.kt)("inlineCode",{parentName:"a"},"ListSpaceInput")),")"))),(0,i.kt)("h4",{id:"isverified-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"isVerified")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("h4",{id:"nfts-nftconnection"},(0,i.kt)("inlineCode",{parentName:"h4"},"nfts")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/objects/nftconnection"},(0,i.kt)("inlineCode",{parentName:"a"},"NFTConnection")),")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"option-listnftinput"},(0,i.kt)("inlineCode",{parentName:"h5"},"option")," (",(0,i.kt)("a",{parentName:"h5",href:"../../references/inputs/list-nftinput"},(0,i.kt)("inlineCode",{parentName:"a"},"ListNFTInput")),")"))),(0,i.kt)("h4",{id:"recentparticipation-participationconnection"},(0,i.kt)("inlineCode",{parentName:"h4"},"recentParticipation")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/objects/participation-connection"},(0,i.kt)("inlineCode",{parentName:"a"},"ParticipationConnection")),")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"input-listparticipationinput"},(0,i.kt)("inlineCode",{parentName:"h5"},"input")," (",(0,i.kt)("a",{parentName:"h5",href:"../../references/inputs/list-participation-input"},(0,i.kt)("inlineCode",{parentName:"a"},"ListParticipationInput")),")"))),(0,i.kt)("h4",{id:"participatedcampaigncount-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"participatedCampaignCount")," (",(0,i.kt)("a",{parentName:"h4",href:"../../references/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"input-participatedcampaigncountinput"},(0,i.kt)("inlineCode",{parentName:"h5"},"input")," (",(0,i.kt)("a",{parentName:"h5",href:"../../references/inputs/participated-campaign-count-input"},(0,i.kt)("inlineCode",{parentName:"a"},"ParticipatedCampaignCountInput")),")"))))}u.isMDXComponent=!0}}]);