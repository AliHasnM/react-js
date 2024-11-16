/* eslint-disable react/prop-types */
import appwriteService from "../appwrite/config_service"; // Service to interact with Appwrite for file previews
import { Link } from "react-router-dom"; // Provides routing capability in React

// PostCard Component: Displays a clickable card for a post
const PostCard = ({ $id, title, featuredImage }) => {
  return (
    <Link to={`/post/${$id}`}>
      {" "}
      {/* Link to navigate to the detailed post page */}
      <div className="w-full bg-gray-100 rounded-xl p-4">
        {" "}
        {/* Card container with styling */}
        <div className="w-full justify-center mb-4">
          {/* Display post's featured image */}
          <img
            src={appwriteService.getFilePreview(featuredImage)} // Fetches a preview of the featured image
            alt={title} // Alt text for accessibility
            className="rounded-xl" // Rounded styling for the image
          />
        </div>
        {/* Display post's title */}
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </Link>
  );
};

export default PostCard;

/* 
Why use these features:
1. appwriteService.getFilePreview: Fetches a preview URL for the image stored in Appwrite, optimizing image handling.
2. Link: Enables navigation within the app without reloading, improving user experience.
3. Props: Dynamically renders post-specific details, making the component reusable.
4. Styled Component: Uses Tailwind CSS classes for a clean and responsive design.
*/
