import AddTodo from "./components/AddTodo"; // Imports the AddTodo component for adding new todos
import Todos from "./components/Todos"; // Imports the Todos component to display the list of todos
import { Provider } from "react-redux"; // Imports Provider to wrap the app with Redux store access
import { store } from "./app/store"; // Imports the configured Redux store

const App = () => {
  return (
    // Wraps the app in the Provider component, making the Redux store available to all child components
    <Provider store={store}>
      <div className="bg-zinc-900 px-16 h-screen">
        {/* Title section */}
        <h1 className="text-3xl text-white font-bold underline text-center pt-8">
          Learn About Redux Toolkit Todo App
        </h1>
        {/* Form component for adding new todos */}
        <AddTodo />
        {/* List component displaying current todos */}
        <Todos />
      </div>
    </Provider>
  );
};

export default App;
