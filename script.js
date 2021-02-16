"use strict";

const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");

const score0 = document.querySelector("#score--0");
const score1 = document.querySelector("#score--1");
const currentScore0 = document.querySelector("#current--0");
const currentScore1 = document.querySelector("#current--1");

const dice = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

let currentScore = 0;
let activePlayer = 0;
let playing = true;

const scores = [0, 0];

score0.textContent = 0;
score1.textContent = 0;

dice.classList.add("hidden");

function switchPlayer(){
document.getElementById(`current--${activePlayer}`).textContent = 0;
activePlayer = activePlayer === 0 ? 1 : 0;
currentScore = 0;
player0.classList.toggle("player--active");
player1.classList.toggle("player--active");
}

btnRoll.addEventListener("click", function () {
  if (playing)
  {
  const diceNo = Math.floor(Math.random() * 6) + 1;

  dice.classList.remove("hidden");
  dice.src = `dice-${diceNo}.png`;
  if (diceNo !== 1) {
    currentScore += diceNo;
    document.getElementById(
      `current--${activePlayer}`
    ).textContent = currentScore;
  } else {
    switchPlayer();
  }
}
});

btnHold.addEventListener('click',function()
{
  if(playing)
  {
 scores[activePlayer] += currentScore;
 
 document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

  if(scores[activePlayer]>=10)
  {
    playing = false;
    dice.classList.add("hidden");


    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active'); 
  }
else
{
  switchPlayer();
}
  }
})