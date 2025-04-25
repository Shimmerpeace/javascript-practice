let counter = document.getElementById("counter");
let count = 0;

let welcomeMsg =document.getElementById("welcome-message")

function increment() {  
    count+=1;
    counter.innerText = count;    
}

function save() {
    let text = count + " - "
    welcomeMsg.textContent += text;
    counter.textContent = 0;
    count = 0;
}
console.log("The end!")


