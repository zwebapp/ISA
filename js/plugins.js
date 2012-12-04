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



/**
 * noty - jQuery Notification Plugin v2.0.3
 * Contributors: https://github.com/needim/noty/graphs/contributors
 *
 * Examples and Documentation - http://needim.github.com/noty/
 *
 * Licensed under the MIT licenses:
 * http://www.opensource.org/licenses/mit-license.php
 *
 **/

if(typeof Object.create!=='function'){Object.create=function(o){function F(){}F.prototype=o;return new F();};}(function($){var NotyObject={init:function(options){this.options=$.extend({},$.noty.defaults,options);this.options.layout=(this.options.custom)?$.noty.layouts['inline']:$.noty.layouts[this.options.layout];this.options.theme=$.noty.themes[this.options.theme];delete options.layout;delete options.theme;this.options=$.extend({},this.options,this.options.layout.options);this.options.id='noty_'+(new Date().getTime()*Math.floor(Math.random()*1000000));this.options=$.extend({},this.options,options);this._build();return this;},_build:function(){var $bar=$('<div class="noty_bar"></div>').attr('id',this.options.id);$bar.append(this.options.template).find('.noty_text').html(this.options.text);this.$bar=(this.options.layout.parent.object!==null)?$(this.options.layout.parent.object).css(this.options.layout.parent.css).append($bar):$bar;if(this.options.buttons){this.options.closeWith=[];this.options.timeout=false;var $buttons=$('<div/>').addClass('noty_buttons');(this.options.layout.parent.object!==null)?this.$bar.find('.noty_bar').append($buttons):this.$bar.append($buttons);var self=this;$.each(this.options.buttons,function(i,button){var $button=$('<button/>').addClass((button.addClass)?button.addClass:'gray').html(button.text).appendTo(self.$bar.find('.noty_buttons')).bind('click',function(){if($.isFunction(button.onClick)){button.onClick.call($button,self);}});});}this.$message=this.$bar.find('.noty_message');this.$closeButton=this.$bar.find('.noty_close');this.$buttons=this.$bar.find('.noty_buttons');$.noty.store[this.options.id]=this;},show:function(){var self=this;$(self.options.layout.container.selector).append(self.$bar);self.options.theme.style.apply(self);($.type(self.options.layout.css)==='function')?this.options.layout.css.apply(self.$bar):self.$bar.css(this.options.layout.css||{});self.$bar.addClass(self.options.layout.addClass);self.options.layout.container.style.apply($(self.options.layout.container.selector));self.options.theme.callback.onShow.apply(this);if($.inArray('click',self.options.closeWith)>-1)self.$bar.css('cursor','pointer').one('click',function(){self.close();});if($.inArray('hover',self.options.closeWith)>-1)self.$bar.one('mouseenter',function(){self.close();});if($.inArray('button',self.options.closeWith)>-1)self.$closeButton.one('click',function(){self.close();});if($.inArray('button',self.options.closeWith)==-1)self.$closeButton.remove();if(self.options.callback.onShow)self.options.callback.onShow.apply(self);self.$bar.animate(self.options.animation.open,self.options.animation.speed,self.options.animation.easing,function(){if(self.options.callback.afterShow)self.options.callback.afterShow.apply(self);self.shown=true;});if(self.options.timeout)self.$bar.delay(self.options.timeout).promise().done(function(){self.close();});return this;},close:function(){if(this.closed)return;var self=this;if(!this.shown){var queue=[];$.each($.noty.queue,function(i,n){if(n.options.id!=self.options.id){queue.push(n);}});$.noty.queue=queue;return;}self.$bar.addClass('i-am-closing-now');if(self.options.callback.onClose){self.options.callback.onClose.apply(self);}self.$bar.clearQueue().stop().animate(self.options.animation.close,self.options.animation.speed,self.options.animation.easing,function(){if(self.options.callback.afterClose)self.options.callback.afterClose.apply(self);}).promise().done(function(){if(self.options.modal){$.notyRenderer.setModalCount(-1);if($.notyRenderer.getModalCount()==0)$('.noty_modal').fadeOut('fast',function(){$(this).remove();});}$.notyRenderer.setLayoutCountFor(self,-1);if($.notyRenderer.getLayoutCountFor(self)==0)$(self.options.layout.container.selector).remove();if(typeof self.$bar!=='undefined'&&self.$bar!==null){self.$bar.remove();self.$bar=null;self.closed=true;}delete $.noty.store[self.options.id];self.options.theme.callback.onClose.apply(self);if(!self.options.dismissQueue){$.noty.ontap=true;$.notyRenderer.render();}});},setText:function(text){if(!this.closed){this.options.text=text;this.$bar.find('.noty_text').html(text);}return this;},setType:function(type){if(!this.closed){this.options.type=type;this.options.theme.style.apply(this);this.options.theme.callback.onShow.apply(this);}return this;},setTimeout:function(time){if(!this.closed){var self=this;this.options.timeout=time;self.$bar.delay(self.options.timeout).promise().done(function(){self.close();});}return this;},closed:false,shown:false};$.notyRenderer={};$.notyRenderer.init=function(options){var notification=Object.create(NotyObject).init(options);(notification.options.force)?$.noty.queue.unshift(notification):$.noty.queue.push(notification);$.notyRenderer.render();return($.noty.returns=='object')?notification:notification.options.id;};$.notyRenderer.render=function(){var instance=$.noty.queue[0];if($.type(instance)==='object'){if(instance.options.dismissQueue){$.notyRenderer.show($.noty.queue.shift());}else{if($.noty.ontap){$.notyRenderer.show($.noty.queue.shift());$.noty.ontap=false;}}}else{$.noty.ontap=true;}};$.notyRenderer.show=function(notification){if(notification.options.modal){$.notyRenderer.createModalFor(notification);$.notyRenderer.setModalCount(+1);}if($(notification.options.layout.container.selector).length==0){if(notification.options.custom){notification.options.custom.append($(notification.options.layout.container.object).addClass('i-am-new'));}else{$('body').append($(notification.options.layout.container.object).addClass('i-am-new'));}}else{$(notification.options.layout.container.selector).removeClass('i-am-new');}$.notyRenderer.setLayoutCountFor(notification,+1);notification.show();};$.notyRenderer.createModalFor=function(notification){if($('.noty_modal').length==0)$('<div/>').addClass('noty_modal').data('noty_modal_count',0).css(notification.options.theme.modal.css).prependTo($('body')).fadeIn('fast');};$.notyRenderer.getLayoutCountFor=function(notification){return $(notification.options.layout.container.selector).data('noty_layout_count')||0;};$.notyRenderer.setLayoutCountFor=function(notification,arg){return $(notification.options.layout.container.selector).data('noty_layout_count',$.notyRenderer.getLayoutCountFor(notification)+arg);};$.notyRenderer.getModalCount=function(){return $('.noty_modal').data('noty_modal_count')||0;};$.notyRenderer.setModalCount=function(arg){return $('.noty_modal').data('noty_modal_count',$.notyRenderer.getModalCount()+arg);};$.fn.noty=function(options){options.custom=$(this);return $.notyRenderer.init(options);};$.noty={};$.noty.queue=[];$.noty.ontap=true;$.noty.layouts={};$.noty.themes={};$.noty.returns='object';$.noty.store={};$.noty.get=function(id){return $.noty.store.hasOwnProperty(id)?$.noty.store[id]:false;};$.noty.close=function(id){return $.noty.get(id)?$.noty.get(id).close():false;};$.noty.setText=function(id,text){return $.noty.get(id)?$.noty.get(id).setText(text):false;};$.noty.setType=function(id,type){return $.noty.get(id)?$.noty.get(id).setType(type):false;};$.noty.clearQueue=function(){$.noty.queue=[];};$.noty.closeAll=function(){$.noty.clearQueue();$.each($.noty.store,function(id,noty){noty.close();});};var windowAlert=window.alert;$.noty.consumeAlert=function(options){window.alert=function(text){if(options)options.text=text;else options={text:text};$.notyRenderer.init(options);};};$.noty.stopConsumeAlert=function(){window.alert=windowAlert;};$.noty.defaults={layout:'top',theme:'defaultTheme',type:'alert',text:'',dismissQueue:true,template:'<div class="noty_message"><span class="noty_text"></span><div class="noty_close"></div></div>',animation:{open:{height:'toggle'},close:{height:'toggle'},easing:'swing',speed:500},timeout:false,force:false,modal:false,closeWith:['click'],callback:{onShow:function(){},afterShow:function(){},onClose:function(){},afterClose:function(){}},buttons:false};$(window).resize(function(){$.each($.noty.layouts,function(index,layout){layout.container.style.apply($(layout.container.selector));});});})(jQuery);function noty(options){var using_old=0,old_to_new={'animateOpen':'animation.open','animateClose':'animation.close','easing':'animation.easing','speed':'animation.speed','onShow':'callback.onShow','onShown':'callback.afterShow','onClose':'callback.onClose','onClosed':'callback.afterClose'};jQuery.each(options,function(key,value){if(old_to_new[key]){using_old++;var _new=old_to_new[key].split('.');if(!options[_new[0]])options[_new[0]]={};options[_new[0]][_new[1]]=(value)?value:function(){};delete options[key];}});if(!options.closeWith){options.closeWith=jQuery.noty.defaults.closeWith;}if(options.hasOwnProperty('closeButton')){using_old++;if(options.closeButton)options.closeWith.push('button');delete options.closeButton;}if(options.hasOwnProperty('closeOnSelfClick')){using_old++;if(options.closeOnSelfClick)options.closeWith.push('click');delete options.closeOnSelfClick;}if(options.hasOwnProperty('closeOnSelfOver')){using_old++;if(options.closeOnSelfOver)options.closeWith.push('hover');delete options.closeOnSelfOver;}if(options.hasOwnProperty('custom')){using_old++;if(options.custom.container!='null')options.custom=options.custom.container;}if(options.hasOwnProperty('cssPrefix')){using_old++;delete options.cssPrefix;}if(options.theme=='noty_theme_default'){using_old++;options.theme='defaultTheme';}if(!options.hasOwnProperty('dismissQueue')){if(options.layout=='topLeft'||options.layout=='topRight'||options.layout=='bottomLeft'||options.layout=='bottomRight'){options.dismissQueue=true;}else{options.dismissQueue=false;}}if(options.buttons){jQuery.each(options.buttons,function(i,button){if(button.click){using_old++;button.onClick=button.click;delete button.click;}if(button.type){using_old++;button.addClass=button.type;delete button.type;}});}if(using_old){if(typeof console!=="undefined"&&console.warn){console.warn('You are using noty v2 with v1.x.x options. @deprecated until v2.2.0 - Please update your options.');}}return jQuery.notyRenderer.init(options);}

