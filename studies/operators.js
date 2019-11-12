/**
* OPERATORS
*
* 1. Assignment operators - Introduction:
* Assignment operators are used to assign values to JavaScript variables.
* The value to the right of the equal sign is passed to the variable on the left. 
* Comparisons are resolved to a boolean value. 
* There are 6 Assignment operators:
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

/* Comparison operators
These operators compare two values.
*/
if (5 == "5"){// Equal to, but not strictly, could be a different kind and be true
    console.log(true);
}

if (5 === "5"){// Equal to, in both value and kind
    console.log(true);
}  // Strictly equal in value and type

/**    
* 2.  Comparison Operators: Introduction: JavaScript has both strict and type–converting comparisons.
* A strict comparison (e.g., ===) is only true if the operands are of the same type and the contents match.
* The more commonly-used abstract comparison (e.g. ==) converts the operands to the same type before making the comparison. 
* For relational abstract comparisons (e.g., <=), the operands are first converted to primitives, 
* then to the same type, before comparison.
* 
*   >	greater than
*   <   less than
*   >=	greater than or equal to	
*   <=	less than or equal to
*
*
**/
let array = ["car", "anothercar"];
let myPar = 4;
for (let i = 0; i < array.length; i++){
    if (myPar >= 3 && myPar <= 4){
    return "yea";
    }
    else {
        return "nah";
}
/**
* Logical operators
*
*
*    &&	and	(x < 10 && y > 1) is true
*    ||	or	(x === 5 || y === 5) is false
*    !	not	!(x === y) is true
*
**/
let array2 = ["car", "anothercar"];
let myRvar = 0;
    if(myRvar === !0){
    return "not my Rvar";
    }
    else if (myRvar !== 1 || myRvar === 0){
        return array2.push(myRvar);
    }
/**
* Unary operators (!, typeOf, -)
*    
*    ! Bang
*    typeOf // The typeof operator returns the type of a variable, object, function or expression:
*    typeof "John"  // Returns string
*    - delelete ?
*
**/
let array = ["car", "anothercar"];
let myVar ="car";
for (let i = 0; i < array.length; i++){
    if (myVar !== "car" && typeof car !== 'string' ){
    return "not equal";
    }
    else {
        return "equal";
}
/**
 * 
*   Ternary operators (a ? b : c)
* 
* The conditional operator assigns a value to a variable based on a condition.
* the condition is set in the a section before the ? the condition that will execute to the right of the 
* question mark is weighed against the item to the right of the colon :. Whichever option that meets the
* condition will run. 
*
**/
var compress = function(list) {
    if (list.length === 0) return [];
    let [head, ...rest] = list;
    let l = compress(rest);
    return (l[0] === head) 
            ? l             //if true
            : [head, ...l];//or if this is true do this
            
}}}