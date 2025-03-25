const inputOfTask = document.getElementById("inputTaskID");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("task-list");

addTaskBtn.addEventListener("click", () => {
  //if (taskItem.trim()) {
  if (inputOfTask.value) {
    const taskText = inputOfTask.value; // Retrieve the task text from the input field.
    createElement(taskText); // Pass taskText to createElement function
    storeTaskItemInlocalStorage(taskText); //Pass taskText to storeTaskItemInlocalStorage
    inputOfTask.value = ""; // Clear input field
  } else {
    alert("Please enter an item.");
  }
});

function createElement(taskText) {
  const listTask = document.createElement("li");
  listTask.textContent = taskText;
  taskList.appendChild(listTask);
}

function storeTaskItemInlocalStorage(taskText) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(taskText);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
function getTasksFromLocalStorage() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => addTask(task));
}
//////////////////////////////////////////
// THIS CODE IS WRITEN BELOW
// Load tasks from local storage when the page loads
//document.addEventListener("DOMContentLoaded", getTasksFromLocalStorage);

/////////////////////////////////////////
/////////////////////////////////////////
///////////////////////////////////////////////
//editTask()
function editTask(button) {
  const taskSpan = button.parentElement.querySelector("span");
  // const taskSpan = button.closest("div").querySelector("span");
  console.log(taskSpan);
  const newTask = prompt("Edit the new task:", taskSpan.textContent);
  if (newTask) {
    taskSpan.textContent = newTask;
    updateTaskInLocalStorage(taskSpan.parentElement, newTask);
  }
}
function updateTaskInLocalStorage(taskDiv, newTask) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const index = Array.from(taskDiv.parentElement.children).indexOf(taskDiv);
  tasks[index] = newTask;
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function deleteTask(button) {
  const taskDiv = button.parentElement;
  taskDiv.remove();
  removeTaskFromLocalStorage(taskDiv);
}
function removeTaskFromLocalStorage(taskDiv) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const index = Array.from(taskDiv.parentElement.children).indexOf(taskDiv);
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
// Load tasks from local storage when the page loads
document.addEventListener("DOMContentLoaded", getTasksFromLocalStorage);
