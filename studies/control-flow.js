/**
* CONTROL FLOW
* Introduction:
* Control flow is the order in which the computer executes statements in a script.
* It's how the computer reads and intereprets our code.  The Control flow in Jacascript is top to bottom. 
* The computer reads our code, line by line going down starting from the top.
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
* 
* REVISIONS
* Missing introduction (Talk about control flow)
Move the description of your if statement so it’s right above your code example
You have a duplicate explanation for else-if statements
Else code example: How many code blocks are executed?
Explain the syntax for switch statements. What does case mean? Why do we need the break keyword?
Please use your own code example for switch statement
When would we want to use a switch statement over an if/else-if chain?
**/

// If statement ///
var x = 5;
if (x = 5){
    return true; // returns true 
}

/**
 * Else-if can be added to an if statement to check for one or more conditions. 
 * when an else-if follows a false if statement, the else-if statment will check 
 * if it's conditions are true and if so, execute a block of code, much like an if statment.
 **/

// Else-if statement // 

if (x = 4) {
    return true;
} else if (x = 5) {
    return true; // returns true because the first statement is false. 
}

/** 
*
* Else
*
* Else takes no conditions, and will execute a block of code if all other statements
* (if, else-if) that are above it in the stack return false. It's the default. 
* 
* 
**/

if (x = 4) {
    return true;
} else if (x = 6) {
    return true; // returns true because the first statement is false. 
} else {
    return false // returns false cause no other conditions are true. 
}

/**
Switch
Switch statments takes a value, and compare it to a stack of other values and returns a boolean. 
If the value given to the switch statement is compare to a equal value, it will retun true. 
**/

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