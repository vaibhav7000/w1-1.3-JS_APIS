// run `node index.js` in the terminal

// String APIS (these methods / properties does not change the original string)
// length, indexOf, lastIndexOf, slice, replace, split, trim

// legnth -> returns the number of characters present inside the string
function getLength(str) {
    return str.length;
}

const str = "Vaibhav Chawla";
console.log(getLength(str));
console.log(str.length);

// indexOf -> returns the index of the substring present inside the main string else return -1 (picks the first substring if multiple is present)
function subStringPresent(str, subString) {
    const index = str.indexOf(subString); // the index will be based 0th base indexing
    return index; 
}

console.log(subStringPresent(str, "Chawla"));
console.log(str.indexOf("Chawla"));
console.log(str.indexOf("random"))

// lastIndeOf -> provides the last index of substring present inside the main string else return -1. we can pass the position / index from where we want to enable the search of the substring
function lastSubstringPresent(str, subString) {
    const lastIndex = str.lastIndexOf(subString);
    return lastIndex;
}

console.log(lastSubstringPresent("Hello World World", "World"));
console.log("Hello World World".lastIndexOf("World"));

// slice -> returns the substring of the string by passing the position and last index (not included)
function getSlice(str, startIndex, lastIndex) {
    // if no startIndex and lastIndex will be provided the whole string will be returned as substring
    const subString = str.slice(startIndex, lastIndex);
    return subString;
}

console.log(getSlice(str));
console.log(str.slice());


function customSlice(str, startIndex, lastIndex) {
    // slice -> returns the substring based on the startIndex and lastIndex(not include)
    if(!startIndex) {
        startIndex = 0;
    }

    if(!lastIndex) {
        lastIndex = str.length;
    }
    let newSubString = "";
    for(let index = startIndex; index < lastIndex; index++) {
        newSubString = newSubString + str[index];
    }

    return newSubString;
}

console.log("in-built slice method")
console.log(str.slice());
console.log(str.slice(2, str.length));


console.log("custom slice methods");
console.log(customSlice(str));
console.log(customSlice(str,2, str.length));

// strings in JS are immutable -> means once a string is created we cannot change the individual characters present inside the string, but as a whole we can assign new string to the variable
let value = "Swift Developer";
// value[0] = "J" this is not possible because strings are immutable
value = "JS Developer" // this we can do


// replace -> finds the substring if present than replace that substring with provided one. if does not present than returns the original string in which we will be searching
function replaceSubString(str, searchSubString, replaceString) {
    const newString = str.replace(searchSubString, replaceString);

    return newString;
}

console.log(replaceSubString("Hello JS", " JS", "Swift Developer"));
console.log("Hello JS".replace("JS", "World!"));


// split -> returns an array of string / strings based on the given delimeter / substring present inside the string
function splitString(str, subString) {
    const collection = str.split(subString);

    return collection;
}


console.log(splitString("How the things are going", " ")); // ["How", "the", "things", "are", "going"]

// trim -> removes all the white space / spaces from the starting and ending of string
console.log("     Hello World    ".trim());

// toUpperCase and toLowerCase 

// length -> returns the number of characters present inside the string
// indexOf -> returns the index of substring present inside the main string else return -1
// lastIndeOf -> returns the last occurence of substring present inside the main string else -1
// slice -> returns substring from the main string based on the startPosition and endPostion (does not gets included)
// replace -> returns newString after replacing the subtring from the main string, if that is not present than returns the original string
// split
// trim