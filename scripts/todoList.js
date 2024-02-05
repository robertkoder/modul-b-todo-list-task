import { createTodoId } from "./utilities.js";

const todoes = [];

/**
 * Returns all the Todoes in a list
 *
 * @returns {Todo}
 */
export function getAllTodoes() {
  return todoes;
}

/**
 * Creates a new Todo based on the passed
 * in data
 *
 * @param {TodoCreationInfo} data
 * @returns {Todo}
 */
export function addTodo(data) {
  if (data.title.trim() === "") {
    return false;
  }
  const newTodo = {
    id: createTodoId(),
    title: data.title,
    isComplete: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  todoes.push(newTodo);
  return true;
}
