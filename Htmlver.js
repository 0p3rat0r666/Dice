// html version

function rollDice() {
  let max = document.getElementById("max").name;
  console.log(typeof(max)); // string
  // convert to int
  max = parseInt(max);
  console.log(typeof(max)); // number
  let roll = Math.floor(Math.random()*(max))+1; // it SHOULD save the number...
  console.log(roll); // NaN
  console.log(typeof(roll));
  document.getElementById("result").innerHTML = roll; // shows NaN. variable name will not light up?
}
