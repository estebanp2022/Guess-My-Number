"use strict";

let message = document.querySelector(".message");
let currentScore = document.querySelector(".score");
let bestScore = document.querySelector(".highscore");
let container = document.querySelector(".container");
let button = document.querySelector(".btn");

let secretNumber = Math.floor(Math.random() * 10) + 1;
let score = 5;
let highestScore = 0;

// players guess input
document.querySelector(".guess").value = "";

// checks player's number entry
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // when there is no input
  if (!guess) {
    message.textContent = "Enter A Number";

    // when player wins
  } else if (guess === secretNumber) {
    message.textContent = "Correct! You Win 😎";

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
  score = 5;
  secretNumber = Math.floor(Math.random() * 10) + 1;
  currentScore.textContent = score;
  message.textContent = "Start Guessing...";
  document.querySelector(".guess").value = "";
});
