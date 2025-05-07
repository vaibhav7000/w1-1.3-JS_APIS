// classes are used to implement / instantiate objects. They provide us a blueprint and using that we will make objects that will have similar properties and methods. Making a class to create objects is only useful when we have to make many objects that have same properties and methods => the simple way is to create class.

class Animal {
    constructor(animalName, legCount, speaks) {
        // this refers to the empty object that we have created using new before the class name
        this["animalName"] = animalName;
        this["legCount"] = legCount;
        this["speaks"] = speaks;
        // creating properties for the object
    }
    // method
    printSpeaks() {
        // best way to create methods
        // normal function set there "this" dynamically based on which they are called
        console.log(this.speaks);
    }

    // these two are methods but will be treated like properties / will still have to call with the function syntax
    printAnimalName = () => {
        // arrow function always borrow "this" from it is created in this case it will be class 
        console.log(this.animalName)
    }
    
    printLegCount = function () {
        console.log(this.legCount);
    }
    // there will properties / methods that can be available to class but not object, these can be created using static keyword, these properties / methods can only be used with class name not its objects
    static myType() {
        console.log("my type is " + "animal");
    }

    // created the property
    static greet = "How are you!";
}

const dog = new Animal("doggie", 4, "bhow bhow");
console.log(dog.printSpeaks());
dog.printAnimalName();

Animal.myType();
console.log(Animal.greet);