/* eslint-disable react/prop-types */
const Container = ({ children }) => {
  return <div className="w-full max-w-7xl mx-auto px-4">{children}</div>;
};

export default Container;

/*
Reason and Why Use:
1. **Responsiveness**: The class `max-w-7xl` ensures the container doesn't exceed the max width of 7xl, while `w-full` ensures it fills the entire width of the viewport. `mx-auto` centers the content horizontally.
2. **Padding**: `px-4` adds horizontal padding to the container, ensuring that content doesn’t touch the edges of the screen or the container.
3. **Modularity**: This component is reusable and allows any child elements to be passed in dynamically, making it flexible for different layouts.
4. **Clean Layout**: The container provides a structured and clean layout for placing content inside the app, centralizing it and maintaining consistent margins.
*/
