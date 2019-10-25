/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*
 
 Inputs: Param 1: animals array Param2: name of animal to search
 Outputs: loops through animals array and returns animal object if that name exists.
 Edge Cases: returns null if no animal exists.
 
*/

function search(animals, name) {
   
    for (var i = 0; i < animals.length; i++){
        
        if (animals[i].name === name){
            return animals[i];
        } 
 
     }  return null;
}
//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/* 
 * ## Step 2 - Replace
 1. Write a function called `replace` with a signature of `replace(animals, name, replacement) { //... } ` that:
   - Takes 3 parameters, an Array of animals, a name of an animal on which to perform a search, and an Object that represents 
     the replacement animal.
   - If an animal with that name exists within the `animals` Array, replace it's entire Object with the replacement Object.
   - Otherwise do nothing.
 2. Test it on the website.
 
 // Inputs: Animals array, name of animal to search(), and replacement animal object (param3)
 //Outputs: if animal that is searched  matches a animal in the array, replace it with replacement animal object
 // Edge Cases: name of animal in array must match name in argument given. 
 
*/
function replace(animals, name, replacement) {
    
    for (var i = 0; i < animals.length; i++) {
        if (animals[i].name === name) {
            return animals.splice(animals[i], 1, replacement);

        } 
    }  
} 

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////


function remove(animals, name) {
    for (var i = 0; i < animals.length; i++) {
        if (animals[i].name === name) {
            return animals.splice(animals[i], 1);
        } 
    } 
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Create ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*
 * ## Step 4 - Add

 1. Write a function called `add` with a signature of `add(animals, animal) { //... }` that:
   - Takes 2 parameter, an Array of animals, and an Object representing a new animal to be added.
   - Checks that the animal Object has a `name` property with a length > 0.
   - Checks that the animal Object has a `species` property with a length > 0.
   - Has a **unique** name, meaning no other animals have that name.
   - Adds this new Object to the `animals` Array, **only** if all the other conditions pass.
   - Make sure it works.
**/
// check IF animal has a name prop and its length is greater than 0, 
// check


//Inputs: an array of animals, an object called animal 
//Outputs: add new animal object, if true, to the animals array
// Edge cases: checks for a unique name

//&& animals.name !== animals[i].name)
function add(animals, animal) {
    if(animal.name.length > 0 && animal.species.length > 0 && !animals.some((ele) => (ele.name === animal.name))){
        return animals.push(animal);
    }
}

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
