import { useDispatch } from "react-redux"; // Hook to dispatch actions to the Redux store.
import authService from "../../appwrite/auth_service"; // Service handling authentication operations.
import { logout } from "../../store/authSlice"; // Redux action to update auth state on logout.

const LogoutBtn = () => {
  const dispatch = useDispatch(); // Initialize the dispatch function from Redux.

  const logoutHandler = () => {
    authService
      .logout() // Call logout service to handle API-level logout.
      .then(() => {
        dispatch(logout); // Dispatch the logout action to update the Redux store.
      })
      .catch((error) => {
        console.log("Error in logoutHandler:", error); // Log errors for debugging.
      });
  };

  return (
    <button
      onClick={logoutHandler} // Attach the logoutHandler function to button click.
      className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
    >
      Logout {/* Button text */}
    </button>
  );
};

export default LogoutBtn;

/*
Reason and Why Use:
1. **useDispatch**: Dispatches actions to Redux, updating global state effectively.
2. **authService.logout**: Centralized logic for logging out, making the component cleaner.
3. **Error Handling**: Catches and logs errors, helpful for debugging API or service issues.
4. **Dynamic State Update**: Updates the Redux store after logout, ensuring consistent app behavior.
5. **Reusable Button**: Component can be styled or extended without affecting core functionality.
*/
