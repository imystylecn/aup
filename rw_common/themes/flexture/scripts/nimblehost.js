/* # RwGet # */
RwGet = {
    pathto: function(path, file) {
        var rtrim = function(str, list) {
            var charlist = !list ? 's\xA0': (list + '').replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g, '$1');
            var re = new RegExp('[' + charlist + ']+$', 'g');
            return (str + '').replace(re, '');
        };
        var jspathto = rtrim(RwSet.pathto, "javascript.js");
        if ((path !== undefined) && (file !== undefined)) {
            jspathto = jspathto + path + file;
        } else if (path !== undefined) {
            jspathto = jspathto + path;
        }
        return jspathto;
    },
    baseurl: function(path, file) {
        var jsbaseurl = RwSet.baseurl;
        if ((path !== undefined) && (file !== undefined)) {
            jsbaseurl = jsbaseurl + path + file;
        } else if (path !== undefined) {
            jsbaseurl = jsbaseurl + path;
        }
        return jsbaseurl;
    }
};
//User customizable divider for menu items.
var menuDivider = ' / ';
// 'flexture' is the global object for the flexture RapidWeaver theme
var flexture = {};
// reduce potential conflicts with other scripts on the page
flexture.jQuery = jQuery.noConflict(true);
var $flexture = flexture.jQuery;
// Create unique object and namespace for theme functions
flexture.themeFunctions = {};
// Define a closure
flexture.themeFunctions = (function(flexturize) {
    // When jQuery is used it will be available as $ and jQuery but only
    // inside the closure.
    var jQuery = flexture.jQuery;
    var $ = jQuery;
	var $flexture = jQuery.noConflict();


	/* 
	 * NimbleHost Theme Functions
	 * Copyright 2010-2012. All rights reserved.
	 *
	 */
	
	$flexture(document).ready(function(){
		extraContent();
		standardRwPageEnhancements();
	});
	
	flexture.themeFunctions.menuFunctions = function (menuDivider) {
		$flexture('#menu').addClass('activated');
		if ((typeof nhAccordionMenu != 'function') && !($flexture.browser.opera)) {
			$flexture('<span class="currentMenuItemBorder"></span>').appendTo('#menu ul .current');
			$flexture('<span class="ancestorMenuItemBorder"></span>').appendTo('#menu ul .currentAncestor');
			var mb_currentItemWidth = $flexture('#menu ul .current').width();
			var mb_ancestorItemWidth = $flexture('#menu ul .currentAncestor').width();
			$flexture('.currentMenuItemBorder').css({'width': mb_currentItemWidth}).fadeIn(1000);
			$flexture('.ancestorMenuItemBorder').css({'width': mb_ancestorItemWidth}).fadeIn(1000);
		}	
		$flexture('#menu ul a').parent().prepend($flexture('<span class="menuDivider">' + menuDivider + '</span>'));
		$flexture('#menu ul .menuDivider').filter(':first').css({'display': 'none'});
	}
	
	flexture.themeFunctions.visitorInteractionPanel = function() {
		$flexture('<div id="visitorInteractionPanel"><ul></ul></div>').appendTo('#pageTopShadow');
		
		if( $flexture('#visitorInteractionPanel').is(':visible') ) {
			$flexture('<li><p id="adjustWidth">< ></p></li>').appendTo('#visitorInteractionPanel ul');
			var aw_currentWidth = $flexture('#mainContentWrapper').width();
			var aw_headerImageBackgroundPositionX = $flexture('.headerImage').css('background-position-x');
			var aw_headerImageBackgroundPositionY = $flexture('.headerImage').css('background-position-y');
			var aw_changedWidth = false;
			$flexture('#adjustWidth').click(function(){
				if( aw_currentWidth != "92%" && !aw_changedWidth ) {
					$flexture('#pageTopContent, #mainContentTopShadow, #mainContentWrapper, #breadcrumbContainer, #footer, #extraContainer6').animate({width: "92%"}, 'normal');
					if ( $flexture('.headerImage').is(':visible') ) {
						$flexture('.headerImage').fadeTo('normal', 0).animate({'background-position-x': '0px', 'background-position-y': '0px',opacity: 1}, 1100);
					}
					if ( $flexture('#extraContainer1').is(':visible') ) {
						$flexture('#extraContainer1').animate({width: "92%"}, 'normal');
					}
					
					aw_changedWidth = true;
				} else {
					$flexture('#pageTopContent, #mainContentTopShadow, #mainContentWrapper, #breadcrumbContainer, #footer, #extraContainer6').animate({width: aw_currentWidth}, 'normal');
					$flexture('.headerImage').animate({'background-position-x': aw_headerImageBackgroundPositionX, 'background-position-y': aw_headerImageBackgroundPositionY}, 1100);
					
					if ( $flexture('#extraContainer1').is(':visible') ) {
						$flexture('#extraContainer1').animate({width: aw_currentWidth}, 'normal');
					}
					
					aw_changedWidth = false;
				}
			});
			
			$flexture('<li><div id="headerColor1"></div></li><li><div id="headerColor2"></div></li><li><div id="headerColor3"></div></li>').appendTo('#visitorInteractionPanel ul');
			var headerColor1 = $flexture('#headerColor1').css('background-color');
			var headerColor2 = $flexture('#headerColor2').css('background-color');
			var headerColor3 = $flexture('#headerColor3').css('background-color');
			$flexture('#headerColor1').click(function(){
				$flexture('body').animate({'backgroundColor':headerColor1}, 500);
			});
			$flexture('#headerColor2').click(function(){
				$flexture('body').animate({'backgroundColor':headerColor2}, 500);
			});
			$flexture('#headerColor3').click(function(){
				$flexture('body').animate({'backgroundColor':headerColor3}, 500);
			});
			
			$flexture('<li><p id="adjustTextSize">a A</p></li>').appendTo('#visitorInteractionPanel ul');
			var textSize = 1;
			var newFontSize = '1em';
			$flexture('#adjustTextSize').click(function(){		
				if ( textSize == 1 ) {
					newFontSize = '1.15em';
					textSize ++;
				} else if ( textSize == 2 ) {
					newFontSize = '0.85em';
					textSize ++;
				} else if ( textSize == 3 ) {
					newFontSize = '1em';
					textSize = 1;
				} else {
					newFontSize = '1em';
					textSize = 1;
				}
				$flexture('#contentContainer, #sidebarContainer, #footerWrapper, #extraContainer1, #extraContainer2, #extraContainer3, #extraContainer4, #extraContainer5, #extraContainer6').animate({fontSize: newFontSize}, 'normal');
			});
		}
	}
	
	flexture.themeFunctions.iPadAdjustments = function() {
		if( $flexture('#visitorInteractionPanel').is(':visible') ) {
			$flexture('#visitorInteractionPanel').stop().fadeTo('fast', 1);
			$flexture('#adjustWidth').css({'display':'none'});
			
			$flexture('<li><p id="iPadCloseButton">X</p></li>').appendTo('#visitorInteractionPanel ul');
			
			$flexture('#visitorInteractionPanel').click(function(){
				if ( !($flexture('#visitorInteractionPanel ul').is(':visible')) ) { $flexture('#visitorInteractionPanel ul').slideDown('normal'); }
			});
			
			$flexture('#iPadCloseButton').click(function(){ $flexture('#visitorInteractionPanel ul').slideUp('normal'); });
		}
		//Following code prevents a thin strip of space from appearing on iPad when title/slogan
		//is aligned right in theme options, but slogan is hidden via RW Site Setup
		if( $flexture('#pageTopContent .title h1 span').is(':empty') ) { $flexture('#pageTopContent .title h1 span').css('margin-left', '0'); }
	}
	
	flexture.themeFunctions.mobileMenu = function () {
		$flexture('#mobileMenuTab').addClass('activated');
		var mobileMenuConfig = { sensitivity: 3, interval: 50, over: revealMobileMenuChildren, timeout: 300, out: hideMobileMenuChildren }; 		
		function revealMobileMenuChildren(){ if( $flexture(window).width() < 481 ) { $flexture(this).children("ul").css('opacity', 1).slideDown(300); } }
		function hideMobileMenuChildren(){ if( $flexture(window).width() < 481 ) { $flexture(this).children("ul").fadeTo(300, 0).slideUp(); $flexture('.hoverMenuItemBorder').remove(); } }
		if ( $flexture('#menu ul li.ddarrow span').length === 0 ) { $flexture("#menu ul ul").parent().addClass("ddarrow").append("<span></span>"); }
		$flexture("#menu ul ul").css({display: 'none', left: 0});
		$flexture("#menu ul li").hoverIntent(mobileMenuConfig);
		$flexture('#mobileMenuTab').click(function () {
			$flexture('#menu').slideToggle('medium', function() {
				if ( $flexture('#menu').is(':visible') ) { $flexture('#mobileMenuTab').animate({'background-position-x': '0px', 'background-position-y': '0px'}, 0); } 
				else { $flexture('#mobileMenuTab').animate({'background-position-x': '0px', 'background-position-y': '-50px'}, 0); }
			});
		});
	}
	
	/* ExtraContent r1.4.2 w/jQuery - Change the value of ecValue to suit */
	function extraContent() { var ecValue = 10; for (i=1;i<=ecValue;i++) { $flexture('#myExtraContent'+i+' script').remove(); $flexture('#myExtraContent'+i).appendTo('#extraContainer'+i); } }
	
	function standardRwPageEnhancements() {
		$flexture('<div class="entryDivider"></div>').insertAfter('.filesharing-item');
		$flexture('.filesharing-item').addClass('enhancedFilesharingItem');
		
		/* automatically stretch background gradients and shadows to fill browser window if necessary */
		var browserHeight = $flexture(window).height();
		var siteContentHeight = $flexture('body').height();
		if ( browserHeight > siteContentHeight ) {
			var adjustHeight = browserHeight - siteContentHeight;
			$flexture('#pageBottomShadow').animate({'height': '+=' + adjustHeight}, 0);
		}
		
		/* same as above except waits 1 second first, for plugins that may adjust the site height after the page has loaded */
		setTimeout(function() {
			browserHeight = $flexture(window).height();
			siteContentHeight = $flexture('body').height();
			if ( browserHeight > siteContentHeight ) {
				adjustHeight = browserHeight - siteContentHeight;
				$flexture('#pageBottomShadow').animate({'height': '+=' + adjustHeight}, 1000);
			}
		}, 1000);
	}
	
	/* hoverIntent r6 // 2011.02.26 // jQuery 1.5.1+ <http://cherne.net/brian/resources/jquery.hoverIntent.html> @param  f  onMouseOver function || An object with configuration options @param  g  onMouseOut function  || Nothing (use configuration options object) @author Brian Cherne brian(at)cherne(dot)net */
	(function($){$.fn.hoverIntent=function(f,g){var cfg={sensitivity:7,interval:100,timeout:0};cfg=$.extend(cfg,g?{over:f,out:g}:f);var cX,cY,pX,pY;var track=function(ev){cX=ev.pageX;cY=ev.pageY};var compare=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);if((Math.abs(pX-cX)+Math.abs(pY-cY))<cfg.sensitivity){$(ob).unbind("mousemove",track);ob.hoverIntent_s=1;return cfg.over.apply(ob,[ev])}else{pX=cX;pY=cY;ob.hoverIntent_t=setTimeout(function(){compare(ev,ob)},cfg.interval)}};var delay=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);ob.hoverIntent_s=0;return cfg.out.apply(ob,[ev])};var handleHover=function(e){var ev=jQuery.extend({},e);var ob=this;if(ob.hoverIntent_t){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t)}if(e.type=="mouseenter"){pX=ev.pageX;pY=ev.pageY;$(ob).bind("mousemove",track);if(ob.hoverIntent_s!=1){ob.hoverIntent_t=setTimeout(function(){compare(ev,ob)},cfg.interval)}}else{$(ob).unbind("mousemove",track);if(ob.hoverIntent_s==1){ob.hoverIntent_t=setTimeout(function(){delay(ev,ob)},cfg.timeout)}}};return this.bind('mouseenter',handleHover).bind('mouseleave',handleHover)}})(jQuery);
	
	/* jQuery Color Animations. Copyright 2007 John Resig. Released under the MIT and GPL licenses. */
	(function(jQuery){ /* We override the animation for all of these color styles */ jQuery.each(['backgroundColor', 'borderBottomColor', 'borderLeftColor', 'borderRightColor', 'borderTopColor', 'color', 'outlineColor'], function(i,attr){ jQuery.fx.step[attr] = function(fx){ if ( !fx.colorInit ) { fx.start = getColor( fx.elem, attr ); fx.end = getRGB( fx.end ); fx.colorInit = true; } fx.elem.style[attr] = "rgb(" + [ Math.max(Math.min( parseInt((fx.pos * (fx.end[0] - fx.start[0])) + fx.start[0]), 255), 0), Math.max(Math.min( parseInt((fx.pos * (fx.end[1] - fx.start[1])) + fx.start[1]), 255), 0), Math.max(Math.min( parseInt((fx.pos * (fx.end[2] - fx.start[2])) + fx.start[2]), 255), 0) ].join(",") + ")"; } }); /* Color Conversion functions from highlightFade By Blair Mitchelmore http://jquery.offput.ca/highlightFade/ */ /*  Parse strings looking for color tuples [255,255,255] */ function getRGB(color) { var result; /* Check if we're already dealing with an array of colors */ if ( color && color.constructor == Array && color.length == 3 ) return color; /* Look for rgb(num,num,num) */ if (result = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(color)) return [parseInt(result[1]), parseInt(result[2]), parseInt(result[3])]; /* Look for rgb(num%,num%,num%) */ if (result = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(color)) return [parseFloat(result[1])*2.55, parseFloat(result[2])*2.55, parseFloat(result[3])*2.55]; /* Look for #a0b1c2 */ if (result = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(color)) return [parseInt(result[1],16), parseInt(result[2],16), parseInt(result[3],16)]; /* Look for #fff */ if (result = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(color)) return [parseInt(result[1]+result[1],16), parseInt(result[2]+result[2],16), parseInt(result[3]+result[3],16)]; /*  Look for rgba(0, 0, 0, 0) == transparent in Safari 3 */ if (result = /rgba\(0, 0, 0, 0\)/.exec(color)) return colors['transparent']; /* Otherwise, we're most likely dealing with a named color */ return colors[jQuery.trim(color).toLowerCase()]; } function getColor(elem, attr) { var color; do { color = jQuery.curCSS(elem, attr); /* Keep going until we find an element that has color, or we hit the body */ if ( color != '' && color != 'transparent' || jQuery.nodeName(elem, "body") ) break; attr = "backgroundColor"; } while ( elem = elem.parentNode ); return getRGB(color); }; /* Some named colors to work with From Interface by Stefan Petre http://interface.eyecon.ro/ */ var colors = { aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent: [255,255,255] }; })(jQuery); 	
	
	/* Pulse plugin for jQuery @author James Padolsey (http://james.padolsey.com) @version 0.1 @updated 16-DEC-09 Note: In order to animate color properties, you need the color plugin from here: http://plugins.jquery.com/project/color @info http://james.padolsey.com/javascript/simple-pulse-plugin-for-jquery/  */ 	
	jQuery.fn.pulse = function( prop, speed, times, easing, callback ) { if ( isNaN(times) ) { callback = easing; easing = times; times = 1; } var optall = jQuery.speed(speed, easing, callback), queue = optall.queue !== false, largest = 0; for (var p in prop) { largest = Math.max(prop[p].length, largest); } optall.times = optall.times || times; return this[queue?'queue':'each'](function(){ var counts = {}, opt = jQuery.extend({}, optall), self = jQuery(this); pulse(); function pulse() { var propsSingle = {}, doAnimate = false; for (var p in prop) { /* Make sure counter is setup for current prop */ counts[p] = counts[p] || {runs:0,cur:-1}; /* Set "cur" to reflect new position in pulse array */ if ( counts[p].cur < prop[p].length - 1 ) { ++counts[p].cur; } else { /* Reset to beginning of pulse array */ counts[p].cur = 0; ++counts[p].runs; } if ( prop[p].length === largest ) { doAnimate = opt.times > counts[p].runs; } propsSingle[p] = prop[p][counts[p].cur]; } opt.complete = pulse; opt.queue = false; if (doAnimate) { self.animate(propsSingle, opt); } else { optall.complete.call(self[0]); } } }); };
	
	/* Triggers a function when the window is resized, at 100ms intervals. @author Louis Remi (https://github.com/louisremi/jquery-smartresize/) */
	flexture.themeFunctions.on_resize = function(c,t){onresize=function(){clearTimeout(t);t=setTimeout(c,100)};return c};
	
	return flexturize;
})(flexture.themeFunctions);