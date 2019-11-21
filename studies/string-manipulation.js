/**
* STRING MANIPULATION
*
* 
* Introduction: Strings are mutable datatypes so they're values can't be changed. They can however be maniulpated using methods such as: (see list below introduction)
*               Strings are objects within the JavaScript language. They are not stored as character arrays, so built-in functions must be used to manipulate their values.
                We can also use the +, and += to concatenate two or more strings, or re-assign the concatenation of two string with the latter.
*
* concat() - Combines the text of two or more strings and returns a new string.
* indexOf() – Returns the starting index of a substring within another string. A –1 is returned if no match is found.
* charAt() – Returns the character at the specified location.
* lastIndexOf() - Returns the index within the string of the last occurrence of the specified value, or -1 if not found.
* match() - Used to match a regular expression against a string.
* substring() – A portion of a string is returned. A starting and ending location are passed to this function.
* replace() – Used to find a match between a regular expression and a string, and to replace the matched substring with a new substring.
* search() - Executes the search for a match of a regular expression. If successful, search returns the index of the match inside the string. Otherwise, it returns -1.
* slice() - Extracts a section of a string and returns a new string.
* split() - Splits a string into an array of strings by separating the string into substrings.
* toLowerCase() – Converts the entire string to lower case.
* toUpperCase() – Converts the entire string to upper case. 
*       
* 1. You can also use the + (concat) operator to combine two or more strings
**/
// +
var string = "string";
var string2  ="string2";
console.log(string + " " + string2); // prints "string string2"
// += 
var string = "string1";
var string2  ="string2";
console.log(string += " " + string2); // prints "string string2"

//concat()
var a = "Sean";
var b = " Hart";
var myName = a.concat(b);
console.log(myName); //  prints "Sean Hart" to the console

//slice()
var sliceExample = "Lorem ipsum";
sliceExample.slice(0,4); // Slices the first 4 indexes of the sliceExample string and returns "Lore"

//split()
var splitty = "Some Long String That We Will Split";
splitty.split(" "); //splits the string at the spaces and returns the 7 words as ind. strings inside of an array. 

//* charAt() – Returns the character at the specified location.
var string22 = "Sean";
console.log(string22.charAt(0)); //logs "S" to the console. 

//toLowerCase()
var foo = "AHHH";
foo.toLowerCase(); // returns "ahhh"    

//toUpperCase()  + substring()
var foo = "this is a complete sentence.";
foo.substring(0,1).toUpperCase() + foo.substring(1); //Capitalizes the first letter in this string. 
        
        
        
        
        