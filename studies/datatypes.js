/**
* DATA TYPES:
*
* There are 12 different data types used in Javascript. They are listed and explained as follows:
* 
**/

/**
*
* 1. Numbers - Numbers are a primitive data type, that consists of all real numbers.
* i.e. -1, 0, 1, 1.5, 24.98, and 1,000,000,000, etc.  They take up the largest amount of bit space 
* when stored as data by your program, compared to the other data types, at 8 bits. 
**/

     
     1;   // I am a number dataytype. 
     110600; // Number
     10.123; // Number
     -4; //Number
     (1+1); //Number 
     
     
/**
* 2. Strings - Strings are a primititve data type that consists of a series of characters in quotation 
* marks. These strings can be manipluated (joined, spit, uppercased, etc) and their individual 
* characters can be accesed by using a zero index. Strings can be inside either single '' or double "" quotes, but when
* one is used the same type of quote must be used to end the string. 
**/
     var str = "I am a string"; // This is what a string looks like, Can also be used with ''.
/**     
* 3. Boolean - A boolean is a datatype that is either true or false.  This is a primitive datatype that 
* and can be described as an on/off switch.  It's either 1 | 0.  It's also takes up the smallest
* amount of space when stored, coming in at one bit. 
**/
     true; // I'm a boolean
     false; // I'm the other boolean
/** 
* 4. Array - an array is a complex datatype, that can store a set of ordered data consisting of other datatypes.
* arrays are deleniated with [], and can store strings numbers and other arrays within them seperated by commas. 
* Arrays can be accessed with using zero index.
* 
* You can have as many items as you want in an array. 
* 
**/ 
     ["item1", "item2", "item3"]; // I am an array
/**
* 5. Object - Objects are complex data types that hold data in key/value pairs. An object is deleniated
* with {}.  Within the brackets, they key/value pairs are seperated by commas. To access a value 
* stored within an object, you can call on it's key.  values can be any kind of datatype. 
* 
* You can have as many key: value pairs as you want in an object.
* 
**/
     var object = {name: 'Sean', age: 24, school: 'Operation Spark'}; // I am an object Object
/**
* 6. Functions - Functions are like little programs that do something by executing blocks of code when called by their name.
* decalre a funciton by using function name () {code to be executed}
**/
     function myFunc(params){
         params += 2; // add 2 and return new value
         return params; // return new value
     }
     myFunc(2); // calling the function returns 4 because the code in the block is executed with 2 is passed through as an argument. 
     
/** 
* 7. undefined - undefined is a datatype that has no definite value but has the space to hold a value. In other words,
* an object that has been decalred, but not initilized. 
**/
     var x;
     console.log(x); //  prints undefined to the console. The var x has been declared, but not initiliazed. 
     //therefore it is undefined, b/c has space in memory saved for it (it exists) but no specific value assisnged to it yet. 
     
/**
* 8. null - null is when the initilized object actually has no-value. 
**/
     function getNull() {
        var m = 0;
        if (m === null) {
            return 0;
     }
        return null;
    }

    console.log(getNull()); // returns null.  0 is a number and null is intentionally no-value whatsoever. 
/** 
* 9. NaN - NaN is a acronym for Not a number. This is a dataype that will be returned if you try to do math 
* with non numerical values
**/
     console.log("sting" / 2);    // prints NAN to console because you can't divide a string by 2. 
/**
* 10.Infinity and -Infinity - Positive and Negative infinity is a value that is returned when a 
* number exceeds the largest possible representable number javascript can handle. Numbers can
* go on forever, but our computers wouldn't be able to handle that. So it returns this datatype. 
* 
**/
     
     function returnFinite(){return 4}; // set a finite number for this example
     var smallNumber = (-Number.MAX_VALUE) * 2;// var smallNumber is assigned a value that is smaller than the minimum value.

     if (smallNumber === Number.NEGATIVE_INFINITY) { // When the if statement executes, smallNumber has the value -Infinity.
        smallNumber = returnFinite(); //smallNumber is set to a more manageable value before continuing
     }   
/**     
* 11. What is the difference between primitive/simple and complex data types? 
* Primitive data-types have a fixed size in bits.  Complex data types can be any size. 
**/
      var d = 4; // takes up 8 bits. 4 can't be changes, but can be manipualted with operators and methods.
      var e = ['item1', 'item2', 'item3']; // array's are complex, no fixed size, can be expanded indefenitely. 
      //var d will evaluate to a number. 
      //var e will point to the location of an array object.
/**
* 12. Primitive values are passed to a function BY COPY, complex values are BY REFERENCE. What does that mean, and how are they different?
* When a primiteve datatype is used it's actual value (a fixed size) can be stored in the DOM. Complex data types
* are only stored using their names as a reference to the location where the data is stored. 
* becuase the actual data within them can be anysize,
* by refrencing the location of a complex data type, we can access it's data selectively. 
**/

    var num3 = 3; // this is primitve number datatype. And it's value is stored directly into the variable by value. 
    
    var nameObj = {name: "Sean", lastName: "hart"}; // this variable is assigned to an object.  
     //This object is not directly stored in the variable, but rather it's location in memory is stored. 

      