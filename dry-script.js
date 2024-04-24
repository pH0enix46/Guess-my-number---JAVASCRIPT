// // //
"use strict";

// DRY(DON'T REPEAT YOURSELF)
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

let displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // When there is no input
  if (!guess) {
    displayMessage("⛔️ No number !");
  }
  // When player wins
  else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number !");
    document.querySelector(".number").textContent = secretNumber;

    const gradient =
      "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)";
    document.querySelector("body").style.background = gradient;
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }
  // When guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too high !" : "📉 Too low !");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("💥 You lost the game !");
      document.querySelector(".score").textContent = 0;
    }
  }
});

// play again?
document.querySelector(".again").addEventListener("click", function () {
  const gradient =
    "linear-gradient(90deg, rgb(30, 109, 143) 0%, rgb(103, 11, 139) 50%, rgb(57, 129, 142) 100%)";
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.background = gradient;
  document.querySelector(".number").style.width = "15rem";
});
