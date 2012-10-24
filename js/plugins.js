// Avoid `console` errors in browsers that lack a console.
if (!(window.console && console.log)) {
    (function() {
        var noop = function() {};
        var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'markTimeline', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
        var length = methods.length;
        var console = window.console = {};
        while (length--) {
            console[methods[length]] = noop;
        }
    }());
}

// Place any jQuery/helper plugins in here.


/*!
 * meny 1.2
 * http://lab.hakim.se/meny
 * MIT licensed
 *
 * Created by Hakim El Hattab (http://hakim.se, @hakimel)
 */
var Meny={create:function(a){return(function(){if(!a||!a.menuElement||!a.contentsElement){throw"You need to specify which menu and contents elements to use.";
}if(a.menuElement.parentNode!==a.contentsElement.parentNode){throw"The menu and contents elements must have the same parent.";}var J="top",K="right",c="bottom",N="left";
var F="WebkitPerspective" in document.body.style||"MozPerspective" in document.body.style||"msPerspective" in document.body.style||"OPerspective" in document.body.style||"perspective" in document.body.style;
var D={width:300,height:300,position:N,threshold:40,overlap:6,transitionDuration:"0.5s",transitionEasing:"ease"};var e={menu:a.menuElement,contents:a.contentsElement,wrapper:a.menuElement.parentNode,cover:null};
var A=e.wrapper.offsetLeft,z=e.wrapper.offsetTop,t=null,r=null,q=null,o=null,f=false,m=false;var l,j,G,n,O,V,S,x,d,B;var w,y,E;Meny.extend(D,a);i();g();
v();C();Q();R();function i(){G="";S="";switch(D.position){case J:l="50% 0%";j="rotateX( 30deg ) translateY( -100% ) translateY( "+D.overlap+"px )";V="50% 0";
x="translateY( "+D.height+"px ) rotateX( -15deg )";n={top:"-"+(D.height-D.overlap)+"px"};O={top:"0px"};d={top:"0px"};B={top:D.height+"px"};break;case K:l="100% 50%";
j="rotateY( 30deg ) translateX( 100% ) translateX( -2px ) scale( 1.01 )";V="100% 50%";x="translateX( -"+D.width+"px ) rotateY( -15deg )";n={right:"-"+(D.width-D.overlap)+"px"};
O={right:"0px"};d={left:"0px"};B={left:"-"+D.width+"px"};break;case c:l="50% 100%";j="rotateX( -30deg ) translateY( 100% ) translateY( -"+D.overlap+"px )";
V="50% 100%";x="translateY( -"+D.height+"px ) rotateX( 15deg )";n={bottom:"-"+(D.height-D.overlap)+"px"};O={bottom:"0px"};d={top:"0px"};B={top:"-"+D.height+"px"};
break;default:l="100% 50%";j="translateX( -100% ) translateX( "+D.overlap+"px ) scale( 1.01 ) rotateY( -30deg )";V="0 50%";x="translateX( "+D.width+"px ) rotateY( 15deg )";
n={left:"-"+(D.width-D.overlap)+"px"};O={left:"0px"};d={left:"0px"};B={left:D.width+"px"};break;}}function g(){Meny.addClass(e.wrapper,"meny-"+D.position);
e.wrapper.style[Meny.prefix("perspective")]="800px";e.wrapper.style[Meny.prefix("perspectiveOrigin")]=V;}function v(){e.cover=document.createElement("div");
e.cover.style.position="absolute";e.cover.style.display="block";e.cover.style.width="100%";e.cover.style.height="100%";e.cover.style.left=0;e.cover.style.top=0;
e.cover.style.zIndex=1000;e.cover.style.visibility="hidden";e.cover.style.opacity=0;try{e.cover.style.background="rgba( 0, 0, 0, 0.4 )";e.cover.style.background="-ms-linear-gradient("+D.position+", rgba(0,0,0,0.20) 0%,rgba(0,0,0,0.65) 100%)";
e.cover.style.background="-moz-linear-gradient("+D.position+", rgba(0,0,0,0.20) 0%,rgba(0,0,0,0.65) 100%)";e.cover.style.background="-webkit-linear-gradient("+D.position+", rgba(0,0,0,0.20) 0%,rgba(0,0,0,0.65) 100%)";
}catch(W){}if(F){e.cover.style[Meny.prefix("transition")]="all "+D.transitionDuration+" "+D.transitionEasing;}e.contents.appendChild(e.cover);}function C(){var W=e.menu.style;
switch(D.position){case J:W.width="100%";W.height=D.height+"px";break;case K:W.right="0";W.width=D.width+"px";W.height="100%";break;case c:W.bottom="0";
W.width="100%";W.height=D.height+"px";break;case N:W.width=D.width+"px";W.height="100%";break;}W.position="fixed";W.display="block";W.zIndex=1;if(F){W[Meny.prefix("transform")]=j;
W[Meny.prefix("transformOrigin")]=l;W[Meny.prefix("transition")]="all "+D.transitionDuration+" "+D.transitionEasing;}else{Meny.extend(W,n);}}function Q(){var W=e.contents.style;
if(F){W[Meny.prefix("transform")]=S;W[Meny.prefix("transformOrigin")]=V;W[Meny.prefix("transition")]="all "+D.transitionDuration+" "+D.transitionEasing;
}else{W.position=W.position.match(/relative|absolute|fixed/gi)?W.position:"relative";Meny.extend(W,d);}}function R(){if("ontouchstart" in window){Meny.bindEvent(document,"touchstart",L);
Meny.bindEvent(document,"touchend",H);}else{Meny.bindEvent(document,"mousedown",M);Meny.bindEvent(document,"mouseup",U);Meny.bindEvent(document,"mousemove",b);
}}function u(){if(!f){f=true;Meny.addClass(e.wrapper,"meny-active");e.cover.style.height=e.contents.scrollHeight+"px";e.cover.style.visibility="visible";
if(F){e.cover.style.opacity=1;e.contents.style[Meny.prefix("transform")]=x;e.menu.style[Meny.prefix("transform")]=G;}else{w&&w.stop();w=Meny.animate(e.menu,O,500);
y&&y.stop();y=Meny.animate(e.contents,B,500);E&&E.stop();E=Meny.animate(e.cover,{opacity:1},500);}Meny.dispatchEvent(e.menu,"open");}}function I(){if(f){f=false;
Meny.removeClass(e.wrapper,"meny-active");if(F){e.cover.style.visibility="hidden";e.cover.style.opacity=0;e.contents.style[Meny.prefix("transform")]=S;
e.menu.style[Meny.prefix("transform")]=j;}else{w&&w.stop();w=Meny.animate(e.menu,n,500);y&&y.stop();y=Meny.animate(e.contents,d,500);E&&E.stop();E=Meny.animate(e.cover,{opacity:0},500,function(){e.cover.style.visibility="hidden";
});}Meny.dispatchEvent(e.menu,"close");}}function M(W){m=true;}function b(Z){if(!m){var W=Z.clientX-A,aa=Z.clientY-z;switch(D.position){case J:if(aa>D.height){I();
}else{if(aa<D.threshold){u();}}break;case K:var X=e.wrapper.offsetWidth;if(W<X-D.width){I();}else{if(W>X-D.threshold){u();}}break;case c:var Y=e.wrapper.offsetHeight;
if(aa<Y-D.height){I();}else{if(aa>Y-D.threshold){u();}}break;case N:if(W>D.width){I();}else{if(W<D.threshold){u();}}break;}}}function U(W){m=false;}function L(W){t=W.touches[0].clientX-A;
r=W.touches[0].clientY-z;q=null;o=null;Meny.bindEvent(document,"touchmove",P);}function P(X){q=X.touches[0].clientX-A;o=X.touches[0].clientY-z;var W=null;
if(Math.abs(q-t)>Math.abs(o-r)){if(q<t-D.threshold){W=T;}else{if(q>t+D.threshold){W=p;}}}else{if(o<r-D.threshold){W=s;}else{if(o>r+D.threshold){W=h;}}}if(W&&W()){X.preventDefault();
}}function H(W){Meny.unbindEvent(document,"touchmove",P);if(q===null&&o===null){k();}}function k(){var W=(D.position===J&&r>D.height)||(D.position===K&&t<e.wrapper.offsetWidth-D.width)||(D.position===c&&r<e.wrapper.offsetHeight-D.height)||(D.position===N&&t<D.width);
if(W){I();}}function p(){if(D.position===K&&f){I();return true;}else{if(D.position===N&&!f){u();return true;}}}function T(){if(D.position===K&&!f){u();
return true;}else{if(D.position===N&&f){I();return true;}}}function h(){if(D.position===c&&f){I();return true;}else{if(D.position===J&&!f){u();return true;
}}}function s(){if(D.position===c&&!f){u();return true;}else{if(D.position===J&&f){I();return true;}}}return{open:u,close:I,isOpen:function(){return f;
},addEventListener:function(W,X){e.menu&&Meny.bindEvent(e.menu,W,X);},removeEventListener:function(W,X){e.menu&&Meny.unbindEvent(e.menu,W,X);}};})();},animate:function(b,a,c,d){return(function(){var g={};
for(var j in a){g[j]={start:parseFloat(b.style[j])||0,end:parseFloat(a[j]),unit:(typeof a[j]==="string"&&a[j].match(/px|em|%/gi))?a[j].match(/px|em|%/gi)[0]:""};
}var i=Date.now(),e;function h(){var k=1-Math.pow(1-((Date.now()-i)/c),5);for(var m in g){var l=g[m];b.style[m]=l.start+((l.end-l.start)*k)+l.unit;}if(k<1){e=setTimeout(h,1000/60);
}else{d&&d();f();}}function f(){clearTimeout(e);}h();return{stop:f};})();},extend:function(d,c){for(var e in c){d[e]=c[e];}},prefix:function(e,d){var b=e.slice(0,1).toUpperCase()+e.slice(1),g=["Webkit","Moz","O","ms"];
for(var c=0,a=g.length;c<a;c++){var f=g[c];if(typeof(d||document.body).style[f+b]!=="undefined"){return f+b;}}return e;},addClass:function(b,a){b.className=b.className.replace(/\s+$/gi,"")+" "+a;
},removeClass:function(b,a){b.className=b.className.replace(a,"");},bindEvent:function(a,c,b){if(a.addEventListener){a.addEventListener(c,b,false);}else{a.attachEvent("on"+c,b);
}},unbindEvent:function(a,c,b){if(a.removeEventListener){a.removeEventListener(c,b,false);}else{a.detachEvent("on"+c,b);}},dispatchEvent:function(b,c,a){if(b){var d=document.createEvent("HTMLEvents",1,2);
d.initEvent(c,true,true);Meny.extend(d,a);b.dispatchEvent(d);}},getQuery:function(){var a={};location.search.replace(/[A-Z0-9]+?=([\w|:|\/\.]*)/gi,function(b){a[b.split("=").shift()]=b.split("=").pop();
});return a;}};if(typeof Date.now!=="function"){Date.now=function(){return new Date().getTime();};}


