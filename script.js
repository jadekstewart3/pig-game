'use strict';

// selecting 
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');


//Starting conditions
score0El.textContent = 0;
score0El.textContent = 0;
diceEl.classList.add('.hidden');
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

//Rolling dice functionality
btnRoll.addEventListener('click', function(){
  //genrate a random dice roll
  // display the dice
  // check for a rolled one? switch to next player : roll again
  const dice = Math.trunc(Math.random() * 6) + 1
  diceEl.classList.remove(".hidden");
  diceEl.src = `dice-${dice}.png`;
  if(dice !== 1){
    //add dice to current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
  }else {
    //switch player
    document.getElementById(`current--${activePlayer}`).textContent = 0;

    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});