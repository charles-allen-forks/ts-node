(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{90:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(95)),i={title:"Third-party transpilers"},c={unversionedId:"transpilers",id:"transpilers",isDocsHomePage:!1,title:"Third-party transpilers",description:"In transpile-only mode, we skip typechecking to speed up execution time.  You can go a step further and use a",source:"@site/docs/transpilers.md",slug:"/transpilers",permalink:"/ts-node/docs/transpilers",editUrl:"https://github.com/TypeStrong/ts-node/edit/docs/website/docs/transpilers.md",version:"current"},p=[{value:"Bundled <code>swc</code> transpiler",id:"bundled-swc-transpiler",children:[]},{value:"Write your own integration",id:"write-your-own-integration",children:[]}],s={toc:p};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In transpile-only mode, we skip typechecking to speed up execution time.  You can go a step further and use a\nthird-party transpiler to transform TypeScript into JavaScript even faster.  You will still benefit from\n",Object(o.b)("inlineCode",{parentName:"p"},"ts-node"),"'s automatic ",Object(o.b)("inlineCode",{parentName:"p"},"tsconfig.json")," configuration, sourcemap support, and global ",Object(o.b)("inlineCode",{parentName:"p"},"ts-node")," CLI command.  Integrations\ncan also automatically derive an appropriate configuration from your existing ",Object(o.b)("inlineCode",{parentName:"p"},"tsconfig.json")," which simplifies project\nconfiguration."),Object(o.b)("h2",{id:"bundled-swc-transpiler"},"Bundled ",Object(o.b)("inlineCode",{parentName:"h2"},"swc")," transpiler"),Object(o.b)("p",null,"We have bundled an experimental ",Object(o.b)("inlineCode",{parentName:"p"},"swc")," integration."),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://swc.rs"}),Object(o.b)("inlineCode",{parentName:"a"},"swc"))," is a TypeScript-compatible transpiler implemented in Rust.  This makes it an order of magnitude faster\nthan ",Object(o.b)("inlineCode",{parentName:"p"},"transpileModule"),"."),Object(o.b)("p",null,"To use it, first install ",Object(o.b)("inlineCode",{parentName:"p"},"@swc/core")," or ",Object(o.b)("inlineCode",{parentName:"p"},"@swc/wasm"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"npm i -D @swc/core\n")),Object(o.b)("p",null,"Then add the following to your ",Object(o.b)("inlineCode",{parentName:"p"},"tsconfig.json"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json",metastring:'title="tsconfig.json"',title:'"tsconfig.json"'}),'{\n  "ts-node": {\n    "transpileOnly": true,\n    "transpiler": "ts-node/transpilers/swc-experimental"\n  }\n}\n')),Object(o.b)("h2",{id:"write-your-own-integration"},"Write your own integration"),Object(o.b)("p",null,"To write your own transpiler integration, check our ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://typestrong.org/ts-node/api/"}),"API docs"),"."),Object(o.b)("p",null,"Integrations are ",Object(o.b)("inlineCode",{parentName:"p"},"require()"),"d, so they can be published to npm."))}l.isMDXComponent=!0},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);