let secret = Math.floor(Math.random() * 10) + 1;
let guess;

while ((guess = prompt("Guess a number between 0 and 10")) != secret) {
    alert(guess < secret ? "Too low!" : "Too high!");
}

alert("Congratulations! You got it!");