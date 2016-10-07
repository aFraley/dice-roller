/*
* Dice Roller
*
* Author: Alan Fraley
* Date: 2012
*/

function roll(){

  var dice = document.getElementById("dice").value;
  var sides = document.getElementById("sides").value;
  var e = document.getElementById("posNeg").value;
  var mod = 0;
  var d20 = document.getElementById("d20");
  var out = "Roll " + dice + "d" + sides + " [";
  var sum = 0;

  //roll the dice--in a loop if there are more than one die (2d6)
  for (j = dice; j > 0; j--) {
    var roll = Math.floor(Math.random() * sides) +1;
      sum += roll;
      out += roll;
      if (j==1) {
        out += "]" + "\n" + sum;
      } else {
        out += "";
      }

      //determine the modifier
      mod = document.getElementById("mod").value;
      if (e == "+") {
        sum += 1 * mod;
        out += " + ";
      }else if (e == "-"){
        sum -= 1 * mod;
        out += " - ";
      }

    }

    //final output
    d20.value = sum;
    out += mod + " = " + sum + "\n";
    var results = document.getElementById("results");
    results.value = out + results.value;
}

//resets all fields
function reset() {
  var sides = document.getElementById("sides").value = 20;
  var mod = document.getElementById("mod")
  var dice = document.getElementById("dice").value = 1;
  var d20 = document.getElementById("d20").value = "";
  var results = document.getElementById("results").value = "";

}
//clears text area
function clearResults() {
  var results = document.getElementById("results").value = "";
  var d20 = document.getElementById("d20").value = "";
}
