rock = document.getElementById('rockBtn');
paper = document.getElementById('paperBtn');
scissors = document.getElementById('scissorsBtn');

playerDisplay = document.getElementById('playerDisplay');
computerDisplay = document.getElementById('computerDisplay');
winnerDisplay = document.getElementById('winnerDisplay');


let playerSelection;

rock.addEventListener('click', (e) => {
playerSelection = "rock";
playRound();
declareWinner();
});

paper.addEventListener('click', (e) => {
  playerSelection = "paper";
  playRound();
  declareWinner();
  });

scissors.addEventListener('click', (e) => {
  playerSelection = "scissors";
  playRound();
  declareWinner();
  });
  
  let computerScoreTotal = 0;
  let playerScoreTotal = 0;
  let tieScoreTotal= 0;
  
function declareWinner() {
  console.log(computerScoreTotal, playerScoreTotal, tieScoreTotal)
  if (computerScoreTotal === 5) {
    console.log("YOU LOSE");
    computerScoreTotal = 0;
    playerScoreTotal = 0;
    tieScoreTotal = 0;
  }
  if (playerScoreTotal === 5) {
    console.log("YOU WIN")
    computerScoreTotal = 0;
    playerScoreTotal = 0;
    tieScoreTotal = 0;
  } 
  else if (tieScoreTotal === 5) {
    console.log("TIE");
    computerScoreTotal = 0;
    playerScoreTotal = 0;
    tieScoreTotal = 0;
  }
}

  function playRound() {
    let computerScore = 0;
    let playerScore = 0;
    let tieScore = 0;
    
    // COMPUTER CHOICE//
    const itemsArray = ["rock", "paper", "scissors"];

    function computerPlay() {
      return itemsArray[Math.floor(Math.random() * itemsArray.length)];
    }

    let computerSelection = computerPlay();
   

    //OUTCOME + SCORE POINT//

    computerDisplay.textContent= `Computer: ${computerSelection}`
    playerDisplay.textContent= `Player: ${playerSelection}`

    Outcome();
    function Outcome() {
      if (playerSelection == computerSelection) {
        winnerDisplay.textContent = "Outcome: big o'l tie that"
        tieScore = true;
        return tieScore;
      } else if (
        (playerSelection == "rock" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "rock")
      ) {
        winnerDisplay.textContent = "Outcome: YOU LOSE";
        computerScore = true;
        return computerScore;
      } else {
        winnerDisplay.textContent = "Outcome: YOU WIN";
        playerScore = true;
        return playerScore;
      }

    }
    switch (computerScore) {
      case true:
        return computerScoreTotal++;
      default:
        computerScoreTotal;
    }

    switch (playerScore) {
      case true:
        return playerScoreTotal++;
      default:
        playerScoreTotal;
    }

    switch (tieScore) {
      case true:
        return tieScoreTotal++;
      default:
        tieScoreTotal;
    }
  }
