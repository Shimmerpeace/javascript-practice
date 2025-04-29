// addEventListener - "click" Example 1
const btn1 = document.getElementById("click-btn1");
btn1.addEventListener("click", handleClick1);
function handleClick1() {
  console.log("button 1 clicked");
}

// addEventListener - "click" Example 2
const btn2 = document.getElementById("click-btn2");
btn2.addEventListener("click", () => {
  console.log("button 2 clicked");
});

// addEventListener - "submit" Example 1
const form = document.getElementById("test-form");
form.addEventListener("submit", handleForm);
function handleForm(e) {
  e.preventDefault();
  console.log("Form submitted");
}

// addEventListener - "submit" Example 2
const form2 = document.getElementById("test-form2");
const input = document.getElementById("test-input");
const formDiv = document.querySelector(".form-div");
form2.addEventListener("submit", handleForm2);
function handleForm2(e) {
  e.preventDefault();
  paragraph = document.createElement("p");
  formDiv.appendChild(paragraph);
  const value = input.value;
  paragraph.innerHTML = value;
  console.log("Form2 submitted");
}

// addEventListener - "mouse over"
let mouseCtn = document.getElementById("mouse-ctn");
mouseCtn.addEventListener("mouseover", () => {
  mouseCtn.textContent = " You are amazing!";
  //mouseCtn.textContent += " You are amazing!";
  console.log("Mouse over this element!");
});

// addEventListener - "key press"
document.addEventListener("keydown", (e) => {
  console.log(`Key pressed: ${e.key}`);
});

// addEventListener - "Page load"
document.addEventListener("DOMContentLoaded", () => {
  console.log("Page loaded!");
});
