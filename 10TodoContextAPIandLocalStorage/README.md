# Todo App using Context API and Local Storage

This project is a **Todo App** built using **React**, **Context API**, and **Local Storage**. It demonstrates how to manage global state using Context API and how to persist data using Local Storage. The app allows users to add, update, delete, and mark todos as completed or incomplete.

## Key Concepts

### 1. Context API

The **Context API** is used to share the global state (todos) and functions for managing the todos (add, update, delete, toggle completion) across components without passing props down manually. This enables easy state management across the app.

### 2. Local Storage

**Local Storage** is used to save and load todos even when the user reloads the page. The todos are stored in the browser's local storage, so they persist across sessions.

---

## Code Overview

### 1. App Component (`App.jsx`)

The `App` component is the main component that initializes the state and provides the todos and related functions to the entire app using **Context API**. It also handles saving and loading the todos from **Local Storage**.

```js
import { useEffect, useState } from "react";
import { TodoProvider } from "./contexts";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

const App = () => {
  const [todos, setTodos] = useState([]); // State to store todos

  // Function to add a new todo
  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]); // Adding the new todo to the list
  };

  // Function to update an existing todo
  const updateTodo = (id, todo) => {
    setTodos(
      (prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)) // Updating the todo that matches the given id
    );
  };

  // Function to delete a todo by id
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id)); // Removing the todo with the matching id
  };

  // Function to toggle completion status of a todo
  const toggleCompleteTodo = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed } // Toggle the completed status
          : prevTodo
      )
    );
  };

  // Fetching todos from Local Storage when the component mounts
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos); // Load todos from local storage if available
    }
  }, []);

  // Storing todos in Local Storage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos)); // Save todos to local storage
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleCompleteTodo }} // Providing todos and functions globally
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm /> {/* Form to add new todos */}
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} /> {/* Displaying each todo item */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
};

export default App;
```

### 2. Context Setup (`TodoContext.js`)

The **Context API** setup allows us to create a global state that can be shared across the app. This file defines the context and provides the functions to manage todos.

```js
import { useContext, createContext } from "react";

// Creating context for managing todos
export const TodoContext = createContext({
  todos: [], // Default state: empty todos
  addTodo: (todo) => {}, // Placeholder function for adding a todo
  updateTodo: (id, todo) => {}, // Placeholder function for updating a todo
  deleteTodo: (id) => {}, // Placeholder function for deleting a todo
  toggleCompleteTodo: (id) => {}, // Placeholder function for toggling completion
});

// Custom hook to use the TodoContext
export const useTodo = () => {
  return useContext(TodoContext); // Access the context easily with this hook
};

// Provider to wrap around the app to give access to the context
export const TodoProvider = TodoContext.Provider;
```

### 3. Todo Form Component (`TodoForm.jsx`)

The `TodoForm` component allows users to add new todos. It uses the `addTodo` function from the context to add a new todo.

```js
import { useState } from "react";
import { useTodo } from "../contexts";

const TodoForm = () => {
  const [todo, setTodo] = useState(""); // Local state to manage the input field value
  const { addTodo } = useTodo(); // Accessing addTodo function from context

  const add = (e) => {
    e.preventDefault();
    if (!todo) return; // If input is empty, do nothing
    addTodo({ todo, completed: false }); // Add new todo with default completed status
    setTodo(""); // Clear the input field after adding
  };

  return (
    <form onSubmit={add} className="flex">
      <input
        value={todo} // Controlled input
        onChange={(e) => setTodo(e.target.value)} // Update state on change
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
      />
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
```

### 4. Todo Item Component (`TodoItem.jsx`)

This component displays each todo item and allows users to edit, delete, or mark it as completed.

```js
import { useState } from "react";
import { useTodo } from "../contexts";

const TodoItem = ({ todo }) => {
  const [isTodoEditable, setIsTodoEditable] = useState(false); // State to toggle edit mode
  const [todoMsg, setTodoMsg] = useState(todo.todo); // State for the todo message
  const { updateTodo, deleteTodo, toggleCompleteTodo } = useTodo(); // Access context functions

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todoMsg }); // Update todo message
    setIsTodoEditable(false); // Exit edit mode
  };

  const toggleComplete = () => {
    toggleCompleteTodo(todo.id); // Toggle the completed status of the todo
  };

  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 ${
        todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={toggleComplete}
        className="cursor-pointer"
      />
      <input
        type="text"
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)} // Update the message when edited
        readOnly={!isTodoEditable} // Only editable if in edit mode
        className={`border w-full ${todo.completed ? "line-through" : ""}`}
      />
      <button
        onClick={() => (isTodoEditable ? editTodo() : setIsTodoEditable(true))}
        disabled={todo.completed}
      >
        {isTodoEditable ? "Save" : "Edit"}
      </button>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
```

## How Context API and Local Storage Work in This Project

1. **Context API**:
   - The `TodoContext` is created to store todos and functions to manage them (add, update, delete, toggle).
   - `useTodo` is a custom hook that simplifies accessing the context in any component.
   - `TodoProvider` wraps the app, making the todos and their management functions available globally.
2. **Local Storage**:
   - The app loads todos from Local Storage when it mounts (`useEffect` with an empty dependency array).
   - Every time the todos state changes, they are saved to Local Storage (`useEffect` watching `todos` state).
   - This ensures that todos persist across browser sessions.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/AliHasnM/react-js/tree/main/10TodoContextAPIandLocalStorage
   ```
