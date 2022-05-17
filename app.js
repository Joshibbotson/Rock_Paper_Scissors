rock = document.getElementById('rockBtn');
paper = document.getElementById('paperBtn');
scissors = document.getElementById('scissorsBtn');

let playerSelection;

rock.addEventListener('click', (e) => {
playerSelection = "rock";
game();
});

paper.addEventListener('click', (e) => {
  playerSelection = "paper";
  game();
  });

scissors.addEventListener('click', (e) => {
  playerSelection = "scissors";
  game();
  });
  


function game() {
  let computerScoreTotal = 0;
  let playerScoreTotal = 0;
  let tieScoreTotal = 0;

  for (let i = 0; i < 5; i++) {
    console.log(`-----Round ${i + 1}-----`);
    playRound();
    console.log(`Computer Score: ${computerScoreTotal}`);
    console.log(
      `Player Score: ${playerScoreTotal}\n______________________\n \n \n \n `
    );
  }

  if ((i = 5)) {
    winnerAnnouncement();
  }

  function winnerAnnouncement() {
    if (computerScoreTotal > playerScoreTotal) {
      return console.log(
        "\n______________________\n \n \nYOU LOSE\n \n \n______________________"
      );
    }
    if (computerScoreTotal === playerScoreTotal) {
      return console.log(
        "\n______________________\n \n \nD R A W\n \n \n______________________"
      );
    } else if (computerScoreTotal < playerScoreTotal) {
      return console.log(
        "\n______________________\n \n \nYOU WIN\n \n \n______________________"
      );
    }
  }

  ///////////////////////////////////////////////////////////////////////////////

  playRound(playerSelection, computerSelection);

  function playRound(player, computer) {
    let computerScore = 0;
    let playerScore = 0;
    let tieScore = 0;
    
    // COMPUTER CHOICE//
    const itemsArray = ["rock", "paper", "scissors"];

    computerPlay();
    function computerPlay() {
      return itemsArray[Math.floor(Math.random() * itemsArray.length)];
    }

    let computerSelection = computerPlay();
   

    //OUTCOME + SCORE POINT//

    console.log(`Computer: ${computerSelection}`);
    console.log(`Your choice: ${playerSelection}`);

    Outcome();
    function Outcome() {
      if (playerSelection == computerSelection) {
        console.log("Outcome: big o'l tie that\n______________________");
        tieScore = true;
        return tieScore;
      } else if (
        (playerSelection == "rock" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "rock")
      ) {
        console.log("Outcome: YOU LOSE\n______________________");
        computerScore = true;
        return computerScore;
      } else {
        console.log("Outcome: YOU WIN\n______________________");
        playerScore = true;
        return playerScore;
      }
    }
  }
}