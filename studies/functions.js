/*
* FUNCTIONS
*
* 0. The two phases to using functions are the Creation phase and the execution phase.
*    When you declare / create a function it is saved in the memory until it is called 
*    by invoking it's name.  When it is called the code that is inside the code clock 
*    is executed.
*  
* 1. A parameter is a variable in a method definition. When a method is called, the 
*    arguments are the data you pass into the method's parameters. Parameter is variable 
*    in the declaration of function. Argument is the actual value of this variable that gets 
*    passed to function.  
* 
* 2. What’s the syntax for a NAMED function?
*    
*    function namedFunc(){};
* 
* 3. You an assign a function to a variable the same way you assign anything to a variable.
*    var myVarFunc = function(){}; 
*    OR you could use an arrow function
*    
*    var funcName = (params) => params + 2
*    funcName(2); // returns 4
* 
* 4. Function CAN take inputs through it's parameters, that are passed through the function as
*    arguments when the function is called at runtime, but they don't have to.
*    If there are no parameters, the funciton will execute the code in the code block.
* 
*    When the code block is executed, it can include a return statement to return the result
*    of the executed code to the console. But if no return statement, the function will just
*    store the data.
* 
* 5. SCOPE.  Functions have their own local scope.  Variables inside the function can access 
*    variables in the global scope. But the inverse is not true. 
* 
* 6. CLOSURES - A closure is the combination of a function bundled together (enclosed) with 
*    references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function.
*    
* 
*/
