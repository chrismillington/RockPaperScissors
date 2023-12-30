const paper = document.querySelector("#paper");
const rock = document.querySelector("#rock");
const scissors = document.querySelector("#scissors");
const playerPic = document.querySelector(".human");
const computerPic = document.querySelector(".computer");
const winnerText = document.querySelector(".winnerText");
const choice = document.querySelector(".choice");

function playerSelection(playerChoice) {
  choice.style.visibility = "hidden";
  winnerText.innerHTML = "";
  const hands = ["paper", "rock", "scissors"];
  const computerChoice = Math.floor(Math.random() * 3);

  setTimeout(() => {
    choice.style.visibility = "visible";
    computerPic.src = hands[computerChoice] + ".png";

    if (playerChoice === "paper") {
      if (computerChoice === 0) winnerText.innerHTML = "Draw";
      else if (computerChoice === 1) winnerText.innerHTML = "You Win";
      else winnerText.innerHTML = "You Lose";
    } else if (playerChoice === "rock") {
      if (computerChoice === 0) winnerText.innerHTML = "You lose";
      else if (computerChoice === 1) winnerText.innerHTML = "You Draw";
      else winnerText.innerHTML = "You win";
    } else {
      if (computerChoice === 0) winnerText.innerHTML = "You win";
      else if (computerChoice === 1) winnerText.innerHTML = "You lose";
      else winnerText.innerHTML = "You Draw";
    }
  }, 500);
}

paper.addEventListener("click", () => {
  playerSelection("paper");
  playerPic.src = "paper.png";
});
rock.addEventListener("click", () => {
  playerSelection("rock");
  playerPic.src = "rock.png";
});
scissors.addEventListener("click", () => {
  playerSelection("scissors");
  playerPic.src = "scissors.png";
});
