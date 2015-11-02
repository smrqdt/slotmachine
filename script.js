var timer1, timer2, timer3;
var currentCards = {};
var stopped = 0;
var zahlPoints = {
	"7": 7,
	"8": 8,
	"9": 9,
	"10": 10,
	"bube": 12,
	"dame": 14,
	"koenig": 16,
	"ass": 20
};
var farbeMultiplier = {
	"herz": 1,
	"karo": 2,
	"pik": 3,
	"kreuz": 4
};

$(document).ready(function(){
	$("#button-start").click(function(){

		timer1 = startShuffle("card1");
		timer2 = startShuffle("card2");
		timer3 = startShuffle("card3");

		$("#button-start").hide();
		$("#button-stop").show();
		
	});

	$("#button-stop").click( function() {
		var timer;
		if (stopped == 0) {
			timer = timer1;
		} else if (stopped == 1) {
			timer = timer2;
		} else {
			timer = timer3;
		}

		clearInterval(timer);
		stopped++;

		if (stopped == 3) {
			auswertung();
		}

	});

	var auswertung = function() {
		var points = 0, multiply = 0;
		for (card in currentCards) {
			points+=zahlPoints[currentCards[card]["zahl"]];
			multiply+=farbeMultiplier[currentCards[card]["farbe"]];
		}

		if (currentCards["card1"]["farbe"] == currentCards["card2"]["farbe"] && currentCards["card1"]["farbe"] == currentCards["card3"]["farbe"]) {
			multiply = farbeMultiplier[currentCards["card1"]["farbe"]]*10
		}

		if (currentCards["card1"]["zahl"] == currentCards["card2"]["zahl"] && currentCards["card1"]["zahl"] == currentCards["card3"]["zahl"]) {
			multiply = multiply*2;
		}	

		points = points*multiply;

		$("#points_field").text(points);		
		$("#button-stop").hide();
		currentCards = {};
		stopped = 0;
		$("#button-start").show();
		};

	var startShuffle = function(field) {
		return setInterval( function() {
			// wuerfelt Karte
			var card = randElement(cards);
			setCard(field, card);
		},100);
	};

	// gibt aus übergebenem Array random Element zurück
	var randElement = function(array) {
		return array[Math.floor(Math.random()*(array.length))];
	};

	// setzt Bild in field auf bild der übergebenen karte
	var setCard = function(field, card){
		$("#"+field).find(".cards-img").attr("src", card["bild"]);
		currentCards[field] = card;
	};
	
});