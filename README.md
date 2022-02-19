# Rock_Paper_Scissors
Rock paper scissors javascript game in console.


Notes: for variables that will be altered, define them with let computerScore; but within the game function give a set variable of =0

just console.log the scoreboard not the choices.

wrap


Overall scope of execution: 
- Choice: The computer must pick a choice at random and the user must pick a select a choice
- Scoreboard: A winner must be determined, logged and displayed based on the rules of rock, paper, scissors
- a loop must be iniated to allow for 3 rounds
    - the loop will need to use a score system to determine when to stop playing


psuedocode:
- Choice_Player: playerChoice through prompt, function to log playerChoice into a variable through using if and else statements. console log to present player's choice.
- Choice_Computer: computerChoice through function that uses a variable that returns a random number between 1-3, using if statements to match 1-3 to Rock,Paper,Scissors. The variable is logged into a new variable?(possibly the same variable for random number) this variable is then used as the computerChoice variable.

- Scoreboard: Function that takes the variables playerChoice and computerChoice, through if statements determines a winner, the if statement will could be boolean with two options (computerWin (true/false) or playerWin (true/false)). E.g. if playerChoice = "Rock" && computerChoice = "Scissors" {let playerWin = true}. This will need to be accompanied by another function for if statements? if playerWin = true {console.log = "You Win!"}. 

    - logging the victory to be used later for rounds: In the scoreboard function the victory will need to be logged through perhaps another function with a variable that has +1 for every win? 