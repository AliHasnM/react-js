# Redux Toolkit Todo App

This is a simple Todo application built using **React** and **Redux Toolkit**. It allows users to add, update, and delete tasks, providing an easy way to manage and organize to-do items. This app demonstrates a basic usage of Redux Toolkit for state management, showing how to set up a Redux store, create slices, dispatch actions, and manage global state.

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Understanding Redux Toolkit](#understanding-redux-toolkit)
- [Redux Setup in This Project](#redux-setup-in-this-project)
- [Components Overview](#components-overview)
- [How to Use Redux Toolkit in Your Project](#how-to-use-redux-toolkit-in-your-project)
- [Features](#features)
- [Future Improvements](#future-improvements)

---

## Getting Started

### Prerequisites

To run this project, you should have:

- **Node.js** installed on your computer
- Basic knowledge of **React** and **Redux**

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/redux-toolkit-todo-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd redux-toolkit-todo-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the application:
   ```bash
   npm start
   ```
5. Open your browser and navigate to `http://localhost:3000`.

---

## Project Structure

```plaintext
redux-toolkit-todo-app/
│
├── src/
│   ├── app/
│   │   └── store.js         # Configures the Redux store
│   ├── components/
│   │   ├── AddTodo.js       # Component to add a new todo
│   │   └── Todos.js         # Component to display and manage todos
│   ├── features/
│   │   └── todo/
│   │       └── todoSlice.js # Contains the todos slice with reducers and actions
│   └── App.js               # Main application component
│
├── README.md
├── package.json
└── ... other files
```

---

## Understanding Redux Toolkit

Redux Toolkit is the official, recommended way to write Redux logic. It provides tools and abstractions to simplify the setup and usage of Redux, making it easier to implement in any React app. The main components we use in this project include:

- **createSlice**: A function that automatically generates action creators and action types, making it easier to manage the Redux store.
- **configureStore**: A simplified way to set up the Redux store with sensible defaults.
- **nanoid**: A function that generates unique IDs for each todo item.

### Why Redux Toolkit?

Redux Toolkit reduces the amount of boilerplate code by:

- Automatically generating actions and reducers.
- Providing utilities like `createAsyncThunk` for handling async actions.
- Simplifying the setup of the Redux store.

---

## Redux Setup in This Project

### Step 1: Create the Redux Store (`app/store.js`)

The `store.js` file sets up the Redux store with `configureStore`:

```javascript
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";

export const store = configureStore({
  reducer: { todos: todoReducer },
});
```

This configures the store with a single `todos` slice, which handles all state related to the todo list.

### Step 2: Create a Slice for Todos (`features/todo/todoSlice.js`)

The `todoSlice.js` file defines the state structure and actions for managing todos. Key parts of this slice:

- **State**: Holds an array of todo items.
- **Reducers**: Handle actions like adding, removing, and updating todos.

```javascript
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Hello World" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({ id: nanoid(), text: action.payload });
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const existingTodo = state.todos.find((todo) => todo.id === id);
      if (existingTodo) existingTodo.text = text;
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
```

### Step 3: Connect the Store to the App (`App.js`)

In `App.js`, we wrap our app with the `Provider` component, passing in the store so that all components can access the Redux state.

---

## Components Overview

### `AddTodo` Component

A form that lets users add new todos to the list. It dispatches the `addTodo` action with the text entered by the user.

### `Todos` Component

Renders the list of todos and allows editing and deleting individual items:

- **Edit**: Updates the text of an existing todo.
- **Delete**: Removes the selected todo from the list.

---

## How to Use Redux Toolkit in Your Project

1. **Install Redux Toolkit**:

   ```bash
   npm install @reduxjs/toolkit
   ```

2. **Set Up Store**:

   - Create a `store.js` file and configure the store using `configureStore`.
   - Import your slices and add them as reducers in the store configuration.

3. **Create Slices**:

   - Use `createSlice` to define initial state, reducers, and actions for each feature.
   - Export the actions and the reducer from each slice.

4. **Wrap the App with Provider**:

   - Import `Provider` from `react-redux` and wrap your main component with it, passing in the store.

5. **Use Redux State and Dispatch**:
   - Access state using `useSelector`.
   - Dispatch actions using `useDispatch`.

---

## Features

- **Add Todos**: Add new tasks to the list.
- **Update Todos**: Edit existing tasks in real-time.
- **Delete Todos**: Remove unwanted tasks from the list.

---

## Future Improvements

- **Persistence**: Save todos in local storage so that they persist across reloads.
- **Search Functionality**: Add a search bar to filter todos.
- **Mark as Completed**: Add the option to mark todos as completed or pending.