// Center
;(function($){$.noty.layouts.center={name:'center',options:{},container:{object:'<ul id="noty_center_layout_container" />',selector:'ul#noty_center_layout_container',style:function(){$(this).css({position:'fixed',width:'310px',height:'auto',margin:0,padding:0,listStyleType:'none',zIndex:10000000});var dupe=$(this).clone().css({visibility:"hidden",display:"block",position:"absolute",top:0,left:0}).attr('id','dupe');$("body").append(dupe);dupe.find('.i-am-closing-now').remove();dupe.find('li').css('display','block');var actual_height=dupe.height();dupe.remove();if($(this).hasClass('i-am-new')){$(this).css({left:($(window).width()-$(this).outerWidth(false))/2+'px',top:($(window).height()-actual_height)/2+'px'});}else{$(this).animate({left:($(window).width()-$(this).outerWidth(false))/2+'px',top:($(window).height()-actual_height)/2+'px'},500);}}},parent:{object:'<li />',selector:'li',css:{}},css:{display:'none',width:'310px'},addClass:''};})(jQuery);

// TopCenter
;(function($){$.noty.layouts.topCenter={name:'topCenter',options:{},container:{object:'<ul id="noty_topCenter_layout_container" />',selector:'ul#noty_topCenter_layout_container',style:function(){$(this).css({top:20,left:0,position:'fixed',width:'310px',height:'auto',margin:0,padding:0,listStyleType:'none',zIndex:10000000});$(this).css({left:($(window).width()-$(this).outerWidth(false))/2+'px'});}},parent:{object:'<li />',selector:'li',css:{}},css:{display:'none',width:'310px'},addClass:''};})(jQuery);

