// arrays in JS are hetrogenous (means they can hold different data-types)
// push, pop, unshift, shift -> these methods changes the original array
// concat -> returns us new array
// destructing -> concise way to get the specific value from the array
// spread operator -> ... to copy the values present inside array. makes  shallow copies, only copy the top-level properties
// arrays are complex primitives (means they are reference types / playing with the address).

const primaryArray = [1,2,3,4,5];
const secondaryArray = [6,7,8,9,10];

console.log(primaryArray.push("string")) // appends and returns new length of array
console.log(primaryArray);
primaryArray.pop() // returns the last element from array, if array is empty than return undefined
console.log(primaryArray);

primaryArray.unshift() // returns the new length of the array and appends new element at the starting
console.log(primaryArray);

primaryArray.shift() // removes the first element and return that, if array is empty than return undefined


const newArray = secondaryArray.concat() // can take arrays, singleValues, or mix of both, if nothing passed than return us new copy of the array on which it is applied
console.log(newArray);

const copy = [...primaryArray]; 



// shallow copying -> Only copying the top-level properties / values from the object or array ... -> do Shallow copying
// A deep copy duplicates everything, including all nested objects or arrays. So, changes made to the copied structure do not affect the original.
// const original = { a: 1, b: { c: 2 } };
// const deepCopy = JSON.parse(JSON.stringify(original)); but will fail if the objects have functions, undefined values, Dates


// safeDeep copying 
const obj = {
    firstName: "Vaibhav",
    lastName: "Chawla",

    fullName: function() {
        console.log(`${this.firstName} ${this.lastName}`);
    },
    age: undefined
}
const deep = structuredClone(obj); 



