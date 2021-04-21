(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{92:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),a=(n(0),n(95)),i={title:"Help! My Types Are Missing!"},p={unversionedId:"types",id:"types",isDocsHomePage:!1,title:"Help! My Types Are Missing!",description:"TypeScript Node does not use files, include or exclude, by default. This is because a large majority projects do not use all of the files in a project directory (e.g. Gulpfile.ts, runtime vs tests) and parsing every file for types slows startup time. Instead, ts-node starts with the script file (e.g. ts-node index.ts) and TypeScript resolves dependencies based on imports and references.",source:"@site/docs/types.md",slug:"/types",permalink:"/ts-node/docs/types",editUrl:"https://github.com/TypeStrong/ts-node/edit/docs/website/docs/types.md",version:"current",sidebar:"primarySidebar",previous:{title:'"paths" and "baseUrl"\n',permalink:"/ts-node/docs/paths"},next:{title:"Watching and Restarting",permalink:"/ts-node/docs/recipes/watching-and-restarting"}},s=[],c={toc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"TypeScript Node")," does ",Object(a.b)("em",{parentName:"p"},"not")," use ",Object(a.b)("inlineCode",{parentName:"p"},"files"),", ",Object(a.b)("inlineCode",{parentName:"p"},"include")," or ",Object(a.b)("inlineCode",{parentName:"p"},"exclude"),", by default. This is because a large majority projects do not use all of the files in a project directory (e.g. ",Object(a.b)("inlineCode",{parentName:"p"},"Gulpfile.ts"),", runtime vs tests) and parsing every file for types slows startup time. Instead, ",Object(a.b)("inlineCode",{parentName:"p"},"ts-node")," starts with the script file (e.g. ",Object(a.b)("inlineCode",{parentName:"p"},"ts-node index.ts"),") and TypeScript resolves dependencies based on imports and references."),Object(a.b)("p",null,"For global definitions, you can use the ",Object(a.b)("inlineCode",{parentName:"p"},"typeRoots")," compiler option.  This requires that your type definitions be structured as type packages (not loose TypeScript definition files). More details on how this works can be found in the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#types-typeroots-and-types"}),"TypeScript Handbook"),"."),Object(a.b)("p",null,"Example ",Object(a.b)("inlineCode",{parentName:"p"},"tsconfig.json"),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "compilerOptions": {\n    "typeRoots" : ["./node_modules/@types", "./typings"]\n  }\n}\n')),Object(a.b)("p",null,"Example project structure:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"<project_root>/\n-- tsconfig.json\n-- typings/\n  -- <module_name>/\n    -- index.d.ts\n")),Object(a.b)("p",null,"Example module declaration file:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"declare module '<module_name>' {\n    // module definitions go here\n}\n")),Object(a.b)("p",null,"For module definitions, you can use ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.typescriptlang.org/docs/handbook/module-resolution.html#path-mapping"}),Object(a.b)("inlineCode",{parentName:"a"},"paths")),":"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "compilerOptions": {\n    "baseUrl": ".",\n    "paths": {\n      "custom-module-type": ["types/custom-module-type"]\n    }\n  }\n}\n')),Object(a.b)("p",null,"An alternative approach for definitions of third-party libraries are ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html"}),"triple-slash directives"),". This may be helpful if you prefer not to change your TypeScript ",Object(a.b)("inlineCode",{parentName:"p"},"compilerOptions")," or structure your custom type definitions when using ",Object(a.b)("inlineCode",{parentName:"p"},"typeRoots"),". Below is an example of the triple-slash directive as a relative path within your project:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),'/// <reference types="./types/untyped_js_lib" />\nimport UntypedJsLib from "untyped_js_lib"\n')),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Tip:")," If you ",Object(a.b)("em",{parentName:"p"},"must")," use ",Object(a.b)("inlineCode",{parentName:"p"},"files"),", ",Object(a.b)("inlineCode",{parentName:"p"},"include"),", or ",Object(a.b)("inlineCode",{parentName:"p"},"exclude"),", enable ",Object(a.b)("inlineCode",{parentName:"p"},"--files")," flags or set ",Object(a.b)("inlineCode",{parentName:"p"},"TS_NODE_FILES=true"),"."))}l.isMDXComponent=!0},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),l=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},b=function(e){var t=l(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),b=l(n),u=r,m=b["".concat(i,".").concat(u)]||b[u]||d[u]||a;return n?o.a.createElement(m,p(p({ref:t},c),{},{components:n})):o.a.createElement(m,p({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var c=2;c<a;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);