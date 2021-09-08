(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{120:function(e,t,a){e.exports={avatar:"Avatar_avatar__1FHDc"}},121:function(e,t,a){e.exports={dialog:"DialogItem_dialog__3uv5c",img:"DialogItem_img__3HuXi"}},13:function(e,t,a){e.exports={info:"Info_info__3kEn2",headers:"Info_headers__4bmSQ",name:"Info_name__3-qt0",span:"Info_span__17ZpI",img:"Info_img__2atBj"}},131:function(e,t,a){e.exports={loader:"Preloader_loader__haW2q"}},132:function(e,t,a){e.exports={header:"Settings_header__2cmnS"}},133:function(e,t,a){e.exports={header:"Music_header__11aty"}},134:function(e,t,a){e.exports={header:"Friends_header__22u1N"}},145:function(e,t,a){},26:function(e,t,a){e.exports={mainWrapper:"Users_mainWrapper__3_qWg",wrapper:"Users_wrapper__1dbSO",usersContainer:"Users_usersContainer__18COW",infoWrapper:"Users_infoWrapper__12dBL",name:"Users_name__34hDA",status:"Users_status__3x86G",avatarWrapper:"Users_avatarWrapper__1YN-Z",img:"Users_img__2Nmgj",btn:"Users_btn__1ls2h",selectedPage:"Users_selectedPage__3iIzX",pageButtons:"Users_pageButtons__3WFeB",pagination:"Users_pagination__1oS7Q"}},267:function(e,t,a){"use strict";a.r(t);var n=a(34),s=a.n(n),r=(a(145),a(4)),c=a(5),i=a(7),o=a(8),u=a(0),l=a.n(u),d=a(12),j=a(36),p=a.n(j),b=a(1),h=function(){return Object(b.jsxs)("nav",{className:p.a.nav,children:[Object(b.jsx)("div",{children:Object(b.jsx)(d.b,{to:"/profile",activeClassName:p.a.active,children:"Profile"})}),Object(b.jsx)("div",{children:Object(b.jsx)(d.b,{to:"/dialogs",activeClassName:p.a.active,children:"Messages"})}),Object(b.jsx)("div",{children:Object(b.jsx)(d.b,{to:"/users",activeClassName:p.a.active,children:"Find friends"})}),Object(b.jsx)("div",{children:Object(b.jsx)(d.b,{to:"/music",activeClassName:p.a.active,children:"Music"})}),Object(b.jsx)("div",{children:Object(b.jsx)(d.b,{to:"/friends",activeClassName:p.a.active,children:"Friends"})}),Object(b.jsx)("div",{children:Object(b.jsx)(d.b,{to:"/settings",activeClassName:p.a.active,children:"Settings"})})]})},m=a(3),O=a(28),g=a(120),f=a.n(g),x=["className","src","alt"],A=function(e){var t=e.className,a=e.src,n=e.alt,s=Object(O.a)(e,x),r="".concat(f.a.avatar," ").concat(t||"");return Object(b.jsx)("img",Object(m.a)({className:r,alt:n,src:a},s))},N=a(121),v=a.n(N),w=function(e){var t=e.name,a=e.id,n=e.image;return Object(b.jsxs)("div",{className:v.a.dialog,children:[Object(b.jsx)(A,{src:n}),Object(b.jsx)(d.b,{to:"/dialogs/".concat(a),children:t})]})},I=a(40),_=a.n(I),P=a(83),y=a.n(P),T=function(e){var t=e.text;return Object(b.jsx)("div",{className:y.a.messageWrapper,children:Object(b.jsx)("p",{className:y.a.message,children:t})})},S=a(84),E=a.n(S),M=["className","red"],D=function(e){var t=e.className,a=e.red,n=Object(O.a)(e,M),s="".concat(a?E.a.red:E.a.default," ").concat(t);return Object(b.jsx)("button",Object(m.a)({className:s},n))},C=a(19),W=a(27),G=a(20),R=a(66),B=a.n(R),F=function(e){var t=Object(C.c)(e),a=Object(G.a)(t,2),n=a[0],s=a[1],r=e.label,c=e.className;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("label",{className:B.a.checkbox,htmlFor:e.name,children:r}),Object(b.jsx)("textarea",Object(m.a)(Object(m.a)({className:"".concat(B.a.textarea," ").concat(c)},n),e)),s.touched&&s.error?Object(b.jsx)("div",{className:B.a.error,children:s.error}):null]})},k=function(e){var t=e.updateNewMessage,a=e.addMessage;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(C.b,{initialValues:{message:""},onSubmit:function(e,n){var s=n.setSubmitting;(0,n.resetForm)(),s(!1),t(e.message),a()},validationSchema:W.b({message:W.c().min(1,"Must be at least 1 character").required("")}),children:Object(b.jsx)("div",{className:_.a.form,children:Object(b.jsxs)(C.a,{children:[Object(b.jsx)(F,{name:"message",placeholder:"Type your message..."}),Object(b.jsx)(D,{className:_.a.btn,type:"submit",children:"Submit"})]})})})})},U=a(16),Z=a(284),H={dialogs:[{id:Object(Z.a)(),name:"Ann",image:"https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"},{id:Object(Z.a)(),name:"Alex",image:"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"},{id:Object(Z.a)(),name:"Nick",image:"https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"},{id:Object(Z.a)(),name:"Max",image:"https://images.unsplash.com/photo-1623930154261-37f8b293c059?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"},{id:Object(Z.a)(),name:"Kate",image:"https://images.unsplash.com/photo-1587568787539-3f70370dd715?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"}],messages:[{id:Object(Z.a)(),text:"Hi"},{id:Object(Z.a)(),text:"How are you?"},{id:Object(Z.a)(),text:"Fine, thanks"}],newMessageText:""},L=a(14),V=a(9),Y=["isAuth"],z=function(e){return{isAuth:e.auth.isAuth}};function J(e){return Object(L.b)(z)((function(t){var a=t.isAuth,n=Object(O.a)(t,Y);return a?Object(b.jsx)(e,Object(m.a)({},n)):Object(b.jsx)(V.a,{to:"/login"})}))}var q=a(21),Q=Object(q.c)(Object(L.b)((function(e){return{data:e.messagePage,newMessageText:e.messagePage.newMessageText}}),{updateNewMessage:function(e){return{type:"UPDATE-NEW-MESSAGE-TEXT",payload:{newText:e}}},addMessage:function(){return{type:"ADD-MESSAGE"}}}),J)((function(e){var t=e.data,a=e.updateNewMessage,n=e.addMessage,s=t.dialogs.map((function(e){return Object(b.jsx)(w,{image:e.image,name:e.name,id:e.id},e.id)})),r=t.messages.map((function(e){return Object(b.jsx)(T,{text:e.text,id:e.id},e.id)}));return Object(b.jsxs)("div",{className:_.a.dialogs,children:[Object(b.jsx)("div",{className:_.a.items,children:s}),Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:_.a.messages,children:r}),Object(b.jsx)("div",{className:_.a.wrapperAddArea,children:Object(b.jsx)(k,{updateNewMessage:a,addMessage:n})})]})]})})),X=a(127),K=a.n(X).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"b108fd33-d977-4add-bda9-9da2037bdf7a"}}),$=function(e,t){return K.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},ee=function(){return K.get("auth/me").then((function(e){return e.data}))},te=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return K.post("auth/login",{email:e,password:t,rememberMe:a}).then((function(e){return e.data}))},ae=function(){return K.delete("auth/login").then((function(e){return e.data}))},ne=function(e){return K.get("profile/"+e).then((function(e){return e.data}))},se=function(e){return K.get("profile/status/"+e).then((function(e){return e.data}))},re=function(e){return K.put("profile/status/",{status:e}).then((function(e){return e.data}))},ce=function(e){return K.post("follow/".concat(e)).then((function(e){return e.data}))},ie=function(e){return K.delete("follow/".concat(e)).then((function(e){return e.data}))},oe={users:[],pageSize:8,totalUsersCout:0,currentPage:1,isFetching:!0,followingInProgress:[]},ue=function(e){return{type:"TOGGLE_IS_FETCHING",payload:{isFetching:e}}},le=function(e,t){return{type:"TOGGLE_FOLLOWING_PROGRESS",payload:{isFetching:e,userId:t}}},de=a(26),je=a.n(de),pe=a(283),be=function(e){for(var t=e.totalUsersCout,a=e.pageSize,n=e.onChangePageHandler,s=e.users,r=e.follow,c=e.unfollow,i=e.followingInProgress,o=Math.ceil(t/a),u=[],l=1;l<=o;l++)u.push(l);return Object(b.jsxs)("div",{className:je.a.mainWrapper,children:[Object(b.jsx)(pe.a,{className:je.a.pagination,count:o,shape:"rounded",hidePrevButton:!0,hideNextButton:!0,onChange:function(e){var t=e.currentTarget.textContent;n(+t)}}),Object(b.jsx)("div",{className:je.a.usersContainer,children:s.map((function(e){return Object(b.jsxs)("div",{className:je.a.wrapper,children:[Object(b.jsxs)("span",{className:je.a.avatarWrapper,children:[Object(b.jsx)(d.b,{to:"/profile/"+e.id,children:Object(b.jsx)(A,{src:null!=e.photos.small?e.photos.small:"https://image.flaticon.com/icons/png/512/1077/1077275.png",className:je.a.img})}),Object(b.jsx)("div",{children:e.followed?Object(b.jsx)(D,{disabled:i.some((function(t){return t===e.id})),onClick:function(){c(e.id)},className:je.a.btn,children:"unfollow"}):Object(b.jsx)(D,{disabled:i.some((function(t){return t===e.id})),onClick:function(){r(e.id)},className:je.a.btn,children:"follow"})})]}),Object(b.jsxs)("span",{className:je.a.infoWrapper,children:[Object(b.jsx)("p",{className:je.a.name,children:e.name}),Object(b.jsx)("p",{className:je.a.status,children:e.status})]})]},e.id)}))})]})},he=a(131),me=a.n(he),Oe=a.p+"static/media/three-dots.b98a8c76.svg",ge=function(){return Object(b.jsx)("img",{className:me.a.loader,src:Oe,alt:"loading"})},fe=function(e){return e.usersPage.users},xe=function(e){return e.usersPage.pageSize},Ae=function(e){return e.usersPage.totalUsersCout},Ne=function(e){return e.usersPage.currentPage},ve=function(e){return e.usersPage.isFetching},we=function(e){return e.usersPage.followingInProgress},Ie=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).onChangePageHandler=function(t){e.props.getUsers(t,e.props.pageSize),e.props.setCurrentPage(t)},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(b.jsxs)(u.Fragment,{children:[this.props.isFetching?Object(b.jsx)(ge,{}):null,Object(b.jsx)(be,Object(m.a)(Object(m.a)({},this.props),{},{onChangePageHandler:this.onChangePageHandler}))]})}}]),a}(u.Component),_e=Object(q.c)(Object(L.b)((function(e){return{users:fe(e),pageSize:xe(e),totalUsersCout:Ae(e),currentPage:Ne(e),isFetching:ve(e),followingInProgress:we(e)}}),{follow:function(e){return function(t){t(le(!0,e)),ce(e).then((function(a){0===a.resultCode&&t({type:"FOLLOW",payload:{userId:e}}),t(le(!1,e))}))}},unfollow:function(e){return function(t){t(le(!0,e)),ie(e).then((function(a){0===a.resultCode&&t({type:"UNFOLLOW",payload:{userId:e}}),t(le(!1,e))}))}},setCurrentPage:function(e){return{type:"SET_CURRENT_PAGE",payload:{currentPage:e}}},getUsers:function(e,t){return function(a){a(ue(!0)),$(e,t).then((function(e){a(ue(!1)),a({type:"SET_USERS",payload:{users:e.items}}),a({type:"SET_TOTAL_COUNT",payload:{totalCount:e.totalCount}})}))}}}))(Ie),Pe={posts:[{id:Object(Z.a)(),post:"Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven\u2019t found it yet, keep looking. Don\u2019t settle. As with all matters of the heart, you\u2019ll know when you find it.",likes:9},{id:Object(Z.a)(),post:"I alone cannot change the world, but I can cast a stone across the water to create many ripples.",likes:7},{id:Object(Z.a)(),post:"Keep smiling, because life is a beautiful thing and there\u2019s so much to smile about.",likes:15}],newPostText:"",profile:null,status:""},ye=function(e){return{type:"SET_STATUS",payload:{status:e}}},Te=a(51),Se=a.n(Te),Ee=a(67),Me=a.n(Ee),De=a(136),Ce=function(e){var t=e.post,a=e.likes;return Object(b.jsxs)("div",{className:Me.a.post,children:[Object(b.jsx)("p",{className:Me.a.item,children:t}),Object(b.jsxs)("div",{className:Me.a.likes,children:[Object(b.jsx)(De.a,{style:{color:"#FF4646",marginRight:"3px"}}),a]})]})},We=function(e){var t=e.updateNewPostText,a=e.addPost;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(C.b,{initialValues:{post:""},onSubmit:function(e,n){var s=n.setSubmitting;(0,n.resetForm)(),s(!1),t(e.post),a()},validationSchema:W.b({post:W.c().min(1,"Must be at least 1 character").required("")}),children:Object(b.jsx)("div",{className:Se.a.form,children:Object(b.jsxs)(C.a,{children:[Object(b.jsx)(F,{name:"post",placeholder:"What's new?"}),Object(b.jsx)(D,{className:Se.a.btn,type:"submit",children:"Submit"})]})})})})},Ge=Object(L.b)((function(e){return{data:e.profilePage.posts,newPostText:e.profilePage.newPostText}}),{updateNewPostText:function(e){return{type:"UPDATE-NEW-POST-TEXT",payload:{newText:e}}},addPost:function(){return{type:"ADD-POST"}}})((function(e){var t=e.data,a=e.addPost,n=e.updateNewPostText,s=t.map((function(e){return Object(b.jsx)(Ce,{id:e.id,post:e.post,likes:e.likes},e.id)}));return Object(b.jsxs)("div",{className:Se.a.wrapper,children:[Object(b.jsx)(We,{updateNewPostText:n,addPost:a}),Object(b.jsx)("div",{className:Se.a.posts,children:s})]})})),Re=a(68),Be=a.n(Re),Fe=a(69),ke=a.n(Fe),Ue=["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"],Ze=function(e){e.type;var t=e.onChange,a=e.onChangeText,n=e.onKeyPress,s=e.onEnter,r=e.error,c=e.className,i=e.spanClassName,o=Object(O.a)(e,Ue),u="".concat(ke.a.error," ").concat(i||""),l="".concat(r?ke.a.errorInput:ke.a.superInput," ").concat(c||"");return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("input",Object(m.a)({type:"text",onChange:function(e){t&&t(e),a&&a(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),s&&"Enter"===e.key&&s()},className:l},o)),r&&Object(b.jsx)("span",{className:u,children:r})]})},He=a(86),Le=a.n(He),Ve=function(e){var t=e.status,a=e.updateStatus,n=Object(u.useState)(!1),s=Object(G.a)(n,2),r=s[0],c=s[1],i=Object(u.useState)(t),o=Object(G.a)(i,2),l=o[0],d=o[1];Object(u.useEffect)((function(){d(t)}),[t]);return Object(b.jsx)(b.Fragment,{children:r?Object(b.jsx)("div",{children:Object(b.jsx)(Ze,{onChange:function(e){d(e.currentTarget.value)},autoFocus:!0,onEnter:function(){c(!1),a(l)},onBlur:function(){c(!1),a(l)},type:"text",value:l,className:Le.a.input})}):Object(b.jsx)("div",{className:Le.a.status,children:Object(b.jsx)("span",{onDoubleClick:function(){c(!0)},children:t||"Add status..."})})})},Ye=a(13),ze=a.n(Ye),Je=function(e){var t=e.profile,a=e.status,n=e.updateStatus;return t?Object(b.jsxs)("div",{className:ze.a.info,children:[Object(b.jsx)("span",{className:ze.a.name,children:t.fullName}),Object(b.jsx)(Ve,{status:a,updateStatus:n}),Object(b.jsxs)("div",{className:ze.a.headers,children:["About me:",Object(b.jsxs)("span",{className:ze.a.span,children:[" ",t.aboutMe]})]}),Object(b.jsxs)("div",{className:ze.a.headers,children:["Looking for a job:",t.lookingForAJob?Object(b.jsx)("img",{className:ze.a.img,alt:"icon",src:"https://image.flaticon.com/icons/png/512/545/545749.png"}):Object(b.jsx)("img",{className:ze.a.img,alt:"icon",src:"https://image.flaticon.com/icons/png/512/545/545751.png"})]}),Object(b.jsxs)("div",{className:ze.a.headers,children:["Type of job:",Object(b.jsxs)("span",{className:ze.a.span,children:[" ",t.lookingForAJobDescription]})]}),Object(b.jsxs)("div",{className:ze.a.headers,children:["Social-networks:"," ",t.contacts.instagram&&Object(b.jsx)("a",{href:t.contacts.instagram,className:ze.a.span,children:Object(b.jsx)("img",{className:ze.a.img,src:"https://image.flaticon.com/icons/png/512/1400/1400487.png",alt:""})}),t.contacts.facebook&&Object(b.jsx)("a",{href:t.contacts.facebook,className:ze.a.span,children:Object(b.jsx)("img",{className:ze.a.img,src:"https://image.flaticon.com/icons/png/512/1400/1400477.png",alt:""})}),t.contacts.twitter&&Object(b.jsx)("a",{href:t.contacts.twitter,className:ze.a.span,children:Object(b.jsx)("img",{className:ze.a.img,src:"https://image.flaticon.com/icons/png/512/2525/2525779.png",alt:""})}),t.contacts.youtube&&Object(b.jsx)("a",{href:t.contacts.youtube,className:ze.a.span,children:Object(b.jsx)("img",{className:ze.a.img,src:"https://image.flaticon.com/icons/png/512/1400/1400484.png",alt:""})})]})]}):Object(b.jsx)(ge,{})},qe=function(e){var t=e.profile,a=e.status,n=e.updateStatus;return t?Object(b.jsx)("div",{className:Be.a.wallpaper,children:Object(b.jsxs)("div",{className:Be.a.wrapper,children:[Object(b.jsx)("div",{children:Object(b.jsx)(A,{className:Be.a.avatar,src:null!=t.photos.large?t.photos.large:"https://image.flaticon.com/icons/png/512/1077/1077275.png",alt:""})}),Object(b.jsx)(Je,{profile:t,status:a,updateStatus:n})]})}):Object(b.jsx)(ge,{})},Qe=function(e){var t=e.profile,a=e.status,n=e.updateStatus;return Object(b.jsxs)(u.Fragment,{children:[Object(b.jsx)(qe,{profile:t,status:a,updateStatus:n}),Object(b.jsx)(Ge,{})]})},Xe=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e="".concat(this.props.autorizedUserId))||this.props.history.push("/login"),this.props.setUserProfile(e),this.props.getStatus(e)}},{key:"render",value:function(){return Object(b.jsx)(Qe,Object(m.a)(Object(m.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),a}(u.Component),Ke=Object(q.c)(Object(L.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,autorizedUserId:e.auth.id,isAuth:e.auth.isAuth}}),{setUserProfile:function(e){return function(t){ne(e).then((function(e){t({type:"SET-USER-PROFILE",payload:{profile:e}})}))}},getStatus:function(e){return function(t){se(e).then((function(e){t(ye(e))}))}},updateStatus:function(e){return function(t){re(e).then((function(a){0===a.resultCode&&t(ye(e))}))}}}),V.f,J)(Xe),$e={id:null,email:null,login:null,isAuth:!1},et=function(e,t,a,n){return{type:"SET_USER_DATA",payload:{id:e,email:t,login:a,isAuth:n}}},tt=function(){return function(e){return ee().then((function(t){if(0===t.resultCode){var a=t.data,n=a.id,s=a.email,r=a.login;e(et(n,s,r,!0))}}))}},at=a(41),nt=a.n(at),st=function(e){var t=e.login,a=e.isAuth,n=e.logout;return Object(b.jsxs)("header",{className:nt.a.header,children:[Object(b.jsx)("img",{className:nt.a.logo,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGQGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMS0wNS0xOVQxMjo1MzowNyswMTowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMS0wNS0xOVQxMjo1MzowNyswMTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjEtMDUtMTlUMTI6NTM6MDcrMDE6MDAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6YzllYjE1ZWUtMTIyMC04NDRkLTllNDAtZGM0ZjUyZTQzYmY1IiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ODdjMDRjNDEtZWM1Ny1kNzQ0LTliZjQtNmU0MWNmOWJhMDBjIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6OWRlZTNhOWMtNzY0OC04ZjQ1LWIyNjgtNjY4ZjczMDY3ODMzIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6OWRlZTNhOWMtNzY0OC04ZjQ1LWIyNjgtNjY4ZjczMDY3ODMzIiBzdEV2dDp3aGVuPSIyMDIxLTA1LTE5VDEyOjUzOjA3KzAxOjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpjOWViMTVlZS0xMjIwLTg0NGQtOWU0MC1kYzRmNTJlNDNiZjUiIHN0RXZ0OndoZW49IjIwMjEtMDUtMTlUMTI6NTM6MDcrMDE6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDxwaG90b3Nob3A6VGV4dExheWVycz4gPHJkZjpCYWc+IDxyZGY6bGkgcGhvdG9zaG9wOkxheWVyTmFtZT0iRyIgcGhvdG9zaG9wOkxheWVyVGV4dD0iRyIvPiA8L3JkZjpCYWc+IDwvcGhvdG9zaG9wOlRleHRMYXllcnM+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+QexLEgAAEkBJREFUeJzt3Xu8X9OZx/HPITH8HkNE4lbXqtAQIaJRY1DBKzQtRU2J+6W086KuE0aLXl7RUpcxVcalValmpFOqQeLSICYkxpi6NW4hgioibn1220Ry5o+1kx7Jyc657Get/du/5/165eWfnGetHL/vb9/WflZbe3s7zrnOrZJ6As5V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",alt:""}),Object(b.jsxs)("div",{className:nt.a.authWrapper,children:[Object(b.jsx)(A,{className:nt.a.avatar,src:"https://image.flaticon.com/icons/png/512/1077/1077275.png"}),a?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:nt.a.login,children:t}),Object(b.jsx)("span",{onClick:n,className:nt.a.logout,children:"Log out"})]}):Object(b.jsx)(d.b,{to:"/login",children:"Login"})]})]})},rt=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return Object(b.jsx)(st,Object(m.a)({},this.props))}}]),a}(l.a.Component),ct=Object(q.c)(Object(L.b)((function(e){return{id:e.auth.id,email:e.auth.email,login:e.auth.login,isAuth:e.auth.isAuth}}),{logout:function(){return function(e){ae().then((function(t){0===t.resultCode&&e(et(null,null,null,!1))}))}}}))(rt),it=a(87),ot=a.n(it),ut=a(88),lt=a.n(ut),dt=["children"],jt=function(e){var t=e.children,a=Object(O.a)(e,dt),n=Object(C.c)(a),s=Object(G.a)(n,2),r=s[0],c=s[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("label",{htmlFor:a.name,children:[Object(b.jsx)("input",Object(m.a)(Object(m.a)({type:"checkbox",className:lt.a.checkbox},r),a)),t]}),c.touched&&c.error?Object(b.jsx)("div",{className:lt.a.error,children:c.error}):null]})},pt=a(70),bt=a.n(pt),ht=function(e){var t=Object(C.c)(e),a=Object(G.a)(t,2),n=a[0],s=a[1],r=e.label,c=e.className;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("label",{className:bt.a.label,htmlFor:e.name,children:r}),Object(b.jsx)("input",Object(m.a)(Object(m.a)({className:"".concat(bt.a.input," ").concat(c)},n),e)),s.touched&&s.error?Object(b.jsx)("div",{className:bt.a.error,children:s.error}):null]})},mt=a(52),Ot=a.n(mt),gt=function(e){var t=e.login;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(C.b,{initialValues:{email:"",password:"",rememberMe:!1},validationSchema:W.b({email:W.c().email("Must be a valid email!").required("Required!"),password:W.c().required("No password provided.").min(8,"Password is too short (8 characters minimum).").matches(/[a-zA-Z]/,"Password can only contain Latin letters."),rememberMe:W.a()}),onSubmit:function(e,a){var n=a.setSubmitting,s=a.resetForm,r=a.setStatus;s(),n(!1),t(e.email,e.password,e.rememberMe,r)},children:function(e){return Object(b.jsxs)(C.a,{className:Ot.a.form,children:[Object(b.jsx)(ht,{type:"text",name:"email",label:"Login"}),Object(b.jsx)(ht,{type:"password",name:"password",label:"Password"}),Object(b.jsx)(jt,{name:"rememberMe",children:"Remember me"}),Object(b.jsx)(D,{className:Ot.a.btn,type:"submit",children:e.isSubmitting?"Loading...":"Submit"}),Object(b.jsx)("div",{className:Ot.a.error,children:e.status})]})}})})},ft=Object(L.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,a,n){return function(s){te(e,t,a).then((function(e){0===e.resultCode?s(tt()):n(e.messages)}))}}})((function(e){var t=e.login;return e.isAuth?Object(b.jsx)(V.a,{to:"/profile"}):Object(b.jsxs)("div",{className:Ot.a.formWrapper,children:[Object(b.jsx)("h1",{children:"Login"}),Object(b.jsx)(gt,{login:t})]})})),xt=a(132),At=a.n(xt),Nt=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:At.a.header,children:"Page is under construction"}),Object(b.jsx)(ge,{})]})},vt=a(133),wt=a.n(vt),It=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:wt.a.header,children:"Page is under construction"}),Object(b.jsx)(ge,{})]})},_t=a(134),Pt=a.n(_t),yt=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:Pt.a.header,children:"Page is under construction"}),Object(b.jsx)(ge,{})]})},Tt={initialized:!1},St=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initializeApp?Object(b.jsxs)(u.Fragment,{children:[Object(b.jsx)(ct,{}),Object(b.jsxs)("div",{className:ot.a.mainWrapper,children:[Object(b.jsx)(h,{}),Object(b.jsxs)("main",{className:ot.a.content,children:[Object(b.jsx)(V.b,{path:"/profile/:userId?",render:function(){return Object(b.jsx)(Ke,{})}}),Object(b.jsx)(V.b,{path:"/dialogs",render:function(){return Object(b.jsx)(Q,{})}}),Object(b.jsx)(V.b,{path:"/users",render:function(){return Object(b.jsx)(_e,{})}}),Object(b.jsx)(V.b,{path:"/login",render:function(){return Object(b.jsx)(ft,{})}}),Object(b.jsx)(V.b,{path:"/music",render:function(){return Object(b.jsx)(It,{})}}),Object(b.jsx)(V.b,{path:"/friends",render:function(){return Object(b.jsx)(yt,{})}}),Object(b.jsx)(V.b,{path:"/settings",render:function(){return Object(b.jsx)(Nt,{})}})]})]})]}):Object(b.jsx)(ge,{})}}]),a}(u.Component),Et=Object(q.c)(Object(L.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){e(tt()),e({type:"SET_INITIALIZATION"})}}}),V.f)(St),Mt=a(135),Dt=Object(q.b)({profilePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":return Object(m.a)(Object(m.a)({},e),{},{posts:[{id:Object(Z.a)(),post:e.newPostText,likes:0}].concat(Object(U.a)(e.posts)),newPostText:""});case"SET_STATUS":return Object(m.a)(Object(m.a)({},e),{},{status:t.payload.status});case"UPDATE-NEW-POST-TEXT":return Object(m.a)(Object(m.a)({},e),{},{newPostText:t.payload.newText});case"SET-USER-PROFILE":return Object(m.a)(Object(m.a)({},e),{},{profile:t.payload.profile});default:return e}},messagePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-MESSAGE":return Object(m.a)(Object(m.a)({},e),{},{messages:[].concat(Object(U.a)(e.messages),[{id:Object(Z.a)(),text:e.newMessageText}]),newMessageText:""});case"UPDATE-NEW-MESSAGE-TEXT":return Object(m.a)(Object(m.a)({},e),{},{newMessageText:t.payload.newText});default:return e}},usersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(m.a)(Object(m.a)({},e),{},{users:e.users.map((function(e){return e.id===t.payload.userId?Object(m.a)(Object(m.a)({},e),{},{followed:!0}):e}))});case"UNFOLLOW":return Object(m.a)(Object(m.a)({},e),{},{users:e.users.map((function(e){return e.id===t.payload.userId?Object(m.a)(Object(m.a)({},e),{},{followed:!1}):e}))});case"SET_USERS":return Object(m.a)(Object(m.a)({},e),{},{users:t.payload.users});case"SET_CURRENT_PAGE":return Object(m.a)(Object(m.a)({},e),{},{currentPage:t.payload.currentPage});case"SET_TOTAL_COUNT":return Object(m.a)(Object(m.a)({},e),{},{totalUsersCout:t.payload.totalCount});case"TOGGLE_IS_FETCHING":return Object(m.a)(Object(m.a)({},e),{},{isFetching:t.payload.isFetching});case"TOGGLE_FOLLOWING_PROGRESS":return Object(m.a)(Object(m.a)({},e),{},{followingInProgress:t.payload.isFetching?[].concat(Object(U.a)(e.followingInProgress),[t.payload.userId]):Object(U.a)(e.followingInProgress.filter((function(e){return e!==t.payload.userId})))});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_DATA":return Object(m.a)(Object(m.a)({},e),t.payload);default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Tt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_INITIALIZATION":return Object(m.a)(Object(m.a)({},e),{},{initialized:!0});default:return e}}}),Ct=Object(q.d)(Dt,Object(q.a)(Mt.a));s.a.render(Object(b.jsx)(d.a,{children:Object(b.jsx)(L.a,{store:Ct,children:Object(b.jsx)(Et,{})})}),document.getElementById("root"))},36:function(e,t,a){e.exports={nav:"Navigation_nav__2XDGm",active:"Navigation_active__21B1C"}},40:function(e,t,a){e.exports={dialogs:"Dialogs_dialogs__3mKeR",items:"Dialogs_items__1GyuW",messages:"Dialogs_messages__2GScZ",btn:"Dialogs_btn__2TjLv",wrapperAddArea:"Dialogs_wrapperAddArea__M9hx7"}},41:function(e,t,a){e.exports={header:"Header_header__3hF__",logo:"Header_logo__Ubj-l",authWrapper:"Header_authWrapper__20uIM",avatar:"Header_avatar__Ph7vQ",login:"Header_login__33WP3",logout:"Header_logout__2DEbV"}},51:function(e,t,a){e.exports={addPostBtn:"MyPosts_addPostBtn__Mk5I7",wrapper:"MyPosts_wrapper__1rdQL",btn:"MyPosts_btn__1_nYA",form:"MyPosts_form__3NYl-",posts:"MyPosts_posts__3bZPD"}},52:function(e,t,a){e.exports={formWrapper:"Login_formWrapper__2WWmA",form:"Login_form__2DWOW",btn:"Login_btn__28g0-",checkInput:"Login_checkInput__3VCzR",error:"Login_error__2x-wq"}},66:function(e,t,a){e.exports={textarea:"CustomTextarea_textarea__O4Slz",label:"CustomTextarea_label__3CHyz"}},67:function(e,t,a){e.exports={post:"Post_post__P0c06",item:"Post_item__1d_AT"}},68:function(e,t,a){e.exports={wallpaper:"Cover_wallpaper__30XEG",wrapper:"Cover_wrapper__2xY7a",avatar:"Cover_avatar__1Crqa"}},69:function(e,t,a){e.exports={superInput:"Input_superInput__3TOn4",errorInput:"Input_errorInput__3osme",error:"Input_error__342Q9",input:"Input_input__2LrhF"}},70:function(e,t,a){e.exports={input:"CustomInput_input__2nT1f",label:"CustomInput_label__2Ovcz",error:"CustomInput_error__xdWzS"}},83:function(e,t,a){e.exports={messageWrapper:"Message_messageWrapper__1FsQ2",message:"Message_message__ayC2b"}},84:function(e,t,a){e.exports={default:"Button_default__2FmOu",red:"Button_red__28Iyo"}},86:function(e,t,a){e.exports={status:"ProfileStatus_status__2rWK-",input:"ProfileStatus_input__iw0Px"}},87:function(e,t,a){e.exports={mainWrapper:"App_mainWrapper__3PITY"}},88:function(e,t,a){}},[[267,1,2]]]);
//# sourceMappingURL=main.e8881718.chunk.js.map