(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{12:function(e,t,a){e.exports=a(19)},17:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(6),r=a.n(c),s=(a(17),a(11)),l=a(4),i=a.n(l),u=a(7),p=a(1),m=a(8),d=a.n(m);var _=function(){return o.a.createElement("header",{className:"header"},o.a.createElement("img",{className:"header__logo",src:d.a,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f"}))},f=o.a.createContext(),h=function(e){var t=e.card,a=e.onCardClick,n=e.onCardLike,c=e.onCardDelete,r=o.a.useContext(f),s=t.owner._id===r._id,l=t.likes.some((function(e){return e._id===r._id}));return o.a.createElement("li",{className:"card"},o.a.createElement("button",{className:"".concat(s?"card__remove-button card__remove-button_show":"card__remove-button"),type:"button",onClick:function(){c(t)}}),o.a.createElement("img",{className:"card__image",src:t.link,alt:t.name,onClick:function(){a(t)}}),o.a.createElement("div",{className:"card__description"},o.a.createElement("p",{className:"card__name"},t.name),o.a.createElement("div",{className:"card__like-cover"},o.a.createElement("button",{className:"".concat(l?"card__like card__like_active":"card__like"),type:"button",onClick:function(){n(t)}}),o.a.createElement("span",{className:"card__like-counter"},t.likes.length))))},b=function(e){var t=e.onEditAvatar,a=e.onEditProfile,n=e.onAddPlace,c=e.onCardClick,r=e.onCardLike,s=e.onCardDelete,l=e.cards,i=o.a.useContext(f);return o.a.createElement("main",{className:"content"},o.a.createElement("section",{className:"profile"},o.a.createElement("div",{className:"profile__avatar-button",onClick:t},o.a.createElement("img",{className:"profile__avatar",src:i.avatar,alt:""})),o.a.createElement("div",{className:"profile__info"},o.a.createElement("h1",{className:"profile__name"},i.name),o.a.createElement("button",{className:"profile__button-edit",type:"button",onClick:a}),o.a.createElement("p",{className:"profile__profession"},i.about)),o.a.createElement("button",{className:"profile__button-add",type:"button",onClick:n})),o.a.createElement("section",{className:"elements"},o.a.createElement("ul",{className:"elements__list"},l.map((function(e){return o.a.createElement(h,{key:e._id,onCardClick:c,card:e,onCardLike:r,onCardDelete:s})})))))};var v=function(){return o.a.createElement("footer",{className:"footer"},o.a.createElement("p",{className:"footer__copyright"},"\xa9 2020 Mesto Russia"))};var E=function(e){var t=e.name,a=e.isOpen,n=e.onClose,c=e.title,r=e.children,s=e.onSubmit;return o.a.createElement("section",{className:"".concat(a?"popup popup_type_".concat(t," popup_opened"):"popup popup_type_".concat(t)),onMouseUp:function(e){e.target===e.currentTarget&&a&&n()}},o.a.createElement("div",{className:"popup__container"},o.a.createElement("button",{className:"popup__close",type:"button",onClick:n}),o.a.createElement("h2",{className:"popup__title"},c),o.a.createElement("form",{className:"popup__container_type_".concat(t),action:"#",name:"".concat(t),onSubmit:s,noValidate:!0},r)))},k=function(e){var t=e.isOpen,a=e.onClose,n=e.onUpdateUser,c=e.isLoading,r=o.a.useContext(f),s=o.a.useState(""),l=Object(p.a)(s,2),i=l[0],u=l[1],m=o.a.useState(""),d=Object(p.a)(m,2),_=d[0],h=d[1];return o.a.useEffect((function(){u(r.name||""),h(r.about||"")}),[r]),o.a.createElement(E,{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"redact",isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),n({name:i,about:_})}},o.a.createElement("label",{className:"popup__control"},o.a.createElement("input",{className:"popup__input popup__input_type_name",type:"text",name:"name",value:i,onChange:function(e){u(e.target.value)},placeholder:"\u0418\u043c\u044f",minLength:"2",maxLength:"20",pattern:"^[A-Za-z\u0410-\u042f\u0430-\u044f\u0401\u0451\\s\\D]+$",required:!0}),o.a.createElement("span",{className:"popup__error"})),o.a.createElement("label",{className:"popup__control"},o.a.createElement("input",{className:"popup__input popup__input_type_job",type:"text",name:"about",value:_,onChange:function(e){h(e.target.value)},placeholder:"\u0417\u0430\u043d\u044f\u0442\u0438\u0435",minLength:"2",maxLength:"200",pattern:"^[A-Za-z\u0410-\u042f\u0430-\u044f\u0401\u0451\\s\\D]+$",required:!0}),o.a.createElement("span",{className:"popup__error"})),o.a.createElement("input",{className:"popup__button popup__button_type_save",type:"submit",value:"".concat(c?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"),name:"submit"}))},C=function(e){var t=e.isOpen,a=e.onClose,n=e.onUpdateAvatar,c=e.isLoading,r=o.a.useRef(null);return o.a.createElement(E,{title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",name:"avatar",isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),n({avatar:r.current.value})}},o.a.createElement("div",{className:"popup_type_avatar"},o.a.createElement("label",{className:"popup__control"},o.a.createElement("input",{ref:r,className:"popup__input popup__input_type_avatar",type:"url",name:"avatar",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),o.a.createElement("span",{className:"popup__error"}))),o.a.createElement("input",{className:"popup__button popup__button_type_save",type:"submit",value:"".concat(c?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"),name:"submit"}))},N=function(e){var t=e.isOpen,a=e.onClose,n=e.onAddPlace,c=e.isLoading,r=o.a.useRef(null),s=o.a.useRef(null);return o.a.createElement(E,{title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",name:"add",isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),n({name:r.current.value,link:s.current.value})}},o.a.createElement("label",{className:"popup__control"},o.a.createElement("input",{ref:r,className:"popup__input popup__input_type_name",type:"text",name:"name",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"1",maxLength:"30",pattern:"^[A-Za-z\u0410-\u042f\u0430-\u044f\u0401\u0451\\s\\D]+$",required:!0}),o.a.createElement("span",{className:"popup__error"})),o.a.createElement("label",{className:"popup__control"},o.a.createElement("input",{ref:s,className:"popup__input popup__input_type_job",type:"url",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),o.a.createElement("span",{className:"popup__error"})),o.a.createElement("input",{className:"popup__button popup__button_type_save",type:"submit",value:"".concat(c?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"),name:"submit"}))},g=function(e){var t=e.card,a=e.onClose,n=e.isOpen,c=e.onCardDelete,r=e.isLoading;return o.a.createElement(E,{title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",name:"prevent",isOpen:n,onClose:a,onSubmit:function(e){e.preventDefault(),c(t)}},o.a.createElement("input",{className:"popup__button",type:"submit",name:"submit",value:"".concat(r?"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435...":"\u0414\u0430")}))},y=function(e){var t=e.card,a=e.isOpen,n=e.onClose;return o.a.createElement("section",{className:"".concat(a?"popup popup_type_img popup_opened":"popup popup_type_img"),onMouseUp:function(e){e.target===e.currentTarget&&n()}},o.a.createElement("div",{className:"popup__img-container"},o.a.createElement("button",{className:"popup__close",type:"button",onClick:n}),o.a.createElement("figure",{className:"popup__figure"},o.a.createElement("img",{className:"popup__image",src:null===t||void 0===t?void 0:t.link,alt:""}),o.a.createElement("figcaption",{className:"popup__caption"},null===t||void 0===t?void 0:t.name))))},j=a(9),O=a(10),U=new(function(){function e(t){var a=t.baseUrl,n=t.headers;Object(j.a)(this,e),this.baseUrl=a,this.headers=n}return Object(O.a)(e,[{key:"getUserInfo",value:function(){return fetch("".concat(this.baseUrl,"users/me"),{headers:this.headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"getCards",value:function(){return fetch("".concat(this.baseUrl,"cards"),{headers:this.headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"setUserInfo",value:function(e){return console.log(e),fetch("".concat(this.baseUrl,"users/me"),{method:"PATCH",headers:this.headers,body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"createCard",value:function(e){return fetch("".concat(this.baseUrl,"cards"),{method:"POST",headers:this.headers,body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this.baseUrl,"cards/").concat(e),{method:"DELETE",headers:this.headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"likeCard",value:function(e){return fetch("".concat(this.baseUrl,"cards/likes/").concat(e),{method:"PUT",headers:this.headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"dislikeCard",value:function(e){return fetch("".concat(this.baseUrl,"cards/likes/").concat(e),{method:"DELETE",headers:this.headers}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"setAvatar",value:function(e){return fetch("".concat(this.baseUrl,"users/me/avatar"),{method:"PATCH",headers:this.headers,body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-14/",headers:{authorization:"ccd33dbf-109f-4270-9c16-faebaa7150cb","Content-Type":"application/json"}}),L=function(){var e=o.a.useState(!1),t=Object(p.a)(e,2),a=t[0],n=t[1],c=o.a.useState(!1),r=Object(p.a)(c,2),l=r[0],m=r[1],d=o.a.useState(!1),h=Object(p.a)(d,2),E=h[0],j=h[1],O=o.a.useState(!1),L=Object(p.a)(O,2),S=L[0],P=L[1],x=o.a.useState(!1),A=Object(p.a)(x,2),D=A[0],w=A[1],T=o.a.useState(null),q=Object(p.a)(T,2),I=q[0],J=q[1],z=o.a.useState([]),M=Object(p.a)(z,2),R=M[0],Z=M[1],$=o.a.useState([]),H=Object(p.a)($,2),B=H[0],V=H[1],F=o.a.useState(!1),G=Object(p.a)(F,2),K=G[0],Q=G[1],W=function(){var e=Object(u.a)(i.a.mark((function e(){var t,a,n,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all([U.getUserInfo(),U.getCards()]);case 3:t=e.sent,a=Object(p.a)(t,2),n=a[0],o=a[1],V(o),Z(n),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log("".concat(e.t0));case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();o.a.useEffect((function(){W()}),[]);var X=function(){n(!1),m(!1),j(!1),P(!1),J(null),w(!1)},Y=function(e){"Escape"===e.key&&X()};o.a.useEffect((function(){return document.addEventListener("keydown",Y,!1),function(){document.removeEventListener("keydown",Y,!1)}}));return o.a.createElement("div",{className:"page"},o.a.createElement(f.Provider,{value:R},o.a.createElement(_,null),o.a.createElement(b,{onEditAvatar:function(){n(!0)},onEditProfile:function(){m(!0)},onAddPlace:function(){j(!0)},onCardClick:function(e){w(!0),J(e)},onCardLike:function(e){(e.likes.some((function(e){return e._id===R._id}))?U.dislikeCard(e._id):U.likeCard(e._id)).then((function(t){var a=B.map((function(a){return a._id===e._id?t:a}));V(a)})).catch((function(e){console.log("".concat(e))}))},onCardDelete:function(e){P(!0),J(e)},cards:B}),o.a.createElement(v,null),o.a.createElement(k,{isOpen:l,onClose:X,onUpdateUser:function(e){Q(!0),U.setUserInfo(e).then((function(e){Z(e),X()})).catch((function(e){console.log("".concat(e))})).finally((function(){Q(!1)}))},isLoading:K}),o.a.createElement(N,{isOpen:E,onClose:X,onAddPlace:function(e){Q(!0),U.createCard(e).then((function(e){V([].concat(Object(s.a)(B),[e])),X()})).catch((function(e){console.log("".concat(e))})).finally((function(){Q(!1)}))},isLoading:K}),o.a.createElement(C,{isOpen:a,onClose:X,onUpdateAvatar:function(e){Q(!0),U.setAvatar(e).then((function(e){Z(e),X()})).catch((function(e){console.log("".concat(e))})).finally((function(){Q(!1)}))},isLoading:K}),o.a.createElement(g,{isOpen:S,onClose:X,card:I,onCardDelete:function(e){Q(!0),U.deleteCard(e._id).then((function(){var t=B.filter((function(t){return t._id!==e._id}));V(t),X()})).catch((function(e){console.log("".concat(e))})).finally((function(){Q(!1)}))},isLoading:K}),o.a.createElement(y,{isOpen:D,onClose:X,card:I})))};r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(L,null)),document.getElementById("root"))},8:function(e,t,a){e.exports=a.p+"static/media/header-logo.855a8c98.svg"}},[[12,1,2]]]);
//# sourceMappingURL=main.5828f9e9.chunk.js.map