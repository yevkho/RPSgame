function getComputerChoice () {
    const x = Math.random();
    if (x < 0.33) {
        const y = "rock"
        return y
    } else if (x >= 0.33 && x < 0.66) {
        const y = "paper"
        return y
    } else {
        const y = "scissors"
        return y
    }
}

let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", playRound)
})

    function playRound(e) {
        
        let playerSelection = e.target.id;
        console.log(playerSelection);
        
        let computerSelection = getComputerChoice();
        console.log(computerSelection);
        
        if (playerSelection === "rock" && computerSelection === "scissors") {
            console.log("You win! Paper beats Rock");
            humanScore += 1;
        } else if (playerSelection === "scissors" && computerSelection === "paper") {
            console.log("You win! Scissors beats Paper");
            humanScore += 1;
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            console.log("You win! Paper beats Rock");
            humanScore += 1;
        } else if (playerSelection === computerSelection) {
            console.log("It's a tie!");
        } else {
            console.log("You loose!");
            computerScore += 1;
            // could *3 to match human, but there may be a better solution.
        }
        const result = document.querySelector("#result");
        result.textContent = `You get ${humanScore}, Computer gets ${computerScore}`;

        if (humanScore === 5) {
            result.textContent = "You Won the Game!";
            humanScore = 0;
            computerScore = 0;
        } else if (computerScore === 5) {
            result.textContent = "You Lost the Game...";
            humanScore = 0;
            computerScore = 0;
        }
    } 