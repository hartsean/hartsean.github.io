/**
*    LOOPS
* 
* 0. Explain while, for, and for-in loops
* 
*    While 
*    While loops loop through a block of code as long as a given condition is true.

**/

while (!true) {
  // code block to be executed
  console.log("hello");
  // will not print hello to the console infinite times. 
}

/**    
* For
*    for loops loop through a block of code a number of times. it takes it's conditions
*    like so ---> (set a constant cariable; and as long as this is true; do this)
*/

let cars = "mycarrr";
for (let i = 0; i < cars.length; i++) {
  cars = cars.toUpperCase();
}

/**
* For-in 
* loops through an object. for every KEY in Object for example, execute a code block. 
**/

var person = {fname:"John", lname:"Doe", age:25};

let text = "";
let person1 = {name: 'Sean', age: 30};
for (let key in person1) {
  text += person.name;
}

/**
* 1. Be able to loop any number of times, forward counting up to some limit, backward counting down to 0
*    Loop over an Array, forwards and backwards
*    Loop over an Object
**/ 

// looping forward through an array. 
var yorks = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"]; // var cars is given an array of items
for (var i = 0; i < yorks.length; i++) { // for loop conditions, declare a var i that is 0, which will be used to begin  
    console.log(yorks[i]);
}

// looping backword through an array. 
var fleebs = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"]; // var cars is given an array of items
for (var i = fleebs.length; i >= 0; i--) { // for loop conditions, declare a var i that is 0, which will be used to begin  
    console.log(fleebs[i]);
}
