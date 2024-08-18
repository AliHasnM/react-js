import { useEffect, useState } from "react";
import { ThemeProvider } from "./contexts/Theme";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";
import "./App.css";

const App = () => {
  // State to manage the current theme mode (light or dark)
  const [themeMode, setThemeMode] = useState("light");

  // Function to set the theme to light
  const lightTheme = () => {
    setThemeMode("light");
  };

  // Function to set the theme to dark
  const darkTheme = () => {
    setThemeMode("dark");
  };

  // Effect to apply the theme to the HTML document based on the themeMode state
  useEffect(() => {
    // Remove existing theme classes and add the current theme class
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    // ThemeProvider to provide theme context to child components
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          {/* Theme button to toggle between light and dark themes */}
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          {/* Card component to display a product */}
          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;

/*
    Notes:
    Is code ka maksad ye hai ke:
    1. App component ke andar theme management aur card display functionality provide ki gayi hai.
    2. Theme ko toggle karne ke liye `ThemeBtn` component use hota hai jo light aur dark themes ke beech switch karta hai.
    3. `Card` component ek product card ko display karta hai aur isme theme ke hisaab se styles apply hoti hain.
    4. `useEffect` hook ke zariye theme changes ko document ke HTML class mein apply kiya jata hai.
*/
