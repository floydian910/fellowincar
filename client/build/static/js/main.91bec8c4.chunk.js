(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{33:function(e,t,a){e.exports=a.p+"static/media/menu.b3f49afd.svg"},34:function(e,t,a){e.exports=a.p+"static/media/close.2c5552a1.svg"},41:function(e,t,a){e.exports=a(75)},46:function(e,t,a){},70:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),l=a.n(c),u=(a(46),a(6)),o=a(2),i=a.n(o),s=a(4),m=a(1),d=a(3),p=a.n(d);var b=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),l=Object(m.a)(c,2),u=l[0],o=l[1],d=Object(n.useState)(""),b=Object(m.a)(d,2),f=b[0],E=b[1],v=Object(n.useState)(""),h=Object(m.a)(v,2),O=h[0],j=h[1],g=Object(n.useState)(""),y=Object(m.a)(g,2),x=y[0],w=y[1],k=Object(n.useState)(1),A=Object(m.a)(k,2),C=A[0],P=A[1],_=Object(n.useState)(0),N=Object(m.a)(_,2),S=N[0],I=N[1];return Object(n.useEffect)((function(){(function(){var e=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/api/products?limit=".concat(9*C,"&").concat(f,"&").concat(O,"&title[regex]=").concat(x));case 2:t=e.sent,r(t.data.products),I(t.data.result);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[u,f,O,x,C]),{products:[a,r],callback:[u,o],category:[f,E],sort:[O,j],search:[x,w],page:[C,P],result:[S,I]}},f=a(7),E=a(13);var v=function(e){var t=Object(n.useState)(!1),a=Object(m.a)(t,2),r=a[0],c=a[1],l=Object(n.useState)(!1),u=Object(m.a)(l,2),o=u[0],d=u[1],b=Object(n.useState)([]),v=Object(m.a)(b,2),h=v[0],O=v[1],j=Object(n.useState)([]),g=Object(m.a)(j,2),y=g[0],x=g[1];Object(n.useEffect)((function(){e&&function(){var t=Object(s.a)(i.a.mark((function t(){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p.a.get("/user/infor",{headers:{Authorization:e}});case 3:a=t.sent,c(!0),1===a.data.role?d(!0):d(!1),O(a.data.cart),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),alert(t.t0.response.data.msg);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}()()}),[e]);var w=function(){var t=Object(s.a)(i.a.mark((function t(a){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r){t.next=2;break}return t.abrupt("return",alert("Please login to continue buying"));case 2:if(!h.every((function(e){return e._id!==a._id}))){t.next=9;break}return O([].concat(Object(E.a)(h),[Object(f.a)(Object(f.a)({},a),{},{quantity:1})])),t.next=7,p.a.patch("/user/addcart",{cart:[].concat(Object(E.a)(h),[Object(f.a)(Object(f.a)({},a),{},{quantity:1})])},{headers:{Authorization:e}});case 7:t.next=10;break;case 9:alert("This product has been added to cart.");case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return{isLogged:[r,c],isAdmin:[o,d],cart:[h,O],addCart:w,history:[y,x]}};var h=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),l=Object(m.a)(c,2),u=l[0],o=l[1];return Object(n.useEffect)((function(){(function(){var e=Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/api/category");case 2:t=e.sent,r(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[u]),{categories:[a,r],callback:[u,o]}},O=Object(n.createContext)(),j=function(e){var t=e.children,a=Object(n.useState)(!1),c=Object(m.a)(a,2),l=c[0],u=c[1];Object(n.useEffect)((function(){if(localStorage.getItem("firstLogin")){var e=function(){var t=Object(s.a)(i.a.mark((function t(){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("/user/refresh_token");case 2:a=t.sent,u(a.data.accesstoken),setTimeout((function(){e()}),6e5);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();e()}}),[]);var o={token:[l,u],productsAPI:b(),userAPI:v(l),categoriesAPI:h()};return r.a.createElement(O.Provider,{value:o},t)},g=a(33),y=a.n(g),x=a(34),w=a.n(x);var k=function(){var e=Object(n.useContext)(O),t=Object(m.a)(e.userAPI.isLogged,1)[0],a=Object(m.a)(e.userAPI.isAdmin,1)[0],c=(Object(m.a)(e.userAPI.cart,1)[0],Object(n.useState)(!1)),l=Object(m.a)(c,2),o=l[0],d=l[1],b=function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/user/logout");case 2:localStorage.removeItem("firstLogin"),window.location.href="/";case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f={left:o?0:"-100%"};return r.a.createElement("header",null,r.a.createElement("div",{className:"menu",onClick:function(){return d(!o)}},r.a.createElement("img",{src:y.a,alt:"",width:"30"})),r.a.createElement("div",{className:"logo"},r.a.createElement("h1",null,r.a.createElement(u.b,{to:"/"},"Fellow traveler"))),r.a.createElement("ul",{style:f},a&&r.a.createElement(r.a.Fragment,null,r.a.createElement("li",null,r.a.createElement(u.b,{to:"/create_product"},"\u10d2\u10d0\u10dc\u10ea\u10ee\u10d0\u10d3\u10d4\u10d1\u10d8\u10e1 \u10d3\u10d0\u10db\u10d0\u10e2\u10d4\u10d1\u10d0 +")),r.a.createElement("li",null)),t?r.a.createElement(r.a.Fragment,null,r.a.createElement("li",null,r.a.createElement(u.b,{to:"/",onClick:b},"\u10d2\u10d0\u10e1\u10d5\u10da\u10d0"))):r.a.createElement("li",null,r.a.createElement(u.b,{to:"/login"},"\u10d0\u10d5\u10e2\u10dd\u10e0\u10d8\u10d6\u10d0\u10ea\u10d8\u10d0")),r.a.createElement("li",{onClick:function(){return d(!o)}},r.a.createElement("img",{src:w.a,alt:"",width:"30",className:"menu"}))),a&&"")},A=a(5);var C=function(e){var t=e.product,a=(e.deleteProduct,Object(n.useContext)(O));return Object(m.a)(a.userAPI.isAdmin,1)[0],a.userAPI.addCart,r.a.createElement("div",{className:"row_btn"},r.a.createElement(r.a.Fragment,null,r.a.createElement(u.b,{id:"btn_view",to:"/detail/".concat(t._id)},"\u10dc\u10d0\u10ee\u10d4")))};var P=function(e){var t=e.product,a=(e.isAdmin,e.deleteProduct);return e.handleCheck,r.a.createElement("div",{className:"product_card"},r.a.createElement("img",{src:t.images.url,alt:""}),r.a.createElement("div",{className:"product_box"},r.a.createElement("h2",{title:t.title},t.title),r.a.createElement("span",null,"$",t.price),r.a.createElement("p",null,t.description)),r.a.createElement(C,{product:t,deleteProduct:a}))};a(70);var _=function(){return r.a.createElement("div",{className:"load-page"},r.a.createElement("div",{className:"loader"},r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",null))))))))))};var N=function(){var e=Object(n.useContext)(O),t=Object(m.a)(e.categoriesAPI.categories,1)[0],a=Object(m.a)(e.productsAPI.category,2),c=a[0],l=a[1],u=Object(m.a)(e.productsAPI.sort,2),o=u[0],i=u[1],s=Object(m.a)(e.productsAPI.search,2),d=s[0],p=s[1];return r.a.createElement("div",{className:"filter_menu"},r.a.createElement("div",{className:"row"},r.a.createElement("span",null,"\u10d5\u10d4\u10eb\u10d4\u10d1:"),r.a.createElement("select",{name:"category",value:c,onChange:function(e){l(e.target.value),p("")}},r.a.createElement("option",{value:""},"\u10d0\u10d8\u10e0\u10e9\u10d8\u10d4\u10d7"),t.map((function(e){return r.a.createElement("option",{value:"category="+e._id,key:e._id},e.name)})))),r.a.createElement("input",{type:"text",value:d,placeholder:"\u10db\u10d0\u10d2: \u10d7\u10d1\u10d8\u10da\u10d8\u10e1\u10d8 - \u10d1\u10d0\u10d7\u10e3\u10db\u10d8",onChange:function(e){return p(e.target.value.toLowerCase())}}),r.a.createElement("div",{className:"row sort"},r.a.createElement("span",null,"\u10db\u10d0\u10e9\u10d5\u10d4\u10dc\u10d4: "),r.a.createElement("select",{value:o,onChange:function(e){return i(e.target.value)}},r.a.createElement("option",{value:""},"\u10e3\u10d0\u10ee\u10da\u10d4\u10e1\u10d8"),r.a.createElement("option",{value:"sort=price"},"\u10ee\u10d0\u10e0\u10ef\u10d8\u10e1 \u10db\u10d8\u10ee\u10d4\u10d3\u10d5\u10d8\u10d7"))))};var S=function(){var e=Object(n.useContext)(O),t=Object(m.a)(e.productsAPI.page,2),a=t[0],c=t[1],l=Object(m.a)(e.productsAPI.result,1)[0];return r.a.createElement("div",{className:"load_more"},l<9*a?"":r.a.createElement("button",{onClick:function(){return c(a+1)}},"Load more"))};var I=function(){var e=Object(n.useContext)(O),t=Object(m.a)(e.productsAPI.products,2),a=t[0],c=t[1],l=Object(m.a)(e.userAPI.isAdmin,1)[0],u=Object(m.a)(e.token,1)[0],o=Object(m.a)(e.productsAPI.callback,2),d=o[0],b=o[1],f=Object(n.useState)(!1),v=Object(m.a)(f,2),h=v[0],j=v[1],g=Object(n.useState)(!1),y=Object(m.a)(g,2),x=(y[0],y[1],function(e){a.forEach((function(t){t._id===e&&(t.checked=!t.checked)})),c(Object(E.a)(a))}),w=function(){var e=Object(s.a)(i.a.mark((function e(t,a){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,j(!0),n=p.a.post("/api/destroy",{public_id:a},{headers:{Authorization:u}}),r=p.a.delete("/api/products/".concat(t),{headers:{Authorization:u}}),e.next=6,n;case 6:return e.next=8,r;case 8:b(!d),j(!1),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),alert(e.t0.response.data.msg);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t,a){return e.apply(this,arguments)}}();return h?r.a.createElement("div",null,r.a.createElement(_,null)):r.a.createElement(r.a.Fragment,null,r.a.createElement(N,null),console.log(a),r.a.createElement("div",{className:"products"},a.map((function(e){return r.a.createElement(P,{key:e._id,product:e,isAdmin:l,deleteProduct:w,handleCheck:x})}))),r.a.createElement(S,null),0===a.length&&r.a.createElement(_,null))};var q=function(){var e=Object(A.g)(),t=Object(n.useContext)(O),a=Object(m.a)(t.productsAPI.products,1)[0],c=t.userAPI.addCart,l=Object(n.useState)([]),o=Object(m.a)(l,2),i=o[0],s=o[1];return Object(n.useEffect)((function(){e.id&&a.forEach((function(t){t._id===e.id&&s(t)}))}),[e.id,a]),0===i.length?null:r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"detail"},r.a.createElement("img",{src:i.images.url,alt:""}),r.a.createElement("div",{className:"box-detail"},r.a.createElement("div",{className:"row"},r.a.createElement("h2",null,i.title)),r.a.createElement("span",null,"$ ",i.price),r.a.createElement("p",null,i.description),r.a.createElement("p",null,i.content),r.a.createElement("p",null,"Sold: ",i.sold),r.a.createElement(u.b,{to:"/cart",className:"cart",onClick:function(){return c(i)}},"Buy Now"))),r.a.createElement("div",null,r.a.createElement("h2",null,"Related products"),r.a.createElement("div",{className:"products"},a.map((function(e){return e.category===i.category?r.a.createElement(P,{key:e._id,product:e}):null})))))},z=a(14);var D=function(){var e=Object(n.useState)({email:"",password:""}),t=Object(m.a)(e,2),a=t[0],c=t[1],l=function(e){var t=e.target,n=t.name,r=t.value;c(Object(f.a)(Object(f.a)({},a),{},Object(z.a)({},n,r)))},o=function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,p.a.post("/user/login",Object(f.a)({},a));case 4:localStorage.setItem("firstLogin",!0),window.location.href="/",e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),alert(e.t0.response.data.msg);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"login-page"},r.a.createElement("form",{onSubmit:o},r.a.createElement("h2",null,"Login"),r.a.createElement("input",{type:"email",name:"email",required:!0,placeholder:"Email",value:a.email,onChange:l}),r.a.createElement("input",{type:"password",name:"password",required:!0,autoComplete:"on",placeholder:"Password",value:a.password,onChange:l}),r.a.createElement("div",{className:"row"},r.a.createElement("button",{type:"submit"},"Login"),r.a.createElement(u.b,{to:"/register"},"Register"))))};var F=function(){var e=Object(n.useState)({name:"",email:"",password:""}),t=Object(m.a)(e,2),a=t[0],c=t[1],l=function(e){var t=e.target,n=t.name,r=t.value;c(Object(f.a)(Object(f.a)({},a),{},Object(z.a)({},n,r)))},o=function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,p.a.post("/user/register",Object(f.a)({},a));case 4:localStorage.setItem("firstLogin",!0),window.location.href="/",e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),alert(e.t0.response.data.msg);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"login-page"},r.a.createElement("form",{onSubmit:o},r.a.createElement("h2",null,"Register"),r.a.createElement("input",{type:"text",name:"name",required:!0,placeholder:"Name",value:a.name,onChange:l}),r.a.createElement("input",{type:"email",name:"email",required:!0,placeholder:"Email",value:a.email,onChange:l}),r.a.createElement("input",{type:"password",name:"password",required:!0,autoComplete:"on",placeholder:"Password",value:a.password,onChange:l}),r.a.createElement("div",{className:"row"},r.a.createElement("button",{type:"submit"},"Register"),r.a.createElement(u.b,{to:"/login"},"Login"))))};var L=function(){var e=Object(n.useContext)(O),t=Object(m.a)(e.userAPI.history,2),a=t[0],c=t[1],l=Object(m.a)(e.userAPI.isAdmin,1)[0],o=Object(m.a)(e.token,1)[0];return Object(n.useEffect)((function(){o&&function(){var e=Object(s.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!l){e.next=7;break}return e.next=3,p.a.get("/api/payment",{headers:{Authorization:o}});case 3:t=e.sent,c(t.data),e.next=11;break;case 7:return e.next=9,p.a.get("/user/history",{headers:{Authorization:o}});case 9:a=e.sent,c(a.data);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[o,l,c]),r.a.createElement("div",{className:"history-page"},r.a.createElement("h2",null,"History"),r.a.createElement("h4",null,"You have ",a.length," ordered"),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Payment ID"),r.a.createElement("th",null,"Date of Purchased"),r.a.createElement("th",null))),r.a.createElement("tbody",null,a.map((function(e){return r.a.createElement("tr",{key:e._id},r.a.createElement("td",null,e.paymentID),r.a.createElement("td",null,new Date(e.createdAt).toLocaleDateString()),r.a.createElement("td",null,r.a.createElement(u.b,{to:"/history/".concat(e._id)},"View")))})))))};var R=function(){var e=Object(n.useContext)(O),t=Object(m.a)(e.userAPI.history,1)[0],a=Object(n.useState)([]),c=Object(m.a)(a,2),l=c[0],u=c[1],o=Object(A.g)();return Object(n.useEffect)((function(){o.id&&t.forEach((function(e){e._id===o.id&&u(e)}))}),[o.id,t]),0===l.length?null:r.a.createElement("div",{className:"history-page"},r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Address"),r.a.createElement("th",null,"Postal Code"),r.a.createElement("th",null,"Country Code"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,l.address.recipient_name),r.a.createElement("td",null,l.address.line1+" - "+l.address.city),r.a.createElement("td",null,l.address.postal_code),r.a.createElement("td",null,l.address.country_code)))),r.a.createElement("table",{style:{margin:"30px 0px"}},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null),r.a.createElement("th",null,"Products"),r.a.createElement("th",null,"Quantity"),r.a.createElement("th",null,"Price"))),r.a.createElement("tbody",null,l.cart.map((function(e){return r.a.createElement("tr",{key:e._id},r.a.createElement("td",null,r.a.createElement("img",{src:e.images.url,alt:""})),r.a.createElement("td",null,e.title),r.a.createElement("td",null,e.quantity),r.a.createElement("td",null,"$ ",e.price*e.quantity))})))))},U=a(36),T=a(37),$=a(40),Y=a(39),B=a(38),J=a.n(B),X=function(e){Object($.a)(a,e);var t=Object(Y.a)(a);function a(){return Object(U.a)(this,a),t.apply(this,arguments)}return Object(T.a)(a,[{key:"render",value:function(){var e=this,t=this.props.total;return r.a.createElement(J.a,{env:"sandbox",client:{sandbox:"YOUR-sandbox-APP-ID",production:"YOUR-PRODUCTION-APP-ID"},currency:"USD",total:t,onError:function(e){console.log("Error!",e)},onSuccess:function(t){console.log("The payment was succeeded!",t),e.props.tranSuccess(t)},onCancel:function(e){console.log("The payment was cancelled!",e)},style:{size:"small",color:"blue",shape:"rect",label:"checkout",tagline:!1}})}}]),a}(r.a.Component);var H=function(){var e=Object(n.useContext)(O),t=Object(m.a)(e.userAPI.cart,2),a=t[0],c=t[1],l=Object(m.a)(e.token,1)[0],u=Object(n.useState)(0),o=Object(m.a)(u,2),d=o[0],b=o[1];Object(n.useEffect)((function(){!function(){var e=a.reduce((function(e,t){return e+t.price*t.quantity}),0);b(e)}()}),[a]);var f=function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.patch("/user/addcart",{cart:t},{headers:{Authorization:l}});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(s.a)(i.a.mark((function e(t){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.paymentID,r=t.address,e.next=3,p.a.post("/api/payment",{cart:a,paymentID:n,address:r},{headers:{Authorization:l}});case 3:c([]),f([]),alert("You have successfully placed an order.");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return 0===a.length?r.a.createElement("h2",{style:{textAlign:"center",fontSize:"5rem"}},"Cart Empty"):r.a.createElement("div",null,a.map((function(e){return r.a.createElement("div",{className:"detail cart",key:e._id},r.a.createElement("img",{src:e.images.url,alt:""}),r.a.createElement("div",{className:"box-detail"},r.a.createElement("h2",null,e.title),r.a.createElement("h3",null,"$ ",e.price*e.quantity),r.a.createElement("p",null,e.description),r.a.createElement("p",null,e.content),r.a.createElement("div",{className:"amount"},r.a.createElement("button",{onClick:function(){return t=e._id,a.forEach((function(e){e._id===t&&(1===e.quantity?e.quantity=1:e.quantity-=1)})),c(Object(E.a)(a)),void f(a);var t}}," - "),r.a.createElement("span",null,e.quantity),r.a.createElement("button",{onClick:function(){return t=e._id,a.forEach((function(e){e._id===t&&(e.quantity+=1)})),c(Object(E.a)(a)),void f(a);var t}}," + ")),r.a.createElement("div",{className:"delete",onClick:function(){return t=e._id,void(window.confirm("Do you want to delete this product?")&&(a.forEach((function(e,n){e._id===t&&a.splice(n,1)})),c(Object(E.a)(a)),f(a)));var t}},"X")))})),r.a.createElement("div",{className:"total"},r.a.createElement("h3",null,"Total: $ ",d),r.a.createElement(X,{total:d,tranSuccess:v})))};var Q=function(){return r.a.createElement("div",null,"404 | Not Found")};var V=function(){var e=Object(n.useContext)(O),t=Object(m.a)(e.categoriesAPI.categories,1)[0],a=Object(n.useState)(""),c=Object(m.a)(a,2),l=c[0],u=c[1],o=Object(m.a)(e.token,1)[0],d=Object(m.a)(e.categoriesAPI.callback,2),b=d[0],f=d[1],E=Object(n.useState)(!1),v=Object(m.a)(E,2),h=v[0],j=v[1],g=Object(n.useState)(""),y=Object(m.a)(g,2),x=y[0],w=y[1],k=function(){var e=Object(s.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!h){e.next=9;break}return e.next=5,p.a.put("/api/category/".concat(x),{name:l},{headers:{Authorization:o}});case 5:a=e.sent,alert(a.data.msg),e.next=13;break;case 9:return e.next=11,p.a.post("/api/category",{name:l},{headers:{Authorization:o}});case 11:n=e.sent,alert(n.data.msg);case 13:j(!1),u(""),f(!b),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(1),alert(e.t0.response.data.msg);case 21:case"end":return e.stop()}}),e,null,[[1,18]])})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(s.a)(i.a.mark((function e(t,a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:w(t),u(a),j(!0);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),C=function(){var e=Object(s.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.delete("/api/category/".concat(t),{headers:{Authorization:o}});case 3:a=e.sent,alert(a.data.msg),f(!b),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),alert(e.t0.response.data.msg);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"categories"},r.a.createElement("form",{onSubmit:k},r.a.createElement("label",{htmlFor:"category"},"Category"),r.a.createElement("input",{type:"text",name:"category",value:l,required:!0,onChange:function(e){return u(e.target.value)}}),r.a.createElement("button",{type:"submit"},h?"Update":"Create")),r.a.createElement("div",{className:"col"},t.map((function(e){return r.a.createElement("div",{className:"row",key:e._id},r.a.createElement("p",null,e.name),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return A(e._id,e.name)}},"Edit"),r.a.createElement("button",{onClick:function(){return C(e._id)}},"Delete")))}))))},G={product_id:"",price:0,description:"",content:"",category:"",startLocation:"",finalLocation:""};var K=function(){var e=Object(n.useContext)(O),t=Object(n.useState)(G),a=Object(m.a)(t,2),c=a[0],l=a[1],u=Object(m.a)(e.categoriesAPI.categories,1)[0],o=Object(n.useState)(!1),d=Object(m.a)(o,2),b=d[0],E=d[1],v=Object(n.useState)(!1),h=Object(m.a)(v,2),j=h[0],g=h[1],y=(Object(m.a)(e.userAPI.isAdmin,1)[0],Object(m.a)(e.token,1)[0]),x=Object(A.f)(),w=Object(A.g)(),k=Object(m.a)(e.productsAPI.products,1)[0],C=Object(n.useState)(!1),P=Object(m.a)(C,2),N=P[0],S=P[1],I=Object(m.a)(e.productsAPI.callback,2),q=I[0],D=I[1];Object(n.useEffect)((function(){w.id?(S(!0),k.forEach((function(e){e._id===w.id&&(l(e),E(e.images))}))):(S(!1),l(G),E(!1))}),[w.id,k]);var F=function(){var e=Object(s.a)(i.a.mark((function e(t){var a,n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,a=t.target.files[0]){e.next=5;break}return e.abrupt("return",alert("File not exist."));case 5:if(!(a.size>1048576)){e.next=7;break}return e.abrupt("return",alert("Size too large!"));case 7:if("image/jpeg"===a.type||"image/png"===a.type){e.next=9;break}return e.abrupt("return",alert("File format is incorrect."));case 9:return(n=new FormData).append("file",a),g(!0),e.next=14,p.a.post("/api/upload",n,{headers:{"content-type":"multipart/form-data",Authorization:y}});case 14:r=e.sent,g(!1),E(r.data),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(1),alert(e.t0.response.data.msg);case 22:case"end":return e.stop()}}),e,null,[[1,19]])})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(s.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,g(!0),e.next=4,p.a.post("/api/destroy",{public_id:b.public_id},{headers:{Authorization:y}});case 4:g(!1),E(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),alert(e.t0.response.data.msg);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),R=function(e){var t=e.target,a=t.name,n=t.value;l(Object(f.a)(Object(f.a)({},c),{},Object(z.a)({},a,n)))},U=function(){var e=Object(s.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,b){e.next=4;break}return e.abrupt("return",alert("No Image Upload"));case 4:if(!N){e.next=9;break}return e.next=7,p.a.put("/api/products/".concat(c._id),Object(f.a)(Object(f.a)({},c),{},{images:b}),{headers:{Authorization:y}});case 7:e.next=11;break;case 9:return e.next=11,p.a.post("/api/products",Object(f.a)(Object(f.a)({},c),{},{images:b}),{headers:{Authorization:y}});case 11:D(!q),x.push("/"),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),alert(e.t0.response.data.msg);case 18:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(t){return e.apply(this,arguments)}}(),T={display:b?"block":"none"};return r.a.createElement("div",{className:"create_product"},r.a.createElement("div",{className:"upload"},r.a.createElement("input",{type:"file",name:"file",id:"file_up",onChange:F}),j?r.a.createElement("div",{id:"file_img"},r.a.createElement(_,null)):r.a.createElement("div",{id:"file_img",style:T},r.a.createElement("img",{src:b?b.url:"",alt:""}),r.a.createElement("span",{onClick:L},"X"))),r.a.createElement("form",{onSubmit:U},r.a.createElement("div",{className:"row"},r.a.createElement("label",{htmlFor:"categories"},"\u10d5\u10d4\u10eb\u10d4\u10d1: "),r.a.createElement("select",{name:"category",value:c.category,onChange:R},r.a.createElement("option",{value:""},"\u10d0\u10d8\u10e0\u10e9\u10d8\u10d4\u10d7"),u.map((function(e){return r.a.createElement("option",{value:e._id,key:e._id},e.name)})))),r.a.createElement("div",{className:"row"},r.a.createElement("label",{htmlFor:"content"},"\u10e1\u10d0\u10ec\u10e7\u10d8\u10e1\u10d8 \u10de\u10e3\u10dc\u10e5\u10e2\u10d8"),r.a.createElement("input",{type:"text",name:"startLocation",placeholder:"\u10db\u10d0\u10d2: \u10d1\u10d0\u10d7\u10e3\u10db\u10d8",required:!0,rows:"7",onChange:R})),r.a.createElement("div",{className:"row"},r.a.createElement("label",{htmlFor:"content"},"\u10d3\u10d0\u10dc\u10d8\u10e8\u10dc\u10e3\u10da\u10d4\u10d1\u10d8\u10e1 \u10d0\u10d3\u10d2\u10d8\u10da\u10d8"),r.a.createElement("input",{type:"text",name:"finalLocation",placeholder:"\u10db\u10d0\u10d2: \u10d7\u10d1\u10d8\u10da\u10d8\u10e1\u10d8",required:!0,rows:"7",onChange:R})),r.a.createElement("div",{className:"row"},r.a.createElement("label",{htmlFor:"price"},"\u10e1\u10d0\u10ec\u10d5\u10d0\u10d5\u10d8\u10e1 \u10ee\u10d0\u10e0\u10ef\u10d8"),r.a.createElement("input",{type:"number",name:"price",id:"price",required:!0,value:c.price,onChange:R})),r.a.createElement("div",{className:"row"},r.a.createElement("label",{htmlFor:"description"},"\u10d0\u10e6\u10ec\u10d4\u10e0\u10d0"),r.a.createElement("textarea",{type:"text",name:"description",id:"description",required:!0,value:c.description,rows:"5",onChange:R})),r.a.createElement("div",{className:"row"},r.a.createElement("label",{htmlFor:"content"},"\u10e1\u10d0\u10d9\u10dd\u10dc\u10e2\u10d0\u10e5\u10e2\u10dd \u10dc\u10dd\u10db\u10d4\u10e0\u10d8"),r.a.createElement("input",{type:"text",name:"content",id:"content",required:!0,value:c.content,rows:"7",onChange:R})),r.a.createElement("button",{type:"submit"},N?"Update":"Create")))};var M=function(){var e=Object(n.useContext)(O),t=Object(m.a)(e.userAPI.isLogged,1)[0],a=Object(m.a)(e.userAPI.isAdmin,1)[0];return r.a.createElement(A.c,null,r.a.createElement(A.a,{path:"/",exact:!0,component:I}),r.a.createElement(A.a,{path:"/detail/:id",exact:!0,component:q}),r.a.createElement(A.a,{path:"/login",exact:!0,component:t?Q:D}),r.a.createElement(A.a,{path:"/register",exact:!0,component:t?Q:F}),r.a.createElement(A.a,{path:"/category",exact:!0,component:a?V:Q}),r.a.createElement(A.a,{path:"/create_product",exact:!0,component:a?K:Q}),r.a.createElement(A.a,{path:"/edit_product/:id",exact:!0,component:a?K:Q}),r.a.createElement(A.a,{path:"/history",exact:!0,component:t?L:Q}),r.a.createElement(A.a,{path:"/history/:id",exact:!0,component:t?R:Q}),r.a.createElement(A.a,{path:"/cart",exact:!0,component:H}),r.a.createElement(A.a,{path:"*",exact:!0,component:Q}))};var W=function(){return r.a.createElement(j,null,r.a.createElement(u.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(k,null),r.a.createElement(M,null))))};l.a.render(r.a.createElement(W,null),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.91bec8c4.chunk.js.map