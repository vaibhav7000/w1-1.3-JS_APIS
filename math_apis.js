// Math.random -> rounds the value to the nearest integer
console.log(Math.round(5.5)) // rounds the value to the nearest integer // 6
console.log(Math.round(1.2)) // 1
console.log(Math.round(9.7)) // 10

// Math.ceil() -> rounds up to the nearest integer
console.log(Math.ceil(1.2)) // 2
console.log(Math.ceil(10)) // 10

// Math.floor() -> rounds down to the nearest integer
console.log(Math.floor(1.9)) // 1
console.log(Math.floor(1)) // 1

// Math.trunc -> removes the decimal part from the Number and then returns the final number
console.log(Math.trunc(12.19)); // 12

// Math.random -> returns a random number from [0, 1) 1 is not included 0,....0.99999


// function generating a number fom 0 to 10

console.log(Math.ceil(Math.random() * 10) + 10)
console.log(Math.ceil(0));