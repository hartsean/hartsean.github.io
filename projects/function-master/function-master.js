//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    let array = [];
    return array = Object.values(object);
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    let str = " ";
    for (var key in object) {
         str += key;
         str += " "; 
    }  return str.trim();
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    let str = " ";
    for (var key in object) {
        if (typeof object[key] === "string" && typeof object[key] !== 'object'){
            str += object[key];
            str += " "; 
         }
    }  return str.trim();        
}
//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if(Array.isArray(collection)){
        return 'array';
    } else {
    return 'object';
    }
}
//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    return string.substring(0,1).toUpperCase() + string.substring(1); 
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    //Should take a string of words and return a string with all the words capitalized
   
    
    let arr = string.split(" ");
    let arr_tmp = [];
    str_temp = "";
    
    for (let i = 0; i < arr.length; i ++){
        str_tmp = arr[i].substring(0,1).toUpperCase() + arr[i].substring(1);
        arr_tmp.push(str_tmp);
    }
    return arr_tmp.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    if (object.hasOwnProperty["name"]){        
        return "Welcome" + " " + object.name.substring(0,1).toUpperCase() + object.name.substring(1) + "!";
    }
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    
    //Should take an object with a name an a species and return '<Name> is a <Species>
    if (object.name !== undefined && object.species !== undefined) {
        return object.name.substring(0,1).toUpperCase() + object.name.substring(1) + " is a " + object.species.substring(0,1).toUpperCase() + object.species.substring(1);
    }
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    // Should take an object, if this object has a noises array return them as a string separated by a space, 
    //if there are no noises return 'there are no noises' (3, 0, 3
    let myString = "";
    if (Array.isArray(object.noises) && object.noises.length > 1) {
       for (let i = 0; i < object.noises.length; i++){
           myString += object.noises[i] + " ";
        } return myString.trim(); 
    } return 'there are no noises';
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    // Should take a string of words and a word and return true if <word> is in <string of words>, otherwise return false.
    let arrofwords = string.split(" ");
    for(let i = 0; i < arrofwords.length; i++){
        if (arrofwords[i] === word){
            return true;
        }
    }return false;
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    //Should take a name and an object and add the name to the object's 
    //friends array then return the object (2, 0, 2);
    object.friends.push(name);
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    // Should take a name and an object and return true if <name> is a 
        //friend of <object> and false otherwise 
    if (object.friends === undefined){
        return false
    } else {
    for(let i = 0; i < object.friends.length; i++){
        if (object.friends[i] === name ){
            return true;
        }
    } return false;
    }
}
//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    //Should take a name and a list of people, and return a list of all 
    //the names that <name> is not friends with 
    
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {

}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}