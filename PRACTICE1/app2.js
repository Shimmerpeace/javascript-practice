let counter2 = document.getElementById("counter2");

console.log(counter2);
let count2 = localStorage.getItem("count2") //get the item (that is the value under the key "count") which is stored in browser's local storage
  ? parseInt(localStorage.getItem("count2")) // if truthy (i.e., not null) then convert value into an interger
  : 0; // if falsy, assign value of count to 0

// Initialize the counter display
counter2.textContent = count2;

function increase2() {
  count2 += 1;
  updateCounter();
}

function reset() {
  count2 = 0;
  updateCounter();
}

function decrease() {
  count2 -= 1;
  updateCounter();
}

// Local storage allows data to persist even after the browser window is closed. 
function updateCounter() {
  counter2.textContent = count2;
  localStorage.setItem("count2", count2); //saves the current value of count2 to the browser's local storage
  //The data is stored as a key-value pair, where "count2" is the key, and the value of the count2 variable is the value.
}

localStorage.setItem("username", "JaneDoe");
const username = localStorage.getItem("username");
if (username !== null) {
  console.log(username);
} else {
  console.log("no value in localStorage");
}
