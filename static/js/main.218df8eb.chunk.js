(this["webpackJsonpreact-market"]=this["webpackJsonpreact-market"]||[]).push([[0],{140:function(e,t,a){},141:function(e,t,a){},142:function(e,t,a){},143:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(18),i=a.n(c),s=a(33),r=a(22),l=a(194),o=a(45),j=a(24),b=a(15),d=a(27),u=a(220),O=a(178),h=a(179),x=a(180),m=a(215),f=a(183),g=a(184),p=a(146),v=Object(n.createContext)({basket:[],setBasket:function(){}}),k=Object(n.createContext)({isLoginModal:!1,setIsLoginModal:function(){}}),y=Object(n.createContext)({isSignupModal:!1,setIsSignupModal:function(){}}),C=Object(n.createContext)({isOpen:!1,message:"",setSnackbar:function(){}}),N={"auth/invalid-email":"\u0412\u044b \u0432\u0432\u0435\u043b\u0438 \u043d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 Email.","auth/wrong-password":"\u0412\u044b \u0432\u0432\u0435\u043b\u0438 \u043d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c.","auth/user-not-found":"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441 \u0442\u0430\u043a\u0438\u043c Email \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d. \u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e, \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0431\u044b\u043b \u0443\u0434\u0430\u043b\u0435\u043d.","auth/weak-password":"\u041f\u0430\u0440\u043e\u043b\u044c \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u043d\u0435 \u043c\u0435\u043d\u0435\u0435 \u0447\u0435\u043c \u0438\u0437 6 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432.","auth/email-already-in-use":"\u0410\u0434\u0440\u0435\u0441 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u043e\u0439 \u043f\u043e\u0447\u0442\u044b \u0443\u0436\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u0440\u0443\u0433\u043e\u0439 \u0443\u0447\u0435\u0442\u043d\u043e\u0439 \u0437\u0430\u043f\u0438\u0441\u044c\u044e.","auth/too-many-requests":"\u0414\u043e\u0441\u0442\u0443\u043f \u043a \u044d\u0442\u043e\u0439 \u0443\u0447\u0435\u0442\u043d\u043e\u0439 \u0437\u0430\u043f\u0438\u0441\u0438 \u0431\u044b\u043b \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d \u0438\u0437-\u0437\u0430 \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0430 \u043d\u0435\u0443\u0434\u0430\u0447\u043d\u044b\u0445 \u043f\u043e\u043f\u044b\u0442\u043e\u043a \u0432\u0445\u043e\u0434\u0430 \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0443. \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c \u043f\u043e\u043f\u044b\u0442\u043a\u0443 \u043f\u043e\u0437\u0436\u0435."},S=a(4),w=Object(p.a)({field:{marginBottom:"30px"}}),B=function(){var e=Object(n.useContext)(k),t=e.isLoginModal,a=e.setIsLoginModal,c=Object(n.useState)({email:"",password:""}),i=Object(b.a)(c,2),s=i[0],r=i[1],l=Object(n.useState)(""),p=Object(b.a)(l,2),v=p[0],y=p[1],C=w(),B=function(){return a(!1)},I=function(e){var t=e.target;return r((function(e){return Object(j.a)(Object(j.a)({},e),{},Object(o.a)({},t.id,t.value))}))};return Object(S.jsxs)(u.a,{open:t,onClose:B,align:"center",maxWidth:"xs","aria-labelledby":"form-dialog-title",children:[Object(S.jsx)(O.a,{id:"form-dialog-title",children:"\u0412\u0445\u043e\u0434"}),Object(S.jsxs)(h.a,{children:[Object(S.jsx)(x.a,{children:"\u0427\u0435\u0440\u0435\u0437 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0443\u044e \u043f\u043e\u0447\u0442\u0443"}),Object(S.jsx)(m.a,{margin:"dense",id:"email",label:"Email",type:"email",fullWidth:!0,color:"secondary",value:s.email,onChange:I,className:C.field,variant:"outlined"}),Object(S.jsx)(m.a,{margin:"dense",id:"password",label:"\u041f\u0430\u0440\u043e\u043b\u044c",type:"password",fullWidth:!0,color:"secondary",value:s.password,onChange:I,className:C.field,variant:"outlined"}),Object(S.jsx)(x.a,{color:"error",children:v})]}),Object(S.jsxs)(f.a,{children:[Object(S.jsx)(g.a,{onClick:B,variant:"outlined",children:"\u041e\u0442\u043c\u0435\u043d\u0430"}),Object(S.jsx)(g.a,{onClick:function(){var e=s.email,t=s.password;d.a.auth().signInWithEmailAndPassword(e,t).then((function(){B(),r({email:"",password:""}),y("")})).catch((function(e){var t;y(null!==(t=N[e.code])&&void 0!==t?t:e.message)}))},color:"secondary",variant:"outlined",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})},I=a(185),q=Object(I.a)({field:{marginBottom:"30px"}}),M=function(){var e=Object(n.useContext)(y),t=e.isSignupModal,a=e.setIsSignupModal,c=Object(n.useContext)(C).setSnackbar,i=Object(n.useState)({name:"",password:""}),s=Object(b.a)(i,2),r=s[0],l=s[1],p=Object(n.useState)(""),v=Object(b.a)(p,2),k=v[0],w=v[1],B=q(),I=function(){return a(!1)},M=function(e){var t=e.target;return l((function(e){return Object(j.a)(Object(j.a)({},e),{},Object(o.a)({},t.id,t.value))}))};return Object(S.jsxs)(u.a,{open:t,onClose:I,align:"center",maxWidth:"xs","aria-labelledby":"form-dialog-title",children:[Object(S.jsx)(O.a,{id:"form-dialog-title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(S.jsxs)(h.a,{children:[Object(S.jsx)(x.a,{children:"\u0427\u0435\u0440\u0435\u0437 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0443\u044e \u043f\u043e\u0447\u0442\u0443"}),Object(S.jsx)(m.a,{margin:"dense",id:"name",label:"Email",type:"email",fullWidth:!0,color:"secondary",value:r.name,onChange:M,className:B.field,variant:"outlined"}),Object(S.jsx)(m.a,{margin:"dense",id:"password",label:"\u041f\u0430\u0440\u043e\u043b\u044c",type:"password",fullWidth:!0,color:"secondary",value:r.password,onChange:M,className:B.field,variant:"outlined"})]}),Object(S.jsx)(x.a,{color:"error",children:k}),Object(S.jsxs)(f.a,{children:[Object(S.jsx)(g.a,{onClick:I,variant:"outlined",children:"\u041e\u0442\u043c\u0435\u043d\u0430"}),Object(S.jsx)(g.a,{onClick:function(){var e=r.name,t=r.password;d.a.auth().createUserWithEmailAndPassword(e,t).then((function(){I(),l({name:"",password:""}),w(""),c({isOpen:!0,message:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u043e\u0448\u043b\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e!"})})).catch((function(e){var t;w(null!==(t=N[e.code])&&void 0!==t?t:e.message)}))},color:"secondary",variant:"outlined",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]})]})},E=a(216),z=a(195),W=a(55),T=a(186),P=a(107),L=a(187),_=a(188),F=a(189),A=a(190),H=a(191),D=a(192),R=a(193),K=function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)},Y=function(e){return e.reduce((function(e,t){return e+t.quantity}),0)},J=function(e){return localStorage.setItem("BASKET",JSON.stringify(e))},U=Object(I.a)({root:{maxWidth:300},media:{height:280},btn:{marginRight:10,marginLeft:"auto"},textfield:{maxWidth:70}}),G=function(e){var t=e.title,a=e.price,c=e.description,i=e.img,s=Object(n.useContext)(v),r=s.basket,l=s.setBasket,o=Object(n.useContext)(C).setSnackbar,b=U(),d=r.find((function(e){return e.title===t})),u=function(){var e=null;d?e=r:(o({isOpen:!0,message:"\u0422\u043e\u0432\u0430\u0440 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443!"}),e=[].concat(Object(P.a)(r),[{title:t,price:a,description:c,img:i,quantity:1}])),l(e),J(e)};return Object(S.jsx)(T.a,{item:!0,xs:12,sm:6,md:4,xl:4,children:Object(S.jsxs)(L.a,{className:b.root,children:[Object(S.jsx)(_.a,{className:b.media,image:"".concat(i)}),Object(S.jsxs)(F.a,{children:[Object(S.jsx)(W.a,{gutterBottom:!0,variant:"h6",component:"h2",children:t}),Object(S.jsx)(W.a,{gutterBottom:!0,variant:"h5",component:"p",children:Object(S.jsxs)("b",{children:["\u0426\u0435\u043d\u0430: ",a," BYN"]})}),Object(S.jsx)(W.a,{variant:"body2",component:"p",children:Object(S.jsx)("b",{children:c})})]}),Object(S.jsx)(A.a,{children:d?Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(H.a,{size:"small","aria-label":"add",onClick:function(){var e=null;e=1===d.quantity?r.filter((function(e){return e.title!==t})):r.map((function(e){return e.title!==t?e:Object(j.a)(Object(j.a)({},e),{},{quantity:d.quantity-1})})),l(e),J(e)},children:Object(S.jsx)(D.a,{})}),Object(S.jsx)(m.a,{size:"small",variant:"outlined",value:d.quantity,className:b.textfield}),Object(S.jsx)(H.a,{size:"small","aria-label":"add",onClick:function(){var e=r.map((function(e){return e.title!==t?e:Object(j.a)(Object(j.a)({},e),{},{quantity:e.quantity+1})}));l(e),J(e)},children:Object(S.jsx)(R.a,{})}),Object(S.jsx)(g.a,{size:"large",disabled:!0,variant:"contained",className:b.btn,onClick:u,children:"\u041a\u0443\u043f\u0438\u0442\u044c"})]}):Object(S.jsx)(g.a,{size:"large",variant:"contained",color:"secondary",className:b.btn,onClick:u,children:"\u041a\u0443\u043f\u0438\u0442\u044c"})})]})})},V=function(e){var t=e.goods,a=e.title;return Object(S.jsxs)(l.a,{children:[Object(S.jsx)(W.a,{variant:"h4",children:a}),Object(S.jsx)("br",{}),Object(S.jsx)(T.a,{container:!0,spacing:3,aling:"center",children:t.map((function(e){return Object(S.jsx)(G,{title:e.title,description:e.description,price:e.price,img:e.img},e.id)}))})]})},Q=Object(I.a)({container:{minHeight:"70vh",display:"flex",justifyContent:"center",alignItems:"center"}}),X=function(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),a=t[0],c=t[1],i=Q();return Object(n.useEffect)((function(){d.a.database().ref("darkside").on("value",(function(e){var t=e.val();a.length||c(t)}))}),[a]),Object(S.jsx)(E.a,{className:i.container,mt:5,children:a.length?Object(S.jsx)(V,{goods:a,title:"\u0422\u0430\u0431\u0430\u043a \u0434\u043b\u044f \u043a\u0430\u043b\u044c\u044f\u043d\u0430:"}):Object(S.jsx)(z.a,{color:"secondary"})})},Z=Object(I.a)({container:{minHeight:"70vh",display:"flex",justifyContent:"center",alignItems:"center"}}),$=function(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),a=t[0],c=t[1],i=Z();return Object(n.useEffect)((function(){d.a.database().ref("hookahs").on("value",(function(e){var t=e.val();a.length||c(t)}))}),[a]),Object(S.jsx)(E.a,{className:i.container,mt:5,children:a.length?Object(S.jsx)(V,{goods:a,title:"\u041a\u0430\u043b\u044c\u044f\u043d\u044b:"}):Object(S.jsx)(z.a,{color:"secondary"})})},ee=Object(I.a)({container:{minHeight:"70vh",display:"flex",justifyContent:"center",alignItems:"center"}}),te=function(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),a=t[0],c=t[1],i=ee();return Object(n.useEffect)((function(){d.a.database().ref("coal").on("value",(function(e){var t=e.val();a.length||c(t)}))}),[a]),Object(S.jsx)(E.a,{className:i.container,mt:5,children:a.length?Object(S.jsx)(V,{goods:a,title:"\u0423\u0433\u043e\u043b\u044c \u0434\u043b\u044f \u043a\u0430\u043b\u044c\u044f\u043d\u0430:"}):Object(S.jsx)(z.a,{color:"secondary"})})},ae=a(197),ne=a(198),ce=a(217),ie=a(199),se=a(200),re=a(201),le=a(103),oe=a.n(le),je=a(79),be=a(108),de=a(196),ue=a(101),Oe=a.n(ue),he=function(){var e,t=Object(n.useState)(null),a=Object(b.a)(t,2),c=a[0],i=a[1],s=Object(je.a)(d.a.auth()),r=Object(b.a)(s,1)[0];return Object(S.jsxs)("div",{children:[Object(S.jsxs)(g.a,{"aria-controls":"user-menu","aria-haspopup":"true",onClick:function(e){return i(e.currentTarget)},children:[null!==(e=r.name)&&void 0!==e?e:r.email,Object(S.jsx)(Oe.a,{fontSize:"large"})]}),Object(S.jsx)(be.a,{id:"user-menu",anchorEl:c,keepMounted:!0,open:Boolean(c),onClose:function(){return i(null)},children:Object(S.jsx)(de.a,{onClick:function(){return d.a.auth().signOut()},children:"\u0412\u044b\u0439\u0442\u0438"})})]})},xe=Object(I.a)({login:{marginRight:5},basket:{marginRight:20}}),me={"/":1,"/tobaco":2,"/hookahs":3,"/coal":4},fe=function(){var e=Object(n.useState)(1),t=Object(b.a)(e,2),a=t[0],c=t[1],i=Object(n.useContext)(k).setIsLoginModal,l=Object(n.useContext)(y).setIsSignupModal,o=Object(n.useContext)(v).basket,j=Object(je.a)(d.a.auth()),u=Object(b.a)(j,1)[0],O=xe(),h=Object(r.f)();return Object(n.useEffect)((function(){var e=h.location.pathname;c(me[e])}),[h]),Object(S.jsx)(ae.a,{position:"sticky",children:Object(S.jsxs)(ne.a,{children:[Object(S.jsx)(E.a,{mr:2,flexGrow:1,children:Object(S.jsx)(W.a,{variant:"h6",children:"HOOKAH MARKET"})}),Object(S.jsx)(E.a,{flexGrow:10,children:Object(S.jsxs)(ce.a,{value:a,onChange:function(e,t){return c(t)},children:[Object(S.jsx)(ie.a,{value:1,label:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f",component:s.b,to:"/"}),Object(S.jsx)(ie.a,{value:2,label:"\u0422\u0430\u0431\u0430\u043a",component:s.b,to:"/tobaco"}),Object(S.jsx)(ie.a,{value:3,label:"\u041a\u0430\u043b\u044c\u044f\u043d\u044b",component:s.b,to:"/hookahs"}),Object(S.jsx)(ie.a,{value:4,label:"\u0423\u0433\u043e\u043b\u044c",component:s.b,to:"/coal"})]})}),Object(S.jsxs)(W.a,{children:[K(o)," BYN"]}),Object(S.jsx)(se.a,{className:O.basket,component:s.b,to:"/basket",children:Object(S.jsx)(re.a,{color:"error",badgeContent:Y(o),children:Object(S.jsx)(oe.a,{})})}),u?Object(S.jsx)(he,{}):Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(g.a,{className:O.login,variant:"outlined",onClick:function(){return i(!0)},children:"\u0412\u043e\u0439\u0442\u0438"}),Object(S.jsx)(g.a,{variant:"outlined",color:"secondary",onClick:function(){return l(!0)},children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})]})]})})},ge=a(221),pe=a(219),ve=function(){var e=Object(n.useContext)(C),t=e.snackbar,a=e.setSnackbar;return Object(S.jsx)(ge.a,{anchorOrigin:{vertical:"bottom",horizontal:"right"},open:t.isOpen,autoHideDuration:3e3,onClose:function(e,t){"clickaway"!==t&&a({isOpen:!1,message:""})},children:Object(S.jsx)(pe.a,{severity:"success",variant:"filled",children:t.message})})},ke=a(202),ye=a(110),Ce=a(203),Ne=a(204),Se=a(205),we=a(206),Be=a(207),Ie=a(208),qe=a(90),Me=a.n(qe),Ee=a(104),ze=Object(p.a)({field:{marginBottom:"30px"}}),We=function(e){var t=e.open,a=e.setOpen,c=Object(n.useState)(""),i=Object(b.a)(c,2),s=i[0],r=i[1],l=Object(n.useState)({name:"",phone:""}),p=Object(b.a)(l,2),k=p[0],y=p[1],N=Object(n.useContext)(v),w=N.basket,B=N.setBasket,I=Object(n.useContext)(C).setSnackbar,q=ze(),M=function(){var e=Object(Ee.a)(Me.a.mark((function e(){return Me.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d.a.firestore().collection("orders").add(w.reduce((function(e,t){return Object(j.a)(Object(j.a)({},e),{},Object(o.a)({},t.title,t.quantity))}),{"0Name":k.name,"0Phone":k.phone}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(e){var t=e.target;return y((function(e){return Object(j.a)(Object(j.a)({},e),{},Object(o.a)({},t.id,t.value))}))},z=function(){return a(!1)};return Object(S.jsx)("div",{children:Object(S.jsxs)(u.a,{open:t,onClose:z,"aria-labelledby":"form-dialog-title",maxWidth:"xs",children:[Object(S.jsx)(O.a,{id:"form-dialog-title",children:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u0435 \u0437\u0430\u043a\u0430\u0437\u0430"}),Object(S.jsxs)(h.a,{children:[Object(S.jsx)(x.a,{children:"\u0414\u043b\u044f \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u044f \u0437\u0430\u043a\u0430\u0437\u0430, \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435. \u0412 \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0435\u0435 \u0432\u0440\u0435\u043c\u044f \u0441 \u0432\u0430\u043c\u0438 \u0441\u0432\u044f\u0436\u0435\u0442\u0441\u044f \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440."}),Object(S.jsx)(m.a,{margin:"dense",label:"\u0418\u043c\u044f",id:"name",fullWidth:!0,color:"secondary",value:k.name,className:q.field,onChange:E}),Object(S.jsx)(m.a,{margin:"dense",label:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430",id:"phone",fullWidth:!0,color:"secondary",value:k.phone,className:q.field,onChange:E}),Object(S.jsx)(x.a,{color:"error",children:s})]}),Object(S.jsxs)(f.a,{children:[Object(S.jsx)(g.a,{onClick:z,color:"secondary",children:"\u041e\u0442\u043c\u0435\u043d\u0430"}),Object(S.jsx)(g.a,{onClick:function(){k.name&&k.phone?(a(!1),r(""),B([]),M(),I({isOpen:!0,message:"\u0417\u0430\u043a\u0430\u0437 \u043f\u0440\u0438\u043d\u044f\u0442! \u0412 \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0435\u0435 \u0432\u0440\u0435\u043c\u044f \u0441 \u0432\u0430\u043c\u0438 \u0441\u0432\u044f\u0436\u0435\u0442\u0441\u044f \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440!"})):r("\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0432\u0441\u0435 \u043f\u043e\u043b\u044f.")},color:"secondary",children:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c"})]})]})})},Te=Object(I.a)({img:{width:130,height:130},tablerow:{padding:20},goback:{color:"#0072BC",textDecoration:"underline",cursor:"pointer",marginBottom:20},totalCost:{padding:20},field:{marginRight:30},textfield:{maxWidth:50},title:{maxWidth:600},quantity:{minWidth:170},quantityButton:{margin:"0 10px"},container:{minHeight:"70vh"}}),Pe=function(){var e=Object(n.useContext)(v),t=e.basket,a=e.setBasket,c=Object(n.useState)(!1),i=Object(b.a)(c,2),s=i[0],l=i[1],o=Te(),d=Object(r.f)();return Object(S.jsxs)(E.a,{className:o.container,mt:5,children:[t.length?Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(W.a,{gutterBottom:!0,variant:"h6",onClick:function(){return d.goBack()},className:o.goback,children:"\u27f5 \u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043a \u043f\u043e\u043a\u0443\u043f\u043a\u0430\u043c"}),Object(S.jsx)(ke.a,{component:ye.a,children:Object(S.jsxs)(Ce.a,{size:"small","aria-label":"a dense table",children:[Object(S.jsx)(Ne.a,{children:Object(S.jsxs)(Se.a,{children:[Object(S.jsx)(we.a,{align:"center",children:"\u0424\u043e\u0442\u043e \u0442\u043e\u0432\u0430\u0440\u0430"}),Object(S.jsx)(we.a,{align:"left",children:"\u0422\u043e\u0432\u0430\u0440"}),Object(S.jsx)(we.a,{align:"center",children:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e"}),Object(S.jsx)(we.a,{align:"center",children:"\u0426\u0435\u043d\u0430 \u0437\u0430 1\u0448\u0442."}),Object(S.jsx)(we.a,{align:"center"})]})}),Object(S.jsx)(Be.a,{children:t.map((function(e){return Object(S.jsxs)(Se.a,{children:[Object(S.jsx)(we.a,{align:"center",children:Object(S.jsx)("img",{className:o.img,src:e.img,alt:"img"})}),Object(S.jsxs)(we.a,{align:"left",className:o.title,children:[Object(S.jsx)(W.a,{variant:"h6",children:e.title}),Object(S.jsx)(W.a,{children:e.description})]}),Object(S.jsxs)(we.a,{className:o.quantity,align:"center",children:[Object(S.jsx)(H.a,{size:"small",className:o.quantityButton,onClick:function(){return function(e){var n=e.title,c=e.quantity,i=t.map((function(e){return e.title!==n?e:Object(j.a)(Object(j.a)({},e),{},{quantity:c-1})}));a((function(e){return 0===c?e:i})),J(i)}(e)},children:Object(S.jsx)(D.a,{})}),Object(S.jsx)(m.a,{size:"small",variant:"outlined",value:e.quantity,className:o.textfield}),Object(S.jsx)(H.a,{size:"small",className:o.quantityButton,onClick:function(){return function(e){var n=e.title,c=e.quantity,i=t.map((function(e){return e.title!==n?e:Object(j.a)(Object(j.a)({},e),{},{quantity:c+1})}));a(i),J(i)}(e)},children:Object(S.jsx)(R.a,{})})]}),Object(S.jsxs)(we.a,{align:"center",children:[e.price," BYN"]}),Object(S.jsx)(we.a,{align:"center",children:Object(S.jsx)(se.a,{onClick:function(){return function(e){var n=e.title,c=t.filter((function(e){return e.title!==n}));a(c),J(c)}(e)},children:Object(S.jsx)(Ie.a,{})})})]},e.title)}))})]})}),Object(S.jsxs)(W.a,{variant:"h5",align:"right",className:o.totalCost,children:["\u041e\u0431\u0449\u0430\u044f \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c:",Object(S.jsxs)("b",{children:[K(t)," BYN"]})]}),Object(S.jsx)(E.a,{align:"right",mb:5,children:Object(S.jsx)(g.a,{variant:"contained",color:"secondary",onClick:function(){l(!0)},children:"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437"})})]}):Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(W.a,{gutterBottom:!0,variant:"h6",component:"h2",children:"\u0412\u0430\u0448\u0430 \u043a\u043e\u0440\u0438\u0437\u043d\u0430 \u043f\u0443\u0441\u0442\u0430"}),Object(S.jsx)(W.a,{gutterBottom:!0,variant:"h6",onClick:function(){return d.goBack()},className:o.goback,children:"\u27f5 \u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043a \u043f\u043e\u043a\u0443\u043f\u043a\u0430\u043c"})]}),Object(S.jsx)(We,{open:s,setOpen:l})]})},Le=a(209),_e=a(210),Fe=a(211),Ae=Object(p.a)({link:{marginRight:20},text:{marginBottom:20}}),He=function(){var e=Ae();return Object(S.jsx)("footer",{style:{boxShadow:"0px 1px 10px 0px rgb(0 0 0 / 25%)"},children:Object(S.jsxs)(E.a,{mt:5,padding:3,align:"center",children:[Object(S.jsx)(W.a,{children:"Material UI React Market \xa9 2021"}),Object(S.jsx)("br",{}),Object(S.jsx)(W.a,{className:e.text,children:"Developed by Daineko Vitaly. Contacts: +375 (25) 706-69-65"}),Object(S.jsx)(Le.a,{color:"secondary",className:e.link,href:"https://www.linkedin.com/in/vitaly-daineko/",children:Object(S.jsx)(_e.a,{})}),Object(S.jsx)(Le.a,{color:"secondary",href:"tel: +375257066965",children:Object(S.jsx)(Fe.a,{})})]})})},De=a(182),Re=a(145),Ke=a(212),Ye=a(213),Je=a(65),Ue=a.n(Je),Ge=(a(140),a.p+"static/media/slider-1.dfde1ef5.jpg"),Ve=a.p+"static/media/slider-2.5824cd17.jpg",Qe=a.p+"static/media/slider-3.02b92995.jpg",Xe=a.p+"static/media/slider-4.1ac6711c.jpg",Ze=a.p+"static/media/slider-5.fcbff4d1.jpg",$e=a.p+"static/media/nextArrow.483b3c1e.svg",et=a.p+"static/media/prevArrow.edba4d15.svg",tt=[Ge,Ve,Qe,Xe,Ze],at=function(e){var t=e.autoplayTime,a=Object(n.useState)(0),c=Object(b.a)(a,2),i=c[0],s=c[1],r=function(){var e=i>=tt.length-1?0:i+1;s(e)},l=function(){var e=0===i?tt.length-1:i-1;s(e)};return Object(n.useEffect)((function(){var e=setTimeout((function(){return r()}),t);return function(){return clearTimeout(e)}}),[i,t]),Object(S.jsxs)("div",{className:"slider",children:[tt.map((function(e,t){return Object(S.jsx)("div",{className:"slider-item",style:{backgroundImage:"url(".concat(e,")"),marginLeft:0===t?"-".concat(700*i,"px"):0}},t)})),Object(S.jsx)("div",{className:"slider__button  slider__prev",onClick:l,onKeyDown:l,role:"button",tabIndex:0,children:Object(S.jsx)("img",{src:et,alt:"",className:"slider__button-item"})}),Object(S.jsx)("div",{className:"slider__button  slider__next",onClick:r,onKeyDown:r,role:"button",tabIndex:0,children:Object(S.jsx)("img",{src:$e,alt:"",className:"slider__button-item"})})]})};at.defaultProps={autoplayTime:4e3};var nt=at,ct=a.p+"static/media/tobaco.a96eec1c.jpg",it=a.p+"static/media/hookahs.7d986d74.jpg",st=a.p+"static/media/coal.2d701ca8.jpg",rt=(a(141),{tobaco:ct,hookahs:it,coal:st}),lt=function(e){var t=e.href,a=e.imageType;return Object(S.jsx)(s.b,{to:t,children:Object(S.jsx)("div",{className:"image",style:{backgroundImage:"url(".concat(rt[a],")")},children:Object(S.jsx)("div",{className:"filter"})})})},ot=Object(p.a)({title:{margin:"30px 0"},text:{marginBottom:30},marginBottom:{marginBottom:30}}),jt=function(){var e=ot();return Object(S.jsxs)(E.a,{mt:5,children:[Object(S.jsxs)(E.a,{display:"flex",justifyContent:"space-between",children:[Object(S.jsx)(nt,{}),Object(S.jsxs)(E.a,{children:[Object(S.jsx)(W.a,{variant:"h4",className:e.title,children:"\u041a\u0423\u041f\u0418\u0422\u042c \u041a\u0410\u041b\u042c\u042f\u041d \u0412 \u041c\u0418\u041d\u0421\u041a\u0415"}),Object(S.jsx)(W.a,{align:"justify",className:e.text,children:"\u0415\u0441\u043b\u0438 \u0432\u044b \u043d\u0435 \u0437\u043d\u0430\u0435\u0442\u0435, \u043a\u0430\u043a \u0440\u0430\u0441\u0441\u043b\u0430\u0431\u0438\u0442\u0441\u044f \u0432\u0435\u0447\u0435\u0440\u043e\u043c, \u0442\u043e \u043c\u044b \u043f\u0440\u0435\u0434\u043b\u0430\u0433\u0430\u0435\u043c \u0432\u0430\u043c \u043f\u043e\u0441\u0435\u0442\u0438\u0442\u044c \u043d\u0430\u0448 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442-\u043c\u0430\u0433\u0430\u0437\u0438\u043d \u043a\u0430\u043b\u044c\u044f\u043d\u043e\u0432 \u0438 \u043a\u0443\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u0441\u043c\u0435\u0441\u0435\u0439. \u0427\u0442\u043e \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043b\u0443\u0447\u0448\u0435, \u0447\u0435\u043c \u0430\u0440\u043e\u043c\u0430\u0442\u043d\u044b\u0435 \u043a\u043b\u0443\u0431\u044b \u0434\u044b\u043c\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043f\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0444\u0438\u043b\u044c\u0442\u0440\u0443\u044e\u0442\u0441\u044f \u0432 \u0447\u0430\u0448\u0435? \u041c\u044b \u044f\u0432\u043b\u044f\u0435\u043c\u0441\u044f \u043e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u043c\u0438 \u0434\u0438\u043b\u0435\u0440\u0430\u043c\u0438 \u0432 \u0411\u0435\u043b\u0430\u0440\u0443\u0441\u0438 \u043f\u043e \u043f\u0440\u043e\u0434\u0430\u0436\u0435 \u0442\u043e\u0432\u0430\u0440\u043e\u0432 \u0432 \u0442\u0430\u0431\u0430\u0447\u043d\u043e\u0439 \u043e\u0442\u0440\u0430\u0441\u043b\u0438. \u041d\u0430\u0448 \u043c\u0430\u0433\u0430\u0437\u0438\u043d \u043a\u0430\u043b\u044c\u044f\u043d\u043e\u0432 \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u044f\u0435\u0442 \u043f\u0440\u043e\u0434\u0430\u0436\u0443 \u0438 \u0430\u0440\u0435\u043d\u0434\u0443 \u043a\u0430\u043b\u044c\u044f\u043d\u043e\u0432 \u0432 \u041c\u0438\u043d\u0441\u043a\u0435 \u0441 \u0442\u043e\u043b\u044c\u043a\u043e \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u0446\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0439 \u043f\u0440\u043e\u0434\u0443\u043a\u0446\u0438\u0435\u0439, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043f\u043e\u0440\u0430\u0434\u0443\u0435\u0442 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u043d\u0438\u0437\u043a\u043e\u0439 \u0446\u0435\u043d\u043e\u0439 \u0438 \u043b\u0443\u0447\u0448\u0438\u043c \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u043e\u043c."}),Object(S.jsx)(W.a,{align:"justify",children:"\u041a\u0443\u043f\u0438\u0442\u044c \u043a\u0430\u043b\u044c\u044f\u043d \u0432 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442-\u043c\u0430\u0433\u0430\u0437\u0438\u043d\u0435 \u0432\u044b\u0433\u043e\u0434\u043d\u043e \u0438 \u043f\u0440\u043e\u0441\u0442\u043e. \u041e\u0444\u043e\u0440\u043c\u043b\u044f\u0439\u0442\u0435 \u0437\u0430\u043a\u0430\u0437 \u0447\u0435\u0440\u0435\u0437 \u043a\u043e\u0440\u0437\u0438\u043d\u0443 \u043b\u0438\u0431\u043e \u043f\u043e \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u043e\u043c\u0443 \u043d\u043e\u043c\u0435\u0440\u0443 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430. \u0412\u0430\u0441 \u0432\u0441\u0435\u0433\u0434\u0430 \u043f\u0440\u043e\u043a\u043e\u043d\u0441\u0443\u043b\u044c\u0442\u0438\u0440\u0443\u0435\u0442 \u043e\u043f\u044b\u0442\u043d\u044b\u0439 \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a \u0438 \u043f\u043e\u0434\u0441\u043a\u0430\u0436\u0435\u0442, \u043a\u0430\u043a\u043e\u0435 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e \u043f\u043e\u0434\u043e\u0439\u0434\u0435\u0442 \u043f\u043e\u0434 \u0432\u0430\u0448\u0438 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b. \u0422\u0430\u043a\u0436\u0435 \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043e\u0431\u0440\u0430\u0442\u0438\u0442\u044c\u0441\u044f \u0437\u0430 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043a \u043d\u0430\u043c, \u0435\u0441\u043b\u0438 \u0432\u043e\u0437\u043d\u0438\u043a\u043d\u0443\u0442 \u0432\u043e\u043f\u0440\u043e\u0441\u044b \u0438 \u0442\u0440\u0443\u0434\u043d\u043e\u0441\u0442\u0438. \u041c\u044b \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u043c \u0434\u043b\u044f \u0432\u0430\u0441 \u0438 \u0434\u0430\u0440\u0438\u043c \u043f\u0440\u0438\u044f\u0442\u043d\u0443\u044e \u0430\u0442\u043c\u043e\u0441\u0444\u0435\u0440\u0443 \u0432 \u043b\u044e\u0431\u043e\u043c \u043c\u0435\u0441\u0442\u0435."})]})]}),Object(S.jsx)(W.a,{variant:"h4",className:e.marginBottom,children:"\u041f\u041e\u0427\u0415\u041c\u0423 \u0421\u0422\u041e\u0418\u0422 \u0412\u042b\u0411\u0420\u0410\u0422\u042c \u041d\u0410\u0421?"}),Object(S.jsxs)(De.a,{className:e.marginBottom,children:[Object(S.jsxs)(Re.a,{children:[Object(S.jsx)(Ke.a,{children:Object(S.jsx)(Ue.a,{fontSize:"small"})}),Object(S.jsxs)(Ye.a,{children:["\u041d\u0430\u0448\u0430 \u0444\u0438\u0440\u043c\u0430 ",Object(S.jsx)("b",{children:"9 \u043b\u0435\u0442 \u043d\u0430 \u0440\u044b\u043d\u043a\u0435"})," \u0442\u0430\u0431\u0430\u0447\u043d\u044b\u0445 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u043d\u0430\u043c \u0434\u043e\u0432\u0435\u0440\u044f\u044e\u0442. \u0421\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442\u044b \u043a\u043e\u043b\u043b-\u0446\u0435\u043d\u0442\u0440\u0430 \u043e\u0442\u043b\u0438\u0447\u043d\u043e \u0440\u0430\u0437\u0431\u0438\u0440\u0430\u044e\u0442\u0441\u044f \u0432 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0445 \u0442\u043e\u0432\u0430\u0440\u0430\u0445 \u0438 \u0437\u043d\u0430\u044e\u0442 \u0432\u0441\u0435 \u0442\u043e\u043d\u043a\u043e\u0441\u0442\u0438 \u0434\u0430\u043d\u043d\u043e\u0439 \u043f\u0440\u043e\u0434\u0443\u043a\u0446\u0438\u0438. \u041c\u044b \u043f\u0440\u0435\u0434\u043b\u0430\u0433\u0430\u0435\u043c \u043d\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u0440\u0438\u043e\u0431\u0440\u0435\u0442\u0435\u043d\u0438\u0435 \u043a\u0443\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0433\u043e \u0430\u043f\u043f\u0430\u0440\u0430\u0442\u0430, \u043d\u043e \u0438 \u0430\u0440\u0435\u043d\u0434\u0443. \u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430 \u043a\u0430\u043b\u044c\u044f\u043d\u0430 \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0432 \u0443\u0434\u043e\u0431\u043d\u043e\u0435 \u0434\u043b\u044f \u0432\u0430\u0441 \u0432\u0440\u0435\u043c\u044f."]})]}),Object(S.jsxs)(Re.a,{children:[Object(S.jsx)(Ke.a,{children:Object(S.jsx)(Ue.a,{fontSize:"small"})}),Object(S.jsxs)(Ye.a,{children:[Object(S.jsx)("b",{children:"\u041c\u044b \u0431\u0435\u0440\u0435\u0436\u0435\u043c \u0441\u0432\u043e\u044e \u0440\u0435\u043f\u0443\u0442\u0430\u0446\u0438\u044e."})," \u0423 \u043d\u0430\u0441 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u044b \u043f\u0440\u043e\u0432\u0435\u0440\u0435\u043d\u043d\u044b\u0435 \u0431\u0440\u0435\u043d\u0434\u044b \u0441\u043c\u0435\u0441\u0435\u0439, \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432 \u0438 \u0438\u0445 \u0441\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u044e\u0449\u0438\u0445. \u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043a\u0443\u043f\u0438\u0442\u044c \u0443 \u043d\u0430\u0441 \u043f\u0440\u043e\u0434\u0443\u043a\u0446\u0438\u044e \u0444\u0438\u0440\u043c\u044b Soft Smoke, Pandora, MattPear \u0438 \u0434\u0440. \u041c\u044b \u043f\u0440\u0435\u0434\u043b\u0430\u0433\u0430\u0435\u043c \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0435 \u043a\u043e\u043c\u043f\u043b\u0435\u043a\u0442\u0443\u044e\u0449\u0438\u0435 \u0434\u043b\u044f hookah, \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u0437\u0430\u043c\u0435\u043d\u0430 \u043d\u0443\u0436\u043d\u044b\u0445 \u0432\u0430\u043c \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u043d\u0435 \u0431\u0443\u0434\u0435\u0442 \u0432 \u0442\u044f\u0433\u043e\u0441\u0442\u044c. \u041d\u0430\u0448 \u043c\u0430\u0433\u0430\u0437\u0438\u043d \u043b\u044e\u0431\u044f\u0442 \u043f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u0438 \u0438 \u043e\u0441\u0442\u0430\u0432\u043b\u044f\u044e\u0442 \u043c\u043d\u043e\u0433\u043e \u043f\u043e\u043b\u043e\u0436\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u043e\u0442\u0437\u044b\u0432\u043e\u0432. \u041c\u044b \u0441\u043e\u0432\u0435\u0440\u0448\u0435\u043d\u0441\u0442\u0432\u0443\u0435\u043c\u0441\u044f \u0438 \u043f\u0440\u0438\u0441\u043b\u0443\u0448\u0438\u0432\u0430\u0435\u043c\u0441\u044f \u043a \u043f\u043e\u0436\u0435\u043b\u0430\u043d\u0438\u044f\u043c \u0438 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u044f\u043c \u043f\u043e\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043b\u0435\u0439."]})]}),Object(S.jsxs)(Re.a,{children:[Object(S.jsx)(Ke.a,{children:Object(S.jsx)(Ue.a,{fontSize:"small"})}),Object(S.jsxs)(Ye.a,{children:[Object(S.jsx)("b",{children:"\u0421\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c."})," \u0423 \u043d\u0430\u0441 \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0435 \u043d\u0430\u0446\u0435\u043d\u043a\u0438 \u043d\u0430 \u0442\u043e\u0432\u0430\u0440\u044b. \u041d\u0430\u0448\u0438 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442\u044b \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u044e\u0442 \u0441\u0430\u043c\u044b\u0435 \u043f\u0440\u0438\u044f\u0442\u043d\u044b\u0435 \u0446\u0435\u043d\u043d\u0438\u043a\u0438 \u043d\u0430 \u043a\u0443\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043f\u0440\u0438\u0441\u043f\u043e\u0441\u043e\u0431\u043b\u0435\u043d\u0438\u044f, \u0447\u0430\u0448\u0438, \u0448\u043b\u0430\u043d\u0433\u0438 \u0438 \u043a\u043e\u043b\u0431\u044b, \u0447\u0442\u043e\u0431\u044b \u0432\u044b \u043c\u043e\u0433\u043b\u0438 \u043d\u0430\u0441\u043b\u0430\u0434\u0438\u0442\u044c\u0441\u044f \u0441\u043b\u0430\u0434\u043a\u0438\u043c \u0434\u044b\u043c\u043e\u043c \u0434\u043e\u043c\u0430 \u043b\u0438\u0431\u043e \u043d\u0430 \u043f\u0440\u0438\u0440\u043e\u0434\u0435 \u0432 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438 \u0434\u0440\u0443\u0437\u0435\u0439."]})]}),Object(S.jsxs)(Re.a,{children:[Object(S.jsx)(Ke.a,{children:Object(S.jsx)(Ue.a,{fontSize:"small"})}),Object(S.jsxs)(Ye.a,{children:[Object(S.jsx)("b",{children:"\u041c\u044b \u0440\u0430\u0441\u0442\u0435\u043c."})," \u041a\u0430\u0436\u0434\u044b\u0439 \u0434\u0435\u043d\u044c Hookah Market \u0441\u043b\u0435\u0434\u0438\u0442 \u0437\u0430 \u043d\u043e\u0432\u0438\u043d\u043a\u0430\u043c\u0438, \u0438 \u0441\u0430\u043c\u044b\u0435 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u044b\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u0432 \u043d\u0430\u0448 \u043a\u0430\u0442\u0430\u043b\u043e\u0433. \u0412 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f\u0445 \u0432\u044b \u0441\u043c\u043e\u0436\u0435\u0442\u0435 \u043d\u0430\u0439\u0442\u0438 \u043a\u0430\u043a \u043d\u0435\u0443\u0441\u0442\u0430\u0440\u0435\u0432\u0430\u044e\u0449\u0443\u044e \u043a\u043b\u0430\u0441\u0441\u0438\u043a\u0443, \u0442\u0430\u043a \u0438 \u0441\u0430\u043c\u044b\u0435 \u0441\u0432\u0435\u0436\u0438\u0435 \u043f\u0440\u0438\u0431\u043e\u0440\u044b."]})]})]}),Object(S.jsx)(W.a,{variant:"h4",className:e.marginBottom,children:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u043f\u043e\u043a\u0443\u043f\u043a\u0430\u043c: "}),Object(S.jsxs)(T.a,{container:!0,children:[Object(S.jsx)(T.a,{item:!0,xs:12,sm:6,md:4,xl:4,children:Object(S.jsx)(lt,{href:"tobaco",imageType:"tobaco"})}),Object(S.jsx)(T.a,{item:!0,xs:12,sm:6,md:4,xl:4,children:Object(S.jsx)(lt,{href:"hookahs",imageType:"hookahs"})}),Object(S.jsx)(T.a,{item:!0,xs:12,sm:6,md:4,xl:4,children:Object(S.jsx)(lt,{href:"coal",imageType:"coal"})})]})]})},bt=Object(r.g)((function(e){var t=e.history;return Object(n.useEffect)((function(){var e=t.listen((function(){window.scrollTo(0,0)}));return function(){e()}}),[t]),null})),dt=function(){return Object(S.jsxs)(s.a,{children:[Object(S.jsx)(fe,{}),Object(S.jsx)(B,{}),Object(S.jsx)(M,{}),Object(S.jsxs)(l.a,{mt:2,children:[Object(S.jsx)(bt,{}),Object(S.jsxs)(r.c,{children:[Object(S.jsx)(r.a,{exact:!0,path:"/",children:Object(S.jsx)(jt,{})}),Object(S.jsx)(r.a,{path:"/tobaco",children:Object(S.jsx)(X,{})}),Object(S.jsx)(r.a,{path:"/hookahs",children:Object(S.jsx)($,{})}),Object(S.jsx)(r.a,{path:"/coal",children:Object(S.jsx)(te,{})}),Object(S.jsx)(r.a,{path:"/basket",children:Object(S.jsx)(Pe,{})})]})]}),Object(S.jsx)(ve,{}),Object(S.jsx)(He,{})]})},ut=(a(142),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,223)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),i(e),s(e)}))}),Ot=a(105),ht=a(106),xt=a(214);Ot.a.initializeApp({apiKey:"AIzaSyC4V6oY-FwQPwUFXg4gH1oF0hEZlo0swYI",authDomain:"react-market-77b28.firebaseapp.com",databaseURL:"https://react-market-77b28-default-rtdb.firebaseio.com",projectId:"react-market-77b28",storageBucket:"react-market-77b28.appspot.com",messagingSenderId:"222984562458",appId:"1:222984562458:web:6349cdf0c6083524762ea3"});var mt=Object(ht.a)({palette:{primary:{main:"#f5f5f5"},secondary:{main:"#0072BC"}},spacing:8}),ft=function(e){var t=e.children,a=Object(n.useState)([]),c=Object(b.a)(a,2),i=c[0],s=c[1],r=Object(n.useState)(!1),l=Object(b.a)(r,2),o=l[0],j=l[1],d=Object(n.useState)(!1),u=Object(b.a)(d,2),O=u[0],h=u[1],x=Object(n.useState)({isOpen:!1,message:""}),m=Object(b.a)(x,2),f=m[0],g=m[1];return Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("BASKET"));s(e)}),[]),Object(S.jsx)(n.StrictMode,{children:Object(S.jsx)(xt.a,{theme:mt,children:Object(S.jsx)(v.Provider,{value:{basket:i,setBasket:s},children:Object(S.jsx)(k.Provider,{value:{isLoginModal:o,setIsLoginModal:j},children:Object(S.jsx)(y.Provider,{value:{isSignupModal:O,setIsSignupModal:h},children:Object(S.jsx)(C.Provider,{value:{snackbar:f,setSnackbar:g},children:t})})})})})})};i.a.render(Object(S.jsx)(ft,{children:Object(S.jsx)(dt,{})}),document.getElementById("root")),ut()}},[[143,1,2]]]);
//# sourceMappingURL=main.218df8eb.chunk.js.map