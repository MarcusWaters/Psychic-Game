


// wins 
// losses 
// guesses left 
// your guesses so far

// for (var i = 0; i < 9; i++) 


//run the function when the user presses a key


//list of possible computer selections

var computerSelections = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//starting variables
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessesSoFar = [];

//start the events
document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase(); //taking in user guess
    var computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)]; //computer selects random letter
    guessesSoFar.push(userGuess);
    
    //userguess into guessessofar
    if (userGuess == computerGuess) {
        wins++;
        alert("Winner Winner Chicken Dinner!");
        guessesLeft = 9; //reseting the guesses back to 9 so that the user can play again
        guessesSoFar.length = 0; //this removes everything from the guesses so far array, so that the guesses from the previous round don't show
    }
    else if (guessesLeft == 0){
        losses++;
        alert("Not your lucky day! Try again");
        guessesLeft = 9;
        guessesSoFar.length = 0;
    }
    else if (userGuess !== computerGuess){
        guessesLeft--; //decrementing the guesses left
    }  
    // Taking the tallies and displaying them in HTML    
    var html = "<h1>The Psychic Game</h1>" + 
    "<p>Guess what letter I'm thinking of!</p>" +
    "<p>Total Wins: " + 
    wins + 
    "</p>" +
    "<p>Total Losses: " + 
    losses + 
    "</p>" +
    "<p>Guesses Left: " + 
    guessesLeft + 
    "</p>" +
    "<p>Your Guesses so far: " +
    guessesSoFar +
    "</p>"
    ;
    // Placing the html into the game ID
    document.querySelector('#game').innerHTML = html;
}
