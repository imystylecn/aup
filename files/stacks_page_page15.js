
// 'stacks' is the Stacks global object.
// All of the other Stacks related Javascript will 
// be attatched to it.
var stacks = {};


// this call to jQuery gives us access to the globaal
// jQuery object. 
// 'noConflict' removes the '$' variable.
// 'true' removes the 'jQuery' variable.
// removing these globals reduces conflicts with other 
// jQuery versions that might be running on this page.
stacks.jQuery = jQuery.noConflict(true);

// Javascript for stacks_in_879_page15
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.stacks_in_879_page15 = {};

// A closure is defined and assigned to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for referring
// to this object from elsewhere.
stacks.stacks_in_879_page15 = (function(stack) {

	// When jQuery is used it will be available as $ and jQuery but only
	// inside the closure.
	var jQuery = stacks.jQuery;
	var $ = jQuery;
	
//-- Fluid Image v1.9.0 Copyright @2010-2012 Joe Workman --//
var addEvent=function(){return document.addEventListener?function(a,c,d){if(a&&a.nodeName||a===window)a.addEventListener(c,d,!1);else if(a&&a.length)for(var b=0;b<a.length;b++)addEvent(a[b],c,d)}:function(a,c,d){if(a&&a.nodeName||a===window)a.attachEvent("on"+c,function(){return d.call(a,window.event)});else if(a&&a.length)for(var b=0;b<a.length;b++)addEvent(a[b],c,d)}}();var responsiveEnhance=function(img,width,monitor){if(img.length){for(var i=0,len=img.length;i<len;i++){responsiveEnhance(img[i],width,monitor);}}else{if(((' '+img.className+' ').replace(/[\n\t]/g,' ').indexOf(' large ')==-1)&&img.clientWidth>width){var fullimg=new Image();addEvent(fullimg,'load',function(e){img.src=this.src;img.className+=' large';});fullimg.src=img.getAttribute('data-fullsrc');}
if(monitor!=false){addEvent(window,'resize',function(e){responsiveEnhance(img,width,false);});addEvent(img,'load',function(e){responsiveEnhance(img,width,false);});}}};function detectIE789(){var version;if(navigator.appName=='Microsoft Internet Explorer'){var ua=navigator.userAgent;var re=new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");if(re.exec(ua)!=null){version=parseFloat(RegExp.$1)}if(version<=8.0){return true}else{if(version==9.0){if(document.compatMode=="BackCompat"){var mA=document.createElement("meta");mA.content="IE=EmulateIE8";document.getElementsByTagName('head')[0].appendChild(mA);return true}else{return false}}return false}}else{return false}}
$(document).ready(function(){var image=$('#stacks_in_879_page15 img.imageStyle:first');var version=parseInt($.browser.version);if(!($.browser.msie&&version<=8)){var source=image.attr('src');var responsiveWidth=Math.round(image.attr('width')*0.65);responsiveWidth=responsiveWidth>500?500:responsiveWidth;image.attr('data-fullsrc',source);image.attr('src','files/thumb_879.png');responsiveEnhance(image,responsiveWidth);}var width=image.attr('width');image.css('max-width',width+'px');if(detectIE789())image.css('width','auto');});

	return stack;
})(stacks.stacks_in_879_page15);


// Javascript for stacks_in_881_page15
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.stacks_in_881_page15 = {};

// A closure is defined and assigned to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for referring
// to this object from elsewhere.
stacks.stacks_in_881_page15 = (function(stack) {

	// When jQuery is used it will be available as $ and jQuery but only
	// inside the closure.
	var jQuery = stacks.jQuery;
	var $ = jQuery;
	
var $myMenu = jQuery.noConflict(); 

$myMenu(document).ready(function() {
	
	var myMenuParent = $myMenu('#stacks_in_881_page15').parent();
	$myMenu('#stacks_in_881_page15').css('overflow','visible');
	$myMenu(myMenuParent).css('overflow','visible');
	
	$myMenu(".nimblehost_myMenu_stacks_in_881_page15 ul ul").parent().addClass("ddarrow").append("<span class=\"childIndicator\"></span>");
	
	var myMenuConfig = { sensitivity: 3, interval: 50, over: revealMyMenuChildren, timeout: 400, out: hideMyMenuChildren };

	function revealMyMenuChildren(){ $myMenu(this).find("ul").filter(":first").css({visibility: "visible",display: "none",opacity: 1}).slideDown(300); }
	
	function hideMyMenuChildren(){ $myMenu(this).find("ul").filter(":first").fadeTo(200, 0, function(){ $myMenu(this).slideUp(300); }); }
	
	$myMenu('body').on('mouseenter', function(){ $myMenu('.nimblehost_myMenu_stacks_in_881_page15 li').hoverIntent(myMenuConfig); });
	
	
	
	
	
	
	
	toggleMobileMenu();
	
	function toggleMobileMenu() {
		$myMenu('.myMenu_mobileToggle').click(function(){
			 if ( $myMenu('.nimblehost_myMenu_stacks_in_881_page15').is(':visible') ) {
			 	$myMenu('.nimblehost_myMenu_stacks_in_881_page15').fadeOut(400);
			 } else {
			 	var scrollAmount = $myMenu(document).scrollTop() + 44;
			 	$myMenu('.nimblehost_myMenu_stacks_in_881_page15 ul li').hoverIntent(myMenuConfig);
			 	$myMenu('.nimblehost_myMenuOuterWrapper_stacks_in_881_page15').css('top',scrollAmount);
			 	$myMenu('.nimblehost_myMenu_stacks_in_881_page15').fadeIn(300);
			 }
		});
	}

	function visitorScreenSize() {
		myMenuSmallScreen = false;
		myMenuLargeScreen = true;
		// Only check for screensize if responsive support is turned on, otherwise everyone sees the same thing
		if ( enableResponsiveLayout ) {
			// Add necessary meta tag to make sure viewport is correctly sized
			$myMenu('head').prepend('<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />');
			if ( document.documentElement.clientWidth < 481 ) {
				myMenuSmallScreen = true;
				myMenuLargeScreen = false;
			}
		}
	}

	
});

/*  * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/  *  * Uses the built in easing capabilities added In jQuery 1.1  * to offer multiple easing options  *  * TERMS OF USE - jQuery Easing  *  * Open source under the BSD License.  *  * Copyright � 2008 George McGinley Smith  * All rights reserved.  *  * Redistribution and use in source and binary forms, with or without modification,  * are permitted provided that the following conditions are met:  *  * Redistributions of source code must retain the above copyright notice, this list of  * conditions and the following disclaimer.  * Redistributions in binary form must reproduce the above copyright notice, this list  * of conditions and the following disclaimer in the documentation and/or other materials  * provided with the distribution.  *  * Neither the name of the author nor the names of contributors may be used to endorse  * or promote products derived from this software without specific prior written permission.  *  * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY  * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF  * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE  *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,  *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE  *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED  * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING  *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED  * OF THE POSSIBILITY OF SUCH DAMAGE.  * */

/* t: current time, b: begInnIng value, c: change In value, d: duration */
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing, { def: 'easeOutQuad', swing: function (x, t, b, c, d) { /* alert(jQuery.easing.default); */ return jQuery.easing[jQuery.easing.def](x, t, b, c, d); }, easeInQuad: function (x, t, b, c, d) { return c*(t/=d)*t + b; }, easeOutQuad: function (x, t, b, c, d) { return -c *(t/=d)*(t-2) + b; }, easeInOutQuad: function (x, t, b, c, d) { if ((t/=d/2) < 1) { return c/2*t*t + b; } return -c/2 * ((--t)*(t-2) - 1) + b; }, easeInCubic: function (x, t, b, c, d) { return c*(t/=d)*t*t + b; }, easeOutCubic: function (x, t, b, c, d) { return c*((t=t/d-1)*t*t + 1) + b; }, easeInOutCubic: function (x, t, b, c, d) { if ((t/=d/2) < 1) { return c/2*t*t*t + b; } return c/2*((t-=2)*t*t + 2) + b; }, easeInQuart: function (x, t, b, c, d) { return c*(t/=d)*t*t*t + b; }, easeOutQuart: function (x, t, b, c, d) { return -c * ((t=t/d-1)*t*t*t - 1) + b; }, easeInOutQuart: function (x, t, b, c, d) { if ((t/=d/2) < 1) { return c/2*t*t*t*t + b; } return -c/2 * ((t-=2)*t*t*t - 2) + b; }, easeInQuint: function (x, t, b, c, d) { return c*(t/=d)*t*t*t*t + b; }, easeOutQuint: function (x, t, b, c, d) { return c*((t=t/d-1)*t*t*t*t + 1) + b; }, easeInOutQuint: function (x, t, b, c, d) { if ((t/=d/2) < 1) { return c/2*t*t*t*t*t + b; } return c/2*((t-=2)*t*t*t*t + 2) + b; }, easeInSine: function (x, t, b, c, d) { return -c * Math.cos(t/d * (Math.PI/2)) + c + b; }, easeOutSine: function (x, t, b, c, d) { return c * Math.sin(t/d * (Math.PI/2)) + b; }, easeInOutSine: function (x, t, b, c, d) { return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b; }, easeInExpo: function (x, t, b, c, d) { return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b; }, easeOutExpo: function (x, t, b, c, d) { return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b; }, easeInOutExpo: function (x, t, b, c, d) { if (t==0) { return b; } if (t==d) { return b+c; } if ((t/=d/2) < 1) { return c/2 * Math.pow(2, 10 * (t - 1)) + b; } return c/2 * (-Math.pow(2, -10 * --t) + 2) + b; }, easeInCirc: function (x, t, b, c, d) { return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b; }, easeOutCirc: function (x, t, b, c, d) { return c * Math.sqrt(1 - (t=t/d-1)*t) + b; }, easeInOutCirc: function (x, t, b, c, d) { if ((t/=d/2) < 1) { return -c/2 * (Math.sqrt(1 - t*t) - 1) + b; } return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b; }, easeInElastic: function (x, t, b, c, d) { var s=1.70158;var p=0;var a=c; if (t==0) { return b; }  if ((t/=d)==1) { return b+c; }  if (!p) { p=d*.3; } if (a < Math.abs(c)) { a=c; var s=p/4; } else { var s = p/(2*Math.PI) * Math.asin (c/a); } return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b; }, easeOutElastic: function (x, t, b, c, d) { var s=1.70158;var p=0;var a=c; if (t==0) { return b; }  if ((t/=d)==1) { return b+c; }  if (!p) { p=d*.3; } if (a < Math.abs(c)) { a=c; var s=p/4; } else { var s = p/(2*Math.PI) * Math.asin (c/a); } return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b; }, easeInOutElastic: function (x, t, b, c, d) { var s=1.70158;var p=0;var a=c; if (t==0) { return b; }  if ((t/=d/2)==2) { return b+c; }  if (!p) { p=d*(.3*1.5); } if (a < Math.abs(c)) { a=c; var s=p/4; } else { var s = p/(2*Math.PI) * Math.asin (c/a); } if (t < 1) { return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b; } return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b; }, easeInBack: function (x, t, b, c, d, s) { if (s == undefined) { s = 1.70158; } return c*(t/=d)*t*((s+1)*t - s) + b; }, easeOutBack: function (x, t, b, c, d, s) { if (s == undefined) { s = 1.70158; } return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b; }, easeInOutBack: function (x, t, b, c, d, s) { if (s == undefined) { s = 1.70158; } if ((t/=d/2) < 1) { return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b; } return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b; }, easeInBounce: function (x, t, b, c, d) { return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b; }, easeOutBounce: function (x, t, b, c, d) { if ((t/=d) < (1/2.75)) { return c*(7.5625*t*t) + b; } else if (t < (2/2.75)) { return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b; } else if (t < (2.5/2.75)) { return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b; } else { return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b; } }, easeInOutBounce: function (x, t, b, c, d) { if (t < d/2) { return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b; } return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b; } });

	
/**
* hoverIntent r6 // 2011.02.26 // jQuery 1.5.1+
* <http://cherne.net/brian/resources/jquery.hoverIntent.html>
* 
* @param  f  onMouseOver function || An object with configuration options
* @param  g  onMouseOut function  || Nothing (use configuration options object)
* @author    Brian Cherne brian(at)cherne(dot)net
*/
(function($){$.fn.hoverIntent=function(f,g){var cfg={sensitivity:7,interval:100,timeout:0};cfg=$.extend(cfg,g?{over:f,out:g}:f);var cX,cY,pX,pY;var track=function(ev){cX=ev.pageX;cY=ev.pageY};var compare=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);if((Math.abs(pX-cX)+Math.abs(pY-cY))<cfg.sensitivity){$(ob).unbind("mousemove",track);ob.hoverIntent_s=1;return cfg.over.apply(ob,[ev])}else{pX=cX;pY=cY;ob.hoverIntent_t=setTimeout(function(){compare(ev,ob)},cfg.interval)}};var delay=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);ob.hoverIntent_s=0;return cfg.out.apply(ob,[ev])};var handleHover=function(e){var ev=jQuery.extend({},e);var ob=this;if(ob.hoverIntent_t){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t)}if(e.type=="mouseenter"){pX=ev.pageX;pY=ev.pageY;$(ob).bind("mousemove",track);if(ob.hoverIntent_s!=1){ob.hoverIntent_t=setTimeout(function(){compare(ev,ob)},cfg.interval)}}else{$(ob).unbind("mousemove",track);if(ob.hoverIntent_s==1){ob.hoverIntent_t=setTimeout(function(){delay(ev,ob)},cfg.timeout)}}};return this.bind('mouseenter',handleHover).bind('mouseleave',handleHover)}})(jQuery);
	return stack;
})(stacks.stacks_in_881_page15);


