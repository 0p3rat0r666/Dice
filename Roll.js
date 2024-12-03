// takes user input and uses it to pick a random number
function rollDice(){
  let max = prompt('What is the max face?');
  let roll = Math.floor(Math.random()*(max-1+1))+1;
  console.log('|||||||||||||||');
  console.log('||           ||');
  console.log('||           ||');
  if(roll<10){//when its a one digit its like this for centering
    console.log(`||     ${roll}     ||`);
  }else if(roll>=10&&roll<100){// two digit centering
    console.log(`||    ${roll}     ||`);
  }else if(roll>=100&&roll<1000){// three digit
    console.log(`||    ${roll}    ||`);
  }else{
    console.log(roll);// if its too large to format
  }
  console.log('||           ||');
  console.log('||           ||');
  console.log('|||||||||||||||');
};

// dice art
// ||||||||||||||||
// ||            ||
// ||            ||
// ||      ${roll}     ||
// ||            ||
// ||            ||
// ||||||||||||||||
