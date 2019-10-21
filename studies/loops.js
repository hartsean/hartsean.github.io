/**
*    LOOPS
* 
*   
* 
* 0. Explain while, for, and for-in loops
* 
*    while 
*    a while loops loop through a block of code as long as a condition is true.

**/
/*while (condition) {
  // code block to be executed

/*    
*    
*    for
*    for loops loop through a block of code a number of times. it takes it's conditions
*    like so ---> (set a constant cariable; and as long as this is true; do this)
*/
/*
var i;
for (i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}
/* 
* 
*    for-in 
*    loops through an object. for every KEY in Object for example, execute a code block. 
*/
/*
var person = {fname:"John", lname:"Doe", age:25};

var text = "";
var x;
for (x in person) {
  text += person[x];
}
/*
* 1. Be able to loop any number of times, forward counting up to some limit, backward counting down to 0
*    Loop over an Array, forwards and backwards
*    Loop over an Object
*/ 
/*
// looping forward through an array. 
var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"]; // var cars is given an array of items
for (var i = 0; i < cars.length; i++) { // for loop conditions, declare a var i that is 0, which will be used to begin  
    console.log(cars[i]);
}
// looping backword through an array. 
var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"]; // var cars is given an array of items
for (var i = cars.length; i >= 0; i--) { // for loop conditions, declare a var i that is 0, which will be used to begin  
    console.log(cars[i]);
}

/*
* 
* 
*/
