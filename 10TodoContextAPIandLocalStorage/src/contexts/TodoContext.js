/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { createContext } from "react";

// Creating a context for managing todos globally
export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "Todo Message", // A sample todo item to initialize the state
      completed: false, // Default completion status
    },
  ],
  // Placeholder functions for adding, updating, deleting, and toggling todos
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleCompleteTodo: (id) => {},
});

// Custom hook to use the TodoContext in any component
export const useTodo = () => {
  return useContext(TodoContext);
  // Reason: This hook simplifies accessing the context, so instead of using
  // useContext(TodoContext) in every component, we can just call useTodo().
};

// Exporting TodoProvider, which will be used to wrap the entire app
export const TodoProvider = TodoContext.Provider;

// Key Reasons:
// Context Creation: TodoContext is created using createContext() to provide a global state for managing todos across the app.
// Default State and Placeholder Functions: The context includes a default state (a sample todo) and placeholder functions (like addTodo, updateTodo, etc.) for managing todos. This ensures that any component using the context gets the expected structure.
// useTodo Hook: This custom hook simplifies access to TodoContext. Instead of using useContext(TodoContext) directly in every component, the useTodo() function does it internally and makes the code cleaner and reusable.
// Provider: TodoProvider will wrap the components that need access to the todo state and actions, passing down the actual state and functions to manage todos.
// This setup allows the app to share state globally using React’s Context API, making the todo data accessible to any component without prop drilling.
