let counter = document.getElementById("counter");
console.log(counter);
let count = 0; 
function increase() {
    count+=1;
    counter.innerHTML=count;
}

function reset() {
    count = 0;
    counter.innerHTML=count;
}

function decrease() {
    count-=1;
    counter.innerHTML=count;
}