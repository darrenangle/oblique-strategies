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
							"Tomatoghost",
							"Fake bravery",
							"Swing and miss",
							"A mile of dark",
							"Make it unethical",
							"Become your company",
							"We are not fit to sell",
							"Believe in a lucky coin", 
							"Be more lonely after dark", 
							"Ask who sees you as a slave",
							"Guitar strap or laptop bag?",
							"Remember what you came to do",
							"It's a marathon, not a sprint",
							"Be a ball in a mountain stream",
							"Your eye is filtering the goal",
							"Dirty bare foot cleaned by snow",
							"Take Tiger Mountain by strategy",
							"You believe your dreams need you",
,							"Try to be nostalgic for next year",
							"Someone invents the noodle sandwich",
							"It's leaking and you're OK with that", 
							"Make something happen in the kitchen",
							"That it can be done means it will be", 
							"Stop believing in death for 10 seconds",
							"A paper boat pushed into a lake nearby",
							"Ringtones tumble through the living air",
							"How you know there won't be any parking", 
							"Why are you waiting to be used correctly",
							"It's leaking and you're not OK with that", 
							"Loud trains on a screen in the far corner",
							"Macaroni flapping in the cool cool breeze", 
							"Someone you don't know has a familiar face", 
							"Give it room to breathe, then take it away",
							"A man convinced he can move cups with his mind", 
							"Silly anxiety tapered over time and a city walk",
							"Let the Tao show through your transparent skull", 
							"The dot over a lowercase 'i' is called a tittle", 
							"Without power or intention it breaks their will",
							"Create spiritual instructions for a sci-fi future",
							"Hypochondriacs meeting by a rain barrel on campus",
							"A generally hairy man who only drinks fizzy water",
							"Your face is made of emeralds for an hour every day",
							"You can do it, write through it and to it, maggot tunnel", 
							"Robot with hard-coded mood swings pining for a lost bell", 
							"A potent Oracle who lives in a shed behind a Krispy Kreme", 
							"out of the ground into the sky out of the sky into the dirt",
							"I want to come apart in a dark river, I want to phone it in",
							"Another world is always threatening the membrane of this one", 
							"An android widens its stance and says, 'this is the big dream'",
							"Celibate thinking is never far from ingestion of carbohydrates",
							"The hobbling man slides a plastic card into the wall and vanishes",  
							"A dog, turned into a rock for 40 years, remembering a bird at year 38", 
							"Several layers of fat and marbles, never mixing, hundreds of feet high",
							"An enormous fleshbrain, a tentacled ball with porous, blood-misted skin", 
							"A voicemail, distorted accidentally by a system, scares someone you know"

						];

	// console.log(tigerMountain.sort(function(a, b){
 	//  								return a.length - b.length; 
	// 									}));

})();