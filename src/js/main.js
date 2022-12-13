"use strict";

const computerDisplay = document.querySelector(".game__computer-choice");
const rock = document.querySelector(".rock__click");
const scissors = document.querySelector(".scissors__click");
const paper = document.querySelector(".paper__click");

const computerSelection = getComputerChoice();

// const userScore = parseInt(0);
// const computerScore = parseInt(0);

const winMessage = "Sucks to suck.";
const loseMessage = "You got lucky.";
const tieMessage = "Hm.";

let messageArray = [`I picked ${computerSelection}.`];
let speed = 50;
let textPosition = 0;

let pick = function typewriter() {
  document.querySelector("#computer-choice").innerHTML =
    messageArray[0].substring(0, textPosition) + "<span>\u25AE</span>";
  if (textPosition++ != messageArray[0].length) setTimeout(typewriter, speed);
  window.addEventListener("load", typewriter);
}

function getComputerChoice() {
  let options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * options.length)];
}

function playRound() {
  let playerSelection;

  rock.addEventListener("click", () => {
    playerSelection = "rock";
  });

  scissors.addEventListener("click", () => {
    playerSelection = "scissors";
  });

  paper.addEventListener("click", () => {
    playerSelection = "paper";
  });

  typewriter();
  getComputerChoice();
  if (playerSelection === computerSelection) {
    return pick;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return pick;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return pick;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return pick;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return pick;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return pick;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return pick;
  }
}

playRound();
//     if (playerSelection === "rock") {
//     } else if (playerSelection === "rock" && computerSelection === "scissors") {
//       let para = document.createElement("p");
//       para.textContent = "I picked scissors. Luck.";
//       computerDisplay.appendChild(para);
//     } else if (playerSelection === "rock" && computerSelection === "paper") {
//       let para = document.createElement("p");
//       para.textContent = "I picked paper. Get smothered.";
//       computerDisplay.appendChild(para);
//     }
//   }

//   scissors.addEventListener("click", () => {
//     playerSelection = "scissors";
//     let computerSelection = getComputerChoice();
//     if (playerSelection === "scissors" && computerSelection === "scissors") {
//       let para = document.createElement("p");
//       para.textContent = `I picked ${playerSelection} too. Hm.`;
//       computerDisplay.appendChild(para);
//     } else if (
//       playerSelection === "scissors" &&
//       computerSelection === "paper"
//     ) {
//       let para = document.createElement("p");
//       para.textContent = "I picked paper. You won't get me next time.";
//       computerDisplay.appendChild(para);
//     } else if (playerSelection === "scissors" && computerSelection === "rock") {
//       let para = document.createElement("p");
//       para.textContent = "I picked rock. Haha.";
//       computerDisplay.appendChild(para);
//     }
//   });

//   paper.addEventListener("click", () => {
//     playerSelection = "paper";
//     let computerSelection = getComputerChoice();
//     if (playerSelection === "paper" && computerSelection === "paper") {
//       let para = document.createElement("p");
//       para.textContent = `I picked ${playerSelection} too. Hm.`;
//       computerDisplay.appendChild(para);
//     } else if (
//       playerSelection === "paper" &&
//       computerSelection === "scissors"
//     ) {
//       let para = document.createElement("p");
//       para.textContent = "I picked scissors. Ha.";
//       computerDisplay.appendChild(para);
//     } else if (playerSelection === "paper" && computerSelection === "rock") {
//       let para = document.createElement("p");
//       para.textContent = "I picked rock. You got lucky.";
//       computerDisplay.appendChild(para);
//     }
//   });
// }
