/**
* VARIABLES:
*
* 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
* are named identifiers that can point to values of a particular type, like a Number, String,
* Boolean, Array, Object or another data-type.  Variables are called so because once created, we
* can CHANGE the value (and type of value) to which they point.
*
* 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
* variable.
*
* 2. There are 2 phases of using variables: declaration and initialization (or assignment).
**/

// 1. declaration //
var myName;

/*
* At the declaration phase, the variable myName is undefined because we have NOT initialized
* it to anything
*/
console.log(myName); // prints => undefined

// 2. initialization or assignment //
var myName2 = 'john';
console.log(myName2); // prints => john

// 3. re-assignment //
var myName3 = 'bob';
console.log(myName3); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable2 = 1;
console.log(myVariable2);
var myVariable24 = true;
console.log(myVariable24);


/**
* VARIABLE KEYWORDS: var, let, & const
*
* variable keywords allow us to store our variables and access them in different scopes,
* depending on which keyword you use. 

* var is only bound by the function scope. it can be reassigned and is in the global scope, unless 
* it is stored locally in a function.
**/
var varName= 0;
varName = 1;
console.log(varName); //prints 1 to theconsole.
/*
* 2. let can be reassigned, but it is block scoped. so it can't be accessed outside of it's locale.
*
*/
let letName= 0;
letName = 1;
console.log(letName); // prints 1 to the console.
/* 3. const cannot be re-assigned and is block scoped.  this is the most secure because it's
*    allows/suggests that your variable values are specific to your locale. However, 
*    consts that contain complex objects can be modified.
* 
*/
const constName = 0;
// constName = 1; This would result in an error since Const cannot be reassigned. 
console.log(constName); //prints 0 to the console. 
/**
* HOISTING: 
* 
* 0. Variable declarations and function decorations are magically lifted to the top of their scope
*    At run time. (Line 0).  
* 1. Different types of variables and functions are hoisted differently. 
* 2, Variable declarations are hoisted, not their initiziliazations. So only their name gets hoisted, 
*    not their values. 
* 3. Function names and their exectuted code blocks (function bodies) are hoisted. 
* 
**/
    
//Hoisting of Var
console.log(myVar) // prints undefined to the console
var myVar = 1; // declaration is hoisted but not initialization

var greeter4 = null; //greeter4 is unassigned.
console.log(greeter4); //prints null to the console and it's value is undefined. 
    
// Let is not hoisted
let greeting = "say Hi";
  if (1 === 1) {
        let greeting = "say Hello instead";
        console.log(greeting, "1");//"say Hello instead"
    } else {
      console.log(greeting, "2");//does not print 
    }
//Const is also not Hoisted, and can't be reassigned. 
const greeting2 = "say Const Example";
console.log(greeting2); //prints say Const Example.