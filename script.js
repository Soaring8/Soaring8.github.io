const tasksUl = document.querySelector("#tasks-list");
const taskInput = document.querySelector("#task-input");

let taskCount = 0;

function addTask() {
    const taskText = taskInput.value;
    const taskElement = document.createElement("li");
    taskElement.innerHTML = `<input type ="checkbox" class ="task-checkbox"><label>${taskText}</label></input>`;
    tasksUl.appendChild(taskElement);
}

taskInput.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") {
        return;
    }

    addTask();
    taskInput.value = "";
});

