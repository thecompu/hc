var answer = "5";
function game() {
	var guess = prompt("Choose a number!");
	if (guess !== answer) {
        console.log("Nope!");
        game();
	}
	else console.log("Yay!");
}
game();