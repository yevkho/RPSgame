
let humanScore = 0;
let computerScore = 0;

const endResult = document.querySelector("#endResult");

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", playRound)
})

let selections = ["rock", "paper", "scissors"];
function getComputerChoice () {
    return selections[Math.floor(Math.random()*3)]
}

function endGame () {
        if (humanScore === 5) {
        endResult.textContent = "You Won the Game!";
        humanScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        endResult.textContent = "You Lost the Game...";
        humanScore = 0;
        computerScore = 0;
    }
}

function playRound(e) {   
    let playerSelection = e.target.id;
    let computerSelection = getComputerChoice(); 
    const currentResult = document.querySelector("#currentResult");
    
    if (playerSelection === "rock" && computerSelection === "scissors") {
        currentResult.textContent = "You win! Paper beats Rock";
        humanScore += 1;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        currentResult.textContent = "You win! Scissors beats Paper";
        humanScore += 1;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        currentResult.textContent = "You win! Paper beats Rock";
        humanScore += 1;
    } else if (playerSelection === computerSelection) {
        currentResult.textContent = "It's a tie!";
    } else {
        currentResult.textContent = "You loose!";
        computerScore += 1;
    } 
    
    endResult.textContent = `You get ${humanScore}, Computer gets ${computerScore}`;
    
    if (humanScore === 5 || computerScore ===5) {
        endGame()
    }
} 