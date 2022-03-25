'use strict'
const player0El=document.querySelector('.player--0')
const player1El=document.querySelector('.player--1')
const score0El=document.querySelector('#score--0')
const score1El=document.getElementById('score--1')
const Current0El=document.getElementById('Current--0')
const Current1El=document.getElementById('Current--1')

const DiceE1=document.querySelector('.dice')
const btnNew=document.querySelector('.btn-new')
const btnRoll=document.querySelector('.btn-rolldice')
const btnHold=document.querySelector('.btn-hold')

let scores,currentScore,activePlayer,playing

const init = function(){
  
  scores = [0,0]
  currentScore = 0
  activePlayer = 0
  playing=true

  score0El.textContent=0;
  score1El.textContent=0;
  Current0El.textContent=0;
  Current1El.textContent=0;

  DiceE1.classList.add('hidden');
  player1El.classList.remove('player--winner')
  player0El.classList.remove('player--winner')
  player0El.classList.add('player--active')
  player1El.classList.remove('player--active')

}
init()

const switchPlayer = function(){
  document.getElementById(`Current--${activePlayer}`).textContent=0;
    currentScore=0
    activePlayer= activePlayer===0 ? 1:0;
    player0El.classList.toggle('player--active')
    player1El.classList.toggle('player--active')
}


btnRoll.addEventListener('click',function(){
  if(playing){

  // genrating a rendom dice roll
  const dice = Math.trunc(Math.random()*6)+1;
  console.log(dice); 
  // display dice
  DiceE1.classList.remove('hidden');

  DiceE1.src=`/img/dice-${dice}.png`

  // click for relloed 1

  if(dice!==1){
    // Add dice to current score
    currentScore += dice
    // Current0El.textContent=currentScore
    document.getElementById(`Current--${activePlayer}`).textContent=currentScore
  }else{
    // currentScore.textContent=0

    // Switch to next player
    switchPlayer()
  }
}
})

btnHold.addEventListener('click',function(){
  if(playing){
  scores[activePlayer]+=currentScore
  playing=false
  // console.log(scores[activePlayer]);
  document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer]
  if(scores[activePlayer]>=100){
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
    DiceE1.classList.add('hidden');
  }
  // switch player
  switchPlayer()
}
})


btnNew.addEventListener('click',init)
  // start new game

