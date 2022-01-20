"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[355],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,h=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(h,a(a({ref:t},s),{},{components:n})):r.createElement(h,a({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6080:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return p}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],l={id:"doc3",title:"Guide to Writing Docs and Tutorials"},u=void 0,c={unversionedId:"doc3",id:"doc3",title:"Guide to Writing Docs and Tutorials",description:"The Basics",source:"@site/docs/doc3.md",sourceDirName:".",slug:"/doc3",permalink:"/pydocsite/docs/doc3",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/doc3.md",tags:[],version:"current",frontMatter:{id:"doc3",title:"Guide to Writing Docs and Tutorials"},sidebar:"someSidebar",previous:{title:"Document Number 2",permalink:"/pydocsite/docs/doc2"},next:{title:"PyTorch Overview",permalink:"/pydocsite/docs/notebook"}},s=[{value:"The Basics",id:"the-basics",children:[],level:2},{value:"Voice",id:"voice",children:[],level:2},{value:"Structure",id:"structure",children:[],level:2}],d={toc:s};function p(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"the-basics"},"The Basics"),(0,o.kt)("p",null,'"Documentation is one of your product\'s interfaces with your users. A well-written and well-organized set of docs helps your users understand your product quickly. Our aligned goal here is to help your users find and understand the information they need, as quickly as possible." (',(0,o.kt)("a",{parentName:"p",href:"https://v2.docusaurus.io/docs/markdown-features"},"Source"),")"),(0,o.kt)("p",null,"Focus on answering a question or accomplishing a specific task. To ensure focused and actionable documentation, make sure you understand your learning objectives when creating new content. To do this, start by nailing down the Learning Objectives - which are the end goals. Working backwards in this way will cut out anything extraneous."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"To create the Learning Objectives...",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Focus on what will be built/implemented. By the end of every document, users should have built/implemented something or know how to use the newly obtained information. Set expectations by explicitly stating what the document will cover and what users will build/implement by the end"),(0,o.kt)("li",{parentName:"ul"},"Use action verbs to ensure a user is building/implementing rather than passively reading code.")))),(0,o.kt)("h2",{id:"voice"},"Voice"),(0,o.kt)("p",null,"Write with an instructive, guiding, and directive voice for a global audience. Use Active Voice!"),(0,o.kt)("h2",{id:"structure"},"Structure"),(0,o.kt)("p",null,"If the document is a tutorial, one suggestion outline is as follows to guide users through the learning experience and provides appropriate context:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Recipe Title",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"1-2 sentences summary. Tell the reader what they will gain from reading this. Let them know if this is the document they are looking for before they read further."))),(0,o.kt)("li",{parentName:"ul"},"Introduction",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},'Answer for the reader - "Why is this topic important?"'))),(0,o.kt)("li",{parentName:"ul"},"Setup",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Call out any required setup or data downloads"))),(0,o.kt)("li",{parentName:"ul"},"Steps",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Use the steps you introduced in the Learning Objectives section"),(0,o.kt)("li",{parentName:"ul"},"Break down the steps as well as add prose for context"),(0,o.kt)("li",{parentName:"ul"},"If there is code, add comments in the code to help clarify for readers what each section is doing"),(0,o.kt)("li",{parentName:"ul"},"Link back to relevant sourc code documentation"),(0,o.kt)("li",{parentName:"ul"},"Think of it akin to creating a really practical blog post"))),(0,o.kt)("li",{parentName:"ul"},"Learn More",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Link to any additional resources (e.g. related docs, API references, tutorials)")))),(0,o.kt)("p",null,"This is additional material."))}p.isMDXComponent=!0}}]);