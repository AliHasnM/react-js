/** @type {import('tailwindcss').Config} */
export default {
  // Specify the paths to all of the template files
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  // Enable dark mode using class strategy
  darkMode: "class",

  theme: {
    // Extend the default theme configuration here
    extend: {},
  },

  // Add any Tailwind CSS plugins here
  plugins: [],
};

/*
    Notes:
    Is configuration file ka maksad ye hai ke:
    1. `content` property mein un paths ko specify kiya gaya hai jahan se Tailwind CSS classes ko scan karna hai.
    2. `darkMode` property ko `"class"` par set kiya gaya hai, jo ke CSS classes ke zariye dark mode ko enable karta hai.
    3. `theme` section mein default theme ko extend karne ka option diya gaya hai agar zaroorat ho.
    4. `plugins` array ko empty chhoda gaya hai, yahan additional plugins ko add kiya ja sakta hai agar zaroorat ho.
*/
