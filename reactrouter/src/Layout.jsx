import { Outlet } from "react-router-dom"; // Import Outlet to render child routes within the layout
import Header from "./components/Header/Header"; // Import Header component to display at the top of the layout
import Footer from "./components/Footer/Footer"; // Import Footer component to display at the bottom of the layout

const Layout = () => {
  return (
    <>
      <Header /> {/* Render the Header component */}
      <Outlet /> {/* Render the matched child route's component */}
      <Footer /> {/* Render the Footer component */}
    </>
  );
};

export default Layout; // Export the Layout component as the default export

/*
Notes:
- Outlet: Acts as a placeholder for rendering the matched child route's component.
- Header and Footer: These components provide consistent navigation and information across pages.
*/
