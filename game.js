console.log("Welcome to Rock, Paper, Scissors!");

var humanScore = 0;
var computerScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function getHumanChoice() {
    let humanChoice = prompt("Please enter your choice: ");
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === 'rock' || humanChoice === 'paper' || humanChoice === 'scissors') {
        return humanChoice;
    }
    else {
        console.log("Invalid choice");
        getHumanChoice();
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    }
    else if (humanChoice === 'rock' && computerChoice === 'scissors' ||
        humanChoice === 'paper' && computerChoice === 'rock' ||
        humanChoice === 'scissors' && computerChoice === 'paper') {
        console.log("You win!");
        humanScore++;
    }
    else {
        console.log("You lose!");
        computerScore++;
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        return "You win the game!";
    }
    else if (humanScore < computerScore) {
        return "You lose the game!";
    }
    else {
        return "It's a tie!";
    }
}

console.log(playGame());