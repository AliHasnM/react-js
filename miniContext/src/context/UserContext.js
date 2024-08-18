// Importing React library to use its features
import React from "react";

// Creating a context object using React's createContext method
const UserContext = React.createContext();

// Exporting the UserContext so it can be used in other components
export default UserContext;

/*
    Notes:
    Ye code do cheezon ke liye use hota hai:
    1. React ko import karna is liye zaroori hai ke hum uske components aur methods ko apne app mein use kar sakein.
    2. createContext method se UserContext banaya jata hai, taake application ke different parts mein data share kar sakein bina props ke through pass karne ke.
    3. UserContext ko export is liye karte hain taake hum isko dusre components mein as a global state use kar sakein.
*/
