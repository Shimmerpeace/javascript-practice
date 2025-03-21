const taskForm = document.querySelector("#taskForm");
const inputTask = document.getElementById("inputTaskID");
const submitBtn = document.getElementById("submitBtn");
const taskList = document.getElementById("List");

taskForm.addEventListener("submit", function(e) {

} )

itemForm.addEventListener("submit", function (e) {
    // Adds a submit event listener to the 'itemForm' HTML form
    e.preventDefault(); //Prevents default form submission and page refresh
    addItem(itemInput.value); // calls the "addItem" function and passes the value from the 'itemInput' field as an argument, here, it adds the input value to a list.
    itemInput.value = ""; // clears the input field after submission by setting its value to an empty string.
  });

  function addItem(itemText) {
    // The addItem function creates a new list item, taking itemText as its parameter, i.e the text content of the new item
    const itemDiv = document.createElement("div"); // create a new <div> element that will contain the item
    itemDiv.className = "item"; // assign the class name
    itemDiv.innerHTML = `
                  <span>${itemText}</span>
                  <button onclick="editItem(this)">✏️</button>
                  <button onclick="deleteItem(this)">🗑️</button>
              `;
    itemList.appendChild(itemDiv); //adds the newly created div (with its content) to "itemList" element
  }

addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    createTaskElement(taskText);
    saveTaskToLocalStorage(taskText);
    taskInput.value = '';
});
