//
// const itemsArray = ["rock", "paper", "scissors"];

// const playerSelection = prompt("Rock, paper or scissors?").toLowerCase;
// const computerSelection = computerPlay();

// function computerPlay() {
//   return [Math.floor(Math.random() * itemsArray.length)];
// }

// function playRound(playerSelection, computerSelection) {
//   if (playerSelection == computerSelection) {
//     console.log("draw");
//   } else if (
//     (playerSelection == "rock" && computerSelection == "paper") ||
//     (playerSelection == "paper" && computerSelection == "scissors") ||
//     (playerSelection == "scissors" && computerSelection == "rock")
//   ) {
//     console.log("You lose");
//   } else {
//     console.log("you win");
//   }
// }
// playRound(playerSelection, computerSelection);

// for (let i = 0; i < itemsArray.length; i++) {
//   console.log(computerPlay());
// }
let score = 2;
for (let i = 0; i < 3; i++) {
  game();
  console.log(score);
}

function game() {
  const answer = confirm("true or false?");
  let item = answer;
  let withinBox;
  let test = withinBox;

  switch (test) {
    case true:
      return score++;
    default:
      return score--;
  }
  makeItemTrue(item);

  function makeItemTrue(decision) {
    if ((decision = true)) {
      return (withinBox = true);
    } else if ((decision = false)) {
      return (withinBox = false);
    }
  }
}
