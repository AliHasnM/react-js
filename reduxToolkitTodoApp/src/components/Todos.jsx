import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";
import { useState } from "react";

const Todos = () => {
  // Retrieves the list of todos from the Redux store
  // Reason: useSelector hooks into the Redux store and allows this component to access the todos array.
  const todos = useSelector((state) => state.todos);

  // useDispatch hook to dispatch actions to the Redux store
  // Reason: useDispatch allows us to trigger Redux actions like removeTodo and updateTodo directly from this component.
  const dispatch = useDispatch();

  // State to track which todo is currently being edited
  // Reason: This helps identify if a todo is in edit mode by storing its ID.
  const [isEditing, setIsEditing] = useState(null);

  // Local state to track the new text of a todo during editing
  // Reason: This stores the updated text value while the user is editing a todo item.
  const [editText, setEditText] = useState("");

  // Initiates edit mode for a specific todo
  // Reason: Sets the `isEditing` state to the ID of the todo to be edited and initializes `editText` with its text.
  const handleEditClick = (todo) => {
    setIsEditing(todo.id);
    setEditText(todo.text);
  };

  // Dispatches the update action with the new text for the specified todo
  // Reason: Calls the `updateTodo` action with the edited text and resets `isEditing` and `editText`.
  const handleUpdateClick = (id) => {
    dispatch(updateTodo({ id, text: editText }));
    setIsEditing(null);
    setEditText("");
  };

  return (
    <>
      <div className="text-white text-lg text-center pt-4">Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            {/* Conditionally renders input or text based on edit state */}
            {isEditing === todo.id ? (
              <input
                type="text"
                value={editText} // Binds the input to `editText` state for controlled input
                onChange={(e) => setEditText(e.target.value)} // Updates `editText` on change
                className="bg-gray-700 text-white py-1 px-3 rounded"
              />
            ) : (
              <div className="text-white">{todo.text}</div>
            )}
            <div className="flex space-x-2">
              {/* Conditionally renders Update or Edit button based on edit state */}
              {isEditing === todo.id ? (
                <button
                  onClick={() => handleUpdateClick(todo.id)} // Triggers the update action for this todo
                  className="text-white bg-green-500 border-0 py-1 px-4 focus:outline-none hover:bg-green-600 rounded text-md"
                >
                  Update
                </button>
              ) : (
                <button
                  onClick={() => handleEditClick(todo)} // Enables edit mode for this todo
                  className="text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded text-md"
                >
                  Edit
                </button>
              )}
              <button
                onClick={() => dispatch(removeTodo(todo.id))} // Dispatches action to remove the todo
                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todos;
