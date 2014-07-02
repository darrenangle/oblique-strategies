(function(){

	var strategize = function(){
		var strategy = tigerMountain[Math.floor(Math.random()*tigerMountain.length)];
		return strategy;
	} 

	$('#take').click(function(){
		$('.fader').hide();
		var strat = strategize();
		$("<div class='fader'></div>")	.appendTo("#strategy")
										.hide()
										.append(strat)
										.fadeIn('slow');
	});

	$('.button').hide().fadeIn(1000);


	var tigerMountain = [
							"Swing and miss",
							"Be more lonely after dark", 
							"Guitar strap or laptop bag?", 
							"Dirty bare foot cleaned by snow", 
							"Take Tiger Mountain by strategy", 
							"It's leaking and you're OK with that", 
							"Make an ocarina out of a wide carrot", 
							"A paper boat pushed into a lake nearby",
							"It's leaking and you're not OK with that", 
							"Loud trains on a screen in the far corner", 
							"Someone you don't know has a familiar face", 
							"Give it room to breathe, then take it away", 
							"Silly anxiety tapered over time and a city walk", 
							"The dot over a lowercase 'i' is called a tittle", 
							"Without power or intention, it breaks their will", 
							"Ethics and aesthetics are one - Make it unethical", 
							"Hypochondriacs meeting by a rain barrel on campus", 
							"Your face is made of emeralds for an hour every day", 
							"Robot with hard-coded mood swings pining for a lost bell", 
							"A potent Oracle who lives in a shed behind a Krispy Kreme", 
							"out of the ground into the sky out of the sky into the dirt", 
							"An android widens its stance and says, 'this is the big dream'", 
							"A dog, turned into a rock for 40 years, remembering a bird at year 38", 
							"Several layers of fat and marbles, never mixing, hundreds of feet high", 
							"A generally hairy man who only drinks fizzy water - His worry and relief", 
							"A phone message, distorted accidentally, scares a woman who can't decipher it"
							

						];

	// console.log(tigerMountain.sort(function(a, b){
 	//  								return a.length - b.length; 
	// 									}));

})();