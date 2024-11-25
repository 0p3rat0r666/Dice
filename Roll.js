// takes user input and uses it in a function
// all example use a call back function. try to do that

function rollDice(max){
  let roll = Math.floor(Math.random()*(max-1+1))+1;
  console.log(roll);
};

// i want the input to be the max for rollDice();
