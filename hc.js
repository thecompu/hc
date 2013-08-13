var answer = "5";
function game() {
	var guess = prompt("Choose a number!");
	if (guess !== answer)
        game();
	else console.log("Yay!");
}
game();