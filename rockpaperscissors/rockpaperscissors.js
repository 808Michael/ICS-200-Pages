function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    
    playerSelection = playerSelection.toLowerCase();

    
    const validChoices = ["rock", "paper", "scissors"];

    
    if (!validChoices.includes(playerSelection)) {
        return "Invalid input. Please choose rock, paper, or scissors.";
    }

    
    if (playerSelection === computerSelection) {
        return `It's a tie! Both chose ${playerSelection}`;
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    for (let round = 1; round <= 5; round++) {
        const playerSelection = prompt("Enter your choice (rock, paper, or scissors):");
        const computerSelection = getComputerChoice(); 

        console.log(`Round ${round}: ${playRound(playerSelection, computerSelection)}`);

        
        if (playRound(playerSelection, computerSelection).includes("Win")) {
            playerScore++;
        } else if (playRound(playerSelection, computerSelection).includes("Lose")) {
            computerScore++;
        }
    }

    
    if (playerScore > computerScore) {
        console.log("Congratulations! You win the game!");
    } else if (playerScore < computerScore) {
        console.log("Sorry! You lose the game.");
    } else {
        console.log("It's a tie! The game is drawn.");
    }
}


playGame();