/*
 * zClip :: jQuery ZeroClipboard v1.1.1
 * http://steamdev.com/zclip
 *
 * Copyright 2011, SteamDev
 * Released under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Date: Wed Jun 01, 2011
 */

(function(a){a.fn.zclip=function(c){if(typeof c=="object"&&!c.length){var b=a.extend({path:"ZeroClipboard.swf",copy:null,beforeCopy:null,afterCopy:null,clickAfter:true,setHandCursor:true,setCSSEffects:true},c);return this.each(function(){var e=a(this);if(e.is(":visible")&&(typeof b.copy=="string"||a.isFunction(b.copy))){ZeroClipboard.setMoviePath(b.path);var d=new ZeroClipboard.Client();if(a.isFunction(b.copy)){e.bind("zClip_copy",b.copy)}if(a.isFunction(b.beforeCopy)){e.bind("zClip_beforeCopy",b.beforeCopy)}if(a.isFunction(b.afterCopy)){e.bind("zClip_afterCopy",b.afterCopy)}d.setHandCursor(b.setHandCursor);d.setCSSEffects(b.setCSSEffects);d.addEventListener("mouseOver",function(f){e.trigger("mouseenter")});d.addEventListener("mouseOut",function(f){e.trigger("mouseleave")});d.addEventListener("mouseDown",function(f){e.trigger("mousedown");if(!a.isFunction(b.copy)){d.setText(b.copy)}else{d.setText(e.triggerHandler("zClip_copy"))}if(a.isFunction(b.beforeCopy)){e.trigger("zClip_beforeCopy")}});d.addEventListener("complete",function(f,g){if(a.isFunction(b.afterCopy)){e.trigger("zClip_afterCopy")}else{if(g.length>500){g=g.substr(0,500)+"...\n\n("+(g.length-500)+" characters not shown)"}e.removeClass("hover");alert("Copied text to clipboard:\n\n "+g)}if(b.clickAfter){e.trigger("click")}});d.glue(e[0],e.parent()[0]);a(window).bind("load resize",function(){d.reposition()})}})}else{if(typeof c=="string"){return this.each(function(){var f=a(this);c=c.toLowerCase();var e=f.data("zclipId");var d=a("#"+e+".zclip");if(c=="remove"){d.remove();f.removeClass("active hover")}else{if(c=="hide"){d.hide();f.removeClass("active hover")}else{if(c=="show"){d.show()}}}})}}}})(jQuery);var ZeroClipboard={version:"1.0.7",clients:{},moviePath:"ZeroClipboard.swf",nextId:1,$:function(a){if(typeof(a)=="string"){a=document.getElementById(a)}if(!a.addClass){a.hide=function(){this.style.display="none"};a.show=function(){this.style.display=""};a.addClass=function(b){this.removeClass(b);this.className+=" "+b};a.removeClass=function(d){var e=this.className.split(/\s+/);var b=-1;for(var c=0;c<e.length;c++){if(e[c]==d){b=c;c=e.length}}if(b>-1){e.splice(b,1);this.className=e.join(" ")}return this};a.hasClass=function(b){return !!this.className.match(new RegExp("\\s*"+b+"\\s*"))}}return a},setMoviePath:function(a){this.moviePath=a},dispatch:function(d,b,c){var a=this.clients[d];if(a){a.receiveEvent(b,c)}},register:function(b,a){this.clients[b]=a},getDOMObjectPosition:function(c,a){var b={left:0,top:0,width:c.width?c.width:c.offsetWidth,height:c.height?c.height:c.offsetHeight};if(c&&(c!=a)){b.left+=c.offsetLeft;b.top+=c.offsetTop}return b},Client:function(a){this.handlers={};this.id=ZeroClipboard.nextId++;this.movieId="ZeroClipboardMovie_"+this.id;ZeroClipboard.register(this.id,this);if(a){this.glue(a)}}};ZeroClipboard.Client.prototype={id:0,ready:false,movie:null,clipText:"",handCursorEnabled:true,cssEffects:true,handlers:null,glue:function(d,b,e){this.domElement=ZeroClipboard.$(d);var f=99;if(this.domElement.style.zIndex){f=parseInt(this.domElement.style.zIndex,10)+1}if(typeof(b)=="string"){b=ZeroClipboard.$(b)}else{if(typeof(b)=="undefined"){b=document.getElementsByTagName("body")[0]}}var c=ZeroClipboard.getDOMObjectPosition(this.domElement,b);this.div=document.createElement("div");this.div.className="zclip";this.div.id="zclip-"+this.movieId;$(this.domElement).data("zclipId","zclip-"+this.movieId);var a=this.div.style;a.position="absolute";a.left=""+c.left+"px";a.top=""+c.top+"px";a.width=""+c.width+"px";a.height=""+c.height+"px";a.zIndex=f;if(typeof(e)=="object"){for(addedStyle in e){a[addedStyle]=e[addedStyle]}}b.appendChild(this.div);this.div.innerHTML=this.getHTML(c.width,c.height)},getHTML:function(d,a){var c="";var b="id="+this.id+"&width="+d+"&height="+a;if(navigator.userAgent.match(/MSIE/)){var e=location.href.match(/^https/i)?"https://":"http://";c+='<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="'+e+'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="'+d+'" height="'+a+'" id="'+this.movieId+'" align="middle"><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="false" /><param name="movie" value="'+ZeroClipboard.moviePath+'" /><param name="loop" value="false" /><param name="menu" value="false" /><param name="quality" value="best" /><param name="bgcolor" value="#ffffff" /><param name="flashvars" value="'+b+'"/><param name="wmode" value="transparent"/></object>'}else{c+='<embed id="'+this.movieId+'" src="'+ZeroClipboard.moviePath+'" loop="false" menu="false" quality="best" bgcolor="#ffffff" width="'+d+'" height="'+a+'" name="'+this.movieId+'" align="middle" allowScriptAccess="always" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" flashvars="'+b+'" wmode="transparent" />'}return c},hide:function(){if(this.div){this.div.style.left="-2000px"}},show:function(){this.reposition()},destroy:function(){if(this.domElement&&this.div){this.hide();this.div.innerHTML="";var a=document.getElementsByTagName("body")[0];try{a.removeChild(this.div)}catch(b){}this.domElement=null;this.div=null}},reposition:function(c){if(c){this.domElement=ZeroClipboard.$(c);if(!this.domElement){this.hide()}}if(this.domElement&&this.div){var b=ZeroClipboard.getDOMObjectPosition(this.domElement);var a=this.div.style;a.left=""+b.left+"px";a.top=""+b.top+"px"}},setText:function(a){this.clipText=a;if(this.ready){this.movie.setText(a)}},addEventListener:function(a,b){a=a.toString().toLowerCase().replace(/^on/,"");if(!this.handlers[a]){this.handlers[a]=[]}this.handlers[a].push(b)},setHandCursor:function(a){this.handCursorEnabled=a;if(this.ready){this.movie.setHandCursor(a)}},setCSSEffects:function(a){this.cssEffects=!!a},receiveEvent:function(d,f){d=d.toString().toLowerCase().replace(/^on/,"");switch(d){case"load":this.movie=document.getElementById(this.movieId);if(!this.movie){var c=this;setTimeout(function(){c.receiveEvent("load",null)},1);return}if(!this.ready&&navigator.userAgent.match(/Firefox/)&&navigator.userAgent.match(/Windows/)){var c=this;setTimeout(function(){c.receiveEvent("load",null)},100);this.ready=true;return}this.ready=true;try{this.movie.setText(this.clipText)}catch(h){}try{this.movie.setHandCursor(this.handCursorEnabled)}catch(h){}break;case"mouseover":if(this.domElement&&this.cssEffects){this.domElement.addClass("hover");if(this.recoverActive){this.domElement.addClass("active")}}break;case"mouseout":if(this.domElement&&this.cssEffects){this.recoverActive=false;if(this.domElement.hasClass("active")){this.domElement.removeClass("active");this.recoverActive=true}this.domElement.removeClass("hover")}break;case"mousedown":if(this.domElement&&this.cssEffects){this.domElement.addClass("active")}break;case"mouseup":if(this.domElement&&this.cssEffects){this.domElement.removeClass("active");this.recoverActive=false}break}if(this.handlers[d]){for(var b=0,a=this.handlers[d].length;b<a;b++){var g=this.handlers[d][b];if(typeof(g)=="function"){g(this,f)}else{if((typeof(g)=="object")&&(g.length==2)){g[0][g[1]](this,f)}else{if(typeof(g)=="string"){window[g](this,f)}}}}}}};