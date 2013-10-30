/* 
 * NimbleHost Pulse VIP
 * Copyright 2010-2012. All rights reserved.
 *
 */

function nimblehostPulseVIP() {
	$flexture('#visitorInteractionPanel').pulse({
		opacity: [0,1]
	}, {
		duration: 2000,
		times: 1000
	});
		
	var pulsePanelConfig = { sensitivity: 3, interval: 50, over: pulseRevealPanel, timeout: 400, out: pulseHidePanel }; 	
	function pulseRevealPanel(){
		$flexture('#visitorInteractionPanel').stop().fadeTo('fast', 1);
		$flexture('#visitorInteractionPanel ul').slideDown('normal');
	}
	
	function pulseHidePanel(){
		$flexture('#visitorInteractionPanel ul').slideUp('normal');
		$flexture('#visitorInteractionPanel').pulse({
			opacity: [0,1]
		}, {
			duration: 2000,
			times: 1000
		});
	}
	if( !(navigator.userAgent.match(/iPad/i)) && (typeof nimblehostSolidVIP != 'function') ) { $flexture('#visitorInteractionPanel').hoverIntent(pulsePanelConfig); }
}

$flexture(document).ready(function() {
	if( !((navigator.userAgent.match(/iPhone/i))||(navigator.userAgent.match(/iPod/i))||(navigator.userAgent.match(/Android/))||(navigator.userAgent.match(/webOS/))) && (typeof nimblehostSolidVIP != 'function') ) {
		flexture.themeFunctions.visitorInteractionPanel();
		nimblehostPulseVIP();
		if( navigator.userAgent.match(/iPad/i) ) { flexture.themeFunctions.iPadAdjustments(); }
	}
});