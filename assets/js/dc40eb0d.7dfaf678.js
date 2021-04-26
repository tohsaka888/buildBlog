(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{105:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return p})),t.d(r,"toc",(function(){return c})),t.d(r,"default",(function(){return u}));var n=t(3),a=t(7),s=(t(0),t(112)),o={},p={unversionedId:"express/express",id:"express/express",isDocsHomePage:!1,title:"express",description:"\u5feb\u901f\u751f\u6210\u5668",source:"@site/docs/express/express.md",sourceDirName:"express",slug:"/express/express",permalink:"/docs/express/express",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/express/express.md",version:"current",frontMatter:{},sidebar:"JavaScriptSidebar",previous:{title:"TypeScript",permalink:"/docs/TypeScript/TypeScript"},next:{title:"MongoDB",permalink:"/docs/mongoDb/mongoDB"}},c=[{value:"\u5904\u7406GET\u8bf7\u6c42",id:"\u5904\u7406get\u8bf7\u6c42",children:[]},{value:"\u5904\u7406POST\u8bf7\u6c42",id:"\u5904\u7406post\u8bf7\u6c42",children:[{value:"\u4e2d\u95f4\u4ef6",id:"\u4e2d\u95f4\u4ef6",children:[]}]},{value:"\u8de8\u57df",id:"\u8de8\u57df",children:[]},{value:"Router",id:"router",children:[]},{value:"\u5b9e\u4f8b",id:"\u5b9e\u4f8b",children:[]}],l={toc:c};function u(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(s.b)("p",null,"\u5feb\u901f\u751f\u6210\u5668"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-javascript"},"npx express-generator && yarn install\n")),Object(s.b)("h2",{id:"\u5904\u7406get\u8bf7\u6c42"},"\u5904\u7406GET\u8bf7\u6c42"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-javascript"},"app.get('/' , (req, res) => {       //req-\u8bf7\u6c42 res-\u7ed3\u679c\n    res.send(\"Hello,World~\");       //\u670d\u52a1\u5668\u53d1\u9001\u8bf7\u6c42\u7ed3\u679c\n})\n")),Object(s.b)("h2",{id:"\u5904\u7406post\u8bf7\u6c42"},"\u5904\u7406POST\u8bf7\u6c42"),Object(s.b)("h3",{id:"\u4e2d\u95f4\u4ef6"},"\u4e2d\u95f4\u4ef6"),Object(s.b)("p",null,"\u81ea\u5b9a\u4e49\u7684\u6269\u5c55express\u6269\u5c55\u529f\u80fd\uff0c\u8bf7\u6c42\u524d\uff0c\u76f8\u5e94\u524d\u505a\u7279\u5b9a\u64cd\u4f5c\u3002"),Object(s.b)("p",null,"express\u5904\u7406POST\u8bf7\u6c42\u9700\u8981\u7528\u5230\u89e3\u6790json\u7684\u4e2d\u95f4\u4ef6\u3002"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-javascript"},'app.use(express.json());                //\u4f7f\u7528json\u4e2d\u95f4\u4ef6\n\napp.post(\'/login\' , (req, res) => {     \n    console.log("\u6536\u5230\u8bf7\u6c42\u4f53", req.body);\n    res.status(201).send("ok");\n})\n')),Object(s.b)("h2",{id:"\u8de8\u57df"},"\u8de8\u57df"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"\u8de8\u6e90\u8d44\u6e90\u5171\u4eab")," (",Object(s.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Glossary/CORS"},"CORS"),") \uff08\u6216\u901a\u4fd7\u5730\u8bd1\u4e3a\u8de8\u57df\u8d44\u6e90\u5171\u4eab\uff09\u662f\u4e00\u79cd\u57fa\u4e8e",Object(s.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Glossary/HTTP"},"HTTP")," \u5934\u7684\u673a\u5236\uff0c\u8be5\u673a\u5236\u901a\u8fc7\u5141\u8bb8\u670d\u52a1\u5668\u6807\u793a\u9664\u4e86\u5b83\u81ea\u5df1\u4ee5\u5916\u7684\u5176\u5b83",Object(s.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Glossary/Origin"},"origin"),'\uff08\u57df\uff0c\u534f\u8bae\u548c\u7aef\u53e3\uff09\uff0c\u8fd9\u6837\u6d4f\u89c8\u5668\u53ef\u4ee5\u8bbf\u95ee\u52a0\u8f7d\u8fd9\u4e9b\u8d44\u6e90\u3002\u8de8\u6e90\u8d44\u6e90\u5171\u4eab\u8fd8\u901a\u8fc7\u4e00\u79cd\u673a\u5236\u6765\u68c0\u67e5\u670d\u52a1\u5668\u662f\u5426\u4f1a\u5141\u8bb8\u8981\u53d1\u9001\u7684\u771f\u5b9e\u8bf7\u6c42\uff0c\u8be5\u673a\u5236\u901a\u8fc7\u6d4f\u89c8\u5668\u53d1\u8d77\u4e00\u4e2a\u5230\u670d\u52a1\u5668\u6258\u7ba1\u7684\u8de8\u6e90\u8d44\u6e90\u7684"\u9884\u68c0"\u8bf7\u6c42\u3002\u5728\u9884\u68c0\u4e2d\uff0c\u6d4f\u89c8\u5668\u53d1\u9001\u7684\u5934\u4e2d\u6807\u793a\u6709HTTP\u65b9\u6cd5\u548c\u771f\u5b9e\u8bf7\u6c42\u4e2d\u4f1a\u7528\u5230\u7684\u5934\u3002'),Object(s.b)("p",null,"express\u5904\u7406\u8de8\u57df\u8bf7\u6c42\u9700\u8981\u4f7f\u7528\u4e2d\u95f4\u4ef6\u3002"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"\u4e0b\u8f7d\u4e2d\u95f4\u4ef6")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-javascript"},"yarn add cors\n")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"\u4f7f\u7528")),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-javascript"},'var cors = require("cors");\napp.use("cors");\n')),Object(s.b)("h2",{id:"router"},"Router"),Object(s.b)("p",null,"router\u672c\u8eab\u7c7b\u4f3c\u4e0e\u4e2d\u95f4\u4ef6\uff0c\u6240\u4ee5\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528app.use()\u6765\u8bbf\u4f7f\u7528router\u3002"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre",className:"language-javascript"},"/* App.js\u4e2d\u5b9a\u4e49\u548c\u4f7f\u7528router */\nvar userRouter = require('./routers/users.js');\napp.use('/users', userRouter);\n\n/* users.js\u4e2drouter\u7684\u8be6\u7ec6\u64cd\u4f5c */\nvar express = require('express');\nvar router = express.Router();\n\nrouter.get('/', function(req, res, next) {      //\u6b64\u65f6\u8bf7\u6c42\u7684\u8def\u5f84\u76f8\u5f53\u4e0eapp.get('/users', ...)\n  res.send('respond with a resource');\n});\n\nrouter.post('/login', (req, res) => {           //\u6b64\u65f6\u8bf7\u6c42\u7684\u8def\u5f84\u76f8\u5f53\u4e8eapp.post('/users/login', ...)\n  console.log(\"\u6536\u5230\u8bf7\u6c42\u4f53\uff1a\", req.body);\n  res.status(201).send(\"users ok\");\n});\n\nmodule.exports = router;\n\n")),Object(s.b)("h2",{id:"\u5b9e\u4f8b"},"\u5b9e\u4f8b"),Object(s.b)("p",null,Object(s.b)("a",{parentName:"p",href:"https://github.com/tohsaka888/expressExample"},"\u70b9\u51fb\u6211\u67e5\u770b\u5b9e\u4f8b")))}u.isMDXComponent=!0},112:function(e,r,t){"use strict";t.d(r,"a",(function(){return i})),t.d(r,"b",(function(){return O}));var n=t(0),a=t.n(n);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),u=function(e){var r=a.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},i=function(e){var r=u(e.components);return a.a.createElement(l.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},d=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),i=u(t),d=n,O=i["".concat(o,".").concat(d)]||i[d]||b[d]||s;return t?a.a.createElement(O,p(p({ref:r},l),{},{components:t})):a.a.createElement(O,p({ref:r},l))}));function O(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var s=t.length,o=new Array(s);o[0]=d;var p={};for(var c in r)hasOwnProperty.call(r,c)&&(p[c]=r[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var l=2;l<s;l++)o[l]=t[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);