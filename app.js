rock = document.getElementById('rockBtn');
paper = document.getElementById('paperBtn');
scissors = document.getElementById('scissorsBtn');

playerDisplay = document.getElementById('playerDisplay');
computerDisplay = document.getElementById('computerDisplay');
winnerDisplay = document.getElementById('winnerDisplay');
playerScoreDisplay = document.getElementById('playerScore');
computerScoreDisplay = document.getElementById('computerScore');
tieScoreDisplay = document.getElementById('tieScore')


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
  winnerDisplay.textContent = "Choose one !";
  playerScoreDisplay.textContent=`Player Score: ${playerScoreTotal}`;
  computerScoreDisplay.textContent=`Computer Score: ${computerScoreTotal}`;
  tieScoreDisplay.textContent=`Tie Score: ${tieScoreTotal}`;
  if (computerScoreTotal === 5) {
    winnerDisplay.textContent = "YOU LOSE";
    computerScoreTotal = 0;
    playerScoreTotal = 0;
    tieScoreTotal = 0;
  }
  if (playerScoreTotal === 5) {
    winnerDisplay.textContent = "YOU WIN";
    computerScoreTotal = 0;
    playerScoreTotal = 0;
    tieScoreTotal = 0;
  } 
  else if (tieScoreTotal === 5) {
    winnerDisplay.textContent = "TIE";
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
        tieScore = true;
        return tieScore;
      } else if (
        (playerSelection == "rock" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "rock")
      ) {
        computerScore = true;
        return computerScore;
      } else {
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
