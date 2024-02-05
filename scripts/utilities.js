/**
 * A file for storing helpful functions.
 * Use it for those which do not directly belong
 * to anything else
 *
 * Might I suggest you create a function for generating
 * random IDs?
 * type generateId = () => number
 */

export function createTodoId() {
  let timestamp = new Date().getTime();
  let randomNumber = Math.floor(Math.random() * 10000);
  return timestamp + randomNumber;
}