# Theme Management App with Context API

This project is a simple React app that demonstrates the use of Context API to manage light and dark themes across different components. It features a product card and a button to toggle between the light and dark modes.

## Features

- **Light/Dark Theme Toggle**: Users can switch between light and dark modes using a button.
- **Product Display**: The app shows a sample product card, where the theme changes dynamically based on the selected mode.
- **Context API**: The app uses Context API to manage theme data and make it accessible across multiple components.

## Folder Structure

```
src/
  ├── components/
  │     ├── Card.jsx
  │     └── ThemeBtn.jsx
  ├── contexts/
  │     └── Theme.js
  ├── App.jsx
  ├── App.css
  └── index.js
```

## How It Works

### 1. **App Component (`App.jsx`)**

This is the main component of the application. It manages the theme state and provides the theme functions (`lightTheme` and `darkTheme`) to the rest of the app using the `ThemeProvider`.

```jsx
import { useEffect, useState } from "react";
import { ThemeProvider } from "./contexts/Theme";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";
import "./App.css";

const App = () => {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => setThemeMode("light");
  const darkTheme = () => setThemeMode("dark");

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>
          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
```

### 2. **Theme Context (`contexts/Theme.js`)**

The theme management logic is encapsulated in this file. It exports the `ThemeContext` and a custom hook `useTheme` to make the theme data accessible throughout the app.

```jsx
import { useContext, createContext } from "react";

export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
  return useContext(ThemeContext);
}
```

### 3. **Card Component (`components/Card.jsx`)**

This component displays a product card with theme-based styling. The card adjusts its appearance based on the current theme (light or dark).

```jsx
export default function Card() {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="/">
        <img
          className="p-8 rounded-t-lg"
          src="https://images.pexels.com/photos/18264716/pexels-photo-18264716/free-photo-of-man-people-laptop-internet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="product_image1"
        />
      </a>
      <div className="px-5 pb-5">
        <a href="/">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
          </h5>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
          <svg className="w-4 h-4 text-yellow-300 mr-1" ... />
          {/* More rating stars */}
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            $599
          </span>
          <a
            href="/"
            className="text-white bg-blue-700 hover:bg-blue-800 ..."
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
}
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/theme-management-app.git
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the app

```bash
npm start
```

## Technologies Used

- **React**: For building the UI components.
- **Context API**: For managing the theme state across the app.
- **Tailwind CSS**: For applying responsive and utility-first CSS styling.

## Notes

- The app toggles between light and dark themes using the `useState` and `useEffect` hooks.
- The Context API simplifies the sharing of theme data across components without prop drilling.
