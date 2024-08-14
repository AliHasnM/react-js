/* eslint-disable react/prop-types */

// Card component definition with props for actor details
const Card = ({
  actorName, // Actor's name to display
  actorAbout, // Short description about the actor
  actorImage, // Image of the actor
  btnText = "Visit Profile", // Button text, default is "Visit Profile"
}) => {
  return (
    <div className="relative h-[400px] w-[300px]">
      {/* Actor's image displayed in the background */}
      <img
        src={actorImage}
        alt="Actor Image"
        className="z-0 h-full w-full object-cover"
      />
      {/* Gradient overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        {/* Display actor's name */}
        <h1 className="text-lg font-semibold text-white">{actorName}</h1>
        {/* Display actor's description */}
        <p className="mt-2 text-sm text-gray-300">{actorAbout}</p>
        {/* Button with optional text */}
        <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
          {btnText} →
        </button>
      </div>
    </div>
  );
};

// Exporting the Card component as default
export default Card;

// Notes:
// 1. Card Component: Yeh ek reusable component hai jo ke kisi bhi actor ke naam, description, aur image ko showcase karne ke liye use hota hai.

// 2. Props: Card component me 4 props use ho rahe hain: `actorName`, `actorAbout`, `actorImage`, aur `btnText`. Button text ko default "Visit Profile" set kiya gaya hai agar koi custom text na diya jaye.

// 3. CSS Classes: Tailwind CSS classes ka istemal kiya gaya hai styling ke liye. Yeh classes card ko responsive aur visually appealing banati hain, jaise ke gradient overlay aur text styling.

// 4. Conditional Rendering: Button text ki rendering conditional hai, yaani agar koi custom text diya gaya ho to wo show hoga, warna default "Visit Profile" show hoga.

// 5. Gradient Overlay: Actor ke image par ek gradient overlay lagayi gayi hai taake text clearly visible ho.

// 6. Reusable Component: Yeh component alag-alag actors ke liye use ho sakta hai, simply props ko customize karke.
