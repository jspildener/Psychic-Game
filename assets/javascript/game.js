 var wins = 0;
 var losses = 0;
 var guessesLeft = 9;
 var guessesSoFar = [];
 var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
     "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
 ];
 var generateComputerChoice = function() {
     return computerChoices[Math.floor(Math.random() * computerChoices.length)];
 };
 var computerGuess = generateComputerChoice();

 document.onkeyup = function(event) {
     var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

     if (userGuess === computerGuess) {
         wins++;
         document.getElementById("wins").innerHTML = wins;
         guessesLeft = 9;
         document.getElementById("guessesLeft").innerHTML = guessesLeft;
         guessesSoFar = [];
         document.getElementById("guessesSoFar").innerHTML = "";
         computerGuess = generateComputerChoice();
     } else {
         guessesLeft--;
         if (guessesLeft === 0) {
             losses++;
             document.getElementById("losses").innerHTML = losses;
             guessesLeft = 9;
             guessesSoFar = [];
             computerGuess = generateComputerChoice();
         } else {
             guessesSoFar.push(userGuess);
         }
         var guessesDisplayText = "";
         for (i = 0; i < guessesSoFar.length; i++) {
             var currentLetter = guessesSoFar[i];
             guessesDisplayText = guessesDisplayText + currentLetter;
             if (i != guessesSoFar.length - 1) {
                 guessesDisplayText = guessesDisplayText + ", ";
             }
         }
         document.getElementById("guessesSoFar").innerHTML = guessesDisplayText;
         document.getElementById("guessesLeft").innerHTML = guessesLeft;
     }
 };