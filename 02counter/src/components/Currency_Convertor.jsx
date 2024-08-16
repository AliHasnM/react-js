import InputBox from "./InputBox"; // InputBox component is imported for user input fields.
import useCurrencyInfo from "../hooks/useCurrencyInfo"; // Custom hook to fetch currency information is imported.
import { useState } from "react"; // useState hook is imported to manage state.
import BackgroundImage from "/images/bgImage.jpg"; // Background image for the component is imported.

const Currency_Convertor = () => {
  const [amount, setAmount] = useState(0); // State for the amount to be converted.
  const [from, setFrom] = useState("usd"); // State for the currency to convert from.
  const [to, setTo] = useState("pkr"); // State for the currency to convert to.
  const [convertedAmount, setConvertedAmount] = useState(0); // State for the converted amount.

  const currencyInfo = useCurrencyInfo(from); // Fetches currency info based on the 'from' currency.

  const options = Object.keys(currencyInfo); // Creates a list of currency options from the fetched data.

  const swap = () => {
    setFrom(to); // Swaps the 'from' currency with 'to' currency.
    setTo(from); // Swaps the 'to' currency with 'from' currency.
    setConvertedAmount(amount); // Updates converted amount to the current amount.
    setAmount(convertedAmount); // Updates amount to the current converted amount.
  };

  const converter = () => {
    setConvertedAmount(amount * currencyInfo[to]); // Converts the amount based on the selected 'to' currency rate.
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{ backgroundImage: `url('${BackgroundImage}')` }} // Applies the background image.
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              converter(); // Calls the converter function on form submission.
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setAmount(currency)} // Handles changes in currency.
                onAmountChange={(amount) => {
                  setAmount(amount); // Updates the amount based on user input.
                }}
                selectCurrency={from} // Sets the selected 'from' currency.
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap} // Handles currency swap on button click.
              >
                Swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount} // Displays the converted amount.
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)} // Handles changes in currency.
                selectCurrency={to} // Sets the selected 'to' currency.
                amountDisable // Disables amount input in 'To' field.
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
              {/* Button displays conversion info */}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Currency_Convertor; // Exporting the component for use in other parts of the application.

// Current Currency API = "https://v6.exchangerate-api.com/v6/46fd3644ff5a00ca26de25bc/latest/USD"
// API link used for fetching the latest currency rates.

// Notes:
// Ye component React ka use kr k banaya gaya hai jisme user ko currency conversion ki facility milti hai.
// useState hook state management ke liye use kiya gaya hai, jo ke React me functional components me state handle krne ke liye hota hai.
// useCurrencyInfo ek custom hook hai jo currency ki information fetch krta hai API se.
// swap function currencies ko swap krta hai aur amount ko update krta hai.
// converter function conversion logic handle krta hai.
// Background image ko style prop k zariye set kiya gaya hai.
// Form ke submit hone par conversion perform hoti hai, aur swap button currencies ko swap krne ke liye use hota hai.
