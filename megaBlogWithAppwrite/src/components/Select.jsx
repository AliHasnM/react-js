/* eslint-disable react/prop-types */
import React from "react";
import { useId } from "react";

// Select component: A reusable dropdown component
const Select = ({ label, options = [], className = "", ...props }, ref) => {
  // Generate a unique ID for the select element
  const id = useId();

  return (
    <div className="w-full">
      {/* Render label if provided */}
      {label && (
        <label htmlFor={id} className="">
          {label}
        </label>
      )}
      <select
        {...props} // Spread additional props for flexibility
        id={id} // Associate label with select element
        ref={ref} // Forwarded ref for parent component access
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`} // Styling
      >
        {/* Map through options to render dropdown items */}
        {options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default React.forwardRef(Select);

/* 
Why use these features:
1. useId: Ensures unique ID for accessibility and avoids conflicts in component rendering.
2. React.forwardRef: Allows passing a ref to the Select component, useful for parent control.
3. Flexible Props: Supports dynamic attributes, increasing reusability.
4. Dynamic Options: Renders dropdown items based on the provided options array.
5. Styled Component: Provides consistent design with Tailwind CSS classes.
*/
