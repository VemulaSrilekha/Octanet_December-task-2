function addTask() {
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

if (taskInput.value !== "") {
const li = document.createElement("li");
li.innerText = taskInput.value;
li.onclick = function() {
li.classList.toggle("completed");
};
taskList.appendChild(li);
taskInput.value = "";
} else {
alert("Please enter a task!");
}
}
