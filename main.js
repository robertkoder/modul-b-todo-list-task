/**
 * The file where everything comes together
 */
import * as todoList from "./scripts/todoList.js";
import { createTodoElement } from "./scripts/createTodoElement.js";

const userInput = document.querySelector("#todo-text-input");
const addTodoButton = document.querySelector("#todo-add-button");
const displayList = document.querySelector("#todo-display");

function handleUserSubmit() {
    const taskTitle = userInput.value.trim();
    if (taskTitle === "") {
        alert("Please enter a todo item.");
        return;
    }

    const isSuccess = todoList.addTodo({
        title: taskTitle,
    });

    if (isSuccess) {
        updateDisplay();
    } else {
        alert("Failed to add Todo. Please try again.");
    }

    userInput.value = "";
}

addTodoButton.addEventListener("click", handleUserSubmit);

userInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
      handleUserSubmit();
  }
});

function updateDisplay() {
    displayList.innerHTML = "";

    const allTodos = todoList.getAllTodoes();

    allTodos.forEach(todo => {
        const todoElement = createTodoElement(todo);
        displayList.appendChild(todoElement);
    });
}

updateDisplay();