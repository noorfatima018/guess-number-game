'use strict'


/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent="Correct Numberr"

document.querySelector('.number').textContent=12;
document.querySelector('.score').textContent=19;

document.querySelector('.guess').value=23;
comsole.log(document.querySelector('.guess').value);*/

let secretNumber=Math.trunc(Math.random()*20)+1;

let score=10;
let highscore=0;


document.querySelector('.btn-check').addEventListener('click' , function(){
 const guess=Number(( document.querySelector('.guess').value));
 console.log(guess, typeof guess);
  // jab koi number na dea ho
 if(!guess){
  document.querySelector('.message').textContent= "👻 No Number!";
 }
 // jab given number secretnumber k equal ho jaye
 else if(guess==secretNumber){
  document.querySelector('.message').textContent="🥳Correct Numberr";
  document.querySelector('body').style.backgroundColor=' rgb(148, 214, 47)';
  document.querySelector('.number').textContent=secretNumber;

  if(score>highscore){
    highscore=score;
    document.querySelector('.highscore').textContent=highscore;
  }

 }
  // jab number secretnumber say bara ho
 else if(guess>secretNumber){
  if(score>1){
     document.querySelector('.message').textContent="🤡Too High";
     score=score-1;
     document.querySelector('.score').textContent=score;
 }
 else {
  document.querySelector('.message').textContent="You lost the Game😓";
   document.querySelector('.score').textContent=0;
 }
  }
  // jab number secret number say chota ho
 else if(guess<secretNumber){
  if(score>1){
    document.querySelector('.message').textContent="🤓Too Low";
  score--;
  document.querySelector('.score').textContent=score;
  }
  else{
  document.querySelector('.message').textContent="You lost the Game😓";
  document.querySelector('.score').textContent=0;
  }
 }
});

document.querySelector('.btn-again').addEventListener('click', function(){
  score=10;
  secretNumber=Math.trunc(Math.random()*20)+1;

  document.querySelector('.message').textContent="Start Guessing...";
  document.querySelector('.guess').textContent='';
  document.querySelector('.score').textContent=score;
  document.querySelector('.number').textContent='?';

  document.querySelector('body').style.backgroundColor='#fff7d1';


});