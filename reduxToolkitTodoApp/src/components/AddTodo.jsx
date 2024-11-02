import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const AddTodo = () => {
  // Local state to manage the input value of the todo item
  // Reason: This state allows us to capture and store the user's input in the input field.
  const [input, setInput] = useState("");

  // useDispatch hook to dispatch actions to the Redux store
  // Reason: useDispatch allows us to call Redux actions, like adding a new todo, from within this component.
  const dispatch = useDispatch();

  // Handler function to dispatch the addTodo action
  // Reason: This function is triggered when the form is submitted.
  // It prevents the default form submission behavior, dispatches addTodo with the input value,
  // and then clears the input field.
  const addTodoHandler = (e) => {
    e.preventDefault(); // Prevents page reload on form submission
    if (input.trim()) {
      // Ensures that empty input is not added as a todo
      dispatch(addTodo(input)); // Dispatches the addTodo action with the input as payload
      setInput(""); // Resets the input field after adding the todo
    }
  };

  return (
    <form
      onSubmit={addTodoHandler}
      className="space-x-3 mt-12 flex justify-center"
    >
      {/* Input field to capture the todo text */}
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-spacing-5 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input} // Binds input field to the local input state
        onChange={(e) => setInput(e.target.value)} // Updates input state on change
      />
      {/* Button to submit the form and add a new todo */}
      <button
        type="submit"
        className="text-white bg-indigo-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-700 rounded text-lg"
      >
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
