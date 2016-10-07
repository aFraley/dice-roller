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
			//rolls dice, invokes loop if more than one die are rolled
			for ( var i = dice; i > 0; i--) {
				var roll = Math.floor(Math.random() * sides) +1;
					sum += roll;
					out += roll;
					if (i == 1) {
						out += "]" + "\n" + sum;
					} else {
						out += "";
					}

					//determines mod, value of sum and mod
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
