let counter1 = document.getElementById("counter1");
let saveParagraph = document.getElementById("saveParagraph");
let count1 = 0;
console.log(counter1);

function increase1() {
  count1 += 1;
  counter1.textContent = count1;
}

function save() {
  //console.log(count);
  let countStr = count1 + " - ";
  saveParagraph.textContent += countStr;
  counter1.textContent = 0;
  count1 = 0;
}

let welcomeText = document.getElementById("welcome-text");
let myName = "Peace Ogbata";
let greeting = "Welcome home ";
welcomeText.innerText = greeting + myName + "!";
welcomeText.innerText += " 🤗";
