"use strict";

let number = document.querySelector(".number");
let message = document.querySelector(".message");
let currentScore = document.querySelector(".score");
let bestScore = document.querySelector(".highscore");
let container = document.querySelector(".container");
let button = document.querySelector(".btn");

let secretNumber = Math.floor(Math.random() * 10) + 1;
let score = 10;
let highestScore = 0;

// players guess input
document.querySelector(".guess").value = "";

// checks player's number entry
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // when there is no input
  if (!guess) {
    message.textContent = "Enter A Number First";

    // when player wins
  } else if (guess === secretNumber) {
    message.textContent = "Correct! You Win 😎";
    number.textContent = secretNumber;
    container.style.backgroundColor = "#8c2765";

    if (score > highestScore) {
      highestScore = score;
      bestScore.textContent = highestScore;
    }

    // when player is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      message.textContent = guess > secretNumber ? "Too High!" : "Too Low!";
      score--;
      currentScore.textContent = score;
    } else {
      message.textContent = "Game Over 😭";
      currentScore.textContent = 0;
    }
  }
});

// resets game
document.querySelector(".again").addEventListener("click", function () {
  score = 10;
  secretNumber = Math.floor(Math.random() * 10) + 1;
  currentScore.textContent = score;
  message.textContent = "Start Guessing...";
  number.textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector(".container").style.backgroundColor = "#17183b";
});
