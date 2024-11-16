import authService from "../appwrite/auth_service"; // Service for authentication
import { Link, useNavigate } from "react-router-dom"; // Link for navigation and useNavigate for programmatic redirects
import { login } from "../store/authSlice"; // Redux action to set login state
import { Button, Input, Logo } from "./index"; // Reusable components
import { useDispatch } from "react-redux"; // Hook to dispatch Redux actions
import { useForm } from "react-hook-form"; // Hook to manage forms and validation
import { useState } from "react"; // useState for managing errors

const Signup = () => {
  const navigate = useNavigate(); // For programmatic navigation
  const dispatch = useDispatch(); // To dispatch actions to the Redux store
  const [error, setError] = useState(""); // State for storing error messages
  const { register, handleSubmit } = useForm(); // Destructure the form utilities

  // Handles the signup process
  const create = async (data) => {
    setError(""); // Clear any previous error
    try {
      const userData = await authService.createAccount(data); // Call to create a new account
      if (userData) {
        const currentUser = await authService.getCurrentUser(); // Fetch the newly created user
        if (currentUser) dispatch(login(currentUser)); // Dispatch Redux login action
        navigate("/"); // Redirect to the home page
      }
    } catch (error) {
      setError(error.message); // Set error message if signup fails
    }
  };

  return (
    <div className="flex items-center justify-center">
      {/* Container for the signup form */}
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
          Sign up to create account
        </h2>
        <p className="mt-2 text-center text-base text-black/60">
          Already have an account?&nbsp;
          <Link
            to="/login" // Navigate to the login page
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign In
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}{" "}
        {/* Display error */}
        {/* Signup form */}
        <form onSubmit={handleSubmit(create)}>
          <div className="space-y-5">
            {/* Input for Full Name */}
            <Input
              label="Full Name:"
              placeholder="Enter your full name"
              {...register("name", {
                required: true, // Make this field required
              })}
            />
            {/* Input for Email */}
            <Input
              label="Email:"
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                required: true, // Make this field required
                validate: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address", // Validate email format
                },
              })}
            />
            {/* Input for Password */}
            <Input
              label="Password:"
              placeholder="Enter your password"
              type="password"
              {...register("password", {
                required: true, // Make this field required
              })}
            />
            {/* Submit Button */}
            <Button type="submit" className="w-full">
              Create Account
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;

/* 
### Key Features Explained
1. **useForm**: Handles the form registration and validation.
2. **authService.createAccount**: Makes the API call to create a new account.
3. **Redux Integration**: Dispatches the `login` action to set the authenticated user's data globally.
4. **Error Handling**: Displays any errors encountered during the signup process.
5. **Navigation**: Redirects to the home page after successful signup using `useNavigate`.
6. **Reusability**: Utilizes custom reusable components like `Input`, `Button`, and `Logo`.
7. **Validation**: Ensures fields like email and password meet specific criteria.
*/