// Javascript for stacks_in_883_page15
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.stacks_in_883_page15 = {};

// A closure is defined and assigned to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for referring
// to this object from elsewhere.
stacks.stacks_in_883_page15 = (function(stack) {

	// When jQuery is used it will be available as $ and jQuery but only
	// inside the closure.
	var jQuery = stacks.jQuery;
	var $ = jQuery;
	
//-- Fluid Columns v1.0.3 Copyright @2010-2012 Joe Workman --//

(function(a,b,c){"use strict";var d=function(a){return a.charAt(0).toUpperCase()+a.slice(1)},e="Moz Webkit Khtml O Ms".split(" "),f=function(a){var b=document.documentElement.style,c;if(typeof b[a]=="string")return a;a=d(a);for(var f=0,g=e.length;f<g;f++){c=e[f]+a;if(typeof b[c]=="string")return c}},g=f("transform"),h=f("transitionProperty"),i={csstransforms:function(){return!!g},csstransforms3d:function(){var a=!!f("perspective");if(a){var c=" -o- -moz- -ms- -webkit- -khtml- ".split(" "),d="@media ("+c.join("transform-3d),(")+"modernizr)",e=b("<style>"+d+"{#modernizr{height:3px}}"+"</style>").appendTo("head"),g=b('<div id="modernizr" />').appendTo("html");a=g.height()===3,g.remove(),e.remove()}return a},csstransitions:function(){return!!h}};if(a.Modernizr)for(var j in i)Modernizr.hasOwnProperty(j)||Modernizr.addTest(j,i[j]);else a.Modernizr=function(){var a={_version:"1.6ish: miniModernizr for Isotope"},c=" ",d,e;for(e in i)d=i[e](),a[e]=d,c+=" "+(d?"":"no-")+e;b("html").addClass(c);return a}();if(Modernizr.csstransforms){var k=Modernizr.csstransforms3d?{translate:function(a){return"translate3d("+a[0]+"px, "+a[1]+"px, 0) "},scale:function(a){return"scale3d("+a+", "+a+", 1) "}}:{translate:function(a){return"translate("+a[0]+"px, "+a[1]+"px) "},scale:function(a){return"scale("+a+") "}},l=function(a,c,d){var e=b.data(a,"isoTransform")||{},f={},h,i={},j;f[c]=d,b.extend(e,f);for(h in e)j=e[h],i[h]=k[h](j);var l=i.translate||"",m=i.scale||"",n=l+m;b.data(a,"isoTransform",e),a.style[g]=n};b.cssNumber.scale=!0,b.cssHooks.scale={set:function(a,b){l(a,"scale",b)},get:function(a,c){var d=b.data(a,"isoTransform");return d&&d.scale?d.scale:1}},b.fx.step.scale=function(a){b.cssHooks.scale.set(a.elem,a.now+a.unit)},b.cssNumber.translate=!0,b.cssHooks.translate={set:function(a,b){l(a,"translate",b)},get:function(a,c){var d=b.data(a,"isoTransform");return d&&d.translate?d.translate:[0,0]}}}var m,n;Modernizr.csstransitions&&(m={WebkitTransitionProperty:"webkitTransitionEnd",MozTransitionProperty:"transitionend",OTransitionProperty:"oTransitionEnd",transitionProperty:"transitionEnd"}[h],n=f("transitionDuration"));var o=b.event,p;o.special.smartresize={setup:function(){b(this).bind("resize",o.special.smartresize.handler)},teardown:function(){b(this).unbind("resize",o.special.smartresize.handler)},handler:function(a,b){var c=this,d=arguments;a.type="smartresize",p&&clearTimeout(p),p=setTimeout(function(){jQuery.event.handle.apply(c,d)},b==="execAsap"?0:100)}},b.fn.smartresize=function(a){return a?this.bind("smartresize",a):this.trigger("smartresize",["execAsap"])},b.Isotope=function(a,c,d){this.element=b(c),this._create(a),this._init(d)};var q=["overflow","position","width","height"],r=b(a);b.Isotope.settings={resizable:!0,layoutMode:"masonry",containerClass:"isotope",itemClass:"isotope-item",hiddenClass:"isotope-hidden",hiddenStyle:{opacity:0,scale:.001},visibleStyle:{opacity:1,scale:1},animationEngine:"best-available",animationOptions:{queue:!1,duration:800},sortBy:"original-order",sortAscending:!0,resizesContainer:!0,transformsEnabled:!b.browser.opera,itemPositionDataEnabled:!1},b.Isotope.prototype={_create:function(a){this.options=b.extend({},b.Isotope.settings,a),this.styleQueue=[],this.elemCount=0;var c=this.element[0].style;this.originalStyle={};for(var d=0,e=q.length;d<e;d++){var f=q[d];this.originalStyle[f]=c[f]||""}this.element.css({overflow:"hidden",position:"relative"}),this._updateAnimationEngine(),this._updateUsingTransforms();var g={"original-order":function(a,b){b.elemCount++;return b.elemCount},random:function(){return Math.random()}};this.options.getSortData=b.extend(this.options.getSortData,g),this.reloadItems();var h=b(document.createElement("div")).prependTo(this.element);this.offset=h.position(),h.remove();var i=this;setTimeout(function(){i.element.addClass(i.options.containerClass)},0),this.options.resizable&&r.bind("smartresize.isotope",function(){i.resize()}),this.element.delegate("."+this.options.hiddenClass,"click",function(){return!1})},_getAtoms:function(a){var b=this.options.itemSelector,c=b?a.filter(b).add(a.find(b)):a,d={position:"absolute"};this.usingTransforms&&(d.left=0,d.top=0),c.css(d).addClass(this.options.itemClass),this.updateSortData(c,!0);return c},_init:function(a){this.$filteredAtoms=this._filter(this.$allAtoms),this._sort(),this.reLayout(a)},option:function(a){if(b.isPlainObject(a)){this.options=b.extend(!0,this.options,a);var c;for(var e in a)c="_update"+d(e),this[c]&&this[c]()}},_updateAnimationEngine:function(){var a=this.options.animationEngine.toLowerCase().replace(/[ _\-]/g,""),b;switch(a){case"css":case"none":b=!1;break;case"jquery":b=!0;break;default:b=!Modernizr.csstransitions}this.isUsingJQueryAnimation=b,this._updateUsingTransforms()},_updateTransformsEnabled:function(){this._updateUsingTransforms()},_updateUsingTransforms:function(){var a=this.usingTransforms=this.options.transformsEnabled&&Modernizr.csstransforms&&Modernizr.csstransitions&&!this.isUsingJQueryAnimation;a||(delete this.options.hiddenStyle.scale,delete this.options.visibleStyle.scale),this.getPositionStyles=a?this._translate:this._positionAbs},_filter:function(a){var b=this.options.filter===""?"*":this.options.filter;if(!b)return a;var c=this.options.hiddenClass,d="."+c,e=a.filter(d),f=e;if(b!=="*"){f=e.filter(b);var g=a.not(d).not(b).addClass(c);this.styleQueue.push({$el:g,style:this.options.hiddenStyle})}this.styleQueue.push({$el:f,style:this.options.visibleStyle}),f.removeClass(c);return a.filter(b)},updateSortData:function(a,c){var d=this,e=this.options.getSortData,f,g;a.each(function(){f=b(this),g={};for(var a in e)!c&&a==="original-order"?g[a]=b.data(this,"isotope-sort-data")[a]:g[a]=e[a](f,d);b.data(this,"isotope-sort-data",g)})},_sort:function(){var a=this.options.sortBy,b=this._getSorter,c=this.options.sortAscending?1:-1,d=function(d,e){var f=b(d,a),g=b(e,a);f===g&&a!=="original-order"&&(f=b(d,"original-order"),g=b(e,"original-order"));return(f>g?1:f<g?-1:0)*c};this.$filteredAtoms.sort(d)},_getSorter:function(a,c){return b.data(a,"isotope-sort-data")[c]},_translate:function(a,b){return{translate:[a,b]}},_positionAbs:function(a,b){return{left:a,top:b}},_pushPosition:function(a,b,c){b+=this.offset.left,c+=this.offset.top;var d=this.getPositionStyles(b,c);this.styleQueue.push({$el:a,style:d}),this.options.itemPositionDataEnabled&&a.data("isotope-item-position",{x:b,y:c})},layout:function(a,b){var c=this.options.layoutMode;this["_"+c+"Layout"](a);if(this.options.resizesContainer){var d=this["_"+c+"GetContainerSize"]();this.styleQueue.push({$el:this.element,style:d})}this._processStyleQueue(a,b),this.isLaidOut=!0},_processStyleQueue:function(a,c){var d=this.isLaidOut?this.isUsingJQueryAnimation?"animate":"css":"css",e=this.options.animationOptions,f,g,h,i;g=function(a,b){b.$el[d](b.style,e)};if(this._isInserting&&this.isUsingJQueryAnimation)g=function(a,b){f=b.$el.hasClass("no-transition")?"css":d,b.$el[f](b.style,e)};else if(c){var j=!1,k=this;h=!0,i=function(){j||(c.call(k.element,a),j=!0)};if(this.isUsingJQueryAnimation&&d==="animate")e.complete=i,h=!1;else if(Modernizr.csstransitions){var l=0,o=this.styleQueue[0].$el,p;while(!o.length){p=this.styleQueue[l++];if(!p)return;o=p.$el}var q=parseFloat(getComputedStyle(o[0])[n]);q>0&&(g=function(a,b){b.$el[d](b.style,e).one(m,i)},h=!1)}}b.each(this.styleQueue,g),h&&i(),this.styleQueue=[]},resize:function(){this["_"+this.options.layoutMode+"ResizeChanged"]()&&this.reLayout()},reLayout:function(a){this["_"+this.options.layoutMode+"Reset"](),this.layout(this.$filteredAtoms,a)},addItems:function(a,b){var c=this._getAtoms(a);this.$allAtoms=this.$allAtoms.add(c),b&&b(c)},insert:function(a,b){this.element.append(a);var c=this;this.addItems(a,function(a){var d=c._filter(a);c._addHideAppended(d),c._sort(),c.reLayout(),c._revealAppended(d,b)})},appended:function(a,b){var c=this;this.addItems(a,function(a){c._addHideAppended(a),c.layout(a),c._revealAppended(a,b)})},_addHideAppended:function(a){this.$filteredAtoms=this.$filteredAtoms.add(a),a.addClass("no-transition"),this._isInserting=!0,this.styleQueue.push({$el:a,style:this.options.hiddenStyle})},_revealAppended:function(a,b){var c=this;setTimeout(function(){a.removeClass("no-transition"),c.styleQueue.push({$el:a,style:c.options.visibleStyle}),c._isInserting=!1,c._processStyleQueue(a,b)},10)},reloadItems:function(){this.$allAtoms=this._getAtoms(this.element.children())},remove:function(a){var b=this,c=function(){b.$allAtoms=b.$allAtoms.not(a),a.remove()};a.filter(":not(."+this.options.hiddenClass+")").length?(this.styleQueue.push({$el:a,style:this.options.hiddenStyle}),this.$filteredAtoms=this.$filteredAtoms.not(a),this._sort(),this.reLayout(c)):c()},shuffle:function(a){this.updateSortData(this.$allAtoms),this.options.sortBy="random",this._sort(),this.reLayout(a)},destroy:function(){var a=this.usingTransforms,b=this.options;this.$allAtoms.removeClass(b.hiddenClass+" "+b.itemClass).each(function(){var b=this.style;b.position="",b.top="",b.left="",b.opacity="",a&&(b[g]="")});var c=this.element[0].style;for(var d=0,e=q.length;d<e;d++){var f=q[d];c[f]=this.originalStyle[f]}this.element.unbind(".isotope").undelegate("."+b.hiddenClass,"click").removeClass(b.containerClass).removeData("isotope"),r.unbind(".isotope")},_getSegments:function(a){var b=this.options.layoutMode,c=a?"rowHeight":"columnWidth",e=a?"height":"width",f=a?"rows":"cols",g=this.element[e](),h,i=this.options[b]&&this.options[b][c]||this.$filteredAtoms["outer"+d(e)](!0)||g;h=Math.floor(g/i),h=Math.max(h,1),this[b][f]=h,this[b][c]=i},_checkIfSegmentsChanged:function(a){var b=this.options.layoutMode,c=a?"rows":"cols",d=this[b][c];this._getSegments(a);return this[b][c]!==d},_masonryReset:function(){this.masonry={},this._getSegments();var a=this.masonry.cols;this.masonry.colYs=[];while(a--)this.masonry.colYs.push(0)},_masonryLayout:function(a){var c=this,d=c.masonry;a.each(function(){var a=b(this),e=Math.ceil(a.outerWidth(!0)/d.columnWidth);e=Math.min(e,d.cols);if(e===1)c._masonryPlaceBrick(a,d.colYs);else{var f=d.cols+1-e,g=[],h,i;for(i=0;i<f;i++)h=d.colYs.slice(i,i+e),g[i]=Math.max.apply(Math,h);c._masonryPlaceBrick(a,g)}})},_masonryPlaceBrick:function(a,b){var c=Math.min.apply(Math,b),d=0;for(var e=0,f=b.length;e<f;e++)if(b[e]===c){d=e;break}var g=this.masonry.columnWidth*d,h=c;this._pushPosition(a,g,h);var i=c+a.outerHeight(!0),j=this.masonry.cols+1-f;for(e=0;e<j;e++)this.masonry.colYs[d+e]=i},_masonryGetContainerSize:function(){var a=Math.max.apply(Math,this.masonry.colYs);return{height:a}},_masonryResizeChanged:function(){return this._checkIfSegmentsChanged()},_fitRowsReset:function(){this.fitRows={x:0,y:0,height:0}},_fitRowsLayout:function(a){var c=this,d=this.element.width(),e=this.fitRows;a.each(function(){var a=b(this),f=a.outerWidth(!0),g=a.outerHeight(!0);e.x!==0&&f+e.x>d&&(e.x=0,e.y=e.height),c._pushPosition(a,e.x,e.y),e.height=Math.max(e.y+g,e.height),e.x+=f})},_fitRowsGetContainerSize:function(){return{height:this.fitRows.height}},_fitRowsResizeChanged:function(){return!0},_cellsByRowReset:function(){this.cellsByRow={index:0},this._getSegments(),this._getSegments(!0)},_cellsByRowLayout:function(a){var c=this,d=this.cellsByRow;a.each(function(){var a=b(this),e=d.index%d.cols,f=Math.floor(d.index/d.cols),g=Math.round((e+.5)*d.columnWidth-a.outerWidth(!0)/2),h=Math.round((f+.5)*d.rowHeight-a.outerHeight(!0)/2);c._pushPosition(a,g,h),d.index++})},_cellsByRowGetContainerSize:function(){return{height:Math.ceil(this.$filteredAtoms.length/this.cellsByRow.cols)*this.cellsByRow.rowHeight+this.offset.top}},_cellsByRowResizeChanged:function(){return this._checkIfSegmentsChanged()},_straightDownReset:function(){this.straightDown={y:0}},_straightDownLayout:function(a){var c=this;a.each(function(a){var d=b(this);c._pushPosition(d,0,c.straightDown.y),c.straightDown.y+=d.outerHeight(!0)})},_straightDownGetContainerSize:function(){return{height:this.straightDown.y}},_straightDownResizeChanged:function(){return!0},_masonryHorizontalReset:function(){this.masonryHorizontal={},this._getSegments(!0);var a=this.masonryHorizontal.rows;this.masonryHorizontal.rowXs=[];while(a--)this.masonryHorizontal.rowXs.push(0)},_masonryHorizontalLayout:function(a){var c=this,d=c.masonryHorizontal;a.each(function(){var a=b(this),e=Math.ceil(a.outerHeight(!0)/d.rowHeight);e=Math.min(e,d.rows);if(e===1)c._masonryHorizontalPlaceBrick(a,d.rowXs);else{var f=d.rows+1-e,g=[],h,i;for(i=0;i<f;i++)h=d.rowXs.slice(i,i+e),g[i]=Math.max.apply(Math,h);c._masonryHorizontalPlaceBrick(a,g)}})},_masonryHorizontalPlaceBrick:function(a,b){var c=Math.min.apply(Math,b),d=0;for(var e=0,f=b.length;e<f;e++)if(b[e]===c){d=e;break}var g=c,h=this.masonryHorizontal.rowHeight*d;this._pushPosition(a,g,h);var i=c+a.outerWidth(!0),j=this.masonryHorizontal.rows+1-f;for(e=0;e<j;e++)this.masonryHorizontal.rowXs[d+e]=i},_masonryHorizontalGetContainerSize:function(){var a=Math.max.apply(Math,this.masonryHorizontal.rowXs);return{width:a}},_masonryHorizontalResizeChanged:function(){return this._checkIfSegmentsChanged(!0)},_fitColumnsReset:function(){this.fitColumns={x:0,y:0,width:0}},_fitColumnsLayout:function(a){var c=this,d=this.element.height(),e=this.fitColumns;a.each(function(){var a=b(this),f=a.outerWidth(!0),g=a.outerHeight(!0);e.y!==0&&g+e.y>d&&(e.x=e.width,e.y=0),c._pushPosition(a,e.x,e.y),e.width=Math.max(e.x+f,e.width),e.y+=g})},_fitColumnsGetContainerSize:function(){return{width:this.fitColumns.width}},_fitColumnsResizeChanged:function(){return!0},_cellsByColumnReset:function(){this.cellsByColumn={index:0},this._getSegments(),this._getSegments(!0)},_cellsByColumnLayout:function(a){var c=this,d=this.cellsByColumn;a.each(function(){var a=b(this),e=Math.floor(d.index/d.rows),f=d.index%d.rows,g=Math.round((e+.5)*d.columnWidth-a.outerWidth(!0)/2),h=Math.round((f+.5)*d.rowHeight-a.outerHeight(!0)/2);c._pushPosition(a,g,h),d.index++})},_cellsByColumnGetContainerSize:function(){return{width:Math.ceil(this.$filteredAtoms.length/this.cellsByColumn.rows)*this.cellsByColumn.columnWidth}},_cellsByColumnResizeChanged:function(){return this._checkIfSegmentsChanged(!0)},_straightAcrossReset:function(){this.straightAcross={x:0}},_straightAcrossLayout:function(a){var c=this;a.each(function(a){var d=b(this);c._pushPosition(d,c.straightAcross.x,0),c.straightAcross.x+=d.outerWidth(!0)})},_straightAcrossGetContainerSize:function(){return{width:this.straightAcross.x}},_straightAcrossResizeChanged:function(){return!0}},b.fn.imagesLoaded=function(a){function i(a){a.target.src!==f&&b.inArray(this,g)===-1&&(g.push(this),--e<=0&&(setTimeout(h),d.unbind(".imagesLoaded",i)))}function h(){a.call(c,d)}var c=this,d=c.find("img").add(c.filter("img")),e=d.length,f="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",g=[];e||h(),d.bind("load.imagesLoaded error.imagesLoaded",i).each(function(){var a=this.src;this.src=f,this.src=a});return c};var s=function(b){a.console&&a.console.error(b)};b.fn.isotope=function(a,c){if(typeof a=="string"){var d=Array.prototype.slice.call(arguments,1);this.each(function(){var c=b.data(this,"isotope");if(!c)s("cannot call methods on isotope prior to initialization; attempted to call method '"+a+"'");else{if(!b.isFunction(c[a])||a.charAt(0)==="_"){s("no such method '"+a+"' for isotope instance");return}c[a].apply(c,d)}})}else this.each(function(){var d=b.data(this,"isotope");d?(d.option(a),d._init(c)):b.data(this,"isotope",new b.Isotope(a,this,c))});return this}})(window,jQuery);$(document).ready(function(){$('#stacks_in_883_page15').isotope({itemSelector:'.fluid_cell',layoutMode:'fitRows',animationEngine:'best-available'});});

	return stack;
})(stacks.stacks_in_883_page15);


