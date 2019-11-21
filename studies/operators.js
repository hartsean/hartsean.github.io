/**
* OPERATORS
* Operators are special characters that work with or "act on" our data. They can be used to do different things, 
* and are categorized by what they do, and how many operands they require. The can be used to assign values, manipulate data and 
* compare data and much more. 
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

//loose comparison == (not recommended)
if (5 == "5"){// Equal to, but not strictly, could be a different type and still be true
    console.log(true); //prints true to the console, b/c the above condition evaluates to true.
}else {
    console.log(false); // does not reach this condition
}
//strict comparison (always use)
if (5 === "5"){// Equal to, in both value and kind
    console.log(true); // above condition does not evaluate to true
}  else {
    console.log(false); //prints false to the console. 
}

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

let myPar = 4;
    if (myPar >= 3 && myPar <= 4){ // check if myPar is greater than or equal to 3 and less than or equal to 4. 
      console.log("yea"); //logs yea to the console
    }
    else {
      console.log("nah");
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

let myRvar = 0;
  if(myRvar === !0) {
    console.log("not right");
   }
   else if (myRvar !== 1 || myRvar === 0){
    console.log(array2); //logs the value of array2 to the console because one of the comparisons in the above OR operator evaluated to true.
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