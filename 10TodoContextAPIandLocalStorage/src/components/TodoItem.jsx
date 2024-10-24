/* eslint-disable react/prop-types */
// Reason: Disabling the prop-types warning because we are not explicitly using prop-types
// for type checking in this component. In real-world applications, it is recommended
// to use PropTypes or TypeScript to validate prop types.

import { useState } from "react";
import { useTodo } from "../contexts"; // Importing the custom context hook for global todo state

const TodoItem = ({ todo }) => {
  // State to control if the todo is editable
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  // State to handle the current message of the todo
  const [todoMsg, setTodoMsg] = useState(todo.todo);

  // Extracting update, delete, and toggle functions from the context
  const { updateTodo, deleteTodo, toggleCompleteTodo } = useTodo();

  // Function to edit and update the todo
  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg }); // Updating todo message
    setIsTodoEditable(false); // Disable edit mode after saving changes
  };

  // Function to toggle the completion status of the todo
  const toggleComplete = () => {
    toggleCompleteTodo(todo.id); // Marks todo as complete or incomplete
  };

  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]" // Conditional styling for completed todos
      }`}
    >
      {/* Checkbox to mark todo as completed or not */}
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todo.completed}
        onChange={toggleComplete}
      />

      {/* Input field for the todo message */}
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isTodoEditable ? "border-black/10 px-2" : "border-transparent" // Editable input if in edit mode
        } ${todo.completed ? "line-through" : ""}`} // Line-through for completed todos
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)} // Update state with input value
        readOnly={!isTodoEditable} // Read-only when not editable
      />

      {/* Edit, Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todo.completed) return; // Disable editing if the todo is completed

          if (isTodoEditable) {
            editTodo(); // Save changes if in edit mode
          } else setIsTodoEditable((prev) => !prev); // Toggle edit mode
        }}
        disabled={todo.completed} // Disable button if todo is completed
      >
        {isTodoEditable ? "📁" : "✏️"} {/* Icon changes between save/edit */}
      </button>

      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => deleteTodo(todo.id)} // Delete the todo when clicked
      >
        ❌ {/* Delete icon */}
      </button>
    </div>
  );
};

export default TodoItem;

// Key Reasons:
// /* eslint-disable react/prop-types */: This disables the ESLint warning about missing prop type validation, as we're not using prop-types in this component.
// State management: The useState hooks handle whether a todo is editable and track the todo message.
// Context usage: The useTodo() hook allows access to globally managed functions like updateTodo, deleteTodo, and toggleCompleteTodo.
// Conditional logic: The component adjusts its UI (edit, save, or delete buttons) based on the state of the todo (editable or completed).
