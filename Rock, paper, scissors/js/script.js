// Game //
var play = function() {
  // Options
  var game = ["rock", "paper", "scissors"];
  // Players
  var player1 = Math.random();
  var player2 = Math.random();
  // Player 1
  if (player1 < 0.52) {
    player1 = game[0];
  } else if (player1 <= 0.82) {
    player1 = game[1];
  } else {
    player1 = [2];
  }
  // Player 2
  if (player2 < 0.52) {
    player2 = game[0];
  } else if (player2 <= 0.82) {
    player2 = game[1];
  } else {
    player2 = game[2];
  }
  // Compare the options 
  var compare = function(choice1, choice2) {
    if (choice1 === choice2) {
      console.log("The result is a tie!");
    } else if (choice1 === game[0]) {
      if (choice2 === game[1]) {
        console.log("Computer wins!"); 
      } else if (choice2 === game[2]) {
        console.log("User wins!");
      } else {
        console.log("Nobody wins!"); 
      }
    } else if (choice1 === game[0]) {
      if (choice2 === game[2]) {
        console.log("User wins!");
      } else if (choice2 === game[1]) {
        console.log("Computer wins!");
      } else {
        console.log("Nobody wins!");
      }
    } else if (choice1 === game[1]) {
      if (choice2 === game[0]) {
        console.log("User wins!");
      } else if (choice2 === game[2]) {
        console.log("Computer wins!");
      } else {
        console.log("Nobody wins!");
      }
    } else if (choice1 === game[1]) {
      if (choice2 === game[2]) {
        console.log("Computer wins!");
      } else if (choice2 === game[0]) {
        console.log("User wins!");
      } else {
        console.log("Nobody wins!");
      }
    } else if (choice1 === game[2]) {
      if (choice2 === game[0]) {
        console.log("Computer wins!");
      } else if (choice2 === game[1]) {
        console.log("User wins!");
      } else {
        console.log("Nobody wins!");
      }
    } else if (choice1 === game[2]) {
      if (choice2 === game[1]) {
        console.log("User wins!");
      } else if (choice2 === game[0]) {
        console.log("Computer wins!");
      } else {
        console.log("Nobody wins!");
      }
    }
  };

  // Result //
  console.log("User choice:" + " " + player1); 
  console.log("Computer choice:" + " " + player2); 
  compare(player1, player2); 
};

play(); 
