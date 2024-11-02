import { createSlice, nanoid } from "@reduxjs/toolkit";

// Initial state with a sample todo item
// Reason: The `initialState` provides a starting point for the todos list with one sample item.
const initialState = {
  todos: [{ id: 1, text: "Hello World" }],
};

// Create a slice for todos, defining reducers for adding, removing, and updating todos
// Reason: `createSlice` simplifies the Redux setup by automatically generating action creators and handling state immutability internally.
export const todoSlice = createSlice({
  name: "todo", // The slice name, used for generating action types.
  initialState,
  reducers: {
    // Reducer for adding a new todo
    // Reason: `addTodo` creates a new todo item with a unique id and adds it to the list.
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(), // Generate a unique id for the new todo item
        text: action.payload, // The text of the todo is passed as the payload
      };
      state.todos.push(todo); // Add the new todo to the state array
    },

    // Reducer for removing a todo by id
    // Reason: `removeTodo` filters out the todo with the given id, effectively removing it from the list.
    removeTodo: (state, action) => {
      // Keep only todos that do not match the id provided in the action payload
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    // Reducer for updating the text of an existing todo by id
    // Reason: `updateTodo` allows modification of a todo's text based on its unique id.
    updateTodo: (state, action) => {
      const { id, text } = action.payload; // Destructure id and new text from the payload
      // Map over todos and update the matching todo with new text
      state.todos = state.todos.map(
        (todo) => (todo.id === id ? { ...todo, text } : todo) // If ids match, update the text; otherwise, leave the todo unchanged
      );
    },
  },
});

// Export actions for use in components
// Reason: These action creators allow components to dispatch actions directly.
export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

// Export the reducer to be used in the Redux store
// Reason: The reducer manages the `todos` state and will be combined with other reducers in the store configuration.
export default todoSlice.reducer;
