(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[71],{645:function(e,t,n){"use strict";n.r(t);var a=n(1),r=(n(0),n(697)),c=(n(66),n(700));t.default=function(e){var t=e.data;return t?Object(a.jsx)(r.a,{data:t,children:Object(a.jsxs)(c.a,{children:[Object(a.jsx)(r.c,{label:"Separation of duties enforced for service account related roles",valuePath:"account_separation_duties"}),Object(a.jsx)(r.c,{label:"Separation of duties enforced for KMS related roles",valuePath:"kms_separation_duties"})]})}):null}},694:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return s}));var a=n(0),r=n.n(a),c={path_to_issue:[],item:{}},i=r.a.createContext(c),o=r.a.createContext(""),s=r.a.createContext((function(){}))},695:function(e,t,n){"use strict";var a=n(1),r=n(0),c=n(694),i=n(66);t.a=function(e){var t=e.path,n=e.children,o=Object(r.useContext)(c.b);return Object(a.jsx)(c.b.Provider,{value:Object(i.a)(o,t),children:n})}},696:function(e,t,n){"use strict";var a=n(11),r=n(1),c=n(0),i=n(690),o=n(7),s=n.n(o),u=n(13),l=n.n(u),d=n(10),f=n.n(d),b=n(694),v=n(66),p=n(67),j=(n(698),n(686)),h=n(204),x=n.n(h),O=n(699),m=n.n(O),P=n(205),g=n(140),_=function(e){var t=e.service,n=e.finding,a=e.path,o=Object(c.useContext)(g.a),s=o.exceptions,u=o.addException,d=o.removeException,f=Object(P.b)().enqueueSnackbar,b=l()(s,[t,n],[]).includes(a);return Object(r.jsx)(i.a,{title:b?"Remove finding from exceptions list":"Add finding to exceptions list",placement:"top",arrow:!0,children:Object(r.jsx)(j.a,{size:"small",className:"exception-btn",onClick:b?function(){d(t,n,a),f("Exception removed.",{variant:"error",anchorOrigin:{vertical:"bottom",horizontal:"right"}})}:function(){u(t,n,a),f("Exception added. Don't forget to export the exceptions!",{variant:"success",anchorOrigin:{vertical:"bottom",horizontal:"right"}})},children:b?Object(r.jsx)(m.a,{}):Object(r.jsx)(x.a,{})})})},C=n(30),E=function(e){var t,n=e.label,o=e.separator,u=e.valuePath,d=e.errorPath,j=e.className,h=e.inline,x=e.tooltip,O=e.tooltipProps,m=e.renderValue,P=e.basePathOverwrite,g=Object(C.g)(),E=Object(c.useContext)(b.a),N=Object(c.useContext)(b.b),k=Object(c.useContext)(b.c),w=Object(v.a)(P||N,u),A=m(e.value||l()(E.item,w,e.value));("boolean"===typeof A&&(A=String(A)),d)?t=(f()(d)?d:[d]).map((function(e){return Object(v.a)(P||N,e)})):t=[w];var S=t.some((function(e){return E.path_to_issues.includes(e)})),z=E.level;if(Object(c.useEffect)((function(){S&&k(z)}),[z]),void 0===A||null===A)return null;var y=Object(r.jsx)(_,{service:g.service,finding:g.finding,path:"".concat(E.path,".").concat(t[0])}),D=Object(r.jsxs)("span",{className:s()(S&&s()("issue",z)),children:[A,S&&y]});return Object(r.jsx)(p.a,{className:s()(j,"partial-value",{inline:h}),label:n,separator:o,value:x?Object(r.jsx)(i.a,Object(a.a)(Object(a.a)({title:A},O),{},{children:D})):D})};E.defaultProps={label:"",separator:": ",value:null,valuePath:null,errorPath:null,inline:!1,tooltip:!1,tooltipProps:{enterDelay:1e3,placement:"top-start"},renderValue:function(e){return e}};t.a=E},697:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return i.a})),n.d(t,"c",(function(){return o.a}));var a=n(1),r=(n(0),n(694)),c=(n(66),function(e){var t=e.data,n=e.children;return console.info("PARTIAL DATA",t),Object(a.jsx)(r.a.Provider,{value:t,children:n})}),i=n(695),o=n(696)},698:function(e,t,n){},699:function(e,t,n){"use strict";var a=n(35),r=n(37);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=r(n(0)),i=(0,a(n(38)).default)(c.createElement("path",{d:"M19 13H5v-2h14v2z"}),"Remove");t.default=i},700:function(e,t,n){"use strict";var a=n(1);n(0),n(701);t.a=function(e){var t=e.children;return Object(a.jsxs)("div",{className:"informations-wrapper",children:[Object(a.jsx)("h4",{className:"title",children:"Informations"}),t]})}},701:function(e,t,n){}}]);
//# sourceMappingURL=71.dccedc54.chunk.js.map