import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({}); // Initializes state to store currency data.

  useEffect(() => {
    // Fetch request for getting currency data
    fetch(
      `https://v6.exchangerate-api.com/v6/46fd3644ff5a00ca26de25bc/latest/${currency}`
    )
      .then((res) => res.json()) // Convert response to JSON
      .then((res) => {
        setData(res.conversion_rates); // Set the data to state
      })
      .catch((error) => console.error("Error fetching data:", error)); // Error handling
  }, [currency]); // Effect depends on 'currency' value

  console.log(data); // Debugging line to check the fetched data
  return data; // Return the fetched data
}

export default useCurrencyInfo; // Exports the custom hook for use in other components.

// Notes:
// useCurrencyInfo custom hook currency data ko fetch krta hai aur component ke state me set krta hai.
// useEffect hook use kiya gaya hai data fetch krne ke liye aur 'currency' dependency ke basis par re-run hota hai.
// Fetch API se currency rates retrieve kiye jate hain aur response ko JSON me convert karke state me set kiya jata hai.
// Error handling ki gayi hai taake koi issue aaye to console me error display ho.
// Debugging ke liye data ko console me log kiya gaya hai, jo development me madadgar hota hai.
