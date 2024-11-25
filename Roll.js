// takes user input and uses it to pick a random number
function rollDice(){
  let max = prompt('What is the max face?');
  let roll = Math.floor(Math.random()*(max-1+1))+1;
  console.log("||||||||||||||||");
  console.log("||            ||");
  console.log("||            ||");
  console.log(`||    ${roll}     ||`);
  // dice ill finish later i need to get this tested and see if the input works cause i cant use the right terminal here
};

// dice art
// ||||||||||||||||
// ||            ||
// ||            ||
// ||      ${roll}     ||
// ||            ||
// ||            ||
// ||||||||||||||||
