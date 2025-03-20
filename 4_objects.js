// OBJECTS LITERALS
// The purpose of JS object is to store key-value pair, their purpose is to store state and behaviour. 
// State is represented by properties and behaviour is represented by function within the object. 
// When we specify a function within an object, it is called method

const dog = {
    neme: 'Max',
    breed: 'German Shepherd',
    age: 5,
    weight: 12,
    eat: function() {
        console.log('Chomp!');
    },
    bark() {
        console.log('Woof!');
    }
}

// FACTORY FUNCTION
// assuming we have another object with the same properties and method as the dog object (as shown below),
//  this causes code duplication which becomes hard to maintain once our application begins to grow

const dogg2 = {
    neme: 'Matt',
    breed: 'Retriever',
    age: 3,
    weight: 20,
    eat: function() {
        console.log('Chomp!');
    },
    bark() {
        console.log('Woof!');
    }
}

// to reduce code duplication, we can use functions to return an object. This is a reusable function 

function getDog(neme, breed, age, weight) {
    return {
        neme,
        breed,
        age,
        weight,
        eat() {
            console.log('Chomp!');
        },
        bark() {
            console.log('Woof!');
        }
    }
}

const dog1 = getDog('Max', 'German Shepherd', 5, 12,)
console.log(dog1);
const dog2 = getDog('Matt', 'Retriever', 3, 20);
console.log(dog2);


// CONSTRUCTOR FUNCTIONS


function getDog(neme, breed, age, weight) {
    return {
        neme,
        breed,
        age,
        weight,
        eat() {
            console.log(this.neme + ': Chomp!');
        },
        bark() {
            console.log(this.neme + ': Woof!');
        }
    }
}


function Doggy(neme, breed, age, weight) {
    // this = {};

    // Add properties to this
    this.neme = neme;
    this.breed = breed;
    this.age = age;
    this.weight = weight;
    this.eat = function() {
        console.log(this.neme + ': Chomp!');
    }
    this.bark = function() {
        console.log(this.neme + ': Woof!');
    }
    // return this;
}

const dog3 = new Doggy ('Jack', 'Rotweiler', 8, 15);
console.log(dog3);


// OBJECTS ARE DYNAMIC hence you can add or remove objects at the same time
const person = {
    neme: 'Steven'
};
console.log(person);

// you can add properties or update
person.favouriteFood = 'Tacos';
console.log(person);
// you can also update using bracket notation
person['favIcecream'] = 'vanilla';
console.log(person);
// delete properties
delete person.favIcecream;
console.log(person);
// add methods
person.eat = function() {
    console.log('start eating');    
}
person.eat();

/*    CONSTRUCTOR PROPERTY   */ 
// every object in javascript has a constructor function. It is used to construct an object and it is called
//  implicitly whenever we create a new object.

const persn = {
    neme: 'Steven'
};
console.log(persn.constructor);

/*
let newObj = {}; // this is the object literal syntax which is the syntactic sugar

is the  same in javascript as 

let newObj = new Object();
*/
 // in javascript, ther is also 
 new String(); // e.g 'Steven'
 new Boolean(); // true or false
 new Number(); // 1, 2, 3
 // so every object has a constructor property which  refers to the constructor function used to create an object 


 //***** FUNCTIONS ARE OBJECTS  ******/ //

 function add(num1, num2) {
    return num1 + num2;
 }

 const n = add;
 console.log(n(2, 2));
 console.log(add.length);

 // define a constructor function
 function Programmer(name) {
    this.name = name;
    this.writeCode = function() {
        console.log('Code in javascript');
    }
 }

 console.log(Programmer.length);
 console.log(Programmer.constructor);

 
 const Programmerer = new Function('neme', `
    this.neme = neme;
    this.writeCode = function() {
        console.log('Code in javascript');
    }
`);
 const newProgrammerer = new Programmerer('Steven');
 newProgrammerer.writeCode();

 ///  VALUE VS REFERENCE TYPES  ///
// primitive values refer to simple values such as string, number, booleans, and they are passed by copy.
// objects values refers to key-value pairs which also includes arrays and they are passed by reference.
 let a = 10;
 let b = a;
 a = 20;
 console.log(a);
 console.log(b);

 let c = { value: 20};
 let d = c;

 c.value = 100;
 console.log(c);
 console.log(d);
 

 /* ENUMERATING PROPERTIES OF AN OBJECT */
 let numbers = [1, 2, 3, 4, 5];
 for (const items of numbers) {
    console.log(items);
 }

 const hund = {
    heiße: "Jack",
    age: 4,
    eyeColor: "blue"
};
for (const value in hund) {
    console.log(hund[value]);
}
const keys = Object.keys(hund);
console.log(keys);
const valuess = Object.values(hund);
console.log(valuess);
const entries = Object.entries(hund);
console.log(entries);
