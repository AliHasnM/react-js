// Import configureStore to set up Redux store with easy configuration
import { configureStore } from "@reduxjs/toolkit";

// Create the Redux store
const store = configureStore({
  reducer: {}, // Empty for now. Add reducers here to manage different parts of app state
});

// Export the store to use across the app
export default store;

// Reason and Why Use
// Reason: configureStore sets up the store with default settings, so you can just add reducers here to manage any part of the app’s state.
// Why use: Centralizes app state, making it easy to manage, debug, and scale the app as it grows.
