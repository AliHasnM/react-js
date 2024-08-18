// useTheme hook ko import kar rahe hain taake ThemeContext ko access kar sakein
import useTheme from "../contexts/Theme";

// ThemeBtn component banate hain jo ke theme toggle button ka kaam karega
export default function ThemeBtn() {
  // themeMode, lightTheme, aur darkTheme functions ko useTheme hook se extract kar rahe hain
  const { themeMode, lightTheme, darkTheme } = useTheme();

  // onChangeBtn function define kar rahe hain jo ke checkbox ki state change hone par theme ko toggle karega
  const onChangeBtn = (e) => {
    const darkModeStatus = e.currentTarget.checked;

    if (darkModeStatus) {
      darkTheme(); // darkTheme function call karte hain agar dark mode activate ho jaye
    } else {
      lightTheme(); // lightTheme function call karte hain agar light mode activate ho jaye
    }
  };

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        value=""
        className="sr-only peer"
        onChange={onChangeBtn}
        checked={themeMode === "dark"} // Checkbox ko current theme ke hisaab se checked status dete hain
      />
      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      <span className="ml-3 text-sm font-medium text-gray-900">
        Toggle Theme
      </span>
    </label>
  );
}

/*
    Notes:
    Is code ka maksad ye hai ke:
    1. useTheme hook ko import kar ke hum ThemeContext se themeMode aur theme switch functions (lightTheme aur darkTheme) ko access karte hain.
    2. onChangeBtn function ko define karne ka maksad ye hai ke jab user toggle button ko click kare, to theme change ho jaye.
    3. Checkbox ko themeMode ke hisaab se set kiya jata hai, agar current theme dark hai to checkbox checked dikhai deta hai.
    4. ThemeBtn component ko use kar ke hum user ko apne application ka theme (light ya dark) asani se change karne ka option dete hain.
*/
