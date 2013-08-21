$(document).ready(function() {
	var answer = Math.floor(Math.random() * 10) +1;
	console.log(answer);
	$("#game").on("submit", function(){
	var guess = $("#guess").val();
		if (guess !== answer) {
	        $("#bg").animate({
	        	backgroundColor: "#F00",
	        	color: "#000",
	        }, 1000 );
	        console.log("Nope!");
	    }
	    else {
		console.log("Yay!");
		}
	});
});

/*	function game() {
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
});*/