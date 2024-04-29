function getComputerChoice () {
    const x = Math.random();
    console.log(x);
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

function getHumanChoice () {
    let x = prompt("Type: 'rock' 'paper' or 'scissors'", "let's play");
    x = x.toLowerCase();
    console.log(x);
    if (x === "rock" || x === "paper" || x === "scissors") {
        return x
    } else {
        console.log("Wrong input!")
        x = getHumanChoice();
        return x;
        // not sure if the best, can't do a custom 'wrong input' message.
    }    
}

let humanScore = 0;
let computerScore = 0;
// does not recognise these variables if U put them in playRound

function playGame() {
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log("You win! Paper beats Rock");
            humanScore = humanScore + 1;
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log("You win! Scissors beats Paper");
            humanScore = humanScore + 1;
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log("You win! Paper beats Rock");
            humanScore = humanScore + 1;
        } else if (humanChoice === computerChoice) {
            console.log("It's a tie!");
        } else {
            console.log("You loose!");
            computerScore = computerScore + 1;
            // I could have *3 to match human, but may be a better solution.
        }
        console.log(humanScore, computerScore)
    } 

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
      
    playRound(humanSelection, computerSelection);
    
}

for (let i = 0; i < 5; i++) {
    playGame();
  }

if (humanScore > computerScore) {
    console.log("You Won the Game!")
} else if (humanScore < computerScore) {
    console.log("You Lost the Game...")
} else {
    console.log("It's a tie.")
}