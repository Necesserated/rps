const playerInput = prompt("Pick a move", "");
const playerSelection = playerInput.toLowerCase();
const computerSelection = getComputerChoice();
const main = playRound(playerSelection, computerSelection);

function getComputerChoice() {
  let computerOptions = ["rock", "paper", "scissors"];
  return computerOptions[Math.floor(Math.random() * computerOptions.length)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "paper" && computerSelection === "paper") {
    alert(`Computer played ${computerSelection} you tied`);
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    alert(`Computer played ${computerSelection} you lost`);
    computerScore++;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    alert(`Computer played ${computerSelection} you won`);
    userScore++;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    alert(`Computer played ${computerSelection} you won`);
    userScore++;
  } else if (playerSelection === "rock" && computerSelection === "rock") {
    alert(`Computer played ${computerSelection} you tied`);
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    alert(`Computer played ${computerSelection} you lost`);
    computerScore++;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    alert(`Computer played ${computerSelection} you lost`);
    computerScore++;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    alert(`Computer played ${computerSelection} you won`);
    userScore++;
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    alert(`Computer played ${computerSelection} you tied`);
  } else {
    alert("test");
  }
}

let userScore = parseInt(0);
let computerScore = parseInt(0);

let i = 0;
const play = () => {
  let playerSelection = prompt("Pick a move");
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
  console.log("your score = " + userScore);
  console.log("Computer's score = " + computerScore);
  i++;
  if (i !== 5) {
    play();
  } else {
    alert(
      "Game Over=> User(" + userScore + ") vs Computer(" + computerScore + ")"
    );
  }
};

play();
