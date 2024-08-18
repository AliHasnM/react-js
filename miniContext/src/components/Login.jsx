// useContext hook ko import kar rahe hain taake context ko access kar sakein
import { useContext } from "react";

// useState hook ko import kar rahe hain jo ke component ke state ko manage karne ke liye use hota hai
import { useState } from "react";

// UserContext ko import kar rahe hain jo ke global state provide karne ke liye banaya gaya tha
import UserContext from "../context/UserContext";

// Login component banate hain jo ke login form ko handle karega
const Login = () => {
  // username aur password state ko manage kar rahe hain
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // UserContext se setUser function ko access kar rahe hain
  const { setUser } = useContext(UserContext);

  // handleSubmit function form submit hone par user ko set karta hai
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

// Login component ko export kar rahe hain taake dusri jagah use kar sakein
export default Login;

/*
    Notes:
    Is code ka maksad ye hai ke:
    1. useContext hook ko is liye use karte hain taake hum UserContext mein jo data hai usko access kar sakein.
    2. useState hook se hum form ke fields (username aur password) ke values ko manage karte hain.
    3. handleSubmit function user ka data setUser function ke zariye context mein set karta hai, taake baqi application mein ye data accessible ho.
    4. Login component ko banane ka maksad ye hai ke user apna username aur password enter kar sake aur us data ko context mein store kar sake.
*/
