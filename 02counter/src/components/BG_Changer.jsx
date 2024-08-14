import { useState } from "react";

// BG_Changer component definition
const BG_Changer = () => {
  // useState hook to manage the background color, initially set to "olive"
  const [color, setColor] = useState("olive");

  return (
    // Main div with dynamic background color
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      {/* Button container positioned at the bottom center of the screen */}
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          {/* Button to change background color to red */}
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")}
          >
            Red
          </button>
          {/* Button to change background color to green */}
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
            onClick={() => setColor("green")}
          >
            Green
          </button>
          {/* Button to change background color to blue */}
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
        </div>
      </div>
    </div>
  );
};

// Exporting the BG_Changer component as default
export default BG_Changer;

// Notes
// 1. useState Hook: is component mein useState hook ka istemal kiya gaya hai background color ko manage karne ke liye. Initial value "olive" set ki gayi hai.

// 2. Dynamic Background Color: Div ka background color dynamically set hota hai `color` state ke base par. Har button click par yeh color update hota hai.

// 3. onClick Event: onClick event ke andar ek callback function use kiya gaya hai jo setColor ko call karta hai aur background color change karta hai.

// 4. onClick Function Handling:
// i. `onClick={() => setColor("red")}`: Is case mein ek anonymous function banaya gaya hai jo setColor function ko call karta hai "red" value ke sath.
// ii. `onClick(setColor)`: Is tarah se direct function ka reference dena valid nahi hota, kyunki yeh execute nahi hoga.
// iii. `onClick(setColor())`: Is tarah se function ka result milta hai, lekin yeh immediately execute ho jata hai, jo ke hamein nahi chahiye.
