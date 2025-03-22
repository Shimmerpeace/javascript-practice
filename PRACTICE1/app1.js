// COUNTER
///////////////////////////////////////////
let counter1 = document.getElementById("counter1");
let saveParagraph = document.getElementById("saveParagraph");
let count1 = 0;
console.log(counter1);

function increase1() {
  count1 += 1;
  counter1.textContent = count1;
}

function save() {
  let countStr = count1 + " - ";
  saveParagraph.textContent += countStr;
  // to reset back to zero after each save
  counter1.textContent = 0; // set the text content of the counter1 element back to zero (in the html)
  count1 = 0; // set the count1 variable in javascript back to zero
}

console.log("Let'S count the number of oranges in the basket!")

// WELCOME MESSAGE
/////////////////////////////////
let welcomeText = document.getElementById("welcome-text");
let myName = "Peace Ogbata";
let greeting = "Welcome home ";
welcomeText.innerText = greeting + myName + "!";
welcomeText.innerText += " 🤗";

//////////////////////////////////////////////////////////////////////////
let myPoints = 3;
function add3Points() {
  myPoints += 3;
  console.log(myPoints)
}
add3Points();//when add3Points() is called, the result is 6
add3Points();//when add3Points() is called, the result is 9
add3Points();//when add3Points() is called, the result is 12
function remove1point() {
  myPoints -= 1;
  console.log(myPoints)
}
remove1point()// when remove1point() is called, the result is 11
remove1point()// when remove1point() is called, the result is 10
console.log(myPoints)
////////////////////////////////////////////////////////////////////////

// PURCHASE ERROR MESSAGE
////////////////////////////////////////////////////////////////////////
const errorMessage = document.getElementById("error");

function purchase() {
  console.log("button was clicked")
  errorMessage.textContent = "Something went wrong, please try again";
}  

// CALCULATOR CHALLENGE
/////////////////////////////////////////////////////////////////////////
let num1 = 8;
let num2 = 2;
document.getElementById("num1").textContent = num1;
document.getElementById("num2").textContent = num2;

let sumParagraph = document.getElementById("sum-span")

function add() {
  let result = num1 + num2;
  sumParagraph.textContent = "Sum: " + result;
}
  
function substract() {
  let result =  num1 - num2;
  sumParagraph.textContent = "Sum: " + result;
}

function divide() {
  let result = num1 / num2;
  sumParagraph.textContent = "Sum: " + result; 
}

function multiply() {
  let result = num1 * num2;
  sumParagraph.textContent = "Sum: " + result; 
}



