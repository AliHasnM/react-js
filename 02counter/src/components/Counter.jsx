import { useState } from "react";

const Counter = () => {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
    console.log("Add Value:", counter);
  };
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

export default Counter;

// Notes:
/*
const addValue = ()=> {
  setCounter = counter + 1;
  setCounter = counter + 1;
  setCounter = counter + 1;
  setCounter = counter + 1;
}
es function se button par click krne se value 1 by 1 hi increase hogi data bundler ki form me jata hai tu ye sab same working kr raha hai tu es leye value one by one hi increase hogi

const addValue = ()=> {
  setCounter = (counter) => counter + 1;
  setCounter = (counter) => counter + 1;
  setCounter = (counter) => counter + 1;
  setCounter = (counter) => counter + 1;
}
es function se button par click krne se value me 4+ value add hogi kue k es me hum counter ki update value ko fetch kr rahy hain aur fr os me add kr rahy hain
*/
