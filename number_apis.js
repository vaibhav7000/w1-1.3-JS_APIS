// parseInt and parseFloat


// parseInt -> converts a valid string Number into Number. If is not valid than always return NaN (not a number). We can only expect a number if the string starts with a string number, will take all the continous number from the start and till the last number it gets in continous manner
console.log(parseInt("43")); //43
console.log(parseInt("grg33")) // NaN 
console.log(parseInt("1.23")) // 1
console.log(parseInt("12nlkln33")); // 12

const getNumber = parseInt("klng33");

// Number.isNaN -> static method of the class Number to check wheather is NaN or not
if(Number.isNaN(getNumber)) {
    console.log("the given number is not valid number");
} else {
    console.log("the given is valid number")
}

// parseFloat -> converts valid string number into Number also considers points / decimals and return us floating points too. If no number is present will return NaN
console.log(parseFloat("1,23")); // 1
console.log(parseFloat("1.2.3.")); // 1.2 will go only till the first decimal point
console.log(parseFloat("sgg1.22")) // NaN