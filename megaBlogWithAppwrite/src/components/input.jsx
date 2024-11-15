import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  // eslint-disable-next-line react/prop-types
  { label, type = "text", className = "", ...props },
  ref
) {
  const id = useId();
  return (
    <div className="w-full">
      {label && (
        <label className="block mb-1" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        type={type}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        ref={ref}
        {...props}
        id={id}
      />
    </div>
  );
});

export default Input;

/*
Reason and Why Use:
1. `React.forwardRef`: Allows the parent component to pass a `ref` to the input, useful for focusing or accessing input.
2. `useId`: Generates a unique ID for each input, ensuring accessibility and avoiding ID conflicts in forms.
3. Default Props (`type`, `className`): Provide fallback values to ensure the component works as expected without explicit props.
4. Reusability: Component is flexible and reusable for different form fields (e.g., text, password, email).
5. Spread Props (`...props`): Allows passing additional props like `placeholder`, `value`, `onChange`, making it highly customizable.
*/
