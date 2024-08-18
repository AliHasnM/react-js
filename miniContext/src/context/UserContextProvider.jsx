// UserContext ko import kar rahe hain jo ke ek context object hai
import UserContext from "./UserContext";

// useState hook ko import kar rahe hain jo ke component mein state manage karne ke liye use hota hai
import { useState } from "react";

// UserContextProvider ek component hai jo ke UserContext ke provider ka kaam karta hai
// children props ko pass karte hain taake iske andar ke components ko render kar sakein
// eslint-disable-next-line react/prop-types
const UserContextProvider = ({ children }) => {
  // user state ko define kar rahe hain aur usko set karne ke liye setUser function banate hain
  const [user, setUser] = useState(null);

  return (
    // UserContext.Provider component ke through value provide kar rahe hain jo ke user aur setUser functions hain
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// UserContextProvider component ko export kar rahe hain taake doosre components mein use kar sakein
export default UserContextProvider;

/*
    Notes:
    Is code ka maksad ye hai ke:
    1. UserContext ko import karne ka faida ye hai ke hum application mein global state maintain kar sakein.
    2. useState hook state manage karne ke liye use hota hai, jahan user ka data store hota hai.
    3. UserContextProvider component context ko provide karne ke liye hai, taake kisi bhi component mein user state ko access aur update kar sakein.
*/
