/*
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
*/

// 1. declaration //
var myName;

/*
* At the declaration phase, the variable myName is undefined because we have NOT initialized
* it to anything
*/
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";


/*
* VARIABLE KEYWORDS: var, let, & const
*
* 0. variable keywords allow us to store our variables and access them in different scopes,
*    depending on which keyword you use. 
*
* 1. var is only bound by the function scope. it can be reassigned and is in the global scope, unless 
*    it is stored locally in a function.
*
* 2. let can be reassigned, but it is block scoped. so it can't be accessed outside of it's locale.
* 
* 3. const cannot be re-assigned and is block scoped.  this is the most secure because it's
*    allows/suggests that your variable values are specific to your locale. However, 
*    consts that contain complex objects can be modified.
* 
*/


var = foo;
let = bar;
const = foobar;



/*
* HOISTING: 
* 
* 0. Variable declarations and function decorations are magically lifted to the top of their scope
*    At run time. Line 0.  
* 
* 1. Different types of variables and functions are hoisted differently. 
* 2, Variable declarations are hoisted, not their initiziliazations. So only their name gets hoisted, 
*    not their values. 
* 3. Function names and their exectuted code blocks (function bodies) are hoisted. 
* 
*/

var hey = 0;
function foo(){
    let hey = 1;
}
console.log(foo());

