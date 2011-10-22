$(window).load(function() {
	console.log('initialize raptor');
	$('body').append('<a id="elRaptorButton" style="display:none;"></a>');
});

function raptorizeNow(event) {
	if (event.name === "raptorizeNow") {
		console.log('fire raptor now');
		$('#elRaptorButton').raptorize({
			'enterOn' : 'timer', //timer, konami-code, click
			'delayTime' : 50 //time before raptor attacks on timer mode
		});
	}
}

safari.self.addEventListener("message", raptorizeNow, false);