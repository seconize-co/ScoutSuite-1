(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[31],{592:function(e,t,n){"use strict";n.r(t);var a=n(18),r=n(1),c=(n(0),n(13)),i=n.n(c),o=(n(66),n(697)),l=n(702),s=n(700);t.default=function(e){var t=e.data;if(!t)return null;var n=i()(t,["item","parameters"]);return Object(r.jsxs)(o.a,{data:t,children:[Object(r.jsxs)(s.a,{children:[Object(r.jsx)(o.c,{label:"ARN",valuePath:"arn"}),Object(r.jsx)(o.c,{label:"Descripition",valuePath:"description"}),Object(r.jsx)(o.c,{label:"Group Family",valuePath:"family"}),Object(r.jsx)(o.c,{label:"Default Parameter Group",valuePath:"is_default"})]}),Object(r.jsx)(l.b,{children:Object(r.jsx)(l.a,{title:"Parameters",children:Object(r.jsx)("div",{children:Object.entries(n).map((function(e,t){var n=Object(a.a)(e,2),c=n[0],i=n[1];return Object(r.jsx)(o.c,{label:c,value:i.value,errorPath:c},t)}))})})})]})}},694:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return l}));var a=n(0),r=n.n(a),c={path_to_issue:[],item:{}},i=r.a.createContext(c),o=r.a.createContext(""),l=r.a.createContext((function(){}))},695:function(e,t,n){"use strict";var a=n(1),r=n(0),c=n(694),i=n(66);t.a=function(e){var t=e.path,n=e.children,o=Object(r.useContext)(c.b);return Object(a.jsx)(c.b.Provider,{value:Object(i.a)(o,t),children:n})}},696:function(e,t,n){"use strict";var a=n(11),r=n(1),c=n(0),i=n(690),o=n(7),l=n.n(o),s=n(13),u=n.n(s),d=n(10),b=n.n(d),j=n(694),f=n(66),v=n(67),p=(n(698),n(686)),h=n(204),O=n.n(h),x=n(699),m=n.n(x),P=n(205),g=n(140),C=function(e){var t=e.service,n=e.finding,a=e.path,o=Object(c.useContext)(g.a),l=o.exceptions,s=o.addException,d=o.removeException,b=Object(P.b)().enqueueSnackbar,j=u()(l,[t,n],[]).includes(a);return Object(r.jsx)(i.a,{title:j?"Remove finding from exceptions list":"Add finding to exceptions list",placement:"top",arrow:!0,children:Object(r.jsx)(p.a,{size:"small",className:"exception-btn",onClick:j?function(){d(t,n,a),b("Exception removed.",{variant:"error",anchorOrigin:{vertical:"bottom",horizontal:"right"}})}:function(){s(t,n,a),b("Exception added. Don't forget to export the exceptions!",{variant:"success",anchorOrigin:{vertical:"bottom",horizontal:"right"}})},children:j?Object(r.jsx)(m.a,{}):Object(r.jsx)(O.a,{})})})},N=n(30),_=function(e){var t,n=e.label,o=e.separator,s=e.valuePath,d=e.errorPath,p=e.className,h=e.inline,O=e.tooltip,x=e.tooltipProps,m=e.renderValue,P=e.basePathOverwrite,g=Object(N.g)(),_=Object(c.useContext)(j.a),k=Object(c.useContext)(j.b),A=Object(c.useContext)(j.c),E=Object(f.a)(P||k,s),w=m(e.value||u()(_.item,E,e.value));("boolean"===typeof w&&(w=String(w)),d)?t=(b()(d)?d:[d]).map((function(e){return Object(f.a)(P||k,e)})):t=[E];var y=t.some((function(e){return _.path_to_issues.includes(e)})),D=_.level;if(Object(c.useEffect)((function(){y&&A(D)}),[D]),void 0===w||null===w)return null;var S=Object(r.jsx)(C,{service:g.service,finding:g.finding,path:"".concat(_.path,".").concat(t[0])}),z=Object(r.jsxs)("span",{className:l()(y&&l()("issue",D)),children:[w,y&&S]});return Object(r.jsx)(v.a,{className:l()(p,"partial-value",{inline:h}),label:n,separator:o,value:O?Object(r.jsx)(i.a,Object(a.a)(Object(a.a)({title:w},x),{},{children:z})):z})};_.defaultProps={label:"",separator:": ",value:null,valuePath:null,errorPath:null,inline:!1,tooltip:!1,tooltipProps:{enterDelay:1e3,placement:"top-start"},renderValue:function(e){return e}};t.a=_},697:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return i.a})),n.d(t,"c",(function(){return o.a}));var a=n(1),r=(n(0),n(694)),c=(n(66),function(e){var t=e.data,n=e.children;return console.info("PARTIAL DATA",t),Object(a.jsx)(r.a.Provider,{value:t,children:n})}),i=n(695),o=n(696)},698:function(e,t,n){},699:function(e,t,n){"use strict";var a=n(35),r=n(37);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=r(n(0)),i=(0,a(n(38)).default)(c.createElement("path",{d:"M19 13H5v-2h14v2z"}),"Remove");t.default=i},700:function(e,t,n){"use strict";var a=n(1);n(0),n(701);t.a=function(e){var t=e.children;return Object(a.jsxs)("div",{className:"informations-wrapper",children:[Object(a.jsx)("h4",{className:"title",children:"Informations"}),t]})}},701:function(e,t,n){},702:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return l.b}));var a=n(1),r=n(18),c=n(0),i=n(7),o=n.n(i),l=n(114),s=n(694),u=n(58),d=(n(703),function(e){var t=e.title,n=e.isSelected,i=e.disabled,d=e.onClick,b=e.children,j=Object(c.useState)(""),f=Object(r.a)(j,2),v=f[0],p=f[1],h=v?Object(a.jsxs)(a.Fragment,{children:[t,u.a[v].icon]}):t;return Object(a.jsx)(s.c.Provider,{value:p,children:Object(a.jsx)(l.a,{title:h,className:o()("partial-tab-pane",v),isSelected:n,disabled:i,onClick:d,children:b})})})},703:function(e,t,n){}}]);
//# sourceMappingURL=31.cc22d6fb.chunk.js.map