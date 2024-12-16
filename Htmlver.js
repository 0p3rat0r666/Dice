// html version

function rollDice() {
  let max = document.getElementById("inp").value;
  console.log(max);
  let roll = Math.floor(Math.random()*(max))+1;
  document.getElementById("result").innerHTML = roll;
}

// i wanted to use a text input but i couldnt get it to access the number properly. i will probably switch to text input at a later date
// i figured out how to do text input
