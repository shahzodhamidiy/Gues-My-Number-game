'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};
const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //When there is no input
  if (!guess) {
    displayMessage('⛔ No Number');
    //When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Congrats you win');

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    displayNumber(secretNumber);
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    //when guess is too high
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? ' 📈Too High' : '📈Too Low');

      score--;
      displayScore(score);
    } else {
      displayMessage(' 💥 You Lost The Game');
      document.querySelector('.score').textContent = 0;
    }
  }
});

const reset = document
  .querySelector('.again')
  .addEventListener('click', function () {
    score = 20;
    displayScore(score);
    document.querySelector('body').style.backgroundColor = '#222';
    displayMessage('Start guessing...');
    document.querySelector('.number').style.width = '15rem';
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayNumber('?');
    document.querySelector('.guess').value = '';
  });
