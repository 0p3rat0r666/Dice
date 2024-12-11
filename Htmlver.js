// html version

function rollDice() {
  let max = prompt("What is the max face?");
  let roll = Math.floor(Math.random()*(max))+1;
  document.getElementById("result").innerHTML = roll;
}

// i wanted to use a text input but i couldnt get it to access the number properly. i will probably switch to text input at a later date
