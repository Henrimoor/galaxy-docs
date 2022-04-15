"use strict";(self.webpackChunkgalaxy_dev_docs=self.webpackChunkgalaxy_dev_docs||[]).push([[5110],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8265:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:1},s="Credential Update",c={unversionedId:"guide/cred-update",id:"guide/cred-update",title:"Credential Update",description:"We currently support 2 ways to update your credential items: GraphQL and REST API.",source:"@site/docs/3-guide/cred-update.md",sourceDirName:"3-guide",slug:"/guide/cred-update",permalink:"/galaxy-dev-docs/guide/cred-update",editUrl:"https://github.com/ProjectGalaxyHQ/galaxy-dev-docs/blob/main/docs/3-guide/cred-update.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"StarNFT",permalink:"/galaxy-dev-docs/smart-contract/contracts/starnft"},next:{title:"Overview",permalink:"/galaxy-dev-docs/graphql-api/overview"}},d={},p=[{value:"Prerequisite",id:"prerequisite",level:2},{value:"GraphQL",id:"graphql",level:2},{value:"Input",id:"input",level:3},{value:"Example",id:"example",level:3},{value:"REST",id:"rest",level:2},{value:"Endpoint",id:"endpoint",level:3},{value:"Input",id:"input-1",level:3},{value:"Example - Node.js",id:"example---nodejs",level:3},{value:"Example - Python",id:"example---python",level:3}],u={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"credential-update"},"Credential Update"),(0,o.kt)("p",null,"We currently support 2 ways to update your credential items: GraphQL and REST API."),(0,o.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"First you need to create a credential that you want to use in your campaign. Please contact galaxy BD team if you have no experience with galaxy dashboard before, they will help you to understand concepts of galaxy dashboard and give you the access to it."),(0,o.kt)("li",{parentName:"ol"},"Then you will need an access token bound to your wallet address to use this API for updating your own credentials (credentials that created by you). We don\u2019t have UI interface to generate access token for now, so if you want to use this API, please contact galaxy DEV team, so we can manually generate an access token for you to use.")),(0,o.kt)("h2",{id:"graphql"},"GraphQL"),(0,o.kt)("p",null,"For more information on our GraphQL endpoint, please refer to ",(0,o.kt)("a",{parentName:"p",href:"/galaxy-dev-docs/graphql-api/overview"},"this doc"),"."),(0,o.kt)("h3",{id:"input"},"Input"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"(string, mandatory) auth->accessToken: use to auth if the you have access to update credential items, the user with this access token must be the credential curator"),(0,o.kt)("li",{parentName:"ol"},"(int, mandatory) credId: the credential id you want to update"),(0,o.kt)("li",{parentName:"ol"},"(enum string, mandatory) operation:",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"APPEND, append items in the list."),(0,o.kt)("li",{parentName:"ol"},"REPLACE, remove all items and replace with items in the list."),(0,o.kt)("li",{parentName:"ol"},"REMOVE, remove items in the list."))),(0,o.kt)("li",{parentName:"ol"},"(string array, mandatory) items: items list(address or email) to be modified, refer to operation.")),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},'mutation {\n  credentialItems(\n    input: {\n      auth: { accessToken: "11m9x2uMbEojrujzAp619KEl4RLVrO11" }\n      credId: 312\n      operation: APPEND\n      items: [\n        "0x04ebfd6240381af2c5f1a9e27f282bae8b92b257"\n        "0x04edde76Cf5752f2bc1DC798BA1369dcA49d7c79"\n        "0x04EeC1a5d0BC3C4291aeb962CBda49677E9a9FcB"\n        "0x04f022af64bfc0f59ce1069e4ab51aa15148e60b"\n        "0x04f26ef96b12fba7a507afba39bdfc78e0039742"\n        "0x04f2c6b59e87b302b43400303427acd50f8071e6"\n        "0x04f42ee649ee36edcf5ac9a97df343333a97fd24"\n        "0x04f6b92fda46b8d9d33ca28d8837e1661edf8b97"\n        "0x04f886e265cf2ec39f8868d7b6c67ab78e027736"\n      ]\n    }\n  ) {\n    message\n  }\n}\n')),(0,o.kt)("h2",{id:"rest"},"REST"),(0,o.kt)("h3",{id:"endpoint"},"Endpoint"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"POST ",(0,o.kt)("a",{parentName:"p",href:"https://graphigo.prd.galaxy.eco/cred/%7Bcred_id%7D/%7Boperation%7D"},"https://graphigo.prd.galaxy.eco/cred/{cred_id}/{operation}")," (production)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"POST ",(0,o.kt)("a",{parentName:"p",href:"https://graphigo.stg.galaxy.eco/cred/%7Bcred_id%7D/%7Boperation%7D"},"https://graphigo.stg.galaxy.eco/cred/{cred_id}/{operation}")," (staging)"))),(0,o.kt)("h3",{id:"input-1"},"Input"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"request header{\u201dAccess-Token\u201d}: use to auth if the you have access to update credential items, the user with this access token must be the credential curator"),(0,o.kt)("li",{parentName:"ol"},"url{cred_id}: the credential id you want to update"),(0,o.kt)("li",{parentName:"ol"},"url{operation}:"),(0,o.kt)("li",{parentName:"ol"},"append, append items in the list."),(0,o.kt)("li",{parentName:"ol"},"replace, remove all items and replace with items in the list."),(0,o.kt)("li",{parentName:"ol"},"reomve, remove items in the list."),(0,o.kt)("li",{parentName:"ol"},"body: items string array(address or email) to be modified, refer to operation.")),(0,o.kt)("h3",{id:"example---nodejs"},"Example - Node.js"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'// Nodejs using Axios lib\nlet axiosRes = await axios.post("https://graphigo.prd.galaxy.eco/query", {\n  operationName: "modifyCredentialItems",\n  query: `mutation modifyCredentialItems($accessToken: String!, $credId: Int!, $operation: Operation!, $items: [String!]!) { credentialItems(input: { auth:{ accessToken: $accessToken } credId: $credId operation: $operation items: $items }) { message } }`,\n  variables: {\n    accessToken: access_token,\n    credId: cred_id,\n    operation: operation,\n    items: list_of_items,\n  },\n});\n\nconsole.log(axiosRes.data);\n')),(0,o.kt)("h3",{id:"example---python"},"Example - Python"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# Python using python_graphql_client lib\nclient = GraphqlClient(endpoint="https://graphigo.stg.galaxy.eco/query")\n\nquery = """\n    mutation ModifyCredentialItems($accessToken: String!, $credId: Int!, $operation: Operation!, $items: [String!]!) {\n          credentialItems(input: {\n                auth:{\n                    accessToken: $accessToken\n                }\n                credId: $credId\n                operation: $operation\n                items: $items\n          }) {\n                message\n        }\n    }\n"""\nvariables = {\n    "accessToken": access_token,\n    "credId": cred_id,\n    "operation": operation,\n    "items": list_of_items\n}\n\nresp = client.execute(query=query, variables=variables)\n\nprint(resp)\n')))}m.isMDXComponent=!0}}]);