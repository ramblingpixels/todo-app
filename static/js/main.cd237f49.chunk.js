(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{10:function(t,e,o){},11:function(t,e,o){},13:function(t,e,o){"use strict";o.r(e);var c=o(1),n=o.n(c),s=o(5),a=o.n(s),l=(o(10),o(2)),i=(o(11),o(0)),d=function(t){var e=t.inputText,o=t.setInputText,c=t.todos,n=t.setTodos,s=t.setStatus;return Object(i.jsxs)("form",{children:[Object(i.jsx)("input",{value:e,onChange:function(t){console.log(t.target.value),o(t.target.value)},type:"text",className:"todo-input"}),Object(i.jsx)("button",{onClick:function(t){t.preventDefault(),console.log(c);var s=c;s.push({text:e,completed:!1,id:100}),n(s),console.log(c),o("")},children:Object(i.jsx)("i",{className:"fas fa-plus-square"})}),Object(i.jsx)("div",{className:"select",children:Object(i.jsxs)("select",{onChange:function(t){s(t.target.value)},name:"todos",className:"filter-todo",children:[Object(i.jsx)("option",{value:"all",children:"All"}),Object(i.jsx)("option",{value:"completed",children:"Completed"}),Object(i.jsx)("option",{value:"incompleted",children:"Incompleted"})]})})]})},r=o(4),u=function(t){var e=t.text,o=t.todos,c=t.setTodos,n=t.todo;return Object(i.jsxs)("div",{className:"todo",children:[Object(i.jsx)("li",{className:"todo-item ".concat(n.completed?"completed":""),children:e}),Object(i.jsx)("button",{onClick:function(){c(o.map((function(t){return t.id===n.id?Object(r.a)(Object(r.a)({},t),{},{completed:!t.completed}):t})))},className:"complete-btn",children:Object(i.jsx)("i",{className:"fas fa-check"})}),Object(i.jsx)("button",{onClick:function(){c(o.filter((function(t){return t.id!==n.id})))},className:"trash-btn",children:Object(i.jsx)("i",{className:"fas fa-trash"})})]})},j=function(t){var e=t.todos,o=t.setTodos,c=t.filteredTodos;return Object(i.jsx)("div",{className:"todo-container",children:Object(i.jsx)("ul",{className:"todo-list",children:null===c||void 0===c?void 0:c.map((function(t){return Object(i.jsx)(u,{text:t.text,todos:e,setTodos:o,todo:t},t.id)}))})})};var b=function(){var t=Object(c.useState)(""),e=Object(l.a)(t,2),o=e[0],n=e[1],s=Object(c.useState)([]),a=Object(l.a)(s,2),r=a[0],u=a[1],b=Object(c.useState)("all"),f=Object(l.a)(b,2),p=f[0],O=f[1],m=Object(c.useState)([]),x=Object(l.a)(m,2),h=x[0],v=x[1];Object(c.useEffect)((function(){S()}),[]),Object(c.useEffect)((function(){g(),N()}),[r,p]);var g=function(){switch(p){case"completed":v(r.filter((function(t){return!0===t.completed})));break;case"incompleted":v(r.filter((function(t){return!1===t.completed})));break;default:v(r)}},N=function(){localStorage.setItem("todos",JSON.stringify(r))},S=function(){if(localStorage.getItem(null===r))localStorage.setItem("todos",JSON.stringify([]));else{var t=JSON.parse(localStorage.getItem("todos"));u(t)}};return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)("header",{children:Object(i.jsx)("h1",{children:"To-Do List"})}),Object(i.jsx)(d,{inputText:o,todos:r,setTodos:u,setInputText:n,setStatus:O}),Object(i.jsx)(j,{todos:r,setTodos:u,filteredTodos:h})]})},f=function(t){t&&t instanceof Function&&o.e(3).then(o.bind(null,14)).then((function(e){var o=e.getCLS,c=e.getFID,n=e.getFCP,s=e.getLCP,a=e.getTTFB;o(t),c(t),n(t),s(t),a(t)}))};a.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(b,{})}),document.getElementById("root")),f()}},[[13,1,2]]]);
//# sourceMappingURL=main.cd237f49.chunk.js.map