!function(){function e(e){var t=[],a=e.parentNode;if(!a)return t;var n=a.firstElementChild;do{n!==e&&t.push(n)}while(n=n.nextElementSibling);return t}function t(e){e.classList.remove("inactive"),e.classList.add("active"),e.style.background="hsl(229, 100%, 76%)",e.style.color="white"}function a(e){e.classList.remove("active"),e.classList.add("inactive"),e.style.background="inherit",e.style.color="inherit"}function n(t){var n=e(t.parentNode),r=!0,i=!1,o=void 0;try{for(var l,c=n[Symbol.iterator]();!(r=(l=c.next()).done);r=!0){var s=l.value;s.firstChild.classList.contains("active")&&a(s.firstChild)}}catch(e){i=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}}function r(r){var i=r.target.classList[0],o=document.getElementsByClassName("".concat(i,"Section"))[0];r.target.classList.contains("inactive")?(t(r.target),o.classList.add("active")):r.target.classList.contains("active")&&(a(r.target),o.classList.remove("active")),function(t){var a=e(t),n=!0,r=!1,i=void 0;try{for(var o,l=a[Symbol.iterator]();!(n=(o=l.next()).done);n=!0){var c=o.value;c.classList.contains("active")&&c.classList.remove("active")}}catch(e){r=!0,i=e}finally{try{n||null==l.return||l.return()}finally{if(r)throw i}}}(o),n(r.target)}function i(e){var r=e.target.classList[0],i=document.getElementsByClassName(r);if(e.target.classList.contains("inactive")){t(e.target);var o=!0,l=!1,c=void 0;try{for(var s=i[Symbol.iterator]();!(o=(m=s.next()).done);o=!0){(d=m.value).classList.contains("food")&&d.classList.add("active")}}catch(e){l=!0,c=e}finally{try{o||null==s.return||s.return()}finally{if(l)throw c}}}else if(e.target.classList.contains("active")){a(e.target);o=!0,l=!1,c=void 0;try{for(s=i[Symbol.iterator]();!(o=(m=s.next()).done);o=!0){var d;(d=m.value).classList.contains("food")&&d.classList.remove("active")}}catch(e){l=!0,c=e}finally{try{o||null==s.return||s.return()}finally{if(l)throw c}}}var u=function(e,t){for(var a=e.slice(),n=0;n<a.length;n++)a[n]===t&&a.splice(n,1);return a}(["Vegetarian","Spicy","Comfort"],r);o=!0,l=!1,c=void 0;try{var m;for(s=u[Symbol.iterator]();!(o=(m=s.next()).done);o=!0){var y=m.value;articles=document.querySelectorAll(".food");var v=!0,p=!1,f=void 0;try{for(var g,h=articles[Symbol.iterator]();!(v=(g=h.next()).done);v=!0){var L=g.value;L.classList.contains(y)&&L.classList.toggle("active")}}catch(e){p=!0,f=e}finally{try{v||null==h.return||h.return()}finally{if(p)throw f}}}}catch(e){l=!0,c=e}finally{try{o||null==s.return||s.return()}finally{if(l)throw c}}n(e.target)}function o(){!function(e){var t=document.querySelectorAll("p"),a=!0,n=!1,r=void 0;try{for(var i,o=t[Symbol.iterator]();!(a=(i=o.next()).done);a=!0){var l=i.value;l.innerHTML===e&&l.parentNode.removeChild(l)}}catch(e){n=!0,r=e}finally{try{a||null==o.return||o.return()}finally{if(n)throw r}}}("No results found");var e=document.querySelectorAll(".food"),t=0,a=!0,n=!1,r=void 0;try{for(var i,o=e[Symbol.iterator]();!(a=(i=o.next()).done);a=!0){"none"!==i.value.style.display&&t++}}catch(e){n=!0,r=e}finally{try{a||null==o.return||o.return()}finally{if(n)throw r}}if(0===t){var l=document.createElement("p");l.classList.add("noResults"),l.innerHTML="No results found",document.querySelector(".menuArticle").append(l)}}function l(e){r(e);var t=e.target.classList[0],a=document.querySelectorAll(".food"),n=document.querySelectorAll("li a"),i=!0,l=!1,c=void 0,s=!0,d=!1,u=void 0;if(e.target.classList.contains("active"))try{for(var m,y=a[Symbol.iterator]();!(i=(m=y.next()).done);i=!0){(f=m.value).parentNode.classList.contains("".concat(t,"Section"))&&(n[4].classList.contains("inactive")&&n[5].classList.contains("inactive")&&n[6].classList.contains("inactive")||f.classList.contains("active"))?f.style.display="flex":f.style.display="none"}}catch(e){l=!0,c=e}finally{try{i||null==y.return||y.return()}finally{if(l)throw c}}else try{for(var v,p=a[Symbol.iterator]();!(s=(v=p.next()).done);s=!0){var f;(f=v.value).parentNode.classList.contains("".concat(t,"Section"))&&(f.style.display="none")}}catch(e){d=!0,u=e}finally{try{s||null==p.return||p.return()}finally{if(d)throw u}}o()}function c(e){i(e);var t=e.target.classList[0],a=document.querySelectorAll(".food"),n=!0,r=!1,l=void 0;if(e.target.classList.contains("active"))try{for(var c,s=a[Symbol.iterator]();!(n=(c=s.next()).done);n=!0){(f=c.value).parentNode.classList.contains("active")&&f.classList.contains(t)?f.style.display="flex":f.style.display="none"}}catch(e){r=!0,l=e}finally{try{n||null==s.return||s.return()}finally{if(r)throw l}}else{var d=document.querySelectorAll("li a"),u=!0,m=!1,y=void 0;if(d[4].classList.contains("inactive")&&d[5].classList.contains("inactive")&&d[6].classList.contains("inactive"))try{for(var v,p=a[Symbol.iterator]();!(u=(v=p.next()).done);u=!0){var f;(f=v.value).parentNode.classList.contains("active")&&(f.style.display="flex")}}catch(e){m=!0,y=e}finally{try{u||null==p.return||p.return()}finally{if(m)throw y}}}o()}var s=[],d=document.querySelector("#achats-container"),u=document.querySelector("#total-price"),m=0;function y(){d.parentNode.classList.toggle("disparu")}function v(e){s.push(e);var t=document.createElement("article");t.classList.add("article-test"),t.classList.add("article-cart");var a=document.createElement("div");a.innerHTML=e.quantity;var n=document.createElement("div"),r=document.createElement("div"),i=document.createElement("div"),o=document.createElement("img");o.setAttribute("src",e.image),o.classList.add("article-cart");var l=document.createElement("h6");l.innerHTML=e.name,l.classList.add("article-cart");var c=document.createElement("h6");c.innerHTML="€".concat(e.price),c.classList.add("article-cart"),m+=e.price,u.innerHTML="Your total: ".concat(m,"€");var y=document.createElement("button");y.innerText="Remove",y.classList.add("article-cart"),document.body.classList.contains("darkTheme")&&y.classList.add("darkTheme"),y.addEventListener("click",(function(){t.remove(),function(e){m-=e.price*e.quantity,u.innerHTML="Your total: ".concat(m,"€"),e.quantity=1,s.splice(s.indexOf(e),1)}(e)})),n.appendChild(o),r.appendChild(l),r.appendChild(c),i.appendChild(y),t.appendChild(a),t.appendChild(n),t.appendChild(r),t.appendChild(i),d.appendChild(t)}function p(e){var t=s.find((function(t){return t.name===e.name}));void 0!==t?function(e,t){var a=s.indexOf(t),n=d.children[a];s[a].quantity++,n.children[0].innerHTML=s[a].quantity,m+=e.price,u.innerHTML="Your total: ".concat(m,"€")}(e,t):v(e)}function f(e){y(),"Purchase"===e.target.innerHTML&&d.hasChildNodes()?alert("Commande enregistrée, vous allez être redirigé vers la page de votre banque pour effectuer le paiement."):"Empty cart"===e.target.innerHTML&&d.hasChildNodes()&&alert("Panier supprimé !"),function(){for(var e=document.querySelectorAll(".article-test"),t=0;t<e.length;t++)s[t].quantity=1,e[t].remove();m=0,u.innerHTML="Your total: ".concat(m,"€"),s.splice(0)}()}function g(e,t){var a=document.querySelectorAll("button"),n=document.querySelectorAll("a"),r=!0,i=!1,o=void 0;try{for(var l,c=a[Symbol.iterator]();!(r=(l=c.next()).done);r=!0){l.value.classList.toggle("darkTheme")}}catch(e){i=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}var s=!0,d=!1,u=void 0;try{for(var m,y=n[Symbol.iterator]();!(s=(m=y.next()).done);s=!0){m.value.classList.toggle("darkTheme")}}catch(e){d=!0,u=e}finally{try{s||null==y.return||y.return()}finally{if(d)throw u}}!function(e,t){e.classList.contains("darkTheme")?(e.innerHTML="Go Light",t.setAttribute("src","../Images/LogoNoir-removebg-preview.png")):(e.innerHTML="Go Dark",t.setAttribute("src","../Images/logo.png")),document.body.classList.toggle("darkTheme")}(e,t)}u.innerHTML="Your total: ".concat(m,"€");var h=document.querySelector("#logo"),L=document.createElement("button");L.classList.add("themeBtn"),L.innerHTML="Go Dark",L&&L.addEventListener("click",(function(){g(L,h)}));var b=document.getElementById("shopping-cart-btn");document.getElementById("vraiAside").insertBefore(L,b);var C=document.createElement("ul");C.classList.add("meals"),document.createElement("section").classList.add("menuArticle");var S=!0,E=!1,q=void 0;try{for(var x,T=["All","Pizza","Pasta","Desserts"][Symbol.iterator]();!(S=(x=T.next()).done);S=!0){var z=x.value,A=document.createElement("li");(oe=document.createElement("a")).classList.add(z),oe.classList.add("inactive"),oe.setAttribute("href","javascript:void(0);"),oe&&oe.addEventListener("click",l),(le=document.createElement("img")).setAttribute("src","../Images/".concat(z,".png"));var M=document.createTextNode(z),w=document.createElement("section");w.classList.add("".concat(z,"Section")),oe.appendChild(le),oe.appendChild(M),A.appendChild(oe),C.appendChild(A),document.querySelector(".menuArticle").appendChild(w)}}catch(e){E=!0,q=e}finally{try{S||null==T.return||T.return()}finally{if(E)throw q}}var k=!0,N=!1,H=void 0;try{for(var P,I=[{type:"Pizza",name:"Sarda",categories:["Spicy"],ingredients:["mozzarella","pecorino cheese","spicy salami"],price:9,image:"../Images/sarda.jpeg",quantity:1},{type:"Pizza",name:"Pizza Romana",categories:[],ingredients:["mozzarella","anchovies","capers","oregano"],price:9,image:"../Images/Pizza-Romana-1-800x477.jpeg",quantity:1},{type:"Pizza",name:"Pizza Napoletana",categories:["Vegetarian"],ingredients:["mozzarella","tomato","oregano"],price:8,image:"../Images/napoletana.jpeg",quantity:1},{type:"Pizza",name:"Four seasons pizza",categories:["Comfort food"],ingredients:["artichokes","tomatoes","basil","mushrooms","ham"],price:11,image:"../Images/four-seasons-pizza.jpeg",quantity:1},{type:"Pasta",name:"Pasta Carbonara",categories:["Comfort food"],ingredients:["egg","lardons","Pecorino romano"],price:8,image:"../Images/pasta-carbonara_b-864x413.jpeg",quantity:1},{type:"Pasta",name:"Spaghetti bolognese",categories:["Comfort food"],ingredients:["beef","chopped tomatoes","garlic"],price:8,image:"../Images/bolognaise.jpeg",quantity:1},{type:"Pasta",name:"Lasagna bolognese",categories:["Comfort food"],ingredients:["mozzarella","tomato","beef"],price:10,image:"../Images/lasagna-bolognese.jpeg",quantity:1},{type:"Pasta",name:"Cacio e pepe",categories:["Vegetarian"],ingredients:["pecorino romano","black pepper"],price:9,image:"../Images/Spaghetti-Cacio-e-Pepe-Pecorino-and-black-pepper-spaghetti_1200x800.jpeg",quantity:1},{type:"Desserts",name:"Torrone Semifreddo",categories:["Desserts","Vegetarian"],ingredients:["honey","egg whites","nuts"],price:4,image:"../Images/Torrone Semifreddo.jpeg",quantity:1},{type:"Desserts",name:"Mixed-Nut-Milk Panna Cotta",categories:["Desserts","Vegetarian"],ingredients:["nut milk","honey","strawberry jam"],price:10,image:"../Images/pannacotta.jpeg",quantity:1},{type:"Desserts",name:"Chocolate and Pistachio Biscotti",categories:["Desserts","Vegetarian"],ingredients:["dark chocolate","egg","nuts"],price:9,image:"../Images/biscotti.jpeg",quantity:1}][Symbol.iterator]();!(k=(P=I.next()).done);k=!0){var j=P.value,B=document.createElement("article");B.classList.add("food");var D=!0,V=!1,Y=void 0;try{for(var R,F=j.categories[Symbol.iterator]();!(D=(R=F.next()).done);D=!0){var G=R.value;"Comfort food"===G&&(G="Comfort"),B.classList.add(G)}}catch(e){V=!0,Y=e}finally{try{D||null==F.return||F.return()}finally{if(V)throw Y}}var O=document.createElement("figure");(le=document.createElement("img")).setAttribute("src",j.image);var _=document.createElement("figcaption");_.innerText=j.name;var J=document.createElement("p");J.innerHTML="Ingredients: ";for(var K=0;K<j.ingredients.length-1;K++)J.innerHTML+="".concat(j.ingredients[K],", ");J.innerHTML+=j.ingredients[j.ingredients.length-1];var Q=document.createElement("p");Q.innerHTML="€".concat(j.price);var U=document.createElement("button");U.classList.add("cartBtn"),U&&U.addEventListener("click",(function(){p(j)})),U.innerHTML="Add to cart",O.appendChild(le),O.appendChild(_),B.appendChild(O),B.appendChild(J),B.appendChild(Q),B.appendChild(U),document.querySelector(".selectMenu").appendChild(C);var W=B.cloneNode(!0),X=j.type;document.getElementsByClassName("AllSection")[0].appendChild(W),document.getElementsByClassName("".concat(X,"Section"))[0].appendChild(B)}}catch(e){N=!0,H=e}finally{try{k||null==I.return||I.return()}finally{if(N)throw H}}var Z=document.querySelector(".selectMenu"),$=document.createElement("ul");$.classList.add("filters");var ee=!0,te=!1,ae=void 0;try{for(var ne,re=["Vegetarian","Spicy","Comfort Food"][Symbol.iterator]();!(ee=(ne=re.next()).done);ee=!0){var ie=ne.value;"Comfort Food"===ie&&(ie="Comfort");var oe,le;A=document.createElement("li");(oe=document.createElement("a")).classList.add(ie),oe.classList.add("inactive"),oe.setAttribute("href","javascript:void(0);"),oe&&oe.addEventListener("click",c),(le=document.createElement("img")).setAttribute("src","../Images/".concat(ie,".png"));M=document.createTextNode(ie);oe.appendChild(le),oe.appendChild(M),A.appendChild(oe),$.appendChild(A)}}catch(e){te=!0,ae=e}finally{try{ee||null==re.return||re.return()}finally{if(te)throw ae}}Z.appendChild($);var ce=document.querySelectorAll(".clearAll"),se=document.querySelector("#shopping-cart-btn"),de=!0,ue=!1,me=void 0;try{for(var ye,ve=ce[Symbol.iterator]();!(de=(ye=ve.next()).done);de=!0){var pe=ye.value;pe&&pe.addEventListener("click",(function(e){f(e)}))}}catch(e){ue=!0,me=e}finally{try{de||null==ve.return||ve.return()}finally{if(ue)throw me}}se&&se.addEventListener("click",(function(){y()}))}();
//# sourceMappingURL=index.c7f1eeb5.js.map