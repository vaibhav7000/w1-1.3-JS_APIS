// Date -> global class using this we can create object to play with the Date
const currentDate = new Date();


function dateOperations() {
    console.log("current date " + currentDate.getDate());
    console.log("current month " + (parseInt(currentDate.getMonth()) + 1)); // in js the months are 0 based
    console.log("current year " + currentDate.getFullYear());
    
    console.log("number of milliseconds finished from 1970 " + currentDate.getTime())
}

dateOperations();

// there are 9 different ways to create date from the Date class
// 1. new Date() -> current Date
// User specific Date format
// 2. new Date(date string)
// 3. new Date(milliseconds) -> these will be treated as number of milliseconds from 1 jan 1970 00:00:00
// 4. new Date(year, month) 
// 5. new Date(year, month, date)
// 6. new Date(year, month, date, hours)
// 7. new Date(year, month, date, hours, minutes)
// 8. new Date(yearm month,date, hours, minutes)
// 9. new Date(yearm month,date, hours, minutes, milliseconds)

const date2002 = new Date(2002, 1, 16);

console.log(date2002);
// when log the date objects it will always gets locked in the form of string in the form of UTC time, T sepreates date and time and Z means UTC time and date
console.log(date2002.getMonth());


const newDate = new Date();
console.log(newDate);
newDate.setFullYear(2024); // set methods of date objects will only change the spefic thing that we have provided
console.log(newDate);

console.log("different formats")
console.log(newDate.toString());
console.log(newDate.toISOString()); // ISOString and UTC string represents the same date and time only the format is different
console.log(newDate.toUTCString());


// static methods of the Date class -> now and parse both returns number of milliseconds passed from 1 jan 1970
console.log(Date.now()); 
console.log(Date.parse()) // this takes a valid Date string


// Date format ISO standard
// "YYYY-MM-DD" / "YYYY-MM" / "YYYY" -> these formats can be passed to the Date class and will set the date according to this
// "YYYY-MM-DDTHH:MM:SSZ" // this can also be used to create date object of specific datea and time
const currentDate2025 = new Date("2025") // 1 JAN 1970 00:00:00 according to the UTC
console.log(currentDate2025);
console.log(currentDate2025.getHours())

const currentDate2025_01 = new Date("2025-02");
console.log(currentDate2025_01);

console.log(new Date(Date.now()).getHours());
