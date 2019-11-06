// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("lodown-hartsean");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 *
 */
/*

attempt 1:   
    
    return filter(array, function(){
        for(let i = 0; i < array.length; i++){
            if(array[i]['gender'] === "male"){
                counter += 1;
                currentMaleCount = counter;
            }
        }
        
    });
    
 - **Objective**: Find the number of male customers
 - **Input**: `Array` Customers
 - **Output**: `Number`
 - **Constraints**: use `filter`
 */
var maleCount = function(array) {

    var malesArray = _.filter(array, function(customerObject, i, array) {
        return customerObject.gender === "male";
    })
    return malesArray.length;
};

//Inputs: an array of objects
//Outputs: a number, (the number of females in the array)
//Edge Cases: must use reduce. 
/*
1. Iterate through the objects in the array.
2. for every instance of an object that has a female value in stored in 
    the gender property, increase accumulator by 1. 
3. Return the acumlutar final value when loop is done. 
(this can be done with a for loop, but with reduce...)
    
array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

*/

var femaleCount = function(array) {

    return _.reduce(array, function(seed, customerObject, i) {
        if (customerObject.gender === "female") {
            seed += 1;
        }
        return seed;
    }, 0);

};

femaleCount(customers);

/*
### 3: `oldestCustomer`
 - **Objective**: Find the oldest customer's name
 - **Input**: `Array`
 - **Output**: `String`
 - **Constraints**:
 
 for (let age in array){
        if (array[i]['age'] > 1)
        return array.name;
        if(aray[i]["age"] > array.name)
    }
    const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15
var res = Math.max.apply(Math,array.map(function(o){return o.y;}))

var obj = array.find(function(o){ return o.y == res; })

alert(JSON.stringify(obj))
    let res = Math.max.apply(Math,array.map(function(array){return array.age;}))
    let obj = array.find(function(array){ return array.age == res; })

return (JSON.stringify(array.age))
 */

var oldestCustomer = function(array) {

    let oldestAge = 0;
    let oldestName = "";

    for (let i = 0; i < array.length; i++) {
        if (array[i].age >= oldestAge) {
            oldestAge = array[i].age;
            oldestName = array[i].name;
        }
    }
    return oldestName;
};

var youngestCustomer = function(array) {


    let youngestAge = 120;
    let youngestName = "";

    for (let i = 0; i < array.length; i++) {
        if (array[i].age <= youngestAge) {
            youngestAge = array[i].age;
            youngestName = array[i].name;
        }
    }
    return youngestName;

};
/*
 **Objective**: Find the average balance of all customers
 - **Input**: `Array`
 - **Output**: `Number
 
 //remove special characters from string in balance value. 
 //add all balances up. divide by number of customers
 // return reduce functions, that loops through customers array and add their balances up and returns the number 
amount.replace(/[^\w\s]/gi, '')     // -> 365043 {String}
parseInt(amount.replace(/[^\w\s]/gi, ''), 10)     // -> 365043   {Number}
*/

var averageBalance = function(array) {
    let avgBal = 0;
    _.reduce(array, function(seed, customerObject, i) {
        let amount = customerObject.balance;
        avgBal += parseInt(amount.replace(/[^\w\s]/gi, ''), 10) / 100;
    }, 0);
    let result = avgBal / customers.length;
    return result
};

//Objective**: Find how many customer's names begin with a given letter
//Input**: `Array`, `Letter`
//Output**: `Number`

var firstLetterCount = function(array, letter){
    
    return _.reduce(array, function(seed, customerObject, i) {
        if (customerObject.name[0].toUpperCase() === letter.toUpperCase()) {
            seed += 1;
        }
        return seed;
    }, 0);
};
//.toLowerCase //if statement 
/*
### 7: `friendFirstLetterCount`
 - **Objective**: Find how many friends of a given customer have names that start with a given letter
 - **Input**: `Array`, `Customer`, `Letter`
 - **Output**: `Number`
 - **Constraints**:
*/

var friendFirstLetterCount = function(array, customer, letter) {
    //iterate through the array of customers, find the given customer
    //find the friends list, and iterate through that comparing the first letter of
    //their names to the given letter
    let customerMatch = {};
    for (let i = 0; i < array.length; i++) {
        if (array[i].name === customer) {
            customerMatch = array[i];
            break;
        }
    }
    return _.reduce(customerMatch.friends, function(seed, current, j, array) {
        if (current.name[0].toLowerCase() === letter.toLowerCase()) {
            seed++;
        }
        return seed;
    }, 0);
};

/*
### 8: `friendsCount`
 - **Objective**: Find the customers' names that have a given customer's name in their friends list
 - **Input**: `Array`, `Name`
 - **Output**: `Array`
 - **Constraints**:'*.'
 */
 
let friendsCount = function(array, name) {
      let friends = []; // empty array to gather friends names from
  for (let k=0; k<array.length; k++){ //loop to go through array to get to obj element
      for(let j=0; j<array[k].friends.length; j++){ // loop to go through the friends array in each object within main array
      if(array[k].friends[j].name === name){ // test to see if friends array contains given name
          // console .log(array[k].friends[j].name);
          friends.push(array[k].name); // if statement true then push the obj element's name value into empty array
          // return friends; // return friends array back
      }
      }
  }
  // console.log(friends);
  return friends; // return friends array outside of loop (not sure if I need this)
};

let  topThreeTags = function(array) {
 //get array of tags
 let tags = _.pluck(array, "tags");
 tags = tags.join().split(",");
 // create counter object with each tag as a key with 0 value
 let counter = {};
  // create a key for each tag with a value matching its frequency
 _.filter(tags, function(element, i, array){
     if (counter.hasOwnProperty(element) === false){
         counter[element] = 0;
     }
     return counter[element]++ ;
 });
 // subtract 1 from all values, remove keys with 0 value
 while (Object.keys(counter).length > 3){
     for (let key in counter){
         counter[key] -- ;
             if (counter[key] < 1){
                 delete counter[key];
             }
     }
 }
//return the keys
return Object.keys(counter);
};

var genderCount = function(array) {
    
    var genders = { male: 0, female: 0, ['non-binary']: 0 };
    
        var malesArray = array.filter(element => element.gender === "male");
        
        var femalesArray = array.filter(element => element.gender === "female");
        
        var nonBinary = array.filter(element => element.gender === "non-binary");
    
        genders.male = malesArray.length;
        
        genders.female = femalesArray.length;
        
        genders['non-binary'] = nonBinary.length;
        
        return genders;
    
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
