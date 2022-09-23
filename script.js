'use strict';

let random = Math.floor(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (guess === random) {
    document.querySelector('.number').innerHTML = random;
    document.querySelector('.message').innerHTML = 'Correct Number !';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.guess').style.fontSize = '10rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }
  } else if (!guess) {
    document.querySelector('.message').innerHTML = 'Not a Number !';
  } else if (guess > random) {
    document.querySelector('.message').innerHTML = 'Too High !';
    document.querySelector('.score').innerHTML = score - 1;
    score--;
  } else if (guess < random) {
    document.querySelector('.message').innerHTML = 'Too Low !';
    document.querySelector('.score').innerHTML = score - 1;
    score--;
  }
  if (score < 1) {
    document.querySelector('.message').innerHTML = 'You lose';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  random = Math.floor(Math.random() * 20 + 1);
  score = 20;
  document.querySelector('.message').innerHTML = 'Start guessing...';
  document.querySelector('.number').innerHTML = random;
  document.querySelector('.score').innerHTML = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').style.fontSize = '6rem';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').innerHTML = '?';
});
