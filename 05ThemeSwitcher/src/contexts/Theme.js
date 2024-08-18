// useContext hook ko import kar rahe hain taake context ko access kar sakein
import { useContext } from "react";

// createContext method ko import kar rahe hain taake naya context banaya ja sake
import { createContext } from "react";

// ThemeContext create kar rahe hain jo ke theme related data store karega
export const ThemeContext = createContext({
  themeMode: "light", // Default theme mode "light" set kar rahe hain
  darkTheme: () => {}, // darkTheme function ke liye placeholder
  lightTheme: () => {}, // lightTheme function ke liye placeholder
});

// ThemeProvider ko ThemeContext.Provider se export kar rahe hain
export const ThemeProvider = ThemeContext.Provider;

// useTheme custom hook banate hain jo ke ThemeContext ko access karne ke liye use hota hai
export default function useTheme() {
  return useContext(ThemeContext);
}

/*
    Notes:
    Is code ka maksad ye hai ke:
    1. ThemeContext ko createContext method se is liye banaya gaya hai taake application mein theme related data aur functions ko manage kiya ja sake.
    2. ThemeProvider ko export karne ka faida ye hai ke hum apne application ke different components mein theme ko provide kar sakein.
    3. useTheme custom hook ko is liye banate hain taake asani se ThemeContext ko access kar sakein aur theme related functionality use kar sakein.
*/
