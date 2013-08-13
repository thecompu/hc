var answer = "5";
function game() {
	var guess = prompt("Choose a number!");
	while (guess !== answer) {
        console.log("Nope!");
        game();
	}
	console.log("Yay!");
}
game();