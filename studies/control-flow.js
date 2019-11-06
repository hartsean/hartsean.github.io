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

Else code example: How many code blocks are executed?

Please use your own code example for switch statement
When would we want to use a switch statement over an if/else-if chain?
**/

// If statement ///
var x = 5;
if (x === 5){
    return true; // returns true 
}

/**
 * Else-if can be added to an if statement to check for one or more conditions. 
 * when an else-if follows a false if statement, the else-if statment will check 
 * if it's conditions are true and if so, execute a block of code, much like an if statment.
 **/

// Else-if statement // 

if (x === 4) {
    return true;
} else if (x === 5) {
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

if (x === 4) {
    return true;
} else if (x === 6) {
    return true; // returns false because the first statement is false. 
} else {
    return false; // returns false cause no other conditions are true. 
}

/**
Switch
Switch statments takes a value, and compare it to a stack of other values and returns a boolean. 
If the value given to the switch statement is compare to a equal value, it will retun true. 
--
Switch statement is invoked with an expression to be evallutated by a set of case statements within curly brackets.
Each case statement is evaluated and then compared to the evaluation of the original switch parameter/evaluation.
If no case values match the original value, a default statement is executed at the bottom of the stack. 
if the values of a case expression and the original expression match, the Break; keyoword is exectuted and that value it returned.

**/


switch (4) {
  case 0:
    num = 2;
    break;
  case 1:
    num = 1; 
    break;
  case 2:
     num = 3; 
    break;
    default: 
    console.log("done");  // will print "done" to the console because the value 4 was passed through all cases and didn't evaluate to true.
}
/**

If-else conditional branches are great for variable conditions that result into a boolean, 
whereas switch statements are great for fixed data values. 

Another factor, speed: A switch statement might prove to be faster than ifs provided number of cases are good.

**/