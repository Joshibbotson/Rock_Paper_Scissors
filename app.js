let userChoice
let display = console.log(userChoice)
const possibleChoices = document.querySelectorAll('button')


possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChoice = e.target.id
    display = userChoice
}))




/*
generateComputerChoice()
let userChoice = (prompt());
let computerChoice 
let result = null;

function generateComputerChoice () {
const randomNumber = Math.floor(Math.random() * 3) + 1

    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    if (randomNumber === 2) {
        computerChoice ='paper'
    }
    if (randomNumber === 3) {
        computerChoice = 'scissors'
    }
}
console.log (computerChoice);*/