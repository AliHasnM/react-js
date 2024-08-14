import { useState } from "react";

// Counter component definition
const Counter = () => {
  // useState hook to manage counter value, initialized to 0
  let [counter, setCounter] = useState(0);

  // Function to increment the counter value by 1, only if it's less than 20
  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
    console.log("Add Value:", counter);
  };

  // Function to decrement the counter value by 1, only if it's greater than 0
  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
    console.log("Remove Value:", counter);
  };

  return (
    <>
      <h1>02 Project || Counter</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
};

// Exporting the Counter component as default
export default Counter;

// Notes:
/*
const addValue = () => {
  setCounter(counter + 1);
  setCounter(counter + 1);
  setCounter(counter + 1);
  setCounter(counter + 1);
}
Is function se jab button par click hota hai, to value 1 by 1 hi increase hogi. Kyunki data bundler ki form mein jata hai, aur yeh sab same working karta hai, isliye value one by one hi increase hogi.

const addValue = () => {
  setCounter((counter) => counter + 1);
  setCounter((counter) => counter + 1);
  setCounter((counter) => counter + 1);
  setCounter((counter) => counter + 1);
}
Is function se jab button par click hota hai, to value mein 4+ increase hogi. Kyunki hum counter ki updated value ko fetch kar rahay hain aur phir usme add kar rahay hain.
*/

// Notes:
// useState Hook: Counter value ko manage karne ke liye useState hook ka istemal kiya gaya hai. Iska initial value 0 set kiya gaya hai.

// addValue Function: Is function mein counter value ko 1 se increment kiya jata hai, lekin sirf uss waqt jab counter 20 se chhota hota hai.

// removeValue Function: Is function mein counter value ko 1 se decrement kiya jata hai, lekin sirf uss waqt jab counter 0 se zyada hota hai.

// Conditional Logic: addValue aur removeValue functions mein conditions lagayi gayi hain taake counter value specific range mein rahe.

// Event Handling: Button clicks par addValue aur removeValue functions ko trigger kiya jata hai.
