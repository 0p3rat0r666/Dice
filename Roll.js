// takes user input and uses it in a function
// all example use a call back function. try to do that

function rollDice(max){
  rl.close();
  let roll = Math.floor(Math.random()*(max-1+1))+1;
  console.log(roll);
};

// i want the input to be the max for rollDice();
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`What's your name?`, rollDice);
