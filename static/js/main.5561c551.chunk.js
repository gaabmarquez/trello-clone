(this["webpackJsonptrello-clone"]=this["webpackJsonptrello-clone"]||[]).push([[0],{139:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(11),i=n.n(c),o=(n(87),n(13)),l=n(4),s=(n(88),n(9)),u=n(22),p=n(5),d=n(80);function b(){var e=Object(l.a)(["\n  color: white;\n  background-color: #5aac44;\n  font-weight: bold;\n  margin-right: 1em;\n  &:hover {\n    color: white;\n  }\n"]);return b=function(){return e},e}var f=p.a.button(b());function m(e){var t=e.disabled,n=e.btnText,a=e.onClick;return r.a.createElement(f,{className:"btn",disabled:t,onMouseDown:a},n)}function O(){var e=Object(l.a)(["\n  display: flex;\n  align-items: center;\n  margin-top: 0.5em;\n"]);return O=function(){return e},e}var v=p.a.div(O());function E(e){var t=e.text,n=e.toggleForm,a=e.handleInputChange,c=e.buttonText,i=e.onSubmit;return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{minRows:3,autoFocus:!0,placeholder:"Enter a title for this card...",onBlur:n,value:t,onChange:a,style:g.textArea}),r.a.createElement(v,null,r.a.createElement(m,{btnText:c,disabled:0===t.length,onClick:i}),r.a.createElement("span",{onClick:n},"\xa0",r.a.createElement("i",{className:"fas fa-times fa-lg",style:g.icon}))))}var g={icon:{color:"#6b778c",fontSize:"1.5em",cursor:"pointer"},textArea:{resize:"none",width:"100%",border:"none",padding:"8px"}},h=n(17),j={ADD_CARD:"ADD_CARD",EDIT_CARD:"EDIT_CARD",ARCHIVE_CARD:"ARCHIVE_CARD",ADD_LIST:"ADD_LIST",EDIT_LIST:"EDIT_LIST",ARCHIVE_LIST:"ARCHIVE_LIST",DRAGGED:"DRAGGED",FILTER_CARDS:"FILTER_CARDS",DUPLICATE_CARD:"DUPLICATE_CARD",DUPLICATE_LIST:"DUPLICATE_LIST",UNDO_LAST_ACTION:"UNDO_LAST_ACTION",REDO_LAST_ACTION:"REDO_LAST_ACTION"},y=n(25),I=n(23);function C(){var e=Object(l.a)(["\n  position: absolute;\n  display: none;\n  right: 10px;\n  bottom: 0px;\n  opacity: 0.5;\n  ",":hover & {\n    display: block;\n    cursor: pointer;\n  }\n  &:hover {\n    color: #bf4600;\n    opacity: 0.8;\n  }\n"]);return C=function(){return e},e}function A(){var e=Object(l.a)(["\n  position: absolute;\n  display: none;\n\n  right: 40px;\n  bottom: 0px;\n  opacity: 0.5;\n  ",":hover & {\n    display: block;\n    cursor: pointer;\n  }\n  &:hover {\n    color: #bf4600;\n    opacity: 0.8;\n  }\n"]);return A=function(){return e},e}function x(){var e=Object(l.a)(["\n  position: absolute;\n  display: none;\n  right: 70px;\n  bottom: 0px;\n  opacity: 0.5;\n  ",":hover & {\n    display: block;\n    cursor: pointer;\n  }\n  &:hover {\n    color: #bf4600;\n    opacity: 0.8;\n  }\n"]);return x=function(){return e},e}function D(){var e=Object(l.a)(["\n  margin-bottom: 0.5rem !important;\n  margin-left: 0.5rem !important;\n  margin-right: 0.5rem !important;\n"]);return D=function(){return e},e}var T=p.a.div(D()),_=p.a.div(x(),T),S=p.a.div(A(),T),R=p.a.div(C(),T),L={container:{margin:"0.5rem",color:"#5e6c84"},card:{margin:"20px",borderRadius:"3px",height:"auto",wordWrap:"break-word"},cardBody:{padding:"5px 10px",marginBottom:"20px"}},w=function(e){var t=e.id,n=e.text,c=e.index,i=e.listId,l=Object(a.useState)(!1),p=Object(o.a)(l,2),d=p[0],b=p[1],f=Object(a.useState)(n),m=Object(o.a)(f,2),O=m[0],v=m[1],g=Object(s.c)(),C=Object(s.d)((function(e){return e.search})),A=function(e){e.preventDefault(),v(O),g(function(e,t){return{type:j.EDIT_CARD,payload:{id:e,newText:t}}}(t,O)),b(!1)},x=function(e){v(e.target.value)},D=function(){b(!d)},w=function(){var e,a;g((e={id:t,text:n,list:i},{type:j.ARCHIVE_CARD,payload:{card:e,listID:a}})),b(!1)},N=function(){g(function(e){var t=e.id;return e.id=Object(h.uuid)(),{type:j.DUPLICATE_CARD,payload:{card:e,oldId:t}}}({id:t,text:"Copy of ".concat(n),list:i})),b(!1)};return d?r.a.createElement("div",{style:L.container},r.a.createElement(E,{text:O,toggleForm:D,buttonText:"Save",handleInputChange:x,onSubmit:A})):!C||n.toUpperCase().includes(C.toUpperCase())?r.a.createElement(u.b,{draggableId:String(t),index:c},(function(e){return r.a.createElement(T,Object.assign({className:"card",ref:e.innerRef},e.draggableProps,e.dragHandleProps),r.a.createElement(y.a,{placement:"top",overlay:r.a.createElement(I.a,null,"Duplicate Card")},r.a.createElement(_,{onClick:N},r.a.createElement("span",null,"\xa0",r.a.createElement("i",{className:"fas fa-copy"})))),r.a.createElement(y.a,{placement:"top",overlay:r.a.createElement(I.a,null,"Edit Card")},r.a.createElement(S,{onClick:D},r.a.createElement("span",null,"\xa0",r.a.createElement("i",{className:"fas fa-pen"})))),r.a.createElement(y.a,{placement:"top",overlay:r.a.createElement(I.a,null,"Archive Card")},r.a.createElement(R,{onClick:w},r.a.createElement("span",null,"\xa0",r.a.createElement("i",{className:"fas fa-archive"})))),r.a.createElement("div",{className:"card-body",style:L.cardBody},n))})):r.a.createElement(r.a.Fragment,null," ")};function N(e){var t=e.listId,n=Object(a.useState)(!1),c=Object(o.a)(n,2),i=c[0],l=c[1],u=Object(a.useState)(""),p=Object(o.a)(u,2),d=p[0],b=p[1],f=Object(s.c)(),m=function(){b(""),f(function(e,t){var n=Object(h.uuid)();return{type:j.ADD_CARD,payload:{text:t,listID:e,id:n}}}(t,d))},O=function(e){b(e.target.value)},v=function(){l((function(e){return!e})),b("")};return r.a.createElement("div",{style:k.container},i?r.a.createElement(E,{text:d,buttonText:"Add Card",toggleForm:v,handleInputChange:O,onSubmit:m}):r.a.createElement("p",{style:k.addAnother,onClick:function(){l((function(e){return!e}))}},r.a.createElement("i",{className:"fas fa-plus"}," ")," \xa0 Add another card"))}var k={container:{margin:"1em",color:"#5e6c84"},addAnother:{margin:"0.5em 1em",cursor:"pointer"}};function U(){var e=Object(l.a)(["\n  padding: 8px 12px;\n  resize: none;\n  width: 100%;\n  border: none;\n"]);return U=function(){return e},e}function P(){var e=Object(l.a)(["\n  background-color: #ebecf0;\n  padding: 0.5em 0.4em;\n  border-radius: 3px;\n"]);return P=function(){return e},e}var F=p.a.div(P()),H=p.a.input(U()),V={actionContainer:{display:"flex",alignItems:"center",paddingTop:"0.5em"},icon:{color:"#42526e",fontSize:"1.5em",cursor:"pointer"}};function B(e){var t=e.text,n=e.toggleForm,a=e.handleInputChange,c=e.buttonText,i=e.onSubmit;return r.a.createElement(F,null,r.a.createElement(H,{autoFocus:!0,placeholder:"Enter a list title...",onBlur:n,value:t,onChange:a}),r.a.createElement("div",{style:V.actionContainer},r.a.createElement(m,{btnText:c,disabled:0===t.length,onClick:i}),r.a.createElement("span",{onClick:n},"\xa0",r.a.createElement("i",{className:"fas fa-times fa-lg",style:V.icon}))))}function G(){var e=Object(l.a)(["\n  position: absolute;\n  right: 15px;\n  top: 5px;\n  opacity: 0.5;\n  ",":hover & {\n    display: block;\n    cursor: pointer;\n  }\n  &:hover {\n    opacity: 0.8;\n    color: #bf4600;\n  }\n"]);return G=function(){return e},e}function z(){var e=Object(l.a)(["\n  position: absolute;\n  right: 45px;\n  top: 5px;\n  opacity: 0.5;\n  ",":hover & {\n    display: block;\n    cursor: pointer;\n  }\n  &:hover {\n    opacity: 0.8;\n    color: #bf4600;\n  }\n"]);return z=function(){return e},e}function W(){var e=Object(l.a)(["\n  position: absolute;\n  right: 75px;\n  top: 5px;\n  opacity: 0.5;\n  ",":hover & {\n    display: block;\n    cursor: pointer;\n  }\n  &:hover {\n    opacity: 0.8;\n    color: #bf4600;\n  }\n"]);return W=function(){return e},e}function M(){var e=Object(l.a)(["\n  background-color: #ebecf0;\n  margin-right: 1em;\n  border-radius: 3px;\n  min-width: 272px;\n  max-width: 272px;\n"]);return M=function(){return e},e}var J=p.a.div(M()),X=p.a.div(W(),J),K=p.a.div(z(),J),$=p.a.div(G(),J),q={container:{backgroundColor:"#ebecf0",marginRight:"1em",borderRadius:"3px",minWidth:"272px",maxWidth:"272px"},actionContainer:{position:"relative"},title:{padding:"10px",fontSize:"1.2em",wordBreak:"break-all",width:"70%"}},Q=function(e){var t=e.id,n=e.title,c=e.cards,i=void 0===c?[]:c,l=e.index,p=Object(a.useState)(!1),d=Object(o.a)(p,2),b=d[0],f=d[1],m=Object(a.useState)(n),O=Object(o.a)(m,2),v=O[0],E=O[1],g=Object(s.c)(),C=function(e){e.preventDefault(),g(function(e,t){return{type:j.EDIT_LIST,payload:{title:t,id:e}}}(t,v)),f(!1)},A=function(e){E(e.target.value)},x=function(){f(!b)},D=function(){g(function(e,t){return{type:j.ARCHIVE_LIST,payload:{list:e,cards:t}}}({id:t,title:n},i)),f(!1)},T=function(){g(function(e,t,n){var a=Object(h.uuid)();return{type:j.DUPLICATE_LIST,payload:{id:e,title:t,cards:n,newId:a}}}(t,n,i)),f(!1)};return r.a.createElement(u.b,{draggableId:String(t),index:l},(function(e){return r.a.createElement(J,Object.assign({ref:e.innerRef},e.draggableProps,e.dragHandleProps),b?r.a.createElement(B,{text:v,buttonText:"Save",toggleForm:x,handleInputChange:A,onSubmit:C}):r.a.createElement("div",{style:{position:"relative"}},r.a.createElement("h2",{style:q.title},n),r.a.createElement(y.a,{placement:"top",overlay:r.a.createElement(I.a,null,"Edit List title")},r.a.createElement(K,{onClick:x},r.a.createElement("span",null,"\xa0",r.a.createElement("i",{className:"fas fa-pen"})))),r.a.createElement(y.a,{placement:"top",overlay:r.a.createElement(I.a,null,"Duplicate list")},r.a.createElement(X,{onClick:T},r.a.createElement("span",null,"\xa0",r.a.createElement("i",{className:"fas fa-copy"})))),r.a.createElement(y.a,{placement:"top",overlay:r.a.createElement(I.a,null,"Archive List")},r.a.createElement($,{onClick:D},r.a.createElement("span",null,"\xa0",r.a.createElement("i",{className:"fas fa-archive"}))))),r.a.createElement(u.c,{droppableId:String(t)},(function(e){return r.a.createElement("div",Object.assign({ref:e.innerRef},e.droppableProps),i.map((function(e,n){return r.a.createElement(w,{key:e.id,index:n,text:e.text,id:e.id,listId:t})})),e.placeholder,r.a.createElement(N,{listId:t}))})))}))};function Y(){var e=Object(l.a)(["\n  background-color: hsla(0, 0%, 100%, 0.24);\n  padding: 10px;\n  font-size: 1.1em;\n  color: white;\n  cursor: pointer;\n  border-radius: 3px;\n"]);return Y=function(){return e},e}function Z(){var e=Object(l.a)(["\n  min-width: 272px;\n  color: #fff;\n"]);return Z=function(){return e},e}var ee=p.a.div(Z()),te=p.a.p(Y()),ne=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(""),l=Object(o.a)(i,2),u=l[0],p=l[1],d=Object(s.c)(),b=function(){u.length>0&&(d(function(e){var t=Object(h.uuid)();return{type:j.ADD_LIST,payload:{title:e,id:t}}}(u)),p(""))},f=function(e){p(e.target.value)},m=function(){c((function(e){return!e})),p("")};return r.a.createElement(ee,null,n?r.a.createElement(B,{text:u,buttonText:"Add List",toggleForm:m,handleInputChange:f,onSubmit:b}):r.a.createElement(te,{onClick:function(){c((function(e){return!e}))}},r.a.createElement("i",{className:"fas fa-plus"}," ")," \xa0 Add another list"))};function ae(){var e=Object(l.a)(["\n  position: absolute;\n  color: white;\n  top: 55px;\n  right: 140px;\n  font-weight: bold;\n  margin-right: 1em;\n  background-color: hsla(0, 0%, 100%, 0.24);\n  &:hover {\n    color: white;\n  }\n  &:disabled {\n    cursor: not-allowed;\n  }\n"]);return ae=function(){return e},e}function re(){var e=Object(l.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  margin-top: 2em;\n"]);return re=function(){return e},e}var ce=p.a.div(re()),ie=p.a.button(ae()),oe=function(){var e=Object(s.d)((function(e){return e.lists})),t=Object(s.d)((function(e){return e.cards})),n=Object(s.c)(),a=function(){n({type:j.UNDO_LAST_ACTION})};return r.a.createElement(u.a,{onDragEnd:function(e){var t=e.destination,a=e.source,r=e.draggableId,c=e.type;t&&n(function(e,t,n,a,r,c){return{type:j.DRAGGED,payload:{droppableIdStart:e,droppableIdEnd:t,droppableIndexStart:n,droppableIndexEnd:a,draggableId:r,type:c}}}(a.droppableId,t.droppableId,a.index,t.index,r,c))}},r.a.createElement(u.c,{droppableId:"all-lists",direction:"horizontal",type:"list"},(function(n){return r.a.createElement(ce,Object.assign({ref:n.innerRef},n.droppableProps),r.a.createElement(ie,{className:"btn",onClick:a,disabled:0===e.past.length&&!t.past},r.a.createElement("i",{className:"fas fa-undo-alt mr-2"}),"Undo last action"),Object.keys(e.present).map((function(n,a){var c=e.present[n],i=c.cards.length>0?c.cards.map((function(e){return t.present[e]})).filter((function(e){return void 0!==e})):[];return r.a.createElement(Q,{key:c.id,id:c.id,title:c.title,cards:i,index:a})})),n.placeholder,r.a.createElement(ne,null))})))},le=n(54);function se(){var e=Object(l.a)(["\n  position: absolute;\n  color: white;\n  top: 55px;\n  right: 0px;\n  font-weight: bold;\n  margin-right: 1em;\n  background-color: hsla(0, 0%, 100%, 0.24);\n  &:hover {\n    color: white;\n  }\n"]);return se=function(){return e},e}function ue(){var e=Object(l.a)(["\n  overflow: scroll;\n  max-height: 40vh;\n"]);return ue=function(){return e},e}function pe(){var e=Object(l.a)(["\n  overflow: scroll;\n  max-height: 30vh;\n"]);return pe=function(){return e},e}function de(){var e=Object(l.a)(["\n  position: absolute;\n  right: 0px;\n  top: 55px;\n  background-color: #ebecf0;\n  margin-right: 1em;\n  border-radius: 3px;\n  min-width: 272px;\n  padding: 14px 20px;\n  height: 90vh;\n  margin-right: 0;\n  min-width: 320px;\n  h2 {\n    text-decoration: underline;\n    text-align: center;\n  }\n"]);return de=function(){return e},e}var be=p.a.div(de()),fe=p.a.div(pe()),me=p.a.div(ue()),Oe=p.a.button(se());function ve(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],c=t[1],i=function(){c(!n)},l=Object(s.d)((function(e){return e.archived.present}));return n?r.a.createElement(be,null,r.a.createElement("h2",null,"Menu"),r.a.createElement("span",{onClick:i},"\xa0",r.a.createElement("i",{className:"fas fa-times fa-lg",style:Ee.icon})),r.a.createElement("h5",{style:Ee.title},"Archived Lists (",l.lists.length,")"),r.a.createElement(fe,{style:{marginBottom:"2em",marginTop:"2em"}},l.lists.map((function(e){return r.a.createElement(le.a,{key:"archived-".concat(e.id),body:!0,style:Ee.cardBody},e.title)}))),r.a.createElement("h5",{style:Ee.title},"Archived Cards (",l.cards.length,")"),r.a.createElement(me,{style:{marginBottom:"2em",marginTop:"5em"}},l.cards.map((function(e){return r.a.createElement(le.a,{key:"archived-".concat(e.id),body:!0,style:Ee.cardBody},e.text)})))):r.a.createElement(Oe,{className:"btn",onClick:i},r.a.createElement("i",{className:"fas fa-ellipsis-h mr-2"}),"Show Menu")}var Ee={icon:{position:"absolute",top:"10px",right:"10px",cursor:"pointer"},cardBody:{padding:"5px",marginBottom:"5px"},title:{position:"fixed",backgroundColor:"#ebecf0"}},ge=n(79),he=n(78),je=function(e){return{type:j.FILTER_CARDS,payload:{text:e}}};function ye(){var e=Object(l.a)(["\n  overflow: scroll;\n  height: 80vh;\n\n  h1 {\n    color: white;\n  }\n"]);return ye=function(){return e},e}function Ie(){var e=Object(l.a)(["\n  position: relative;\n"]);return Ie=function(){return e},e}function Ce(){var e=Object(l.a)(["\n  right: 5px;\n  position: absolute;\n  top: 10px;\n  color: #6b778c;\n  cursor: pointer;\n  font-size: 1.2em;\n"]);return Ce=function(){return e},e}var Ae={navContainer:{display:"grid",justifyContent:"space-around",background:"rgba(0,0,0,.15)"}},xe=p.a.i(Ce()),De=p.a.div(Ie()),Te=p.a.div(ye());var _e=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],i=Object(s.c)(),l=function(){i(je(n))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(ge.a,{style:Ae.navContainer},r.a.createElement(he.a,{className:"mr-auto"},r.a.createElement(De,null,r.a.createElement("input",{type:"text",value:n,onKeyUp:function(e){l()},onChange:function(e){c(e.target.value)},placeholder:"Search text inside cards",className:"mr-sm-2  form-control"}),n.length>0?r.a.createElement(xe,{className:"fas fa-times",onClick:function(){c(""),i(je(""))}}):r.a.createElement(r.a.Fragment,null," ")))),r.a.createElement(Te,{className:"container-fluid mt-4"},r.a.createElement("h1",null,"Trello Clone "),r.a.createElement(oe,null),r.a.createElement(ve,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(136);var Se,Re,Le,we=n(12),Ne=n(7),ke=n(3),Ue={past:[],present:[{id:"10",cards:[],title:"To Do"},{id:"11",cards:[],title:"Doing"},{id:"12",cards:[],title:"Done"}],future:[]},Pe=[j.EDIT_CARD],Fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type!==j.UNDO_LAST_ACTION&&t.type!==j.REDO_LAST_ACTION&&(Se=t.type),t.type){case j.ADD_LIST:var n=t.payload.title,a=Object(h.uuid)(),r={title:n,cards:[],id:a},c=Object(ke.a)({},e,{past:Object(Ne.a)(e.present),present:[].concat(Object(Ne.a)(e.present),[r])});return c;case j.DUPLICATE_LIST:var i=t.payload,o=i.title,l=i.id,s=i.cards,u=i.newId,p=s.map((function(e){return e.id})),d=e.present.map((function(e){return e.id})).indexOf(l),b={title:"Copy of ".concat(o),cards:p,id:u},f=Object(Ne.a)(e.present);f.splice(d+1,0,b);var m=Object(ke.a)({},e,{past:Object(Ne.a)(e.present),present:f});return m;case j.EDIT_LIST:var O=t.payload,v=O.title,E=O.id,g=e.present.map((function(e){return e.id===E?Object(ke.a)({},e,{title:v}):e})),y=Object(ke.a)({},e,{past:Object(Ne.a)(e.present),present:g});return y;case j.ARCHIVE_LIST:var I=t.payload.list,C=e.present.filter((function(e){return e.id!==I.id})),A=Object(ke.a)({},e,{past:Object(Ne.a)(e.present),present:C});return A;case j.ADD_CARD:var x=t.payload,D=x.listID,T=x.id,_=e.present.map((function(e){return e.id===D?Object(ke.a)({},e,{cards:[].concat(Object(Ne.a)(e.cards),[T])}):e})),S=Object(ke.a)({},e,{past:Object(Ne.a)(e.present),present:_});return S;case j.DUPLICATE_CARD:var R=t.payload,L=R.card,w=R.oldId,N=e.present.map((function(e){if(e.id===L.list){var t=e.cards.indexOf(w),n=Object(Ne.a)(e.cards);return n.splice(t+1,0,L.id),Object(ke.a)({},e,{cards:n})}return e})),k=Object(ke.a)({},e,{past:Object(Ne.a)(e.present),present:N});return k;case j.ARCHIVE_CARD:var U=t.payload.card,P=e.present.find((function(e){return e.id===U.list})),F=Object(Ne.a)(P.cards);F=F.filter((function(e){return e!==U.id}));var H=e.present.map((function(e){return e.id===U.list?Object(ke.a)({},e,{cards:F}):e})),V=Object(ke.a)({},e,{past:Object(Ne.a)(e.present),present:H});return V;case j.DRAGGED:var B,G=t.payload,z=G.droppableIdStart,W=G.droppableIdEnd,M=G.droppableIndexStart,J=G.droppableIndexEnd,X=G.type;if("list"===X){var K,$=(B=Object(Ne.a)(e.present)).splice(M,1);(K=B).splice.apply(K,[J,0].concat(Object(Ne.a)($)))}else if(z===W){var q=e.present.find((function(e){return z===e.id})),Q=Object(Ne.a)(q.cards),Y=Q.splice(M,1);Q.splice.apply(Q,[J,0].concat(Object(Ne.a)(Y))),B=e.present.map((function(e){return e.id===q.id?Object(ke.a)({},q,{cards:Q}):e}))}else{var Z=e.present.find((function(e){return z===e.id})),ee=e.present.find((function(e){return W===e.id})),te=Object(Ne.a)(Z.cards),ne=Object(Ne.a)(ee.cards),ae=te.splice(M,1);ne.splice.apply(ne,[J,0].concat(Object(Ne.a)(ae))),B=e.present.map((function(e){return e.id===Z.id?Object(ke.a)({},Z,{cards:te}):e.id===ee.id?Object(ke.a)({},ee,{cards:ne}):e}))}var re=Object(ke.a)({},e,{past:Object(Ne.a)(e.present),present:B});return re;case j.UNDO_LAST_ACTION:if(e.past.length>0&&!Pe.includes(Se)){var ce={past:[],present:Object(Ne.a)(e.past),future:Object(Ne.a)(e.present)};return ce}return e;case j.REDO_LAST_ACTION:if(e.future.length>0&&!Pe.includes(Se)){var ie={past:Object(Ne.a)(e.present),present:Object(Ne.a)(e.future),future:[]};return ie}return e;default:return e}},He=n(32),Ve={past:{},present:{},future:{}},Be=[j.DRAGGED,j.ADD_LIST,j.EDIT_LIST],Ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type!==j.UNDO_LAST_ACTION&&t.type!==j.REDO_LAST_ACTION&&(Re=t.type),t.type){case j.ADD_CARD:var n=t.payload,a=n.text,r=n.listID,c=n.id,i={text:a,id:c,list:r};return Object(ke.a)({},e,{past:Object(ke.a)({},e.present),present:Object(ke.a)({},e.present,Object(He.a)({},c,i))});case j.EDIT_CARD:var o=t.payload,l=o.id,s=o.newText,u=Object(ke.a)({},e.present[l]);return u.text=s,Object(ke.a)({},e,{past:Object(ke.a)({},e.present),present:Object(ke.a)({},e.present,Object(He.a)({},l,u))});case j.ARCHIVE_CARD:var p=t.payload.card,d=Object(ke.a)({},e.present);delete d[p.id];var b=Object(ke.a)({},e,{past:Object(ke.a)({},e.present),present:d});return b;case j.ARCHIVE_LIST:var f=t.payload.cards,m=Object(ke.a)({},e.present);f.map((function(e){return delete m[e.id]}));var O=Object(ke.a)({},e,{past:Object(ke.a)({},e.present),present:m});return O;case j.DUPLICATE_CARD:var v=t.payload.card,E=Object(ke.a)({},e,{past:Object(ke.a)({},e.present),present:Object(ke.a)({},e.present,Object(He.a)({},v.id,v))});return E;case j.DUPLICATE_LIST:var g=t.payload,y=g.cards,I=g.newId,C=[],A=Object(ke.a)({},e.present),x=!0,D=!1,T=void 0;try{for(var _,S=y[Symbol.iterator]();!(x=(_=S.next()).done);x=!0){var R=_.value,L=Object(ke.a)({},R);L.id=Object(h.uuid)(),L.list=I,A[L.id]=L,C.push(L)}}catch(N){D=!0,T=N}finally{try{x||null==S.return||S.return()}finally{if(D)throw T}}t.payload.cards=C;var w=Object(ke.a)({},e,{past:Object(ke.a)({},e.present),present:A});return w;case j.UNDO_LAST_ACTION:return console.log(e.past),e.past&&!Be.includes(Re)?{past:void 0,present:Object(ke.a)({},e.past),future:Object(ke.a)({},e.present)}:e;case j.REDO_LAST_ACTION:return e.future&&!Be.includes(Re)?{past:Object(ke.a)({},e.present),present:Object(ke.a)({},e.future),future:{}}:e;default:return e}},ze={past:{},present:{lists:[],cards:[]},future:{}},We=[j.ARCHIVE_CARD,j.ARCHIVE_LIST],Me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ze,t=arguments.length>1?arguments[1]:void 0;switch(t.type!==j.UNDO_LAST_ACTION&&t.type!==j.REDO_LAST_ACTION&&(Le=t.type),t.type){case j.ARCHIVE_CARD:var n=t.payload.card,a=Object(ke.a)({},e.present,{cards:[].concat(Object(Ne.a)(e.present.cards),[n])}),r=Object(ke.a)({},e,{past:Object(ke.a)({},e.present),present:a});return r;case j.ARCHIVE_LIST:var c=t.payload,i=c.list,o=c.cards,l=Object(ke.a)({},e.present,{cards:[].concat(Object(Ne.a)(e.present.cards),Object(Ne.a)(o)),lists:[].concat(Object(Ne.a)(e.present.lists),[Object(ke.a)({},i)])}),s=Object(ke.a)({},e,{past:Object(ke.a)({},e.present),present:l});return s;case j.UNDO_LAST_ACTION:return e.past&&We.includes(Le)?{past:{},present:Object(ke.a)({},e.past),future:Object(ke.a)({},e.present)}:e;case j.REDO_LAST_ACTION:return e.future&&We.includes(Le)?{past:Object(ke.a)({},e.present),present:Object(ke.a)({},e.future),future:{}}:e;default:return e}},Je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j.FILTER_CARDS:var n=t.payload.text;return n;default:return e}},Xe=Object(we.c)({cards:Ge,lists:Fe,archived:Me,search:Je}),Ke=n(53),$e=n(76),qe={key:"trello-clone",storage:n.n($e).a},Qe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||we.d,Ye=Object(Ke.a)(qe,Xe);var Ze=n(77),et=function(e){var t=Object(we.e)(Ye,e,Qe());return{store:t,persistor:Object(Ke.b)(t)}}(),tt=et.persistor,nt=et.store;i.a.render(r.a.createElement(s.a,{store:nt},r.a.createElement(Ze.a,{loading:null,persistor:tt},r.a.createElement(_e,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},82:function(e,t,n){e.exports=n(139)},87:function(e,t,n){},88:function(e,t,n){}},[[82,1,2]]]);
//# sourceMappingURL=main.5561c551.chunk.js.map