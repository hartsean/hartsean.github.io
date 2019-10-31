// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

_.identity = function(value) {
    return value;
};  


/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/
_.typeOf = function(value){
    
    if (Array.isArray(value)){
        return "array";
    } else if (value === null){
        return "null";
    } 
    return typeof(value);
    
}


/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/
_.first = function(array, number){
    if(!Array.isArray(array) || number < 0){
        return [];
    }else if(isNaN(number)){
        return array[0];
    } else if(number > array.length){
        return array;
    }else if(typeof(number) === "number"){
        return array.slice(0, number);
    }
}

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

_.last = function(array, number){
    if(!Array.isArray(array) || number < 0){
        return [];
    }else if(isNaN(number)){
        return array[array.length -1];
    } else if(number > array.length){
        return array;
    }else if(typeof(number) === "number"){
        return array.slice(1, array.length);
    }
}

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/
 _.indexOf = function (array, value) {
     for(let i = 0; i < array.length; i++){
         if(array[i] === value){
             return i;
         } 
    } return -1;
}
/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

_.contains = function(array, value) {
    for(let i = 0; i < array.length; i++){
        
        if (array[i] === value) {
            return true;
        } 
            
       
    }   return false;
}
    //outputs: return true IF array contains value, ELSe return false
    // edge case: ternary, see below attempt 2/3
    


/*
_.contains = function(array, value){
    if (value === null || value === undefined){
        return false;
    }
    for (let i = 0; i < array.length; i++) {
      return (array[i] === value ? true : false);
    }return true;
}
*/
/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

_.each = function(collection, test){
    
    if (Array.isArray(collection) ){
        for(let i = 0; i < collection.length; i++){
            test(collection[i], i, collection);    
        }
    } else {
        for (let key in collection)
        test(collection[key], key, collection);
    }
}

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

//outputs: return a new array of all elements that have duplicates removed. 

_.unique = function(array){
    let newArr = [];
    for(let i = 0; i < array.length; i++){
        if(_.indexOf(newArr, array[i]) === -1){
            newArr.push(array[i]);
        }
    }
    return newArr;
}

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

//call func1 for each element in array with arguments(element, index, array)
// return new array of elements that passed true for func1
// edge cases what if function does not resolve to a boolean?

/* 
_.each = function(collection, test){
    
    if (Array.isArray(collection) ){
        for(let i = 0; i < collection.length; i++){
            test(collection[i], i, collection);    
        }
    } else {
        for (let key in collection)
        test(collection[key], key, collection);
    }
}

filter = function(array, func) {
    let arr = [];
    _.each(array,(function(e,i,a){
          if(func(e,i,a) === true) {
              arr.push(e);
            
          }
    })
}
*/

_.filter = function(array, func1) {
        
        let newArr = [];
    
        _.each(array, function(element, index, array){
            
          if(func1(element, index, array) === true) {
              newArr.push(element);
            }
            
        });

    return newArr;
}

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
* 
* 
* reject = function(array,func){
    return _.filter(array, function(ele,i,arr){
        return !func(ele, i, arr)
    })
}
* 
*/

 _.reject = function(array, func1) {
    let newArr = [];
    
        _.filter(array, function(element, index, array){
            
          if(func1(element, index, array) === false) {
              newArr.push(element);
            }
            
        });

    return newArr;
}

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}

*/
//Inputs
// call function(element, key, <array>) for each element in array
// return array that is made up of 2 sub arrays, true and false (filter and reject)

//

/*
_.partition = function(array, funct) {
    
    let arr = [];
    
    _.each(array, function(element, index, array){
        return funct(array.filter(array));
        return array.reject(array);
    })
    
}
*/

_.partition = function(array, func1){
    
    let newArrayTrue = [];
    let newArrayFalse = [];
    let newArrayFinal = [];
    
    _.each(array, function(element, index, array){
            
          if(func1(element, index, array) === true) {
              newArrayTrue.push(element);
            }
            
        });

        newArrayFinal.push(newArrayTrue);
    
    _.filter(array, function(element, index, array){
            
          if(func1(element, index, array) === false) {
              newArrayFalse.push(element);
            }
            
        });

        newArrayFinal.push(newArrayFalse);
    
    return newArrayFinal;
    
}

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/


_.map = function(collection, func3) {
   var newArray = [];
   
   _.each(collection, function(element, index, array) {

       newArray.push(func3(element, index, array));

   });
   
   return newArray;
}
    


/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/
// iterate through object, and pluck out values from a sepecific key, when function is called. 
// 

_.pluck = function(arr,prop){
    return _.map(arr, function(object,i, collection){
        return object[prop];
    })
}


/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
* 
* if elemet index in collection === false return false
*/

_.every = function(collection, func) {
    
    if (func === undefined){
        func = function(hello){
            if(!!hello === true){
                return true;
                
            }else {
                return false;
            }
        };
    }
    
    if(Array.isArray(collection)){
        for(let i = 0; i < collection.length; i++){
              if (func(collection[i], i, collection) === false) {
                return false
              }
        }return true
    }
    
    if(typeof collection === "object"){

        for(let key in collection){
            
              if (func(collection[key], key, collection) === false) {
                return false
              }
              
        }return true
    }
    
}

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/
_.some = function(collection, func) {
    
    if (func === undefined){
        func = function(hello){
            if(!!hello === true){
                return true;
                
            }else {
                return false;
            }
        };
    }
    
    if(Array.isArray(collection)){
        for(let i = 0; i < collection.length; i++){
              if (func(collection[i], i, collection) === true) {
                return true
              }
        }return false
    }
    
    if(typeof collection === "object"){

        for(let key in collection){
            
              if (func(collection[key], key, collection) === true) {
                return true
              }
              
        }return false
    }
    
}

/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

// 

_.reduce = function(array, func, seed){
    
    if(seed === undefined){
        
        for(let i = 0; i < array.length; i++){
            
            if (i === 0){
              seed = array[0];
            }
        
            else seed = func(seed, array[i], i)
        
        }
            
    } else {
        
        for(let i = 0; i < array.length; i++){
        

                seed = func(seed, array[i], i)
         
        }
    }
        
    return seed;
        
};

/** _.extend
* Arguments:
*   1) An Objet
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
* 
* 
* _.extend = function(object1, ...object) {
    
    return _.map(object1, function(object,i, collection){
        for (let key in object){
            object1 = object1.object.key;
        }
          return object1;
    })
};
*
*/

// spread operator on arguments
//Inputs: Takes 2 objects as arguments, 
//Outputs: Copies one object's set of properties to another object. Returns the updated object.
// Edge cases: Multiple objects' props that are passed in can be added to the object being updated. 

_.extend = function(out) {
         out = out || {};
         for (var i = 1; i < arguments.length; i++) {
           if (!arguments[i])
             continue;
           for (var key in arguments[i]) {
             if (arguments[i].hasOwnProperty(key))
               out[key] = arguments[i][key];
           }
         }
         return out;
};


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
