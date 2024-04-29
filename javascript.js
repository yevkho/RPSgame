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
        console.log("Wrong input")
        x = getHumanChoice();
        return x;
        // not sure if the best, can't do a custom 'wrong input' message.
    }    
}

function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log("You win! Paper beats Rock");
            humanScore += 1;
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log("You win! Scissors beats Paper");
            humanScore += 1;
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log("You win! Paper beats Rock");
            humanScore += 1;
        } else if (humanChoice === computerChoice) {
            console.log("It's a tie!");
        } else {
            console.log("You loose!");
            computerScore += 1;
            // could *3 to match human, but there may be a better solution.
        }
        console.log(`You get ${humanScore}, Computer gets ${computerScore}`)
    } 

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log("You Won the Game!")
    } else if (humanScore < computerScore) {
        console.log("You Lost the Game...")
    } else {
        console.log("It's a tie.")
    }
}

playGame()
