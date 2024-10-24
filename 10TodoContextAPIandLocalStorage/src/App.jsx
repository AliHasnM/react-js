import { useEffect, useState } from "react";
import { TodoProvider } from "./contexts";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

const App = () => {
  const [todos, setTodos] = useState([]); // Local state to store todos

  // Function to add a new todo
  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]); // Adding todo to the top of the list
  };

  // Function to update an existing todo
  const updateTodo = (id, todo) => {
    setTodos(
      (prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)) // Update the matching todo by id
    );
  };

  // Function to delete a todo by id
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id)); // Filter out the todo with the matching id
  };

  // Function to toggle completion status of a todo
  const toggleCompleteTodo = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed } // Toggle the 'completed' field for the todo
          : prevTodo
      )
    );
  };

  // Fetching todos from Local Storage when the component mounts
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos); // Set todos if there are any in Local Storage
    }
  }, []);

  // Storing todos in Local Storage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos)); // Persist todos in Local Storage whenever state changes
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleCompleteTodo }} // Provide todos and functions to manage them globally
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/* Loop through todos and display each one */}
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
};

export default App;

/*
Reasons:
1. `useState([])`: Initializes the state to manage the todo list.
2. `addTodo`, `updateTodo`, `deleteTodo`, `toggleCompleteTodo`: Functions to handle various operations on todos (add, update, delete, toggle). These make the state management cleaner and more modular.
3. `useEffect(() => {...}, [])`: This effect runs once when the component mounts and fetches the todos from Local Storage to set the initial state.
4. `useEffect(() => {...}, [todos])`: This effect stores the todos in Local Storage every time the `todos` state changes, ensuring persistence across reloads.
5. `TodoProvider`: Provides the todo state and functions to child components, allowing for global state management without prop drilling.
*/
