import { Link, useNavigate } from "react-router-dom"; // Link for navigation and useNavigate for programmatic redirection
import { login as authLogin } from "../store/authSlice"; // Redux action for user login
import { Button, Input, Logo } from "./index"; // Reusable components for the UI
import { useDispatch } from "react-redux"; // Hook to dispatch Redux actions
import authService from "../appwrite/auth_service"; // Service to handle authentication with Appwrite
import useForm from "react-hook-form"; // React Hook Form for managing forms and validation
import { useState } from "react"; // State management for error handling

const Login = () => {
  const navigate = useNavigate(); // Navigate programmatically after login
  const dispatch = useDispatch(); // Dispatch actions to Redux store
  const { register, handleSubmit } = useForm(); // Register fields and handle form submission
  const [error, setError] = useState(""); // State for managing error messages

  // Handles login submission
  const login = async (data) => {
    console.log("Login Data:", data); // Log form data for debugging

    setError(""); // Clear any previous errors
    try {
      const session = await authService.login(data); // Authenticate user
      if (session) {
        const userData = await authService.getCurrentUser(); // Fetch user details
        if (userData) dispatch(authLogin(userData)); // Update Redux store with user data
        navigate("/"); // Redirect to the home page
      }
    } catch (error) {
      setError(error.message); // Display error message if login fails
    }
  };

  return (
    <div className="flex items-center justify-center w-full">
      {/* Container for login form */}
      <div
        className={`mx-auto max-w-lg w-full bg-gray-100 rounded-xl p-10 border border-black/10`}
      >
        {/* Logo */}
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" /> {/* Custom logo component */}
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">
          Sign in to your Account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Don&apos;t have an account?&nbsp;
          <Link
            to="/signup" // Navigate to the signup page
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign Up
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}{" "}
        {/* Display error message */}
        {/* Login form */}
        <form onSubmit={handleSubmit(login)} className="mt-8">
          <div className="space-y-5">
            <Input
              label="Email:" // Input for email
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                required: true, // Required field
                validate: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address", // Validate email pattern
                },
              })}
            />
            <Input
              label="Password:" // Input for password
              placeholder="Enter your password"
              type="password"
              {...register("password", {
                required: true, // Required field
              })}
            />
            <Button type="submit" className="w-full">
              {" "}
              {/* Submit button */}
              Sign In
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

/* 
Why use these features:
1. useNavigate: Enables programmatic navigation after successful login.
2. Redux (useDispatch, authLogin): Manages global state for user authentication.
3. React Hook Form: Simplifies form handling and validation.
4. authService: Centralized service for authentication using Appwrite, ensuring cleaner code.
5. Tailwind CSS: Provides responsive and consistent styling.
6. Error Handling: Displays user-friendly error messages.
7. Reusable Components (Input, Button, Logo): Streamlines the design and improves code maintainability.
*/