// Javascript for stacks_in_114_page15
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.stacks_in_114_page15 = {};

// A closure is defined and assigned to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for referring
// to this object from elsewhere.
stacks.stacks_in_114_page15 = (function(stack) {

	// When jQuery is used it will be available as $ and jQuery but only
	// inside the closure.
	var jQuery = stacks.jQuery;
	var $ = jQuery;
	
//-- Fluid Image v1.9.0 Copyright @2010-2012 Joe Workman --//
var addEvent=function(){return document.addEventListener?function(a,c,d){if(a&&a.nodeName||a===window)a.addEventListener(c,d,!1);else if(a&&a.length)for(var b=0;b<a.length;b++)addEvent(a[b],c,d)}:function(a,c,d){if(a&&a.nodeName||a===window)a.attachEvent("on"+c,function(){return d.call(a,window.event)});else if(a&&a.length)for(var b=0;b<a.length;b++)addEvent(a[b],c,d)}}();var responsiveEnhance=function(img,width,monitor){if(img.length){for(var i=0,len=img.length;i<len;i++){responsiveEnhance(img[i],width,monitor);}}else{if(((' '+img.className+' ').replace(/[\n\t]/g,' ').indexOf(' large ')==-1)&&img.clientWidth>width){var fullimg=new Image();addEvent(fullimg,'load',function(e){img.src=this.src;img.className+=' large';});fullimg.src=img.getAttribute('data-fullsrc');}
if(monitor!=false){addEvent(window,'resize',function(e){responsiveEnhance(img,width,false);});addEvent(img,'load',function(e){responsiveEnhance(img,width,false);});}}};function detectIE789(){var version;if(navigator.appName=='Microsoft Internet Explorer'){var ua=navigator.userAgent;var re=new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");if(re.exec(ua)!=null){version=parseFloat(RegExp.$1)}if(version<=8.0){return true}else{if(version==9.0){if(document.compatMode=="BackCompat"){var mA=document.createElement("meta");mA.content="IE=EmulateIE8";document.getElementsByTagName('head')[0].appendChild(mA);return true}else{return false}}return false}}else{return false}}
$(document).ready(function(){var image=$('#stacks_in_114_page15 img.imageStyle:first');var version=parseInt($.browser.version);if(!($.browser.msie&&version<=8)){var source=image.attr('src');var responsiveWidth=Math.round(image.attr('width')*0.65);responsiveWidth=responsiveWidth>500?500:responsiveWidth;image.attr('data-fullsrc',source);image.attr('src','files/thumb_114.jpg');responsiveEnhance(image,responsiveWidth);}var width=image.attr('width');image.css('max-width',width+'px');if(detectIE789())image.css('width','auto');});

	return stack;
})(stacks.stacks_in_114_page15);


