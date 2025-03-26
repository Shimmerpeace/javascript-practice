const taskInput = document.getElementById("inputTaskID");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("task-list");

// Load tasks from local storage when the page loads
document.addEventListener("DOMContentLoaded", loadTasksFromLocalStorage);

addTaskBtn.addEventListener("click", addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  
  if (taskText) {
    createTaskElement(taskText);
    storeTaskInLocalStorage(taskText);
    taskInput.value = "";
    taskInput.focus();
  } else {
    alert("Please enter a valid task.");
  }
}

function createTaskElement(taskText, isCompleted = false) {
  const taskElement = document.createElement("li");
  taskElement.className = "task-item";
  
  if (isCompleted) {
    taskElement.classList.add("completed");
  }
  
  taskElement.innerHTML = `
    <span>${taskText}</span>
    <div>
      <button class="complete-btn">✅</button>
      <button class="edit-btn">✏️</button>
      <button class="delete-btn">🗑️</button>
    </div>
  `;
  
  // Add event listeners
  taskElement.querySelector(".complete-btn").addEventListener('click', () => {
    taskElement.classList.toggle("completed");
    updateTaskInLocalStorage(taskText);
  });
  
  taskElement.querySelector(".delete-btn").addEventListener("click", () => {
    if (confirm("Are you sure you want to delete this task?")) {
      taskElement.remove();
      deleteTaskFromLocalStorage(taskText);
    }
  });
  
  // TODO: Implement edit functionality
  taskElement.querySelector(".edit-btn").addEventListener("click", () => {
    editTask(taskElement, taskText);
  });
  
  taskList.appendChild(taskElement);
}

function storeTaskInLocalStorage(taskText) {
  const tasks = getTasksFromLocalStorage();
  tasks.push({ text: taskText, completed: false });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasksFromLocalStorage() {
  const tasks = getTasksFromLocalStorage();
  tasks.forEach(task => createTaskElement(task.text, task.completed));
}

function getTasksFromLocalStorage() {
  return JSON.parse(localStorage.getItem("tasks")) || [];
}

function updateTaskInLocalStorage(taskText) {
  const tasks = getTasksFromLocalStorage();
  const updatedTasks = tasks.map(task => 
    task.text === taskText ? { ...task, completed: !task.completed } : task
  );
  localStorage.setItem("tasks", JSON.stringify(updatedTasks));
}

function deleteTaskFromLocalStorage(taskText) {
  const tasks = getTasksFromLocalStorage();
  const updatedTasks = tasks.filter(task => task.text !== taskText);
  localStorage.setItem("tasks", JSON.stringify(updatedTasks));
}

// TODO: Implement this function
function editTask(taskElement, oldText) {
  // Implementation for editing a task
  console.log("Edit functionality to be implemented");
}

/*////////////////////////////////////////
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
  */
