// useContext hook ko import kar rahe hain taake context ko access kar sakein
import { useContext } from "react";

// UserContext ko import kar rahe hain jo ke global state ko handle karta hai
import UserContext from "../context/UserContext";

// Profile component banate hain jo ke user ka profile show karega
const Profile = () => {
  // UserContext se user object ko access kar rahe hain
  const { user } = useContext(UserContext);

  // Agar user login nahi hua to "Please Login" message show hoga
  if (!user) return <div>Please Login</div>;

  // Agar user login hua ho to uska username show hoga
  return <div>Welcome {user.username}</div>;
};

// Profile component ko export kar rahe hain taake dusri jagah use kar sakein
export default Profile;

/*
    Notes:
    Is code ka maksad ye hai ke:
    1. useContext hook se hum UserContext ko access karte hain taake user ka data mil sake.
    2. Agar user login nahi hua to "Please Login" ka message show hota hai, taake user ko pata chale ke pehle login karna zaroori hai.
    3. Agar user login ho chuka hai to uska username display hota hai, jo ke user ko welcome feel karata hai.
    4. Profile component user ka profile data show karne ke liye banaya gaya hai.
*/
