/*
* Dice Roller
*
* Author: Alan Fraley
* Date: 2012
*/

function roll(){

  // Declare and initiate variables.
  // Plug into input fields in the view.
  var dice = document.getElementById("dice").value;
  var sides = document.getElementById("sides").value;
  var e = document.getElementById("posNeg").value;
  var mod = 0;
  var d20 = document.getElementById("d20");
  var out = "Roll " + dice + "d" + sides + " [";
  var sum = 0;

  // Roll the dice.
  // Roll dice in a loop if there are more than one die (2d6).
  for (var i = dice; i > 0; j--) {
    var roll = Math.floor(Math.random() * sides) +1;
      sum += roll;
      out += roll;
      if (i == 1) {
        out += "]" + "\n" + sum;
      } else {
        out += "";
      }

      // Determine the modifier.
      mod = document.getElementById("mod").value;
      if (e == "+") {
        sum += 1 * mod;
        out += " + ";
      }else if (e == "-"){
        sum -= 1 * mod;
        out += " - ";
      }

    }

    // Output results.
    d20.value = sum;
    out += mod + " = " + sum + "\n";
    var results = document.getElementById("results");
    results.value = out + results.value;
}

// Reset all the input fields in the view.
function reset() {
  var sides = document.getElementById("sides").value = 20;
  var mod = document.getElementById("mod")
  var dice = document.getElementById("dice").value = 1;
  var d20 = document.getElementById("d20").value = "";
  var results = document.getElementById("results").value = "";

}

// Clears the text area that functions as a log in the view.
function clearResults() {
  var results = document.getElementById("results").value = "";
  var d20 = document.getElementById("d20").value = "";
}
