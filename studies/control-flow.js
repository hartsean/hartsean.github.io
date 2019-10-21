/*
* CONTROL FLOW
*
* 
* If
* An if statement checks IF a condition is true and if it is, it will execute a block
* of code. if it is not true it will look to see if there are any other else-if statments
* and if not will return false
* 
* Else-if can be added to an if statement to check for one or more conditions. 
  when an else-if follows a false if statement, the else-if statment will check 
  if it's conditions are true and if so, execute a block of code, much like an if statment.
* 
*/

// If statement ///
if (5=5){
    return true; // returns true 
}

/*
 * Else-if can be added to an if statement to check for one or more conditions. 
 * when an else-if follows a false if statement, the else-if statment will check 
 * if it's conditions are true and if so, execute a block of code, much like an if statment.
 */
// Else-if statement // 
if (5=4) {
    return true;
} else if (5=5) {
    return true; // returns true because the first statement is false. 
}

/* 
 * Else
 */
  Else takes no conditions, and will execute a block of code if all other statements
  (if, else-if) that are above it in the stack return false. It's the default. 
* 
* 
*/
if (5=4) {
    return true;
} else if (5=6) {
    return true; // returns true because the first statement is false. 
} else {
    return false // returns false cause no other conditions are true. 
}
/*
Switch
Switch statments takes a value, and compare it to a stack of other values and returns a boolean. 
If the value given to the switch statement is compare to a equal value, it will retun true. 
*/

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday"; // today is Monday so case 1 will be true here and return the code block MONDAY 
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}