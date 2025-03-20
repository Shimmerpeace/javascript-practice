let counter = document.getElementById("counter");
console.log(counter);
let count = localStorage.getItem("count")
  ? parseInt(localStorage.getItem("count"))
  : 0;

// Initialize the counter display
counter.textContent = count;

function increase() {
  count += 1;
  updateCounter();
}

function reset() {
  count = 0;
  updateCounter();
}

function decrease() {
  count -= 1;
  updateCounter();
}

function updateCounter() {
  counter.innerHTML = count;
  localStorage.setItem("count", count);
}

localStorage.setItem("username", "JaneDoe");
const username = localStorage.getItem("username");
if (username !== null) {
  console.log(username);
} else {
  console.log("no value in localStorage");
}
