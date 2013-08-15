function getSecret (min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
var answer = Math.floor(Math.random() * 10) +1;
console.log(answer);
function game() {
	var guess = prompt("Choose a number!");
	guess = Number(guess);
	if (guess !== answer) {
        console.log("Nope!");
        game();
    }
    else {
	console.log("Yay!");
	}
}
game();