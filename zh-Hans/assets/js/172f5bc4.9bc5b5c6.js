"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4196],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=l(n),p=s,y=m["".concat(c,".").concat(p)]||m[p]||d[p]||i;return n?r.createElement(y,o(o({ref:t},u),{},{components:n})):r.createElement(y,o({ref:t},u))}));function y(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,o=new Array(i);o[0]=p;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[m]="string"==typeof e?e:s,o[1]=a;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7532:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=n(7462),s=(n(7294),n(3905));const i={sidebar_position:0},o="Intro",a={unversionedId:"system-design/intro",id:"system-design/intro",title:"Intro",description:"What is system design?",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/system-design/intro.md",sourceDirName:"system-design",slug:"/system-design/intro",permalink:"/zh-Hans/docs/system-design/intro",draft:!1,editUrl:"https://github.com/imwito/imwito.github.io/tree/main/docs/system-design/intro.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"System Design",permalink:"/zh-Hans/docs/category/system-design"},next:{title:"Chapter 1",permalink:"/zh-Hans/docs/system-design/chapter1"}},c={},l=[{value:"What is system design?",id:"what-is-system-design",level:2},{value:"Why is System Design so important?",id:"why-is-system-design-so-important",level:3}],u={toc:l},m="wrapper";function d(e){let{components:t,...n}=e;return(0,s.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"intro"},"Intro"),(0,s.kt)("h2",{id:"what-is-system-design"},"What is system design?"),(0,s.kt)("p",null,"Before we start this course, let's talk about what even is system design."),(0,s.kt)("p",null,"System design is the process of defining the architecture, interfaces, and data\nfor a system that satisfies specific requirements. System design meets the needs\nof your business or organization through coherent and efficient systems. It requires\na systematic approach to building and engineering systems. A good system design requires\nus to think about everything, from infrastructure all the way down to the data and how it's stored."),(0,s.kt)("h3",{id:"why-is-system-design-so-important"},"Why is System Design so important?"),(0,s.kt)("p",null,"System design helps us define a solution that meets the business requirements. It is\none of the earliest decisions we can make when building a system. Often it is essential\nto think from a high level as these decisions are very difficult to correct later. It\nalso makes it easier to reason about and manage architectural changes as the system evolves."))}d.isMDXComponent=!0}}]);