// Default
;(function($){$.noty.themes.defaultTheme={name:'defaultTheme',helpers:{borderFix:function(){if(this.options.dismissQueue){var selector=this.options.layout.container.selector+' '+this.options.layout.parent.selector;switch(this.options.layout.name){case'top':$(selector).css({borderRadius:'0px 0px 0px 0px'});$(selector).last().css({borderRadius:'0px 0px 5px 5px'});break;case'topCenter':case'topLeft':case'topRight':case'bottomCenter':case'bottomLeft':case'bottomRight':case'center':case'centerLeft':case'centerRight':case'inline':$(selector).css({borderRadius:'0px 0px 0px 0px'});$(selector).first().css({'border-top-left-radius':'5px','border-top-right-radius':'5px'});$(selector).last().css({'border-bottom-left-radius':'5px','border-bottom-right-radius':'5px'});break;case'bottom':$(selector).css({borderRadius:'0px 0px 0px 0px'});$(selector).first().css({borderRadius:'5px 5px 0px 0px'});break;default:break;}}}},modal:{css:{position:'fixed',width:'100%',height:'100%',backgroundColor:'#000',zIndex:10000,opacity:0.6,display:'none',left:0,top:0}},style:function(){this.$bar.css({overflow:'hidden',background:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAoCAYAAAAPOoFWAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAPZJREFUeNq81tsOgjAMANB2ov7/7ypaN7IlIwi9rGuT8QSc9EIDAsAznxvY4pXPKr05RUE5MEVB+TyWfCEl9LZApYopCmo9C4FKSMtYoI8Bwv79aQJU4l6hXXCZrQbokJEksxHo9KMOgc6w1atHXM8K9DVC7FQnJ0i8iK3QooGgbnyKgMDygBWyYFZoqx4qS27KqLZJjA1D0jK6QJcYEQEiWv9PGkTsbqxQ8oT+ZtZB6AkdsJnQDnMoHXHLGKOgDYuCWmYhEERCI5gaamW0bnHdA3k2ltlIN+2qKRyCND0bhqSYCyTB3CAOc4WusBEIpkeBuPgJMAAX8Hs1NfqHRgAAAABJRU5ErkJggg==') repeat-x scroll left top #fff"});this.$message.css({fontSize:'13px',lineHeight:'16px',textAlign:'center',padding:'8px 10px 9px',width:'auto',position:'relative'});this.$closeButton.css({position:'absolute',top:4,right:4,width:10,height:10,background:"url(data:image/png;base64,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)",display:'none',cursor:'pointer'});this.$buttons.css({padding:5,textAlign:'right',borderTop:'1px solid #ccc',backgroundColor:'#fff'});this.$buttons.find('button').css({marginLeft:5});this.$buttons.find('button:first').css({marginLeft:0});this.$bar.bind({mouseenter:function(){$(this).find('.noty_close').fadeIn();},mouseleave:function(){$(this).find('.noty_close').fadeOut();}});switch(this.options.layout.name){case'top':this.$bar.css({borderRadius:'0px 0px 5px 5px',borderBottom:'2px solid #eee',borderLeft:'2px solid #eee',borderRight:'2px solid #eee',boxShadow:"0 2px 4px rgba(0, 0, 0, 0.1)"});break;case'topCenter':case'center':case'bottomCenter':case'inline':this.$bar.css({borderRadius:'5px',border:'1px solid #eee',boxShadow:"0 2px 4px rgba(0, 0, 0, 0.1)"});this.$message.css({fontSize:'13px',textAlign:'center'});break;case'topLeft':case'topRight':case'bottomLeft':case'bottomRight':case'centerLeft':case'centerRight':this.$bar.css({borderRadius:'5px',border:'1px solid #eee',boxShadow:"0 2px 4px rgba(0, 0, 0, 0.1)"});this.$message.css({fontSize:'13px',textAlign:'left'});break;case'bottom':this.$bar.css({borderRadius:'5px 5px 0px 0px',borderTop:'2px solid #eee',borderLeft:'2px solid #eee',borderRight:'2px solid #eee',boxShadow:"0 -2px 4px rgba(0, 0, 0, 0.1)"});break;default:this.$bar.css({border:'2px solid #eee',boxShadow:"0 2px 4px rgba(0, 0, 0, 0.1)"});break;}switch(this.options.type){case'alert':case'notification':this.$bar.css({backgroundColor:'#FFF',borderColor:'#CCC',color:'#444'});break;case'warning':this.$bar.css({backgroundColor:'#FFEAA8',borderColor:'#FFC237',color:'#826200'});this.$buttons.css({borderTop:'1px solid #FFC237'});break;case'error':this.$bar.css({backgroundColor:'red',borderColor:'darkred',color:'#FFF'});this.$message.css({fontWeight:'bold'});this.$buttons.css({borderTop:'1px solid darkred'});break;case'information':this.$bar.css({backgroundColor:'#57B7E2',borderColor:'#0B90C4',color:'#FFF'});this.$buttons.css({borderTop:'1px solid #0B90C4'});break;case'success':this.$bar.css({backgroundColor:'lightgreen',borderColor:'#50C24E',color:'darkgreen'});this.$buttons.css({borderTop:'1px solid #50C24E'});break;default:this.$bar.css({backgroundColor:'#FFF',borderColor:'#CCC',color:'#444'});break;}},callback:{onShow:function(){$.noty.themes.defaultTheme.helpers.borderFix.apply(this);},onClose:function(){$.noty.themes.defaultTheme.helpers.borderFix.apply(this);}}};})(jQuery);