webpackJsonp([0,1],[function(e,t,n){"use strict";var i=n(2);n.n(i);console.log("Style applied")},function(e,t){function n(){var e=document.getElementById("galleryView"),t=document.getElementById("tilesView"),n=document.getElementById("outer3"),i=document.getElementById("slider3"),c=document.getElementById("tilesContainer");if(i.classList.contains("active"))for(i.classList.remove("active"),n.classList.remove("outerActive"),e.style.display="flex",t.style.display="none";c.hasChildNodes();)c.removeChild(c.firstChild);else{i.classList.add("active"),n.classList.add("outerActive"),e.style.display="none",t.style.display="flex";for(var l=0;l<d.length-1;l++){var o=document.createElement("div");o.classList.add("tileItem"),o.style.background='url(" + imgObject[i] + ")',o.style.backgroundSize="contain",c.appendChild(o)}}}function i(){document.getElementById("mainView").style.background='url(" + imgObject[mainImg] + ")',document.getElementById("leftView").style.background='url(" + imgObject[prevImg] + ")',document.getElementById("rightView").style.background='url(" + imgObject[nextImg] + ")',document.getElementById("linkTag").href=d[o]}function c(){s=o,o=m,m>=d.length-1?m=0:m++,i()}function l(){m=o,o=s,0===s?s=d.length-1:s--,i()}document.getElementById("outer3").addEventListener("click",n);var d=["https://placeimg.com/450/450/any","https://placeimg.com/450/450/animals","https://placeimg.com/450/450/architecture","https://placeimg.com/450/450/nature","https://placeimg.com/450/450/people","https://placeimg.com/450/450/tech","https://picsum.photos/id/1/450/450","https://picsum.photos/id/8/450/450","https://picsum.photos/id/12/450/450","https://picsum.photos/id/15/450/450","https://picsum.photos/id/5/450/450"],o=0,s=d.length-1,m=1;document.getElementById("navRight").addEventListener("click",c),document.getElementById("navLeft").addEventListener("click",l),document.getElementById("rightView").addEventListener("click",c),document.getElementById("leftView").addEventListener("click",l),document.addEventListener("keyup",function(e){37===e.keyCode?l():39===e.keyCode&&c()}),i()},function(e,t){},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=(n(0),n(1));n.n(i);console.log("Hello World")}],[3]);