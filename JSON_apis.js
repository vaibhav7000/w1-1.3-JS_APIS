// JSON -> this is format / structure to store the data, every language knows this format => can convert this format into their readable format this format looks similar to JS object and hence its name is similar

// {
//     "firstName": "vaibhav",
//     "lastName": "chawla",
//     "age": 20,
//     "gender": "male"
// } this is the format / structure to store the data, every language knows this structure and can convert into their understandable format

// => we will send this structure in the form of string "{firstName: "Vaibhav", lastName: "Chawla", "age": 20}" and each language will have some apis to convert this into JSON format and than convert it into valid format

// In JS we have JSON class that will do all the above task
// converting the JSON string in to JS object using JSON.parse(JSONString)
// converting the JS object into JSON format string using JSON.stringfy(JSObject)

const JSObject = {
    firstName: "Vaibhav",
    lastName: "Chawla",
    age: 23,
    gender: "male"
}

console.log(JSON.stringify(JSObject)); // this will be JSON format string
const jsonString = JSON.stringify(JSObject);

console.log(JSON.parse(jsonString)["firstName"]); // converts the json string into valid JS object

// every tech know this format (JSON) => we send JSON format in the form of string and then each format converts that into their valid formats
// JS uses JSON to deal with JSON format
// IN this if their is normal JSON (not string) than node JS automatically converts into JS object