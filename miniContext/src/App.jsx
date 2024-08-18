// Login component ko import kar rahe hain jo ke user ka login form handle karega
import Login from "./components/Login";

// Profile component ko import kar rahe hain jo ke user ka profile show karega
import Profile from "./components/Profile";

// UserContextProvider ko import kar rahe hain jo ke context ko provide karega
import UserContextProvider from "./context/UserContextProvider";

// App component banate hain jo ke pura application manage karega
const App = () => {
  return (
    // UserContextProvider ke andar Login aur Profile components ko wrap karte hain
    <UserContextProvider>
      <h1>Context API</h1>
      {/* Login component render hota hai */}
      <Login />
      {/* Profile component render hota hai */}
      <Profile />
    </UserContextProvider>
  );
};

// App component ko export kar rahe hain taake application ke entry point par use kar sakein
export default App;

/*
    Notes:
    Is code ka maksad ye hai ke:
    1. Login aur Profile components ko import kar ke App component mein use karte hain, taake user login aur profile dekh sake.
    2. UserContextProvider ko is liye use karte hain ke context ke through data share kar sakein bina props ko pass kiye hue.
    3. App component pura application ko structure dene ke liye banaya gaya hai, jisme UserContextProvider ke andar Login aur Profile components wrap kiye gaye hain.
*/
