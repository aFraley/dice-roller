/*
* Dice Roller
*
* Author: Alan Fraley
* Date: 2012
*/

function roll(){

			// Sort of our Model
			//========================================================================
			var dice = document.getElementById("dice").value;
			var sides = document.getElementById("sides").value;
			var mod = 0;
			var d20 = document.getElementById("d20");
			var out = "Roll " + dice + "d" + sides + " [";
			var sum = 0;

			// Kind of our Controller
			// Roll dice.
			// Loop to roll more than one dice, if dice > 1
			//========================================================================
			for ( var i = dice; i > 0; i--) {
				var roll = Math.floor(Math.random() * sides) +1;
					sum += roll;
					out += roll;
					if (i == 1) {
						out += "]" + "\n" + sum;
					} else {
						out += "";
					}

					// Apply modifier
					mod = document.getElementById("mod").value;
					sum += 1 * mod;
					if (mod >= 0) {
						out += "+";
					}
				}

				// Sort of our View
				// Output results.
				//======================================================================
				d20.value = sum;
				out += mod + "=" + sum + "\n\n";
				var results = document.getElementById("results");
				results.value = out + results.value;
		}

		// Reset all fields.
		function reset() {
			var sides = document.getElementById("sides").value = 20;
			var mod = document.getElementById("mod")
			var dice = document.getElementById("dice").value = 1;
			var d20 = document.getElementById("d20").value = "";
			var results = document.getElementById("results").value = "";
		}

		// Clear text area that functions as an in document log for rolls.
		function clearResults() {
			var results = document.getElementById("results").value = "";
			var d20 = document.getElementById("d20").value = "";
		}
