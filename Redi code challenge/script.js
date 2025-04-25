// Task 1: Replace the empty string of groupName.innerHTML with your chosen Group Name
const groupName = document.querySelector("#groupName");
groupName.innerHTML = "Incredibles";

// Task 2
// Step 1: Create an Adventurer class with 3 properties that are typical for an adventurer

class Adventurer {
  constructor(name, type, energy) {
    this.name = name;
    this.type = type;
    this.energy = energy;
  }

  getInfo() {
    return `
            ${this.name} is a ${this.type} with an energy level of ${this.energy}.
            `;
  }
}

// Step 2: Replace the empty string of properties.innerHTML with your Adventurer class as a string
// Attention use back ticks ``instead of "" for multiline string Javascript
// Display the Adventurer class as a string in the #myClass element
const myClass = document.querySelector("#myClass");
myClass.innerHTML = `



class Adventurer {
  constructor(name, type, energy) {
    this.name = name;
    this.type = type;
    this.energy = energy;
  }

  getInfo() {
    return \`
            \${this.name} is a \${this.type} with an energy level of \${this.energy}.
            \`;
  }
}
`;

// Task 3
// Step 1 Add a function getInfo to the adventurer class that returns a string that contains all information about an adventurer object
// Your solution Step 3.1 Go back to the Advennturer  class you created previously and add the getInfo function

// Step 2 Create different 3 candidates objects  with your Adventurer Class
// Your solution Step 3.2 Create the candidate objects here
const candidate1 = new Adventurer("Gorgeous", "skydiver", 9);
const candidate2 = new Adventurer("Andy", "skier", 8);
const candidate3 = new Adventurer("Hadib", "explorer", 7);

// Step 3 use the getInfo function to store the the information of each candidate in their personX.innerHTML variable
// Your solution Step 3.3 Create 3 candidate objects and display their info
// Step 3.3: Display each candidate's info in their respective HTML elements
const person1 = document.querySelector("#person1");
const person2 = document.querySelector("#person2");
const person3 = document.querySelector("#person3");

person1.innerHTML = candidate1.getInfo();
person2.innerHTML = candidate2.getInfo();
person3.innerHTML = candidate3.getInfo();
