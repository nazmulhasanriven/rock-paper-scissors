const options = ["rock", "paper", "scissors"];
let choices = document.querySelectorAll(".btn");

function CheckWinner(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "Tie";
  } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")
  ) {
    return "Player";
  } else {
    return "computer";
  }
}

function PlayRound(playerSelection, computerSelection) {
  const result = CheckWinner(playerSelection, computerSelection);
  if (result == "Tie") {
    return `It's a Tie`;
  } else if (result == "Player") {
    return `You win! ${playerSelection} beats ${computerSelection}.`;
  } else {
    return `Computer wins! ${computerSelection} beats ${playerSelection}.`;
  }
}

function getComputerChoice() {
  const choise = options[Math.floor(Math.random() * options.length)];
  return choise;
}

function getPlayerChoice(e) {
  const playerSelection = e.target.id;
  return playerSelection;
}

choices.forEach((choise) => choise.addEventListener("click", game));
function game(e) {
  const computerSelection = getComputerChoice();
  const playerSelection = getPlayerChoice(e);
  const round = CheckWinner(playerSelection, computerSelection);
}
