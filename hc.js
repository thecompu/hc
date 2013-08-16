$(document).ready(function() {
	var answer = Math.floor(Math.random() * 10) +1;
	console.log(answer);
	function game() {
		var guess = prompt("Choose a number!");
		guess = Number(guess);
		if (guess !== answer) {
	        $("#bg").animate({
	        	backgroundColor: "#F00",
	        	color: "#000",
	        }, 1000 );
	        console.log("Nope!");
	        game();
	    }
	    else {
		console.log("Yay!");
		}
	}
	game();
});
