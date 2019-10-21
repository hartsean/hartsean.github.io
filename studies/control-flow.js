/*
* CONTROL FLOW
*
* 0. There are 12 different data types used in Javascript. They are listed and explained as follows:
*
* 1. Numbers - Numbers are a primitive data type, that consists of all real numbers.
*    i.e. -1, 0, 1, 1.5, 24.98, and 1,000,000,000, etc.  They take up the largest amount of bit space 
*    when stored as data by your program, compared to the other data types, at 8 bits. 
* 2. Strings - Strings are a primititve data type that consists of a series of characters in quotation 
*    marks. These strings can be manipluated (joined, spit, uppercased, etc) and their individual 
*    characters can be accesed by using a zero index. 
* 3. Boolean - A boolean is a datatype that is either true or false.  This is a primitive datatype that 
*    and can be described as an on/off switch.  It's either 1 | 0.  It's also takes up the smallest
*    amount of space when stored, coming in at one bit. 
* 4. Array - an array is a complex datatype, that can store a set of ordered data consisting of other datatypes.
*    arrays are deleniated with [], and can store strings numbers and other arrays within them seperated by commas. 
*    Arrays can be accessed with using zero index. 
* 5. Object - Objects are complex data types that hold data in key/value pairs. An object is deleniated
*    with {}.  Within the brackets, they key/value pairs are seperated by commas. To access a value 
*    stored within an object, you can call on it's key.  values can be any kind of datatype. 
* 6. Functions - Functions are like little programs that do something by executing blocks of code when called by their name.
*    decalre a funciton by using function name () {code to be executed}
* 7. undefined - undefined is a datatype that has no definite value but has the space to hold a value. In other words,
*    an object that has been decalred, but not initilized. 
* 8. null - null is when the initilized object actually has no-value. 
* 9. NaN - NaN is a acronym for Not a number. This is a data type that is similar to a number,
*          a number data-type, but returns undefined.
* 10.Infinity and -Infinity - Positive and Negative infinity is a value that is returned when a 
*     number exceeds the largest possible representable number javascript can handle. Numbers can
*    go on forever, but our computers wouldn't be able to handle that. So it returns this datatype. 
*     
* 11. What is the difference between primitive/simple and complex data types? 
*     //Primitive data-types have a fixed size in bits.  Complex data types can be any size. 
*     
* 12. Primitive values are passed to a function BY COPY, complex values are BY REFERENCE. What does that mean, and how are they different?
*     //When a primiteve datatype is used it's actual value (a fixed size) can be stored in the DOM. Complex data types
*     //are only stored using their names as a reference to the location where the data is stored. 
*     //becuase the actual data within them can be anysize,
*     //by refrencing the location of a complex data type, we can access it's data selectively. 

*/
