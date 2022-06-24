var count = 1;
const buttons = document.querySelectorAll("button[data-key]");
const display = document.querySelector(".display");
const scoreBoard = document.querySelector(".score-board");

var playerScore = 0;
var computerScore = 0;

var playRound = function () {
  var playerSelection = this.id;
  if (playerScore < 5 && computerScore < 5) {
    oneRound(playerSelection);
  }
  if (playerScore == 5) {
    console.log("YAAAY YOU WIN!");
    display.textContent = "YAAAY YOU WIN!";
  } else if (computerScore == 5) {
    display.textContent = "*blows raspberries!*";
    console.log("*blows raspberries!*");
  }
};

var oneRound = function (playerSel) {
  var playerSelection = playerSel;
  var computerSelection = computerSelect();
  console.log(playerSel, computerSelection);

  if (playerSelection == "stone" && computerSelection == "paper") {
    display.textContent = "Paper beats stone! Computer Wins!";
    console.log("Paper beats stone! Computer Wins!");
    computerScore++;
  } else if (playerSelection == "paper" && computerSelection == "stone") {
    display.textContent = "Paper beats stone! You Win!";
    console.log("Paper beats stone! You Win!");
    playerScore++;
  } else if (playerSelection == "paper" && computerSelection == "scissor") {
    display.textContent = "Scissor beats paper! Computer wins!";
    console.log("Scissor beats paper! Computer wins!");
    computerScore++;
  } else if (playerSelection == "scissor" && computerSelection == "paper") {
    display.textContent = "Scissor beats paper! You win!";
    console.log("Scissor beats paper! You win!");
    playerScore++;
  } else if (playerSelection == "stone" && computerSelection == "scissor") {
    display.textContent = "Stone beats scissor! You win!";
    console.log("Stone beats scissor! You win!");
    playerScore++;
  } else if (playerSelection == "scissor" && computerSelection == "stone") {
    display.textContent = "Stone beats scissor! Computer wins!";
    console.log("Stone beats scissor! Computer wins!");
    computerScore++;
  } else {
    display.textContent = "nobody wins! :)";
    console.log("nobody wins! :)");
  }
  let scoreString = playerScore + " : " + computerScore;
  scoreBoard.textContent = scoreString;
};

var computerSelect = function () {
  var choices = ["stone", "paper", "scissor"];
  var choice = choices[Math.floor(Math.random() * 3)];
  return choice;
};

buttons.forEach(function (button) {
  button.addEventListener("click", playRound);
});
