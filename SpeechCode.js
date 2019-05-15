let speech;

function setup(){
	createCanvas(400,100);
	speech = new p5.Speech(voiceReady);
	
	function voiceReady(){
		console.log(speech.voices);
	}
}

// Speaking voice selection and settings 
function mousePressed(){
			
			speech.setPitch(5);
			speech.setVolume(10);
			speech.setRate(1.8);
			speech.setVoice('Google UK Enlgish');
			
			speech.speak('the abstract experience proved to both shatter the brain, and navigate introverted reality.  Yet daydreaming, a slippery activity, reconfigured an autistic experience through personal fantasies.  the unconscious space validated an abstract aesthetic, through confidence in the universe, and the eternal divine.  the compulsive painter is transcendental and effectively safe, within the spiritual consciousness. the central function of the unconscious, appears to be critically fragmented. the active psyche consists of malleable mental reality, alienation, and visual feelings.  the art of the self seeks spiritual sustenance, through intense aesthetic transformation and cold instinctive fear. Cyclical, painful and disturbing aspects of the creative imagination, are formed like a labyrinth that suggest, that what we experience is the assumption, of the dread of psychological life.  Reflective of mans relationship to the world, discovering a deeper truth signifies an inner insecurity.  the production of any image, is us slowly, and painstakingly experiencing the multifaceted symbolization, of the collective psyche, conscious and unconscious.  one act of creation, is essentially, the manifestation of the supra-human, or the divine.  vital to psychological purity, and the archetypal core of a great creative being.  we might describe this state as a ritual act, in the confusion of the external world, we turn to a plastic medium.  christ becomes canvas, feelings, expressive brush strokes, life, colour.   painters sleepwalking on to their canvas.  The world beyond the human, inspired unrest in man, this unrest drove man to the act of creation. the desire to move towards abstraction, can only be understood, as placing meaning of the unconscious realm, in to three-dimensional space.  Feeling of inner loss in the conscious world, is fundamental to the access of abstraction. Spiritual reality provides a space capable of raising consciousness, the unconscious source signals to a higher landscape. the mystery that transcends the material world, contains profound significance, intellectually, and emotionally.  painting is a reflective mirror of all the mental contents, of imagination, all messy, non-linear.  It cannot be fixed in meaning, only aesthetic engagement.  The symbolic experience of the viewer, affects their temporal perceptual apparatus.  expressionism ultimately constitutes a materially based devotional activity. man’s confidence in reality is deeply troubling. man’s confidence in reality is deeply troubling. man’s confidence in reality is deeply troubling.  ');

		}
