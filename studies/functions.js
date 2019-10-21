/*
* FUNCTIONS
*
* 0. The two phases to using functions are the Creation phase and the execution phase.
*    When you declare / create a function it is saved in the memory until it is called 
*    by invoking it's name.  When it is called the code that is inside the code clock 
*    is executed.
*/

function myFunc(a, b){  // this is where we create the function, name it and give it something to do in the code block.
    a += b; // add b to a
    return a; // return new value of a
}
     
myFunc(2,3); // returns 5.  This is the function CALL. We passed to arguments 2,3 and the function that we made did it's thing.

    
/*  
* 1. A parameter is a variable in a method definition. When a method is called, the 
*    arguments are the data you pass into the method's parameters. Parameter is variable 
*    in the declaration of function. Argument is the actual value of this variable that gets 
*    passed to function.
*/

function myFunc5(a, b){  // function named with 2 parameters
    a += b; // when function is called (see below) the arguments are passed through the parameters
    return a; // returns new value
}
     
myFunc5(2,3); // call a function with 2 arguments. returns 5

/*   
* 
* 2. What’s the syntax for a NAMED function?
*/

function namedFunc(){};
     
/*
* 3. You an assign a function to a variable the same way you assign anything to a variable.
*    var myVarFunc = function(){}; 
*    OR you could use an arrow function
*/
    
var funcName = (params) => params + 2
funcName(2); // returns 4
     
/* 
* 4. Function CAN take inputs through it's parameters, that are passed through the function as
*    arguments when the function is called at runtime, but they don't have to.
*    If there are no parameters, the funciton will execute the code in the code block.
* 
*    When the code block is executed, it can include a return statement to return the result
*    of the executed code to the console. But if no return statement, the function will just
*    store the data.
*    
* 
* 5. SCOPE.  Functions have their own local scope.  Variables inside the function can access 
*    variables in the global scope. But the inverse is not true. 
*    
*/

var x = 1;
   function scopeEx(){
        var x = 2;
        console.log(x);
   }

console.log(x); // prints 1 to the console, because x is global, and this x can't see the scope of the function that re-assigns x
console.log(scopeEx()); // prints 2 to the console, because the function re-assigns x and prints the new value. 

/*
*   
* 6. CLOSURES - A closure is the combination of a function bundled together (enclosed) with 
*    references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function.
* 
*/

let passwordSecurity = function(user, password){ // create a factory function called password security. that takes 2 params
  
    return function secretPassword(){ // return an inner function, that will be hidden from the global scope. but shared with its outer function
       let secretMembers = ["Aaron", "Aalana", "Aaden"]; // array is assigned to secret members variable
       if(password === "aaName" && secretMembers.includes(user)){ // inner function check to see if conditions are true. 
        return("You may enter"); // returns you may enter if condition is true.
       } // end if statement
    return "nope, you don't belong" // if the inner function did not resolve to true, it will exit and return this return statment. 
    } //close inner function 
}//close outer function

console.log(passwordSecurity("Aaron", "aaName")()); // prints true to console because inner function checks out.
