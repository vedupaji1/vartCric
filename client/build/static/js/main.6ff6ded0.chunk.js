(this["webpackJsonpvart-prac"]=this["webpackJsonpvart-prac"]||[]).push([[0],{32:function(a,e,t){},33:function(a,e,t){},41:function(a,e,t){"use strict";t.r(e);var n=t(8),c=t.n(n),s=t(21),r=t.n(s),i=(t(32),t(33),t(20)),l=t.n(i),o=t(22),d=t(27),j=t(0),b=function(a){return Object(j.jsx)(j.Fragment,{children:void 0===a.data?window.innerWidth>900?Object(j.jsxs)("div",{className:"scoreShowerMain",children:[Object(j.jsx)("div",{style:{color:"#bababa"},className:"detailsData"}),Object(j.jsx)("div",{style:{color:"#61dafb"},className:"team1Data"}),Object(j.jsx)("div",{style:{color:"white"},className:"team2Data"}),Object(j.jsx)("div",{style:{color:"#bababa",fontFamily:"'Inconsolata', monospace"},className:"statusData"})]}):Object(j.jsx)(j.Fragment,{}):Object(j.jsxs)("div",{className:"scoreShowerMain",children:[Object(j.jsx)("div",{style:{color:"#bababa"},className:"detailsData",children:a.data.details}),Object(j.jsx)("div",{style:{color:"#61dafb"},className:"team1Data",children:a.data.team1}),Object(j.jsx)("div",{style:{color:"white"},className:"team2Data",children:a.data.team2}),Object(j.jsx)("div",{style:{color:"#bababa",fontFamily:"'Inconsolata', monospace"},className:"statusData",children:a.data.statusDetail})]})})},m=function(a){var e=0,t=function(){e++};return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"scoreComponentMain",children:[Object(j.jsx)("div",{className:"componentTitle",children:a.data.header}),Object(j.jsx)("div",{className:"componentDataMain",children:a.data.data.map((function(n,c){return Object(j.jsx)("div",{className:"componentData",children:e<a.data.data.length?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(b,{data:a.data.data[e]}),t(),Object(j.jsx)(b,{data:a.data.data[e]}),t()]}):Object(j.jsx)(j.Fragment,{})},c)}))})]})})},h=t(26).a.connect("/"),u=function(){var a=Object(n.useState)(null),e=Object(d.a)(a,2),t=e[0],c=e[1];return h.on("getData",(function(a){c(a)})),h.on("hello",(function(a){console.log(a)})),Object(n.useEffect)((function(){var a=function(){var a=Object(o.a)(l.a.mark((function a(){var e,t;return l.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch("/giveData");case 2:return e=a.sent,a.next=5,e.json();case 5:t=a.sent,c(t);case 7:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();a()}),[]),Object(j.jsx)(j.Fragment,{children:null===t||0===t.length?Object(j.jsx)(j.Fragment,{}):Object(j.jsx)("div",{className:"dashboardMain",children:Object(j.jsx)("div",{className:"dashboardSubMain",style:{minHeight:window.innerHeight-80},children:t.map((function(a,e){return Object(j.jsx)(m,{data:t[e]},e)}))})})})},O=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"headerMain",children:Object(j.jsxs)("h1",{className:"heading",children:["VARt",Object(j.jsx)("span",{children:"Cric"})]})})})},x=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(O,{}),Object(j.jsx)(u,{})]})};r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.6ff6ded0.chunk.js.map