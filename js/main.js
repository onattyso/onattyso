// //node.js this shit once site gets more robust 
var textArray =[
	"I was once a calculator for Halloween",
	"Catcher in the Rye is a great book",
	"Go Huskies!",
	"Radiohead",
	"Javascript",
	"I'm afraid of Spiderman",
	"2b || !2b",
	"ಠ_ಠ",
	"What happened to the wooden train with the wooden engine and wooden wheels?",
	"It wooden go!",
	"I take New Year's Resolutions very seriously",
	"Do one thing that scares you everyday",
	"LetsGrab.Coffee",
	"There's no place like 127.0.0.1",
	"I'm fluent in producer. What's the ETA? Let's regroup EOD and hash it out",
	"@onattyso",
	"#hashtag",
	"ᕕ( ᐛ )ᕗ",
	"Hey I just met you, but this is crazy...so here's my handle, so tweet me maybe",
	"Refresh",
	"The greatest trick the devil ever pulled was convincing the world he didn't exist.",
	"I just nerded all over myself.",
	"Raised in WA, lives in LA, in love with SF",
	"Fake Plastic Trees on repeat.",
	"If you could watch a movie again for the first time, which would it be?",
	"Always under construction",
	"Throw that shit on Git.",
	"Babe technology sandwich magnet",
	"Creative + Technologist"
];

// var randomNumber = textArray[Math.floor(Math.random()*textArray.length)];

var randomNumber = function() {
	return textArray[Math.floor(Math.random()*textArray.length)];
};

$(function() {

	var el = document.getElementById("draw-shapes"),
		two = new Two({
			fullscreen: true
		}).appendTo(document.body);

	// basics to making a circle: Take this out later
	// var r = 50;
	// var mouseX = 100;
	// var mouseY = 100;
	// var circle = two.makeCircle(mouseX, mouseY, r);
	// circle.noStroke().fill=randomColor();

	// Tell two to render everything to the screen
	two.update();

	//-------On mousedown, run the 'make a circle' loop

	var down = false;
	$

	var $document = $(document)
		.mousedown(function(event) {
			mouseX = event.pageX;
			mouseY = event.pageY;
			r = 10;
			down = true;
	  		console.log( event.pageX + ", " + event.pageY );

	  		var Circle = two.makeCircle(mouseX, mouseY, r);
	  		Circle.noStroke().fill=randomColor();
	  		two.bind('update', function() {
	  				if (down) {
	  					Circle.scale++;
	  				}
	  			}
	  		).play();
	  		$("#randomfact").html("").append(randomNumber());
	  		console.log("Do we see this?");
	  		})
		.mouseup(function(event) {
			down = false;
			$("#draw-shapes").stop();
		});	


	//-------
	//Circle Object:
	//Create a circle when the mouse is clicked at event.pageX and event.pageY 
	//as mouse is held down, radius++? until mouse released.

	function Circle(x, y, r) {
		this.x = 0;
		this.y = 0;
		this.r = 0;
		this.growing=false;
		this.growing_r= 0;

		// two.makeCircle(x, y, r);
		};
		
	Circle.prototype = {
		x: 10,
		y: 10,
		r: 5,
		color: randomColor
	}

	//

	function randomColor() {
		return 'rgba(' 
			  + Math.floor(Math.random() * 255) + ','
              + Math.floor(Math.random() * 255) + ','
              + Math.floor(Math.random() * 255) +','
              + .5 + ')';
			  // + Math.random()*.5 + ')';
	}

});
