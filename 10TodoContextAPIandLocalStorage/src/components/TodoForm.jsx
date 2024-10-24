import { useState } from "react"; // Importing useState to manage local state
import { useTodo } from "../contexts"; // Importing useTodo hook to access global todo functions

const TodoForm = () => {
  // State to handle the value of the input field (new todo)
  const [todo, setTodo] = useState("");

  // Extracting addTodo function from the global context to add new todos
  const { addTodo } = useTodo();

  // Function to handle form submission
  const add = (e) => {
    e.preventDefault(); // Prevent page refresh on form submission
    if (!todo) return; // If the input is empty, do nothing
    addTodo({ todo, completed: false }); // Add the new todo with 'completed' set to false
    setTodo(""); // Clear the input field after adding the todo
  };

  return (
    <form onSubmit={add} className="flex">
      {/* Input field to write the new todo */}
      <input
        value={todo} // Controlled input, bound to the local state 'todo'
        onChange={(e) => setTodo(e.target.value)} // Update state on input change
        type="text"
        placeholder="Write Todo..." // Placeholder text when the input is empty
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
      />
      {/* Submit button to add the todo */}
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;

// Key Reasons:
// State Management: The useState hook manages the todo state, which controls the input value for adding a new todo.
// Global Todo Management: The useTodo() hook provides the addTodo function from the context, which allows the form to add a new todo globally.
// Form Handling: The add function handles the form submission and ensures the input field is not empty before adding a todo. After submission, it resets the input field.
// Controlled Input: The input field is controlled by the todo state, meaning its value is directly linked to the component’s state. This makes it easier to update the UI when the state changes.
