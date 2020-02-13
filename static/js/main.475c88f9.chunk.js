(this["webpackJsonptrello-clone"]=this["webpackJsonptrello-clone"]||[]).push([[0],{118:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),o=n.n(c),i=(n(68),n(69),n(5)),l=n(10),d=n(3),u=n(14),s=n(6),p=n(62);function m(){var e=Object(i.a)(["\n  color: white;\n  background-color: #5aac44;\n  font-weight: bold;\n  margin-right: 1em;\n  &:hover {\n    color: white;\n  }\n"]);return m=function(){return e},e}var f=s.a.button(m());function b(e){var t=e.disabled,n=e.btnText,a=e.onClick;return r.a.createElement(f,{className:"btn",disabled:t,onMouseDown:a},n)}function v(){var e=Object(i.a)(["\n  display: flex;\n  align-items: center;\n  margin-top: 0.5em;\n"]);return v=function(){return e},e}var g=s.a.div(v());function E(e){var t=e.text,n=e.toggleForm,a=e.handleInputChange,c=e.buttonText,o=e.onSubmit;return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{minRows:3,autoFocus:!0,placeholder:"Enter a title for this card...",onBlur:n,value:t,onChange:a,style:h.textArea}),r.a.createElement(g,null,r.a.createElement(b,{btnText:c,disabled:0===t.length,onClick:o}),r.a.createElement("span",{onClick:n},"\xa0",r.a.createElement("i",{className:"fas fa-times fa-lg",style:h.icon}))))}var h={icon:{color:"#6b778c",fontSize:"1.5em",cursor:"pointer"},textArea:{resize:"none",width:"100%",border:"none"}},y=n(31),x={ADD_CARD:"ADD_CARD",EDIT_CARD:"EDIT_CARD",ARCHIVE_CARD:"ARCHIVE_CARD",ADD_LIST:"ADD_LIST",EDIT_LIST:"EDIT_LIST",ARCHIVE_LIST:"ARCHIVE_LIST",DRAGGED:"DRAGGED"},I=n(21),j=n(22);function O(){var e=Object(i.a)(["\n  position: absolute;\n  display: none;\n  right: 5px;\n  bottom: 0px;\n  opacity: 0.5;\n  ",":hover & {\n    display: block;\n    cursor: pointer;\n  }\n  &:hover {\n    opacity: 0.8;\n  }\n"]);return O=function(){return e},e}function D(){var e=Object(i.a)(["\n  position: absolute;\n  display: none;\n  right: 5px;\n  top: 0px;\n  opacity: 0.5;\n  ",":hover & {\n    display: block;\n    cursor: pointer;\n  }\n  &:hover {\n    opacity: 0.8;\n  }\n"]);return D=function(){return e},e}function C(){var e=Object(i.a)(["\n  margin-bottom: 0.5rem !important;\n  margin-left: 0.5rem !important;\n  margin-right: 0.5rem !important;\n"]);return C=function(){return e},e}var A=s.a.div(C()),R=s.a.div(D(),A),S=s.a.div(O(),A),T={container:{margin:"0.5rem",color:"#5e6c84"},card:{margin:"20px",borderRadius:"3px",height:"auto",wordWrap:"break-word"},cardBody:{padding:"14px"}},k=function(e){var t=e.id,n=e.text,c=e.index,o=e.listId,i=Object(a.useState)(!1),s=Object(l.a)(i,2),p=s[0],m=s[1],f=Object(a.useState)(n),b=Object(l.a)(f,2),v=b[0],g=b[1],h=Object(d.c)(),y=function(e){e.preventDefault(),g(""),h(function(e,t){return{type:x.EDIT_CARD,payload:{id:e,newText:t}}}(t,v)),m(!1)},O=function(e){g(e.target.value)},D=function(){m(!p)},C=function(){var e,a;h((e={id:t,text:n,list:o},{type:x.ARCHIVE_CARD,payload:{card:e,listID:a}})),m(!1)};return p?r.a.createElement("div",{style:T.container},r.a.createElement(E,{text:v,toggleForm:D,buttonText:"Save",handleInputChange:O,onSubmit:y})):r.a.createElement(u.b,{draggableId:String(t),index:c},(function(e){return r.a.createElement(A,Object.assign({className:"card",ref:e.innerRef},e.draggableProps,e.dragHandleProps),r.a.createElement(I.a,{placement:"top",overlay:r.a.createElement(j.a,null,"Edit Card")},r.a.createElement(R,{onClick:D},r.a.createElement("span",null,"\xa0",r.a.createElement("i",{className:"fas fa-pen"})))),r.a.createElement(I.a,{placement:"top",overlay:r.a.createElement(j.a,null,"Archive Card")},r.a.createElement(S,{onClick:C},r.a.createElement("span",null,"\xa0",r.a.createElement("i",{className:"fas fa-archive"})))),r.a.createElement("div",{className:"card-body",style:T.cardBody},n))}))};function w(e){var t=e.listId,n=Object(a.useState)(!1),c=Object(l.a)(n,2),o=c[0],i=c[1],u=Object(a.useState)(""),s=Object(l.a)(u,2),p=s[0],m=s[1],f=Object(d.c)(),b=function(){m(""),f(function(e,t){var n=Object(y.uuid)();return{type:x.ADD_CARD,payload:{text:t,listID:e,id:n}}}(t,p))},v=function(e){m(e.target.value)},g=function(){i((function(e){return!e})),m("")};return r.a.createElement("div",{style:_.container},o?r.a.createElement(E,{text:p,buttonText:"Add Card",toggleForm:g,handleInputChange:v,onSubmit:b}):r.a.createElement("p",{style:_.addAnother,onClick:function(){i((function(e){return!e}))}},r.a.createElement("i",{className:"fas fa-plus"}," ")," \xa0 Add another card"))}var _={container:{margin:"1em",color:"#5e6c84"},addAnother:{margin:"0.5em 1em",cursor:"pointer"}};function L(){var e=Object(i.a)(["\n  padding: 8px 12px;\n  resize: none;\n  width: 100%;\n  border: none;\n"]);return L=function(){return e},e}function H(){var e=Object(i.a)(["\n  background-color: #ebecf0;\n  padding: 0.5em 0.4em;\n  border-radius: 3px;\n"]);return H=function(){return e},e}var N=s.a.div(H()),V=s.a.input(L()),F={actionContainer:{display:"flex",alignItems:"center",paddingTop:"0.5em"},icon:{color:"#42526e",fontSize:"1.5em",cursor:"pointer"}};function W(e){var t=e.text,n=e.toggleForm,a=e.handleInputChange,c=e.buttonText,o=e.onSubmit;return r.a.createElement(N,null,r.a.createElement(V,{autoFocus:!0,placeholder:"Enter a list title...",onBlur:n,value:t,onChange:a}),r.a.createElement("div",{style:F.actionContainer},r.a.createElement(b,{btnText:c,disabled:0===t.length,onClick:o}),r.a.createElement("span",{onClick:n},"\xa0",r.a.createElement("i",{className:"fas fa-times fa-lg",style:F.icon}))))}function G(){var e=Object(i.a)(["\n  position: absolute;\n  // display: none;\n  right: 15px;\n  bottom: 5px;\n  opacity: 0.5;\n  ",":hover & {\n    display: block;\n    cursor: pointer;\n  }\n  &:hover {\n    opacity: 0.8;\n  }\n"]);return G=function(){return e},e}function z(){var e=Object(i.a)(["\n  position: absolute;\n  // display: none;\n  right: 45px;\n  bottom: 5px;\n  opacity: 0.5;\n  ",":hover & {\n    display: block;\n    cursor: pointer;\n  }\n  &:hover {\n    opacity: 0.8;\n  }\n"]);return z=function(){return e},e}function B(){var e=Object(i.a)(["\n  background-color: #ebecf0;\n  margin-right: 1em;\n  border-radius: 3px;\n  min-width: 272px;\n  max-width: 272px;\n"]);return B=function(){return e},e}var P=s.a.div(B()),U=s.a.div(z(),P),J=s.a.div(G(),P),M={container:{backgroundColor:"#ebecf0",marginRight:"1em",borderRadius:"3px",minWidth:"272px",maxWidth:"272px"},actionContainer:{position:"relative"},title:{padding:"10px",fontSize:"1.2em"}},$=function(e){var t=e.id,n=e.title,c=e.cards,o=void 0===c?[]:c,i=e.index,s=Object(a.useState)(!1),p=Object(l.a)(s,2),m=p[0],f=p[1],b=Object(a.useState)(n),v=Object(l.a)(b,2),g=v[0],E=v[1],h=Object(d.c)(),y=function(e){e.preventDefault(),h(function(e,t){return{type:x.EDIT_LIST,payload:{title:t,id:e}}}(t,g)),f(!1)},O=function(e){E(e.target.value)},D=function(){f(!m)},C=function(){console.log("LIST ID",t,o),h(function(e,t){return{type:x.ARCHIVE_LIST,payload:{list:e,cards:t}}}({id:t,title:n},o)),f(!1)};return r.a.createElement(u.b,{draggableId:String(t),index:i},(function(e){return r.a.createElement(P,Object.assign({ref:e.innerRef},e.draggableProps,e.dragHandleProps),m?r.a.createElement(W,{text:g,buttonText:"Save",toggleForm:D,handleInputChange:O,onSubmit:y}):r.a.createElement("div",{style:{position:"relative"}},r.a.createElement("h2",{style:M.title},n),r.a.createElement(I.a,{placement:"top",overlay:r.a.createElement(j.a,null,"Edit List title")},r.a.createElement(U,{onClick:D},r.a.createElement("span",null,"\xa0",r.a.createElement("i",{className:"fas fa-pen"})))),r.a.createElement(I.a,{placement:"top",overlay:r.a.createElement(j.a,null,"Archive List")},r.a.createElement(J,{onClick:C},r.a.createElement("span",null,"\xa0",r.a.createElement("i",{className:"fas fa-archive"}))))),r.a.createElement(u.c,{droppableId:String(t)},(function(e){return r.a.createElement("div",Object.assign({ref:e.innerRef},e.droppableProps),o.map((function(e,n){return r.a.createElement(k,{key:e.id,index:n,text:e.text,id:e.id,listId:t})})),e.placeholder,r.a.createElement(w,{listId:t}))})))}))};function q(){var e=Object(i.a)(["\n  background-color: hsla(0, 0%, 100%, 0.24);\n  padding: 10px;\n  font-size: 1.1em;\n  color: white;\n  cursor: pointer;\n  border-radius: 3px;\n"]);return q=function(){return e},e}function K(){var e=Object(i.a)(["\n  min-width: 272px;\n  color: #fff;\n"]);return K=function(){return e},e}var Q=s.a.div(K()),X=s.a.p(q()),Y=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(""),i=Object(l.a)(o,2),u=i[0],s=i[1],p=Object(d.c)(),m=function(){u.length>0&&(p(function(e){var t=Object(y.uuid)();return{type:x.ADD_LIST,payload:{title:e,id:t}}}(u)),s(""))},f=function(e){s(e.target.value)},b=function(){c((function(e){return!e})),s("")};return r.a.createElement(Q,null,n?r.a.createElement(W,{text:u,buttonText:"Add List",toggleForm:b,handleInputChange:f,onSubmit:m}):r.a.createElement(X,{onClick:function(){c((function(e){return!e}))}},r.a.createElement("i",{className:"fas fa-plus"}," ")," \xa0 Add another list"))};function Z(){var e=Object(i.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  margin-top: 2em;\n"]);return Z=function(){return e},e}var ee=s.a.div(Z()),te=function(){var e=Object(d.d)((function(e){return e.lists.present})),t=Object(d.d)((function(e){return e.cards.present})),n=Object(d.c)();Object(a.useEffect)((function(){console.log("LISTS",e),console.log("CARDS",t)}));return r.a.createElement(u.a,{onDragEnd:function(e){var t=e.destination,a=e.source,r=e.draggableId,c=e.type;t&&n(function(e,t,n,a,r,c){return{type:x.DRAGGED,payload:{droppableIdStart:e,droppableIdEnd:t,droppableIndexStart:n,droppableIndexEnd:a,draggableId:r,type:c}}}(a.droppableId,t.droppableId,a.index,t.index,r,c))}},r.a.createElement(u.c,{droppableId:"all-lists",direction:"horizontal",type:"list"},(function(n){return r.a.createElement(ee,Object.assign({ref:n.innerRef},n.droppableProps),Object.keys(e).map((function(n,a){var c=e[n],o=c.cards.length>0?c.cards.map((function(e){return t[e]})):[];return r.a.createElement($,{key:c.id,id:c.id,title:c.title,cards:o,index:a})})),n.placeholder,r.a.createElement(Y,null))})))},ne=n(16),ae=n.n(ne),re=function(e){var t=e.canUndo,n=e.canRedo,a=e.onUndo,c=e.onRedo;return r.a.createElement("p",null,r.a.createElement("button",{onClick:a,disabled:!t},"Undo"),r.a.createElement("button",{onClick:c,disabled:!n},"Redo"))},ce={onUndo:ne.ActionCreators.undo,onRedo:ne.ActionCreators.redo},oe=re=Object(d.b)((function(e){return{canUndo:e.lists.past.length>0,canRedo:e.lists.future.length>0}}),ce)(re);var ie=function(){var e=Object(d.d)((function(e){return e.archived.present}));return r.a.createElement("div",{className:"container-fluid mt-4"},r.a.createElement(oe,null),r.a.createElement("h1",{style:{color:"white"}},"Trello Clone "),r.a.createElement("p",{style:{color:"white",fontWeight:"bold"}},"Archived Cards: ",e.cards.length,r.a.createElement("br",null),"Archived Lists: ",e.lists.length),r.a.createElement(te,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(117);var le=n(9),de=n(11),ue=n(8),se=[{id:"list-0",cards:["card-0"],title:"To Do"},{id:"list-1",cards:["card-1"],title:"Doing"},{id:"list-2",cards:["card-2"],title:"Done"}],pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x.ADD_LIST:var n=t.payload,a=n.title,r=n.id,c={title:a,cards:[],id:"list-".concat(r)};return[].concat(Object(ue.a)(e),[c]);case x.EDIT_LIST:var o=t.payload,i=o.title,l=o.id,d=e.map((function(e){return e.id===l?Object(de.a)({},e,{title:i}):e}));return console.log(d),d;case x.ARCHIVE_LIST:var u=t.payload.list,s=e.filter((function(e){return e.id!==u.id}));return console.log("NEW STATE",u.id,s),s;case x.ADD_CARD:console.log(t.type,"LIST REDUCER");var p=t.payload,m=p.listID,f=p.id,b=e.map((function(e){return e.id===m?Object(de.a)({},e,{cards:[].concat(Object(ue.a)(e.cards),["card-".concat(f)])}):e}));return b;case x.ARCHIVE_CARD:var v=t.payload.card,g=Object(ue.a)(e),E=g.find((function(e){return e.id===v.list}));return E.cards=E.cards.filter((function(e){return e!==v.id})),g;case x.DRAGGED:var h=t.payload,y=h.droppableIdStart,I=h.droppableIdEnd,j=h.droppableIndexStart,O=h.droppableIndexEnd,D=h.type,C=Object(ue.a)(e);if("list"===D){var A=C.splice(j,1);return C.splice.apply(C,[O,0].concat(Object(ue.a)(A))),C}if(y===I){var R,S=e.find((function(e){return y===e.id})),T=S.cards.splice(j,1);(R=S.cards).splice.apply(R,[O,0].concat(Object(ue.a)(T)))}else{var k,w=e.find((function(e){return y===e.id})),_=e.find((function(e){return I===e.id})),L=w.cards.splice(j,1);L.list=_.id,(k=_.cards).splice.apply(k,[O,0].concat(Object(ue.a)(L)))}return console.log("NEW STATE",C),C;default:return e}},me=n(25),fe={"card-0":{text:"To do task",id:"card-0",list:"list-0"},"card-1":{text:"Doing task",id:"card-1",list:"list-1"},"card-2":{text:"Done task",id:"card-2",list:"list-2"}},be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x.ADD_CARD:var n=t.payload,a=n.text,r=n.listID,c=n.id,o={text:a,id:"card-".concat(c),list:r};return Object(de.a)({},e,Object(me.a)({},"card-".concat(c),o));case x.EDIT_CARD:var i=t.payload,l=i.id,d=i.newText,u=e[l];return u.text=d,Object(de.a)({},e,Object(me.a)({},"card-".concat(l),u));case x.ARCHIVE_CARD:var s=t.payload.card,p=e;return delete p[s.id],p;case x.ARCHIVE_LIST:var m=t.payload.cards,f=Object(de.a)({},e);return m.map((function(e){return delete f[e.id]})),console.log("CARDS",m),f;default:return e}},ve={lists:[],cards:[]},ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x.ARCHIVE_CARD:var n=t.payload.card,a=Object(de.a)({},e);return a.cards=[].concat(Object(ue.a)(a.cards),[n]),console.log("ARCHIVED",a),a;case x.ARCHIVE_LIST:var r=t.payload,c=r.list,o=r.cards;console.log(c);var i=Object(de.a)({},e);return i.cards=[].concat(Object(ue.a)(i.cards),Object(ue.a)(o)),i.lists=[].concat(Object(ue.a)(i.lists),[c]),console.log("NEW STATE",i),i;default:return e}},Ee=Object(le.c)({lists:ae()(pe),cards:ae()(be),archived:ae()(ge)});var he,ye=Object(le.e)(Ee,he);o.a.render(r.a.createElement(d.a,{store:ye},r.a.createElement(ie,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},63:function(e,t,n){e.exports=n(118)},68:function(e,t,n){},69:function(e,t,n){}},[[63,1,2]]]);
//# sourceMappingURL=main.475c88f9.chunk.js.map