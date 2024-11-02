import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";

// Configure and create the Redux store with `todoReducer`
// Reason: The `configureStore` function simplifies the setup of the Redux store,
// automatically adding middleware and enabling Redux DevTools in development mode.
export const store = configureStore({
  reducer: todoReducer, // Assigns the todoReducer to manage the store's state
});
