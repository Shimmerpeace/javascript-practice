const inputOfTask = document.getElementById("inputTaskID");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("task-list");

// get or Load tasks from local storage when the page loads (onload)
document.addEventListener("DOMContentLoaded", getTasksFromLocalStorage);

addTaskBtn.addEventListener("click", () => {
  const taskText = inputOfTask.value; // Retrieve the task text from the input field.
  //if (taskItem.trim()) {
  if (inputOfTask.value) {
    createElement(taskText); // Pass taskText to createElement function
    storeTaskItemInlocalStorage(taskText); //Pass taskText to storeTaskItemInlocalStorage
    inputOfTask.value = ""; // Clear input field after adding the task
  } else {
    alert("Please enter an item.");
  }
});

function createElement(taskText, completed = false) {
  const eachTaskList = document.createElement("li");
  eachTaskList.className = "task-item";
  if (completed) eachTaskList.classList.add("completed");
  eachTaskList.innerHTML = `
<span>${taskText}</span>
<div>
<button class="complete-btn">✅</button>
<button class="edit-btn">✏️</button>
<button class="delete-btn">🗑️</button>
</div>
`;
  // mark task as complete
  eachTaskList.querySelector(".complete-btn").addEventListener("click", () => {
    eachTaskList.classList.toggle("completed");
    updateTaskInLocalStorage(taskText);
  });
  // delete task
  eachTaskList.querySelector(".delete-btn").addEventListener("click", () => {
    eachTaskList.remove();
    deleteTaskFromLocalStorage(taskText);
  });
  taskList.appendChild(eachTaskList);
}

function storeTaskItemInlocalStorage(taskText) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push({ text: taskText, completed: false });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function getTasksFromLocalStorage() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => createElement(task.text, task.completed));
}

function updateTaskInLocalStorage(taskText) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const updatedTasks = tasks.map((task) =>
    task.text === taskText ? { ...task, completed: !task.completed } : task
  );
  localStorage.setItem("tasks", JSON.stringify(updatedTasks));
}

function deleteTaskFromLocalStorage(taskText) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const updatedTasks = tasks.filter((task) => task.text !== taskText);
  localStorage.setItem("tasks", JSON.stringify(updatedTasks));
}
