$(document).ready(function() {
	var answer = Math.floor(Math.random() * 10) +1;
	console.log(answer);
	$("#game").on("submit", function(){
		event.preventDefault();
		var guess = $("#guess").val();
			console.log("Heading to Check!")
			if (guess == answer) {
				$("#bg").animate({
					backgroundColor: "#F3FF00"
				})
			}
			else if (Math.abs(answer - guess) <= 3) {
				console.log("Within 3 block")
		        $("#bg").animate({
		        	backgroundColor: "#FF0000"
		        }, 1000 );
		        console.log("You guessed within three.");
		    }
		    else if (Math.abs(answer - guess) <= 12) {
				console.log("Within 12 block")
		        $("#bg").animate({
		        	backgroundColor: "#AB00C2"
		        }, 1000 );
		        console.log("You guessed within twelve.");
		    }
		    else if (Math.abs(answer - guess) <= 24) {
				console.log("Within 24 block")
		        $("#bg").animate({
		        	backgroundColor: "#0084FF"
		        }, 1000 );
		        console.log("You guessed within twenty four.");
		    }
		    else {
			console.log("Ending now!");
			}
		});
});