// variables are used to store temporary data. Its a name storage for data.
// you declare a variable with the "let" keyword. 
// The "let" keyword is for variables which hold values that can be changed.
let vorname;
vorname = "Efeh";
console.log(vorname);
// "=" is refered to as the assignment operator

let firstName = "Peace", lastName = ' Ogbata';
console.log(firstName);

// you can change the variable as many times as needed
let message = 'hello';
message = 'world';
console.log(message);

// CONSTANTS. 
// The "const" keyword is for variables that can NOT be changed.
const christmas_2025 = "today";
console.log(christmas_2025);

// (A) PRIMITIVE DATA TYPES
// They refer to fundamental values and can only contain a single thing
//////////////////////////////////

// 1. string data
let fav_food = 'rice';
let fav_color = 'red';
let fav_lang = 'English';
console.log("My favorite food is " + fav_food + ", and my favorite color is " + fav_color + ", and lastly I speak " + fav_lang + ".");

// 2. number data 
let numbOfDonuts = 12;
let pi = 3.14;

// 3. BigInt
let veryLargeNumb = 2773547464744n;
console.log(veryLargeNumb);

// 4. boolean
let lovesGod = true;

// 5. undefined data
let fav_dress;
console.log(fav_dress);

// 6. null data type. NULL IS USED TO EXPLICITLY CLEAR THE VALUE OF A VARIABLE
fav_color = null;
console.log(fav_color);

// 7. symbol data type is used to create unique identifiers and objects
const uniqueKey = Symbol();
console.log(uniqueKey);

// (B) REFERENCE DATA TYPE
// OBJECT IS NOT PART OF THE PRIMITIVE DATATYPE, THEY ARE A MORE COMPLEX DATATYPE
// 1. object data type is a reference data type that is an object. objects can have a more complex structure 
// and they hold a key-value pairs which enables us to store more than one variable all in one
let course = {
    kursname: 'Javascript for beginners',
    hours: 3
};
console.log(course);

// ******DYNAMIC TYPING ****/
// programming languages that allows you to initialize a variable to a data type (for example a string ) and 
// then reassign it to a different data type (e.g a number or boolean) are known as dynamically typed

let nachname = "Ndidi";
console.log(nachname)
nachname = 3;
console.log(nachname)
nachname = false;
console.log(nachname)

let namede = 'efeh';
console.log(typeof namede);

namede = 100;
console.log(typeof namede);

namede = true;
console.log(typeof namede);

// **** OBJECTS. Javascript objects are used to represent an object or nouns (person, place, or things)
let coursee = {
    name: 'Javascript for beginners',
    hours: 3,
    learningLanguage: "JavaScript"
};
console.log(coursee);

// the key-value pair when considered together is referred to as a property of the object and all the keys are represented internally as a string
// In order to assess these properties, you can do so through two different notation.
// The most common notation is the "." notation
let cour = {
    kursname: 'Javascript for beginners',
    hours: 3
};
console.log(cour.kursname);

// you can also reassign the property
cour.kursname = 'javascript fundamentals';
console.log(cour.kursname);

// you can access properties using bracket notation e,g
let child = {
    baby: 'chima',
    age: 3
};
console.log(child['baby'])

// you can use bracket notation to update the value e,g
child['baby'] = 'david';
console.log(child['baby'])
///////////////////////////////////////////
let property = 'age';
console.log(child[property]);


// ARRAYS //
// arrays are a data structure used to store lists of data, use square bracket to create an array literal
// array is an object, objects have key-value pair
let prodColors = ['blue', 'green'];
console.log(prodColors);
console.log(prodColors[0]);
prodColors[0] = 42;
console.log(prodColors[0]);
console.log(typeof prodColors);


// a useful property when working with arrays is the length property
let peopleNames = ['andrei', 'grace', 'faith'];
console.log(peopleNames.length);

// FUNCTIONS are the building blocks of our applications. It allows us to group together statements 
// to perform a task or an action or calculate a value and return that value
function sayHi() {
    console.log('Hi!');
}
sayHi();

// you can also define a parameter variable (i.e pass an argument)
function sayBye(goodbye) {
    console.log('Bye! ' + goodbye)
}
sayBye('Tschüß!');

// TYPES OF FUNCTION (calculate a value and return that value)
function multiply(num1, num2) {
    return num1 * num2;
}
console.log(multiply(2, 2));

function test(describe) {
    console.log("Kids are " + describe + ".")
}
test("lovely")
test("amazing")
test("funny")