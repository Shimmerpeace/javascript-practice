// Control-flow in programming refers to the order in which statements are executed
// There are two types of conditionals in programming

//***1. IF-ELSE STATEMENTS */ in javascript, control flow strucrures such as the if else statements 
// dictate how and under what conditions certan blocks code are executed
let priceOfChocolate = 1.99;
let cashAmount = 5;
const buyChocolate = cashAmount >= priceOfChocolate;
console.log(buyChocolate);
console.log(typeof buyChocolate);
if (buyChocolate) {
    console.log('Enjoy your purchase');
} else {
    console.log('Sorry you do not have enough!')
}


let hour = 15;
if (hour >= 6 && hour <= 12) {
    console.log('Serving breakfast');
} else if (hour > 12 && hour <= 14) {
    console.log('Serving lunch');
} else {
    console.log('Serving dinner');
}

//**** 2.: SWITCH CASE STATEMENTS" */ can also be used for control-flow. However, switch case is 
// only used for equality comparisons

let job = 'Sales Engineer';
if (job === 'Software Developer') {
    console.log('writes code');
} else if (job === 'Designer') {
console.log('Makes user interface documents');
} else if (job === 'Cloud Engineer') {
    console.log('Manages and deploys cloud resources');
} else {
    console.log('work with customers');
}
// OR USE

let teacher = 'history';
switch (teacher) {
    case 'biology':
        console.log('cells and tissues');
        break;
    case 'history':
        console.log('people and places');
        break;
    case 'chemistry':
        console.log('chemicals and compounds');
        break;
    default:
        console.log('health education');
}

//********                     *******/
//***************** FOR LOOPS ******************/
//************                     ***********/
// In programming, a for loop is use in order to execute a code block repeatedly, so you define the 
// code block within the curly braces and using the special syntax of the for loop, you can continue 
// to repeat those line of code while the condition is true

let nuumbers = [1, 2, 3, 4, 5, 6, 7];
let idx = 0;
let lengthOfArray = nuumbers.length;

console.log(nuumbers[idx++]);
console.log(nuumbers[idx++]);
console.log(nuumbers[idx++]);
console.log(nuumbers[idx++]);
console.log(nuumbers[idx++]);
console.log(nuumbers[idx++]);
console.log(nuumbers[idx]);

console.log("for loop");

// EXPLANATION OF FOR LOOP: 
let numbers = [1, 2, 3, 4, 5, 6, 7];
for (let idx = 0; // initialization 
 idx < numbers.length; // condition 
  idx++) // increment or decrement
   {
    console.log(numbers[idx]);
}

console.log("another for loop");

for (let num = 0; num < 100; num ++) {
    console.log(num)
}

// EXPLANATION OF FOR LOOP: 
// initialization = (let num = 0;) or (let idx = 0;)
// condition = (num < 100;) or (idx < numbers.length;) 
// increment or decrement = (num ++) or (idx++)
// the code will continue to be executed while this condition is true and once its false, 
// it will stop its execution.

console.log("while loop");

//********                     *******/
//***************** WHILE LOOPS ******************/
//************                     ***********/
 // use the while loop in the case when the number of iterations is not known before entering the loop
let prop = [2, 4, 6, 8, 10];
let ndex = 0;
while (ndex < prop.length) {
    console.log(prop[ndex]);

    ndex++;
}

let props = [2, 4, 6, 8, 10];
let sum = 0;
while (true) {
    console.log('Loop')
    sum++;

    if (sum === 10)
        break;
}


//********                     *******/
//***************** DO-WHILE LOOPS ******************/
//*It will execute the code first specified within the curly braces and then check the conditional statement**/
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 10);


//********                     *******/
//***************** INFINITE LOOPS ******************/
//it is important that our loop terminate by specifying a step condition to avoid the problem of infinite 
// loops and crashhing our program in the computer /
while (true) {
    console.log("little")
    break;
}

for(let numb = 0; numb <= 20; numb++) {
    console.log("numb")
}

//********                     *******/
//***************** FOR-IN LOOPS ******************/
// it is used to iterate through the keys of a javaScript object. 
// you would use it when you want to efficiently iterate through the object and access its value.

