(function(){

	var strategize = function(){
		var strategy = tigerMountain[Math.floor(Math.random()*tigerMountain.length)];
		return strategy;
	} 

	$('#take').click(function(){
		$('#strategy').html(strategize());
	});

	var tigerMountain = [
							"Silly anxiety tapered over time and a city walk.",
							"The dot over a lowercase 'i' is called a tittle.",
							"Someone you don't know has a familiar face.",
							"A generally hairy man who only drinks fizzy water. His worry and relief.",
							"An potent Oracle who lives in a shed behind a Krispy Kreme.",
							"Ethics and aesthetics are one. Make it unethical.",
							"Give it room to breathe, then take it away.",
							"A phone message, distorted accidentally, scares a woman who can't decipher it.",
							"Several layers of fat and marbles, never mixing, hundreds of feet high.",
							"Take Tiger Mountain by strategy." 
						];
})();