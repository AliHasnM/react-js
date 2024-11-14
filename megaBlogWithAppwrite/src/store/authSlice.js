// Import createSlice to easily create a Redux slice with actions and reducers
import { createSlice } from "@reduxjs/toolkit";

// Define the initial state for authentication
const initialState = {
  status: false, // Indicates if the user is logged in
  userData: null, // Holds user data when logged in
};

// Create a slice for authentication with initial state, reducers, and actions
const authSlice = createSlice({
  name: "auth", // Name of the slice
  initialState, // Initial state defined above
  reducers: {
    // Reducer to log the user in, setting status to true and storing user data
    login: (state, action) => {
      state.status = true;
      state.userData = action.payload;
    },
    // Reducer to log the user out, resetting status and user data
    logout: (state) => {
      state.status = false;
      state.userData = null;
    },
  },
});

// Export the login and logout actions for use in components
export const { login, logout } = authSlice.actions;

// Export the reducer to add to the Redux store
export default authSlice.reducer;

// Reason and Why Use
// Reason: createSlice simplifies creating Redux logic by auto-generating actions and reducers in one place.
// Why use: It makes code cleaner, reduces boilerplate, and provides a clear structure for state management.
