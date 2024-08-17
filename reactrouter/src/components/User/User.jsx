import { useParams } from "react-router-dom"; // Import useParams to access route parameters

const User = () => {
  const { userid } = useParams(); // Extract the userid parameter from the URL
  return (
    <div className="text-center bg-gray-600 text-white text-3xl p-4">
      User: {userid} {/* Display the userid dynamically */}
    </div>
  );
};

export default User; // Export the User component as the default export

/*
Notes:
- useParams: Hook to access URL parameters, allowing dynamic content based on the route.
- User component: Displays the user ID passed through the route in a styled div.
*/
