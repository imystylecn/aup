
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

// Javascript for stacks_in_1011_page1
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.stacks_in_1011_page1 = {};

// A closure is defined and assigned to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for referring
// to this object from elsewhere.
stacks.stacks_in_1011_page1 = (function(stack) {

	// When jQuery is used it will be available as $ and jQuery but only
	// inside the closure.
	var jQuery = stacks.jQuery;
	var $ = jQuery;
	
//-- Fluid Image v1.9.0 Copyright @2010-2012 Joe Workman --//
var addEvent=function(){return document.addEventListener?function(a,c,d){if(a&&a.nodeName||a===window)a.addEventListener(c,d,!1);else if(a&&a.length)for(var b=0;b<a.length;b++)addEvent(a[b],c,d)}:function(a,c,d){if(a&&a.nodeName||a===window)a.attachEvent("on"+c,function(){return d.call(a,window.event)});else if(a&&a.length)for(var b=0;b<a.length;b++)addEvent(a[b],c,d)}}();var responsiveEnhance=function(img,width,monitor){if(img.length){for(var i=0,len=img.length;i<len;i++){responsiveEnhance(img[i],width,monitor);}}else{if(((' '+img.className+' ').replace(/[\n\t]/g,' ').indexOf(' large ')==-1)&&img.clientWidth>width){var fullimg=new Image();addEvent(fullimg,'load',function(e){img.src=this.src;img.className+=' large';});fullimg.src=img.getAttribute('data-fullsrc');}
if(monitor!=false){addEvent(window,'resize',function(e){responsiveEnhance(img,width,false);});addEvent(img,'load',function(e){responsiveEnhance(img,width,false);});}}};function detectIE789(){var version;if(navigator.appName=='Microsoft Internet Explorer'){var ua=navigator.userAgent;var re=new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");if(re.exec(ua)!=null){version=parseFloat(RegExp.$1)}if(version<=8.0){return true}else{if(version==9.0){if(document.compatMode=="BackCompat"){var mA=document.createElement("meta");mA.content="IE=EmulateIE8";document.getElementsByTagName('head')[0].appendChild(mA);return true}else{return false}}return false}}else{return false}}
$(document).ready(function(){var image=$('#stacks_in_1011_page1 img.imageStyle:first');var version=parseInt($.browser.version);if(!($.browser.msie&&version<=8)){var source=image.attr('src');var responsiveWidth=Math.round(image.attr('width')*0.65);responsiveWidth=responsiveWidth>500?500:responsiveWidth;image.attr('data-fullsrc',source);image.attr('src','files/thumb_1011.png');responsiveEnhance(image,responsiveWidth);}var width=image.attr('width');image.css('max-width',width+'px');if(detectIE789())image.css('width','auto');});

	return stack;
})(stacks.stacks_in_1011_page1);


// Javascript for stacks_in_1041_page1
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.stacks_in_1041_page1 = {};

// A closure is defined and assigned to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for referring
// to this object from elsewhere.
stacks.stacks_in_1041_page1 = (function(stack) {

	// When jQuery is used it will be available as $ and jQuery but only
	// inside the closure.
	var jQuery = stacks.jQuery;
	var $ = jQuery;
	
var $myMenu = jQuery.noConflict(); 

$myMenu(document).ready(function() {
	
	var myMenuParent = $myMenu('#stacks_in_1041_page1').parent();
	$myMenu('#stacks_in_1041_page1').css('overflow','visible');
	$myMenu(myMenuParent).css('overflow','visible');
	
	$myMenu(".nimblehost_myMenu_stacks_in_1041_page1 ul ul").parent().addClass("ddarrow").append("<span class=\"childIndicator\"></span>");
	
	var myMenuConfig = { sensitivity: 3, interval: 50, over: revealMyMenuChildren, timeout: 400, out: hideMyMenuChildren };

	function revealMyMenuChildren(){ $myMenu(this).find("ul").filter(":first").css({visibility: "visible",display: "none",opacity: 1}).slideDown(300); }
	
	function hideMyMenuChildren(){ $myMenu(this).find("ul").filter(":first").fadeTo(200, 0, function(){ $myMenu(this).slideUp(300); }); }
	
	$myMenu('body').on('mouseenter', function(){ $myMenu('.nimblehost_myMenu_stacks_in_1041_page1 li').hoverIntent(myMenuConfig); });
	
	
	
	
	
	
	
	toggleMobileMenu();
	
	function toggleMobileMenu() {
		$myMenu('.myMenu_mobileToggle').click(function(){
			 if ( $myMenu('.nimblehost_myMenu_stacks_in_1041_page1').is(':visible') ) {
			 	$myMenu('.nimblehost_myMenu_stacks_in_1041_page1').fadeOut(400);
			 } else {
			 	var scrollAmount = $myMenu(document).scrollTop() + 44;
			 	$myMenu('.nimblehost_myMenu_stacks_in_1041_page1 ul li').hoverIntent(myMenuConfig);
			 	$myMenu('.nimblehost_myMenuOuterWrapper_stacks_in_1041_page1').css('top',scrollAmount);
			 	$myMenu('.nimblehost_myMenu_stacks_in_1041_page1').fadeIn(300);
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
})(stacks.stacks_in_1041_page1);


// Javascript for stacks_in_1393_page1
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.stacks_in_1393_page1 = {};

// A closure is defined and assigned to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for referring
// to this object from elsewhere.
stacks.stacks_in_1393_page1 = (function(stack) {

	// When jQuery is used it will be available as $ and jQuery but only
	// inside the closure.
	var jQuery = stacks.jQuery;
	var $ = jQuery;
	
//-- Fluid Columns v1.0.3 Copyright @2010-2012 Joe Workman --//

(function(a,b,c){"use strict";var d=function(a){return a.charAt(0).toUpperCase()+a.slice(1)},e="Moz Webkit Khtml O Ms".split(" "),f=function(a){var b=document.documentElement.style,c;if(typeof b[a]=="string")return a;a=d(a);for(var f=0,g=e.length;f<g;f++){c=e[f]+a;if(typeof b[c]=="string")return c}},g=f("transform"),h=f("transitionProperty"),i={csstransforms:function(){return!!g},csstransforms3d:function(){var a=!!f("perspective");if(a){var c=" -o- -moz- -ms- -webkit- -khtml- ".split(" "),d="@media ("+c.join("transform-3d),(")+"modernizr)",e=b("<style>"+d+"{#modernizr{height:3px}}"+"</style>").appendTo("head"),g=b('<div id="modernizr" />').appendTo("html");a=g.height()===3,g.remove(),e.remove()}return a},csstransitions:function(){return!!h}};if(a.Modernizr)for(var j in i)Modernizr.hasOwnProperty(j)||Modernizr.addTest(j,i[j]);else a.Modernizr=function(){var a={_version:"1.6ish: miniModernizr for Isotope"},c=" ",d,e;for(e in i)d=i[e](),a[e]=d,c+=" "+(d?"":"no-")+e;b("html").addClass(c);return a}();if(Modernizr.csstransforms){var k=Modernizr.csstransforms3d?{translate:function(a){return"translate3d("+a[0]+"px, "+a[1]+"px, 0) "},scale:function(a){return"scale3d("+a+", "+a+", 1) "}}:{translate:function(a){return"translate("+a[0]+"px, "+a[1]+"px) "},scale:function(a){return"scale("+a+") "}},l=function(a,c,d){var e=b.data(a,"isoTransform")||{},f={},h,i={},j;f[c]=d,b.extend(e,f);for(h in e)j=e[h],i[h]=k[h](j);var l=i.translate||"",m=i.scale||"",n=l+m;b.data(a,"isoTransform",e),a.style[g]=n};b.cssNumber.scale=!0,b.cssHooks.scale={set:function(a,b){l(a,"scale",b)},get:function(a,c){var d=b.data(a,"isoTransform");return d&&d.scale?d.scale:1}},b.fx.step.scale=function(a){b.cssHooks.scale.set(a.elem,a.now+a.unit)},b.cssNumber.translate=!0,b.cssHooks.translate={set:function(a,b){l(a,"translate",b)},get:function(a,c){var d=b.data(a,"isoTransform");return d&&d.translate?d.translate:[0,0]}}}var m,n;Modernizr.csstransitions&&(m={WebkitTransitionProperty:"webkitTransitionEnd",MozTransitionProperty:"transitionend",OTransitionProperty:"oTransitionEnd",transitionProperty:"transitionEnd"}[h],n=f("transitionDuration"));var o=b.event,p;o.special.smartresize={setup:function(){b(this).bind("resize",o.special.smartresize.handler)},teardown:function(){b(this).unbind("resize",o.special.smartresize.handler)},handler:function(a,b){var c=this,d=arguments;a.type="smartresize",p&&clearTimeout(p),p=setTimeout(function(){jQuery.event.handle.apply(c,d)},b==="execAsap"?0:100)}},b.fn.smartresize=function(a){return a?this.bind("smartresize",a):this.trigger("smartresize",["execAsap"])},b.Isotope=function(a,c,d){this.element=b(c),this._create(a),this._init(d)};var q=["overflow","position","width","height"],r=b(a);b.Isotope.settings={resizable:!0,layoutMode:"masonry",containerClass:"isotope",itemClass:"isotope-item",hiddenClass:"isotope-hidden",hiddenStyle:{opacity:0,scale:.001},visibleStyle:{opacity:1,scale:1},animationEngine:"best-available",animationOptions:{queue:!1,duration:800},sortBy:"original-order",sortAscending:!0,resizesContainer:!0,transformsEnabled:!b.browser.opera,itemPositionDataEnabled:!1},b.Isotope.prototype={_create:function(a){this.options=b.extend({},b.Isotope.settings,a),this.styleQueue=[],this.elemCount=0;var c=this.element[0].style;this.originalStyle={};for(var d=0,e=q.length;d<e;d++){var f=q[d];this.originalStyle[f]=c[f]||""}this.element.css({overflow:"hidden",position:"relative"}),this._updateAnimationEngine(),this._updateUsingTransforms();var g={"original-order":function(a,b){b.elemCount++;return b.elemCount},random:function(){return Math.random()}};this.options.getSortData=b.extend(this.options.getSortData,g),this.reloadItems();var h=b(document.createElement("div")).prependTo(this.element);this.offset=h.position(),h.remove();var i=this;setTimeout(function(){i.element.addClass(i.options.containerClass)},0),this.options.resizable&&r.bind("smartresize.isotope",function(){i.resize()}),this.element.delegate("."+this.options.hiddenClass,"click",function(){return!1})},_getAtoms:function(a){var b=this.options.itemSelector,c=b?a.filter(b).add(a.find(b)):a,d={position:"absolute"};this.usingTransforms&&(d.left=0,d.top=0),c.css(d).addClass(this.options.itemClass),this.updateSortData(c,!0);return c},_init:function(a){this.$filteredAtoms=this._filter(this.$allAtoms),this._sort(),this.reLayout(a)},option:function(a){if(b.isPlainObject(a)){this.options=b.extend(!0,this.options,a);var c;for(var e in a)c="_update"+d(e),this[c]&&this[c]()}},_updateAnimationEngine:function(){var a=this.options.animationEngine.toLowerCase().replace(/[ _\-]/g,""),b;switch(a){case"css":case"none":b=!1;break;case"jquery":b=!0;break;default:b=!Modernizr.csstransitions}this.isUsingJQueryAnimation=b,this._updateUsingTransforms()},_updateTransformsEnabled:function(){this._updateUsingTransforms()},_updateUsingTransforms:function(){var a=this.usingTransforms=this.options.transformsEnabled&&Modernizr.csstransforms&&Modernizr.csstransitions&&!this.isUsingJQueryAnimation;a||(delete this.options.hiddenStyle.scale,delete this.options.visibleStyle.scale),this.getPositionStyles=a?this._translate:this._positionAbs},_filter:function(a){var b=this.options.filter===""?"*":this.options.filter;if(!b)return a;var c=this.options.hiddenClass,d="."+c,e=a.filter(d),f=e;if(b!=="*"){f=e.filter(b);var g=a.not(d).not(b).addClass(c);this.styleQueue.push({$el:g,style:this.options.hiddenStyle})}this.styleQueue.push({$el:f,style:this.options.visibleStyle}),f.removeClass(c);return a.filter(b)},updateSortData:function(a,c){var d=this,e=this.options.getSortData,f,g;a.each(function(){f=b(this),g={};for(var a in e)!c&&a==="original-order"?g[a]=b.data(this,"isotope-sort-data")[a]:g[a]=e[a](f,d);b.data(this,"isotope-sort-data",g)})},_sort:function(){var a=this.options.sortBy,b=this._getSorter,c=this.options.sortAscending?1:-1,d=function(d,e){var f=b(d,a),g=b(e,a);f===g&&a!=="original-order"&&(f=b(d,"original-order"),g=b(e,"original-order"));return(f>g?1:f<g?-1:0)*c};this.$filteredAtoms.sort(d)},_getSorter:function(a,c){return b.data(a,"isotope-sort-data")[c]},_translate:function(a,b){return{translate:[a,b]}},_positionAbs:function(a,b){return{left:a,top:b}},_pushPosition:function(a,b,c){b+=this.offset.left,c+=this.offset.top;var d=this.getPositionStyles(b,c);this.styleQueue.push({$el:a,style:d}),this.options.itemPositionDataEnabled&&a.data("isotope-item-position",{x:b,y:c})},layout:function(a,b){var c=this.options.layoutMode;this["_"+c+"Layout"](a);if(this.options.resizesContainer){var d=this["_"+c+"GetContainerSize"]();this.styleQueue.push({$el:this.element,style:d})}this._processStyleQueue(a,b),this.isLaidOut=!0},_processStyleQueue:function(a,c){var d=this.isLaidOut?this.isUsingJQueryAnimation?"animate":"css":"css",e=this.options.animationOptions,f,g,h,i;g=function(a,b){b.$el[d](b.style,e)};if(this._isInserting&&this.isUsingJQueryAnimation)g=function(a,b){f=b.$el.hasClass("no-transition")?"css":d,b.$el[f](b.style,e)};else if(c){var j=!1,k=this;h=!0,i=function(){j||(c.call(k.element,a),j=!0)};if(this.isUsingJQueryAnimation&&d==="animate")e.complete=i,h=!1;else if(Modernizr.csstransitions){var l=0,o=this.styleQueue[0].$el,p;while(!o.length){p=this.styleQueue[l++];if(!p)return;o=p.$el}var q=parseFloat(getComputedStyle(o[0])[n]);q>0&&(g=function(a,b){b.$el[d](b.style,e).one(m,i)},h=!1)}}b.each(this.styleQueue,g),h&&i(),this.styleQueue=[]},resize:function(){this["_"+this.options.layoutMode+"ResizeChanged"]()&&this.reLayout()},reLayout:function(a){this["_"+this.options.layoutMode+"Reset"](),this.layout(this.$filteredAtoms,a)},addItems:function(a,b){var c=this._getAtoms(a);this.$allAtoms=this.$allAtoms.add(c),b&&b(c)},insert:function(a,b){this.element.append(a);var c=this;this.addItems(a,function(a){var d=c._filter(a);c._addHideAppended(d),c._sort(),c.reLayout(),c._revealAppended(d,b)})},appended:function(a,b){var c=this;this.addItems(a,function(a){c._addHideAppended(a),c.layout(a),c._revealAppended(a,b)})},_addHideAppended:function(a){this.$filteredAtoms=this.$filteredAtoms.add(a),a.addClass("no-transition"),this._isInserting=!0,this.styleQueue.push({$el:a,style:this.options.hiddenStyle})},_revealAppended:function(a,b){var c=this;setTimeout(function(){a.removeClass("no-transition"),c.styleQueue.push({$el:a,style:c.options.visibleStyle}),c._isInserting=!1,c._processStyleQueue(a,b)},10)},reloadItems:function(){this.$allAtoms=this._getAtoms(this.element.children())},remove:function(a){var b=this,c=function(){b.$allAtoms=b.$allAtoms.not(a),a.remove()};a.filter(":not(."+this.options.hiddenClass+")").length?(this.styleQueue.push({$el:a,style:this.options.hiddenStyle}),this.$filteredAtoms=this.$filteredAtoms.not(a),this._sort(),this.reLayout(c)):c()},shuffle:function(a){this.updateSortData(this.$allAtoms),this.options.sortBy="random",this._sort(),this.reLayout(a)},destroy:function(){var a=this.usingTransforms,b=this.options;this.$allAtoms.removeClass(b.hiddenClass+" "+b.itemClass).each(function(){var b=this.style;b.position="",b.top="",b.left="",b.opacity="",a&&(b[g]="")});var c=this.element[0].style;for(var d=0,e=q.length;d<e;d++){var f=q[d];c[f]=this.originalStyle[f]}this.element.unbind(".isotope").undelegate("."+b.hiddenClass,"click").removeClass(b.containerClass).removeData("isotope"),r.unbind(".isotope")},_getSegments:function(a){var b=this.options.layoutMode,c=a?"rowHeight":"columnWidth",e=a?"height":"width",f=a?"rows":"cols",g=this.element[e](),h,i=this.options[b]&&this.options[b][c]||this.$filteredAtoms["outer"+d(e)](!0)||g;h=Math.floor(g/i),h=Math.max(h,1),this[b][f]=h,this[b][c]=i},_checkIfSegmentsChanged:function(a){var b=this.options.layoutMode,c=a?"rows":"cols",d=this[b][c];this._getSegments(a);return this[b][c]!==d},_masonryReset:function(){this.masonry={},this._getSegments();var a=this.masonry.cols;this.masonry.colYs=[];while(a--)this.masonry.colYs.push(0)},_masonryLayout:function(a){var c=this,d=c.masonry;a.each(function(){var a=b(this),e=Math.ceil(a.outerWidth(!0)/d.columnWidth);e=Math.min(e,d.cols);if(e===1)c._masonryPlaceBrick(a,d.colYs);else{var f=d.cols+1-e,g=[],h,i;for(i=0;i<f;i++)h=d.colYs.slice(i,i+e),g[i]=Math.max.apply(Math,h);c._masonryPlaceBrick(a,g)}})},_masonryPlaceBrick:function(a,b){var c=Math.min.apply(Math,b),d=0;for(var e=0,f=b.length;e<f;e++)if(b[e]===c){d=e;break}var g=this.masonry.columnWidth*d,h=c;this._pushPosition(a,g,h);var i=c+a.outerHeight(!0),j=this.masonry.cols+1-f;for(e=0;e<j;e++)this.masonry.colYs[d+e]=i},_masonryGetContainerSize:function(){var a=Math.max.apply(Math,this.masonry.colYs);return{height:a}},_masonryResizeChanged:function(){return this._checkIfSegmentsChanged()},_fitRowsReset:function(){this.fitRows={x:0,y:0,height:0}},_fitRowsLayout:function(a){var c=this,d=this.element.width(),e=this.fitRows;a.each(function(){var a=b(this),f=a.outerWidth(!0),g=a.outerHeight(!0);e.x!==0&&f+e.x>d&&(e.x=0,e.y=e.height),c._pushPosition(a,e.x,e.y),e.height=Math.max(e.y+g,e.height),e.x+=f})},_fitRowsGetContainerSize:function(){return{height:this.fitRows.height}},_fitRowsResizeChanged:function(){return!0},_cellsByRowReset:function(){this.cellsByRow={index:0},this._getSegments(),this._getSegments(!0)},_cellsByRowLayout:function(a){var c=this,d=this.cellsByRow;a.each(function(){var a=b(this),e=d.index%d.cols,f=Math.floor(d.index/d.cols),g=Math.round((e+.5)*d.columnWidth-a.outerWidth(!0)/2),h=Math.round((f+.5)*d.rowHeight-a.outerHeight(!0)/2);c._pushPosition(a,g,h),d.index++})},_cellsByRowGetContainerSize:function(){return{height:Math.ceil(this.$filteredAtoms.length/this.cellsByRow.cols)*this.cellsByRow.rowHeight+this.offset.top}},_cellsByRowResizeChanged:function(){return this._checkIfSegmentsChanged()},_straightDownReset:function(){this.straightDown={y:0}},_straightDownLayout:function(a){var c=this;a.each(function(a){var d=b(this);c._pushPosition(d,0,c.straightDown.y),c.straightDown.y+=d.outerHeight(!0)})},_straightDownGetContainerSize:function(){return{height:this.straightDown.y}},_straightDownResizeChanged:function(){return!0},_masonryHorizontalReset:function(){this.masonryHorizontal={},this._getSegments(!0);var a=this.masonryHorizontal.rows;this.masonryHorizontal.rowXs=[];while(a--)this.masonryHorizontal.rowXs.push(0)},_masonryHorizontalLayout:function(a){var c=this,d=c.masonryHorizontal;a.each(function(){var a=b(this),e=Math.ceil(a.outerHeight(!0)/d.rowHeight);e=Math.min(e,d.rows);if(e===1)c._masonryHorizontalPlaceBrick(a,d.rowXs);else{var f=d.rows+1-e,g=[],h,i;for(i=0;i<f;i++)h=d.rowXs.slice(i,i+e),g[i]=Math.max.apply(Math,h);c._masonryHorizontalPlaceBrick(a,g)}})},_masonryHorizontalPlaceBrick:function(a,b){var c=Math.min.apply(Math,b),d=0;for(var e=0,f=b.length;e<f;e++)if(b[e]===c){d=e;break}var g=c,h=this.masonryHorizontal.rowHeight*d;this._pushPosition(a,g,h);var i=c+a.outerWidth(!0),j=this.masonryHorizontal.rows+1-f;for(e=0;e<j;e++)this.masonryHorizontal.rowXs[d+e]=i},_masonryHorizontalGetContainerSize:function(){var a=Math.max.apply(Math,this.masonryHorizontal.rowXs);return{width:a}},_masonryHorizontalResizeChanged:function(){return this._checkIfSegmentsChanged(!0)},_fitColumnsReset:function(){this.fitColumns={x:0,y:0,width:0}},_fitColumnsLayout:function(a){var c=this,d=this.element.height(),e=this.fitColumns;a.each(function(){var a=b(this),f=a.outerWidth(!0),g=a.outerHeight(!0);e.y!==0&&g+e.y>d&&(e.x=e.width,e.y=0),c._pushPosition(a,e.x,e.y),e.width=Math.max(e.x+f,e.width),e.y+=g})},_fitColumnsGetContainerSize:function(){return{width:this.fitColumns.width}},_fitColumnsResizeChanged:function(){return!0},_cellsByColumnReset:function(){this.cellsByColumn={index:0},this._getSegments(),this._getSegments(!0)},_cellsByColumnLayout:function(a){var c=this,d=this.cellsByColumn;a.each(function(){var a=b(this),e=Math.floor(d.index/d.rows),f=d.index%d.rows,g=Math.round((e+.5)*d.columnWidth-a.outerWidth(!0)/2),h=Math.round((f+.5)*d.rowHeight-a.outerHeight(!0)/2);c._pushPosition(a,g,h),d.index++})},_cellsByColumnGetContainerSize:function(){return{width:Math.ceil(this.$filteredAtoms.length/this.cellsByColumn.rows)*this.cellsByColumn.columnWidth}},_cellsByColumnResizeChanged:function(){return this._checkIfSegmentsChanged(!0)},_straightAcrossReset:function(){this.straightAcross={x:0}},_straightAcrossLayout:function(a){var c=this;a.each(function(a){var d=b(this);c._pushPosition(d,c.straightAcross.x,0),c.straightAcross.x+=d.outerWidth(!0)})},_straightAcrossGetContainerSize:function(){return{width:this.straightAcross.x}},_straightAcrossResizeChanged:function(){return!0}},b.fn.imagesLoaded=function(a){function i(a){a.target.src!==f&&b.inArray(this,g)===-1&&(g.push(this),--e<=0&&(setTimeout(h),d.unbind(".imagesLoaded",i)))}function h(){a.call(c,d)}var c=this,d=c.find("img").add(c.filter("img")),e=d.length,f="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",g=[];e||h(),d.bind("load.imagesLoaded error.imagesLoaded",i).each(function(){var a=this.src;this.src=f,this.src=a});return c};var s=function(b){a.console&&a.console.error(b)};b.fn.isotope=function(a,c){if(typeof a=="string"){var d=Array.prototype.slice.call(arguments,1);this.each(function(){var c=b.data(this,"isotope");if(!c)s("cannot call methods on isotope prior to initialization; attempted to call method '"+a+"'");else{if(!b.isFunction(c[a])||a.charAt(0)==="_"){s("no such method '"+a+"' for isotope instance");return}c[a].apply(c,d)}})}else this.each(function(){var d=b.data(this,"isotope");d?(d.option(a),d._init(c)):b.data(this,"isotope",new b.Isotope(a,this,c))});return this}})(window,jQuery);$(document).ready(function(){$('#stacks_in_1393_page1').isotope({itemSelector:'.fluid_cell',layoutMode:'fitRows',animationEngine:'best-available'});});

	return stack;
})(stacks.stacks_in_1393_page1);


// Javascript for stacks_in_26_page1
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.stacks_in_26_page1 = {};

// A closure is defined and assigned to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for referring
// to this object from elsewhere.
stacks.stacks_in_26_page1 = (function(stack) {

	// When jQuery is used it will be available as $ and jQuery but only
	// inside the closure.
	var jQuery = stacks.jQuery;
	var $ = jQuery;
	
//-- Fluid Image v1.9.0 Copyright @2010-2012 Joe Workman --//
var addEvent=function(){return document.addEventListener?function(a,c,d){if(a&&a.nodeName||a===window)a.addEventListener(c,d,!1);else if(a&&a.length)for(var b=0;b<a.length;b++)addEvent(a[b],c,d)}:function(a,c,d){if(a&&a.nodeName||a===window)a.attachEvent("on"+c,function(){return d.call(a,window.event)});else if(a&&a.length)for(var b=0;b<a.length;b++)addEvent(a[b],c,d)}}();var responsiveEnhance=function(img,width,monitor){if(img.length){for(var i=0,len=img.length;i<len;i++){responsiveEnhance(img[i],width,monitor);}}else{if(((' '+img.className+' ').replace(/[\n\t]/g,' ').indexOf(' large ')==-1)&&img.clientWidth>width){var fullimg=new Image();addEvent(fullimg,'load',function(e){img.src=this.src;img.className+=' large';});fullimg.src=img.getAttribute('data-fullsrc');}
if(monitor!=false){addEvent(window,'resize',function(e){responsiveEnhance(img,width,false);});addEvent(img,'load',function(e){responsiveEnhance(img,width,false);});}}};function detectIE789(){var version;if(navigator.appName=='Microsoft Internet Explorer'){var ua=navigator.userAgent;var re=new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");if(re.exec(ua)!=null){version=parseFloat(RegExp.$1)}if(version<=8.0){return true}else{if(version==9.0){if(document.compatMode=="BackCompat"){var mA=document.createElement("meta");mA.content="IE=EmulateIE8";document.getElementsByTagName('head')[0].appendChild(mA);return true}else{return false}}return false}}else{return false}}
$(document).ready(function(){var image=$('#stacks_in_26_page1 img.imageStyle:first');var version=parseInt($.browser.version);if(!($.browser.msie&&version<=8)){var source=image.attr('src');var responsiveWidth=Math.round(image.attr('width')*0.65);responsiveWidth=responsiveWidth>500?500:responsiveWidth;image.attr('data-fullsrc',source);image.attr('src','files/thumb_26.jpg');responsiveEnhance(image,responsiveWidth);}if(detectIE789())image.css('width','auto');});

	return stack;
})(stacks.stacks_in_26_page1);


// Javascript for stacks_in_720_page1
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.stacks_in_720_page1 = {};

// A closure is defined and assigned to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for referring
// to this object from elsewhere.
stacks.stacks_in_720_page1 = (function(stack) {

	// When jQuery is used it will be available as $ and jQuery but only
	// inside the closure.
	var jQuery = stacks.jQuery;
	var $ = jQuery;
	
// Load supporting cast of jQuery plugins that are needed...

/*!
 * jQuery blockUI plugin
 * Version 2.54 (17-DEC-2012)
 * @requires jQuery v1.3 or later
 *
 * Examples at: http://malsup.com/jquery/block/
 * Copyright (c) 2007-2012 M. Alsup
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Thanks to Amir-Hossein Sobhi for some excellent contributions!
 */

(function(){function n(b){function n(d,a){var e,g,j=d==window,f=a&&void 0!==a.message?a.message:void 0;a=b.extend({},b.blockUI.defaults,a||{});if(!a.ignoreIfBlocked||!b(d).data("blockUI.isBlocked")){a.overlayCSS=b.extend({},b.blockUI.defaults.overlayCSS,a.overlayCSS||{});e=b.extend({},b.blockUI.defaults.css,a.css||{});a.onOverlayClick&&(a.overlayCSS.cursor="pointer");g=b.extend({},b.blockUI.defaults.themedCSS,a.themedCSS||{});f=void 0===f?a.message:f;j&&l&&r(window,{fadeOut:0});if(f&&"string"!=typeof f&&
(f.parentNode||f.jquery)){var h=f.jquery?f[0]:f,c={};b(d).data("blockUI.history",c);c.el=h;c.parent=h.parentNode;c.display=h.style.display;c.position=h.style.position;c.parent&&c.parent.removeChild(h)}b(d).data("blockUI.onUnblock",a.onUnblock);var c=a.baseZ,k;k=s||a.forceIframe?b('<iframe class="blockUI" style="z-index:'+c++ +';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="'+a.iframeSrc+'"></iframe>'):b('<div class="blockUI" style="display:none"></div>');
h=a.theme?b('<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:'+c++ +';display:none"></div>'):b('<div class="blockUI blockOverlay" style="z-index:'+c++ +';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>');a.theme&&j?(c='<div class="blockUI '+a.blockMsgClass+' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:'+(c+10)+';display:none;position:fixed">',a.title&&(c+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+
(a.title||"&nbsp;")+"</div>"),c+='<div class="ui-widget-content ui-dialog-content"></div></div>'):a.theme?(c='<div class="blockUI '+a.blockMsgClass+' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:'+(c+10)+';display:none;position:absolute">',a.title&&(c+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(a.title||"&nbsp;")+"</div>"),c+='<div class="ui-widget-content ui-dialog-content"></div>',c+="</div>"):c=j?'<div class="blockUI '+a.blockMsgClass+' blockPage" style="z-index:'+
(c+10)+';display:none;position:fixed"></div>':'<div class="blockUI '+a.blockMsgClass+' blockElement" style="z-index:'+(c+10)+';display:none;position:absolute"></div>';c=b(c);f&&(a.theme?(c.css(g),c.addClass("ui-widget-content")):c.css(e));a.theme||h.css(a.overlayCSS);h.css("position",j?"fixed":"absolute");(s||a.forceIframe)&&k.css("opacity",0);e=[k,h,c];var q=j?b("body"):b(d);b.each(e,function(){this.appendTo(q)});a.theme&&(a.draggable&&b.fn.draggable)&&c.draggable({handle:".ui-dialog-titlebar",cancel:"li"});
g=z&&(!b.support.boxModel||0<b("object,embed",j?null:d).length);if(u||g){j&&(a.allowBodyStretch&&b.support.boxModel)&&b("html,body").css("height","100%");if((u||!b.support.boxModel)&&!j){g=parseInt(b.css(d,"borderTopWidth"),10)||0;var p=parseInt(b.css(d,"borderLeftWidth"),10)||0,v=g?"(0 - "+g+")":0,w=p?"(0 - "+p+")":0}b.each(e,function(b,d){var c=d[0].style;c.position="absolute";if(2>b)j?c.setExpression("height","Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:"+
a.quirksmodeOffsetHack+') + "px"'):c.setExpression("height",'this.parentNode.offsetHeight + "px"'),j?c.setExpression("width",'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"'):c.setExpression("width",'this.parentNode.offsetWidth + "px"'),w&&c.setExpression("left",w),v&&c.setExpression("top",v);else if(a.centerY)j&&c.setExpression("top",'(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'),
c.marginTop=0;else if(!a.centerY&&j){var e="((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "+(a.css&&a.css.top?parseInt(a.css.top,10):0)+') + "px"';c.setExpression("top",e)}})}f&&(a.theme?c.find(".ui-widget-content").append(f):c.append(f),(f.jquery||f.nodeType)&&b(f).show());(s||a.forceIframe)&&a.showOverlay&&k.show();if(a.fadeIn)e=a.onBlock?a.onBlock:t,k=a.showOverlay&&!f?e:t,e=f?e:t,a.showOverlay&&h._fadeIn(a.fadeIn,k),f&&c._fadeIn(a.fadeIn,
e);else if(a.showOverlay&&h.show(),f&&c.show(),a.onBlock)a.onBlock();x(1,d,a);j?(l=c[0],m=b(":input:enabled:visible",l),a.focusInput&&setTimeout(y,20)):(e=c[0],f=a.centerX,h=a.centerY,g=e.parentNode,c=e.style,k=(g.offsetWidth-e.offsetWidth)/2-(parseInt(b.css(g,"borderLeftWidth"),10)||0),e=(g.offsetHeight-e.offsetHeight)/2-(parseInt(b.css(g,"borderTopWidth"),10)||0),f&&(c.left=0<k?k+"px":"0"),h&&(c.top=0<e?e+"px":"0"));a.timeout&&(f=setTimeout(function(){j?b.unblockUI(a):b(d).unblock(a)},a.timeout),
b(d).data("blockUI.timeout",f))}}function r(d,a){var e=d==window,g=b(d),j=g.data("blockUI.history"),f=g.data("blockUI.timeout");f&&(clearTimeout(f),g.removeData("blockUI.timeout"));a=b.extend({},b.blockUI.defaults,a||{});x(0,d,a);null===a.onUnblock&&(a.onUnblock=g.data("blockUI.onUnblock"),g.removeData("blockUI.onUnblock"));var h;h=e?b("body").children().filter(".blockUI").add("body > .blockUI"):g.find(">.blockUI");a.cursorReset&&(1<h.length&&(h[1].style.cursor=a.cursorReset),2<h.length&&(h[2].style.cursor=
a.cursorReset));e&&(l=m=null);a.fadeOut?(h.fadeOut(a.fadeOut),setTimeout(function(){q(h,j,a,d)},a.fadeOut)):q(h,j,a,d)}function q(d,a,e,g){d.each(function(){this.parentNode&&this.parentNode.removeChild(this)});a&&a.el&&(a.el.style.display=a.display,a.el.style.position=a.position,a.parent&&a.parent.appendChild(a.el),b(g).removeData("blockUI.history"));if("function"==typeof e.onUnblock)e.onUnblock(g,e);d=b(document.body);a=d.width();e=d[0].style.width;d.width(a-1).width(a);d[0].style.width=e}function x(d,
a,e){var g=a==window;a=b(a);if(d||!(g&&!l||!g&&!a.data("blockUI.isBlocked")))a.data("blockUI.isBlocked",d),e.bindEvents&&(!d||e.showOverlay)&&(d?b(document).bind("mousedown mouseup keydown keypress keyup touchstart touchend touchmove",e,p):b(document).unbind("mousedown mouseup keydown keypress keyup touchstart touchend touchmove",p))}function p(d){if(d.keyCode&&9==d.keyCode&&l&&d.data.constrainTabKey){var a=m,e=d.shiftKey&&d.target===a[0];if(!d.shiftKey&&d.target===a[a.length-1]||e)return setTimeout(function(){y(e)},
10),!1}a=d.data;d=b(d.target);if(d.hasClass("blockOverlay")&&a.onOverlayClick)a.onOverlayClick();return 0<d.parents("div."+a.blockMsgClass).length?!0:0===d.parents().children().filter("div.blockUI").length}function y(b){m&&(b=m[!0===b?m.length-1:0])&&b.focus()}if(/^1\.(0|1|2)/.test(b.fn.jquery))alert("blockUI requires jQuery v1.3 or later!  You are using v"+b.fn.jquery);else{b.fn._fadeIn=b.fn.fadeIn;var t=b.noop||function(){},s=/MSIE/.test(navigator.userAgent),u=/MSIE 6.0/.test(navigator.userAgent),
z=b.isFunction(document.createElement("div").style.setExpression);b.blockUI=function(b){n(window,b)};b.unblockUI=function(b){r(window,b)};b.growlUI=function(d,a,e,g){var j=b('<div class="growlUI"></div>');d&&j.append("<h1>"+d+"</h1>");a&&j.append("<h2>"+a+"</h2>");void 0===e&&(e=3E3);b.blockUI({message:j,fadeIn:700,fadeOut:1E3,centerY:!1,timeout:e,showOverlay:!1,onUnblock:g,css:b.blockUI.defaults.growlCSS})};b.fn.block=function(d){var a=b.extend({},b.blockUI.defaults,d||{});this.each(function(){var d=
b(this);(!a.ignoreIfBlocked||!d.data("blockUI.isBlocked"))&&d.unblock({fadeOut:0})});return this.each(function(){"static"==b.css(this,"position")&&(this.style.position="relative");this.style.zoom=1;n(this,d)})};b.fn.unblock=function(b){return this.each(function(){r(this,b)})};b.blockUI.version=2.54;b.blockUI.defaults={message:"<h1>Please wait...</h1>",title:null,draggable:!0,theme:!1,css:{padding:0,margin:0,width:"30%",top:"40%",left:"35%",textAlign:"center",color:"#000",border:"3px solid #aaa",backgroundColor:"#fff",
cursor:"wait"},themedCSS:{width:"30%",top:"40%",left:"35%"},overlayCSS:{backgroundColor:"#000",opacity:0.6,cursor:"wait"},cursorReset:"default",growlCSS:{width:"350px",top:"10px",left:"",right:"10px",border:"none",padding:"5px",opacity:0.6,cursor:"default",color:"#fff",backgroundColor:"#000","-webkit-border-radius":"10px","-moz-border-radius":"10px","border-radius":"10px"},iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank",forceIframe:!1,baseZ:1E3,centerX:!0,centerY:!0,
allowBodyStretch:!0,bindEvents:!0,constrainTabKey:!0,fadeIn:200,fadeOut:400,timeout:0,showOverlay:!0,focusInput:!0,onBlock:null,onUnblock:null,onOverlayClick:null,quirksmodeOffsetHack:4,blockMsgClass:"blockMsg",ignoreIfBlocked:!1};var l=null,m=[]}}"function"===typeof define&&define.amd&&define.amd.jQuery?define(["jquery"],n):n(jQuery)})();

/*!
 * jQuery Form Plugin
 * version: 3.24 (26-DEC-2012)
 * @requires jQuery v1.5 or later
 *
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Project repository: https://github.com/malsup/form
 * Dual licensed under the MIT and GPL licenses:
 *    http://malsup.github.com/mit-license.txt
 *    http://malsup.github.com/gpl-license-v2.txt
 */
 (function(c){function v(a){var e=a.data;a.isDefaultPrevented()||(a.preventDefault(),c(this).ajaxSubmit(e))}function u(a){var e=a.target,f=c(e);if(!f.is("[type=submit],[type=image]")){e=f.closest("[type=submit]");if(0===e.length)return;e=e[0]}var b=this;b.clk=e;"image"==e.type&&(void 0!==a.offsetX?(b.clk_x=a.offsetX,b.clk_y=a.offsetY):"function"==typeof c.fn.offset?(f=f.offset(),b.clk_x=a.pageX-f.left,b.clk_y=a.pageY-f.top):(b.clk_x=a.pageX-e.offsetLeft,b.clk_y=a.pageY-e.offsetTop));setTimeout(function(){b.clk=
b.clk_x=b.clk_y=null},100)}function q(){if(c.fn.ajaxSubmit.debug){var a="[jquery.form] "+Array.prototype.join.call(arguments,"");window.console&&window.console.log?window.console.log(a):window.opera&&window.opera.postError&&window.opera.postError(a)}}var B,C;B=void 0!==c("<input type='file'/>").get(0).files;C=void 0!==window.FormData;c.fn.ajaxSubmit=function(a){function e(b){function e(){function a(){try{var c=(r.contentWindow?r.contentWindow.document:r.contentDocument?r.contentDocument:r.document).readyState;
q("state = "+c);c&&"uninitialized"==c.toLowerCase()&&setTimeout(a,50)}catch(b){q("Server abort: ",b," (",b.name,")"),k(y),u&&clearTimeout(u),u=void 0}}var b=l.attr("target"),h=l.attr("action");g.setAttribute("target",n);f||g.setAttribute("method","POST");h!=d.url&&g.setAttribute("action",d.url);!d.skipEncodingOverride&&(!f||/post/i.test(f))&&l.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"});d.timeout&&(u=setTimeout(function(){v=!0;k(z)},d.timeout));var m=[];try{if(d.extraData)for(var j in d.extraData)d.extraData.hasOwnProperty(j)&&
(c.isPlainObject(d.extraData[j])&&d.extraData[j].hasOwnProperty("name")&&d.extraData[j].hasOwnProperty("value")?m.push(c('<input type="hidden" name="'+d.extraData[j].name+'">').val(d.extraData[j].value).appendTo(g)[0]):m.push(c('<input type="hidden" name="'+j+'">').val(d.extraData[j]).appendTo(g)[0]));d.iframeTarget||(x.appendTo("body"),r.attachEvent?r.attachEvent("onload",k):r.addEventListener("load",k,!1));setTimeout(a,15);g.submit()}finally{g.setAttribute("action",h),b?g.setAttribute("target",
b):l.removeAttr("target"),c(m).remove()}}function k(a){if(!h.aborted&&!C){try{s=r.contentWindow?r.contentWindow.document:r.contentDocument?r.contentDocument:r.document}catch(b){q("cannot access response document: ",b),a=y}if(a===z&&h)h.abort("timeout"),w.reject(h,"timeout");else if(a==y&&h)h.abort("server abort"),w.reject(h,"error","server abort");else if(s&&s.location.href!=d.iframeSrc||v){r.detachEvent?r.detachEvent("onload",k):r.removeEventListener("load",k,!1);a="success";var e;try{if(v)throw"timeout";
var f="xml"==d.dataType||s.XMLDocument||c.isXMLDoc(s);q("isXml="+f);if(!f&&(window.opera&&(null===s.body||!s.body.innerHTML))&&--B){q("requeing onLoad callback, DOM not available");setTimeout(k,250);return}var g=s.body?s.body:s.documentElement;h.responseText=g?g.innerHTML:null;h.responseXML=s.XMLDocument?s.XMLDocument:s;f&&(d.dataType="xml");h.getResponseHeader=function(a){return{"content-type":d.dataType}[a]};g&&(h.status=Number(g.getAttribute("status"))||h.status,h.statusText=g.getAttribute("statusText")||
h.statusText);var j=(d.dataType||"").toLowerCase(),l=/(json|script|text)/.test(j);if(l||d.textarea){var n=s.getElementsByTagName("textarea")[0];if(n)h.responseText=n.value,h.status=Number(n.getAttribute("status"))||h.status,h.statusText=n.getAttribute("statusText")||h.statusText;else if(l){var p=s.getElementsByTagName("pre")[0],D=s.getElementsByTagName("body")[0];p?h.responseText=p.textContent?p.textContent:p.innerText:D&&(h.responseText=D.textContent?D.textContent:D.innerText)}}else"xml"==j&&(!h.responseXML&&
h.responseText)&&(h.responseXML=F(h.responseText));try{var f=h,g=d,t=f.getResponseHeader("content-type")||"",G="xml"===j||!j&&0<=t.indexOf("xml"),A=G?f.responseXML:f.responseText;G&&"parsererror"===A.documentElement.nodeName&&c.error&&c.error("parsererror");g&&g.dataFilter&&(A=g.dataFilter(A,j));"string"===typeof A&&("json"===j||!j&&0<=t.indexOf("json")?A=I(A):("script"===j||!j&&0<=t.indexOf("javascript"))&&c.globalEval(A));E=A}catch(J){a="parsererror",h.error=e=J||a}}catch(H){q("error caught: ",
H),a="error",h.error=e=H||a}h.aborted&&(q("upload aborted"),a=null);h.status&&(a=200<=h.status&&300>h.status||304===h.status?"success":"error");"success"===a?(d.success&&d.success.call(d.context,E,"success",h),w.resolve(h.responseText,"success",h),m&&c.event.trigger("ajaxSuccess",[h,d])):a&&(void 0===e&&(e=h.statusText),d.error&&d.error.call(d.context,h,a,e),w.reject(h,"error",e),m&&c.event.trigger("ajaxError",[h,d,e]));m&&c.event.trigger("ajaxComplete",[h,d]);m&&!--c.active&&c.event.trigger("ajaxStop");
d.complete&&d.complete.call(d.context,h,a);C=!0;d.timeout&&clearTimeout(u);setTimeout(function(){d.iframeTarget||x.remove();h.responseXML=null},100)}}}var g=l[0],j,d,m,n,x,r,h,t,v,u;t=!!c.fn.prop;var w=c.Deferred();if(c("[name=submit],[id=submit]",g).length)return alert('Error: Form elements must not have name or id of "submit".'),w.reject(),w;if(b)for(j=0;j<p.length;j++)b=c(p[j]),t?b.prop("disabled",!1):b.removeAttr("disabled");d=c.extend(!0,{},c.ajaxSettings,a);d.context=d.context||d;n="jqFormIO"+
(new Date).getTime();d.iframeTarget?(x=c(d.iframeTarget),(b=x.attr("name"))?n=b:x.attr("name",n)):(x=c('<iframe name="'+n+'" src="'+d.iframeSrc+'" />'),x.css({position:"absolute",top:"-1000px",left:"-1000px"}));r=x[0];h={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(a){var b="timeout"===a?"timeout":"aborted";q("aborting upload... "+b);this.aborted=1;try{r.contentWindow.document.execCommand&&
r.contentWindow.document.execCommand("Stop")}catch(e){}x.attr("src",d.iframeSrc);h.error=b;d.error&&d.error.call(d.context,h,b,a);m&&c.event.trigger("ajaxError",[h,d,b]);d.complete&&d.complete.call(d.context,h,b)}};(m=d.global)&&0===c.active++&&c.event.trigger("ajaxStart");m&&c.event.trigger("ajaxSend",[h,d]);if(d.beforeSend&&!1===d.beforeSend.call(d.context,h,d))return d.global&&c.active--,w.reject(),w;if(h.aborted)return w.reject(),w;if(t=g.clk)if((b=t.name)&&!t.disabled)d.extraData=d.extraData||
{},d.extraData[b]=t.value,"image"==t.type&&(d.extraData[b+".x"]=g.clk_x,d.extraData[b+".y"]=g.clk_y);var z=1,y=2;t=c("meta[name=csrf-token]").attr("content");if((b=c("meta[name=csrf-param]").attr("content"))&&t)d.extraData=d.extraData||{},d.extraData[b]=t;d.forceSync?e():setTimeout(e,10);var E,s,B=50,C,F=c.parseXML||function(a,b){window.ActiveXObject?(b=new ActiveXObject("Microsoft.XMLDOM"),b.async="false",b.loadXML(a)):b=(new DOMParser).parseFromString(a,"text/xml");return b&&b.documentElement&&
"parsererror"!=b.documentElement.nodeName?b:null},I=c.parseJSON||function(a){return window.eval("("+a+")")};return w}if(!this.length)return q("ajaxSubmit: skipping submit process - no element selected"),this;var f,b,l=this;"function"==typeof a&&(a={success:a});f=this.attr("method");b=this.attr("action");(b=(b="string"===typeof b?c.trim(b):"")||window.location.href||"")&&(b=(b.match(/^([^#]+)/)||[])[1]);a=c.extend(!0,{url:b,success:c.ajaxSettings.success,type:f||"GET",iframeSrc:/^https/i.test(window.location.href||
"")?"javascript:false":"about:blank"},a);b={};this.trigger("form-pre-serialize",[this,a,b]);if(b.veto)return q("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(a.beforeSerialize&&!1===a.beforeSerialize(this,a))return q("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var g=a.traditional;void 0===g&&(g=c.ajaxSettings.traditional);var p=[],k,m=this.formToArray(a.semantic,p);a.data&&(a.extraData=a.data,k=c.param(a.data,g));if(a.beforeSubmit&&!1===a.beforeSubmit(m,this,
a))return q("ajaxSubmit: submit aborted via beforeSubmit callback"),this;this.trigger("form-submit-validate",[m,this,a,b]);if(b.veto)return q("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;b=c.param(m,g);k&&(b=b?b+"&"+k:k);"GET"==a.type.toUpperCase()?(a.url+=(0<=a.url.indexOf("?")?"&":"?")+b,a.data=null):a.data=b;var j=[];a.resetForm&&j.push(function(){l.resetForm()});a.clearForm&&j.push(function(){l.clearForm(a.includeHidden)});if(!a.dataType&&a.target){var E=a.success||function(){};
j.push(function(b){var e=a.replaceTarget?"replaceWith":"html";c(a.target)[e](b).each(E,arguments)})}else a.success&&j.push(a.success);a.success=function(b,c,e){for(var g=a.context||this,f=0,d=j.length;f<d;f++)j[f].apply(g,[b,c,e||l,l])};k=0<c('input[type=file]:enabled[value!=""]',this).length;b="multipart/form-data"==l.attr("enctype")||"multipart/form-data"==l.attr("encoding");g=B&&C;q("fileAPI :"+g);var y;if(!1!==a.iframe&&(a.iframe||(k||b)&&!g))a.closeKeepAlive?c.get(a.closeKeepAlive,function(){y=
e(m)}):y=e(m);else if((k||b)&&g){var v=new FormData;for(k=0;k<m.length;k++)v.append(m[k].name,m[k].value);if(a.extraData){k=c.param(a.extraData).split("&");b=k.length;var g={},z,u;for(z=0;z<b;z++)k[z]=k[z].replace(/\+/g," "),u=k[z].split("="),g[decodeURIComponent(u[0])]=decodeURIComponent(u[1]);for(var n in g)g.hasOwnProperty(n)&&v.append(n,g[n])}a.data=null;n=c.extend(!0,{},c.ajaxSettings,a,{contentType:!1,processData:!1,cache:!1,type:f||"POST"});a.uploadProgress&&(n.xhr=function(){var b=jQuery.ajaxSettings.xhr();
b.upload&&(b.upload.onprogress=function(b){var c=0,e=b.loaded||b.position,f=b.total;b.lengthComputable&&(c=Math.ceil(100*(e/f)));a.uploadProgress(b,e,f,c)});return b});n.data=null;var F=n.beforeSend;n.beforeSend=function(a,b){b.data=v;F&&F.call(this,a,b)};y=c.ajax(n)}else y=c.ajax(a);l.removeData("jqxhr").data("jqxhr",y);for(n=0;n<p.length;n++)p[n]=null;this.trigger("form-submit-notify",[this,a]);return this};c.fn.ajaxForm=function(a){a=a||{};a.delegation=a.delegation&&c.isFunction(c.fn.on);if(!a.delegation&&
0===this.length){var e=this.selector,f=this.context;if(!c.isReady&&e)return q("DOM not ready, queuing ajaxForm"),c(function(){c(e,f).ajaxForm(a)}),this;q("terminating; zero elements found by selector"+(c.isReady?"":" (DOM not ready)"));return this}return a.delegation?(c(document).off("submit.form-plugin",this.selector,v).off("click.form-plugin",this.selector,u).on("submit.form-plugin",this.selector,a,v).on("click.form-plugin",this.selector,a,u),this):this.ajaxFormUnbind().bind("submit.form-plugin",
a,v).bind("click.form-plugin",a,u)};c.fn.ajaxFormUnbind=function(){return this.unbind("submit.form-plugin click.form-plugin")};c.fn.formToArray=function(a,e){var f=[];if(0===this.length)return f;var b=this[0],l=a?b.getElementsByTagName("*"):b.elements;if(!l)return f;var g,p,k,m,j,q;g=0;for(q=l.length;g<q;g++)if(j=l[g],k=j.name)if(a&&b.clk&&"image"==j.type)!j.disabled&&b.clk==j&&(f.push({name:k,value:c(j).val(),type:j.type}),f.push({name:k+".x",value:b.clk_x},{name:k+".y",value:b.clk_y}));else if((m=
c.fieldValue(j,!0))&&m.constructor==Array){e&&e.push(j);p=0;for(j=m.length;p<j;p++)f.push({name:k,value:m[p]})}else if(B&&"file"==j.type&&!j.disabled)if(e&&e.push(j),m=j.files,m.length)for(p=0;p<m.length;p++)f.push({name:k,value:m[p],type:j.type});else f.push({name:k,value:"",type:j.type});else null!==m&&"undefined"!=typeof m&&(e&&e.push(j),f.push({name:k,value:m,type:j.type,required:j.required}));if(!a&&b.clk&&(l=c(b.clk),g=l[0],(k=g.name)&&!g.disabled&&"image"==g.type))f.push({name:k,value:l.val()}),
f.push({name:k+".x",value:b.clk_x},{name:k+".y",value:b.clk_y});return f};c.fn.formSerialize=function(a){return c.param(this.formToArray(a))};c.fn.fieldSerialize=function(a){var e=[];this.each(function(){var f=this.name;if(f){var b=c.fieldValue(this,a);if(b&&b.constructor==Array)for(var l=0,g=b.length;l<g;l++)e.push({name:f,value:b[l]});else null!==b&&"undefined"!=typeof b&&e.push({name:this.name,value:b})}});return c.param(e)};c.fn.fieldValue=function(a){for(var e=[],f=0,b=this.length;f<b;f++){var l=
c.fieldValue(this[f],a);null===l||("undefined"==typeof l||l.constructor==Array&&!l.length)||(l.constructor==Array?c.merge(e,l):e.push(l))}return e};c.fieldValue=function(a,e){var f=a.name,b=a.type,l=a.tagName.toLowerCase();void 0===e&&(e=!0);if(e&&(!f||a.disabled||"reset"==b||"button"==b||("checkbox"==b||"radio"==b)&&!a.checked||("submit"==b||"image"==b)&&a.form&&a.form.clk!=a||"select"==l&&-1==a.selectedIndex))return null;if("select"==l){var g=a.selectedIndex;if(0>g)return null;for(var f=[],l=a.options,
p=(b="select-one"==b)?g+1:l.length,g=b?g:0;g<p;g++){var k=l[g];if(k.selected){var m=k.value;m||(m=k.attributes&&k.attributes.value&&!k.attributes.value.specified?k.text:k.value);if(b)return m;f.push(m)}}return f}return c(a).val()};c.fn.clearForm=function(a){return this.each(function(){c("input,select,textarea",this).clearFields(a)})};c.fn.clearFields=c.fn.clearInputs=function(a){var e=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var f=
this.type,b=this.tagName.toLowerCase();if(e.test(f)||"textarea"==b)this.value="";else if("checkbox"==f||"radio"==f)this.checked=!1;else if("select"==b)this.selectedIndex=-1;else if("file"==f)c.browser.msie?c(this).replaceWith(c(this).clone()):c(this).val("");else if(a&&(!0===a&&/hidden/.test(f)||"string"==typeof a&&c(this).is(a)))this.value=""})};c.fn.resetForm=function(){return this.each(function(){("function"==typeof this.reset||"object"==typeof this.reset&&!this.reset.nodeType)&&this.reset()})};
c.fn.enable=function(a){void 0===a&&(a=!0);return this.each(function(){this.disabled=!a})};c.fn.selected=function(a){void 0===a&&(a=!0);return this.each(function(){var e=this.type;"checkbox"==e||"radio"==e?this.checked=a:"option"==this.tagName.toLowerCase()&&(e=c(this).parent("select"),a&&(e[0]&&"select-one"==e[0].type)&&e.find("option").selected(!1),this.selected=a)})};c.fn.ajaxSubmit.debug=!1})(jQuery);

//
// Copyright (c) 2011; Inc.
// formsnap Javascript 
// Modified 01-16-2013 08:01:19 am
//

function stacks_in_720_page1_formsnap($) {



//----------------------------------------------------------//
// + SET VARS   
//----------------------------------------------------------//


    // CSS class names
    var requiredClass   = 'required';   // class for required inputs
    var errorClass      = 'error';      // class for inline error messages (invalid coupon, etc)
    var incompleteClass = 'incomplete'; // class for required inputs that fail validation
    
    // Redirects
    var redirectOnSuccess = false;
    var successUrl 		= '';
    var redirectOnError = false;
    var errorUrl 		= '';
    
    // What form class to bind to
    var formSelector = '#stacks_in_720_page1 .formsnap-form';
    var outputSelector = '#stacks_in_720_page1 div.formsnap-output';
    var requiredTextInputSelector = formSelector + ' input.' + requiredClass;
    var recaptcha_public_key = ('' == '') ? '6LcJG8ESAAAAAH8FTVf0Sq8ePv8ienj8iGW7woC2' : '';
    
	var progress_bar = '<div class="progress progress-striped active" style="margin:0;"><div class="bar" style="width: 100%;"></div></div>';
	
	var progress_style = {
	    'background-color':         'white',
	    'text-align':               'center',
	    color:                      '#777777',
	    opacity:                    '1',
	    padding:                    '15px',
	    position:                   'fixed',
	    top:                        '30%',
	    left:						'30%',
	    width:                      '40%',
	    border: 					'1px solid #999',
	    border: 					'1px solid rgba(0, 0, 0, 0.3)',
	    '*border': 					'1px solid #999', /* IE6-7 */
	    '-webkit-border-radius': 	'6px',
	    '-moz-border-radius': 		'6px',
	    'border-radius': 			'6px',
	    '-webkit-box-shadow': 		'0 3px 7px rgba(0, 0, 0, 0.3)',
	    '-moz-box-shadow': 			'0 3px 7px rgba(0, 0, 0, 0.3)',
	    'box-shadow': 				'0 3px 7px rgba(0, 0, 0, 0.3)',
	    '-webkit-background-clip':	'padding-box',
	    '-moz-background-clip': 	'padding-box',
	    'background-clip': 			'padding-box'
	  
	};
	

// clear default block styles
$.blockUI.defaults.css = {};
$.blockUI.defaults.centerY = false;
$.blockUI.defaults.overlayCSS = { backgroundColor: '#000', opacity: '0.3' };


$.blockAndSpin = function() {
	
	$.blockUI({ message: null });
	$('body').fancyLoad();
	
};

$.unblockAndSpin = function() {
	$.unblockUI();
	$('body').fancyLoad('stop');
};

$.fn.fancyLoad = function(opt) {
	return this.each(function() {
		var $this = $(this);
		var timeout, $fancy = $this.find('.ydfs-loader');
		if (opt == 'stop') {
			if ($fancy.length) {
				var timeout = $fancy.hide().data('fancy-timeout');
				clearInterval(timeout);
			}
			return;
		}
		if ($fancy.length) {
			timeout = $fancy.hide().data('fancy-timeout');
			clearInterval(timeout);
		}
		else {
			var markup = '<div class="ydfs-loader"><div></div></div>';
			$fancy = $(markup).appendTo(this);
		}

		var frame = 1, w = $this.width(), h = $this.height();
		h += $this.scrollTop();
		$fancy.css({'left': ((w - 40) / 2), 'top': ((h - 200) / 2)}).show();

		timeout = setInterval(function() {
			$fancy.find('div').css('top', (frame * -40) + 'px');
			frame = (frame + 1) % 12;
		}, 66);
		$fancy.data('fancy-timeout', timeout);
	});
};


$.fn.fixPNG = function() {
	return this.each(function () {
		var image = $(this).css('backgroundImage');

		if (image.match(/^url\(["']?(.*\.png)["']?\)$/i)) {
			image = RegExp.$1;
			$(this).css({
				'backgroundImage': 'none',
				'filter': "progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=" + ($(this).css('backgroundRepeat') == 'no-repeat' ? 'crop' : 'scale') + ", src='" + image + "')"
			}).each(function () {
				var position = $(this).css('position');
				if (position != 'absolute' && position != 'relative')
					$(this).css('position', 'relative');
			});
		}
	});
};


//
// bootstrap
//

$(document).ready(function() {
	
	// get/set error message from parent page
	var formSubmitErrorMessage = '<h3>' + $(formSelector +' input[name="ydfs_error"]').val() + '</h3>';
	var OKbutton = '<button alt="OK" id="block-button" class="hud-button btn" >' + $(formSelector +' input[name="ok_button"]').val() + '</button>';

   
//	$(formSelector).submit(function(e){
//		e.preventDefault();
//		$('#stacks_in_720_page1 label').removeClass('alert');
//		submitForm.apply(this);
//		return false;
//	});
//	
	// submit button
	$(formSelector + " .formsnap_submit").click(function(e) {
		var form = $(this).closest('form');
		e.preventDefault();
		$('#stacks_in_720_page1 label').closest('.control-group').removeClass('error');
		submitForm.apply(form);
		return false;
	});
	
	// reset button
	$(formSelector + " .formsnap_reset").click(function() {
	   $(this).closest('form').resetForm();
	   
	});
	
	// file input ( added on 2012-09-04 16:41 pm )
	$('.formsnap_file').change(function(e){
		var filename = $(this).val().replace(/C:\\fakepath\\/i, '')
		//alert(filename);
		$(this).closest('.control-group').find('.file_label').html(filename);
	});
	
   //----------------------------------------------------------//
   // + AJAX METHODS   
   //----------------------------------------------------------//	
	function submitForm() {
		$.blockAndSpin();
		$(this).ajaxSubmit({
			type:	'POST',
			data: { ajax: true },
			timeout: 60000, // 60 seconds
			success: onSubmitSuccess,
			error: onSubmitError
		});
	};
		 
   //----------------------------------------------------------//
   // + CALLBACKS	
   //----------------------------------------------------------//
	 
	function onSubmitError() {
		$.unblockAndSpin();
		$.blockUI({ message : formSubmitErrorMessage + '<p>'+OKbutton+'</p>' });
		$('#block-button', '.blockMsg').click($.unblockUI);
		$('label').removeClass('alert');
	};
	 
	function onSubmitSuccess(responseText, statusText, xhr, $form) {
		var rs = $(responseText).find(outputSelector).text();
		rs = rs.replace(/\r\n/g, ' '); // fix for crappy browsers like IE
		var json = $.parseJSON(rs);
		var result = json.result;
		var msg = json.msg;
			
		// redirect?
		if(result == 'good')
		{
			// reset form if result is good...
			$(formSelector).resetForm();
			
				if(redirectOnSuccess){
				
					$('body').fancyLoad('stop');
					$.blockUI({ message :  msg });
					setTimeout(successRedirectUser, 5000); // 5 seconds
					
				}else{
					
					$.unblockAndSpin();
					$.blockUI({ message :  msg + '<p>' + OKbutton + '</p>' });
					$('#block-button', '.blockMsg').click($.unblockUI);
				}
				
		}else{
			
				if(redirectOnError) {
					
					$('body').fancyLoad('stop');
					$.blockUI({ message :  msg });
					setTimeout(errorRedirectUser, 5000); // 5 seconds
					
				}else{
					
					// loop thru required fields and apply class to them...
					$.each(json.required, function(key,value) { 
						$("#stacks_in_720_page1 label[for="+value+"]").closest('.control-group').addClass('error');  
					});
					
					
					$.unblockAndSpin();
					$.blockUI({ message :  msg + '<p>' + OKbutton + '</p>' });
					$('#block-button', '.blockMsg').click($.unblockUI);
				}
					
				
		}
			
		
	}; 
	 
	function successRedirectUser(){
		window.location = successUrl;
	}
	 
	function errorRedirectUser(){
		window.location = errorUrl;
	}
		
});


$(window).load(function(){

	
	  
	 
	   
	
	// Make sure everything is entered....
	var from_name	= 'NiHao Au Pair Contact Us';
	var from_email	= 'info@nihaoaupair.com';
	var to_email	= 'nihaoaupair@gmail.com';
	var reply_to	= 'email';
	var subject_item	= 'name';
	var donotsend  = 'false';
	
	if(!from_name && donotsend != 'true')
		$('#stacks_in_720_page1 .formsnap-php').before('<p class="ydfs-error">A <b>From Name</b> is Required for Form to Function Properly.</p>');
	
	if(!from_email && donotsend != 'true')
		$('#stacks_in_720_page1 .formsnap-php').before('<p class="ydfs-error">A Valid <b>From Email Address</b> is Required for Form to Function Properly.</p>');
	
	if(!to_email && donotsend != 'true')
		$('#stacks_in_720_page1 .formsnap-php').before('<p class="ydfs-error">A Valid <b>To Email Address</b> is Required for Form to Function Properly.</p>');	
		
	if (($('#stacks_in_720_page1 #'+ reply_to ).length < 1 || !reply_to ) && donotsend != 'true' )
		$('#stacks_in_720_page1 .formsnap-php').before('<p class="ydfs-error">A <b>Reply To Item</b> is Required for Form to Function Properly.</p>');
		
	if (($('#stacks_in_720_page1 #'+ subject_item ).length < 1 || !subject_item) && donotsend != 'true' )
		$('#stacks_in_720_page1 .formsnap-php').before('<p class="ydfs-error">A <b>Subject Item</b> is Required for Form to Function Properly.</p>');
});

}; // stacks_in_720_page1_formsnap fn

stacks_in_720_page1_formsnap($);
	return stack;
})(stacks.stacks_in_720_page1);


// Javascript for stacks_in_799_page1
// ---------------------------------------------------------------------

// Each stack has its own object with its own namespace.  The name of
// that object is the same as the stack's id.
stacks.stacks_in_799_page1 = {};

// A closure is defined and assigned to the stack's object.  The object
// is also passed in as 'stack' which gives you a shorthand for referring
// to this object from elsewhere.
stacks.stacks_in_799_page1 = (function(stack) {

	// When jQuery is used it will be available as $ and jQuery but only
	// inside the closure.
	var jQuery = stacks.jQuery;
	var $ = jQuery;
	
//-- Fluid Image v1.9.0 Copyright @2010-2012 Joe Workman --//
var addEvent=function(){return document.addEventListener?function(a,c,d){if(a&&a.nodeName||a===window)a.addEventListener(c,d,!1);else if(a&&a.length)for(var b=0;b<a.length;b++)addEvent(a[b],c,d)}:function(a,c,d){if(a&&a.nodeName||a===window)a.attachEvent("on"+c,function(){return d.call(a,window.event)});else if(a&&a.length)for(var b=0;b<a.length;b++)addEvent(a[b],c,d)}}();var responsiveEnhance=function(img,width,monitor){if(img.length){for(var i=0,len=img.length;i<len;i++){responsiveEnhance(img[i],width,monitor);}}else{if(((' '+img.className+' ').replace(/[\n\t]/g,' ').indexOf(' large ')==-1)&&img.clientWidth>width){var fullimg=new Image();addEvent(fullimg,'load',function(e){img.src=this.src;img.className+=' large';});fullimg.src=img.getAttribute('data-fullsrc');}
if(monitor!=false){addEvent(window,'resize',function(e){responsiveEnhance(img,width,false);});addEvent(img,'load',function(e){responsiveEnhance(img,width,false);});}}};function detectIE789(){var version;if(navigator.appName=='Microsoft Internet Explorer'){var ua=navigator.userAgent;var re=new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");if(re.exec(ua)!=null){version=parseFloat(RegExp.$1)}if(version<=8.0){return true}else{if(version==9.0){if(document.compatMode=="BackCompat"){var mA=document.createElement("meta");mA.content="IE=EmulateIE8";document.getElementsByTagName('head')[0].appendChild(mA);return true}else{return false}}return false}}else{return false}}
$(document).ready(function(){var image=$('#stacks_in_799_page1 img.imageStyle:first');var version=parseInt($.browser.version);if(!($.browser.msie&&version<=8)){var source=image.attr('src');var responsiveWidth=Math.round(image.attr('width')*0.65);responsiveWidth=responsiveWidth>500?500:responsiveWidth;image.attr('data-fullsrc',source);image.attr('src','files/thumb_799.png');responsiveEnhance(image,responsiveWidth);}var width=image.attr('width');image.css('max-width',width+'px');if(detectIE789())image.css('width','auto');});

	return stack;
})(stacks.stacks_in_799_page1);


