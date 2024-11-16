/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"; // Importing hooks for state and side effects
import { useSelector } from "react-redux"; // To get authentication status from the Redux store
import { useNavigate } from "react-router-dom"; // For navigation between routes

const Protected = ({ children, authentication = true }) => {
  const navigate = useNavigate(); // Hook to programmatically navigate routes
  const [loader, setLoader] = useState(true); // State to manage the loading spinner
  const authStatus = useSelector((state) => state.authStatus); // Fetch the authentication status from Redux store

  useEffect(() => {
    // Side effect to check authentication status and redirect appropriately
    if (authentication && authStatus !== authentication) {
      navigate("/login"); // Redirects to login page if not authenticated
    } else if (!authentication && authStatus !== authentication) {
      navigate("/"); // Redirects to home page if authenticated while accessing non-auth routes
    }
    setLoader(false); // Turn off the loader after checking authentication
  }, [authStatus, navigate, authentication]); // Dependencies for the useEffect

  return loader ? (
    <h1>Loading...</h1> // Show loader while checking authentication
  ) : (
    <>{children}</> // Render the protected children if authentication check passes
  );
};

export default Protected;

/* 
**Reason for use and explanation:**
1. **useNavigate:** Enables programmatic navigation based on authentication status, ensuring a seamless user experience.
2. **useSelector:** Fetches `authStatus` from the Redux store, which is a centralized state management tool.
3. **useState:** Manages the loading state while the component determines whether to render children or redirect.
4. **useEffect:** Executes authentication logic and handles redirection whenever dependencies (authStatus or route requirements) change.
5. **loader:** Provides a user-friendly indication that authentication is being verified before rendering content.
6. **children:** Ensures that only authorized users can access the wrapped content.

**Purpose:** The `Protected` component safeguards routes by enforcing authentication and redirecting unauthorized users, improving security and usability.
*/
