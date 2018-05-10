
//set default value
var letterChoose = null;
var wins = 0;
var losses = 0;
var guessesTotal = 10;
var guessesLeft = 10;
var triedLetters = [];

//set content in array
var computerChoose = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


//mod from a randomly generated number between 0-10000 range @ (0-25)
var appPickALetter = computerChoose [Math.floor(Math.random()*10000) % 26];

var newLetterChoose = function() {
    this.letterChoose = this.computerChoose[Math.floor(Math.random()*10000) % 26];
  };

var newGuessesLeft = function() {
    document.querySelector('#guessLeft').innerHTML = "Guesses left: " + guessesLeft;
};

var newTriedLetter = function() {
    document.querySelector('#guessedLetter').innerHTML = "Your have tried: " + triedLetters.join(', ');
};

var reset = function () {
    guessesTotal = 10;
    guessesLeft = 10;
    triedLetters = [];

    newLetterChoose();
    newGuessesLeft();
    newTriedLetter();
}


  newLetterChoose();
  newGuessesLeft();

  document.onkeyup = function(event) {
    guessesLeft--;
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  triedLetters.push(userGuess);
  newGuessesLeft();
  newTriedLetter();

    //if you want to win every time, use the following and check in console :)
    //console.log(letterChoose);


  if (guessesLeft > 0){
    if (userGuess == letterChoose){
        wins++;
        document.querySelector("#wins").innerHTML = "Wins: " + wins;
        alert("You win!");
        reset();
    }
}else if(guessesLeft == 0){
    losses++;
    document.querySelector("#losses").innerHTML = "Losses: " + losses;
    alert("Sorry, you lose!");
    reset();
}
};


