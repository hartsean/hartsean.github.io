/**
* OPERATORS
*
* 1. Assignment operators - 
*    Assignment operators are used to assign values to JavaScript variables.
*    The value to the right of the equal sign is passed to the variable on the right. 
*    There are 6 Assignment operators:
**/

// assigns the value on the right to the the var on the left.
var x = 5;
// adds the value on the right to the current value and assigns variable on left the new value. 
var y = (x += 5);
// subtracts 
var y = (x -= 5);
var y = (x *= 5);
var y = (x /= 5);
var y = (x %= 5);

// Comparison operators
//    These operators compare two values.
//     == 
if (5 == "5"){// Equal to, but not strictly, could be a different kind and be true
    console.log(true);
}

if (5 === "5"){// Equal to, in both value and kind
    console.log(true);
}  // Strictly equal in value and type

/**    
* Comparison Operators
* 
* 
*   >	greater than
*   <   less than
*   >=	greater than or equal to	
*   <=	less than or equal to
*
*
**/
/**
* Logical operators
*
*
*    &&	and	(x < 10 && y > 1) is true
*    ||	or	(x === 5 || y === 5) is false
*    !	not	!(x === y) is true
*
**/
/**
* Unary operators (!, typeOf, -)
*    ! Bang
*    typeOf // The typeof operator returns the type of a variable, object, function or expression:
*    typeof "John"  // Returns string
*    - delelete ?
*
**/

/**
 * 
*   Ternary operators (a ? b : c)
* 
*    The conditional operator assigns a value to a variable based on a condition.
*    voteable = (age < 18) ? "Too young":"Old enough"; // If the variable "age" is a value below 18, 
*    //the value of the variable "voteable" will be "Too young", otherwise the value of voteable will be "Old enough".
*
**/