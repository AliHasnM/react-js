import { StrictMode } from "react"; // Import StrictMode to highlight potential problems in an application
import { createRoot } from "react-dom/client"; // Import createRoot to create a root to render the React application
import "./index.css"; // Import the main CSS file for styling
import {
  createBrowserRouter, // Import createBrowserRouter to handle routing in the browser
  createRoutesFromElements, // Import createRoutesFromElements to create routes from JSX elements
  Route, // Import Route to define individual routes
  RouterProvider, // Import RouterProvider to provide the router context to the application
} from "react-router-dom";
import Layout from "./Layout"; // Import Layout component, likely the main layout of the app
import Home from "./components/Home/Home"; // Import Home component for the homepage
import About from "./components/About/About"; // Import About component for the about page
import Contact from "./components/Contact/Contact"; // Import Contact component for the contact page
import User from "./components/User/User"; // Import User component for dynamic user routes
import GitHub, { githubInfoLoader } from "./components/GitHub/GitHub"; // Import GitHub component and its data loader for GitHub info

// Old way to define routes using an array of objects
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      {" "}
      {/* Define the root path with Layout as the main element */}
      <Route path="" element={<Home />} /> {/* Define the Home route */}
      <Route path="about" element={<About />} /> {/* Define the About route */}
      <Route path="contact" element={<Contact />} />{" "}
      {/* Define the Contact route */}
      <Route path="user/:userid" element={<User />} />{" "}
      {/* Define a dynamic route for User with a user ID parameter */}
      <Route
        loader={githubInfoLoader}
        path="github"
        element={<GitHub />}
      />{" "}
      {/* Define the GitHub route with a data loader */}
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />{" "}
    {/* Provide the router to the app within StrictMode */}
  </StrictMode>
);

/*
Notes:
- React.StrictMode: Used to highlight potential issues in the app during development.
- createBrowserRouter & createRoutesFromElements: Simplifies route definitions in JSX.
- Loader functions: githubInfoLoader preloads data before rendering the GitHub component.
*/
