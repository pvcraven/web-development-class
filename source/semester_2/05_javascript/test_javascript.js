/*
 This is a quick primer on JavaScript.
 For more detail on how the language works, see:
 http://www.w3schools.com/js/default.asp
 */

/*
 * Multiline comments work like this.
 */

// Single line comments work like this

// Print to the JavaScript console.
// Hit F12 in your browser to bring up the console.
// Also, note that statements end with a semi-colon in JavaScript.
console.log("This is a test message that will print on the console.");

// Variables

// By convention, we usually use CamelCase for variable names, and not underscores.
// So myAccountNumber as an example.

// Before you use a variable, you should declare it.For example:
var variableOne, variableTwo;

// New with ES6, you can use either 'let' or 'const':
let variableThree;
const variableFour = 3.14;


// After that you can use it:
variableOne = 5;
variableTwo = variableOne + 2;
console.log("variableOne: " + variableOne + " - variableTwo: " + variableTwo );

// Functions work like this:
function addNumbers(numberOne, numberTwo) {
    return numberOne + numberTwo;
}

var functionResult = addNumbers(20, 30);
console.log("Function result: " + functionResult);

// Function pointers are used a lot in JavaScript. Figure this out:
var anotherAddNumberFunction = addNumbers;
functionResult = anotherAddNumberFunction(40, 50);
console.log("Function result: " + functionResult);

// Simple objects using JSON JavaScript Object Notation:
var personA = {name: "Paul",
               email: "paul.craven@simpson.edu"};
console.log("personA.name: " + personA.name);
console.log("person['name']: " + personA['name']);

// This doesn't print much:
console.log("personA: " + personA);

// But check out this print:
console.log(personA);

// Class creation using 'class' keyword. New in ES6
class PersonB {
    constructor() {
        this.first = "";
        this.last = "";
    }
}

personB = new PersonB();
personB.first = "Paul";
personB.last = "Craven";

console.log("personB.first: " + personB.first);

// Another example, with a method and using parameters
class PersonC {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    fullName() {
        return this.first + " " + this.last;
    }
}

personC = new PersonC("Paul", "Craven");
console.log("personC.fullName: " + personC.fullName());

// Old-school pre-ES6 objects with methods:
var personD =
    {
        first: "Paul",
        last: "Craven",
        fullName: function() {
            return this.first + " " + this.last;
        },
        email: "paul.craven@simpson.edu"
    };
console.log("personD.name: " + personD.fullName());

// Loop
for (let i = 0; i < 10; i++) {
    console.log(i);
}

// Loop through an array
let colors = ["Red", "Blue", "Green"];
for (i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

// Loop through fields in an object
let personE = {name: "Paul", email: "paul.craven@simpson.edu"};
for (var field in personE) {
    console.log(field + " = " + personE[field]);
}

// Testing numbers
x = 5;
y = 6;
if(x == y) {
    console.log("x == y");
} else {
    console.log("x != y");
}

// Testing strings
// Use === not ==
// http://stackoverflow.com/questions/3586775/what-is-the-correct-way-to-check-for-string-equality-in-javascript

x = "Orange";
y = "Orange";
if(x === y) {
    console.log("x == y");
} else {
    console.log("x != y");
}

// Convert to string
x = 5;
y = 6;

z = x + y;
console.log("z = " + z);

z = x.toString() + y.toString();
console.log("z = " + z);

// Convert to number
x = "5";
y = "6";

z = x + y;
console.log("z = " + z);

// Use Number to convert to a number. You can also use parseInt() as well.
z = Number(x) + Number(y);
console.log("z = " + z);
