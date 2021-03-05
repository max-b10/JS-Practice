// Initial prompt for user to enter command
let input = prompt("Welcome to your todo list! Type a command:");
// The todo array itself
const todos = ["todo 1", "todo 2"];

// Using setTimeout because of the browser being gltichy with methods
// such as: prompt and alert. SetTimeout delays the JS execution.
window.setTimeout(function () {
  // If the user doesn't type 'quit' run the code in the curly braces.
  while (input !== "quit" && input !== "q") {
    if (input === "list") {
      for (let i = 0; i < todos.length; i++) {
        console.log(`Todo #${i + 1}: ${todos[i]}`);
      }
    }
    input = prompt("what would you like to do?");
  }
  // If the user typed 'quit' console.log:
  console.log("You have quit the app");
}, 100);
