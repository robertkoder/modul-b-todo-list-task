/**
 * Takes a Todo Item and generates a HTML Element for that Todo
 * You are free to make wathever HTLM you feel necessary,
 * But it should be semantically meaningful and
 * look decent
 *
 * @param {Todo} data
 * @returns {HTMLElement}
 */
// Template for a single to-do item
const todoItemTemplate = `
<div class="todo-item flex-col">
  <h2 class="todo-title"></h2>
  <div class="todo-additional-info flex">
    <p>Created at: <span class="todo-created-at"></span></p>
  </div>
</div>
`;

export function createTodoElement(todoData) {
  // Template remains unchanged
  const todoEntry = document.createElement("li");
  todoEntry.innerHTML = todoItemTemplate;

  // Set the Todo title
  const todoTitle = todoEntry.querySelector(".todo-title");
  todoTitle.innerText = todoData.title;

  // Format and set the creation date
  const todoCreatedAt = todoEntry.querySelector(".todo-created-at");
  const formattedDate = todoData.createdAt.toLocaleDateString("en-GB"); // Adjust locale as needed
  todoCreatedAt.innerText = formattedDate;

  return todoEntry;
}
