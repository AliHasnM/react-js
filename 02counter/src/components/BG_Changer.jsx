import { useState } from "react";

const BG_Changer = () => {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
            onClick={() => setColor("green")}
          >
            Green
          </button>
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

export default BG_Changer;

// Notes
// onClick event ko ik function chahiye hota hai.
// onClick(() => setColor("red")) es me ik callback function hai aur os k inder b ik funciton hai setColor with parameter red value k sath.

// onClick(setColor) esy ye use nhi ho sakta kue k abi just function ka reference dia hai.
// onClick(setColor()) esy b use nhi ho sakta kue k esy is k pass function ki return value aie gi.
