import { useCallback, useEffect, useRef, useState } from "react";

// Password_Generator component definition
const Password_Generator = () => {
  // State to store the password length, default is 8
  const [length, setLength] = useState(8);
  // State to determine if numbers are allowed in the password
  const [numberAllowed, setNumberAllowed] = useState(false);
  // State to determine if special characters are allowed in the password
  const [characterAllowed, setCharacterAllowed] = useState(false);
  // State to store the generated password
  const [password, setPassword] = useState("");

  // Function to generate the password based on selected options
  const passwordGenerator = useCallback(() => {
    let pass = ""; // Initialize the password string
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; // Initial character set (letters)

    // Append numbers to the character set if numberAllowed is true
    if (numberAllowed) str += "0123456789";
    // Append special characters to the character set if characterAllowed is true
    if (characterAllowed) str += "!@#$%^&*()-_+=[]{}|~`";

    // Loop to generate the password of desired length
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1); // Get a random character
      pass += str.charAt(char); // Add it to the password
    }
    setPassword(pass); // Set the generated password to state
  }, [length, numberAllowed, characterAllowed, setPassword]);

  // Function to copy the generated password to the clipboard
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select(); // Select the password in the input field
    passwordRef.current?.setSelectionRange(0, 56); // Set the selection range
    window.navigator.clipboard.writeText(password); // Copy the password to the clipboard
  }, [password]);

  // useEffect hook to regenerate the password whenever length, numberAllowed, or characterAllowed changes
  useEffect(() => {
    passwordGenerator(); // Generate the password
  }, [length, numberAllowed, characterAllowed, passwordGenerator]);

  // useRef hook to reference the password input field
  const passwordRef = useRef(null);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
      <h1 className="text-3xl text-center text-white my-3 pt-4">
        Password Generator
      </h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passwordRef} // Attach the ref to this input field
        />
        <button
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          onClick={copyPasswordToClipboard} // Copy password on button click
        >
          Copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={56}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(e.target.value)} // Update length state on slider change
          />
          <label>Length:{length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((preValue) => !preValue); // Toggle numberAllowed state
            }}
          />
          <label htmlFor="numberInput">Number</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={characterAllowed}
            id="characterInput"
            onChange={() => {
              setCharacterAllowed((preValue) => !preValue); // Toggle characterAllowed state
            }}
          />
          <label htmlFor="characterInput">Character</label>
        </div>
      </div>
    </div>
  );
};

// Export the Password_Generator component as default
export default Password_Generator;

// Notes:
// 1. useState: Yeh hook component ke andar state manage karne ke liye use hota hai. Is code mein, yeh password ki length, numbers allowed hain ya nahi, special characters allowed hain ya nahi, aur jo password generate hua hai, unko manage karta hai.

// 2. useCallback: Yeh hook functions ko memoize karne ke liye hota hai taake unnecessary re-renders ya functions ke baar-baar re-creation se bacha ja sake. Yeh performance optimization ke liye kaafi useful hota hai.

// 3. useEffect: Yeh hook function components mein side effects run karne ke liye use hota hai. Is code mein, yeh tab automatically naya password generate karta hai jab length, numberAllowed, ya characterAllowed change hota hai.

// 4. useRef: Yeh hook ek DOM element ka reference banata hai taake us element ko directly manipulate kiya ja sake. Is code mein, yeh password input field ko reference karne ke liye use hota hai taake clipboard pe copy karna asaan ho.
