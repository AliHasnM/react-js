import { Container, Logo, LogoutBtn } from "../index"; // Import reusable components like Container, Logo, and LogoutBtn.
import { Link, useNavigate } from "react-router-dom"; // Import React Router hooks for navigation.
import { useSelector } from "react-redux"; // Use Redux's `useSelector` to access the app's state.

const Header = () => {
  const authStatus = useSelector((state) => state.authStatus); // Access authentication status from Redux store.
  const navigate = useNavigate(); // Hook to programmatically navigate between routes.

  // Define navigation items with conditional display based on authentication status.
  const navItems = [
    { name: "Home", slug: "/", active: true }, // Always active.
    { name: "Login", slug: "/login", active: !authStatus }, // Active if not authenticated.
    { name: "Signup", slug: "/signup", active: !authStatus }, // Active if not authenticated.
    { name: "All Posts", slug: "/all-posts", active: authStatus }, // Active if authenticated.
    { name: "Add Post", slug: "/add-post", active: authStatus }, // Active if authenticated.
  ];

  return (
    <header className="py-3 shadow bg-gray-500">
      <Container>
        {" "}
        {/* Wraps the content in a container for consistent layout */}
        <nav className="flex">
          {" "}
          {/* Flexbox for navigation items */}
          <div className="mr-4">
            <Link to="/">
              {" "}
              {/* Link to the home page */}
              <Logo width="70px" /> {/* Logo with custom width */}
            </Link>
          </div>
          <ul className="flex ml-auto">
            {" "}
            {/* Flex container for navigation links */}
            {navItems.map((item) =>
              item.active ? ( // Render only active items based on authentication status
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)} // Navigate to the respective route
                    className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
                  >
                    {item.name} {/* Display the name of the item */}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && ( // Show Logout button if authenticated
              <li>
                <LogoutBtn /> {/* Logout button component */}
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;

/*
Reason and Why Use:
1. **Conditional Rendering**: Navigation items are displayed based on `authStatus` to manage user experience (e.g., login/signup for unauthenticated users, post-related items for authenticated users).
2. **useSelector**: Accesses global state (authentication status) for dynamic UI updates without prop drilling.
3. **useNavigate**: Provides programmatic navigation, useful for handling user interactions (button click to navigate).
4. **Reusable Components**: By using `Logo`, `Container`, and `LogoutBtn`, the code is modular and easily extendable.
5. **Flexbox Layout**: Efficient layout using flexbox for navigation items, ensuring responsiveness and alignment.
*/
