// Re-exporting the context, provider, and custom hook from TodoContext.js
export { TodoContext, TodoProvider, useTodo } from "./TodoContext";

// Reason: This simplifies imports in other parts of the application.
// Instead of importing each item individually from TodoContext.js,
// we can import them all from this file like so:
// import { TodoContext, TodoProvider, useTodo } from './contexts';
