function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    const validChoices = ["rock", "paper", "scissors"];

    if (!validChoices.includes(playerSelection)) {
        return "Invalid input.";
    }

    if (playerSelection === computerSelection) {
        return `Draw! Both chose ${playerSelection}`;
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

const playerScoreDisplay = document.getElementById("player-score");
const computerScoreDisplay = document.getElementById("computer-score");
const resultDisplay = document.getElementById("result");
const playAgainButton = document.getElementById("play-again-button");

let playerScore = 0;
let computerScore = 0;

function updateScore(result) {
    resultDisplay.textContent = result;
    playerScoreDisplay.textContent = `Player: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer: ${computerScore}`;
}

function playGame(playerSelection) {
    if (playerScore === 5 || computerScore === 5) {
        return;
    }

    const computerSelection = getComputerChoice();

    const result = playRound(playerSelection, computerSelection);

    if (result.includes("Win")) {
        playerScore++;
    } else if (result.includes("Lose")) {
        computerScore++;
    }

    updateScore(result);

    if (playerScore === 5 || computerScore === 5) {
        playAgainButton.style.display = "block";
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = "Player: 0";
    computerScoreDisplay.textContent = "Computer: 0";
    resultDisplay.textContent = "";
    playAgainButton.style.display = "none";
}

document.getElementById("rock-button").addEventListener("click", function() {
    playGame("rock");
});

document.getElementById("paper-button").addEventListener("click", function() {
    playGame("paper");
});

document.getElementById("scissors-button").addEventListener("click", function() {
    playGame("scissors");
});

playAgainButton.addEventListener("click", function() {
    resetGame();
});
