import { useId } from "react"; // useId hook is imported to generate unique IDs for input elements.

const InputBox = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [], // Default value for currency options is an empty array.
  selectCurrency = "pkr", // Default selected currency is "pkr".
  amountDisable = false, // Flag to disable the amount input field.
  currencyDisable = false, // Flag to disable the currency dropdown.
  className = "", // Custom class names can be passed for styling.
}) => {
  const amountInputId = useId(); // Generates a unique ID for the input field.

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label
          className="text-black/40 mb-2 inline-block"
          htmlFor={amountInputId} // Associates the label with the input field.
        >
          {label}
        </label>
        <input
          id={amountInputId} // Sets the unique ID for the input field.
          type="number"
          className="outline-none w-full bg-transparent py-1.5"
          placeholder="Amount"
          disabled={amountDisable} // Disables the input field if amountDisable is true.
          value={amount} // Sets the input value to the passed amount.
          onChange={
            (e) => onAmountChange && onAmountChange(Number(e.target.value)) // Calls onAmountChange if it's provided.
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency} // Sets the selected currency in the dropdown.
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)} // Calls onCurrencyChange if it's provided.
          disabled={currencyDisable} // Disables the dropdown if currencyDisable is true.
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}{" "}
              {/* Displays the currency in uppercase */}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default InputBox; // Exports the InputBox component for use in other parts of the application.

// Notes:
// InputBox component ko amount aur currency type input field ke liye use kiya jata hai.
// useId hook unique IDs generate krne ke liye use hota hai, jo ke accessibility ke liye important hai.
// amountDisable aur currencyDisable flags ko use kr k respective fields ko disable kiya ja sakta hai.
// Currency options ko map karke dropdown menu me display kiya jata hai, jisme se user select kar sakta hai.
// className prop ko pass karke component ko customize kiya ja sakta hai.
