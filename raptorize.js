$(window).load(function() {
	$('body').append('<a id="elRaptorButton" style="display:none;"></a>');
});

function raptorizeNow(event) {
	if (event.name === "raptorizeNow") {
		$('#elRaptorButton').raptorize({
			'enterOn' : 'timer', //timer, konami-code, click
			'delayTime' : 50 //time before raptor attacks on timer mode
		});
	}
}

safari.self.addEventListener("message", raptorizeNow, false);