const course = {
    name: 'Javascript for beginners',
    hours: 3,
    sections: 7
};

console.log(course.name);
console.log(course["hours"]);
console.log(course.sections);

//OR AS A SHORTCUT; DO THE FOR-IN LOOP
for (const key in course) {
    console.log(course[key]);
}


//********                     *******/
//***************** FOR-OF LOOPS ******************/
// it allows us to easily iterate over an array for each iteration, we get access to the element
console.log("normal for loops");

let nummer = [1, 2, 3, 4];

for (let index = 0; index < nummer.length; index++) {
    console.log(nummer[index]);
   } 
   
   console.log("for-of loops");

// OR AS A SHORTCUT; DO THE FOR-OF LOOP
   for (let theElement of nummer) {
    console.log(theElement);
   }


   //********                     *******/
//***************** BREAK STATEMENTS ******************/
// the break keyword is used when dealing when dealing with control flow in for loops or in switch case statements
console.log("for loop - break statements");

for (let i = 0; i < 10; i++) {
    if (i === 2) {
        break; // exits the loop when i is = 5
    }
    console.log(i);
}

console.log(' while loop - breaking statement');

// but with a while loop
let iy = 0;
while (iy < 10) {
    if (iy === 3) {
        break;
    }
    console.log(iy);
    iy++;
}

console.log('do-while loop breaking statement');

let iye = 0;
do {
    if (iye === 4) {
        break;
    }
    console.log(iye);
    iye++;     
} while (iye < 10);

console.log('for-in - breaking statement');

const obj = {a: 1, b: 2, c: 3};
for (let key in obj) {
    if (key === 'b') {
        break;
    }
    console.log(obj [key]);
}

console.log('for-of - breaking statement');

const arry = [1, 2, 3, 4, 5];
for (let element of arry) {
    if (element === 3) {
        break;
    }
    console.log(element);
}


console.log('for CONTINUE STATEMENTS');

  //********                     *******/
//***************** CONTINUE STATEMENTS ******************/
// it can be used within for loops or while loops. when JS encounters this keyword, 
// it will skips the current iteration to the next

for (eye = 0; eye < 10; eye++) {
    if (eye % 2 === 0) {
        continue; // with "continue", it skips the current iteration and move to the next one
    }
    console.log(eye); // so it skips all the even numbers , remaining the odd numbers
}

console.log('while CONTINUE STATEMENTS');
let ey = 0;
while (ey < 10) {
    ey++;
    if (ey % 2 === 0) {
        continue;
    }
    console.log(ey);
}

console.log('do- while CONTINUE STATEMENTS');
let wo = 0;
do {
    wo++;
    if (wo % 2 === 0) {
        continue;
    }
    console.log(wo);
} while (wo < 10);

console.log('for-in CONTINUE STATEMENTS');
const ojb = { a: 1, b: 2, c: 3, d: 4};
for (let items in ojb) {
    if (ojb [items] % 2 === 0) {
        continue;
    }

    console.log(ojb [items]);
}

console.log('for-of CONTINUE STATEMENTS');
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let itemz of array) {
    if (itemz % 2 === 0) {
        continue;
    }
    console.log(itemz);
}

console.log(exercise);
function maxNum(num1, num2) {
    return num1 >= num2 ? num1 : num2;
}
console.log(maxNum(2, 1));


/////// FIZZBUZZ///////

function fizzBuzz(nummar) {
    if (nummar % 3 === 0 && nummar % 5 === 0) 
        return 'FizzBuzz';
    else if (nummar % 3 === 0)
        return 'Fizz';
    else if (nummar % 5 === 0)
        return 'Buzz';
    else
    return nummar;
}
   
 console.log(fizzBuzz(15) );    // input 15, 9, 10 and 7

 function displayEven(array) {
    for (const  digits of array) { 
    if (digits % 2 === 0)
        console.log(digits);
    }
 }

 displayEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

 function displayOdd(array) {
    for (const  digits of array) { 
    if (digits % 2 != 0)
        console.log(digits);
    }
 }

 displayOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

 