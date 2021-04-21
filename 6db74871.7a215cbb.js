(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{75:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var r=n(3),o=n(7),a=(n(0),n(95)),c={title:"Watching and Restarting"},i={unversionedId:"recipes/watching-and-restarting",id:"recipes/watching-and-restarting",isDocsHomePage:!1,title:"Watching and Restarting",description:"TypeScript Node compiles source code via require(), watching files and code reloads are out of scope for the project. If you want to restart the ts-node process on file change, existing node.js tools such as nodemon, onchange and node-dev work.",source:"@site/docs/recipes/watching-and-restarting.md",slug:"/recipes/watching-and-restarting",permalink:"/ts-node/docs/recipes/watching-and-restarting",editUrl:"https://github.com/TypeStrong/ts-node/edit/docs/website/docs/recipes/watching-and-restarting.md",version:"current",sidebar:"primarySidebar",previous:{title:"Help! My Types Are Missing!",permalink:"/ts-node/docs/types"},next:{title:"Mocha",permalink:"/ts-node/docs/recipes/mocha"}},s=[],p={toc:s};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"TypeScript Node")," compiles source code via ",Object(a.b)("inlineCode",{parentName:"p"},"require()"),", watching files and code reloads are out of scope for the project. If you want to restart the ",Object(a.b)("inlineCode",{parentName:"p"},"ts-node")," process on file change, existing node.js tools such as ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/remy/nodemon"}),"nodemon"),", ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/Qard/onchange"}),"onchange")," and ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/fgnass/node-dev"}),"node-dev")," work."),Object(a.b)("p",null,"There's also ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/whitecolor/ts-node-dev"}),Object(a.b)("inlineCode",{parentName:"a"},"ts-node-dev")),", a modified version of ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/fgnass/node-dev"}),Object(a.b)("inlineCode",{parentName:"a"},"node-dev"))," using ",Object(a.b)("inlineCode",{parentName:"p"},"ts-node")," for compilation that will restart the process on file change."))}d.isMDXComponent=!0},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),d=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(n),b=r,f=u["".concat(c,".").concat(b)]||u[b]||l[b]||a;return n?o.a.createElement(f,i(i({ref:t},p),{},{components:n})):o.a.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);