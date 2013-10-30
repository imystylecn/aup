/* 
 * NimbleHost Drop Down Menu
 * Copyright 2010-2012. All rights reserved.
 *
 */

function dropDownMainMenu() {
	var ddMainMenuConfig = { over: revealMainMenuChildren, timeout: 500, out: hideMainMenuChildren }; 	
	function revealMainMenuChildren(){ $flexture(this).children("ul").css('opacity', 1).slideDown(300); }	
	function hideMainMenuChildren(){ $flexture(this).children("ul").fadeTo(300, 0).slideUp(); }
	
	if ( $flexture('#menu ul li.ddarrow span').length === 0 ) { $flexture("#menu ul ul").parent().addClass("ddarrow").append("<span class='childIndicator'></span>"); }
	$flexture("#menu ul ul").css({display: "none", left: $flexture("#menu ul a").css('padding-left')}); // Opera Fix
	$flexture("#menu ul ul ul").css({left: 0});
	$flexture("#menu ul li").hoverIntent(ddMainMenuConfig);
}

$flexture(document).ready(function() { if( !$flexture('#mobileMenuTab').is(':visible') && ( typeof nhAccordionMenu != 'function' ) && ( typeof nhHoverMenu != 'function' )){ dropDownMainMenu(); } });