/* eslint-disable no-unused-vars */
// Disables warning for unused variables, useful for props like `children` that might not be used in all cases.

/* eslint-disable react/prop-types */
// Disables PropTypes validation warnings, helpful in small or non-production projects.

const Button = ({
  children, // Button content (text or elements).
  type = "button", // Default type is "button"; prevents form submission if unspecified.
  bgColor = "bg-blue-600", // Default background color for consistent styling.
  textColor = "text-white", // Default text color for better contrast.
  className = "", // Allows custom classes for further customization.
  ...props // Spread additional props like `onClick` or `disabled`.
}) => {
  return (
    <button
      className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`}
      {...props} // Applies additional props dynamically.
    >
      {children} {/* Render button content dynamically. */}
    </button>
  );
};

export default Button;

/*
  Reason and Why Use:
  1. Default Props (`type`, `bgColor`, `textColor`): Ensures fallback values for usability and consistent styling.
  2. Reusability: Flexible component for buttons with dynamic styles and content.
  3. Spread Props (`...props`): Allows adding event handlers like `onClick` or attributes like `disabled` without modifying the component.
  4. Short and Scalable: Can easily extend for complex projects by adding more customization.
  */
