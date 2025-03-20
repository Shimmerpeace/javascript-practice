// INTRO TO OPERATORS
// In Javascript, we can operate on our variables by using operators, these include arithmetic, assignment, 
// comparison, logical and bitwise operators which serve as fundamental building blocks for our applications

// ARITHMETIC OPERATORS
// They include (+, -, *, /, %)
// num = num + 1; or num +=1; or num++; or ++num
// num = num - 1; or num -=1; or num--; or --num

//ASSIGNMENT OPERATOR
let programmingLanguage = 'JavaScript';

// COMPARISON OPERATORS (>, >=, <, <=), the result of using these operator is a boolean value
let num1 = 14;
let num2 = 10;
const isNum1Greater = num1 > num2;
console.log(isNum1Greater); // true

const isNum1LessThan = num1 < num2;
console.log(isNum1LessThan); // false

const isNum1LessThanOrEqualTo = num1 <= num2;
console.log(isNum1LessThanOrEqualTo); // false

//EQUALITY OPERATOR
let a = 2;
let b = '2';
//the log below evealuates what is known as 'truthy'
console.log(a == b); // true. The == is known as loose equality
//the log below evealuates what is known as strict equality (===)
console.log(a === b); // false

console.log(5 == "5"); // true
console.log(0 == false); // true
console.log(null == undefined); // true

//TERNARY OPERATOR is a conditional operator that allows us to write cleaner code, often times you need to perform a comparison and store values
let age = 16;
const canDrive = age >= 16 ? true : false;
console.log(canDrive);

let points = 110;
const customerType = points > 100 ? "gold" : "silver";
console.log(customerType);

let badPower = 80;
const batteryPower = badPower < 30 ? 'good' : 'bad';
console.log(batteryPower);

// LOGICAL OPERATORS are special symbols used to make decisions based on multiple conditions. 
// They are || (or operator), && (and operator), ! (not operator) and ?? (null coalescing).

// || (or operator)
console.log(true || true); // true
// as long as one is true, it will return the value as expected, even in the examples below
console.log(false || true); // true
console.log(true || false); // true
console.log(false || false); // this will give a 'false' answer
console.log('good' || 'bad'); // good

let admitted = true;
let notAdmitted = false;
const accepted = admitted || notAdmitted;
console.log(accepted); // true

// && (and operator)
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

let rightAge = 18;
let adult = true;
const canDrink = rightAge >= 18 && adult;
console.log(canDrink) // true

let apple = true, banana = true, c = true, d = true;
console.log(apple && banana || c && d);
console.log((apple && banana) || (c && d));

// ! (not operator). It converts the operand to a boolean type "true or false" and it returns the inverse
console.log(!true); // false

 let closedSunday = true;
 const officeOpen = !closedSunday;
console.log(officeOpen); //false

// ?? (null coalescing). It allows you to supply the default value incase the operand used infront of the question mark is false 
let bab = null;
const result = bab ?? false; // the longer version is below which is a syntactic sugar
// const result = (bab !== null && bab !== undefined) ? a : false;
console.log(result); // false


//*****LOGICAL OPERATORS WITH NON-BOOLEANS****/
let favColor = 'brown';
let defaultColor = 'green';
const webColor = favColor || defaultColor;
console.log(webColor); // brown
// if the favColor was an empty string, javascript would evaluate that to be falsy  and return the default color.
// Falsy term mean using logical operators with non-boolean value (such as a string or number). 
// Falsy values consist of null, undefined, not a number (NaN), empty string, zero and false.
// How do logical operators function when applied to non-boolean values? Logical operators are evaluated from left to right

//*****OPERATOR PRECEDENCE***** */ P.E.M.D.A.S -parenthesis, exponents, multiplication, division, 
// addition, subtraction

let n = 5 + 5* 4;
console.log(n);

let nn = 5 + (5 * 4);
console.log(nn);