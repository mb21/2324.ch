!function(c,s){"use strict";var o=0,i=333,a=15,e=function(t){for(var e,o,n=document.querySelectorAll(t),r=0;r<n.length;r++){if(!(e=n[r].id))throw"ScrollTo cannot scroll to targets without IDs.";o=document.querySelectorAll('a[href="#'+e+'"]');for(var l=0;l<o.length;l++)o[l].onclick=u}},u=function(){var t=this.attributes.href.nodeValue.toString(),e=t.substr(0,t.indexOf("#")),o=t.substr(t.indexOf("#")+1),n=document.getElementById(o),r=h(),l=m(n);return f(r,l,a),c.history&&"function"==typeof c.history.pushState&&c.history.pushState({},s,e+"#"+o),!1},f=function t(e,o,n){if(i-n<a)c.setTimeout(c.scrollTo,i-n,0,o);else{var r=(o-e)*d(n/i)+e;c.scrollTo(0,r);var l=n+a;c.setTimeout(t,a,e,o,l)}},d=function(t){var e=t*Math.PI;return.5*-Math.cos(e)+.5},m=function(t){for(var e=-1*o;t.offsetParent!=s&&null!=t.offsetParent;)e+=t.offsetTop+(null!=t.clientTop?t.clientTop:0),t=t.offsetParent;return e},h=function(){return c.pageYOffset!==s?c.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop};c.smoothScroll={registerTargets:e,scrollTo:function(t){f(h(),m(t),a)},scrollBy:function(t){var e=h();f(e,e+t,a)}}}(window),window.addEventListener("load",function(){smoothScroll.registerTargets(".title-box");var t=document.getElementById("homeNav"),e=document.getElementById("hamburger");if(t)for(var o=t.getElementsByTagName("a"),n=0;n<o.length;n++)"noScrollOnClick"!=o[n].className&&o[n].addEventListener("click",function(){e&&(e.checked=!1)});var r=document.getElementsByClassName("scrolldownarrow");for(n=0;n<r.length;n++)r[n].onclick=function(){smoothScroll.scrollBy(400)};if(document.location.hash){var l=document.getElementById(document.location.hash.substr(1));setTimeout(smoothScroll.scrollTo.bind(this,l),0)}},!1);