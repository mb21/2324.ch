"use strict";var searchifyField=function(e,i){i=i||{};var o=undefined,s=e.getElementsByClassName("queryfield")[0],r=e.getElementsByClassName("suggested")[0],c=function(){r.setAttribute("style","display: none;")};document.addEventListener("click",function(e){s.contains(e.target)||c()}),s.onfocus=function(){c(),i.onFocus&&i.onFocus()},e.onkeypress=function(e){if(13==e.keyCode||32==e.keyCode&&document.activeElement&&document.activeElement.parentNode==r)return document.activeElement.click(),!1},s.onkeypress=function(e){if(13==e.keyCode){if(o)o.getElementsByTagName("A")[0]?o.getElementsByTagName("A")[0].click():o.click();else{var t=r.getElementsByTagName("LI");1===t.length&&t[0].click()}return!1}},s.onkeyup=function(e){switch((e=e||window.event).keyCode){case 40:o?(o.className="",o.nextElementSibling&&(o=o.nextElementSibling)):o=r.getElementsByTagName("LI")[0],o.className="active";break;case 38:if(o)o.className="",o.previousElementSibling&&(o=o.previousElementSibling);else{var t=r.getElementsByTagName("LI");o=t[t.length-1]}o.className="active";break;case 91:break;case 27:c();break;default:var n=e.keyCode;if(47<n&&n<112||-1<[0,8,186,192,219,222,229].indexOf(n)){var a=s.value;i.onKeyUp&&i.onKeyUp(),o=undefined,r.innerHTML="",0<a.trim().length?i.queryToSuggestions(a,r,function(){c(),o=undefined}):c()}}}};!function(){var e=function(e){e=e.toLowerCase();try{e=e.normalize("NFKD").replace(/[\u0300-\u036F]/g,"")}catch(t){}return e},r=[],c=[],l=[],t=document.getElementsByClassName("townSelectorSelect");if(0<t.length)for(var n=t[0].options,a=1;a<n.length;a++){var i=n[a].innerHTML;name=i.substring(5),c.push(name),r.push(e(name)),l.push(i.substring(0,4))}try{var d=document.getElementById("townName");if(d){var u=document.getElementById("zipCodeGrey"),m=document.getElementById("zipCodeBlack");window.setInterval(function(){var e=Math.floor(Math.random()*(r.length-1)),t=l[e],n=["M 0 90 "];d.innerHTML=c[e];for(var a=0;a<t.length;a++){var i=30*a,o=10*(9-t[a]);n.push("L "+i+" "+o+" ")}n.push("90 90 Z");var s=n.join("");u.setAttribute("d",s),m.setAttribute("d",s)},2e3)}}catch(o){}}(),String.prototype.startsWith||(String.prototype.startsWith=function(e,t){return t=t||0,this.substr(t,e.length)===e}),String.prototype.endsWith||(String.prototype.endsWith=function(e){return-1!==this.indexOf(e,this.length-e.length)}),function(){if(0<window.navigator.userAgent.indexOf(" Trident")){var e=document.getElementById("feedbackCheckCloseButton");e&&e.addEventListener("click",function(e){return e.preventDefault(),document.getElementById("feedbackCheck").checked=!1})}}(),window._isStandalone=window.navigator.standalone||window.matchMedia("(display-mode: standalone)").matches,"undefined"!=typeof _alwaysStickyNav&&_alwaysStickyNav&&(document.body.className+=" _alwaysstickynav"),_isStandalone&&(document.body.className+=" _mobilestandalone",[].forEach.call(document.getElementsByClassName("_hideOnStandalone"),function(e){e.setAttribute("style","display: none;")})),function(){if(window.navigator.standalone){var i,o=document.location,s=/^(a|html)$/i;document.addEventListener("click",function(e){for(i=e.target;!s.test(i.nodeName);)i=i.parentNode;var t=i.href,n=!t.startsWith("http"),a=t.startsWith([o.protocol,"//",o.host].join(""));"href"in i&&!e.defaultPrevented&&(n||a)&&(e.preventDefault(),o.href=t)},!1),[].forEach.call(document.getElementsByClassName("sharesocial"),function(e){e.removeAttribute("onclick")})}}();