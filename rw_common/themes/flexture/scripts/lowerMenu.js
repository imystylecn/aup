function lowerMenu(){
	$flexture('#menu script').remove();
	$flexture('#menu').css({'padding-top': '10px', 'margin-bottom': '0'}).appendTo('#lowerMenuPlaceholder');
}
$flexture(document).ready(function() { if( !($flexture('#mobileMenuTab').is(':visible')) ) { lowerMenu(); } });